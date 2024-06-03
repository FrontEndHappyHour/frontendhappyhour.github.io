module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 18th episode of Front End happy hour. Users are extremely sensitive to web performance. The slightest change in the website's load time can impact a user staying or going. In this episode, we will talk about ways to help improve web performance and why it's so important. Before we get started, let's go around and introduce today's panel. Augustus you wanna start off?


<p><strong>Augustus Yuan</strong><br />
Yeah, sure. My name is Augustus Yuan, I'm a front end engineer at Evernote.

</p>
<p><strong>Sarah Federman</strong><br />
I'm Sarah. I'm a UI engineer at LinkedIn. Uncertain, I'm like, super uncertain, actually, as a front end.

</p>
<p><strong>Derrick Showers</strong><br />
I'm Derek showers, a software engineer.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned, we will all take a drink. What did we decide today's keyword is slow, slow. If anyone says the word slow, we will all take a drink. All right, so let's get started on performance to start with, why does performance even matter?

</p>
<p><strong>Augustus Yuan</strong><br />
I mean, it's super important, because every second that your user has to deal with waiting, like it's a chance that they're going to leave. And it really affects like retention, measurement, like analytics and stuff.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I don't know what this we wish I had the statistics as far as like what the drop off rate is, but I know is like every seconds, especially in a large site like Netflix, or LinkedIn, it's millions of users every second. So

</p>
<p><strong>Ryan Burgess</strong><br />
there's been like some studies published Amazon set found that every 100 milliseconds of latency cost them 1% In sales, that's huge. 100 milliseconds is not much but being able to impact 1% of sales is huge. Walmart also had a study where it said they found 2% increase in conversion for every second that they could save on the load time, little bit higher than the Amazon saying 100 milliseconds with still a second. For Google, they said 400 milliseconds of increased page load time resulted in like 44% loss search sessions. So definitely performance matters. That is, those numbers don't really lie.

</p>
<p><strong>Derrick Showers</strong><br />
If you think about even like some of the most popular websites that are around today, like just Google and Facebook. I think both of those are reason the core reason why there's big as they are, is because of because they started with performance, like first and foremost, right? Like I know, from watching the social network, very reliable source, obviously. No, but you know, Facebook, that that was their big thing, right? Like, making sure that their servers didn't go down to making sure that everything was reliable and fast. And Google, obviously, like you had Yahoo back in the day and a while and tons of graphics all over the place, let's say Oh, well. And then Google Chrome came along, and it's like, one search box on the page. And but the white background look pretty, but it was just it was fast.

</p>
<p><strong>Ryan Burgess</strong><br />
It really impacts the user experience, right? Like, that's like a big part of it is you're gonna leave if it's completely

</p>
<p><strong>Augustus Yuan</strong><br />
slow. Cheers.

</p>
<p><strong>Sarah Federman</strong><br />
So on that note, I would probably categorize stability, performance, as well as if your website is going down. Twitter, and all of those things that happened last week. If you're at scale, it's probably a good thing to have a backup DNS provider. It's kind of crazy that one outage to take down.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, took down a lot of sites. Yeah, it was a

</p>
<p><strong>Sarah Federman</strong><br />
quick, I want to complain about it on Twitter. And then

</p>
<p><strong>Ryan Burgess</strong><br />
website speed also impacts Google ranks. I don't know how much weight Google puts on it. But they actually do care about Google ranking, or like how fast your site is loading. So that's even another reason to maybe make sure that it's a

</p>
<p><strong>Sarah Federman</strong><br />
quick site. Yeah, definitely. And that's becoming more and more of a thing. Search results.

</p>
<p><strong>Ryan Burgess</strong><br />
That's important for your business is like you want to be the top of the searches. Yeah. Being on the second page. never good. And they're the amp stuff that they have now. So it's like you get content. If you have if your content provider, you get it right. Has anyone worked on the amp stuff yet? I know we've been looking at it. But

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, actually, somebody has my pick a couple years ago. And so I looked at it and it looks pretty interesting. I personally haven't tried it, but I'm definitely looking forward to trying it. It's like it like it's cool. Because Google because Google made it like they had given like if you Google something, it'll say it's like amp supported or something.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, actually LinkedIn on LinkedIn feed you there's a badge now that says something's okay. So you also get more than just other
apps or whatever. whereas, you know, like, okay.

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, yeah. And actually, one thing I want to say was it is kind of frightening, because I think as time goes on, like things just get faster, right? Like, I mean, there was one point in time where we didn't have 4g, it was just 3g, or, or edge or.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think that's also something to remember is we have LTE, we have high internet speeds, but not everyone in the world does. And I think that's really important is like, you need to kind of forget about what it's like in Silicon Valley, especially. But even the US in general, we have fairly good internet. But there's like a lot of countries that don't, and like you kind of have to think about those users in that perspective, too.

</p>
<p><strong>Sarah Federman</strong><br />
It's not even about time to start, like, if you're on a bad data plan as a country, it could cost $30. It's obscene. And we really,

</p>
<p><strong>Ryan Burgess</strong><br />
and nothing's that important to spend $30.

</p>
<p><strong>Sarah Federman</strong><br />
And like you don't know, when you're a user, because there's no gauge, it just kind of happens.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I really respect companies that like, take performance to the utmost priority, or they show that they care. Like I really respect how Facebook, I don't know, if they still do it, they did this thing related to G Tuesdays, where every Tuesday the whole company, or something, or some teams like would be on 2g, which is what India experiences on a day to day basis to like help combat that

