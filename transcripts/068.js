module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End happier Podcast. Today we'll be talking about progressive web apps. Because you know what they've been really pushing the web and making great web applications we're doing by Aaron to talk with us about progressive web apps. Aaron, can you give us a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?


<p><strong>Aaron Gustafson</strong><br />
Sure. So I'm Aaron Gustafson. And by day, I work at Microsoft. And I'm an evangelist for the web and for accessibility and progressive web apps and such there. And I do a lot of sort of what I would consider client work where where I work with a lot of companies who are building progressive web apps to help them do that. Well, which kind of goes back to my prior to Microsoft days when I was actually running an agency. And we did a lot of client services work by in my evenings in my spare time. I'm also the editor in chief of the list apart. I've been involved in the Web Standards Project and a ton of other stuff over the years, I've been doing this thing for 20 plus years at this point, earned all the gray in my beard. And yeah, it's a lot of fun. And then, on the home front, I've got a three year old and just recently relocated with with him, my wife to Seattle, and that's been pretty fun. And my my favorite cocktail is a well currently old fashioned tie between that and Sazerac. But you know, both good choices. Yeah. I

</p>
<p><strong>Ryan Burgess</strong><br />
mean, you told me that. Yeah, those are good choices.

</p>
<p><strong>Aaron Gustafson</strong><br />
I like boozy like, really like liquor forward? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Call. Yeah. And is the gray hairs on the beard from the web or the three year old,

</p>
<p><strong>Aaron Gustafson</strong><br />
it predated the three year old, it's probably been accelerated by the three year old, but it predated the three year old. My way for first, my beard as salt and pepper Rica. It's red and a little bit of white.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on, that's a good way to describe it. All right. Well, let's also go around the table and give introductions of the panelists. Jem, you want to start off?

</p>
<p><strong>Jem Young</strong><br />
Yeah. Jem Young Senior Software Engineer at Netflix.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a senior front end engineer at Atlassian,

</p>
<p><strong>Augustus Yuan</strong><br />
I guess. sysoon, front end engineer at Evernote. And I'm Ryan Burgess. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
a software engineering manager at Netflix. In each episode of the podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is offline, offline offline. So if any point in the episode from now on, if we say the word offline, we will all take a drink. Before we get started? What is a progressive web app? A PWA wants to define it. It works offline.

</p>
<p><strong>Jem Young</strong><br />
I want to hear it. Cheers.

</p>
<p><strong>Aaron Gustafson</strong><br />
Cheers. Be sure to make eye contact because

</p>
<p><strong>Ryan Burgess</strong><br />
very important, that is very important. crucial

</p>
<p><strong>Aaron Gustafson</strong><br />
part? That's a German thing, right? Like make sure yeah, it's if you don't look in the eyes, it's like some years of bad sex, which I'm always I'm always kind of like, you know, is any sex? Really, that makes so much sense.

</p>
<p><strong>Augustus Yuan</strong><br />
all makes sense.

</p>
<p><strong>Aaron Gustafson</strong><br />
All right, who's gonna define a PWA? Somebody somebody apart for me,

</p>
<p><strong>Stacy London</strong><br />
I mean, something that that is web based using web technologies, but acts in a way that feels very native, perhaps you have, perhaps a icon on your home screen on your mobile device, it just feels very sort of native in the way that it loads up. Maybe doesn't have a lot of flashing of reloading the speed. And the way that it feels is very close to native. I guess

</p>
<p><strong>Ryan Burgess</strong><br />
it feels like an app. But yeah, you don't necessarily have to see it in a browser.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, at least like my understanding is, there is a specification for what defines a progressive web apps that like browsers actually respect like you have to define some manifest. And then browsers can actually allow you to have access to a bunch of the functionality that progressive progressive web apps are known for. So a lot of native functionality like push notifications are. That's all I really know. And ServiceWorkers,

</p>
<p><strong>Jem Young</strong><br />
fine, fine. Cheers. Cheers. A good opening question. Because there is no spec for a progressive web app. It is. I remember when the the term came around, it was last year or the year before. Yeah. There's like so many websites like Progressive Web App, progressive web app, but when you ask the people like, Oh, what is a progressive web app? They be like, well, it's this thing. There's a ServiceWorker. And like, nobody actually knew it like so it's like, what's my least favorite term today? Machine learning machine learning? Oh, yes. A shout out to my front end masters course. I have two classes on there called Full Stack front end. Ah, nobody was like a term that someone invented, like machine learning. That sounded really cool. But no one actually thought like, what does it mean? And Aaron, you work on this in the day to day so you can define it better than I can.

</p>
<p><strong>Aaron Gustafson</strong><br />
I've it's kind of like html5. I'm using big, big magic quotes here on it. Or what was it called the DHTML? Way back? Throwback.

</p>
<p><strong>Ryan Burgess</strong><br />
But when we went to html5, that was like, That term that got annoying. Yeah.

</p>
<p><strong>Aaron Gustafson</strong><br />
Because especially like being a web guy, I would I would have to actually ask clients who came to us for html5 work like, Okay, are you talking about like, HTML five, the elements? Are you talking? Like, in some cases, they be talking about CSS three? I'm like, why are you using the term HTML five, you're describing a buzzword that everyone's right, you need HTML? Exactly. And so like PWA is, is very much that way. And if you go back, Francis Berman, who helped to coined the term with Alex Russell, they come up with it together, she actually wrote a post that baseline PWA, as a term isn't for us. Right? It's, it's for other people, it's intended to be kind of this this thing to just capture, you know, what the, the current state of the art and best practices for building for the web. I mean, the kind of the most succinct way I think a PWA is like a website with special powers, right? Like, it doesn't necessarily have to be like, not every site, my blog is not going to use push notifications. And then you want to get push notifications for my site. Well, maybe Jen does, but but like, you don't have to use all of those features to be a PWA. Alex Russell basically pinned it down to like three minimum things that you needed to do to kind of be considered in that realm, which was running on HTTPS, having a web app manifest, and then using ServiceWorker. And having some sort of offline.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers. Yes,

</p>
<p><strong>Ryan Burgess</strong><br />
it actually has to be HTTPS. Yes.

</p>
<p><strong>Aaron Gustafson</strong><br />
I don't know. ServiceWorker. won't run. Yeah. Oh, wait, unless you're just on localhost. No,

</p>
<p><strong>Ryan Burgess</strong><br />
this Yeah, yeah. Right.

</p>
<p><strong>Stacy London</strong><br />
That score if you don't have Yeah, PW I was thinking

</p>
<p><strong>Ryan Burgess</strong><br />
of it as, like not using ServiceWorker is that you have to be HTTPS. But you're right, in order to use a ServiceWorker.

