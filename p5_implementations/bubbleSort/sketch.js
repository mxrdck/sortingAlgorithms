let arr = [];
const width = 800;
const height = 500;

const rect_width = 10;
let n = 0;
let k = 0;
let max_k = n;
const fr = 60;
let movesP;
let swapped = true;

function setup() {
    createCanvas(width, height);
    frameRate(fr);

    n = int(width / rect_width);
    for (let i = 0; i < n; i++) {
        arr[i] = random(100, height);
    }

    background(255);
    movesP = select('#n_movesParagraph');
    //noLoop();
}

function draw() {

    
    //reset drawing each loop
    background(255);
    fill(220);
    swapped=false;
    //pseudocode
    /* 
    Iterate through array and compare current element to next element
    If curr > next, swap.
    Continue until end of algorithm
    If no element was swapped, array is sorted
    */

    //draw array
    for (let i = 0; i < n; i++) {
        if(i==k){
            fill("green");
        }else if(i==k+1){
            fill("red");
        }else{
            fill(220);
        }
        rect(rect_width * i, height - arr[i], rect_width, arr[i]);
    }

    curr = arr[k];
    next = arr[k + 1];

    if (curr > next) {
        arr = swap(arr, k, k + 1);
        swapped = true;
        console.log("swapped: "+swapped);
    }

    //if there are more elements to compare, move to the right (stop at len-2)
    if(k<arr.length-1)
        k++;
    if(swapped=false && k==arr.length-1){
        noLoop();
    }
    else if(swapped=true && k==arr.length-1){
        k=0;
    }

    //array is sorted if we are at end of the array and didn't swap any element
    //if we are at the end but did swap, we need to check again from the beginning
    
    




}

function swap(array, i, j) {
    let intermediate = array[i];
    array[i] = array[j];
    array[j] = intermediate;

    return array;
}

function keyPressed() {
    redraw();
}

