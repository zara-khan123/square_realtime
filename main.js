noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('grey');
    fill('#fc03c6');
    stroke('#fc03c6');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Width and Height of the square will be" + difference + "px";
}

function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("working");
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX + "rightWrist" + rightWristX + "difference = " + difference);
        
    }
}

