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
  
function holBttn(buttonName) {
  let newBtn = document.createElement('button');
  let btnCont = document.querySelector('.buttons-container');
  newBtn.innerHTML = buttonName
  let newBtnId = 'btn-holiday';
  newBtn.Id = newBtnId
  
  btnCont.appendChild(newBtn)




}
  
holBttn('Feriados')