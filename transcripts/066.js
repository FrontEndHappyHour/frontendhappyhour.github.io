module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. In this episode, we're joined by Lauren and Kunal to talk with us about type systems in JavaScript. Lauren and Kunal, can you give a brief introduction of who you are, what you do and what your favorite happier beverages?


<p><strong>Lauren Tan</strong><br />
Hi, my name is Lauren, and I am an engineering manager on the Netflix studio engineering team. I used to work at a software consultancy in Boston. And I think one of the things I've really enjoyed about coming to Netflix is, you know, like the culture and the kind of work we're doing in the studio engineering world. My favorite drink that I'm having right now is our ciders. I'm not really much of a beer person. But I do like ciders. And I think my favorite cider is a Swedish brand called Kopparberg. They have this really great elderflower and lime cider. That leaves really strange flavors in my opinion, but they're amazing. Very refreshing.

</p>
<p><strong>Ryan Burgess</strong><br />
Now I want to try one. Hi,

</p>
<p><strong>Kunal Bohra</strong><br />
I'm Kunal. I'm a software engineer at Japan solutions. So Japan solutions is basically clearing us a middleman between healthcare providers and payers. And my, my favorite, alcoholic, happier beverage would be a beer called prankster

</p>
<p><strong>Ryan Burgess</strong><br />
prankster. Yeah. Awesome. Do you know where it's made?

</p>
<p><strong>Kunal Bohra</strong><br />
Fort Worth? I think somewhere in the US. Yeah. All right.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, let's also give introductions of the panelists. Ryan, you want to start off?

</p>
<p><strong>Ryan Anklam</strong><br />
Sure. I'm Ryan Acklam. I'm a software engineer here at Netflix,

</p>
<p><strong>Jem Young</strong><br />
Jem Young software engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, Happy Hour podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is functional? Functional? Alright, if anyone from now on says the word functional, we will all take a drink. Alright, let's jump right in. What are static type systems like? What are we? What are we talking about?

</p>
<p><strong>Lauren Tan</strong><br />
So static type systems, in my opinion, are really interesting concepts that have originated from mathematics. And even though a lot of us like if we're writing JavaScript, or Ruby, or any of these, like new dynamic languages, we think that we don't deal with types, but we actually do. And you have a type system that actually runs in the runtime. Right. So a static type system just means that you check your types when you compile your code, and you don't necessarily want to check them only at runtime. And the interesting thing about static type systems is that they've really originated from functional programming fears. They originated from functional programming, and even beyond functional programming, but mathematics right? type systems are about a combination of like type theory, category theory, logic theory, and they bring together these concepts to help you define constraints in your code. So that you know that like, when you are writing a function, for example, you know exactly what you're going to get. And you don't have to, you know, only check that at runtime or, you know, like in how typically in JavaScript, you probably write like, a million if statements, if this argument is null or undefined, maybe I'll do something different. Maybe I will do some x. But if it's a number, I want to do this, and it was a string, I want to do that. And the really interesting thing is when you start combining that with concepts from other programming languages, like pattern matching, that's in my opinion, that's where you get into really interesting territory. So one of my favorite programming languages, which is in front end specific is Elixir. And you get, you don't have a static type system, but you do get pattern matching. And it's really powerful, because you can define a function for many different variations of arguments of certain types. And then you can, cheers, cheers, cheers. And you define different behavior? And based on the argument,

</p>
<p><strong>Ryan Burgess</strong><br />
no, I think your definition I'm like, I'm like, What am I missing here? Like, you've got it all, which is great. Yeah, I think it's, it's funny, because in JavaScript, you kind of It's a wild wild west, so you can kind of get away with doing a lot of things. And the static type system is really going to help check, check to make sure you're not making those mistakes and errors, and hopefully make you write better code.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, I do want to say like they're not silver bullet, though. I don't know what you all think about like type systems in general, but the way I like to think about it, so they're really not, you're not bulletproof, right, especially like Typescript and flow, unless you really go to a very strict functional language.

</p>
<p><strong>Jem Young</strong><br />
Cheers. I think it's important to note for people who are newer, it's called static for a reason. type systems are generally constrained to actually probably always constrained to compiled languages. So Java, Haskell compiled, it is Haskell rusts. Those are all compiled languages versus JavaScript, which is either just in time compiled or sometimes ahead of time compiled slightly. But generally, like JavaScript does type coercion. So like in, if you want to test this out right now at home, if you're listening at home working, sort of, I don't know, I don't listen to settle. You know, you can, if you add a string and a number, you're going to get a string back because it JavaScripts going to coerce that into whatever thinks is best. Which is nice, because, you know, I'm lazy, but there are there are edge cases, or there are downsides as well.

</p>
<p><strong>Ryan Burgess</strong><br />
What are the downsides?

</p>
<p><strong>Jem Young</strong><br />
Like Lauren said, unknown you can get if you're not careful with what your what type of data you're passing around, you can get weird errors. Like you can end up with a string instead of a number. One's annoying. That happens, that happens quite a bit, depending on how strict you are. But the pro side is that it's lazier coding, like you don't have to worry about as much if you're just like, I don't care about types, I can just cut something out and JavaScript will take care of it. Kinda like semicolons, you don't actually need semicolons, except for two or three use cases. I like semicolons. I have a semicolon person I need to

</p>
<p><strong>Kunal Bohra</strong><br />
save here.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, Jem, I think you brought up a really great point about, you know, like, this idea that with non statically compiled with static typing languages, you can be a little bit faster when you're coding, right? Like, you don't have to think about types. But I would also make the argument that you do actually think about types, because implicitly in your head, you think like, Yeah, I'll pass an object in here. These are the properties that I want to call on it, like user dot name, or something like that. So implicitly, I think you're still dealing with types. It's just, again, like more implicit that you so you, you kind of you defer that thinking, I think, but the static type system kind of force you to think of that ahead of time. So that's kind of the trade off, it also works

