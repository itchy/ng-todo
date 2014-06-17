/* App Module */
(function(){
  var app = angular.module('todoApp', []);
  
  app.controller('ListController',['$http', function($http){
    var list = this;
    this.tasks = [];

    this.getTotalTasks = function(){
      return this.tasks.length;
    };

    $http.get('/tasks.json').success(function(data){
      list.tasks = data;
    });
  }]);

  app.controller('TaskController',['$http', function($http){
    var task = this;
    this.item = {};


    this.addTask = function(list){
      $http.post('/tasks.json', {task: task.item}).success(function(data){
        list.tasks.push(task.item);
        task.item = {};
      });
    };

  }]);

})();