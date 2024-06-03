module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end, Happy Hour podcast. One thing that I don't think we speak enough about in this industry is talking about developer tools, mainly internal tools. I've learned a lot since joining productivity engineering, or get Netflix and I thought it'd be really good topic to cover, and maybe really focus on something in particular, which is an open source tool called backstage that was developed by Spotify. So to help us with this conversation, we have Jason Palmer joining us I know he knows a ton about backstage, so he's going to be able to share some insights on that. Jason, do you want to give a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?

</p>
<p><strong>Jason Palmer</strong><br />
Sure, Hi, I'm Jason Palmer, I joined Netflix maybe about 10 months ago. Before that I was at Spotify 10 and a half years, forever, which is crazy in this industry. I spent about half of my career at Netflix, or at Spotify, as an engineer focused quite a lot on productivity, like internal platform tools. And yeah, my last five years or so I was a product manager started a couple of different teams like the Spotify is first web infrastructure team that was fun. A testing infrastructure team that I'm proud of them, they renamed themselves toast infra. So yeah, I like that love the puns. And yeah, and then towards the end, before I joined Netflix, I was pm for the continuous integration team, as well, at Spotify. And now at Netflix, I'm a product manager for two areas. One is delivery engineering. So Spinnaker, chaos, testing, continuous integration, things of that sort. And then also discovery and learning, which at the moment, we're focused on improving documentation and helping engineers to understand how to build high quality systems that meet the standards of Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on and what is your favorite Happy Hour beverage?

</p>
<p><strong>Jason Palmer</strong><br />
I quit drinking in 2017. So these days, it's Gatorade zero.

</p>
<p><strong>Ryan Burgess</strong><br />
Do you have a favorite color then? Or I guess their flavors?

</p>
<p><strong>Jason Palmer</strong><br />
Fruit Punch is what I go with today. It's today it's orange. But you know, that is a good choice.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that. And it's really just Jeb and I for panelist. But Jem, you want to give your intro,

</p>
<p><strong>Jem Young</strong><br />
Jim Young, engineering manager at Netflix on the web platform team.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm an engineering manager at Netflix in our productivity engineering. Org. In each episode of the front end, happier podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is platform platform? All right, yeah. Which is kind of cool. We're all in a platform or your team at Netflix. So this will be an interesting topic. And I'm sure it will come up. But I thought to start it off is what is backstage JSON? I know a fair amount about it. But I would love to hear you know, how do you describe backstage?

</p>
<p><strong>Jason Palmer</strong><br />
Sure, yeah. So backstage is a it's an internal developer portal. And you know, it's going to be geared for companies that have I would say, at least, you know, 20 developers, something of that sort, really, any company of any size can make use of it and get a whole bunch of benefits. But generally speaking, the product is geared towards organizations that have at least 20 developers, ideally, 40, you know, way beyond this, right? What you tend to see in organizations as they hire a bunch more developers, once you kind of reach that 2030 developer range, you start to end up with a multitude of tools, you start to want to push for a little bit more standardization, perhaps of how things are developed, you start to get that one or two engineers that are building what we would call platform, go ahead and drink as different tools, you know, and over time, as kind of organization scale, it becomes more and more important to like make these tools discoverable, help people find these tools help them find you know, the standardization, the documentation, the best practices, in before you know it. You probably have all seen this 1000 times, you end up with 15 different websites, you know, bookmarks all over the place tabs open all over the place. Backstage really kind of helps centralize all of this to the best degree possible.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think you did a great job explaining. I think one thing I'd add to is that you're right to call it like a portal, but I always feel like Portal is such a dirty word or doesn't. It seems pretty simple, but I feel like backstage is is so much more than just like but it is it is a portal it's pulling everything together. But it's so much more than I think it it has a lot of functions. Quality and, and pulling together a lot of systems that give you visibility as an engineer. And I think that those things exist in in companies. But like you said, Jason, it's usually starts out as tools all over the place. And it's like, how do you start to pull it together? And I think backstage is exactly that is like helping you to do that. And I think it's really cool that Spotify started this, I think there's a lot of companies are doing things exactly like this, but have Spotify not only doing this, but then also open sourcing it, which is very cool.

