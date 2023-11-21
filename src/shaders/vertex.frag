uniform float u_time;
// varying vec2 vUv;
varying float waveHeight;

void main(){
  // vUv = uv;

  vec3 displacement = vec3(normal.x,0,normal.z);
  waveHeight = .5 + .5 * sin(position.y + u_time);

  displacement *= waveHeight;

  vec3 finalPos = position + displacement;
  gl_Position = projectionMatrix *
    modelViewMatrix *
    vec4(finalPos, 1.);
}