</p>
<p><strong>Aaron Gustafson</strong><br />
Yeah, and and any sort of basically any, any sort of more privacy related API's, like even location, geolocation is moved under HTTPS now. Whereas used to be able to use that anywhere. Anything that's going to deal with more sensitive information is going to be only on HTTPS now camera, so on and so forth, which is all those things you saw to say. Yes, I yeah, I approve this, but still a lot better over HTTPS. Yeah, exactly.

</p>
<p><strong>Jem Young</strong><br />
Weird, weird tangent. This is not related to the talk topic at all. They actually disabled the battery status, which is technically html5, like it was, then you can check. Yeah, they disabled that because it was used to track people around the web, because like, you can get such fine grained detail on someone's battery status. It was good enough to track you around the web. So they actually disabled that. Yep. We're totally unrelated to anything.

</p>
<p><strong>Aaron Gustafson</strong><br />
Yeah, there's been a couple things like that, that we never expected to be abused. I mean, even shared array buffer? Well, no, I was gonna say, the CSS visited was was a really abused thing. Because you could get computed style on it, and then determine whether somebody had been to a certain site. So you got people come up with some weird ways to abuse web tech? For sure. This never would have thought of it. Yeah. I think there's another the the list that that originally kind of came out from from Alex of like, the characteristics of a progressive web app, which was like secure and responsive and app like and all those, those sorts of things were part of that. And sometimes, folks refer to that as kind of like the the checklist, but not all of those apply to all projects.

</p>
<p><strong>Stacy London</strong><br />
Does accessibility fall into that kind of definition of it? Or is that still like,

</p>
<p><strong>Aaron Gustafson</strong><br />
I mean, I feel like it should I mean, so I feel like a lot of times, we as an industry, looking at PWA get very much hung up on that A, and don't pay much attention to the P the p being for progressive for progressive enhancement. And for those who don't know what progressive enhancement is, that's where you're taking something that that works regardless, with like, the lowest set of technologies, and then enhancing that to work with anything. And so, web app manifest and ServiceWorker were designed in that way that if the browser can't make use of them, the site continues to work. And so you know, having a good solid baseline that can work for as many people as possible. To me that requires accessibility. You know, it's an accessibility is a journey. That's a whole other other thing to get into. You're never going to have something that you can declare 100% accessible, but you can very hard you never know I don't know the Java they're good will always always, you know, come up with with new new things that we have to worry about and consider in our designs. But yeah, accessibility absolutely should be part and parcel of Bill A, you know, a great experience that you are then enhancing into being a progressive.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've mentioned service workers. What does a ServiceWorker? Why is that important to progressive web app? I feel like gem should actually answer this one because I've seen some really good talks from gentlemen. We've done a talk about it. It's he's talked to the spoken about it a few times here. And there.

</p>
<p><strong>Jem Young</strong><br />
I was one of the first No, I was, wait.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know, man. Early early on,

</p>
<p><strong>Jem Young</strong><br />
I knew he was gonna be like a game changer. Yeah, you're

</p>
<p><strong>Ryan Burgess</strong><br />
your champion. Ah, it wasn't a game changer until Apple finally introduced Oh,

</p>
<p><strong>Jem Young</strong><br />
oh, that's dope. That's my later rant. About apples. I got that one already saved up your own personal man in the middle, literally. Yeah. ServiceWorker is think of it as a web worker that only exists when it's working. So ServiceWorker, like a web worker runs in a div or like read worker runs a different thread. So you can do executions, everything, not blocking the UI, like web worker has no interaction with the DOM. So you can read and write to the DOM using worker. But unlike a web worker, it can intercept fetch requests, which is super awesome. We'll probably talk a bit about that later. And it only exists as long as it's doing work. And then once it's not doing work, it shuts down. And the last thing is, well, there's few but it is persistent. So once you it's all ServiceWorker, it is always there listening for events, and it wakes up for events. And then because like sleep, and there's a lot more to it, but at a high level. That's so what's

</p>
<p><strong>Ryan Burgess</strong><br />
the difference between a web worker and a service worker,

</p>
<p><strong>Aaron Gustafson</strong><br />
I mean, a service worker is a web worker that is specialized in handling networking traffic. So it's, it's there to intercept everything, you know, that it's it's your own personal man in middle, I think that's a really nice way of kind of describing you, because you can affect everything, including adjusting headers, you know, changing JPEG requests into web P requests, and all sorts of other stuff. So you do a lot of you do a lot of damage with it. But you got to do a lot of really cool things, a lot of really

</p>
<p><strong>Ryan Burgess</strong><br />
great things more performance. Yeah. Everything's there.

</p>
<p><strong>Aaron Gustafson</strong><br />
You can handle offline. Oh, yeah. Cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
I've also heard web workers only run like when the tab is open. But then service workers, they can just run whenever, like, even when you close the tab. Is that true? Or I don't,

</p>
<p><strong>Jem Young</strong><br />
yes. ServiceWorker is it only wakes up for events and whether it's events is? Well, there's a lot of events, but one of them would be a push message so I can get postMessage. Even if I'm not on that tab in the browser, I will still get that post message and you'll receive it, which is pretty cool. Actually,

</p>
<p><strong>Aaron Gustafson</strong><br />
even if the browser's not in well, at least in Windows, you can get in

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, you can actually still notifications and everything

</p>
<p><strong>Jem Young</strong><br />
even the process has to be running at some point. If like the crosses are running, then it won't receive anything

</p>
<p><strong>Aaron Gustafson</strong><br />
that it ends up being running, at least in Windows, because you can get like the Twitter notifications and stuff like that from the Twitter PWA. And

</p>
<p><strong>Ryan Burgess</strong><br />
I don't think it doesn't on Mac, though.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I think if Chrome is like killed completely evil or any other browser, you're in

</p>
<p><strong>Aaron Gustafson</strong><br />
Android, of course, the chrome processes always running. So you get your push notification. Yeah. Not that they always necessarily take you back to the PWA, which is, much to my chagrin, I always get shunted into Chrome, for some reason. Like it doesn't go back to the Twitter PWA. If I go to Twitter, and

</p>
<p><strong>Jem Young</strong><br />
yeah, that is there's many frustrating things about ServiceWorkers in Chrome anyways, another time

</p>
<p><strong>Aaron Gustafson</strong><br />
but not not correctly identifying that what is the clients forgetting what the what the like, think it's clients is the the, the object that you have access to? And you can like, grab the client that

