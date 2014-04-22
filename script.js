function TictacController($scope){

	$scope.board = [null,null,null,null,null,null,null,null,null];
	var currentplayer = 1;

	$scope.clicker = function(cellIndex) {
		if($scope.board[cellIndex]==null){
			if (currentplayer == 1) {
				$scope.playNum = "Player 1";
				$scope.board[cellIndex]= "X";
				currentplayer++;
				console.log($scope.board);
				$scope.checkWin();
			} 
			else {
				$scope.playNum = "Player 2";
				$scope.board[cellIndex]= "O";
				currentplayer--;
				console.log($scope.board);
				$scope.checkWin();
			}

		}
		

	}

	$scope.checkWin = function() {
		if($scope.board[0]==$scope.board[1] && $scope.board[1]== $scope.board[2]){
			console.log("win")
		}
		else if($scope.board[3]==$scope.board[4] && $scope.board[4]== $scope.board[3]){
			console.log("win")
		}
		else if($scope.board[6]==$scope.board[7] && $scope.board[7]== $scope.board[6]){
			console.log("win")
		}
		else if($scope.board[0]==$scope.board[3] && $scope.board[3]== $scope.board[7]){
			console.log("win")
		}
		else if($scope.board[0]==$scope.board[1] && $scope.board[1]== $scope.board[2]){
			console.log("win")
		}
		else if($scope.board[0]==$scope.board[1] && $scope.board[1]== $scope.board[2]){
			console.log("win")
		}
		else if($scope.board[0]==$scope.board[1] && $scope.board[1]== $scope.board[2]){
			console.log("win")
		}
		else if($scope.board[0]==$scope.board[1] && $scope.board[1]== $scope.board[2]){
			console.log("win")
		}

	}
}








/*window.onload = function(){

	// Find all the rows
	rows = document.getElementsByClassName("row");
	// Cycle through each one
	for(var i = 0; i < rows.length; i++)
	{
		// Find all 4 cells on a given row
		cells = rows[i].getElementsByTagName("div");
		// Cycle through each of the cells
		for(var c = 0; c < cells.length; c++)
		{
			// Make each of the four cells in this row
			// respond to a mouseclick event
			cells[c].onclick = mouseClick;
		}
	}
	
}



var trackPlayerTurn=2;
var playerOne=0;
var playerTwo=0;
// When a cell is clicked, this gets called
	function mouseClick(){
		
		console.log("this is " + trackPlayerTurn);
		if (trackPlayerTurn%2==0){
		this.innerHTML= "X"
		}
		else if(trackPlayerTurn%2==1){
			this.innerHTML="O"
		}

		trackPlayerTurn++;
	

		
	};*/