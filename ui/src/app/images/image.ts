export interface Image {
  name : string;
  tag : string;
  latestImage : string;
  gitSource : GitSource;
}

export interface GitSource {
  url : string;
  revision : string;
}