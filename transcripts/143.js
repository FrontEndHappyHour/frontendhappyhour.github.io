module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. In the past, we've talked about TypeScript, we've definitely touched on it. But in this episode, we're gonna take a little bit unique perspective on it, is we're gonna talk about migrations migrations are, they're hard. I feel like every time we set out to do a migration in any capacity, it's so much longer than expected. And so we've we've brought on Sumana, and Joe, as our guest today from Netflix. They've recently done a migration to TypeScript. So this is a great way for us to maybe learn what worked, what didn't and you know, maybe what you might change in if you had to redo it. So Sumana. And Joe, can you get brief introductions of who you are? What you do, and what your favorite Happy Hour beverages?

</p>
<p><strong>Sumana Mohan</strong><br />
Sure, I can go first. Hi, I'm Simona Mohan. I work as a UI platform engineer on the acquisition UI team and Netflix. And my favorite beverage has to be Dutch Bros. Coffee. Why would say mocha To be precise,

</p>
<p><strong>Ryan Burgess</strong><br />
I was like, that's a pretty specific ice in general, I love even the Mocha part of it. That's great.

</p>
<p><strong>Joe King</strong><br />
I'm joking. Been at Netflix for about a year. I'm also an acquisition UI, but on the partner payments team. My happy hour drink varies. So if I'm trying to be responsible, I'll drink Johnnie Walker black because I don't think it tastes the greatest if I'm honest on the rock, so it slows me down. But if I'm really drinking, with what my heart's telling me, it's something that tastes good. Probably a fruity drink with an umbrella.

</p>
<p><strong>Ryan Burgess</strong><br />
That's, that's an interesting way to think about it, too, is like, yeah, you're gonna just if it's bitter, really doesn't taste nice. It's, you're gonna take a little bit longer. I like that. All right, well, let's also give introductions of today's panelists. Stacy, you want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a senior front end engineer on Trello, Jem Young, engineering manager at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcasts. We love to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is time time? All right. So if we say the word time, which I mean, like I said, migrations they take a lot of time, we are going to say time, so I'm assuming we will. Alright. Well, I figured it was good. You know, since mostly episode, we're going to be talking about migrations. TypeScript is kind of the story. That's this, the piece of it that we're approaching is, I'm curious, what all do you think are the benefits of TypeScript? Like, that's start? Like, why would you want to migrate to it? So

</p>
<p><strong>Joe King</strong><br />
I guess I'll jump in on this one. I feel like selfishly, it's kind of that experience I get as a developer. So when I'm working, that's from several aspects, one of it is, I get a little bit more confidence in what I'm releasing, because that type checking is going to make sure your code is actually doing or it's in the structure that it's defined. And then it also gives you that, I guess that structure that you define also gives you a level of documentation, so you know exactly what this function method or whatever is taking, and what that's going to bring back. And lastly, probably my favorite piece is, it like helps me be a little bit more forgetful and possibly lazy with the IntelliSense. So I just press that dot key. And, you know, the world is at my fingertips.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I love being lazy engineers are lazy at heart, we want to make things easier. So that that sells me right there.

</p>
<p><strong>Sumana Mohan</strong><br />
That's all I can add to that. So since TypeScript is a superset of JavaScript, it really just understands its syntax and gives you type inference, which means the compiler can automatically detect the type of an expression without requiring you to attach types to everything. So I can give you an example. Like, let's say there's some expression, what a equals 10. And then on line 15, you're trying to reassign it to Ryan. So TypeScript will catch that for you. It's gonna say type Ryan is not assignable to type number, and how to TypeScript know that. While it inferred when you initially set it up, that a must be a number because what a was equal to 10. So type inference is really powerful. You don't have to attach types to every piece of code that you write. Another benefit is that refactoring becomes really easy. So we all know, we're talking about migrations. So future migrations actually become easier if we moved to TypeScript. And then we also get greater and better automation tests, your automation tasks. Makhan simpler, because now you can let TypeScript or the type checker catch some of those common errors. And then finally, TypeScript has has a great community support. So the TypeScript team is constantly releasing new features are fixing bugs and just reading the language. That's great.

</p>
<p><strong>Ryan Burgess</strong><br />
Sumana I think when you had said to is helping with future migrations, what about TypeScript makes it easier to migrate, then I'm assuming you mean like if you're migrating to a new framework or a new library, what what makes TypeScript so great for migrating so you

</p>
<p><strong>Sumana Mohan</strong><br />
can automate some of the factors. There are the editor actually has some capabilities, like find all references, and then it can automatically update those references. So it just makes it a lot easier for future migrations.

</p>
<p><strong>Jem Young</strong><br />
I think we can't talk about TypeScript without talking about the learning curve to getting to TypeScript. That's something everybody talks about when you're like TypeScript is great in the beginning, and then you hit that low point where you're like, This sucks. What does this error message mean? And then it's like enlightenment happens. How did you all handle that when you first got introduced to TypeScript? And is that a real thing? Or is that just like, overblown on the internet?

