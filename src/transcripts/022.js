module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 22nd episode of the front end, Happy Hour podcast. Love it or hate it. CSS is an important part of building the UI in our web applications. In this episode, we'll be discussing how to create scalable CSS architecture for large projects. Before we get started, let's go around the table and introduce the today's panelists. Maurice, you want to start off? Sure.


<p><strong>Mars Jullian</strong><br />
Hi, I'm Mark Julian. I'm a professional CSS Wrangler. at Netflix. My

</p>
<p><strong>Brian Holt</strong><br />
name is Brian Holt, and I'm the chiefly shitty stylist at Netflix.

</p>
<p><strong>Jem Young</strong><br />
My name is Jem Young. I'm a senior software engineer at Netflix.

</p>
<p><strong>Augustus Yuan</strong><br />
My name is Augustus and I'm a front end engineer at Evernote.

</p>
<p><strong>Derrick Showers</strong><br />
My name is Derek showers. I'm a senior software engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix and I have not been writing CSS for a while. Alright, and each episode, the front end Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is style styles. So anytime we say the word styles, we will all take a drink. Alright, let's get started. So to start off the episode, I figured we could talk about what advice would you give to someone that's working in CSS, either new added or just writing CSS and some advice that you would give don't

</p>
<p><strong>Augustus Yuan</strong><br />
use CSS.

</p>
<p><strong>Brian Holt</strong><br />
But you have to

</p>
<p><strong>Ryan Burgess</strong><br />
unfortunately, you have to use and I would

</p>
<p><strong>Mars Jullian</strong><br />
say good luck

</p>
<p><strong>Ryan Burgess</strong><br />
that I like that.

</p>
<p><strong>Brian Holt</strong><br />
So like you're asking a bunch of primarily JavaScript engineers write CSS is an incredible thing that like you create these rules that do incredible things in the browser. And it's robust. You can do amazing things with like people like Sarah Dresner and Chris coIour. And all these people are magicians, right? Unit Kravitz, like they're they're just fantastic at CSS. I'm just really bad at it. I hate things that I'm bad at what makes you bad at it. I don't take the time to learn it. I guess.

</p>
<p><strong>Jem Young</strong><br />
I'm in the same boat. I've noticed there's pretty much two types of front end engineers. There's people that care about CSS, the people that do not, I am in the latter. I do not care about CSS I do as much as I need to get done. But to me this browser cross compatibility all the like, unique rules, some weird rendering bug in Firefox, it'll ruin your day, like it was just too much for me all stuck in JavaScript land, or I'm just better at it.

</p>
<p><strong>Ryan Burgess</strong><br />
I actually don't mind it, I think I've started to hate it more and more over the years. But usually, like I was always like, yes, need to have a very well structured CSS file or my project needs to be well structured. I think that's really good advice, though, is like really planning the architecture can help save you some headaches down the line, and avoid nesting. That's a big one for me, or at least heavy nesting, I think the rule of three is fine. But if you go heavy on it, it can kill you in the long run.

</p>
<p><strong>Jem Young</strong><br />
If I advise to say in the beginning, I would say don't build some awesome, beautiful project that you have this grand design, and you have these awesome mocks for it and not tested in multiple browsers, because that will ruin your day. I've done that numerous tests often before you get too deep into it. Yeah, that is hit me many times in Chrome. It looks awesome. And you know, it doesn't work in Safari, I'd say like, what does the world just use Chrome? Ah, screw those jerks. But now that's not me I should have tested before I got close to shipping.

</p>
<p><strong>Ryan Burgess</strong><br />
Another one I hate is people using IDs. It's a big pet peeve of mine use IDs, that's fine in your HTML, but don't style them do not reference them. It's such a pain in the ass later on. That's a good one.

</p>
<p><strong>Derrick Showers</strong><br />
I think one of the things I would say is, especially when using Sass and Less, and we're gonna talk about that a little bit later. But just kind of understanding what you don't understand everything about what's going on. But I think there's definitely value and understanding how that gets compiled to CSS because I think that's where you can run into a lot of performance issues and have massive CSS, cloud, CSS stylesheets. And at the level of selectors that you're you're using that you don't think about when you're writing something because you're trying to write something that's clean, but then it compiles into something that's really shitty, that kind

</p>
<p><strong>Ryan Burgess</strong><br />
of goes to even what we were talking about on the transpiling episode, is that be aware of what's being transpiled? Like what the code actually looks like,

</p>
<p><strong>Derrick Showers</strong><br />
after the fact?

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, I think that's a really good point. Because one of the things that I did when I started writing Sass, and less was I would nest compulsively because I love to organize things. I like to know exactly where in my files to look. But then as you start to use it, you realize more and more that it's a huge performance hit to like rendering and painting in the browser. And I think maybe that's where one thing I would say to new CSS writers is just be aware that there is a performance aspect to CSS. It's not just about being pretty or well organized or anything like that, but it will affect the way your page renders on the road. And that's why you have to be mindful of the nesting, the IDs and the types of selectors that you use.

</p>
<p><strong>Brian Holt</strong><br />
I challenge that notion a little bit. I've Personally, like I've written Crazy, Stupid selectors. And for the most part, CSS performance has never been a sticking point. For me, it's always been, I've had too many images, I've had crappy JavaScript, I've had long running JavaScript functions or anything like that. But like, throwing any universal selector, even on pages with 1000s of elements has not slowed it down, like brought browsers these days, for the most part. CSS, I don't believe is going to be your bottleneck,

</p>
<p><strong>Derrick Showers</strong><br />
I LinkedIn, we're rebuilding our entire site, our desktop site, and part of it is the fact that we have a massive CSS file. It's like 3.5 megabytes. Holy shit. So that's, that's one thing that we're trying to figure out is how we kind of lazy load that and break that up. But one of the other problems is just the amount of selectors that were being used. So the page is the exact statistics on numbers, but it was it was a decent amount enough that we're rewriting our entire CSS in bem style so that we have less selectors, but it was it was a definitely as something that we had to spend a lot of time on re architecting

</p>
<p><strong>Ryan Burgess</strong><br />
Can you explain what BIM is

</p>
<p><strong>Derrick Showers</strong><br />
sort of. So it's pretty, it's basically I think it's just more or less just a way of titling your class names so that instead of using like, selectors, you're kind of still it's still it's kind of the same when you're writing your sass. But it's you're using underscores and dashes to kind of like to mock using selectors here. But

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, it's like more of like a paradigm more fit for like how we're doing more components. So like styling components, so like, all your classes are like, kind of targeting certain components rather than generic pages of selling

