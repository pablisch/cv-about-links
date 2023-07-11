const knots = document.querySelectorAll(".overlay");
const knotLabels = document.querySelectorAll(".knotlabel");
const navLinks = document.querySelectorAll(".link");
const midSection = document.querySelector('body');

const tarp = 'OsesfBOQ_Nc';
const timber = 'OsesfBOQ_Nc';
const clove = 'Bl9DLOFJJ4A';
const taut = 'MUBRINtBDPk';
const figure = 'mjptxOrdr_g';
const bowline = '0F4HrjeIsYY';
const reef = '4tE_L5I3Z7U';
const round = 'ZhTOt1GcFGI';
const sheet = 'o9Kgs4PdPiw';
const square = 'z-lydqHKVdw';

// hamburger consts
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlist');

// Listen for ENTER - go to top of page
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
      backToTop();
  }
});

// Listen for knot panel click - get vid ID
knots.forEach(knot => {
  knot.addEventListener('click', chooseVideo => {
    let knotID = chooseVideo.target.id
    workOutVidIDfromPanel(knotID);
  })
  
});

// Listen for nav link click - get vid ID
navLinks.forEach(link => {
  link.addEventListener('click', chooseVideo => {
    let linkID = chooseVideo.target.innerHTML
    workOutvidIDfromLink(linkID);
  })
});

// Listen for knot panel mouseover - set active classes
knots.forEach(knot => {
  knot.addEventListener('mouseover', hoverOn => {
    let knotID = hoverOn.target.id
    indexfromPanel(knotID);
  }) 
});

// Listen for nav link mouseover - set active classes
navLinks.forEach(link => {
  link.addEventListener('mouseover', hoverOn => {
    let linkID = hoverOn.target.innerHTML
    indexfromLink(linkID);
  })
});

// Listen for knot panel mouseOUT - set active classes
knots.forEach(knot => {
  knot.addEventListener('mouseout', hoverOff => {
    clearActive();
  }) 
});

// Listen for nav link mouseOUT - set active classes
navLinks.forEach(link => {
  link.addEventListener('mouseout', hoverOff => {
    clearActive();
  })
});

// Listen for ICON mouseover - set ALL infoActive
document.querySelector('.logoImage').addEventListener('mouseover', logoHoverOn => {
  allActive();
})

// Listen for ICON mouseOUT - clear ALL infoActive
document.querySelector('.logoImage').addEventListener('mouseout', logoHoverOFF => {
  clearAllActive();
})

// FUNCTION - select video and scroll down
function whichVideo(vidSrc) {
  document.querySelector('#videoPlaying').src = vidSrc;
  window.scrollTo(0, document.body.scrollHeight);
}

// FUNCTION - get vid source from panel target
function workOutVidIDfromPanel(whichKnot) {
  let vidID = whichKnot == 'tarp' ? tarp : whichKnot == 'tarp2' ? tarp  
    : whichKnot == 'timber' ? timber : whichKnot == 'timber2' ? timber   
    : whichKnot == 'clove' ? clove : whichKnot == 'clove2' ? clove
    : whichKnot == 'taut' ? taut : whichKnot == 'taut2' ? taut
    : whichKnot == 'figure' ? figure : whichKnot == 'figure2' ? figure
    : whichKnot == 'bowline' ? bowline : whichKnot == 'bowline2' ? bowline
    : whichKnot == 'reef' ? reef : whichKnot == 'reef2' ? reef
    : whichKnot == 'round' ? round : whichKnot == 'round2' ? round
    : whichKnot == 'sheet' ? sheet : whichKnot == 'sheet2' ? sheet
    : whichKnot == 'square' ? square : whichKnot == 'square2' ? square
    : timber
  let vidSrc = `https://www.youtube.com/embed/${vidID}?rel=0`
  whichVideo(vidSrc);
}

