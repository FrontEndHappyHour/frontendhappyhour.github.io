// Episode 87 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
  
<p><strong>Ryan Burgess</strong><br />
  Welcome to a brand new episode the front end happy hour podcast. In this episode we are talking about development process, really focusing on the pros and cons of well really the basic to waterfall and agile development. Let's give introduction of today's panelists. I guess you want to start off?
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Yeah, sure. My name is Augustus Yuan and I'm a software engineer at twitch now.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Whoo. Yeah, that's true.
  
  Congrats. Thank you. Thank you. So now you know all the streaming, I guess. We should be live streaming video.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  We can. We can set a front end happy hour stream. There you go.
  
  </p>
<p><strong>Stacy London</strong><br />
  I'm Stacy London. I'm a senior front end engineer at Atlassian
  
  </p>
<p><strong>Jem Young</strong><br />
  Jem young senior software engineer at net
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I'm Ryan Burgess. I am a software engineering manager at Netflix. And each episode the front end happier podcasts. We like to choose a keyword that if it's mentioned at all, in the episode, we will take a drink. What did we decide today's keyword is planning, planning. So if at any point in the episode, we say the word planning, we will all drink. Alright, let's start it off. I think we need to really define waterfall and agile. Let's start by defining those two. I don't know if I can really define it well, so I'm curious on everyone's perspective on both of those, they're both software development processes. All right, we can be clear, but it's good. It's a good start. I've always thought of waterfall is pretty rigid, and it literally looks like a waterfall. Like when you map everything out. It's taking all the requirements for a feature and saying I need to do this, then this and this, this, this, this and this, and it looks like a waterfall.
  
  </p>
<p><strong>Stacy London</strong><br />
  Yeah, it's like real, very, like hand something over to a different group process where you're like, spend a huge amount of time writing and requirements or stacks of requirements, even like I remember the early days of doing software development getting like, like 100 page, software requirements
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  book. Oh, I remember those. I don't hate it either.
  
  </p>
<p><strong>Stacy London</strong><br />
  It was I mean, yeah, it's interesting to look back on it to see like, if there's pros and cons to that, but yeah, so you get that. And then they'd be like, oh, designers go make some like static mockups, maybe that would go with it. And then they would hand it to the engineers, we would code and make the thing. Maybe then you'd hand it over to the QA team, and they would test it, give a bunch of bugs, fix some stuff. And then like, maybe, because it's a waterfall project is probably like a year long project, some slog that's terrible, and you don't release anything to anybody until the end of that entire year. And valid to is it always was those long term projects. Yep. And you'd have no customer feedback that entire time. And then you'd shipped something, and then maybe it would work or maybe it would failed massively. And then also, you probably missed your date by like, six months
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Why you didn't ship anything so and then of course, agile is a little bit different. It's not quite the opposite of it, but I feel like agile is is meant to be a little like when I think of waterfall is very rigid. Obviously agile is a lot less rigid. It's it's supposed to be a little more fluid. You don't all have to be working, passing over the fence it we can all be working at the same time. Somewhat.
  
  </p>
<p><strong>Jem Young</strong><br />
  What else is agile though? It's faster, like the development cycles much faster. I think we're all right with waterfall and why most people use anymore because it's, it's a relic of the 70s when it was created and it's a relic of the days and I feel like a lot of listeners may not know but the days before web apps, when you can push updates or instead of building a twitch as like a web page or a web application, it's like a desktop application. So you can't just like continuously push updates, you have one chance to get it right to the user. And it can be bugs and waterfalls are reflection of that of these things. Like you're saying, like a year long code, or, you know, when they're building windows, they probably use agile or waterfall because like you needed that rigidity. Yep. Whereas agile is like more of innovation more recently. I say we see like, 2030 years, but yeah, it's like you break things into a series of steps, you get constant feedback, you still hand things off to other teams, but it's it's much faster turnaround,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  when you could actually be shipping at that point time to is I think that's another point is waterfall, typically was that longer term project for software development, versus now it's like, well, could we maybe maybe don't always ship every sprint, but you could like you You kind of break up these things into how do we ship something in production? How do we build off of that feature that's now in production. You kind of think about how you can iterate on it very quickly.
  
  </p>
<p><strong>Stacy London</strong><br />
  Yeah. And you can think of like agile too, is like we talked about, like software development lifecycle, or like an actual implementation. But it's not really an implementation. It's like a philosophy. They're like philosophical statements about that what you value. And then like, out of that we've gotten frameworks or implementations of it. So like Scrum, came out of that to say, like, oh, if you're, if you're not sure how to be agile, here's a framework for you to act agile and here's like, concrete steps and ceremonies and things that you have to do to like, implement the spirit of being agile.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, cuz like Scrum is literally a framework to do agile. Yeah, development, which is kind of interesting. Well, what is agile? Well, we've taken that and just defined it a little bit more and you follow the scrum practice.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Yeah, I don't know. I'm not sure if this is true, but I think I heard that agile kind of was born from like, consulting companies, or like they would work with clients who truth Did not know what they wanted, or they would change the requirements a lot. And you know, it's like waterfall. There's a lot of upfront planning.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Cheers. We needed that one.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Whereas agile, you know, you constantly are showing it's a very iterative, like, here's what we have. Now, here's what we have now. And then, at those moments, they can be like, Oh, actually, I kind of wanted this or something. I don't know. I that's just what I heard. No, I mean,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I think that's interesting, because I've worked in various agencies and consulting agencies, whatever you want to call it. And I've worked in both i've i've had waterfall and I've also had very agile like following it to a tee both worked for what we're trying to achieve. I think the one being more waterfall was we're delivering a end product and it was a longer term project. And you weren't showing an iterative process they just cared about giving the end product versus the Agile methodology was a lot more in the sense that Yeah, we Want to see progress and we're, we're going to demo this or we are going to launch a piece of this at a certain time. Maybe it was agencies that really pushed that the
  
  </p>
