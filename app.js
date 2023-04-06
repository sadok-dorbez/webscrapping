const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.somatra-get.com.tn/projets-en-cours.php') 
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const projectTitle = $('h3.post-title a').text();
    const projectUrl = $('h3.post-title a').attr('href');

    console.log(projectTitle, projectUrl);
  })
  .catch((error) => {
    console.log(error);
  });
