// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. We are joined by two special guests Ji Yoon and Cole to talk with us about component libraries, pattern libraries, whatever you want to call it sharing code within your teams or within your companies. June and Cole, can you give a brief introduction of who you are, what you do and what your favorite happier beverage is?

</p>
<p><strong>Jeeyun Linn</strong><br />
Sure, absolutely. Thank you so much for having me. My name is Jean Lim. And I am a senior UI engineer for VMware. And currently, I'm working on an open source library called clarity, which is our component library that's built on top of Angular and for Favorite happy hour, drink out Have to go with a glass of red wine.

</p>
<p><strong>Cole Turner</strong><br />
Hi, my name is Cole Turner. I'm a senior UI engineer at Netflix and my favorite happy hour beverage is Moscow.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, so let's also go around the table and give introduction of today's panelists. Jem, you want to start it off?

</p>
<p><strong>Jem Young</strong><br />
Jem young senior software engineer at Netflix.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm Ryan anklam. I'm a software engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at you guessed it Netflix. Wow. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all in the episode, we will all take a drink. Now what did we decide today's keyword is shared, shared? All right. So from now on, if the word shared sharing anything along those lines is shared, we will all take a drink.

</p>
<p><strong>Jem Young</strong><br />
What if we mentioned someone whose name is Sharon?

I don't think count doesn't count. I mean, because I know that that name will come up lots In this episode, hopefully, yes. All right, I do want to start off, you know, I even kind of hinted at it at the start is what is a component library? What's a pattern library? Do we? Are they the same? How do we define what that is? 

</p>
<p><strong>Jeeyun Linn</strong><br />
For me the my, my personal favorite analogy for a component library is Lego blocks. So think of this thing, set up tools, or

very atomic set of

building blocks for you your UI that you can then compose to build something more complex and interesting.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that you called Lego blocks, because I've heard a few companies. That's the project title of their pattern libraries is Lego. Oh, so that actually works really well. And I've always made a lot of sense to me as well. Is that the pieces there? It works on its own, but it also works within to build something bigger.

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, absolutely. And I think the fun part of it is for me, like I've noticed difference, even in how our designers work. So instead of thinking about what our buttons are going to look like, what our margins and paddings are going to look like, they're now able to focus on more complex problems, right? So what do our workflows look like? And what do the integrations of these components look like? So yeah, absolutely

</p>
<p><strong>Jem Young</strong><br />
could say a component library is a pattern library. But a pattern library is not necessarily a component library. So component library, we'd say in my mind, I picture Legos is correct, or I picture the same thing. Something like you have a button, it's a button component. No one needs to know how to reinvent the wheel 60 times. So you have one button as part of your component library. But a pattern library I see is more of like, we have a standard gray that we're going to use because gray is an amorphous color. It's not specific. So we're going to use that, that as a pattern library and maybe are less or sass or whatever. And that's like, the pattern we use to be consistent across so they're kind of the same thing but one's like a subset of the

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, and if we think about it at the level of like color schemes and layouts and things of that nature, so definitely,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, another thing that might even be touching in the line of like a style guide to is like the type of thing or brand brand guide, I think style guide and brand guide are similar, but they probably have their nuances as well that, you know, like I think of a brand guide is like, you'll have your logo and how it can be placed. Even for external people, if it was, you know, if someone was using Netflix logo, it's like there's a brand guide on how to use it and where not to use it. You, you know, just details like that, too.

</p>
<p><strong>Cole Turner</strong><br />
And even considering things like font sizes, where it might vary from title to paragraph.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I think that would be I would summarize that probably less component. Right. I think that would be more on the style guide. So all right, good. I think it's always good to like baseline, what are we talking about? So we're talking more about the component and shared code. Cheers, cheers. So why a component library? What is Is the benefits to using a component library? Why would we want to do that?

</p>
<p><strong>Jeeyun Linn</strong><br />
I think it's a very obvious statement to say that you want your end users to have a consistent experience across products, right. And so, for us, we have had previous iterations or attempts to try to do that without a component library. So we had a centralized design team. And what we were given was then specs with pixel values, hex codes, and like red bar, yeah. And we were given them and said, implement these and we will make sure that all of our products then look the same. And I think that could work. very time consuming a lot of duplication of code and engineering effort, and a lot of room for mistakes as well. And so from that, came the initiative that became two Be our component library. And when we handed them code snippets to us, you know, all the other product teams. all they had to do was include them. And of course, you tweak them the content part of it, or what have you. But it brought forth a lot of engineering. efficiency, I would think so. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think of that consistency. I love that. And I also think of the even just the fact that if you have a bug somewhere, it's like you fix it in one place, and it just updates everywhere. That to me is like, one of the best benefits, right? There's, as an engineer, if I fix something, I want to make sure that I'm fixing it everywhere. And if it is just one component that's really truly used everywhere, that can be really beneficial,

