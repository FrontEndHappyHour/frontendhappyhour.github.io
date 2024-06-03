// Episode 87 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end, happier podcast. We've all at some point or another been faced with a code migration in the past and wanted to share some of our things that we've learned. In this episode, we're joined by Mike urens Dell, who probably dealt with a few migrations in his past to talk with us about his learnings. Micah, can you give us a brief introduction of who you are, what you do and what your favorite happy hour beverages?

</p>
<p><strong>Micah Ransdell</strong><br />
Sure, Ryan, thanks for having me on. I appreciate you guys all inviting me out and having me on your show. I'm Micah Ransdell, engineering manager at Netflix. I work with Ryan and Ryan and Jem, on the acquisition UI team. I've worked kind of all over the stack here, in terms of both on the front end and back end of the front end on our website and across many different layers and currently leading engineering team here. My favorite beverage is an old fashioned.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on Same here. All right, well, let's also go around the table and introduce today's panelists. Ryan, you want to start off?

</p>
<p><strong>Ryan Anklam</strong><br />
Sure. I'm Ryan anklam. I'm a software engineer here at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem young senior software engineer at Netflix. I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcasts. We like to choose a keyword that if it's mentioned on the episode, we will all take a drink. What do we decide today's keyword is

</p>
<p><strong>All</strong><br />
legacy

</p>
<p><strong>Ryan Burgess</strong><br />
legacy. So I'm sure this word will come up often so might be a fun episode. All right, well, let's jump in and talk about code migration. I'd be really curious, how do you all decide when is the right time to do a code migration? Or even if it is a good idea.

</p>
<p><strong>Ryan Anklam</strong><br />
The second a hot new framework comes out.

</p>
<p><strong>Ryan Burgess</strong><br />
I figured that was there going to be the best answer, we should switch on a daily basis. Basically,

</p>
<p><strong>Micah Ransdell</strong><br />
think the announcement of hooks, you started immediately right after that, right

</p>
<p><strong>Jem Young</strong><br />
now, I think as a team, you decide you have to weigh the costs and benefits of doing it versus not doing it. And it's generally when, as a whole, you feel it as engineering structure, you feel the pain points of the older code, or the older framework or the old way of doing things and you decide, hey, we need to upgrade and migrate all of this code. But there's, there's no hard and fast rule on it. Because it really depends on how your code is structured. Originally, your team philosophy and all sorts of other things

</p>
<p><strong>Ryan Burgess</strong><br />
like that you said it's weighing the benefits or really figuring out the cost of doing it or talking through that with your team. I think also sometimes, what are we missing out on it maybe is, you know, jumping on that hot new framework is what is it getting us that we do Don't have today, and is not something that we really, really need and would help make our lives easier, maybe ship faster or make a better user experience.

</p>
<p><strong>Jem Young</strong><br />
So when we talk about code migration, we certainly have examples of what exactly we're talking about. That's a good, good point, Jem.

</p>
<p><strong>Micah Ransdell</strong><br />
I have a good example. We're in the midst of one now. Ryan can attest to this. Oh, gee, Ryan can attest to this, in the sense that we are migrating our TV platform from an older custom framework to react Redux, you know, very hot now. So it's, you know, that decision wasn't taken lightly in the sense that part of that decision matrix was really around business value as well as developer value.

</p>
<p><strong>Ryan Burgess</strong><br />
It kind of sounded like it was because it was the new hotness, though.

</p>
<p><strong>Micah Ransdell</strong><br />
Let Ryan answer that.

</p>
<p><strong>Ryan Anklam</strong><br />
No, actually, for the TVI migration, it was actually a relatively easy decision when you started looking at the benefits because we do share a lot of code amongst other teams. Here at Netflix, and some of those other teams were starting to move ahead with a more react Redux architecture. And the acquisition application was still on a older homebaked JavaScript framework. So the farther apart those two code bases got, the harder it was to share code to get updates. Did you know just get the most recent things that some other teams are pushing out there. So it was a relatively easy decision when you think about it.

