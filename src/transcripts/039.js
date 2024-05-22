module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Hello everyone, and welcome to a brand new episode of Front End happy hour. This is episode 39. And we are joined by Stefan Stumpfl and iOS developer from LinkedIn. In today's episode we will be discussing the popular iOS language Swift. Stefan, you want to give us a brief introduction of who you are what you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Stefan Stumpfl</strong><br />
Yeah, sure. Thank you. Thank you for having me today here. Happy to be here. So yeah, my name is Stefan. I am actually from Austria just moved over here to San Francisco about a year ago. It was last year October, I started working at LinkedIn as an iOS developer, and I'm on the same team as Derek now we are working on the LinkedIn learning app. And I'm doing mobile development since about six years, doing like writing apps for Apple since 2012, basically, so I have some experience with Objective C as well as swift. My favorite beverages, that's probably boring because it's just beer. But I have to admit, I really got into sour so here's in 70 us like I tried my first sour beer like a year ago, and it was it was disgusting. I couldn't I couldn't drink it at all. But now it's one of the became one of my favorite beers over here. It's great. I like it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. And each episode of the front end Happy Hour podcast, we like to choose a keyword that if the keyword is mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is? Alright, Xcode. So if any of us X code, we will all take a drink. All right, well, let's get started. Let's start off by what is swift

</p>
<p><strong>Stefan Stumpfl</strong><br />
Swift is the latest programming language introduced by Apple. I think it was announced at the dub dub DC 2014. And like I heard that the main the leading engineer on it was Chris Layton, I think many people are familiar with this name he's working for or he was working for Uber now. He started working on Swift at Tesla. So he's he started working on Swift with his team around 2010. At least like that's what that's what people thought they were whatever telling. And, yeah, it's supposed to be it's supposed to replace object to see, sooner or later, I guess like it's still I think many of Apple's own apps are still written in Objective C, many companies are still writing their apps in Objective C but still allow like, or now I guess Swift is at a level where you could easily adapt it where anybody starting a new app on any of Apple's platform switches to Swift as the main language to go with?

</p>
<p><strong>Ryan Burgess</strong><br />
Can you not have Swift and Objective C in the same application? Like it doesn't have to be just Swift?

</p>
<p><strong>Stefan Stumpfl</strong><br />
Yeah, that's true. So they did a pretty good job, but supporting both at the same application, it still to a certain level, it can get annoying. So it's way easier if you only have swift to deal with as an engineer, as a developer. But it would be always possible to deal with both. And like, I think they did a really good job at supporting both.

</p>
<p><strong>Ryan Burgess</strong><br />
Now that makes sense. And like, I mean, context switching, like as an engineer, you're not wanting to write two different languages, you may as well just have one. And everyone learns that and writes that one language. Yeah, totally.

</p>
<p><strong>Jem Young</strong><br />
So why did they create Swift was it. People just hated Objective C so much, and there's like less making the language or

</p>
<p><strong>Stefan Stumpfl</strong><br />
I think, at least from from my perspective, back then, like in 2013, or 14, like, I didn't know that there is something like swift coming, and nobody of my friends back then who were like, iOS engineers knew either. So it was something pretty, pretty exciting. And I guess, like, I never liked Objective C I came from I came from a C perspective, but then I did mostly C sharp or Java. And I felt like those languages are just more more abstract and a higher level, and they are way more user friendly. Right? That's for a developer.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I can think of like two reasons. And I don't know if they're correct. But one is, is the type safety is is a lot more of a focus on Swift and Objective C. So a lot of like, I think a lot of causes for crashes and stuff in Objective C is just or bugs in Objective C, it's just the fact that a lot of its dynamic and a lot of it uses like, I think like a lot of string yellows to Yeah, totally. And so you can get a lot of bugs and stuff like that. So I think that was one thing. I think the other thing that I think we're gonna talk about this later, but I think the other thing that Apple seems like they're trying to do is really read is really reaching like kids that are like new into programming. And I think like Swift is like they're, they're kind of like, like, a lot of what a lot of like the tools and stuff around swift are seem to be built with that in mind. So they had this thing called playgrounds in Xcode. Sure shares they've playground so that you, it's pretty cool because it also supports Markdown and you can actually build like pages of documentation and training just through this playground as part of Xcode. So, I mean, not that you couldn't do that before with Objective C, but I think it's I don't know if that was that was an incentive for them or not. But it seems like it's a focus. I think it's a lower barrier

</p>
<p><strong>Ryan Burgess</strong><br />
to get into

</p>
<p><strong>Stacy London</strong><br />
definitely, yes, a higher level language than Objective C. Let's just abstract more.

</p>
<p><strong>Stefan Stumpfl</strong><br />
Yeah, it does. Yeah, that's like objective C's is way more on the level of C++, I would say. You have to deal with pointers and swift like it abstracts this away for you to easier to deal with Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know if this is actually a true statement. But even looking at Swift, it reminds me a lot more of something coming from a JavaScript background, it does actually remind me more of JavaScript. And I even remember seeing an article saying that, that was a reason for writing Swift is to be a little more like JavaScript. I don't Yeah, I think that's the case. But

</p>
<p><strong>Derrick Showers</strong><br />
well, it's a new language, right? And so like, they're obviously going to take the best parts of, of what's popular and JavaScript is extremely popular. So like, closures, for instance, I think they've taken that concept from JavaScript didn't exist at all. I don't think in Objective C, right.

</p>
<p><strong>Stefan Stumpfl</strong><br />
There were blocks, which is basically the same thing. It's just a different syntax. I don't know if that JavaScript too much. But yeah, I agree. They took like, they took just the best of many programming languages. And I'm pretty sure JavaScript played a big role as well. Yeah.

</p>
<p><strong>Jem Young</strong><br />
Yeah. Before I'd not heard good things about Objective C, it was just like, people had to learn it, because it was iOS, things like that. But you wouldn't use it for any other language. Like you wouldn't use write any other software in Objective C other than iOS based stuff, or Yakko, Essbase stuff as well. That's

