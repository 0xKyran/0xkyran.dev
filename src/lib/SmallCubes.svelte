<script>
  import { onMount } from 'svelte';
  // @ts-ignore
  import * as THREE from 'three';

  export let rotationOffset = 0;

  // @ts-ignore
  let container;

  onMount(() => {
    let scene = new THREE.Scene();
    // @ts-ignore
    let camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    let geometry = new THREE.BoxGeometry();
    // @ts-ignore
    let edges = new THREE.EdgesGeometry(geometry);
    let material = new THREE.LineBasicMaterial({ color: 0xcba6f7 });
    let lineSegments = new THREE.LineSegments(edges, material);

    // @ts-ignore
    camera.position.z = 1.4;
    // @ts-ignore
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    // @ts-ignore
    container.appendChild(renderer.domElement);

    scene.add(lineSegments);

    // @ts-ignore
    lineSegments.rotation.y = rotationOffset;

    const onWindowResize = () => {
      // @ts-ignore
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      // @ts-ignore
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      // @ts-ignore
      lineSegments.rotation.y += 0.005;
      // @ts-ignore
      lineSegments.rotation.x = 0.2;
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onWindowResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      // @ts-ignore
      container.removeChild(renderer.domElement);
    };
  });
</script>

<style>
  div {
    width: 100px;
    height: 100px;
    display: inline-block;
  }
</style>

<div bind:this={container}></div>