</p>
<p><strong>Ryan Anklam</strong><br />
I think, I guess how talk about how that actually proliferates throughout a codebase. Right? Because when you get a component library you share with every one and what cheers to do. And you know, how do you ensure that the integrity of your component maintains the same are the teams that consume them, don't just make their own fork of it and then start making changes. And then it breaks the whole integrity of the whole library. Right? So you have all these one offs now all over the place.

</p>
<p><strong>Jeeyun Linn</strong><br />
I think that this is something maybe we will talk more as we continue in this conversation. But what we did early on that I think was really helpful was that we interviewed and talked to a lot of engineers as we were building it. I think sometimes we try to solve a problem that doesn't exist. And it could be nicely packaged. And it could be the most beautiful piece of code you've ever written. But if no one uses it, if that if it doesn't solve any problems, then that doesn't really work out very well. And so for us, I think in the early days, at least, not a lot of forking was done, just because we were meeting the needs of the engineering team. But now though, we do have a set of needs that have grown and have outpaced the efforts of our smallest team building working on the library. So we do have a one, at least that I know of internal library that's built on top of it. So extensions, I think is how we kind of call it and the carmakers, Porsche also actually use clarity. So they have actually open sourced an additional set of components that they they've built on top of clarity as well. So that's kind of

</p>
<p><strong>Jem Young</strong><br />
cool, too. So as you're getting these custom, they're taking the baseline and then adding this customized piece to it as well. Yeah, that's really cool. I think also calling out another benefit. You mentioned the consistency. But I also think of the collaboration between engineering and design, the fact that they're both being able to leverage this one element or these pieces that they can now build with, which is pretty, probably pretty powerful.

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, definitely, we don't implement anything out of the vacuum. So we do have a UX design lead on our component library as well. But then he will work with the product designers who are actually building for a specific use case. And looking at how we would be leveraging and using these certain components. And so we kind of look at what's the level of kind of scaling that we want to do, right? So for example, if we're building tree nodes, like a tree view, we have to consider is it going to scale for thousands of virtual machines loading on the UI? So performance is a big thing, but also the API of the component. Right? One huge thing that we focus on a lot is developer experience. And so because our consumers for for my team is other engineers, and so how do we make a simple use case make it not be such a highly configurable component code that would require, you know, dozens of configuration, we don't want that to be the case, but also be extensible enough that you can then be able to support the complex use cases as well. So yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
that's a really tricky balance to be over configuration versus ease of use.

</p>
<p><strong>Jeeyun Linn</strong><br />
Absolutely. That's one area in which we don't always agree on. And there's a lot of ongoing discussion happening all the

</p>
<p><strong>Jem Young</strong><br />
time. Another benefit is just ease of use. I know, Bitbucket, when Stacy's talked about it before, is they have their component library. And they use like, say a button or input. It's just require this or import this and like it's just that easy. It's just there. You don't to worry about the styling or if it's tested, or if it's using some weird pattern, because it's just there. It's kind of like NPM, just like, Oh, I need a button that does I don't know, as 256 hashing. I'll just import a library that does that for me. Same principle. So I'm not stuck doing the same thing over and over again, and repeating what someone else has solved many, many times over. That's a great way to think about a component library is like, why are you rethinking that it's actually so much cognitive load, especially tricky things like I think one time I had to build an interactive graph with a slider, which this is a few years ago, but if you've ever built one of those, there's a ton of edge cases there's a lot of things to consider like boundaries and things like that. I wish someone had Build a component already that can just import it, put my data in there, and it works. It's stuff like that. I think people trivialize component power in libraries when it's like, really simple, simple things like how to do a lightbox or something like that. But when you get to really complex things like interactive graphs, then a component library is really, really useful because someone else who's much smarter, you've already solved this problem.

</p>
<p><strong>Ryan Burgess</strong><br />
And probably son assaulted across multiple viewports, too, right? Like if if think of the browser is like, they're having to solve it for mobile, it's been tested on mobile, like I love that you also said tested is, hey, there's probably also unit tests or integration tests that are written for that. I don't have to do that it's already taken care of for me. And that's a huge win. And just to be able to add to that, to be able to develop your component library in isolation so that you're not depending on a server or a particular view is pretty good for ergonomics, because you can just tweak those individual settings or configurations. And you can stage that and when you're ready, you can pull it into your flow. All right, we've covered And I've touched on like some of the benefits. I think we've outlined some good reasons why you would want to do this. I know it's hard. It's not an easy problem is like, what are some of the challenges of creating and maintaining a pattern library? I think there's, there's many Yeah,

