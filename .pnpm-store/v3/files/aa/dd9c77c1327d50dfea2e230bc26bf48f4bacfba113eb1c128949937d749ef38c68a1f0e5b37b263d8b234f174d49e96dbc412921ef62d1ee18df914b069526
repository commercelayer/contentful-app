function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Contentful Management API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Management API.
 * @packageDocumentation
 */
import { getUserAgentHeader } from 'contentful-sdk-core';
import { createAdapter } from './create-adapter';
import createContentfulApi from './create-contentful-api';
import { createPlainClient } from './plain/plain-client';
import * as editorInterfaceDefaults from './constants/editor-interface-defaults';
export { asIterator } from './plain/as-iterator';
export { isDraft, isPublished, isUpdated } from './plain/checks';
export { createClient };
export { RestAdapter } from './adapters/REST/rest-adapter';
export { editorInterfaceDefaults };
export * from './export-types';

function createClient(params, opts = {}) {
  const sdkMain = opts.type === 'plain' ? 'contentful-management-plain.js' : 'contentful-management.js';
  const userAgent = getUserAgentHeader( // @ts-expect-error
  `${sdkMain}/${"10.10.0"}`, params.application, params.integration, params.feature);
  const adapter = createAdapter(params); // Parameters<?> and ReturnType<?> only return the types of the last overload
  // https://github.com/microsoft/TypeScript/issues/26591
  // @ts-expect-error

  const makeRequest = options => adapter.makeRequest(_objectSpread(_objectSpread({}, options), {}, {
    userAgent
  }));

  if (opts.type === 'plain') {
    return createPlainClient(makeRequest, opts.defaults, opts.alphaFeatures);
  } else {
    return createContentfulApi(makeRequest);
  }
}