</p>
<p><strong>Ryan Burgess</strong><br />
just putting yourself in that experience. We've done something similar at Netflix as well. We don't have a specific day or anything. We have networks right in our area where we can actually like connect to. And it simulates being on like a 2g network or even throttle the more and more but it just gives you that experience. So even when you're testing something on like mobile device, you actually start to understand like, oh, wow, there's a lot of latency here. And it's pretty painful. So at least that you're almost like building to that. And then while it's gonna work that much better on like a fast network,

</p>
<p><strong>Derrick Showers</strong><br />
but you're gonna say you have a day where you all watch VHS tapes, I would be

</p>
<p><strong>Ryan Burgess</strong><br />
amazing. I wouldn't know how to watch a VHS tape anymore. You'd have to buy a VHS. Yeah, but even plugging it in would be difficult than some of the TVs they don't have. It's so slow. There's no eight. Yeah, cheers. I'm interested, like, what are some typical areas to focus on to improve your like web application or websites? How do you improve that? Like, where do you start to focus your efforts, and

</p>
<p><strong>Sarah Federman</strong><br />
you should start. I mean, even in the smallest areas, like we've been having on a project that I'm struggling with, you know, like, we didn't take into consideration CSS optimization at the very beginning. And we have in so many selectors, and so many, like descendant selectors. And people think that that kind of thing is micro optimization, but at a certain point, it becomes a really huge issue. And nobody really wants to refactor CSS. So it's kind of something that you should really think about.

</p>
<p><strong>Ryan Burgess</strong><br />
It adds up quickly, like, I think that's the thing is, it's like, slowly, it's not so bad. But then it gets, I also said slow, so tears twice. But eventually, it gets worse, it really starts to be more impactful to leads you kind of

</p>
<p><strong>Derrick Showers</strong><br />
going with it, you're saying Sarah is, the thing that I think has hurt us a little bit is we're, we're so dependent on build tools now. So sometimes, like when we're writing SAS, or, you know, even JavaScript, we don't think about, like, what it's actually compiling to, and like, so maybe an example in the JavaScript world is like, we want to use like, a generator or something. And we were just like, oh, yeah, let's just throw that polyfill in. So we can use it, because it's gonna make my code really nice, but it's only gonna make your code really nice. When you're looking at it right in front of you. It's not gonna make your code production look any nicer. It's gonna go

</p>
<p><strong>Ryan Burgess</strong><br />
look at it. Like what like transpilers to and it's crazy CSS

</p>
<p><strong>Derrick Showers</strong><br />
is probably the best example of that, like, you're saying, Sarah, the selectors super out of control, and just don't think about it. Yeah, I'm writing this clean, sass. As you know,

</p>
<p><strong>Ryan Burgess</strong><br />
it feels great for me as the engineer, I think there is some importance there using transpilers, like for CSS or JavaScript, and we've talked about this on a previous episode, I think it is really important to use them in a development environment. It helps us as engineers writing the code, but at the same time, you also have to think about it, how does that impact the user? And I think that's something too is like there's a balance between the user experience and the developer experience. And you kind of have to make sure that you're thinking both

</p>
<p><strong>Sarah Federman</strong><br />
ways, you kind of have to be thinking about performance in the back of your head, I would, I would say that I definitely favor readability over performance. And like when it comes down to it, when you're writing good, readable code, it's probably going to inspire other people to write good readable code. And that's going to make your website more performance. Even when we're talking about things like functional programming, like when you're using functional programming in JavaScript. It's not as fast as you're creating new variables and passing them along all the time. But it's a really easy way to write your app and it does end up being more performant and a lot of cases

</p>
<p><strong>Derrick Showers</strong><br />
here. Do you think that I think that's a good question is I I struggle with this often with Ember and templating. Sometimes. So you know, like, for instance, if you use in glimmer two is supposed to fix this. But if you use locks, like if if locks, it read like, double essentially doubles the HTML out of the template help it so it's not performance department says like, where do you draw the line for writing readable code? And then getting around the, you know, making maybe not as easy to understand but getting performance out of it. Yeah, you have to know your tools. And I mean, that's probably a good time to like, whether you really want logic.

</p>
<p><strong>Sarah Federman</strong><br />
I'm sure if is like, yeah, these are questions to ask.

</p>
<p><strong>Augustus Yuan</strong><br />
We for context was glimmer. You mentioned real

</p>
<p><strong>Derrick Showers</strong><br />
quick, like, so it used to be HTML? Yes. It was a pic. So you should know

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, sorry.

</p>
<p><strong>Derrick Showers</strong><br />
No, it's so HTML bars. It's like, Oh, okay. Ours really spatially the rendering engine behind. engine behind?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, God. Nice.

