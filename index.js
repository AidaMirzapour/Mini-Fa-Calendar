let monthEl = document.querySelector(".month")
let dayNameEl = document.querySelector(".day-name");
let dayNumberEl = document.querySelector(".day-number");
let yearEl = document.querySelector(".year");

let date = new Date();
let month = date.toLocaleString("fa" , {month:"long"})
let dayName = date.toLocaleString("fa", { weekday: "long" });
let dayNumber = date.toLocaleString("fa" , {day:"numeric"})
let year = date.toLocaleString("fa", { year:"numeric" });

monthEl.innerHTML = month
dayNameEl.innerHTML = dayName
dayNumberEl.innerHTML = dayNumber
yearEl.innerHTML = year