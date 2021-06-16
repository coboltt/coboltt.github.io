const projectDisplay = document.querySelector('.project-content-container__about-us')
const historyDisplay = document.querySelector('.history-content-container__about-us')

const bntProject = document.querySelector('.btn-switch-page-project__about-us')
const bntHistory = document.querySelector('.btn-switch-page-history__about-us')

const fadeIn = {
    history: 'remove',
    project: 'add',
    bntHistory: 'remove',
    bntProject: 'add'
}

const fadeOut = {
    history: 'add',
    project: 'remove',
    bntHistory: 'add',
    bntProject: 'remove'
}

function fadeToggle(object) {
    historyDisplay.classList[object.history]("section--visable");
    projectDisplay.classList[object.project]("section--visable");
    bntHistory.classList[object.bntHistory]("btn-switch-page--active");
    bntProject.classList[object.bntProject]("btn-switch-page--active");
}

bntProject.addEventListener('click', () => {
    fadeToggle(fadeIn)
})

bntHistory.addEventListener('click', () => {
    fadeToggle(fadeOut)
})
