import { BuildStage } from './build-stage';

export interface Build {
  id : string;
  image : string;
  buildNumber : number;
  running: boolean;
  started : Date;
  status : string;
  latestImage : string;
  stages : BuildStage[];
  tags : string[];
}