// tutorial-dropdown.js
// Handles the Tutorials dropdown and embed logic

const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.getElementById('tutorialLinksDropdown');
const embed = document.getElementById('tutorialEmbed');

if (dropbtn && dropdownContent) {
  dropbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function () {
    dropdownContent.style.display = 'none';
  });
}

const isValidTutorialPath = function (path) {
  return /^tutorials\/[a-zA-Z0-9_-]+\.html$/.test(path || '');
};

if (embed) {
  const params = new URLSearchParams(window.location.search);
  const tutorialFromQuery = params.get('tutorial');

  if (tutorialFromQuery && isValidTutorialPath(tutorialFromQuery)) {
    embed.src = tutorialFromQuery;
  }
}

document.querySelectorAll('.tutorial-link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const targetSrc = this.getAttribute('data-src');

    if (embed && targetSrc && isValidTutorialPath(targetSrc)) {
      e.preventDefault();
      embed.src = targetSrc;
      if (dropdownContent) {
        dropdownContent.style.display = 'none';
      }
    }
  });
});
