module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
welcome to another exciting episode of the front end Happy Hour podcast. This is episode 28. And we're joined by Gordon Xu, who teaches workshops on JavaScript at watch and code. We're also joined by Luis Vargas, a senior manager on global payments at Netflix, who has actually recently been learning JavaScript on in his spare time, and as attended some of Gordon's workshops. In this episode, we will talk about our journeys of how we've learned JavaScript and things we found difficult and ways we've overcome them. Gordon Louise, can you give us a brief introductions of who you are, what you do, and what your favorite Happy Hour beverages?


<p><strong>Gordon Zhu</strong><br />
Sure, so I'll go first. My name is Gordon Xu, I'm the founder at watching code comm. And the mission that I work on every day is to help turn beginners into amazing developers through videos that I make. So I spend all my time making videos and teaching talking to students and figure out how to get better at teaching. The favorite have our drink is usually beer, sometimes coffee, depending on the mood.

</p>
<p><strong>Luis Vargas</strong><br />
This is Luis Vargas, and yes, I work at Netflix. I work in something very unrelated to coding but I'm trying to learn how to code and I'm currently student of Gordon. And my favorite Happy Hour beverage is take coconut juice with we run out of coconut juice today. So I'm doing with snap on SNAP

</p>
<p><strong>Ryan Burgess</strong><br />
is awesome. And hey, Gordon, how do you like hearing yourself on video?

</p>
<p><strong>Gordon Zhu</strong><br />
At first it was horrifying. And then and then you just get you just deal with it.

</p>
<p><strong>Ryan Burgess</strong><br />
You just do. Yeah. We all have to hear voices all the time. So I thought I would ask

</p>
<p><strong>Brian Holt</strong><br />
that's not true. I never listened to this.

</p>
<p><strong>Ryan Burgess</strong><br />
We just bashed you on it afterwards. You don't know the final cut. I'm okay with that. All right. Let's also go around the table and give brief introductions of today's panelists. Ours you want to start off? Sure.

</p>
<p><strong>Mars Jullian</strong><br />
Hi, I'm Mark Julian. I'm a senior software engineer here at Netflix. My favorite Happy Hour beverage is definitely wine. Because I'd like to complain.

</p>
<p><strong>Brian Holt</strong><br />
I can just picture Myers holding like a glass of wine just like lamenting the CSS to nested. Love it stroking her cat. My name is Brian Holt, and I'm a junior developer for life at Netflix.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm writing a column. I'm a senior software engineer at Netflix,

</p>
<p><strong>Stacy London</strong><br />
Stacy London front end developer at Atlassian.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end Happy Hour podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is resource resource. So anytime we save, not not memory, if anyone listened to our last episode, we chose a poor keyword of memory. And we're talking about rust, which deals with memory. So we said it a lot. So in this episode, we've chosen resource. If anyone says the word resource, we will all take a drink.

</p>
<p><strong>Ryan Anklam</strong><br />
We recorded an episode on rust. I don't remember anything about that.

</p>
<p><strong>Ryan Burgess</strong><br />
That's probably because you're wondering why watch at that time. All right, well, let's get started. I would love to hear from everyone's experience on how they actually learn JavaScript,

</p>
<p><strong>Brian Holt</strong><br />
I can start how do I learn JavaScript, I got a job as a PHP developer, accidentally. Because I was a Java developer previous to that, well, I just, that's how I took in college. So being a web developer kind of necessitates learning at least some JavaScript. So I remember one of the very first things I wrote, I was interacting with Google Maps and the client. And I named the function and a variable inside the function, the same thing, which if you've never done that, it's fascinating because it just blows up everything gives you the worst error message. And at that point, I hate JavaScript. This is just the worst. I wrote a blog post on it, how it's just the worst thing is probably still out there. You could probably Google for it. And from there, went on to learn more and more JavaScript until I, again, accidentally became a front end developer. But that's probably another story for another

</p>
<p><strong>Ryan Burgess</strong><br />
time. Looking back at it now, would you rather be in Java world? No. What about PHP world?

</p>
<p><strong>Brian Holt</strong><br />
No. I mean, the answer is no. But PHP gets a lot of shit. It's still an OK language.

</p>
<p><strong>Ryan Burgess</strong><br />
I would take it over Java, to be honest.

</p>
<p><strong>Brian Holt</strong><br />
It depends what you're doing.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess that's true.

</p>
<p><strong>Brian Holt</strong><br />
I mean, Java is fine to write, like, especially later versions of Java, even though like they got some craziness into there, but whatever. It's fine. Java eight is that well run? Yeah, yeah.

</p>
<p><strong>Stacy London</strong><br />
I had a small one small course in college, but this was like the early days of the web like the late 90s. So there really wasn't like curriculum in place to kind of teach you this stuff. So mostly self taught, so it was on the job learning I got my first job as an intern on an E commerce team. Back when that was cool to prefix everything with E. And that's and I basically learned everything from there. So it was like you jobs later prototype was a thing for a while. So I learned that and then jQuery and then kind of then those things, and then back into JavaScript natively, and learning that a lot better. And it's all been self taught mentors over the years, and watching videos and online tutorials and all that kind of thing.

</p>
<p><strong>Gordon Zhu</strong><br />
So I learned JavaScript in a in a way I don't recommend anyone go about but I learned through building Angular applications. So when I started doing Angular, is that my first programming job? I didn't know JavaScript at that time, because I learned through Python and Java previously. And so I just would look at weird stuff in Angular and be like, what is that and then just the process repetitively finally figured things out? Just super painful, and I don't recommend doing it that way. But a couple books that I think I remember just the struggle of trying to find a good a good resource
 
resource.

</p>
<p><strong>Luis Vargas</strong><br />
Yeah,

</p>
<p><strong>Gordon Zhu</strong><br />
it was just always like, I would always start a book and then be just stuck. So I remember like reading JavaScript, the good parts, and just super lost. And then same thing with Eloquent JavaScript and, and then I made the mistake of trying to read JavaScript, the Definitive Guide, though, while the thick one the thick. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I used to hold a monitor up with it.

</p>
<p><strong>Ryan Burgess</strong><br />
That seems like a good use.

