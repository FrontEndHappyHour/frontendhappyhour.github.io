module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 23rd and final episode of 2016. It's been a great year of recording the podcast. We've all had a blast and have been happy to hear all the positive feedback from our listeners, you are all the ones that keep motivating us to continue recording and drinking and drinking. In today's episode, we will be talking about the growing JavaScript framework Amber, we are joined by Stacy London, a software engineer from Atlassian to help discuss the advantages and disadvantages of using ember. She's recently moved to the Bay Area, and we're excited to have her on the podcast. I'll let her give a brief introduction of herself. Stacy, can you help us give an introduction of who you are, what you do and what your favorite Happy Hour beverages?


<p><strong>Stacy London</strong><br />
Sure. So I'm Stacy London. I'm a front end developer working on BitBucket at Atlassian. And my favorite Happy Hour beverage is a whiskey old fashioned sour.

</p>
<p><strong>Brian Holt</strong><br />
Ooh.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, let's go around the table and give a brief introduction of today's panelists. Brian, you want to start off as you take a drink?

</p>
<p><strong>Brian Holt</strong><br />
My name is Brian Holt. And I'm a Ember intern.

</p>
<p><strong>Derrick Showers</strong><br />
My name is Derek showers, Senior Software Engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. And I'm probably an internet Ember as well. Yeah. And each episode of the front end Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is

</p>
<p><strong>Brian Holt</strong><br />
shit faced. I forgot what we're saying.

</p>
<p><strong>Ryan Burgess</strong><br />
Framework.

</p>
<p><strong>Brian Holt</strong><br />
That was my suggestion.

</p>
<p><strong>Ryan Burgess</strong><br />
So anytime we say the word framework, we will all take a drink. Alright, let's get started. I figured it was probably the best way to start is what are the benefits of using ember? It's a framework.

</p>
<p><strong>Derrick Showers</strong><br />
So I think probably I mean, I haven't done nearly as much react as some of the people in this room, but are angry. I haven't done really any angular. But just to kind of contrast a little bit. And I'm sure we'll get into this more later. But I think one of the advantages that I've seen one of the adventures that I've seen working with Ember is just how easy it is to get started, especially with their CLI tool. You just say Ember, you just type Ember new in a terminal. And you're you have an Ember app running with a server and everything. So I no more, you know, sign, I think react has something similar that they

</p>
<p><strong>Brian Holt</strong><br />
call started going, yeah, just blatantly copied that.

</p>
<p><strong>Derrick Showers</strong><br />
I think that's one advantage, I guess the other advantage. And the reason, I think the primary reason that we chose LinkedIn is because Microsoft, like it's just, it's very opinionated, which is what some people don't like about it. But I think it does help to keep everyone on the same page. So it's a lot easier to move laterally from team to team, everyone's kind of working in the same code base. And also like, if somebody knows Ember, and we need more people, and we need to hire people, you know, we can hire somebody that's done a lot of ember outside of LinkedIn and come in and, and pretty much be able to start and ship code right away.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that is a huge benefit. Is that being so prescriptive? It's the exact same way. So if you're writing at LinkedIn, and another company's writing it somewhere else, it's the exact same thing?

</p>
<p><strong>Stacy London</strong><br />
Yep, I think I would add to that to the upgrade path for Ember seems to be a little, I think it's a little bit of a benefit over some of the other things that I've seen. I haven't built anything with Angular, per se, but I avoided it specifically, because of reading about possible upgrade, you know, trauma

</p>
<p><strong>Ryan Burgess</strong><br />
traumas a good way of putting it, especially now he's going from Angular one to Angular two.

</p>
<p><strong>Stacy London</strong><br />
But we I had pretty good experience with the doing some of the upgrades and seeing like, deprecation warnings in the envelope, prepare for them ahead of time. And I thought it was very well done, like really developer focused, which is cool.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And they have and there's, there's a, I don't really think it's publicized all that well, but they do have blueprints for Ember CLI, so you can kind of you can compare the two versions of ember. So if you're upgrading Ember from like, 2.5 to 2.8, or something, you can go to these blueprints. And it's basically just like a newly generated Ember app. But you can look in at their GitHub repo and see like, okay, these are exactly the dependencies I need to change. And these are the things I need to change in my app, like boilerplate code and stuff like that. So it's super easy. It gets a little tricky when you have different dependencies, like when you scale out, basically and that's, that's I think, one of the issues that we've run into at LinkedIn is, is everything's really easy when it's small. But when you get into larger advocates, slightly more confusing, which is just

</p>
<p><strong>Ryan Burgess</strong><br />
difficult. I think one thing that's kind of cool too that I liked about it when I was using it is it has like Built in testing tools right in within the CLI, yeah, that was actually really handy. Is

</p>
<p><strong>Brian Holt</strong><br />
it still Q unit? Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
You can easily you can easily change it. Well, yes. The default is

</p>
<p><strong>Brian Holt</strong><br />
Q unit. Okay. Sorry. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
No, no, no, I'm with you. I was I wasn't happy about that when I was using it. But I switched to mocha. Yeah, it was a fairly easy,

</p>
<p><strong>Brian Holt</strong><br />
I remember when they announced that they were standardizing on Q unit. And I just like felt the collective developer world roll their eyes, like, Oh, why Q unit

</p>
<p><strong>Ryan Burgess</strong><br />
does have a really good community behind it. I think it one thing that I kind of, like, differing between Angular and React is it's not a company driven framework is Well, cheers. But yeah, you don't have it backed by a company and they're not making all the decisions. It's a community making those decisions. Yeah, I would

