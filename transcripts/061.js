module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End Happy Hour podcast. We have two special guests joining us in this episode to talk with us about front end build tooling. I'd like to welcome Jamie and Mia Do you want to give us a brief introduction of who you are? What you do and what your favorite Happy Hour beverages


<p><strong>Jamie Kyle</strong><br />
so I'm Jamie forget what were the things twitter handle was

</p>
<p><strong>Ryan Burgess</strong><br />
who you are

</p>
<p><strong>Jamie Kyle</strong><br />
who I am.

</p>
<p><strong>Ryan Burgess</strong><br />
What you're and what your favorite Happy Hour beverages? Oh, yeah, what you do.

</p>
<p><strong>Jamie Kyle</strong><br />
So I'm a developer at Atlassian and work on build tools love open source stuff. may have heard of like Babel or That's it. Um, yeah, I've worked on a lot of, you know, build tooling. reason for being here, I guess. And my favorite drink is the Sierra Madre from Nina. He's Valley and if you're wondering how that's made, I've looked it up for you. With right lemon. ingredient. Listen, here's smoke.

</p>
<p><strong>Ryan Burgess</strong><br />
How does one capture smoke? Interesting support it you know?

</p>
<p><strong>Jamie Kyle</strong><br />
Honey, and like Hellfire hurts, which? Good.

</p>
<p><strong>Ryan Burgess</strong><br />
It's like smoke and hellfire? Yeah,

</p>
<p><strong>Jamie Kyle</strong><br />
the smoke may come from the hellfire.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, this actually does sound delicious. I do want to dress wonderful. And that place is great. So yes. 

</p>
<p><strong>Maia Teegarden</strong><br />
All right. Yeah. I'm Maia Teegarden and recently joined Atlassian to work with Jemmy. And building cool open source. Front end tooling. Great. And what is your favorite happier? Happy Hour drink? I usually go with beer. But I like to just try a new beer like every time I can. So usually, like the more hipster happy, the better. But

</p>
<p><strong>Augustus Yuan</strong><br />
nice. Choice. Like your last name. Your first name is cool, too. But thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
Let's give introduction of the panelists. Augustus you want to start?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, yeah, sure. My name is Augustus Yuan. I'm a front end engineer at Evernote. I'm sitting

</p>
<p><strong>Stacy London</strong><br />
in London on my front end engineer at Atlassian. And I'm Ryan Burgess. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
a software engineering manager at Netflix. In each episode of the front end happier podcast, we'd like to choose a keyword that if it's mentioned at all, in the podcast, we will all take a drink. What did we decide the keyword is today? Bundle bundle. All right. So at any point in the episode, we say the word bundle starting now, we will all take a drink bundle. Cheers. Alright, well, let's get started. What is front end build tooling and what has changed about it over the years.

</p>
<p><strong>Jamie Kyle</strong><br />
So Bill in general, can go in a lot of different directions. You can go in terms of compiling and bundling packaging or whatever, chairs DMH years,

</p>
<p><strong>Augustus Yuan</strong><br />
here we go. But you're

</p>
<p><strong>Jamie Kyle</strong><br />
also into like testing and how you just run CI and all the processes there to how you publish and release code. And there's a lot of direction there. And I think back when I was doing product work, I took a lot of it for granted. Because you just don't really notice it. You're like, I run the scripts, and stuff happens.

</p>
<p><strong>Ryan Burgess</strong><br />
magic happens.

</p>
<p><strong>Jamie Kyle</strong><br />
But it gets this tons of bells and whistles and config files. And it's a fun time.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think I think back like when I first started, that just didn't exist. Like for the front end, you were just like, oh, well just throw some JavaScript on the page and start going to town. And that was that was it. You didn't have build tools

</p>
<p><strong>Jamie Kyle</strong><br />
to really worry about. Was cat ever your build process? No,

</p>
<p><strong>Ryan Burgess</strong><br />
I definitely know what it is. But never used it.

</p>
<p><strong>Jamie Kyle</strong><br />
Just when you concatenate all your files into one file. That's how you package code

</p>
<p><strong>Ryan Burgess</strong><br />
didn't require JS kind of do that a bit too. Yeah, it might have done a little bit more. I can't remember exactly.

</p>
<p><strong>Maia Teegarden</strong><br />
Oh, like a different module system. That made me not want to learn it. So yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
That's nothing you're not missing. No, it was okay. When I first use it. I was like, this is really cool and very powerful. But it wasn't that impressive. Like it was like, yeah, it started to get really frustrating when you aren't a big large project. It was really frustrating. I was a huge fan when like Browserify came out that one to me was like holy shit. Yeah, now we're actually doing concatenating smartly, not just all into one file. Totally require

</p>
<p><strong>Stacy London</strong><br />
felt really hard. It took like reading all the docs over and over and you're like, What am I still supposed to do? I'm not sure. And then yeah, Browserify was like, the time like we'd spent trying to get required to work. It was like, we spent two days and like, oh, just stop at the browser. Fine. It was like already working.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And then it's all common J S, which is so handy.

</p>
<p><strong>Jamie Kyle</strong><br />
Yeah. And then we tossed Browserify aside.

</p>
<p><strong>Ryan Burgess</strong><br />
And what did we replace it with?

</p>
<p><strong>Jamie Kyle</strong><br />
parcel.