</p>
<p><strong>Ryan Burgess</strong><br />
You're not always starting from scratch, like I liked. What Sarah said is that you need to start from scratch, think of performance from the beginning, there's been a lot of times where I've walked into a code base, we're like, whoa, what's going on here, it's like, little things like minifying, the CSS minifying, JavaScript cutting down on the like files that is requesting, making less HTTP requests. That's huge. Probably one of the biggest ones that we haven't even talked about image sizes, like image sizes are so important. I remember this one example where it was actually a site that I was working on, like from scratch, it was I was working for a really small like, agency that like a designer had started. And he had like a client, he had hired myself and another engineer to build an E commerce site for like beer bottles, like selling to different bars and everything. And it we built it on top of WordPress, so that the actual the designer could add all the imagery and everything like that for all the different bottles and like each product, and I remember getting this like nasty phone call at one night of him being like, Oh my God, this site is like not loading, it's so painful, takes like five minutes to load. And I'm like, Oh, weird, like what's going on? So I, you know, jump onto Chrome, pull up the dev tools. And right away, I start seeing these massive four Meg 10 meg images that were full high res images directly from a digital camera that were being squashed to, like thumbnail size. Yeah, that's gonna take forever. But it was just a really good reason to be like, Oh, we really thinking through that. It's just like cropping the images, saving for web making them compressed, save so much, just because there was it was a pretty image heavy site. And you can just imagine, like 20 images that four to 10. Meg's, or requests is huge. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
think this is another Another really helpful thing is to have people that in the middle between front end developer and designer, because like, there's a lot of times where like, I'll get assets on the designer, and they're just completely not optimized at all. And it's like, maybe that designer doesn't really understand the optimization that is required for, for, for putting in, or whatever. And I think that's super important. Which is like more of an understanding, and even on the engineering side to, you know, like more understanding,

</p>
<p><strong>Ryan Burgess</strong><br />
or don't just take what you're given to, it was unfortunate that time I did wasn't given them that someone had actually gone and put the just to me has always stuck out as a good reminder, make sure you check those images, like immediately,

</p>
<p><strong>Sarah Federman</strong><br />
I actually had this situation. Designer, as he was trying to run things through a CDN that was surface images and optimize them. And he just assumed that like, because it's getting optimized, right? It would be better. And he didn't realize that if you shove a high res image into like a tiny box, it's still a small, like a huge image in a tiny box. So like, try and like, make sure that as a designer or developer, you kind of understand how these things work, because it does affect your daily job.

</p>
<p><strong>Derrick Showers</strong><br />
Images. I feel like images, at least in my experience, maybe this is just my experience. It seems like images are one of those things where the designer assumes the engineer knows what to do. So they just kind of hand off the designs or the images, like, you know, however, you know, like, I'll worry about it. And then the engineer thinks that the designer is like the one they thought this out. They thought they've optimized this so that it's you know, and when

</p>
<p><strong>Sarah Federman</strong><br />
you're working with a client who's like uploading images, you also need to because that's your job as whoever.

</p>
<p><strong>Ryan Burgess</strong><br />
And there's no sometimes no way around that too, as you can explain that one all day long. If no, if someone doesn't listen, and they upload it well, like that kind of sucks, but I think educating people definitely works. I think it's important to even in that case there you said like the designer and the engineer both thought they were doing I think it's just worth communicating that and really like saying, you know, talking about how, how small should the assets be and like talking through that, but it's not perfect. But yeah, getting back to even some of the low hanging fruit. Like I think there's even like little things that you can do leveraging browser caching like expiring headers to whether you actually need a resource that's like updated automatically, you could actually leverage the browser cache enabled Jesus, compression, that's, that's huge,

</p>
<p><strong>Sarah Federman</strong><br />
like, classic interview question.

</p>
<p><strong>Ryan Burgess</strong><br />
So these are all the things that you like you should be doing. And if you're not like, enabling Jesup is a pretty easy thing to do. But it's very impactful for improving a website's EAD. So definitely something you

</p>
<p><strong>Derrick Showers</strong><br />
know, 90, probably 90% of the time, you're not gonna have to worry about that is probably done already in the infrastructure you're working with. But to that point, I think that like, you should at least know about it, and maybe check for that. And like, you know, if, you know, ask questions, it's kind of like, it goes back to the same thing as images, things like, you just kind of assume that it's done a lot of times, right. Like, I don't know how many times I've checked to make sure that things are Jesus, especially working for a bigger company, because you know, less likely, but to your point, oh, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
we were checking, we're checking. Yeah,

</p>
<p><strong>Sarah Federman</strong><br />
even if you're not in the little innards. I mean, if you're just doing a simple WordPress site, there are plugins that are especially for that they're just completely abstracted away from you. So just check to do the checklist.

</p>
<p><strong>Augustus Yuan</strong><br />
One thing that I I'm kind of surprised isn't, well, actually, it's been a lot more but just using SVGs. In general, instead of some image assets. Because it is SVG is code, you can just like put it into the HTML and render it like and maybe you can do some CSS styling on it. But and then that's like, no requests. There's zero requests whatsoever. And there's like, now you can do like SVG sprites for icons and stuff. So it's like really nice. And there's, it's way better. I don't see more

</p>
<p><strong>Derrick Showers</strong><br />
issues a web or icons, no.

</p>
<p><strong>Ryan Burgess</strong><br />
Do not, do not use web fonts. Here's another way to speed up your website, remove all those web fonts. That is like one way conversate different conversation, but it will speed up your site.

</p>
<p><strong>Derrick Showers</strong><br />
Your brand, I worked for a previous company had a client they wanted to install, they kind of manage their CSS or their CMS, right. So they wanted to have all of these fonts available to them, including like a font, there's literally a fun thing. Oh, god, she's fun. But anyway, it was 100 times intriguing. It was 155. So they wanted to include Oh, my God or sites if they had access to it and their CMS tool. And we were just like

