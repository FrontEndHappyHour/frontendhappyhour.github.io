module.exports = function() {
        const transcript =`
        
<p><strong>Jem Young</strong><br />
Right. Welcome to the latest episode of Front End, happy hour. Today we're in Sacramento at SAC J S. And we're going to be talking today about code, specifically old code legacy code. That code that everybody knows exists, but doesn't want to think about. Before we get started, let's go around the table and introduce ourselves. Derek, you want to start?

</p>
<p><strong>Derrick Showers</strong><br />
Sure. I'm Derek chars. I'm a senior software engineer at LinkedIn.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a front end engineer at Atlassian.

</p>
<p><strong>Mars Jullian</strong><br />
I'm Maurice Julian. I'm a senior UI engineer at Netflix.

</p>
<p><strong>Augustus Yuan</strong><br />
I'm Augustus here in front end engineer at Evernote.

</p>
<p><strong>Brian Holt</strong><br />
I'm Brian Holt, and apparently I work at the evil empire. So someone told I'm a cloud developer advocate for Microsoft.

</p>
<p><strong>Jem Young</strong><br />
And I'm Jem Young, Senior Software Engineer and Netflix. Before we get started, in every episode, we'd like to have a keyword where if it's mentioned, we take a drink. What's today's key word?

</p>
<p><strong>Augustus Yuan</strong><br />
Legacy.

</p>
<p><strong>Jem Young</strong><br />
So if you hear the word legacy, which you may take a drink with us

</p>
<p><strong>Stacy London</strong><br />
dangerous word, already.

</p>
<p><strong>Jem Young</strong><br />
Got a lot of bad memories here. So we're talking about legacy code. What are some of the challenges?

</p>
<p><strong>Brian Holt</strong><br />
All right, well, here we go.

</p>
<p><strong>Jem Young</strong><br />
This is getting messy. It's been a long episode. We're talking about old code. What are some of the challenges you run into? And why is it a problem?

</p>
<p><strong>Stacy London</strong><br />
I mean, sample for. So I work on BitBucket cloud, and it's written in its Django, traditional sort of webapp, like go pitch page, full refresh every page. And over time, it's had lots of different iterations. So like, it started off with like jQuery becoming like, let's let's get some jQuery in here and make things easier. And then it was like, backbone that might make managing some of us a little bit easier. Let's get a little bit of that in there. And then like React came along, it was like, Oh, we can sprinkle some react in here too. So now you have like, all of these things. commingled. So it can be very difficult to maintain something that has like so many different years of things in it and so many things all at the same time. So like, you bring in someone with like, react experience, who's like, oh, yeah, I built tons of spas, I know, react. And then you're like, oh, but can you like also maybe some backbone, maybe maybe some jQuery and you're like, wait, what and like, so it's hard to recruit. I think like that's, that's a tough part like to mean to, like, bring in talent to make sure you keep everybody happy. Having to know all those things is very tough. And like to be good at all those things, it's really hard. Like to be good at all those frameworks at the same time. And like know, all the edge cases of all these things, it's like a very difficult thing. So I think that's a challenge. When you have a legacy code base with lots of things in it.

</p>
<p><strong>Augustus Yuan</strong><br />
You said spas. And so I was like spas like the jacuzzi

</p>
<p><strong>Stacy London</strong><br />
relaxing.

</p>
<p><strong>Mars Jullian</strong><br />
Well, one of the challenges I found when refactoring code bases, which is something I've actually spent maybe the past 18 months doing, it's a lonely endeavor, that's for sure. But also, it's really hard to know where to draw the line. I think it's no product has a single part of your code base that pertains just to that product, or at least not in my experience, files will kind of pull in from all sorts of different places. And it's just hard to know, where do you stop refactoring? You know, at a certain point, you're redoing an entire code base, or even just a part of it. And but it is touching other parts in your well, how do I how do I not go this far? You know, how do I do the find the lines of the product that I'm working on? Or the the code that I need to rewrite?

</p>
<p><strong>Jem Young</strong><br />
Yeah, would? Would you all agree that in micro services make it easier to refactor code? Or is it not worth the trouble? It's better to have a monolithic app where everybody understands what's happening, I

</p>
<p><strong>Brian Holt</strong><br />
think there are different challenges. Like you're going to, when you break into things into microservices, eventually, you're going to run into the point where you want to combine micro services or you want to break micro services down into pico services. Right, it just it lends new challenges that you weren't expecting before.

</p>
<p><strong>Jem Young</strong><br />
Is a PICO service, just one function?

</p>
<p><strong>Brian Holt</strong><br />
Functions of service? Hashtag deploy to Azure? No, I don't know.

</p>
<p><strong>Augustus Yuan</strong><br />
Thank goodness, that was your answer. Because Evernote worked really hard to move us to micro services.

</p>
<p><strong>Jem Young</strong><br />
It's one of the benefits people don't often talk about when we talk about micro services. But that's not the Holy Grail. There are trade offs and but one of the benefits is easier refactoring in the long

</p>
<p><strong>Stacy London</strong><br />
run. Yeah, I would say like some of the things with the bracket cloud is some of the logic is built is like embedded inside of Django top Let's unlike if that was extracted out into a service some of that logic, and then it'd be a lot easier to refactor. So that stuff doesn't have to be re positioned somewhere else,

</p>
<p><strong>Jem Young</strong><br />
I'd say a challenge and agree or disagree, a challenge. But a benefit of refactoring is that or of not refactoring is that the bugs are known, and they've already been solved. That's something like you get an old car. And but you know, all the bad parts about it. That's why you don't necessarily want upgrade to a new car. Because all the issues you've already run into the same with old code. The bugs have been solved. It's been documented, there's the edge cases are known. That's probably a benefit. We don't talk a lot about we talk about older code, older legacy code.

</p>
<p><strong>Brian Holt</strong><br />
No, I think that's, that's, that's a salient point. When you refactor your code, you end up with a bunch of new code, like a bunch of new bugs that were not previously bugs, and you're gonna spend another six months fixing, like most people do not factor in, it's like, Hey, we're gonna fuck up a bunch of stuff. Like, we're not meaning to, but we're gonna have to spend like another year fixing our new fuck ups.

</p>
<p><strong>Augustus Yuan</strong><br />
Actually, that kind of thing. Yeah, I just wanted to call out that brought up a good point. And that, you know, not legacy code isn't necessarily a bad thing. You know, sometimes things are specked out.

</p>
<p><strong>Brian Holt</strong><br />
I'm gonna Gustus.

</p>
<p><strong>Augustus Yuan</strong><br />
Why can't we drink water. But old code is not always a bad thing. Sometimes it's specked out a specific way. And then later, you realize, hey, this was not the right solution. Or maybe there were solutions back then. And then nowadays, there's a better solution. So it's not always I feel bad code or try not to say it gets a bad rep.

</p>
<p><strong>Stacy London</strong><br />
Yeah, and the word le G A, C Y.

Yeah, it does, it gets a bad rap. Because like that code was was written with thought and intention and bugs were fixed over time. So like that code is, is can be good code that you don't want to touch and you don't want to mess up and like there's no business value touching it, because it actually does the work that it needs to do.

</p>
<p><strong>Mars Jullian</strong><br />
And actually, sometimes, this is like showing some of my affection for legacy code.

</p>
<p><strong>Brian Holt</strong><br />
This is not going well.

</p>
<p><strong>Mars Jullian</strong><br />
No, sometimes that code is like the best documentation you have in your company, like we've talked about, it has like all of the bugs, it has a lot of context it also if you you know if you're using GitHub, it has the history of how things have changed over time. And if you look at it, there is a little bit of, you know, sentimental attachment to it as you're fixing it. It's like, oh, I fixed that bug a year ago, look at how far we've come or not come. It does have that, you know, it is really, it may not be commented very well. But it does document your product. Really, really it is your product, basically. So yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
think when it comes down to sometimes it's just easier when you're looking at it looking at some code. It's just sometimes a while, maybe it's not easier, but it's like ingrained in us that we just want to rewrite everything. And sometimes the harder, I guess to ever kind of sum up what everyone says the harder the harder thing to do is sometimes read what that code is doing and understand it and appreciate it to an extent. And then like, you know, add to it instead of just rewriting the whole thing.

</p>
<p><strong>Jem Young</strong><br />
There's literally a word for this in engineering called not build here syndrome. It's, I didn't build this everybody before me was crap. So let's just throw it out and rebuild it. That's that's a very common thinking. It's just a use backbone. Let's use Angular because Angular is way better. And backbone is bad, but we never stop and think you have a problem.

But, you know, like, sometimes that code was fine. It doesn't need to change. But that's not an engineering we like we like to build things. We don't like to fix things. I like to build things that tell other people they suck. Yes, Brian, you suck. I know. So what does it make sense to refactor? When does it make sense to migrate your code to an entirely new scheme, versus like just fixing all this old code and refactoring

</p>
<p><strong>Stacy London</strong><br />
is something that that's, that's where I'm in progress, doing like the clouds, like it's been around for, you know, a decent amount of time, and it has, like, it's a big app, there's a lot of business logic in it, there's a ton of time that's been invested in building the thing. And so to like, be like, Wait, we're not building more features. We're writing everything. It's like, Wait, it took like, many years to get to this point, we're not gonna be like, stop. We're gonna take some multiple years and rewrite this whole thing in a modern stack. So for that, it doesn't make like business sense, like maybe build the thing that's going to give you like the most business value, like do that new thing in the new stack or whatever makes sense but not like rewrite the whole thing. So just the time it would take is, is immense. And you can't afford to do that when you're trying to be like, a profitable business or profitable like product doing in the real world. Like, you can't just do that.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. So at LinkedIn, we completely overhauled our interface and changed. So in doing that, then that's we took that advantage, I guess, to refactor the entire codebase code base. Not saying that that's right or wrong. I know, Uber did something similar, though, and they revamped their app. But Brian, nothing.

So So I think, I mean, to Stacy's point, I think 99% of the time, it makes more sense to migrate. And take things slowly. And even when you are doing something like what we did in the past and what companies have done when they change their whole UX. You know, maybe maybe even in those cases, refactoring isn't, it's something brand new isn't the right choice, but maybe that's one of those times where you could justify something like that.

</p>
<p><strong>Brian Holt</strong><br />
So I'm gonna I'm gonna disagree a bit because I'm an asshole. And I like disagreeing with people. I've seen. Total migration sink a lot of companies like, like entire unicorn, billion dollar companies have been sunk by like, Hey, we're on Angular 1.3. And we want to move to react, right? Like just for like, shiny new technology, and Apple engineers want to move there like, like us, like these people. On this panel, I'm

</p>
<p><strong>Stacy London</strong><br />
not an asshole.

</p>
<p><strong>Brian Holt</strong><br />
Okay, this guy, I'm putting myself as he narrates himself. Migrations is a tough thing. It's six companies, it's sinks that you can't ship new features, you can do things like that. So like, if you're on like a really good backbone, code base, or even if you're like a fine coat, code base of backbone, oftentimes, like it's not the Chinese thing, but it still works. Backbone still works today. Like it usually makes sense to stay there.

</p>
<p><strong>Augustus Yuan</strong><br />
So Evernote has a lot of experience with this. So for context, we rewrote our entire web app. We used to be on a Google framework called Google Web Toolkit. So okay, then you should read everything. I'm sorry, corn companies migrate. So yeah. And so the context of Google Web Toolkit is it's a Java framework that, okay, no one was like, oh. But back in the day, you know, ever No, was a Java shop. And so it made more sense to do Java. And we, you know, we saw a lot of value moving off of it, right. So I think that's the key thing for us. Like when it comes to migrating, you really have to focus on what value you're getting out of it. So for us, just building our Google Web Toolkit app takes a really long time. It's like, oh, no, like, you know that you know, that XKCD. It's like, hey, my code is compiling. And they're like playing they're like, Okay, it's surely not. Not that I did that. But no, it felt really long. And we've just seen so much like, just like, from building our application, when moving to like a JavaScript framework. It's just sped up our development process. It was also way easier to hire people because, I mean, Google Web Toolkit is an abandoned project by Google. It's been a decade old and not never do that. They've never been and Okay, well, okay, support, minimally support. It's open source. So

</p>
<p><strong>Brian Holt</strong><br />
rip, Google Reader. Google Wave.

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah. Alright, so someone that someone just still this advice down for me. So Brian, saying, It doesn't always make sense, refactor, like, you can actually cost the company millions, possibly billions of dollars, like us saying, man, we got a big win from refactoring. Like everybody's happier code faster. So what point should we actually consider refactor?

</p>
<p><strong>Brian Holt</strong><br />
If you're on gwit?

</p>
<p><strong>Stacy London</strong><br />
Yes, sort of a cost benefit analysis thing, like, which is gross business, because why don't you do a cost benefit analysis to see if your ROI is. But like, if, like built so for us, like, let's say, we want to do something with the code review screen, if rebuilding if adding features into that thing is, is if the code is so entangled and full of like multiple frameworks and multiple patterns, and it is so difficult to like, add, add a simple new feature something that like it shouldn't actually take too long. But you're like, oh, actually, it's going to take like, way longer because of the fact that it's like seven different stacks of stuff. That that's like a good like way to say like, in this case, really, adding a feature is going to take way longer than if we were to start with a good base and then build features on it from there. And so like, doing that kind of analysis can help that that conversation like whoever makes the decisions. Whoever's like, yeah, sign off, like, yes, you should start this project. Those kind of things are good to present. As like your pro and con.

</p>
<p><strong>Brian Holt</strong><br />
I think it's this most salient point that's been brought up.

</p>
<p><strong>Jem Young</strong><br />
You know, it's really important your use of the word alien.

</p>
<p><strong>Brian Holt</strong><br />
Like I mean legacy, just like

</p>
<p><strong>Mars Jullian</strong><br />
I don't know what's going on over there, but I'm not sure it

</p>
<p><strong>Brian Holt</strong><br />
could be your livers really cute.

</p>
<p><strong>Jem Young</strong><br />
Alright, so we've sort of agreed on when we should refactor or migrate and kind of figure out why the benefits the cost and benefits of doing that? How do you convince stakeholders, so your product managers, people that they need to get paid based on what you do, but you're saying like, we will not make any new products, while we do all these things in the back that you won't even notice? But it's better? Like how do conversations like that go? Because that's something that I get asked a few times from just newbie developers, like, I need to convince my CTO that we need to move? How do I make How do I do that?

</p>
<p><strong>Brian Holt</strong><br />
I didn't tell them.

Oops, rewrite history. When I was at a smaller company, that's not called Reddit. That's called Reddit. We were an Angular, I wanted to move to react. It was a small of code base that I could, you know, swing that the some of the story is that all my estimates suddenly had like a week longer on everything. And everything was just getting shipped and react. So that worked out for me, that might get you fired. I'm just throwing it out there that might get you fired. It did not get me fired. But it did work. For me.

</p>
<p><strong>Jem Young</strong><br />
That's actually a good answer.

</p>
<p><strong>Brian Holt</strong><br />
Jem agrees with me.

</p>
<p><strong>Jem Young</strong><br />
It's rare.

</p>
<p><strong>Augustus Yuan</strong><br />
Cool. Well, you said you had a salient point. Actually, I agree to like, sometimes it helps to have someone champion what that refactor looks like. For so for us, the React version of Evernote came from a hack week. So every year we have like this hack week where people can just work on whatever they want. And someone showed it. And he showed how fast it was to develop on it. And he just showed like, a bunch of cool things. And it got a lot of people like talking about it, like, Oh, this is really cool. So sometimes that is what you what you need to do, you really need to communicate the value that you're getting out of this, too.

</p>
<p><strong>Mars Jullian</strong><br />
I think also sometimes the value can be somewhat self evident, I found in like conversations recently, at least you can you can look on previous projects where estimates have slipped, because you're dealing with older code, and it just has an effect on like the code you're working on currently. And especially, you know, with really, really old code, you go into a bug fix, and you create more bugs. And all of a sudden, you just need to communicate to your manager and your product managers that this is what's happening over and over again, I think if they've seen you working on something for long enough in a code base, that's old enough, it's not necessarily a really hard conversation, because it's really easy sell because they've seen the effects of that older code base on some of your more recent work. I think that's code base to code base. But in my experience, when it really gets bad enough, it becomes somewhat self evident.

</p>
<p><strong>Brian Holt</strong><br />
Those legacy code bases, what's yours? I'm super happy that most of the audience is drinking with us. Cheers.

</p>
<p><strong>Stacy London</strong><br />
I've been moving from the Midwest, to San Francisco, I found that like a majority of the product managers and people that I work with, all come from, like tech backgrounds, and they have this like, they maybe were engineers at one point. And so there's the conversation is so much easier, because they're like, oh, yeah, of course, I understand that I empathize. But that hasn't always been the case. For me, I've worked with a lot of like leadership or people that have not had engineering backgrounds. So that that conversation is much more difficult. And one of the things that I found in a past job was to talk about capability from using all these business capabilities. So capabilities of synergy, synergy capabilities, use the words that they understand. When you when I as an example, something that I was working on was built on SharePoint as a platform. But we needed to convince convince the leadership that like maybe that wasn't the best platform for things and like ASP dotnet made him more sense for the kind of thing we're building. So it was like putting together a PowerPoint. And it's all cringe worthy, but also like

</p>
<p><strong>Derrick Showers</strong><br />
how many Microsoft jokes here but

</p>
<p><strong>Stacy London</strong><br />
it was like, like, like, we'll talk about the fact that like the thing that you want, like you're asking us to build this feature, but like that platform cannot build that feature. We cannot do it very easily. It makes more like this, this thing can enable that capability. And so like talking about capabilities, and like that enables us to do the thing that you're asking us to more easily that language translated well and like was received while I'm like okay, then yes. That makes sense. Let's replac form this thing in

</p>
<p><strong>Mars Jullian</strong><br />
replay form from a platform.

</p>
<p><strong>Stacy London</strong><br />
A fancy words like

</p>
<p><strong>Derrick Showers</strong><br />
you've taken a refactor.

</p>
<p><strong>Brian Holt</strong><br />
I think the Stacy's point though, you have to learn to speak a little bit of business to sell this to management. I think she evidenced

</p>
<p><strong>Derrick Showers</strong><br />
I think it's somewhere I don't know, I guess the seriousness but like about being on Mars, like about being honest about it, but also not for me, it's like being honest, but but not being too honest. So it's like I've seen, I've seen, like, you know, he says, like, everything he says, makes sense. It's like, newer developers will come in sometimes and know, okay, we can do this in like, you know, five days. But if we do it the really quick way, then we can do it in two days, you know, so like, I think, you know, I do you agree that like, most times, especially in Silicon Valley, but I think anywhere like that, you have the advantage that people will trust you. And, but yeah, don't like be overly honest about it.

</p>
<p><strong>Jem Young</strong><br />
I like that point that that is a beautiful point, because I part of what separates junior engineer like mid tier engineering, middle mid level engineer, from senior engineers, the ability to explain complex things that people don't necessarily understand tech. And that's something that's really discounted in our field, because we go, can you code, you know, these algorithms, all these things, but can you communicate effectively is something that person like I prizes engineer, someone can explain to me like, data science explaining, like, a Poisson distribution or something, and I'm like, Oh, I get it, you're, you're like, really smart, just because playing simply, the same goes for technical debt, you say, like, hey, we can get this done in a day or two. But it's gonna accrue like this much technical debt, which we will have to pay off eventually. And I think if you have that conversation ahead of time, rather than two years down the road, it makes the whole migration process much easier of your

</p>
<p><strong>Brian Holt</strong><br />
legacy code base.

</p>
<p><strong>Jem Young</strong><br />
Alright, so we all work at billion dollar companies. And I'm not saying that as brag. I'm saying we all have literacy code we, there's code. So yeah. We all do code that's predates us predates possibly, anybody working at the company? That's just how it goes sometimes. So we've all done some sort of migration or refactoring. What are some of the lessons that you've gained over the years of doing these things?

</p>
<p><strong>Mars Jullian</strong><br />
Like, how do we start? I don't know, I found that a lot of the times it involves like figuring out where you're going, in a sense, I mean, it's one thing to know like, what's bad, like your code is your code base is bad. But another is to know like, where you actually want to go with it? What's bad about it? And what do you want to change in particular, we just spent probably the last 18 months or so. And by we, I mean, me, refactoring, the way that we do our signup flow at Netflix, or at least the code base that it's based on. And a lot of that has to do with knowing what's wrong about it, and how to figure out how to get there from where we are currently, and just kind of working your way backwards. But also, that's the first step right. And then the second step is to kind of carve out chunks that you can do one page, or one one step at a time, in a way that you can keep your product up and running, but also kind of changing things out underneath the hood. For me, that's always finding the smallest component and working my way upwards in terms of, you know, impact, but, I mean, I think it's probably different for everyone here. But those are definitely two major lessons that I've noticed or learned.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, actually, I was gonna bring up that point, it's, it's probably a good thing to talk about that when we talk about migrations, there's like two types. There's moving from one framework all the way to another, that's like a really big migration versus like, you know, you're just upgrading react, like React 15, or 14 to 16 was kind of a big change, but they had like some code bods, to make that easy. So I actually think you brought up a really good point, like, another way, a big thing that we learned at Renault is how can we break up the migration? Or how can we break up the refactoring into like, sizable chunks without like, impacting like, our current like workload? Or if we are going to impact like, what we're actually shipping out to people? Like how do we kind of communicate that? How do we set some expectations for that?

</p>
<p><strong>Stacy London</strong><br />
Yeah, and I think like as an example, if you're like refactoring where like all other pages are of the the old stacking framework and like one entire page is the new thing. I think one thing that's been fascinating is to know like, everyone will hyper focus on re coding like all the features that exist on that page, and then in sometimes forgetting not as I say, forgetting but like the things that are cross page features get forgotten sometimes and in your remember it later when you're like, oh wait and then sample that would be like keyboard shortcuts. Like, we need the same keyboard shortcut methodology and pattern to be in place across all these pages, and we build the new thing and we like build this new thing, then we're focused on the feature. And they're like, oh, wait, everyone expects like this keyboard shortcut feature. That's like a global feature for the entire site to work in a similar fashion. And you're like, oh, we have to rebuild this thing that we weren't expecting to rebuild, because it just you get lost in the in the in the hyperfocus of the features of that page. So that's been an interesting like learning, I think, for like redoing a single page in a new stack of a multi page app.

</p>
<p><strong>Jem Young</strong><br />
So so far, the advice I'm getting, and correct me if I'm wrong, is do things and start at the smallest feature you can, and then work your way upward from there. But also be aware of all the features that existed before. And make sure you port those over

</p>
<p><strong>Stacy London</strong><br />
inventory. Yeah, like, serious inventory, like every single thing that's on this on this page. And if you're doing an entire page into like a new single page app sort of framework thing.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, I call that actually following the breadcrumbs in a sense, like, whenever I want to start like a refactor or rewrite, I like to get a great lay of the land of you know what I'm about to rewrite. And a lot of times, you have to follow the breadcrumbs through the rest of the code base to figure out like, where the tendrils of what you're trying to rewrite and how like, where they are and how far they go. for exactly that reason, in order to figure out like, what are the things are you going to be affecting? And also, are there other parts that could be rewritten to better support what you're working on now and other parts of the code base? But also where where are the edges of what you're trying to work on?

</p>
<p><strong>Jem Young</strong><br />
So one, I think something really, really valuable that when we're talking about refactoring legacy code, cheers. Cheers. Is how do you measure when you're successful? Some markers, I know, you just did a large, large refactor, we're on the same team. So I get to look at another one right now. But so how did you measure if you refactor, like a component or something like that?

</p>
<p><strong>Mars Jullian</strong><br />
didn't break anything. Step one didn't break anything. I think the second also, I mean, specifically, in the arena that I was working in, we were focused on conversions as our signup flow. As long as conversions were the same, you know that that was a good thing. And I think something that's really, really hard to measure. And one of the reasons we did our refactor at the time was for developer productivity, which was the whole reason for this rewrite is not an immediate effects that you'll see. But over time, as you see more work being built on top of the code base that you've just rewritten, you'll see people doing it faster or more happily, or, you know, they're not going into fixing bugs and creating more bugs. It's, it's not something that's very easy to measure, but it is a good measure of success.

</p>
<p><strong>Brian Holt</strong><br />
Or in which case, you're not reading job anymore.

</p>
<p><strong>Augustus Yuan</strong><br />
We can ask was it gems code?

</p>
<p><strong>Jem Young</strong><br />
My code is beautiful.

</p>
<p><strong>Brian Holt</strong><br />
It was definitely my mic dropped.

</p>
<p><strong>Stacy London</strong><br />
If you if you have the capability to this is like advanced stuff for some people don't have the ability, but to roll out the new thing to like subsets of people and get data upon that feedback, like AB testing. And all that stuff is sort of amazing. Not everybody has that ability, like I've worked over almost work now nowhere where they've had the ability to do a B testing or, like a lot of these things are like gather data, get make your decisions on data, and you're like, I work in a small place, we can't do that.

If you can do that, if you roll something out that's built in this new stack, and let's say there was like a UX improvement that was a part of it, that you can gather some feedback about, like either anecdotal feedback, or like, ask them feedback while like throw through like, hey, it was this, this new thing better to like, obviously, just gather that stuff. And that that helps your story. Like if people are like responding to it better, like, yes, this, this feature makes more sense. I really like this new look and feel or whatever it is. Twitter sentiment, like all those things are, are can be helpful to your sorry.

</p>
<p><strong>Jem Young</strong><br />
I like that. So what I'm getting is you shouldn't measure your changes, essentially, what? Yeah, I like I have not seen a lot of that when people talk about refactoring old code. They just change and they say it's better because developer productivity is up. But how do you know? Have you measured the old versus the new and you don't see that very often? What I like what do you look for measurements is that you want to be flat, you don't want it to be too far in the negative like conversions are down, for instance, that that's a bad sign, something's broken. But you also don't want conversions be up because something also may be broken on the other hand, and you just see a lot of people it's like, we're switching from Angular to react or switch from react to view. But they don't measure any of this. They just do it and like how do I know the site's better?

</p>
<p><strong>Brian Holt</strong><br />
Just guessing, so I want to challenge

</p>
<p><strong>Jem Young</strong><br />
Two points that come out challenge.

</p>
<p><strong>Brian Holt</strong><br />
One, most people don't have enough users to be able to get like a significant P value, right to get a significant amount of like difference between the two that can say like this is, like definitely better than the other one, right? I'm just gonna take a quick poll of people in the room. How many of you work on websites that you have? Like millions of users? Just buy razors? Raise your hands? Jen's raising his hand. Okay, the panel is raising their hands. One person in the back. Okay. How about hundreds of 1000s of users? I get like three hands. Okay. 10s of 1000s of users, like maybe 1015 more. And then, like 1000s of users. Okay, two of you. Cool. I'm sorry. Good luck. My point being is that not everyone has the benefit of being able to measure something like that significantly enough that they can be able to make a call that like, this was better or this was worse.

</p>
<p><strong>Mars Jullian</strong><br />
Could you say though, by extension, the better the developer productivity, the more features you can add, the quicker you can iterate, the more you can make your users happy. Now, that might be a stretch, but I'm poking on it a little bit.

</p>
<p><strong>Augustus Yuan</strong><br />
Or even even the number of bugs that come back, like we've had some features that we've written, embarrassingly, that have really like created a lot of bugs. And that was kind of a sign for our PMS to be like, Okay, what can we do to fix this? And sometimes it's just we really have to refactor poetry when we just did it completely wrong. And we can like measure, like, how many bugs we're getting back. That's been a good way.

</p>
<p><strong>Brian Holt</strong><br />
So I want I want to call that out as a positive indication. It's correlated instead of causative. Because different people riding them, it's a different season. Like there's there's a lot of like lurking variables in that situation. I never took a statistics class and making shit up. But people are like nodding was like, Yes, that sounds correct. But you just need to be careful of those indicators and realize that they are secondary indicators and not necessarily causative.

</p>
<p><strong>Augustus Yuan</strong><br />
Wait till winter to see if.

</p>
<p><strong>Brian Holt</strong><br />
Yes.

</p>
<p><strong>Jem Young</strong><br />
So I disagree a bit. Even if I had hundreds of users, I can still measure things like TTR TTI, time to render time interactive, basic perf metrics, like work for 1010 users, something that's pretty easy to measure. And that's not a strong signal was did they buy something from me? Or did they sign up? But it's a signal anybody,

</p>
<p><strong>Brian Holt</strong><br />
I would still assert that it's a you don't have enough users to because one user might be measuring on DSL, one might be measuring on like gigabit fiber. And those users could drop off. Humans could drop, like jumped in. So you don't have still enough data to say like, this is definitely causing this

</p>
<p><strong>Augustus Yuan</strong><br />
right. Wait, it's okay. So I've taken some statistics.

But I guess like when you say number of users, you're right. And that like number of users does matter. But then like, you know, there's two parts to it, right? There's the number of users and then the time, right, so are you talking because it's not like, for those of you that might have like only hundreds of users, it's not like you only have 100 users, like if you like it's maybe 100 active users or something, right? So like for us, like, sure P value to hit significance, it might not be as fast as maybe Netflix where you have like, tons of active users. But for us, like we just have to wait a longer time to actually hit significance.

</p>
<p><strong>Brian Holt</strong><br />
Fair. But that turns in from like, hours at Netflix, or actually around two days, to like, months, right, and you're running one test on your homepage, which most companies don't,

</p>
<p><strong>Stacy London</strong><br />
there's also some sort of like, I guess, subjective feedback to like, let's say, let's say you have an depending on where you work, you might have like, a captive audience where like, you're running some internal tools, and that are web based. And you can actually ask them directly, like, Is this helping you is this thing and we're delivering features to you faster? Does it feel like the things that we're delivering to you are helping you do your job better? Or whatever, like, that kind of stuff is maybe not statistically significant, but at least it's like, the user sentiment is like, I'm I'm able to do what I do better. And you guys are delivering stuff faster, because apparently you have a stack of things that you're able to do stuff faster in and like maybe that is visible to them, like you weren't getting features to them as fast as you could and like now, for some reason you've read redone your stack and they don't care about that, but at least you're like getting stuff to them faster. That kind of measurement is cool too. Like that matters.

</p>
<p><strong>Brian Holt</strong><br />
I like it. And I think Stacey hit it on the head like it's it's it's a subjective measurement that still counts. Like even when you have like Netflix levels of data, you still have to make gut feels like subjective calls. And like that's important. And so when you're when you're at that smaller scale, you should lean more heavily towards that. Legacy.

</p>
<p><strong>Jem Young</strong><br />
Last question, and when we can take some questions from the audience, but how often should you refactor because especially in front end land, stuff just changes so quickly? Like Webpack, four, note five, six just came out, seven up, I think we're up to eight already. But, but the point stands, like, How often should we refactor? Like, how should I switch to react 17 already, or just switch to node nine,

</p>
<p><strong>Augustus Yuan</strong><br />
four? Yeah, for us, like, we actually didn't immediately upgrade, like, we kind of see what the release actually has, and see if it actually, like provides us some stuff. So like, fiber was a really big thing, when react came out. And that like really evaluated, like, the render lifecycle and naturally, like, I guess, for frameworks, it's a little different, because you are kind of tied to it. So eventually, like, there might come a time when like, you need to actually have to upgrade and depending on how different it is. So like, how react kind of changed some of the lifecycle logic, you might, it probably makes more sense to address that earlier than later. Like, especially for us, like, as our app gets bigger and more, like built out, we're gonna have more components. So we're gonna have to refactor more components. So at least for us, we kind of just made like judgment calls on that.

</p>
<p><strong>Jem Young</strong><br />
It's a trade off, though, right? Because you don't always want to jump on the latest, greatest thing all the time. That's just not feasible for most people we have, we have jobs that we have to get paid. But the longer you wait, the harder becomes efficient, you're talking about front end framework. So is there a rule of thumb or is just like, the team decides,

</p>
<p><strong>Stacy London</strong><br />
it can depend on your structure. As an example. For Bitbucket and Atlassian, we have like a shared React component library called Atlas kit, that's it's public, but that that component library has, they wanted to go to react 16 We weren't on that. And all the products weren't on that. So you kinda have to coordinate it all. Because if you don't, like, we can't consume the updates. And then they're fixing bug fixes, and we can't consume them unless we're on the same version of things. So there's this, like, cross product coordination that has to happen. So that's like a bigger company concern where you actually have, like a shared component library. And that brings like, was like React 16 styled components, all these things that like, we need to be on the same versions of safe to have that like, coordination. So you're like, your, your payload doesn't blow and you don't have like, you know, like a 12 megabyte download for for your JavaScript. So that can drive it because you want to be in sync with like, the thing that you're you're sharing. So that that's one consideration. If that's a if that's part of like what your concerns

</p>
<p><strong>Jem Young</strong><br />
are just the team largely like, because they're the ones who have to do it, make the judgment call. Yeah.

</p>
<p><strong>Mars Jullian</strong><br />
But I think also, that's really specific to when you're introducing a new framework or your reliance on a specific framework that is upgrading underneath you, I think, going back to I guess this is pointed there being different types of refactors. You're either moving from Angular to react or bootstrap to Angular, or what have you. There are other rewrites that involve just like improving your codebase in general. And a lot of times it involves introducing a framework or moving to a new one, but but not every time. And I think that that's another thing we should talk about is just, we don't always have to be so reliant on these frameworks. And when we rewrite or when we refactor, it's not always forced by sort of like an outside force coming in. And we have the control over that too. And I think that is really difficult to figure out like when you're actually going to do that, at what point does it become obvious that you know, the developer pains too much that we need to increase the productivity and that's kind of a more nebulous area, but it is another type of refactor.

</p>
<p><strong>Jem Young</strong><br />
I like it. And we will do another episode on developer productivity because that's something that's very important we often don't discuss too often. Totally. But we're nearing the end of time and at the end of every episode, we like to go over and have pics of music or TV shows or anything that we found interesting wants to start, start with Derek sorry.

</p>
<p><strong>Derrick Showers</strong><br />
So we can save the best for last.

</p>
<p><strong>Brian Holt</strong><br />
Hello,

</p>
<p><strong>Derrick Showers</strong><br />
I was talking about you the best. So my picks. This week, I listen to start listen to a new podcast 20,000 hertz, it's a podcast all about sound. And it's really some interesting episodes. I listen to one on the Emergency Alert System. Another one on the NVC tones. So the talk about like the history of sound and how it's in been involved in our culture through throughout years, depending on the sound so it's really interesting My other pick is a San Francisco company, but I think it's popular worldwide Timbuktu, I got a new Timbuktu bag. And in fact, I wanted to switch away from Timbuktu because I've always had to go to bags. So I was going to go with this incase bag and I was like, because, you know, I see everyone wearing that in San Francisco. So that's kind of cool. And, and so I picked this one out as like, I'm gonna buy this one and I went to Timbuktu store and I was like, Okay, I'm sold like right away. So anyway, that's that's, that's a awesome product VHS check that out. And my last pick is TV show that I'm surprised no one's picks, but I started watching from a recommendation. It's a Netflix show. That's why I'm surprised no one's pick. But master of none. It's yeah, love show. And I'm like kind of late to the game, but no one's ever picked up. No, I looked just to make sure. I believe you. But I think it's hilarious not like laugh out loud. Funny, but I'm sure probably everyone has already seen the show.

</p>
<p><strong>Mars Jullian</strong><br />
I'm sorry to Yeah.

</p>
<p><strong>Jem Young</strong><br />
Actually did not like that show. Really? No. I think as far as like, what you think of when you think whiny millennial like so like, I didn't like that show.

Stacey, what do you got?

</p>
<p><strong>Stacy London</strong><br />
All right, I have to fix. The first one is my always my music picks. So I'm rival consoles is a big an act that I've enjoyed for some time, and I've seen him live a few times he does electronic music is a composer. So unfolding is a new track from him that just got released. I really enjoy it. I'm looking forward to the album. And then my second pick is a book called Get for humans by David Murray, from a book apart, just working on the bucket. And also like, having worked with Git for a number of years, I just I find his book to be a very, like approachable, really well done explanation of like, what Git is and why it's helpful. And especially if you're not familiar whatsoever with gay, it's very, it's very approachable and makes you feel good. Like there's, there's some statements in there, like, get is hard. Like there's leaky abstractions and the way that this was implemented, it's, it's not intuitive. And I think that is really important because you start using and you're like, am I dumb? Like I just like, hey, this is like, really hard. And I think he explains why that that difficulty exists. And it's a really good book for for anybody new to get.

</p>
<p><strong>Jem Young</strong><br />
Nice. Mars.

</p>
<p><strong>Mars Jullian</strong><br />
Sure. I'm always bad about my pics. So okay, I'll start with a TV show called Love Sick, which is a Netflix show original, maybe? Yes. Okay, it's a Netflix Original. I won't go into too much detail about what it's about. But I love British shows and romantic comedy. So this is a great marriage of the two super adorable and quite funny if you like the English. And the second pick is a newsletter that I've been following called inside dev inside is a company that has been putting together these newsletter that picks like four or five articles, you know, around the web for different subjects. And they have one just for development. So if you're interested in a good developer newsletter, this is this is one for you. I guess this

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, cool. So my pigs. So I stole this from Derek's Twitter. It's the this blog article on flavors of engineering management. I never really thought about it. But I guess there's lots of different ways from it for a manager to manage an engineering team. And so it kind of it kind of talks about like a bunch of different ways. There's like the tech, lead engineering manager or product team oriented engineering manager. So I thought it was a really interesting article for people who want some perspective in that. And then this one I stole from Brian, thank you started. It's this GitHub repo called thanks. Oh, yeah, that's really cool. That's really cool. It's basically this npm module where you can just go into some project, it will go through the package, JSON dependencies, and I'll list out all the people who work who worked on that on those dependencies. So really gives like kind of a shout out to them. And I think it links their Patreon. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
So anyone that's requesting like, donations via open collective or Patreon, or something like that, all ties like this is how you give to this project. Super cool. That's really easy to forget that there are people who are working on these things for free. That's pretty huge.

</p>
<p><strong>Augustus Yuan</strong><br />
But yeah,

</p>
<p><strong>Jem Young</strong><br />
right, Brian?

</p>
<p><strong>Brian Holt</strong><br />
All right. I got a couple of pics here. The first one is Louis AI, which is something I've had an opportunity to work with, in my like day to day job, which is language understanding. Something that begins with AI. Something means this. It's a it's an API that does language understanding for you like natural language processing, and it's stupid easy to use, like I started using it. You just put in like a bunch of phrases like this would sound like this and it just like, maps, whatever bullshit you're putting in there too. Like machine readable output so it's really it's really really cool

not that dishonest. Anyway, before these assholes called me out for being an asshole,

</p>
<p><strong>Derrick Showers</strong><br />
you got to make up for all this shit talk on Microsoft.

</p>
<p><strong>Brian Holt</strong><br />
Hey, fuck That's true. That's fair. That's fair. Lewis that AI is made by microsoft.com. Play. Can we play the jingle here? Is there a Microsoft? The more you know, start one.

</p>
<p><strong>Jem Young</strong><br />
Windows XP

</p>
<p><strong>Brian Holt</strong><br />
XP one, there you go. The next one is also shameless. But it's also famous for this asshole sitting next to me,

</p>
<p><strong>Jem Young</strong><br />
I guess

</p>
<p><strong>Brian Holt</strong><br />
it's this class called full stack for front end part two from front of masters which is something that doesn't pay me shit, that they also pay me but this is not from like, this is not a paid endorsement from them. Anyway, so full stack or front end gem pays me is a course from one gem young. So I've had so many engineers come to me and tell me like this course was like phenomenal for them. Like it taught them like just like the basics like the things that like everyone assumes that you know when you go into your first job and you just don't fucking know, right? Like I remember showing up to my first job and not knowing get and so I had to have someone like a friend a tech lead sit down and show me get and like to this day I still credit him. His Twitter handle is at Gen F two. So you should definitely follow on Twitter because he taught me get Russell Ahlstrom. So anyway, it's John's doing part two of that course of just like shit that you just need to fucking know. Right? So that's I mean really shipping. That's Part Three, part three.

</p>
<p><strong>Jem Young</strong><br />
You still don't get a comma dummy.

</p>
<p><strong>Brian Holt</strong><br />
The last one, we're in Sacramento, right? I'm not picking Sacramento but we are in Sacramento. But I am picking on a Sacramento zone. She's here in the audience. I'm going to pick a podcast with Madison Camus she's the first in the first row. Second career Deb's which is from our friend, Kyle Shelvin Madison was on it. It's a really, really great episode. Check it out. She's awesome. Kyle's awesome. So yeah, please listen to it.

</p>
<p><strong>Jem Young</strong><br />
A second. Let's skip on. Yeah, I have three picks today. My first pick is an old show. Some of you may know it, some of you not. It's called SEALAB. 2021. Anybody seen it? Yes. One of my favorite shows. died too young. It ran for five years a long time for cartoon but if you can dig it up somewhere I'll leave note streaming but I just thought of it on Amazon show is on Amazon Amazon. Amazon Prime video. See how we can Netflix we can we can share the love. I love I love see love 2021 My second pick is actually a shameless plug which Brian did pay me for. four semesters of CS on front end masters part two. By far if I recommend any class to anybody at any time any dev I say it's for semester two Cs you learn four semesters of computer science was you wouldn't College in a very very short time six hours four hours five hours five hours even wasn't a six hours before.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, no, that's what I called it, but it actually ended up being nice. Yeah, better. Yeah. But estimating

</p>
<p><strong>Jem Young</strong><br />
if you have things like you want to learn about graph traversal or link lists and things you've heard of and you're just like, I don't really get it Brian explains it very very well and he's a front end engineer so it's not like weird technical notation. He explains it very plainly. I just kidding. He does not pay me but it is by far one of the most useful classes you can take. But cans out my last pick is from a segment that I do every episode starting 2018 called Valley silicon it's where I picked something just absurd this things that should not exist but exist because people have too much money. And I've had some good fixes these are my last one was the the flame thrower by Elon Musk that people bought people bought this flame. So now it's sold out. Yeah, flames are like Anyways, that was last episode. You go listen to it. I went out to get rants about it. My newest pick is about cryptocurrency again. This one is the petro is a currency released by Venezuela, backed by oil which is in the ground still which again you shouldn't do. Also questionably that they even have that much oil, but they said like hey, let's get on this Bitcoin train and let's release our own currency but it's backed by oil wink, supposedly, according to the government, which is not corrupt at all. According supposedly they've sold $700 million worth of this cryptocurrency so that means or Around the world, people are like, Hmm, this country's in shambles. The economy's in shambles, the government's corrupt and they're trying to get out. But let me buy this currency issued by this government because it'll be worth something someday. We have too much money. If people are throwing money at problems. I can start a coin called Ponzi and people. Let's do this. Let's do it. Let's do it. Right. Let's do it right now. Alright.

Well, thanks, everyone for listening. We go around the table and just where can people get a hold of you, Derek?

</p>
<p><strong>Derrick Showers</strong><br />
Sure. I'm on Twitter at Derek showers.

</p>
<p><strong>Stacy London</strong><br />
I'm on Twitter at Stacey Londoner.

</p>
<p><strong>Mars Jullian</strong><br />
I'm on Twitter at Mars Josephine.

</p>
<p><strong>Augustus Yuan</strong><br />
Oh god mind is not my name, so I feel awkward now. Mine is. Mine is OG Berto. AUG BU? RTO.

</p>
<p><strong>Brian Holt</strong><br />
I'm gonna I'm gonna pass my medicine what's what's your Twitter? Yeah. Madison, so ma d i s o n k a n a. Follow her there.

</p>
<p><strong>Jem Young</strong><br />
And just I mean, email Gemma netflix.com. I take a long, long time to respond, but I will eventually. And thanks everyone for listening.

</p>
`;
        return transcript;
    };