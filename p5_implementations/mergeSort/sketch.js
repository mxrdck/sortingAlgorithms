let arr = [];
const width = 1600;
const height = 500;

const rect_width = 5;
let n = 0;
let k = 0;
const fr = 30;
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
    console.log(arr);
    arr = mergeSort(arr);
    console.log(arr);
    noLoop();
}

function draw() {


    //reset drawing each loop
    background(255);

    //draw current array
    fill(220);

    for (let i = 0; i < n; i++) {
        rect(rect_width * i, height - arr[i], rect_width, arr[i]);
    }


}



function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr

    } else {
        let mid = int(arr.length / 2);
        let leftArr = arr.slice(0, mid);
        //console.log(leftArr);
        let rightArr = arr.slice(mid, arr.length);
        //console.log(rightArr);
        leftArr = mergeSort(leftArr);
        rightArr = mergeSort(rightArr);
        
        return merge(leftArr, rightArr);
    }
}

function merge(leftArr, rightArr) {

    let newList = [];

    while (leftArr.length > 0 && rightArr.length > 0) {
        let elem;
        if (leftArr[0] <= rightArr[0]) {
            elem = leftArr.shift();
        } else {
            elem = rightArr.shift();
        }
        newList.push(elem);
    }

    while (leftArr.length > 0) {
        let elem = leftArr.shift();
        newList.push(elem);
    }

    while (rightArr.length > 0) {
        let elem = rightArr.shift();
        newList.push(elem);
    }

    return newList;
}



