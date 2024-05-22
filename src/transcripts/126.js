module.exports = function() {
'use strict';
const transcript = `

<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode, the front end, happier podcasts. We've often been hearing a lot about this core web vitals and you know, it's it's pretty interesting subject that's coming. And so we have Addy and Chris from Google to talk with us. They're the experts. So they're going to share a lot of information with us. Addy and Chris, can you give brief introductions of who you are, what you do, and what your favorite happier beverages?

</p>
<p><strong>Augustus Yuan</strong><br />
You're?

</p>
<p><strong>Addy Osmani</strong><br />
I'm Addy Osmani. I'm a senior staff engineering manager working on Chrome and web performance. All of my thoughts are definitely not web vital. And I forgotten your question.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, you've covered most of it. And then what is your favorite Happy Hour beverage?

</p>
<p><strong>Addy Osmani</strong><br />
I enjoy some good rum. Right now. I'm having some by taking it very light.

Nice.

Kristopher Baxter  
My name is Christopher Baxter. I'm a software engineer at Google. My job is to make websites. That's how I typically explain what I do. Wait, my

</p>
<p><strong>Ryan Burgess</strong><br />
Wait, isn't that all of our jobs?

Kristopher Baxter  
Yeah, pretty much. The thing that I focus on at Google is web performance as it relates to websites outside of Google. So what I mean by that is trying to help pages perform better as they're linked to by Google search, for instance, which we think makes the web a better place. If things are faster and more responsive. So that's what I do. That's who I am. favorite beverage. I love beer. I think beers fantastic. I think I said that the last time I was on though. So this time, I will call out a specific beer, which is spotted cow from the glass, because I'm here in Wisconsin. And that's the only place you can get it.

</p>
<p><strong>Ryan Burgess</strong><br />
And it's it's a good beer. I'm a fan. I've only had it a few times. Ryan anklam was nice enough to bring me a few times. It's great. All right. Well, let's also give introductions of today's panelists, Augustus you want to start it off. Yeah, sure.

</p>
<p><strong>Augustus Yuan</strong><br />
My name is Gaussian. I'm a software engineer at Twitch.

</p>
<p><strong>Shirley Wu</strong><br />
I am surely Whoo, independent creator of data visualizations.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a senior front end engineer at Trello.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix, and each episode of the front end happier podcast. If we choose a keyword that if it's mentioned at all, in the episode, we will all take a drink? What did we decide today's keyword is true? trade offs. Alright, I'm sure we're gonna be talking about some trade offs. So that will likely come up. I want to start off by asking you all, what are core web vitals? What is this? What are we talking about?

</p>
<p><strong>Addy Osmani</strong><br />
I guess I can I can take a stab at this and then hand hand things off to Chris for the better answer. Oh, no.

</p>
<p><strong>Ryan Burgess</strong><br />
You just like you're like, I'm gonna ease this in. And then I'm gonna throw it all on him. He threw him under the bus hard. I love it.

</p>
<p><strong>Addy Osmani</strong><br />
It's what I'm here to do. So I would say that. Historically, when we thought about web performance, a lot of people, you know, thought about things like, you know, the load event. But that that is not particularly well tied to things like how users experience web pages. And so over the last couple of years, we've been trying to evolve how we think about performance to be framed around it like a few key questions. And those questions are things like you type in a URL into your browser. Is it happening? Did you know The Navigation start? Has a server actually started responding with anything at all? Is it useful? has enough content actually rendered for you to be able to get some good value out of that page? Is it usable? Can you start interacting with it? And then after it's loaded, you start getting into this interesting space of is that page? And is that experience delightful? So are, you know, is the page relatively smooth and settled? Is it free of lag or jank? And the core vitals kind of build on this overall idea, their set of kind of unified guidance for quality signals that we think are kind of foundational to most web pages. And so it's kind of like three, three metrics in there. There's large Contentful, paint, first input delay and cumulative layout shift. I'm going to let Chris talk about what those metrics do.

Kristopher Baxter  
Oh, that's a good question. But so I want to expand slightly on the first part, too, because I think there's, there's a little bit that's not not well understood about core files. And so there are a lot of web vitals, right, a lot of signals about the reliability and usability of a page. But there's only a certain subset of those extended web vitals that are applicable to all pages. And that's what core web vitals represents. So you can imagine a set of signals in the web titles that extend beyond the three that we're talking about mostly. So for instance, accessibility signals, or around signals that pertain to the ongoing interest On page, like long tasks on a page, and those are not applicable to all pages right now. And that's not because they're not applicable to all pages, it's because they're just not fully measurable yet. So you could expect that right now, the definition is three things, right? And that's because it's measurable and knowable from all pages. But as knowledge increases and capabilities increase, more things could qualify. And it really ties around like it said that that end user experience, is this actually something usable for folks to try and consume and use and participate in the largest library ever to grace the planet. And the last thing is, it is measurable from real user data. It's not lab data, it's from real users active actively using real things on the real web. And that means that you don't have hypothetical arguments or concerns about technology choices, right? It doesn't matter if you use React or react or Ember or whatever else. What matters is what end users get, and how the those those documents these things work. So adding mentioned LCP FIDH, and, and CLS, so I am cheating, I pulled up the definitions for these some warning and events. But but really, LCP is about giving something to a user, that is not just a filler piece of information on the page, it's something that represents the content well enough that you can understand what the page is doing. So for instance, if it was a very large image on E commerce, like, Item Page, that would be the LCP element, the largest Contentful paint. So first input delay is about interactivity. And it's specifically around the interactivity for that first input. So there's a tremendous number of documents across the web that have this hydration pattern in many different frameworks, where something looks ready, but then you got to interact with it, you have to wait a very long time for that first interaction, since that's pretty easily measured, compared to a lot of other interactive metrics that applies. And then the last item is cumulative layout shift. And cumulative layout shift is the one that I think is the most interesting of these three, because it's fairly new, comparatively. And it aims to understand how content moves on a page without the user's permission. So this is specifically the example I always give is a a shopping cart with two buttons. One is buy one shirt, and one is buy 1000 shirts, and you go to click on buy one shirt, you accidentally click on 1000. Because those,

</p>
<p><strong>Addy Osmani</strong><br />
your example of cumulative layout shifts is probably better than the one that I usually give people, Chris, I usually say, you know, imagine you're in the Bay Area, and you're like reading a book during an earthquake. That's what CLS feels like, because everything's kind of shaken around the page. But I like your shopping cart example. I thought that was like, it's pretty close. While most people probably feel.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, some people might be sitting in the Bay Area, get reading the book. And that happening. I mean, it's never happened to me yet. But it makes sense. I like it.

</p>
<p><strong>Stacy London</strong><br />
It's like when you go to a recipe site, and you scroll really fast right away, because you know, you want to get past the 200 Paragraph introduction to get to the recipe and you get to it, but then all that other stuff actually loads, scrolled out and then you lost the recipe.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that too. Yeah. Or the ads start shifting and you're like, Wait, that's I was reading that.

Kristopher Baxter  
Speaking of trade offs, those those articles where they're trying to figure out how to balance advertising revenue, and content with other factors, right? Yeah, the recipe industry as a whole is fascinating. It's a very unusual anomaly across the web. Not many other places look like recipe websites, across the web.

</p>
<p><strong>Ryan Burgess</strong><br />
And so Chris, when you say there's the trade offs, cheers, ears, that they're dealing with ads and like that can actually hurt the content and not like hurting scores ranking for these metrics?

Kristopher Baxter  
Yeah, absolutely. Um, if you're, let's say you're a recipe website. And you have five really, really good recipes, right? Your lasagna is amazing, right? And people visit your website for your lasagna. You really want to capitalize on the fact that those five recipes are what people come to your site to see. Right? And so a lot of recipe websites or other things too, right. I'm not trying to pick on recipe websites, but the the a lot of those pages will have a lot of ads on them at that rotate and change on without the user's request. And it's because that is the prime piece of content that provides revenue that supports the rest of that content. Right? Yep. It's a tough trade off, for you to figure out how to monetize your, your content.

</p>
<p><strong>Addy Osmani</strong><br />
Cheers. I wanted to build on what Chris was saying very quickly. I think that one of the challenges we see recipe sites, all sorts of sites struggle with at the moment when it comes to layout shift, is that you need to really set the mentions on a lot of the content in your pages to make sure that the browser's kind of got these kind of spaces reserved, so that you know, text loads, also their content loads, so that nothing else is going to shift things around with sites that you know, use a lot of ads, in particular dynamic ads, it can be tricky to set those dimensions ahead of time, in a way where, you know, maybe the server can give you those dimensions consistently. And that's what we're seeing people like now start to think about, well, how do I, how do I tackle that? Do I look at all of the ads I might serve, and maybe, you know, figure out what the median height and width of them, you know, are and set that as like the fixed container size? What do I do about any base this left around that kind of iframe? And these are really interesting questions. They're also really interesting challenges that I don't think we've necessarily solved just yet. But I'm glad the CLS is causing us to at least question them and have those discussions.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I think it builds a better user experience too. Because like, I mean, we just said about the recipe site and how you're in the middle of reading, and then ads just fly in and it does it re it shifts everything around, it's super obnoxious. I find even worse on a mobile device, too, because you've got limited real estate. Now. It's like, where am I not gonna scroll even more to get to where I want it to be. So I do love that. And I think that, you know, to your point, trying to figure out those sizes, when it's dynamically it, that's hard. And it'd be cool to is like, maybe even getting that from ad services, where it's like you are getting something sent to the server, which that's hard to because these are all on the client super interesting problem to try and solve.

Kristopher Baxter  
The next part of that, too, that makes it impossible it many times for you to know the size of an ad, always because of things like header bidding, or because of very complex algorithms that are being applied to determine what part of an inventory from the n number of providers you work with luxury fulfill that slot. At this time. It's very difficult to get this right. And the only answers that really exists so far that do a decent job are also controversial.

</p>
<p><strong>Ryan Burgess</strong><br />
I am curious, a little bit on some of this, too is you mentioned new metrics, why these metrics are why are they so important? I mean, it's come up a little bit as you both been talking, why the metrics and like why now

Kristopher Baxter  
I'll go first this time, and then Addy can get the real answer. I think why now? Let's start. Let's start there. Yeah. Well, if not now, when? is really part of the answer, right? The best answer would have been many years ago. The second best answer is today. The real reason those a lot of these things were not measurable for a very long time. And there wasn't enough data to prove, right? That these were valuable things to users, right, we can all create metrics that we think are interesting or usable. But you really need user research to inform those decisions. It can't just be an arbitrary. Chris doesn't like layout shift. So the web shouldn't have it would be horrible, right? Everyone's websites would not have any custom fonts on them. They'd be really ugly. versus web. But, but as a result, like you need to take into account user research. And that is, I think, the main motivator for why now. Also, things like CLS were harder to measure for very long time, because they're potentially very expensive to measure. Imagine you the browser and every time you paint something, you have to remember how large that surface was the last time you painted it. And if it changes, you have to then understand what kind of scoring to apply that next paint for every frame for every single element on the compositor, like it gets expensive and difficult to calculate. And the engineers in the Chrome team are really smart, and they were able to make it work.

</p>
<p><strong>Addy Osmani</strong><br />
Chris got it. Right. So I'm gonna I'm gonna say that his answer is probably the right one. And I'll add some some Cliff Notes to that that are probably look good. I think that we've been working on crying to speed up the web for a very long time. And lots of people have been contributing to this effort. But we've also had a lot of metrics. You know, this isn't the first year where, you know, Google or other browser vendors are coming out and say, Hey, take a look at these metrics. Try to improve prove them. You know, we've had things like the lighthouse report, we've had PageSpeed Insights, giving you a score and these other tools trying to score you on user experience. But to be honest, I think that there's always this risk of us coming up with a lot of different signals on a lot of different metrics that people have to pay attention to. And where do you focus your time. One of the things I like about the COI vitals is that it's really this, this nice filter on user experience, just getting you to think about like, what is fundamentally important. Chris already talked about what you know what the metrics do, but I like this idea of at least giving you a finite set of things to start off with. And the chord vitals are really just a starting point, you know, if you understand user experience, if you care about optimizing user experience, they're probably lots of other signals that your site also cares about taking a look at. So a good way to think about it is it's really just the beginning of a longer journey. In terms of optimizing your experience. That's really

</p>
<p><strong>Ryan Burgess</strong><br />
cool. We've all been there. We've all like, probably seen that too, for especially on the performance side, you know, we looked at metrics like TTI for so many years, and then it was time to render or we just started to try and focus on something it may not have been perfect, but I love what you will I think Chris said, too, is we needed the user research too, right? It's like around something like TTI, it was like, Okay, well, this is something that we can measure. And you can see that go up or down over time. It's giving you something but it's may not be the best metric. And I love that these metrics actually really hit on user experience, because that's what we're trying to make the web do is rush making it fast for us like I mean, it's not just like, Yeah, my site is 10 seconds faster. There's a reason why that it is it's for the better user experience,

</p>
<p><strong>Stacy London</strong><br />
I wanted to ask just for everyone's benefit, who's listening to the show, as well as TTI, or time to interactive, I think was a pretty commonly used metric. What is the difference between kind of what that was capturing and what what vitals are doing?

</p>
<p><strong>Addy Osmani</strong><br />
I'll start off by saying that we've been working on interaction readiness metrics for a very long time. And there are metrics that are really good. From a diagnostic perspective. So things that we can measure Well, in the lab, and times interactive. One is one of those metrics that are really good from a lab setting, we can help you understand like, holistically, what is the overall cost of heavy JavaScript long tasks that might be pushing out how soon people can like interact with UI. But metrics, like TTI, are also a little bit harder to measure in the field. And this is one of the reasons why we have first input delay, like the first experience people have trying to interact with your site is a pretty important one. You know, people say that first impressions matter. And I think that it's good to think of bid as being this, this starting point. We are thinking about, you know, what are other metrics that allow us to reason about interaction readiness for a user's entire session? I don't think we're quite there just yet. But yeah, Chris, do you have any any other thoughts on on this one,

Kristopher Baxter  
I really like the breakdown of lab versus real world metrics. So the things that matter the most are what happens with real users on real devices on real networks that are accessing your content from all over the globe. But when you're trying to figure out how to improve, that's a really lossy signal to write it's, it's there's a lot of delay, you can't simulate that on your local device, you can't see how the responsive changes would happen if you tweak one thing or another thing. And so that's where the lab metrics come in. The lab metrics are a proxy for the real world metrics. And so things like TTI are very valuable in those lab settings. And you can tune and really iterate and get to a place where you're ready to put something new out, and then see that it does correlate or does not in the real world metrics. So yeah, that separation I think, is pretty vital for for understanding where to make changes,

</p>
<p><strong>Ryan Burgess</strong><br />
I'd be interested to is this is it's coming taking effect soon, right? We're we should be expecting best practices to start people should start adopting this soon,

Kristopher Baxter  
right? People should start now, if they haven't already, and fair. But the reason for that is because the metrics are observable, the things that you can capture, and they're things that you can actually see the value of in real world devices, and many different ways. So for instance, if you go to PageSpeed Insights, or search console from Google, you can see what the data from Chrome visits are for the specific metrics for your domain. But you can also capture it locally. And there are plenty of tools like next js that have built in integrations to capture it automatically for you, and other providers as well, not just next year's.

</p>
<p><strong>Ryan Burgess</strong><br />
So what should engineers be doing? Like what are some best practices, things that they should be thinking about? Pretty much now like you said,

</p>
<p><strong>Addy Osmani</strong><br />
one of the great things about courroie vitals is that it's encouraging us to take a long hard look at what is actually important In our pages, and how do we reason about how soon they should be getting deliver to our users. So you know, we talked earlier about things like largest Contentful paint, in a lot of pages that might end up being like your hero image, or some large imagery or large text content on the page. If it's imagery, there are a lot of like existing best practices around, you know, using modern image formats, whether it's a they're for web P or something else, making sure that you're not sending down, you know, overly high DPR images to your users, you're compressing them. And that type of thing. We talked about web fonts are lots of best practices around web font loading, too. But then you get into this interesting place where you have to reason about well, do I do things like reload the key scripts, in my experience, because they're important for rendering anything? Do I preload my largest Contentful paint image because that's important, too. I prefer my web fonts. And you can easily get into this place where you're trying to look at trade offs between all these other things that are important in your pages.

</p>
<p><strong>Augustus Yuan</strong><br />
Here's, here's

Kristopher Baxter  
I'm going to pick on Web Fonts a little bit, just because it's a thing that I've been looking at for way too long. Sometimes there isn't a perfect answer for what to do. And web fonts is definitely in that category. There is no absolute perfect right answer for how to load web fonts in a way that satisfies everything. So for instance, if you decide to use font display swap, what will happen if your your fallback font and your network font have slightly different kerning. And leading what can happen is a fairly large content, CLS violation, because as the web font loads it, the font takes up more space and moves things around. If you use font display optional, then you will never have a swap right? It will always use whatever is available within that first region of time. But that means that there is a higher likelihood that the web font will not load from the network in time. And the user will effectively only have what was the fallback during that for that entire page view. There's also other trade offs. So for instance, you could instead try very hard to make your fallback font look like in terms of turning and leading and other attributes of the font look like what your network font will be like. So when the swap does occur, it doesn't cause as much content shift. But before the font loads, that font now with its custom settings may look hard to read. Or very strange, right? And as a result, your users may think something's broken. And so they might reload the document as a result of that. There isn't a perfect answer. There's always a set of trade offs, you have to pick the things that are important for your product and optimize around them.

</p>
<p><strong>Augustus Yuan</strong><br />
Here's here's,

</p>
<p><strong>Ryan Burgess</strong><br />
here's, I do like that, though. Because it's like, there isn't perfect answers for all these things, like you have to really think about it is yes, there's these metrics that you want to be great at. But there's also things that you're just like, I can't be perfect at it. And you have to think strategically through that. So I love that. I'm avoiding trying really hard not to say, as I was talking.

</p>
<p><strong>Shirley Wu</strong><br />
I actually have a question, which I don't know how niche My question is, because as a person that makes data visualizations for the web, I think what I do is quite niche. But I'm actually a little bit scared of, you know, all of these scenes happening. Because with data visualizations, one of the biggest struggles I have is performance. And one of the biggest problems I have is, sometimes my datasets are just really big. And you know, even if I break them up, like it's either a few megabytes of data that I just need to load to be able to render at minimum. And I either break that up into multiple requests, or which is, you know, not good, or just one big request, my visualizations, most of the times I use Canvas for big things, but sometimes if I'm using SVG, like if I have 1000s of nodes, all of these things have made it such that I'm kind of scared of performance and being judged by performance on the web. I've tried my best over the years to get better at it. But I guess the question I have is, What would you say as advice to people that do do things like I don't know, database or, you know, the people that work with web jiao or make like, you know, really intensive games online or so yeah,

Kristopher Baxter  
I want to go first on this one, because I want to say that what you do is not niche. I think it's amazing. Data visualization is a very important part of the web. It is a visual form of a very complex set of information, and it allows people access to information that they wouldn't normally have. For me that's like one of the core tenets of what the internet is supposed to do. I love cat memes is love. Has anyone else. But I really love that we have this enormous database of information that that we get to learn from. So beside that, I think what you do is awesome. But besides that, I think that there are decent answers for this. So number one, doing your best is the best. Just, that's great continue trying to do the best that you can. The second thing is there are all sorts of facade patterns that specifically help quite a bit with things like data visualizations. So for instance, let's say your data visualization wasn't in the first viewport of a page, that is a great opportunity for lazy loading that content, which would delay the the amount of impact of the metrics. The second thing is, let's say that even if it was on the first viewport, you can represent that content with something that's more like a static image at first, while it's loading network resources. And it's not a perfect answer, right? It doesn't give you the rich visualization that is to come. But it does give users an indication of what that thing will be. And that's, that's the the thing that these metrics are trying to help with is to help give an informed answer to end users about what content does. So those are two things that I would, I would try out.

</p>
<p><strong>Addy Osmani</strong><br />
That's what Chris said, I think that in addition to data visualization, we're seeing a lot of cases where there's rich, highly interactive content that people usually want to include in their pages by end. That's right. So everything from sweets to YouTube videos to I don't know, embedded cat memes, per se. And those those exact same groups have got very similar questions like, hey, I want to be able to keep you know, injecting my cat memes into my pages or Coronavirus is going to stop me from doing that. And we're having those exact same discussions, should we be like rendering something lightweight and static that you then progressively enhance when somebody tries interacting with the end that or if it's off screen, maybe lazy loading those resources or prefetching those resources at different point in time. Ultimately, I think that for a lot of these use cases, there is some UX that will enable you to still, you know, give your users what they need without negatively impacting performance. But it'll hopefully also open up these discussions for like for people who do need to show the full rich version of those databases, right on page load. What is a better solution is moving at more the server side? Like the right solution? I don't know. But I'm hopeful that we can have more of those conversations. And it's it's gonna take time, I think a hard question that we as Google are getting at the moment is, you know, I opened up my site on on PageSpeed Insights or any of these other tools. And it looks like Google ads and analytics and YouTube and Google Tag Manager and all of these other wonderful things that can sometimes be important for interactivity or revenue, or like hurting my performance in some way. And people are wondering, like, Okay, well, does Google have a plan around all this stuff, we are talking at the moment to a lot of these teams and are trying to strategize around how we can either improve the defaults, longer term, figure out like what are good well, it pads in the short term that can help you, you know, at least get your performance into a good place. Ultimately, we want to do this in a way where you still get a really good user experience without experiencing, you know, loss of conversions or loss of any other things that you care about. But this is like this is a collaboration and a shared discussion we're going to be having with the rest of the ecosystem, too. So it'll take time, but I'm hopeful we can get there. I hadn't even

</p>
<p><strong>Ryan Burgess</strong><br />
thought of Google Tag Manager. That one, I hadn't even thought about it. And that one always scares me. Because it's literally just a container that like people insert pixels and other JavaScript. It's not the Tag Manager that scares me, it scares me is like the people inserting things you're like, hey, you can just put whatever you want in here. And so that is scary to think about. And I'm sure there are things that even the tag manager could do to kind of try and prevent some of those. Maybe not so good scripts been

</p>
<p><strong>Addy Osmani</strong><br />
there. I've been learning a lot more about TAG managers than I ever thought I'd want to recently. There, there's some great stories people have i I've heard all sorts of things I heard about one team who you know, they were people who are like slightly less technical, but they want us to be able to make changes to production for their front end without needing to go through the engineering team or QA. So they just use Google Tag Manager to query selectors like modify the UI, and just, you know, push an experiment out to 100% of the audience, which is certainly one way to go about it. And you know, at the end of the day, understand what people are trying to do. I do think that again, this will open up conversations around like what are the right places for us to give Inside about the cost of some of the decisions you might be making, and hopefully people can reason about those costs. Maybe they won't necessarily do things that hurt these experience accidentally.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I would say. definitely true. Cheers. Cheers. Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. So we talked about like best practices for engineers and how they can start investing in this is the goal to just try and look at or web vitals and just say, all green, and then you're good. Like, is that how people should be approaching? It is just checking those metrics. And as long as they hit 100%, green, we're good to go. Oh,

Kristopher Baxter  
no,

</p>
<p><strong>Ryan Burgess</strong><br />
there's plenty. Why am I not surprised?

Kristopher Baxter  
So the first thing I think worth pointing out here is a very clear but a set of information that's on web dot dev slash vitals around how what correlate vitals are, I'm going to just kind of briefly try to quote what it says I'm not going to get 100%. Right. But effectively, the it says something along the lines of like, the metrics that make up correlate vitals will evolve over time. And the reason for this is that there are more things that will be measurable enough that apply to the entire web. And so you can imagine additional metrics being added or additional constraints or knowledge around how these metrics are captured. So if you're in the middle of performance, upset performance optimizations around coma files, don't just look at correlate vitals, there's plenty of other things to also be thinking, it's a good opportunity to also do things like revisit the way that you do integration testing for your accessibility. Is this a great time to make sure you're using X Core or something similar to understand your accessibility story, you can also spend time thinking about things that are not currently captured by for vitals like long tasks after the first input. There's things like total blocking that occurs on a page. These are good things to start understanding and measuring on your own because they pertain to good user behavior. And or good user experience. Sorry, not behavior. But yeah, there's plenty of other things to do. And if you focus just on core web files alone, you're missing a big part of the picture. Well, I

</p>
<p><strong>Ryan Burgess</strong><br />
wasn't surprised that you answered that way. But it's good to know that like, there's other things we should all be thinking about. This is important. But there's still so many other important things to be thinking about as we're building our websites. I would be curious. So before we jump into pics, what's next? Like what, you know, we said that this isn't the end. And I even hear you all say that we're, you know, we're still learning and iterating on things. What are some things that we should be expecting in the future or preparing for?

</p>
<p><strong>Addy Osmani</strong><br />
I think that if you go back to some of those original key questions that were mentioned at the start of this discussion, you know, you think about that is that happening moment, and the Coronavirus don't strictly include a metric for that right now, you know, we have largest Contentful paints for is it useful. But there are some metrics in this space that could touch on that things like first Contentful paint could maybe fit in that bucket. There are things we could be doing to evolve some of the existing metrics and provide vitals. So for cumulative layout shifts, there are improvements we could make so that it can better evaluate long lived pages and changes that people might be, you know, seeing as you interact with the experience a little bit more. And there, as Chris was mentioning, all this lots of other signals that could potentially someday find their way into why vitals, I would personally love to see more signals for things like accessibility being there. You've probably some folks have maybe noticed that in places like the Chrome dev tools, we've tried to encourage more testing for things like color contrast, because that's important, too. Should there be a metric around that? I don't know. But I would love to see if we could encourage more people to build accessible sites, too. So today,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that that's something we should be paying attention more on.

Kristopher Baxter  
I think, from my perspective, the things that I would like to see next, because I don't actually know what's going to come next. Right? We're not certain at this point, what is next things I'm particularly interested are around accessibility. And I think that that is something that we can do a little bit better at the minimum at a static analysis level, across the entire corpus of the web. But the other aspects that we can also start to improve on are around those long lived tasks. So adding was specifically mentioning layout shift for longer documents. If you have a single page application, then your cumulative layout shift can increase rather high as a person netsoft navigates between page to page page right? There are a couple of proposals out there that are trying to address that specific piece of the puzzle. There's also potential for new web platform primitives that make it not necessary to do as much soft navigations things like portals and other things. So lots to come. It's a very exciting Time to be a web developer. As it has been since the invention of the web,

</p>
<p><strong>Ryan Burgess</strong><br />
it just keeps getting more interesting and keeps getting more complicated too. But it also keeps it more interesting. All right, well, on each episode of the front end, happier podcast, we'd like to share pics of things that we've found interesting want to share with all of you, Stacy, do you want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure, two picks. The first one is a song called Gold by glass jar. So I guess the genre of this would be post hardcore. It was a recommendation from a guy named Ben Sharpe, who is from Cloud kicker, which is another band that I really like. So if you want to listen to something a little heavier, that cue that up. And then the second pick is clipper, another five years by over mano. And this is a British duo, sort of FX 20. If you like that kind of techno. It's from 2020. But it kind of feels like a throwback to like the mid 2000s. That's a good good headphone tune,

</p>
<p><strong>Ryan Burgess</strong><br />
Augustus What do you have,

</p>
<p><strong>Augustus Yuan</strong><br />
or I have two picks. But actually, if I could quickly before I go into them, I just want to give a shout out to the Chrome team. And like, their passion for like taking a stance on like performance. Like I work in the ad, I work under the ads umbrella of Twitch and like, one of the things that we were hit by was chrome took a stance on ad intervention, you know, like, if your ads have heavy reuse resources, then they're just going to remove them. Of course, some people were pissed about it. But like you, I find it kind of inspiring. Like that's a strong stance to take. And Google makes a lot of revenue from ads, right. So it'd be easy for them to say, Yeah, let's just let them play. But I think it's really inspiring that the Chrome team can take care of that kind of kind of strong stance and prioritize user experience. So yeah, I just wanted to give that quick minute it

</p>
<p><strong>Ryan Burgess</strong><br />
holds a high bar, I like that. No, we should be challenging. Everyone is like says the same as being challenged as an engineer to like, do better on performance and make a better user experience. It's like, same thing for add. So let's challenge that and make better experiences. So I think it's exactly

</p>
<p><strong>Augustus Yuan</strong><br />
but yeah, so on that note, what am I pics is actually on web dot Dev, there is a there is not only the web, vitals, posts, but there's a defining the core web vitals thresholds. I think that was a very interesting article, just talking about, like the thought process of how, like the thresholds are kind of determined, you know, it's not just like, some numbers were just thrown out. It's actually like data driven. So I thought that was a really insightful article. I think people it's worth checking out. And then my second pick, is this website called is Excalibur draw.com. I don't know, it's very similar to lucid charts. But I think it's just, it's just a very, I don't know, it's very similar to Lucid Chart. So very useful for system design. You can do collaborative drawings with a but I just think the very subtle like design they add to the designs that you can make with it. It's just really nice. So yeah, worth checking out.

Kristopher Baxter  
Last one for iscala draw. I spend probably two hours a day on that site in meetings. Because it's my replacement for a whiteboard. Yeah, no,

</p>
<p><strong>Ryan Burgess</strong><br />
I just like I had not heard of this one. And I'm like, wow, that is so easy. Just like to start drawing, I can see how that replaces your whiteboard.

Kristopher Baxter  
And you can share, and it has real time updates other folks. It's fantastic. Really.

</p>
<p><strong>Shirley Wu</strong><br />
I like I like the sloppiness. The way you draw like you can you can stroke it, you can specify the amount of sloppiness of your lines. I love that.

</p>
<p><strong>Ryan Burgess</strong><br />
That's my whiteboarding skills, right? There's this sloppy as possible. All right, surely, what do you have?

</p>
<p><strong>Shirley Wu</strong><br />
Who, okay, so we've been having a lot of friend Happy Hour recordings recently. And I feel like I don't have much more left to give for. So I got only one today, and it is actually Chinese knots. Or there's actually I think Chinese and there's they actually there's actually also Japanese knots. And so Chinese knots in particular are used a lot around Chinese or Lunar New Year, which was just this past month and I don't know how to go about describing them, but they're very beautiful. And I actually recently rediscovered them because my studio mate shared with me these gorgeous earrings made with these like very elaborate and Chinese knots and it is by an artist named bow me so I'll link her work down below. And but I recently rediscovered them, because I've forgotten about them. I like you know you used to see them as a child. And these knots though, like represent things like fortune or luck, or, you know, attorney or so there's many different sorts of knots, um, and each of them mean something slightly bit different. And I love the fact that this artist follow me is kind of like modernized because because they do look very traditional and old fashion. And so she's kind of I feel like modernizing the look a little bit. And then we kind of got into my stereo mates. And I, like we started learning how to do the knots. So this is this is like one of the that's pretty impressive. Oh, you this is one of the knots. And this is kind of punch on not. And I can't remember what it stands for him. But there is a meaning behind it. They're very beautiful. So that's what I have. For today.

</p>
<p><strong>Ryan Burgess</strong><br />
How do you what do you have for us?

</p>
<p><strong>Addy Osmani</strong><br />
I've got two picks. So I was recently rewatching, the the eternal classic hackers, with Johnny Lee Miller and Angelina Jolie and was appreciating the soundtrack to that, once again, with some really awesome music in there. Everything from like underworlds prodigy orbital. So folks are feeling nostalgic, check out that soundtrack. It's fantastic. I'm still waiting to be able to navigate my file system in the 3d universe. I feel like I haven't, haven't quite been able to do that just yet. But check out that soundtrack. My other pick is also on web dot Dev. I feel like we're almost like pimping up quite a lot at the moment. But content visibility is something recent. It's a CSS property that this performance and it basically allows you to kind of skip an elements rendering work, including things like layout and paint until it's needed. It's relatively new. But there's a great article by Oona Corvettes and Vladimir Levin on web that's about this. So check it out

Kristopher Baxter  
of how that evolved from display locking to how it was like this, this journey of discovery that needed to be something exposed in CSS online.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool, Chris, what do you have for us?

Kristopher Baxter  
So I have four pics, is it okay? Don't have

</p>
<p><strong>Ryan Burgess</strong><br />
pics, it is okay, you haven't been on for a while, surely ran out of stuff. So clearly, you got to

</p>
<p><strong>Shirley Wu</strong><br />
make up for me.

Kristopher Baxter  
Alright, so I'm going to start with as Bill, everyone probably at this point is starting to hear a lot about Yes, Bill. But the reason I specifically want to call out is Bill is that I am a compiler author. And I've worked on very big compilers for many, many, many years. And ies build is a fantastically architected compiler. So it's not about speed. It's not about how you the CLI or anything else, what I really, really appreciate about iOS build is the constraints. And the way that it's been engineered, I think it's a fantastic piece of software. And if you're looking to learn how compilers work and how to write them, this is a great place to go dive in and learn more about how to build software that uses constraints to its advantage. The second one is something called out smartly. So ABX testing on the web is hard for a lot of companies. And one of the things that has been really interesting about my time at Google so far is learning more about the different parts of the web. So I've worked at many other tech companies and always had a team that I could work with to do AV testing. So we could build an in house AV testing tool, and it was available on our server and we could modify our contents and our JavaScript and all that all kinds of stuff that I took for granted for a very long time. But that isn't possible everywhere on the web. And in fact, the long tail of the web is dominated in the AV testing industry that uses client side, AV testing out smartly and a few other technologies in the space are using things like Cloudflare workers to apply AV testing in an intelligent way. On top of static content, in many cases, it's really, really interesting. And their design actually ties into your components and react, for instance, to expose 80 information in the right way. Really cool project. Go check it out. The third thing is a soundtrack. I have kids and I love my kids and we just watched the movie soul and I am addicted to the soundtrack. At this point. I've listened to it on repeat. It is the only thing that got def punk out of my out of my daily rotation for a little while. So definitely give that a go. And then the last one is a is a plug for the amp project. And the reason I mentioned this is that this is a topic that we've been talking about cola vitals, and the amp project is specifically designed around correlate vitals and has been for Five years. So if you're looking for patterns and inspirations about how to solve things like coral vitals, it's a great place to look. It's also pretty good web framework for a very specific type of application on the web.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on, I'm excited to look up to the AV testing, too, because that has definitely been one like the client side. It just has not been great for two AV test. So I love the approach that they're taking the Cloudflare I'm gonna have to check that out.

</p>
<p><strong>Addy Osmani</strong><br />
One last plug. Absolutely. All right. Well, since since Chris mentioned amp, I'm going to give a quick shout out to a few JavaScript frameworks were collaborating with at the moment where they're, you know, they care a lot about core vitals and we're trying to improve the defaults, though a shout out to next JS Knucks, heavily using the View ecosystem, and Angular CLI, lots of great work going on there across everything from, you know, image optimizations to critical CSS and beyond. So check those out, especially if you're trying to build new web apps.

Kristopher Baxter  
Yeah, one of the things I really liked too, is they they're using a set of common ideas across all of those different frameworks. And that also includes amp. So the concepts are the important part, not necessarily the implementations. So if you have a one off site built using something else, there's likely something that's happening there that you can you can learn from, and apply to your own website. That's pretty cool.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. Well, I have two picks that are totally unrelated to any amp or web vital, nothing. It's two shows to distract you from your work. And they're not on Netflix, either both of them or not. So that's interesting enough to so one, I just finished and actually Jared Jordan, who's been a guest, not too many a few episodes go he's one recommend it to me. It's on Amazon Prime called Tell us your secrets. It's such an interesting, intense story with some twists and turns. I'm not going to say much about it, but I highly recommend going and checking it out. I don't want to ruin it for anyone, but I really enjoyed it. I've watched it fairly quickly, too. And then for a lighter show, there's a show called Dave on Hulu, which is just as like interesting, goofy show about a Jewish rapper totally just kind of dark, funny humor. I totally recommend checking that one out. So before we end the episode, I want to thank Eddie and Chris, always a pleasure to have you this is both I think your second time on the episodes. Thank you again for joining us. We didn't scurry away the first time. Great. Where can people get in touch

</p>
<p><strong>Addy Osmani</strong><br />
with you? People can get in touch with both of us by Chris's official Google email address. I'm happy for him to take all

Kristopher Baxter  
its Addy Osmani. No, I I happy to talk to anyone about performance core web vitals the web as a whole. It's what I am lucky enough to get to do for work and I enjoy every single minute of it. So if you if you ever want to talk about web performance, I'm on Twitter. That's that's the best way to contact me at Christopher Baxter and my name is hard to spell so sorry. But yes, that's the best place to go.

</p>
<p><strong>Addy Osmani</strong><br />
And I'll also be on at Christopher Baxter. Real people can catch me on Addy Osmani. On Twitter I'm more than happy to talk about CO vitals PR for any other user experience but the Bob's

</p>
<p><strong>Ryan Burgess</strong><br />
right on Well thank you all for listening today's episode. You can find us on Twitter at front end ah subscribe wherever you want to listen to podcasts on a go to front end. happier.com Any last words?

Kristopher Baxter  
It was really nice being on fat?

</p>
<p><strong>Addy Osmani</strong><br />
Yeah.

</p>
<p><strong>Stacy London</strong><br />
Cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers. Cheers. There's

</p>
`;
return transcript;
};