import { MainService } from './components/main/main.service';
import { DataService } from './services/data.service';

import * as MainModule from './components/main/main.module';

angular.module('app')
    //services
    .service('MainService', MainService)
    .service('DataService', DataService)
    
    // components
    .directive('main', MainModule.directive)
    .controller('MainController', MainModule.controller)    