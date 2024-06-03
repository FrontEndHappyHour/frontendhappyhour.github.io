module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the sixth episode of Front End happier. The show where over drinks we talk about a variety of front end development topics. In this episode, we'll be talking about something really important to software development. And we all may or may not like unit testing. Since we're a happy hour show each episode we choose a keyword that if it's mentioned, we'll take a drink. In light of this episodes theme of unit testing, what have you chosen for this keyword? Great. So from now on if the word bugs is mentioned, in the episode, we'll take a drink. Let's get started by going around the table and introducing today's panels. Versus monster. Yeah, sure.

</p>
<p><strong>Augustus Yuan</strong><br />
My name is Augustus. I'm a front end engineer at Evernote. 

</p>
<p><strong>Jem Young</strong><br />
My name is Jem Young. I'm a senior UI engineer at Netflix.

</p>
<p><strong>Derrick Showers</strong><br />
My name is Derek showers. I am a UI engineer. 

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a UI engineering manager at Netflix. We are have like today on the handleless. Some of them weren't able to make it. Gem. What did you say that the reason why they fail, though? 

</p>
<p><strong>Jem Young</strong><br />
Not everybody had a good reason today. But this is indicative of what happens when I ask people to write more unit tests. Like yeah, that's good idea. Nobody, actually. And the people that do just sit around and drink beer. Yeah, exactly. That's why we Netflix is falling apart. No more, you're gonna test. 

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so before we go into 100% coverage of unit tests, I'd like to give a brief description of what an actual unit test is, I think sometimes that can be a pretty bloated term, the way I think of it, and you guys can jump in chime in what you think of it as a unit test is a way to focus on a single piece of code is typically testing a single function in an object or module, when I think of unit tests, it should be very simple, quick and easy to write and run. This will mean that in any given project, you'll probably have multiple unit tests, or a lot of unit tests, testing a lot of functions. The more unit tests are hopefully to avoid pugs for leaking into the product code. 

</p>
<p><strong>All</strong><br />
Cheers. 

</p>
<p><strong>Ryan Burgess</strong><br />
Is that a decent way of describing it. Anyone want to add anything else to what a unit test is? 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think it's worth maybe mentioning, especially I know, from people that are just getting started and running. It hasn't there's different types of tests. So unit is a very specific subset of those tests. And we'll talk more about that in this episode. But you know, we have integration tests, and then you have Selenium or acceptance testing. So all are kind of on the same line. Definitely. Difference in like scope. That makes a lot of sense. Yeah. Just focusing really on the unit test. 

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it can be confusing. Testing in general, there's so many different things. testing code. 

</p>
<p><strong>Jem Young</strong><br />
I look at it like unit tests is the it's the smallest measure, like unit of work. That's happening. You're testing. You don't want to go abroad. Like entirely, you're exporting, like 20 Coffee you want that's all that do you want? Like one specific function, this one small thing? That makes a lot of sense? Yes. Very small and setpoint function does should be one thing and return something you're like, yep, that's working. And that's how you're testing. Exactly. Yeah. And I, for me getting started, like, way back in the day, that was the hardest thing was, what is someone explain to me? What's like, the most basic thing this pump is supposed to do? Like our history. And he's like, okay, that's that. And that's it. Like, that's how I get started. Like, you build those up until you have an impact. And that's it. That's the funny thing is unit test is so simple, that the one little piece of code that is alright, that's it. 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think it also helps you to write their code, because then you a lot of times, I find myself refactoring my code. And this, this function is doing many more things than what it should be. But when you write that unit test, it's just much more apparent to the fact that it's really fully refactor your code because I've written a function that I'm like, wait, it's doing way too many events here. I can't write a test for this. And uh, your your function probably shouldn't be doing that many things. Like that's a problem in itself, right? There's, it identifies those problems, which is great. 

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, this might be like a given. But I think another big thing about unit tests is that it's very easily automated so that it's just something that you can just like run it like the press of a button, and then it just doesn't tell you the circles or whatever. 

</p>
<p><strong>Ryan Burgess</strong><br />
So this is kind of actually a hard question. I'm interested to hear from What you guys think? How do you get started writing unit tests? I've been writing them for a while, but I'm trying to think like, how do you actually get started to write? For you? 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think maybe like, the reason that that's how a lot of us feel is because when you, you, I think typically a lot of people don't write unit tests for their personal projects. Some Yeah, I think it's good. I don't think that you know, people, that's kind of the last thing, so, but you're required to write unit tests when you actually are working on stuff that scales and professionally. So a lot of times, that's kind of already set up for you. So I think that that makes it challenging, because it's very hard to find those drills and, and like, there's just so many different things that, that you have to figure out, like testing frameworks and assertion libraries and test runners and all that stuff. So yeah, so

</p>
<p><strong>Ryan Burgess</strong><br />
you're seeing it's like, it's I've figured out, it's already figured out when you like, enter a copy. But I mean, if you're a startup, it may not be right. Very early on. And you're right. I think sometimes even in my own personal projects on like, yeah, I don't have to write unit tests, which, you know, probably should, and you're right, that's probably a added task you have to do is pick a framework, find out what you want to test, or like what you want to use it make your tests. And so I think there's a little bit more overage that you need to deal with

