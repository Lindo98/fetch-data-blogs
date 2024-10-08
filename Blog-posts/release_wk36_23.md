# **Blog Title**: Release WK36-23

**Blog URL**: [https://blog.pitchprint.com/release-wk36-23](https://blog.pitchprint.com/release-wk36-23)

Hi All👋,

It's been a while and as always it's an absolute pleasure for us to keep you updated with what our team has been working on to make your
experience on PitchPrint even better!

What's new🚀,

Smart Sizes sync to Product Page - In the past, our Smart Sizes feature had limitations as it only allowed customers to modify page sizes
within the PitchPrint editor. We've expanded this functionality to now seamlessly integrate with the product page, establishing a two-way
synchronisation. This means that customers can select their preferred size on the product page, and the editor will open with that selected
size. Conversely, customers can also choose a size within the editor, submit their choice, and the product page will update accordingly to
reflect the chosen size.

To enable this two-way synchronisation, please incorporate your variation element selector using the provided code snippet below:

> PPCLIENT.smartSizeSelector ='#dimensions';

Add to the settings [https://admin.pitchprint.com/settings] page in the custom Javascript section as shown below:

[https://blog.pitchprint.com/content/images/2023/09/image.png]

The above should be inserted in your PitchPrint Admin Settings, under Custom Javascript. Note '#dimensions' is just an example, you would
need to provide your own selector that can be found on your product page, if it has a size selection.

WIX Cart previews - We've introduced cart previews on WIX, enabling customers to view their customised images within the cart. It's worth
noting that we don't have access to the checkout API, so we can't modify the image displayed during the checkout process. Furthermore, we've
also incorporated additional functionality on WIX for an improved user experience.

Clear design on reload - We've also added this incredible functionality that enables customers to clear their designs when they reload the
page, providing a fresh start whenever needed. To activate this functionality, simply navigate to your settings
[https://admin.pitchprint.com/settings] >> then scroll down to the section indicated below and enable the setting:

[https://blog.pitchprint.com/content/images/2023/09/image-1.png]



We also fixed the following issue(s):

WIX cookie blocker - We've also resolved a major issue where the end user couldn't see the "customize" button when cookies were enabled on
their end. Now, regardless of cookie settings, customers should be able to view the customize button and not miss out on an opportunity to
personalise their orders!

That wraps up our updates for this week, everyone! We'll be back soon with more exciting updates and bug fixes. Wishing you a wonderful and
productive week ahead from the entire PitchPrint team! 😊

