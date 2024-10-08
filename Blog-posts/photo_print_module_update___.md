# **Blog Title**: Photo Print Module Update 🖼

**Blog URL**: [https://blog.pitchprint.com/photo-print-module](https://blog.pitchprint.com/photo-print-module)Hello everyone,

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

![Photo Print Module Update 🖼](https://blog.pitchprint.com/content/images/2020/07/New-Module.png)