</p>
<p><strong>Jem Young</strong><br />
I think the easiest way to get started is like ignore, pass runners ignore Hansi framework, this came out last week, just use asserts for now, like, No, it has a certain built in and you just start writing surgery, you say, oh, it's the checking string. So just the cert, the string can be sure. And a CERT is going to return a string. And that, to me is like the most basic way of getting started. I got tripped up beginning because I think when I first started reading it, I was like, what's the hottest, greatest framework out there? Right? Like, oh, use this and this and this. And I want to say I ended up like using selenium for something, which is like gala rom hacking? Oh, totally. Because it's confusing. Yes. Like in school, we went over you pass. But our we will have different types of tests like blackbox testing. We never went over, like, what is a unit test and how to write a simple unit test. And it's, again, like everybody's echo today. It's so simple level testing. Like it's not complicated. It's not sexy. It's just like, Does this do this one thing, right? And that's it. So I say, Sir, it's kind of in Python, I know it's coming around a certain line with your code. So it's actually not a bad way to start. And then like at the end, you just subtract all that. Yeah, at least gets you in the mindset of Yeah. 

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. As you're writing and actually thinking through the essays, you write the code. I like that. Actually. That's a good suggestion. Yeah. It's funny, too, is that even as we're talking, it does sound like it is a daunting task. So like, what does this mean? So like, that's a hard thing to overcome, is like, I think it is scary for someone to get started. 

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I think like, it's interesting, because it is just so important. And I think everyone like knows it. They just don't do it. I think it's because kind of what you mentioned about personal products, like a lot people don't do it as because I don't think the value of unit tests really like shows its full potential and how it starts scaling the market. Once you start having like huge application. There's like so many little things that used to then like one little thing that breaks, like unit testing catch that, for me, like I had to like really change like how I thought about going about projects, like when I started doing some unit tests, like I had to start thinking of test level cases rather than actual goals. Sometimes. I know when I started, please, I just be like, oh, like, what can I do to get make this whole future project project? But then like, I didn't really think about how I would break up my life methods or my punchlines into like testable, like different little things that can access easily. 

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it makes sense. It's like you to change your mindset out here, like wanting to test your makings, more modular code. 

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. 

</p>
<p><strong>Jem Young</strong><br />
I think it's good. And this is something I tripped me up the beginning was differentiating a unit test between integration tests. I think, Derrick, you touched on earlier, you want to go into like a little bit more detail about the differences? Sometimes they're really, really similar. Yeah. And it like it got me in the beginning of the movie for sure. 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I'm trying my essentially, it's all about like, how much of that much you're testing. So I think like you start with unit, and then you kind of like, the funnel kind of expands as you go into integration, testing, have more of an interaction that will lay out, like make sure that everything's right, depending on what you're what you're what you're testing. But if a React component and Ember component are similar, never Ember integration has is all around. And then selenium, which you mentioned that acceptance is more like the entire user flow. What differs from selenium being not really a unit testing is not really, you're not really testing options at that point. The difference is your test. You're essentially like a bot that's going through the site as a user and, you know, then you're looking for things like degradation and all scaling what the UI how the UI was how you're different integration. are working together? Yeah, unit unit. I mean, unit and integration are tricky. Because like, it really depends on I think it just comes down to whether you're testing, or you're just testing that this function returns a modified string, like Jem was saying earlier than you're testing. This component showed on page wherever it is on your on your application, you're looking for like my integration. Yeah, actually, explanation too simple to like, exactly that. A good way to describe it. There's some really, there's actually some really good stuff on for for those of us that write Ember, which is just me. But anyway, there's anybody else out there that writes Ember, hopefully there is, Ember does have some really good documentation on their guide session and actually outlined all three of those unit integration.

</p>
<p><strong>Ryan Burgess</strong><br />
And Ember is actually pretty well integrated already. 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, it was. Yeah, I was gonna say, too, when you're talking about like getting past when we were talking about getting customers and stuff set up nicely with at least Ember CLI, and some I'm sure some of the other CLI is that are becoming scaffolds or whatever, are becoming popular, it's just super easy to it's already built into like a CLI. So your test runners, you don't have to worry about, you know, they use Qt in it. But you can use whatever framework you want. But you have like everything built, ready to start, you don't want to modify anything. I mean, even when you essentially want to generate a new component. With Ember CLI, you get the component and get, it has value. It has the sample test code and everything in there. So it makes it really easy for beginner. 

</p>
<p><strong>Ryan Burgess</strong><br />
So you're basically saying there's no excuse not hurry up? This is? What makes a good unit testing when if you see unit tests in your code, like another engineers written it, what makes it good? What's something to look for just getting started? What should I think of actually writing a unit test? 

</p>
<p><strong>Jem Young</strong><br />
So I'll say this, and I say this all the time. People need to comment more. No. And people like sometimes come with their code, they don't come and pass. But you should come on your test. And that's actually different school thought somebody were like, Oh, your test should be descriptive in itself. But I disagree. You should, you should write tests that are commented and be like, Oh, here's one. Cool. The second part of that is, again, it's that fine line between integration and unit testing. If you're importing other libraries or files, things like that, then it's probably more of an integration test, like a true perfect ideal unit test is everything's locked out, other than the file you're testing. So if I'm testing a React component, like react to be mocked out, which is weird, you can't really use that component that but if you're importing like, I mean, like lodash, and take create all these things for a unit test, then you're writing integration tests, that's the means. Like, it's a red flag for if they're even tested, and they're, they're importing all the other thing. So that's me, it's like a good year. 

</p>
<p><strong>Ryan Burgess</strong><br />
You're like over complicating that is what you're kind of, yes. 

</p>
<p><strong>Jem Young</strong><br />
What if there's a bug in the library? Sure. And then your unit test fails, and you're like, Oh, well, the tests pass the library fail. Well, that's good. 

