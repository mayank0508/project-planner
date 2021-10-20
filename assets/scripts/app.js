class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects)
  }
}

class App {
  static init() {
    // here we are passing the info about the actice and finished project list into the project list constructor
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
  }
}

App.init();
