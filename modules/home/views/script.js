// Code goes here

 angular.module('myApp', []).controller('userCtrl', function($scope) {

$scope.users = [
{id:1, fName:'Hege', lName:"Pege" },
{id:2, fName:'Kim',  lName:"Pim" },
{id:3, fName:'Sal',  lName:"Smith" },
{id:4, fName:'Jack', lName:"Jones" },
{id:5, fName:'John', lName:"Doe" },
{id:6, fName:'Peter',lName:"Pan" }
];

$scope.addUser=function(index){
  if(index){
    $scope.users[index].fName=$scope.fName;
    $scope.users[index].lName=$scope.lName;
    }
  else{
    var newId=$scope.users.length+1;
    $scope.users.push({
        'id':newId,
        'fName':$scope.fName,
        'lName':$scope.lName,
    });
  }
  $scope.editMode=false;
   $scope.fName='';
   $scope.lName='';
       
}

$scope.editUser=function(index){
  $scope.editMode=true;
  $scope.editIndex=index;
  $scope.fName=$scope.users[index].fName;
  $scope.lName=$scope.users[index].lName;
}

$scope.deleteUser=function(index){
   $scope.users.splice(index,1)
}

});