</p>
<p><strong>Ryan Burgess</strong><br />
with the editors fairly nice. I'm like, that's another benefit that it, it does catch those errors, as you're, as you're writing, as there are things you can tie into your editor. So that kind of makes it a little bit better for those integrations as well.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, one thing I really like is being able to eliminate like, if array.is array this parameter, or if this parameter type of his function, you know, typing will give you that off the bat, you don't have to, you can eliminate all that kind of code, you have to reason about it in your head. So you know, what you're getting in, you know, what you're passing, and you know, what you're invoking, you know, you know, you have a very defined interface to your functions, and event classes or things like that. So you get a lot of benefits, and you get to take away a lot of defensive code that you have to write.

</p>
<p><strong>Jem Young</strong><br />
And also because, well, in JavaScript, we can't do method overloading, but you can and other languages, which is, I don't know, I guess it's good. It's wrong call, I'd like I'm in the JavaScript has meant to do this thing. And if it doesn't do this other thing, they use a different language. I don't have any other language.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, over the years, we've seen it JavaScript everywhere like it, it's kind of taken that shape where we can write a Mac app in JavaScript or iOS, Android, like, I don't know, we're kind of like pushing the boundaries there. And so maybe, maybe that's part of the problem.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah. And something I learned a while ago is I don't know how many people know this. But NASA uses JavaScript to write software for spacesuits was amazing tweet about it. And people were all joking about, like, you know, you're 2025 like, Houston, we have a problem. Undefined is not a function.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. So we've talked a little bit about some of the different options out there to add type systems to JavaScript. I think, Lauren, you mentioned flow, what are some other options out there.

</p>
<p><strong>Lauren Tan</strong><br />
So I think the options that are the least barrier to entry, in my opinion, are definitely going to be Typescript and flow, because they have really great stories for integrating into what you're doing today. Like, for example, with TypeScript, you know, are in flow as well. If you already have JavaScript, it's already a valid syntax for TypeScript and flow. So literally, just by renaming, like an extension of a file, you can actually get some benefits from type systems, which is really nice. But again, like they're not really, they don't give you 100% type safety. So if you do get into those scenarios, where you're maybe you're building something that's very, I know requires you to be very correct all the time. Like maybe you're doing with financial information or something like that. spacesuit, yeah. Exactly. Then maybe you want to investigate like languages like no reason or closure or, or pure script or any of these kinds of languages that functional languages, cheers. functional languages that compiled to JavaScript.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess something like elm would be another one. I'm

</p>
<p><strong>Lauren Tan</strong><br />
just gonna say oh, yeah, Elm has really great, like error messages guys.

</p>
<p><strong>Ryan Burgess</strong><br />
They are very nice error messages. I think that's actually one of my favorite things about elm. And we've actually done an episode on Elm and that like we talked through some of those benefits that elm brings along with that. So

</p>
<p><strong>Jem Young</strong><br />
what are other popular types languages other than JavaScript? Just curious,

</p>
<p><strong>Lauren Tan</strong><br />
popular, like just in terms of usage or in terms of mindshare? So, like

</p>
<p><strong>Jem Young</strong><br />
PHP and Python are not type languages.

</p>
<p><strong>Kunal Bohra</strong><br />
Correct. Java would be a big one.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, Java is a big one.

</p>
<p><strong>Lauren Tan</strong><br />
C sharp would be another one

</p>
<p><strong>Ryan Burgess</strong><br />
sharp Haskell Haskell Haskell popular,

</p>
<p><strong>Jem Young</strong><br />
Erling typed.

</p>
<p><strong>Ryan Burgess</strong><br />
I think so

</p>
<p><strong>Lauren Tan</strong><br />
it's not statically typed. Okay. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm trying. I'm like, lost. There's other ones and others coming? Up. Could you not think about this? Well, fine. Yeah. We're drinking. Yeah, keep saying functional. Cheers. So we've actually started talking about some of the benefits to using type scripts. Are there disadvantages? Like, what are some disadvantages? Like? It's not perfect? Like, exactly what Lauren, you're saying? It's, it doesn't cover all errors. But it's, it does help. But what other what are some disadvantages to leveraging a type system?

</p>
<p><strong>Lauren Tan</strong><br />
Definitely for like type system or typed languages, in general, there is definitely a bit of a barrier to entry, because you first have to know kind of what you're doing, right? You have to learn like, what are types? How do I type this thing, especially in JavaScript, where you do you often do very complex things like, you know, maybe you're writing a higher order component, things that maybe aren't so easy to type, you, there is a definite learning curve to that, right, knowing what a generic is how to use that to type, you know, function functions that take many arguments, multiple arguments, not just one, any number of arguments, for example. So things like that, I think can be quite tricky to, to type well, but that's it. I think TypeScript specifically, also has like, I don't, I don't think it has the easiest learning story like, again, on this topic. But it takes a long, long time. And a lot of effort before you can get to a decent level of type safety, versus something like flow actually has a very great story for getting good type coverage out of the box. And that's really from the way that the two compilers work. So TypeScript is st based and flow is graph based. And so one of the things that flow is well known for is that it can actually do type inference on a much more advanced level than TypeScript. Whereas TypeScript, if it encounters a type, it doesn't know it, from what I understand it will just fail and throw an error immediately. But flow can actually defer that and say, I don't know what this type is. But let me go explore the rest of your code, and see if I can build up a graph of all the types that are available. And then I'll come back to that later and say, Okay, this is probably this time. So I've read a number of blog posts that like detail how that works. But I thought that was really interesting. Yeah, I

</p>
<p><strong>Ryan Burgess</strong><br />
don't want to say I didn't even know that about flow. That's really interesting. I can see some benefits there. Especially as you're jumping right in, it's an adding into your code base that could really pay off in the long run.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, and I think the one thing that kind of goes along with those barriers to entry is once you do hit those points, you're just inclined to make an any type. And then you lose all your type safety as well. So

</p>
<p><strong>Ryan Burgess</strong><br />
like with flow, you would do that or meaning with TypeScript. If you're like, Oh, I fell in this air. I'm just gonna make it an any Titan and move on. Yeah, so