</p>
<p><strong>Gordon Zhu</strong><br />
Yeah. So yeah, I just did a lot of stupid stuff. And then just yeah, it finally made sense, mostly from banging my head on Angular.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And Angular is a tough one, too, because there's a lot of magic that's happening behind the scenes. So you're like, Oh, cool. This works. But then if you're trying to actually write just vanilla JavaScript, you're like, Wait, how come? This isn't taking care for me? Yeah, exactly. I didn't like JavaScript at first fire can remember it. I did a lot of flash work. And my first time really doing JavaScript was sometimes manipulating things in Flash or sharing to the browser, you could do certain things with JavaScript to talk to the Flash application. And that was really all I was ever doing. And I was like, Yeah, JavaScript, it's like, useless. You don't really need it, just That's all I need it for as bridging between the two. And then flash died. And I was like, Oh, cool. Now I need to figure out this JavaScript stuff. And I jumped in and found that like, I loved it. And that was also around the days of jQuery. And I think jQuery Mootools dojo, there's a bunch of them that did really kind of help make JavaScript better for the browser. And in my opinion, I think something like jQuery really helped push JavaScript a lot more across the browsers. So that's kind of how I got into it. Yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
I got started as a ColdFusion. Developer way back in 98.

</p>
<p><strong>Brian Holt</strong><br />
Shot dem Adobe products. Yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
there you go. That wasn't a layer product back then. And that wasn't even Adobe,

</p>
<p><strong>Ryan Burgess</strong><br />
when I started, it was a Macromedia product. So goddamn

</p>
<p><strong>Brian Holt</strong><br />
Adobe.

</p>
<p><strong>Ryan Anklam</strong><br />
So yeah, I started being started getting you know, 98, we had what IE, four or five I think was was the shit back then. We were still on using Netscape browser. So I learned by viewing source, and I absolutely hated JavaScript for probably the first eight or nine, maybe even 10 years of my career. And then yeah, I think jQuery was probably the big stepping stone for me as well, when I saw that I started getting serious about it, picked up JavaScript, the good parts and read that cover to cover. And I guess that's kind of where I started really becoming a serious JavaScript developer. And maybe five, four or five years ago, I started realizing that, um, as hot is cold fusion was, it probably wasn't going to be a good long game for me. So then I decided to kind of start shifting gears to being a more front end focus person, so

</p>
<p><strong>Ryan Burgess</strong><br />
it's a good choice.

</p>
<p><strong>Mars Jullian</strong><br />
So I'm gonna admit, this is pretty embarrassing, but I didn't realize I was learning JavaScript. When I started, I was working at an internship that used primarily PHP and jQuery. And I remember trying to get Google Maps to work. And I was just like, I'm gonna copy paste this over here, because I don't really know what it's doing. And so with my jQuery experience there, I was able to get a job in the Bay Area at a company that was using backbone. And that's when I finally realized what was going on at this was JavaScript, there are frameworks, you can manipulate the DOM, you handle user interactivity. And that was kind of when I realized what was going on in my developer education. And

</p>
<p><strong>Brian Holt</strong><br />
this was last week, by the way.

</p>
<p><strong>Mars Jullian</strong><br />
We don't use background. And then one of the major revelations was when I was actually digging into the source code of an analytics library. I'm like, Oh, this is a really powerful language outside of the frameworks that you're kind of like introduced to it through if that makes any sense. It kind of obfuscates some of the complexity, but also some of the sophistication so kind of got into it accidentally without even realizing. No,

</p>
<p><strong>Ryan Burgess</strong><br />
I love that too. Because I think sometimes even speaking to Gordon doing like Angular, and like you're doing back Phone, it's like they seem, I don't know, you're like, Well, I'm writing back when I'm writing Angular, you don't necessarily know, you're actually writing JavaScript. So I don't think you're probably the only one out there that thinks that I think

</p>
<p><strong>Stacy London</strong><br />
there was not like an emphasis in early days to about like that it was important that you knew JavaScript was like, Oh, your web developer, you're going to work on this PHP framework, or this ASP. NET Framework, or whatever it was ASP original, like, all those kinds of things like you, they wanted you to know, like, C sharp was more important to know, or Java was more important to know. And that was like, this cute little side language that happened to you happen to have to do as part of it.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I remember like early Reddit implementations, they actually wrote all their JavaScript in Python, and then they had Python commands that would generate their JavaScript. Yeah, man. It's, there's still remnants in there, like read, it's all open source, you can go see that grossness. It lives on but it's it's horrible.

</p>
<p><strong>Ryan Burgess</strong><br />
Probably a good idea. At some point, maybe I don't see how it would have been. But

</p>
<p><strong>Brian Holt</strong><br />
let me look at the front end of Reddit. It's not necessarily that's true. There's pretty dang it was supposed to do. It was written by back end developers put it that way. Fair enough.

</p>
<p><strong>Ryan Burgess</strong><br />
I'd also be interested to know since we're talking about learning JavaScript, what was the most difficult concept you found to learn JavaScript?

</p>
<p><strong>Brian Holt</strong><br />
There's kind of two ways question. Like, what's the most difficult thing to learn when you're learning to program? Right? It's

</p>
<p><strong>Ryan Burgess</strong><br />
fair, because I think yeah, it doesn't necessarily relate just to JavaScript, but

</p>
<p><strong>Brian Holt</strong><br />
specifically to JavaScript. I think prototypal inheritance and context are two really difficult things to grasp. And I can say that because we'll interview people still that don't necessarily know what this is in various different contexts.

</p>
<p><strong>Stacy London</strong><br />
I would agree with that. This prototypal inheritance, and maybe closures too. I think our

</p>
<p><strong>Ryan Burgess</strong><br />
closures are a tough one. I think that would probably be up there with one of my top ones hands down.

</p>
<p><strong>Ryan Anklam</strong><br />
It's array dot prototype dot slice versus array dot prototype dot splice. Idea. What either those do

</p>
<p><strong>Brian Holt</strong><br />
all the time. I googled that one all the time. And I think I've got it now. But dot called versus dot apply. I know what they both of them are just kind of which is which, right?

</p>
<p><strong>Ryan Burgess</strong><br />
At least you know what you're Googling, you're like, when do I use this one? And when do I use the other?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, there's like 40 different questions on StackOverflow. about

