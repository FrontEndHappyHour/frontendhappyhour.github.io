// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. We are joined by two very, very special guests, jock febrero and Michael Paulson to speak with us about addressing performance in engineering, shock. And Michael, you want to give us a brief introduction of who you are, what you do, and what your favorite happy hour beverages. Oh, man.

</p>
<p><strong>Jacques Favreau</strong><br />
Okay, so my name is Jacques Favreau, and I'm on the web core team here at Netflix. And we do sort of the cross cutting concerns for our website teams. Things like shared libraries, best practices, but also performance both runtime but also developer performance. My favorite happy hour drink. Probably a really boring old fashion.

</p>
<p><strong>Ryan Burgess</strong><br />
That's mine too. Those are some boring will be boring together.

</p>
<p><strong>Jacques Favreau</strong><br />
I only recently discovered an old fashion. So it's actually kind of new to the scene for me new worlds and new fashion, which is kind of weird for the name. 

</p>
<p><strong>Michael Paulson</strong><br />
My name is Michael Paulson. I also work at Netflix, which makes this podcast convenient. And I work on television UI where I only focus on performance. But now with engineers, it's it's real fun. I'm from Montana. Things I like are Montana. Cold weather. And I don't like dogs even though I own a lot of dogs. I do like dogs. It's weird. It's a weird it's a weird relationship. You always think you like dogs and then you own a dog. Oh, I like the idea of dogs. I don't like dogs. You sounds like

</p>
<p><strong>Jem Young</strong><br />
you want a cat. That's what it sounds like you want but I like

</p>
<p><strong>Michael Paulson</strong><br />
the idea of cats which worries me that I might actually just like cats, you maybe it can be a cat person. And then what's your favorite happy hour, my favorite happy hour beverage. I do like beers but I've been liking wine lately. A good Pinot Noir. I like Pinot Noir,

some good, good.

Yeah. All right, sophisticated person, I can't help him.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, let's also go around and give introduction of the panelists, which really it's Jem and I. Jem? 

</p>
<p><strong>Jem Young</strong><br />
Jem Young, senior software engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all in the podcast, we will all take a drink. What did we decide today's keyword is

</p>
<p><strong>Jem Young</strong><br />
measuring,

</p>
<p><strong>Ryan Burgess</strong><br />
measuring. So if we say the word measure, measuring, we'll take a drink measurement will include that. All right? metrics. It's kind of like a form of No, that one doesn't count. Like

</p>
<p><strong>Michael Paulson</strong><br />
that's just paper. Sorry that you have bad idea.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. Well, let's get started. I'm interested to even just start this episode off is what is performance and engineering mean to each of you?

</p>
<p><strong>Michael Paulson</strong><br />
Well, performance and engineering means this Is that you don't have to reinvent the wheel every single time you wish to solve any problem, there's been thought and tools created around and processes that have been optimized to make you successful in any task you're attempting to do. Now some of us have to go and try to think ahead and make those tools. And some of us get the benefit of using those tools, I hope more often than I have the benefit of using them. And using, you know, whatever has been set up as the supervision for this day of what is popular, that there's enough infrastructure around it that I or anyone can be successful at a reasonable pace within our job, but I do not have to go read doc after doc just to use something simple.

</p>
<p><strong>Jacques Favreau</strong><br />
Okay, so for performance engineering, for me, I, I think I kind of approach it from finding sort of what matters to you as the engineer for that project or for that team or for that company. And then focusing on making that as sort of optimal experiences as possible. Both for performance within engineering itself. And that might be using well known tools that you don't have to do a lot of extra ramp up to, or making decisions that sort of lower the amount of weight that you're carrying as you as you go forward as a as an engineering team.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I agree with both of those, I would say largely, it's allowing engineers to be as efficient as possible in their job. Sometimes that is getting rid of process sometimes that's actually adding in process so that they don't commit mistakes, like Michael saying, like, mistakes that are common and build tooling around things like that. But it's mostly like, if you hired smart people, let them be smart. If they're great artists, or they're great designers or great mathematicians or something like you get out of their way and let them do that and creating this environment that makes them as efficient as possible and doing

</p>
<p><strong>Ryan Burgess</strong><br />
so I think you brought up a good point, Jasmine, I'm gonna ask you on this is what's good process in Add process because I think like you said, removing process but also adding in good process. How do you define good and bad process? Or how do you know when it's good and bad process,

</p>
<p><strong>Jem Young</strong><br />
I'll come back to the process thing later. But one thing that I've seen, it's like a good example of like, you have rules in place to prevent people from shooting yourself in the footer making mistakes that we've seen over and over and over and over again. For instance, a lot of people don't know this, but you used to be able to force push to any branch you want, as in like you couldn't disable force pushing. So I'm talking about Git. Git is a version control system, for those who don't know, and what you used to be able to do was force push, which means like, I'm going to take my branch and completely override the next branch. And that was a problem because sometimes you do need to force push sometimes on rebase or something like that. But, and there's something I'm guilty of before is you can force force Master, which is of course the main branch everybody pulls off of, which means you blow away every single everybody else's changes with your changes. So having a process in place, or like some sort of system or mechanism of control to prevent that from like shooting yourself in the foot. That's good process. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's actually well defined. It's like, really, I think you also hit on the fact that sending things in place that we've learned from like, Hey, we keep making this mistake. Let's prevent that from happening. That makes a lot of sense.

</p>
<p><strong>Michael Paulson</strong><br />
But was anyone actually pushing to master forcefully dash dash? No, verify? I can I can answer this. Yes. Okay.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I've seen it happen because I

