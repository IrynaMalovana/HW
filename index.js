`use strict`
// import { calculateTime } from "./calcDate.js";

const result = document.getElementById('result');
const firstDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const optionsElement = document.querySelector("#options");
const presetsSelect = document.querySelector("#presets");
const optionsDaysSelect = document.querySelector("#days");
const submitBtnElement = document.querySelector('#submitBtn');
let firstDate = null;
let endDate = null;


const handleFirstDateChange = (event) => {
  event.preventDefault();
  firstDate = new Date(firstDateInput.value);
  endDateInput.min = firstDateInput.value;
  console.log(firstDate) 
}
const  handleEndDateChange = (event) => {
  event.preventDefault();
  endDate = new Date(endDateInput.value);
  firstDateInput.max = endDateInput.value;
  console.log(endDate)
}

  
 const handlePresetsChange = (event) => {
 
  let endDate = new Date(firstDateInput.value);
      if (event.target.value === "week") {
        endDate.setDate(firstDate.getDate() + 7);
      }
      else (event.target.value === "month"); {
        endDate.setMonth(firstDate.getMonth() + 1);
      }  
      endDateInput.valueAsDate = endDate;

    console.log(event.target.value)
  }
  const handleOptionsDaysChange = (event) => {
  
   
    console.log(event.target.value)
  }

  const getDatesInRange = (start, end, optionDays) => {
    const dates = [];
  
    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      const dayOfWeek = d.getDay();
  
      if (optionDays === "weekdays" && dayOfWeek > 0 && dayOfWeek < 6) {
        dates.push(new Date(d));
      } else if (optionDays === "weekends" && (dayOfWeek === 0 || dayOfWeek === 6)) {
        dates.push(new Date(d));
      } else if (optionDays === "all") {
        dates.push(new Date(d));
      }
    }
  
    return dates;
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();
    const datesInRange = getDatesInRange(firstDate, endDate, optionsDaysSelect.value);
    const differenceDates = Math.abs(firstDate - endDate);
 
    switch (optionsElement.value) {
      case "days":
        result.value = `${datesInRange.length} days`;
        break;
      case "hours":
        result.value = `${differenceDates/(36*10**5)} hours`;
        break;
      case "minutes":
        result.value = `${differenceDates/60000} minutes`;
        break;
      case "seconds":
        result.value = `${differenceDates/1000} seconds`;
        break;
      default:
        result.value= "Please choose an option."; 
  }
    
   
  }
  
const startApp = () => {
  console.log('app statApp')
  firstDateInput.addEventListener('change', handleFirstDateChange);
  endDateInput.addEventListener('change', handleEndDateChange);
  // optionsElement.addEventListener('change', handleOptionsChange);
  optionsDaysSelect.addEventListener('change', handleOptionsDaysChange);
  presetsSelect.addEventListener('change', handlePresetsChange);
  submitBtnElement.addEventListener('click', handleSubmitClick);
};


document.addEventListener('DOMContentLoaded', startApp)