</p>
<p><strong>Jeeyun Linn</strong><br />
first thing that comes to my mind is versioning. It's not something we had thought about very early on. And we were going against the kind of RC versions of Angular, which at that time was the cost of being 2.0. Now we're up to seven, eight, version, but it was fun, but also kind of taxing to upgrade version of Angular, and all of a sudden, half of your code doesn't work anymore. But we didn't want that same kind of experience to be true for consumers of clarity, for example. And so we really had to bite our tongues and and say, Oh, yeah, we are going to support some of these things and make it be backward compatible. And there were text ads and different kinds of things that we hadn't thought about. So much. And so now, when we look at our roadmap and look at the MVP, for example of a component, we also think about what is the I think analogy I've heard before is, what is the cupcake version of your component? And what is the wedding cake version? And so in being able to release the future, future versions, are you going to break the existing API? So we're very, very conscious of that right now, but certainly wasn't the case. Three years ago, for example,

</p>
<p><strong>Ryan Anklam</strong><br />
one thing I really want to know is how do you keep your documentation up to date? So that's always the hardest thing for any type of shared library that I've ever tried to have or maintain. It says that documentation the second, you break that trust in the documentation, people stop reading it and relying on it. So how do you keep it up to date? Yeah, our deck

</p>
<p><strong>Ryan Burgess</strong><br />
documentation is versioned as well. So will you be able to kind of switch between different versions of the component to see be able to see what is the correct markup, the inputs and outputs For the version that you're particularly working with, but in terms of maintaining it, when we have code update, we actually as part of our process than always review our documentation now that we're not perfect. So we might have missed it, for example, and be able to patch that in a future website update, but it always goes hand in in for us, so we update them in parallel. For me, a difficult thing that I always think about is where to start. I think that's hard as like, you're talking like, we've already got down to the path of hiding and really thought about all the versioning and yes, the breaking changes. Great. least you're far ahead at that point. I also think about it is like just starting, I think that is so difficult is getting buy in from everyone too, because I think that's super important is why is this beneficial? How our design and engineering gonna benefit from that? I think that is honestly a challenge in itself is just saying like, this is useful. And let's do this as getting the buy in. But then where do you Start to because I think that's a challenge there is that oftentimes, you feel like you have to create this entire library that solves everything versus start small, find a button and make a component that shared. Cheers

</p>
<p><strong>Jem Young</strong><br />
news. So versioning Can I sum up what you said Ryan is politics,

</p>
<p><strong>Ryan Burgess</strong><br />
politics is definitely what I was getting at. Yeah,

</p>
<p><strong>Jem Young</strong><br />
that's where I've seen a pattern libraries and component libraries fall apart. It's largely politics. It's almost always politics. It's one engineer, who didn't buy in originally, like, say, they hire them later. And they say, Oh, this button doesn't have all the API. It doesn't have my use case. So I'm just gonna write my own. And then you get three or four those people then you have three or four buttons and then the whole thing is lost or design disagrees. So a new starts and they say, we don't agree with this. Let's just roll our own and then like, it's easy to fragment because at the core engineers want to build stuff and a component library. theory enables you to build faster if you use it correctly. But like, it's always like, it doesn't quite fit my use case. So I'm just gonna roll down because that's what we'd like to do. And that's where it always falls down. And I like to hear more about that because I, I've seen many talks on component libraries and pattern libraries. But no one ever says like, actually, here's how you get by. And here's how you maintain it over time, because everybody can create a one off, but like getting the entire company to buy in, is really, really challenging.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a challenge. You build this beautiful interactive library that people can go check out. But if they're not using it, and they're not integrating it, well, then the mission is failed at that point. So yeah, what are some solutions or ways that we can integrate a pattern library? What do I have to do? That was everything?

</p>
<p><strong>Cole Turner</strong><br />
Oh, well, when I was at PayPal, we had several repositories for different component libraries, even though it was all sort of for the same monolithic application. And one of the challenges we faced was, how do we keep this version of this component in compatibility with this Have that component. And as we bumped up versions, we found ourselves unable to maintain backwards compatibility. So we had just this kind of entanglement of different versions. I think that's one of the biggest challenges is keeping it in sync. Yeah,

</p>
<p><strong>Jeeyun Linn</strong><br />
kind of piggy bank backing off of that one decision that we've made consciously recently is to sync up our versioning with the angular versioning cycle. So then that makes it very easier, both cognitively but technically as well, to at least remove those kind of mental map exercise of is this version of Angular going to work this with this version of the component library and so forth? Because we haven't had as much of an issue with having multiple component libraries across the company. I couldn't speak to that so much. But yeah, I could imagine that being a really challenging thing.

</p>
<p><strong>Cole Turner</strong><br />
It was definitely an issue when you consider cross team and like one team might use this component and other team might use this component. If one team has their needs, how do you balance that ownership model of like, who is the ultimate

