const createSlider = (slides) => {
  for (let i = 0; i < slides.length; i++) {
    //define slides
    let sliderDiv = document.createElement("div");
    let sliderItemNoDiv = document.createElement("div");
    let sliderImage = document.createElement("img");
    let sliderItemNameDiv = document.createElement("div");
    let dots = document.getElementById("dots");
    let dotsSpan = document.createElement("span");
    //append
    slider.appendChild(sliderDiv);
    sliderDiv.appendChild(sliderItemNoDiv);
    sliderDiv.appendChild(sliderImage);
    sliderDiv.appendChild(sliderItemNameDiv);
    dots.appendChild(dotsSpan);
    //set attributes
    sliderDiv.setAttribute("class", "mySlides fade");
    sliderItemNoDiv.setAttribute("class", "numbertext");
    sliderItemNoDiv.textContent = `${i + 1} / ${slides.length}`;
    sliderImage.setAttribute("src", slides[i].url);
    sliderImage.setAttribute("style", "width: 100%");
    // sliderImage.style.width="100%";
    sliderItemNameDiv.setAttribute("class", "text");
    sliderItemNameDiv.textContent = slides[i].name;
    dotsSpan.setAttribute("class", "dot");
    dotsSpan.setAttribute("onclick", `currentSlide(${i + 1})`);
  }
};
