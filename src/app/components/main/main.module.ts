import './main.scss';

import { MainDirective } from './main.directive';
import { MainController } from './main.controller';

let directive = MainDirective.factory;
let controller = MainController;

export {directive, controller};