</p>
<p><strong>Joe King</strong><br />
I can try. So I guess it's harder for me to speak to that because my first language was statically typed, and it was C sharp, which is what a lot of this is based on. So in a weird way, it gave me a little bit of nostalgia. So for me, it wasn't a big learning curve, like the generics and things like that. So I don't know Sumana. Maybe you have more? Yeah,

</p>
<p><strong>Sumana Mohan</strong><br />
like I just mentioned, TypeScript is a superset of JavaScript. So it's actually fairly easy to pick up. But it's harder to master some of the more advanced concepts like generics and TypeScript errors can be really scary. So anybody who was starting up, if you see our TypeScript error, it's actually really simple to fix. But the error itself is like 50 lines long, making it hard to or just, you know, making it hard for you to find a fixed part. So I think there is a bit of a learning curve, but you can dive right into it, if you will, JavaScript, especially,

</p>
<p><strong>Ryan Burgess</strong><br />
I'll speak to my like, early exposure to TypeScript was not good. I mean, I saw it way before I worked at Netflix. So it was like early version one of TypeScript. It was not great. I feel like maybe it was just my own, you know, negativity towards it, just like, This doesn't feel right. Like for JavaScript, right? Like is like, spending so much time in JavaScript, not having statically typed. I feel like I fought that a little bit. And so there was a project that I was dumped into where it was all in TypeScript. And maybe that was just a poor attitude towards it. But I do think that as looking at it later, maybe I've matured, but also, I think that the language has matured it I saw a lot more value now than in the first startup.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I'd say there's definitely a learning curve. And viewed Yeah, maybe you're not coming from like, you know, C sharp, or, or Java or some of these other languages like generics, you know, as I mentioned, like, can be pretty complex. And people can write some really wild custom types that I sometimes can find extremely difficult to read, especially with, like the one character references to things you know, it's like, a real an example in my code right now. K extends type of T, Ki, k t, press K, and you're like, What? What are these mean? Why are these just one letter like variable things? Like, what what is this, and I think it can be hard to read. And it doesn't have to actually be like that you can name those things better. But I think that's can sometimes be a barrier, just like readability. And once you have to, like put in some time to learn, learn what those are,

</p>
<p><strong>Joe King</strong><br />
you bring up a great point with, like, I guess kind of the utilities around, generics, especially those can be I mean, honestly, we did the full migration. You know, the team did that. And I still could barely write a utility without referencing the documentation or looking at like the TypeScript source code. So that stuff does not come naturally. At least for me, it's it's kind of been one of those things that I've always had to look into, like, how do I iterate through the keys and grab the value? Again,

</p>
<p><strong>Sumana Mohan</strong><br />
I do agree with what Joe and Stacy just said, I think renaming those keys that you're sending to your generics that are really helps for somebody coming in tomorrow or you being yourself. Like, if you're looking at that type, like a month down the line, you don't know what you wrote. So making it more readable. Really,

</p>
<p><strong>Joe King</strong><br />
just one thing about the airs, I had one that was awesome. Like I actually made a Giffy of it. And it was basically like a game. Is this the matrix or an air from TypeScript? It was that long of me just scrolling. Actually to condense it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's amazing. And and was this shared while you're migrating? Yeah. Oh, yeah.

</p>
<p><strong>Joe King</strong><br />
100% to really build up. I guess, excitement about getting over to TypeScript.

</p>
<p><strong>Ryan Burgess</strong><br />
I love it. That's so good. And maybe that leads me to my next question is just how did you all approach migration was for typescripts, specifically, but it doesn't just happen, right? Like it takes time. Cheers, cheers. There's planning and everything that goes into it as well. So I I'm curious how did Netflix approach TypeScript for migrating their web code base?

</p>
<p><strong>Sumana Mohan</strong><br />
Sure, oh, my God speak to that. So that position y team, we work across web TV and mobile platforms. And so back in 2017, we had just finished rewriting our entire TV signup, flow and TypeScript. So we understand the benefits of having moved to TypeScript. And we wanted to bring it to our even bigger code base, which is website for a couple of reasons. So first one is that it is context switching, meaning that people who are working on websites are also working on TV, and both code bases we're in TypeScript, then it's just one less thing to context switch. The second one was just the benefits that we saw are really improved developer developer productivity. And then a large code base with a lot of dogs working on it also meant that users have more confidence in your changes going out, which will also make it easier for us to move towards CI CD. So having kind of think you thought to all those benefits, we just brought it forward to the website in so one thing I really love about working in Netflix, is that any engineer can kind of bring forward an idea to the team, and then see it through to execution really speaks to our freedom and responsibility culture. So having, you know, in 2020, having just come off the TV rewrite, we created a small TypeScript working group, and we put forward a proposal to our website team, we listened to their feedback, there were a lot of concerns, you work through them. And then we ran a quick pilot migration project. And through that pilot migration project, we brought back the results to the team. And in order we came up with a bigger migration plan to migrate our code to TypeScript

</p>
<p><strong>Ryan Burgess</strong><br />
Sumana. He mentioned convincing engineers that some people weren't on board of TypeScript, and that that can be difficult. How did you approach that?

