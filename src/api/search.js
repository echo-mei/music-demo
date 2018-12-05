import axios from "axios";
import { commonParams, options } from "api/config";
import { jsonp } from "common/js/jsonp";

export function getHotSearchList() {
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: "h5",
    needNewCode: 1,
  });
  return jsonp("/wx/splcloud/fcgi-bin/gethotkey.fcg", data, options);
}

export function getSearchResult(keywords, page) {
  const data = Object.assign({}, commonParams, {
    format: "json",
    w: keywords,
    p: page,
    perpage: 20,
    n: 20,
    catZhida: 1,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: "utf-8",
    sem: 1,
    aggr: 0,
    remoteplace: "txt.mqq.all",
    uin: 0,
    needNewCode: 1,
    platform: "h5"
  });
  return axios
    .get("/huangyi/music/api/search", {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}
