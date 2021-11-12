module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End happier. This is episode 43 And we are joined by Preethi. casita ready to talk to us about starting out as a beginner in the programming industry, Preethi gave an excellent keynote talk at React Rally in Salt Lake City, about what it's like to be a beginner. And we thought it was really inspiring, and a great talk that we wanted to discuss it on an episode. Thank you so much for joining us. Preethi. Can you give us a brief introduction of who you are, what you do, and what your favorite half your beverages,

</p>
<p><strong>Preethi Kasireddy</strong><br />
so I'm pretty test ready. I'm currently a blockchain engineer, actually, my background is I was actually a venture capitalist a couple years ago, about to Andreessen Horowitz. And so my job was to meet with entrepreneurs every single day and decide whether on Andreessen Horowitz would invest in them. And I met with a lot of amazing entrepreneurs and eventually want to be in their shoes. But the one missing skill set I felt like I didn't have was knowing how to build my own products. And if I was going to build my own company, I want to build it myself. And that's when I started to teach myself how to code and then eventually fell in love with code and became a software engineer. So then I worked at Coinbase after that, and a few other contracting stuff, and now I'm doing 100% blockchain engineering.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I love that story to just like, gotta build it myself. And I'll jump right in.

</p>
<p><strong>Preethi Kasireddy</strong><br />
And my favorite beverage is this Japanese whiskey called Yamazaki

</p>
<p><strong>Ryan Burgess</strong><br />
to delicious whiskey that's very hard to find. Let's also go around the table and give brief introductions to today's episodes. Panelists. Derek, you want to start off?

</p>
<p><strong>Derrick Showers</strong><br />
Sure. My name is Derek showers. I am a senior software engineer at LinkedIn.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a front end engineer at Atlassian.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. Before we get started, I'd love to kind of hear what inspired you to give the talk at React Rally?

</p>
<p><strong>Preethi Kasireddy</strong><br />
It's a good question. So I made the transition from I was an engineering college. But I made the transition from being a non software engineer to a software engineer. And I did it pretty relatively quickly. Like within a year, I was able to get a full time job as a software engineer. So because I wrote about it, a lot of people have reached out to me saying like, how do I do the same thing? How do I follow that same path. And it was just kind of becoming this thing where they wanted a lot of advice, but it was hard to scale that and I felt like I really want to help them. But I couldn't help them individually. And then I started this series called Ask pretty series. And it just like really took off. And I realized how much value there is in helping beginners. And I realized that as programmers, sometimes we grow ourselves and we become advanced, but we don't realize what we were when we were a beginner and we forget that there's a lot of beginners struggling. And so I kind of wanted to give this talk to motivate other people who might be interested in helping beginners also help beginners?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it definitely made me realize like, wow, there's a lot of things I could do to help encourage others. And I think, yeah, it was just a really motivating talk. So thank you for sharing it. And each episode of the front end, Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is beginner? Beginner, if at any point in the episode, we'll say the word beginner, we'll all take a drink. All right, well, let's get started. What was the first exposure to code that you've all experienced?

</p>
<p><strong>Stacy London</strong><br />
I can tell my nerdy story. I was like 15. And my parents got their first computer, or like the First Family Computer. And this is very long time ago. So I was my mom at work said she had gotten a computer and his coworker was like, Hey, cool at this game called civilization, your kids probably like it gave her these floppy disks because this is a very long time ago, and brought these floppy disks home. And I tried to play it and I couldn't play it. And it was because you had to disable the mouse. This is like all really nonsense kind of stuff. But I was so I really, really wanted to play it. So I ended up calling, like one 800 Number on the on the package to be like, how do I do? How do I play this game? And this person walked me through the like metadata, the AUTOEXEC BAT file to like, comment out something for the mouse driver, so that I could actually play it. And then I played it. And I was like, Whoa, you can change things in a computer and like it does things when you change things. So that was sort of this moment of like, cool. Maybe there's more that I could do to like, tell a computer what to do. So that was kind of like my very, very first

</p>
<p><strong>Derrick Showers</strong><br />
deal like that person on the phone was really smart. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I liked it, it was hard. It wasn't even software, you were just like, I'm gonna manipulate the hardware.

</p>
<p><strong>Derrick Showers</strong><br />
I was around the same age. And I decided I was going to start my own web design, as I called it a web design company. And so I lived in a really small town in Pennsylvania. And we went to like the friend of mine, and I went to the tire like mechanic shop and said, we do a website for them. And we were like, trying to make money. But then we realized that we'll do it for free. And then we did that to another place another place, and we did all these free websites, we have never actually made any money. So it was a really shitty business. But yeah, we, we started our own thing. And we even went to the bank and applied for like a credit card and, or like a debit card and in our name. I was maybe like 16 or 17. Awesome. But the best part is, I got a I got a letter from the IRS like a couple years later, and our our web design company was called DNS because Derek and Steve's DNS web design company. And so I got this letter from the IRS a couple years later, and it says, BNS web web design. So clearly, like the bank never relayed the right, like name to the IRS. And so if the IRS is ever looking for BNS web design, I guess.

</p>
<p><strong>Ryan Burgess</strong><br />
What do you pay when you're making nothing to to the IRS?

</p>
<p><strong>Derrick Showers</strong><br />
No, yeah, I didn't, we didn't pay anything to them. But we were able to get around credit card. And her checkbook is that people could pay to be an S web design.

</p>
<p><strong>Preethi Kasireddy</strong><br />
Mine was a little bit different. So because I didn't start web design, web programming until, like, couple years ago, my first interaction was in college, and I was an industrial and systems engineer. And we kind of took all kinds of engineering courses. And one of the requirements was to take CS 101, and Cs one or two. But I had this like weird conception of what saw computer science was, at the time, I thought it was really nerdy people sitting in their basements, like coding and like, had no social life. And so I was avoiding CS one, one and one or two as much as they can. And it was like junior year, and it couldn't avoid it any longer, because it was a requirement. And then I was like, alright, I'll take it in the community college because I just didn't want to take it as my main course, I took it, it was like C sharp, or something, or C, or C++ or C sharp. And it was like the worst class in the world. And it goes to show you that your first experience with coding really, really matters in terms of how whether you get into it or not. Because at the time for me, it was just a class. It was a forest class, and it was like, a duty and I just did it and I was I forgot about it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, especially when it's like forced on you anyway, that kind of sucks. Yeah.

</p>
<p><strong>Stacy London</strong><br />
Yeah, the first class I was like Pascal and I hated it. I was like, and I made me like, almost reconsider dropping computer stuff altogether. I was like, This is the worst I don't want to want to do

