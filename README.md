# walmarttest

Take-Home Challenge
This is your time to show-off your hacking / coding skills! Here is a quick coding exercise to do completely on your own. Use your favorite editor, feel free to Google anything you want and hack-away!

This challange will also give you a teaser on the type of projects you will be working on in the store-services team.

Challange
Please see this list of item ids. Each id, represents a product in Walmart's catalogue. You are to write a REST search API that takes in a keyword and returns the list of products that have descriptions containing the keyword. A sample keyword would be backpack and that should return 3 products, i.e. 35613901, 35813552, 23117408.

To get the metadata associated with each product, please use Walmart's Product API with the API key kjybrqfdgp3u4yv2qzcnjndj.

Below is a sample request

http://api.walmartlabs.com/v1/items/14225185?format=json&apiKey=kjybrqfdgp3u4yv2qzcnjndj
Please keep in mind that the API rate-limits requests. So, as opposed to making requests in parallel, prefer serial requests.

This is your chance show of your engineering best practices, such as well decomposed code, unit testing, documentation, clean commit messages, etc. So, feel free to take as much time as you need. Once you are done with your work, please send us a link to your repo.

If you have any questions at any point, feel free to ping us via IM.

Format
Please create a repo for your project. Please keep it tidy as we will go over your code-base. The final submission is a link to this repo (you can make it public).

References
Below are a few libraries that you might find useful. We use those libraries all the time here @Walmart. Especially Hapi is dear to our heart.

Hapi
Request
Async