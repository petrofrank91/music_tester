'user strict';

angular.module('tracker').controller('trackerCtrl',['$scope', '$rootScope', '$timeout', '$interval', function ($scope, $rootScope, $timeout, $interval) {
    $scope.MUSIC_COUNT = 3;

    $scope.isMusicPlay = true;
    $scope.playStep = 1;
    $scope.playProgress = 0;
    $scope.testCompleted = false;
    $scope.isSkip = false;
    $scope.feedbackData = {
        isHeard: 1,
        skipReason: 1
    };

    var stop;

    function stopPlayer () {
        $interval.cancel(stop);
    }

    function startPlayer () {
        stop = $interval(function() {
            if ($scope.playProgress == 100) {
                $scope.next();
            } else {
                $scope.playProgress += 2;
            }
        }, 100);
    }

    function resetFeedbackData () {
        $scope.feedbackData.isHeard = 1;
        $scope.feedbackData.skipReason = 1;
    }

    $scope.skip = function () {
        stopPlayer();
        $scope.isMusicPlay = false;
        $scope.playProgress = 0;
        $scope.isSkip = true;
    };

    $scope.next = function () {
        stopPlayer();
        $scope.isMusicPlay = false;
        $scope.playProgress = 0;
        $scope.isSkip = false;
    };

    $scope.feedback = function () {
        if ( $scope.playStep !== $scope.MUSIC_COUNT ) {
            $scope.playStep++;
            $scope.isMusicPlay = true;
            startPlayer();
        } else {
            $scope.testCompleted = true;
        }
        resetFeedbackData();
    };

    startPlayer();

}]);