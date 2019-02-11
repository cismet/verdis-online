import parseSVG from "svg-path-parser";
import polylabel from "polylabel";

export const getRelativeInnerPointFromSVGString = svgD => {
    //parse the svg d string to an object
    let parsed = parseSVG(svgD);
    let minX = 0;
    let minY = 0;
    let coords = [];
    
    //Store the coords in an array and calculate the minx and miny 
    parsed.map(el => {
        if (el.command === "closepath") {
            coords.push([coords[0][0], coords[0][1]]);
        } else {
            coords.push([el.x, el.y]);
        }
        if (minX > el.x || minX === 0) {
            minX = el.x;
        }
        if (minY > el.y || minY === 0) {
            minY = el.y;
        }
    });
    
    // get the polylabel
    let pl = polylabel([coords]);
    
    //to get the relative polylabel you need to subtract the minx and miny
    return [pl[0] - minX, pl[1] - minY];
};
