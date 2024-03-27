// Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d"); 

var studentID = 202034012;

function drawNum(num){
    
}

// (50, 300) (974,300) magenta 3
ctx.beginPath();
ctx.moveTo(50,canvas.height/2);
ctx.lineTo(canvas.width - 50, canvas.height/2);
ctx.strokeStyle = "magenta";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

drawNum(studentID); //화면 좌측상단에 숫자 쓰기