</p>
<p><strong>Jem Young</strong><br />
Another one we recently had was migrating not only the locations, our tests to be in line with the files that are being tested, but we migrated from mocha and sign on and all that to jest, which was a fairly substantial migration. And again, that that there's a lot of discussion a lot of back and forth a lot of pros and cons being weighed against doing something like that. But yeah, those examples code migration,

</p>
<p><strong>Ryan Burgess</strong><br />
I think getting back to your point gem two is it is likely Moving away from one direction to the other, maybe replacing a framework replacing some old legacy code with new code. Cheers. Cheers. Alright, so once you've decided to migrate to new code base, how do you approach that? Obviously, just start coding from square one. Just line by line. I think that's easiest approach. No, obviously, there's a fair amount of planning. I think it depends on you know, what the goals are of that migration. If it's really to just test it out, then you might start with an MVP, to at least get you an understanding of what what the capabilities are and all the work that would be required to

</p>
<p><strong>Micah Ransdell</strong><br />
get there. But there there should be a fair amount of planning, at least, you know, in larger migrations, we have a lot of inputs, you know, as Jen was talking about, with the testing side of things, there's a lot of folks that are bought in and they need to be kind of understood and taken care of as part of that migration.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think this question ties in actually really well with a tweet I sent out last night That's a don't enter the gym without a plan. And I think you know, before you start a cold migration, you need to define your plan or your goals up front, what is, you know, what are you trying to accomplish out of this migration? Are you going to make a an easier developer experience? Are you trying to have a smaller package size overall or things like that, so having a plan before you start any code or any architectural decisions is really important. 100% agree with having a plan going into it? I think too often, or I've experienced it in past Ryan's life is I've had it where you just jump on it and and not don't really think about that. And to me, it's really bitten us in the Ask by taking that approach. I like the planning aspect too, because you can also hopefully bring everyone on board. Because I think that's important too, is that you're all on the same page of how this migration is going to work. And even what the motivation is, I think is really important for everyone to be bought in and understand what we're trying to achieve. And so I think that gets really back at the planet. Stage of really outlining those details up front. I would also say breaking it down into smaller chunks so you can get your head around it. I think very often it's easy from an engineering perspective to just say, Hey, we got it, you know, we understand all the nuances here. But as you dig in, especially more legacy code

</p>
<p><strong>Micah Ransdell</strong><br />
I know how this works. Part of that is the more you can break down tasks and the more you can get a better understanding the less unknowns that are out there and more kind of chance of success.

</p>
<p><strong>Jem Young</strong><br />
I like code migrations, because it's where you separate coders from engineers, like anybody can code you can go on StackOverflow and copy paste and God knows we've all seen some really atrocious websites where people just copy pasted everything and it's it's just a mess because you know, JavaScript let you do whatever you want. But engineering like real engineering, like architecture, things like that happen in code migrations, where exactly like big random micro saying you, you have to break it down into smaller problems. Understand the pros and cons, but also you have to understand The entire codebase as a whole and how people interact with it how I don't know, mica is an expert at FIU framework or something like that. And we lose all the expertise by migration by migrating to a new framework. And we have to all have a new learning curve. And like all sorts of things go into this That, to me is like, this is engineering. It's it's not sexy. And it's not fun. Because usually it's like, when everything goes, right, everything works exactly the same. No one even notices that you did anything if you do things right. Which is the unfun part of I think what a lot of people want to do they want to build new shiny things rather than rebuild the old things. But that's, in my opinion, every company I've ever been to like, that's where the real meat of the work is for engineering.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, especially for the TVI migration. I'm on right now. I think up front. I spent so much time planning and thinking and writing docs and not coding. It felt like I really wasn't getting anything done being a coder because I like to code.

</p>
<p><strong>Ryan Burgess</strong><br />
So just getting away from that, you know, feeling like my migraines value is in producing code versus my value is in planning and figuring out Holly's pieces are gonna fit together was a little interesting transition. I've an interesting question for you all to is, you know, we talk about having this old code base, and we're moving to some sort of new code base. And maybe something like replacing mocha is not the perfect example for that. Because you might be able to just replace that under the hood a little bit easier. But maybe it is moving your complete direction. And for this TVI example, to react and Redux, how do you go about supporting the old code base where there's new work from PMS coming around? How do you manage that expectation with them? Or do you build it in the old code base and the new code base? Like how do you juggle two code bases at the same time