</p>
<p><strong>Derrick Showers</strong><br />
a cool thing. I think. This is another thing we can talk about later. But I think we've talked about now, Swift, they're really trying, especially since it's open source. I mean, that's a big difference between Objective C two, right, so So now, even, yeah, so now people can write the right apps that that there's server side swift that is, I think, IBM, and what's the, there's a couple of big companies that are like, behind server side swift frameworks that you can actually write a web server and swift. There is like, rumor that maybe it would eventually make it on Android. I don't know. I think they just announced a new language. So I guess that's not gonna happen now. But But yeah, it's cool that it's possible for that to happen with Objective C, that wasn't possible.

</p>
<p><strong>Ryan Burgess</strong><br />
That's that's pretty awesome. Yeah, I think. I mean, I don't know if you've ever written any gym like Objective C? Nope. It scared me. I remember, like first like time looking at it. It was, well, I want to say I want to build like iOS came out in the app store, like back on the first iPhone or second, whatever the App Store came out. And I'm like, oh, man, I want to write apps. And I wrote like, something really small. And like, it was so so hard to get up and running on Xcode, and Objective C, it was not fun. Cheers.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I had the same experience. Like I said, I've been doing web development for my whole career. So I have no experience outside of that building, you know, like native apps and, and that kind of thing. But I took this like, workshop to like, learn Objective C build, like a Hello World app. And it was like, Oh, my God, it took us six hours to do Hello, world. Why is this so hard? I could just five seconds in JavaScript.

</p>
<p><strong>Ryan Burgess</strong><br />
So like, in a browser, you just throw that out? Yeah. All

</p>
<p><strong>Stacy London</strong><br />
this? Yeah. I'm sure there's like there was a lot, there were a lot more benefits to it. And that's what's cool

</p>
<p><strong>Derrick Showers</strong><br />
too about them to play or not to harp on the playgrounds, but the playgrounds are really cool, because you don't even need to create a new app, you can just open up

</p>
<p><strong>Ryan Burgess</strong><br />
Xcode, Xcode.

</p>
<p><strong>Derrick Showers</strong><br />
And get started immediately. Like, I mean, you can do network, you can try like network requests, like you can do anything you could do in a normal app. And it's super easy to get started. So why did

</p>
<p><strong>Jem Young</strong><br />
like Stefan and Derek, why did they go with Objective C? Because it's literally the only like, at the time was the only company that using Objective C for anything. So why did they use that as their language?

</p>
<p><strong>Stefan Stumpfl</strong><br />
Objective C was basically built by Apple, right? So it was still back then when it was called next systems. I think that's where like most of the classes in Objective C in or in their cocoa framework, we are prefixed with ns. And like, I think it was even built in parer parallel with C++. So it's like a long time ago. That's what they built. And for sure, you would use your own language then. And I guess like after many, many years, they realized it's not like state of state of the art anymore, and they should come up with something new and easy.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, they and they were doing it for Mac for a while, I guess. Like we keep talking about iOS, but they were doing it for Mac a lot as well. So it was like being used for like Objective C was being used for Mac and so they're like, Oh, well, iOS, let's do the same thing. I'd be interested to like, as especially like, Stefan, you've been writing Objective C and writing Swift. What are some of the differences between the two

</p>
<p><strong>Stefan Stumpfl</strong><br />
so many things actually still the same thing right? still based on the C runtime. So that's the reason why you can work with Swift, Objective C or any other C language in the same project that still supports automatic reference counting, meaning there is no but no garbage collection. Like, there's many, many similar things. And I think mostly the new things are, it's way simpler, it's way easier to use the tried really tried to get rid of, of things in a language which just you don't really need, right being it like a sim, sim semicolons, or pen paranthesis. And all those things. It's way safer to use. It's like, type safe, or like it's strongly typed. Its supports type inference from the compiler, which means you will never have to deal with types actually anymore. You can make any mistakes. One huge things options, I would say like options exist in Java, I think they did exist in C Sharp, but no real or backpack 10 billion people were using it. And now it helps you just get getting rid of anything. I'll point the exceptions, you wouldn't see them in Swift anymore at all. Because you never you basically always know if something is now or can be now. You had other things Derek, would you? What would you say?

</p>
<p><strong>Derrick Showers</strong><br />
No. But coming from JavaScript to Swift, the no semicolons and no parentheses? Do you like that? Or do you mean I'm used to it now? I doesn't

</p>
<p><strong>Ryan Burgess</strong><br />
know. But at first, like, I feel like that would bother me at first, I would probably always be adding them.

</p>
<p><strong>Derrick Showers</strong><br />
I was always out. Yeah, yes. Stefan knows from like my pull request.

</p>
<p><strong>Stacy London</strong><br />
Do they have the equivalent in like JavaScript plan of like, linters? That will be like use a semicolon? You should probably not You

</p>
<p><strong>Derrick Showers</strong><br />
mean an X code? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
And

</p>
<p><strong>Derrick Showers</strong><br />
they do, but they're not super apple. I guess it's it's in the newest newest version of that application.

</p>
<p><strong>Stacy London</strong><br />
Application? Do you mean Xcode?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, the latest version, I guess they've opened up a lot more in the but in the ability to like build add ons and stuff. But right now it's or previously, it's been pretty bad. So my point is, there's there is linters. But they're, I think they're not great compared to at least compared to like es lint and stuff. In JavaScript. Like that's much more robust than

</p>
<p><strong>Ryan Burgess</strong><br />
what you can get and correct me if I'm wrong, but I've also heard that Swift is a lot slower to build. Are you guys finding that between like Objective C and Swift for your build time? Just

</p>
<p><strong>Derrick Showers</strong><br />
a bit?

</p>
<p><strong>Stefan Stumpfl</strong><br />
Similar thing, I guess, but it's like, that's probably not Swift, Swift towards that's probably Xcode. 10. Right. Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
But is it Xcode though, cheers. If it's he, I guess it's both but because like you're saying Objective C is getting built through it as well. So is it Objective C that Sastre?

</p>
<p><strong>Stefan Stumpfl</strong><br />
Or I guess you're right, I guess it's probably both to us to a certain level. So they're definitely making improvements at the compiler level to deal with issues they're seeing with Swift compiling. So for projects at scale, I think we have like, really big problems building Swift, even with our code code base, which is still way less than flagship app. But like for that code base, it's on a 15 inch MacBook, it takes about half an hour to build the project, which is ridiculous. That's

