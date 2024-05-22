module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 20th episode of the front end, Happy Hour podcast, we have had quite a few requests to talk about our development environments. So in this episode, we'll be talking about what we use and the tools that we find useful in our daily work lives. I'd also like to make an announcement that we've just launched a new run of the front end, Happy Hour T shirts, they are available now to purchase just head over at front end, Happy hour.com/shirts. The shirts turned out really well. They're extremely comfortable, so make sure to get them before they run out. Before we get started, let's go around the table and give a brief introduction of today's panelists. Brian, you want to start?

</p>
<p><strong>Brian Holt</strong><br />
Hi, I'm Brian Holt, and I'm a professional tool at Netflix.

</p>
<p><strong>Jem Young</strong><br />
I'm Jem Young, Senior Software Engineer at Netflix, and I can confirm that Brian is a huge tool.

</p>
<p><strong>Mars Jullian</strong><br />
Hi, I'm Mark Julian, also a senior software engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is productive, productive. So if if any of us say the word productive, we will all take a drink. Alright, let's get started. What's your favorite OSS to develop on?

</p>
<p><strong>Brian Holt</strong><br />
So far? For me, it's been Mac OS slash OSX, depending on when you asked me, I've been using it. I mean pretty much since my second development job. So it's been about five years since I've been using it. But recently, I found it to be much less stable than it used to be. It used to be just it just worked. And that's kind of what I wanted, I wanted to open my like my Macbook and just start coding and not have to worry about tooling around with the settings, getting my monitor work, getting my network traffic to work, getting the video card to work, right. And those were problems that I had in college, when I was working on a boon to that I just it didn't necessarily work out of the box, I had to tool around a little bit. But recently, like past two years, I've been having much more like restarts. And it's been a much less pleasant experience for me. Anyone else to say you're less productive, less productive?

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, I've been using Mac OS, even in college when I was learning to program and you know, there was always the allure of being a hacker, as you're starting out in computer science and working with Linux or Ubuntu, but I actually would be much less productive.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers, cheers. Because I

</p>
<p><strong>Mars Jullian</strong><br />
would be spending so much time setting it up in the first place. And now I find that today when you're looking for tools that already work, and they work out of the box, and they're well supported. And they've got good documentation, oftentimes, it leans more heavily towards Mac OS in terms of where those tools are developed. Not to mention and I agree with Brian, yeah, it's been really buggy over the past couple years. But I have to say that the number of devices that I can work on now is a lot, there are a lot more of them. So that's been kind of nice in terms of the ecosystem that Mac has developed to be able to work on an iPad on a phone on, you know, anything, when I'm on the go,

</p>
<p><strong>Ryan Burgess</strong><br />
I messages the best across. It always holds me in that iOS and Mac ecosystem just because of that,

</p>
<p><strong>Mars Jullian</strong><br />
not to mention now a continuity. So you can copy on your computer and then paste it on your phone. Just it's

</p>
<p><strong>Jem Young</strong><br />
really cool. I started it on the dotnet world, and so C sharp and all that. So Windows for sure. And I was like Windows, Windows Windows, and then I switched the OSX. And it's fantastic. Not that I like OSX per se but I like what it is, it's just a nice pretty UI on top of a good Unix layer, which is all I really want out of my iOS. And I'd use Ubuntu and I had before, but there's just not as many tools out there for it. So I was extra where it's at right now, but I'm not married to it. I would switch if someone if Ubuntu just like changed the game and made something just amazing. I would switch to

</p>
<p><strong>Ryan Burgess</strong><br />
a boon to what if Microsoft changed the game?

</p>
<p><strong>Jem Young</strong><br />
I'd switch back to Windows. Yes, I currently don't like my Windows 10 machine at home because they're just trying to shove Cortana in like Microsoft, and all that you but yeah, I have no problem essentially, with Windows 10. There's, I think it's a fine LS probably not for development, though.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I guess the last time I was on a Windows machine was XP. And that was the last time I had to develop on it. I hated it went from OSX to Windows for us for a project that I was on at an agency and I had to use it so it was like forced to use and it was XP, it was painful. Yeah, I didn't like it at all. So I definitely prefer working on OSX.

</p>
<p><strong>Jem Young</strong><br />
What's confusing is that some commands work across Windows and UNIX system. So like CD or LS or RM both work so you're like, Oh, let me just try. Vim command. The end some things work something Don't and it's very confusing exactly where the line is. So you're like, oh, bash, I know this, but it's not bash command shell. Well, I

</p>
<p><strong>Brian Holt</strong><br />
mean, they now actually run a boon to kernel inside of Windows. Right? So you have to give them some credit for trying to meet us developers in the middle. Yeah, I mean, you can run like the Unix distribution of node inside of Windows with no problem, which is pretty amazing.

</p>
<p><strong>Ryan Burgess</strong><br />
That is, like, very beneficial.

</p>
<p><strong>Jem Young</strong><br />
Yeah, speaking of windows and node. So node has, you know, the crazy long install paths where like dependencies of dependencies have dependencies. Thankfully, they're fixing that now where it's like, they're all linked. So it sounds so crazy. But windows had a bug for probably 1520 years or so, where if a path was too long, you couldn't actually delete it. So I could install things with node. But I couldn't remove that file, because there would be a path to long error. And I like, put on Twitter. So it's like, actually, you need to install custom shell to delete that file. It was just it was bizarre. And I'm like, yeah, like what years and I can't delete files from from my old computer, because the path to log just, I have a lot of bad Windows stories. But again, I'm still pretty neutral. And

</p>
<p><strong>Ryan Burgess</strong><br />
you're pretty neutral that you've had all those problems. And you're like, all right, I would still switch. Maybe

</p>
<p><strong>Jem Young</strong><br />
it has steam and games. So

</p>
<p><strong>Ryan Burgess</strong><br />
for gaming, you're right.

</p>
<p><strong>Brian Holt</strong><br />
Like I do want to give Microsoft some credit and also knock Apple a little bit like you look at what's happened over the past couple of years. You look at Microsoft having like integrating bash, like shuttering Internet Explorer coming out with Edge, which is like a modern good browser. Like they're really trying to go after the developer crowd and trying to please us, whereas with Mac, look at the new MacBooks, right? They got rid of the Escape key. They didn't give us more RAM. They didn't like all these things like they're, they're going away from developers and Microsoft is trying to come to develop courage. Ryan Kurth, hashtag courage.

</p>
<p><strong>Ryan Burgess</strong><br />
My damn iPhone doesn't have a headphone jack. It drives me nuts. I think also, too, is the fact Microsoft does a lot of open source. What about Apple? There's no open source.

</p>
<p><strong>Brian Holt</strong><br />
I mean, there's they have a lot of people working on WebKit. Sure. Yeah. As far as great dot dot dot.

