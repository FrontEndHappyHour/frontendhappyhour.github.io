module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
All right. Thank you all for coming to our panel who's actually listened to the front end, Happy Hour podcast. All right, we do have a podcast that we sit around and have drinks and talk about front end. So that's what we're going to do on stage for you. We've done one live event a couple weeks ago at NG Atlanta. So we're the second one. So hopefully, it's good. And we actually have a guest today with us which Alan is joining us. I don't know how many of you saw his talk today. So we'll be talking about the ever changing web and how JavaScript has influenced it. So Alan, do you want to give us a brief introduction of who you are? What you do. And what's your favorite Happy Hour beverages?


<p><strong>Allen Wirfs-Brock</strong><br />
I'm Allen Wirfs-Brock. So for the last 10 years or so, I mostly work on the Ekman script standard. I was the editor for ACMA script, five point one and 2015 helped kill the yes for as another kind of venue.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you. Yeah.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
So and I'm still a little bit involved. But I'm kind of trying to back away from that. It's, the committee's become too big for me, I think. But right, actually, right now, a big project I'm working on is trying to really do the history of JavaScript and get it all documented and written down. And such. And favorite Happy Hour beverage. Well, I like a good barrel aged craft beer. I highly recommend cascade brewing in Portland. Go to the cascade barrel house. If you're there and you like sour beers, there's probably no place better in the country. Right

</p>
<p><strong>Brian Holt</strong><br />
on both words.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, before we get into too much, let's get introductions of the panelists. Brian, I want to start it off.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, my name is Brian old and I really am sad about you Forex. I really wish it was part of the JavaScript. I'm just kidding. It was a terrible. And yeah, I'm a cloud developer advocate for Microsoft. Jem,

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a front end engineer at Atlassian working on BitBucket cloud.

</p>
<p><strong>Mars Jullian</strong><br />
I'm Marge Julian, and I'm a senior software engineer at Netflix too.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcasts, we'd like to choose a keyword that if it's mentioned at all, on today's panel, we will all take a drink and you guys can all hold us accountable. What did we decide today's word was? Oh, man. I would of course, of course getting trolls already. Evolution evolution. Alright, so any form of the word evolution, we will probably have to take a drink.

</p>
<p><strong>Mars Jullian</strong><br />
You just said evolution. Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so I'm interested to know, how did everyone first get started with JavaScript? What was your first time looking at the language writing it, just experiencing that great JavaScript.

</p>
<p><strong>Mars Jullian</strong><br />
My first experience was through the lens of jQuery. I first learned JavaScript in an internship not in school. And I didn't quite understand that there was a distinction between jQuery and JavaScript, which I think is happens a lot for beginner developers. So you know, as you get more and more into it, you realize that there's a full language behind it. And it's not just nice little utility functions. But there's a lot of power to the language. So

</p>
<p><strong>Jem Young</strong><br />
mine was free jQuery dating myself a bit. And it was I was reading a lot of PHP, then I saw this thing called JavaScript. And it was like a JavaScript. It's just toy language. Like, it's great for minimal things with PHP. That's the future, right? Power,

</p>
<p><strong>Brian Holt</strong><br />
real power.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, there's still a lot of websites running on PHP, most of the world runs on PHP go,

</p>
<p><strong>Brian Holt</strong><br />
the language of PHP has evolved a lot. Cheers, cheers.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
So I probably came into JavaScript different different way. I was working at Microsoft at the time, and I just changed jobs, and was sort of a staff engineering and advisory position relating to dynamic languages. And I've been on this job for a week and my boss says, you know anything about JavaScript? I said no, it's it's this weird language on the web, right? He said, Well, here I got this email from one of our guys in India and there's like he's on a standards committee and these talking wants to know whether if it's okay that the things are doing in the standards committees, okay for us and it goes down. She actually she was goes down the list. You know, they're talking about moldy methods and just, you know, and static type system and a bunch of stuff like that is does any of that make sense to you? And I said, Why don't know, I'll look into it. And so that was how I got specially that was kind of the beginning of the, the battle against ECMO script for

