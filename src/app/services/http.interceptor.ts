function HttpInterceptor ($injector, $q) {

    return {
        request: onRequest,
        requestError: onRequestError,
        response: onResponse,
        responseError: onResponseError
    };

    function onRequest(config){
        return config;
    }

    function onRequestError(rejection){
        return $q.reject(rejection);
    }

    function onResponse(result){               
        return result;
    }

    function onResponseError(response){
        return $q.reject(response);
    }

}

HttpInterceptor.$inject = ['$injector', '$q'];

export { HttpInterceptor };