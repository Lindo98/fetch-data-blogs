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
      .browse({limit: 'all', include: 'title, images, content'})
      .then((posts) => {
       
        // Loop through posts
        posts.forEach((post) => {  

          // Create the markdown content for the individual post
          let markdownContent = '';
          
          markdownContent += `# **Blog Title**: ${post.title}\n\n`;
          markdownContent += `**Blog URL:** [https://blog.pitchprint.com/${post.slug}](https://blog.pitchprint.com/${post.slug})\n\n`;
       
          // Convert HTML to plain text
          const plainText = convert(post.html, {
            wordwrap: 140,
          });
          markdownContent += `${plainText}\n\n`;
        
          // Include images if available
          if (post.feature_image) {
            markdownContent += `![${post.title}](${post.feature_image})\n\n`;
          }
        
          // Creating a path for the files.

          const fileName = `${post.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
          const filePath = path.join('Blog-posts', fileName); 

          // Create the directory 
          // fs.mkdir('Blog-posts', { recursive: true }, (err) => {
          //   if (err) {
          //     console.error('Error creating directory:', err);
          //   }
        
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
