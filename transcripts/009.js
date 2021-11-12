module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the ninth episode of Front End Happy Hour podcast. In this episode, we're talking about all things animations. We're excited to have a special guest join us today, Sarah Drasner. She's currently a manager at Trulia and known for being an animation expert. Sarah, do you want to give a brief introduction and tell us what your favorite Happy Hour beverages? Yeah. Hi,


<p><strong>Sarah Drasner</strong><br />
thanks for having me. I'm a manager of UX design and engineering. at Trulia. I manage the component library over there and also do a lot of work with air motion sign language. And my favorite Happy Hour drink is the Kentucky mule which is like a Moscow Mule. But

</p>
<p><strong>Ryan Burgess</strong><br />
we had one of those. Like I've had the q1 which is like Donkey or something. Copper glasses.

</p>
<p><strong>Derrick Showers</strong><br />
I thought it was just calling this email. I learned

</p>
<p><strong>Ryan Burgess</strong><br />
so much better. All right, and let's go around the table quick and introduce ourselves as well, Sarah.

</p>
<p><strong>Derrick Showers</strong><br />
So I'm also Sarah. I'm Sarah Fetterman. I'm a UI engineer at LinkedIn.

My guess is an engineer at Evernote. Jared showers UI engineer at LinkedIn as well.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a UI engineering manager at Netflix. So before we get into today's discussion, as each episode, we usually like to choose a keyword that if it's mentioned, we will take a drink. What do we decide today's episode keyword is transition transition. So every time that we take it there say the word transition will take a drink. First I wanted to kind of talk about is when is it good to use an animation? And when is it not such a good idea? Or sometimes it can be overused?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I mean, I guess so. That's something that I talk about a lot. Because I think people think that just because I like animations that I think everything should be animated. And that's definitely not true. I think part of the reason why that animation gets a bad rap is because people tend to over anime stuff in the best animation stuff that's like, you're not even calling attention to the fact especially if you're like doing UI animation, that people don't even notice that animated per se, their pages notice is a little bit more fluid. So I think anything that calls attention to itself as like, Hey, I'm an animation like, a flash in Frozen phase path.

</p>
<p><strong>Ryan Burgess</strong><br />
Finding because that's what always makes me think, right when I hear animations is like, I started seeing a lot of flash, so kind of dates myself a bit. But that's what it was gross, like, oh, let's build a great flash animation. There's always a skip intro everyone hit when actually watch those long animations?

</p>
<p><strong>Derrick Showers</strong><br />
Right, right. Exactly. Yeah, I do think that there's a time and a place for like, beautiful, all encompassing, you know, like some movies that they're like movies site is just like, let's impress people, and they're not trying to get you to like, do stuff. But if you're like getting in the way of people performing actions on the site.

Yeah, I've seen like, I have a good afternoon or good example of it. And I've seen it's just like when you have like a C, post or something like, hopefully we did originally, it's just kind of fades in circles. It's just like, it's just subtle enough. Not now, but it just looks really cool. If you see that kind of thing on.

Yeah, that's animations are probably the ones that provide additional games user, like, what you're saying. And also something like providing context when the modal comes in just all sorts of things that aren't like sugar, but are both useful. Yeah, I talk a lot about context shifting, because I think that when you're like at work, and people are constantly jarring you to do some other tasks, each unproductive meeting works the same way on the website. So you can retain context and spatial awareness for the user, like the users always trying to figure out where they are in this new environment. He kind of like, keep that going for them. Also, like performance animations really nice for like waiting times and loading times. So I can make actually, it made it feel less like arduous, like, it's you're actually like, pinging the server for something and they're like, not sure what form I can actually

purchase by showing that

</p>
<p><strong>Ryan Burgess</strong><br />
like loader, so it's like something's happening. It's just not done.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. Yeah. Let's keep it Yeah. Crazy. How different perceived performance.

Yeah, like speaking of like, one ad that I had was like, you know, the parallel like, parallax like that was like something that like, I feel like they caught on as a trend and people did really well. Then tons of people started doing it and like precise I just it just didn't, it didn't make any sense. And like, it's just like shows like how like, animations don't always necessarily, or yet people over deliver.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm guilty for it, I had to do it on a project that was like the designers wanted to overdo on. And they did it. And I've helped her do it

</p>
<p><strong>Derrick Showers</strong><br />
yet, but I think there were I think there were really beautiful parallax sites and like, I think that they were really nice ones and we thrown them out in tight laces, like the danger is like, we throw them out entirely because it like was just overdone in use for things that it shouldn't have been used four times when you're like, really I just need to read this, like moving it around, and stuff like that.


I think a good

