module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
All right, well, welcome to another episode of the front end Happy Hour podcast. We are often asked about the best practices for documentation, so we thought why not do an episode on documentation? In this episode, we'll share our opinions and thoughts all around documentation. Let's give introduction of today's panelists. Maurice, you want to start it off? Sure.


<p><strong>Mars Jullian</strong><br />
Hi, I'm Mark Julian. I'm a senior software engineer in the Bay Area and all thoughts are my own.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a senior front end engineer at Trello. And all my thoughts are Mars's, Hi,

</p>
<p><strong>Augustus Yuan</strong><br />
my name is Augustus EU, and I'm a software engineer at twit Hi, I'm

</p>
<p><strong>Shirley Wu</strong><br />
Shirley. And I'm an independent creator of data visualizations.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix and all thoughts are documented. That's guys, and each episode of the front end happier podcasts. We like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And what did we decide today's keyword is read me read me read me. So if we say the word read me, which I'm assuming we will, when we talk a little bit about documentation, we will all take a drink? All right? Well, let's hop in. I feel like we got to start, what does documentation mean to all of you? How would you describe it? What are your thoughts on it?

</p>
<p><strong>Mars Jullian</strong><br />
Oh, gosh, that's so broad. I like don't even know where to begin, because you can document or just generally like if you generalize it, like write down things, for a variety of different types of work in different ways. But the way I like to think about it is usually like documentation is sort of saving myself from my future self, or my future self from my current self. And also like, I can't remember where I read this, but sort of it's like the ultimate way to scale yourself and your work. Because if you write things down one, it can serve many people at the same time or lots of people, but you're only kind of one of you. And you can't be asked the same amount of data questions from like all those people all simultaneously. So it's sort of it's just a way to write down what's currently going on in the current state of affairs. And it's a good resource for other people. And I think it saves time for you and for others down the road. I was very broad. But that's

</p>
<p><strong>Ryan Burgess</strong><br />
great. You did a great job. Yeah, I was like, yeah, that's that's a pretty good way of describing it. And I love that you got into like sharing the ideas, and not having to explain things over again, especially in you know, us all being in the pandemic, but the more being remote and not always working in the same time zones. And just everything is there's a lot more flexibility in the sense that you can share those ideas broadly. And you don't necessarily have to have a meeting for it.

</p>
<p><strong>Mars Jullian</strong><br />
I think it also gives people reading your documentation, not only a resource, but they can be more independent in the way that they work, because it's sort of like a self serve model, that they can grab the resources they need when they need them, which is pretty, I think, is pretty useful. And like really empowering for a lot of people

</p>
<p><strong>Shirley Wu</strong><br />
who I wanted to add on to that, as a team of one I'm working on mostly like one off projects, the way that interface the most with documentation is with like open source libraries. And I feel like documentation for me, Doc, first of all documentation. And second of all the community around the library is like what makes or breaks the library for me and whether I'll ever use it. Because like great documentation is so good. And then and then I've also come across like documentation that's like literally just repeats the function name. And I'm like, I don't know how to use this library,

</p>
<p><strong>Stacy London</strong><br />
or that exhibitor to like, have a code example. And just be like very abstracted, and just like foo equals bar times food. And like, you're like this, I can't get around this.

</p>
<p><strong>Ryan Burgess</strong><br />
Or I think even worse is when it just especially on like an open source project and GitHub, it just defaulted to the plain readme where it is just the title. And that's it. You're like,

</p>
<p><strong>Augustus Yuan</strong><br />
hey,

</p>
<p><strong>Ryan Burgess</strong><br />
cheers to read me.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers. It's so funny. We talk about those useless functions. It makes me think of, there's this linter that JavaScript has, where you can make it lint No, look, no ask for you to put the comment of what the function is and what the parameter type expects. And I remember one time I was working on some code, I was like, Oh, thank goodness, they have this linter I'll know exactly what parameters are getting passed. And the person just put add parameter is object is like, what is the object like this? was like before, like Typescript and stuff. I was just like, what object a JSON object just like anything could be.

</p>
<p><strong>Ryan Burgess</strong><br />
And maybe, I guess maybe you can just take any, I guess it's better than nothing

</p>
<p><strong>Mars Jullian</strong><br />
brings up an interest like this about how like code can be self documenting, I think is objects might be a little vague. It also like goes to how you name your variables, as like, to Stacy's point to like, don't name a variable foo, or bar, like, what does that variable do, but if it's sort of like a flag is like, is on or is off or is enabled, like, that's one way of making your code self documenting as well. There's, I mean, there's different ways you can document stuff and naming your variables correctly is one way to do that

