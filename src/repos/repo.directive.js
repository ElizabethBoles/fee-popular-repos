(function() {
  'use strict';
  angular.module('gh')//allowing it to tie to module
  .directive('repo', repo);//like a constructor but not//constructor name

  function repo() {
    return {

      templateUrl: 'repos/repo.template.html',//html code that the directive follows
      restrict: 'E', //restrict ussage to directive as element
      scope: {//what variable the scope is
        repo: '=repo'
      }
    };
  }


}());