</p>
<p><strong>Jem Young</strong><br />
oh, yeah, grab the focus. Yeah, there's a lot of edge case with service workers. That's, I've heard, and I'm not sure on this one, correct me create react app ships with a ServiceWorker. By default, what does it do for it? I think it enables offline. So caches years, which I preached this for years. Now, I'm not a fan of people, using service workers, if they don't know what they're doing, and I, I don't like that create react app ships and ServiceWorker. Because I've seen people have issues with it this year, and Aaron will probably testify. Because it's easy to wreck your site. You can actually because the ServiceWorker is persistent. Once it's installed, you have to give it commands. So it needs to listen those commands to uninstall it to like stop caching things, or stop reading from cache. If you don't, if you didn't build that in Lausanne, shipped it out Netflix calm and I didn't build it building a kill switch. I'm like, Oh, crap, I wrote a bug in my ServiceWorker. And it's like, denying all outbound requests, I have no way of fixing that. Like, it's literally impossible for me to fix it.

</p>
<p><strong>Aaron Gustafson</strong><br />
You can take you can take it over with a new version of the ServiceWorker. But in the beginning, when ServiceWorkers first rolled out, if you had a long lived header for expires header, it would persist because that would be respected first. And so you could never replace your ServiceWorker they eventually tweaked that I want to say it's like, it checks every 24 hours or something like that when like the tab is active to see if there has been a new version. But yeah, it used to be it can persist forever. And wow. Yeah, I was like why isn't my ServiceWorker updating and it was because I had a long lived header on

</p>
<p><strong>Ryan Burgess</strong><br />
the I mean, even The last 24 hours that could be very detrimental to Yammer is like they're

</p>
<p><strong>Aaron Gustafson</strong><br />
like what's going on and like, that's like getting, he's getting up to speed with the serviceWorker lifecycle and knowing how to how to replace and like claim the client and all that sort of stuff like to replace the serviceWorker with a new one.

</p>
<p><strong>Jem Young</strong><br />
But I think unless you your ServiceWorker is built to like claim on a new ServiceWorker it, it'll wait, it'll install, but it will not activate. So it'll be your old ServiceWorker always,

</p>
<p><strong>Aaron Gustafson</strong><br />
it'll be your old ServiceWorker until the, the 24 hour window node. So it Okay, so if you've got an existing ServiceWorker that's loaded up first, like I think either with the site loading up, like with the tab, spawning, or whatever. And so it'll handle all requests your old one, well, it will download the new service worker in the background. If that service worker won't take over for the old one, unless you explicitly tell it to there is a command now that you can tell it to basically automatically assume over the the existing service worker and take take care of doing whatever it needs to do to upgrade immediately. Or it will happen on the next refresh basically. Okay, or when you close and reopen. So yeah,

</p>
<p><strong>Jem Young</strong><br />
so that's new, they like it didn't used to be that way. Like it was like you said he would persist always. The bad part is like, let's say push this out to everybody. You have no way of knowing this, like, I don't know, someone's mom, you can hard refresh, you can kill cookies, you can do all this stuff. And it will not fix your problem if you have a problem, your ServiceWorker. So it's, that's why I like I don't advise people to meddle with it unless you really know what you're doing. Because it is easy to like,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it's up to your site tool. Like you should use it for certain things. But I think it's really understand what to do with it. spinning up a ServiceWorker is really easy, though. I totally I really, really is I kind of like that. But I can see some of the downfalls of like really understanding, it works so easily. And you can offload to the separate thread really easily. But if there are problems, and you're not really understanding that like even the caching issues, or like expired headers, like that's a huge, huge problem, and can be really hard to debug if you don't fully understand what's happening. Yeah,

</p>
<p><strong>Aaron Gustafson</strong><br />
I think I don't know if any of y'all have read it. But Jeremy keeps going offline. Yeah, I was Yes. Fantastic book, it's probably about a two to three hour read. Depending on how fast a reader you are very easy to follow, really does a thorough job of explaining how ServiceWorker works, how to build one up from scratch, how to be responsible in your caches, that just I think is hugely important. Because if you're just keeping everything that gets loaded in your page in the users cache, eventually, you're just gonna keep filling it up and filling it up and filling it up. And that's kind of abusive. It's really disrespectful of sort of like being granted keys to somebody's apartment, and you just like keep storing your junk there. Right. So I mean, I think it's important that we be respectful of of the, the privilege we're being given to actually like govern somebody cash of our site. So I highly recommend that book. I think that's a really good way to get started with it. Folks,

</p>
<p><strong>Jem Young</strong><br />
I like to touch on caching, because the older I get, the more programming I do, the more I'm like, guess cache invalidation is one of the hard problems of CS. And if you're building an offline site, cheers, cheers. If you're if you're building a site that works without the internet, save ourselves another round of tears there.

</p>
<p><strong>Ryan Burgess</strong><br />
Why? Why would you do without the Internet? What does that mean?

</p>
<p><strong>Jem Young</strong><br />
Plenty of there's plenty of good cases until the internet. But you have to know about like cache eviction strategies, and every browser handles a little bit differently. In the browser cache, it's an all or nothing eviction policy. So like, if you overload the cache, like Aaron was saying, with, like, I store 10 movies in there, it's great. And now users can watch it. The browser decides if you're over and it'll just evict the entire cache, it won't evict, like one at a time. And you're like, why is my cache working? Wasn't I'm getting the benefits

</p>
<p><strong>Aaron Gustafson</strong><br />
from? Yeah, and it's, it's actually like, the, what's interesting is like the browser eviction policy, like browsers have their caps of how much memory you can use, which varies by browser and operating system. If you're an installed PWA, from the Microsoft Store, you actually don't have any limits on how much you can store, which is pretty interesting. So Microsoft allows that just if you're installed from the store, the limits go. Because at that point, like they've, you know, offensively evaluated your code and what you're doing and that sort of stuff. And so there's, there's like, a slightly different, they can still like if you take up too much disk space, like DLs, can wipe disk can recover disk space, right? But you don't have the hard limits that you do in terms of cache API IndexDB, and stuff like that. All of that sort of goes away,

</p>
<p><strong>Ryan Burgess</strong><br />
which are kind of like is like Microsoft saying, Okay, we're gonna allow this because we've added this your full blown app, exactly. We've treated you as an app. We've looked at it we've said yes, this is not some malicious thing that's happening.

</p>
<p><strong>Aaron Gustafson</strong><br />
You're also you're also in the like, the control panel for uninstall mobile apps. Like you show up there, and yeah, which is really

</p>
<p><strong>Jem Young</strong><br />
cool. So PWA is first class citizen on Windows. Yeah, nice,

</p>
<p><strong>Aaron Gustafson</strong><br />
very good. And then you get access to Windows internals and stuff like that, too. So if any of you have played with the Windows version of the the Twitter app they're using, they can detect dark mode. So if you've, if you switch the US into dark mode, they'll actually switch to the dark theme automatically. They're doing what are called jumplist, which is where if you right click on the icon, you can get immediate access to like your timeline, your mentions, your direct messages, etc, etc. They're doing some early experiments with integrating with the timeline. So it's like user activity, I think is the name of it. But if you view a moment in Twitter, it'll actually log that moment in in the Windows timeline, which is kind of cool. Like they're doing lots of cool stuff like that, just to like, try and make a better, more engaging user experience. You can pin people's profiles to your start menu. Cool. There's

