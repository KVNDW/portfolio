document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/resources/files/data.json") 
        .then(response => response.json())
        .then(data => {
            const info = document.querySelector('.right');
        

            const titleText = document.createElement("h2");
            titleText.textContent = data.infotitel; 

            const text = document.createElement("div");
            text.textContent = data.infotext; 

            
            info.appendChild(titleText);
            info.appendChild(text);
        })
        .catch(error => console.error("Error loading JSON:", error));
});