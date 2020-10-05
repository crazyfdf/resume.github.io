window.onload = function () {
  let skill = document.querySelector('.skill');
  let article = document.querySelector('article');
  let aside = document.querySelector('aside');
  let footer = document.querySelector('footer');
  let project = document.querySelector('.project');
  let education = document.querySelector('.education');
  let contact = document.querySelector('.contact');
  let mainBox = document.querySelector('.main-box');
  let bgScreen = document.querySelector('.bg-screen');

  function resize() {
    if (window.innerWidth < 794) {
      mainBox.style.display = 'block';
      bgScreen.style.display = 'none';
      if (aside.querySelector('.skill')) {
        aside.removeChild(skill);
        article.insertBefore(skill, project);
      }
      if (aside.querySelector('.contact')) {
        aside.removeChild(contact);
        footer.appendChild(contact);
      }
    };
    if (window.innerWidth >= 794 && window.innerWidth <= 1360) {
      mainBox.style.display = 'block';
      bgScreen.style.display = 'none';
      if (article.querySelector('.skill')) {
        article.removeChild(skill);
        aside.appendChild(skill);
      }
      if (footer.querySelector('.contact')) {
        footer.removeChild(contact);
        aside.insertBefore(contact, education);
      }
    };
    if (window.innerWidth > 1360) {
      mainBox.style.display = 'none';
      bgScreen.style.display = 'block';
    }
  }

  resize();
  window.onresize = resize;
}