</p>
<p><strong>Brian Holt</strong><br />
crusades, I think that's what that's called my introduction to JavaScript, I used to have an old blog, which I'm not going to tell you the URL, because I think it's still alive. It's WordPress. It's like one is want to do. I wrote a blog post about how I spent hours and hours debugging a bug with JavaScript, the first time I ever wrote it, I was a PHP developer in a company in Utah. And I found out after hours of debugging that in JavaScript, you can't call a function, the same name as a variable inside of the function. Now, as a great programmer, I think it was a great practice. And I think it's a travesty that we can't do that. But but that was my first exposure to it. And then I accidentally became a front end developer. And somehow I'm here.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, and I think like, Jem, I'll date myself a bit in the sense that I started way before jQuery, but I looked at it from the lens of flash, I was doing a ton of flash, which, you know, Flash doesn't really shout out ActionScript, awesome, ActionScript, two s one, S two s three. But what I use JavaScript for was to bridge the flash implementation to the browser, if you had this, or like a cookie or something that you actually wanted to store on the browser. That's how you could do it. And then slowly, Flash started to become less and less of a thing that I was doing, and JavaScript became more important. And that's right around the time jQuery kind of took over. Stacey.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think I've sort of similar story like, early, but three jQuery for sure. And then first job out of school, I worked with like an ECMO script variant, Lotus script, which is like, similar but not quite and as sort of a weird stack of stuff to be working on that with but then from there, it just went on from regular JavaScript and jQuery and then all the other variants on top of that so many, many stacks later, I'm still I'm still here doing it.

</p>
<p><strong>Ryan Burgess</strong><br />
And more frameworks ago, the evolution continues. So I'm interested in the future of JavaScript, what does that look like? Are we going to need transpilers? Are we going to always be relying on Babel or any of the other Chinese transpilers? Out there? Will browsers just support JavaScript? Are we always going to be leaning on transpilers?

</p>
<p><strong>Brian Holt</strong><br />
I think I think the answer question is transpilers. In particularly Babel, I think it's here to stay. I have like a really big soft spot for Babel. I think it's one of the most important projects out there. There's a reason why they changed the name from six to five, which is what Babel was originally called back when some punk Australian kid wrote it just getting Sebastian's a cool guy. It was called 65. It was designed to transpile ESX to Yes, five years 2015 Yes, five, and the changes to Babel because they wanted to be a platform for the future. Previously, in the world of JavaScript, the web developers didn't have much say in like the future of the evolution cheers. That was less intentional case, you didn't know, they had less input into what was happening, because it was just kind of the browser vendors, and those in their ivory towers, lobbing things or this fencing like, Here, try this, see if that works for you. And then when you land in the browser, we can give it a shot. The cool thing about Babel is we get to try things like decorators, which are still not even set and how we're going to do those today. And etc, etc. I don't know why pick the most controversial one. But we get to try those today. See if we like them, mess around with them. And then we can give feedback to them. So that when actually lands in the spec, that it works for us. Right. And so that's why I think transpilers are here to stay and why that's a good thing.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
So so I kind of think what we're seeing is a fork or divergence here. That between the I'll call it the enterprise computing side of the world overall, I suspect many of you would not want to be characterized as enterprise developers.

</p>
<p><strong>Brian Holt</strong><br />
Microsoft is definitely not enterprise.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
But but sort of the the more process oriented development side of the world that wants to have a repeatable development process and a tool chain that is applied to the programs before they're deployed. And Babel fits right in writes into that the other side of it is more of the live immediate response. Directly direct programming of the browser which I you know, I have I'm an old small talk guy, so you know, I really like that style of programming and, and such, but it's, it's it's always been the at tension with the the kind of be formalized processes that larger software development organizations use. And so that's where. So I think they've discovered that the enterprise size that that Babel really fits into that sort of cool tool chain. So I think it's going to be stay around, or things like it for that purpose.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think especially to is like, even when there is something new to JavaScript that's coming out, takes time for the browser's to adopt it. And you know, if you're wanting to start using the latest and greatest Babel really fills in that. Yeah, but

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
I don't. I mean, you know, well, this goes back to my previous talk, I think we need to get over this, I gotta use the latest new newest thing. I mean, really,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, we're developers, we love to use the latest and greatest, does the journey.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Next app, you know, really depend upon? You know, I a little feature that hasn't been there, you've been unable to. Now I mean, it will come along. So if that was all it was, you know, I'm not so sure. I really think it part of it goes back to something Doug Crockford used to say is talk about the difference between JavaScript and everything else is that for more traditional programming languages, the developer chooses the deployment, implementation of the language he's going to use, you choose which C or C++ compiler, you're to compile your code, and you ship that, while for JavaScript, that's the end user who chooses by choosing a browser, the implementation, it is what when you have an ahead of time, tool chain generating code for a base standardized version of the browser, your back more than that developer is in control of the environment where the code is only going to run. And so I think that's part of the attraction of it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's fair point, actually. All right.