</p>
<p><strong>Luis Vargas</strong><br />
it. I think it really depends on what's your background? Like, it seems that most of you guys were developers. So I don't know if that helps or hinders, you know, when you're learning JavaScript, like, to me everything is new. So it's like, I don't know if it's hard or not, it just seems hard. Like, for example, you know, the keyword this, like the first time I saw that it looks like English, but it is stunning. And there are so many rules right into or at least calcium, some writes about some of the rules. And you know, how to use these and what value takes depending on the on the context. And so it was pretty hard. And the whole idea of question, you know that you can take a string, but then it may be a number and oh, yes,

</p>
<p><strong>Ryan Burgess</strong><br />
that is actually pretty difficult in any language. But yes, like, it's interesting, hearing your perspective, too, because you're right, we all had, maybe something that we were already writing, and then trying to learn JavaScript, but you're coming out at fresh learning programming in general, but it's just JavaScript, well, you chose a good language to learn,

</p>
<p><strong>Luis Vargas</strong><br />
right? And then, and I'm grateful to the people because you know, the thing of learning how to program when you're new, is not like running, where you say you just put on your tennis shoes and go out and work really fast. And then you're running right is, you know, with programming, you say, Okay, I want to learn how to program. And then they say what language and you're like, I have no idea, I just want to learn how to program right. And so I'm grateful to the people who have published material out there that says, Start with JavaScript, because the overhead is very, very low. Basically, all you have to do is fire up your browser, click Command, Option J. And all of a sudden you're on the, you're in a place where you can actually code.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that is a big thing, too, is there isn't this like whole setup that you have to do? You can just really code in the browser and you can see something happen. And I think that is a really really powerful thing to learning a language you're not trying to set up an entire development environment and

</p>
<p><strong>Brian Holt</strong><br />
my VM Yeah, like,

</p>
<p><strong>Ryan Burgess</strong><br />
that's hard. Like that is a lot of work Digital Studio. Visual Studio was never fun either.

</p>
<p><strong>Ryan Anklam</strong><br />
I think I stopped using the front page to learn JavaScript could call that was probably my first Yeah,

</p>
<p><strong>Stacy London</strong><br />
they use front page in my class. My very first jobs request that was that was the tool.

</p>
<p><strong>Brian Holt</strong><br />
True story. Derek showers still uses front page

</p>
<p><strong>Stacy London</strong><br />
at Microsoft.

</p>
<p><strong>Ryan Burgess</strong><br />
Don't think you have forced to use it. Isn't that what happens?

</p>
<p><strong>Brian Holt</strong><br />
They're gonna tell me kept me on this podcast.

</p>
<p><strong>Gordon Zhu</strong><br />
I just remember kind of the same things being hard. And I was learning like this context and closure and things like that. But from teaching, it seems like not a language thing. But I feel like it is is just all the stuff. Like even what version of JavaScript to learn first, is is a stumbling block and then people just get stuck in the Make a choice, or just all the different ways you can do the same thing those people off or like, in, you don't know js. Kyle says coercion is really important to understand. And then in axles book speaking js, he says, Don't worry about it, don't do it. And then just like trying to sift through all the noise, and understand what you should focus on is just really tough. And I feel like in Ruby, there's a way to do things. And JavaScript is doesn't have that, which

</p>
<p><strong>Ryan Burgess</strong><br />
you can do it in many, many ways. And I feel like there's a lot of opinions out there, there's very strong opinions. Even on this podcast, we all have, we've had fights about some one person's on one side ones on the other, it's, it's something that, you know, there's not necessarily a one right way to do something, which is not a bad thing. But I think as someone learning that can be very difficult, I

</p>
<p><strong>Gordon Zhu</strong><br />
think, I think when you're learning, the part to understand is not that it really matters if you follow like, approach err, approach B, but if you just pick one, you will see the merits and cons of the other approach. But I think the problem is because there are these 2345 choices, it just people get paralyzed, and they don't, they can't like progress. And they feel like I'm not doing the best practice or whatever that means. So I see that as a big problem, both when I was learning, and teaching, I get a lot of questions like that about kind of the ecosystem of the language, which makes I think, the hardest, the hardest part of learning, I think, just the distraction of all this stuff out there.

</p>
<p><strong>Ryan Anklam</strong><br />
How often do people ask you what framework to learn or whatever to get that question a lot?

</p>
<p><strong>Gordon Zhu</strong><br />
All the time? Yeah, so I think less so. I feel like Angular really kind of hurt themselves with adoption with the way they versioned from one to two. So you know, a year a year or two ago, the angular versus react question was super common. Now, almost nobody asked that question. Because it just seems like not as much of a debate these days. So at least that's good. So it seems like React has kind of been the thing that beginners like, but I think, from my perspective is like I don't teach any frameworks at all. And so the message I try to get people's if you focus on the foundations, and you focus on your actual ability, your ability to read code, write code, the bugs stuff, understand what frameworks are doing, you can rise above, you know, what framework should I choose? Because I think experienced developers don't worry, they see that as a decision, but they don't worry about that. Whereas beginners are like, Damn, if I'm going to invest this time, I need to have a results. And he has to be the same framework that companies use and the things that people ask them interviews, and they feel like they have all this, all this stuff invested in that choice, when it doesn't matter as much as as you think. But again, I think it's the same thing with like, it's just another choice. That's not really that productive for actually learning the language because we all learn different ways and probably different frameworks, and even Adobe products. It doesn't matter that much.

</p>
<p><strong>Luis Vargas</strong><br />
I think one of the biggest challenges is, you don't know what you don't know. And in Spanish, we have a phrase we say, like, you know, Canossa, Dios Akira Barbu selling which is, if you haven't met golf, you will kneel down in front of every guy with facial hair.

</p>
<p><strong>Brian Holt</strong><br />
That's great. No, it happens. It's a real thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Brian says this with a beard.