</p>
<p><strong>Brian Holt</strong><br />
those stands for block element modifier, right. And so the basic idea is, instead of having like three different selectors, I say you say like this is inside of the navigation, which is inside of the men, the drop down, which is inside of this, instead of having three different selections that you have one selector, right, and then you have different class entirely for the is active is not active, right? Like there's, it's just a paradigm for naming your classes. So you have less selectors. And you have these really long, ugly looking class names.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, I was just gonna add to that, as I hate them. They're so ugly, but I mean, I get it. But yeah, can you use underscores or dashes to break them up? And it looks ugly? In the code I just saw, there's really like, but I've seen it done really, really well. I think if companies are on board, and you have everyone on board, writing that I think it can be really powerful. But I think the areas that I've struggled with is, I've seen people do it sometimes in a company. And they'll be like one or two engineers doing that the rest of the team's not doing it. And so I feel like if the whole tire team is not on board on it, then it's kind of Yeah, it kind of falls apart at that point.

</p>
<p><strong>Jem Young</strong><br />
I think it's a that's a good point you made first earlier point, I'm with Mars performance is absolute there, knowing what will offload something to the GPU, especially animations and what won't is crucial to making like a good 60 frames per second page, but them in any other sort of kind of way. You want to name your CSS, it doesn't matter unless the whole team is consistent. Otherwise, yeah, I've seen the same thing. And it's just you get like this hodgepodge of naming conventions, and some things are in line perfectly. Some things aren't. Yeah, just use the same convention across the whole file doesn't matter what you use.

</p>
<p><strong>Ryan Burgess</strong><br />
I like the naming convention, either bam, or even just sometimes what I appreciate is people using deciding Do you split up words by CamelCase? Or do you do by dashes or underscore? I do really like the consistency, it drives me nuts, when all all different? I am very anal about those types of things. And and I know that's hard. But I think at the end of the day, your team has to buy into it. If no one else buys into it, then it's you're just trying to find something that no one really cares about.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And another thing that you that can help with that is I know we use it is like a linting tool for if you're using Sass or Less. I don't remember last time, I assume there's something I don't know how detailed it can get.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know if you can actually get pretty detailed. Yeah, on what you're calling your selectors and everything.

</p>
<p><strong>Brian Holt</strong><br />
So Ken linter specifically thought,

</p>
<p><strong>Ryan Burgess</strong><br />
that's pretty cool. That would be helpful. So at least at that point, if your team buys into it, and everyone's on board, you can have a linter running and then to least check that

</p>
<p><strong>Augustus Yuan</strong><br />
does anyone here actively use them? I'm just curious. i We don't

</p>
<p><strong>Brian Holt</strong><br />
place to my personal projects, but okay, and I just kind of stuff giving

</p>
<p><strong>Ryan Burgess</strong><br />
a you're the only engineer on it. So that's probably helpful.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. When it comes to like styling conventions, and all these different things like these people taking highly engineered approaches to it. Like my theory has always been write CSS to throw it away. Which like, offends a lot of people. So and probably rightfully so, but

wrong. You walk in the wrong door. No, but I said in the sense of just take what we're doing at Netflix, we write lots of AV tests, lots of them fail, lots of features never make it so if you can write CSS that's easy to cut out and just throw away so you don't have this great amount of bloat. That has always been my biggest problem at in almost every code bases. There's been so much dead CSS or partially dead CSS, or things that like were cascading like four levels deep before it was a to actually apply the right style, like, if you can actually actively cut out the pieces of code that are no longer in use, you're gonna be in a lot better position than if you use if you if there's kind of more secondary needs, in my opinion,

</p>
<p><strong>Derrick Showers</strong><br />
one thing that that we do on my team that that helps with that is I mean, it depends on what framework you're using. But most frameworks have the, the concept of components. So if you keep your CSS in your components, kind of the same structure, that's what we do. And that helps, because then if you remove a component, you just remove the associated, you know, CSS,

</p>
<p><strong>Ryan Burgess</strong><br />
that's awesome. I think even naming them the same is very helpful if this CSS goes along with this component. And yeah, you're right. So if you're running any b test, and you're like, alright, we no longer need this component anymore. Just delete the same file at the same point, you can have like a CLI tool that does that for you which so you're nice, good covering your bases, deleting something you no longer you

</p>
<p><strong>Derrick Showers</strong><br />
no longer need to style,

</p>
<p><strong>Augustus Yuan</strong><br />
no. Chairs.

</p>
<p><strong>Jem Young</strong><br />
I think we said style more than once. So just throw this out. People have used React, what do you think about inline styles?

</p>
<p><strong>Ryan Burgess</strong><br />
I will say I've I still don't know if I fully warmed up to it. I think there's some benefits to doing it. But or did we miss. I haven't fully warmed up to it. But at the same time, I remember not really liking JSX when I first started writing react. So I feel like once I start doing it more and more, I think it will get better. And I should just be okay with it. I like the idea that everything's coupled together in one component. So writing inline styles and react, I think is probably a good idea. So I think

</p>
<p><strong>Augustus Yuan</strong><br />
there's like things like Aphrodite that kind of encourage using like inline styles or something. I remember when react first came out, I feel like a lot of other people were this way, when they saw that slide. There's like this one slide where the guy shows a React component. There's all these inline styles. And everyone's like, I had the exact same reaction, I started doing more react and I think there is like a place for them and stuff. But if we can, like keep those decoupled, I still firmly believe that like styles like should be in one place. Logic styles. Cheers. Cheers. I ultimately think they should be separate. But there could be places where it makes sense.

</p>
<p><strong>Jem Young</strong><br />
I'm the same way I go back and forth all the time on inline styles.

</p>
<p><strong>Brian Holt</strong><br />
So like, let's, let's talk about the dream, right? Like, at least in my opinion, the dream, the dream of the 90s the dream of the 90s. The 1890s are live in Portland. That's an obscure Portlandia joke.

</p>
<p><strong>Jem Young</strong><br />
I think a lot of folks are a bunch of nerds. That's true.

</p>
<p><strong>Brian Holt</strong><br />
So the dream is that you have you have your components, it's kind of just what Derek was touching on. It's like you have your components, you have your CSS, they're married together, as soon as one is gone. It's just cut off. It's it's it falls off with the component, right. And there's a couple ways to accomplish that. You can do something like radium Aphrodite, right? Where it's actually your styles in J S, cheers. This is gonna get or you can do something like with, like Webpack can do your import statements for CSS. So you have like your your style, it lives in the same directory as your

</p>
<p><strong>Augustus Yuan</strong><br />
cheers, cheers. We did not foresee this.

</p>
<p><strong>Brian Holt</strong><br />
Okay, so your CSS lives in the same directory as your components, right? And you can import those in using Webpack. Right? Like, to me, that's the dream where like, you can just tightly coupled your CSS to the markup that it governs. And as soon as that markup goes away, then the CSS goes away. And so whatever tool helps me get there. I don't really give a shit what it is right? Like, to me, that's what makes it worth it.

</p>
<p><strong>Jem Young</strong><br />
And one of my issues that I see is happening in modern front end world is that it's getting more complicated. It's getting more complicated than it should be. For instance, I've used CSS modules, which are fantastic. But it really complicates up the build, like we had some issues getting to work on server side rendering and getting it to spit out properly. Yeah, as Brian hold it and Augustus and everybody not in the room. It's like, Yes, they've been there. And the point of CSS should be the simplify things, because we can always do things with inline styles in HTML, if we wanted to do it old school. Cheers. CSS is too complicated.

