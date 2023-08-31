import * as THREE from 'three';
import { Light, SphereGeometry } from 'three';
import "./style.css"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap';
import { ThemeProvider } from 'react-bootstrap';
// scene
const scene = new THREE.Scene()

//creating a sphere
const geometry = new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshStandardMaterial({
  color:"#00ff83",
  roughness: 0.5
})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//light
const light = new THREE.SpotLight(0xffffff,1,100)
light.intensity = 1.25
light.position.set(0,10,10)
scene.add(light)


//sizes
const size = {
  width: innerWidth,
  height:innerHeight,
}

//camera
const camera = new THREE.PerspectiveCamera(45,size.width/size.height,0.1,100)  //(field of vision angle, aspect/aspect,near cliping point(min distance), far cliping poinnt (max distance)
camera.position.z = 20
scene.add(camera)


//renderer
const canvas = document.querySelector(".webgl")  //used to select the .webgl class in html
const renderer = new THREE.WebGLRenderer({ canvas})
renderer.setSize(size.width,size.height) //the same size as the camera aspect
renderer.setPixelRatio(2)
renderer.render(scene,camera)

//conrols 
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.enablePan =false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

//resize
window.addEventListener("resize", () =>{
  //updateng sizes
  size.width= window.innerWidth
  size.height = window.innerHeight

  // update camera
  camera.aspect = size.width/size.height
  camera.updateProjectionMatrix()
  renderer.setSize(size.width,size.height)
})

//loop
const loop=() =>{
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()

//animations
const tl= gsap.timeline({defaults:{duration:1}})
tl.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})
tl.fromTo("nav", {y:"-100%"},{y:"0%"})
tl.fromTo(".title",{opacity:0},{opacity:1})

//mouse animation color
let mouseDown = false
let rgb = []
window.addEventListener("mousedown",()=>(mouseDown = true))
window.addEventListener("mouseup",()=>(mouseDown= false))

window.addEventListener("mousemove", (e)=>{
  if(mouseDown){
    rgb = [
      Math.round((e.pageX / size.width) * 255),
      Math.round((e.pageY   / size.width) * 255),
      150,
    ]
    //console.log(rgb)
    //animations
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(mesh.material.color,{
      r:newColor.r,
      g:newColor.g,
      b:newColor.b,
    })
  }
})