</p>
<p><strong>Ryan Burgess</strong><br />
decision maker? I think at that day, too, is like there's a politics piece there too, right? Is it comes down to communication. And having those conversations like June mentioned early on is having those conversations of What's the need? Or like, what do you need for this? And what do I need? And what does my team need? And thinking about that strategically of how do we solve the problem together? Or even Jem, you'd mentioned someone comes in and needs to change the use case for them. So they just reinvent the wheel. And it's like a conversation could have happened is like, hey, you're using it for this? Would it make sense to extend it to also do this? And how can we do that? I think those conversations really need to happen as we need pause and just think a little more strategically at that point.

</p>
<p><strong>Jem Young</strong><br />
Yeah, and getting, I think one of the good places to start is getting the designers to buy in in the beginning. And just saying like, here's this component library, these are all things available using something like let's say react storybook. I'm sure something exists the same for Angular and just like showing them like You can mock out something really quickly. And if they start producing mocks that aren't using your component library, just say like, hey, it's much easier, much faster for us to iterate on this. that's usually where it starts is they create a button that looks wildly different has different actions. I'm just using buttons. Basic sample,

</p>
<p><strong>Ryan Anklam</strong><br />
it's always button. I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
the buttons always the first point, I think, cuz it's the easiest one really, like why do we have 10 of these? Yeah, does the same thing. And just,

</p>
<p><strong>Jem Young</strong><br />
it's really hard. Because you have to think, like you said strategically about the API. It's like, do we need a second type of button? Or should we just refactor to make this component more accessible and broaden the API so you can build on top of that, and that takes work. And it's so much easier just to write your own component at that point, rather than I need to go in I need to see what Yun wrote. And then I need to like change it. I need to understand all of this. That's a lot of work. And most engineers don't want to do that. They want to say like, I'll just build another one because and this a design designer did it and then it just trickles out and before you know it you've got 50 buttons.

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, one thing that we have as part of Our design systems a component library to us is a subset of our design system. So we have templates for a design software called sketch. And so what we have our basic little components in the sketch software. And so when they make marks, actually, it looks exactly like the way the implemented version is going to look like. And so that's given our designers a lot of freedom, and be able to communicate very well with it with our engineering team. Like this is what the mock should look like. And it's not like one of those Pinterest fails, where you see the what it should look like in the actual reality looks totally completely different. We try to minimize that right? By be having close collaboration like that. But to your point, Jem, I think it's very important to collaborate well with our product designers. We actually have had many of our product designers contribute back to the library component library. So they all do design based on kind of the use cases and needs that they've had. And they will actually huddle than other products and say, Hey, have you guys had any filtering, use cases and needs for a data grid? For example? Can you show me what your your UI looks like? What kinds of filtering are you doing and be able to come up with something that's going to work well for his or her product, but also for maybe some of the other products?

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. So you've almost like built evangelists, everyone's kind of bought it, and they're using it, they're seeing the value. And so once you get to that point, it actually makes things a lot easier. Absolutely. Yeah, that's really cool. Because Yeah, I think that's the pipe dream, or like the hope that it's like, once you get everyone bought in and using it, it's a living breathing thing. And that's, that's super important and powerful as well. I'd be interested to what is everyone's thoughts like I've heard this one is maybe a challenge or like almost a reason not to have component libraries is that it stifles innovation, true or false? And why

</p>
<p><strong>Cole Turner</strong><br />
I disagree, I think Your any process is what's going to challenge innovation. You can collaborate with designers and using a program like sketch is nice because you can even render react components to sketch and designers can work with those. So I think it's mostly just a matter of are the right processes in place and our developers and designers, given the freedom to collaborate together,

</p>
<p><strong>Ryan Anklam</strong><br />
I think if it stifles innovation, you're probably trying to answer the wrong problem, right? I think the innovation should be doing is on the product and your flows and making the users experience better, versus just making a better button a better input better. Anything that you would find in a component library?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I would add to that, in the sense to is that, you know, these are things that we feel that we shouldn't be reinventing the wheel often. So not there's no need for innovation, but at the same time, I mean, seriously, if you have to re innovate on it, that's fine. It's like you've got this one button that is hopefully used everywhere. If you're like we're gonna reinvent that every other week. Well, guess what, it's easier to now update that button and consistently across your codebase across your product that much easier. It's not this tax that is now like, Hey, we're, we want to change that button. I love that we're picking on the button. But, you know, it's like, I want to change that. And it's going to require a lot more work. But once you get that baseline there, I think that's huge. Like, even if you were like, Hey, we found a better way to do it. Well, okay, fine. You do that and apply it and it applies everywhere. So I think, to me, I don't feel like it prevents you from innovating on those components. It just allows a lot more consistency and ability to to innovate faster.

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah. And just to go a little further with the button. Even while looking at buttons, we have primary action button, secondary buttons, buttons for a compact view, maybe a link button versus a solid button. And so I think that there are different kind of Maybe use cases and how you would use them and even placement of buttons, right? Does it make sense to when you're reading a panel or of some sort? Do you want to do an F pattern? I don't know if you guys are familiar with that or z pattern, depending on how the user is expected to kind of read through the content and browse and interact with it, so yeah, definitely but if you are focusing on how do we make a button be so innovative? I guess you could get creative with it. I don't know. Yeah, I mean, I'm open to