</p>
<p><strong>Ryan Burgess</strong><br />
Roll up web pack. Oh, man. So the things

</p>
<p><strong>Stacy London</strong><br />
like at a super high level, it was just like, we never had anything in the front end to say like, oh, we want to not ship like 200 JavaScript files to the client, or we want to run unit tests on like, in an easy way as part of our build, or we want to lint like CSS linting or even HTML or JavaScript, like all that stuff. None of that we ever did. It was no, it's just like, write it. Ship it. Yeah. Ship it.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, we've even talked about like something like Git and having that which, you know, definitely helpful, helpful tool. But I remember just FTP, you just toss it on server. It's good. Yeah. Like, just make sure that you don't overwrite your buddy's file, and you're good. That's not best practice. I mean, whatever works for you. No judgment. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
I want to give a shout out to our first episode, which was we started off of this medium article, the state of web development, and where someone was talking about how it's so overwhelming with all the tools and like, I don't know, I feel like front end tooling is like, a very, like overwhelming place. If you haven't started definitely for beginners. But I think it's also kind of misunderstood. Like, in many ways, I

</p>
<p><strong>Ryan Burgess</strong><br />
think that's fair, because I look at it is yeah, it can take a lot to actually get a project started and your your setup your whole build tooling. And it can be daunting, because it takes you all that time. But it's so powerful in the end, that it probably saves you a lot of headaches and time in the long run. It's just an upfront step. And I remember that article, because yeah, we just goes back in like 2015 16, there's this article that just like talked about going front end is so craziness, it's just, you know, too hard to deal with all the different build tools. And yeah, to me, I kind of disagree. I actually enjoy that build tools part of it, and really thinking what works for my project.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think if you've done it long enough, you have like been through those pains, and like you super appreciate it, but like you have not done it very long. You're like, what is all this nonsense? Thank you. Yeah, if you if you weren't to have those things, you would appreciate them a lot more. What

</p>
<p><strong>Jamie Kyle</strong><br />
were people's first, like testing tool? Images?

</p>
<p><strong>Ryan Burgess</strong><br />
That's a great question.

</p>
<p><strong>Jamie Kyle</strong><br />
Was it like Mocha, or Karma? Or, like Q unit?

</p>
<p><strong>Stacy London</strong><br />
Ooh, I just don't use Jasmine Jasmine. Jasmine was like the first like,

</p>
<p><strong>Jamie Kyle</strong><br />
that was a good hearing. Good, Pivotal Labs. So the first build tool that I ever created was a testing tool. But not for JavaScript. It was for sass.

Let's call it was called like boot camp or something. And if you look at the readme of it now it says do not use. Definitely it was it was an experiment to see like if I could, you know, and then worked. But it was the first open source project I did. That sort of started off as all build tooling. That's

</p>
<p><strong>Ryan Burgess</strong><br />
which leads us to some great tools. So thank you. Why should someone on a front end team need build tooling? I think we started kind of saying that maybe you don't need it, or that article definitely was saying like it's going to the extreme. But why would you need it?

</p>
<p><strong>Jamie Kyle</strong><br />
Do you like knowing that your code works?

</p>
<p><strong>Ryan Burgess</strong><br />
I can ship it to production. And you know, if something works, just check it in production, you

</p>
<p><strong>Jamie Kyle</strong><br />
know, I'm actually a big fan of testing in production. So just look at how many times I've rapidly released things and to like 1000s of people.

</p>
<p><strong>Ryan Burgess</strong><br />
That's not the right idea.

</p>
<p><strong>Jamie Kyle</strong><br />
You know, what works works?

</p>
<p><strong>Augustus Yuan</strong><br />
Who needs a QA team when you got users?

</p>
<p><strong>Ryan Burgess</strong><br />
But I think your point, Jamie, it is it's the fact is, is that you you can actually catch a lot of things before you're even having to go to QA before you're even having an open pull request to the rest of your team. A lot of these things are being caught before it's passed down to anyone else, which is amazing.

</p>
<p><strong>Jamie Kyle</strong><br />
Yeah, and like people's first thing that they usually run into is, well, if they're using some sort of compiler, they usually run like parks areas first and then they want more than that. So they install linter like he has lint or whatever. And maybe they get into tech systems and then they get testing and all the different kinds of testing that there are. Then like there's even like tools that you sort of run outside of production that are how you create stuff like storybooks is a great example of this in the React community. With YouTube, so, yep. View is more popular than react, as we all know.

</p>
<p><strong>Ryan Burgess</strong><br />
It has actually served like past three. Oh, wow. And they

</p>
<p><strong>Jamie Kyle</strong><br />
both at the same time and view tasks react by like, 50. Stars are so nice. And so React is dead, everyone. Everyone needs to switch.

</p>
<p><strong>Augustus Yuan</strong><br />
Probably that surge was from the license and yeah, oh, God, and ship,

</p>
<p><strong>Jamie Kyle</strong><br />
emulated tools, things that allow you to sort of preview your components before you start pushing PRs and stuff and get a fast feedback loop. So all these things are related to just making sure that your code does what you think it does ahead of time, and doesn't have unintended side effects somewhere else.

</p>
<p><strong>Maia Teegarden</strong><br />
Yeah, a lot of times you want to write your code in like different files, and depend on dependencies from like, NPM. And you want to like, bundle them up. Like how you develop usually the most efficient for what gets published to you. And

