const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.somatra-get.com.tn/projets-en-cours.php')
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    try {
      $('div.blog-post').each((i, article) => {
        const title = $(article).find('h3 a').text().trim();
        const link = $(article).find('h3 a').attr('href');
        const description = $(article).find('.wt-post-text li').map((i, el) => $(el).text().trim()).get();
        

        console.log(`Title: ${title}`);
        console.log(`Link: ${link}`);
        console.log(`Description: ${description}`);
        console.log('----------------------');
      });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error);
  });