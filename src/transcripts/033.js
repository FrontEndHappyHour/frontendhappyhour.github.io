module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Jem Young</strong><br />
Hello, and welcome to the 32nd episode of the front end Happy Hour Podcast. Today we're going to be talking about web components. We're joined by our honored guest, Trey Stuttgart's. Trey, will you tell us a little bit about yourself and what is your favorite front end happier beverage? Thanks

</p>
<p><strong>Trey Shugart</strong><br />
for having me on. So I work at Atlassian I do front end there. Been there for about three and a half years. It's pretty cool company. My favorite Happy Hour beverage. I kind of defaulted to beer because I was I was safe and easy, I guess. But um, tequila, I guess. Good tequila.

</p>
<p><strong>Brian Holt</strong><br />
What's your favorite style of beer?

</p>
<p><strong>Trey Shugart</strong><br />
Probably like a red. Like a like a malt. Like maybe an IPA. Red IPA is pretty good. But some have been multi.

</p>
<p><strong>Brian Holt</strong><br />
I don't know if I've ever met anyone that has answered it that way. So good on you.

</p>
<p><strong>Jem Young</strong><br />
Thanks, Ray. Now let's go around the room and introduce our panelists. Ryan, do you want to go first?

</p>
<p><strong>Ryan Anklam</strong><br />
Sure. I'm writing club. I'm a senior software engineer at Netflix.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London, a front end dev at Atlassian.

</p>
<p><strong>Brian Holt</strong><br />
I'm Brian Holden. I'm the resident web component hater slash lover at Netflix.

</p>
<p><strong>Jem Young</strong><br />
And I'm Jem Young, Senior Software Engineer at Netflix. You may not have noticed, I am not Ryan Burgess. I do not sound Canadian. And if you can't tell, I say JavaScript normally. The JavaScript these outs because he just had a baby. So cheers. So Ryan, and little baby. Awesome. Cheers. So on every episode of Front End, happy hour, we'd like to pick a keyword that when mentioned, we all take a drink? What do we pick for today's keyword? Alright, so every time we hear the word Dom, we will drink. And it's also in reference to Fast and Furious eight, a fantastic film. So to get started, let's talk a little bit about web components. So on what is a web components? Anybody? Tre

</p>
<p><strong>Trey Shugart</strong><br />
web, but it is something where you can just write HTML, and you have something working like a UI component, like an input, you know, I guess underneath the hood, you could look at that it's sort of like a web component,

</p>
<p><strong>Brian Holt</strong><br />
you can kind of approach it from the perspective of like, imagine, like a date picker that the browser ships, right? It ships and there's nothing you can do about it. Like you just put a date picker on the page, you can't modify the internals of it or anything like that. with web components. This is kind of the browser makers exposing to us the abilities to kind of make our own components and also to kind of muddle with the components that exist. So it's powerful because it encapsulates a lot of, of that CSS, that JavaScript into like these components that you can repeat throughout the DOM. Right. Cheers.

</p>
<p><strong>Jem Young</strong><br />
So Trey, what is skate J S and why the name skate J S,

</p>
<p><strong>Trey Shugart</strong><br />
I'll toggle the ladder first. So skate because I used to skate and then I got too fat for it. And it just kind of seemed like I always wanted to name a library skate just because it sounded cool. And, you know, maybe people think it's cool. It sounds cool.

</p>
<p><strong>Brian Holt</strong><br />
It's good marketing.

</p>
<p><strong>Trey Shugart</strong><br />
So skate itself is just, I mean, it's better to kind of like define what performance is like a general abstraction for I think, Dom change, there's libraries. So it's not something that you should look to for templating or anything like that. It's just an abstraction layer where somebody writes an HTML tag and gives you the lifecycle callbacks, you can hook into so low level abstractions. So skate is just an augmentation of that kind of does, it gives you an abstraction to where you it gives you most things, you're going to need to be productive with something. And it even goes as far as to having a sort of opinion on and give you like a like a functional as an functional programming rendering pipeline. So props change, and then it triggers like a render callback, and something renders and it changes in the DOM.

</p>
<p><strong>Jem Young</strong><br />
Cheers. It's gonna be a long episode.

</p>
<p><strong>Trey Shugart</strong><br />
We're using something called incremental DOM right now. And it's great for

</p>
<p><strong>Brian Holt</strong><br />
cheers, cheers.

</p>
<p><strong>Trey Shugart</strong><br />
But it's a name. And we're moving to using React. Because it's fast. It's more likely somebody is going to use that over incremental. Dom.

</p>
<p><strong>Jem Young</strong><br />
Cheers, cheers.

</p>
<p><strong>Ryan Anklam</strong><br />
I think it was a kind of you spell it out. You can just go do em. Yes. And this

</p>
<p><strong>Jem Young</strong><br />
could also just say, incremental lead character and Fast and Furious movies. Maybe everybody won't get that it's a global podcast. I don't really watch Fast and Furious, but you should. So using pre acts and ahs

</p>
<p><strong>Trey Shugart</strong><br />
pre act is just the rendering layer. So skate skate is like basically the interface from attributes and properties to whatever you want to use as the rendering layer underneath. And something you don't get by default with web components is really like the ability to send an attribute on an element. And then that translates to like a render, or a property or you have like this binding happening between, like, you set a property and it'll set the attribute. Right? Like, if you set like the ID property, it's gonna set the ID attribute, and return and it's gonna actually reflect it, if you set the attribute, it's gonna set that property. So it kind of handles all that for you. Certain, you know, properties, you're probably not going to want to reflect. So by default, it doesn't really do it for built in stuff, but so it handles all that for you. And then gives you a callback to where you can just kind of return some virtual DOM. And whatever rendering layer using will then render that out underneath the hood. It's pretty cool.

</p>
<p><strong>Jem Young</strong><br />
So just for reference, and because people listen, our podcasts go from very, very senior to very, very junior, you can already create custom elements right now in the document object model. So what skate Jes does is it does the binding for you, right? It does the actions or Yeah,

