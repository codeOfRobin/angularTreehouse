'use strict'
angular.module("todoListApp")
.service('dataService',function($http)
{
    this.helloConsole = function()
    {
        console.log("teri toh")
    }
    this.getTodos = function(callback){
        $http.get('todos.json').then(callback)
    }
    this.deleteTodo = function(todo)
    {
        console.log(todo.name + " is being deleted");

        //
    }
    this.saveTodo = function(todo)
    {
        console.log("saved the todo" + todo.name);
    }
});
