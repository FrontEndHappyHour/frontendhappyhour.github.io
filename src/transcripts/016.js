module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 16th episode of the front end, happy hour. In this episode, we share all our mistakes and epic fails, we've made it or experienced in our careers, and we'll also share how we've learned from them. Hopefully by sharing our mistakes you can learn from them and avoid running into similar mistakes. For today's episode. Let's go around the table and give brief introductions to the episodes panelists. Brian, do you want to start it off?


<p><strong>Brian Holt</strong><br />
My name is Brian Holt and Netflix hasn't fired me yet. Because epic FuckUp

</p>
<p><strong>Augustus Yuan</strong><br />
Nights My name is ECOSYS here and I'm a software engineer at Evernote.

</p>
<p><strong>Jem Young</strong><br />
My name is Jem Young. I'm a senior software engineer at Netflix. I'm

</p>
<p><strong>Sarah Federman</strong><br />
Sarah. I'm a UI engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcast we like to choose a keyword that if it's mentioned at all, in the episode, we'll all take a drink. What did we decide today's keyword is learned learned? So anytime we say the word learned, we will all take a drink. We'll do a lot better than we did last time. Our last episode we chose the word JavaScript is probably not the best idea on a JavaScript podcast. Thanks, Derek. Yeah, Derrick cut. That was that was Derek. He's not here today. So we're blaming Derek. But yeah, let's let's kick things off with the episode, I figured we could focus on some of the mistakes we've either made, or even seen in our careers happen around us and what we've learned from it, cheers. I was trying to think of mistakes that I've either seen or made in myself in the past. And I was thinking back to one of my first jobs after school, I was working in Flash doing a lot of flash. And there was a colleague of mine that was writing some messaging, you know, writing fuck in his messaging or alert message was either in the trace or in the alert. The problem was a client ended up seeing that our boss who owned the company was pitching this project, or whatever it was in a client meeting. And that message showed up. And so it was pretty embarrassing. It was just one of those things were I learned very quickly, never write those messages. You never want to have someone necessarily see. So it's just better not to write that write something cute that you know is funny, but not like language and things like that in your messages.

</p>
<p><strong>Sarah Federman</strong><br />
A friend of a friend that got fired for writing bad things in this code comments about the client, so don't do that.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, that's even worse. Yeah, so this guy didn't get like let go or anything. But it was definitely a good reminder for the entire team not to ever do that again. So I've always remembered that one and I don't think I've done it since hopefully not.

</p>
<p><strong>Brian Holt</strong><br />
I think a good rule of thumb is write every email every message as if everyone in the entire company could see it. Like never talk shit on people, like, by all means we all gossip rarely, we don't have to pretend that we don't gossip at work, but like make sure that spoken word and not written an email because that will bite you in the ass eventually.

</p>
<p><strong>Ryan Burgess</strong><br />
That's very true act as if everyone should see it. Everyone could read it.

</p>
<p><strong>Jem Young</strong><br />
I'll follow up on the Yeah, never put profanity in any of your code because I haven't done it. I generally try not to curse in real life. But I've seen it show up in code at least two different companies. This like mistaken debug mode, it shows a reflection. It's just don't do it. Like there's no reason for it.

</p>
<p><strong>Brian Holt</strong><br />
Like even like console dot log fuck, right. It's it's cute new laugh at it. But how many times have we left console log in? It's made it productive production, right? And then it's client facing code at that point. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
at any point, someone could really pull up the console and see that and then call you on it or your company and tweet it. Whatever. It's the internet, it can get pretty wide reach at that point.

</p>
<p><strong>Brian Holt</strong><br />
I was to like console dot log lol LMG. BBQ.

</p>
<p><strong>Ryan Burgess</strong><br />
Nothing, nothing wrong with that. That's a cute one that I would be like, Okay, that's kind of cute. This engineer was like saying that in the console. This was programmed by a 14

</p>
<p><strong>Brian Holt</strong><br />
year old girl.

</p>
<p><strong>Jem Young</strong><br />
See common mistakes. I mean, well, I'll save like my personal mistakes a layer of I'll say with common mistakes. I've seen people make get mistakes, like people executing git commands. They don't understand what they're doing a copy and paste was tackled. Yeah. And then suddenly, they're in this weird state where half the company has to come over and help them because they don't know how they got there. I've seen that so many times.

</p>
<p><strong>Sarah Federman</strong><br />
I had way more problems with that when I was using UI and I didn't actually understand what I was doing. So I know.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, clearly that I've actually never liked the GUI and get it seems like a lower barrier to entry when you're someone new to get but yeah, it's not the easiest to understand.

</p>
<p><strong>Sarah Federman</strong><br />
Once you get past the barrier to entry and you don't really know what you're doing. It's just a big old mess. sobbing merge merge complex.

</p>
<p><strong>Jem Young</strong><br />
I've seen so much trouble from that like people doing rebasing and then doing a merge and then doing a rebase. And then they're like, where's my history? I'm like, you just overrode it with rebase. Like what? And I'll say this pro tip for anybody out there, get ref log will usually save you because ref log keeps a master record of everything that happens unless you blow your ref log, which in that case, well, yeah, you try should be touching it at that point, actually,

</p>
<p><strong>Ryan Burgess</strong><br />
one of my first experiences with get in in the like a large code base, or a large company, I remember making a fairly large mistake we were we were on a two week sprint. And I didn't rebase against master that entire time. And I had this large large feature going in. And for some reason, we ended our sprints at 430 on a Friday, which, honestly, that's a terrible idea in itself, life protip