</p>
<p><strong>Trey Shugart</strong><br />
so you can use the native API's to create a custom element with using skate, all you're doing is extending something other than HTML element. So you're sending something like component like you do in React? Okay. And then you have to register that, of course, so that you can write out HTML. That's pretty cool. So

</p>
<p><strong>Brian Holt</strong><br />
what browsers support that right now? Just Chrome and Safari?

</p>
<p><strong>Trey Shugart</strong><br />
I'm not sure it might be only in Tech Preview. Because Safari really shattered on before they released custom.

</p>
<p><strong>Jem Young</strong><br />
What is a Shadow DOM? Yeah, cheers. Cheers. I

</p>
<p><strong>Brian Holt</strong><br />
think he should get like a one sentence free shot after cheers. Tom as many times as you can. Okay, and then keep going.

</p>
<p><strong>Stacy London</strong><br />
We have a timeout, we need to see bounce this.

</p>
<p><strong>Brian Holt</strong><br />
thing, so it's appropriate. So what is what is Shadow

</p>
<p><strong>Jem Young</strong><br />
Document Object Model?

</p>
<p><strong>Brian Holt</strong><br />
My Mulligan so kind of what I was alluding to earlier in the podcast where you can kind of create these encapsulated bits of markup and styles and behavior. It's basically that you get like your own little tree of Fuck you guys DOM that you get to play with and that the CSS doesn't escape from it. The behavior doesn't escape from it. It's bait, it's guaranteed to be contained that people can't reach in and it can't reach out, right?

</p>
<p><strong>Stacy London</strong><br />
Yeah. So if you were to make like your own date component, and you shared it with somebody else, and they put it into their web app, none of their styles would collaborate, not nothing. It would just exist as is, is that accurate?

</p>
<p><strong>Trey Shugart</strong><br />
Certain things do go through like, like fonts. But yeah, most things don't

</p>
<p><strong>Jem Young</strong><br />
if I could be misremembering, but I believe the video tag has a shadow DOM that controls things. I could be mistaken on that. Cheers, cheers.

</p>
<p><strong>Brian Holt</strong><br />
So there's a ability in Chrome to say, show me Shadow DOM.

</p>
<p><strong>Stacy London</strong><br />
This is worse than the rust episode.

</p>
<p><strong>Brian Holt</strong><br />
And so if you enable that flag within your dev tools, it'll show you the internals of inputs and the internals of the video tag and internals of all these things that you did not think had internals, right. So yeah, the video tag definitely has its own has everything else incremented. It's exposing to you lower levels of Chrome that you otherwise didn't have before. I only have experience with Chrome's. That's when I can talk. So it

</p>
<p><strong>Trey Shugart</strong><br />
definitely looks that way in Chrome. But I had a discussion on one of the W three C issues with someone and I forget who it was. And they pointed out that it might look that way. But actually underneath the hood, they're doing something different, like very different. So you're not I doubt they actually use Shadow DOM underneath the hood.

</p>
<p><strong>Jem Young</strong><br />
So when people think of web components, they think, custom elements, but there's more to the spec than that. Right? Yeah.

</p>
<p><strong>Trey Shugart</strong><br />
There's also the template spec, see a shadow DOM template, and custom elements and HTML imports, which is, I almost forgot that one, because it's super, super contentious. I don't think it's useful. And I think many think that was well, at least in its current form. But there's also many who really, really want it. What does the import stuff do? Like you declare a link rel import, and you're given an href and HTML file, and then in the HTML file, you have your custom element definition.

</p>
<p><strong>Jem Young</strong><br />
That's weird. I've looked at it briefly, I looked at the spec. I don't know how I feel about it. It's interesting, but until I use it, I can't say I'm for or against it. Just weird. For now, it

</p>
<p><strong>Trey Shugart</strong><br />
seems like an in out of four or four specs, you have three that are very low level, then you have this one that kind of has that opinion, that declarative opinion, which is kind of nice, but I think it was a little young. There's a lot of turn towards the end of last year, and all the specs.

</p>
<p><strong>Jem Young</strong><br />
So let's get to the good stuff. Because I pulled around the office I said what do you use everybody think about web components. I was like, something something polymer or something something but people were kind of against it. They said I have react can make phone calls. components. What? What's the benefit of web components? Are people wrong? Are they right?

</p>
<p><strong>Trey Shugart</strong><br />
Nobody is right.

</p>
<p><strong>Brian Holt</strong><br />
Here, we're all wrong.

</p>
<p><strong>Trey Shugart</strong><br />
So the way I like to look at it is that, like I said earlier, it's the dominant direction, right? You should. Sorry. And you can, theoretically, like, this is easy. There's obviously more intricacies to it, but you can write a React component. And you should be able to wrap that up, right. So you can write your React components, use them internally, distribute them for the React apps, and then wrap that in a custom element, that's probably a better word for this. That might you shut it on, but then inside of it, but then that makes styling a pain. So you might just use a custom element that renders out some react. And then you can share that as like a leaf node, or it probably only works well as a leaf node at this point, because reacts children are different than Chatham, you'd probably have to design it in different ways.

</p>
<p><strong>Brian Holt</strong><br />
So that's never the way that I had thought about it in terms of using it with React, the way I had always envisioned using it with React is that it's kind of like the target, right? So I pull in someone else's custom element that they've created, maybe using date pickers, because I don't know what I have no creativity, that I could pull in someone else's date picker, and then have that be a target of React, right. And so that react would say, okay, and then throw this date picker onto the page and give it these particular attributes. So they could work that way too.

</p>
<p><strong>Trey Shugart</strong><br />
Totally. And it should, it works both ways. And that's what's really nice about it is you can pull in a custom element that somebody has written and use it inside of React app. But you can also like, if you're building like, components that have react, and you want to distribute those to something that's not using React, you can say, Okay, well, I'm just gonna wrap this in a custom element. And then you can use this and it will encapsulate react kind of within that. That element