</p>
<p><strong>Ryan Anklam</strong><br />
my experience is more with TypeScript. So in TypeScript, when you're trying to figure out how to type a specific thing, if you're just spending a couple minutes on it, and you're just getting frustrated, like, fuck it, I'm just gonna make it any and then you lose your type safety, and you can, but it lets you move forward. Right? So there's benefits maybe to that, because it's not going to slow you down as much. But you do lose any safety that you would get, or any type of inference, any benefits you would get to typing.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a fair point. And I can see myself probably doing that as like, I don't have time to deal with this. And just like moving on. Another one I'm thinking of is like, you're not writing JavaScript anymore. You're writing in different language. And so that can be you are writing JavaScript, but it's a little bit different. There's more syntax, you're you're dealing with new things. And so that might feel a little weird. I'm not saying it's a disadvantage, but it it kind of feels a little bit of a barrier.

</p>
<p><strong>Kunal Bohra</strong><br />
I want to add to it. I mean, you brought up my concern with it. I mean, it's not as fun as JavaScript. Yeah, right. The fun is taken out of it for me. I mean, once I'm thinking about TypeScript or something else, and maybe we'll talk about this later, but even in Java, you've got the concept of what checked exceptions and uncheck that section and render exceptions, right. So you still have to check for know, or maybe not with optional types and stuff, but Right.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, and I think actually, once you get past the initial hump of writing TypeScript, I've actually found it as fun to write as JavaScript
is paying you right now.

</p>
<p><strong>Ryan Anklam</strong><br />
So I'm drinking this expensive Wisconsin spot in Calgary. Here,

</p>
<p><strong>Jem Young</strong><br />
we can talk more about the advantages of types for but now I'm gonna go on a rant about disadvantages type system. I agree it's, you're not writing JavaScript anymore. Well, you weren't meant you are. But you're not writing JavaScript that anybody can run, you have to, I can't just like, hey, here's some code, go ahead and run it, you have to run through a compiler and all these things like that, which to me, that's the fun part about JavaScript is that I can just run it, especially coming from a Java C sharp world, or I came before, like, I love JavaScript, because I can just like, do anything I want. Yeah, there's a lot of downsides. Like we've had to learn the edge cases, why we have linters. And like, why we're introducing type systems now. But that's still to me what JavaScript is, and I'm not like pro again. So I'm just neutral and types. But another disadvantage is, like people that go like really hardcore on typing, like they're really, really, really, really type systems. It's like almost impossible to code review, and GitHub or something like that. If I don't have like a smart IDE that knows how to read these types, it becomes very, very difficult to read, because it's not JavaScript anymore. I have more of it all pause.

</p>
<p><strong>Ryan Burgess</strong><br />
That's interesting, though, it's like, but most of the IDs are now supporting a lot of it too. So it, like I've seen, you've got VS code, which is doing a really good job of supporting it. Obviously, it is mine, they also

</p>
<p><strong>Ryan Anklam</strong><br />
support pull requests now. So you can actually bring your TypeScript pull requests into VS code. And

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, and so I think, to your point, I can see that being a barrier, but I do think that it's getting better, which is, is good. I mean, it's not going to be perfect. Because even something like Sublime, you have to like add a package for it. And if you didn't have that package, well then that that's not good, either.

</p>
<p><strong>Jem Young</strong><br />
Like sometimes texts like a text. Yeah, that's

</p>
<p><strong>Ryan Burgess</strong><br />
fair. I should I just called it like, Yeah, II, it's not an ID,

</p>
<p><strong>Jem Young</strong><br />
I would argue the rise of type languages coincided with the rise of VS code. Like I could, I could argue that very strongly that when I was using Sublime, nobody was really using type languages as much because it's just not as smart. Because you have like WebStorm, or something with IntelliSense. makes typing like, way, way more useful, way cooler. But yeah, when you're just using like, sublime or notepad, people weren't using types as much, because I don't think they saw the advantage. But then I was like, what if you write Visual Studio, remember the old days unlike C sharp Visual Studio, like Visual Studio is the best because like it does C sharp so well, and types and all this. And so by going back into where we were before, people were like, This is the best thing ever.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I I've been so it just felt weird. I haven't really jumped to VS code. I mean, I've used it. And I think there's a lot of benefits to it. But definitely the whole BS like Visual Basic kind of feel like I'm like, I don't want to go to that. I don't. It feels weird that we're at now full circle. And then we're like, yeah, VS code is so great. It does feel weird.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, VS code actually has gotten me off vim for the first time. And yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that's a hard sell for you. I was like you were a power Vim, and like very good at it. So I do

</p>
<p><strong>Ryan Anklam</strong><br />
have I mean, I do use the VS code vim plugin. So yes, it's very close to remove them was. But with added benefits of getting all the cool code inference and things like that from especially when I'm writing TypeScript. It's amazing. Yeah, in the VIM plugins, were okay, and you get a little bit of that, but,

</p>
<p><strong>Ryan Burgess</strong><br />
and then again, if you're on Vim, it's like, you would have to add those plugins or

</p>
<p><strong>Ryan Anklam</strong><br />
I couldn't find a mixture of plugins I like that. It is it's you know, you're trying to make a cocktail of which plugins are going to work really good for you. And again, VS code, you just open it up and all my TypeScript code just absolutely came alive compared to what I had in Vim. So