</p>
<p><strong>Ryan Burgess</strong><br />
Why is it so complicated? Jem,

</p>
<p><strong>Jem Young</strong><br />
thanks for asking. This, we were talking earlier, but the complication with CSS modules, and then tried to get that with server side rendering. And a lot of people in the room who have worked with that pretty much everybody is agreeing with me, because it's very complicated, then we're adding all these extra tools in there. And at its core, CSS is supposed to be really simple. It's just dead simple styling, make your page look like this one way. But we've added so much complexity on top of that, and sometimes I wish we just pull back to the way things were kind of old man gem here. Like let's go back to the good old days.

</p>
<p><strong>Brian Holt</strong><br />
I actually

</p>
<p><strong>Ryan Burgess</strong><br />
but I disagree. I mean, I agree that it adds way more complexity, you have to have some sort of a build tool. Now if you're using a CSS preprocessor But I think the whole reason we got something like CSS pre processing was because CSS sucked, like you couldn't do a lot of things. You couldn't write functions, you can have a variable, there was a lot of things that you just couldn't do. And so I think it was the right thing to do it. I realize it adds more complexity than it would just normal CSS, but I think it was the right move in to give us a little more flexibility. And so we can scale our code a little bit easier.

</p>
<p><strong>Brian Holt</strong><br />
I disagree. We disagree with me. I agree with told man, Jem. Like, I think CSS doesn't need to be that complicated. I hate Sass script. Like, I think Sass script is just a scourge on the front end developer. I think it adds weight, like you don't need your styling to be Turing complete, in my opinion. Don't get me wrong. It's a marvel of engineering. Like I think they do a phenomenal job. And I just don't want to use it, right. Like, I think it's too much. I don't need a for loop inside of my CSS, I just need to be able to write like, Okay, this needs to float to the left. And like, let's call that good.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, there's certain things though, that I've definitely written some mixins for that have saved me a lot of headaches in the long run, where I've been able to use a mixin over and over and over again. And it works.

</p>
<p><strong>Brian Holt</strong><br />
Okay, but let me ask you this have mixins saved for headaches or caused more headaches for you? Ah, don't lie to me. Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
no, I'm actually trying to be honest. And I think honestly, they've probably saved headaches. And they've allowed me to scale my CSS and not have to think about some of the things that are happening. And I enjoyed writing a mixin.

</p>
<p><strong>Brian Holt</strong><br />
For me personally, having maintained a previously large Sass, because code base extends, and Sass script and all these features cost way more headaches, they bloated, our UI, actually ripped out all these different pieces of our code, we cut down our bundle size, it was more than 50%. Right? Like, we just had so many problems. And maybe I'm just really bad writing Sass also potentially true. But when Ruby is involved, don't ask Brian.

</p>
<p><strong>Ryan Burgess</strong><br />
Fair enough. I hated when Ruby built your Sass files. That drove me nuts. It was Slow as hell not really a big Ruby fan anyways. But when they move to lib, SASS, that was huge, there was a lot faster. And I do agree. I remember being on a project that was using Ruby Sass, and it was very, very, very slow. And it was really painful. Actually, I'm

</p>
<p><strong>Augustus Yuan</strong><br />
kind of curious, because you know, there's post CSS now and which is, I guess, kind of like, you guys can still do the old, old good fashioned way. But then like it have some like this, like post processing power, like vendor prefixes. And so what are your guys's thoughts on that?

</p>
<p><strong>Jem Young</strong><br />
I like post CSS, I think the plugin systems are really powerful. It does add complexity, which is, to me not only think about, it's not so much complexity, it's just separation of concerns, like I don't want to do any sort of a lot of conditional logic in my CSS or things like that. If I need to do that, I should just use JavaScript. That's what that's exactly what it's there for. But with the advent of like, less, and Sass, and all the post CSS and all these really powerful tools, it just complicates our code. And as engineers, our first instinct would be like, oh, I'll just write a function to hack around that. But that's not the way we should do our styling, we should do styling should be styling should be styling,

</p>
<p><strong>Ryan Burgess</strong><br />
choose times. Yeah.

</p>
<p><strong>Jem Young</strong><br />
Everybody's looking a little there's

</p>
<p><strong>Derrick Showers</strong><br />
maybe I'm not clear on what you're saying. But I actually think that using mix ins, and that kind of stuff, simplifies your code, because of what you said is it separates area of concern. So like, you can have a team that's essentially creating like a Bootstrap or a library or whatever, and then you don't have to worry about, you shouldn't have to worry about at that point, if you're using that library, you don't have to worry about necessarily testing in all browsers, like we were saying in the beginning, like you can kind of assume that that's already been done for you, it just saves a lot of time. And it kind of helps with people that don't really like working with CSS. So you can just, you know, there's really not a lot of CSS you're writing if you're just using mix ins,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah. And even at that point, too, is if something was wrong in the mixin, or like something was wrong in the code output. If you're using one mixin you can fix that. mixin and then it just read trans piles, everything, which is great. I think. So I think there is some value there. But I love that we're all on opposite sides of the fence.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, but I've had issues with where some asshole and often some, actually, and I'm Yes, well, Brian, well, no, I was actually gonna say future Brian is the asshole that particular case, but also Ryan Burgess. Please tweet at him. For some acid goes and modifies the mixin. And he fucks up the rest of the site, he or she were were equal opportunity for fucking up the entire site. So like, I've had problems that way with it too.

</p>
<p><strong>Derrick Showers</strong><br />
But what if you treat it more as a framework like you would JavaScript framework, right? Like

</p>
<p><strong>Brian Holt</strong><br />
I refuse to.

</p>
<p><strong>Derrick Showers</strong><br />
That's, that's what we do a lot of and so that our CSS library is is its own repo. It's it has its own team that's you can contribute to if you want to, but you know, those people are going to review that code. And I guess it could slow things down a little bit. But you can always override. So

</p>
<p><strong>Ryan Burgess</strong><br />
you have engineers actually owning the CSS like and then other engineers on the JavaScript didn't really know. I mean, you know that if you're

</p>
<p><strong>Derrick Showers</strong><br />
an app developer, you're still writing CSS, but you're zooming this library that is a lot easier to write CSS because you're essentially just applying mixins or classes that Part of this library will actually

</p>
<p><strong>Brian Holt</strong><br />
sorry, Derek, most of us don't work at Microsoft. So we don't have. So we don't have this size to support a framework team for our CSM. Sorry.

</p>
<p><strong>Derrick Showers</strong><br />
I still have a couple more weeks.

</p>
<p><strong>Ryan Burgess</strong><br />
Derek's holding on to that one.

</p>
<p><strong>Jem Young</strong><br />
I think ultimately, the problem is when CSS was first invented, way backward, I don't know what I could look this up, but I'm lazy. But when CSS was invented, there's a very clear goal in mind, we need a way to style elements on a HTML page where you can't do that. Okay, so CSS cool. We've so far outgrown that use case that all we have is this one very archaic language, two way of describing like very complex interactions with the DOM. And other people, there's two sides, there's me and Brian are like, No, we just keep it simple. Keep it simple, and then evolve around that. And there's the other side, I guess this in the rest of the room, where they're saying, No, we should build a full fledged thing on top of that. I think we should just if it's not possible at this point, but we should just have something other than CSS to describe the way we layout and design elements on the internet. It's just