</p>
<p><strong>Ryan Burgess</strong><br />
What about IDs? What's everyone using for coding?

</p>
<p><strong>Mars Jullian</strong><br />
I'm using Sublime Text, I think three at this point. I remember when I first started coding, I was using Emacs. And I was working on that for my senior thesis and that that was miserable. What didn't you like? Well, I couldn't like navigate in Emacs with a mouse, which was just like the most frustrating thing ever. And I was learning all the key bindings and everything. And I just remember at one point I had, this is you know, right before my senior thesis is due and deleted all my files, and I couldn't figure out how to get them back over there to re type the mountain emacs couldn't copy, paste all all sorts of different weird problems. But I've been really happy with Sublime Text three, it's really lightweight. Lots of plugins. One of my favorite plugins, actually is GitHub inator, which allows you to right click, and it'll open that file in GitHub, or it'll blame that line directly in GitHub for you. It's just, it's just so fast. And when you're trying to debug something, or sort of figure out what happened, you know, you can go right to the commit message that hopefully someone else wrote eloquently enough for you to read it. So

</p>
<p><strong>Ryan Burgess</strong><br />
that was a plug in. That's pretty cool. Yeah, updaters. That's really cool. I've always used sublime, and actually just recently switched to Vim. And so far, I feel like

</p>
<p><strong>Brian Holt</strong><br />
what why don't you tell us about it? Well,

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan anklam actually helped me get set up with like a lot of plugins or like using his vim rc file that was really helpful. I feel like getting the setup is actually really hard with them. Because it is so bare bones, nothing, and you do need a lot of the setup for you. So he helped me with that. It's been a couple months now that I've been using it and I feel like I'm productive. Cheers. But I'm about the same as I was on sublime, which is good. So I'm, I've deleted sublime. I'm not using it, and I'm fully on Vim. I would like to get faster with it, though. And I'm trying to get better shortcut keys going. But all in all, I'm enjoying it. It I haven't quit yet. So that's good.

</p>
<p><strong>Brian Holt</strong><br />
You haven't quit as you haven't figured out how to quit.

</p>
<p><strong>Ryan Burgess</strong><br />
It's not just that simple. Pretty good. But I did order one of those new MacBooks and there is no escape key. So that could be very painful.

</p>
<p><strong>Jem Young</strong><br />
How are you gonna use them?

</p>
<p><strong>Ryan Burgess</strong><br />
I haven't mapped to capslock anyways, like, I don't really use escape now. So

</p>
<p><strong>Brian Holt</strong><br />
I thought you had to control map to capslock Yeah, I do have control. That's true. So you still need escape, but it's still it's there. It's still there. It's just like a touchscreen instead of a button. Yeah, it looks so people are freaking out or very little in my opinion. To me, it's gimmicky, but whatever. But you can put Nyan Cat on there. That's adorable.

</p>
<p><strong>Ryan Burgess</strong><br />
Because I definitely wanted that.

</p>
<p><strong>Brian Holt</strong><br />
I did.

</p>
<p><strong>Jem Young</strong><br />
Pretty much same as Mars. I use Sublime with a whole suite of plugins and sublime. is pretty good for an editor. But it's really the plugins that actually make it similar to Adam, like a great developer environment as well. But it's all the plugins you need to plug in. But then I use Visual Studio code for debugging node because with Vizio code, I can set breakpoints then inspect what's going on. And how do you feel about a node? And anything else special? I started on notepad plus plus, you know, shout out to the old days. So any sort of IDE or plugins are amazing, because I'm used to just hand coding everything.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, I definitely started on notepad like that was like definitely where you start, which is cool, cuz you kind of have to learn to code yourself without everything that helps you do that. I remember back in the day, like people would use Dreamweaver. I mean, I hated that. That was the worst. No, that was definitely one that I just, I tried at one point, but it was so painful. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
I'm on I started out on TextMate. Ah,

</p>
<p><strong>Ryan Burgess</strong><br />
it was great. I love text me, I could still use it. Yeah, well, it got it became really slow that I ended up switching from TextMate to Sublime, because I found TextMate was getting slower. And I noticed how quick sublime was. That was the only reason I switched,

</p>
<p><strong>Brian Holt</strong><br />
I suppose because of peer pressure, peer pressure. And that's actually true. I'm also on sublime, actually did try to switch switch wholeheartedly to code Visual Studio code. But kind of the same issues that if you open a big file with code, at least as of like 104, something like that, it was still pretty slow on big files, it was crashing intermittently. And I just wasn't getting enough gains out of it to justify staying on it. So I actually have switched back to Sublime.

</p>
<p><strong>Jem Young</strong><br />
My gripe with Sublime is that it just doesn't update. And normally I don't care as much as I wouldn't call someone out. But this is a tool that I paid for. So the fact that it's like updated what, once or twice in every couple years. Yeah, yeah. And but shout to the guy for making it. But I think it's one guy, maybe a few other people. But come on, man. Like we needed an update. Adam was just like coming through and just blowing everything.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, and when Adam started, I remember trying it it was really, really slow. But now it's actually quite fast. It's complete opposite. I mean, it's what it's three years old. Adam, is that what rad? Oh, Lord, that's definitely a couple.

</p>
<p><strong>Mars Jullian</strong><br />
Wow, time goes by fast.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it has at least three. Yeah, three

</p>
<p><strong>Brian Holt</strong><br />
is accurate. So a note on sublime. I imagine you're on the stable channel, or have you switched away from the stable channel to the dev channel.

</p>
<p><strong>Jem Young</strong><br />
I switched the dev. But I think it crashed once or twice. And then I got off the dev back to the stable.

</p>
<p><strong>Brian Holt</strong><br />
Okay, so I've been on dev for at least a year, if not longer. I've had zero problems with crashing anything like that. And they actually update it maybe once a month. And then if you can get on the nightly channel, which does crash don't don't get on nightly. But they hired the guy that did the plugin Sublime plugin manager, right. So he's the guy that actually wrote the the open source plugin manager now actually was looking for package control. That's one now actually works for Sublime itself. So they actually are like now hiring more making it a real business getting more people onto it. So it's, it's it's okay to stick to Sublime, I think,

</p>
<p><strong>Ryan Burgess</strong><br />
what about tools that you couldn't live without? You know, when you're setting up a fresh machine? Like, what are those first things that you start installing? I

</p>
<p><strong>Mars Jullian</strong><br />
think one of the first things I do my development environment is make sure that my terminal shows me what branch I'm on. Oh, nice one that really is. I didn't have it for a couple years. And I noticed it on on co workers laptop when they were using it. I was like, oh my goodness, that's game changing, at least in my life. That's excitement for me. And it's just really useful, especially when you're like cautious of where you're pushing things to, especially if you're pushing through some sort of a release branch. So it's been saved me a couple times at least. Yeah, it's