</p>
<p><strong>Jason Palmer</strong><br />
Yeah, definitely. It was a huge privilege that kind of see backstage, you know, go from a very small idea to what it is today. I didn't play a huge role in that I mostly watched from the sidelines. But it was really awesome kind of seeing the product grow and become what it is today,

</p>
<p><strong>Jem Young</strong><br />
what are some equivalent tools or products that would be similar. So I can kind of wrap my head around what backstage is

</p>
<p><strong>Jason Palmer</strong><br />
there is a, like a direct competitor product from Lyft. I think it's called clutch. So there's there's kind of like another, you know, developer portal product that's out there. That's sort of where I struggle is that there isn't any one tool that I could sort of say, yeah, it's just like this, right? That's kind of where I struggle a little bit. Maybe, you know, like, I could make a comparison, it's gonna be awful. But I could make some kind of a comparison to like New Relic. Are you familiar with New Relic at all? So if you log on to New Relic, I mean, one of the things that you're going to be able to see there is obviously it's kind of geared towards, like, you know, performance and uptime. And, you know, I think the last time I looked, they were kind of creeping into testing a little bit like synthetic testing. But one of the things that's, you know, compelling about the product, and I can connect it back to backstage, is that you can see all of your organization's applications, like in one spot, right? Obviously, it's geared towards performance. It's geared towards, you know, testing and what it is that they do as a company. But that is one of the big things is that you can see everybody else's apps, right. And it's generally at least at Spotify, when we use it, it was like pretty open, I would be able to see, you know, Spotify dot coms, like performance metrics, right? And so that's where I can kind of make a connection a little bit back to backstage where, you know, with backstage, you can you can see all of a company's software, right, and you can see, like, well, what is this software? What team owns this thing? Is this a Java back end service? Great, you know, and maybe if I am so inclined, I could make a deployment of that software, right, I could roll it back, I could file an issue, I could, you know, check on the tests or something like that, like, it's, it's really kind of geared less towards performance, specifically, more towards who owns the software, what is this? Right? And then generally, how do I operate the software? Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I like what you're saying there, Jason, to that, kind of, to my point that, like, it's more than a portal, because there's like functionality that can happen. You know, it's not just like, Oh, here's all the things that I own are all the tools available to me, or the teams at Netflix or, you know, said company, this, I can also take action on? And I think that's, to me is like how it's more powerful, I think, to answer Jim's question, too. And it's probably taken, maybe not exactly. You know, another thing that's exactly like backstage, but I like to think about it that a lot of people are familiar with is like things like AWS Management Console, or the I think Google has a console as well. It's some of those things where it's a centralized piece that you would go to. And I think that's what backstage is for, like internal companies, for their engineering teams is like, if you needed to find documentation, like Jason said, or do something, or even look to see if a tool is available to you. It's like, that's where you start. It's your starting point for that. And so I think that's definitely needed in companies like Jason said, it's like, tools start building up and, you know, which is great, like you start small company, but then more and more of these tools get started to be built. And it's hard to discover them. And then it's also the cohesive user experience is not there. There's, there's disparate user experiences. And so I think backstage does a good job of like, helping improve those things. It's not going to solve for everything, but it starts to pull those things together more.

</p>
<p><strong>Jem Young</strong><br />
So we're talking about the field of informatics, which is something that as a younger developer, I'm like, Why do I care about how you aggregate knowledge together? Like that seems like a waste of time. What matters is the code, how great it is, how performance How clever it is. But now that I'm a little more experienced, that that idea of how do you pull together all the information from all these disparate sets of tools into one portal that's accessible? is a hard problem. So it sounds like backstage solves solves a lot of that which is like where do I find the information without having to go hunt every single team stocks and their bespoke services? Does that sound about right, Jason?

</p>
<p><strong>Jason Palmer</strong><br />
I think that's a really great summary. Yeah, for sure. I think it definitely like approaches, you know, engineering as like, from the perspective of, do you have the information that you need to make the right choice, right moving forward? And is it easy for anybody on your team to kind of do what they need to do to improve the software to release the software to rollback to do whatever they need to do? I think that that's those are two big things that that backstage is great at helping teams achieve.

