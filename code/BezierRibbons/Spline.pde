class Spline 
{
  ArrayList<PVector> vertices;
  NaturalCubicSpline spline;
  List<PVector> splineVec;
  color col;
  float length;

  Spline(color col) {
    this.col = col;
    vertices = new ArrayList<PVector>();
    length = 0;
  }

  void addVertex(float x, float y) {
    vertices.add(new PVector(x, y));
    if (vertices.size()>2) makeSpline(0.3);
  }

  void clearVertices() {
    vertices = new ArrayList<PVector>();
  }

  void makeSpline(float tightness) { 
    spline = new NaturalCubicSpline(vertices);
  }

  float calculateLength() {
    length = 0;
    PVector v0 = vertices.get(0);
    for (PVector v : vertices) {
      length += dist(v0.x, v0.y, v.x, v.y);
      v0 = v;
    }
    return length;
  }

  PVector get(float t) {
    return spline.get(t);
  }

  void drawSpline() {
    beginShape();
    curveVertex(get(0).x, get(0).y);
    for (float t=0.02; t<0.98; t+=0.02) {
      PVector v = get(t);
      curveVertex(v.x, v.y);
    }
    curveVertex(get(0.999).x, get(0.999).y);
    endShape();
  } 

  String getSplineVerticesJSON() {
    String str = "";
    for (PVector v : vertices) {
      str = str + v.x + "," + v.y + ":";
    }
    str = str.substring(0, str.length()-1);
    return str;
  }
}