</p>
<p><strong>Stacy London</strong><br />
add to the community part of it too, because I started with Ember about a year and a half ago. And I went to Ember calm for the first time, this last year in Portland. And, to me, the community has been extremely friendly, and like really welcoming, there's been kind of a hesitancy for my part to like, jump into open forums and be a part of like the internet at large for stuff just because of like, women in tech things are kind of scary sometimes. And the Ember community has been extremely friendly. Like I went into the Ember, JS community slack and everyone, I posted some questions and everyone was like, here's some answers and help right away. And so that I really appreciated that. And Leah Silver has been doing a lot of that community outreach stuff and like organizing stuff. I went to like a women's lunch that was at the Ember comp, and just stuff like that. It felt really great. Like I went to that conference by myself, I didn't know anybody, and everyone was super nice. And so community wise, I thought it was a really great community that makes

</p>
<p><strong>Ryan Burgess</strong><br />
a huge difference to is like having people actually helping you and like wanting to help and not shaming you for not knowing Yeah, that's a shitty feeling. Right?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, that's a pretty small, tight knit community. I mean, small in comparison to perhaps other frameworks, chairs. But I think that, like, in between the community itself, it's it's been super welcoming, super friendly. I've personally noticed, and maybe this is just me being an asshole on Twitter was probably Brian being an asshole on Twitter. But they're not super. And I, I'm generalizing just everyone because that's a good thing to do. But like, they're not super open to criticism, sometimes. Like, I've made some criticisms of ember of some of the technical decisions of some of the community decisions, and particularly members of the community haven't been super, super stoked about that. I mean, not that I wouldn't particularly likes to be criticized, but fuck them.

</p>
<p><strong>Ryan Burgess</strong><br />
Which community is open to you criticizing them?

</p>
<p><strong>Brian Holt</strong><br />
My manager

</p>
<p><strong>Derrick Showers</strong><br />
doesn't like it either. So I guess when you have, it's kind of going back to what you said about having like a smaller community and with that, with having a smaller community, I think you have maybe a little bit more egos from the people that are like, controlling the framework. I don't have to trolleys right, we're dangerous?

</p>
<p><strong>Brian Holt</strong><br />
Yeah. No, I think that's that's astute. You get some groupthink. I mean, I think no small community nor large communities is immune from groupthink. And I think that's, I think Ember has some struggles with that sometimes.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, Ember also has, like, from what I've seen in any of this stuff, when I was only using it on like a small project. But there was a lot of great extensions available that PETA already written. That was one thing that I found really cool. And they were obviously really easy to add through the CLI tool.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, with plugins, it's super easy. You just Ember install whatever plugin and, and the community is large enough that you know, there's at least a plug in available for most of the things that you

</p>
<p><strong>Brian Holt</strong><br />
you, you would want.

</p>
<p><strong>Stacy London</strong><br />
And they just most of the ones that I've used, I've always just worked. Like, there's never been, for me an issue where I had to troubleshoot forever after doing that install. So that was nice.

</p>
<p><strong>Derrick Showers</strong><br />
The other cool thing about it is it's a really good way even the core team uses it uses it as a way to introduce new features into the framework. So there's an RFC process. But I mean to like for instance, the A 11 Why that probably should be part of ember core is not but right now it's still a Ember add on the same thing with Ember fast boot. There's a bunch of them there's also rewrites of the resolver that Nathan Hammond was working on on the CLI team so but anyway, it's not part of the core team. So they're able to like test it kind of test it in a way with it being an add on and then eventually move it into the to the Ember CLI or like the reverse

</p>
<p><strong>Stacy London</strong><br />
of that where if you relied on views for some reason for like an another add on like we're still was using views but you wanted to get it out of the main main framework, you could install it as like a separate add on and choose to still have that.

</p>
<p><strong>Ryan Burgess</strong><br />
So Derek, what's fast boot

</p>
<p><strong>Derrick Showers</strong><br />
so it's their version of server side rendering? I honestly don't know sound if you have any experience with it, I don't have a ton of experience with it because it LinkedIn We kind of have our own version of server side rendering right now, but I think we're hoping to move to fast boot. Once it does everything we needed to do. So I know there are limitations. I just don't know all the limitations.

</p>
<p><strong>Stacy London</strong><br />
Right before I left. My last place, I was using Ember we'd started talking about possibly bringing in fast boot and using it and we hadn't tried experimenting or anything with it yet. So it was sort of like, where it was on Horizon. We were interested in it, but we didn't actually do any installs and test it out.

</p>
<p><strong>Ryan Burgess</strong><br />
One fast food hasn't always existed, right. That's fairly new. Yeah. Within the past year. Yeah, I

</p>
<p><strong>Brian Holt</strong><br />
think so.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm interested to probably more from Stacey and Derek. But Brian, I both, I guess, interns on a lot. Shawn, what advice would you give to someone starting with Ember

</p>
<p><strong>Brian Holt</strong><br />
use React? I'm kidding. That was a joke.

</p>
<p><strong>Stacy London</strong><br />
I guess looking back at when I first got into it, I think there were I didn't find a lot of tutorials at the time that were kind of helpful. And then I found on front and masters there was Mike North did a pretty good one. That was helpful. And that that unfortunately, it's behind a paywall. So like, it's tough, if you're a new person, and you don't have an account, or you can't afford it, or your players not gonna pay for that kind of thing. But that one was, was really good. And I think more of that helps, I think, new people that kind of visually see someone set up the new app and go through it. And dumber CLI has great Doc's are getting a new app going, I guess, the best advice and this is for like, despite any framework, doesn't matter which one it is choose choose is that just to pick something that you want to build that solves a problem for you, and then try and build it with that framework? Like

</p>
<p><strong>Brian Holt</strong><br />
cheers.