</p>
<p><strong>Sumana Mohan</strong><br />
So I'm just gonna say that it does take time. And it's okay, if people are not convinced, like right from the start. People will be skeptical about adopting a new technology, especially something like TypeScript because it seems huge change and the way they write code, and so not everybody, there were a few concerns I can go into. Not everyone was fully bought into the benefits. Introducing a strongly typed language gave them the fear that it might actually slow them down. Like how would we support new people writing TypeScript, or simply had to ramp up but they still had all these deadlines that they had to meet. The second concern was, some of our code was written slow and didn't get fully adopted. So there was concern that we will be introducing TypeScript, and they're not fully adopting that, which means we have to now maintain JavaScript flow and TypeScript. And that's a lot of context switching happening in our website code base. Again, that makes onboarding your engineers not so easy. There was also concern around juggling migration, and innovation, like how would we migrate? Would engineers have to migrate the files that they touched? Like, how would the migration work? And then how would we resource this project, like there's a cost to migrating a very large code base, and there were other concerns around you know, some people want it foundational types to be set up. Because if we are adopting TypeScript, and we don't have the foundational type set up, then we're not really reaping the benefits of TypeScript, we might just see a lot of enemies spread out everywhere. And finally, there was concern around like, how would we keep our types of today, there might be some false sense of security now, we're setting up all these types, and they might go out of date. So how do we keep them up to date? And then how are we type our data that coming from upstream services or other API's, because we use a lot of data in our ROI components. So there was a lot of concerns from the team. While I'm actually happy that our team didn't just blindly accept this technology we put in front of them, they really challenged the idea of migrating. And the types were working group, we worked on addressing each one of these concerns, which I think really helped the team ease into the adoption over the course of one year.

</p>
<p><strong>Ryan Burgess</strong><br />
That's great. It's like you've outlined some of their concerns. I'm assuming too, that you didn't just say, yeah, it's too bad. We're gonna go ahead, how do you maybe like listen to those concerns and actually address them.

</p>
<p><strong>Sumana Mohan</strong><br />
So I think one way to do that is to have a pilot migration. Pick a small isolated portion of your code this along with some foundational pieces and setup types there first, gather learnings from that and take those learnings back to our team. I think that also serves as a great example For people who want to adopt TypeScript, they can look to that area of the code base, as an example, when they're setting up their, their components or when they're writing TypeScript. So it's, it really takes time, it doesn't happen overnight. And you really just need to have a lot of patience, and a lot of back and forth. Pair programming sessions also help. If you if you cannot invest in something like Typescript and workshop for the team, just you're spending an hour or two here and there for people who are stuck helping them get over those TypeScript errors really helps

</p>
<p><strong>Ryan Burgess</strong><br />
like that. And I'm going to cheers you for the time to because migrations do take time.

</p>
<p><strong>Jem Young</strong><br />
So from from ideation to migration complete, how long was that

</p>
<p><strong>Sumana Mohan</strong><br />
I can speak to that a little bit. So we started thinking about this, at the end of 2019, there was a TypeScript working reporting in place at the time, it was called typewriters, which is I think of holding for time for working motion. That's great.

</p>
<p><strong>Ryan Burgess</strong><br />
That's so good tears.

</p>
<p><strong>Sumana Mohan</strong><br />
But the we were busy with another project at the time. So the types were working room didn't have a lot of traction. So when we completed this other project, which is the TV sign playwright, we really wanted to shift our focus back into bringing TypeScript into website. So it was around 2019, that we really started looking into this. And then 2020 is when we started talking to a team. I mean, listening to the team getting feedback addressing, like thinking to some of the concerns they had, trying to just understand what kind of tooling do we need to put in place, even before we ask people to start writing TypeScript. And then it was around, I think, October of 2020, when we had some of that tooling in place, some of the libraries ready to go, some of the foundational pieces set up. That's why we ran the pilot migration was October of 2020. And then we finally actually kicked off the migration, the official migration in March of 2021. So between March of 2021, and December 2020, is when we actually fully migrated our code.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I'm also curious, like, one thing I found really helpful, sometimes in migrations, or helping people get on board with a migration is sometimes even talking to other companies or teams that have adopted the technology. And you know, are they seen the benefits and you like, basically learn from someone who's already gone down that path? Did you do any of that, where you were able to talk to other teams, or learn from on another company.

</p>
<p><strong>Sumana Mohan</strong><br />
Um, so we didn't necessarily talk to other buddy from another company. But, uh, one Netflix engineer had just moved from Twitter. So he brought some of his learnings from Twitter, of how they had tried to migrate their code to flow. At the time, he kind of mentioned that. This is one thing that we kind of explored to that every month, they would have like one day, where everybody in the team would get together and try to migrate a portion of their code to form. So that's something that tried to do but we we just talked to other teams, but all many teams at Netflix, we're just starting to adopt TypeScript. I don't think we had any team that was fully adopted just yet. So we didn't have a lot of learnings from other teams.