</p>
<p><strong>Brian Holt</strong><br />
do everything like that

</p>
<p><strong>Ryan Burgess</strong><br />
do not have your sprint stand up on a Friday at 430. That is a terrible time. He's

</p>
<p><strong>Brian Holt</strong><br />
either Fridays or 430. Neither one true, actually, that's a good point

</p>
<p><strong>Ryan Burgess</strong><br />
is even late in the day, like that is not a good idea. So here it is. 430 on a Friday, I'm like, Alright, I'm gonna check in my big feature, and it's gonna be great. Well, it wasn't great. I was so far behind, I had so many merge conflicts, I ended up screen up other people's features. And we were all there a little bit later than expected on a Friday night. And I felt like Vegas asshole. I definitely learned from that one. Cheers.

</p>
<p><strong>Brian Holt</strong><br />
So my pro tip to go along with kind of the theme here is, no matter what version control system that you're using, you need to understand it. And it's like, it's not fun. I don't enjoy git particularly, or mercurial or any of those. But it's so easy to fuck everything up. And if you have the knowledge of the tool, at least with Git, you can always get out of it. And I've, from what I understand about mercurial, it's even better than git for getting out of sticky situations. So it's worth the time to sit down and learn that tool,

</p>
<p><strong>Augustus Yuan</strong><br />
like not just from an epic fail standpoint. But yeah, I kind of want to encourage like, really understanding how Git and version control works is super useful. Not even just for like, getting out of like trouble. But like for onboarding yourself. Like when I like switch teams, I moved on to a different code base, I was asked to implement a feature, I could just like git log the file that I'm editing, and then I see like past features and see all the files that it touches. It's like really useful to just like, be able to peruse, like, the history and stuff so

</p>
<p><strong>Ryan Burgess</strong><br />
and get blame, you can figure out who was the last person that worked on that piece of code so that you could at least get context on what was happening. And you can ask them, if you're working on that you can blame

</p>
<p><strong>Jem Young</strong><br />
them. This is totally off base here. But there is a feature coming ACMA scripts next year for trailing commas and function parameter lists, which I'm like pretty excited about. It's so trivial. I know it seems silly. But one of the reasons is, it does get blamed properly. Because you know, in JavaScript, you add something to the end of Alyssia, add a comma on the next line, which distributes the blame to you, which throws up the blame. So like now you can have a trailing comma. That means if you add something to another list, we get blaming the screwed up. That's actually the main reason why is that in JavaScript, so the fix the blame,

</p>
<p><strong>Ryan Burgess</strong><br />
I was actually going to ask you why that was so like you were so excited about it. But now that makes a lot of sense.

</p>
<p><strong>Jem Young</strong><br />
Anytime you refactor code and like add commas that like the blames on you at that point. So fix it. I know it's such a silly thing. But

</p>
<p><strong>Sarah Federman</strong><br />
I hate trailing commas, but that's the most compelling argument I've heard learn. Thanks.

</p>
<p><strong>Jem Young</strong><br />
Cheers. Alright, so we got like some good pro tip. So how about just a quick show of hands in the room? Yeah, no, this is great. No one can see who here has broken production code?

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, countless times.

</p>
<p><strong>Jem Young</strong><br />
Brian, you've never run out raising

</p>
<p><strong>Sarah Federman</strong><br />
my hand. I also haven't accomplished anything, though. So,

</p>
<p><strong>Ryan Burgess</strong><br />
Sarah, I don't believe you have never broken even in even in your own projects or something like put something out on like a portfolio site.

</p>
<p><strong>Sarah Federman</strong><br />
I feel like if I did this, I would really remember it. You probably would. I mean, there was one time that like, my test stopped working three weeks after I committed it. But it was a tooling error. It wasn't actually my fault. Does that count? No, not really.

</p>
<p><strong>Ryan Burgess</strong><br />
I blame the tool that

</p>
<p><strong>Jem Young</strong><br />
I broke on my website, like my websites broken half the time. So I don't have a development environment. So sometimes

</p>
<p><strong>Sarah Federman</strong><br />
broken and not finished or not really the same thing. My stuff's never like, finished.

</p>
<p><strong>Jem Young</strong><br />
It's different. I've taken down like my own personal website, so many times

</p>
<p><strong>Ryan Burgess</strong><br />
I have production build. And I'm like, Yeah, that's good.

</p>
<p><strong>Brian Holt</strong><br />
I think mine's down right now.

</p>
<p><strong>Jem Young</strong><br />
I think so episodes about just giving confidence to newer people about not being afraid to break big. So I mean, that's what makes a great engineer is you, you know that if you break it, you can fix it. And that's okay. Like so many people are just so like trepidatious about, I don't want to touch that because it could take down the servers or something. But like, I'm not saying go take down the servers, but I'm saying like, don't be scared to experiment and try new things. Because otherwise you'll never become a better engineer.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's important to also move fast. And when you move fast, you break things. I mean, you don't want to necessarily break things all the time. But you want to learn from them. You want to take calculated chairs, right? Yeah. Don't make the same mistake twice.

</p>
<p><strong>Sarah Federman</strong><br />
You should also like actively trying to foster that culture at your company. Like if everybody's afraid to touch things, nothing, that's

</p>
<p><strong>Ryan Burgess</strong><br />
not a good point too is like if you're in fear that you're gonna get in trouble for breaking something that's not good either. And production failures, it sucks. It's not a fun thing to be in. And I also think it's important to is don't really place blame on someone, I think it's to me at the end of the day, it's a team effort. It's, so if I submit something, there's probably going to be a pull request. And someone probably reviewed that we have unit tests, we have things that all these variances that check for something going into production and breaking it, and it still happens. So it's not really like necessarily one engineers fault. I think it's a team effort. That's

