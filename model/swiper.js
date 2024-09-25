// const images = [
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
//     text: '1',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
//     text: '2',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
//     text: '3',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
//     text: '4',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
//     text: '5',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
//     text: '6',
//   },
// ];
import request from '../utils/request';
let images = [];
export async function fetchData() {
  try {
    const response = await request('http://localhost:8080/shumei/getImages', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    });
    if (Array.isArray(response)) {
      images = response;
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
export function genSwiperImageList() {
  fetchData();
  return images;
}