</p>
<p><strong>Jem Young</strong><br />
some neat things in that gem, young, your Windows start menu.

</p>
<p><strong>Aaron Gustafson</strong><br />
Add me on any Windows tweets,

</p>
<p><strong>Jem Young</strong><br />
they want to see my tweets, like immediately when they wake up in the

</p>
<p><strong>Aaron Gustafson</strong><br />
morning on the Windows Phone. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I think like that sort of draws me to the question of, you know, like, there's, there was Cordova and PhoneGap. And those are in some sort of the early days. I'm still Cordova, Ionic, you know, great. But how does like maybe that differ from like,

</p>
<p><strong>Ryan Burgess</strong><br />
React Native? Yeah, native is definitely it's I think React Native is a little more to a native layer. It's still I don't know, I want to call it as like, it's a, it's still another layer that's not fully native. But it's another layer closer to the native layer than something like Cordova. But yeah, what's the difference between that kind of what you're asking? Yeah, what's the difference between like a PWA versus something that's Cordova, or, as

</p>
<p><strong>Stacy London</strong><br />
we mentioned, like push notifications is the thing that PWA is can can do. But that almost feels like yeah, you're you're reaching into, like, native API's? And some at some level? Yeah, like,

</p>
<p><strong>Aaron Gustafson</strong><br />
I mean, I think it's, it's really interesting. Obviously, every project is different, every company's needs are different. And so the the solution that you choose needs to be appropriate to what it is that you're trying to do. But if you're building a, you know, multi platform app, and you're providing pretty much an identical experience on each of those platforms, and you're providing a web version of that same thing, like, it makes a whole lot of sense to double down your investment on the web, and just say like, Let's build it and ship it everywhere. Whereas if, like, if you need to, if you need access, like if you need to be closer to the middle, like or if you need API's that aren't available on the web yet, like, by all means do native like I'm not, I don't think one is better than the other, I think you need to evaluate it based on what it is that you're trying to do. But the web is getting more and more capable of doing a lot of the things that web has done. And I mean, the reality is, from a business standpoint, it's a heck of a lot easier to hire somebody who knows web technologies than it is to hire somebody who knows Swift or knows Java, or what have you, and is like an Android developer or whatever.

</p>
<p><strong>Ryan Burgess</strong><br />
What even to that point, having someone even if you do have that on your team, it's like knowing swift knowing Java or knowing Kotlin. Or like, it's not just like one or the other. It's like, you want to ship native, okay, well, you need this skill set across multiple languages at that point. So and not

</p>
<p><strong>Aaron Gustafson</strong><br />
only do you need to like address building the team and, and kind of maintaining that team and maintaining the product, but like, dealing with turnover and dealing with like, all of the kind of things that we don't often talk about when we talk about building a product, right? But there are real business concerns. Like if you can build it all in one platform and focus on that and focus all of your your energy and your money around that and it can meet all of your needs, then why wouldn't you do that?

</p>
<p><strong>Ryan Burgess</strong><br />
I've always actually thought we'd be further along in the web in the sense that we also need apps. But we're not there yet. Because like you said, there are still API's that, yes, the web is not going to we don't have access to yet. But I think more and more, we're getting closer and closer to that. And it's pretty exciting. And I think progressive web apps. That's why we're doing this episode is it's exciting. There's a lot there. And I mean, we've talked about service workers, we've talked about, you know, what a progressive web app is, but like, what is the big deal? We've kind of talked about it a little bit here. But like, why is this so important to like what we're doing? Why is it impacting the industry so much?

</p>
<p><strong>Aaron Gustafson</strong><br />
I mean, we're really realizing Steve Jobs, his vision of only having web apps, right, like that was the original.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Which is really funny, because I don't know if Apple would be as super stoked on the like, progressive web apps as much as

</p>
<p><strong>Aaron Gustafson</strong><br />
Yeah, I mean, they're not the apps. I mean, they're not well, I'm sure they're trying to figure out how to do it. To some degree, I mean, I don't know what goes on inside there, but, or inside, like the Google Play Store, but I imagine they've got to be thinking about like, how do we bring PW A's into our stores? Like it seems, because it's it's a great alternative discovery mechanism. Like it's not the only one and I mean, I I think it's cool that the company that I worked for happens to be looking into like, hey, could we insulate from search results, like that's kind of an interesting idea, like what, you know, what are some other ways that we can create to enable better distribution and discovery and these sorts of things for the people who were working really hard to build cool things on the web, Apple,

</p>
<p><strong>Jem Young</strong><br />
funny enough, was the last person, the last major browser, vendor safari to adopt service workers. And the conspiracy theory is, and I probably believe this true, because the App Store for Apple makes them so much money, it's a large chunk of Apple's revenue, they were like very hesitant to enable any technology that would divert revenue potentially from that's gonna cannibalize the App Store. Yeah, because I can give it a progressive web app with my manifest, and I build it to work without internet, I can build an app that installs your homescreen. And you don't put in you would not know that it was running in a browser, because the headers hidden everything, you think it's a native app.

</p>
<p><strong>Aaron Gustafson</strong><br />
And I mean, it's not just so there's the App Store itself, and the discovery and the the potentially purchasing of apps in the App Store. But the piece that we don't often think about is like the in app purchase model, right? And so if you have an app that sells digital goods within an app store, you have to pay them a certain percent. It depends on the on the App Store that we're talking about. But yeah, and Apple. But, but and that's changed over time, I think, wasn't it like, 70% of what I was, like, really high? Oh, I don't remember it was, it was something astronomical at one point. But anyway, I could be wrong on that. But, uh, but I would like there's that sort of residual slash additional thing that you don't get. So if you think about something like Washington Post subscription, like now, you don't have that recurring revenue from the recurring digital purchase that you were the one who, like brokered, or what have you, like, that's a big loss. So I totally get that, like that, that makes a lot of sense that, you know, that any app store would be somewhat apprehensive about that, you know, I'm kind of surprised that Microsoft isn't more apprehensive about some of that stuff. But I mean, we're, we're trying to make it work. I think there are a lot of people, you know, within Microsoft that want the web to succeed, and to continue to be successful. But there's always gonna be people are gonna be like, hey, you know, the store does make some revenue too. So we need to make sure that, you know, although I would honestly say, just with my former business owner hat on, hosting a PWA, for distribution in your store, from from purely a distribution standpoint, costs you a hell of a lot less than storing a native app for distribution in your store.

</p>
<p><strong>Ryan Burgess</strong><br />
So like, Yeah, I mean, paying the revenue towards another company. Yeah. Paying that share, or even just development development costs, like you just you just talked about

