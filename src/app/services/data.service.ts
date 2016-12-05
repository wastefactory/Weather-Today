export class DataService {
    private openweathermap: string;
    
    static $inject = ['$http', '$q'];

    constructor(
        private $http: ng.IHttpService, 
        private $q : ng.IQService
    ){
        this.openweathermap = 'http://api.openweathermap.org/data/2.5/weather';
    }
    
    public request(method, url, body){
        return this.$http[method](url,body).then((response) => {
            return response.data;
        }, (error) => {
            return error;
        });      
    }

    public getCity(postData):any {
        let geocodingURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + postData.latitude + '%2C' + postData.longitude + '&language=en';

        return this.request('get', geocodingURL, null);
    }
    
    public getWeather(postData):any {
        let url = this.openweathermap +'?q='+postData.city+'&units=metric&APPID='+postData.key;
        return this.request('get', url, null);
    }    
}