</p>
<p><strong>Jem Young</strong><br />
One, I'm glad we're talking about migrations, I think they're an underrated part of software engineering. Nobody talks about them, really, because they're not sexy. There's nothing to show for it. It's like, oh, the code now works. It looks the same, essentially, like the UI code, essentially, under the hood. Like the the deeper software engineers, like really appreciate the complexity, it's abstracted away and all these benefits you're getting. But what I want to know in migrations, I've done plenty of them. And if you're a software engineer listening, you will do plenty of them, I promise you, you will do a migration at some point in your career, probably multiple of them. How do you keep your energy up over what was what a two year migration? Like? How do you keep that momentum going? And not just like, oh, yeah, we have that last 20%, which is always the hardest part. And just like I will get to it some other time. And then you're just like accumulate technical debt.

</p>
<p><strong>Sumana Mohan</strong><br />
One way to keep momentum going is to create a small working group, like a working group of engineers who are really motivated or understand the benefits. And maybe have one or two people in there who are really skeptical, who actually don't really like TypeScript, or don't really understand why we're moving and have a cadence to act like you will have we used to meet every two weeks, we would have each one of us would come up with an agenda for that meeting, what we wanted to discuss and what we wanted to get out of that meeting. So having that cadence really kept the momentum going. There were times when we did receive a lot of pushback. And there were times when you know, we did kind of want to give up but You just have to keep a sight of that long term goal, you understand that benefits, you need to be bought into those benefits to some extent, so that you as as concerns come in you, you can start addressing them. And I think over time, you will see more and more people are adopting TypeScript, like more and more people in your team writing TypeScript, which also gives you that sense of fulfillment, okay, like what I'm doing is really actually heading somewhere people are actually adopting, people are actually coming back with questions, and creating like a Slack channel where people can come and ask those questions freely freely. Setting up pair programming sessions, I think that really helps too. So just voicing it out to your team, either in team meetings, or like demo shares. About spark really helps.

</p>
<p><strong>Stacy London</strong><br />
Was it full time that the conversion was happening? Or was it kind of like you're doing project work, but then, you know, 20% of your time, you were like, you know, doing the conversion.

</p>
<p><strong>Sumana Mohan</strong><br />
So I can speak to that. So I was the dedicated engineer on this, but there were four other people who are juggling other projects. And they were not fully resourced to this project.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think to go back to Jem's question to on to migrations, in general, it is, it's a huge commitment. And it can feel like to what Samana said, There's times you want to quit. And I think that one thing I found really useful up front is having milestones or phases, right? It's like I heard Sumana, say, like, you're you can see the end goal of, you know, the whole code bases on TypeScript. But there needs to be like those incremental wins, or else you're always trying to chase that end state, which is so far from it. And so if you have those milestones, celebrate them, really call them out and say, like, and maybe even almost like, treat them as like mini projects in themselves, where your what worked, what didn't celebrate the wins, and then also revisit, like, what have you learned from it, to apply to that next phase, I think that that has been a really useful tool, and something that kind of keeps, it just feels like less, it just just breaks it up a bit.

</p>
<p><strong>Sumana Mohan</strong><br />
I completely agree with you, Ryan, I think platform migrations are so long, without having those short term goals defined, it can just become very taxing. And if something more high priority comes up, then you feel like you need to just shift your focus onto that. So having those celebrating those small wins really help. It's

</p>
<p><strong>Joe King</strong><br />
It's crazy, you actually reminded me that's probably what the biggest driving force was for me, is we had ours broken down into like, different sections. And then usually within those sections, because towards the end, like our group, kind of, we got pulled around and stuff. So there was fewer of us working on it towards the end. And it was just like, okay, even within this section, I might look and say, oh, okay, I need to hit this folder. And if I felt like I was hitting roadblocks, and steam was being lost, I'd go find some low hanging fruit, knock out that easy folder and kind of build that momentum back up just to keep going. And so it wasn't like a follow at a time. It was like, Okay, let me get in the login section. Okay, logins done, let me go to the forgot password for you know, whatever it is just go to this area, knock that out, get some sense of completion and use that to drive forward. And also an alternative is cash and food. Those are also great.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, no, you should have the like, Food Team celebration, whether you order some like Boba or some pizza, I don't know, whatever people want. It's like just recognizing like we've made a milestone and we've made we've achieved some another one that I thought of too, you know, I'm close enough that I understand how you all migrated spawn, I think you played a good role in this as you need an informed captain for migrations, not no matter how big or small, you need someone really thinking about it from like holistically and continuing to lead that charge. And now that could be like a TPM that could be a manager, that could be just one engineer it, you kind of have to decide that at the start, though. Because if you're all trying to be make decisions all over the place, that becomes really frustrating to like you're making decisions together as a team. But at the end of the day, you need that like sole driver, who's kind of you go to and you're like, Well, what do you think about this? Like, how should we move forward? And I think it's really good to outline that upfront.