</p>
<p><strong>Ryan Burgess</strong><br />
example that I think that comes to mind was, he has a solid coin card that you could click like any visa or debit card onto one card. And I remember their like campaign site or promotional site was it actually, as you scrolled showed how the card was even collapsible and it showed how the card actually work. And there's like three or four pieces all being transmitted to one card and then swiping. And I was like, Okay, that was like he was totally being parallax scroll to the max, but it actually made a lot of sense.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, it was informative, and it kind of connected each section. Yeah, like otherwise you just like you kind of get sick of like the old feature pages where it's like, there's a section. It connected them all really seamlessly. But that does take more time and effort. Yeah, well, yes. And badly. It's done really badly. And when it's done while you're like, Okay, that's why we have these.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And that was one of the ones he did that. Yeah. Yes, you can use parallax scroll.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, it tends to work better, like things that are particularly supposed to be an experience rather than like an informative article, timeline or some kind of like, exploration was really just supposed to be you know, I'm here to explore and not just figure out what the specs are on my new Apple.

I think speaking of Apple,

she's gonna say, talk about the battle trashin.

</p>
<p><strong>Derrick Showers</strong><br />
Some of their stuff when apple.com is really well done, because it's very subtle. And it has like some sort of parallax analysis animations, like just throwing the Asian or seeing the way you connect your clients calls or it's just like a very simple like, you don't even know that it's happening. And let's

say I disagree with that, especially like when they came out with that, like, big old site about the new Mac Pro. It was just like this whole parallax experience. And I'm like, I tried to find the specs, figure out. It just was impossible to find anything like, Yeah, somebody

ever died. But there's something more like this.

I think the New York Times does a really good job with some of them. They had like one where it was somebody's journey through Alaska or something. And it was like, zoomed in and you can kind of see stuff. And that one was really nice, because I think people shared it more because of the hair. It was not getting in the way it was actually like, made you feel like you're part of the journey. And I actually read more. I don't read on the internet

</p>
<p><strong>Ryan Burgess</strong><br />
is an animation.

</p>
<p><strong>Derrick Showers</strong><br />
And I think I read that article, once all the way through just because I think it's interesting to

</p>
<p><strong>Ryan Burgess</strong><br />
share. Because when it is not well, people regardless, hopefully it's a good article, but it's also like, Hey, did you see like all this great animations in there and people will share it. If it's done right now, just like he did you see overkill? No one sharing that, or else they're probably hating on it and sharing it.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, and even these sites are probably an example of like, going really far with animation, I would never actually do that on Trulia site or something like I'm really excited. I'm really trying to like, get out of the way of people trying to look for houses, and like making that home buying. make more sense. And stuff, as I'm sure like Netflix and things like that you people don't want to like stop watching movies. And watch you

</p>
<p><strong>Ryan Burgess</strong><br />
could get quite like every time we're gonna show you this crazy animation. We're like, I'm trying to look through these houses. And there's all these crazy transitions. I know I felt like it was a while. But yeah, I think it can become too much. And then you're getting in the way of the user. So I'm also interested, you do a lot of animations with JavaScript. What are some of the libraries that you tend to use or like to use that actually help you add animations?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, that's a great question. I actually try everything because I'm just a naturally curious person. I can't think of a single animation tool that I'm not like poking around and trying to see how it works. I do tend to default to things up because They've just like, it's just easier. They solve so many problems. Like I think the biggest thing like I strayed off of Greenstock for a minute at work, and then went back to it because solves cross browser consistent inconsistencies. And that, especially for things like responsive, and mobile ends up being a really big deal, like, Hold Safari, mobile browsers and stuff, you're just like, I don't want to think about this. And GreenSock really does that heavy lifting for you. It's really performant. I remember CSS tricks article like word in benchmarks. So all of these animation libraries and poems, like this was before I was working with it very heavily, and started working with it more heavily, because I was like, Oh, my God, this is like, as good as needed. That's, like, hard to do. So I tend to work with green sokola. I've been working with React motion a lot lately, because working with React, I'd delve into that a little bit more. But uh, yeah, I mean, I just I try everything. I'm also really curious about modal js, which is written by a guy named Lego mushroom. He's like a super, super awesome. And it's in beta right now. So I wouldn't recommend it for a production site. Because I'm actually like, watching that repo. And he's just updating like crazy. So until it gets fully launched, I was playing with talking to like, put it on,

work with.

But there's, there's a lot to offer he offer in each one of them. I'd say Greenstock covers the most ground of anything, but everything has like something they do really well over

the question. This is like a, probably a very beginner question as to generations. But so I know, there's like a lot of different ways to animate SVG, like just using SVG itself, right? And then there's you can do it with CSS, and then there's libraries. So like, what's the advantages and disadvantages? over doing it one way or the other? Sounds like you prefer, like a JavaScript library way.

Yeah, I mean, um, so lately, I've been like rewriting people's Canvas animations, and just SVG in vanilla JavaScript, those are fun and to learn things. So yeah, there's definitely like, ways that everything's better. I'm used to like letting green sock or some other library do the heavy lifting. But it's kind of fun to see what happens when I do that will just use RequestAnimationFrame. CSS animations are really good for a few different transitions. But I make really complex and long animations. And when you have a timeline, having like, once you're starting to like change delays, something like a timeline is really, really awesome and green sock offers. mo.js also does stuff like that, I would say that green sauce timeline is probably the most powerful for like longer animations. They also solve cross browser transform origin issues that exists in SVG, that CSS has it, like it's just part of the spec. One example of this is like if you've transformed an SVG element, or property inside the SVG DOM, and then you try to apply another transform origin, the way that that spec is interpreted is really like counterintuitive, and Greenstock just like Pyxis that they've got, like, stuff that they're doing under the hood, like you like the way that you assumed it would work. applying those kinds of transitions over and over again, the more complex it is, the more you want a library that handle the stuff that you need. If it's just a couple of things, it doesn't really matter. To be honest. Like if you're just doing like one or two things, it's fine. Yeah,

