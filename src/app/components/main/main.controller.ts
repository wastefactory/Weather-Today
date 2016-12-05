import IScope = angular.IScope;
export class MainController {

    public serviceErrors: Array<any>;
    private promise: any;
    private message: string;
    private date: Date;
    private postData: any;
    private city: any;

	static $inject = ['$scope', 'MainService'];

	constructor (
        private $scope: ng.IScope,
        private MainService: any
    ){
        this.date = new Date();
        this.city = {};
        this.postData = {
            key: '69064eda2d85390c651ee175825f2a5e', //openweathermap api key
            latitude: '',
            longitude: '',
            city: ''
        };
    }

	$onInit(): void {
        console.log('main controller');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( this.getLocation.bind(this) );
        }
        else {
            this.message = "Geolocation is not supported by this browser.";
        }
	}

    getLocation(position): void{
        this.postData.latitude = position.coords.latitude;
        this.postData.longitude = position.coords.longitude;

        this.MainService.getCity(this.postData).then((city)=>{
            return city;
        }).then((city)=>{
            this.postData.city = city;

            return this.MainService.getWeather(this.postData).then(function (response) {
                return response;
            });

        }).then((data) =>{
            data.weather[0].flat_icon = this.MainService.generateIcon( this.date.getHours(), data.weather[0].main );
            return data;
        }).then((data)=>{
            this.city = data;
        });
    }
}
