module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End happy hour. This is episode 34. And we are joined by Laurie Voss, the CEO and former CTO at NPM. NPM is also known as node package manager, and has been an important tool in the JavaScript and Node community to help engineer share their code, and today's episode, we'll be discussing MTM and find out more information from Laurie, before we get started. Laurie, can you give us a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?


<p><strong>Laurie Voss</strong><br />
Hi, everybody, what I do is, well, I used to run the engineering department. And now my job is yelling at accountants and lawyers, because that's what CEOs do, apparently. But basically, I'm a web developer, which is why I was pleased to be invited on this podcast. I like thinking about the web. I like making the web better. I like the fact that anybody can make the web bigger. That's been the sort of driving force behind my career. And my beverage of choice for happy hour is Mexican cola. What is Mexican cola? For those who are not familiar, coke in the United States is made with high fructose corn syrup, which changes the flavor and makes it worse if you drink a lot of Mexican coke like I do. If you buy if you can buy Coke and glass bottles, it comes from Mexico, and it's made with actual actual sugar because it's not subject to the corn lobby.

</p>
<p><strong>Ryan Burgess</strong><br />
It's the cane sugar.

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah, I'm not familiar. Not California with the culture we

</p>
<p><strong>Ryan Burgess</strong><br />
were actually just talking about that is it's really easy to buy in San Francisco. But if you were to buy it like on East Coast or something, it's really really hard to

</p>
<p><strong>Laurie Voss</strong><br />
find in New York, you can get kosher Cola, kosher Cola, it's exactly the same, apparently, except that corn syrup is not kosher for some reason and cane sugar is so it's just, you know, oh soda made with cane sugar.

</p>
<p><strong>Jem Young</strong><br />
The way we make corn syrups not kosher.

</p>
<p><strong>Laurie Voss</strong><br />
Don't ask me what they're doing

</p>
<p><strong>Jem Young</strong><br />
all the Jewish people would never be able to eat anything. Literally never, ever Mexican Coke, except for Mexico, plus phi rabbi.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, let's also go around the table and give a brief introduction and today's panelists. So you want to start off? Yeah, sure.

</p>
<p><strong>Augustus Yuan</strong><br />
My name is Lucas Sassoon, and I'm a front end engineer at Evernote.

</p>
<p><strong>Derrick Showers</strong><br />
I'm Derek showers, and I'm software engineer at LinkedIn.

</p>
<p><strong>Mars Jullian</strong><br />
I'm Mark Julian. I'm a senior software engineer at Netflix,

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. And each episode of the front end Happy Hour podcast. We like to choose a keyword that if it's mentioned at all in the podcast, we will all take a drink. What did we decide today's keyword is dependencies dependency. So if any of us say the word dependency or dependencies of any kind, we will all take a drink. All right. So let's get started. I'd like to hear why is NPM such an important tool?

</p>
<p><strong>Laurie Voss</strong><br />
I would like to hear everybody else tell me why.

</p>
<p><strong>Jem Young</strong><br />
I would say in any, any language that hopes to be mature, you need some sort of package manager. Like that's just the evolution of every language. Ruby has. Whatever Ruby gems. Yeah, Ruby gems Python. I really should spell differently,

</p>
<p><strong>Derrick Showers</strong><br />
like switch languages, just

</p>
<p><strong>Ryan Burgess</strong><br />
to be like, Yeah, my name is Jem. I have a lot of gems.

</p>
<p><strong>Jem Young</strong><br />
For the record, I do not like Ruby. I think it's an ugly language. But Java has something if namely Maven, thank you.

</p>
<p><strong>Laurie Voss</strong><br />
My son's got pi pi. Perlis got Sipan obviously,

</p>
<p><strong>Jem Young</strong><br />
is it not as Pip pi pi is something different?

</p>
<p><strong>Laurie Voss</strong><br />
I mean, I'm not a Python expert. I think PIP is the thing that installs from pi pi. I could be wrong. I could

</p>
<p><strong>Jem Young</strong><br />
be wrong. All right. All right. Well,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah. We're not Python.

</p>
<p><strong>Jem Young</strong><br />
That's for backing happier.com. Yeah, but I mean, if you're gonna have a mature language, you need to have a way of sharing packages. And NPM jumped in and did that for us. And it made node like a real thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Which is awesome, too. Because it comes with note, when you're installing node, you have NPM. And it has allowed us to share a lot of great packages and code with various projects.

</p>
<p><strong>Laurie Voss</strong><br />
Does anybody at the table use NPM? Only for front end stuff and not for note at all?

</p>
<p><strong>Ryan Burgess</strong><br />
I use it for both. Yeah, I would say one or the other. So one of

</p>
<p><strong>Laurie Voss</strong><br />
the things that we've discovered that's changed about NPM user base in the last couple of years is that most people use who use NPM and not using it to write note at all. Only about 20% of NPM users only write node in it and the other 80% are writing, doing front end code most of the time or some of the time and 40% do it Do only front end and they have nothing to do with no, they don't consider themselves node users. NPM is just the tool that they use to put JavaScript together on the front end. And it really changes the way that we have to think about ourselves as a tool, because we can't assume that people are comfortable on the command line, we can't assume that people care about, you know, common J S modules at all. They live in ESX land, and they live in the world of imports, and they live in, you know, they rely on Babel and Webpack. And they just don't care about node at all.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really interesting. I never would have guessed that, especially that they have a percentage.

</p>
<p><strong>Laurie Voss</strong><br />
Yeah, the reputation of the tool is taking a long time to sort of like follow along to the what the user base is actually doing.

</p>
<p><strong>Derrick Showers</strong><br />
One thing I think that you guys already are well, on the way to make it easy on the command line, I have recently done a lot of iOS development, so use CocoaPods lot. And the difference is mainly just used to NPM. But the difference between it is nine day my opinion, I mean, like even if like for instance, CocoaPods is like pod pod install and pod update. And really no one knows what the differences between the two, like, if you look at like all over StackOverflow, like in battle even think that CocoaPods is the differences all the time now I just gave it its, but with NPM, it's, it's very easy to use.

</p>
<p><strong>Laurie Voss</strong><br />
Cool. Yeah, CocoaPods is interesting, because they are a package manager without a registry. All of CocoaPods is hosted on GitHub. And it's it's sort of become a thing for GitHub, they're like, Why does your package manager rely on a service being free forever, this is a strange arrangement that you've put into your package manager is that you just like, you know, siphon off our bandwidth in our engineering time, because it's, you know, it's a busy service. So like, there's all kinds of like, you know, single single repo hacks that I've had to put in for the CocoaPods repo, because it's just so high traffic,