</p>
<p><strong>Brian Holt</strong><br />
couple layers of failure. Yeah,

</p>
<p><strong>Sarah Federman</strong><br />
you guys ever had that thing where you break CSS? And then somebody figures it out three weeks later?

</p>
<p><strong>Jem Young</strong><br />
Yeah. CSS is subtle, because CSS is

</p>
<p><strong>Ryan Burgess</strong><br />
a pain in the ass. Do you have a time when this happens?

</p>
<p><strong>Sarah Federman</strong><br />
Yeah, I'm sure I did. But I can't remember it. Now. There was one time I like was having a conversation with a client and I kept updating things and he wasn't seeing it. I was so confused. Because when I was logged into the WordPress admin, I could see the changes. But when I logged out, they weren't there anymore. And it turned out the whole thing was a cache issue. Nobody cleared the cache. So

</p>
<p><strong>Ryan Burgess</strong><br />
on WordPress is bad for that too. Because there's like a 15 minute delay. One, a lot of people run that caching plugin, and it's super cache. Thank you. And it's good, but it's almost too good. Sometimes when you're trying to it's not there. It's not fixed and change could be there. I haven't worked with WordPress in like years, but it's, yeah, well, it's it's not terrible. It's it's a nice little CMS to get up and running. I'm not gonna hate on it.

</p>
<p><strong>Jem Young</strong><br />
I mean, I won't say the old joke. But you know, cache invalidation is one of the hard problems in computer science. And it's true, it is

</p>
<p><strong>Ryan Burgess</strong><br />
true. What was the full quote for

</p>
<p><strong>Augustus Yuan</strong><br />
that? I remember there was a there's like, it was just more than one thing, but it was no, it was it was one of the main

</p>
<p><strong>Brian Holt</strong><br />
things cash and validations and off by one errors. Yeah, there was two things that are wrong, right. Which is true.

</p>
<p><strong>Sarah Federman</strong><br />
There was one time I did like a couple of like nested SAS extends, and I had like this 200

</p>
<p><strong>Brian Holt</strong><br />
That's an error. Right?

</p>
<p><strong>Ryan Burgess</strong><br />
How did you fix it? Or? Have you done it since?

</p>
<p><strong>Sarah Federman</strong><br />
No, I haven't I learned.

</p>
<p><strong>Brian Holt</strong><br />
Cheers. I will drink to not using SAS extense.

</p>
<p><strong>Jem Young</strong><br />
So I guess I'll tell one of the worst times I've broken production. So I was at Chartbeat. What am I earlier companies and using Python. And I had a lot working tested in dev and it worked fine. I'm like, alright, we'll ship this right before lunch, obviously, which is also a steak membership things for lunch, if everybody's leaving the office. So some things for lunch, we have the dashboard up on the screen in the office. So just to see if production is broken or anything. And walking away about to get a burrito and then suddenly to like, all this metrics disco off the charts, latency goes up, everything's down. It's like, Oh, what happened? Like, I don't know, we scrambling, scrambling scrambled. It turns out, I was using a dev bill. And we didn't. What is in Python. When you bundle it together, it's not an egg. That's what it's called. But there's a way of like bundling your dependencies in Python.

</p>
<p><strong>Ryan Burgess</strong><br />
I can't think of it. I know what you're talking about to you. It's

</p>
<p><strong>Jem Young</strong><br />
like called a wheel or something I forget. But yeah, I'm not the best back end engineer here. But it turns out, the production dependency was pointed at something. So it worked in dev just fine, because dev didn't bundle anything. But it wasn't bundled properly. So I was importing something Python it was didn't exist, production took down all the servers, just the web servers. But still it looks down your publication company and metrics company and your website doesn't work anymore.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I think there's there's plenty of times when that happens for all companies or something like that happens. It sucks. I remember one time. And it wasn't my mistake. It honestly wasn't it. It was it was when I was at Evernote, our code base was in PHP. And there was literally something wasn't closed properly. And it took the entire like, I think it was like the homepage or something like a major component down. And it was someone to check something in in another country. And so I got called at like five in the morning. And they're like, Yeah, shit, like the homepage is down. And like that's a pretty big deal. So I'm like going through quick, quick get get logs helped me there. And sure enough, it was just like a semicolon or something hadn't been closed, because PHP requires that. And that was it back up and running. It was like a couple minutes. But that sucks having to wake up early in the morning to deal with that.

</p>
<p><strong>Sarah Federman</strong><br />
I'm so glad I'm not an SME. Oh, yeah, I wouldn't want to

</p>
<p><strong>Jem Young</strong><br />
make a lot of money. They should there. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
Speaking of my junior SRE merit badge that I got since read, it didn't have anyone I was hired. We had a tool that I wrote in Python. So that's that this should tell you where this fuckup is going. for deploying services I should mention that I co wrote this, we were deploying our service for Black Friday for the marketplace, which the marketplace made most of its money around Black Friday. And it tried to do other things currently. And we most of the time, we had only five servers running at any given time. So it was no big deal to run five concurrent deployments. But we scale up to 151, because we had a really inefficient back end. So that's a whole nother story. That's a fuckup unto itself. But we were trying to deploy this for Black Friday, right before that sales were going to start. And like this is like, Oh, my God. So we're trying to deploy 150 servers concurrently. Python couldn't handle that many threads all at once trying to spin up 150 threads concurrently tried to deploy the entire thing. And right as the sale of starting the entire website went down. Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
like right when you need it to be there.

