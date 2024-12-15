// 背景色変更のボタンを定数に設定
const myButton = document.getElementById("colorChangeButton");

// pのクラスを定数に設定
const element = document.querySelector("p");

// ボタンクリックでPのクラスを切り替える
myButton.onclick = () => {
  if (element.classList.contains("blue")) {
    element.classList.replace("blue", "red");
  } else if (element.classList.contains("red")) {
    element.classList.replace("red", "yellow");
  } else if (element.classList.contains("yellow")) {
    element.classList.replace("yellow", "blue");
  }
};
