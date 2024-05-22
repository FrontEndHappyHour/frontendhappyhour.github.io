module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to another episode of the front end happier podcast. We are writing code as engineers no matter what programming language we're using, we're doing some form of problem solving. In this episode, we are talking about programmatic problem solving with Nicole. Nicole, can you give a brief introduction of who you are, what you do? And what your favorite Happy Hour beverages?

</p>
<p><strong>Nicole Archambault</strong><br />
Absolutely. Thank you so much for having me on guys. Yeah, I'm Nicole. And I am like Nicole R Shambo is my full name. And I am both a self taught front end web developer and also at this point, and educational technology entrepreneur. So I work pretty closely with educational technology and online courses in particular. That's pretty much what I'm doing. I'm also pretty heavily involved in the newbie dev community. And I do conference speaking as well on a wide variety of topics. I have, I'm a host of the Libyan code podcast. Yeah, I've got a whole lot of stuff going on. But for the most part, that's me in a nutshell. It's

</p>
<p><strong>Ryan Burgess</strong><br />
a good resume. I like it. And then what's your favorite happier bedrooms? Yeah.

</p>
<p><strong>Nicole Archambault</strong><br />
Okay, so the happy hour beverage I'm going to have to say it's not really good for happy hour, but I ended up doing peach vodka and deep Eddy peach vodka with iced tea, unsweetened iced tea today. I think it kind of depends on my mood, though. I discovered Capriccio Sangria recently, which is 13.9% Alcohol. So it's like a party in a bottle. That's not really happy. That's after party. So yeah, but it's

</p>
<p><strong>Ryan Burgess</strong><br />
it is tasty, though. Right? Like I would assume the Sangria is really good.

</p>
<p><strong>Nicole Archambault</strong><br />
It really is. Except it's just deceptive because it comes in like a regular sized beer bottle type style.

</p>
<p><strong>Ryan Burgess</strong><br />
Let's also give introduction of today's panelists, Augustus you want to start it off? Yeah, sure.

</p>
<p><strong>Augustus Yuan</strong><br />
Augustus Yuan, software engineer at Twitch jam

</p>
<p><strong>Jem Young</strong><br />
young Senior Software Engineer at Netflix. And

</p>
<p><strong>Ryan Burgess</strong><br />
I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcast, we love to choose our keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is fundamental mental fundamentals. So if we say fundamental fundamentals, we will all start taking our drinks. So I'm really interested to just start off what is programmatic problem solving? I feel like that's, you know, we should start there is a bit of a definition or what we all think that I feel like there's probably a couple different answers.

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah, I, I obviously had the first the same question at first too. And all I knew I didn't even know the term programmatic problem solving. I just knew it was something that I was struggling with, and that I was missing skills. And so programmatic problem solving is effectively the way that it looks while we're actually using it is that it's building an entire plan kind of an approach to a particular problem before you even be in writing code. And so there are steps afterwards, of course, and that's usually where I find that especially new folks will jump in right away. What I find is that real life, problem solving is only slightly different in that programmatic problem solving in particular, relies on thinking in the way that a computer would think. So everything is more off on true false, yes, no, we don't have that same gray area or kind of, you have to build in your own fallbacks, stuff like that. So that's mostly where I tell my students that but yeah, that is the programmatic part of programming. And it is one of the most fundamental skills that we can build in snuck out winning chairs. So it is one of the fundamental skills that I had seen that new coders are mostly missing in the beginning. And I say this also, from a personal standpoint, because I have a very personal story with programmatic problem solving, too. But yeah, in a nutshell, that is what programmatic problem solving is, it is very separate from actually writing the code itself. It's an entire process.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that you said a new person coding that's typically how you dive in it absolutely is I know when I first started was like you just started coding to try and solve the problem. Instead of being strategic about thinking how's the best way? Not gonna lie, I still sometimes do that on like, personal projects, where I'm like, Oh, just, you know, figure this out as I go. And I end up regretting it ended up just like it would have almost been a little better to just sit back and think a little bit more strategically about what am I actually trying to do and what's the best approach? You're not going to get it perfect like don't get me wrong, I don't think you're going to map out the perfect solution. But I think you you end up thinking like a few Steps Ahead and how you're actually building whatever you're trying to build.

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah, I've actually found and where it really hit me in the beginning was something that I call blank screen paralysis. So after you begin to move past working on these tutorials and kind of using, I started out with Treehouse initially, and you find that you're using what you learn and you feel, you know, you're gaining confidence. And that's the important part truly. But once it starts to get tougher, which is where I got bottlenecked, you realize that it really is I say, you know, programming is 80% problem solving and 20% writing code. I mean, you can look up so much, there's documentation out there for writing code, there isn't documentation for approaching a problem, we have to actually use our noodle, and we have to be able to create something that makes sense, or else your solution isn't gonna make sense, either, it's not gonna work at all, or you'll be solving the wrong problem entirely, which I see too, like not literally the wrong problem, but you miss identify what you need maybe as output. So it's, um, yeah, those are kind of some issues that I see, though. And people get overwhelmed, you know, they get turned off if they're associating negative emotions too closely with the experience of writing code from scratch. So I wanted a way to help people well, first off, to help myself, but also to help other people to navigate that experience to really avoid a lot of overwhelmed too. And it's, it's a transformation, truly, I've worked with people in real life, I've worked with people, you know, kind of doing programmatic problem solving, I love group coaching on it, because like, they bring in problems. And it's like, okay, let's pick this apart from the beginning. And that's the beautiful part. There is no cord, a yard code. And of course, it's very language agnostic, code agnostic, because you don't need to be able to write code truthfully, to learn how to solve problems. So yeah, that's that's a great place. It is one of those those true fundamental skills, but I was not intending that one. Cheers. Cheers. Were keeping pace.

</p>
<p><strong>Ryan Burgess</strong><br />
So Nicole, would it be too simple to say that like, as a quick definition of programmatic problem solving, the planning before building?