</p>
<p><strong>Ryan Burgess</strong><br />
that's pretty impressive.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, Jem, I think you made a really good point about like, how you see this resurgence of type languages and like, and as a result, also IDE is I can benefit from those things. And it's something I've been thinking about a lot, because I think like a long time ago, we had very strictly typed languages that were very verbose to write. And you almost kind of had this very extreme reaction. And everyone's like, you know, like, why do we have types anyway? Like, what good they do they do, they just slow me down. You're clunky, blah, blah, blah. And so I think we, I wonder if we went to extreme right, we went to like, you know, like, Screw types like, whatever. Let's just like, or like, go to the exam like Rui, where anything could be anything. You can monkey patch this? You can, yes, yeah. Like, it's the programming language is like your playground, you can really bend it to your will. And then now I think it's really interesting because you, the thing I really like about TypeScript and flow is that a lot of the typing is optional, right? You're not forced into doing that. And if you do, then it's to my, I guess, maybe this is my perspective. But I still it still feels like JavaScript to me, because the only difference is really like the function signatures made me look different. But the code itself, like you don't really write anything different. You're not going to be using anything special that gives you we're really just adding annotations that eventually just get written. So like, it doesn't actually change the semantics of your code at all. But yeah, I also like I used to use them a lot and sublime, whenever I want to use like a visual looking editor. But ever since VS code, I initially I was kind of against it. I was like, This is terrible. But the more I use it, and the more I see how like it's innovating really fast, the more The more I began using VS code,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, it's impressive, but it is feeling full circle. Yeah.

</p>
<p><strong>Jem Young</strong><br />
Say, Lord, but like, You're someone I respect and like a great engineer, and who, who uses type sensibly, I'm assuming I don't look at your code. I just trust you use. But I, what I've seen is like people give talks at conferences, and I see it more and more and more. It's like, well, you can do this, you can do like, extreme typing and TypeScript. And like, they make it so complicated. And it's just, that's something I've noticed in our community, we'd like revel in making things more complicated they need to be. And so I'm for sensible, like, I'm not pro or for or against type, but I'm just like, let's keep them simple. Like, let's let's not go down the path of like, super, super typed languages. And I see more and more of that. It's like, you can make your types do this, and this and this. And I was like, Yeah, but should it? Well,

</p>
<p><strong>Ryan Burgess</strong><br />
I think it goes back to the point of, like, JavaScript was, there's a reason why it's so loosely defined. And there's like, benefits to that is we've maybe went to like, exactly what Lauren says, went too far. That one way and and now it's like, okay, well, maybe we can tighten it up. But then I agree with you. I've also seen the presentations or talks, or even people like being very, very pro on a type system. And it's like, to the extreme where it's like, Well, why not just write Java then? Right? Like, it's it's kind of feeling like that. So I think there's a mix of I'm probably with you, Jeff. I'm, I'm kind of impartial, like on the fence on it. And that's why even why I said, I'm like, Are we still writing JavaScript?

</p>
<p><strong>Jem Young</strong><br />
What you know what I wish and TypeScript three Fair has this feature. I wish more people just wrote Jas doc style comments with params with types in their TypeScript with VS code. And I think can you can do like an annotation AT Ts check at the top, which you don't type anything. It'll just read your, your JSOC annotations and for types from those. It's not foolproof, but it's pretty good for like basic function, things like that, which is nice, because that's what closure did from Google Closure with the s not with the J. They their type system was using j s talk and stuff like that. Like, that's really what I want. Like, to me, that's the middle ground that we can get to and I don't think flow ever got there. Which is why if I had to pick one, I'd probably pick TypeScript as well, because flow just never implemented that because and asked them to I spoke with one of the the core people and I said, Hey, why don't you implement reading Jas doc? Annotations? And inferring types from those? They're like, Oh, yeah. And like, no, they never did it. So

</p>
<p><strong>Lauren Tan</strong><br />
yeah, that's one thing. I think Microsoft did really well, TypeScript. And one of the other things that he did really well is, again, like coming back to the editor conversation. Like you don't even need to be using TypeScript to benefit from it, right? Like you just load up VS code JavaScript project, and you get some kind of auto completion IntelliSense in there already. And then yeah, further, like, if you use JS doc, and then you can even do more inference. One of the really cool things I saw that team doing is, they now will automatically install types for the packages you npm install, like whether or not you use TypeScript. So under the hood, it automatically fetches the types from the definitely typed repository. And that's how we can actually give you some details like, oh, right, lodash, right, you just install lodash. So these are all the different function signatures that you just imported into your project. That's pretty cool. So yeah, there are a lot of really interesting tools can be built on top of type. So whether or not you use it, a lot of benefits.

</p>
<p><strong>Jem Young</strong><br />
There we say shout out to Microsoft. I mean, they mean, there's

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan for selling. Great. I'm like bought in by Brian. Yeah, like Brian holds, not here. So yeah, I mean, somehow he's convincing us to use vs. Code.

</p>
<p><strong>Lauren Tan</strong><br />
They're doing crazy cool stuff here. Yeah, yeah.

</p>
<p><strong>Jem Young</strong><br />
I think supporting a note for speakers or people who don't know, TypeScript is backed by Microsoft Flow is backed by Facebook. So that's kind of how it goes. If you're ever at a talk and you see a speaker and they're from one or the other, they're probably going to promote one or the other. That's like something to note in the JavaScript community these days.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that is important. And also, should it matter? Like, should it matter that we choose by a company doing this as like? So now it is, like if Google goes and create something to compete with that? Does that change your mind on which to choose?

</p>
<p><strong>Jem Young</strong><br />
Not mine? Because where we are, but it does. Also, sorry, I've been talking a lot this episode. Angular is a prime example of people adopted it quickly because it was backed by Google. And probably we adopted it too soon. And it burned like Angular one they were telling you later was not pleasant to work with. But everybody back there was like, oh, Google's using it. And like the company that backs it doesn't matter. If Netflix released some library, a lot of people use it, because they're like, oh, Netflix is using it. That's just the state of modern JavaScript.

</p>
<p><strong>Ryan Anklam</strong><br />
Now, that's a fair point. And to counterpoint that, I guess when when TypeScript first came out a couple years, not even a couple years ago, it's been around for a while now, hasn't

</p>
<p><strong>Ryan Burgess</strong><br />
it? I mean, I used it like, I want to say like four or five years ago.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, but when I first heard about like, Fuck Microsoft, yeah, I would I use something for JavaScript that Microsoft's come up with. Yeah, it

</p>
<p><strong>Ryan Burgess</strong><br />
scared the shit out. Yeah, exactly.

