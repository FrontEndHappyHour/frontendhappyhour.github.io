module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End happy hour. This is episode 40. And we are joined by Naoufal Kadhom to talk to us about React Native. No foul is a software engineer from Netflix. No foul. Can you give us a brief introduction of who you are, what you do and what your favorite Happy Hour beverages? 

</p>
<p><strong>Naoufal Kadhom</strong><br />
Well, as you just said, Ryan, I do a lot of React Native, my name is Naoufal and I work at Netflix as a senior software engineer. And my favorite happier beverage is probably gin and tonic, or scratch that gin soda to soda is what I do. Right on.

</p>
<p><strong>Ryan Burgess</strong><br />
We should have been drinking that today. We should have. Let's also go around the table and give brief introduction of today's panelists. Derek, you want to start off?

</p>
<p><strong>Derrick Showers</strong><br />
Yep. I'm Derek showers. I'm a senior software engineer at LinkedIn.

</p>
<p><strong>Brian Holt</strong><br />
I'm Brian Holt, and I'm not already drunk.

</p>
<p><strong>Augustus Yuan</strong><br />
I'm Augustus Yuan. I'm a software engineer at Evernote or front end engineer. I

</p>
<p><strong>Ryan Burgess</strong><br />
never know. I was gonna say, Gosh, Stacy,

</p>
<p><strong>Stacy London</strong><br />
Stacy London, I'm a front end engineer at Atlassian.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. So what do we decide today's keyword is web view? Web View. So if anyone says the word web view, we'll all take a drink. All right, well, let's get started then, like what is React Native? Anyone want to give a little bit of a definition of what React Native is?

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, sure. So I'd say in the simplest form. React Native is a way to build mobile applications using JavaScript.

</p>
<p><strong>Ryan Burgess</strong><br />
It's not been using the web view. Is it?

</p>
<p><strong>Derrick Showers</strong><br />
Explain what a WebView is? I think that that's a good point. So yeah, it's it's I guess, in I guess it's a similar concept in Android, iOS, I know from iOS, it's what it's called, but basically just a way to implement browser inside of a native app.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Same in Android TV. Yeah, yeah. So you can actually load your web code. And it's a native view that's basically holding the web code,

</p>
<p><strong>Derrick Showers</strong><br />
like Facebook is alive, right? When you ever you tap on something on the feed, you enter into their web view. So the advantages, you're not sending the user out to the browser. And you know, hopefully, you're gonna stay inside your app.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it's basically like an iframe in a native app.

</p>
<p><strong>Stacy London</strong><br />
And it used to not be like full capable, like it wasn't as capable is like the the native browser on the phone. But now it kind of is closer.

</p>
<p><strong>Ryan Burgess</strong><br />
It's still lacking a lot of features, or certain things that you just won't be able to do. But yes, you you're able to do some extra hookup to like a bridge to the actual native layer that allows you to do a lot with it. But it's still not native, which React Native is a lot closer to a full native experience. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I mean, technically, actually, what's interesting is even on iOS, Chrome is nothing but a WebView. Because you can't build a browser on iOS. So what's what's so Statius point? I know before like, a couple years ago, they didn't something like the web, you didn't even have access to the same JavaScript

</p>
<p><strong>Naoufal Kadhom</strong><br />
engine. Yeah, right. It was like a watered down version. Yeah, it was a lot slower.

</p>
<p><strong>Derrick Showers</strong><br />
So that's why I never used Chrome on iOS, because it was, you know, you, you still you had your bookmarks and your history, but you had this watered down version of a WebView. But you

</p>
<p><strong>Ryan Burgess</strong><br />
didn't have to use Safari? Yeah. He said. Yeah, we kind of missed it. So what are some benefits to leveraging React Native,

</p>
<p><strong>Naoufal Kadhom</strong><br />
um, the main benefit, I would say, especially, would depend on the team that you have. So if you have a JavaScript team, then you're now magically able to start, you know, writing mobile apps, both iOS and Android apps. What's worth clarifying, though, is that React Native is not, you're not loading a website within a WebView.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers can run away from, you're actually

</p>
<p><strong>Naoufal Kadhom</strong><br />
writing JavaScript code that controls your native components, your native modules. And so that's why you're able to achieve or to write an application that feels fully native because it is needed. You're just interfacing with it using JavaScript, and something called the Bridge, which we'll probably talk about later. Let's not jump into it right now. For that some more. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I think to the one of the biggest benefits is the fact that you're getting a lot of iOS and Android together. You're not having to write views for both a lot of the code you're writing once and actually getting iOS and Android, which is pretty amazing.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think the one of the other cool things about it is that you don't have to write your entire app in React Native like you can write parts of it. So I think like a really good use case is something that you would normally put in a web view. Cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
See, there's no way around it, we chose a great keyword.

</p>
<p><strong>Derrick Showers</strong><br />
For instance, settings on LinkedIn is in a value view that the browser browser view. And the reason for that is just because it's easy, like you want something that's, that's easy for people to develop something like settings is, you know, people aren't going to want to build it three times. And no one wants to worry about settings anyway, if you tell them that the builder three times are never going to want to put any of their stuff in settings. So product names and whatnot. So you, I think that's an excellent use case for React Native, because then you can still make it appear like it's native, and which is a lot nicer than loading something in essentially an iframe. And then see how I got around that.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, and you also get the benefit from like, the almost the entire JavaScript ecosystem, right? If you're used to using moment J, s, and you can use that if you're used to using I don't know, lodash, or Yeah, Bluebird, whatever library X library, then you can use all like most of those, as long as they're not using any environment specific API's, you can just pull them into your native app and write it like you would with your web app.

</p>
<p><strong>Ryan Burgess</strong><br />
Is there any concern though, at that point to adding lodash? Adding moment, all these different libraries? Is that going to add bloat to your end result of app that's going into the App Store? Or Google Play Store? Is that going to make a difference into the code base?

