var app=angular.module("madMod");//will retrieve module info
app.controller('formController', function($scope, madFactory){

  console.log('form ctrl');
  // console.log("form ctrl has loaded");

$scope.addInput= function(words){
console.log(words);
madFactory.setInputs(words);
}

});
