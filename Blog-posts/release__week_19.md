# **Blog Title**: Release #WEEK 19

 * Item Flip - We added vertical & horizontal flip for shapes and images.Annotation-2020-05-12-101635
   [https://blog.pitchprint.com/content/images/2020/05/Annotation-2020-05-12-101635.png]
 * Set Vectors as Background - Printers can now use a vector (SVG) as background images
 * PDF Commands - We started implementing pdf specific commands using design tags. The format is {pdf-operation-operand}. For now we have
   the join command for stringing two or more pages into a single PDF page.
   For instance, adding the following tag to a two paged design will join the pages side by side, horizontally: pdf-hjoin-1|2 The command is
   "hjoin", the operand is the pages separated by a pipe.
 * Grey border fixed - Fixed an issue whereby previews have a grey bounding border around the preview images.
 * Download PNG & JPEG in admin - Fixed the issue that prevents admins from downloading PNG or Jpegs while in the design editing environment