</p>
<p><strong>Ryan Burgess</strong><br />
how would you define it being as an important tool, since a couple of us give me examples.

</p>
<p><strong>Laurie Voss</strong><br />
While I was I was kind of setting you up for that review, which was basically that I think most people still think of it as a node tool. But it's primarily a front end tool. It's a tool that people use to put websites together. And there's a bunch of other stuff that sort of like, is so closely associated with NPM. Now that people don't think of them as being separate, like they just think of like, you know, NPM, Babel and Webpack are the first three things I installed to get anything done on the front end. And they move forward from there. There's lots of other stuff, there's, you know, there's Closure Compiler and roll up and all the other ones. But you know, that's where the bulk of stuff is right now. And that's where we're seeing it be useful. Like, it's not, it's not the node package manager. In fact, we don't even call it that anymore. It's just NPM the letters. And so that's, it's, it's interesting watching that change, what we do and what we focus on and stuff like that.

</p>
<p><strong>Ryan Burgess</strong><br />
Even the first time I used NPM, for, like, for front end code was like Browserify. And using it with M cameras, like blown away, like very common J. S modules. This is amazing enable to actually package your front end code like that, and being able to just leverage it is huge. Yes, super useful in like a large project. The other

</p>
<p><strong>Laurie Voss</strong><br />
thing, speaking of large projects, the other thing that we try and push people to do more often is like lots of people use NPM, just for NPM install, but the scripts and especially the the lifecycle hooks, they're really useful, especially if like, the larger your team gets the more sort of shared knowledge of like, how do I run the tests? How do I, you know, get the dev server started? What do I do to rebuild the flow, having that, you know, built into the package. So you can just go, you know, NPM, run Dev, and your dev server starts up. And you know that that's linked to the current version of the code, because it's committed at the same time as everything else. So you're never like, Oh, I'm running the dev server for the old version, but the code has changed, and it doesn't work anymore. That's a huge saving for a big team, right? Because you know, every time you change how the test work, you know, you have to go and send an email or have a meeting and tell every 50 people on your team, how does this thing work? And you don't write you just do NPM run test. And then you have

</p>
<p><strong>Ryan Burgess</strong><br />
documentation that gets updated. At least you know that you're always running the right man,

</p>
<p><strong>Laurie Voss</strong><br />
we we like to say that the goal of NPM is to make you have fewer meetings and talk to a fewer humans, which sort of reflects, it reflects very much the ethos of its founders. Oh, God, we never want to have another meeting again. Let's

</p>
<p><strong>Ryan Burgess</strong><br />
just automate everything, or you're on a podcast talking to other humans right now.

</p>
<p><strong>Laurie Voss</strong><br />
I know. Isn't that weird?

</p>
<p><strong>Augustus Yuan</strong><br />
Install this podcast.

</p>
<p><strong>Ryan Burgess</strong><br />
Trust us. You know, like, it's pretty much a question for everyone. Do you use MTM? either at your companies or for personal use or both?

</p>
<p><strong>Augustus Yuan</strong><br />
Definitely both. Yeah. 100%. Although, at our company, we did switch over to yarn, or well, which is just built on top of NPM. But yeah, don't definitely use it for both. And actually, I'll kind of agree like, I have seen like a lot of front end people use it for front end and NPM has been like super invaluable and just like bootstrapping people to like, get up to speed or like just like, hey, like just npm install this on this generator and you get this application that's just all built for you and you can kind of explore and learn that way. And sometimes that's like better For some people, like they just have like a working solution, and they can just kind of step through to see how it works.

</p>
<p><strong>Laurie Voss</strong><br />
Absolutely. It's funny, because a lot of the front end devs, who use NPM? And aren't node users, they're sort of weirdly sort of apologetic about it. They're like, you know, we meet them at conferences, and they're like, oh, I don't not really a node developer. I just use NPM to get web pack going. And I'm like, that's a valid use case. It's okay. You don't have to apologize for how you use our tool.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, we use it at Netflix quite a bit for lots of different packages that we share internally, externally, throughout the company. It's been so helpful.

</p>
<p><strong>Laurie Voss</strong><br />
How many people at the table use private packages, not just open source ones?

</p>
<p><strong>Jem Young</strong><br />
We do? Yeah, we

</p>
<p><strong>Ryan Burgess</strong><br />
like we'll have some public ones. But we'll also have a lot of private ones, too, that just are for internal use only. Cool. How can companies take advantage of NPM? It's, I mean, I think there's a lot of things that it took me a while to even realize that there's a lot of things out that are available that NPM offers for companies that can actually make it a lot easier and better and more secure for them. So I'd love to kind of hear your thoughts on that.

</p>
<p><strong>Laurie Voss</strong><br />
Thank you for the softball. The value of NPM is for collaboration. As soon as you the more people you have working on the same piece of software, the more valuable NPM gets to you. So as soon as you have pieces of software within your organization, that more than one person needs to work on the same effect comes into play. So you know, you could check some modules directly into your Git repo, you could use private get dependencies, you could or you could just go you know, NPM publish dash dash access equals restricted, and you've got a private package. And it works exactly like an ordinary package. And you can version it like a package, and you can install it like a package. And it's just really easy. So that is that's the primary thing, that's the way that NPM supports open source is we will give you private packages if you pay. So there's private packages as a SAS, you can just sign up on the website, and you get them. And there's also NPM enterprise, which is for bigger companies who are often paranoid and you know, want to have the thing running on their own hardware, or they'll have features that only that only enterprises care about, like, you know, single sign on. So it'll you know, it'll work with your LDAP or SAML or whatever the hell it is that you use inside of your company. So you don't have to maintain users separately. But yeah, so that's the goal of NPM, as a company is to make the registry run forever. And the way that we decided to do that is to wrap a company around the open source registry. And so that's what the open source, that's what the company does.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. No, and I think there's a lot of benefits. And I'm sure a lot of companies take advantage of the enterprise or even just having private ones. And that's similar to GitHub, definitely in the way that they have is like you pay if you want private,

