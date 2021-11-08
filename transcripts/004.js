module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the fourth episode of Front End happier the podcast where over drinks we talk about all things front end development. In today's episode, we talk about the recent features added to JavaScript from the ECMO six features, also known as iOS six. If you've listened to any of our previous episodes, we like to pick a keyword that if it's mentioned, all the panelists will drink. We welcome our listeners to drink along. So what's today's keyword everyone?

</p>
<p><strong>Augustus Yuan</strong><br />
Yes,

</p>
<p><strong>Ryan Burgess</strong><br />
yes, six. And the reason we've chosen ESX is because technically, we shouldn't be calling it ESX even though I think all of us enjoy preferring to call ESX instead of ies 2015. But yeah, that will be our word. If it said, We'll drink and feel free to drink along. Before we jump into today's topic. Let's go around the table. Introduce each one of our panelists. Derek, you want to kick us off?

</p>
<p><strong>Derrick Showers</strong><br />
Sure. I'm Derek. Showers UI engineering at LinkedIn. Did you?

</p>
<p><strong>Brian Holt</strong><br />
Know My name is Brian Holt. I'm a UI and sanitation engineer at Netflix.

</p>
<p><strong>Ryan Anklam</strong><br />
My name is Ryan anklam. I am a UI engineer at Netflix. I have nothing to do with sanitation.

</p>
<p><strong>Jem Young</strong><br />
Jem Young, I'm also a UI engineer at Netflix, and you involved with sanitation in any way. Only when I'm cleaning up your code,

</p>
<p><strong>Augustus Yuan</strong><br />
oh am Augustus here and I'm a front end engineer at Evernote. I also don't do anything, guards to sanitation unfortunately.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm Ryan Burgess. I'm a UI engineering manager at Netflix. And we also have a special panelist and brand new one joining us. Sara, do you want to introduce yourself? Tell us who you are, what you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Sarah Federman</strong><br />
Okay. Hi, I'm Sarah Federman. I'm a UI engineer at LinkedIn. My favorite Happy Hour drink is the Dark and Stormy. And I also like JavaScript, so that's why I'm here.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. So you write JavaScript after drinking dark and Stormies?

</p>
<p><strong>Sarah Federman</strong><br />
Sometimes?

</p>
<p><strong>Ryan Burgess</strong><br />
Let's kick off today's episode and talk about Yes, six. Which

</p>
<p><strong>Ryan Anklam</strong><br />
you know what the clicks are gonna get a really long with all these panelists.

</p>
<p><strong>Ryan Burgess</strong><br />
It's gonna be worse. Yeah, maybe the buddy system. So I guess, even though I started seeing the wrong word there, we should actually be referring it to as ies 2015. Or the next spec, which is ies 2016. What about ies next? When is that leveraged?

</p>
<p><strong>Derrick Showers</strong><br />
JSN comments?

</p>
<p><strong>Jem Young</strong><br />
I think yes. Next refers to the future specs, things that aren't necessarily in there yet. But they might be. I think my pick last week was the TC 39 github page, which shows like The future proposals, things like that, I think those maybe stage two and above would be called as next stage, like one and below are kind of like,

</p>
<p><strong>Brian Holt</strong><br />
hopes may or may not make it. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that makes sense. No, and I've heard that term enough and yet probably cleared. That's what we're speaking to that makes sense. What's your favorite features?

</p>
<p><strong>Derrick Showers</strong><br />
I think for me, hands down its modules. You know, it's you, I guess, still do a lot of work behind the scenes. But I think what's what's cool about modules is there's now a spec for that. And so, you kind of abstract that away from, you know, writing code, and it's kind of more in the compilation stage of things. So, I think it just helps like what we've always been, as community trying for, and that's, you know, developing modules. And and, you know, without that spec, I think it's been kind of hard to do. I said this in a previous previous episode, but it's kind of like, what jQuery plugins kind of used to be. But, you know, now we have an official spec for with ESX I mean, yes. 2015

</p>
<p><strong>Brian Holt</strong><br />
I certainly agree, that's gonna be the most impactful thing. And yes, 2015 I don't think there's much argument that goes into that either, it's definitely gonna be the most impactful thing. As far as what my favorite is, it's probably gonna be generators, just because that enables a whole bunch of different styles of programming that we never really had. Things like CSPs and things like when I say CSP, I mean, channels, you can process like go channels, enables things like async await all sorts of basically very a synchronous looking code is very async. So yeah, that's that's definitely my favorite thing, despite the fact that I haven't actually used them in production.

</p>
<p><strong>Ryan Burgess</strong><br />
But they're there to use. I think one of mine, that's actually like not even that big of a deal, but is like the template literals. The obnoxious like, to me, like what we used to have to do just like adding a variable and calling that into a string, just not having to do that anymore. And using the backslashes, for codes, things like that. I love that. I think that is even though it's really simple, it just makes your life that much easier. And like a lot cleaner code.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, probably a feature in itself. Yes. 2015. It's just the syntactic sugar that they add on everything. And as one of them but like, you know, even at first I was kind of, I wasn't too crazy about the arrow functions, because like, oh, it's like, what is that? But now that I'm so used to it, I really like it. I think it makes the code look a lot cleaner.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm a big fan of D structuring. I think that's changed the way I've wrote code a lot.

</p>
<p><strong>Jem Young</strong><br />
Restructuring. That makes I'm curious

</p>
<p><strong>Ryan Anklam</strong><br />
about modules, I wonder how impactful our module is going to be to the way most UI engineers write codes. I feel like, right now with web pack, and Browserify and Babel and all those transpilers I think most of the professional UI engineers or a lot of professional engineers have been writing modules for for some time now. I don't know anyone that's still you know, putting 5000 lines of code under document dot ready anymore, but Right.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I think it's, I think it just that's kind of nice, like something like Browserify definitely pushed us in that right direction 

</p>
<p><strong>Ryan Anklam</strong><br />
or common J S. I mean, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's the cool thing. Well, yeah, AMD was another example of that

</p>
<p><strong>Brian Holt</strong><br />
stuff. No, I think in the immediate future makes little difference. Because we are already using Browserify. Most people, most companies are already on Browserify and or above, say above, at least, something equivalent, but you have to look more forward into HTTP two, which is going to fundamentally change the way that we write code once it's finally firmly adopted. And we can write code that way, then we can start saying import module. And those files will actually be pre packaged together can actually asynchronously fetch those for you on the fly. And that's gonna be really important, because we have one connection with HTTP two, we can multiplex all those files down to you, and basically allows you to have this asynchronous type of programming, no build step. It also allows you to do dead code elimination, which allows for some really, really, really cool patterns that just were not previously available. Now that allow jumping through hoops with common J. S, and with pre packaging and pre processing all of your files.

</p>
<p><strong>Derrick Showers</strong><br />
I think the advantage though, is that is that the syntax is going to change. So I think like even though we've already had, we've had common J S for a while and AMD, it's hard, I think as a especially as somebody coming in new to kind of figure out how that all works. And there's, you know, different multiple different specs or depending on how you want to do it. So I think the advantage with this, again, I guess goes back to the sugar, you know, just making everything nice. And you don't have to relearn something once HTTP, HTTP two comes

</p>
<p><strong>Ryan Burgess</strong><br />
out. And one of us just and if you're just learning JavaScript, then you can just start reading it this way. And you don't have to worry about what it wasn't Yes, five, which is really cool. I think modules