</p>
<p><strong>Brian Holt</strong><br />
here, this idea, the only thing that would worry about is that you'd have to package react along with the element. Yeah, that's

</p>
<p><strong>Jem Young</strong><br />
just like

</p>
<p><strong>Stacy London</strong><br />
the Russian doll element.

</p>
<p><strong>Trey Shugart</strong><br />
Which is kind of going into wife skates, opting to use pre act,

</p>
<p><strong>Brian Holt</strong><br />
well, that totally makes sense.

</p>
<p><strong>Jem Young</strong><br />
Just because it's lighter than react or

</p>
<p><strong>Trey Shugart</strong><br />
there's, there's a bit more to that. Bre X gaining in popularity. And it's much, like I said earlier, it's much more likely somebody is probably gonna use that than what we're using now. Just to not have to say the key word. And people are using this in their apps. So if they want to have like a web component abstraction around their components, all they have to do really is bite off what skates giving it, which is like 3k, at the moment, probably get a bit smaller. And I think Jason Miller is actually making Preact smaller. He wants to bring it he wants to bring it down to two. He's,

</p>
<p><strong>Brian Holt</strong><br />
he's a mad scientist, yes, somebody is got to worry about those things. So sometimes I find like, really exciting about this prospect is that we can write like a really cool component that can do awesome things. And then it can be shared across libraries, right? Like, it's not like you make like a really awesome, like drag and drop for React. And then it's just stuck in React land forever, right? You can build these web components that can be shared with across all frameworks. Now, you don't need a framework or it can be used in the future. And I think that that, to me, is a compelling story about web components and custom elements.

</p>
<p><strong>Jem Young</strong><br />
I think that's the dream of web components. But they the idea has been around for a while, but it hasn't taken off. Google has pushed polymer pretty hard. And yet, I don't know many people using Polymer, it could just be our bubble here. But yeah, it could be the coast I'm on. But what what are your thoughts on Polymer? And what's the difference? greenscape. JS, and polymer Polymer has

</p>
<p><strong>Trey Shugart</strong><br />
a lot of opinions. It's still a web component library and polymer one actually, like I think some stuff kind of bled out. And when you weren't just using web components, when you're using Polymer, it was kind of like some of the implementation details or forced you to think about some of those implementation details. Whereas polymer two is a lot different in that it's, it's more like skate in the sense that it you extend like a base class, and it's just an element. And you can pass that to custom elements dot define, which is what skate is. But skate tends to leverage more of things that are out there like Preact, it doesn't rewrite its own templating engine or do anything like that. It doesn't have what's known as data binding. Because it's a top down data flow. Skate focuses primarily on like a functional rendering pipeline.

</p>
<p><strong>Ryan Anklam</strong><br />
Speaking of that, what made you want to write skate J. S,

</p>
<p><strong>Trey Shugart</strong><br />
I want to try and be famous.

</p>
<p><strong>Brian Holt</strong><br />
This is the dream. It's being in front of happy hour. I

</p>
<p><strong>Stacy London</strong><br />
mean, it's really when

</p>
<p><strong>Ryan Anklam</strong><br />
you're famous now. It will be when this episode goes.

</p>
<p><strong>Brian Holt</strong><br />
We're the worst.

</p>
<p><strong>Trey Shugart</strong><br />
So about three years ago, six months into working at Atlassian. And we had this library called Alli, which is a cross product component library. And we really want to just find a What better way to write these components because it was just a jQuery soup. We had different ways of setting stuff like it could have been used, like event delegation might go and enhance a component on the first event, or you might have to call a jQuery function or might have been like a just a random constructor somewhere. So we wanted to try and make this consistent across the board and web components at that time. Were kind of like this thing in this forest land, they're going to be done someday. And I saw something. I don't know if you've seen X tags, or x tag. Yeah, a little one. Yeah. Well, now it's I think it's backed by Microsoft, because I think Daniel Butner move there,

</p>
<p><strong>Jem Young</strong><br />
you mean LinkedIn?

</p>
<p><strong>Trey Shugart</strong><br />
So he had something on one of his blogs about how you could use I think it was like animations and like animation events to where you can enhance elements. It was some weird trickery. And then I just started using mutation observers, because it seemed a bit more straightforward. But I think that was back when? I don't know, I don't know the reason for it, actually. So I'm not going to try to go on digging. But anyways, yeah, I wrote something similar to that, because it just kind of felt there wasn't really anything out there. I think X tags kind of did exist, but I didn't I didn't really like it API I guess. Maybe that's not a good reason to reinvent the wheel. But that's why we don't have square wheels, I guess anymore. And there's so many different react likes, like periactin? No, it's innovation. Yeah. So I just wrote something and said, Hey, let's try this. And it at that time, it was like custom elements, but it worked on custom elements, attributes. So you could actually create like a custom attribute and bind behavior to that. Or you can create a class name. And it was meant as more of like an abstraction layer, or transitional layer away from like jQuery, like you're binding stuff to classes, or attributes. So instead, you can actually just bind stuff in this thing. You have like lifecycle callbacks that matched the spec ones, and write your components kind of self contained in that.

</p>
<p><strong>Jem Young</strong><br />
I've looked at the syntax for creating elements, k, j. S, and I like it. One, I like classes, I don't care. Anybody else says, and I'm running this podcast. So classes are great. You just like sugar,

</p>
<p><strong>Stacy London</strong><br />
and treats and cookies.

</p>
<p><strong>Jem Young</strong><br />
But a lot of the kind of the component action binding reminded me of actually flux where you have like, the, you know, component mounts and bind to an action and unmount it and bind to the action. Is that where your inspiration came from? Or is it more just functional programming, it's the right way to do things. So

</p>
<p><strong>Trey Shugart</strong><br />
what flex was wasn't my inspiration. Now, I mean, the inspiration really was that I want to be as close to the specs as possible. And I really saw this movement towards the whole functional programming aspect of I'll say, virtual DOM dragon a while there's a really big movement towards it. And there's something really appealing about that. Right? It's a very lightweight representation of what your UI is going to look like. So I kind of fiddled around with it felt right? And kind of just went with it from there. I mean, it wasn't really super premeditated or anything. Nothing in this industry really is.

