triviaGame = angular.module('triviaGame', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller:'QuestionCtrl',
				templateUrl:'questions.html'
			})
			.otherwise({
				redirectTo:'/'
			});
});

triviaGame.controller('QuestionCtrl', function($scope){
		$scope.game = {
			score: 0,
			questionNum: 1
		};

		$scope.game.currentQuestion = questionBank[0];
		
		$scope.checkAnswer = function(answer) {
			if (answer.veracity === true){
				$scope.game.score += 200;
			}else{
			}

			if ($scope.game.questionNum < questionBank.length){
				getNewQuestion();
			}else{
				window.alert("Final Score: " + $scope.game.score);
				//endGame();
			}
			
		};

		var getNewQuestion = function() {
		$scope.game.questionNum += 1;
		$scope.game.currentQuestion = questionBank[$scope.game.questionNum-1];

		};
	});

var questionBank = [
	{
		question: "What is the capital of Mexico?",
		answers: [
			{
				answer: "Washington D.C.",
				veracity: false
			},
			{
				answer: "Trenton",
				veracity: false
			},
			{
				answer: "Mexico City",
				veracity: true
			},
			{
				answer: "Rome",
				veracity: false
			},
		]
	},
	{
		question: "What is the most abundant element in earth's crust?",
		answers: [
			{
				answer: "Oxygen",
				veracity: true
			},
			{
				answer: "Iron",
				veracity: false
			},
			{
				answer: "Titanium",
				veracity: false
			},
			{
				answer: "Hydrogen",
				veracity: false
			},
		]
	}
];