</p>
<p><strong>Derrick Showers</strong><br />
So I think that, that he bring out Ember, but it's a really good example illustrates kind of what it's, like, help people out to help know exactly which ones which they give you limited scope to certain things based on designated or integration tests. So for instance, an integration test, you'll have access to that component itself, use that access to render it, and then only the unit tests, you have access, you just held them this stuff like Biggie Hall does that subject and you get access, you can have like the individual methods on it. It was kind of cool. But then you have to explicitly say, Okay, this is no longer integration test. But I want to test this specific method on this component. So that's awesome. Yeah, sometimes especially, I'm just like, I just want to be able to test one method as we are, I just want to be able to call this action or something, but I can't do that. But it's also probably means that I'm doing something wrong. 

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. It's like almost helping you for making like that mistake. Yeah, basically. Like, that's a great idea. I you know, you brought up react. I feel like I saw some creating a React CLI tool. I heard about that. Yeah, I don't haven't really pulled along too much. Maybe I should probably go look into it more. But I think a lot of the thoughts and ideas are something along Yeah, I mean, Ember CLI, so I'd be interested to see to I guess, to why is it important to write tests? Like, what are the benefits for writing unit tests? And it kind of sounds like a dumb question, but I think it's what what makes it important to have

</p>
<p><strong>Derrick Showers</strong><br />
I mean, it makes it makes developers because why? What does it prevent? Depends on it. Yeah.

</p>
<p><strong>Jem Young</strong><br />
I say like, testing is almost philosophical to a certain degree. Because yeah, you understand the code. Like when you know when you're in when you're writing the code, it's in your mind, and you have it down for like, I understand top to bottom, blah, blah, six months from your future self does not remember any of that code because yeah, maybe how is it but like, there's still some weird things you got going on? To me it tests for events that comes in maybe developer number three, like oh, look at a city like Derek he make this function that does this, but there's a reason he did that. Yeah. And it's tests like, test that reason. And then So what changes and then it might like prevent a cascading failure. To me that's like a good isn't the right test. What I like even if you kind of touched on a little bit there too, but more documenting it for yourself, it's also documenting it for your team or anyone else looking at code. And you can actually read it and go, Oh, okay get with Derek's right near with gems writing that makes a lot of sense. And I know actually, you're mentioning what comments you actually are really good at writing comments down in your code is very clean, and lots of comments. To me, it's totally, it's totally a facade, like it is a good way to make bad code look good. Not saying like good or bad. But hey, you can write mediocre code and then add comments that didn't make it as simple. But why do I use this other than preventing bugs? It's just insanity, right? You want to make sure that we all work in a large company. So the code plug is a millions of these people. Like you just want a basic, someone watching your back saying like, Oh, yeah, I pass an array to this function effective string. The program's gonna catch that, and they're gonna fail, what sort of unit test one test for, but you want to make sure there's just the edge cases you just like, take care of.

</p>
<p><strong>Derrick Showers</strong><br />
And how many times do you write and write integration or unit tests and realize that you have, like, all the time for me? Awesome. Yeah, awesome. Like one? Not every? 

</p>
<p><strong>Jem Young</strong><br />
Yeah, all the time. Yeah, that's it, right there. 

</p>
<p><strong>Ryan Burgess</strong><br />
But it helps because you're actually catching it before you're even passing it off to someone else. Like, maybe you have a different person that's actually doing the QA is you're catching a lot of those bugs before it actually gets sent off. So that's a good thing. I also want to say it does, like we kind of touched on a little bit, but code quality is super important. Like I think it plain and simple. Your code is a lot better quality by because you are testing it, and running these tests constantly to make sure that you haven't broken something. And I mean, to your point there it happens. It's like, I'll forget that I was like that function was supposed to return, you know, a string or whatever. And I'm thinking that I do something different with that function, and it breaks I'd rather know about that in a unit test, rather than getting it in production and having that break. 

</p>
<p><strong>Derrick Showers</strong><br />
You know, what else do you just read you just sparked? Not a shower thought, Oh, more? Is it slows you down? A good way to think that if you just write code, you just push it out? Quickly, you know, you're going to miss things. So like, helps you like think about things, the code that you wrote in a different way like this, how do I know this? So taking a step back definitely gets better, I would imagine much higher quality. 

</p>
<p><strong>Ryan Burgess</strong><br />
I like the set slows you down. But in a way, I almost feel like something I know, like at Netflix, we like to move quickly and iterate a lot. And I don't know if it slows us down in that mentality. But it slows us down in the sense that it's making sure that we don't break things in production. It's like we can move quickly and rely on those units. Yeah, Dominus. No, no, no, I knew. I was like, but it actually allows you to move quickly. But move quickly. Smart. Like, yeah, he said about it. And not just like, Alright, whatever, we just, we're just going to ship this. It's okay. It's like, it's that sound in the chat, again, 

</p>
<p><strong>Augustus Yuan</strong><br />
It makes me think of like Facebook, how they used to have the slogan, move fast and break things. And then they changed it to what's the new one now? Like, on an email, they change? Like, do you remember that? I think they changed it to like, basically the opposite. Like they're trying to, like, we gotta be mindful of what we ship to the users. Yeah. Yeah, I actually also really liked what you mentioned Casio heating failures, I actually have. I have, I had an incident that happened I was to in the new codebase for every now and we bundle Our ES lint test cases with our actual unit test cases. And the Yes, one thing we have this automated policy, failings. Yes. And I was like, Oh, you can ignore that for now. You know, there's still some bugs with things like Okay, sure. Hey, like everything else looks good. So I merged into a testing server, and they all these unit tests are failing. And we were like, what's going on? And it turns out, like, yes, lint was actually catching something that hey, there's something that drove all these things. So it's definitely super useful. 

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. Let me just a simple like, es lint, like or write like asking that and like, letting you know or blocking you from committing like being hit or just like letting you know ahead of time. It's, it's frustrating. You're like, Oh, I just want to get this out. But at least it's letting you know that and it's it's not someone having to do code review. It's the computers telling you hey, this is wrong, fix it. 

