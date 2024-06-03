module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 11th episode of Front End happier. In this episode we'll be discussing transpilers. Leveraging transpilers is extremely helpful. And in allowing us to extend the JavaScript language in ways JavaScript engines cannot. We all use transpilers in our daily work and projects, but there are things that developers should be aware of when using transpilers. Before we get deep dive into transpilers, let's go around and introduce each one of the panelists. Derek, you want to start us off?


<p><strong>Derrick Showers</strong><br />
Sure. Derek showers. I'm a UI engineer at

</p>
<p><strong>Jem Young</strong><br />
LinkedIn. Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Derrick Showers</strong><br />
I'm Augustus Yuan, front end engineer at Evernote.

</p>
<p><strong>Ryan Anklam</strong><br />
Ryan anklam, Senior Software Engineer at Netflix.

</p>
<p><strong>Brian Holt</strong><br />
I'm Brian Holt, I'm subservient to Ryan Burgess,

</p>
<p><strong>Sarah Federman</strong><br />
also bartender, Sarah Fetterman. I'm a UI engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a UI engineering manager at Netflix. So in each episode of Front End happier we like to choose a keyword that if it's mentioned, we will take a drink. What did we decide today's keyword compile? Awesome. Alright, so if the word compile ever gets mentioned, we will take a drink? Does anyone want to explain why we chose compile as the word

</p>
<p><strong>Jem Young</strong><br />
you want to fix? I

</p>
<p><strong>Derrick Showers</strong><br />
thought it was a good word.

</p>
<p><strong>Brian Holt</strong><br />
I like words,

</p>
<p><strong>Derrick Showers</strong><br />
because I think that I'm sure Jem will prove us all wrong here. But compile and transpile are kind of used interchangeably. And there's definitely a difference between the two. So figured if we say compile, then we're probably saying something wrong. And then as a result, we should drink.

</p>
<p><strong>Jem Young</strong><br />
It's good reasoning.

</p>
<p><strong>Ryan Burgess</strong><br />
So from now on, if anyone says that word, we will take a drink. So to start off, what is a transpiler? What are the benefits? And why should we use it?

</p>
<p><strong>Brian Holt</strong><br />
It compiles code.

</p>
<p><strong>Jem Young</strong><br />
transpiler are we talking about difference or what a transpiler. Let's talk about the difference. So a compiler takes something from a language and then some language doesn't matter what language and then converted down to machine code that's compiling. transpiling is also known as transpiler, or source, the source compiler, which takes one language and converts it to another language. That's pretty much what's a good example, Python, Python actually takes Python code converts it to bytecode that's compiling. Because once human readable at once, that's pretty simple. Cheers.

</p>
<p><strong>All</strong><br />
Cheers. Cheers.

</p>
<p><strong>Jem Young</strong><br />
Whereas something like TypeScript is a transpiler, where it takes code, written Typescript and converts it to Java scripts, and then the interpreter rather than reverse that.

</p>
<p><strong>Ryan Burgess</strong><br />
Great oxidation, good way to describe it. So

</p>
<p><strong>Ryan Anklam</strong><br />
transpiling takes code and converts it to some more code that needs to be compiled. Choose chairs.

</p>
<p><strong>Sarah Federman</strong><br />
So something like processing that can compile to C, Java or like, C, is that also transpiler? That's transpiling.

</p>
<p><strong>Jem Young</strong><br />
The rule of thumb is, and I'm probably way off base, but my rule of thumb is, if you can read the code, that is trance is transpiled, then that's transpiler. So if it's taking one code and convert it to another code, but it's also human readable, that's translated for it's not readable if it's like ones and zeros or like some weird hex or something like that. That's, like,

</p>
<p><strong>Derrick Showers</strong><br />
I guess, like, SASS into CSS

</p>
<p><strong>Jem Young</strong><br />
transpilers.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, that's good, I think. Yeah. So why would we use a transpiler? What are some benefits for using it?

</p>
<p><strong>Brian Holt</strong><br />
I think a good place to start is like, one at least is from the front end perspective is kind of like, I would deem the mother of all transpiling languages for JavaScript, which would be CoffeeScript. And like, there's like a collective eyeroll in the room right now. Yeah, I'm not a fan.

</p>
<p><strong>Ryan Anklam</strong><br />
That was pretty much what rock transpilers in popularity, though.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, like the mainstream cons consciousness. I mean, SASS was first, but those all

</p>
<p><strong>Ryan Anklam</strong><br />
started coming out like Sass, less stylus, CoffeeScript. They were all kind of around the same. So I think the point is, like, JavaScript isn't the most elegant language at times. And we use transpilers to take JavaScript and kind of turn it into a language that can be a little bit more elegant, a lot more expressive, right. CoffeeScript ESX. Now, things like that. TypeScript.

</p>
<p><strong>Brian Holt</strong><br />
So why would you use CoffeeScript? Why would one use CoffeeScript? Does anyone here like CoffeeScript? No, no,

</p>
<p><strong>Jem Young</strong><br />
my main thing why not looking up scripts is I don't like the JavaScript. What's up? It's like That's very readable. It's not the way there's a lot of ifis in it. Yeah, yeah, it's really instantly invoked function expressions.

</p>
<p><strong>Derrick Showers</strong><br />
I did see the array comprehensions. You mentioned, I thought that was, I thought that was cool.

</p>
<p><strong>Ryan Burgess</strong><br />
For me, the main reason like using transpilers is actually being able to use the future features of JavaScript like is a huge thing is being able to actually do that, and actually allow browsers that aren't supporting some of those features. Now can actually compile down to our sorry, transpile, down to

</p>
<p><strong>Brian Holt</strong><br />
come on? Come on.

