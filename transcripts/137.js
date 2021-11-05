module.exports = function() {
'use strict';
const transcript = `

<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end, happy hour. We've often mentioned microservices monolithic architectures on previous episodes, but I realized we haven't really gone deep on the pros and cons of both. So in this episode, we are joined by Katherine to help share her perspectives on both Microsystems and monolithic architectures. Katherine, thanks for joining us. Can you give us a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages? 

</p>
<p><strong>Katherine Peterson</strong><br />
So I'm Katherine. I'm a software engineer at GitHub. And today, I'm drinking a Moscow Mule. 

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. And might I add in the proper copper cup, which is? Yeah, I mean, you're right. Like he can't I mean, you could drink it out of just like a glass, but it's not the full factor. Yeah. Like copper cups. Let's just take a second here. It is not cheap to buy a copper cup. 

</p>
<p><strong>Stacy London</strong><br />
Have you ever gone to a bar or bar or restaurant and had to they have lit they like, take your ID to have the copper cup go away? stealing them?

</p>
<p><strong>Ryan Burgess</strong><br />
No, because I'm sure a lot have but no, I have not experienced that. Maybe Maybe I need to order more Moscow Mules. That's me my problem,

</p>
<p><strong>Stacy London</strong><br />
or go to dodgy also like ours, can afford to lose the $10. 

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, let's also give introductions to panelists. I mean, atheists, you know, you may as well start it off.

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a senior front end engineer on Trello.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we love to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is? 

</p>
<p><strong>All</strong><br />
architecture. 

</p>
<p><strong>Ryan Burgess</strong><br />
All right, I'm pretty sure this word is going to come up. Maybe too much. But we'll see. Let's hop right in. I figured what to start with. We've got to define what a microservices and what a monolith architecture is. Cheers. Alright, I've already started cheers, or started, I'd love to hear your thoughts on them.

</p>
<p><strong>Katherine Peterson</strong><br />
Go ahead and talk about what Monolith is. So monolithic architecture, my drinks really good. So I don't mind saying it. So it's when it's a single repository that houses your entire application. So all the functionality of the client, the server, the database level, and most importantly, the whole system is deployed as exactly one unit,

</p>
<p><strong>Ryan Burgess</strong><br />
well defined on the monolith. And at one new micro service. Do you want me to?

</p>
<p><strong>Stacy London</strong><br />
You can go ahead. I want to hear your interpretation. 

</p>
<p><strong>Ryan Burgess</strong><br />
All right. Yeah, actually, that's a good question. So opposite to the Monolith is micro services are really split up. It's like separation of concerns, like I think about it is like, even from front end to back end, you've got like, the front end code is very separated from the back end code. But really, you're you're thinking about it more in services, versus a single unit. I like that unit Park Catherine. So I'm gonna steal that and use it mine. How did I do, Stacy?

</p>
<p><strong>Stacy London</strong><br />
That's, that's good. Yeah, i for i feel like there's a couple ways to think about it, like the monolith of like, say, a web application where yeah, like what Catherine was saying, you have maybe the all the code that powers the back end API's. But you also have all your front end code. So your HTML and your CSS and your JavaScript, it's all like in 111 spot, and it all gets deployed at the same time. So if you wanted to make like a super small change to CSS and change the color of something, well, you have to deploy everything, which can be potentially dangerous. So and take a really long time if you have to, like run a bunch of tests and everything for it for every piece of the codebase. So that's kind of how I think of like monolith, the micro service stuff, I always kind of associate that with API's and back end, but I think that can probably apply to like front end as well. Because you could you could like deploy a piece of the front end as a service. And it can be small. So I suppose you could apply it that way. But I think traditionally, I've always thought of micro services as back end things. And yeah, and the same thing. So like, instead of having maybe like a particular API endpoint and the package associated with that be deployed. Along with the whole thing that I just described, it would be like, Oh, that's an independent service that gets deployed on its own and is managed on its own. And it could be really small. It's maybe like not an API with like many, many different methods and ways to interact with it. Maybe it's like super tiny and like, just one, one method or something like that.

</p>
<p><strong>Katherine Peterson</strong><br />
When I think about microservices, I think about like, how if you're using a service from a different company, like maybe you're using Firebase for authentication, it gives you an API that you can work with. But you don't have to worry about any of the internals. So it's kind of like that. But you could have those services within the same company. So different teams have their own services that they work on. And all that really matters is the public API that they give you to work with. within the same company.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, I like that point as well. I feel like Yeah, I think we've got a good baseline of what the two codebase setups, I'm trying to avoid our keywords. I don't know what it is. But yeah, we've got we've covered that. So that's good. I am curious, as we're started talking, I realized, what are both of your experiences working in those environments? Because I feel like I've had both. And I'm curious if how each of you have worked in whether it be a monolithic or microservice based system?

</p>
<p><strong>Katherine Peterson</strong><br />
Yes. So currently, I work at GitHub, and I work in GitHub monolith every day. So the vast majority of github.com is the same code base. So it's one single code base where everything lives, I think, it's like, almost 14 years old. Now it has over a million commits. So it's big. And that was a learning curve for me. And it was a little bit overwhelming, because coming on, I have my one like, project that my team works on, which is GitHub sponsors, but it's part of the whole GitHub codebase. So it wasn't just like this small area of concern that I could look at and understand all the code like there were no well defined boundaries, where my team's service was separated from the rest of the codebase. And prior to GitHub, I worked at small startups where it wasn't necessarily micro services, but it was pretty small scale. So I don't I don't have much experience with large scale micro service systems. So I'd be interested if either of you do, I

</p>
<p><strong>Stacy London</strong><br />
think I kind of was familiar experience. Before joining Trello I worked on BitBucket. So very kind of similar thing to GitHub in a lot of ways were built out as like a, you know traditional style web application where a lot of the you know, HTML and all that was rendered on the server and before the days of single page apps and such so that you know, that whole thing is a, you know, Django powered web application with Python. And basically big monolith like everything in there. We started when I was working on it, we started breaking that out. And so we took the front end, some of the front end pieces of it into a single page app architecture. And then that got pulled out into a separate repo. So we could work on that independently and start like deploying pieces of the app, or even entire pages, separate from everything else. And so we started to do that kind of breaking apart of things, which was nice. And then but even then you can go a little too far, like at one point, we kind of broke away and created another repo for the front end, where it was like the shared components for the front end so that we had like, the kind of page level stuff in one repo, and then the components and another. And it started to get almost hard to manage because you have like many repos now that you might have to do a pull request in for like a single change. And that can kind of get annoying. So maybe that's like one of the potential downfalls if you start to break things up, like in that way, it can be kind of tough to manage, we ended up bringing that back together into the front end repo. And then we had something that we called a mono repo. So like, not a monolith. But like a single repo that had these separated these things that had boundaries, but still lived in the same repository. So it's easier as a developer to like, make changes. So that was kind of a little bit of like one of my experiences working in those kinds of architectures. Cheers,

</p>
<p><strong>Ryan Burgess</strong><br />
cheers. I like that. Yeah, I've both experiences are. But then even to some of the points hearing Stacy talk. It also reminded me of times where we've migrated from a monolith to more micro service or breaking apart. And Stacey, I'm sure you went through a lot of pain doing that too. But it's not easy. It's like separating concerns and like trying to to migrate pieces of it while other things are getting developed. On top of it. It's not that easy. Netflix is very microsystems across the company, which is amazing, but also like daunting, like there's just a lot of different services and things happening that you probably not even aware of them all with, like being an engineer there. And so that's kind of scary in some ways, too. But it I think it's cool. Like I feel like the one thing I've always thought about what I like about microservices is you kind of have that model of do one thing and do one thing really well so you really understand your service and you understand it really well. And you know Stacy if she Oh and another one and Kathy And another like, each of us knows our system really well. And, and that's where we're focused. And I do like that, I think there's something to be said about that. There are drawbacks, which we will get into as well. But I figured it'd be interesting to kind of maybe focus on maybe even just the benefits of the monolith first before and then we can kind of work our way towards some of the trade offs between the two.

</p>
<p><strong>Katherine Peterson</strong><br />
One thing that comes to mind as a benefit of a monolith is that basically, the entire company is in the same tech stack, and has like some understanding of the entire system. So I can ask for help from people across all teams. And also people can move between teams very easily. So we have that even the department that I'm in we, we have a handful of different projects, and people move between them fairly often. Which is kind of nice, because people can dive right in when they join a new team and have a pretty good understanding of what's going on. Because everyone on GitHub knows rails, because everyone is working in Rails, whereas in a micro service environment, it might be like a completely different technology or language in each service.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I suppose if you don't have like a strong company, culture and tech stack or tech stack culture, so like teams can't you know, if you spin up a bunch of microservices and there Yeah, in different technologies, like you read one's written and go and another one's written in Java or something that Yeah, it's hard to like, have someone to be able to, like, hop between those and be super productive. If, if you don't have like a overarching company strategy to be like, we're gonna write all of our services and x and like, makes it harder to move around.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think also with monolithic, is it easier to deploy to because you're really just taking the whole application and shipping it right, versus like, having some part of the application like in a micro service world, you're like, some of its shipped, and some of its not. And so you have a little more coordination on how that ship versus it's all, you know, copy this package and have the application and the server done? Deploy? So it's a little simpler in that sense.

</p>
<p><strong>Katherine Peterson</strong><br />
Yeah, setting up the whole deployment process, I think can be easier, because you have one pipeline, and you can get it set up really well. So like I get have, we have, we have our system for deploying, we have our deploy trains, a lot of its automated our CI CD pipeline, and all that is, is automated. And it was implemented once and now everyone uses it. Whereas if you were constantly creating new services, you'd have to like get that whole pipeline up and running for each individual one.

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. Like you hit that one big time where it's like, it's a coordination tasks to figure out how is my service going to deploy? And also how are other services and timing happening to so there's, there's definitely more of a coordination on the microservice side.

</p>
<p><strong>Stacy London</strong><br />
Yeah, even for things like, like linters. And setting up your, the way that your code styles and all those things like with a with a monolith, like, you kind of just set it up once and everybody's good. Whereas the if you had microservices, you're potentially setting up those code, formatters and linters. And all that tooling, like over and over and over again,

</p>
<p><strong>Ryan Burgess</strong><br />
I guess one downside, though, compared would be flexibility, right, like so now, you're, you're all agreeing on that, and no one's ever going to agree on that lindian rule or style. It's, I mean, we can debate that all day long as engineers, but it gives you a little less flexibility in the sense that I mean, even in a 10 person team, you're probably going to still have disagreements on like what the right style is. But when you're more microservice driven, you can actually have, you know, debate in the smaller group, what's the right thing for how your style is and adopt that and like every other team can be different, if you want. I see, like, good and bad on that point, though, like to be optimized for stylistic of what we're developing maybe, but I don't know, if that's the, you know, it's like, what's most important thing is what's shipped and like, what's, you know, how it performs on the end state of the user?

</p>
<p><strong>Katherine Peterson</strong><br />
Yeah, I was gonna say the downside of that is making that decision over and over and over again, like the the time that it up, like over the course of the company of each team, like making all those decisions over and over again, could be a downside. Another really big benefit of a monolith is that you don't have to worry about, like requests between services. So HTTP API calls and stuff like that, like, without, you have to worry about, you know, like, failure states, if those requests fail, then like, the latency of that and stuff like that. Whereas if it's like a Rails codebase, or something, you just have your data right there. And you can just send it over your view. And you don't have to worry about making all those extra requests

</p>
<p><strong>Ryan Burgess</strong><br />
as we're talking about the styles. One thing that I see as a disadvantage on the monolithic code base is styles. Okay, fine. Like that's not a big necessarily a big blocker. But the choice of technology can be adopting a like if we're talking front end, adopting a new framework. Let's say you're, you know, old lady To see jQuery and you're like, we need to adopt something new like React, that becomes really difficult to just do an isolation. One thing I think of the has always been an advantage, I think in the microservice world is that one team could completely change what they're using for technology or a framework or whatever. As long as the contract between the services is the same, the other team has no idea that that happened. And I think there that can be really great and empowering. We're like, we're seeing disadvantages on the UI that, you know, our UI is we're missing some features, or they're not performing. So we could just go change that. And someone on the backend services like Yeah, I had no idea that even did that. That's really cool. Because it's just completely separated.

</p>
<p><strong>Katherine Peterson</strong><br />
I totally agree with that. I think I told you, Ryan that other day that like, my one complaint I get have is I miss like, using newer frameworks like React and like get him doesn't have the ability to like quickly change over to things like that.

</p>
<p><strong>Ryan Burgess</strong><br />
And to be fair, it's it's never a quick change, even if you're already a microservice world. And it's like, React is great. And I'm really cool. You know, what's really cool is like, this new framework that doesn't even exist, like let's just jump on it, that's not an easy thing to do. Or even sometimes, upgrading like, something like React is not just a quick, easy change. So you know, to be fair, there's still that like, concern, but you're right, like, it becomes that much harder in a monolithic architecture, cheers

</p>
<p><strong>Stacy London</strong><br />
to, maybe that's sometimes a good thing that you don't get to jump so quickly into the new thing, because, you know, you think about some lifecycle of react and how like, over time, you know, people have implemented it, and then are running into problems where things are slow or sluggish. And they're like, oh, maybe if we render it on the server, it'll be faster. And you're like, Well, we were running on the server and sort of this like full circle, you know, architectural flow of how we do things. And maybe that's not a bad thing you know, for monoliths is that, you know, you don't jump to something too quick before, you might understand that there might be issues that you're going to run into.

</p>
<p><strong>Katherine Peterson</strong><br />
And it's so fun to see. 

</p>
<p><strong>Stacy London</strong><br />
Some fun.

</p>
<p><strong>Ryan Burgess</strong><br />
Developer happiness right there. I was thinking another disadvantage on the Monolith is even the fact of because it's such a large application is you now have that large application on your local machine like theirs. It is, it's big, right? And so you're figuring out all the complexities that are there. I think that sometimes that can be harder, like I know, we mentioned like, oh, you get, you get to see all the different things and can interact. And it's, you know, the separation of concerns. Sometimes it's not there, which could be a good thing, but it can also be kind of a con to and in my mind, it makes it harder to to just understand, especially thinking of a new engineer, Catherine like joining GitHub, it's like, there's probably a lot of things like I have no idea what's going on here. Is this an area should even be in right now. It's harder to learn. I think like it takes up more ramp time. Is that a fair statement? Yeah, definitely.

</p>
<p><strong>Katherine Peterson</strong><br />
When I think it was like my second week, I was like, I'm just gonna sit down and kind of poke through the code base, like click on Files and look around and see if I can understand it. And I was like, Oh, that's not a thing you can do here. And even now, like, I kind of know which, which files are relevant to what I do, and I just like, search for them and go to them like, and even then it's like, I type in something like repository or like certain words are just like in a million files, like finding anything can be really difficult. So it's not, I don't think, many if any people like have the full understanding of the codebase. And I don't think you could because of how much it changes and how often it changes. But that that was something I had to learn. It's definitely a bigger learning curve. I think with microservices, it can be a bigger learning curve to figure out how the whole system works like how everything fits together. But onboarding to a specific service is easier. If my team worked on it smaller service, I would have picked up that information faster. Maybe not understood, like totally how it fits into everything else. But I would have been able to get up and running faster on what I was working

</p>
<p><strong>Stacy London</strong><br />
on. Kevin, you're talking about like it's sometimes hard to get your head around like how all the micro services work together. And I always think about that. Like it's always sunny and meme with like Charlie there like with his hair hair like crazy and just like being so frustrated and like trying to show this huge diagram of how everything interacts with each other. And I feel like I've seen some microservice architecture diagrams that you're like, Ah, my head.

</p>
<p><strong>Ryan Burgess</strong><br />
That is absolutely correct, though, with like micro services. It's just like, I've been at Netflix for over six years now. And I do not know how the whole ecosystem works and nor Will I ever probably, you know, it's like, maybe I haven't tried to sort out to try and do that. But I think that's the thing is you understand your service really well, and how it communicates with another service, but there's like upstream or downstream services that you're interacting with, that you may not even really quite understand or know, or need to know. And sometimes that I think can be difficult, because you may not communicate well between, like understanding how how that handshake is happening. So I think there's complexity in that in itself is you kind of have to talk to humans at that point, to try and understand their service.

</p>
<p><strong>Stacy London</strong><br />
Another point, you're saying about like, a disadvantage of the monolith, like, from at least from a development standpoint, and if, if Catherine, if GitHub is sort of like this, to where to run it all locally, actually requires quite a powerful machine, to actually a lot of like memory and CPU to actually get it all running. So I know, like, when I was working on BitBucket, we had a lot of stuff in Docker containers, Docker eyes, then you would spin up a bunch of containers to run everything. And, you know, that would sometimes bring your your very expensive, highly powered laptop to like, you know, started getting really hot and the fans are going and you're like, how do I how do I run this whole stack without like burning my laptop up?

</p>
<p><strong>Katherine Peterson</strong><br />
So this is actually going to be one of my pics later. But we actually started using Toad spaces within the past few months. I don't know if you've heard of it, but it solves for that problem. Yeah, I'll talk about it more later. But it is a lot on the computer. If you try to run the GitHub codebase. locally.

</p>
<p><strong>Ryan Burgess</strong><br />
I loved it at GitHub, you're using Code Spaces. Interesting, very interesting. For those who don't know, Code Spaces is a GitHub product. But I'm very excited to hear more about that Catherine. Right away, that was where my head goes to is like, there are ways in which like a remote development environment can try and help solve for that. Because, yeah, it gets complicated. I mean, I think even just running Docker on itself is already the fans start going. And so if you have multiple Docker containers going, your fans are probably going really, really fast. So that's a valid point kind of jumped all over, which is great. Any more like advantages, disadvantages that you all would like to highlight between either of them?

</p>
<p><strong>Katherine Peterson</strong><br />
I think this is somewhat related to like how hard it is to run a monolith on computer. But also things like tests and CI are much slower. Like I was told, just don't try to run the whole test suite, because it's just a bad idea. And it'll take forever. And so I had to like, go to the specific file, I want to run it, run it for that. Yeah, that's that's

</p>
<p><strong>Ryan Burgess</strong><br />
a really great point, too, is you have to be a little more thoughtful on not running all the tests, because even I think Stacey earlier mentioned like, Oh, if I made a small change in the CSS or something, well, is that going to kick off all the tests. And that may be okay, but likely not as a code base gets bigger and bigger. That's a lot of tests probably running, which also could be concerning to is like, you almost have to know which tests are run that are relevant to that piece versus like being able to run the entire suite, you'll catch things that you didn't realize that that one file change affected other places. So I could see that being a concern, too is, you know, you might miss some of the tests that need to be run.

</p>
<p><strong>Katherine Peterson</strong><br />
Yeah, we do have some rails in place. It does run the whole test suite in CI, like once it's in a PR, but like, locally, while I'm developing I can't. So I'll run the files, I think might have tests that broke. But a lot of times, I find out later down the line, like oh, I also wrote this test in this file that was really far away. So it's definitely slows down the feedback cycle there

</p>
<p><strong>Ryan Burgess</strong><br />
for both of you like, if you had to start from scratch, how would you think about like what to use, like a monolithic code base or a micro service system? And what would go through your decision making? Because I see pros and cons, we've talked about them. Both are great solutions, but they have their unique choices. And I'd be interested if you had to start from scratch. How would you think about that?

</p>
<p><strong>Stacy London</strong><br />
Interesting question. I think those are always hard questions, because I'm just like, well, what am I building? And why am I building it? And so I guess if I was like building, maybe a web application, I don't know if these terms delineating these things anymore. Make sense? But like a web app, versus maybe just like a simple content based website where there's not a lot of like, interaction in it, you know, I would choose different stacks and different ways of assembling that. Architecture. Cheers. That was hard to avoid. And so let's say I'm building like, a web app, it's going to be having it's gonna have like a lot of interaction. in it. I probably, I go with the spa sort of style of things like build something maybe in maybe with React and have it be He independently deployable just like static assets, and then any data that I would need, I'd like to have that in some sort of API, but maybe that's maybe Graph QL. Maybe that makes sense. Since the stand up depending on you know, like, depending on your team and what skills they have, like, that might make a lot of sense to do. It's so many so many questions to like, answer first before I'd be like, This is how I would do it.

</p>
<p><strong>Ryan Burgess</strong><br />
It's like one of the best answers is, it depends, like, because it is a hard question. It's like, and I think that, you know, I think that's exactly it is you've got to think through some of the use cases, and you're like, Oh, I even like Stacy, where you said it of like, Was it like an interactive web app? Or is it very static? That might lead you down two different paths? Or are multiple teams working on this? Or is it just like one person, you know, what are what are the skill sets on, and it may change over time, like 10 person company may become 1000 person company, and over time, you might change that. And so I think those are the types of things that go through my head too. But it the best answer? Is it the patents?

</p>
<p><strong>Katherine Peterson</strong><br />
Yeah, I don't think I have anything better to save on that. I think it does definitely depend. I like what you said about like, depends on the skill sets. And I know you mentioned I think the monolith you worked in before was like a Django app. I think there's, there's certain frameworks that lend themselves really well to monolith. So like Django or Laravel, or rails or like classic, they set you up to build a monolith, they give you everything out of the box right there. And so if you want to get up and running fast, like you can build with one of those frameworks, and it has everything you need. And you can get that deployed. And if that's, I think that's GitHub started as a Rails monolith, because that was the skill set of the founders. But yeah, also thinking into the future of like, how big is this going to become like, how will it need to scale? What kind of functionality does it need? And there's so many questions just like you said,

</p>
<p><strong>Stacy London</strong><br />
Yeah, with like a full web application framework, like like Django and rails and stuff. It's a really great point, Catherine, like of those things have so much stuff built into them. They're like common patterns for the web that have evolved over many, many years. And like people solving certain categories of problems, and baking that into these big application frameworks. And so you don't have to end up you don't have to start with a lot of that plumbing work, you ended up being able to focus on features. And really, that's what it's about in the end, right? Like you're trying to build an app that solves some problem for a person that's going to use it and so a lot of times he's even though they're, you know, monoliths and there's some trade offs there, the positive is that you might get going really fast, and get something out there really fast, that's usable. And if you go the other way of kind of like, building everything from scratch, you know, and artisanal Lee, you know, coding everything, like you might end up swirling and doing a lot of just busy work that has been solved before,

</p>
<p><strong>Ryan Burgess</strong><br />
haven't you? You even mentioned that how GitHub started, because it was like the founders that created it this way. And that's usually how things start is like, what are people familiar with? And then it stems from that. But I think it's interesting, too, is like, are there certain types of cultures that gravitate towards a, you know, microservice driven architecture or a monolithic architecture? I said it both times, cheers,

</p>
<p><strong>Stacy London</strong><br />
cheers. This is something but I wonder sometimes, like, really, really big companies. So if you have, like a comment, it's been around for a while. And they have a lot of established, like different organizations and different management structures over those organizations. And they start to like, be sort of autonomous and like built, they're building their own things. Like if that lends itself well to microservices, because then there isn't, you have to depend on each other, highly depend on each other to build stuff. So you can kind of move faster. Even though it's a really big company, you can still move pretty quickly, because you're you're able to develop without having tons of dependencies on everything. I don't know if that's true or not. It just it seems like sometimes that architecture can like map well, to a big structure, like organizationally,

</p>
<p><strong>Katherine Peterson</strong><br />
yeah, I just looked this up to make sure I was right. But there's something called Conway's law that says, an organization that designs a system will produce a design whose structure is a copy of the organization's communication structure. So I think, I think a lot of the times like those two things will mirror each other like that. Not just the culture of the company, but like the organizational structure of the company, and like how those are broken apart might be similar to have the code is architecture, the setup chips tears,

</p>
<p><strong>Ryan Burgess</strong><br />
I hadn't really thought of that. Like I was thinking of like even culture dictating the route you go of way you structure your code, but it's really interesting to flip that around is like how we've company will organize around the code base that is interesting. and it makes so much sense. Catherine, you spelling that out? I'm like, yeah, that is so true. And even to the flexibility or aspect of like, well, this team owns this service. So we need a dedicated org around it or, you know, like, it's super interesting just to think about that. And I'm sure that has absolutely happened in pretty much every single company in tech is like, that's how orgs get started and shaped around that. And like

</p>
<p><strong>Katherine Peterson</strong><br />
what I said earlier about people being able to move between teams easily I get hub, it's also like, one of the biggest complaints that I've heard is that people get reordered a lot. So maybe it's, it's not that bad for the business as far as like engineering, because people can understand the new teams, but people don't like being moved around all the time. And like having a new manager and new teammates super often.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it may not even be as challenging to at that point. Like sometimes people, you know, they move around companies to a different team, or, or again, yes, you might have to switch managers obviously doing that. And so that can be a deterrent sometimes, if you like your manager, but I think there's also some times where you're like, I want to work on something completely different. And so being on that monolith side, it might be hard, because you're like, Well, I'm doing something different from the business perspective, like I'm working on the PR side of GitHub, or I'm working on how like repositories or show up in for users, but the code is very much the same. And so you're not getting exposure to different technologies or and that might be okay, it might just be business, that you're looking at a different change. And having that baseline technology might be completely fine. But I could also see that being determined as you move around. And to your point, Catherine is all he does make it easier to say like, alright, well, let's just move this team over here to focus on this area. And moving people around is easier because you don't have that huge ramp up time on a new system or architecture. Cheers.

</p>
<p><strong>Stacy London</strong><br />
Cheers. No, one other thing is in like, say the opposite of that you have a microservice kind of implementation in your company. And there are lots of different teams working on a bunch of different services. But if you do have the same sort of code, standards and language standards, like it's sort of the same, like you could just move to a different team. And really, you're just learning more about business rules than you are about, like the technology stack. So that maybe doesn't even change if depending on the company about like boredom and wanting to work on different things. There's also an interesting cultural thing of maybe like, internal open source kind of thing where maybe you're, you're not on that other team that you can put up a pull request to that microservice in that other repository, because it's open to you and you can see all the code in the company and it may be like that other team doesn't have time to make the change, but you're happy to do it. Like if the culture is right. Like that can be really beneficial. Like, even if it is you know, microservices in different teams own it, but it's still like open culture for code changes that that can help

</p>
<p><strong>Ryan Burgess</strong><br />
it's probably a good time to for us to jump into pics in each episode the front end happier podcasts we like to share things that we found interesting want to share with all of you so we'll jump right in Stacy, do you want to share pics that you've for us for this episode?

</p>
<p><strong>Stacy London</strong><br />
Sure. Got two picks today I've got. The first one is sort of the meat they're both music picks as per usual. The first one is more of a meditative piece. It's called sit around the fire by John Hopkins rom das and East for us, which is a really fascinating combo of names. John Hopkins is like a composer. He's put a lot of really great electronic music together. So this piece I guess he was building but working on this new album and he was contacted by East forest, who spent some time with rom das and Hawaii before he passed away is given access to some lesser heard talks from the 70s and asked to set them to music and then East forest it's like choral vocals which he recorded in the mayfly John Hopkins sat down and like him I think sort of I don't know if it was one take but both the piano and improvise to it so it's just a really beautiful piece and very like meditative. If you just want to like calm down at the end of the week. The next pick is real realign. It's a max Cooper remix of a Henry Green track stereo Fox describe it this way. Max Cooper transformed the soulful realign into a more progressive and textually rich track, particularly with the inclusion of bright synthesizers and upbeat drums. So that's a good, good track Dakota.

</p>
<p><strong>Katherine Peterson</strong><br />
Has anyone made a playlist of like all of Stacy's picks

</p>
<p><strong>Stacy London</strong><br />
that somebody did I thought yeah, we started to put them into a playlist. I think, Ryan you were doing that for a little like putting him into front and

</p>
<p><strong>Ryan Burgess</strong><br />
I may have fallen off on doing that. I feel like Stacey you need to almost always Not just like the state's Happy Hour like playlist? Yeah, I feel like I know I you would have a subscriber for me doing it like, I would definitely listen. There's a lot of others that would benefit. Yeah, Catherine, what picks you up for us? Yeah,

</p>
<p><strong>Katherine Peterson</strong><br />
I have two. So one is a Hydroflask, cooler cup. So it's like, essentially an insulated koozie like for cans or bottles. So like beer and stuff like that. I was on a camping trip this summer, and my cousin had one. And it was like the greatest thing kind of a slow drinker, but like, it keeps it cold for like hours. And since then I've like gifted them to a bunch of people. My fiance got them for all his groomsmen. They're really awesome, we love them. And then my second pick is GitHub codebases not biased at all. So what that is, is it essentially an entire BS code development environment in the cloud. So we talked about it earlier, getting a monolith running on your local machine can be a lot. So with this, you can have that up and running in seconds. So I actually had a couple of days after joining GitHub, I went ahead and clones the whole repo. And it took me like two hours to get it cloned and all the setup scripts running and stuff. And then like the next day, someone told me like, oh, by the way, you don't have to do that anymore. Just use code spaces. And I was like, Oh, great, cool. And I did that. And it's literally like 10 seconds. And I have a whole development environment up and running, it feels the same as local, because you can run it in the browser, but you can also run it in your VS code desktop. So it's super, super awesome. Pretty much every time I work on a new branch. So a new feature, I just spin up a new code base. So I have a fresh database state really, really nice. I also think it'd be great for like, contributing to open source, because sometimes you just want to make like one small contribution, but you don't want to have to clone the whole thing to do that. So you just don't do it at all. And so I think that this is going to open up a lot of possibilities for just getting started on a project really quickly.

</p>
<p><strong>Ryan Burgess</strong><br />
I echo so many of your feelings on this like it's it. I'm excited. I've been looking at code spaces as well. And I think there's a just has a lot of potential there. I even love your open source example where you're right. Like there's times where it takes so much to spin up a project and just get to where you need to be to make a contribution that especially on like documentation where you're like, that's a really easy, I guess you don't have to spin up the whole project is for documentation. But usually you want to like understand what you're trying to do. I love that I didn't even think of that example. So thank you, Katherine, that's even a bigger selling point feels like you might work for GitHub or something. I don't know.

</p>
<p><strong>Katherine Peterson</strong><br />
I genuinely love it.

</p>
<p><strong>Ryan Burgess</strong><br />
No, I believe you on that. Alright, well, I have two picks for us. One, which is kind of funny is a repository on GitHub that I just recently put together. I've been having a lot of people ask me a lot of engineers, but even other managers have like interview questions like how do you prepare for a manager interview? And I've been asked this many times, and of course, like, the more you get asked something you like, how do I scale myself keep answering the same questions over and over again. And so I was like, I'm gonna sit down and make a repository is just basically a readme of some example questions that you may get asked in a interview for a manager role. I think it's been really helpful for ICs, moving to manager because this is very new to them. And so how do you prepare for that? So I've put together a nice GitHub repository for that. And you can just see the different questions. And then my second pick is a book called everybody matters. I really liked this book, in the sense, I think even more so. And I think about it in a pandemic of just how important it is for us to care about each other as people. And I think that this is a great leadership book, where it's like really trying to understand your team and build trust with them. I think there's a lot of great information in the book. And I think that a lot of leaders should read it. But even just anyone really like how do I work with others and collaborate? Because a lot of really helpful information in the book. So that's my second pick. Katherine, thanks so much for joining us. It's been awesome hearing your experience in you're new to GitHub too. So like it's really cool, fresh in your head jumping into a monolithic code base. Where can people get in touch with you? Because I know they're gonna want to find out more. So where can they get in touch with you? Yeah,

</p>
<p><strong>Katherine Peterson</strong><br />
the best place is probably on Twitter at Katherine codes. And on GitHub, I'm at Octo Catherine, which is a play on Octocat get hosts mascot. Yeah, but it's definitely say hi on Twitter.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that I love like Katherine codes and an octet, Katherine. That's great. So good. Do you have your own sticker yet?

</p>
<p><strong>Katherine Peterson</strong><br />
Not yet. But that is an excellent idea. And I might just have to do that.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, well, it sounds like gave you the idea. I do expect one of those. stickers at some point definitely well thank you all for listening to today's episode you can find us on front end happy hour.com You can find us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> any last word?

</p>
<p><strong>Stacy London</strong><br />
Break apart that architecture 

</p>
<p><strong>All</strong><br />
Cheers Cheers

</p>
`;
return transcript;
};