</p>
<p><strong>Michael Paulson</strong><br />
said, gentlemen, that process not to fix No on purpose. Oh, is it old get when you mix in motion and push all the good thing? Yeah.

</p>
<p><strong>Jacques Favreau</strong><br />
So you could like to get pushed where it went over everything, or somebody thinks around a different branch and they push and it's master and they, they get it up. So having, I think, we locked it down from our side on GitHub to block force pushing to a number of branches. was a was a, I think a good process basically in the sense that like, we still have, I mean, if we really needed to we could, I think good processes also process that you can go around if you have a really good reason to do. So. I mean, if we really needed to force push master for some reason, and we were going to take the hit of having everybody at all the engineers have to deal with it. We could do it. It's not that we completely like, you know, turned it off entirely. We could, but we choose to have this sort of guardrails in place so that this class of problem that we had before, isn't isn't one, it's not in an onerous fashion. I think that's another good piece of processes that it's a, it pays off more than the not having that process costs.

</p>
<p><strong>Ryan Burgess</strong><br />
Is that process or is that safety like guardrails? I mean, arguably, yeah, I guess it That to me is like a guardrail. process might be is like, how do you deploy and like where do you create a brand For a new feature, that could be a best practice, so maybe that also helps avoid like just pushing directly to master.

</p>
<p><strong>Jem Young</strong><br />
So for process, one of the things that we did was we made everything off a pull request. So we actually our master branch can't be modified except by tooling. in a general sense. We have a develop branch that we make feature branches off of, and then merge this back into our, into our developer. And that's where all of the work happens in that process. That is more there are more steps to that, instead of just committing directly to all of your commit stack into Master, but we gain a lot more visibility as to what's happening everything gets squashed down, we get a clean history that we can work with. And so we're paying those extra steps but we get some significant benefit.

So and process is it's many things but process could be also say for instance, you come to me 3am I don't know I will be hanging out at 3am But you're just like, Jem, I got this great idea. It's gonna revolutionize everything. And I'll be like, cool, write up a doc, you know, I'll share with Ryan, my manager and he'll share with the team, then we'll discuss it, then I'll share with Reed Hastings, the CEO and like, we'll see if he approves. And like, that's process that that is something that's completely unnecessary. But sometimes, process is necessary. deployments are a good example of like, when you need processes, like, why do I need to wait for the build and the tests and all these things, I can just hit this button and deploy out to millions of users all around the world. And like, I don't see a beef with that, because I'm new at Netflix versus you've been here five years, right? Yeah, yeah. You'd be like, Well, no, I don't trust you. Yeah, I've seen things go wrong. And we have this long process like the build takes an hour or something. Because of all these checks and things we have to do, and it seems foolish but processes there to like keep you from hurting yourself because more traders engineers and people who have seen some things know that this is good process. It's better to prepare. yourself from making mistakes, but screwing up your user base to exactly.

</p>
<p><strong>Jacques Favreau</strong><br />
And I think on the topic of engineering performance, a lot of the I mean, every, every place no matter what, even if you're process averse, has process. So being consistently sort of aware or vigilant that you're taking on process or like of the processes that you have, can really assist in sort of increasing that engineering performance over time that you don't build up cruft of, well, we're just we do it this way. Because we've always done it this way. You know, that you that you're actively sort of assessing the process that you have and where you could you know, if those risks don't exist anymore, or reduce it or change it or modify it, that kind of helps keep things tuned up. Instead of building up a long list of processes that everything must go through. You should

</p>
<p><strong>Ryan Burgess</strong><br />
always be questioning Is this the right process? Can we change something can we make this easier is this efficient for For us, I think that's super important. I think it is like it's an iterative process. It's not something that's like set in stone, things change technology changes daily, especially in the front end world. I feel like there's always some new cool tool and like, documentation goes out of date, like nothing's set in stone. And so I think you have to be very flexible and really thoughtful around that process.

</p>
<p><strong>Jem Young</strong><br />
And but in to your point, like, process is good sometimes, but like, you need to challenge it, you need to have like this engineering culture, where you can challenge the process regularly and like hire people bring them in, and they just say like, hey, why do you do these things? Like why is there 20 steps to like, commit, commit something like and they should have the freedom to challenge that and if you can't defend that say, like, here's why and every step of the process, here's the reason why we have it, then it's a bad process. And if like that, that's like my simple bar is like good processes. You can explain every single step in every single reason why you do things or Oh, I did it because the guy before For me had this long process and that person had it. And in the end, no one really knows why we have 50 steps to do something, but like, it's just the way it is that that is bad process. That's bad culture. And that is not engineering performance. So to bring it all the way back after that long rambling speech actually talked about all the good, the good, bad, a good, good engineering performance culture is the ability to challenge things and not dislike shut down because like, it's my first day like that. That's terrible culture. And that's like anti engineering performance.

</p>
<p><strong>Michael Paulson</strong><br />
Isn't that just good culture in general, is the ability for one to be able to say what they think is correct.

Organization.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think you should always be able to question or give an opinion. There's tactful ways to do it. Right. Like I think there's, maybe that's a piece of process that there could be someone, you go to an extreme like there's a proper way of doing it right. But I do honestly think that a good culture fosters opinions and thoughts and challenging ideas.

</p>
<p><strong>Jacques Favreau</strong><br />
I would say like some of the largest jumps that we've had forward on the website in terms of the, either the technologies we use or how we go about things, especially in our like build systems have been because of questions or challenges from recent hires, or like, hey, what, why does this take so long? or What is this actually doing? And, you know, there could be a better way of doing this. And that kind of kicks off that that conversation, and that's spurred a lot of sort of innovation on our side.