</p>
<p><strong>Nicole Archambault</strong><br />
No? Well, there's one component there that isn't being recognized with that statement. In particular, you're absolutely not wrong. It is the planning leading up to when you're actually going to write the code that the computer executes. The other part of it is that like, in my course, I really focus on I have a course called newbie coder, problem solving school. And I mentioned that because these are skills that really need to be taught. But the, the other part of it is recognizing early, what types of way earlier than you would if you just jumped in, and you know, floundered at Step five, writing code, it gives you an opportunity, identify some of the data structures, some of the variables, some of the different types of tools that you're going to use, because you can plan but at the end of the day, if you don't know what those individual tool, it's very much like tools in a toolbox, you can plan to build a house. But if you don't know how to use those tools, and good luck, they're nearly not going to give you very good if you don't understand why we need them and what they're used for and to create a clear, very crystal clear use case. So

</p>
<p><strong>Ryan Burgess</strong><br />
I'd actually be curious even hear from gem and Augustus, how do you think about when you start to you get a feature that you have to build? Or, you know, maybe it is just a small feature, but maybe it's a large architectural change? How do you approach it, you just dive right in?

</p>
<p><strong>Augustus Yuan</strong><br />
I'll definitely say that. Before Twitch, I was a very, like, we'll dive in and figure it out as we kind of approach. I definitely, I definitely see there's a lot of value. And like really props to you, Nicole for like teaching this planning up front. Because there are like, a lot of scenarios where like, it just really helps to get your mind wrapped around the problem. And really think out all the edge cases, I would say like already both of my projects at Twitch, I've had to, I am very, very thankful we've like really thought out the project before we started like tackling it,

</p>
<p><strong>Ryan Burgess</strong><br />
Augustus what what changed your mind there? Or like you said it took going to twitch? Was it fellow engineers that you worked with, or it was just the nature of the work that you were doing really called for it

</p>
<p><strong>Augustus Yuan</strong><br />
is definitely both. So actually, since the features out now, like I can talk, I can probably just talk about it. So the feature I was thinking about that I had to work on was this picture by picture player. So I used to work on the video ad experience team and when an ad runs on a stream of for people who aren't familiar with Twitch, there's a stream and every now and then a creator can run an ad. And we wanted to improve that experience by allowing them to show the stream when an ad runs right. Wouldn't that be nice? Like you know, somebody's playing game they run In an ad, and you still can watch the stream that's like muted. So you know, you know me, I'm just like, let's just dive in just render is that, of course isn't very cool, because if you think about like really large creators who let's say they have hundreds of 1000s of viewers, if they ran an ad, we would be loading hundreds of 1000s of streams for that one viewer. And it's just, it's just an incredible amount of TPS that the video service has to undertake. So luckily, my manager, Wally, and some of the other engineers, like, you know, we really thought it out, like, how would we go about it, how we go about talking to the video team about handling this, and that, at least the way we solve this problem is we actually batch it out, you know, it's not necessary that everybody gets the ad at the same time. So like, if there were 100,000 people, maybe like, we would just disperse the ad, slowly. And then it's like serving like, 20 streams at a time or something like that. So yeah, I'm very glad we thought that went out through when It'd be terrible if somebody ran an ad and all of Twitch went dead.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I don't, I don't think you'd have a lot of that's for sure.

</p>
<p><strong>Nicole Archambault</strong><br />
Most definitely not. And it's so easy to not think about that stuff. As you I'm sure as you become more of a professional, you begin thinking more of those edge cases, it really is just this weekend, or some particular that I really worry about, because they miss that stuff entirely.

</p>
<p><strong>Ryan Burgess</strong><br />
I think a lot of it is not even necessarily being a beginner. I mean, I think it's just like, a lot of that comes with just being bitten in the ass. Start to you start to learn, you're like, yeah, no, we need to think about this edge case or that. And I think those are the times that it's just unfortunately, you make mistakes, and you learn from them, and then hopefully prevent them in the future. Jem, you just dive right in, right? Like your code is just on point. It's

</p>
<p><strong>Jem Young</strong><br />
pretty good. Pretty good. Mostly? I don't know, it depends. I, I'm more thoughtful now. But that's because I'm relatively fairly senior at Netflix. So I'm aware of the scope of the things that we're doing. I think the biggest failure is, I see people start, not necessarily Netflix, but in previous careers. You see people start with a problem, but they're not experienced enough to understand the scope of the changes that they're doing. I think that's where the idea of functional programming became stronger, because you have more isolated components, and you have pure components, if you will, like, well, there's no side effects, anything. That's the appeal of that. Whereas, you know, in school, we learned Oh, programming, which is all about side effects, like left and right. And you have to understand the scope of that. So yeah, these days, I'm more thoughtful. But generally, I do dive in first. And I try understand, like, what all is at play, and then I kind of walk myself back and say like, Okay, here's the steps that I need to get there. But it's not easy. And definitely in the microservice architecture, it's, it's so complicated. I try to explain to people how complex it is, and it works. But if you try to grasp it in your head, you can't do it. It's just like far, far too complex for any one person to understand all of it.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think also too, is it's really interesting to Nicole's points of like this planning ahead and being strategic about it. When you're dealing with microservices, or even cross functional teams, you can't develop in a box, you really need to know what's that other team doing? And how is this going to interact with that team? What happens if I change this? What are the rippling effects of that, and really, in the micro service systems, that is definitely things that happens you you rely on each other really heavily, you know your part really well, but you don't know other persons part that you're working with. You rely on them, and you have that conversation. If you just both went at coding, and in trying to solve the problem, it just wouldn't work. And so yeah, really getting back to how important it is to just do that problematic solving before diving in, I think is is just the reason for all this discussion.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. I love how you bring that up. Because yeah, definitely and like system design really defined, like really understanding your services responsibilities versus your upstream or downstream dependencies that like plays a huge role like in really like defining what the scope of work you should be doing and what you should be tackling like what problems you should be focusing on rather than handling it somewhere else.

