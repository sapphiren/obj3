video = "";

function preload(){
    video = createVideo(480, 380)
    video.hide;
}

function setup(){
    canvas = createCanvas(480, 380)
    canvas.center
}

function start(){
    console.log("Model Loaded")
    status = true;
    video.loop()
    video.speed(1);
    video.volume(0)
}