const Task = require('./Task');

class Bug extends Task {
  static MAX_SEVERITY = 3;

  static MIN_SEVERITY = 1;

  static bugs = { 1: 0, 2: 0, 3: 0 };

  constructor(
    title,
    assignee,
    severity = Bug.MIN_SEVERITY,
    stepsToReproduce = 'неизвестно',
  ) {
    super(title, assignee);
    this.severity = severity;
    this.stepsToReproduce = stepsToReproduce;
    Bug.bugs[severity] += 1;
    // FrontendBug.bugs <--- наследуется ли static?
  }

  log() {
    console.log(`Bug(${this.severity}): ${this.title}`);
  }

  fix() {
    this.status = 'завершено';
    Bug.bugs[this.severity] -= 1;
  }
}

module.exports = Bug;