</p>
<p><strong>Jem Young</strong><br />
I'll just give a shout out to it's one of my picks today. But what I'll do I'll just go into it. Just because one of one of my peers on the engineering team Cole Turner, he wrote a blog post on called what is or it's about, like what is being a senior engineer and he summed it up really well which is senior engineering is about the impact. And if you say like if you just boil it down to that sentence, that income Is all of it. So like, as a junior engineer, you start off like, hey, changes button color. Cool. That's an easy problem to solve, because that's encapsulated. If you break the button, you've only broken the button, like it doesn't ripple out. And it's become like more mid level. It's like change all of the buttons on this page and all the pages. And then as you move up, it's actually we need to create a reusable component that works across every organization about this button. And it's just like, it's the impact that you move up and up and up and up. And that's what makes us a senior engineer. So when you're talking about how do we approach problems, you have to think that way as you're moving up in terms of who's actually going to be impacted by that. And like, I know, I'm giving some easy fortune cookie, Twitter was where I sound smart. And it's easy to say, but in reality, like we don't know, the impact if I if I knew every impact of the code that I write, I'd be done already. I would just write the code and be done it but it's understanding that that kind of determines your seniority and how do you how do you go and solve those problems that really is kind of the differentiator between good engineers, and just okay, engineers,

</p>
<p><strong>Nicole Archambault</strong><br />
this is so insightful for me, because I was telling Brian, I don't really get a good look into big tech, like really ever the best look that I get is talking to especially when I went to conferences, back pre COVID, I found that I don't really get that much of that look into that world. Because when I talk to recruiters, I'm doing my best to get a sense of what it is at a big company. You know, we're starting I look at my, my folks, especially the new coders live a lot of whom I work with, because I try and get them started as soon as possible with those fundamental skills. We're overdue, I think, yeah, no, they really I do focus on the new folks. But then once they actually get their first jobs, I'm constantly asking recruiters from sales companies like what are you looking for in this? And they never actually mentioned program at it, like programmatic problem solving skills. And then when I bring it up, they're like, oh, my god, yeah, that's really important. And it's funny, there's a couple of things, that and documentation too, with all of these different moving parts, especially in big tech, and look, as opposed to working on your own smaller projects. And I'm trying to kind of run through in my head, like, okay, so if you're starting on this component of, you know, a much larger project and like a bigger infrastructure, what would you start with, like, it's not just a sample project, you know, it's a sample code challenge or something like that, where you have to write a couple algorithms, I almost feel like the problem solving approach would be almost it would be more important there.

</p>
<p><strong>Ryan Burgess</strong><br />
It's, it's funny enough, I think there's, you know, when you're on larger code bases, or like, we joke about the micro services, because it is super complex, but I kind of still think like a small project, there's a lot of fundamentals. They kind of apply on the big and small projects, like I joke that there's often times where I'm doing a smaller project for myself, and I jump in just thinking, Yeah, I'll just code away and figure this out. As I go, I can do that. And, you know, it's, it's not going to be breaking other services and things like that, because the ripple effect is really just my own project that I'm building. But then when I start to look back, or like I made a decision that ends up not working out so well, it's really hard to untwine and go back or I invite Augustus to come work on this project with me. And he's like, what, what is this like, I can't understand this at all. It's just like a mess of you weren't thinking this through. And so I don't know that it's necessarily you know, just applies to like a large code base. I think this is important just to think about, you know, what are you building and you're never going to get it perfect, but if you can think about that a little bit more ahead.

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah, the best places to start practicing this I say are with basic you even for you guys, I'd be like start with something basic. You might be able to solve that in like two seconds. But I want to see you write it out it's almost like back in school they were like I want to see you're probably you know you're writing out the long division I don't they don't do that. I just I just fuckin age myself right there like we had to do now we do the what is it the there's like a whole new system for it or something that the kids have? No, I don't have kids. No, they don't. They've done like, there's a whole different math style like and they're like adding it up and angles and doing this and I'm like, I don't know like that's math was always really tough for me. I have a nonverbal learning disability that wasn't diagnosed until 32 years old. And actually that I really go into my stripe Do you guys mind if I like pop into that really quickly, as far as sure love to come back? Yeah, I actually because some folks are like, how did you end up working with problem solving I kind of in general, I've always been a nerd when I was young, you know, I grew up in the MySpace, kind of Live Journal building, that was my first exposure with inline, you know, styles and just copying and pasting those good old days where you could just, you know, fumble around, I had really consider myself and I was pretty, you know, adept at computers, kind of playing online games, building websites, and what have you. And then I got to college and high school have been a struggle for me too, because of that nonverbal learning disability. So I was I fought through it, though, that has been the story of my life, it does not matter what I've been faced with, I will overcome it, period. There's no other option for me. And that's one of the huge reasons that I have been able to get where I was from a pretty messy background. So my freshman year at Wellesley, I was dating this guy who went to Worcester Polytechnic, and he was going for software engineering in a computer science degree. And I was kind of like, that's the thing. I considered like it and what have you, like when you think about computers, but I had totally missed the whole, somebody has to write the software part, you know, you just don't really think about that in the big picture. At least I didn't. So I started out the computer science major, because I was like, Oh, I'm pretty good with computers. I'll be fine here. So I get through, you know, one on one, and we're learning fundamentals and writing basic stuff. Oh, some fundamentals. Again, that wasn't even intentional bear shares. So I'm not going to say it was all gravy up until CS 230, which was my sophomore year, which was data structures and algorithms. It was a struggle for me still, I was like having difficulty because one of the the Hallmark things with a nonverbal learning disability is that if I can't build like a mental model for it, then it's just not gonna click for me, like, I need something tangible that I picture when I close my eyes, that I can manipulate, or something that I can like in it too. In order for me to be able to really make it click it, we just need more accommodations, like it takes me longer, but I can do it. So that's why like untimed testing what have you. So I get to computer science 230. And I am sitting here sweating bullets in class, and I can't write basic functions, things are moving way too fast. For me, I am getting blank screen paralysis, like crazy. And I had one of my best friends. I loved her. She was like total nerd status. And we hung out together. And she was hilarious. And I just be sitting there. Eventually, I started getting a lot more quiet. In our interactions, we'd be hanging out working on the computer science stuff. And I'm like, I don't really know what I'm doing. And she does. And I'm really feeling lost and confused. And I almost failed computer science to 30, which again, data structures and algorithms I've heard after the fact that people consider that to be a CS kind of bottleneck, like a weed out course, which is not fair. I let them convince me that maybe the struggle wasn't worth it. I changed majors I am at the point in my life where I try not to have any regrets. But DOL during my 20s, I had major regrets about that said I should have stuck with computer science should I would have money, I was graduated into the recession. But what happened to kind of lead me toward this direction is that I did actually end up coming back to it, you know, I've always said, if you find that you love something, you're always going to come back to it in one way or another. And so I ended up revisiting, I had a career, I went from customer service to web development. And I just again, when you're starting out, just build websites, and you don't realize, especially looking at the front end, how much is actually involved in that. And you have to really know what so of course, what comes up again, algorithms and data structures,