</p>
<p><strong>Naoufal Kadhom</strong><br />
Right? Like your bundle size? Yeah, yeah, it'll get bigger, I think it's probably less of a concern than adding it to your website, just because apps tend to be a lot larger, and your users will download it once. And then they had on their device. I think I'd spend more time thinking about adding package to my web bundle than I would to my revenue bundle.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know, I still struggle with the fact of like, you know, certain apps, like Facebook's pretty big, and people are downloading that. If they have a terrible internet connection, they're not getting that app very quick. And they might quit.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, I mean, I think the same best practices apply to React Native, like if you're, if you're only using like lodash get or what's another one, like throttle it say, to only pull down like these methods versus pulling down the entire package? So if you're sensitive, like if your app is sensitive to or your customer base is sensitive to bundle sizes, and I would definitely yeah, you

</p>
<p><strong>Ryan Burgess</strong><br />
can be smart about it. You spec lodash is a perfect example. You do not need an entire library. It's a great library, but you do not like how many? How many methods you actually use,

</p>
<p><strong>Augustus Yuan</strong><br />
correct me if I'm wrong, like so like, if you have your current web web application stack on React, like, is it just one to one when you move like the components? If you wanted a component that? Or is there some like kind of massage one to one between like a web React component versus I imagined? It's like, it's actually a good question, right?

</p>
<p><strong>Ryan Burgess</strong><br />
It's not so I

</p>
<p><strong>Augustus Yuan</strong><br />
imagine there's some sort of like massaging you have to do, yeah, no, you're

</p>
<p><strong>Ryan Burgess</strong><br />
you're there are certain ways that you can share some of the code base between web, iOS and Android, say like, if you're wanting to use Redux Redux is a good way to manage your data. But at the same point, you're still writing web view. And I don't mean that the actual web view that we're talking about,

</p>
<p><strong>Derrick Showers</strong><br />
but I just said it twice. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
clarify cheers. But your web code, the view logic for that is different than what is for the handlers for iOS and Android, you may actually end up at some point writing, web and then iOS and Android together. And I would say, in my mind, I look at it as about 80, or 90%. You're sharing Android and iOS, React Native together, but they're not shared to web. I think there are some ways no foul, even though some there is some like, yeah, things out there that will, will they basically transpile down to iOS and Android from Web.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah. So there are a few things that are, there's already, like a few libraries that help you do that one called React Native web, which will let you use the React Native components. So like, there are a few helpers called like view, which maps out to like a div, or what's the other one attacks, which is like a span, and then you have text input, which is an input. So they're like, there's a set of probably like eight primitives that match to almost any platforms. And if you're, if you're interested, you should definitely look out, look up a library called react primitives does another one that really focuses in on those, there's also a few talks given by a guy from Airbnb called Leland Richardson, who's done a lot of work there. And it's also his library. So definitely worth checking out. But when React Native came out, they made it like very clear that it wasn't a write once, run everywhere, and what they call it is like learn once Write, write anywhere, so you learn react. And then you can apply the principles of React. In React Native, I'd say like, if you if you already had a web component, then you could port it over by just replacing your render method. So like if your render method has like divs and spans and then you'd replace that with views and texts. And as long as you're not using any, like web API's, so say you're using local storage. I see. That's probably a bad example because there's like a polyfill for it, but say another one. Then you'd want to you definitely want to avoid I see,

</p>
<p><strong>Stacy London</strong><br />
that's a pretty big difference from Cordova x curve is like, you could write a responsive website Exactly. And then write you know, wrap it up. And you can also have it be installed. And it was all just one code base.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. Except you're not getting the it's not native logic. So you're not getting that extra performance. It does feel like JavaScript on a phone. That's a dream, though,

</p>
<p><strong>Brian Holt</strong><br />
right? Like it is. It's

</p>
<p><strong>Ryan Burgess</strong><br />
like, where's React Native, I think you've nailed it the same, it's not a right one solution, I do think you can get part of the way there and the fact between like iOS and Android, you can get 80 or 90%, you can, depending on what you're trying to do, you can get a lot, it's very close.

</p>
<p><strong>Derrick Showers</strong><br />
One of the other things I think is cool about React Native is that you can make changes on the fly with kind of get around App Store submissions and recompiling. The app, which I think is really nice, with some of the constraints that Apple has around

</p>
<p><strong>Ryan Burgess</strong><br />
me submitting to submit an app though, do you not?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, but you can like dynamically pull the

</p>
<p><strong>Naoufal Kadhom</strong><br />
J S bundles. And yeah, so you can update, like certain J S bundles, and then push that down to your users, either. Right? Or like, you could show them a dialog that says, you know, a new version of your app is available, kind of like on Spotify, how you have that that bar that says refresh, or you can just push it to them the next time they open the app. So say you're running like a few AP tests, then you could push a new AP test your users like the next time they open the app, without without without needing to go through the App Store.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, and they don't actually need a vacation saying like, update or anything. It can be behind the scenes for the user. Yeah, okay. That's pretty cool.

</p>
<p><strong>Stacy London</strong><br />
I'm sort of surprised apples. Okay, with that just based on how like restrictive they've been.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah. So there was actually like, there was like thread on Hacker News. Few months ago, that was saying Apple's pulling apps, sending down JavaScript bundles, like dynamically updating apps without going through the App Store. And like the reason like what they were actually, like the apps that they would that they actually flagged that they think they had removed from the App Store were apps that were sending down native code over the wire and impute it and like manipulating, like the apps that way. And so to be clear, like React Native only sends out JavaScript that then interacts with the API's that are already exposed. And so that's that, just like Apple deems that as being okay. And so that's what you'd be sending down over the wire. So say you want to expose a new native API that was already available, you'd have to submit an app update via the app store.

</p>
<p><strong>Ryan Burgess</strong><br />
There. I guess there should be though some concern a little bit, the fact that Apple or Google could just decide not to support that at some point. They could say no more JavaScript at all.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, they could. They could. I think they've done that before with like other API's. They've done that with hardware.

</p>
<p><strong>Ryan Burgess</strong><br />
Adobe wanted to do flash for iOS apps. And Apple put a kibosh on that

