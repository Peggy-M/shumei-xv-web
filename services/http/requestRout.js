//所有调用后的请求接口封装
import request from '../../utils/request';
export async function getBannerImages() {
  try {
    const response = await request('http://localhost:8080/shumei/getBannerImages', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    });
    if (Array.isArray(response)) {
      return response;
    } else {
      console.warn('Response is not an array.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    wx.showToast({
      title: '请求失败',
      icon: 'none',
      duration: 2000
    });
  }
}