const data = {
  "Douala": [
    {
      name: "Douala 1er",
      image: "Media_/Douala 1er.jpg",
      voirie: "120 km",
      taudis: 45,
      lampadaires: 300
    },
    {
      name: "Douala 2e",
      image: "Media_/Douala 2ème.jpg",
      voirie: "98 km",
      taudis: 30,
      lampadaires: 220
    },
    { name: "Douala 3ème",
      image: "Media_/Douala 3ème.jpg",
      voirie: "120 km",
      taudis: 45,
      lampadaires: 300
    },

    {
      name: "Douala 4ème",
      image: "Media_/Douala 4ème.jpg",
      voirie: "98 km",
      taudis: 30,
      lampadaires: 220
    },
    {
      name: "Douala 5ème",
      image: "Media_/Douala 5ème.jpg",
      voirie: "98 km",
      taudis: 30,
      lampadaires: 220
    },
    {
      name: "Douala 6ème",
      image: "Media_/Douala 6ème.jpg",
      voirie: "98 km",
      taudis: 30,
      lampadaires: 220
    }
  ],
  "Yaoundé": [
    {
      name: "Yaoundé 1er",
      image: "",
      voirie: "140 km",
      taudis: 55,
      lampadaires: 400
    },
    {
      name: "Yaoundé 2e",
      image: "",
      voirie: "110 km",
      taudis: 28,
      lampadaires: 350
    }
  ],
  "Bertoua": [
    {
      name: "Bertoua 1er",
      image: "",
      voirie: "90 km",
      taudis: 25,
      lampadaires: 180
    }
  ],
  "Garoua": [
    {
      name: "Garoua 1er",
      image: "https://via.placeholder.com/400x200?text=Garoua+1er",
      voirie: "75 km",
      taudis: 20,
      lampadaires: 150
    }
  ]
};

const citySelect = document.getElementById("citySelect");
const communeSelect = document.getElementById("communeSelect");
const communeContainer = document.getElementById("communeContainer");
const communeLabel = document.querySelector("label[for='communeSelect']");

// Remplir la liste des villes
function populateCities() {
  Object.keys(data).forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

// Remplir la liste des communes selon la ville choisie
function populateCommunes(city) {
  communeSelect.innerHTML = `<option value="">--Choisissez une commune--</option>`;
  if (!city || !data[city]) {
    communeSelect.style.display = "none";
    communeLabel.style.display = "none";
    return;
  }
  data[city].forEach(commune => {
    const option = document.createElement("option");
    option.value = commune.name;
    option.textContent = commune.name;
    communeSelect.appendChild(option);
  });
  communeSelect.style.display = "inline-block";
  communeLabel.style.display = "inline-block";
}

// Afficher les infos de la commune sélectionnée
function showCommuneInfo(city, communeName) {
  communeContainer.innerHTML = "";
  if (!city || !communeName) return;

  const commune = data[city].find(c => c.name === communeName);
  if (!commune) return;

  const card = document.createElement("div");
  card.className = "commune-card";

  card.innerHTML = `
    <h2>${commune.name}</h2>
    <img src="${commune.image}" alt="Image de ${commune.name}" />
    <p><strong>Linéaire voirie :</strong> ${commune.voirie}</p>
    <p><strong>Poches de taudis :</strong> ${commune.taudis}</p>
    <p><strong>Nombre de lampadaires :</strong> ${commune.lampadaires}</p>
  `;

  communeContainer.appendChild(card);
}

// Événements
citySelect.addEventListener("change", () => {
  const selectedCity = citySelect.value;
  communeContainer.innerHTML = "";
  populateCommunes(selectedCity);
  communeSelect.value = "";
});

communeSelect.addEventListener("change", () => {
  const selectedCity = citySelect.value;
  const selectedCommune = communeSelect.value;
  communeContainer.innerHTML = "";
  if (selectedCommune) {
    showCommuneInfo(selectedCity, selectedCommune);
  }
});

// Initialisation
populateCities();
