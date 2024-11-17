// 血液型クラス
class BloodType {
    constructor(name, luckMessages) {
        this.name = name;
        this.luckMessages = luckMessages;
    }
    printRandomFortune() {
        // ランダムに占い結果の配列の要素を取得
        const randomIndex = Math.floor(Math.random() * this.luckMessages.length);
        const luckMessage = this.luckMessages[randomIndex];
        // 血液型ごとの運勢を返却
        return `${this.name}の今日の運勢は、「${luckMessage}」です。`;
    }
}

// 血液型のインスタンスを作成
const typeA = new BloodType("A型", [
    "新しいチャンスに恵まれる日です。積極的に行動しましょう。",
    "人との出会いに恵まれる日です。積極的に交流を深めましょう。",
    "健康面で気をつける必要があります。疲れすぎないよう注意しましょう。"
]);

const typeB = new BloodType("B型", [
    "忍耐強く努力を続ければ、良い結果が待っています。",
    "アイデアが次々と浮かぶ日です。記録に残しておきましょう。",
    "人間関係がうまくいかない日です。落ち着いて対応しましょう。"
]);

const typeAB = new BloodType("AB型", [
    "思考力が高まる日です。新しい知識を吸収しましょう。",
    "自分の魅力が輝く日です。自信を持って行動しましょう。",
    "家庭の問題に気を配る必要があります。家族と話し合いましょう。"
]);

const typeO = new BloodType("O型", [
    "勇気を持ってチャレンジする日です。行動あるのみです。",
    "旅行や遠出がうまくいく日です。新しい景色を楽しみましょう。",
    "直感力が高まる日です。内なる声に耳を傾けましょう。"
]);

// 占いボタンをクリックした時の処理
const fortuneBtn = document.getElementById("fortune-btn");
const bloodTypeSelect = document.getElementById("blood-type-select");
const fortuneContainer = document.getElementById("fortune-container");

fortuneBtn.addEventListener("click", () => {
    const selectedValue = bloodTypeSelect.value;
    let fortune;
    
    switch (selectedValue) {
        case "A":
            fortune = typeA.printRandomFortune();
            break;
        case "B":
            fortune = typeB.printRandomFortune();
            break;
        case "AB":
            fortune = typeAB.printRandomFortune();
            break;
        case "O":
            fortune = typeO.printRandomFortune();
            break;
        default:
            fortune = "血液型を選択してください。";
    }
    
    fortuneContainer.textContent = fortune;
});