</p>
<p><strong>Stacy London</strong><br />
I was curious about confidence, like how you were sometimes I know, I've seen where we have done some TypeScript conversions. And the code does change maybe a bit more than you expect. And maybe you need to make sure that you don't introduce a bug. Like, how do you did you have to, like add more unit tests? Are there enough that like, it felt you felt confident and like, you know, because it's a rewrite, you're like, effectively, you know, touching stuff that maybe has worked for a long time and hasn't actually been touched? Yeah.

</p>
<p><strong>Joe King</strong><br />
So that that actually it was it was a strategy where we were just kind of trying to do good housekeeping early on, but then we hit some of those dark corners of code where you're like, there are zero tests for this thing. And in that particular situation, it became like an extra burden of, especially if you have no context of what this is supposed to do. So you're diving into truly understand how it functions, what's going on, and to make sure that you retain at least key aspects of that, as you're doing the migration. So we definitely tried to lean heavily into writing tests before doing anything on the conversion. That was who that was critical. And since we, we weren't purely migrating TypeScript. So we were also taking care of a few tech debt items in there. And that evolve some like, we hit some interesting issues with class based components. So we tried to do whatever we could towards the end to move towards function components in React. So it was things like that that kind of evolved over time. And of course, that created some new can of worms that we ran into when we're doing functional components. So it testing I would say is the central key to at least giving a little bit of confidence, definitely caught some things that my test didn't catch. But yeah, testing was key to that.

</p>
<p><strong>Sumana Mohan</strong><br />
I also want to add to that, no, want your tests to change. So you don't want to migrate your tests, as you are doing a migration, you want something to remain the same. So as long as you get your test coverage, to look pretty good. Whatever changes you're making, you can be confident, you're not breaking anything. And TypeScript will also catch some bugs for you. Like we think we uncovered a few bugs along the way that we hadn't caught before. So it was nice to be in real life trying to fix.

</p>
<p><strong>Jem Young</strong><br />
I love you to our experienced senior engineers, because you're like, This is why you write tests, because you got to do migrations and with tests give you confidence, something you hear a lot from early people is like, I don't need to write tests, I understand the code, I understand it works. It's very easy to grow. But it's to you three years down the road, when you need to migrate that and you will, you will eventually, the tests are there to save your butt. I just think that's an important call out for everybody out there. Like why we write tests,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, I've been through migrations, where there haven't been tests. And it is that much harder. Those tests like even if even small tests will help you just checking that I feel like even at Netflix, we've done migrations years ago, where there wasn't a lot of tests, and it took that much longer to do a lot more headaches, just pain in general. So I think that's great that you called that out.

</p>
<p><strong>Jem Young</strong><br />
So from a I don't know, we I think we think a lot about software engineering in this ideal dream state where we all get to be heads down for a time and we come out with a solution. But the reality is we we exist as a business, we exist to make money. That is what we do. And there are competing priorities. And there's a finite number of resources we always have, how did you convince product managers and other stakeholders to be like, Hey, I'm going to go heads down in this TypeScript migration, even though you won't see a change in the actual products. This is something that needs to be done.

</p>
<p><strong>Sumana Mohan</strong><br />
I think, at the end of the day, like I think what are you mentioned, it'll improve developer productivity. So from a developer productivity standpoint, you can kind of convince them that you will just have more confidence in the changes that are going out, you'll have less bugs as a result. People can, people are going to get IntelliSense. Like, if you look at all the benefits of TypeScript, it's going to be easier to write code. People are just going to be happier writing code at the end of the day, and it makes a difference in their lives. So it's hard to convince PMS, I don't think I had to directly convince DMS, I was the sole person dedicated to this project. But everybody else really just volunteered to work on this made time for it. They understood the benefits, they were really bought into it. And people who weren't bought into it, like people who are skeptical in the beginning, were bought into it towards the end. So it's really just forming goes finding those group of people who really value bringing it into the codebase. And then forming the work. I would say, I would just suggest that would be the way to go.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think Jem, he touched on a good thing that was like thinking about partners or stakeholders, PMS, whoever that may be, is they're not necessarily. I mean, I've worked some really technical pm, so don't get me wrong, they understand the technical benefits, but they, at the end of the day, want to understand like, Hey, this is a investment that you're taking away from us actually being able to ship some new feature or benefit to the company. And so I do think you really need to take time upfront with your partners to really help them understand And then what the benefits are. And so to smallest point of even calling out bugs or people being more productive on the engineering side, I don't know if you necessarily have to quantitate how much that will be. But really, maybe even speaking to some of the areas where maybe the quality of our code is getting like a little brittle, and it's really tough. And so we've had a few mistakes in production that cost us this extra time that, you know, extra day or two, or we released something and had to roll back, I think it's good to remember that the reason why we're doing these things is to make improvements in that way. And so I think if you speak to that, from a high level, people get that a PM, for instance, they're going to be like, Wow, oh, you think this will reduce that? That's great. And I think that you build that trust over time, too. Like, I know that I've worked with a lot of the PMs at Netflix, and you know, we're not just like, well, TypeScript sounds cool. We just want to write that, like, that's not the reason you're actually thinking about it from a logical business standpoint, too. Because at the end of the day, you should be partnering from engineering design, PMS, data, scientists, whatever it is, you're all trying to achieve the same goal. And so if you're just coming at it from that angle, and really solidifying and speaking to that, I think that goes a long way. I guess mentioning the features and everything. I always think of migrations like it would be so nice if you could just pause all work, right? Like, we're just like, cool, the codebase is in this state. And we want it to be in this brand new state on like a new framework or library, I have never had the luxury of that, like that does not exist. And if someone has had that, Oh, my God, I'm so jealous. It's always that you're, there's still things going on, even if like Sumana mentioned that she was pretty dedicated to this migration. Others aren't. Even if you have 510 engineers that are dedicated. There's 10 or 15 other engineers that are working on top of it. How do you deal with that? Like, especially for this one, Joe and Sumana? I'm assuming there was code that was still being written that wasn't in TypeScript. So how do you manage that?