</p>
<p><strong>Laurie Voss</strong><br />
it's great. It's an extremely familiar business model. The other thing that I should mention that we do is on the enterprise side is we also we have a security plugin from the NSP, who NPM enterprise comes with, like your own sort of mini version of the NPM website. And the NSP plug in like shows you which packages have known security vulnerabilities, which is really neat feature that we're eventually going to put into the SAS somehow, but at the moment exists only on NPM enterprise. And it's a big selling point for companies because they're always like, how did this happen? We need to know.

</p>
<p><strong>Jem Young</strong><br />
Yeah, we have that Netflix. Yeah. Because people, they forget the dependencies of dependencies. Yeah. Very nice. Nice. It's like an easy security hole, right? Because you just you forget that whatever you're relying on has other things that it relies on. And then they have things that rely on and like who's gonna look into that? So you need to kind of plug in.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, yeah, because this run up left. But that was a big one where it was a lot of things a Babel was actually probably one of the biggest projects that you lied on left. And that was huge is Laurie, you want to add to like, I know you were involved in this. So I don't want to try and talk to it. What is left Pat, I, what's the drama around left

</p>
<p><strong>Laurie Voss</strong><br />
pad, Left Pad represented an inflection point in the size of the registry. Usually in npm. life up until that point, name disputes were handled by a very informal process that was basically Isaac, we'll figure it out. So named disputes happen when you know when two people want the same package name, or somebody took a package name, and a company turns out to own the package name 99% of the time, and this is still true. We sorted out with our name dispute policy, which is literally just email each other somebody email the other person and say, Hey, can I have your name? Or hey, your name is confusingly similar to our company. Could you put a line in the readme that says you are not our company? This is still true and 99% of the time it's resolved peacefully. And you know, the bigger you get the the thing that happens point 1% of the time that used to happen never when you were 1000 people happens all the time when you're a million people And now we're seven and a half million people. So this was the first time this It happened when somebody's reaction to a company saying, hey, that's the name of our company was not I want to keep it. Can I change that? You know, can I put up the line in the readme? It wasn't okay have the name. It was, fuck you fuck the horse you rode in on like everything about you. It was like, nuclear wasteland. And it just never happened before. And as a result, our usual policy of like, okay, well, I guess the company should have the name. That was a bad call, we shouldn't have made that call. And it resulted in him taking down all of his packages, including left ad, which turned out to be the important one. It just blew up web development for like three hours and everybody got super mad at us. Yes. So we, we've made a bunch of changes as a result of that. So one is that unpublishing stuff that's older than 24 hours now requires an email to support. So what he did could never be done. And also, we're just a lot more careful about giving anybody a name, if like, nearly all of the time, if you have a name. It's your name now. Unless literally somebody shows up with lawyers and says we're going to sue the hell out of you. Which happens more often than you would imagine.

</p>
<p><strong>Ryan Burgess</strong><br />
Is that something you deal with more now being the CEO as a CEO,

</p>
<p><strong>Laurie Voss</strong><br />
it's kind of my primary thing is I fend off lawsuits who don't from people who don't understand how copyright and trademarks and software works. Like we spend a lot of time paying a lawyer to explain to other dumber lawyers kind of software works. They're like, my favorite one was was, there's a magazine in France called L'Express. And they went to Google and they DMCA, every single package in the registry that had the word Express. We know that that would be a problem. They took out the entire Express ecosystem. And I was like, he can't do that. There's more than one thing in the world called Express. So yeah, I had to like, you know, file an official like response via the DMCA process going no, this is stupid. And everything about this is stupid. And the Google eventually agreed and gave everything back.

</p>
<p><strong>Ryan Burgess</strong><br />
That's an interesting one. Yeah. Because I mean, node Express huge node framework that has a lot of dependencies. Hey,

</p>
<p><strong>Jem Young</strong><br />
Monster Monster table, as all familiar with Monster Monster cables, like one of the most litigious companies

</p>
<p><strong>Ryan Burgess</strong><br />
like the HDMI cable, yeah,

</p>
<p><strong>Jem Young</strong><br />
they sue everybody

</p>
<p><strong>Derrick Showers</strong><br />
is monster. I used to work at Circuit City and had to sell them it was so hard to sell them because it's like $50 per USB cable or something.

</p>
<p><strong>Laurie Voss</strong><br />
I really like the idea that there's somebody somewhere who paid like $3,000 for a USB signal is going on, it's so much warmer.

</p>
<p><strong>Augustus Yuan</strong><br />
For 10,000, for a gold apple watch, right? Something that's right.

</p>
<p><strong>Ryan Burgess</strong><br />
The gold apple watch,

</p>
<p><strong>Laurie Voss</strong><br />
when the App Store first launched, there was an app called I am rich. And it was like,

</p>
<p><strong>Ryan Burgess</strong><br />
I remember that

</p>
<p><strong>Laurie Voss</strong><br />
somebody had created an app that could you know, he just set it to the maximum price the App Store, which would allow which was $999. And it didn't do anything except show a little rotating golden thing that said, I am rich. He made like 10,000 bucks off of that thing. That's amazing. Wonder if they

</p>
<p><strong>Mars Jullian</strong><br />
bought it knowing what it would do.

</p>
<p><strong>Laurie Voss</strong><br />
I mean, I don't think he misrepresented he was like, this is this is just a status symbol to show that you can set $999 on fire for fun,

</p>
<p><strong>Augustus Yuan</strong><br />
change log rotated.

</p>
<p><strong>Jem Young</strong><br />
So like DLCs and stuff, it's like, Oh, you want the add on? That's another? I know, we're off topic now. But I think I read some stat that oh, you know, there's free to play games. Like that's most right now. Their ecosystems only supported by like, 1% of users, something like that. So it's, it's like 1% of users spending like 2030 $40 Sometimes,

</p>
<p><strong>Laurie Voss</strong><br />
you know, the industry term for them. Wales, Wales. There's lots of little fish, and then there's the Wales who eat everything. I learned a lot about really terrible business models. When I my second job out of college, I worked at a ringtone company. Oh, perfect. Yeah, yeah, we basically stole little kids. lunch money, like that was the business model. Lots of really big bright ads with big text saying three ringtone with a little asterisk next to it and the asterisk says, After you get your Free Ringtone, we're gonna send you text messages until you tell us to stop and every time we send you a text message, it'll cost you three bucks. So the average cost of a Free Ringtone was $35.

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, that's so clever. Somebody's

</p>
<p><strong>Derrick Showers</strong><br />
parents somebody's character,

