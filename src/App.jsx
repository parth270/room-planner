import React from "react";
import * as THREE from "three";

function App() {
  React.useEffect(() => {
    
    const canvas = document.getElementById("canvas");
    const rect = document.getElementById("container").getBoundingClientRect();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      rect.width / rect.height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(rect.width, rect.height);
    renderer.render(scene, camera);
    const resize = () => {
      renderer.setSize(rect.width, rect.height);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden">
      <div className="w-[100%] h-[8vh] py-[10px] px-[30px] shadow-2xl shadow-black-500/50 bg-[#0d2329]">
        {/* <h1 className="text-black font-mono m-0 tracking-widest text-[24px] " >SKYDEVS</h1> */}
        <img src="/asset-2.png" className="w-[40px]" alt="" />
      </div>
      <div className="flex w-[100%] h-[92vh] relative">
        <div className="w-[30%] style-2 px-[20px]  h-[100%] bg-[#122328] overflow-y-auto">
          <h1 className="mb-[20px]  text-white text-[40px] font-mono tracking-wider text-center mt-[40px] border-b-[1px] border-[#fad620] pb-[10px] ">
            SkyDevs
          </h1>
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
        <div className="w-[70%] h-[92vh]" id="container">
          <canvas id="canvas"></canvas>
        </div>
      </div>
    </div>
  );
}

export default App;