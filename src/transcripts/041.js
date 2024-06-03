module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to Episode 41 of the front end Happy Hour podcast. Maintaining good code quality is extremely important and it helps us in our day to day jobs. In this episode, we'll be sharing our thoughts on code maintenance. Before we get started, let's go around the table and give brief introduction. Today's panelists Mars, you want to start off?


<p><strong>Mars Jullian</strong><br />
Sure, Hi, I'm Marge Julian. I'm a senior code janitor at Netflix.

</p>
<p><strong>Augustus Yuan</strong><br />
My name is Augustus. I'm a front end engineer at Evernote,

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix, Stacy

</p>
<p><strong>Stacy London</strong><br />
London front end engineer at Atlassian.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. And each episode of the front end Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is? bugs. So if any of us say the word bugs, we will take a drink. All right, well, let's kick off and talk about code maintenance. Why is it important to you?

</p>
<p><strong>Mars Jullian</strong><br />
I like to save myself from future me.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that.

</p>
<p><strong>Mars Jullian</strong><br />
I think well, a lot of people will say that code maintenance is kind of a burden sometimes because I think they think about it that it's just for other people keeping it clean and easy to follow. But also, I find that you know future me six months from now has no idea why she wrote what she's writing currently. So it's it's kind of future proofing. And also just, you know, you need to be able to figure out what you were thinking, you know, when you wrote the code. And I think that's, that's pretty important. It's not just for other people, it's for you as well

</p>
<p><strong>Augustus Yuan</strong><br />
definitely think I think we actually talked a little in onboarding, but having like, really bad code maintenance can lead to really bad practices for new devs. I know, like, when we had a bunch of new devs start, they were kind of like, okay, so I'll just do what you guys were doing before, right? And we're like, Yeah, about that.

</p>
<p><strong>Ryan Burgess</strong><br />
It's like, if you have bad patterns, yeah, everyone follows Right,

</p>
<p><strong>Augustus Yuan</strong><br />
right. Right. Or, and if you don't want them to follow those bad patterns, it's like really hard. You need to like somehow just trust me just do it. Just fix it. Just don't go through it. It was a nightmare.

</p>
<p><strong>Stacy London</strong><br />
Yeah, copy and paste, like, what's the what's the I don't, there's a name for it. But like, if you write code, it will be copied and pasted by somebody else as they like build something else out.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it also allows you to move quicker, in the fact is like by that is like yes, it might take some more time to clean up code, and that is taking time. But in the end, it causes you not to be bogged down and having to fix bugs, cheers. Yeah, and hopefully, you're able to actually move a lot quicker, because you're not having to deal with broken things completely all the time. So

</p>
<p><strong>Stacy London</strong><br />
I think if you've ever been on like a support team, or like done support work, so some people are purely on support teams, sometimes they're like, they also they do project work, and they support the things that they wrote. And if you've ever been in that place of you know, a customer calls in some major, major bug major issue

</p>
<p><strong>Ryan Burgess</strong><br />
cheers. You're gonna try and avoid saying, I was gonna try

</p>
<p><strong>Jem Young</strong><br />
a lot of liquor here.

</p>
<p><strong>Stacy London</strong><br />
If you have code that's well structured or easy to to a pattern applied to it, so you know where to look to find something that just saves you time, you can solve the problem faster. And everybody's happier in the end. Yeah, by quick

</p>
<p><strong>Jem Young</strong><br />
show of hands, how much time do you spend actually writing code? So like? 50%? Would you say? Or maybe like, 30%? Yeah. 50 or lower? Yeah. So you all our senior engineers are really, people have been doing this for a while. But if you ask people coming out of college at a Code School, how much time you're gonna spend writing code, they're like, 80% 90% 100% of the percent of time, just like non stop code all day. But that's not true. We, we spend most of our time reading code and trying to read other people's code trying to read our own code, but we always forget that because they're always like, oh, new React, new angular, new view, new over, whatever just came out yesterday, cuz I'm sure someone came out yesterday. But like, we yeah, we spent all the time thinking about that, but not enough on, hey, I'm gonna have to go back and read this at some point. Because most of all we do is actually code maintenance. I think there's like a study in maybe the 80s, you know, acclimated hardcore programming and IBM and they said, on average, a programmer, they're in like, a 10 hour day only does like three hours of coding, which is just when you actually think about that's crazy, because we get paid to write code, but not really get paid to understand code, and then build on that. And there's

</p>
<p><strong>Ryan Burgess</strong><br />
also a lot of planning that goes into it as well, right? Like, it's, you're not necessarily working in the code. You're also working with your colleagues to understand how can we write this so it doesn't need to get fixed five days from now. It's like, how does this actually stay scalable? And how do we maintain

</p>
<p><strong>Stacy London</strong><br />
it? And scalability is important. We haven't really talked about that, but that's a really good reason for making maintainable code is that you're going to keep adding new features And if you don't have a good pattern or a good, consistent pattern in place, it's going to be very difficult to extend, especially if you get like a really big team and everyone starts contributing to the same code base. If you don't have that pattern in place, then everyone starts doing kind of their own thing. And then it just becomes not maintainable.

</p>
<p><strong>Ryan Burgess</strong><br />
No, that's a good point. I like that you brought up the teams too, because I think, you know, as a product grows, or application website, whatever we're talking about at this point for code, as that grows, that becomes hard to scale. But also, as a team grows, that becomes even harder to scale. Because like, even when Augustus said, is like you have some a new start, if they see really bad code, it's just the it builds off on bad code on bad code. That's the habits just keep growing, instead of getting to at least at a baseline where it's like, okay, no, this is consistent clean. Now we can start hiring people, it's almost like you need to have that before adding more people to the code base.

</p>
<p><strong>Mars Jullian</strong><br />
I think the extensibility part, like the scalability and extensibility is is really one of the key things to get like the short term and the long term extensibility. Because at Netflix, we do a lot of A B tests. So we need to be able to write things that can be like very short term rearranged and work for what we're working on at the time. But it also needs to have, you know, a long lifespan, and then be able to kind of support the product in the long term, which, if you don't have stuff that's easy to follow, or easy to build off of that becomes a nightmare. And it's just like, you know, a tangled web that we essentially weave for ourselves. I mean, you know, there are like, to Jeff's point of not coding a lot, sometimes it's a whole day of just trying to reverse engineer someone else's code, because that's often the best time the best way that features are SPECT, because the code lives a bit longer than some of the specs do. So

