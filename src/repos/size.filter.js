(function() {
  'use strict';
  angular.module('gh')
  .filter('size', sizeFilter);

  function sizeFilter(){

    return function domegaMath(repo){
      let newSize = repo / 1000;
      return newSize.toFixed(2)+ 'Mbs';

    };
  }
}());