</p>
<p><strong>Laurie Voss</strong><br />
right? Exactly. It was literally their lunch money. They were like, Oh, I don't get to eat today,

</p>
<p><strong>Derrick Showers</strong><br />
or the next 30 days. So,

</p>
<p><strong>Ryan Burgess</strong><br />
Laurie, what's what's new in npm?

</p>
<p><strong>Laurie Voss</strong><br />
Five? Well, practically everything is new and NPM, five, when yarn came out, they were like, oh, it's got, you know, like, it's deterministic. And it's got, you know, better caching, and Baba blah, blah, blah. And like, they listed a bunch of features, all of which NPM already had. And but they, they did have one thing that we didn't have, which was speed they had, it was a lot faster than NPM for and we got the message, we were like, Okay, y'all said you want it to be fast. So the CLI team have been kicking ass and taking names for the last six months. The funniest part of that is, it didn't actually involve changing anything that they that they were doing, right, they'd set out like an 18 month roadmap 18 months ago, and they were like, and in, you know, May of 2017 will release NPM five, and it will be much faster. And we were like, Okay, I can make 2017, they're gonna release NPM five, and it's gonna be much faster, like the existence of yarn just makes it look like we reacted. But yeah, we completely change the caching layer. So the caching layer is a lot more resilient, and it doesn't corrupt itself anymore. So it's way faster. Isaac went on vacation for a month. And when he came back, he'd rewritten node tar. So like the two things that it does, or it downloads packages, and unzips them, and that is the two things that we both, both of those things are much, much faster. Now. We also made a big change, which is that we made it deterministic by default. So that's what that's what yarn does is it has the yarn lock file. So now NPM, five has the package lock JSON, which is always there and always on. So because it's not constantly checking the server to see if there are new versions of the package available, it's just downloading what's in package lock. It's a lot faster for that reason, as well. So the whole thing, like the benchmarks are looking really, really good. So we're looking forward to releasing it sometime this

</p>
<p><strong>Ryan Burgess</strong><br />
month. Next question, when can we

</p>
<p><strong>Laurie Voss</strong><br />
you can get the beta right now you can npm install NPM. Five. Nice. And yeah, when the beta is done, it'll, you know, NPM, install NPM. And you'll get it.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess, like you've already brought up yarn. But how does that affect MPM? Obviously, it's still piggybacking off MPM. How do you see that? Is your only competitor? Is it just pushing you guys faster? How do you see

</p>
<p><strong>Laurie Voss</strong><br />
that yarn is open source working? The way that open source is supposed to work? Right yarn was a bunch of people looking at NPM, this feature set 18 months ago and going, we don't like this, we think this should be more important than that thing. We think, you know, this should be changed. And they put their money where their mouth is, right? Like they put a bunch of really good developers on it. And they produced a completely respectable piece of software that solves Facebook's needs really, really well. And, you know, showed us a couple of things. We were like, wow, that is a lot faster. We should probably do that. By default. I was talking about how NPM is a front end tool. yarn is the crystallization of the fact that NPM user base is front Enders now and not back Enders. Because back Enders don't have this problem the same way that that front Enders do NPM is a pattern of using semantic dependent semantic versioning to pull in new versions of stuff that works really well if what you're doing is writing a library and all of NPM features were geared towards library authors, and not towards people who are like putting a website together. And they just wanted to make sure that it works and could deploy the same way every time. And yarn was like, No, that's what we want to do. Not only do we want to do it, we want to do it all the time, like yarn is the fact that the majority of people who use NPM are front end developers, it's evidenced by how popular yarn got. So we got the hint, we were like, Okay, we're gonna move the dial from library authors to front end developers. And so, you know, deterministic locking by default it is the funny thing is there's four other NPM alternative clients on the registry already. And somebody pointed out that if you take like a stacked list of our priorities, like if you, you know, if you said Okay, number one is backwards compatibility, number two is stability. Number three is speed. Number four is, you know, something else. Each of those other alternatives can be produced by taking one other thing and moving it to the top. So one of them is like I only want to pet I only want stability. One of them's I only want speed, one of them is I only want determinism, you know, and it's really interesting because people built every possible alternative to NPM and put it on NPM. Yeah, how does

</p>
<p><strong>Jem Young</strong><br />
that work with like Jas pm or something like that? They're still using your servers, right? They absolutely are. So how does Yeah, how does that work? Because they're just piggybacking off of your bandwidth and like your business to run as well. I know, it's open source anything but so

</p>
<p><strong>Laurie Voss</strong><br />
I mean, as far as I'm concerned, somebody's using like, the registry is the thing that we spend all the money on and private packages have a thing that supports it. And all of those package managers can use private packages as well. So You know, if you want to use an alternative package, set up an alternative client to talk to our registry, we don't mind. It'd be good if you paid. But you know, like, that's true of everybody. The worst case is if a bunch of people use yarn, then like Facebook is take is lowering our support load, because people will send issue tickets to Facebook instead of us. And that's fine. The first couple of months of watching yarns issue tracker were really funny because all of the bugs that you know, all of our oldest and like most intractable bugs showed up on yarns issue tracker as well, I was like, that's just a bug of JavaScript. You can't fix that by yelling at the package manager, you couldn't fix it by yelling at NPM. And you can't fix it by yelling at yarn, like undefined is just sometimes not a function.

</p>
<p><strong>Jem Young</strong><br />
Wait, now that you're here and expert of NPM, can you explain once and for all the difference between a carrot till they as far as like locking down semantic versioning because like, it's so wrong all over the internet, and people just oh man,

</p>
<p><strong>Laurie Voss</strong><br />
every time I try and explain this, I get it wrong. So. So the number one thing to understand about semantic versioning is three numbers. The first number is the major version. The second number is the is the minor version. And the third number is the patch version. So patch versions are supposed to be safe. minor versions are supposed to bring in features but be backwards compatible, and major versions are supposed to be breaking. But and this is the big exception. If the first number is zero, those rules are suspended. If the first number is zero, then the second number can be a breaking change. And the third number can be a feature. It's weird and confusing. So nobody understood zero point X versions always confuse people because they don't wait work the way that people are expecting them to work. So like 99% of the time when people are like oh carrot until they aren't working the way that I'm that I'm expecting them to work. It's because you're in a 0x version, and it's not working the way you're supposed to. So let's ignore 0x versions start with version one, which is what NPM does. Now NPM, like always defaults to version one point something till they will bring in only patch versions, carrot will bring in Patch versions and future versions. And if you don't want any of those, you can just you can also do just three point x, which is the same as saying anything that starts with three is fine. Gotcha. People will bend over backwards to make sure that their 1.0 version is like special and magnificent. And we are trying to stomp that out. I'm like if Chrome can be on version 58, then your package can be on version two point X after the second version, it's fine. Like integers are free when we run out of them.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that you're starting at 1.0 dot zero, because then you're right now you can follow that standard of like, okay, well, you can slowly move that integer. And that's how you should follow it.

