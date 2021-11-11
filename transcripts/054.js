module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of Front End, happy hour, we're joined by our special guest, Richard Feldman to talk with us about the programming language elm. Richard, can you give us a brief introduction of who you are? What you do and what your favorite Happy Hour beverages?


<p><strong>Richard Feldman</strong><br />
Yeah. So I'm Richard, I, what do I do I write code at no red ink. We make software for English teachers. So I mainly stay on the front end, but I guess I've done a little bit of a back end full stack II kind of stuff in my career. And favorite, Happy Hour drink. I'm gonna say whiskey. I'm gonna be non specific as to what kind?

</p>
<p><strong>Ryan Burgess</strong><br />
Is there a favorite brand in there? And for sure enough, yeah, good choice. Before we get started, let's go around and give introductions of today's panelists. Brian, you want to start off?

</p>
<p><strong>Brian Holt</strong><br />
Sure. My name is Brian holds. And I think after today, everyone will know that I have no idea what I'm talking about.

</p>
<p><strong>Ryan Burgess</strong><br />
I think they've already figured that out. Yeah.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a front end engineer at Atlassian.

</p>
<p><strong>Augustus Yuan</strong><br />
I'm Augustus here in front end engineer at runout. Also don't know what I'll probably be talking about.

</p>
<p><strong>Stacy London</strong><br />
Same.

</p>
<p><strong>Ryan Burgess</strong><br />
Fair enough. I'm the same right then I'm Ryan Burgess. I'm a software engineering manager at Netflix. Before we start each episode of the front end happier podcast we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is compile, compile. So at any point in the episode, if we say the word compile, we will all take a drink just transpile work, but they're a little different. So you'd might you could you can get away with it. But you're probably not saying the right things. So maybe you should drink at that point. Alright, to get started, I would love to hear everyone's kind of definition for our listeners like what is elm? Other than being a programming language? What is elm?

</p>
<p><strong>Brian Holt</strong><br />
You should probably ask Richard that.

</p>
<p><strong>Ryan Burgess</strong><br />
I think Richard knows better.

</p>
<p><strong>Richard Feldman</strong><br />
I have I can answer that. But I'm actually pretty curious to hear other people's answers. First,

</p>
<p><strong>Ryan Burgess</strong><br />
it's been a long time since I've looked at I remember like when elm was first coming out, it's like it's hot new thing. Definitely looked at it. It's a functional programming language. It compiles to tears compiles down to optimize JavaScript, which I did say compile.

</p>
<p><strong>Brian Holt</strong><br />
I think you have like a 32nd grace period.

</p>
<p><strong>Augustus Yuan</strong><br />
I think that was a rule. There's lots of spaces compile from what I hear.

</p>
<p><strong>Ryan Burgess</strong><br />
I know Redux got some concepts from elm

</p>
<p><strong>Brian Holt</strong><br />
programming.

</p>
<p><strong>Richard Feldman</strong><br />
And you said you didn't know

</p>
<p><strong>Augustus Yuan</strong><br />
the syntax is a bit weird. Yeah. It's like there's only spaces or

</p>
<p><strong>Brian Holt</strong><br />
significant whitespace thing

</p>
<p><strong>Stacy London</strong><br />
about that only spaces programming.

</p>
<p><strong>Brian Holt</strong><br />
All but it's actually brainfuck.

</p>
<p><strong>Richard Feldman</strong><br />
What we're talking about, so tabs are syntax errors, and l tab characters. Oh, okay.

</p>
<p><strong>Ryan Burgess</strong><br />
So if we have the argument against tabs and spaces,

</p>
<p><strong>Richard Feldman</strong><br />
argument here.

</p>
<p><strong>Brian Holt</strong><br />
I'm gonna write the Elm transpiler.

</p>
<p><strong>Ryan Burgess</strong><br />
Have we come close to Yeah, I

</p>
<p><strong>Richard Feldman</strong><br />
mean, I think I think folks got the gist of it. So for me, from my perspective, the coolest. Okay, this is gonna be an interesting case, the coolest part of ELB is the compiler. Does that count?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah.

