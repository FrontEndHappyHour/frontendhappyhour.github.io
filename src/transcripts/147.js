module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end Happy Hour podcast. In this episode, we're joined by Jen Creighton to talk with us about debugging Asynchronous JavaScript, which is not always the funnest. So I'm excited to learn more. And this episode actually is really cool because it's going to be a little bit of a preview of Jen giving a talk on debugging Asynchronous JavaScript at React Athan, which is happening in person in San Francisco at the start of May the conferences been a great one. I've gone to it a few times throughout the years that it's been around and actually, front end Happy Hour was able to do a panel live panel discussion a few years ago when we before the pandemic that was a lot of fun, too. But yeah, Jen, can you give a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?

</p>
<p><strong>Jenn Creighton</strong><br />
Yes, I would love to. So Hello, Hi, I'm Jen with two ends, very important. I currently work at Netflix where I'm on the no Jas platform team and I previously worked at Apollo on Apollo client. I've been in the front end space for a very, very long time. Um, and you know, mostly what I do is Java Script and giving a lot of talks, which I am so excited to be going back to in person talks, I have not been getting my needs met in terms of being on stage and getting to talk to people and then having people come talk to me after conferences. Those are my favorite parts of this. So I'm super excited about that. And if you ever want to buy me a drink, I am a margarita kind of gal. And particularly with Mezcal instead

</p>
<p><strong>Ryan Burgess</strong><br />
of nice. So a little more smoky. Have a taste. Yeah.

</p>
<p><strong>Jenn Creighton</strong><br />
I love the smoke of mezcal, same here.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm definitely like I like margaritas. And Mezcal is definitely a favorite. have also been liking some of them when they infuse it with like jalapenos or like wool. Now we got even a little extra kick.

</p>
<p><strong>Jenn Creighton</strong><br />
I can't do that. I'm not good with spice.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, that's fair. So it's a smoke, no spice. I like that. Yes,

</p>
<p><strong>Jenn Creighton</strong><br />
No spice. I always tell them to like remove jalapenos or not to use the jalapeno infused. But the smoke is good.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And the in person. I'm very much the same Gen like it's the been on stage nerve racking. And it's like you get the talk done. And it feels so good. But then it's also the people talking to you after we're like, Oh, good. People are actually got some insight into this. But the online talks, you kind of just walk away and you're like, I don't know, it was like good. I don't know. Sometimes you don't

</p>
<p><strong>Jenn Creighton</strong><br />
even walk away sometimes. I mean, lately, you pre record your talk for an online true. So you don't even like it just run some time at some point. And you're like, I hope it went well. I hope people got something out of it. But you do. You don't get the feedback. Also, you do not get to hear people laugh at your jokes, which is for me, like the worst part. I I need to know that I'm funny.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, you need the feedback. Or you're like, yeah, it could have been the funniest joke, but like, you don't even know if it lands and sometimes they don't land on stage. It's awkward, but you kind of roll through it. But yes, yeah. In person is where it's at. It gives you more energy to give a talk. So it really does. I'm pretty sure Jem and I both can attest to that. Before we dive in. Let's give introductions of today's panelists. Jemmy want to start it off Jem Young engineering manager at Netflix. And I'm Ryan Burgess. I'm an engineering manager at Netflix as well. So three Netflix folks talking about Asynchronous JavaScript. I'm excited. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will take a drink. What did we decide today's keyword is browser browser. All right. So if we say the word browser from now on, we'll take a drink. Let's maybe start like we've kind of got on this little bit of a conference talk. I would love to maybe hear what all does your talk cover at React Athan, what should people expect from the talk?

</p>
<p><strong>Jenn Creighton</strong><br />
So what they should expect is that we're gonna be talking about why async bugs are so difficult in the first place, why they kind of drive us to madness, I've definitely felt like throwing my laptop out a window. And the hardest bugs that I've ever had to solve have been of an async nature, we're going to talk about a lot of common missteps that lead to those bugs. Because one of the major themes of this entire talk is your best way to debug something is to know it well. That's your best way. That's the best thing that you can possibly do to debug anything is know what you're talking like, know what you're working with really well. So if we look at the common missteps, you know, you can start to get a sense of when these types of bugs are happening in your code. You'll be a little bit better with that. And then finally, we're going to look at what it looks like to use the debugger or the Chrome Developer Tools debugger to actually step Through asynchronous code, that's one of my favorite ways to debug async code.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. I mean, I love how that's painting the picture really well. I'm excited to see the talk, and I'm sure others are, let's maybe dive into my thought on it, too is like, asynchronous JavaScript is hard to debug. Why is it particularly hard?

</p>
<p><strong>Jenn Creighton</strong><br />
Well, because a lot of times, nothing happens. That's like, nothing happens, you don't see what's actually happening, because it's async. So your failures are sometimes quiet data that you think you're getting, you're not getting, but there's no errors. It's not synchronous in that way, so it's not going to fail for you in the same ways. That's one of the big reasons that it is so difficult. And one of the things that I always come up against is when I didn't know something was async. And there's a silent failure, and then you have to figure out that it was async the whole time. And that's why it was silent.

