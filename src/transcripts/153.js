module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. We've been hearing a lot about the new framework remix and thought it would be an interesting topic to dive deeper into and learn what the benefits of leveraging Remix in your project are. So we have Shawn day person joining us to talk more about remix Shawn day. Do you want to give us a brief introduction of who you are? What you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, sure. Thank you for having me on here. I'm Shawn day person. I am a senior software engineer at Netflix actually on Ryan's team. Been here about 10 months now. Just hit my 10 month anniversary a couple of weeks ago, and outside of Netflix's stuff, I am also an egghead instructor. I'm currently working on a course on migrating an enterprise app from JavaScript to TypeScript. I speak I spoke at remix cough. So I'm a conference speaker. And I'm also a mom. And that takes up most of my time. My favorite Happy Hour beverage is I'm a big whiskey bourbon person, but I'm very just into the basics Jack Daniels, and Diet Coke. Like it can't be regular Coke. I like the taste of Diet Coke better.

</p>
<p><strong>Ryan Burgess</strong><br />
Interesting, just like the less sugar with the like mix of the bourbon or

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, and it's flatter. So I have this thing about bubbles. And I don't like soda. i But Diet Coke is a lot less carbonated. It feels it feels flatter. So that and I don't like all the sugar. I don't like sweet drinks. So I think even if there was no alcohol content, I would drink Diet Coke and and Jack on its own.

</p>
<p><strong>Ryan Burgess</strong><br />
Just Fair enough. Yeah. And yeah, I think like, this is a great topic for you to talk about. Because you attended the remix conference and speaking at it. What was your talk that you gave at remix?

</p>
<p><strong>Shaundai Person</strong><br />
It was called remix as a browser framework. And so the theme of the of the talk was talking about how remix gets us to interactivity faster. And so I'll go more into it. But mainly as a UI engineer, I'm very in tune with how users can interact with the apps that I'm using. And that's really what what the whole job is is. And so interactivity. What I mean by that is just how the relationship is between your users and the actual app that you're building. So that could be like, what happens when they click a link? What happens when they push a button? how responsive is it? How quick can they get to that level of interactivity and remix puts optimizations on both initial page render, as well as the navigation between page routes to make your app seem almost instantaneously interactive. So that was it was fun. It sounds kind of very technical. But I was dancing at the beginning of the talk. And I wattled and so it's gonna sound weird unless you watch the actual talk. But there was a lot of lot of movement, a lot of learning by by watching my strange movements. And the talk.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that. All right, well, this is perfect topic then. And before we dive in, let's give introductions of today's panelists. Stacy, you want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a senior front end engineer on film jam young

</p>
<p><strong>Jem Young</strong><br />
engineering manager at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm an engineering manager at Netflix. In each episode of the front end happier podcast. We love to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is? Route?

</p>
<p><strong>Jem Young</strong><br />
Routing, routes,

</p>
<p><strong>Ryan Burgess</strong><br />
Route, routing router, I'm sure this word is coming up like

</p>
<p><strong>Shaundai Person</strong><br />
I was so not strong.

</p>
<p><strong>Ryan Burgess</strong><br />
I love it. That's great. All right. Well, before we go deep on this topic, I feel like we maybe should start off with what is remix? I mean, we said at the top that it's a framework. I mean, it's a JavaScript framework. But what is remix?

</p>
<p><strong>Shaundai Person</strong><br />
So actually, it is not positioned as a JavaScript framework. It's positioned as a browser framework. The big difference. Yeah, the big difference is that if you think of a JavaScript framework, you were thinking like React, view Angular, and those apps are using JavaScript as the foundation. So any app these days, whether you just spin up a quick little homegrown, personal page, or whether it's an enterprise application, like a Netflix, you're using a framework like React, it's going to take the fundamentals of JavaScript, abstract those out in some reactive way, and then turn it into whatever you've designed as a, you know, beautiful website. Now most apps these days are very heavy in the amount of JavaScript they use, and they have these large JavaScript bundle sizes. So the issue or where us as UI engineers need to focus is on performance. And what happens if your user doesn't have this super high speed internet connection, or, you know, if they're the example that I used in the talk is just like if you're stuck at the airport, and you're just trying to make a quick change to your ticket. And obviously, you're just using internet that everybody else is using, right? So where the optimizations are for performance is either reducing the amount of JavaScript that you have, or finding ways to do code splitting, bundling and things like that to navigate around these slow networks. remixed by contrast, is a web framework or a browser framework. And so rather than using the fundamentals of JavaScript, we're using the fundamentals of the web. So it's building on things like HTTP and HTTP caching HTML browsers to make this app that could be performant, no matter what, what level of internet you have, you don't have to have like a modern browser. And so what that allows your users to do is there's this concept of progressive enhancement. And I'll, I'll go more into that in a little bit. But progressive enhancement was something that I hadn't really been exposed to being in the React World, it's something that I think the dinosaurs and see plus

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yes, I know.

