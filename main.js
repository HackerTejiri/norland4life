const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'block';
}
openNavBtn.addEventListener('click', openNav)

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);

const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

const hideSidebar = () => {
    sidebar.style.left = '-100%';
    hideSidebarBtn.style.display = 'none';
    showSidebarBtn.style.display = 'inline-block';
}


showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);