</p>
<p><strong>Jem Young</strong><br />
Especially in the language with Notepad checking files are especially important in Java, you know, it'll the analysis will yield some issues. noodle secure your patcher on JavaScript. Now, just just like last week where we were talking about what's available, right? Like it works in JavaScript, it'll work perfectly fine. It'll give you like, a blank string. I don't think we actually were sold on our answer. We all were tested. I want to say it's a blank stream. I think, the tragedy this is for the interviewer. Yeah. But again, like something, JavaScript VT, it's a great Plusle language, but no type checking. So imagine that weird air you get when you're trying to like due to race or something like that. And you would test such as chess tested, and catch it. If something like weird happens. That's a good flying string. Okay, it is. 

</p>
<p><strong>Ryan Burgess</strong><br />
Thanks for looking up. But that's actually good. So now we know if I have to go interview somewhere. Oh, yeah. Oh, yeah. We could ask someone as well. Please, never do. That's not a good use. So we've been talking about integration tests and unit tests. I'd like to kind of propose the question of, do we actually need unit tests? If we're also doing integration test? Is it important to have both? Or can you do one or the other? 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think it depends on what you're testing, obviously. So I think, at least in an ember environment, you know, if you have a component, if you create a new component, and you don't manage any state inside of that component, there's probably not going to be anything that you can use to test if you can't really unit test an action or, you know, maybe something that toggles a property probably wouldn't need it, because that that would all be an integration test. So I think that's kind of your answer, do you have a component that will use the manipulates a string and, you know, has set some sort of computed property that that it uses a template, you know, that might be something that you want a unit test, you probably want to be both unit tests, just that that one method that's manipulating that string, in any integration test everything else? For the app that I'm currently working on? At work? It's, we write very few unit tests, a lot of integration tests. So maybe we just don't know how to do it. We're very conscious of it. And we have just engineers work with us. What's the best way? Who's responsible? Is it like both you and a test engineer? Or is it like solely you're the engineer, right? Those integration tests? Yeah, it's kind of changing. It used to be more he has new writing has now it's becoming I think this is true, a lot of places that the person who's developing the software is actually writing the test, the test engineers there for guidance, and to help write test cases, to make sure that your coverage is what it should be, as far as not necessarily code coverage was hard. Like, it used to be like the script has scripts or whatever you want to call away, basically, what from a UI standpoint. 

</p>
<p><strong>Ryan Burgess</strong><br />
That makes sense. I also think it's I think it's really important to have a second set of eyes on who is like, it's really tough to just depend on you as the engineer writing it, because you write things the way you want before. And to me, that's always been my hold up with that is like, yeah, I can totally test my own code. But I'm going to test it the way that I intended it to work, and not necessarily think of all the edge cases and that were, you know, some of those integration tests or unit tests may hopefully bridge some of that gap. Yeah, I'm glad you brought that up. Because I think this is definitely a slippery slope. 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. Like, it's, it's, I think it is, especially for startups, it's probably a lot easier that an engineer can do everything from build the product to or build the feature to test it in. Cool. But I definitely think that there's a danger if you're building something, and you're building it the way that you think it should work, it's definitely good to have a second pair of eyes. 

</p>
<p><strong>Ryan Burgess</strong><br />
So I mean, it's also like saying, especially in a start up is like, you could be an engineer, yeah, QA as well as like the CEO. And like that, I mean, that's taught because it's like, you're you're wearing so many hats than that, then you kind of have to be a little more focused at that point. So I can see what you're getting at. 

</p>
<p><strong>Jem Young</strong><br />
I think, I think I, you both have like, really valid points. But I was thinking as you were talking, what, what are unit tests, and honestly, probably most of the stuff I build, I wouldn't use this. But if I decided like, Oh, hey, I'm using this function here. I'm using this functionality here. Let me extract that into some utility library that I would like, yeah. So I want to make sure that I'm covering all the cases that this library is going to use for. And then once that's on how to work out again, but it's something if something was using that library, I wouldn't use that. 

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. I mean, I think what we do with all these frameworks is we're essentially consuming a lot of these API's and just implementing them. So a lot of the stuff that if you're, if that's what you're doing on a day to day, integration tests are probably more common because you're you're essentially consuming somebody else's. And then hopefully, that stuff that you're consuming is what like React for instance, you know, there's probably a lot of unit tests in react because That's what's making all of your stuff, zoom. So yeah, and probably the majority of our listeners and us are writing or building features and not necessarily library hood. No one even like with champ said there, you kind of mentioned, using something that wants you to use multiple times like is that it almost feels like that's one use of abstracted as a module and leverage it and probably ready to use the thing. That's kind of what you're getting. Yeah, that's right. Yeah. And I, that's totally when I found myself writing more unit tests. I'm like, wait, I'm using this, like, similar function, I should probably abstract that. And make it a module that I can then use in pull files, or whatever it may be. But then also, probably write a unit test for it as well. 