</p>
<p><strong>Shaundai Person</strong><br />
So, okay, so you know what I'm talking about. So progressive enhancement is, the analogy that I use is like, if you're using if you have a meal, right? So if there's eating to live, right, and this is just the nutrients that come from your food. So you could have a meal that's just like a bland piece of chicken, like boiled chicken, with no seasoning on it. And then a vegetable that's maybe raw, like raw broccoli or something like that, you can eat it, you'll get all the nutrients from it, you'll live, right, but it's not the most enjoyable experience. Now, your users with slow internet connections, with slow internet connections, are eating this meal to sustain themselves, like they are able to use your app using these web fundamentals. But it's not the most pleasant experience, but it's functional. So I can update my ticket. If I'm stuck at the ATL airport, right? With progressive enhancement. Everybody has a functional app. But if I do have a modern browser, if I do have really high speed internet, I can benefit by adding on these little sprinkles of seasoning. That's the JavaScript that we have. So we have like these really smooth page transitions we have like, all different kinds of CSS cool little tricks, and things like that. Like, for example today. At work, I'm adding in some confetti to a congratulations page on an app that I'm building for work. So my users with modern browsers are able to see that and so long story long remix allows all of your users to have an at the bare bones have this functional experience. But other users can also take advantage of the additional features that you've added if they have like, an upgraded browser, which is awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, progressive enhancement is honestly something that we should as front end engineers be thinking about all the time, like it's like, especially when we're, you know, building for mobile or, you know, building for low latency. It's like, yeah, you want your users to be able to have a fast experience, were they able to get in, get out. And those that extra sugar have like the, you know, confetti, like, Yeah, you don't need that. But it's delightful. I'm not complaining when I have that, but I don't need it to get the job done either. Which is really cool.

</p>
<p><strong>Shaundai Person</strong><br />
Definitely like and if I'm stuck at the airport, frustrated, and my app is super slow, because it needs to download this confetti library. You know, arguably that's not worth it. You know, it's great when I'm sitting at home working from home and, you know, adds that little sprinkle of Old Bay or whatever seasoning you put on your chicken, but definitely not necessary.

</p>
<p><strong>Jem Young</strong><br />
today. I'd love to use the airport analogy because that's like exactly when you want the website or whatever you're trying to do quickly, like complains about takeoff to five hour flight. You're desperately trying to download that podcast or like download a book or something like that. You're like, come on, come on, click click, click Laquan I need every kilobyte of speed to get this thing done because I don't want to be bored and then I love that like you don't want to deal with someone and you know their 10 megabyte JPEG because they're like, oh look great on my iMac and my like awesome gigabit internet. Like I don't care about that. I just care about like the fun functionality. That's why that progressive enhancement is nice. Because like it's there, if you have the ability, but if not, like, just give you what you need. That's a really great, great analogy.

</p>
<p><strong>Shaundai Person</strong><br />
Thanks. Yeah. And so I, a lot of folks will ask, like, why use remix? Or should I be using remix or react? And I say both. Like, it's not a matter of remix, or react, it's a matter. And honestly, so remix is built off of React router, which obviously is optimized to work with React. And so it leverages thing,

</p>
<p><strong>Stacy London</strong><br />
did you just say, router? Yes,

</p>
<p><strong>Ryan Burgess</strong><br />
she did up cheers. Here's

</p>
<p><strong>Shaundai Person</strong><br />
here's good catch. So it's based off of that react library that I just discussed. So it's optimized to work with React. And what it does is allows you to use these fundamentals of the web, to do things like forms, and all of the things that are very important to your users. And then you can also add react. And then as we all know, React is not only giving your users a better experience by giving them all of these beautiful features out of the box, the code splitting and the image optimization. But also, as a developer, we know how to use React. As react developers, I guess, just say, we know how to use React. And it includes things right out of the box that help us to work much more quickly. And to get that highly optimized site with lower levels of code. So overall, I would say remix, remix and react together is what makes the world go round.

</p>
<p><strong>Ryan Burgess</strong><br />
actually really liked that to that. I think, in the past, we've always like Gone framework to framework to framework, and it always gets better. Like there's usually incrementally something better that comes with one framework. But in this scenario, it's like, well, no, we're not trying to replace, like React, which actually reacts a library to I'm using framework like all over the place here. But it's, you know, you're not saying like, oh, oh, yeah, don't use React anymore. Don't use view anymore. We're saying like, what's missing with the current library or framework? And what can we do to enhance that. And that, to me is really great, not just for the user progressive enhancement, but even for the developer, like I think about that, too, is that you're not having to learn from the ground up like a brand new framework, just because it's the hot new thing. And it gives you some little additional feature, it's a little more performant, or whatever it is, it's an optimization. And I really liked this like direction that we're headed

