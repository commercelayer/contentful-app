function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as raw from './raw';
export const get = (http, params) => {
  return raw.get(http, `/spaces/${params.spaceId}/environments/${params.environmentId}/releases/${params.releaseId}/actions/${params.actionId}`);
};
export const getMany = (http, params) => {
  return raw.get(http, `/spaces/${params.spaceId}/environments/${params.environmentId}/release_actions`, {
    params: params.query
  });
};
export const queryForRelease = (http, params) => {
  return raw.get(http, `/spaces/${params.spaceId}/environments/${params.environmentId}/release_actions`, {
    params: _objectSpread({
      'sys.release.sys.id[in]': params.releaseId
    }, params.query)
  });
};