</p>
<p><strong>Ryan Burgess</strong><br />
we could create something that is so much better. I'm all for that if we can move away from it. Great. Let's move away from CSS. I think that's thank preprocessors was one step towards that direction. But it was not really a solution for the longer term. So

</p>
<p><strong>Brian Holt</strong><br />
let me tell you about what exists and what's coming. Has anyone here heard of CSS Houdini?

</p>
<p><strong>Augustus Yuan</strong><br />
I have heard of it, but I forgot what it was there. So

</p>
<p><strong>Brian Holt</strong><br />
mine's about to be melted here. Okay. So it's a new spec coming out. I believe Mozilla has an experimental build of it. God bless Mozilla. And basically, what it lets you do is it lets you define your own brand new CSS rules. And it lets authors to find new CSS rules that you can. The example that they they brought up this is that a conference I attended last year was display radial. Somewhere you had

</p>
<p><strong>Ryan Burgess</strong><br />
heard this, that's actually in the spec, right.

</p>
<p><strong>Brian Holt</strong><br />
But no, it's not. This is just the example that they made for CSS Houdini. Ah, so you could basically write some javascript rules like, Okay, if you see display radio, this is what the layout engine should look like. And so it basically like made a circle around instead of like, you know, all the different kinds of display we had. So that's what this is, it lets you define your own rules. If one really picks up and it's really awesome, then the browser vendors can say, Cool, this is awesome. We'll just read it into the spec. And now display radio is part of the spec, right. But that allows us the developers to push the envelope forward instead of just depending on you know, whatever working group to just lob cool shit us and hope it sticks.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that too. Because it's actually pushing the bar of the spec to like, I think that that's really important.

</p>
<p><strong>Brian Holt</strong><br />
It's like Babel, right? Like, we try out cool shit with Babel. If it doesn't work for us, then it doesn't make the JavaScript spec like object at observe, right? People thought that was gonna be amazing. And it turns out like, this is actually a really, really bad idea. And we took it out of the spec. So it's just kind of like pushing that onus on to developers, like, hey, go out and try this. See if it's cool. If it's not cool, the more we won't add it.

</p>
<p><strong>Derrick Showers</strong><br />
So can you kind of do that already with SASS just going back? No,

</p>
<p><strong>Brian Holt</strong><br />
absolutely. No, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you can't I see what you're saying.

</p>
<p><strong>Derrick Showers</strong><br />
I'm somewhat joking. But like you, you can create something, some sort of mixin or whatever, right? That that allows that somebody who's like, I don't know, putting together whatever. And then like, every all the other developers can use I know, it's not the same as what you're saying. But I just feel like, that's the advantage of using something like SAS unless I kind

</p>
<p><strong>Brian Holt</strong><br />
of see what you're getting it but you're just wrong. Putting the basically the onus on someone else, right. Like, I'm totally keen with putting the onus on someone else you can ask anyone that I work with is like, Hey, do you want to do that for me? No, I think that's a good idea. But I think in particular, this, this keeps what we as web developers do simple, right? We just say Display radio, right? And that should just works, right? And we don't have to say like, you know, SASS extends radial class and add this class to all of my child classes, right, like, none of that. Just crazy horseshit,

</p>
<p><strong>Jem Young</strong><br />
I think the part that we hopefully we all agree as developers is CSS is it works. It's not great, but it works. The part that gets us is the cascading part. And that's 99% of my issues have been from a cascading part, not actually with CSS. Do we have an idea for how would we fix that if

</p>
<p><strong>Brian Holt</strong><br />
we could avoid the cascade? That's yeah,

</p>
<p><strong>Jem Young</strong><br />
that that's actually good advice,

</p>
<p><strong>Augustus Yuan</strong><br />
just like, and this is partly due to the cascading problem, but like, just CSS doesn't really scale well at all. I mean, that's why I really like Sass like it's made following SMA, CSS, like spec, like, like really helps handle that.

</p>
<p><strong>Ryan Burgess</strong><br />
That's actually a good segue. And we're talking about building CSS and architecture for it. What are some best practices you use when you're building the architecture for your CSS and structuring it?

</p>
<p><strong>Jem Young</strong><br />
Don't use important ever.

</p>
<p><strong>Ryan Burgess</strong><br />
It's an important advice not to use. Yeah, important.

</p>
<p><strong>Jem Young</strong><br />
I have seen especially legacy code bases. So much important. It's like a go to Line and CSS is important is you can skip all the other rules like No, screw the cascading part, this is the thing that counts. And it just, ah, it's so bad. That goes

</p>
<p><strong>Ryan Burgess</strong><br />
back to why I hate the IDs.

</p>
<p><strong>Brian Holt</strong><br />
So it's over. So I'm going to be contradictory to both of you, because I'm just being like an asshole tonight. Classic. So with with important, if something is literally important, right like this absolutely must show up and you want to denote it that this is actually important and it must show up. Right then at that point, you're not only documenting this line is is absolutely essential, right? You also have to be following the idea that avoid the cascade, right? Because that where important becomes a problem is with the cascade, right? If you're expecting something to cascade and it doesn't a cascade, right and important is a really bad idea. But important as a documentation tool can be important.

</p>
<p><strong>Ryan Burgess</strong><br />
If it's just a documentation thing, you can comment in your CSS.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, you can but who updates the comments, right?

</p>
<p><strong>Jem Young</strong><br />
99.999% of times important, never for doing work. Never be used. Yeah, it's usually an override because someone was too lazy to go up the chain.

</p>
<p><strong>Ryan Burgess</strong><br />
And that's probably why Brian likes it. He's been.

</p>
<p><strong>Derrick Showers</strong><br />
So one place I've seen it used and I hate but I can I guess kind of see the point of it is in going back to the whole, like having a library. And if you want to enforce something that you do not want your developers to override, I think I've seen it like for like contrast things to make sure that they don't ever either, you know, as app developers aren't overriding colors, because they might think that that's fine. But it's you know, it's accessibility makes it important to, to use certain colors. So it to me that's a pain. I feel like as a developer should be able to if I have to override it, I should be able to override it. But I guess that's one, maybe

</p>
<p><strong>Ryan Burgess</strong><br />
you should structure it better so that you don't need it. But I guess I kind of like that argument as if it's an accessibility thing. And you're trying to avoid ever affecting that and breaking that I could see. Yeah, that's fair.

</p>
<p><strong>Brian Holt</strong><br />
So I guess my point is like, it has its place hover I have ever yet to see someone uses place. Right? Well, it

</p>
<p><strong>Ryan Burgess</strong><br />
is there for a reason it is we just haven't found I don't think there's a valid reason.

</p>
<p><strong>Brian Holt</strong><br />
So and then I want to pick on your never use ID Yeah, go