</p>
<p><strong>Shaundai Person</strong><br />
100%. And I was having a conversation with actually the folks who started REMAX and we were talking about what we thought the future of the web would be. And my hope, my speculation is that there will be less divisiveness between different frameworks and libraries, like there's always a new framework, a new something that's coming out that people have to learn. And it's like, okay, well, then what's the difference between this and that? And when would I use this? When would I use that? And I see, if we move in the direction where things are more focused on what's optimized for the web, what's optimized for browsers versus what's optimized for enterprise versus personal project versus blogs? If we just focus on what's optimized for the web, which is what everybody's using as their, their plate for the chicken and the broccoli, then we can kind of merge things together, it's not going to be like, should I use React? Should I use view? It'll be like, how can I use this with JavaScript? Or, you know, whatever I'm using? Or how can I merge the two together? So I think it'll be less of a segregated environment. Oh, this is what my hope is. Speculation.

</p>
<p><strong>Ryan Burgess</strong><br />
So I believe you've mentioned a few as we've been talking, but what what are some major benefits that would make you want to use remix?

</p>
<p><strong>Shaundai Person</strong><br />
Um, so yeah, the big one I would say is that progressive enhancements, so it provides that better user experience, overall. Remix provides optimizations on both initial page load, as well as navigation between routes. And I said this before, so I'll kind of go deeper into what I mean. But if you want an app that is performant remix is a really good option for you. And again, it's not like you have to throw away all of React. You can use this along with your React application. So in the talk that I that I did at remix comm I talked about the differences between client rendering and server rendering. The big difference is or in my head One of the big optimizations that server rendering provides is that it gives your users something to look at while your page loads. So if you got to click a link to any website, right, let's say, Shawn day.com. And it's client only rendered, which if I'm using any JavaScript framework, by default is going to be client only rendered. So like, if I'm using React Angular view, when I click that link, I will have to download all of that big amounts of JavaScript that we talked about, as well as the data before the user can see anything. And so there's this period of waiting where the user is waiting, depending on how good Internet connection they can have they have, that waiting period can be like, a few milliseconds, not even something that they notice. Or it could be something a lot bigger, and obviously a lot more frustrating. So during that time, your users either seeing a blank page, maybe a loading spinner, if we've you know, made a couple of optimizations on it. But that's a client only rendered app, what a server rendered app allows you to do is one allows you to request the data from the server, which makes it a lot faster, I won't go into all the reasons why but it's going to be a lot faster. But also it gives your users something to look at while that JavaScript loads and while that that data is being fetched. And what they're looking at comes in the form of this server generated HTML. Now, because your app is built using a JavaScript framework, there's not a lot that goes into the HTML that's generated. So it's just generated based off of what you've written in your React code. So aside from just like basic links, that there's not much that the user can do, they can read the content on your page, but they can't like, there's not a lot of confetti that's going to happen or anything like that. Which is great with a remix what we so this is just using react with remix, because it's a web framework. Now, when your user is like, we talked about tuck stuck at the airport, they have a lot more options for things that they can do at this stage of the process, you know, they could fill out a form, instantly see the updates to their form, those mutations are able to, they're able to see like to do lists getting checked off things like coming, coming back to them. So they just have a lot more options, because it's it's optimized to work with the web. That's one thing. Another one of my favorite things. Oh, I'm sorry. So that's sorry, that's initial page load. Now, when you're flipping between routes, when you have a server rendered app, there's a whole, like, you have to go through this whole server rendering process. Again, you have to go through fetch the data, you have to grab the Java, download the JavaScript, again, you have to repaint the page with all the CSS and everything. That's actually not the case with the with a client rendered app. So in this case, like a client only rendered app is the optimal option when you're navigating between different pages and app that you've already built up.

Remix acts like a server rendered app when you're doing that initial page load. So it gives your users something to look at, but also like, gives it to them faster with more options. But then as you're navigating between page routes, it also it acts like a client rendered app where it keeps the JavaScript in memory the are sorry, the JavaScript is cached, the the data's cache, the CSS stays in memory. And the only date additional additional data that's fetched when you navigate between routes is only the data that changes with that route with the with the changing route. I'll give you an example. Because I talked a lot of technical stuff, that's kind of probably the cloud in your head if you're just listening. Um, so the example that I went through is, let's say you have an invoice app, right, and on the left hand side, you have a header or sorry, a navbar. That lets you pick between different invoices. And then on the right side, you have like the opened invoice right, and you're on invoice number two, you want to navigate to invoice number three, you don't need the navbar to change, you just need the invoice to change. And really you don't need the UI to change at all because the invoices are all going to like have the same layout. All you need is the data to change. I just need to see the sales numbers for this different invoice when you click the next route. Ticket drink guys.

</p>
<p><strong>Ryan Burgess</strong><br />
Good catch.

</p>
<p><strong>Stacy London</strong><br />
We I think we've missed about four or five so