</p>
<p><strong>Aaron Gustafson</strong><br />
shortage of the app in your cloud to distribute it like that is costing like that cost Apple real money, like you think about Hearthstone, which is, you know, a free card game. That, you know, that's last time I looked 1.2 1.34 gigs, and, and downloaded multiple times, like that's a lot of money to to distribute a free game. So they need to recoup that in the in app purchases and stuff. And I like from business standpoint, it makes total sense. So I

</p>
<p><strong>Ryan Burgess</strong><br />
think that and they've also like from a if you're a small game developer, what it doesn't matter is like they've built this platform that can really just you can ship to anyone, you can charge I can charge you 199 99 cents, or free or whatever. But they built this in the sense that anyone can access your app. That's pretty badass.

</p>
<p><strong>Aaron Gustafson</strong><br />
Yeah, no, totally. I mean, there's a lot to be said for it. I mean, would we have all played tiny bird if known about it, right? Probably dating myself on that one.

</p>
<p><strong>Ryan Burgess</strong><br />
We've talked about like, actually, Aaron, I think you've mentioned a couple times Twitter as a PWA app. What are some other good examples that you guys have seen?

</p>
<p><strong>Augustus Yuan</strong><br />
I was actually just gonna call out. Because I guess another big thing about the progressive web apps is like, I think they're still pretty similar to natives. But actually, Starbucks recently moved to PWA. And they actually published I'm sure we can get a link sometime. But they actually reported like kind of like a user case study. And they reported like metrics across the board. Were actually like, some some in some places even better than their native apps for like for their Starbucks Progressive Web App. And like, they kind of like limited the scope of it, just like you know, very similar to their native app where you can put your favorite location, you can do purchases, reserve and stuff and it was like pretty incredible. I was like, really impressed. I don't know exactly what attributed to like better metrics, but then relative of course, right.

</p>
<p><strong>Aaron Gustafson</strong><br />
I think one of the most surprising things that came out of that I'm probably miss remembering the percentage so somebody can correct me in the show notes if they want but um, I want to say something like 40% of their order ahead. Revenue maybe or maybe it's total orders. Were actually coming on their PWA from desktop to which we don't often Think about PW A's.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, we'll just be on the mobile browser. Yep, fine. Yeah. But order

</p>
<p><strong>Aaron Gustafson</strong><br />
had a lot of order ahead actually does come from desktop. So people ordering for their office or something like that, and then going out and picking it up.

</p>
<p><strong>Jem Young</strong><br />
So I think Washington Post's was one of the first big organizations to roll out a progressive web app. So shout out to them.

</p>
<p><strong>Aaron Gustafson</strong><br />
Carnival Cruise Lines had some really big success with theirs. Uber actually decided they were, they had announced, gosh, February or January that they were retiring their native Windows app. And they were going to retire it over the summer. I don't remember if it was like June or July or something like that. But they actually decided, you know, given given the success that Twitter had, they're like, Hey, we could just swap this for a PWA. And then just like, update it via the web. Sure. And so they decided to do that instead. think Pinterest has a PWA that they've had a lot of success with. Lift, I believe has a PWA to think I saw something about that. I haven't used it. But

</p>
<p><strong>Jem Young</strong><br />
I think one joke once I like Uber's PWA was actually better than their Android app it at one point, I think it was like a year ago. But really, yeah, people were saying like the PWA is way better. I think they've improved since but interesting data point.

</p>
<p><strong>Aaron Gustafson</strong><br />
I mean, it's a lot lighter. I mean, that's for sure. I mean, one thing I discovered, so when I moved to Seattle, are so we were waiting to move into our apartment. And then our apartment, like the Internet didn't get hooked up at our apartments, we didn't have Wi Fi. And we of course, have a two year old, who was watching Netflix, shout out to Netflix, Sarah and duck, which is unfortunately not enough flicks now. But so he was watching a lot of Netflix and burning through Verizon data. And then so we hit our cap and got dropped down to 3g.

</p>
<p><strong>Jem Young</strong><br />
Yeah, shout the horizon.

</p>
<p><strong>Aaron Gustafson</strong><br />
But the crazy thing was like I went to to use Lyft. And I could not use the Lyft app on my phone on 3g, it would not do the, like autocomplete to find addresses, it just would never finish. And so I literally could not order a Lyft ride unless I went and found Wi Fi somewhere, which is so bizarre to me is and that was a native app at that that was a native app, and it just would not function at all. I wished I'd had the PWA installed at that point, because maybe it would have had a chance of running. But yeah, it's kind of crazy how much we, you know, just assume that that the network's available, and that it's of a certain speed,

</p>
<p><strong>Ryan Burgess</strong><br />
even when I think that's the thing, too is like we're talking about, alright, Seattle, Silicon Valley, we got really wealthy Western Web. Yeah, it's like we have this great internet. And

</p>
<p><strong>Aaron Gustafson</strong><br />
I've never heard that before. Shout out to Bruce Lawson.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it's super important. And it's like we have that we take that for granted. And I think it's like when we're building these products. The whole idea of the web, especially is it anyone can use this, anyone in the world can use this application website, whatever you're building. And the thing is, the internet speeds are not all the same. And so I think that's another point where this progressive web app is very, very useful. And I'm gonna say the key word is that, you know, you can actually do some of these things offline. And so if you have a poor internet, it's helpful.

</p>
<p><strong>Aaron Gustafson</strong><br />
Cheers. Okay, so rain on your parade time. So one of the sad things is, so we've we've had this big push for HTTPS, which overall is a good thing, right? Eric Meyer had a piece that he wrote about his trip to Uganda, where he was working with like, a school there. I don't know if it was a cold Code School or a normal school. But he was working with these kids and their internet was via satellite, which is super Layton. So what they did to improve things is that they would do local caching, in order to help improve things. Well, when you run it or HTTPS, you can't do that. Because it blocks the ability to have a man in the middle doing that sort of thing. So like, in our interest of privacy, we're also kind of screwing people who, like rely on you know, some sort of local land caching or, or similar strategies in order to improve internet speeds and experience for the people who rely on a very tenuous connection to the internet.

</p>
<p><strong>Ryan Burgess</strong><br />
You hadn't even thought of that is like, yeah, you're right, like that. It's actually something that we just took for granted. And now we're like, No, we're gonna be more secure. But yes, it's actually hurting some of those lower connectivity.

</p>
<p><strong>Aaron Gustafson</strong><br />
Yeah, I mean, the only way they have around that would be to do something like with Gogo Inflight does where they like spoof the SSL certificate for Netflix so they can block people from streaming. Yeah, you know what?

</p>
<p><strong>Ryan Burgess</strong><br />
I'm not a fan of that. I'm on that Wi Fi. I'm like, Hey, I'm paying for this. I want to watch my Netflix like come on. Get on