</p>
<p><strong>Jem Young</strong><br />
I'm picturing Jared with like, you know, the Scooby Doo mask, like lift off the hood. The whole time.

</p>
<p><strong>Ryan Burgess</strong><br />
I first was like, Where are you headed with that gem? But I'm like, that is actually amazing way to describe it. It's front

</p>
<p><strong>Jem Young</strong><br />
of half error. You never know where we're gonna go. No, it's true. Jen, can I ask, do you think async has always been hard? Or is it because async await kind of obfuscates a little bit of the logic away. And it makes it harder for people to reason about,

</p>
<p><strong>Jenn Creighton</strong><br />
I think async is difficult in and of itself, right? Just writing async code. Alright. So on one side, we have just like actually writing, writing the damn thing. And async code really messes with your brain's natural inclination that things happen in a certain order. Right. So you have to do this, like shifting of your mind, you know, Galaxy brain kind of shifting, to remind yourself like how async works, how to actually write it. And you'll do that same thing when you're debugging it, which is very, very frustrating. But you hit on a point that is really, really important, which is that we have in JavaScript, a bunch of ways of doing async code, right? We used to be all about callbacks, and then we had callback hell, then we got promises turned out, that's almost that's promise, hell. There's async generators, which also use promises. And now there's async await. And that doesn't even get into like set timeout and event loop. Thinks, right. So there's a bunch of different ways of doing async and JavaScript and keeping in your mind, what happens for which one and what they do and how they're different, is really difficult, and leads to a lot of mistakes, like just easy mistakes to make when you're working with these things. Or not learning them all the way through, like async await is one that like I have struggled with for a long time. Because I didn't sit down and like really learn it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a valid point two, because you're like, I know what I'm using it for, but not necessarily like how it's necessarily working. And so when you're debugging, it is actually really easy that comes in to help you because you're like, Oh, I really understand, like what's happening here? And I think I mean, I've definitely fallen trap to that really like, oh, yeah, like a callback, because you know, it's going to do what it does. But you don't really know how much you need to know about it until you have to debug it. Another thing you mentioned, too, is like, for me has always been a hard one. Whether it even be like those set timeouts. It's the order of operation, right? Like if you're just being able to debug something in the browser cheers. You can set breakpoints right and, and be able to like watch and what's happening. But with asynchronous, it's not that simple. And so that's always like, give it just, it's a little bit of a mind trick.

</p>
<p><strong>Jenn Creighton</strong><br />
Yeah. How much do y'all still rely on console dot log to debug?

</p>
<p><strong>Ryan Burgess</strong><br />
I'll just speak and say I still use it a ton, especially with asynchronous Yes,

</p>
<p><strong>Jenn Creighton</strong><br />
yes. Okay. So sometimes when I talk about this on the Twitter's people say things like, Oh, I know, I shouldn't be using console dot log to debug anymore. I'm like, why not? Why not? It's your first line of defense is your first thing that you get to throw in there. It's not always helpful with async code because the order of operations, right is Yep. But it's always the like, the first step. For me, it's still extremely helpful. For me, when I'm debugging no matter if it's a sink or sink.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah, it is your go to right off the hop. It's simple. And you're right. Like you don't know the synchronous, like, where it's like, okay, this is the order of operation, but you're seeing what's coming or not coming because you haven't said something earlier, Jen, is some of these asynchronous failures are happening silently. And so at least you can try and like get something showing up in the console to tell you what top

</p>
<p><strong>Jenn Creighton</strong><br />
Yeah, and like when you're seeing it show up in the console out of order the order you expect anyway. Yep, they got that. is your first clue that you're running into an async? Bug?

</p>
<p><strong>Jem Young</strong><br />
Oh, that's a good one. That was a good clue. Yeah. And I like I really love that tip Jen on using console. Because I've seen so many people fight their tools and like, Oh, my tools not working. So I can't figure out how to debug. I'm like, well, now you're just adding more work on top of yourself, like, get down to the basics, especially debuggers to be as simple as possible. On that, Jen, can you can you tell us about the debugger keyword? I don't think a lot of people know that that exists. And it's very helpful for debugging a sink sometimes. Yeah,

</p>
<p><strong>Jenn Creighton</strong><br />
I don't always actually use it. But it's available. You can throw debugger into your code, and it will stop the Chrome Developer debugger at that point. And you can continue on in the code, if you would like it's an easy way of doing that. Is there anything else that I'm missing?

</p>
<p><strong>Jem Young</strong><br />
No. It's one of the simpler tools. It works in node two, it works in Chrome, you're like, I want to know when this code gets hit. And I want to stop and inspect. Just throw a debugger with semicolon. And, yeah, the code will stop, your inspector will stop if you have things configured correctly. But yeah, that's a great tip, not not enough people know about that one, I don't know why

