import { MainController } from './main.controller';

class MainComponent implements ng.IComponentOptions {
	
	public template: string;
	public controller: Function;
	public bindings : any;

	constructor(){
		this.controller = MainController;
		this.bindings = {
			username: '@',
			password: '@'
		};
		this.template = require('./main.html');
	}

}

export { MainComponent };