</p>
<p><strong>Jem Young</strong><br />
Yeah. And as front end engineers, like just show hands of the room, how many people have built a big feature? Big complex feature, and the spec has not changed from start to finish? Yeah, no, no, no, exactly. So it's okay. If you start off and you're like, you, you hammer juniors and yours, like, you need to write more units. So what do you do it? Come on, man? And then they're like, Okay, so I wrote this awesome test suite, how the spec changes in the middle, which is, it happens all the time, it's gonna keep happening, then unit tests, probably not your best idea. As long as you have like, oh, it needs to do this, and then do this probably write an integration test, because that's probably not going to change the long run. But the core like, that's what's happening is probably gonna change a lot. So that's actually a good segue. Sorry. So you're gonna run into test driven development? Oh, totally. So writing test driven development is that you're actually starting from writing your tests, like you write tests in or before writing your actual code. And so I guess I'm assuming your opinion on that is, if the code is changing, like the spec is changing, is probably very difficult to write test driven development at that point, I think, and everybody disagree with me, but I think test driven development is a relic of, of like the 90s. In the 80s. When a you have typed languages, you had what you had massive mainframes that are running these very, like complex like C++, Java, like, meaty, dense languages. And so and you have code, that's probably not gonna change, because agile was a thing back then, like you weren't prostituting spec, like, your spec was written down in a book. And this book was like, print out distributed Saturday referencing this book. And these are the like, the old school engineers. And then yeah, in those days, test driven development shirts, you start with a test, and then you code against that. But modern web development, I don't think that was like, 

</p>
<p><strong>Derrick Showers</strong><br />
Do you think it's maybe not just these 90s? But maybe what type of development you do like I'm thinking maybe like an eight. I don't know this, but I'm thinking maybe like, if you're building the material at the API level, maybe your stuff shouldn't change as much of your API should be pretty solid. So maybe you could do more pester development or when you're working with databases, and yeah, 

</p>
<p><strong>Jem Young</strong><br />
No, no, you're right. Sorry, I should clarify for web development. Like test driven development, I'll ease into things much if you work at NASA. And that code that's ever needs to work the first time and like it cannot fail? Yes, sir. Development? Absolutely. But as far as welding, I don't think that certain welding. 

</p>
<p><strong>Derrick Showers</strong><br />
And that's kind of the same as I think a good way to think about it is is looking at like a backhand versus running like a, an API is kind of the same way. I mean, you you hand somebody like this API documentation, like this is your API. Sometimes you don't even have to draw the API, right. It's if you're using a third party, or something. So you're just it's kind of the same thing. Right? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
So I think one, one thing, I kind of want to challenge that a little bit like, I agree in some ways of the fact that especially in startups, and like, on a product base, if you're trying to move quickly, I've also been at a lot of agencies before I actually moved to the product side. And one of the agencies I worked at would have a lot of signed off from the height. So you would have these very detailed wireframes I love getting them it was like nothing changes, because it was signed off by the client was very clear what I had to develop and like what the functionality had to be. So I think in that aspect, I would feel more comfortable writing unit tests ahead of time and doing the test driven development. Because I have a clear, you know, well documented spec that is not cheating me now more product product driven. I feel like we change things iterate, and we want to move quickly. And we're not necessarily having like a client saying, Alright, this is done. Yeah, perfect. Here's the spec. This is not going to change, we have to have that sign off. So I think there's a little bit back and forth and not becomes a harder thing to be test driven development. I don't know if anyone else has had experience with that. But that is one case where I'm like I feel a little more confident. Ready tester, the developers. 

</p>
<p><strong>Derrick Showers</strong><br />
I think maybe I think the problem though, is, at least in my experience, clients can be somewhat indecisive, so they might have Thought they signed off on something. But then they look at it like Internet Explorer 5.5 on a Mac, and they're like, Oh, why are you supporting? Well, I go with like most of the craziest thing sometimes. 

</p>
<p><strong>Ryan Burgess</strong><br />
So I guess a lot of the agency that is working at where he was in Toronto, so it was working on walmart.ca. So the Canadian version of like walmart.com. And a lot of that stuff has to be approved in wasn't really changing. It was very well documented. Like we had UX designers like building out these like, really well detailed wireframes, before it actually hit my plate, and that I had to build it. So I don't know, like that's a larger client. And I think maybe a little more theocracy around that. And it's not a lot of change. 

</p>
<p><strong>Derrick Showers</strong><br />
Maybe, maybe, just, maybe, Walmart just doesn't give a shit. 

</p>
<p><strong>Ryan Burgess</strong><br />
But even I worked for a lot of banking sites, and a lot of telecommunications, those types of things. It was like, everything was very well detailed, and for process, and that was approved before development actually started. So I guess that's what I'm getting now. Is that Yeah, well, necessarily, yeah, no, I think. 

</p>
<p><strong>Augustus Yuan</strong><br />
And when I think of like, TD, actually, I really like how you brought up earlier, like, writing tests makes you move slow, in a good way. Like, I think that's like what TDD have embraces. And actually, I was so inclined to, like, disagree with you, Jen. But then once you like, talk about it, how we're moving agile, and I think like, I ultimately, really, I feel like TDD might not have as much of a place for web development as maybe like, if you have like a very specific spec with like, super, super specific wireframes, or like an API that's documented by that's, that is something. I think it makes lessons, but it's, I don't know. So you see, I feel like we were trying to move super fast. And they were like, Wait, wow, like, now we're just breaking a bunch of stuff. So maybe we should read. Yeah. 

</p>
<p><strong>Jem Young</strong><br />
And I'm really I'm purely colored by my own experience. And that's, I've never started a project a large project and it's stayed constant throughout the thing. So I get like someone probably has a parallel affairs was like, really different for live like we same companies everything. 

