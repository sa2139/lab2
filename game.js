function Bear() {
 this.dBear = 100;
 this.htmlElement = document.getElementById("bear");
 this.id = this.htmlElement.id;
 this.x = this.htmlElement.offsetLeft;
 this.y = this.htmlElement.offsetTop;
 this.move = function(xDir, yDir) {
 this.x += this.dBear * xDir;
 this.y += this.dBear * yDir;
 this.display();
 };
 this.display = function() {
 this.htmlElement.style.left = this.x + "px";
 this.htmlElement.style.top = this.y + "px";
 this.htmlElement.style.display = "absolute";
 };
 
 function start() {
 //create bear
    bear = new Bear();
};

// Handle keyboad events
// to move the bear
function moveBear(e) {
 //codes of the four keys
    const KEYUP = 38;
    const KEYDOWN = 40;
    const KEYLEFT = 37;
    const KEYRIGHT = 39;
    if (e.keyCode == KEYRIGHT) {
        bear.move(1, 0)
    } // right key
    if (e.keyCode == KEYLEFT) {
        bear.move(-1, 0)
    } // left key
    if (e.keyCode == KEYUP) {
        bear.move(0, -1)
    } // up key
    if (e.keyCode == KEYDOWN) {
        bear.move(0, 1)
    } // down key
};

function start() {
 //create bear
    bear = new Bear();
 // Add an event listener to the keypress event.
    document.addEventListener("keydown", moveBear, false);
};

this.fitBounds = function() {
 let parent = this.htmlElement.parentElement;
 let iw = this.htmlElement.offsetWidth;
 let ih = this.htmlElement.offsetHeight;
 let l = parent.offsetLeft;
 let t = parent.offsetTop;
 let w = parent.offsetWidth;
 let h = parent.offsetHeight;
 if (this.x < 0) this.x = 0;
 if (this.x > w - iw) this.x = w - iw;
 if (this.y < 0) this.y = 0;
 if (this.y > h - ih) this.y = h - ih;
 };
 
 this.move = function(xDir, yDir) {
 this.fitBounds(); //we add this instruction to keep bear within board
 this.x += this.dBear * xDir;
 this.y += this.dBear * yDir;
 this.display();
 };

lass Bee {
 constructor(beeNumber) {
 //the HTML element corresponding to the IMG of the bee
 this.htmlElement = createBeeImg(beeNumber);
 //iits HTML ID
 this.id = this.htmlElement.id;
 //the left position (x)
 this.x = this.htmlElement.offsetLeft;
 //the top position (y)
 this.y = this.htmlElement.offsetTop;
 this.move = function(dx, dy) {
 //move the bees by dx, dy
 this.x += dx;
 this.y += dy;
 this.display();
 };
 this.display = function() {
 //adjust position of bee and display it
 this.fitBounds();//add this to adjust to bounds
 this.htmlElement.style.left = this.x + "px";
 this.htmlElement.style.top = this.y + "px";
 this.htmlElement.style.display = "block";
 };
 this.fitBounds = function() {
 //check and make sure the bees stays in the board space
 let parent = this.htmlElement.parentElement;
 let iw = this.htmlElement.offsetWidth;
 let ih = this.htmlElement.offsetHeight;
 let l = parent.offsetLeft;
 let t = parent.offsetTop;
 let w = parent.offsetWidth;
 let h = parent.offsetHeight;
 if (this.x < 0)
 this.x = 0;
 if (this.x > w - iw)
 this.x = w - iw;
 if (this.y < 0)
 this.y = 0;
 if (this.y > h - ih)
 this.y = h - ih;
 };
 }
}; 


function createBeeImg(wNum) {
 //get dimension and position of board div
 let boardDiv = document.getElementById("board");
 let boardDivW = boardDiv.offsetWidth;
 let boardDivH = boardDiv.offsetHeight;
 let boardDivX = boardDiv.offsetLeft;
 let boardDivY = boardDiv.offsetTop;
 //create the IMG element
 let img = document.createElement("img");
 img.setAttribute("src", "images/bee.gif");
 img.setAttribute("width", "100");
 img.setAttribute("alt", "A bee!");
 img.setAttribute("id", "bee" + wNum);
 img.setAttribute("class", "bee"); //set class of html tag img
 //add the IMG element to the DOM as a child of the board div
 img.style.position = "absolute";
 boardDiv.appendChild(img);
 //set initial position
 let x = getRandomInt(boardDivW);
 let y = getRandomInt(boardDivH);
 img.style.left = (boardDivX + x) + "px";
 img.style.top = (y) + "px";
 //return the img object
 return img;
}
