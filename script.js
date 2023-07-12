const panelTopics = document.querySelectorAll('.overlay'); // all topic panels
const panelTitles = document.querySelectorAll('.panel-label'); // all panel labels
const navLinks = document.querySelectorAll('.nav-link'); // all nav links
const midSection = document.querySelector('.galleryContainer'); // for all active quirk

const space = 'space';
const forest = 'forest';
const stem = 'stem';
const fsl = 'fsl';
const furniture = 'furniture';
const learn = 'learn';

const spaceTitle = 'Edge of Space Explorer';
const spaceText1 =
  'I was privileged to get the amazing oportunity of sending a Raspberry Pi computer to the edge of space using a high-altitude balloon as primary school anniversary celebration project. The payload included a range of cameras programmed in python to record a mix of video and images and send live images back to Earth, a GPS unit to track the journey and transmitter to send back live telemetry of the flight.';
const spaceText2 =
  'On the ground, we followed th progress in a minibus, making live predictions about the landing site and quickly retrieved the payload that came hurtling back to Earth to land safely in a wheat field.';
const marchWoodTitle = 'Forest Creator';
const marchWood1 =
  'The largest barrier to setting up Forest School at my primary school was the profound lack of trees so I planted a brand new baby woodland that become known as March Wood. There were no end of challenges including funds and resources, unmoveable deadlines, the reality of how long natures take to grow what you want as well as how quickly it grows what you definitely do not want, and helping saplings survive the long, hot summer holidays when the school is closed.';
const marchWood2 =
  'It took passion, dedication and resilience, espically in the midst of the pandemic lockdowns, but March Wood has thrived, tiny saplings now tower over me and we have an amazing outdoor classroom for all the school to enjoy.';
const forestSchoolTitle = 'Forest School leader';
const forestSchoolText1 =
  'It was a joy to train and work as a Forest School Leader at a school in Tottenham, working with groups of young people learning a huge range of activities and skills chosen by them from bug hunts to tree planting, and knife whittling to fire lighting and campfire cooking.';
const forestSchoolText2 =
  'The training was hard work with an enormous attention to detail to risk assess every ';
const stemLeadTitle = 'Primary STEM and Computing Lead';
const furnitureCraftTitle = 'Furniture Craftsperson';

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
  .querySelector('.logoImage')
  .addEventListener('mouseover', (logoHoverOn) => {
    allActive();
  });

// Listen for ICON mouseOUT - clear ALL infoActive
document
  .querySelector('.logoImage')
  .addEventListener('mouseout', (logoHoverOFF) => {
    clearAllActive();
  });

// FUNCTION - get FOCUS source from topic panel target
function findFocusFromPanelLink(whichPanelLink) {
  let focusKey =
    whichPanelLink == 'space'
      ? space
      : whichPanelLink == 'space2'
      ? space
      : whichPanelLink == 'forest'
      ? forest
      : whichPanelLink == 'forest2'
      ? forest
      : whichPanelLink == 'stem'
      ? stem
      : whichPanelLink == 'stem2'
      ? stem
      : whichPanelLink == 'fsl'
      ? fsl
      : whichPanelLink == 'fsl2'
      ? fsl
      : whichPanelLink == 'furniture'
      ? furniture
      : whichPanelLink == 'furniture2'
      ? furniture
      : whichPanelLink == 'learn'
      ? learn
      : whichPanelLink == 'learn2'
      ? learn
      : sheet;
  setFocusInfo(focusKey);
}

// FUNCTION - get vid source from nav link target
function findFocusKeyFromNavLink(whichNavLink) {
  let focusKey =
    whichNavLink == 'Edge of Space Explorer'
      ? space
      : whichNavLink == 'Forest Creator'
      ? forest
      : whichNavLink == 'Primary STEM and Computing Lead'
      ? stem
      : whichNavLink == 'Forest School Leader'
      ? fsl
      : whichNavLink == 'Furniture Craftsperson'
      ? furniture
      : whichNavLink == 'Lifelong Learner'
      ? learn
      : whichNavLink == 'Software Projects (coming soon)'
      ? projects
      : space;
  setFocusInfo(focusKey);
}

