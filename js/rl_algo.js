async function fetchAndApplyStyles() {

    const PORT = 3001;
    // const serverURL = `http://localhost:${PORT}`
    const serverURL = 'https://cloudexpress-backend.onrender.com'   //Final backend

    try {
        const response = await fetch(`${serverURL}/random-style`);
        const data = await response.json();
        console.log(data)

        const elements = document.querySelectorAll('.menu__item-title');
        const anchortags = document.querySelector('a');
        const body = document.querySelector('body');

        body.style.backgroundColor = data['backgroundColor'];
        body.style.backgroundImage = data['backgroundImage'];
        body.style.backgroundPosition = data['backgroundPosition'];
        body.style.backgroundRepeat = data['backgroundRepeat'];
        body.style.backgroundSize = data['backgroundSize'];


        for(const element of elements){
            // element.style.fontSize = data['fontSize'];
            element.style.color = data['color'];
            // element.style.height = data['height'];
            // element.style.width = data['width'];
            element.style.fontFamily = data['fontFamily'];
            element.style.fontWeight = data['fontWeight'];
            // element.style.fontVariant = data['fontVariant'];
            // element.style.lineHeight = data['lineHeight'];
            element.style.letterSpacing = data['letterSpacing'];
            element.style.wordSpacing = data['wordSpacing'];
            // element.style.textAlign = data['textAlign'];
            element.style.textDecoration = data['textDecoration'];
            // element.style.textTransform = data['textTransform'];
        }


    } catch (error) {
        console.error('Error fetching or applying styles:', error);
    }
}

window.onload = function () {
    fetchAndApplyStyles(); // Replace with your function name
};
