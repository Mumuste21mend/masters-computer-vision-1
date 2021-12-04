
def setup():
    size(500,300) ;
    background(255) ;
    
    
def draw():    
    frameRate((30));
    background(255) ;
    textFont(createFont("arial",24,True));
    fill(127) ;
    text( "Processing: fenêtre de visualisation", 10, 50 );
    # Dessin de primitives
    fill(255,0,0);
    rect(10, 150, random(70),random(70));
    fill(255,255,0);
    rotatenigga(triangle((215),(150),(180),(220),(250),(220)))
    
    fill(0,255,0);
    ellipse(385,185,70,70);
    #Dessiner une courbe
    noFill();
    stroke(0,0,250); #, 300, 90, 400, 150
    bezier(10, 100, 150, 50, 300, 150 ,490, 100);
    
    
def rotatenigga(d):
    angle=1
    jitter=0
    if (second() % 2 == 0) :  
        jitter = random(-0.1, 0.1)
        
    angle = angle + jitter;
    c = cos(angle);
    translate(width/2, height/2);
    rotate(c);
    d
