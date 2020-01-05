import { StagesType } from '../model/stages';

export class UpdateStages {

  static readonly type = '[Stages] Update';

  constructor(public completed: boolean, public key: StagesType) {}
  
}