const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const fs = require("fs");
const writeStream = fs.createWriteStream("scrape.csv");

const port = process.env.PORT || 4000;

const app = express();

const url = "https://battlebots.fandom.com/wiki/Discovery_Season_6";

const peopleArr = ["joe", "bob", "sue", "cody"];

axios
  .get(url)
  .then((res) => {
    const $ = cheerio.load(res.data);
    $(".article-table").each((index, element) => {
      const botTitles = $(element).find("td").text();
      let botArr = botTitles.split(" vs. ");
      console.log(`${botArr}`);

      writeStream.write(`${botArr} \n`);
    });
  })
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Server Established and running on Port ${port}`);
});