</p>
<p><strong>Brian Holt</strong><br />
So this fuck up entailed us having to hand deploy 150 servers, which we did, we actually made it in time, the three of us deployed 150 servers by hand and in like five minutes, use holy sh. We were using just like a quick and dirty script that we had written that sequentially connected and deployed them.

</p>
<p><strong>Ryan Burgess</strong><br />
It's pretty impressive. You did it that fast.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, no. Well, then the the rest of the of the total shit show too. But that was just the that was the grand cherry on top of all of it.

</p>
<p><strong>Sarah Federman</strong><br />
So how are you that you're married? Man?

</p>
<p><strong>Brian Holt</strong><br />
That's how I got my merit badge.

</p>
<p><strong>Jem Young</strong><br />
Oh, just so people don't know. Sre Site Reliability Engineering. Good call. Yeah. Yeah, we're saying SRE is all that can be. It's like when salespeople use sales acronym,

</p>
<p><strong>Sarah Federman</strong><br />
SRE is only talking.

</p>
<p><strong>Ryan Burgess</strong><br />
Hey, are you serious, though? Like, we're so bad in engineering. We have so many acronyms. Yeah, we're about it's not just salespeople,

</p>
<p><strong>Jem Young</strong><br />
well, sales for their positions. They're like I'm a something at some company. And I'm like, six. Yeah, and I have no idea level

</p>
<p><strong>Ryan Burgess</strong><br />
should be the same thing as saying the UI engineer or something like that. A lot of people don't necessarily understand what that is. In our field. Yes. If you told your mom that, what would she think?

</p>
<p><strong>Jem Young</strong><br />
That's true? She would, she'd be like,

</p>
<p><strong>Ryan Burgess</strong><br />
what's what's UI?

</p>
<p><strong>Jem Young</strong><br />
Like you make the movie? I'm actually located standard.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good position. Yeah,

</p>
<p><strong>Jem Young</strong><br />
you know what, he's a too tired,

</p>
<p><strong>Ryan Burgess</strong><br />
are you stunt double, that's actually even cooler.

</p>
<p><strong>Jem Young</strong><br />
But I have to like mask my face, because I'm actually in a bit better shape than here.

</p>
<p><strong>Ryan Burgess</strong><br />
He's wearing a hoodie all the time, too. So you could probably do it. It's true.

</p>
<p><strong>Brian Holt</strong><br />
Gym actually is bulletproof. I don't know.

</p>
<p><strong>Ryan Burgess</strong><br />
So one other thing that I've tried to do in the past, and I feel like it's a bit of a mistake, and it it was even something that was my calling for on the team was trying to migrate an entire code base all at once. Rather than doing it breaking up into pieces and doing it in chunks. The problem there that I found is it becomes such a daunting task, you almost never get it done. And because there's so many other things that you're trying to do, you can never get something in production. And I feel like getting something in production, you'll learn from it and be able to iterate on it and get something out quicker. Yes, cheers.

</p>
<p><strong>Jem Young</strong><br />
That's a good pro tip. If you're doing migrations, do it in chunks, like don't, don't do it all at once.

</p>
<p><strong>Ryan Burgess</strong><br />
It's such a daunting task, you're never going to be able to go away and quit working on new features and things like that for a long period of time, you're not going to be able to tell your stakeholders, hey, guess what, we're going to take a year or six months to go migrator entire code base to a no new technology, they're not going to, they're not going to let you do that. So I think it's like something that you should do in pieces. It's actually something that I'm talking about full stock to in Toronto, is that's kind of what I'm talking about it actually talking about how Netflix did it and that's something that we did was breaking it up into pieces, and tackling it throughout any new features that we did, we tried to tackle in the new codebase.

</p>
<p><strong>Sarah Federman</strong><br />
That's pretty good advice for basically everything to like, don't write too much code at once. without testing it,

</p>
<p><strong>Brian Holt</strong><br />
you're going to launch things things are gonna go poorly, you're gonna want to pivot and if it's tough, it's tough to pivot entire apps. It's easy to pivot a couple

</p>
<p><strong>Sarah Federman</strong><br />
of features, or even just as a beginner like writing jQuery carousel, like, right one thing then tested. This Yeah, that's good debugging.

</p>
<p><strong>Jem Young</strong><br />
That's a probing like, Web UI is like, you can do that. It's like, write one line. So let me show up. Okay. Thank you.

</p>
<p><strong>Sarah Federman</strong><br />
Yeah, it's not like we have to take like five hours to run something on a database.

</p>
<p><strong>Brian Holt</strong><br />
That's a good point.

</p>
<p><strong>Ryan Burgess</strong><br />
Another thing is save often. Command S, especially for

</p>
<p><strong>Brian Holt</strong><br />
backup, right? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
And backup. I've definitely run into those situations where I've been writing like, it's probably not lately. I feel like it was longer years ago, where it was something that yeah, backing it up or anything like that. There wasn't as creative version control. Like I think at one point, when I started my career, I feel like we just FTP and overrode things. There was no nicely Git or anything like that it was there's no good version control.

</p>
<p><strong>Jem Young</strong><br />
Are you working on this file? No. Okay, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you would literally verbally have to talk to each other. It's like, Hey, Jem, are you working on this? Like, I'm about to overwrite the one that's on the server? Is that cool? Yeah, it's all right. Yeah. And so you'd have to like copy and paste your changes, and it was terrible. But saving often is always a good thing. And backup, learn your keyboard

