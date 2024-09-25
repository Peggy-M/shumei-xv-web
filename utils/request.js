// utils/request.js

/**
 * 封装微信小程序的request方法
 * @param {string} url - 请求的URL
 * @param {object} [options={}] - 配置项
 * @param {object} [options.header] - 设置请求的Header
 * @param {object} [options.data] - HTTP请求参数，会序列化为query string或body
 * @param {string} [options.method='GET'] - HTTP请求方法，默认为GET
 * @returns {Promise} 返回Promise对象
 */
function request(url, options = {}) {
  const {
    header = {}, data = {}, method = 'GET'
  } = options;

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header,
      method,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(new Error(`Request failed with status ${res.statusCode}`));
        }
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

export default request;