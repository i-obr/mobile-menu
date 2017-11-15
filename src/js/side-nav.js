function SideNavigation(el) {
  const container = el;
  const sidenav = el.querySelector('.side-nav__content');
  const close = el.querySelector('.side-nav__close');
  let startPosition = 0;
  let currentPosition = 0;
  let isGestureStarted = false;

  function show() {
    container.classList.remove('side-nav--hidden');
    sidenav.classList.remove('side-nav__content--hidden');
  }

  function hide() {
    container.classList.add('side-nav--hidden');
    sidenav.classList.add('side-nav__content--hidden');
  }

  function onContainerClick(e) {
    if (e.target === container) {
      hide();
    }
  }

  function disableTransition() {
    sidenav.style.transition = 'none';
  }

  function onPointerDown(e) {
    currentPosition = startPosition = e.pageX;
    isGestureStarted = true;
    sidenav.setPointerCapture(e.pointerId);
    disableTransition();
  }

  function updatePosition() {
    requestAnimationFrame(() => {
      const diff = Math.min(10, currentPosition - startPosition);
      sidenav.style.transform = `translateX(${diff}px)`;
    });
  }

  function onPointerMove(e) {
    if (!isGestureStarted) {
      return;
    }

    currentPosition = e.pageX;
    updatePosition();
  }

  function resetPosition() {
    requestAnimationFrame(() => {
      sidenav.style.transform = '';
    });
  }

  function enableTransition() {
    sidenav.style.transition = '';
  }

  function onPointerUp(e) {
    currentPosition = e.pageX;
    isGestureStarted = false;

    sidenav.releasePointerCapture(e.pointerId);

    enableTransition();
    resetPosition();

    if (currentPosition - startPosition < -50) {
      hide();
    } else {
      show();
    }
  }

  this.hide = hide;
  this.show = show;

  close.addEventListener('click', this.hide);
  container.addEventListener('click', onContainerClick);

  sidenav.addEventListener('pointerdown', onPointerDown);
  sidenav.addEventListener('pointermove', onPointerMove);
  sidenav.addEventListener('pointerup', onPointerUp);
  sidenav.addEventListener('pointercancel', onPointerUp);
  sidenav.addEventListener('pointerleave', onPointerUp);
}


export default SideNavigation;
