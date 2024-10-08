# **Blog Title**: Under the Hood: PDF rendering

## **Blog URL**: [https://blog.pitchprint.com/under-the-hood-pdf-rendering](https://blog.pitchprint.com/under-the-hood-pdf-rendering)

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