</p>
<p><strong>Stacy London</strong><br />
Keep keep saying it over and over. Because that way you start to you learn it because it's solving a problem for you. So you start to map those things in your brain a little bit faster.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I totally agree. I think the documentation is super good on Ember, there's actually a one of the cool things that they recently did is broke up the core team into their into different parts work parts are so they have Ember CLI, the like Ember core and Ember data, Ember data and and they have a team that's dedicated just to learning and development, they're, you know, they oversee the documentation they receive, like conferences and, and, and some of the meetups that CeCe was talking about. So I think that helps to help them get into a place where they have some pretty good documentation, Ember, they have kind of like API documentation, and they have just guides that you can read through and get a really good understanding of how everything works. The other thing that I found, and maybe this is because I'm working on an app that's relatively large is that starting out, I think you just need to go through the docs and just follow them. And and don't be so concerned with all of these nuances. And like, there's a lot of like, I think just because it is so opinionated, and everything is so abstracted that there's a lot of magic that happens. So then there's on top of that, a lot of things that are out there that okay, well, yeah, there's magic scraped, but in order to be super performant, you should do this. And then it's really hard to grasp the core concepts of the framework.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, that was always like, what I struggled with with Ember was the magic. And I think it's coming from Rails, right? Like,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, I mean, the CLI tool is totally built off of Rails Well, or like, are not built off of it, but inspired by it.

</p>
<p><strong>Brian Holt</strong><br />
Well, and like Yehuda Katz, and all them, they all came from General has a lot of similar concepts. Yeah. And so like, you create, like some primitive, I forget what they're called. But then it just scaffolds up like 10 More things automatically called by the same name. Now, that's awesome. If you know that's happening, but it's like, freaks. Yeah, I was like, way, I never created this. Why is this here? And where did it come from, and it just has some magic name, they just have to know what to call it by. And that was always really hard for me. Like I used to write Django and I had like enough problems with Django with that kind of stuff. But I felt like Ember kind of took that to the extreme. But by the same token, what what causes me discomfort about is also helps you be super productive, right? Because you create one thing and 10 things scaffold out for you. Now, you could have written the code to scaffold out those 10 things, but you just why don't let the framework do it for you. Cheers, cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
It's not specific to Ember more in the fact of any framework you're using cheers is you need to know how to write JavaScript, you really have to understand that something like Ember, and I feel like Angular is very similar in that way to is that there's a lot of magic that's happening. And that's great. But when it starts when you start having problems, and you don't really know how to debug, you really have to understand how to write just vanilla JavaScript. And I think that's kind of a disadvantage of sometimes having these tools that help you write JavaScript is that you rely heavily on them. But I think as a beginner, knowing some JavaScript I think is really important.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, so you set the stage for exactly what it's gonna say a something to watch out for is kind of a A little bit of a reverse of what I just said about worrying about the, you know, some of the smaller things and just using the framework. But I also think that at the end of the day is just JavaScript. So I've heard so many times people say, Why don't how to do this ember. And a lot of times, it's just a JavaScript question. And then the other thing is like, sometimes just use JavaScript instead of using all these fancy Ember API. So a really good example, in Ember is computed properties. computed properties are everywhere. It's kind of like, it's basically a version of observables. It's good. They're cool, right? But you don't need to use them. If you're not if you don't have any sort of like, binding to it, if nothing's observing it, right. So but everyone, when a lot of people when they're starting to write Ember, they're just like, oh, I have to use a computed property, because that's what Ember wants me to do is use a computed property for everything. If you just imagine if you're just managing like, state or a flag or something in one of your components, you don't need to use a computed property for that. Yeah, for sure. So just write plain JavaScript.

</p>
<p><strong>Ryan Burgess</strong><br />
What are some disadvantages of using ember? Well, I

</p>
<p><strong>Brian Holt</strong><br />
mean, it's a framework. And the nature of being that has compared to something like Angular and react, Angular and react, aim to provide you more primitives, right? They're basically giving you additional builder, building blocks to build your application that you essentially build your own framework. That's a good keyword, because you literally can't dance around that you have to say that particular word.

</p>
<p><strong>Ryan Burgess</strong><br />
I tried to say the word tool to replace Yeah, it doesn't feel right.

</p>
<p><strong>Brian Holt</strong><br />
Nope, it was wrong. So that's what Angular and react to they kind of give you the tools to build your own right, as opposed to Ember, which aims to like, Okay, here's the entire structure of your app. And we're going to basically lay down rails, right? Hence, Ruby on Rails kind of thing, right? We're gonna lay down the rails for you to be able to write this crud app as fast as possible. So if you're doing if you're drawing within the lines, right, if you're writing an Ember app, which is basically crud, right, which is basically most apps, right? You can write an ember way faster than you could ever read an angular react, I think that's a pretty well accepted fact, right? The minute that you try and draw outside the lines, it gets really hard, you have to start knowing, like more and more things about the framework to show. More and more about Ember itself, you need to know about more about the internals to hook into all the different places that you need to. So you need to pull back some of layers, the magic to hook into the internals. And that's, that's tough, that's hard. I think,

</p>
<p><strong>Ryan Burgess</strong><br />
No, that makes sense. And I think even just how we talked about some of the benefits being Ember being so prescriptive, is in some ways that can be a negative, if you want to actually have a lot more control over what tools you're using, and the project is that you're getting a lot of the stuff for free, that's just there when you build an ember project. Now, you're not really sure what's all there is you don't have as much flexibility, even going back to like the testing framework is if you just take the default, well, that's what you're getting. Yep.

</p>
<p><strong>Derrick Showers</strong><br />
And that's where I think it comes down to really make a decision based on what you're trying to build. And, you know, so maybe the two extremes and you can do this with any framework, but not saying you have to be limited by

</p>
<p><strong>Brian Holt</strong><br />
shares. But