</p>
<p><strong>Ryan Burgess</strong><br />
she was it's like it's like hard to interrupt that too.

</p>
<p><strong>Shaundai Person</strong><br />
So yeah, so as when you click to the next row cheers.

</p>
<p><strong>Stacy London</strong><br />
We're gonna go into infinite loop here.

</p>
<p><strong>Shaundai Person</strong><br />
If you navigate to page three, to invoice number three, all you need is the new data. So all remix will do is fetch the data for invoice three, and update the UI. And so by orders of magnitude is going to save your user tons of time. Rather than in a standard server rendered app, downloading all the data for the entire app user information, you know, every API call that comes along with the parents and children of whatever it took to render that invoice. We're only fetching the data that's going to change only the sales numbers for invoice three

</p>
<p><strong>Stacy London</strong><br />
to like, sort of on a continuum. There's like, our fully JavaScript client side only on one end of that sort of spectrum. And then we have like the old, like old fashioned server rendered stuff like Django, and rails or those kinds of apps. And then remix is sort of like somewhere in the middle. It's kind of like, taking characteristics of both and mashing them together. Is that a good way to?

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, think of it exactly, it's like taking the best of both worlds. That's, that's the way that I think of it is just when you're on that initial page load, it's going to adopt the behaviors of a server rendered app. So you're thinking of, you know, the, the way that we'd always done it, and then the benefits, why react became so sexy, is because when you're navigating between routes, it's just like updating the UI. So it seems like as you're clicking from, you know, invoice, one to invoice two, this is like a really fast transition, I don't have to go and do a bunch of stuff. And so remix adopts, at that point adopts the properties of a client rendered, you know, old, sexy, react, not old, but sexy react, navigating between different page routes, so it's a lot faster. The reason why remix does this is, again, it's based on React navigation library, I don't want to say the word but I want to talk about the, the big navigation library that's been around for eight years now. And so remix rabbit, okay, so if you take a standard react app, we're doing what's called component fetching. And this is the way that we'll fetch the data, we'll grab the JavaScript. So when you click a link to grab the information for the page, your React is going to walk the component tree and fetch the data for the components in the order that they appear in the tree. So you have like a parent, you'll have children of that parent, each of those children will have like siblings, and then they'll have their own children. So you need to walk the actual component tree, and then fetch the data in that order. What that leads to is a couple of things, but that it slows down the process one because the parent or sorry, the children have to wait for the parent to finish fetching before they can even initialize their fetches, which means that if like, say the parent takes has like a long, a big amount of data, and it takes a long time to return that data. Your user is going to be waiting for that like information. And there'll be a loading spinner for the child until that information is returned. And then also, the parents will, you know, block the children or like the ones that take a long time, we're going to block the next components from from initializing their fetches remix, because it's based on the React navigation library using the way that we can't talk about. Each component is actually coupled with a part of the URL. So it's called route fetching. So if we have our invoice app, and let's say that it's Shawn data.com/invoices/invoice, one, Shawn data comm is coupled with its own fetching logic, invoices is coupled with its own fetch its own separate fetching logic. And in actual invoice, one has its own additional separate logic. All of that can be fetched, all at the same time. So we don't have to wait for John de.com to come back before we initialize the fetch for invoice one. So it shortens the process. Everything can be done asynchronously, and reduces the time that it takes to get to that interactivity because users aren't waiting as long for the JavaScript and the data to come back.

</p>
<p><strong>Jem Young</strong><br />
That's awesome. It's it's got it all built in for you. Like I said, of saying defaults in guardrails, it sounds like

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, exactly. And so there's like, a number of different doors that it opens just by doing that. But again, like if you want to navigate to a different page, you don't have to start from the beginning and fetch the data for Shawn day.com and then all of the Parents again, it's just, I know what data is going to change from this UI to this UI. I know like, what CSS is going to change. And I'm only going to get the information for that part of the route that is changing.

</p>
<p><strong>Jem Young</strong><br />
That's such a great walkthrough on the benefits. But I'll ask you the other side, what are some of the drawbacks it? Is it like a lot of configuration upfront to get these benefits? Does it do it for you? Is it just a completely different paradigm that developers have to learn? Nothing's free in the web, I think we've learned

