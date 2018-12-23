/*
 QUICK SORT ALGORITHM
*/
// algorithm steps:
//
// 1.) select a pivot point
// 2.) move the smaller on the left and the biggest on the right
// 3.) Repeat on each side of the list.
var max = document.getElementById('amountOfPoints').value;
var randomList = createList( max );
var pivot = randomList[Math.round( randomList.length/2) ];
var labels = generaleLabels( max );
updateChart( labels , randomList );

function createList( max ){
  var randomList = [];
  for( var  i = 0; i<max;i++ ){
    randomList.push( Math.round( Math.random() * 1000 ) );
  }
  return randomList;
}

function quick_sort(origArray,str,speed) {
	if (origArray.length == 1) {
		return origArray;
	}
  else if( origArray.length == 0 ){
    return origArray;
  }
   else {

    var countLeft = 0;
    var k = 0;
		var left = [];
		var right = [];
    var myArray = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
        countLeft++;
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

    myArray.push(...left);
    myArray.push(pivot);
    myArray.push(...right);
    for( i = str;i<=str+right.length+left.length;i++){
      randomList[i] = myArray[k];
      k++;
    }
    var strOfLeft = str;
    var strForRight = str + countLeft;
    if( left.length == 1 || left.length == 0){
      strOfLeft++;
    }
    if( right.length == 1 || right.length == 0 ){
      strForRight++;
    }

    updateChart( labels , randomList );
    setTimeout(()=>{
		    return newArray.concat(quick_sort(left,strOfLeft,speed), pivot, quick_sort(right,strForRight+1,speed));
    },speed);
	}
}

function stateOfButtons( state ){
  document.getElementById('next').disabled = state[0];
  document.getElementById('finish_fast').disabled = state[1];
  document.getElementById('reset').disabled = state[2];
}


function generaleLabels( max ){
  var list = [];
  for( var i = 0;i<max;i++ ){
    list.push(i);
  }
  return list;
}

function updateChart( labels , data ){
  var ctx = document.getElementById('canvas').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
          labels: labels,
          datasets: [{
              label: "Bubble sort",
              backgroundColor: 'rgb(26, 188, 156)',
              data: data,
          }]
      },
      options: {
        animation: { duration : 0 },
        events:[]
      }

      // Configuration options go here
  });
}

document.getElementById('finish_fast').addEventListener('click',() => {
  var list = quick_sort( randomList , 0 , document.getElementById('speed').value );
  var doIt = setInterval(()=>{
    if( list != null ){
      window.alert('finished');
      clearInterval(doIt);
    }
  },5);
});

document.getElementById('reset').addEventListener('click',()=> {
  max = document.getElementById('amountOfPoints').value;
  randomList = createList( max );
  pivot = randomList[Math.round( randomList.length/2) ];
  labels = generaleLabels( max );
  updateChart( labels , randomList );
});

document.getElementById('amountOfPoints').addEventListener('change',()=>{
  max = document.getElementById('amountOfPoints').value;
  randomList = createList( max );
  pivot = randomList[Math.round( randomList.length/2) ];
  labels = generaleLabels( max );
  updateChart( labels , randomList );
});