</p>
<p><strong>Preethi Kasireddy</strong><br />
exactly. And I think it's like, what people have to realize is like, there's no everyone kind of find their niche. Eventually, it's about continuing to try different things until you find something that you like

</p>
<p><strong>Ryan Burgess</strong><br />
singing about it. My first exposure was probably Angel Fire. Like, do you guys remember those? Yeah, awful. Yes. But I definitely played with both of them. And so I don't even know if I really realized what I was doing at the time when I was exposed to it. But obviously doing like HTML and some CSS, I thought about, like, some of the first sites I built and they were graffiti oriented, or cars related, because that was what I was into. So why not build an Angel Fire geo city site. So that was my first exposure in like, high school, probably at that time. Yeah, so not a big career changer at the time, but very cool to get started into it.

</p>
<p><strong>Derrick Showers</strong><br />
It's interesting to like, in the CS 101, like, I did that in college, because I always like, like, I didn't go to school for CS, but like, I had always been dabbling in it. So like the, you know, the web design thing, and then I went to college, I took the CS 101 course, but it's interesting, like, when you take these courses, you don't really have the practical application. So it's kind of like, like, I think to your point Pythias it's like you're taking these courses you don't really like understand why or like what this is actually used for so it does seem kind of pointless and then you just kind of like one of the part of the the nerdy people that hang on there and write like for loops all day is like okay, this is fine. But

</p>
<p><strong>Preethi Kasireddy</strong><br />
yeah, and I think it like I think that's why it's so I find it kind of sad that some of like your CS 101 course teacher would make a make or break in my opinion, like my teacher just like didn't care and he like, would just give us homework and it was just like just do this and learn this and was just like he never gave us a real world insight into what this was actually doing. How I can apply this and so I think I wish like colleges did a better job of actually like, really evaluating those teachers and like whether they're the right people to be doing it. Honestly,

</p>
<p><strong>Ryan Burgess</strong><br />
you need that practice. Reason for even like teaching something as simple as like a variable and you're like, oh, this will just get used again, it doesn't really make much logical sense until you're actually putting it to practice, you know, oh, yes, I totally get this, or I totally get why I would use an array, but just saying, there's this great thing in array. And you're like, okay, cool. Like, what does that actually mean? And like, how would I leverage that I went into the same things in school to where I felt like some languages, some of the backend language that were taught to me, I felt like, I didn't really grasp why I would use something like that. Whereas like, with front end, I could see it, I could see something changing. And I was manipulating something right in the DOM that was showing up on the browser. I'm like, Okay, this makes a lot of sense. But when you're just getting some coding challenge thing that you're like, I don't really see this take shape. It's tough.

</p>
<p><strong>Preethi Kasireddy</strong><br />
It's tough. It feels like a math problem. It doesn't feel like programming or building something. It's

</p>
<p><strong>Ryan Burgess</strong><br />
not as exciting. I want to create something I want to see something happen.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I mean, that's why I think most of us ended up doing something with with front end. And yeah, I wanted that visual satisfaction. Like I made a thing, I can see that thing as opposed to this abstract theoretical kind of thing.

</p>
<p><strong>Ryan Burgess</strong><br />
What about the first language that everyone learns? I heard a few people mentioned some of the languages, but what was the first like true programming language that you really dove into?

</p>
<p><strong>Derrick Showers</strong><br />
I think when I was serious about it, it was php. And that sounds weird, but

</p>
<p><strong>Ryan Burgess</strong><br />
a ton of PHP,

</p>
<p><strong>Derrick Showers</strong><br />
like when I actually wanted to build, you know, have something more than just some HTML like, yeah, site for a automotive place in Mount joy, Pennsylvania. And he has to do a little bit more in PHP could do that. So I built my own my first blog on PHP, and like, build my own CMS on PHP and read PHP for dummies. A good book. Yeah, it was one of the best,

</p>
<p><strong>Preethi Kasireddy</strong><br />
super popular back then. For me, it was tried to learn how to program after college. I started with Python. And something about it didn't really click for me. And I tried a few different times, I tried Python the hard way. I tried like various Treehouse online courses, something that I liked. But then my ex boyfriend at the time was like, why are you learning Python, Go learn JavaScript. And I was like, What's JavaScript and then I went home, go Googled it. I remember the next day, I didn't even go to work. I just like stayed home and just did JavaScript all day. And I was hooked. And I think Tao is such an amazing language for beginners. And it's, it's the visual feedback, it's the direct feedback you get. It's the lack of all these complex tools. All you need is like an IDE or like an a browser, which everyone has. And like, there's no types, which is a huge deal. I think just a lot of a lot of benefits to JavaScript. It's just so lightweight. And just like it's a scripting language in the end, you can think about it that way. So I think it's really amazing for beginners. If it wasn't for JavaScript, I don't think I don't know if I'd be programming honestly, it was like, my gateway drug.

</p>
<p><strong>Derrick Showers</strong><br />
I totally agree. I think it's funny too, because like, when you said like, my first actual professional job was working with a lot of JSPs and stuff. And so like, with, with Java JSPs, or whatever you with any sort of like, typed language you get into this, like, place where at least with JSPs, it's like, I would write something and then like, I just get a blank page, and it would take me like hours to figure out how to get the page not to be blank. And when this JavaScript is you don't have that issue. Like yeah, you can write shitty JavaScript, but like, at least you're able to, like see every single thing that you're you're doing, and you're able to, like, make improvements on that. So

</p>
<p><strong>Ryan Burgess</strong><br />
I think that that's a good point, too. Is it with JavaScript, you, you can write really poor JavaScript, it's gonna work, but you can slowly learn how to make it more performant more scalable. And you just but at least you have something you're you're not having to get over that hurdle. You can slowly get over it.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, definitely. Yeah, I

</p>
<p><strong>Stacy London</strong><br />
would say I would agree with the JavaScript that changed everything. For me. I took JavaScript class after that Pascal class. And I was like, cuz I switch programs. And the other program didn't even have JavaScript. This one did. And I was like, Yes, this is what I wanted that lightweight. Like, I can see something happen really quickly. And years later, like you said, JSPs, I did that years later, I built J EE, you know, enterprise Java struts apps. And I remember trying to get Hello, like a basic app running and it took half a day, and you needed this super complex IDE to compile everything. And it just took so much work to get that going. And there was some JavaScript and it was very lightweight, like jQuery or whatever. So anyway, I think, yeah, JavaScript really changed it. For me my very first job out of school, I did a little bit of JavaScript, but it was like photo script, which is a variant of ECMO script. So it was very similar in some ways, but also weird. So I had like, this very bizarre path of like, JavaScript, HTML and CSS was always the like, the the comment and I'm an eater. And then on top of that were these other like, application languages of like JSPs. And je or ASP dotnet? Or like, over the years various application web application languages, but that other stuff was the thread that kept me going, because I knew that stuff is the stuff that I really loved.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Do you miss writing? dotnet? No.

