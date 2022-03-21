let arr = [];
const width = 800;
const height = 500;

const rect_width = 5;
let n = 0;
let k = 0;
const fr = 5;
let movesP;

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

    //look only at unsorted part of array
    sub_arr = subset(arr, k);
    min_index = arr.indexOf(min(sub_arr), arr);


    //draw current array
    
    fill(220);

    for (let i = 0; i < n; i++) {
        if (i == min_index && i!=k) {
            fill("red");
        } else if (i == k && k!=arr.length-1) {
            fill("green");
        } else {
            fill(220);
        }
        rect(rect_width * i, height - arr[i], rect_width, arr[i]);
    }

    //move min element of subarray to beginning of subarray
    arr = swap(arr, min_index, k);
    k++;
    

    //update moves
    
    movesP.html("Moves: "+k);

    if (k == arr.length)
        noLoop();




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