</p>
<p><strong>Jem Young</strong><br />
VPN, get around that. Oh, really? Yeah. But like the VPN.

</p>
<p><strong>Ryan Burgess</strong><br />
VPN and then watch Netflix is

</p>
<p><strong>Aaron Gustafson</strong><br />
Netflix faster over the Netflix VPN? Oh, thanks.

</p>
<p><strong>Jem Young</strong><br />
I don't think so. I don't

</p>
<p><strong>Aaron Gustafson</strong><br />
feel like you probably can't connect. Usually watching movies on the VPN.

</p>
<p><strong>Ryan Burgess</strong><br />
What are you doing? But, you know, Netflix does have the availability to download. So you have the offline mode,

</p>
<p><strong>Jem Young</strong><br />
shares, not related offline as you did there. So I think the the downside of progressive web apps, one, they are complex, like we talked about that you can break your site fairly easily. The second is, I think, and even today, not even I think I know, people still misunderstand what they're for, are one of my colleagues, Tony Edwards gave a talk on how he made netflix.com 50% faster by takeout payload and all these other things. So great talk, check it out on YouTube, Netflix tech talks. But the the question everybody we got afterwards was, why don't you use a progressive web app? Why don't use a ServiceWorker. And people still fundamentally misunderstand, like, the use case for progressive web apps? And they're always like, Oh, I heard Aaron say, PWA is great. So I'm going to like use it for everything. And it doesn't work for cases, there are many cases it doesn't work.

</p>
<p><strong>Aaron Gustafson</strong><br />
Well. It's not a good lipstick on a pig sort of solution.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that you brought up this talk that Tony gave? Because I yeah, definitely got a lot of these questions. Oh, let's just use progressive web apps. And I think that area in specific that Tony was talking about was sign up. It's a transactional piece that people are going through one times online, it's online, it is absolutely online, you're not coming back to this time and time again. Yes, as a member, let's talk differently. Like, yes, we just I just said that you can download content. And that's very, very valuable. But there are points in a Netflix user signup flow, that it that is not really going to help having a progressive web app, you know,

</p>
<p><strong>Aaron Gustafson</strong><br />
having a good strategy around, like, what are your goals for ServiceWorker? What are you trying to do? What are the use cases, you know, if you've, if you've got multiple different experiences, like in in that instance, if you've got shared assets that are shared both for the logged in and the non logged in, great application of service worker across the board, and then you could have another service worker that handles the logged in experience additional things, right? Because you can just because they're just like web workers, you can have multiple service workers and, and they're scoped potentially to different you know, domains or different directories and stuff like that. So you know, it comes down to what are you trying to get out of it? And you know, maybe it is a case where you want to have multiple service workers doing different functions in different portions of your site, I was

</p>
<p><strong>Stacy London</strong><br />
smashed, I wonder if like, some of that is like, maybe a fundamental like misunderstanding of what progressive means.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that it was that it's like a lot of it is like some of the questions that almost felt like buzzword II, like as we talked about, like HTML five, CSS three, it was like, give you its next five, right? Kind of felt like that. It was like, Well, why not? And it's not a bad question. Honestly, it isn't. But it's just understanding when it's appropriate to use it.

</p>
<p><strong>Aaron Gustafson</strong><br />
A Dremel is a pretty cool tool, but it's kind of hard to hit a nail into the wall with one Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm like you can does a lot of things. It's not gonna do that. Oh, I

</p>
<p><strong>Jem Young</strong><br />
love travels. It will. It's

</p>
<p><strong>Aaron Gustafson</strong><br />
everything into the wall, but it's gonna be friggin awkward.

</p>
<p><strong>Jem Young</strong><br />
Yeah, for those who don't know, Jebel is a rotary drill, which a ton of different attachments it can, like, do so much stuff. Finally,

</p>
<p><strong>Stacy London</strong><br />
your dog's nails with it, but your dog might be terrified. And they smell the burning. What are you doing to me, Stacy?

</p>
<p><strong>Ryan Burgess</strong><br />
How can someone get started on a PWA?

</p>
<p><strong>Augustus Yuan</strong><br />
Two things. One is, there's also kind of the equivalent of to do MVC. There's a hacker news PWA repo. So it shows you how to make progressive web apps for a hacker news clone of progressive web apps. And I guess they decided to choose Hacker News as the to do list app

</p>
<p><strong>Jem Young</strong><br />
is really popular now. Yeah, it's

</p>
<p><strong>Augustus Yuan</strong><br />
pretty popular. So I thought, oh, that's kind of cute. So PWA. So yeah, so I think that's a great place to look. I think also, Google has some open source stuff with and maybe not necessarily targeted for PW A's but targeted for service workers. They have like sw toolbox. SW. precache. Maybe I haven't noticed,

</p>
<p><strong>Aaron Gustafson</strong><br />
I think it's now all umbrella under work box, isn't it? Yeah. Oh, yes. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. So that's,

</p>
<p><strong>Aaron Gustafson</strong><br />
my question is like, Do you need a framework for a service worker? Isn't that

</p>
<p><strong>Ryan Burgess</strong><br />
yet? No, I actually don't think you do.

</p>
<p><strong>Jem Young</strong><br />
I wish people would experiment a bit like locally, don't get it and like, understand the lifecycle and like, get a deep understanding and then use a toolkit because then at that point, you understand like, what,

</p>
<p><strong>Aaron Gustafson</strong><br />
you know what it actually does under the hood? Yeah, yeah. I mean, it's basically like, they've abstracted the recipes into like, these modules of work box, which, I mean, it's, it's kind of nice. It's nice syntactic sugar. But like, I think it's, I think, to your point, it's really important to know what's going on under the hood. I

</p>
<p><strong>Jem Young</strong><br />
would say a website that I use recommend, but I don't anymore was. It was actually Mozilla's websites, service workers. Yeah. Service worker.rs.

</p>
<p><strong>Aaron Gustafson</strong><br />
They've just updated a bunch of recipes. I think. I think it's sat there and languished for a while but I think it just got updated with a bunch of new recipes.

</p>
<p><strong>Jem Young</strong><br />
I haven't checked all the new recipes. their ideas are good. I think they like some of the ideas are like pretty far out there, which is awesome. Because like people just thinking the envelope. However whoever wrote the code is just, it's like not the way you write good JavaScript. No offense. We were at that actually, like some offense and some some offense. Yeah, it's like,

</p>
<p><strong>Aaron Gustafson</strong><br />
constructive criticism. Yeah, Jem, we'll be sending a push up, or there's a PR

</p>
<p><strong>Ryan Burgess</strong><br />
on that.

