export default interface AdapterInterface {
  /**
   * Load configuration from a path
   * @param {string} path
   * @returns {Promise<any>}
   */
  load(path: string): Promise<any>;

  /**
   * Search for configuration in a path
   * @param {string} searchPath
   * @returns {Promise<any>}
   */
  search(searchPath?: string): Promise<any>;
}
