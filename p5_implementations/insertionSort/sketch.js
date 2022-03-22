let arr = [];
const width = 800;
const height = 500;
const rect_width = 5;
let n = 0;

let k = 1;
let newPos = -1;

const fr = 30;

let movesP;

let sorted;

function setup() {
    createCanvas(width, height);
    frameRate(fr);
    n = int(width / rect_width);
    for (let i = 0; i < n; i++) {
        arr[i] = int(random(100, height));
    }

    background(255);
    movesP = select('#n_movesParagraph');
    
    sorted = false;
}

function draw() {

    
    //reset drawing each loop
    background(255);
    
    //draw current array
    //if val is in sorted part, fill blue
    //if val is current elem to be sorted, fill red
    //else fill gray
    //if sorted fill gray

    for (let i = 0; i < n; i++) {
        if (i ==k && sorted==false) {
            fill("red");
        } else if (newPos != -1 && newPos==i){
            fill("yellow");
        } else if(i<k && sorted==false){
            fill("blue");
        }else {
            fill(220);
        }
        rect(rect_width * i, height - arr[i], rect_width, arr[i]);
    }

    if(sorted){
        noLoop();
    }

    curr = arr[k];

    if(curr==undefined){
        sorted = true;
    }
   
    newPos = findPosition(subset(arr,0,k),curr);
    arr.splice(newPos,0,curr);
    arr.splice(k+1,1);
   
    
    
    //update moves
    
    movesP.html("Moves: "+(k-1));

    //if sorted, stop
    if(k==arr.length+1)
        sorted==true;

    k++;
}



function findPosition(array,element){
    
    //if element is smaller than elem at [i], insert elem here
    for(let i=0; i<array.length;i++){
        if(element<array[i]){
            return i;
        }
    }
    //if element is equal or greater, append element at the end of array
    return array.length;
}