</p>
<p><strong>Ryan Anklam</strong><br />
I mean, but that just shows how far a Microsoft has come. They've come such a long way as far as Like being friendly to the open source community and really improving JavaScript actually. From like Git when they first started, I was just, I absolutely would not use it because it was a Microsoft product. And now, here I am. Yeah. You're working for them.

</p>
<p><strong>Ryan Burgess</strong><br />
Brian's pain? Yeah. Under the table.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, they kind of felt the same way, like my TypeScript pre 1.0 was really not a pleasant experience. And yeah, when I remember, I remember my feeling when when it first came out, like this seems like totally not what we need right now, right? Like, why why bother with this. But it's only been recently that I've really started to investigate types. And actually want to go back to a point that you raised earlier, Jem, like, you mentioned that you're not writing JavaScript anymore. You can't like, just copy paste your code into a console and just run it right. And this is actually a very good point, I think, like, personally, although I like TypeScript. And in all these type languages, I definitely don't want JavaScript to go away, right? Even if like WebAssembly is the future, whatever. I think JavaScript still really fun language to write code and write you exactly what you say, you were like you, you can, you don't even need to install anything, you just open your browser, like there's so little barrier to entry, like someone who has no concept of programming could very easily learn how to open a console. Type one plus one started learning, like the real basics of programming. And that's, like, invaluable, and I wish we had more things like that, right? Where, you know, the front end world is getting so complex, there's build systems, there's like type languages, there's all these things you don't have to know to be a front end developer. But I remember the days you know, like, I had been programming for a while. And I started out learning HTML CSS, like, I remember being so excited about learning like the blink tag, right? And being able to right click on something and view source yeah, that's, that's something that's really missing, right.

</p>
<p><strong>Ryan Anklam</strong><br />
And let's be honest, when was the last time anyone built anything of even mild complexity without first having some sort of built system? Webpack, Babel Browserify. Anything right now,

</p>
<p><strong>Ryan Burgess</strong><br />
it's become pretty common. It's

</p>
<p><strong>Ryan Anklam</strong><br />
basically one of the first things a lot of people do when you start any type of project now,

</p>
<p><strong>Ryan Burgess</strong><br />
like, let's give a shout out to Babel seven now having TypeScript built in like, I think, to the point to have, now you have because that can be a negative, like, I'm just gonna say it's like having to now yet add another transpiler piece to your build system. To now support a type system can be a painful experience. I mean, it's just one more thing to do. But now Babel has it

</p>
<p><strong>Ryan Anklam</strong><br />
that's actually a keyword instead of having a two pass build system. Now you can just run everything through Babel. It's

</p>
<p><strong>Ryan Burgess</strong><br />
awesome. I mean, now it allows us right, yes, six, it now is also going to allow to write type script. That's That's pretty impressive.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, definitely. Huge shout out to the ballot.

</p>
<p><strong>Jem Young</strong><br />
Yeah, Penry donate to his Patreon. He quit his job to work on Babel. Give him some money.

</p>
<p><strong>Kunal Bohra</strong><br />
So I had a thought, going back to what Jem was talking about, like, how types are popular now? Right. I was just wondering if this could also be because of the popularity of functional programming in JavaScript. Cheers. Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no, you're that's a good point.

</p>
<p><strong>Kunal Bohra</strong><br />
I was gonna ask, like, I don't know how long tysk has been around. But sounds like it's been around for a while, right. But now suddenly, everyone's talking about TypeScript and flow. And reason. ML, right.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, reason ml has been talked about a lot lately. I feel like I'm seeing more and more of that. I haven't used it. But I was pretty impressed. Even Ken Wheeler at React Rally was speaking about it. And I was like, so pretty impressive. Some of the things he was doing. So yeah, I think that we're seeing more and more of the functional. Cheers.

</p>
<p><strong>Lauren Tan</strong><br />
I actually want to credit like React. I feel like, I don't know, maybe it's anecdotal, but I kind of feel like React introduced a lot of functional concepts to the community. Absolutely agree.

</p>
<p><strong>Kunal Bohra</strong><br />
Yeah.

</p>
<p><strong>Lauren Tan</strong><br />
And like a really accessible way, right? Like they, they put all these concepts in front of you, without throwing the jargon at you, right? Whereas something I'm really passionate about is that kind of programming. Is how do we get away from being so jargony and academic and like, such a closed community, right. And I've always felt really strongly about it, because they're like, when, in the course of researching all of this theory, like mathematical theories for my talk, I just learned about like, Wow, there's so much beauty in mathematics and like how it even affects programming. And to think that that's all like locked away, because like, the community is not so great. The front there, or, maybe unfairly is the wrong word, but they can create, sometimes an environment where you don't feel welcome. I feel like that's really sad. And that's why I think I feel like I want to credit, the React team and even Facebook like for popularizing these concepts in a way that's not pushing people away, like, you know, use higher order components and things like that and react all the time but you don't think about you know, like the mathematics behind it. Right? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
It removes all those Like, scary concepts, though, maybe a way to put it, it's like it makes it very easy to jump in and be creating a application leveraging something like React.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, I think I think it really kind of abstract that away from you, right? You don't have to know the nitty gritty of what a monad is, or whatever, to know how to use it. In fact, I would say that most people who've done JavaScript probably know what that is, right? They just don't really, they don't know what the mathematical definition of that is, but they probably used one,

</p>
<p><strong>Kunal Bohra</strong><br />
you probably don't know how to explain it. Well, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I wouldn't want to be put on the spot to explain it either. So, alright, we've kind of talked about there's like, definitely some benefits. There are some, you know, disadvantages, or maybe something that might make you a little skeptical of leveraging a type system. But how would you convince your team now you're like, yes, let's use TypeScript. Let's use Flow, whatever it is, how do you convince your team to now adopt this? What are some approaches?

