**ID**: 66e908c4c854d028e3b8f853

## Release WK38-24

Hi All 👋,

We are delighted to share the latest updates aimed at enhancing your experience with PitchPrint. As we welcome Spring here in Cape Town, we
are excited to announce that we have several fantastic updates planned for the coming months. We look forward to unveiling these
improvements and enhancing your PitchPrint experience.

What's new 🚀,

Search fonts by letter - In our ongoing effort to improve user experience, we've introduced a new feature to simplify font navigation.
Manually scrolling through a long list of fonts can be time-consuming, so we've added the ability for both administrators and end users to
search for fonts using alphabetical letters. For a visual representation of this functionality, please refer to the image below.

[https://blog.pitchprint.com/content/images/2024/09/image.png]

Warning Pop up for Project Deletion - While the recent activity list provides admins with the ability to restore deleted assets, many of our
customers have requested an additional confirmation step to ensure that asset deletion is intentional. In response to this feedback, we have
implemented a pop-up warning message to provide an extra layer of confirmation before proceeding with asset deletion.

[https://blog.pitchprint.com/content/images/2024/09/image-1.png]

We also fixed the following bugs:

Selector issues with Design Observables - Our design observables module utilises element selectors to identify the variations passed to the
designer. We have addressed a concern reported by some customers regarding selectors with special characters. The code has been updated to
properly handle special characters within selectors. The module is now capable of working seamlessly with any variable from the product
page, including those containing special characters.

Webhooks and PDF URL links - A webhook is an endpoint triggered when a specific action is performed. On PitchPrint, we offer four webhooks:
File Uploaded, Project Saved, Order Processing, and Order Completed. Once a webhook is created and linked to any of these actions, it
ensures that a designated event is triggered when the action is fulfilled.

Many customers use our order webhooks to automate processes, such as sending files to a printer or directly to the end user. We recently
identified and resolved an issue where the PDF download links in the webhook responses were incorrect. The download links have now been
fixed and should function properly across all platforms.

Thank you for joining us this week. We will return soon with more feature updates and bug fixes. Wishing you a wonderful and productive week
from the PitchPrint Team. 🤗.

--------------------

**ID**: 66bf28afc854d028e3b8f79d

## Release WK33-24

Hi all👋,

We are pleased to update you on the recent efforts of our team to enhance your experience on PitchPrint.

What's new 🚀,

Runtime Endpoint to Fetch User projects - We added an exciting new feature which allows an admin to fetch user projects with the help of the
userId. To make use of this feature please use the following endpoint https://api.pitchprint.com/runtime/fetch-user-projects
[https://api.pitchprint.com/runtime/fetch-user-projects]. Then use your Secret key as an Authorisation in the header. Your secret key can be
found on the following link [https://admin.pitchprint.com/domains]. Additionally you need to pass the userId as JSON in the body. Please
have a look at an example with cURL below:

curl --location 'https://api.pitchprint.com/runtime/fetch-user-projects [https://api.pitchprint.com/runtime/fetch-user-projects]'
--header 'Authorization: &3SQxBRONb#aa(^uiC@v*4aM8DkQR^'
--header 'Content-Type: application/json'
--data '{
"userId": "5629946986554"
}'

Move customize button - We are thrilled to introduce a long-awaited feature that addresses a frequent customer request. Previously,
repositioning buttons required manual code changes, which often caused issues, particularly after site updates.

With this new feature, admins can now effortlessly select an element on their site where they want to place a button, and it will
automatically be positioned before the chosen element. This streamlined process reduces potential disruptions. You can find this new feature
under Store Settings in the settings menu. Please refer to the image below for guidance:

[https://blog.pitchprint.com/content/images/2024/08/image.png]

Add product to Cart - We’re also excited to introduce a highly requested feature designed to streamline and speed up the design process for
store owners. When activated, this feature will automatically redirect customers to the Cart, skipping the product page entirely. You can
enable this option under Designer Settings, and we’ve included an illustrative image below for your reference:

[https://blog.pitchprint.com/content/images/2024/08/image-1.png]

That concludes our updates for this week. Stay tuned for more exciting new features and enhancements coming soon. Have an awesome week from
the PitchPrint Team 🤗

--------------------

**ID**: 666b0027c854d028e3b8f6eb

## Release WK29-24

Hi all 👋,

It's been a while but I can assure you we're working hard as always to make your experience on PitchPrint an even better one.

What's new 🚀,

Photo Print Module data in PDF Bookmarks - A while ago we released a feature which adds the data of the Photo Module to the PDF you can read
more about it here [https://blog.pitchprint.com/wk44/]. When we released this feature we only had two PDF distillers at that point in time.
We have however added a third PDF distiller since then. We are pleased to announce that we have now added this amazing feature to PDF
distiller version 3. This functionality allows the admin to see all the data regarding the Photo Print Module within the bookmark of the
PDF.

Design Observables on WIX -  We're working hard at making sure that all of our platforms are equal with regards to functionality, so without
further a do. We added the Design Observables module to the WIX platform this amazing category module now works on all WIX stores. Please
read more about design observables on the following link [https://docs.pitchprint.com/article/136-design-observables].

Partial search on Shopify - In the past the Shopify Products search was only limited to exact product search. However this was cumbersome
for our customer's since it would only pull up a product if you used the exact name of that product. We implemented the partial search which
allows you to search for a product using one or more keywords which the name contains.

AI Image Outpaint and Smart Replace - We updated the AI Image tool with two new features Outpaint and Smart Replace. Outpaint service
inserts additional content in an image, basically expands the image. Smart replace allows users to leverage a search_prompt to identify an
object to be replaced in an image. The service will automatically segment the object and replace it with the object requested in the prompt.

Exciting new 3D scenes - We know our 3D models are loved but it doesn't stop there for us we've been creating entire scenes to not only
allow end users to preview products, but also to view and change different products within an environment. Please have a look at a few of
our scenes below:

[https://blog.pitchprint.com/content/images/2024/06/Office-Space-Wallpaper.png]
[https://blog.pitchprint.com/content/images/2024/06/Billboard.png]
[https://blog.pitchprint.com/content/images/2024/06/Conference-Exhibition-Booth.png]
[https://blog.pitchprint.com/content/images/2024/06/Gallary-Final.png]
[https://blog.pitchprint.com/content/images/2024/06/Final-3D-Outdoor-Exhibition.png]
[https://blog.pitchprint.com/content/images/2024/06/Times-Square-Billboard.png]
[https://blog.pitchprint.com/content/images/2024/06/Real-Estate-Signage.png]



Well that's it for this week folks. See you guys next time with some more awesome features and fixes. Have an amazing weekend from the
PitchPrint Team 🤗!

--------------------

**ID**: 66279ad2c854d028e3b8f65c

## Release WK17-24

Hi all👋,

We're back with our very first release note for this year, with plenty more to come! As always we love keeping you up to date with what our
team has been working on to make your experience even better!

What's new🚀,

Mini Mode on WIX - Our journey on WIX has seen significant progress since our initial integration on the platform, with ongoing
functionality enhancements to enrich the user experience. A notable recent feature addition is the support for Mini Mode, allowing users to
enjoy all three display modes seamlessly on WIX.

Cart Image functionality on WIX - We've also made significant enhancements to the way cart images function on WIX. By refining our code,
we've optimised the loading process, resulting in faster performance and smoother user experience. These refinements ensure that cart images
load efficiently and seamlessly integrate into the overall end user shopping experience on the platform.

We also made the following fixes:

Mini Mode Upload - We resolved an issue related to mini mode and uploads within clickable masks. Previously, if the shape deviated from a
square or rectangle, the functionality would unfortunately not work. With our fix, uploads now function seamlessly regardless of the shape,
ensuring compatibility with Mini display mode.

WIX Products - There was an issue on PitchPrint where products failed to display when an admin visited the products page
[https://admin.pitchprint.com/products]. Initially, products failed to show up upon the first load, necessitating a page reload for
visibility. However, we've addressed this issue, ensuring that products now appear promptly upon the initial page load.

Well that's it for this week's updates, stay tuned for more exciting features and fixes. Have a lovely week from the PitchPrint Team!🤗

--------------------

**ID**: 651563b7c854d028e3b8f551

## Release WK39-23

Hi all👋,

We're back with some fantastic updates to make your experience on PitchPrint even better.

What's new🚀,

Edit Project Details - This awesome functionality will aid in adding details to every Project within PitchPrint admin. It provides admin
users with clear information about the associated customer and product for each order, streamlining project identification. To access this
amazing feature go to projects [https://admin.pitchprint.com/projects] and click on the edit icon next to an individual project as shown
below:

[https://blog.pitchprint.com/content/images/2023/09/image-2.png]

Enter the project details in the fields shown below and save to update the project details:

[https://blog.pitchprint.com/content/images/2023/09/image-3.png]



Switch from 3D to 2D view - We've introduced an exciting feature that enables your customers to toggle between 2D and 3D views in the
preview area. Previously, customers were restricted to either a 2D or a 3D preview within the editor. This enhancement provides flexibility
for customers to switch between these views based on their preference and needs.

To enable this feature please go to layouts [https://admin.pitchprint.com/layouts] and reload latest. Then clear your cache on your product
page and you should be able to see the buttons as shown below:

[https://blog.pitchprint.com/content/images/2023/09/image-7.png]Click on 2D to preview in 2D and on 3D to preview in 3D

> Please be sure to save your custom changes in an alternative location before reloading your layout.

Split by VFold lines - This awesome feature empowers you to split your PDF into separate pages utilising the VFold lines within PitchPrint.
Once enabled, the system will count the VFold lines and automatically segment your PDF into pages corresponding to the number of VFold lines
in the design. Please note that this feature is compatible with PDF distiller version 3. You can check your distiller version in the
settings [https://admin.pitchprint.com/settings] under the PDF section. To activate this valuable feature, follow these steps: open your
designs [https://admin.pitchprint.com/designs] in the designs section, navigate to the Page section, and add the split_by_vfoldlines tag as
shown below:

[https://blog.pitchprint.com/content/images/2023/09/Screenshot-2023-09-28-142511.png]



Well that's it for this week folks be sure to catch us in our next release for more awesome updates and features. Have a lovely week from
the PitchPrint team!😊

--------------------

**ID**: 64f992a0c854d028e3b8f456

## Release WK36-23

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

--------------------

**ID**: 64c0c3fcc854d028e3b8f364

## Release WK29-23

Hi all👋,

It's been a minute, and as always it's an absolute pleasure for us to keep you updated with what our team has been working on to make your
experience on PitchPrint even better!

What's new🚀,

Design selector search update - In our latest release note, we introduced enhancements to the design selector search feature discussed in
our previous update. Now, users have the ability to search for designs using tags, design names, or even specific letters within a design
name. When you assign tags to a design in the inside the PitchPrint admin, these tags become searchable criteria. Furthermore, the search
function also allows you to find designs based on letters present within their design names. Below, we provide a few examples to illustrate
these capabilities:

[https://blog.pitchprint.com/content/images/2023/07/image.png]Search using a single
letter[https://blog.pitchprint.com/content/images/2023/07/image-1.png]Search using tags assigned in design
configuration[https://blog.pitchprint.com/content/images/2023/07/image-2.png]Search using specific design names

Customer Design previews on Wordpress - Kindly take note that this particular feature is exclusively accessible for Wordpress with
Woocommerce. While we currently offer the ability to include a design file in an email, certain files may be excessively large to be easily
opened or attached to an email. As a solution, we have introduced an exceptional feature that enables the attachment of design previews
directly to the email on Wordpress. For further guidance on how to implement this functionality, please refer to the documentation available
here [https://docs.pitchprint.com/article/144-how-to-show-customer-design-previews-on-email-wordpress].

Default background mode option - Previously, we used a default method to showcase the background mode. However, we have now introduced an
exciting new feature that empowers the admin user to choose the default background mode when a new background is applied. This feature
offers three options: fill, fit and stretch. With this enhancement, admins have greater flexibility in determining how backgrounds are
displayed on the editor.

[https://blog.pitchprint.com/content/images/2023/07/image-6.png]An example of
STRETCH[https://blog.pitchprint.com/content/images/2023/07/image-4.png]An example of
FIT[https://blog.pitchprint.com/content/images/2023/07/image-5.png]An example of FILL

Plenty new 3D models - We're thrilled to announce the addition of numerous new 3D models, particularly in the packaging category. Take a
look at a selection of these exciting additions below:

[https://blog.pitchprint.com/content/images/2023/07/image--28-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--27-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--26-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--25-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--24-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--23-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--22-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--19-.png]
[https://blog.pitchprint.com/content/images/2023/07/image--18-.png]



We also fixed the following bugs:

Duplicate projects in the orders page on WIX - We've resolved an issue that was causing duplicate projects to appear on the orders page for
all orders placed on products with variations enabled. With the fix in place, the orders page now displays the correct project(s) for each
order, eliminating any previous instances of duplicates.

That's it for this week folks, until next time have a lovely and productive week from the PitchPrint team!😊

--------------------

**ID**: 6479a245c854d028e3b8f2a6

## Release WK23-23

Hi all👋,

It's been a while, and we are thrilled to provide you with the latest updates on what our team has been working on to enhance your
experience on PitchPrint.

What's new 🚀

Search Designs in Design Selector - We have introduced an exciting feature that allows end users to search for designs in the design
selector using keywords or design names. This time-saving feature eliminates the need for endless scrolling through designs. To enable this
feature, please save your styling preferences here [https://admin.pitchprint.com/styling] by clicking on the SAVE CHANGES button and then
reload the layout here [https://admin.pitchprint.com/layouts] by clicking on "reload latest". Note: After reloading, remember to save any
custom changes externally (such as Javascript and CSS) before pasting them back into PitchPrint. Check out the example below to see how the
search works:

[https://blog.pitchprint.com/content/images/2023/06/image.png]The search will pull up all designs that contain the letters or keywords

Pagination in Orders Page BigCommerce - For BigCommerce users, we have implemented pagination on the Orders page
[https://admin.pitchprint.com/orders]. This convenient feature enables admins to easily navigate through all the orders on their account.

Flatten Text into Vector Shapes - We are excited to introduce the new "Flatten text into vector shapes" feature. By enabling this option in
the settings [https://admin.pitchprint.com/settings], all text items in the PDF file will be flattened into vector shapes. This can be
particularly useful for specific design requirements. All you need to do is flip the toggle switch as shown below:

[https://blog.pitchprint.com/content/images/2023/06/image-1.png]

New Background Resources - We have expanded the selection of background resources available in the PitchPrint admin. Admins now have a wider
variety of backgrounds to choose from when creating designs. Take a look at some of the backgrounds we have added:

[https://blog.pitchprint.com/content/images/2023/06/backgrounds2.png][https://blog.pitchprint.com/content/images/2023/06/Designs.png][https://blog.pitchprint.com/content/images/2023/06/backgrounds.png]These
backgrounds fit designs ranging from A5 - A0

That wraps up our updates for this week, everyone! We'll be back soon with more exciting updates and bug fixes. Wishing you a wonderful and
productive week ahead from the entire PitchPrint team! 😊

--------------------

**ID**: 6454a070c854d028e3b8f1d2

## Release WK18-23

Hi everyone👋,

We are delighted to share with you the latest updates from our team at PitchPrint, which are aimed at improving your overall experience.

What's new🚀,

Preview Pages of a design on Wordpress - One of the new features we have introduced is the ability for admins to preview multiple pages of a
design on Wordpress. Previously, only the first page of a design was visible in the order details on Wordpress admin. However, with this new
functionality, admins can now view up to 10 pages of a design simply by clicking on the preview image in the order details. Please refer to
the images below for more information:

[https://blog.pitchprint.com/content/images/2023/05/image.png]Click on the preview image on the
left[https://blog.pitchprint.com/content/images/2023/05/image-1.png]Click on the arrows to view the different pages of the file.

Attach order ID to project on Wordpress - We have made another improvement to PitchPrint by adding the Wordpress order ID to the project
details. This will help users to easily identify which project belongs to which order. The order ID will be visible alongside the project
ID.

We also fixed the following issue:  

Scroll in left panel - A customer reported that the scroll bar would sometimes disappear when zooming in too far inside the editor. This
issue arose because the left section height was set to 100%, but only a portion of images were being displayed in the section. As a result,
the browser assumed that the scroll bar was unnecessary because all the available space in the section was already in use. We have resolved
this issue and the scroll bar will now appear regardless of the zoom value. Please see the images below for a visual representation:

[https://blog.pitchprint.com/content/images/2023/05/image-3.png]The panel with no scroll bar only showing a portion of the available
images[https://blog.pitchprint.com/content/images/2023/05/image-4.png]The panel which shows a portion of the images but with the scroll bar
so the customer can scroll down to see the rest of the images.

And that's it for this week, folks! We hope you have a productive week ahead from the PitchPrint team.😊

--------------------

**ID**: 642ec7acc854d028e3b8f129

## Release WK14-23

Hi All👋,

As always it's an absolute pleasure for us to let you know what our team has been working on to make your experience on PitchPrint even
better.

What's new🚀,

Black & White Image Operation - We added Black & White as an option in our image operation list. This allows you to convert an uploaded
image into black and white. Please have a look at the image upload operations we currently support below:

[https://blog.pitchprint.com/content/images/2023/04/image.png]

To enable the image operation feature please go to desired design >> click on the gear icon as shown below:

[https://blog.pitchprint.com/content/images/2023/04/image-1.png]

Scroll down to Uploaded Image Operations and Select the desired feature from the drop down:

[https://blog.pitchprint.com/content/images/2023/04/image-2.png]

Once you've done this please save your selection to apply the change to your design.

Wordpress Plugin Update - We tested and released the latest update for Wordpress 6.2 as well as the latest version of Woocommerce 7.5.1 .
The update will allow you to update your Wordpress OR Woocommerce platforms without having to worry about compatibility issues with
PitchPrint.

New Backgrounds and Pictures -  We added the following categories to the backgrounds Abstract Images, Background Images and Texture. We
added some Picture categories as well namely Cute Beach, Nautical, Doodles

[https://blog.pitchprint.com/content/images/2023/04/image-3.png][https://blog.pitchprint.com/content/images/2023/04/image-4.png][https://blog.pitchprint.com/content/images/2023/04/image-5.png][https://blog.pitchprint.com/content/images/2023/04/image-6.png][https://blog.pitchprint.com/content/images/2023/04/image-7.png][https://blog.pitchprint.com/content/images/2023/04/image-8.png]

These are just a few of the new resources we added, please refer to the list below for a list of all the resources we've added:

[https://blog.pitchprint.com/content/images/2023/04/image-9.png]

Well that's it for this week folks, have a lovely PassOver weekend with your family 🙂from the PitchPrint team!😊

--------------------

**ID**: 63ec9771c854d028e3b8efd7

## Release WK07-23

Hi all👋,

We're back and hope that you're having an awesome new year thus far. We appreciate your support over the past year and we look forward to a
much more exciting year ahead.

As always it's an absolute pleasure for us to keep you up to date with what our team has been working on to make your experience on
PitchPrint the best possible.

What's new🚀,

Order completed Webhook BigCommerce - Our webhooks allow Admins to automate processes like sending files (uploaded files OR customized
design files) to an endpoint provided once a certain action is completed. We currently offer the following webhooks:

File Upload - When a file is uploaded inside the editor.

Project Saved - When a customer submits their design inside an editor.

Order Processing - While the order is processing.

Order Completed - When an order is completed.

On the initial #BigCommerce release, we were only able to offer our customers File Upload and Project Saved webhook events. We are excited
to announce that we have now added the Order Completed webhook which should allow Admins to send order detail information, PDF/ PNG/ JPEG
files and so much more.

Item Dimension Display - Previously, it was a challenge for customers to gage the dimensions of an item added on the canvas more especially
if that item was being modified. We have now added this amazing new feature which displays the items dimensions while it is being resized on
the canvas.

[https://blog.pitchprint.com/content/images/2023/02/image-7.png]

To enable this amazing feature please go to https://admin.pitchprint.com/designs [https://admin.pitchprint.com/designs]

Hover over the design and click on the button shown below:

[https://blog.pitchprint.com/content/images/2023/02/image-4.png]

Scroll down to the option shown below, enable it and click save:

[https://blog.pitchprint.com/content/images/2023/02/image-5.png]



We also fixed the following bug fixes:

Resume Design and Save for later WIX - Some of our customers had an issue with resuming a work in progress design on WIX from their
respective account page in order to modify it. We have gone ahead and fixed this issue, our #Wix customers should now be able to relaunch
and edit an incomplete design without any hassles.

We also had an issue with the Save For Later functionality on WIX whereby once a customer clicks on the save for later button, the
respective saved designs would unfortunately not display under the orders tab. This issue is now a thing of the past  and our customer
should now be able to see all past orders as well as incomplete designs.

That's it for this week but before you go, would you like to earn a $10 voucher absolutely free that you can spend anywhere? Well we're
still running a campaign in conjunction with Capterra whereby a $10 voucher will given to the first 30 people to review us on the Capterra
platform.

Hit the link below to review our PitchPrint plugin and get this amazing offer!

https://reviews.capterra.com/new/180523/bc27794c-e803-45a9-838b-f05c5c796b36?lang=en
[https://reviews.capterra.com/new/180523/bc27794c-e803-45a9-838b-f05c5c796b36?lang=en]

We're back working on awesome features and further bug fixes. We look forward to sharing them with you all in the coming months 😊. Keep
Safe!

--------------------

**ID**: 63885cdfc854d028e3b8eec3

## Release WK44-22

Hi all👋,

It's always a pleasure for us to keep you updated with what our team has been working on to making your experience on PitchPrint even
better.

What's new🚀,

ProjectId in PitchPrint Admin - In an effort to continue with the Ease of Use initiative that our plugin is known for, we've added another
useful column to the projects tab which displays the ProjectId making it easier for admins to manoeuvre our platform and find ProjectId with
ease. Please refer to the image below:

[https://blog.pitchprint.com/content/images/2022/12/image.png]

Admins will now be able to easily identify a project and also have easy access to the unique Id associated with that respective project.

Automatically Zoom Canvas - We've also added this great new feature which empowers the admins to be able to zoom the canvas automatically
with just a few tweaks in the layout section. This feature will aid customers with design templates specifically with small mask areas such
as pens, pencils, or any other design with a small canvas area so that the end user can focus on what is key when customizing a product, the
design area. Please refer to the instructions below on how to enable this feature:

Go to layouts [https://admin.pitchprint.com/layouts]. Add a new layout give the layout a title and then click submit.

[https://blog.pitchprint.com/content/images/2022/12/image-1.png]Click on the add new layout
button[https://blog.pitchprint.com/content/images/2022/12/image-2.png]Add your title and submit

Once you've created the new layout add the following code inside the script tag in your layout: window._zoomRegion = true; Please refer to
the image below for more information on how to do this:

[https://blog.pitchprint.com/content/images/2022/12/image-3.png]

To assign your layout to specific designs please follow these simple steps in the following document
https://docs.pitchprint.com/article/129-layouts-v10 [https://docs.pitchprint.com/article/129-layouts-v10].

Should you run into any issues while implementing the above new feature, please do not hesitate to reach out to us via
support@pitchprint.com.

That's it for this week but before you go, would you like to earn a $10 voucher absolutely free that you can spend anywhere? Well we're
running a campaign in conjunction with Capterra whereby a $10 voucher will given to the first 30 people to review us on the Capterra
platform.

Hit the link below to review our PitchPrint plugin and get this amazing offer! As always, your feedback is highly appreciated and valued 🙏

https://reviews.capterra.com/new/180523/bc27794c-e803-45a9-838b-f05c5c796b36?lang=en
[https://reviews.capterra.com/new/180523/bc27794c-e803-45a9-838b-f05c5c796b36?lang=en]

Have a lovely weekend from the PitchPrint team😊!

--------------------

**ID**: 63763907c854d028e3b8ed3b

## Release WK42-22

Hi All👋,

As always it's an absolute pleasure for us to keep you up to date with what our team has been working on to make your experience on
PitchPrint the best there is.

What's new🚀,

Tons of 3D models - We are still in the process of updating our FREE 3D model studio and we are pleased to inform our PitchPrint Community
that we've recently added numerous models in all our product categories for our Premium users to make use of at no additional cost.        
                                                                                 

Here are some of the categories we currently offer:

Stationary, Beverage, Apparel, Photo Frames, Furniture, Signs, Kitchen Utensils, Packaging, Signs, Banners, Flags, Decor, Canvas, Gazebos &
Promotional Items.

Please have a look at some of our amazing new 3D models below:

[https://blog.pitchprint.com/content/images/2022/11/Screenshot-2022-11-17-155134.png][https://blog.pitchprint.com/content/images/2022/11/Screenshot-2022-11-17-155150.png][https://blog.pitchprint.com/content/images/2022/11/Screenshot-2022-11-17-155207.png][https://blog.pitchprint.com/content/images/2022/11/Screenshot-2022-11-18-101949.png][https://blog.pitchprint.com/content/images/2022/11/Screenshot-2022-11-18-102013.png][https://blog.pitchprint.com/content/images/2022/11/Screenshot-2022-11-18-102032.png]

Wordpress cart image update - A few weeks ago we made an update to Wordpress that would allow an admin to hide the preview in the cart if
Retain Page Images was enabled on PitchPrint Admin please refer to the image below for reference:

[https://blog.pitchprint.com/content/images/2022/11/image-6.png]This setting will keep product page images and not use the customers design.

This update unfortunately was not updated accordingly by the carting platform across all our Wordpress users. In some instances where an
admin enabled this feature, the image would update and replace the Product Page image with the user design and subsequently the cart image
as well instead of hiding the preview. Upon further investigation, we noted that the store theme for some of our customers also played a
part in the update not being deployed successfully across all Wordpress users. We recently made another update which will address this issue
for all our WordPress users irrespective of their store theme.

This issue has been fixed and if an admin enables this feature it will now be applied correctly and the product image will not update but
will be saved/archived accordingly.

That's it for this week but before you go, would you like to earn a $10 voucher absolutely free that you can spend anywhere? Well we're
running a campaign in conjunction with Capterra whereby a $10 voucher will given to the first 30 people to review us on the Capterra
platform.

Hit the link below to review our PitchPrint plugin and get this amazing offer! As always, your feedback is highly appreciated and valued 🙏

https://reviews.capterra.com/new/180523/bc27794c-e803-45a9-838b-f05c5c796b36?lang=en
[https://reviews.capterra.com/new/180523/bc27794c-e803-45a9-838b-f05c5c796b36?lang=en]

Have a wonderful weekend from the PitchPrint Team😊!

--------------------

**ID**: 635146f2c854d028e3b8ec21

## Release WK40-22

Hi all👋,

It's always our absolute pleasure to let you know what our team has been working on to make your experience on PitchPrint the best there is!

What's new🚀,

Superscript and Subscript - We've added this amazing feature that allows you to convert a text or number element into a superscript or a
subscript.

Please have a look at the screenshots below for reference:

[https://blog.pitchprint.com/content/images/2022/11/Screenshot-2022-11-01-145204.png]

Simply highlight the item that you would like to use as a superscript or subscript as shown below:

[https://blog.pitchprint.com/content/images/2022/11/image-2.png]

Once the item is highlighted click on the superscript or subscript buttons to apply the change as shown below:

[https://blog.pitchprint.com/content/images/2022/11/image-3.png]When superscript is
applied.[https://blog.pitchprint.com/content/images/2022/11/image-4.png]When subscript is applied.

> Please be advised that this action cannot be reversed once the change has been applied. If you would like to undo this effect, then you
> need to remove the item altogether where the change was applied.

Trim as Bleed - This great feature that was only available on one of our earlier versions, version 9. This feature grants the admin the
option of using a bleed line as a Trimbox on the PDF file. We have now rolled it out on our latest version 10 and you can activate this
feature via the use of tags. Now if a design contains a bleed line, the admin user simply needs to add a tag on the Page section to apply
this feature. Please have a look at the steps below to enable this feature:

Simply head over to the page section and add the trim_as_bleed tag as shown below:

[https://blog.pitchprint.com/content/images/2022/11/image-5.png]Then add the trim_as_bleed tag as shown in the screenshot.

We also fixed the following issues:

BigCommerce Orders API - The way the Orders API worked was that only 50 orders would be displayed at a time inside the orders section
[https://admin.pitchprint.com/orders]on the PitchPrint admin. If the order did not contain a PitchPrint customized design file,
unfortunately it wouldn't display at all. We have now added pagination so that Admins could see all their orders and scroll through them
with ease. We have also fixed the API so that all orders display irrespective whether a customised file is present or not.

Product Page PDF download on Wordpress - The product page PDF download on Wordpress was using our old PDF distiller engine. We have updated
the system and will now use the link of our new PDF distiller.

That's it for this week, be sure to check out our tutorial videos which covers the entire admin panel, installation guides, modules and
tags. You can access all our detailed tutorial videos using this quick link here [https://admin.pitchprint.com/videos].

Have a great week from the PitchPrint Team!😊



--------------------

**ID**: 633bd9c1c854d028e3b8eabe

## Release WK36-22

Hi All👋,

As always we're excited to keep you up to date with what our team has been working on to make your experience on PitchPrint even better.

What's new🚀,

ProjectId on BigCommerce Orders - We've added the PitchPrint projectId to all BigCommerce orders [https://admin.pitchprint.com/orders]on
PitchPrint admin. This awesome feature will assist the admin user in determining exactly which project belongs to which order. It also comes
in handy in circumstances where an order contains more than one project, the admin user will know exactly how to differentiate between the
different projects within an order.

Retain Cart Image on WordPress - Previously, the cart image on WordPress would automatically update to the customers design. We have now
added this amazing feature which allows the admin user the option of choosing not to update the cart image but instead keep the original
product page image. Simply delete and reinstall the plugin, clear your cache and the change will be applied accordingly to your site.

BigCommerce Cart Preview and Save for Later - And finally, we have added the customized image on BigCommerce. The admin users now have the
option of either choosing to utilise the customized design as the product page image or the keep the original product page image.
Additionally, we added the Save for Later functionality on BigCommerce which will allow the end users to Save their designs to their
respective accounts and be able to edit them at a later stage with ease.

We also fixed the following issues:

WIX cart preview - Some of our customers had an issue whereby their cart preview image did not update automatically to the customized design
but instead the original product page image would display. We have fixed this issue and the customized image will now be shown if this is
the option enabled by the admin user.

Design Re-edit on WIX, EKM and Shopify - Lastly, when re-editing a design on Wix, all the resources on that particular account would display
instead of only presenting the resources specifically assigned to that particular design. We have also fixed this issue and only resources
assigned to a design will be displayed instead of everything.

Well that's it for this week. Please don't forget to check out our tutorial videos [https://admin.pitchprint.com/videos] which covers the
entire admin panel, integrations on all our supported platforms, editor elements and all the hidden gems our plugin has to offer.

Have a good weekend from the PitchPrint team!😊

--------------------

**ID**: 632c2ddfc854d028e3b8e8d9

## Release WK34-22

Hi All👋,

As always it's an absolute pleasure for us to keep you up to date with what our team has been working on to make your experience on
PitchPrint the best there is.

This week we will be focusing on the different kinds of tags available on PitchPrint which will aid in unearthing some hidden gems and
features on our platform all for you and your customer's benefit!

What is a tag?

Tags are keywords that are recognized by our system and subsequently implements the feature associated with that tag, on your design. To add
a tag, simply provide the tag name and hit enter, then save your design settings. It's that simple.

Let's quickly go through a list of tags available on PitchPrint and compare the outcome of applying each tag thereafter.

Page Clip: A feature that allows you to add any shape to the canvas and set it as a clip to cut area around the shape in the final PDF.

To enable page-clip, click on the shape and go to the ITEM menu tab. Add page-clip to the tag section as shown below and enable make
reference.

[https://blog.pitchprint.com/content/images/2022/09/Screenshot-2022-09-22-154300.png]

The below image will be the output thereafter:

[https://blog.pitchprint.com/content/images/2022/09/image-8.png]

Always Top: Allows you to place an element at the topmost layer of the canvas.

To enable always-top add the always-top tag to the tag section as shown below:

[https://blog.pitchprint.com/content/images/2022/09/image-9.png]

This will result in all other elements moving behind the item selected and that selected element will remain at the top irrespective of
edits implemented on the design.

Please refer to the image below for the outcome:

[https://blog.pitchprint.com/content/images/2022/09/image-10.png]

Always Bottom: Allows you to place an element in the lowest layer of the canvas.

To enable always-bottom add the always-bottom tag to the tag section as shown below:

[https://blog.pitchprint.com/content/images/2022/09/image-11.png]

This will result in all other elements moving in front the item and selected item will always remain at the bottom.

Please refer to the image below for the outcome:

[https://blog.pitchprint.com/content/images/2022/09/image-12.png]


PDF no-print - The item will not be displayed on the printed file. To enable pdf: no-print add the following tag shown below:

[https://blog.pitchprint.com/content/images/2022/09/image-15.png]


PDF no-view - The item cannot be viewed when you open the PDF inside any PDF viewing application. To enable pdf: no-view add the following
tag shown below:

[https://blog.pitchprint.com/content/images/2022/09/image-16.png]


PDF lock - The item cannot be moved when editing the PDF. To enable pdf: lock add the following tag shown below:

[https://blog.pitchprint.com/content/images/2022/09/image-17.png]



Disable Text anchors: This tag will disable the text anchors when applied to a text field. To enable disable text anchors please add the
following tag shown below:

[https://blog.pitchprint.com/content/images/2022/09/image-18.png]The anchors circled in red will be disabled and the customer won't be able
to resize the text

Grommets: A reinforcement hole either horizontally or vertically used to insulate a rope or cable passed through it. A great way to protect
the design material from tearing or abrasion. To enable grommets please follow the steps below:

Go to the page section as shown below and enable the Grommet on the page tags:

[https://blog.pitchprint.com/content/images/2022/09/image-20.png]

Add the tag as indicated on the screenshot above.

Kindly note for Horizontal values, any value can be added as for Vertical only 1 OR 2 may be used. Please note that any changes made to the
top of the page will be automatically added to the bottom as well.

The following would be the final outcome of the page after adding a Grommet Tag:

[https://blog.pitchprint.com/content/images/2022/09/image-21.png]

No-mask: Allows you to stop a shape from being used as an image placeholder. Any shape added to the canvas will be used as an image
placeholder by default. If you would like to prevent customers from adding images to shapes on the canvas, you do so by enabling no-mask and
it will prevent the shape from being used as an image placeholder.

To enable no-mask please add the tag as shown below:

[https://blog.pitchprint.com/content/images/2022/09/image-22.png]

We also fixed the following bugs:

Cart Image on WIX - We had an issue with the customized cart image on WIX if and when a customer had multiple products with different
PitchPrint designs. The WIX cart image would not display the image associated with each product, it would instead display the last
customized design on all cart design images. We've gone ahead and fixed this issue and you will now see the correct cart image associated
with each product when purchasing more than one customized product.

We've concluded our tutorial videos and you can watch the 2min clips of each section of our plugin by going to
https://admin.pitchprint.com/videos [https://admin.pitchprint.com/videos]. The videos cover the entire admin panel, editor as well as the
installation guides to the frameworks we support.

That's it for this week guys, have a lovely weekend from the PitchPrint team😊!

--------------------

**ID**: 631b2fe7c854d028e3b8e5fd

## PDF Rendering

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

--------------------

**ID**: 62ff48c6c854d028e3b8e4d1

## Release WK29-22

Hi all👋,

As always it's a pleasure for us to let you know what the team has been working on to make your experience on PitchPrint an even better one!

What's new🚀,

More 3D Models - We've added quite a few new models to our 3D studio that you and your customers can use freely at no additional costs at
all. These are some of the categories that we cover:

Stationary, Beverage, Apparel, Photo Frames, Furniture, Signs, Kitchen Utensils, Packaging, Signs, Banners, Decor, Canvas & Promotional
Items.

Most of the categories are completely new and for some of them we've just updated the 3D models inside the category to make them even more
realistic.

Please have a quick look at some of the exciting models we've added below:

[https://blog.pitchprint.com/content/images/2022/08/Screenshot-2022-08-19-082136.png]Beverage
Containers[https://blog.pitchprint.com/content/images/2022/08/Screenshot-2022-08-19-082204.png]Signs, Promotional Items and
Stationary[https://blog.pitchprint.com/content/images/2022/08/Screenshot-2022-08-19-082223.png][https://blog.pitchprint.com/content/images/2022/08/Screenshot-2022-08-19-082257.png]Photo
Frames[https://blog.pitchprint.com/content/images/2022/08/Screenshot-2022-08-19-102845.png]Apparel

Here's a link to the 3D design tutorial video [https://admin.pitchprint.com/videos] under the Design category that will assist in guiding
you on how to access our free 3D models and assigning them to a design.

We're still busy updating the categories as well as the models so keep your eyes peeled for more realistic 3D models coming your way soon!

EKM orders with customize file - The order tab for EKM in PitchPrint admin initially showed all orders placed on the website. We have now
added this amazing new feature on the platform which assist in displaying orders where the customer used PitchPrint. This makes it so much
easier for admin users because they only get the orders with a PitchPrint design attached to them.

We also fixed the following bugs:

EKM order file download and preview issue - We had an issue where the correct file was not showing when the file was being downloaded from
the orders [https://admin.pitchprint.com/orders] section on the PitchPrint admin. And we also had an issue where the incorrect preview for
the PDF file was being shown in the orders section. We have now fixed both issues and the correct file will now be downloaded directly from
the orders [https://admin.pitchprint.com/orders] section, and the correct preview will be displayed correctly as well.

We've officially concluded all our tutorial videos [https://admin.pitchprint.com/videos] covering the entire admin panel from designs, to
resources to admin settings as well as installation guides and modules! We are excited and we know that this will be an awesome learning
experience not only for our new customers but for all admins to unearth some hidden gems within our plugin and enhance their experience
whilst also assisting them to be able to manoeuvre around the admin with ease.

That's it for this week, have a lovely weekend from the PitchPrint Team!😊

--------------------

**ID**: 62ebb59cc854d028e3b8e3e7

## Release WK27-22

Hi all👋,

As always it's an absolute pleasure for us to inform you what our team has been working on to make your experience on PitchPrint even
better.

What's new🚀,

EKM product preview - We've added this amazing feature for our EKM customers which allows their end users to preview their PitchPrint
customized image instead of the default product page image. We're still fairly new on the EKM platform so please keep your eyes peeled to
our blog for our bi-weekly releases in respective of additional functionalities that will be gradually added on EKM.

QR code chain elements with tags - We've also added this amazing feature which allows you to chain text elements on the canvas to the QR
code using tags. The text elements need to have the exact same tag as the QR code which you wish to add. To set the tag click on the element
>> Go to item

[https://blog.pitchprint.com/content/images/2022/08/image-2.png]Add the tag in the tag section

Please note that the tag needs to be the same across all the elements in order to link them to the QR.

[https://blog.pitchprint.com/content/images/2022/08/image-1.png]You can add any tag this is just an example 



Once the tag is added, the elements will then be linked to the QR and when these elements are updated on the design, the QR code will be
automatically updated as well.

We also fixed the following bugs:

Navigation thumbnail update - We had a minor issue whereby the design navigation thumbnails did not update when editing a design. The issue
would crop up when a customer submits a design and then re-edits it again to make any additional changes to it, the thumbnails would not
update to reflect the new changes made by the customer. We have fixed this issue and the thumbnails will now update accordingly. Please
refer to the image below for the navigation thumbnails:

[https://blog.pitchprint.com/content/images/2022/08/image.png]

Well that's it for this week but do check our new Tutorial Videos on the admin panel by opening the following tab
https://admin.pitchprint.com/videos [https://admin.pitchprint.com/videos]. We've added quite a few how to videos and we've been continuously
updating the video categories with new Modules and Installation guides as mentioned in our last release note. We have quite a few videos
left to add by end of this month and that will signal the end of our tutorial videos category. The videos cover the entire admin panel
extensively, installation guides for all our supported platforms as well as enabling and using modules in order to extend PitchPrint's
functionalities to achieve more features.

That's it for this week, enjoy the rest of your week from the PitchPrint team!😊

--------------------

**ID**: 62d94b66c854d028e3b8e30b

## Release WK25-22

Hi all👋,

It's always an absolute pleasure for us to keep you up to date with what our team has been working on to make your experience on PitchPrint
even better.

What's new🚀,

Single or Double Sided Module - We've added an amazing new #Module called Single/Double Sided to our expansive list of modules
[https://docs.pitchprint.com/category/22-using-modules]. This amazing feature will give your customers the ability to choose whether they
would like to have either a single design or double sided design inside the editor. Now if a customer chooses a single design option, the
editor will open up with only one page and if they choose double then the editor will open up with two pages respectively. This feature uses
a variation element selector which will assist us to determine the number of pages the customer opted for whilst designing. To view a demo
of this amazing new feature then quickly go to https://wp.demo.pitchprint.io/product/palette-business-card/
[https://wp.demo.pitchprint.io/product/palette-business-card/].

To enable this feature go to designs [https://admin.pitchprint.com/designs] >>> click on the gear icon: kindly refer to the image below:

[https://blog.pitchprint.com/content/images/2022/07/image-3.png]

Click on Modules

[https://blog.pitchprint.com/content/images/2022/07/image-4.png]Enable Single/ Double Sided it can be found at the
bottom[https://blog.pitchprint.com/content/images/2022/07/image-5.png]Please contact support for any assistance re the variation element
selector[https://blog.pitchprint.com/content/images/2022/07/image-6.png]Please note you need the above variations on your website in order
for this to work.

DesignId in URL on Wordpress - We have also added this awesome new feature which will assist the admin user in setting the designId of a
product directly in the URL. You can achieve this result by adding a filter in your functions.php file of your theme. Please see image below
for reference:

[https://blog.pitchprint.com/content/images/2022/07/image-7.png]

Just a friendly reminder, kindly reach out to us via support@pitchprint.com if you need any assistance.😊

Maximum File Upload Message - Another amazing feature that we have recently added is a pop up message which will display when your customer
uploads either a file that is too large or if it's an unsupported file type.

[https://blog.pitchprint.com/content/images/2022/07/image-8.png]



Well that's it for this week but do check our new Tutorial Videos on the admin panel by opening the following tab
https://admin.pitchprint.com/videos [https://admin.pitchprint.com/videos]. We've added quite a few how to videos and we will also be
uploading our Modules and Installation guide videos in the upcoming weeks to assist all of our valuable customers on how to maneuver around
our platform, content covered on the videos from settings to creating designs, editor elements etc. with practical examples, so please do
keep an eye out!

Enjoy the rest of your week from the PitchPrint Team😊!

--------------------

**ID**: 62c6cf96c854d028e3b8e1a7

## Release WK23-22

Hi all👋,

As always we're excited to keep you up to date with what our team has been working on to make your experience on PitchPrint even better.

What's new🚀,

Cart Preview and Save for Later on BigCommerce and WIX - The cart preview feature is now available on BigCommerce and WIX. Now our customers
on these frameworks will able to preview their customized design as a thumbnail in the cart. Additionally, we've added the amazing save for
later feature which will enable the end user to save their designs to their respective accounts and be able to edit them at a later stage.
To enable save for later please follow these simple steps below:

Go to settings [https://admin.pitchprint.com/settings] >>> scroll down to Enable Save for Later - use the toggle switch to enable the
feature and save your changes. Refresh your product page on your website to see the changes.

[https://blog.pitchprint.com/content/images/2022/07/Screenshot-2022-07-07-145920.png][https://blog.pitchprint.com/content/images/2022/07/image-1.png]Save
for later button on your website inside PitchPrint

> N.B If the saved orders are not showing on WIX please add the following code snippet window.PPCLIENT.customAccountDivSel to the custom
> Javascript section shown below this can be found in settings [https://admin.pitchprint.com/settings], paste the code and save.
> Alternatively, contact us on support@pitchprint.com and we will gladly assist.

[https://blog.pitchprint.com/content/images/2022/07/image-2.png]Paste the code snippet in the text field on the left and save your changes.

Products search on EKM - Previously, PitchPrint only allowed up to 20 products per tab to be displayed at a time and the admin user would
have to move between tabs to display more designs. This initial approach however, was proving not to be the best user experience especially
for some of our customers with multiple products. We've now added this amazing feature on the EKM platform which allows the admin user to
search for their products and display them with ease. A more efficient approach for our valued customers.

Multi shopId in Webhooks - We've also recently added another great feature which adds the shopId to the project data that gets dispatched
via webhooks. If you have webhooks enabled and you receive data from it, now the shopId will be one of the parameters inside the data you
will receive from PitchPrint.

Well that's it for this week but do check our new Tutorial Videos on the admin panel by opening the following tab
https://admin.pitchprint.com/videos [https://admin.pitchprint.com/videos]. We've added quite a few how to videos and we will also be
uploading our Modules video in the upcoming week to assist all of our valuable customers on how to manoeuvre around our platform, content
covered on the videos from settings to creating designs, editor elements etc. with practical examples, so please do keep an eye out!

Have a lovely week from the PitchPrint team!😊

--------------------

**ID**: 62b31a6bc854d028e3b8e0a7

## Release WK21-22

Hi all👋,

As always it's an absolute pleasure to inform you what our team has been working on to make your experience at PitchPrint even better.

What's new🚀,

Parallel file upload limit increase - In the past, our file upload limit per cycle was set to 12 and our customers could only upload the
aforementioned number of files at a time and having to wait for the next cycle in order to upload more files. The initial restriction was
put in place so as to avoid slowing down the system. However, we found a middle ground and increased the file upload limit to now 20 which
allows for much more uploads at a time but without overwhelming the system.

Archive orders on WIX - We have added this amazing feature on the #WIX platform which allows the admin to archive their orders using a
toggle switch. It will assist with decluttering the orders page for admins especially when handling sizeable volume orders and best of all
the orders can be accessed at anytime by simply using the toggle switch to view archived orders.

Add shopId to project details - We've also added the shopId to projects feature on #Prestashop platform for our customers who were unable to
identify easily which project belonged where especially for those with multiple stores. This great feature will now show the unique shopId
of the store inside the project page next to each project to ensure the store owner will know exactly which shop the project belongs to.

Wordpress Update - Lastly, we made an update to Wordpress where we've improved the display of metadata.

We also fixed the following bugs:

Template Color Module inside edited project - We had an issue whereby when a customer edited a project using the template color module, the
module would no longer be available inside the project once the project was opened. We have fixed this issue and the module will now be
available when the customer edits a project.

Well that's it for this week folks but please do check our new Tutorial Videos on the admin panel by opening the following tab
https://admin.pitchprint.com/videos [https://admin.pitchprint.com/videos]. We've added quite a few how to videos to assist all of our
valuable customers on how to manoeuvre around our platform, covering all the from settings to creating designs and easily watch at your
convenience. We'll add more videos in the weeks to come covering topics such as Modules etc. with practical examples, so please keep an eye
out!

Have a lovely and productive week from the PitchPrint Team!😊

--------------------

**ID**: 6298b20ac854d028e3b8df43

## Release WK19-22

Hi All👋,

We are absolutely ecstatic to share what our team has been working on to make your experience at PitchPrint the best possible.

What's new🚀,

Save for Later on Shopify - We've added this amazing save for later feature on the #Shopify Platform. All Shopify users can now make use of
this amazing feature by simply enabling it inside the settings [https://admin.pitchprint.com/settings] section.

[https://blog.pitchprint.com/content/images/2022/06/Screen-Shot-2022-06-02-at-15.05.14.png]Please use the toggle switch to enable this
feature and save your changes.[https://blog.pitchprint.com/content/images/2022/06/Screen-Shot-2022-06-02-at-15.06.35.png]Please clear your
cache to see the save for later button inside the editor on the front end.

> Please note that the div inside the customer account section will differ per theme so if you are unable to see the section shown below
> please contact support@pitchprint.com and we will gladly assist.

[https://blog.pitchprint.com/content/images/2022/06/Screen-Shot-2022-06-02-at-15.42.37.png]

Remove Background - We've also added this amazing new feature which will allow your customers to remove the background from an image. Please
be advised that this feature is in BETA Phase and we are in the process of training the AI but the feature will gradually improve over time
when more sample images are uploaded. To enable this amazing feature please follow the steps below:

> Go to https://admin.pitchprint.com/layouts [https://admin.pitchprint.com/layouts], reload layouts.

[https://blog.pitchprint.com/content/images/2022/06/image-1.png]Click on this button to reload layouts.

> Go to https://admin.pitchprint.com/styling [https://admin.pitchprint.com/styling], resave styling. You should then see the button shown
> below inside the editor:

[https://blog.pitchprint.com/content/images/2022/06/image-2.png]Click on this button to re-save
styling.[https://blog.pitchprint.com/content/images/2022/06/Screen-Shot-2022-06-09-at-09.56.43.png]

Please send us your valuable feedback so we can continue adding functionality and keep refining object detection and recognition to make
this feature even better!

Tooltips in Module Configuration - Lastly, we've also added tooltips to the module configuration help button inside design configuration.
This will assist Admins learn a bit more about all our Modules in detail. You can see the tool tip by hovering over the help icon. Please
have a look at the screenshot below for reference:

[https://blog.pitchprint.com/content/images/2022/06/Screen-Shot-2022-06-02-at-15.40.35.png]Please hover over each help button to see the
explanation for each module

We also fixed the following bugs:

Text tab could not be selected as default tab - By default, we provide the option for an Admin to select a default tab that will be shown
for each design when it loads in the designer.

We had an issue with the text tab when a user selected it as the default tab. It would not load as the default but instead the background
tab would be displayed. We have fixed this issue and the tab will now be displayed correctly as the default option. Please have a look at
the image below for reference:

[https://blog.pitchprint.com/content/images/2022/06/Screen-Shot-2022-06-02-at-15.50.03.png]This can be found inside design configuration

That's a wrap for this week but please do check our new Tutorial Videos on the admin panel by opening the following tab
https://admin.pitchprint.com/videos [https://admin.pitchprint.com/videos]. We've added quite a few how to videos to assist all of our
valuable customers on how to manoeuvre around our platform, covering all the from settings to creating designs and easily watch at your
convenience. We'll add more videos in the weeks to come covering topics such as Modules etc. with practical examples, so please keep an eye
out!

Have a lovely weekend from the PitchPrint Team!😊

--------------------

**ID**: 627ba5eac854d028e3b8ddff

## Release WK17-22

Hi all👋,

It's always an absolute pleasure for us to keep you up to date with what our team has been working on to make your experience at PitchPrint
the best there is.

What's new🚀,

Progress bar for image upload - Previously, when the end user uploaded their images, they wouldn't know the progress of the image being
uploaded on the product page particularly when a store uses a Mini Display Mode. We’ve now added this cool new feature which displays a
progress bar on every product that uses this specific (mini) display mode when an image is uploaded. This way the customer will always be
able to see the status of the images uploaded at any given moment.

Endpoint to convert a Project into a Design - In the past, if an admin user wanted to convert a project to a design, they would have to
recreate the project as a design from scratch which is counterintuitive to one of the things we are known for, being a Fast web2print
plugin. We've corrected this wrong with this amazing new feature which uses an endpoint that allows the admin to convert a project into a
design instantly. Please have a look at the endpoint below:

> https://api.pitchprint.com/runtime/project-to-design [https://api.pitchprint.com/runtime/project-to-design]

Kindly use your Secret key as an Authorization in the header, your secret key can be found here [https://admin.pitchprint.com/domains], and
subsequently parse the categoryId and the projectId as JSON data in the body.

> Please do not hesitate to reach out to support should you need any assistance.

Keyboard Shortcuts - We've added a few new cool keyboard shortcuts as well as existing keyboard shortcuts that most users are not aware of,
you can have a quick look at the list of keyboard shortcuts below:

Hold down space key - This will allow you to pan and move the canvas around with your mouse or trackpad.
Ctrl + C - Copy
Ctrl + V - Paste
Ctrl + A - Select All Items
Ctrl + X - Cut
Ctrl + W - Close
Keyboard shortcuts for Undo and Redo (This will differ per Operating system)
Left and Right arrows - Can be used to navigate between all pages of a design in the preview window.             Ctrl + Arrows -  To move in
increments of 5 or more steps.

We will be adding more keyboard shortcuts as we go along.

That's it for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we are
running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. so that our customers get the
best value for their subscription.

Have a lovely and productive week, from the PitchPrint Team!😊

--------------------

**ID**: 62615b5cc854d028e3b8dcdc

## Release WK15-22

Hi all 👋,

As always we're excited to keep you up to date with what our team has been working on to make your experience with PitchPrint even better.

What's new🚀

Design ID in design configuration - In the past, our customers had to use php code to fetch a unique design ID for each design within a
design category. We've now added this amazing new feature that allows admin users to view each unique design ID inside the design
configuration section. You can follow these easy steps below in order to view a design ID:

[https://blog.pitchprint.com/content/images/2022/04/Screenshot-2022-04-25-at-14.44.22.png]Click on design
configuration[https://blog.pitchprint.com/content/images/2022/04/Screenshot-2022-04-25-at-14.43.03.png]Go to the history tab >> the design
ID can be found inside the history tab as shown in the image

Recenter artwork button - When a customer would zoom in on a design to an extent whereby the canvas becomes clipped, in order to recenter
the canvas they would either have to refresh the design page or alternatively, try and zoom out manually which would still not aid in
putting the canvas to its default position. We have found a quick solution with this incredible feature which now allows not only the
customers but the admin users as well the ability to recenter the canvas with just a click of a button. Please see below image for
reference:

[https://blog.pitchprint.com/content/images/2022/04/image-2.png]The reload/recenter button will allow customers as well as admins to
recenter the canvas.

Now onto our weekly bug fixes:

Issue with Dawn Theme on Shopify - We had an issue whereby the project Id was not being attached to the order on the Shopify platform
specifically on the dawn theme. Usually our PitchPrint methodologies would be to look for the form and injects the code for the product
option into the form itself. In this case, there were two forms in this particular theme and the code was being inserted into the incorrect
form thus the project ID was not being included in the order details. We have gone ahead and fixed this issue by removing the second field
and the project ID now gets attached to the order correctly.

That's it for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we are
running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. so that our customers get the
best value for their subscription.

Have a productive and lovely week, from the PitchPrint team!😊

--------------------

**ID**: 624d9810c854d028e3b8dc25

## Release WK13-22

Hi All👋,

It's always an absolute pleasure for us to keep you up to date with what our team has been working on to make your experience at PitchPrint
an even better one.

What's new🚀,

Delete button in Data Form Module - In the past our customers had to manually delete data from inside the data form. We added this wonderful
feature which will now give you the ability to clear the field contents with the click of a button. To use the feature go to layouts
[https://admin.pitchprint.com/layouts] and Reload Latest >> also go to styling [https://admin.pitchprint.com/styling] and save changes. Once
you've completed these steps go to your product page. Clear cache and reload then open the Pitchprint editor the button should then be
visible.

[https://blog.pitchprint.com/content/images/2022/04/image.png]The red button will allow you to clear the form field

3D Models Matte or Glossy - In the past some of our customers had issues with the 3D models sometimes looking too dull and not realistic
enough. We've added this amazing new feature which will allow you to set a model to be either glossy or matte. Glossy would assist in making
models like cups, bowls, packaging jar, wine bottle, travel mug, ceramic vase, mentos etc appear to look a bit more realistic. Matte would
apply to apparel, furniture, and boxes in the packaging category etc.

We also provide you the option of using a combination of both on your models but this would be purely based on personal preference.

We implemented up to 5 sliders which allows you to select which portion of the model should be Matte and which portion should be Glossy. The
number of sliders you will see in the configuration will depend on the number of meshes that is applied to a model, each mesh will then have
it's own slider which you can use to apply the glossy/matte effect.

[https://blog.pitchprint.com/content/images/2022/04/image-1.png]When sliding to the left it will give a gloss finish, when sliding to the
right it will give a matte finish

Limit the number of Files that can be uploaded - We placed a limit on the number of files that can be uploaded in one go. The maximum number
of files the customer can upload all at once is now 12. We added this limitation because when the end user uploaded more than 12 files the
application and the browser would slow down tremendously and only resume back to normal after the upload completed.

This will now ensure that there are no more lags in the application as well as the browser during file uploads. If the customer wishes to
upload more they can wait until the upload has finished and then upload the next batch of files.

That's it for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we are
running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. so that our customers get the
best value for their subscription.

Enjoy the rest of your week from the PitchPrint team😊

--------------------

**ID**: 623af0eac854d028e3b8da5b

## Release WK11-22

Hi all👋,

As always it's an absolute pleasure to keep you up to date with what our team has been working on to make your experience at PitchPrint even
better.

What's new🚀,

Grommets - We added an amazing feature that will allow you to make use of Grommets, a reinforcement hole to protect or insulate a rope or
cable passed through it. This awesome new feature will allow you to add holes to the canvas either horizontally or vertically, a perfect way
of preventing the design material from tearing or abrasion. This will also provide a hassle-free installation for all your signage products
i.e. vinyl banners, teardrop flags, posters, canvas banners, plastic signs and even apparel too.

Grommets can be added to the canvas by adding a tag to the page with your dimensions. Your tag would be written as follows - Grommet: 2(The
Horizontal Value) x 2(The Vertical Value). Please have a look below for reference:

[https://blog.pitchprint.com/content/images/2022/03/image-18.png]Go to
Page[https://blog.pitchprint.com/content/images/2022/03/image-19.png]Scroll down and enter the tag as shown above

> Please note for Horizontal values any value can be added as for Vertical only 1 OR 2 may be used. Please note that any changes made to the
> top of the page will be automatically added to the bottom as well.

Please have a look at the changes below for reference:

[https://blog.pitchprint.com/content/images/2022/03/image-13.png]



Now onto our weekly bug fixes:

Show/Hide Tabs in Admin - We had an issue with Show/Hide tabs in the Admin (please refer to the image below for reference). When these tabs
were enabled in a single design configuration settings, the changes would be enabled on all designs across the domain. We have fixed this
issue and it will now show and apply only on the design where the setting is enabled.

[https://blog.pitchprint.com/content/images/2022/03/image-5.png]

Issue with Bulk Configuration and 3D models - We had an issue with bulk configuration and 3D models. When the admin would edit the bulk
configuration(please have a look below for reference) settings for a category. The 3D models assigned to each design would changed. We fixed
this issue and the bulk configuration will no longer affect the 3D models assigned to each design

[https://blog.pitchprint.com/content/images/2022/03/image-9.png]



That's it for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we are
running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. so that our customers get the
best value for their subscription.

An important note, we will no longer be publishing our blog release notes on a weekly basis due to the PitchPrint team gearing up for our
new version coming your way soon. We will aim to release new features and any bug fix updates on a bi-weekly basis so as to maintain the
standard of what our valuable customers have been accustomed to 😊.

Wishing you a lovely week from the PitchPrint Team!😊

--------------------

**ID**: 62284a01c854d028e3b8d8ef

## Release WK09-22

Hi all👋,

As always we're excited to keep you up to date with what our team has been working on to make your experience on PitchPrint even better.

What's new🚀,

Block Key Commands - This amazing new feature will allow admin users to block any keyboard commands they want using tags. You can block any
single key or any combination of keys to suit your needs. In the following example we will show you how to block ctrl+a OR cmd+a. Go to
settings [https://admin.pitchprint.com/settings] >> scroll down to global tags see below:

[https://blog.pitchprint.com/content/images/2022/03/image-4.png]add the tag as shown above, your tag will always be preceded by an
exclamation mark ! please save the changes you make.

Reject SVG's if no font exists in font list - We've implemented a new feature whereby this functionality will check if an SVG file contains
a font and if the font is not part of your font list on PitchPrint, it will reject the SVG and it will not be uploaded. Now if a font is
part of your font list, it will be uploaded successfully.

Now onto our weekly bug fixes:

Copy Text styles maintains old font styles - Previously, we had an issue with copy text styles where a customer would copy the styles from
one set of text to the next and change the font type thereafter on the new text but it would still maintain text styles e.g bold, italic,
underline etc from the source text. We've gone ahead and fixed this issue and you can now copy styles and change them on the new set of text
without the styles reverting to the old source text format.

Bulk Photo Print Quantity Issue - We had an issue with Bulk Photo Print module where the quantity did not update correctly on the product
page. This issue has also been fixed and the quantity should now update correctly based on the values selected inside the designer.

Bulk Photo Print and Re-edit issue - This bug fix is also in relations to the Bulk Photo Print module re customers re-edited a design within
the Bulk Photo Print module, the designer would display an incorrect total number of pages. In addition to the aforementioned issue, when
re-editing a design, the designer would also display the wrong quantity per page in comparison to what the customer initially submitted.
We've also fixed these issues and the designer will now not only display the correct total number of pages when a design is re-edited but
will also display the correct quantity per page as per the customer's initial submission.

That's a wrap for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we
are running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. so that our customers get the
best value for their subscription.

Please do keep an eye out on our blog for some more exciting weekly features and bug fixes. Have a lovely week from the PitchPrint Team 😊



--------------------

**ID**: 6221d6cfc854d028e3b8d7cc

## Release WK08-22

Hi all👋,

As always it's an absolute pleasure to keep you up to date with what our team has been working on to make your experience at PitchPrint even
better.

What's new🚀,

Single Image for Template Color Module - In the past, our admin users had to upload a template image for every colour they wanted to use
inside the Template Module feature. We've now implemented an amazing yet efficient feature that allows admin users to only upload one
image(the template image needs to be white- please refer below for reference) and in addition choose the colours that they would like to
have for the rest of the templates and it will then change the color of the template automatically whenever a new color is selected. Please
have a look below on how to enable this feature:

Enable Tint Original Template >> then click add new color to add the colors which you would like to have available in the template color
module >> select the color on the color picker or alternatively enter the hex value for the color and save.

[https://blog.pitchprint.com/content/images/2022/03/image-3.png]Upload template image in this section inside the
design[https://blog.pitchprint.com/content/images/2022/03/image-1.png]Enable Tint
Original[https://blog.pitchprint.com/content/images/2022/03/image-2.png]Choose the color on the color picker

Upload image via data form on Mobile - The upload indicator in data form on mobile would only show after the customer uploaded the file.
We've now added a new feature whereby the upload indicator field will always show whether it contains an image or not which will improve the
UX on mobile devices.

Now onto our weekly bug fixes:

Sort duplicate design in alphabetical order - Previously, when admin users would copy a design to a different domain or category, the copied
designs would not be sorted in an orderly fashion. We've fixed this issue and all duplicated designs will now appear in alphabetical order
for ease of access.

Pagination on WIX : Recently we had an issue with WIX customers who were not able to access all of their products with ease in the admin
especially those with a lot of product offerings on their e-commerce stores. We've added pagination at the bottom of the products page in
PitchPrint to allow customers to manoeuvre between the sections of products they have on their website. Please have a look below for
reference:

[https://blog.pitchprint.com/content/images/2022/03/Screenshot-2022-03-04-at-12.46.13.png]



That's a wrap for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we
are running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. so that our customers get the
best value for their subscription.

Be on the lookout for our weekly blog releases for some more exciting news about new features and bug fixes. Have a lovely weekend from the
PitchPrint Team 😊

--------------------

**ID**: 6214dde7c854d028e3b8d69b

## Release WK07-22

Hi all👋,

It's always such an absolute pleasure for us to keep you up to date with what our team has been working on to make your experience at
PitchPrint even better!

What's new🚀,

Disable group selection - We added a feature which will allow the admin to enable/disable item group selection per design. Prior to this new
release, customers were able to select multiple items all at once but that resulted in items losing individual functionalities such as
selection lock, delete lock or transform lock just to name a few.

Now with this amazing feature the admin has more control and will be able to curb the issue of customers selecting multiple items at once
and subsequently having an adverse effect on individual item functionalities.

You can enable this feature by following these easy steps >> Going to designs [https://admin.pitchprint.com/designs] >> Click on the gear
icon >> Enable the toggle as shown below and Click save:

[https://blog.pitchprint.com/content/images/2022/02/image-7.png]

Category Customisation on OpenCart - We added the customisation button on all products within a category on OpenCart. Previously, customers
had to visit the product page to be able to access the designer. This awesome feature will enhance user experience and making the whole
process more efficient by allowing your customers to access the designer directly from the category page.

Retain Uploaded image dimensions - Prior to the deployment of this feature, when customers uploaded images, the image would scale down
immensely in the editor. This issue raised concerns as to whether the image still maintained its resolution and size within the editor.
We've now put those concerns at bay with this amazing feature which if enabled, it will allow the editor to retain the size and resolution
of the uploaded image irrespective of the file uploaded.

To enable this amazing feature go to https://admin.pitchprint.com/settings [https://admin.pitchprint.com/settings] >> Scroll down to File
Uploads and enable the toggle switch below, please be sure to save any changes you make.

[https://blog.pitchprint.com/content/images/2022/02/image-10.png]

That's it for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we are
still running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. ensuring our customers get
the best value for their subscription.

Check our platform next week for some awesome new features and any bug fixes. Have an awesome week from the PitchPrint Team😊!

--------------------

**ID**: 620cb879c854d028e3b8d526

## Release WK06-22

Hi all👋,

As always we're excited to keep you up to date with what our team has been working on to make your experience on PitchPrint even better.

What's new🚀,

Category Customisation in Prestashop - In the past, the customer had to open each product individually to be able to use the editor which
was not the most efficient way of finalising a design/order for the end user. We've now added a button to this product section which will
allow the customer to access the editor directly from the product category page. Please have a look at the images below for reference:

To enable this feature please go to your Prestashop admin panel where you will be able to configure PitchPrint and click on the checkbox as
indicated below:

[https://blog.pitchprint.com/content/images/2022/02/Screenshot-2022-02-16-at-15.24.01.png][https://blog.pitchprint.com/content/images/2022/02/image-1.png]

Non-reactive canvas on Mobile - We've also added a new feature that will make the canvas non-reactive in mini mode on mobile display.
Previously, the screen used to be reactive and subsequently caused issues with customers zooming in or mistakenly selecting other elements
on the canvas that would affect the customer using the editor and customising their designs. The canvas will now remain static while the
customer uses the editor on mobile in mini mode display.

Now onto our weekly bug fixes:

Show draw on canvas at the top - We had an issue with draw on canvas and elements that were set to always-top. The issue was that the shape
drawn would not be displayed whilst in process yet the element on top would display throughout, so the user couldn't actually see the shape
that they were drawing until the drawing was completed. We've fixed this issue and the shape will now be displayed while the customer is
drawing and will subsequently be moved to the back after the drawing is completed.

That's it for this week but please do check our PitchPrint Community Forum [https://www.facebook.com/groups/267392805495926/] where we are
running a teaching series on our amazing product features, unearthing some of our product hidden gems etc. so that our customers get the
best value for their subscription.

Stay glued to our blog for some more exciting news about new features and bug fixes. Have a lovely week from the PitchPrint Team 😊

--------------------

**ID**: 6203ae24c854d028e3b8d424

## Release WK05-22

Hi all👋,

As always it's a pleasure for us to keep you up to date with what our team has been working on to make your experience at PitchPrint an even
better one.

What's new🚀,

Customize button on Product Category - In the past the end user had to open a product page to be able to use PitchPrint to customise your
products. We've now added this great feature on Wordpress that allows you to enable the customisation button to be displayed on the category
page without having to navigate to the product page. Please have a look at the images below for reference:

[https://blog.pitchprint.com/content/images/2022/02/Screenshot-2022-02-09-at-14.15.03.png]

To enable this feature please make sure that category customisation is enabled, please see below for reference:

[https://blog.pitchprint.com/content/images/2022/02/Screenshot-2022-02-09-at-11.43.58.png]

Now onto our weekly bug fixes:

Drag and drop issue with text art - We had an issue where text arts could not be dragged and dropped onto the canvas, you could only click
on a text art to add it to the canvas. We've fixed this issue and text arts can now be conveniently dragged and dropped as well as clicked
to be added to the canvas.

We're in the process of updating our 3D Studio Library to make our models even more realistic refining them into something you can almost
feel and touch. We've added quite a number of new models to offer more variety for you to choose from. Please go to
https://admin.pitchprint.com/three [https://admin.pitchprint.com/three] and click add new model to see our collection of 3D models. Here are
some of the models we recently added below:

[https://blog.pitchprint.com/content/images/2022/02/image--35-.png][https://blog.pitchprint.com/content/images/2022/02/image--36-.png]



Please be sure to visit our feature request [https://track.pitchprint.com/] platform to upvote your favourite features which you would like
to see on our platform or better yet request your own. Please note that features with more votes will be added to our platform quicker than
those with fewer votes.

That's it for this week, please tune in next week for some awesome new features and bug fixes. Enjoy the rest of your week from the
PitchPrint team!

--------------------

**ID**: 61fa3555c854d028e3b8d329

## Release WK04-22

Hi all👋,

It's always an absolute pleasure for us to inform you what our team has been working on to make your experience at PitchPrint an even better
one.

What's new 🚀,

CategoryId in Bulk Configuration - In the past our customers had to use the PHP code fetch-design-categories from our documentation in order
to get the CategoryId. We've now introduced another option of adding the CategoryId to the bulk configuration section in order to save you
the time and effort of running PHP code whenever you need to get the categoryId also adding more variety for your convenience. Please have a
quick look below:

[https://blog.pitchprint.com/content/images/2022/02/Screenshot-2022-02-02-at-09.51.04.png]

Minimum Font Size - We've also added a Minimum Font Size option in the design configuration settings. Now with this exciting new feature,
you can set the minimum font for a design and the font will not be able to go below this value. Kindly refer to the screenshot below:

[https://blog.pitchprint.com/content/images/2022/02/Screenshot-2022-02-02-at-10.14.09.png]

Now onto our weekly bug fixes:

Roll up banner designs - We had an issue with importing designs from the roll up banner category. When these designs were imported and
launched in the editor the background wouldn't display. We have gone ahead and fixed this issue and the design will now display correctly as
shown in the thumbnail.

Preview button in import designs section - We had a minor glitch with the preview button in the import designs section. We've fixed this
issue as well and you can now preview designs before importing them. Have a look at the below screenshot for reference:

[https://blog.pitchprint.com/content/images/2022/02/Screenshot-2022-02-02-at-10.13.07.png]



Do make use of our feature request platform on https://track.pitchprint.com/ [https://track.pitchprint.com/]. You can upvote features that
you would like to see or even better send your own feature request. The more votes a post receives the quicker it will be added to our
platform and announced on our weekly release notes.

That's it for this week guys please join us next week for some more exciting features and bug fixes. Enjoy the rest of your week!

--------------------

**ID**: 61f14f5ac854d028e3b8d242

## Release WK03-22

Hi all👋,

A warm welcome from our team to you and we would like to kick off our first post by thanking you for your continued valuable support and
hopefully 2022 will be great for all of us! 😊

We are absolutely thrilled to let you know what we've been working on since resume back to the office to make your experience at PitchPrint
an even better one.

What's new🚀,

Disable Zoom on Mobile - We added a toggle switch for you to enable and disable zoom on mobile, you can find this switch in settings
[https://admin.pitchprint.com/settings].

Product Image API - We added some code on Wordpress to check if there's a product image, if no product image is provided it will use the
PitchPrint design as the default product image. You can enable this feature in Wordpress admin when assigning a design to a product. Please
have a look below:

[https://blog.pitchprint.com/content/images/2022/01/Screenshot-2022-01-24-at-15.04.22-1.png]

Now moving into our weekly bug fixes:

Adjusting Opacity - We had an issue with adjusting opacity when a customer made the adjustment inside the designer, as a result the PDF
would render incorrect colors. We have now fixed this issue and you will receive the correct color in the PDF when opacity has been applied.

Draw on canvas - We also had a minor issue with draw on canvas when customers click to preview their drawings and subsequently close the
preview window, the issue would arise thereafter when a customer tries to exit the draw on canvas mode. We have fixed this issue as well and
draw on canvas mode is now automatically exited when you click on preview.

Customize button on iPhone - We had an issue where the customize button was not showing on iPhone in Shopify. We made a minor update on our
end the the customize button is now showing.

Please make use of our feature request platform on https://track.pitchprint.com/ [https://track.pitchprint.com/]. You can upvote features
that you would like to see or even better send your own feature request. The more votes a post receives the quicker it will be added to our
platform.

That's it for this week guys, please keep an eye out for our next weekly release note for some more amazing new features and bug fixes.

--------------------

**ID**: 61b887b2c854d028e3b8d101

## Release WK21-48

Hi all👋,

It's always a pleasure to keep you up to date on what our team has been working on to make your experience with PitchPrint better with every
passing day.

What's new🚀,

Back to Collection - We added the back to collection button from the Photo Print Module to the language file. Please have a look on the
screenshot below for reference:

[https://blog.pitchprint.com/content/images/2021/12/image-4.png]

Now onto our weekly bug fixes:

Quicksand Font Issue - The Quicksand font was not rendering properly when downloading a PDF, the text would have big spaces in between. We
have gone ahead and fixed this issue and the font is now rendering correctly.

Cyrillic Font Issue - We also had an issue where Cyrillic text would not render fonts correctly as well. Upon adding the text to the canvas,
it wouldn't use the selected font at first try but would instead use the default one "Arial". This issue is now fixed and the correct font
loads immediately when added to the canvas.

Clear Design button on Prestashop - The clear design button had a minor glitch on Prestashop. We have gone ahead and fixed this issue as
well.

That's it for our weekly bug fixes...

Happy Holidays 🎄🎅 🎉

It's been a wonderful year for us and much thanks to you all for your unwavering support, patience and trust not only in our product but
team as well. We are currently on our annual team recess holiday break as of 15th of December but worry not, we do have a skeletal support
in place for critical issues so you can still reach us via our regular support channels and we will gladly assist as always 😊

The PitchPrint Team wishes you all a merry Christmas & a wonderful 2022 ahead!

[https://blog.pitchprint.com/content/images/2021/12/Annual-shutdown-2021--1-.png]

--------------------

**ID**: 61af55ffc854d028e3b8d028

## Release WK21-47

Hi all👋,

It's always such an absolute pleasure for us to inform you about what our team has been working on to make your experience with PitchPrint
even better.

What's new 🚀

Added Fold Lines to PDF - We added the Vertical and Horizontal fold lines to the PDF file. This will aid in making sure that the printer
knows exactly where to cut the files.

3D Previews on WIX - The 3D feature is now finally available on WIX. When a customer submits their design, the 3D model will now appear in
the place of the product page image.

Now onto our weekly bug fixes:

Customisation form - Some of our customers had an issue with the customisation form not auto populating the canvas with the recently
uploaded images. We have now fixed this issue, when a customer uploads images into the customisation form it will override the previous
images on the canvas with the new ones. Have a look at the image below for reference:

[https://blog.pitchprint.com/content/images/2021/12/image.png]

Do have a look at our recently added designs for Black Friday, Cyber Monday, Hanukkah, Furniture, Utensils, Beverage Containers, Packaging,
Christmas Festive Season themed templates and so much more. You can check these new templates by going to designs
[https://admin.pitchprint.com/designs] >> Then click on the Import Designs button. You should see all the new categories available as shown
in the image below:

[https://blog.pitchprint.com/content/images/2021/12/image-3.png]

That's it for this week folks, tune in next week for some awesome new features and bug fixes. Have a fantastic week :).

--------------------

**ID**: 61a73f9bc854d028e3b8cf0d

## Release WK21-46

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

--------------------

**ID**: 619e0110c854d028e3b8cde3

## Release WK21-45

Hi all👋,

As always, it's an absolute pleasure for our team to keep you up to date about what we've been working on to make your experience at
PitchPrint an even better one.

What's new🚀,

Runtime API Clone Project - We have finally added the Runtime API Clone Project, developers and admin users can now use this API to
duplicate/clone projects. Do read up here [https://docs.pitchprint.com/article/126-clone-project] for more information about this amazing
API.

Now onto our weekly bug fixes:

Grey border in PNG and JPEG files - Our canvas has a grey border on the edges which aids in indicating to the user where the canvas ends.
The grey border is more pronounced when the canvas is blank. Previously, the border would appear on JPEG or PNG files of downloaded designs
or projects. We have now removed the border on the downloaded design and project files but it will still reflect on the canvas so as to
serve as a guide for users.

Foreground Image issue - Some of our customers experienced an issue whereby a foreground image would exceed the canvas size. This is now a
thing of the past and the foreground image fits perfectly on the canvas.

Canvas Lines in Smart Sizes - We also had a minor issue where the canvas lines did not change when updating each page of the Smart Sizes
module. The canvas lines would remain the same across all dimensions and pages irrespective of the modifications applied. We have gone ahead
and fixed this issue and admin users can now update the canvas lines uniquely per page.

[https://blog.pitchprint.com/content/images/2021/11/image-1.png]

Please feel free to reach out to us at support@pitchprint.com if you have have questions or need assistance with anything.

That's a wrap but before you dash, want to get a $25 voucher to spend as you wish?! Then hit the link below to get this amazing offer and be
part of the first 100 people to review our amazing plugin. Your valuable feedback always helps in making our product great!

https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498]

That's it for this week folks, be on the lookout for our upcoming weekly release next week where we will be announcing some more bug fixes
and exciting new features!. Enjoy the rest of your week :)

--------------------

**ID**: 6195f470c854d028e3b8ccbf

## Release WK21-44

Hi all👋,

It's always a pleasure to keep you up to date on what our team has been working on to make your experience with PitchPrint the best there
is.

What's new🚀,

Inline Display on Wix - We added inline display mode for Wix customers in addition to the full window display mode. We are working
diligently on adding the option of a mini display, this option will be available soon!

Order Completed Webhook on Wix - We added the order completed webhook on Wix. Previously, only two status options were showing, it was
either unpaid or paid unlike other frameworks that also have order completed, processing, on hold, cancelled failed, refunded etc. As per
our workflow, we normally use the order completed status of an order to fulfil a webhook but since this information isn't available on the
platform, we have opted for the order paid status as a trigger to fulfil the order completed webhook.

We also fixed the following:

Observables Module - We fixed an issue with the observables module, in the past our users would still have to select from the variants even
when sometimes there was only one variant available. We fixed this issue where the module will now detect if there's one variant available
and it will use this to choose a design and open the editor with that design.

> A few of our customers have experienced some issues with incorrect colors appearing in the PDF. PitchPrint uses CMYK values for the PDF
> File and RGB values for onscreen display and each color has an RGB and CMYK value section please refer  to the image below, an incorrect
> CMYK value was provided or the field was left empty leading the PDF to be rendered using default color white. When creating a color please
> ensure that the color contains the correct RGB and CMYK value to avoid this issue.

[https://blog.pitchprint.com/content/images/2021/11/image.png]

You can read more about colors here [https://docs.pitchprint.com/article/64-all-about-colors]. Please feel free to reach out to us at
support@pitchprint.com if you have have questions or need assistance with anything.

That's it for this week but before you dash, want to get a $25 voucher to spend as you wish?! Then hit the link below to get this amazing
offer and be part of the first 100 people to review our amazing plugin. Your valuable feedback always helps in making our product great!

https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498]

See you next week for some more exciting feature updates and bug fixes. Have an awesome week!

--------------------

**ID**: 618ce726c854d028e3b8cb10

## Release WK21-43

Hi all👋,

As always it makes us happy to inform you what our team has been working on to make your experience at PitchPrint an even better one.

What's new🚀,

Unique Upload File Names - Some of our customers on Wordpress had issues with uploading files via the upload button on the product page.
When a customer uploaded files and a similar file name already existed on the server, the new files that share the same name would then
replace the older ones on the server as with most softwares. We have now created the flexibility to be able to upload all files irrespective
of the name and each file will now receive a unique name as a distinguisher.

Here are some bug fixes for the week:

Customisation Required on Wix - We worked on the customisation issue on Wix and made some adjustments which preempts and encourages your
customers to use the editor and be able to customise their products to their heart's desires, complete a design and click submit before they
can add the product to the cart. This issue is now a thing of the past.

Wix Products in Admin - We had a number of our Wix customers experiencing issues with loading their products
[https://admin.pitchprint.com/products] on the admin. This issue is triggered when a customer uninstalls and reinstalls PitchPrint again
whilst Wix token generation workflow frequently refreshes token rendering the previous token no longer valid hence the product links didn't
work properly and not able to fetch the Website products. This issue has now been resolved.

Customise button not showing on Wix - We had a few of our Wix customers experiencing an issue with the customise button not showing on the
product even though a design has been assigned to the product. This was due to Wix not allowing trial users to load 3rd party scripts and
subsequently stopped PitchPrint from running. Another contributing factor to the aforementioned issue was due to our customers having a Wix
license but the purchased domain no being connected to the site hence PitchPrint was not showing.

> Please note all Wix customers ensure that you've subscribed to a paid Wix plan and that you've connected your paid domain to your website.

Please do not hesitate to contact us at support@pitchprint.com if you are experiencing any issue with our editor or just need some guidance
on manoeuvring around our platform.

As always, your reviews of our product matter and we are even offering a $25 voucher to spend as you wish as a token of our appreciation for
the time taken to write your valuable feedback.  If you have a moment to spare, use the link below:
https://www.capterra.co.za/software/180523/pitchprint#reviews [https://www.capterra.co.za/software/180523/pitchprint#reviews]

That's it for this week, we'll be back next week with some exciting new features and bug fixes. Enjoy the rest of your week!

--------------------

**ID**: 618282fdc854d028e3b8c9dd

## Release WK21-42

Hi all👋,

It's good to be back! We've been busy with so much and we can't wait to share it with you.

What's new🚀,

API for Product Images - In the past our WooCommerce customers had to manually upload a product page image for each product. We looked into
this problem and made an update to our client.js file to be able to detect if a product page image is present or not, and if no image is
available, then the PitchPrint design will be added as the default product image.

We were prioritising more bug fixes this week. Here is a list of our fixes:

Image Search Panel - Some of our clients experienced an issue with the search panel inside images. When a customer utilised the search bar
and then cleared the search text, the image category would remain the same and wouldn't give the customer the ability to switch to a
different category thereafter. We have fixed this issue and customers can now clear the search bar and manoeuvre between categories without
experiencing any glitches.

Rotated Text Issue - Our customers experienced an issue of a text moving off canvas when editing a rotated text. We have fixed this issue
and the text will now remain fixed in one place irrespective whether there are any edits made to the text or not.

Layout Caching issue - When an admin made changes to the layout, the changes wouldn't rollout to the front end and still displayed the
previous layout due to cache. We've fixed this issue by adding a random number to the URL of each layout and should now load the update
instantly.

That's it for this week folks but before you go, we are still keen on receiving your valuable feedback and just to sweeten the deal we are
also offering $25 coupon to spend as you wish. Please review our product using the link below:

https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498]

Your feedback always helps in refining our product 🙂

We'll be back next week with some awesome features and bug fixes. Have a fantastic week!

--------------------

**ID**: 6177e32dc854d028e3b8c8aa

## Release WK21-41

Hi All👋,

As always we're excited to keep you up to date with what our team has been working on to make your experience on PitchPrint even better.

Well this week we zoomed in on those existing pain points to try and troubleshoot those bugs as much as possible.

Here are some of the bugs we have fixed thus far:

Image Search Issue - When an image was searched for by name and there was a typing error on the search box, the search results would not
yield the image you were looking for even if you corrected the typo thereafter on the search box. The entire word had to be removed and
retyped for the image search function to work properly. We have now fixed this cumbersome issue and if any errors are made you can now
simply remove those typos and adjust the text correctly rather than having to remove it altogether and retyping it all over again.

Clone Project Runtime API - Whenever our customers tried to clone projects via an API they would run into an error message. We have
addressed this issue and you can now clone projects using the API without any hassles.

Safari Scroll Issue - We also had an issue where admin users couldn't scroll all the way to the bottom of their designs/projects when using
Safari. This particular browser issue is now a thing of the past and you should be able to scroll through all your designs and projects.
Please note although you can use any browser for PitchPrint admin we Highly recommend Google Chrome. Please have a quick look at our
compatibility document for reference: https://docs.pitchprint.com/article/110-browser-compatibility
[https://docs.pitchprint.com/article/110-browser-compatibility]

That's it for this week but before you run along, want to get a $25 voucher to spend as you wish?! Then hit the link below to get this
amazing offer and be part of the first 100 people to review our amazing plugin.

https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498]

Your feedback is always highly appreciated and valued.🙂

Continue being glued to our blog for some more exciting news about new features and bug fixes. Have a lovely week!

--------------------

**ID**: 616e986bc854d028e3b8c6f0

## Release WK21-40

Hi all👋,

It's always a pleasure to keep you up to date on what our team has been working on to make your experience with PitchPrint the best there
is.

What's New 🚀,

Sticky Items - In many cases, our admin users struggled to specify on which layer an element should fall on. Previously, when an element had
to be at the on top the only thing that could be used was a foreground image. When an item had to be at the bottom, then the element needed
to be set as a background. The aforementioned options of deciding whether to add a foreground or a background were not necessarily the best
use of our customer's time yet we pride ourselves of having a faster and efficient online editor.

We have now resolved this pain point by adding this amazing feature to make it easier for our admin users to specify if an element had to
either be "always be at the bottom" or "always on top". This feature would assist tremendously if an dmin wanted an item to always be at the
top no matter what the customer added to the canvas. Interchangeably, the admin can specify if an item should always be at the bottom no
matter what the customer adds to the canvas.

To enable this amazing feature, simply follow these easy steps ----> Designs [https://admin.pitchprint.com/designs] -> Open the design and
go to where the change needs to be implemented -> add an element to the canvas and you are good to go!

There's also an option to always have an element be at the top by default, simply  click ---> ITEM -> add always-top as a Tag as shown on
the screenshot below:

[https://blog.pitchprint.com/content/images/2021/10/Screen-Shot-2021-10-20-at-10.33.12.png]always-top

Now to set an element to always sit at the bottom by default, simply click-—> ITEM -> add always-bottom as a Tag as shown on the screenshot
below:

[https://blog.pitchprint.com/content/images/2021/10/Screen-Shot-2021-10-20-at-10.35.30.png]always-bottom

Now onto our weekly dose of bug fixes:

Remix Module Image Zoom - We had an issue where images would zoom in really far when swapped using Remix module. This issue is now a thing
of the past.

Move Design button - We've also fixed the move design button in PitchPrint admin so you can now move a design to a different category with
ease.

Text Zooms out far when KEEP TEXT WIDTH is enabled - We had an issue when Keep Text Width was enabled. Please refer to the image below for a
better understanding:

[https://blog.pitchprint.com/content/images/2021/10/image-1.png]

Previously, when text was completely removed from a text field and a new text was then added thereafter, the new text would be bigger in
size and subsequently move off the canvas. The text would then only start shrinking back to its normal size if the new text contained 10
letters or more. We have now fixed this issue and the text size will now remain the same irrespective whether a new text has been added or
removed.

On a lighter note, are you interested in $25 voucher to spend as you wish?! Then hit the link below to get this amazing offer and be part of
the first 100 people to review our amazing plugin. Your valuable feedback is always noted and appreciated :-)

https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498]

That's it for now, we'll see you next week with some more exciting feature updates and bug fixes. Have an awesome week!

--------------------

**ID**: 615c059cc854d028e3b8c59a

## Release WK21-39

Hi All👋,

We're always happy to inform you what we've been working on to make your experience with PitchPrint even better.

What's new🚀,

Custom Mask over the entire Canvas  - We added a feature that allows you to add any shape to the canvas and set it as a clip to cut area
around the shape in the final PDF. In the past, our customers struggled with having the canvas in different shapes to accommodate their
specific needs, our canvas could only be a rectangle or a square but this amazing feature is bringing all sorts of flexibility around our
canvas by allowing the admin to add any desired shape to the canvas and anything inside that particular cutout/ shape will be printed
according to the desired specifications and everything else outside of it will be automatically cut off.

You can enable this great feature with these easy steps —> please go to designs [https://admin.pitchprint.com/designs], open your design and
then add the desired shape to the canvas. Now once you have added the desired shape then —> Go to Item, Add page-clip inside Tags, also
enable Make Reference as shown on the screenshot below:

[https://blog.pitchprint.com/content/images/2021/10/Screen-Shot-2021-10-07-at-09.18.51.png]

You should see the design cut everything around the shape and only show what's inside in the preview. Please save the design after making
these changes.

PDF Layers - This feature allows you to specify on which PDF layer an element would sit in the final PDF based on what you specify in the
design configuration. You can enable this in designs [https://admin.pitchprint.com/designs], open your design, click on the element, go to
Item, then add the tags shown below to specify which pdf layer the element should be placed on:

[https://blog.pitchprint.com/content/images/2021/10/Screen-Shot-2021-10-07-at-07.59.41.png]

You can add the following Tags to your design:

> pdf:layer, pdf:CUT, pdf:no-print, pdf:no-view, pdf: lock, pdf:overprint.

You also have the option to specify many instructions at once as indicated below:

> pdf:layer|CUT|no-print

Anything that starts with pdf is an instruction that needs to be carried out on the final PDF file.

We also fixed the following:

Border Line Issue - Some of our clients reported that that they had an issue with the border lines in designs after they switched to v10,
the border lines moved closer to the edge when downloading the PDF. We have now resolved this issue and all designs that contain borders
should now be fixed.

That's a wrap for this week but before you dash, want to get a $25 voucher to spend as you wish?! Then hit the link below to get this
amazing offer and be part of the first 100 people to review our amazing plugin. Your valuable feedback always helps in making our product
great :)

https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498].

Be on the lookout for our upcoming weekly release next week where we will be announcing some more bug fixes and exciting new features!

--------------------

**ID**: 61484fccc854d028e3b8c30b

## Smart Sizes

Hi guys👋

We have an exciting new feature we've been working on that we can't wait to share with you.

It's called Smart Sizes. Basically it's a feature that allows a designer to create multiple variations of a single design by varying the
canvas size and elements' properties to come up with entirely different looking layouts.

So, imagine you have a card product in three sizes: Landscape, Portrait and Square. In the past you would have to create these as three
separate designs and find ways to wire them to a single product.

Well, using this feature, you start by creating the first size, placing every element nicely to your taste.

[https://blog.pitchprint.com/content/images/2021/09/Screenshot-2021-09-29-141547.png]Size 1 - 8.6cm by 5.4cm

Next, you simply enable the Smart Sizes on that page and click the plus sign to add a new size:

[https://blog.pitchprint.com/content/images/2021/09/image-2.png]

By design, the next size is a swap of the Width and Height but you can always adjust the values in the page configuration as you would
resize a page.

[https://blog.pitchprint.com/content/images/2021/09/Group-82-1.png]Size 2 - 5.4cm by 8.6cm

After adding a new size, it's necessary to reposition or resize the elements to fit well with the new size.

And you can add a third or forth size as you wish.


IN-APP SIZE SELECTION

The panel below will be shown on the App product page if Smart Canvas is enabled. With this, your customers can pick which design layout
 they love.

[https://blog.pitchprint.com/content/images/2021/09/Group-83.png]

When adding new elements to the canvas they need to be positioned in both instances, for it to display correctly.

To enable Smart Canvas go to your designs [https://admin.pitchprint.com/designs] page in the admin, open the design where you would like to
enable Smart Canvas. You should see the below option on your left enable it and start by adding a new smart page by clicking the plus icon⊕

[https://blog.pitchprint.com/content/images/2021/09/Screen-Shot-2021-09-20-at-13.25.45.png]

And for it to appear in the Front App, you will need to update your Layout [https://admin.pitchprint.com/layouts] to the latest

[https://blog.pitchprint.com/content/images/2021/09/image-3.png]

Do give it a try and sure let us know if you require any assistance setting this feature up on your products.

Please review our plugin and receive a $25 voucher if you're one of the first 100 people to do so, you can review by using this link
https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498].

--------------------

![undefined](https://blog.pitchprint.com/content/images/2021/09/Smart-Resize.png)

**ID**: 61530c3ec854d028e3b8c40b

## Release WK21-38

Hi All👋,

It's good to be back! We've been busy with so much and we can't wait to share the exciting news with you.

What's new🚀

Bulk Upload -  We've added a bulk upload feature so you can now upload files like images, backgrounds etc. in bulk with just a click of a
button.

Checkout our recent bug fixes below:

Data Form Module Disappears - When a design was duplicated and re-edited, the data form module would disappear inside the duplicated and
modified version of the design. This is no longer the case.

Upload Button Disappears - On certain devices such as mobile phones and tablets etc. The upload button would disappear or shrink due to
smaller display screen. We have now fixed this issue as well.

We have also made some minor updates on the following:

Updated the Client JS Files for Prestashop - This aforementioned issue caused the add to cart button to show when customers updated the
quantity and even when they selected certain variations of the product. It also preempted customers to add to cart prematurely without
customising their orders first. We've fixed this minor glitch and the add to cart button will now only show after your valued customer has
submitted their customised design inside the editor.

Pitchprint Warning on Wordpress - We've also resolved the warning that displayed due to Woocommerce latest version 5 update.

That's it for this week but before you dash, want to get a $25 voucher to spend as you wish?! Then hit the link below to get this amazing
offer and be part of the first 100 people to review our amazing plugin. Your valuable feedback is always appreciated :-)

https://review.capterra.com/Feedback-PitchPrint-180523-3107660498 [https://review.capterra.com/Feedback-PitchPrint-180523-3107660498].

Stayed tuned and we'll be back next week with some more bug fixes and features.

--------------------

**ID**: 6127396fc854d028e3b8c270

## Release WK21-33

Hi all👋,

We hope that you are well and safe in these trying times, it's good to be back.

What's new🚀,

Double Click on Clickable mask - We've added a feature that allows your to double click on a mask with a photo inside, by double clicking on
the mask the customer will be able to move the mask.

Last week we fixed the following:

Issue with adding new colours - There was an issue when customers added new colours only a maximum of 3 colours would add, we've fixed this
issue customers can now add as many colours as they like.

Dimension issues with JPEG file download - There was an issue with designs that were created with the unit Pixels, the JPEG file had
different dimensions to the original design dimensions. We fixed this issue all files now have the correct dimensions as displayed in the
design.

Please note you can now submit your feature requests on our feature request platform https://track.pitchprint.com/
[https://track.pitchprint.com/]. Post and vote on posts that are already there, you can check out what the team is currently working on and
it gives you the ability to vote on features, features with the more votes receive priority and will be added quicker than ones with less
votes. So start adding your features and upvote features you would like us to add.

That's it for this week, we'll be in touch next week with some more bug fixes and exciting features. Please keep an eye out on our social
media pages(Facebook [https://www.facebook.com/pitchprint], Instagram [https://www.instagram.com/pitchprint/] and Twitter
[https://twitter.com/pitchprint/]) for more exciting content.

--------------------

**ID**: 60fa8d4b45bf0e66fcb3de22

## Spark - Print API

Hey Folks,

We have just released Spark, a Print API that allows you to generate print-ready PDF files from a single design template without going into
the designer.

This system is designed for creating print files on the fly, replacing texts and images per copy. For your customers that are too busy to
edit designs, you simply get their details and send to Spark.


USE CASES

 1. Estate or Property Agents who need to print their business cards, create flyers, house for sale/rent signages etc. They can simply post
    in the details and have Spark create the design files for you from a chosen template.
 2. Direct Marketing mails can be generated dynamically without having your customers edit designs. With a proper set up, you can have them
    pick their designs, upload the name records of their target audience and have Spark generate the PDF file for each target.
 3. Busy Party planners can send in the event details and have Spark generate that perfect looking print-ready file for them.
 4. Corporate Gift Items. Your customer has a company of over a thousand workers and you will like to personalize that awesome T-Shirt with
    each employee's name? No problem. Send the JSON record of each employee, pick a design template and Spark will generate a crisp, print
    ready file with each employee's record. You can even print their unique photos.
 5. And many more you can imagine.

Head over to our documentation page to find out how to implement this API: Spark - PitchPrint Wiki
[https://docs.pitchprint.com/article/138-spark]

Should you require any additional information or have a suggestion to make, don't hesitate to reach out to us: support@pitchprint.com or hit
us a DM on twitter [https://twitter.com/pitchprint]

--------------------

![undefined](https://blog.pitchprint.com/content/images/2021/07/Spark.png)

**ID**: 60e3026845bf0e66fcb3dd6c

## Release WK21-27

Hi all👋,

Hope you guys are keeping safe during these trying times.

Last week we fixed the following issues:

Prestashop 1.77 - We updated our plugin for Prestashop version 1.77 so any issues related to the plugin being outdated should now be solved.

Prestashop customisation_ID - Our plugin was not returning the JSON code for the customisation_ID correctly, we fixed the issue and it now
retrieves the customization_id properly.

What's new🚀

Minimum Font Size - This feature allows you to set a minimum font size per design. To achieve this, please use the following tags:
min-font-size:20,disable-text-anchors. Insert these tags into the tags section of your design configuration.

[https://blog.pitchprint.com/content/images/2021/07/image-4.png]

The first tag min-font-size:20 configures the app to not go lower than 20points font size and you can change this to any value you prefer.

However, this does not limit scaling which also affects the font size. So, we added another tag: disable-text-anchor to force users to only
use the font size control to adjust font size, which stops at the specified minimum.
So, you will need a combination of these two tags to achieve this.



We also have two new cart frameworks coming your way.

We frequently post GIFs and images about tips and tricks on how to maneuver around our platform on our social media channels. Be sure to
check them out and follow us on:

Twitter [https://twitter.com/pitchprint], Instagram [https://instagram.com/pitchprint] and Facebook [https://facebook.com/pitchprint]

That's it for this week! Please stay safe and healthy and we'll see you next week with more exciting news and bug fixes.

--------------------

**ID**: 60d196c945bf0e66fcb3dd13

## Release WK21-24

Hi all👋,

We trust you are keeping well and safe in these trying times. We have quite a few surprises that we'll share with you in the first week of
July please keep your eyes peeled on our Social media pages for more exciting news.

What's new🚀

We've started posting tips and tricks on Facebook [https://www.facebook.com/pitchprint], Twitter [https://twitter.com/pitchprint] and
Instagram [https://www.instagram.com/pitchprint/] these tips and tricks will help new and existing users navigate their way around our
platform.

We've added a button to remove an image from the data form module, kindly reload your layout [https://admin.pitchprint.com/layouts] and
re-save your styling [https://admin.pitchprint.com/styling] for this option to display.

We've fixed the following issues:

Anchor Stroke and Fill Color - Anchor stroke and fill color did not update on the product page and we fixed the issue.

Page Loader Title - Page loader title did not update on the product page and we fixed this issue.

Since our team will be focusing on the July release, we'll be back with more bug fixes and features after the first week of July.

Keep well and stay safe.

--------------------

**ID**: 60bdf3f445bf0e66fcb3dc97

## Release WK21-22

Hi all👋,

We trust that you are well and had a relaxing weekend and keeping safe during these trying times🙂.

Last week we worked on the following:

Context menu buttons on mobile - When cropping an image on mobile, the context menu buttons weren't present. We fixed this issue. Please
re-save your styling [https://admin.pitchprint.com/styling] for this to work.

Display thumbnail in form - The upload image indicator was not present inside the data form module or inside the form until after a customer
uploaded an image. We added a default image upload indicator.

Search by Date - We added the ability to search by date using a calendar in the universal search console on our new Admin Panel
[https://admin.pitchprint.com/dashboard].


NEW DESIGN SELECTIONS

Additionally we've updated our import design library, we now have 28 categories to choose from and plenty of new designs added to existing
and new categories please be sure to check that out.

[https://blog.pitchprint.com/content/images/2021/06/image-1.png][https://blog.pitchprint.com/content/images/2021/06/image-2.png]

We're still in the process of adding many new exciting designs to our store. Please be sure to follow us on twitter, Instagram
[https://instagram.com/pitchprint], Facebook [https://facebook.com/pitchprint] and our blog so you don't miss out.

That's it for this week, please tune in with us next week for more bug fixes and additional features. Have a fabulous week!

--------------------

**ID**: 60b602dc45bf0e66fcb3da5e

## Introducing our new Admin Portal

At PitchPrint, we see Design as a means of empowering you, our clients to make more sales. Because ultimately, your business goal is for
each of your customers to checkout and the quicker they are able to do that, the better for your business.

This has been our driving ethos towards creating a design tool that is not only appealing in looks, but is easy and quick to use for
everyone - Removing complexities.

Over the past few months, we have garnered our resources towards rebuilding our Admin Portal from the ground up with a special focus on
speed and usability. Unlike the past portal which was based off of a framework, we hand-crafted this to be very light, nimble and fast. Most
importantly, it gives us the ease of adding new features and capabilities over time without the bottleneck that comes with tweaking
framework-based systems.

[https://blog.pitchprint.com/content/images/2021/06/admin.pitchprint.com_dashboard.png]New PitchPrint Admin Portal

Aside the new splash of paint, here are the new features we've added to make things easier for you:

 * Universal Search - Wherever you are in the new admin, you can now simply point and search for your designs or projects using the new
   search system. Included also, is the ability to search using dates, title, keywords, customer details etc.
   And right from there, you can act on the result without leaving the page.

 * Activity History - Have you ever mistakenly deleted a project, design or picture and wish you hadn't? Well, we got you covered. Now with
   the Activity panel, you can undo actions you did days or months back as well as view all the other activities within your account.
   Any action with a Red undo badge can be reversed.

Screenshot-2021-06-01-171328 [https://blog.pitchprint.com/content/images/2021/06/Screenshot-2021-06-01-171328.png]

 * Strimlined Download Options - With our new PDF, PNG and JPEG systems, we have streamlined the download and discovery options. Going
   foward, all you need is a project or design ID to download your files. You can read more on that here
   [https://blog.pitchprint.com/under-the-hood-pdf-rendering/]
   And we have implemented the same across board on the new admin and v10 client app.
   In addition to that, we have added a new option that allows you to set what file type your customers can download within the app.
   You can set this in the settings page [https://admin.pitchprint.com/settings]
   Screenshot-2021-06-01-172943 [https://blog.pitchprint.com/content/images/2021/06/Screenshot-2021-06-01-172943.png]

 * Account Management - We have incorportated Stripe's Customer Portal [https://stripe.com/docs/billing/subscriptions/customer-portal] as
   our default account management page. From there, you can securely change your subscription, download invoices, update tax ID as well as
   manage your billing details in one place.

 * List View - For our esteeemed customers with multiple domains, we implemented the list view so it is easier to view and manage domains
   than the card view we had before. Also added are nifty features that allows you to easily copy API and Secret keys with the click of the
   mouse on the Copy Icon, one-click renaming of domains etc.

Under the hood, a lot of performance benefits comes with this new Admin and with this, we are working towards implementing a mobile version
with limited but commonly used functions like downloads, settings, design configurations etc.




NEW PRICING STRUCTURE

Our pricing structure is being updated to reflect a fair usage policy as against the blanket fixed price we currently have.

This new structure offers you a baseline of 750 projects on the premium plan and 500 projects on the basic plan every month while charging
$0.50 per additional projects once the threshold has been reached for that month. We have also capped the number of Admin users per domain
to 2 for the premium plan and 1 for the basic plan and will be charged a flat fee of $5 on a monthly basis per additional Admin user.

This new structure only takes effect from the 1st July 2021, and you don't need to take any action on your end. The excess charge will be
included in your current billing. And we have placed a visual indicator on your Dashboard [https://admin.pitchprint.com/dashboard]
displaying your projects for the month per time.

[https://blog.pitchprint.com/content/images/2021/06/image.png]




RELEASE NOTES

We have recently resumed our weekly release notes so you can always follow us to keep abreast of what's new and get notified of fixed
issues.

In addition to this, we have set up a platform to submit feature requests and up-vote features you think we should work on. Here is the
link: https://track.pitchprint.com [https://track.pitchprint.com/]


COOL TIPS:

> PitchPrint Tips: Scrolling the mouse wheel zooms in and out of the canvas in relation to where the the mouse is.
> And holding down the space bar allows you to pan and move the canvas around. It's the default behavior in most modern design apps like
> Illustrator, XD, Figma etc. pic.twitter.com/IrS6L6JWxw [https://t.co/IrS6L6JWxw]
> 
> — PitchPrint (@pitchprint) June 2, 2021 [https://twitter.com/pitchprint/status/1399971456432345089?ref_src=twsrc%5Etfw]

You should check out our new Design Observable module [https://docs.pitchprint.com/article/136-design-observables]. Basically it listens to
your product page elements and changes the design based on the variations or options your customer has selected on the product page.

We're back working on awesome features and further bug fixes. We look forward to sharing them with you all in the coming months 😊. Keep
Safe!

--------------------

![undefined](https://blog.pitchprint.com/content/images/2021/06/Web-1920---1--1--1.png)

**ID**: 60b4918145bf0e66fcb3d9ee

## Release #WEEK 21-21

Hi all👋

What's new🚀

We added a feature that allows customers to choose their image source directly when clicking on a mask. When you click on a mask instead of
taking you to your image gallery it will now open a panel so you can select your image source.

This will require you to reload your Layout [https://admin.pitchprint.com/layouts] to the latest as well as re-save your Styling
[https://admin.pitchprint.com/styling]

[https://blog.pitchprint.com/content/images/2021/05/Screen-Shot-2021-05-31-at-09.47.53.png]This feature can be found in
https://admin.pitchprint.com/settings
[https://admin.pitchprint.com/settings].[https://blog.pitchprint.com/content/images/2021/05/Screen-Shot-2021-05-31-at-09.51.00.png]

Last week we fixed the following issues:

Applied filter to images in the PDF - When a PDF was downloaded inside the application in the front end, the filters were not being applied
to affected images inside the design. We fixed it so that, the filters are now applied to images inside the design.

Pixabay CORS requests - A few days back, Pixabay updated their API removing certain headers which affected CORS requests, thus many
customers experienced issues with adding Pixabay images because the images could not be fetched from the source. We did fix this.

Thumbnail image selection in Admin - Thumbnail images selected in design configuration in admin did not replace the design thumbnails on the
product page. We fixed the issue so admins can now upload their own thumbnail image they want to display when design selector is enabled.

That's it for now, we'll be back next week with more exciting features and bug fixes.

--------------------

**ID**: 60aba93a45bf0e66fcb3d88a

## Release #WEEK 21-20

Hi everyone 👋

It's been a while since our last blog post, but boy do we have some exciting news in store for you. Starting this week, we will resume our
regular updates on bug fixes and new features on a weekly basis.

Last week we fixed the following:

Show a progress bar while loading Page-Sort panel - The Page-Sort panel would normally hang while sorting pages and customers would assume
that the feature was not working properly, we added a progress bar to show customers that it is busy loading.

Crop previews while foreground is present - The preview was not cutting the design at the bleed line when a foreground was present and this
created a false preview by including the bounds outside of the bleed lines.


WHAT'S NEW 🚀



Design Observables Module - We have developed this module to help with the automation of design selection on a product page. Basically, this
module observes the options on a product page.

For example if you have a variable product that has options "material" and "size", then you can have designs in  a category named..
Glossy_A4, Matte_A4, Glossy_A3, Matte_A3 etc. And this module will observe the material and size selectors to load the appropriate design
based on the customer-selected material and size.

[https://blog.pitchprint.com/content/images/2021/05/image-1.png]

Read more about this in our documentation page: https://docs.pitchprint.com/article/136-design-observables
[https://docs.pitchprint.com/article/136-design-observables]

Track your Activities - This is a new feature in our admin accessible from the top right icon lists that flings open a panel where you will
see all your recent actions within the PitchPrint admin. Actions in red can be undone.

So, should you mistakenly delete a design or project, you can always come here and undo that action at any later date.

[https://blog.pitchprint.com/content/images/2021/05/image.png]Activities Panel

Set your own Password - Admins can now create unique passwords for PitchPrint account users right in the Admins Page
[https://admin.pitchprint.com/accounts].

Create a drop down from a Text field - When using the Data Form module, you can now limit allowed values by pre-defining a comma-delimited
list of values in the Textfield's options.

[https://blog.pitchprint.com/content/images/2021/05/image-2.png]Text Configuration in Admin
Designer[https://blog.pitchprint.com/content/images/2021/05/image-3.png]How the option appears to your customers

Export Design List can now be found in bulk configuration.

[https://blog.pitchprint.com/content/images/2021/05/image-4.png]Export Design List option in Bulk Configuration panel

That's it for this week, we'll see you next week with some more excited updates and bug fixes.

--------------------

**ID**: 60598cc545bf0e66fcb3d77e

## Under the Hood: PDF rendering

One of the challenges we had with earlier versions of PitchPrint was DevOps, specifically the process of scaling and maintaining the
servers.

Web2Print unlike most other Saas products rely on a number of services, each dependent on the other. We have the main app itself which the
customers see, the Admin, the Image Engine, File Converters, PDF Distillers, Billing, Webhooks, Mail delivery and a host of other tiny
essentials like Websockets that ensures persistent connection between your webstore and the admin so you can see who is using the app at any
time.

Scaling these services has been challenging especially during spikes. That was what prompted us to migrate our systems to Serverless three
years ago, starting with Version 9.


WHAT IS SERVERLESS?

Serverless is a platform where you don't need to think about servers. In essence, you just bring your code and the providers like Amazon,
Azure or Google handles the scaling for you.

So, if you have only one traffic today, cool. And if tomorrow your traffic increases to a billion, no problem, no sweat; the platform will
handle it for you. It's the same platform that handles Amazon Prime day traffic which in 2020 handled 450 billion requests across several
services.

We moved everything, the App, the Admin etc. Serverless, leaving behind only the PDF Distiller, due to programming language issue. So, the
primary PDF Engine sat on a single server. And to maintain sanity, we kept increasing this server's capacity over time. The more we
increased it, the more processes used up the capacity.

As traffic increased during the last six months, it caused some bottlenecks for some of our customers and we decided it's time we move it
Serverless as well.


WHAT DOES THIS MEAN?

When you request for a PDF File using the new endpoint (https://pdf.pitchprint.com), a single isolated server instance is spun up to serve
your request and yours only. There is no contention for resources by other users because that server answers only to your request at that
time. It's like having your own private waiter or waitress with your own Chef even though you are in a public restaurant with other
customers, each having their own team.

We are gradually rolling it out and in a couple of weeks, we will reach 100% of version 10 downloads utilizing the new platform.

In addition to giving each download its own compute capacity, this platform also allows us to experiment and add new features much quicker.
For example, the URL scheme is more streamlined and easier to use:

https://pdf.pitchprint.com/projectID_or_designID

Going forward, the system intelligently detects whether you are rendering a design or project without having to signify that.

https://pdf.pitchprint.com/projectID_or_designID/1,2,4,5

The URL allows you to specify the pages you want to print at this instance.

https://pdf.pitchprint.com/projectID_or_designID/w

You can print designs with watermark by simply appending a W to the URL

--------------------

**ID**: 5fb74ddf45bf0e66fcb3d5ce

## Under the Hood: Photo Upload Pipeline

Over the years, PitchPrint has processed over 50million photos, amounting to over 12 terabytes of data generated and stored, that is an
average of 2000 photos being processed on our systems every hour.

[https://blog.pitchprint.com/content/images/2021/03/s3.console.aws.amazon.com_s3_buckets_pitchprint.io_region-eu-west-1-tab-metrics.png]Current
Bucket Size, 96% of which are Photos (this excludes version 8 storage nor backups)

When a user uploads a Photo on our application, the image file goes through a series of processes which generates a thumbnail for previewing
on the gallery panel. In addition, a low resolution version of the thumbnail is generated for use on the browser canvas and finally, the
original file is trimmed, optimised and stored for use in the final PDF for print.

This article will discuss the operations and introduce new innovations we have added to the pipeline to improve the overall Photo experience
for our users.


AUTOROTATE:

When you take a picture with your phone in portrait mode, that picture appears vertically as it was captured. Alternatively, when you rotate
the phone horizontally while still in the camera app, the photo is expanded appropriately, not rotated or skewed in a way that requires you
to tilt your head to view it. This natural behaviour of the camera app is powered by an intelligent programming which appends additional
information to the photograph, instructing any image viewing application on how the camera was positioned when the photo was taken.

This additional data is called Exif data. It is attached to every photo you take, and here's an example of what it looks like:

[https://blog.pitchprint.com/content/images/2021/03/image-3.png]This Exif data tells the software to rotate it 90° clockwise when displaying
this photo

Auto rotation is the process of reading the photo's Exif data and displaying the photo as intended.

[https://blog.pitchprint.com/content/images/2021/03/image-4.png]Image displayed without auto-rotation (left) and with auto-rotation (right)

A few months ago, our application didn't have this natural behaviour programmed into it. After uploading photo images, our PDF distiller did
not auto rotate these images even though the browsers did in the editor. This led to few cases of user photos looking skewed and unnatural
in the final PDF files.

In our upcoming pipeline of updates, our first update will enable our PDF distiller to auto rotate all images and update the Exif data
accordingly so photos look the same in the browser during editing and in the final PDF.

You can view your Photo's Exif data using Photoshop or online via the URL below: http://exif.regex.info/exif.cgi
[http://exif.regex.info/exif.cgi]


COLOR OPERATIONS:

Our user Photos come from multiple sources such as phones, cameras, photo editing software, scanners etc. Interestingly, these tools process
images differently, especially colours. In order to maintain a consistent print output, we have added a colour correction process whereby
you can choose to apply a particular ICC profile to all photos uploaded for a design.

Prior to this, our application simply utilised the original photo uploaded in the final PDF file, which results in a mix of CMYK vector
elements with sRGB images.

With this system, you can maintain a consistent colour profile across the board, CMYK or RGB and even target specific colour gamut for your
print output. We have categorised the standard ICC profiles under CMYK and RGB.

[https://blog.pitchprint.com/content/images/2021/03/image-5.png]New Colour Profile

With this new update, we have removed the option for Greyscale and added it as a profile. Retain Original Profile will simply attach the
original image's ICC to the newly generated image.

Caveats: PNGs do NOT support non-RGB profiles like CMYK [https://en.wikipedia.org/wiki/Portable_Network_Graphics]. As such, if you have
selected a non-RGB profile and your user uploads a PNG photo, either of the two scenarios play out: If the Photo has transparency, the
profile will be ignored and treated normally as a PNG file. If it does not have transparency, then the image can be converted into a JPEG
file with a 91% quality to optimise the size and subsequently apply the CMYK profile.


CUSTOM PROFILES:

Should you want to apply your own custom profile, ICM, ICC or colour correction file, you can send it to us and we will apply it to any
photo your customer uploads. With this, you can have all uploaded photos tint to a particular colour or expunge certain colours as your
process requires.


FILE FORMATS:

At the end of the process, we clone the processed image data and generate a thumbnail, which customers get to preview on the left panel, a
low resolution version for use in the browser and save the final copy in its original size for use when generating the PDF file.

You may ask, why do we need a low resolution, why not use the original file in browser for better display?

Well, the challenge is size. Our system utilises HTML Canvas for image manipulation and Canvas deals with raw image data, not a compressed
version. Let's zoom into this for a bit: Your jpeg file consists of millions of pixels all zipped together and compressed so as to be light
for a faster manipulation via the browser. When you work on the canvas, you have to unzip all those pixels and process them one after the
other.

In comparison, imagine having to deal with millions of unzipped files in your finder or folder, as opposed to the ease of handling one
single file (when they are all zipped together). So, the fewer the pixel count, the easier it is to manipulate for the computer or any
mobile device. This is why our app generates a low resolution format for use in the browser.

The journey is just getting started, you can read more here, about how we handle file uploads
[https://medium.com/@pitchprint/going-serverless-how-we-handled-file-upload-processing-notification-519f594f593]. or how you can capture
every photo your users upload using our Webhook process: https://docs.pitchprint.com/article/99-webhooks
[https://docs.pitchprint.com/article/99-webhooks]

--------------------

![undefined](https://blog.pitchprint.com/content/images/2021/03/SPRK_default_preset_name_custom---1.jpg)

**ID**: 5fa8d45845bf0e66fcb3d566

## Release #WEEK 44

 * Design Selector on Mobile - When a design is selected in Design Module, the panel now hides on a mobile design.

 * Convert Fonts to Shapes - We added a feature that allows you to convert all fonts into shape paths in the final PDF. This feature can be
   enabled per design or across a whole category using tags.
   The tag for this functionality is flattenFonts.
   Simply open the design configuration panel and type in flattenFonts and save. Subsequent projects created from this design will have all
   fonts flatten into shapes.Design Configuration Panel [https://blog.pitchprint.com/content/images/2020/11/admin.pitchprint.io_designs.png]

 * Use Pixabay Images in Designs - We had an issue whereby Pixabay expires an image URL and if that image is used in designs, the PDF
   doesn't render that image if the expiration period preceeds the PDF render.
   This has been fixed across both designs and projects by downloading the image copy unto our servers for rendering in the PDF later on.

 * Photo Module Data in PDF - Paper type and Quantity values selected by the customer in the Photo Module are now added as Bookmark titles
   to the PDF a page.
   PDF Bookmark [https://blog.pitchprint.com/content/images/2020/11/Screenshot-2020-11-09-075354.png]

--------------------

**ID**: 5f96cf3a45bf0e66fcb3d4ff

## Release #WEEK 43

 * Input Mask (beta) - We are adding input mask capability for Text items. In the current state, it only works with Data Form Module and the
   Customize Form. Basically, an input mask is used in formatting text inputs to a particular format.
   Think of asking users to provide their phone number in a particular format, an email, ZIP Code etc. You can find an example here:
   https://wp.demo.pitchprint.io/product/blue-business-card/ [http://wp.demo.pitchprint.io/product/blue-business-card/].
   The Phone Number input is masked to a particular format. wp.demo.pitchprint.io_product_blue-business-card_--2-
   [https://blog.pitchprint.com/content/images/2020/10/wp.demo.pitchprint.io_product_blue-business-card_--2-.png]

 * Instagram login fix - Our Instagram App was updated to fix a login issue.

 * DPI Calculations - We did improve the DPI calculations to cater for zoom

 * QR Codes - Version 10 now has the QR Code module

 * Lock Page Warning - We added a warning when admin locks a page. We usually recieve a lot of queries that users could not edit or add
   items to pages. This happens when the admin has locked the page.

 * Text Limit - Admin can now set text limit for any Text item

[https://blog.pitchprint.com/content/images/2020/10/image-1.png]Limiting Text Input

--------------------

**ID**: 5f4f54a045bf0e66fcb3d45f

## PitchPrint + BigCommerce

Hi Everyone 😊, our app has been released on the BigCommerce App Store and can be installed right away.

BigCommerce is a robust eCommerce platform designed for scale and performance. It powers some of the big names in Apparels, Manufacturing,
Automotive, Print and many other industries.

Installation is a breeze and we have written a brief to assist you in getting started:
https://docs.pitchprint.com/article/132-how-to-install-pitchprint-on-bigcommerce
[https://docs.pitchprint.com/article/132-how-to-install-pitchprint-on-bigcommerce]

--------------------------------------------------------------------------------------------------------------------------------------------


RELEASE NOTES

 1. Remix Module Fix - We have fixed some issues with the Remix module where it doesn't reload pictures after the first shuffle.
 2. Copy Pasting Grouped Items - A bug where grouped items when copied, have formating references to their parents have been fixed.
 3. Canvas Adjuster Module - CA Module can now capture preset values from the input field. This means you can now provide CA preset values
    in your Product Page only and PitchPrint will capture the width and heights from your Product Page.
 4. Solid Region Activation - We added a setting that lets you determine, if clicking on a transparent area of an image can select it or
    not.
    Screenshot-2020-09-15-141431 [https://blog.pitchprint.com/content/images/2020/09/Screenshot-2020-09-15-141431.png]
 5. Clone Project Previews - We did fix an issue where cloning the project only replicates the first preview image. Now all previews are
    cloned appropriately.

Thanks and stay safe guys!

--------------------

![undefined](https://blog.pitchprint.com/content/images/2020/09/BigCommerceLandscape-1.png)

**ID**: 5f16de9845bf0e66fcb3d391

## Photo Print Module Update 🖼

Hello everyone,

We've developed two additional modules for Photo Prints but rather than spin them up separately, we opted to bundle them into the existing
Photo Print module as modes.

So, in your Photo Print Module configuration, you will find "Modes" as the first option.

[https://blog.pitchprint.com/content/images/2020/07/image.png]

The default mode is named Photo with Paper Type, which is what we had initially. We newly added Bulk Photo Prints and Vintage Photo Prints.

Bulk Photo Prints is targeted at a customer that wants to order multiple copies of their photos and in different sizes. Upon adding the
photo, clicking a plus or minus against each dimension updates the quantity of that dimension.

[https://blog.pitchprint.com/content/images/2020/07/image-1.png]Bulk ordering configuration panel

You can try out our sample here
[https://ps.demo.pitchprint.io/index.php?id_product=52&id_product_attribute=0&rewrite=multi-photo-prints&controller=product&id_lang=1]

Vintage Photo Print mode allows customers to order their prints with retro borders, caption and colorful backgrounds which are created as
design pages in the admin.

[https://blog.pitchprint.com/content/images/2020/07/New-Module-2.png]Vintage Photo Print

You can try out our demo here
[https://ps.demo.pitchprint.io/index.php?id_product=51&id_product_attribute=0&rewrite=vintage-photo-prints&controller=product&id_lang=1]

Both new modes allows customers to do basic photo edits like photo Filters, Repositioning and Rotation.

To utilize these new modes, you will need to update your domain Layout [https://admin.pitchprint.io/layouts] to our latest and Save your
Styling [https://admin.pitchprint.io/styling] to generate a new CSS file. Clicking on the link takes you to the admin page to effect this.

Particularly for Vintage Photo Prints, a few design rules need to be adhered to, in order for our scripts to effectively target your text
caption and replacement photo. You can read about these rules here [https://docs.pitchprint.com/article/97-photo-print-module#vintage]


OTHER UPDATES..

 * Hooks in V10 - We did add Item Hooks to v10. Hooks Sample [https://docs.pitchprint.com/article/53-item-hooks]
 * Greyscale Upload - The bug is fixed where greyscale uploads do not convert
 * Horizontal Fold Lines - Horizontal fold lines now show reflect in admin
 * Float Panels in Mobile - On mobile devices, float panels sometime block the submit button. We did fix this issue by hiding any floating
   panel while in preview mode.

Thanks to you all. Keep safe 😷

--------------------

![undefined](https://blog.pitchprint.com/content/images/2020/07/New-Module.png)

**ID**: 5ec51c5a45bf0e66fcb3d324

## Release #WEEK 21

 * Mobile Experience - Over the past two weeks, we tweaked the mobile interface to be more responsive and fixed the nagging issue of the tab
   hiding when the UI is being scrolled. The text editor is appropriately positioned. We plan on doing more work on the interface here.
 * Photo Crop - We have fixed some issues with the photo crop module including a solid undo state management to revert to previous crop
   states. The issue with black canvas after an image has been deleted is also fixed.
 * Curved Text - We fixed the issue whereby curved text's fonts could not be changed.
 * Image Filter issues - Large images with filters gets cropped. This was due to the texture size used in the filter and has been fixed.
 * Font Size Slider - When a user clicks to show the font slider, it now defaults to showing 4x the current font size as maximum value with
   a minimum value of 2 points. So if the current font size is 12, the slider range will be 2 - 48. For a 30 font size, the range will be 2
   - 120. This way, it adapts to the selected font size.
 * Text Transform - A button has been added to More text options drop down to toggle text case from lower case to all caps and vice versa.
 * Minor updates - Added an Ok button to welcome message; Certain fonts not loading on Mobile; and lots more minor fixes and improvements.

--------------------

**ID**: 5eba593145bf0e66fcb3d2ba

## Release #WEEK 19

 * Item Flip - We added vertical & horizontal flip for shapes and images.Annotation-2020-05-12-101635
   [https://blog.pitchprint.com/content/images/2020/05/Annotation-2020-05-12-101635.png]
 * Set Vectors as Background - Printers can now use a vector (SVG) as background images
 * PDF Commands - We started implementing pdf specific commands using design tags. The format is {pdf-operation-operand}. For now we have
   the join command for stringing two or more pages into a single PDF page.
   For instance, adding the following tag to a two paged design will join the pages side by side, horizontally: pdf-hjoin-1|2 The command is
   "hjoin", the operand is the pages separated by a pipe.
 * Grey border fixed - Fixed an issue whereby previews have a grey bounding border around the preview images.
 * Download PNG & JPEG in admin - Fixed the issue that prevents admins from downloading PNG or Jpegs while in the design editing environment

--------------------

**ID**: 5eafa83e45bf0e66fcb3d264

## Release #WEEK 18

 * Price Display - We implemented price display in v10; The app syncs your price from the product page on the top menu
   barAnnotation-2020-05-04-074610 [https://blog.pitchprint.com/content/images/2020/05/Annotation-2020-05-04-074610.png]
 * No background Fill - Fixed a bug which occurs when no-color fill is set on a background
 * Color Chain - We added color chains to v10 - How to create color chains
   [https://docs.pitchprint.com/article/106-how-to-create-colour-chains]
 * Remove Un-Edited items - Added a new feature to Data Form module that removes any item that the customer did not edit.
 * Mask No-Constraints - Fixed bug that still constrains images inside a mask even when no-constraints was set
 * Page Lock - With this feature, you can lock an entire page so that customers do not change, delete or add elements to it, but gets
   printed in your PDF; Something like a static page

We are working on an advance layout builder feature for v10, coming next week.

Take care and keep safe!

--------------------

**ID**: 5ea67f4b45bf0e66fcb3d202

## Release #WEEK 17

 * Text Alignment issue fixed - Fixed an issue where a center or right aligned text gave bad results when positioned using the page align
   control.
 * Photo Print Module - Photo print module is available for version 10.
 * Ungrouped Shapes color bug - We did fix an issue whereby when a shape is ungrouped, colors applied to the individual shapes wouldn't
   reflect.
 * Ctrl / Cmd for Multi selection - Added option to multi select elements on the canvas with either Ctrl, Cmd or Shift.
 * Design Unit Change issue - Fixed an issue with v10 whereby changing the design units (cm, inches, px etc) doesn't reflect.
 * Keep Text Width - Added a feature that shrinks a Text element when a user types in values larger than the preset width.

width [https://blog.pitchprint.com/content/images/2020/04/width.gif]

--------------------

**ID**: 5e9d4e5445bf0e66fcb3d188

## Release #WEEK 16

 * Issue with anchored texts - We fixed issue whereby text elements that have vertical anchors (middle or bottom) were moving position when
   zooming.
 * Issue with Image Crop - We fixed issue with cropped images not being cropped in the final PDF render on distiller 1
 * Text Art Export in v10 - Admin can now export Text Arts in v10 while designing. The icon is a box that appears on the top menu list 📦
 * Custom Color in v10 - Users and admin can now type in custom Hex or CMYK color values while designing. It's available by default in Admin
   but you need to enable it in the settings page [https://admin.pitchprint.io/settings] for your store as well as re-save your styling
   [https://admin.pitchprint.io/styling].
   Annotation-2020-04-20-093530 [https://blog.pitchprint.com/content/images/2020/04/Annotation-2020-04-20-093530.png]
 * Use of SVG as Foreground - SVG files can now be used as Foreground image with transparencies.
 * Bleed Outside - Prior to this option, bleed is a part of the final PDF dimension. As such, a 100 x 100cm page with 2cm bleed will output
   a 98 x 98cm file with 2cm bleed.
   Toggling this option to true will give you 102 x 102cm as is expected by many print platforms. In order not to break existing stores, we
   disabled it by default in settings [https://admin.pitchprint.io/settings], and will only affect new designs going forward, if enbaled.

--------------------

**ID**: 5e93f81745bf0e66fcb3d0e4

## Release #WEEK 15

 * Mask Image Depth - We've fixed an issue whereby a mask whose image is deleted looses depth and forcefully appears in the front.
 * Customized File for 3D Cart - The final PDF file is now available in the order details in 3D Cart.
 * No Constraints - Fixed issue. No constraints setting for a clickable mask has been fixed in v10.
 * Bleed Fill - We've added a new feature in settings, which allows you to fill the bleed area with a lighter transparent value of the bleed
   line color. We are looking at adding hash lines over this as well, so it doesn't look as though it's a part of the design.

[https://blog.pitchprint.com/content/images/2020/04/image-9.png]
 * Skip Preview - We've added the skip preview feature to v10. Customers can finish their designs without the preview step.
 * Copy and paste text from 3rd party source - We've added a feature to give the user the ability to copy and paste new text from outside
   sources using Ctrl/Cmd + V

--------------------

**ID**: 5e8ad91845bf0e66fcb3d03d

## Release #WEEK 14

 * Upload issue on Phones - Fixed issue after uploading an image on mobile, the upload tab would close and the canvas would display.
 * Added Shopify Order Complete Webhook - We've added the order-completed webhook to Shopify.
 * Modified navigation thumbnail label - We've modified the thumbnail label so that when text is too long, the text extends instead of
   cutting off; we also moved the label to the top of the thumbnail.

[https://blog.pitchprint.com/content/images/2020/04/image.png]
 * User data now appears for Shopify - When a user is logged into your store, their data is available and synced to designs. We added this
   to Shopify stores.
 * Gallery Search feature - We've implemented the gallery search feature in v10 so customers can search for images using keywords in
   background and picture panels. The keywords used are provided by admin in the Pictures [https://admin.pitchprint.io/pictures] and
   Background [https://admin.pitchprint.io/backgrounds] sections.
 * Titles for Module tabs - We've added titles for all module tabs.
 * Text formatting issue - Fixed an issue with text elements where some parts get formatted while others remain numb when editing is
   disabled.
 * We still do daily releases and many other small bugs were fixed along the week.

--------------------

**ID**: 5e8198a745bf0e66fcb3cf9f

## Release #WEEK 13

 * Font loading - Fixed issue where the correct fonts assigned to a design did not load on the customers end. We had to re-write the font
   loading machanism to always pre-load all the fonts used in a design before the design is shown at all. And when a design selector module
   changes the design at runtime, we also updated the font list accordingly.
 * Bleed line color - Fixed issue where the bleed line color is not reflective of the value selected in settings, when a margin is applied.
 * Chain multiple masks - Users now have the ability to chain multiple masks, so when they add an image to one mask in the chain, the image
   is automatically cloned to the other masks bearing the same chain value. You may use any unique keyword as the chain value for your
   shape, as long as that same exact value is applied to the other shape(s).
 * Download PNG and JPEG - Users can now download PNG and JPEG in the front app. This feature requires the admin to reload the layout and
   re-save their styling.Annotation-2020-03-30-101858 [https://blog.pitchprint.com/content/images/2020/03/Annotation-2020-03-30-101858.png]
 * Adding a new page prepends to front of page list - Fixed the issue whereby adding a new page to a project prepends the page to the front
   of the list instead of the back.

Keep safe and see you in the coming week!

--------------------

**ID**: 5e783fa945bf0e66fcb3cf47

## Release #WEEK 12

 * Selective PDF Color rendering using tags - Special tags: rgb and cmyk have been reserved as color rendering instructions on a per-design
   level. So you can override the store's default rendering mode by adding either of these tags to your design. For instance, if the store
   is set to render PDFs in RGB, you can opt to render a select few in CMYK by adding the tag cmyk to those designs.
 * Large Button Style fixed in v10 - Option to show both Icon and Text on the left panel is included in v10
 * Edit Curved Text - Users can now edit curved texts by clicking on the pen icon or double clicking the text itself. Before this, you had
   to convert to a textbox first and convert back to curved text
 * Disable hide context menu in admin - Hide context menu is disabled while editing as admin
 * Mask our Bleed Area - This feature cuts off the bleed boundary when previewing the user design and in the rendered preview.
 * CMYK Support for v10 - This is available only in Distiller 1
 * Drag & Drop background images - Dragging a background image from the panel instead of clicking it hangs the loading process. Now users
   can either click or drag a background image and have it applied to the canvas.
 * Shape Stroke issue in PDF - Fixed issue where no-stroke on a drawn shape still prints out a stroke in the PDF

We do hope everyone is safe and sound; Praying for a speedy return to normal.

Keep well.

--------------------

**ID**: 5e6f47a545bf0e66fcb3ce7c

## Release #WEEK 11

 * DPI Check with notification warning - This warning only appears once to prevent spaming and only shows after 10 seconds of interaction.
   We will implement an additional warning to the preview page just before submission.
 * Text inputs are stripped of emoticons - Emojis do not render consistently on PDFs so we are removing them. Even on our devices, emojis
   look different between devices.
 * Retain Design Page in Admin - After saving a design in admin, the whole page is no longer reloaded. The new design is simply appended to
   the category list
 * Google Font import - Importing fonts in the app is more streamlined. Closing the font import panel opens the font popup and displays the
   newly imported fonts top of the list
 * New Page Color Fix - When adding a new page in designer, the color defaults to white instead of black.

--------------------

**ID**: 5e6601fd45bf0e66fcb3cdc2

## PitchPrint + 3dcart

Hi everyone 😊, our 3dcart integration is ready!

3dcart is a cloud hosted eCommerce platform like Shopify but with deep focus on SEO and conversions.

PitchPrint is now available on 3dcart and can be installed straight from the App Store
[https://apps.3dcart.com/pitchprint-product-customizer.html]

Installation is a breeze we have written a brief to assist you in getting started:
https://docs.pitchprint.com/article/130-pitchprint-on-3dcart [https://docs.pitchprint.com/article/130-pitchprint-on-3dcart]

--------------------------------------------------------------------------------------------------------------------------------------------


RELEASE NOTES



 1. Create basic shapes in Version 10: In addition to the freehand draw tool, we have expanded the basic shapes library to include Circle,
    Rectangle and line shapes. We will keep adding more tools over time. Coming up are ovals and star shapes.

[https://blog.pitchprint.com/content/images/2020/03/image.png]Basic Shape Tools

2. Copy Styles: A nifty feature that allows you to copy styles across elements. It's contextual, so for texts, it will copy all the
formatting like font, color, font weight, alignment etc. For images, it copies the filters. Once copied, you can apply the copied style to
an other item.

[https://blog.pitchprint.com/content/images/2020/03/image-2.png]

3. Strokes on Text: We have updated Version 10 to include strokes on texts.

4. Thumbnail Previews: In Version 10, you can now set the navigation to use thumbnails as or change the position of the current navigation
to bottom. You can do this in settings page [https://admin.pitchprint.io/settings]

5. Layouts: Version 10 Layout has been updated to use tags in assigning Layout to designs. You can read more here:
https://docs.pitchprint.com/article/129-layouts-v10 [https://docs.pitchprint.com/article/129-layouts-v10]

--------------------

![undefined](https://blog.pitchprint.com/content/images/2020/03/Artboard---5.png)

**ID**: 5e2ecff345bf0e66fcb3ccc5

## Upload Photos from Phone

Hi everyone 👋

A few weeks back, we received a request from a client that needed to use PitchPrint on their Kiosk that allows visitors to quickly order
photo prints from their public-facing machine. The Kiosk stand obviously runs our app but has a limitation; It being in the public space
means users have to find a way to get their photos unto the machine. They didn't want to use USB connectors as that can propagate viruses
and other device malware.

So they filed in a request with us for a QR Code feature that will allow users scan a QR Code on the app and from there upload their Photos.
So we thought about it being useful even beyond kiosk machines.

While the PC strikes a chunk of online commerce, most of us today, have more Photos on our mobile devices than on our computers and it's
always a pain transferring files between devices.

This feature aims to remove that pain-point by displaying a QR Code that users can scan with their mobile devices, which loads a page that
allows them to upload Photos straight into their PitchPrint project without the hassles of cable connection or cloud file transfer between
file service providers. It's that simple and seamless. SCAN, UPLOAD & USE 👌

You can test it here in our demo page: https://wp.demo.pitchprint.io/product/photo-prints/
[https://wp.demo.pitchprint.io/product/photo-prints/]

 1. Navigate to the Upload Tab:

[https://blog.pitchprint.com/content/images/2020/01/image.png]Upload Gallery

2. Clicking the PHONE Icon displays the QR Code Panel:


[https://blog.pitchprint.com/content/images/2020/01/image-1.png]QR Code to start Upload

Scan the QR Code with your Phone and open the URL on your Phone.

This shows a button that allows you to Add Photos for upload. Selecting your Photos automatically starts the upload, which progress is
synced between both devices using a single, secure persistent socket connection.

[https://blog.pitchprint.com/content/images/2020/01/image-2.png]Photo Upload Progress

Once the Upload completes and the images are processed, they are displayed in the Upload section of the PitchPrint app and are ready for
use. Photos can be taken with Camera or from the Phone's file system.

We do have many more updates in the new version as well as the Admin panel and we'll give a more detailed and comprehensive release note in
the coming weeks.

Thanks and do have a beautiful, bright year ahead.


--------------------

![undefined](https://blog.pitchprint.com/content/images/2020/01/matyas-prochy-Jf-ezcuKAaA-unsplash.jpg)

**ID**: 5df2221145bf0e66fcb3cad9

## Version 10 Release

We know this took us way longer than planned, our apologies. It's finally here, PitchPrint Version 10


WHAT'S NEW 🚀

This is a major release but, it's non-breaking, which means you can easily turn it on or off with a switch in your settings page
[https://admin.pitchprint.io/settings]. Your old designs will work fine with the new version as well as your old projects and
configurations.

Version 10 bears a new rendering engine and under the hood, we have re-written the codebase to be more efficient and modular. You will
perceive the clear difference between the two versions as shown in this picture:

[https://blog.pitchprint.com/content/images/2019/12/image.png]Version 10
Preview[https://blog.pitchprint.com/content/images/2019/12/image-1.png]Version 9 Preview

Control Anchors - In our prior version, the control anchors are clipped along with the canvas. In v10, they extend beyond the canvas and
makes for a much better experience.

[https://blog.pitchprint.com/content/images/2019/12/image-6.png]With items selected, v10 on the left maintains the anchors beyond the canvas
area

Fonts - In this new release, fonts are loaded only when the user opens the fonts picker, as against the prior system of loading fonts
alongside other elements which in turn delays the app-ready time. Only fonts used in the design are priority-loaded at initialization.

Further more, we added the ability for customers to select and import any Google Font into their projects for use, just like we have in the
admin. Custom font upload will be supported in an upcoming minor release.

[https://blog.pitchprint.com/content/images/2019/12/image-2.png]Customers can now import Google Fonts for use in their projects

Background Mode - Clicking on the canvas sets the stage to a Background Mode with red highlights around the canvas. In this mode, users can
change the background image apply a color, set its opacity or outright delete the background, making for a transparent design. For image
backgrounds, we now have Fill, Fit, or Stretch position modes

[https://blog.pitchprint.com/content/images/2019/12/image-3.png]Background Position Mode

A nifty feature we also added, is the ability for customers to "undock" a background image and set it as a regular image on the canvas and
vice versa; docking a regular image as a background.

Gradient Colors - Yes, we now have linear gradient colors for background and shapes. We plan on applying this to text elements as well.

[https://blog.pitchprint.com/content/images/2019/12/image-4.png]Gradient Color Fill

Draw on canvas - We added pen to allow users draw on the canvas. Our ultimate goal with this is to give users the ability to draw any basic
shape like lines, rectangles, circles etc. with stroke and fill colors. This is already in the works.

[https://blog.pitchprint.com/content/images/2019/12/image-5.png]

Mobile layouts - Version 10 does not use a separate layout for mobile and desktop. Rather, we used browser CSS to re-architect the same
layout to fit mobile screens. With CSS, we can easily implement different mobile layouts without the overhead of managing a plethora of HTML
files.

Themes - Version 10 brings a fresh modern styling to PitchPrint, with softer edges, vibrant color system and an overall more appealing app.
With this architecture, we will be releasing themes that can be easily applied by customers.

Image Editor - We now have our own image editor baked right into the app. At the moment, it is basic with crop and filters. Admins can later
create their own filters and presets that can be easily applied by your customers.

To quickly test version 10 on your store without fully turning it ON,
you can append this to the end of your product page url:

?vx=true - Use this if your url does not contain a question mark
&vx=true - Or this, if it does have a question mark



HOLIDAYS

It's been a wonderful year for us and much thanks to you all for your unwavering support and trusts in our product. We will be taking our
holidays break today 13th of December. There will remain skeletal support for critical issues so you can reach us via our regular channels.

We wish you a very great Christmas and a wonderful 2020 ahead 🎄🎅!

[https://blog.pitchprint.com/content/images/2019/12/season-s-greetings.png]

--------------------

![undefined](https://blog.pitchprint.com/content/images/2019/12/V10-Header.png)

**ID**: 5d79f2f645bf0e66fcb3c9f6

## PitchPrint @ Prindustry Connect Event 2019

Be our guest at the Prindustry Connect Event 2019; it is an informal relationship event for everyone in the online print industry to meet
and we have been invited to both present as well as exhibit our software. It will be held at the Evenementenhal 2, Gorinchem, The
Netherlands.

It is a full day event slated for Thursday 19th of September 2019 and you can reserve your spot here:
https://prindustry.com/connect-event-2019-uk/ [https://prindustry.com/connect-event-2019-uk/]

Three of our team members will be on hand to interact and answer your questions regarding our vision, plans and get to hear your needs.


PITCHPRINT VERSION 10

We have been hard at work over the past few months on the next iteration of PitchPrint. Though it is a major release, this version is
NON-BREAKING, which means most version 9 stores can easily upgrade without any changes to existing store settings or configurations; just at
the flick of a switch. We know the pain it took to migrate from v8 and we have built 10 to be 100% compatible with version 9

Core of what v10 brings are speed, usability and a more cohesive experience. Here are a few of its highlights:

 1.  The control anchor on items now extends beyond the design canvas.
 2.  Layout modules can be moved about without breaking the system; this means you can move the left panel and place it on the right or
     bottom to fit your requirements.
 3.  We implemented the newly released Chrome's lazy loading feature: https://web.dev/native-lazy-loading
     [https://web.dev/native-lazy-loading] for all images so the app only loads the image thumbnails when they are shown. For fonts, we
     added the option to pre-load or load them when applied. This greatly improves the app's performance and render time.
 4.  Users can now upload their own fonts or import fonts from Google Fonts right in the app.
 5.  Background images can be positioned to Fill, Fit, Crop or Stretch and canvas images can be set as a background
 6.  Themes can be updated live by users to dark / light modes
 7.  Crispier and cleaner rendering in the browser
 8.  Grid line spacing and a more intelligent guide lines system
 9.  Much improved mobile experience
 10. You'll love it 😊

Our release date is set for 1̶s̶t̶  8th of October 2019.
Edit: We still have a few issues to resolve on this version. As such, we will be releasing it on the 8th of October as against the earlier
planned 1st

Enjoy your weekend and we look forward to seeing you at the event.

--------------------

![undefined](https://blog.pitchprint.com/content/images/2019/09/Header-Q3-1--1-.png)

**ID**: 5c920a8a45bf0e66fcb3c8cd

## March Release Notes

Hi everyone! February has been a busy month for us; In preparation for growth, we moved into our new office. Photos coming soon 😊


TEXT RULES

These are set of features relating to Text elements on the canvas:
Text Anchor, Character Spacing and Text Cases

Text Anchor allows you to set a vertical anchor position for Text elements. We have Top (default), Middle and Bottom. This feature is useful
to vertically-anchoring multi-line texts so for instance, a Textbox anchored to the bottom will stretch upwards as more lines are being
added.

Character Spacing allows users to adjust horizontal spacing between each letter in a Textbox. Text Case makes it quicker to toggle from
lowercase to upper case.

[https://blog.pitchprint.com/content/images/2019/03/image-3.png]

We have included these controls in the sticky context menu. To enable this in each store, admins will need to reload the latest Layout here
[https://admin.pitchprint.io/layouts]

This has been set as the default in the admin but will not affect your store until you reload new layout. We needed to group the similar
text controls under more (⋯), because in inline display mode and on smaller PC screens, they get cut off for some users.


3D VIEWS

3D views makes it possible for end customers to visualize their designs on an actual product with perspective in 3D.

[https://blog.pitchprint.com/content/images/2019/03/image-5.png]

You can view the 3D Studio here [https://admin.pitchprint.io/three] to create models and read more here
[https://docs.pitchprint.com/article/112-3d-views]


COLOR PROFILES ON V2 DISTILLER

Our version 2 PDF Distiller now allows you to set a destination ICC profile from a list in settings page. These profiles are not embedded
but used in interpreting the RGB values to CMYK. We also added Render Intent for Image conversion in V2.

[https://blog.pitchprint.com/content/images/2019/03/image-9.png]


SVG IMPROVEMENTS

Our Version 1 distiller had a bug with SVG paths that contains subpath elements. As a result of this issue, certain SVGs render
inaccurately. We were able to solve this issue and now render all SVG elements with high fidelity.

Should you have any issues with SVGs being rendered inaccurately, please do contact us. Our goal is to eventually merge both engines as we
work to perfect them.


FILE UPLOAD TYPES

This allows you to limit the types of files users can upload in the plugin (Outside the app). You can set this in settings page
[https://admin.pitchprint.io/settings]

[https://blog.pitchprint.com/content/images/2019/03/image-12.png]

We are finalizing licensing agreements for the new Image Editor as such, it's being delayed. We hope to bring it on board a few weeks from
now: https://www.photoeditorsdk.com/ [https://www.photoeditorsdk.com/]

--------------------

![undefined](https://blog.pitchprint.com/content/images/2019/03/20190320_125906-1.jpg)

**ID**: 5c8450a1e9af7d3c77b6ce0e

## January Release Notes 🎨

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

--------------------

![undefined](https://blog.pitchprint.com/content/images/2019/03/marc-marchal-391891-unsplash--1-.jpg)

**ID**: 5c8a307545bf0e66fcb3c89f

## December Release Notes 🎅

Hi guys! Compliments of the Season.
Here's a note on what we've been working on for the past month.


DESIGN TAGS

This allows you to tag your designs so they can be easily searched using your tags as the search terms. Tags can be assigned to whole
categories as well as individual designs. Please note, assigning a blank tag list to a category allows you to clear all the tags assigned to
designs in that category.

[https://blog.pitchprint.com/content/images/2019/03/image.png]

--------------------------------------------------------------------------------------------------------------------------------------------


COLOR PALETTE

With Color Palettes, you can create a collection of five complementary colors that can easily be sampled by your customers while customizing
their designs. This makes it easy to create multiple color variants of the same design.

[https://blog.pitchprint.com/content/images/2019/03/business-cards-palette.png]

Check out our sample here: https://wp.demo.pitchprint.io/product/palette-business-card/
[https://wp.demo.pitchprint.io/product/palette-business-card/]
And read more here: https://docs.pitchprint.com/article/109-color-palette [https://docs.pitchprint.com/article/109-color-palette]

Please note, you need to reload your layout [https://admin.pitchprint.io/layouts] and save your styling
[https://admin.pitchprint.io/styling] for it to display in the app.

--------------------------------------------------------------------------------------------------------------------------------------------


IN-APP HELP

The integrated Help panel can be used to display guides or tutorials for your customers. This can accept HTML contents including styles,
script tags etc. You get to set this in the settings page: https://admin.pitchprint.io/settings [https://admin.pitchprint.io/settings] just
right after the customCss field at the end of the page.

By default, it will not appear unless there's content to be displayed. We also plan to make this per-design.

--------------------------------------------------------------------------------------------------------------------------------------------


JPEG EXPORT

Admin can now download design work as Jpeg bundles from the projects page: https://admin.pitchprint.io/projects
[https://admin.pitchprint.io/projects]

We are working to include this in the plugin release.

--------------------------------------------------------------------------------------------------------------------------------------------


SHOPIFY SAVE FOR LATER

Shopify stores users can now access and manage their saved designs from their Shopify account page. However, this is only possible with
projects created and saved from the 14th December.

--------------------------------------------------------------------------------------------------------------------------------------------


ICC PROFILE

You can now set ICC color profile for JPEG and PNG downloads from the projects page. We currently have only one profile set. Should you
require any other ones, kindly let us know so we can include it.

--------------------------------------------------------------------------------------------------------------------------------------------


NEW MOBILE LAYOUT

This new layout works with the mini display mode to display the app in a simpler and more user-friend layout on mobile devices. It's best
suited for simple designs where users get to edit texts and perhaps upload photos into masks.

[https://blog.pitchprint.com/content/images/2019/03/image-4.png]

With this layout, the app flows along with the page using the page UI elements for easy customization.

To implement this layout, you need to first create the Layout: https://admin.pitchprint.io/layouts [https://admin.pitchprint.io/layouts].

Then assign the layout to a design as its Phone Layout:

[https://blog.pitchprint.com/content/images/2019/03/image-10.png]

And finally, make the product display in Mini Mode:

[https://blog.pitchprint.com/content/images/2019/03/image-2.png]

You can check out this sample on your mobile device: https://wp.demo.pitchprint.io/product/roll-up-banner/
[https://wp.demo.pitchprint.io/product/roll-up-banner/]

--------------------------------------------------------------------------------------------------------------------------------------------

> Note regarding PDF Distiller & Preflights: We do apologise for this as we know a lot of you await this. There's a little delay but we will
> have it in the January.


JANUARY 2019

 * Design & Project History so you can roll back
 * Import designs from PDF, Illustrator
 * New PDF Distiller with preflight
 * Design & Project Auto-Save
 * Search & Filter Projects

Thanks to you all and we do wish you a merry Christmas and a splendid New Year ahead 🎉

--------------------

![undefined](https://blog.pitchprint.com/content/images/2019/03/clem-onojeghuo-172144-unsplash-1.jpg)

**ID**: 5c8a307545bf0e66fcb3c89e

## November Release Notes

Hi guys, happy new month! Here's a note on what we've been working on for the past month.


BULK DESIGN CONFIGURATION

This allows you to apply a select list of configuration to all designs in a single category. This works a bit different from what we had in
the prior version in that, you need to actively select which of the settings to apply, so it does not override all properties.

[https://blog.pitchprint.com/content/images/2019/03/image-4--1-.png]

To apply this, simply navigate to your designs, open up a category and click the Bulk Configuration button under More Options. In the
configuration dialog, you need to check-mark each setting you want applied to the designs.

[https://blog.pitchprint.com/content/images/2019/03/image-6.png]

--------------------------------------------------------------------------------------------------------------------------------------------


SEARCH DESIGNS

Yes, you can now easily search designs using the design title. In our next release, we will implement tags so it gets even easier finding
your designs.

[https://blog.pitchprint.com/content/images/2019/03/image-11.png]

--------------------------------------------------------------------------------------------------------------------------------------------


CURVED TEXTS

[https://blog.pitchprint.com/content/images/2019/03/image-7.png]

Curved Text allows you to create texts along an arc. To create one, you first need to create a regular Text, then click the Text tool to
toggle between the 3 text modes: Text, Textbox and CurvedText.

The controls allow you to edit the curve radius and character spacing. A negative radius inverts the orientation of the arc.

> A note: This requires you to Reload your Layout [https://admin.pitchprint.io/layouts] as well as Re-save your Styling
> [https://admin.pitchprint.io/styling]

--------------------------------------------------------------------------------------------------------------------------------------------


NEW MOBILE LAYOUT

We did some work decoupling the layouts so now you can create mobile or desktop layouts from our collection and uniquely assign them to your
design. This system will, in future enable to us create different layouts targeting different devices and you can pick whichever best suits
your taste or target audience for use.

[https://blog.pitchprint.com/content/images/2019/03/image-8.png]

To use the new Mobile layout, simply navigate to Layouts [https://admin.pitchprint.io/layouts], click the Add New Layout button and there
you have the option to select Phone 2. Please note for it to take effect, you need to assign this layout to your design in the design
configuration:

[https://blog.pitchprint.com/content/images/2019/03/image-10-1.png]

We are still working to add more features such as modules to this layout but we will keep you posted and implement a notification system
should your layouts be updated.

--------------------------------------------------------------------------------------------------------------------------------------------

> A note regarding Unsplash: We did fully integrate Unsplash. Unfortunately our submission was rejected as their guidelines wouldn't allow
> images to be used in prints without alterations.

--------------------------------------------------------------------------------------------------------------------------------------------


NEXT MONTH..

 * Tag Designs, Assets and other resources
 * Photo Print 2 module
 * Import designs from PDF, Illustrator
 * In-App Help/Guide panel
 * New PDF Distiller with preflight

Thanks to you all and love from Cape town 😊

--------------------

![undefined](https://blog.pitchprint.com/content/images/2019/03/christian-perner-588111-unsplash--1-.jpg)

**ID**: 5c8a307545bf0e66fcb3c89d

## October Release Notes

> Release Notes will be our monthly report that highlights recent product improvements we’ve made so you can easily stay up to date on
> what’s new with PitchPrint.


STICKY CONTEXT MENU

Yes, your context menu can now be hooked to the top part of the designer. It will slide to appear and slide back to hide. You can enable
this in your admin settings page [https://admin.pitchprint.io/settings] by disabling the Float Context Menu option. But first, you need to
Reload the latest layout [https://admin.pitchprint.io/layouts].

[https://blog.pitchprint.com/content/images/2019/03/image--1-.png]

--------------------------------------------------------------------------------------------------------------------------------------------


TRANSFORM CONTROLS

The new Transform controls allow users to easily rotate and skew objects on the canvas using simple numeric sliders. We have a much fuller
control coming for mobile UI. This feature also requires you to load the latest layout.

[https://blog.pitchprint.com/content/images/2019/03/image-1--1-.png]

--------------------------------------------------------------------------------------------------------------------------------------------


TEXT WRAP

This is a feature available in version 8. It's a TextBox feature that basically wraps a text to the next line as against auto stretching the
text line.

--------------------------------------------------------------------------------------------------------------------------------------------


MINI DISPLAY MODE

We have had Modal and Inline display modes; the Mini mode shows a basic, stripped down version of the editor, letting the user quickly "fill
out a form" to personalize their designs. It's for quick, simple products where speed-to-add-to-cart is of utmost importance. It supports
both text and file uploads.

[https://blog.pitchprint.com/content/images/2019/03/image-2--1--1.png]

You can read all about it here and check out the sample implementation: https://docs.pitchprint.com/article/107-display-modes
[https://docs.pitchprint.com/article/107-display-modes]

--------------------------------------------------------------------------------------------------------------------------------------------


WEBHOOKS

Our Webhook enables you to notify a service or trigger an event whenever an event happens on PitchPrint relating to your store. For
instance, you may want to send the PDF file of a project directly to your printer, or save all your user's uploaded pictures in your DropBox
or Google Drive.

We do have a detailed example enumerating how to integrate with platforms like Zapier. You can read more here:
https://docs.pitchprint.com/article/100-automation-sending-your-pdf-file-to-printer
[https://docs.pitchprint.com/article/100-automation-sending-your-pdf-file-to-printer]

--------------------------------------------------------------------------------------------------------------------------------------------


OTHER UPDATES

 * PDF Versioning: This allows you to set a PDF version for your output file
 * Place new text: Enabling this option in Admin Settings means when a user clicks the Add New Text button, a new text is immediately placed
   directly on the canvas without having to further click the canvas.
 * Text Arts: We have new collection of Text Arts you can import from the store to add to your designs.

--------------------------------------------------------------------------------------------------------------------------------------------


NEXT MONTH..

 * New Mobile Layout
 * Unsplash [https://unsplash.com] Integration
 * Curved Texts
 * Bulk design configuration
 * Search Designs

Thank you all for believing in us 👏

--------------------

![undefined](https://blog.pitchprint.com/content/images/2019/03/sarah-dorweiler-211779-unsplash--1-.jpg)

