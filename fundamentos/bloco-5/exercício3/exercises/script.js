function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function dezDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let allMonthDays = document.querySelector('#days')

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dezDays = dezDaysList[index];
        let dezDaysItems = document.createElement('li');
        dezDaysItems.innerHTML = dezDays;
     
        allMonthDays.appendChild(dezDaysItems)
        if (dezDaysList[index] === 24  || dezDaysList[index] === 31) {
          dezDaysItems.className = 'day holiday'
        } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] ===  18) {
          dezDaysItems.className = 'day friday' 
        } else if (dezDaysList[index] === 25) {
          dezDaysItems.className = 'day friday holiday'
        } else {
          dezDaysItems.className = 'day'   
        }
    }


}

dezDays()
  
function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');






// function holBttn(buttonName) {
//   let btnCont = document.querySelector('.buttons-container');
//   let newButton = document.createElement('button');
//   let newButnId = '#btn-holiday';
//   newBtn.innerHTML = buttonName;
//   newBtn.Id = newBtnId;
  
//   btnCont.appendChild(newBtn)

 
// }
  
// holBttn('Feriados')


function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();



function createFridayButton(string) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newFridayButton = document.createElement('button');
  let newFridayButtonID = 'btn-friday';

  newFridayButton.innerHTML = string;
  newFridayButton.id = newFridayButtonID;
  buttonContainer.appendChild(newFridayButton);
}

createFridayButton('Friday')


function displayFridays() {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'gold';

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].style.backgroundColor === setNewColor) {
        getFridays[index].style.backgroundColor = backgroundColor;
      } else {
        getFridays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayFridays();


function calendarZoomIn() {
  let allCalendarsDay = document.querySelector('#days')
  allCalendarsDay.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px'; 
    event.target.style.fontWeight = '500'
    
    
  } )

}
calendarZoomIn()

function calendarZoomOut() {
  let allCalendarsDay = document.querySelector('#days');
  allCalendarsDay.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'
  })
}
calendarZoomOut()



function toDoList(task) {
  let newTaskList = document.querySelector('.my-tasks');
  let taskList = document.createElement('span');

  taskList.innerHTML = task;
  newTaskList.appendChild(taskList)

}
toDoList('Grêmio')

function legendaColor(color) {
  let newTaskList = document.querySelector('.my-tasks');
  let newTaskDiv = document.createElement('div')
  newTaskDiv.className = 'task';
  newTaskDiv.style.backgroundColor = color;
  newTaskList.appendChild(newTaskDiv)
}

legendaColor('gold')

function clickEventDiv() {
  let clickEvent = document.querySelector('.task');
  let selectedEvent = document.getElementsByClassName('task selected');
  clickEvent.addEventListener('click', function(event) {
    if (selectedEvent.length === 0) {
      event.target.className= 'task selected';

    } else {
      event.target.className = 'task'
    }

  })

}
clickEventDiv() 

function clickDayEvent() {
  let taskSelected = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    if (taskSelected.length > 0 && eventTargetColor !== taskColor) {
      let color = taskSelected[0].style.backgroundColor;
      event.target.style.color = color;

    } else if (eventTargetColor === taskColor && taskSelected.length !== 0) {
      event.target.style.color = 'rgb(119, 119, 119)'
    }
  })
}

clickDayEvent()