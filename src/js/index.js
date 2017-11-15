import SideNavigation from './side-nav';

const sidenav = new SideNavigation(document.querySelector('.side-nav'));

document
  .querySelector('.page-header__show-menu')
  .addEventListener('click', sidenav.show);