</p>
<p><strong>Shaundai Person</strong><br />
there's always trade offs. So I'll speak as somebody who is still learning and I think because I've been so react, I've been so JavaScript, it's a challenge to learn something new. There are things that look familiar to me. But there's a lot of stuff that I have to go back and do a lot of research for. And so to me, if I'm building a smaller project, like my own personal page, if I am doing that actual Shawn data Comm, I'm probably going to reach for something that I'm more familiar with. But because there are so many optimizations, for the long run, if this were a bigger enterprise app, I would absolutely take the time to learn it, if I'm building an app that's going to be used by multiple people have like really heavy amounts of data, a lot of JavaScript, because it's worth it. Now, if I was already, like, super familiar with it, like let's say, you know, maybe a year from now, six months from now, I might reach for as this is just where my level of comfort is. And, you know, I'll go for it. But remix is built in a way that it's very lightweight. So it could, it could work very well for a personal blog, personal site. It's just a matter of like, actually going through and, and learning the new API's and hooks. The other thing is that because it was released, I think it was November. So it's still pretty new, even though it's based on the fundamentals of React navigation library. It so it's stable, but um, remix itself as a framework, I think needs more documentation and more use cases. And so that was part of the part that's tricky for me is, you know, I have the advantage of having great relationships with the people who've built it. So I can just like, you know, message Kent, and be like, oh, you know, I have a quick question on like, what, how does this work like that? Or, you know, can you help me as I'm taking a peek under the hood? Not everybody has that. So I'm able to ask questions, but it's not something that I can easily find. And there aren't as many people as say react where you could just quickly find a YouTube video, somebody who's done gone through the same example. So I think those would be the big things also, of course, and these things take time, but I'm using just react people have built in, not necessarily plugins, but just like libraries that are meant to commingle with React, it has like a really good community. And remix is still working through adding that like of course, if you're using remix and react together, you can use anything. Like you can use tailwind, you can use CSS and J S, you can use all of the stuff that works with react with remix if you're using React, but there aren't as many things that are built specifically for optimizing remix.

</p>
<p><strong>Jem Young</strong><br />
I love how I can tell you're a senior engineer, because you have that experience where you're like, This is awesome. This is cool. It has all these benefits. However, I wouldn't build like an enterprise app on it or something like you're actually making money where you're going to have to support it amongst like 100 developers something like that. It's not ready for that. I love that call out I think we should do that more where we're like this is a cool thing Dino is awesome and all that or bun or whatever the new the new one is. That's awesome. But you know if you're talking about like building a real application as in production, traffic cut paying customers, it's not quite there yet. That's good to know.

</p>
<p><strong>Ryan Burgess</strong><br />
It's new Right? Like it's like it is fairly new in that that does take time it'd be the same thing is like I remember when Facebook announced react. It's like wow, that's so cool. And it's like but it takes some time like before you want to introduce it because yeah, your team needs to learn it right like that's a cost there's probably missing pieces to it that may not be ready for production level traffic there's a lot of things I jam you're calling out a great point. I think I'm just adding to it is that yeah, there's a lot of consideration that goes into it. So good. Call out one other thing that I didn't hear you mentioned too much on day but when I was reading about remix, I heard a lot of people saying funny enough that the router in remix was a bit confusing. I don't know if that's true in Aaron your experience at all. Cheers.

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, let's share I'm gonna use the word again. So get ready. I, I find that actual React router can be a little confusing to me too. Cheers. Cheers. Cheers. Okay. And this reminds me of one of the other things that I would say as things that need to look out for in the future. So one of the opportunities. So with React navigation library, I find that testing is very difficult. Because sometimes, in the apps that I've built, I'll typically, for example, I'll use the URL as the single source of truth. And I'll get the parameters from Okay, let's talk about Shawn data.com/invoices/like, let's say we're doing a search and invoices that contain company name is Netflix, right? I will have like company equals Netflix in the URL, and then use those URL params to initiate the search that search logic, you know, it'll go into the whatever we pull back as the search results, right. And the reason that I'm doing that is so that I can bookmark and say, this URL, like I could save the URL, I could save the search, or I can give this search to somebody else in Slack. And they can come up with the same search results, right? Testing on that is not so easy, because you there aren't anything that I if anybody has, please DM me, but I have not been able to find any way to test for parameters in the URL. Using just a React testing library. I've looked all over the documentation, I've looked all over Stack Overflow have not been able to find that. And so there isn't enough for me of a testing story yet with remix. Similarly, with React navigation library, being able to test on all different scenarios when you're using the URL or params as a single source of truth. So that's a that's another thing is if there's so much that's gonna go into navigation URL, and routing, cheers. You should be able to test on that very easily.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Yeah, that's definitely helpful to understand. And so those there's probably even optimizations or improvements that can likely come just to not to jump point. It's like, yes, there's more to come or like, it's not maybe quite ready. But this is something where I always think of like, pay attention, because like, maybe this will be something that you want start leveraging in the future for an enterprise. Absolutely, definitely. So another thing, Shawn day that's come up that I feel like I've seen this online or even heard others talking about it is there's almost like a confusion of like, what's the difference between next Jas and remix? And, you know, which one should I choose? I've definitely seen that come up all like often is there? How do you think about that? Is there differences? Would you choose one over the other for certain scenarios?

