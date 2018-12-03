// import axios from "axios";
import { commonParams, options } from "api/config";
import { jsonp } from "common/js/jsonp";

export function getSingerList() {
  const data = Object.assign({}, commonParams, {
    channel: "singer",
    page: "list",
    key: "all_all_all",
    pageSize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: "yqq"
  });

  return jsonp("/wx/v8/fcg-bin/v8.fcg", data, options);
}