</p>
<p><strong>Ryan Burgess</strong><br />
that last minute check where you're like, wait, I'm on the wrong branch. But

</p>
<p><strong>Mars Jullian</strong><br />
everything's already committed.

</p>
<p><strong>Jem Young</strong><br />
I use I term that's pretty indispensable to me, I preferred more than I leave note the

</p>
<p><strong>Brian Holt</strong><br />
regular terminal terminal.

</p>
<p><strong>Jem Young</strong><br />
I Turned Pretty great. I have a whole suite of plugins for it. But I don't remember what is pro tip Time Machine your laptop. So if you're a switch company to switch laptops, you just restored you're right back where you start. So I actually have no idea what's installed currently, because I always time machine.

</p>
<p><strong>Ryan Burgess</strong><br />
I was thinking about the same thing as trying to think of all those things like what are those first things I need and set up? But yeah, the last few times I've just mirrored my laptop for using time machine and I'm up and running. Good to go. I actually think the last time our IT department did it for me, which is even better.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, no, I think that's that would be the first thing I set up, which is backups, right? Making sure that it backs up correctly as far as tools that I need. Like I get my ID for my terminal app. I like Kaleidoscope for get diffs Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
that's a beautiful one. I like that one a lot expensive. It's

</p>
<p><strong>Brian Holt</strong><br />
seven bucks for a git diff program. But it's a really, really nice way to visualize diffs. Like it. It is really expensive, but I've used it for so long that I'm just cool with it makes git merge is so much more simple to get through. And like, that's such a hellish part of my life that I'm okay paying some money for that.

</p>
<p><strong>Ryan Burgess</strong><br />
I think one of my first ones even move for an IDE, maybe I turned might be one of the first ones I install, but one password, I literally need that to set up so many things, which also requires because I haven't syncing on Dropbox. So you need to get Dropbox first in order to get that set up. But yeah, anything I'm installing, I need a password for.

</p>
<p><strong>Mars Jullian</strong><br />
I think one of the other ones I also installed vs. I love Trello I could be like a brand ambassador for Trello. Because let me tell you Trello has the list of things I need to install first, after I've installed Trello I like how versatile it is how flexible it is, in order to you know whatever way you'd like to organize things, or categorize them are lists, cards, all that stuff just very useful. Very lightweight. Trello is pretty good. I use Trello for everything I use Trello to move that was fun. I don't use

</p>
<p><strong>Brian Holt</strong><br />
Trello that much.

</p>
<p><strong>Jem Young</strong><br />
I install Chrome and Firefox and LastPass Yes, I don't know any my password. So thank God for LastPass

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I install the browser. To be totally honest, it's probably the browsers I install first because I I shouldn't using Safari No, you open

</p>
<p><strong>Ryan Burgess</strong><br />
safari to download Chrome and then the rest, you're good. You can even just homebrew that if you really want to. That is true. That is a very good point. So you don't even have to open Safari,

</p>
<p><strong>Brian Holt</strong><br />
a package manager while we're speaking about it, which is actually super useful. Like homebrew, if you're on Mac or whatever, wherever else you use.

</p>
<p><strong>Ryan Burgess</strong><br />
Node is probably one of my first ones I install as well. That's pretty quick.

</p>
<p><strong>Brian Holt</strong><br />
I use Node version manager nvm.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm pretty sure you showed me that one. And I was blown away. I was like, Yes, this is so good. There's

</p>
<p><strong>Brian Holt</strong><br />
1000 of them. There's also n. But MDM is just really easy to manage your node versions. And like I have one that's specifically for work like the the version that we use in production. And then I use like, now I'm using Node seven for all my personal stuff. So it's really easy to switch back and forth between those two. It's something

</p>
<p><strong>Mars Jullian</strong><br />
I haven't used a lot before. But I've started using more now that I work at Netflix is there's so many devices out there and all sorts of combinations of setups with, you know, classes and different browser versions. So I've started using Browser Stack a lot, I find that it's it's really useful for you know, you get a bug, it's happening on this version of Chrome on this particular device. And like it's gonna take me way more time to find that device with that version of Chrome, I'm going to be more productive. If I just open browser stack, and it's, I'll admit, it's a little slow. Yeah, explain what Browser Stack is, yeah, Browser Stack is a service that you can log into online that I guess they provide access to real devices. And you can choose your configuration. So a lot of times you can go in and be like, I want to be on Windows eight using IE 10. Because you know, it's got bugs, and I need to fix it. So it'll spin up a device running that configuration. And you can actually run the network requests see through your local network. So you can also debug things locally, which has been really, really useful.

</p>
<p><strong>Ryan Burgess</strong><br />
It's gotten a lot better over the years, I would say like three or four years ago, I started using it. And I always found it very painful to try and get working locally to have SSH in. It was a pain in the ass and it never quite worked for me. Now I just use it in the past year. And yeah, it's just like a checkbox use my local connection actually been a really useful tool for our team in general. Another one for me is probably one of my early installs. I'll even actually install it on my wife's computer when I'm fixing something for her.

</p>
<p><strong>Brian Holt</strong><br />
So Keylogger

</p>
<p><strong>Ryan Burgess</strong><br />
is Alfred I love that just opening anything up. It's so easy, just putting like a quick key to pop open that and you can search your applications very useful.

</p>
<p><strong>Brian Holt</strong><br />
Well, then I have statistics for how often I use Alfred, it actually, if you look at Alfred's preferences, it'll show you how often you use it. Since April 6 2015. I've used alpha 2972 times or an average of 5.1 times a day.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow. Actually, that's pretty impressive.

</p>
<p><strong>Mars Jullian</strong><br />
8.3 times a day since January 11 2016.

</p>
<p><strong>Brian Holt</strong><br />
Okay, so here's a good question for all of you. What development tools are so good you've actually paid for? Alfred is obviously one of them. Right?

</p>
<p><strong>Ryan Burgess</strong><br />
Alfred sublime? Trello. Do you pay for Trello

</p>
<p><strong>Mars Jullian</strong><br />
and Trello? Gold? Oh, yeah, you'd have custom backgrounds because like custom stickers. So yeah, the stickers are cool. And so are the backgrounds. Kaleidoscope I have paid for. Here's what I really liked called bartender. I don't know if anyone uses that, or you're the toolbar because there's a lot lots of apps that will turn on, you know, those little like toolbar extensions by default. And so you get like all of those icons and then they run into the help bar on the other side and you can't see what's going on but collapse things sort of into the bartender and really only have the tools that you need in front of you.

</p>
<p><strong>Ryan Burgess</strong><br />
It's kind of pissing me off Lately though, because it doesn't work on the latest version of Mac OS.

