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
                  <h3>${project.title}</h3>
                  <h4>${project.description}</h4>
                  <p>${project.technologiesUsed}</p>
              </div>
            `;
        }
        printToDom(domString, 'projectsPage');
      });
    })
    .catch((error) => console.error(error));
};

export default { createProjectCards };