</p>
<p><strong>Stacy London</strong><br />
I was gonna ask about that. Because because Netflix has so many AV tests. And recently, like we've been doing, like, the product that I'm on, they do more like kind of growth experiments. And some of that code, you know, may like be turned out fairly quickly. It's not necessarily following all the best practices and patterns. But you know, there's kind of pressure to get it out. So that, you know, it shows up for people and all it's temporary, we're gonna rip it out. But I'm like, are we going to rip it out? And I feel like I haven't been there long enough to kind of see that whole full cycle that that code will actually get cleaned up, right. And so I worry about the maintainability of that code, if that turns into a thing that might live on longer. And I'm curious, like, how you guys kind of

</p>
<p><strong>Ryan Burgess</strong><br />
like what also like, our team often is like, yes, we do a ton of AV tests. And I think it's okay to cut corners on an AV test, like, you know, maybe it's not the best well written code, because a lot of times we do throw it out, it doesn't last forever, the minute it's going to last forever, we should take the time, like, Okay, we've gained this as a winning feature that needs to go out, we need to take the time to actually write that properly, and clean it up. And so that way, it allows us to move quickly and not worry about maintaining this code for a long time. And so you don't have to spend as much time finessing it. And then once you are ready, like this is an actual winnable thing that we want to roll out to like all customers are live on forever, spend the time on that it could be two weeks just to make sure that that feature is bulletproof and really well written. That's okay. Because if you did that for every little AV test, well, then you're not learning and you're not testing as quickly. So I think there's a trade off there where that is the one point where I might be like, Yeah, you don't have to worry as much about it being maintainable at that point. But if it's gonna live on, yeah, we should really spend the time to do it.

</p>
<p><strong>Mars Jullian</strong><br />
I think to add to that, as well, though, at Netflix, we do have a mechanism that allows us to silo some of our really crappy tests related code that makes it just really easy to kind of turn it off. So even though Yeah, yeah, we get it out quickly. But we also kind of put safeguards in place that mean that we don't always ship the terrible code, or that it's really easy to tell like where the lines between the feature and the Tet the things that you're testing are, so that it's easier to clean up later. But that itself requires some sort of a, you know, a code maintenance step, because in order to put this infrastructure in place, someone had to go through and not only tell all the engineers, you need to be more diligent about where you're putting your non maintainable code, but also probably to kind of like silo some of the stuff that already existed in the code base. And I think it's really interesting, because it's a it's a good example of how maintenance kind of begets other maintenance in a sense, and that they put in this like, really interesting mechanism that helps us help ourselves.

</p>
<p><strong>Stacy London</strong><br />
So yeah, there's thought a lot of thought put into that upfront.

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. Yes, yeah. And we have a team that supports that, too, which is great. So we've talked a lot about why we actually want to maintain code. What are some ways to help us write maintainable code? I

</p>
<p><strong>Jem Young</strong><br />
think one of them is consistency. There's in psychology, you guys sort of concept of cognitive dissonance, where it's like, you have two different ideas in your head of what should happen, what is actually happening and just your brain. To us millennials. We literally can't even can't even understand what's happening. So being consistent helps, like even if it's a really silly pattern of I don't know, underscore In all your variable names, something I don't know, it doesn't matter. But if you're consistent about it, that helps someone else coming through your code. So I'm like, Okay, I don't really know what's going on. But I know they're following this pattern, they always follow this pattern that really helps. But mainly, for me writing good maintainable code is just, it's just habits, it's good habits of like commentaire code. Don't try to be too clever. And just naming your variables properly, little stuff like that. It just, they're not lessons you can learn. It's just things you have to do over time. That's good maintainable code.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm glad you brought up the comments, because I think that's one that we all should do and do more of I'm so guilty for not doing it, even in my own code where someone else I think, and no one else is having to read this. Guess who does have to go read that like a month later? It's me. And I can't remember what the hell I was doing. With a simple comment, it probably would have helped me to understand that. And I think to to your point of, like you said, naming variables, or Yeah, I mean, even naming files like consistency on that. What about just good names for like any, like a function, or anything that you're writing? Is like a method that you're actually calling appropriately? Like, what does it do? Does it get file? Well, then maybe that's what it should be called? Not like, Hello gem like, that doesn't make any sense. At least write the name of it. And then people who you may not even need a comment at that point. It's like, I can read it and go, oh, like, I understand what that methods doing. So

</p>
<p><strong>Jem Young</strong><br />
commenting is, is a form of time travel. For instance, if I put $20 in my savings, I get it out 10 years, and it's worth $30. Like, oh, yeah, I felt my future self out. That's time travel. Commenting is the same thing. It's, yeah, I know exactly what I'm talking about right now. Because I've spent four months on this project. And I know exactly what's happening and all these parts. But next month, I won't have won't have any clue. So I'm just helping myself out. It's like putting something in a vault and then taking that later being like, oh, yeah, here's the map to what I was doing. And it's so it's hard to do. And I think that's what separates a junior engineer from a C engineer is that you think about things like that, versus a junior engineer, it's like, get out the door, pass all the tests, cool. senior engineers, like now I'm gonna have to come back and fix this at some point. So let me help myself out and write comments.

</p>
<p><strong>Ryan Burgess</strong><br />
Or someone's gonna come along and say like that product managers, like, yeah, we're changing that all and you're like, Oh, great. I was working, it did pass all the tests, but now I have to change it. So it's, it is nice to be able to read it.

</p>
<p><strong>Jem Young</strong><br />
And one more thing about comments, cuz it's like I have said this over many years, I've just come in your code. It's the simplest, easiest thing you can do to write maintainable code. I've seen different things on getting a job and not getting a job based on the comments and their code test, because you can write amazing code. But I see a million or Ryan's he's a million code tests a day. It's like, I don't know what you're trying to do. But comments like, Okay, this is like a good pattern I've never seen before. This is brilliant. For someone, it's like, Oh, here you go, son, I look at it. I'm like, I don't know what's going on, pass. And it's just, it's not fair. But it's also not fair for me to try to figure out what you're trying to do.

</p>
<p><strong>Ryan Burgess</strong><br />
I think you're also in that point, too, is you're in an interview, you're trying to show how you would work with another engineer. And that is really important. You're seeing how important the comments are for not only yourself to read later, but also for like, fellow teammates, and I think that is actually important. So yeah, put comments in your code exercise,

</p>
<p><strong>Stacy London</strong><br />
I'll add comments to code when I like, traverse it and figure it out. And it wasn't obvious to me, I'll be like, Okay, I add the comments, because someone else is going to do this again. And one of my favorite things I've seen is by someone else that was doing kind of what I did, they like added comments to code they were trying to figure out, there's this My Favorite Comment of all time was just right above this function, I have no idea what this function is. At least they made it more clear that it was very unclear, right?

</p>
<p><strong>Augustus Yuan</strong><br />
I actually respect that. Because there have been definitely tons of times I've looked at code, like really old code. And just like, I have no idea why this is here. So I had to like go get blame, find the guy who wrote it, and then ask them or like dig through like the JIRA ticket number of where when they added that and it's like, it's just so much time is wasted, just to like, figure out why this was here. And sometimes it's like really important to it's like, and which is even more reason why you should leave a comment to like, don't delete this do not remove this is important.

