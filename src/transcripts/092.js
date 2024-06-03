// Episode 1 transcript
module.exports = function() {
  const transcript = `
  </p>
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the Front End Happy Hour podcast. Happy Holidays since it's that time of year, we've decided a good topic to discuss would be about supporting large applications over the holidays, and what the best practices are in order to make sure our customers are having hundred percent availability over the holidays. Let's go around the table and give introductions, today's panelists. Jem, you want to start it off?

</p>
<p><strong>Jem Young</strong><br /> 
</p>
<p><strong>Jem Young</strong><br />senior software engineer at Netflix 

</p>
<p><strong>Mars Jullian</strong><br />
and I Mars Julian, I'm a front end software engineer in the Bay Area and all thoughts are my own. 

</p>
<p><strong>Stacy London</strong><br /> 
Stacy London, I'm a senior front end engineer at Atlassian and all my thoughts are Mars's.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we love to choose a keyword that if it's mentioned at all in the episode, we will all take a drink. What did you decide today's keyword was?

</p>
<p><strong>All</strong><br />
Availability?

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, availability. I think I've already said it once, but it doesn't count. But from now on, if we say the word availability, we're all taking drinks. All right, let's jump right in. How important is it for each of your products that we all work on different products and companies in the Bay Area? How important is it to be relatively oppt during the holidays,

</p>
<p><strong>Stacy London</strong><br /> 
I guess like for for Bitbucket, at Atlassian it doesn't change like we don't have to be more available or less available. We were our availabilities. Like we need to be available. Be available five drinks. Everybody has five drinks.

</p>
<p><strong>Jem Young</strong><br /> 
Terrible keyword. Already

</p>
<p><strong>Stacy London</strong><br /> 
Already 

</p>
<p><strong>Mars Jullian</strong><br />
All my thoughts are available

</p>
<p><strong>Ryan Burgess</strong><br />
online During to your thoughts.

</p>
<p><strong>Stacy London</strong><br /> 
Yeah, I don't think it's any different in terms it doesn't change. But maybe we're a little bit more careful. Or recently, we started doing this process, just to try and improve some quality of stuff that's been going out. So we have this process called the chapter, the chapter process. And we lovingly say, we call it Chapa. Like it was basically having a discussion about some of the changes that are going out with some of the leadership just to make sure that everyone's like, Okay, that sounds good, you know, thoroughly tested thoroughly, made sure that this is, you know, robust and monitored and has metrics and analytics and all the things so that's one thing that we're doing as a more recent, I don't know that necessarily special for the holidays. 

</p>
<p><strong>Ryan Burgess</strong><br />
I was gonna ask that too, is it's it sounds like it's probably such matters all the time. So you're wanting to make sure that there's that. So this is like a new practice, not necessarily just for the holidays. 

</p>
<p><strong>Stacy London</strong><br /> 
Yeah and I know a while ago, someone had tried to kind of say like, oh, there's this really important event happening, we should have like a code freeze. And there's a lot of arguments against that actually, a lot of people push back on that saying like, oh, there's more risk, if we just like, code up for a while and like, the next release that we do is going to be massive and higher, maybe risky. And so there's quite a bit of discussion about that. So kind of try to not do that and just constantly push out every day if we can.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, I mean, I think availabil-

It's important, I think, one for two reasons, like the one like what Stacy mentioned in terms of like making sure that you have a reliable product. But also, if you think about it during the holidays, how there aren't often many engineers around to support things if things go badly. And so it's really important to make sure that things are stable like one for the consumers, but also for those who are maintaining it and the sanity of the engineers who are actually like working behind it. To sort of like acknowledge that a lot of work goes into maintaining a website and someone needs to be on call for that potentially. 

</p>
<p><strong>Ryan Burgess</strong><br />
I think for us at Netflix customers are usually okay to not have Netflix running over the holidays. 

</p>
<p><strong>Jem Young</strong><br /> 
Yeah, they're fine with it. Definitely don't

</p>
<p><strong>Stacy London</strong><br /> 
I'm not fine with that

</p>
<p><strong>Mars Jullian</strong><br />
My Netflix went down for five minutes the other day, I was not happy and it wasn't even close to the holidays this year. 

</p>
<p><strong>Jem Young</strong><br /> 
You did this to yourself by not working there! 

</p>
<p><strong>Mars Jullian</strong><br />
yeah, I left and they blacklisted.

</p>
<p><strong>Ryan Burgess</strong><br />
We actually just put Mars in downtime!

</p>
<p><strong>Mars Jullian</strong><br />
very sad.

</p>
<p><strong>Ryan Burgess</strong><br />
I agree with both what you're saying is I think it's just important to be thoughtful, you know, and what we're pushing code around. And actually at Netflix, we we do have a bit of a code freeze specifically around the holidays, to just try and be more thoughtful and mitigate any risk. It's important, I think Mars or you're getting that too is there's not known around. So there's a big failure outage. Everyone's on holidays, and that that could be really bad to try and fix something at that time. 

</p>
<p><strong>Stacy London</strong><br /> 
Does that mean that things queue up? Like do you have like a staging environments, like people that are still working and like merging stuff? Is it like does the queue get kind of excellent post freeze, 

</p>
<p><strong>Jem Young</strong><br /> 
It's really about having the right metrics in place and having the right people looking at these metrics analyzing that, then you can push, and you're fine. Because you're you have confidence in your metrics. It's when people don't have that sort of stability or idea around availability, cheers that people get like really cagey. And like I, I get people that don't want to do a code freeze and like you can queue up a lot of tasks and things like that, but it's kind of indicative of their system that they don't have any reliability on their metrics, and they don't do canaries and things like that. Which is, you know, we're we're big company, we plan for this, like, Netflix in particular. He's really really good about failing over and like, planning for the worst worst case scenario. I say, this will probably be like a massive outage or something. 

</p>
<p><strong>All</strong><br />
Oh, knock on wood. 

</p>
<p><strong>Jem Young</strong><br /> 
I don't want anybody to ruin the Irishman was four hours of fun.

</p>
<p><strong>Ryan Burgess</strong><br />
Have you watched it?

</p>
<p><strong>Stacy London</strong><br /> 
I have fun. Yeah. 

</p>
<p><strong>Mars Jullian</strong><br />
I only got like an hour.

I couldn't commit to a three hour movie.

</p>
<p><strong>Jem Young</strong><br /> 
Oh, so great. A half hour Three and a half years. Excuse me, to me there's a difference between like three because three is like okay your Lord of the Rings so you over three and a half I'm like okay what? Like what are we doing here?

</p>
<p><strong>Ryan Burgess</strong><br />
I enjoyed it. 

</p>
<p><strong>Jem Young</strong><br /> 
Really?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah

</p>
<p><strong>Jem Young</strong><br /> 
maybe we should talk 

</p>
<p><strong>Stacy London</strong><br /> 
You mentioned Canary What can you define next? Maybe a lot of people don't have the luxury of having such things. Luxury can Harry's you

</p>
<p><strong>Jem Young</strong><br /> 
say luxury?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, what is the luxury? yielded? It's

</p>
<p><strong>Mars Jullian</strong><br />
it's part of the 12 Days of Christmas.

</p>
<p><strong>Jem Young</strong><br /> 
Or whatever holiday you may celebrate

</p>
<p><strong>Ryan Burgess</strong><br />
or Hanukkah. We did just do an inclusive episodes we do.

</p>
<p><strong>Jem Young</strong><br /> 
So we say Happy holidays. Happy Holidays. Yeah. Canary is you have your production build and you have your pre production build is in the next thing that's gonna go live. You segment a certain amount of traffic, whatever percentage you want to this new build, and you watch your metrics, you watch everything, make sure nothing's going catastrophic, you're wrong. Then you have like certain confidence intervals, you say Hey this has passing their rates low. The Canary is good. It harkens back see now we're going into detail to the the old adage a canary in a coal mine because birds can smell toxic gas where humans can't and that's why they had canaries in the coal mine so that's Canary but I'm sure you know this already. All those mines in Wisconsin.

</p>
<p><strong>Stacy London</strong><br /> 
Cheese mines

</p>
<p><strong>Mars Jullian</strong><br />
limited cheese mine.

</p>
<p><strong>Ryan Burgess</strong><br />
I would definitely chicken eat your way out of that seems like a great challenge. canaries cheese mine I love it. I mean, we talk I think we've all agreed that up time specially during the holidays, anything in general, I think all of our companies need to be we're striving for being 100% available. Cheers. Cheese. What do your companies do to make sure there's roughly 100% service, especially over the holidays, jam you mentioned doing a code freeze Stacy sounds like you guys do something similar but maybe We still push code like you're still doing some, but it may be a little more rigor around should we be pushing this? Yeah,

</p>
<p><strong>Mars Jullian</strong><br />
I think also, I mean, I think we've mentioned it before, but having people on call, so that either if you have automated systems in place in order to fail over gracefully, but also when something does go wrong, you can have someone on the line sort of on call during the holidays, unfortunately, and to make sure they can restore the service is pretty important

</p>
<p><strong>Ryan Burgess</strong><br />
on call, what does that mean to be on call like, you're you just literally sitting around waiting for something to go wrong? Or does your companies have like something to paid you like, what does that look like to be on call?

</p>
<p><strong>Mars Jullian</strong><br />
I think it goes back also to like what Jeff said about having metrics like, a lot of times being on call just means you are paged based on some sort of metric that your company has deemed important. Either it's going it's probably going in the wrong direction, whether that means it's like has too much traffic or not enough traffic or whatever you're looking for. And when that metric is sort of like a threshold, it sort of pages, the on call for the engineer who's responsible for that service. Paige I mean like, text phone call slack like a bird like literally a barrage of messages like no matter what time of day, and I think a lot of times on call can be scary, but it's really about triage and the problem, it's not necessarily about fixing it. So you just kind of look dig into sort of what triggered the issue and what else might be going on around it. Like what other contexts Do you have and you get out of bed, whatever time of day, it is, when you you start to sort of like engage other people who might be able to help to, or at least that's the way I've experienced on call. So if there are other perspectives, that would be good to hear that as well. Yeah, I think that's a nice like more like a sophisticated on call where it is based on like, having tooling measuring something. So like your API calls, there was the response time for API calls is you know, reaching, you know, going higher and higher than a particular threshold and then then it starts automated alerting through tooling. So like, we use ops Genie so like that will start sending the alerts out and you have an ops Genie app on your phone and then you Get your page for that. And then yeah, it's about triage. And then for us, especially, it's really like, trying to figure out, you know, how many customers are affected? What's the like, are we getting tons of support calls is the rate of rate of support calls going really high, then you start escalating it to like different tiers of issues like a sub one sub zeros have to have that kind of thing. So there's all these factors that go into like how severe something is, and then based on that is like how you approach fixing it either you like, Oh, it's, it's something that's easily fixable and deployed fast. But most of the time, it's like, oh, the prior deploy was great. So let's just roll back. And using having tooling that makes it really easy to roll back to a prior release instantaneously, and then being able to fix quote, fix, but just basically, make sure make sure no customers are affected anymore, and then figure out really what happened,

</p>
<p><strong>Ryan Burgess</strong><br />
like that ability to roll back to because like, especially like Mars, getting woken up at 2am. It's like that does happen. I'm sure it definitely has And and you don't necessarily have the ability to pull all the right people into fix something like that. And that takes time. Not even even even if you were all in the office, it still takes time for someone to like actually go and fix that. And so just having that ability to roll back and say, yeah, that sucks that we have to roll back to the previous state. But now we can take the time to fix it appropriately. And be sure that we are shipping the right build. Oh, now, I think that's really cool.

</p>
<p><strong>Jem Young</strong><br /> 
I think the important note about being on call and rollbacks like that's one make sure you can roll back. There are plenty of companies that don't have the ability. They're like, yeah, once it's out, it's out there is no rolling back. That's a bad idea. But so if you can structure your system and not do that, the second one is practice doing that by the number of threads you see on Reddit about like some catastrophic data failure or something like that. You're like, Oh, we have off site backups and all that, but no one actually ever verified that they were working or that they can actually roll back and back up there. date and stuff like that. You have to practice it and rehearse it. Because like, Who cares? You can roll back if no one actually knows how to do it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's like it's like testing the systems as Yeah,

</p>
<p><strong>Jem Young</strong><br /> 
it's part of like part of your on call ability. That's why. here's a, here's a pro tip for career advice. If you want to make a lot of money, Site Reliability engineers are some of the highest paid engineers out there. Because it's a, it's a stupid hard job. You have to have such a deep technical knowledge, but also know how to like, interface, a lot of teams, but they get paid a lot because they make sure Netflix and Facebook and Google and Amazon like all these companies stay up and running. And there's always for every big tech company you make up there's an entire team of people that are like awake all the time. So when a team's awake, making sure the site's up. And they rehearse, like, what happens if this cluster goes out or what happens? The server goes down, the hard drive fails, stuff like that.

</p>
<p><strong>Mars Jullian</strong><br />
And that goes back also like to say earlier about, like failing backwards. Failing gracefully is like practicing chaos engineering. I think that's exactly what you're talking about. is like taking the time. To practice like what what happens when you know one of your your region's is completely taken down and that kind of thing. So for anyone who doesn't know about chaos engineering, it's just sort of like insert called, there's a system called chaos monkeys, where it's sort of just inserts chaos into your system and sort of see sees as our response. And then from that you can learn about, like what areas need fixing going forward. It's also I think, it'd be interesting to mention, too, that like we've been talking about code freezes, but some companies don't have the ability to rollback. But there's also if you have a code freeze, you also need to have like a good process for fixing forward because sometimes a rollback is not even a good option, even when you have the ability to say there's like a critical feature that went out and you really need to keep it there for that specific amount of time. You do need to be able to fix for it as well and having a good process for notifying it and breaking the code freeze is pretty important in that scenario, like not fixing or doing something incredibly quick because even like your deploy process might take I don't know hopefully you know, if your normal deploy process it has, you know, running all these like tests unit tests and integration tests, visual regression testing, it's doing all these things I could take like, an hour to run through all those things for a tiny little code change, like, you have to kind of figure out is your company, okay, making a call to go faster than that? bypasses things to get the fix up. So you know, it's gonna fix something for a customer or you're like, No, we want those quality checks to be there. You know, is that okay for your process to get fast?

</p>
<p><strong>Ryan Burgess</strong><br />
A lot of it sounds like in summary is a lot of judgment, like each of these cases, like you're having to make a judgment call on the fly. Is it better to hotfixes better to roll back? Is it better to just say, Hey, this is it is impacting customers, but it's a fairly small percentage. And it's risky that we push something because that could literally be the answer is like, we need to look at this when everyone's in the office. Yes, it sucks that this person is in the state. Maybe customer support can remove them from that state. But I think there's it all comes down to even when you are on calls, like Making just informed decisions in the moment. And that doesn't necessarily always mean fixing it

</p>
<p><strong>Jem Young</strong><br /> 
can What do you define hot fix for those not familiar hot.

</p>
<p><strong>Mars Jullian</strong><br />
It's hot, super hot.

Oh, I mean, I just typically call it like fixing forward, it's typically like a really well scoped, very small change that is meant to only address the problem that you're experiencing, because anything outside of that introduces risk into sort of features that are out in the wild. So I mean, typically, in my mind, the hotfix is like it happens quickly. And it's very small in scope. And those who are deploying it are there to support that fix going forward until it is out and monitor whatever they need to monitor once it's out and it I think the hot is it relates to the speed. Mostly Yes, people are typically scrambling, but also the scope is very small. Yeah, I think even get more specific than that. It means like, by by making the scope small means you're let's say you have a depending on what kind of deployment flow or get flow Whatever process that you follow, maybe your master branch is what gets deployed to production, you have a staging branch or something for a different environment. hotfix could mean I'm making a branch off of master. And that tiny, tiny thing is the only thing that's going to go out. And then you kind of push that back down to staging. So you're not possibly accidentally bringing stuff up from staging as part of your Fix because that's like that. The scope like you want it to be incredibly tiny and really targeted,

</p>
<p><strong>Jem Young</strong><br /> 
like it should define staging to sorry, not everybody has the these concepts.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I guess staging is a good I mean, there's there can be multiple environments to that we could cover like there's, you know, maybe a test environment, QA environment. staging typically means right before you're about to ship to production, it's an environment that is maybe using production data. That is like you're making that change to make sure that this is truly going to be what looks like in production right before Going out.

</p>
<p><strong>Stacy London</strong><br /> 
Yeah, typically maybe like see a similar infrastructure similar. Like there's load balancers or stuff. That's like emulating a production environment as close as possible. And then also that you're running your build systems, at least for front end as an example, you're running Webpack, prod build, not your dev build. So you're getting assets that are the same as the assets that you would actually push out to prod. But to answer the question, like, how do we keep how do we make sure our product is working during the holidays? We don't let people touch the

</p>
<p><strong>Jem Young</strong><br /> 
like Funny enough, I think it's hard for a lot of people to accept the like, Oh, I can't push What do you mean? Like, I don't write bugs? Maybe Ryan writes books, but I don't write bugs. Not if you see my code. Oh, your code is good, but someone saw nothing for it. But but that's the idea. Check

</p>
<p><strong>Stacy London</strong><br /> 
bugs on purpose. That's true. I review, chaos monkey terrible availability. These are not my own. They're Mises.

</p>
<p><strong>Jem Young</strong><br /> 
But there's been plenty of studies by plenty of companies that show you know, there's a corner In the number of bugs and amount of code that has changed, and it's a weird thing that bugs, 90 something percent of time come from humans. So if you have an environment and you're running with little to no bugs, don't change anything, don't touch anything and you won't have any bugs. That's an easy way to keep your uptime there's still hardware failures, stuff like that. But those are fairly rare

</p>
<p><strong>Stacy London</strong><br /> 
one interesting thing for the bucket is kind of the opposite so like, I think I'm guessing Netflix traffic goes through the roof after the holidays because people have time off or they're more apt probably watching allegedly, allegedly care comments, I know. But I'm that's a guess. But for Bitbucket, or for Bitbucket, it's a little bit of the inverse because our tools used a lot by like developers, and so a lot of them are also taking holiday time off. So the traffic actually is a little lower than normal. And so it's actually one of the best times of year to do sweeping changes that are Or maybe what you might consider more risky. So last December, we swapped our entire codebase to TypeScript and refactor everything. We touched every single file in the codebase with this, but we did it because we knew like this is a quiet time. there's not very many other devs, like contributing new features. So when you're doing a massive like refactor like that, it's a little easier because it's not shifting beneath your feet constantly by like other devs on the team doing stuff. And we knew that like, traffic was a little bit lower. So the risk of like this having an issue, the scope of that would be maybe a little bit

</p>
<p><strong>Ryan Burgess</strong><br />
less. So wanted. That was like a last scene in general. It's like we're talking about these are tools that us as developers are using. And so yeah, when developers are on holidays, the traffic is probably going down for you, which is kind of an interesting perspective on the holidays. Yeah, is like yeah, it could be peak hours for people where it is very high traffic or it could be very low. That's it. Interesting. Yeah. So it's still, you know, it's like, oh, we still need to be really available and not, you know, bring people down. But when you look at it, it's like, okay, when should we do this, like big sweeping change? Maybe this is the best time, we started to talk a little bit about this about the benefits or challenges of freezing code. In theory just means you're like, Jim, you mentioned not touching the code. And I'd be curious to know, like, what are some of the benefits and challenges that you can all think of? I mean,

</p>
<p><strong>Mars Jullian</strong><br />
to Stacey's point, like what she was just talking about, I think it's a great time to do tech that like, Yes, because there's no because there's a code freeze. And also there's typically code freezes on times when people are traveling. So there's less people in the office, it's a good it's a good time to, to take care of stuff you've been meaning to do for a while. So no one's like pushing product features on you necessarily. So you can fix a lot of things. It's also kind of a Zen moment, you know?

Sure, definitely a benefit, not a challenge. Not when you're moving thousands of files around. It's a better Have it?

</p>
<p><strong>Ryan Burgess</strong><br />
No. I think like even something like moving to TypeScript is like, wow, that does massive change, probably for the better of a lot of things in quality, but also very hard to do like underlying changes when there's a lot of people working on the code base, but also customers using Mars. I like your point about it. I mean, it's a great time to do refactoring and write tests, people, read more tests.

Write comments, comments, you

</p>
<p><strong>Jem Young</strong><br /> 
can comment your code. Yeah, like all that garbage work even like, well, I don't really have time, it's a great time to do it. But what's funny and why people kind of push back what I've seen against this code freezes or not making production changes, is they're like, well, I made this large refactor. But I don't know if it works, because they don't have any tests. They don't have any metrics, and they count on going to production, and then someone reporting it being bad as their key metric. And that's where you see people like, well, I don't really want to make any changes because we don't know what the impact would be. You should know the impact. Like if you're changing it, you should have metrics back that up and down. If you don't, then that's a problem with your infrastructure could be a good time for giving breaks to

</p>
<p><strong>Ryan Burgess</strong><br />
kind of mentioned no one's around. Well, good, like people are taking a break, which is can be very great to

</p>
<p><strong>Mars Jullian</strong><br />
know I, it's a great time to like take a break. And I don't know about everyone's offices, but I do really appreciate that the company that I work for is giving us like two weeks off. And I think that and also like at Netflix when I work there previously, like there's no explicit two weeks off, but everyone no one's around and no one's getting anything done. So like how productive Can you really be? Be very productive on

</p>
<p><strong>Ryan Burgess</strong><br />
those things where no one's interrupting you? Or you can just say, I need a break and nobody's gonna Trump that either. True?

</p>
<p><strong>Mars Jullian</strong><br />
Yes, no, definitely like it kind of it goes both ways, depending on sort of what you're doing at the time. But I think also one of the challenges of freezing code over the holidays is that like, there are people taking breaks, but then there are also people doing these massive refactors and to Jim's point about, they haven't been tested in the wild. The first push after the holidays can always be really, really stressful and depending on how you Push processes, it can be a really, really large challenge that involves a lot of rollbacks. Or it just involves a lot of like hot fixes or just kind of, we pay the price for stability in developer productivity, right when the code freeze on ends. And I think that regardless of what your processes, it's kind of just with code freezes in general across companies, that's pretty known. Yeah, we we all work for I think, very, you know, like well funded or, you know, companies that have money to buy, and pay for all this amazing tooling or build it from scratch. Like, let's say you're working, you know, for a smaller company that maybe doesn't have all that tooling, like they don't have all these monitoring tools like signal facts or data dog, I don't know, things that help you create dashboards and monitor, like, how do you as like, maybe working for a smaller company or maybe just a freelancer, like, feel confident about the code that you're about to push? When you don't have some of these awesome tools? I think there's

</p>
<p><strong>Ryan Burgess</strong><br />
a there's always ways around that like, I think you're right building infrastructure. That is like someone's got to do that, or pain for some of the tools, someone's got to pay that bill. And like, maybe this is a two person company that is building something that is just barely scratching to get this out the door versus like, Oh, I got millions of dollars spent on some software, I think there's ways that you can do whether it be leveraging some of the free tools that exist out there, like maybe you're running Google Analytics, maybe you can like tie into some of the event logging. He is like sending emails like hey, the system's down like there there are services out there that can alert you on things. I think you just have to think about it and and what are the ways to at least have some monitoring on the health of your system? I think there are ways

</p>
<p><strong>Jem Young</strong><br /> 
this is where it comes down to leadership. Oftentimes the CEO, the CTO, I like you brought the point because we we all have in Mars who knows where she works, but we the rest of us work for large tech companies who have Like sorry, error Site Reliability engineers and core teams and metrics and all these things. But like someone had to set that up, but if you're on a salt, small startup, we can't expect you to have like, an on call rotation or things like that. That's where you hope the CTO or someone like that says, like, hey, it's important. We have availability, what's the bare minimum metrics we can send? Even if it's a Perl script that's just running? Like, is your site returning? 200? Is it still up like something basic like that anybody can set up? And that's a start, then you you build off that. But I'm glad you brought that point to somebody I take for granted that we have logging, we have metrics, we have all this system that someone else before me set up and it's like, oh, yeah, of course it works. But at every company, someone has to do it, and someone has to own that. And it's not sexy, because you're not shipping any product, but it's equal. It's just as important if not more so than anything else. Anybody does. Yeah. If your products

</p>
<p><strong>Ryan Burgess</strong><br />
not up, who cares?

</p>
<p><strong>Jem Young</strong><br /> 
Right? But like, I guarantee you if we pull 200 startups we say like, oh, how many of you have like reliability? metrics you probably like, less than half, which is crazy, because we're all building this stuff, but like your side of your application doesn't work, then what's the point? And I don't we don't think about engineering in that way. We think like it serves, we ship more code, things like that. But yeah, if I can't use a siphon, like what the hell's the point?

</p>
<p><strong>Ryan Burgess</strong><br />
We kind of were talking about the benefits of using code states, you kind of even question that of like, how does it ship afterwards? That can be attacks. I think there are some challenges in general Jim hinted at is like, if you have canaries, that can really help. But I think there's a lot of even opportunity costs, maybe you're like, Oh my God, this feature is going to be game changing for our users. But you're like reluctant to ship it because it's like, ooh, we're getting close to that freeze, where you don't want to add that possible risk. But it could also be a potential upside to your users to like, I think that is like, good kind of way against each other there for those snares. Then maybe again, is also probably like, your company probably has a lot of money to invest in things like this. But if you can do feature flagging, so maybe that new super critical feature that you need out, if it's behind feature flags, and you've been able to isolate that code in a way that, you know, it's not going to execute, and cause risk for deploying it. And then you can slowly like turn it on for a segment and turn it on higher. There's no errors and people are, you know, planning or opting out, or whatever that is, that's a way to like, make that less risky like the the feature flag, that's a great suggestion, because that's fairly easy to implement. anybody, any size company can implement some sort of real time databases like this feature on or off. That way if something goes wrong, and you don't have to roll back the entire system. It's not this chaotic thing. You're like, Oh, crap. Alright, let me just turn the switch to make it false. And you're done. But I'll say this because we have to jump back to the world of, you know, maybe newer engineers or people at smaller companies. If you're an engineer saying like, Hey, I'm not confident that This change, we shouldn't apply on Fridays, don't apply on Fridays. But Friday is a terrible time. Don't do that. But I,

</p>
<p><strong>Jem Young</strong><br /> 
I remember that world. And I know if you say that as the engineer, you are the unpopular person, you're fighting against product, you're fighting against the product managers, like, I've worked on this for six months, I want to roll it out you finance CEO who promised it to some business, you're fighting all these things. And you're saying like, No, I'm fresh. I'm a professional. I don't have confidence that this won't break things. Let's not roll it out. Now. Let's wait until next week when everybody's in the office or something like that. It's a hard conversation to have. But hopefully if your company respects engineers and engineering, well, they'll be like, okay, I trust you, Stacy. I trust you more as like, Let's wait on this thing. You have to be thoughtful on how you're presenting it to because I think it's about like arguing the cases isn't just saying like, you could just say audit bad idea. Okay, well, why is it a bad idea? I think you can try and help bring people along on that case of like, what types of risk are there, maybe there's ways that you can still ship it but like trying to mitigate those risks, like almost take care of like the potential risks that it has on it, like having it on a fast property, which I think is really, really great.

</p>
<p><strong>Ryan Burgess</strong><br />
We've talked a little bit about encouraging some practices where you're like monitoring your code and the health of your systems. But are there best practices that you'd like to see more companies adopting

</p>
<p><strong>Mars Jullian</strong><br />
maybe one best practices, we sort of talked about metrics a lot. And a lot of times, like metrics for metric sake, especially if you have someone on call during a code freeze are not necessarily useful. And a lot of like, I've heard really interesting conversations around. If you have someone who's on call, if you're a company that is of that size, and has that luxury, you do have metrics that you're alerting on. Oftentimes, it's best to have them tied to business goals or business metrics, which is pretty interesting. So sometimes you're like, oh, is my website, responding with a 200 all the time like that. That's an interesting metric, but If you put that in context isn't responding with a 200 all the time, but also how many people are hitting the site. So you don't want to just alert on that unless you put it in the context of what the business actually wants to deliver to the customer. So I think that that's one thing that I've seen. Like, that's a that's an interesting conversation that not a lot of people realize. It's like, Oh, this is a metric, but it's not tied to the business at all, and why alert on it in the first place?

</p>
<p><strong>Ryan Burgess</strong><br />
Right? It's like thinking of those like critical things, too, right? It's like, if login is an important aspect of your site for people to actually access your application might be an important one. If like logins are failing at a higher rate, probably something that's more important, but something failing that nobody really cares about, or it's a very low volume, then why are we panic, you know, is that kind of you're getting up?

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, exactly. And also, there's been other situations where there have been metrics that have kind of go off the rails and you spend days chasing it down, but it actually has no like, bearing on what's actually going on in the business. Our customers. effected? Probably not. And you've spent sort of two days chasing this down and trying to mitigate the effects. And But why? So to sort of like, find the reasons why you're chasing down these issues, and not just I'm chasing down this issue, because as an engineer, I know this is a bad thing. Not as the user they're experiencing anything

</p>
<p><strong>Ryan Burgess</strong><br />
that actually makes a lot of sense, because yeah, there are some times when there's just like weird errors firing or something in the system is wrong, but it's not actually having a customer impact. And you're right, you could just be chasing this thing at 2am. When it's like, I wasn't affecting anyone. So it's really understanding, like, what's the important piece for your customers to really focus on? I like that,

</p>
<p><strong>Jem Young</strong><br /> 
because there will always be errors. It doesn't matter, there will always be some error. And if you spend your time chasing that one edge case down, you just won't get anything done. There's always someone who's using a version of Chrome that's like 30 versions back and some error like what you said Mars like fine, what's critical to your business? Build metrics around that. And then like, respond based on that. There's been enough instances where like, I'm going to buy something and I add it to the shopping cart. And I go to checkout, and it's broken. I was like, well, right there, we're coming back there. But some engineers probably like, well, the site's up. So I'm good. I'm going home. But like, is that the metric that matters? No, you're trying to sell me something. So you should make sure that process works. It's like a basic failure that has been made time and time again, it'll keep happening, the site available is key.

</p>
<p><strong>Ryan Burgess</strong><br />
That's important.

Unknown Speaker  
All right, baseline, you should be like really careful about on call and waking people up for things that are worth it. Because you can burn out your employees super fast if you are waking them up for things that are not business critical and not actually really affecting customers. If you've set the wrong thresholds, and that's a fast way to like make people very upset because they're losing sleep and they're getting woken up in the middle of the night. And that's not okay. You're not going to sustain your company if you do that. And, you know, I've advocated Parents time past jobs. And it's very, very frustrating where like, you get woken up for something, especially if you don't take steps after to make sure that you do like a review of what happened and why. And like, the bucket in the last scene you do like incident post incident response hours, and you talk about it afterwards. And you have a discussion about, like, how can we make this never happen again. And that's so important, because if you don't have that, and you're an engineer, that's like, Oh, I guess I'm just going to keep getting woken up, you know, once a week for the same thing that no one's fixing. Like that's demoralizing, and it's not a good way to run your business. So there's, there's lots of balances there to make sure you're doing the right stuff are all gonna make mistakes for continually making the same mistake over and over again, it's kind of like a failure. It's like, yeah, how can we mitigate this risk? Or how can we like fix this issue long term and I hundred percent agree with you is even the smallest like mistake or issue that happens. Let's have a discussion around that. How do we prevent that from happening again,

</p>
<p><strong>Jem Young</strong><br /> 
and I would say to that, end child tomorrow who was on call for with yours? Is that why she left Netflix? That's probably why

</p>
<p><strong>Mars Jullian</strong><br />
I'm one too many times.

</p>
<p><strong>Jem Young</strong><br /> 
But I would say everybody on your team should be on call, like every engineer at the company at some point to be on call and not because you're cool in one way people have a two in the morning, but because it enforces accountability, and the minute you are woken up at three in the morning, because some outage, you triage and say like what happened, did a push go out, which is a three in the morning, but Did something happen? Why don't we have metrics backing that who made this change? Then you as a pissed off engineer, go to the other person who made that change, like, Hey, you broke this thing. You don't have any tests or anything around it. You need to fix it, and then you're gonna hold them accountable. Because next time you're on call, you don't want the same issue and just makes everybody realize like, Hey, we should be more thoughtful about the changes we make. They're not just like Push, push on Friday fire at 430 and then we call it a day, jump on a flight to like, Whoa, too many issues. I've seen that like someone pushes and like gets on a flight.

Unknown Speaker  
One thing that I think is also important is if For those post incident reviews is to make them a little bit blameless. Try not to like, call out a single person or schrom under a boss or whatever and

</p>
<p><strong>Ryan Burgess</strong><br />
because everyone's gonna make mistakes, yeah, exactly. You don't want to be like shamed for it. Yeah, cool, let's fix that. But that person's gonna know and then also like, then just reward like, make it like a positive reinforcement thing like, oh, the team wrote, you know, X number of new tests or, and tests or whatever reward that and be like, out of this thing that happened, that was bad. We improved the quality this way. Also, like what Jim said to you kind of building empathy to fix these problems, like mitigate them. If everyone has experienced being on call the start to like, really build empathy and think about that, like, what am I What is my chain is going to do to affect someone, so I'm not waking them up in the middle of the night. But I also think being on call is another opportunity for learning a lot. Like there's been many times that I don't know exactly what the problem is, but you're quickly like Trying to debug asking a bunch of questions. You're not prepared for it. Because if you're prepared for it, why would the issue happen if you knew what it was gonna happen? And so you learn really quickly to I think it's there's a lot of benefits to it as well

</p>
<p><strong>Mars Jullian</strong><br />
and the operational knowledge that you get like, like, not just the accountability that Jim's mentioning that like the operational knowledge you can take back into your own work and be like, Hey, I know I'm gonna ship this, someone has to have context around it, not just me. Because if I hop on a plane to Hawaii at 4pm, someone's gonna have to deal with you know, whatever bugs I

</p>
<p><strong>Ryan Burgess</strong><br />
want to hop on these planes to Hawaii. At the end of each episode, we like to choose picks of things that we found interesting or we really like and would like to share with our listeners. Let's go around the table and share today's picks. Ours you want to start off

</p>
<p><strong>Mars Jullian</strong><br />
well, so the holidays are coming up. So my first pick is going to be a trashy TV show. That is a guilty

pleasure. If you would even You don't admit that you like the bachelor

franchise.

And you do secretly like the bachelor franchise. You may also like a show called love Island, which is

which is the UK virgin version of the bachelor franchise. And actually it's I think it's a little bit better. It's less dramatic. It's like more mundane.

</p>
<p><strong>Ryan Burgess</strong><br />
It's amazing. We definitely worse like you want more drama right

</p>
<p><strong>Mars Jullian</strong><br />
now you want drama, but this is like literally in one season 60 episodes with people just having random conversations. All of these people on love Island and trust me I have watched 60 episodes of love Island.

</p>
<p><strong>Ryan Burgess</strong><br />
That's why we haven't seen Mars for a bit.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, no, I've been hurting watching watching this show. So if you're into that kind of thing, I recommend it. Um, the second one is a podcast called Bay curious. So if you live here in the Bay Area, it's a podcast put on by QED which is our local NPR station and I think it's really well put together it. The topics range from really kind of trivial topics to really Deep topics so like stuff about homelessness from all the way like why the fat around jeans originated in San Francisco those types of things. My favorite one actually is like why SFO is always delayed. That is a fascinating episode if you are at all like a flight nerd like me then you might enjoy that.

</p>
<p><strong>Ryan Burgess</strong><br />
I was just thought it was the fog. No, it actually has to do with one of the runways

Unknown Speaker  
Hmm. I know. I've got a goal. there's confusion and fog at Yeah, fog around but

</p>
<p><strong>Mars Jullian</strong><br />
the runways the way they're oriented towards each other is

listen to it if you really

Unknown Speaker  
want to get onto areas. Are you being curious Baker.

</p>
<p><strong>Ryan Burgess</strong><br />
Stacy, what

Unknown Speaker  
do you have for us? I have a two music picks. The first one is dust circles by La Salle it's very, it's a little bit of a different pick. It's much more ambient. He's a composer and a producer. So it's really great for like incredibly calm coding very, very chill. Background music and the second one is luminous faces by john hopkins and Kelly Lee Owens. Both of them I think are based out of England. Both producers there's some lyrics and this probably not maybe necessarily good coding music but is it's it's a good song on the west to listen to you. So recommend that.

</p>
<p><strong>Jem Young</strong><br /> 
Gemini have. I've got three picks today. My first pick is I don't know if I want to call it a valley silicon pick. I think I will the pixel four Ah, you have the pixel four I do have the pixel four because I'm I I was a big pixel fan board pure pure Android Google. They know what they're doing going to get the latest releases all that Fortunately, I am a subscriber to Ars Technica is one of the few sites I do pay for the news because I respect their reporting. But I'm wrong. Ronnie with a co wrote an article called the pixel for overpriced, uncompetitive and out of touch and I'm like, Thank you This is exactly my sentiments on the pixel four like it's the flagship phone from one of the biggest tech companies in the world. And it's not good. It is it is like it seems like a the result of a lot of different competing teams like all trying to get their features in the like get a promotion next year. But all together it makes it completely unremarkable phone, for example, the camera which is like the highlight of any any flagship phone, you know, the iPhone is three, three cameras and all that Samsung galaxy has many cameras now. Yeah, the pixel four has the same camera as the pixel three like hardware wise, they didn't change the thing. And this is their flagship look at us phone. They included a 90 hertz refresh rate, which is awesome. But it was disabled most of the time because anything under like a certain screen brightness, you weren't getting 90 hertz. So like what's the point of adding a feature they included like a radar and always on radar chip, which is awesome because if I have my phone and it's like off, I can swipe my handle for it and it turns on Cuz cool, the radar is always on. These are all great features like really cool. You can tell a lot of teams put work into this. They left the battery the same size as they did previously. So they added in all these features, but didn't add the battery. It's like so like it literally dies in less than a day. I don't know it's my Valley silicon pick because clearly they spent billions of dollars in r&d on this and because there's no like one person overseeing all this it just comes together this like hodgepodge of shown that's, it's kind of a joke. My wife is in the market for a new phone. And I'm not getting a pixel for my most an iPhone this year, even though we've done Android for years, because like I'm so offended that they released this phone last

</p>
<p><strong>Mars Jullian</strong><br />
week. I know

</p>
<p><strong>Jem Young</strong><br /> 
I love Android, but like this phone's a joke. It's anyways, read the article on Ars Technica. They summed it up really nicely, like all my beefs with this phone, the lack of fingerprint reader and everything else. Anyways. Always good read. I feel very passionately about this. She can't tell My next isn't is an article. It's called the efficiency destroying of tidying up. And it really resonated well with me because the overall premise is that if you look at a complex system, you can say you walk into, let's say, I walked into a brand new company, I just started. Let's say, I'm Maurice and I walk into this branded company. And it's just like, craziness. There's stuff going on. There's like code getting merged. I don't know, there's like conveyor belt or something going on. You're like, What? What is this craziness, I'm gonna come in and fix it. But this, this article postulates that actually no efficient systems look chaotic. They look crazy. They look like they don't make any sort of aesthetic sense. So like designers would be offended by an efficient system because it's just like, craziness. But that's actually what an efficient system look like. Looks like. So one of the examples I give is a pizza. And if you made it an aesthetically pleasing pizza, like all the toppings would be on one slice and the other toppings below This slice and you're like, oh, wow, this appeals my aesthetic sense. This is beautiful. But no good pizza has topping spread everywhere. It's kind of random and crazy, but it works. And that's their argument for like, what an efficient system looks like is it looks like chaos until you understand it, then you understand like every part has a piece and they're all working together in harmony. And they say like, what destroys efficient system is someone coming in like it consultants, me, I'm like, this is crazy this person, this meeting this person, this meeting, and they ruin the efficiency of the system that was built in. It's a really interesting way of thinking about systems and engineering in general. It applies to,

</p>
<p><strong>Mars Jullian</strong><br />
like a country that I was to recently also, like, from the outside, it's like an emergent system it but it's very efficient. And it makes a lot of sense. And actually, I would argue some of the best drivers in the world live in that country. As opposed to I can confirm this. Yeah, based on my experience also. Yeah, I was like, how is this possible? Oh my gosh, but it's possible. India.

</p>
<p><strong>Jem Young</strong><br /> 
I've heard things about it's like,

</p>
<p><strong>Stacy London</strong><br /> 
it's like chaos,

</p>
<p><strong>Mars Jullian</strong><br />
but it does look like it moves but it moves and it has very little order to what we receive his order. And most of those traffic systems I've ever seen, if they had stoplights, it would break down and not work. If you obeyed stoplights, if they if you obeyed them, it would break everything down.

Just to speak to that same point. Yeah,

</p>
<p><strong>Jem Young</strong><br /> 
that's a fantastic example. Yeah, like, but if you're like, Oh, I'm an American, I'm coming here. And I'm gonna put stoplights everywhere because

</p>
<p><strong>Mars Jullian</strong><br />
whatever, that's the order that we know.

</p>
<p><strong>Jem Young</strong><br /> 
Yeah. And you destroy the efficiency of the system. And things are worse than because you didn't understand that. And Funny enough, there's actually a principle called Chesterton's fence if you want to look up on Wikipedia, but it's the idea of that you're wanting you're wandering down the road. There's a fence in the middle of a field and you're like, in a gate and you're like, What the hell's this fence? There's there's nothing around. And I'm gonna rip out that fence, but actually was holding back like, crazy bowls or like something. But the idea is you come in and because it offends you, and you don't understand it, you destroy it. But someone put it there for a reason and you just are too lazy to figure out Like can't be bothered to figure out what that reason is. I don't know. Like when you think about system design, it's like a really fascinating principle, especially like old school engineering and the number of people that have been destroyed by like, what's this? What does this code do? I'm delete it because I don't know what it does. And like the whole system goes down because they couldn't be bothered if anyway, so Oh, sorry. Sorry, those those longer rant, the normal VISTA holidays, and I don't know if you all know, but I love Christmas. So I'm in a good mood. My final pick is the TC 39 committee that is the technical committee 39, part of the ECMO organization, which does standards for many things, many, many, many things that interact with you. But as far as most people need to know, Tc 39 is the committee that makes JavaScript the language that you all know and love, most popular language the world gems department, high five when I wrote it, say C Yes. Right. Yes, I am officially part of the TC 39 committee. I was in the last meeting here in San Francisco, and I'll be part of that. We didn't even watch it. So

</p>
<p><strong>Stacy London</strong><br /> 
many Cheers. This is very exciting.

</p>
<p><strong>Jem Young</strong><br /> 
Yes. It is interesting seeing how JavaScript gets made and how new features get added and the amount of work that goes into it. I say on average proposal takes about two years to get through. So if you have a good idea today, it will take two years of arguing, debating, and literally debating and like arguing people not like heated but like really, really technical stuff that you can imagine goes in. So before someone adds, like, I don't know, optional change just got added into stage four. So it'll be official, before people say like, this is stupid. I would like to waste design know that, like hundreds of hours of thought went into this. And honestly, it's it's humbling to be part of like, with all these really, really smart people that like have this deep, deep knowledge of JavaScript that I hope to achieve someday. But my proposal I'm going for optic Jim, I don't know what's going to do yet but you know, we'll see we'll see if 2022 I can squeeze them and it'll

</p>
<p><strong>Mars Jullian</strong><br />
print out a valley silicon pick every time in the console,

</p>
<p><strong>Ryan Burgess</strong><br />
like that. Just randomly pick some nice Valley souls.

</p>
<p><strong>Jem Young</strong><br /> 
objects out to make it happen.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, so I have three picks, which actually started as two, but I'm adding a third. Alright, so a music pick, which I usually don't normally pick. so pumped. gz is on Spotify. So I'm just going to call that one out is like before, maybe at some point he was but then wasn't. And then it was only like certain songs that he was maybe on like the linkin park songs and things like that. And so now he is fully on Spotify, which is awesome. So happy about that. And then I love It's funny. It's like you were talking about Google products. And you're saying, like, usually Google products are really great. And the pixel four wasn't very decent. Okay, all right, fair. Great. I am a big fan of the nest products, which now Google owns his own for a while. I recently installed the doorbell and it's great. I love it. The other location In it, you can like change the chime of the doorbell. You can turn it off if like you don't want people to be disturbed. I kind of like it. Really, really nice little addition to the home. That's nice. We have a little one sleeping. You don't want that. Yeah, that is a really good one because sometimes even like the good old Amazon packages coming, they just ring the doorbell to let you know that the package there, guess what a video camera will tell you that it's there. I don't need to be a doorbell person on that. So it is kind of nice to be able to turn that off. And then my third pick, which we kind of alluded to earlier in the episode, the Irishman I really liked it. It was a great, it was a little long.

</p>
<p><strong>Jem Young</strong><br /> 
I could a little long.

</p>
<p><strong>Ryan Burgess</strong><br />
I could have shaved 15 minutes off, but I think it was a really good story. And maybe if you watch it in parts, I've seen some things on like Reddit, where people are like, Oh, if you watch this part, you can stop and then come back to it. I think that's a really good story. Yes. It's not the like most exciting story Like where it's like epic all the time, but I think all in all is a very good film.

</p>
<p><strong>Mars Jullian</strong><br />
I mean Martin Scorsese, he's

</p>
<p><strong>Ryan Burgess</strong><br />
amazing director. It was good. So Gemini are gonna debate this one later offline, but I really liked it. Thank you all for listening today's episode. You can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words?

</p>
<p><strong>Stacy London</strong><br /> 
Don't ship it.

</p>
<p><strong>Ryan Burgess</strong><br />
Enjoy the holidays. Happy holidays.

</p>
<p><strong>Mars Jullian</strong><br />
Happy Holidays.
</p>


  `;
  return transcript;
};