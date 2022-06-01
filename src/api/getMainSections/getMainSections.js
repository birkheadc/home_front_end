import Api from "..";

function doesDataContainId(data, id) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.id === id) {
            return true;
        }
    }
    return false;
}

function getGoodData(data) {
    console.log(data);
    const goodData = [];
        data.forEach(element => {
            const hasId = element.hasOwnProperty('id');
            const hasTitle = element.hasOwnProperty('title');
            const hasBody = element.hasOwnProperty('body');

            const isIdEmpty = element.id.trim().length === 0;
            const isTitleEmpty = element.title.trim().length === 0;
            const isBodyEmpty = element.body.trim().length === 0;

            if (hasId && hasTitle && hasBody) {
                if (isIdEmpty || isTitleEmpty || isBodyEmpty === false) {
                    if (doesDataContainId(goodData, element.id) === false) {
                        goodData.push(element);
                    }
                }
            }
        });
        return goodData;
}

async function getMainSections() {
    const apiUrl = Api.getApiUrl() + "/section";
    console.log(apiUrl);
    try {
        const response = await fetch(apiUrl, {
            method: 'GET'
        });
        const data = await response.json();
        const goodData = getGoodData(data);
        return goodData;
    }
    catch {
        console.log("error ??");
        return [];
    }
}

export default getMainSections;