</p>
<p><strong>Jem Young</strong><br />
It's like, pretty solid. The ideas are solid, but I wouldn't necessarily copy the code. That's it's not the way I would structure ServiceWorker it's probably a bit more complicated. Also, Gem rat, people who still use var, and a ServiceWorker. Like any browser can run a ServiceWorker you don't need to use var

</p>
<p><strong>Aaron Gustafson</strong><br />
anymore. I know there's uses rivarly safe to use. Yes, six inside of us. Yes,

</p>
<p><strong>Jem Young</strong><br />
please start using const a bit. It's like the little safety check. It's not much

</p>
<p><strong>Stacy London</strong><br />
a free PWA Whoo, I

</p>
<p><strong>Augustus Yuan</strong><br />
like that. 
There's five Yeah.

</p>
<p><strong>Aaron Gustafson</strong><br />
It's it's much safer to do it inside of a ServiceWorker then outside of a ServiceWorker.

</p>
<p><strong>Ryan Burgess</strong><br />
Yes, at the end of each episode, we like to share pics of things that we found interesting that we'd like to share with our listeners. Let's go around the table and share our picks for today's episode. Aaron, do you want to start it off? Sure, I'll

</p>
<p><strong>Aaron Gustafson</strong><br />
give a shout out to some, some deep stuff. So I'm a white guy, I have a black adopted son. I am tearing into seeing white, which is a podcast series from seen on radio, which was recommended by Dave Rupert which he and I were exchanging some some podcast things that we were were tucking into and enjoying. And it's a phenomenally enlightening series about learning more about whiteness, and the legacy there. And so that's a shout out to that one. It's like a 14 part series. So it's some some investment for my, my fellow white folks out there highly recommend doing it. The next one, they have a series on men. So I'm looking forward to that one too. That's going to be

</p>
<p><strong>Ryan Burgess</strong><br />
I've actually I haven't listened, but I've heard nothing but good. So I'm glad that one.

</p>
<p><strong>Aaron Gustafson</strong><br />
If you get really into the whiteness thing, I also highly recommend uncivil, which is like the kind of the unknown history of the civil war. That one's also been very enlightening. And let's see, we'll just continue on that same Ben Homegoing fantastic novel, kind of tracing to lineages from Africa during slavery all the way up through kind of the civil rights movement, both on the continent and here, which was really riveting and tough reading at some points, but very, very rewarding. Great, great book.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. I don't like this word. Yep. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
So I have two picks. One is a game called Celeste. It's a platformer game. It's won a couple of awards. It's on Steam. I recently bought it and it's a really, really awesome game. The reason I really love it is because it takes like the mechanics of platformers have been like around for like, ever, and it's still cool to like, find a game that's like still so smooth. And so like Crispin has a great story. It's still such a solid game, but it doesn't like do anything too crazy from the norm. It only builds upon like, it's just crazy to see that platformer games are still like alive and well. So I don't know I just really liked it. There's like other games like holo night and stuff, but I have Celexa that's a good one. And then the other thing is Crazy Rich Asians has been getting super popular. So huge shout out to that but also want to give a shout out to this really mini Pixar film called bow. It happened before the it was an Incredibles if you ever watched Incredibles there was like a little mini short called bow and I really love that. Like mini short it really screamed so much to me it was funny because there was this like Twitter thing of all these people saying like, Oh, that was so weird. Like, why why? Like, why did that lady eat the few I don't want to spoil. I don't want to spoil it. No spoilers. No spoilers. Okay, well, but either way it like it. Like there's a lot of like little subtle themes that I feel are embedded in Asian culture in that film. Like, I embarrassingly, I haven't watched Crazy Rich Asians yet I need to watch that but

</p>
<p><strong>Aaron Gustafson</strong><br />
there's a very long outline episode all about crazy rotations being discussed by teachers. It's like and their feelings coming out of it and like afterwards and yeah, it's like 45 minutes or like an hour of just them talking about like their their thoughts.

</p>
<p><strong>Augustus Yuan</strong><br />
Yes, so So I guess you have to go see it. I will. I will. I definitely will. Alright, Stacy,

</p>
<p><strong>Ryan Burgess</strong><br />
what do you have?

</p>
<p><strong>Stacy London</strong><br />
Alright, so I've got three picks. The first pick is a song called wrong days by Sung glitters as sort of a chill summer vibey electronic songs also like

</p>
<p><strong>Aaron Gustafson</strong><br />
is it rose a wave? What Wait, what? So first, you don't know about emo hip hop. And now you don't know about Rosie. I already know. I'm like the

</p>
<p><strong>Jem Young</strong><br />
least cool person here. I know nothing about pop culture.

</p>
<p><strong>Stacy London</strong><br />
Maybe I feel like it's maybe cooler than I'm not sure

</p>
<p><strong>Aaron Gustafson</strong><br />
we don't want to be pigeonholed right now.

</p>
<p><strong>Stacy London</strong><br />
So that's a good one for so good coding tunes. The second one is Adam. Dance, I think is how you pronounce it by Mark rhomboid. It's sort of neoclassical and electronic vibe to it. So if you like, the combination of those two things, I think you'll like that. And my third pick is actually Aaron. Because he's a bit of a tech hero of mine. And it's very, very honored to speak with you tonight. Yes, hearts, hearts. I think you've done amazing things for pushing the web forward and being an advocate for it. And I'm very grateful for that. So thanks. Sweet. Thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
It's nice to see that was a very good plus. Alright, Jem, what do you got?

</p>
<p><strong>Jem Young</strong><br />
All right. I never been proud promising a lot of Valley silicon pics. For those who don't know, a bunch, I would have liked to. Uh, so those who don't know Valley silicon is the segment where I pick things that are just so outrageous and should not exist. They only exist because we have too much money. For my first one, and this is great podcasting. Because no one else will see it. You'll see later when you click on the link. I have here a picture of a brick. This is a brick it has the logo supreme, which is a it's a supreme brick. How much would you pay for this brick?

</p>
<p><strong>Aaron Gustafson</strong><br />
Is it Wi Fi enabled?

</p>
<p><strong>Jem Young</strong><br />
It is not thank you

</p>
<p><strong>Augustus Yuan</strong><br />
so it's literally a break. So with the supreme logo,

</p>
<p><strong>Aaron Gustafson</strong><br />
so you would call it an offline brick? Oh, I

</p>
<p><strong>Jem Young</strong><br />
would call it an offline brick.

</p>
<p><strong>Augustus Yuan</strong><br />
That was a good one that we

</p>
<p><strong>Jem Young</strong><br />
use for throwing their windows or building houses. How much would you pay for this brick? What is it made

</p>
<p><strong>Aaron Gustafson</strong><br />
of regular brick? Is it free range is free range has lived a good life?

</p>
<p><strong>Jem Young</strong><br />
Well is a good life.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm gonna put a $20 mark and that's expensive for us one

