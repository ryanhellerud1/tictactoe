function TictacController($scope){
	$scope.gameDone= 0;
	$scope.board = [null,null,null,null,null,null,null,null,null]; //game board
	$scope.filled = false // for tie game
	var currentplayer = 1; // start on player 1
	var playerString = null; //will display X for player 1 O for player 2
	$scope.winMsg= "";
	$scope.fileName="dogbitescar.gif"
	gifArray=[]
	$scope.playNum= "Player 1 to start! Place X";
	$scope.clicker = function(cellIndex){ //clickability angular function
		if($scope.board[cellIndex]==null && $scope.gameDone==0){ //cant click on pre-occupied cells
			if (currentplayer == 1){ //do for player 1
				$scope.playNum = "Player 2's move next, place O";
				$scope.board[cellIndex]= "X";
				$scope.playerString= "X ";
				$scope.checkWin();
				currentplayer++;
			} 
			else { //do for player 2
				$scope.playNum = "Player 1's move next, place X";
				$scope.board[cellIndex]= "O";
				$scope.playerString= "O ";
				$scope.checkWin();
				currentplayer--;
			}
		}
	}
$scope.resetGame= function(){ //reset game vars
	$scope.gameDone= 0;
	$scope.board = [null,null,null,null,null,null,null,null,null]; //game board
	currentplayer = 1;
	var playerString = null
	$scope.winMsg= "";
	$scope.playNum= "Player 1 to start! Place X"
}
$scope.gameOver= function(){ //games finished
	$scope.gameDone =1;
	$scope.playNum= $scope.winMsg;
	}

$scope.checkWin= function(){
		for(i = 0; i < 3; ++i)
		{
			// Left column
			if($scope.board[0+i] != null &&
				$scope.board[0+i]==$scope.board[3+i] &&
				$scope.board[3+i]== $scope.board[6+i])
			{
				$scope.winMsg= $scope.playerString+ "win - vertical";
				$scope.gameOver();
			}
			if($scope.board[0+(i*3)] != null &&
				$scope.board[0+(i*3)]==$scope.board[1+(i*3)] &&
			  	$scope.board[1+(i*3)]== $scope.board[2+(i*3)])
			{
				
				$scope.winMsg= $scope.playerString+ "win - horizontal";
				$scope.gameOver();
			}

		}
	if ($scope.board[0] != null && //diagonal left to right
		$scope.board[0] == $scope.board[4] &&
		$scope.board[4] == $scope.board[8])
	{

		$scope.winMsg= $scope.playerString+ "WIN - diagonal"
		$scope.gameOver();
	};

	if ($scope.board[2] != null && //diagonal right to left
		$scope.board[2] == $scope.board[4] &&
		$scope.board[4] == $scope.board[6])
	{
		$scope.winMsg= $scope.playerString+ "WIN - diagonal"
		$scope.gameOver();
	};

  $scope.checkFilled= function(){ // define fucntion to check if board is full of moves
	for (var i = 0; i < $scope.board.length; i++){
		if ($scope.board[i]==null){
			return false;
		};
	};
	return true;
  }
  	$scope.filled = $scope.checkFilled(); // set var to true or false depending on function result
	if($scope.filled==true && $scope.gameDone != 1){ //if true its a tie bcuz no one has won yet game board is full
		$scope.winMsg="Cats Game!!!";
		$scope.fileName="kitten-stroking-his-friend.gif" 
		$scope.gameOver()};
	}
}