</p>
<p><strong>Jem Young</strong><br />
I'm pretty contrary, I agree with you, Alan, that we should slow down actually, I don't like the way JavaScript is going. Right now, I looked at the latest TC 39 meeting to see what was getting in there. And we're just shoving a lot of things into a language that on top of everything is backwards compatible. So it needs to work with websites built in 2000, which I think will come and get us in the long run. We just have like, that features that we have swore cuz, you know, quite on Sally has a website running and she just won the break. I like it's more of a philosophical argument. For me, it's the best, or the most impactful decisions I've ever made my life have been made with constraints. So it's like, what am I going to school? Well, I don't have an unlimited choice. I have like finite resources that I can allocate. JavaScript is growing, so that it's like slowly eating other parts of computing. But I don't think that makes for good programming. I think we work best when we have constraints on the system and not let JavaScript do whatever it wants, like what

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
well, so I agree with you, and particularly your observation about the latest things in JavaScript. The process if you know, ECMO script six 2015 was really designed over six years by a core team of about eight people. And the typical meeting, we'd have maybe had 15 people. So you had this core of eight people, another seven or eight who kind of float in or out and stuff. But you know, they weren't really part of the core. This last meeting was over 60 people in attendance. And it's like JavaScript has become so important that everybody wants to be involved in the standards process. And if you're, you know, you're working for some random big company. And your boss says, Well, why don't you start going to these meetings? Or you say, I like to do this the send me to these meetings, you go there? How do you made you measure your success? Well, I got a new feature in the language, you know, is Does somebody really need that feature? Well, it's useful for some things and stuff, but I got it in I got it through the process and stuff. And there's, with that big group that we have today, as we're wrapping eight people doing it, we spend up worried a lot about what we call the complexity budget, that they've been building the length, there's only so much complexity you can have in the language. And as time goes on, you use up that budget. And so every decision you make the day to add some little feature is using up complexity budget that downstream five years, 10 years from now, you might want to use for something else. And if you forget about the complexity budget model, you just start throwing stuff in and that's bad.

</p>
<p><strong>Ryan Burgess</strong><br />
No, it doesn't. That's a very good point. I think it also leads to like we're talking about this committee, which is TC 39. How would you explain that LM Like, I think that's more a question for you is explaining what TC 39 is? And what are the process look like for adding a new feature into JavaScript?

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Okay, so first of all the way standards work. Historically, standards are very kind of bureaucratic and actually sort of government focused process, part of what standards do is allow competitive companies to get together and legally collude to do things. Literally, I

</p>
<p><strong>Brian Holt</strong><br />
mean, you can get collusion cool a minute that,

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
yeah, you can get together and decide to do things the same way, which if it wasn't done in a standard situation, and you were very large, competitive companies would be considered to be anti competitive, eventually, and I trust and so the standards organizations provide a framework for that to happen for things that you actually do need to standardize. And so they're there various bodies in the world that do this in the US, there's an American National Standards Institute, worldwide flows up to something that's called ISO international standards organization, and achma, which you hear is, is a European base standards group that operates worldwide and it happens to be the group under which JavaScript was standardized. And, and it's there, because Echo has always had the reputation as being sort of a low bureaucracy, low overhead, you know, let the technical people do whatever they needed to do sort of organization. And that's partly how it got selected for JavaScript. So. So TC stands for technical committee, t's. So which is a group within a standards organization that works in a particular technology area. So TC 39, is the group that works on JavaScript. And so it's the JavaScript committee, its members are official officially companies, not not people, so you, companies pay to be members of it. And what happens inside the committee in terms of creating a standard is pretty much up to the members inside the committee. But it largely operates on a consensus basis, everybody kind of needs to decide. Up through ies six, I said it was a relatively small group of people involved. And there was a single editor who did most of the actual technical work of creating the standards and stuff that was me. And we did a, and it had been a long time since a major update. So we did a whole lot of stuff. And it took up a number of years to get it done. At the end of that we said, well, this is become so big and complex we need. We know they're bugs, we need frequent releases,