</p>
<p><strong>Ryan Burgess</strong><br />
I think like, just the idea of like, splitting up your code and making it more readable, can be very, very helpful. And I think Stacy made the point of like, Yeah, you don't want to reference all your files in production, this can kind of take a lot of that off you and you don't have to worry about that you don't have to copy paste into a file or some crazy nonsense like that.

</p>
<p><strong>Stacy London</strong><br />
I think like even the idea of reducing noise, or like reducing developer friction and pull requests as part of that bill process, too. So like, you don't have to argue like with prettier, or some sort of like style format, or that, like you put into your build process it, you know, prevents you from getting into silly like, I don't know, pedantic like shiny things about you know, like these little things that really aren't the reason you should be doing a pull request. It's more like let's all agree with style and move on. I think that's a really important part of a build process to like, make teams or bigger teams like worked really well together.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I don't want to like say to someone, hey, this is the wrong format, the computer and build system can tell them that I don't need to do

</p>
<p><strong>Jamie Kyle</strong><br />
Yeah, I think a quality of good tooling is that you reduce your dependency on other people. Well, increasing the collaborative nature of your work. Because obviously, I mean, maybe not obviously, but if you've ever worked in a place that was not collaborative, and then a place that was, you would know that it's wildly better. So everything about your tool chain should sort of push you to collaborate more, where you get into those modes that you're sort of, you don't, you don't want to have things, we depend on tons of people to get your work done, you don't want. That's what sort of makes you feel in large organization can't get anything done. It's like I need to talk to this team, I need to open pull requests in this repo and get reviewed there, whatever they're doing, and then you end up taking small change changes, and what might have been something that could take a day at a very, very small company could take even a slightly larger one weeks. And you really, you really feel and it doesn't feel good. I think that contributes a lot to people feeling burnt out and these larger companies,

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, yeah. Like, honestly, like, the things I love about front end tooling is it makes lets me focus more on actually coding the actual application like I Brian used to be our champion prettier. I will now be or will Stacy also, well, I think a lot of people on our on front end, prettier. It's just it's such a waste of time to be like, Oh my gosh, you know, you know, you have a tab width of four and I'd have a tab with them too. You know, we really got to figure this out. It's like no, no, just shut up. Just set a config file and just focus on the code right? Like that's, that's just waste stop wasting our time, like on these like minuscule like very petty things and like, focus on what actually, we're, you know, what our job is meant to do like code front end. So

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like when we were both at Evernote together, I feel like we had we had arguments as a team of like, trying to set those styles between that and it's like, oh, this is so frustrating. We don't need to be doing that.

</p>
<p><strong>Augustus Yuan</strong><br />
It felt really good once we did figure it out. Yeah, but then it's gonna work. It's a lot of work and then every time Not everyone's happy. Yeah, that yeah, that every new person that comes on you have to train them. It's frustrating.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so what is a mono repo and how does build tooling help with that of setting up your project? Oh, Jamie's drinking, just hearing the Word. He's like monitory bro.

</p>
<p><strong>Jamie Kyle</strong><br />
So monitor repos, they get a bit of a bad rap. Probably not entirely undeservedly. But largely, it's just when in a larger organization, so they have to repos into lots of separate small repositories, and having to open a pull request and multiple them, if you want to make a change that spans multiple systems. Instead, you have one large repository that generally split things off by folders or whatever, instead of actual, like, repositories on desk. And that way, with one pull request, or whatever, you can make a change that spans many different systems. And you can see companies from Google and Facebook and many others have adopted these mon repos at like, an insane scale to the point that they have like dedicated teams just for scaling the size of their repo. And, yeah, there's a lot of challenges in that though. Most tools are not designed to work in that environment. If you try and bundle your code, cheers, you'll find that when you have 1000s and 1000s of files, it takes a very long time, or just running unit tests takes a very long time, or literally anything, you run out of memory, and you try to paralyze a mess. So yeah, it really, if you're going to adopt that sort of thing at scale, it's the sort of thing you're gonna invest a lot of time into. It does pay off a lot of large organizations do really enjoy.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think I like what you said, too, of just having dedicated teams to it. Because like, you almost need a team dedicated to deploying, figuring out when you know, when something should be pushed, all that kind of aspect, you also probably need someone owning the build tools as a team, like not every company has that usually. I mean, I've worked at companies where, yeah, we just set up our own build tooling as front end engineers. And that's it. But then there's larger companies, where you actually have a team dedicated to setting that all up and taking care of that for you releasing code. And you're just, you're just a user of that at that point. Yeah, I

</p>
<p><strong>Stacy London</strong><br />
think, you know, even like a company like Atlassian, where there's a lot of engineers, and even the product teams are quite big, even at that point, like the product teams are. So maybe not even big enough to like, have a team or set of people dedicated to work on working on these build tools. And like we have, we have monitor repo on my team, the for it for that definition of it. It's like a React UI component library that publishes to NPM. So like that's the model repo. It's like many, many, many packages. But we had someone on our team who happen to enjoy doing that kind of stuff and wrote some scripts to make it automated, but like, there wasn't anybody else that knew how to do that, or whatever. So like, and that person then had to go work on the features. Now we have no money. So like to have a team dedicated to making sure that that build tooling is awesome, is huge. Because it can take a lot of time. It's complicated.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's not just a thing that we should take for granted that it's easy to do. And

