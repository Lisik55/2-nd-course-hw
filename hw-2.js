let a = 10;
alert(a);
a = 20;
alert(a);

const yearOfRelease = 2007;
alert(`Первый афйон был выпущен в ${yearOfRelease} году.`);

const nameCreator = "Brendan Eich";
alert(`Имя создателя языка JavaScript - ${nameCreator}`);

a = 10;
let b = 2;
alert(sum = a + b);
alert(diff = a - b);
alert(mult = a * b);
alert(priv = a / b);

let result = b ** 5;
alert (result);

a = 9;
b = 2;
let remainder = a % b;
alert (remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = Number(prompt("Сколько вам лет?"));
alert(age);

const user = {
   name: 'Alex',
   age: 20,
   isAdmin: true,
}

alert(user.age);

let userName = String(prompt ("Введите ваше имя?"));
alert(`Привет, ${userName}`);