</p>
<p><strong>Jem Young</strong><br />
It's actually a concept. It's this a little obscure, sorry if I go off the rails, but it's called Chesterton's fence. You ever heard of that? No. Cons. So it's, it's the idea of there's a fence on the middle of nowhere. And the naive approach is someone walks up says, was there a fence, let's get rid of it. But the smarter person is like, there's probably a reason for this fence. Let's understand why it's here. And then we can debate whether or not the root of it and it's a little off the rails, but it's the same thing in code, you're like, I'm gonna delete this thing. And then suddenly, the system goes down. That happened three years ago in the stock market. It was like a hedge fund trading company. So I'm like, disable this block of code, because like, I don't know what this does, but it was a safety check. And $60 million laters hedge companies out of business because the person can comment their code, and they just deleted this code block arbitrarily. Because they didn't someone else came along, didn't know what it did. So this is dumb. Why is this here? But like, this is real life. This is what we do every day. And that's a real thing that happens and it's silly

</p>
<p><strong>Ryan Burgess</strong><br />
and I actually like deleting code, it feels really, really good. Maybe not $60 million.

</p>
<p><strong>Jem Young</strong><br />
Chelsea Mars, I guess this, Stacy, because I've had this conversation around before. What do you say to people who say good coach be self documenting? Because I've heard that so many times?

</p>
<p><strong>Augustus Yuan</strong><br />
Can you clarify? Yes,

</p>
<p><strong>Mars Jullian</strong><br />
I think I don't think the code to kind of speak for itself, I think either you've got really well named variables, which are like I am this variable that does this, at which point that the very long variable name but but I think good code includes comments shouldn't be excluded from code people. A lot of people I think, like, oh, comments has nothing to do with code. And I think it has everything to do with it for you know, all of these reasons that we've been talking about,

</p>
<p><strong>Jem Young</strong><br />
just say Mars, you have beautiful comments, I know when I'm reading your code. So I know the comments. And like the quality of the

</p>
<p><strong>Ryan Burgess</strong><br />
code, that's pretty awesome, too. When you actually know someone's style of code, you don't even have to, like get blamed.

</p>
<p><strong>Mars Jullian</strong><br />
As to when you put out a pull request, or anyone puts out a pull request with like six lines of comments and like to say that like the the shorter a function, sometimes the more comments there should be, and then maybe the longer the function, the less I mean, it really depends on on what you're writing. But I think a lot of engineers I've seen I've tried to make like really just like really short functions, or like one liners, like literally all of the lodash functions chained together. And at the end, there's a result you're like, huh, and then you know, later someone else would write it. And they kind of they parse it out, like, Okay, this is the beginning, this is the result. Here's like, the middle. And literally, the names will reflect that of like, where they're trying to get to with their operations. And I think that's sometimes that's really good, good self documenting code, but it's literally an English variable, but

</p>
<p><strong>Ryan Burgess</strong><br />
you could, and you could still add write comments, right? Like, I think they should have both. I think that's a good way to put it.

</p>
<p><strong>Stacy London</strong><br />
I've written comments that are longer than the function. Yeah, cuz there's just so much that went into that. And yeah, there. And maybe there's a weird thing that I did in there that is, quote, self documenting, like, it makes sense. Like, you could look at it and say like that, of course, makes sense. But you say like, why I added that, actually, because I ran into this other problem. And it's necessary because of x. It's helpful.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, like, I feel like your coach, well, because when you say self documenting, like your code should be clear enough and what it's doing, but then like, I feel like comments serve its separate purpose, and like giving context as to why you have that code. Like you might be doing a code that does something very specific, like, oh, it deletes this from like, state or whatever. And then it's like, oh, the reason this code is here is because it causes us really weird regression for this very specific browser that blah, blah, blah, like, right, and it's just like, that's like, where like, Yeah, cuz

</p>
<p><strong>Ryan Burgess</strong><br />
then at that point, you might drop support for that could have been an IE six issue, and like, we don't support anymore. So I feel comfortable removing this line of code now, because we don't support that anymore, which is very nice.

</p>
<p><strong>Augustus Yuan</strong><br />
Exactly. And there's not really any way to make your code say that, like, you could call your variables, ie six cool. Browsers, CSS makes variable.

</p>
<p><strong>Ryan Burgess</strong><br />
So another thing that I feel is very useful, but I think you can get carried away with is breaking things up into smaller digestible chunks of code. And you know, with things like Browserify, web pack everything we can, you know, concatenate our files, which is great into like one file, we're not loading that all down to the user. But can we get carried away on that? Do you guys feel like it we can create too small of functions or methods that gets too confusing at that point, and less maintainable?

</p>
<p><strong>Augustus Yuan</strong><br />
I was gonna say this is actually pretty interesting, because there's that famous GitHub or Sindri, Horace, or what's his name?

</p>
<p><strong>Ryan Burgess</strong><br />
I know what you're talking about. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Where he has like 1000s of NPM packages. Yeah, 1000s of GitHub repos. And some of them are like, very, very trivial. They do one thing, very one specific thing, but he like his philosophy is like, that's okay. That's like the whole point, like, literally everything that you want can be modular, and then like, you just like tested a bunch and like, Let every function like do one specific thing. And then you kind of have like this whole, like Exploratorium have, like all these different modules. And even though they all do like little trivial things, you can use them all to do like one big thing. There's something

</p>
<p><strong>Ryan Burgess</strong><br />
I think you hit on there, too, is you can write a unit test that checks to that one thing, does it do this great, it passes.

</p>
<p><strong>Mars Jullian</strong><br />
I think, like the small, the small maintainable functions are really good for usability. But also sometimes it can be really good for separating out the logic, like we do a lot now as you our engineers talking about separating out the rendering logic from the business logic. And I think that small maintainable functions can actually act as a really solid layer in between, because then your UI will call the helper and then the helper takes care of, oh, here's where I get my data from. And all of a sudden, you no longer have to care if that ever changes. And it's really weird to write a one liner that's just like, Oh, I'm just basically passing this value back. But you can really kind of insulate yourself from problems in other areas in your code base or bugs.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers.

</p>
<p><strong>Stacy London</strong><br />
One little level of complexity that I've run into by having things being broken up very small is if internally you have a private private NPM and you start breaking all your stuff up in a teeny little packages, and like you're working on a project where you need to modify code in like several Over those packages, I've run into this case where I'm just like, we're using yarn. So if the yarn link, all these things that I can work on them locally at the same time, and there's like some yarn link Inception happening where like the thing a yarn linked and use yarn link to this other thing. And like, in that scenario, it kind of gets a little annoying that everything is so marginalized, that I have to do all this finagling with the the module loader stuff that it's not so easy to just like Dev and like get going. But I think the benefits of it on the flip side, aside from that are probably good. Like all the things that we've mentioned,

