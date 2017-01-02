class Menu {
  
  int RESTART1_X = 50;         int RESTART1_W = 130;
  int WATCHDEMO_X = 200;       int WATCHDEMO_W = 170;
  
  int PROCESSVIEW_X = 10;      int PROCESSVIEW_W = 280;
  int REFRESH_X = 310;         int REFRESH_W = 130;
  int RESTART2_X = 460;        int RESTART2_W = 130;

  int BACKTOMAIN_X = 10;       int BACKTOMAIN_W = 200;
  
  int TOPY = 10;
  int TOPW = 30;  

  int idx;
  
  Menu() {
    idx = 1;
  }
  
  void drawMenu()
  {  
    if (idx==1 || idx==3) {
      button("restart", RESTART1_X, TOPY, RESTART1_W, TOPW);
      button("watch demo", WATCHDEMO_X, TOPY, WATCHDEMO_W, TOPW);
    } else if (idx==2 || idx==4) {
      button("toggle process view", PROCESSVIEW_X, TOPY, PROCESSVIEW_W, TOPW);
      button("refresh", REFRESH_X, TOPY, REFRESH_W, TOPW);
      button("restart", RESTART2_X, TOPY, RESTART2_W, TOPW);
    } else if (idx==5) {
      button("make one!", BACKTOMAIN_X, TOPY, BACKTOMAIN_W, TOPW);
    }
  }
  
  
  void checkMenuActions() 
  {
    if (idx==1) {
      if (mouseIn(RESTART1_X, TOPY, RESTART1_W, TOPW)) {
        restartSplines();
      }
      
      else if (mouseIn(WATCHDEMO_X, TOPY, WATCHDEMO_W, TOPW)) {
        demoing = true;
        picking = false;
        drawing = false;
        render = true;
        //frameRate(2);
        idx = 3;
        demo.idxLabel = 0;
        demo.nv = 0;
      }

	 
    }
    
    else if (idx==2) {

      if (mouseIn(PROCESSVIEW_X, TOPY, PROCESSVIEW_W, TOPW)) {
        render = !render;
      }

      else if (mouseIn(REFRESH_X, TOPY, REFRESH_W, TOPW)) {
        background(255);
        img = get();
        bezspline.finish();
      }

      else if (mouseIn(RESTART2_X, TOPY, RESTART2_W, TOPW)) {
        background(255);
        img = get();
        picking = true;
        idx = 1;
        restartSplines();
      }

    } 
    
    
    // ADDITIONAL MENU BUTTONS ONLY FOR DEMO (skip, next, make one, replay)
    else if (idx==3 || idx==4) {
      if (demo.idxLabel<11) {
        if (mouseIn(720, 300, 180, 30)) {
          demo.idxLabel++;  demo.dt = 0;
        }
        else if (mouseIn(720, 340, 180, 30)) {
          background(255);
          img = get();
          demoing = false;
          picking = true;
          drawing = false; 
          idx = 1;       
        }
      } 
      else if (demo.idxLabel==11) {
        if (mouseIn(720, 300, 180, 30)) {
          background(255);
          img = get();
          demoing = true;
          picking = false;
          drawing = false;
          idx = 3;
          demo.refresh();
        }
        else if (mouseIn(720, 340, 180, 30)) {
          background(255);
          img = get();
          demoing = false;
          picking = true;
          drawing = false;
          idx = 1;
        }
      }
    }
    
    else if (idx==5) {
      if (mouseIn(BACKTOMAIN_X, TOPY, BACKTOMAIN_W, TOPW)) {
        picking = true;
        render = true;
        drawing = false;
        demoing = false;
        idx = 1;
      }
    }
  }

  
  boolean mouseIn(float x, float y, float w, float h) {
    if (mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h) {
      return true;
    } else {
      return false;
    }
  }
  
  void button(String label, float x, float y, float w, float h) {
    pushStyle();
    fill(0,50);
    stroke(0,200);
    strokeWeight(2);
    rect(x, y, w, h);
    fill(0);
    text(label, x+10, y+h-7);
    popStyle();
  } 
}


