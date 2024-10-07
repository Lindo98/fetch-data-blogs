# **Blog Title**: Release WK21-46

Hi all👋,

As always we're excited to keep you up to date with what our team has been working on to make your experience on PitchPrint even better.

What's new🚀,

Support for Webp image files - Previously, our customers could only upload .jpg and .png image files and we have now added .webp image
format on the list as well. We will keep adding more file format upload options on the list as we go along.

Custom Images - We added a feature whereby developers can now parse images from an external library into the editor by using the code below:

customImages: [ { title: "Title of Category", items: [ { title: "Title of Image 1", url: "myimage1.png", isImage: true }, { title: "Title of
Image 2", url: "myimage2.png", isImage: true } ] } ]

Once the editor loads these images, they will be added to the existing images inside the picture tab. With this amazing new feature, you can
easily parse as many images as possible, no restrictions at all. The above code is being used purely for illustration purposes only.

Now onto our weekly bug fixes:

Offsets in Combination with Page Loader - We had an issue with the offsets of a template image occasionally moving off the template when
switching between pages whilst using the Page Loader module. We've gone ahead and fixed this issue and the offsets will now remain fixed on
the template irrespective of switching between pages or not.

Load Text Art before Rendering - We also had an issue with text arts where it would not display the correct font immediately after it has
been added to the canvas but would instead show the default font "arial" and then load the correct font after sometime. We've fixed this
issue and the correct font will render instantly when text arts is added to the canvas.

That's it for this week folks, tune in next week for some more exciting new features and bug fixes. Enjoy the rest of your week :)