</p>
<p><strong>Jem Young</strong><br />
are more it guides the way we're doing going to do JavaScript. So that was the intent of, of like TC 39, everybody to say like, Hey, we actually explicitly want to make JavaScript more modular, rather than like, there's constant of a like, do we make modular? Do we make it like, monolithic? Who knows? Then when the whole you guys remember the Left Pad? Yeah, so everybody's like, the jobseeker haters, like, this is why you shouldn't do modular because like, everybody depends on this if you really need module for this, but we only that's what they intended like that switch off was going to work in the future. And that's, that's more of the modules are saying is like, modular modular system, small, compact, easily testable files is the future of how we're going to write JavaScript.

</p>
<p><strong>Ryan Burgess</strong><br />
Do you want to quickly explain to what the little short brief description of what the left pad was?

</p>
<p><strong>Jem Young</strong><br />
A while saying politically correct, out of the controversy. So

</p>
<p><strong>Brian Holt</strong><br />
there's just yourself in it, just get right in?

</p>
<p><strong>Jem Young</strong><br />
Yeah. So there's this dude, and he ignoring what happened to kick and everything. So essentially, a big company wanted his package name. And he said no, and they try to resolve it. I don't know I am employed or not. But essentially, he got mad and unpublished, all his packages. One of which was left pad was just added padding to the left side of a string. Unfortunately, a lot of packages depended on that. So one of them published. Things like Babel or some other ones that broke literally everything. Yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
there was Babel was Babel. Yes. That was the quote unquote, broke the

</p>
<p><strong>Ryan Burgess</strong><br />
Greeks. And it does it actually brings brakes a lot of projects in like, you know, companies like Netflix, LinkedIn, Evernote, like we all depend on this. And so yeah, that was actually a big problem. Is it it actually breaks Babel, which is pretty important.

</p>
<p><strong>Jem Young</strong><br />
Yeah. I think overall, I think it was good, though. I think it taught us a valuable lesson about modularity and the way we're doing packaging currently and how we need to fix it in the future. So, you know, hopefully no harm, no foul, but I'm sure some companies broke their bills. You know?

</p>
<p><strong>Brian Holt</strong><br />
Well, I mean, it should show companies that you need something sitting in front of NPM. You can't just depend on the Public Registry.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. Yeah. In terms of like, ESX. I think we went Ah, but yeah, in terms of

</p>
<p><strong>Ryan Anklam</strong><br />
like, I don't think you have the right spirit Augustus. Dang it when you say.

</p>
<p><strong>Augustus Yuan</strong><br />
But in terms of, yes, 2015 2015 features, I think you guys hit along the ones that I really like, I actually am a huge fan of template strings. I kind of like to keep markup in JavaScript. But then there's there were times when I had I was playing around with it, it's just so much simpler. And like string substitution is so like, convenient and makes my code way more legible. And I guess just in general ESX how it's kind of kind of supporting this asynchronous like programming, like callback, hell is just less of an issue and stuff like that. Really, that's I

</p>
<p><strong>Sarah Federman</strong><br />
think one of my most underappreciated features is just the semantic naming of like functions when you I don't know what the actual like term for it is, but having to not write the name twice when you're using it as a property.

</p>
<p><strong>Brian Holt</strong><br />
Okay. Enhanced object literal notation.

</p>
<p><strong>Sarah Federman</strong><br />
Yeah, that's ridiculous

</p>
<p><strong>Ryan Burgess</strong><br />
naming. You need something simpler. You're like, that's it. That's confusing.

</p>
<p><strong>Ryan Anklam</strong><br />
It took me a while for that one to stick to when I read try to see what's involved in the hands object. literals I'd always have to look it up since like, that's what I'm looking at exactly.

</p>
<p><strong>Jem Young</strong><br />
Since we're going on a rant about like weird JavaScript names like enhanced object literals. Kind of like one of those. I'll say this, and it's been bugging me for a long time, lexical scoping. Everybody says lexical scoping, but if I say what is lexical scoping, like, explains me in detail. They'll be like, well, you know, it's a federal court foisting. Yeah. But like, even try to Google lexical scoping. And it's like, 50, Stack Overflows, and like, people like trying to explain it, but no one really understands it. So I think we should just stop saying lexical scoping and say, block scoping or something

</p>
<p><strong>Sarah Federman</strong><br />
that's found this fancy that that's true.

</p>
<p><strong>Ryan Burgess</strong><br />
You just sound smarter. When you say electrical.

</p>
<p><strong>Jem Young</strong><br />
Well, actually, lexical scoping means

</p>
<p><strong>Sarah Federman</strong><br />
pretty sure I got an interview once cuz I threw that one out there. Oh, no.

</p>
<p><strong>Brian Holt</strong><br />
Well, like it, let's let's actually get into it. It's not actually technically lexical scoping. A lot of people. So the background here is when you create a new arrow function, people say that it has lexical scoping Right? Which is exactly what no one knows what actually means. I'm guilty, totally guilty party sitting right here. I'm pointing at myself, you can't see that. Also it Ryan. Here's a great article from Getify, Kyle Simpson, about this very issue. And when you create a new arrow function, it's not actually creating a new scope at all. It's just using whatever scope it's already in, which is not lexical scoping, which would be creating a new scope and looking in that. That particular scope, right. So that's what we're lexical scoping would be, it's actually just not creating any new scope at all

</p>
<p><strong>Ryan Anklam</strong><br />
I think about arrow functions with me is I think it is the most overused ESX feature. It's easy to know what you're doing when you're creating a function, right? It's a shortcut for an anonymous anonymous function. And I think that right there, you need to realize it's anonymous function. So if you want to debug these, and have a named function for debugging, a fat arrow function is a terrible idea.

</p>
<p><strong>Ryan Burgess</strong><br />
Sir enough, I could see that I can see where you're getting

</p>
<p><strong>Ryan Anklam</strong><br />
a bug code with tons and tons of arrow function fat arrow functions in it. Yeah, it's gonna be difficult cuz you're just to see anonymous function all over the place. So unless you really want that non, you know, new biting scope, or that new scope inside that function, just write the fucking word.

</p>
<p><strong>Ryan Burgess</strong><br />
Simple as that. Give it a name. But that's we're lazy. We don't want to write the word function, right?

</p>
<p><strong>Ryan Anklam</strong><br />
But you also don't want to spend extra time debugging that shit when it breaks. Sure.

Why don't write bugs in my code. So let's see that pull request, I opened up for the fun and happy. We'll talk about that.

</p>
<p><strong>Augustus Yuan</strong><br />
Where we have sanitation engineers.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. Alright, now that we've talked about the different features that we enjoy, one big thing that was with IES 2015 Almost said the other word, but the other word, the other word is ESS. Called Out of happy people. Alright, so we've talked about the different features. One thing we should probably dive into his classes are no classes. So how does everyone feel about that, and we can kind of go into more depth of classes

</p>
<p><strong>Ryan Anklam</strong><br />
will clearly no one pick it as their favorite feature that is true.

</p>
<p><strong>Ryan Burgess</strong><br />
Fair enough.

</p>
<p><strong>Brian Holt</strong><br />
I think classes are fine. If you know you're getting yourself into the I feel like the biggest problem with classes I feel that I speak on behalf of everyone in the world when I say this is that they're a lie. They're just a dirty, filthy lie. Like you look at classes, and you think like, oh, I'm in Java land that this is like classical inheritance, like you have these certain expectations that you see classes get a certain style of code. And it carries all this with this connotation of classical inheritance. And it's a it's a dirty lie. It's a dirty, filthy lie.

</p>
<p><strong>Ryan Anklam</strong><br />
I like comics, my code book, I think they're really clean. But I also totally agree with you, I hate the fact that someone says, oh, classes are gonna make it easier for people that are into an old language, you know, easier to pick up JavaScript. And that's, you know, not how it should be. You should embrace JavaScript for what it is. It's not object oriented, classical inheritance language, right? It's,

