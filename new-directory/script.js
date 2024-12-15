// 見出しと画像への参照を変数に格納
const myHeading = document.querySelector("h1");
const imgClick = document.querySelector("#hoge");

// カウント数を0に設定
let count = 0;

// AAを変数に格納
const aa1 = "ｱﾋｬﾋｬﾍ(ﾟ∀ﾟ*)ﾉヽ(*ﾟ∀ﾟ)ﾉｱﾋｬﾋｬ";
const aa2 = "犬(ᐡ •͈ ·̫ •͈ ᐡ)";

// 画像がクリックされたとき、変数countの値を1増やして表示される数字を変更し、3と5の倍数でAAを出力
imgClick.addEventListener("click", function () {
  count++;
  if (count % 3 === 0 && count % 5 === 0) {
    myHeading.innerHTML = count + aa1 + aa2;
  } else if (count % 3 === 0) {
    myHeading.innerHTML = count + aa1;
  } else if (count % 5 === 0) {
    myHeading.innerHTML = count + aa2;
  } else {
    myHeading.innerHTML = count;
  }
});
