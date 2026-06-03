const weddingDate = new Date("2026-07-27T14:30:00+05:00");

const daysNode = document.querySelector("[data-days]");
const hoursNode = document.querySelector("[data-hours]");
const minutesNode = document.querySelector("[data-minutes]");
const secondsNode = document.querySelector("[data-seconds]");

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, weddingDate - now);
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minuteMs = 60 * 1000;

  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / minuteMs);
  const seconds = Math.floor((diff % minuteMs) / 1000);

  daysNode.textContent = String(days);
  hoursNode.textContent = String(hours).padStart(2, "0");
  minutesNode.textContent = String(minutes).padStart(2, "0");
  secondsNode.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