</p>
<p><strong>Ryan Burgess</strong><br />
well, I think it makes it maybe that a little bit easier, but I don't really think it makes it easier for someone say writing Java to just write JavaScript. Yes, it

</p>
<p><strong>Ryan Anklam</strong><br />
actually does like never write JavaScript, like you would write Java.

</p>
<p><strong>Ryan Burgess</strong><br />
No, I agree. And that's the the problem that I don't really wait.

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, wait, it's

</p>
<p><strong>Ryan Burgess</strong><br />
just a mess. Right?

</p>
<p><strong>Jem Young</strong><br />
Could you guys explain what quit is for people don't know,

</p>
<p><strong>Ryan Burgess</strong><br />
I'm gonna let Augustus explain it.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, basically, like quit is just a way to write. You can write Java. And then Google made this framework where in Java, it will compile down to like JavaScript, so you can get all the benefits of Java and the object oriented programming. So we use it for our web client and stuff.

</p>
<p><strong>Brian Holt</strong><br />
Oh, I'm so sorry.

</p>
<p><strong>Ryan Burgess</strong><br />
We use it though. Too much. Yeah. Cheers. So So what we're saying is, you shouldn't use squid.

</p>
<p><strong>Augustus Yuan</strong><br />
I mean, I so yeah, so. Yeah. So wait had a place when it was created? I mean, there was definitely like when it was created, it had a time when Java was like, the most popular language at the time. So people thought it was kind of like an all in like, Java is the language that's coming out. So let's like make a framework that embraces Java and the advantages it has, because they didn't think JavaScript was going anywhere. But I feel like nowadays, like, Wait, it's just not as practical.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, definitely. JavaScript. It did not go anywhere. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
Those bastards like cockroaches.

</p>
<p><strong>Sarah Federman</strong><br />
It's almost like it's not the most commonly used language.

</p>
<p><strong>Augustus Yuan</strong><br />
Have you? Have you seen that picture? Where it's like, because the guys are relate? It's like a comic strip. And it's like, Alright, I'm putting it all in. It's

</p>
<p><strong>Brian Holt</strong><br />
like Netflix. Yeah, it's, I can say that cuz I wasn't there.

</p>
<p><strong>Ryan Burgess</strong><br />
So classes, what what's the, I guess? What's the main thing that you would want to use a class for?

</p>
<p><strong>Brian Holt</strong><br />
The only compelling reason I found these classes so far, is for React, and using the ESX notation with React because it is, it's really nice looking. But I have firmly decided that I'm back into the Create class camp. Because I just missed out on binding too much.

</p>
<p><strong>Ryan Anklam</strong><br />
Auto binding catches me every time I go from create class to the s6 style where I'm extending component.

</p>
<p><strong>Brian Holt</strong><br />
And there's no static part that just kills me.

</p>
<p><strong>Ryan Burgess</strong><br />
You just have to call you

</p>
<p><strong>Ryan Anklam</strong><br />
secretly want to drink more?

</p>
<p><strong>Ryan Burgess</strong><br />
You and my son is happy hour. So I mean, we should be happy about it. Yeah.

</p>
<p><strong>Jem Young</strong><br />
I agree, though. classes aren't good until there's proposal in there. Now for static properties, or static methods. Static properties. Yeah, static methods already. But class won't be good until we get those on there. So other than that, like, what's the point? You have to declare static stuff outside of the class? Yeah, at that point, why

</p>
<p><strong>Ryan Anklam</strong><br />
is that great for frameworks, you know, bringing a framework extend a framework class, I think that's really where it shines. It makes your code a lot cleaner. It's really easy to read. But you know, once you start having class, Object Class, Animal class, dog class, golden retriever.

</p>
<p><strong>Brian Holt</strong><br />
Once that prototype chain gets extended down like four different places, you're gonna have a really bad time debugging that

</p>
<p><strong>Sarah Federman</strong><br />
there's a big benefit to just standardizing everything. I mean, we have modules, and we have classes and there's a billion different frameworks that do it different ways. But now we have one way so we can at least look to that as like an authority

</p>
<p><strong>Ryan Burgess</strong><br />
pool. Yeah. Aside from you know, I think there's good and bad about classes that we've kind of identified. What are some, your most hatred features of ESX? Sorry, yes. 2015 What is the worst don't really find yourself using

</p>
<p><strong>Derrick Showers</strong><br />
the name is 2015.

</p>
<p><strong>Ryan Burgess</strong><br />
Fair enough. That is actually I think we all agree on that one

</p>
<p><strong>Sarah Federman</strong><br />
kind of bug or feature?

</p>
<p><strong>Derrick Showers</strong><br />
What should it be composted?

</p>
<p><strong>Ryan Burgess</strong><br />
ES6.

</p>
<p><strong>Brian Holt</strong><br />
I probably taken our classes to be totally frank, I think everything else in there that I'm presently aware of, because the spec is huge. Yeah. But like proxies, symbols, all kind of stuff. I think it's good stuff. So I think classes the only thing I probably would have chosen to

</p>
<p><strong>Ryan Burgess</strong><br />
leave out. One, I think that's actually a good point, too, is I even, like, what you said is the spec is fairly large, I do like moving forward is that we're gonna have less features being added. And I think that will be very beneficial, and a lot clearer in browsers will hopefully be able to implement them a lot quicker as well. Definitely.

</p>
<p><strong>Jem Young</strong><br />
I don't like that spread, works for arrays, but doesn't work for objects. Like it didn't make it into the es 2015. Spec, which is frustrating because you think it would because you're naturally like Oh, word for this word for this. But they could have done that in there. It's in it's in proposal, I think pretty late stage, but it's coming. Yeah. Also Ryan's point, right? Yeah. name like original Ryan, please.

</p>
<p><strong>Ryan Anklam</strong><br />
There's OG Ryan. Well, I'm wearing my blood colors. Around he's definitely the whitest person in the room.

</p>
<p><strong>Jem Young</strong><br />
But via the names, arrow functions, like it frustrates me. So I want to use an arrow function. But I also want to name it so I can debug it later, which might be a little frustrated. So you can work around that. But that's something annoys me.

</p>
<p><strong>Brian Holt</strong><br />
Promises. How do they feel about those? Like, I'm hot and I'm cold on promises hot and cold? Looks like well, observables now. I think I mean, I think it's good that they made it in. But then there are other times when I have to use them and like i The hell are they doing promises? Yes. So

</p>
<p><strong>Ryan Anklam</strong><br />
it's good to have a standard though at least there's one way to do promises, or there will be one way there's a vision to do promises. There's a bunch of different libraries that all have their own idioms and quirks and

</p>
<p><strong>Brian Holt</strong><br />
expect a plus plus a plus plus plus plus Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that I do like it mean more standardized, I wish something like observables made it in, I think that would have been nice to is like, you have the choice of using something like promises or observables. There's definitely a place for either or, I would have liked to seen that in the spec.

</p>
<p><strong>Jem Young</strong><br />
I don't like that there's multiple ways of doing like a sync thing. So you have like async await, you have generators and your promises, and they all do similar things. So you can end up with the same result, the different ways of doing and I really don't like that I prefer us to like, let's pare it down and standardize.

</p>
<p><strong>Sarah Federman</strong><br />
But isn't a lot of the benefit about Yes, 2015 that you can do so many different styles of programming now.