</p>
<p><strong>Luis Vargas</strong><br />
So I think that's what happens is like, everyone has an opinion. And you don't know if this guy is a master, or he just thinks he's a master. He's someone with a lot of self confidence, but no knowledge. So you hear so many opinions and you're like, Oh, my, so one week do you think I'm gonna be doing this? And then the next week, you go like, Oh, no, no, that was a waste of time. No, I'm gonna do that. And then you just churn so much, trying to find good resources. Yeah, there's so much churn, trying to find a good resource and so that you can have like, a clear linear path path to learning. That's probably the the most challenging made for me, and I'm so glad. Are you guys familiar with Derek? Seavers? No, no, he's the guy like, and all of you are very young. But you know, like, maybe you've heard of a company called CD Baby. He's so he's the founder of this company called CD Baby. He was a musician. And he was he wanted to start selling his his own CDs and dependencies on online in the early 90s. So he went from being a musician to he became a programmer, a self taught programmer and he created this company called CD Baby and then the.com Boom happened, you know, his company got acquired and now he's a billionaire living in Singapore. With the with he publishes really good advice. And I, I stumbled across his advice and he said, Yes, do learn to program. Start with your have a script because very low overhead and avoid all the frameworks just start with plain vanilla JavaScript. And I think that's, that's good advice. It's been good advice for me. I don't know. What do you guys think if you guys think it's better to start with a framework?

</p>
<p><strong>Ryan Burgess</strong><br />
No, I completely agree with starting with vanilla. It's definitely the right route. Also look at we've talked about frameworks coming and going, like, just on this podcast, we talked about how Angular isn't as big as it was before, backbone. We're not doing very much anymore. I'm sure there's still people out there writing backbone, but it's less and less react seems to be pretty big hot one right now. But a year from now, maybe not. It might still be, but I think the fundamentals of JavaScript are the most important thing. And yeah, I always tell people that

</p>
<p><strong>Stacy London</strong><br />
Yeah, I mean, you're gonna have to constantly relearn a new framework every couple years, probably. And that's, that's definitely been my experience. And if you don't know the fundamentals, learning framework will be an even higher barrier. Like you'll, you'll more quickly grasp what that framework is trying to do for you if you have a good grasp on the fundamentals.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think frameworks are really useful. But you need to know the fundamentals. I'm also interested to know, a few of us have taught workshops, and I'm sure a few of us have actually attended workshops. What are the benefits that you see with these workshops,

</p>
<p><strong>Brian Holt</strong><br />
I have the front end masters intro to web development, I taught with Nina Zakharchenko. I'm about to go back and do it again. I think they're useful, not just because I get royalties, I mean, that's useful. But I think they're useful because you're getting someone that has really thought through the journey here and kind of presents to you like the best, or I wouldn't say the best, but at least a pathway to learning what you're supposed to know. I think it's one way, you really need to figure out your, your preferred method of learning. Like for me, when I was in college, I could never take notes. Because as soon as I start taking notes, I stopped paying attention to the lecture. And for me, it's actually hearing a person say it and watching them do the problem is how I learn really well. Whereas other people, like my wife needs to get the text and read it over and over and over again, I can't do that, like, if you give me a textbook, it just doesn't help. So I think particularly for people that enjoy that style of learning, I think it's super helpful.

</p>
<p><strong>Ryan Burgess</strong><br />
What I liked about actually, I've sat in a couple of your workshops, is I liked the fact that some of them you're coding along. And that to me is like actually seeing something progress really helps me learn. Learning the fundamental, without really seeing it applied is always been difficult. So I like those workshops, when you're actually creating something, and you're, you're seeing it kind of evolve, and you're like, oh, that's why I use the for loop there. Or, you know, that's why I wrote this into a function, it doesn't matter, whatever you're doing, it's like, you start to understand why you're doing those things and how its functioning and working together. And I think that's a lot better than reading it in a textbook.

</p>
<p><strong>Stacy London</strong><br />
Definitely. And seeing something that's not a to do list, you know, like seeing and working through a live something that's more realistic to what you might be building in a job. That's huge.

</p>
<p><strong>Gordon Zhu</strong><br />
I have a lesson. And in my course, that teaches people how to do a to do list. The, the lesson is everything's a to do list. So like Slack is a to do list with the forum at the bottom. Same thing with like Yelp and Google or just to do lists and Asana, obviously, shell is like $100 million to do list. It's, it's boring, but there's a reason that Brian links it. And the reason I like it, too,

</p>
<p><strong>Ryan Burgess</strong><br />
I kind of like that you just applied it to so many things, though, because you're right, it they're all basically a list of items. And there's a lot that you learn by doing that, too, is like how do you sort the list? How do you add something new to the list? How do you remove like, those are all fundamental things that you need to learn to create an app.

</p>
<p><strong>Luis Vargas</strong><br />
And I think, you know, the most people give good advice, they say, we'll find something you want to build, and then then learn that way. But at the beginning, you don't even know that you're like, I don't know what I want to build. So it's very helpful when someone says, Okay, this is what we're going to build. Because that way, at least you have a picture in your mind as to if I do this, right, this is what it should look like. And that's how he came across Gordon's material. You know, he said, Okay, we're gonna create a to do list and, and then, you know, in the process of creating the to do list that we were learning the basic concepts, this is an array, and this is how you interact with an array and the different methods behind it. So I like that a lot. I mean, there are other good resources out there, charity, Free Free Code Camp, and I can't remember some of the others but basically, in those, you know, you're just, they teach you a concept, they give you a small exercise and say congratulations, now you're not gonna raise and you okay, and that, what do I do with that now? So it's good to have an end and end goal.

</p>
<p><strong>Ryan Burgess</strong><br />
I like the idea that you're learning how to use an array like kind of one It is and how to actually use it. Because if someone just explained you an array is it's sometimes when it makes like, you're like, why would I ever need this? Like, why do I care about storing something in array? It reminds me of something. When I first learned during school, I was being taught about cookies. And the example of leveraging a cookie didn't make sense to me like it. I was like, why would you ever use this? The example was was to change and save, like the state of like a color of the background of a website. And that that's what you're supposed to do. And I'm like, why? Who the hell cares? Like to change like the background color of a site, and save that preference for that person? It didn't really resonate with me. But the minute you apply it to something that you're like, oh, like, there's a reason to save a cookie for something more valuable. It made more sense to me and like that, I don't know, just like something that didn't really resonate with me. So I didn't really give a shit about learning it. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I think that's why the some of the workshops that I think are the best workshops tell stories, and they tell you a story of like, what what you want to build and why you want to build it. And every, every step along the way, this is the syntactical way to do something. But this is why you want to do it. That's huge. So there's like these, like self taught self led courses, where it's like, let's use vanilla JavaScript to do some sort of mathematical equation. And you're like, I don't care.

