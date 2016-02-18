angular.module("todoListApp", [])
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
})
.service('dataService',function($http)
{
    this.helloConsole = function()
    {
        console.log("teri toh")
    }
    this.getTodos = function(callback){
        $http.get('todos.json').then(callback)
    }
});