</p>
<p><strong>Stacy London</strong><br />
merge did such a good job of defining documentation, there's probably not much to add. I plus one to the like, documentation for your future self. Especially like, if you stick around at a place long enough, you will write code that you forget that how it works. And why and why two

</p>
<p><strong>Mars Jullian</strong><br />
weeks later, for me,

</p>
<p><strong>Ryan Burgess</strong><br />
sorry. Yeah, I was gonna say I'm like, I mean, I'd hope that you're staying longer than two weeks, because I forgot what I did a couple of weeks ago.

</p>
<p><strong>Stacy London</strong><br />
So yeah, so it's nice to like, for your, for your future self to like, there's, there's there might be a lot of why's that are, you know, just from reading the code, you wouldn't know, like, oh, there's some sort of shortcut happening here. But why and like, if you have some documentation around that, just like helps, you know, save a bunch of time, not only for yourself, but your team.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, you can have some very efficient code that say you have a function, it's, you know, five or 10 lines. And it's really efficient. It's very powerful, blah, blah. But sometimes the at least in my world, sometimes the comments are longer than the code itself, because the more efficient the code, the more obscure it can be. And so it's less human readable. And so I need to explain it to myself in plain language going forward, to sort of Stacy's point, like, if you stick around long enough, you're gonna completely forget your headspace when you wrote it, and you forget your whole train of thought of how you got there. And that's really valuable stuff that you don't want to lose.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't think you can comment enough sometimes, like, I am not the best at it, I will write some comments. And then even then they're not that helpful. And I'm like, what, what was the point not, but when you write really thoughtful comments, he may overdo it and think I'm never going to need this. But you will thank yourself later when you're like, oh, yeah, I remember what I was thinking and what the purpose of this is. And you know, just those little details go a long way. And so yeah, that is definitely a form of documentation. One of

</p>
<p><strong>Shirley Wu</strong><br />
the best things I learned early on is to comment before I code. And so like, I write down all of my thought process before I start coding, and then that's, that's how I look for pieces of code that are especially complex. And that becomes both the documentation as well as like, as I'm writing out the particularly complex piece of code, I can like, come back and reference it.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah. And I think it's interesting to like, we're all talking about it from the first person perspective, also, but I want to recognize that at least for in my experience, it sometimes takes a village. And the documentation is not always obvious where it needs to be, especially when it comes in code comments. And oftentimes, it's like through a, you know, peer review process or like pull requests when, you know, colleagues are asking lots of questions around what's going on. And that's when it becomes clear. It's like, oh, this code is not clear to everybody. And so, you know, either those peers will suggest like, Hey, could you add some comments here? Or it's like, oh, okay, I probably should add some comments here, because everyone's asking questions around this particular helper or something like that. So it's always really interesting to like the documentation can come before or can come after? You know,

</p>
<p><strong>Ryan Burgess</strong><br />
I'm curious, obviously, we've identified that there's ways to document what are some of the tools that your companies or even you use on personal projects, like what are some of the things that you use as tools to document

</p>
<p><strong>Stacy London</strong><br />
I start? Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
There's also like wiki spaces, I think Twitch we use, we have kind of like our own wiki portal. I don't know what's the underlying software that powers it. But we're like pretty big proponents of either GitHub pages, or this wiki for other teams who might might not be engineering to document things. So that and I guess my thoughts around that is, you want to be very careful not to have split brains of some things living in the code base markdown or some things living in the wiki. That has been a huge pain point that I've seen teams have. So yeah, just want to call that out.

</p>
<p><strong>Stacy London</strong><br />
I started to before preparing for this episode, I started writing down like all the tools that have helped me over the years for like documentation, and the list started getting really long and I was like, Well, man, there's like so many different ways you can document things. Early in my career, I was doing development on like Windows machines. So I use Visio quite a bit to like, do like systems diagrams, or architecture diagrams or like UML. Like sequence diagrams, class diagrams, all that kind of stuff. But like Now later on, you're not having used Windows machines for like lucid charts really nice. That's like a web based

</p>
<p><strong>Ryan Burgess</strong><br />
that is a good one. I like that one.

</p>
<p><strong>Augustus Yuan</strong><br />
We also use lucid system design

