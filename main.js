rightEye_x = 0;
rightEye_y = 0;

leftEye_x = 0;
leftEye_y = 0;
function preload() {
   fired_eye = loadImage("https://ak.picdn.net/shutterstock/videos/1031899247/thumb/1.jpg")
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    canvas.set(600, 600);
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Pose Net has been initialized");
}

function draw() {
    image(video, 0, 0, 600, 600);
    fill(255, 100, 0);
    stroke(255,100,0);
    circle(rightEye_x, rightEye_y, 40);
    circle(leftEye_x, leftEye_y, 40);
}

function take_snapshot() {
    img_name = document.getElementById("name").value;
    save(img_name + ".png");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightEye_x = results[0].pose.rightEye.x;
        rightEye_y = results[0].pose.rightEye.y;

        leftEye_x = results[0].pose.leftEye.x;
        leftEye_y = results[0].pose.leftEye.y;
    }
}