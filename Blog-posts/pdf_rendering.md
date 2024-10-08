# **Blog Title**: PDF Rendering

[https://blog.pitchprint.com/distilling-pdf](https://blog.pitchprint.com/distilling-pdf)

Over the years, one of our greatest challenge has been how to generate PDF files for print. Yes, PDFs are abundant all over the digital
space from bank statements to reports, e-books, invoicing, tickets, and so on but there are unique pain points faced by the print community
all over the world apart from just generating PDF files. Here is a quick overview on some of these key issues:

First, most PDF files are generic and targeted at screen consumption or home printers and as such, lack PDF features professional printers
require as prerequisites in order to send print tag information to their machines.

Secondly, PDF has an entirely different graphics model to what the web uses. For instance, the coordinates of a website starts from the top
left corner of the screen down-right-ward whereas PDF's coordinates start at the bottom left corner up-right-ward. The screen uses pixels
whereas a PDF uses the DTP point as a unit. A screen uses RGB color system whereas PDFs can accommodate different color spaces and we have
to handle all these conversions while re-creating a customer's design from the screen into a PDF element by element, layer by layer.

And lastly, the rendering fidelity for a receipt is much less than that for a graphics design created by a customer. If the colors on the
receipt or statement is off by a percentage point, that's fine so far the amount displayed is correct. This usage favors information display
over design integrity or quality assurance.

The PDF specification does not enforce feature completeness and as such, 95% of the PDF engines do not have all the feature sets that are a
necessity for professional print. Also, because the standard is always evolving, and relies on other frameworks, most engines implement
certain features differently or partially.

Here is an overview of our base PDF feature requirements:

 1.  Colors: Ability to support RGB, CMYK, Device colors, CIE L*a*b and named ICC Spot colors
 2.  Graphics operations: Compositing, masking, clipping, textures, patterns etc.
 3.  Overprint controls on Stroke and Fill
 4.  Font: Support for TrueType fonts with the ability to interpret and render Ligatures, Font substitution & color fonts
 5.  Vector ICC color mapping
 6.  Embedding ICC profiles in raster images
 7.  Render SVG 1.1 standard (2003) (with custom color mapping)
 8.  Support for Object layers
 9.  Import and placing PDF pages
 10. Page info: Bleed box, Crop marks, Trim box, Media box etc.
 11. Object Alpha and Blend modes

We have had to implement different PDF distillers based off of libraries that support a few subsets of our list which has led to us having
two different PDF Distillers.

The current Distiller 1 does not support the complete SVG standards and though we did a lot of tweaking and customization to bring it to
parity, there are still some missing implementations which we cannot add due to the structure of the library called TCPDF. To solve this
issue, we opted to build Distiller 2 based on CairoSVG [https://cairosvg.org/documentation/]library, which properly implements SVG 1.1 but
lacked a lot of the other key features such as color profiles, overprints just to name a few.

So, our biggest challenge has been finding a single PDF library that supports all these features and at a price point that will not affect
our customers' pockets.
A very few came to the fore, notably iText [https://itextpdf.com/], PDFLib [https://www.pdflib.com/], Adobe PDF SDK
[https://www.datalogics.com/adobe-pdf-library/] and PDF-tools [https://www.pdf-tools.com/en/]. But they are all licensed software, and very
expensive to justify and pass unto our customers. For instance, an iText commercial license costs over $5,000 with a cap of 40,000 PDFs
annually. That's less than half of what we generate for our customers on a monthly basis. Another key consideration was the ability to
deploy the library on a Serverless environment, which most of these 3rd party vendors do not support. A Serverless environment simply
ensures that each request (render) is handled by a single, separate server environment as against a single huge server which can get
overwhelmed with resource contention during peak requests and could subsequently crash.

In the beginning of the year, we explored Apache PDFBox [https://pdfbox.apache.org/], which is built on Java and is quite matured. Though
some features are lacking, it has pipelines that allowed us to implement these features with fewer pain points. So...we deployed a fully
revamped version from our current offering, called Distiller version 3 which we have officially released today. It's a work in progress and
will be the basis for our up coming major product update. While we rigorously tested this new PDF distiller internally and with our Beta
users, there can still be a few undiscovered bugs. If you do come across anything, please email us at support@pitchprint.com and we will
gladly iron out any errors.

Because it's built on the java framework, we leveraged Java's inbuilt text framework to handle text rendering and the font substitution. As
such, Ligatures work brilliantly well in the new distiller compared to the other two.

Here are a few sample comparison:

[https://blog.pitchprint.com/content/images/2022/09/Artboard---2.png]New Distiller 3 handles all modern Emoji characters using vector
rendering

On encountering an emoji character, the rendering mode switches from text to vector and renders the correct emoji in colors using
Microsoft's Segoe UI Emoji font including all skin color tones.



[https://blog.pitchprint.com/content/images/2022/09/Artboard---3.png]New Distiller 3 does on the go font substitution for missing glyphs. So
you can be rest assured every character will be rendered in the final PDF

A font is a collection of glyphs designed for each character in a language set. But a font cannot contain all the characters in the world,
as there are over a million characters in the Unicode specification. As such, all fonts are limited in the amount of characters they can
display. In such cases, a browser does font substitution, which means, if it cannot find the glyph for a character, it checks another font
for that glyph. Unfortunately, PDF doesn't do font substitution natively. Instead, it displays a "missing character" glyph as displayed on
the image above with a bird object with an X on it; in some other instances, it displays a box.

In distiller 3, we check every character in your text against the font file and if a character is missing, we do substitute the font for one
that has those characters and switch back to using your font. This ensures that our PDFs displays the right information, always.



We would highly recommend watching this video as it sheds more light on the challenges in rendering PDFs.



In the meantime, we’d love to hear any feedback you have on our new Distiller 3 and what we can do to make your experience with PitchPrint
even better. Your feedback is always appreciated 😊

Have a lovely and productive week from the PitchPrint Team!