</p>
<p><strong>Jem Young</strong><br />
brick would make Yeah, building a house insanely expensive actually. Yeah.

</p>
<p><strong>Stacy London</strong><br />
Do you ever seen the movie Empire records? No, there's yeah, there's a scene in that where he's like your superb manager. And now see the word supreme I'm like your supreme brick.

</p>
<p><strong>Augustus Yuan</strong><br />
You're sorry brick What are you paying

</p>
<p><strong>Stacy London</strong><br />
for John or whatever is the bricks name?

</p>
<p><strong>Ryan Burgess</strong><br />
No, but I didn't what he paid for it

</p>
<p><strong>Stacy London</strong><br />
was superb and supreme. Brick 99 cents.
</p>
<p><strong>Jem Young</strong><br />
also expensive for a brick though.

</p>
<p><strong>Aaron Gustafson</strong><br />
Again it is what foundation of building what is its intended purpose?

</p>
<p><strong>Jem Young</strong><br />
It's a brick Okay, so

</p>
<p><strong>Aaron Gustafson</strong><br />
it's being sold as a bricks it is a brick it's just a brick that happens to say supreme it is smooth sided which if that's what you're going for in your buildings

</p>
<p><strong>Stacy London</strong><br />
it good fun Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
destroy our dreams. What is it?

</p>
<p><strong>Jem Young</strong><br />
No no more takers this brick that you see here? Oh, I guess you have a

</p>
<p><strong>Augustus Yuan</strong><br />
honestly I just by brick myself and carve the logo.

</p>
<p><strong>Jem Young</strong><br />
They would be cheaper to buy this brick here. Sander. One brick. What's frame logo cost? $275 Split Geez. For a brick that is just a brick rare with a brick. I don't know. I don't know why

</p>
<p><strong>Ryan Burgess</strong><br />
this thing is so neat. Why is this?

</p>
<p><strong>Jem Young</strong><br />
Like what do you do? Yeah,

</p>
<p><strong>Aaron Gustafson</strong><br />
that's exactly what selling is. Is that is that Design Within Reach? I have my

</p>
<p><strong>Jem Young</strong><br />
own rant about Design Within Reach and their ironic title. It's not within reach. This is stadium goods. I saw a lot of supreme where supreme was popularized by the banned Odd Future. I do know that because I'm slowly Not really. Yeah. Anyway, so that's one My second pick for valid silicone is a company that recently IPO they have about 2 million in recurring visitors. So as in someone buys something that these personal like come back. That brand is called Farfetch. You've probably never heard of it because all of their clothing is outrageously expensive. So if you're ever wondering, Hey, you see a fashion show? They say so lets you explore the Wonder flash. If you're going to a fashion show or see a fast show TV you think that person is wearing a trash bag with a cone on their head? How is this fashion? And yet somehow you and I are all wearing our it's avant garde? You and I are all wearing t shirt and jeans and standard clothing everybody else right so like where's this Where's there is the the in between step is far fetched calm, which is luxury brands. And it's kind of like not quite crazy runway fashion and not you and I fashion but it's in between. But the best part is it's really really expensive.

</p>
<p><strong>Aaron Gustafson</strong><br />
So it's not like Bjork in the swamp. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
this is the best part is cheap. Oh no.

</p>
<p><strong>Augustus Yuan</strong><br />
885 for

</p>
<p><strong>Stacy London</strong><br />
10

</p>
<p><strong>Jem Young</strong><br />
You're just scratching the surface of like, absurd this stuff is

</p>
<p><strong>Ryan Burgess</strong><br />
alright, so Jem, you're not a fan of this site. You're not shopping on the site. But I love the pic what's the next big so buy

</p>
<p><strong>Jem Young</strong><br />
last and final pick is a actually a legitimate good pick. It's Lo Fi hip hop. It is a station on YouTube and it's it plays Live streams 24/7 It is fantastic for just like, I don't know anyone listen to I've ran out of all my picks from Stacey and I don't know what emo hip hop is. Which apparently is a thing according to Aaron. Again, I'm not cool. But I just think I just need some use of the code. Dude, I just go straight to the station as live. I have no control of the station, but it's awesome. It's perfect for coding.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. All right, I got two picks. One is actually a little bit of a promo is Gemini will be tending mg Atlanta in January which we will be doing a live front and happy hour. And we have a little special sidebar thing going on as well that Gemini will be doing. But nga Atlanta is what the second year that they've done it, we were there for the first year. I'm really excited for it. They did a very good job of like promoting like women speakers, first time speakers. It was all around just one of one of our really impressive conferences. So I'm really excited. If you want to join us there tickets are available.

</p>
<p><strong>Aaron Gustafson</strong><br />
And are you guys being billed as Gemini? Because

</p>
<p><strong>Jem Young</strong><br />
you're on fire. Wow, man,

</p>
<p><strong>Ryan Burgess</strong><br />
like, no, but like, you need to just like yes, yes,

</p>
<p><strong>Aaron Gustafson</strong><br />
totally. Yes, yes,

</p>
<p><strong>Ryan Burgess</strong><br />
I would love it. We're not gonna this brand new thing gotta mean to pull you in here, a little bit more serious. And my second pick is a book I recently read, which actually read it for work is called culture code. At first that kind of started off a little, a little slow. I gotta admit, I was hard to get into. But it's really good for talking about how to build really well performing teams and in a company. But I think to me just in teams as they talk about, like, how certain sports teams work together, how the military works together. And I think all in all, there's a lot of really good takeaway, so I highly recommend that book. Have you checked out the starfish and the spider? I have seen that one? I have not read it yet. Oh, so good. Yeah, different different ways of organizing. It's

</p>
<p><strong>Aaron Gustafson</strong><br />
got a follow up that follow up.

</p>
<p><strong>Ryan Burgess</strong><br />
So I'm just finishing the culture codes. And now I'm another read. I love it. Thank you. All right. Before we end the episode, I actually want to thank you, Aaron, for joining us. Thank you. My pleasure. Thank you. Where can people get in touch with you?

</p>
<p><strong>Aaron Gustafson</strong><br />
Um, I am Aaron Gustafson on Twitter a RONGUSTAF so when I'm also Aaron hyphen Gustafson calm Yeah. And they can also read the the first edition of adaptive web design my my book that is available for free online as a PWA second edition is still available in in paperback and such from new writers. But yeah, the first edition is free online.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, thank you all for listening to this episode. Make sure to subscribe to front end Happy Hour podcast wherever you like to listen to podcasts, which can be on Spotify now. Finally, we made it Yep. And you can follow us on Twitter, our front end ah, any last words

</p>
<p><strong>Stacy London</strong><br />
to take the rest of this offline? Cheers,

</p>
<p><strong>Jem Young</strong><br />
guys. Cheers.

</p>
`;
        return transcript;
    };