export class UpdateStages {

  static readonly type = '[Stages] Update';

  constructor(public completed: boolean, public key: string) {}
  
}