</p>
<p><strong>Derrick Showers</strong><br />
let's say you want to do like a quick, you know, music app or something, right? You know, and it's, it's a single, but you want it to be a single the whole thing to be like just single page experience, single page app experience. And, you know, maybe Ember is the best decision for that. But limited, let's say you have something that's that you still have, like, you know, page refreshes between different different different sections of your site, and you want interactive elements all over the place, you know, react might be a better, obviously, you can use both for each one of those situations. But I think just knowing that's where it just is really advantageous to know the advantages and disadvantages of these frameworks. Cheers.

</p>
<p><strong>Brian Holt</strong><br />
If I'm just gonna keep my shit, right, yeah, seriously, yeah. If I remember correctly, you have to use the router to use Ember, right? That's just like, it's a month, even if you're on one page, you still have to

</p>
<p><strong>Derrick Showers</strong><br />
that's changing. So I think they are trying to separate the stuff out,

</p>
<p><strong>Ryan Burgess</strong><br />
which is good. Because really, if you're just doing one page, not a single page, but just doing one page, you don't really need a router. There's no reason for it at that point.

</p>
<p><strong>Brian Holt</strong><br />
It is worth saying, though, that the Ember router is awesome, right? Like it's one of the best parts of it to the point that we in the React community pretty much copied it with React

</p>
<p><strong>Ryan Burgess</strong><br />
Router, right? Yeah. And I still think Ember is is probably still better. Oh, yeah.

</p>
<p><strong>Brian Holt</strong><br />
I mean, it was, that's the original, right? It's the OG

</p>
<p><strong>Stacy London</strong><br />
to add to one of the things that I found, surprisingly difficult was something that seemed would be very simple. And just like vanilla, HTML, CSS, and JavaScript was uploading files to a server that seemed like it should be something that's fairly like straightforward. But with Ember actually struggled, I struggled with it quite a bit because I was working with Ember data, and I needed a particular model that was associated with that file upload to know about it. And in order to be able to know that the server, you know, got the file and everything was successful, actually had to do some really kind of weird tricks to like, trick Ember data and thinking that the model that actually saved and I couldn't just do like a normal like model dot save. So there are some workarounds there were Like the framework kind of got in my way, cheers.

</p>
<p><strong>Derrick Showers</strong><br />
The good thing is that if somebody else has already had that problem, all they have to do is build an adapter, they can create an add on and it's there. So that's what's that's really cool, like so. For instance, even with Firebase, I building like a app with Firebase and you just install this Ember, it's called Ember fire, and you have your entire adapter layer that's done for you, you don't have to worry about setting up any of the Ember data stuff, which is really,

</p>
<p><strong>Brian Holt</strong><br />
adapters are really, really cool idea, too. I wish that we like there was a separate, like API client that like had that same idea into it. Yeah. That you could just swap out adapters like, Okay, I'm just gonna be doing it locally, because I'm on a plane now. And then I'm gonna swap my adapter, and then it's gonna be right against my API server. I think it's a really cool idea. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
like I had, I actually had this same app I had working with parse and parse turned into, it got shut down by Facebook. So switched it over to Firebase in was all it was.

</p>
<p><strong>Brian Holt</strong><br />
Fucking Facebook, they never gave us anything cool.

</p>
<p><strong>Ryan Burgess</strong><br />
One thing I will say, and you guys can disagree with me,

</p>
<p><strong>Brian Holt</strong><br />
disagree, use ideas.

</p>
<p><strong>Ryan Burgess</strong><br />
But I actually don't think something like Ember or Angular is the best one to use for learning JavaScript and asked us lots I would lean to using React just because you're actually writing a lot of JavaScript and having to understand what you're having to do. There. Isn't that magic? And I think that's one disadvantage for Ember,

</p>
<p><strong>Derrick Showers</strong><br />
I would completely agree. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I would agree with that, too. I've seen that a lot with like, people referring to themselves as angular devs, which is sort of interesting, which is an interesting, like, refer to yourself. And then yeah, not having that kind of base layer of JavaScript, understanding

</p>
<p><strong>Ryan Burgess</strong><br />
technical interviews, where I've asked a question, and the person answering the question, does it in Angular, and they're just reliant so heavily on what the magic is happening behind the scenes, and not so problematic is they don't really understand JavaScript at that point. Mm hmm.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think that it seems like that happens more with Angular, but maybe it's just that more people use Angular, but like, for instance, you know, I brought that interview. So many times, I would like somebody will be writing on a whiteboard, and I'll put Engie tags all over the place, and like, you know, but I've never had that happen with ember. But, you know, it's probably, I think the difference, though, is that at least Ember is using some templating. Like, well, I don't know. I don't know what the reason is.

</p>
<p><strong>Ryan Burgess</strong><br />
No, I like the template. That is we haven't talked about that. But I like the templating. Language. Handlebars, no, but they've now actually changed it to HTML bars.

What's the new one glimmer, but

</p>
<p><strong>Derrick Showers</strong><br />
it's HTML bars.

</p>
<p><strong>Ryan Burgess</strong><br />
It's HTML bars.

</p>
<p><strong>Brian Holt</strong><br />
Okay. Yeah. glimmer is like the engine underneath it. Gotcha.

</p>
<p><strong>Ryan Burgess</strong><br />
I actually like handlebars, I have no problem with it. I've used it for so many different projects, and even node apps. I've used handle handlebars. And I like it. Maybe it's because I use mustache for so many years. Yeah,

</p>
<p><strong>Brian Holt</strong><br />
that's probably better. It's better that

</p>
<p><strong>Derrick Showers</strong><br />
JSX shit.