</p>
<p><strong>Ryan Burgess</strong><br />
Another thing to add to that I think backstage does a good job of helping things along to is there's the backstage piece of it. But then there's also they're thinking about as like scalability, or extensibility, that's probably the better way to reframe it is that there's plugins too. And so there's things that are very specific that I might want that you know, another company may not want. And so they're thinking about it in that sense, they're not giving you this whole service. It's like, okay, yeah, we have a starting point. And then there's these other pieces that you can leverage, or even build off of it yourselves. And so I think that's a really good model, even from the open source stamp.

</p>
<p><strong>Jason Palmer</strong><br />
Yeah, definitely. I mean, you know, it's backstage has always kind of, especially like, when it when they open sourced, it's always recognized that like, okay, we're not trying to ship like Spotify as opinions on how you should develop software, how you should, you know, deploy software or anything of that sort, it really doesn't ship with any opinions at all. The only kind of opinion, if you want to call it this, that it does ship with is that you should try to centralize all of your opinions in one spot, right. So, you know, if you can, you know, put in the work as that's required in order to, you know, allow teams to be able to rollback software by clicking a button in backstage or, you know, if you can do the work to either use tech docs that it ships with, or kind of put your documentation, you know, in backstage, if you can kind of do the work to just make sure that all of these great tools and processes that you've built up, up until this point, if you can work those into Backstage, now, you're basically able to ship your great opinions out there to everybody in your engineering org kind of all at once. In the flipside to that, which is really much more powerful, in my view, is that once you actually do that, and you get everybody kind of doing the thing that you want them to do, or you think that they need to do, you're gonna get a tremendous amount of feedback from developers, and you're gonna end up kind of crafting as a company as an organization, you know, opinions that make much more sense.

</p>
<p><strong>Jem Young</strong><br />
So besides just technology, like, I think the manager in me is always like, Well, how do you organize this information? How do you prevent information overload where, you know, there's a million dashboards, which, which can be like a bad pattern in itself? Because you're like, I have so much information, I can't do anything with it. So is there is it like committee? Can you hide certain information? Do you bucket it by category? Like, how does that process work?

</p>
<p><strong>Jason Palmer</strong><br />
This was actually kind of a, an issue. I recall. In the early days, like before, backstage was open sourced, I do recall, there being a time where basically, like, it reached a certain mass, like, you know, early, if I start back, early backstage was really only created to help Spotify understand who owns every bit of software, right? Because that wasn't super clear. And you're not really going to be able to tell that just from like, you know, get blames all over the place, like you kind of just want to know, like, who owns this backend servers, who owns this, whatever. And then, you know, they started layering on some things like, you know, you could see recent deployments of software, you could see like your, you know, recent CI builds and your ci vawg. You know, but then it reached a certain point where everybody just wanted to build stuff on backstage, they wanted to add their products there. You know, so no more CLI tools, put that in backstage, no more, you know, website over here, put that in backstage, and then it kind of became like, alright, we actually need a team to focus around this and actually understand, like, what's the overall backstage experience? And what should it be, you know, for every every kind of job role, basically, at at Spotify, so I don't actually have a great answer for you. All I'm saying is, it's really easy to actually kind of get into that scenario. So early on, you just basically want to be driving traffic to backstage, you want to make sure that people aren't going to 13 different websites, go to backstage, but then you should kind of recognize six months or a year later, you're going to want to take a step back and say and reevaluate. How do all these Ottawa these experiences fit together?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think to me, it's like almost like a forcing factor of it. it like I think even where we came to this point of needing something like backstage at Netflix is, tools were being built organically, right? Like you're solving a problem. And even even we have a productivity engineering or like that the does this work, we build tools for like CI CD for monitoring for, you know, local development improvements, there's a lot of tools that are being built, and more and more keep getting added, or they, you know, build upon each other. And you take a step back, and you're going, Oh, wow, there's a lot here. And it's not necessarily clear to an engineer in a product team, or whoever is leveraging these tools. What's the view of like all that, you know, what's the library or suite of tools that are available to me. And that's actually a point that we came to at Netflix, where it got so big that you're like, Okay, these tools are great, people are using them. But they look a little bit different, they kind of do similar things, or there's some overlap. And so then you start to have this conversation of how do you get them to be feeling more cohesive? And then to the same point of how do teams discover them, you want some front door, they go, do they know, to go into one spot, and are able to manage their features and everything from that one location? So I think that's what happens to naturally is that backstage start to force that conversation of like, how do we pull these things together, it still takes work, it's not going to just solve it for you. And I think over time to is that you don't necessarily need all 2030 tools to be in something like backstage, but getting towards that plan is absolutely going to help your teams be more effective. You know, like, Jim, for people in your team, you don't want to come looking for tools going, Oh, who do I ask, Do I go ask Jason, do I ask Ryan? Do I look in some memo about something? Or where do I go, or, Hey, I don't even know if this exists, I'm just gonna go build this because that happens to and companies as you get larger is that you have a problem. And you're not aware that someone else may have solved this problem. And you're like, Oh, cool. I'll go build that. And so I think, to me, overall, I think it's just also helping like a culture shift internally as well.

