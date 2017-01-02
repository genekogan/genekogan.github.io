var camera, scene, renderer,
geometry, material, mesh,
pointLight,
mouseX, mouseY;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


var numBoids = 5;
var numVerticesPerBoid = 17;

var boidCenters = [];
boidCenters.push( new THREE.Vector3(  -50*5,  100*5,  -50*5) );
boidCenters.push( new THREE.Vector3(  250*5, -200*5,  120*5) );
boidCenters.push( new THREE.Vector3( -150*5,    0*5,   80*5) );
boidCenters.push( new THREE.Vector3(  350*5,  400*5,   70*5) );
boidCenters.push( new THREE.Vector3(  -30*5,  500*5, -150*5) );




mouseX = 0;
mouseY = 0;

   scene = new THREE.Scene();

   camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
   camera.position.z = 3500;
   scene.add( camera );

   //geometry = new THREE.CubeGeometry( 200, 200, 200 );

geometry = new THREE.Geometry();

var tail = 1000;
var span = 250;
var head = 250;
var wing = 800;
var nose = 300;


   updateVertices();
   initFaces();
initLast();
   animate();


function updateBoids() {
	for (var i=0; i<numBoids; i++) {
		boidCenters[i].x += Math.random(-100,100);
	}
}


function updateVertices() {

	for (var i=0; i<numBoids; i++) {

		// create vertices
		geometry.vertices[ i*numVerticesPerBoid      ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +      -tail, boidCenters[i].y +         0, boidCenters[i].z + -1.5*span ));      // tail left
		geometry.vertices[ i*numVerticesPerBoid +  1 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +      -tail, boidCenters[i].y +         0, boidCenters[i].z +  1.5*span ));      // tail right
		geometry.vertices[ i*numVerticesPerBoid +  2 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z + -0.6*span ));      // waist left
		geometry.vertices[ i*numVerticesPerBoid +  3 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z +  0.6*span ));      // waist right
		geometry.vertices[ i*numVerticesPerBoid +  4 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.5*tail, boidCenters[i].y +  0.5*head, boidCenters[i].z +         0 ));      // waist top
		geometry.vertices[ i*numVerticesPerBoid +  5 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.5*tail, boidCenters[i].y + -0.5*head, boidCenters[i].z +         0 ));      // waist bottom
		geometry.vertices[ i*numVerticesPerBoid +  6 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +         0, boidCenters[i].z +     -span ));      // left ear
		geometry.vertices[ i*numVerticesPerBoid +  7 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +         0, boidCenters[i].z +      span ));      // right ear
		geometry.vertices[ i*numVerticesPerBoid +  8 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +      head, boidCenters[i].z +         0 ));      // head
		geometry.vertices[ i*numVerticesPerBoid +  9 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +     -head, boidCenters[i].z +         0 ));      // chin    
		geometry.vertices[ i*numVerticesPerBoid + 10 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +       nose, boidCenters[i].y +         0, boidCenters[i].z +         0 ));      // nose
		geometry.vertices[ i*numVerticesPerBoid + 11 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.1*tail, boidCenters[i].y +         0, boidCenters[i].z +         0 ));      // wing base front
		geometry.vertices[ i*numVerticesPerBoid + 12 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.4*tail, boidCenters[i].y +         0, boidCenters[i].z +         0 ));      // wing base back
		geometry.vertices[ i*numVerticesPerBoid + 13 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z + -0.8*wing ));      // wing back left
		geometry.vertices[ i*numVerticesPerBoid + 14 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z +  0.8*wing ));      // wing back right    
		geometry.vertices[ i*numVerticesPerBoid + 15 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.2*tail, boidCenters[i].y +         0, boidCenters[i].z +     -wing ));      // wing front left
		geometry.vertices[ i*numVerticesPerBoid + 16 ] = new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.2*tail, boidCenters[i].y +         0, boidCenters[i].z +      wing ));      // wing front right
	
	}
	
}


function initFaces() {
	
	for (var i=0; i<numBoids; i++) {

		// tail
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  0 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  0 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  0 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  0 ));

		// torso
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  6 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  9 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  6 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  9 ));

		// head
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  8, i*numVerticesPerBoid + 10 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  8, i*numVerticesPerBoid + 10 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  9, i*numVerticesPerBoid + 10 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  9, i*numVerticesPerBoid + 10 ));

		// wings
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 12, i*numVerticesPerBoid + 13 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 13, i*numVerticesPerBoid + 15 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 12, i*numVerticesPerBoid + 14 ));	
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 14, i*numVerticesPerBoid + 16 ));

		// tail reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  2 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  2 ));

		// torso reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  8, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  2 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  8, i*numVerticesPerBoid +  6 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  9, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  2 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  9, i*numVerticesPerBoid +  6 ));

		// head reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  9 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  9 ));

		// wings reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 13, i*numVerticesPerBoid + 12 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 15, i*numVerticesPerBoid + 13 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 14, i*numVerticesPerBoid + 12 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 16, i*numVerticesPerBoid + 14 ));

	}

}