we'll decide to do a release every year. And we saw that a lot more people coming involved. So we tried to invent a process for it. And this is what's called the stage process. And so a proposal comes in and goes through four stages. The first stage we call stage zero is basically coming along and saying, Maybe we should work on something like x. And you're talking about it for a while. And, and, and you know, if there's general agreement, general consensus that this is an interesting area to investigate, it goes to stage one, stage one is, let's explore this space seriously, let's look explored alternative solutions, alternative ways to provide this functionality. We maybe do some prototype implementations, but develop a sense of kind of how we want to approach it. And at the end of that, again, it goes, the champions, people who are working on it, it's not the whole, there's a small group of people who works on each of these proposals, they go back to the whole committee and say, Okay, here's the shape of solution that we think would be appropriate that we think this makes sense to do something with this. And the solution looks approximately like what we prototyped here, and if, again, if there's agreement, it goes to stage two, stage two is really working out the details starting to write specification language, formal specification language to describe it, kind of working the bugs out of the design. At the end of that, if that's complete, it goes to stage three. At the beginning of that stage three, there's a fairly complete draft or proposed specification. The idea of stage three is that people will actually go out implement it and try it and wild. So maybe browsers are implemented behind a switch, maybe basil, they should implement it. The transpilers will get transpilers come in, and they might come in earlier to and experiments but it's but really trying it out. And once that process is done, and everybody is happy with the results committee says, Okay, this is we think this is good, we think this is going to go. We want this to go into the next edition of the standard at that point, it's called stage four, essentially means done. And and when it's at stage four, well, it's done. It may be in a queue, since the standard has only officially released their drafts all the time, but the only once a year, is there an official new release of the standard. And so if something's at stage four, should be showing up in the next release.

</p>
<p><strong>Ryan Burgess</strong><br />
Very nice. And that's when we're happy when we get the new features. So use. Yeah, so definitely a long process to go through. And I mean, we've seen features that go on for a while that we're, you know, itching to use. And so it is good that it's going through the standards, like Jem said, of just, you know, being a little more aware and making sure that we're not shipping every new feature that needs to be

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Yeah, but yeah, and that's a real problem. I mean, one of the, you know, one of the things sort of new people in the committee, real typical thing is people come in and say, Well, can we take x or y or z out? Yeah. And and when you know, everybody comes on say, no, no, you can't take it out. It's, it's, it's the webpage your grandma, grandmother wrote, 1996 is still out there using J. S, and you don't want to break your grandmother's webpage, do you? It's, it's

</p>
<p><strong>Brian Holt</strong><br />
good. Don't break the web, right? Don't

</p>
<p><strong>Ryan Burgess</strong><br />
Don't break the web. But like, yeah, don't

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
break, don't break through it. You can't do it, but and say, Okay, I get that we aren't going to do that. But each of these, you got to look at each of these new things you add is something that 15 years down the road, somebody else may be coming along and saying, Well, that was really a dumb feature. Nobody really uses it. Can't we remove that? So

</p>
<p><strong>Brian Holt</strong><br />
with keyword, as I say,

</p>
<p><strong>Jem Young</strong><br />
with is coming back, I want to come back? Like in Python, that'd be great. Let's

</p>
<p><strong>Brian Holt</strong><br />
do it. So

</p>
<p><strong>Ryan Burgess</strong><br />
that's an interesting comment, because even comparing it to Python, what are some challenges JavaScript has, like in your opinions against other languages? Whether it be yet specific language or adoption? Like what are some things that you find that are challenging for JavaScript?

</p>
<p><strong>Jem Young</strong><br />
I'd like to hear Stacy's answer on this because she does a lot of web component things that I know have, you've been pushing for years, and it just hasn't seen any adoption. So I wonder if making it part of like the HTML spec, HTML six, or whatever the next spec or JavaScript would be beneficial?