</p>
<p><strong>Preethi Kasireddy</strong><br />
Have you seen the new dotnet? It's not that bad. No, it is better.

</p>
<p><strong>Ryan Burgess</strong><br />
I haven't actually had to write anything in it. But I've looked at the syntax. And I'm like, Okay, it's a little bit nicer. But I wrote enough dotnet to be like, now you've scarred me for my actual first like language that I would say that I spent a lot of time in was as to like, Flash, I did a little bit of as one but as to spend a ton of time building like applications and was totally bought into the flash, like, loved it. And I wrote as three when that came out. And it was a lot better. There was so much like classes, everything was so much better about the language. But then, you know, flash for some reason died. And JavaScript made a lot more sense for me to be doing I did a little bit of JavaScript while I was doing flash, but it just, I was kind of pigeon holed into doing a lot of Flash applications. So that's what I did. Do you guys remember the first big mistake you made programming?

</p>
<p><strong>Derrick Showers</strong><br />
I remember, I think I've already mentioned this on the episode before, but let's hear it again. I was like, I my first job. I was definitely not, didn't know what the hell I was doing. And I was kind of like, fell victim of the like, I mean, it wasn't what I was doing. But I just need to like, and it was also in an agency. So it's very high pressure. And like, everyone's like, oh, we need to get things done quickly. And there's like that we're gonna lose this client if we don't like get this this in. And so I remember working on a popular pet company, not Petco. But the other one. Their website and I pushed this, this fix up to this thing I broke and like, you know, I think when you're when you're kind of new, you decide, you think you can fix things really quickly, like no one will notice. So you know, you, you push the code really quickly, like this flew under the radar, push this code that change all the prices, so that looked like the the price on the website was actually the sales price sale price, like all the prices drop, like by, by this, like, pretty significant amount. And I remember my boss walked over to me, and he's like, he sits next to me, he's like, this is this is bad. And we were at agency, so we didn't really have a really good way of reverting things quickly. And, you know, so it was like more of a fixed board thing. And, and so yeah, but I learned a lot from that. And that you, you know, sometimes just need to take your time, even if you made a mistake, everyone makes mistakes. And, you know, you just you can, like, revisit that later. But take your time to fix the mistakes. That's actually

</p>
<p><strong>Ryan Burgess</strong><br />
a good point, too, is when there is a mistake made, don't panic. It's like it's software, if we can fix it and either push out a patch or another release. And it's not the end of the world. I mean, it happens,

</p>
<p><strong>Stacy London</strong><br />
not a beginner thing. Cheers. Yeah. I'll talk about a mistake I made recently just to at least give the audience an idea that like, you make really bad mistakes your entire career, no matter what level you're at. And I, I deleted our Selenium test user, like because I had the capability to do that. And I had 17, windows up open. And I was trying to do something with that locally. And I was like, mess that user up. And I needed to like recreate it. And I thought I was in my local instance, to delete that user. And I had the access to do it in our staging environment, I deleted our selenium user that like ran all our Selenium tests. And that was like this moment of like, you feel like you might pass out your like face goes red, and you're like, Oh, I just did something horrible. And then you know, you talk to a few people. And thankfully, it wasn't actually that big of a deal. We were able to recreate it fairly easily. But that moment of like, I just screwed everything up, you know, that it happens.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it happens, obviously, you're not going to run your test necessarily in production. But you can delete stuff in production and affect customers. You just affected other engineers. So that's not the end of the world either.

</p>
<p><strong>Stacy London</strong><br />
Yeah, you just have like, basically, I just affected like the ability for those tests to run so that deploys could happen. Like we're doing like continuous deployment, things go out, you know, fairly frequently. So I kind of held up things for a little bit, but like, everyone was pretty cool about they're just like, it happens. It's no big deal.

</p>
<p><strong>Preethi Kasireddy</strong><br />
Yeah, we make I mean, I make silly mistakes all the time. Like yesterday, I was like, writing a bunch of Python scripts for deploying some smart contracts. And then the script kept running twice. And like, why is this thing running twice? And I sat there for like, half an hour. I'm like, I'm not instantiating this class twice. And I realized I was instantiating the class and importing, importing the class and, and I was like, what, like, the dumbest thing ever, like see, you don't do this mistakes all the time. And it's The difference is that when you're a beginner, it's like they stamp you for

</p>
<p><strong>Ryan Burgess</strong><br />
chairs, chairs.

</p>
<p><strong>Preethi Kasireddy</strong><br />
When you're a beginner, they stump you and you don't really you don't have you don't have as much muscle willpower to fight through that. And I think that's something that grows over time. So for me, if I had to pick like the dumbest mistake, it's not like, I wouldn't think think through some of the stuff I was running through, I just get like, sometimes frustrated, I just be like, okay, man, just error. And I'd like just be stumped. And like, instead of like looking at the stack, trace, or goo or stack overflowing that or looking at my code, or thinking there could be all the possible cases. And so like, I think that's something that you just get better and better at over time.

</p>
<p><strong>Stacy London</strong><br />
Yeah. And I think like, if you as a new person. Yes. If you like debugging something, I think pairing up with someone who has been doing it for a little bit longer is an awesome way to debug, because then you see their, the way that they attack the problem, the way that they think through how to troubleshoot it, I've been doing that a lot, or I try to was the one of the interns that we have to say like, Hey, you're working on this bug, let's troubleshoot it together. And I'll show you how I try and look at and figure it out.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's good for anyone to like, even a seasoned engineer working with another engineer have like, oh, I never thought about it that way. So I like that approach. I was trying to think of like some of my first like, very first mistakes, I made a ton of them. But I even though thinking back to it as like one of this one time, I don't know if I've mentioned it before on a podcast, but just like when I was new to get and like Git is awesome, and so great. But when you run into like a problem, it can be a big issue. And I was new to Git and I was on a newer team at the time. And so this is like not wasn't a beginner Cheers. I was new to get. And I was trying to put something in release and waited way too long to pull from Master. And so I had a ton of merge conflicts. And we were trying to push out the release. So I held up the entire release, that was embarrassing. But whatever my team helped me, we got through it, it wasn't the end of the world, other than we were stuck there a little bit later that night, then it also made me realize, I don't know if you ever remember the times before Git or before SVN. I worked at an agency where we grabbed stuff from the network and you would pull them down. And maybe like Mark it like I'm working on this file. There was times it not I just I did this, but so did other colleagues, we had overwrite our files. And so I read over a my own files, or I would overwrite someone else's files. That was a costly mistake, because you might lose a whole day's worth of work because someone overrode it. And like we were just like FTP into sites. It's crazy to think that how far we've come that wasn't even that long ago where we didn't use a version control method. And it's crazy. But yeah, that caused a lot of pain and headaches, and it was stupid mistakes. But we're all human, we make those mistakes. That's why we have Git for version control. So it made me remember that and just be like, Oh, I do not miss those days. How did each of you get over becoming new to programming? Like, I feel like we all feel maybe that imposter syndrome. I still feel it today. But how do you feel like you get over that hump?

