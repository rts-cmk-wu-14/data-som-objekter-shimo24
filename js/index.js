// RENDER HERO
document.getElementById("hero").innerHTML = `
  <img src="${hero.image}" alt="Hero" class="hero-image">
  <div class="hero-content">
    <img src="${hero.icon}" alt="icon" width="30">
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <button>Explore</button>
  </div>
`;

// RENDER SERVICES
let servicesSection = document.getElementById("services");
services.forEach(service => {
  servicesSection.innerHTML += `
    <div class="service-card">
      <img src="${service.illustration}" alt="">
      <h3>${service.headline}</h3>
      <p>${service.text}</p>
      <a href="#">${service.linktext}</a>
    </div>
  `;
});

// RENDER FACILITIES
let facilitiesSection = document.getElementById("facilities");
facilitiesSection.innerHTML = `
  <h2>${facilities.headline}</h2>
  <div class="facility-grid">
    ${facilities.options.map(fac => `
      <div class="facility-card">
        <img src="${fac.icon}" alt="">
        <h3>${fac.headline}</h3>
        <p>${fac.text}</p>
        <a href="#">Show me more</a>
      </div>
    `).join("")}
  </div>
`;

// RENDER SITES
let sitesSection = document.getElementById("sites");
sitesSection.innerHTML = `
  <div class="sites-intro">
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <button class="btn-start">▶ Start</button>
  </div>
  <div class="sites-list">
    ${sites.places.map(place => `
      <div class="site-card">
        <img src="${place.img}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.city}</p>
        <a href="#">View the Site</a>
      </div>
    `).join("")}
  </div>
`;