<p><strong>Stacy London</strong><br />
  the actual Agile Manifesto that was that came out, which spurned all of this was individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, responding to change over following a plan. So it's pretty loose and it's very interesting like how Scrum got so specific about it and like much more specific than that and some of the stuff that Scrum does is not even really mentioned in the manifesto, but like came out of it which is kind of interesting.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  That is interesting because when I think of the scrum are following agile to the tee, it's that Scrum practice, and it does actually feel very process heavy a lot. You do daily stand up you Do you know your sprint planning you do your stories.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Cheers.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  It's interesting because it did almost tighten the process that much more were my mind of Agile it should be very loose and fluid and less rigid where if Scrum does kind of make it feel rigid.
  
  </p>
<p><strong>Stacy London</strong><br />
  Yeah, it's almost like I think some companies were when they did the transition from doing like waterfall stuff, they're like, well, waterfall has, there's a prescription to it, and we know how to do it. Well, we can't just follow these vague, you know, sentiments like how do we do it? Or if like, you have a lot of people like if you have some giant, you know, 4040 engineers and like a huge team, you know, if I think a lot of people want something they like want some boundaries and descriptions of what it actually means. I think it's very interesting to for to to not have that it means that you have people that like, are just like, naturally collaborative, naturally want to get things out to customers and respond to feedback. Like you don't have anybody that's falling out. side of that, that's just like how they work. But then as soon as you maybe have someone that doesn't, then it's like, how do you help them understand how to be that way? And maybe that's where Scrum came out of that as well.
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah, I guess the the failure of Agile is that there's no end date. So there's no like, this needs to be done by this because that would break agile. If you're saying like, these have hard deadlines, it's very loose, which is fine in Silicon Valley world where we have like VC money to burn. But I feel like if you're like a bootstrap company, you need stuff delivered by certain days you can sell to people in Agile doesn't necessarily work in those type of scenarios.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I kind of disagree, though a little bit more in the sense I think when you put it towards a product company that yes, that makes sense is that you're a little looser on deadlines, because you're you're constantly iterating on your product, it's your product, but when I think to gustas point of a consulting agency doing it they do have a deliverable. And so they kind of have mapped out two sprints in order to make the deadline. have x, we got to break it up? And how do we make x and we've agreed to the client that we're going to deliver on that. I think it goes with your point of on the product side, you're loose, you're just like, yeah, we can slip a couple days or we can slip a couple weeks, not the end of the world. But I think in that agency world, where you've agreed to a client, if you don't deliver on that, that's they could fire you or you know, not pay you maybe that's part of the agreement. So I think it depends on how rigid you want to be. So I guess agile could be very rigid. I think that's where the scrum part comes in.
  
  </p>
<p><strong>Jem Young</strong><br />
  I think yeah, I think Sprint's are part of Scrum non agile.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I think you're right, as I said that I was describing more of the scrum part, which is agile, but it's like Scrum feels very rigid. It's very rigid. Yeah,
  
  </p>
<p><strong>Jem Young</strong><br />
  seems ironic. You're like, oh, we're agile, but we're also rigid, which makes no sense
  
  </p>
<p><strong>Stacy London</strong><br />
  individuals and interactions over processes and tools is like the man literally process a man Yeah,
  
  </p>
<p><strong>Jem Young</strong><br />
  it's defined as a process. Yeah,
  
  </p>
<p><strong>Stacy London</strong><br />
  I think like so waterfall had the time like estimating and deliverable like delivering something there was like the way they call it like the Iron Triangle or the fixed schedule, scope and cost. You've like locked in everything and you say I promise to deliver on this day with exactly this scope and exactly this cost. And like that was the stuff that failed like all these studies of like saw massive software development projects that like could never deliver on those things. And then we're like, oh, well, if we do let's say Scrum and you do store like size based estimating or complexity base estimating and you create, you have a team that has like a particular velocity based on their size based estimating so it's never on like dates or times. In theory, if you keep that team together, and they stay together for a while, like you can do like projection you can say like the cone of uncertainty is wide very like a year from now we have no idea of what we can deliver. But, you know, as that cone gets closer to like, now you can say, based on our velocity, we can get this far through the backlog. So this makes Any features we can probably do by like may or something like that. And it's always a probably, and you'll know more The closer you get. But it makes companies. And I think a lot of people very uncomfortable because what I need to know what date I need to know exactly when
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  which is really hard as engineers, I don't think we've ever been perfect estimating a direct timeline. Because there's things that come up things that you just didn't predict something changes, or Oh, this dependency didn't even think about that. And it happens and I don't think you can ever predict every little detail. And there's always going to be a trade off and you have to think about those things as you go where I think that's where the Agile part kind of it's like, Okay, well, these are some of the trade offs that will happen. Where's the waterfall mentality is no, no, no, we had this plan for years. What do you mean, why are you changing this on me? You told me you deliver on this exact deadline this day at this time and it It's weird. It doesn't. I don't think it quite works.
  
  </p>
<p><strong>Stacy London</strong><br />
  It was like an assumption that like software is like building a repeatable one. widget or like a car or something like combine came out of Toyota and the idea of like, your it's like the assembly line and just building a car over and over again. It's the same
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  car optimized.
  
  </p>
<p><strong>Stacy London</strong><br />
  You're like, we're not really building the same thing over and over again.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  No, because even if you were doing a website for client a and a website for client B, yeah, that's not the exact same it's not just like replace the logo here and like hey, we're really good at this and it's never the case there's always nuances that come into play. Which is kind of funny because yeah, right repeating the car is like the car is the car is the car is the car. Maybe you even have three different versions of that single car. But you know exactly which how long it takes for each one of those versions and you need 30,000 cars, you can easily figure that math out and deliver on that timeline.
  But yeah, actually, uh, for viewers who aren't familiar so what what is konban I'm not even sure if I'm saying it right I've heard people say can ma'am can bake sounds like the American way to say like can man
  
  </p>
<p><strong>Jem Young</strong><br />
  can I've heard Both and I don't actually know either. Just say what you said, Come on, I guess yeah,
  
  </p>
