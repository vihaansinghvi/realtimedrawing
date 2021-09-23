difference = 0;
rightWristX = 0;
leftWristX = 0;


noseX=0;
noseY=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(40,135);

    canvas = createCanvas(550, 500);
    canvas.position(800,155);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}

function draw() {
    background('black');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be " + difference +"px";
    fill('white');
    stroke('red');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +" rightWristX = "+"difference = " + difference);
    }
}