</p>
<p><strong>Jamie Kyle</strong><br />
that's what man I do. It allows me to sort of established this team in order to own this problem space of scaling large repositories. One thing that you'll find is that most when people talk use the word mono repo, they tend to be either something that contains many packages, or something that contains many products. So the way that things are Atlassian is that we have distinct product teams that move at their own speeds in their own repositories, and check in various intervals. File System. But they don't operate in a shared Manrico at the company level. So if we wanted to move to that, we're gonna have to find ways of scaling a lot of the tooling that we have today. And that's what our team is both exploring and trying to push. What's the bit what's the hardest barrier for you? Can I say Webpack? Is that

</p>
<p><strong>Ryan Burgess</strong><br />
that we talked about? Webpack because

</p>
<p><strong>Augustus Yuan</strong><br />
I'm very curious.

</p>
<p><strong>Jamie Kyle</strong><br />
I don't I don't want to rail on any particular tools. But one thing that you really face at the scale is that you can't do things all at once. You, you can't you kind of avoid a certain word right now.

I'm not gonna be a big BREAKING section. The way that Webpack is designed and this is to no fault

is that it puts everything in memory initially, and then sort of figures out what it wants to do at the end. And so when you're operating at a scale, where you just can't fit everything in memory, you just blow up, basically, you get these really funky looking node errors that are actually see errors, telling you that you can't put that much stuff in memory at once. And yeah, it's so you, you create these systems for splitting that work up. You break it across processes, you create sort of smaller bundles, cheers. You just, you can't try and do everything at once. It won't work. So finding good ways of scaling, that is a huge challenge. And something that I've talked to people at Google and all sorts of companies about their challenges doing that. And the different approaches that they've had

</p>
<p><strong>Ryan Burgess</strong><br />
Webpack is amazing. But then it also has some of those issues where it's not that simple, either. Even just for so you're talking at scale, I even think at like a small project is sometimes it. By the time you get it all fully set up, you're like, Wow, that was a lot of work. And do you actually need it at that point? I think we've said this on previous episodes of podcasts that sometimes you don't always need these tools. And sometimes I think that kind of plays in there. As well as that, you know, something like Webpack is an amazing tool, you should use it. But not always, it's not something that you always need. Something like Babel is like seriously such an amazing tool. It allows you to write the latest and greatest JavaScript and then allow browsers that maybe aren't caught up to that to to now actually work with it. But say you're just writing for the latest version of Chrome. Well, guess what, you probably can just write latest and greatest. So like, it's, uh, I think like, to me, it's smart to think about when to use the tooling. And I think that's something to always be aware of, whether it be at scale, or just for your own personal project,

</p>
<p><strong>Stacy London</strong><br />
I think, to your point earlier about running out of memory, like, I don't know, I don't know that I think about I guess PipBuck its code is fairly big. But we hit that fairly quick. Like, we ran like we running our web pack bills, and like hit a memory limit on node on our build system. So we had to increase it. And I was like, really? Like, I didn't feel like it was that big of a thing that it would need that much memory. But to your point, like, what, based on the architecture, what it does? I can that makes more sense, because I was like, we're not that complicated. But

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, doesn't take long, either to get

</p>
<p><strong>Jamie Kyle</strong><br />
there. Yeah. And this is why we've actually been investing a lot of time into parcel. Because we could spend a lot of time we have two paths, we could either spend a lot of time venturing down Webpack and finding new ways of splitting things up and sort of normalizing things the way in our organization so that we could sort of share work together. Or we can revisit the architecture of the bundler itself.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. Cheers.

</p>
<p><strong>Jamie Kyle</strong><br />
That was the worst word that pick. We thought we were so safe where the word?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, no, I knew we were in trouble. But I was all for today.

</p>
<p><strong>Jamie Kyle</strong><br />
It's Pride weekend. So I've already showed up at this event drunk. So I'm gonna be doing real great tonight. So for a while, we actually had a running web back when I lived in Australia, and was with our other teammate, Luke. We had a running counter for the number of times that I suggested that we build our own Bundler cheers. That tally reached like 40 or so. So it was it was a high priority. And the the maintainer and creator of parcel, Devin reached out to me about sort of getting feedback on the architecture and whatever. One 1.0 got released, I started getting really, really looking into it, because it seemed like it had everything that we needed. It split work across multiple processes. It didn't load everything into memory at once. It had a really stable cache that you could reuse across multiple runs. So you could totally stop the process and rerun it and benefit from the last run.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow. So it actually catch the cache and be a lot quicker in the next build. Yeah, well, I did not know that

</p>
<p><strong>Jamie Kyle</strong><br />
which so it's sort of like when you're running. I almost said watch a fi instead of Webpack.

</p>
<p><strong>Ryan Burgess</strong><br />
Just all the tooling together.

