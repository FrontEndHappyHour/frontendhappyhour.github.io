// Episode 77 transcript
module.exports = function() {
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. We are joined by our very special guest, Addy osmani. To speak with us about web performance. How do you want to give us a brief introduction of who you are, what you do? And what your favorite happier beverages?

</p>
<p><strong>Addy Osmani</strong><br />
Sure, that's a deep question. Who am I? i? So my name is Addy Osmani. I, I'm an engineering manager working on the Chrome team and I lead up a speed team focused on web performance. We try to keep the web fast. All right,

</p>
<p><strong>Ryan Burgess</strong><br />
specifically to Chrome,

</p>
<p><strong>Addy Osmani</strong><br />
but it's all one big. We care about the open web keeping the web fast everywhere. Great. That's awesome. We love that you didn't say you're happier beverage. My happy hour beverage is gin and tonic. Right on

</p>
<p><strong>Ryan Burgess</strong><br />
which we are actually drinking right now. And I think this is the first guest to ask us for gin and tonic, so well done. Thank you. Yeah, I feel all right. Well, let's go around and give introductions of today's panelists. Stacy, you want to start it off? Sure. I'm Stacy London. I'm a senior front end engineer at Atlassian.

</p>
<p><strong>Mars Jullian</strong><br />
I'm Mars Jullian. I'm a senior software engineer

</p>
<p><strong>Addy Osmani</strong><br />
at Netflix, Jem young, senior software engineer at Netflix.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm Ryan anklam, a software engineer at Netflix as well.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm an over 40 software engineering,

</p>
<p><strong>Jem Young</strong><br />
old software.

</p>
<p><strong>Ryan Burgess</strong><br />
In each episode of the front end, happier podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is fast. So if we say the word fast, faster, or whatever it is, we will all start taking drinks fastly. Yeah, I

</p>
<p><strong>Ryan Anklam</strong><br />
think we already Oh, two drinks by the way.

</p>
<p><strong>Ryan Burgess</strong><br />
No, we just started now. You can't start ahead before I tell people. All right. Well, let's jump in. Why is web performance important? Why is it proving the speed of your web sites and applications actually important. Obviously Addy bean really must be important. You're working on this, I hope.

</p>
<p><strong>Addy Osmani</strong><br />
So job security, I got a got a fixed speed. So humans don't like waiting for things we don't like waiting in line. If you know you've, you've ordered a pizza, you don't like waiting for that. So anything we can do to make sure that users are getting satisfaction pretty early on is important. And it's like it's important for engineering teams. It's important for brands too, because those users will come back if they've got a good experience with your site.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I think it's, it's becoming actually more and more, we won't wait at all. Like, if you think back to the web, I don't know, in the 90s or even early 2000. It's, it was slow, like compared to now. It's like we expect things immediate gratification needs to be there right away. So I think it becomes more and more important. I also think of the I'm sure even dealing with Chrome is you're dealing with a global audience who doesn't have the fastest internet. Cheers. Cheers. Cheers. Early. Yeah. Got that one and fast.

</p>
<p><strong>Addy Osmani</strong><br />
Cheers. Remember the days of downloading one mp3? And it took like 30 minutes on 56 k? No, sorry. It was like 33.6. And then we got upgraded. Oh yeah. And you're just like, ah, the web so slow now we just expect things instantaneously. Could you

</p>
<p><strong>Ryan Burgess</strong><br />
imagine waiting that long like you'd wait like days weeks for some like a file to download? That was craziness. I remember being a teenager and waiting like two days for downloading it. Yeah,

</p>
<p><strong>Addy Osmani</strong><br />
he Spears music video. That was great.

</p>
<p><strong>Ryan Burgess</strong><br />
And then and then if the file got corrupted, you're

like, No, I just waited so long.

And I should have tried a different file. Yeah, hopefully you got that video. I got that.

</p>
<p><strong>Addy Osmani</strong><br />
But I think largely, we've seen we've seen what the fast internet looks like. Well, we've seen we've seen sites with WebSockets and the properly utilized caching and all the good techniques. So when you hit a site that slow you're like, well, either they're lazy, like the site or the brand. They don't care about performance or like something's wrong, the internet But usually there's something wrong with the site. And I don't know, it's like offensive as a user, I'm like, you can't put a little bit of extra effort into making the site performance.

Yeah. And performance is like it's a spectrum. It's not just the same for everybody, you're going to have folks that are, you know, based in Middle America, or nvu, where they're not going to have the most powerful phones, they're going to have, you know, slower CPUs, potentially slower network conditions. And so it gets even more important to make sure we're stripping down stuff that's actually going to deliver value pretty quickly to people.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's kind of even to your point, when we had first mentioned about working on Chrome, and you're like, it's the open web and caring about it. But it's true. It's like you're really we're trying to build solutions that work for everyone. The beauty of the internet is everyone should have access to it and be able to have a great experience. And so performance is really important in that is that we're thinking about the person on a low end device or on a high device or you know, some quick Internet's

</p>
<p><strong>Addy Osmani</strong><br />
nice. Alternately, and we've definitely talked about this. We talked about performance every couple of months or so, but well Ultimately, the only currency you have in life is time like that. That's it. It's a finite amount. And so no one wants to waste time, like waiting for a website to load or I'm trying to pay my bill and I'm in the hurry. Like, I don't want for the slow like, powerville website to load. Like, we should make things faster, because we should value time. That's pretty much all we have. Cheers. Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
I've got a bit of a question here, too. Is this something that's ever done? Like, are we ever done improving performance?

</p>
<p><strong>Stacy London</strong><br />
I don't think so. Because everything unless you're done developing your site, and you're never adding another line of code to it, but every new feature you add could degrade performance, if you don't, like have something in place to make sure that you're not doing that and, and caring about that. So I don't think so.

</p>
<p><strong>Mars Jullian</strong><br />
Well, I think also beyond just like adding new features, like we're in competition with other things that are also speeding up. So you know, the networks that we're using, they're getting faster, they're getting darnit. They're getting better at delivering websites to you and also our hardware speeding up and we're competing with native apps that are a lot quicker and we'll set it again are a lot quicker than the web sometimes. So we have a lot of other things that are increasing in speed. And we I think we become almost even more and more impatient as that happens. So it's not just the technology, but it's also kind of like a behavioral, like a behavioral issue. Yeah. And

</p>
<p><strong>Ryan Burgess</strong><br />
I think to speak into the business side that came up a little bit to is like, you're competing with other businesses to that if I'm maybe browsing a site to buy a T shirt, and three companies have it and the one is just like not loading, I'm on to the next one. I'm not sitting around waiting. I've time is precious, and I'm gonna move on. So I think that's really important for businesses to really put this as an utmost important piece for their customers.

</p>
<p><strong>Addy Osmani</strong><br />
Yeah, well, we we often find when we're talking to teams is that performance is very often an afterthought. Folks like they they only realize it's a problem when things are on fire or their users are complaining and it's not always something that's baked in from the very start of the project. And I'd love to see that kind of shift in our industry with people strains care about performance from the very getgo. Because it's easier to sort of set yourself those constraints that you have to have the whole team work in early on. But it's much harder to set them like after the fact when you're already kind of like shipping down a ton of code, tons of resources. And it's it's slow,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, becomes almost like really difficult to go back. It's like thinking about that ahead of time. even think about that, like things like accessibility, if you're thinking about that, from the start so much easier to deal with issues right then versus like, oh, I've got to go back and think about that. And performance is really important to think about that from the start. There's things like performance budgets, like is that something that you would advocate for? Because, you know, you're actually thinking about that right from the start is like every little feature that we add, or every piece of complexity that we add is going to cut into that budget. And if you don't set that you're just going to keep going down the making it slower. It's almost

</p>
<p><strong>Stacy London</strong><br />
like you have to automate that and make put that into the team's like, entire dev process. So that There's a tool telling you something or giving you information because it is quite easy for a lot of organizations for pressure to ship to override, you know, doing that performance tweak. And so maybe if you bet, yeah, build it in your definition of done or whatever you call it to, like, say this feature is ready to go. I think that's a hugely important,

</p>
<p><strong>Addy Osmani</strong><br />
and I totally agree that I think that one thing, you know, engineering teams love trying to, like set these numbers that we try to target. But it's really important that we also tie performance back to business metrics and business goals. Because if if you really want the business to buy into this idea of you know, staying on top of web perf has to be demonstrated that like it can impact revenue, conversions, all the things that they care about. And that's not something that we see a lot of teams down at the moment.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think it's super important to measure it. Like I think that's where it really comes down to and if you can put it back to a business goal that's really, really important. I mean, even at Netflix, we've done a lot of that where we've AB tested, we do that with all lot of features, but we've also done that with something that we've maybe reduced the payload size. How does that impact something in the business metric? It does it maybe. But like, trying to understand how big of an impact is the performance side of it? And I think Yeah, you can get a lot more buy in from people not just engineering is like, Oh, this actually impacts the business. Now we need to really think through this and be thoughtful of it. Yeah, I mean, the recent test we just did on TBI with highlighting states even in onscreen keyboard, we took away one state which just you know, milliseconds per keystroke, but it actually had a really big impact on people's interaction with the pages which ended up giving us more signups which end up giving us more revenue. So it's huge.

</p>
<p><strong>Addy Osmani</strong><br />
So I'll say like, I guess like a corollary to all these is there is such thing as over optimizing, which is something to be wary of to performance budgets are great because you're saying like, once we hit this target once we get this finish line, like we're good, because I've seen plenty of people waste hours and weeks chasing dragons, trying to like squeeze Alec, let me shave off another half millisecond. But in reality that doesn't make a difference. So it's important to know like where the benchmark is, once you hit it, make sure you don't go under it, but not over optimized for performance. Because you can spend forever trying to like, tweak, remove, like half a kilobyte of code. And that doesn't actually do anything, it could,

</p>
<p><strong>Ryan Burgess</strong><br />
you don't know,

</p>
<p><strong>Addy Osmani</strong><br />
because that's why you need performance, metric metrics to say like, here's what's important. Here's what's important

</p>
<p><strong>Mars Jullian</strong><br />
also to performance, and also to that point about over optimization and kind of goes into perceived performance as well, because you can make sure that your site speed stays the same. But you can make the experience better for the user. So they know something is happening, or they get a bit of information. And then as you as that's loading new loads of meals in the background, and you've kind of progressively load the page, and that's something we've seen, a lot of I think is like perceived performance is becoming more and more of a design is incorporated into design more more,

</p>
<p><strong>Stacy London</strong><br />
or like you've optimized it so much that like processing some sort of bank transaction is so fast that people like oh no, I don't trust it and you'd like add a spinner back in They're like, it seems slower to like, so there's like, there's some weird there

</p>
<p><strong>Ryan Burgess</strong><br />
has to be some feedback there. Because you're like, Wait, did it actually work? Did I send that transfer? Like that's important? And it could actually be too fast at that point? That's a good way to put it. Cheers. Oh, yeah. Cheers. Catch. I think

</p>
<p><strong>Addy Osmani</strong><br />
that speaks a little bit to how we've been viewing the evolution of loading experience over the last couple of years. So over on the metric side of things, we've been increasingly on the Chrome team and focused on user happiness metrics. So breaking down the loading experience into kind of three or four key stages is happening. Is it useful and isn't usable? So is it happening is, Hey, is this page even actually responding with anything at all? Like, I don't know if that's a spinner could be a placeholder, some skeleton screens? Is it useful is that point where you've delivered like some valuable contents? These are like some text and then is it usable is that point when the page is entirely interactive, and we're trying to encourage developers to like think about that entire journey and it's not just like a Explain time, it's like lots of other little things we can improve.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And actually, that brings me to like a question of how do each of you approach if you have a slow website or application, what do you do for like, what is your approach to debugging net improving at work? What's your go to tools? What do you think about when I come to you and I'm like, this page is slow improvement edge dev tools.

</p>
<p><strong>Ryan Anklam</strong><br />
That's my go to every time and

</p>
<p><strong>Ryan Burgess</strong><br />
I still use IE.

</p>
<p><strong>Jem Young</strong><br />
I was gonna say Safari bug Safari. So

</p>
<p><strong>Ryan Burgess</strong><br />
Firebug was good.

</p>
<p><strong>Ryan Anklam</strong><br />
No. Firebug is the gateway that got us to where we are today. Rackley?

</p>
<p><strong>Addy Osmani</strong><br />
First up like always, always as measure, because like slow is completely relative. You're like, Oh, that feels slow. That means nothing like you have to measure you have to say like, what are the metrics you care about? A time to interactive is usually one of the top ones time that renders another one. I'm sure there's more but and more business specific ones. But first thing I have to do is measure as our colleague once said, Michael Paulson, he's like, you can't look at code and tell if it's slow or not like it's amazing. You can like get hints, but you'll never be able to be like, Oh, this is slow code, you have to measure it, and then figure out what's optimized. I really like currently working on a scroll performance issue. And the FPS meter in Chrome Dev Tools is awesome for that. I really liked that

didn't work on it, but I'm happy to take credit for it.

One workflow that I've been encouraging people to think about recently is measure, optimize and monitor. I think that I totally agree with the measurement part. You can't optimize what you haven't measured. The monitor part is important because we don't we don't see too many folks like actually continuously measuring performance after they've deployed like a change. And there's so much that you can do like Netflix is famous for the amount of AV testing that it does. I think that the amount of monitoring work you can do just to understand like, did the fix actually solve the problem long term are other patches coming in actually, you know, undoing all the work you did or not that those things are important to take a look at. So I really

</p>
<p><strong>Mars Jullian</strong><br />
like your point about monitor. To because we're kind of developing in a vacuum. And I feel like a lot of us are developing in a vacuum when we work in offices that have high speed internet, and we're working on generally like higher speed devices. And if you're monitoring, you can kind of understand like, did your Fix work for all of your users or just a subset of them, and you can improve from there. So there's the over optimization on the one hand, but then there's also the continuing to optimize for just a diverse set of devices and internet connectivity,

</p>
<p><strong>Stacy London</strong><br />
one thing that we've started to do is to fire off app decks, metrics to data dog. So we have dashboards that actually will show like over time, you know, whether your app decks is going up or down for various pages on our site. And that's been pretty cool to see, like, actually have measurement over time.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it helps monitor it and so that you're not having to always think about it like you should be, but it's like you also have the computer tell you and it's not just some person's sole job to think about that concern.

</p>
<p><strong>Addy Osmani</strong><br />
You have like a high level of the kind of important metrics that I think is what developers we should all know, because I think we talked about them sometimes we never actually did. Find them. I would

say that going back to that idea of user centric metrics, there's like so for the is it happening? We tend to take a look at things like first paint first content, full paint. Is there actually anything that's been painted to the screen? Is it useful? Like is partly first contentful? paint? There's other metrics like first meaningful paint. And then is it usable tends to be time to interactive in the lab, and then in the field, things like first input delay. So if a user tries to tap on anything, in the experience, are they actually likely to get any response to it early on? What

</p>
<p><strong>Stacy London</strong><br />
about psi? I think that that was when I was starting to dig into to to like, see if that's something that we should be measuring. So recently,

</p>
<p><strong>Addy Osmani</strong><br />
in psi, we've actually been shifting a lot of the UI and the engine behind it to use lighthouse. So the current version of psi is using my house and we've aligned on I think FCP for the field, at least for FCP and first input delay to be the two metrics with field we recommend folks take a look at in general like we try to suggest a set of metrics that we think Work for folks that don't really know what's take a look at that. We also know like businesses have got their own custom metrics that might reflect what you think is the most important thing. Like I'm sure Netflix also have their own custom,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, even even just within various pieces of the product, there might be something that is really important to one team versus another team. And it's like thinking about what's your core metric? What's your secondary metric? And thinking about that is like, that's more of the business side of things for sure. So

</p>
<p><strong>Jem Young</strong><br />
I can clarify what psi

</p>
<p><strong>Stacy London</strong><br />
Yeah, sorry, I was like we should we should define these perceived speed index, which in theory is well, in theory, it's there's science behind it, right? Like it's how the user feels about a page being available to them and ready to be interacted with.

</p>
<p><strong>Addy Osmani</strong><br />
What about API's? I mean, some of the browser's are getting a lot better with having performance API's built into the browser. What are some that you've found useful? think that it depends on if we're talking about first load or repeat load for repeat load. We're seeing a lot of sites Take advantage of serviceworkers and ServiceWorker type architectures to benefit from like static resource caching architectures where maybe instead of going back to the network every single time for the UI for your experience, if there are enough common pieces across each page, or each route, you just cache those locally. And then you've got like a relatively fast experience whenever the users coming back. Twitter light is doing something similar at the moment. So whenever you go to them, like you'll see a really quick paint of the UI, and then the content is being refreshed from the network. So that's, that's a good API to be checking out. We've seen ServiceWorker sort of increase in terms of browsers for last year, mobile Safari finally has Yeah, I was just gonna say I'm like, we have to call it mobile Safari. We've we've dragged on that one for a while, but I mean it. Some of these API's are so great. And it's amazing to have them. But until they're really supported across the browsers, it's almost hard to even leverage them which is kind of disappointing. And so yeah, ServiceWorker is a perfect example. We've had them for a long time. In most browsers, and then having Safari and mobile Safari really have them that was, that was a huge jump. I think that for first load, the biggest bottleneck we still see is probably around JavaScript, like, I'm gonna put on my Alex Russell hat. Now, it can sometimes be easy to pick stocks where, you know, we're not always measuring the impact of the choices we're making on phones. And that can sometimes lead to user experiences that take you know, 2030 seconds for their interactive without you as a dev even realizing it. So we we try to suggest that folks take a look at sort of tactical tools like lighthouse analyze, you know how well users are able to interact with your experience, and try to only ship stuff that you need when you need it. When it comes to the JavaScript side.

That is a good point too, is like, if you don't necessarily I mean, we talked about it sometimes even on the episodes is like you don't need the framework or you don't need to worry about things like lodash is super helpful, but if you don't need that whole package, think about that. And like be thoughtful about when to use them. They're great use that to lean in libraries that are there. But don't overload your site or application with every library that is gonna cost you in the performance side of things. I don't want to be the JavaScript hipster. But I did say it in tech talk two years ago, that not enough people are focusing on it's it's the amount of JavaScript we're loading, it has to parse all that and then executes it. And people just don't think about that. They're like, well, I want to use IDs, because they're a slightly faster selector than classes and like, just like over optimizing in the wrong direction, and it's just like, well, you're shipping down an entire Angular core and all these things, and you just don't need and I'm glad you brought that up. Because just not enough people think about what they're shipping out. If you just stripped that out. It speeds up the page. I'm like, multiple directions.

</p>
<p><strong>Stacy London</strong><br />
Yeah, we're doing band aids for things like Oh, the bundle sizes giant, but they're like, what if we server side render, and you're like, wait, but then it's gonna be like the uncanny valley weirdness where it's like there but it's not really there. So like not getting at root cause.

</p>
<p><strong>Addy Osmani</strong><br />
This is a great point, that pattern of like server side rendering and hydrating the experience is sometimes like pitched as like the solution, right for solving everything. And it can make things so much worse a lot of the time and more complicated. Sometimes, and I guess we did a case study about this. Yeah. And Netflix, right. Like, sometimes you have to ask yourself, well, is a lot of JavaScript on the client side actually adding real value to the experience, sometimes there it's okay to quarantine JavaScript to the server. And then, you know, do stuff client side when it's actually gonna add value. I know that, you know, Netflix, we talked about, you know, in the case study we did switching over to server side rendering with react right for the core, logout homepage, and then you prefetch the bundles for the rest experience, right?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Yeah, we were, I mean, we've server side rendered our react components fairly early on when we were leveraging react. And, yeah, we had pages like first offer like logged out homepage, like you said, there weren't a lot of interactions happening. They're very, very minimal, and but we're shipping down react library. And those client side component interactions. And the interactions were very small. And we're like, wait, we don't need react on this page. Yes, we have the components that are server side rendered, but we'll get our markup for that. And then we wrote some vanilla JavaScript for the small interactions and some login. So that was great. We reduce the bundle size by like half just by removing react at that point. But we're not going to, we still don't want to get rid of react, like react does a lot of great things, and the rest of our signup flow, or even our logged in pages are a single page application using react, we're not going to get rid of that. And so we just were like, Okay, why don't we not use react on that landing page, and then in behind the scenes? Well, let's fetch that react library. And then it's actually cashed in behind the scenes for the next sequence of pages. And yeah, we actually saw a lot of benefit doing that. And it is just a simple thought that actually came from one of the engineers Tony Edwards on our team and it was like, almost special. That you're like, yeah, that could actually work. And yeah, just just thinking about that. And we did that. And of course, people were like, Well, why not use pre act? It's smaller. Yeah, you can do that. But there's complications to that too, is it? You know, you're missing some pieces of the library for react. But also, we're already doing this with react. This is not like we had to rewrite server side rendering this, these components were already there. It was, it was something that we could just try, and it worked. So that was a good one. And yes, great case study, too. Thanks. I'll take full credit for that. I mean, you're the one who wrote

it. So

</p>
<p><strong>Addy Osmani</strong><br />
I think that, you know, one of one of the funny responses to that, that I'd heard was a lot of people saying, you know, duh, it's a static page or simple page. Why would you ever use clients that JavaScript on it, but it's not always that often, you

</p>
<p><strong>Ryan Burgess</strong><br />
know, and and there's, there's still interactions on it that were necessary for client side JavaScript. It just, we didn't met necessarily need a framework. And that may change over time to is like the page may become more complicated, where now we're at odds of like, when do you add it back? In like, leverage it Where does it become too much of a pain point to write vanilla JavaScript and not take advantage of react is the framework. So there's always going to be at odds of that is like the developer happiness and support being able to ship things quickly, but also have a performant page. So everything's a trade off.

</p>
<p><strong>Addy Osmani</strong><br />
I think like, and especially in the web development world, it's really hard for us because it's like this cognitive dissonance because we're like, oh, performance. Webpack has like great plugins or parcel or some sort of tree shaker. And like, we're always quick to look at these tools or, like some sort of magical thing that helps us with performance. But at the end of the day, the fastest page, like first load, no cache is an HTML page with vanilla JavaScript, like nothing's going to beat that.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, probably, even with no JavaScript

</p>
<p><strong>Addy Osmani</strong><br />
or no JavaScript. Yeah. But like, we always forget that because we're like, I want to code my way around this. But sometimes it's taking out the code like you referred to earlier. It's just like sending down a simple HTML page. Because you know, HTML works. It has a lot of like great built ins that you don't actually need JavaScript for,

</p>
<p><strong>Stacy London</strong><br />
like CSS and JS stuff like We're using that because it's really great for developer happiness. But there's an option on the table that we rip it out because CSS is just more performant natively. And we are that is an option on the table to get the best performance possible.

</p>
<p><strong>Addy Osmani</strong><br />
Yeah, I think one thing that's useful for, for other developers to consider is like weighing what the cost of your developer experience choices is going to have on the end user experience, because ultimately, it's the users that matter. Right?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's not us as developers is like, we all like using the latest and greatest, like gem said, Let's jump on Webpack. Because that seems cool and everything. But at the end of the day, we need to remember why are we creating this? Who's using it? if no one's using it? There's no point in creating Exactly.

</p>
<p><strong>Addy Osmani</strong><br />
It's a hard question. I'm glad you brought it up. What's the balance between performance and developer experience? Because like, we're not writing websites and see, even though I mean, I guess we could probably

</p>
<p><strong>Ryan Burgess</strong><br />
he probably could, but it wouldn't be very far or Well, maybe not even fun. That's the wrong word. It'd be difficult. It'd be interesting.

</p>
<p><strong>Jem Young</strong><br />
Sure. Not

</p>
<p><strong>Stacy London</strong><br />
in air quotes in air quotes. Yeah,

</p>
<p><strong>Addy Osmani</strong><br />
it's great pot. But there is a balance between performance and developer ergonomics. And like we can over optimize, let's write everything in vanilla JavaScript. However, frameworks exist for a reason. They make our lives a bit easier. So where does that balance lie? I think

frameworks definitely have a place. And they generally, in many cases, help us build experiences quicker. But it's important for us to understand like, if you are setting a performance budget, for example, how much of that budget is being eaten up by that framework? and long term? Are you going to be able to fit in as much of the application logic, the site logic is needed to deliver that user experience? Now, how are you going to do that without kind of blowing your budgets without like, going low on all of your metrics? I think that it's a hard trade off, right to make sometimes people are gonna say, well, it doesn't matter that I'm shipping megabytes of JavaScript because we were the first ones to the market. We shipped all the features, right? But you might have competitors that are able to achieve the same thing might mean that folks On 3g networks, slower networks, poorer hardware gonna be able to, you know, load up their experiences quicker than yours. But at the end of the day, it's trade offs, the business has to make a call on what they think is the most important thing to do. So

</p>
<p><strong>Ryan Burgess</strong><br />
as to since you're working on Chrome, I'm interested, like, what are some new API's new platform API's that we can be looking forward to around performance?

</p>
<p><strong>Addy Osmani</strong><br />
Let's see. So a quick reminder of things that have existed for a while but people are still action that's that could be new, actually, to some people, I guess, useful to first load. Especially if you're building an application that relies quite heavily on JavaScript. Take a look at things like link REL preload, great for just making sure that your fetches for things that are really, really critical. Get made by the browser early on. If you care about the the next page experience link REL prefetch is serviceworkers. For those things as well. Again, Netflix is already ahead of the curve using some of that stuff. And I mean, some of those are very easy to implement. Like that's the beauty of them, too. Like it's not a hard thing to implement. Not hard thing to me. plummet or test that it has an impact around stuff that is more future facing. At the moment, we're looking at things like, you know, how can we build up a more open web story around things like amp, and, you know, some of the standards that we're looking at that space for things like you know, web packaging. So if you're an origin, and you're cool with, you know, some third party CDN serving your content, but you want to make sure that the attribution is still with your original URL. We want to come up with a way so that you can use the origin can sign that content, say, Well, hey, this actually came from me, it's actually came from like Netflix or Atlassian, or, or whatever. But the content can still be served from the CDN. That's a model we think could be interesting to some folks. So we're accomplishing that through an effort called web packaging. We interesting to see how that evolves over the next year. We're also looking at ways that multi page applications like often These days like people will go straight for single page apps, because they'll feel like Hey, you got that? That nice instant navigation to another route? Right? Cool

</p>
<p><strong>Ryan Burgess</strong><br />
the right?

</p>
<p><strong>Addy Osmani</strong><br />
We're looking at how you know, how can we enable some of the benefits of that model without you having to write a set nspa every single time. So there's a very emerging proposal called portals that we're looking at through a little bit like an iframe. But the the core idea behind a portal is what if you know you click on a link, and we're able to kind of make a frame become the top frame that scene instead of it being a child, but what if it became the top frame in a way that you can control like the transitions around it, the animations and everything. It's a new capability, we're still trying to figure out the UX around it. But we think that could be a powerful way for multi page apps to get some of the benefits that SPS have today.

Again, a lot of stuffs experimental,

I'm excited about webassembly. It's not gonna be the use case for a lot of people, we just you're just not running that intensive JavaScript. However, I think there are cases like video players or photo ads Getting our music editing, like have really, really powerful connotations for webassembly. And that's developing really quickly. Another one that's kind of stayed off people's radar, a bit is a, it's from Mozilla and Facebook, it's binary JavaScript. So it's sending down the bytecode of JavaScript to execute to like, a little bit faster. They've been working on that for a while. And I don't really know the status of it. But I'm pretty excited about to see how that comes out versus webassembly. And it could just be two different things. That's, that's really interesting stuff. I think

</p>
<p><strong>Ryan Burgess</strong><br />
the interesting thing with webassembly, too, is it kind of gets into this like, like you said it really well like music editing, photo editing, you're now thinking more like deep application. And so like on thinking on like, our mobile apps or desktop apps, they're now we're having to like we can actually move this to the web, and create these crazy applications that are in the browser, which is pretty powerful.

</p>
<p><strong>Addy Osmani</strong><br />
I'm really excited to see what webassembly is gonna hold for gaming on the web and whether you like bring proper gaming experiences. I think there are lots of interesting challenges there. Like we're talking about performance and keeping things fast. Nobody said fast for a while. I know. I

</p>
<p><strong>Ryan Burgess</strong><br />
know. I was I was just like, well done. We needed that. Cheers.

</p>
<p><strong>Mars Jullian</strong><br />
Well, Jem said it twice. We just didn't call it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, I didn't even know that, sir. Well, we should have called him out. But uh, I think

</p>
<p><strong>Addy Osmani</strong><br />
we're gonna we're gonna have to figure out that interesting challenge of like, Are we okay with people shipping Meg's and Meg's worth of the game down the wire? How do we do that efficiently?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's a tough one. And then you could get back to the days we're almost creating like flash, you could have like, the loading screen and you're like, just waiting. Yeah, but there's always it was always some fun animation. But it was like you were downloading the whole piece. And that could be that could be pretty problematic. We could just go back to flash

</p>
<p><strong>Addy Osmani</strong><br />
should go back slash loading screens, please wait loading. That's gonna be awesome. I think the the spec for HB three has been released or it's like, getting more standardized, which is really exciting because HB two actually has a pretty really expensive handshake. And HB three tends to do away with that. It's more like it's a very different way to think about the internet. It's more UDP less TCP, sorry for getting too technical, but it's like, it's really fascinating on the kind of the future of what data transmissions gonna look like, over the web. I think Google's part of that actually, it was a part of it.

I think they're still there. So lots of things around HB two that we still still need to get right. Over the last week, we've discovered that HPT reprioritization is something that still needs a little bit of work on a number of different hosting providers and CD ends. So props to folks like Andy Davies, and Patrick meet and who've been looking into that space. But uh, apparently we're not we're not getting all the the juicy crud out of h2, because prioritizations posted at the moment. So opportunity to fix that we briefly mentioned like performance budgets, and kind of talked about that we didn't really define what that means, or is it something that teams should be investing in? How do you approach that, like, how do you even figure that out for your team, so a performance budget is a constraints that you set. And your team is supposed to try remaining within those constraints in order to continuously deliver on an experience that is performance. The way teams can go about setting that are, are varied, like some folks will take a look at, you know, what is your current bottlenecks, like if you if you got an existing site, or experience like, How well are we doing on lighthouse or other tools at the moment on those metrics, setting yourself a budget, that is like 10 seconds faster than you are currently, it's just not going to work? Yeah, you're actually setting

</p>
<p><strong>Ryan Burgess</strong><br />
up for your for your poor performance. Cheers.

</p>
<p><strong>Addy Osmani</strong><br />
Ideally, what you want is to be setting your team goals that are achievable. Around budgets, you want to leave yourself a little bit of space to be able to hit those. To give you an example of where this this can go wrong. And I'll apologize to Paul Irish and events. Over on the over on the lighthouse team, we set a performance budget for lighthouse itself and as soon as we hit that budget, we just inked Increase the budget.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, that's one way of doing it. That's

</p>
<p><strong>Addy Osmani</strong><br />
one way of doing it. I think that like a lot of teams that I've seen adopt budgets end up in that place where like, unless the organization, the business and the engineering team heavily buy into this idea, it becomes so appealing to just increase it, and then it almost becomes meaningless, right? So there's still a little bit of work we have to do around figuring out how to make sure that budgets are doing what they're supposed to. It's hard to if you have a budget and the let's say, You've like a component based UI architecture, and some other team owns that component, and like they deliver you the new version you upgrade to it puts you over the budget, but you don't have necessarily a lot of influence or power to be like, hey, you're over our budget yet or change that. So that gets tricky.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, definitely as your organization's larger and your teams are bigger, it's a lot harder to do that definitely can be a problem. I mean, I feel like you just fail the build then like just don't allow it in.

</p>
<p><strong>Addy Osmani</strong><br />
I think tying it to real business metrics is really important because in that case, you can be like everything. And it's costing us $200 million. And in that case, like people then realize, Oh, crap, like, we should actually listen to the engineers on this point and get our good performance back.

</p>
<p><strong>Mars Jullian</strong><br />
I think by doing that, too, it allows you to change the budget in an educated way, if you're changing the UI in such a way that you get such a great business impact from it, but it happens to be heavier, because you have better interactions or more information, then you have to increase the budget because it is helping the business. But there's only one way to make that decision

</p>
<p><strong>Ryan Burgess</strong><br />
business metric. This is

</p>
<p><strong>Addy Osmani</strong><br />
also knowing your audience, it's not enough to say like, Oh, I'm in San Francisco, my website, my 10 megabyte website, loads in three seconds. Cool. High fives all around. We're going out for drinks, but you know, someone in like Sudan, that your 10 megabyte site isn't loading fast at all. Did you account for them? Are they? Yes.

</p>
<p><strong>Stacy London</strong><br />
on it now.

</p>
<p><strong>Addy Osmani</strong><br />
So knowing your audience for your performance budgets is really important because you're like, oh, it loads fast, my local network cool. That's not what the rest of the world feels.

</p>
<p><strong>Ryan Burgess</strong><br />
So before we jump into pics, I'm interested in kind of wrapping up the topic by talking about what are some good resources for learning more about web performance and techniques? Obviously, pulling up lighthouse is a really great start. What are some things that people can do to think about performance budgets to really impact their team with better tooling and infrastructure? I'll

</p>
<p><strong>Addy Osmani</strong><br />
give a shout out to a site we we just launched a Chrome Dev Summit called web dev. This is our first developer platform that is entirely centered around lighthouse. So the idea is that you take a tooling driven approach to understanding what are your bottlenecks, and then we customize the guidance that you're given based on what your real bottlenecks are for your site. And the hope is that like, you can track that over time. And if, for example, you regress on something like your JavaScript performance or images, we then tell you, hey, well, now it's time for you to take a look at our code splitting guidance or something like that. So I web dev is a good place to check out. We also have guidance around performance budgets in there. So if folks want to use something like lighthouse and continuous integration, we've got a guide about that on there. Some other stuff you can check out. I'm personally a huge fan of case studies. So the Netflix one was one. But in general, like, what are real things like real teams are doing to improve their performance, because they're generally like really nice nuggets in there around the process. They use the tooling they used, I get a lot of value out of things like bundle analysis, I think right there too, as I want to say is even just talking to other engineers, and actually going back to like, yes, there's a lot of tools, but we are tools as well as like, go talk to other engineers and other people facing these problems and say, What have you found that works? Like, how did you approach it? And and that's why I think I love your case studies for that audience, because you're surfacing that is like, here's something that worked and may not work for everyone. But here's a thought and like, think about how maybe this could apply to your company or your work that you're doing. And just getting people talking and thinking about that. And like things like Twitter are great for that. Just ask others and like get responses and, you know, anything like that, to me is just really asking others and seeing what can happen.

I'll say a perfect The conference last year. The closing talk by Paul Irish was fantastic because he goes over like a bunch of metrics we talked about, but even in way more detail, but overall, there's a lot of good talks there on perceived performance. Like when you have a loading screen what what's the best kind of loading screen what what actually makes the user think something's happening better? Overall, there's something there for everybody. So I recommend it and perf matters. 2019 is coming up pretty soon.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, when is it?

</p>
<p><strong>Jem Young</strong><br />
I won't say March 3. Yeah. Are you speaking? I am speaking.

</p>
<p><strong>Ryan Burgess</strong><br />
There is a natural 100. Sorry.

</p>
<p><strong>Addy Osmani</strong><br />
That's March or April. It's sometime next year. Check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
At the end of each episode, we like to choose picks that we'd like to share found interesting that we'd like to share with our listeners. Let's go around the table and share share today's picks. Stacy want to start off? Sure.

</p>
<p><strong>Stacy London</strong><br />
So this is probably an answer to the last question, but it's also pick. I'm gonna my first pick is react perfect. Tyler, that was released in react 16. Five. So if you are using react to develop your site, we've been doing a lot of performance work on Bitbucket recently. And that tool has been phenomenal for finding out, you know, is is this component re rendering way too many times? Why is it re rendering too many times? And how fast is it rendering what's the, you know, the millisecond count on that. So it's a really cool tool, so definitely recommend that. And then my second pick is a song called Daydream by shelf nany. Sort of a funny name for in musical outfit, but it's a nice dreamy sort of electronic pop song and I like it a lot

</p>
<p><strong>Ryan Burgess</strong><br />
awesome. Mars would do but

</p>
<p><strong>Mars Jullian</strong><br />
they can only have one today. I was just traveling, and I really like the Lonely Planet guidebooks, if anyone is looking for a new travel guidebook, but what I didn't realize and that I totally geeked out over when I found out about it was they also have an app that you can download. And when you do that, you can also download Load the offline map for the area that you're visiting. Which is really interesting. So you know, if you're kind of out and about in a neighborhood you don't really know very well you can just you know, see what's near you especially if you're hungry, that's me to find out what's close by and kind of like recommended by locals so if you're if you're looking for something that works well offline, so it's very performant I would recommend the Lonely Planet. Guide does it work fast Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, we have

</p>
<p><strong>Addy Osmani</strong><br />
for my first pick, I'm gonna pick my Valley silicon pick which is my pick where I pick things that are just ridiculous and should not exist but they only exist because people in Silicon Valley have too much money. first pick is a startup called Yoshi. I am guilty of it. I just use it the other day because like I'm not above saying I live in Silicon Valley and I'm guilty of being Fuji but it is a startup that will come to your work or house and fill up your gas for you. And I know most of this thing is like that's not a real short. For me it is because I have to leave work early to fill up otherwise I get caught in traffic on the way home which In the barrier is substantial anyways, it is a startup that comes to your work and will fill up your gas for you wash your car for you all these things that people probably are like shaking their heads like why does this exist? Exactly this is Valley silicon. My second pick is a movie on Netflix. It's by the Coen Brothers just got released called The Ballad of Buster Scruggs. It's about five or six short tales, but they're really well done and you kind of take away whatever you want from it. There's no like overarching moral tale they don't connect in any way it's just you kind of get from it what you get from it. It's worth watching kind of just to see how you feel about it.

</p>
<p><strong>Ryan Anklam</strong><br />
But I want brother's films to they're so good every one of their their movies is awesome.

</p>
<p><strong>Jem Young</strong><br />
They're very dark though. It kind

</p>
<p><strong>Ryan Anklam</strong><br />
of not Haha, funny. It's like

</p>
<p><strong>Addy Osmani</strong><br />
alright Addy, what do you have picks for our listeners? What do I have picked? My pick is that my first pick is something In the Gemini I've got in common. This is a Netflix show called The Great British Bake Off.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah. Oh, and they just came out with new

</p>
<p><strong>Addy Osmani</strong><br />
there is new episodes or new episodes, I will apologize to my wife else because it is all I've been watching for the last four weeks.

</p>
<p><strong>Mars Jullian</strong><br />
It took me two days.

</p>
<p><strong>Addy Osmani</strong><br />
I haven't been binge watching enough. I think my other pick is a tool called the chrome user experience report dashboard. If if you're someone that cares about some of the metrics we talked about today, but you don't currently measure them in the field. The chrome user experience report dashboard allows you to just like drop in your URL will actually give you a customized dashboard showing you metrics like first content for paint for in the field. You can get a feel for you know whether the metrics you're seeing in the lab are the same ones people are experiencing.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Ryan, what do you have

</p>
<p><strong>Ryan Anklam</strong><br />
so an attempt to redeem myself from my last book pic that fell flat on gem

</p>
<p><strong>Ryan Burgess</strong><br />
gem was into it.

</p>
<p><strong>Jem Young</strong><br />
I was ready.

</p>
<p><strong>Ryan Anklam</strong><br />
I picked the book infinite. Oh, yeah. And that one did not not work out. So my first pick is a book called all systems read its first entry in a series called the murder bot diaries. And it's a novella. It's a short book, it's probably only 120 130 pages. It was really fast, but it's really, really good. So,

</p>
<p><strong>Addy Osmani</strong><br />
so I have read that. I think you told me about it. Or maybe I just found it organically. It is fantastic. And it's very short.

</p>
<p><strong>Ryan Burgess</strong><br />
I was expecting.

</p>
<p><strong>Addy Osmani</strong><br />
What is it about? It's about a in the future. There are centene robots. They're programmed to do certain things like this one is programmed to guard people on a planet. However, he overrode his programming at some point, but it's faking that it's still like in the system. It's worth reading. It's very short. So if you're not into it, you'll you'll be kind of

</p>
<p><strong>Ryan Anklam</strong><br />
goes over how this pact robot kind of evolves as a person and starts developing feelings and emotions for other humans and become more human in the process. So it's, it's a really good book. And my second pick is this new feature I got on my Pixel phone called call screening. And it is the coolest thing ever. So when I get a call now I can tap a little button that says screen call. And an AI will pick up the call and say, Hey, this person's screening their calls, can you leave a quick message and tell them why they should pick up and then it translates it in real time and you can see on your phone, what they're calling for. And then you can choose to pick up or deny it and it is the coolest thing ever.

</p>
<p><strong>Ryan Burgess</strong><br />
That's so cool. That is a pretty

</p>
<p><strong>Jem Young</strong><br />
bad it's very useful. Addy, did you did you do those?

</p>
<p><strong>Addy Osmani</strong><br />
I take credit for that.

</p>
<p><strong>Ryan Burgess</strong><br />
I love it. All right, I actually have three picks. One I've just thrown in because addys talked about the Netflix case study. I feel like Eddie did such an amazing job. We definitely need to call that one out as a pick. It's a great article. I highly recommend checking that one out. It goes into more depth about some of the things that we were talking about today on the episode and then I actually chose For anyone who's into photography I chose a app for I believe it's for iOS and Android. It's called photo pills. If you want to nerd out on like when the right time is for like sunsets and like, angles and everything, like this app goes in so much depth of like the right lighting and everything, I highly recommend checking that one out. It's called photo pills. And then I have a Netflix original that I've chosen that I don't know if Gemma like it, but I really don't care is it's called final table. It came out recently. The way I want to sell you on it is it's if you watch Chef's Table, it's like Chef's Table meets Iron Chef. And basically it's a competition of chefs creating like dishes that they would normally never create. They have to do it in an hour. It's interesting. It's like something I put on the background. It's it's been a good show. Check it out and let me know what you think. I disagree

</p>
<p><strong>Jem Young</strong><br />
strongly.

</p>
<p><strong>Ryan Burgess</strong><br />
You know why? Don't listen to our gem watched one episode when he seen that least three then we can talk but let's He's only watched one episode I wasn't sold on it in the first episode it took me a couple to get into it but I have enjoyed it the like cinematography on it like the photos everything is beautiful like it's really really well done about high quality

</p>
<p><strong>Addy Osmani</strong><br />
I originally thought you're gonna say Iron Fist I thought it's gonna be chefs are Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
gifts fight and you beat more sold on that because I would I think that would be a lot cooler is like some martial arts cooking and Yeah. All right. Well, thank you so much, Addy, for joining us. We really appreciate you coming on and talking about web performance with us. Where can people get in touch with you? Twitter's a great place to check out? I'm at <a href="https://twitter.com/AddyOsmani">@AddyOsmani</a> on Twitter, feel free to drop me a line if you care about web performance chat about it right on. Thanks so much. And thank you all for listening today's episode, make sure to subscribe to front end happier podcasts on whatever you like to listen to podcasts on. And you can also check us out on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> any last fast words.

</p>
<p><strong>All</strong><br />
Cheers. Cheers.

</p>


  `;
  return transcript;
};