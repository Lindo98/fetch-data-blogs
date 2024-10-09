# **Blog Title**: Release WK38-24

**Blog URL:** [https://blog.pitchprint.com/release-wk38-24/](https://blog.pitchprint.com/https://blog.pitchprint.com/release-wk38-24/)

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