</p>
<p><strong>Ryan Burgess</strong><br />
innovate mean even like it could be like bigger margins or like changing the font size or colors. Like you could you can change things I don't know if that's like super innovative, but it's changing it so

</p>
<p><strong>Jem Young</strong><br />
sort of be contrary as I am want to do on this podcast.

</p>
<p><strong>Ryan Burgess</strong><br />
Do you just like do you just try to do that right now? I like

</p>
<p><strong>Jem Young</strong><br />
to start out without Brian. Someone's gonna disagree. I i a component library can stifle innovation. We're making assumption about company size. So like your VMware a big company. We're at Netflix. big company, if you're a 20, person startup, going back and refactoring all of your code to use a shared component library is a ton of work that you may not have the resources for. Even now, if we were like, start over with a new shared component library, we're talking, I don't know, hundreds, but like it would take many, many, many engineering hours to go back and refactor all of these things. That's once we have the component library built out, it's better if you start from beginning but again, if you're a 20 person company, you don't know that you're gonna grow to be a 20,000 person company or 2000. person company. So it's easy to say in retrospect, oh, yeah. component libraries are awesome. And pattern libraries are great. But we have to be like pragmatic in the real world that it's not always practical.

</p>
<p><strong>Ryan Burgess</strong><br />
The way I thought it was like, it helps with innovation, or it doesn't hurt innovation, the long term once you that you're there, but you're talking short term, that now you've got to invest a lot of time to actually build out this library, or go back, refactor, do all that, and that prevents you from innovating at that time, because I hadn't even thought about it that way. So that's I'm glad

</p>
<p><strong>Jem Young</strong><br />
you called that out. And that that means you need buy in from the CTO and the product manager saying like, hey, all of these engineers and designers are not going to be building product, they're going to be back rebuilding our old products. And I'll look exactly the same as it was just in the future a little nameless. But that's like, that's the story of all tech debt is you have to pay it down eventually. Or you can just ignore it, like we do with our national debt. We just say like, it's not. But at some point, either you, you get on board, and you have to pay down that debt. You say, Man, that's a lot or you just ignore it and just keep doing what you're doing. And that's a choice every company will have to make for themselves.

</p>
<p><strong>Ryan Burgess</strong><br />
I love this. Like, if you start early, when you can start from scratch. That's a great time to do it. It's I mean, it's like with anything, I think that for like accessibility or trying to do better testing on your codebase. Any of those things if you can start fresh and start from the baseline there. That's so much easier than trying to like go back and fix things. I think

</p>
<p><strong>Cole Turner</strong><br />
component or style guides in particular can be very limiting when it comes to different expenses. answers. So if you have a mobile app and a website, for example, and you try to pigeonhole every design choice through one style guide, you're not really, you know, meeting meeting that particular experience, or you're not doing that one view justice, like one decision for one platform might be good. But that might be terrible for the wildbird. Mobile

</p>
<p><strong>Jeeyun Linn</strong><br />
absolutely agreed. When we one of the things that we are kind of currently in the pipeline is improving, for example, the footer that goes into a data grid, so a data table, when the screen real estate is limited on a mobile, and it could be a tablet doesn't have to be a phone. But then what, how can we give them an equivalent experience without having an equivalent look or even equivalent interaction? Right? So kind of having to think about that and, and being able to incorporate that into your products, I think is very important.

</p>
<p><strong>Jem Young</strong><br />
So I've got a hypothetical, but it would be a real world. scenario. I'm curious how everybody handle it. So let's say you had a data table is a great example. That's a complex component that doesn't need to be rebuilt. It's hard to do. It's a pain in the butt. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. So that's where I actually want someone to create this for me. I do not want to do it again.

