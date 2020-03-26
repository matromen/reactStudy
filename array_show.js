var baseData = [];
var positionData = [];
var tableTag;

function init() {
    [0, 1, 2, 3, 4].forEach((row, rindex) => {
        baseData.push([]);
        [0, 1, 2, 3, 4].forEach((col, jindex) => {
            baseData[rindex].push(0);
        });
    });
}



function positionRandom() {
    positionData = [];

    [0, 1, 2, 3, 4].forEach((row, rindex) => {
        [0, 1, 2, 3, 4].forEach((col, jindex) => {
            if(!baseData[rindex][jindex]) {
                positionData.push([rindex, jindex]);
            }
        });
    });

    // console.log(positionData);
    if(positionData.length<=0){
        return;
    }

    var random  = positionData[Math.floor(Math.random()*(positionData.length))];
    // console.log(random);
    render(random);

}


function render(random){
    tableTag = document.getElementById('stable');
    tableTag.innerHTML = '';

    for(var i=0; i<5; i+=1){
        var trTag = document.createElement('tr');
        for(var j=0; j<5; j+=1) {
            var tdTag = document.createElement('td');
            if(baseData[i][j]){
                tdTag.textContent = 2;
            }else{
                tdTag.textContent = '';
            }
            trTag.appendChild(tdTag);
        }
        tableTag.appendChild(trTag);
    }

    baseData[random[0]][random[1]] = 2;
    tableTag.children[random[0]].children[random[1]].textContent = 5;
    // console.log(tableTag.children[random[0]].children[random[1]]);
}

init();
positionRandom();

document.getElementById('stable').addEventListener('mousedown', ()=>{
    // console.log('mousedown');
});

document.getElementById('stable').addEventListener('mousemove', ()=>{
    // console.log('mousemove');
});


document.getElementById('stable').addEventListener('mouseup', function(){
    console.log('mouseup');

    var tempData = [
        [],[],[],[],[]
    ];

    [0,1,2,3,4].forEach((rowValue, rowIndex)=>{
        [0,1,2,3,4].forEach((colValue, colIndex)=>{
            if(baseData[rowIndex][colIndex]) {
                tempData[colIndex].push(baseData[rowIndex][colIndex]);
            }
        });
    });

    console.log(tempData);


    [0,1,2,3,4].forEach((rowValue, colIndex)=>{
        [0,1,2,3,4].forEach((colValue, rowIndex)=>{
            baseData[rowIndex][colIndex] = tempData[colIndex][rowIndex];
        });
    });

    positionRandom();
    init();
});