</p>
<p><strong>Laurie Voss</strong><br />
Yeah, the only the only time I think somebody should be using a zero point X version is when literally you've never published it before. If you're just still putting it together. And you're like, I don't even know if I'm going to use this call it a zero point X version.

</p>
<p><strong>Ryan Burgess</strong><br />
And that's me shared within your small team or something but not publicly,

</p>
<p><strong>Laurie Voss</strong><br />
I think I think the it should never leave your laptop. As soon as it leaves your laptop. Even if it's just going to somebody across the room. That's when you hit.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, fair. I like that. I'm good with that. I can totally follow that rule. Gemini creating a package and I started. I will if I'm passing Tim, I should put into one Dotto. Yep. And that's fair. I like that.

</p>
<p><strong>Jem Young</strong><br />
And that's an excellent segue into my favorite NPM command, which is NPM and knit. It's how you start a package. And it does everything for you. It's like, what's your name? What's your GitHub, what's the package number, it does all that for you. That's my favorite.

</p>
<p><strong>Laurie Voss</strong><br />
And given it has a bunch of fun hidden features as well. So if you put in your NPM RC, or you can just run NPM set in it dot author dot name, and that will set it so you don't have to type it in every time it will just know also, author emails, stuff like that, if you run NPM and knit in a folder that is already a Git repo, it will set the Git repo for you. If you've already got a node modules folder, when you run NPM in it, it will put all of the existing packages into your dependencies shares. And the the the the most sort of weird and bizarre one is that there's a if you put a file called NPM in it dot j s into your home directory, there's a sort of package format called proms are that you can follow that will change what NPM in it does. So you can programmatically redefine what NPM in it does. So if you at Netflix are like every time we run NPM in it, we want to run we want to add a test stanza and it looks this way. Or you're like I want to add you know, these standard lifecycle hooks whatever that is you tell npm init that those you know npm init j s what those things are, and everybody who generates it package it and Netflix will automatically get that stuff in their package without having to remember to put it in there we set up the RFC But yeah, you put that you put it in your, you put that you'd have to copy that file to everyone's home directory. And then every time they run NPM in it, it follows the rules. pretty often. You can like add questions, like, it's completely interactive. So you can be like, you know, you know, type in a password or generate some entropy or like, you know, make a call out to our web API to find out what this thing should be like. It's very, very customizable,

</p>
<p><strong>Ryan Burgess</strong><br />
Laurie to come to like Netflix and hang out.

</p>
<p><strong>Jem Young</strong><br />
I feel like it's like get, you know, like, we all use a little bit of kit, and we all use a little bit NPM. But there's like this iceberg underneath that we just know nothing about, we never

</p>
<p><strong>Ryan Burgess</strong><br />
should get, I never feel like, hey, you know what, I'll learn something new every day without doubt.

</p>
<p><strong>Laurie Voss</strong><br />
Like, I think it's especially true of NPM. Because NPM user base is growing so fast. Like everyone, you know, shows, if everyone's ever followed me on Twitter, they'll see this graph that I point that I tweet all the time, which is like this exponential curve. The thing about exponential curves is that everything happens at the far end. So it's always true. That's something like 50% of NPM users have been using it for less than six months. It's just never ending September in there. Because people show up and you know, evergreening numbers every single day. So every single day, there's more people who are like, what is this thing? How does it work? Like we're always having to teach people the new the basic stuff. And it's going to be that way for a while.

</p>
<p><strong>Derrick Showers</strong><br />
One thing I wanted to mention to just go back to the semantic versioning semver.org. Have you guys know, it's so great. Maybe, maybe some of our listeners haven't used that. But that's like a good explanation of what you said, but like, very detailed. So highly recommend checking semver.org

</p>
<p><strong>Laurie Voss</strong><br />
is a really great way to to discover that not only did you not understand that you disapprove. That's stupid.

</p>
<p><strong>Ryan Burgess</strong><br />
So Laurie, what can we expect for the future of NPM,

</p>
<p><strong>Laurie Voss</strong><br />
there's a bunch of cool stuff coming. So one of the things that we've noticed is that, while NPM is NPM, our SaaS offering, it's good, if you've got a team of like four or five people like any, any team more than that begins to get a lot of value out of it. If there's just one of you, right, having a private package is not that different from having it in your Git repo. So we're gonna add a bunch of insights and stuff into the package into the web interface. So that stuff starts becoming more useful, even if that's all you've got. So instead of, you know, uploading a package, that is your app, which would be kind of inconvenient, you'll just, like, authorize your GitHub repo and NPM will know what packages you're using, and then it will start telling you stuff about them. It'll be like, Oh, this one's got a security vulnerability. Oh, this one is closely associated with this other one, maybe you should install it as well.

</p>
<p><strong>Ryan Burgess</strong><br />
The other dependencies are, Yeah,

</p>
<p><strong>Laurie Voss</strong><br />
cheers. Yeah, and in general, like, you know, we'll do like visualizations of Webpack stuff. So it'd be like, This is how big this thing will be on the front end. And, you know, we will tell you differences between versions, it's like you added a dependency to this thing, which made it twice as big on the front end, sure, you don't want to roll that back, that kind of stuff, which we think people are gonna find useful. And again, front end, developers are gonna find more useful, we're gonna start like focusing on the idea that people are mostly using this for front end. And then on the completely other side, one of the reasons that package lock and yarns locking by default are so popular is because people are trying to get reproducible installs. But the thing about a reproducible install, where you have to install 1000 packages is that it still takes really long, even if it's completely reproducible. Like, why are you installing 1000 packages, if you knew that it was exactly those 1000 packages, you could have done that in advance and got all of the build steps done in advance. So we're going to do that, there's gonna there's at some point, don't ask me when there's going to be two new NPM commands, NPM store and NPM fetch. So when you've built a good node modules folder, and your app is ready to go, you are an NPM store, and it will take that exact folder and turn it into one file and store that on our servers. And then when you deploy, you just run NPM fetch and one request, one second, it'll be down in your app will be ready to go. It'll be orders of magnitude faster.