</p>
<p><strong>Jem Young</strong><br />
Absolutely. But let's say I fire up mobile Safari version nine, the data table doesn't work for me. So I say, Okay, I, I respect the component library, I'm not going to go through and re re I'm not gonna build my own because like, that's too much work. But I build another component on top of that, that just like fixes the bug. But at that point, they file a bug. What does that bug get fixed? And then at that point, they know that go back, refactor their code to take out there. And like, you know, that's that's one example. But over time that builds up that builds up builds up. And then you have like, yeah, we have a data table component, but we have 30 different components that wrap that and do their own thing and then want to make an API change, it breaks and I don't know, like we have to think like longer term, not just the immediate problem. How does how everybody To handle that sort of thing?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, that's that's a great question. I honestly think that that is true, because you're like, yeah, at one point it might be, it might be safe to just kind of build on top of it. Especially like, at Netflix, we do a ton of AV testing. And so that, to me is a good example, where you're testing variations. It's not even something that's going to be in the product forever. It might be, but you might just be building on top of this product piece that's like, live and breathe it out there, but you want to tweak it because you're testing something. And to me, that should be okay. At that point in time into AB test. I think like, that's where I'm like, Yeah, okay. But at some point, whatever was the winner or updates? How do you bring that back? Like, how do you add that back on to that library? I think it goes back to conversations. I think we, as engineers are so quick to code. I mean, I'm serious. We often are like, I can just solve that in code, but like taking that pause and saying like, Hey, where else is this component being used? How do I best add this In How do I extend this component so that it works for all the use cases. And that might not be it, it might require creating an entire new component. But I think just taking those conversations, I think is so important. It's not an answer to like solve it. But I think that that, to me is one way to really help you come to a better answer.

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, I think part of being an open source library is that we are very happy to accept contributions. So for example, if there is a bug or an additional use case that is going to need some additional fixes, right, we say why not fix it for the whole component library. So we have had both internal and external contributors do that. And that's been kind of exciting as well. But I think that's also where the support strategy matters to how do we backport some of the bug fixes and how do we scope out what is in the scope of doing that or not? But yeah, that's a that's a challenging question to shed. I think there's like a one liner answer to

</p>
<p><strong>Cole Turner</strong><br />
it's a balance. It's funny that we're talking about buttons, because that was my first AV experiment at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
It was.

</p>
<p><strong>Cole Turner</strong><br />
And there was in our signup flow there 31 instances of the same button, and we need to do experiments on that. So do I go to every 31 instance and update 10 different properties? Or do I extract that into a button? And we found that that trade off is? Do you cut corners at the beginning? Or do you come back later and update it? There's really no definitive answer. But when it comes to the ergonomics or developer experience, you want to think long term.

</p>
<p><strong>Ryan Burgess</strong><br />
In hindsight, how would you approach it now? You've already done it. It's been done. What would you do differently?

</p>
<p><strong>Cole Turner</strong><br />
Oh, I would have shocked at the button. Like, as we talked about layer, add your own extensibility on top of it, rather than trying to pigeonhole it into every use case.

</p>
<p><strong>Jem Young</strong><br />
I guess the answer is discipline. Like that. That's the only there is no Short and fast library or magic solution that'll solve this problem. It's just discipline. And it's one of those reminders that engineering is really hard. It's not just throwing stuff on a page and like, oh, it works. Now. It's these long term things that pay off in the very, very long run and the lessons that you've learned over time, that's all it is like engineering. It's not easy. It's gotten simpler to start. But like the core discipline is just like going back and applying fixes knowing when to abstract when knowing when to submit a fix. Yeah, it's just experience and discipline.

</p>
<p><strong>Ryan Burgess</strong><br />
So I'm also interested, it's kind of come up a little bit about the collaboration between design and engineering, I'm interested to know is like as engineers, how can we be collaborating better with designers like thinking from the pattern library, that component library, how do we, how do we work together really well to make it a

</p>
<p><strong>Jeeyun Linn</strong><br />
efficient and actually work? I think one thing that I was fortunate enough to experience recently is to actually sit in on a usability testing session. I think it's good to know the reasons why when it comes To design of things. And so it's not. I think sometimes people have the misconception of design is all about aesthetics. And maybe your opinion is as good as mine, kind of. And I think it's gotten better. But so I think it's good to have an informed mind when it comes to why a designer might have designed something a certain way. But then it goes the other way where there might be technical constraints. Do you want this kind of experience that's going to take you maybe a week to build or two months, can you afford to, for example, wait two months for this other type of experience? or there might be accessibility concerns? So is this going to be is this content going to be interactable for someone who's using a switch device or a screen reader? things that maybe you don't necessarily think about in the initial design, but we should we always should. So

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, one thing I would add for working and collaborating a little more with design as an engineer, I think it's, it's good to question and push back, thinking back to sometimes you get a spec that's handed to you. And if there's something that you've already created, but it's a little bit different, I mean, let's pick on the button, the button comes to you, and the red is just a little bit different, or that gray is just a little bit off of that font sizes just a little bit different. I think a lot of it as an engineer, I think you should be bringing that up and raising that with the designer. Was that intended? Did you mean for that to happen? Should I change the gray? Should I change the size of this button? And I think oftentimes, what I found in my experience is the designer is like, Oh, no, I didn't even realize we already had that. Or Yeah, use what's there because I'm not trying to change it. I'm not there's no reason for this. It was just in the design file. It didn't really get used again.

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, absolutely. And I've had very similar experiences as USD.