</p>
<p><strong>Jenn Creighton</strong><br />
I think it's sort of fallen out of favor, almost like, again, it's this whole, I should be using a complex tool for debugging is sort of where people's mind goes to, like, Chrome Developer Tools, right has a lot of really wonderful things that are gonna help you debug. But all of it was born out of the things that you have to do to debug anyway. It's not like they're, it's like some magic of which you will never understand how to debug something like they're adding something, some magic to it, that's going to suddenly unlock your brain, it's just giving you some more tools. One of the great things about the debugger statement and just using the debugger in general, is that it will kind of change async code to be synchronous, because you can stop the process at any point that you want to stop the process and step through it in a synchronous way. Instead of console dot log were great first tool to use. But once you get to a certain point in debugging, and doesn't really help you with the async sort of thing, you don't have as much insight into like, what's actually going on. So anyway, it's cool to say like, pick the tool that works for you don't like tell yourself, you have to use like all of Chrome developer tools at all times. I have gotten pretty far in my career just using console dot log and debugger. Okay.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I've gotten far using alerts, you know, before.

</p>
<p><strong>Jenn Creighton</strong><br />
Or border color.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, that's still used heavily. And I That's a good one. I think you called out an interesting point to Jen is like, we all get on Twitter and say like, oh, yeah, like, you don't need console dot log. It's like, why, like, Why are we fighting that as an industry? Or are saying those things like it's a helpful tool? Well, you know,

</p>
<p><strong>Jenn Creighton</strong><br />
we, we like to talk about engineering as if it is saving lives in some way. And so it's not this complex system that requires all these tools to do is what we do really hard and is if the if what we do isn't really hard. Why are we being paid so much?

</p>
<p><strong>Ryan Burgess</strong><br />
Also, we're justifying our costs. Okay. All right. That's fair.

</p>
<p><strong>Jenn Creighton</strong><br />
justify our costs and somewhat acting like gatekeepers? Yes. To be honest, right? Yep. Not

</p>
<p><strong>Ryan Burgess</strong><br />
helpful. I do it. Yeah. Not helpful at all.

</p>
<p><strong>Jem Young</strong><br />
Debugging. async is difficult. It can be, are we too reliant on our modern tooling? Like, do people not know? What's going on under the hood? So if like Chrome debugger tools doesn't work, people are like, I have no idea what's going on? Or is that like, our tools are so good, why would you do it like any other way,

</p>
<p><strong>Jenn Creighton</strong><br />
I do feel like people have an over reliance on tools, or like TypeScript got, I can just, I can actually hear the TypeScript reply guys like coming out of the woodwork towards me right now, just from saying that. But when you have an over reliance on that stuff, like you don't get to learn how things actually work under the hood, and the more you don't learn how things work under the hood, you will get yourself into a situation where you cannot move forward. Without that, that tool. So like in the in the TypeScript way, right, in this, as I'm writing this talk, some of the missteps that you would make in async code are solved for you. And I see that with quotation marks around it by TypeScript yelling at you that you haven't done something. Okay? But if you never actually learned why you need to do the thing that TypeScript is yelling at you about is that good for you, as an engineer, and at some point in your life as an engineer, you will be working with non TypeScript code. Like, you will be working with old, like more legacy code at some point JavaScript only code at some point. So did you just make it so you have to use this thing to figure things out? Did you? Did you really do a disservice to yourself with that? I think about this a lot.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I follow on your thoughts. On TypeScript two, I go back and forth. It's a useful, I won't say abstraction over JavaScript, cuz I know people are gonna yell at me for that. But like, it does provide a lot of helpful tip hints. Yeah, my fear is people never move beyond that. It's like when you're starting off, like, yeah, for real use console, or use a Chrome debugger tools, use type scripts, use all these things, when you starting off, but at some point, you want to make the switch to senior, and you need to know what's going on. And if your tooling doesn't work, like you still need to be able to solve it. I'm thinking of my team right now solving an issue with the server. There's no tools, there's no like fancy tools, like when you're trying to track down the note error on the server. But you'd have to go into logs and understand what's happening. So I'm with you, Jen, I think it's just people a lot. I use a tool to understanding how that tool works. We kind of just stopped and that's I won't say surface level, but like the the knowledge doesn't go as deep as it should. And that I see is like a coming problem for more and more people that just don't understand, like, how does asynchronous code work? How does it promise work? Can you write your own promise? Yeah, you don't even know that, like five years, but at a 10 year, JavaScript engineer, yeah, I expect you to be able to code your own promise. I don't think that's unreasonable. No,

</p>
<p><strong>Jenn Creighton</strong><br />
I don't think that's unreasonable at all.

