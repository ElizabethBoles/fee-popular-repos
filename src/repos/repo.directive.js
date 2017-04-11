(function() {
  'use strict';
  angular.module('gh')
  .directive('repo', repo);

  function repo() {
    let $ = angular.element;

    return {
      templateUrl: 'repos/repo.template.html',
      restrict: 'E',
      scope: {
        repo: '=repo',
      },
      link: setUpCollapse

    };

    function setUpCollapse(scope, element) {
      $(element)
      .find('header')
      .on('click', function togglePanelBody(){
        console.log('can i find that body');
        console.log($(element).find('article'));
        $(element).find('article').toggleClass('hidden');
      });
    }
  }


}());