</p>
<p><strong>Shaundai Person</strong><br />
That's a really good question. So next, is a React framework. And so the where I start when I'm thinking about the differences are what I would use for what is how do they brand themselves? Or where do they position themselves? Who do they talk about as our competition. Next, for example, they do a really great job at branding and marketing. And so I trust the story that they are trying to write for themselves. And so you can go quickly on their website and see where they want to be in the market. So when there are react framework, they're targeting react developers, if you're not familiar with React, it's going to be a lot harder for you to get up to speed quickly, with something like a next. So if you're using Angular, you're more familiar with view. It's not optimized for that. So remix as much of it as I still need to learn. There are a lot of things that if I just know only knew JavaScript, or in know, react, or if I was just familiar with maybe Web Fundamentals, or HTML fundamentals and creating a basic form, I would be able to be pretty dangerous with remix, after just a couple hours of study. So or less, you know, I could, I could spin up a website probably in a couple of minutes, right? Both do a great job of the onboarding experience. So they have a CLI command that you can use, I forget exactly. But they're pretty similar, like create next app and create remix something, but it's just like one command that you can use to spin up a quick website. So they're similar in that way where you can get your own little site up and running really quickly. To customize it though, for next next does include a lot of things out of the box that you can just like kind of add in as imports and things like that remix I think is is growing a lot of that stuff. But I haven't tinkered with it. The big difference, I think in my head is the use cases. And this is kind of where I was getting at with the marketing aspect of it. Remix positions itself as similar to react where we don't want to fight with anybody we're good for, we're good for anybody that wants to use us, we're not trying to compete with anybody else, we don't want to be put in any box, we're a framework for a tool like a canvas for you to use to build whatever your heart desires. Next is very, we're enterprise. We are built by oversell which is a hosting platform that targets large enterprise companies. And to me, I don't, you know, I don't I don't know their whole strategy. But to me, they, it's more about getting people to use herself and get hosted by herself is kind of like a vehicle to to push herself. understandable because it's created by herself. But it's meant for people or companies that are that have stores that have they, they talk about blogs a little bit, but I think web stores is the big thing, because they have a web stores are going to have a lot of traffic, a lot of they're going to need a lot of dynamic content, that's going to change. And so as a result, they're going to have a lot of calls to the database. And so those calls are part of the way that a company like Versa will make the money is through all of these different calls. So to me, it's more of a vehicle to push that. So I'm not knocking for sell. It's next is an amazing tool. I just think that if you are building a store next is an amazing option. If you are building anything, remixes are a great option too. So I don't want to start a fight between the two of them. They trade everything. There's trade offs and everything. But I'm very agnostic when it comes to things but and I'm willing to try anything but I just that's the way that I see them is just serving, similar sorry, serving kind of different markets next wants to have sort of a niche and remix wants to fit a very broad audience. That's

</p>
<p><strong>Ryan Burgess</strong><br />
super helpful. Thank you like I was a great way to describe it between the two. That's great. And before we jump into pics, I always like to think even for me, I'm so new to remix is what's some advice that you all would give to someone diving into remix? And maybe since you know, it is newer, even for me, I'm like, I can't think of like how specific to remix it. But like if even a new framework or tool like how do you dive into that and leverage it? What some advice you would leave our listeners?

</p>
<p><strong>Shaundai Person</strong><br />
That's a great question. No, the way that you learn, I learned, I feel like I'm such a, you know, just do what you want to do and be happy. But I'll tell you how I do it. And you can take my advice or not. So I am a big Learn by Doing person. And I used to be, I need to know every single thing about every single thing before I started. And that doesn't work. What that does, especially in tech is you open one thing, and then you're like oh shiny, and you just move to the next thing. And then that opens up a door to this, all these other things that you can learn. And then it's just this continuous cycle and you're a perpetual student. Yes, you can be a perpetual student. And that's great, positive. And that's the way that our world is. But at some point, you need to stop and actually try it. And that's how the information is going to stick. So my advice would be to learn a little bit as little as possible about the thing and immediately start building it and have an idea in your head about what you want to build. It doesn't have to be the perfect project. Don't overthink it. Literally, what I'll do is I'll come into a cool idea, or some little problem that I'm facing right now what my side project is that I'm working on and remix is a tool that I'm teaching my son how to read. So a tool that makes flashcards for phonics, like the little at and then puts the m in front of it, so he could film that. And so and that's how I'll do it. So I'll just say whatever the project is, I'm gonna figure out how to do it in this framework or using this library or whatever it is, and I'll go on build it, and that's how things stick. And that's how you get to work on Ryan's team at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that you're building that for your Sunday. That's a great approach. That's very cool.

