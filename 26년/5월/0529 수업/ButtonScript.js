function addNumber(){
    var sum = 20 + 30;
    alert(sum);
}

function addNumberV2() {
    var a = parseInt(prompt("a 값 입력"));
    var b = parseInt(prompt("b 값 입력"));

    var sum = a+b;
    alert(a + '와 ' + b + "를 더한 값은 " + sum + " 입니다")
}

function notice() {
    window.open("image/sunflower.jpg", 'noti', ' width=450, height=400');
}

function bg1() {
    document.body.style.background = "#B2EBF4";
}

function bg2() {
    document.body.style.background = "#FAF4C0";
}

function fcolor() {
    document.body.style.color = "#FF0000";
}

function first() {
    document.body.style.color = "#000000";
    document.body.style.background = "#FFFFFF";
}