</p>
<p><strong>Ryan Burgess</strong><br />
crazy. Like, especially coming from a JavaScript world. We're like, we don't deal with that. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
Like they recently sent a survey out to iOS developers at LinkedIn. And I would say that, like, everyone would prefer to prefer, I mean, let's say 99% of people would probably prefer to write swift over Objective C. But when you add in the build time problems that that's when that percentage drops. I mean, I think, a large percentage of people that still would rather write swift and even deal with that, for sure. But yeah, I mean, that's, that's the definitely the breaking point for

</p>
<p><strong>Ryan Burgess</strong><br />
I know, Apple's also talked in, like, this year's dub dub DC is they've actually talked about that. They're speeding that up.

</p>
<p><strong>Derrick Showers</strong><br />
They Yeah, I mean, they're very aware of that's what's cool. And it's cool. There's open source now. So like, anyone can help contribute, yes. And where, you know, the compilers open source. So like, you have the ability to fix it, it's just, it's just gonna take time. It's

</p>
<p><strong>Stacy London</strong><br />
like, it's, that's not an average full time. Like, I'm guessing that's a build time for a fairly complex app.

</p>
<p><strong>Stefan Stumpfl</strong><br />
Like the flagship, it's, it's huge like is probably one of the big apps using Swift. And we are also in contact with Apple to helping them like reporting issues helping them to improve this.

</p>
<p><strong>Derrick Showers</strong><br />
More average is probably like four to five minutes, maybe like,

</p>
<p><strong>Stefan Stumpfl</strong><br />
and that's a clean build. Like, that's right. You wouldn't always do a clean build. But yeah, I guess on average, you would wait like five minutes. For smaller for smaller projects. It's not a problem at all right? It would build within like, a few seconds or minutes. And it's fine. You wouldn't even like

</p>
<p><strong>Stacy London</strong><br />
yeah, I was curious. I think the size of like, codebase. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I mean, coming from like, coming from from web to iOS. It's, it's different. Because it's like, you would think like, oh, if I have to wait five minutes for the webpage to reload after I make a change, obviously, to be able to do my job, but you obviously have the compiler to help you out with a lot of stuff. So you can write code for a lot longer than what you can write Java Script normally, right? Because you can you can get a, you know that you're not making mistakes as you go right? I think it's only a pain when you're doing a lot of UI work. And you're dealing with like, laying like layouts and stuff like that, that you actually need to see, you know how the compiler helping you in that case. So Apple has, or Xcode has, here's the concept of a storyboard, which is kind of their version of CSS and, you know, constraints and stuff that you can to lay everything out. You can visualize it somewhat on the storyboard. But sometimes you have to build the app to like, you know, figure out what's actually happening. And and that can be annoying. If you have to wait a couple of minutes every time you make the change. So

</p>
<p><strong>Jem Young</strong><br />
sort of Swift make it easier to build UI, or does that not matter? The like, the the language matters,

</p>
<p><strong>Stefan Stumpfl</strong><br />
it the certain level, like if you do it an interface builder, where you have basically a graphical interface to compose your UI doesn't matter. But if you would sell if you were to encode, it's getting easier with Swift, just because the language is easier to write. I think what you mentioned, Derek is a really, really big point. Like, if you just keep on writing code without executing it once without even building like with Swift. For me, it was, I think, when we had our act, I was coding for like, four hours without trying it ever. Because it wasn't possible. You just built some, some backend stuff you didn't write tests for it was just a hack. And in the end, it wouldn't crash at all right? It just works. So I've never had this with Objective C or any other C language, you would write some code for a few minutes, then you start it, you you build an execute, and it will just crash, you will find issues. But it's it's super safe, right? It's like strongly typed, the compiler will tell you everything the compiler tells you about every problem. It's really hard to actually make it crash by not point exceptions or similar things.

</p>
<p><strong>Ryan Burgess</strong><br />
That's that's super useful. Honestly, getting those like responses, the errors, like right away is huge. Yeah, I guess like so some of the good parts, like we've already mentioned, some of them being able to have it strongly typed.

</p>
<p><strong>Derrick Showers</strong><br />
optionals I think optionals are probably the the number and what are optionals. Stefan explained it a little bit, but it's essentially you if something is an optional, you know, whether or not that has the, that could be null or not. So like, it's just it's, it's more readable. You Yeah, you don't have an all pointer exceptions that you would in Java. So like you can tell right away and like, so essentially, the compiler forces you to what they call unwrap an optional. So basically, like, you have to put it in a conditional it says, If this is not nil, essentially, then give me this but you know, like, and then if you if you try to use a value that is not an optional, and you know, the whole app will just crash right away. So just have that safety.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've talked about some of the good things, but like, what are some of the pain points? I mean, we talked about so Bill time, I think that's probably sounds like one of the biggest ones. But what are some other pain points that you've had jumping to Swift, whether it's, maybe it is from JavaScript, but or even from Objective C?

</p>
<p><strong>Stefan Stumpfl</strong><br />
I think, for us, or for me, it's mostly the process of migrating things. So when we started working with Swift, it was kinda early. And I would say, even within the first two or three years, for swift, it's early. And, like, from Swift, one to two, and then from two to three, it was probably the biggest step, they made a lot like the most changes, which were breaking, and you had to do a big migration process. So I think that was the biggest pain point. But that's something which is a thing of the past. Like right now. They're working on Swift for which I want to introduce mostly, like, there's still some breaking changes, but it's minor, and it's mostly fixed everybody auto migration. So I think those things are resolved. And I wouldn't, I wouldn't see any issues regarding other languages I've worked with which swift actually still has

</p>
<p><strong>Ryan Burgess</strong><br />
one. I think that's, that's a common thing you'll deal with anyways, like, if you're migrating to another language, it's, I mean, that takes work, it doesn't really matter. It's not really necessarily something for Swift or Objective C, it's like any language that you're migrating to. It's that takes time to actually do that migrate. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
think the difference though, is that your is that is a new language. So there's lots of when you're migrating even, like when you're like Stefan said, when you're migrating from Swift, two to Swift, three, there's lots of breaking changes, there was a lot I do remember, a month to migrate. And we have a pretty small app. So yeah, I think that's definitely challenging. And Apple kind of forces you to do that, like you're, you, you essentially have no option. I mean, you have somewhat of a some breathing room and time, but like, if you don't migrate to the latest version of Swift, you're not going to be able to use you're not gonna, you're not gonna be able to build for the latest version of the