I would say that like, the more complexity we get of you just fading in a modal or something that probably assesses

Yes, and I don't think you'd want to do you know, SVG to probably one of these? Well, yeah, sure. I generally, just kind of, if it's like something that's a function, that should be JavaScript, and it's like CSS, or if it's like something that's like an enhancement, it's usually CSS.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess you could also go and add a class on on a function like on a click or something, add a class to new CSS that way, but you're already in JavaScript. So

</p>
<p><strong>Derrick Showers</strong><br />
you need a grade three dot O, because class operations are scoring so that I only know that because I was like bugging Sarah. So can you help me get this? Like he's like, actually, when you're trying to do more, like class and mission and whatnot. It gets a little confusing. A little JavaScript discussion using transitions versus animations, CSS, it gets a little weird See transition? I did. I did.

I actually I know while I was creeping around, and like I saw you posted an article about

Sarah. And I was always investigating an article about how you talked about using green sock with react and how there's like this react green sock. And I was kind of curious about your thoughts on that, like, green green sock into that pose hat.

Yeah, um, I would say that like green sock doesn't always work with React, but I've gotten it to work quite a few times, if you just start attaching one timeline functions with one events, and it's fine. If you're trying to do something a little bit more intense and like with more manipulation, then it doesn't work. So well. I haven't worked with Greenstock destock enhancer that much. But what I will say is that they use one of my code pins as like a demo for an example, it seems very verbose compared to what I wrote, which might be like just reacting and trying to get stuff to work, because the pen itself has them, you know, responsive qualities. And so I've been typically just like working with like adding a motion to react and then catching up to a timeline. And then, yeah, we can, like get into like the nitty gritty of like, when I switch to what, because it is a little bit more complicated than just working with the regular DOM. But I think I'm scared a little away from the reactions of nature, because it seems to me over engineer, but I could be totally wrong about that. And I haven't worked with I mean, like, I guess the like, underlying thing, or I haven't worked with it that much to like, really, no, it just seemed kind of verbose.

Yeah. Just like from my understanding, at least, like whenever I looked up, SVG animation, like green sock is always like the thing that people like green sock the guy like check this out. This is awesome. Chain. Next thing she was hit by it. And like, I've looked at other things like snap SVG, like from Adobe, and like, well, I play I love these kind of d3. But that's I think that's like kind of different or like more for like data. Taking that it makes it like really easy to keep that and animate SVG this up. But it's just like, it seems like green sloppy. So SVG animation.

Yeah, actually, like snap SVG is not an Indonesian. Because MoneyTree Aronofsky was the author of it. He never really intended as a library. And even if you look at some of their demos are like, wow, that's a really cool way of animating SVG. And then you look look at the code. And it's a lot of CSS animations. Because he says, like, I use the right tool for the job, sometimes that was snapped, and sometimes that was CSS animation. Whereas like, Greenstock, he really switched back to CSS. So I think it's probably not as performant in some ways, just because it really is trying to be the jQuery of SVG. So it's allows you to do like DOM manipulations within SVG with jQuery doesn't support which is like really awesome. Snap is great. It's not really an animation library, like G SAP is just like, we're an animation library, we're going to help you do all the animation things. And they allow you to chain any integer with any in regardless of whether it's like animal simple, so that helps with things like attributes, things like the view box can be animated, which you can't really do otherwise, unless you're like, applying with requestAnimationFrame snap doesn't do that. They're morph SVG plugin is the only way that you can clean two different IDs with two different half point values. Like snap SVG exactly the same point value scenes smile, morph SVG, just click from one idea to another and then it's like oh, so I'm sounding like an ad. But I don't they don't pay me or like okay,

</p>
<p><strong>Ryan Burgess</strong><br />
cool, but it also sounds like you've tested them all which is great too. I think getting familiar with like all the

</p>
<p><strong>Derrick Showers</strong><br />
different tools out there probably varies.

Yeah, I mean, let's just like what I know I think some people know this stuff by like things like reading all the spec like Sarah sweet on and Amelia Bellamy Royce are both really smart and super awesome. Like know everything because they read the spec. I don't read the spec. I just like banging my head on her every turn. Until I know and I read the spec sometimes, but like, that's not my default. My default is just like yeah, I like that

</p>
<p><strong>Ryan Burgess</strong><br />
better. I'm not a big reader of documents. It's like I'll figure it out as I go and you learn from it probably could have learned a lot better. Sometimes I read the documentation like yeah, I probably should have this Read that instead of figuring it out for an hour,

</p>
<p><strong>Derrick Showers</strong><br />
but I mean, you like learn your pain.

</p>
<p><strong>Ryan Burgess</strong><br />
You always remember it after that, it's better than just reading.