</p>
<p><strong>Jamie Kyle</strong><br />
If you're running Webpack in watch mode, you have that incremental build that goes that benefits from having those things in memory already. And being able to just quickly just re compute only the stuff that needs to happen. But if you cancel that process and start over, then it needs to like start from a clean slate where. And I think they're actually working a lot on that, to their credit. But parcel from day one was designed such that every single file that runs through parcel, the input gets cached to its eventual output. And so when you stop the process and start up again, it already knows tons of the stuff that's happened, it doesn't have to redo it. So it might not that starting, stopping and restarting might not be as fast as just having things in memory. But it is quite fast. It scales. Much better.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. What tools should people be using? In their builds? Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
actually, actually, I wanted to call out that, you know, I think we had some good feedback. And even like Webpack, for example, I feel a lot of people kind of jumped into front end tools before actually understanding why they're really good. Like, I don't think a lot of people actually know that Webpack has like code splitting and some of the cool stuff like that, that. I think maybe they just heard maybe I should use it. Yeah, they just hear they just hear like web packs the latest hottest thing and you know what, let's let's do it, you know, and, and it's like, all this says, like, Well, God, it's such a pain to set up. But you know what, it's the latest and greatest. That's what everyone's using and stuff. And I think it really helps to just like really dive in and understand, Okay, what's this rendering tool? What does it do? And why do people love it? Like, what are the pros and cons versus all the other things? Yeah. So I think that

</p>
<p><strong>Jamie Kyle</strong><br />
we're actually still exploring a lot of benefits of tools that already exist. Yeah, I still see. Every couple of months, something new people are doing with Webpack, or Babel, all these different tools is really clever, and really sort of changes things. And makes you rethink what like what we want to do in terms of designing tooling. So as much as like the great latest and greatest stuff that we're releasing, is going to enable stuff. There's there's actually a lot that still left to explore.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, actually, it's funny, because when you were talking about parcels, like, Ooh, that sounds really cool. I'm surprised I haven't heard that. I went to GitHub, and I

</p>
<p><strong>Ryan Burgess</strong><br />
started, probably you hadn't even heard a parcel or I thought I thought

</p>
<p><strong>Augustus Yuan</strong><br />
I haven't heard it. But apparently I have, because I've started and so it probably was, like really old. And I was like That looks cool. Probably one day, it'll be good. And it sounds like it's really awesome now, or maybe it's always been awesome. But I've just been oblivious.
</p>
<p><strong>Jamie Kyle</strong><br />
You know, it's funny, it advertises itself as a zero config tool. In when I started talking to Devin about it, the first thing that I suggested was, let's add a config. Because that's what I do. Okay, every single file in your repo that starts with a dot, just blame me. I'm a cruel, cruel God. No, um, I actually started to read things under config files. Yeah, that is part of builds. So but I love config files. Okay, pretty. I see you all on Twitter complaining about config files, and you're wrong. You're all

</p>
<p><strong>Ryan Burgess</strong><br />
wrong. I feel like I want to tweet right now and be like, I hate config files, and you'd be wrong.

</p>
<p><strong>Jamie Kyle</strong><br />
No, it's I don't know what people expect to be better. I understand the desire to have better defaults. That's, that's totally valid. But it also doesn't negate the benefit of these same config files. And the benefit that I see of them is that when you have all of this build tooling, they all interact with one another, like very closely, back when I mean, people should say back when when people are still using these tools, karma, and Webpack and stuff, ancient history, you know, like, you have these testing processes that run bundlers that run all like Babel, and all this different stuff. And all these tools have to work with one another. And it's in when you get into these areas where you have to like configure tools on top of tools on top of tools. It it's painful. So this idea of having stable config files, which define what happens in this file system right here is really powerful for building a better generation of tools that just says, I know how this ends up being configured because it gets configured this other way. And you get to build on top of each other really nicely with that as a basis. So I think config files get an unnecessarily bad rap. And they actually they Do the opposite of what people think they do is that they make things easier to configure than harder.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's just like when people think of them as hard is because it's it's just an extra step that they have to deal with. I don't think it's a bad thing. It once you set it up, it's you're you're past it. You're good.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I mean, I think from coming from like early days on and seeing the progression of some of these tools, like when I first configure grunt to like, do a bunch of build processes for minifying, JavaScript and concatenating it and running lips and those kinds of things. It resonated. It was very easy. For me, I felt like grunt was fairly easy to configure, like, I really got it right away. I was like, Yep, I have this tech, the stuff that it does this thing. Yeah. And I think some of the Webpack stuff that I came into later on, I didn't set it up myself, it was I came into it from as being like, the developer didn't set it up. And those were like, way more confusing, because there was like, inherited base configs. And then there was like, the dev and then the other one, there's this like, abstraction around it, that was a little bit confusing. And also just reading it, it was not very straightforward. Like the grid, the grid thing was, like, very straightforward. Whereas this had like some abstractions, and it seemed to like, really learn Webpack before you could like, really understand what it was doing. And so I kind of wonder, I definitely have empathy for like, the devs are just like, all these files are confusing. Like, I get that

</p>
<p><strong>Ryan Burgess</strong><br />
once already set up for you. I think that's the I think that can be difficult to is if you've known Webpack and looked at it, you're like, Okay, so to figure out what's going on, but I know what web pack does. Yeah. And that can help. I think that you getting thrown into those probably a difficult way to learn Webpack.

</p>
<p><strong>Stacy London</strong><br />
Yeah. And I wouldn't say that I was like, Oh, this should be no config Kusmi. I was like, Well, I want to be able to say that you should look at these files and do this thing. Yeah, it would have been very magical to be like, Well, how do you know what directories to look at?

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, it's in my config here. It's telling me exactly that. So yeah, I know that there is a lot of benefit to that. And as a new engineer looking at it, you can go oh, okay, I can go to that file and start to really understand what's going on with the build system.