</p>
<p><strong>Ryan Burgess</strong><br />
So but I think that's a good responsibility as engineers, we can, it's okay to ask questions and push back on that and say did you mean for this? So before we go into pics, I'm interested I would like to say like, let's leave our listeners with like one piece of advice. And I think about one of the hardest things that we've covered is how do you start a library? How do you get this going in your company? So the piece of advice would be is like if we could leave one piece of advice, how do I start a component library

</p>
<p><strong>Ryan Anklam</strong><br />
create a button component?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, that's a great start start small, which apparently we've addressed that the button is a hard problem.

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, I was also gonna say, start small, be incremental and be friendly. These are the people that you're trying to serve as you are building out the library. I

</p>
<p><strong>Ryan Burgess</strong><br />
love that be friendly. That's a great piece of advice.

</p>
<p><strong>Cole Turner</strong><br />
start those conversations early on, you know, get a feedback loop going and as we share components Cheers. here's here's consider how your decision might affect the library. Long term and you know, optimize, optimize for the future. Rather than like, here's something small that I need to do right now,

</p>
<p><strong>Jem Young</strong><br />
like remember, I still think the hardest thing is the politics. And if you don't get buy in from everybody that it's not worth while doing, it doesn't matter how many hours and how beautiful and how creative it is, if you don't get the engineers and the product manager and the engineers to buy in, then it's not worthwhile. But if you convince them, like that's really powerful, because you can, you can just like make this highway for speed and just much faster even though the cost is high today. The cost next year will be much, much lower. And I think understanding of that and having a mature organization that can do that is really powerful. Awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, in each episode of the front end, happy hour podcast, we'd like to share pics that we've found interesting they want to share with our listeners. Let's go around the table Cole you want to give your picks

</p>
<p><strong>Cole Turner</strong><br />
I just watched a Russian doll which I did not know if I was gonna like it but it was pretty damn good. I love those movies or shows where they go back and they revisit decisions and they're just replaying over and over and over and she's just trying to stay alive. And it was a really good show.

</p>
<p><strong>Ryan Burgess</strong><br />
Was it like a comedy? Is it a drama?

</p>
<p><strong>Cole Turner</strong><br />
It's a dark comedy. All right, like, she can't even get downstairs for three days. She just keeps falling and dying. And are you living waking up? Oh, crap. Sorry.

</p>
<p><strong>Ryan Burgess</strong><br />
June, what are your picks? You'd like to share?

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, I am a very hands on learner. So I picked two things that I have used personally, to master some concepts in engineering world front end engineering. So the first one is learn Git branching. It's a interactive website where you can kind of visually get a grasp of how you can exercise your Git foo. So that was very helpful for my team in particular, because when you have pull requests from external contributors, and after a round of kind of reviews and fix And multiple commits. How do you then rebase and squash and make it into a nice commit? So that was very helpful for me. And so the website is learn Git branching.js.org. And the second one is Flexbox. Froggy. So flex box froggie.com is a place where you can kind of learn more about CSS Flexbox. So and is

</p>
<p><strong>Ryan Burgess</strong><br />
it like a game? Yes, it is. That's awesome. You know,

</p>
<p><strong>Jeeyun Linn</strong><br />
I'm always down. I

</p>
<p><strong>Ryan Burgess</strong><br />
mean, it's a great way to learn. Absolutely. Right on gem, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
I've used Flexbox. It's, it's very useful for just like understanding in your head, how it works. Good, thick. I have two picks today. My first pick is good. ui.org slash blog. Good UI as a company, I couldn't speak too much on how they do things or if they're good company or not, like, I don't do that. Actually. I do a lot. But I have no opinion this time. But the blog is really useful. They talk about generalizing UI patterns like can they be generalized Just the different elements that go into it, they break down some really interesting websites and just see their different patterns. It's worth taking a look at it, they go into a B testing, they cover a lot of things that are fairly advanced. But I generally like their strategy for trying to attack like, what are common UI patterns? Can we share them? Like what are our learnings? My second pick is actually my favorite show, though I've never talked about it for my first show is It's Always Sunny in Philadelphia. I've seen money. I've seen every episode of every season multiple times it that's, you know, Brian, I think your shows like friends know, it's probably the office

</p>
<p><strong>Ryan Burgess</strong><br />
or even like Santa Clarita Diet. I've started like rewatching over and over again. It's so good for all Joel. Yeah, Joel's a good one.

