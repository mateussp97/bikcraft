if(window.SimpleSlide){
  new SimpleSlide({
    slide: 'quote',
    time: 5000,
  });

  new SimpleSlide({
    slide: 'portfolio',
    time: 5000,
    nav: true,
    auto: true,
    pauseOnHover: true,
  });
}

if(window.SimpleAnime){
  new SimpleAnime();
}