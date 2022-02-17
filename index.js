const cheerio = require('cheerio'); //The tool for parsing data from the webpages
const request = require('request');

request('https://battlebots.fandom.com/wiki/Discovery_Season_6',
        (error, response, html) => {
            if(!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                //console.log(html)
                const botTable = $('table.article-table.fandom-table > tbody > tr > td').each((i, el) => {
                    const competitor = $(el)
                    .text()
                    //.replace(/\s/s+/g)
                    console.log(competitor)
                    //const competitorUrl = $(el).find('')
                })
                const episode = $('.mw-parser-output > h3').each((i, el) => {
                    const episode = $(el)
                    .text()
                    console.log(episode)
                })

            }
        })