</p>
<p><strong>Richard Feldman</strong><br />
So it's known for a couple of things. One is, like really nice error messages. So I've used languages in the past that that you know, have compilers cheers. Perhaps Mistakes were made in choosing this, it's gonna be fine. We'll be fine. So yeah, I mean, I've used like Java, C++, Scala, just a whole bunch of different ones. And, and elms, for me is kind of in a class of its own when it comes to like, it feels like an assistant. That's like a phrase we use as compiler as assistant and definitely, mistakes were made. Yeah, it feels right, the assistant, right. And it feels like kind of having a conversation with the assistant, actually, Brian and I were at a conference, I'm wearing the t shirt by coincidence. You gotta love front end in Tel Aviv. And the talk I gave was basically about just kind of like live coding that experience of just like having a conversation where basically I I just hung out my editor, and I made a feature just by looking at the error message and be like, Oh, I'm gonna change this and I'm gonna know see what it tells me to do next, see what it tells me to do next. And then at the end of it, I hadn't even opened the browser and I got the featured on as soon as I did all compiled Cheers. I opened, I opened up the browser. And sure enough, everything worked. And it was pretty cool. Of course, that was a talk. And I knew it was gonna work because I'd practiced it. But it was based on a real experience I had on a flight where I didn't have an internet connection the entire time. So I actually couldn't open up the browser and every page started with like, an AJAX requests. So there was really no hope, of being able to work in any other way. But I was able to be productive the whole four hours. So yeah, that's that's to me, kind of what makes me stand out. But there's, there's also functional programming aspects to it. It's it's not object oriented. It's it's just straight functional, top to bottom. It's all immutable. It's, it's got a really nice core library. It's got its own package manager. That's actually kind of cool part. Yeah. When I've been talking to people, and they say, like, what do you really like about elm. That's actually kind of the thing that that has turned out to be, like, the biggest thing like these days that people love about it is the ecosystem. So it's got a totally separate ecosystem from NPM. Basically, there was a startup in London that I was talking to, they had like a huge, like 100 personnel meetup there. And, and they said, We didn't switch to Elm because we were unhappy with React or anything, it was that we were unhappy with NPM. And we wanted to, like, just get on this other sort of, you know, elves, basically starting from scratch and saying, Hey, let's just envision how can we make a really nice experience for building front end applications? And let's just run with it. And so it's some cool things about the package manager, it enforces semantic versioning. So how do I say this, the compiler that thing knows about about all of your functions, and all of your dependencies, functions, all that stuff. And so we can say, if I if I publish version, one Dotto of my package, and then I say, I'm going to change this function, I'm gonna delete an argument, I'm going to change it or I'm going to delete the function. And I try to publish that as 1.1. It's gonna say, no, like, that's a breaking change, you have to bump it to two dot O.

</p>
<p><strong>Brian Holt</strong><br />
So we have like, Yeah, that's awesome,

</p>
<p><strong>Augustus Yuan</strong><br />
is actually yeah, that's powerful.

</p>
<p><strong>Ryan Burgess</strong><br />
Like when you're just those little things, that it's just like, No, that's gonna save you from making a huge mistake in the long run. And what's super

</p>
<p><strong>Richard Feldman</strong><br />
cool about it is that because that's enforced across the entire ecosystem, you actually get to say, basically, it does transitive dependency solving and the entire, like, everything is flat. So you don't just get like my dependencies and its dependencies and its dependencies. It's all just like, I'm gonna find versions that work with everything, and it knows that they're all going to, you know, fit together properly. Because essentially, it's, it's sort of guaranteed those ahead of time, just by the way that the semantic versioning is actually enforced. So there's a lot of cool stuff like that, where it's like, you know, JavaScript was famously designed in like, 10 days. And it's sort of like, well, you know, we've been sort of bolting things on ever since it's like, what, okay, now that we know that web applications are a real use case that there's real demand for what can we do with that information as far as designing what the experience feels like? And that's kind of, to me the, like, the the long term promise of element or the exciting stuff about it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. And I'd always heard like, the package system, and package was like, that was the way to go. And that actually explains so much. I didn't realize the versioning and that's, like, so powerful, just that. That's really cool. I

</p>
<p><strong>Stacy London</strong><br />
think the error messaging is what like I saw a presentation at React Rally about elm and just the super helpful error messaging. Yeah, that was that was remember that big differentiator. I was like, you know, instead of like, T is undefined. Right? Right.

</p>
<p><strong>Ryan Burgess</strong><br />
Right. No, they're like, human readable. Like they're they're like, on point telling you exactly what's wrong, you forgot to close this, or whatever it is, it's like that array hasn't been defined,

</p>
<p><strong>Brian Holt</strong><br />
you know, I prefer undefined is not a function.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm assuming an element

</p>
<p><strong>Richard Feldman</strong><br />
is actually I mean, you're right, but but for a different reason, which is that home programs generally don't really crash. We actually we finally had our first runtime exception after like, a long time. And so yeah, I mean, for a long time, we had never actually had a production crash. We have like a quarter million lines of element production now. And so now the score is like it was, we got like, in our hubris, we called a function called debug crash, which if you call it it crashes, so you only use it if you're like, I am sure this code will never get run. I don't want to bother handling this use. And of course, it got run. So we got what we deserved. But so now if I were to draw a graph, like we so we use robar to track crashes. And so now the score is like, you know, l if I were to graph it, it's like elements, like one pixel in JavaScript. It's like 60,000 crashes in like the past three years, you know, so, but elves on the scoreboard now, so we were very sad about

</p>
<p><strong>Ryan Burgess</strong><br />
that. Yeah, you need to have the like, number of days without a crash. And you know, now you have to wait to writing that right. Yeah, there's one I've heard a lot of people rave about is the LM CLI. I've heard that that's like really easy to get a project spinning up. I haven't tried it. So I hear your thoughts

