var cronyScript = document.createElement("SCRIPT");
// Remove this line if socket.io is not needed
cronyScript.src = "https://cdn.socket.io/4.4.1/socket.io.min.js";
cronyScript.type = "text/javascript";
// Remove the script element if socket.io is not needed
// document.getElementsByTagName("HEAD")[0].appendChild(cronyScript);

const PORT = 3001;
// const serverURL = `http://localhost:${PORT}`

// const serverURL = 'https://cloudexpress-backend.onrender.com'   //Final backend
const serverURL = 'https://230ab316.cloudexpress-frontend.pages.dev' //Cloudflare

// let sessionID;

// async function getSessionID() {
//   await fetchMaxInterval();
// }

// Call getSessionID() once to fetch sessionID
// getSessionID();

window.cronyWidget = function (customConfig) {
  var { token, apiServer } = customConfig; // Remove unused variables

  var events = [];
  console.log("crony script initiated.....");

  rrweb.record({
    emit(event) {
      console.log(event);
      events.push(event);
    },
  });

  async function saveEvents() {
    try {
      const body = JSON.stringify(events);
      events = []; // Clear events after sending
  
      const response = await fetch(`${serverURL}/api/last-record`, 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
  
      if (response.ok) {
        console.log('Event sent successfully', response);
      } else {
        console.error('Failed to send event:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending event:', error);
    }
  }

  // Save events periodically
  setInterval(saveEvents, 10 * 1000);

};

async function deleteFolder() {
  try {
    const response = await fetch(`${serverURL}/api/delete-folder`, {
      method: 'DELETE'
    });

  } catch (error) {
    console.error('Error deleting folder:', error);
  }
}


window.onload = async function () {
  await deleteFolder();
};