</p>
<p><strong>Derrick Showers</strong><br />
I just thinking, Wouldn't it be funny if you get like you're working like a two day Casper feature, and like you get to stand up? Alright, what's your what's your update? I wrote the test ever written. 

</p>
<p><strong>Ryan Burgess</strong><br />
You know what, my code will be bug free, and got it all figured out. 

</p>
<p><strong>Jem Young</strong><br />
But that is a perfect segue into another topic is What is your company's philosophy on testing? Is some people I know, Netflix in particular, they build in, like writing tests and things like that into part of like building the feature. But not all companies do. Some people are like, Oh, you got to build this. You okay, and you build it? I mean, create write tests for it. No. Why? Why s? Just build it. So I don't know if this will work. All right. 

</p>
<p><strong>Ryan Burgess</strong><br />
Well, he summed up Netflix for me. But yes, you do actually build in time for testing and writing tests for automation. And for unit tests. 

</p>
<p><strong>Jem Young</strong><br />
It does not for your current company be like for other companies, as well. 

</p>
<p><strong>Derrick Showers</strong><br />
So a good current contrast is, when I worked at Apple, I worked on the marketing site. And it was all there's no test writing test, it was all visual QA, which was a lot different than LinkedIn was all automated and no visual QA, or very little visual. And that's QA knows a whole other lease may cover in a future episode. But as far as Yeah, as far as testing, it's pretty much the same. And in what Jem was saying, we do a lot of our writing our own tests. And hey, now that like something embers helped us to do is to be able to kind of good move away from sweating, impact testing, and more like code, like writing tests in in acceptance testing is a lot easier to manipulate an app like an Ember app, and is to be like an app that spans across hundreds of pages. 

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, well, so in school or school called you had to write J unit. I don't know how much the teacher actually chooses, like, all right, well, looks like it's passing. But, um, but yeah, it's just like, it looks good. I remember I just like I said, Yeah, this is really I'm not really sure how to run it. 

</p>
<p><strong>Jem Young</strong><br />
But I saw I have worked at a company will say which one but it was like that. There was like, Yeah, codes good old test pass know what it was, like, it's good. Like, it's like, I have 400 tests on this one. They're all 100% covered. Yeah. 100%. That's good. He's good. 

</p>
<p><strong>Ryan Burgess</strong><br />
We've mentioned a lot about frameworks as well, and I don't I'd be interested to know what frameworks people should be. Using or should look up, or what frames have you use? I think I've tried quite a few of them for unit tests. I'd be interested to hear what you guys have tried and what worked, what didn't? What do you like about them? 

</p>
<p><strong>Derrick Showers</strong><br />
Think before we talk about the actual framework to maybe we just give people an idea of like the differences between the different types of frameworks. So I found a really good article that we put in the show notes. But so there's a difference between a test runner, a testing framework and assertion library. And it plugins, right. So this article gives a good example of karma being a test runner. So that's essentially just in charge of setting up a server, basically, just like the same as if you went into Node, I guess I've never often but I guess it's kind of the same thing as setting up a server, a node and then like, calling on a page to pop up and running through all of your tests in the browser. So it kind of takes care of that for you, mocha, that example of a testing framework is Jasmine cute in it. Which other ones. Chai is the assertion library. So I think that that's just a way for you to get fancy with the way you assert things is that yeah, that's a very good. So you know, it's kind of boring to put like, assert true, like, you know, you want to maybe say, expect this to happen this way or expect this not to be thought it's like yes, that's your thought to the thought industry. Yeah. And then they have an example of what has been plugged on plug in, that comes up a lot of signing. So that's kind of helps you design a lot of tests want to be able to mock here, your function calls that you're not testing. So like, if you're not testing react, for instance, you might want to mock some of her methods. If you're building an app that react society, I think it helps you do stuff with like x HR requests that you probably don't want to make any tests and mock responses. Anyway, just think that's it? Oh, that's actually really, really easy. For me, when I sit down, I'm like, Okay, I want to use Jasmine or Mocha or calm awake or not the same thing. I always find myself like typing karma verses in, or whatever it is, versus in Google. So that seemed like, Okay, what is it? What is it? 

</p>
<p><strong>Ryan Burgess</strong><br />
Well, because there you can use them together to it's not like, it's, it's not like you're using karma by itself, it's like, you're probably using karma and Mocha, or, you know, Jasmine, it's like, there's a variety of things that you can use, in order to use that, yes, like a test runner versus a breaker. 

</p>
<p><strong>Derrick Showers</strong><br />
And that's why it's nice that some of these CLI tools now are coming, we touched on a little bit earlier, but are coming with essentially the test runner. So cue unit Greenberg ships with Q unit Q unit testing framework, but Ember CLI actually has its own test runner that he you know, hires up until you don't have to worry about any of that stuff, which is nice, that is nice. And then you're like, I'm using QE that I don't know what else is happening. And essentially, that's once you have everything set up, that's what you really need to know. Because that's we're going to go over documentation like that how like, what the syntax looks like, you know, 

</p>
<p><strong>Ryan Burgess</strong><br />
That's a very good point, too, is like, the test runner is just going to run the test, it doesn't really matter. At that point, if you're writing the test, you need to read the documentation for something that human units, or whatever, whatever you're using, that's the most important thing you care about, as the engineer, you're looking at the documentation. 

