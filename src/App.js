
// import { Entity, Scene } from "aframe-react";


function App() {
  return (
    <a-scene>
      <a-assets>
      <img src={`/assets/pics/floor1.jpg`} alt="Photo by John Doe" />
      </a-assets>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane width="5" height="5" rotation="-90 0 0" scale="50 40 1" position="" material="src: /assets/pics/floor1.jpg" geometry=""></a-plane>
      <a-sky
        src="/assets/pics/bluesky2.jpeg"
        position="-26.737 27.195 190.240"
        rotation="0 -130 0"
      ></a-sky>
      <a-entity camera wasd-controls="acceleration: 500" look-controls="sensitivity: 10"></a-entity>
      <a-entity
        id="skeleton"
        animation-mixer="clip: *;"
        gltf-model="url(/assets/models/male-avatar/scene.gltf)"
        position="-3.509 0 0.872"
        rotation="0 0 0"
        scale="2 2 2"
        // animation="property: position;  from:3.494 0 0.911; to: -3.509 0 -7.959; dur: 15000; dir:alternate; easing: linear; loop: true"
      ></a-entity>
  </a-scene>
  );
}

export default App;
