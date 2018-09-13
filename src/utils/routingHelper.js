import "url-search-params-polyfill";

export function modifyQueryPart(search, modifiedParts) {
    let original = new URLSearchParams(search);
    let pNames = Object.getOwnPropertyNames(modifiedParts);
    for (let n of pNames) {
        if (original.has(n)) {
            original.set(n, modifiedParts[n]);
        } else {
            original.append(n, modifiedParts[n]);
        }
    }
    return "?" + original.toString();
}

export function changeKassenzeichenInLocation(location, kasznr) {
    let withoutKassz = location.pathname.replace(/\d+$/, "");
    let lastSlash = withoutKassz.lastIndexOf("/");
    let out;
    if (lastSlash + 1 === withoutKassz.length) {
        out = withoutKassz + kasznr + location.search;
    } else {
        out = withoutKassz + "/" + kasznr + location.search;
    }
    return out;
}
