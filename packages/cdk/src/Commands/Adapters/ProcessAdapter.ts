import execa from 'execa';

import AdapterInterface from './AdapterInterface';

export default class ProcessAdapter implements AdapterInterface {
  exec: execa.ExecaStatic;

  constructor(exec: execa.ExecaStatic) {
    this.exec = exec;
  }

  execute = (command: string, args: string[]) => {
    return this.exec(command, args);
  };
}