</p>
<p><strong>Brian Holt</strong><br />
I can't believe you would say that. I know. You're trolling me. Fucking Microsoft.

</p>
<p><strong>Stacy London</strong><br />
I thought I guess one of the things I thought was interesting about Ember, and the way that it was set up with not emulating the JSX pattern of having your different layers of separation, like not being separated anymore was that if you had designers, and maybe this isn't true, because I haven't actually worked on React app yet. But if you had designers that we're comfortable in HTML, and CSS, and like getting into the codebase, and actually working like side by side with the engineers that the Ember app seemed like it would be really set up pretty nicely for that to happen in a way that they, it would be easy for them to work in that way. Whereas I'm not sure. And maybe you guys can

</p>
<p><strong>Brian Holt</strong><br />
do it would take certainly some direction. Yeah, I think that's a suit. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you're right on that. Since we're talking a lot about React and Angular and Ember together. Why would you choose Ember over React and Angular? Obviously, React is a better row. But honestly, why would choose Ember over Angular and react?

</p>
<p><strong>Stacy London</strong><br />
The logo is the reason. Honestly, Comstor Zoe is the reason you pick? Yeah, honestly, I'm

</p>
<p><strong>Brian Holt</strong><br />
pretty good. I have one of the little plushies, it's on my desk anymore.

</p>
<p><strong>Ryan Burgess</strong><br />
It's pretty cool.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, if you're starting a new project, and you want to get the project as soon as possible, the best thing you can do for your team is just pick what your team already knows, right? Like that. First and foremost, like, that's number 123, and four on the list of things that you should consider when choosing a framework cheers. Beyond that, I think Ember is a really good choice, one for like beginner devs, and to an intermediate dev team, because it kind of puts everyone on the same track. And it kind of forces them to into the same track. Like if you want to draw outside the lines and Ember, like you have to try and you have to know what you're doing, or else it's really hard to do it. If you want to, you know, fuck up an Angular app. It's like two lines of code, right? Like it's super easy to do. And then beyond that, I just like react because I do. That's it.

</p>
<p><strong>Ryan Burgess</strong><br />
I'd love to hear Stacy and Derek defend that one a little bit. I

</p>
<p><strong>Derrick Showers</strong><br />
think I've already said it. And I agree with what Brian was saying too. It's very easy. Well I guess this wasn't what you were saying. I was just very easy to get set up, I do agree that it's good for definitely like a beginner intermediate team to keep everyone on the same page, keep everything consistent. You know, I really like speaking from, I think, why the decision was made at LinkedIn is we did come from a point where we had our own flavor of a framework

</p>
<p><strong>Ryan Burgess</strong><br />
to

</p>
<p><strong>Derrick Showers</strong><br />
yours, which was backbone, and we build on top of it, and we made it our own, we call it li backbone. And we we got, ya know, right.

</p>
<p><strong>Brian Holt</strong><br />
That wasn't called Ms backbone.

</p>
<p><strong>Derrick Showers</strong><br />
Better yet, it's stuck. It's deprecated.

</p>
<p><strong>Brian Holt</strong><br />
In tremendous fashion.

</p>
<p><strong>Derrick Showers</strong><br />
I do like that kind of a complete 180. Now we're building something and then able to see what everything that we build, we're able to contribute back to this framework. And now, you know, you don't have somebody that's that's built this proprietary version of this framework, dammit.

</p>
<p><strong>Brian Holt</strong><br />
Worth it sitting in

</p>
<p><strong>Derrick Showers</strong><br />
the corner somewhere, you know, you have a very well documented, what's another word for it, tool tool that is very easy to onboard people, it's very easy to move people around to work on different products to start new products. So it's that part of it's definitely worked out really well,

</p>
<p><strong>Stacy London</strong><br />
I guess I would say like, a few companies back, I had a choice of saying like, we the company as a whole shall use this framework. And it was a really tough decision. And at the time, backbone to me made sense. But because it was, I felt like it was maybe baby steps like, not super prescriptive, but prescriptive enough that it would start to get the company going towards, like single page apps in a good way. But the tough part came because it was like so many people that had come from a lot, there's a lot of Microsoft. So a lot of dotnet a lot worse. A lot of ASP dotnet background. So like that, that was where a lot of the devs were coming from. And there's descriptiveness to that, that that was familiar. And so backbone was sort of prescriptive, but maybe not enough. And I kept getting tons of questions about, hey, do you have how to guide on how to like, set up our new backbone app? And I was like, Well, you know, what, what are you? What do you need? What are you trying to solve? And I can draw ways to solve the problem? Yeah. And like, how do I create this guide? That's just the one answer for this question. So I think Ember May I probably should have picked Ember, I think, at that point in time, that would have made it like a better choice, because I would have had more descriptiveness to it, that would have answered those questions without me having to do the work to figure it out. But yet, so like, kind of that, you know, Intro to medium skill level, like front end dev that would have, I think,

</p>
<p><strong>Ryan Burgess</strong><br />
a lot, but even then it sounds like probably when you chose that and made that decision. Amber probably wasn't that big. At the time,

</p>
<p><strong>Stacy London</strong><br />
it was pretty new, like Ember data was probably not even beta. I mean, it might I don't think any existence. So

</p>
<p><strong>Ryan Burgess</strong><br />
which I think you made the responsible choice is choosing something that's super new is probably not the best idea, then you have to deal with all the headaches in your company, right? You'd

</p>
<p><strong>Brian Holt</strong><br />
have to refactor, use Ember data, those kind of things, right? Yeah. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think scale is an interesting thought, too, because I think that that so we've kind of gone through at least since I've been LinkedIn, we've kind of gone through some stages where everyone's kind of doing their own thing. And each team is able to pick their own technologist to work with their own stack. And that's, that's cool. But with over 3000, engineers, it gets a little bit difficult to scale, when everyone's working on different specially since in my opinion, anyway, infrastructure is always under invested in. So you know, it helps to have one stack that you can support. And, you know, there's a lot of people that don't agree with that. But I think that that's just one of the disadvantages to working for a bigger organization. So I think that choosing something like Ember helps can help with them