function initLast() {
	
	geometry.computeFaceNormals();
	material = new THREE.MeshLambertMaterial( { color: 0xff0000, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );



    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

	// create a point light
	pointLight = new THREE.DirectionalLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);

    document.body.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

}








   function init2() {

	mouseX = 0;
	mouseY = 0;
	
       scene = new THREE.Scene();

       camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
       camera.position.z = 3500;
       scene.add( camera );

       //geometry = new THREE.CubeGeometry( 200, 200, 200 );
       

	
	
	var tail = 1000;
	var span = 250;
	var head = 250;
	var wing = 800;
	var nose = 300;
	

	geometry = new THREE.Geometry();
	
	for (var i=0; i<5; i++) {
	
		// create vertices
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +      -tail, boidCenters[i].y +         0, boidCenters[i].z + -1.5*span )));      // tail left
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +      -tail, boidCenters[i].y +         0, boidCenters[i].z +  1.5*span )));      // tail right
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z + -0.6*span )));      // waist left
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z +  0.6*span )));      // waist right
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.5*tail, boidCenters[i].y +  0.5*head, boidCenters[i].z +         0 )));      // waist top
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.5*tail, boidCenters[i].y + -0.5*head, boidCenters[i].z +         0 )));      // waist bottom
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +         0, boidCenters[i].z +     -span )));      // left ear
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +         0, boidCenters[i].z +      span )));      // right ear
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +      head, boidCenters[i].z +         0 )));      // head
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +          0, boidCenters[i].y +     -head, boidCenters[i].z +         0 )));      // chin    
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +       nose, boidCenters[i].y +         0, boidCenters[i].z +         0 )));      // nose
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.1*tail, boidCenters[i].y +         0, boidCenters[i].z +         0 )));      // wing base front
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.4*tail, boidCenters[i].y +         0, boidCenters[i].z +         0 )));      // wing base back
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z + -0.8*wing )));      // wing back left
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.7*tail, boidCenters[i].y +         0, boidCenters[i].z +  0.8*wing )));      // wing back right    
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.2*tail, boidCenters[i].y +         0, boidCenters[i].z +     -wing )));      // wing front left
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( boidCenters[i].x +  -0.2*tail, boidCenters[i].y +         0, boidCenters[i].z +      wing )));      // wing front right
	

		// tail
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  0 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  0 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  0 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  0 ));

		// torso
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  6 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  3, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  9 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  2, i*numVerticesPerBoid +  6 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  9 ));

		// head
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  8, i*numVerticesPerBoid + 10 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  8, i*numVerticesPerBoid + 10 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  9, i*numVerticesPerBoid + 10 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  9, i*numVerticesPerBoid + 10 ));

		// wings
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 12, i*numVerticesPerBoid + 13 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 13, i*numVerticesPerBoid + 15 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 12, i*numVerticesPerBoid + 14 ));	
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 14, i*numVerticesPerBoid + 16 ));

		// tail reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  2 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  1, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  1 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  0, i*numVerticesPerBoid +  2 ));

		// torso reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  8, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  2 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  4, i*numVerticesPerBoid +  8, i*numVerticesPerBoid +  6 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  7, i*numVerticesPerBoid +  3 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  9, i*numVerticesPerBoid +  7 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  6, i*numVerticesPerBoid +  2 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  5, i*numVerticesPerBoid +  9, i*numVerticesPerBoid +  6 ));

		// head reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  8 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  7, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  9 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid +  6, i*numVerticesPerBoid + 10, i*numVerticesPerBoid +  9 ));

		// wings reverse
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 13, i*numVerticesPerBoid + 12 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 15, i*numVerticesPerBoid + 13 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 14, i*numVerticesPerBoid + 12 ));
		geometry.faces.push(new THREE.Face3( i*numVerticesPerBoid + 11, i*numVerticesPerBoid + 16, i*numVerticesPerBoid + 14 ));
		
	}
	
	
	geometry.computeFaceNormals();
	material = new THREE.MeshLambertMaterial( { color: 0xff0000, wireframe: false } );
       mesh = new THREE.Mesh( geometry, material );

       scene.add( mesh );



       renderer = new THREE.CanvasRenderer();
       renderer.setSize( window.innerWidth, window.innerHeight );

	// create a point light
	pointLight = new THREE.DirectionalLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);

       document.body.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

   }




   function init() {

	mouseX = 0;
	mouseY = 0;
	
       scene = new THREE.Scene();

       camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
       camera.position.z = 3500;
       scene.add( camera );

       //geometry = new THREE.CubeGeometry( 200, 200, 200 );
       

	
	
	var tail = 1000;
	var span = 250;
	var head = 250;
	var wing = 800;
	var nose = 300;
	

	geometry = new THREE.Geometry();
	
	// create vertices
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(     -tail,         0, -1.5*span )));      // tail left
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(     -tail,         0,  1.5*span )));      // tail right
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.7*tail,         0, -0.6*span )));      // waist left
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.7*tail,         0,  0.6*span )));      // waist right
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.5*tail,  0.5*head,         0 )));      // waist top
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.5*tail, -0.5*head,         0 )));      // waist bottom
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(         0,         0,     -span )));      // left ear
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(         0,         0,      span )));      // right ear
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(         0,      head,         0 )));      // head
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(         0,     -head,         0 )));      // chin    
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(      nose,         0,         0 )));      // nose
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.1*tail,         0,         0 )));      // wing base front
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.4*tail,         0,         0 )));      // wing base back
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.7*tail,         0, -0.8*wing )));      // wing back left
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.7*tail,         0,  0.8*wing )));      // wing back right    
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.2*tail,         0,     -wing )));      // wing front left
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( -0.2*tail,         0,      wing )));      // wing front right
	

	// tail
	geometry.faces.push(new THREE.Face3(  4,  3,  1 ));
	geometry.faces.push(new THREE.Face3(  4,  1,  0 ));
	geometry.faces.push(new THREE.Face3(  4,  2,  0 ));
	geometry.faces.push(new THREE.Face3(  5,  3,  1 ));
	geometry.faces.push(new THREE.Face3(  5,  1,  0 ));
	geometry.faces.push(new THREE.Face3(  5,  2,  0 ));

	// torso
	geometry.faces.push(new THREE.Face3(  4,  3,  7 ));
	geometry.faces.push(new THREE.Face3(  4,  7,  8 ));
	geometry.faces.push(new THREE.Face3(  4,  2,  6 ));
	geometry.faces.push(new THREE.Face3(  4,  6,  8 ));
	geometry.faces.push(new THREE.Face3(  5,  3,  7 ));
	geometry.faces.push(new THREE.Face3(  5,  7,  9 ));
	geometry.faces.push(new THREE.Face3(  5,  2,  6 ));
	geometry.faces.push(new THREE.Face3(  5,  6,  9 ));

	// head
	geometry.faces.push(new THREE.Face3(  7,  8, 10 ));
	geometry.faces.push(new THREE.Face3(  6,  8, 10 ));
	geometry.faces.push(new THREE.Face3(  7,  9, 10 ));
	geometry.faces.push(new THREE.Face3(  6,  9, 10 ));

	// wings
	geometry.faces.push(new THREE.Face3( 11, 12, 13 ));
	geometry.faces.push(new THREE.Face3( 11, 13, 15 ));
	geometry.faces.push(new THREE.Face3( 11, 12, 14 ));	
	geometry.faces.push(new THREE.Face3( 11, 14, 16 ));

	// tail reverse
	geometry.faces.push(new THREE.Face3(  4,  1,  3 ));
	geometry.faces.push(new THREE.Face3(  4,  0,  1 ));
	geometry.faces.push(new THREE.Face3(  4,  0,  2 ));
	geometry.faces.push(new THREE.Face3(  5,  1,  3 ));
	geometry.faces.push(new THREE.Face3(  5,  0,  1 ));
	geometry.faces.push(new THREE.Face3(  5,  0,  2 ));

	// torso reverse
	geometry.faces.push(new THREE.Face3(  4,  7,  3 ));
	geometry.faces.push(new THREE.Face3(  4,  8,  7 ));
	geometry.faces.push(new THREE.Face3(  4,  6,  2 ));
	geometry.faces.push(new THREE.Face3(  4,  8,  6 ));
	geometry.faces.push(new THREE.Face3(  5,  7,  3 ));
	geometry.faces.push(new THREE.Face3(  5,  9,  7 ));
	geometry.faces.push(new THREE.Face3(  5,  6,  2 ));
	geometry.faces.push(new THREE.Face3(  5,  9,  6 ));

	// head reverse
	geometry.faces.push(new THREE.Face3(  7, 10,  8 ));
	geometry.faces.push(new THREE.Face3(  6, 10,  8 ));
	geometry.faces.push(new THREE.Face3(  7, 10,  9 ));
	geometry.faces.push(new THREE.Face3(  6, 10,  9 ));

	// wings reverse
	geometry.faces.push(new THREE.Face3( 11, 13, 12 ));
	geometry.faces.push(new THREE.Face3( 11, 15, 13 ));
	geometry.faces.push(new THREE.Face3( 11, 14, 12 ));
	geometry.faces.push(new THREE.Face3( 11, 16, 14 ));
	
	
	geometry.computeFaceNormals();
	material = new THREE.MeshLambertMaterial( { color: 0xff0000, wireframe: false } );
       mesh = new THREE.Mesh( geometry, material );

       scene.add( mesh );



       renderer = new THREE.CanvasRenderer();
       renderer.setSize( window.innerWidth, window.innerHeight );

	// create a point light
	pointLight = new THREE.DirectionalLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);

       document.body.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

   }

   function animate() {

       // note: three.js includes requestAnimationFrame shim
       requestAnimationFrame( animate );
       render();

   }

   function render() {
       	mesh.rotation.x = mouseX;
       	mesh.rotation.y = mouseY;
	
		updateBoids();
	   	updateVertices();
	

       	renderer.render( scene, camera );

   }

function onDocumentMouseMove(event) {

	mouseX = ( event.clientX - windowHalfX ) / 60;
	mouseY = ( event.clientY - windowHalfY ) / 60;

}