</p>
<p><strong>Jem Young</strong><br />
there's a limit, though, like, I agree with what you are saying, but I think there's a limit on modularity where it's just, yeah, this is a bit excessive, like, I don't need a separate file for every one of these things. And then it gets like hand wavy, or it's like, what is good code maintenance? How do you know when to do it? I don't know. Just don't be too clever with it. Don't try to be too modular. Optimize for you to build optimize for your future self having to fix this, like, would you want to have to go back later and fix this one thing, and that's kind of my general rule.

</p>
<p><strong>Mars Jullian</strong><br />
I think also, that leads into a conversation about how like, code maintenance is ongoing. It's not like you start a project and you like, set everything up perfectly. And you're like, Okay, now it will never changed. And to that point, I mean, gems, right? Like you, you write a bunch of utilities that work for your use case. And as other people come along, they also do code maintenance on what you've done previously. And I think that's when it starts to make sense to break stuff out, but only as it as it's reused to think someone who goes into a project, like, I'm going to make this the most reusable, awesome, clean thing ever. And it's like, well, no one's reusing it. So why is everything in like, 20 different vials? And I think that, I think it's ongoing. And I think you always need to assess when you start something like code maintenance, or some sort of cleanup is an important first step in that project to set yourself up for success as well as the codebase in the long term.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that, too. And I think actually, another point, too, is yeah, if no one's using that one function, then why are you moving it into separate files, but the many, even your own code, if it's starting to reference do something similar? That's where you might say, Oh, I'm gonna clean this up a little bit and make it into its own separate component. That makes a lot of sense.

</p>
<p><strong>Jem Young</strong><br />
Yeah, you probably if you if you ran across someone who's doing that, like Stacy, so and so and starts working with you, like, oh, yeah, I'm gonna take a week to clean up all this code, migrate these separate function, you'd be like, Why do you need to be doing it? Like, again, it's so loose, there's not a hard definition, but you have to pick one to do it and when not to do it, because we have to, we have to keep building stuff can't always just write maintainable code all the time. We just have to keep going. We need to get things out the door, get things out the door. So we get paid to do Yeah, so there's a balance. Yeah.

</p>
<p><strong>Stacy London</strong><br />
And which I think is why like the upfront stuff is so important. Like if you are starting something brand new, or like a new repo, a new web app that you try and apply the pattern. So like their earlier questions, like how do you like what do you use to help you write maintainable code? I think patterns like some of the books that I've read over time, that have really helped me with that were like maintainable JavaScript by Nicholas Zacharias. Like, how to think about everything in terms of reusability. Like, those are really helpful, guy like, guidelines smacks, like for writing. Those kind of books and people that think about structure for maintainability, those have been very important for me, as a developer, in the libraries are making it way easier now. Like, at the time when I read maintainable JavaScript, I was, like, still in jQuery land and doing like spaghetti, jQuery. And then I was like, Oh, what if we do some namespacing. And we do, you know, organize our code and object literals and blah, blah, blah. And that shifted my, the way that I wrote stuff. And the same thing with smacks and now we have react, that kind of forces you into like more modularity by default. And so some of the libraries are helping you write maintainable code just out of the box.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's like the best practice when you're writing react back in the jQuery days, we didn't have that. So kind of good segue into like, a question that I'm interested in is, what's the worst code that you've come across? And maybe it is jQuery days?

</p>
<p><strong>Jem Young</strong><br />
There's so many examples, but so a lot of it my own, you know, try to be too clever. Most of it, for the love of God, if you're writing regular expressions, calm and regular. It's like, it's so easy. I'm not a computer. I can't be like, oh, yeah, I know what this does. Because I'm, I don't spend my time you don't you don't study those, like every night? It's actually a tattoo.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. It's

</p>
<p><strong>Jem Young</strong><br />
like, Oh, yeah. Just like, it's so easy coding your regular expressions. It's, it's so terrible. And it's like a super long one. And it's not common. You're like, okay, I can put this into maybe a regular expression parser and maybe try to figure out what's happening

</p>
<p><strong>Ryan Burgess</strong><br />
and even then you're still chancing it. It's never perfect. Oh, yeah. Oh, my

</p>
<p><strong>Jem Young</strong><br />
God, calm. And

</p>
<p><strong>Ryan Burgess</strong><br />
so if you take one thing away from this episode,

</p>
<p><strong>Jem Young</strong><br />
it's 30 seconds to write a comment. Okay, sorry. That's fine.

</p>
<p><strong>Mars Jullian</strong><br />
I think one of the hard things is when you're when you start working on code, we've already talked about how it's a lot of our reading code especially it's either written by us six months ago, a completely different person or you being a completely different person or one of your co workers. And it's for me, it's been really tough. Like, we go back to the modularity and reusability, and you have all these like utilities, but the minute that you have to chase through like six files to actually figure out what's going on, because you know, something called a helper, the helper calls a helper that helper called. And you were like, literally keep going down this rabbit hole. And I'll say that following breadcrumbs is one of the ways I've learned JavaScript the best, but this is not the type of breadcrumb I want to. This is like, you know, Alice going down the hole, I'm taking the drugs. Really, it's been, that's one of the things I hate the most. So, you know, modularity, yes, to a point. But the minute you have to go chasing something down like that, I think it's just really hard to follow.

</p>
<p><strong>Stacy London</strong><br />
I think, for me, I have two examples. And one was not example of worst code. But it was more about like, worst documentation, not understanding how the code works. So it was, I think, was Perl. And it was for like, some batch process. It was like loading data into a system overnight. And this, this was written in Perl. And it was probably beautifully written. And I'm sure people that write Perl were like, gorgeous. And I'm like, as gibberish to me, I wasn't, I didn't even know Perl. And I was trying to like, get my head around it. So I drew a bunch of pictures, I drew a bunch of documentation about like the flow of data and how it got from this Perl thing to like, in the database. And I create all this documentation around it. And I'm like, you know, this wasn't bad code. But it wasn't documented. And there was no pictures and nothing explaining what it did. So like, backhoe doesn't even have to be like poorly written. It just can be obscure and too clever.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, cuz even if like, you should be able to jump on another language and somewhat understand it. But those comments would have gone a long way. Like you could understand it a lot easier, super helpful. The second

</p>
<p><strong>Stacy London</strong><br />
one was, it just made me laugh, because it was like this terrifying piece of code. That was it was JavaScript. And it was started by it was an if block. And it just said if true. Oh, do this thing. And I was like, What is this? Like? I don't understand, like, I will never touch this because it seems something is very wrong. Why would