</p>
<p><strong>Ryan Burgess</strong><br />
No. And I think also to that point, Jem is like, it's hard to like, it's hard, because there's so many things that I feel like we've talked about this many episodes, like for front end, especially, it's like, there's so many things to cover, and so many different tools that people I think do fall back on, like relying on that and not going deep, because there's so much to like, scratch across the like high level of oh, I need to know, like all the build tooling, all these tools like that are for debugging, and that people aren't even just taking a step back and saying like, what are those fundamentals, and I think that's where it's can get daunting to is they focus on so many these high, high level things that it's hard to go deep.

</p>
<p><strong>Jenn Creighton</strong><br />
I think also just on the topic of debugging, in general, it is not formally taught, we are not taught good point steps, you take the way that you build intuition about what a bug, like what's gone wrong with a bug. And so you can hit against a wall over and over and over again, because debugging is one of your best ways to learn anything deeply. It really is. And so if you don't know how to even do the debugging steps, well, you your brain, like can't even take the time it needs to learn the thing that you're working with and figure out what's going on. It just gets so overwhelmed and frustrated. That learning is difficult at that stage too.

</p>
<p><strong>Ryan Burgess</strong><br />
Well put, yeah. Like it's just not something that you deal with. It's like, if it's working, that's great. But I think that also comes with experience as you've had to deal with some wild bug that you're like trying to debug and figure out. It's like, that's experience and you start to learn from it by doing

</p>
<p><strong>Jenn Creighton</strong><br />
Yeah, in. So in this talk, I go through a couple of examples that are like very common, like missteps and async code. And I start off by saying, if you see this code, and you don't know why it's a problem, don't worry about that, like this is not a quiz. But if you do, if you know exactly what's gone wrong in this code example, I want you to take some time and think about why you know that. Why do you know that that's the bug that's happening? It's probably because you've written something like this before. You've made this mistake before you've seen this before. Like almost always, it has to do with experience, you've experienced the bug or the thing before and that's why you know, that's why you built that instinctual. Oh, I know exactly what just went wrong here. Great

</p>
<p><strong>Ryan Burgess</strong><br />
point. I love the missteps area too. Like, what are some of the like, common missteps that like because I'm assuming you're coming at it from like, those early coding aspects where it's like, you're not even thinking that you have to debug but it's like the misstep is early on and like, what are some of those things to maybe avoid or think about? Yeah, some

</p>
<p><strong>Jenn Creighton</strong><br />
of the stuff is like, especially with promises and async await like not doing proper try catches. So letting errors be silent. I'm not actually catching them. Sometimes also, when you write a promise, not even properly rejecting the promise. That's a very common mistake. That happens a lot. I found out that all through the hard, hard way

</p>
<p><strong>Ryan Burgess</strong><br />
doing, you learn.

</p>
<p><strong>Jem Young</strong><br />
I would I would watch a talk on proper try catches or at least proper error handling. I've never seen one. I've never heard anybody talk about it. I think it's just the way JavaScript is executed. We don't have to worry so much about try catches. Like when I was writing Java, you obviously wrap everything because you'll crash the server or the compiler won't work if you don't catch errors. But JavaScript is so loose it kind of like, yeah, bro, you do whatever you want to do, like I'll run pretty much, it just won't run the way you expect that we end up in these weird states. That's why I think your talk is gonna be particularly good. Because like async aside, thinking about like, how a senior engineer like yourself, walks through solving problems is really important because that I think that reasoning, we're getting all of your years of experience and knowledge and hard, hard fought and distilling it down into, like, some concrete steps are probably the most helpful things for new people to advance their career. I think, rather than you spending hours on your own, like making these common mistakes that we've all made, like, listen to somebody and learn, and figure out like, what their thought processes and try to adapt some of them.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, we mentioned some of the tools a bit, you know, and I'm even happy to hear that, like console log is a tool, still Chrome Dev Tools, obviously, that's a big one, are there like other tools that are specific to debugging Asynchronous JavaScript? Well, I

</p>
<p><strong>Jenn Creighton</strong><br />
don't have as much experience, but I do know that there's this whole new sort of range of tools that are coming out that are to help you not just debug code, whether it's sync or asynchronous. But to give you a better like lay of the land of like an architecture. Like a code base, for instance. Cozzi is one really interesting company. They're working on tools that are like a really souped up Chrome Developer Tools, and will give you sort of everything you need to like start to get up to speed and a code base quicker. So that's like a whole new range. I think replay.io is like another one that they're working on, like very specific debugging tools. So not necessarily just for async. But just like debugging tools. So it's actually becoming more and more of a thing that there are these like, companies, they're spinning up to solve debugging problems,

</p>
<p><strong>Ryan Burgess</strong><br />
which is interesting in itself, like all of what we've all just said is that it's like it is a hard problem set and an important problem, problem set as engineers like needing to know how to do that. But it it obviously, is a big deal, when you have companies spinning up and building models around that as their business like that kind of tells you something right there.