</p>
<p><strong>Preethi Kasireddy</strong><br />
I think it's honestly just perseverance. Just pushing through each time and growing that muscle that I was talking about of being able to not get stumped each time, but instead kind of change your mindset to be like, alright, this is the problem. I just have to figure it out. Because like, I think when I just remember when I was a beginner, I would think like, oh, this is impossible. Like, I can't This is impossible. I can't solve this problem. It'd be like I can't, or like that I that mentality just completely changed. Now it's like, I know there's a solution to everything. It's just about how hard I'm willing to work to figure that out. And how long how persistent I am. It's not them pulling all nighters. But like, I'll make sure to figure it all the way through. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
at what point do you call for help to like, is there like a point where you because I've done that to where I've hit the wall where I've spent three or four hours on something? I go, wait, maybe I should ask someone for help.

</p>
<p><strong>Preethi Kasireddy</strong><br />
Yeah, it depends. Like right now I'm doing a lot of independent development, too. Sometimes there's really not much help I can ask besides open source repos, or open issues or parse through random, honestly, right now, my help is source code. But as a beginner, sometimes you don't, we're not at that level. And so for me when I was like coin base, and I was pretty beginner at that time. Cheers. I would ask for help all the time, to the point where I will be tapping on my colleagues shoulder probably four or five times a day. And like I just didn't care because I want to get as good as I can as quickly as I can and not have to bother that person. Some anymore. Luckily, I think there's a few people in each company that are willing to help those people. And you got to find that one person who's like, willing to just drop his things and just say or hurt things and help you. And I and I think every company has that just as find that person and ask I think, especially when you're new, it's okay to ask questions. But if you're there for five years, and then you're asking the same questions, it might be a little bit different. So take advantage of that. Beginner time to ask questions. Cheers, cheers.

</p>
<p><strong>Derrick Showers</strong><br />
I think it was like three beginners or so.

</p>
<p><strong>Ryan Burgess</strong><br />
But I like that point, too, is take advantage of it. It's like, I'm new to this. I need help and ask for help. Not that I won't ask for help now, but it's, it's feels a lot easier when like, I'm new. How would I know this? Yeah,

</p>
<p><strong>Preethi Kasireddy</strong><br />
exactly.

</p>
<p><strong>Derrick Showers</strong><br />
So one of the ways that, I guess overcome being a beginner is that, cheers. Cheers. It was in the question, it's not fair. Is that sometimes I just don't, and I'm like, okay with that now. So like, I mean, they're, they're, they're oftentimes I'll listen to, like, I listened to a lot of podcasts. Mainly just run at happy hour, but there's some others and

</p>
<p><strong>Ryan Burgess</strong><br />
you listen to you.

</p>
<p><strong>Derrick Showers</strong><br />
Actually, don't listen. But anyway, um, I do listen to a lot of podcasts. And like, you know, on on there, there are a lot of smart people out there. And like, oftentimes, I'll listen to people talk about things. And I'm like, wow, like, I could not have thought of that. Or that is that's like way kind of, like above what I'm doing right now. But you have to realize that, like, everyone's working on something that is in there, they're like, when I talk about something, there's specifically focused on that. So it's, it's sometimes it feels like, they're, they're, like, so much smarter than you or whatever, but it's not really that is that they've been, and I think you just have to be okay with that eventually. And you have to, you have to understand that I think it's actually a bad thing. If you feel like you're the smartest person like, you know, if you and I mean, I think I have been in a job. I know at least one job I've been in where I felt like I was like the person on the team that everyone wants to and there's like no one that I would go to, and then I actually left that job because of that reason. And I think like if you ever feel that way, that's that's a bad thing. It's not a good thing. That's that's a sign that you're not being challenged. So like you should always feel that there's someone smarter and someone that you be challenged by the fact that you may be the imposter syndrome thing. I think the imposter syndrome thing can be a good thing. If you're,

</p>
<p><strong>Ryan Burgess</strong><br />
you need to get out of your comfort zone. Yeah, like I think that's exactly what you're saying. I think it's

</p>
<p><strong>Derrick Showers</strong><br />
just it's just being okay with that, like, as a beginner, you're maybe you feel just intimidated, constantly. Cheers. You just feel like that's not okay. But like, as you progress in your career, you start to understand that that's, that's a good thing.

</p>
<p><strong>Stacy London</strong><br />
I think maybe one of the things that helped me get over the hump of like, feeling like I didn't know how to solve something was that I had a mentor. So I feel like there's there's two sides to this, like be, like, have perseverance and be be curious and be resourceful. And like, now, there's so much available to you online to find answers, but do that for sure. But then also, like, a good company is going to make sure the beginners have resources to help them include people. And so spend some time digging into it. And then like, you spend an hour on something you're not getting anywhere, like hopefully your company is made it clear to you that like as as this new person that you have this person that's a mentor, somebody that you can go to, to ask questions, or like you're saying, some every company has somebody that is nice, and you know that they're going to be helpful to you that you could go to ask that question. And then they can help lead you. So like the combination of being curious and persevering. And just like not giving up and also knowing at some point, there's somebody to help you, I think is huge. Yeah,

</p>
<p><strong>Preethi Kasireddy</strong><br />
I totally agree. And I think like on the idea of asking questions a lot. I also think it's important, like I do get a little bit. I'm trying to say, in a nice way annoyed when like, someone comes up to me, and they haven't really thought through anything. It's like it's not working. Yeah, like, that's not the kind of questions I'm I'm talking about. I'm talking about someone who like, it's not working, they tried this to assist, and they want to come to you with like, Hey, I tried this, and I don't know what else to do. I think people that are willing to help are much more willing to help you at that point, because they realize that you went through the effort of like trying all these and they'll kind of guide you. Whereas if you just go to them with like, nothing, then there's it's much harder, because then they're basically doing your job for you at that point.