</p>
<p><strong>Ryan Burgess</strong><br />
data structures, I mean, you can avoid everything comes back to the data structure, you can avoid

</p>
<p><strong>Nicole Archambault</strong><br />
it. But there was something very different this time I hit it, I went to that really like fluidy period where I was like, Oh, crap, JavaScript, I hit this point. That's hard. And then I went back to like, Ruby, and then like PHP, and I was like, every time I got to that point, where I was expected to write something myself, I was just like, Shit, I can't do this. It's like Wellsley all over again. What happened? I thought it was so good at computers. I'm just at a loss. And there were really two, let's say foundational, but let's learn fundamental reasons. But yeah, I get to the point, again, with three different languages. And I'm like, What the fuck, I cannot get past this point, unless I miss, you know, unless I double back. And I actually wrote a blog post to that point and was like, how I scale back on learning, coding and switched, you know, back to programmatic problem solving. I didn't even know that was the problem until I had read a couple blog posts a lot. story short, the two things that were the biggest problem for me is that I had zero problems with programmatic problem solving skills back in college, I did not think like a programmer. And between that, and also self teaching skills, I was too stressed out to be able to learn, I didn't have an approach. I was using textbooks when textbooks were not the best way for me to learn. I learned, you know, at 29 years old, I changed careers. And I was like, What is this sorcery that suddenly I can learn all this shit, and I could not learn it before. And a huge part of that was online courses, and educational technology. So much better. Way better now. Yeah. And that's why I ended up creating online courses, focusing on educational technology, on problem solving, and teaching yourself. I hit all of them in my career, it was just, I've always been like, if you walk into a room, there's no one there. It doesn't mean you're in the wrong room. It's like setup camp, you know, there was nobody writing or talking about fundamental. Me. Yeah, my ice really is nothing, no chairs, good might chug this.

</p>
<p><strong>Ryan Burgess</strong><br />
What I also liked about it, too, is like the the part about self learning, I think is really important, too, is being also vulnerable enough to say like, Hey, I don't know this, and asking for help. Whether that be going to an online course, or pulling up a book, or leaning over to a fellow engineer, friend, or our industry is awesome for just online like people are helpful. I love it. People answer questions you ask on Twitter, or, you know, forums, what forums are old. Now, like you jump on this forum, you jump on Slack, or whatever it is, there's ways to get information that is so great. I definitely remember starting out not knowing all this, these things, and you just kind of had to learn as you go. But I definitely was always scared to say, Yeah, I don't know what I'm doing. Like, I don't know how to do this, it was is tough. But now at least admitting that and saying, Hey, there's an online course on this, or there's a great textbook, or there's so many resources out there, which is

</p>
<p><strong>Jem Young</strong><br />
it's so much easier now. Like people kids these days that they don't know how good they have it. Like, in the old days, there's no StackOverflow. Like, there wasn't even debugging tools. It was like, it wasn't console log, it was alert everything. And like, that's how you, that's how you did. And I think people miss that, like how far we've come since the beginning. And Nicole, your story is interesting, because I think some of what you're touching on is the issue. And one of my main issues with CS degrees, like I have one, but they teach you a lot of theory. And that's fine, but it just doesn't, it doesn't sink in because you can't apply it to anything. So honestly, if I if I had to do it over and I had the opportunity, I would get some CS degrees just so I have some like foundation in there. But I would try to get a job in the real world and then go back and get my degree because I feel like I would absorb so much more. Because I understand the importance of it versus like, oh, yeah, here's how to, I don't know, balance a B tree. Cool. What what uses that have to be in the real in the real world. But if I'm like, Oh, crap, I need to design a database. I don't know, why would I need to understand B trees very deeply. But it's, yeah, that's my promise. Yes, degrees is the theory. It's not