</p>
<p><strong>Ryan Burgess</strong><br />
So they would transpile down to something like ESP that is supported on all the browsers, especially because each browser has its own JavaScript engine, like Chrome has runs V eight, Firefox is spider monkey, and IE is like, char and? Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I think the the advantage, and this is kind of getting into probably some of the reasons that transpilers are bad, but um, is that you, you now kind of are reliant on your build tools to, to transpile your code down to JavaScript that the browser can understand. So it kind of takes away you having to worry about oh, is is compatible with IE or LS is, you know, like, like, like, a good example is imports. Yes, six imports, right. Like you don't have to really worry about how that module resolution is happening after it gets transpiled. Which I guess we could argue you make, you shouldn't worry about some of that stuff. If you really look at the code, it is out voting, but it just kind of takes that it just kind of more developer friendly in a way you don't have to worry about all that stuff. I think another

</p>
<p><strong>Ryan Burgess</strong><br />
good reason for them is it also starts to push getting some of the specs into TC 39 committee, who actually designs the JavaScript spec. They're actually looking at a lot of the stuff that we're doing in using transpilers. And saying like, should this actually be in the ACMA script spec, right?

</p>
<p><strong>Brian Holt</strong><br />
They're getting real feedback from users, right? As opposed to like someone reading a spec and saying, This is dumb or all this looks great, right? Like we just all think that object. Observe is a great idea.

</p>
<p><strong>Ryan Burgess</strong><br />
Until you actually start putting into real practice. How do you know? Yeah, and

</p>
<p><strong>Brian Holt</strong><br />
then it's like, oh, this, this was an awful idea. Why did the Angular team propose this? Just kidding?

</p>
<p><strong>Ryan Anklam</strong><br />
I think it goes beyond just, you know, using feature or future features in JavaScript, right, like TypeScript. It gives us typing in JavaScript or something like flow and JSX. I think there's a lot more uses for transpiling outside of just using IE s next TSX, whatever. And use it in ways that JavaScript isn't even was never even thought of being us.

</p>
<p><strong>Sarah Federman</strong><br />
God forbid, we have to write plain CSS again,

</p>
<p><strong>Derrick Showers</strong><br />
I think I mean, it's, it's interesting, like, if you like, I've worked with some people that are really good at CSS and like, it's true with SASS, too, you know, like, you can get to some trouble. Or if you don't really think about what the CSS is being able to end up with a lot more CSS. Because it might look nicer with the way that you're writing Sass or Less. But at the end,

</p>
<p><strong>Ryan Anklam</strong><br />
I think nesting is probably the worst thing that's ever happened to CSS.

</p>
<p><strong>Sarah Federman</strong><br />
I don't think that's necessarily true within reason. The biggest thing that I had a problem with when I started reading SAS was using extend too much. And if you like nastier extends, you get these, like, giant stacks when it compiles and those are, like really ugly to read. Also really bad performance.

</p>
<p><strong>Jem Young</strong><br />
Can I make a confession? I've never written any SAS. I've only worked at less. Like the past four companies. I'm gonna it's only

</p>
<p><strong>Ryan Burgess</strong><br />
Tuesday. Yeah, it's not much difference. There's like small syntax changes. I can tell you that we we were like right now we're writing less at Netflix. If I was like tomorrow, Hey, Jem, we're writing in SAS, you would just be up and running like, No, it wouldn't be that big of a deal. It was actually

</p>
<p><strong>Sarah Federman</strong><br />
like a really big difference, though, is like CSS, like Sass goes like top to bottom less actually reads it the way that CSS does in the browser. Like from rule to rule.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, interesting. actually know that. They varied in that?

</p>
<p><strong>Brian Holt</strong><br />
Well, and Sass is has Sass scripts, which is really powerful. Like, I say that with a bit of venom in my voice, because I don't want my CSS to be really, really powerful. I want it to just be goddamn CSS.

</p>
<p><strong>Ryan Anklam</strong><br />
I think that's where the nesting comes in from because it makes it so easy to nest and you get so specific selectors. When you're trying to override something mean, it's a mess. And if you're not having to write nested selectors, you have to actually write that out. You're conscious of what you're doing. It's it's painful to actually write a long, deeply nested rule in pure CSS.

</p>
<p><strong>Jem Young</strong><br />
Switching gears a bit there, Sarah, you at LinkedIn, you use transpiling in your Copus Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I mean, well, yeah, it's kind of built into Ember CLI.

</p>
<p><strong>Jem Young</strong><br />
Okay. What what sort of transpile Well, so

</p>
<p><strong>Derrick Showers</strong><br />
it kind of depends on what I mean. So the main thing is that all you can write Yes, six in Ember is all transpiled. Down. Sounds you're asking.

</p>
<p><strong>Jem Young</strong><br />
I'm just curious what every company is using, I guess.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, we use Babel. And then like, yeah, uses Babel uses Babel Ember CLI.

</p>
<p><strong>Augustus Yuan</strong><br />
And actually, well, I don't know about everyone. Like, I also be like, what transpilers? Like, totally like the feature sets that you get for free JSX or TypeScript. Like, those are huge benefits. I don't know, I feel like there's a lot of people who had like this fear of like, I was just like, one day, like, browsers just said, Okay, we're going to switch to ESX. And like, in a few years, like, we're going to deprecate Yes. Five, like, I just, like, gets people to, like, jump on. And like, say, Okay, well, like, we need to, like, how are we going to migrate all this code over and like, transpilers give us like, the benefit of like, just coding and what we're going to code?

</p>
<p><strong>Ryan Burgess</strong><br />
That's a huge benefit. Yeah. Cuz like, at that point, your code is all written in something that's like future JavaScript. And then you can just literally say, oh, yeah, browsers are all supporting it, you could just rip that transpiler out of your build, and you're okay, well, we're good to go. Granted, I feel like browsers are always gonna be behind, we're probably always gonna need transpilers. But you're I completely agree with you, that's a big benefit is it's actually getting your team to start writing the future specs of JavaScript before that's actually integrated in the browser. When I was at Fluid comp, one year, I went to a talk and it was someone at Facebook, and they actually wrote a transpiler to take their old EAS, what is five code?