</p>
<p><strong>Brian Holt</strong><br />
Well, I think I heard Jafar make the analogy that programming is just like human pattern matching. Right? That we see like, Okay, I have this kind of problem, I'm going to use this sort of tool to solve it, right, like I have, I need to do a repeated instruction, therefore, okay, repeat instruction, that means I need to use a for loop. Right. And if they only teach you like, here's the for loop, and they never tell you what, what that matches to, then you're never going to know when to use it.

</p>
<p><strong>Gordon Zhu</strong><br />
The thing that I like about workshops, and even more than than videos is that it keeps the instructor honest. Because you're gonna have people trolling you live, and asking you and holding you accountable. Whereas you can make a really crappy video and never respond to comments. And so I think just generally, workshops tend to be higher quality, because they have to be because the audience holds holds instructor more accountable. And then the other thing that makes the quality of I think videos as well as workshops is that after you've done a couple books or blog posts, it's kind of inevitable, you're probably going to find something where either it might be totally your fault, or it might be a typo. But because of that you can't progress with like the step was missed or something, then you develop the skepticism. And like worry when you go through texts that you don't have in a video or workshop, because they did it in front of you and just kind of like proof that they didn't mess up and, and like withholding information or something. And so I find that that was a constant worry for me too, or the book, set a date or something. And then you miss this stuff that you had to account for.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that that's true. And I think you probably as giving the workshop, both I know Brian's done a lot to is, you learn a lot, probably just the fact of how to improve the course each time, because you're getting feedback on it, and you're like, oh, shit, it's, you know, I need to tweak that rather than just writing a blog post or, you know, just broadcasting a video, it's great. It's not a bad thing. But I think you're not getting as much of that feedback to learn on how to improve it to you.

</p>
<p><strong>Stacy London</strong><br />
I think something that you did in your workshop that I thought was really nice is that idea of building upon. If you make a mistake in your code, and you can't follow along anymore, that idea of taking snapshots and saying like you're doing some work and maybe fallen behind and maybe you can't quite figure it out. But here's a snapshot point that you can catch up.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, like, get branch right and be in a good place.

</p>
<p><strong>Gordon Zhu</strong><br />
I think the other thing too, with workshops is this is probably people get really upset when people mess up in a live demo in a conference. But in a workshop, it's kind of nice to see the instructor mess up, you feel better about yourself, but you'll also see see how to like debugging and solve problems that like you're gonna do the same thing probably worse. And so to see that happen and not see a perfect like 32nd video, we're like sped up and is kind of nice. It's it's it's more realistic. It's like if a coworker was next to you versus like a fake video.

</p>
<p><strong>Ryan Burgess</strong><br />
How does it differ between teaching and learning? Like you're both teaching a workshop? Does that help you also learn some better concepts teaching? How does that differ between learning and teaching?

</p>
<p><strong>Brian Holt</strong><br />
I give a taxi a talk on this past year in Poland. There's a there's a phenomenon called the empathy gap, which I find really interesting that basically, there was a science experiment on that basically said, they took a group of people that had been divorced and then took another people that had never been divorced. And they asked the he's peep group of people. This person's going through a really difficult divorce, how much empathy Do you feel for them? Like, I'm sure it was a better design experiment than that, but that's the gist of it. Right? And the people that had never been through divorce were much more empathetic to the person that was going through the divorce. And the people that had been through divorce for much Less empathetic, because they kind of had this attitude of like, well, I was able to do it. So you should be able to do it too. And I think this greatly applies to programming as well, right? Like we as developers, because we already learned how to code, we kind of had this attitude like, I learned it. And now it's really easy for me. So I expect you learning this, are you just going to pick it up right away? Because it's easy, right? And so that gap, right there is called the empathy gap. And it's really tough to overcome, like, you can identify it, right? But it's still really hard to go back and say, No, this is actually really hard. And I have to acknowledge to myself, that I actually don't remember what it's like to learn this, that I'm better off approaching this from the perspective of like, never having had experience going through this. So yeah, it's tough, you have to take your knowledge that has all this other knowledge around and you have to peel it back to the most basic level, and communicate to people on their terms using their vocabulary. Because if you're not using their vocabulary, then you're just talking over your head and you're an asshole, right?

</p>
<p><strong>Ryan Burgess</strong><br />
Well, no one wants to attend your workshop at that point, either.

</p>
<p><strong>Brian Holt</strong><br />
Exactly. Like, if you start talking about for loops, using like reactive programming, people are gonna like, What the fuck are you doing? Right? So you have to come down is like, Okay, this is what like, one instruction to the computer looks like, right? An instruction is like, I type something and it goes to the computer, the computer, you know, does some sort of computation on it. Now, we want to do this multiple times without having to write it literally every single time. So that's why we bring in these for loops, right? Things like that. So it's really difficult to pull back, like the onion of knowledge that you have, it's a learned skill, it's really hard. And I still fuck it up a lot.

</p>
<p><strong>Gordon Zhu</strong><br />
It's definitely I think, I learned a ton, not really about programming. But I learned mostly about how to kind of be a better person. Like, I usually get frustrated really easily. And, and now just having to answer so many questions. And to realize that, you know, if you look at different metrics, the only thing that matters when you're teaching is do they get it? And so if you're super focused on that, in do whatever you need to do to get there, you just have to really, like Brian said, just kind of think from their perspective, not what your experience was. Because your experience might have been really messed up to, like the way I learned JavaScript is not the way I teach JavaScript, because no one should learn the way I learned. This, probably most developers, like most developers learned in a really messed up, not ideal way. And so it's like, you do really have to look at what are the resources out there today. And we're also the expectations of today. Like a lot of people before code, CAD me have this expectation that things are super hard, and you have to like grind and stuff. And a lot of people coming in right now don't have that because they just did like code your code hour or something and think it's like super easy. And so at every level, you have to kind of think about where, where they're coming from. And then one thing I struggle with a lot is, as you get more experienced, you get a lot more comfortable with not knowing stuff, and just being like, who cares. But beginners don't feel like that at all. They feel like they have to understand every single thing. And so for example, when you're when you're reading code, what's really hard is to look at a big code base, and just realize you can't you can't read it top down yet to kind of look at a bit at a time and just be comfortable with. Okay, this is what it's supposed to do. And and that's okay, but but when you're teaching sometimes not to explain that don't like don't worry about I know that you're worried about what all the other stuff does. But you have to focus and kind of ignore it. And that's part of the process. And yeah, I think again, it's not thinking of my experience, because my experience is kind of useless. When when teaching and yeah, it's exercise and empathy. And it's more like product management and create creating products or writing than coding at all has like nothing to do with programming. It's making