</p>
<p><strong>Naoufal Kadhom</strong><br />
the difference with the flash example is that it was never available on on iOS. That's true. They never actually allowed Flash installed on any of it. I think like, it's not like this. It's an API, right? It's an API. And it's like, it's part of like, like, it's an it's an API that you can use within Objective C, it's basically eval, eval for Objective C, where you can write like, stages, where you can write like a JavaScript function within, like within a string, and then eval it to give you a value or to interact with certain native API's. And so it's essentially a mapping on one side to the other. So you're writing like a JavaScript function that maps to so like, you'll write, like a view component, like view, which is equal to div and then on the other side, and maps down to the view equivalent on on iOS. And it does the same thing on Android. So you're writing this like beautiful JavaScript code, but really, it's just going over the bridge and interacting with the real native modules? Could they remove it? I mean, they can do they can do what they want.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I think there's a lot of large companies using React Native so I think that's always a good signal. But at the end of the day, Apple Google could totally just decide no, we're not gonna allow this anymore.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, but Facebook is I know like their entire I wish they use more of it. Yeah, I think it's like their groups and their events portion of their main app is React Native Yeah,

</p>
<p><strong>Naoufal Kadhom</strong><br />
I think that parts of like, messenger I think it's like sprinkled everywhere.

</p>
<p><strong>Ryan Burgess</strong><br />
And I mean, Airbnb uses a ton like you mentioned Leland like they're they're doing a ton that Airbnb, they're cutting

</p>
<p><strong>Naoufal Kadhom</strong><br />
edge. Like if you're really into React Native, you should definitely check out what Airbnb is doing is using Tesla's using it, which is pretty

</p>
<p><strong>Ryan Burgess</strong><br />
interesting. Are they they're not using it in their cars, are they? I actually heard

</p>
<p><strong>Augustus Yuan</strong><br />
something like I saw an article about someone saying react in smart cars. I was like, Oh, God.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, you don't you don't trust reactor? No, no. I

</p>
<p><strong>Augustus Yuan</strong><br />
was like, wow, it's taking over the world. Yeah, it'd be everywhere

</p>
<p><strong>Stacy London</strong><br />
react in your toaster.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, a lot of companies are using it. I mean, JavaScript core has been in spin in like os 10. Since like before leopard. They're just like, nobody made a big deal out of it. And then it came to iOS and iOS.

</p>
<p><strong>Ryan Burgess</strong><br />
I was pretty excited. I actually remember the announcements when they added in Mac OSs and oh, gee, that was that was pretty awesome.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, I definitely wasn't paying enough attention. But yeah, they added to iOS, iOS seven, and then React Native came out late iOS eight, I think. So, you know, it's not like, it's been possible for a long time. It just, we're only now taking or taking advantage of it, thanks to Facebook's heavy lifting, probably like when I was seven was was was announced? Yeah, to be honest, I'd be pretty surprised if they got if they got rid of JavaScript core support. I mean, it's good for Apple, right? It's easier to build applications and more apps in the App Store is good for their business. And JavaScript is one of the most, if not the most popular language I didn't

</p>
<p><strong>Ryan Burgess</strong><br />
get Yes, I think it is actually your last few years, I believe, even like GitHub, and like they've done the studies on it. So yeah, it makes sense. And well, we're on a JavaScript podcast kind of makes sense. Yeah. So I mean, React Native. Sounds great. What are some limitations, though? Like, there's got to be some limitations to this. It's not a right. One solution. I've never seen that. But what are some limitations? Why you may want to think twice before using React Native.

</p>
<p><strong>Naoufal Kadhom</strong><br />
I mean, if you if you enjoy coding for a really long period of time, you're not going to be able to do that. Because you'll be able to run your apps faster.

</p>
<p><strong>Stacy London</strong><br />
Like the interview question, like what is your what are your downfalls? I'm just I'm too passionate to bash.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, right off the bat, I will say one that would concern me is the fact that iOS and Android are gonna release new API's that React Native won't have right away. So someone has to go write that, or you can go write that too. But they're gonna release some new feature that's, we haven't even thought of yet. And React Native, you have to play catch up, someone's got it, like, whether it's Facebook, or someone in the open source community has to write some sort of a bridge for that view.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, it's a thing, I mean, actually, was gonna make the same point. So I'm gonna play devil's advocate a little bit, but to a point that I will make too, I think, though it is, a lot of times in the real world, or when you work for a company at scale, or an app at scale, you can't really, you can't really use the new stuff anyway, because you have so many users on older versions of the operating system. So, you know, like, we're supporting two versions back of iOS. So there's a lot of stuff that have come out in the last two years, and we can't even use I mean, sure, you can use it

</p>
<p><strong>Ryan Burgess</strong><br />
as a user, there are ways to like push to those users. Oh, yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
mean, but it's hard to get funded, it's hard to get approval to build things that like only, you know, 25% of your users, you're gonna see

</p>
<p><strong>Ryan Burgess</strong><br />
I disagree a little bit, because there are times that even like Apple and Google will actually reach out to companies and say, like, Hey, we're doing this new feature, and we'd love for you to take advantage of it. And they'll work with you to do that sure of a React Native application. You're not taking you can't take advantage of those new API's. Yeah, no,

</p>
<p><strong>Derrick Showers</strong><br />
I totally agree. I think that's a rarity, though. I mean, yeah, that's, that's why we try to use the newest newer API's is trying to get,

</p>
<p><strong>Ryan Burgess</strong><br />
like, like LinkedIn is probably one of those places that they're like, Hey, we have this new feature coming out that you guys should take advantage of, they'll try and give you that ahead of time. But if you're on React Native, you may not get that

</p>
<p><strong>Naoufal Kadhom</strong><br />
Oh, okay. That's what you mean, I thought you meant like new API's that are coming out, or maybe iOS like 11. And then say, half your users don't upgrade to iOS 11. And you have access to them. So you have to wait long. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
it's not even necessarily like the iOS version, it might just be that they have some new API that they're adding, which could just be a version update. Yeah,

