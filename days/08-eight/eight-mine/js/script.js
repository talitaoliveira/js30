const canvas 		= document.querySelector("#draw");
const color			= document.querySelector("#btn-color");
const btnColored 	= document.querySelector("#btn-colored");
const constLine 	= document.querySelector("#const-line");
const sizeLine 		= document.querySelector("#size-line");
const btnClear 		= document.querySelector("#btn-clear");
const rangeValue 	= document.querySelector("#range-value");

ctx = canvas.getContext('2d');

canvas.width = window.innerWidth / 1.5;
canvas.height = window.innerHeight / 1.5;

ctx.strokeStyle = color.value;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let linha = (window.innerWidth * 80) / 1920;

ctx.lineWidth = linha;

let isDrwaing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

let colored = false;
let constLineActive = false;

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(ctx.lineWidth);

function draw(e) {

	var touches = e.changedTouches;

	if (!isDrwaing) return; // stop the function from running when they are not moused down
	console.log(e);

	if(colored == true){
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;	
	}


	ctx.beginPath();

	// start from
	ctx.moveTo(lastX,lastY);

	//go to
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();

	[lastX, lastY] = [e.offsetX, e.offsetY];

	hue++;
	if(hue >= 360){
		hue =0;
	}

	if(ctx.lineWidth >= linha || ctx.lineWidth <= 1){
		direction = !direction;
	}

	if(constLineActive == false){
		if(direction){
			ctx.lineWidth++;	
		}else{
			ctx.lineWidth--;
		}
	}
}	


canvas.addEventListener("mousedown", (e) => {
	isDrwaing = true;

	[lastX, lastY] = [e.offsetX, e.offsetY];
});

// verificação de desenho
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchmove", draw);

canvas.addEventListener("mouseup", () => isDrwaing = false);
canvas.addEventListener("touchstart", () => isDrwaing = false);

canvas.addEventListener("mouseout", () => isDrwaing = false);
canvas.addEventListener("touchleave", () => isDrwaing = false);

color.addEventListener("change", (e) => {
	ctx.strokeStyle = e.target.value;
	colored = false;
});

// alterando o tipo da cor
btnColored.addEventListener("click", (e) => {
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	colored = true;
});

// alterando tipo da linha (se vai ficar alterando o tamanho ou se vai manter constante~)
constLine.addEventListener("click", (e) => {
	constLineActive = (e.target.checked) ? 1 : 0;
	ctx.lineWidth = sizeLine.value;
});

// altrando o tamanho da linha de acordo com o range (pelo change ou mouse move)
sizeLine.addEventListener("change", (e) => {
	if(constLineActive){
		ctx.lineWidth = e.target.value;	
		rangeValue.innerHTML = e.target.value;
	}
});
sizeLine.addEventListener("mousemove", (e) => {
	if(constLineActive){
		ctx.lineWidth = e.target.value;	
		rangeValue.innerHTML = e.target.value;
	}
});

// limpar
btnClear.addEventListener("click", (e) => ctx.clearRect(0, 0, canvas.width, canvas.height));