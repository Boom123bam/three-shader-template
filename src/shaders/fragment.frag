varying vec2 vUv;
uniform float u_time;
varying float waveHeight;
varying vec3 pos;

void main(){
    vec3 color = vec3(waveHeight);
    // color.rg -=.2;

    gl_FragColor = vec4(color,1.0);
    // fragColor = vec4(1);
}
