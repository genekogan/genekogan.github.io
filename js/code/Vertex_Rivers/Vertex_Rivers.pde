ArrayList<Streak> streaks;
PVector[][] force;
int numStreaks;
float maxStrokeWeight;
int maxAgeStreak;
float[] hueSet;

void setup() 
{
  size(800, 720);
  smooth();
  colorMode(HSB);
  strokeCap(ROUND);
  refresh(); 
}

void refresh() 
{
  maxStrokeWeight = random(10, 20);
  numStreaks = 2400;
  
  maxAgeStreak = (int) random(200,400);
 
  // initialize force vectors
  float[] nOffset = new float[] { random(10), random(10), random(10), random(10) };
  float[] nRate = new float[] { random(0.007), random(0.007), random(0.007), random(0.007) };
  float[] nAmp = new float[] { random(5, 8), random(5, 8) };
    
  force = new PVector[width][height];
  for (int i = 0; i < width; i++) {
    for (int j = 0; j < height; j++) {
        force[i][j] = new PVector( map( noise( nOffset[0] + i * nRate[0], nOffset[1] + j * nRate[1] ), 
                                        0, 1, -nAmp[0], nAmp[0] ),  
                                   map( noise( nOffset[2] + i * nRate[2], nOffset[3] + j * nRate[3] ), 
                                        0, 1, -nAmp[1], nAmp[1] ) );
    }
  }

  // make set of complementary colors
  hueSet = new float[4];
  hueSet[0] = random(255);                       // 1. pick a random hue
  hueSet[1] = (hueSet[0] + random(50)) % 255;    // 2. add another random hue near first one
  hueSet[2] = (hueSet[0] + 128) % 255;           // 3. add complement of first hue
  hueSet[3] = (hueSet[1] + 128) % 255;           // 4. add complement of second hue

  // Initialize Streaks
  streaks = new ArrayList<Streak>();        
  for (int i=0; i<numStreaks; i++)
    streaks.add(new Streak(random(width), random(height), (int) random(maxAgeStreak)));

  background(0);
}

void draw() 
{
  ArrayList<Streak> next = new ArrayList<Streak>();
  for (Streak s : streaks) {
    s.update();
    if (s.age < s.maxAge) {
      next.add(s); 
      s.draw(); 
    }
    else
      next.add(new Streak(random(width),random(height), (int) random(maxAgeStreak))); 
  }
  streaks = next;
}

// press spacebar to reset
void keyPressed() {
  if (key==' ')
    setup();
}
void mousePressed() { setup(); }
