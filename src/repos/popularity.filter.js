(function() {
  'use strict';
  angular.module('gh')
  .filter('popularity', popularityFilter);
  /**
  *
  * @return {Array}
  */
  function popularityFilter(){

    return function likes(collection){
      if(!Array.isArray(collection)){
        return collection;
      }

      let repoCollection = [].concat(collection);

      return repoCollection.sort(function doPopularitySorting(a, b){

        let copyOne = a.stargazer_count + 2 * a.forks_count + a.open_isssues_count/ 2;
        let copyTwo = b.stargazers_count + 2 * b.forks_count + b.open_issues_count/ 2;

        return copyOne - copyTwo;
      });
    };
  }
}());