</p>
<p><strong>Jamie Kyle</strong><br />
I think there's actually a bit of an art to designing the config files themselves. And I say this as someone who develops tools entirely for a living. And that there are things that we got really right with babbles to config and things that we got wrong. There's things that Webpack gets right and things that it gets wrong. Even with grunt there, there was a way to configure grunts in such a way that was impossible Understand? Yes. Because if you're unfamiliar with grunts, the basic model was this instead of like your NPM, scripts, whatever, you had these like top level tasks that configured other tools that got looked up at like, build time. And you just passed out like JSON objects is configuration, except this all happened within a JavaScript file. So you could do whatever the hell you want it. And so this led to people doing wild things. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
pretty sure I'm guilty for doing some of those wild things, because, um, oh, why not? It's just in JavaScript here. And

</p>
<p><strong>Jamie Kyle</strong><br />
yeah, you can't code for a significant amount of time and not be guilty of something. That's fair. So mood. Yeah. And as a consumer of as someone who wouldn't wouldn't, you weren't given a Grunt file. It was now up to you to design this config file in a way that other people could understand. It's like any other piece of code, except no one understands this code. And so you either did it in a way that was very declarative, and people understood, or you did this, like very, super generated way that like, reduce repetition, or whatever. And actually made it very difficult to understand. So I've actually, I'm very against having config files that are Java scripts or any dynamic language driven. I like very static config files. Because you, you can't, you might have to type a lot, but you won't screw it up. And people will be able to refer to docs and understand it. That's

</p>
<p><strong>Ryan Burgess</strong><br />
actually very fair. You're separating the concerns there. It does what it's supposed to do, and you're not muddy knitted up with other JavaScript in there. Because even golf Golf I think, even was, in some ways I liked a little bit better because I was like, Oh, well, it's just JavaScript. It's not just like a JSON object that I'm manipulating. It's it's actually just JavaScript. But at the same time, that can get even more complicated because you just can do whatever you want in that config file. And it I've seen some pretty scary messy gulp files because of that.

</p>
<p><strong>Jamie Kyle</strong><br />
Yeah. And I think that people and designing these tools poorly as a result, because I think that Webpack would actually benefit a lot from trying to design its entire configuration format and just JSON. If they were forced to look at this problem, as I'm only going to use JSON for this, I'm only going to use these like five primitive, or whatever it is, one has types. Define everything that we could possibly do. How are we going to do that? It's not an easy problem. It's spent, like I've spent, we're designing parcel two right now, which introduces a config file. And we've spent months now looking at this config file as the basis of how you do everything. And that I'd that's why I think it's an art I think it's it takes time and patience in careful planning around making something that's going to work long term and can be easy to understand, and easy to parse, and easy to hand off to other teammates that might spend years never never overlap in any way. That's that's what happens

</p>
<p><strong>Maia Teegarden</strong><br />
when I come in with a question on like, configs not being js. I think with Webpack, one of my experiences with using JS was a lot of like, oh, well, if I'm in a dev environment, then I'm going to use the login. And I'm going to add like this config. So a lot of it was different between environments. And like even, like splitting it, that was a much more pleasant experience doing it that way than like splitting it out into different files. So is that just something like? Maybe it's a sign that it's bad that the different files are? So the different files for different environments are so different? Or you just have to deal with it? Like that just

</p>
<p><strong>Jamie Kyle</strong><br />
deal with? Well, man has seen our web. So she knows I'm a damn hypocrite. And can say nothing on this. But yeah, it's I don't know, I have not found the correct way to configure Webpack that works forever. Sorry, listeners. If that was what you were like really hoping for? I think I think Shawn Larkin might be the only one that's figured it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Everyone needs to have Shawn Larkin comm set up their web pack, and we're good. Yeah. That's scalable, right? Portion marking? Yeah. So I think that leads into a really good question, though, is what advice would you give someone setting up a new project, whether it be thinking, I mean, sometimes you don't really know what the scale is going to be? So if you're starting a new project, new app, what do you start with? What are some of the things that you need in your next build?

</p>
<p><strong>Stacy London</strong><br />
I guess, depending on your What are you building it for? So you're just like, building something to learn from and play around with. At that point, maybe don't even care about build tools, like maybe use code sandbox, or glitch or something that like, abstracts away that stuff from you. So actually, you're just like, focusing on making the thing and not worrying about that. But if it's like, yeah, like your business model, or you're creating a product, and you're trying to make money off of something, and you want it to live on, anyone have more than one person understand how it works. And like, there's more than one person working on it, then yeah, I think that like that point, you don't care about that. But there's stuff that like create, like, they, they're things that create good defaults. So you can try those like create react app has, like, good, like defaults that get you going if you don't want to, like start from scratch, scratch, that that's also problematic. Maybe that doesn't work for you. So I think there's like, right,

</p>
<p><strong>Ryan Burgess</strong><br />
look, there's very prescriptive at that point. You're like, Wait, I don't want this, but it's a great start. I like that

</p>
<p><strong>Jamie Kyle</strong><br />
I actually needed to talk about this at the conference. What is that conference for? Ff comp.

</p>
<p><strong>Ryan Burgess</strong><br />
Where was that?