</p>
<p><strong>Stacy London</strong><br />
I don't know if I've advice haven't tried remix yet. But one thing I remember playing around with next and working without a bit was like how easy I could get it going and then deploy it somewhere. So it was like running is is there a story like that for remix where it's like, not only because that can The hard part when you're learning is like maybe you don't even know like how to get it out to a server. And that like then all sudden, you're just like, well, I guess I can I'm blocked or whatever. Like, is there a good story for that for Emacs?

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, there is actually. So on their website, they have a tutorial for jokes. There's a little jokes app that you can build. So there's a command that you put in and then you add in one little thing for a template or something. And there's a jokes one, and then there's another tutorial as a starter. So yes, similar to next, they do have that. They also have a couple of YouTube videos that Ryan Florence did with little digestible snippets of how to do something or how something works in remix that I would strongly recommend.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. I think that's all great advice for if you're wanting to jump into remix, let's jump into pics. In each episode of the front end happier podcast, we'd like to share pics of things that we found interesting and want to share with all of you. Let's start it off with Stacey, what do you have for us this episode,

</p>
<p><strong>Stacy London</strong><br />
right that three music picks two different artists. The first one is what I guess three artists. The first one is called Baby we're ascending by hi and John Hopkins. I think I've picked John Hopkins stuff before in great collaboration. Pitchfork review said the song replicates the heart and mouthfeel of raving at its most ecstatic. That was a great way to describe it. The second pick and the third pick are both by motor at and that's a mash up between Modeselektor and aparat, which are to like different groups. But they come together and they haven't put out an album in six years. So it's really exciting. For this new one. Drum glow is the one song that really like a neon rats, they're both really excellent songs, and one of them has loon samples at the beginning. It's sort of dreamy and like the loon stuff totally reminded me when I was a kid I used to listen to these nature relaxation, things like to like fall asleep and there's like one with balloons in it and so it kind of set me back down memory lane with that.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome jam. What do you have for us?

</p>
<p><strong>Jem Young</strong><br />
We'd say see loons as in the bird. Yeah. Okay,

</p>
<p><strong>Stacy London</strong><br />
that Looney Tunes check, you

</p>
<p><strong>Shaundai Person</strong><br />
know what a loon sounds like. Like I don't think if I heard a Loon, I'd be like oh, that's a loon pleasant

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's not Yeah, it's a pleasant it's not obnoxious bird sounds like a crow or something. So nice peaceful. I feel like it's like an early morning like Lake you're just kind of like Sunrise. You hear that like in the background? It's a pleasant sound. And then you know, any Canadian listeners will think of the the loonie, which is like $1 coin so that that always comes to mind.

</p>
<p><strong>Jem Young</strong><br />
I'm just impressed. You all can identify bird sounds. I couldn't identify a single bird. Maybe a chicken. It's probably the extent now

</p>
<p><strong>Ryan Burgess</strong><br />
well, you know an owl. Yeah, you know what a crow sounds like right?

</p>
<p><strong>Jem Young</strong><br />
If you're like this a crow sound this a raven sound. I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
that's differentiated. Okay, I'll give you that.

</p>
<p><strong>Jem Young</strong><br />
We're all good at something. I'm not gonna invert sound. I have one pic today. And it's been a while. So this is my valley silicon pic for those who are just now tuning in are. And as front end happier regulars Noe Valley silicon is the part of the show where I highlight things that are absurdly expensive and only exists because we all in Silicon Valley get paid far too much money. It's been on hiatus for a while because, you know, with the economy going down. Inflation began to being at an all time high. I really couldn't tell what's expensive anymore. And what's like, Oh, this is just how things are, you know, groceries now. I think I spend like sometimes over $200 Sometimes I'm like I didn't buy anything at all. I took a break from Valley silicon. But I'm back now because even though inflation is at all time high, there's a lot of tech layoffs. You know, the markets for everything is just wild. Some things I can still point out and be like this is ridiculously expensive. So today's pick is a mini Porsche Cayenne RC car. For your child. It is white. It comes with some wheels. It has a USB mp3 player and all these things. You can get it for the low, low price of $1,099. So $1,100 for an RC car, that your child will certainly appreciate the amount of money you spent on this. I don't I don't understand it like

</p>
<p><strong>Ryan Burgess</strong><br />
well, it's not an RC car jam to it. They the kid sits in it and drives

</p>
<p><strong>Jem Young</strong><br />
Yeah, sorry. I'm calling RC car but they sit in it. They drive it around. They look cool. Other four year olds at the playground will admire that they're driving a Porsche. I yeah, I don't know. Maybe I'm a bad parent that won't spend this much money on my child. But I just know my son will not care at all. Well, I

</p>
<p><strong>Ryan Burgess</strong><br />
think like Power Wheels are cool. Seriously, Power Wheels are very cool. But what I don't understand is why that Not one is more money than like, you can go get like a Lamborghini version and McLaren version a jeep? I don't know, there's tons of options out there that they're like a couple $100. So and the discrepancy in features, there's no discrepancy, they'll have the same features for like 200 or $300. So why is this one like 11? Or $1,200? That doesn't make sense to me. I'm not knocking the power wheels. I think they're cool. But it doesn't make sense that this one is so much more money.

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, I, I'd have to look into it. I'm gonna click that link. But I'm imagining that there's air conditioning, or, you know, he did see