</p>
<p><strong>Jem Young</strong><br />
Why would anybody need to do though? No, I like what you said like bad code isn't necessarily poorly written. It can just be like overly clever, where you're like, my favorite code is the ones I've seen where it's like doing bitwise operations on thing. Yeah. And it's just like, someone who posts a link to a Stack Overflow, like this is actually faster than doing it like standard for loop or something. I'm like, Cool. Doesn't matter. Like I'm taking it out because like, it doesn't need to happen.

</p>
<p><strong>Ryan Burgess</strong><br />
are you optimizing performance there? I actually would, at that point, probably optimized for readability. It's going to save time and headaches for other people or yourself working on it. The what you gain in the performance? I don't even know if you would even notice it. Like it's not going to help you.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I would argue if like you really need like, you should only do that if you need to like you were seeing some performance losses. And then you write a comment. Hey, the reason we did it this way is because we were seeing some performance deficiencies or whatever. Yeah, and

</p>
<p><strong>Ryan Burgess</strong><br />
this is what it should look like. And if you need to understand that this is what it's doing. And you're really clear about it.

</p>
<p><strong>Jem Young</strong><br />
The what's the one I see all the time double tilde in JavaScript, because it's actually a rounding function. And it's used to be faster, like couple years ago, it's not anymore, but I see that I'm like, why wouldn't you just write like math dot round or something like that? There's, there's better ways to do this. And to do bitwise operation, there's almost always a better way to do. It was more readable,

</p>
<p><strong>Stacy London</strong><br />
and it's more readable, unwise.

</p>
<p><strong>Jem Young</strong><br />
Ooh. Let's admit that. TC 30. Stacy.

</p>
<p><strong>Augustus Yuan</strong><br />
It's funny, because the the bad code I usually see is in CSS, like, yeah, we'll just don't really, like I saw, like, I recently came across this like page and had like, hundreds of media breakpoints, and it didn't support mobile. So it's just like, okay, okay. All right. Okay, there's a lot of breakpoints here. And then, like, I shrink, it's like, but this isn't mobile, like friendly. Like it doesn't even right. And just like they're like 700.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow, wow. Yeah, CSS is actually probably one of my biggest pain points that I've ever dealt with almost every code base, I feel CSS is just the afterthought. I'm so thankful for things like CSS processors, post CSS, like really breaking things up into chunks, because a lot of the times, I can think of one company I walked into where it was just massive CSS files, and there was chunks of it that were never even being used. And you actually are loading that to like your users. And that is slow. Like when there's a lot of CSS that you do not need that can add up quickly. And but I didn't know I'm like, well, maybe it needs to be there. And so it takes so much time to try and get to the bottom of is this being used. So yeah, CSS is one of my biggest pain points important

</p>
<p><strong>Jem Young</strong><br />
everywhere. Oh, yeah, of course. It's like just a screw you I'm

</p>
<p><strong>Ryan Burgess</strong><br />
so glad Brian Brian Holtz not here today. Do not use IDs in yourself. So

</p>
<p><strong>Jem Young</strong><br />
I agree with that. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
How often do each of you invest in code me? And when do you actually perform going back and cleaning up code.

</p>
<p><strong>Augustus Yuan</strong><br />
So this is actually, like an awesome thing that my team started doing, like, so we've like, transition like fully to Agile. So we like do all the storytime and stuff like that. So like, upfront, when we estimate like, features, we will like, include in the substance like criteria, and try to identify like, okay, these are the places where we need to clean up code. And we'll like, add to our estimate, and like how long it will take us to do this like story as like part of the like, actual story to do it. And it's like, when code review to sign off, it's like, you clean this up, right? I feel like that is like a huge part of why tech that happens. It's like, people will be like, oh, let's try this or like this, do this. And then they won't do like, like, convert everything else to like, what it should be like the standard.

</p>
<p><strong>Ryan Burgess</strong><br />
So you actually bake that into the timeline? Yeah, exactly. Like that. Yeah, sometimes

</p>
<p><strong>Augustus Yuan</strong><br />
it's hard. Because it's like, if there's a competitive deadline, but then it's like, we at least try to like spec out what like, Okay, this will eventually get done. And we'll like add the two dues. Or we'll like have, like, we'll have like, actually, like weekly, like web engineering meetings where play, okay, these are like some of the outstanding tech debt items that we need to address. I do

</p>
<p><strong>Jem Young</strong><br />
it before, when it's feature complete. It's like when I'm done QA signed off on it, then I go back and optimize because I know the state that it's in right now. And I know if I change something, it'll break. So that to me is a good time to do code maintenance. If I do it before, I'm prematurely optimizing, because I'm going to end up rewriting this slide six, seven times. So spending the time to make it maintainable doesn't make sense. But before it goes out the door, like before, it's like baked in, that's when I go back and clean it up.

</p>
<p><strong>Ryan Burgess</strong><br />
Do you worry at that point, you might reintroduce some bugs. Here, it's

</p>
<p><strong>Jem Young</strong><br />
not really because my code maintenance is just like adding comments, make sure the variables are clean, if I need to extract functionality to make it a bit bit more modular, that's a good time to do it. But I know that the state that it's in, if it breaks, I'll know it pretty quickly. And that's the good time to do it. But

</p>
<p><strong>Stacy London</strong><br />
one of the things that that bucket does, and I think it's maybe an Atlassian wide practice, I have to I should check that. But is they used to have, I guess, before I started, they did kind of the 20% of the time thing where you could do like innovation or fix, you know, clean up some tech debt or whatever. And then they converted that. So that was just like every Friday or whatever, it seemed to just join us. So they converted. So every five weeks, we have an entire week that is dedicated to it used to have like a particular theme, like performance week or tech that week or innovation week, and we would do one of those particular things. And now we've switched it to being kind of like pick the thing that you want to do that week. And it could be any of those things. And that's amazing. I've never worked anywhere, we've had like a full week straight every five weeks to do the things that matter to the that you think will make the product better. And remove tech debt. So that the maintenance part of it, I do a lot of that kind of stuff like I will start fixing stuff that hasn't had a consistent pattern or like add some linting so that we could have made more maintainable code or whatever, like Snake Snake that stuff. Thanks. It's not part of like feature development. But it's also really necessary to keep the product healthy. And I'm super grateful that they do that kind of stuff.

</p>
<p><strong>Augustus Yuan</strong><br />
The linting part, I just want to say one thing, one way we helped a dress tech that, like we made like, I think it was Austin, like a dev on our team. He made it so that you can't merge your code if it doesn't pass the linter. Yep. And so we have that too. Oh, yeah, actually. So that's like a great way to like help, like, ensure some level of code maintenance. Well, and then

