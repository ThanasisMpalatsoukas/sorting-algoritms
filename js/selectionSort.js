/*
  BUBBLE SORT ALGORITHM.
*/

var max = document.getElementById('amountOfPoints').value;
var labels = createTheLabels( max );
var data = createRandomValues( max );
updateChart(labels,data);


function selectionSort(data,speed){
  flag = true;
  var sorted = 0;
  var doIt = setInterval(()=>{
    sorted++;
    var currPos = sorted;
    flag2 = true;
    while(flag2){
      if( data[currPos] < data[currPos - 1] ){
        var temp = data[currPos];
        data[currPos] = data[currPos - 1];
        data[currPos - 1] = temp;
        //updateChart(labels,data);
      }
      else{
        flag2 = false;
      }
      currPos--;
      if(currPos == 0){
        flag2 = false;
      }
    }
    if(sorted == data.length){
      stateOfButtons([true,false]);
      window.alert('finished!');
      flag = false;
      clearInterval(doIt);
    }
    updateChart(labels,data);
  },speed);
  return data;
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
  //document.getElementById('next').disabled = state[0];
  document.getElementById('finish_fast').disabled = state[0];
  document.getElementById('reset').disabled = state[1];
}

//Initialzation and connection to front end
document.getElementById('finish_fast').addEventListener('click',() => {
  stateOfButtons([true,true]);
  speed = document.getElementById('speed').value;
  data = selectionSort(data,speed);
  console.log(data);
});

document.getElementById('amountOfPoints').addEventListener('change',() =>{
  stateOfButtons([false,false]);
  max = document.getElementById('amountOfPoints').value;
  labels = createTheLabels( max );
  data = createRandomValues( max );
  updateChart( labels , data );
});

document.getElementById('reset').addEventListener('click',() => {
  stateOfButtons([false,false]);
  max = document.getElementById('amountOfPoints').value;
  labels = createTheLabels( max );
  data = createRandomValues( max );
  updateChart( labels , data );
});