</p>
<p><strong>Ryan Burgess</strong><br />
one they were always loading it to. I mean, there's ways that you could also like abstract that if it's being used to load it, but still not know, so don't use web fonts. Right there.

</p>
<p><strong>Sarah Federman</strong><br />
If Apple didn't have myriad or Helvetica, their brand would be maybe fine.

</p>
<p><strong>Ryan Burgess</strong><br />
Arial is great. No.

</p>
<p><strong>Sarah Federman</strong><br />
Shame on you. You anti designer.

</p>
<p><strong>Ryan Burgess</strong><br />
I am not a designer Speedmax. Yeah, another thing is over using redirects, that can be a very costly thing to performance. So we've talked a little bit of some ways to improve speeds. What are some good tools to check for web performance? What are some that you use on a daily basis or kind of go to tools to check Chrome Dev

</p>
<p><strong>Derrick Showers</strong><br />
Tools, always
ticket?

</p>
<p><strong>Sarah Federman</strong><br />
dive down? What's your favorite part?

</p>
<p><strong>Ryan Burgess</strong><br />
For me for checking for performance? I would probably leverage the network, or audits has a pretty good dive into some of the like, what's happening as well.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, the timeline timeline is very good with the screenshots now. That's pretty cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's

</p>
<p><strong>Derrick Showers</strong><br />
really cool. Like where it's actually rendering, because it kind of helps you visualize like, where those lines are? Because you're like, Okay, what is? What's that? What does it DOM content really, really mean? Like visually, and you get to see that.

</p>
<p><strong>Sarah Federman</strong><br />
I like the timeline. Especially for like, you're doing like crazy intense, like CSS animations and transitions. You want to see where your GPU is getting like crazy. All sorts of things.

</p>
<p><strong>Derrick Showers</strong><br />
I think you never can learn. And I don't think you can ever be like, know everything about Chrome Dev.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. It's crazy. Because they're always adding more into it, which is great.

</p>
<p><strong>Derrick Showers</strong><br />
There's just so much there that like, like I always I went to four JS advanced Pro Tools. It was the best talk I've seen. And it was you remember who he actually hasn't given a lot of talks. But he was. He was an amazing, like, presenter and he's like, yeah, he came up with like, just really things that you just never would think of Rocco was awesome. Awesome. He was awesome.

</p>
<p><strong>Sarah Federman</strong><br />
I think it was really cool saying like he was talking about workspaces. Now you can persist your code and save it. Oh, yeah. You're like making CSS changes. Like goes away when you refresh.

</p>
<p><strong>Ryan Burgess</strong><br />
I think even something might like go to ones even sometimes just for checking like an overall website. But I'll use web page tasks where it's just like gives you that kind of deeper dive of the entire site. PageSpeed I find like by Google is very useful.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I was also going to talk about wave web page speed test because One thing I like about it is it lets you like proxy, like from any location. So like you could test like from Brazil or from India or, and like especially like for every con like we were doing campaigns for like international retailer campaigns specifically for Brazil, it was like really useful to see what the load time for them was because we were just like, oh, it was in America. And then yeah, and then also like Chrome Dev Tools, it's like really awesome, because they even like, let you control the wings. Well, you

</p>
<p><strong>Ryan Burgess</strong><br />
can throttle. Yeah, you can. Yeah, exactly. You

</p>
<p><strong>Augustus Yuan</strong><br />
can do like 2g or 3g. It's like so so you're

</p>
<p><strong>Ryan Burgess</strong><br />
slowing your website down? Yes. That yours? Yours

</p>
<p><strong>Derrick Showers</strong><br />
is Google Analytics provide any sort of performance measurement

</p>
<p><strong>Augustus Yuan</strong><br />
they actually do? It's freaking awesome. There's like view where you can actually see a map overlay of like, hitting, hitting a specific like path on your website, like, what the page B times like varies,

</p>
<p><strong>Ryan Burgess</strong><br />
which I think is really cool, too, because you get the you get the understanding over time, too. So you can actually look at your analytics put, because I mean, we're always putting new features in. And you're probably impacting that, like latency by adding some new feature. So something like that. Google Analytics does actually show you it like throat like, year, month, or whatever you want to dive down to, it's like you can understand what's happening.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I mean, that's a great point about looking at things over time, we were just looking at a site that I'm working on it, and it was, we actually saw load times increased slightly on the weekends. And so we looked at like some data. And it was actually because the API calls, when there's more traffic, there's more caching that happens when API calls. So since there's less traffic on the weekends, there's actually a little bit more latency on the API calls. So anyway, you wouldn't get that unless you're looking at like, but you can see, we had a graph that showed the traffic and then overlaid on top of it was was DOM content ready, or whatever. And you can see like, the graphs match each other perfectly, like the traffic would go down, and the load time and the super interesting. So he would never get that though, unless you put those two things together, he would have no idea you'd be like, Oh, must be more, you probably think there'd be more traffic on the weekends, because that's why the load time slow or whatever, you

</p>
<p><strong>Ryan Burgess</strong><br />
know, but I think it's important to always like to even leverage like

