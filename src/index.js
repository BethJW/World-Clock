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
updateTime();
setInterval(updateTime, 60000);