</p>
<p><strong>Ryan Burgess</strong><br />
I often encourage engineers when they first join our team to say like, yeah, if you see something the feels weird question it ask, like, why aren't you doing this? And I'm like, often, someone just, we might have thought, yeah, we should do that. But no one's really championed it. And if it's a pain point for you raise it don't don't say that this is the norm because we will change it if it becomes valuable if we're getting more performance out of it. Why not? performance in engineering. is like a lot to do with productivity. How do you help yourself as an engineer be more productive, but also your team? Like what are ways that you can influence a team to be more productive?

</p>
<p><strong>Michael Paulson</strong><br />
I found a one of the weirdest things to be more productive one weird trick, would you say just just a mom and Utah figured out this one weird trick

</p>
<p><strong>Jacques Favreau</strong><br />
number four will shock you?

</p>
<p><strong>Ryan Burgess</strong><br />
Michael Paulson,

</p>
<p><strong>Michael Paulson</strong><br />
I think there's also what about child actors like you wouldn't believe where this child actor is today? Okay, so the thing that I find actually really helpful is writing the smallest little bit of bash script or something like that. That just takes out something that you do regularly. Just something that's so small, and then you share it like one thing I always had to do is I want to now plus 30 seconds so I could put it in one of our tools. So one of our items could expire when I refresh the page, and I had to do some debugging around that. We always have some sort of timeout. oriented, hey, I need to just have a little bit into the future. And so now, I built a little like script and share with the team where you just like press a key on your keyboard, and you have 30 plus seconds in on your clipboard of time plus now, and so are now plus 30 seconds. It's like one of those little things that you spent so much time just context switching, doing all this just stuff, just to get 30 seconds. I also

</p>
<p><strong>Ryan Burgess</strong><br />
love to is it wouldn't have been a hard bash script to write. Like, that was probably very easy for you to do. But now over time, you're actually maybe invested a little bit of time up front, but it's actually a larger investment. I also like the shared it with the team, because it might have helped you individually. But you're like no, no, I should share this out and like allow others on the team to do it. I mean, I love writing bash scripts and like anything in the terminal. I'm like, Oh, yeah, this will just make my life a little bit easier taking some steps out of my day. I'm all for it.

</p>
<p><strong>Michael Paulson</strong><br />
And then you end up with this weird switch statement like oh, I think I've gone too far to bash.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah, that has definitely happened many times.
I think also finding I mean to that kind of point, like finding the things that you do a lot, and trying to optimize those, if it's at 30 seconds to now, or you know, anything else that you're that you're doing a tremendous amount that can be both in like tasks that you do, but also in tasks that you run like in the thing in the tooling that you have or in even in the processes that you go through what of those things that you're that you're hitting a lot. I mean, you you can have some time sinks where it's, you know, I do it once a day, and it takes an hour, and that's terrible. And I wish it took less than that. But if you have something else that you do a dozen times a day, and it's an extra couple of minutes, and you can get that down to, you know, a minute or half a minute. You're looking at this like similar savings over that giant, painful thing. So trying to find If you're trying to optimize for time or speed or something like that for your, for your day, trying to find those, those places that you're actually wasting that time, even if they're in small increments if you do it enough, that's a large chunk of your

</p>
<p><strong>Ryan Burgess</strong><br />
of your time. Can you measure it?

</p>
<p><strong>Jem Young</strong><br />
Cheers, cheers. feels a little forced.

</p>
<p><strong>Ryan Burgess</strong><br />
It totally was.

</p>
<p><strong>Jem Young</strong><br />
Alright, so so hard question and this this is something this is a problem that has never been solved and be hard, if you will.

</p>
<p><strong>Michael Paulson</strong><br />
You can solve NP hard problems.

</p>
<p><strong>Jem Young</strong><br />
Darn it. What's the unsolvable?

</p>
<p><strong>Michael Paulson</strong><br />
NP complete? Oh, it just means it's non polynomial. You can you can solve it. It just

</p>
<p><strong>Jem Young</strong><br />
I forgot. You're actually really smart. Not.

</p>
<p><strong>Michael Paulson</strong><br />
Not in this universe. He also

</p>
<p><strong>Jem Young</strong><br />
NP complete. Yeah. Ah, how do you? How do you measure engineering? productivity?

</p>
<p><strong>Michael Paulson</strong><br />
Cheers. Oh, man, I didn't see that one coming, not forced. I think that's

</p>
<p><strong>Ryan Burgess</strong><br />
actually hard. I think it's a hard problem. More in the sense because it's human beings. It's like, there probably are ways that we could Like over time look at reduced meetings or time spent or whatever that is. But I think it's actually a little bit harder than measuring the performance. Cheers. In our code, I think that's a lot easier.

</p>
<p><strong>Jacques Favreau</strong><br />
Alright, so I, a few months ago, I gave a talk where I, here at Netflix actually, and I was sort of the overarching view of it was that one of the major past performance are the things that get in our ways when we don't have sort of a an aligned set of values. And this is specific to measuring chairs, chairs, measuring performance, is that if you if you don't know what you care about, or if you don't have a full list of what you care about, it's really hard to understand whether or not you're doing well. So if you actually aligning those values across A team or an organization or even a company, so that you're all working from the same sort of foundation up is like a key and probably primary step. After that, you can get on to the sort of more tangible part of finding goals that sort of map those values into something that you can

measure. And

I'm going to do it. I know it's kind of rough, because a third of that talk literally was about that word. So

</p>
<p><strong>Michael Paulson</strong><br />
quantify.