</p>
<p><strong>Ryan Anklam</strong><br />
I think it was and convert all TSX. So they're all their legacy code base was written in modern JavaScript. And they did that because the next person that comes in and looks at it, cuz what are you doing you open a project, right? You look at the existing code. So they didn't want old patterns to be repeated. They want all their code to be future looking. So they wrote this thing to go on and take all their old code. And transpile it Yes. 60s next or whatever. That was a really

</p>
<p><strong>Ryan Burgess</strong><br />
I remember seeing that talk. I was like, super impressed with it. That was really season code mods, right. Yeah. And I think that was when he first launched it. Like, I don't even know if it had a name.

</p>
<p><strong>Jem Young</strong><br />
Also this like, I've heard this argument before, and, and all defense, I've spent more time to evaluate it, and probably most people, but yeah, like when I first started, that was what I have. So my boss was like, you know, we'll write some code. And like, when the browser's support it, we'll just switch over like seamlessly. But that's absolutely not true. It's like the stream we've been sold by nobody, like nobody created we just saw like, really came with this thought, as you promised that one. So this tracer is that will lead you to mean like aquascape compilers. They're opinionated about how you should write things like they try to fall spec. But it's not necessarily line by line, like what ECMO script says. So you can't just rip out transpiler. And the code is going to work every browser like that's just unfortunate. It's just not true. It's a pipe dream. It is a pipe dream. It's a good idea in theory, but you know, people get opinionated someone that will of course, it's like, well, no, I want the spread operator to work like this. Or I want it to look like this. And that's not necessarily the spec. Second part is it's slower ACMA script six is slower in the browser, like, I've benchmarked a few things, and just, we take for granted all these optimizations, like chakra spider monkey NVA, that they've done for years on extra five. And like, they're just not there yet. But ECMO script six, so your code is definitely slower. That's just like,

</p>
<p><strong>Ryan Burgess</strong><br />
like, if you're running, even if they're supporting EF six, or some of these features, running just in the browser without transpiling. You're saying that it's actually slower than ESI version?

</p>
<p><strong>Jem Young</strong><br />
Yeah. Cuz it's not optimized yet. Like, give it a year or two, it'll be optimized. But for now, if you just do straight switchover your code, it's not going to be as performant as the way

</p>
<p><strong>Ryan Burgess</strong><br />
crazy because you think you're like, Oh, I'm writing the latest version. It's like, it should be a faster version. Yeah.

</p>
<p><strong>Jem Young</strong><br />
So underneath there's depends on the engine, but I know he hates run in C. So or C++. So yeah, I think there's a lot of code that suddenly optimize just like everything else. Yeah, no, that

</p>
<p><strong>Ryan Burgess</strong><br />
makes a lot of sense.

</p>
<p><strong>Jem Young</strong><br />
It's like, it's gonna squash these like, I don't know what people understand about transpilers. But no, I

</p>
<p><strong>Ryan Burgess</strong><br />
think that's because we all assume that I mean, they are selling points, like you said, I had to sell my boss on it of like, Hey, this is why we should use it. And I think we've all use those as selling points. And not. It's like, we hope that it's going to get there.

</p>
<p><strong>Brian Holt</strong><br />
So the counterpoint in the point of caution, I would say to Jem's point is, he's absolutely right, that it's going to be slower, right, like it the nature of transpiling, you almost always end up with more code than when you started with like, that's just the way it works. Very rarely are they going to take more code reduced, and the less, but I would say in any case, if possible, err on the side of readable code, right? So if you're using ESX, that makes your code way more readable and way more understandable to a future person, right? Like, my example is, using generators, like there are situations that generators lend themselves to extremely well. It's going to be slower because it's a giant state machine, right. But if it lends itself really well makes your code much more readable than that might be worth it. And you might be giving up three milliseconds, five milliseconds, which is in just about any app is acceptable, right? But if you're giving up 100 milliseconds, then it's probably

</p>
<p><strong>Jem Young</strong><br />
you haven't we never talked about that the benefit of transpiling is that I write code faster. It's just so much faster. Brian, I've gotten to long debates in Twitter and elsewhere about cons versus Latin bar and how like costs and let her kind of explicitly saying your attention. That aside, which is beautiful. It's just like, it's just faster to write JSX code. So like using transpile, it makes the entire keyword faster in my opinion, I think I can write more verbose code or less verbose code.

</p>
<p><strong>Ryan Burgess</strong><br />
I also feel like you're a pretty big adamant person on constant wire, someone people writing barring the code. I know it drives you nuts.

</p>
<p><strong>Jem Young</strong><br />
We just instituted that rule at Netflix. If there was a warning now and if using var

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, interesting. I didn't even know that. We added that. But I've started to notice on people's pull requests that there was a few people that always still left bar. And I've noticed that those engineers that were writing that are now always writing Latin, Hans, I just assume they just jumped on the bandwagon. Nope, it's

</p>
<p><strong>Brian Holt</strong><br />
ESint. Yes, lint is the only.

</p>
<p><strong>Jem Young</strong><br />
Yep. So Netflix has fallen on the side of Latin console, which I'm totally.

</p>
<p><strong>Derrick Showers</strong><br />
I used to have an interview question that involve closures. And turns out like you use like, instead of are in the for loop, it'll like it works. If they knew that, but yeah, I guess

</p>
<p><strong>Ryan Burgess</strong><br />
too, is like we talked about us all. Like, it sounds like all of our companies are using some sort of a transpiler. What if your company wasn't using transpiler? Is it like, why would you want to switch? Like, why would you want to take the extra time to put that in and build? Is it something that you have to rewrite in your entire code base to start using a transpiler? Or is it something that you can gradually do