</p>
<p><strong>Derrick Showers</strong><br />
I feel like I need to do a couple shots with

</p>
<p><strong>Ryan Burgess</strong><br />
you had actually brought up code hence you're super impressive. Oh, what's, uh, what inspires you to do? Some of them? Like, I know, even like the one of the derrick just had an OC here. They're the responsive panda machine creator of things cool. But like, what, what inspired you to create that,

</p>
<p><strong>Derrick Showers</strong><br />
um, I guess like, for a lot of these things, it's the tech comes first. And then the design just follows. So like, I'm, I feel like, a lot of times, it'll be like, Oh, I wonder if I can get this to work like this. Like I just today I was working with in a meeting Moviebox. So like, the idea is like, wonder if I can get you guys to be animated through a box, which returns an SVG read, like a backing, then I just design things. So that it's that concept. So the responsive, huggy laser panda fact,


awesome. I'm gonna butcher it. So I'm gonna try.

</p>
<p><strong>Derrick Showers</strong><br />
That was, um, that was really just an excuse to see if I could like make Lego blocks that fit into each other and had different interaction points and make it work on mobile. So I think most of the ideas I come up with tend to be like me wanting to prove something can happen. And then I just design around. That

</p>
<p><strong>Ryan Burgess</strong><br />
was a cool idea. So it's like, just basically trying to prove and have an example say, alright, yeah, I've proven this works. Here it is, and like, it's a lot cooler than just like, a box

</p>
<p><strong>Derrick Showers</strong><br />
or something. Yeah, because like, once you have that, like, initial tech part, then like, then you can just really go crazy, you know, like taking ideas of like, stuff that shouldn't be like a laser. And oh, that's

</p>
<p><strong>Ryan Burgess</strong><br />
great. We created a laser pen.

</p>
<p><strong>Derrick Showers</strong><br />
So on that note, like, normally, when you're doing like, personal stuff, for fun, you start with, you go from there, when you're doing actual work, what's kind of your process was using,

like, actual work like at my job? Yeah, I'm assuming you don't like start with the tech. Um, my actual job was, so I do, I do two things. I'm a hybrid kind of person. And I'm one of only two at like a huge company of hybrid people. So it's not very normal to be hybrid. There's only design and engineering. So I'm handed design JIRA tickets and engineering, JIRA tickets. And then I tend to like, act as like an interaction in the same layer, but it is really just like what is called for at that time, and most of that is like, then my products product is the one who decides what I'm working on most of the time. It's like, oh, we really need you to make us a key element for everybody. Or like, you know, what, what have you so that, I guess tends to be either, it's just like, whatever is needed. If you have to, like fight to get like animations, sometimes it's used as like an extra thing. Actually, I'm kind of fortunate, because there's a lot of buy in on my company for animation. I haven't gotten to work on it so much, because I managed that component library. And there's always something else that's like takes precedence. But like we we have gotten pretty far recently in doing stuff work is not public yet, because it takes a long time to get going. And you'll know I'll call you when we give you stuff, but like, it actually hasn't been too hard to get by and for especially if you do notice prototypes, if you're like showing people how beautiful and performant and animation that doesn't get any users way that is really nice for UI UX. People are like, Yeah, do that. So I haven't had.

It's interesting, because I think he says good point about it being hard sometimes to use product that animations are important. I think like, I'm curious, because I don't it doesn't seem like a lot of companies that I've worked for have designers that can do the prototyping with the animations. And like a lot of visual designers just give specs, mocks, and they're very sad again, so it's hard to help. This I think if you can, I think it's actually fun. If you have a prototype, you can show how awesome it is. But it's very hard to find that person. You can do that prototyping.

Yeah, I mean, you definitely need somebody for sure. And I think I like work with code pen a lot. It helps me move really quickly. Like a lot of times I'll screenshot a piece of the product. I won't like build every part of it. I'll just screenshot that piece. It was necessary so that you is very easy to throw away. It doesn't work, you know, otherwise, if I built a whole thing I would eat really? This took me two months? I don't know. No.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a great idea. So you're basically taking like a screenshot of the website, or the background image. And like, it was like adding a modal window, you put something that's clickable?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I just seen the bare bones of what you see. So that I'm not sad when things

that you said, I think, a very interesting skill set to like that. I wish more companies promote error, like, encourage that, uh, you know, it's like, yeah, I just think there's huge I think if people see that, that stuff, the whole code pen or like, or just anyone I do that, you know, many examinations, I think it's very easy to convince somebody that this is an advantage to, or this makes the UI so much better. But I mean, I've actually