</p>
<p><strong>Nicole Archambault</strong><br />
I have those eight steps, I can run down them. And I'm really curious to hear your feedback. So there are eight steps here that I have, that I they're very basic to solve, for example, for a new coder to solve a problem, like a challenge, a code challenge or something just from scratch, where they give you a challenge, here's your input, maybe they could do a little bit of, you know, the testing built in on the platforms, you know, it's going to check if you're getting the right output. And that's where a lot of folks really do get caught up. And again, being a professional developer, it might be like, No, that's not usually a problem. For me. It's a big problem for some folks. So step one that I have is just to read and understand the problem. And that seems like something that's like so basic, but truly, I don't think that a lot of the folks really going in, like if you can't explain it to me, then you don't understand it. And that actually leads him to step two, which is rephrasing the problem, you're going to use your own words, you're going to move things around, you're going to like for me, I put bullet points down the bottom, I use caps and bold to kind of really indicate what I and I put it right in my code. Other you know, I will do every part of this in my code enter. Step three, is to identify your input, your output and your variables. So this is stuff that you can actually do early on, and it will help to give you a sense of what you're going to be working with in terms of data structures, in terms of you know what important information you have to save at every point. And you might not even have an answer for some of these, but it's intended to get you thinking about it. You want to make sure you know what's going in what's expected to go in, and then what's expected To go out expected is a very new word for some of these folks too. And it has a lot of implications. But the step for vinyl, and a lot of people jump in here, too, I just did a podcast episode on this, you break down the problem in step four. So you know, I do pretty commonly a shopping, you know, going grocery shopping might be like a function. But there's so much that goes underneath it, you know, you have to get into your car, you have to maybe you have to make a list, it depends on the parameters of the problem. But at the same time, you have to break it down. And then at that point, you have to pseudocode. At Step five, you start pseudo coding. So you're going to take all this stuff that you've already prepared, you've already kind of done like a mason Plus, with all of your information already set up. And so it's not hard every step builds on the next and it gets easier and easier with each step. So your pseudo coding, you basically have an, you know, a story written in English and what you're going to do, and writing your code in step six, is going to be basically translating it, that stuff to look at is so much easier to look up on, like Stack Overflow asking questions than if you were just like, how do I solve this problem? Like, I mean, I wouldn't even want to ask something like that on StackOverflow. To be honest, I probably be skewered. But like at that point, Step six is when you're writing your code. And then of course, after that was step seven, you're going to debug, and I typically help folks with that, you know, to recognize where they can really tighten things up where they can, and optimizing is Step eight. And that's where we look at what you can tie it up the debugging, you know, there are lots of tools that we can use, as well, depending on what you're working with. But those are basically the eight steps. And that's it, you can use those steps with any language, any stack, any technology jetan beat out the tea in general. And yeah, that's the beautiful part of those fundamental skills, is that you can cares. That's the beautiful part, because everybody can follow those steps and really make put their solution together and make sure they have a tight solution before they even write code. So yeah, I'm curious to hear your feedback on that. Do you guys follow that even loosely,

</p>
<p><strong>Ryan Burgess</strong><br />
I would definitely say loosely, I think that's there's certain things where I'm like, Yeah, I could maybe see myself doing it. But what I do like about the steps is more the thinking of it. It's like just like putting a little more rigor around the thinking upfront before jumping in. So things like the pseudocode. I don't know that I'm likely going to do that. But I jumped, but I don't think I would, but wireframing. And thinking about those interactions and meaning like a wireframe of like the flow and how that's going to work. That really helps me think about how I can break down a problem, or even start to build out components, which in a way is kind of pseudocode is just not getting really granular is like, Oh, here's the exact thing that's going to happen. But if I'm working with a back end engineer, where I'm expecting a response, or there's a back and forth like that, then that is a little bit of the pseudocode. Because you're kind of mocking out what I'm what's the expected response that I'm getting, and what am I posting back to the back end? So I think there's a little bit that I think like you've just summarized it really well, in all these steps, I'm likely going to skip some of those, but not always, maybe I like the rubric to say just think about these steps, and then choose the ones that apply. That's my that's my thought on it. But I'm curious on gem and Augustus I jumped right

</p>
<p><strong>Nicole Archambault</strong><br />
in, I think Sorry, just in terms of the wireframing. Like you mentioned, that's where they haven't heard in a minute. I think that's really your steps three and four is between identifying your input. Yeah, it's kind of between those two, and then breaking down the problem adequately. I think you're kind of touching on those two, during your wireframing experience.

</p>
<p><strong>Jem Young</strong><br />
i Yeah, some of those steps are definitely the resonate with me in there. Some of them I apply? I I think the failure and I've seen this in interviews is one it's I talked briefly on earlier talking about like senior engineers, Navy engineers, blah, blah. The mistake I made moving from a startup to like a more senior role is I expected the problem be laid out clearly. And 99% of the time now, it's very ambiguous. Ryan, I'll say the build is slow. I need you to take a look at that and fix that. And like I'm like, Cool, no problem. Right. And I got you. And then months, months later, it turns out that was actually a really, really, really insanely hard complex problem. i And I've seen people fumble in interviews on this because they're coming from a smaller company where the the problems are more encapsulated. And then I asked them a very high level broad question, and they can't break it down properly, because they're used to being framed in a more specific manner. And like I've seen I've seen it time and time again, when people just failing interviews because like, they can't like, widen their scope. But they're used to like such a narrow focus,

</p>
<p><strong>Ryan Burgess</strong><br />
right? Like in your example, Gemma D like me coming to you and saying, hey, the gem the builds not working, or it's really slow. Because in this point in the code, or this area, this needs fix. And then you're like, Okay, I can go fix that, it may still take some time, but you're, you're actually thrown right where you need to be versus, hey, that's this is slow, man, you got to go figure that out.

</p>
<p><strong>Jem Young</strong><br />
Exactly. And then when you get to, I guess, like staff or principal engineer, no one tells you the problems, you find the problems, and then you go solve them. And I wish we would articulate this more in terms of like engineering as a community, like what's expected. Because you expect these problems that looks like this. And every time you move up a little bit, they look a little bit different, they look a little bit different, they look a little bit different. Until there's not even a problem anymore. It's just like, well, crap, what do I do now, if they're paying me to do something, I need to go find these problems, and then go solve them. So I think the steps are really good, it's a good place to start. But I would also say, like, make sure your scope is really broad, like, and then narrow it down. And don't, don't assume all problems will be handed. Because they will be

</p>
<p><strong>Nicole Archambault</strong><br />
pretty, ill defined it my experience, I'd say, you got to make sure I said if the problem isn't written down for you're like in a code challenge, which you're gonna take advantage of that now. Because that's the most clearly defined problem you're ever going to face.

</p>
<p><strong>Ryan Burgess</strong><br />
Even then, I think, code challenges on like, you should ask follow up questions, right? Like, yeah, viewers or anything like, or at least in my opinion, as they should be a little bit ambiguous. And like, you should ask questions, because there's always trade offs and things like that, too. So Augustus, are we off base? Are we?