<p><strong>Stacy London</strong><br />
  I actually am not is like super deeply familiar with it. I've used that at one company. But other most places I've been I've been kind of Scrum oriented. But come on, come on the idea of like, there is not a process like Scrum. And it is, you just have a continuous feed of like feature work or things and I like say a backlog that is prioritized, probably like there's somebody prioritizing it. And then you as like a dev are just like pulling stuff in and just constantly working on it. And when it's done, you ship it, and you just pull the next thing off. And there's not like a sprint that ends where you say we have shipped a thing. It's more just like constant continuous pull, deploy, pull, deploy. That's my understanding of it. But
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  that was my understanding. I think that's a good way to put it.
  
  </p>
<p><strong>Jem Young</strong><br />
  It's like noted by I think it's Japanese for visual card or something like that. But yeah, it's like a subset of Agile but it's noted for, it's the it's visual, so it's like you're moving stuff. from one part of the board to another, and that's what makes it combine. I guess the best example is, remember Silicon Valley.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  The show?
  
  </p>
<p><strong>Jem Young</strong><br />
  You mean the documentary?
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah.
  
  </p>
<p><strong>Jem Young</strong><br />
  There's like a part where they're doing planning and they're moving like, post it notes are one part of board and other like that's gone.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah. And and each of them is taking a they called them stories. Yeah, exactly. Yeah.
  
  </p>
<p><strong>Jem Young</strong><br />
  And I think that's it sets up the expert like, that's what JIRA tries to kind of reproduce, but not as visually, but you have like, cards or tickets and you close them move on to the next kind of iteration. I think that
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Well, I think like totally JIRA if you set it up that way, yeah. JIRA is super configurable. First time I ever saw it was in a scrum agile environment where I was like, Whoa, you can do that with JIRA. And it was so beautiful is that you can have ARDS and you move them across the board is what's really funny is now that Lassie and owns Trello Trello is like automatically like that. I very much like that. Sure, but you You
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  can set up your JIRA like that to JIRA, you can say I want you start your project, often you can say I want common style or you want Scrum style. I think there's there's probably much, many more templates than that. But that's the idea. And then yeah, you get your little board. And you can make it as complicated as you want or keep it pretty simple and just like to do in progress done like so. I'm curious. I feel like I know the answer. But I'm curious. What do each of you prefer a waterfall or agile environment? for software development? I think it really depends on like, what the team wants, you know, agile only works if, like, it's a very collaborative thing, but I've like been through both and I definitely, like really see the merits of agile. I feel like there are a lot of things that, you know, one thing that I remember is like in waterfall, you know, we're gathering specs. We're like, hey, looks good. And then we say, Oh, we didn't foresee this. We didn't think about this. Oh, well as a fast follow up. Have you heard that term like young lad has a fast follow? We'll do it right after Right after we ship and then,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I mean, I feel like I hear that on a daily basis.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Yeah, exactly. So it's like, like, I can't even recall how many fast follows like we've never gotten to because you know, higher priority things come up as just like, there are a lot of things he can't foresee. Like, it's just like you, it's really better to just iteratively develop, like start small, get, like, identify like, I feel Scrum provides like a really awesome framework because it breaks down like, it kind of forces you to break down projects into sprints. See, like what you can achieve and then as things go on, you can be like, hey, this came up, I don't know what to do. Alright, let's address it next sprint and stuff. So it's always like kind of like thinking and like, as you run into problems, you're not pushing it down the walk like down the line, just like Alright, let's figure out like when we need to figure that out. Yeah, and see how that affects like the train and stuff.
  
  </p>
<p><strong>Stacy London</strong><br />
  So I think that's like they're not the idea is like the spirit of animals not being followed at that point because it's like responding to change. responding to a great point, you're just like, so companies are like, yes, we're totally agile, and then they'll ship it, we'll never readjust it and never respond to that customer's feedback.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I also wonder those some of those times those fast falls and that you never get to them. Like I think Augustus made a great point on that, is that some higher priority came around, maybe that's okay. Sometimes if you've kind of put it aside or we'll we'll make this trade off for now. Or it's a fast follow there is higher priority, that's maybe an okay thing is so that you don't get stuck in this mentality that you have to fix this piece or you have to add on to this feature. I think you should be prioritizing your work as a company is like what's the highest value? And maybe it's not that right now. It's a nice to have I would love to get to it. But we only have so much time in the day. How do we get to everything and focus on the highest value and the highest priority?
  
  </p>
<p><strong>Jem Young</strong><br />
  Yes, that's a good point. Like I in software, we probably don't focus on the principle of good enough, which we all embrace it because there Infinite bugs and you can be chasing the long tail of things forever. But there's a point where you're, yeah, we can throw it on the board, but we'll never get to it. It's just let's just, it's good enough. And that's a real thing. I've never worked at a company with either waterfall or agile Stacy like you. I've definitely worked at companies that said they were agile, but I've, I like most of these processes are unfamiliar, I'm learning from you all right now, because I've never actually done any of these things. So like, by General, what's the better approach? Neither because like, I've done fine. I've never had any of these things. So I'm obviously very biased.
  
  </p>
<p><strong>Stacy London</strong><br />
  Both are almost like so extreme, not extreme. They are to each other. They're quite extreme. And like, somewhere in the middle is the hybrid that makes sense. Like one part that I've feel like has always been missing from the the more agile sort of iterative thing is the design process. Some people take it to mean that it's so initiative and agile like, we don't need to give designers any time to think at all. They just, you know, work right beside you while you're building it. And like, that's true to some extent, but like, you need to do some thinking sometimes, you know, for like, an extended period of time, maybe do some usability studies or research or that kind of stuff. And the one thing that I always struggled with was Scrum. Specifically, it was like, Well, how do designers do that deep thinking and deep work? Like, where does that fit into this model? And it they don't talk about it at all? Like that's not in it's outside of it. It's
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  outside of it. You maybe do all that before? And then outline all the details after the fact. Yeah, which is, that's kind of weird. Yeah, you would think you'd account for that.
  
  </p>
