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
          <div class="project-card text-center col-6">
            <div class="card">
              <img src="${project.screenshot}" class="card-img-top image rounded" alt="Image of ${project.title}">
                <div class="card-body">
                  <h2 class="card-title">${project.title}</h2>
                  <p class="card-text">${project.technologiesUsed}</p>
                  <a href=${project.url} target="_blank" role="button" class="btn btn-light deployed">Deployed</a>
                  <a href=${project.githubUrl} target="_blank" role="button" class="btn btn-light github">Github</a>
                </div>
            </div>
          </div>`;
        }
        printToDom(domString, 'projectsPage');
      });
    })
    .catch((error) => console.error(error));
};

export default { createProjectCards };