</p>
<p><strong>Richard Feldman</strong><br />
on it. Well, it's. So the cool thing about it is that basically LM, since it's kind of starting from scratch, everything sort of batteries included. So if you're starting a new JavaScript project, you're like, you have all these decisions to make, you're like, Okay, so first of all, am I going to use? You know, just straight JavaScript? Probably not probably gonna use Babel. Okay, on top of that, am I going to use TypeScript or flow or neither? Okay, more choices to make. And then you're like, Okay, well, what I want to use for my UI framework, am I gonna use React Angular view Ember, like, okay, state management? Am I gonna use Redux, I'm gonna use the mob X observables. Whereas an elm it's like, Oh, you just like this element. And that's like, there's no frameworks really like that. Just like it is the HTML library that renders, you know, HTML. It's a virtual DOM library. And that's like, the only way to do it. State Management, there's the Elm architecture, that's the only way to do it. So getting up and running is is it's, it's just almost trivial. I mean, you just, you just sort of are like, Okay, I'm going to set up my own project, say, here are my dependencies. And you just Okay, go.

</p>
<p><strong>Ryan Burgess</strong><br />
That's actually really impressive. Yeah. Even just going through that tree of decisions on like setting up a project. I'm like, yep, every time you set up a new project, it's like, what, what framework am I going to use? What's my build system look like? You know, a couple hours later, you're like, Alright, I'm ready to write some code. And it takes some time.

</p>
<p><strong>Stacy London</strong><br />
Yeah, fully formed tree with, um, oh.

</p>
<p><strong>Ryan Burgess</strong><br />
I've also heard things about the optimizations for performance that it is actually writing more optimized JavaScript. That's all I've really heard. I'd love to kind of hear like, what what does that actually mean? are you actually seeing more performance JavaScript written? Is it just because there's less errors? Or is it actually better for performance?

</p>
<p><strong>Richard Feldman</strong><br />
So there's a lot of really cool optimizations that it can do some of which it currently does, some of which are sort of designed to be unlockable in the future, if that makes sense. So a good example, this is actually okay, so So, Elm has benchmarked quite well, compared to like React and Angular and stuff like that. We haven't read benchmark, since the EO T stuff came out with ember. So they may have pulled ahead with that not sure. But at least like a year or two ago, we used to be ahead of them. But that's actually, it's really comes down to like, how are we able to benchmark faster, it's actually not that the generated JavaScript is made faster than what you can handwrite. But rather that because of the design guarantees of the language, there are certain things that you just don't have to worry about happening. So it's not so much that these optimizations are unavailable in JavaScript, it's that if you did them, you would probably get a bunch of bugs as a result, but you just don't in Elm because the compiler

</p>
<p><strong>Ryan Burgess</strong><br />
could have been a while,

</p>
<p><strong>Richard Feldman</strong><br />
rules them out ahead of time. And so there's just a good example of this. So in like Redux, they'll say don't don't run side effects in your reducers. Or in React, I'll say don't run side effects in your render functions. But elm is just by design, it just you don't have side effects. It has managed effects instead, where you have sort of explicit representations of here, the points where you know, effects can happen, that's cool. And so as a result of that, it's just very safe to say, Oh, we just don't have to call this whole part of the render tree, you can just, there's this little function called lazy, which says, okay, you know, what I was going to do here, just remember what happened last time. And if I give you the same inputs to those functions, just don't even bother calling it again, just take the cached result from the last run, and just use it don't even bother recomputing all that. So we have that as sort of a, it takes the place of like, Should component update and react. Because it's just sort of a general the more powerful alternative to that. And the only reason that's possible is because we know there's a 0% chance there's gonna be any side effects of those functions. It's it's already been ruled out. But in JavaScript, it's more like, well, you know, Pinky swear that you're not going to do it, but if you know, you got one, then it's like, you know, you know, it happens like you get one new person on the team, they don't know that you're doing that optimization somewhere, they write it in it works fine locally, and then in production, you know? So yeah, there's, there's, there's some things that would not be a good idea in JavaScript, but I can get away with them. Because because of its design.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, that makes a lot of sense. Yeah. No, I've always wondered, I'm like, how do we, you know, because you are actually having JavaScript shipped at the end of the day. Sure. Yeah. And so it's like, how does that actually fast? Now, it actually makes a lot of sense. Yeah. Okay.

</p>
<p><strong>Richard Feldman</strong><br />
For now, it's JavaScript, but that's true. Oh, WebAssembly is looking pretty cool.

</p>
<p><strong>Ryan Burgess</strong><br />
talks around that. Is that actually something that we'll see in the future of Elm?

</p>
<p><strong>Richard Feldman</strong><br />
I hope so. Um, I think, you know, it's a there's a certainly, it's being designed so that in the future elm can compile the web assembly. That's like there have been definitely discussions on issues about, hey, if we go this direction with this particular design choice, that's going to would be really hard in a future where we compiled to web assembly. So let's not do that. But having said that, there's also a concern of like, at what point is web assembly something that you can actually ship to your end users? Yep. Yeah. Right. I mean, like, if everybody's on Chrome, Firefox and edge then like, okay, maybe that's fine. Or you know, Safari. But you know, what, if you still got a non trivial amount of IE 11 users? Are you just gonna give them the polyfill? And then, you know, it's gonna be monstrously slow for them, and then fine for everybody else.

