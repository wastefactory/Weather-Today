Router.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function Router ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

    $urlRouterProvider
        .otherwise("/");
        
    $stateProvider
        .state('main', {
            url: '/',
            template: require('./components/main/main.html')
        });
}