</p>
<p><strong>Sarah Federman</strong><br />
shortcuts. Cheers.

</p>
<p><strong>Brian Holt</strong><br />
Cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
So I have some screw ups I've been waiting to tell. But I was just trying to see what's what's like the best way to phrase it. So I guess I'll start off with this one recent one where, which is related to WordPress in the blog. So to increase our SEO presence, we were trying to do a reverse proxy to our blog. So we currently host our blog<a href="https://twitter.com/blog"><a href="https://twitter.com/blog">@blog</a></a>.evernote.com and then the marketing websites evernote.com. And so these, this SEO consulting firm comes to us and says, Hey, you know, if you move your blog, dye evernote.com domain to evernote.com/blog, you know, it would just increase your SEO, SEO presence, like you would give your main domain evernote.com A lot of SEO ranking. So we're like, okay, so how can we like move all of blog to evernote.com? Over to evernote.com/blog. That's a lot of work. Let's talk to you that. So engineering manager comes is like, we should reverse proxy, let's just make it so that every no.com blog goes reverse proxies pulls the content from blog.evernote.com. And then like, when people go to evernote.com/blog, they won't know the difference. So it's all good. Apache has like this nice thing that lets you reverse proxy. But then there's this big thing where it's like, okay, well, we can grab all the content from the blog, but then all those URLs, they don't get rewritten, right. And so the whole point of the Google search bot is to be Hey, like, let's it goes based on the links, right, like crawls the page and looks at all the links and then associates, it gives ranking for it based on those links on there, sort of like Okay, so we need to rewrite those links somehow, how can we do this, so we first tried just manually rewriting them, that didn't work. And so that broke a bunch of stuff. But luckily, that was on testing. And so then we looked up some things and people were like, you know, there's a way for you to detect if you're being reversed proxied. And then you change the home URL directly in the WordPress database directly, which will automatically like change all your links, that sounds pretty promising. So we do it test, it looks good. It's great. We do some testing, we test service looks good. Let's ship it, we ship it. And then what we didn't realize was our blog theme where we put this code that changes the home URL directly, also was deployed to all of our international sites which share the same theme. So change all their home URLs. So now all of these international sites have different home URLs, which so if you can imagine an international site might be like blog.evernote.com/like, z HCN, for China or something. And now all of a sudden it says, oh, reading reverse proxy, let's change it to blog.evernote.com. Then everything just breaks. Once that deploys, we automatically revert and we're just like, trying to figure out what happened when we figured out this theme thing. And what we learned was after a little more learned, shares. What we learned was there is this very convenient Apache module called mod proxy HTML, which will do that for you. So I think like, the lesson was, don't use WordPress. use WordPress. Definitely, if we I think if we gave it some more time, and looked into it, like that would have been better, but

</p>
<p><strong>Ryan Burgess</strong><br />
sometimes you don't know until it happens though, too. Yeah, she's just got to break. Yeah, sometimes that happens. And actually, WordPress is bad for that, too, in the fact that every URL is like hard coded in the database to which I've always pissed me off, is there's been times where I've changed domains or something like that on a WordPress blog, get the SQL file, search and replace and then re upload it to me sounds like a pain in the ass. Like, why an error prone? Yeah, very error prone like the human doing, it could very much screw that up big time.

</p>
<p><strong>Sarah Federman</strong><br />
When I was first learning WordPress, I didn't really want to use the loop. Like I refused to learn how to use loop because I thought it was bad. Everybody was bad. So instead of doing that, I went in and I made all of these custom SQL.

</p>
<p><strong>Brian Holt</strong><br />
Can you qualify with a loop is?

</p>
<p><strong>Sarah Federman</strong><br />
Yeah, sure. So WordPress has this mechanism called the loop. It's basically how they display content, you have to kind of call the loop in your code, and it automatically spits out something for that page. But that's like your nav or your articles or whatnot. So like most people, when they can avoid it, well, sometimes they'll just like request all your nav items in a different function instead of using loops or something like that. But um, instead of doing that, I did a lot of like, I'd like a six joins and like three outer joins and an inner selecting like a group concat and it just, it was like 20 lines of SQL. It was it was really gross. Don't do that. But I ended up like deeply kidding, content, like 10 times and nobody noticed for like three weeks, certainly.

</p>
<p><strong>Ryan Burgess</strong><br />
So these are mistakes that Sarah you made, like you've learned, I know

</p>
<p><strong>Sarah Federman</strong><br />
I like I keep remembering things.

</p>
<p><strong>Augustus Yuan</strong><br />
So much learning going on.

</p>
<p><strong>Ryan Burgess</strong><br />
That's another tears. Tears is

</p>
<p><strong>Jem Young</strong><br />
one thing I've learned about if I've learned anything at all about databases, SQL,

</p>
<p><strong>All</strong><br />
cheers, cheers.

</p>
<p><strong>Jem Young</strong><br />
It's that be able to roll back. Your database changes, do not make large sweeping changes unless you have the ability to roll them back. Because I've, I've seen more things break because people make a bad database update. Like, I'll update the schema real quick. And then once you break that, and you have the ability to roll it back, you are

</p>
<p><strong>Brian Holt</strong><br />
breaking break.

</p>
<p><strong>Jem Young</strong><br />
Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
databases are hard in general, actually, I feel like they're just, it's an old school way of doing things. And it's hasn't really changed over the years, I feel. I'm always skeptic of them. It's like really hard to change anything in a database.