</p>
<p><strong>Jacques Favreau</strong><br />
There we go. And then the third part would be, you know, once you have those, those goals that actually take those, those values into something that you that you can quantify, to actually continuously

quantify it. Thanks, Mike.

So this is your that you're watching it over time because things do change. I think you talked to this before, a little But in technology, but also in what we have available to us, or the decisions that we made six months or a year ago may not still continue to be the right decisions for us. And if we have all those three things, sort of in line the values, goals and quantification, then then then you get a much more accurate picture and you can actually get down to measuring performance or what you carriers Cheers. I'm just gonna go Oh, I didn't see that. I can't stand it. Um, then you guys can get down to waiting to understanding how you're approaching performance and how it's changing over time. And if you if you're sort of getting further away or closer to what you what you ultimately want out of it.

</p>
<p><strong>Jem Young</strong><br />
So you're saying engineering productivity is relative to the goals and values of a particular company.

Yeah, exactly. And that and that can be you can have variation. Across not only me not company to company even but team to team. And so you know what makes sense? Or what is the most important for the web team may not be the most important thing for the TV team here at Netflix. Right? And that that's totally fine. Whether in assuming that that still serves the values that they're providing or servicing for the for the company.

Yeah, I I really like that because it opens up the kind of the freedom for engineering. One of the biggest mistakes I've seen of non technical people who, like tend to be in charge, so C level, something like that, is they measure performance by butts in seats. So it's like, if I have 200 engineers in a seat, working from nine to six, my company's flying if I had 400 that'd be twice as productive and like, yeah, we all everybody out there listening is laughing because like, we know it's not true it being an officer In a seat isn't necessarily make me more productive. I can be staring at a wall like working through a hard problem. It looks like I'm doing nothing. But like, really I'm like working out these complex problems. And then I'm like, Oh, it's actually this. And in that case, like, I spent an hour doing nothing, but I'm actually solving these really complex problems, I'm actually more productive. So like, I like I always want to throw this out at least like once or twice a year that like, people being in a seat or cheer lines of code does not equal productivity. They're not the same thing. Yeah, we need to like all companies need to drop the acid seat model. It just is it's such an easy trap, because it looks like productivity. I mean, that's tangible. like yeah,

</p>
<p><strong>Jacques Favreau</strong><br />
we had that person there

for the day. It's so easy to say like, and I mean, I don't, I think it's rather hard to escape it, right. Like you're to get past that, that like, if somebody is in the chair, they that really looks like how work looks like an activity looks like productivity and any and productivity may take on In a different, a different form and that that could be or perhaps should be. Okay.

</p>
<p><strong>Michael Paulson</strong><br />
So here's the problem that the only problem I have with that statement is that's not ubiquitously true. Because you said I agree that that all companies should drop that. I mean, in the, in the sense that it just really depends on the type of position if I was answering, that's fair, that's fair. If my ass is not in the seat, then you're not at all not being asked.

</p>
<p><strong>Ryan Burgess</strong><br />
We have mobile devices.

</p>
<p><strong>Michael Paulson</strong><br />
There's a certain set of things like someone needs to be physically air to do something. And so that's fair. In fairness, I think for a position of creating there is not a requirement of placement. Like creation takes place where the person's at not where they need are where some perceived need to be is right. That was bizarre forgetting

</p>
<p><strong>Jem Young</strong><br />
wait. No, no, but it's exactly.

</p>
<p><strong>Jacques Favreau</strong><br />
I think the the trap of it is that there is a whole set of jobs that really do need to have somebody sitting at that desk to be done. And so that for those jobs, that might be a large portion of them, that is what productivity looks like. And then it doesn't necessarily map over, across all jobs, perhaps. And I think engine software engineering is one of those. Where, I mean, I do a great amount of work at my desk, I also have done a tremendous amount of work elsewhere.

</p>
<p><strong>Ryan Burgess</strong><br />
I think another thing too is can we quantify? Or should companies quantify the productivity by the number of lines of code written or commits? Should companies be looking at that? This I bring it up? I mean, obviously, I don't agree with it. But like companies do that. That is a practice and

</p>
<p><strong>Jem Young</strong><br />
I know which company you're talking about there. There are many but uh, no. So in this case, like the fallacy of doing that is treating engineering like a pure science as in, like, input in output goes out. It's a factory, like we're hitting switches like it's a science, which it is to some degree. But the other part is also an art. And like, that'd be like quantifying like, hey, Salvador Dali, you've only produced 10 paintings this week, and we think you can do 30. Like, it doesn't work like that. And so I think like trying to quantify that by lines of code, or commits or things like that is, it's like completely wrong. It doesn't make sense. So like, any creative profession, like apply that to them, and if it doesn't, it doesn't hold up, then it doesn't make sense.

</p>
<p><strong>Michael Paulson</strong><br />
I think where you're going with that is that the reason why lines of code simply do not work is not every line of code is equivalent in value. And so that is why lines of code do not work now maybe commits maybe squashed commits. Maybe there's something to that that has more like directly related to how much value is coming through somebody. I mean, you could game the system still nonetheless, but there's probably something over a popular If you were to measure it that you could say, Hey, this is like a fast moving company, this is a slower moving company, because commits take way longer. They're stuck in kind of bureaucracy as opposed to good process. That's a slower one. This is a faster one. Maybe they hurt themselves more. So they're actually slower overall, like there's there's something probably there. There's a there there that is hard to measure. But I can see why Lanza code is stupid, because there's value there's no, there's no underlying currency. That's stable, if you will.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's almost should go the other way is like, how many lines of code Did you remove? Yeah, well done. Sir. That is very good.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I would argue the better engineers, the best engineers write the least amount of code because like, that's where bugs come from. The more code you write, the more bugs are like, that's just the simple fact. Like, that's been proven time and time again. So like the best engineer is going to solve the problem in like a few lines of code. But if you're measuring by pure you're trying to measure productivity by like committed lines of code, you're like, oh, that ball. Michael didn't do anything today. Oh, no, actually, he just saved the company million dollars and like those three lines of code, but If you measure things in those terms, then like, it looks like you didn't do anything. Cheers.