</p>
<p><strong>Jenn Creighton</strong><br />
Right? I know, we started this off by saying like console dot log is perfectly fine. And yet their company is like building entire tools. But there's a difference between something in your like day to day work in a codebase that you know, somewhat well or you're getting used to, versus a huge system that you don't know how any of the pieces interact. Like they're like console dot log, and even the debugger aren't going to help you that

</p>
<p><strong>Ryan Burgess</strong><br />
much. That's a good point. Like they're building things like all around, like you mentioned, code. See, it's like it's not just for debugging, it's it's trying to point you especially a large code base, or an ecosystem of code bases and microservices, like at Netflix, it's like it's trying to connect the dots for you. It's like trying to smartly like help you to visualize and see what what are those points? And you know, how are you interacting between these two surfaces? Any other tools that have been like helpful to you, Jen, that you find do you go to, to debug?

</p>
<p><strong>Jenn Creighton</strong><br />
I mean, I just use, I'm pretty old school. And I just use the basics. Man, I use the console dot log, I use the debugger. I use. People don't realize that this is like a debugging. Like, option, but like modifying your code to see what happens, right? Like, you know, that's the thing. That's a real debugging tool is like just modifying your code.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, change it, see if something changes if it doesn't. All right, let's see what else.

</p>
<p><strong>Jenn Creighton</strong><br />
What if I return here, instead of here, what will happen? Like, you know, trying the things out, I use just really the basics. And like, I've gone, I've done pretty well, with just that, for all of my career. Just good good to know that, like we have the solid tools in place for like these types of things, you know?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I mean, I was expecting even just like, I'm like, Well, maybe I'm missing something that there's like these brand new tools that I should know about. And it's like, no, it kind of gets back to like our points that have been brought up in this episode. It's like a lot of those fundamentals, like a lot of it has not changed, but you still have those tools, and they're still great, and you can really leverage them.

</p>
<p><strong>Jenn Creighton</strong><br />
And there's like fun stuff on console that actually I think only in the past like year I was like, Oh, you can do console dot table, or Yes, I didn't use console dot assert like as much as I do now. So I've been using that a lot more console dot I think trace is it for like getting the stack trace. Yep.

</p>
<p><strong>Jem Young</strong><br />
console dot under will dump an object for you. It'll unwrap it and like dump the whole thing. What? Like the object? Consoles got a lot of good stuff in there.

</p>
<p><strong>Jenn Creighton</strong><br />
Oh, man, some good stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, I didn't know about that one. So that's like, that's really powerful. See, like, even that it's like you don't know about all these things. And of course, things keep getting added. Right? And if you're not paying attention, or I think even sometimes you see someone do that, or Jem just mentioned that I'm like, Whoa, that's super handy. Like, I want to leverage that the next time. It's not, I gotta remember that. So thanks, Jem.

</p>
<p><strong>Jem Young</strong><br />
Let's do an episode on all the console methods. And talk about Lou. I don't I've never heard it. But I don't think most people are aware they exist. Yeah. I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
it's like even like, with anything, it's like some of the like properties that exist in like CSS, like, you start to like untwine, like all the different things that are there, and you're like, Whoa, there's a lot there. So it's, it's knowing these things, and knowing they exist is half the battle.

</p>
<p><strong>Jenn Creighton</strong><br />
You can like keep using something for like a really long time and not realize something else has been added for a while. So whenever I have to do something with an array, and I'm like, I'm pretty sure I'm going to use this sometimes I'll just open up the MDN docs though. And like scan the list of available things and be like, is there something that I like am less familiar with that would do this better? Like promise

</p>
<p><strong>Jem Young</strong><br />
not race and promise that all I didn't know about for the longest time? And I was like, What's this is like changing the way I'm thinking about doing promises and executing asynchronous code

</p>
<p><strong>Jenn Creighton</strong><br />
are promised at all settled?

</p>
<p><strong>Jem Young</strong><br />
Oops, I didn't know about that one.

</p>
<p><strong>Ryan Burgess</strong><br />
Me neither. Explain.

</p>
<p><strong>Jenn Creighton</strong><br />
Okay, I actually, we'll have to look up the documentation to make sure I explain it correctly. Because I've actually yet

</p>
<p><strong>Jem Young</strong><br />
we should point out there's, this is Jana Creighton, Senior Software Engineer at Netflix, arguably one of the best engineering companies in the world, in my opinion. It's still googling stuff, because that's totally okay. Nobody knows everything memorize. Or at least I hope you go. Yeah, no,

</p>
<p><strong>Jenn Creighton</strong><br />
it's too much. Okay. So, promise dot all settled will return a promise that resolves, after all of the given promises have either fulfilled or rejected. Whereas promised at all, when there's a rejection, the whole thing fails. Ah,

</p>
<p><strong>Ryan Burgess</strong><br />
so you're getting more insight into exactly what's happening. That's right, Andy,

</p>
<p><strong>Jenn Creighton</strong><br />
one of the problems with promise at all is that you don't always know which one failed, you just know there was a failure, promise that all settled, we'll let you inspect it to decide like which one failed, or if there were several failures,

