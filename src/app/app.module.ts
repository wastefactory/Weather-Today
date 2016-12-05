import 'angular';
import 'angular-ui-router';

import Config from './app.config';
import Run from './app.run';
import Router from './app.router';
import * as Static from './app.constants';

import '../assets/app.scss';

angular
    .module('app', ['ui.router'])
    .config(Config)
    .config(Router)
    .run(Run);

