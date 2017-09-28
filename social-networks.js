console.log("Made it to social networks.js");

var request = new XMLHttpRequest;
request.open("GET", "https://graph.facebook.com/v2.2/me/friends?access_token=EAACEdEose0cBAPfZAnC0KBv2CCZBHAZCMaH8R7vRwQBu3grbH52BcRe0RPqf3glB4ZC8ZAZBZBFkrW4uTk5Nv3RXWyJJIr7ryhZB3WONLRajcA8N3sreZCwpeW4Hl02QD8eat5yZAKc0Ru4FpNPoBY0IC2pwt8ZAe3XYZBZBqWy4gWeIepyZBuGDfOO8OG4wAFk1oVDa0CeoBCDKSyzOZAmYzGQsNSKIIMUIo7l9DInYZCtcZAvkjDQZDZD", false);
request.send(null);

$("#request").html(request);