</p>
<p><strong>Jem Young</strong><br />
learn something new every day. So I can put a bunch of weights in my promise that all settled, and then if one of them fails, it will tell me which one failed?

</p>
<p><strong>Jenn Creighton</strong><br />
Yeah, it'll tell you which one, it'll give you back, the output looks different. So it'll actually give you which ones were fulfilled and which ones were rejected. So you can actually, like, make decisions instead of Oopsie. Something went wrong.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Cuz knowing something. It's like, clearly, something's not working. That's not that helpful. When a console is telling you that right? You're like, yeah, no, I know, something's not working. What?

</p>
<p><strong>Jenn Creighton</strong><br />
Yeah, and it's fine when it's like, I mean, most of the time that we're dealing with asynchronous data, we're dealing with network requests, right? So you can just go look at the network tab and find out usually what's gone wrong. But occasionally, that's not what you're doing. Occasionally, you're actually working with some other asynchronous code that's not calling a network request at all. And then you lose your insight into what's happening.

</p>
<p><strong>Ryan Burgess</strong><br />
So Jan, getting back to maybe your talk to what are your hopes for people will take in your talk, and what are your hopes that they walk away with?

</p>
<p><strong>Jenn Creighton</strong><br />
Oh, I really, one of the big, big goals of the talk is just to start to help people develop those like, it's almost like muscle memory for when bugs have gone wrong. Here's like, the more you can see, here's what it looks like when you've made X mistake, the more likely you can bring that back to your day to day job and be like, Ah, I made that mistake. I can I can see the outcome. I know what I did. So that's really like the overarching goal is I want them to be able to build a little bit of that muscle through this talk. And come away with you know, being able to go back to their jobs and like seeing like, oh, okay, I know I'm a little bit clearer on like, how this works. How to debug this the misstep I made, why it

</p>
<p><strong>Ryan Burgess</strong><br />
matters. I like that. I like that there's like something tangible and I really liked the misstep part that you keep calling out think about is like, hey, there's a problem. Now I have to go debug but you're really approaching is like, get ahead of that problem. And really, I understand these issues before they actually happen. I think that's really, really powerful. So I think that in itself is a great approach. That's been

</p>
<p><strong>Jenn Creighton</strong><br />
how, like the, so I love debugging, I like really love it is probably my favorite part of being a software engineer just in total. But I've met a lot of people that don't like it that much. Sometimes when it's going really well, they feel really good. But sometimes when it's going really bad, you feel really terrible. And the only way I could think of it was like, well, what's the difference between when it's gone badly, and when it's gone? Well, for me, it's usually that I've had some previous experience with this thing. Or I know the thing really, really deeply. So I can be like, Oh, I did a thing. I forgot the await, because you forgot x about this. And so that's what I like, started to mold the the talk around, essentially,

</p>
<p><strong>Jem Young</strong><br />
I like that direction of the talk of just like, I'm not special. I'm not just coder. It's a lot of times you've just seen this problem before. So you look at you're like, oh, it's clearly this. And people are like, well, Jen, holy crap, what an engineer, which is not not at all not true. But there's also an element like I've struggled, and I've seen this. So let's not put people on pedestals too, too quickly. But also like, and correct me if I'm wrong, is there a little bit of a meta talk here where it's just like investing and being in debugging is like one of the more useful things you'll learn rather than trying to memorize like all the every type of type scripts, tooling out there, or other things people might want invest in, like knowing all the frameworks, knowing how to debug is probably one of the better investments you want to make as a more senior engineer,

</p>
<p><strong>Jenn Creighton</strong><br />
that is just overall, like, I think one of my philosophies. As a software engineer, one of the things that I pride myself on is being able to debug nearly anything that I get myself into. Or if I'm really in a corner, getting someone to help me and figuring out I always ask them, I like how did you know that? How did you know that? That was the problem? And then they tell me and then I now know what they know. You're right, though it is meta like I am. I am secret, I secretly always put in something meta into my talks. And you sussed it out too quickly. How dare you?

</p>
<p><strong>Ryan Burgess</strong><br />
I love it. Like, as we jump into pics, I always find it helpful to leave our audience with like a really key thing to take away. I feel like there's tons of gold in this episode already. But for each of you, if someone's dealing with asynchronous code, and they're having to debug it, what's one really key takeaway that you would want to provide our listeners with,

</p>
<p><strong>Jenn Creighton</strong><br />
if you're debugging something, and you're really if it's a thing, and you're hitting a wall, whether it's promises or async, await or something else? Go a few steps back, go a few steps back and be like, do I actually know this thing? Really well? Have I misunderstood what's going on here? And start to like, dig into how that thing actually works? And then come back,

</p>
<p><strong>Jem Young</strong><br />
you know, my coding skills has gone down since I became a manager.