</p>
<p><strong>Micah Ransdell</strong><br />
for us, you know, for as a manager, managing expectations of partners is part of the job and I think understanding what's most critical business and factoring that And as part of any migration is important. So, you know, if there's some business business objective, you know, for us, we have, we're in the midst of a product kind of roll out, when it came to how we're doing signups for TV. And obviously, stopping halfway through wouldn't have been great for our partnership with RPM, who is really excited about that rollout. So, you know, balancing, hey, we're gonna continue this, it'll cause this other, you know, the migration to slow down, but we're happy to take that trade off in order to fulfill your business needs. With the given the give and take of now we're gonna, you know, once this is done, we're gonna go focus on this and you're not going to get anything from us for a little while. So being really explicit about that, and then making sure that everyone's bought

</p>
<p><strong>Ryan Burgess</strong><br />
in, like that's important is the buy in and also being very explicit upfront. I have made the mistake years ago where I was trying to juggle two code bases where it was like, hey, well, we'll just slowly migrate or build this new code base in isolation and And still support all the features and everything coming down the pipeline. I see Micah shaking his head, he knows that how painful that would have been. And and honestly impossible. It was impossible it I don't think we ever finished it just became a moving target they were never ever able to complete. So I always think about it is yeah, how can you manage expectations and make sure that you buy yourself time to focus on the migration. But also maybe you can build some of the pieces on the new framework or new code base like maybe you can support directing traffic to the newer side of the website if it if that's the case, where you're building a new feature with the new code, but still supporting the old. I think there you just need to really think about that goes really to Oji. Ryan's point of planning up front is thinking about how are we going to support two code bases? Where do we make the trade offs and really be thoughtful around that? I think

</p>
<p><strong>Micah Ransdell</strong><br />
the important thing is if you aren't able to make the case to your partners Whoever is depending on your platform for either a pause or a shift in focus for you for that older legacy codebase. Cheers. Without that, you're not clearly in numerating. And, you know, communicating the needs for that migration, because that's part of making sure everyone understands the value for the business of this migration. And, you know, from the technology and from the business perspective,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, it's a good point. It's not just because it's new. And this is what we want to be doing. I think it takes working with partners who understand

</p>
<p><strong>Jem Young</strong><br />
engineering. And just as product engineers can understand the product at some level, the product managers and designers and all the responsible parties need to understand engineering. And like, really, what we're talking about is I'm surprised we haven't said this yet. But we're talking about technical debt. We're talking about paying off technical debt or avoiding future feature technical debt. And the organizations that function well understand what technical That is and understand, hey, by not doing this migration, you're going out of paying the cost two years down the road, three years down the road is going to be much, much higher. So we can do it now or we can do it later. But it has to be done. And organizations I've seen that don't function well, the ones that are like just build it, just build it like we don't care, like, well, we'll pay it later. And you always pay like, that's the thing with technical debt, you always pay the debt just becomes bigger and bigger, and it's more expensive to pay back. Yes.

You can't avoid them. You can't, can't go bankrupt on them. You just you got to pay.

</p>
<p><strong>Micah Ransdell</strong><br />
Yeah, certainly part of being an engineering manager is maintaining and managing that relationship over the long term of talking with the pm talking with your business partners about this new feature you're wanting or this new thing you're doing that isn't allowing us to pay down this technical debt or or you know, explicitly making that trade off. It's going to come back here and then when you get to that point, you know, kind of a numerating all the reasons why you're needing to do this migration is great fuel for that and it makes a lot easier to have that conversation. One