</p>
<p><strong>Brian Holt</strong><br />
so in my opinion, using newer future facing code really gives you two things, it gives you some conveniences, and let const arrow functions, these are all really conveniences, right? Like they they allow us to do the same things that we could do before, just in slightly more tourists or slightly more fun, or however you want to put it way. But it also affords new things that are new primitives that you could not you could not previously use. One of those would definitely be generators, right. Like there are some patterns that you can accomplish with generators, you simply cannot accomplish with anything else. async iterators is another thing, right? There's these new primitives that are coming to us that they were not given to us by the language, we can no longer do that. So that's I guess I'm saying it affords new paradigms of programming that you can do interesting techniques and optimizations that you were not previously able to accomplish.

</p>
<p><strong>Ryan Burgess</strong><br />
You'd be an advocate for if you're if you walked into a company tomorrow, and we're like, oh, no, we don't have a transpiler you would probably Institute putting it.

</p>
<p><strong>Brian Holt</strong><br />
I mean, I wouldn't just do it blindly. I mean, I would want to because I think it's fun, right? But that's obviously not the best reason to do something. I mean, you need a business reason, I guess, how would you approach it? Oh, I would just do it. Let's introduce Reddit, to react as I just launched it.

</p>
<p><strong>Ryan Burgess</strong><br />
So it's one way to do it is like I feel like you can talk and talk about it. But if no one actually takes it upon themselves to do it that I think it is a valid way

</p>
<p><strong>Brian Holt</strong><br />
to tell me lunch SCSS as well. I just started having it run over our CSS, right, because CSS is valid as CSS, right? Same with if you're doing Babel translation, like anything that's already valid, JavaScript is already going to transpile. So you just do it. And then when someone figures it out later is like, Oh, I don't I don't know what happened. That was someone,

</p>
<p><strong>Sarah Federman</strong><br />
we're gonna get like an email from angry company in a month and be like, my employee just instituted this without asking me

</p>
<p><strong>Ryan Burgess</strong><br />
You can blame front end happier

</p>
<p><strong>Brian Holt</strong><br />
you are right, you are welcome.

</p>
<p><strong>Jem Young</strong><br />
I think most transpilers you can write whatever native code you're writing before. And, and if you want to throw in like a lot of cons, it'll do it. And like it's pretty, pretty painless. In my experience, I've inserted two companies out it's like, like static analysis just from using constantly is like hugely beneficial. If you only want to do that. And arrow functions, you're not generators, a forum like there's like a lot of picking, pick and choose features. ESX are just incredibly useful. But you can only transfer those if you want. It's pretty easy

</p>
<p><strong>Sarah Federman</strong><br />
to think if you like if you start doing this, you should go back and change your old old code for people that are coming into the company or like, just in general, like making a consistent effort. I think

</p>
<p><strong>Jem Young</strong><br />
as you touch the file, you should change it but not like I'm gonna go one Friday night and like update all my bars and I think

</p>
<p><strong>Ryan Anklam</strong><br />
if you change the file, you should change the whole file. I've seen pull requests or it's like Var Var Var Var Var cars, cars, cars barabar and that strikes me crazy. If you're going to change it in a file, don't be lazy, go through the whole thing.

</p>
<p><strong>Sarah Federman</strong><br />
You also have to make sure that you communicate that This is like your preferred style. Because if somebody comes into the company and they don't know any better, and they see different versions, they might not know which one

</p>
<p><strong>Brian Holt</strong><br />
to choose, right, a lint rule.

</p>
<p><strong>Sarah Federman</strong><br />
Exactly, you definitely have to read a lint, roll

</p>
<p><strong>Ryan Anklam</strong><br />
and fall into culture to write everything that you've all requested. And you can sit down and have a conversation about sound code that they chose, or you chose or whatever.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've briefly touched on, like a lot of the positives, and even some of the negatives, and it's kind of lightly touched on. But I'm interested to know, what are some of the bad parts of transpilers? Obviously, not everything is positive? What are some of the things to be aware of?

</p>
<p><strong>Brian Holt</strong><br />
It's all unicorns and rainbows. And we're all happy, put a transpiler and we're good transpile your translations?

</p>
<p><strong>Ryan Anklam</strong><br />
The bad part of transpilers, I think, is bootstrapping a project. I think the last project I did, I set up a web pack, I set up TypeScript. And you know, by the time I got all those running, and got the VIM plugins for all those, I was exhausted, and I didn't write any more code, and I just went to bed like I was done. I think that could be a bad part, if it takes a little bit more to get set up. And, you know, get things running smoothly. But once you do, then it's just another thing that happens. But I think the initial overhead of getting set up can be a little exhausting and daunting. If you're not, you know, not used to it. But you're

</p>
<p><strong>Derrick Showers</strong><br />
using a framework with a CLI tool that that just comes free. But

</p>
<p><strong>Ryan Burgess</strong><br />
But okay, what's what's sorry? What are the negatives of that, though? Like, there are some negatives? I like the idea of something like Ember, yeah, you're pretty much easy set up and go. But there are some negatives, is the fact that you're pretty constrained

</p>
<p><strong>Derrick Showers</strong><br />
with us to actually the Ember CLI. I think you, you have I mean, yeah, you have something like out of the box, that just works. But Ember CLI has a lot of apps that you can look into and change. Or if you want to rip out babble and use something else.

</p>
<p><strong>Sarah Federman</strong><br />
Ember just has like, a lot like, it has like your package dot JSON, it also has, like your products back, but it also has broccoli and Bower. And like, it's just a ton. Like, why do we have all this stuff?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, you don't need Bower? That's for sure.

</p>
<p><strong>Derrick Showers</strong><br />
Well, yeah, I'm trying to they're trying to get rid of Bower. But it's tough when you have Ember requires Bower. But yeah.

</p>
<p><strong>Jem Young</strong><br />
I like that the React CLI was released last week has an eject function where it's like, alright, just will spit out everything through a project. And then you can go your own way from there. I think that's a really, really,

