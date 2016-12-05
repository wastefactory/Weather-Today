export class MainService {

    static $inject = ['DataService'];

    constructor (
        private DataService: any
    ){}

    public getCity(postData): any {
        return this.DataService.getCity(postData).then(function (response) {
            return response.results[0].address_components[3].long_name;
        });
    }

    public getWeather(postData): any {
        return this.DataService.getWeather(postData).then(function (response) {
            return response;
        });
    }

    public generateIcon(time, weather): any {
        let icon;
        let timeOfDay = (time > 6 && time < 18) ? 'dayTime' : 'nightTime';

        if(timeOfDay == 'dayTime'){
          switch ( weather ) {
              case 'Clear':
                  icon = "wi-day-sunny";
                  break;
              case 'Clouds':
                  icon = "wi-day-cloudy";
                  break;
              case 'Drizzle':
                  icon = "wi-day-showers";
                  break;
              case 'Rain':
                  icon = "wi-day-rain";
                  break;
              case 'Extreme':
              case 'Additional':
              case 'Thunderstorm':
                  icon = "wi-day-thunderstorm";
                  break;
              case 'Snow':
                  icon = "wi-day-snow";
                  break;
              case 'Mist':
              case 'Smoke':
              case 'Haze':
              case 'Sand, Dust whirls':
              case 'Fog':
              case 'Sand':
              case 'Dust':
              case 'Vocanic ash':
              case 'Squalls':
              case 'Tornado':
              case 'Atmosphere':
                  icon = "wi-day-fog";
                  break;
          }
        }else{
          switch ( weather ) {
              case 'Clear':
                  icon = "wi-night-clear";
                  break;
              case 'Clouds':
                  icon = "wi-night-alt-cloudy";
                  break;
              case 'Drizzle':
                  icon = "wi-night-alt-showers";
                  break;
              case 'Rain':
                  icon = "wi-night-alt-rain";
                  break;
              case 'Extreme':
              case 'Additional':
              case 'Thunderstorm':
                  icon = "wi-night-alt-thunderstorm";
                  break;
              case 'Snow':
                  icon = "wi-night-alt-snow";
                  break;
              case 'Mist':
              case 'Smoke':
              case 'Haze':
              case 'Sand, Dust whirls':
              case 'Fog':
              case 'Sand':
              case 'Dust':
              case 'Vocanic ash':
              case 'Squalls':
              case 'Tornado':
              case 'Atmosphere':
                  icon = "wi-night-fog";
                  break;
          }
        }

        return icon;
    }
}