</p>
<p><strong>Ryan Anklam</strong><br />
comment I had about tech debt is one interesting thing I've noticed in every migration I've ever seen is the tech debt actually becomes a quadratic function. Over time. As you start a new project, your tech debt is zero, everything is great, you're writing code, it's beautiful. It's clean. If you're not repeating yourself functions are very well defined, well named tests everywhere. And then you get to that launch date, and you're not quite there yet. So then all of a sudden, compromises are starting to be made. And so tech that does happen on a migration as well. And it gets bigger and bigger. The farther and farther past that original launch date you get, I don't think I've ever seen a migration where that didn't quite happen

</p>
<p><strong>Ryan Burgess</strong><br />
like that. You said that too, because I think it's so important. When I think of doing a reset to by doing a migration, it's so important to build a strong baseline. And so cutting corners on the migration sounds like a terrible idea. Because now you're just setting yourself up for debt right from the get go. Now we can ship a lot of great new features on top of this amazing codebase, that over time will start to degrade. And then two, three years down the line, it's let's talk about the next migration. But I feel like that will happen a lot sooner if you are already cutting corners in the migration. So I think it's really important to spend as much time up front on that migration rather than cutting corners. We've now about to ship our nice brand new code base. How do you measure success on that? Are you looking at metrics like what should we be thinking about if we're upgrading our codebase? I

</p>
<p><strong>Micah Ransdell</strong><br />
think it's something you should set out at the beginning, you know, in the sense that before you start your migration, it's what are we going to actually measure this as a success with so is it improved TTR TTI for your application? Is it improved core metrics you know for us signups or, or revenue as is something That's gonna drive faster development time. So you know, measuring and being able to quantify how much development time features take. All those are, you know, useful metrics, but I think you really have to pick one or two and then really stick with that, or else it can make your migration extend because now you're changing focus or, or adding new complexity to your migration.

</p>
<p><strong>Ryan Burgess</strong><br />
How do you quantify developer productivity? Patrick?

</p>
<p><strong>Micah Ransdell</strong><br />
Yeah, no, I, you know, there's, there's a qualitative part of that, in the sense that, you know, talking to developers getting their feedback and you know, kind of general feelings on how the codebase is reactive to them in the sense that if every time they go into make one little change, they end up spending hours making that change, both on understanding the context of the code or understanding where all the different systems they need to touch in order to influence this line of code. If you don't kind of take that as a signal to start, you know, whether talking to people or sending out a survey or something, you won't be able to identify on the other side of, hey, are these things easier? You you identified these as problems before of I would go in and make a single line change, and it would take 10 hours. You know, if you don't identify that at the beginning, then you're not gonna be able to ask that at the end of the day to solve this type of problem.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think that's it sounds like even on whatever metric you're identifying, it's really important to identify that in that planning stage so that you're not chasing a metric that doesn't exist. I

</p>
<p><strong>Ryan Anklam</strong><br />
think another important thing that's not directly related to measuring the success is resist the urge to change the UI during a migration because when you are measuring the success, even a tiny UI change, can muddle up the, you know, what you're looking at. So if the migration isn't successful, it's all All of a sudden, really hard to tell if it's the migration itself, or if it's that one little UI change you made during the migration. So, you know, I think it's really important to keep the UI as close to exactly the same as you can, because then you're measuring two applications that are exactly alike against each other. And it's a lot easier to tell if it's an architectural change that's causing the redness or, you know, just like changed one word on a button. You just never know if that's the reason that the the changes, and it's a lot harder to reason about, right? So it's really decoupling engineering design. It's like, we're we're making engineering changes at this point. And really focus on that, I

</p>
<p><strong>Micah Ransdell</strong><br />
think, to make that a little bit more generic, you know, in Jem's example of migrating the test infrastructure, you're obviously not changing a UI at that point, but you're controlling the variables that you're changing either only changing the test runner at one point or the infrastructure for mocking or something like that. So controlling those variables and being very explicit. About the ones that you're going to be tweaking is probably the

