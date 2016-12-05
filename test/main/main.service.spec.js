describe("Service: MainService", function() {
  var MainService, DataService, $q, deferred;

  beforeEach( module( 'app' ) );

  beforeEach(inject(function (_MainService_, _DataService_, _$q_) {
    MainService = _MainService_;
    DataService = _DataService_;
    $q = _$q_;
    deferred = $q.defer();

    spyOn(DataService, "getCity").and.returnValue(deferred.promise);
    spyOn(DataService, "getWeather").and.returnValue(deferred.promise);
  }));

  it('should have MainService be defined', function () {
    expect(MainService).toBeDefined();
  });

  describe('#getCity', function() {
    var postData = {
        key: '69064eda2d85390c651ee175825f2a5e',
        latitude: '1.29',
        longitude: '103.85',
        city: 'Singapore'
    };

    it('should have getCity', function() {
      expect(DataService.getCity).toBeDefined();
    });

    it('should have getWeather', function() {
      expect(DataService.getWeather).toBeDefined();
    });

    it('should get city', function() {
      DataService.getCity(postData); // get user location
      expect(DataService.getCity).toHaveBeenCalledWith(postData);
    });

    it('should get the weather of the user based on the location', function () {
      DataService.getWeather(postData); // get weather information based on location
      expect(DataService.getWeather).toHaveBeenCalledWith(postData);
    });
  });

});