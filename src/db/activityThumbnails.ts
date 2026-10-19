// 다섯 번째 사담콘: Google Drive의 video_sadamcon5_이름.jpg 파일.
const sadamcon5Thumbnails: Record<string, string> = {
  dnXFQLCdEWE: '1PCHm2pUUaXDCBEVGlYM4ErL9AmdoaGVx', // 이성태
  dkh3o7JRCgU: '1IYEBCJ-VzYRq0NCTVlewB4ixavKUO2B_', // 우창완
  xGi24p_Y0Xc: '148JXt3ZklpTvE9vsTsvmGsRxazF-Hvep', // 양상우
  vd3wtmuj_Q4: '1mn4fr-G8TaC9l1k33hs-6HY6yI7qi-oW', // 서영학
  pi9IZUAMDH8: '1TqWtilsk5mZn7thCmyvd5VvHzxGcYcfk', // 김진욱
  _4Tb4H4OjCE: '1LG21VsWz6sLu7uMc-CsLnDvYAwoHUWhE', // 김나정
  PmcXsavOJNk: '1HZeGiypTAdZzNIlER88egGjI5IWPorVM', // 강주희
};

export function getActivityVideoThumbnail(link: string, thumbnail: string) {
  try {
    const url = new URL(link);
    const videoId =
      url.hostname === 'youtu.be'
        ? url.pathname.slice(1)
        : ['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(
              url.hostname,
            )
          ? url.searchParams.get('v')
          : null;
    const fileId = videoId && sadamcon5Thumbnails[videoId];

    return fileId
      ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
      : thumbnail;
  } catch {
    return thumbnail;
  }
}