</p>
<p><strong>Naoufal Kadhom</strong><br />
yeah, there's something overhead to like mapping. Like, if you want to use a specific API that isn't baked in to React Native, like you need to do yourself. I think that's one of the strong points of React Native is that there is a good API to allow you to do that, called the native modules API. And there's another one. Actually, it's also called new modules. But it allows you to expose components. So if you want to expose like a new button, say the Apple Pay button that's already built in, you can suppose it by writing a function and then importing it as a React component. So there are tools to do that. So you're never stuck, you can always get out of a situation like that, which is why I think React Native has been so successful, because like, if the API is in there, you can just do it yourself. The problem, though, is like it's meant to be a solution to write native apps in JavaScript. Yeah, not have to go under the hood. And use Objective C, or Java or Kotlin, or Swift. And so if you're in a position where you have resources, you have like native resources, like engineers that are that are proficient in these languages that can help you then it won't be a problem. If you're getting those languages, and if it won't be a problem. But if you're just a JavaScript developer, and you're building this app, and suddenly you really need Apple Pay, for instance, and it's not available, then you're stuck

</p>
<p><strong>Derrick Showers</strong><br />
and got that somebody's an engineer that knows both right and right. Exactly, no, yeah, that's that's rare. Yeah. Wish It wasn't as rare as it is. Yeah,

</p>
<p><strong>Naoufal Kadhom</strong><br />
no, exactly. So that's, that's sort of like the risk that you're taking.

</p>
<p><strong>Ryan Burgess</strong><br />
I think one nice thing though, too, is like and I believe Derek might have even mentioned it is the fact is you can actually couple React Native With Objective C Swift or Java for Android, is you're not just writing, like, you're not just stuck with one, like so you could actually take write part of your application in Objective C and part of it and React Native, and they'll work fine. So yeah, I was gonna say, but there again, if you're a JavaScript engineer, just writing the React Native, you may need a native engineer to help with that,

</p>
<p><strong>Augustus Yuan</strong><br />
right? I feel like that is like the biggest burden for a lot of people who are like, who may want to even kind of think of transitioning, like, for example, every now we have a whole team of Objective C developers, and we're still in the process of trying to transition some of our code to Swift. It's like, oh, hey, let's, let's throw in React Native. Because all the web engineers, you know, they can they can write react. Awesome, you know, but at the same time, it's like, okay, well, it I feel like it can if not organized and managed. Well, it could be really messy, right?

</p>
<p><strong>Stacy London</strong><br />
We were just discussing a limitation. So one of the limitations that I have for Cordova stuff was, if you wanted the the mobile app to kind of have that sort of native feel, or look and feel of like, an iOS or an Android thing. It was hard to do that because you kind of wrote it to look the same everywhere a little bit. And if you had if you wanted to do that, it was a lot of extra work. How does that work with with React Native to make some hot like to make a button looks a good question.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, certainly. Yeah, that's a really good question. I'd say it depends on which part like which parts for for the overall look of the app, you almost get it for free, because you're mapping it to, you're snapping into the real. But if you're looking at things like, like performance, like framerate, framerate can be an issue. So like, we're thinking, we're talking about smooth animations, for instance, right? If you're doing like a gesture, where you're following the position of the thumb, across the screen, so you're doing that in your function is in JavaScript, and so you're sending for a bit for each frame, you're sending all that like the xy position over the bridge, like each time. And so that's getting serialized and asking parsed and Objective C, and then you're running a function there, and then the result goes back to your JS side. And so that that hat like has caused a lot of performance problems in the past. The way to get around it is to Pat is to write that function on the Objective C side. And so that way, like the finger tracking is happening in Objective C, and it's being computed there too. And so you don't have to go over over the bridge every time like the bridge is like the most expensive operation. And so anytime that you're dealing with things like framerate, you'll have you'll, you'll hit those boundaries where it doesn't quite feel native, it doesn't feel right. But aside from that, I'd say it's it's not a concern, like it was for PhoneGap or Cordova.

</p>
<p><strong>Derrick Showers</strong><br />
That's the biggest thing that I've heard, though, against React Native is performance. And I have heard that you can make it performant. But I think I think this kind of goes well with what you're saying. But you have to know what's happening under the hood, and the whole concept of the bridge and like how to make it performant in order. And so if you're just if you don't have that that deep ish level of understanding, you can write something that's not performing.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Right. Right, depending on what you're doing.

</p>
<p><strong>Ryan Burgess</strong><br />
I think another limitation too, and we kind of briefly touched on it before is app size, where I mentioned, like, no foul is the app size that, you know, if you're adding a bunch of libraries, JavaScript libraries to your app that that could add to the overall APK size. But at the same time, his React Native actually adds to adds a little bit of weight, does it not for the download size?

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, it does. I think I think it's just like about three megabytes.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's like, yeah, I think iOS is only like a mag or something but an android android three, three to six. Is that what Yeah, and so, I mean, that could be a problem. If you're wanting to keep your app size down. You're now before you've even written any of your view logic, just by adding the React Native library, you've added quite a bit to the actual app size.

</p>
<p><strong>Derrick Showers</strong><br />
Is there Preact native?

</p>
<p><strong>Stacy London</strong><br />
For no native for no react.

</p>
<p><strong>Brian Holt</strong><br />
They're never gonna do that.

</p>
<p><strong>Ryan Burgess</strong><br />
Damn,

</p>
<p><strong>Naoufal Kadhom</strong><br />
they're never going to react native

</p>
<p><strong>Brian Holt</strong><br />
never gonna do.

</p>
<p><strong>Augustus Yuan</strong><br />
So what you're saying is, it's open. So

</p>
<p><strong>Derrick Showers</strong><br />
give us six months.

</p>
<p><strong>Naoufal Kadhom</strong><br />
It's not happening. Brian, hold does it.

</p>
<p><strong>Ryan Burgess</strong><br />
Brian, get on this, please.

</p>
<p><strong>Brian Holt</strong><br />
So it's never gonna

</p>
<p><strong>Ryan Burgess</strong><br />
What if people started sending you money? Or beer? Or whiskey?

</p>
<p><strong>Brian Holt</strong><br />
I mean, if it was the latter two, I'd probably just drink it and never get anything done.