</p>
<p><strong>Mars Jullian</strong><br />
It's a little glitchy at the moment. Yeah, some of the Mac system extensions don't allow you to collapse them into the bartender, but I think they're working on it because I've, they come and go on my computer at least. Oh, another one. Sorry, there's a tangent now that I'm looking at my toolbar and I see it, one called trailer, which goes into your toolbar, and it gives you a list of all of the pull requests that you've either opened or participated in or mentioned in and it'll like go red if you've got unread notifications. So if you're like looking for somewhere to find your pull request, it's really easy to just open it and

</p>
<p><strong>Ryan Burgess</strong><br />
that sounds awesome. I'm gonna install that. That sounds pretty cool.

</p>
<p><strong>Brian Holt</strong><br />
I don't need more notifications. Let's see, I got a few here. Charles Proxy. That's when I actually probably use almost everyone. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that is one that we've definitely paid for, for our entire team. It's

</p>
<p><strong>Brian Holt</strong><br />
great for just bugging web traffic. You can see traffic going in traffic going out, you can reroute traffic, there'll be so I can go to like netflix.com and route that to my local box to debug different things like that. So Charles Proxy is definitely worth paying for.

</p>
<p><strong>Ryan Burgess</strong><br />
I use it a lot, even just debugging in app. Oh, yeah, definitely is actually being able to see what's happening in an application.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, just like proxy or, you know, iPhone to computer and you can run it straight through Charles,

</p>
<p><strong>Ryan Burgess</strong><br />
you can even point your dev environment at it. I love that. Yeah. And you can like fake SSL

</p>
<p><strong>Brian Holt</strong><br />
as well, which is really nice. Oh, I have another one that goes up on my toolbar as well called Screenie. And it's really easy to grab screenshots, like you just hit Shift Command for Yep. And then you can just grab it. And then you can just drag and drop that to wherever you want to place

</p>
<p><strong>Mars Jullian</strong><br />
it. I have something really similar. It's called sketch and you can take a screenshot and then you can mark it up right there. And then it will save it with the markup in terms of like arrows and squares are very

</p>
<p><strong>Ryan Burgess</strong><br />
familiar with sketch working at Evernote. That's who created it. Yeah, Evernote, actually, they work so well together. I don't even know if sketch exists anymore. Like I know it still does. But they've integrated it into Evernote.

</p>
<p><strong>Mars Jullian</strong><br />
That's like pretty much the only thing Skitch backs up to is Evernote. Yeah. Why

</p>
<p><strong>Ryan Burgess</strong><br />
should companies Force teams to use the same environments? We've just talked about all different dev environments that we have different tools, should you be able to leverage what you want or what the team is using?

</p>
<p><strong>Brian Holt</strong><br />
I think the the least amount that you can get in the way of a developer working in the way they want to is 99 times out of 100 a good thing. Furthermore, if your entire team is always developing in Chrome, you're gonna miss lots of Firefox bugs.

</p>
<p><strong>Ryan Burgess</strong><br />
So it should everyone use Safari, Firefox, Chrome,

</p>
<p><strong>Brian Holt</strong><br />
I mean, if everyone use IE six, that the Internet would probably just work.

</p>
<p><strong>Jem Young</strong><br />
So on one hand, I'm totally with you, we should let the developer do what they want. Like always, whatever is the least amount of friction. On the other hand, there is a benefit to doing everybody using same IDE where your company can build specific plugins just for your workflow, which I've seen and has been extremely effective at some companies where it's like, everybody's using Leps. But we have a custom build, and it like works and does all the stuff for you to lose magic, which is pretty powerful, too. So I'm on the fence, but then you have these checklists. Have you ever written Java

</p>
<p><strong>Ryan Burgess</strong><br />
I have and yes, I used Eclipse at that time. But I don't like writing Java fair. For me. I think whatever your team or engineers are most productive, that is important. Cheers. Cheers. What about plugins? What plugins do you use to develop in your environment? So for

</p>
<p><strong>Jem Young</strong><br />
Sublime, I have my list here. Babble Babble Babble plugin, bracket highlighter, I'm gonna go over the important ones, dock locker, dock locker is my favorite, what's dock locker. So dock locker, if you're on top of function JavaScript, and you type slash star, enter, it'll automatically fill in the dock for you. I mean, you start to fill in like types and things like that. Sometimes it does type inference for you. But essentially just makes it really, really easy to write comments on your Java scripts. And everybody should do it. And I can always tell who has Docker installed by just the amount of comments and how well they're written versus someone who doesn't, I

</p>
<p><strong>Brian Holt</strong><br />
obviously don't have it. Either do I admit, I like me a lot for Sublime. It's actually built into code. And I think it's built into Adam as well. And Emmet is that someone where it formats nicely. Basically, it's like HTML that just kind of auto expands for you. So I talked, I type like section.my class name, tab, and it expands out to a section tag with the class name, but it's it's actually pretty powerful. It's got a pretty robust way of expanding so there's a lot of stuff you can do with Emmet, but it's just really fast, right? HTML with Git gutter is indispensable for me.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good one.

</p>
<p><strong>Brian Holt</strong><br />
That's probably I would say, the most important one I have. It's just I can see which lines have changed since I last committed. And that's hugely, hugely helpful.

</p>
<p><strong>Jem Young</strong><br />
I'll say the most important one I have, and I think everybody's gonna agree on this one is sublime linter, or some sort of linter for your IDE, without a linter installed for Yes, lint. It's just like, coding with one eye. It's so much easier.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, it catches the errors before you run your build. I mean, you should have a linter in your build. That's really important. But it will catch it so that you're not having to run the build and then have the error. It's like you see it right in your screen that you're coding in.

</p>
<p><strong>Brian Holt</strong><br />
I don't use it. You don't use a linter? No, I don't use specifically the one that does it inside of your IDE, I just run it from the command line.

</p>
<p><strong>Mars Jullian</strong><br />
I'm kind of with Brian on that only because some of the files I work in are touched by so many people that the linting errors aren't even caused by me. And so it's, it can be a little bit of a headache, sometimes, but our code base is excellent. Well, our code base is getting better and better because we keep having to fix other other people's linting errors. But everyone's got a slightly different styles.

</p>
<p><strong>Ryan Burgess</strong><br />
So I guess that would be one where if you use the same environment or same ID, you could have that all together so that it would prevent those types of things from happening. I guess that would be one plus two all being on the same environment.

</p>
<p><strong>Brian Holt</strong><br />
So So in defense of why don't use pilot I had an I actually even have it installed, I just have it disabled. And the reason is, when I actually have like an idea rolling in my head, if I have like errors pop up, it kind of derails my train of thought. And so I'd rather catch those lint errors later after I've finished my thought.

</p>
<p><strong>Jem Young</strong><br />
So I'll tell you the trick to that is to only lint on save, which is what I do. So the linter only runs after I save the file, which means like I'm done, I'm in a ready state to check it runs through but yeah, with the on the fly, because silly

