import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects';

const bio = document.getElementById('bioPage');
const technologies = document.getElementById('technologiesPage');
const projectsPage = document.getElementById('projectsPage');

document.body.onload = () => {
  technologies.style.display = 'none';
  projectsPage.style.display = 'none';
};

document.body.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'navToBio') {
    bio.style.display = '';
    technologies.style.display = 'none';
    projectsPage.style.display = 'none';
  } else if (event.target.id === 'navToTechnologies') {
    bio.style.display = 'none';
    technologies.style.display = '';
    projectsPage.style.display = 'none';
  } else if (event.target.id === 'navToProjects') {
    bio.style.display = 'none';
    technologies.style.display = 'none';
    projectsPage.style.display = '';
  }
});

const init = () => {
  projects.createProjectCards();
};

init();