</p>
<p><strong>Naoufal Kadhom</strong><br />
The code wouldn't be very good. I mean, granted, like the the largest part of React Native isn't it's not react, right? Everything else right. So even if you did drop Preact it would still be like it will still be three. Meg's Yeah, you're

</p>
<p><strong>Ryan Burgess</strong><br />
not saving as much as you would like. And I know iOS because you have like part of the JavaScript engines already there. Android doesn't have it. So it does add quite a bit of weight.

</p>
<p><strong>Naoufal Kadhom</strong><br />
That is a good point, though. Like, I think one of the things with React Native I mean, it's, it's proven to be very difficult to maintain because it does a lot Has it exposes all these API's to you so you can easily build an app? Like, I think there's like there's over 80 API's available to you. Maybe you're just sort of but like even then saves, like 40 API's, most people only only use maybe 10. Yeah, 1015 max of them. And so there's all the other ones. And it's like, there's a new version of React Native every month. And then there's a handful of like, maintainers. And then it's like, it's like one of the most popular projects on GitHub. So all these people are using it the reporting same like issues, because of X reason. And so it makes it very difficult to maintain, it makes the the library size a lot larger, because they have all these API's. And so I think it'd be easier to maintain. And it would make the apps the library size a lot smaller, if, like, most of those API's weren't in there, if they were just like third party libraries that you would download. And so React Native would only be the core set of primitives that we talked about earlier, like few texts, maybe like a few others texts, input and so on. And then if you needed Apple Pay again, for instance, then you would just download that library, if you needed basic storage.

</p>
<p><strong>Brian Holt</strong><br />
Is there a great Apple Pay library?

</p>
<p><strong>Ryan Burgess</strong><br />
How would I do all payments? That may be a good question? Yeah, I wanted to do Apple Pay credit card, Stripe, PayPal? Is there no foul? Is there a library for that?

</p>
<p><strong>Naoufal Kadhom</strong><br />
I've actually, I've actually never heard of one. Yeah, I really wait. That'd be great. I really wish someone could just take the time and build that form.

</p>
<p><strong>Ryan Burgess</strong><br />
So Brian and I are buggy. No foul, because he is actually written that great library. That is

</p>
<p><strong>Brian Holt</strong><br />
great. Well,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, if you want all those payments, let's start with one library. And then hopefully, it'll it'll be great. All right, so he's written a library. That is great. It definitely

</p>
<p><strong>Brian Holt</strong><br />
solves library patible.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Good enough. It's good enough. It's

</p>
<p><strong>Ryan Burgess</strong><br />
good enough. It gets you it's reactive payments. We'll link to it in the show notes. But yeah, if you have to deal with payments in React Native, definitely a great library to use. Yeah, so

</p>
<p><strong>Naoufal Kadhom</strong><br />
you won't get like that doesn't get bundled into React Native. So if you're if you're building an application, or if, if you're if you're building an application, and you don't need it, and you don't need payments, you don't have to pay that bundle size, right for payments. But if you do, you can head over to my GitHub and download React Native payments, and we have support for iOS. So Apple Pay stripe, Braintree and maybe Andrew pay soon. I don't know. Maybe you have PayPal on there, too. No, no, not payable? No period. No, no, no, not No, not yet. Just know. So never, probably never as part of React Native payments, there is a sweet like add on API. So if you're really passionate about PayPal, or if you work at PayPal, and you want to add it, you can just plug in.

</p>
<p><strong>Derrick Showers</strong><br />
There's no one really passionate about.

</p>
<p><strong>Ryan Burgess</strong><br />
You could also send them to the web view, right. So we've talked a lot about React Native and working well with Java and Objective C swift whenever you're writing is React Native replacement for those languages.

</p>
<p><strong>Naoufal Kadhom</strong><br />
I wish.

</p>
<p><strong>Ryan Burgess</strong><br />
And what makes you say you wish,

</p>
<p><strong>Naoufal Kadhom</strong><br />
like, yeah, it sits on top of them. Right? Yeah, it's just, it's just like you're just mapping. It's an interface to interface with Java and Objective C, hopefully one day we'll have a language that allows you to just write pure

</p>
<p><strong>Ryan Burgess</strong><br />
react, that'd be awesome. I mean, I don't know. I even think like, how do you feel Derek? Even the fact that there's Objective C and Swift?

</p>
<p><strong>Derrick Showers</strong><br />
I think that's a dream that everyone shooting for. That is just, I mean, it's the right one, not a new thing with mobile, right? Like if people were like, oh, you know, like, this? Is this, this? This is gonna save us so much dev time, if Android iOS and web are on the same, like, this has been an issue since Mac and PC days. Yeah. Before we even

</p>
<p><strong>Ryan Burgess</strong><br />
had iOS

</p>
<p><strong>Stacy London</strong><br />
national, what you can write once and run everywhere. What

</p>
<p><strong>Ryan Burgess</strong><br />
a web Do you cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
This is why like PhoneGap and Cordova was made and why like, progressive web apps are trying to like take off and stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
So why wouldn't you use PhoneGap or Cordova over using React Native

</p>
<p><strong>Augustus Yuan</strong><br />
because it's just not fast enough. I've actually even seen this like, actually. So like, I did this hackathon, where we tried to like make a game. And then we went to this game conference. And this native developer came he's like, Oh, that's a pretty cool game. Oh, like Yeah, we use Cordova he was like, but this was like, way back then. And then we were like, oh, like how like, why is it so funny? Like we now we can like do this and he like showed us like this mini like, sandbox game made and he like had like a gazillion particles, like, come out as just like, Okay, show me you doing that in Cordova? They're like,

</p>
<p><strong>Derrick Showers</strong><br />
I wonder how much of it too is is that his his opinions? You know,

</p>
<p><strong>Brian Holt</strong><br />
that's some asshole developer. Yeah, it's like

</p>
<p><strong>Derrick Showers</strong><br />
it's like even on that like, being kind of on the native side of things more recently. It's like people you know, we've if we were to start a new app, no one on my team anyway, would even think about doing it on React and React Native and that's true and like so many different

