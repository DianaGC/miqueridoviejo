angular
    .module('app',[
  
    ])
    .run(function($rootScope){
      $rootScope.dominio ='localhost';
      $rootScope.api ='/miqueridoviejo/api/';
     // $rootScope.imagenes = '/medimagenes/sites/default/files/'
      $rootScope.url = $rootScope.dominio + $rootScope.api;
      $rootScope.urlImg = $rootScope.dominio + $rootScope.imagenes;
    });
