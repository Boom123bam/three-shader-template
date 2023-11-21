// varying vec2 vUv;
// uniform float u_time;
// varying vec3 pos;
varying float waveHeight;

void main(){
    vec3 color = vec3(waveHeight);
    color.rg *=.5;

    gl_FragColor = vec4(color,1.0);
}