</p>
<p><strong>Brian Holt</strong><br />
someone on your team would think about it.

</p>
<p><strong>Derrick Showers</strong><br />
Well, I don't mean the less My team,

</p>
<p><strong>Naoufal Kadhom</strong><br />
hopefully you.

</p>
<p><strong>Ryan Burgess</strong><br />
But no, I think you're right though a lot of us are more JavaScript oriented. So we're happy to write more JavaScript. But the mobile devs are looking at us like you guys are nuts, JavaScript on a native app. Nope, that's not good, like write native code. And that's a lot better. And so I think it is actually a really hard thing to convince people to leverage React Native, versus writing Objective C, Java or Swift. Here's

</p>
<p><strong>Stacy London</strong><br />
like, I think a good reason that a lot of companies don't have a lot of money. They don't have a lot of, they don't have enough money to have like, a separate Android native team and a separate iOS native team and a web team all doing the same things coordinating across them all. And like, a lot of times it is just like, a money decision like you don't have

</p>
<p><strong>Ryan Burgess</strong><br />
you have it. I think for a startup, it's a perfect thing to be leveraging his React Native will get you a lot of things really quickly, he might start to say, Okay, well, now we need to write native pieces of the app, which is fine, you could start writing some of those views in tangent with the React Native, which is great to

</p>
<p><strong>Derrick Showers</strong><br />
coordinate agency like or if you're doing something for Yeah, I think it's perfect.

</p>
<p><strong>Stacy London</strong><br />
For Speed. Maybe most apps like speed really isn't that big a deal. Like there's so many apps in the world that are like, fill out a form and submit it

</p>
<p><strong>Naoufal Kadhom</strong><br />
exactly.

</p>
<p><strong>Augustus Yuan</strong><br />
I will say like if there is any language that is the closest to achieving the dream, right? It's probably JavaScript, right? Like, at least from what I've seen. Yeah,

</p>
<p><strong>Naoufal Kadhom</strong><br />
I think we all hope so because we're all

</p>
<p><strong>Derrick Showers</strong><br />
Evernote uses Java to write front end code.

</p>
<p><strong>Ryan Burgess</strong><br />
Yes. They're slowly getting

</p>
<p><strong>Augustus Yuan</strong><br />
rid of that slowly getting there.

</p>
<p><strong>Ryan Burgess</strong><br />
And they've they're moving to react slowly, slowly.

</p>
<p><strong>Naoufal Kadhom</strong><br />
I mean, Collins trying to do that, like they're there. And they're mostly I mean, you can use it on Android. You can compile down JavaScript already, if you want to. And then you can also share code on iOS. What is this Cortland Kotlin Kotlin,

</p>
<p><strong>Brian Holt</strong><br />
the latest first class citizen on both Android Android it's a JVM language made by

</p>
<p><strong>Naoufal Kadhom</strong><br />
JetBrains difference. Id ID you guys IntelliJ

</p>
<p><strong>Brian Holt</strong><br />
WebStorm Ruby mine pi charm,

</p>
<p><strong>Ryan Burgess</strong><br />
people leveraging this or it's fairly new.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Netflix that use it some like most Android people that I've spoken to are really excited about it. Every now we're

</p>
<p><strong>Augustus Yuan</strong><br />
also trying to leverage it to leverage it to Yeah,

</p>
<p><strong>Brian Holt</strong><br />
I'd say it's in a similar state to Swift that it's yeah, it's pretty young suit. I mean, when you're on the bleeding edge, you're the one bleeding kind of thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And Swift is still growing significantly. So but I would say Swift is even

</p>
<p><strong>Brian Holt</strong><br />
ahead of Collin. Just my uninformed opinion.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. I mean, it's been out for because they just announced it this past Google I O. Right.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah. Yeah, they announced that it was like an official Google thing. But it it has been around for a while.

</p>
<p><strong>Ryan Burgess</strong><br />
So Augustus had brought up building his Cordova app again, back then. But our phone gap at that time. So you talked about that in DC, it also brought up building applications that look and feel like iOS and look and feel like Android is PR Dova or React Native a better route to go for that

</p>
<p><strong>Naoufal Kadhom</strong><br />
in React Native. When you're when you're targeting a button, you're targeting the real button, like the real iOS button that you would if you're if you're running an objective C application, and you get to style it just like you would if you want to change the color and make it larger, actually give it a border make look like a real button, then you can do all those things. So you can actually take advantage of material design for Android exactly. You can take of the iOS spec for Apple, you have to write Yes, like when you say I want to render a button you're at you're rendering a real objective C button when you say I want to render a ListView you're targeting the real objective C ListView. Whereas a Cordova you had a WebView. And before we tear, so let me just finish the point.

</p>
<p><strong>Augustus Yuan</strong><br />
immediate satisfaction is what we want.

</p>
<p><strong>Naoufal Kadhom</strong><br />
And within that view, you'd basically build a website, that would have to look like the Objective C button would have to look like, look and feel like the Objective C ListView. And so you like if you wanted to achieve that feeling, you'd have to spend so much time just to make it feel native. And the main difference is that React Native is truly native. And PhoneGap is a website trying to feel native.

</p>
<p><strong>Ryan Burgess</strong><br />
You'd actually have to write CSS to make it look and feel like you're you're ever quite good. Yeah. And it's still janky Yeah, it's yeah, the performance is just not

</p>
<p><strong>Naoufal Kadhom</strong><br />
really there scroll. What's that called? Like? WebKit touch scroll. And then they would like break because it's a broken? Oh, yes. Property.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I mean, anything beyond simple forms, Cordova fell apart, at least from when I was doing my experiments with whereas with when I was writing, like my React Native experiments, like, I didn't even have to be a very good developer, and it still turned out really, really well.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. With PhoneGap or Cordova, you're spending a lot of time probably just trying to make it feel okay. Bare minimum. Yeah, bare minimum. Okay. And it's everyone's gonna pick up your app and go, yeah, there are things I feel like Anita.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, there are things that you'll never get like an example of. You could have two apps that look the exact same and feel the same Because the Cordova developer put a lot of love into it, and as soon as you touch an input, the keyboard that comes up as a web keyboard where you have that extra bar above, with, like the forward and back, and oh man, right? Yeah. And native apps don't have that. And there's nothing you can do about it. There's nothing

