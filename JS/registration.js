(() => {

const regform = document.querySelector('#regform')
regform.addEventListener('submit', function(event) {
    
    event.preventDefault() // Отменяем классическую отправку формы
  })
 
const logOnBtn = document.querySelector('#logonbtn')
logOnBtn.addEventListener('click', () => {
  regform.style.display = 'flex'  // показываем форму регистрации на экране
  main.style.opacity = '0'    // скрываем блок main
})

function Registration() {
  // Получаем данные из полей формы
  const login = document.querySelector("#login").value
  const password = document.querySelector("#password").value
  const repeatpass = document.querySelector("#repeatpass").value
  const email = document.querySelector("#email").value

  // Создаем объект с данными
  const registration_data = {
    login: login,
    password: password,
    email: email
  }

  console.log(registration_data)
}

const registrationbtn = document.querySelector('#regbtn') // кнопка "зарегестрироваться" на форме
registrationbtn.addEventListener('click', Registration)


})()


// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Отменяем стандартное поведение формы

   

    

//     // Отправляем данные на сервер с помощью AJAX
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "/your_server_endpoint", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = function() {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         console.log("Данные успешно отправлены!");
//       } else {
//         console.error("Ошибка при отправке данных: ", xhr.responseText);
//       }
//     }
  
//     xhr.onerror = function() {
//       console.error("Ошибка при отправке данных: ", xhr.statusText);
//     ;
//     xhr.send(JSON.stringify(data));
//     }
//   );
// );