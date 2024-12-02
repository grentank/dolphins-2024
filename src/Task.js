class Task {
  constructor(title, assignee) {
    this.title = title;
    this.status = 'ожидает начала'; // | 'в работе' | 'завершена'
    this.assignee = assignee || null;
  }

  proceedStatus() {
    if (this.status === 'ожидает начала') {
      this.status = 'в работе';
    } else if (this.status === 'в работе') {
      this.status = 'завершена';
    }
  }

  assign(person) {
    this.assignee = person;
  }
}

module.exports = Task;