</p>
<p><strong>Ryan Burgess</strong><br />
getting to that point is you have a large company at LinkedIn. And if you're on one group, or project, I don't know how you're all split up, but is if my team is writing Ember, and your team's writing in Ember, and I want to move to your team, I can pretty much just jump in fairly easily. And I think that is that's pretty powerful, is I don't have to ramp up and figure out how you're doing it. It's fairly consistent across the board. Yeah. And

</p>
<p><strong>Derrick Showers</strong><br />
even for the infrastructure teams, too, right? Like, what a lot of people don't realize about LinkedIn is you have linkedin.com. But then you have other apps that are just as big if not bigger, they have huge teams supporting them, like the recruiter product, which is enterprise, essentially an enterprise product, you know, but so it's completely different product, but it helps to have shared infrastructure support between those two stacks, or between those two products. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that makes a lot of sense.

</p>
<p><strong>Derrick Showers</strong><br />
I'm not saying necessarily that Ember scales, well, that's a different topic.

</p>
<p><strong>Ryan Burgess</strong><br />
What about it? Doesn't it scale? Well,

</p>
<p><strong>Derrick Showers</strong><br />
no, I just, you know, I think that with all of its magic, it has a lot of bloat, and it can be slow. And I don't think that it's really been scaled to the point where LinkedIn at least has is is pushing it too, right. So there's a lot of stuff that we're running into that hasn't noticed rarely been considered and dealt with before. Which is cool. Like, it's cool to be a part of that. And I think it's great for the framework.

</p>
<p><strong>Stacy London</strong><br />
Would you consider it an ambitious web

</p>
<p><strong>Derrick Showers</strong><br />
app? It is. It is very ambitious. Like that. And as you know, there's really not that many sites out there that that are big sites that are written in Ember, I think LinkedIn is the biggest LinkedIn is definitely the biggest. I don't think there's anything really even close. You know, React is a completely different story. So

</p>
<p><strong>Brian Holt</strong><br />
is it a perf issue? Or is it a like architecture, like how you built your app issue like that makes it hard for many people to work on perfect shoe is a perfect shoe. Okay. That's the first I've heard the November having Perficient, like time to first paint

</p>
<p><strong>Stacy London</strong><br />
or more.

</p>
<p><strong>Derrick Showers</strong><br />
I mean, even like, we were talking about Ember, fast food and fast foods, not fully fleshed out. But you know, when you have a huge app that you're trying to, I mean, I guess it's also a saucer goes back to a single page as well doesn't go back to we never talked about it. But it goes to the question of is the single page app the way to go for a huge site. And I think that's maybe a completely different topic that we can talk about in another episode, but probably hold up is a bug with Ember, you're kind of forced, and like we talked about that, because of the router router, you're kind of forced to have a single page app. So

</p>
<p><strong>Ryan Burgess</strong><br />
not a bad thing. But yeah, it kind of prescriptive in that sense,

</p>
<p><strong>Brian Holt</strong><br />
that makes deep linking and it creates a whole lot of problems. And when you don't have a

</p>
<p><strong>Derrick Showers</strong><br />
really good solution for server side rendering the page, which LinkedIn does not mean, I'm sorry, Wellington doesn't but because if it doesn't, then it gets a little difficult.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that was one thing, going back to some of the disadvantages early on, is Ember didn't have a solution for server side rendering. So if you actually wanted to server side render, you couldn't, there wasn't a way to do it. Now with fast boot that has been salts coming around. Yeah. Which is great. But I know that was one advantage of React was the fact that you could server side render it. Yeah. How about you? Derek, you kind of mentioned glimmer? What's glimmer? And what changed with glimmer? Two?

</p>
<p><strong>Derrick Showers</strong><br />
Good question, Ryan.

</p>
<p><strong>Stacy London</strong><br />
So it's the rendering engine. So I obviously I think there was that, at React came up with, you know, the DOM diffing algorithms that, you know, produces music speed to, like, you know, repeat your screen faster. So that was that's the response, like glimmers the response to that, it has been very speedy, according to certain speed test. So like, when I was at EMERCOM, fly in Portland, this last year, there was, you know, this, the keynote talking about how this engines gonna speed up that stuff by quite a bit, and even like beats react and certain like speed tests that they were doing about the diffing algorithm. So I think the different algorithm is what is different. So glimmer, like as opposed to some of the DOM diffing algorithms. And that's, that's, I think, the biggest, I guess, differences to other frameworks.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Cheers. So triple equals

</p>
<p><strong>Stacy London</strong><br />
not done. The difference?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, that makes a huge difference. I think like that, that actually highlights the point that I think is one of the strengths of the Ember core team and Ember in general, is that they're very adaptive. Like they look at like, what other frameworks are doing choose what other libraries and such are doing, and they take the best things and just pillage them and bring them in and say, like, we invented this. Just kidding, they don't say that. But they do take the best parts of what other teams are doing, and they bring that into ember. And I think that's probably probably the greatest strength in terms of that because like, that's what were glamour, Glamour, or whatever the fuck

</p>
<p><strong>Ryan Burgess</strong><br />
even taking, like the Ruby CLI and implementing something. Yeah, absolutely. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I know, you're just kidding. But they're actually quite open to that I would watch the keynote from last year's Ember comp, and they kind of went through all the new stuff that has come to Ember and we're very honest and upfront about you know, the virtual DOM working really well for React and you know, Ember needed that

