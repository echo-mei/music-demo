import axios from "axios";

function getSongList() {
  // 线上环境地址，同学们根据自己的需要配置修改
  const url = "/api/getDiscList";

  const data =  {
    g_tk: 1928093487,
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0,
    format: "jsonp",
    platform: "yqq",
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random()
  };
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    });
}

export { getSongList };
