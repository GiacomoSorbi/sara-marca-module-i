/* // Javascript bit for the slider in the homepage (index.html)
that never worked //
  let i = 0;
  const slides= [];
  const time = 3000;

  slides [0] = "images/Offer1Slider.jpg";
  slides [1] = "images/Offer2Slider.jpg";
  slides [2] = "images/Offer3Slider.jpg";

  const sliderS = document.querySelector(".slider")

  function slideShow(){
    const slides1 = document.sliderS = slides[i];
    if(i < slides1.length -1){
      i++;
    } else {
      i = 0;
    }
    // Runs function every x seconds as per const time//
    setTimeout("slideShow()", time);
  }

  //Run function when page loads//
  window.onload = slideShow;*/
