/* App Module */
(function(){
  var app = angular.module('todoApp', []);
  
  app.controller('TodoCtrl', function(){
    this.getTotalTodos = function(){
      return this.tasks.length;
    };

    this.tasks = [{body: 'Learn Angular', done: false}, {body: 'Build Angular App', done: false}]
    
    this.addTodo = function(){
      this.tasks.push({body: this.formTaskText, done:false});
      this.formTaskText = '';
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