</p>
<p><strong>Ryan Burgess</strong><br />
it acts more like a boilerplate like the way I that's the way I took it as like, Hey, here's the CLI tool that just will start your project. And Ember does the same thing. But feel like the reactive approach I like a little more, just because I still have feel like I have more freedom. And Derek, you are right, like the Ember, you can still like swap out things. But to the same point is to Ryan going and setting up his all boilerplate build project is like, he still has to go do that. So

</p>
<p><strong>Ryan Anklam</strong><br />
you would still have to do that

</p>
<p><strong>Ryan Burgess</strong><br />
ember? Yeah. But you'd have to do

</p>
<p><strong>Derrick Showers</strong><br />
that with a reaction logic. I'm not I don't, I don't mean that. It's like, I'm not trying to say Amber's the best. I'm just saying that, like, I do agree with Ryan. And especially, it's annoying, because you set up everything the way you want to set it up, right? And then like, you don't run any documentation for yourself. So like, a couple weeks later, you want to do it again. And you're like, Okay, well, here, here I am, again, oh, you're writing your own boilerplate. CLI to it with with whether it's Ember CLI, or I didn't even realize react head, but I knew it was coming in and like with one of those is just, it is really nice that you have documentation and that you probably take two commands and have a project up and running. And it's, it's one dependency in your project, which is really nice. I mean, there definitely are issues. And I think, like one of the issues with transpilers in general. And and also you see articles is just like a map like that, the more that you add to it stuff, obviously, the more time it takes for all these things to to process and, you know, transpiling takes time, whether it's not necessarily on the client, but it's time to do on on during the build process, right. Like, I know, there's a couple of things that I've worked on, at work that take like 30 seconds to compile, which is ridiculous. But when you get you know, I mean, that's, that's a lot of time that if you multiply that and scale that then you're talking about,

</p>
<p><strong>Ryan Burgess</strong><br />
that's developer productivity. And that is a pain in the ass that each time I'm a week, like changing some code that you're like, alright, yep, waiting for transpile like that is it adds up very quickly through

</p>
<p><strong>Sarah Federman</strong><br />
like a 62nd CSS compiler. Now it's kind of sad. Yeah. On that note, like, with overhead involved with this. Previously, when we were talking about ESX, we were saying, when you're learning JavaScript, you should just learn ESX from the beginning, with like, the need for transpilers Do you feel like that's also still true? Like, you should just start learning JavaScript and use a transpiler as you go or should you start learning like plain JavaScript and then add the transpiler. And then ESX,

</p>
<p><strong>Brian Holt</strong><br />
I feel like you should just start with without a transpiler. Because I can, I can imagine trying to write like a config. Without actually, for my very first time, and like, there's no features in ESX that are essential to the basics of learning, even when you're learning like a lot of times, thank you just a great way to learn is just to go into the console and just start like typing, just start doing things, right.

</p>
<p><strong>Derrick Showers</strong><br />
I always find myself I'm like, Okay, I'm just gonna try this out. And I'm typing ESX into the, luckily, they support now Latin and concentrate. But like, there, yeah, there's a lot of things I'm doing okay, this, this doesn't work. Why doesn't Oh, that's right, I'm ready. So I think that'll help you. You know, if you don't know how to write plain JavaScript, he has hot JavaScript, you can pretty much do it wherever you want. Don't worry about even node, like, a lot of people are still on really old versions of node, right? So like, you know,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, that always drove me nuts to is in the browser, you could write cert in iOS six features. But then you'd be on Node, there were so many times that I would write those features and be like, wait, wait, wait, that's not going to work? Or else I'd get errors in Node and be like what's happening? And it always caused me the most headaches, I felt like jumping between the two.

</p>
<p><strong>Derrick Showers</strong><br />
And I think also is, it's going to like we use the not to keep going back to this example, when we use the SAS last and CSS example. Like, I don't think anyone would say you don't ever need to learn CSS if you know, SASS or LESS, right. Like I think we all realize that you have to know CSS and for a lot of the same reasons, because you have to go into the browser. And you have to, you know, using dev tools, you're just looking at CSS at that point, you're not looking at SASS or less the same thing is true in a lot of parallels to Yes.

</p>
<p><strong>Brian Holt</strong><br />
I don't I don't know if that's 100%. True. There are people like for example, the closure scripts community, right, that's a transpile language that we haven't really touched on yet. And it's a great language, especially if you like closure, right? They have home and on necks, which are just fantastic libraries, and some of the closure script programmers that I know, don't write any JavaScript, right. And you can get around the debugger problem with source maps. Right. So I mean, there is a case to be made there that eventually we might get to the point where JavaScript is not necessarily the main target, especially with web assembly around the corner. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
guess, like to me, you know, you're there are times where you still have to debug JavaScript in production, or you still have to, and then you have the fact that it's minified. And it's even a whole other level of complexity. So if you don't, but I mean, maybe that's just that that's the world that we live in now. And like when things move to web assembly and stuff down the road,

</p>
<p><strong>Ryan Anklam</strong><br />
we will think of that as

</p>
<p><strong>Jem Young</strong><br />
just like describe the difference between a senior engineer and a regular engineer. Yeah, regular engineer, writes transpiled code while blot runs, but a senior engineer can go in production, see that minified code? And yes, five, and a bug isn't there? That's kind of

</p>
<p><strong>Derrick Showers</strong><br />
like choices.

</p>
<p><strong>Ryan Burgess</strong><br />
Have to do it, you don't want to do it. I think another thing that we've missed for some of the bad parts is just being aware of what features in ESX you're using. Some of them add actually a lot of extra page weight. You look at this nice, beautiful ESX code. Good example, I think would be generators. It looks so nice. And then once you've actually transpiled it, it's huge. And yes, five, and so you have to be aware of like, should I be using this? Is it actually beneficial? Am I getting that performance gain? Probably not in that case? I know, I think actually, in gem yours, your talk, I think you use generators might have been it was generated an example of that. And I think you showed a good example of it being very, very small, like four or five lines of code, and then probably like 10 times that one. So it's yes, five.