</p>
<p><strong>Brian Holt</strong><br />
Tessa you who to give a talk at web unleashed in Toronto, I think this was 2014. Great talk. And I was just talking about glamour, Glamour, Glamour,

</p>
<p><strong>Ryan Burgess</strong><br />
Glamour,

</p>
<p><strong>Brian Holt</strong><br />
there's another library called Glamour for success, definitely glitz and glamour, Glamour, okay, I'm gonna keep calling glamour. And they give a talk about how you hula in particular, appreciated the one way data flow in React is like, this is great. And we don't have it like and we need it. So how are we going to take this right? And that's where kind of the ideas that came up with glamour. We should have called the glamour the keyword that we're going to get and brought that into ember. And I think that's definitely one of the best parts about Ember glamour, it's glamorous, the best part

</p>
<p><strong>Stacy London</strong><br />
I kind of like I like the I like the acronym the best Dow Dow data down actions episodes like a new religion.

</p>
<p><strong>Brian Holt</strong><br />
Stacy's

</p>
<p><strong>Ryan Burgess</strong><br />
the prophet will help Stacy, how does Ember contribute back to JavaScript? I would be interested to hear people's thoughts on like how Ember actually helps JavaScript.

</p>
<p><strong>Brian Holt</strong><br />
I really think that their RFC process is pretty innovative. I don't know if they got it from anywhere, but certainly other communities have it adopted it from them. And I'm thinking in particularly rust rust took it from ember. And now everyone's copying Russ like Rust is like the the model of like how to run an open source community. And I think almost, I don't say almost all but very many of their ideas were taken from the Ember community. Like they were kind of like the incubator for this idea of, of the RFC process. So RFC stands for request for change. Is that Is that true? And someone comes in basically says, like, Hey, I have this awesome idea for Ember, it should have laser beams and people are like, Yeah, cool. Like we definitely need laser beams and glamour. Then like it goes through like a process then it gets stopped in the framework, but I think it's awesome that they just have this like, prescribed place like we want your ideas please come and give it to us. I want to go in tonight and open a progressive rename glimmer to glamour with laser beams, and hopefully that'll that'll get pushed through but they're very open with their community they very like they're very inviting that everyone can contribute everyone to have a good idea. And I think that's pretty awesome. Even Swift

</p>
<p><strong>Derrick Showers</strong><br />
has a very similar process which they probably got it from from

</p>
<p><strong>Brian Holt</strong><br />
from glamour

</p>
<p><strong>Stacy London</strong><br />
I want to I want to work glamping into this can be framework camping and cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
One last question to end the episode before we go into pics is who are the best people in the Ember community to follow? Obviously, Yehuda Katz,

</p>
<p><strong>Brian Holt</strong><br />
Yehuda Katz, definitely. So I'd say brace yourself for the trolling. But else like Tom Dale. He's super smart. He asked very applicable questions. And he's gonna piss you off at some point, right? He's like the Kyle Simpson of the Ember community.

</p>
<p><strong>Stacy London</strong><br />
Stephen Penner, he's very patient. I watched him engage in lots of things on Twitter and the open source communities seems to be very, very patient and calm and keeps pushing things forward. So yeah,

</p>
<p><strong>Derrick Showers</strong><br />
people that I work with are also on the core team. Nathan Hammond, Robert Jackson, Chad Hightower. Yeah. All them are. Follow them on Twitter. They all have great stuff to say.

</p>
<p><strong>Ryan Burgess</strong><br />
Should we follow Derek showers and Stacy London? Probably yeah,

</p>
<p><strong>Brian Holt</strong><br />
follow Stacy.

</p>
<p><strong>Stacy London</strong><br />
Leah silver, she does a lot of great, you know, community outreach and organization does whole EMERCOM stuff. So she's great to follow. And then Brendan McLaughlin, does a lot of great work on Ember data.

</p>
<p><strong>Brian Holt</strong><br />
I would also say 510 Li, F fi ve Yeah, yep. He works on Ember data. He's a fucking phenomenal guy. He's super awesome to hang out with. Originally from Utah, so I have to plug him right. Lauren tan, sugar pirate sugar pirate. Yeah, she's phenomenal. Also brace yourself for trolling. But I also like Eric Brin. He's a good dude. I just love getting him and like Jafra Hussein in an argument and just listening to the fireworks right like we just learned a ton of stuff because they both really know their shit. They just vehemently disagree on many topics, right? Just basically Eric Brennan and almost every anyone else cuz he's super good to shit. He used to contract with Netflix. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
he didn't actually. Right. All right, as we wrap up today's episode, what are this episodes picks? Brian, what do you have for us?

</p>
<p><strong>Brian Holt</strong><br />
I'm gonna pick Webpack two, which I've been having a grand old time minifying my builds and doing all sorts of cool stuff like that. I'm going to pick Preact I've been having a ton of fun with react as well. And basically almost a drop in replacement. You can go from like 80k to 8k. If you're doing it like 100% react replacement. We totally miss Mike north. But I'll I'll plug Mike north as well. Oh, yeah. My pick is his course on front end masters, which you already talked about. But I'll pick that.

</p>
<p><strong>Derrick Showers</strong><br />
Like he picked all nine things except for Mike. So thing Yeah,

</p>
<p><strong>Brian Holt</strong><br />
no, Mexico, dude.

</p>
<p><strong>Derrick Showers</strong><br />
So I thought I had already talked about this, but I can't find it anywhere in the past. So I apologize. Duplicate but Ember twiddle, if you go to Ember dash twiddle calm or you think if you go to Ember twiddle, just without the dash, you can get to it. But it's basically like a j s bin, but it already includes everything that you need for Ember, and it's set up the same way that you would get an Ember CLI app. It's really, really cool. Just to play around with that is totally

