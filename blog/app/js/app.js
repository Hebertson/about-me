var app = angular.module('blog', ['textAngular']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});