</p>
<p><strong>Derrick Showers</strong><br />
You just go to Stack Overflow, and you can see that like somebody goes like one line, one line in question, you know, and it's like, everyone's kind of like negative negative, I

</p>
<p><strong>Ryan Burgess</strong><br />
think, I think really is it is like you outline all the things that you've already tried. Now you actually help them to be able to like pinpoint an issue. They're going to go through all those things that you already did, too. So if you're like I tried this, this isn't this. This is what I expected to see, but this is not what I saw. That helps really pinpoint the issue they might actually build to see something a lot quicker so that you wouldn't be as annoyed which I completely agree with And I think this is even something that in a senior engineer we do is we run into issues all the time. But it's all about how you ask for help from another colleague. It's not as broken. Well, what about it is broken? Like, what did you try? What are the things that you went through? And I think that's really real.

</p>
<p><strong>Derrick Showers</strong><br />
You also say that solve the problem yourself a lot of times, like, it's the I guess it's the rubber duck. Yeah. But you know, if you if you go back to the StackOverflow example, if you really try to go through all the things that you solve when you're asking the question, a lot of times I often I found myself, like, I rarely post on Stack Overflow, but like, often, if I do, I will answer my question as I'm like, typing out the question. And it's the same thing. If you go to somebody in your you know, who you work with, if you take the time to go through all the things you've tried, sometimes you'll even ask answering a question. If not, then you have the then you have like the full what I've tried thing.

</p>
<p><strong>Stacy London</strong><br />
And I think it is fair to for someone who may be like, let's say they just came out of like a boot camp or something. And they, they are like, I don't even know what I should try to figure out how to solve this problem. That's fair, because then you're like, Okay, I, I'm gonna work with you pair with you and show you how to solve things. And then that person picks that up over time. And they start to then not ask that same question, right? That'll be the progression like, of, of it's okay to ask that and say, I don't even know what to troubleshoot. I don't even know how to start. If

</p>
<p><strong>Ryan Burgess</strong><br />
you ask the same question over and over again,

</p>
<p><strong>Stacy London</strong><br />
a year later, if you're still like doing that, like, that's not cool. Like, you've, you've probably seen how to troubleshoot things at that. By that point.

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like I'll echo the same things like from what I learned is a lot just leaning on my colleagues and really asking questions. But I also found, like, when I started, I would go home and do a lot of programming, just like on the side building side projects, just really pushing myself to learn more. To be honest. At that time, there weren't podcasts or even YouTube videos, I don't even know if YouTube existed. I don't think it did that sad. Or even Twitter, you can just reach out to someone on Twitter and ask a question that I don't even know if Twitter might have been around at the time. But I'm just thinking back to that there wasn't really those people to go to. Stacy, you mentioned finding a mentor. I think that's a really great thing to have. But I feel like a lot of people struggle with how do you get a mentor? Like, how do you go about that? And I think that's often a question I hear. I don't have an answer. But I would love to hear everyone's thoughts on that.

</p>
<p><strong>Stacy London</strong><br />
I think that's why it's great, what you're doing pretty about, like putting stuff out there to share with many people because of that scaling issue. You can't, I want to do this to like I been in this field for a long time, and I want to help others. But I can't possibly take the time to be like a personal mentor to every single person that I've met that needs that kind of thing. So I think what you're doing is, is phenomenal.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, Priti has a great YouTube series where I think we've done three or four videos now, where it's really like, I'm a beginner, and this is what I went through. And definitely a great way to mentor a lot of people rather than just a one on one. Yeah. How's the experience been?

</p>
<p><strong>Preethi Kasireddy</strong><br />
It's been amazing. Like, I think the key with mentorship is, you're not going to be able to give everyone like, individual answers. And that's you have to realize that and the key is like, instilling the core principles in them rather than answers, because core principles take you a long way and just take you one avenue, but not the whole thing. So that's what I try to do I kind of try to generalize a question and kind of talk about how I thought through the problem. So they can kind of get a sense for the pathway to solving other problems similarly, because yeah, like, I think a lot of people when they ask for mentorship, ask for very specific questions. Like, I'll get emails about, like, such narrow questions, and like, there's no way I can answer that, and help be helpful to you in the long run. Like, they'll solve your current problem, but it won't solve everything right. So I try to be more general. And I still get follow ups like, Hey, can you give me a specific way to do this, this this? And I'm like, No, that's not the point. But on the question of finding mentors, I think it's hard to answer the question. You're right. For me, it's always been organic. Either at a company, I really clicked with someone, and they were willing to help and I like them. Or it was like, I met someone at like, some meetup. And we recorded together and I really liked them. So it's always been organic, rather than like me reaching out and be like, Hey, do you wanna be my mentor? Sometimes that has worked, but mostly, it's been organic?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I agree. I think a lot of times I've had get colleagues that I've just made it wasn't even mentioned that I treated them like a mentor, but I just kept learning from them a lot. And you know, would lean on them. I found even in my career now even sometimes on Twitter, like I might even like send someone a message like a DM message to say like, Hey, how would you handle this? And like, I'd love to hear your thoughts on it and feedback on maybe how I've done that is almost wasn't even reaching outside of the company that I'm working at. Because I think that's a powerful tool. I've been asked questions on Twitter and I will respond, like, and I, you know, I'm like, hey, if I can help, that's great. So I think it is great that there are tools available for that too, as it doesn't necessarily have to be someone at your company. And that doesn't even make you a mentor. It's like just asking someone a question. That's not like, Hey, I'm gonna meet with you weekly, or it's just like, ask someone some questions and get their feedback and thoughts on that. I've even taken phone calls. We're just like, during the day, I've taken a couple phone calls with someone who's asked like, Hey, would you take 30 minutes to just talk through some things that I'm going through? I'm like, sure, I don't have a problem. Do not. I mean, there again, it doesn't scale. I can't do that all 24 hours of my day. But yeah, even doing that was very useful. I

</p>
<p><strong>Derrick Showers</strong><br />
think that's the problem with mentor. The whole mentor thing is why nothing has worked. Like everyone's tried to do it. But the whole mentorship like app, where you find a mentor, you find a mentee, but because it doesn't scale. So like, I think the way you can make it scale is that you don't have to worry about it scaling. And that in I guess, is what you guys are saying is that it will you can have these individual conversations with somebody that you respect, or you look up to whether it's on Twitter, or whether it's at your job, or whether it's wherever and you, you just respect the way that they they work or they're just them as an engineer, or whatever, you know, you you respect and that you look up to and then you have conversations with about, about things.

