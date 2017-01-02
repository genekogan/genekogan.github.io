class NaturalCubicSpline {
  
  ArrayList<PVector> v;
  Cubic[] X, Y;
  float[] len0, len;
  
  float step;
  float[] step2;
  
  NaturalCubicSpline(ArrayList<PVector> v) 
  {
    this.v = v;
    ArrayList<Integer> x = new ArrayList<Integer>();
    ArrayList<Integer> y = new ArrayList<Integer>();
    
    for (int i=0; i<v.size(); i++) {
      x.add( (int) v.get(i).x);
      y.add( (int) v.get(i).y);
    }
    X = calculateSpline(v.size()-1, x);
    Y = calculateSpline(v.size()-1, y);
    
    step = 1.0 / (float)(v.size()-1);

    float[] vlen = new float[v.size()-1];
    float totalLen = 0;
    for (int i=0; i<v.size()-1; i++) {
      vlen[i] = dist(v.get(i).x,v.get(i).y, v.get(i+1).x,v.get(i+1).y);
      totalLen += vlen[i];
    }
    float currLen = 0;
    step2 = new float[v.size()];
    for (int i=0; i<v.size()-1; i++) {
      step2[i] = currLen;
      currLen += vlen[i] / totalLen;
    }
    step2[v.size()-1] = 1;
  }

  Cubic[] calculateSpline(int n, ArrayList<Integer> x) {
    float[] gamma = new float[n+1];
    float[] delta = new float[n+1];
    float[] D = new float[n+1];
    int i;
    
    gamma[0] = 1.0f/2.0f;
    for ( i = 1; i < n; i++) {
      gamma[i] = 1/(4-gamma[i-1]);
    }
    gamma[n] = 1/(2-gamma[n-1]);
    
    delta[0] = 3*(x.get(1)-x.get(0))*gamma[0];
    for ( i = 1; i < n; i++) {
      delta[i] = (3*(x.get(i+1)-x.get(i-1))-delta[i-1])*gamma[i];
    }
    delta[n] = (3*(x.get(n)-x.get(n-1))-delta[n-1])*gamma[n];
    
    D[n] = delta[n];
    for ( i = n-1; i >= 0; i--) {
      D[i] = delta[i] - gamma[i]*D[i+1];
    }

    /* coefficients of cubics */
    Cubic[] C = new Cubic[n];
    for ( i = 0; i < n; i++) {
      C[i] = new Cubic((float)x.get(i), D[i], 3*(x.get(i+1) - x.get(i)) - 2*D[i] - D[i+1],
		       2*(x.get(i) - x.get(i+1)) + D[i] + D[i+1]);
    }
    return C;
  }
    
  PVector get(float t) {
    int idx = floor(t / step);
    float t0 = (t % step) / step;
    return new PVector(X[idx].eval(t0), Y[idx].eval(t0));    
  }
}

class Cubic {
  float a,b,c,d;
  public Cubic(float a, float b, float c, float d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  float eval(float u) {
    return (((d*u) + c)*u + b)*u + a;
  }
}
