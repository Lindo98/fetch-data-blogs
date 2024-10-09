# **Blog Title**: Release WK33-24

**Blog URL:** [https://blog.pitchprint.com/release-wk33-24](https://blog.pitchprint.com/release-wk33-24)

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