</p>
<p><strong>Brian Holt</strong><br />
happy accidents.

</p>
<p><strong>Jem Young</strong><br />
I like it. But has Have you talked to Safari at all their team? Are they is web our web components in their pipeline. They looking at supporting it.

</p>
<p><strong>Trey Shugart</strong><br />
I think Custom Elements be one is in Safari Tech Preview. Shut it on is already released.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, no, they were dragging their feet for a long, long time, like not even marketing is like content to implement, right?

</p>
<p><strong>Trey Shugart</strong><br />
In fact, actually, I'm pretty sure it is released now. Custom Elements v1. So you do have shadow Document Object Model. Custom Elements in Safari?

</p>
<p><strong>Brian Holt</strong><br />
Do you know the story with Firefox's?

</p>
<p><strong>Trey Shugart</strong><br />
No, I think it's being implemented.

</p>
<p><strong>Jem Young</strong><br />
I haven't checked. That's how they're usually they usually keep parody with Chrome as much as possible. Yeah, I

</p>
<p><strong>Brian Holt</strong><br />
think they're focusing on different things. They're really big, focused on gasm right now. Yeah. WebAssembly, I suppose

</p>
<p><strong>Jem Young</strong><br />
should be exciting.

</p>
<p><strong>Brian Holt</strong><br />
I suppose.

</p>
<p><strong>Jem Young</strong><br />
We'll see. So as someone who's dug into, like the guts of the document object model, what excites you about upcoming specs, anything interesting coming down the pipe, even in the next two, three years?

</p>
<p><strong>Stacy London</strong><br />
Because you were involved? Are you involved with the W three C with with the web component specification? Are you

</p>
<p><strong>Trey Shugart</strong><br />
not anything formal? No. Yeah, I kind of would like to be, but I don't know. What excites me. I think the most exciting thing for me right now is like progressive web app. So whatever we can do, to try and get the web platform to be closer to everything you're gonna need to write for mobile apps. Because it gives you 90 to 95% of the way there. I mean, one thing is performance. And there was a big Twitter thread yesterday about about this, God bless, can we learn? You know, he was partially right there. And I think mobiles always going to be a little bit ahead. But for 95% of the use cases, I think progressive web apps are going to be what people should be focusing on. I mean, we do you don't have to go to an app store and download something, you just visit a website, you can do your thing there, or you can just kind of install it. And it's the same experience. So yeah, anything that like gets us to a better, better point. They're, like service workers.

</p>
<p><strong>Jem Young</strong><br />
So I'm related to web components and kind of putting you on the spot. What is a progressive web app because if you Google it. There's like 80 definitions. I don't even think people that work for Google that create Chrome, things like that know what a progressive web app is.

</p>
<p><strong>Trey Shugart</strong><br />
So I can basically give my own definition. And it'll be right. Yeah, in at least you can edit this out. Progressive Web App, it's just it. I don't think the name does it justice, really, you visit something in the browser. And it's the same experience is if you had it in as an app form, right. And essentially, all you're doing is removing the Chrome browser, and you have a splash screen. And the only difference to me is like you might, you know, do something differently with offline stuff like service workers. But to implement it, it's just a manifestation. At a very simple level,

</p>
<p><strong>Stacy London</strong><br />
it seems like offline, such a big part of it are like if you run like Lighthouse against your app, and it's trying to like, give you tips on being performant as a progressive web app, it's like, there's just a ton of stuff in there about what work offline won't work.

</p>
<p><strong>Trey Shugart</strong><br />
But the nice part about it is that if you design your stuff correctly, and you do it right, from the get go, is that you don't have much work to do. And you're in business.

</p>
<p><strong>Jem Young</strong><br />
You're like quoting my talks. I'm like a progressive web app just

</p>
<p><strong>Trey Shugart</strong><br />
works. I remember that stock or that you had a while back.

</p>
<p><strong>Jem Young</strong><br />
That was you in the bushes. Taller in person. So I was looking at the repo for SC HS. And it's massive. So congrats on keeping an open source library was really small. I mean, it is it's five kilobytes, compressing geez,

</p>
<p><strong>Trey Shugart</strong><br />
I think the maybe skate for is like, yeah, something around there. I think bundled with incremental Dom, it's like, seven. But the skate five will be 3k. Hmm. How did you get it so small? I'm not counting Preact. And I just removed a bunch of stuff, just cold stuff that wasn't needed. Because as time goes on, you know, you can gain you just keep adding stuff.

</p>
<p><strong>Ryan Anklam</strong><br />
And so I look at that look at the source code. I see that you wrote it in something that's near and dear to my heart, which is TypeScript. So why did you choose TypeScript?

</p>
<p><strong>Trey Shugart</strong><br />
We haven't written the source in TypeScript. We're kind of debating that right now. Well, both like at work and in skate, I don't know what we're gonna do. There. We have a definition file, which it's fully compatible, like, Yeah, you get types, but I do. Yeah, I don't know what we're gonna do there. TypeScript is cool, but flows, feels like you can adopt it a bit more incrementally. That that's a whole nother can of worms

</p>
<p><strong>Jem Young</strong><br />
we're having right now. Yeah, cool. So we'll see where it goes. I don't have a preferred favorite Actually, no, I like flow a little bit better.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm sitting in the jerks.

</p>
<p><strong>Trey Shugart</strong><br />
I like the idea of doing a type system, though. And it's something I've thought about, could we do something like React does with props? But the answer is really no, because you have to still define your props? is these are something that's reflecting with an attribute? Or has, this is the dominant face for it. So unfortunately, you still have to kind of have props there. But they do. They do give you types. Like if you're using a type C superset.

</p>
<p><strong>Jem Young</strong><br />
So with such a large library, what's your approach to writing tests for McHattie test for every possible case, because it's gonna be pretty challenging, especially something as low level escaped? Yes,

