function clock() {
  let days:string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Firday",
    "Saturday",
  ];
  let months:string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hrs: any = document.getElementById("hours");
  let min: any = document.getElementById("mintes");
  let sec: any = document.getElementById("second");
  let period: any = document.getElementById("ampm");
  let date: any = document.getElementById("ddyymm");
  let day: any = document.getElementById("dd");

  let time = new Date();

  let h: number | string = time.getHours();
  let m: number | string = time.getMinutes();
  let s: number | string = time.getSeconds();
  let d = time.getDate();
  let dd = time.getDay();
  let mm = time.getMonth();
  let yy = time.getFullYear();
  

  if (h > 12) {
    h = h - 12;
  }
  if (h == 0) {
    h = 12;
  }
  let ampm = h <= 12 ? "AM" : "PM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  period.innerHTML = ampm;
  date.innerHTML = months[mm] + " " + d + " " +yy;
  day.innerHTML =days[dd];

}
setInterval(clock, 1000);
clock();