</p>
<p><strong>Ryan Burgess</strong><br />
To to Brian's at Microsoft, I mean, like, Yeah, I hear that's the best practice.

</p>
<p><strong>Richard Feldman</strong><br />
Yeah, there's actually so there's a banner that says, deal with it. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
And Brian's face is right beside it. I definitely could see this. Yeah, get that into it as a default.

</p>
<p><strong>Brian Holt</strong><br />
What's windows?

</p>
<p><strong>Ryan Burgess</strong><br />
Love it. But what were some of the disadvantages, or maybe something that wasn't so nice, maybe as you started using elm or didn't like, even still this day don't like,

</p>
<p><strong>Richard Feldman</strong><br />
oh, so I mean, I think getting started was was really nice, actually. But as far as stuff that, like, the main disadvantage is honestly just that the ecosystem is much smaller. I mean, it's really nice. But I mean, JavaScript ecosystem is massive. So I mean, what people end up doing is you have most of like, I would say, we're like a 98% elm shop. But we still do JavaScript interrupt for that last 2%, where it's like, there's this library, JavaScript, and I'm not going to rewrite it now. So do a little bit AirDrop, which is, you know, not ideal, but it's fine. And I would say the other thing is that there's definitely sort of a slow and steady mentality, which is hard to find in the front end world, because everything's kind of breakneck pace. But so Evan chiplet, he's the guy who created element, and he's very much like, Okay, if we don't have a good solution to this, if there's a fork in the road, where we could sort of like rush something out the door? Or we could just say, No, we don't know the answer yet. We're just gonna wait, he chooses option B, pretty much all the time. And on the one hand, that sort of made the language as nice to use as it is, but the other hand in the moment, when you're like, I'm blocked on this, why can't we just have something that's 80% Good enough, then it's frustrating. Then you just, you know, call out to JavaScript, and it's fine. But, but basically, those would be the two things that kind of come to mind, or like, it's point A being sort of like it's much smaller in point being, it's not done yet. And in the cases where it's not done, it's not going to be done in a rush.

</p>
<p><strong>Ryan Burgess</strong><br />
So either it's like you do it, like, you know, fix it, or you can build your own package or something to solve that problem as well.

</p>
<p><strong>Richard Feldman</strong><br />
Oh, yeah, sure. So there's, there's, you know, inevitably you end up doing work around one of the interesting things is that so there's, there's kind of two big ways to do JavaScript interrupt. One is this concept called ports, which is basically you send messages out to JavaScript, and JavaScript sends messages back, which is kind of how you can communicate, we call like JavaScript as a service. So you can communicate back and forth without worrying about the Elm code, sort of inheriting some of the characteristics of the JavaScript code, like side effects being read everywhere. Which is cool. But there's another way, which is, I guess, depending on who's listening to this, they might be very happy. Custom elements, like the web components actually just just work really nicely with Elm. So it's actually really cool. Yeah, so So basically, in the Elm virtual DOM system, you can just say, like, give me a virtual DOM node, I'm just going to tell you what the name is. And then it's like, okay, cool. I'll hook you up with one of those in here. So you register a custom element for whatever, you know, we had a, what was it? We needed a text area that grew and shrunk in particular ways, and we couldn't find a way to do it in pure elm. So we just made a custom element that did that. And then we just like in our elm code, it's like, Okay, give me one of these. And it's like, cool, just works. And that, as far as I know, is maybe the most compelling use case I've heard of for customers so far, because it seems like if you're already using something like React or Angular or something else, that seems like the pitch is not very strong. But for elm, the interrupt pitch is actually pretty nice. So we're we're actually about to start using that in production. We just it's like on its way to QA, I think right now. And we found we did find a way to successfully polyfill it ie 11. case anyone's wondering.

</p>
<p><strong>Ryan Burgess</strong><br />
Supporting ie 11. Yeah, we

</p>
<p><strong>Richard Feldman</strong><br />
do. Yeah, we have a lot. A lot of teachers of older systems,

</p>
<p><strong>Augustus Yuan</strong><br />
like for those who aren't familiar with interrupt, what what is that? Exactly?

</p>
<p><strong>Richard Feldman</strong><br />
Oh, sure. Sure. So yeah, great question. So basically, LM is its own language. It compiles to JavaScript. Cheers.

</p>
<p><strong>Brian Holt</strong><br />
Here's another one.

</p>
<p><strong>Richard Feldman</strong><br />
I think we had we had a strong run early, but it is a completely different language. So you cannot, for example, in the middle of your URL function, say, I want to just call window dot alert. You can't you can't do that. You can't just call arbitrary javascript code. You have to write own code. But sometimes you find that you know what else covers as its you know, as a language right now is not as big as the set of things that JavaScript covers. And sometimes the functionality you need is somewhere in that in between. And so the interop idea is basically just saying, Okay, I need some at this point in my code, I need to go do some JavaScript stuff. And so the Elm has ways multiple ways of doing that in a way that sort of allow it to maintain its guarantees, and the the nice user experience without that sacrificing the ability to get stuff done.

</p>
<p><strong>Stacy London</strong><br />
So like how, like, let's say you want to call an external JavaScript library, and like a particular function, and is it sort of like, if you have like an iframe, and you're doing like cross frame communication, like that kind of thing? Or something like that sandbox?