</p>
<p><strong>Trey Shugart</strong><br />
I actually didn't test coverage until we started using end web, which is, so you know, create react app, it's kind of similar in a way, it's like the self contained, build, right? And minimal configuration, not if you really want to be follow the conventions. And it supports like React and react and web modules, which is kind of like the abstract way of saying, not any of the above. So yeah, and that has coverage built into by default. So I didn't really start checking it till then. And I think it has about 80%. And that was somewhat unintentional. We haven't we do write tests for everything or try to, but we, we have more written general tests, rather than testing like a super small, tiny piece of unit of code, or writing these big integration tests. It's kind of like, in the middle, it's in testing, the DOM is kind of difficult. It's worth the drink.

</p>
<p><strong>Jem Young</strong><br />
So I we got this question on Twitter. And we get a lot for people that maintain open source projects. But how do you prevent burnout when you work on such a large project? drink heavily? Good answer.

</p>
<p><strong>Trey Shugart</strong><br />
I don't know I have. I have two kids and a family. It definitely is harder. When you have that. I mean, your your hobbies suffer, not from the kids like from open source. Like kids or my hobby. You just kind of find time for it, or you just don't work on it. And you know, if it's a big enough project or whatever, you might have people helping out and they pick up the slack. There's no special formula. And I'm less burnout than a lot of people out there.

</p>
<p><strong>Stacy London</strong><br />
How many contributors Do you have? Or like, is it mostly just you or do you have help?

</p>
<p><strong>Trey Shugart</strong><br />
I have late yeah, I've helped. It's really cool. But it's mostly just been me. There's too one other person who's been doing it for quite a while with me, Martin Hochul, I think is how you say his last name. He's really good. He's the TypeScript guy. Right. I think Martin, give me the credit for this. Like that I'm getting to San Francisco. We'll

</p>
<p><strong>Ryan Anklam</strong><br />
have you on the show. We'll talk about TypeScript.

</p>
<p><strong>Trey Shugart</strong><br />
Please go to Florida soon over. And there's another guy who recently just kind of joined from nest Alex frosh, I think his name is. And Matthew CP, he works at batavi. So they're not using it there, I don't think. But he's been messing around with stuff. And he kind of wrote his own little traction layer called Bram, which is pretty cool. But he's been contributing to skate as of late. And some really good contributions are coming from him. We were using at Atlassian. That's another topic. And it's not actually somewhere, it might be worth going into if you guys want to. I'm personally interested, because being at Atlassian, right, because you recently started and you probably didn't, all the history. Yeah. Nice to know. So we're actually using it for quite a while but not really heavily. Because we're kind of just slowly drip feeding it to our when we were just in maintenance nightmare really with that, because there was just so much in there, so many different edge cases and things we had to account for. And so we kind of just started rewriting some of this stuff and decided to use it a bit more heavily, it probably would have been like, I think people coming into a new project using a kind of like a new library, you definitely get a bit of depth speed issues with that. So if we would have chosen react in the beginning versus scade, there probably would have been better dev speed with React. But the promise of web components kind of gives you that abstraction layer, which is really appealing. And not all of our stuff is in React. So it means that we can shift to more things in more areas. So we tried it for a while. And the thing that really bid us wasn't more desperate, around SCADA was def speed around the polyfills. They just weren't complete enough. We're maintaining our own, because we actually had a v1 polyfill, before Google did polyfill, you know, most things that we needed to in order to interact with, like React and other things. And then we said, well, this is kind of giving us problems, we have to have speed issues, let's just use the the standard v1 polyfill that Google has been spending time on recently. And we had the same problems. So it's not Google's fault. Like they were, you know, it wasn't actually versioned yet, or anything like that. So we were on the bleeding edge. And the real kicker was when Safari released a broken Shadow DOM to production. And that was just that was it worked in some scenarios, but not others. So if you were going to, like with, there's gonna be another one so incremental, Massachusetts, or is that the bounced,

</p>
<p><strong>Stacy London</strong><br />
bounced, that one

</p>
<p><strong>Brian Holt</strong><br />
probably will also be bouncing.

</p>
<p><strong>Jem Young</strong><br />
So it's an interview question that I like,

</p>
<p><strong>Trey Shugart</strong><br />
incremental, D O M, they, they create stuff, they go document or Create Element style, they append it to the document, and then they set like text content or whatever for the style stuff. And if you append it, and then set the text content, nothing would would happen. If you did innerHTML style with its content, fine. But if you did it the other way around. So using the all the obstructions that we were just wasn't working and the workarounds weren't perfect. And it really kind of scared us. Like, what if Firefox does the same thing when they release? I mean, the customer is not going to come banging down Mozilla door, they're gonna come to our door. Yeah. And, you know, that just that just wouldn't. So it was very much more pragmatics solution to use React, because products were already starting to use it. So it kind of made sense, you can kind of get that for free. It does mean that we can't ship react to everything, more LT kind of have to imperatively use it or find some sort of integration, whatever library you're using, but I think most most products are kind of trying to adopt it now. Which is good, you know, down the road, what might make sense, we already have a set of components that we can possibly just wrap and lift monster custom elements.

</p>
<p><strong>Jem Young</strong><br />
Again, I like the idea of web components. Because it's, it's to me, it's just like a shared component in React or what is it in Angular? Is that a directive? Even though anymore? Yeah, so directive, yeah, or a custom directive. But it's not tied to any one library. So like, the potential of that is just huge. It's awesome. But what do you what do you see is the tipping point for getting web developers ramped up on, like, web components are the thing,

</p>
<p><strong>Trey Shugart</strong><br />
it's very contentious between communities. And I think we know the communities that I'm talking about.

</p>
<p><strong>Jem Young</strong><br />
I don't know the communities for

</p>
<p><strong>Brian Holt</strong><br />
all of them

</p>
<p><strong>Trey Shugart</strong><br />
is, well, there's Yeah, I mean, Angular, I don't know, if it's very contentious for them. Embers kind of laughs

</p>
<p><strong>Stacy London</strong><br />
immediately at