</p>
<p><strong>Jem Young</strong><br />
I'll totally I think it's confusing for a new person. And Brian teaches classes on ESX. That's actually what it's called. And he's got to explain, like, Oh, here's how to do async. But there's also this other way. But there's also this other way. And that's to me, it's confusing.

</p>
<p><strong>Brian Holt</strong><br />
I think I think it's great. I disagree. Because you approach a different problem. And these different problems have different idioms that are more like you can model anything that you can model them differently with with a promise and vice versa. And, and same with CSP. Same with callback, hell, same with all that stuff. But there are certain different ways that plot that lend themselves better to different problems, right? Like if you're doing polling observables are just the best, right? And you can model out the promise, but it's a huge pain in the butt, right? And you create a bunch of different promises. And it's really, really burdensome to do it that way. Now, I think it's great that we have callbacks, because callbacks are really easy to teach really understand like, okay, when this happens, this function just gets thrown, right? Like that's a pretty, pretty basic way to teach something. But like if you have to have communicating channels, right, CSP is just the best.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, I don't have a problem with callbacks when you're just resolving, you know, one level deep. And I think call callbacks a perfect thing for that. I don't think you need to have another layer of abstraction over that. So I'm still a big fan of callbacks. I don't hate callbacks is

</p>
<p><strong>Brian Holt</strong><br />
on click run this function, right? Like that's pretty great.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I'm not. I don't hate on callbacks. I think it's you can get into a mess with them. If you're not using them properly, is you get into callback hell, Ben actually had a good way of calling it he called it the Flying V. And he shows it like Ben Lesh had shown in his presentation a few weeks ago that he was doing it Netflix it was this like, very, very bad, like example of callbacks, and it literally makes like a flying V and I was like Oh, I love that. Like I actually like that better than calling it callback hell, but so I think it's like, what that's what anything is like you can abuse a callback and do a poor job of it. I think that's with any JavaScript feature is like you can We do a lot.

</p>
<p><strong>Derrick Showers</strong><br />
And I think like Brian said, I think is a really good way to illustrate why to use something else like an observable or promise like, you can see pretty easily once you get in that situation, why that code sucks. And you know, and then talk about like, these are these are what you can use these situations,

</p>
<p><strong>Sarah Federman</strong><br />
please. The term they used in the treehouse course promises was a pyramid of doom.

</p>
<p><strong>Ryan Anklam</strong><br />
Pyramid of doom, worse than the pyramid of doom and JavaScript. Java pyramid of doom in Leicester,

</p>
<p><strong>Ryan Burgess</strong><br />
SAS.

</p>
<p><strong>Brian Holt</strong><br />
Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a whole episode on that. Oh, I feel like is, you know, like you're diving into that. And like all the selectors that you can go deep into? Yeah.

</p>
<p><strong>Ryan Anklam</strong><br />
Stay tuned for a future episode,

</p>
<p><strong>Ryan Burgess</strong><br />
a future episode of Front End VR where we talk about selector health. What about the best ways like I know gem you had kind of mentioned staying up to date with new features that are being added? Are there any other ways that you guys like to learn about new features or stay up to date? What are some other things that you found that you are not helping?

</p>
<p><strong>Ryan Anklam</strong><br />
Hey, Siri, how should we stay up to date on ies? 2016?

</p>
<p><strong>Derrick Showers</strong><br />
Let me search the web for that interesting question. Wow, because she gave an answer

</p>
<p><strong>Ryan Burgess</strong><br />
she might have been more clear.

</p>
<p><strong>Brian Holt</strong><br />
The way I always step today, which I have two primary. Well, I have a couple. One of them is I just go to Jenson Button biking bike here like him. That will always work.

</p>
<p><strong>Ryan Burgess</strong><br />
smart dude.

</p>
<p><strong>Derrick Showers</strong><br />
I know. Twitter handles so yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem Young just hit him up with the six questions.

</p>
<p><strong>Ryan Anklam</strong><br />
They should be new rule if we ever go three without catching it. Yes. To finish your journey

</p>
<p><strong>Jem Young</strong><br />
to this dark realm here, like half,

</p>
<p><strong>Brian Holt</strong><br />
I think, are here real quick. Sorry. TC 39 specs is really good, but it's pretty dense. You be careful before you venture in there, because it can get kind of intimidating. Duality to ality.com is really really great. Dr. Axel?

</p>
<p><strong>Jem Young</strong><br />
rushmere rushmere Oh, yeah, I hope he doesn't like get on me. I tweeted him sometimes he's like, brilliant, but I probably mispronounced his name.

</p>
<p><strong>Brian Holt</strong><br />
Well, and he's really great about going in and explaining the features in a very simple understand way. Yeah, no, that that entire blog, which is great for deep diving into. Yes, six stuff.

</p>
<p><strong>Ryan Anklam</strong><br />
My personal favorite blog is pony foo. He very good, excellent job. Digging really deep into the the six features. And for me, personally, I think the pony food blog makes it a lot more approachable for me, then the fatality blog. His is kind of too mechanical for me like he's getting bullet points and very detailed. Whereas the the podium food blog, I think could give us a little bit more real world examples. And I learned by writing code so I can kind of follow along and look at his code. So firstly, that for me that works better

</p>
<p><strong>Augustus Yuan</strong><br />
other than podcasts like ourselves. But the podcast I follows five minutes of JavaScript, I think that was just like a really quick, fast. It's just like five minutes. And they just quickly talk about stuff. And then yeah, like TC 39 are like, keeping up to date with the proposals. I like follow the pull request discussions, I think get hubs like the GitHub organizations are like really good about that. They like make, essentially a whole pull request. And it's just like a discussion. And it's like, really cool to just follow along what's going on?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's a good way to like keep up to date, right in the moment. Yeah. Well, some of the stuff that's coming, we've keep kind of mentioning ies 2016. Or that we could reference it. I know it was once called ies seven. But does that count? Yep. So what are you most excited for in vs 2016? Well, there's literally two features. So you which which one excites you the most is either

</p>
<p><strong>Brian Holt</strong><br />
array includes or exponents.

</p>
<p><strong>Ryan Anklam</strong><br />
I have an array dot prototype includes t shirt. So

</p>
<p><strong>Brian Holt</strong><br />
I'm probably most excited for includes something I can use in five years. I mean, I can just use index right now. Right, right. Yeah. It's nice. It's probably getting in there. It's just not super available. Unless you're using Babel. Go right ahead.

</p>
<p><strong>Ryan Burgess</strong><br />
We're gonna be using that now. So yeah,

</p>
<p><strong>Brian Holt</strong><br />
I think that's that's probably a good point to bring up right now is that, yes six geeky assholes it was a huge, huge spec. And then everything else from here on out, because they're releasing every year, it's gonna be two features three features, like five features in a good year, right? So they're gonna be these tiny, tiny specs that just gets shipped every single year. And so don't don't get used to these big increases all at once. Which I think is, in general, a great thing for JavaScript, because it's an ever evolving language, because so many people writing it, so many browsers have to understand it.

</p>
<p><strong>Ryan Anklam</strong><br />
So interesting. It's never gonna be done with transpilers. They're going to be a part for me, right?

</p>
<p><strong>Brian Holt</strong><br />
Well, I mean, that's why they change the name from six to five to Babel, right? Because that's ultimately not what it's going to be. It's going to be future JavaScript to current JavaScript.

</p>
<p><strong>Ryan Anklam</strong><br />
So I don't know if that actually does the name come from Hitchhiker's Guide.

</p>
<p><strong>Brian Holt</strong><br />
The fish of Babel fish?

</p>
<p><strong>Jem Young</strong><br />
I think so.

</p>
<p><strong>Brian Holt</strong><br />
I mean, I guess it's from the Tower of Babel, right. That's what I bought from the Bible.