</p>
<p><strong>Jem Young</strong><br />
So diving in more, because this is like a real problem. It's not just I know, it's not just that at Netflix, or any particular organization, but how did you how did you all get alignment to use backstage? Like, one thing I've seen is it doesn't matter if it's the best tool, because engineers have opinions. We've discussed that many, many times on, on front and happy hour. But how did you find that alignment saying like, this is the best tool to use them all. And like now, this is the default we're going to use for a real example. We can't even settle out in my team, what to use for our docs. Some people are like, let's just do markdown base, let's do documentation based on the repo itself. So if you're like less use coda, let's use Google Docs, let's use a plethora of tools. And the result is like we have documentation everywhere. And it takes like a large effort to bring that back together. And that's just my team. How did you handle that on like, an engineering wide platform level? Organization? Cheers,

</p>
<p><strong>Jason Palmer</strong><br />
cheers. Cheers. Obviously, we hit on backstage, because we built it at Spotify. So that that was a big thing, like, you know, I think organizations of that size engineering organizations of that size, they do love building stuff. So um, I don't know that there was like a build versus buy analysis that was done. At that time, I think they just built it right. And like I mentioned earlier, it started super small, like the backstage product, from what I recall, on the sidelines. I don't think that it started with these grand ambitions, you know, for what it is today, it really just started with, I need to know who owns all of this software, right. And so that's what it started super small. So it just wanted to be a website that listed all of the software, that you would be able to see what software your team owned, and you'd be able to navigate to somebody else's software, and know what team owned it. So you could figure out the Slack channel to like, ask them questions or learn more or something like that. Over time, they kind of layered on documentation. They layered on, you know, ci builds and deployments and things of that nature. And it became what it is today. So I think over time, it just basically, yeah, people decided, okay, this is actually super useful, right? But early on, it was really good at figuring out who owns that software in it enable teams to just be able to not have to just ask in general Slack channels all over the place. Hey, who owns this who works on this? You could just go to backstage and answer that question super quickly. And it was great at that. And then you know, eventually you would go in actually create new software using backstage Which that became unbelievably powerful. This is where I started getting really involved with it personally, you know, running like the web infrastructure team. When I first started that team, you know, it was very much like you expect to see other companies before they have backstage where the way that you built a modern website at Spotify, when I first started this team was you would talk to somebody on Slack and say, Hey, how did you build this website? What stack? Are you generally using, you know, your favorite website that was at Spotify? Hey, how did you build that one, right, and then you would kind of copy it, and you would start to make changes for your thing. And so it was basically like, development by copying development by slack. And so one of the early things that my team did was basically just try to bake in some of those early opinions and just build templates, like, great, you want to start a new website, cool. Like when we first started, that took two weeks for you to get a website out the door for somebody who wasn't familiar with the process, right? Like, all the things that I needed to do to get an internal URL, figuring out the tech stack, figuring out how to connect with the Spotify, like, you know, ecosystem. By the time you're done, it roughly took you two weeks, we were able to create some templates and brought that down to five minutes. And so again, maybe we could have done it with something other than backstage, but backstage was there, everybody was using it. And very powerful. We loved it.

