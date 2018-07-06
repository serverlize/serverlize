const RESOURCE_PREFIX = 'Slz';

export const createResourceName = (resourceName: string) => {
  return `${RESOURCE_PREFIX}${resourceName}`;
};
