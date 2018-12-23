/*
  BUBBLE SORT ALGORITHM.
*/

var max = 10;
var labels = createTheLabels( max );
var data = createRandomValues( max );
var ep1 = 0;
var ep2 = 0;
var currIt = 0;
var dataLast;
var dataNext;
updateChart( labels , data );


// Algorithm steps:
//
// 1.) Give random numbers from 1 - max
// 2.) Create a single repeat of the bubble sort algorithm
// 3.) Update the chart with the new data.

//Creates the random values
function goByTick( tick ){
  var doIt = setInterval(function(){
    if( ep2 == max - 1 ){
      ep1++;
      ep2 = 0;
    }
    ep2++;
    if( ep2 == max - 1 && ep1 == max - 1 ){
      window.alert('finished!');
      stateOfButtons( [true , true , false] );
      clearInterval( doIt );
      //console.log(historyTable);
    }
    console.log( ep1 , ep2 );
    data = bubbleSort( data , ep1 , ep2 );

    updateChart( labels , data );
  },tick);
}

function createRandomValues( max ){
  var randomValues = [];
  for( var i = 0;i<max;i++ ){
    randomValues.push( Math.round( Math.random() * 100 ) );
  }
  return randomValues;
}

function createTheLabels( max ){
  var labels = [];
  for( var i = 0;i<max;i++ ){
    labels.push( i );
  }
  return labels;
}

function bubbleSort( list , ep1 , ep2 ){
  var temp = -1;
  if( list[ep2] > list[ep2 - 1] ){
    temp = list[ep2];
    list[ep2] = list[ep2 - 1];
    list[ep2 - 1] = temp;
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

function stateOfButtons( state ){
  document.getElementById('next').disabled = state[0];
  document.getElementById('finish_fast').disabled = state[1];
  document.getElementById('reset').disabled = state[2];
}

//Initialzation and connection to front end

document.getElementById('next').addEventListener('click',() => {
  if( ep2 == max - 1 ){
    ep1++;
    ep2 = 0;
  }
  ep2++;
  if( ep2 == max - 1 ){
    window.alert('finished!');
    stateOfButtons( [true,true,false] );
  }
  console.log( ep1 , ep2 , max);
  //console.log( data );
  data = bubbleSort( data , ep1 , ep2 );
  //console.log(data);
  updateChart( labels , data );
});

document.getElementById('reset').addEventListener('click',()=>{
  historyTable = [];
  stateOfButtons( [false,false,false] );
  labels = createTheLabels( max );
  data = createRandomValues( max );
  ep1 = 0;
  ep2 = -1;
  updateChart( labels , data );
});

document.getElementById('finish_fast').addEventListener('click',() => {
  stateOfButtons([true,true,true]);
  goByTick( document.getElementById('speed').value );
  
});

document.getElementById('amountOfPoints').addEventListener('change',() => {
  max = document.getElementById('amountOfPoints').value;
  stateOfButtons( [false,false,false] );
  labels = createTheLabels( max );
  data = createRandomValues( max );
  ep1 = 0;
  ep2 = -1;
  updateChart( labels , data );
});