</p>
<p><strong>Jem Young</strong><br />
Suck on that, yeah.

</p>
<p><strong>Laurie Voss</strong><br />
That's the thing about having you know, both the client and the server is like, that's you can make things you can really think back to the beginning of like, what is the actual problem people were trying to solve and just solve it better? So we really hope that that's going to make a lot of people's lives easier. And also, you know, maybe persuade a few more people to pay.

</p>
<p><strong>Jem Young</strong><br />
Can I ask, what's the difference between that in print crap,

</p>
<p><strong>Laurie Voss</strong><br />
so shrink wrap is just shrink wrap is a lock file. So package lock and shrink wrapped in NPM, five are the same. They're the same format. The difference between a package lock and a shrink wrap is that a package log doesn't get published, it assumes that it's going to stay in your Git repo and be part of your deployment process, whereas shrink wrap assumes that it is going to be published. And what you're trying to do is make sure that somebody installing that gets exactly the same list of packages. The thing about a shrink wrap is that it's not really a good idea. So if you imagine you had you were installing 10 packages and all of them had a shrink wrap. So it would eliminate NPM, his ability to deduplicate things in a smart way, right, because one of them would be using version one point 1.1 wouldn't be using version one point 1.2. And because they're both shrink wrapped, it can't move those around and say, one point 1.2 would be fine for both of you. So shrink wraps in production have the effect of making node modules folders a lot bigger. So in general, would just like an NPM. Five, we're going to be like, that was not a great idea, and you probably shouldn't use it anymore. And we're gonna, you know, package lock is the way forward. But store and fetch are very different, right? Shrink Wrap is just a list of the packages, and you still have to install them a store and fetch our the whole node modules folder is going to be one big tar file, and it's going to be on the server. So you won't be downloading anything except one file to be everything in your app. That's very

</p>
<p><strong>Ryan Burgess</strong><br />
cool to just one file, like specific to your app. And that's it. Yeah,

</p>
<p><strong>Jem Young</strong><br />
we can go all day have so many,

</p>
<p><strong>Augustus Yuan</strong><br />
like, actually kind of to build on that. I know, we talked a lot about deterministic versus non deterministic, maybe could you elaborate a little more on that, of like what that means. So there's

</p>
<p><strong>Laurie Voss</strong><br />
a certain amount of FUD that goes around about how whether or not NPM is deterministic. For those who are not like familiar with the the computer science version of the term. Deterministic just means it should be the same every time, or, you know, the same input leads to the same output. It is not always true, or it was not always true in earlier versions of NPN, that you would get the same output every single time. A lot of that was just straight up bugs. But some of it was design flaws. The way shrink wrap used to work made it possible to create a race condition between two versions of shrink wrap, there used to be this thing called, they were sibling dependencies that forgotten the actual name of them now, because we deprecated

</p>
<p><strong>Ryan Burgess</strong><br />
them, here's the dependency.

</p>
<p><strong>Laurie Voss</strong><br />
And so they were you know, instead of being, you know, a sub package, they were like, This is a sibling package to you. And that created dependency, hell. Which made it sometimes impossible to install a package for less deterministic. So in NPM, four, we got most of those out of the way and NPM. Five, they're pretty much they're pretty much gone. It's still possible to create race conditions, if you are trying to create race conditions. But it doesn't happen very much anymore.

</p>
<p><strong>Jem Young</strong><br />
So like the one thing you wish people knew more about NPM, like, there's this cool command that it's built in, and nobody ever uses it, it will change your life,

</p>
<p><strong>Laurie Voss</strong><br />
there's, again, it comes back to the fact that most people are our total newbies with NPM 20% of NPM. Users don't know there's a registry. They think the packages come from the sky, or they think the packages are on GitHub. Lots of people think that packages are on GitHub. They're like, NPM is a tool that downloads packages from GitHub for me, and I'm like, no, no, we have dozens of people and you know, millions of dollars worth their servers.

</p>
<p><strong>Jem Young</strong><br />
But that is possible, right? It is possible to point

</p>
<p><strong>Laurie Voss</strong><br />
you can write but it's not by default. Yeah, like. So I wish more people knew that. And the other thing is, I wish more people knew that NPM is a company, there's tons and tons of NPM users who are just like, you know, it's the way the analogy I use is imagine that you use LS everyday to list directories and somebody was like, Did you know there's an LS Inc? Why is there an LS Inc? How do people make money listing directories? What's going on? Like, that's people's reaction to discovering that NPM Inc exists? So yeah, those are the two things it'd be like, hey, there's a registry and also you can pay for it.

</p>
<p><strong>Mars Jullian</strong><br />
So Laurie, a question for you on the topic of different NPM commands. Oh, also, I want to point out that it supports typos. Did people did anyone know this? Yeah. notorious for typos. And when someone realized I had written in a readme, a typo, they just copy pasted it. It still worked. It was magic. It supports what does it not install? But it's is and isn't isn't all?

</p>
<p><strong>Derrick Showers</strong><br />
Unlike get that makes you feel stupid is like Did you mean git commit? Does it hurt? Yeah, like Yes. I meant it. You said Did you mean it? So

</p>
<p><strong>Laurie Voss</strong><br />
there's there's also a phantom command. So NPM update is a thing. But a lot of people sort of, you know, sort of with a Bernstein bears thing. They sort of imagined that there's a command called NPM upgrade, and they kept running it and being confused with the work. So now if you run NPM upgrade, it's an alias to NPM update.

</p>
<p><strong>Mars Jullian</strong><br />
Anyway, so on the topic of commands, some of us are curious. And I'm sure some of our listeners are too about the difference between NPM dash dash save and dash dash save Dev.

</p>
<p><strong>Laurie Voss</strong><br />
This is just a transparent opportunity to get me to say the word dependencies

</p>
<p><strong>Jem Young</strong><br />
so yeah,

</p>
<p><strong>Laurie Voss</strong><br />
the Save will put it into your dependencies and save data, we'll put it into your dev dependencies. There's gonna be a really you may want to hold back by the time I get to the end of this explanation So dependencies come in, if you installed with dash dash production.

