// Episode 77 transcript
module.exports = function() {
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happy hour podcast. This is a little bit of a unique episode in the sense that it's just Jem and I on the episode today, but we decided since it's just the both of us like let's let's talk about different things is something overrated or underrated in front end. And so we'll maybe talk about front end tools, libraries, languages, UX patterns, just really give our opinions on it's over rated or underrated. And remember, it is just jevin my opinion so you may disagree, which is fine. But yeah, Jem, you want to give your introduction, Jem young senior software engineer and I'm Ryan Burgess. I'm a software engineering manager at Netflix and In each episode of the podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. Well, Gemini we'll take a drink. What did we decide today's keyword is limited limited. So you know, limited limitation, whatever it is, we will take a drink. Alright Jem, let's start off. I'll choose one here. Let's start off with something like tooling. Babel. overrated or underrated?

</p>
<p><strong>Jem Young</strong><br />
I'm gonna say, just right.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I was I was kind of gonna say we almost see the middle one. And they

</p>
<p><strong>Jem Young</strong><br />
are not bad. Just like yeah, middle.

</p>
<p><strong>Ryan Burgess</strong><br />
I think Babel is super important. So it's like one of those ones where I'm like, Yeah, but it also has a lot of praise and love in the community. It's a tool that a lot of people rely on to being able to leverage the future of JavaScript and be able to actually ship it in production. So

</p>
<p><strong>Jem Young</strong><br />
I actually I'm gonna change my answer to probably underrated mostly because I increasingly more and more companies rely on it, but not enough people. are invested into it. Like they don't follow what's going on. They don't donate any money to the to the cause they all use it. But no one really is. More and more people are not understanding what exactly it does. 

</p>
<p><strong>Ryan Burgess</strong><br />
It's just like it's magic.

</p>
<p><strong>Jem Young</strong><br />
It is. Yeah, it is magic.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. So maybe the underrated part is Yeah, it does all these cool things. Okay, that's, that's fair. Yeah. And yeah, I don't know how many people are actually contributing back to it. We probably all take it for granted. I know for a fact we take it for granted. Yeah. All right. overrated. underrated. Open Source. Ooh, open source. I think sometimes overrated I'm gonna go with that. I think I can go both ways, but I'm gonna say why I think it's overrated because I think it's amazing. But I think it's overrated in the sense from people's perspective of feeling like they need to contribute to open source, or almost feeling like it's too daunting to to contribute. And so I think sometimes that can be like overrated in the sense that it's, you don't have to do it. If you're passionate about it, you should absolutely it's a great way to learn and grow But also I don't like when people feel like scared to do it either. It shouldn't feel like this daunting thing. As an industry, we should be really supporting people from, you know, a junior engineer to like very senior engineer to be able to help contribute to open source. I don't know, what do you think I'm with you, I'm gonna say overrated. And this is an open source. Any particular library is overrated. It's overrated, in terms of people assume things about open source, like, oh, it has a lot of stars on GitHub. So it must be the best out there and reliable because there's more stars in this, which is a poor metric for understanding in our last episode we were talking about like that is on GitHub is like that shouldn't be a metric of success. Exactly.

</p>
<p><strong>Jem Young</strong><br />
People assume something's open source that it's like, secure, it's validated. If I write a new like crypto library, people are gonna say like, Oh, yeah, it's secure and solid, because it has a lot of stars. And it's open source. Because like somebody's checking on it, and I say, oh, who looked into it, somebody. So I think it's all right in that Like people make assumptions about, like how good a library is just because it's open source, or just because it has some stars. Exactly. Yeah,

Ryan Burgess 
no, that's fair. All right, that's good. What about something like CSS preprocessors

</p>
<p><strong>Jem Young</strong><br />
I'm gonna say about middle the road middle the

</p>
<p><strong>Ryan Burgess</strong><br />
road, man. I'm gonna go underrated. I feel like maybe we just don't talk about them enough. But I think they were like, super powerful in the sense of like, back to the day of us writing like, our CSS, you know, by hand and just having to do that. It was a lot of work. And we were missing that aspect of having something to be like more functional in CSS. And I think CSS preprocessors like, less and sass really put us out much further. Like, I know we've grown even since that there's even other solutions out there. But yeah, I think they're underrated.

</p>
<p><strong>Jem Young</strong><br />
I say man, I think

I want to say the community appreciates what they do. There's a lot of different variations, but we haven't made any big leaps forward. I would say like things like CSS four and other things that are adding more functionality. css are good. And they're kind of slowly but surely like taking away some of the the work of the CSS preprocessor. One of my issues with CSS, though, is like, we're making it more complicated, like CSS for ads, like all these new features and things, but we're inherently like making CSS do things that like maybe it wasn't designed to do like maybe Is it the best? The best vector to like, do these complex calculations? Or should that be offloaded the JavaScript, back CSS? I don't know. That's fair. But I also felt that CSS was very limited at times. Cheers. Or maybe we're going too far, I guess is what you're saying with that, too, is that maybe CSS preprocessors were got us really to a good spot. But now we're almost going too far with it and trying to add too much functionality. I'd like the option though, because even think of animations like getting in CSS is like sometimes there's a place for animations that are done on scene. Assess might be a better option than then doing it in JavaScript or vice versa. It's good to have the option, but it's also good to know when to use them and when not to. That's true. I wish. I think it's great that they're they're adding search functionality, CSS in CSS for but uh, I don't know, like, we have this problem in the web ecosystem, which is, there's too many choices. It's not limited enough, which is, cheers. Cheers. Which is good, because it's good to have options. On the other hand, it's like, oh, you want to do animations, which show us? Well, you can use CSS or you can use you can animate it by hand with Java scripts. Or you can use svgs. Or you can use Web GL or you can use I'm sure I'm missing like 50 libraries on top of all those. Yeah, yeah. Which it's like, Alright, it's cool to have flexibility. But I don't think people have spent enough time probably doing like Web GL or something like that. Or even SVG animations, which are like pretty intuitive. Yeah, yeah. I'm pretty powerful too. Yeah. All right. What about something Let's go into some like drop JavaScript API's arrow functions. The beauty of ESX brought us arrow functions. Ah, so I'm gonna say overrated. I say they're overrated, because there's this new crop of people that are newer to JavaScript that they just use arrow functions everywhere, which is fine. They don't know, the caveats to them. And they don't know.

They don't know why they're using it. They just do it. And they don't understand the difference mean that in a regular function, and then, like, Where's my scope off, and I saw someone the other day trying to use like arcs and arrow function, which is like one of the things there's arguments here and an arrow function. Yep. The argument keyword should I say? So like, I think people are applying this stuff heavy handed without understanding why. Which to me is a problem.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, actually, to be honest, when I first thought maybe I honestly thought it was like, Oh, this is how I need to write functions from now on. Your argument argument is a perfect example where you're like, well, you need to be able to have arguments in a function sometimes not always. Yeah. And so that might not be the time to use an arrow function. Yeah. All right. overrated underrated a service workers. Oh, I'm gonna go with underrated, so powerful. Like I think there's they're underrated in the sense to that they've been around forever. Like, honestly, I don't even know when that was injured. Yeah, it's been a while. We're always hearing about them, but it's not like getting the traction that it should. And then that was also due to like browser support. And that always happens, but yeah, that's I do think we need to be thinking about them even more.

</p>
<p><strong>Jem Young</strong><br />
So unexpected for me, I'm gonna say overrated, okay. 120 19 people still don't understand. What do you serviceworkers you know, I interview people, and they're like, oh, blah, blah, blah, blah, blah, throw ServiceWorker at it. And I'm like, Why? Well, you can do offline and all these other things and like, yeah, and caching and all that I'm like, you know, you can do caching without a ServiceWorker Right, which people like what they. And I think if I label anything already, it's because there's too many people there that don't understand what it's for. And I'd rather see that like base level understanding and then say like, okay, and the secondary overrate is because no I don't want to receive any messages from your website like how many websites have you been on? Where it's like would you like to receive notifications via push via ServiceWorker? To your to my website? It's like No, I don't want that

</p>
<p><strong>Ryan Burgess</strong><br />
always the worst websites to I feel like there's there are probably websites out there that I'm like, yeah, maybe they would be useful for it. But they're always like shopping sites. I'm like, No, no, please don't message me when you have coupons or 25% off and like, I already get your email deleted there. I don't need

another thing.

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's up there with the read an article and then the pop up comes for. subscribe to my newsletter, Mike. No. Subscribe to get push notifications like No, it's just like become another obtrusive way of bothering me. I can't think of a use case off. That would be valuable. I feel like there are some websites out there that would be useful where I'm like, Yeah, I could use push

</p>
<p><strong>Jem Young</strong><br />
notification. It wasn't this year was actually the 2016. Or the elections that 2016. Yeah, yeah. See, you know, oh, man, Joe. Yeah, already. Yeah. A BBC had a really good example of like, live election coverage where they would like as people were voting, they would send you push notifications to your phone to show you like, which way the vote is going, which is really useful. They came with like, this whole image solution for like, I won't get into it. Maybe it'll be one of my picks, but they did a really good job with, like, that's useful live information that you want to keep track of. And you want like push notifications whenever something major happens, but you don't necessarily need them all the time.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Actually. Yeah, that's a good use case. I like it. Alright. I knew there was something. Let's do a language node. Oh, overrated, underrated. All right. Yeah, I wouldn't say it's overrated or underrated. I'm trying to say already, because I feel like that's my bias towards the general web communities. Things get too much hype when they may not deserve it or not. But I love node, I think it's really good deila das trying to like, reprogram my website, which is written in Python. So like, trying to use basic thing, and it's hanging on a response, because I'm so used to like, node and the asynchronous

</p>
<p><strong>Jem Young</strong><br />
feedback loop. Yep, we're like, you know, you get a request and keeps on processing until it's ready. But like Python will wait until that process is done and then send it off. And I'm like, Ah, it's so frustrating node had it right all along, which is totally true. That my counter argument to that balance it out is that there are better ways of doing things not using JavaScript and

</p>
<p><strong>Ryan Burgess</strong><br />
are more efficient. I think sometimes we think like, notice fast. Yes, but not for everything. Like even to your argument of Python. Python does a lot of great things. Yeah, it's a good language. There are lots of things like rust is coming up bigger. Go slow. Round. Yes, doing pretty well. Yeah, there, you really have to understand like the needs, like if you have like, high computation that would benefit from threading, like node is probably not the best way. I know you can do like multiple node instances, but it's not the same as like true multi threading. Yeah. Like that's native to a language. Yeah. So no, I think that one's Yeah. It's hard to say overrated or underrated on that one, I think. Yeah, it's good. I think people will respect it now as a as a real platform. Yeah, yeah. I won't say TypeScript or flow. But I'll say typed JavaScript. Who depends when you ask me this, because I feel like it's overrated right now. And and there's a reason why I'm gonna say this is because I feel like all I'm hearing about is TypeScript and flow, which not a bad thing, but it's like, TypeScript for one has been around for a long time. Like I feel like my first experience with it was like four or five years ago, maybe. And that was kind of new to me there. And so I think of it is more, just like how I'm hearing about it. I don't think it's a bad thing. I think there's a lot of good that comes along with the strictly typed language is we're seeing that, you know, in the JavaScript community, we're seeing that like, obviously in other languages, they've had that forever. And we're like, oh, wait, we could be adopting this. And so I do think that there is some really great things that Why call it overrated is just because like, that's all everyone's talking about is like, we should all jump on the TypeScript bandwagon. Yeah, that's where I'm gonna call it as overrated. I'm, I'm actually going to guess that you're going to go over ate it on this or somebody overrated on it, I and that largely comes from, again, a lot of new, newer people newer to the front end ecosystem. They're like, Oh, TypeScript, Oh, wow. Type JavaScript is solves all these problems, but a lot of them and this sounds like like a slider diminutive, but like, it's a lot of people that don't have or never got CS degrees, or like formal training that did or didn't come from a typed language background and I can tell you type languages. They suck. Sometimes.

I mean, they add a lot of overhead,

</p>
<p><strong>Jem Young</strong><br />
they add a lot of overhead, a lot of mental complexity, they do add a lot of safety and like runtime checking or not runtime ahead of time checking, and like things like that, which are awesome. However, you lose a lot of flexibility that makes like JavaScript what it is. So I only say overrated because people are like, Oh, it solved all these problems. When at the core, it didn't solve any problems. You weren't writing good code to start with. And it just like iron those out, which is good. Yeah. But like, I don't like people saying like, Oh, we we use TypeScript or flow in. We solved 80% of these bugs. I'm like, Well, if you saw a percent of these bugs, you had a problem that was not related to it's not catching major bug, but it's not gonna, it's not gonna be shipping your feature bug free just because you added flow or TypeScript.

Yeah. And plus, I've seen so many, so many help requests for like people that dug themselves to hold like defining these really complex types and then they can't figure out the way out of it, like, well, you built all this. I don't know what you did with these types because you did some really complex structure and then people building structures on top of that, then they built structures on top of that. And I've seen some like, code that it's just like unreadable at this point. They're like, but it's so safe, because it has all these checks in place. I'm like, Yeah, but again, we don't write our websites and see, because they probably be a lot faster, but it takes forever to read. And it takes forever to write. And that being said, I think there's a place for typed JavaScript in our ecosystem. If I was defining like, say an API contract or something.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, man, that's actually 

</p>
<p><strong>Jem Young</strong><br />
I would love to have a tight because like, I have, like I say, like, this is how it is. It's perfectly defined.

There are other parts of JavaScript that I don't think benefits from types I think it adds overhead So yeah, I I'm in the middle but overrated mostly because like it's getting a lot of hype right now. And I think, I think in like five years, there'll be like some, it won't be medium. It'll be like the next blogging platform, whatever it is, it will be you know what you can do all this stuff. Enjoy. Without types and people were like, what? Yeah, mine is blown. I'm like, we've been here before, guys. We've done this loop already. I

</p>
<p><strong>Ryan Burgess</strong><br />
feel like that's a thing that pendulum goes really hard one way and we'll come back a little bit. And so that's where I think we're on that like, swinging really hard going super strict. And then, yeah, we'll we'll come back and figure that one out. Yeah. All right, I've got one for you. Let's talk about UX patterns, a little bit parallax scrolling,

</p>
<p><strong>Jem Young</strong><br />
that sort of thing? I hope not.

</p>
<p><strong>Ryan Burgess</strong><br />
So I mean, I'm gonna just throw it out there is overrated, I'm gonna say neutral. Because I've seen really, really, really good examples of it. I think I can only ever think of one. So please enlighten me that there is good examples of it. I forgot the website. And I like I will not be able to find it the like, he built parallax scrolling really well, where he tied it to like a Web GL animation. So when you scroll it, like, built out this animation at the top and it moved and it but like, to be fair, this person's like the 1% of engineers who can build complexity like that. But in general, I haven't seen any thing using parallax scrolling quite a while there was the one coin card like years ago, it was the I forget. It's coin something I can't remember the website, but it was taking credit cards and you could put all your credit cards into one essentially. Now I failed company. Yeah, it doesn't exist. But I do think that there the use of parallax scrolling that is the one example I was like, Oh, they were demonstrating as you scrolled how it was like the four or five cards go to one. And then you can just kind of like swipe the one card. It was nice. It was just an easy way to show how this worked. But I think oftentimes we I've seen his sites that were just like adding parallax scrolling because it was like the cool thing to do. And it honestly distracted from what the point of the website was

</p>
<p><strong>Jem Young</strong><br />
agreed a hamburger menus.

</p>
<p><strong>Ryan Burgess</strong><br />
So I don't even know. Do I am I just choosing overrated because I don't like it. Everybody was like, we need that. The hamburger menu. And I think the problem with it was, it's fine if people use them. But I think what I always experienced was, it was a way to shove a bunch of more links in there, instead of being thoughtful about what are the important links that our users need? Sometimes, like I'd even see it where, oh, well, we need to link to this area in our site, because there's people working on it. So we need to give them love. And like, is that the best thing for our users and like, it was just a way to like shove more links in uh, so I'm gonna say underrated. Okay, I, I agree with your points. However, hamburger menus have, like, become so ubiquitous that people understand. Now if you tap that, it doesn't matter how your site's laid out. If I see the hamburger menu left, right bottom, it doesn't matter.

I know I can go there.

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's become like a well established pattern that like, I see nothing wrong with it. I know some people are starting to move away with which it gets confusing to the web's always changing because sometimes it's a Like swipe rights from the left hand side and like it'll the side menu like Android UI or Android OS, their UI is are very much like that, like swiping the left instead of the hamburger menus, which gets confusing because you're like, which one is the site implementing what kind of menu system? I'll tell you. an underrated design system or design pattern that I've seen is bottom menus now on mobile phones. There's a few I'm using brave browser now my pixel three and it has a has a bottom menu for navigation and it's so much better and like it's one of those like, Why didn't anybody think of this before people are holding the left hand or right hand but like your thumb can move down easier that can move up so like putting all the stuff at the bottom of the screen on a mobile phone makes so much more sense?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I completely agree with you on that. Is it underrated? I think also, same thing goes with things like Instagram feel like certain ones like that were there all the menus are like lower at the bottom and to me, that is exactly for mobile, it's like really thinking strategically for it in the sense that Where's your thumb, it's holding the bottom and being able to click and interact right there. And so I guess that kind of also goes to my point with the hamburger menu is oftentimes it was thrown out the top. And I think that was another reason why I never really liked it is when we're thinking about mobile a lot more. It's it's actually like the furthest you can reach is often where it is the top right or top left. And so that becomes actually even harder for people to navigate. So I'm with you on the underrated though, on the bottom navigation, since we kind of briefly just brought up mobile, mobile first. I feel like it's been around for years but designing developing for mobile first. overrated, underrated, underrated because we still don't do it right. Even in 2019 when the vast majority of people in the world are accessing the internet on a mobile phone. We're still not there. Too many apps will like cripple their mobile site the forced you to download the app Which is fine. For instance, like I'll say Netflix where if you want to do video streaming you need like, we need a like a deeper level connection that you can do on on a mobile phone. So like you download the app, because like the performance would be so much better. But there are sites that like deliberately do not make a mobile site and like, or cripple it, so that you're forced to download their app. And they for whatever reason, right? I say underrated still, I think companies need to be thinking more strategically on the mobile front is thinking like, people are using the mobile devices a lot more. And it's becoming the primary device, fewer to choose one device and you can only you know, especially if you're not working on your laptop, it's your you choosing a tablet, or you choosing a laptop, or choosing a phone. Well, most people have a phone and if you can only afford one it's typically going to be the phone. And And to me, that's the that where you should start is like where's the majority your people and your users is probably likely on the phone, and that may vary that might be completely different. But I think for the majority of use cases, probably phone,

</p>
<p><strong>Jem Young</strong><br />
definitely VR virtual reality

</p>
<p><strong>Ryan Burgess</strong><br />
completely overrated. And there's some really cool stuff. I just feel like it is just one of those things that will come and go. Kind of reminds me of 3d TVs where I'm like, it was really cool. And then it just kind of fizzled out. are curved TVs, curved TVs, that was another thing. Yeah, I kind of forgot all about that. And I just feel like VR has its use cases. But I'm just not convinced that it's like gonna sustain

</p>
<p><strong>Jem Young</strong><br />
I agree with that I'm I'm overrated with the bias towards a bit more in the middle. But generally overrated I got a lot of hype, probably two, three years ago. But I know there's like a diehard core people that are like VR, so cool, but I haven't seen that. The cases where it's like, game changing. And I know Mozilla spent a long time working on like VR web and things like that. But again, I haven't seen anything come out of that arena that I'm like, wow, this is a great case for VR. The technology is cool. It absolutely is. It's more novel than anything like you play with and you're like, wow, this is really cool.

</p>
<p><strong>Ryan Burgess</strong><br />
But do you own one? No. Do you think it's limiting?

I think there are pretty good use cases. I if I had to bet I bet AR augmented reality a bit more because that's when you put on VR goggles you're just cut off in the world, but AR is like you're still in the world. But there's things you can interact with. I can I see the case for that more so than I see the case for VR. Let's get one and go to like a school more JavaScript thing. ajax me I don't I don't have an answer to that. Like it's, we need it. So it's like oxygen overrated? underrated. You're like, overrated. We don't even need it.

Yeah, it's it's super necessary. So

</p>
<p><strong>Jem Young</strong><br />
yeah, I'm gonna say underrated because it's still great. 

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no, yeah, that's fair. That's Yeah, that's a hard one that really put us in either of those categories of 

</p>
<p><strong>Jem Young</strong><br />
webassembly. 

</p>
<p><strong>Ryan Burgess</strong><br />
Ooh, that's, that's a tough one for me. I'm gonna say underrated. More in the sense that I feel like we should be seen more with it but we're not like I feel like I've heard about webassembly for years now, but I don't really see it used that much and maybe I'm just living in a box but I just don't see it as much so that's where I'm going to put it as underrated. I'm gonna say underrated as well, I I think the immediate applications are not that apparent yet but it will be the foundation of the future of the web for like really complex things that traditionally we've had to offload to like desktop apps or even servers we can now do and website Exactly,

</p>
<p><strong>Jem Young</strong><br />
yeah, so I'm gonna say underrated as well.

</p>
<p><strong>Ryan Burgess</strong><br />
Like because it has a lot of potential but it's just it hasn't really picked up the steam it should so underrated i think it's it's kind of there with web RTC things that they're really powerful. But we still haven't seen like the full, full full implementation of it. That's a great example of it. Yeah. All right template languages. your handlebar mustache Jade, they don't really get used much anymore, but even in their time, so probably overrated now now that we have template strings and

template literals. And yeah,

</p>
<p><strong>Jem Young</strong><br />
and template functions like we can do most of that and most, most of the big libraries and frameworks now like give you that ability pretty easily without too much work. So it's, I think, a hits that you're right at this point in time, but I think they played a big part in getting us to where we are now. So it's hard to really define that. I think. It's like, it's like going to jQuery man, overrated or underrated. I still think jQuery is underrated. I do too. It's like it's amazing. It was it was game changing when it came out. And it's still I know, like, I think we've definitely made fun of them the show. Absolutely. There is a place for it. If you need like this general library, it's going to work across browsers and like handle the weird quirks. jQuery still agree me I feel like it put JavaScript even like at a better forefront because of it. So yeah, yeah, this one's gonna be tough for you. Silicon Valley. overrated underrated. Oh, man, that is a tough one. I feel like I need other options. I'm kind of middle ground here. I think it's, I really like it out here. There's a lot of good and there's a lot of bad. There's a lot of opportunities. It's an amazing place to live like for weather for just like amazing things to see and do. the caliber of talent that's out here can be mixed. But there's a lot of really, really strong talented people out here. Built a life here. So it's like, you know, I've been here for a while it's good. But I can guess where you're headed with this one gem?

Yeah, like I can't not say overrated. I, there are a lot of smart people here. Like arguably, I mean, it's definitely the tech hub of the world. It's the vicious cycle of VCs invest in startups. VCs are primarily out here or the big ones or New York. Startups coming out here to get VC money. They hire people who are talented and worked really big companies and have the experience. They're all here. So like, you end up in the cycle of like people to stay here because the VC money's here VCs are here, because startups are here. And I don't know, like, it just keeps propelling us up and out. And we push out teachers and firefighters and like all these other people, I would love to see like a more diverse Silicon Valley, where more more like New York or like there exists other industries other than tech. It's not Silicon Valley's fault, per se, but I don't know, I don't know, we're gonna end up in 10 years because like, you know, you have people making $150,000 they can't afford a house and won't be able to afford a house for 20 years. Like,

I don't know, what kind of world have we built where that's the case, 

</p>
<p><strong>Ryan Burgess</strong><br />
it's hard for me to be say like, Oh, it's the most amazing place because there's also some of these things that it's just a different world. Yeah. Alright, but I like that. You put that one out there. The top one. All right, I got one for you. electron. Ooh, I mean, even if you haven't built anything in it, I mean, it It's a wrapper to now allow you to write application on the desktop with just writing JavaScript.

</p>
<p><strong>Jem Young</strong><br />
I'm gonna say overrated mainly, I think you know why, because Slack, apologies a slack. We use it for lots of things. And we know some good people that work there. However, I think if you're gonna IPO is like a multi billion dollar company, build a native app man, for the love of goodness, like build a native app, like stop rapping web views and electron and call it a day, it's just, it's not gonna be as performant as writing Objective C or C sharp or like a native native code. And I think electron works is like a good MVP. Or if you're building a prototype, or you're trying to scale up, it's great for that. However, it's not the end all. Like you're investing so much time in like making electron more performant. When you probably should just start with a native app. You should have just paid that cost.

</p>
<p><strong>Ryan Burgess</strong><br />
I'd probably go with to put it in the bucket of overrated. I think to your point, starting with it is amazing. Being able to just allow someone to build Do something prototype. Or maybe you just need a small application on desktop. And you don't want to invest a lot of the effort to make a full native application on Windows and on Mac. Okay, well, now we're writing two different languages. So it kind of gets that cross platform. But that's a solution for a short term. Or maybe that is a solution for years. But I think at scale to the performance side, it becomes a very hard thing to support when you're a large company. So I think it's like, but I go with it. It's overrated. But I also think it's a it's a great tool just depends. You have to ask when's the right time to use it? Yeah, it's similar to the look, the debates we've had about writing native apps versus web view apps or React Native and like, he definitely fits in that bucket. So it works in the getting but it doesn't necessarily scale out. And I've definitely had plenty performance issues now with electron apps like Slack, which they can eat up a lot of resources. Really, really quickly, like it just wasn't built for a lot of the use cases. Alright, before we get into picks one last one. All right, let's let's end MPM. Ooh, overrated underrated.

</p>
<p><strong>Jem Young</strong><br />
That's a good one. underrated, underrated because whenever something goes wrong, like, someone deletes a critical package, or someone gets a hold of a repo, really popular package, and like inserts malicious code, and like, everything goes down. It's like, you know, the web freaks out, we see how dependent we are on this like infrastructure that NPM is like, really pushed ahead. And we see like, almost every company web company is dependent on NPM. And yeah, underrated. I don't think NPM and Laura get enough love. Like for all the work they've done for like the entire community.

</p>
<p><strong>Ryan Burgess</strong><br />
Imagine our lives without NPM I think back to the days of copying and pasting code like that, to me. It happened. It happened lots and MPM was a big thing that just allowed not have to do that is like, hey, I want to build something that's more modular. Well, yeah, you can just npm install that and start using that. I think that to me super underrated and they do it for free. That is true. Like, if I want to make a new package tomorrow, it doesn't cost me anything. Yeah. And it goes, it goes back to the open source. It's just like, anyone can write a package. You can write something very small, something very large. Doesn't matter. You can use other packages in your package. Well, it's like, very accessible to to everyone. I think that is a nice thing, too. Yeah. And they've never been greedy about it about like, you've reached your limit on this. We're gonna cut you off or try to sell you on all the things. No, I respect MPLS company. Yeah, for sure. That's a good one. And All right, well, let's do our picks for this episode. Jem, what do you have? I only have one pick today. I'm gonna pick the Netflix show. losers. Initially, I I was not gonna watch it. I'm like, Ah, it's boring. Like I don't care about people losing or that's depressing or something like that. I want Like uplifting it's

a documentary too, right?

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's, it's a series but it's a like every episodes like its own encapsulated documentary and a certain sport or individual. I got, I started with the one on you're gonna love this, the curling one about how,

</p>
<p><strong>Ryan Burgess</strong><br />
like the game of curling has changed in the past 20 years because this team of people, they're in the finals and they lost and they're like, how can we lose and he he like, he went back and he really, really thought about it. And he like, made curling into professional sport where like, you're more tactical, you have people that are better at this better at that and like, completely changed the game, all because they lost and then it's really a story about like how people lost and then some big event and you think that's the end of the story because we only care about the winners like right, tell me who lost the presidential race or tell me who lost who came in second place at the Olympics like no one knows, and that the person who won isn't thinking about how they could have done it better maybe but like, no, they've done on it. Yeah. And but that loser part, what did we do wrong? And what can we do better than next time? Exactly. And like every time these people lost like, people consider at the end, but they they managed to take that learn something and then like, completely change your life in a way that they couldn't have had they won. So it's pretty good documentary series. That's awesome. I haven't watched it yet. Um, you've convinced me I need to. Alright, I have two picks. I'm gonna start with one that's a little more local to San Francisco. But my favorite coffee shop is Martha and bros coffee. There's a couple in the city, but I always go to the one in Bernal heights and like I just love their coffee. I'm like kind of dependent on it now. It's really good. And so you get sponsored. Even when I find when I'm traveling, I'm like, Oh, I miss my coffee. And so yeah, but if you're in San Francisco, check them out. And then I have a HBO Original Series season three of True Detective. It was such a cool story. Definitely highly recommend it. And it's cool too is you don't have to watch every season. They're crying. stories but they run independent of each other. So if you didn't watch one or two in musical watch three, all three of them are good, though. Wait, do you thought second season was good? A second season wasn't as good. The first season was really good. It was good. Yeah. And second wasn't as good. one and three are really good. Yeah. So. So don't get discouraged if you didn't like season two. Season Three is very good. Jem, where can people get in touch with you?

</p>
<p><strong>Jem Young</strong><br />
I'm on Twitter at <a href="https://twitter.com/JemYoung">@JemYoung</a>. 

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm on Twitter at <a href="https://twitter.com/burgessdryan">@burgessdryan</a>. Thank you all for listening to today's episode. Subscribe to front end happier podcasts on whatever you like to listen to podcasts on. And follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words Jem?

</p>
<p><strong>Jem Young</strong><br />
Captain Marvel, the movie overrated?

</p>


  `;
  return transcript;
};