</p>
<p><strong>Jamie Kyle</strong><br />
In? The UK? City? Brynn. Brighton. Yeah, that's it. That one, one of the beaches that are just rocks, which is the most British thing, I think, like, we've got a beach, but it's covered in rocks. And it's always raining. So I had a friend who was just getting into programming, and really wanting to build an app. And the advice that was given was like, okay, learn HTML and CSS, and then incrementally, sort of like re following the path that I had, like cheeses nearly 10 years ago. And like slowly working your way as these tools were invented almost. But instead of that, because they weren't feeling really lost, and like really far away from building an app, that I was just like, how about we just install create react app, and just start building components? And so we did that, and they were immediately productive. They just like started building their app. They didn't understand HTML that well, they didn't understand CSS, they didn't understand JavaScript or like, even like, all these like weird things that we had done with JavaScript, like JSX, and all these different tools and stuff. But having that entire environment already, they're just like, now I get to focus on my goal immediately. And when I want to actually learn about these things, I get to dive into how my app works. And I think that's actually a really powerful way to learn how to program. As much as it is tempting to just like, I'm going to configure all my tools myself, I know how to do it best. I don't know, it's, it's quite nice. Just having a solid basis. I think I'm trying to take that same experience and bring it to person. Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
there are some people who can totally, like, be productive without knowing a bunch of stuff. I am not one of those people, like I like if I don't know how something is working, then I just, I just lose my mind. Like, it's like, how does this like magic happening? Like, that drives me nuts. I think like a lot of engineers, like Can, can speak to that. Like, if you don't understand how something works, sometimes it just really like you just like it. So it makes you more confused, right? It makes debugging harder. So like, I think for people who want to start a project, like it's tempting to use a lot of the scaffolding tools like Yeoman, create react app and stuff like that. And depending on what you're trying to learn, or what you're trying to do, it might get you to a to be faster, but like, you really like need to understand, like, if you want to learn and how to make apps correctly, like you should really start from the fundamentals. I think, what you were like suggesting as well, you know, he was suggesting,

</p>
<p><strong>Ryan Burgess</strong><br />
suggesting the opposite. But I think I kind of see both your points,

</p>
<p><strong>Augustus Yuan</strong><br />
I guess what you were saying was like, it makes you immediately productive. And which, which I agree with, like, you can totally use these scaffolding apps for that. But it does come at a cost. I say this, because so ever No, we have a monolithic app. And it would take like engineers like weeks to get set up in the beginning. Then we had this engineer who did this amazing thing. He made this tool that would just install everything. We saw MySQL installed Tomcat install everything. And then when something didn't work, we'd have to debug everything. And what went wrong, which is fine, which is good. Actually, to be honest, I still support the whole tooling thing there. But you know, like, the person who's starting as a new hire, they have no idea like what's going on? They don't even know like, what,

</p>
<p><strong>Jamie Kyle</strong><br />
I think this is actually a quality of good tooling, though. I mean, if we back things up that question that all programmers today, I think relate to is like, try writing FizzBuzz in assembly.

</p>
<p><strong>Stacy London</strong><br />
What?

</p>
<p><strong>Ryan Burgess</strong><br />
Please explain, Jamie.

</p>
<p><strong>Jamie Kyle</strong><br />
I know.

</p>
<p><strong>Stacy London</strong><br />
Public Service. Now I just said, Don't do this. Interviews ever. Don't be a jerk. Don't be a terrible, terrible company

</p>
<p><strong>Jamie Kyle</strong><br />
in assembly, but if you want like a really fun challenge for like, seven weeks, try writing FizzBuzz in assembly. No. Bundle, don't listen to the I'm being okay. When you have a good tool, you don't have to think about a problem anymore. You don't have to like the big benefit that Babel had was that people stop having to think about how do I use these latest features? How do I like do I write tools that are somehow both? Do I have to like memorize what things work and what browsers or whatever it's like Nat just write this like environment thing that tells what browsers you care about. Just write it, the latest version, and you're fine.

</p>
<p><strong>Ryan Burgess</strong><br />
Babel is one of the most powerful for that is it just allows you to be productive and not worry about those little details.

</p>
<p><strong>Jamie Kyle</strong><br />
Yeah, and this is the history of tooling for 60 plus years is that, like we've we've slowly come up with these new inventions that just let us not think about problems would like JavaScript, like there's so many problems, you don't have to think about just by writing JavaScript, like the memory model garbage collection, like remembering things existed to get rid of them. The security model, it's all just sandboxed for you. You don't have to think about that. Layer by layer, we're just stop thinking about this. It's not important. Like we can, we might make trade offs in the process. But like, like JavaScript with a garbage collection, it's it's not the fastest thing you can do, but it's fine. It's fine for most things. And it means that you just get to focus on whatever you want to focus on. And I think that's that's what defines a really important tool no long term

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think took us this was point like tools like lecher something that abstracts away from you a lot of stuff is awesome for Martini because he's so excited about doing something and creating something and when like, viscerally like you, you see it in you in you get that satisfaction building it, which is like, the reason that I got into web development in the first place I had, like, the early days was that it was like, you quickly created something and you saw it and you saw it change in your life. This is amazing. But I think also to get to this point, like, I think that's good to like, get you excited to get into it. And then of course, like, you know, you have to know some deeper pieces of it in order to like maintain it long term. And like not just the like the fun quick thing that you like, published to, you know, some portfolio site or whatever, for a business to run like you understand how it works at a deeper level.

