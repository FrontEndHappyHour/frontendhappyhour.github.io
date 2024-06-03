module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of Front End Happy Hour podcast. We are joined by our special guests a new to help us discuss Netflix's open source, virtual JSON graph library Falcor. And you want to give us a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages.

</p>
<p><strong>Anup Bishnoi</strong><br />
I am Anup. I work on the UI platform team here at Netflix. I work on Falcor quite a bit. And my favorite Happy Hour beverage is milk with a shot of cold brew.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's good. I didn't realize you had cold beer in there too. Nice. I love our cold brew. All right, well, let's also go around the table and give introduction of today's panelists. Ryan, you want to start it off? Do you still exist on this podcast?

</p>
<p><strong>Ryan Anklam</strong><br />
Yes, I finally did you enough favors where you let me back on. So I'm Ryan anklam. I'm a senior software engineer here at Netflix. And my favorite happier beverage lately is definitely a beer called suffer fest beer. They cater to runners, which I consider myself so do you run with the beer? Not at the same time. But maybe. Definitely after every run. I like to have a good suffer fest right now.

</p>
<p><strong>Jem Young</strong><br />
Jem Young Senior Software Engineer at Netflix. And I should point out that the beer run is a real thing. Like a beer mile. Yeah, the beer mile like you chug a beer and then run. They run the full model. It's every quarter mile you drink a beer. It doesn't sound hard, but like the sloshing can be so hard.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Yeah. I mean, I can't run without beer. Like I can just imagine doing that would make me sick.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah. A funny side story for that is we run an event for my son's school called their amazing race. And last year, we had them do a burrito mile. So you have to run a quarter mile eat a taco bell burrito, run another quarter mile.

</p>
<p><strong>Ryan Burgess</strong><br />
So high end burritos. And then they're

</p>
<p><strong>Ryan Anklam</strong><br />
really quality. And if you've ever tried to eat a burrito quickly, while you're out of breath, burrito, it's a it doesn't go well.

</p>
<p><strong>Jem Young</strong><br />
Wow.

</p>
<p><strong>Anup Bishnoi</strong><br />
I've been in a banana race, where you eat a bunch of bananas and then run. It's suppose finally they judge you on your number of bananas? Not on how much you read.

</p>
<p><strong>Ryan Burgess</strong><br />
like bananas like in Mario Kart? Oh yeah, or something. Alright, enough money talk. I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is?

</p>
<p><strong>Anup Bishnoi</strong><br />
What is that keyword?

</p>
<p><strong>Ryan Burgess</strong><br />
What is it? Quiet? Client. So if we say the word client at all in the episode, we will all take a drink. All right, well, let's get started. I would love to hear maybe a new pair probably the best one to describe it. What is Falcor? What is

</p>
<p><strong>Anup Bishnoi</strong><br />
Felker? Falcor is a way to model all your backend data as a single virtual JSON object as if it's available on the client.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. Cheers. Sorry about that. Mouse. Okay.

</p>
<p><strong>Anup Bishnoi</strong><br />
And that's it. So everything Falco does, it does to further this goal of letting you pretend that all the backend data for your app is simply available in your app as a giant JSON object, which you access asynchronously. Because behind the scenes, the Falcor client does actually make those network requests. Cheers, cheers, cheers. Sneaky. So what this does is your data becomes your API, there is no REST calls to make no query parameters to fiddle with. And you just ask for the data from any place in that huge JSON schema. And Falco gives it to you.

</p>
<p><strong>Jem Young</strong><br />
The idea of like, rest as a common interface is not that's not in Falco is

</p>
<p><strong>Anup Bishnoi</strong><br />
yet Falco tries to like deprecate rest. And hence, remove all the pain that you face. Like, like Judo used to have back in the day when, when they were not server side rendering. If you open to the page, it opens an empty page, then just an SBA single page app makes one REST call to check who you are as a user. Another one to get the tree is another one to get your user details in another one, and the page will take like ages to load. What they solved with server side rendering can be solved by server side rendering only for the first load. Yeah, Falco does it for all The data fetch that you're going to do for you. So instead of making those separate REST calls individually, sequentially, potentially, you ask Falcor for just exactly the data you need, and as much data as you need, and it gets it in one go from the server.

</p>
<p><strong>Ryan Burgess</strong><br />
And if there's a class later from what I've understood to have Falcor, is that if there's something missing, that Falcor doesn't have in its JSON graph, it will actually go back to the server and get it but it will also use what's already there. Is that correct? Right. So it caches what it already has.

</p>
<p><strong>Anup Bishnoi</strong><br />
Absolutely. So to achieve this grand goal of flooding, pretend like all your data, irrespective of how many backend servers you have, irrespective of how many databases you're storing, retain, letting you pretend all of that is just one big giant JSON object. To achieve this, Falco defines a network protocol defines, provides a server side middleware that actually queries queries, your back end services, and a client side model that caches the data that you get from the server. Not only that, it schedules and optimizes the server requests being made, the cache is really important here for optimizing the requests that you're going to make. Because you don't you shouldn't as a developer, you shouldn't have to care about what I already have in, in my app, or in my client. Cheers, cheers. And you don't care about what's cached, what's not, you just ask for whatever you need at a moment in time. And you get it, whether or not it comes from the cache or from the network. Falco decides, and Falco optimizes. So if we can probably get to that later, as well. But the JSON, the Jason graph schema that Falco defines to let you model your data gets a huge advantage because of this cache. And the requests that you make back to the server can be heavily condensed and highly optimized, because of the data already stored in your cache. Very cool.

