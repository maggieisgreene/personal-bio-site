import 'bootstrap';
import projectsData from '../helpers/data/projectsData';

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint;
};

const createProjectCards = () => {
  projectsData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        let domString = '';
        if (project) {
          domString += `
              <div id="card">
                <img src=${project.screenshot} class="card-img-top" alt="Image of ${project.title}">
                  <h2>${project.title}</h2>
                  <h5>${project.description}</h5>
                  <p>${project.technologiesUsed}</p>
                  <div class="card-button-container">
                    <a href=${project.githubUrl} class="btn btn-light">Github</a>
                    <a href=${project.url} class="btn btn-light">Deployed</a>
                  </div>
              </div>
            `;
        }
        printToDom(domString, 'projectsPage');
      });
    })
    .catch((error) => console.error(error));
};

export default { createProjectCards };
