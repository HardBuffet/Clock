window.onload = function() {
  const hoursSel = document.querySelector("[data-app__hours]");
  const minutesSel = document.querySelector("[data-app__minutes]");
  const secondsSel = document.querySelector("[data-app__seconds]");

  setTimeout(updateTime, 0);
  setInterval(updateTime, 1000);

  function updateTime() {
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh < 10 ? hoursSel.innerText = `0${hh}`
    : hoursSel.innerText = hh;
    mm < 10 ? minutesSel.innerText = `0${mm}`
    : minutesSel.innerText = mm;
    ss < 10 ? secondsSel.innerText = `0${ss}`
    : secondsSel.innerText = ss;
  }
}
