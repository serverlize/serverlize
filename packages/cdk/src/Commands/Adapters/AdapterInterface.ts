import { ChildProcess } from 'child_process';

export default interface AdapterInterface {
  execute(command: string, args: string[]): ChildProcess;
}