</p>
<p><strong>Ryan Burgess</strong><br />
you can do. There's nothing you can pass down or know anything to the native. Yeah, because

</p>
<p><strong>Naoufal Kadhom</strong><br />
you're loading a web chair so that the

</p>
<p><strong>Stacy London</strong><br />
web view keyboard is different. Yeah, just

</p>
<p><strong>Naoufal Kadhom</strong><br />
like gives it away.

</p>
<p><strong>Augustus Yuan</strong><br />
I think it also like highlights the point you were making originally were react natives about like, learn once and right everywhere. And I feel like Cordova was trying to go more of the just write it once and don't even get it everywhere. Yeah, but good.

</p>
<p><strong>Brian Holt</strong><br />
Good, good segue into React XP. Have any of you played with react if you haven't heard of it? And it's from this like, really tiny, amazing startup called Microsoft. They're real scrappy.

</p>
<p><strong>Derrick Showers</strong><br />
And he's got my

</p>
<p><strong>Brian Holt</strong><br />
favorite.

</p>
<p><strong>Derrick Showers</strong><br />
One of these days, you're gonna love Apple, too. It's

</p>
<p><strong>Brian Holt</strong><br />
never gonna. I guess I said that about Microsoft.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, but I've heard of it. It's like, I love that idea. That's the dream.

</p>
<p><strong>Ryan Burgess</strong><br />
So what is the what's the idea of

</p>
<p><strong>Brian Holt</strong><br />
React? So Cordova, his dream is like write once run anywhere. Yeah, like that's, that's the dream. React Native says embrace the platform, but we're gonna give you like, the ability to write 80% of the code, and then the last 20%, you're still gonna have to write in Java or iOS. And that what react XP is, is it's the last 20%. So that you can literally just write one code base with a series of components that was written by the Microsoft, and the title startup, the tiny startup, and it's 100% of the code. You don't have to ever drop into Objective C. John Java.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. That's actually really cool. How long has that been around?

</p>
<p><strong>Brian Holt</strong><br />
Eight months? Yeah. So less than a year. Okay.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, it's kind of like React Native web and React, React primitives, where you're like, have a set of primitives that you're using on every platform. And there's no reason to write the same markup for web with divs, and spans and inputs, and then write it again, for Android, or iOS with text view and text input. That's what everyone wants, right? Like, I won't have to write the same thing twice, or three times, or have to like write a third of it. And then you write the other third, and then you write the other third, and we're all just writing the same code three times.

</p>
<p><strong>Ryan Burgess</strong><br />
You want consistency and speed. Yeah, like nobody wants to rewrite something three times that is painful.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah. And then And then you're also paying like a communication tax, where the three of us need to go to the same meeting, or we need to communicate with each other, make sure that we've all like, implemented the same way. Depending on where you work, you might get competitive and start telling someone that like you wrote a better implementation of like that same feature. And with React Native, you just like, don't need to deal with that.

</p>
<p><strong>Ryan Burgess</strong><br />
So how can our listeners learn about React Native like if if someone was just starting, maybe they've written some react, maybe they've never written react, we're places they can go to learn about React Native?

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah. So I would say there's a module called Create React Native app, which is just like create react app. And what that'll do is it'll bootstrap you into like, the minimal app that you need to get started. In the background. It's using a service called Expo expo.io. And so another route would be to go straight on Expo, there's a website called snack dot Expo, which is like Jay has been cool. And you can just start writing React Native, and have it render either in a simulator or you can actually install the expo app on your phone, either iOS or Android scan a barcode, and then it'll just render whatever you're writing on your phone. So you can be on Windows since he you know, to get like Microsoft. And you can you can write an iOS app without needing Xcode at all. So that's pretty remarkable. That's, that's a nice thing. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
It can be the worst, right? Or literally the worst.

</p>
<p><strong>Derrick Showers</strong><br />
And actually, that's interesting. Like the even the hot reload stuff that React Native has even if you're just doing on a simulator on your on your machine is really nice compared to writing native code. You have to wait five minutes for it to build, whereas React Native use.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, I kind of wish we talked about that, actually.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, yeah, we did.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Yeah, so like, instead of re compiling, you just get you get, you get live reload, you get hot reload.

</p>
<p><strong>Derrick Showers</strong><br />
It seems very normal if you work on web, but on native that is one that definitely one of the biggest adjustments I had to go to is it's like, you make a UI change. And you have to wait five minutes until Yeah,

</p>
<p><strong>Naoufal Kadhom</strong><br />
especially as your app grows, just keeps getting slower. So that's like a huge one for like, developer experience.

</p>
<p><strong>Ryan Burgess</strong><br />
At the end of each episode, we like to share pics of things that we have found interesting, I would like to share with our listeners. Let's go around the table and share pics for this episode. Derek, you may as well start it off.

</p>
<p><strong>Derrick Showers</strong><br />
Sure. So my first pick is something that just came out called realm Academy. So realm is a company that does like back end as a service stuff for iOS specifically, they do Android stuff. But anyway, they had a lot of good content. And they have always been publishing their videos online. And they do transcripts of all their videos, which is really cool. So you can read through it if you're not a video person. But anyway, they just launched a site that basically puts all of their content together into one place and gives you like learning paths and all this stuff. And they have a lot of React Native stuff, just look. So definitely check that out. And then my second pick is something called PI app I just found out about it, it's a it's essentially like the Duolingo of programming. So it actually looks exactly like Duolingo. It's two guys that have built this app, and they have anything from JavaScript to get to just HTML to whatever so but if you've ever used Duolingo, it's the same concept. You go through you, you say how many minutes a day you want to spend to this and then go through and like learn the different paradigms of different languages. So cool. Brian, when