</p>
<p><strong>Ryan Burgess</strong><br />
that way, it's not someone another engineer having a scream at you that hey, comment your code or do this. It's like, no, the computer just won't allow you to commit that through get right and you're gonna get screamed at by the computer,

</p>
<p><strong>Augustus Yuan</strong><br />
which is great. Exactly. Or rather than me screaming at you, I just link you to the

</p>
<p><strong>Ryan Burgess</strong><br />
screaming. That's perfect. We can

</p>
<p><strong>Stacy London</strong><br />
just stop screaming that looks like a you know, PSA lets us all stop screaming in tech,

</p>
<p><strong>Jem Young</strong><br />
it saves you from those like silly pull requests, comments, were like, hey, actually, you shouldn't do this. But just make it a little rule and you won't have this problem.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, especially if it's something that your team has agreed on that, hey, this is the consistency This is the style that we're using. And once that set, then it's really easy. And then if you have someone onboarding new to the team, they just read that and they go okay, well, that's what everyone's doing. Even if they don't agree with it, whatever it's they're like, this is how we do that cool. At least it's consistent.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, it's really interesting that because I think someone like linting rules can be very much a matter of opinion but how linters have kind of taken us out of the world of opinion to just you know standards and I think that's that's really really powerful because you know, someone might not listen to someone else but you know the computer screams at them encourages strongly listen, I think that's really I mean, I think you know, we all kind of have a complex about that, but you know, at least a listen in one way or another

</p>
<p><strong>Ryan Burgess</strong><br />
so well you might not be able to merger code. So you kind of have Yeah, no,

</p>
<p><strong>Mars Jullian</strong><br />
I think I think that's the beauty of it. Yeah. Like, we no longer have to argue about it like, it's so and then we may want to change a little later, then you can have an argument. But you know, that's a conversation for another day.

</p>
<p><strong>Ryan Burgess</strong><br />
And changing lynoral is a pain in the ass, because then you have to fix it, you have to go back and fix all that code.

</p>
<p><strong>Mars Jullian</strong><br />
That's very true.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, that kind of leads into another point of how do you actually deal with legacy code? If you came into a, maybe it's a new company, or you're on a new project, and you're stuck on that legacy code base? How do you approach that? I know, everyone's like just the fear in their eyes.

</p>
<p><strong>Mars Jullian</strong><br />
I've been doing this for the past few months, and I'm about to embark on a new project that is very similar. I have been re architecting things now for at least six months and will be re architecting things for the next six months. I think legacy code bases either require like a dedicated effort to bring it up to standard or to figure out what it's trying to do, actually, I guess it really depends on how much that code base does, how much effort is involved. And if it's something that's a really critical part of your buy flow or your products, then it really does warrant my opinion warrants the investment of just like heads down, we're going to make we're going to make this you know, work for us. Otherwise, I think your legacy code bases, perhaps you just, you can either chip a chip at them, like one one piece of code at a time where I think it just depends on how important it is to you. And now I'm rambling because I lost my thoughts.

</p>
<p><strong>Ryan Burgess</strong><br />
I think you hammered on some good points.

</p>
<p><strong>Stacy London</strong><br />
I think for like our like, Bitbucket has been around for a while, not as long as some other you know, sites and stuff. But enough long enough that there are portions of it that might be considered, quote, legacy. So an approach that that we're taking is to any new screens, or any new features will be created in the new stack and the new like single page app world, whereas the other stuff will kind of remain where it is. But over time, you will slowly move the most important features the most used things the highest, the things that create the most Mau blah, blah, blah, like those things will go into the the new stack. And you don't have to necessarily you pick that framework of that re architecture and once and all new things go into it. And then you don't have to necessarily have that conversation about like, every single time you do something where does what happens with it, we have like a kind of an agreed upon pattern about new things.

</p>
<p><strong>Ryan Burgess</strong><br />
How do you determine which ones are important features to move? Like in prioritize?

</p>
<p><strong>Stacy London</strong><br />
That's definitely I think, I mean, I'm sure all the developers have their opinions on that. But a lot of it is based on data and the product managers, you know, really set it like figuring out strategically what what the product should do, and what's most important.

</p>
<p><strong>Ryan Burgess</strong><br />
So yeah, I like that data's key

</p>
<p><strong>Jem Young</strong><br />
work at a place where they respects code maintenance and legacy code. I've been to places where they're just like, Oh, why don't you just move on? Like, we'll get that later? It's like, no, we need to do this now. Because they won't get easier later, it only gets harder. And you have to work in a place that respects that. And just like now we're gonna clear two months, and we're gonna, we're just going to use migration.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, cuz you carry that pain over and over and over again. And it's, it's just never ending.

</p>
<p><strong>Mars Jullian</strong><br />
What's also interesting is like, if you're in the industry for long enough, you kind of learn these lessons until that point, like, if you're in a place where people don't understand that, then perhaps they

</p>
<p><strong>Ryan Burgess</strong><br />
run.

</p>
<p><strong>Mars Jullian</strong><br />
No, but perhaps I just haven't been through like some of some more technically challenging situations. And that's something to keep an eye out for, especially when you like either looking for jobs, or assessing where you are now and in your career in general,

</p>
<p><strong>Augustus Yuan</strong><br />
to actually build upon that actually, this is something I do notice, like senior engineers do better than, like junior engineers is they're able to communicate the value and like addressing those tech things. I think like a lot of junior people, like naturally just like want to code and they're like, yeah, we can do it, right. But like a senior engineer is able to be like, hey, like, this is gonna bite us really hard in the long run, and then we're gonna have to, like address it, and that's not going to be happy for it.

</p>
<p><strong>Ryan Burgess</strong><br />
I think sometimes, too, I think you're right on track, there is like seeing that. This is what it's costing us and really adding some value to it of understanding. You know, it's maybe it is a rough estimate of how much time it's actually taking the cost it is to push out new features. And really quantifying that is that's that's huge. It really it gets stakeholders bought into it is like this is the value of us just cleaning up because to them, they don't see under the hood, it still works the same, or ideally, that's what happens. It works about the same, maybe it's a little more performant. But to them, it's the same thing.

</p>
<p><strong>Augustus Yuan</strong><br />
So I'll speak to the legacy code base. I think Evernote is very much experiences in this right now. Like it's kind of like already kind of down in the news. But like Evernote right now is trying to transition to micro services. We used to have like a very monolithic application on Google Web Toolkit, and are transitioning to react. And so I think like really to address legacy code bases. One you really need to communicate the value of like why you're like switching over and why you need to address these things. So for us, like, I think the thing to think about is Evernote, in the beginning was very meant for personal work. And now we're trying to be more collaborative. And so naturally, some of those designs as students, we made for a very personal kind of oriented system, do not transition to, like a collaborative system. So we need to address these things like upfront, like and fully right. And so I think another point is like tech debt doesn't necessarily mean like, oh, engineers didn't know what the heck they were doing. Right? It doesn't mean that it's just like, a bunch of like, except like, a bunch of like, use cases and like acceptance criteria changed. And like, you need to adapt to that. And this and you need to address it,

