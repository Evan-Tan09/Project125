noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotPoses(results) {
    if (results.length > 0) {
        //console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        console.log("noseX=" + noseX);
        console.log("noseY=" + noseY);
        console.log("leftWristX=" + noseX);
        console.log("RightWristX=" + noseY);

    }
}

function draw() {
    background('#969A97');
    document.getElementById("recognition").innerHTML = "The size of the text is "+difference;
    textSize(difference);
    text('word', noseX, noseY);
    fill(0, 102, 153);
}