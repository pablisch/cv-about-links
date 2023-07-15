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
  console.log('focusKey is ' + focusKey);

  if (focusKey === 'space') { // SPACE
    console.log('space is the place');
    focusPageMessage =
      'This video shows that moment that the payload reached the edge of space and the balloon burst, sending the payload hurtling back to Earth.';
    focusUrl = 'https://www.youtube.com/embed/9Rz9ZmfYuqk?rel=0&autoplay=1';
    focusHeading = 'Edge of Space Explorer';
    focusPara1 =
      'I was privileged to have the amazing oportunity of sending a Raspberry Pi computer to the edge of space attached to a high-altitude balloon as a primary school anniversary celebration project. The payload included a range of cameras programmed in python to record a mix of video and images and send live images back to Earth, a GPS unit to track the journey and transmitter to send back live telemetry of the flight.';
    focusPara2 =
      'On the ground, we chased the flight in a minibus, making live predictions about the landing site so we could quickly retrieve the payload as it came hurtling back to Earth and landed safely in a wheat field.';
    
  } else if (focusKey === 'forest') { // FOREST
    focusPageMessage =
      'Pan around the 360 degree view of March Wood including right up to the sky and down to the ground. This image was taken when March Wood was just a couple of years old.';
    focusUrl = 'https://pablisch.github.io/MarchWood/';
    focusHeading = 'Forest Creator';
    focusPara1 =
      'The greatest barrier to setting up Forest School at my primary school was the profound lack of trees so I planted a brand new baby woodland that become known as March Wood. There was no end of challenges including funds and resources, Immovable deadlines, the reality of how long natures take to grow what you want as well as how quickly it grows what you definitely do not want, and helping saplings survive the long, hot summer holidays when the school is closed.';
    focusPara2 =
      'It took passion, dedication and resilience, especially in the midst of the pandemic lockdowns, but March Wood has thrived, tiny saplings now tower over me and we have an amazing outdoor classroom for all the school to enjoy, not to mention and incredible legacy woodland.';
    
  } else if (focusKey === 'stem') { // STEM
    focusPageMessage =
      'The robots we used were designed, built and programmed by the children that drove them.';
    focusUrl = 'https://www.youtube.com/embed/CG7WkIYNqQA?rel=0&autoplay=1';
    focusHeading = 'Primary STEM and Computing Lead';
    focusPara1 =
      "I have been incredibly lucky to have had such a varied teaching career full of amazing projects and opportunities. I was tasked to create a STEM makers workshop for a Tottenham primary school and my first job was to design a series of 'WOW' projects to inspire the children and get them excited about STEM. We had huge amounts of fun and learning with water bottle rockets, effervescent cannons, wind-powered cars and balloon-popping robot wars.";
    focusPara2 =
      'Over the next couple of years we hosted multi-school STEM events and won every STEM competition and award that we enetered.';
    
  } else if (focusKey === 'fsl') { // FOREST SCHOOL LEADER
    focusPageMessage = 'Click on compressed image panels to expand them';
    focusUrl = 'https://pablisch.github.io/forest-school-images-expanding/';
    focusHeading = 'Forest School Leader';
    focusPara1 =
      "I was aksed 'make Forest School happen' at my primary school and despite being way outside my knowledge or comfort zone, I was excited to take on this challenge and so started a four year journey of planning and implenting all aspects of Forest School including Hundreds of pages of risk and benefit assessments.";
    focusPara2 =
      'It was a joy to train and work as a Forest School Leader helping our children learn a huge range of activities and skills chosen by them from bug hunts to tree planting, and knife whittling to fire lighting and campfire cooking. Such a privilege to be able to see them growth and develop and for some children, just find a reason to get up and come to school!';
    
  } else if (focusKey === 'furniture') { // FURNITURE
    focusPageMessage = 'Click on compressed image panels to expand them';
    focusUrl = 'https://pablisch.github.io/furniture-portfolio-expanding/';
    focusHeading = 'Furniture Designer & Maker';
    focusPara1 =
      'Following a lifelong passion for making and crafts, I took a degree in Furniture Design and Craftsmanship on the renowned Buckinghamshire New University course in High Wycombe. Following a few years working in professional craft workshops making one-off pieces for clients such as David Linley and Lily Curtis, I spent a decade as a self-employed furniture maker on a range bespoke projects for lovely artists, musicians and other creatives, such as Nigel Godrich, Garth Jennings and Joby Talbot.';
    focusPara2 =
      'The urge to create has never left me and spills out into carving, book-binding, small sculptural pieces and into the digital world.';
    
  } else if (focusKey === 'learn') { // LEARNING AND CURIOSITY
    focusPageMessage = 'Hover over any image panel to expand it';
    focusUrl = 'https://pablisch.github.io/travel-images-picture-pad/';
    focusHeading = 'Lifelong Learning & Curiosity';
    focusPara1 =
      'I am naturally curious and have a deep love of learning whether that means learning something new or delving deeper into something current. I have a particular love of learning to do and to create whether it be a physical hands-on craft of software development. It always seems to hold true for me that the deeper you go, the more there is to find';
    focusPara2 =
      "Curiosity also leads me to places near and far. I love spending time in different places, with different places, being exposed to different cultures, foods and ways of being. I find it bizarrely intriguing to see the different way different cultures behave on the roads but I'm often happiest up a mountain breathing the fresh high-altitude air.";
    
  } else { // DEFAULT
    console.log('no focusKey found');
    focusPageMessage = 'Hover over any image panel to expand it';
    focusUrl = 'https://pablisch.github.io/travel-images-picture-pad/';
    focusHeading = 'Lifelong Learning & Curiosity';
    focusPara1 =
      'I am naturally curious and have a deep love of learning whether that means learning something new or delving deeper into something current. I have a particular love of learning to do and to create whether it be a physical hands-on craft of software development. It always seems to hold true for me that the deeper you go, the more there is to find';
    focusPara2 =
      "Curiosity also leads me to places near and far. I love spending time in different places, with different places, being exposed to different cultures, foods and ways of being. I find it bizarrely intriguing to see the different way different cultures behave on the roads but I'm often happiest up a mountain breathing the fresh high-altitude air.";
  }
  loadFocusInfo();
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