</p>
<p><strong>Augustus Yuan</strong><br />
No, no, actually, a gem pretty much stole what I was gonna say. But sorry, first, I want to. But But actually, I wanted to say that Nicole, like I was actually thinking about it. And honestly, I think if everyone did that, for the interview, they would do so much better. I actually see so many candidates that skip some of those steps, like even like subtle ones, like defining the input and output. Like I think some people don't even think about, like, oh, I can actually change that. Like, I've had people who like, it's like, alright, this function, you know, just print out a bunch of stuff. And a lot more senior, and the engineers would be like, oh, you know, this would be better as like a helper method and return to string. And then, you know, it'd be reusable and stuff like that. So I actually think those one to one to eight steps are very, very useful. But I do really, really agree with Jem like, especially as like, you get senior, I feel like that, number one, that problem is so vague sometimes. And you really have to work like backwards from, let's say, you're working with a PM, they want to ship a feature, at least in my experience a lot of PMS. Think of metrics, like how do I move this metric? Here's a feature that helps me do that. And you really have to like, dig into like, okay, so if this feature, if I just did this, would that be cool? And they're like, oh, no, no. No, like, I'm trying to move this metric. And it's like, okay, so it's like, it's like, really, really, you're redefining the problem. So and I think you kind of touched on that like, number one. And number two, you like, clarify, define the problem, and then rephrase it to yourself. I feel like there's like some part where you really just have to align with everyone on this is the actual problem we're trying to solve.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that I guess this in nickels, points that was early on rehearsing and go through does this actually make sense? Yeah, the good point is, is when you're working with cross functional partners, is this is the way I've interpreted? Is that clear? Because yeah, you could go off and say like, oh, yeah, I totally get all these instructions. And they're like, that's not what I said. I mean, you thought that's what they said. But it wasn't clear. So I think that's a very valuable point.

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah. And you had actually mentioned, as well, the focus on doing the rephrasing what have you, I do put emphasis on asking questions, follow up questions. But when you're new and working with the code base, say, or with the code challenges, I guess that that would involve kind of going into the forums, maybe because like, who else? Are you really going to ask if you have questions, but I really want to normalize asking questions about the problem. I don't care if you don't really need to know them. Like if you already know the answer, like frame a question for it. Because once you get into like, your type of sphere working with these problems, not only are they often super ill defined, but you have to like figure out the problem yourself to begin with. And you have to ask about the parameters. You have to you know, you can break stuff and then ask you know, is this what you wanted and then kind of go back but you're gonna waste time at the end of the day, and a lot of energy if you're not making sure that you understand To the what you're actually trying to do, and how you can do it. So we want as much information about the problem as possible. I'd say if you can come up with three questions about the problem, just to like clarify something to that. I really like the idea of that, because I think that's one of the most valuable skills that they could probably, you know, the new coders could probably learn is to be curious about these problems, because they're not going to be defined for them clearly, at that point, when they're professionals. And

</p>
<p><strong>Ryan Burgess</strong><br />
it's, it's never gets clear. It's never defined, if you're ever looking at

</p>
<p><strong>Jem Young</strong><br />
design 90% of the work is step one, finding out the problem. It's like, it could take weeks, it has taken me weeks before to mention that for this those steps, like, Yeah, I think we all approach the problems a little differently. In some we agree on some we don't. But I think for an interview, those steps are perfect, because like the interview problem is going to be encapsulated. And it's not going to be it shouldn't be too ambiguous if you're getting a good interview, and like knowing how to approach a problem, rephrase it, break it down, do some pseudocode, and then translate that into actual code. And then finally, at the end, step eight is optimize which people tend to overdo and then don't solve the problem. I think it's a perfect rubric for breaking down the interview problem.

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah, I find too, you can go back later. And the problem that you found that maybe there's a better way to solve something, you can maybe combine some steps. But do go back and change your pseudocode. In that case, do go back and change show that you change your approach. That's another one of those things a little extra step, but man, it's gonna make all the difference in the world. So you think, though, that going in, or it sounds like you know, going into a tech interview and really kind of doing the long division on it, so to speak, showing the way that you think that that would be a big benefit to bring someone onto your team?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, here's why. And Jem, you can add more, because as you brought it up, but for me, you're explaining your thought process. So it's not even to me, if you get the right answer didn't mean, it's not so much about the right answer. If you've walked me through your thoughts, and I can follow that along. That's huge. To me, that is the important thing. It's not I'm dinging you because it didn't work. It could work and you I have no idea how you got there, your thought process, and I might still not be that happy for you like, oh, cool, that work? Did you just get lucky. But having someone walk you through that is huge.

</p>
<p><strong>Nicole Archambault</strong><br />
That is it shows so much about how you think too, which is critical, I really want to make sure that people are focusing and I use kind of the term that Mason plus having everything, you know, ready and set up kind of like so that's like preparing all of your ingredients before you actually cook. So and it's so esthetic, I love seeing, like people setting up all their stuff in little containers and what have you. But really, that's it is just having all that setup, I would like to see somebody's mind the way they think, you know, there are so many ways that you can do it before you even get to that second interview, you know, make sure that you get to the second interview. By doing that, you know, or whenever they're going to give you a whiteboard interview. Actually, I don't know if that's as common as it isn't to like actually at your companies to do whiteboard interviews with like, a certain it's common with the big tech companies. I do end up so they're writing like entire books on how to like, crack the interview. Yeah, and that's where it's really important, though, to be able to walk through that long division, because then they know you didn't just use a calculator, which is case like, you know, stealing some code or you know, having it written on the inside of your arm.

</p>
<p><strong>Ryan Burgess</strong><br />
I think there's a lot of amazing advice. If I was to summarize it, it's like, take a step back before jumping in. And that will lead us right into Hicks. So each episode of the front end, podcast, we love to share things that we found interesting. Jem loves to share us the most ridiculous things that exist in Silicon Valley. I shouldn't say in Silicon Valley, just with people with too much money that want to purchase something but yeah, let's jump into pics. Augustus you want to start it off share? Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
it's crazy. You brought up gem because one of my picks is a topic gem that I would love to pick always picked. In fact, that's my first pick. My first pick is gem. My so my one and a half picks is Yeah, gems. giving a talk on why interviewing is terrible. Which very coincidentally, we were talking about. You know, definitely think you should check it out. You know? This? Yeah. I'm very excited.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, seeing the preview of it.