</p>
<p><strong>Ryan Burgess</strong><br />
So I mean, essentially, like a big benefit is the caching and only not having to make so many calls to the back or to the server at that point,

</p>
<p><strong>Anup Bishnoi</strong><br />
true. Whatever it whatever it got earlier, it won't ask for, again, no matter. I mean, depending on your expiration policy that you specify within the Falcor Jason graph data model. It's totally not like going from this browser page to another one. And then making all those requests. Again, it's not even like going from this UI to the next and making a JSON. Ajax call. If you go back there, again, it makes another use of JSON Ajax call. It's better. It's basically a long living cash in your single page app or your mobile app with its own expiration policy, not dependent on how you're using the UI. And that that separates the caching concern from whether you click the link, or you hit reload, or you switched your view, from the details page to the list view. It separates the caching concern from this walking the UI concern.

</p>
<p><strong>Ryan Burgess</strong><br />
It's really cool. Any other benefits that you would share that for someone wanting to take advantage of Intel Core? Are there other benefits that we haven't covered? Yeah,

</p>
<p><strong>Anup Bishnoi</strong><br />
I mean, the main one being performance. So instead of asking for separate resources using REST, and then combining them on the client Falcor is a way where the client dries that demand. So the client defines the schema of that request, file call gets it in one go. And the client then renders it. So that's a huge network performance benefit that comes built in. There's request batching, request path optimizing using the cache, no sequential REST calls, all that is the performance bucket. There's ergonomics, which basically, because of separating the actual network requests from your demand of data, Falcor can add value in the middle Falcor can let you simply specify the retry behavior, for example. So Falco will retry that data for you, because you're not the one making the actual Ajax call. It's being managed by Falco. So Falco can retry on it as many times as you would like it to and give you the data eventually. There's, it's a much simpler model, where instead of depending on the network, instead of knowing or caring about the network, and the problems with network issues with network that you may be having your code is becomes mainly a request for data, and just getting that data. So it's a simple mental model. And then to wrap it all, it's an asynchronous API, which supports promises. And so you can just Do async use async and await and pretend as if the data was actually a local JSON object?

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. I can see so much performance improvements right there. I'm like, yeah, that will cut down on a lot of things. That's awesome.

</p>
<p><strong>Jem Young</strong><br />
And Falcor scalable, like Falcor is used extensively at Netflix. So for our data modeling, Oh, yeah. It's battle tested.

</p>
<p><strong>Anup Bishnoi</strong><br />
Totally like, like we've been with Netflix has been developing Falcor for five plus years now. And God open sourced only recently, like, maybe two years ago. Yeah. But they've been working on it for a very long time. It's totally battle tested, all of the requests, which are not streaming from all Netflix apps are actually Falco requests. That's it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. So all the all the apps in Netflix are actually using Falcor to deliver the data that the customers actually seen metadata that movies, TV shows,

</p>
<p><strong>Anup Bishnoi</strong><br />
your list of movies, your scrollable, list, details, page of title, all of that is it's all data that comes from cracker serving many, many 1000s of requests per second for all of Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And it seems to be working because people are using Netflix. So that's good. Yeah,

</p>
<p><strong>Anup Bishnoi</strong><br />
yeah. I won't tell you when it doesn't work. But but that's what that's what we're here for, like, my team is exactly responsible for maintaining this library and fixing the bugs that people see upgrading its functionality. And it's working very well for what it was defined to do. And as in when we see opportunities to take on more work or more functionality for the library that makes life easier for developers, that work is always something

</p>
<p><strong>Ryan Burgess</strong><br />
that's really cool. Yeah. So it's something that's living and breathing within Netflix. We're not just using it once. And then we are actually fixing things and making it better. Yeah, yeah. Great. Who should be using Falco? Obviously, Netflix is using it, but who's the right person that should be investigating to use this in their company or in a project? Who should really be using it?

</p>
<p><strong>Anup Bishnoi</strong><br />
Absolutely. Amazing question. So the point of Falco is when you have a client app,

</p>
<p><strong>Ryan Burgess</strong><br />
cheers. Good catch.

</p>
<p><strong>Anup Bishnoi</strong><br />
I mean, I said it. Who should be using Falco? Falco is when you need client side, demand dribbles data? I didn't catch that one. That's,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, I mean, you said it, right. Yeah.

</p>
<p><strong>Anup Bishnoi</strong><br />
So if your need is where the client needs to access data, potentially from a bunch of sources, where you have a bunch of micro services, which you want to tack behind a front end API service that the client app uses cheers, that's cheers. That's the perfect case for Falco to be used. I mean, it's a total mind shift, compared to the rest. Ideology. It's a total mind shift shift that comes bundled with Falcor that that you have to kind of overcome and absolutely should make sure that there is good reason for you to be going through that mind shift shift. So if your client wants to choose yes, if your app wants to drive the demand for data, asking specifically, for one or more pieces of data, per view, Valco will already provide you a benefit in that very generic case.