<p><strong>Stacy London</strong><br />
  Yeah. And then maybe it's outside of it. And then people get really confused. Like, no, no, we're doing waterfall you're doing all this upfront stuff. And then it's like, Okay, well, you need that probably do like some of that. But also maybe have the designer embedded in your team and working beside you to like refine and respond and adjust, but like both They're necessary but aren't just very, it's very, it's not defined very well. And I think the entire industry struggles with this and like trying to figure out the good balance there.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yes, I think it's funny. I like that gem, maybe that's a good thing that you've haven't really experienced either of these. Because I think my answer to this or my thought on it, is use what works best for you and your company. I find it hard to believe that either one of them to a tee is the best thing for your company. You know, I'm curious to each session, Stacy and Augustus how each of your companies approach the problem but like, a Netflix I get often get asked this question in interviews of or you guys agile, and I'm like, Yeah, kind of, but not really. Yeah, like we're flexible everything. And as I start to describe this process that I don't even like to really call it a process. I came up with the word iterative, feel like shipping and building off a feature we're iterating we're, you know, learning and building a better feature and kind of progressing in on the product. But Same thing with the process that we're working on. It's very iterative, it does it make sense for us to have a stand up, daily stand up week stand up, maybe a weekly meeting. You know, it depends on the project. It depends on who's involved. And I think as a team, you you kind of try different things. And hey, did that work? Did that not work? Let's try something different. And I think that, to me, is the best way to describe it. And that's kind of how I describe the way that we work at Netflix. Is it is iterative, it's not changing. There's not this set process. It's, we're gonna figure it out as we go and what's best suited, and we'll learn sometimes we'll make mistakes that Well, that didn't work. But I have found in other environments that I've worked at where it's very well you got to follow this agile processes the way we do it may not always work. And so I think that to me, is how we've always done at Netflix. I'm curious for Augustus and Stacy,
  
  </p>
<p><strong>Stacy London</strong><br />
  how your team's work. Is your question. Yeah. So in that, how do you do you get people asking you then say like, when is this when is this feature going to be done? That you asked for dates and how do you in that way of working? How do you provide that it's not
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  easy, but I don't think it's always necessarily easy having a waterfall or agile to solve that either, is that sometimes we were pretty good at trying to aggressively say, Hey, we're gonna launch this in, you know, August 15. But things do change, like in the sense that we found out there's dependency that needs to change that we didn't account for. And, and we'll come we'll maybe come across that next week. And we'll say, we'll bring that up to the team is like, hey, this isn't gonna actually cost us an extra week or two. And as a team, we have a discussion, should we cut some scope to still deliver on August 15? Or should we just say, Hey, we need an extra two weeks and and be realistic with our time and do that. And so as a team, and when I say as a team, it's not just engineers, it's like design and product managers and, and, you know, whoever's involved in this project, Billy, let's to have a discussion about it and be realistic. It's not Hey, too bad engineer. You got to stay all night and weekend to finish this. It's like no, no, like, let's be realistic. And you know, maybe there's something that we can cut out and make this a little bit easier and then build off it iterate on it, or Yeah, well, let's let's ship September 1 since then, because that will give you some extra time. How did
  
  </p>
<p><strong>Stacy London</strong><br />
  that date come up with to begin with? That's
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  the that's I think, is the I guess you did kind of ask me and I avoided the answer on that one. hard, but no, I mean, it is hard. But I think it's we we try. And as engineers look at what's required and what the spec is and what we've talked about doing. And we try and set some timelines and say, like, Okay, well, these are the things that I need to do this, I need to interact with this team, they need to change this, it's going to take three days on them. It's going to take a month on me, whatever. And we try and come up with a realistic target and deadline, but also being aware that as a team, we're pretty aware that that might change. We're going to try and strive for that, but something may come up and that might be okay, and be realistic.
  
  </p>
<p><strong>Stacy London</strong><br />
  And it's probably short to right. You're not like oh, we're gonna deliver this One year from now, like you're not doing things that are so big, we actually
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  try and I feel like we go harder on being aggressive on the timeline, and then sometimes having to push a little bit further than we expected. Because Yeah, nobody wants to plan for like, yeah, we'll get to that. Like, it's like, oh, yeah, we can get a year because you know what, if you say it will be a year, it will be a year, even if you could do it, like in two months, it will probably take a year because you're like, Yeah, I got tons of time, I'm gonna be on Twitter, I'm on watching some streams on twitch, you know, it's like, whatever. You have the time in the world. And so you'll fill the time. So I feel like we try and be aggressive on the deadline or realistic, and then it might change a little bit too.
  
  </p>
<p><strong>Jem Young</strong><br />
  Usually what happens is the after design meets, and we'll agree to everything. The engineers are working on the project for a bit. And then usually like a week or two in the PM, the project manager will say, hey, about when do you think we can have this done we'll talk to engineering QA because that at that point, the engineer is like a good grasp of it, but Trust me like to arbitrarily build something until you How long? I don't know.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  That's a good point like that. Yeah. That is actually key. And that's I missed that part of it is that Yeah, we're not. You have to have a deadline or you have to tell me the timeline up front. It's like, give me give me a few weeks to investigate or start and so that we can start to plan around that.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Yeah, I guess like I can share my experiences, both that Evernote Evernote has changed. changed a lot probably since I've Yeah, yeah. Like at Evernote like we actually got like agile coaches to come. I think we paid like a lot of money. We had a really awesome Scrum Master named Monica. She's at apartment list now. And she kind of like pretty much changed the entire process. She went into our JIRA changed all of our workflows. So we were like very, very, like, rigid into like Scrum framework. But I guess to like, address the question of like deadlines, because one thing that she kind of coached us about is like, you know, deadlines don't there's, you can't have like, a lot of people think agile, there's no such thing as deadlines. Like that's totally not true. Like you have to have deadlines. But usually what happens is like, let's say you get a deadline, there's some event that like needs to happen, for example, twitch as twitch con, we might need stuff by twitchcon. Like we like. I think one thing that is a struggle for people moving to agile is there is this sense of velocity, you have like a velocity for your team. And it takes some sprints to kind of get an idea of like what your velocity is. So for us, like at Evernote, it's like if we got a deadline, like, hey, this state, we need this project done. They would onika or whoever would go back to the team, we would create all the stories of what needs to get done for that project. And then based on like what we estimate so we went with story points, and she has an idea of what our current velocity is. She can say, Okay, here's the here are all the stories here all the estimates. This is their average velocity per sprint, this is what they can get done. So it's kind of like already estimating like, you know, they estimated that all this work is like going to take them like expense This is doing for sprint. So it's either we cut some scope, we add some resources. It's like that's when, like the discussion start happening and stuff.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, that's helpful to you see that you write your head, like how do we solve this cut scope? People? Right? or?
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Yeah, it's like yeah, so it's like really like it like he brings up those conversations earlier like saying, you know, it's like, we really have to kind of decide here, like, and generally like, ends up being like one of the two like, deadline gets extended, or like, or, or cut some scope is cut because truthfully, like, adding resources doesn't really always work, right? You have to think about, like how much time it takes for the engineer to get on boarded. If they've never seen the codebase before. Like, you can't just throw an engineer from another team and mythical man month or
  
  </p>