</p>
<p><strong>Augustus Yuan</strong><br />
It's good. Oh, yes, yes, it's part of React Rally. So definitely check it out if you can, and then my second pick. So ever since COVID I've gotten really obsessed with coffee. I I will I guess I've always been obsessed. But I think I've gotten to a new level where I go to the espresso subreddit. And everyone, everyone convinces me like, oh, like, yeah, you could get the barista Express for 500. But if you move to the good kiya classic, which is like 1200 light years difference, yeah, it's like, it's like, so but, but my actual pick is, there's this person named James James Hoffman. He's a YouTuber. He used, he used to do barista competitions. So he knows his stuff. And his stuff is very entertaining. Teach us a lot about what coffee is, and he has so much passion. I just really enjoy watching his videos and you know, think it's worth checking out. I don't

</p>
<p><strong>Jem Young</strong><br />
drink coffee, which like blows people's mind. I don't know why, but

</p>
<p><strong>Ryan Burgess</strong><br />
you're missing out.

</p>
<p><strong>Jem Young</strong><br />
Ah, now, I put coffee people in the same category as wine people. I think 95% of people don't know they're talking about like, sure if it's expensive. It's good. He's good. Yeah. And like, I've seen enough documentaries where, like, if or studies that if they give people a cheap glass of wine, and it's expensive, let's say it's better. And the same goes for coffee. So like, I

</p>
<p><strong>Ryan Burgess</strong><br />
What's an expensive cup of coffee? Like? Like five? $10? Like, what are we talking here?

</p>
<p><strong>Nicole Archambault</strong><br />
15. Hot coffee. Yeah, coffee.

</p>
<p><strong>Ryan Burgess</strong><br />
I like iced coffee.

</p>
<p><strong>Jem Young</strong><br />
So you're not purist. There's infinite money you can spend on coffee, just like wine. There's infinite money you can spend on it. I don't know, I question people like that teach their own. I'm not not gonna say, I guess you're wrong or anything? Because like no to teach.

</p>
<p><strong>Augustus Yuan</strong><br />
I admit, I don't know, coffee. That's,

</p>
<p><strong>Jem Young</strong><br />
I don't think most people do. Like, that's, that's my theory, I would agree. And I do think that like getting knowledgeable about something like you're doing watching the YouTube videos and things like that does help you appreciate things more like the more Michelin star food I eat, the more I appreciate, like, even regular food. And I think there's that level. But I think there's the other level where people don't spend any time educating themselves like you were doing. And they just like buy expensive equipment and expensive coffee and be like, This is surely the best coffee in the world because I spent $10,000 on it. And you know, maybe they're right. Maybe it is and like who am I to say different but anyways, that's my opinion on coffee people and white people. You're welcome. There's already my pics. My

</p>
<p><strong>Ryan Burgess</strong><br />
just a gym slash rant there.

</p>
<p><strong>Jem Young</strong><br />
I just want to preface my talk on why interviewing terrible. At the bottom it says a gem young grants. So I don't want people to get their hopes up. It's literally me going on a rant about interviewing. So it's good to have a platform to do it. My first pick is a it's a pic by or it's it's a page by Lenny Rucinski. I think I'm getting that wrong. But anyways, when I sit down to write something like write up a technical problem, the hardest part I always have is where do I get started? Like what do I say? Because my my inclination is always a narrative style. Like, I like to tell a story much like my coffee read. You heard two minutes ago, like I like a good story. But when you're talking about technical papers that other people have to read. That's not really helpful. You want to get just to the point like Brian reads 1020, probably 50 Docs a week. You can't have like whole story. So what's helpful is having a template to get started with the answers, just basic questions. And Lenny came up with this list of here are my favorite one page templates for describing a project. It's mainly for project managers. But I find it's useful for anything, especially some of the larger scale projects we work on. It's just like, here's how to lay out here's how to structure questions. And here's how here's how to lay them out. Very similar Nicole's way of breaking down a problem. It's the same thing. Or it's similar, but for writing a technical doc. And it's been so helpful, just because like I said, I sit down and I'm like, what do I get started. So just having like, something filled out a little bit has really been helpful. My second pick, I mentioned that earlier, one of my colleagues, Cole Turner, he has in asked me anything page. And Cole is a fantastic writer. And that shows and a lot of the work he does. And he's just answered dozens and dozens of questions about like, what it means to be a senior engineer. How do I join a Fan Company? And he just like gives honest answers. And I think it's one of the more clear, just way of getting answers from someone who's actually in Silicon Valley who's not like trying to push our way of thinking or anything he has no, he has no buy in for answering these questions. He's just doing it because he wants to help the community out. My favorite one is what is a senior engineer supposed to do? I'll leave you to read that yourself. But it's just it's like the best answer I've ever read on what a senior engineer is and what we actually do. So that's cool. Turner's asked me anything. Shout out to him. My final pick is do you all so guess this Ryan? Nicole, do you all have Are you familiar with a foam roller?

</p>
<p><strong>Ryan Burgess</strong><br />
I'm very familiar because I picked out on some previous episodes.

</p>
<p><strong>Nicole Archambault</strong><br />
I love them, especially if you're doing like work. Like I have been doing a lot of squats and like my calves are starting to really feel it too. So being able to use the foam roller Oh, it hurts to at first, but that hurts so good.

</p>
<p><strong>Jem Young</strong><br />
Yeah, they're insanely useful. But what if I told you all you've been doing it wrong this whole time? What would you say to that by

</p>
<p><strong>Ryan Burgess</strong><br />
doing it wrong? Is it because I only paid $20? For my role? Yes,

</p>
<p><strong>Jem Young</strong><br />
this week's Valley silicon 50. It's the part of the show where I pick things that are so expensive and only exists because we make too much money in Silicon Valley. There is a smart IC that foam roller. I will never run out of material for this roller. It's a smart roller, because unlike you pours using your regular foam roller, this one is Bluetooth enabled. So you can adjust the sensitivity. Because

