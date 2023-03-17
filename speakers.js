const speakers = [{
    id: 1,
    image1: './sources/speaker1.jpg',
    bgImg: './sources/grey checker.png',
    speakerName: 'Archie',
    speakerTitle: 'Animator',
    speakerBio: 'This is a longer card with supporting text.',
  },
  {
    id: 2,
    image1: './sources/speaker2.jpg',
    bgImg: './sources/grey checker.png',
    speakerName: 'Aurora',
    speakerTitle: '3D Illustrator',
    speakerBio: 'This is a longer card with supporting text.',
   },
  {
    id: 3,
    image1: './sources/speaker3.jpg',
    bgImg: './sources/grey checker.png',
    speakerName: 'Blanca',
    speakerTitle: 'Graphics Designer',
    speakerBio: 'This is a longer card with supporting text.',
   },
   {
    id: 4,
    image1: './sources/speaker4.jpg',
    bgImg: './sources/grey checker.png',
    speakerName: 'Gibron',
    speakerTitle: 'Voice Editor',
    speakerBio: 'This is a longer card with supporting text.',
   },
   {
    id: 5,
    image1: './sources/speaker5.jpg',
    bgImg: './sources/grey checker.png',
    speakerName: 'Keller',
    speakerTitle: 'AfterEffects Artist',
    speakerBio: 'This is a longer card with supporting text.',
   },
  {
    id: 6,
    image1: './sources/speaker6.jpg',
    bgImg: './sources/grey checker.png',
    speakerName: 'Joy',
    speakerTitle: 'Video Editor',
    speakerBio: 'This is a longer card with supporting text.',
   }];
  
  function generateSpeakers(
    id,
    image1,
    bgImg,
    speakerName,
    speakerTitle,
    speakerBio,
  ) {
    return ` 
    <div class="speaker-cards" title="speakers">
      <div class="each-card" id="speakerCard-${id}">
        <img class="speaker-images card2-img" src="${image1}" alt="Card2-image">
        <img class="speaker-bgimages" src="${bgImg}" alt="Card1-bgimage">
        <div class="card-body">
          <h5 class="speaker-name">${speakerName}</h5>
          <p class="speaker-title">${speakerTitle}</p>
          <p class="speaker-bio" alt="speaker-bio">${speakerBio}</p>
        </div>
      </div>
    </div>
    `;
  }
  
  let speakersCard = '';
  
  speakers.forEach((index) => {
    const speakersCardDetails = generateSpeakers(
      index.id,
      index.image1,
      index.bgImg,
      index.speakerName,
      index.speakerTitle,
      index.speakerBio, 
    );
    speakersCard += speakersCardDetails;
  });
  
  // append dynamically created speakers section (speakersCard) to the id #dynamic-speakers in HTML 
  document.getElementById('speaker-cards').innerHTML = speakersCard;