</p>
<p><strong>Augustus Yuan</strong><br />
slower, slower chairs.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's important to actually leverage those metrics on a daily basis over time, I think it's always important to be looking at those metrics. Some other tools that I find useful, just in their in your build tools, like you can minify, obviously, we talked about that, like minifying, your JavaScript, CSS, like you can do that through Gulp or Grunt, or NPM, or whatever you're running for your build steps. But you can even decrease image size, you can make multiple sizes for mobile, desktop, tablet, I think a lot of those things are really, really useful because it's just something once you build or once you use it, and put it in your build. That's done. You don't have to think about it. Now. I'm

</p>
<p><strong>Derrick Showers</strong><br />
so used to like minification, for instance, like even if I build the smallest thing ever, I'm like, I have to minify that for production. Sure.

</p>
<p><strong>Sarah Federman</strong><br />
If it does that, then I just throw into every personal project. Starting on your boiler

</p>
<p><strong>Ryan Burgess</strong><br />
plate,

</p>
<p><strong>Derrick Showers</strong><br />
you always knew that you don't use broccoli. I thought you worked at LinkedIn. Haha.

</p>
<p><strong>Ryan Burgess</strong><br />
What is broccoli? Who? Yes.

</p>
<p><strong>Derrick Showers</strong><br />
Just wait till cauliflower comes out.

</p>
<p><strong>Ryan Burgess</strong><br />
We're all at different companies. Do you monitor performance on an ongoing basis? Like what metrics? Are you looking for your companies? Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
well, we started caring a little more, it's still kind of an ongoing thing to like, push. But I guess for us, it's been kind of like fuel send seldomly have like efforts like, Okay, for this like, week or month, we're going to try to focus on performance and stuff. But I mean, naturally, like, if we see something that is affecting performance, we, we kind of gauge the impact of like, how much does this affect? Actually, like, we have like this pretty cool story of, so we use quit for evernote.com for like the dub dub dub.evernote.com? Well, he is good to transpile our Java code into JavaScript. And there is this one instance where we're doing this string dot equals. And what we didn't realize was it's not just a normal like, equals equals equals and JavaScript, which is really fast. It does like the Java comparison, like compares this Java if this like object is a Java object, which is extremely expensive. And we would like do it if like a note, content change. So it takes this gigantic note, does this really expensive operation to check? If it's like, well, string probably do that a lot. Yeah. And so we noticed, so someone like notice, like, this is like kind of slow. And then we so we notice that like, it was getting really slow, like we started doing. I don't know how they did it. They didn't do the console time time thing. But that would have been pretty useful. If we knew that. I think we just looked at some of the Chrome Dev Tools stuff. And once we like switch that out for the equals equals, it was just like way faster.

</p>
<p><strong>Sarah Federman</strong><br />
I think it's funny that we have tools that check performance, because I mean, I have a friend that like got all sorts of Pat's on the back the other day because he got alerted within 30 seconds that one of our metrics was down turned up being the service that was kind of kicking it. So I don't know, I think it's funny that we write tools to do this.

</p>
<p><strong>Derrick Showers</strong><br />
I think it's good. I mean, because without having tools in place, it's it's very subjective. And like, you know, how often do you get like, Oh, this feels slow. But like you unless you have data to back that, like, it can be so many different things.

</p>
<p><strong>Ryan Burgess</strong><br />
True data is super important.

</p>
<p><strong>Sarah Federman</strong><br />
If it feels slow, it's probably way past load. Just yeah, I mean, yeah. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I miss a couple there tears. Three directs? Do you guys look at anything like TTI? Like time to interact? Or TTR? Like time to render? Is that anything that you typically like? Is that some metric that like, I know, that's something that we look at Netflix, but I'm interested to know, is that something that you guys look at as well?

</p>
<p><strong>Derrick Showers</strong><br />
We do. And it's interesting, because we're moving more towards single page app experience. So on our mobile platform right now, and soon to be on desktop, but so you that changes a little bit. So yet, we have to put a lot of custom events in so that we know when that time to render actually happens, or we get probably a lot of really nice data, because it'd be like rendered in two seconds with a base page that has nothing on it. Well, not two seconds. Probably hopefully, shorter than that.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, naught point you can Lazy Load certain things they don't. Doesn't everything all at once. Yeah. TTI, which is like timed interact, how fast can the user actually interact with the page, if they have to wait for the entire DOM to load? And every little scripts that you've added? If they have to wait for everything to render? Well, then that's gonna be pretty

</p>
<p><strong>Sarah Federman</strong><br />
slow. So do you guys start implementing these lazy loading? And like, learning blurry images? Do you start doing that from the beginning? Or would you like, hit a certain metric? And then go back and start improving? How would you approach that? For me?

</p>
<p><strong>Ryan Burgess</strong><br />
It's both. I think there's ways that we can think about that stuff ahead of time, something's wrong, and we need to be more performant, then you start to leverage some of those tools and say, like, how can we improve this? How can we lazy load these assets? after the fact? I think it's too hard to do upfront, it's great to think about it from like the get go. But I do think it's it comes you have to think about that sometimes afterwards, you're adding new features all the time, right? I think if you're building from scratch, fine, but that changes over time. And so I think you have to sometimes change as you go.

</p>
<p><strong>Derrick Showers</strong><br />
I agree. So we did the same thing. So but I do actually think you should challenge yourself in your team to think about it from the beginning. And not even say you're going to think about it later. Because it because in reality, there will be things that you you you haven't thought of that you'll have to in performance always is like, kind of the last step. Not not ever, not all the performance, but it's kind of like, okay, I'm done with the feature like now how can we it's kind of like the same as refactoring code, right? You write some code, and you're like, Okay, how can I make this more performant? Or how can I refactor this make this better? Same thing kind of comes through with with performance just as a whole. But I think if you challenge yourself and your team to start from the very beginning to think about that kind of stuff, it's gonna make it a lot easier.