</p>
<p><strong>Jem Young</strong><br />
But I think the Babel Fish is from from the Bible.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, the Babel Fish is you put it any Are you sure?

</p>
<p><strong>Ryan Burgess</strong><br />
I think that

</p>
<p><strong>Sarah Federman</strong><br />
somebody write a name generator, like,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, for all the JavaScript frameworks. Yeah.

</p>
<p><strong>Jem Young</strong><br />
This is like a future JavaScript problem. In 20 years, there will be no package names available. Brian hyphen, babble. Yes. 2019. Kick. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
I just I just googled the Babel thing, because that was just so curious. And he actually is in reference to babel fish from Hitchhiker's Guide. But lately, but and then it continues to mention, which in itself is a reference to the story of the Tower of Babel.

</p>
<p><strong>Brian Holt</strong><br />
I can't see it, but I'm flipping.

</p>
<p><strong>Ryan Burgess</strong><br />
Congrats, guys. We're all right. Everyone's right. Cheers. Cheers. So since we've been talking about ies, 2015 and 2016, so much, how has each of your companies been integrating or adopting it? Like, are you using something like Babel to build using it in production today? One want to chime in?

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, so Netflix, we're using anything that Babel supports for all of our front end code for the website team anyway. And then we're on a version of node that supports a decent subset. Yes, six features

</p>
<p><strong>Ryan Burgess</strong><br />
he did not want to purchase.

</p>
<p><strong>Ryan Anklam</strong><br />
But so it's interesting, because it's kind of a double edged sword because you get used to writing Babel code, and then all of a sudden, you'll try to write a destructuring assignment or something like that. And then it's not your code. Note. And so we have this weird thing where the client side code goes through Babel, we can write pretty much anything we want. It's an ESX. But you do have to know, be careful of what version you know of known supports what you're writing, because when you switch over from front end code to node code, you can get caught out by that

</p>
<p><strong>Ryan Burgess</strong><br />
well, on which which version of node actually started supporting some of the 2015 12.0 12.

</p>
<p><strong>Brian Holt</strong><br />
Right, the problem with the harmony flag, right? Yeah, then once they will move to IO J S, then that upgraded to be a version that sort of sport a lot more for that a lot more and fighters yet, so more, and they're about to come out six, which has yet still more features for

</p>
<p><strong>Sarah Federman</strong><br />
Can we still not have promises? Or do we have those officially now?

</p>
<p><strong>Brian Holt</strong><br />
I think that that landed with

</p>
<p><strong>Ryan Burgess</strong><br />
a flag. And so when you say that harmony flag, what does that mean? What do you have to do with my apartment

</p>
<p><strong>Brian Holt</strong><br />
is such a loaded term. So well, just like the the 32nd version of what harmony actually means is there was competing specs for yes, for yes, there was competing specs for it yes, for which actually ended up being nothing at all. Because too many people couldn't agree on a visit, well, screw it, we're just going to stay with the s3, they eventually came back and they converge on the S five, that that that original spec where they were converging together, they call it harmony, because there's two competing ideas kind of merging together with one so that was kind of ies harmony was kind of the previous term for ies next. So with version 2.0 12 of node, you could run up with the harmony flag, which basically means Hey, instead of using this old version of BA go ahead and try using the new version of VA.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome, so you can just run that along and it's actually gonna pull the latest version of VA

</p>
<p><strong>Brian Holt</strong><br />
was another latest just a newer version that they had packaged with it,

</p>
<p><strong>Ryan Anklam</strong><br />
right. So you guys used to To Tell If you know what you're using supports, what versions or what things have Yes, six.

</p>
<p><strong>Brian Holt</strong><br />
The one that you have up on your webpage?

</p>
<p><strong>Ryan Burgess</strong><br />
What's What's the one that Ryan has up on his webpage? Right?

</p>
<p><strong>Ryan Anklam</strong><br />
How do we process

</p>
<p><strong>Brian Holt</strong><br />
cassocks or something like that cane Guix King Guix

</p>
<p><strong>Ryan Anklam</strong><br />
I can't get to GitHub compatibility table that's that's been my go to for a while but I wonder if anyone does anyone else using anything different

</p>
<p><strong>Ryan Burgess</strong><br />
I use

</p>
<p><strong>Ryan Anklam</strong><br />
so if he gets pissed and pulls this off the internet, because someone

</p>
<p><strong>Ryan Burgess</strong><br />
copywriting for me, we should we should fork it right now is what you're saying? Yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
we need compatibility table as a service.

</p>
<p><strong>Ryan Burgess</strong><br />
Someone right that please. Charge. Tow charge we're.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. at LinkedIn, we so we use we're on ember. And so a lot of this comes e6 comes up sorry, yeah.

</p>
<p><strong>Brian Holt</strong><br />
Horrifying.

</p>
<p><strong>Derrick Showers</strong><br />
Yes, it doesn't, comes for free, kind of with Ember CLI and all that. But one thing that we did for all of our legacy code is kind of migrated things over to use a new go pipeline. There's actually a blog post about this on engineering.linkedin.com. It's pretty cool. It's pretty cool read. But it's Yeah, I think it just kind of speaks to like, since you, when you start writing is 2015, you kind of want to write it everywhere. And so we were able to help our development team with

</p>
<p><strong>Ryan Anklam</strong><br />
two years ago, at Fluid comp, I went, and I saw a really, really cool talk. I think it was an engineer from Facebook. And he talked about how they went through and converted all of their legacy code to es six. So if someone would come through and looking at the, at the code, a new engineer would come and look at the code for examples, they would see new versions of the code and not have to repeat older patterns. So they were really forward thinking as trying to make all of the legacy code ies 2015 compatible. I remember that talk was a really good example for new engineers look at and you kind of break the mold of using yes for patterns. So it's pretty cool.

</p>
<p><strong>Ryan Burgess</strong><br />
That is a good idea to

</p>
<p><strong>Ryan Anklam</strong><br />
really forward thinking way to do it.

</p>
<p><strong>Ryan Burgess</strong><br />
And did they use I can't remember they use like, they built some scripts that like went through and actually like change their code.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, code bots. Yeah. What's really cool. So previous to Netflix, I was at Reddit and Reddit was, as you might imagine, is very adverse to new change, new change, as opposed to old changes pose. They're opposed to like, it's very just focused on keeping things stable uptime, that's like, those are the things that are very important to Reddit not necessarily like new hotness, developer productivity, those kind of things. So if you're looking for a way to introduce, you know, Babel to your build system or anything like that, the way I personally did is I just did it didn't tell anyone.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, so basically, you had the freedom to do that.

</p>
<p><strong>Brian Holt</strong><br />
I mean, I didn't. I didn't have that freedom that I just did.

</p>
<p><strong>Ryan Burgess</strong><br />
But the responsibility was the responsibility on that side.

</p>
<p><strong>Brian Holt</strong><br />
Well, like it was one of those things is like, Hey, I've been doing this for two weeks already. And I don't want to go back and try and pull it out. So was there complaints? No, I mean, there was some people are really happy about that. It was like what's happening now? It's like it's happening.

</p>
<p><strong>Ryan Burgess</strong><br />
It's a good way to migrate. It's just happened.

</p>
<p><strong>Brian Holt</strong><br />
It just happened. So just lie to your employer and put it in there. That's kind of what I'm getting.

</p>
<p><strong>Ryan Burgess</strong><br />
At and if you get in trouble, blame Brian

</p>
<p><strong>Brian Holt</strong><br />
holds no blame to blame Ryan Burgess.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess Yeah. Do you guys

