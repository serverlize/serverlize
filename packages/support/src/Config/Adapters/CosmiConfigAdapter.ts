import cosmiconfig, { CosmiconfigResult, Explorer } from 'cosmiconfig';

import TypeScriptLoader from '../Loaders/TypeScriptLoader';
import AdapterInterface from './AdapterInterface';

export default class CosmiConfigAdapter implements AdapterInterface {
  explorer: Explorer;

  constructor(explorer?: Explorer) {
    this.explorer =
      explorer ||
      cosmiconfig('serverlize', {
        loaders: {
          '.ts': {
            async: TypeScriptLoader,
          },
        },
      });
  }

  load = async (path: string): Promise<CosmiconfigResult> => {
    return this.explorer.load(path);
  };

  search = async (searchPath?: string): Promise<null | CosmiconfigResult> => {
    return searchPath
      ? this.explorer.search(searchPath)
      : this.explorer.search();
  };
}