</p>
<p><strong>Derrick Showers</strong><br />
And it's also very found that like, when you're looking for stuff, it's also hard to differentiate, okay, what frameworks tested node, what frameworks are better testing browser stuff, and they can both do both. Obviously, this is all JavaScript. But there's definitely a difference in the way that you set it up. Like for instance, you can use Mocha, if you're testing a node app, you probably wouldn't eat a restaurant, because you can just pipe that through mocha. And like, you know, it's probably not worth the Evangel test runners like firing up your browser, if I always found that hard, but I'm searching for what it's like, you know, I find this framework I go down the route route of joining, added and everything get integrated. And I'm like, Okay, this is actually primarily the setup is primarily for, for testing. 

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like the minute I'm just if I'm only testing node so much easier. Yeah. So when you start jumping into the browser, that that's the harder part that is, 

</p>
<p><strong>Derrick Showers</strong><br />
especially then when you're in when you're also trying to transpile ie a six down to five, and you have like Webpack and you you have to like make all that work, and it's like, okay, what is Webpack? Is it? Is it take the step of the test runner, or do I need that too, as a plugin? Webpack has ended all these plugins, right? Like, even if you're using vault, you can use live invoke karma. Yeah. Oh, yeah. You can do it all in golf. So pretty much like yeah, so can run a lot of it. Yeah. There's also I know, there's the goal here, nickel, like karma. Yeah, pretty much probably, I think, Jasmine, I don't know if I've ever used it, but I know there. But I really do think that this is something that hopefully we can solve one day as a community because I do think they're using more so than even just JavaScript frameworks to write to write features and great apps unit testing just so much out there. And then you know, each framework kind of has their recommended so I was you know, doing some react stuff. I'll do a lot of React stuff but like all the all the stuff I found online was that he's just he's just, he's just right like Facebook, 

</p>
<p><strong>Ryan Burgess</strong><br />
Facebook has created that one. 

</p>
<p><strong>Derrick Showers</strong><br />
So of course, you know, a lot of the recommendations and even in their own boxer. He's just so it's 

</p>
<p><strong>Jem Young</strong><br />
So I've written reacted to them and we haven't used just for I've looked at it try I've tried it I it's just too slow. Yeah, the set of times. I'm sure so yeah, yeah, it's like awesome because it does mocking for you. So it makes sure you're right on like unit testing integration tests and it's really powerful framework, but it's just too slow. So if you make one change, it has to rebuild all the mocks for you. And it's just, if there's a little smarter, I would probably use it more but we use or probably a few other depends on the team. But we've got 

</p>
<p><strong>Ryan Burgess</strong><br />
Any frameworks that you use a come here lightning would suggest or even someone new starting, what's the best thing to jump into? Or do we recommend something like Mocha, it is widely use? 

</p>
<p><strong>Jem Young</strong><br />
Mocha is pretty easy. 

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I find it pretty easy to get up and running. 

</p>
<p><strong>Augustus Yuan</strong><br />
I feel like Mocha is really solid, because it's so popular. And there's just so much documentation like I was looking at like future like other ones, like this new one called Eva, I was like looking into it. It's like a century chorus and has like all this stuff like sports promises and not mad like, hope it doesn't support that. But it's like, interesting, I was like looking more into it, but mostly just has so much like community behind it. That it's like a solid way to start with 

</p>
<p><strong>Ryan Burgess</strong><br />
And it's always important too, is having the more popular one that's used, there's more documentation, there's more people using it, which makes it a better frame in general is like I think that even when you talk about a front end framework, it's like when you have a community behind it is a pretty big deal. When I have been using here and there, which I do really like and I know Augustus and I've used it on projects is tape. And it's like very quick and easy to get up and running. And it's like simple. And the documentation is pretty clear. It's like are you equal to that? Like should this equal this or not equal to this, and it's very quick and easy to get up and running. It is one that I have used. I don't know how popular it is. I've also used mocha quite a bit. So just take really nice and easy. 

</p>
<p><strong>Derrick Showers</strong><br />
And I guess with Mocha that you can just use Mocha, and it'll just run it through node. And if you don't need it, we won't have I guess can any browser testing? I think you need something on top of it. Yeah, I think karma if you did, probably doesn't set up. So you had this in the framework to set up a server? No, not pretty. Yeah, it's pretty strict, which is good that it does one thing it does what it does. So you'd have to tie it in. One thing I wish it have you guys use webpack Oh, yeah, that's really nice. And the plug in architecture is really nice. And I wish that they would add like just some unit testing like that you can basically they just have plugins use, because that's how they want to use webpack is probably the closest I think, to like being the everything that you need to how to like transpile from six, maybe one day

</p>
<p><strong>Augustus Yuan</strong><br />
to one, web pack creators who are listening in. 

</p>
<p><strong>Ryan Burgess</strong><br />
So as we wrap up today's podcasts, and before we get into the picks, what is the one piece of advice that you would say to someone starting to write unit tests or wanting to get started? 

</p>
<p><strong>Derrick Showers</strong><br />
I think Jem had a really good point earlier start simple. So I know a lot of frameworks actually support the assertion even Ember has that too. And it's actually a really good way to get in the mindset. So start simple and it kind of you start from like I need all this stuff to make everything work and you're just gonna get overwhelmed and just decide you don't really want to worry about 

</p>
<p><strong>Jem Young</strong><br />
And so build off that I would say my best advice is set it up to me while writing you Fs the longest part is only getting all the setup to ready with us. So if you do that and you sell there you guys like look how easy it is to test that's me is the best way to get started just like set the system right simple tests and then it's just once that's all built it's actually really trivial for us but yeah 