</p>
<p><strong>Augustus Yuan</strong><br />
ever know? Yeah, ever? No. We're still trying to move. It's kind of a slow process. I know, like a lot of so we started doing like demo days at Evernote. And so for like some of the newer projects where you like demo stuff. We're definitely like using ESX. And then sometimes I sneak some of this code in with like, transpiler Oh, Gosh, darn it. Anybody? Don't leave. I'm sorry. But yeah, so we're, we're we definitely like recognize that ESX is like the way to go. Oh, God. I'm terrible at this.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I think it's just, it just proves that we prefer that word over what they've, you know, he is, he is 20 2015 It's not sure. So, you were saying that you guys are starting to use it as much as possible. It's, it seems like it's a slower start.

</p>
<p><strong>Augustus Yuan</strong><br />
Right. Exactly.

</p>
<p><strong>Sarah Federman</strong><br />
I think as a newcomer coming into the Ember codebase there were a lot of things that we use consistently like modules all ways. Yes, six modules but sometimes when sorry.

</p>
<p><strong>Derrick Showers</strong><br />
Ryan holds up his empty

</p>
<p><strong>Sarah Federman</strong><br />
give me some beer Jesus. Yeah, sometimes we favor consistency in the code base over Going to do things like, we use a lot of embers async capabilities?

</p>
<p><strong>Brian Holt</strong><br />
That's great. I'm a little jealous.

</p>
<p><strong>Ryan Burgess</strong><br />
Have you written much? Ember? Brian?

</p>
<p><strong>Brian Holt</strong><br />
Not recently, it's been 18 months since I've written Ember, which is an eternity. Yeah, in the frameworks.

</p>
<p><strong>Jem Young</strong><br />
So I got a rant for you guys. And this, this happens all the time. I see people render

</p>
<p><strong>Ryan Burgess</strong><br />
a shower.

</p>
<p><strong>Jem Young</strong><br />
And I find them a platform that people love it. Yeah, I see a lot of examples, like code examples that all written Yes. 2015 years 2016. And they're like, using arrow functions, or using like, all the cool stuff, like spread and wrestle like that. But they still use bar everywhere. And I don't understand somebody explained this to me, like, they still use bar. And so like concerts are, like superior in every way. But so I want someone that's always waiting. So if people still use bar, I'm guilty for

</p>
<p><strong>Ryan Burgess</strong><br />
it. I don't know. It's like, I'm, yeah, it's a force of habit. And I, I'm totally guilty for it. I and I will have like, you know, Iest 2016 2015 features in there. But I'm still guilty for it. And I love letting cons but so guilty from

</p>
<p><strong>Derrick Showers</strong><br />
the other way around, like anytime I've just like, let for everything. Yeah, like if I ever get an environment where

</p>
<p><strong>Augustus Yuan</strong><br />
I didn't want to say it as a favorite feature, because I didn't think it was significant enough, but I actually really liked it. Like, sure. I don't see like why you wouldn't use it, especially for like stuff like for loops or whatever. But yeah,

</p>
<p><strong>Jem Young</strong><br />
go back to hated features. const I love const. But it's very confusing because you think const is constant? Which it's not because you can manipulate the property on a constant object, it's fine. It's only for primitive types. Can you not manipulate that? That's really confusing for someone coming from another language that's

</p>
<p><strong>Ryan Burgess</strong><br />
honest, he really is like,

</p>
<p><strong>Derrick Showers</strong><br />
you change out an object. Oh,

</p>
<p><strong>Jem Young</strong><br />
no, you can't change all the properties like you can delete entire raid,

</p>
<p><strong>Ryan Burgess</strong><br />
but you can't actually change the difference.

</p>
<p><strong>Brian Holt</strong><br />
I mildly disagree. If only for the fact that there's not other languages. I know. I'm the asshole this time not. Disagree. If you're if you're expecting True Object freeze, right, which is what what? I think we're ultimately we're getting out here, right? Like you're expecting a true object freeze here. I don't know another language that actually does

</p>
<p><strong>Ryan Burgess</strong><br />
that. Does anyone? Not that? I know, obviously, if you

</p>
<p><strong>Brian Holt</strong><br />
declare a constant that you can't mutate the properties,

</p>
<p><strong>Jem Young</strong><br />
I can I assume you're not doing C? I don't know.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I definitely am not a C programmer. But honestly, anything else that I've ever written? I can't think of an exam.

</p>
<p><strong>Brian Holt</strong><br />
I mean, for me, it intuitively meant that the pointers frozen right at the point like in terms of like, you're pointing out this object pointing at this ray, but it's still mutable. And then I would call it like a deep freeze on it if I actually intended for like a real deep freeze, which honestly, I really do. Yeah. Or I would declare, like, it's some sort of immutable structure, right. Like, it doesn't imply immutability. I mean,

</p>
<p><strong>Jem Young</strong><br />
for me, like, I see Thompson, it applies mutability. For, like, if I was a brand new person coming in, I would think, Oh, this immutable, and like, I know that like the type check, and everything is gonna save me, which it won't like you get some like real nasty situations if you started. Yeah, definitely. expecting that

</p>
<p><strong>Brian Holt</strong><br />
that would be awful. Yeah.

</p>
<p><strong>Sarah Federman</strong><br />
I mean, it's an example of actual good naming, like constant does like imply it's constant. I don't know it's different when, because a lot of the materials for people that are learning also haven't really caught up. So when you're learning you start with bar, that's just how it works. And saying that you never use bar is kind of confusing to new people still.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think if you're brand new to it, like don't Don't, don't do it.

</p>
<p><strong>Sarah Federman</strong><br />
But if none of the teaching materials say that yet. Sure. Yeah, we need to

</p>
<p><strong>Ryan Burgess</strong><br />
bring our teaching materials up to speed. If you're not updating the any of the teaching materials that are out there, and like you're searching something, a lot of that is there, like StackOverflow is a perfect example is a lot of the examples will have that there. They're not actually writing load

</p>
<p><strong>Ryan Anklam</strong><br />
rules that are teaching JavaScript like universities right there, they're going to be even farther behind than anything else. I think that's you're gonna have a whole bunch of people that are learning JavaScript at university. They're gonna come out writing

</p>
<p><strong>Augustus Yuan</strong><br />
bar, and but yeah, taking some of the JavaScript courses, they they don't nowhere near talking about like some of these like, stuff. So

</p>
<p><strong>Ryan Anklam</strong><br />
you just moved out here from from college, what did you learn? Or how was it? Well,

</p>
<p><strong>Sarah Federman</strong><br />
I was actually a design major in college and I'm self taught, but I did take some classes and our sister major and the classes that I took, I was very particular about teachers, like a lot of students go into classes and they just blindly trust their professors. And I mean, if you're in like an IT and they haven't really updated their skills in five years, it's very obvious to self taught people but not to students who don't know better. I did have a few professors that were really, really great. My professor Jefferson, which I took a JavaScript course with, and then I took a server side JavaScript course with my professor Cody. And he taught us all sorts of new stuff, we didn't really do a lot of ESX. But we actually we went over, like unit testing, we did all sorts of cool stuff. So it is really hit or miss. And it does depend on the department. So

</p>
<p><strong>Derrick Showers</strong><br />
getting down a rabbit hole here, but it's more I think it's more important to learn concepts and, and how to learn new things. More so than syntax. Because you know that you're never going to be able to teach the latest of anything.