</p>
<p><strong>Ryan Burgess</strong><br />
my size, like all these things, yeah. Right.

</p>
<p><strong>Jem Young</strong><br />
All these things that children will surely appreciate. Just like a few few months ago, when I picked the specialized carbon fiber balanced bike that children would like to use for a few months and then aged out. I don't know, maybe there's a whole market for upscale children's gifts that I'm just not wealthy enough to be in the loop. But I think I'll sit this one out, too. So that was my valley silicon pic for today. The mini mini Porsche. What did you call it? Power wheel

</p>
<p><strong>Ryan Burgess</strong><br />
Power Wheels. Yeah. And I mean, it's good called RC because one safety feature is it comes with the remote gem, so that when your child is driving like a wild person, you can control them and just prevent them from hurting themselves. So maybe that's where the RC part comes in. Awesome. Well, Shawn day now how do you follow the like Porsche Cayenne Power Wheels, what picks you have for us,

</p>
<p><strong>Shaundai Person</strong><br />
man? Why did you go first stem I mine is not that great, I was gonna suggest an app for reading. Because, like I mentioned, I'm teaching my four year old to read. Hooked on Phonics, as many of us have known and love and grown up with it is the bomb.com. So it's like, they, I had my doubts, because they promise you that your kid's gonna read within 30 days or something like that. And otherwise, you're not your money back like everybody does. But within, I think it was maybe two hours of practice No, two or three hours of practice over two nights, my son read a whole book. And he's like, he doesn't turn five for, I think, five months or something like that. So he's like, pretty early on, but he was reading the first night it was all the same sound mat, Cat and Cat rat hat. But he read the whole book, and he was really excited about it. And then the next night, he was reading a book that had all different kinds of sounds like cat can tap and so I'm just so impressed with it. And I sent a video in our team slack, where and this is just, you know, me being his mom who works at Netflix, but we were at we were at a grocery store and the checkout line and there's a little Netflix gift card and I was like hey, what does that what does that say? And he's like n e t f li X Netflix. And he turns around it you can see his little Netflix you know branded shirt, so I highly recommend it. He's really it made him really interested in reading it has like all kinds of cool stuff for kids that are into gross things to which he is very I guess masculine in the sense where like, squished birds and like giraffes eating fruit that makes them sick, like all kinds of weird it's you'll get it if you if you get it, but that's my one and then I thought of another one which is a show called The boys actually should I talk about this because it's on Amazon. But um, so

</p>
<p><strong>Ryan Burgess</strong><br />
there's your okay, this air stuff on Amazon can I

</p>
<p><strong>Shaundai Person</strong><br />
do? Okay? There's a show called The boys on Amazon. Everybody knew about it except for me, apparently. But there's a new season out for 2022 If you're into the any of the superhero stuff, Marvel, Marvel or DC, you will like it I feel like it is a more realistic view of what the world would be if superheroes actually existed. So of course, capitalism, drug abuse, all of the good things that make this world such an amazing place, so I highly recommend it. It's a great parody of all the superheroes that you know and love, but an entertaining time and those are my picks.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome one I have two picks for this episode as well. My picks aren't maybe as entertaining as some of these on this episode. One is a if you're if you like making cocktails, I have a book recommendation that I found very useful has some really good drinks and it's called The Ultimate bar book, The comprehensive guide. It's great little book that I highly recommend. I think I just purchased it on Amazon and then my My second pick is a video that was put together about Hill bombing skateboarding in San Francisco. Now, I don't know that I was fully aware of that there's this whole culture around bombing hills on a skateboard in San Francisco, which if anyone's been to San Francisco knows how big some of these hills are. And watching these kids on going down these hills, they are wild to be doing this. Like, I can't even imagine even trying to do that I would be on my ass. And I know that. And so even as like a kid growing up skateboarding all the time. I'm like, I don't know that I would have done that. So it's pretty cool. It's a really short little documentary. I think the New York Times had put it on it was really interesting. So I highly recommend checking that out. Thank you, Sean D so much for joining us and really educating us about remix I definitely am walking away learning so much more about remix. So thank you. Where can people get in touch with you? If they want to maybe talk remix or just learn about all the things that you have to offer? Where can they get in touch with you?

</p>
<p><strong>Shaundai Person</strong><br />
Yeah, so the beauty of having a unique name is that my first name is my handle for everything. So S H au n di you can find me mostly on Twitter at Shawn day. Also on Instagram at Shawn day if you want to see pictures of my kid. And if you are looking for updates on my TypeScript course, which hasn't come out yet, but if you want freebies, go to tsforjs.com ts four J s.com. And just putting your email address and you will get updates on course release dates and the freebies as they come out.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Well thank you all for listening to today's episode. You can find us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> you can go to front end happier.com You can always listen to us on pretty much every platform that podcasts are available on any last words routers, Cheers Cheers.

</p>
`;
        return transcript;
    };