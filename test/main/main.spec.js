describe( 'Controller: MainController', function() {

  var MainController, $scope, MainService, $q;

  beforeEach( module( 'app' ) );

  beforeEach( inject( function( $controller, $rootScope, _MainService_, _$q_ ) {
    $scope = $rootScope.$new();
    MainService = _MainService_;
    $q = _$q_;
    deferred = $q.defer();
    MainController = $controller( 'MainController', {$scope: $scope, MainService: MainService});

    spyOn(MainService, "getCity").and.returnValue(deferred.promise);
    spyOn(MainService, "getWeather").and.returnValue(deferred.promise);
    spyOn(MainService, "generateIcon").and.returnValue('wi-day-sunny');
    spyOn(MainController, "getLocation").and.returnValue('1');
  }));

  it('should be the MainController', inject( function() {
    expect( MainController ).toBeTruthy();
  }));
  
  describe('#init', function() {
    it('should getCurrentPosition', function () {
      MainController.getLocation();
      
      expect( navigator.geolocation ).toBeDefined();
      expect(MainController.getLocation).toHaveBeenCalled();          
    });
  });
  
  describe('#getLocation', function() {
    var postData = {
        key: '69064eda2d85390c651ee175825f2a5e',
        latitude: '1.29',
        longitude: '103.85',
        city: 'Singapore'
    };
  
    var icons = [1, 'Clouds'];

  
    it('should have getCity', function() {
      expect(postData.latitude).toBeTruthy();
      expect(postData.longitude).toBeTruthy();
      expect(MainService.getCity).toBeDefined();
    });

    it('should have getWeather', function() {
        expect(postData.city).toBeTruthy();
        expect(MainService.getWeather).toBeDefined();
    });
      
    it('should have generateIcon', function() {
      expect(MainService.generateIcon).toBeDefined();
    });
  
    it('should get the user location', function() {
      MainService.getCity(postData); // get user location
      expect(MainService.getCity).toHaveBeenCalledWith(postData);
    });
  
    it('should get the weather of the user based on the location', function () {
      MainService.getWeather(postData); // get weather information based on location
      expect(MainService.getWeather).toHaveBeenCalledWith(postData);
    });
  
    it('should get the icon', function () {
      MainService.generateIcon(icons);
      expect(MainService.generateIcon).toHaveBeenCalledWith(icons);
    });
  });

});