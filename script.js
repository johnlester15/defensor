const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const msg = document.querySelector("#msg");
const catImg = document.querySelector("#cat");
const catImg2 = document.querySelector("#cat2");
const clickMe = document.querySelector("#click_Btn");
const clickMe2 = document.querySelector("#click_me2");
const mainContainer = document.querySelector("#container");
const secondContainer = document.querySelector("#container2");
const forYouBtn = document.querySelector("#done");
let yesFont = 18;
let count = 0;
let yesWidth = 157;

//code by: Hans Amoguis

function randomLoc() {
  let x = Math.floor(Math.random() * 700) - 500;
  let y = Math.floor(Math.random() * 500);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function pressNo() {
  switch (count) {
    case 0:
      noBtn.style.width = 101 + "px";
      noBtn.style.height = 58 + "px";
      yesBtn.style.width = 123 + "px";
      yesBtn.style.height = 70 + "px";
      msg.textContent = "Will You Please be My Valentine?";
      catImg.src = "https://media.tenor.com/Vus7KCWmJdcAAAAi/please-peach.gif";
      break;

    case 1:
      noBtn.style.width = 90 + "px";
      noBtn.style.height = 52 + "px";
      yesBtn.style.width = 134 + "px";
      yesBtn.style.height = 77 + "px";
      msg.textContent = "Please?";
      catImg.src =
        "https://media.tenor.com/VmvykNbcTdkAAAAi/peachcat-crying.gif";
      break;

    case 2:
      noBtn.style.width = 78 + "px";
      noBtn.style.height = 45 + "px";
      yesBtn.style.width = 146 + "px";
      yesBtn.style.height = 83 + "px";
      msg.textContent = "You have No Choice";
      catImg.src = "https://media.tenor.com/noZs9WKNqyoAAAAi/cat-sad.gif";
      break;
    case 3:
      noBtn.style.width = 67 + "px";
      noBtn.style.height = 38 + "px";
      yesBtn.style.width = 157 + "px";
      yesBtn.style.height = 90 + "px";
      msg.textContent = "Nyahahahahaha";
      catImg.src =
        "https://media.tenor.com/yr7z512oIf4AAAAi/peach-goma-shy-blush-heart.gif";
      break;
    default:
      msg.textContent = "Will You be My Valentine?";
      if (count == 4) {
        catImg.src =
          "https://media.tenor.com/r2b7aS322tUAAAAi/mochi-peach-cat-cat.gif";
      }
      if (count <= 30) {
        yesWidth += 25;
      }
      yesBtn.style.width = yesWidth + "px";
      yesBtn.style.height = "auto";
      randomLoc();
      break;
  }
  if (count <= 30) {
    yesFont += 10;
    yesBtn.style.fontSize = yesFont + "px";
  }

  count++;
}

function pressYes() {
  catImg.src = "https://media.tenor.com/Rymj4MuTQIEAAAAi/peach-cat.gif";
  msg.textContent = "okayyy... deal!!!";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  setTimeout(() => {
    clickMe.style.display = "block";
  }, 2000);
}

function pressClick() {
  mainContainer.style.display = "none";
  secondContainer.style.display = "flex";
  count = 0;
}

function pressClick2() {
  switch (count) {
    case 0:
      catImg2.src =
        "https://media.tenor.com/PxXjy4kc4S8AAAAi/peach-goma-love-hand.gif";
      break;
    case 1:
      catImg2.src =
        "https://media.tenor.com/ppJGvOm48zIAAAAi/peach-and-goma-peach-goma.gif";
      break;
    case 2:
      catImg2.src =
        "https://media.tenor.com/r2b7aS322tUAAAAi/mochi-peach-cat-cat.gif";
      break;
    case 3:
      catImg2.src = "https://media.tenor.com/zUkO0Uysaf4AAAAi/mochi-peach.gif";
      break;
    case 4:
      catImg2.src = "https://media.tenor.com/F9_-Tq0asRgAAAAi/mochi-peach.gif";
      break;
    case 5:
      catImg2.src =
        "https://media.tenor.com/BEBopBnhjVEAAAAi/peach-and-goma-peach-goma.gif";
      break;
    case 6:
      catImg2.src = "https://media.tenor.com/KpZkat4J3qAAAAAi/peach-goma.gif";
      break;
    case 7:
      catImg2.src =
        "https://media.tenor.com/Rf342Plq9QgAAAAi/peach-goma-love-smooch-kiss.gif";
      break;
    case 8:
      catImg2.src =
        "https://media.tenor.com/96iRPxYwxvAAAAAi/white-cat-grey-cat-cat-couple.gif";
      break;
    case 9:
      catImg2.src =
        "https://media.tenor.com/z6X7ejA5Vs0AAAAi/peach-goma-love.gif";
      break;
    case 10:
      catImg2.src =
        "https://media.tenor.com/PLDOgd4XazAAAAAi/peach-and-goma-peachcat.gif";
      break;
    case 11:
      catImg2.src =
        "https://media.tenor.com/HNSkQfL2rfkAAAAi/peach-goma-peach-and-goma.gif";
      break;
    case 12:
      catImg2.src =
        "https://media.tenor.com/yr7z512oIf4AAAAi/peach-goma-shy-blush-heart.gif";
      break;
    case 13:
      catImg2.src =
        "https://media.tenor.com/v63_brUy45wAAAAi/peach-goma-love-peach-cat.gif";
      break;
    case 14:
      catImg2.src = "https://media.tenor.com/6Y2-MbjwpiwAAAAi/mochi-peach.gif";
      break;
    default:
      catImg2.src =
        "https://media.tenor.com/wIev1fUt-M8AAAAi/peach-goma-peach-and-goma.gif";
      count = -1;
      break;
  }
  setTimeout(() => {
    forYouBtn.style.display = "block";
  }, 3000);
  count++;
}

clickMe.addEventListener("click", pressClick);
noBtn.addEventListener("click", pressNo);
yesBtn.addEventListener("click", pressYes);
clickMe2.addEventListener("click", pressClick2);