</p>
<p><strong>Ryan Burgess</strong><br />
been seeing more actually, our designers, I've been seeing more of it, like I've seen, some of them are on framer js, they've been certain he's just like, Yes, I think it's like CoffeeScript. I've only looked at it like once or twice a years ago. And it's like, just to try and articulate to us, this is how it should be built. And this is what I'm trying to achieve. It does help because it's a lot. It's really hard to explain to that nation. It's not something that you can really describe in words. And so actually being able to see it in like a nice idea that's helped a lot.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. Huge fan of prayer for that, like, I get to work with it a ton, because I just went straight to engineering, but like, it's really awesome, especially if you're using sketch just to kind of throw it in there and things around. That's cool. I haven't people always asked me if I'm using it. That's one of the only tools that I haven't been playing with, mostly because I just have a thing that's compiled code. I don't know, like, I just was like, it's exactly what you're using it for. So make a little thing to show capability grow away. Yeah. I mean, like, the issue, though, is the stuff that I make with code handling, I could theoretically take a JavaScript timeline and use that it gets if I get buy in, I'm actually using that potion later. The issue that I have with stuff with framer is you make this whole thing. And then you have to either use the compiled code or rename it. And the only thing that's bad about that is that bugging. Like I just, I think it's okay until something goes wrong. This is probably like small minded. But it seems like if I'm writing history of JavaScript, I know how to fix it. But if it's compiled, and I've heard that, like, Google searches a lot, and like, most of their designers are going to be touching the code at the end. So they just kind of like hand it off. Yeah, I

think that's like, I think you're awesome. I wish there was more people with your house. But maybe it's, it's, it's a way for designers, that skill set to be able to, well, you can visualize,

</p>
<p><strong>Ryan Burgess</strong><br />
even our designers. They're not we're not using that code option. It's like just it's a way to illustrate to us like as engineers, and like, this is what we're trying to achieve. And that's how we use and and so yeah, it's not like we're taking that code. Great. You wrote this? I don't got it. Because yeah, it's compiled, it's not you have no idea like the performance of it, we have to rewrite it. We're using React, they're not like so it's like, how do you fit that in? So I can see what your point there is to is, you know, if you're able to reuse some of your JavaScript, well, then you're part of the way there already. You got buy in. And now you're like, great. I've actually already wrote wrote it. I don't have to rewrite it.

</p>
<p><strong>Derrick Showers</strong><br />
Exactly. Yeah. I mean, it's interesting what you said about the skill set thing, I think people do have a hard time with a hybrid. So it's funny to me to like that, like full stack is okay. But like designer to front end is not it's like you're just losing that bar over, like up the scale. But people have a really hard time they want you to like fit. And I've even had like, trouble at bigger companies just like, No, I'm both a designer and engineer, people only pick one. And we know, like, I like

to plan saying, I only do front end I don't do back in what do you mean? I think it's valuable that like, designers, develop the web, understand how the web works, especially like how things break down. I think that sometimes some issues happen with designers like they might design something for one spec, like the desktop, but then they don't think about how it might break down for mobile. For responsive. So,

yeah, we definitely have a conversation. I went to school for design and like, it was great when I was doing freelance because I could just, you know, do the whole thing. But when you start talking to companies, it's just you kind of have to choose or you kind of have to create your own position, which is kind of like what you

did. Yeah, yeah. I mean, like, the thing that's kind of cool is if you do both people compiled it knew from each side. So you have an ability to help the organization, like engineers will be like, you know, the designers don't do this. And they're like, oh, we'll talk to them. Because you're like, friends with all of them. You're like, Yo, can you just do specs like this? Oh, sure. But like, that would have been a really awkward conversation, or like, the other way around where like, you know, the designers are like, Why does an engineering just provide this? I'm like, a fifth probably can, like, you know, so like, you can kind of like make a bridge sometimes across Of course, which is nice. I think that that's like a really good feeling that you're like, making people like helping people communicate a little bit better. You SQL

</p>
<p><strong>Ryan Burgess</strong><br />
fine. Yeah. And

</p>
<p><strong>Derrick Showers</strong><br />
you're like, yeah, that doesn't. I've gotten the feedback, especially like when I was working as a designer, developer kind of thing. But like, the designers love you, because you can go in and like, grab all the stuff, stick out everything. And then like, the engineers are like, Okay, you're not going to do something stupid with the hover on mobile or whatever.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so you'd mentioned now working in react, how have you found animating and react? has so much difficulties doing it? So I'm interested to hear how you're making? Okay. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
mean, that it is totally different. And I think that there's like, huge, like body of information just on that because of two, like basic factors. And one of them is the virtual DOM, in virtual Hong Kong being the most complicated factor, because I've seen some like weird race conditions between the virtual home working with it. So yeah, the things that I found to work with reacts in terms of is like, Canvas is attaching one node to react, which helps a lot, because you're just doing all of the interaction mediation in Canvas. The other thing I work with a lot is motion, and then work with CSS, I think there's been like a resurgence of CSS animation because of React. Because it's like a pretty simple way of working with things. React motion is really, really awesome. But it is very complicated. So I think the like barrier to entry is hard. If you don't have something like a product deadline, and you're like, I don't have 17 hours to play with React motion, I'm going to just like write some sizzle. Even with CSS animations. Difficulty though, in G SAP, I have gotten to work pretty well, especially if you're catching one function timeline to a particular interaction that has to work well, if you start to like, complicate things with a lot of different stuff, then jisa.

</p>
<p><strong>Ryan Burgess</strong><br />
Would you do like, would you use something like GS app, or even react motion for if you're just wanting to do like UI transitions or show