</p>
<p><strong>Ryan Burgess</strong><br />
it easy to digest for someone else. But I would say that you said that your experience, the way you learned is useless. But it probably isn't because you're empathetic, that you're like I don't want them to learn like the way I did. And you're like helping them learn a better way

</p>
<p><strong>Gordon Zhu</strong><br />
it says like, useless as a scar. Yeah. And also not just the way that all the stupid things that I did that I want people to avoid, but also trying to help people see through a lot of the stuff that other people say that a lot of especially on medium I feel like that's the most guilty location right now. People are trying to just get pageviews and like when you're just trying to get pageviews for example, you could explain something very simply, and maybe one example and two paragraphs but people want to have the most comprehensive guide and the last thing you need to know that you can share like the only resource the one thing and and that creates these super long like comprehensive overly complicated things that are yet just another thing that Beginners feel like they have to do, which is really like, what you're what Ryan, what you're saying before is what is ideal is you learn something when you have the, when you have the need to use it. If you just learn that because it's on the list of features, that's not a great way to learn, but medium posts tend to be like that.

</p>
<p><strong>Ryan Burgess</strong><br />
This is all you need to know to like write JavaScript, you're like, No, there's a lot more there. Yeah, there's there's some bad medium. And

</p>
<p><strong>Gordon Zhu</strong><br />
it's not just it's not just medium. That's just an example. But there's this prototype blog post, that's like the most comprehensive post ever. That is usually just not, it's just Linkbait. And just

</p>
<p><strong>Luis Vargas</strong><br />
according to the author.

</p>
<p><strong>Ryan Burgess</strong><br />
Good point.

</p>
<p><strong>Luis Vargas</strong><br />
I think one of the challenges is also the marketing of materials. Like if you were out shopping for books on learning how to code, you run into these books that say, learn JavaScript in five hours, or even like in 30 minutes. So you start reading and you go, Oh, my gosh, is to spend two hours and then I have to call them an idiot, this is like. So I think the expectation is that those are insane expectations, right is just maybe get started in 30 minutes. And you know, and get ready for a yearning for lightning.

</p>
<p><strong>Ryan Burgess</strong><br />
So I guess we've touched on a little bit night, I think that's interesting. The way you say that is, how do you know what useful material to learn JavaScript or useful resource? Cheers?

</p>
<p><strong>Brian Holt</strong><br />
Yes. So the best answer question is ask someone that you trust, like us. Just kidding, don't trust us.

</p>
<p><strong>Ryan Burgess</strong><br />
I would actually even add to that, too, is yes. Ask someone that you trust. Ask multiple people though, too. Because like, you're going to get varying opinions. And so it's good to kind of hear and ask quite a few people, if you can, that is helpful. It reminds

</p>
<p><strong>Luis Vargas</strong><br />
me of Alice in Wonderland, do you remember that? You know, she's walking around, she runs into this cat? And it says, Can you please point me in the right direction? And says, Okay, sure. Like, where do you want to go? And she has, I have no idea. And then any, any direction will do? Yeah. So when you say what is useful, so I think that the onus is on the learner to say, quality that I want to accomplish. And if you have no clarity on that, then good luck, because people will intention, people will point you in the direction that they believe you want to go. So and that's the reason. And sometimes as a beginner, you don't know where you want to go. But that's what I like about workshops are webcasts where they say, this is what we're going to build. So at least I know, okay, do I want to do this or not. And I think that is very important, having some level of clarity as to where you're going.

</p>
<p><strong>Gordon Zhu</strong><br />
I think the other thing is that there are a lot of voices that want to give advice, just kind of rank the people that give you advice by like how thoughtful they are. Because there are a lot of people that are great programmers, but like not very thoughtful at all. And they're really going to struggle to think about what your situation is. And so even if someone's not as good of a programmer that earlier in their career, they might be a lot more of the like, give you a lot more relevant information than the person that's been doing it for 10 years. So don't just like look at, Oh, someone's programming ability and and kind of value recommendations that way. And then the last thing I'd say is that, because you're going to, like Ryan said, you should ask a couple people, you're gonna get a lot of different opinions. But when you choose to go down a certain path, which you have to do, at some point, you just can't like, evaluate all the time, actually focus and do something that one of the people says and try to see it through at least a little bit. Because if you do, if you just dabble like an hour in each one, you're not going to get more clarity, you're gonna get more confused about which is the right way to go. At least if you make a mistake, and try something for real, then you can at least know what was good about it. What was bad about it versus just have a, a taste of the first chapter of a bunch of stuff. One of my students had this shown me this his bookmarks and chrome, a screenshot of it, and it was, I sometimes exaggerate, I used to exaggerate and say it's a 70 bookmarks problem, because that, to me was a ridiculous amount of bookmarks. But he had like 150 for all learning JavaScript, it was all learning JavaScript. It was like he had a whole folder on like async and promises and he could barely code and I was like, He's just delete everything. Just delete everything.

</p>
<p><strong>Ryan Burgess</strong><br />
Especially async. And promises like they're definitely things useful,

</p>
<p><strong>Gordon Zhu</strong><br />
but not now. A beginner Yes, someone said that. You need to know that. And then it got on the bookmarks. So yeah, don't just collect resources, but yeah, actually have to do something about it and try them out.

</p>
<p><strong>Stacy London</strong><br />
What if you don't even know anybody in tech, though, like if you're super beginner, and maybe you're not in the industry at all. You're not going to have someone that you can ask and it might be terrifying to post something anywhere online to be like, help. How do I know where to go for resources?