</p>
<p><strong>Ryan Burgess</strong><br />
for it. Yes, please

</p>
<p><strong>Brian Holt</strong><br />
do is something in your app is absolutely unique. Like an ID should be and would be Yeah. Then I'm okay. styling on it. Cheers to

</p>
<p><strong>Ryan Burgess</strong><br />
Your to yours. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
But in that case, would it be better just to add a class and size that way?

</p>
<p><strong>Ryan Burgess</strong><br />
I'm 100%. believer of that is why not just add a class? Why?

</p>
<p><strong>Brian Holt</strong><br />
Why do you have to add a class?

</p>
<p><strong>Ryan Burgess</strong><br />
What Why do you need an ID?

</p>
<p><strong>Brian Holt</strong><br />
Why do you need an ID?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, why not just a class, the class can be added removed. It can be used other places? Why an ID it's your enforcing uniqueness. Right? True. But I feel like the majority of times I've used CSS, there's rare that one thing is so unique, or it will be unique for a short period. And then I add another piece of code further in the application that needs it. And now I can't reference it. Because it's an ID. I'm honestly a big believer in IDs are just useless in your CSS.

</p>
<p><strong>Brian Holt</strong><br />
What about the Netflix player? Right? Yeah, you're never gonna have more than one player in your screen? Right? That's gonna have an idea of some sort.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, you could technically have multiple players, you probably don't want to, but you could.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, but you don't want to right, fair enough. So you're, you're enforcing uniqueness. Bam, mic drop, I'm gonna drop

</p>
<p><strong>Derrick Showers</strong><br />
this. There's a difference between styling it with an ID and using an id like, Yeah, I agree using an ID for something that's unique on the page is semantically makes sense. And should should be there. But

</p>
<p><strong>Brian Holt</strong><br />
why can't you say?

</p>
<p><strong>Jem Young</strong><br />
So I think it's convention, if you're having I use IDs in my personal project, because I'm lazy, and they work. But again, but my entire page is called using IDs, not classes. But if you're using it for this one thing, and then classes for the rest, you break the entire convention. That's probably my main issue with IDs, you

</p>
<p><strong>Brian Holt</strong><br />
can just include IDs in your convention, you've just chose not to.

</p>
<p><strong>Jem Young</strong><br />
But that means sometimes for new brand new developers, sometimes I'm going to use classes, sometimes you can use IDs and then

</p>
<p><strong>Brian Holt</strong><br />
you're going to have a lot when you're learning to go ahead and just like test these classes, right

</p>
<p><strong>Jem Young</strong><br />
when you're learning here.

</p>
<p><strong>Ryan Burgess</strong><br />
Now I'm watching for Brian's barre class. So when I see an ID that style I'm like, no, no,

</p>
<p><strong>Brian Holt</strong><br />
I noticed in the past PR I don't I don't do it at Netflix.

</p>
<p><strong>Jem Young</strong><br />
Mars, what are your thoughts? You're actually Mars is our on our team, our CSS experts? So yeah,

</p>
<p><strong>Mars Jullian</strong><br />
I know I wouldn't use the word expert I would say maybe just the person who cares the most about it.

</p>
<p><strong>Jem Young</strong><br />
Which makes you the expert

</p>
<p><strong>Mars Jullian</strong><br />
expert I guess. I mean, I think I agree with I can't remember whoever said about specificity. It was probably me Yeah. Oh man, John. And I don't think it's so much about a convention is just if you're using classes everywhere you avoid potential specificity issues down the road, which means you can avoid the like Bang important wherever you're going to end up like using it. And I think there are use cases for bank important but the minute you have bank important because you've got specificity issues all over your application. That's a problem. The important really loses its meaning because you're using it everywhere just to make your app work. And that's kind of my problem with IDs and important and sort of how they go together.

</p>
<p><strong>Derrick Showers</strong><br />
Well, so I think just to follow up, you need to drink more because you are able to say specificity.

</p>
<p><strong>Brian Holt</strong><br />
Did a good job. So styles. Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
So I think one thing I've always actually really fell in love with for structuring CSS is the smacks or whatever you want to call like SM a CSS. It's a small book that really talks about how to structure your CSS like in a large project. What I really like about it is how you split everything up into modules, and your your layout, everything has a order of operation. And I think it actually helps for not having to overwrite things and adding importance. And actually, this is something that we really used with our SAS implementation at Evernote when I was there. And actually Augustus and myself and one of our friends, we lun Hoon, had wrote a like SAFS scaffolding project that's called sassy Sass, obviously, it makes a lot of sense. Yeah. But it follows smacks as a great logo. It does actually, it's like a cat and sassy cat looking logo. But I really like it, it structures everything into proper directories, I still use it, when I'm doing like a side project, I just spin that off and add that to my project, it saves me a lot of time and headache, and helps me structure my project a lot more. And I find everything is a very small modular, so to the point where we were talking about mean able to quickly remove something, if you're not using it, you can remove it, I think I've even written scripts where it will look for files that aren't referenced anymore, and just totally delete them from the project. So and I found that really useful as keeping things very small and modular and, and using them,

</p>
<p><strong>Brian Holt</strong><br />
I see where a lot of you are coming from unlike a lot of these issues. Particularly we've been kind of dancing on the issue of reusability. Right? Yeah, CSS, it's been a spouse for a long time that if you use a lot of classes, you get a lot of reusability out of your classes. And like I have followed the crowd because for the most part, filling the crowd in JavaScript has led me to pretty good places. So but I have found this one in particular has led me astray. And I go back to my mantra of like, optimized for delete ability. And optimizing for delete ability is synonymous with not being dry, right not being do not repeat yourself, meaning you repeat yourself. Geez, that was like three steps to get there. So I try and avoid the cascade. Always right. So that, that meaning that one particular thing is going to have at most two classes, right? It's going to have the class that it needs to style itself. And then it's going to have maybe some sort of like, is active modifier like that's it, right? So I'm not gonna have like Button, Button gray button, big button, large text button accessibility, right? Like, I'm not gonna go like seven buttons deep

</p>
<p><strong>Ryan Burgess</strong><br />
right? Elements are going to have all these dip 10 different classes on right? Because if I

</p>
<p><strong>Brian Holt</strong><br />
need to delete button large later, because it's literally the only place using button larger than like, what the fuck am I doing? Right? So I'd rather just have like 100 different classes, right and one for each different button on the page, right? And then as soon as 50 Those go out of scope, then I get to delete 50 classes.

</p>
<p><strong>Augustus Yuan</strong><br />
Now I'm on the same page with that too. Like if you're like cluttering, like with a zillion classes, like I think there's something wrong, but if you're like putting it on an ID, I don't know.

</p>
<p><strong>Ryan Burgess</strong><br />
Why is that different? I?

</p>
<p><strong>Augustus Yuan</strong><br />
To be honest, I only use IDs when like, I need someone for like an anchor point, right? Like you click it and then it can go straight to that parser. That's nothing to do with this. Exactly. And so it's like there's nothing related to see styling. I feel bad bringing this back up. I was like,