</p>
<p><strong>Jacques Favreau</strong><br />
Cheers. Alright, so I think on the lines of code, or commits or sort of measuring productivity by raw numbers, I think is really hard in code specifically, because the best code is sort of a communication. It's not only to, I mean, might be to you, because you're probably going to have to rework it at some point in the future, but also to whoever has to pick it up next. And that can either be that it's concise and saying sort of what it's, you know, it's it's very brief code, or it can be really expensive. But as long as you're actually communicating what's, what's going on and making it in a way that can be maintained in a long term, sort of situation. That at least to me, when I'm looking for through code reviews and stuff like that, that's what I'm going for, and that doesn't really map well into lines of code are a commits. I mean, you can make the 200,000 line garbage command. And you know, it won't a whole bunch of little commits that don't. That set the project back. I mean, coding has to be built. I mean, in general, most projects are built on top of the previous version of that project. And so the having to use the pieces that you built last time is a really big thing for us. And that just does not translate into into a raw number for lines of code or commits or anything of that sort of a hard nature.

</p>
<p><strong>Michael Paulson</strong><br />
So I think what one of the primary reasons why lines of code or commits or commits divided by bugs, some sort of like ratio type number, is the reason why that is largely a failure is because as an individual, I want to be looked at in a certain light I want to show that I myself have value and so I can see myself not as valuable say, you know, William over there who's crushing out all the commits and getting none of the bugs like there's things that I may or may not do. I mean, there's it enters in human vanity might be the right word and entered. Like there's things that you can't measure correctly because people will care system. Oh, dang it. I did that on pure accident,

</p>
<p><strong>Ryan Burgess</strong><br />
which I think we didn't call Jocko in the middle of desert. There was a couple so we'll take a couple drinks.

</p>
<p><strong>Michael Paulson</strong><br />
And so the hard part is, yeah, you're trying to you're, I think what it really comes down to is that you're trying to quantify a qualified measurement.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good way to get well, so

</p>
<p><strong>Jem Young</strong><br />
yeah, thank you

</p>
<p><strong>Ryan Burgess</strong><br />
by the mic,

</p>
<p><strong>Jem Young</strong><br />
drop the mic, walkway. kandra.

</p>
<p><strong>Jacques Favreau</strong><br />
Don't they cost?

</p>
<p><strong>Jem Young</strong><br />
There's probably people out there saying like, okay, you can't we agree from the smart people like we can't measure engineers productivity to yours, based on lines of code or commits or something like that. So They're thinking, well, I'll just all look at it. And I'll try to quantify the value of every single line of code they wrote, which would be like an inhuman task, but like, whatever, whatever metrics they use to do that. But everybody in this room cares about writing performing code. And I'll use a quote from Michael Paulson who like, Funny enough, like he's actually very, very, very smart. And someone I respect deeply, even though I give him crap most of the time, but it's one of my favorite quotes by engineering all the time. And he gave this talk a few months ago, but he said, there's no way to look at code and measure the performance by simply just looking at it. Like it's impossible. You can't say like, Oh, I see this, this code here, and it's really, really slow. Or it's not performance. Like there's just no way of doing that. So like in those terms, if you're saying like, Oh, your performance engineer, I want you, I want you to write performant code. I can't just look at your code and be like, he wrote 30 minutes and it's really performance. Like there's no way doing that. So ultimately, like The long winded ramble I just went on is engineering performance is about just understanding what's important, like jack said, it's about measuring. And it's about understanding the goals and the value, but it's also about just, overall,

</p>
<p><strong>Michael Paulson</strong><br />
there's a measurement. Now measurement

</p>
<p><strong>Ryan Burgess</strong><br />
is a couple.

</p>
<p><strong>Jem Young</strong><br />
No, it's about overall, like, what do you want to get done? What do you want your engineers to get done? And like that's it. Like, it's not magic. There's no formula, there's no AI, you can apply to it and be like, jack has more performance than Ryan. It's just you have to understand. Yeah, you have different roles. Again, not

</p>
<p><strong>Ryan Burgess</strong><br />
completely different lines of code. JACK has written more lines of code.

</p>
<p><strong>Jem Young</strong><br />
Here's his code Ma.

</p>
<p><strong>Ryan Burgess</strong><br />
I know that makes a lot of sense. What advice would you give other engineers like wanting to go back with their to their teams and improve the performance and productivity within their teams like what's something that they can take away maybe even individually? What what are some like tips that you could give someone to be more proud

</p>
<p><strong>Jem Young</strong><br />
I'll steal this straight from jack but understand it like ask your manager ask the people who are in charge, like, say what do you value as, as me as an engineer? What is my goal at the end of the day? And most people say, Oh, it's the build stuff or make money or get stuff out the door, like Okay, so how do you value that? Is it in terms of creating features in terms of less bugs in terms of performance? Like find out what that is? Understand, like, how that's quantified? And like, try to do things that kind of ease reduce that friction. Is that too high level to do, like

</p>
<p><strong>Ryan Burgess</strong><br />
easy? Seems solid? No, I think you can come up with some tangible things with that.

