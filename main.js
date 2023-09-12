noseX = 0;
noseY = 0;

function preload(){
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img, noseX, noseY, 200, 100);
}

function take_snapshot() {
    save("my_filter_selfie.png");
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        cnoseX = results[0].pose.nose.x + 7;
        noseY = results[0].pose.nose.y;
        console.log("nose_x = " + results[0].pose.nose.x);
        console.log("nose_y = " + results[0].pose.nose.y);
    }
}