</p>
<p><strong>Jem Young</strong><br />
But you know, everybody has their go to show that they kind of grew up with and it's always on. He's been on for like 15 years now. It's the Seinfeld of our generation is what has been called just a bunch of kind of misanthropes and their adventures, but I'm going to pick the the last episode of season 13 and if you haven't seen it, I want to spoil it but like it's probably one of the most beautiful things in television history I've ever seen. Like, the amount of work that went into it is just insane. It's like worth looking into and I won't spoil it because like once you see it, but it it is amazing. It's like way past, it's always sunny as a show. It's just like something entirely new. And it's like brave and bold, and you got to give it to America. Like they just keep, keep trying something something new, but it's worth saying I won't spoil it. But if you haven't seen season 13 yet, it's good. Awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan, what do you have? Yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
so my first pick is show just that seems to be the popular thing to do today. And it's the show counterpart on Starz. The premise is that there's a point in time where the world basically splits into and there's a world that's an exact mirror of our world. And then over time, they kind of slowly start to diverge and things happen. And there's interactions between these two worlds. And it's a really interesting show and john funk who plays the main character Howard on the show, it just does an amazing job. So he plays Howard from both worlds who have two very different personalities and he blows me away every episode, I think it's a really good show. And it's a definitely one you need to sit down and pay attention to you can just read a book or be talking to someone while you're watching it, you got to sit down and pay attention, but it's definitely worth your investment. And my second pick, is in Chrome plugin called elevate for Strava. So being a data nerd, I love data and being a runner as well. Elevate just gives you a ton more data on top of all of your not just your running, but any activity on Strava. But it's able to give you really nice fitness and form graphs. So you can see basically, if you're overtraining yourself and shows you kind of cumulative graphs from distance and elevation from year over year, so if you'd like data and you track your fitness on Strava, definitely check out elevate right on.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, I'm gonna follow suit with a bit of a show. Which is actually a documentary on the well. It's called fire but it's on the music festival fire the music festival that didn't happen. It's a Netflix original,

</p>
<p><strong>Ryan Anklam</strong><br />
I thought you're going to check the Hulu one.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I was actually going to add that is a almost like a to pick is like you should go watch both, is you've got the Netflix original, which is on fire, and it has one perspective. And then you have the Hulu documentary, which has another perspective. And I think in general, the story is pretty out there. And so you should watch it, either one of them, or both, because I think you get even more insights into it. But yeah, it's it's pretty interesting to watch. So I'm just gonna throw that out there as something that you should go watch. And then since we're talking about style guides, pattern libraries, I wanted to throw out it's a bit of an older book, but Brad frost wrote a book called atomic design. It's a really short read. But the concept really, it's really thoughtful about how to think strategically about how to not not only how to build people opponents from an engineering standpoint, but also a design perspective and just how to think strategically about that. So it really helps build into how you might approach building your own component library. So I highly recommend checking that one out. All right, before we end the episode, I want to thank June and Cole for joining us. I was a pleasure having both of you on where can people get in touch with you?

</p>
<p><strong>Jeeyun Linn</strong><br />
Yeah, Twitter's probably the best way to get ahold of me. My Twitter handle is <a href="https://twitter.com/jeeyunit">@jeeyunit</a>

</p>
<p><strong>Ryan Burgess</strong><br />
that's amazing.

</p>
<p><strong>Jeeyun Linn</strong><br />
That's jee yunit and it at the

</p>
<p><strong>Ryan Burgess</strong><br />
love it that's so good.

</p>
<p><strong>Cole Turner</strong><br />
You can find me on Twitter at <a href="https://twitter.com/ColeTurner">@ColeTurner</a>. Please send me pictures of dogs

</p>
<p><strong>Jem Young</strong><br />
who nice I you will definitely be getting some dog pics. That's for sure. It's also go around the table. Jem, where can people get in touch with you? I'm on Twitter at <a href="https://twitter.com/JemYoung">@JemYoung</a>

and as usual if you send Ryan birdbox meme salsa.

</p>
<p><strong>Ryan Burgess</strong><br />
Even though I'm not really a fan of birdbox It is funny I have I have got some good birdbox memes about birdbox.

</p>
<p><strong>Cole Turner</strong><br />
From It's Always Sunny.

</p>
<p><strong>Jem Young</strong><br />
That's my favorite meme. Yes, it's too nuanced.

</p>
<p><strong>Ryan Anklam</strong><br />
Ryan. I am <a href="https://twitter.com/bittersweetRyan">@bittersweetRyan</a> on Twitter

</p>
<p><strong>Ryan Burgess</strong><br />
and I'm at <a href="https://twitter.com/burgessdryan">@burgessdryan</a>. Yes, I'm Welcome to some birdbox means good or bad. I'm happy to see them. Thank you all for listening today's episode make sure to subscribe to front end happy hour on whatever podcast catcher whatever you want to call it that you like listening to podcasts on. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>, any last words? Do you

</p>
<p><strong>Jem Young</strong><br />
do you write g unit tests?

</p>


  `;
  return transcript;
};