</p>
<p><strong>Ryan Burgess</strong><br />
What does that say about mine? Man? It's worse.

</p>
<p><strong>Jenn Creighton</strong><br />
That's what the managers always say this too.

</p>
<p><strong>Jem Young</strong><br />
It's true.

</p>
<p><strong>Jenn Creighton</strong><br />
You just you've been a manager for how long?

</p>
<p><strong>Jem Young</strong><br />
Almost a year now, coming up soon, oh, skill just dropped off a cliff. I'm all fall under Jen's advice, which is like, make sure you understand actually what's happening. Because chances are you don't and that's where the issue is coming in. The other one is still debugger bad. It's so great. It works in browser and node, just throw it in there. If the code doesn't stop at a particular area, then you know, like your, the code is not executing in the flow that you think. So you need to step back and like find that point where it is executing. And also, yeah, console dot log is still awesome. I still use it. You can't beat it. It will always work in no matter what environment

</p>
<p><strong>Ryan Burgess</strong><br />
you're in which I thank you both made me feel better as a manager, like I was like, expecting that we've moved past console dot log. I've been a manager for too many years that I'm like, Yeah, I still code like not as much as I ever had as an engineer. But I do from time to time. And like that's still my go to just maybe it's also because I didn't have time to go learn something new. But I'm really happy to hear that that's still a thing. I think another point to maybe call out and we did talk about this in the episode, but don't rely so much on the tools. You talked about TypeScript and TypeScript. We've talked about this many times for various episodes, but I think a lot of people think TypeScript is going to solve the world it's going to make there's no there's no bugs anymore. That's not true. There's still going to be bugs. It's hopefully catching some of those so that you don't have to deal with them. but it doesn't solve everything. And so I think that's always something to call out is like these are just tools. But at the end of the day, there's still going to be bugs, there's still things that you need to deal with. And you just can't rely on that right tests. That's an important one. And also I'll call it gems go to is comments, comments are still helpful, especially during debugging, you might run into an error, like a week or two from now that you wrote code. And you're like, What was I thinking? Write a comment. It really goes a long way. All right. Well, in each episode of the front end, Happy Hour podcast, we like to share pics of things that we found interesting with all of you. And, Jem, do you want to start it off?

</p>
<p><strong>Jem Young</strong><br />
Yeah. Today I have two picks. The first one is slightly more controversial in a different direction, during the horrible war in Ukraine that is still ongoing. It it's about the coverage of it was very different from other conflicts that I've seen. And I was like, this is weird. This is this is terrible, obviously. But like, why is the media coverage so different this time around. And I came across this article by Ishmael and Daro in the nation, called Media malpractice and information war in Ukraine. It's all about the way people are portraying what's happening, and how it's different from say, a conflict in Africa or a conflict in Syria. And it really bothered me because like, there's like, a lot of latent racism in the undertones and how they're covering it. There's been journalists who say, Oh, no, this isn't some third world, backwards country, they had cars and Instagram and internet, which other countries do too. But like, you rarely get to see kind of the world's, I don't know a better way to put it in, like prejudice and racism and full display, then how you describe the victims of Ukraine versus the victims of any other war. And I'm not calling us out to say like, we're putting too much just like, let's be cognizant of that. And like, let's take a moment now to reflect on why this is being treated differently than other conflicts. Why is it that Europe open borders more readily for this one than other other places in the world, like people are suffering all over? Let's treat people equitably. And again, I can't stress enough. I'm not saying don't treat people of Ukraine differently. I'm saying, let's treat everybody on the same level. And like, Let's view it in the same lens. And there's been a few journalists who have called this out about how how differently, this has been perceived, versus like, say, the Syrian conflict from a few years ago, or any genocide going on in Africa at any given point, or a conflict in India or something like that? I don't know. I think these times are a great place to reflect. And just think about how we view the world. Why do we care more about these people than other people? Just it was just something that's been weighing on me as I've been watching this coverage for the past few weeks. My second pick a bit more lighthearted. I don't have any Valley silicon pics because inflation is in full force. Government says that 8% It's likely much higher than that. And I know I feel it when I go to a grocery store right now. Just it's painful cost me well over $100 fill up my car the other day. Yeah, you can ask me on Twitter for not traveling electric, whatever, I'll deal with it. So it all this I'm looking and I was like, you know, I can't actually Valley silicon, anything. I can't call out particularly expensive technology, because I don't know what's particularly expensive anymore due to inflation, Chip shortages, etc. So I had to take a pause on that until I find some like really egregious stuff. So instead of my normal Valley silicon pick, my second one is a Netflix TV show. It is in season four. It's called drive to survive. It is all covering the most recent season of Formula One which I've really gotten into almost everybody I've told about it has gotten into it. It's just like I said, it's the most expensive drama in the world, where you have 20 of the world's greatest racing drivers with in the most expensive sport in the world all duking it out, where they settle things on the track it I really can't say enough how great Formula One is, and how drive to survive has like revived our interest in it. So drive survived season four now streaming on Netflix, can't recommend it enough. And the f1 Formula One season starts soon that sounds evidence comes out. The race will already be over. Those are my picks.