</p>
<p><strong>Brian Holt</strong><br />
Cheers, cheers.

</p>
<p><strong>Stacy London</strong><br />
So to that problem of like doing a search for learning JavaScript and you get 5000 hits, how do you know? Which of those is good?

</p>
<p><strong>Ryan Burgess</strong><br />
That's actually a really good

</p>
<p><strong>Brian Holt</strong><br />
question. You could probably start with watching code or front end masters, like, those are great, great resources. Right. Cheers.

</p>
<p><strong>Luis Vargas</strong><br />
That's a good question. You know, I, again, direct Sievers, you know, he had this phrase, he says, when you trust the source, then they they can use directives, right is like, if I trust you, and you tell me do this, just I'll do it, not because I understand what I'm doing. But because I trust you. So I think that helps a lot is trying to find someone you know, like in the in YouTube or in the web, someone that you feel some level of trust with, and then just follow what they tell you to do. And maybe maybe it's not the best path, whatever best means, right. But once you trust them, you commit

</p>
<p><strong>Gordon Zhu</strong><br />
it, one state that most of my students are in is watching code is kind of unknown, like, tiny, little company. So all my students have done everything before, I'd say on average, every student's done at least like five to 10 sites, at minimum, because like water was never the first thing you do, because you never heard of it. And so you will get to that point, after you get to the after you decide to do one thing. But what I tell my students at that point is, and they always ask me about all these things I've done, I don't, I don't know, I haven't done all this stuff. But the one thing that can guide you is like how much progress you made with each thing. I think a lot of times, students will like kind of force their way with a specific resource, because it's super popular, and then that will just kind of blow just banging their heads against the wall and just keep doing it, instead of something that they actually like more, because no one you know, it's not as known. So instead of thinking that way, just let your progress guide you do the thing that you made the most progress with, it sounds so obvious, but no one does that. You definitely will after doing a couple things like, like someone's style, or just like not even the way they teach, but like the topics they choose to teach. And once you find that just like Louis, just stick with that, and it's gonna be different for different people, depending on your goals. Like, if you're not doing web development, then, you know, front of masters, probably not or watching coasts, not gonna make the most sense. But if you are doing web development, something that would, would, would be really good. And the other thing is that to be very clear about the kind of resource you're looking at, I'd say they're coupled like very distinct categories. One is, it's on a specific tool or topic. So might be an intro to react or like web pack or something. And that you're at the early stages, not the right thing to do. But maybe later once you're like more intermediate. And then there's stuff that is, like foundational Akata program. And then finally, there's like encyclopedic references. And so don't do that mistake I did, which is try to get foundational information from a reference, or try to learn web pack when you're a beginner. Right? Do you do the right resource for what your goal is,

</p>
<p><strong>Brian Holt</strong><br />
I think for learning JavaScript, and in general, just learning anything for it's less than a, like mechanical problem of actually like going through the motions. It's a motivation problem, right? At least it was for me, like, I'd get home from work when I was a brand new, you know, junior developer, and I'd be like, I just want to sit down play Xbox. Right. But like, if I'm working on something, I'm super stoked about some side project or some just stupid to do list because God bless to do lists. Then I get stoked about it. And I can like, I can spend three hours banging my head against the wall until it's like, okay, this finally makes sense, right? So if you find something that gets you motivated, like, definitely chase that, right, like, just chase that until until you're sick of it, and then go play Xbox.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no, I actually want to add to that, because I think that's how I learned a lot was just trying to build something. And I think sometimes I think Louise you mentioned sometimes it's hard to come up with the idea of what you actually want to build. That is definitely true. But people try and create this brand new idea. It's okay to go create a new To Do app, it's okay to go create a new social media site. Any of that you're going to learn so, so much and Like Brian said, You'll hit your head on the wall multiple times trying to figure it out. But at least you're slowly getting there and you're accomplishing something. And I found that always motivated me more was to actually create an end product. Alright, well, as we wrap up today's episode, we like to share pics of things that we have found interesting or that we've liked to share with the podcast. Let's go around the table and share our picks for today's episode. Maurice, you want to start it off?

</p>
<p><strong>Mars Jullian</strong><br />
Sure. I think I'm gonna pick a conference, if anyone's looking for workshop or anything to attend, forward js is happening here in the city, march 1, it's been typically been a pretty good conference, lots of really interesting people there from you know, all walks of life and all levels of experience, and a couple of us will be speaking. So that's exciting.

</p>
<p><strong>Ryan Burgess</strong><br />
Are you speaking? Yes.

</p>
<p><strong>Brian Holt</strong><br />
Let's rephrase that. Mars is speaking. Yeah, I'm

</p>
<p><strong>Mars Jullian</strong><br />
gonna be not coding life.

</p>
<p><strong>Stacy London</strong><br />
SmartMove.

</p>
<p><strong>Brian Holt</strong><br />
So this is the the hardware edition for Brian. The first one is the sheet Fuller, which Ryan told me to pick, it's a little USB, audio processor slash amp, they can plug your headphones into and it makes them sound a lot better. I'm not a huge audio file, but it does actually make a substantial difference if you have nice headphones, right? Like if you're using the earbuds don't bother, right. But if you have nice headphones, it actually does make a fairly substantial difference.

</p>
<p><strong>Ryan Burgess</strong><br />
I will agree I tried it out yesterday for good 1020 minutes. It was great. I've got

</p>
<p><strong>Stacy London</strong><br />
a DAC amp, it's definitely worth

</p>
<p><strong>Brian Holt</strong><br />
it. Yeah, there's a few of them out there. This is just happens to be one that I like. And they have varying levels as I just got the cheapest one because I'm cheap. The next one was recommended this morning from one Harry Wolf, shout out Harry Wolf. It's a network attached storage unit from Synology. And basically, you kind of get your own personal cloud on your own network that you can backup to your own cloud, which is like locally on your network. And then this particular Synology unit will then take that and then back it up to s3 for you. Which I thought was pretty cool, right? So you backup once locally. So if you know you never need to restore, you can do that. But if there's a house finding this bolter computer and your backup unit, then you can pull from s3 or from Glacier or wherever you want. And it's all encrypted. So if you know the government's subpoenas, s3 for it, and they can't get it, right, because they don't have the key for it. So that's pretty awesome. So I'm just hiding all my shit out there. What are you hiding? That's the point.

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan, what do you have for us?

