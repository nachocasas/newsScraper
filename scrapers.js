const cheerio = require('cheerio');
const axios = require('axios');
const url = 'http://infobae.com';

exports.processKeywordSearch = async function (keyword) {

    try {
        const response = await axios.get(url);
        let result = [];
        const $ = cheerio.load(response.data);

        $(`#pb-root .headline:contains(${ keyword })`).each(function(i, elem) { 
            result.push($(this).text())
        });
        return result;

    }catch (e){
        console.log(e);

    }
};


exports.processCountWords = async function () {

    try {
        const response = await axios.get(url);
        let titles = "";
        const $ = cheerio.load(response.data);
        $(`#pb-root .headline`).each(function(i, elem) { 
            titles = titles.concat($(this).text() + " ")
        });

        weigthedWords = weightWords(titles);

        return weigthedWords;

    }catch (e){
        console.log(e);
    }
};

function weightWords(titles){

    words = titles.split(" ");

    let weightedWords = {};
    words.forEach(element => {
        const match = new RegExp(element,"gi");
        element = element.trim();
        
        if(element.length > 3){
            weight = titles.match(match).length;
            if(weight > 1 ){
                Object.assign(weightedWords, weightedWords[element] = weight );
            }
        }
    });

    return weightedWords;
}