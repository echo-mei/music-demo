import originJsonp from "jsonp";

export function jsonp(url, data, opts) {
  url += (url.indexOf("?") < 0 ? "?" : "&") + param(data);
  return new Promise((resolve, reject) => {
    originJsonp(url, opts, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

export function param(data) {
  let url = "";
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : "";
    url += "&" + k + "=" + encodeURIComponent(value);
  }
  return url;
}