</p>
<p><strong>Ryan Anklam</strong><br />
So my first pick is a TV show on the Sci Fi network called the expanse. It's based off of the expanse book series. And the first two series of the show our book based off the book, Leviathan Wakes, I read it, it's a really good book, and the show is just extremely well done. It's probably one of the best sci fi shows I've watched in a really long time. On my second pick, is the intro to storytelling class on Khan Academy. So Khan Academy, teamed up with Pixar to create a class on just storytelling, it looks, I haven't taken it yet myself. But I definitely am going to spend some time and go through this. It just looks awesome. And my third pick is a song called New Day by Xavier 11. And it's just one of those songs I can put on and it will always make my day better.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. Stacy, what

</p>
<p><strong>Brian Holt</strong><br />
do you have?

</p>
<p><strong>Stacy London</strong><br />
Alright, so three things. First pick is article by Jake Archibald arguable feature of loading CSS there's so behind a feature flag in Chrome Canary for experimental web platform features, can now see CSS being progressively loaded, which is pretty sweet. It's we've done a lot of work over the years to like, bundle our CSS together minified. And so it doesn't block rendering. And this is kind of a cool thing to see browsers implement. So there's that. My second pick is for learning JavaScript code school comm is something that I found pretty helpful. In my personal learning, they have some I like their their style of creating like, a little jingle for each thing. So I was learning ember that that jingle gets stuck in my head. And then my third pick is a song by Nathan fake, called rVk. He hasn't put out anything in a while. So it's really exciting to listen to something new by him.

</p>
<p><strong>Ryan Burgess</strong><br />
Great, Gordon, what do you have,

</p>
<p><strong>Gordon Zhu</strong><br />
like? Well, I just have a few, obviously, washing code, if you want to learn JavaScript, it's the place to go. The second is rereading, and just looking at things over again. So when you're going through a course, a lot of people, they don't really review effectively. So they like rewatch the course, a better way to do that is just to reread the code that you produced in the course. And it's a really concise, condensed view. And if you understand that, you don't need to go read through the whole thing again. So it's a really good way to kind of reinforce things. And then one thing that I've been rereading from probably 10 or 15 years, since college is the essay 10 things I've learned by Milton Glaser, he's the creator of the Island New York logo. This essay is impacted my code and life and the way I think about products, and my career more than anything else, and I reread it all the time. So check it out. If you it'll be the top result. 10 things I've learned

</p>
<p><strong>Ryan Burgess</strong><br />
great, Louise, what Yeah,

</p>
<p><strong>Luis Vargas</strong><br />
well, I'll start with watching code. I'm not Being paid a commission. Um, just a fun. So I'll start with that one. And then I, I have a piece of advice, which is gonna make you look very dorky next time you travel, but you're gonna thank me which is, is basically industrial noise blocking headband, or you know, earmuffs, and I travel a lot for work. And I traveled to Latin America. So the airlines are not the best. And sometimes you get all kinds of crazy stuff in the going on in the airplanes. So these, you know, you go to Home Depot for $9, you can buy this industrial happening noise cancellation thing. And it's awesome. Like, I have kids crying in front of me, and it's almost like you can press a mute button. Only $11 to $11. And these are the expensive ones. Wow, that's awesome. And lastly, I would say, Derek Seavers. His last name is si ve Rs. He has this website called siebers.org. He labels himself a programmer, writer, and NaVi the student of life. I make useful things and share what I learn. I think it's any time you spend on his website, this is time well spent.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. Thank you. So I have three picks as well. I feel like everyone's had almost like three picks, which is great. This last week, I've got a new tattoo on my kneecap, which was not really the most fun. I thought I'd choose the artists names awesome April's he's probably one of my favorite tattoo artists. I have a few tattoos from him. Really good artists in San Francisco and tattoos at idle hand tattoo, which is an amazing shop. Then I also saw this amazing demo last week or a couple weeks ago, called fluid paint. It was done in Web GL. And it's just like, amazing. It's the looks like paint on the screen. It's pretty awesome to play with pretty impressive. Then my third pick is a Netflix Original documentary called abstract. Abstract is kind of like the Chef's Table for artists. It's amazing. They have episodes on sneaker designer, a illustrator, graphic designer, architect, there's a fair amount of them. I've seen almost all the episodes. It's really good. I think my favorite one is probably the first episode on the illustrator it he's crazy and just like amazingly smart and interesting. So definitely worth checking that one out. Alright, so before we end the episode, I would like to thank Gordon Louise for being guests on the podcast. It was great having you both on. And thank you for joining us.

</p>
<p><strong>Gordon Zhu</strong><br />
Thanks for having us.

</p>
<p><strong>Luis Vargas</strong><br />
Thank you for the podcast. It's awesome. Great.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I know Louise, you've listened to it for a while.
So I'm a fan.

</p>
<p><strong>Mars Jullian</strong><br />
Awesome. Thank you good resource.

</p>
<p><strong>Ryan Burgess</strong><br />
Where can people get in touch with you?

</p>
<p><strong>Gordon Zhu</strong><br />
So I'm on Twitter. It's Gordon underscore zu Zh. You

</p>
<p><strong>Luis Vargas</strong><br />
and I'm at Netflix so you happy to help you with anything related with payments processing.

</p>
<p><strong>Ryan Burgess</strong><br />
Perfect. All right. Well, thank you all for listening to today's episode. If you've been enjoying the episodes, please rate us on iTunes. It really does help us share the podcast with more people that are finding it interesting. Like us on Facebook and follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>.

</p>
<p><strong>Brian Holt</strong><br />
Any last words? You should mail us a postcard.

</p>
<p><strong>Ryan Burgess</strong><br />
What kind of postcard you want?

</p>
<p><strong>Brian Holt</strong><br />
I mean the best one? Yeah, just just mail us 100 Winchester circle in Los Gatos, California with your favorite

</p>
<p><strong>Stacy London</strong><br />
resources for learning resources.

</p>
`;
        return transcript;
    };