</p>
<p><strong>Stacy London</strong><br />
that's nice for having like a grid and being able to like draw relationships to like systems and things. Other things, I like to draw a lot on my iPad Pro. So I like paper and good notes, good notes as indexes, handwriting, so you can search your handwriting later on. So those are cool tools, those, those I find are like, sometimes I'm faster to draw a systems diagram than I am to try and make it look, I'll pixel perfect. And like those tools. So sometimes I start there, and then move it into those tools. And there's a whole bunch of like, collaboration tools, but I feel like that's not as much documentation and more about collab, then there's like code tools like Jas doc, or doc xe storybook even kind of falls into that, where it like, it extracts out from your code comments and your props and your type definitions, the documentation and can like publish it into an easily consumable static website or something that you can easily share. Those are really awesome. So I think, I guess this to your point, you were saying like having documentation in multiple places, I think like a second add on to that is to have documentation that doesn't have to be maintained in multiple places. So if it can come from the code, it always be up to date, because people are changing the code, but they're, you know, changing the definition of what that type is, or whatever. And it just automatically publishes to everyone. Like, that's the ideal sort of world where you're not, yeah, because documentation gets out of date. So quickly, if it's just like, only a human touches it if they care, I think

</p>
<p><strong>Mars Jullian</strong><br />
that's like a great point about things that are sort of self updating. What's really interesting, too, I think, is like the tools are good for different things like there's, you can document things on a micro level, and you can document things on a macro level. So things that are like self updating like that, or leverage JS docs, for example, like that stuff, I think is really good for if you're trying to document the API of a specific function, or if like a component is changing, and you need to update, you know, the documentation needs to update the new props that you have, or the new behavior or whatever. And then on a macro level, like things like wikis are really useful, because it's sort of describing the way systems work or the way you know, your team operates, or like processes and that kind of thing. So it's like, the larger scale things, I think, are really good for those things that you might need to manually update, but things that are documenting your components and your functions and like that stuff should really sort of be self maintaining, once you have those systems in place. Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
I was gonna say my, the biggest pain point that I have with documentation is, is the updating part, because so it's so easy for it to go out of date. Like, all it takes is you release a feature you documented so perfectly, and then some bug happens, you need a hot fix it, everyone scrambles to fix it. Everyone rejoices yay. And then nobody updates the documentation. And sometimes it's like crazy. Sometimes people don't notice for like, a really long time until maybe the next new hire comes and gets a feature on it. And then they say, Hey, I was reading this documentation. And where's this parameter? And they're like, Oh, we removed it. We actually didn't need it when we did this cleanup. And it's just, it's just it. It's just another thing to always make sure you follow up on. So I think that's, I love the both the points you mentioned, Stacey and Maurice about having things that can't that can keep things up to date, like in an automatic way. And also just having code that's like very human readable with comments, like, so it's self documenting.

</p>
<p><strong>Ryan Burgess</strong><br />
It just goes to waste sometimes, like writing documentation, not gonna lie, like it's it does sometimes feel like if it's out of date, it's kind of useless, right? It's almost sometimes more confusing than if you just had to go and like, dig into the code, because you're like, Oh, these are instructions that will tell me what to do. But they're wrong. And so now they're point you down the wrong path. And I feel like that has been, honestly, like my biggest struggle throughout the years of my career where it's almost like not even worth documenting. And I know that's not the answer, either. But that's where this automation falls into place where it's like, no human should have to be making sure that they're paying attention to is that is that the perfect documentation? It's like, No, it's It's allowing a machine to help you with that. And I think that that's really important to call that out.

</p>
<p><strong>Shirley Wu</strong><br />
I actually have a question that may or may not be converted to kind of the automation part, which is I remember that my very If at my very first job, we actually had a technical writer on our team, and like our main manager use, like made sure that we did. And like their sole purpose was to make sure that the documentation was up to date. And so I was wondering, because I noticed a lot that I think everybody here was talking about documentation. That's something that they themselves have to make sure it's like, on the developers responsibility to make sure it's up to date. So then I was wondering, like, how often have you like, had a technical writer on your team versus like, my second job, it was a startup. So then obviously, there was no technical writer. But I actually also feel like, there have been times where like, having a technical writer, even earlier on maybe actually, like, quite good even at a startup. And so I was wondering your opinions about that.

</p>
<p><strong>Ryan Burgess</strong><br />
I have had technical writers or I think even sometimes it fell into, like wireframing. And everything was really clearly documented. I noticed that happened more in my like, agency background, where I was working in consulting or agencies, mainly because you were showing that to clients to to have sign off and getting that buy in. I don't know that it was that helpful for me, like, I mean, it was in some ways, it was like clear that as an engineer, I could pull it up. And here's my instructions to build. But I feel like it was a slower process, it really truly was, it was getting this like playbook all to like the perfect outline of exactly what needed to be created. Because you were also presenting that to the client early to get sign off on in order to move into development. So that was really my experience with it. I don't know that it works that well on in some of the worlds that we're in right now, mainly because I can't see a person on my team, just being solely responsible for that. They're going to then go to Stacey, and they're going to go to Mars and Augustus and Shirley and be like, So explain to me what you created here. And then they have to interpret that and write that. And that handoff is like, oh, I can just imagine the screw ups that happened with human error there. But also, that's actually more work now that you're relying on someone else to explain it. That's my thoughts on it. Yeah, plus one,