</p>
<p><strong>Ryan Anklam</strong><br />
So let's have a funny story about this. I just had a meeting with a bunch of people about adopting TypeScript for re architecture project I'm working on, and I was in there ready to go to battle. I was like, Alright, we're going to do this. And then I went around the room and like, Who wants you know, who's kind of in favor of using a type system? And everyone just raise their hand immediately? All right, we're good.

</p>
<p><strong>Ryan Burgess</strong><br />
And then did it come down to like, choosing which one?

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, maybe the meat we did talk about the benefits of flow or TypeScript? which one we're going to use? I won't say it on here, you can probably infer right? You probably infer which one I picked. But I pick the team picked. Because we all pick made a choice together. But yeah, if the meeting kind of went on to talk about which one we should use and why. But everyone was in favor of a type.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I mean, that's a good way to start to is like having everyone bought in then it just becomes Alright, how do we approach this? What's the best one to choose? And then how do we start rolling this out?

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, I would also say like, I would like to take a step back and also encourage the community because I think I can't recall who said this. But one of the things I think we tend to stereotype the geometry pyramid as kind of like a community where we very quickly hop on different bandwagon, right? Like, oh, this is the hot new thing. Let's go do that. And like, so cool, is all use TypeScript. I think I really encourage people to take a step back and think like what you want to get out of it. But like, before you say, I want to adopt the type system, or I want to use webpack or Browserify, whatever like like before you make any of those decisions, like, what is the end goal? Like is that? Was that? Is this choice of library actually going to serve your goal? Or is it something you're just using? Because someone told you to?

</p>
<p><strong>Ryan Burgess</strong><br />
Wasn't solving for you? Like, yeah, but the big thing is like, what does it solve?

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, I think it's very nuanced discussion to have with your team. Like I think personally, for me, TypeScript can help you discover bugs that you don't even know you have. And one of the other things I think you can really do is, you know, give you in a way, like free living documentation, like kind of how you mentioned like JS doc, if when you use TypeScript, you don't actually need JSOC anymore, because you can just automatically generate the documentation, if you think about it,

</p>
<p><strong>Jem Young</strong><br />
but still write comments people. Yeah, I've

</p>
<p><strong>Lauren Tan</strong><br />
no, yes, still, absolutely. Still write comments. But there's like advanced tooling on top of TypeScript. I don't know how good like this TS Doc is, I think it's what it's called. But it lets you generate documentation based on the types that you have. So it can discover like, classes, functions, anything that you expose in your your TypeScript application, and then generate documentation based on that, like this function takes two arguments, the first one's a string, this one's a number, you can just infer that for you and just do that for you. And it's, the best part of that is its living, right. So I would encourage people who are writing libraries to adopt types TypeScript, because there's a lot of value in not just for your like you authoring a library, but also for the people using it. And whether or not use JavaScript is beside the point. But I've even seen projects where they still write it in JavaScript, but they ship TypeScript definition or a flow definition. And that is a huge amount of like, great developer ergonomics that you can provide for library for applications. Maybe it's a bit of a finer grained decision. So I'm curious to hear what the rest of you think.

</p>
<p><strong>Ryan Anklam</strong><br />
So we give a an example of kind of one area that I spent probably three hours debugging a problem that would have taken less than a second if I had TypeScript. So this application I work on, there's tasks, or there's a thing, basically called a dependency graph. And you have to pass objects of a very specific shape into this dependency graph. And one of those properties is dependencies. So it's pluralized dependencies. I was passing in an object with a property called dependency, and everything was failing. And I looked at my code, I'm like, dependent, everything spelt, right. Everything is good. Why is it failing? And I went down all these different rabbit holes trying to debug my code. And it was just because I had spelling error. And those types of things, I mean, I would have saved so much time, with with the strongest, you know, any type system. And that's just I mean, a very simple application of a type system saving your time, but things like that. And especially if you're jumping from one code base to another, when you're coming back to it after a certain amount of time, you don't have to start, you know, going back into the code in your ramp up times a lot faster, because, you know, if you're calling different methods or calling in different packages, you know, what, you know, you know, you're getting out of those, you know, what parameters you have to call them with, you don't have to go in and review the code that you're trying to call anymore. So it just helps you kind of ramp up faster. I think when you're switching contexts or tasks, or from one code base to another,

</p>
<p><strong>Ryan Burgess</strong><br />
it can actually help even I think at that point is it can help a new team member ramp up as well, because they're, you're getting those API's service to you and like in your editor, and you're not having to go look for them and trying to understand them. So I could see that being a strong benefit as well.

</p>
<p><strong>Jem Young</strong><br />
I agree with the Lord. Like if you're writing a library or an API for consumption, I think types like are really powerful idea. For you, I would lean probably against it. I don't know if they add that much if I'm just building straight UI code, but if you really like heavy server code, I can see types being neutral. But a good all it's only writes type in type languages and untyped languages. What's your opinion on? How would you convince someone or not convinced on

</p>
<p><strong>Kunal Bohra</strong><br />
convincing someone? So I'll tell you what worked for us. My whole team, three engineers, we were at React fun last week, and we watched Lorien talk about them. And come Monday. Okay, let's do it. So that was, I mean, two of the engineers at least, that were interested in doing it. And although we have not started exploring TypeScript, but there's a conversation going on. I was gonna say, right when Ryan was talking that I'm sold,

</p>
<p><strong>Ryan Burgess</strong><br />
just that one year,

</p>
<p><strong>Kunal Bohra</strong><br />
cuz I'm learning Haskell, just because I think it's fun. And I'm a big fan of Haskell type system. Just looking at the function type definition gives you a lot of information.

</p>
<p><strong>Ryan Anklam</strong><br />
So step one to getting your team convinced is to watch one of Lauren's talks. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. It was gonna be one of my picks, but I'm going to suggest it right now is the there's a React Rally video of Laurens talk, honestly, is you do a very good job of like selling it, but not selling it. It's just kind of like, hey, it is what it is. It's a good way of selling it.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, I kind of learned this from some I can't recall, who actually may have been Ben Ben Lesh. He mentioned that. I can't recall exactly what he said. But it was along the lines of like, nothing is truly a silver bullet. Right. And so I think early on in my career, I definitely took on like a lot of very strong opinions like this is the best way to do it. There's a best practices that you have to do, right, or you're a bad programmer. But the longer I do it, the more I realize it's it always depends, right? Like it nothing is ever as clear cut as you think it is. And like being able to exercise that nuance is honestly one of the best lessons I've learned. In my career.