</p>
<p><strong>Derrick Showers</strong><br />
the strength of React motion is that you are in React and you're using React in the correct way. So it's really, really good for animating something from here to there. And I think like actually, the motion is really beautiful. It's really similar to game based animation, where what you're doing is you're assigning like physics and math to an object and then sending it out on its way. So that's really good for like, getting something from here to there, but not very good. For like when you need really finite timing, you don't have that. If you need something to happen, one after another. It's not as good. He just added Chandler just added on ends to react motion, which is great. But like, I would say, if you have like a bunch of different things that you want to have happen, you have a few animations that I'm working with right now are truly aware. Like, it's just like 17 things one after another, that would be way too verbose in motion, if you're just having one horrible, emotional, really beautiful motion.

</p>
<p><strong>Ryan Burgess</strong><br />
So it's like the right tool for the job. No, that makes a lot of sense. So it's like not something you would want to use for a ton of things all going off at the same time. But if it is just some UI component changing, it's actually probably the best solution for

</p>
<p><strong>Derrick Showers</strong><br />
that. Yeah. And I think that the motion, the like, spring parameters are really beautiful. can have like really beautiful things happening.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Actually, a year now it's migrating to react is up to

</p>
<p><strong>Derrick Showers</strong><br />
Oh, yeah, yeah, basically, like, I think enough people got really interested in React, and we had a pig training with Brian floor, Brian Florence and Michael Jackson. And it was like a four day training. So that was really awesome. So most teams are moving to react right now. We're rewriting all of our components and react. And so there's a bunch of stuff where we're using React motion, and then there's a bunch of stuff where we're using G SAP still and attaching that function to something in React.

</p>
<p><strong>Ryan Burgess</strong><br />
So with the G reactive. And actually that training, I will say look at Michael Jackson and Ryan forms a plug because it is very, very to train. Oh, yeah, I was we did a Netflix. Maybe it's only I think we've done a couple times maybe I know we've done it one time. And it was just amazing how much they could teach you in four days.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And they're like, clearly really, really expert at it. But just like the, their ability to live code and do all that stuff. I'm just like, blown away every time.

</p>
<p><strong>Ryan Burgess</strong><br />
I remember that. Like, when they were here doing an episode. We are also you went to a React meetup. He was at Yahoo. And Ryan, Florence was speaking. Brian Holtz, he was actually on the panels on front and happier. He was speaking before Ryan. And so he went up the scene. And so I was talking to Ryan like, Oh, are you seeking on tonight? He's like, I don't know, what should I speak on? And like, we're talking through this, he had no clue what he's gonna speak on, and then goes up there. And it's just like live coding, because it's like, that's what they do on a day to day basis is teach react. And so yeah, he just goes up there and like, pulls from his lesson plans, inserts, live coding, and it's like, super impressive. And there's no failing. Like, I'm always worried the minute I'm presenting at a conference or something, and if I have to do a live demo, it freaks me out. It's like, someone's gonna fail. And

</p>
<p><strong>Derrick Showers</strong><br />
yeah, I mean, I've gone as far as to like, anime pens, so that they look like I'm like coding. Like coding it. Like, I guess it would help people to know what it looks like when I'm doing this, but

</p>
<p><strong>Ryan Burgess</strong><br />
it's not working. Or you're coding in front of this whole audience and you miss like a semicolon or something? It's yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
mean, I've seen like, really smart people mess this up.

</p>
<p><strong>Ryan Burgess</strong><br />
It's nerve racking and I mess it up, even when I'm by myself coding, but now I've got to do it in front of an audience. I guess to what would you recommend for frameworks, or things take for someone to get started, if they're like, I really want to add more animations to my website, or to just like, do something cool. Like the laser panda like what what should they get started looking at?

</p>
<p><strong>Derrick Showers</strong><br />
And yeah, I mean, I think there's positives and negatives to all of the animation stuff. I wrote an article for CSS tricks recently called compare a comparison animation technologies that kind of goes through each one and says, like, pros and cons, to kind of help people at a glance, get started with things. But GLM three.js are beautiful, but like, do you need them for you? I envision No, you need them for like, you know, a car racing across the screen. Like that thing that I was talking about with like the movie type, like, like high kind of stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
That's where you can get away with? Yeah, like that, like, I want to see the tiger or whatever.

</p>
<p><strong>Derrick Showers</strong><br />
Like, the only reason you're there is to like get excited, like, stoked on. Yes, yeah. So I think, you know, I kind of go through each one of them and say, the positive and negatives of each, I've worked with all of the things that I talked about in that in that article. So it really depends on what you're trying to do. You're trying to move tons of pixels around canvases, the best thing that you can use NG, if you're trying to like make are really performant responsive animations to like, illustrate a concept, SVG and like, either green soft green talk really, really long ones or like CSS for small, little interactions. So it really depends on you know, it's like the right tool for the job or