</p>
<p><strong>Ryan Anklam</strong><br />
What if your app uses a lot of transactional data? So you get some data, change some data and send data back to the server is Falco a good fit for something like that?

</p>
<p><strong>Anup Bishnoi</strong><br />
Yep. So there's three, three key operations in Falco, get set, and call get is for reads. Set is for writes both idempotent. And then a third one called call is for when you want to make an arbitrary service call to the backend, kind of like how RPC used to work, or kind of like how rest post works, where you could be making a web service call that does a bunch of things,

</p>
<p><strong>Ryan Burgess</strong><br />
I guess, is there also a benefit? Because I mean, we talked about single page applications. Is there a benefit? Like I think even Ryan asking the like getting post? What if it's not a single page, you've got like multiple pages? Do you experience any benefit for using something like fall core,

</p>
<p><strong>Anup Bishnoi</strong><br />
that's when you would experience a lot of benefit from using Falco on the server side? Okay, so not only can you use the Falco library on the client side, you can use you can use Falco on the server side where the server side component would be responsible for getting data from multiple back end sources. Yeah. munging them all into what the client app needs. Cheers. And that shifts to the phone,

</p>
<p><strong>Ryan Burgess</strong><br />
phone, app, website, whatever. I like that. No, that's really cool. Because that was one I always wondered, too is like if there's a benefit, because I would think that the single page application made a lot of sense to me where I'm like, yeah, that that makes a sense. You're not making all these requests to the server. But you can still make requests of the data and get that. But that makes sense that it could also help the performance on the server, even if it was making multiple page requests.

</p>
<p><strong>Anup Bishnoi</strong><br />
So say, say GitHub, as an application. Yeah. A page showing a file contents does not only show the file contents shows a bunch of other stuff, like collaborators on the right side, maybe comments on the file or commit information, app information, and so on. File call on the server can bring data in through multiple sources. Yep, put them into this one server side rendered page that shows up. How does this benefit performance from the file cache now? Yeah, it does. Because when you now switch your view, yeah, the request for the next page will be faster, because the file cache on the server already has some of the data it needs for that page,

</p>
<p><strong>Ryan Burgess</strong><br />
right? So if you were like, contributors list, it's already there. It's like cool, we already have that information. And if there was a new contributor being added, or to another repo or something, it would just only make a request for that little bit of data that it's missing. Exactly.

</p>
<p><strong>Ryan Anklam</strong><br />
Does the Fokker cache take advantage of any client side storage as well. So if you just refresh, you would already have that cache from previous requests sitting in the client already, or is it only stateless? So after you refresh the page, we do lose that client side cache.

</p>
<p><strong>Anup Bishnoi</strong><br />
So by default, it's in memory and stateless you would lose that. But Falco provides the tooling that you can use to do that storage yourself. You can always ask for the file cache doing file called model that get cash and then store it and then reload it back when you instantiate your model again, on the next startup, very cool. So I

</p>
<p><strong>Jem Young</strong><br />
would just because I work at Netflix doesn't mean I'm the Netflix fanboy, I would argue that like, the downside of using Falcor is that introduces complexity that someone may not need if they have a very simple base web app. Because like Falcor, even JSON graph is like a different way of thinking about a problem that most people are familiar with rest. Everybody knows rest,

</p>
<p><strong>Ryan Burgess</strong><br />
it's also pretty straightforward to implement to like a REST call is a lot easier to implement, than probably Falcor is taking a lot more effort to implement Falcor. In in a project or app.

</p>
<p><strong>Ryan Anklam</strong><br />
It's abstraction over JSON. Right? Yeah, abstraction away from?

</p>
<p><strong>Jem Young</strong><br />
Yeah, so I say that because there's a lot of people that are just getting new to JavaScript listening to this podcast, and I don't want to be like, I got a project. A new for Netflix says like, I should be using Falcor right now. And then they'll get lost, try to implement it rather than like building something.

</p>
<p><strong>Anup Bishnoi</strong><br />
Yeah, definitely don't do that. If what you're if you're making a first web app, for example. Yeah. I mean, Falco solves a specific problem with scaling your web app across for performance and across a bunch of different sources of data, like microservices. Don't use Falcor, if you're making your first personal website. Now, you mentioned paying with bulk Falcor versus rest, and that's not that's totally right. It's basically an abstraction over rest, or an abstraction over making those networks requests yourself. And so that abstraction has a learning curve cost, and you gotta you got to know when it's useful to you. And specifically, that's why you want to be sure, these are the pros, this is what you get. And if that's not your pain, don't use Falcor.

</p>
<p><strong>Ryan Burgess</strong><br />
Right? Because you're adding another abstraction that you're gonna have to deal with. Yeah, no, that makes a lot of sense.

</p>
<p><strong>Jem Young</strong><br />
So we've so we just said, like, summarize. If you don't know if you need Falco, or then you probably don't need Falcor. I think if you're at the level, you're like, I have a lot of like, I need to build a scalable system with lots of different data layers in there. And I want to unify that. Yeah. Falcor is a good approach.

</p>
<p><strong>Anup Bishnoi</strong><br />
Yeah. I mean, Falcor solves complexity with having all those database or micro services don't introduce Falcor as a complexity,

