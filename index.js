function updateClock() {
  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let period = hour >= 12 ? "PM" : "AM";

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }

  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");

  document.getElementById("day").innerText = "Today is " + day;
  document.getElementById("time").innerText =
    hour + " : " + minute + " : " + second;
  document.getElementById("period").innerText = period;
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