</p>
<p><strong>Ryan Burgess</strong><br />
business decisions change, and that that makes a big difference. And to your point, too, is like, I mean, Evernotes, what, seven years old now? Oh, yeah. Yeah. So they've created a product, and it's great, and it's working. But eventually, yeah, it becomes, you know, becomes this monolithic code base, it's really hard to maintain. And yeah, it needs to certain things need to be written, it doesn't mean it's bad. It's just that you've added on and added on and added on. And at some point, you kind of take step back and go, alright, we need to clean this up a bit. So I think, honestly, in my mind, every couple years, three years, maybe three to five, code should be rewritten. And I think that's what's nice with the front end, frameworks always changing, is we get a new framework every once in a while, yeah, we want to jump on the new framework.

</p>
<p><strong>Mars Jullian</strong><br />
That's interesting to you, though, because if you think about that, like migration in itself, like to a new, you know, technology is itself a form of code maintenance. But, and I think that's kind of strange, too. Because when you I've been in situations, you know, working, and it's like, Well, we're about to move to this great thing. And then everything completely deteriorates in the current code base, which becomes even harder to move it over. And I think that you, even I think maintenance and migration are very similar, where you also can't just completely like, go, like, Yeah, completely lose hope, I guess. But yeah, rewriting, you know, over and over again, it's pretty important

</p>
<p><strong>Stacy London</strong><br />
give like a clear, like, a clear path, like you, you work really closely with product managers, and like the business side to be like, This is what we need to do and why and if they understand it, from the business perspective that you can, like, have a plan, that means that either you do wholesale rewrite, like, we're gonna ever the whole app, or we're gonna stop everything, we're doing no more features, we're actually rewriting to different platform, or we have this like, migration path where some pieces will be done over time. But there's a plan to know that there's an end goal, right and like, and that's all clear. And like everybody

</p>
<p><strong>Ryan Burgess</strong><br />
understood, I think that's important too, is that you can't do it all at once. It's I don't, I don't think I've ever seen that successfully done. And I know, like I've walked into code bases where it's like, really like painful. One example, as I walked into the company, and it was like, did had a lot of contractors working on the code. And so everyone was kind of in there for a short period and then gone. So no one really cared about how this scaled, or it was maintained. And one thing I did was went through the codebase outlined all the different things that needed fixed, and started to prioritize them, and then just chunked it off. And slowly, as I would ship a new feature, I'd maybe go back and like rewrite something, it was a pretty small team. So I was able to kind of do that myself. But you can't stop innovation, you can't stop shipping new features. No one's gonna buy into that. Yeah, your product managers. Hey, guess what, we're gonna go away for a year. And we're gonna basically rewrite what you already have. And that's just not gonna have anything new. That's just not gonna be it's not gonna happen. So I think you do have to be planted out and chunk it out and see how are we going to support both code bases, I think that's really important, I

</p>
<p><strong>Mars Jullian</strong><br />
think, to kind of speak to that point, like in order to like in finding the balance. It's more than just like actually shipping stuff, but also like building trust between you and your product managers and your designers. Because without trust, you can't do the larger migration, you can't do the larger we architectures in the cleanups. And if it's always kind of a part of the estimate, like Augustus was saying earlier, if it's built into every little project, then you build the trust between all the other stakeholders in order to kind of you know, it's kind of currency later, we're gonna just scrap everything and start over. Have fun. So I think I think beyond just like actual code and software engineering, there is a really people component to it. There's the future people who read the code, there's a trust that you build with others and writing new and maintainable code. And it's, it's both things.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, one thing I want to add to is that I've learned, even actually, at Netflix, we've learned that is sometimes when you're changing a code base, it's almost better to change the technology, but not the design at the same time. Because if you're trying to measure the difference between that you can get really, really stuck in trying to decide, oh, wait, did the design change the performance of if you're looking at metrics, or is it the actual code that changed it? You don't really know. So that actually makes it harder to when you're speaking to design or product managers, you're like, No, no, it's not going to change to the user, they're not going to notice a difference. We're just changing the underlying code. And that's like, sometimes that it's kind of scary because they're like, Wait, we're not doing any difference. Like, what's the point,

</p>
<p><strong>Mars Jullian</strong><br />
I actually think that's interesting. Because just like the product I've been working on, for the past six months, we've been re architecting, our signup flow. And even though nothing looks different, the idea behind the architecture and the code maintenance is that actually, it may be more resilient. So it may not look different, but there are still functional differences between the old code base and the new code base, because the more clean if you want to call it the more extensible, the more scalable, the less bugs, the better user experience. Yes.

</p>
<p><strong>Jem Young</strong><br />
I like to summon up as your coach to live a good life, it should, it should come into the world. And not like disrupt things too much. Like just kind of exists, it should grow up, maybe mature, maybe scale a little bit, but still not be too disruptive, but like, do what it should do, and ensure that you get that like be able to pull it out without like taking down the entire system. And like that's all the code I want to write. They just it lives a good life. It had assignment, it's time to go and that's and it should be easily killed.

</p>
<p><strong>Mars Jullian</strong><br />
Right? Perhaps code is kind of like a fruit fly or goldfish lifespan, but they live happy lives.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And they don't disrupt everything else.

</p>
<p><strong>Stacy London</strong><br />
Except for that artificial intelligence code that's like self aware.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, at the end of each episode, we like to share pics of things that we've found interesting and like to share with our listeners. Let's go around the table and share our picks for today's episode. Maurice, you want to start it off?

</p>
<p><strong>Mars Jullian</strong><br />
Sure. Coming off of gems really cute description of the way code should live its life. One of the thing one of my pics is an app called plant any. I know sounds ridiculous. I've obviously been on this like really big health kick recently. And part of that is drinking a lot of water. And so this app actually encourages you to drink water because the water feeds the plant and the plant is this like it's kind of like a Tamagotchi for water drinking.

</p>
<p><strong>Jem Young</strong><br />
You're gonna have to explain Takashi for people younger. Oh, goodness. Yeah, we're Oh.

</p>
<p><strong>Mars Jullian</strong><br />
Wow. Okay, so I mean, Tamagotchi, this little digital creature that you would give to like a seven year old and tell them to try to kind of raise it. And this is like a really rude introduction to child rearing.

It's not the same.