And dev dependencies are only supposed to be installed when you're in development. You're just gonna die, we'll be very happy. So the idea is is saved. This is stuff that you don't want running in production. It's if you want, you know, like your, your test libraries, you know, a bunch of stuff that you would run to do builds, but you wouldn't run to do in production. It's not part of your runtime, you should be putting that into your dev dependencies folder. Yeah, that's the difference between save and save Dev, all about the dependencies.

</p>
<p><strong>Ryan Burgess</strong><br />
As we wrap up today's episode, we like to share pics of things that we like or found interesting that we'd like to share. Let's go around the table and share pace for today's episode. Augustus. Let's start it off with you. Sure, yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
I have two picks. One is dico IDE. It's a new IDE that's for React Native apps. And it got a little more popular because actually, Airbnb acquired them. So I think it's worth checking out. It's totally open source. And you know, it's just, like really optimized for building React Native apps. How do you spell that? Decaux D C, O ID. So another one that recently I tweeted about was this mocktails mixer, it's made by this company called Deep local, and Google hired them to use their new Google Assistant SDK to make this machine where it will take like, these pumps, and it will like you use the SDK and look up a recipe online. And then assuming you have all the bottles of like liquids, it will, like create the mocktail that you want. Yeah, it's like, awesome. So you just press you just press a button, it'll like, it'll be like, what drink do you want? And you're like, oh, I want to Cherry sunrise or whatever. And then, yeah, and so and the best part about this is deep local, has open sourced the instructions and all the parts of how to make it cost like 500 bucks, which is pretty pricey, but it's like a cool project

</p>
<p><strong>Ryan Burgess</strong><br />
to buy for front and happy. Obviously.

</p>
<p><strong>Augustus Yuan</strong><br />
If we can make a cocktail version, that'd be sick.

</p>
<p><strong>Jem Young</strong><br />
There. We should build this, I'm sure. So

</p>
<p><strong>Mars Jullian</strong><br />
we should have a podcast of us trying to build

</p>
<p><strong>Laurie Voss</strong><br />
45 minutes of cursing.

</p>
<p><strong>Augustus Yuan</strong><br />
Time is 15 hours,

</p>
<p><strong>Ryan Burgess</strong><br />
and will probably turn into 30. By the time you're actually making a video.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. Eric, what

</p>
<p><strong>Ryan Burgess</strong><br />
do you have for us?

</p>
<p><strong>Derrick Showers</strong><br />
Okay, so I have three days, I haven't been on for a couple episodes. So first two or three podcasts that I've been into. So the first one actually, Brian recommended how I built this, he might recommend the other day, and I listened to it today. Really, really great, like stories of startups that listen to the Instacart one today. I'm a big fan of Instacart. So I thought that was a really good episode. And I want to let you know, Ryan, that I don't know if you listen to that episode. But they talk about this new product that at the end, they talk I guess about like something that like to share ideas of things that you built. And this guy was talking about the swiping feed. So being a new father, you can connect your phone to your baby's bottle. And so while you're feeding your baby, you can be on your phone and reading the news. So I thought the other podcast is out of 99% visible it's called containers. It's like an eight part mini series on containerization is really really good talks anything from like what it's like to be to work on a container ship. And to to how containerization, which is essentially a form of automation has like transformed ports around the world. So it's really interesting. So I highly recommend that. The third one is kind of a fun one, something that my wife and I are do we found last night called Jackbox. TV. And so it's on Apple TV. It's on like a bunch of other platforms. But I was just really impressed with how easy it is to us. So you like, at least on Apple TV, you you load up the app, and then you're you it's like tripmaster trivia based. But what's cool is you don't have to have an iPhone to be able to participate because it's just a browser. So you just go to jackbox.tv enter your code. And then you just answer these questions on your phone. Everyone just answered the questions on their phone, whatever device they have, they can you know, even have like a Windows Phone. Not that there's anything wrong with that. But yeah, and it's it's I was amazed on how responsive it is to being in a browser. Like there's there's certain questions where you have to be like the first answer. And soon as you tap that button, like it's immediate, the response is immediate. So it's there. It's just very well done. So I highly recommended checkbox TV, Mark zodia for us.

</p>
<p><strong>Mars Jullian</strong><br />
So I don't have anything Debbie today but so I just recently discovered that in Spotify, there's a tab called genre and moods and you can go to it and they'll have different playlists based on like what you're looking for. So there's like a focus and productivity. There's like happy vibes get your day off the right way. And I've definitely would recommend one of the focus and productivity ones. They're definitely useful if you're coding and need to get in like a In a groove, the other is I positively hate flying. And for anyone else out there who also hates to fly and is terrified of all the bumps in the noises, there's this new app called Sky guru, which was built by a pilot, which will take the input from your microphone and your sensors and during the flight will respond to changes in noise and elevation, and then send you a notification saying, Oh, it's totally normal. You know, this is the this is happening, or I'll give you like a turbulence forecast before your flight

</p>
<p><strong>Ryan Burgess</strong><br />
Barza your solution is just drink but

</p>
<p><strong>Mars Jullian</strong><br />
it is but this will also help. So if anyone is looking for something to ease their mind, I would recommend it

</p>
<p><strong>Jem Young</strong><br />
does have a panic mode. You're gonna die.

</p>
<p><strong>Mars Jullian</strong><br />
I'm like tempted to try it. And I'm also tempted to not because if they know and you drop 100 feet and it's like that's not normal. You could call your mom Yeah, exactly. So we'll see if the UX in that situation. Got good messaging.

</p>
<p><strong>Laurie Voss</strong><br />
When I was growing up, I lived I grew up in the Caribbean. So it's a lot of little islands close to each other and whenever we were making plane rides and the other one the thing that I would do to calm my nerves about about the plane ride, which is always like little tiny planes is I would think about how far I was from the nearest landmass and whether or not I could swim it

</p>
<p><strong>Ryan Burgess</strong><br />
too far in the middle of anything you

</p>
<p><strong>Laurie Voss</strong><br />
right, like, but that was like a pretty good swimmer. So like you know there would be like only five minutes in the middle where I was like I couldn't make that but that as soon as I can see the show I'm like I could do that. That's only three miles I can make it that new feature

</p>
<p><strong>Derrick Showers</strong><br />
for the sky guru I think