</p>
<p><strong>Preethi Kasireddy</strong><br />
But also like for anyone looking for mentorship, I think it's all about how you ask makes a huge difference. Like I can know what I'm going to respond to an email within the first sentence. And it's just like it, I don't think so true. So I take I either go back, or I read the whole thing. And it's like, like one number of comments and things like don't send an email that's like two, three pages long. There's no way I'm going to finish reading that, like we all have busy lives. So like, I love when people can be empathetic or sympathetic to the other reader and be like, Okay, I need to just get to the point ask the question, not like, go through my life story, and then get to the question of the last thing, right. So I think being good at asking or like, asking questions is such a good, such a good skill set to gain I think

</p>
<p><strong>Ryan Burgess</strong><br />
that's such a good point, too, is the big ass email that I am totally, like seeing that, and it scares me. And I won't respond right away. But if it's a very quick, quick to the point, I can digest it a lot easier, the TLDR. But I honestly do find that I get anxiety, but Oh shit, I can't read that right now. I'm too busy right now. And it's hard to get back to that mass of email. So that's a good point. I like that.

</p>
<p><strong>Stacy London</strong><br />
I think there's a responsibility for companies to and also senior engineers, or senior front end devs are whatever you want to call them, to make it a part of the role and responsibility of that of that person to help new people and to be, quote The mentor, not everybody's good at it. And I think that's also why, like, there's a lot of bigger companies out there that offer training for for managers how to be a good manager, well, maybe we should offer training for senior engineers for how to be a good mentor how to be a good teacher, because not everyone is like some people are really smart. And they're really good engineers, but they can't teach and they can't like, transition that knowledge in a way that's like kind and empathetic. Maybe there's classes that you could offer at your company to teach, you know, those those skills, and therefore, everyone is better for it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, if companies do that, that's amazing.

</p>
<p><strong>Stacy London</strong><br />
I don't think there are many companies that do that i This is my little pipe dream. I think like that would be a great thing for the industry as a whole is that we start to offer that. And

</p>
<p><strong>Ryan Burgess</strong><br />
I think even there's been times like a Netflix, we've brought in people to speak on certain topics to even just uplevel our knowledge on something, whether it be you know, react or for dealing with like SVGs or something like that. There's so many people that are way smarter than us. And they've really dived deep into that subject matter. And so it's really useful to just say, Hey, can you come speak to us for a bit and share your knowledge? And then we can ask some questions. And you know, within an hour or two, you learn a ton. So I think there is like more companies need to do that. Yeah,

</p>
<p><strong>Stacy London</strong><br />
the getting over the hump thing. Like if you're picking a new framework, and everybody in your team has to like learn this new framework, then maybe bring in like a trainer or somebody to do like a one like a couple day course for everybody on the team. Like that's huge. Everybody learns that. That's I think one way to help not everybody at all levels, not just beginners.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. We kind of started talking about it, but what are some ways that others in the industry can start helping new people? Notice I didn't use the word beginner.

</p>
<p><strong>Stacy London</strong><br />
I mean, I think we've been talking about a lot I think like what you're, what you're doing and putting stuff on YouTube and sharing in large swaths, I think is is that I think that's huge. There's also Twitch, like, I think that's kind of a cool thing that I've been seeing a lot of people do is like live coding and sharing how they approach problems. Awesome. Like, I really wish something like that existed when I first started that first

</p>
<p><strong>Ryan Burgess</strong><br />
time I heard about people doing on Twitch, I thought it was nuts. I was like, no, no one's gonna watch that. But it's so useful. It's like paired programming to the masses, like so there again, with Preethi giving, having the videos that people can watch and learn from. It's like, No, this is like, literally, you can live watch someone coding. And I've learned a lot from paired programming, like I've sat with engineers, and on my team now or other teams, and you work on a problem together. And you start to learn how their IDs setup how their system everything, and you're like, Oh, that's a nice little shortcut that I can leverage, but also how they approach a problem, you learn a lot. And so watching someone code on Twitch is amazing. I just honestly, at first, my first reaction was like, Oh, that's so weird, but it's not. It's so

</p>
<p><strong>Preethi Kasireddy</strong><br />
good. I wish more people I wish there was the streamlined way to find these because it's so amazing. Like, if I was a beginner, I would just hold Cheers. I would totally take advantage of that. Like, I wish I had I wish I had that when I was starting out. Yeah. Yeah, seeing senior programmers with experience code is a huge, like, that's how I learned to just watch these YouTube videos of people giving more formal like, tutorials like, Hey, here's how to build how to build this. But if it's like live, I think it's even more valuable. Because like, you get to see the mistakes they're making. And I watched one where like, she was she made a mistake, and she debug her debug her way through it. And it was like such a valuable thing to see. And I can't imagine having that resource,

</p>
<p><strong>Ryan Burgess</strong><br />
right? Because on the YouTube video, they're probably editing, you know, where they've made the mistake. And so you don't actually see Yeah, exactly. So it's like, no, the Twitch video is live. And there's no room for error. If you make mistake, you see how you debug? Yeah, that's really cool. You've kind of highlighted it as well, even in preview, talking about your experiences, but I honestly think it is just sharing your experiences, I think is very encouraging to hear that other people have gone through this. This is normal. It's you know, it sucks. It's, you know, you go through all the emotions that you go through when you're learning, but it's okay, everyone had that point. And they're going through it, and I still go through it. So that's that's the thing.

</p>
<p><strong>Preethi Kasireddy</strong><br />
I think that was my main thing that I was trying to convey in the talk at React Rally. It's like, it's okay, as senior programmers or mid level programmers, whatever we are, to be vulnerable. It's like, I think there's this like, like eliteness to being a senior programmer. And like, under the covers, no one knows actually what you do and how you get how you got there. But I think it's like, I think people just need to be more open. Because I wish that's what I one of the things like I remember before joining Coinbase I just had no idea what what an engineering job was like. And it shouldn't be that way. It should be I should know what it's like to be an engineer on a job. And anyone on the street who wants to become a programmer should know what it's like to be a job. What know what it's like to be an engineer, but it's just such a dark, it's just like hidden under the covers of like, what it's like to be an engineer day to day. And I think being vulnerable, like what what kind of problems you solve, what you run into is super important.

</p>
<p><strong>Ryan Burgess</strong><br />
I think another thing too, is learning to like, be okay, receiving constructive feedback, that's a really hard thing to do. One, giving feedback is hard, but also receiving it, I think it's good to really internalize the feedback that you're given, whether it's a mentor or another senior engineer, or even just another peer that is Junior as well, and that you're learning from, I think it's like feedback is huge. And you just have to like learn to internalize it. I think that's a hard one to do. But I think it's really important is that we can learn from each other. And feedback is so important.

