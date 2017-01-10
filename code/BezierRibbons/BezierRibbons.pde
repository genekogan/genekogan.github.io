int curridx, currt;
boolean picking, drawing, demoing, render, savingimage; 
PImage img;
BezierSpline bezspline;
Menu menu;
Demo demo;

int w, h;

void setup() {
  size(930,740);
  smooth();
  background(255);
  textSize(25);
  
  menu = new Menu();
  demo = new Demo();
  
  picking = true;
  render = true;
  drawing = false;
  demoing = false;
  savingimage = true;
  currt = 0;

  restartSplines();
  img = get();
}

void restartSplines() {
  bezspline = new BezierSpline();
  curridx = 0;
}

void draw() 
{ 
  background(0);
  image(img,0,0); 
  img = get();
  if (picking) {
    bezspline.drawSplines(true);
  } else if (drawing) {
    bezspline.drawNext();
    captureRender();
  } else if (demoing) {
    demo.drawNext();
  }
  menu.drawMenu();
  drawBorder();
} 

void mouseDragged() {
  if (picking) {
    int t = (int) (millis() / 100);
    if (t%2==0 && t!=currt) { 
      currt = t;
      bezspline.addVertex(curridx,mouseX,mouseY);
    }
  }
}

void mousePressed() {
  if (picking) {
    bezspline.addVertex(curridx,mouseX,mouseY);
  }
}

void mouseReleased() {
  if (picking) {
    bezspline.addVertex(curridx,mouseX,mouseY);
    if (bezspline.s[curridx].vertices.size()>2) {      // STILL BROKEN?
      curridx++;
    } else {
      bezspline.s[curridx].clearVertices();
    }
    if (curridx==4) { 
      bezspline.finish();
      picking = false;
      drawing = true;
      menu.idx = 2;
    }
  }
  menu.checkMenuActions();
}

void captureRender() {
  img = get();
  if (render==false) {
    pushStyle();
    fill(255,190);  
    rect(0,0,width,height);
    bezspline.drawProcess();
    popStyle();
  }
} 

void drawBorder() {
  pushStyle();
  noFill();
  strokeWeight(3);
  stroke(0,110);
  rect(0,0,width,height);
}