<p><strong>Stacy London</strong><br />
  whatever. It's,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  yeah, sometimes, like you can't split up the code easily enough to like to share that I think that's always to me is my question. Even when I'm talking to an engineer on my team is like, Can we do that like Doesn't make sense. In this case, if there was another person, how would you leverage them and sometimes it's not that easy. It really isn't is like just throwing bodies at it doesn't mean that you can actually move faster.
  
  </p>
<p><strong>Stacy London</strong><br />
  Just the the throwing more people at it thing like the when you once one thing someone had shown me one time was like you draw a circle, and you draw like a little like a dot for every person that's on the team. And then you start drawing lines in between them because it is like indicate indicates like communication lines, like how many people you have to maybe talk to or tell something to, or keep them up to date or something. And as you add more people, those lines start to like, go up. I don't know if it's exponential, but it's it's significantly goes up to a point where like, it becomes untenable because there's just too many people that you have to like, keep in the loop on like, what's happening. And so that's part of I think, why like adding Google adds communication, complexity, and coordination, complexity and all of that. I feel
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  like we almost sometimes need to do an episode just on the communication side of engineer, I'm serious. I feel like as you grow as an engineer that is so important communication is huge. It will make things a lot easier or actually could really hurt you if it's not good communication. So I think I've seen as, as a thinking of an engineer growing into like senior or principal staff. It's communication is a big part of it.
  
  </p>
<p><strong>Jem Young</strong><br />
  So a question for all three of you who have worked in these sort of environments. To me, it seems like these processes are like predicated on one engineer one thing, but like in my every all my experience, that's never the case. today. I generally have like one or two major projects I'm juggling, and then like 10 or 12, minor things and then there's like, other pieces of it. I go through my day to day of like things that I did, but they're all over the place, and it would never fly if I have like Gemini deliver on this project by this time. But I'd be like, okay, but there's an outage here and I need to fix that and you fix Because I've been there long enough to have all this experience. So how does that work in environments like that?
  
  </p>
<p><strong>Stacy London</strong><br />
  This is a really good question because again, like the Agile Manifesto Scrum, like none of them talk about that either. There's no there's nothing that talks about that. You're like, well, we have to do support. We have to like respond to like, problems there. There are things that are not only you building features all the time. Perfect World like no, no external things. And so the places I've been in have come up with like, multiple ways to try and address that. Things like, Oh, we have like a support rotation. So one, one engineer per sprint, their entire sprint is not working on the feature and all they do is do support work. They like it address bugs that are coming in. They're the one that gets if someone wants to talk to the team about something or like, I don't know, ad hoc requests or whatever, it only goes to that person. So Then everybody else can focus still on the sprint, they can, like 100% dedicate all their time to working on the feature and that person's like, they call it disturbed, which I think is kind of a funny word for it. Like, in Slack, it's like, like exclamation point disturbed, and there's a rotation that's set up in auctioneer like to like, say, like, this is the person that gets alerted to that. So then they're the only one bothered. And so then it is distributed, so it rotates.
  
  No,
  
  </p>
<p><strong>Jem Young</strong><br />
  no, so I like that idea. But it's like put digging a little deeper. It's like Stacy, you have expertise on this subject. I don't know hash tables, just pick one. I'm on support. There's a problem with this literally having the day at work like the flow builders like running out of memory on the hash tables like over it, I won't get into but so I'm like, I don't have expertise in this area. I'm really good at CSS. So I'm gonna go to Stacey and we're gonna spend two days debugging this, how does it account for that? Because I'm like back and just keep going. I want you to hold the glasses when your phone Ryan,
  
  </p>
<p><strong>Stacy London</strong><br />
  a couple ways like sometimes you have like two people on rotations that are specialized. So maybe one person that's a front end specialist and one that's a back end specialist. And then they are able to, like between the two of them, hopefully address everything but like, yeah, I mean, even that front end person, there's still like specialization within that specialization I like, like,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  well, or even or even features like that. I think that was one that popped in my head is there's people on on our team, they know that feature really well and like go talk to that person. They know it like inside and out. And if they're on a sprint plan, and now you've interrupted them for half the day, that's half the day that is now taken away.
  
  </p>