</p>
<p><strong>Joe King</strong><br />
I think one thing that was key to that was just being very communicative. So just communicate everything, make sure you broadcast loudly and every channel, so everyone knows what's going on. And I think this is kind of a luxury we have at Netflix, and maybe at other places, but people care and they pay attention. So if you're, you know, if they're NFL, you know, they might continue to work with it. And they might communicate, but there's just a lot of collaboration and communication. So if it's already been converted, it's been converted. And I think, what was communicated, I guess, more broadly, was just, hey, if it's TypeScript, keep it there. But there's no need for them to actively migrate one that hasn't been migrated to that point. So some people did, some people did take the initiative and go ahead and convert that over, however, a lot of people could just, you know, work on the file. And if we had any sort of conflicts, we would just, you know, fix those conflicts and keep moving forward. But there wasn't much friction. Maybe I'm missing something, but it seemed pretty smooth. Yeah, I

</p>
<p><strong>Sumana Mohan</strong><br />
agree with Joe, I think the migration was actually pretty smooth, smaller than you would have thought it would be considering how many people work on that site. One other way we kind of enforced TypeScript is through linking. So we had every time we migrated, like a feature area or Florida, we were just Apple entrails, which were you longer allow you to write JavaScript, which were no longer allow you to reintroduce some of the tech debt that we were trying to move away from. So naturally helped us not have to worry about the portions were already migrated, like, hey, are people reintroducing JavaScript in those places? Again, do we have to go back and migrate again? So even if somebody didn't really need some of the emails or slack communication, they sent out? Some of it we also enforced through tool. I like

</p>
<p><strong>Ryan Burgess</strong><br />
that. Did you do anything like I know in some past migrations that I've worked on is net new features have to be written in, in say, for this instance, TypeScript.

</p>
<p><strong>Sumana Mohan</strong><br />
Yeah, so we basically enforced all new code to be written in TypeScript. And all as we were migrating all the existing code, because if we if the new code wasn't being written in TypeScript, and just add store migration, it just lengthens our migration. So we kind of enforced that it took some time for the team to fully handle that, mostly because we didn't have a lot of foundational types set up. So it took some time for us to voice and once we had that available, the team became more comfortable writing TypeScript

</p>
<p><strong>Ryan Burgess</strong><br />
like that. Yeah, I feel like that that one is typically worked. It's still sometimes difficult because you still have some new and some old, but I do like that kind of rule. It's like you don't want to have to like continue writing the old technology you want to move in the new direction for we dive into picks for the episode. I feel like there's already been nuggets of good advice on migrations. But I'd love to hear from each of you one really significant piece of advice. If someone is asking like they're dealing with a migration, what's one piece of advice that you would give them?

</p>
<p><strong>Sumana Mohan</strong><br />
I think having a small working group really helps. I think, to your point, Ryan earlier, having short term goals, really helps, too. And in order to keep the momentum going, have some kind of cadence, like meet bi weekly, even if you're not getting much done, just continue meeting people, because that keeps the interest going. I know like for the first half of 2020, we did make a whole lot of progress. But a lot of ideas just came about how should we migrate? How should we resource? How should where should we invest what type of tools that shouldn't be investing. So just a lot of, you know, back and forth communication, both within the working group, and then with the other teams within Netflix, which really brought out a lot of good conversations, which kind of allowed us to execute on the pilot migration later on in 2012,

</p>
<p><strong>Joe King</strong><br />
I had to say, it would kind of be a little bit more to the approach. So I think having solid guardrails on how you're actually going to approach it as you're doing it. So like, for instance, for us, we, you know, rename the file. But before that, I think we already called this out, we wanted to make sure that there were testing in places that step was usually there towards the end, it was kind of let's get this done. But anyway, so you might rename the file. And the reason for that is to retain the history. So if you rename the file, and you do too many changes, we discovered at around like 60%, difference, it starts to lose some of the history. So we had that and a few code mods that we would apply before actually going in, and really refactoring and doing some of the, the more specific typing. And during that phase, we would just suppress any sort of TypeScript checking, and then try to really come back very quickly. So files didn't stay in that state very long. But ultimately, to sum that up, make sure you have that certainty with test, and then have some pretty established steps that you can take and take as much thought of it out of it as possible.

