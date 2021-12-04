let nodes =[];
let initialized = true;
let initializedspace = true;
let start_node,end_node;
const WIDTH = 5
const HEIGHT = 5


function setup(){
createCanvas(615,605);
    let jump = 30.5;
    frameRate(20);
    for (let y = 0; y < HEIGHT; y++) {
            let rows = []
          for (let x = 0; x < WIDTH; x++) {
            let c;
        
                c = color(150,150,150);
            
            
            let n = new Node(x * jump + 10,y * jump + 10,20,20,x,y,c);
            rows.push(n);
          }
        nodes.push(rows);
    }
}

function draw() {
    background(200,150);
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            nodes[y][x].display();
        }
    }
    if(mouseIsPressed && initialized){
        rand_x = Math.floor(random(0, WIDTH));
        rand_y = Math.floor(random(0, HEIGHT));
        nodes[rand_y][rand_x].col=color(0,0,0);
        nodes[rand_y][rand_x].display();
        start_node = nodes[rand_y][rand_x];

        rand_x = Math.floor(random(0, WIDTH));
        rand_y = Math.floor(random(0, HEIGHT));
        nodes[rand_y][rand_x].col=color(255,0,0);
        nodes[rand_y][rand_x].display();

        rand_x = Math.floor(random(0, WIDTH));
        rand_y = Math.floor(random(0, HEIGHT));
        nodes[rand_y][rand_x].col=color(0,255,0);
        nodes[rand_y][rand_x].display();

        rand_x = Math.floor(random(0, WIDTH));
        rand_y = Math.floor(random(0, HEIGHT));
        nodes[rand_y][rand_x].col=color(0,0,255);
        nodes[rand_y][rand_x].display();

        rand_x = Math.floor(random(0, WIDTH));
        rand_y = Math.floor(random(0, HEIGHT));
        nodes[rand_y][rand_x].col=color(255,255,255);
        nodes[rand_y][rand_x].display();
        end_node = nodes[rand_y][rand_x];
        initialized = false;
    }
    if(keyIsPressed && keyCode === 32 && initializedspace){
        largeur(start_node,end_node);
        initializedspace = false;
    }
}


function Node(x,y,width,height,rowInMatrix,colInMatrix,col) {
            this.x=x;
            this.y=y;
            this.width=width;
            this.height = height;
            this.col=col;
            this.colInMatrix = colInMatrix;
            this.rowInMatrix = rowInMatrix;
            this.state = "unvisited"
            this.neighbors = [];
    this.display = ()=>{
        fill(this.col);
        ellipse(this.x,this.y,this.width,this.height);
    }

    this.update_neighbors = (closed)=>{
        if(this.rowInMatrix + 1 <HEIGHT && !check(nodes[this.colInMatrix][this.rowInMatrix+1],closed)){
            this.neighbors.push(nodes[this.colInMatrix][this.rowInMatrix +1]);
         }
  
        if(this.colInMatrix +1 <WIDTH && !check(nodes[this.colInMatrix+1][this.rowInMatrix],closed)){
           this.neighbors.push(nodes[this.colInMatrix+1][this.rowInMatrix] );
        }
        
        if( this.rowInMatrix - 1 >0 && !check(nodes[this.colInMatrix][this.rowInMatrix-1],closed)){
            this.neighbors.push(nodes[this.colInMatrix][this.rowInMatrix -1]);
         }

        if( this.colInMatrix -1 >0 && !check(nodes[this.colInMatrix-1][this.rowInMatrix],closed) ){
           this.neighbors.push(nodes[this.colInMatrix-1][this.rowInMatrix]);
        }
  
        }
}

const check = (value, arr)=>{
    for (let index = 0; index < arr.length; index++) {
        if(value === arr[index]) 
            return true;
    }
    return false;
}


const largeur = (start_node,end_node)=>{
let opened = [];
let closed = [];
let Found = false;
let current_node = start_node;
current_node.update_neighbors(closed);
opened = opened.concat(current_node.neighbors);
closed.push(current_node);
console.log(opened);
for (const i of opened) {
    console.log(i.colInMatrix,i.rowInMatrix);
}
console.log("------------------------")
while(opened && !Found){
    current_node = opened.shift();
    if(current_node == end_node){
        console.log("Found it !!!")
        Found = true;
        break;
    }
    closed.push(current_node);
    current_node.update_neighbors(closed);
    opened = opened.concat(current_node.neighbors);
    for (const i of opened) {
        console.log(i.colInMatrix,i.rowInMatrix);
    }
    console.log("------------------------")
    current_node.col=color(255,255,0);
    current_node.display();
}

}