</p>
<p><strong>Stacy London</strong><br />
Yeah, I mean, I guess there are some things that you just wish weren't, we didn't need JavaScript for, like things that really should just be part of HTML and CSS and, and baked into the the other things in the stack of the things that do those things really well. But we've had to use JavaScript as like a workaround. And maybe now we're using it as a default, but it's not really the best thing for what you're trying to do. Like layouts or something like that's that CSS is way better at that browsers are way more optimized for that. And so there's, I think that's a challenge where you see people coming out of programs that like I'm a JavaScript engineer, you're like, Wait, are you a web developer? Like, you touched those other things, too. So I think that's a challenge with the language and maybe just the our profession as a whole.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
So you know, why JavaScript is standardized in ECMO, rather than the W three C?

</p>
<p><strong>Brian Holt</strong><br />
be fascinated? No. I would be fascinated to know,

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
it's because TBL back in the time in 1995 1996, didn't think that the web should have a procedural programming language, he thought that everything should be declarative. Right, what I really

</p>
<p><strong>Brian Holt</strong><br />
want to know is they might have been right.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
He might he might have been I mean, it's,

</p>
<p><strong>Jem Young</strong><br />
I want to know, so you're on TC 39, who's on TC 40.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
I, there is a TC 40. Or at least there was a TC 40 I'd have to look up what it was.

</p>
<p><strong>Jem Young</strong><br />
But that's track, bring it back. Next Level TC-39

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
could be something like, you know, phase encoding for magnetic disks or something like that, you know, it's really the standards organizations cover just a huge range of technologies. It's,

</p>
<p><strong>Jem Young</strong><br />
we were talking earlier about functional quantum computing. And Alan gave the best answer I've ever heard. I asked him like, what do you think about quantum computing? He's like, honestly, I don't know much about it. So and like you have to respect that. You don't hear that very often. So I'm like, I actually don't know that much.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Well, people said the other half of what I said was and I decided a long time ago, that I probably didn't need to know for the duration of my life so I'm not too worried about it. That's

</p>
<p><strong>Ryan Burgess</strong><br />
so all of us work on UIs and you know, fairly large companies, how has JavaScript actually empowered you to make more performance, better user experiences that you weren't able to do maybe in the past or on older versions of JavaScript without something like jQuery, or even just older versions of JavaScript,

</p>
<p><strong>Mars Jullian</strong><br />
actually want to just take no issue, but with the word better, I guess only be alright. So I think the word better can be described in multiple ways. And we see it in our UIs all the time, like, What Does better mean, I think from a software engineering side, it can be more organized, it can be more performant. But from our UI side, it can also be more interactive. And a lot of times when we make our UI is more interactive, and you know, we've got, you know, shiny bubbles here and there, and they work really well, and they've got these beautiful visualizations, they're not super performant. And I feel like sometimes we do have to actively work against that in order, we get a lot of benefits from JavaScript. But also, we don't always have a ton of discipline with it either. And so we have to kind of work against that a little bit in order to make sure that even though our UIs are beautiful, they will load for lots of people on different devices and different browsers. And so I just want to, you know, elaborate on the word better.

</p>
<p><strong>Ryan Burgess</strong><br />
Like, when I totally agree with that, actually, in the sense that sometimes I think it's almost hard because we should be simplifying our UIs, we have all these great tools available to us, should we use them all? Probably not. And you're almost thinking that more, everyone should be able to use it. And if you pack it full of all the latest and greatest, not everyone can, especially for performance,

</p>
<p><strong>Mars Jullian</strong><br />
I think we have to make compromises. And going back to the transpilers conversation, it we use other tools to make the code that we write more performant, but still work really well and work across different browsers. So we've kind of evolved, evolved, chairs. The community has evolved to a place where we have the right tools to solve all these problems for us, because we have so many options that we are so many things we can do with our UI is now but we have other concerns as well. And we have to build the tools to allow us to do that as as we go.

</p>
<p><strong>Jem Young</strong><br />
I don't know if JavaScript got better, like he has 2015 landmark moment, we got better than but overall, I don't know if JavaScript naturally got better. It's just that we have better tooling around how to use JavaScript, like the Chrome Developer Tools, or Firefox developer tools. made us better engineers, because we can now debug instead of using console statements like we didn't beginning just console log everything less than the console love, oh, the ability to stop on a breakpoint and like, see all the variables that are groundbreaking. Oh, yeah, yeah, people take that for granted. Just cancel everything, just like you do in other programming languages. But the tooling sound better. And most of the things that people say like, oh, JavaScript is great, because redox or react or view or Angular, all these frameworks, that's not necessarily like the evolution of JavaScript, just we've gotten better writing code, and the tools have got better. Cheers.