</p>
<p><strong>Ryan Burgess</strong><br />
Maybe even as we're going through Devin Stacy advice, I'm actually going to ask you one little follow up before that, too. Around the testing side, we mentioned that testing is so important. And I did mention that there's been times or like I've been in situations where there was no test, what would you do in that situation?

</p>
<p><strong>Joe King</strong><br />
I'll speak to what happened in some of this. So most of the time, and then kind of speaking to momentum. In the beginning, probably the first 75% 80% of it, we did, we would go and write the test, try to cover those major cases, realistically towards the end, as it was like, holidays are common. We want to get this done. There were a lot of situations where we just trusted the wings of faith, I guess, I don't know. So yes, there were definitely towards the end some non test. migrations that happen. All right,

</p>
<p><strong>Ryan Burgess</strong><br />
Stacy gem, any wise wisdom on migration advice,

</p>
<p><strong>Stacy London</strong><br />
I think smell you mentioned a little bit about like pair programming, I always think about if you're bringing, if you're migrating to something that's a new piece of technology, or a new language or a new stack to try. And if you can carve out time for the team to learn. So maybe, you know, set up some training, if you can bring someone in to train the team all at once awesome, like, or carve out time, so people can you know, go do tutorials. Making space for that I think is really important. Especially if you're trying to get people excited about something. If you give them opportunities to learn. I think that's that that'll help make it more successful.

</p>
<p><strong>Jem Young</strong><br />
Yes, not much to add on the wisdom that Joe and Sumana shared not Stacy and Stacy. But seriously to all our friends and happy our regulars. If you haven't gone through migration, you will listen to the advice on this podcast. Because there are, there's a lot more to migration, just like converting code from one to another. If switching frameworks, there's like that business case, there's selling to your peers, selling it to stakeholders, selling to your manager selling to their manager, there's so much that goes into making a large codebase change that it's easy to take for granted. Like having tests in place before you start or even during is like one of these things. So I don't have any advice that that people already haven't heard already on this podcast. But all of this is solid. I gotta say it is 100% Solid.

</p>
<p><strong>Ryan Burgess</strong><br />
I'll maybe share a piece of advice that's maybe a little different angle A becomes at the start or definitely that start of the migration. Ask yourself questions like what if we didn't migrate? And I think that sometimes we get caught up in saying like we need to migrate and save Like, what if we don't like what is that going to cost us? And I think that's where it really gets out. Maybe some of those benefits like really hammering on, like, how long can you go without migrating? And you know, are we going to continue down this road of pain? But another one is, what are you giving up? Everything's a trade off. Right. So what are you giving up that you're not investing in? I think just being really thoughtful on is this the right time to migrate? And what are we giving up? And I think those types of questions should be asked. And I personally, don't think I've always asked that question. It's like, we need to migrate. Let's go, let's go and not really thinking about it. Maybe playing the devil's advocate and really thinking about those approaches. I think that can really help answer a lot of things. It still might lead you down the path to Yes, we should migrate. But I think it also helps you really tell the story when you have to sell it to Alright, well in each up so the front end happier podcast, we'd love to share pics of things that we found interesting. Maybe it's TypeScript related. Maybe it's migration related. Or for me, it might just be some fun random thing that I've found on the internet. Yeah, let's share pics. Stacey, you want to start it

</p>
<p><strong>Stacy London</strong><br />
off? Sure. I've got two music pics. So some music you can listen to while you're doing your migration. The first one is Tristan ARP has a mix on the tech mental podcast. It's been described as playfully blends the framework of dance and ambient music with adventure sound design, asymmetrical rhythms and pointillistic micro percussion. Some very interesting way to describe it. It's a it's a good listen. The second one is Sky H ones mix for Resident Advisor. I picked her another maximum her at a prior podcast and I've came across this one recently. And it's also very good. So I'm continuing to share her work. It's an invitation for reflection and maybe meditation.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Jem, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
I've got two picks today. The first one is a TV show I stumbled across on Prime Video. As terrible as that UI is it. I'm surprised I found it too. Because you know, yeah, I won't stop bashing Prime Video. It's just it's UX is so terrible. I can never find your content. I don't know why. Why do you why do you spend a billion dollars on Lord of the Rings and like none on UX designers. Anyways, I did have the final show probably by accident. It's called Alaska off road warriors. It has been one of the most enjoyable shows I've seen in quite some time. Pretty much. It's a group of people Racing Off Road in Alaska from one coast to another. And not these people aren't wealthy. This isn't like a sponsored corporate event or anything. They're just people with these offshore vehicles. What I love about it's so genuine, and that they all keep screwing each other over. They're always like, yeah, bro. Yeah, I'll pull you out of the mud next time. Yeah. And then like, literally next episode, they're like, See ya, and they keep doing it. But the drama is great, because they're all like genuine people. None of them are writing like $100,000 Super machines or anything. They're just like Toyota for runners, stuff like that. But I mean, I won't spoil what happens. But it there's a lot of twists and turns. And it just, it makes me respect off roading a lot more as this as a sport and their respect for the environment, stuff like that. It's a good watch on Amazon Prime video right now, my next pick is something I just randomly stumble across on Spotify, which was my favorite TV show. It's Always Sunny in Philadelphia has a podcast. And essentially they recap some of the episodes and they tend to go off on tangents. So this our podcast here, but it's a lot of fun if you're a fan of the show, like I am. And there are a lot of fans of the longest running Comedy Series in television history, which is It's Always Sunny in Philadelphia. Most people don't know that. It's been off for 15 seasons. So if you're a fan of the characters, they literally are themselves on the podcast and the show aired in real life. So it's a lot of fun. I do I'd give it a list.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm excited to listen to I did not know about that. That's awesome. Sumana what kind of picks do you have for us?

