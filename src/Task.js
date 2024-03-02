

class Task {
  done = false;
  // Unique identifier
  id = Date.now();
  constructor(title, description, dueDate, priority, project) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._project = project;
  }

  set title(title) {
    this._title = title;
  }
  get title() {
    return this._title;
  }

  set description(description) {
    this._description = description;
  }
  get description() {
    return this._description;
  }

  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }
  get dueDate() {
    return this._dueDate;
  }

  set priority(priority) {
    this._priority = priority;
  }
  get priority() {
    return this.priority;
  }

  set project(project) {
    this._project = project;
  }
  get project() {
    return this._project;
  }

  get id() {
    return this.id;
  }

  done() {
    this.done = true;
  }
  undone() {
    this.done = false;
  }
}