</p>
<p><strong>Brian Holt</strong><br />
new to me. I've never seen that

</p>
<p><strong>Stacy London</strong><br />
before. I've used it a ton for trying to replicate problems. If I had like an issue with something. I'm like, here's my problem. And yeah, it sent it in with a GitHub issue. And yeah,

</p>
<p><strong>Derrick Showers</strong><br />
that's the other thing. You can just create a gist out of it. So and then you can just send it. That's so cool. Yeah. The blog I was talking about earlier that I wanted to save for my pick is the dockyard. So they're I think they're like an agency in Boston or something, right? Yeah.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. But they wicked, wicked Ember, right? Yeah. Sugar pirate like

</p>
<p><strong>Stacy London</strong><br />
eStore.

</p>
<p><strong>Derrick Showers</strong><br />
Okay, yeah, though, they have a lot of great content. If you just go to their go to their site and click on blog, you can usually when you search for things Ember related, you'll get an article from Dockyard net, like you can guarantee is good content, but they have a lot of good stuff and it's always really helpful. Then the last thing is, I think we talked about it at one point in the episode, but the Ember community Slack channel is super helpful. Like, I think you said, Stacy, it's like you go on there and ask a question. And Robert Jackson replied to me, and he was like on a airplane ready to take off. And he's like, to helping me fix, like a unit test thing. So they're really, really helpful. Everyone's really, really helpful in there. And it's really cool that the core team gets involved with Yeah, you just can't use it for any sort of reference because they don't pay for the actual version of Slack. So

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, last like 1000 That's fine. 1000 messages. So

</p>
<p><strong>Derrick Showers</strong><br />
it's basically like that day, but But ya know, it's great to get questions answered.

</p>
<p><strong>Ryan Burgess</strong><br />
Stacy, what do you have for your pics?

</p>
<p><strong>Stacy London</strong><br />
Alright, so I didn't do any Ember specific pics. So for that door. So my pics, our CSS grid. So Chrome Canary and Firefox Nightly, they turn those on, they turn them on by default, so it sat behind a flag anymore. I got super excited about it. Seeing Jen Simmons do a Mondrian demo at an event apart in Chicago recently. And it was one of the few talks I've ever been to like a tech talk where we're like, clapped, like in the middle of it like, like, almost standing ovation like this. This is This is amazing. So I'm really excited about that. And then my second pick is Girl Develop It or GDI Hell yeah. And I'm super excited about that. I just moved to San Francisco from Waukee and Marquis, I started to get involved with that. And I taught an intro introduction to JavaScript class in Waukee, for GDI. And it was super, was great is really rewarding. And I think it's a really great way to get people interested in tech and not have to spend a ton of money to do it. So it's a great organization.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. I have actually three pics but they're not related to Ember at all. They're more entertainment, but I could share some Ember related pics. Yeah. Which is good. So first is actually a podcast, which is called Crime town.

</p>
<p><strong>Brian Holt</strong><br />
It's called friend happy hour.

</p>
<p><strong>Ryan Burgess</strong><br />
Very good podcast, you should be listening to it. hometown is a podcast that's put together by gimlet media. It's in its first season, which is all about the corruption and organized crime in Providence. Very interesting. That's the first season apparently they're going to do other countries like the wire. Yeah. It's really interesting so far, I definitely recommend it. Second pick is a Netflix Original documentary, which is hip hop evolution, which is good. It's only four episodes. So

</p>
<p><strong>Brian Holt</strong><br />
I was a little disappointing. Watch one. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
So I watched the four episodes, and wanted more. That was the only shitty thing about it as I wanted to hear more, but it's all about hip hop and how its evolved. Another Netflix Original that I started watching this weekend is the OA it's kind of like a mysterious thriller about a girl who went missing for seven years. She then returns. She was blind at one point is no longer blind. Yeah, I don't want to spoil too much. It's

</p>
<p><strong>Brian Holt</strong><br />
dirty. Watch the trailer check. You'll understand. That's really good. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
the trailer doesn't explain much. But I think it's desert stuff. Did it just come out? It just came out this week. So those are my three picks. DC one. Thank you for joining us on today's episode. It was a pleasure having you to join us. Yeah, Cisco. That is a big thing. Where can people get in touch with you?

</p>
<p><strong>Stacy London</strong><br />
Let's do Twitter. That's easiest. So Stacy stty, Londoner, ello and Dr. Er.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, if you get Stacy London that is someone else. I found that out.

</p>
<p><strong>Stacy London</strong><br />
She's a fashion person and she's not so nice sometimes to people but

</p>
<p><strong>Brian Holt</strong><br />
Stacy Londoner. Nice all the time? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
The right one, before we end the episode, where can people get in touch with the rest of the panels Brian?

</p>
<p><strong>Brian Holt</strong><br />
smoke signal? I guess hold BT. Derek.

</p>
<p><strong>Derrick Showers</strong><br />
I was gonna say the best way to get in touch with Brian hold is just to tweet about how much they hate IDs and CSS and you'll you'll find him you know, he'll respond to that. We'll

</p>
<p><strong>Brian Holt</strong><br />
respond to that

</p>
<p><strong>Ryan Burgess</strong><br />
at Derek. Showers for me, and I met <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a>. Thank you all for listening to today's episode. Make sure to rate us on iTunes and Google Play and subscribe to the front end Happy Hour podcast on your favorite podcast catcher. Follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a> and have a happy holidays and a happy new year. I'm impressed that we've made it a full year of recording the episodes and we've survived a lot of great times. We've had a blast recording all the episodes and we look forward to a whole new year of episodes in 2017

</p>
`;
        return transcript;
    };