</p>
<p><strong>Michael Paulson</strong><br />
Oh, the I don't throw something in there. So I I think there's something people undervalue this one a lot and I think it's poor to undervalue it a set yourself up so that you spend the least time doing attempting to do the thing you're trying to do and so I made a lot of changes recently over the last couple years that have been very painful to do, but are now in full working. So like I use a special type of window tiling manager. So I no longer even think about where my windows are placed, like things are all placed according I don't spend this overhead of like, Oh, I got a tab through chrome Oh, I'm on Mac. So Mac doesn't you have to do the tick, not the Tat, you know, like, there's all these things that you have to build up that you have to do. So I have a universal single way in which I manage all my windows. And that's something that doesn't appear to pay off like in the immediate, but I just spend less time thinking about Windows than the average person. I also learned to type over 100 words a minute, just so I don't have to be limited by how fast my hands move. Like it's just not a thing. It's not a part of what I'm trying to do. I've even made a completely unique keyboard layout. So I'm absolutely screwed if I use somebody else's keyboard, but when I'm using mine, it's completely the best possible shortest distance I have to move my hands which is I know this is taken it for far, but I've removed all the crappy parts of just doing something, which is kind of a weird thing to do. And it's hard to measure how well that's done. But I can now move faster and think about things less and think about the problem more. And lastly, if I ever run into something that I've ran into once before, and it can be scripted, I always just scripted, like my bash profiles like 1000 lines long. And the reason why is because I've just like if I need to do, we have a version manager for TVI app that you also need to make sure that if you are running this app again, and you have the same URL, you could get a cached version. Or you could be caching images, or you could so now I just go PCR, here's your URL, and it gives me all the different command line options, everything that's already been done. So I don't worry about caching, I don't worry about all these things. And I just simply type in the URL. And so it's very, very simplified to avoid all those other things I have to think about. Now. I just don't think about anything I just simply put in a few letters in Press

</p>
<p><strong>Ryan Burgess</strong><br />
go. So it's like upfront investment. Like, that's what I heard from you there is like paying, you put in a little investment in, you know, setting up your machine the way it needs to be. But in the long run, it's gonna pay off.

</p>
<p><strong>Michael Paulson</strong><br />
Yeah, and some people may not be as motivated to learn Dvorak and customize the symbol layout and all that kind of stuff. And I don't blame you, Ah, that's, there's a cost to that, that I can never recover. But at the same time, there's benefits that I get that other people don't get, like, I'm gonna be able to use my hands likely 10 years longer than the average person. Because I simply aren't. I'm not going to get the RSI and the other things because my hands move 50% less than the average person. So then there's there's benefits that put in that are long term performance gains.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I've I don't know how many of your vim users I believe Michael is Yep, I i've shocking definitely shocking. And that's one where I feel like I've never got quite over the hump like it isn't investment like when you think back to your early days on them, Michael. It's like it It's just something that could never get over that hump. I think I got to the point where I was like, probably just as productive as I was in sublime, which to me is pretty good. Because the first little bit is like super, super painfully slow. But I never got the benefit, like I got to that point and never found I got like, over the hump, I didn't stick with it long enough that kind of In fact, I lost the commitment. I didn't put in the commitment, Michael and so I just didn't get it. But I that's kind of what made me think of that is like, sometimes it is putting that investment knowing that it will pay off later.

</p>
<p><strong>Jacques Favreau</strong><br />
I have yet to figure out how to exit vim, I just have it give me a new machine every time.

</p>
<p><strong>Michael Paulson</strong><br />
hold the power button down.

</p>
<p><strong>Ryan Burgess</strong><br />
Every time he's on the new MacBook Pros, you might have some problems too. So

</p>
<p><strong>Michael Paulson</strong><br />
the exact same thing actually happens to me when I use nano. It's just like, press Ctrl k XJ v y and you're like, I don't know how to press all those letters at once. That's impossible. My hands don't have seven fingers. Like I don't know what

</p>
<p><strong>Jem Young</strong><br />
to default on a boon to now like,

</p>
<p><strong>Michael Paulson</strong><br />
why it's not vim. I can't even use it. It's impossible.

</p>
<p><strong>Jem Young</strong><br />
So I'd say like a warning 90% 99% of people are not on Michaels level like Do not over optimize like your keyboard layout. That's probably not the biggest friction between you Yeah, more performance. Michael is at a level that most of us will never achieve. So like, I'd like i'd also want people a level so low that it's actually hard.

</p>
<p><strong>Jacques Favreau</strong><br />
Oh, no, but but pick the things that optimize what you're doing and where you are. Yeah, that's not it's not gonna be the same for Michael as it is for me. Oh, yeah. Ever. He's so

</p>
<p><strong>Michael Paulson</strong><br />
he tells like, you want to measure what you're not good at here and then solve the largest things that are slowing you down?

</p>
<p><strong>Jem Young</strong><br />
Yes. And for most people, it's not the keyboard layout. But if you just graduated from coding boot camp, the keyboard layout was probably not your biggest source of friction in becoming more performant.

</p>
<p><strong>Ryan Burgess</strong><br />
So one thing my day is a little bit different than all of yours meetings. Yeah. I mean, a lot of meetings. And I think this could apply to engineers because you're obviously in meeting sometimes or your Working on a certain project, I think something that I've learned over time and I need to hold myself accountable more to it is coming prepared for the day is like oftentimes I will sit down the night before or the morning have to look at my calendar and go like, what am I doing today? And looking at all my meetings and going, what am I contributing to this meeting? And I think oftentimes, that is I found that I'm more productive because of that. It's just like 1015 minutes, just like looking at that. And just taking a step back and thinking about it. It can go a long way. But yeah, it's just like remembering to do that is where I need to hold myself accountable.

