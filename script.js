const GhostContentAPI = require('@tryghost/content-api');
const fs = require('fs');
const {convert } = require('html-to-text');

// Initialize the GhostContentAPI 

const api = new GhostContentAPI({
    url: 'https://blog.pitchprint.com',
    key: '70b8b5bab31bb6a8fa1b227c6d',
    version: "v2.0"
  });
  

  // Fetch posts
  api.posts
      .browse({limit: 'all', include: 'ID, images, title, content'})
      .then((posts) => {
        let markdownContent = '';

  // display all post data
          posts.forEach((post) => {

            markdownContent +=  `**ID**: ${post.id}\n\n`;
            markdownContent +=  `## ${post.title}\n\n`; 

            // convert html to text
            const plainText = convert(post.html, {
                wordwrap: 140,
            })
            markdownContent +=  `${plainText}\n\n`;
            markdownContent +=  `--------------------\n\n`;

            // include images if available

            if (post.feature_image) {
              markdownContent +=  `![${post.image}](${post.feature_image})\n\n`;
            }
          });

          
          fs.writeFile('Blog-posts.md', markdownContent, (err) => {
            if (err) {
              console.error(err);
              return;
            } else {
              console.log('File written successfully!');
            }
          });
      })
      .catch((err) => {
          console.error(err);
      });