</p>
<p><strong>Augustus Yuan</strong><br />
For as to why or event bugs for me like there was actually a medium article I found that really helped me it was it was titled pipe questions every unit customer answer I thought it was like really good to like it was like a good review of what makes a good unit test. And it seems like how to get started, I think yeah, I think like just starting off simple, like really simple. And just like looking at like what you're making and what can be tested. It's like a really good like another perspective to look at tackling personal projects and stuff. 

</p>
<p><strong>Ryan Burgess</strong><br />
I think the finish off kind of iterative, the same things, right modular code thing that to me is a big one is once you start breaking things into components are very small, small functions. If you can write it's easier. Yes. Yeah. 

</p>
<p><strong>Derrick Showers</strong><br />
And I think just because just since we're talking about starting simple, one thing that we will make sure that we do this week is to add some of this stuff to our show notes, because a lot information that came along here, and sometimes I know, especially the podcasts, it's hard to get all this information, you stuff being thrown at you need to make sure we give everybody opportunity to do some research. 

</p>
<p><strong>Ryan Burgess</strong><br />
Great. So let's go around and give our picks for this week. Augustus do you want to start us off? 

</p>
<p><strong>Augustus Yuan</strong><br />
Sure. So some of the things I have Google Doodles go to google.com/doodles. They have, like every single and Google, Google Italy. Like you know how they changed. Yeah, well, it's like super slick an archive of Yeah, I think that's archive. I was like, that's awesome. Just a couple others. ls su computer science curriculum. So on GitHub, there's this thing called the Open Source society, and they have a whole curriculum for you to learn computer science. It's totally free. Super awesome, has so much resources. So if you just want to get started on it, it's awesome. Another thing is there's this thing called Team lab at the pisar Tech Museum. It's based in Menlo Park. And it's this Tech Museum that shows a showcases a bunch of digital art that's closing in June, but it's like super cheap and I would totally recommend ignore it on a day or so. And there's just so many awesome jar pieces. And then for like music, one that is where I go Hydra masa. 

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, what do you have? 

</p>
<p><strong>Jem Young</strong><br />
My music pick this week is flume the mixtape. I'm a huge cat Flume. He does some amazing remixes. The full mix is just put on rock out, right? Thanks for sure. It's like this. Check it out. Hype Machine, Hype Machine calm or actually hype and fantastic for music discovery. I use it literally every day, I was a huge fan of SoundCloud. That's how I really fell off the hype machine is been around for like recommended hygiene. And lastly, programming sucks. It's a good read, I won't go too much into it's pretty long form. But it's good about more philosophical things about engineering, which we'd always get to. But to me, engineering is like a philosophy. So as much as science, which is I hate to say like That's why some degrees are computer science and art. Some people, some are in response to science. And yeah, it's check it out. It's gonna be cool. 

</p>
<p><strong>Derrick Showers</strong><br />
So as you fix this week, the first one is, so I just migrated all of my stuff from iCloud to who calendar is, we were some of us because I convinced you to. And I really like it so far. And the one thing I found, I think, I guess it's new, but is 200 goals. Yep. So you can set goals, whether it's a fitness goal, or I have like, just basic workflow goals, like playing the day. But what's cool is you can delay them, you can check them off, or you can move the time and it'll adjust your goal like as needed. This is kind of like this, basically like the idea of a reoccurring reminder, but not but smart. has a really cool idea. And their thing I was reading this article, actually just yesterday about the future, you know, we have all this stuff about texting and bots and stuff. But this guy was talking about how the future he thinks is more of like, sound and light and like connecting to a phone via Bluetooth headset or something. So like using Siri or whatever. Some sort of like aI I thought was really interesting. And he was talking about how he wore it like throughout the whole day and like always had like, it was just like even with video videos the tough part about videos you don't have you don't really have a set readily available. So anyway, the he mentioned this thing on Amazon it's a $13 Bluetooth headset and like this in your ear for 15 bucks on it can't go wrong but yeah, so it's a pic but I didn't even try it yet. But I convinced oh you're like part of this. This is only $30 Which is crazy for next and cordless. 

</p>
<p><strong>Ryan Burgess</strong><br />
For my picks this week. One that actually Ryan Anklam who's not here today. It's suggested when we're doing this podcast is it's sometimes this you know, like right represents a lot of meetings. And my screen will like go into screensaver and a half to like sign in again. There's an app called caffeine on the Mac. And it just keeps make sure that your heater is turned on at all times. I love it. I can turn it on and off. It's just in the toolbar. Oh caffeine for Mac really good. And just recently I was listening to music while I was coding, which was Odessa. It's kind of like electronic music very calming Background Music I really enjoyed it. So that's my few picks for this week. Yeah. Nice. All right, let's end today's episode before we end it working everyone find you online Augustus? 

</p>
<p><strong>Augustus Yuan</strong><br />
Oh yeah, my Twitter handle is at on crypto Aug pu RG 

Great. Jem?

</p>
<p><strong>Ryan Burgess</strong><br />
I'm actually Jem Young and as you look between your doctor shoes, I will send you nice. 

</p>
<p><strong>Derrick Showers</strong><br />
I'm Derrick at their showers and you don't have any sort of picture. You're just swinging and I'll send you stuff. 

</p>
<p><strong>Ryan Burgess</strong><br />
And my Twitter handle is <a href="https://twitter.com/burgessdryan">@burgessdryan</a>. Sun. I'd also like to thank everyone for listening. We really appreciate all of our listeners and all the encouragement to keep these episodes going. So we really enjoyed doing them and during the year that people actually like listening to them can also find us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. We'd love to hear from you and we will send you stickers if you tweet us. Thank you so much.

</p>
`;
        return transcript;
    };