// FUNCTION - set focus information according to focusKey (which panel or link was clicked)
function setFocusInfo(focusKey) {
  console.log('focusKey is ' + focusKey)
  let focusUrl
  let focusTitle
  let focusPara1
  let focusPara2

  if (focusKey === 'space') {
    focusPageMessage = 'No Message';
    focusUrl = 'https://www.youtube.com/embed/OsesfBOQ_Nc?rel=0';
    focusTitle = 'Edge of Space Explorer';
    focusPara1 = 'I was privileged to get the amazing oportunity of sending a Raspberry Pi computer to the edge of space using a high-altitude balloon as primary school anniversary celebration project. The payload included a range of cameras programmed in python to record a mix of video and images and send live images back to Earth, a GPS unit to track the journey and transmitter to send back live telemetry of the flight.';
    focusPara2 = 'On the ground, we followed th progress in a minibus, making live predictions about the landing site and quickly retrieved the payload that came hurtling back to Earth to land safely in a wheat field.';
  } else if (focusKey === 'forest') {
    focusPageMessage = 'No Message';
    focusUrl = 'https://www.youtube.com/embed/OsesfBOQ_Nc?rel=0';
    focusTitle = 'Forest Creator';
    focusPara1 = 'The largest barrier to setting up Forest School at my primary school was the profound lack of trees so I planted a brand new baby woodland that become known as March Wood. There were no end of challenges including funds and resources, unmoveable deadlines, the reality of how long natures take to grow what you want as well as how quickly it grows what you definitely do not want, and helping saplings survive the long, hot summer holidays when the school is closed.';
    focusPara2 = 'It took passion, dedication and resilience, espically in the midst of the pandemic lockdowns, but March Wood has thrived, tiny saplings now tower over me and we have an amazing outdoor classroom for all the school to enjoy.';
  } else if (focusKey === 'stem') {
    focusPageMessage = 'No Message';
    focusUrl = 'https://www.youtube.com/embed/Bl9DLOFJJ4A?rel=0';
    focusTitle = 'Primary STEM and Computing Lead';
    focusPara1 = 'I was privileged to get the amazing oportunity of sending a Raspberry Pi computer to the edge of space using a high-altitude balloon as primary school anniversary celebration project. The payload included a range of cameras programmed in python to record a mix of video and images and send live images back to Earth, a GPS unit to track the journey and transmitter to send back live telemetry of the flight.';
    focusPara2 = 'On the ground, we followed th progress in a minibus, making live predictions about the landing site and quickly retrieved the payload that came hurtling back to Earth to land safely in a wheat field.';
  } else if (focusKey === 'fsl') {
    focusPageMessage = 'No Message';
    focusUrl = 'https://www.google.com/maps/@51.5256196,0.0546578,14z?entry=ttu';
    focusTitle = 'Forest School Leader';
    focusPara1 = 'It was a joy to train and work as a Forest School Leader at a school in Tottenham, working with groups of young people learning a huge range of activities and skills chosen by them from bug hunts to tree planting, and knife whittling to fire lighting and campfire cooking.';
    focusPara2 = 'The training was hard work with an enormous attention to detail to risk assess every ';
  } else if (focusKey === 'furniture') {
    focusPageMessage = 'No Message';
    focusUrl = 'https://pablisch.github.io/furniture-portfolio-expanding/';
    focusTitle = 'Furniture Craftsperson';
    focusPara1 = 'I was privileged to get the amazing oportunity of sending a Raspberry Pi computer to the edge of space using a high-altitude balloon as primary school anniversary celebration project. The payload included a range of cameras programmed in python to record a mix of video and images and send live images back to Earth, a GPS unit to track the journey and transmitter to send back live telemetry of the flight.';
    focusPara2 = 'On the ground, we followed th progress in a minibus, making live predictions about the landing site and quickly retrieved the payload that came hurtling back to Earth to land safely in a wheat field.';
  } else if (focusKey === 'learn') {
    focusPageMessage = 'No Message';
    focusUrl = 'https://pablisch.github.io/knot-very-useful/';
    focusTitle = 'Lifelong Learner';
    focusPara1 = 'I was privileged to get the amazing oportunity of sending a Raspberry Pi computer to the edge of space using a high-altitude balloon as primary school anniversary celebration project. The payload included a range of cameras programmed in python to record a mix of video and images and send live images back to Earth, a GPS unit to track the journey and transmitter to send back live telemetry of the flight.';
    focusPara2 = 'On the ground, we followed th progress in a minibus, making live predictions about the landing site and quickly retrieved the payload that came hurtling back to Earth to land safely in a wheat field.';
  } else {
    console.log('no focusKey found')
    focusPageMessage = 'No Message';
    focusUrl = 'https://pablisch.github.io/knot-very-useful/';
    focusTitle = 'March Wood';
    focusPara1 = 'The largest barrier to setting up Forest School at my primary school was the profound lack of trees so I planted a brand new baby woodland that become known as March Wood. There were no end of challenges including funds and resources, unmoveable deadlines, the reality of how long natures take to grow what you want as well as how quickly it grows what you definitely do not want, and helping saplings survive the long, hot summer holidays when the school is closed.';
    focusPara2 = 'It took passion, dedication and resilience, espically in the midst of the pandemic lockdowns, but March Wood has thrived, tiny saplings now tower over me and we have an amazing outdoor classroom for all the school to enjoy.';
  }
  document.querySelector('#focusPage').src = focusUrl; // #focusPage is the id of the iframe
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
    linkHover == 'Edge of Space Explorer'
      ? 0
      : linkHover == 'Forest Creator'
      ? 1
      : linkHover == 'Primary STEM and Computing Lead'
      ? 2
      : linkHover == 'Forest School Leader'
      ? 3
      : linkHover == 'Furniture Craftsperson'
      ? 4
      : linkHover == 'Lifelong Learner'
      ? 5
      : linkHover == 'Software Projects (coming soon)'
      ? 6
      : 0;
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