</p>
<p><strong>Jem Young</strong><br />
right. Yes. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
That's actually a perfect explanation is don't introduce it as a complexity. Yeah, it's a fair summary of why when to use it and when not to

</p>
<p><strong>Jem Young</strong><br />
we don't do that a lot front end, like we just like implement tools because someone said, so yeah. Without thinking like this actually, like a lot of people. Webpack is over two pack sounds

</p>
<p><strong>Ryan Burgess</strong><br />
very doable. And it's like it's great. But oftentimes, when I start a project, I tend to not use it because it is adding more complexity than I actually need for what I'm trying to achieve. Yes. Is Webpack Great. Is Falcor. Great. Yes. But is it something that I'm going to implement in every project? I do? Probably not. Because those are complexities that I just don't want to deal with. And it's probably not the benefits probably not there yet. I

</p>
<p><strong>Ryan Anklam</strong><br />
mean, we see, at Netflix we see people do take home exercises for interviews. And they'll come back with Webpack, Babel Gulp, and five lines of JavaScript. And they clearly spent all their time on tooling and setup and then didn't think about the actual problem they're trying to solve, right?

</p>
<p><strong>Anup Bishnoi</strong><br />
I feel exactly like that. For front end, UI frameworks do. I mean, simply simply, everybody is adding react even to their static pages. As soon as you add react, and you would look up the first tutorial on using React, it includes Webpack, it includes Babel, it includes a bunch of all the other stuff that you don't know about when you're starting out. And if anything breaks, you have no clue what broke. I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
one also, I think, to Ryan's point, too, is like sometimes you end up spending so much time setting up your environment, just just to say, Hello, world.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, and you're exhausted by the time you get this environment set up, you're not ready, right? Right, the rest of the code that you wanted to write in the first place here,

</p>
<p><strong>Anup Bishnoi</strong><br />
which is why it's great listening to this podcast, because it tells you all this stuff you should have known before using that new. So

</p>
<p><strong>Ryan Burgess</strong><br />
another one comes up. And actually, I was just at a conference in San Francisco called react AThon. There was a lot of presentations on a library called Graph QL. Which is this similar to Falcor. It's created out of Facebook, I'm interested to hear like, what what are the differences in similarities that Graph QL and Falco are trying to solve. So Graph

</p>
<p><strong>Anup Bishnoi</strong><br />
QL came out about, I mean, around the time that Falco came out into open source, and I'm sure they had been working on it before open sourcing it as well. So Netflix started on solving the same pain, but took a little bit of a different approach, and solve its own pain first, and then finally, open sourced it what you see with so I do want to mention that graph, QL seems to have picked up a lot more steam than Falcor. And is kind of emblematic of this going beyond rest as as as a domain, and Falcor is solving that pain for Netflix. And for anybody else who wants to use it, use it in a slightly different way. What's the difference? What's the difference there? So, Graph QL takes a very heavily statically typed approach, where, which is good in many ways. So the contract between the client Graph QL server, cheers, yes. And the backend services is set in stone using the statically typed schema that you have with Graph QL. That is where the main difference with Falco lies. So Falcor, intentionally takes a gradually typed approach. It's not statically typed. And you can add constraints. But you don't have to make the entire schema and each value have types. Now, that gives Netflix a specific advantage for Netflix's use case. And your mileage may vary. But that is the one of the key differences. I want to point out that what is this flexibility advantage that that I'm referring to here. So with Graph QL, say you change the backend service to now provide a separate different type, he changed the type of your API from the back end service, you have to change that now in your graph, QL server and your client versus with Falcor, which serves as this this middleware layer between the back end services and the client. Cheers, cheers. You don't necessarily have to do that the middleware layer can simply be moving values as is to the client app.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. Definitely client was a good choice for words here. Yeah.

</p>
<p><strong>Anup Bishnoi</strong><br />
I don't know who came up with it.

</p>
<p><strong>Jem Young</strong><br />
I think what's more interesting is that Graph QL and Falco came out about the same time which means like two different companies came up with similar solutions to solving like a complex problem of how to access data across multiple sources.

</p>
<p><strong>Anup Bishnoi</strong><br />
Yeah, and then that keeps happening right like these tech companies, they run these issues with complexity, they have these problems and since there is no given solution, they start on those problems and come up with these different approaches which become kind of the the competing specs and finally, way in the future something standardizes and then the world simply uses that like maybe rests that's a pretty good model for for innovation to in my opinion, like felker's main problem to solve was this complexity that you see Only at scale. And so it had to originate at companies which are facing that pain. And it's it's great that there's competing approaches, and there's following for these different approaches.

</p>
<p><strong>Jem Young</strong><br />
It's more of like validation of the idea. If two smart companies came up with the same idea essentially means like, it's a pretty good idea.

</p>
<p><strong>Ryan Burgess</strong><br />
One, I think it's really funny because I actually remember, like, I was at Netflix, when we released Falcor. And I remember we were, we started to realize, I think, just before we released it, that we started talking with Facebook before they're released graph. QL was like, Wait, we really kind of solved similar problems here. But it is cool. It's like we both kind of came out this problem and really came out with something that that similar but a little bit different.

</p>
<p><strong>Anup Bishnoi</strong><br />
Yeah. I mean, it takes it takes the industry forward in that in that domain, absolutely. Have network access,

