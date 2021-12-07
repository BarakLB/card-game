function createBoard(size) {
  var board = [];
  for (var i = 0; i < size; i++) {
      board.push([])
      for (var j = 0; j < size; j++) {
          board[i][j] = ''
      }
  }
  return board;
}



function copyMat(mat) {
  var newMat=[]
  for(vari=0;i<mat.length;i++) {
    newMat[i]=[]
    for(var j=0;j<mat.length;j++) {
      newMat[i][j]=mat[i][j]  
    }
  }
  return newMat
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function toggleGame(elBtn) {
  if (gGameInterval) {
      clearInterval(gGameInterval);
      gGameInterval = null;
      elBtn.innerText = 'Play';
  } else {
      gGameInterval = setInterval(play, GAME_FREQ);
      elBtn.innerText = 'Pause';

  }
}

function countNegs(cellI, cellJ, mat) {
  var negsCount = 0;
  for (var i = cellI - 1; i <= cellI + 1; i++) {
      if (i < 0 || i > mat.length - 1) continue;
      for (var j = cellJ - 1; j <= cellJ + 1; j++) {
          if (j < 0 || j > mat[i].length - 1) continue;
          if (i === cellI && j === cellJ) continue;
        
          if (mat[i][j]) negsCount++;// might need a change
      }
  }
  return negsCount;
}


function playSound(file) {
  var audio = new Audio(file)
  audio.play()
}

function drawNum() {
  var idx = getRandomInt(0, gNums.length)
  var num = gNums[idx]
  gNums.splice(idx, 1)
  return num
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// printPrimaryDiagonal(mat)

function printPrimaryDiagonal(squareMat) {
  for (var d = 0; d < squareMat.length; d++) {
      var item = squareMat[d][d];
      console.log(item);
  }
}


// printSecondaryDiagonal(mat)

function printSecondaryDiagonal(squareMat) {
  for (var d = 0; d < squareMat.length; d++) {
      var item = squareMat[d][squareMat.length - 1 - d];
      console.log(item);
  }
}
