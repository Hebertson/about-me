var app = angular.module('blog');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'dHQTaLKlH65XpDZmgkBXnIRjB41kWVgJSEBK6WSo', 'X-Parse-REST-API-Key': 'daeCIiZb48agklefxymy218LwpURbFHMcMefr2T0'}
      return config;
    }
  };
});