</p>
<p><strong>Sumana Mohan</strong><br />
So I just finished watching the TV show. It's got a really long title. It's trying to pull it out because it's the woman in the house across the street from the girl in the window.

</p>
<p><strong>Ryan Burgess</strong><br />
That is that is a very long title. That is like a description.

</p>
<p><strong>Sumana Mohan</strong><br />
Exactly. Sounds really good. Like surprisingly good. It's only not like a 6.4 on IMDb. But I think it deserves a lot more. It's also a parody. So I think it borrows from a lot of other movies. It was a pretty good watch

</p>
<p><strong>Ryan Burgess</strong><br />
right on Joe. What do you have for us

</p>
<p><strong>Joe King</strong><br />
if I'm going on the TV show route. The show I enjoyed a ton recently was actually arcane. I feel like after about Episode Three it sucks you and and it just it's awesome. I love the style animation stuff. I was super impressed with it and then I'm going to call this like a point five pick. So if you're a Star Wars fan, maybe just skip to episode five of Boca boba but Episode Five and six are fantastic. I'm hoping by the time this is released, Episode Seven comes out, and it's also awesome. But if it's like one through four, it won't be. And then if I give a pic that's I don't know a little bit different, but I'm kind of hyped on it right now. It's tonal. It's awesome. It's kind of like a piece of fitness equipment. And it's smart, and kind of helps you track things. And I just, I love it.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem will be a huge fan of it, too. For those who know Jem's not a big fan of smart things. And so I'm just I'm curious on his take on it. That's obviously where

</p>
<p><strong>Jem Young</strong><br />
we're weights are involved or any sort of resistance that could fail. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, you can listen to Gemini go back and forth on an episode like I feel like five or six episodes ago, where we literally just like debated smartphone, I have two picks. One is was getting tattooed, I don't know a couple weeks ago, and the artist showed me that these videos that there's this rapper, he goes by the name high rez, he had started rapping or getting discovered by he's an Uber driver in LA, and was having these people just show up in his Uber and being like, hey, you know, do you guys like hip hop? And they're like, yeah, yeah. And it's cool. If I like rap for you. And you can see these people are like, no, like, this guy does not look like what you would expect a rapper looks like. And so they're like, Man, I guess and like you just tell they don't really want to hear this guy rap. This guy is amazing. Like he he is awesome. Like, just the videos are hilarious, but he has a really solid wrapper. And so you kind of see these reactions of people like kind of being like, I don't know about this. And then quickly being like, whoa, like they're out pulling their phones out filming him after. And so this is all he's filming this all in the car. It looks great. So I thought that was kind of unique. I'm sure there's other things that people do and Ubers but that was a really cool one. So I highly recommend checking out some of those videos. And then I recently just watched a documentary on Netflix called Tinder swindler. And the story is just, it's wild. There's this guy, he essentially swindles people over Tinder. He like basically makes women fall in love with him and he's taking money from them. I it's just a really interesting story. I feel for a lot of people who he stole money from, but it's just an interesting story. I highly recommend checking out I think it was just recently released to thank you, Sumana. And Joe, thank you so much for all the wisdom on migrations, TypeScript, everything, where can people get in touch with you?

</p>
<p><strong>Sumana Mohan</strong><br />
You can find me on Twitter at MAMA underscore Mo. Oh,

</p>
<p><strong>Joe King</strong><br />
yes, LinkedIn. I don't have a Twitter which may be a sin. I'm not sure. But yeah, I think I'm Joseph King on LinkedIn. I think it's JG King to

</p>
<p><strong>Ryan Burgess</strong><br />
write out. So are you going to join Twitter now? Or

</p>
<p><strong>Joe King</strong><br />
if that's if I must

</p>
<p><strong>Ryan Burgess</strong><br />
know it's fair. Thank you all for listening. Today's episode. We love hearing from all of you. Let us know about some of your Migration Stories. Hit us up on Twitter at  <a href="https://twitter.com/frontendhh">@frontendhh</a>. You can listen to front end Happy Hour on whatever you like to listen to podcasts on. Make sure to subscribe. Leave a review tell us how we're doing. Any last words.

</p>
<p><strong>Sumana Mohan</strong><br />
Happy typing.

</p>
<p><strong>Ryan Burgess</strong><br />
Ooh, happy typing. I love it. Cheers.

</p>
`;
        return transcript;
    };