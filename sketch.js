function setup(){
    canvas = createCanvas(700,600);
    video = createCapture(VIDEO);
    video.hide()
    
}

function draw(){
    image(video, 200,150, 300,300);
    fill("red");
    stroke("red");
    circle(100,100, 100);
    circle(600,100,100);
    circle(600,500,100);
    circle(100,500,100);
    fill("green");
    stroke("green");
    rect(150,90,400,20);
    rect(150,490,400,20);
    rect(90,150,20,300);
    rect(590,150,20,300);
}

function take_snapshot(){
    save("myImage.jpeg");
}