function preload() {
    sunglasses = loadImage("https://i.postimg.cc/BZYnYsWQ/unnamed.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y-15;
        console.log("leftEye x = " + leftEyeX);
        console.log("rightEye y = " + leftEyeY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(sunglasses, leftEyeX, leftEyeY, 70, 50);
}

function takeSnapshot() {
    save("my_selfie.jpg");
}