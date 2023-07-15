// FUNCTION - set focus information according to focusKey (which panel or link was clicked)
function setFocusInfo(focusKey) {
  console.log('focusKey is ' + focusKey);

  if (focusKey === 0) { // SPACE
    console.log('space is the place');
    focusPageMessage =
      'This video shows that moment that the payload reached the edge of space and the balloon burst, sending the payload hurtling back to Earth.';
    focusUrl = 'https://www.youtube.com/embed/9Rz9ZmfYuqk?rel=0&autoplay=1';
    focusHeading = 'Edge of Space Explorer';
    focusPara1 =
      'I was privileged to have the amazing oportunity of sending a Raspberry Pi computer to the edge of space attached to a high-altitude balloon as a primary school anniversary celebration project. The payload included a range of cameras programmed in python to record a mix of video and images and send live images back to Earth, a GPS unit to track the journey and transmitter to send back live telemetry of the flight.';
    focusPara2 =
      'On the ground, we chased the flight in a minibus, making live predictions about the landing site so we could quickly retrieve the payload as it came hurtling back to Earth and landed safely in a wheat field.';
    
  } else if (focusKey === 1) { // FOREST
    focusPageMessage =
      'Pan around the 360 degree view of March Wood including right up to the sky and down to the ground. This image was taken when March Wood was just a couple of years old.';
    focusUrl = 'https://pablisch.github.io/MarchWood/';
    focusHeading = 'Forest Creator';
    focusPara1 =
      'The greatest barrier to setting up Forest School at my primary school was the profound lack of trees so I planted a brand new baby woodland that become known as March Wood. There was no end of challenges including funds and resources, Immovable deadlines, the reality of how long natures take to grow what you want as well as how quickly it grows what you definitely do not want, and helping saplings survive the long, hot summer holidays when the school is closed.';
    focusPara2 =
      'It took passion, dedication and resilience, especially in the midst of the pandemic lockdowns, but March Wood has thrived, tiny saplings now tower over me and we have an amazing outdoor classroom for all the school to enjoy, not to mention and incredible legacy woodland.';
    
  } else if (focusKey === 2) { // STEM
    focusPageMessage =
      'The robots we used were designed, built and programmed by the children that drove them.';
    focusUrl = 'https://www.youtube.com/embed/CG7WkIYNqQA?rel=0&autoplay=1';
    focusHeading = 'Primary STEM and Computing Lead';
    focusPara1 =
      "I have been incredibly lucky to have had such a varied teaching career full of amazing projects and opportunities. I was tasked to create a STEM makers workshop for a Tottenham primary school and my first job was to design a series of 'WOW' projects to inspire the children and get them excited about STEM. We had huge amounts of fun and learning with water bottle rockets, effervescent cannons, wind-powered cars and balloon-popping robot wars.";
    focusPara2 =
      'Over the next couple of years we hosted multi-school STEM events and won every STEM competition and award that we enetered.';
    
  } else if (focusKey === 3) { // FOREST SCHOOL LEADER
    focusPageMessage = 'Click on compressed image panels to expand them';
    focusUrl = 'https://pablisch.github.io/forest-school-images-expanding/';
    focusHeading = 'Forest School Leader';
    focusPara1 =
      "I was aksed 'make Forest School happen' at my primary school and despite being way outside my knowledge or comfort zone, I was excited to take on this challenge and so started a four year journey of planning and implenting all aspects of Forest School including Hundreds of pages of risk and benefit assessments.";
    focusPara2 =
      'It was a joy to train and work as a Forest School Leader helping our children learn a huge range of activities and skills chosen by them from bug hunts to tree planting, and knife whittling to fire lighting and campfire cooking. Such a privilege to be able to see them growth and develop and for some children, just find a reason to get up and come to school!';
    
  } else if (focusKey === 4) { // FURNITURE
    focusPageMessage = 'Click on compressed image panels to expand them';
    focusUrl = 'https://pablisch.github.io/furniture-portfolio-expanding/';
    focusHeading = 'Furniture Designer & Maker';
    focusPara1 =
      'Following a lifelong passion for making and crafts, I took a degree in Furniture Design and Craftsmanship on the renowned Buckinghamshire New University course in High Wycombe. Following a few years working in professional craft workshops making one-off pieces for clients such as David Linley and Lily Curtis, I spent a decade as a self-employed furniture maker on a range bespoke projects for lovely artists, musicians and other creatives, such as Nigel Godrich, Garth Jennings and Joby Talbot.';
    focusPara2 =
      'The urge to create has never left me and spills out into carving, book-binding, small sculptural pieces and into the digital world.';
    
  } else if (focusKey === 5) { // LEARNING AND CURIOSITY
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