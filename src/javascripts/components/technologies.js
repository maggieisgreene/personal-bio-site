import 'bootstrap';
import techData from '../helpers/data/techData';

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint;
};

const printTech = () => {
  techData.getTech()
    .then((techs) => {
      techs.forEach((tech) => {
        let domString = '';
        if (tech) {
          domString += `
          <div class="card techs col-2">
            <a class="tech-image">${tech.imageTag}</a>
            <div class="card-body">
              <h5 class="card-title tech-name">${tech.name}</h5>
            </div>
          </div>
          `;
        }
        printToDom(domString, 'technologiesPage');
      });
    })
    .catch((errorFromGetTech) => console.error(errorFromGetTech));
};

export default { printTech };
