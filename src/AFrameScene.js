import React from "react";
import "aframe";
import "aframe-extras";
import "../simple-navmesh-constraint";

const AFrameScene = () => {
  return (
    <div>
      <a-scene ar-hit-test='target:#my-ar-objects;type:footprint;footprintDepth:0.2;'>
        <a-assets>
          <a-asset-item
            id='navmesh-glb'
            src='https://cdn.glitch.global/d29f98b4-ddd1-4589-8b66-e2446690e697/navmesh.glb?v=1644329586500'
          ></a-asset-item>
        </a-assets>

        {/* -----------------------camera rig------------------------------------------------------------------------------------------- */}
        <a-entity
          id='cameraRig'
          simple-navmesh-constraint='navmesh:.navmesh;fall:0.5;height:0;exclude:.navmesh-hole;'
          movement-controls='speed:0.1;camera:#head;'
          position='0 1.65 0'
          rotation='0 45 0'
          wasd-controls='enabled: true'
          origin-on-ar-start
        >
          {/* <!-- camera --> */}
          <a-entity
            id='head'
            camera='near:0.01;'
            look-controls='pointerLockEnabled: false'
            // wasd-controls='enabled: true'
            position='-6.173 3.458 -1.444'
          ></a-entity>
        </a-entity>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* navmash */}
        <a-gltf-model
          class='navmesh'
          src='#navmesh-glb'
          visible='false'
        ></a-gltf-model>
        <a-entity id='my-ar-objects' position='-6 0 1'>
          <a-gltf-model
            id='piano'
            // position='-10.421 0 -3.005'
            rotation='0 50 0'
            scale='5 5 5'
            shadow='receive: false'
            src='https://cdn.glitch.global/d29f98b4-ddd1-4589-8b66-e2446690e697/piano.glb?v=1644414775118'
            gltf-model='https://cdn.glitch.global/d29f98b4-ddd1-4589-8b66-e2446690e697/piano.glb?v=1644414775118'
          >
            <a-plane
              rotation='-90 0 0'
              width='1.5'
              height='0.6'
              class='navmesh-hole'
              visible='true'
            ></a-plane>
          </a-gltf-model>
        </a-entity>
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        <a-plane
          position='0 0 -4'
          rotation='-90 0 0'
          width='35'
          height='30'
          color='#7BC8A4'
          shadow
        ></a-plane>
        <a-sky color='#ECECEC'></a-sky>
      </a-scene>
    </div>
  );
};

export default AFrameScene;