</p>
<p><strong>Ryan Burgess</strong><br />
main takeaway. One, even to Ryan's point being more focused on it sounds more focused on a product to which you even mentioned, looking at these, the old and new codebase. And measuring the success is you're also talking about almost, you're running those as an AB test. Here's your saying that running these two in production and really testing this against users. I mean, that's something that we've done often at Netflix, and I'm very thankful for it. Because you don't want to see your core metrics go up or down. Being very flat is probably a good thing. For the most part. You want to actually be able to understand what's not working and what's happening. And oftentimes, you can do all the QA work and have all the perfect written tests, but you're not catching everything until it's in production. And so I think that's another thing if you have the ability to AB test, I think a be testing the two code bases is a really smart idea. Another point of service kind of talked a lot about the benefits to maybe why you would want to migrate, I'd love to get into what is the most difficult points of doing the migration. Because no one can say a migration is easy. I would be surprised to hear someone say that. So I'm, I'm curious on what's difficult about a migration.

</p>
<p><strong>Jem Young</strong><br />
To me migrations, again, to my point of like where Cirrus engineering comes in is, you really see all of the, the warts on your codebase you see the in consistencies and patterns. And you try to plan around that in the future. You say like, Hey, here's a bad pattern that we see. We want to fix this in the future. And you're like, cool, but you could introduce another bad pattern and trying to foresee that like years out is really really difficult. That's why like, the highest often the highest position in any software company is architecture or something like that, because it's their job to think that far out and think like what are upcoming trends and patterns, things like that. So like trying to predict the Like, where, where the company where the business gonna go is another difficult thing with migrations. And you can say like, hey, all of our we migrated to this new framework and it's, it's totally in memory. That's cool. It's it's running really fast. Then in the future, it turns out your bottlenecks, actually the database somewhere, and like none of your code migration accounted for that. So I'm getting like too technical, but things like that our databases, things like that can make a migration difficult. But the primary one is the engineers themselves, we are our own worst enemy in that you have to educate people on the new framework or language or whatever thing you're migrating. And then all of that knowledge that they had is now not worth anything. And you have to re educate everybody and I wouldn't, okay, it's not worthless, but it's not it's worthwhile in the in the new codebase. And that's always been the hardest part is educating developers on the new patterns, the new structure,

</p>
<p><strong>Ryan Anklam</strong><br />
the new architecture. That's moving Usually the most difficult thing, I think expanding that a little bit is getting engineers to agree on anything. That's been the most difficult thing I've noticed so far. So you can come up with a pattern you think is great. You share it in a room of two engineers, it's still great three engineers, pretty good. And then 1020 engineers, and you've got no 15 different opinions on how it should be done. And you know, reducing that and taking all that feedback and knowing when something is good enough to move forward on is a really tricky problem,

</p>
<p><strong>Micah Ransdell</strong><br />
I would say, perfect is the enemy of done in the sense that, you know, when you're when you are trying to plan for some of those future business needs, or, you know, correct some past mistakes in terms of patterns that are introduced in the codebase. It's very easy to spend a lot of time trying to over engineer or even, you know, engineer to a point where it's bulletproof for, you know, those business needs. And very often it's better to just be done and then iterate on it and have some plan kind of obsolescence in the sense of knowing that we don't have perfect information. Now, we never will. But we should be able to be adaptable to the new information we get is more important than trying to plan for all those use cases.

</p>
<p><strong>Ryan Burgess</strong><br />
Another thing I wanted to add a little bit off of what Jem said, in a little different lenses, you said it's difficult to understand where the business is headed, or where your team is headed, those types of details. I also think it's sometimes hard to understand, especially with new tech, where that direction is headed. We talk a lot about open source frameworks, whether, especially in JavaScript, like react, Angular, Ember, whatever it is that your team is adopting, is it's also hard to know what's going to happen with that framework. How long is it going to last? What's going to change in that? I don't know what the right answer is. But I think it's really doing some investigating and trying to understand what the lifecycle of that framework is. I think that's really important rather than just jumping on the bandwagon. Because it's the hot new thing. All right, so before we get into pics, I thought it'd be good to also maybe leave every listener with one amazing piece of advice. If you were to redo a migration today, what's one great piece of advice that you would leave our listeners with,