<p><strong>Stacy London</strong><br />
  On the flip side hope maybe hopefully, like having that rotation. That person might not know it the first time that they'll get exposure to it. And you start to like spread the knowledge out across the team and build That build that up. So then there's like whole, like, I hate this term the like, Boss factor person but like, like,
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  yes. No, that's a great
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  there's a woman on our team that said the winning the lottery I like Yeah, she always hated that too is like we would say the bus factor and she's like, if they won the lottery and had so much money that they could just bounce I was like, Okay, I kind of like that a little more positive side
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  to address like kind of those questions about like, so I'm taking my experiences from Evernote, like not that I don't know how twitch does it? I actually I don't know. I'm still kind of new. They're very new. I'm pretty new. So hopefully one day I can speak to how they do everything but at least for Twitch, honestly, I think you touched like a really interesting point like specialties. That is like a very interesting thing that I don't know how it's handled. So I'm really glad Stacey was able to bring like put her like perspective into that. But when it comes to like, like high priority bugs like an interruption Like the flow of like, hey, like you have this feature that you're working on and then like high priority bugs come in like something breaks broken the last release, how do you prioritize that? At least at Evernote? I don't know how everyone does it, what we did is like at every stand up, we would like look through the height, like the bugs, and then triage, like on the spot like, Yo, this was like a bug, that's really bad. We need to patch or we need to release or we need to fix this. And so we would like immediately story pointed there, and we would like get a sense of like, okay, like, how much work is this? And then like, no, it's kind of like we would talk to that like the pm there. Everybody's at the stand up so we can like kind of make a decision, right? They're like, Can we like take the time to fix this and push things out and you can like and you know, there's like ramifications, right? Like something really bad broke and like it might push some things out. So the other point of like the specialty, at least at Evernote like we did try to like make it so that there was a lot of cross pollination of like anybody to do anywhere. Granted, like some people had more specialties But I think this like goes into why people try to use story points, instead of like, times or deadlines or like how much time it takes a person to work because like a story point, has nothing really tied to that it ends up averaging out in your velocity of like how much time it takes like, like if I'm specialized in front end and Stacey's specialized in back end, like, it might take me like, I don't know, like a really, really long time, like a week to do a back end work, whereas ccmi take her like a day, but it's okay, because it doesn't change the amount of story points that or the estimate of work there is like, but ends up kind of averaging out is what I've been told. Yeah, like, you can like,
  
  </p>
<p><strong>Stacy London</strong><br />
  Yeah, I think so like the complex. It's because it's a complexity. Yeah. estimate. And so, in theory, everyone's contributing to that complexity estimate. It's hard for me to like contribute to that estimate, when it is like a super Batman thing that I'm like, Nah, I actually literally have no idea how to do it. I'm like, Oh, do First,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  and then add some time because I got to figure that out.
  
  </p>
<p><strong>Stacy London</strong><br />
  Yeah, but but generally, like, maybe I'm not gonna be, you know, pulling that pulling that thing into the sprint working on it, somebody else will but but that is the idea. Like there's the over time averaging out, like there's stuff we'll just some things might take longer one sprint, but then less than next, and it's in theory kind of averages.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  Yeah, it's almost like as your team inherits more responsibilities that are outside of their expertise, it's going to affect their velocity. And that ultimately is going to communicate to everybody that like, hey, like, yeah, it's gonna take them some time to like, get used to like these new tasks that they're not familiar with. But then over time, you know, maybe they'll get better and they can start like, like working faster and then eventually like, averages out and stuff.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  It's interesting because hearing Stacey and Augustus talk, most of my experience was in a agency or consulting agency, all those working in Agile And Scrum and doing that. And so you didn't really deal with bugs, because you were building you were seriously you. I mean, sorry, you dealt with bugs that came up in the project that you were working in. But you didn't have a production bug because it wasn't like I owned a product that was out there and living and breathing and customers are using. It was more that you were building a product for another company. And so you weren't required to have those fly ins and everything you were just on track to keep going and build the deliverable at the end. So it's interesting to hear how each of you guys dealt with that at your companies. Because I realized I'm like, yeah, in a product world, where you own this product, world, Netflix, I'll say for that. It's like, Yeah, something might not work. Like login doesn't work. Our customers can't log in. Yeah, we're dropping everything and to fix it, right? Who cares about the latest feature that's going out? That's a super important thing that needs to happen
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  or like if security Review comes up and like there are like a high priority security issues like we prioritize our day account for right? Yes, exactly. And it's like you have to address those immediately.
  
  </p>
<p><strong>Stacy London</strong><br />
  And having that like sort of rotation where you have that all the people working on the feature and the sprints or whatever, and then you have that person that's like, being dedicated to fixing thugs or responding to emergency stuff like a security incident comes in, that person's gonna start working on it and like dig into it. It at least shields the team a little bit less than like trying focus, maybe at some point like that thing is so detrimental, like you need many people working on it at the same time and you and you decide that but for the most part, like that has kind of been a pretty good way to do it. I think that is I like that.
  
  </p>
<p><strong>Jem Young</strong><br />
  So what I again, no experience in this area. What I'm getting from all of you is these methodologies work if you are a single focus team that controls the entire stack works On one single thing, um, okay, well,
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  so that's also a good point. Because you know, there are other teams that involved like sometimes you're blocked on other teams. And so like, there are certain stories you can't work on until like, a certain dependency isn't done. And so it's like, you just can't You can't put that into the sprint yet. Like, it's like, we don't have enough. We like we can't act on this story right now. Like, so it's like, we are going to move it to the sprint when that dependency is finished. What other work can we pick up to, like, fill up this sprint?
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, I think that I mean, and you can have multiple teams, I think is that kind of what you're getting at too is that you have to all be on the same team or I bought
  
  </p>
<p><strong>Jem Young</strong><br />
  like I the agency is a good example of where this work or a smaller company where you're all moving together at the same velocity. But I always like go back to my current experience like Netflix, with Microsoft architecture where I don't their services, I don't own their services on services, that they don't know what they're doing and so agile wouldn't necessarily work because It works if the whole company's bought in and you all understand this contract you'll have with each other. But if even one team doesn't buy in, then it just throws off the whole thing. The whole house comes down. Absolutely. I think we
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  even if they're in that case, we'd all have to be following that methodology. And to like, I guess his point is, you might have a story that you're like, I can't work on this, because team x hasn't worked on it yet. And they have, you have to make sure they have the story on their board, and that they're prioritizing it, which could slow you down at that point, too. I mean, we still have to have that dependency.
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah. It's more you can end up wasting cycles where you're just like, What do I do? Because I want to start this thing because like, I don't know, don't worry, there's tons of stories you could pick. I'll say in terms of this, it seems like I'm, I'm being more the antagonist towards these prospects. I don't like process. But I see the upside would be defensive for engineers where if you're worked at a company where the CEOs like, guess what, I just sold this big contract and now you need to work on this You're like I was in the middle of finishing up this feature, I can see it as defensive where you're like, No, we have this hard process. You can't just come in and interrupt things. Let the engineers be not you're not context switching a lot. I see the benefit in terms of that, to your
  
  </p>
