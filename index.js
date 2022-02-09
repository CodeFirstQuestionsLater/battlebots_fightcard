const PORT = 8000; //The express port
const axios = require('axios');
const cheerio = require('cheerio'); //The tool for parsing data from the webpages
const { response } = require('express'); //Honestly not sure but will look it up
const express = require('express'); //The webserver

const app = express(); // app = express now
const url = 'https://battlebots.fandom.com/wiki/Discovery_Season_6'; //The webpage to pull battlebot lineups from

axios(url) //Pass the URL to axios. Presumably to pull all the data from
    .then(response => { //Pass the data
        const html = response.data //html = all of the reponse data
        const $ = cheerio.load(html) //Cheerio loads the HTML and $ references it
        const lineup = [] //the array that will have everything passed to it eventually
        $('.fandom-table', html).each(function() { //Searches through the HTML for the given tag.
            const episode = $(this).text() // ### Need to figure out how to sort through the HTML for the episode title specifically
            const bots = $(this).find('a').attr('title') // ### This is also wrong. 
            lineup.push({ //Push the data to the array one at a time
                episode,
                bots
            })
        })
        console.log(lineup) //Log output to the console

    }).catch(err => console.log(err)) //CATCH ERRORS. Need to do this more

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)); // express listening to port 8000 and logging that it is running to the console