</p>
<p><strong>Derrick Showers</strong><br />
man, we should have made our keyword ID.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, we would really be drinking really triggered. So we've talked a lot about transpiling, our CSS using preprocessors. What are the pros and cons that I know it's come up a little bit, but I would love to kind of touch a little more on that. Like what are some benefits to it? And what are some cons on it,

</p>
<p><strong>Mars Jullian</strong><br />
I'm actually going to go back to the reusability point because one of the reasons I love Sass and Less as well I've done I've I've called them fully formed languages yet but they're closer to languages than CSS ever will be is that in terms of reusability I sort of see where people are coming from with reusing classes, you've got like multiple classes on a button like one that makes it active, large, whatever, but I'm kind of more in the camp of if you want to reuse styles. So if you want to do that, then I like lessons a lot because mixins I don't love extend, extend really not so great. But in terms of sharing that information between your classes. I think I like mix ins a lot in terms of functions. I think it's more straightforward. What's going on in a particular area of your application. You see, you know, whatever component you're using, it's got a class like button, continue, like Okay, so what's happening with button continue, you got a button continue and you're like, Okay, it's using this mixin that makes it red and large. Also later down the line. The reasons I like mixins a lot is because if you're going in and editing the styles, styles

</p>
<p><strong>Brian Holt</strong><br />
this is a good brand.

</p>
<p><strong>Mars Jullian</strong><br />
For going in and editing that CSS less, or SASS or whatever, you don't need to know the context, but about all of where that class is being used. And in a mixin, it's a little bit easier to sort of figure that out. Because you're sort of searching in one section of your application in your CSS, your last year, SASS versus checking everything, your HTML, your JavaScript, your CSS, your mix ins, all sorts of things. Okay. And

</p>
<p><strong>Ryan Burgess</strong><br />
no, I will agree with you is like, I think that's one thing that less, whatever preprocessor you're using, is it allows you to make things a lot more smaller pieces of code more modular in the fact that you can add, remove or change something. And multiple files can then reference that mixin and all referencing, you can make that one small change, and it will apply to everything. And I do like that ability. And it kind of reminds me a lot more of how we're starting to, you know, structure JavaScript more.

</p>
<p><strong>Derrick Showers</strong><br />
I think, though, I totally agree. I think it's really nice and clean. But I do think that there's, there's some sort of balance that you have to have, this is what I was saying in the beginning with making sure that you know, what's actually being output. And so for instance, if you have a mixin for button, and it has all these, like pseudo classes associated with it, right, and you have on every single instance of your button, you're doing like a continue button or like, and then you're adding that button mixin, you're now generating a lot of CSS every single time. So I mean, so maybe there's like a balance, because I totally agree. Like, I think it's cleaner, the code looks cleaner, it makes it more modular, it makes it easier to clean up, but and remove CSS, but it does, I think there's just make sure that you check what is actually going on when you transpile it to,

</p>
<p><strong>Ryan Burgess</strong><br />
which can make it harder to debug. I think that's one con is that having that transpiled code can make it harder to debug, I think we even said that about JavaScript is like you're using Babel, whatever it is to transpile. Your JavaScript is the same thing with CSS that makes it harder to debug.

</p>
<p><strong>Mars Jullian</strong><br />
I think that's interesting that because you kind of get to trade offs, right? It's a little bit more straightforward and more developer friendly when you're using. you're reusing code and make sense and that kind of thing. But it's also like you said, it's really hard to debug and you see the output. And as a developer, like, Where on earth did this even come from? Because it's not there in line in my style sheet.

</p>
<p><strong>Derrick Showers</strong><br />
If you went into the break of style sheet, I

</p>
<p><strong>Augustus Yuan</strong><br />
think, all right, well, correct me if I'm wrong, SAS and let's have like source maps, right. Tell it to you. So I think that helps with it. But it does create a lot. I mean, how often are you going to compare this source? Yeah, yeah, that's true. I mean, you still should check the output there. I totally agree.

</p>
<p><strong>Derrick Showers</strong><br />
I mean, I'm not saying you always have to check your CSS output. It's kind of the same thing we were talking about with transpilers. I think it's just not knowing. So maybe like, if it's an element, like a button that you use everywhere. Maybe that's one instance, where you have one class that's, you know, a button and then you have mixins, that maybe are like, enhanced buttons or something I don't I don't know if that's a great example. But I think there's just knowing where there's trade offs need to happen.

</p>
<p><strong>Augustus Yuan</strong><br />
No, I totally agree.

</p>
<p><strong>Jem Young</strong><br />
You mentioned some downsides. But another issue I have with mixins is just indirection in that, I need to have this mixin is doing Oh, this makes sense. Using two other makes sense. I can see what they're doing. And then you can actually go pretty far down the rabbit hole before you figure out oh, this is what actually is been outputted.

</p>
<p><strong>Ryan Burgess</strong><br />
See, and I don't I don't like that I don't like mix ins on mixin. Zone mixins. I feel like a mixin should be fairly contained. I think you're right, it gets so much more complicated when you're going down and down and down. And you're like dependency dependency dependency.

</p>
<p><strong>Mars Jullian</strong><br />
I think at that point, I would actually start to question the designer and say, so why does this need to be so complicated? You can't write a mixin that? Well, exactly. If you can't write a mixin that's so self encapsulated, you're like, Okay, so what is the use here? Is it just, you know, the sugar on top, but that's a whole other rant.

</p>
<p><strong>Jem Young</strong><br />
Oh, that's a good point. Who in all our teams who does the CSS because sometimes it is the designer, some people it's the the engineer,

</p>
<p><strong>Ryan Burgess</strong><br />
I've never been in a company where the designer actually does this CSS, I've worked with designers the pull up Chrome Dev Tools and they'll start changing things and say, hey, I want this and they'll you know, change the values and everything. But I've never actually worked with the designer who actually writes the CSS that's in production. I've had

</p>
<p><strong>Brian Holt</strong><br />
someone tell me that like the Dreamweaver CSS suite at least this is somewhere for me to like, I can start with this

</p>
<p><strong>Ryan Burgess</strong><br />
I would actually be on the opposite side of that is like I would I feel like I'm hacking or I'm taking some hack together version Dreamweaver exported and then I have to now fuck around with to try and figure it out. I don't know. I feel like it'd be more of a headache.

</p>
<p><strong>Derrick Showers</strong><br />
I think I think Brian you make a good point about that one one thing that would be very helpful with the Dreamweaver output is getting the colors and the font size and stuff like that so many times I get specs from designers and like they spend all this time creating these specs but they're not any of what I need. Like they'll do like spacing between bottom of like the G or whatever you know and like you but what I actually need is you know the line height number and you know, that kind of stuff. So just outputting that Dreamweaver output or whatever, you know, whatever they're using is probably would be helpful for Getting those values.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think if you can get your designers on a page, we've decided what the, across the board what the line height is, even if it differs between different pages and everything, but if you can get consistency around that you can kind of write a baseline, and then you're just in those components or whatever you're writing, you don't have to change it, you just inherit what's actually already set.