</p>
<p><strong>Ryan Burgess</strong><br />
you also don't want to have just one solution either. Because like there are, there are subtle differences between the two. And so I so I've always made the joke is like, if you're building a Facebook application, go use Graph QL. If you're building something that's more like Netflix, go use Falcor. But I mean, that's not an easy, that's not the perfect answer. But yeah, that's one way to look at it.

</p>
<p><strong>Anup Bishnoi</strong><br />
I mean, as long as you know, the trade offs, you're making both cases. I mean, you can I think you can make a good choice. Yeah. I still

</p>
<p><strong>Jem Young</strong><br />
think most people don't either. And, but I can I still see people giving talks on like Graph QL. And they give it at conferences, but Facebook and Netflix are at a scale that most people will never achieve. And they're just so quick to throw data handling libraries. On top of that, it's just, I don't know, I still like, just preach caution. It's like, know what you're doing before you get into it. Because it's hard to back out of it. Because you've like, invested so much of this.

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. And and you kind of once you start investing a little bit of time, it's like it just becomes a slippery slope. Yeah, you can you can you have to do that. So yeah,

</p>
<p><strong>Anup Bishnoi</strong><br />
yeah, guys use document dot get element by ID. Yeah, everyone works. Like,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, it does work. It still does. And it worked like years and years ago, and it's still gonna work for a while. So makes a lot of sense.

</p>
<p><strong>Jem Young</strong><br />
Not that we use IDs are very, very heated.

</p>
<p><strong>Ryan Burgess</strong><br />
If you just open the top looking use IDs, yes, just don't style the IDs. Put a class on that for your CSS, don't tell Brian hold. But Brian Holtz and I have had this discussion many, many times. And I feel like I've won this argument. But it's like don't style an ID. It's a painful, painful thing to be doing. If you want to reference an ID in from JavaScript, go for it. I'm all for it. But yeah, don't do it on don't style it.

</p>
<p><strong>Jem Young</strong><br />
How do you feel about Web Fonts? Right.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's the right ran out there. And yes, I'll do that some other day. What can we expect in the future of Falco? I know a newbie have been working on this for a while, there's new features, what what are some things you're excited about?

</p>
<p><strong>Anup Bishnoi</strong><br />
So we're working on pushing Falcor back into the stack further back. So right now Falcor, was started out mainly as a client server thing she has. But we are pushing it back in the stack now. And involving more and more Falcor. Between server communications as well. And that's still ongoing. There's, there's more details coming soon. Like maybe, you know, I don't want to give a timeframe, but soon, and that's really exciting, like going back into the stack will file called as a network protocol. It kind of validates the idea that we began with, and that is a tremendously exciting new avenue where these concepts of thinking of services instead as data are going to be really useful.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Yeah. And so that's, that's a TBD when we're gonna see more of that, or Yeah,

</p>
<p><strong>Anup Bishnoi</strong><br />
I mean, yeah. TBD. But soon. I mean, it's, it's nearing to a good point where we can pull it out and show it off to the world.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. Yeah. So you need to like go back to work on that. We shouldn't be interrupting you and your work right now. But that's exciting. I'll be really cool to see. What advice would you give people who are starting with Alcor? You know, there's definitely people that are listening that I think there are probably we said, you know, be advised when you should use it, but there are probably people that would value from using Falcor. So what advice would you give them getting started to

</p>
<p><strong>Anup Bishnoi</strong><br />
get started first RTFM? Yeah, then maybe just just like the first the first thing that you have to think of is whether it's the right tool for what you want to achieve. Yeah. And to help that thought process, maybe just familiarize yourself with this mind shift that it brings to the table, which is thinking of services as a schema for data. Now, the difference can Like conceptually brought down to a function call versus an object REST and RPC. In the old days, they used to be RPC more specifically used to be basically a function call. Yeah. And that's what it's literally named after remote procedure call. But now, Falco is letting you do what that function call used to do, but letting you think of it as if accessing properties on an object. And that's the mind shift that this brings. I mean, taking a simple use case that we recently had with with search, for example, search seems to be very clearly clearly something like a function call where send in your search string, and get the results back. That's, that's pretty obvious. But with Falcor, the mind shift brings in the following implementation, which we actually use at Netflix, which is, imagine an object with keys being the entire possibility space for a search string that a user could type. I mean, you don't have to actually have such an object. But as us as schema or as simply as a mental model. Imagine an object searches, and then keys, A, B, A, B, C, and E, D, F, l, all of these as different keys with their value being the search result for that key. And this is how you actually access search results using Falcor. You just ask for the value against the key, which is your search string. And since Falcor, on the server, lazily evaluates the JSON graph object, it's totally possible to do this and performs functionally in the same way that a call web service call would behave, or would perform, providing the extra benefits that now this is data and can be cached. And the caching characteristic of this data can be much more granularly defined. So for example, maybe you decide that a search for the keyword space has these results. And there's no new title on Netflix that has come out with that keyword. And so that can be cached for longer, versus a search query for the keyword lost. Maybe there's much more titles coming out with lost in their name. And so that can be cached for a different amount of time, then the result floor space, and it gives you much more granular caching advantages.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Awesome. Anything else that you would add for someone getting started? Is there some like good spot where they can get documentation? Or where how does someone get started with Falcor?