</p>
<p><strong>Ryan Burgess</strong><br />
iOS, which is terrible, too, which is kind of scary. That's actually one of my Holbox on it and I know we've even said Objective C is a pretty like Apple heavy thing anyways, but tied to Apple and Apple pulls everything

</p>
<p><strong>Derrick Showers</strong><br />
in a way though, I will just to play devil's advocate a little bit. I will say it is kind of nice that you're forced to do that, especially in a larger company, where like when I was on web, you know, we were Ember and we it was very hard to convince product and stakeholders that we need to upgrade the version of ember. So like, at least when you have, like an actual, like, you have to upgrade this, at least you can keep your and it's insti advantage to keep your I mean, even for developer happiness, but for other reasons to to keep to keep up to date. So it's like you're forced to so it's like, good leverage. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
take take advantage of the new feature. Yeah, it's like, well, guess what, that's only available with four, you're on Swift three will

</p>
<p><strong>Derrick Showers</strong><br />
try to like, allocate time to upgrade Ember and are like, Okay, why do you need to upgrade ember? Well, because this may be a security issue, but, you know, it's like, you know, you try to like, read grasper stalls and you know, but but if you say, well, we're not gonna be able to support the latest version of the of the iOS, if we don't upgrade, then, you know, you have a lot more leverage.

</p>
<p><strong>Stacy London</strong><br />
I'm curious about this with like, I've never done native development, if, let's say you're a big company, you have like a suite of apps, and you all need them to look sort of similar. And in the web area, you can in theory, and develop some sort of like componentized system and has like, you can consume this component and has like the same look and feel. How does that work in the native and like the object? Objective C or Swift world? Like, is there something

</p>
<p><strong>Derrick Showers</strong><br />
similar? Very similar? Yeah, you can new have components, which are, you know, probably a class or something. And then you have an associated view. And you can package those up into cocoa pods, which is equivalent of NPM cocoa

</p>
<p><strong>Stacy London</strong><br />
pods. That's better. I love it.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, it's almost the exact same, which is nice.

</p>
<p><strong>Jem Young</strong><br />
So Derek having having written both, what do you prefer? write JavaScript or write Swift?

</p>
<p><strong>Derrick Showers</strong><br />
I'm really liking Swift. Really? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
You've given up on the JavaScript.

</p>
<p><strong>Jem Young</strong><br />
Front and half. Yeah. I don't come

</p>
<p><strong>Derrick Showers</strong><br />
from a I didn't go school for computer science. And I this is really the first time I'm working in a language that has a compiler and that you know, is type that has type safety and all that stuff. So I mean, it's different for so maybe I'm still in the honeymoon stage. But I really like it's

</p>
<p><strong>Ryan Burgess</strong><br />
been what a year now. Yeah, yeah, that's, I think you're past the honeymoon phase. That point

</p>
<p><strong>Stefan Stumpfl</strong><br />
I think it's actually it's getting better like you have like whatever issues we faced, they're mostly they're resolved with the latest. With the latest Xcode, it's getting better and better to work with Swift. Cheers. So I think like I don't think there are many things to complain about the language anymore. Was great idea to open source it for sure. Absolutely. I

</p>
<p><strong>Ryan Burgess</strong><br />
think that was one of the best ideas that they had was actually make it available.

</p>
<p><strong>Stefan Stumpfl</strong><br />
And it's like an unusual thing for Apple, right? It's, that is not

</p>
<p><strong>Ryan Burgess</strong><br />
something that normally happens from Apple's it was a really smart

</p>
<p><strong>Stefan Stumpfl</strong><br />
move.

</p>
<p><strong>Jem Young</strong><br />
Is it that Swift is getting better or Xcode is getting better to work.

</p>
<p><strong>Stefan Stumpfl</strong><br />
So cheers, cheers. Cheers. When they introduced swift like Xcode, I'm sorry. And Objective C work pretty well. But then with Swift there were like, probably so many new things, right? I wouldn't even know like, I don't have that deep knowledge. But we didn't really work that good. Could we get that good with Swift anymore? And now at a catching up since Xcode six, they're improving and improving? Cheers, cheers.

</p>
<p><strong>Derrick Showers</strong><br />
Someone got him off.

</p>
<p><strong>Stefan Stumpfl</strong><br />
And yeah, the latest one is really looks really good. It's still beta. It's but it's looks great. Like, they made a lot of improvements.

</p>
<p><strong>Ryan Burgess</strong><br />
So and obviously, like LinkedIn, large company is using Swift. Should companies be jumping on the bandwagon of Swift? Like, is it ready as a language that other companies large companies should be jumping on it? Yes. Yeah, I agree. And what how would you convince them of, hey, you should be using this versus like, someone who's like, there's a lot of apps out there that are Objective C, why would they migrate to Swift? I

</p>
<p><strong>Derrick Showers</strong><br />
mean, we were I guess we were in LinkedIn was in the in somewhat of a convenient where we rewrote. Like, our UI completely changed as well. So like, we rewrote everything web included. So I guess that was kind of an advantage, right? We were already building a new app. And so we could so like, if you don't have that flexibility? You know, I don't know. I don't know how you justify it, I guess to answer your question. But I think the other thing, though, that maybe you could use to justify as is the ramp up time for people that are new, especially people that are coming from, like, from my own experience, people that are coming from web or other or Android or back end or whatever, you know, and I think it's much easier to pick up then then I would assume that Objective C is

</p>
<p><strong>Stefan Stumpfl</strong><br />
Yeah, I agree. Like it's more similar to other languages, which are like very, very popular right now. So it's easily easier to pick up. I also think even for people who would like As for myself, even for people who would like to develop or who would know how to develop in Objective C, they would still prefer doing it in Swift. And I wouldn't know if I still want to go back to do Objective C because I just loved writing code in Swift, right? So I think to attract like, good developer and and like a lot of good developer, it's probably really important to P always to always work with the latest In greatest,

</p>
<p><strong>Derrick Showers</strong><br />
especially as more companies are adopting it, right, so like your work for a company like us, who is writing in Swift, you're gonna essentially miss out on. I mean, not not us, because we're not that good. But like, if there's somebody that was good you would miss out on that good talent. I mean, I shouldn't say that you find