</p>
<p><strong>Augustus Yuan</strong><br />
Or even just like setting up the tools that like, kind of like gauge that, like, I know, like, I've recently started doing my react and there's like that react add on that, like, react curve was so so it's so awesome. It basically will tell you how many times like certain components are re rendering. And it's just like free. You just like put it you just shove it into your project like to your when you have like dev mode on you can shove it into your project, I will tell you how many times a React components re rendering. It's just like so helpful.

</p>
<p><strong>Derrick Showers</strong><br />
If you're listening, we need that forever.

</p>
<p><strong>Ryan Burgess</strong><br />
Ember is open source Derrick, you could write something. Yeah. When building new feature for your product? At what point? Do you start thinking about forms? We kind of touched on that a bit like Sarah, you kind of asked that, of like, when you should start thinking about it. But is it from the start? Is it an ongoing thing? Like,

</p>
<p><strong>Sarah Federman</strong><br />
what do you think I wouldn't overemphasize it, though, like, you see a lot of really ROAs code, not really readable, this, you know, doing a lot of micro optimizations. So I would avoid that I would try and do things, see me. And then if you hit 10 points, go back, but like, just keep thinking,

</p>
<p><strong>Ryan Burgess</strong><br />
you don't you shouldn't overthink it.

</p>
<p><strong>Sarah Federman</strong><br />
Like if you're trying to kill, I don't know, what a good example would be probably maybe like, killing code lines of code, or like, you know, not declaring variables and like reusing them and stuff, like things that are harder to debug. I would avoid that. For the sake of readability. I don't think those are really going to help you in long run their Microsoft positions. I also I think that we kind of tend to overemphasize performance sometimes, especially in interview context. Like I would totally rather have somebody that writes like readable code and knows how to work with others that can, like read Diego, something's going to be in a library that you're using.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, here's the thing, I think like bug free code is probably more important than, like, the micro optimizations. I'm not saying not writing provide. I totally agree. I think that there, you could get a little bit too, over a little bit too crazy about micro optimization, like, like we like, I can't think of a really good example now. But it's just like, with like, some of the JavaScript, you know, differences between like, four h or F.

</p>
<p><strong>Sarah Federman</strong><br />
What? Variables?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I mean, there's just like a lot easier with like letting haunts sometimes you're

</p>
<p><strong>Augustus Yuan</strong><br />
saying that should be better. Readability is always important. And then the minifier will take care of the performance handling and stuff. But I struggle with that a little

</p>
<p><strong>Ryan Burgess</strong><br />
bit, though. Yes, I agree that sometimes you can over optimize. But I think like sometimes being conscious of what you're choosing even not for loop or for each or whatever, is understanding, like what the best resource for what you're trying to achieve. And like for performance, I think it is important that as your code base grows, those little things matter. And they add up. And when you're on a large code base, like LinkedIn, Netflix, Evernote, that does matter. And overtime, that can really impact it,

</p>
<p><strong>Sarah Federman</strong><br />
I think a lot of it is just knowing your tools, too. Sometimes, we sit there and we're like, oh, my gosh, is going to be so slow, it's going to be so slow. But then you get into it. And you're like using virtual DOM and virtual DOM kind of makes it fast. And a lot of times, and you just kind of can abstract a little bit of that away from you. But like, how many things use virtual DOM I was doing else last weekend, and I was like, I sat there. Like, as I was reading through the content that we were gonna learn, I was like, Wow, this sounds really slow. And then like, two seconds later, it was a paragraph that was like, This sounds like it's gonna be really slow. But hey, we have this great virtual DOM library.

</p>
<p><strong>Ryan Burgess</strong><br />
I gotta cheers you on like multiple drinks there, there's a couple flows.

</p>
<p><strong>Sarah Federman</strong><br />
Cheers drink for Sarah,

</p>
<p><strong>Derrick Showers</strong><br />
I guess what maybe. So like proper tail calls or something like that, right? Like super obscure stuff that like, you, maybe it's maybe it's even more like, it would take you so much time to sit to, to learn, like what the right way to do that kind of stuff. And you're saving. So such an insignificant amount of time, that just don't know that that kind of stuff is worth, I just think there's, there's, there's somewhat of a lie. Right. And, and whether it's readability or whether it's just like investing yourself in like, which one is more performant by like, you know, whatever the the, the, the metric is gonna be extremely slow like that you can over obsess with

</p>
<p><strong>Ryan Burgess</strong><br />
something like the Amazon metric, they quoted saying, like 100 milliseconds of latency cost some 1%. Sales. 1% is huge, you know, 1% is a big deal. And 100 milliseconds is not a lot. The difference between a like for loop or a for each, that could make the difference that could be that 100 million. Yeah, I agree.