</p>
<p><strong>Anup Bishnoi</strong><br />
It's just exactly where everything else that Netflix open sources lives that it's netflix.github.io/falcor. And even if you just Google Falcor, fa, LC o r, it should take you to the right place.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Great. At the end of each episode, we like to share pics of things that we found interesting that we want to share with our listeners, let's go around the table and share our picks. Do you have pics to share with our listeners?

</p>
<p><strong>Anup Bishnoi</strong><br />
I do. I do have this amazing paper I've just finished reading which is the IPFS peer to peer file system. And I'd definitely recommend checking it out for everybody who can grow kit. It's links is in the show notes. And IPFS is this interplanetary file system, which is a peer to peer way of distributing files and is kind of the center of the decentralized internet movement. So to say, that's really cool. Yeah, there's, there's this Netflix show I've been watching recently called everything sucks. It's just one season. It's amazing. I mean, my me and my wife, we watched it together, all of it. And it's just it's such a great throwback,

</p>
<p><strong>Ryan Anklam</strong><br />
especially if you've grown up in the 90s. That show was awesome. There's so many good 90s references.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I saw the trailer for it. And I was like, I wanted to watch it because it was all 90s base stuff. So I'm glad to hear both of you say it's so good.

</p>
<p><strong>Anup Bishnoi</strong><br />
It's awesome. I actually I grew up in India. Yeah. And we didn't have all this fancy high school stuff going on in our life back when we were in high school in India because it was more about studies it was less about relationships and so on. I mean this to be subtle about it, but the show shows how we back in school used to think of the Western world. Yeah, and it's just very nicely done.

</p>
<p><strong>Ryan Burgess</strong><br />
Was the picture painted pretty well then is like that.

</p>
<p><strong>Anup Bishnoi</strong><br />
I mean, the picture that we had was a was a rough, very rough sketch versus this is a nice, nuanced, detailed look that makes me feel better and makes me feel really good about high school relationships, actually.

</p>
<p><strong>Jem Young</strong><br />
All right. Well, I got bad news for you all. You know, everything was canceled. I guess you didn't know. Yes. That's what's cancelled after one season. Sorry, man. I just ruined your day. Can I say fuck? Yes, you can. Everything Yeah. Shit. Yeah. All right.

</p>
<p><strong>Ryan Burgess</strong><br />
So I still want to watch it. But that's actually depressing is that I won't I'll get into it and be able to see I've heard the

</p>
<p><strong>Jem Young</strong><br />
the season doesn't end on. Like, it doesn't end it's more of a open ended ending.

</p>
<p><strong>Anup Bishnoi</strong><br />
Damn. There's this podcast. The third pick the final pick that I have. Yes. There's this podcast. I've been listening to pretty religiously called the daily. I mean, it's, it's in front of it. Yeah, it's on iTunes Top list as well and so on. But it's just really, really good. It's, it summarizes what's going on in the world and us specifically in a very humane way. It like, focuses on one topic gives you all the sides. The guy Michael Barbaro is just an amazing. Yes. Has an amazing voice.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Yeah, I've heard it a few times is very good. I like that one. Jam, where do you have?

</p>
<p><strong>Jem Young</strong><br />
I have three picks. The first two picks are kind of an old one. I like to go to the gym and I like to work out. But like I'm a guy I sweat a lot. So I use Bluetooth headphones, which are just like in air they fit in and you know, I don't get sweaty or anything. Yeah. But the problem is I like I go through headphones really quickly and it's like break or lose them or something like that. So I found these headphones called Jarv and motion. They're $10 and they're fantastic. They're just bluetooth headphones. Just the dangle the dongle just plugged into here really easy. But on their own, they kind of like just okay, but I found these complete ear plugs complete mix. Like yeah, earbuds for phones. But you put them together and it's like a fantastic sound quality for $20. You have like these probably 100 $200 sounding bluetooth headphones, and they're fantastic.

</p>
<p><strong>Ryan Burgess</strong><br />
So they're probably better than the air pods is what you're saying

</p>
<p><strong>Jem Young</strong><br />
they're better in air pods. I don't see how people workout with air pods like this. Nobody gets sweaty at the gym. So as a side note, if I see anybody in gym wearing like full cup Beats headphones, I assume you're not working out because like, men get sweaty and like just ruin your headphones. So why would you wear those to the gym?

</p>
<p><strong>Ryan Burgess</strong><br />
That's probably me. I'd wear those because I probably am not working out hard.

</p>
<p><strong>Jem Young</strong><br />
I give my girlfriend grief sometimes because she'll like come home from the gym. Not sweaty at all. It's like did you

</p>
<p><strong>Anup Bishnoi</strong><br />
like yeah, that's really me.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I watched the TV and I'm like, Yeah, I'm more into that.

</p>
<p><strong>Jem Young</strong><br />
I'm one of those people on the treadmill. It's like walking slowly, walking, walking. Um, Easter

</p>
<p><strong>Ryan Anklam</strong><br />
there.

</p>
<p><strong>Ryan Burgess</strong><br />
I want I'm not.