</p>
<p><strong>Ryan Burgess</strong><br />
Almost. Yeah. That's,

</p>
<p><strong>Richard Feldman</strong><br />
that's a great metaphor. The performance is better than than indication. But But yeah, I mean, conceptually, it's, it's kind of like a pub sub system, you're like sending a good thing of events. But just like, you know, on Elm side, you say, Okay, I want to listen for these things coming in from JavaScript. And I can sit broadcast these things out, and the JavaScript can do the same thing. So they just send messages back and forth between the two. And using that they can sort of communicate and say like, Hey, do this, and then tell me what happened. It's like, Alright, cool. I got this back. Alright, I'll pick up where you left off and so forth.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Very cool. Yeah, that actually makes a lot of sense to putting into the iframe, like, Yeah,

</p>
<p><strong>Richard Feldman</strong><br />
great. I haven't heard anyone come up with a great metaphor.

</p>
<p><strong>Ryan Burgess</strong><br />
Would there be any reason, like we talked about, you know, not actually needing a framework? And typically, in the JavaScript world, we're always looking, okay, what framework should we use? Right? Would there be any reason to take, you know, Ember, Angular, React, and somehow use elm and react together?

</p>
<p><strong>Richard Feldman</strong><br />
So almost always, when people do that? The reason is, because they're sort of incrementally adopting elm, which is exactly what we did. And that's actually the most common success story we hear, there's a couple of sort of surprising things that I wouldn't have guessed. And most people will just kind of assume are the opposite of the way they turn out to be one of which is how to adopt it, like most people think, Okay, this sounds cool. So I'm gonna wait to my next Greenfield project, I'll use elm. And that turns out, almost nobody succeeds at doing it that way. Almost everybody who succeeds, does it the other way, which is to say, I'm just going to take my existing project to go home today. And I'm just going to say, I'm just going to get a tiny bit of Elam into one page into production, and then just see what SEO goes. And the reason that that's so much more successful is it's, it's all about risk. So the Greenfield projects, like, Okay, we're gonna take this new project, we're gonna bet it all on ELB. None of us are ELB experts yet. And if the project doesn't go, well, well, we're, we were over committed and we're, you know, everything falls apart. Whereas the incremental approach, like Okay, so we're gonna take like a week and and just like get get this incorporate into our build system, figure out how we're gonna deploy it, just do a little bit interrupt to you know, Elvas a service, just put one thing on one page, and get it into production and see if we like it. And if we don't like it, then we can just throw it away, and go back to what we were doing before. super low risk. And then once you get it in there, you're like, okay, cool. So like, how big of a step is it from here to expand it and you do a little bit more also really low risk. And so every step of the way, you can always back out. And so lots of companies have had good success doing that. Whereas it's, it seems like that's not our intuition. As programmers, it seems like the Greenfield thing is the way to go. So that's usually what you see with like elm and react coexisting is like you have a React code base, you want to get a little bit elm going. And so you end up with a hybrid code base as your, you know, kind of trying it out,

</p>
<p><strong>Ryan Burgess</strong><br />
which I do like, because I think that's always the hard thing is when you want to migrate to a new code base, it's not easy. It's right. How do you do that? And then typically, is the like, Greenfield project, you're like, well, we'll try it and test it out here. And then you can apply it, but that and it takes so long to apply it to the code that I like that you can actually work on that incrementally, which is very, very cool.

</p>
<p><strong>Richard Feldman</strong><br />
Yeah, for sure. Actually, the way we got started, it wasn't even elm rendering anything. It was just we had a big hairy pile of business logic that was on the front end. And it was really hard to refactor and work with and elements pretty awesome for refactoring. So like, Okay, we'll just take this thing that we've been having trouble maintaining, rewrite it in Elm, and then it'll be easier to maintain from now on. And even if the rest of the project never goes anywhere, at least that one thing will be nicer from now on. And that worked out. Well. We expanded from there and there and now we're, you know, 250,000 lines of code.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, like you've definitely grown a lot in that area.

</p>
<p><strong>Richard Feldman</strong><br />
Yeah, for sure.

</p>
<p><strong>Ryan Burgess</strong><br />
Do you know of other companies that are using this on a regular basis, assuming that I've actually seen a few lists of them, but what are the ones that are notable that are leveraging so

</p>
<p><strong>Richard Feldman</strong><br />
I don't think like the companies that are using l tend to be really big names. I think like I mean, Carfax is like a big name, but I don't think they're using it a ton. They're not like the companies that are using it sort of whole hog. Like this is our front end. We are an LM shop. Yeah. are probably names that you haven't heard of, or consulting companies. But I think the bigger companies that are doing it like Carfax Zendesk has a little bit Netlify has a little bit, but they're not like, you know, if you go to their main product page, it's not elm. They're, they're still like in the kind of early stage,

</p>
<p><strong>Ryan Burgess</strong><br />
they're learning to love it. And they're like, to fully move this in,