</p>
<p><strong>Stacy London</strong><br />
Positive feedback is super important to be like, Yep, I know, you struggled with that problem for like, three hours. Like, good. Like, that's good. I'm glad you did that, like you are, you're doing the right thing. You're, you're you're doing all anyways like to tell someone that they're doing the right things that that struggle wasn't a struggle that just sort of how we work through our problems and to like, reinforce that that's normal and that you're doing a good job. That needs to be more of that there's a lot of like, oh, you're not you know, smart enough for this isn't you should figure that out

</p>
<p><strong>Ryan Burgess</strong><br />
sooner or second wrote that five minute

</p>
<p><strong>Stacy London</strong><br />
nasty comment on a pull request, like all that, like me less of that we need more?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I've heard a lot of beginner. Engineers will say like, I can't believe I spent five hours on this problem. You know, yeah, we all have, like that's that's instill, do I mean, you know, it's a thing and you that's the way that you learn and but I think like, just being re, like reaffirming that that's normal. And I'll pull requests to like to your comment about feedback, like I think it's, it's, it's very valuable to, especially when you have like a junior engineer on your team to make sure that like 50% of your feedback is designed to be a certain percentage, but like, the your feedback should be positive and negative, you know, and like, you know, maybe sometimes you see,

</p>
<p><strong>Ryan Burgess</strong><br />
negative constructive, constructive, yeah, negative Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
It's just valuable to to recognize when things are done, right.

</p>
<p><strong>Stacy London</strong><br />
And it's huge. I've talked to a couple people that are new to the industry on the team, my mind, and they are, they're like podcasts are so really, like, really hard for them. They're like, the, it's like, there's emotional thing with like, the, the comments are not just comments, they feel like they are, you know, personal, right. And so I think it is very important for us to be positive and pull requests, and to say, like, hey, like, that was nice, like, good job with that thing, or like that piece of code was really good, or I don't want to put some sort of encouragement in them. And instead of, it's always being always being some sort of constructive criticism, have it be positive as negative.

</p>
<p><strong>Derrick Showers</strong><br />
But we get back to we get back to like, I'm sorry, I know, going back to like, what we were talking about, I think, at the very beginning is that, like, we get so used sometimes to, to it being a certain way that like people come people, people come into the industry that are new and like aren't used to that. And like we're so used to maybe like getting all of these, like, you know, very direct criticisms. And whereas people that are new are not used to that. And like, I think you just have to like, it's just, it's just going back to like, it's really hard sometimes to distance yourself from like spending years in the industry is like going back to your first verse. First time with like doing something and you tend to forget that I guess. And I think it's important to try to remember what it was like.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that you just said that. I was like empathy. That is exactly what

</p>
<p><strong>Preethi Kasireddy</strong><br />
I was thinking about. And I was like, actually, I appreciate the people who are like, direct to me right now. But when I was a beginner, we didn't appreciate I used to get like, I thought it was a personal attack against my code or my thing. And so I think it's like, your feedback, you should empathize with the person you're giving feedback to and like really think, put yourself in their shoes and be like, how would this person react to this? And like, if it's like someone you worked with for five years, you can probably say something super direct, and they won't take it personal. But if it's like a brand new person on your team, like you probably want to be a little bit more like, constructive. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah. No, I think that's valid, and especially in pull requests, like, think, to all your points, or I was thinking about, I'm like, yeah, for the most part, if I'm going to make a comment and a pull request, it's like, Hey, why did you do this? Or like, can we change that or this isn't as performant, or it's like questioning that. But with someone who's newer, it's like, making sure that you highlight, this is amazing, like, this part is good. And then you know,

</p>
<p><strong>Derrick Showers</strong><br />
and making it and make it make it a way that they can learn to like, one of the one of the shittiest thing I think in a pull request is when somebody comments on something that you wrote and said, This is basically like, maybe they'll say this, but this is shit, like you should change this. Well, okay, well, why should I change it, but then Moses, some of the times that person doesn't know how they could do it better. So like, what I always appreciate is when somebody is, like, takes the time to think about like, how they would do it better. And, and like, puts it in the comment. And maybe you don't have to write though, like full implementation in the comment. But like, you, you have at least thought about it. And that forces you to think about it when you're giving comment or when you're giving feedback to somebody like this is how I would this is like generally how I would do it.

</p>
<p><strong>Stacy London</strong><br />
And even better if you if some new if it's a new person, and they've they've submitted this pull request, and there are a lot of things wrong with it. Maybe they didn't do anything, right. That's fine. Maybe they didn't have any help, and nobody's helping them instead of tearing apart the pull requests me like that's wrong, that's wrong. Everything's wrong. 100 comments of wrong wrong wrong. Like just walk over to them and be like, Hey, I just just approach to me be like, Hey, I was like taking a look at your pull requests. Would you mind if we work together on improving it? There's some cool things I can show you. Blah, blah, blah, and then sit down with them pair programming, fix it, push it up, instead of doing like 10 million comments because 10 million comments to new person and even a senior person is really is like awful. Like, that's not the I feel like that's the really not human way to deal with the root cause of something the root causes. You should be pairing more you should helping each other more and not tearing each other apart in pull requests.

</p>
<p><strong>Preethi Kasireddy</strong><br />
Yeah, I think it's like, at some point sometimes I feel like some people feel good doing it's like getting you get like a million notifications from someone like shitting on someone. So good doing it. But like, appreciated. Like I remember when I first started Cubase was written in Ruby, I think and I was like, I didn't know Ruby and like it was my first pull request and like the person who code reviewed it, instead of Sending me 20 different notifications with my with the feedback. He was like locked up to me pull this chair and he's like, alright, let's figure this out together. And like that's so much better, so much less daunting than having to receive all those things and be like, Okay, well how do I solve this? And what do I do and like freaking out that I didn't do a good job or something. Yep,

</p>
<p><strong>Stacy London</strong><br />
it's so impersonal. And it's also very public. And that's not cool, like public shaming, or whatever, like this culture of shame tech or whatever, like, stop that just be helpful.

