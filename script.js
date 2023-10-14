const daysInput = document.querySelector("#days");
const monthsInput = document.querySelector("#months");
const yearsInput = document.querySelector("#years");
const inputs = document.querySelectorAll('input');
const totalDayElement = document.querySelector('#total-days')
const totalMonthElement = document.querySelector('#total-months')
const totalYearElement = document.querySelector('#total-years')

var date = new Date();
const form = document.getElementById('add-form');

parseInt(""); ///строка->число

const todayDay = date.getDate();
let todayMonth = date.getMonth();
todayMonth = todayMonth + 1;
let totalMonth, totalDay, totalYear;
console.log(todayMonth);
const todayYear = date.getFullYear();

const button = document.querySelector('button'); //находим кнопку

for (const input of inputs) { 
  console.log(input);
  button.addEventListener('click', function() {
    if (validation(form) == true) {
      if (daysInput.value>todayDay) {
        totalMonth = totalMonth+1;
      }

      if (daysInput.value<=todayDay) {
        totalDay = parseInt(todayDay) - parseInt(daysInput.value);
      }
      else {
        totalDay = 31 - parseInt(daysInput.value) + parseInt(todayDay);
        console.log(totalDay);
      }

      if (daysInput.value==todayDay && monthsInput.value==(todayMonth+1)) {
        totalDay = 0;
        totalMonth = 0;
        totalYear = todayYear - yearsInput.value;
      }
      else if (monthsInput.value<=todayMonth) {
        totalMonth = parseInt(todayMonth) - parseInt(monthsInput.value);
      }
      else {
        totalMonth = 12 - parseInt(monthsInput.value) + parseInt(todayMonth);
      }

      totalYear = todayYear - yearsInput.value; //год седня - год рождения

      if (daysInput.value>todayDay && monthsInput.value>=todayMonth || 
        monthsInput.value>todayMonth) {
        totalYear = totalYear-1;
      }

      if (monthsInput.value==todayMonth && daysInput.value > todayDay ) {
        totalMonth = 11;
      }

      if (monthsInput.value>todayMonth && daysInput.value==todayDay) {
        totalMonth = todayMonth+1;
      }
      
      if (daysInput.value>todayDay && monthsInput.value>todayMonth) {
        totalMonth = totalMonth - 1;
      }

      totalDayElement.innerText = totalDay;
      totalMonthElement.innerText = totalMonth;
      totalYearElement.innerText = totalYear; //меняет -- на посчит. значение
    }
  })
}


//Валидация

function validation(form) {

  function removeError(input){
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }

  function createError(input, text) {
    const parent = input.parentNode
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.classList.add('error')

    parent.append(errorLabel)

  }



  let result = true;

  const allInputs = form.querySelectorAll('input');
  for (const input of allInputs) {
    removeError(input)

    if (input.dataset.maxLength) {

      if (input.value.length > input.dataset.maxLength) {
        removeError(input)
        console.log('Ошибка поля');
        createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
        result = false
      }
    }

    if (input.dataset.maxDays) {

      if (input.value > 31 || input.value < 1) {
        removeError(input)
        console.log('Ошибка поля день');
        createError(input, `Укажите от 1 до ${input.dataset.maxDays}`)
        result = false
      }
    }

    if (input.dataset.maxMonths) {

      if (input.value > 12 || input.value < 1) {
        removeError(input)
        console.log('Ошибка поля месяц');
        createError(input, `Укажите от 1 до ${input.dataset.maxMonths}`)
        result = false
      }
    }

    if (input.dataset.maxYears) {

      if (input.value > todayYear || input.value < 1) {
        removeError(input)
        console.log('Ошибка поля год');
        createError(input, `Укажите от 1 до ${todayYear}`)
        result = false
      }
    }

    // if (input.dataset.daysMonth) {
    //   removeError(input)

    //   if (monthsInput.value == 4,6,9,11 && input.value > 30 
    //     ) {
    //     console.log('Ошибка поля год');
    //     createError(input, `Неверное кол-во дней`)
    //     result = false
    //   }
    // }
    

  }
  return result
}


//обработчик события input, который выполняет валидацию в реальном времени:
// document.getElementById('add-form').addEventListener('input', function(event){
//   // event.preventDefault()
//   if (validation(this) == true) {
//     console.log('Валидация пройдена!')
//   }
// })

