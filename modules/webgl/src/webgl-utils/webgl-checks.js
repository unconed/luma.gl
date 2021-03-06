import {assert} from '../utils';
import {isWebGL, isWebGL2} from '@luma.gl/gltools';

// Heuristic testing of contexts (to indentify debug wrappers around gl contexts)
// const GL_ARRAY_BUFFER = 0x8892;

export const ERR_CONTEXT = 'Invalid WebGLRenderingContext';
export const ERR_WEBGL = ERR_CONTEXT;
export const ERR_WEBGL2 = 'Requires WebGL2';

export function assertWebGLContext(gl) {
  // Need to handle debug context
  assert(isWebGL(gl), ERR_CONTEXT);
}

export function assertWebGL2Context(gl) {
  // Need to handle debug context
  assert(isWebGL2(gl), ERR_WEBGL2);
}
