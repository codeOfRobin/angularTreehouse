'use strict'
angular.module("todoListApp")
.controller('mainCtrl',function ($scope,dataService)
{
    $scope.helloConsole = dataService.helloConsole
    $scope.helloWorld = function()
    {
        console.log("Hello There!!");
    }

    $scope.learningNgChange = function ()
    {

    }
    dataService.getTodos(function (response) {
        console.log(response.data);
        $scope.todos = response.data
    })
    $scope.deleteTodo = function(todo, index)
    {
        dataService.deleteTodo(todo)
        $scope.todos.splice(index,1)
    }
    $scope.saveTodo = function(todo)
    {
        dataService.saveTodo(todo)
    }
    $scope.addTodo = function()
    {
        var todo = {name :"new todo"}
        $scope.todos.unshift(todo)
    }
})