</p>
<p><strong>Ryan Burgess</strong><br />
not. That makes a lot of sense. And actually, you have a book that you've been writing coming up on animations. So interested, What's What's the book about? And when is it going to be ready for us three?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, it's called SVG animation. So I just kind of narrow the focus a little bit, because animation is just huge. So I talked about, like, all sorts of different ways of working with SVG. So there's pieces that are e three, that are pieces that like a bunch of the book is green sock, a bunch of the book is CSS. The first part of the book is just going in to the SVG DOM and understanding what everything means. I don't think that people many people write SVG is from scratch, but it's helpful to see what each thing means, especially with Perkins, like circles and RECs and stuff. You can actually write them from scratch. It's not they look really complicated. Look at that code. And then once you understand that, you're like, That's not that bad actually write that. So I think it just puts kind of some tools in holdalls. It's especially helpful for debugging. The nice thing about su using Perl to talk about them a lot is that they can be really small file size if you design for performance. They're like retina already meaning like you don't have to do any kind of image replacement or any special code to make them great on retina are all devices and It makes it really, really awesome for like, responsive world where we have to think about just like, we have a huge testing matrix on the front end. You know, I talked about this with my back end friends like, this is just like so many devices and so many things to think about. And Samsung is like, hooking out another black rectangle every week. I think that's like a deadly story.

</p>
<p><strong>Ryan Burgess</strong><br />
And then we still have to support the older versions that they've just processor on. It's terrible. Terrible.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, exactly. So yeah, that book is just always to me. SVGs

cool, guys. So Swift, it was new, this article you're about to lose, like what I was asking earlier about the differences between because I think a lot of probably don't know, the differences between all the different animation myself included, so. So yeah, this is really cool. It goes through not only to different technologies, but also for pretty much

Yeah, and you know, it's my opinion, his opinion article. So like, I'm sure people who disagree with stuff if they want, like, I think there's a guy in the comments who's like, loves smile, and is really upset that I'm talking about it's deprecation. But like, you know, it's just, this is me, like, speaking about what I know about and in the hopes of, actually, let's save people time, because it took me a long time to even know all that stuff. It

was just a lot. So we should read the comments are

interested in? Not in that, read that much? Because I'm like, how long are they talked about it for like two weeks?

</p>
<p><strong>Ryan Burgess</strong><br />
Someone should have bought me the following. Because it was like I'm contradicting everything

</p>
<p><strong>Derrick Showers</strong><br />
was the way to go. happens. Oh, definitely.

</p>
<p><strong>Ryan Burgess</strong><br />
Wanting to you're mentioning about reading SCG. Like from scratch. And I think that was actually one of my years ago, I had to like write SVG from scratch. That was kind of my first introduction as EG, and like, I hated my life for the first little while until like grass, like, I mean, I was reading for a bank, like, some graphs and everything like that. And so you were just like mortgage calculators and all these other crazy predictions for your future finances, and then put to a graph and it had to dynamically do this, and then create a PDF of it. And so that's why SVG made a lot of sense. But like, I hated that person until you actually start grasping, it's not that hard.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And I think working with d3 brought up earlier, like I think working with d3 is pretty similar to that, like you do actually no need to know a little bit about SVG Dom in order to work with it. Which is so it's it kind of eats into that pretty nicely. But the other nice thing about SVG is you don't necessarily have to know a lot about SVG is to work with it like because it gives you a navigable Dom, like designer could hand you a big complicated SVG that they just exported from Illustrator and you can just grab, like, slap a glass on it and animated like, that's also really good. Yes, yes.

obg RSP.

</p>
<p><strong>Ryan Burgess</strong><br />
How do you optimize from Illustrator though?

</p>
<p><strong>Derrick Showers</strong><br />
Because there's nothing like a checkbox or something. But just sketch to use.

Sketch is actually worse than SGD. Like, yeah, it used to be the opposite. But illustrator came out with a new version where they're the export tool. So don't use Save as SVG, do export SVG. And that is actually really good. They still run through an optimizer. So I typically use Jake articles SVG OMG, which is a web based GUI for SVG. Oh, which is a terminal based thing that you can use from GitHub if you're more comfortable with your terminal, although I would say that the GUI is really nice, because you can see if something's getting messed up in the translation, like, I like terminal based tools, but for SVG, you need that like visual cue of like, oh, wow, that. And there's also like here, Cullen Rich's SVG editor. Yes. Yes.

That's awesome. Yeah. Okay. So

today my picks are my first pick is, since Sarah has been talking a lot about J. S. I wanted to touch on CSS. So I had the pleasure of reviewing Estelle rails book on transitions and animations in CSS tradition. I like that. And I really so that's my other pages just for fun. Alexa and pebble announced a really cool integration that's got a lot of interesting stuff. Yeah. So like the pebble core. Yeah. Got that. And it's like this little just piece of hardware that has all the pebble software on it, that it also works with Alexa. And people have made the comparisons, like, you know, an iPod Shuffle is Spotify, but there's way more you can do with it. And there's, I'm excited to see what happens. Very cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Is this what do you have?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, so I have two picks. One is from my investigations. I watched your keynote, and you mentioned that jank free.org. I thought that was a really sick site, it just had like a material on like, how to make I really like their motto, which is, let's make the web silky smooth. So yeah, just has tons of good resources. So check that out. And then also, a CSS tricks article. I always been a huge fan of that got really, really in touch with us with the icon set with SVG spreads. I honestly think that's like what everyone should use. Because like, other than having to like spread up the giant JPEG or PNG of all these, like little icons shoved together, you can just have like a symbol map and like, there's like, Third, we'll talk more about it. But like, right now I have a goal that is SVG store. And they just like, takes all those SVG files and shoves into a symbol map. And then you can just use them everywhere.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think you're integrated that yeah, no. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
they talk about I code on this. Oh, that's a really cool.

