const navToggle  = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list')
const navLinks   = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  // navList.classList.toggle(':focus');
})


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
}) 




// Dark theme control
  var toggler = document.querySelector('.theme-toggler input[type="checkbox"]'),
    root = document.documentElement,
     currentTheme = localStorage.getItem('theme') || "dark";
            
   if (currentTheme == "light") toggler.removeAttribute('checked');
            
    else toggler.checked = "true"; 
            root.setAttribute('data-theme', currentTheme);
            
            toggler.addEventListener('change', toggleTheme, false);
            
    function toggleTheme(e) {
      if (this.checked) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
          root.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
    };