</p>
<p><strong>Trey Shugart</strong><br />
ember. They have some opinions about it. But there's been a lot of contention between like the web component and react communities. And I don't know, like I've been in some of those discussions and like, I've eaten my words quite a few times. And I'm happy to admit that but I just think it's a lot of it's unnecessary. And a lot of this is just my comfort zone is better than your comfort zone. Both sides of that, too. So I think a big part of and reacts huge right, the community's massive so I think a part of Making Web Components big is going to be trying to somehow put out that fire between the two communities. I don't know how to do that. I would love to do it. But I feel like I'm the only one who's interested in doing that.

</p>
<p><strong>Stacy London</strong><br />
I think it's an education thing to like, yeah, web components for for new for new people get just getting into web development, writing a couple divs. To do the thing is maybe a more simple path. And like web components is a more complex path that isn't as clear. So maybe it's also like, education of the community and making sure that there's more stuff out there that that helps people understand how to do it, why it's important and why it makes sense. That makes sense.

</p>
<p><strong>Jem Young</strong><br />
It's hard, though, you I mean, you bring up a not even related to web components, but kind of the increasing corporatization of JavaScript libraries, it's kind of so on, people won't use it, unless it's backed by a large company that you've heard of these days, which is good, because I appreciate companies putting time and effort and money into building these things. The other hand, also don't want one unified web. I want people to keep pushing like you, you just like I didn't like this. Jason Miller react. Yeah, exactly. Exactly. Like we need more of that. And I don't know, that's a hard problem on how to just evangelize. There's more than one way to do things on the internet. Yeah, people

</p>
<p><strong>Trey Shugart</strong><br />
get scared. They want to use the thing that's going to be around for a long time, because it's gonna affect the company's bottom line. Probably. Right.

</p>
<p><strong>Ryan Anklam</strong><br />
That's a losing battle. Sure. A long time in web development is what, three years,

</p>
<p><strong>Stacy London</strong><br />
one day,

</p>
<p><strong>Trey Shugart</strong><br />
days of that a JavaScript framework? How many,

</p>
<p><strong>Ryan Anklam</strong><br />
four years ago doing something about jQuery would be like, holy crap. Now, it's like a sin to pull in jQuery, almost people look at you. Well, if you pull it in, so

</p>
<p><strong>Brian Holt</strong><br />
yeah, but like, I can see that the point in the sense of you build something on Durango, right? Like who, or what's the other one, like knockout, right? Like, those ones were kind of flashes in the pan like, they're don't get me wrong, they're awesome. And they have merit to the reasons to use them. But their communities aren't large, they're not well supported. And so that's kind of the danger when you go into a smaller community is that it can kind of dissipate before even realize what's what what happened. React is not going anywhere, at least for like the next probably 10 years, we're gonna be looking at websites with React for the next 10 years, at the very least, even if it like died today.

</p>
<p><strong>Stacy London</strong><br />
Yeah, there's so much like millions of dollars of people's time and energy in putting building complex applications with React. So like to redo all of those is significant.

</p>
<p><strong>Brian Holt</strong><br />
And it's a safe choice you can go to your boss today is like, all of these companies are using React, it's okay for us to use it too. As a

</p>
<p><strong>Jem Young</strong><br />
counterpoint to that, cuz you're absolutely right, it will be around for a long time, because it's supported by big company. But that's actually an argument for web components, you say they're not supported by any one company. It's just, that's just how web page works. And we don't need to rely on any sort of versioning. Or if react says, Oh, if you want to use React, you have to use Flow, they could do that next year. And then we're gonna have all make a choice. And I don't really want to work like that I want to open Well,

</p>
<p><strong>Trey Shugart</strong><br />
there's some cynics out there that would, and almost rightfully so point to Google and say, well, they create a button, and they push it the hardest. And they're actually probably one of the reasons that there was so much churn towards the end is that other companies or what people on the web, see, I guess, but you have companies, Zillow, Apple, what started iterating on that, because like Google was really pushing the Vizio API's. And I think they started getting more people on board. And don't quote me on this, I'll be wrong. No, I'm quoting. But this is, this is what it really felt like to me, like reading the issues and kind of trying to participate in them is that it kind of came to a point where like, everybody's like, Okay, well, this has taken so long. These, it may be kind of outdated, nobody else really had that much input. So let's reiterate on them and turn this back and, you know, finalize them. So I think, yeah, some people might point to Google and say, Well, it's kind of like the same thing as react or Facebook, pushing react, then pushing web components, or at least polymer.

</p>
<p><strong>Brian Holt</strong><br />
I remember, I went to fluent in 2013. And that was when Angular was kind of just turning the corner of like, really becoming the hot library. And that was the year that Google's really pushing Palmer really hard. And I think it was the v1 reviews, actually, I think it was the V zero stuff. And so a bunch of people started picking up polymer and start realizing like, this is super unruly, this is really hard to work with, it's really hard to understand it. And it's really hard to rescind the value proposition here. And so I think they burned a ton of bridges with that. Kind of like the same way like that just did and the first time around. Yeah, they pushed really hard people adopted. It's like, this is a piece of crap, right? And so I think, with Polymer, we're kind of seeing some of that too. And web component like that, obviously bleeds over on to like web components in general, as people got really burned out really early as like, we were trying this in 2013 is like, this is not ready and just like never wanted to try 100%?

</p>
<p><strong>Stacy London</strong><br />
Like, yeah, Google's like, I'm not we're not doing that anymore. Yeah, polymer, drop it. Like, that's what I worry about with Google. So that's why I'm like, a little bit standoffish with like adopting stuff that they push.

</p>
<p><strong>Trey Shugart</strong><br />
Yeah, that well, they pushed, but components with polar. So people conflated the two, quite

</p>
<p><strong>Brian Holt</strong><br />
easily to kind of do to be honest.

</p>
<p><strong>Jem Young</strong><br />
Yeah. Yeah. Remember? I mean, this isn't like Google hate our but yeah, I remember dark. And I tried to put the Dart compiler into Chrome. Remember how that went? They're still putting Dart but

