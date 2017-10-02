import objectAssign from 'object-assign';
import 'url-search-params-polyfill';

export function modifyQueryPart(search,modifiedParts) {
    let query=new URLSearchParams(search);
  let newQuery= objectAssign({}, query,modifiedParts );
    let pNames=Object.getOwnPropertyNames(newQuery);
    let querypart="?";
  let first=true;
  for (let nidx in pNames) {
      let connector;
      if (first) {
          connector="";
      }
      else {
          connector="&";
      }
      querypart=querypart+connector+pNames[nidx]+"="+newQuery[pNames[nidx]];
      first=false;
  }
  return querypart;  
}

export function getQueryObject(search) {
    let obj = {};
    if(search) {
        search.slice(1).split('&').map((item) => {
        const [ k, v ] = item.split('=');
        v ? obj[k] = v : null;
      });
    }
    return obj;
}

export function changeKassenzeichenInLocation(location,kasznr)  {
    let splitted=location.pathname.split("/");
    let out= "/"+splitted[1]+"/"+kasznr+location.search;
    return out;
}