</p>
<p><strong>Ryan Burgess</strong><br />
So Jason, it sounds like to win backstage is being created extensibility was early on in that thinking, is that correct?

</p>
<p><strong>Jason Palmer</strong><br />
Yeah, I would say so for sure. I mean, it was always kind of built with the idea that there wasn't going to just be one team that maintained all of backstage, like they built it right away with the idea that like, hey, we don't want to be the only contributors here. And that was also kind of part of the Spotify culture as well, which is, you know, once you are an engineer at Spotify, you realize every single repository is readable. It's writable, you know, if it like, within reason. And, you know, there's no notion that, hey, I own this software, like, as soon as it's committed, Spotify owns that software, everybody owns that software. Right? So there's a very, like, collaborative engineering culture over there, for sure.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's cool. I think that's something to call out to, you know, that thinking of something like backstage or you're not building it for just one team to maintain an own, because there's likely feature sets that need to be federated within into it. And like, that's the extensibility part, whether it be allowing teams to create plugins or having the model of like templates. Like, I think that is a really strong use case for something like backstage as well.

</p>
<p><strong>Jason Palmer</strong><br />
Yeah, for sure. And I think it really, like helped as well, because, you know, the, the time that backstage really started to take hold at Spotify. You know, it was early days in the platform organization. You know, I think maybe we were 50 or 60 people or something in the whole platform organization, maybe at that time. And we but we knew that we were growing. And we were definitely like a very product focused organization. So every single team within platform deeply understood their customers, they were trying to, you know, kind of drive success for their customers. And so with that in mind, I think, yeah, since we all all the teams within platform had very similar goals. It was kind of easy for us to centralize a lot of what we were trying to do onto backstage because it could more easily set us set all of us up for success.

</p>
<p><strong>Ryan Burgess</strong><br />
Jason, what's the tech stack? For backstage?

</p>
<p><strong>Jason Palmer</strong><br />
I actually don't really know, to be honest with you. I mean, I know that the I know a little bit more about the internal one. But I mean, it's a big, you know, JavaScript stack. I think at one point, they did transition to TypeScript. So I'm pretty sure it's a TypeScript app. There is like a back end component as well, which is in no JS, I believe. The internal version makes heavy use of Graph QL as well, for the back end side of things. The open source version, I think it's, you know, rest for the for the catalog. But yeah, I don't know, I've been a little disconnected from low level engineering to adequately answer that. I'm a pm kill me. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
it's okay. You know, we're both managers, it happens you get further removed from it. But I think at the high level, that makes a ton of sense to where it's like, yeah, what's what are P teams looking at if they're adopting it, so that that's helpful looks like

</p>
<p><strong>Jem Young</strong><br />
it's node and Postgres, as the datastore everything else is, you know, TypeScript react. Pretty, pretty standard stuff, so not too complicated you up and running.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I think that you know, getting back to maybe even jam your question of, how do we even think to something like on the Netflix side of play? adopting something like backstage, that was something that our productivity engineering org, at Netflix obviously had conversations around. And really getting out to similar. What I'd said is like we saw this problem, that discoverability was hard, there was a lot of tools that were disparate, they're hard to discover or navigate, even between some of the tools, they, they just, they felt very siloed not a bad thing. But that's where we ended up. And what we want to do is have them a little more tightly coupled. And so we definitely looked at options of, hey, we need some way of pulling this all together, naturally, like some sort of a portal, like a central place that you go. And I know, there was discussions around the build verse by the teams came across backstage saying, like, wow, this, this does a lot of what we're looking for. And of course, then you have the extensibility, too, that your can fit our needs and what we're looking for. And so that was you know, we definitely did a lot of those conversations internally at Netflix to, to decide what was the best route for us.

</p>
<p><strong>Jason Palmer</strong><br />
Yeah, I was definitely happy joining the, you know, kind of learning that you all, were investing in backstage, because I don't know, I hadn't really realized like how much it helped me even as a product manager, until I joined in it wasn't there. And then all of a sudden, I'm like, Okay, there's a massive void, actually here. So I was glad to kind of learn once I got up to speed and learned a little bit more about what y'all were doing in platform that oh, yeah, this actually is happening. Very cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. One thing we've been talking about to like alongside backstage is the internal tools, right, like I mentioned at the start of the episode that, yeah, this is a bit of a conversation around internal tools. And all three of us have been developers. Yes, we've gotten into different tracks of work. But I'd be curious, your both of your thoughts on how do you see the difference between creating internal tools versus creating external consumer facing products.

