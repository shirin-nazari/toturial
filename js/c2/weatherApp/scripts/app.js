const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();
// ui
const updateUi = (data) => {
  //   const cityDets = data.cityDets;
  //   const weather = data.weather;

  // Destructuring peoperty
  const { cityDets, weather } = data;
  //update card;
  //   const h5 = document.createElement("h5");
  //   h5.textContent = cityDets.EnglishName;
  //   h5.className = "my-3";
  //   const div = document.createElement("div");
  //   div.textContent = weather.WeatherText;
  //   div.className = "my-3";
  //   const divte = document.createElement("div");
  //   const span = document.createElement("span");
  //   divte.className = "display-4 my-4";
  //   span.textContent = weather.Temperature.Metric.Value;
  //   details.appendChild(h5);
  //   details.appendChild(div);
  //   divte.appendChild(span);
  //   details.appendChild(divte);
  details.innerHTML = `
      <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>
    `;
  // update to night and day
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  //   let timeSrc = null;
  //   if (weather.IsDayTime) {
  //     timeSrc = "img/day.svg";
  //   } else {
  //     timeSrc = "img/night.svg";
  //   }
  time.setAttribute("src", timeSrc);
  //remove class none
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};
// const updateCity = async (city) => {
//   //   console.log(city);
//       const cityDets = await this.getCity(city);
//       const weather = await this.getWeather(cityDets.Key);
//       return { cityDets, weather };
// };
cityForm.addEventListener("submit", (e) => {
  // preventDefault
  e.preventDefault();

  // get value input
  const city = cityForm.city.value.trim();
  cityForm.reset();
  // update city
  forecast
    .updateCity(city)
    .then((data) => {
      updateUi(data);
      // console.log(data);
    })
    .catch((err) => console.log(err));

  /* ---------------------------- set localStorage ---------------------------- */
  localStorage.setItem("city", city);
});
if (localStorage.getItem("city")) {
  //hata age refresh kone akharin search ro behsh neshon mide ama agr az to aplication pak kone ne dige
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUi(data))
    .catch((err) => console.log(err));
}
