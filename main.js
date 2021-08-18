function preload() {
	world_start = loadSound("world_start.wav");
	Mario_jump = loadSound("jump.wav");
	Mario_gameOver = loadSound("gameover.wav");
	Mario_die = loadSound("mariodie.wav");
	Mario_coin = loadSound("coin.wav");
	Mario_kick = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600, 300)
	video.parent('gameConsole')
	poseNet = ml5.poseNet(video, modelloaded);
	poseNet.on('pose', gotposes);
}

function modelloaded(){
	console.log('Model Loaded');
}

function draw() {
	game()
}

function gotposes(results){
	if(results.length > 0){
		NoseX = results[0].pose.nose.x;
		NoseY = results[0].pose.nose.y;
	}
}