</p>
<p><strong>Anup Bishnoi</strong><br />
So I want to share a life hack that we recently figured out with airports. So we have we have a one year old baby. Yeah, my one year old daughter called either. And my wife and I, we want to play music in the car, but we can't play it because she is sleeping or just going to be very cranky about some music. So what we do is we share one piece each of the airport. And we play music in the car with the airport, and the baby doesn't get to know it. And we just this is a brilliant life hack that I don't think has been publicized enough.

</p>
<p><strong>Ryan Burgess</strong><br />
No, that's pretty good. I should actually try that though. Again. I've also had my son listening to rap music. He like quieted down when hypnotized. Biggie was like his biggest like song like and he still like if he's upset. I turn that on in a second later. He's like happy home like is great.

</p>
<p><strong>Anup Bishnoi</strong><br />
That's really good to know because we have such a song for my daughter and I am really worried that she's gonna really really hate us for not knowing why she likes the song so much.

</p>
<p><strong>Ryan Burgess</strong><br />
The ends probably because you're like we just kept playing that for Yeah,

</p>
<p><strong>Anup Bishnoi</strong><br />
it always cheers her up. It's It's the song. It's an it's an it's a Punjabi Indian song called London to Makkah. Oh, that could be my

</p>
<p><strong>Ryan Burgess</strong><br />
fourth week. That's a fourth pick. I like it. Yeah. Right on from a

</p>
<p><strong>Jem Young</strong><br />
movie called queen. My final pick. No, I don't have any life hacks. I should put more life hacks in there. Yeah, like my final pick. I usually do an episode or segment called Valley silicon where I point out absurd things that happen in Silicon Valley, just just because people have too much money and they do SAROS is a good example of like, a $700 machine that like shouldn't exist. But I'm gonna suspend that for this week because like I have a show that just like made me so irate. It's on Netflix. So it's like my Netflix anti pick. It's a show called fastest car And it's supposed to be sleeper cars versus a supercar. And you're like, oh, yeah, that's a good premise.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I bought into it. Yeah. watched it. And yeah, well let you finish.

</p>
<p><strong>Jem Young</strong><br />
Yeah. So like, we're all like motorheads we like we enjoy our vehicles. And I like shows about cars, but the show is just like, it's terrible. It's it's like 45 minutes of like backstory, and then it's like a 32nd race at the end, and it's just such a letdown. You're like, why? We could have done this in a 15 minute show and like men just happy. Also, they don't define sleeper cars properly. It's like any car that's not a supercar. They're like sleeper car. I'm like, the cars to turbo scan engine and like a giant Gnostic. That's not a sleeper car. A sleeper is a car that does not look fast, but is fast. Yeah, sorry. This is this is my rant even.

</p>
<p><strong>Ryan Burgess</strong><br />
Even the first episode they had a man like a minivan. It's like, okay, maybe that could be a sleeper, but it's like slammed to the ground. It's got rims. It's like, come on. Yeah,

</p>
<p><strong>Jem Young</strong><br />
beta sleeper. It was like the supercharger sticking out of the engine. I'm like, that's not a sleeper car. It's like an automobile Cutlass with a supercharger. I know that car is gonna be fast. Not a sleeper. Sorry. That's my rant. That's what I use the podcast for. For rants. Mainly,

</p>
<p><strong>Anup Bishnoi</strong><br />
I learned that. I didn't know what sleeper meant, and I know it now.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, if you watch that show, they don't do a good. definition is a lot more of

</p>
<p><strong>Jem Young</strong><br />
the way I would picture it. Yes. Sorry. Sorry for my rant, everybody.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, and jam rad. Ryan, what do you have for us?

</p>
<p><strong>Ryan Anklam</strong><br />
So my first pick is a website that I'm developing right now. I'm using React Webpack, Babel, Redux, and it's www dot save everything sucks.com. Let's all go there and urge our employer to save that show. Cuz it is awesome.

</p>
<p><strong>Jem Young</strong><br />
It's not a real website. Everybody

</p>
<p><strong>Anup Bishnoi</strong><br />
typed it.

</p>
<p><strong>Jem Young</strong><br />
We all just, it is not,

</p>
<p><strong>Ryan Anklam</strong><br />
you will not yet you better better domain. That domain. But before this website, or this podcast goes live. Alright. My second pick is a book called The Orphan masters son. I'm usually a big sci fi reader. But this book absolutely blew my mind with how well written it is. It's a book about loyalty, about duty about love. And it is just an amazing book. I highly, highly recommend this book. And the second pick his movie called The Barkley marathons, the race that eats its young. And it is this race that happens up in the mountains. I think it's Tennessee, frozen head State Park, and it is 520 mile loops. And you get 60 hours to complete it. The race route itself is unmarked. It's only partially on the trails. And only I believe 15 people have ever completed this race. And it's been going on for years and years and years. And it's just the documentary shows just how hard this race really is. And brutal it really is. And it's it's just an amazing thing to watch. And just to see how hard these people have to try to finish even a single loop. And what they go through during this race is amazing.

</p>
<p><strong>Jem Young</strong><br />
I've seen it twice. It is an excellent documentary like worth watch.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm excited to see it. I'm like I'm really intrigued.

</p>
<p><strong>Anup Bishnoi</strong><br />
What's the name again?

</p>
<p><strong>Ryan Anklam</strong><br />
The Barkley marathons. Um, we used to have it in Netflix. But it's out a window right now. So hopefully he comes back. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I was just gonna ask him like, is it on Netflix?

