class MainDirective implements ng.IDirective{

    public restrict: string;
    public template: string;
    public controller: string;
    public controllerAs: string;
    public bindToController: boolean;

    constructor(...deps: Array<any>) {
        this.restrict = 'E';
        this.template = require('./main.directive.html');
        this.controller = 'MainController';
        this.controllerAs = 'vm';
        this.bindToController = true;
    }

    static factory(...deps: Array<any>) {
        return new MainDirective(...deps);
    }

}

// Dependency Injection
MainDirective.factory.$inject = [];

export { MainDirective };