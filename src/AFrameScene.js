import React from "react";
import "aframe";
import "aframe-extras";
import "../simple-navmesh-constraint";
import "aframe-htmlembed-component";

const AFrameScene = () => {
  return (
    <a-scene>
      <a-assets>
        {/* <a-asset-item
          id='navmesh-glb'
          src='https://cdn.glitch.global/d29f98b4-ddd1-4589-8b66-e2446690e697/navmesh.glb?v=1644329586500'
        ></a-asset-item> */}
      </a-assets>

      {/* -----------------------camera------------------------------ */}
      <a-entity
        id='cameraRig'
        simple-navmesh-constraint='navmesh:.navmesh;fall:0.5;height:0;exclude:.navmesh-hole;'
        movement-controls='speed:0.15;camera:#head;'
        position='-1 0 1'
        rotation='0 45 0'
      >
        <a-entity
          id='head'
          camera='near:0.01;'
          look-controls='pointerLockEnabled: false'
          position='0 1.65 0'
        ></a-entity>
      </a-entity>
      <a-entity id='my-ar-objects' position='-6 0 1'>
        <a-gltf-model
          id='piano'
          //   rotation="0 100 0"
          //   shadow="receive:false;cast:true;"
          //   src="https://cdn.glitch.global/d29f98b4-ddd1-4589-8b66-e2446690e697/piano.glb?v=1644414775118"
        >
          {/* <a-plane
            rotation='-90 0 0'
            width='3'
            height='3'
            position='0 0.001 0'
            class='navmesh-hole'
            color='red'
            visible='true'
          ></a-plane> */}
        </a-gltf-model>
      </a-entity>
      <a-plane
        width='50'
        height='50'
        rotation='-90 0 0'
        color='green'
        class='navmesh'
        visible='true'
      ></a-plane>
      <a-gltf-model
        id='piano'
        position='-4.757 0 0.313'
        rotation='0 90 0'
        shadow='receive:false;cast:true;'
        src='https://cdn.glitch.global/d29f98b4-ddd1-4589-8b66-e2446690e697/piano.glb?v=1644414775118'
      >
        <a-plane
          rotation='-90 0 0'
          width='1.5'
          height='0.6'
          class='navmesh-hole'
          visible='false'
        ></a-plane>
      </a-gltf-model>

      {/* -------------------------------------html part------------------------------------- */}
      <a-entity
        id='menu'
        class='screen menu dark'
        htmlembed='ppu:256'
        position='-2.712 2.5 -4.476'
        rotation='0 45 0'
      >
        <h2>Menu</h2>
        <ul>
          <li>
            <a href='#' class='button'>
              Home
            </a>
          </li>
          <li>
            <a href='#slide2' class='button'>
              CSS
            </a>
          </li>
          <li>
            <a href='#slide3' class='button'>
              Interactivity
            </a>
          </li>
          <li>
            <a href='#slide4' class='button'>
              Limitations
            </a>
          </li>
        </ul>
      </a-entity>
      <a-entity
        id='main'
        class='screen dark main'
        htmlembed='ppu:256'
        position='0 2.5 -5'
      >
        <div id='page1'>
          <h1>A-Frame HTML Embed Component</h1>
          <p>
            HTML Embed is a component created for A-Frame. The HTML Embed
            component allows for arbitrary html to be inserted into your aframe
            scene. It allows you to update the display within A-Frame simply by
            manipulating the DOM as you normally would.
          </p>
          <p>
            In addition to rendering the html to the A-Frame scene it allows for
            interaction. Most css pseudo selectors such as hover, active, focus
            and target should work with interactivity enabled without any
            modifications to your css. Mouse events can be attached to the html
            elements as usual.
          </p>
        </div>
      </a-entity>
    </a-scene>
  );
};

export default AFrameScene;