<p><strong>Stacy London</strong><br />
  point about just the like, if you're context switching that's huge like this is protecting that but then the external dependency stuff is very fascinating. Because like the microservices architecture, introduces this thing where like, you are not in the same team and a lot of these processes assume you have every single person necessary to deliver the entire feature directly on the team working together, day to day next to each other. So like, back end, front end design, QA, maybe a business analyst or a product manager, like everybody's there, you're just lockstep you're tiny, you move fast and everything's like perfect.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  A lot of planning
  
  </p>
<p><strong>Stacy London</strong><br />
  in a while.
  
  But yeah, like the Other thing is more planning, like the external teamsters. Cheers. Yeah. When you start having like platform teams, so that's something like, at Atlassian, where, you know, there's a lot of platform teams coming out that are producing things that they're not embedded on your team, but you depend on them. So we, I, we had to integrate with like an example and editor like a wiziwig, sort of editor thing. And that was a totally different team building that out. And we were dependent upon them to like, have a thing ready. But what was interesting about that is we ended up doing we knew we didn't have enough people to kind of do the work necessary to like integrate, and we embedded a person from that team, on our team in our sprints to because they're the most familiar with it, they built it. It's like, we don't have the time to like do all the integration work to pull this thing in, but we know we need to do it. We embedded that person they would like us to comment or whatever you want to call it, but it came in like worked on our team drawer. With us, and then they came to our stand ups. And we're like, yep, I'm working on this and doing this, and sort of like embedded that person. And I've seen that a couple times where they do that where maybe we depend at the at a financial institution that I used to work for. We depended on a mainframe thing to be done in order for like, a batch processing thing to like work. But we were like, well have it have that person like come in and like work on the team and the sprint, like they're working on something that you require? And then what would happen is, like, we we knew we needed certain pieces of data from this external team, mainframe team, we would say like, what should we What should we agree with that contract should be and then we would stub it out in the UI, we knew it would be done in sprint, because they were working on it. But we would stub out the the response and the API's, we would at least agree on the contract. And so we could keep going in parallel. Like we knew that what they were building would give us that piece of data at that contract level, and we could build our UI to it so that we were when we were done, we could like flip our facade off. consume the real thing. But still work lockstep to get the thing done. Just kind of, I guess an interesting approach to it as well,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  which is actually kind of similar. Like we'll do that with our back end teams is stub out the data and like to have those discussions up front is like, you don't have to wait. You have to Yeah, wait for this extra team. And then I can say, no, it's like, you have that conversation up front. And it's like, Okay, cool. This is the contract that's gonna happen between the UI and the back end. All right, we're agreement on that. And we go off and we can build that at different times or at the same time, and then they hopefully tie together. It's not always perfect. There's always little nuances, but you still were able to get a lot faster because of that.
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  This is pretty fascinating. Yeah, this is these are really good questions, because actually, yeah, I do recall there have been times where like, someone from another team did just come to our stand ups, they reported their progress on certain feature. It's interesting because I actually do agree. So I'm still not fully familiar with twitch but I've also kind of experienced this like Twitch is so large now. That, you know, not everybody on our team on the video ad experience team owns like subscriptions or chat or stuff like that, and we have to work with them. And it's interesting. I don't think I've ever ran into that situation because I've only been there but I it does sound kind of like a process failure if there if you have a project that's due at some time, and you have a dependency on them, and they have no time to like do it right. If they don't have any time to do it, there's no way you can meet that deadline because they're a dependency. So that's usually something like so we have technical PMS at they can like help patch it out or like, you know, work with their teams like Hey, what's on your roadmap, this is what we need. This is pretty high priority and at some point, you know, there's some compromise that like, okay, yeah, they need this. We need so yeah,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  but but I see what you mean. Yeah. As a summarizing before we get into pics is it's tough. Like I feel like there's you really have to find what works best for you and your team and your company. And it takes a lot of work to find what's best. And I think some of these things that we've mentioned it, it may work for you but it may not and I think to me is like maybe you take some of the pieces and put them together and make what's best for you don't necessarily be too rigid to like the process.
  
  </p>
<p><strong>Stacy London</strong><br />
  Yeah, like you said earlier was like so much is about communication and the people and when you are able to assess like, how your team works and see how they're able to communicate and work as a group, you can adjust how that works to meet their capabilities. And you don't have to have a certain process if people are meeting a certain like, capability standard. I don't know if you don't process is not always necessary, I think.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  All right. Well, at the end of each episode, we like to share pics of things that we found interesting and love to share with our listeners. Let's go around the table Augustus What do you have for your picks this week? Sure,
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  yeah. So um, yeah, I mean, I just started working at Twitch. It's been my It's like my second week, all you do is watch streams or Oh, yeah, totally just watch streams all day. Actually, my parents think all I do is play video games. Like, that's what they told my brother. They're like, Great job, which is like, yeah, just play video. That's not I do actually do work. But yeah, I, you know, part of leaving a job is interviewing and interviewing is a really, really tough thing. So so one of the things I wanted to kind of give a pick for was a company called carrot. I did an interview with one of the many companies I've interviewed at, they used a company or service called carrot. And basically, it's a company that, you know, they have their own interview engineers, and they will interview you on the company's behalf for the phone screen. And honestly, I think it's really interesting, you know, because as an engineer, I've had to do interviews. I've had to interview people. Maybe I'm stressed, maybe like I have some due date, I have to go interview this person. Sometimes it can affect like my like reasoning of what is good. So I think it's really interesting to have another service to handle this for you, personally, like when I interviewed for a company that use carrot, I had a really good experience and it's really cool. I, they, the company can customize the interview however they want. So it wasn't just technical questions, they asked me like, okay, here's, like, here's a production issue, like, how would you debug it? It's like, there's like a good mix and, and they actually like said, like, oh, here are four categories. Pick two that you feel you could answer the best. And they had the questions prepared for each category. So it's very, very interesting. And the cool thing is they send the recording of the whole video to the manager, so there's no BS. It's not like someone's like, I didn't like him. I'm just gonna like, give them a bad review or something they like the manager is ultimately the one that gets to decide that you know what that interview is pretty good stuff. So I want to give them a shout out is set the really interesting And then my second pick is foodie land Night Market. It's I went to this night market a few weeks ago for a birthday. There's a lot of good food trucks. Really, really awesome food. But yeah, check. And where's that? It's in Berkeley, and I think they have three per year. So I think there's going to be another one in August or something and we should all go.
  
  </p>