</p>
<p><strong>Brian Holt</strong><br />
yeah, I don't know. I knew that projects. Jas pin, oil pan, oil pan project oil pan was the name of that project, to put the Dart VM next to the JavaScript VM? Yeah, no, it crashed and burned. Like a flash.

</p>
<p><strong>Trey Shugart</strong><br />
It's probably a good thing. I know a couple people, I think, like Dart one person.

</p>
<p><strong>Stacy London</strong><br />
Guy, show the dark episode. That's the

</p>
<p><strong>Jem Young</strong><br />
third episode. I've heard. It's a great language. But you just got to go about the right way. You know, you can't force people

</p>
<p><strong>Trey Shugart</strong><br />
to come what you're saying earlier, Stacy about education. That's an awesome point. And I think that's what everybody needs to do. Something that has come up in some Twitter discussions is, I think that what I try and educate about it's like the abstraction layer, it's like, this can allow you to build something and maybe your framework of choice, but then you can distribute it to something else. But a lot of times I get back, well, I've never heard anybody who needs that. That's like, well, we kind of need it. But do we think about it, we'll do we will be really nice? Well, we kind of do. I don't, it's more of like a really nice to have, I think at this point, but I think is as we go along, and it becomes easier. It'll just become natural. But one thing there too, is that if we want to have these communities kind of converge, and not throwing shade all the time as we need to have empathy. It's like, number one thing.

</p>
<p><strong>Stacy London</strong><br />
Cheers to that. Cheers.

</p>
<p><strong>Brian Holt</strong><br />
That's it throw more shade. General shaming kind of pushes the community for

</p>
<p><strong>Stacy London</strong><br />
maybe pushes people in the shadows, it

</p>
<p><strong>Trey Shugart</strong><br />
makes people the Shadow DOM angry. And sometimes when you're angry or motivated, you can do things

</p>
<p><strong>Jem Young</strong><br />
you and I are gonna be best friends like apps, you believe in empathy and fast and fast and

</p>
<p><strong>Trey Shugart</strong><br />
like free food. Okay.

</p>
<p><strong>Jem Young</strong><br />
Wait, yeah. What's your stance on Fast and Furious movies?

</p>
<p><strong>Trey Shugart</strong><br />
I've never seen him. Oh, like I had a friend who used to call me a little Vin. And I used to own a muscle car too. So

</p>
<p><strong>Jem Young</strong><br />
yeah, you're okay. Still, we're not like like marathon? All eight of them?

</p>
<p><strong>Trey Shugart</strong><br />
Are they on Netflix?

</p>
<p><strong>Jem Young</strong><br />
Yes, some of them. Right. So at the end of every episode, we'd like to do pics of things. We'd like things that are interesting things we hate, or just things we just ran into during the week that you thought you'd share with the global audience. Brian Holt, how about you go first.

</p>
<p><strong>Brian Holt</strong><br />
My first pick of things I hate is Ryan anklam. He's going in and changing my picks. My first pick of things I like is flow type, which I actually had picked. Before all of you assholes talked about it. Honestly, like I don't really care about TypeScript versus flow. Like To be honest, the like, the differences are pretty small, particular for my use case, like I don't really actually explore many of the advanced use cases of either one. So just enough of like, it just interprets my code and tells me where I have type mismatches. Like that's 90% of the WinForm. Yeah, so whether that's TypeScript or flow, I actually just prefer the flow community, which is why I kind of side on the soda. I fall on the side of flow. And also to Trey's point earlier, I think it's a little bit easier to incrementally introduce, since it's opt in by nature, per file. My second pick is Babel preset M, which is a babel preset. It's kind of the name captured there. But what's cool about it is a lot of people use something like the Babel preset 20 es 2015, or latest or one of those. And what's cool about em Viv, it's kind of a sliding target. So you just say support the last two browsers, and it's just gonna slide that along. So every time that you compile, it's just going to support support the last two major revisions and you can also say, you know, I support Chrome 53 and above and we'll also transport for that so it kind of is more flexible that way. So I would encourage you if you're using something like the es 2015, or latest to switch to M That's kind of what the battle team is pushing as well.

</p>
<p><strong>Jem Young</strong><br />
And quick shout out to Henry Zhu, who's the main person on babble for at least presets. And I remember talking to him last year in New York. And he's like, Jem, I've got this wild idea. Why can't I do a preset environment that you only support? Like X browsers? I was like, That's a great idea. And then the fact that it's out now is just amazing. And he's he works really hard. And I know he's always looking for contributors. So yep, follow him on Twitter. Henry Zhu. Zi, he, I believe, yeah, it's

</p>
<p><strong>Brian Holt</strong><br />
a Left Pad left.

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah. At left underscore pad is very good. Sorry. Good.

</p>
<p><strong>Brian Holt</strong><br />
No. Yeah, it's it's super cool. Super convenient. And my last pick, because of the country that we live in, is I think you all should donate to Planned Parenthood.

</p>
<p><strong>Stacy London</strong><br />
Cheers.

</p>
<p><strong>Jem Young</strong><br />
Cheers to that. Yep. Stacy,

</p>
<p><strong>Stacy London</strong><br />
so I've got two picks, this time. First one's music. Peck is Broken Social scene's halfway home. They have not put out anything in a long time. And it was really exciting to see them put out a new song. And it's super awesome. Let's it headphone I listened to it on repeat is how much I like it. I saw them at a festival in Toronto called field trip. That was really great. So yeah, super excited about that. Second pick is it's a visual representation of paths that you can go down if you want to become a web developer. It's called Web Developer roadmap by comrade Ahmed. And a hat tip to my friend, fellow front end Dev, Katie Gruntal, who sent me that link. I think it's really nice if you're just starting to get into web development, understand what the layers are, because it gives you like, if you want to be a front end web developer, here's some tech and things that you might want to know if you want to be like maybe more of a back end developer supporting web apps, here's what you might need to know or DevOps. And it's one of the best, like, visual representations I've seen of, of what you might need to know to do those things. So I thought that was pretty cool. So the links will be in the show notes.