</p>
<p><strong>Augustus Yuan</strong><br />
two, that I think the only case I've really seen that is. So Amazon has a lot of technical writers, because AWS itself is like a software as a service. And so they will they have technical writers that are responsible for writing all the docs that if you wanted to run something on AWS, then you would have the docs for it. But it's an interesting distinction, I think it's because it is kind of like this clot, the customer itself needs access to this technical documentation. Whereas I sometimes find when we think about documentation, one of the more most practical things for me as an engineer is like Runbooks, for on call, like something happens, some alarm gets triggered, what are the main mitigation steps that an on call engineer needs to do? Or sometimes context about a feature that, you know, customers don't really need to know about? It's like, oh, we banned this country from using something like I don't know, some some obscure thing. Actually,

</p>
<p><strong>Shirley Wu</strong><br />
that's really interesting, because you both just distinguished that there is a difference in external facing documentation versus internal facing documentation. And I would venture that I actually interface a lot with external facing documentation, because I work so much with like open source libraries. And if I actually, to your point, if I actually think back to my first job with the technical writer, I think he was also Yeah, definitely like, I think because we were on the Apps team, I think he was also writing documentation that were customer facing. So that's a really interesting point of so is it correct? My it's my understanding, correct that so far, a lot of what we've been talking about is more like internal facing of like communicating with our own teams and making sure that they're up to date with, like, what you're building?

</p>
<p><strong>Stacy London</strong><br />
Mm hmm. Yeah, definitely. At least the way that I've been talking about it, it has been Yeah,

</p>
<p><strong>Shirley Wu</strong><br />
super interesting. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think it it goes both ways, though. I think you're right. There might be a higher bar when it's external. Which should it be? Like, maybe we should be doing better internal teammates better? Yeah.

</p>
<p><strong>Mars Jullian</strong><br />
It's interesting, too, because like, if you think about the internal facing documentation, a lot of the times it can be really hard to resource. It's like, Wait, why is this important? You know, it's not you're not coding, you're not creating a new future, sort of what's the point? That the external facing documentation in the case of like working with clients, or even like AWS, sort of, there's like a real business need there. And it can drive adoption and like real business metrics. So that's really fascinating to call out. That's different.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I feel like so much of the documentation that we often rely on is just someone knows that near like, I'll go talk to that person. And that's like where it is. It's a shared knowledge that's kept up but it's not kept up to date in an actual Read me your documents. Oh, cheers, cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers.

</p>
<p><strong>Mars Jullian</strong><br />
I think it's interesting that you say that to Ryan, though, because that's almost another case for internal documentation is like kind of doing a brain dump, also, like allows those people to share that context and potentially like free up resources to work on new things, if you never write it down. There's like a whole subset of people that become the domain experts on one subject from now until they potentially leave the company and sort of like pigeonholing them into that role, unless you unless you write it down, and really like work to share the knowledge with more people.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, what happens when they leave the company, like all that knowledge just gets lost? Like, it's so difficult. And yeah, that's all the more reason to document. It's really funny, as we're talking about different tools, one that I still am a huge fan of, and we do a lot at Netflix is even just Google Docs is sometimes a great method to maybe not for as a you know, markdown for your actual code base. But I think to share an idea or approached like on a technical approach, you can put a diagram in there, you can, you know, just write about it and get input really easily. Like I think, going back to earlier, when Mars said, to get like share an idea or to get input, I think that has been one powerful method that we found useful, like with commenting, and just being able to get input like, Oh, that's a terrible idea because of XY and Z, or have you tried this, and I feel like that really has helped out a lot