// FUNCTION - get vid source from nav link target
function workOutvidIDfromLink(whichLink) {
  let vidID = whichLink == 'Tarp Tidy' ? tarp 
    : whichLink == 'Timber Hitch' ? timber

    : whichLink == 'Clove Hitch' ? clove
    : whichLink == 'Taut Tarp Hitch' ? taut
    : whichLink == 'Figure Eight' ? figure
    : whichLink == 'Bowline Knot' ? bowline
    : whichLink == 'Reef Knot' ? reef
    : whichLink == 'Round Turn &amp; Two Half Hitches' ? round
    : whichLink == 'Sheet Bend' ? sheet
    : whichLink == 'Square Lashing' ? square
    : timber
  console.log(vidID);
  let vidSrc = `https://www.youtube.com/embed/${vidID}?rel=0`
  console.log(`src is ${vidSrc}`);
  whichVideo(vidSrc);
}

// FUNCTION - get array index from panel target
function indexfromPanel(panelHover) {
  let index = panelHover == 'tarp' ? 0 : panelHover == 'tarp2' ? 0  
    : panelHover == 'timber' ? 1 : panelHover == 'timber2' ? 1   
    : panelHover == 'clove' ? 2 : panelHover == 'clove2' ? 2
    : panelHover == 'taut' ? 3 : panelHover == 'taut2' ? 3
    : panelHover == 'figure' ? 4 : panelHover == 'figure2' ? 4
    : panelHover == 'bowline' ? 5 : panelHover == 'bowline2' ? 5
    : panelHover == 'reef' ? 6 : panelHover == 'reef2' ? 6
    : panelHover == 'round' ? 7 : panelHover == 'round2' ? 7
    : panelHover == 'sheet' ? 8 : panelHover == 'sheet2' ? 8
    : panelHover == 'square' ? 9 : panelHover == 'square2' ? 9
    : 0
  console.log(index);
  activePanel(index);
}

// FUNCTION - get array index from link target
function indexfromLink(linkHover) {
  let index = linkHover == 'Tarp Tidy' ? 0 
    : linkHover == 'Timber Hitch' ? 1
    : linkHover == 'Clove Hitch' ? 2
    : linkHover == 'Taut Tarp Hitch' ? 3
    : linkHover == 'Figure Eight' ? 4
    : linkHover == 'Bowline Knot' ? 5
    : linkHover == 'Reef Knot' ? 6
    : linkHover == 'Round Turn &amp; Two Half Hitches' ? 7
    : linkHover == 'Sheet Bend' ? 8
    : linkHover == 'Square Lashing' ? 9
    : 0
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
})
navLinks.forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))

// FUNCTION - set infoActive classes
function activePanel(whichPanel) {
  knots[whichPanel].classList.add('infoActiveOverlay');
  knotLabels[whichPanel].classList.add('infoActiveKnotlabel');
}

// REMOVE ALL infoActive classes
function clearActive() {
  knots.forEach(knot => {
    knot.classList.remove('infoActiveOverlay');
  })
  knotLabels.forEach(label => {
    label.classList.remove('infoActiveKnotlabel');
  })
}

// APPLY infoActive to ALL panels + apply long transitions
function allActive() {
  knots.forEach(knot => {
    knot.style.transition = 'all 4s ease-in-out';
    knot.classList.add('infoActiveOverlay');
  })
  knotLabels.forEach(label => {
    label.style.transition = 'all 4s ease-in-out';
    label.classList.add('infoActiveKnotlabel');
  })
  midSection.style.backgroundColor = 'rgba(8, 11, 15, 0.85)';
  midSection.style.transition = 'background-color 10s ease';
}

// REMOVE ALL infoActive classes + apply normal transitions
function clearAllActive() {
  knots.forEach(knot => {
    knot.style.transition = 'all 0.4s ease-in-out';
    knot.classList.remove('infoActiveOverlay');
  })
  knotLabels.forEach(label => {
    label.style.transition = 'all 0.8s ease-in-out';
    label.classList.remove('infoActiveKnotlabel');
  })
  midSection.style.backgroundColor = 'rgba(230, 230, 230, 0.8)';
  midSection.style.transition = 'background-color 3s ease';
}


