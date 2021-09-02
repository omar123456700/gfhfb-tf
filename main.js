function preload(){

}


function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("poseNet is initialized");
}

nosex=0;
nosey=0;

function gotPoses(results){
if (results.length>0)
{
    console.log(results);
    nosex=results[0].pose.nose.x;
    console.log("nosex"+nosex);
    console.log("nosey"+nosey);
    nosey=results[0].pose.nose.y;
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
}
}

function draw(){
image(video,0,0,300,300);
fill(172,108,242);
stroke(172,108,242);

circle(nosex,nosey,50);
}

function takesnapshot(){
save('your!_LOL_!picture.png');
}