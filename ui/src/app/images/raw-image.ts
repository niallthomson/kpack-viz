export interface RawImage {
  size : number,
  stack : string,
  pushed : string,
  imageInfo : ImageInfo,
}

export interface ImageInfo {
  buildpacks : Buildpack[],
  bom : BomEntry[],
}

export interface Buildpack {
  id : string,
  version : string,
}

export interface BomEntry {
  name : string,
  version : string,
  metadata : Map<string, any>,
  buildpack : Buildpack,
}