
const slides= [
    {id: 1, name: 'Derek Anderson1', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK'},
    {id: 2, name: 'Derek Anderson2', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK'},
    {id: 3, name: 'Derek Anderson3', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK'},
    {id: 4, name: 'Derek Anderson4', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK'},
];

let currentSlide = 1;
const leftArrowElement= document.querySelector('.slider-left-arrow');
const rightArrowElement= document.querySelector('.slider-right-arrow');

function doSlide(direction) {
    let currentSlide = 3;
    currentSlide += direction;
    document.querySelector('h1').innerText = slides[currentSlide].name;
    // change video
    // change title
    // change job
    // change slider-page
    if (currentSlide === 0) {
        leftArrowElement.classList.add('disabled');
    } else {
        rightArrowElement.classList.remove('disabled');
    }
}

/*
leftArrowElement.classList.addEventListener('click', function() {doSlide(-1)});
rightArrowElement.addEventListener('click', function() {doSlide(1)})

*/
/*
function openInfo(evt, profileInfo) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(profileInfo).style.display = "block";
    evt.currentTarget.className += " active";
  }
  */

 function openInfo(profileInfo) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(profileInfo).style.display = "block";
  }

  httpGet('https://jsonplaceholder.typicode.com/users').then(response => {
    if (response && response.length) {
        //renderGallery(response);
        renderGallery(mockData);
    }
}, errors => {
    console.log(errors);
});