Yeah. I really like that. And then there's some really cool ways that you can do like, HR and like, see here. Oh, yeah. So my tickets are not SEC related. Sorry.

The the one I found this week sometime, I think on ProductHunt. It's called How to it's a command line tool and him module. But it's actually really cool. You just take how to and in whatever your search term is. It searches StackOverflow. But what's cool about it is it actually will essentially pretty print the response. So it like gives you this sweet answer, like you get it from a human like he doesn't just help. But there's not many F on there. And the other thing that I've been playing around with a lot lately is a thing called worker, or some personal stuff that we're working on. It's especially like Travis CI or circle CI, but it's both free. And they allow you to like private GitHub repos and stuff. So if you do any integration stuff, it's like, super simple, but it's just was really,

  
really cool.

</p>
<p><strong>Ryan Burgess</strong><br />
So actually, my first pick isn't even really technology related, actually. So we're just getting more abstract. Yeah, exactly. I was. So I was in New York with Jem was speaking at Empire GS last week, I guess it was. And so I ended up going to the play that's called Sleep No More, it was really cool. It's an interactive play in New York City, all the audience has to wear masks and you like, it's like five different floors, and you just kind of follow around characters and how they're interacting with people. So each story is you kind of get a different experience than everyone else, which is pretty cool. So I highly recommend it. I would actually go back again, it's like you. I've heard some people go with multiple times, I can see why is it you get a different experience each time. And then my second pick is a link to a presentation. It's about the Internet Trends for 2016. An engineer that I work with Netflix that shared it with our team, but it just goes into like, where the mobile devices are at different broadband speeds, like all different like all things internet and like kind of more business oriented things it definitely worth

</p>
<p><strong>Derrick Showers</strong><br />
checking in.

</p>
<p><strong>Ryan Burgess</strong><br />
Sarah, what do you have for us?

</p>
<p><strong>Derrick Showers</strong><br />
Um, yeah, so I'm writing a book, but also Val head is writing a book. And we're like trading technical edits. But she, she's focusing mainly on like, in meeting UI, and I just thought it was really It hasn't come out yet. But when it does, I highly suggest picking it up because I learned a ton in like, I'm thinking about this stuff all the time. And like she covers stuff that I never even thought about. So I think that one's a really, really great one. The other kind of strange and awesome one was I went to Valeo con and spoke there recently. And it's meant for like designers and makers, quote, unquote, but I thought that the conference was actually much broader than that because through asked us to speak about what inspires us and like the challenges we face, and I thought what was really cool about the conference was like, how different talks were like even just with that theme, you ask like people who are entrepreneurs and people who like I make like crazy stuff on the internet. Like one guy was like his Facebook guy who makes Facebook Live. And like, the difference in the way that people talk about their experiences with inspiration and challenges are so vast that it was a really, really inspiring conference. And it was also on the beach in San Diego, and then like, crazy bonfires and stuff every night. So that just happened. But next year when it comes around, I can't recommend that conference highly enough. I just thought it was really, I left there feeling like really rejuvenated and ready to work. So I think it was great.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool to get, like other perspectives on people how they get inspired, because it's like even how I asked you like, how do you create these crazy animations and things like that on your coven? I think that's really cool to just understand someone's process and like how they came

</p>
<p><strong>Derrick Showers</strong><br />
through. Yeah, and even like the challenges part ended up being really, really cool to like a guy from rally interactive talk in Yeah, rally interactive talks. And I really liked their work a lot. And he was talking about, like, we got sued and like, all this stuff, and you're like, oh, even these people that I put on this pedestal have problems too. And in some ways that was kind of inspiring in and of itself. It's like freight, even the people that I admire, have hard times and have to go through stuff. And so I don't know, it just made me want to work and make stuff

</p>
<p><strong>Ryan Burgess</strong><br />
and being on the beaches and Sandy Yeah, and being on the beaches in

</p>
<p><strong>Derrick Showers</strong><br />
San Diego wasn't.

</p>
<p><strong>Ryan Burgess</strong><br />
So thank you so much for joining us on the episode Sara.

</p>
<p><strong>Derrick Showers</strong><br />
Where can people find you?

I think code pen is probably the place where I post the most work. So as far as I'm clicking on Twitter, Sarah underscore Edo. Just make dumb jokes. Like mostly dad jokes.

</p>
<p><strong>Ryan Burgess</strong><br />
So yeah. Great. Well, we appreciate you sharing all the great knowledge of animations today. That's all we have for today's episode. Thanks for listening.

</p>
<p><strong>Derrick Showers</strong><br />
Yes, arrows.

</p>
`;
        return transcript;
    };