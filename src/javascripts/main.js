import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects';

const home = document.getElementById('homePage');
const bio = document.getElementById('bioPage');
const technologies = document.getElementById('technologiesPage');
const projectsPage = document.getElementById('projectsPage');

document.body.onload = () => {
  bio.style.display = 'none';
  technologies.style.display = 'none';
  projectsPage.style.display = 'none';
};

document.body.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'navToBio') {
    bio.style.display = '';
    home.style.display = 'none';
    technologies.style.display = 'none';
    projectsPage.style.display = 'none';
  } else if (event.target.id === 'navToTechnologies') {
    bio.style.display = 'none';
    home.style.display = 'none';
    technologies.style.display = '';
    projectsPage.style.display = 'none';
  } else if (event.target.id === 'navToProjects') {
    bio.style.display = 'none';
    home.style.display = 'none';
    technologies.style.display = 'none';
    projectsPage.style.display = '';
  } else if (event.target.id === 'navToHome') {
    bio.style.display = 'none';
    home.style.display = '';
    technologies.style.display = 'none';
    projectsPage.style.display = 'none';
  }
});

const init = () => {
  projects.createProjectCards();
};

init();