</p>
<p><strong>Stacy London</strong><br />
yet, to that point I was thinking about, we were talking about, you know, like markdown or READMEs. Cheers like it's the ease in which you can update that documentation, the amount of friction that exists in order to update it will make a huge difference in whether it stays up to date. And I know a lot of developers were like, oh, put all the documentation about our code, like, say, architectural decisions or whatever, put it all in Markdown, put it on in the in the codebase. And then you have to do a pull request to update it. But is that even almost too much friction, and you don't get that collaborative stuff of like, you know, a Google Doc or say, like Confluence or some tool where you can share, edit a page really easily put a comment on a piece of text and have a thread of discussion around it. And there's history. I mean, Git has history too. But I guess just having the conversational nature of some of these other tools. Maybe that makes documentation stay more up to date, because it's just so much easier. You don't have to do the pull request, have a review, merge, wait for it to get published, blah, blah, blah. It's like, instantaneous.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you for saying that. Stacy. Yes, like friction is a huge thing. I've even seen it where documentation is in a separate repo. And so you're having to get access to that repo to clone the repo get, you know, make your changes. And then you're right, open a pull request. And like, that's, that's way too many steps. And like, someone who's maybe not as technical could have also been not wanting to do that could be updating your documentation or helping with that. And now you've just added so much friction that people are like, Yeah, I'm not going to do that. Even if they are technical. They're like, Yeah, I don't feel like having another repo and just dealing with all that and going through the PR process just to make a couple text changes. So I love that that's a valid point. We have covered maybe a few points here. But I thought it'd be interesting to go into what really makes good documentation. Because I've seen a lot of bad out there, but there's got to be some really good documentation. Oh, I

</p>
<p><strong>Mars Jullian</strong><br />
have two strong thoughts here. Um, one, I think, Well, okay, it depends on the type of thing that you're documenting. I think if you're documenting functions, components, API's, you know, how do I even just use this thing that someone else has written like code examples are very, very helpful with some sort of like description or annotation, and useful examples, like Stacey was talking about, like don't do FUBAR equals beause, you know, maybe use like, you know, create a story from the example like, this is a variable name that makes sense in this context. And like, you know, this function is sort of, you know, describing itself in a sense. So one is code examples. And then two is like, really consider for for things where you're writing about large systems or processes or design patterns are sort of the thoughts that went into any sort of decision making is, like, really consider who your audience is, and what are the questions that they're going to ask when they come to this document or read me cheers to cheers, cheers. and in what order? Are they going to ask them? If that makes sense? So like, as an example, on my team we had, we call it like a dev Portal. which basically was sort of just like a brain dump of various things like the ways components are worked like are created, like their architecture, design decisions, that kind of stuff. But it wasn't organized in a way that made any sense to people who would actually come to that portal. And so we reorganize it to sort of be like, if someone's coming to this dev portal, they probably want to go from like, high level to like, really deep level knowledge, right? If you're a beginner to this system, you're probably asking questions around like, what is this system? How do I get started? How do I use it? And then as you become more and more experienced with that system, you're asking questions around, okay, how do I edit it? How do I update it? How do I maintain it? And so sort of like our, our approach there, I guess it's like, goes back to Shirley's question about technical writers is like information theory, the way you communicate and deliver information to other people is really, really important. Because it's not just like, this is how this works, blah, blah, blah, function a function B, it's like, we want the documentation is meant to, like, introduce someone to the system in a way that gets them more and more familiar with it, and doesn't overwhelm them from the beginning.

</p>
<p><strong>Stacy London</strong><br />
Yes, yes. Yes, yes. So many.

</p>
<p><strong>Ryan Burgess</strong><br />
Yes. I mean, I love that there's almost like a UX experience, right? Like user experience is important to that. And that you need to be thoughtful about it. It's not just a brain dump of information, it has hierarchy, and like, it's clear and concise. And like, that is very important. I love that you said all that.

</p>
<p><strong>Mars Jullian</strong><br />
I think it really starts from like empathy, right? Like you, if someone writes that documentation as like a master of the system, it's kind of hard to take those steps back and be like, Okay, if I was completely new to this, like, Where would I even start, but that's what you really need to do is just like, put yourself in other people's shoes and say, if I didn't know how this worked, what would I want to know, first, and then potentially, what what I want to know after that, and so on, and so on. Maybe that's specific to like systems and, and like component systems, or like things that are technical, but I can imagine for, you know, design patterns and like writing for clients, like, there's potentially a slightly different way to think about it. But I think the key there is to just like, think about your audience and put yourself in their shoes. Yeah,

</p>
<p><strong>Stacy London</strong><br />
to almost think about it the way that like, when you were taught how to do, how to write, you know, like a thesis or write a paper, it was always like, who, what, when, where, why kind of questions. And it's the same kind of you can apply those same things to the documentation that you're writing, like, you're saying, Mars, you know, like, who's your audience? Why, why do you need to tell them this? You know, all of those questions kind of feed into that. And you mentioned, I think, organization, that's so huge. If you have this is one thing I found tough about like Google Docs is like, sometimes it's it's like a million docs in a million different folders that aren't related that have no information hierarchy to them. And it's like, I'm such a visual person that sees things in hierarchies and, and folder structures or tags, even that if it's not organized that way, I just then then you have to rely on search. So your search has to be really, really good to like, find that information and surface it. So yeah, those are the things where I found I think, like make for bad documentation that's just like, not organized. There's no themes. There's no categories, there's no way to find it easily.

