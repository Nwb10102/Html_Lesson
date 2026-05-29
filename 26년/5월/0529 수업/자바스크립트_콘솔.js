// 자료형
// typeof 1234
// typeof 13.2
// typeof "경기모바일과학고"

// var year = 1234;
// typeof year;

// 변수
// var str = 'hello gunpo';
// var n = str.charAt(6);
// console.log(n)


// var str = '경기모바일';
//     str1 = '과학고등학교';
// var newStr = str.concat(str1);
// console.log(newStr);


// var newstr1 = str.indexOf('모바일')
// console.log(newstr1)


// 조건문
// var name = prompt('당신의 이름은?');
// if(name)
//     document.write(name + '님 환영합니다.');
// else
//     document.write('이름이 입력되지 않았습니다.');


var number = prompt('숫자를 입력하세요');
if (number != null) {
    if (number % 3 == 0)
        console.log(number + '는 3의 배수입니다');
    else
        console.log(number + '는 3의 배수가 아닙니다.');
    }
else
    alert('입력이 취소되었습니다.');




// 함수
function addNumber(){
    var sum = 20 + 30;
    console.log(sum);
}

addNumber();