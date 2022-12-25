

// async 
/*
async function f(){
    return Promise.resolve(1);
}
f().then(alert);
*/

// async -- await
//await bat buoc phai co async
//let value = await Promise;
//Sử dụng async và await và promise - setTimeout,
// 1000 => trả về kết quả "hoàn thành"

/*
async function f(){
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=> resolve("hoàn thành"),1000)
    // 1000 = 1s || 10.000 = 10s
    })
    let result = await promise;
    alert(result);
}
f();
*/
// await phải đi với async 
/*
 function f(){
    let promise = Promise.resolve(1);
    let result = await promise;
    alert(result);
}
f();*/

// var || let || const
/*
console.log(lop12a4);
var lop12a4 = "say hello";
console.log(lop12a4);
*/
/* khi trường hợp ta sử dụng nhiều đoạn code
mà var không theo thứ tự khi khai báo ->
máy sẽ trả về lop12a4 undefined
-  Nhưng var chỉ đúng khi ta đặt console.log phía sau giá trị vừa khai báo
*/
//let
/*
let 12a4 = "say Hi";
console.log(12a4);

12a4 = "say hello cac ban";

console.log(12a4);*/ 
/* let và const sẽ bị lỗi khi ta tái khai báo 
để khắc phục trường hợp này thì let phải nằm trong vòng lặp hoặc
lệnh cục bộ*/
/*
let material = "say hi";
    if (true) {
        let material = "say hello cac ban";
        console.log(material);// say hello cac ban
    }
console.log(material) */


//const material = "say Hi Dang Hoang";
//material = "say hello world"
// const giống như let -> const sẽ tái khao báo được
//const material = "say Hi Dang Hoang";
//const materail = " say hello world";

// nhan dien
// const -> object  || array || function 
/*
const material = {
    message : "Hello",
    number : "zero"
}
material.message = "say hi Dang Hoang";
console.log(material);*/

let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.pass');
let submitButton = document.querySelector('.submitbtn');
let userNlogin = document.querySelector('.userNlogin');
let passwordLogin = document.querySelector('.passlogin');
let loginButton = document.querySelector('.loginbtn');

const User = {
    usernames : [],
    passwords : []
}
//them tinh click
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (usernameInput.value.trim() == '' || passwordInput.value.trim() == '')
    {
        alert("đăng ký thành công");
        return;
    }

    else if (
        User.usernames.indexOf(usernameInput.value) !== -1) {
        alert("đăng ký thành công");
        return;
        }
    
    
    else{
        User.usernames.push(usernameInput.value)
        User.passwords.push(passwordInput.value)
        localStorage.setItem("userdata",JSON.stringify(User));

    }
})
loginButton.addEventListener('click', (e,inputUsername,inputPassword) => {
    e.preventDefault();
    let userdata = localStorage.getItem("userdata");
    let parsedData = JSON.parse(userdata);
    let password = '';
    let username = '';
    inputUsername = userNlogin.value;
    inputPassword = passwordLogin.value;

    if (inputUsername == '' || inputPassword == ''){
        alert('điền vào chỗ trống');
        return;
    }
    else {
        let passwordArrayLength = parsedData.passwords.length;
        for (let i = 0; i < passwordArrayLength; i ++){
            password = parsedData.passwords[i];
            if (password == inputPassword){
                break;
            }
        }
        let usernameArrayLength = parsedData.passwords.length;
        for (let i = 0; i < usernameArrayLength; i ++){
            username = parsedData.usernames[i];
            if (username == inputUsername){
                break;
            }
        }
        checkPasswordMatch(username,password, inputUsername, inputPassword);

    }
} )
function checkPasswordMatch(userName, password, inputUsername,inputPassword){
    (userName == inputUsername && password == inputPassword)?
    alert('đăng nhập thành công') : alert('đăng nhập thất bại'); 
}