</p>
<p><strong>Jacques Favreau</strong><br />
Not only not so much even personal advice, I mean, I think that the finding out what's important to you and then optimizing that is probably where I go with that. But on on sort of a larger level or local team level. Basically, one of the things that I've found to be really important with regards to performance, and this is true in runtime code, but definitely in sort of developer performance is finding a way to motivate it a lot of performance is actually in the shifting of the culture around performance. And it's especially true within teams and IT companies, and one of the biggest tools you can sort of wield in that in that area is a really good motivation behind it. We measured the amount of time that folks were working, we're waiting for cheers, cheers. I, I stand by that. And we so we, we looked at the amount of time that folks were spending waiting on their, their build tasks. And it turned out that even though it was in the few seconds here, and 20 seconds here, whatever, across the team of 3040 people were spending I can't remember what it was it was north of like,

</p>
<p><strong>Michael Paulson</strong><br />
a full time engineer and your talk. Yeah,

</p>
<p><strong>Jacques Favreau</strong><br />
yeah. So it was I think by the time we Yeah, you're right. It was by the time we'd done the work. After this. We were to carve out like eight hours, some total. So I think we started at 12. So the whole team was waiting for 12 hours a day on our build test. And we managed to get that down to four. And being able to bring that that data to people and say, This is why we want to spend this time, hey, we're spending 12 hours a day waiting for a build task. I really want the runway and we should work on this. And additionally, we should also continue to keep this top of mind as we as we move forward, that really helped bring around. That's a bit more of a cultural change in the sense that people can look back at that and say like, this is why we need performance. And that could be true on local tasks for for yourself. It could also be true on your web project, you know, that the impact of your users or whatever that is, but finding that motivation and bringing it to your team or your group, whatever it is. Really, that would be the thing, the thing I'd offer is that like, try and find that really crisp, crisp motivation, that that can help folks see the benefit in performance as opposed to just seeing the upfront costs.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that too. So you got the investment, and then you've got quantifying it or looking at it. Yeah, I chose the right word.

</p>
<p><strong>Jem Young</strong><br />
My I have quick advice. And this is maybe less ephemeral. This is more practical. It's a no fancy to, um, but like, just simply go walk into the office and remember that you spend probably 80, maybe 90% of your time reading code, and understanding other people's code and like we forget that we think we walk in and we code all day, which is absolutely not true. So like bias towards readability, bias towards consistency, add commas to your code, because like you have to read it later. Other people three to later. And like, just remember that when you're writing code, it's just like, imagine your future self is like really, really angry and has like this barbed wire bat and the minute that you get upset, they're gonna come after you from the future. And like write your code like that, like respect your future self respect your teammates. That to me is like an easy productivity win for any team. It doesn't matter what language you're writing it.

</p>
<p><strong>Jacques Favreau</strong><br />
readability and maintainability are the single largest predictors of continued velocity. Whoo. There you go. Wise words from Java solid. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. At the end of the each episodes, we love to share pics of things that we found interesting and would like to share with our listeners. Let's go around for today's episode and share pics gem you want to start it off?

</p>
<p><strong>Jem Young</strong><br />
Sure, I have a few pics today on my first pick, is actually from the Netflix tech talks that three of us did a few months ago, which keep coming up and keep coming up but like a good reference on. The first one is by Jacques and it's called measure the change you want to see in the world. And he says short talks about 16 minutes and he covers all the points kind of we talked about today. But it's really funny. So like, it's entertaining. Sometimes. You know the story are pretty solid about Netflix life and the troubles we have. The next one is by Michael, I totally forgot the name of your talk. But you know, it's pretty long. But that's where the his quote is about. You can't, you can't understand application performance by simply looking at the code came from, which is like still such a brilliant quote that like more people need to take the heart. It's between the two of them there, there are solid talks about just kind of engineering performance and real real life performance. My final pick little bit sideways is it's actually a writer for Bloomberg. Matt Levine. He writes a lot on finance, like primary finance, but like the guy's a poet when it comes to writing about finance. I'm just gonna read a quick excerpt of like one of my favorite articles by him. He says the essence of finance is time travel. Saving is about moving resources from the present into the future. financing is about moving resources from the future back into the present. Stock prices reflect cash flow into an infinite future. Like I mean, it's just poetry but it's about some something really boring but he just like illuminates financial matters like so. Well. If you ever see his name on article it's worth reading like Absolutely.

</p>
<p><strong>Michael Paulson</strong><br />
say his name again.

</p>
<p><strong>Jem Young</strong><br />
Matt Levine, Bluebird.

</p>
<p><strong>Ryan Burgess</strong><br />
Michael, what do you have for our listeners?

