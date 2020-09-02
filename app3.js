    const weathericons = 
    {
        "Rain": "wi wi-day-rain",
        "Clouds": "wi wi-day-cloudy",
        "Clear": "wi wi-day-sunny",
        "Snow": "wi wi-day-snow",
        "mist": "wi wi-day-fog",
        "Drizzle": "wi wi-day-sleet",
    }

    var callbackGetSuccess = function (data){
        // fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=dd3adc7bec69e865eeef9300baedbb2d&lang=fr&units=metric") /*"+ville+" Saint-André*/
        // .then(resultat => resultat.json())
        // .then(json => json);

        // afficher(ville)
        // afficher(meteo);
        // displayWetherInfos(meteo); 
        // alert('Météo Température: ' + data.main.temp)
        const name = data.name;
        const temperature = data.main.temp;
        const conditions = data.weather[0].main;
        const description = data.weather [0].description;
        
        $('#ville').html(name);
        $('#temperature').html(Math.round(temperature));
        $('#conditions').html(capitalize(description));
        $('.wi').attr('class', weathericons[conditions]);

        $('body').attr('class', conditions.toLowerCase());


        // console.log(conditions);

        // var temperature = document.getElementById('zoneMeteo');
        // temperature.innerHTML = "La Température est de " + data.main.temp;



    }

    $(document).ready()
    {

        $('#queryLoc').keyup('enter', buttonGetClick);

        function buttonGetClick()
        {
            var element = document.getElementById('queryLoc').value;
            var url = "https://api.openweathermap.org/data/2.5/weather?q="+element+"&appid=dd3adc7bec69e865eeef9300baedbb2d&lang=fr&units=metric"; /*"+ville+" Saint-André*/
    
            $.get(url, callbackGetSuccess).done(function() {
    
            })
            .fail(function() {
                alert('Erreur');
            })
            .always(function() {
                //alert('Finish');
            });
        }
    
        function capitalize(str)
        {
            return str[0].toUpperCase() + str.slice(1);
        }
    
    }