</p>
<p><strong>Brian Holt</strong><br />
My first job was an internship for a multilevel marketing company in Utah, a pyramid scheme. Legally, I can't say that. It was an internship is PHP, literally my interview was they handed me a sheet of paper that had PHP coding, I had never, I didn't even know PHP was the time. And the guy asked me like, What do you think this does look like? Well, there's a lot of dollar signs that have to do with money. He's like, No. And I saw the word off somewhere. I was like, Oh, this might be like a login. And I guess out of the 10 people that interviewed for the internship, I was the only one that got it. Anyway, that's it totally. So this particular job, I had to work with Nagios. Has anyone heard of Nagios XL database health monitoring system or data center monitor? It's open source, it's beastly. It's robust, but it is beastly. I think it's an apt description for WordPress as well. But its database, underlying inner workings are just monstrous, I think is putting it lightly. Anyway. So I had to write UIs. On top of this querying directly against this, this database, again, never done PHP never had written SQL never had written CSS never had written HTML, this was all totally brand new to me. And so I was writing these joints and just SQL queries that were swear to God, I printed them out and took them to my manager to make sure that I was doing them, right. They were two pages long. Because they were doing like joins of Inner Joins of select stars of just crazy crazy shit. One thing that I learned, cheers, cheers. Very well, was that run your SQL query is it can some sort of test database first, just anything you can do, because I ran one of these two page queries that I had written against the production database. And I got about a quarter of the way of deleting everything in Nagios had before I realized like, this is taking a long time. I wonder why this is taking so long. And it was nested deep, deep inside of some query that I was doing some sort of delete that I wasn't expecting in some way. I don't even remember what it was. That's probably my biggest fuckup. And luckily, to Jen's point, they were able to roll back pretty quickly. And it wasn't actually that big of a deal. But yeah, do we deleted about a quarter of a data center?

</p>
<p><strong>Ryan Burgess</strong><br />
I guess that's all the more reason to have failsafe something in in your code ready to roll back. Like that's something good to have in, in whatever your deployment is. Being able to roll back is really important.

</p>
<p><strong>Brian Holt</strong><br />
I like Netflix's philosophy of like the Simian Army of like, let's just fuck shit up and make sure that shit getting fucked up as a part of our process, right?

</p>
<p><strong>Ryan Burgess</strong><br />
So if that's exactly how it goes, but no, that's

</p>
<p><strong>Brian Holt</strong><br />
actually the terminology that is fine. I'm a fuck your shit up.

</p>
<p><strong>Ryan Burgess</strong><br />
But it is like let's move quickly. And if we break stuff, like let's have something in place, rollback

</p>
<p><strong>Brian Holt</strong><br />
and let it's well tested and well used, right? Because like, once you have a catastrophe, like you could have every roll back in place, but if you don't know what actually works, you know, it's like shorting this cat, right? It's dead bolt and alive until you actually look and then it's actually dead and you're

</p>
<p><strong>Ryan Burgess</strong><br />
screwed. Nobody likes to have their Netflix not play.

</p>
<p><strong>Brian Holt</strong><br />
I get calls from like my aunt like what the fuck?

</p>
<p><strong>Augustus Yuan</strong><br />
I remember actually, there's this Reddit thread of what is like a job that when he's there, no one notices him. But when once he's gone, then everybody like freaks out. And I think DBAs and like site relay tribe. Reliability Engineers are probably like really, really high up there.

</p>
<p><strong>Ryan Burgess</strong><br />
You have no idea what they do, but when they're gone, you know, yeah, what's going on? Why is this not working?

</p>
<p><strong>Augustus Yuan</strong><br />
Yes. Speaking of like SQL, like when I started as an analytics intern at Evernote, I didn't like make any changes. I didn't have like that privilege, but I definitely did do like a slight Star once on, like a high transaction table, which, you know, slows everyone's else's queries down. Everyone's like, why and like, everyone, I always is like, this query seeking really long, and they just look at all the SQL processes. And they're like, oh, that's why that intern, that intern her Gosh, that's

</p>
<p><strong>Brian Holt</strong><br />
a good point. If you if you're doing SQL has been forever, since I've had to do it directly. But learn explain.

</p>
<p><strong>Augustus Yuan</strong><br />
Yes, yes. I was gonna say, for clarification, that statement, I believe, is once you run it, it tells you like how long it would take to run the statement and give some information, right?

</p>
<p><strong>Brian Holt</strong><br />
And it breaks it down piece by piece of like, this does this this does this, this is very heavy. This one's okay.

</p>
<p><strong>Jem Young</strong><br />
Great, just quick poll a room like this, you say SQL or you say SQL,

</p>
<p><strong>Augustus Yuan</strong><br />
I say SQL, I say SQL. Sometimes

</p>
<p><strong>Sarah Federman</strong><br />
I say SQL and knowledge is also wrong, but easier. I say

</p>
<p><strong>Jem Young</strong><br />
SQL, I was taught SQL, I say

</p>
<p><strong>Brian Holt</strong><br />
SQL, I thought SQL is a Microsoft product.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm not sure I think I say SQL. Let

</p>
<p><strong>Brian Holt</strong><br />
me be clear, I think you said is a Microsoft product. I'm asserting that it is yeah. SQL Pro and SQL Server that's that is a Microsoft processor. Have

</p>
<p><strong>Jem Young</strong><br />
you saved my SQL?

</p>
<p><strong>Brian Holt</strong><br />
MySQL?

</p>
<p><strong>Jem Young</strong><br />
MySQL? That's weird to me.

</p>
<p><strong>Ryan Burgess</strong><br />
I was I was always say I say my SQL,

</p>
<p><strong>Sarah Federman</strong><br />
I was taught like both ways, depending on the mood of the professor that day. So