</p>
<p><strong>Augustus Yuan</strong><br />
what's the intensity? Intensity even do you can

</p>
<p><strong>Jem Young</strong><br />
adjust the intensity of the roll?

</p>
<p><strong>Ryan Burgess</strong><br />
That is fair, I will say like you can have different like density on your foam rollers or softer ones. There's harder ones. So hey,

</p>
<p><strong>Jem Young</strong><br />
that's so why not a smart one that doesn't know how much measly $150? That's not

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah, to my pocket change.

</p>
<p><strong>Augustus Yuan</strong><br />
I rather I rather have 150 off a cookie a classic

</p>
<p><strong>Jem Young</strong><br />
or buy two foam rollers for $20. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, you could buy your soft, hard and medium for like, probably 7060 $70 total.

</p>
<p><strong>Jem Young</strong><br />
Yes. But then you wouldn't have the smart foam roller and when people come over and see your smart foam roller sitting in the corner or whatever. Would people do

</p>
<p><strong>Augustus Yuan</strong><br />
your closet? Yeah. Innovative wave design. Yes.

</p>
<p><strong>Jem Young</strong><br />
So if you're in the market for a smart foam roller, Thera body will sell you one for $150 that has Bluetooth connectivity. I don't know why, but that's why it's fairly silica.

</p>
<p><strong>Ryan Burgess</strong><br />
Nicole, now you got to follow that. What kind of pics you have for us?

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah, bet. Like I'm not trained, but I was like, a little bit stuck. And I'm not gonna try and do anything really programming related besides one book I have that I swear by. And I didn't bring it in here. It's on the wrong side, right. So often. By V, Anton sprawl, we're talking about programmatic problem solving today. The book is called Think like a programmer, an introduction to creative problem solving. And this is I'm really hoping I was talking to I believe it's professors bro back in them last year. And then just everything was busy. But I'm really hoping I can get him on the podcast, to ask some problems or some questions about his problem solving approaches. The crazy part is it eventually does go into I think they have a Python version of the book. In the beginning, they talk about puzzles, and ways to really begin to think programmatically and kind of steps for approaching. But again, I was like, I can do this with no, no code. I can do this. Like, I'm just gonna, I love challenging myself that way. So like my course. And a lot of the learning that I've done has come from books like this. But it is really comprehensive again, that was think like a programmer in Introduction to creative problem solving. That's by the Anton spell. My second one is absolutely so I've been hosting that Zoom hangout on Saturdays, because we're not supposed to go out and you definitely shouldn't be going out to party with people. But yeah, I have like tons of people that come to we've been calling it the after hours vibe, I decided to brand it because I'm a big nerd. And then people show up, they pop in, I share the link, obviously, not publicly. So I gotta give big shout outs to, to my novice folks, we have been a growing family. But I'll tell you, I have more of a social life now than I did before the pandemic because and I met so many amazing people that have supported me 1,000% over like everything. And we just talked during the day, it has made such a big difference. And these are all just tech industry folks, that kind of like they move toward me. So they're all as weird as I am. And like they we just kind of created this big old dysfunctional family. So yeah, big shout outs to know this by planet. I love you all. And the last one, I actually might have to kind of combine a couple because I really couldn't decide. It's between the taco hell grilled cheese burrito. And you should probably get it with state because it's better than beef in my opinion. They will charge you a little bit more but you're making tech money so it shouldn't be a problem. And Battlestar Galactica, I just finished watching it like the remake of your there supposedly going to be another remake soon. I mean, unless Edward James Olmos and Mary McDonnell are in it and like everybody else I'm not really interested in I feel like it's a little sacrilege, but you know, but yeah no Battlestar Galactica man I am. I love that shit.

</p>
<p><strong>Ryan Burgess</strong><br />
I have two picks one is actually a nother podcast but it's an episode of on a podcast which is I found really interesting. It's the 20,000 hertz podcast episode on Netflix and the sound the Tom sound when you start Netflix when you see the logo come and so it's really interesting and has Todd Yellin, someone that we work with at Netflix, he he's talking about him and his team and how they came to like wanting a sound logo and talk how they got to that logo and then it's just really really interesting. And then they even pull in the sound designer to talk about how it was created. So I really really enjoyed it especially it's a sound I don't even know how many times I've heard I'm sure everyone listening to this many many times

</p>
<p><strong>Nicole Archambault</strong><br />
hearing it in my head over and over again.

</p>
<p><strong>Ryan Burgess</strong><br />
And then a Netflix Original I got a why not keep going on the Netflix theme one that's not new, I started watching it and then never came back to it. But it was ugly, delicious. i It's such a great show. Just exploring different foods and and really the history and and like really depth on historical reasons and ethnicity around the foods. I love it. It was super interesting. I highly recommend it. Before we end the episode, I want to thank a Kol for joining us. It was a pleasure having you on you shared a lot of great knowledge with us. Where can people get in touch with you?

</p>
<p><strong>Nicole Archambault</strong><br />
Yeah, I am mostly on Twitter these days, which was something I never thought I'd say until like after 2015 When everyone's like dude on Twitter. So I'm on there got a kind of strange presence, but you can follow me at it's lovey on code, but it's L EY V I E underscore E N C O D so kind of a play on Libyan rose Bolivian code so be sure to follow me there. I also have all of my stuff like the blog, the podcast and my courses how stuff on my main site at Levine code dotnet so just like the name of my Twitter handle but without the underscore and then got that

</p>
<p><strong>Ryan Burgess</strong><br />
thank you all for listening today's episode you can find us on front end Happy Hour comm subscribe this whatever you like to listen to front end Happy Hour on and you can follow us on Twitter at front end ah any last words

</p>
<p><strong>Jem Young</strong><br />
kind of what that Taco Bell she's

</p>
<p><strong>Nicole Archambault</strong><br />
I know I'm sitting here looking at the clock now what like, Oh man, I only got half an hour now that I have

</p>
<p><strong>Jem Young</strong><br />
you can make it go fast.

</p>
`;
        return transcript;
    };