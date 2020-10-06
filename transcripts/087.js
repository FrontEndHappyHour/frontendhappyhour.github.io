// Episode 87 transcript
module.exports = function() {
  'use strict';
  const transcript = `
<p><strong>Ryan Burgess</p><br />
Welcome to a brand new episode of the front end happy hour podcast. as engineers, we have a lot of excellent tools and resources to help us do our jobs. Well. One of those resources is open source code. In this episode we will be talking about everything open source. Let's go around the table and give introduction of today's panelists. Mars, you want to start it off?

</p>
<p><strong>Mars Jullian</p><br />
Sure. I'm Mars Julian, formerly of Netflix and currently a digital nomad. Hopefully temporarily.

</p>
<p><strong>Ryan Burgess</p><br />
We will be excited to find out where you're going Mars.

</p>
<p><strong>Jem Young</p><br />
Jem young still at Netflix.

</p>
<p><strong>Ryan Burgess</p><br />
And I'm Ryan Burgess. I am I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all in the episode, we will all take a drink. What did we decide for open source? What is our keyword contribute, contribute? So if we say the word contribute, we will all take a drink. All right, well, let's get started. I kind of figured one thing that we should start with is, how do you define open source? Because I think you can say it in many different ways. But how do you each think of open source?

</p>
<p><strong>Mars Jullian</p><br />
I mean, I think a lot of times open source projects are, you know, tools, obviously, like we've talked about before that are useful for certain tasks and then shared with the world at its most basic without sort of like any of the logistical components to it is sort of sharing something that you've made and find useful.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, I like that point of being like the sharing aspect because it's like you're almost you're just making it publicly accessible to anyone. wants to use it and do something with.

</p>
<p><strong>Mars Jullian</p><br />
But what I think the like official definition lacks is the aspect of community around it as well.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, actually, that's a good point too. To me open source typically means community, there's usually usually multiple people contributing do we do does that count as a key word is yours doesn't have to be multiple people, it could just be one person saying, Hey, this is open to the world to us?

</p>
<p><strong>Mars Jullian</p><br />
Well, I think there's also a difference between something that's just free, and people that sort of just take it and use it. Whereas open source when a product is open source, sort of as an inviting collaboration.

</p>
<p><strong>Ryan Burgess</p><br />
Alright, so we've kind of defined roughly what open source is, what are some of the benefits of open source like I think we covered a little bit there in the sense that it's, you know, accessible to anyone to use open for the world. But what are some other reasons to use open source

</p>
<p><strong>Jem Young</p><br />
trusts, you have more people just looking at the code. So you're not the most qualified person in the world generally, even if you are it doesn't hurt to have other people looking at it?

</p>
<p><strong>Mars Jullian</p><br />
I think also to just, I mean, I don't know if this is true in other sort of disciplines of engineering, but for front end, it definitely feels like, hey, this problem feels familiar or at least feels like someone else could have solved this previously, can we take advantage of someone else's work? That sounds a little, a little opportunistic, but I just mean, can we sort of leverage someone else's solution to this for our use case, because why duplicate work when as a community for front end, we like to share what we do a lot of the time,

</p>
<p><strong>Ryan Burgess</p><br />
like, why reinvent the wheel? Yeah. And also, I think, like, to Jim's point of like the trust side, it's like reliable, it's, you know, if there's a bug someone else may have found it before you and fixed it, which is great, too. So it's like you have an army of people that are constantly iterating and changing things, which could be a bit downside, I guess that there could be breaking changes, but also people are catching and fixing things as well.

</p>
<p><strong>Jem Young</p><br />
You need you need like robust rules around open source. So you can see like any Anybody can submit a pull requests, and you just accept them. Most of the big projects that we use and have heard of are pretty rigorous in there and how they're maintained and rules around submitting prs. And like all these other things. And just I know, front end, happy hour, but there are lots of open source projects that we'll use like Linux. Yeah. is like one of the longest running ones. Open SSL, open SSL. Yeah, yeah. Um, so it's, and those I would say, like, are not damn community, but it's a very different community from what we think of when we think like react or Angular or something like Yeah, but yeah, all fascinating. Um, another benefit of open sources that you have multiple people who have different use cases. So it's possible to come like so myopic on one topic that are one like area of your software. Like I wanted to do this, but someone comes in like, well, it could do this. If we just tweak this, you're like, Oh, wow. Now it's useful for 30 people instead of just one. That's like a pretty powerful use case for open source. Honestly to me, like anytime I get built small little libraries and tools for development that I've found useful. And I'll just throw it up on GitHub. Even

</p>
<p><strong>Ryan Burgess</p><br />
if one person in the world is like, Damn, that just saved me like five minutes. Awesome. Like, to me, I'm like, Well, I created it for my own use case. And if someone else can use it, great, that kind of feels really cool.

</p>
<p><strong>Mars Jullian</p><br />
Now, I think even beyond that, thinking about like, Oh, yeah, we sort of use these things for, for things we thought we wanted to implement, if that makes sense. Like for your use cases, like another use case on top of an open source project that might already exist, but there's also stuff that you're like, Oh, I didn't even think to do that. It's so cool. That's murder tool. That helps, you know, for example, like all of the dark the tools that help, you know, generate documentation from comments and code, that's not something that like immediately pops out to me like, Oh, we absolutely need that. But because someone else is doing it and even like elevates the the rest of the work that we're doing because someone else thought of it first and is sharing it with the rest of the community.

</p>
<p><strong>Jem Young</p><br />
Also, speaking of sharing, like sharing your knowledge is a great way. It's like I Don't know Mars, you know a ton about detailed browser performance something and you wrote some library like extract that data. I can learn from you by reading your code, and like picking up what you've learned versus talk or something, which is good, but it's not the same as seeing how you implemented something step by step, which I found pretty useful. Should we On the flip side,

</p>
<p><strong>Mars Jullian</p><br />
also talk about what the drawbacks, tokens? Yes,

</p>
<p><strong>Ryan Burgess</p><br />
absolutely. I think there are some drawbacks. I'm curious Mars, since you brought it up. What are what are your drawbacks?

</p>
<p><strong>Mars Jullian</p><br />
Well, I think I'm a gem kind of touched on it before in terms of like having rigorous rules for the like, how the product is maintained, and how people contribute back to it. Cheers. Cheers. Cheers. It's like having rigorous rules in terms of how its maintained is pretty important. Like open SSL, for example, is a good is a good example of an open source project that had a pretty large flaw like a security flaw. And then also, I can't remember exactly which NPM modules but you know, some of those that relied on left Pat. Oh, yeah. So I mean, you just so Sometimes with open source, you kind of take for granted that this is a thing that does the job I want it to do. But sometimes you're not looking closely enough to because there aren't established rules and practices. There is that trust and sometimes things kind of sneak in. When you don't expect them to

</p>
<p><strong>Jem Young</p><br />
say a misplaced confidence. Is there a better word for that? But you're like, Oh, it's open source. So naturally open SSL is a good example. It's secure. Because obviously, someone's looking at it. You're like, oh, who? People people are looking at it. Obviously, somebody is verifying it, and it could lead you down some bad paths. You're like, Oh, this has been started on GitHub for 10,000 people. Obviously, it's a good it's the best implementation. And that may not be true at all. It may be like wildly insecure, and nobody's actually looking at it. Right.

</p>
<p><strong>Ryan Burgess</p><br />
I think another downside to it too, is that companies can end up making money off of this as well. I think that can be I it's kind of this weird gray area is like you are allowed to use this software, and companies are making something with it. And so there's this kind of weird balance where it's like, how does that person who maybe wrote something for free? Did? Do they get some royalty or get paid for it? I know there's been a lot of things brought up nowadays of like, how does someone for doing open source work get paid? I think that's an interesting aspect that sometimes I think people could get taken advantage of as well.

</p>
<p><strong>Mars Jullian</p><br />
I think on the maintainer side to beyond the compensation point, like there there sometimes can be an impatience on the the side of those, we're using open source projects, not realizing sort of the open source project might it's not there. It's not necessarily their day job. And it's open source for a reason. So that's collaborative and sort of then the community relies on CIL relies on one person to maintain it in addition to sort of all of their other responsibilities. So I think it could be quite taxing depending on also the

</p>
<p><strong>Ryan Burgess</p><br />
success of the project. Oh, absolutely. Because Yeah, you're getting all these issues or questions and maybe that's not even the direction you want to I think that can be as well as sometimes you've built a library or two Cool in a way that you're like, cool, I've built it, this is the way that was built, and then other people want it to extend or want it to grow. And you may not have the time or even see the future of that you're like, yeah, that's not really my intent

</p>
<p><strong>Jem Young</p><br />
there. That's a great example there. There's like, a lot of people, especially recently that get burnt out on open source, because they're like, people are hostile. And their PR is like, Hey, I added, I don't know, commas all that have your, your function parameters. I don't know what you can do. But someone's like, no, and then they get really angry about it. Like I spent all this time doing this work. And it's like, well, no one asked you to do that. But that's a good point where a lot of people like if you develop a library, Ryan, you give back to the community just sort of sake of being a good person. And then someone's like, actually, I'm gonna fix all this stuff. You're like, cool. I don't think I'm gonna merge sex. I don't actually know what you're doing and I don't have time to figure out what you're doing. And then they get really mad about it. You're like, this isn't my primary job. I did it because it's my heart. And then someone's hostile and mean about it. It makes you not want to give back to the community and there's been so much any examples of that, to the point where it's either people get burnt down, they're like, whatever, I quit, I'm gonna give this someone else or they're very hostile to the users. And they're just like this is my project is by way of the highway, which I, I get, I get why people get like that you're just like, No, I'm not going to take prs anymore because I'm the one that knows what they're doing. It's kind of sad, though, because it kind of kills open source, in that we should all be better about in the community about this.

</p>
<p><strong>Mars Jullian</p><br />
Yeah. And I think maybe that goes to, you know, just a point of like, it's not people don't want to give back, it's that maybe they just don't have the context. So from the maintainer side, it's a lot of work to do that context sharing. But you know, like having more rigorous practices, you know, sort of just like this is the way an open source project, which kind of goes against open source in and of itself. It's meant to be kind of freeform and collaborative and like, Hey, we now we didn't standards for open source, but it might just help, you know, on the maintainer side, I think it was Henry

</p>
<p><strong>Jem Young</p><br />
Zhu Zhu

</p>
<p><strong>Mars Jullian</p><br />
Yeah, maintainer of the Babel JS project, who gave a talk at react rally things last year. Sort of about sort of the the human side to open source was sort of really what it came down to.

</p>
<p><strong>Ryan Burgess</p><br />
That was a really good talk to you. Because he spent all I mean a large portion of his time, adding features maintaining, building a tool that a lot of us really, really benefit from. And I think he shared some really good insights. And you could really see like, feel the empathy on the other side of someone who this is, a lot of their time, that's like, almost a full time job is supporting this open source project.

</p>
<p><strong>Jem Young</p><br />
Somebody is just like, what's on really software and you like it, and it's not working the way you want or something. Part of its like, you know, the person who created it doesn't owe you anything, like they release it for free. You are free to fork it and do whatever you want. Exactly. And I think people are just like, ah, how dare they not respond to my PR within an hour or something like that? And it's just like, we forgotten they, they're like an artist that gave this thing back to the world and they don't owe you anything back. On the other hand, what if there's someone says, we'll take lodash very Very, very popular. But let's say there's a huge security flaw. And you submit a PR like, hey, this security flaw I put on Twitter. They're like, cool, we'll get to it when we get to it, like, what's the responsibility, then? It's a very, very popular library, but they're not getting paid necessarily maintain it. Yeah, that's tough

</p>
<p><strong>Ryan Burgess</p><br />
is that more important than adding a new feature, probably like a security hole, like you almost feel more responsibility that you need to go back. And especially if someone's fixed that like maybe it's you put more priority on going and reading that PR and then merging it in. But it kind of goes to the same point, if this is someone needs to take the time to do that, that is their time, and that they may not have the time to look at it. And so it's not really bad on them. But I guess the security hole is probably more important, but it

</p>
<p><strong>Jem Young</p><br />
comes down to the downside of open source is you tend it tends to be a popularity contest because of the nature of software and it's being long lived. I'm not going to use Mars. One off UI library that she made her free time. Because without like a big community behind it, there's no guarantee anybody's gonna maintain that a long run. So if I'm a company, I'm not going to top this one off framework, because they don't owe you anything, and they don't have to fix anything they don't have to maintain in the long run, I don't

</p>
<p><strong>Mars Jullian</p><br />
think so that's a responsibility, sort of the person using the open source to like we're talking about the responsibilities of the maintainers. But also, when you're incorporating a new open source, whether it be like a small NPM module or something larger, like react, for example, like one of the you have to do your due diligence as well, sort of like one of the first things you look at is like how adopted like widely adopted is this? What are their practices for maintenance, sort of, like, what is a readme look like? So I think that there's responsibility on both sides. That, I think yes, the, you know, the maintainers do need to be responsible for things like security incidents, but also on our side, we need to, you know, we need to do our due diligence as well and do the research, like, is this something that we really want to bring into our code base, not does it do the job, but in addition, is it maintained, can we add to it later, if we want To sort of like what's what's the like, you know, contract there for the interaction.

</p>
<p><strong>Ryan Burgess</p><br />
I actually think it's more ownership on the person choosing to use open source like I honestly believe that that is your job to really make that decision. And even making a decision to use something like react or something like React Native it to me is your job to really dig in and think about, is this the best thing for us in our project? And think about those things, right? Well, what happens if Facebook just completely dropped support for all this? Like, what happens? I mean, okay, well, that could happen, and maybe not, hopefully, someone else would pick it up or, but these are things you have to think about long term and that not could be a huge deal breaker to using open source software.

</p>
<p><strong>Mars Jullian</p><br />
React seems like a very specific like a very well, not the only example but kind of a special case and that it is backed by a company. So we have good points, whereas there are other like large open source projects like Babel For example, which is widely adopted and actually enabled a ton of innovation in the front end community that wasn't backed by a company. So it's, it's, it goes back to that. And I think there's like the curse of popularity on the maintainer side. But also, you know, on the user side, too, is like figuring out sort of like, Where is this coming from? is a good question.

</p>
<p><strong>Ryan Burgess</p><br />
Even the most popular or backed by company, there's still risk. So you still have to think about the pros and cons of using open source.

</p>
<p><strong>Mars Jullian</p><br />
That's fair. Yeah. Even backed by companies are still risky.

</p>
<p><strong>Jem Young</p><br />
I mean, remember, was two years ago, three years ago, when react was gentle changes license, okay. You can use react, but it can't be any direct competitor Facebook, so you can't build a social network using the React library. And then it was, that was like really big. I know, lots of companies evaluated, should we keep using react if they're going to change their license, but that's the thing about open source is they can change it anytime they want. Because they don't owe you anything. You're not paying for anything. So they won't change from MIT to like, some proprietary license. They can do that. And then you're like Well, I've built years of expertise and my billion dollar company on this software that I can no longer use the A you might have to rewrite. And yeah, I think completely brand new imagine just swapping out a whole framework. That would be insane. That's a pretty serious downside of open source. Yeah.

</p>
<p><strong>Mars Jullian</p><br />
So good. We're talking a lot about the drawbacks, but I still think the benefits outweigh them. Absolutely.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, I think so. I think there's a lot of benefits. And I think it is important, but I'm also interested to know, you know, we talked about being a contributor. Cheers, cheers. Do you think it's a requirement for engineers to to help out with open source work? Oftentimes, I've heard it in the aspect of interviewing or showing your work is that you need to have like a GitHub profile and it has to have all this work done. And to me, I'm curious on both your points. I don't even want to answer this question right off the bat. I'm already like wanting to jump in, but I'll let you guys jump in first.

</p>
<p><strong>Mars Jullian</p><br />
I don't know requirements seems it seems difficult, I think as a member of the community, it's important to have empathy for those who are doing the open source, if you are not also contributing back to it. Cheers, cheers. But it's hard because you have to put that requirement as an engineer in the context of the work that you're already doing. So potentially, if you're doing a sort of a side project, maybe there is a requirement. So you see an issue, maybe you should think twice about complaining. And think first about, like, giving back to it, that was just keyword good. But when you do your day to day job, I think that you will have to put that in the context of what you're doing and also the job that you're performing. Because a lot of times, it really depends sort of on the the way the company views that and how sort of your deliverable are structured and evaluated, which is tough. I think that companies should be better about allowing time to give back to open source but a lot of them currently, it feels like do not just like from having talked to people and and that kind of thing. It's sort of like there's no tolerance for Oh, our timeline is now two to three days longer because it's open source. project, you know, we're getting back to it or we're waiting for a pull request or something to that effect.

</p>
<p><strong>Jem Young</p><br />
I want to touch on that point later about what companies should do and like the state of things and open source because that's a really good point with is it required for an engineer to work on open source software? Absolutely not. I think that's ludicrous. We all have things we're better at. Well, things were we're not as passionate about. My passion is not particularly open source. Like I don't, you could check my GitHub, I don't really post a lot of things. Let's have a library that I was really like, rather

</p>
<p><strong>Mars Jullian</p><br />
say, like, open source and like a specific project could be different.

</p>
<p><strong>Jem Young</p><br />
Yeah. Like, I'll release some stuff I'm working on but it's not useful. Anybody but does it open source? Yes. But, uh, no, I think I've seen companies have requirements like, Oh, do you work in open source? What are the projects, you should have at least three or something? I'm like, That's ridiculous. For me, I like to give talks, that's my way of giving back communities giving talks, educating people giving a workshop or something like that. We all have different strengths. Some people are great at writing blog posts, like really, really strong blog posts that are just as good as giving back to the community. Some people good open source Some people, some people sit around and drink and record it on a pot. Some people have podcasts and just bums who do nothing. Right. Talk about open source. Yeah, talk about what we should be doing. But I think there are different types of giving back to the community. I do think you should give back in some way. But sometimes it's just mentorship sometimes just like, on Twitter, you're just like really honest. And you'll respond to people and give them advice and stuff like that. That's giving back to I,

</p>
<p><strong>Ryan Burgess</p><br />
I think it'd be a one to one to is like, we're talking like, open source, giving talk or workshop. Those touch a lot of people but it could literally be that you're just helping mentor someone who's just starting out or what doesn't matter, but that's like a one to one. And you are still giving back. It's not shown to the world on your GitHub that you've done this and that that shouldn't matter. To your point gem, kind of touching on the company aspect. I'm curious like obviously us working at Netflix. We know we have leveraged open source work, but we've also open source some of our own work. Is there a process to decide if you should use an open source library or not? Have you experienced that in companies where you're thinking about it? Are you able to even open source work to like, I think that also could be a company policy against open sourcing

</p>
<p><strong>Jem Young</p><br />
code. So the first part is, we I think, personally, like we all at this table have worked on and talk about open sourcing something or another. It's a lot of work. It is so much work to develop a library that you're building for your company, and then saying, like, I'm going to open source it either. Generally you start with the intent of I'm going to open sources later or you open sources a little bit later, which is much, much more. It's so much work. I challenge anybody out there work right now, like, pick something you're working on and say like I'm an open source and then get the readme you have to like take out all your company's specific logic. It's so so much work. I don't. I understand why companies don't open source things. That being said, We do open source some things at Netflix, we're not as strong in the UI open source, but we have a lot of strong projects, Zul Spinnaker, Falco, where there's a ton of stuff that other teams are doing.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, chaos monkey chaos monkey. That's a pretty famous one. But I think those were built with the intent of open sourcing at some point. And it is, it's like not a zero amount of time that you don't have to maintain these things when I think that too is like even when I've thought about it from the lens of Netflix, and when we've talked about open source, like even something like fall core and some of the conversations we've had internally, it's even a higher bar when you put it under the umbrella of a company. So like Netflix has their open source libraries. And if you want to open source something there and you're putting under the umbrella of that, now you really have to maintain it. You can't just throw it out there. I think it's even worse than being under a just an individual. I can't think of it if if we're creating something in gem you you built some cool swiping language or library That's like a cool UI pattern. And you're like, Hey, I would really I think we should open sources is really helpful and like it helped us, I might be more apt to say, you can do that, rip out the Netflix specific logic and share it, but maybe you should be the maintainer, because it is almost harder for a company, if they put it out there. I feel like the bar is even higher for to make sure that they are maintaining and following up on issues and be that comes a huge tax to accompany

</p>
<p><strong>Mars Jullian</p><br />
Well, it is huge. I think if you take react as an example, they've built a whole team around it. And not every company has the luxury of being like, we're going to build a team that primarily builds up and source I think, like react is very well adopted. So it kind of needed that behind it. But there are sort of, there have to be lots there. lots of examples. It really depends, I think on the scale on the success of the project, I'm sure

</p>
<p><strong>Ryan Burgess</p><br />
there's a lot of different processes in various companies for to the point where some companies don't even allow it like that you can open source or maybe not even use open source to like we have He really touched on that. But like, there's times where companies will be like, Nope, can't use open source, there could be security holes, there could be a missing left pad like, you know, NPM module like you just don't know. And so there might be even companies that are almost completely against using it too.

</p>
<p><strong>Jem Young</p><br />
So that's a that's a good question. What do companies owe the open source community? Like? I think we can ask question, does your company use open source software? answer's yes, every company in the world use open source software to some degree, even if it's from like, curl, or something like that, which I believe is pretty sure is open source. Like we we all at some point, use some of their software, probably using Linux or get or something like that. But like, what are companies Oh, giving back to that? Because we said it's if you're a tiny startup, attend people, you can't afford open source your software because one, it's your secret sauce, a lot of it, too. It's a lot of work to maintain that.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, but it could also be the forms of maybe giving back as in money wise to is like you're using this as a safe time. By using open source software, it saves you headaches from having to create that or hiring or just having your engineers great is that maybe it is giving back in a financial aspect. Or maybe it is just like you're giving back to the community to your point gem like going and talking about it to it, that might be a form of it. This is how we've leveraged it, this is how we've learned and that could help others adopt, you know, x open source library or something like that.

</p>
<p><strong>Mars Jullian</p><br />
I just I think that like the donating back i think is important, but not everyone. Not every company has the means to do that. I think just sort of having the empathy and sort of the tolerance for you know, the first question if something goes wrong with an open source project being How can I fix it as opposed to Oh, we'll just go something else, if that makes sense, like the tolerance to make time to contribute. Cheers, cheers back to that project. If there's an issue to make it work for your company. As opposed to maybe just, you know, forget, for example, and I think that there are a lot of places that don't have tolerance for for that, or empathy for that either.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, it's free in school, just use it. Why do we have to care about that, right?

</p>
<p><strong>Mars Jullian</p><br />
capitalism's? It's fine.

</p>
<p><strong>Jem Young</p><br />
So like I went into this, this topic thinking, I was gonna get a good rant about companies should work. They're all using open source software, like billion dollar companies, zero dollar companies, they're all using software everybody should be giving back. But now I having talked to both of you, and like, I don't know where I stand anymore. Because as far as like, yes, they absolutely should they're using they should give back in some way via money or contributions to yours, or something like that. But now I'm, I'm like, well, open source software is kind of a form of art. In terms of like, this is a different debate about software engineering is like art or science, whatever, but like it's a form of art where like, if I spray paint something on the wall, you don't owe me any money to necessarily say like, this is really good. I don't want to use this in my office or something like that, because like you put out in the world. But the same token like the company doesn't necessarily owe you anything, either. But what if it's really popular work of art, we say like, we should support this person because they're brilliant, and they make brilliant software that we all use. And there's plenty of people that have made them with vast majority, the software we use, which is crazy. They're so prolific and efficient at making software. But my point is, like, do companies actually owe to give back like, if you look at in terms of like their art and their supporting artists, like how much they owe in terms of that, Hmm,

</p>
<p><strong>Ryan Burgess</p><br />
that's interesting. I love that you brought up the spray painting, mural type art, something that's done in the public, and anyone can see it and enjoy it. And that's amazing. Where I do think that it's kind of wrong. And I've seen this happen many times in the graffiti and street art community is that companies will leverage that artwork in their ads and campaigns and not cite the artists or not have permission for that. And to me, that's where maybe it's really completely wrong. It's like, Okay, well, you're making money off of this, not citing the fact that you're so maybe using a open source library and you're like, not citing that you actually use it, or that you're, you know, not crediting where credit is due. I think that's where it becomes really, really bad. And it's like, we're making money and we're not even going to credit this artist for it. I think that's the really, really bad part or I have permission to it, which goes back to open source licensing, if it is available MIT license to be able to use and you're following those licenses. That's one thing. But if you have no right to do it, and you're using it, that kind of, I don't know, it's like kind of weird gray area, but I think it's really you should think about that as a company. And if you have the money and the means and you're stealing some artists work without crediting them that's really bad. But

</p>
<p><strong>Jem Young</p><br />
not counterpoint, but say corollary How much do companies or let's say, I agree, I think companies should if they have the means and the engineering capability and financial capability, they should give something back to the open source community in some form. However, where do you draw the line? Like, what if there's an obscure library that you use for like, you know, it's like 30 lines and saves you a lot of time. But do you owe that person some contributions or money or something? Or is it only like large software that deserves your, your, your resources? Hmm, I don't think there's a hard and fast rule. But I don't

</p>
<p><strong>Ryan Burgess</p><br />
think it matters on the size of project though either, if that 30 line code is saves me a lot of time and you know, saves our company a bunch of money because we're leveraging it. That could actually be more powerful than using some massive open source library, that thousands upon thousands of lines of code. And so maybe that one is actually more meaningful, that I would rather contribute or give money back Cheers,

</p>
<p><strong>Mars Jullian</p><br />
cheers to that point I was gonna say, I think it really depends on I think that if you're going to have to come up with some sort of like a hard and fast rule for it, it should depend on the impact of the project that you're using. Like, that's like, exactly what Ryan was saying is like, how are you put it better? How much of know how much of an impact does what you're using having what you do day to day, potentially taking into account like, you know, how is that open source project maintained to so you know, we have small open source, you know, NPM modules and large NPM modules that we use that have a large impact on what we do day to day, I think, just in general, and just taking that into account and being like, okay, I want to support this, either in terms of time, like helping maintain, and contribute. Cheers, cheers. All right, and in terms of like, monetary donations,

</p>
<p><strong>Jem Young</p><br />
so not to be contrary. But yeah, like, like mess with you. What about something like left as a perfect example, I know we need to stop bringing it up. But that's something that is so obscure, this tiny, tiny library that other things are dependent on, so when I went down, I took down everything. That's something that like you could argue is the core of a lot of Libraries, but it's also tiny and insignificant in that way too. Yeah, that

</p>
<p><strong>Ryan Burgess</p><br />
one's tough because it's almost like nobody even really knew that it existed until it was gone. And so if you contributed back to some large framework, we keep using react as an example. And it has a reference to left pad. Do I have to pay them back that? I don't know? That's super weird. I don't know how to

</p>
<p><strong>Mars Jullian</p><br />
I don't know that one. I feel like no, no offense, the left pad like it had an impact, it took down services, but left pad itself is a small library wasn't doing anything too impactful in terms of like we could have written there are

</p>
<p><strong>Ryan Burgess</p><br />
anyone could have written that NPM

</p>
<p><strong>Mars Jullian</p><br />
modules out there that like I don't know, not just left paths. I'm not picking on it. But um, you know, that exists that do things that we want them to do, but in all fairness, we are sometimes lazy and we could have written it ourselves. We're always you know, in my mind, like the impact there is minimal because we could have written it ourselves if we really wanted to the fact that a tool existed was sort of like a Yay, hooray, Mo. For whatever tasks you were trying to accomplish, but that's how I see it in that particular case.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, I think that's a fair point is that it's like you could have rewritten it. But it wasn't it was just it's already there. It's a helper function that basically just saves me a couple extra lines of code. It's already done. It's already tested, it's fine.

</p>
<p><strong>Jem Young</p><br />
Just use it. So here's what are what are both your thoughts on private companies making money from open source software? So I create some awesome graphics rendering library, you run them or start a company, it becomes a $5 billion company based on this open source software. What are your thoughts on that? Because there there are lots. I mean, it sounds like a one off example. But there are tons of companies that have open source libraries that people take contributions to, but their actual company and they their entire core is based on this library, and they make money based on the efficiency of this library, right so that they've basically made their core what they're selling. The code is out there that others can edit and change and Submit pull requests and the actual company benefits from it. Kind of what you mean? Yeah, like companies can make money off of your contribution, even though you didn't get paid in any way other than the joy of giving back to the community. It's a weird blend of capitalism in this way. Yeah. Open Source socialism.

</p>
<p><strong>Ryan Burgess</p><br />
I think that's where there again, no hard and fast rule. It's more on the company to think about how, how are they giving back to those contributors? Cheers. Maybe they're doing something maybe they're putting on a special event each year for the people to recognize their the way that they're helping them. So I don't know. Like, there's nothing written in stone. Like if I go and go to an open source library that yes, they're making money off of it, but I make some changes that help them. I mean, I'm doing that out of the goodness of my heart. It kind of goes back to that company to say, hey, like we should recognize Ryan for doing that. I don't think they're I don't think it's bad. It I also probably know, like, I know that the company is making money off of it. I guess if they're trying to hide the fact that they make money off it, that might be bad.

</p>
<p><strong>Mars Jullian</p><br />
Okay, so here's maybe a dumb question. Isn't this what the licenses are for?

</p>
<p><strong>Ryan Burgess</p><br />
To some degree? Do you do read all the fine print?

</p>
<p><strong>Mars Jullian</p><br />
No. But as I like, I'm, no it's a good point, no copyright on licenses like those were put in place for a reason. And if you as a maintainer do not agree with the way that other companies are using and profiting from your project. Could that be blocked through allies? Oh, absolutely. Yes.

</p>
<p><strong>Ryan Burgess</p><br />
So that to that point, but I think what Jen was getting at too, is the fact I could say make a company out of some software that serves up ads or whatever, and other companies pay me to use it right. And it's open source and the fact that the codes available for you, Mars to go and like, make changes and you know, open a PR and I'm like, Great I'm going to merge that well now I make money off of your contribution. contribution. Cheers.

</p>
<p><strong>Jem Young</p><br />
That's a good point of the licensing I I would say just being for myself I don't understand license that much. I know MIT probably the best one. But Apache is one there's a new there's so many versions of license and there's there's like four is a license that are one offs. I think there's like a WTF license. It's like do whatever the hell you want with this. I could care less. Sounds like my favorite license that's a good one. There was outrage when people people got offended taxis profanity voice, any of this. I think part of it is people that give back to the community if you're gonna contribute to an open source, read the license understand, they can profit from your work they and they don't owe you anything and that's just how it is kind of like she posts a picture on Instagram. They have the right to use your picture however they want because you posted it too. I would argue most people don't what free software your the free service you're using is not free after all. It's still a gray area for me. I think it depends on the community. There are some that like Gatsby, which are fantastic. And they're clearly like giving back to community and people contribute. But simultaneously, like Gatsby is also a company that wants to make money in the future. So, again, it's a gray area, I think there are some that are better than others.

</p>
<p><strong>Ryan Burgess</p><br />
But I think you said it there, too, is like, they're a great company that care about that community. And so they're giving back. And I think that's where that gray area for me is that they're recognizing and doing something I there's no, they don't have to do anything, I think to your point is they don't have to do anything. But also if they're not caring about the people that are submitting code, they then they're not going to have people that help. So it kind of goes on, you need to put some goodwill back out. Yeah, but that being said, so I'm a maintainer. Let's say I maintaining a project and it becomes fairly popular. How can I as an individual or maybe even as a Small Group, how can we start to maybe make some money for all of our work, other people are using it. And maybe companies aren't giving us money and you know, but we still need to make some money for our our work, because now it's grown to be popular. What are some ways that I could make

</p>
<p><strong>Jem Young</p><br />
money? Let's see. So you can run ads, which are ads man, I, I simultaneously don't like ads, but they also power most of the internet. So I don't option. It's an option. I know Recently, there is that controversy with people showing ads in the terminal. When you install npm install something, it shows you an ad, which is kind of gross, but it's also like they need to get paid to and they need to, like maintain the software that you're clearly using right now. So I don't know that's a great, go to patreon or GitHub, whatever their thing is called. Oh, right, GitHub. Yeah,

</p>
<p><strong>Mars Jullian</p><br />
yes, GitHub sponsor basically

</p>
<p><strong>Jem Young</p><br />
is, is a way so there's also sponsorship by company funnies where they say in the readme. It'll be like this is brought to you by x company,

</p>
<p><strong>Ryan Burgess</p><br />
which they've they've probably given money. Yeah, the gem young company has given some money. Patreon is a cool idea too, because it's, it's just another way for gives the ownership of the maintainer to say, hey, like, if you're using this, feel free to donate or give back. And I guess the same thing goes with GitHub sponsorship too.

</p>
<p><strong>Jem Young</p><br />
I I guess the only problem Patreon is like we as a as a career, we make more money than a lot of other people and similar. If you're like, 30 year software engineer, you're probably better than other 30 year olds are the same in different career fields. We don't give enough back to people so I'll use Henry zookas. He's a friend of mine, Babel maintainer, corbelli maintainer. He does not make a lot of money through Patreon or GitHub, with the number of companies in the world that use Babel, like which is almost every company now. He does not make that much he does not make as much money as he would just working for it. Company, which is kind of sad, because like, if all these companies took a portion, like a fraction, a fraction of their budget and just paid him to help maintain the software, you'd be doing very well and probably better. But we don't do that. So I don't know. Having a cop out and asking people for money is the best solution because people clearly don't do it.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, I don't, I've never really been a fan of that model, either. Because it's hard, because then it feels like you're like, Hey, give me some money. I don't like that feeling either.

</p>
<p><strong>Mars Jullian</p><br />
What also goes kind of against everything that open source stands for the that's true to not paying for the license. And so the the Patreon and the soliciting donations seems a little bit against that whole idea in the first place. If it goes from being open source to being sort of like equivalent to a patent.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, it's like pay me a little bit to use this. Right,

</p>
<p><strong>Jem Young</p><br />
exactly. Those are options. I think something as complicated as Babel, and is widely used and dependent on is Babel. It should have people that are like paid to maintain it, like we all depend on it. So there should be people that are paid to maintain it. How that should look, I don't know,

</p>
<p><strong>Mars Jullian</p><br />
right? The I think the model I've seen a lot is that companies will either buy that, like will hire those developers yeah supported by by paying those developers and salary for example. So

</p>
<p><strong>Jem Young</p><br />
I don't know, contrary opinion of it. Is it best for open source community if the companies just buy up everybody? That will not really, which is what's happening right now?

</p>
<p><strong>Ryan Burgess</p><br />
Yeah. Yeah, no, I think there's the benefit to that individual probably needs to get paid in some way. But at the same time, are they now giving up control

</p>
<p><strong>Mars Jullian</p><br />
open source software could also be supported through non monetary means sort of, we have we contribute more, you know, maybe those who are maintaining these projects don't need to, you know, be compensated nearly as much if if they're able to do other things as well. So we're like taking time off their plate.

</p>
<p><strong>Ryan Burgess</p><br />
Oh, I like that time is money.

</p>
<p><strong>Mars Jullian</p><br />
Yeah, we're taking time off their plate. They can, you know, make a living in other ways and sort of, we're all kind of it becomes crowdsourcing, more so than open sourcing which is sort of more Equally split in terms of effort.

</p>
<p><strong>Ryan Burgess</p><br />
So are there things that as engineers, who definitely use open source are the things that we can do as an individual that can help the community of open source?

</p>
<p><strong>Mars Jullian</p><br />
I think empathy is really the biggest one.

</p>
<p><strong>Ryan Burgess</p><br />
It does really well.

</p>
<p><strong>Mars Jullian</p><br />
I don't think it's only in terms of contributing. Cheers, cheers, cheers, in terms of like, finding the time to, you know, submit pull requests, or, you know, those types of things, but also just having the empathy to develop the patience for like, this is an open source project. This is kind of it takes it could take a little bit longer. So you need to have the patience to deal with the fact that there's a there's a human behind it, it doesn't happen immediately. It's not an app, you know, that sort of just having empathy for the fact that there is someone on the other side of the screen who's dealing with it and realizing that it is a process. It's, it's a community, it's kind of about the collaboration, not just the end result. I agree with all

</p>
<p><strong>Ryan Burgess</p><br />
I think one other thing too is just even simply crediting the people and just like saying, Thank you, I think that maybe kind of leans into empathy, but it's also just like saying, hey, Maurice, thanks so much for that library that saved me a lot of headaches.

</p>
<p><strong>Mars Jullian</p><br />
I like the idea of credit though, like where credit is due especially because it also raises awareness of these projects that are kind of like powering these other companies or other projects under the hood. So either someone else might find it useful you grow the community and the pool of collaborators. I like that idea.

</p>
<p><strong>Ryan Burgess</p><br />
Hmm. Well, at the end of each episode, we like to share pics of things that we found interesting want to share with our listeners. Jim what what do you have share with us this week?

</p>
<p><strong>Jem Young</p><br />
You know I have I've got a lot of good suggestions on Twitter for Valley silicon and I love that thing.

I think people are with me they're like these things are ridiculous. Why do they exist? Like does anybody need a gold plated Lamborghini now, but exists someone out there?

out there pilot so But some other people's picks this week so I can decide. My first pick is I think it might be my first amazon prime video pick. Maybe not. No, wait, I pick marvelousness maysles Yeah, maysles delightful. My pick is the boys. I would put it in the top three of all shows I've seen this year, maybe number one. I've not been to show this fast. It's just it's so so good. If you like superheroes and you like a bit of violence, just a little little violet. The voice is fantastic. It's on amazon prime video right now.

</p>
<p><strong>Ryan Burgess</p><br />
What I think did it for me. I haven't watched it yet. But I know what what really resonated with me too that the way you explained it to me a few days ago, was that if you had superpowers would you necessarily be doing them with for good? And that to me is like, Oh yeah, that's true. We always see Marvel and superhero worlds where they're doing good. And it's like really, if I had superpowers, I feel like I might take advantage of that.

</p>
<p><strong>Jem Young</p><br />
It does Yeah, it's a more pragmatic look at what people with the world will look like when people superheroes are superpowers. It's really, it's just really good. I highly recommend it. My second pick is Hamilton, the musical I just saw. I know it's been out for what, three years now. Whatever, whatever.

</p>
<p><strong>Ryan Burgess</p><br />
I've still never seen it. 

</p>
<p><strong>Jem Young</p><br />
So yeah, like, I'm just not getting around to it. If you have like, Oh, it's about time, Jim. Fantastic. One of the best musicals I've ever seen. No, the Best Musical I've ever seen, like, hands down. It's just phenomenal in many, many ways. I won't go into it. You can look up the internet, but it's worth saying

</p>
<p><strong>Ryan Burgess</p><br />
Mars would have for us.

</p>
<p><strong>Mars Jullian</p><br />
Oh, let's see I don't have any sort of like software related things today. But so I actually really love the show the new query on Netflix that that shows just kind of like a pick me up thing. But I just saw they announced they're having a new season starting November 1, where they're actually like taking query to Japan, which I'm intrigued by so I love Queer Eye, but I'm curious to see how it's gonna translate culturally. That might be interesting. I think Really, really interesting. You know, I love queer. I think they do great things. I'm also interested to see sort of like the cultural aspect of of this particular season. The second one is I just went I just got back from Portland, Oregon. And one of my ex colleagues now recommended Blue Star donuts, which I would highly recommend Voodoo Doughnuts. I think it's actually like way overrated. It's like the one you see on the list. No, it really is. I This was blasphemous only up there. I don't know like. So Blue Star donuts is really, really great. They've got good coffee. They're like brioche based donuts. And my favorite donut from them was the peanut butter and jelly donut. Which tasted like what you always think like a peanut butter and jelly sandwich. It tastes like but better. So yummy.

</p>
<p><strong>Ryan Burgess</p><br />
Awesome. And I actually have two Netflix original picks. One show that is so so so good is hyperdrive

</p>
<p><strong>Jem Young</p><br />
Yes, so good.

</p>
<p><strong>Ryan Burgess</p><br />
It's it's basically Fast and the Furious meats like ultimate beastmaster are basically A show that is taking cars and there's like massive competition

</p>
<p><strong>Mars Jullian</p><br />
it's like American Ninja Warrior for cars that's a good way to put

</p>
<p><strong>Ryan Burgess</p><br />
it I like that it's a drifting competition which with extreme obstacles such a good show I highly recommend it really cool. They only have the one season and I'm already want another season I

</p>
<p><strong>Jem Young</p><br />
I love it because I think I've always loved drifting because it's about the car control and the driver in the car and how well they understand it. It's not about money, because there's a Lamborghini Oh, the Lamborghini is the most expensive

</p>
<p><strong>Ryan Burgess</p><br />
one. Well, we don't like

</p>
<p><strong>Jem Young</p><br />
it, but there's like, you know, 1970s datsuns or something better? Not

</p>
<p><strong>Mars Jullian</p><br />
really old BMW on there, but the driver was amazing. Yep. One year old from South Africa. I think oh,

</p>
<p><strong>Ryan Burgess</p><br />
that was so cool. She was so

</p>
<p><strong>Jem Young</p><br />
good. Yeah, that's what I love about drifting because it's like it's it doesn't matter horsepower doesn't matter. Anything right? No, when you have it's about like how good you are. And that's it. Racing is definitely very different. Like money matters, but sorry.

</p>
<p><strong>Ryan Burgess</p><br />
Yeah, no, no, I think like last That you both have seen it and can add to it because I think it is such a good show. You put it in the background. It's a really good show to like, watch. It's awesome. And then there's a new original called unbelievable. It's not as exciting as hyperdrive. A lot more dark. It's a crime show about a serial rapist that the police are chasing. It's just a really interesting story. I highly recommend it. It's a short series. I don't think there's I don't think they're making more season. Before we end the episode, where can people get in touch with you Mars?

</p>
<p><strong>Mars Jullian</p><br />
I am on Twitter, but not active. Really. As Mars Josephine. I am more active on Instagram if you feel like seeing all of my photos of cats and aforementioned

</p>
<p><strong>Ryan Burgess</p><br />
donuts. Oh, I love the cat.

</p>
<p><strong>Mars Jullian</p><br />
The donuts were so good.

</p>
<p><strong>Jem Young</p><br />
Jim, I'm on Twitter at Jim young

</p>
<p><strong>Ryan Burgess</p><br />
and I'm on Twitter at @burgessdryan. I I'm also on Instagram as well. And I'm at Ryan Burgess on Instagram. Thank you all for listening today's episode make sure to subscribe to front end happy hour and whatever you like to listen to podcasts on. And you can follow us on Twitter at @frontendhh, any last words

</p>
<p><strong>Jem Young</p><br />
give money to babble on they're using right now she gives them money and have empathy.

</p>

  `;
  return transcript;
};