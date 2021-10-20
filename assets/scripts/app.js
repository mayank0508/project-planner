class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {}
}

class App {
  static init() {
    // here we are passing the info about the actice and finished project list into the project list constructor
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
  }
}

App.static();
