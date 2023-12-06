function updateTime() {
  let americaElement = document.querySelector("#america");
  let americaTime = americaElement.querySelector(".time");
  let americaDate = americaElement.querySelector(".date");
  let americaTimezone = moment().tz("America/New_York");
  americaTime.innerHTML = americaTimezone.format("h:mm A");
  americaDate.innerHTML = americaTimezone.format("dddd, Do MMMM");

  let franceElement = document.querySelector("#france");
  let franceTime = franceElement.querySelector(".time");
  let franceDate = franceElement.querySelector(".date");
  let franceTimezone = moment().tz("Europe/Paris");
  franceTime.innerHTML = franceTimezone.format("h:mm A");
  franceDate.innerHTML = franceTimezone.format("dddd, Do MMMM");
}

function updateTimezone(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#timezones");
  citiesElement.innerHTML = `  
  <div id="timezones">
          <div class="city-container">
            <div class="city">
              <div>${cityName}</div>
            </div>
            <div class="time-date">
              <div class="time">${cityTime.format("h:mm A")}</div>
              <div class="date">${cityTime.format("dddd, Do MMMM")}</div>
            </div>
          </div>
          <div class="link">
           <a href="/"> All Timezones </a> </div>`;
}
updateTime();
setInterval(updateTime, 60000);
setInterval(updateTimezone, 60000);

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateTimezone);