</p>
<p><strong>Augustus Yuan</strong><br />
I don't know, for me, I feel pretty strong, strongly about I think you should always be thinking of performance. And, and from, from the very start, I actually, I feel like, when you're engineering a website, or web application, like, the ideal way to do do it is the performant way, like, that's the ideal weight. And when you have like really strong engineering fundamentals, the solution that you come up with will be the most performing one. I will say that like maybe cases where performance you might not consider it is like, for example, when you're doing a B testing, and you have a feature that's being just being tested, and you really just need to ship it, you're just testing it, you're not even sure how it will perform. So like, it's just gonna run for a week, and you just really need to get out the door, then maybe in most cases, it makes sense. But like, I feel like, there's never any reason you shouldn't be

</p>
<p><strong>Sarah Federman</strong><br />
thinking about requirements. So I really feel like we should be aware of our use cases. Because like we have a couple of years ago, we had this situation where everybody was like Ruby on Rails is awesome. And then Twitter was like Ruby on Rails doesn't really scale that well. And that that might be true. But for a lot of apps, that's perfectly legitimate. Wait, write your app. And like it's still great for developers. Most people aren't going to hit your scale. So you're not really going to need to worry about that. So I was interviewing a candidate the other day that when we asked the scenario, a question about what was a project or problem you faced, that you solved, and how did you solve it. And he was talking about how he was writing this like, map library. And he was focusing on feature richness because it was that was the project that he needed to do. But when he started to drill down and had a client, it was using a ton of data points. He was having a lot of struggles with panning and zooming the map. A map with all these data points on it is really hard to do. And in that case, the performance was really bad. But the solving that had already been solved by like Google Maps where they do the glory map, and then they re render it in the background while you're doing panning. And so like in that case, like, he was focusing on feature richness at the very beginning, but when it came down to performance, he was kind of able to creatively and get perceived performance instead.

</p>
<p><strong>Derrick Showers</strong><br />
And I think maybe along the same lines, mujer st is also like, when you're prototyping something, you're just trying to like, yeah, like, figure out how stuff works, or like just building something like as a proof of concept. Maybe performance isn't like, it depends, like maybe you're building. Maybe the prototype is about performance and obvious or not about performance, but about like improving something. Yeah. I mean, there's definitely different use cases. But like, if you're, if you're building a prototype, that is probably one example of something that you may not have to worry about performance. Maybe you think about how that's, you always have to have that question about how it scales, right. But

</p>
<p><strong>Ryan Burgess</strong><br />
well, if it's not production code, that's a different thing. As you're trying to prove something out, I think the prototype is exactly what you're saying there. And it's to test something out. It's not necessarily going into production. Maybe once you start putting in production, that's when you start thinking about it. I think that's okay. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
like, I remember, I built like this, three 360, like, thing where you like, drag your mouse around, and like, moves this, it was a prototype for Sony, actually, where he like, had like a controller, you could zoom in, you could like, go around, and like you had all these, but like, I think I loaded every single image for this thing on the page. Right. But, you know, just, yeah, it went to production. Now, just kidding. But you know, it's just like, obviously, that was, that was the least of my concern, like, I was just trying to make this thing cool. And then like, you know, it would go back and obviously figure out how to load this image,

</p>
<p><strong>Sarah Federman</strong><br />
I just, I think we should definitely just be aware of your use case. Like, if you're trying to build something that's really feature rich, and performance is not like biggest concern. Like, you need to establish that at the beginning of your project and then build it.

</p>
<p><strong>Augustus Yuan</strong><br />
I mean, something that's slightly slow and working versus something that's really fast and not working. You would rather have the slightly slow working version. But if you could make it faster.

</p>
<p><strong>Derrick Showers</strong><br />
But I think you can get yourself in that it really, right? Because if you don't if you because I think you can be get yourself too concerned with just getting this to work. And then you're like, oh, shit, this works. But it's really slow. And then and yeah. And then you have to refactor everything that you wrote. Whereas it probably would make more sense. If you thought about that. It just depends on what

</p>
<p><strong>Sarah Federman</strong><br />
you're doing. It's interesting when you're building libraries and frameworks to consider this, like, a library can either be something that's a very small thing that only does a couple of things really well and format. Or it could be this really flexible thing with a ton of features and views and a lot of different ways, which is obviously not going to be quite as the

</p>
<p><strong>Ryan Burgess</strong><br />
people who create frameworks react Ember, Angular, there's even as they grow, there's things that they're adding to help perform better. I think react 14 had a bunch of performance enhancements. There's like a lot of things that even the frameworks are trying to help improve that over time, for we end, let's go through today's picks. What does everyone have for their picks? Augustus you want to start it off.

</p>
<p><strong>Augustus Yuan</strong><br />
Okay, so my pics, so actually, Derek actually mentioned it earlier. There's this real time performance with Chrome Dev Tools talk before JS I think there's actually a YouTube video of it. So that's one of my picks. I also thought there's like a great talk. I unfortunately missed it after talking to Derek about some of the things it was like really

</p>
<p><strong>Derrick Showers</strong><br />
Oh, actually, I had a different one. Oh, is a different one. Yeah. So there's there's more okay, well,

</p>
<p><strong>Augustus Yuan</strong><br />
well, there's this one too, then you can check this one out to the other pic actually, was came from a Netflix talk, where they were talking about how to optimize for node j s. And there's this like, cool library called flame graph where I believe Netflix uses it to like, kind of gauge

</p>
<p><strong>Sarah Federman</strong><br />
yah,

</p>
<p><strong>Augustus Yuan</strong><br />
yah, yah, yah.

</p>
<p><strong>Ryan Burgess</strong><br />
Yah, yah.