</p>
<p><strong>Laurie Voss</strong><br />
doesn't work on land.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
I have a music pick. It is good quality music to draw to settle it is an excellent album to go to one of my favorite so far that I found recently. And I discovered while I was made a new drink over the weekend. It's called an aviation. It is by far my favorite drink it is gin, lemon juice, cream, the violets and Creme de machina. So it's actually a lot of lemon juice. It's mostly gin. It is like such a complex drink. It has like flavors that overlap. It's I'll make some for you guys next time. It is by far my favorite drink lots of dependencies.

</p>
<p><strong>Ryan Burgess</strong><br />
Laurie, what do you have for us?

</p>
<p><strong>Laurie Voss</strong><br />
I only have nerdy pics. I'm afraid the first one is is unabashed plug, my pick is NPM five, y'all are going to love it. It is we've been using it internally for the last month. And it's just so nice. Like not only is it a lot faster, they've just put a lot of effort into the details of making it, you know, just smoother to use and just the whole experience is a lot nicer. And they've just put so much work into it. And I'm really, really proud of them. So I'm just unabashedly. Good job, everybody. My second one is a web app that I've been using for years that I feel some people know about. It's slides.com. It is like if you're a web developer, like a this is useful, it'll help you put slides together. And you know, you can give it you can use it to give talks. But also, it's just the perfection of the art form of web apps. It's so good. every use case, every edge case, every corner, like you know, the affordances for resizing stuff and moving things around and changing fonts. And when you click it always just does exactly what you want. Like it's just the best web app I've ever used. And it's sort of my gold standard of like, if I could ever make an app. That's that nice. That's what I do. And the third one is I've been plugging in everywhere I go. There's a framework called next js. If you are a front end developer, and you keep hearing people talking about React, and you're like, yes, I would like to use this react thing. But I don't want to have to learn every single thing about build chains. It's happened since the beginning of time. Do I have to learn what Babel is? Do I have to learn what Webpack is? Next js is it is you know, it is the Ember or angular of React, it's you just hit a button and it's ready to go. And you can just start writing React components, so you can figure it out later. You know, like every framework. In order to make things simple, it's had to make a few choices for you. So there's some stuff that you could do in a vanilla react app that you can't do an index js app, but if you're just trying to get going, it is absolutely the way to go. And you know, I sit at the center of a maelstrom of data of you know what packages people are using. If you are not already a reactive developer, you need to get on the train. The train is not leaving the station the train is like three stations down. You need to get a cab and get to the next station.

</p>
<p><strong>Ryan Burgess</strong><br />
Start off to picks But Derek reminded me of one so I'm gonna have three. My first pick is a thing for your iPhone is called a woman lens. You can have different lenses for your phone and for your camera. So you can have like a micro lens or you can have like wide angle really, really cool. My wife actually bought me two of them. And so they're very, very cool for getting really cool photos. And my second pick is Lynn Clark's talk on fiber. If you really want to understand fiber, she does a really good job of like, cartoony, what fiber is in for React. And that was done in React comp 2017. I definitely recommend watching that. And then Derek and his wife have actually mentioned this movie called The founder, which is all about McDonald's. It's not a documentary. It's like a story about McDonald's and how it was actually founded. And how it franchised. It's really good movie. You watch it? Yeah, Derek told me about on Friday. I think I watched on Saturday. And holy shit. It's

</p>
<p><strong>Derrick Showers</strong><br />
yeah, it's like 95% Rotten Tomatoes score. It's it's it's good. I guess it's really really good. My opinion. Totally is the reason McDonald's is the way it

</p>
<p><strong>Ryan Burgess</strong><br />
really defines it. And it's crazy. Like, just to see that story told,

</p>
<p><strong>Derrick Showers</strong><br />
did you guys do like DoorDash for McDonald's afterwards? Because I did. So.

</p>
<p><strong>Jem Young</strong><br />
His wife was the one who donated all the money to NPR at the end, right?

</p>
<p><strong>Ryan Burgess</strong><br />
You're correct. Yeah, she donated to NPR and a couple of foundations when MPR was a big one. There was like two or three foundations, but MKR was one of them. So which is pretty cool. Yeah, so but he wasn't even like the founder. Technically he the franchise that

</p>
<p><strong>Laurie Voss</strong><br />
if you go into the history of any major corporation, it's always full of drama, right? There's no like, that's what I

</p>
<p><strong>Derrick Showers</strong><br />
was. It's funny you say that? Like I was thinking after I watch this movie. I was like, they should do more of these you know, kind of like, what do they call it isn't not really documentary is much better. Yeah. But I would love to see this on Yeah, like you said, like big corporations

</p>
<p><strong>Laurie Voss</strong><br />
social network. I want everybody in the world to think that my life is cool. Yes, yes. It's all keggers and we're throwing bottles at the wall. That's exactly

</p>
<p><strong>Jem Young</strong><br />
Laura's already written like formulas, all of our glass walls.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. So before we end the episode, I want to thank Laurie for being a guest on our podcast. Thank you for joining us. It was a pleasure having you.

</p>
<p><strong>Laurie Voss</strong><br />
Thanks for inviting me. I

</p>
<p><strong>Ryan Burgess</strong><br />
had a lot of fun. That's great. Where can people get in touch with you?

</p>
<p><strong>Laurie Voss</strong><br />
I am selkoe on Twitter SEL do so tweet at him tell my DMs are open you can complain at me you can praise me you can you know send me funny cat gifts whatever the

</p>
<p><strong>Mars Jullian</strong><br />
hell you want. always wondered where does that user name come from with Twitter's name? Oh, man,  
it's so nerdy

</p>
<p><strong>Augustus Yuan</strong><br />
detail.

</p>
<p><strong>Laurie Voss</strong><br />
Have you read any Isaac Asimov books?

</p>
<p><strong>Mars Jullian</strong><br />
I've one or two. All right. So

</p>
<p><strong>Laurie Voss</strong><br />
there's a he wrote us a long series of books called the foundation books and the character in the found one of the characters in the foundation books is Harry Selden. And there was another character and I when I was you know, 15 and picking a username for myself, I merged their names. So it was like this super long, unwieldy, you know, eight syllable name and all of my friends immediately went, we're not going to use that. That's too complicated yourself, though. And I was like done. And that's where it came from.

</p>
<p><strong>Mars Jullian</strong><br />
Nice.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you all for listening to today's episode, make sure to follow us on Twitter and Instagram at front end ehh. You can follow us on Facebook as well. Any last words dependencies? Cheers

</p>
`;
        return transcript;
    };