</p>
<p><strong>Jem Young</strong><br />
make sure you have tests in place before migrations or one place. Again, we're like engineering separating from coding in that you may not believe in tests, and you may think their value is questionable. But when it comes to migration, you'll see the value of tests where the thing that you're trying to do, you can just find out if it works or not, like without having to run through the entire flow, not having the to push it in the prod. Tests have made migrations like so, so much easier. It's it's like a hard lesson to learn over the years. But that's a probably one piece of advice I would give I would also say. So two piece of advice. Yeah, question while you're doing the migration, like make sure everybody's bought in. Because if, like I was saying, if the engineers themselves aren't bought in, then you You're just going to be like pulling this anchor the entire way. But if everybody agrees on new patterns, why we're doing this, what success is going to look like. And you're not just doing this because you saw someone gave a talk at react calm for Angular comp or whatever and the the new thing, then you will be much more successful. And you're not won't be chasing just like the latest, greatest thing.

</p>
<p><strong>Ryan Burgess</strong><br />
German you mentioned test two, do you mean? I've got my legacy code base? Cheers, cheers, cheers. And then we have this new code base. What if the old code base doesn't have any tests? Are you saying that I should go back and write tests for all the old or I should focus on having tests for the new

</p>
<p><strong>Jem Young</strong><br />
should focus on having tests for the new but ideally, you'd have tests at the end. You don't you're migrating from, say Java to Python. At some level, you should have some sort of integration tests that don't rely on the underlying code itself. It relies on just how it communicates with outside systems. And that is the easiest level of testing to do. And then for UI, you have an N test which Again, don't care what language you're running under the hood, it just cares that it does the thing it's supposed to do.

</p>
<p><strong>Micah Ransdell</strong><br />
That's it. My advice is don't do it.

</p>
<p><strong>Ryan Burgess</strong><br />
You better Micah.

</p>
<p><strong>Micah Ransdell</strong><br />
No, I think that, you know, there's a should be a high bar for any migration. And so initially started off being skeptical about making that migration or is it worth it from the business perspective is always the kind of better way to put yourself in a frame of mind of like, is this really necessary? But, you know, and honestly, I would say, have a plan for exit, you know, in the sense of knowing where you're going to end up and how you're going to get there. And then where might your stopping points be? If you find out this isn't going great, or things need to take a turn in the sense that maybe business needs shift or the technology needs to shift. Don't be married to that idea or the path you don't have some other plans.

</p>
<p><strong>Ryan Anklam</strong><br />
So My advice is small pull requests, try to limit the amount of code that's changed in a pull request, especially when doing a migration, you'll get a much better review on things when you only have a couple files changed. And not a ton of lines. If you have 100 files changed and 10s of thousands of lines of code, you're not going to get a very good code review. People aren't gonna actually try to look and understand the patterns that you're trying to migrate to. So try to make your pull request as small as possible, and you'll get much better feedback. I was really good. I like that one.

</p>
<p><strong>Ryan Burgess</strong><br />
I want to say I've got two little pieces of advice is it's always going to take longer than you expect. I I've never experienced delivering a migration on time on debt like on what was estimated. So just always account it's going to take longer than you ever expected. And then I think just getting back to really spending that initial time. I think that is the most important thing is spend as much time Time upfront planning and investigating, when I mean investigating is really looking at the old codebase. If you're, you know, migrating to a new framework, there's a lot of this old business logic that has been written in the previous, and trying to really understand why that's there, doesn't need to move over and just really, truly understand the code base before you make the hop over to the new one. The answer is yes, you will need to move that code over some way somehow there is an edge case that uses that code, and you're gonna find out about it sooner or later. Yeah, and I probably later it's it's really understanding why it's there. I think a lot of it is you just like, Oh, yeah, it's there. Do we really need this, but it's really understanding. Yes, you likely do. But also, why is it there? And what's it doing? Which takes a lot you could have been the one who wrote it years ago. And you don't remember? So it takes a lot of work and investigating up front date before launch always.

</p>
<p><strong>Ryan Anklam</strong><br />
Oh, yeah. No, I wrote that now.

