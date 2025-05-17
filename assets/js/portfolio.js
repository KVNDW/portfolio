const projectIDs = ["project1", "project2", "project3", "project4", "project5", "project6"];


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

            projectIDs.forEach((projectID, index) => {
                    const projectContainer = document.getElementById(projectID);

                            const projectTitle = document.createElement("h3");
                            projectTitle.textContent = data[`projekttitel${index + 1}`];

                            const projectText = document.createElement("div");
                            projectText.textContent = data[`projektinfo${index + 1}`];

                            const projectImage = document.createElement("img");
                            projectImage.src = `assets/resources/images/p${index + 1}.png`;
                            projectImage.alt = `p${index + 1}`;

                            const projectButton = document.createElement("button");
                            projectButton.textContent = data[`projektlink${index + 1}`];
                            projectButton.onclick = () => {
                                    window.open(`assets/pages/project1.html?pdf=P${index + 1}`, '_blank');
                            };

                            // Append Elements to Project Container
                            projectContainer.appendChild(projectTitle);
                            projectContainer.appendChild(projectImage);
                            projectContainer.appendChild(projectText);
                            projectContainer.appendChild(projectButton);

            });

        })
        .catch(error => console.error("could not load json:", error));
});