</p>
<p><strong>Ryan Burgess</strong><br />
one I really enjoy. And I'll get into the VIM stuff is Vim nerd tree, which just has a nice way of getting to a list of all your files. I really enjoy that one, I find myself going back and forth, just being able to see my project and be able to quickly jump around files.

</p>
<p><strong>Brian Holt</strong><br />
Have you tried Inbox by chance? Or do you know of inboxes? I

</p>
<p><strong>Ryan Burgess</strong><br />
think I do actually,

</p>
<p><strong>Brian Holt</strong><br />
I think it's just a configuration file, right? Like, there's just those configuration files that get popular, but it's from one of the React core developers, and I've heard it's just makes it in 10 billion times easier to use.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm definitely gonna have to check that out.

</p>
<p><strong>Jem Young</strong><br />
Okay. So, I mean, there's only a few of us here. So let's get into something really controversial. tabs or spaces, spaces, spaces, spaces,

</p>
<p><strong>Brian Holt</strong><br />
two spaces. four spaces.

</p>
<p><strong>Jem Young</strong><br />
No,

</p>
<p><strong>Brian Holt</strong><br />
two, two, I'm

</p>
<p><strong>Ryan Burgess</strong><br />
definitely too

</p>
<p><strong>Brian Holt</strong><br />
dependent on the language.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I will agree. I will agree with Brian on that. It depends on the language JavaScript,

</p>
<p><strong>Brian Holt</strong><br />
to me says front end Dev is to pretty much top to bottom. I

</p>
<p><strong>Ryan Burgess</strong><br />
agree. What about Sass less CSS for some reason I'm for I don't know why I don't

</p>
<p><strong>Brian Holt</strong><br />
give a shit.

</p>
<p><strong>Jem Young</strong><br />
I know Mark says an opinion

</p>
<p><strong>Mars Jullian</strong><br />
about less than sass. Yeah. Oh, I like my lessons. For spaces.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you very much. Yes, Mars on the same panel for that. That's cool. I

</p>
<p><strong>Mars Jullian</strong><br />
do four spaces across the board. That way my eyes don't have to readjust to the different levels of indentation Fair

</p>
<p><strong>Ryan Burgess</strong><br />
enough. I could see that JavaScript I've found like sometimes it just trails on so much longer. So I can kind of keep it tighter.

</p>
<p><strong>Mars Jullian</strong><br />
I would devil's advocate over here. I use that to keep myself in check how long my my nesting goes and becomes a helper function when it becomes longer than like 80 lines and 8080 characters in a line just because it's nested so far in so so we've

</p>
<p><strong>Ryan Burgess</strong><br />
talked about our IDs. What about themes, like we've talked about plugins, everything like that. What about themes, dark or light?

</p>
<p><strong>Jem Young</strong><br />
I use a dark theme. I use light theme when I first started developing. And then one of my mentors at the time senior engineer. He's like, actually, the dark themes a little easier on your eyes over a long period of time. So I switched for a week and I found those true and dark theme always works for me. So I use dark theme in most of my setup. Even in Chrome, you can switch the themes. And whoa, I actually didn't know you could do that. Oh, yeah. And in Firefox, so Oh, wow.

</p>
<p><strong>Ryan Burgess</strong><br />
That's pretty cool. I started out same as you jam, I started light theme TextMate. When I use that for years and years, that was always a light theme. And actually the reason I switched was because I felt a kind of the peer pressure that Brian mentioned earlier, is it was like all the cool kids were using dark theme and they were all young and hip. And I'm like alright, I'll try this. And I tried and I hated it for a little bit so I had switched back to light and then I don't know what made me switch non permanently unlike a dark theme. And I don't think I could go back to a light theme now.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, when I when I speak, it always has to be a lights theme. Because projectors have a hard time showing those some of those dark themes, especially like I use Monaco Phoenix, which is from the Babel package for my scheme, my color scheme. And the like HTML tags are like a reddish color, which just didn't totally wash out on a projector. So I have to switch to like a light theme. But I used the Dale Reese, Tony Stark theme forever because it looked like Iron Man and it made me feel cool.

</p>
<p><strong>Ryan Burgess</strong><br />
So you're coding like Iron Man? Yeah,

</p>
<p><strong>Mars Jullian</strong><br />
exactly. Yeah, I like the dark theme too. And for a while I tried to do sort of like a matrix theme where everything is black and green. That became really hard on the eyes and starting to do more JavaScript, you've got HTML and code and everything apart from from each other. So I would say dark but it's got to have some variation.

You know, it's what the Cool Kids and all the movies we're doing, it just does not work out day to day. And also no one types that fast coding in movies is totally misrepresented. But that's a topic for another day.

</p>
<p><strong>Jem Young</strong><br />
I mean, you know, it's funny, I didn't think color schemes and fonts really matter until you change it. And then I'm like, Oh, what is this? I can't code in this. And like, even switching my font just throws me off completely. I need my font and my color scheme. Do you remember which font years I think it's the one built into the Babel plugin? Since it works with iOS six syntax highlighting, highlighting, I forget which font it is, but I enjoy it. If I switch it to something else, there's

</p>
<p><strong>Brian Holt</strong><br />
a font, or is it a color scheme that's built into there's a fonts, I didn't know there was a font built in? That's interesting.

</p>
<p><strong>Jem Young</strong><br />
Maybe I'm using a font from a different thing. But I definitely picked out this font specifically for coding.

</p>
<p><strong>Brian Holt</strong><br />
Okay, I use the office code Pro, which is I've heard that one a few times, which is derived from the source code Pro from Adobe, which is an open source monospaced font, it's really easy to read. I like it a lot. I can't switch away from it. Now.

</p>
<p><strong>Ryan Burgess</strong><br />
What about primary browser? What is your first choice, and it better not be Safari,

</p>
<p><strong>Jem Young</strong><br />
Internet Explorer eight. But old school,

</p>
<p><strong>Brian Holt</strong><br />
I use Firefox Nightly, partially because I'm worried that Google is taking over the world. And the less telemetry that I send to them, the better partially because the like the new Firefox thing with electrolysis and some of these other projects coming through is a really fast browser. It's got nice dev tools, like the Firefox dev tool team is doing an awesome job like I'm a, I'm a big fan.

</p>
<p><strong>Ryan Burgess</strong><br />
It's changed significantly, I use Chrome as my primary browser. And I love the Chrome Dev Tools. Firefox is lagging behind. But they have drastically improved over the past like year even

</p>
<p><strong>Brian Holt</strong><br />
definitely one and you need to switch from because the current Firefox is still on the single threaded old version. Using the old version, the dev tools you need to use nightly, which is a stable browser never crashes on me. You do have to update every day. But it's called nightly for a reason. I like I love it.

