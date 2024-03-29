let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 200;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-rotate");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

//   const gitSkillPercent = 10,
//         htmlSkillPercent = 20,
//         cssSkillPercent = 30;

// // Найдем элементы на странице
// const gitProgressBar = document.getElementById('git-progress');
// const gitPercentText = document.getElementById('git-percent');
// const htmlProgressBar = document.getElementById('html-progress');
// const htmlPercentText = document.getElementById('html-percent');
// const cssProgressBar = document.getElementById('css-progress');
// const cssPercentText = document.getElementById('css-percent');

// // Установим ширину полосы прогресса и текст процента на основе заданного процента
// gitProgressBar.style.width = `${gitSkillPercent}%`;
// gitPercentText.innerText = `${gitSkillPercent}%`;
// htmlProgressBar.style.width = `${htmlSkillPercent}%`;
// htmlPercentText.innerText = `${htmlSkillPercent}%`;
// cssProgressBar.style.width = `${cssSkillPercent}%`;
// cssPercentText.innerText = `${cssSkillPercent}%`;

const skills = [
  { name: 'Git', percent: 60 },
  { name: 'HTML', percent: 100 },
  { name: 'CSS', percent: 100 },
  { name: 'JS', percent: 40 }
];

// Функция для отображения навыков
function displaySkills() {
  skills.forEach(skill => {
      const progressBar = document.getElementById(`${skill.name.toLowerCase()}-progress`);
      const percentText = document.getElementById(`${skill.name.toLowerCase()}-percent`);
      
      progressBar.style.width = `${skill.percent}%`;
      percentText.innerText = `${skill.percent}%`;
  });
}

// Вызываем функцию для отображения навыков
displaySkills();