// // const person = {
// //   name: 'Alex',
// //   age: 30,
// //   greet() {
// //     console.log('Всем привет!');
// //   },
// // };

const Bug = require('./src/Bug');
const FeatureRequest = require('./src/FeatureRequest');
const FrontendFeature = require('./src/FrontendFeature');
const Task = require('./src/Task');

// // person.greet();
// // function greet() {}

// class ElbrusStudent {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.phase = 0;
//     this.checkpoints = [];
//     //
//     //
//     //
//   }

//   passExam() {
//     this.phase++;
//   }

//   expell() {
//     this.phase = null;
//   }

//   solvedCheckpoint(checkpoint) {
//     this.checkpoints.push(checkpoint);
//   }
// }

// const karen = new ElbrusStudent('Карен Захарян', 37);
// const kostya = new ElbrusStudent('Константин Скворцов', 42);
// karen.passExam();
// // karen.phase = 'WRONG PHASE';
// karen.solvedCheckpoint('fs');
// console.log(kostya, karen);

// console.log(ElbrusStudent)

// const plainTextPasteTask = new Task('Удалить форматирование во вставленном тексте');
// console.log(plainTextPasteTask);
// plainTextPasteTask.assign('Константин Сергеевич');
// console.log(plainTextPasteTask);
// plainTextPasteTask.proceedStatus();
// console.log(plainTextPasteTask);

const fixEmailRecognition = new Bug(
  'Не работает распознавание почты',
  null,
  2,
  'укажи почту @elbrusboot.camp',
);
const httpHeader = new Bug('Не хватает заголовка Content-type', 'Carl', 1);
const nokiaBug = new Bug('Приложение не запускается на Nokia 3310', null, 1);
// console.log(nokiaBug.bugs);
console.log(Bug.bugs);
// console.log(fixEmailRecognition);
// fixEmailRecognition.assign('Carl');
// fixEmailRecognition.proceedStatus();
// console.log(fixEmailRecognition);
// fixEmailRecognition.fix();
// console.log(fixEmailRecognition);

const loginModal = new FrontendFeature({
  title: 'Сделать модалку на логин',
  pages: ['/', '/home', '/about'],
});
// console.log(loginModal);
loginModal.approve('Alex');
loginModal.proceedStatus();
loginModal.addPage('/info');
loginModal.removePage('/home');

const deviceFeature = new FeatureRequest({
  title: 'Трекать девайс пользователя',
});

// Array.isArray()
console.log(FrontendFeature.isFrontendFeature(nokiaBug));
// console.log(loginModal.isFrontendFeature())
// console.log(loginModal);
// loginModal.assign('Bob');
// console.log(loginModal);
// loginModal.fix()
// loginModal.proceedStatus();

// call / bind / apply <- для гладиаторских боёв