</p>
<p><strong>Jem Young</strong><br />
I use Chrome. And I have Firefox Developer Edition installed as well, which is proved very useful. Chrome, I just like big respect to those guys. The more I learn about Chrome, the more I discover, you know, you can do like about preferences and see what your ServiceWorker is doing at a low level, you can see like all the sockets that are connected. And you can see, I was testing pre rendering the other day, and it shows you if a page is pre rendering or not pre rendering and why it's just there's so much detail buried into Chrome as a developer environment. That is just phenomenal. It's it's pretty hard for me to switch. I've tried to edge briefly. It's okay. It's not, they're pretty lacking. And you can tell that all the years that have lenses making chrome like good for developers that just aren't there yet in other browsers, but they're getting there. They're getting there. Definitely. But never use Safari. Like ever if I can help it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's like your least favorite. I've heard Jem say in his talks quite a few times lately. Of like, Safari is the new IP and I will agree with him wholeheartedly.

</p>
<p><strong>Brian Holt</strong><br />
I mean, like the the latest Safari nightly, I forgot what they call it. Obviously, I don't use it. But supposedly they're 100% Yes, six compliant, which they would be the first to be. I mean, that's pretty cool. When will that ship fully? Before the other browsers? Right? Hopefully,

</p>
<p><strong>Ryan Burgess</strong><br />
we'll see.

</p>
<p><strong>Jem Young</strong><br />
They were the first hit 200%. So that includes modules and tail call recursion. Oh, shit, which is Yeah, big props to them, but they still don't support service workers. And that's like, my biggest gripe, and I know why they don't do it. And that's a whole Ryan, I've talked about this privately, but it really irks me why they make certain decisions.

</p>
<p><strong>Ryan Burgess</strong><br />
Service workers are fucking cool.

</p>
<p><strong>Jem Young</strong><br />
There's so it's, yeah, it's the future of the web. That's all I'm gonna say. I won't go into it today. But

</p>
<p><strong>Mars Jullian</strong><br />
I use Chrome too. But I'm not quite as knowledgeable as everyone else here about what's going on with the teams and all of the other tools. But one of the things I find hard is to actually switch. I just get so used to where my dev tools are. And you know, when I'm working it's it just seems like such a high barrier to entry to switch over to a new browser trying to find everything it

</p>
<p><strong>Brian Holt</strong><br />
feels switch to Firefox, I will show you, I will show you the light like an hour or

</p>
<p><strong>Mars Jullian</strong><br />
even longer.

</p>
<p><strong>Ryan Burgess</strong><br />
She might be unproductive.

</p>
<p><strong>Mars Jullian</strong><br />
That's kind of what I was getting at. Yeah, that I wish I knew a little bit more about all of the browsers in terms of their developer environments. And yeah, I know, how they work in terms of developing for them and the different, you know, like CSS, types of things that they support and everything, but it just it would take so much time for me to switch there's something at least for me, there's something to be said for just knowing where things are. get stuff done, but it makes

</p>
<p><strong>Ryan Burgess</strong><br />
a huge difference. I used to use Firefox all the time, like before Chrome, and it was like Firebug, which was the shit at the time. Like it was so good, definitely. But now yeah, it's been a while since I've really used Firefox as a default browser.

</p>
<p><strong>Jem Young</strong><br />
I use Firefox on home as my personal browser. So use both and I have one gripe about Firefox and Mozilla If you're listening to this, okay, so in Chrome, if I want to Prince,

</p>
<p><strong>Ryan Burgess</strong><br />
what do you what would you do? If you want to print? Yeah, man to PNP. Exactly.

</p>
<p><strong>Jem Young</strong><br />
But in Firefox, Command Shift P,

</p>
<p><strong>Brian Holt</strong><br />
what does that do private browser window? Yes, yes.

</p>
<p><strong>Jem Young</strong><br />
Well, no other browser does. It's Command Shift and will open an incognito window, right. But Firefox, the only one and every time I go home or whatever, I'm testing something. It's just like, why?

</p>
<p><strong>Brian Holt</strong><br />
No, that's fair. It took me a while to relearn that, yeah, that shortcut.

</p>
<p><strong>Jem Young</strong><br />
But ultimately, I use Firefox at home because they're their memory system. So as we all know, and love Chrome for every single tab, it uses its own independent process, which is great, because if a tab crashes, that means the entire browser doesn't crash. But also means the more tabs you have open, the more memory eats up. And if you don't believe me open up Chrome right now. And you'll see like all the processes running and it's just it eats up memory, like there's no tomorrow.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, and I'm huge for having too many tabs open and chrome slows my machine down so much. It's painful.

</p>
<p><strong>Jem Young</strong><br />
Yes. But if the benefit is yeah, if one browser doesn't crash, or one tab doesn't crash, the whole thing doesn't crash. But Firefox, the opposite all runs in the same process. So it uses way less memory. But if one crashes the entire browser crashes. So it's a trade off. But at home, I prefer keeping my RAM where it is. So I use Firefox

</p>
<p><strong>Ryan Burgess</strong><br />
well and get this. I will say that my one beef with Chrome lately is which is really, really funny, is Hangouts. Hangouts has problems on Chrome. And that doesn't make sense to me at all. So I will be calling into a meeting. And I find Oh, well my audio doesn't work seems to be in it's in Chrome. And I switch to Firefox log in there. No problem at all. So I'm not really sure what's happening there. But I find that I will start to do hangouts if I need to call into a meeting I will start doing that on Firefox.

</p>
<p><strong>Jem Young</strong><br />
Same thing happened to me last week. I had to use Firefox or hang out it doesn't make sense. It does not

</p>
<p><strong>Ryan Burgess</strong><br />
make any sense at all. But for some reason that has been my pain point in the past like month or two that I've just learned that's hilarious. What tools do not like that you're sometimes forced to use Brian hope

</p>
<p><strong>Brian Holt</strong><br />
you can use me all you want.

</p>
<p><strong>Jem Young</strong><br />
He does sit next to me at work. True story

</p>
<p><strong>Ryan Burgess</strong><br />
for me. JIRA. Oh, like JIRA?

</p>
<p><strong>Brian Holt</strong><br />
Trello?

</p>
<p><strong>Ryan Burgess</strong><br />
Sounds like a fight between Brian and Mark. No.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, I don't like dairy either.

</p>
<p><strong>Jem Young</strong><br />
I hate your with a passion. It's just I understand technically, it's probably cool. There's probably a lot of engineering that went into it. But I'm a pretty smart person. And I feel so dumb using it sometimes, like how do I do this thing. It's not intuitive. It's not intuitive at all. I wish they'd have like an enterprise vote and I simple simple mode, where it's just like, these are the basic things you need to use. But I daily get angry at JIRA for just making something that should be trivial, very, very complicated.