</p>
<p><strong>Jem Young</strong><br />
It's called Chesterton's fence. is like the conceptual idea of like, there's a fence in the middle the road, people look at it like that's stupid reason to have a fence there. But someone put a fence there for a reason. And you walking by and not seeing the purpose doesn't mean there isn't one. And it's something I think about a lot in software because I'm like, who wrote this code? Oh, I did. Again, that's for testing helps, though, because testing gives you intent. Yeah. And you can test that versus like, or common your code. That's my number one piece of advice common your code, it will make migrations easier because you know, you're trying to do the past

</p>
<p><strong>Ryan Burgess</strong><br />
that has been some of your logical advice on many episodes. I feel like yeah, there's common code to the tattoo. Yeah, comment your code. How does gems gonna get that on his forehead tattooed? Alright, at the end of each episode, we love to share pics of things that we found interesting and would like to share with our listeners. Let's go around the table and share pics for today. Ryan, you want to start it off? Sure. So my first pick is my Roomba. We picked one up on Amazon Prime Day and I've heard all kinds of bad things about them but I absolutely loved my Roomba or I love my Roomba. I didn't loved it, it's still around.

</p>
<p><strong>Ryan Anklam</strong><br />
The thing is, it just roams around my house and picks up all of my dog hair. I have a golden retriever. So it sheds a lot. So, my house has been a lot cleaner since I've gotten this room. But so that's my first pick. And my second pick is a blog post for conditional types in TypeScript. It's a really eye opening. Read about some of the power that's actually hidden inside of TypeScript. So if you really want to learn some deep, advanced TypeScript, check out this article. It's from 2018. It's not super current, but it's still super powerful. Hey, Ryan, do you on your room but do you have like a Bluetooth speaker or anything like I don't know if you've seen the parks and rec episode, but that's totally what it made me think of any DJ Roomba? No, but my kids didn't name it pancake. Pretty good name actually around our house cleaning my floors. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
Mica. What do you have for us?

</p>
<p><strong>Micah Ransdell</strong><br />
My pick would be react rally. Coming up at something I'll be going to along with several people from Netflix. Thank you, Ryan for giving me your ticket and looking forward to getting experienced the great conference.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's a fun conference, probably still one of my favorite conferences, gem. What kind of picks you up for us.

</p>
<p><strong>Jem Young</strong><br />
I've got three picks today. The first one is by Patrick McKenzie, aka pattillo 11 for people on Hacker News or wherever. Pretty, pretty famous. But it's on how brokers just make money. Which is really fascinating. Because once you get up there in age where you actually have brokerage accounts and 401k and all that stuff, it's it's really insightful on how are these banks offering like 3% interest and what's why doesn't everybody do that? And I don't know it's a good deep dive with examples on how like a lot of the finance world makes money which a lot of us just don't think about, but it's happening all around us all the time. The second order the second pick is I think An article on HBr Harvard Business Review called managing yourself just a really insightful article that changed the way like I approach meetings. And it's more like you should be the just as you should be in a meeting to manage people in a way to be a force multiplier, and not just like, here's my two cents, I'm out. In fact, you should probably hold back from giving your opinion most of the time, especially if you're a leader because they can be overvalued. You should ask questions that force people to or get people to think in a certain way or to answer the questions you have. But it's just a really good article is pretty short, but ever take a look at it in terms of just like how you communicate with other people like what, what is your end goal? Is it to be right or is it to solve the problem? And I think my approach historically has been like, I want to be right, but I may, as well do but like I really should be.

</p>
<p><strong>Micah Ransdell</strong><br />
And never seen that Jem.

</p>
<p><strong>Jem Young</strong><br />
My third pick for Valley silicon. That's the part of the show where I pick things that are just ludicrously Expensive it only exists because we have too much money. My pick is actually it is an ice cube maker. It's called Forge. Yeah. Mica. How much would you pay for a clear Ice Cube maker? 

</p>
<p><strong>Ryan Anklam</strong><br />
How clear?

</p>
<p><strong>Ryan Burgess</strong><br />
It is super clear. 

</p>
<p><strong>Micah Ransdell</strong><br />
It's super clear. I don't know.