</p>
<p><strong>Brian Holt</strong><br />
I first pick is more for European listeners, it's Hackage is.io. They do trainings all throughout Europe, and I'm fortunate enough to go do it in October. But they have a bunch of amazing trainings like Ben Lesh is going to go do it. Yeah, they have some other really awesome trainers,

</p>
<p><strong>Ryan Burgess</strong><br />
which we've had Ben Lesh on an episode, I think, our second episode, so yeah, so yeah, I need to get him back on at some point,

</p>
<p><strong>Brian Holt</strong><br />
I'm sure I'm sure he's willing to do Yeah. But my second pick is the development stack that I've kind of settled on that I think is like the best development stack and people are arguing with me about it and the in the wrong and I just wanted to like call them out on air about so it's, it's prettier, which I've chosen before. ESLint, config, Airbnb, which I think I've also chosen before and then the third thing is filetype, which I've definitely chosen before so but it's those three things together I think makes the best JavaScript development stack. And like I think we need to like come up with like somebody like MEAN stack kind of acronym so for

</p>
<p><strong>Ryan Burgess</strong><br />
it and then maybe a logo because if you have some like cool logo and acronym, your soul do people buy into it. Yeah, let's work on

</p>
<p><strong>Brian Holt</strong><br />
that. I'm going to contract out to Ryan Burgess to to make a loan. All right,

</p>
<p><strong>Ryan Burgess</strong><br />
you come up with a cool acronym and name for it. I'll work on that.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I have two picks. One is so Kev Witten, FL said Airbnb is like the huge on React Native. So my pick is this framework called Lahti where they essentially it's like, you can take Adobe After Effects animations and like convert them and like plug them into your iOS, Android or react native app. And it's just like, they have like, such a cool website. And I imagined it's awesome. But yeah, it looks really cool. And my other pick is, I went ATV riding in Pismo Beach, like yesterday. And it's like, super fun. There's like so many sand dunes and just seeing people like, shoot off of like sand dunes and riding ATVs. And it's like scary at first, but it's like super fun. So I definitely heavily recommend that.

</p>
<p><strong>Ryan Burgess</strong><br />
Did you get some good air?

</p>
<p><strong>Augustus Yuan</strong><br />
I did not. I was stuck in a Oh, like I got stuck for like a really long time. And for the longest time, I didn't know how to reverse and then this guy came up. It's like, what are you doing? Like, do you just reverse? I'm like, I don't know, I

</p>
<p><strong>Stacy London</strong><br />
don't know what to do. Like it actually has a reverse with like.

</p>
<p><strong>Augustus Yuan</strong><br />
So apparently some of the ATVs don't have reverse. So they didn't teach us. I did have a reverse. And this guy was like, you're an idiot. Like here, you press this button and then do this. And I'm like, Oh my god. Thank you so much.

</p>
<p><strong>Ryan Burgess</strong><br />
backflips. In that button. Stacy,

</p>
<p><strong>Stacy London</strong><br />
what do you have for us to fix? So I think one of my fix several episodes ago was what Pac Man, this a pic for this time is code sandbox. It's very similar. But it's just something that we've been using at work a lot to like create little examples of like, Hey, there's this problem that I'm running into and replicate it there and just make it super easy to share your code. So that if you're like, if it's a react based thing, you just, you know, say import react, write some code, and then share it. And then you can download it, download the zip have it, run it locally, just like create react app. It's basically it's based on that. So pretty nice. I like it. Second pick is music pick slow motion by leucine. It's another ghostly international label artist, kind of melodic abstracts, electronic music. I like it, because it's great to code too. So that's my second right on

</p>
<p><strong>Ryan Burgess</strong><br />
no foul. What do you have for us? Alright, so

</p>
<p><strong>Naoufal Kadhom</strong><br />
I have two picks. First pick is an app called detour. If you guys have heard of it. So detour is like is an audio tour app where you can pick a neighborhood they have and then they'll kind of walk you through and you'll have a local that'll tell you the story in the history of that neighborhood and make you check out cool spots. So that's my first pick. I think you can get free tours for the entire summer so it's definitely worth checking out. A second pick is React Native Europe, happening September 6, and seventh in routes off Poland. And so I'm going to be speaking at a conference about reactive payments, you should either go online to the talks or if you're in Europe, you should go to rocks off and check it out

</p>
<p><strong>Ryan Burgess</strong><br />
might also be a good excuse to travel to you might be Poland's a blast. Alright, I have two picks as well. First off, I'm going to choose, since we're talking about React Native, I'm choosing your library for payments, it's really great if you actually want to support purchasing with React Native and ofall has done a lot of work for you. So definitely check that one out. My second pick is a iOS and Android app called Robin Hood. It's a stock trading app, I've started playing around with some stocks and found that this app is really, really great and clean. I also liked it between iOS and Android. They look completely different on Android, they're actually using the material design, which is great to see. And I'll put a link in the show notes. I did get someone who invited me to it. So I'll invite everyone as well. You actually get free stock if you get someone invite you. So that's pretty badass, too. So all right, so before we end the episode, I want to thank Novell for being a guest. Thanks for joining us. It was a pleasure having you. Where can people get in touch with you?

</p>
<p><strong>Naoufal Kadhom</strong><br />
This one's probably Twitter, so I'm no foul on Twitter. You probably don't know how to spell that. So I'm gonna split it up for you and a ouf l you can go my website, I have a shorter length so no for me and oft.me It's a lot easier. And you can get to my twitter through by clicking on my name on the bottom right. Otherwise, not LinkedIn. Snapchat sorry Snapchat on baby nope it'll be really funny if people add me

</p>
<p><strong>Brian Holt</strong><br />
so every time I text snowfall it's always Hey, baby. No.

</p>
<p><strong>Naoufal Kadhom</strong><br />
Every time Yeah, so baby. No if I'm Snapchat, I'd be curious. Do you have any of your of your listeners

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, thank you all for listening to today's episode. If you've enjoyed the podcast, please let us know. Leave us some reviews on iTunes. Any last words

</p>
<p><strong>Brian Holt</strong><br />
whether you cheers

</p>
`;
        return transcript;
    };