</p>
<p><strong>Richard Feldman</strong><br />
I think it's, it's more, usually the, the way that you see elm get adopted is you have a champion, like somebody is really hype about it, and they're like, I want to, I want to get this going. And then they'll kind of get the ball rolling. And depending on the size of the company, usually the champion is not somebody at the top of the chain, like the CTO, it's usually somebody who's like just a passionate person who's like, you know, the news and on the weekends and doing personal projects and stuff. So it's, I think, we really haven't seen any, any big companies, you know, 1000 employees, where they, the champion has been somewhat high enough on the on the totem pole to say, yeah, we're just like, we're doing this the whole way. Right? Which actually, even at like, so Facebook, you know, of course, with React, you know, ended up that way. But like, they're, they're really invested in Reason ml, which is also a functional programming language that also compiles cheers to JavaScript, and, and they're doing a lot of cool stuff, too. And they're, they're all They're actually doing the same approach. Because, you know, it's what works. They're, they're, they're doing it on messenger.com only, and they've been porting that, and they've been writing blog posts about their experiences with that. And I think, you know, that that's kind of emblematic of how unusual it would be for any big company to to not use JavaScript as their primary, you know, tool for front end development. It's it's so ingrained, it's, it's got so much like momentum behind it. But it's, it's really cool to see kind of the change, because I remember, like three years ago, I could tell you, I could list all the companies using album production. And every time a new company would say we're using it, we will be like, yeah. And then and then that kind of transitioned into like, oh, who are you? They wrote a blog post, like, oh, yeah, I've been using helm for, you know, like a year like, Who are these people? How do we not know their names? And then now it's like two minute way too many to count. And like, last year at Elm con, I was on stage and I was like, Alright, quick show of hands, how many people are using element work? And like most of the hands went up, but I was like, Well, wait, we're all you know, hundreds of people. They're

</p>
<p><strong>Ryan Burgess</strong><br />
like, Oh, isn't that old?

</p>
<p><strong>Richard Feldman</strong><br />
It's yeah, it's it's it's it's about five years since like, the first line of code was written for it. But it didn't actually you couldn't actually like render, like to the DOM until like three years ago. So it takes

</p>
<p><strong>Ryan Burgess</strong><br />
time to like you said it slow, slow, slow. They take decisions and for sure about think about them before getting in the Yeah,

</p>
<p><strong>Richard Feldman</strong><br />
yeah. I mean, right. It's like two years before you have a virtual DOM library. And like before that you kind of you could like, it was like all Canvas type stuff. Yeah. So most of the demos back then were like games basically. And it only became more of a web application type thing. After after a lot of a lot of work had already gone into that version.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. For people like getting started. I'm sure people are excited to now try elm. What advice would you give for them to get started?

</p>
<p><strong>Richard Feldman</strong><br />
So the website, Elm dash lang.org just has like a guide, you can go through really beginner friendly ELMS. The community is really just beginner friendly. A lot of really nice people. I would definitely start there. I'll give a shameless plug. I've got two resources. Oh, that I have to use as my picks.

</p>
<p><strong>Ryan Burgess</strong><br />
have more room. Yeah.

</p>
<p><strong>Richard Feldman</strong><br />
So I've got two resources that I have. One is a book element action from Manning. It's most of the way done. But you can like read what's out there today for chapter three. And the other is front end masters. Brian's got his front and masters hoodie on repping it I do. It's a great organization, and I have an old course for them. I'm also on doing Ryan Florence's workshop.me. So I got it. Oh, no. Yeah. Good. So if you check that out, depending on where you are geographically, I maybe maybe around in person two

</p>
<p><strong>Ryan Burgess</strong><br />
masters like I mean, Brian has good ones on there. And Jem, who's regular panelist on here he is someone. It's just the two of you, I think honors but yeah, but like lots of our guests have been on there. Yeah. And there's there's always good,

</p>
<p><strong>Richard Feldman</strong><br />
like, that's a great place to go. Yeah, yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Pretty good. Amazing. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
So it's awesome. So now I know. Alright, that's where I need to go to learn. Oh, there you go. Hey, fair

</p>
<p><strong>Stacy London</strong><br />
testing. I was curious about you like unit testing or whatever. Like that's like another one of those what dislike many decisions of tree have? What framework do you pick? What library do you pick? And does that look like without them?

</p>
<p><strong>Richard Feldman</strong><br />
So there's elm test. And that's what everybody uses.

</p>
<p><strong>Ryan Burgess</strong><br />
Does that help? I feel like that would actually be very helpful because everyone's on the same testing framework. And yeah, helps in that way. Yeah, for sure.

