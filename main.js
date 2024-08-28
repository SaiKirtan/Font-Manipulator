difference = '0'

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

/*function draw(){
    background('#969A97');
    document.getElementById('font')
    textSize(difference);
    text('Hello World', 10, 100);
    document.getElementById("").innerHTML = "Width And Height of the text will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}
*/
function draw(){
    background("#5196e3"); 
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference); 
    fill("#00ff0a"); 
    text('Hello World',50,300);
}
function modelLoaded(){
    console.log('PoseNet is Ininitialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX +"difference = " + difference);
}
}