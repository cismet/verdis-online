export const getInternetExplorerVersion = () => {
  let rV = -1; // Return value assumes failure.

  if (navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape") {
    let uA = navigator.userAgent;
    let rE = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");

    if (rE.exec(uA) !== null) {
      rV = parseFloat(RegExp.$1);
    } else if (!!navigator.userAgent.match(/Trident.*rv:11\./)) {
      /*check for IE 11*/
      rV = 11;
    }
  }
  return rV;
};