</p>
<p><strong>Jem Young</strong><br />
Cool. Right.

</p>
<p><strong>Ryan Anklam</strong><br />
My first pick is a book called Ancillary Justice sci fi novel. And it's just really mind bending. It's one of those ones that if to read some parts of it two or three times actually make sure you know what's going on. But it starts off a little slow, but it ends up being a really, really good book in the end. My second pick is the Spotify Discover Weekly playlist. Nothing too earth shattering here, but I've actually found a lot of my current favorite songs from that playlist. My third pick is fuck you. Ryan hold the bed in

</p>
<p><strong>Jem Young</strong><br />
there. Oh, plus one, the Spotify Discover Weekly playlist

</p>
<p><strong>Brian Holt</strong><br />
listened or looked at release radar.

</p>
<p><strong>Stacy London</strong><br />
Yeah, release radar is super good, too. Yeah. So

</p>
<p><strong>Brian Holt</strong><br />
they pick they also using that same or similar algorithm will pick things that have come out that week that will fit into your tastes.

</p>
<p><strong>Jem Young</strong><br />
That's pretty cool. Actually, Stacy, on the web developer roadmap, how many types of web developers are there? I'm curious. Oh,

</p>
<p><strong>Stacy London</strong><br />
like types? Yeah, they just do three kinds of paths like front end, back end and DevOps. They don't specify like, stacks of like, I'm gonna be a React web developer

</p>
<p><strong>Brian Holt</strong><br />
like chaotic neutral.

</p>
<p><strong>Stacy London</strong><br />
Introverted web developer, extroverted web developer.

</p>
<p><strong>Jem Young</strong><br />
That's interesting, actually. Yeah, I think that's why we're no longer UI engineers, or software engineers, because we actually don't feel that much UI anymore. I mainly do the back end. But it's interesting. I never thought of different paths anymore.

</p>
<p><strong>Stacy London</strong><br />
I thought, so I thought it was a good diagram, if you want to focus more in the front end layer of like, really, Piper focusing on JavaScript and, and that stuff to be like, if someone let's say, that's the path you want, and maybe you have someone pushing you to be like, You should be more full stack like, Man, I'm not so interested in that to be like, there is a lot to focus on and you can get really master of your craft in that layer. And there's it's a good diagram to show like, there's this much stuff that it takes to kind of be really really good at that layer to maybe help justify why that's interesting to you.

</p>
<p><strong>Jem Young</strong><br />
That's cool, useful to Trey

</p>
<p><strong>Trey Shugart</strong><br />
pics to have a couple pics. So I have to echo the flow thing. I'm just slightly on the flow side, because the incremental adoption and also just for philosophical reason is that TypeScript doesn't follow semver anybody knew already fell? Yeah. But flow is still in 0x releases, right? At least it's semantic. I'm a guitar player. So I just got a line six helix LT floor controller. It's pretty cool. So it allows me to play guitar well on here, because my parents have graciously stored my Les Paul here for 10 years. Thank you to Matthew and Alex and Martin for helping maintain skate. Thank you Jason for building Preact because we're starting to use it that's where Cool. Yeah, really excited for progressive web apps.

</p>
<p><strong>Jem Young</strong><br />
Oh, just to point out in case people missed the references, try you actually live in Australia, right?

</p>
<p><strong>Trey Shugart</strong><br />
I do. Sydney. Nice. But I'm from Santa Cruz, California.

</p>
<p><strong>Jem Young</strong><br />
My first pick is actually my DeskMate. Ryan anklam. Who, thankfully, he I know we hate on him all the time. But thankfully, he covers a lot of UI work so I could do the backend work, and I appreciate that. I really do. You're welcome. To see it. I will not choose that. Oh, and that's okay. My second pick is the wee baby Burgess Austen Ryan Burgess was born on Sunday. Ironically, Ryan will see fast and furious with me, but he could not because his wife was in labor priorities. Yeah. And I texted him a lot angry text, but that's okay. So he's my pick. He's gonna be adorable. I know it. My second pick is not Ironfist because it's, it's terrible. I'm gonna say it's a Netflix show. It is the worst Marvel show. We've created if you want a better show with a lead star that actually knows martial arts. I'd watch Into the Badlands, which is on FX. And he's a much better show. Oh, man, I have so many

</p>
<p><strong>Ryan Anklam</strong><br />
things but Into the Badlands. It's much better.

</p>
<p><strong>Jem Young</strong><br />
Like I I know Brian has differing opinions, but I don't know why they cast him as the main forgot his name. But Danny Rand. Yeah, it was, huh. I think just like the Get down, it's down an iron fist or like bear for me, at the bottom, my Netflix list. And on that note, we're thank you all for listening. Be sure to like us on Facebook and follow us on Twitter at front end. Ah, we want to go around the room and give your Twitter handles where people can send you hate mail. breinholt When we go first.

</p>
<p><strong>Brian Holt</strong><br />
I guess if you're gonna send me hate mail, please send it to at Jem Young

</p>
<p><strong>Jem Young</strong><br />
that's fine. That's it.

</p>
<p><strong>Stacy London</strong><br />
It's Stacey Londoner on Twitter, but please don't send hate mail. I love all my people on this show. I don't want hate mail.

</p>
<p><strong>Brian Holt</strong><br />
Just send it to me all right.

</p>
<p><strong>Ryan Anklam</strong><br />
I am bittersweet Ryan and send me all the hate mail cuz publicity is always good. So just destroy me on twitter if you'd like.

</p>
<p><strong>Trey Shugart</strong><br />
My name is Trey. My Twitter handle is at JMY Oh you kidding. Tre sh UGA RT

</p>
<p><strong>Jem Young</strong><br />
awesome and I am at Jem Yong. You could send me all the middle finger and poo emojis you want because I won't read them. Any last words? Good Ending

</p>
`;
        return transcript;
    };