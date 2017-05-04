var app=angular.module("madMod");

app.controller("outputController",function($scope, madFactory){

  $scope.print=madFactory.returnInputs();
console.log($scope.print);

});
