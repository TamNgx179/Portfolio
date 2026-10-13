"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { BrandLogo, logoShape, logoUrl } from "./brand-icons";

type Props = { items: readonly string[]; highlighted: readonly string[]; selected: string; onSelect: (name: string) => void };

export default function SkillsScene({ items, highlighted, selected, onSelect }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const current = useRef({ highlighted, selected, onSelect });
  const controls = useRef({ paused: false, reset: false, step: 0 });
  const [supported, setSupported] = useState(true);
  useEffect(() => { current.current = { highlighted, selected, onSelect }; }, [highlighted, selected, onSelect]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" }); }
    catch { queueMicrotask(() => setSupported(false)); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const canvas = renderer.domElement;
    canvas.className = "skills-canvas";
    canvas.setAttribute("aria-hidden", "true");
    host.appendChild(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
    const cloud = new THREE.Group();
    scene.add(cloud, new THREE.HemisphereLight(0xffffff, 0xeaf0f4, 2.8));
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(-3, 5, 8); scene.add(key);
    const logos: THREE.Group[] = [];
    const materials: (THREE.MeshStandardMaterial | THREE.SpriteMaterial)[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const textures: THREE.Texture[] = [];
    const loader = new SVGLoader();
    const world = new THREE.Vector3(), inverse = new THREE.Quaternion();
    let alive = true;
    items.forEach((name, index) => {
      const logo = new THREE.Group(); logo.userData.name = name;
      const shape = logoShape(name);
      if (shape) {
        const data = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${shape.path}" /></svg>`);
        const geometry = new THREE.ExtrudeGeometry(data.paths.flatMap((path) => path.toShapes()), {
          depth: 1.1, bevelEnabled: true, bevelThickness: .12, bevelSize: .12, bevelSegments: 2, steps: 1, curveSegments: 7
        });
        geometry.center(); geometry.scale(.032, -.032, .032);
        const material = new THREE.MeshStandardMaterial({ color: shape.color, emissive: shape.color, emissiveIntensity: .22, roughness: .65, metalness: 0, transparent: true });
        logo.add(new THREE.Mesh(geometry, material)); geometries.push(geometry); materials.push(material);
      } else {
        const texture = new THREE.TextureLoader().load(logoUrl(name), () => { if (alive) renderer.render(scene, camera); });
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(material); sprite.scale.set(.8, .8, 1); logo.add(sprite);
        textures.push(texture); materials.push(material);
      }
      // Space the real technology logos in 3D without decorative spheres or cards.
      const y = 1 - index / (items.length - 1) * 2, radius = Math.sqrt(1 - y * y);
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      logo.position.set(Math.cos(angle) * radius * 3.15, y * 2.7, Math.sin(angle) * radius * 2.5);
      cloud.add(logo); logos.push(logo);
    });
    const resize = () => {
      if (!host.clientWidth || !host.clientHeight) return;
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.position.z = Math.max(10.6, 11.5 / camera.aspect);
      camera.updateProjectionMatrix(); renderer.setSize(host.clientWidth, host.clientHeight, false);
    };
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize();
    const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
    let down = false, moved = false, lastX = 0, lastY = 0, targetY = .5, targetX = -.18;
    const downHandler = (event: PointerEvent) => {
      down = true; moved = false; lastX = event.clientX; lastY = event.clientY; canvas.setPointerCapture(event.pointerId);
    };
    const moveHandler = (event: PointerEvent) => {
      if (!down) return;
      const dx = event.clientX - lastX, dy = event.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
      targetY += dx * .007; targetX = THREE.MathUtils.clamp(targetX + dy * .007, -1.2, 1.2);
      lastX = event.clientX; lastY = event.clientY;
    };
    const upHandler = (event: PointerEvent) => {
      down = false; if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      if (moved) return;
      const rect = canvas.getBoundingClientRect();
      pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(logos, true)[0];
      if (hit?.object.parent?.userData.name) current.current.onSelect(hit.object.parent.userData.name);
    };
    const cancelHandler = () => { down = false; };
    canvas.addEventListener("pointerdown", downHandler); canvas.addEventListener("pointermove", moveHandler);
    canvas.addEventListener("pointerup", upHandler); canvas.addEventListener("pointercancel", cancelHandler);
    const lostHandler = (event: Event) => { event.preventDefault(); setSupported(false); };
    canvas.addEventListener("webglcontextlost", lostHandler);
    let inView = false, frame = 0, previous = 0, lastSelected = current.current.selected;
    const animate = (time: number) => {
      if (!inView || !alive) { frame = 0; return; }
      const delta = Math.min((time - previous) / 1000, .04); previous = time;
      if (lastSelected !== current.current.selected) {
        const position = logos.find((logo) => logo.userData.name === current.current.selected)?.position;
        if (position) {
          targetY = -Math.atan2(position.x, position.z);
          targetX = Math.atan2(position.y, Math.hypot(position.x, position.z));
        }
        lastSelected = current.current.selected;
      }
      if (controls.current.reset) { targetX = -.18; targetY = .5; controls.current.reset = false; }
      targetY += controls.current.step; controls.current.step = 0;
      if (!media.matches && !controls.current.paused && !down) targetY += delta * .075;
      cloud.rotation.set(targetX, targetY, 0); cloud.updateMatrixWorld(true);
      inverse.copy(cloud.quaternion).invert();
      logos.forEach((logo, index) => {
        logo.quaternion.copy(inverse); logo.rotateY(-.18); logo.getWorldPosition(world);
        const front = THREE.MathUtils.clamp((world.z + 3.15) / 6.3, 0, 1);
        materials[index].opacity = (.78 + front * .22) * (current.current.highlighted.includes(items[index]) ? 1 : .75);
        logo.scale.setScalar(current.current.selected === items[index] ? 1.23 : 1);
      });
      renderer.render(scene, camera); frame = requestAnimationFrame(animate);
    };
    const visibility = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && !document.hidden;
      if (inView && !frame) { previous = performance.now(); frame = requestAnimationFrame(animate); }
      if (!inView && frame) { cancelAnimationFrame(frame); frame = 0; }
    });
    const visibilityHandler = () => {
      if (document.hidden) { inView = false; cancelAnimationFrame(frame); frame = 0; }
      else if (host.getClientRects().length) { inView = true; previous = performance.now(); frame = requestAnimationFrame(animate); }
    };
    visibility.observe(host); document.addEventListener("visibilitychange", visibilityHandler);
    return () => {
      alive = false; cancelAnimationFrame(frame); visibility.disconnect(); resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", visibilityHandler);
      canvas.removeEventListener("pointerdown", downHandler); canvas.removeEventListener("pointermove", moveHandler);
      canvas.removeEventListener("pointerup", upHandler); canvas.removeEventListener("pointercancel", cancelHandler);
      canvas.removeEventListener("webglcontextlost", lostHandler);
      geometries.forEach((geometry) => geometry.dispose()); materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose()); renderer.dispose(); canvas.remove();
    };
  }, [items]);

  return <>
    {supported ? <div ref={hostRef} className="skills-scene" role="group" tabIndex={0}
      aria-label="Technology logos. Drag to rotate. Arrow keys rotate, Space pauses or resumes, Home resets."
      onKeyDown={(event) => {
        if (!["ArrowLeft", "ArrowRight", " ", "Home"].includes(event.key)) return;
        event.preventDefault();
        if (event.key === " ") controls.current.paused = !controls.current.paused;
        if (event.key === "Home") controls.current.reset = true;
        if (event.key === "ArrowLeft") controls.current.step = -.25;
        if (event.key === "ArrowRight") controls.current.step = .25;
      }} /> : <div className="skill-fallback" aria-label="Technology logos">
      {items.map((name) => <button key={name} onClick={() => onSelect(name)} type="button" aria-label={name}><BrandLogo name={name} size={38} /></button>)}
    </div>}
  </>;
}
