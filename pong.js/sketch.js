
let xBolinha = 300;
let yBolinha = 200;
let diametro = 60;
let velocidadexBolinha = 6; 
let velocidadeyBolinha = 6; 
let raio = diametro / 2;

function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    criarBolinha();
    movimentarBolinha();

    circle(xBolinha, yBolinha, diametro);

    xBolinha += velocidadexBolinha;
    
    if(xBolinha + raio > width || xBolinha - raio < 0 ) {    
       velocidadexBolinha *= -1;
       
    }
 
    function criarBolinha(){
        circle(xBolinha,yBolinha,diametro);
    }
    function movimentarBolinha () {
        xBolinha += velocidadexBolinha;
    }

    yBolinha += velocidadeyBolinha;

    if(yBolinha + raio > height || yBolinha - raio < 0 ) { 
        velocidadeyBolinha *= - 1;
    }
    
  
}