</p>
<p><strong>Ryan Burgess</strong><br />
it's funny, we've actually like never really talked much about SQL or PHP very much at all on our any episodes in the past,

</p>
<p><strong>Brian Holt</strong><br />
but I get the fuck ups. And as

</p>
<p><strong>Sarah Federman</strong><br />
you can tell, we're front end people have been

</p>
<p><strong>Brian Holt</strong><br />
talking about pythons here.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I've done a lot of PHP. It's been years since I've had to do it. But it's not the worst. It's not my choosing. Now, I would prefer not to have to deal with it. But it's not the worst.

</p>
<p><strong>Brian Holt</strong><br />
I mean, it's a craftsman problem, right? Like you can write well crafted PHP, right. Sure.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think, to be honest, it's kind of like JavaScript, it allows you to just kind of write how you want to write, I feel like that's always what I think of the two of them are both very similar in that way,

</p>
<p><strong>Sarah Federman</strong><br />
great beginner language, because you can just take as little as you want, or take as much as you want.

</p>
<p><strong>Jem Young</strong><br />
Yeah, you can go from HTML to PHP, really from bash on PHP. It's like one of the most popular languages in the world, mostly due to WordPress. But yeah, PHP runs the internet, PHP, Apache run majority of the internet,

</p>
<p><strong>Sarah Federman</strong><br />
especially if it was built for the

</p>
<p><strong>Ryan Burgess</strong><br />
last 10 years WordPress and like Drupal. Those are huge CMS is a lot of companies are using and a lot of sites are using so I think yeah, it is a lot of people using it.

</p>
<p><strong>Brian Holt</strong><br />
Oh, and I think sevens a pretty good light, like made some good advances sevens pretty fast. PHP seven, the latest revision?

</p>
<p><strong>Ryan Burgess</strong><br />
I haven't written any of seven. I haven't either. But

</p>
<p><strong>Sarah Federman</strong><br />
I have a whole book on how to migrate just seven, I got free and HL five. Have you looked at it? No.

</p>
<p><strong>Jem Young</strong><br />
My key problem PHP, and we're way off tangent here. But my problem PHP is like people are really good at Php tend to be really bad at memory management. Because for instance, like how PHP works is it comes in through a patchy, what happens is it spins up an entirely new PHP instance for that one request. And then when that request is done processing it dies. And that's how PHP works. So the problem with that is you never think about memory because you're like, oh, it only exists for the life of requests. And I see a lot of PHP programmers removed other languages and they like, oh, what Wait, what do you mean me wising like eats up memory on the back end? And like, they don't think about memory because it's only the one request Exactly. But in like a longer live language like Java or even using node you can eat memory node is a good example. Yeah, you can like dig yourself into a really deep hole. And it wouldn't be apparent until like, much later when that process has been running forever and ever and ever. Like go back to get I'll say this disable force pushing the master. Like there's no reason you ever need to force the master like in general unless something's really really broken. But just in general, you shouldn't be forced pushing if you can help it but disable force pushing.

</p>
<p><strong>Brian Holt</strong><br />
And do always do force with lease. I have. Yeah. Yeah. So I gotta remember exactly what force with leases basically forced with lease doesn't really let you make a thug shit up. It just lets you kind of fuck Shut up. And I'm trying to remember exactly, exactly what it does, but it's something that in effect, it's going to allow a rebase but if you have changes that you haven't rebased on top of that exist in the the remote branch, right that you have commits there that haven't been pulled into your rebase it's not going to let you push. Okay, so for us it's just like fuck it just like

</p>
<p><strong>Jem Young</strong><br />
I'm right. I'm right you're wrong and take my Yeah, force with

</p>
<p><strong>Brian Holt</strong><br />
lease is gonna say, Are there any commits that exists at all that you haven't pulled in even if it's out of order and crazy?

</p>
<p><strong>Jem Young</strong><br />
That's a good one. I would say disable force pushing to master in general five branches are fine but also do not have the skip to if you don't have for switching the master disabled, do not have a Jenkins job that kicks off. Whenever there's a new commit to master. I've been at a company that did that. So you have like to just like Speeding tradesman utility force was the master Master. And then it builds off that force push. So like everything's broken in one fell swoop

</p>
<p><strong>Ryan Burgess</strong><br />
master could be just mastered depends on what your build to production it whatever your master branch to production is because I've been places where it's been production branch or like staging branch, it doesn't matter what it is whatever the production one is, you should not force on that.

</p>
<p><strong>Jem Young</strong><br />
Yes, I don't think production builds in general should be automated. It should always be a manual thing, which should always be like, I'm deliberately saying, I'm going to update production with this code.

</p>
<p><strong>Ryan Burgess</strong><br />
Someone has to go into Jenkins and hit publish. Yeah, build sorry.

</p>
<p><strong>Jem Young</strong><br />
Yeah, automated builds, or I've seen some trouble run into that. Because like, it just kicks off this whole pipeline that it's hard to kill if something's wrong. Oh, crap. Now I broke something. But it's hard to tell because that the jobs are just running and running and running.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good point. Sometimes manual stuff is okay. Yeah,

</p>
<p><strong>Jem Young</strong><br />
it's okay for some things. But again, cool, no, actually, this all the air gets its own. It works, amazing QA team and like amazing engineers. But I've like forgiving my small startup days where it's just three people. And you're like, I don't want to build again, but we can build again. So

