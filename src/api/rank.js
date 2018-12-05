// import axios from "axios";
import { commonParams, options } from "api/config";
import { jsonp } from "common/js/jsonp";

export function getRankList() {
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: "h5",
    needNewCode: 1,
    _: 1542793042786
  });
  return jsonp("/wx/v8/fcg-bin/fcg_myqq_toplist.fcg", data, options);
}
