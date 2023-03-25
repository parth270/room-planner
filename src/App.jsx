import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function App() {
  React.useEffect(() => {
    // selecting canvas and it's container
    const canvas = document.getElementById("canvas");
    const rect = document.getElementById("container").getBoundingClientRect();

    //creating a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#cfcfcf");

    // creating camera
    const camera = new THREE.PerspectiveCamera(
      75,
      rect.width / rect.height,
      0.1,
      1000
    );
    camera.position.x = 2.5;
    camera.position.y = 2.5;
    camera.position.z = 5;

    //making the floor
    const image1 = new Image();
    const floorTexture = new THREE.Texture(image1);
    image1.addEventListener("load", () => {
      floorTexture.needsUpdate = true;
    });
    image1.src = "/asset-1.webp";
    const floorG = new THREE.PlaneGeometry(5, 5);
    const floorM = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: floorTexture,
    });
    const floor = new THREE.Mesh(floorG, floorM);
    floor.rotation.x = THREE.MathUtils.DEG2RAD * 90;
    floor.position.y = -1.25;
    scene.add(floor);

    // adding the walls
    const image2 = new Image();
    const wallTexture = new THREE.Texture(image2);
    image2.addEventListener("load", () => {
      wallTexture.needsUpdate = true;
      renderer.render(scene, camera);
    });
    image2.src = "/asset-2.jpg";
    const wG = new THREE.PlaneGeometry(5, 2.5);
    const wM = new THREE.MeshBasicMaterial({
      side: THREE.FrontSide,
      map: wallTexture,
    });
    const w1 = new THREE.Mesh(wG, wM);
    const w2 = new THREE.Mesh(wG, wM);
    const w3 = new THREE.Mesh(wG, wM);
    const w4 = new THREE.Mesh(wG, wM);

    w1.position.set(0, 0, 2.5);
    w2.position.set(0, 0, -2.5);
    w3.position.set(-2.5, 0, 0);
    w4.position.set(2.5, 0, 0);

    w1.rotation.y = Math.PI;
    w3.rotation.y = Math.PI / 2;
    w4.rotation.y = -Math.PI / 2;
    scene.add(w1);
    scene.add(w2);
    scene.add(w3);
    scene.add(w4);

    //renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    // orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.target.x = 0;
    controls.maxPolarAngle = Math.PI / 2;
    // controls.maxPolarAngle = Math.PI / 3;
    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    });
    controls.update();

    // resize
    const resize = () => {
      renderer.setSize(rect.width, rect.height);
    };
    renderer.setSize(rect.width, rect.height);
    renderer.render(scene, camera);

    const animate = () => {
      controls.update();
      requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden">
      <div className="w-[100%] h-[10vh] py-[14px] px-[30px] shadow-2xl shadow-black-500/50 bg-[#0d2329]">
        {/* <h1 className="text-black font-mono m-0 tracking-widest text-[24px] " >SKYDEVS</h1> */}
        <img src="/asset-2.png" className="w-[40px]" alt="" />
      </div>
      <div className="flex w-[100%] h-[90vh] relative">
        <div className="w-[30%] style-2 px-[20px]  h-[100%] bg-[#122328] overflow-y-auto">
          <p className="mb-[20px]  text-white text-[40px] font-mono tracking-wider text-center mt-[10px] border-b-[1px] border-[#fad620] pb-[10px] ">
            SkyDevs
          </p>
          <div className="w-[100%]  min-h-[200px] my-[30px] drop-shadow-xl cursor-pointer">
            <img
              src="https://images.free3d.com/imgd/l92748-cinema4d-table-66762.jpg"
              alt=""
              className="rounded-t-lg"
            />
            <div className="bg-white rounded-b-lg">
              <p className="w-[100%] text-[16px]  font-mono font-bold tracking-wide text-center py-[10px]">
                Table
              </p>
            </div>
          </div>
          <div className="w-[100%]  min-h-[200px] my-[30px] drop-shadow-xl cursor-pointer">
            <img
              src="https://images.free3d.com/imgd/l33/5e94e9b026be8bfb468b4567/3168-gaming-chair.jpg"
              alt=""
              className="rounded-t-lg"
            />
            <div className="bg-white rounded-b-lg">
              <p className="w-[100%] text-[16px]  font-mono font-bold tracking-wide text-center py-[10px]">
                Gaming-chair-1
              </p>
            </div>
          </div>
          <div className="w-[100%]  min-h-[200px] my-[30px] drop-shadow-xl cursor-pointer">
            <img
              src="https://images.free3d.com/imgd/l54/6067822d72b616328a462622/1429-gaming-chair.png"
              alt=""
              className="rounded-t-lg"
            />
            <div className="bg-white rounded-b-lg">
              <p className="w-[100%] text-[16px]  font-mono font-bold tracking-wide text-center py-[10px]">
                Gaming-chair-2
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[92vh] z-10" id="container">
          <canvas id="canvas" className="z-11"></canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