</p>
<p><strong>Ryan Burgess</strong><br />
It made for an amazing talk. It really did. Like it was just like, oh, like I'm learning so many things. And I could see there's a bit of your opinion there. But it wasn't like overselling it either. And I think that to me, was awesome, as well as like, sometimes I feel like we do oversell things. We just talked about that as like, oh, you need a build system and you you need to be using Babel, and you know, Webpack, whatever. And sometimes I can feel like it to your point, Lauren, it depends. Yeah, I love

</p>
<p><strong>Lauren Tan</strong><br />
that. Yeah, like, like another thing that you see people doing in the React community is like, pushing pushing everybody. You have to use Redux, right. And then now you're seeing like people like kind of like, the extreme reaction, oh, let's not use Redux anymore. But I think it's not because Redux is bad. But as more people kind of abused it to begin with. And it is really a function of people selling it to hire like, you know, this is like, the solution to all your problems. You know, like your company will be a billion dollar company. If you use Redux.

</p>
<p><strong>Ryan Burgess</strong><br />
Let's even go one step further. Do you even need react? Like there's things? There's times where I'm like, people, like I need react, do you? Maybe, but maybe you don't? And I think like, it all depends. And I think that's I love that saying it's just It depends. Because every use case is different. Every team is different. Every engineer is different. What are we solving for? And how, what are these tools that are going to help us and I feel like type scripts flow. These are just tools that will help us or they may not they might just add complexity that we don't

</p>
<p><strong>Jem Young</strong><br />
need. It's still say our device stanza we give almost every episode. If you're new to JavaScript, like just learn vanilla JavaScript, like I cannot overstate that enough. Don't use Create, Create react app. Don't don't use anything like just write some vanilla JavaScript. You get there and then like you understand a bit more about When you should use things like Webpack, or Typescript and you understand when you shouldn't. But too many people jump in like they see a bunch of types or they see complex build systems. And then they're just like, JavaScript so hard. I'm like, oh, it's tricky. But it's not hard people like we've made it like much harder than easy. Just open up a console and start coding.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think even going back to the IDs, and everything, like you can just like Sublime is a pretty that's just the text editor. I mean, you can use Notepad and just save it as js. And it will work or yes, you can just load it in the browser in the console, and it will do something and I think, yeah, like, we need to go

</p>
<p><strong>Kunal Bohra</strong><br />
back to that. So there was a great talk. I don't remember his name. But the very last target reactive on where he was exactly talking about this thing that you're not about for your web developer?

</p>
<p><strong>Lauren Tan</strong><br />
Brian LaRue. Yeah, Brian? Yeah. Yeah. Like, I think he presented a really compelling talk, I think like, and he gave an example of, I think his company is begin calm, I think. And he showed an example of like, how they've been building their applications without overly sophisticated build systems or like, reactive and I think, and I think now is the best time actually to learn front end programming. I think the web has come so far, like JavaScript has evolved so much, you can still literally go to any website, open up your chrome console, or whatever. Browser use Firefox as well. And just start like tinkering around right? You can you don't need jQuery anymore, either, right? You use the native like document API is a window API's, you can get a lot done and you can really explore and learn programming.

</p>
<p><strong>Ryan Burgess</strong><br />
Before we end the episode. We always like to share pics of things that we found interesting things that we'd like to share with our listeners. Let's start off. Lauren, what do you have for pics for this episode?

</p>
<p><strong>Lauren Tan</strong><br />
So I've talked a lot about programming and types of them. So I want to do another pick like that. I actually want to pick the new Spider Man game. I've been playing that on my ps4. And it's really fun, like, swinging around New York City and like, doing crazy stunts is really fun. So I highly recommend checking it out. I have one one last tip I want to share on the topic of music, actually. So there's a person who's pretty well known in the JavaScript community Ken Wheeler. At React Rally, he actually released a playlist of original music called Living it's love songs to your mother. Yep. And it's like the most amazing playlists I've heard in a while. If you if you like, like, if you've ever heard of the Stranger Things, Intro music like that kind of genre, like very 80s feel 80s Like, I think it's called like synth wave or like dark sin. There are a lot of really great songs in there that kind of like in that genre. So I highly recommend checking that out. As well as dark synth in general. It's been like a kind of a craze for me right now. Like I'm in a dark sin phase. A lot of really interesting music because it blends like EDM, industrial music, metal, Ed style. It's just really strange but amazing.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Yeah, I agree. That was a very good playlist he created so very nice. Great Kunal, do you have any pics for us?

</p>
<p><strong>Kunal Bohra</strong><br />
Have to one of course is going to be a movie. The Simon CEO, I think every human being shouldn't watch that movie.

</p>
<p><strong>Jem Young</strong><br />
What's it about? What's it about?

</p>
<p><strong>Kunal Bohra</strong><br />
It's the basic storyline is that there's this night, he is visited by Deaf and deaf has going to claim him right. And the night says, okay, deaf, I have heard that you're really great at playing chess. How about we play a game of chess. And while we are at it, you let me live. And I'll ask you once a bunch of questions. If I win the game, I get to live. And if I lose, of course, you get to take me. So throughout the game, throughout the movie, he talks, he talks about the meaning of life and God's silence and a lot of stuff. Yeah. And the second pick is what I talk about when I talk about running. It's a great book by Haruki Murakami.

</p>
<p><strong>Jem Young</strong><br />
I love my comic. Well, my favorite authors I don't have a valley silicon figure Dan, I'm like backlog by three All right,

</p>
<p><strong>Ryan Burgess</strong><br />
I think this is only I thought it was only a second I feel like I said last episode I