<p><strong>Stacy London</strong><br />
  Nice. Let's see tonight, I've got two picks, but sort of three. The first one is Thom Yorke just released a new album, called Anima. Very, very good, as per usual, is he's like a, quite quite an amazing artist. And then on top of that, there was a short musical film that was directed by Paul Thomas Anderson and Thom Yorke, that was released as well and that's on Netflix. You can watch that. It's just visually, sonically very stunning, very captivating, as pretty blown away by it. I thought it was amazing. So that's The second pick the third is Holly Herndon. She has a new song called frontier. She's a electronic sort of avant garde pop artist. I guess her musics very genre bending, but the particular song is electronic pop choir composed of both human and AI voices. So she uses artificial intelligence and our stuff so cool. It's incredibly like on the edge of like, electronic music production. And then it's combined with like since and sacred harp, and it's a very like, listen to with your headphones on it. It is amazing and beautiful and overwhelming. And you're like, there's a man here, but it sounds like humans. Oh, what am I listening to?
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I'm intrigued. I'm so excited.
  
  </p>
<p><strong>Jem Young</strong><br />
  Jem, what do you have? I'm gonna plus one. Anima it is phenomenal. I'm not gonna lie like, part of it like it brought tears My eyes, you know where they're dancing. Like it's just, it's just beautiful. It's a It's like incredible, especially if you love tom harkin. It's more like I was telling my wife I was like, how does he keep doing it for like 2030 years he keeps like evolving and still good. Anyway, sorry. That's enough fun that my first pick is for Valley silicon, the part of the show where I pick things that are just outrageous and they only exist because people have too much money. Somebody sent me a link on Twitter. I don't know if it's one of you or one of our listeners. Probably. As far as toaster is a for another toaster. It's my second toaster pick. is a four toaster toaster for bread toaster. Is it bread or toast? If it's night before it
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  before us I think Yeah, but yeah,
  
  </p>
<p><strong>Jem Young</strong><br />
  we're slots. Oh, bad. Don't Don't there. Yeah. It is reasonable. The it's a reasonable price of $320. The Art of burning bread, which is what you're doing here controlled burning bread. It looks nice. So you know,
  
  </p>
<p><strong>Stacy London</strong><br />
  is it minimalist? Does it? Yeah, it looks all right.
  
  </p>
<p><strong>Jem Young</strong><br />
  I don't know what you call that. I wouldn't call it a retro but I wouldn't call it Oh, that's retro.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I would say retro fit 50
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah, we will link to it in the show notes as
  
  </p>
<p><strong>Augustus Yuan</strong><br />
  well for 320
  
  </p>
<p><strong>Jem Young</strong><br />
  Yes. Oh, yeah. That's on sale. You know, maybe a little bit of bread. I've met toasting years, so I don't know what what's going on in the internet, but whatever. My second pick is dark season two. Dark is a show on Netflix. It's German. I don't want to give too much away.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Oh, the first season was so good nominally
  
  </p>
<p><strong>Jem Young</strong><br />
  for not like one of the Best Cinematography like some of us have any Netflix show? Yes, it has not been a strong cinematography, but the story is better. I haven't watched season two. It's worth watching. You probably want to read an article on like the recap cuz it's really confusing, but it's probably one of the best shows on Netflix. And it's in German too. And watching subs not dubs, man. All day. Yeah. My last pick
  
  </p>
<p><strong>Stacy London</strong><br />
  dubs
  
  </p>
<p><strong>Jem Young</strong><br />
  as an athlete that speaks to me okay. Anyways, yeah. Netflix it's like very there's a very heated battle between the subs and dubs crowd and we both feel very strongly on either side. My last pick is puck, it's at POC dot dev it is a better UI for your touch bar on your MacBook. So it's a way of customizing it's much cleaner. It's much easier to use. Check it out. It's free. It's open source, so I mean anything can be better. Yeah, really? Don't get me that's another episode. Next episode is us on MacBook Pros and touch bars.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Alright, so I have a Netflix original pic as well. Latest season came out but la casa de propel. I kind of don't like calling it the American name, but the American name is money highest. The show is amazing. Like it's so good. I've watched the first two parts the third season has just come out. And so I'm really excited to jump into that. And then my second pick is a book I'm not finished but I'm almost done is a book that how to talk so your kids will listen And listen, so kids will talk. It's an interesting concept about really how to talk to a child. But the funny thing is, and the reason I'm bringing it to this podcast is, well, one if you're a parent, definitely read it. But also it kind of goes to the point where this is how you should have communication with others is talking and listening. There's a lot of concepts in it. That talking to a toddler. I'm like, yeah, this would work for an adult as well. So I think it's a really good book. But definitely if you have kids, I highly recommend it. Thank you all for listening to today's episode. Make sure to subscribe different and happier podcasts on whatever you like to subscribe to podcasts on. Whether it be Spotify, Apple, Google, whatever it is, we'd love for you to subscribe to us. And you can follow us on Twitter at front end. Ah ah, any last words? No one picks Stranger Things.
  
  </p>
<p><strong>Jem Young</strong><br />
  That's Oh, too late. Right now. I'm
  
  </p>
<p><strong>Stacy London</strong><br />
  waiting for Josh
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Well I just want to say
  
  so good
  
  </p>
  

  `;
  return transcript;
};