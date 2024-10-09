# **Blog Title**: January Release Notes 🎨

**Blog URL:** [https://blog.pitchprint.com/january-release-notes](https://blog.pitchprint.com/january-release-notes)

Hi guys! We appreciate your support over the past year and we look forward to a much more exciting year ahead.

We are working to build a brand new analytics and customer journey app that will help you make more sales. Over the first quarter of this
year, we will integrate a part of it into PitchPrint. Our vision has always been to help our customers sell more; And if we can do this by
giving you more actionable insights into your users' pain points, then we will be pleased to.

Here are the features we released over the past month..


DESIGN HISTORY

This feature allows you to track design creation history and revert back to any point in time.

[https://blog.pitchprint.com/content/images/2019/01/image.png]

To view this, simply navigate to your designs page [https://admin.pitchprint.io/designs]. Hover over any design and click the configure icon
and you'll find the History Tab.

You can view thumbnails and date of each edits you've made on the design and revert to a any prior version by clicking the button labelled
"Make Latest"


PROJECT AUTO-SAVE

We have the auto-save feature now on PitchPrint. This automatically saves your customer's design and updates the product session so should
in case they refresh their browser, they can always resume their work.

This is set to save at a 2-minute interval and can be enabled in your settings page [https://admin.pitchprint.io/settings]

We are working to display a customer notification and option to set the intervals in our settings page.


NEW PDF DISTILLER

Yes we do have a new PDF Distiller now. The old PDF engine we use is based on TCPDF which development has been stopped and as such, some SVG
specifications were missing and never implemented. The new one is based on CairoGraphics [https://www.cairographics.org] which is quite
robust and is used by a lot of organizations including Mozilla.

We have yet to implement color profiles on it but works excellently in RGB mode and renders near perfect object positioning. In addition, we
are running it on AWS Lambda [https://aws.amazon.com/lambda/], a robust system with 99.95% availability and primed for more aggressive
feature updates.

You can render your PDFs using the new distiller by navigating to the settings page [https://admin.pitchprint.io/settings] and selecting
Version 2 in the PDF Distiller option box. Please note, only projects saved from 14th January upwards will render on this platform.

[https://blog.pitchprint.com/content/images/2019/01/image-6.png]

Should you have any fonts issues, kindly send us the font via support [ support@pitchprint.com] and we'll gladly install for you.


PROJECTS SEARCH & FILTER

With this release, you can search projects by a customer's details like name, email as well as product title. In addition, you can filter
the displayed projects by dates they were saved.


SKIP PREVIEW

Enabling this feature in settings page [https://admin.pitchprint.io/settings] means users can save their work without going through the
preview window. This is most useful in mini-displays.


NEXT MONTH..

 * Brand new Image Editor
 * Color Profiles on new Distiller
 * Import designs from PDF, Illustrator
 * Text & Design Rules
 * Text Fit
 * SVG improvements

Cheers and do have an awesome year ahead ✌

![January Release Notes 🎨](https://blog.pitchprint.com/content/images/2019/03/marc-marchal-391891-unsplash--1-.jpg)&nbsp;&nbsp;&nbsp;&nbsp;

