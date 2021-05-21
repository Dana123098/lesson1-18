// function myDana() {
//   alert("hello");
// }

// class Button {
//   handleEvent(event) {
//     let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
//     this[method](event);
//   }

//   onMousedown() {
//     elem.innerHTML = "Кнопка мыши нажата";
//   }

//   onMouseup() {
//     elem.innerHTML += "...и отжата.";
//   }
// }

// let x = new Button();
// elem.addEventListener("mousedown", x);
// elem.addEventListener("mouseup", x);

//ДЗ
//1
let a = document.getElementById("text");
a.onclick = function () {
  alert("Hello");
};
let s = document.getElementById("text1");
s.onclick = function () {
  alert("Hey");
};
let d = document.getElementById("text2");
d.onclick = function () {
  alert("MArcus hello");
};
let f = document.getElementById("text3");
f.onclick = function () {
  alert("Hello");
};
function print_current_page() {
  window.print();
}
//2
class Button {
  handleEvent(event) {
    let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);
  }
  onMousedown() {
    elem.innerHTML = "нажми на меня";
  }
  onMouseup() {
    elem.innerHTML += " но ты отжал";
  }
}
let x = new Button();
elem.addEventListener("mousedown", x);
elem.addEventListener("mouseup", x);
