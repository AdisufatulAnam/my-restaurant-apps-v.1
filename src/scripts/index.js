import 'regenerator-runtime';
import '../styles/root.css';
import '../styles/nav.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import DATA from '../DATA.json';

document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('nav-list-block');
});

function restaurantsApps(data) {
  let restoHTML = '';

  data.restaurants.forEach((resto, i) => {
    restoHTML += `
      <div tabindex="0" class="card">
        <div class="img-container">
          <img tabindex="0" class="card-image" alt="${resto.name}" src="${resto.pictureId}"/>
          <span tabindex="0" class="card-kota">
            <i title="kota"></i>
            <span>${resto.city}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <p class="card-content-title">Retting ${resto.rating}</p>
          <p class="card-content-title">${resto.name}</p>
          <p class="truncate">${resto.description}</p>
        </div>
      </div>
      `;
  });

  document.getElementById('explore-restaurant').innerHTML = restoHTML;
}

restaurantsApps(DATA);