</p>
<p><strong>Jason Palmer</strong><br />
I mean, they're, they're similar in some ways, but they're, they're vastly different than in a number of ways. So one of the big things is, like connections with your actual users, right connections with your actual customers, if I'm developing a feature for Spotify, desktop, for instance, which I used to work on a little bit, you know, like, it's gonna be a while before I kind of hear feedback on this change that I just pushed. You know, and you generally like, I guess, as a product manager, or as an engineer that's interested in, you know, making connections with customers, like, you have to really set up like dedicated surveys, or you have to set up like, you know, kind of like watching sessions, to understand your customers, you have to read kind of Industry Insights, you have to like, you're not really, in many cases directly connecting with customers. Whereas when you build internal tools, if I build the wrong tool, I can usually hear people yelling, you know, down the hall, right. And there's a lot of power to that, too. Like, you can actually just go walk down the hallway, have lunch, and there's your customers there, right there. And that's kind of fantastic. And you get really, really quick feedback. And there's a lot of power to that. And I That's why I've always gravitated towards internal tools. Plus, I love engineers. And, you know, there's a lot of camaraderie in this group. And so if I can build tools to help that group, that's fantastic. For me,

</p>
<p><strong>Jem Young</strong><br />
I'd say the difference between building for internal use and say consumer facing, and my team does both. So it's, we live in a weird world. One, like you're saying, Jason, it's good to be close to your customers, it's good, you can get that feedback. The downside of building for internal tools is you're close to your customers, and you get a lot of feedback. So which is it's a good thing. But the danger of that is, you can bias easily towards the loudest voices, because they're right next to you. They're the people you have lunch with people you see in Slack, things like that. So for us, though, when one challenge we work through is, what's our long term vision? Like? How do we block out the noise? And how do we get like a good signal and say, like we're building for what people want. Because we're talking to our customers and not just biasing towards one group or the other. That's it's a tricky balance. The famous saying on platform engineering is being a platform engineer means no one's ever happy. You know, your customers aren't happy because they're, it's not the precise thing that they want. And you're not happy because you're not necessarily building the thing that you really want to build, but somewhere in the middle, and that's like the sweet spot for platform engineering for building internal tools. The another big difference is scalability. Like what platform tools usually don't have to scale too far as in they're generally using like one browser platform. You know, the use This is pretty well, versus people on the internet. It's the internet, it could be anything. You have to scale up, scale down, think a lot more rigorously about security policies, things like that, that you don't have to consider as much for internal tools. So one say one's easier than the other. They're just different different kinds of engineering, I'd say. Yeah, I

</p>
<p><strong>Ryan Burgess</strong><br />
like what you both said. I think I would echo all the points that you had. And yeah, I think Jeb to your point, too, is like, even just some benefits for internal is like, yeah, you might only have to build to one browser, you might not have to build a mobile, right, like, that's another thing is that on a consumer product, like Netflix, for streaming, yeah, he kind of needs to support all use cases, and make sure that customers are able to use one feature across all different platforms. Cheers. But I also like Jason touching on the customer feedback piece, where it's like consumer facing or internal, and the double edged sword that Jim said of like, yes, cool, we get to hear your feedback. But yes, there's a louder voice in the room. And I think sometimes that are what's difficult internal is, you often don't have a product manager helping shape that, right? Because I often look for product managers to take a lot of that feedback and input and really internalize it and think more strategically about, okay, cool, this team saying this thing, this other team is saying something similar, but not quite the same. But there's some things that are very cohesive together. And, and I think that's where it's really beneficial, which, you know, speaking on, on Jason here as being a PM, it's really, really helpful. Having that product manager mindset for an internal tools team, and not a lot of teams always have that luxury. And I do laugh when Jason said, the hearing from your customers internally, you have that, but you don't necessarily have that externally. With the consumer. I tend to disagree. I'm like, I'm pretty sure I get a lot of messages on Twitter about what features Netflix should have. And some of them are just like, you know, completely out there where I'm like, I don't know that I'm the right person for you to tell or ask that of, or, Hey, why did you cancel this show? I don't know. So I feel like you still do hear from them. But it yes, it's, it can be very noisy as well.