</p>
<p><strong>Brian Holt</strong><br />
Cheers,

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
keeping us honest. Well, Tennessee, the language has gotten enough better that it's possible to build those sorts of frameworks and more and the implementations, right, and the performance and, and the news, because the, if you can't debug the stuff, you can't build it. So. So that's all part of it. So I can have a question along the lines you guys were talking about is can you think of a case where there was something that people commonly needed to do in web apps that you couldn't do declaratively in HTML and CSS that people did, instead in JavaScript, maybe using jQuery or, or something, which then as HTML and CSS improved, they reverted back to doing it declaratively and moved away from doing it procedurally. I mean, I would expect you would hope that would be the way that things move forward.

</p>
<p><strong>Brian Holt</strong><br />
I think I saw some like really horrible see a jQuery of like, things that they could have used like the not select for like a stellar just give a great shout out Estelle, she, she gave an awesome talk about CSS selectors about some amazing things you can do with like sibling selectors with like, multiple hairstyle. We're talking about you. You gave a fantastic talk about like CSS selectors, and about the horrible things that jQuery developers used to do to achieve the same things that we can do a CSS selectors. I think that in particular, something that's greatly improved, especially with CSS level three, yeah. And

</p>
<p><strong>Ryan Burgess</strong><br />
so there's where you might have used JavaScript, because we couldn't do it necessarily, and now able to action like having to

</p>
<p><strong>Brian Holt</strong><br />
maintain that legacy code. still gives me a little bit of night terrorists from being honest.

</p>
<p><strong>Ryan Burgess</strong><br />
When was the last time you looked at like a old legacy jQuery build?

</p>
<p><strong>Brian Holt</strong><br />
Haven't gone from Netflix like six months? No. Kidding.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
So and so do you see people actually making that transition where they say, Oh, I don't need to use JavaScript here anymore. I can now use the declarative approach. Yeah, I

</p>
<p><strong>Ryan Burgess</strong><br />
think so. I don't think it always happens. Like really quickly. I think in in companies when you're building something you kind of Get about it. Once it's done, you kind of move on, and you may touch it later. And sometimes you don't necessarily have time to refactor. And at that point, that's when you should be thinking about it is like, Oh, wait, I could just leverage something like CSS or HTML here. And taking the time to do that. That doesn't always happen. I think it's it's on us to call each other and say, Hey, like, let's take the time to do that. Because I think it is important.

</p>
<p><strong>Jem Young</strong><br />
I think most things we take for granted as the web has evolved, were much better, we build better apps to actually and roll today. They're actually from WPC and HTML spec. Like the web API's are the things we actually take advantage of most like, service workers is like HTML spec. I don't know, query selector, which is amazing. Because we had to use Java or we had to use jQuery before to do that. And we just do that now. But don't fetch, web Bluetooth, hang on, like, those are all actually HTML standards, not JavaScript. So I think people misuse the term like JavaScript is evolving, where it's the web that's evolving, and JavaScript is part of that.

</p>
<p><strong>Ryan Burgess</strong><br />
When Yeah, I was gonna say Java. Three evolves,

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
the devil. But when you're using a web API at that level, you're still doing JavaScript programming. So there's a difference between using a W three C defined API for JavaScript, and using the declarative expression of equivalent functionality. Totally. Right. And

</p>
<p><strong>Brian Holt</strong><br />
I think fetch is actually a really great example of that, because it used promises, which came out of TC 39, but it was expressing some DOM concern, right? So it's great melding of the two different standards body, I suppose

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Well, remember that reason promises were in 2015? Was because if they weren't, then the W three C was going to define promises as part of the web platform,

</p>
<p><strong>Brian Holt</strong><br />
I've got no.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Literal, I mean, there's a bit of a hostage situation there. That forced us into moving faster, and maybe then we would have we, you know, we might have thought another year or two about some of the issues and stuff, which, in the long run, maybe would have been good, but I've never had the platform and really didn't need it. So

</p>
<p><strong>Jem Young</strong><br />
can I ask how, how's promis cancellation coming along? Any day? Now?

</p>
<p><strong>Ryan Burgess</strong><br />
We wait for that one for a long time,

