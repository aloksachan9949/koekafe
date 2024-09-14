// let height = screen.availHeight;
// let specialHeading = document.getElementById("head1");

// let navheight = document.getElementById("navigation").offsetHeight;
// let element = document.getElementById("head1");

// window.addEventListener("scroll", () => {
//   let value = window.scrollY;
//   let headingpos =
//     element.getBoundingClientRect().top + document.documentElement.scrollTop;
//   console.log(navheight);

//   console.log(value, headingpos);

//   if (value >= headingpos - navheight) {
//     specialHeading.style.marginTop = value - headingpos + "px";
//   }
// });
const scrollers = document.querySelectorAll(".scroller");

addanimation();

function addanimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicate = item.cloneNode(true);
      scrollerInner.appendChild(duplicate);
    });
  });
}

// COUNTDOWN

let countDownTo = new Date("Jan 10, 2024 11:37:36").getTime();

let x = setInterval(function () {
  let tod = new Date().getTime();
  // console.log("heer");

  let diff = countDownTo - tod;

  let days = Math.floor(diff / (1000 * 24 * 60 * 60));
  let hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((diff % (1000 * 60)) / 1000);

  // document.getElementById("cd").innerHTML =
  //   days + "d " + hrs + "h " + min + "min " + sec + "s ";

  document.getElementById("dayText").innerHTML = days;
  document.getElementById("hourText").innerHTML = hrs;
  document.getElementById("minText").innerHTML = min;
  document.getElementById("secText").innerHTML = sec;

  if (diff < 0) {
    clearInterval(x);
    document.getElementById("cd").innerHTML = "Finished";
  }
}, 1000);
