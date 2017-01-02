/*
  Self-Organizing map
  Gene Kogan -- genekogan.com
  2012 July
*/
class SelfOrganizingMap
{
  int somwidth, somheight;
  PGraphics pg;
  int[] x, y;
  float[][] distLUT;
  int n, numInstances;
  float initialLearningRate, initialRadius, lambda;

  SelfOrganizingMap(int somwidth, int somheight) 
  {
    this.somwidth = somwidth;
    this.somheight = somheight;

    // parameters of SOM
    numInstances = 2000;
    initialLearningRate = 0.2;
    initialRadius = min(somwidth, somheight) / 2.0;
    lambda = numInstances / log(initialRadius);
    
    // initialize the SOM graphics
    pg = createGraphics(somwidth, somheight, P2D);
    pg.loadPixels();
    
    // initialize lookup of 1-d array to its 2-d representation
    x = new int[somwidth * somheight];
    y = new int[somwidth * somheight];
    for (int i = 0; i < somwidth * somheight; i++) {
      x[i] = i % somwidth;
      y[i] = floor(i / somwidth);
    }
    
    // preload distance lookup for faster lookup later
    distLUT = new float[somwidth][somheight];
    for (int i = 0; i < somwidth * somheight; i++)
      distLUT[ x[i] ][ y[i] ] = dist(0, 0, x[i], y[i]);
  }
  
  // initialize map with noise
  void initializeMap() {
    for (int i = 0; i < pg.pixels.length; i++) 
      pg.pixels[i] = color(random(255), random(255), random(255));
    pg.updatePixels();
    n = 0;
  }
  
  void updateMap(color sample) 
  {  
    float radius = initialRadius * exp( -n / lambda );
    float learningRate = initialLearningRate * exp( -n / lambda );
    
    // find nearest point to sample
    PVector nearest = new PVector(0,0);
    float minDist = 195075;  // maximum distance between two RGB colors
    for (int i = 0; i < pg.pixels.length; i++) {
      float cDist = colorDistance(pg.pixels[i], sample);
      if (cDist < minDist) {
        minDist = cDist;
        nearest.set(x[i], y[i], 0);
      }      
    }

    // update colors
    for (int i = 0; i < pg.pixels.length; i++) {
      int dx = abs( x[i] - (int)nearest.x);
      int dy = abs( y[i] - (int)nearest.y);
      
      if (distLUT[dx][dy] < radius) {
        float phi = exp( -pow( distLUT[dx][dy], 2 ) / (2*pow(radius, 2)));                        
        pg.pixels[i] = color(
          red(pg.pixels[i]) + phi * learningRate * (red(sample) - red(pg.pixels[i])),
          green(pg.pixels[i]) + phi * learningRate * (green(sample) - green(pg.pixels[i])),
          blue(pg.pixels[i]) + phi * learningRate * (blue(sample) - blue(pg.pixels[i])) );
      }
    }
    pg.updatePixels();
    n++;    
  }
}

// returns squared distance between two color vectors
float colorDistance(color c1, color c2) {
  return pow(red(c1) - red(c2), 2) + pow(green(c1) - green(c2), 2) + pow(blue(c1) - blue(c2), 2);
}