</p>
<p><strong>Jem Young</strong><br />
would do two picks to make up for like the next upset all to do through one of my picks is its website called Kill or cure. Pretty much it's it's about like modern journalism and how like everyday you read, oh, chocolate is good for you know, chocolate cause cancer or like, to that extreme. And it's pretty much the Daily Mail. It's like the Sirocco app and they like categorize different things. So I'm on it right now. Let's see. So it just says Like if these different things cause or cure cancer, and so right now they have like articles that like aspirin causes cancer and also these articles that all say aspirin prevents cancer. It's just kind of like this ambiguity, about like, there's no cure. Truth in journalism. But it's really interesting because it's mostly funny and ironic. For show picks, and watching a lot of shows, I'm going to pick Luke Cage season to probably in my opinion, the best Marvel series shouldn't shorter by four episodes, but like the character elements fantastic, one of the best Marvel shows that I've seen in a long,

</p>
<p><strong>Ryan Burgess</strong><br />
long time. Awesome. Now I kind of want to go finish. I think I only watched the first episode, you got to watch like at least into three. Yeah, no, that's a good reminder. Ryan, what do you have for us?

</p>
<p><strong>Ryan Anklam</strong><br />
My first pick is a book called infinite. And it's about faster than light air spacecraft that's going off to kind of save humankind and repopulate a world. In a distant galaxy. All the people on the spacecraft are in cryo sleep. And this one guy wakes up after 10 years of failed cryo sleep. So he's kind of in his own brain for 10 years. And he finds out that one of the other people in cryo sleep has gone insane, and woke up killed everybody else. So it's just him and this insane guy on the ship. And long story short, he ends up killing that guy, and now he's all on a spaceship creates a virtual reality escape for himself. So he because he doesn't want to live in this spaceship by himself. So he creates this virtual reality for himself to actually go ahead and escape to Oh, and also turns out that this guy is immortal, so he will never die. So he has to create this virtual reality they otherwise he's just gonna go absolutely insane on the ship, in a lot of very interesting things happen along the way. And my second pick is a song called panic chord, and it's the remix of the song. And what's interesting about this is I've always really liked this song. I didn't realize it was a remix until I just looked at Spotify one day, and I listened to the original song that it was remixed off of, and it is 100 Completely 180 degrees different from this remix, and I was just blown away at how good and how different this remix is. So go ahead and listen to the remix and listen to the original song as well.

</p>
<p><strong>Jem Young</strong><br />
Wait infinite. Just say you have excellent taste in books. I've read almost all of your suggestions album like pretty solid. Was that sounds like a plot to a movie I've seen?

</p>
<p><strong>Ryan Anklam</strong><br />
I'm sure it is. But it sounds like you should share this list.

</p>
<p><strong>Lauren Tan</strong><br />
I want to read these books.

</p>
<p><strong>Jem Young</strong><br />
I recommend Red Rising he turned me on to and it's like phenomenal series like you just can't put them down.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, I have a few picks for this episode. One which is very interesting is toddler tattoos. And there is another thing that's really funny is when I first met Jem, he's speaking at React Rally, the very first year of rack React Rally. And in his talk, he mentioned this like joke about like, tattoos for babies, and how it's like the next startup idea. And you know, it's like it was funny. Obviously, we're not creating tattoos for babies. But then I just recently saw this site that does, it's called toddler tattoos. They're amazing. They're like really good, temporary tattoos. And the reason that they're good is like y'all remember the like, different tattoos that were available for kids. They were all like, the gumball machine are terrible. They were never good. You know, and I have a lot of tattoos and I expect that my kid at some point will be like, oh, I want to have a tattoo. And like I'm not gonna allow a tattoo for like a little kid. But these are created by real tattoo artists and they look really good. They're done for kids sizes. They're created by Tim Hendricks, who's fairly well known tattoo artists and like they're amazing tattoos so I highly recommend them. I haven't purchased any yet but I will have to. And then for TV shows I've got two and both Netflix originals. Ozark Season Two I really liked I burned through that one quickly. And like just the ending oh my god, I'm already ready for season three. I'm super excited. I can't I don't want to give away anything.

</p>
<p><strong>Jem Young</strong><br />
Ozark is like so untalked about but it's such so good. Oh, great.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, yeah, it's it's a very good show. And then interesting one that I've really been enjoying. There's only a few episodes. It's called stay here. It's literally a show about creating an Airbnb essentially like how you can do a better design layout how you can like really do a better business out of an Airbnb. It's pretty interesting. I enjoyed that show as well. Great. Before we end the episode, I want to thank both Lauren and Kunal for joining us. Thank you for joining us as guests. It was a pleasure having you both thanks for having us. Thank you. Where can people get in touch with you?

</p>
<p><strong>Lauren Tan</strong><br />
You can best get in touch with me on Twitter. My handle is sugar pirate with an underscore don't ask me about it. But I'm pretty bad at reserving usernames. Yeah sugar pirate if an underscore at the end

</p>
<p><strong>Kunal Bohra</strong><br />
so Twitter as well and my handle I believe is do underscore. I underscore need underscore one. Do I need one? Something like

</p>
<p><strong>Ryan Burgess</strong><br />
that? Haha, nice. It is hard to come up with twitter handle so I'm like That's good.

</p>
<p><strong>Jem Young</strong><br />
mods that gem young. It wasn't that hard. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm sorry. But like, my name is pretty generic. I can't get Ryan Burgess you know, but just oh yeah, no, absolutely. I also had when I first started I was adopted Twitter pretty early but at that time it was felt weird to put my real name on the internet. So I have changed it but I still couldn't get Ryan Burgess. Ryan what's your Twitter? I am bittersweet Ryan. And I'm at <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a>. Thank you all for listening today's episode make sure to subscribe different and happier podcasts on whatever you choose to listen to podcasts on. And you can follow front end happy hour at on Twitter at front end. Ah, any last words functional, functional or functional? Cheers. Cheers.

</p>
`;
        return transcript;
    };