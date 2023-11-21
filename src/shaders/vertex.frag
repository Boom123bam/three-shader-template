uniform float u_time;
// varying vec2 vUv;
varying float waveHeight;
void main(){
  // vUv = uv;

  vec4 origin = vec4(0.0, 0.0, 0.0, 1.0);
  vec4 toOrigin = normalize(origin - modelMatrix * vec4(position, 1.0));
  vec3 displacement = vec3(toOrigin.x,0,toOrigin.z) * .5;
  waveHeight = (sin(position.y * 1. + u_time * 1. ) + 1.) * .5;

  displacement *= waveHeight;

  // displacement = vec3(0);

  vec3 final = position - displacement;
  gl_Position = projectionMatrix *
    modelViewMatrix *
    vec4(final, 1.);
}