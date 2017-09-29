import {
    expect
} from 'chai';


import {
    modifyQueryPart,
    changeKassenzeichenInLocation
} from './routingHelper';

describe("routingHelper", () => {
    describe('changeKassenzeichenInLocation /versiegelteflaechen', () => {
        it('changeKassenzeichenInLocation with no kassenzeichen set', () => {
            const location = {
                pathname: "/versiegelteflaechen",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/versiegelteflaechen/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
        it('changeKassenzeichenInLocation with no kassenzeichen but leading / set', () => {
            const location = {
                pathname: "/versiegelteflaechen/",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/versiegelteflaechen/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
        it('changeKassenzeichenInLocation with same kassenzeichen set', () => {
            const location = {
                pathname: "/versiegelteflaechen/4711",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/versiegelteflaechen/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
        it('changeKassenzeichenInLocation with other kassenzeichen set', () => {
            const location = {
                pathname: "/versiegelteflaechen/76234872346",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/versiegelteflaechen/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
    });

    describe('changeKassenzeichenInLocation /esw', () => {
        it('changeKassenzeichenInLocation with no kassenzeichen set', () => {
            const location = {
                pathname: "/esw",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/esw/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
        it('changeKassenzeichenInLocation with no kassenzeichen but leading / set', () => {
            const location = {
                pathname: "/esw/",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/esw/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
        it('changeKassenzeichenInLocation with same kassenzeichen set', () => {
            const location = {
                pathname: "/esw/4711",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/esw/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
        it('changeKassenzeichenInLocation with other kassenzeichen set', () => {
            const location = {
                pathname: "/esw/76234872346",
                search: "?lat=51.272399843756354&lng=7.199690727407299&zoom=14",
                hash: "",
                state: undefined
            };
            const route = changeKassenzeichenInLocation(location, 4711);
            let expectedRoute = "/esw/4711?lat=51.272399843756354&lng=7.199690727407299&zoom=14";
            expect(expectedRoute).to.equal(route);
        });
    });

});