</p>
<p><strong>Jem Young</strong><br />
Yeah, that's, I have a lot of bad parts, mainly because that was what my talk was about. But um, yeah, that's a good point. We had the same example for a jock, our web core team did it for classes. He's saying like, this is what classes like, well up to, and like it has a lot of code way. I think it's like 40% Bigger for some of our stuff. So

</p>
<p><strong>Ryan Anklam</strong><br />
that is just because of the way we do things, right? Yeah, we have each file gets attached to the helper, Tom, because we do dependency resolution and AV testing. With Babel three, you're not going to get that for every single file that we have to have the helper one. So it's not quite as bad as our use case.

</p>
<p><strong>Jem Young</strong><br />
But there's still overhead. Yeah, and there are polyfills, which is thrown in, which is not as big a deal. But if you're trying to like try to shave kilobytes here, like the polyfills are sometimes like 1020 3040 50 kilobytes, and it's just, they're getting included. And you'll even think about it because you're like, Oh, my codes like four lines of code. But there's actually like a polyfill supporting that.

</p>
<p><strong>Ryan Burgess</strong><br />
It's almost like you should be looking at the code before it's minified just to see like, what does this actually look like when it's transpiled and just be a little more aware of it. It doesn't mean that you can't use it, but just have a better understanding why like what happening in that transpile

</p>
<p><strong>Ryan Anklam</strong><br />
another one of the bad things that we didn't touch on is you are dependent on that bill tool or whatever transpiler you're using, right? I mean, Brian's got a great case of that. When he was giving his C, I think it was a CS in six hours workshop at Netflix. And code pen decided to upgrade from battle to battle three the night before. Yeah, but they actually read on how to do it. So they didn't actually include any defaults.

</p>
<p><strong>Brian Holt</strong><br />
The config, right, that didn't include any of the presets or plugins.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, presets. They didn't including that. So his entire workshop was busted. Because there you know, thanks.

</p>
<p><strong>Brian Holt</strong><br />
hashtag not sponsored by code.

</p>
<p><strong>Ryan Burgess</strong><br />
Hey, but you did you pulled through it was you still pulled the workshop off. And they didn't fix it

</p>
<p><strong>Ryan Anklam</strong><br />
relatively quickly. But it was, yeah, we love God, Ben,

</p>
<p><strong>Jem Young</strong><br />
you bring up like a great forking point where it's just, you're not just dependent on the transpiler you're dependent on your tool chain, you're dependent on a linter support that you're dependent on that transpiler forever and ever because they are opinionated about how you should write certain things and can't say like, Oh, we're using Babel. Today, we're gonna switch to tracer, it won't work. Like there's something's gonna break, it's gonna be like, very obscure, and you're gonna be debugging in production. As a senior engineer,

</p>
<p><strong>Brian Holt</strong><br />
I mean, kind of to your point, like, if you are writing iOS six, and using like the Babel 2015 plugin, right? are preset rather, it is possible that you can get on tracer, right? It's within the realm of possibilities that if, for whatever reason, battlements south, according to you, that you have options to move to, which I think is a big reason to stick to spec compliance in JavaScript, right? You do actually have options if you're writing closure script, right? You're you're kind of stuck to closure script and your they decided, like, you know what we're done with Closure script. Now, it's all about racket script or Erling flavor list script, or something dumb like that. Not they're not done, they're actually awesome. Sticking to JavaScript, you're gonna have some options. But

</p>
<p><strong>Ryan Anklam</strong><br />
if you're gonna use spec compliant JavaScript, side note, object observer, right? Yeah, that stuff will come and go, even if you're writing a spec,

</p>
<p><strong>Brian Holt</strong><br />
right? And actually, this is a good segue into talking about stages versus priests, just presets in general of Babel in particular. So here's a pro tip for you go into your

</p>
<p><strong>Sarah Federman</strong><br />
can we give some background about the object observe thing. So object

</p>
<p><strong>Brian Holt</strong><br />
dot observe was, it kind of came from Angular one point x, actually zero point X really want to get started? The way that Angular does checking to see if properties change over time is they kind of do this holding this, and it checks every so often. Does this number change? No to the change now, does it change? No. Did it change? Yes. Okay. Now I'm going to do a bunch of stuff based on the package changed. So the Angular team was really pushing for a spec that they could say, hey, JavaScript, I want to observe this. And anytime something happens to it, here's a callback for you to call, right? So you're observing this value. It's any property right? Because var x equals five, object dot observe x ray. And then as soon as x changes, you're going to call your callback will be provided. Everyone thought this was a great idea for a long time myself, and I was pretty stoked on it. And then eventually kind of came to life is like, there are way better ways to handle this kind of asynchrony. Right? Like dirty checking is actually really not a good idea.

</p>
<p><strong>Jem Young</strong><br />
It's really inefficient, actually. Yeah. Anybody curious at home, it's called the observer pattern. It's like very common, yes, patterns. It's really beautiful to implement. It's like really easy. But yeah, I was when I was like, obviously, I've observed is gonna save us, we're gonna write like all new frameworks and things like that and doesn't exist anymore.

</p>
<p><strong>Sarah Federman</strong><br />
That's also like, the whole two way binding thing in general is kind of going by not as trendy as it used

</p>
<p><strong>Brian Holt</strong><br />
to be. It's too magical. So the point I wanted to make is go to your Babel rc file in your production app, it doesn't really matter in your personal app, because for the most part, you don't really care how big your stuff isn't personal. Go to your production Babel rc file and see if there's any presets. And if there are presets in your Babel rc file, you're probably doing something well, especially if it says Babel preset 20 es 2015 you are including way more stuff, I guarantee there is not a single app out there that uses all vs 2015 When you really need to go as you need to go include the individual plugins for every piece of the Sony 15 layer using now if you're using something like ies or Babel, preset stage two or stage zero, then you're in for a world of hurt. Like that's going to be a really really bad day for you especially if you're going to use things that are you know not yet spec compliant, right? You're gonna have a really bad and if