</p>
<p><strong>Derrick Showers</strong><br />
I totally agree. But we've tried this. As long as I've been at LinkedIn for two and a half years, we've tried this. And what happens is, somebody creates a standard, and then designers create the product, and they're like, no, but this situation is different. You know, this line height needs to be different, because it's just you know, and then they make up 10 reasons why

</p>
<p><strong>Brian Holt</strong><br />
this beautifully demonstrates the ultimate point of like, all my ranting here, like CSS is paved with good intentions, right? Like, we have all these good intentions of being reusable of like, using the same line heights using the same 11 A fucking Grey's right like 16 Shit 16 Fucking Gray's, right, like, we all have, we have these great intentions of like these best practices that we aspire to. And yet we never ever meet them. Does anyone here feel like they've been in like a perfect CSS code base before or even like a really, really good.

</p>
<p><strong>Mars Jullian</strong><br />
Never say that also, in some of those code bases, there's multiple developers. And as you can tell from tonight, we're all really opinionated around how we're trying our CSS. So all of the CSS that goes into it, especially, you know, outside of a personal project ends up being really opinionated and doing things in four or five different ways.

</p>
<p><strong>Brian Holt</strong><br />
Absolutely. Like this is this comes back to my point of why I'm totally right here and everyone else is wrong. Is like optimized for throw away, right? So like everyone can do this shit their own way, because we acknowledge the fact that like, this shits just not gonna work like we, we do not have an answer for this. So at least we are able to throw away the shit that doesn't work anymore.

</p>
<p><strong>Ryan Burgess</strong><br />
I think as long as you plan to be able to throw away easily, I think that's actually a good practice.

</p>
<p><strong>Brian Holt</strong><br />
You don't end up with 3.5 megabytes, like Microsoft over here. That's,

</p>
<p><strong>Augustus Yuan</strong><br />
especially if you do like a lot of AV tests, which I know like Netflix has tons of like, I definitely see the value in like optimizing for cleanability.

</p>
<p><strong>Brian Holt</strong><br />
Like even read it. We didn't delete. Like we had huge stylesheets and we weren't running a B tests, right. So like, this is a problem. I think anywhere that you go that doesn't optimize for deliverability.

</p>
<p><strong>Jem Young</strong><br />
You've never we never we never settled the Great Debate less or Sass,

</p>
<p><strong>Ryan Burgess</strong><br />
I will write either or. And I think I want to hear everyone's answer on that I lean towards if I have a preference for any projects. I'm starting I choose SAS, and I don't have a really good reason for it. I just like it a little bit more. Do you like Dart? No. And I have written some Dart

</p>
<p><strong>Brian Holt</strong><br />
because they're not going to maintain lib SAS, they're not going to maintain Ruby SAS, they're moving to exclusively No, they're gonna maintain Ruby, but they're not to maintain websites anymore.

</p>
<p><strong>Ryan Burgess</strong><br />
That changes my opinion

</p>
<p><strong>Brian Holt</strong><br />
there. They're going to just start now.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, so that changes a little bit still right now as it is live Sass still works. So I'm okay with it. But Netflix, we use less and I have no problem with that. And the reason we chose that was because it was faster at the time because lib Sass wasn't around. It was Ruby Sass, and Ruby Sass was really really slow. It was painfully slow.

</p>
<p><strong>Brian Holt</strong><br />
Do you know that XKCD comic where the like Justin because their codes compiling? No. Oh,

</p>
<p><strong>Mars Jullian</strong><br />
I love that one.

</p>
<p><strong>Brian Holt</strong><br />
That like it's a famous one. You should look at the notes if you haven't seen it because it's fantastic. That literally happened like literally people on chairs jousting, because they were waiting for Ruby SAS to fucking compile.

</p>
<p><strong>Ryan Burgess</strong><br />
It would take minutes like it was painful. Like depending, I guess, depending on how big your project was.

</p>
<p><strong>Brian Holt</strong><br />
It was big because we didn't optimize for delete ability.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, there you go.

</p>
<p><strong>Jem Young</strong><br />
I lean towards less only because I've only ever used less my last three companies I've never written a lot of SAS my life so SAS could be awesome. Wouldn't know about

</p>
<p><strong>Derrick Showers</strong><br />
it. I'm the same way but the other way. I've never written less

</p>
<p><strong>Brian Holt</strong><br />
there's so similar so I went from using Ruby. So fucking Ruby SAS to using less and it I almost had to learn nothing. I didn't I don't think I know anything about less that was

</p>
<p><strong>Derrick Showers</strong><br />
I'm going to create my own CSS preprocessor is not going well IDs and it's going to be just next.

</p>
<p><strong>Ryan Burgess</strong><br />
I will use that.

</p>
<p><strong>Brian Holt</strong><br />
Please do

</p>
<p><strong>Augustus Yuan</strong><br />
it. Personally, I've done both because everyone else our web client team uses less and then our marketing website team uses Sass and then actually like some other teams start post CSS only post CSS. So I honestly I don't have a huge preference. I think both of them are better than CSS. So like I personally doesn't matter there's also like this one called stylus which looked really cool. Um, by I don't

</p>
<p><strong>Ryan Burgess</strong><br />
I looked at it in practice years ago, but I've never actually used in a big project.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, it's it's fine. If you ever use Jade.

</p>
<p><strong>Augustus Yuan</strong><br />
i Oh yeah.

</p>
<p><strong>Brian Holt</strong><br />
I didn't like Jade. If you've written Jade, it's like the CS version of jade because it's also from TJ Holloway Chuck right it's he wrote express your koa he wrote Jade he wrote stylus he wrote everything that you use a note and go

</p>
<p><strong>Mars Jullian</strong><br />
oh yeah, I'm on the same camp of I would use either. At first it was Which one's faster? And then when lips last came out, you know, obviously, SAS was a little bit, we kind of lean towards SAS, my old company. But at Netflix, we use less. And I haven't noticed any difference between the two, except for like, at signs versus dollar signs. So that was different. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, jumping between the two, it might be painful. But it once you get on board on one year,

</p>
<p><strong>Mars Jullian</strong><br />
I think they both kind of come up to an area now where they're sort of feature parity with each other. So it's not as confusing.

</p>
<p><strong>Brian Holt</strong><br />
So I like post CSS, because I conclude the bare minimum of things that I do want, I want variables, right? I want maybe one level of nesting, I can see the advantage of like one level of nesting. I want CSS next. So I can include, like, future coming specs, I can include autoprefixer. And that is it. That is everything that works is awesome, too. Yeah. You need some tool like autoprefixer. Right? And actually, you just really need autoprefixer I don't know if there's another tool that does it as well as autoprefixer. Like beyond that, like I have no sympathy for any other feature. But I'm excited for the day that like real CSS variables land, right like that is this feature that I'm very far and above I'm like, even beyond Flexbox because Flexbox is shit, right? But CSS variables where I can say like 90% minus 10 pixels. That's huge. That's gonna be a beautiful day.