</p>
<p><strong>Jem Young</strong><br />
Just throw out throw out a number for 500 bucks. Oh, big spender. Oh gee Ryan, what would you spend on a clear Ice Cube maker

</p>
<p><strong>Ryan Anklam</strong><br />
like window clear see right through them.

</p>
<p><strong>Jem Young</strong><br />
Quit as clear as you can get water. 

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah 250

</p>
<p><strong>Ryan Burgess</strong><br />
I'm gonna go with the like $30 tray is just good enough. That's probably too expensive.

</p>
<p><strong>Micah Ransdell</strong><br />
Any dollar tray, I have a 2 dollar tray.

</p>
<p><strong>Jem Young</strong><br />
drink has a clear Ice Cube This one is a cloudy ice cube in the mix the drink table

</p>
<p><strong>Ryan Anklam</strong><br />
think about it a party is pull out this ice cube. Ice cubes are?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I'm sure everyone's gonna remember that as I'm serving them alcohol. Remember that damn ice cube.

</p>
<p><strong>Jem Young</strong><br />
I so there's an ice cube maker called forge and it runs for the low low price. Have 1300 dollars for ice maker and that is why it's my pick for Valley silica.

</p>
<p><strong>Ryan Burgess</strong><br />
To be clear, it only makes one Ice Cube at a time. Is that correct? That is correct. Yeah, that's messed up.

</p>
<p><strong>Jem Young</strong><br />
Yeah, hopefully no one in this room ordered 113 hundred

</p>
<p><strong>Ryan Burgess</strong><br />
dollar ice cube is what I'm hearing.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, it's reached 293% of its goal in 30 days. Exactly.

</p>
<p><strong>Jem Young</strong><br />
Anyways, I'll save my rant was impressive,

</p>
<p><strong>Ryan Anklam</strong><br />
but is that is pretty clear.

</p>
<p><strong>Jem Young</strong><br />
Don't encourage people. Anyways, it's pretty cool. But,

</p>
<p><strong>Ryan Burgess</strong><br />
you know, I feel like this would be if gem was to pick this. This would be a valley silicon. I don't think it's a super expensive thing. But gem is not a big fan of home automation. But I realize I've never picked this one before, but I'm a huge fan of the WeMo light switches. I would honestly replace every light switch in my house with them. It's amazing. You just replace the existing light switch. And now you have a smart light switch. You can have dimmers. You can have the freeway lights it pretty much set so I highly recommend WeMo light switches.

</p>
<p><strong>Ryan Anklam</strong><br />
It's a great sale on wi Mo's on Prime Day

</p>
<p><strong>Ryan Burgess</strong><br />
there you go you should have been like Ryan was right on top of it I love

</p>
<p><strong>Ryan Anklam</strong><br />
love my limos as well

</p>
<p><strong>Ryan Burgess</strong><br />
there you go Jem needs to get on board

</p>
<p><strong>Jem Young</strong><br />
you all are gonna get hacked so soon I read security Bolton's I'm like I can't wait to my

</p>
<p><strong>Ryan Anklam</strong><br />
robot comes and attacks me in the middle. So

</p>
<p><strong>Micah Ransdell</strong><br />
I also do home automation but I use a home assistant and that's all local no cloud. So I use VPN into my house. Make sure I if I do need to activate something like that. I'm the only one that can do it.

</p>
<p><strong>Jem Young</strong><br />
That's what 99.999% of people will never do that. I mean, you're gonna be hacked and it's inevitable that Oh, wow,

</p>
<p><strong>Ryan Burgess</strong><br />
they can turn off my lights. Whoo. They can lock your door. Yeah, the story. Before we end the episode, I want to thank Mike for joining us it was a pleasure having you on the episode. Where can people get in touch with you

</p>
<p><strong>Micah Ransdell</strong><br />
on Twitter at Miko ran stone and Netflix comm comm sign up and And leave your feedback.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Thank you all for listening to today's episode make sure to subscribe to front end happy hour podcast on whatever you like to listen to podcasts on. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words? No ice cubes here.

</p>
<p><strong>Jem Young</strong><br />
I got nothing.

</p>

  `;
  return transcript;
};