</p>
<p><strong>Ryan Anklam</strong><br />
you're not sure about stage two in stage two, I suggest you go back and listen to our iOS six podcasts.

</p>
<p><strong>Brian Holt</strong><br />
Well actually Jen told me a story where he wrote us something in stage zero and really put them in the ass right? Oh, yeah,

</p>
<p><strong>Jem Young</strong><br />
um,

</p>
<p><strong>Ryan Anklam</strong><br />
I rejected her real quick compilers sorry, Jembo.

</p>
<p><strong>Jem Young</strong><br />
No, you guys are making amazing points and it's absolutely true. Obviously observe is a good one. My my one my terrible sort of decorators. I'm a huge fan of decorators. I think they're beautiful. I think they shorten up code very, very nicely. But there's still stage zero stage one. But I've written code at my last company are evil. And I'm using decorators all over the place, because they're just amazing. But they may never make it into a standard JavaScript. So forever. And ever, we're gonna be stuck using Babel or some sort of transpiler an old plugin. And an old plugin. Yeah, what if they drop it tomorrow?

</p>
<p><strong>Brian Holt</strong><br />
I'm still stuck using Yeah, you have to you at that point, you have to maintain it.

</p>
<p><strong>Jem Young</strong><br />
Exactly. What's another one function binds double colon? That's an old one, it may never become JavaScript. So yeah, you're forever stuck using features, which, yeah, this your transpiler supports it. But like, it's not standard.

</p>
<p><strong>Ryan Burgess</strong><br />
We're not getting to that point where we're like, hey, eventually, we'll be able to get rid of this transpiler like that pipe dream you're talking about earlier, you're literally never gonna get it like never

</p>
<p><strong>Sarah Federman</strong><br />
Well, speaking on that topic. In general. I mean, we're kind of attached to transpilers as it is, because with the new ESX, every year thing, we're going to be transpiling. Like basically until like the foreseeable future,

</p>
<p><strong>Ryan Burgess</strong><br />
I like to think that the browser's will do a little better job of even like ies 2016. Their features are a subset of features and not as big as like going from iOS five to six. It's not as big of a jump. There was such a built in so many extra features added. I would hope that the browser's can catch up.

</p>
<p><strong>Jem Young</strong><br />
Yes. 2016 has two things.

</p>
<p><strong>Brian Holt</strong><br />
It's pretty much already fully implemented in every browser. And the other thing is, you don't have to hear you're totally fine to write. Yes, five, even Yes, three has pretty much everything you need to write a full app is

</p>
<p><strong>Jem Young</strong><br />
three still behind in there. And I love by

</p>
<p><strong>Sarah Federman</strong><br />
find came from jQuery in the first place.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I mean, you don't need it. And if you are using bind everywhere, you are probably doing something wrong.

</p>
<p><strong>Ryan Burgess</strong><br />
Before we fully wrap up today's episode. Let's share each other's picked. Eric, you want to start off with your picks for this episode?

</p>
<p><strong>Derrick Showers</strong><br />
Going before guesses so I can take the same picks it come up with something else. Anyway. One thing that I think is pretty important or pretty useful is babbles try it out feature, especially with what we're talking about. So it actually you can it does like live translation from Yes, 1013 or whatever to Yes, five, it so you can see exactly what's going on, which is super helpful. And also shows you like how much code is actually being replaced with just go to Babel. So I'm saying right off the top. And my other pick, I guess this will tell you about. But no, so I had to come up with something else quick, but something I use all the time and I really like and a lot of people don't like so I'm just gonna write out their inbox by Google. It's like a Gmail replacement and a lot of people don't like it because it's it's kind of like hides mail for you stuff like that. But it's really good if you like zero inbox thing. And they actually have a bookmark a Chrome extension now you can actually save articles right to your inbox. So I use it pretty much for like one place for everything I want to catch up on. If you subscribe to the front end happy our mailing list that I've got right there too. So

</p>
<p><strong>Sarah Federman</strong><br />
happy our mailing list.

</p>
<p><strong>Jem Young</strong><br />
I'll say like, I don't like inbox. I like seeing where my mail comes and goes and I don't want to like miss something because like, I just hate

</p>
<p><strong>Derrick Showers</strong><br />
emails so much that I don't care how

</p>
<p><strong>Ryan Burgess</strong><br />
do I fit in. But then I worry that I've

</p>
<p><strong>Ryan Anklam</strong><br />
missed something my biggest gripe with inbox is it doesn't search your trash. You gotta go back to Gmail if you want to search your trash and that trash everything especially trash, or Ryan Burgess.

</p>
<p><strong>Jem Young</strong><br />
My pits first one music. Explosion, the sky in the wilderness is phenomenal. I love trying to explain explosions, scattered people. And I think even XKCD has a comic about this, like, try explain the like and the part that goes down. Because like there's no lyrics, most 99% of closing specimens. It's just, this one is so good. Their theme is about space and exploring. And you kind of get that kind of like the Earth is not a cold dead place is like a love album. But exactly it but there's like no love part in it's just get the feeling. It's hard explained but expose this guy, check it out. Amazing. My second pick is DigitalOcean. I actually have been using AWS for years now for my personal site and other stuff. But I started using DigitalOcean. And it's so much easier, it's so much more user friendly. Anyway, is is like kind of like a middle finger figure it out. But DigitalOcean is like hey, we're gonna help you out. So I recommend that it's really good.

