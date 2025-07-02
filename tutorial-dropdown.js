// tutorial-dropdown.js
// Handles the Tutorials dropdown and embed logic

// Dropdown show/hide logic
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.getElementById('tutorialLinksDropdown');
dropbtn.addEventListener('click', function(e) {
  e.stopPropagation();
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', function() {
  dropdownContent.style.display = 'none';
});
// Tutorial link logic
const embed = document.getElementById('tutorialEmbed');
document.querySelectorAll('.tutorial-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    embed.src = this.getAttribute('data-src');
    dropdownContent.style.display = 'none';
  });
});