</p>
<p><strong>Ryan Burgess</strong><br />
No, and especially in front end. That's a lot of even what we talked about in episode three of like, how do we actually learn and stay up to date, I think that's just like constant even like, if you're a professor, teacher, I think that's really important is like you should be staying up to date and also basically telling, explaining the trade offs of like when you should be starting to use new features, and all those types of things should be explained. And even talking about something as simple as a bar is like, why was that use and what what has changed? When we do something like let or const instead, I think that's like important for people to stay up to date on.

</p>
<p><strong>Sarah Federman</strong><br />
The bigger problem isn't so much with the professors. It's just getting the curriculum up to date with the university. I mean, I have a lot of sympathy for that.

</p>
<p><strong>Ryan Burgess</strong><br />
Sure. But I also think a little bit as on the instructor is like, definitely, yeah, like, because I think they can, yeah, the curriculum. That's that's a hard one. But I also feel that if you're a good professor, you can start to demonstrate that right in like any at any point, you don't really have to have permission on the curriculum that hey, I'm going to talk about like the latest features. So after talking about our company's you know how we've switched over to ies, 2015, and leveraging to even ies 2016. I think it's about time to wrap up today's episode. But first, let's go round and share our picks for today's episode. Derek with you want to kick us off?

</p>
<p><strong>Derrick Showers</strong><br />
Sure. So two of mine are related to Yes, six.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice.

</p>
<p><strong>Derrick Showers</strong><br />
So the one thing is babbles try it out. Have you have you guys seen us? Know it, just go to Babel cache.io or whatever, and click on Try it out. But you can actually write JSX and you can see what it would be in the ES five.

</p>
<p><strong>Ryan Burgess</strong><br />
So nice.

</p>
<p><strong>Brian Holt</strong><br />
Yes, the repple. Right.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. So it's really handy. So like, if you're like, oh, I don't really know how template strings are working, or, you know, you can like kind of parse template strings and throw it into a function or whatever. But you can kind of see how that's working and how that gets compiled. So that's really cool. Second pick is kind of a shameless plug. And I just thought about it. And but it's a Yeoman generator that I built. I don't know if anyone can use Yeoman anymore, but I like it, because it's just a great way to structure out something. And so I built one for iOS six with Webpack. It's just

</p>
<p><strong>Augustus Yuan</strong><br />
telling me for the whole day, yeah,

</p>
<p><strong>Derrick Showers</strong><br />
yes. 2015. With Webpack, it probably has a lot of bugs. It's honestly, I just built it from for me to get something because I like we were talking about whenever I start a new project I always want right, yes, 2015. Now that I'm used to it, so it's easy way to do that. It's called the latest greatest web app. Because going back to the whole npm module, main problem, every single combination of the ES 2015 Webpack. Combination was taken. So I want to play this phrase.

</p>
<p><strong>Jem Young</strong><br />
Sounds

</p>
<p><strong>Derrick Showers</strong><br />
very original, right? And then my third pick is not yes, six related.

</p>
<p><strong>Augustus Yuan</strong><br />
That was shameless shameless shameless,

</p>
<p><strong>Derrick Showers</strong><br />
is Trello. Probably everyone has used hopefully everyone has used Trello. But it is fucking awesome. It is. It's just you can they do integrations kinda like Slack does, but you can. So you can make it as complicated or as simple as you want. I use it for everything from like, just what, as far as like what I want to learn. Next, I have an inbox column. And I just just throw it in there. And and I go through and decide if I actually want to look into it more, but highly recommend checking it out. Very cool.

</p>
<p><strong>Ryan Anklam</strong><br />
Do you have any music picks? Were you listening to any code this week?

</p>
<p><strong>Derrick Showers</strong><br />
Actually, funnily enough, I told you over slack, the massive attack stuff that you picked up last week, great coding music. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I honestly listen to it as well, which is really fun. It's awesome. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
I wouldn't go around today. Basket tacks play.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. So good choice. Brian, how about you? What's

</p>
<p><strong>Augustus Yuan</strong><br />
your,

</p>
<p><strong>Ryan Burgess</strong><br />
what's your picks?

</p>
<p><strong>Brian Holt</strong><br />
My first pick for anyone that will listen to me is I've been learning scheme this week, and I've been telling little everyone about it. There's a book called The Little schemer, which is free online and there's a PDF if you just Google for the little schemer, it's it's online. You can also just buy the book, which is what I did. And I'm an idiot. And I tried to learn Haskell once upon a time. And I just got about two thirds of the way through the book. Learn yourself Haskell for great good. And I'm just not smart enough to get it like I'm just not there. So a good friend of mine out of Minneapolis, Eric, recommended that I try scheme first, because scheme kind of pairs away all the different ideas. It's like just functional programming. There's no like no type system. It's such it's literally just functional programming. It's kind of bare bones. And so I like I highly, highly recommend learning scheme if that's if you want to sharpen your your functional Fu. My second pick, which is a since we're on the subject of shameless plugs here is front front end masters.com. It is two front and masters workshop last week. And I did I've done two previous tests, I've done four. So just like hashtag disclaimer, if you're watching my videos, I do make money. But beyond that, I actually believe that they had like the best JavaScript learning content on the web. And they're definitely worth the 40 bucks a month to get access to that content. I

</p>
<p><strong>Ryan Burgess</strong><br />
will actually second that I've sat in on some of your talks. And I think yeah, definitely you do a good job explaining it from like, anyone in the crowd seems to be like getting the concepts. So definitely recommend watching Brian's talks, or the event or the new ones available soon.

</p>
<p><strong>Brian Holt</strong><br />
It's gonna be about a month or two from now. Okay, when we give it which is Sunday, the third of April, okay. But like I have two previous talks on there, Jeff Hussein has a great one on RX js. Henry George sins is great on modern web apps. They they're gonna release an Angular two, one, which is like amazing. Front end masters has always come out with like, absolutely top notch.

</p>
<p><strong>Ryan Burgess</strong><br />
They do have a lot of really good talks. I think in general, it's like if you want to stay up to date with things I am full for it. It's it is a good site to subscribe to. Definitely.

</p>
<p><strong>Brian Holt</strong><br />
As far as my music this week. I'm seeing Ellie Goulding this week. So I was listening to a lot of Ellie Goulding and brutes, they're also opening forum. So that's what I was listening to

</p>
<p><strong>Ryan Burgess</strong><br />
very cool. Brian, How about yours picks for this week.

</p>
<p><strong>Ryan Anklam</strong><br />
So my first pick is one password. I had been thinking about using it for a long time. And I saw Ryan using it and I decided to kind of take the jump. And ever since I've been using it, it's been awesome. The integrations are great. The plugin for Chrome is awesome. So definitely check that out. The other one is Vim tabular, which is a plugin for vim that will help you line up basically text elements. So I'm kind of weird. And I love to have my all my equal signs line up.

</p>
<p><strong>Brian Holt</strong><br />
It's the worst.

</p>
<p><strong>Ryan Anklam</strong><br />
submit a pull request that I have to review that doesn't have your holy shit equal size line.

</p>
<p><strong>Ryan Burgess</strong><br />
You definitely done that before and actually like that, like it's nice and clean.

</p>
<p><strong>Ryan Anklam</strong><br />
But yeah, if you have vim tabular installed, you could line up your equal signs. I create a shortcut for just two keystrokes and I got all my equal signs for all my requires. lined up, it takes me

</p>
<p><strong>Brian Holt</strong><br />
10 minutes to request. Sanitation engineer.

</p>
<p><strong>Ryan Anklam</strong><br />
And I've been listening to a lot of 90s Hip hop this week while I'm coding so what's your

</p>
<p><strong>Ryan Burgess</strong><br />
like Dr. Dre, maybe it's Dongri das