</p>
<p><strong>Ryan Burgess</strong><br />
You can do math in your CSS. I love math. It's great. Calc,

</p>
<p><strong>Brian Holt</strong><br />
Calc, yeah, no Calc, Calc and CSS variables, right, those two together, it's just something magical.

</p>
<p><strong>Ryan Burgess</strong><br />
So as we wrap up today's episode, we like to share pics of things that we like or have found interesting on the internet. But let's go around the table and share today's pics. Maurice, let's start with you.

</p>
<p><strong>Mars Jullian</strong><br />
Okay, I have a serious and funny one. I'm going to start with a CSS reference.io. If you haven't seen it yet, I would highly recommend you check it out. It's a visual guide to CSS basically, which helps a lot when you're trying to figure out, you know how you can use something as opposed to MDN and if you're using W three schools, I recommend you use MDN for browser compatibility, and it just it tells you what it's doing, which doesn't show you so this this shows not tells. And then the second one if you're ever in the Bay Area, or especially if you're in the bay area around Christmas is the great Dickens fair. It's Dickensian London. And it's really fun and I recommend if you go you dress up because it's a much better experience. And also you need to buy a wooden mug because mulled wine just doesn't taste good or anything but it wouldn't mug.

</p>
<p><strong>Ryan Burgess</strong><br />
Brian, what do you have?

</p>
<p><strong>Brian Holt</strong><br />
I have a handful of CSS followers for sia for CSS type topics. I'm one of the CSS wizardry. Mr. Mrs. Mr. Mrs. murmurs, depending on how you pronounce it. Adam Morris fantastic guy. Unit. Kravitz. She's amazing. She's at Yuna Sarah Dresner I don't remember what hers is, Sarah, he does.

</p>
<p><strong>Ryan Burgess</strong><br />
He do?

</p>
<p><strong>Brian Holt</strong><br />
Yeah. She's amazing. Rachel Nemours, who just joined the edge team at Microsoft. And Jackson, black J x and b la CK. He was the CSS guy at Etsy. And now his I think he's just doing his own thing. But those are all people you definitely should follow. And then my last second pick, have one more pick after that is the city of Minneapolis. I just got back from Minneapolis. It's a phenomenal city. And if you'd like to drink, it's even more phenomenal. I had a great time. I always recommend going to Minneapolis when it's not the winter because it's fucking freezing out there. And then my third pick is I'm going to try and say some Scottish words here. So bear with me. The frog, cadaverous scotch, the 2016 release. It's phenomenal. Definitely try it.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, what do you have?

</p>
<p><strong>Jem Young</strong><br />
My first pick is sketch app. Anybody who hasn't used sketch, it's pretty straightforward to mock up things. It's great when designers use it because they can create entire mocks. And then I can take that mock and and export the CSS. So they use and I just dumped that straight into my app, if you configure things, right, so it's really, really powerful.

</p>
<p><strong>Ryan Burgess</strong><br />
Is that smart to export the CSS? Is it good?

</p>
<p><strong>Jem Young</strong><br />
No, it is not. It's not perfect. And there are some edge cases. But it's pretty good for basic things. Like I can get font and line height and things like that pull, I can pull that out. My second pick is the complete intro to react from Brian hold on front masters. It is the most popular front end masters course. And it's really it's a good, it definitely has anything bad to say about it. So I recommend that if you're a friend of masters, check that out.

</p>
<p><strong>Brian Holt</strong><br />
I did a v2 yesterday. So if you subscribe to front of masters, you can see v2 today. So thanks, Jem.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess that's what

</p>
<p><strong>Augustus Yuan</strong><br />
I first pick is code in with Google. So if you go to code in dot with google.com It's basically this contest targeting pre university students. And what Google has done is they've teamed up with 17 Open Source organizations and all these open source like projects have created tasks for students so I think that's like really awesome like it gets like, I seriously believe that all like people who are like, who want to be software engineers who just like dive into open source like that's like honestly the best way to learn He went so many like small things from that. So yeah, I would definitely check that out. My second pick, since we're talking about CSS, there's this site called CSS stats calm, although looking at it, I think it's down now. But it does have an open source repo that you can use. And basically it dives into your website that you've hosted, and goes through all your sales stylesheets and give us like a breakdown of what selectors you're using, like how many colors you're using. It's like, pretty awesome.

</p>
<p><strong>Brian Holt</strong><br />
So I just wanted to mention that two of the guys that I mentioned to follow Adam Morris and Jackson, black are the two guys that wrote it. So Derek, what do you have?

</p>
<p><strong>Derrick Showers</strong><br />
Mine are kind of boring. But whatever first pick is code pen. And I hopefully, or I'm sure a lot of people already use it. But I think it's a great tool for just trying stuff out a lot of them out there. But thin code pen kind of focuses more on the CSS and you can like share your and you can also get ideas for things which is cool. If you just search for code

</p>
<p><strong>Brian Holt</strong><br />
pens, awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
code pen is very nice. And look, or you paid for pro

</p>
<p><strong>Brian Holt</strong><br />
and I have not regretted for paying for pro me too.

</p>
<p><strong>Derrick Showers</strong><br />
And then my second pick is is a social network for neighborhoods. I don't know if you guys have ever heard of it next door,

</p>
<p><strong>Brian Holt</strong><br />
is it next door because my next door is the worst. So I

</p>
<p><strong>Derrick Showers</strong><br />
really wish that more people would use it except for Brian, I don't really care.

</p>
<p><strong>Brian Holt</strong><br />
It's because of people like Brian that you don't want to use.

</p>
<p><strong>Derrick Showers</strong><br />
But I I've used it for a while. And I started using it a little bit more frequently recently. And it's just a really good way I think to connect with neighbors, which is something I think we should do more of, especially like living in in a city. It's there's some really sketchy areas of my neighborhood. So I posted about one of those sketchy areas. And I got like all these comments on like, all things that have already been done by the city, and then plans in place and stuff like that. So the only problem is no one uses it other than like random politicians, local politicians,

</p>
<p><strong>Ryan Burgess</strong><br />
my picks, I have a GitHub repo that is called Art of a readme. And I feel like it's a really good one to really give some helpful tips on writing quality READMEs for your project,

</p>
<p><strong>Brian Holt</strong><br />
and I need the hat. Yeah, like, I

</p>
<p><strong>Ryan Burgess</strong><br />
feel like it's always that last minute thing that you're like, Yeah, I'll just throw something together. But a readme is really important. That's like the first thing people start to look at when they're looking at your project. And so that that was really good. There's a lot of really good tips in there. I think it's really worth checking out. And then I figured, well, I'll choose a music pick since no one else has. The recently the Hamilton mixtape album was released on Spotify. And I found a song I actually really did like from it from nos and it's called wrote my way out. It's good. Alright, thank you all for listening to today's episode, make sure to rate us on iTunes and Google Play, and subscribe to us on your favorite podcast app. And follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>. Tell us about your favorite things about CSS or things you don't like. And please don't use IDs.

</p>
`;
        return transcript;
    };