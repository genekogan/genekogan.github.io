class BezierSpline {
  
  Spline[] s;
  int[] T;
  float[] t, dt;
  PVector[] p;
  int speed;  
  int minx,miny,maxx,maxy;
  
  BezierSpline() {
    s = new Spline[4];
    for (int i=0; i<4; i++) {
      s[i] = new Spline(color(0));
    }
    T = new int[4];
    t = new float[4];
    dt = new float[4];
    p = new PVector[4];
    speed = 5;
    minx = width;
    miny = height;
    maxx = 0;
    maxy = 0;
  }

  void addVertex(int idx, int x, int y) {
    s[idx].addVertex(x, y);
  }
  
  String getVertices() {
    String Tj = T[0] + ":" + T[1] + ":" + T[2] + ":" + T[3];
    String sj0 = s[0].getSplineVerticesJSON();
    String sj1 = s[1].getSplineVerticesJSON();
    String sj2 = s[2].getSplineVerticesJSON();
    String sj3 = s[3].getSplineVerticesJSON();
    return Tj + "::" + sj0 + "::" + sj1 + "::" + sj2 + "::" + sj3;
  }
  
  void finish() {
    for (int i=0; i<4; i++) {
      T[i] = (int)( random(3,5) * s[i].calculateLength() );
    }
    for (int i=0; i<4; i++) {
      t[i] = 0;
      dt[i] = 1 / (float) T[i];
    }   
  }
  
  void createFromVertices(PVector[][] v, int[] T) {
    this.T = T;
    for (int i=0; i<v.length; i++) {
      for (int j=0; j<v[i].length; j++) {
        addVertex(i, (int)v[i][j].x, (int)v[i][j].y);
      }
    }
    for (int i=0; i<4; i++) {
      t[i] = 0;
      dt[i] = 1 / (float) T[i];
    }  
  }
  
  void drawNext() {
    stroke(0,20);
    strokeWeight(1);
    noFill();
    for (int i=0; i<speed; i++) {
      for (int k=0; k<4; k++) {
        p[k] = s[k].get(0.5 + 0.4999 * sin(2 * PI * t[k]));
        t[k] += dt[k];
      }
      bezier(p[0].x, p[0].y, p[2].x, p[2].y, p[3].x, p[3].y, p[1].x, p[1].y);
    }
    
    // update bounding box
    for (int i=0; i<4; i++) {
      if (p[i].x < minx) minx = (int) p[i].x;
      if (p[i].x > maxx) maxx = (int) p[i].x;
      if (p[i].y < miny) miny = (int) p[i].y;
      if (p[i].y > maxy) maxy = (int) p[i].y;
    }
    //println("bound from " + minx + " " + miny + " " + maxx + " " + maxy );
  }
  
  void drawSplines(boolean dispInstructions) {
    pushStyle();
    fill(0); 
    noStroke();
    if (dispInstructions) {
      if (curridx==0) {
        text("draw path for first endpoint", 30, 75);
      } else if(curridx==1) {
        text("draw path for second endpoint", 30, 75);
      } else if(curridx==2) {
        text("draw path for first control point", 30, 75);
      } else if(curridx==3) {
        text("draw path for second control point", 30, 75);
      }
    }
    noFill();
    strokeWeight(3);
    for (int i=0; i<4; i++) {
      if (s[i].vertices.size()>3) {
        s[i].makeSpline(0.3);
        if (i<2) {
          stroke(255,0,0);
        } else {
          stroke(0,0,255);
        }
        s[i].drawSpline();
      }
    }
    popStyle(); 
  }
  
  void drawProcess() {
    pushStyle();    

    stroke(255,0,0);  
    noFill();  
    strokeWeight(3);
    s[0].drawSpline();
    s[1].drawSpline();
    
    stroke(0);
    fill(255,0,0);
    strokeWeight(1);
    ellipse(p[0].x, p[0].y, 16, 16);
    ellipse(p[1].x, p[1].y, 16, 16);

    stroke(0,0,255); 
    noFill();
    strokeWeight(3);
    s[2].drawSpline();
    s[3].drawSpline();

    stroke(0);
    fill(0,0,255); 
    strokeWeight(1);
    ellipse(p[2].x, p[2].y, 16, 16);
    ellipse(p[3].x, p[3].y, 16, 16);
    
    stroke(0);
    noFill();
    strokeWeight(4);
    bezier(p[0].x, p[0].y, p[2].x, p[2].y, p[3].x, p[3].y, p[1].x, p[1].y);    

    popStyle();
  }
  
  PImage getThumbnail() {
    int dx = maxx - minx;
    int dy = maxy - miny;
    if (dx > dy) {
      int margin = dx - dy;
      miny = max(3, miny - (int)(0.5*margin));
      maxy = min(width-3, maxy + (int)(0.5*margin));
    } else {
      int margin = dy - dx;
      minx = max(3, minx - (int)(0.5*margin));
      maxx = min(height-3, maxx + (int)(0.5*margin));
    }
    image(img,0,0);    
    PImage img2 = get(minx,miny,maxx-minx,maxy-miny);
    img2.resize(200,200);
    return img2;
  }
}