</p>
<p><strong>Derrick Showers</strong><br />
And it's lazy. Like, yeah, I feel like is lazy that just just go through and just report somebody code? Because you're like, Oh, yes. Like, this is the one I can actually write a lot of feedback on, you know, like, Oh, come on, like, Yeah, I agree. If you can just not write anything and go over to somebody's desk and give them personal feedback. Or if you're not in the same office, you know, you can do it in other ways. It doesn't have to be.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it doesn't have to be so public, because I think that is daunting to is the fact that it's like, not only are you receiving the feedback, that's fine. But it's like everyone else can see this. Yeah, it's like, Oh, my God, they think my code so bad, and like this other person saw it. And I've got full first pull requests at any company in general, even, I don't think you ever get over it. Because it's like, the first pull request is always that scary moment where you're like, This is my code and take a look at it. And it's scary, because you're like, I don't know how they're gonna receive this. I don't know how they're gonna respond. And so even someone who's very junior, or someone who's very senior, I think you all have to deal with that. And that is scary. So getting a bunch of daunting comments. That's terrible. I like to just take step back, go talk to them and work that problem out. All right, at the end of each episode, we like to share pics of things that we found interesting you'd like to share. Let's go around the table and share today's picks for this episode precede you have any pics you'd like to share with our audience?

</p>
<p><strong>Preethi Kasireddy</strong><br />
Yeah, sure, I guess I'll talk about, I'll pick things that helped me as a beginner learn.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that'd be awesome. So

</p>
<p><strong>Preethi Kasireddy</strong><br />
one of the one of the things I the way I got to where I am quickly is by just like shoving information in my face. And like just like learning things from a million different angles. I think that's what helped me the most. So one thing I did was listen to podcasts all the time. So like, find Happy Hour software, engineering daily change log. So I would say like listen to podcast, because even if you don't understand what's going on, or what they're saying, that's fine. I think like this terminology will start to get more familiar to you. And you'll start to put these pieces together. And I think I grew as a programmer so much by listening to podcasts. So I'd say like podcasts are my first pick two is follow the right follow people on Twitter that eat like that are in your space, like JavaScript, react, flow, whatever it is, whatever you're coding, they follow people. And I really listened to what they're having to say, because that helped me a lot. Like I follow Dan and a bunch of the Facebook engineers and a bunch of Netflix engineers and just like, just like, honestly just like, stalk them and learn from them. And that's how I learned really quickly. And I say my third research was I found a few blogs that I really, really liked. And like, for example, Free Code Camp has like a blog that I think is phenomenal for beginners, or like a few people that are really like their writing of and just like stuck all their blogs and learn from them. So it's I think, like, my my pick is basically a bunch of resources, because I think the best way to get good really fast is to learn things from different angles. And don't learn thing like don't learn something from one source and think you're done because there's so many gaps to fill. And you fill that by like seeing it from different angles.

</p>
<p><strong>Ryan Burgess</strong><br />
And goes really good point. I love even hearing what you said about podcasts because I always wonder is like how much can you learn from podcasts because you're typically listening to maybe driving or walking or whatever you're doing on your commute. And I think it is true is that you do learn like just hearing things and you can kind of I don't understand that but I might go look it up after like that. That's that's really cool. Derek, what you have.

</p>
<p><strong>Derrick Showers</strong><br />
So, first one is a program that I just tried going through. It's called CS 50. It's a Harvard program. And what I like about it is the instructor or the professor is really animated and really engaging. His name is David Malin, I guess so his name, but like if you're a beginner and you want to learn like some like computer science fundamentals, I think it's a really good program to go through. It's free and go through two exercises, it's good. The other thing that I recently started using is Pocket Casts, which is a podcast app. And I've been looking for like a good podcast app. And you know, I'm a huge Apple person that hate the like that you're getting another world there. I hate the native podcast app on Apple. I've actually used overcast for a while and I actually don't love overcast. So podcast is cool because you can load you can create playlists and stuff out of it and they like stay with you versus trying to like be intelligent about it, which I hate about podcast app so and then the other one is more of an iOS podcast, but I really like it's called fatal error. I saw one of the guys at try swift recent conferences that in New York, and he spoke at this conference, but he's also self taught. And he didn't go through computer science. And he's one of the guys on this podcast. And it's a really cool podcast. It's about design patterns on iOS, but it's called fatal error. It's definitely worth checking out if you're into any sort of iOS development.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Stacey, what do you have?

</p>
<p><strong>Stacy London</strong><br />
Alright, three picks. So the first pick I know, it's been probably pick on many episodes, but for an episode where we're talking about being new to the industry, I really do feel like front end Masters is an I know we have multiple people that are panelists that are actually teachers on it. But I've found it so valuable to watch people not only speak but see there's their screen and then take this ability to like pause and play and, and and build the thing that they're they're talking through it. There's so many great courses on there. I think it's a phenomenal resource if you're just starting out.

</p>
<p><strong>Ryan Burgess</strong><br />
Not even just starting out. Like I feel like it's still useful.

</p>
<p><strong>Stacy London</strong><br />
Yeah, absolutely. Yep. And then the other two have nothing to do with that. Well, Nordic js, I'll mention that. I just went to that. Mars did a really great talk at that. And it's a really great conference, similar to other conferences, but also different in that it was, I don't know that it had sort of an interesting techno party vibe going to it. To describe it, it was very unique. And I like that the talks are also really well done. So if you get a chance and you want to explore Stockholm, I think you should get some tickets to Nordic JS next year. And then my third pick is while attending that conference also decided to do some more exploring and went to Norway and saw some fjords and everything's beautiful everything is very epic and beautiful. Those are the the tours I would use for almost everything that I saw there. So if you ever have the opportunity, you should definitely check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Well following your Instagram and definitely showed how epic and alright, I have two picks one actually, since we've been talking about all previous talking that inspired this was the talk at React Rally you gave which was we all started somewhere. So definitely check out previous talk. It is now available on YouTube just React Rally in Salt Lake City. And then my second pick is a documentary that I watched, I believe it was yesterday on Netflix called fed up. It's talking about like, all the sugars in foods and how bad it is. And like they compare it to how smoking was in like 1950 when they started saying how bad it was and how long it took to actually get rid of smoking and ban it from like marketing and everything like that. And it kind of was really eye opening how crazy like sugar is marketed to kids and like if Pepsi and Coke not to pick on them but they have like will advertise in schools and it's pretty crazy just to see what that industry is doing and maybe to question it a bit does really really powerful documentary, I highly recommend checking that one out. So before we end the episode, I want to thank Preethi for joining us as a guest thank you so much. It was a pleasure having you. Where can people get in touch with you?

</p>
<p><strong>Preethi Kasireddy</strong><br />
You can email me at pretty at pretty ready.com or tweet at me probably is the best option and on Twitter you are I am underscore breezy.

</p>
<p><strong>Ryan Burgess</strong><br />
Perfect. Thank you all for listening today's episode we'd love to hear your stories about when you first started out tweet at us at front end ah any last words? Any Cheers?

</p>
`;
        return transcript;
    };