let arr = [];
let width;
let height;

const rect_width = 10;
let n = 0;
let k = 0;
let max_k;
const fr = 500;
let movesP;
let swapped = true;
let sorted;

function setup() {
    width=1200;
    height=500;
    createCanvas(width, height);
    frameRate(fr);
    sorted = false;
    n = int(width / rect_width);
    max_k = n-1;
    for (let i = 0; i < n; i++) {
        arr[i] = int(random(100, height));
    }

    background(255);
    movesP = select('#n_movesParagraph');
    //noLoop();
}

function draw() {

    
    //reset drawing each loop
    background(255);
    fill(220);
    
    //pseudocode
    /* 
    Iterate through array and compare current element to next element
    If curr > next, swap.
    Continue until end of algorithm
    If no element was swapped, array is sorted
    */

    //draw array
    for (let i = 0; i < n; i++) {
        if(i==k && sorted==false){
            fill("green");
        }else if(i==k+1 && sorted==false){
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
    }

    movesP.html("Moves: "+frameCount);
    //if there are more elements to compare, move to the right (stop at len-2)
    if(k<max_k)
        k++;

        
    if(swapped==false && k==max_k){
        noLoop();
        sorted = true;
        redraw();
    }
    else if(swapped==true && k==max_k){
        max_k--;
        k=0;
        swapped=false;
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