</p>
<p><strong>Ryan Burgess</strong><br />
that like, let's put the build aside, like build time aside, because we said that's a little bit slower. But is do you find your development time faster writing in Swift versus Objective C? Because I think to me, that would be a big selling point for an entire team that switch is, Can you be more productive? So let's, you know, if we can fix the build time issue, that might be a big thing that's coming later. But if you can develop a lot quicker, like do you find that is there a difference in that?

</p>
<p><strong>Stefan Stumpfl</strong><br />
I think I think that's so true. You need less code, you it's easier to onboard new people, you need less code, it's more clean, more readable, which means it's also more maintainable. It's way less error prone, which means you would introduce way less sparks. So in the long run, it's really hard to compare, right, you might lose some time, because there are certain issues at the beginning while writing code when compiling, when re compiling all the time. But then in the long run, I think you would give definitely win like you would, it will take you less time to write good after.

</p>
<p><strong>Stacy London</strong><br />
So that's coming from like the web side of things. If you do like responsive design, you can kind of write, like sort of one set of code that like will adapt itself to different screen sizes. If you are writing Swift, do you this is absolutely my like ignorance of writing native apps. Do you have to write two code bases to do something for like a smartphone size? And then like an eye iPad size? Or is it one set of code that kind of adapts itself?

</p>
<p><strong>Stefan Stumpfl</strong><br />
No, it's a good question. It's, it doesn't really matter for the language actually, that's baked in, in Xcode in in the cocoa cocoa library. And there is like this concept of constraints, which means you would always design the respective to like not specifically to one size, you would always use constraints, which would adapt based on the screen size, meaning you would, and you would mostly do this in an interface builder, you would just use like a graphical user interface to, to compose your user interface, define those constraints, and it will then adapt to different sizes. So that's pretty easy. But that's the same concept with Objective C and Swift. It didn't it didn't change at all, actually.

</p>
<p><strong>Jem Young</strong><br />
Does the mobile team at LinkedIn, multiple languages, because I find that's increasingly common? Like, if you do Swift, you probably do some Android as well. Is that true? Are you you guys like exclusive?

</p>
<p><strong>Stefan Stumpfl</strong><br />
We like we wouldn't switch teams all the time. There are definitely some people who would have done Android and they do iOS, but for our team, sterile iOS engineers and our their Android engineers, and we don't really switch. This doesn't mean you wouldn't know anything else. But you are mostly bound to this role.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think that's an interesting question. Now, I have heard that it's even come up on our team. And I just I'm not my opinion, I don't agree with it. I think that you, I think you can do it. But I think it's the same problem I have with a full stack engineer in that, like, You're sure you can, you can know, both both Android and iOS and back end, whatever. But like, you're not going to be an expert at the intricacies of the platform, and that there's so many things that are so Apple specific and are so Google specific. And I think it's just, you know, so maybe you can have maybe you have a balance, maybe I you know, maybe there's there's some people on the team that are that are specific iOS, and they're like the experts, and everyone's making sure that the code that gets into the repo is, is what it should be an ending. You know, there's some that can like, go back and forth to like, be that, like, I don't know what you call that person. But But yeah, I just I don't know. Maybe it's something that I just haven't agreed with. And it's the same thing. I think it's, it's exists on web where you have like, somebody that goes from databases to writing CSS, like,

</p>
<p><strong>Jem Young</strong><br />
yeah, I guess, if there were a universal language, like, say, Kotlin becomes the newest thing, or Swift for Android becomes the newest thing. Would that help? Like, would that make it easier

</p>
<p><strong>Ryan Burgess</strong><br />
to do you think that would ever happen is with becoming something for

</p>
<p><strong>Derrick Showers</strong><br />
it? I guess the best, the best example would be like something like React Native. Yeah. But I just don't think it's gonna happen. Like, it's we've been, we've been faced with this problem for for decades, right? Like PC and Mac are like the best examples. And like, that's been the problem forever. Now, it's a problem with mobile, but it's the same problem that we've had for a long time. And just I don't know that it's, there's, you know, even with something like I played I've dabbled in React Native, and it's cool. And it's great for some things like if you're, if you're reading this, I mean, this we could do a whole episode on React Native, but if you're writing an app that's, you know, like a, like, for an agency or something, you just need to get something quick across web, Android and iOS and React Native is great, but if you're trying to do something real immersive English, you have to go native, I think.

</p>
<p><strong>Stacy London</strong><br />
Yeah, the Hybrid Hybrid mobile story seems to be like, fairly low interactivity is fairly fine. Like,

</p>
<p><strong>Derrick Showers</strong><br />
yeah, it's just you know, you have a middleman. So like you're dependent on that middleman to to and especially since Apple shade, especially with Swift, you know, apples changing things so frequently that it's just really hard to keep.

</p>
<p><strong>Ryan Burgess</strong><br />
So there's a good example is like React Native. If swift decides to add some new feature, while React Native is another library that has to now build on top of that, like, they have to say, Oh, well, Swift and Objective C support this new feature will react native doesn't at this point. So they have to add that in, you may actually have to wait and that could hurt you or your business of not being able to take advantage of that feature right away. So I got me some advantages of being full native at that. Really,

</p>
<p><strong>Derrick Showers</strong><br />
there's issues if Facebook hasn't even written their app and React Native. I mean, I know they have parts of it. I mean, they like most of the US react most most of their native app is not React Native, I think only the events are. It's the events part in the groups bar, but like the, the maybe maybe not events, but groups is probably one of their lowest trafficked parts.

</p>
<p><strong>Ryan Burgess</strong><br />
One I think, like, yeah, I don't want to get into too much on React Native, because you're right, we could probably do a full episode on React Native. But I think there's one nice thing is you can leverage something like Swift or Objective C, or if you're on the Android side, you can use Java with React Native. Yeah, that's, that's cool. It's also another library that you're adding to your download size like that, that that can be a problem, too. Yeah. Which is

