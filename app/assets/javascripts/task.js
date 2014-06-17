/* App Module */
(function(){
  var app = angular.module('todoApp', []);
  
  app.controller('TodoCtrl', function(){
    

    this.getTotalTasks = function(){
      return this.tasks.length;
    };

    this.tasks = [{body: 'Learn Angular', done: false}, {body: 'Build Angular App', done: false}]
  });

  app.controller('TaskController', function(){
    this.item = {};

    this.sample = function(){
      console.log('sample-text');
    };

    this.addTask = function(list){
      console.log(this.item.body);
      list.tasks.push(this.item);
      this.item = {};
    };

  });

  // var gems = [
  //  {name: 'Dodecahedron',
  //   price: 2,
  //   description: '...',
  //   canPurchase: true,
  //   soldOut: false},
    
  //  {name: 'Pentagonal Gem',
  //   price: 5.95,
  //   description: '...',
  //   canPurchase: false,
  //   soldOut: false}
  // ]

})();