</p>
<p><strong>Mars Jullian</strong><br />
It's not of course not. But, um, you're supposed to feed it and water it and play with it and keep it happy. And all sorts of things. The plant nanny, you know, the plants in my plant any app aren't quite as demanding. They'll stay there. And they won't die if I don't water them. But anyways, they're really cute. If you're looking for a cool way to keep track of your water intake, I recommend it.

</p>
<p><strong>Stacy London</strong><br />
Oh, so it's not an app to remind you to water plants. It's to remind you to water yourself. Yes, it's an

</p>
<p><strong>Mars Jullian</strong><br />
app to help you keep track of how much you're drinking. And the benefit is that your plant kind of smiles at you like waves. Like grows up, the more water you drink and you know leading a healthy lifestyle. It's also about drinking a lot of water. So anyways, second pic is I'm working on a new talk. And it's not something that's very well formed. I have no idea where this talk is going. But I recently learned about mind mapping, which is just a way to brain dump and then potentially organize later. So I've been using an app called Mind node. A really close friend of mine use it for recent blog posts. He really recommends it even if you don't like my node i recommend mind mapping because if you're trying to formulate thoughts I have no idea where they're gonna end up. This is probably a good way

</p>
<p><strong>Ryan Burgess</strong><br />
to awesome Augustus. What do you have? Yeah, my

</p>
<p><strong>Augustus Yuan</strong><br />
two picks one is Ali Wong. I just watched her show yesterday. She's on tour right now. But yeah, I think definitely check out baby cobra and Netflix haven't so you actually use our live Oh yeah, I saw her live and she's just awesome. She's a legend. Like honestly her jokes are so on point and she's just like so like she did like ethnic studies like for her BA and like she's just like so culturally aware her like jokes are just like, so great. And I feel like she's just like she's just so original she like I've watched a lot of comedians on like laugh factory but she just brings like a lot to like the comedy world so yeah, definitely check her out. The next one is this like DeepMind article? Basically DeepMind partnered with Blizzard so that they're using StarCraft two as a platform to try out machine learning to train artificial intelligence. So like, like AI and like games are like pretty complex but like if you can like use machine learning to like, like observe like humans and interactions and like the article has like a bunch of like really cool things like for people who are like really big fans of Starcraft two and stuff. I definitely recommend checking it out. It's like really cool.

</p>
<p><strong>Jem Young</strong><br />
Didn't like aI beat the best Dota player in the world recently. Like it was like Elon Musk. Yes. His company. Yeah, the AI like be So in Dota, like the worst in the world,

</p>
<p><strong>Ryan Burgess</strong><br />
yes, I saw that I saw an article or something about that recently. So that is pretty damn cool. That's actually scary for us. Computers are taking over. Jam What do you

</p>
<p><strong>Jem Young</strong><br />
see my first pick is Stacy's haircut is amazing. Picture and posted. It is a great haircut. Well, I'll take lots of pictures. Just make it really uncomfortable for you. By second pic is the defenders on Netflix. But actually not the whole show just Episode Three because the show is like it just okay so far. But there's a point in episode three and Ryan, anybody's seen it knows exactly what I'm talking about. We were like, oh, yeah, it just got

</p>
<p><strong>Ryan Burgess</strong><br />
well, because all right, the first couple episodes are very slow. And then there's a point in episode three where you're like, oh, shit, exactly.

</p>
<p><strong>Jem Young</strong><br />
That was my exact reaction. I was like, oh, it just got good

</p>
<p><strong>Mars Jullian</strong><br />
conversation earlier with Yuri and he's like the show is going nowhere. Wait till

</p>
<p><strong>Jem Young</strong><br />
and my third and last pick is Mars talk. Speaking of maintainability she has a talk in order chess for best practices for usable components. Thank you. Your chest is fantastic. And Mars. Fantastic. SPEAKER So if you're in Stockholm, that's right. Yes. Yes. You're in Stockholm. Check it out. And speakers. Awesome. Stickers. What kind of stickers?

</p>
<p><strong>Ryan Burgess</strong><br />
Stickers. Front end. Oh, so yeah,

</p>
<p><strong>Mars Jullian</strong><br />
I'm trying to get the shoe rules sticker. Oh, yeah. I'm trying to get more of those.

</p>
<p><strong>Ryan Burgess</strong><br />
Great, Stacy, what do you have?

</p>
<p><strong>Stacy London</strong><br />
Let's see. So in addition to screaming into a sheet cake, I have two picks that are not tech related, because also everything's a garbage fire. And so I like to listen to music to escape the garbage fire. So my two picks are cosmos is a Icelandic band. They kind of play like minimal experimental techno. I came across them over time from like listening to Olafur Arnalds and Janice Rasmussen, really awesome. I saw them in Icelandic airwaves in 2014, which was really great. So good new track from them. And then the second pick is the subsequent. So like all of our honors, if you're not familiar with him, you can explore some of his music particles is a very beautiful track. Piano based strings singing lovely, very peaceful, very good thing to code to. Ooh, great. It's

</p>
<p><strong>Jem Young</strong><br />
my playlists.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, we'll add it to the front end happier playlists. Right on. Alright, I have two picks. I love that gem picked Mars's talk, because I'm actually picking, since we're talking about code means I'm actually picking gems talk that's in Brazil, JS, he'll be talking about code maintenance, which is great. I've seen the talk as a rough draft. It's really good so far. And I can expect it's only going to be better when he actually performs it. So definitely, if you're in Brazil, and you're going to Brazil, JS check it out. Are they going to have it filmed?

</p>
<p><strong>Jem Young</strong><br />
I believe so.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, good. So we'll at least be able to share that with the listeners as well, if they aren't able to make it to Brazil with you. Keynote. It is a keynote. Yeah,

</p>
<p><strong>Jem Young</strong><br />
I'm in the I'm in the hangover slot, which is not the first day talk. It's the first talk of the second day so hungover from the party,

</p>
<p><strong>Ryan Burgess</strong><br />
you can pump people up, you know, that's a good way that you can start off it's like, hey, everyone's hung over. I don't give a shit. We're going like, get them. Yeah. Awesome. Dog jets. That's good. Yeah. My second pick is actually if you want to come help Netflix maintain their code. We actually have a senior UI engineer role on our team that Mars Gemini both work on so yeah, come apply. I'll add a link in the show notes. And yeah, love to hear from you. Great. Well, thank you all for listening to today's episode. We're also very thankful for everyone that's left us feedback and ratings on iTunes. It's really helped us spread the word about the podcast. We appreciate the help. Any last words?

</p>
<p><strong>Stacy London</strong><br />
love over hate.

</p>
<p><strong>Jem Young</strong><br />
Cheers. Cheers. I'll see bugs.

</p>
<p><strong>Mars Jullian</strong><br />
catchers without the keyword

</p>
`;
        return transcript;
    };