</p>
<p><strong>Richard Feldman</strong><br />
And it's also so actually in the maintainer of Elm test, so sorry about that. So it's, yeah, it definitely helps. I mean, testing is important. It's, it's one more thing where just having everybody be on the same page means that the ecosystem rallies around the same thing. So we have, like unit tests for normal, you know, testing a business logic type stuff, then you got fuzz testing. So I don't know if you're anyone ever done property based testing, anything like that, like no big check or jazz check. Oh, really? Okay, cool. So the basic idea is, let's say, a unit test you got, I don't know, some function you're trying to test and you want to just test it with like one input. So you give it like a hard coded string or two, you call the function, you assert the output. So a fuzz tests are, they're also known as property based tests, or quick check type tests or generative tests. The idea is, instead of doing that, you describe, okay, just generate a randomly generated string for me, and I'm going to run this check on it and assert that it's true, and just run that function 100 times with randomly generated inputs, and it should stay true the entire time. So the idea is to hunt for edge cases, right? Like empty string, or like, what if the string is like really small with the string super long? But if it's capital letters, what if it's got emojis in it? Don't just try and find it, right? It's just trying to find bugs that that you wouldn't wouldn't occur to you if you just wrote like the one hard coded tests. And so Alan test I, I've used these before, like I use J. S check before, before elm. And I always, I always had some pain points around that, such as it would generate 100 tests. And then my total number of test counts would go up by like, hundreds every time I included one of these tests will be like, Oh, how many tests Am I running? It's like 7000. And I'm like, Am I really though. And then of course, like the failures would just be really big. And so we really got kind of a really nice system for that where it's, it's baked right in and writing a fuzz test is basically as easy as writing normal tests, you basically, instead of passing a callback that says, I'm going to execute this test, you can give the callback arguments like string one, string two, whatever. And it says, okay, cool, I'm just going to randomly generate strings and pass those in, and you just use them. So it's barely any more work than writing a hard coded test. And then it just runs modern times. And if it fails, it sort of shrinks them down. So it tries to find like, the shortest string that will that will reproduce the failure.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm like, Yeah, I need more of that.

</p>
<p><strong>Richard Feldman</strong><br />
Yeah. And it's just baked right in, like, you don't even have to install a separate library for it. It's just like ships with Elm tests. And then we've got, like HTML tests, so you can test like the actual structure of your DOM, but it doesn't need to spin up like headless Chrome or anything like that. It's just because it's all based on virtual DOM and the way the virtual DOM is designed, you can just say, like, Oh, I'm gonna call my view function, which is like the equivalent of your render function, and just get the result. And you can just run queries on it and say, like, I expect this to be here. And I expect that to be there. I expect this text node to be somewhere in there, and just run checks on it. It's all just using plain data structures in memory. And you know, the tests run super fast. So yeah. Big fan of testing. And we're doing a lot of cool stuff with that.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Yeah, that's actually impressive on itself is a great feature right there.

</p>
<p><strong>Richard Feldman</strong><br />
I could keep going.

</p>
<p><strong>Augustus Yuan</strong><br />
I was kind of curious how, like decisions about how the Elm language get made, like, especially like, so JavaScript has TC 39. Like, do you does that do does the way JavaScript gets like proposals come out? Does that affect the language for LM how to decisions?

</p>
<p><strong>Richard Feldman</strong><br />
Oh, great question. Yeah. Um, so we're just straight BD FL. It's very, like Evan Evan created the language he saw you have to explain what EPFL Yeah, sure. Yeah. I'm just gonna drop these acronyms. Yeah. benevolent dictator for life. I like that. So. Yeah, yeah, I think that that term was first for for Guido van Rossum of Python. I think that was the were the origin of the term. But it's basically the the like, okay, the language creator, this is this is his thing, right? This is like his career. This is his baby. And he's, he's gonna just like, you know, make the decisions. Of course, he gets input from tons and tons of, you know, data points. But at the end of the day, it's not like a vote. I think, you know, maybe there comes a point eventually in the future where that happens. But, you know, for the foreseeable future, at least, that's that's the way it's done. And, you know, there's like pros and cons people debate the various merits but so far, it's been working out really well.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, obviously, it's, it's grown. It's it's working. So yeah, continue what's working until you need to change it. As we end the episode. We like to share pics of things we found interesting to share with our listeners. What does everyone have for today's picks? Brian, what do you have?

</p>
<p><strong>Brian Holt</strong><br />
I just actually have one today. It's came out on ps4 like two weeks ago. It's called The Secret of manna. Oh, yeah, yeah, so this is actually a remake of a really old game. Really old Super Nintendo. So it's old to me. I grew up with it playing with my brother. I've been playing it non stop since it came out. It's just really great. It's super nostalgic. And I think it's still a really fun game with a good story and everything like that. So I suggested

</p>
<p><strong>Richard Feldman</strong><br />
the music stuck in

</p>
<p><strong>Ryan Burgess</strong><br />
my head now. Yeah. Nice. The graphics obviously got a lot better, I'm sure a bit. Yeah. All right, Richard, what do you have for us?

</p>
<p><strong>Richard Feldman</strong><br />
I'm gonna go with two, maybe three. Okay, so first one is a book I've been reading. It's called predictably irrational by Dan Ariely. I hope I'm pronouncing that right. But it's basically he's a researcher, and he sort of starts in the premise of standard economics says, Okay, let's assume people are rational, and they behave in certain ways. He says, okay, but actually, people are irrational. And so he's studying. Okay, what are the ways in which people are predictably irrational, ie, in these situations, people will predictably act this other way. Okay, cool. We got I got a hard copy of it, right. So yeah, I'm like halfway through it. So no spoilers. But yeah, it's just totally. Yeah, so far, it's totally fascinating. And just a lot of really interesting results that I would not have guessed are true about people. Second pick, I'm going to give it the talk that I gave called CSS as bytecode. So this is about an elm library, which I did not make, but which is really awesome. And the basic premise of the library is, what happens if you said, Okay, let's not try to like clean up CSS, let's try to say CSS is just our compilation target. We're going to come up with a brand new way to do layout, styling, and just come up with it from scratch. Like, how do we make a nice layout system that works in the browser, and then compile that CSS, and somebody did it. And it's awesome. It's really, really nice. And like, vertically centering things is trivial.


