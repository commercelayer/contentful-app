import * as raw from './raw';
export const create = (http, params, data) => {
  return raw.post(http, `/spaces/${params.spaceId}/environments/${params.environmentId}/app_installations/${params.appDefinitionId}/actions/${params.appActionId}/calls`, data);
};