</p>
<p><strong>Ryan Anklam</strong><br />
effects all right. What? Suns infinity 93 til infinity that song are sons of mischief nights like that. So yeah.

</p>
<p><strong>Derrick Showers</strong><br />
And then co Kiss from a Rose comes.

</p>
<p><strong>Ryan Burgess</strong><br />
Great, Sara, what are your picks for this episode?

</p>
<p><strong>Sarah Federman</strong><br />
Oh, man. So my first pick is html5, please, which has been around for a while, but it like goes over which new features of html5 and JavaScript D things that you should use? You should wait on or you should just not at all, which is cool. And then my second pick is a battle on Twitter between two AI bots. Cuz that's fun. And I also included on the subject of AI, an article about the Microsoft teen AI that turned into a Hitler loving sex robot. Wow, that's fine. I blew up under 24 hours. Yeah, see

</p>
<p><strong>Ryan Anklam</strong><br />
the scene from Anchorman right where they're sitting in there. Like that escalated quickly. That's a perfect way to describe it.

</p>
<p><strong>Jem Young</strong><br />
They say like the fundamental problem with AI is that it's ultimately gonna be programmed by humans. So We're fallible, just like an AI is gonna be just as fallible as

</p>
<p><strong>Brian Holt</strong><br />
it made me fear the future. Oh yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
It is kind of scary. Jem.

</p>
<p><strong>Jem Young</strong><br />
Well lower on the future. I was trying to watch Terminator Genesis last night on Netflix, terrible movie. It was so terrible. I was just like, What are they doing here? But sorry, that's my rant for the day. My pics ESX cheat sheet. So exploring desk comm yeah, that's, I don't care. Give me one. If you go there, it's like a super awesome high level overview of everything in. Yes. 2015. So check that out. If you learn it, know it. Love it, you will know, like future jobs or current JavaScript better than everybody else. So that's fantastic link. Last one is cult of the party. parent.com Just go there. That is your Slack added to your HipChat. Thanks Mars for the link. She told me about it. My coworker at Netflix. When I asked him this week, probably kid koala is fantastic. Yes, has a DJ. Thank you, Brian. We have good taste in music. All we do is like just swap music links. That's literally at our kick wall is fantastic. Demo. Listen, feeling. Very cool.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess what do you have for us this week?

</p>
<p><strong>Augustus Yuan</strong><br />
So I recently stumbled upon this thing called Tilt Brush that was made by Google. And it's kind of like three print. Like you could do painting in 3d with virtual reality. I'm like, super. And I think that that will be like, it'll be like so interesting. browsing the web through virtual reality like the Oculus Rift. And like, I know, Mozilla has been doing some stuff, playing around with that stuff. So I thought that was like super cool.

</p>
<p><strong>Brian Holt</strong><br />
I have some tweets with my Tilt Brush stuff. So go check it out. It's pretty vertical. I

</p>
<p><strong>Ryan Burgess</strong><br />
was actually I was concerned that you were going to leave Netflix just to be like an artist.

</p>
<p><strong>Augustus Yuan</strong><br />
tromped or the bird inator. Where do I find it?

</p>
<p><strong>Ryan Burgess</strong><br />
It's on his Twitter account. BT

</p>
<p><strong>Augustus Yuan</strong><br />
immediately. Okay, for sure. And then you won't

</p>
<p><strong>Brian Holt</strong><br />
get it. It's next

</p>
<p><strong>Augustus Yuan</strong><br />
level. And then just two other ones. There's this site called cotton baru. They have like really cool shirts. It's pretty. Oh, is that true? I was cashmere

</p>
<p><strong>Ryan Anklam</strong><br />
shirt here. Yes. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
My name Calum is wearing the responsive or what's the title for it is, but it's basically design. Responsive Design is a pretty sweet shirt.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it has like a really chill bottle. Like you can just submit a design and if people enough people want to buy it, then it actually sells it and make stuff. Cool. And then the last one is this thing called spacemacs. Where it's like, if you like emacs or Vim. It's like this thing that supposedly combines them both and makes an editor. So pretty interesting stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
my picks for this episode. Were on a happy hour show. I picked a lot 40 Whiskey. It's actually a Canadian rye whiskey.

</p>
<p><strong>Brian Holt</strong><br />
I Canadian.

</p>
<p><strong>Ryan Burgess</strong><br />
I am. I am from Canada, but I've never actually had it until I was in the US. It was actually given to me as a gift. When I left Evernote to come to Netflix. Yeah, I got it as a gift. And I've actually purchased it a couple times since then. Because it is delicious. So lot 40 Whiskey. Delicious. Very good. Right. It's probably one of my favorites. It's right now. It's good. Yeah, yeah, actually, you have tried some so it is a good one. And then my second pick is actually since we're talking about ies 2015. And I'm going to get stuck seen it but gem young on this panel has actually spoke at React Rally and has a video online speaking pretty much on this topic. And I think it's very valuable in babies as well. And also tattooing babies. And you pretty much just have to watch this talk. It is a great talk the title of it. That's where I'm gonna get stuck. No, there's no getting stuck. It's not that I'm gonna say it is writing or the title is elegant react with iOS six and a bit of iOS seven app reactor. And this

</p>
<p><strong>Derrick Showers</strong><br />
is coming from someone who has an empty glass. He's afraid.

</p>
<p><strong>Ryan Burgess</strong><br />
I had to drop that. So to wrap up today's episode, let's go around and let everyone know where they can get in touch with you. They're working everyone. tweet at you.

</p>
<p><strong>Derrick Showers</strong><br />
Where can they tweet at me? Yeah, on Twitter. And. And specifically at Derek showers.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome, Brian.

</p>
<p><strong>Brian Holt</strong><br />
Well, if you'd like to troll me, it's at JemYoung.

</p>
<p><strong>Ryan Burgess</strong><br />
But if you want good tweets to heat praises. Awesome, Ryan. Bittersweet, Ryan. Perfect.

</p>
<p><strong>Ryan Anklam</strong><br />
That's an add sign

</p>
<p><strong>Ryan Burgess</strong><br />
at bittersweet, right. A bittersweet, right. Hey, Sarah,

</p>
<p><strong>Sarah Federman</strong><br />
mine is at Sarah underscore Fetterman. Not the normal one. That's somebody else.

</p>
<p><strong>Ryan Burgess</strong><br />
With an underscore with the underscore that's important. Yeah. Jem

</p>
<p><strong>Jem Young</strong><br />
Mine is at Jem Young but if you want to send me mean hateful tweets send him to HK BT.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, my is just at OG Berto UWGB or to me if you want to send me hateful tweets just

</p>
<p><strong>Ryan Burgess</strong><br />
fair enough. That's good. You're brave man. And I'm <a href="https://twitter.com/burgessdryan">@burgessdryan</a>. And that's pretty much it for today's episode. Make sure to follow us on front end H H. And I'd actually love to hear you tweet at us what your favorite Happy Hour beverages of choice.

</p>
<p><strong>Ryan Anklam</strong><br />
We'll send you some stickers too. We got

</p>
<p><strong>Ryan Burgess</strong><br />
a lot of good stickers. Yeah, you did actually. Someone did send Jem dog photos and like Jem loves dogs. So if you send him dog photos, he's gonna reply with basically you're getting some all

</p>
<p><strong>Jem Young</strong><br />
the way to Slovenia. Holy shit. That's awesome. Dedicated

</p>
<p><strong>Ryan Burgess</strong><br />
that is. That is awesome. But it was worthwhile. Like, that's good. Yeah. So thank you all for listening. And until next time, we'll talk to you then.

</p>
`;
        return transcript;
    };