</p>
<p><strong>Jamie Kyle</strong><br />
By the way, if people don't know what glitches couldn't glitch, calm, it's wonderful, amazing. Like go Jen Scheffer. Go. There's probably other people that work on too, but she's the

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, on that note, at the end of each episode, we like to share pics of things that we found interesting, and we'd like to share with our listeners. Let's go around the table and share pics for today's episode.

</p>
<p><strong>Maia Teegarden</strong><br />
I know have you guys heard of Reddit? Explain. Taiwan, but I'm sure you find a lot of cool things on Reddit. I guess I'm the new. I've been watching Michelle Wolf's the break? Yeah. Which is good. So so I'll throw that out there. Nice. That's pretty funny. Yeah, it's like, you know, Samantha Bee and John Oliver type show.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, Stacy, what do you have? Um,

</p>
<p><strong>Stacy London</strong><br />
I can't say both because I actually had that as my pick several shows ago. So I'll say two picks that are unrelated to tooling and go back to my music music picks I have to to music fix horizon poolside remixed by Tyco and poolside. And also echo space island by Robert Babbage. Those are just, I don't know, just to like super carefree summary songs for like going on a road trip to the ocean or something like that.

</p>
<p><strong>Ryan Burgess</strong><br />
They're really I love that the Tyco one, I guess, where do you have?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, so. So actually, I think Ryan made a pic for this thing called Allbirds is the shoe that's really popular. And my pick is the tree runners. I actually got a pair recently, and I'm actually pretty impressed. Like, like I at first when I wore them, like, um, you know, they're not that different. I mean, they feel a little cooler. But then like, today, I was walking and like, I felt the breeze like through my shoe. Goodness, because the other ones like just fabric, right? So yeah, and like the taglines windy and reasonably high school shit like that. But today, I felt it. I was like, Oh, God, so and now they're comfortable. So I would recommend them, you know? Yeah. And then my second pick is this tool called figma. Sketch is a very popular design tool a lot of people use. I think, at Evernote, we use sketch pretty heavily. But we're also looking into this thing called figma. It's another design tool that lets you prototype really fast. And they have a like a really intuitive plugin system, just like sketch, I was looking into building sketch plugins. And figma also has like ways of like, converting your sketch prototypes into React components. So that was like, Oh, that's cool. Sketch also has something too, but I thought this was something worth looking into.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Jemmy, what

</p>
<p><strong>Jamie Kyle</strong><br />
do you have for my first pick? I want to recommend dogs. Dogs, they're great.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't disagree.

</p>
<p><strong>Jamie Kyle</strong><br />
I adopted a puppy recently best life choice. And also most exhausting life choice. Dogs. Get them you know. They're great. Second is all you stray people need to watch Queer Eye because I just had since a canceled on me. And

</p>
<p><strong>Ryan Burgess</strong><br />
Jamie I'm not gonna live in the Netflix employee

</p>
<p><strong>Jamie Kyle</strong><br />
in the room right now. I didn't look at me. You know, not happy and if you've looked at the finale of Sensei, you just know that like the next five years if it wasn't canceled, would have been the greatest queer television ever to exist. And God damn you Netflix. So I can't lose Queer Eye. So all you street people need to watch it so that there's enough of an audience so that it doesn't get canceled and ruin my life. God damn you. Also dogs,

</p>
<p><strong>Ryan Burgess</strong><br />
dogs. All right. And I'll lead in actually have a Netflix pick as well. There's a show on Netflix right now called Wild Wild country. It is bizarre

</p>
<p><strong>Stacy London</strong><br />
so crazy. Yeah. Crazy, fascinating. Fascinating.

</p>
<p><strong>Ryan Burgess</strong><br />
There's a lot of stuff going on and that I don't even want. Should we say more?

</p>
<p><strong>Stacy London</strong><br />
I mean, you can kind of describe it just it's a documentary.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it is a documentary on what in the early 80s. That's like, based off of this whole cult and religion that formed from a guy from India. And they came over to actually just near Portland and kind of built in Oregon had built their own city. And there's some interesting things that happen in general, I highly recommend watching it. It's just like, I kept thinking like, Okay, this is interesting. And then like, it would go on this whole other like, spin of things. And I'm like, Whoa, what just happened? So definitely recommend and it's a documentary so it's not even just some story. It actually happened.

</p>
<p><strong>Jamie Kyle</strong><br />
Yeah, so you can watch that after query.

</p>
<p><strong>Ryan Burgess</strong><br />
And then actually, my second pick was a I was trying to think what my second pick was and I because Stacy inspired me with music. I found new Rise Against song called house on fire. It really liked it. So I highly recommend checking that one out. Before we end the episode. I want to thank Jamie and may F for joining us. It was a pleasure having you both on where can people get in touch with you on the internet? Jamie where can they find you on the internet?

</p>
<p><strong>Jamie Kyle</strong><br />
No twitter.com/jamie builds

</p>
<p><strong>Maia Teegarden</strong><br />
I'm also on Twitter. I've mostly been a lurker so you won't find much there and I trying to speak up more than do all that well this fuck. My handle is Padma pa D Ma. It's pronounced Mayer.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you all for listening today's episode make sure to subscribe to front end Happy Hour on whatever you like to listen to podcasts on and follow us on Twitter at  <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a> any last words? Right

</p>
`;
        return transcript;
    };