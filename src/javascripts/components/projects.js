import 'bootstrap';

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint;
};

const createProjectCards = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    const project = arr[i];
    if (project.available === true) {
      domString += `
        <div id="card">
            <h3>${project.title}</h3>
            <h4>${project.description}</h4>
            <p>${project.technologiesUsed}</p>
        </div>
      `;
    }
  }
  printToDom(domString, 'projectsPage');
};

export default { createProjectCards };