</p>
<p><strong>Jason Palmer</strong><br />
But But why did you cancel that show? Right? I'm not

</p>
<p><strong>Ryan Burgess</strong><br />
sure I, you know, sometimes I don't really think it through I just say let's cancel that season. We don't need the show anymore. Yeah, it's definitely on me. Right.

</p>
<p><strong>Jason Palmer</strong><br />
Make sense? Definitely. Yeah. Yeah. I think one, one thing that, you know, teams can, even teams with product managers internally, can kind of run into which it's really easy early on, because you hear from your customer so often, and so easy to be able to hear from everybody is, you know, optimizing for kind of the the loudest voice in the room, right, or trying to solve each and every problem that gets presented to you. I think the difficult thing, actually, I find is, you know, developing a really good pulse for all of your customers and what is globally optimal for the business itself, and trying to kind of, you know, convince customers basically that, okay, together, we're solving this problem, and it's not going to be an optimal solution likely for anybody. But this is going to be a globally optimal solution. And this is why we're going this path. That's a really difficult conversation to have. But it's totally necessary.

</p>
<p><strong>Ryan Burgess</strong><br />
So before we dive into pics, what advice would you give to a team wanting to adopt a tool like backstage?

</p>
<p><strong>Jason Palmer</strong><br />
I would say, to start small, start small, and, you know, don't don't think that you have to offer every single thing that the backstage website says it offers, right? That's the that's the best advice that I would offer is, you know, use it to initially help you create tools that, you know, look similar to one another that follow, you know, that use standardized templates, or just use it to deploy your software early on, or, you know, one or two functions, get people used to this, get people used to using the website. And you know, and then kind of layer on functionality. After this. Don't try to launch day one. With here is where you do all of your software development from now on. Because that's not going to be successful.

</p>
<p><strong>Jem Young</strong><br />
I would add on to that. Don't just build it and hope people will come get good alignment. And say like, here's what we want to do. Here's the plan. Here's why we think you should buy into this solution, and then get people to everybody buy in and agree. And then roll it out the danger of implementing something like this, just on your own for your team or even like a couple teams, but not entire organization is, then you just have yet another tool, which just adds to the noise. And that's not the point of this. The point is to organize all these tools together. So that'd be my advice, get get buy in, and then build it. Man,

</p>
<p><strong>Ryan Burgess</strong><br />
he both have such good advice, I'm going to maybe like steal and pull pieces of them all together here. I couldn't agree more with Jason's point of like, starting small, I think it would be, it's too daunting to try and do it all like you've got, typically, or at least how I think of Netflix, how we got here is there's a bunch of tools and that you try and you know, you're trying to rein them in. And you can't do that all at once. And then to like the getting buy in or are building for use cases, I think is important, too, is maybe deprecating things to to Jim's point like, hey, like don't just pull all or, you know, make sure there's buy in for it. Is that Yeah, as you're pulling tools in make sure that you're also pointing people into that direction to go use that and not the existing tool because like, then not just as like, Oh, cool. Now we have two ways of doing one thing like you really want to think strategically about how you're deprecating the old solution. So this new one is taking place of that because then you're just to Jim's point, you're adding another tool. All right. I really enjoy this conversation. A great time for us to dive into pics, pics are things that we like to share on the episode of things that we found interesting, whether it be music, movie, TV shows, books, who knows whatever it is that we've found interesting want to share with all of you, Jim, you want to start it off,

</p>
<p><strong>Jem Young</strong><br />
I have one pick. It's my valley silicon pick. For those who are not fun and happier regulators. Valley silicon is the part of the show where I pick things that are outrageous, or just expensive, because we here in Silicon Valley get paid far too much money. This pic comes from you, Ryan, I believe you shared this with me. I won't question how you found it. But you know, I'm sort of questioning how you found it. Maybe I don't

</p>
<p><strong>Ryan Burgess</strong><br />
I didn't buy it. If it's the one I'm thinking about. It's not something I bought, but it was something that was surface that I needed to share with you.

