const Task = require('./Task');

class FeatureRequest extends Task {
  // priority: 1 - 5
  constructor({ assignee, priority = 3, title }) {
    super(title, assignee);
    this.priority = priority;
    this.approved = null;
  }

  approve(assignee) {
    if (!assignee) throw new Error('При апруве нужен ответственный');
    this.approved = true;
    this.assign(assignee);
    super.proceedStatus();
  }

  decline() {
    this.approved = false;
  }
}

module.exports = FeatureRequest;
