export interface RawImage {
  size : number,
  stack : string,
  pushed : string,
  imageInfo : ImageInfo,
}

export interface ImageInfo {
  buildpacks : Buildpack[],
  bom : Map<string, string>,
}

export interface Buildpack {
  id : string,
  version : string,
}