</p>
<p><strong>Ryan Burgess</strong><br />
All right on January have for us.

</p>
<p><strong>Jenn Creighton</strong><br />
I've liked a lot of people during the pandemic gotten into plants. Now not to the level that some people have. Okay, because I have unfortunately, a cat and he loves to eat. Yep. So I'm not allowed to have that many also some of them are poisonous, but one thing of the plants that I am very, very in to his ferns, we just discovered that like, I love ferns, I think they're really beautiful. Admittedly, they're also finicky though. So if you're getting a fern and you you want a good Fern to get, may I please recommend to you a Blue Star fern. They're one of the easier ferns to take care of. They're really pretty, they have these gorgeous like kind of bluish green leaves. I got my first one earlier this year, it is like my favorite of my little plant, little family. So Bluestar ferns, easier to take care of 1010 do recommend. And I have been really enjoying. As I've gotten back to New York, the weather has gotten a little bit nicer the case numbers have gone down for COVID, I have been going out into the world a bit more forgot how much I enjoy that. And one of the things I've been doing is going back to my regular yoga sessions. So just want to encourage that if you have never tried yoga, it has a lot of benefits, it has really helped me a lot with my anxiety. It's super calming. It really gives me like some time and space to myself, I actually got certified as a yoga instructor during the pandemic, because I loved it so much. And if you've never given a try, this is your call to do so.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that. You know, I will agree. I think yoga is a great it's one that I've like I have tried and done. It's hard to do like regularly or you need to get into that. And it's like, but it has so many benefits. It's not just like a workout. I mean, it is good. It's a hard workout. But I love physical workout. Yes, it is.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I was gonna ask her like dad yoga. So I feel like I want to get into yoga. I know it's good for me. But I already know I'm like the least flexible person in the world. And I don't I don't want to be embarrassed. A class for people that are really not flexible, so they can just stand in the back.

</p>
<p><strong>Jenn Creighton</strong><br />
Yeah, there's a yoga class. Yeah. Any, any you look. So here's the thing that I think I just want to put this out there because I really do love yoga. And I want everyone to like love it just as much as I do. But please know that at Yoga, you can modify for how your body feels and your particular body makeup completely. And totally, you do not have to do the moves perfectly. You don't have to be super flexible, you will eventually gain some flexibility from it. You can modify and the teachers don't care. I use like several blocks when I like do moves I like don't do pigeon properly. I do it on my back because of a hip issue and like nobody cares. It's cool. So just go to a yoga class, you could be fine. But also, if you are a full figured person, there is full figured yoga, that they'll go ahead and help you modify if you'd like to

</p>
<p><strong>Ryan Burgess</strong><br />
do that. Yeah, there's no judgement jam, you'd be fine. You can also you could do it at home. There's so many apps and like books and you can do it at home and you're gonna embarrass nobody at that point.

</p>
<p><strong>Jenn Creighton</strong><br />
And then eventually you'll be able to touch your toes and you'll be so proud.

</p>
<p><strong>Jem Young</strong><br />
Wow, my toes. That'd be amazing. Hello, friends.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. I just have one pic. It's a TV show. Not on Netflix, as it's really funny that we I know a full Netflix panel, and I'm picking something that's not on. It's on Hulu. It's called dropout. It's the Elizabeth Holmes story, which it's so good so far, which I'm saying so far. I hate the like weekly releases of episodes got to stop doing that. But it was on Netflix. We'd have it all at once. And so I like to binge watch, and I wish that I could be doing that. That would be a lot better. But it's super good. I've really been enjoying it. It's such a cool story. If people aren't familiar with Elizabeth Holmes, she built up a company around testing your blood for health and it was a lot of fraud going on there. So definitely a really cool story to check out. Jen, thank you so much for joining us on this episode. It was so much fun having you on and definitely some amazing insights. And I know like if people are able to go to react Athan like I think tickets are still available so they should definitely sign up and go check out your talk but where can people get in touch with you?

</p>
<p><strong>Jenn Creighton</strong><br />
I am on the Twitter. So my handle is girl code girl with a you I am there even though I don't tweet too much but felt like my DMs are open Yeah, come talk to me. It's cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Well thanks again. And you can find us on Twitter as well at  <a href="https://twitter.com/frontendhh">@frontendhh</a> tweet at us tell us whatever you like about the show or dislike we always love hearing from you. Any last words?

</p>
<p><strong>Jenn Creighton</strong><br />
I don't think I have any

</p>
<p><strong>Jem Young</strong><br />
something something console.

</p>
<p><strong>Jenn Creighton</strong><br />
console dot log forever.

</p>
<p><strong>Ryan Burgess</strong><br />
console dot log forever. That's perfect. I love that.

</p>
`;
        return transcript;
    };