</p>
<p><strong>Augustus Yuan</strong><br />
Yah. So I thought it was a really cool library, like it just like visualizes how much certain tests are doing. And I get granted, you could do the cost of time thing that Eric was mentioning with Chrome Dev Tools. But those were checking out.

</p>
<p><strong>Ryan Burgess</strong><br />
Sarah, what do you have? Oh,

</p>
<p><strong>Sarah Federman</strong><br />
so you, I just did this really awesome.

And super awesome. I encourage anybody who's interested in learning codes to help rails rich, rich code. They have a bunch of really cool all day free workshops. Super awesome. And then my second pick is he injects ah, Rachel. So in checks is like a CDN that optimizes your image delivery. And it's super great. A lot of big companies. Actually, professors use it. I use it on my website is is a really great way to optimize your image delivery. And there's a huge API for like editing your images on the fly and doing responsive things. They publish this tool that actually lets you put on a website and see how much of an impact your images are currently having. And it shows you how to use really awesome. And then my third pick is just CSS triggers is kind of old. But it's just a way to know when you're animating or changing things and CSS, what the performance aspect is going to be. Is it going to cause like a composite? Or is it going to cause complete flow? These are great things to be aware of. That's very cool.

</p>
<p><strong>Ryan Burgess</strong><br />
They're cool. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
So my first pick is this shameless plug here. It's what I've been working on for the past, what is it October, so 10 months, LinkedIn, LinkedIn learning. So it's essentially a different flavor of Lynda which we LinkedIn acquired them about a year ago. And so it kind of has more of the social integration piece of it. So definitely recommend checking out linkedin.com/learning. And this week, if you're having a chance to listen to podcast right away, this week, we're doing a free week of learning. So we're giving everyone the ability to learn every single course on Linda's live Linda's library and now LinkedIn learning for completely for free. So, so we all need to jump on that to jump on that there. I checked, there are courses on our videos on performance. So

</p>
<p><strong>Ryan Burgess</strong><br />
so don't just listen to us listen to the Lynda videos. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
They don't drink in the videos. Don't be slow about it. Over. Nice, so I want to pick and then my other two picks are are more fun. And we started talking about TV shows of the Venus episodes I had. So the first one is black mirror. I watched black mirror the first and second episode, British TV series. That was amazing. Netflix picked it up and just launched last Friday, and they just launched the season three, with more episodes than the first I think like the first and second season combined. So really, really awesome. Every episode has a different writer and a different story if you like like the kind of episode you like, just like the plot twist, and you're like, Well, what the hell just happened. Wagner is definitely for you is really awesome. And the other one I started watching is called Man in the High Castle. And have you guys ever Yeah, so it's on Amazon. So you know, if you don't have Netflix to one's about if Germany and Japan won the war? What would happen? So like America is split between the Nazis and the Japanese and the Japanese. And they actually San Francisco is in a big part of the story because it's like, yes, and then New York is obviously controlled by the Nazis, but, but it's a really cool show. It's only 10 episodes. It's more of a miniseries but definitely recommend.

</p>
<p><strong>Sarah Federman</strong><br />
Awesome. So I

</p>
<p><strong>Ryan Burgess</strong><br />
wish Jem was here today. But so Gemini we're both speaking at full stack to which is in Toronto this past week. And it took him to my favorite restaurant in Toronto, which is called Polanski's Deli. It's like Jewish deli. My favorite thing there is like the smoked meat sandwich. So good. I highly recommend if you're ever in Toronto, that's like the one restaurant you have to go to. It's so good.

</p>
<p><strong>Derrick Showers</strong><br />
What a gem water. I

</p>
<p><strong>Ryan Burgess</strong><br />
need to know what he ordered that obviously, and he was so good that he actually was like, let's go back there.

</p>
<p><strong>Derrick Showers</strong><br />
So that looks good. I'm just looking at their website right now

</p>
<p><strong>Augustus Yuan</strong><br />
this just like,

</p>
<p><strong>Ryan Burgess</strong><br />
a lot of things on the menu are good. But to me, the smoked meat sandwich is just delicious. You don't need anything else. It's like It's like some rye bread with like a stack of meat. And that's it. Yeah, you can add some mustard if you want. You don't need it. It's delicious. So good. My second pick is actually Gustus kind of mentioned in the episode was the React perf tool. I think it's amazing. There was an engineer on our team, just even last week was showing me like a lot of things that we could improve upon in our own codebase at Netflix, and it really really dives deep into like just small little optimizations. Very, very useful if you're using React definitely to checkout. Thank you all for listening to today's episode. Where can everyone find you all panelists, Augustus?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, yeah, you can find me on Twitter at OG Berto. A UGV.

</p>
<p><strong>Sarah Federman</strong><br />
You are to you can't find me. I'm actually just kidding. I'm Sarah underscore Federer manager.

</p>
<p><strong>Derrick Showers</strong><br />
If Twitter's working at Derek showers, if not, you can find me on LinkedIn which always works.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a> on Twitter. Thank you all for listening to today's episode. Make sure to check us out on iTunes and Google Play. Rate us to let us know how we're doing. And follow us on Facebook and Twitter. Twitter at Funen hh. Thank you everyone. Any last words?

</p>
<p><strong>Sarah Federman</strong><br />
I love you guys and whiskey.

</p>
`;
        return transcript;
    };