</p>
<p><strong>Derrick Showers</strong><br />
a problem, especially lately, there's been some hadn't if you saw the, the, I think, actually you shared on Twitter, maybe recently about like, binary sizes. And yeah, it's craziness. I saw this, this story about how this guy did his research on like, all of his apps, and all the upgrades and all the upgrades, or all the updates on on his phone. And it was something like 10 gigs of data in a month of just app updates, you know, which is crazy, like, especially if you're doing that over cellular. A lot of people don't how you gonna have 10 gigs of data,

</p>
<p><strong>Ryan Burgess</strong><br />
I propose the question of like, does it prevent someone from downloading or upgrading like, does it do they look at that and say, Hey, this is 100 Meg's or this is 50. Meg's like, does that matter? Like does it prevent someone from downloading your app? If it does? That's a big deal.

</p>
<p><strong>Derrick Showers</strong><br />
I know like just recently at LinkedIn, our flagship app, just went over 100. Meg's and it was a huge thing, right? Like everyone, literally, they sent out an email saying, this work is more important than anything else, you're doing. Drop all other work. And like this is this is a huge like, we have to have this under 100. Because I guess I assume that's backed on research that would indicate that it is a mute people will not download your app, because that's when the threshold 100 megabytes just so everyone is clear. The 100 megabytes is where the threshold exists, where Apple won't let you download the app over it will ask you

</p>
<p><strong>Jem Young</strong><br />
I like I know. We don't want to talk about React Native but it's it's like hard to get a good gauge of like, should we use React Native or not? Because no offense to native teams like they were against it. But like it's kind of your job to be against? Because it's your job to write native apps, which like I totally support if you're like, we can write swift for websites, I'd be like hell no man JavaScript. So we know that, like we know, backwards and forth. But Derek is like, I think you're in a good spot. It's fun to like, is it worth doing? Or you're saying like, native all the way it's not worth doing React Native? Or?

</p>
<p><strong>Stacy London</strong><br />
Like, what about PhoneGap? And what about

</p>
<p><strong>Jem Young</strong><br />
Cordova? Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think those ones have always been hard. Like those are good examples were to me, like React Native is in a whole different ballgame of a lot closer to native development.

</p>
<p><strong>Derrick Showers</strong><br />
Well, it compiles to a binary whereas PhoneGap doesn't,

</p>
<p><strong>Ryan Burgess</strong><br />
to me like PhoneGap. And Cordova is a lot similar to like just writing to a WebView. So loading your HTML JavaScript through a WebView. And, and that will work and but it is a lot slower. Whereas React Native is a lot closer to the native layer.

</p>
<p><strong>Derrick Showers</strong><br />
I actually shameless plug I wrote a blog post about this not saying go and it's based on a video. So more more than the blog posts, check out the video. It's from a conference in Berlin, I think. And they, this guy does a really good comparison of like, why to use when to use React Native and when not to, and it's like a 45 minute video and highly if you're interested in this, I highly recommend watching that we can put in the show notes.

</p>
<p><strong>Jem Young</strong><br />
So as a company, what do you guys decide to do? What do you do anything and web views. And so like when you decide to make that call, it's like, let's just make this web.

</p>
<p><strong>Derrick Showers</strong><br />
I actually think that's a really good use case for React Native. So like, instead of a web view, you could do something like React Native, and especially if your team's already writing web team is already ready to react for us. We're on ember. So it's not fair. But um, but I mean, because web views are kind of shitty, right? They're they're always like, Oh, we don't have the budget to build this in native, so we're just gonna build something quick. And, for instance, on LinkedIn on the flagship app, all our settings are web views, just because, yeah, it's quick, we wanted to make it as frictionless as possible for people to add new settings, and no one wants that settings, you know, just did web views. But I think that would be a good case for React Native, because then you could build it and it would, you know, and you're getting Android and iOS. Yeah. And it would be a native experience.

</p>
<p><strong>Stefan Stumpfl</strong><br />
Yeah, same same might be true for the login flow for all authentication. Like, that's always kind of a pain. And especially if you have like, as we do in our enterprise enterprise use case, included, it's kind of a lot of work just to test to replicate this flow and carry on over planned and like to use it, you would usually see it just once, right? So it doesn't have to be like, perfect, super fast. I think those are really good use cases to go.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, and security based stuff is probably because you know what it is, like, it's so complicated that, you know, all of our challenges and capture and all that stuff is all with us. Just because enough to do it once.

</p>
<p><strong>Jem Young</strong><br />
I'm like, Oh, that makes sense. Yeah. Yeah, cuz that stuff like built in pretty easily. Whereas if you're included natively, it probably be a little heavier.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And I guess the other thing with this nice little view is, is if you need to make a fix, which usually when it's a security issue, you need to make that fix quickly. And the problem with native a lot of times is quick is not a a word that we

</p>
<p><strong>Ryan Burgess</strong><br />
know, it's called Swift. With a WebView, you can just push that on your own server, and it's gonna Yeah, like if you need an app update,

</p>
<p><strong>Derrick Showers</strong><br />
it's that was like, my biggest, biggest thing for moving from web to iOS is like, if you have a bug in your app, I mean, you're you have to wait, in order to get it pushed to get it approved by Apple. So you get it released, and then you and then and then it's up to people to have to update their apps. Right. So I mean, you're you're looking probably at least a week turnaround from the time you fix something to I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
but even your WebView in Apple, especially if you have something that doesn't fit with the Apple agreements, like the word

</p>
<p><strong>Derrick Showers</strong><br />
Android, we had word Android. That's perfect. our Help Center we had the word Android because it was it was Help Center for both. Yeah, iOS today. And they did not,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, they'll deny the app update. So even like, yeah, even though that's already there, it's through the WebView. It's been shown, it's like they will still deny you the ability to like release your latest app update from that has nothing to do with that little piece of the code. But you might have brand new features, they'll still

</p>
<p><strong>Jem Young</strong><br />
deny it. You can't use the word Android, it depends

</p>
<p><strong>Derrick Showers</strong><br />
on who you get, right?

</p>
<p><strong>Ryan Burgess</strong><br />
So you can't talk about other platforms can't show screenshots of Android devices. It's like Apple centric, it has to be like talking about iOS. And Apple's specific on the iPhone, and like iOS and Mac. So what Derek was getting to is that it's like, depending on who you get, well, yes, like some people in Apple will let it slide for a long time. And then you get some reviewer that may be new to that app like LinkedIn zap and might see it and go, nope, this is not going to fly. You've said the word Android. And you shouldn't say that here could refer to it as mobile. But you can't refer to it as Android and iOS. It's iOS or just multiple.