</p>
<p><strong>Jem Young</strong><br />
It's It's like seeing people push to their absolute limit, like as far as I can go and then past it. Wow. Like the people that finished are just like, staggering cross a line. Like they don't know what's going on. Because they've been up for how many hours you up like 30

</p>
<p><strong>Ryan Anklam</strong><br />
to 60 hours to finish. Finish five loops.

</p>
<p><strong>Jem Young</strong><br />
And there's people that finished like just in time so that they've been up for like three or four days, like running up a hill. Yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
one guy finished the race. And I believe it was within a minute of the cut off so he did not get credit for it. 60 Wow, just walk up to the line. And I feel like I'd

</p>
<p><strong>Ryan Burgess</strong><br />
want to just drag him across the finish line. Like I'm like help come help you.

</p>
<p><strong>Jem Young</strong><br />
My favorite thing is the every year they invite so it's invitation only but or you can apply but like they have to select you. But every year they pick someone who has absolutely no business being there, like this person is not qualified to run this race. And they put them in there anyways. Just to be mean that Pourcel that's

</p>
<p><strong>Anup Bishnoi</strong><br />
yeah, it's a feeling that could be Ryan.

</p>
<p><strong>Jem Young</strong><br />
Yeah, that would definitely should sign up or

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan ankle Yeah, sign up. I'd be the poor sucker that won't even make, like look up the mountain like

</p>
<p><strong>Ryan Anklam</strong><br />
in the very intimidating race.

</p>
<p><strong>Jem Young</strong><br />
He would, he would.

</p>
<p><strong>Ryan Burgess</strong><br />
There you go. Well, let's sign them up. Alright, two picks. My first one is actually a Mac application that helps a lot for like meetings if you're in a lot of meetings ends up being a little tooltip. At the top of your Mac screen. The app is called up next. The cool thing As it shows you what your next meeting is how many minutes till your next meeting. But it's also cool as you can click on it, and it does a little drop down, that shows you all the meetings that are coming up. And you can also click on one of them. If you're using Google Calendar, it will throw you into the into the Hangout right away. So I find that really useful because I hate clicking into Google Calendar, then like clicking the Join Meeting, this way, it just like throws you right in, it's really, really cool. I found that useful. I've used it for a couple of weeks now and have found it really useful. And then my second pick is electron which is really, really cool to be able to write Mac apps, I'd never really looked at it as I guess I just never really had the use for using it. And I'd recently been building an application that really made sense as a standalone Mac app. So I was like, Oh, give electron and try. Super easy to get spun up and running on it. Like a Hello World took me a couple of minutes and I was up and running. I didn't have to have Webpack and Babel and everything installed, it was it was pretty quick and easy to get up and running. My only beef with it is I wish the documentation was a little better. I feel like a lot of open questions like I would did a lot of searches when I would have problems. And there was not a lot of like great answers or like you had to really search for good answers. And I feel like it like simple problems that they could have just addressed. But other than that I've been I've been pretty impressed with it. What blows

</p>
<p><strong>Anup Bishnoi</strong><br />
my mind about electron is it lets you treat a webpage like a Mac app. And then you include a script tag in that web page. Yeah, inside the code for that script tag saying, say, slash main js. You can have no JS code inside script included as a script tag. That's, that's pretty it's

</p>
<p><strong>Ryan Burgess</strong><br />
it's pretty, it's like pretty cool. And it acts as like a node server and talking from the client cheers. Had throw that in there. To the the node server is like you're kind of using like a message bus to talk between the two. It works fairly well. But it's interesting. So I definitely recommend trying it out. I know, a lot of times a web app is actually sufficient. So it's like why Why make a Mac app. But if you have a use case for it, it's worth trying out. It's really cool.

</p>
<p><strong>Anup Bishnoi</strong><br />
Maybe you just want to suck everybody's RAM like slackers. The I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
that's a that is an electron app. And that's a good way to put it. Yes, I won't I won't even comment on that one. Before we end the episode. I want to thank our guests Anoop, for joining us. Thank you so much as a pleasure having you. Where can people get in touch with you?

</p>
<p><strong>Anup Bishnoi</strong><br />
I am async Anoop on Twitter and GitHub. I am I identify myself as quite a bit of a J. S guy. So that's in my brain works like a j s asynchronous callback as well. And I never know what time it is for real. Yeah. So my Twitter handle is async. Anoop. That's a s y n c, a n up

</p>
<p><strong>Ryan Burgess</strong><br />
right on before we end the episode also, where can people get in touch with the panelists, Ryan?

</p>
<p><strong>Ryan Anklam</strong><br />
I am on Twitter as bittersweet Ryan.

</p>
<p><strong>Jem Young</strong><br />
I'm on Twitter as at Jem Young,

</p>
<p><strong>Ryan Burgess</strong><br />
and I'm on Twitter at Burgess D. Ryan. Thank you all for listening to today's episode. Make sure to subscribe to find on happier podcasts on whatever podcast catcher you like to use. Follow us on Twitter at Funen hhw. Any last words?

</p>
<p><strong>Anup Bishnoi</strong><br />
Any podcast client you mean?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Cheers.

</p>
<p><strong>Jem Young</strong><br />
Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a missed opportunity.

</p>
`;
        return transcript;
    };