</p>
<p><strong>Derrick Showers</strong><br />
I guess this video I'm so curious which one of these is Derek's? But we'll see, I guess. So my first one is this Chrome extension that basically adds go to definition, like an IDS for GitHub. So you could go to like an open source project. And you look and then like, you can right click and say go to definition and I'll just take you to the file that has that for that function is declared. Wow, that's actually really Yeah, it's really sad. So it's a Chrome extension. And um, yeah, check it out. Was that the one? No, no. Okay, there must be this on StackOverflow recently just announced their documentation beta. I think it's, I really like the idea of it. Basically, it's community driven documentation for whatever. And so like, a lot of people have already started doing JavaScript react a lot of the big stuff. Yeah, I think like, it would be awesome if people can contribute. And yeah, I guess. Yeah, I think it's a great idea. I mean, you know, documentation Ciseaux. Like, if anyone I don't know, like you said, I don't know if it'll work or not. But anyone in tried take a stab at it.

</p>
<p><strong>Ryan Burgess</strong><br />
Right. Ryan, what do you have for us this episode.

</p>
<p><strong>Ryan Anklam</strong><br />
So my first pick is Google key. I was using a another notating taking application. The UI just started getting a little bit clunky to me, and just wasn't pleasing to us anymore. So Google Keep I think is a nice, it's got a very clean UI, it only does taking notes and it doesn't really good job of it. So until they shut it down. But until then, I'm gonna ride that wave hard.

</p>
<p><strong>Brian Holt</strong><br />
Funny, you say ways.

</p>
<p><strong>Ryan Anklam</strong><br />
totally meant to do that. My second one is a music pick. And it's a song called heartburn, the Felix cartel mix by a group called mafia. It's a great song to just crank up loud, and code to listen to it multiple times in a row and just pounded out tons of code,

</p>
<p><strong>Jem Young</strong><br />
verify you listen to it multiple times. Brian, what

</p>
<p><strong>Ryan Burgess</strong><br />
do you have for us?

</p>
<p><strong>Brian Holt</strong><br />
My first pick is definitely hyper term, which came out this week. It's it's a terminal built in electron from rock G, who yermo rock. I'm assuming I'm saying that incorrectly. He's fantastic that everything he touches is gold. He put out now which I built elk CLI if you remember that last week, which is built on top of now and Zeit world. So if you want something even easier than DigitalOcean, which is pretty damn easy. Now isn't even easier than that if you're looking to deploy node services. Anyway, so he built hyper term, which is amazing, super easy to write plugins for it's all built in JavaScript really pretty works really well. And then I'm also going to go ahead and I switched editor this week, which is a really big deal for me. I'm blowing everything up this week, I'm switching shells. I'm going to switch to Z. Sh.

</p>
<p><strong>Ryan Anklam</strong><br />
I just did that about a month ago. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
So Hypertherm is pretty cool. I'm switching from sublime to code. So as my other pick from Visual Studio code, the no debugger is amazing, life changing work worth switching editors to use even if you don't don't want to switch editors, you should really install code just for the debugging capability.

</p>
<p><strong>Jem Young</strong><br />
I use it for debugging, but I hate debugging the code. Yeah, but it's a great debugger.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, Sarah, what do you have for pics?

</p>
<p><strong>Sarah Federman</strong><br />
So my first pig since I was a button I missed the woman in tech episode is a els 2016 women in tech. There's a little bit of a plug for each of their nominees. It's really cool to see all these women killing it. And my second pick is actually that what we were talking about earlier with less versus CSS talks about how Sass is a less is the imperative. I might be getting mixed up too much during. But yeah, Sass is an imperative language. And last is a declarative language. And it talks about why they are different and how that actually plays into your code. So a lot of people compare Sass and Less like as kind of the same thing. But there are some really key differences that aren't really talked about a lot.

</p>
<p><strong>Ryan Burgess</strong><br />
My to pick first one is the Netflix original show that just came out a little while ago, which is Stranger Things is amazing. I love that it's like has its like a nice vibe to it. The music is like, awesome. Like the soundtrack is great.

</p>
<p><strong>Derrick Showers</strong><br />
Is that the time period there and I couldn't figure that out the whole

</p>
<p><strong>Ryan Anklam</strong><br />
season.

</p>
<p><strong>Derrick Showers</strong><br />
Are you serious? Yeah, definitely. Definitely. I thought you were like, like

</p>
<p><strong>Ryan Burgess</strong><br />
Aaron. Yeah. I mean, even like I love like the font choice and everything about it. I really highly recommend checking that out. And my second pick, which is very aligned with our topic today is gems talk on transpilers. Just titled transpilers Not so fast, my friend. He gave that at Empire JS in New York. Like what? A few months ago. I don't even remember a few weeks, you know, well, there's enemy and me. Okay. Yeah, I guess it's feels like a lot longer ago, but it was a great talk. It is on YouTube. Definitely check it out. He'll even go a little bit deeper than we did today. On the episode. How can our listeners get ahold of each of you?

There? Twitter. What's your Twitter?

</p>
<p><strong>Derrick Showers</strong><br />
Derek showers with a net sign in front of

</p>
<p><strong>Jem Young</strong><br />
it. I am at Jem Young on Twitter.

</p>
<p><strong>Derrick Showers</strong><br />
I'm at Awkward Oh, Aug Vu RTO.

</p>
<p><strong>Ryan Anklam</strong><br />
I am at bittersweet Ryan on Twitter at Hope VT.

</p>
<p><strong>Brian Holt</strong><br />
Let's go and feed it Ryan. Which one? Either. Simultaneously.

</p>
<p><strong>Sarah Federman</strong><br />
It's at Sarah underscore Fellerman on Twitter.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm at <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a> on Twitter. Thank you all for listening to today's episode, make sure to rate us on iTunes and Google Play and subscribe to front end Happy Hour also created a Facebook page finally so go ahead and like us on Facebook and also visit front end happy hour.com And subscribe to our new newsletter where we'll try and keep everyone up to date with brand new episodes and any events that were attending anything like that. I would

</p>
<p><strong>Jem Young</strong><br />
say shout out to all the people tweet at us. We love

</p>
<p><strong>Brian Holt</strong><br />
you. Also find us on MySpace

</p>
`;
        return transcript;
    };