</p>
<p><strong>Shirley Wu</strong><br />
I have a follow up tangential question. So from the sound of it, it really sounds like good documentation takes a lot of time and to Maurices like point beforehand, like that's not something that teams necessarily have buy in on or like, even like product might not have like, because I think Mars earlier you were saying like, you know, this is time that you have to spend outside of like shipping. And so my question is, how do you go about getting buy in like if, you know, like, let's say you have like other dev teammates that don't want to write documentation, or you have like, product managers that are like, you know, or like, any sort of PMS are like, Oh, we don't want to schedule time for this, because we're not shipping, like, how do you get buy in on teams like that?

</p>
<p><strong>Augustus Yuan</strong><br />
I have a strong opinion here. And the opinion is, it's an expectation, and you just include it in the software estimation. Like, it's not a negotiation, right? Like, there's no reason like, if there's something that you think I think this could use some documentation, it shouldn't be like something you have to negotiate with your pm on. That's like my strong opinion. Like, he's just you just do it, just do it, make it part it, add a story point or whatever, include it, but like, it should just kind of come with the work. You know, I think we believe in like engineerings, owning the due diligence of like maintaining the software that they write, and part of that is writing documentation.

</p>
<p><strong>Shirley Wu</strong><br />
Sorry, related. What if it's your teammate that doesn't want to do it? How would you go about convincing them one way

</p>
<p><strong>Stacy London</strong><br />
you can do this? Maybe as you can, if you agree as a team, that there are certain things you want, you consider are necessary for a feature or, you know, whatever you're working on to, quote be done. If you define it, then it's like, Hey, this is the checklist we're all doing. It's you're not special. Like we all are writing tests, we're writing unit tests where, you know, creating a story and storybook for it, we are making sure it's accessible, we're making sure it's responsive, we're making sure we write some docs, if it needs it, you know, that kind of thing. If it's all part of that, it's like, easier to say like, this is how our team does things. And then kind of, I don't know, if it's peer pressure or whatever. This is how we write do quality work, we want to do quality thing,

</p>
<p><strong>Mars Jullian</strong><br />
I think it's a really good point that it should be baked into the, the the expectations, because if you don't do that, then it can often fall on sort of the same people. Like over and over again. And it depends on how your company measures success, whether that's like, you know, support plans, or like actually shipping things. And since it does, like take time, it can take away from other things that potentially your company prioritizes. So it's, it's really important that that responsibility be shared equitably? Because otherwise, it can be like, unbalanced in terms of who is picking up that work.

</p>
<p><strong>Ryan Burgess</strong><br />
It's kind of that work, too, that's probably not going to get celebrated or notice. So if you're always the one doing it, I shouldn't I don't want to almost had stuck doing it. But I don't think that's fair. But if you literally are the one doing everyone's documentation, it's not like you're getting rewarded for that. It's not shipping, like the major feature, or whatever it is. It's important. But yeah, I think you all need to share that load and all care about that, because that's super important. I also echo what Augustus said surely to your question, I don't think you need to get buy in to write documentation and be like getting buy in to, like, clean up some of your code or something. I think it's just like one of those things that you just do. And yeah, like what I just said is like, just bake that into your estimate to it's important. It's it is delivering a feature, it's not, the end feature isn't being delivered without tests written, you know, or commenting or whatever. Like all those pieces come in to creating a good feature that lives and breathes in the code base. I like this

</p>
<p><strong>Shirley Wu</strong><br />
cultural shift, since I've been at a full time job five years ago.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, these are all these are all practical things were saying. But it doesn't mean that they're practice, right? Like, it's like, you can definitely be in companies or teams where this isn't followed. But I think it is absolutely something that should be followed. And there's ways in which you can follow that without getting like the permission, I do

</p>
<p><strong>Shirley Wu</strong><br />
wonder if there is a correlation with the size of company, because the reason why I was asking this question is because um, when I was at a startup, it was always like, ship fast, ship fast ship fast, right? And then the like, documentation was like secondary, and I don't think we had the foresight to also be like, I don't think there was a culture of being like documentation is, is like integral and necessary. I think we had the mindset of being like, just write the code and documentation is secondary. So I do I wonder if, to your point about it's good practice. That's not necessarily always practiced. I wonder if there is some sort of a correlation with? If Yeah, if there is correlation with company size, or it may be just company, team culture?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, my guess is probably more on team culture. I could be wrong, but I feel like that. It doesn't necessarily I don't know, to me, maybe others disagree, but I don't think it's necessarily the size that determines that but I could be wrong. Yeah, it

