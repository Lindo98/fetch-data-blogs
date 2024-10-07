const GhostContentAPI = require('@tryghost/content-api');
const fs = require('fs');
const {convert } = require('html-to-text');
const path = require('path');

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

        // Create the markdown content for the index page

        // Loop through posts
        
        posts.forEach((post) => {
          // Create the markdown content for the individual post
          let markdownContent = `# **Blog Title**: ${post.title}\n\n`;
        
          // Convert HTML to plain text
          const plainText = convert(post.html, {
            wordwrap: 140,
          });
          markdownContent += `${plainText}\n\n`;
          markdownContent += `--------------------\n\n`;
        
          // Include images if available
          if (post.feature_image) {
            markdownContent += `![${post.title}](${post.feature_image})\n\n`;
          }
        
          // Define the file name and path
          const fileName = `${post.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`; // Sanitizing the title
          const filePath = path.join('Blog-posts', fileName); // Adjust the path as necessary
        
          // Ensure the Blog-posts directory exists
          fs.mkdir(path.join('Blog-posts'), { recursive: true }, (err) => {
            if (err) {
              console.error('Error creating directory:', err);
              return;
            }
        
            // Write the markdown content to the file
            fs.writeFile(filePath, markdownContent, (err) => {
              if (err) {
                console.error(`Error writing file ${fileName}:`, err);
              } else {
                console.log(`Successfully wrote file ${fileName}`);
              }
            });
          });
        });
      })