const GhostContentAPI = require('@tryghost/content-api');
const fs = require('fs');
const {convert } = require('html-to-text');
const path = require('node:path');

// Initialize the GhostContentAPI 

const api = new GhostContentAPI({
    url: 'https://blog.pitchprint.com',
    key: '70b8b5bab31bb6a8fa1b227c6d',
    version: "v2.0"
  });
  

  // Fetch posts
  api.posts
      .browse({limit: 'all'})
      .then((posts) => {
       
        // Loop through posts
        posts.forEach((post) => {  

          // Create the markdown content for the individual post
        
          let markdownContent = '';
          if (post.title) {
            markdownContent = `# **Blog Title**: ${post.title}\n\n`;
          } else {
            console.log(`No title found for post ${post.title}`);
          }
          
          if (post.slug) {
            markdownContent += `**Blog URL:** [https://blog.pitchprint.com/${post.slug}](https://blog.pitchprint.com/${post.slug})\n\n`;
          } else {
            console.log(`No slug found for post ${post.title}`);
          }
          
       
          // Convert HTML to plain text
          const plainText = convert(post.html, {
            wordwrap: 140,
          });
          
          if (plainText) {
            markdownContent += `${plainText}\n\n`;
          } else {
            console.log(`No plain text found for post ${post.title}`);
          }
          
        
          // Include images if available
          if (post.feature_image) {
            markdownContent += `![${post.title}](${post.feature_image})\n\n`;
          }
        
          // Creating a path for the files.

          const fileName = `${post.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
          const filePath = path.join('Blog-posts', fileName); 
        
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