</p>
<p><strong>Stacy London</strong><br />
seems like maybe yeah, like company culture, no matter what size like if your company if your cultures that it only rewards people writing code as fast and furious as possible, and, you know, ship ship ship, like, if there's no reward at all, for any like, sort of things like maintainability tech debt reduction, supportability oper, operations, uptime? Like all these things, like, if none of that stuff is valued, yeah, I guess, no matter how big your company is, you're gonna you might be successful for a little bit, but then in the long term, it's gonna be hard.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, people will find out pretty fast, the pains of not having documentation. I think the two biggest times this will show up is one when you're hiring someone new, that poor engineer that has the new hire buddy is going to have to go through a lot of pain, walking through lots of non documented stuff, in which case that's probably going to be the point where they write some and and the second case, this is, is when on call happened. and you need to do some mitigation. And they don't know what lever to pull. Like, if you have feature flags, they don't know what script to like run, or how to get into some box or something. At least that at Twitch, like, when we do, like, when we have incidents, and we have course of errors, we talk about the mitigation steps that were taken, and we report how long it took to mitigate. And if it's a long time, it's kind of like, why did it take so long? It's like, oh, and usually it's gonna be like, oh, there was no documentation of how to do this. It's like, Well, is there documentation now? So to help with future,

</p>
<p><strong>Ryan Burgess</strong><br />
new hires, the best people is gonna

</p>
<p><strong>Shirley Wu</strong><br />
say, actually, I was gonna ask this question, which was, I think, how if you are, if your team is just starting out, like, how do you set up? Good? Like, how do you intentionally set up good documentation, the last job was the documentation was written by every new hire as they were trying to make sense of the code base. And I think also an interesting point is that, um, I think I've only ever been at companies where there is no on call, like, the software gets shipped out once a month. And so we did, we did have like some room to like, there was never an on call situation. And so maybe that was why we were also a little bit more lacks on the documentation. I'm not trying to be like, that's why we didn't do it. Like, obviously, we should. But I wonder if that's like why not every team values it as heavily. But yeah, the main question is, how would you go about setting up intentionally setting up good documentation for a new team?

</p>
<p><strong>Mars Jullian</strong><br />
That's a really hard question.

</p>
<p><strong>Ryan Burgess</strong><br />
It's kind of one of those like, it depends.

</p>
<p><strong>Stacy London</strong><br />
one thing that's nice is maybe like, if you start super simple, like you start with like designating this page is how to this page is support guide on how to troubleshoot something, maybe like, just that alone. If you could start bucketing things in two categories, like simple ones. Over time, maybe they get more your categories get more complex, and you can organize it better. But if you start like with something like that, it helps people find it faster.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, it's probably a good time for us to jump into pics. In each episode of the front end happier podcast, we'd like to share things that we found interesting want to share with all of you, let's go around this virtual table and share pics for today's episode. Maurice, you want to start it off?

</p>
<p><strong>Mars Jullian</strong><br />
Sure. I'm always bad pics. I always forget about the pics section. But I have one for today. Just one because like I said, I forgot. But there's a mailing list that I really like that is front end specific. And I think every day or every other day, they just send out like a bunch of links around like what's going on in the industry, whether it's like JavaScript specific or CSS specific and it's called front end focus. And usually they have like you know, one really interesting thing and the the title of the email but they also then have like a bunch of other stuff in inside of it. So it's it's a good way to have like new information sent to you if you are like me and are not constantly on Twitter as in I'm on Twitter like zero. So this is useful. I find this useful plus

</p>
<p><strong>Stacy London</strong><br />
one. It's good. It's a good one.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. All right, Stacy, what do you have right to music

</p>
<p><strong>Stacy London</strong><br />
pics, as per usual, the first one is a song called summoning by hum. This is a olts metal band. If you're if you've been listening to that kind of music for a long time, you might recognize them from like the late 90s. They haven't produced anything and many, many, many years. So this is pretty it was pretty phenomenal to see them release something. It's kind of like space metal and shoegaze mash together. This particular song was described as traverses into the depths of metal channeling certain aspects of stoner metal and going so far as to touch upon doom metal so that that's the first one. And then the second pick is a song called River by Octo ACTA, and this song was described as an acid drenched breakbeat workout that steadily builds pace until a choir of angels joins the mix and really sends things stratospheric. It's a great dancey electronic song that I like to listen to over and over recently.

