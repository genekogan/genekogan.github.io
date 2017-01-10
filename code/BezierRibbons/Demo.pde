class Demo {
  
  ArrayList<PVector> v;
  ArrayList<Integer> idx;
  
  Spline[] s2;
  int t, dt, curridx, idxLabel, nv;
  BezierSpline demobez;
  int[] labelDt;
  
  Demo() {
    refresh();
  }
  
  void refresh() {
    s2 = new Spline[4];
    for (int i=0; i<4; i++) {
      s2[i] = new Spline(color(0));
    }
    curridx = 0;   
    t = 0; 
    dt = 0;
    idxLabel = 0;  
    loadPreset();
    demobez = new BezierSpline();
    labelDt = new int[]{ 160, 160, 160, 160, 300, 300, 300, 300, 300, 300, 300, 300 };
    nv = 0;
  }
  
  void loadPreset() {    
    v = new ArrayList<PVector>();
    idx = new ArrayList<Integer>();
    v.add(new PVector(381, 210));	idx.add(0);
    v.add(new PVector(377, 206));	idx.add(0);
    v.add(new PVector(317, 133));	idx.add(0);
    v.add(new PVector(164, 122));	idx.add(0);
    v.add(new PVector(120, 200));	idx.add(0);
    v.add(new PVector(107, 351));	idx.add(0);
    v.add(new PVector(121, 470));	idx.add(0);
    v.add(new PVector(152, 575));	idx.add(0);
    v.add(new PVector(130, 630));	idx.add(0);
    v.add(new PVector(99, 652));	idx.add(0);
    v.add(new PVector(95, 655));	idx.add(0);
	
    v.add(new PVector(452, 210));	idx.add(1);
    v.add(new PVector(464, 184));	idx.add(1);
    v.add(new PVector(519, 104));	idx.add(1);
    v.add(new PVector(598, 105));	idx.add(1);
    v.add(new PVector(660, 177));	idx.add(1);
    v.add(new PVector(682, 299));	idx.add(1);
    v.add(new PVector(684, 380));	idx.add(1);
    v.add(new PVector(701, 542));	idx.add(1);
    v.add(new PVector(755, 637));	idx.add(1);
    v.add(new PVector(772, 639));	idx.add(1);
    v.add(new PVector(788, 642));	idx.add(1);
	
    v.add(new PVector(196, 293));	idx.add(2);
    v.add(new PVector(197, 285));	idx.add(2);
    v.add(new PVector(235, 214));	idx.add(2);
    v.add(new PVector(308, 192));	idx.add(2);
    v.add(new PVector(361, 251));	idx.add(2);
    v.add(new PVector(399, 297));	idx.add(2);
    v.add(new PVector(488, 317));	idx.add(2);
    v.add(new PVector(538, 271));	idx.add(2);
    v.add(new PVector(547, 270));	idx.add(2);
    v.add(new PVector(583, 343));	idx.add(2);
    v.add(new PVector(603, 425));	idx.add(2);
    v.add(new PVector(620, 504));	idx.add(2);
    v.add(new PVector(633, 577));	idx.add(2);
    v.add(new PVector(651, 621));	idx.add(2);
    v.add(new PVector(670, 648));	idx.add(2);
    v.add(new PVector(688, 656));	idx.add(2);
	
    v.add(new PVector(507, 165));	idx.add(3);
    v.add(new PVector(510, 166));	idx.add(3);
    v.add(new PVector(552, 227));	idx.add(3);
    v.add(new PVector(613, 349));	idx.add(3);
    v.add(new PVector(584, 471));	idx.add(3);
    v.add(new PVector(493, 555));	idx.add(3);
    v.add(new PVector(364, 607));	idx.add(3);
    v.add(new PVector(254, 616));	idx.add(3);
    v.add(new PVector(152, 578));	idx.add(3);
    v.add(new PVector(79, 524));	idx.add(3);
    v.add(new PVector(49, 486));	idx.add(3);
    v.add(new PVector(25, 427));	idx.add(3);
    v.add(new PVector(7, 401));		idx.add(3);
  }
  
  void drawNext() {
    // First draw paths
    if (nv < v.size()) {
      if (t%20==0) {
        PVector v1 = v.get(nv);
        int i1 = idx.get(nv);
        demobez.addVertex(i1, (int)v1.x, (int)v1.y);
        nv++;
      }
      demobez.drawSplines(false);  
     
    } 
    else if (nv==v.size()) {
      demobez.finish();
      menu.idx = 4;
      nv++;
    }
    
    // After done drawing paths, render
    else {
      demobez.drawNext();
      captureRender();
    }

    if (idxLabel==0) {
      label("Draw a path by clicking and dragging the mouse over the screen.",500,140,400,80);
    } else if (idxLabel==1) {
      label("You will provide four separate paths.",500,140,400,80);
    } else if (idxLabel==2) {
      label("The first two are red and represent the end points.",500,140,400,80);
    } else if (idxLabel==3) {
      label("The last two are blue and represent the curvature points.",500,140,400,80);
    } else if (idxLabel==4) {
      label("You can clear your paths and start over at any time by clicking the \"restart\" button.",500,140,400,105);
      pushStyle();  stroke(255,0,0);  noFill();  strokeWeight(6);  ellipse(115,25,160,46);  popStyle();
    } else if (idxLabel==5) {
      label("When you are done, the screen will begin to continuously trace a bezier curve whose end points lie along your red end point lines, and whose curvature is determined by the blue curvature lines.", 500,120,400,165);
    } else if (idxLabel==6) {
      label("To see more closely how the drawing is being produced, you can toggle the \"process\" view .", 500,140,400,105);
      pushStyle();  stroke(255,0,0);  noFill();  strokeWeight(6);  ellipse(150,25,300,46);  popStyle();
    } else if (idxLabel==7) {
      render = false;
      label("At any given time, four points are needed to determine a bezier curve: two end points and two control (curvature points)", 500,120,400,140);
    } else if (idxLabel==8) {
      label("The two endpoints will zigzag along the red lines you traced, while the control points will zigzag along the blue lines", 500,120,400,140);
    } else if (idxLabel==9 || idxLabel==10) {
      label("The two endpoints will zigzag along the red lines you traced, while the control points will zigzag along the blue lines", 500,120,400,140);
      render = true;
    } else if (idxLabel==11) {
      label("By clicking refresh, you can clear the screen and start rendering the beziers over. Clicking restart will let you draw the paths over again.", 500,120,400,140);
      pushStyle();  stroke(255,0,0);  noFill();  strokeWeight(6);  ellipse(450,25,350,46);  popStyle();
      menu.button("Replay demo", 720, 300, 180, 30);
      menu.button("Make one!", 720, 340, 180, 30);
    }
    
    if (idxLabel<11) { 
      menu.button("Next", 720, 300, 180, 30);
      menu.button("Skip demo", 720, 340, 180, 30);
      if (dt>=labelDt[idxLabel]) {
        idxLabel++;
        dt = 0;
      }
    }

    t++;    
    dt++;
  }
  
  
  void captureRender() 
  {
    img = get();
    if (render==false) {
      pushStyle();
      fill(255,190);  
      rect(0,0,width,height);
      demobez.drawProcess();
      popStyle();
    }
  } 
  
  void label(String label, float x, float y, float w, float h) {
    pushStyle();
    textSize(19);
    fill(0,150);
    rect(x,y,w,h);
    fill(255);
    text(label,x+8,y+8,w-12,h-12);
    popStyle();
  }
  
}