</p>
<p><strong>Ryan Burgess</strong><br />
I will say the one time I like JIRA is when I get the email that something's fixed and done.

</p>
<p><strong>Mars Jullian</strong><br />
Close, get that in Trello. to just say,

</p>
<p><strong>Brian Holt</strong><br />
I just hate doing work about doing work, like metalwork is just the worst work that I just don't want to do. So anything that minimizes my time interacting with it is the best. That's why you slack.

</p>
<p><strong>Ryan Burgess</strong><br />
But I will say I do really like Slack, and I don't want to hate on it. But there's times when I feel overwhelmed with slack because I have so many channels, and I will just be like holy shit. I am like behind on so many things. Because I've been in meetings for a couple hours, and I look and I'm like, oh my god, I'm so far behind. And it is overwhelming to me. I don't know, I get really stressed out when I have a lot of notifications, unread emails, it bothers me. And so a bunch of Slack channels.

</p>
<p><strong>Brian Holt</strong><br />
Just ignore it. That's exactly what I do. I think

</p>
<p><strong>Ryan Burgess</strong><br />
you can there's certain ones that I go to first, like they're my higher priority ones. But then like the front end, happier, one front end happier. Everyone's always important.

</p>
<p><strong>Jem Young</strong><br />
So I'm with you. I think slack is a great tool. But I think it's overhyped. In my opinion, people are like, Oh, it's gonna replace email and all these things. I'm like, It's a fancy chat client. It has a lot of great features. And the great team are really I really respect the company for what they do as far as culture and just hiring things like that. But it's just another chat tool, like I think could be supplanted by anything else. I'd be fine with it. Like I use HipChat before and I use Slack. And to me, they're interchangeable.

</p>
<p><strong>Ryan Burgess</strong><br />
There's like differences and things that make one better than the other, but none of them have killed email. I like that. You said that. I've seen a lot of tools out there that their mission is to kill email. It has no one's been successful. It might cut down on a bit, but it's not done. We're still using email.

</p>
<p><strong>Brian Holt</strong><br />
So there's a tool ideas. The only thing I think that could really supplant email. And it's the idea, which is kind of funny is behind Yammer. Has anyone ever used Yammer before?

</p>
<p><strong>Ryan Burgess</strong><br />
Right I did at an agency I worked at it was their chat room.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. And now like Yammer has kind of been fallen by the wayside. They got bought by Microsoft smiley, why Microsoft has kind of de emphasized it. But now Facebook has come out with Facebook for work. And I forget, I think they have a new name for it but whatever rebrand does Microsoft

</p>
<p><strong>Mars Jullian</strong><br />
Teams now

</p>
<p><strong>Brian Holt</strong><br />
maybe that's that's slack, right that can that competes with Slack. Yes. So basically like I have a project, I go create like a new group. And then we just go have like a threaded discussion, just like a Facebook, post stress, like a status update, where you can like chat with each other about things, which is great. It gets email out of the silo so that if you know I joined a project, I can go see the entire history of everything that's gone on. If I'm curious about your project, I can go jump in yours and go read what's going on. The thing that I hate about email is it's siloed. Right? Like I send it to you. And Ryan joins the project. He just doesn't know what's going on, because he cannot see that email.

</p>
<p><strong>Jem Young</strong><br />
That's fair. And my counter argument to that is that well, actually, it's not account arguments for my issue with Slack is that it could replace email, but the search is just terrible. It is.

</p>
<p><strong>Ryan Burgess</strong><br />
I actually found the search a lot better than HipChat though.

</p>
<p><strong>Jem Young</strong><br />
Well, the search

</p>
<p><strong>Brian Holt</strong><br />
bar let's

</p>
<p><strong>Mars Jullian</strong><br />
Fair enough. What don't you like about the search?

</p>
<p><strong>Jem Young</strong><br />
It's not intuitive. It's searching in Gmail. It is slow. It's not terribly accurate. Versus if I search my inbox, I can find things very quickly, because I know exactly how the syntax works. And it's not an unfamiliar syntax. But slack is they have their own idea about searching, which I disagree with, especially, let's say right now, I want to find something in in our room that you said three months ago, the search to do that is not very intuitive. Just because I'm in the room when I do a search doesn't mean it searches in that room. It searches like every room I'm in.

</p>
<p><strong>Mars Jullian</strong><br />
Oh, I see. Yeah, I guess I found slack search pretty powerful. But it does kind of rely on knowing how to search in Slack. Like you can search in certain channels for has files or has links or that kind of thing. But you have to know I guess those keywords and you have to learn that yeah,

</p>
<p><strong>Brian Holt</strong><br />
you're pretty unproductive. Cheers. Do you have any hardware things that you would recommend to be productive? And I'll start off there like I love having one big monitor as opposed to having to Okay, hashtag privilege. But I have one, how big is that monitor? It's got to be like 34 inches, and it is yeah, I used to have two Apple Cinema displays. Instead, I got this one LG 34 inch monitor. It's the same price as one Cinema Display, but it is and it's curved. It's I don't give a shit. It doesn't bother me at all. But the fact that I can positive it whatever it's it's a gimmick. You work at Netflix, you should know that. But I found that's been really really helpful for my productivity. I can keep everything I want together. I don't have to manage like multiple desktops. I think it's it's been really, really awesome. For me,

</p>
<p><strong>Ryan Burgess</strong><br />
even though I'm not like super sold on it. The Apple Watch is very helpful for me going between meetings, they did remove the Time Machine function. You can turn

</p>
<p><strong>Mars Jullian</strong><br />
that back on, actually.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you, Maurice. I need that

</p>
<p><strong>Mars Jullian</strong><br />
time travel time travel. That's it.

</p>
<p><strong>Brian Holt</strong><br />
Okay. Why did they take it off?

</p>
<p><strong>Mars Jullian</strong><br />
Now it's off by default, as opposed to being on by default.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, well, I need to turn that back on, because I love it. Because I can spin through my meetings, and it's super helpful.

</p>
<p><strong>Brian Holt</strong><br />
That was an awesome feature

</p>
<p><strong>Ryan Burgess</strong><br />
it was,

</p>
<p><strong>Brian Holt</strong><br />
I don't want to add any more because it's a piece of shit.

</p>
<p><strong>Mars Jullian</strong><br />
The series is a little bit better. I actually have to say that my phone is probably one of the best things in my life. I am a huge multitasker. Probably to a fault is in a walk and almost get hit by cars crossing streets and nothing. That's a fault. Yeah. But I it's kind of tough because I feel like I can be reached anywhere. But also I can be reached anywhere at any time and good to be aware of things going on. But it's hard to always be expected to respond immediately. But it is very useful for doing things on the go. For me, at least in terms of hardware. I'm not

