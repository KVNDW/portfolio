const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const project4 = document.getElementById('project4');
const project5 = document.getElementById('project5');
const project6 = document.getElementById('project6');


document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/resources/files/data.json")
        .then(response => response.json())
        .then(data => {

            //Info Container
            const info = document.querySelector('.right');

            const titleText = document.createElement("h2");
            titleText.textContent = data.infotitel;

            const text = document.createElement("div");
            text.textContent = data.infotext;

            info.appendChild(titleText);
            info.appendChild(text);

            //Project Container

            const project1titel = document.createElement("h3")
            project1titel.textContent = data.projekttitel1;

            const project1image = document.createElement("img");
            project1image.src = "assets/resources/images/ip6.png";
            project1image.alt = "ip6";

            const project1text = document.createElement("div")
            project1text.textContent = data.projektinfo1;

            const project1button = document.createElement("button");
            project1button.textContent = data.projektlink1;
            project1button.onclick = () => {

                    window.open('assets/pages/project1.html?pdf=IP6', '_blank');

            };

            project1.appendChild(project1titel);
            project1.appendChild(project1image);
            project1.appendChild(project1text);
            project1.appendChild(project1button);

            ////////////////////////////////////////////

            const project2titel = document.createElement("h3")
            project2titel.textContent = data.projekttitel2

            const project2text = document.createElement("div")
            project2text.textContent = data.projektinfo2

            project2.appendChild(project2titel);
            project2.appendChild(project2text);

            ////////////////////////////////////////////

            const project3titel = document.createElement("h3")
            project3titel.textContent = data.projekttitel3

            const project3text = document.createElement("div")
            project3text.textContent = data.projektinfo3

            project3.appendChild(project3titel);
            project3.appendChild(project3text);

            ////////////////////////////////////////////

            const project4titel = document.createElement("h3")
            project4titel.textContent = data.projekttitel4

            const project4text = document.createElement("div")
            project4text.textContent = data.projektinfo4

            project4.appendChild(project4titel);
            project4.appendChild(project4text);

            ////////////////////////////////////////////

            const project5titel = document.createElement("h3")
            project5titel.textContent = data.projekttitel5

            const project5text = document.createElement("div")
            project5text.textContent = data.projektinfo5

            project5.appendChild(project5titel);
            project5.appendChild(project5text);

            ////////////////////////////////////////////

            const project6titel = document.createElement("h3")
            project6titel.textContent = data.projekttitel6

            const project6text = document.createElement("div")
            project6text.textContent = data.projektinfo6

            project6.appendChild(project6titel);
            project6.appendChild(project6text);

            ////////////////////////////////////////////

        })
        .catch(error => console.error("Error loading JSON:", error));
});