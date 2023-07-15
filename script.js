const panelTopics = document.querySelectorAll('.overlay'); // all topic panels
const panelTitles = document.querySelectorAll('.panel-label'); // all panel labels
const navLinks = document.querySelectorAll('.nav-link'); // all nav links
const midSection = document.querySelector('.galleryContainer'); // for all active quirk

let focusUrl;
let focusHeading;
let focusPara1;
let focusPara2;

const space = 'space';
const forest = 'forest';
const stem = 'stem';
const fsl = 'fsl';
const furniture = 'furniture';
const learn = 'learn';

// hamburger consts
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlist');

// Listen for ENTER - go to top of page
document.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    backToTop();
  }
});

// Listen for topic panel click - get vid ID
panelTopics.forEach((topic) => {
  topic.addEventListener('click', (panelClickedEvent) => {
    let panelLinkID = panelClickedEvent.target.id;
    findFocusFromPanelLink(panelLinkID);
  });
});

// Listen for nav link click - get vid ID
navLinks.forEach((link) => {
  link.addEventListener('click', (navLinkClickedEvent) => {
    let navLinkText = navLinkClickedEvent.target.innerHTML;
    findFocusKeyFromNavLink(navLinkText);
  });
});

// Listen for topic panel mouseover - set active classes
panelTopics.forEach((topic) => {
  topic.addEventListener('mouseover', (hoverOn) => {
    let panelLinkID = hoverOn.target.id;
    indexfromPanel(panelLinkID);
  });
});

// Listen for nav link mouseover - set active classes
navLinks.forEach((link) => {
  link.addEventListener('mouseover', (hoverOn) => {
    let navLinkText = hoverOn.target.innerHTML;
    indexfromLink(navLinkText);
  });
});

// Listen for topic panel mouseOUT - set active classes
panelTopics.forEach((topic) => {
  topic.addEventListener('mouseout', (hoverOff) => {
    clearActive();
  });
});

// Listen for nav link mouseOUT - set active classes
navLinks.forEach((link) => {
  link.addEventListener('mouseout', (hoverOff) => {
    clearActive();
  });
});

// Listen for ICON mouseover - set ALL infoActive
document
  .querySelector('.logo-image')
  .addEventListener('mouseover', (logoHoverOn) => {
    allActive();
  });

// Listen for ICON mouseOUT - clear ALL infoActive
document
  .querySelector('.logo-image')
  .addEventListener('mouseout', (logoHoverOFF) => {
    clearAllActive();
  });

// FUNCTION - get FOCUS source from topic panel target
function findFocusFromPanelLink(whichPanelLink) {
  let focusKey =
    whichPanelLink == 'space'
      ? 0
      : whichPanelLink == 'space2'
      ? 0
      : whichPanelLink == 'forest'
      ? 1
      : whichPanelLink == 'forest2'
      ? 1
      : whichPanelLink == 'stem'
      ? 2
      : whichPanelLink == 'stem2'
      ? 2
      : whichPanelLink == 'fsl'
      ? 3
      : whichPanelLink == 'fsl2'
      ? 3
      : whichPanelLink == 'furniture'
      ? 4
      : whichPanelLink == 'furniture2'
      ? 4
      : whichPanelLink == 'learn'
      ? 5
      : whichPanelLink == 'learn2'
      ? 5
      : 4;
  setFocusInfo(focusKey);
}

// FUNCTION - get vid source from nav link target
function findFocusKeyFromNavLink(whichNavLink) {
  let focusKey =
    whichNavLink == 'Space Explorer'
      ? 0
      : whichNavLink == 'Forest Creator'
      ? 1
      : whichNavLink == 'Primary STEM Lead'
      ? 2
      : whichNavLink == 'Forest School Leader'
      ? 3
      : whichNavLink == 'Furniture Crafts'
      ? 4
      : whichNavLink == 'Lifelong Learning'
      ? 5
      : 4;
  setFocusInfo(focusKey);
}

// FUNCTION - load focus information that was set in setFocusInfo
function loadFocusInfo() {
  document.querySelector('#focus-heading').innerHTML = focusHeading;
  document.querySelector('#focus-para-1').innerHTML = focusPara1;
  document.querySelector('#focus-para-2').innerHTML = focusPara2;
  document.querySelector('#focus-page-message').innerHTML = focusPageMessage;
  document.querySelector('#focus-page').src = focusUrl; // #focusPage is the id of the iframe
  window.scrollTo(0, document.body.scrollHeight); // scrolls to bottom of the page
}

// FUNCTION - get array index from panel target
function indexfromPanel(panelHover) {
  let index =
    panelHover == 'space'
      ? 0
      : panelHover == 'space2'
      ? 0
      : panelHover == 'forest'
      ? 1
      : panelHover == 'forest2'
      ? 1
      : panelHover == 'stem'
      ? 2
      : panelHover == 'stem2'
      ? 2
      : panelHover == 'fsl'
      ? 3
      : panelHover == 'fsl2'
      ? 3
      : panelHover == 'furniture'
      ? 4
      : panelHover == 'furniture2'
      ? 4
      : panelHover == 'learn'
      ? 5
      : panelHover == 'learn2'
      ? 5
      : 0;
  console.log(index);
  activePanel(index);
}

// FUNCTION - get array index from link target
function indexfromLink(linkHover) {
  let index =
    linkHover == 'Space Explorer'
      ? 0
      : linkHover == 'Forest Creator'
      ? 1
      : linkHover == 'Primary STEM Lead'
      ? 2
      : linkHover == 'Forest School Leader'
      ? 3
      : linkHover == 'Furniture Crafts'
      ? 4
      : linkHover == 'Lifelong Learning'
      ? 5
      : 0;
  console.log(index);
  activePanel(index);
}

// FUNCTION - scroll back to top of page
function backToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// hamburger sensing and apply classes
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// FUNCTION - set infoActive classes
function activePanel(whichPanel) {
  panelTopics[whichPanel].classList.add('infoActiveOverlay');
  panelTitles[whichPanel].classList.add('infoActiveKnotlabel');
}

// REMOVE ALL infoActive classes
function clearActive() {
  panelTopics.forEach((topic) => {
    topic.classList.remove('infoActiveOverlay');
  });
  panelTitles.forEach((label) => {
    label.classList.remove('infoActiveKnotlabel');
  });
}

// APPLY infoActive to ALL panels + apply long transitions
function allActive() {
  panelTopics.forEach((topic) => {
    topic.style.transition = 'all 1s ease-in-out';
    topic.classList.add('infoActiveOverlay');
  });
  panelTitles.forEach((label) => {
    label.style.transition = 'all 4s ease-in-out';
    label.classList.add('infoActiveKnotlabel');
  });
  midSection.style.backgroundColor = '#68b0ab';
  midSection.style.transition = 'background-color 4s ease';
}

// REMOVE ALL infoActive classes + apply normal transitions
function clearAllActive() {
  panelTopics.forEach((topic) => {
    topic.style.transition = 'all 0.4s ease-in-out';
    topic.classList.remove('infoActiveOverlay');
  });
  panelTitles.forEach((label) => {
    label.style.transition = 'all 0.8s ease-in-out';
    label.classList.remove('infoActiveKnotlabel');
  });
  midSection.style.backgroundColor = '#faf3dd';
  midSection.style.transition = 'background-color 3s ease';
}
