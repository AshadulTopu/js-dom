
let images = ["IMG_0050.JPG", "IMG_0101.JPG", "IMG_0182.JPG"];
let currentImage = document.getElementById("img");

let count = 0;

function nextImg(){
    count++;

    if(count >= images.length){
        count= 0;
        currentImage.src = images[count]
    }
    // count++;
    currentImage.src = images[count]
    console.log(count);
}

function prevImg(){
    count--;
    if(count < 0){
        count = images.length -1;
    }
    currentImage.src = images[count]
    console.log(count);
}