/**
 * @private
 */
export function getUploadHttpClient(http) {
  const _ref = http.httpClientParams,
        hostUpload = _ref.hostUpload,
        defaultHostnameUpload = _ref.defaultHostnameUpload;
  const uploadHttp = http.cloneWithNewParams({
    host: hostUpload || defaultHostnameUpload
  });
  return uploadHttp;
}