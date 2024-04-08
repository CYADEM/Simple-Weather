let weather = {
      "apikey": "Put your license key here",
      fetchWeather: function (city) {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="
                  + city
                  + "&units=metric&appid="
                  + this.apikey)
                  .then((Response) => Response.json())
                  .then((data) => this.displayWeather(data));
      },

      displayWeather: function (data) {
            const { name } = data;
            try {
                  const { icon, description } = data.weather[0];
                  const { temp, humidity } = data.main;
                  const { speed } = data.wind;
                  document.getElementById('country').innerText = name;
                  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                  document.getElementById('desc').innerText = description;
                  document.getElementById("temp").innerText = temp + "°C";
                  document.querySelector(".humidity span").innerText = humidity;
                  document.querySelector(".wind span").innerText = speed;

                  document.querySelector('.error').style.display = "none";
                  document.querySelector('.weather-info').style.display = "block";
            } catch (e) {
                  document.querySelector('.weather-info').style.display = "none";
                  document.querySelector('.error').style.display = "block";
            }
      },

      search: function () {
            this.fetchWeather(document.getElementById("search").value);
      }
};

document.querySelector("#search").addEventListener("keyup", function (ev) {
      if (ev.key == 'Enter') {
            weather.search();
      }
});

document.querySelector(".search ion-icon").addEventListener("click", function () {
      weather.search();
});