</p>
<p><strong>Brian Holt</strong><br />
now though, I mean, we had a service called dread, not a small startup that I worked at. And so it was manual still, but it was just like, go to a page, click Deploy. Right? And like that button just kicked off the, you know, that the freight train that got everything to production, or at least someone had to say, Okay, I'm, I'm conscientiously wanting to deploy this thing. I think that's good idea.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think that is good. Even it is that one button that you had to think a little bit about pressing it? And you're like, Yeah, we're safe. Let's go.

</p>
<p><strong>Augustus Yuan</strong><br />
And there's some accountability. I guess for that. If you built it and stuff. People know to maybe ask what's going

</p>
<p><strong>Brian Holt</strong><br />
on Brian, press this button.

</p>
<p><strong>Ryan Burgess</strong><br />
You have someone to blame. Yeah, that's true. So as we wrap up today's episode, you'd like to share pics for things that we like or found interesting to share? Let's go around the table and share pics for today's episode. Sarah, you want to start us off

</p>
<p><strong>Sarah Federman</strong><br />
my pic? Well, one of them is. GitHub University has happened. And they announced that there are no code reviews on GitHub, which is awesome. High five. Yeah, that's awesome. So you can do all your code reviews on GitHub. And then on the Get train, there's a new website. It's pretty awesome. It's called Ocean yet. Yeah, so if you mess up your get, it just kind of tells you

</p>
<p><strong>Brian Holt</strong><br />
what. It is awesome. I was checking it out. That's a great pick.

</p>
<p><strong>Sarah Federman</strong><br />
I wish I own that domain.

</p>
<p><strong>Ryan Burgess</strong><br />
It is a good domain. Jam. What do you have for us?

</p>
<p><strong>Jem Young</strong><br />
So my first pick is apex. The story of the hypercar it is a documentary ish film on Netflix and it is phenomenal. I'm I'm a big car person. I don't talk about it too much because of a boring car now, but if you're even remotely into cars, you need to see this film. It is it is gorgeous. So Chef's Table on Netflix is kind of food as art. And the chefs are the artists. This is like cars as art and they at this level they are pure art form. It's always so good. Like there's no practicality to million dollar car but it's gorgeous. It is a phenomenal movie watch on like the highest resolution TV you can because it's beautiful movie. Second pick, totally underrated Netflix Original called a very secret service. It's French. It's about like the French Secret Service in one say the 50s it is hilarious. It is one of the funniest shows on Netflix right now. And nobody's watching it. I've never seen it. It is so funny. It's in French. So people are like, Oh, but no, like them being French and like kind of old stereotype cliches of French people from the 50s it's just it's so good. It is one of the best shows on Netflix by far.

</p>
<p><strong>Ryan Burgess</strong><br />
Augustus. What do you have for us?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, one of them I have is this medium article that kind of viral? It's, it's called I got scammed by Silicon Valley startup. I don't know if you guys read it. No. Okay. It's basically about this guy who essentially like went all in he like, he found this startup. The founders, like talk to them. It sounded really promising. He got really high rolling it basically she got screwed over. They were behind in paychecks, and it is a crazy story. totally recommend reading it. And then also, I was like looking around I found this GitHub repository called react game kit. It's like making games with React and I thought it was pretty interesting. Okay, so

</p>
<p><strong>Brian Holt</strong><br />
my my music pic by popular request is Polar heart. It's a band out of Sydney, Australia. Not the other Sydney that you might have been thinking of. Just kidding. That's weird. No, I just felt like I had to qualify Australia, New South Wales. It's really cool. It's kind of chill electronic music. I sent it to Geminis twice by now. I probably listen. Super great. I'm kind of obsessed with my second picks kind of out there. But I'm going to go with roll with it anyway. And it's just traveling in general. I just got back from three and a half weeks abroad. But it's kind of the cure for the bubble. Like definitely like we're we all live here in San Francisco and we're definitely in a very strong bug bubble here. And so maybe our listeners aren't in quite as strong a bubble as we are But it definitely pops your Bubble to go out and see other countries other cultures, other languages just other ways of living. It kind of gives you perspective and like it shapes the way you think of the world politically, religiously, spiritually all those kinds of things it that's definitely a shaping force and you need to have your your bubble popped. Every so often.

</p>
<p><strong>Ryan Burgess</strong><br />
I have two picks this episode one I'm actually going to pick a colleague's talk that Mars Jullianne, she gave at Netflix the last week at the modern web event. She talked on best practices for reusable UI components. It's a really good talk just really makes you think about how to write reusable components and scalable components. So really good talk from Mars. And then my second pick is also a programming pick is React Rally 2016 videos, they are now up online. I enjoyed the conference. Jem, you were there as well. It was a good conference

</p>
<p><strong>Jem Young</strong><br />
amazing.

</p>
<p><strong>Ryan Burgess</strong><br />
Lots of really good talks, and now they're all available online. I suggest everyone go watch them all. I can't think of a talk that wasn't good.

</p>
<p><strong>Jem Young</strong><br />
So I wrote up our list of Top tips. First one don't write in bad words in your code. Second one, know what you're doing and get Brian don't enter sprint on Friday. That's always good do not do not deploy code on Friday that's or

</p>
<p><strong>Ryan Burgess</strong><br />
late in the day. Yes, save often.

</p>
<p><strong>Jem Young</strong><br />
Someone said Take your time. That's good advice and everything. A be able to roll back your database and learn sequel explain.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you all for listening today's episode, make sure to rate us on iTunes and Google Play and subscribe to the front end Happy Hour podcast on your favorite podcast catcher. Follow us on Facebook and Twitter. At <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>

</p>
`;
        return transcript;
    };