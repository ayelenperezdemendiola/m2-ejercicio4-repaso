'use strict';

const list = document.createElement ('ul');
const page = document.querySelector ('.page__news');
page.appendChild (list);


fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json')
.then(response => response.json ())
.then (data => {
    for (let i = 0; i < data.news.length; i ++){
        console.log (data.news[i].title, data.news[i].image);

        const news = document.createElement ('li');
        news.classList.add ('news__item');
        news.classList.add ('news__item--no-image-visible');
        news.classList.add ('news__image');
        const newsTitle = document.createElement ('h2');
        newsTitle.classList.add('news__title');
        const newsTitleCo = document.createTextNode (data.news[i].title);

        const newsImg = document.createElement ('img');
        newsImg.classList.add ('news__image');
        newsImg.src = data.news[i].image;
        newsTitle.appendChild (newsTitleCo);
        news.appendChild(newsTitle);
        news.appendChild (newsImg);
        list.appendChild (news);
        
        let newsListeners = document.querySelectorAll ('.news__item');
        console.log (newsListeners);
        for (const items of newsListeners){
          items.addEventListener ('click',showMe);
        }

} 
});

// Pista 1: Aquí no puedes usar la variable local de otra función, 
// lo que tienes que hacer es recoger el evento para saber 
// cuál de todos a los que aplicaste el listener es el que dispara el click
function showMe(){
  // Pista 2: Aquí ten en cuenta que .toogle() ya te hace la comprobación del if ;)
  if (newsListeners.classList.contains ('news__item--no-image-visible')){
        newsListeners.classList.toggle ('news__item--no-image-visible');    
  }
}
