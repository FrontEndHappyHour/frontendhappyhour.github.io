module.exports = function() {
'use strict';
const transcript = `

<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. In this episode, we are going to be talking about all things QA s debt, SETI, we're going to cover a few things, because there's a lot of terms out there. And we are joined by prefuse Sydor Raman to help us with some of these terms and just give us a little more depth into this Preethi. Can you give us a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Preethi Sitaraman</strong><br />
Sure, thank you. Hi, I'm Preethi Sitaraman I work as an engineering manager at Netflix recently transitioned to the manager role. I was working as a test engineer prior to this. And my favorite happier beverage is Cosmo politics. I just love it. But unfortunately, I do not have it right now and just drinking some water this afternoon.

</p>
<p><strong>Ryan Burgess</strong><br />
I am drinking water along with you. I guess we can give introductions of panelists. Jem, you want to start off?

</p>
<p><strong>Jem Young</strong><br />
Yeah, I'm young engineering manager at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix, which is kind of cool. We're all managers at Netflix. And we've all worked together quite a bit too. So this this should be a fun episode really going deep on the Astete role so that that'll be fun. In each episode of the front end, happier podcasts, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is automation. Alright, so if we say the word automation, we will all take a drink. So let's jump in. I want to start right off the hop. Let's kind of clarify some of these terms. Because when we talk QA s that CETI there's all these terms thrown around that are people are testing code, I want to better understand like, how do we define each of those roles, because they are different, there's unique term like those terms refer to different pieces of testing, prefer, you're probably the best one to help define this, I'm going to throw that one to you,

</p>
<p><strong>Preethi Sitaraman</strong><br />
it's fine. That is always a confusion between people on what to say and what to call or what to have a title when you are a test engineer. So I will let me start with city because city is uniquely set. And city is software engineer for tools and infrastructure. So that itself defines what they are entitled to do, they usually work on creating tools and test infrastructures. For other engineers. When I say other engineers, it could be a dev engineer or a test engineer. But at the same time, these engineers are not very close to the product, they are mostly working on the infrastructure and architecture to make sure that the testing architectures are good and stable, and making sure that the tools that we create, to present all the failures and bugs are all in shape, to make the lives of other test engineers and Dev engineers easy to validate debug and make sure that the product they are pushing to production is in a very good stable state. So I would say safety is a very important role to make sure that these things are aligned well. While at the same time, there is also some test engineers who work on this, they will when you look at it, it will be like juggling too much between too many things. So usually, it's always better to have a city role separated from the role of a test engineer. And that would actually give more leverage for city to look at things that are missing the gaps that are that needs to be filled to make sure that the lives of devs and test engineers is better and easy. Now coming to Esther, this is fairly new terminology being used in the software industry. But I would say most of the test engineers are preferring this title. The reason is, is that a software development engineer in test, so it's very, very close to what a dev engineer is, except that the engineers are working in a test infrastructure. They actually closely work with product, make sure they have they do manual and automation testing. Take a drink. Cheers, cheers. So they were to develop better tests and also sometimes try to improve test infrastructure. They work very closely with devs to make sure the devs understand what kind of tests or use cases need to be in the testing infrastructure. how better to make flaky tests manageable. So it's overall a complete set of complete testing process is owned by steps. So I would say when you are talking to a test engineer, they could either be on a safety role or as Det role. But there is also another title that is QA. In the software industry. It's mostly interchangeable estate and QA. But I've seen that test engineers prefer themselves to be called an estate, because a QA is a quality assurance engineer, which means that they're only manually evaluating the product to make sure that everything looks good before it's pushed to production. So I've seen that most of the test engineers do not want themselves to be called a QA, because they are very proud that they are able to do automation, they love working on coding, and they are very closely working just like a developer, they are putting in a lot of efforts there. They are context switching, they're learning new skill set new technologies to make sure that our testing infrastructure is great. They constantly evolving by improving their skill set. So they would know they would not want themselves to be called just a QA, but they would prefer themselves to be called a test engineer or an asset. So that is that is clarify all the

</p>
<p><strong>Ryan Burgess</strong><br />
Oh my god. So Well, like I was like, I mean, I knew all these things, but I think you'd like you just clarified it so well for everyone that I like. Yep, that much more to add. And I love that. Even just hearing that people's titles like they're, they care more about like, because it better describes them between that asset and QA role, which makes a ton of sense to me, it's like as an S, that is not to say that you're likely not going to do some quote unquote, manual work, but it's like, you're likely, that's not the bulk of the work. It's like, yeah, if I have to manually test something, I'm going to do it because I'm testing to make sure things work properly. But if I can automate it, then that scales better. And that's like more in which my brain is kind of thinking about it. Now that that makes a ton of sense. I like that. So I think like for ease, we will use the term asset from probably most of the episode is what we're talking about is like more that like software engineer dedicated in test, which makes so much sense to me. Like I know steady. Yeah, a little more on the tooling and infrastructure side. So yes, I can

</p>
<p><strong>Preethi Sitaraman</strong><br />
always say ESTEC can do manual testing, but and so is part of QA role, but a QA is not part of an asset. So

</p>
<p><strong>Ryan Burgess</strong><br />
that makes sense. And it does the term like blackbox testing still get used like that one always I don't really like it because it didn't really define that well. But I'm curious if that gets still interchangeably, because that was more to the manual testing, correct?

</p>
<p><strong>Preethi Sitaraman</strong><br />
Yes. So there are different terminologies even in that, like black box, white box and gray box testing. Those are not being used right now. But I've seen many companies use it, at least in job descriptions that they should be able to do gray box or white box Black box testing, at least in Netflix, we have not been using those terminologies.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I haven't heard it in many years. Like I feel like it was and that sounds curious. Like maybe it's just like, fizzled out of the industry, or it's like yeah, like definitely haven't heard it Netflix or even previous companies I've been at it's like, I feel like it's a really old term.

</p>
<p><strong>Preethi Sitaraman</strong><br />
They're not misusing it. I would not say it's gone forever. But at least recently, I've not come encountered any of those term terminologies in my job as

</p>
<p><strong>Jem Young</strong><br />
a mixer. And they're useful for describing how like the theory of testing, which like it's its own testing its own field. And there are useful terms to understand that, like, you can't just be like, Oh, I'm going to write a test. That means nothing as free theory, right? Like we've all had discussions on a team level about, what are we testing? How are we doing it? And I don't think most people put that much thought into it. They're like, Oh, yeah, I only have a finite number of hours, I should understand what type of tests are needed at this particular level. So yeah, I think the terms are still useful. But I think software engineers don't think about testing on even that level, which is something we can get into a little

</p>
<p><strong>Ryan Burgess</strong><br />
bit, I think they should like we should be doing better. Like because it's not, it's not all on the like, it's not all on the settee, the QA or the aesthet like to just pick up all the slack. It's like, when you are writing code as the developer, you should absolutely be thinking about that, or, or collaborating with, like how the testing is actually going to happen. So which kind of actually leads into a really good segue of like, when when is the right time? If you if I'm a developer, and I'm working alongside a aesthet, when's the right time to pull them into a project? Is it is it right at the end? Or is it like start middle like, is there a an appropriate time to start collaborating?

</p>
<p><strong>Preethi Sitaraman</strong><br />
If you ask me a destination should always be involved from the start of the project like kickoff. Because an engineer needs to understand the requirements well in order to even plan the execution. So having the test engineer during kickoff not only benefits the engineer, but also the product design, and you know, and other engineers on the team who are part of the kickoff, because at least I feel like a test engineer has this immense wealth of knowledge about the product. So they can contribute on or like, provide ideas and suggestions on how to shape the product better. And if these ideas and solutions are provided in initial phase, it's easier for the design and product to pivot or to make adjustments to the initial requirements, rather than waiting till the end. And then involving test engineers, and then getting those suggestions and ideas. I can actually provide examples on how the test engineer can have ideas and solutions on the product. Like if there is a flow, what if a flow is different on not on a given platform versus the platform that was presented? So these kinds of things, a designer might not be able to immediately know, because they might not go and look in each and every platform, the product is on? Like not all pages might be there on each each platform. And if we have a certain new feature that's going through a particular page, then what about the platform that doesn't even have that page? Second thing is if there is copy involved? What about localization? Where there are some languages that are like, really long? Do we stick to that copy in English, because it is smaller? What happens if it overflows, so something to think about that. And there are certain platforms where we already have some kind of known issues? Like if I gave examples on iOS, if we are not a if you're not allowed to use certain sites name of some sites, and that's how we want to promote some feature on other platforms. And if it is also going to be ported to iOS. What do we do there? How do we promote the feature without actually mentioning those site names? So these kind of questions, we can definitely rely on the doubt. But if a test engineer is involved, I think they will be able to think more and also provide solutions. Because they've been working on these kinds of products. And they've seen like what changes they've made, or like, what are the other things they have introduced, just because the platform was not very user very friendly for that feature. So not only picking out issues, but I feel like destiny has come up with solutions and options for the design and product to think about how to make changes to the product. So definitely try and involve test engineers as early as possible during kickoff, or even brainstorming for a product. And that would help us minimize the time delay in making changes. And we can start the product sooner than later.

</p>
<p><strong>Ryan Burgess</strong><br />
I couldn't agree more. I think like I've seen so many failures, where test engineers are brought in at the last like nearing the end, when like so many times it's it's probably cost us so much because of that factor. Like we've missed things or not thought them through. I think the same goes for like we often think like design and product, like when we're working in like product that you're building, a lot of it is design and product PMS are working to like think through a feature. And I think engineering is is sometimes late to the game. But for some reason, like no matter what, at the end of the day, it's always test engineers are the final final piece of it. And so I think bringing everyone who needs to be involved across that lifecycle when you bring them up sooner rather than later. They're thinking through things that not everyone else's. And I think that that I mean, I've worked with you for years Preethi I've seen like so many times where like, wow, I'm glad she brought that up, like I never even thought of that. Or it's all these like little edge cases that you're very intimate with the product and you understand it. And so you're catching things that others wouldn't so I couldn't agree more. I think it's it's the right time as soon as possible. I think

</p>
<p><strong>Jem Young</strong><br />
a lot of engineers and assets in general don't they're not the most liked role on a team like history historically in software engineering, because it's usually the test engineer who saying you can't do that or no, that's not the right way to build something and the like, which is, I guess next Give or a lot of a lot of software engineers view as as a negative, like someone telling me what to do. But it's like, no, they, they are helping you from shooting yourself in the foot down the road. So like, listen to them. But yeah, in my experience, just they have not gotten enough respect in the industry for being experts in what they do. Because no one thinks about the actual user experience, especially user software engineers, we think about how cool can we build it? What new technology? Can we use all this cool stuff that you can brag about? But like, once it's shipped, people are like, whatever.

</p>
<p><strong>Ryan Burgess</strong><br />
But it's so much more important, right? Like when it shipped is like that it actually works.

</p>
<p><strong>Jem Young</strong><br />
Yes. That's why it makes no sense. But it's like what are you building it for, for your own? For your own self for your for fun that you're building for users? Why not listen to a person who's an expert on how users are actually going to use it?

</p>
<p><strong>Ryan Burgess</strong><br />
Or the fact that we ship code like perfect right? Jam, like always, like developers are always no bugs?

</p>
<p><strong>Jem Young</strong><br />
I have never written a bug in my life.

</p>
<p><strong>Preethi Sitaraman</strong><br />
Ever. Not that Jem.

</p>
<p><strong>Ryan Burgess</strong><br />
That's why he's moved to management. Now. He's like, I'm done.

</p>
<p><strong>Preethi Sitaraman</strong><br />
Like, there's no, no introduce anymore. But the thing that you said is so true, because I remember for run after project, I was I joined in the third weekly meeting, and I was not not part of the first two. So when I joined in the third, and I was looking at the designs, I come, like I change 70% of it. And the designer was like, Where were you in the last two weeks? I was like, Okay, I was not involved, because I was not, you know, I was not part of the project. I think I moved to that project after a couple of weeks, because I was working on a previous project. But that's exactly. And sometimes even I feel guilty, like I've come in a little late, and I'm changing so many things. But I have to do it. If I if I stop myself, then it's not going to be helpful for the product. So yeah, sometimes we have to do that. And we bite the guy, and then we do that. So yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you know, another thing that, you know, we've talked a little bit about Netflix in general, one thing that I found very unique, when I joined Netflix was estimates are embedded within the team, I do not think I've ever experienced that at any other company that I've worked at. Usually it is like there is a test, QA, whatever, we want to call it, a team that's dedicated to that. And there might be multiple teams that are dedicated that support, like different platforms, whatever it is, but I became a big fan of having the embedded asset, I'd love to kind of hear both of your thoughts on it too. Like, I'm just gonna say I'm a fan of it. But there's clearly obviously pros and cons to it. And I'd love to kind of hear your thoughts as well,

</p>
<p><strong>Preethi Sitaraman</strong><br />
I have looked on both the ways where there was a separate test arc, and instead of separate Dev, or then we had test engineering manager and Dev, engineering manager. And coming to Netflix, this was also a culture different for me, because I was working so closely with Dev engineers, and initially, it was very tough for me to get into that model. But now after working for so many years, I can say that this is the model that works, at least for me, like embedding the assets into the team. The reason I say that is it's very, very important for a dev and test engineer to have a close relationship and to think of the product together. So they have the knowledge of what is the feature and how they are going to work together testing it. They work as a team and are part of a single arc is often a better communication. pensioners are actually involved early in development cycle. They work side by side with developers. And then they learn quickly, like what are the challenges? And, you know, try and solve what are the blockers, what are the issues, there could be a lot of challenges not only in their team, but also working with the back end folks. So all these things help. They also work together and talk about their schedules, how they can align it together if there is if a test engineer is working on different product, how to make sure and and talk to the developers to you know, provide some kind of test cases so that they can start testing early and then the testing they can join. So all these actually finally brings us to you know, provide quality product and that's what I have seen, but at the same time, there are some cons as well. If you want to have like organization standards and ensure consistency in process, or like share tools and best practices among test engineers, it's very difficult to achieve that, because every test engineer is very focused on a product testing and like working closely with the developers. And they usually try and align things like what works for both of them together, like whatever devs are involved in testing is involved, whatever works for them. And whatever works for that product or that feature at particular time. That's what they aligned to worth instead of following a process or like making sure that, hey, let's not do this, let's start with proper infrastructure. You know, it's very rare to see that there are people who do that, but the preference is to get the product out and get a quality product rather than creating a process and following it. So if you have like a test org, we can always have that kind of standard set and like process set to create that, you know, autonomy for the quality efforts. So that's the thing I have seen that, and, you know, sharing tools as well like, sharing features as well, a lot of times I keep seeing people adding those features that are already existing. And when I'm a part of the review process, if I have already created those, I tell them, but if I'm not, then I really don't know how many people are redoing things and recreating the ones that we already have. So these are the cons, I see. I mean, any model regardless, if there is a strong communication and collaboration, then it should definitely work. So I would not say like one is better or the other is worse. If but if you ask my preference, embedding the test engineers in the team work better for me, because I've worked on both the models before.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I like what you said, though, with communication and working in strong collaboration. You can you can solve it like no matter what. But I think it's like what are you prioritizing in the model of the embedded it for me that I consider is you want strong relationship between the developer and the test engineer, like that's what you're optimizing for, versus like a full on test team or org, you're thinking more about what you said is like having more of the tooling and more of the like, even scalability in your testing that you're thinking about more strategically as a team, it's not to say that 10 teams that have test engineers embedded could be working together to think strategically about that. But that takes a little more work to make sure that you're paying attention to that and doing that. So I think it is possible, but I think it's just like what are you trying to optimize for? And one con I've kind of felt that I'm going to share is like, not with the embedded model, but with the like, separate team is i i felt like that that always to me, ended up feeling more like you were throwing it over the wall. Yeah, it's like it was more of the us versus them mentality that kind of gets built up. I like you know, code something and then that pesky s that caught my bug. And like as Tommy, I need to fix this, I got a JIRA ticket now for this, like that A, versus when it was like side by side, it feels more like you're creating it together. It just, it just already changes that dynamic, which I felt is good. Another unique one, I don't think it's a pro or con, but also coming into Netflix as a manager. I had never hired for a stat that was a new thing like so, you know, I came from being more of a developer, I obviously worked a ton with test engineers over the years. But that was unique to so that maybe even an S that wants to report into a manager has more depth in that space. And that could that could be a con. I guess that may be a con. Yeah,

</p>
<p><strong>Preethi Sitaraman</strong><br />
I mean, now I'm trying to hire for an asset. And I feel like I the other PR managers are depending on me a lot to tell them, even though they have some openings, they are depending on me to tell them like what are the requirements, what are the gaps, and I am looking at those gaps and evaluating them and making sure that we do not have that in our future hires. So definitely helps in doing it. Like, you know, understanding because I have done it personally and I know what the issues are and we don't want those to be repeated when we are hiring for new candidates or new team members. So that definitely was a con but you know, as you start hiring, I think we will figure it out. It's not. It's not like Hey, I completely don't understand how I need to hire and I really don't know what kind of an asset I need. So that's that's, that could be a con. But that can always be fixed. But I totally agree to the fact that, you know, if there are separate orgs, then even when a Dev is finished with their feature, they, I've seen them telling the product like I'm done. Now it's on the test engineering team. And I've always seen that this is a blame game, sometimes where they say, like, we didn't delay the product, we showed all the bugs, and they have not fixed it. And they are like dating come up with bugs on time. So that's why we are not delaying the product. So there is no blame game that goes in as well. And that's not a healthy relationship for the product as a whole.

</p>
<p><strong>Jem Young</strong><br />
The blame game is real. I think that's why the the embedded model is superior. Because you form that relationships, and increasingly, like, more and more, so one of my learnings as being a new engineering manager is it's all about relationships, software engineering is all about relationships, it doesn't that doesn't make any sense to a lot of people, especially when you're younger, and you're like, No, it's all about how well you can code and all these things. But it's like, sure, that's a given that's, that's the baseline for everybody, everybody you're working with encode their own specialties. It's about relationships and the viewpoints. For instance, I'm on a platform team. So I see the world as a platform, and I see like patterns emerging in architecture. And I look at that really broadly. Versus test engineer sees things. It's like, is this going to scale properly? Is this testable? Is this accessible? Or is the software engineers like, well, how can I build this faster? And how can I add features and all that, and we all have our viewpoints and our specialties that we're better at, but it's about these relationships and building trust between each other? So yeah, at the end, the embedded model is superior, because like, you build that trust. And it's like, this isn't some random person who's just like trying to thank my day, they, they want the product to ship as much as you do. They just want it to be successful when it lands. And they care probably more than you do that. It's successful Newlands. And it's like having that trust. That's really important.

</p>
<p><strong>Preethi Sitaraman</strong><br />
That's true. At least in Netflix, I've seen that developers lean on test engineers a lot. They trust them a lot. And when test engineer says this thing would not work, they actually would not just disagree, but they talk to each other and say, let's make sure that this works. So what can we do? So there is a lot of support from dev engineers for testing years, and vice versa. So I always have always seen a healthy relationship.

</p>
<p><strong>Jem Young</strong><br />
So you actually just brought up in my mind, what's a con of ESET? Which is, I've seen developers been like, yeah, I don't have to worry about testing, because there's an ESET, who specializes in this. So they'll catch all my bugs, and they don't put any effort into it, which is not how it works at all. Yes. But that's more and more what I've seen happen, which is a little unhealthy that software engineers aren't thinking about testing more. But yeah, what's your what's your take on that? And how do you prevent that? How do you just prevent engineers be like, Ah, now, so it'll catch it. So when I catch my bugs, I'm not worried about it.

</p>
<p><strong>Preethi Sitaraman</strong><br />
So we, at least at Netflix, have tried not to put too many test engineers on every project. So for developers to understand they are on their own, at least for small to medium level projects. And even for a lot bigger projects. We try to create test plan, use cases at the beginning of the project, and share it with the devs review with them to make sure that they understand what are the test cases that they need to look at before it even comes to the test engineer. So some of these things have worked. Recently, we have also made sure that the developers are triaging failures and providing the push go, no go. So they understand what goes into debugging those failures and trying to understand how those tests work. And how maintainable or flaky those tests are, so they can actually pitch in and change those tests if they are not maintainable. So some of these efforts have actually proven to be successful. And right now, the devil dev engineers also understand what it takes to be a test engineer and it's not just throwing stuff on engineers and assuming that they will be the ones catching all the bugs. There is still room for improvement. I will not say we are 100% successful but at least there is a star

</p>
<p><strong>Ryan Burgess</strong><br />
I like that that just makes for like a stronger collaboration where it is less that divide is there's no wall it's like literally like this is a shared responsibility because at the end of the day, testing Building whatever is is coming together to ship a final product to your customers. And then that's the the end state. And if it broken, it's not built like it's not built well, it's like all these things. And it's everyone's responsibility to put something out there that's like, well built and maintained scalable. It's like so I like that shared mentality where it's like, how do we collaborate together and share and understand like, even like you said, Preethi is like coming up with those test plans up front and talking through them with each other, to figure out who takes what, who's responsible for what, maybe there's overlap, or both of us are going to be looking at this, I'll take this, this that, I love that I think that makes for like a stronger relationship between two. I know, one thing that I wanted to touch on too, is probably gonna bring up our keyword a bit too, which is fine is a lot of it comes into testing is, you know, we talked about scale, and a lot of scale is going to be how do I automate this, cheers? What tools go into that.

</p>
<p><strong>Preethi Sitaraman</strong><br />
So when you talk about tools, I as an asset, I do not actually use anything that like a tool that makes me test things. When we talk about scalability. When we are and we are working on different platforms, there are a lot of dependencies on back end systems like you know, creating some endpoints, I have seen that, especially with web automation, we try start working on web automation, and make sure that those endpoints are embedded in web automation alone. And then comes the other platforms like Android iOS TV. So the test engineer working on those have to create their own tools again, or like, try to make sure that these endpoints have all the security access that's needed. And so that actually felt feels like too much time consuming. Because the ultimately the functionality we are working on is the same. And we are trying to access the same endpoint in the backend system. So it's always good to create a tooling structure that is like a single point, you know, used for that team instead of contained to a separate platform, talk about or think about it as a product as a whole and not platform specific. So right now, we are trying to create something like that, like, if we are working on an acquisition UI product, then maybe create like an acquisition UI testing or testing tool where we are talking to all those endpoints in a common a point. And then are all our platforms, go talk to that common endpoint instead of going and individually talking to the backend system separately. So any any security access or any issue that we need to deal with to access those endpoints will be taken care of by a single automation acquisition tool, instead of each platforms dealing with separately. So always thinking about those things, helps us with scalability. Otherwise, I've seen that each test engineer is going and talking to the backend engineers separately, and trying to implement things on their own way. And if it breaks in one platform, it is sure to break break on others. But people don't have time to fix the other. So only one platform is fixed. The others are marked as known because they know that it's broken. And it is so much of confusion. So always think of it as a product rather than a platform specific. And that's how we scale our test infrastructure.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that that makes so much sense. And I know even just like where I've seen things fail is like even when one test engineer like writes a method to do like, create an account, let's say, and then like five others have done the same thing. But there's, there's like some nuance that's just a little bit different. And so even your like tests, like one test isn't passing, but the other is, and it's really comes down to like how the tests was written, like in the code that there's just this discrepancy, which then you're kind of getting these flaky tests that you don't know, like, should I trust this? Is this correct? It's like, is it actually something wrong? So that makes a ton of sense to me is like just common patterns and being having the single endpoint or single tool that you're all working off of for, for not just one platform for multiple platforms as possible.

</p>
<p><strong>Preethi Sitaraman</strong><br />
Don't depend on back end systems and try to mark UIs or like, you know,

</p>
<p><strong>Ryan Burgess</strong><br />
so why not create the why not? Because if

</p>
<p><strong>Preethi Sitaraman</strong><br />
backend system is breaking in a test environment, that's not going to block the UI to move forward to go into release and production, but because back end systems or if the tests are failing, the test engineer or the dev engineer, triaging those failures will not have enough confidence to move forward, because they have to run every test locally to make sure that, hey, is this the backend failure, if the back end is working, good UI has had worked. So that is like a manual decision they're taking. Instead, instead of relying on the back end systems, if we don't and separate those two, the UI and the backend or the API, at least the UI life will make it easier because we do know for sure you I will work, it's just the backend that is failing. And that is not going to block us from going to production. And we are not delaying our pushes. So and also I've seen it back and mostly flaky, for some reason, because they depend on lot of services that could be down or that could be slow, you won't have enough instances like production, especially in test environment, to scale things up. And if some product or some feature needs that kind of scaling, it will be very local to that feature. And, and you know, things can change, and it can break anytime. So it's always good to not depend too much on backend systems and think of UI as a separate entity and move forward.

</p>
<p><strong>Jem Young</strong><br />
I like what you said about standardization, essentially. So there's not 50 Different people talking to the same person being like, Hey, we should do this, we should do this, we should do this. In my experience. In my years, there's no way to have a healthy, a healthy conversation and a healthy testing environments. Without standardization, like you just, there's no other way around it, you can't have 50 different ways to write a test, you can't have 300 different types of tests. There's just you, which is which is what keeps people away from doing it. Because like you have to coordinate and you have to pay the coordination tax and how to write tests and how to structure them and how they're going to run. But a lot of people don't want to do that. They just want to like, well, I wrote a unit tests, and I wrote it in our spec. Because that's what I know. I'm like, well, we don't run, we don't want to Ruby on our system won't make it work. And then like Do you have another system maintain and the the drumbeat that I feel you can tell when your organization is healthy is how often can you deploy with confidence? That's a good point with confidence. But confidence. Yeah, when you can deploy anytime good to flag it hit the button. Yeah. All right now, if you were deployed right now, how confident do you feel that those tests that those changes are going to work, then there's not gonna be any bugs in them? If you're like, a little shaky, then that's a sign like you don't have enough tests. And that's what test gives you they give you confidence that you didn't break anything, and nothing is broken along the way. That's the way I measure everything is how often can we deploy like that? Yeah. And confidently, and constantly what Yes, yes.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, that's probably a good time to hop into pics, and each episode, the front end happier podcast, we like to share things that we've found interesting want to share with all of you. So let's jump in jam. What picks you up for us this episode,

</p>
<p><strong>Jem Young</strong><br />
I've got two picks. One is, this was shared to me by one of my friends, but it's 100 tips for a better life. And you all know me, I'm pretty critical, some say cynical, but I prefer to term critical of life and generic vague advice. You know, like our parents are good for like, don't spend it all in one place. And like, you know, generic life advice like this. But these are 100 tips for a better life, which I genuinely find useful. In fact, in these 100 tips, I think number 27 is the one I'm trying to live to this year. And number 27 is about success. And it says discipline is superior to motivation. The former can be trained, the ladder is fleeting, you won't be able to accomplish great things if you're only relying on motivation, which I know that's pretty vague, but it's very true. I look at myself and I rely on a lot of motivation, like when the mood strikes me is when I get stuff done. And I do it. Well, it's worked pretty well for me. But if I were disciplined, that's the only way to accomplish things. And that's what I've relied on a lot during COVID Where we're stuck at home. It's really easy to get distracted by things. And the only way I'm been able to accomplish anything is just I sit down. I'm like, I'm gonna spend an hour doing this, and I do it. And that's it. That's the only way I've get it done. Because if I relied on motivation, it'll never happen. But there's so much good advice in here. I every time we do these, I'm like, yeah, yeah, this is good. Wait, I'll just pick a random one. I like this one. compliment people more. Many people think have trouble thinking of themselves as smart, pretty or kind unless told by someone else. You can help them out. And that's like such an easy one to and I do try to do that. It's like Hey, nice. job in that meeting, nice job in the presentation. Hey, I really liked the way you wrote this out. It takes no effort on our part, but you can change so much in other people. Anyways, I won't go on about this blog, I really encourage you all to read it just read like one or two. And if they're not good, they're not good. That's fine. But I guarantee you'll find some wisdom in here somewhere. My second pick is it's it's the part of the show called a valley silicon. And that's where I picked things that are, well, I don't know why they exist. They're so ludicrously expensive. And they only exist because we here in Silicon Valley get paid too much money, and we're just perpetuating this wild consumer cycle. So my pick today is, let me ask you all as I like to do, how much would you pay for a facemask? You know, those things that we all were probably familiar from laying around the house? How much would you pay for, we'll call it a premium facemask.

</p>
<p><strong>Ryan Burgess</strong><br />
Like a premium one, like 20 $30

</p>
<p><strong>Preethi Sitaraman</strong><br />
I have paid more for a nice freebie. I actually, I mean, don't judge me, but I actually matched my Divali outfit with a mask. I wanted to.

</p>
<p><strong>Ryan Burgess</strong><br />
I respect that though. Like, there's a good reason for,

</p>
<p><strong>Preethi Sitaraman</strong><br />
hey, we're not able to show off anything. At 200 bucks.

</p>
<p><strong>Jem Young</strong><br />
Okay. So, yeah, that's a lot. But uh, you know, fashion is what fashion is. So this man, this facemask is called the zooper mask. It should be super, but it's spelled an X instead. And it retails for the low price of $300. Oh, and for $300 you get a HEPA filtered air mask. It has USB charging. I think it has audio two built in, but you know, I don't even know, I didn't

</p>
<p><strong>Preethi Sitaraman</strong><br />
need a USB charger. Oh, no.

</p>
<p><strong>Ryan Burgess</strong><br />
Because it's got a HEPA filter. I think Yeah.

</p>
<p><strong>Jem Young</strong><br />
It looks cooler than a normal mask. I'll give him that. But it's $300. I, I don't know I questioned why you'd spend that much on a mask. As we know there's a limit to the efficacy of wearing a mask in general. Like a mask is a mask generally speaking. But hey, you know what this exists? And if you want to be fashionable, you want to have a super mask. It's $300 and that is why it is today's Valley silken pick.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know if I agree that I mean, it looks kind of cool, but it looks like too much. Like I feel like I would not feel comfortable wearing it. It's like it looks like there's a lot going on there. Yeah, I don't know.

</p>
<p><strong>Preethi Sitaraman</strong><br />
You are not good. You should not be reusing I would never spend

</p>
<p><strong>Ryan Burgess</strong><br />
well, this one Yeah, this one would be you'd reuse like there's definitely that and I Oh, there is headphones that connect to this thing. Okay, so I need I need headphones on my mask.

</p>
<p><strong>Jem Young</strong><br />
This wouldn't work for me because I have a beard and I think any men with facial hair this mask wouldn't work at all. So that's something Yeah, that's why

</p>
<p><strong>Ryan Burgess</strong><br />
it has a built in mic to just I don't know maybe cuz now you can take phone calls on it. Headphone mic. Great. Like, I don't know, I'm just just pointed out

</p>
<p><strong>Preethi Sitaraman</strong><br />
was people have tough people are really having a tough time understanding and I've seen usually people ask like twice like what do you say or like what did you mean? So maybe these these things will be

</p>
<p><strong>Ryan Burgess</strong><br />
alright, you're saying is it nice to have the mic and speakers? There's not headphones?

</p>
<p><strong>Preethi Sitaraman</strong><br />
Yes. Especially when you're talking even you're indoors and you don't want to take out your mask and you're talking and it's too noisy around then maybe it will come handy who knows right

</p>
<p><strong>Ryan Burgess</strong><br />
now you're thinking I may be selling this product tomorrow

</p>
<p><strong>Preethi Sitaraman</strong><br />
already regret buying those fancy masks because I don't read them the second time because I have to wash them and I don't want to wash them because someone somehow blinks so already wasted enough of my money on these fancy mas I'm not going anywhere

</p>
<p><strong>Ryan Burgess</strong><br />
well I mean preview thank you for sharing that you you've purchased these expenses mass

</p>
<p><strong>Jem Young</strong><br />
that's awesome. No judgment here we

</p>
<p><strong>Ryan Burgess</strong><br />
only judge judges on

</p>
<p><strong>Jem Young</strong><br />
agenda.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, pretty easy. What kind of picks you up to share?

</p>
<p><strong>Preethi Sitaraman</strong><br />
I actually don't because I right now all my research is going on what kind of baby items I need and what kind of security I need to look at like what is safe So most of my reading is going in there.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, we found any good products. We have a lot of parents out there that like, and there's always better ones like I have like going through a second child. I'm like, Oh, wow, that's way better than the first time, you know. So there's upgrading and things like that that you can do.

</p>
<p><strong>Preethi Sitaraman</strong><br />
I have been in a shock, actually, Ryan, the amount of things that have changed from when I had my baby before, it's like, I have no clue like these things actually exist and are even needed for a baby.

</p>
<p><strong>Ryan Burgess</strong><br />
For sure. That's the thing is like, do you need it just probably not. But you're like, that seems legit.

</p>
<p><strong>Preethi Sitaraman</strong><br />
Not even legit, it looks so fancy. I really want them talking for the baby. It's more like a Job Info myself. I really like the look of it. And I really like the function of it. Like, I was looking at this raw rocker swinger chair that has like, five different motions, and I feel like they can they should make one for the moms as well.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, it's like moms sleeping.

</p>
<p><strong>Preethi Sitaraman</strong><br />
Right? Like, why did they not think about mom and then making it for the wavy? Moms, new moms, especially, like you, especially because

</p>
<p><strong>Ryan Burgess</strong><br />
you have to learn how to sleep like you. You're like, you have these moments where the baby sleeps, and you're exhausted. So you're like, I gotta sleep right now, too. And so yeah, I love this idea. Let's just create

</p>
<p><strong>Preethi Sitaraman</strong><br />
it in the next seat and like press that button that works for both of them. So yeah, I'm still waiting to get that I'm like this close to getting it. We'll see.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Well, we'll be curious maybe to hear like what your recommendations are after you've purchased some of these maybe that's what we have to revisit after the fact. That's great. Well, I have I have two picks and none of them baby related. Kind of ones like technology ish. Although it is baby related. And tech, I'm going to say that you can if you have kids, you need this. Alright, I'll start there is there is this thing called the bristle little green? It's like a vacuum cleaner thing. I swear you need it if you have kids, but you probably need it anyways, because like as an adult, I've spilt many things. But like this thing, literally will like red wine will get picked up off of carpet. Like there's all these things that like it does such a good job. And so yeah, pretty, you're probably going to need it for the baby spit up for all the fun stuff. Yeah, it's is totally worth it. I've seen other parents recommend it. But like it works on couches, like chairs, carpets, bedding, whatever it is those hard to get stains off of. And it works really, really well. So I recommend it. Oh, pets are another good one. That's a good reason to have it too.

</p>
<p><strong>Jem Young</strong><br />
Did you ever stop and think that of yourself? 20 years ago, you know, a young punk still trying to make his way in the world? Think of yourself now that you're recommending a vacuum cleaner?

</p>
<p><strong>Ryan Burgess</strong><br />
No, no. But you know what, there was times when I was a teenager that I would like spill, whether it be wine or who knows, like some color drink having people over when I wasn't supposed to have people over. And that's that she would have helped like I would have been able to clean up the mess without getting in trouble. So my past me, I wish I was thinking through those things ahead of time. So, but I agree where you're headed, Jem, I would not have thought I you would have asked me even like 10 years ago, I'd probably be like, No, I wouldn't think of that. But I am highly recommending it. You need one in your house. They're great.

</p>
<p><strong>Preethi Sitaraman</strong><br />
When you invite friends and that will be a self service. If they spill it, they clean it,

</p>
<p><strong>Ryan Burgess</strong><br />
they clean it up. I mean, it's so easy. That's probably like you just do it, it's pretty quick.

</p>
<p><strong>Preethi Sitaraman</strong><br />
And they will be going and buying one more.

</p>
<p><strong>Ryan Burgess</strong><br />
I should get commission on this. And then my second one is a weird thing. It's a it's a beach towel. It's summertime. So we're all like doing things like going outside hanging out, especially now COVID is a little bit better to hang out and do that. But putting a towel on the beach is always a pain in the ass. Like it just gets covered with sand immediately. There's this company called sand cloud towel that they basically sell that it doesn't really get that sticky sand feel to it. Like it's kind of like the way it's made. It doesn't really hold sand. Of course sand will fall on it a bit. But it just doesn't like really hold on to it. You just pick it up and it's there. It's not there. I was pretty impressed. I needed a new like sit down towel for the beach. And so I came across this and I've tried it a few times and I've been impressed with it. And it's not super Valley silicon prices so it's okay that way to kind of me it's me it's not a cheap towel. I mean it depends on the size to that you're going for. But it works so and there's no Bluetooth on it. There's no you USMLE so yeah, it might not be that great. It doesn't light up.

</p>
<p><strong>Preethi Sitaraman</strong><br />
No, I still have to wear a different mask when you are.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, yeah, you're still gonna have to buy the expensive mask that gem suggested it, you know, it doesn't cover you they're

</p>
<p><strong>Preethi Sitaraman</strong><br />
using fitted sheets instead of towels and then using like four corners of the basket or something so it's the sand doesn't come in to the beach in

</p>
<p><strong>Ryan Burgess</strong><br />
idea but I feel weird taking like a sheet to the to the beach. Like I would feel a little sorry to anyone who's doing that, but I would feel a little bit weird. All right, well, thanks so much Preethi for joining us, it was a pleasure having you on just like really educating us more in depth on the aesthet role. Where can people find you?

</p>
<p><strong>Preethi Sitaraman</strong><br />
Thank you, Ryan. This was fun. And I was really happy to share my knowledge and and also learn from you both how how you have worked with testimonials and what are the challenges you have seen. And so thank you so much for inviting me. I am on Twitter. My Twitter handle is VTC Rahman. And I'm also on LinkedIn. My LinkedIn name is PTP Sita Rahman. Because I have different last names and I pick and choose which last name to use. Where for I love it. But yeah, find me and I will be happy to talk to anyone of you. If you have any questions about any test engineering roles or anything about Netflix too. I'd be happy to share

</p>
<p><strong>Ryan Burgess</strong><br />
right on Well, thank you all for listening today's episode. You can find us on Twitter at front end age or front end happier.com Or really wherever you like to listen to podcasts. You can subscribe. Also, if you want leave us a review, let us know how we're doing and if it's a good podcast, leave us a review. Any last words? Gems too busy buying the mask? I see him like putting it in his car.

</p>
<p><strong>Jem Young</strong><br />
He's like, huh, but people are really gonna think I'm cool wearing this mask.

</p>
<p><strong>Preethi Sitaraman</strong><br />
People think you're already cool. Jem. You don't have to wait.

</p>
<p><strong>Jem Young</strong><br />
I want to be cooler. I want to be like Brian cool.

</p>
`;
return transcript;
};