</p>
<p><strong>Ryan Burgess</strong><br />
Like we all know, that is one of the most painful things in CSS.

</p>
<p><strong>Richard Feldman</strong><br />
Yeah. So. So at the talk, I actually like live code like, among other things, vertically centering something in the system. So yeah, if you want to see some of the like, like boundary pushing stuff that's going on in Elm, that's a, that's a cool talk to watch. I'll give one more pick, which is another podcast called elm town, and it's all about elm. They have guests on talking about stuff they're working on or cool projects, stuff like that, and like the history of Elm, and it's a really enjoyable if you're in Elm.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Well, I'm sure all our listeners are now. Stacy, what do you have?

</p>
<p><strong>Stacy London</strong><br />
I have two picks. So yeah, Kubo in the two strings. It's a stop motion. film that is mind blowing. And it especially if you watch some of the behind the scenes about how Google on the two strings was filmed and made, the amount of detail and the attention that went into doing that. So anything was stop motion is very difficult. It's a great story, but also like the behind the scenes stuff is really fascinating to take a look at and that's on Netflix, I think as has that on there right now. Check that out. And then fever Ray has a new album plunge. She was a member of knife, the knife which is like, yeah, fever is great. So it's really exciting to see new album from her. She's definitely pushing artistic boundaries. And it's it's a great album.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool, I guess is pretty cool. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
My first pick is workbox. It's this is basically a collection of libraries for progressive web apps from Google. I started looking more into it. And I think they have some workshops coming from Google IO 18. So that was like pretty cool. So worth checking out. And then this is kind of like a shameless plug. I don't like doing shameless plugs. But yeah, but yeah. Basically been working on this project for like a year and finally released for Evernote. So it's evernote.com/spaces. So it's our new business product. And this is the React version of Evernote. So

</p>
<p><strong>Ryan Burgess</strong><br />
are we fully off of gwit,

</p>
<p><strong>Augustus Yuan</strong><br />
we still maintain the current one. And so unfortunately, for personal users who don't use business, they're going to still be on it. But it's like

</p>
<p><strong>Ryan Burgess</strong><br />
the shops they should buy into. Yeah, they can

</p>
<p><strong>Augustus Yuan</strong><br />
try this free trials, but but we're working on getting it to personal

</p>
<p><strong>Ryan Burgess</strong><br />
very cool. That's awesome. That's exciting.

</p>
<p><strong>Augustus Yuan</strong><br />
Well, thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm sure there's a big overhaul. Oh, yeah. All right. I have two TV shows because I feel like I need more binging in my life. One is actually an Amazon original, which is called absentia. It's like this whole like FBI agent that is like gone missing. They assume she's dead and she comes back like I think it's like five years later six. I can't remember. And it's like a whole crazy story that she was like kidnapped and it's really interesting. I don't want to say too much other than that, and then I'm started a new Netflix Original. I think it came out a week or two ago. called Seven seconds. It's about a murder. So apparently it was kind of well aligned. But yeah, it's so far I've not done that one yet. But it's been really interesting. So I recommend both of them. Before we end the episode. I want to thank Richard, for joining us. Thank you for coming on and telling us all about Helm. I feel like I know so much more. Yeah. Where can people get in touch with you?

</p>
<p><strong>Richard Feldman</strong><br />
On Twitter at Artie Feldman, also on the Elbe Slack? So it's ELB Lang dot Heroku app.com to get auto invite to Slack and RG Feldman on there too.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Before we end the episode, let's also grounding working everyone get in touch with the panelists. Brian?

</p>
<p><strong>Brian Holt</strong><br />
I prefer handwritten letters

</p>
<p><strong>Ryan Burgess</strong><br />
to give your mailing address No.

</p>
<p><strong>Brian Holt</strong><br />
It's at hold BT on Twitter

</p>
<p><strong>Stacy London</strong><br />
Stacy Stacy Londoner on Twitter if you want

</p>
<p><strong>Augustus Yuan</strong><br />
Brian holds mail address just asked me

I'll find it don't worry. But yeah, you can reach me on Twitter at Aug bu RTO OG Berto

</p>
<p><strong>Ryan Burgess</strong><br />
and I'm at <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a> on Twitter. Thank you all for listening today's episode make sure to subscribe to front end Happy Hour podcasts on whatever you listen to your podcast on. And follow us on Twitter at front and knee teach any last words

</p>
<p><strong>Stacy London</strong><br />
compile,

</p>
<p><strong>Augustus Yuan</strong><br />
compile

</p>
`;
        return transcript;
    };