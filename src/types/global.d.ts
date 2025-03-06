export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

// custom.d.ts
declare module '*.glb' {
    const content: any;
    export default content;
  }
  
  declare module '*.png' {
    const content: any;
    export default content;
  }