</p>
<p><strong>Brian Holt</strong><br />
about tail call recursion. Let's go there.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Okay. So I have something for all your front end, guys. Yeah. Early, something I hope you think about sometimes something I did a Twitter rant a couple of weeks ago. So

</p>
<p><strong>Brian Holt</strong><br />
follow him on Twitter, by the way. It's, it's, it's worth follow.

</p>
<p><strong>Jem Young</strong><br />
It's pretty entertaining. So

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
one of the things I care about, hence to be people my age tend to care about for some reason, I don't know why, but is the long term viability of what we create on the web. And particularly, you know, I don't really care about your, your app you build that's going to be used for six months, and then replaced by another app. But I care if I sit down, or a friend of mine sits down and they spend five years building a book length work. That's a dynamic document. It's not just random text. So Rich, a rich document that's web based. And they would hope that 100 years from now, you know, odds are against them, but they would hope that they've done something significant enough that 100 years from now people are working looking at that. So how do we build the web going forward? To enable that sort of long term durability of documents where the web is a primary repository of human information? When you know, we can't be changing the programming language every.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, I see we're headed there. In some ways, I think, to the user experience, it doesn't always necessarily change. And so we sometimes change frameworks, we sometimes re architect cleanup code, and to the user, that doesn't really change much, typically. And so I think you'd hope right

</p>
<p><strong>Brian Holt</strong><br />
with no, I think, to Alan's point, I think it could, right, like we say it tomorrow, that Wikipedia stuffs being maintained, right. I would hope 100 years from now that that wealth of knowledge is still accessible, even if we change the browser API's. 10 dozen more time, but I think

</p>
<p><strong>Ryan Burgess</strong><br />
the idea is that the web still is there. And it's like it's just function. It's evolving. Who would just have

</p>
<p><strong>Stacy London</strong><br />
like a way, way way back machine? You are?

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Very, very good. You have to these are things that are really popular arguably will be maintained by somebody. But there's a huge set of things that are not popular enough for people who actually spend money to, to maintain them and update but still have long term value, right? In fact, it's hard to identify at this vote looking forward, which things are actually the valuable thing. So the safe thing is to preserve as much as possible. I mean, that's what libraries have always done. And, and so, you know, again, how do we is it? Do you have to fall back on virtual machines? Can we really depend upon, you know, 100 years, or 200 years worth of different virtual machines being available to run different generations of this technology? Are I'm wondering if maybe there we need to need to have a split in the web, in the browser platform between things that are appropriate to do into web documents that you expect to have a long life versus relatively transient or short term web applications that are more like traditional applications and have we're gonna have a limited lifetime. And I've got one possibility. I don't know if that's the answer. But

</p>
<p><strong>Brian Holt</strong><br />
so what I'm hearing is that every browser should have quirks mode all the time. By like, the look of horror.

</p>
<p><strong>Ryan Burgess</strong><br />
That was so painful. We should never go back to that time. Can you make sure that never happens, Brian,

</p>
<p><strong>Brian Holt</strong><br />
for mode, fucking Microsoft.

</p>
<p><strong>Ryan Burgess</strong><br />
So we actually are pretty much out of time. But I want to thank Ellen, for joining us. Thank you so much for us. It's it's been a very great thank you all for listening to us. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
Thank you for watching us get drunk.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Alan, where can people get in touch with you?

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
Oh, well, you can follow me on Twitter at

</p>
<p><strong>Brian Holt</strong><br />
AWB J S. And so we're looking like blue face right? Yeah, we got the blue face. Just Just be aware of that.

</p>
<p><strong>Allen Wirfs-Brock</strong><br />
And more. You can work grok.com/ellen My Very occasionally updated blog but I also have various interesting documents and stuff they're worth looking at. That's W IRF like Fred s like, Sam. hyphen, like dash b like boy are Ock slash Alan. Although although my wife would be quite happy if you left off the dash Alan and then you could learn about how to really do design things with objects but that's a different story. So and or you can email me at Alan Brock, calm

</p>
<p><strong>Ryan Burgess</strong><br />
right on. Well, thank you all for listening. If you're interested in hearing more of our episodes Brunnen Happy Hour comm you can follow us on Twitter at front of age and any last words before we take off evolution. Evolution. Here's

</p>
<p><strong>Brian Holt</strong><br />
revolution counts. Break again.

</p>
`;
        return transcript;
    };