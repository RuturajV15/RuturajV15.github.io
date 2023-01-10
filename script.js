let weather = {
    "apiKey" : "336702209528f50b80320dc742643cbf",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city + "&units=metric&appid=" + this.apiKey )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name} = data;
        const{description, icon} = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity;
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"'";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    weather.search();
    forecast.search();
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
    forecast.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
        forecast.search();
    }
});

let d = new Date();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let forecast = {
    "apiKey" : "336702209528f50b80320dc742643cbf",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
        + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        //Get the temperatures and description for each day
        for (let i = 0; i < 7; i++) {
            document.getElementById("day" + (i+1)).innerText = weekDay[this.checkDay(i+1)];

            document.getElementById("temp" + (i+1)).innerText = data.list[i+1].main.temp + "°C";
            
            document.getElementById("des" + (i+1)).innerText = data.list[i+1].weather[0].description;

            document.getElementById("icon" + (i+1)).src = "http://openweathermap.org/img/wn/"+ data.list[i+1].weather[0].icon +".png";
        }
    },
    search: function(){
        this.fetchWeather(document.getElementById("cityInput").value);
        console.log(document.getElementById("cityInput").value);
    },
    checkDay: function(day){
        if((day + d.getDay()) > 6){
            return day + d.getDay() - 7;
        }
        else{
            return day + d.getDay();
        }
    }
};