</p>
<p><strong>Ryan Burgess</strong><br />
I love the description. Descriptions always

</p>
<p><strong>Mars Jullian</strong><br />
sound like so much fun.

</p>
<p><strong>Ryan Burgess</strong><br />
Amazing. I guess this what do you have? Yes, I

</p>
<p><strong>Augustus Yuan</strong><br />
have two picks. My first pick is a show on HBO, or HBO Max called warrior. They started advertising it a lot recently. So Such a good show. It's a it's a show about a guy named Assam. He comes from China. And this is during like, very back in the day when Chinese immigrants started moving in, and he joins a gang. There's a lot of gang wars. There's a lot of really good fighting choreography. But I think this I just feel the screenwriting is just super, super well done in this show. So I'm really hoping for season three spoiler, I guess they're not sure if they're gonna do it. So we're hoping I hope they will. But yeah, definitely check that out. And my second pick is this article that slack engineering posted related to I think we maybe we all remember, Slack went down on January 4, when we all came back. And this article talks about how they, how they handled it, it's like it's pretty interesting, right? They talk about how like, the end of the year, nobody's working and then they get this surge of like traffic and they have these caches that go cold over the winter break. So I think it's a pretty good article that talks about that like got

</p>
<p><strong>Ryan Burgess</strong><br />
cold because the cold weather

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, clever. Bugger you.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, surely woody I

</p>
<p><strong>Shirley Wu</strong><br />
love going back to back with Augustus. So the first one I have is on Netflix. And it's called bling empire. And my my cabin mates are currently watching it. I have to say it is just like many other reality TV. very trashy, very vapid. But what I love about it, is that the cast is real life Crazy Rich Asians based in LA. And I love that in this reality TV. Asians are rapper. Asians can be trashy. I feel like I feel like this moves Asian American representation forward by like decades, we're no longer just dirty or IT support we can be trashy and rich and also, a lot of them are hot, so I don't necessarily recommend watching too much of it. But I just wanted to bring it to people's attention more really look like she wanted to say something about

</p>
<p><strong>Mars Jullian</strong><br />
it's so good. I

</p>
<p><strong>Shirley Wu</strong><br />
I respectfully disagree about the actual content.

</p>
<p><strong>Mars Jullian</strong><br />
It's so good for trashy TV.

</p>
<p><strong>Shirley Wu</strong><br />
That's fair point. That's fair point. Great trash.

</p>
<p><strong>Mars Jullian</strong><br />
It's really good.

</p>
<p><strong>Shirley Wu</strong><br />
Yeah, that stuff that's fair. I don't watch that much trashy TV by had been told that this is quality trashy TV. So if you do enjoy trashy TV, apparently it's quite good quality. The second in along the same vein, is a YouTube channel called accented cinema that my husband and I recently found and and I love it because the the the channel is run by a Chinese Canadian person who went to film school. So he does a lot of visual essays on foreign cinema. And in particular, he breaks down a lot of like, Chinese film and I personally just have been really enjoying it because just just because as a Chinese American, I don't know much about what's been going on in like Chinese cinema. And I think that he does a really good job presenting it while also being really like I feel like he's very, very good at kind of presenting it and also acknowledging the kind of the political tensions between like China and America and the Chinese government. And I think I think it just like I think I think granted all of the Seino phobia that's happening in a lot of America. I think this is a really good view into like Chinese culture outside of Chinese politics. So those are my two picks.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Alright, I have two picks to share. Mine are both snack and food related. So while you were all binge watching and all these great shows are listening to music suggested one healthy snack which is these chips called quavers chips they are made from eggs or egg whites. I should be very clear. They're really good. They have I've tried like ordered mixture of flavors, they were really delicious and healthy, even keto friendly if you're into that so delicious and good to try them. And then my second pick is not as healthy Definitely not Oreo cookies they make Oreo ID which is you literally get to customize your Oreos, which it's really cool I got it as a gift over the holidays and I had like a little photo of my son and I on it it was the Oreo dipped in white chocolate with like colors it was really cool. So kind of a cool gift idea and they're delicious because you just get to customize what it what it is so you can snack to these things while you're enjoying the other pics. Thank you all for listening today's episode you can find us at front end happy hour.com You can really subscribe to us on whatever you like to listen to podcasts out there on. You can also follow us on Twitter at front end each each. Any last words read me read me

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers, love it.

</p>
`;
        return transcript;
    };