</p>
<p><strong>Jem Young</strong><br />
And I'm glad you did this one is it's called the Vestal board, white, or black doesn't doesn't matter. For a low price of $3,300. You have a board that you can use to send messages to your family team, or whomever. It's cool. It's really hard to describe. So I can't do like my usual spiel of how much would you pay for this? Because it's, it's hard to describe. But for $3,000, it's a message board. It's cool, but I can buy like four TVs to do that. I think the novelty of this, it's like mechanical switch that flips it that flips similar to old school style, like railroad boards, which is it's cool. But yeah, it's $3,000. For this, it's probably more art than it is utility. So I'm on the fence about this one. But I'm gonna call this one this week's Valley silicon fix.

</p>
<p><strong>Ryan Burgess</strong><br />
I think if you're going at it from the art perspective, you might be able to justify it a bit more. But I agree with you is like a screen could take care of that, like a TV screen.

</p>
<p><strong>Jem Young</strong><br />
Yeah, we have a we have a role fairly silicon fashion and art we don't i don't really cover because like that's so it's questionable, because art is personal. But this one, the challenge I have on this one is it's a bunch of mechanical switches. And I know they're going to fail. And it's probably going to be a pain. So, you know, that's why we use digital stuff and not mechanical stuff anymore. But you know, floats your boat. $3,000 send me one. I'm sure it'll be beautiful on my wall, and you can send me messages. And those are my picks.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, Jason, what do you have for us?

</p>
<p><strong>Jason Palmer</strong><br />
Sure. So I've been playing Diablo four recently. That's fun. Everybody should probably play that. So my other pick would be this here. It's called a tidbit a couple of friends of mine from Spotify. They they started this company and they sell these tools. So it's T ID byt. I think you can get them for like 150 or 200 bucks or something like that. And it's really cool. It's kind of like this pixelated, you know, display basically. And what's really fun about it is, you know, it comes with a bunch of apps that you can configure with your phone. But you can also kind of write your own apps. And I just find them actually really fun to write because, you know, it's not a typical, like LCD display or something, you're going to have high res images. So it's kind of interesting, like trying to figure out what kind of an app can you build within the constraints of this limited, you know, display, but it's it's also powerful and fun. So I don't know I have a lot of fun with this one. And I think they wrote their own programming languages for it because Rohan and moths are not super fun, though.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. And so jam that's probably a little more up the alley of a screen. That's not too pricey, correct.

</p>
<p><strong>Jem Young</strong><br />
That was for fun. That's in the range of five It's okay. It's it's pretty flexible. I remember looking at that.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, I have two picks for this episode. One is a candy treat. My wife was in Finland a few weeks ago and bought back this like Finland chocolates which there is going to sound to me it doesn't sound that appealing, but I'm so glad that I tried them was just like a chocolate ball. But inside it has like a black licorice, which to me is like not I'm not a huge black licorice fan. And man, these things are delicious. They're called lacquer grids. I hope I'm pronouncing that properly. It looks like you can order them online. So I highly recommend trying them. They're delicious. I definitely ate her the package. She brought me back, I ate it way too quickly. So I might need to order some more. Then my second pick is the TV show. Lego masters. My son is huge into Lego lately. I always was when I was growing up. And so I there's this TV show around and basically a reality show of people building things in Lego. It has will our net as the host. It's it's a pretty fun show. It's just like a light watch. But some of the things are creating are just mind blowing. And they're really impressive. So I've been enjoying that watching that with my son. So that's my second pick. I want to thank Jason so much for joining us and sharing his experience with backstage and it was a great conversation around internal tools. Jason, where can people get in touch with you?

</p>
<p><strong>Jason Palmer</strong><br />
You can mostly find me on Twitter posting stupid things at Palmer J three.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Thank you all for listening to this episode. You can find us on Twitter at front end H H if you've been enjoying the podcast. We'd love hearing feedback, please. You know whatever you like to listen to podcasts on. Leave us a review. We want to hear from you. And you can find us at front end happy hour.com Jim, Jason, any last words platform platform cheers

</p>
`;
        return transcript;
    };