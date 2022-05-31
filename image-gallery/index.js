let url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=-r_mv37rumxX-Kr_Zd7RtSJzpiAgofG9pGWteys8wgg'
const galleryContainer = document.querySelector('.image__wrapper');
const search = document.querySelector('.search__form');
console.log(search)

async function getData(){
  const res = await fetch(url);
  const data = await res.json();
  showData(data.results)
}

function showData(data){
  data.map( el => {
    const img = document.createElement('img');
    img.classList.add('gallery__img');
    img.src = el.urls.regular;
    img.alt = `image`;
    galleryContainer.append(img);
  })
}

getData();
search.addEventListener('input', () => {
  console.log(search.value);
  url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=30&orientation=landscape&client_id=-r_mv37rumxX-Kr_Zd7RtSJzpiAgofG9pGWteys8wgg`;
  getData();
})