</p>
<p><strong>Derrick Showers</strong><br />
There's one guy at Apple that just really love to see people. Is it

</p>
<p><strong>Ryan Burgess</strong><br />
on a Friday to like, for the weekend?

</p>
<p><strong>Stefan Stumpfl</strong><br />
He's rotating an old apps, everybody will get him at least once.

</p>
<p><strong>Stacy London</strong><br />
God does that change? Like, I think about this a lot like, oh, like the web, like, oh, I pushed out something that has a bug like, oh, I can just fix that super fast. And we have our daily deployments like I can I can fix that tomorrow. Does that change your development process to like, do you feel like working in Swift makes you think about developing something more thoroughly? Like, do you think about test cases and edge cases and all that kind of stuff more thoroughly? Because you know, like, if there is a bug, you have to like, wait a little bit longer to get it out?

</p>
<p><strong>Stefan Stumpfl</strong><br />
Yeah, like definitely, I think that's a huge thing. So now the review times would have blurred like a day, which means the turnaround time might be still like two or three days. But back then it was like a week, sometimes longer. Sometimes it was a month, which means like, if there is an issue there, you might not be able to fix it, which means you need to make sure that you should have a really high confidence in your code you just wrote, which would be great if you just write enough tests, right. But then it wasn't always easy with this framework to have all these tests and still like it still requires a lot of time and but I agree that's that's a huge point. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
I mean, there's pros and cons. Obviously the con is getting something into production is a lot slower. But the Pro is sometimes is is. You know, when I on web, it's like sometimes you can fix something In a very hacky way, and that's just like, let's just do it and get it pushed out. Whereas you don't do that. I mean, because he's usually like you because it takes so long that usually that's not the option like it's usually fixed in a hacky way on the back end. But so that's kind of nice a year, you know, you have that a little bit of a defense, and you don't have to make these quick changes and push it out that day.

</p>
<p><strong>Stefan Stumpfl</strong><br />
That's a really good point. Like if there is a client that issue like still back and has to fix it, right? Because we can't, if there is any way for them to change something like, get us some other data to fix this issue. They will do so and your Can't you can find you have like another week to do. That's, that's for sure. It's a good point.

</p>
<p><strong>Ryan Burgess</strong><br />
So I think an interesting thing with because Swift is a new language. And you know, whether you're starting out from scratch where you've never learned a language before, or also, obviously a lot of even Derek and Stefan you've both coming from other languages. What advice do you give people that want to learn Swift? What are some things like where are some places that they can learn some advice that you'd give to get them jumping in and learning swift

</p>
<p><strong>Stefan Stumpfl</strong><br />
for me, like if you already, if you already did some development being it on Android or iOS, like if you only did Objective C so far, for me always, the language is always a smaller part, right? It's actually super easy to jump into any language, especially especially if it's like Swift, it's super easy to learn and to write that's read. So I guess like lots of really, really good resources online, like online education platforms you could use. Apple's own recommendation is usually really, really good. And I think like it shouldn't be a big deal to just learn a new language people are sometimes may be scared to try it, because it's they don't know the language yet. But I think it's like, you can learn it within days or a week, you're pretty good that you just go write code, and then you will write or you will learn by it while while while doing it.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. They're given advice, especially coming from the JavaScript community to writing Swift.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think like Stefan said, I mean, I have a couple pics, versus for some additional resources, but just jumping in and do it. I mean, I think the hardest part for me anyway, was just dealing with the Apple ecosystem, not necessarily the language itself, just all the intricacies and like nuances of Apple's frameworks. And so that can be difficult. But yeah, like Stefan said, Apple has a lot of good resources, especially for swift out there. So

</p>
<p><strong>Ryan Burgess</strong><br />
they're pushing it hard. Definitely, you can see it outside of the ecosystem. Apple is like putting a lot behind Swift, which is great. So it's not something that's going to just die and fizzle out. It's like, it's and

</p>
<p><strong>Derrick Showers</strong><br />
you can, like I mentioned earlier, you can write server side Swift. So like, if you don't want to build iOS apps, you can just write Swift. And, you know, maybe that'll take off, maybe it won't, but it's if nothing else, a good way to get into it and try something out. You know, you can write essentially, basically an express version of Swift.

</p>
<p><strong>Stefan Stumpfl</strong><br />
And there is there is I'm sorry, there's always the community, right? Like, I feel like community regarding anything you want to do for Apple is great. StackOverflow every answer, there's already Swift code for it. There was already like two years ago for most answers. So the community was really really fast and supporting it picking it up.

</p>
<p><strong>Derrick Showers</strong><br />
The best way to earn reputation points on StackOverflow. Right now, rewrite the question from Objective C to Swift.

</p>
<p><strong>Ryan Burgess</strong><br />
Which I'm sure that's a ton of questions right now. So as we wrap up the episode, each episode, we like to share pics of things that we've found interesting and like to share with the listeners, let's go around the table and share today's pics. Stacey, you want to start it off? Sure.

</p>
<p><strong>Stacy London</strong><br />
So I don't have any pics with Swift because I don't know that language. And I've never built anything with that. But I will give a pic that's related to web development. So earlier this week, I tried to get linting set up with our a repo with styled components. And so I got that hooked up, and which is really super exciting. Hopefully that will help everybody like write better CSS with our style components. And it's basically the stuff that was provided by this the creators of sound components. So it stylelint processor style components, they'll be a link to that in the show notes worked really well. And the second pic I have is a song by Maya Jane Coles called week. I'm not a big fan of house music, but she kind of does more like tech house or deep house. What I like about her is that she kind of writes in producing engineers and arranges mixes and does all the things even does some of the like artwork on her her albums. And I really liked that song. So

</p>
<p><strong>Ryan Burgess</strong><br />
awesome. Jem, what do you have,

