// getMainSections should ALWAYS return: an array of objects, each object containing a id, title, subtitle, and body.
// title and body should never be null or whitespace, subtitle may be empty but may not be whitespace
// id should always be unique -- the api should never return duplicate ids, but if it does, all but the first should be tossed out

import getMainSections from "./getMainSections";
import MockData from "./mockData";

beforeEach(() => {
    fetch.resetMocks();
})

describe('return type', () => {

    let mainSections;

    it('returns an array when the api returns good data', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.goodData));
        mainSections = await getMainSections();
        expect(mainSections.constructor === Array).toBe(true);
    });

    it('returns an empty array when the api rejects the request', async () => {
        fetch.mockResponseOnce(() => Promise.reject());
        mainSections = await getMainSections();
        expect(mainSections.constructor === Array).toBe(true);
    })

});

describe('object properties', () => {
    let mainSections;

    it('returns objects that contain correct properties', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.goodData));
        mainSections = await getMainSections();
        mainSections.forEach(element => {
            const hasId = element.hasOwnProperty('id');
            const hasTitle = element.hasOwnProperty('title');
            const hasSubTitle = element.hasOwnProperty('subtitle');
            const hasBody = element.hasOwnProperty('body');
            expect(hasId && hasTitle && hasBody && hasSubTitle).toBe(true);
        });
    });

    it('returns objects that contain correct properties, even when the fetched data is missing some', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.badDataMissingSections));
        mainSections = await getMainSections();
        mainSections.forEach(element => {
            const hasId = element.hasOwnProperty('id');
            const hasTitle = element.hasOwnProperty('title');
            const hasSubTitle = element.hasOwnProperty('subtitle');
            const hasBody = element.hasOwnProperty('body');
            expect(hasId && hasTitle && hasBody && hasSubTitle).toBe(true);
        });
    });

    it('returns objects that contain correct properties, even when the fetched data has blank strings', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.badDataEmptyStrings));
        mainSections = await getMainSections();
        mainSections.forEach(element => {
            const hasId = element.hasOwnProperty('id');
            const hasTitle = element.hasOwnProperty('title');
            const hasSubTitle = element.hasOwnProperty('subtitle');
            const hasBody = element.hasOwnProperty('body');
            expect(hasId && hasTitle && hasBody && hasSubTitle).toBe(true);
        });
    });

    it('returns objects that are not empty strings (except subtitle)', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.goodData));
        mainSections = await getMainSections();
        mainSections.forEach(element => {
            const isIdEmpty = element.id.trim().length === 0
            const isTitleEmpty = element.title.trim().length === 0
            const isBodyEmpty = element.body.trim().length === 0
            expect(isIdEmpty || isTitleEmpty || isBodyEmpty).toBe(false);
        });
    })

    it('returns objects that are not empty strings (except subtitle), even when the fetched data has empty strings', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.badDataEmptyStrings));
        mainSections = await getMainSections();
        mainSections.forEach(element => {
            const isIdEmpty = element.id.trim().length === 0
            const isTitleEmpty = element.title.trim().length === 0
            const isBodyEmpty = element.body.trim().length === 0
            expect(isIdEmpty || isTitleEmpty || isBodyEmpty).toBe(false);
        });
    })
});

describe('id uniqueness', () => {
    let mainSections;

    it('should always be unique', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.goodData));
        mainSections = await getMainSections();
        const usedIds = [];
        mainSections.forEach(element => {
            expect(usedIds.includes(element.id)).toBe(false);
            usedIds.push(element.id);
        });
    })

    it('should always be unique, even if the api call gives duplicates', async () => {
        fetch.mockResponseOnce(JSON.stringify(MockData.badDataDuplicateIds));
        mainSections = await getMainSections();
        const usedIds = [];
        mainSections.forEach(element => {
            expect(usedIds.includes(element.id)).toBe(false);
            usedIds.push(element.id);
        });
    })
});