</p>
<p><strong>Jem Young</strong><br />
a school and I don't have an Apple Watch, nor do I want any sort of Android watch. I don't like watches I have a phone, but a different argument. My only hardware is I have three monitors. So one for my laptop and into two iMac displays or Mac displays whatever. I love having multiple monitors. I can't work with one monitor anymore. Not for front end for back end stuff. Yeah, it's pretty easy. But front end now I need multiple monitors. And that's pretty much my only requirement for oh, and having good chair. Thank you Netflix. I do have a custom chair at Netflix that is built especially for tall people. So that's awesome. It's so simple. Like we're talking about all this other stuff, but we forget about desk and keyboard and like things that we sit in for hours on end are super important. It's as tall Jem, I'm a little tall, just a little bit taller than most people.

</p>
<p><strong>Mars Jullian</strong><br />
I actually kind of tagging on to that thing I've fallen in love with over the past couple years. It's just like a movable desk, a desk that goes up and down definitely basically because depending on your setup at work, however you'd like to have that either you can have it go up and down as you need it or like me, you could just keep it up tall and it's much much easier to switch between standing and sitting and I don't know I think that that's really important for social Sandy and everything. And one of the things I wish we could get and I've been dreaming about for a long time is the treadmill desk. I don't think there's enough space for it. But something I dream of one day is being able to have a treadmill desk at home and at work and Alright, so that would be great.

</p>
<p><strong>Ryan Burgess</strong><br />
I will say the treadmill desk is amazing. Had it at Evernote they had, I think they had like six or eight of them all lined up though, like this one area. You have to like walk you can't run and code that's that's just not gonna work. But the Fitbit challenges were great. I would crush my Fitbit steps because of that damn treadmill desk. It was great. All right, as we wrap up today's episode, let's share today's picks. What does everyone have? Brian, you want to start with your picks?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, so my my first pick is gonna be jest, which is the testing framework from Facebook. I used it when I was at Reddit guess right after they launched it. And it was just a disaster. It was horrible. Like the auto mocking stuff got so far so much in the way. It was just like Jasmine testing, an old version of jazz, Jasmine, but way shittier. So we actually ended up migrating off of it a night like I typically don't advocate for migrating off things. I think you waste a bunch of time when you migrate. But it was so painful we did. I'm now currently refactoring my front end masters to use jest instead of mocha. And I probably am writing maybe a third the amount of text I was writing before just because just got it. So right this time. So I'm going to be a huge proponent. And say, that just is pretty awesome. My second pick is a music pick. As always, I'm a huge fan of the new naked and famous album. Really, really great. I think it's called the runner's Is that correct? Simple forms. The lead single is called the runner. But anyway, it's really great. So check it out. Great. Jem,

</p>
<p><strong>Ryan Burgess</strong><br />
what do you have?

</p>
<p><strong>Jem Young</strong><br />
My first pick, I read the other night, and I'm still reading because it's a little long, but it's called H 264. Is Magic. And it just explains. So actually 64 is encoding for that's been around for many years now. But it's just phenomenal. How much it is almost magic, like how much it compresses data so that we can stream movies, things like that. But this the author, they describe it in such common terms that even I can understand it video coatings like very, very complex things. But the way it's explained is just like very Star Trek II, you know, it's like, and then something explodes. You're like, Oh, now I get it, cuz I understand. So it's a great read. My second pick is actually a Twitter account called we rate dogs. And oh, great. All they do is rate dogs and every dog is always an 11 to 10 or 12. New pupper Yes, I love rerate dogs, and I love dogs. So it's a great Twitter account. If you want something to feel good about.

</p>
<p><strong>Ryan Burgess</strong><br />
I need to check that one out. That sounds awesome. One of my favorite follows for sure. Pars, what do you have for us?

</p>
<p><strong>Mars Jullian</strong><br />
I'm gonna go with a couple things. The first one is a dev tool. That's probably an oldie but a goodie. And I've only started recently using it and it's react Chrome dev tools that will plug into your React application also works in Firefox also works in Firefox, it didn't realize how awesome it was until recently. And you can actually see the components that it's rendering and the props and that it's getting and everything and a lot of times to get that information need to you know, add a deed like a breakpoint and see what's going on with all the variables at that particular point. It's just, that's just very, very heavy to me. For music. I've been recently obsessed with a song called Jolene, which is originally by Dolly Parton. But she's been doing a lot of collaborations with different artists over the years for this one song, it's pretty short. And she recently did a collaboration with the Pentatonix which is a five person acapella group and they're amazing. Check them out. And then to listen to my music. I just got these Bose QuietComfort 23rd Noise Cancelling earbuds not over here. But earbuds and if you wear glasses like me, the over ears will actually hurt your ears. Definitely. Yeah, and these are these are really great, which I found through my mother and on the site called the wire cutter that gives you lots of ratings and reviews. So I'm excited to try these out on our shuttle rides and not have to hear anything.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. My first pick is an open source project created by one of our friends Harry Wolf. Harry Yeah, he created a static site generator called rep tar, formerly known as yarn and unfortunately on dandy, yeah, Facebook kind of created something called yarn, which you know, it's a great name. So you know, but now he's renamed it rep. Tar. And yeah, it's very great and very flexible for running static sites. If you're looking for a way to build static sites, I highly recommend checking it out. My second pick is a new Hulu original. Get out. Yeah. So the show is called chance it stars Hugh Laurie as he plays a Nero psychologist. Oh, I've heard of this. Yeah. And he trying to help a patient that has like split personality. super interesting. So far it's been good. The only beef I have with Hulu and their originals. They only one episode per week. I need to binge watch. Come on Hulu. So there's I think I believe they're on their like fourth episode. So far, it's been really good. My favorite part of the entire show. It's filmed in San Francisco, which is awesome. So I was very, very cool. Yeah, I really like that part of it. And so I highly recommend checking it out so far for episodes. It's been good. All right, before we end the episode, where can people get in touch with you, Brian?

</p>
<p><strong>Brian Holt</strong><br />
On the internet,

</p>
<p><strong>Ryan Burgess</strong><br />
just search Brian hold

</p>
<p><strong>Brian Holt</strong><br />
at hold Beatty.

</p>
<p><strong>Jem Young</strong><br />
I am on Twitter, and my name Jem Young.

</p>
<p><strong>Mars Jullian</strong><br />
I am also on Twitter. I don't tweet as much as all of these guys here, but it's March Josephine and I do respond even if I don't tweet every day.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, and I'm gonna start tweeting her until she responds. And I'm Burgess de Ryan on Twitter. Thank you all for listening today's episode, make sure to rate us on iTunes and Google Play and subscribe to the front end happier podcasts on whatever podcast catcher you choose. Follow us on Twitter on frontend hh and tell us about your favorite tools and Dev environments. We'd love to hear from you. Productive cheers

</p>
`;
        return transcript;
    };