</p>
<p><strong>Jem Young</strong><br />
of your few picks? First pick is I too suffered from poor Wi Fi in my apartment, even though it's like not that big. I think it's just a lot of signals. So I went with a company called plume they're based in somewhere in Silicon Valley. But essentially, instead of like one massive router and a bunch of mesh, it's just like a bunch of mesh points and they all talk to each other. It's not as fast as Ryan's like amplify, like I'm pure speed, but for latency. It's like one of the lowest on the market. And it's just a cool app. I've had a few issues but like the idea I think is really solid just you plug into a light socket in your room and like you plug a pot in every kind of room that you want solid connection, just it all connects and optimize itself. It's really cool. Second pick is actually music pick was my injury reserve cells called T KTV. One of my favorite songs like of this year, and it's like, I don't know, it has a lot of movement to it, it changes it drops out on you, and just it's really unexpected. It was like, it hit me from my Spotify weekly playlists on the way to work. I was like, This is amazing song. It's like seven minutes. It's pretty solid. And I wanted a swift pick. So my pick is actually gonna be billed for his travels the book by Jonathan Swift. So good read, you know, you guys should all pick that up. It's nobody's laughing this room. It's very disappointing.

</p>
<p><strong>Ryan Burgess</strong><br />
I was waiting. I'm like, why is the name Swift?

</p>
<p><strong>Jem Young</strong><br />
Like Jonathan? Like, that was it but there's like, okay, yes, this great podcast, but no one could see the reaction. Nobody in the room was laughing.

</p>
<p><strong>Ryan Burgess</strong><br />
I didn't want to drop. But

</p>
<p><strong>Jem Young</strong><br />
that's it for me.

</p>
<p><strong>Ryan Burgess</strong><br />
Derek, what do you have?

</p>
<p><strong>Derrick Showers</strong><br />
So my first couple of recent swift resources so I highly if you haven't iPad Swift Playgrounds is really cool. Actually don't buy my wife does. I've tried it out. And so it's a really good way to learn Swift. It's actually geared, I think towards like high school or maybe even younger, but you can get the basics out of it. You can also just play around and has compiler on it and does everything you could do on Swift playground. So that's cool. And a podcast that I listened to is swift unwrapped is with JP JP some Mart and Jesse squires who works at Instagram. It's really good there. I think they're only on like episode 20. But really informative, highly recommend checking them out if you're interested in Swift. And then my other two unrelated, Swift fixes I actually went to I was drugged to say a play a drag to a play called The Curious Incident of the Dog in the NightTime. But I really really really liked it. It was it was I was pleasantly surprised. But it's all about a autistic 12 year old I think or eight year old somewhere on there. And he is it's the stage is like basically all inside of his head and so it's like super fast paced, but also very easy to follow. It's it's really good. And then my last pick is a beer that we were just chatting about. So if you're familiar with 21st amendment, they have brand new sour beer and actually think that maybe it's gonna be hard to find this it was like a limited release thing but if you can get if you do see it in store, definitely pick it up

</p>
<p><strong>Ryan Burgess</strong><br />
and send it to us, please.

</p>
<p><strong>Derrick Showers</strong><br />
It's me. It's called watermelon funk. And it's their higher hell watermelon beer which is one of my favorites, especially in the summertime. And they've made into a sour so it's called

</p>
<p><strong>Stefan Stumpfl</strong><br />
watermelon funk. Alright my pics Yeah, let's start with some swift resources. One blog I'm following I really like is Natasha robot. I think Derek you, you you know about it. It's really good. Just subscribe to their emails. It's really really nice updates of whatever is happening in Swift right now. Not right now. Whatever the latest changes from Swift from Apple. There is even an upcoming conference in New York we will be to and another one in Japan later on. Another thing is sick course. Like it was actually my course I took for swift, one or Swift two a while ago. It's from Simon Allardyce and it on LinkedIn learning. If you guys already have a LinkedIn premium account, you can access this course it's great. It's a really, really good resource. And yeah, my third pick is in Swift related have been to the sandwich place, which is called Turner's kitchen yesterday. It's right near Dolores Park in San Francisco. If you guys are around the San Francisco area, you should definitely go there and check it out. The sandwiches are just delicious. Really, really good.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. I'm actually have not tried that. And I want to I have it's on my list of ones to try. So let's good. I have three picks. today. I've been listening to a podcast called the pitch. It's a really cool podcast that in each episode, they follow like entrepreneurs pitching their startup ideas to investors. And it's a great way to hear the types of questions that investors ask about the startup. And also, it's kind of a cool way to find out about new products. So I highly recommend listening to that. It's got picked up by gimlet media, I think by their second they're on their like second season and like gimlet media puts out a lot of really cool podcasts. My second pick is actually a conference for Angular. We don't write a lot of Angular these days, but it caught my attention because they have a ton of female speakers and it's mg Atlanta. So it's a angular Conference in Atlanta, I believe it's in January of 2018. And there's more female speakers than there are male speakers. And I don't think I've ever seen that in a conference. So to me, that was huge to really see that they care about diversity, so highly recommend that conference. Hopefully it does really well. It's the first one they're putting on for For the past couple of days, I've also been using an app on iOS to track my phone activity to really understand what I'm doing on my phone. And I've been using this app called moment on iOS, and it tracks all the apps and like how much time I spend on my phone. It's kind of scary to see how much time I spend on social media like Twitter and Instagram. But it's really cool. I'm gonna I've been using it for a few days now. And I will continue to use it to really see what my activity is. Before we ended the episode. I want to thank Stefan for being a guest, thank you for joining us and really like helping us understand Swift. It was a pleasure having you Where can people find you?

</p>
<p><strong>Stefan Stumpfl</strong><br />
Yeah, thank you for having me. It was great to be with you guys. Yeah, I do have Twitter. I'm not the biggest Twitter user yet. But I'm trying to get there. So you can find my Twitter handle is cysts, su st eight, six, just a random number. And you can always add me on LinkedIn or any other social platform, you will be able to find me So

</p>
<p><strong>Ryan Burgess</strong><br />
LinkedIn is probably a good one. Right? Like you kind of got a push that hit me really big

</p>
<p><strong>Derrick Showers</strong><br />
on Yelp, too.

</p>
<p><strong>Stefan Stumpfl</strong><br />
I'm trying to get beyond Yeah, I'm struggling.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you all for listening today's episode. If you've been enjoying the podcast, please help us out by letting others know about the podcast and leave a review on iTunes or Google Play. Let us know how we're doing any last words for the end of the podcast X code I love. Cheers. Cheers.

</p>
`;
        return transcript;
    };