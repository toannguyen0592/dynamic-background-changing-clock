// Get longitude and latitude of current location
window.addEventListener('load', function () {
    let long,
        lat,
        tempDescription = document.querySelector('.weather-description'),
        tempDegreeF = document.getElementById('fahrenheit'),
        tempDegreeC = document.getElementById('celsius'),
        location = document.querySelector('.location'),
        rainChance = document.getElementById('rain'),
        wind = document.getElementById('wind'),
        humid = document.getElementById('humidity');

    // Check to see the locator
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            displayLocation(lat, long);

            function displayLocation(lat, long) {
                let geocoder = new google.maps.Geocoder();
                let latlong = new google.maps.LatLng(lat, long);

                geocoder.geocode({
                    'latLng': latlong
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            let address = results[0].formatted_address;
                            let value = address.split(',');

                            count = value.length;
                            country = value[count - 1];
                            state = value[count - 2];
                            city = value[count - 3];
                            location.textContent = city + ", " + state.slice(0, 3);
                        } else {
                            location.textContent = "location not found";
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
                });
            }

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/33f67ee83d272db9c917bc3e2f69906f/${lat},${long}`;

            // API call
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {
                        temperature,
                        summary,
                        icon,
                        precipProbability,
                        windSpeed,
                        humidity
                    } = data.currently;
                    // Set DOM Elements from API data
                    tempDegreeF.textContent = Math.floor(temperature);
                    tempDegreeC.textContent = Math.floor((temperature - 32) * (5 / 9));
                    tempDescription.textContent = summary;
                    rainChance.textContent = "Rain Chance " + precipProbability + "%";
                    wind.textContent = "Wind " + windSpeed + " mile/hr";
                    humid.textContent = "Humidity " + (humidity * 100) + "%";
                    // Set icon
                    setIcons(icon, document.querySelector(".icon"));
                });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({
            color: "yellow"
        });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});