const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.somatra-get.com.tn/projets-en-cours.php')
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    $('article').each((i, article) => {
      const title = $(article).find('h2 a').text().trim();
      const link = $(article).find('h2 a').attr('href');
      const description = $(article).find('.entry-content p').text().trim();

      console.log(`Title: ${title}`);
      console.log(`Link: ${link}`);
      console.log(`Description: ${description}`);
      console.log('----------------------');
    });
  })
  .catch((error) => {
    console.log(error);
  });