</p>
<p><strong>Michael Paulson</strong><br />
So I came in unprepared for the so called picks. topic. Sick. You know, I was my wife always said it says it sucks to suck. But let's see. So for as far as picks go, I'd say that something that I have thoroughly enjoyed as of recent is being on the other side of fatherhood. I know that's kind of a weird thing to pick. But we've all we all grew up with or without a father, but we had a father at some point like you might have crazy science has recently happened, which I don't think it has. You pretty much had to have a dad at some point and so growing Personally without a present bad, and being able to be on the other side, like that's just something that I've been diving more and more into and realizing things that I will never understand from one side, but I can understand from another perspective, and there's just something really awesome about that. So if you have, obviously a kid in your life, it's a good choice to invest more time than you think it's worth, like, the time doesn't feel good now, but it does feel good retrospectively. And the second thing is, I really enjoy investing time into live stuff. Jem's laughing but if you ever I'd say, especially since we're This is a large engineering, or primarily engineering audience, is that a lot of people don't take the time to sharpen their speaking ability, not just simply performing in front of a group of people, which is giving a presentation a presentation, you prepare for you say it over and over again. You make all these slides whether they're good or bad, doesn't really matter. You give a performance you were an actor on stage and you may be bad, you may be good, that's different than attempting to practice the art of speaking. And so taking the time to have more of those in your life will benefit you long term much more than you realize at the moment. And so talking like I knew someone that every single day they would wait in a parking lot and wait till the next person came and would actually get out of their car at the same time and just speak with that person on the way to class just simply to get better at talking to strangers because they said that the number one fear they had was talking to strangers. And by the end of the semester, they were very comfortable talking to strangers like finding ways to exercise that live interaction and speaking and so that's my other pick is investing into the future via love it by a conversational arts. Also stalking people in parking lots apparently. I guess

</p>
<p><strong>Jem Young</strong><br />
that's called stocky and most Yes, don't do that.

</p>
<p><strong>Michael Paulson</strong><br />
Don't don't actually wait for the same person. bath

</p>
<p><strong>Ryan Burgess</strong><br />
dot socket. If it's a repeat person then yeah. Oh,

</p>
<p><strong>Michael Paulson</strong><br />
random people. serendipity Yes. All right.

</p>
<p><strong>Ryan Burgess</strong><br />
All right jack, what do you have for us? Jem stole mine

um, what the talks Yeah,

</p>
<p><strong>Jacques Favreau</strong><br />
I was gonna plug I was gonna just pick his talk. Oh yeah, he actually got it. Okay well I will plug I will plug the set of them we did them as a trio. And it was I think actually a pretty good lineup we had I think I went first than Michael than jemen. The I think the set of them actually speaks a lot the set of those talks speaks a lot to what we were talking about today and goes a little bit more into into depth in some of the more specific cases so they're, they're worth a watch 1.5 x speed them if you are short on time, but they're they're a lot of fun. We had a lot of fun putting together and putting it on and if you're in the area, in the in the Bay Area. Check out the Netflix tech talks. They're well worth coming down all the way to Los Gatos for which is a long haul I get it.

</p>
<p><strong>Michael Paulson</strong><br />
Well, one more thing. My wife still says as one of the funniest lines she ever heard is when Jem gets on and says something about I forget exactly what how he complements you as being the most eloquent speaker and he's like in Michaels, the most funny guy. Well, I guess I'm gonna be the good looking guy. It's my cross to bear. And it was it's still that just proves that he actually is the funniest guy.

</p>
<p><strong>Jem Young</strong><br />
person and my wife still talks about

</p>
<p><strong>Ryan Burgess</strong><br />
the funniest thing she said. Hey, was memorable. Yep. All right. I got two picks for our listeners. I have a Netflix original. called Bad Blood. I believe it came out last week. It's about the mob in Montreal, Canada. This is true. I didn't I didn't actually really know a

</p>
<p><strong>Michael Paulson</strong><br />
walk or something. What do they know?

</p>
<p><strong>Jem Young</strong><br />
don't recycle. 

</p>
<p><strong>Ryan Burgess</strong><br />
This is based off true stories. It isn't drama that is like based off some true stories. I enjoyed it. I burned through the episodes very, very quickly. It was a good show. I highly recommend it if you want to learn about the mob in Montreal. There you go. And then I'm actually going to choose a restaurant in San Francisco that actually Jem and I tried last night, which was delicious, called Robin sushi. I think it's actually just called Robin. But it's almost cost a sushi. It was delicious. Jem, anything you want to add on that?

</p>
<p><strong>Jem Young</strong><br />
It's very good, but it's very expensive.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it was a little pricey, but it was very good. All right. Before we end the episode, I want to thank our guest shock and Michael for joining us. It was a pleasure having both of you join us. Where can people get in touch with you?

</p>
<p><strong>Jacques Favreau</strong><br />
I think the best place for me is probably on Twitter. I'm at <a href="https://twitter.com/betaorbust"><a href="https://twitter.com/">@</a>betaorbust</a>, like a beta release. And I think that's that's probably reach out there. My dams are open and I check that relatively frequently.

</p>
<p><strong>Ryan Burgess</strong><br />
Michael, what do you have? Oh man, you know?

</p>
<p><strong>Michael Paulson</strong><br />
Oh, so Funny you should ask. I love doing live streaming on Twitch. So if you would like to find me You can come see me at the prime agenne Th e VA prime again pri MEAGN. TWITCH TV slash the prime Gen if you have that Amazon blue crown subscription you better give it to me, baby.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright Jem, where can people get in touch with you?

</p>
<p><strong>Jem Young</strong><br />
I am on twitter at <a href="https://twitter.com/JemYoung">@JemYoung</a>. You can also send me a message Jem @ netflix.com I am really terrible at responding to emails but I will video chat with you. I have no problem with that. I'm just a really slow typer so I'm not like Michael and 100 words, or whatever.

</p>
<p><strong>Ryan Burgess</strong><br />
Fair enough. And I'm on Twitter as well at <a href="https://twitter.com/burgessdryan">@burgessdryan</a>. Thank you all for listening today's episode, make sure to subscribe to front end happier podcasts on whatever you choose to listen to your podcasts on. And you can actually follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words

</p>
<p><strong>Jem Young</strong><br />
Fortnite sucks!

</p>
<p><strong>Ryan Burgess</strong><br />
shots fired. Love it.

</p>


  `;
  return transcript;
};