module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to our first ever live in front of an audience front end. Happy Hour podcast. Yeah, thanks for sitting enjoying it. Awesome. We're here in Atlanta for mg Atlanta conference. Thank you for having us here. In today's episode, we are also joined by some of the amazing speakers which I would like to go around and introduce. We have Amy. And we have Simona. John and April joining us. Do you want to go around and give a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Simona Cotin</strong><br />
I'm Simona Cotin and I work as a cloud developer advocate at Microsoft. I'm a huge that's good. What was the question?

</p>
<p><strong>Ryan Burgess</strong><br />
What you do and what your favorite Happy Hour beverages? Well, whiskey right on any favorite whiskey?

</p>
<p><strong>Simona Cotin</strong><br />
I love red dress. All right, it's an Irish whiskey.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, man up to try this on. Me.

</p>
<p><strong>Aimee Knight</strong><br />
My name is Aimee Knight. I am predominantly I say JavaScript developer. So I've used all kinds of frameworks on the front end and node on the back end, I am on this podcast. But I also do a podcast called JavaScript ever. And my favorite Happy Hour beverage today and what I've been drinking recently, I'm gonna go with vodka and water with BCAAs branched chain amino acids, because I've been lifting really heavy, and I need to rebuild my muscles.

</p>
<p><strong>Ryan Burgess</strong><br />
John,

</p>
<p><strong>John Papa</strong><br />
I'm John Papa, and I'm a developer advocate like Simona. And I do Pluralsight videos, I'm on Twitch online. I like to do a lot of web stuff. My favorite drink is water because I get to watch everybody else have a good time and make fun of them later with videos. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that's very good. April.

</p>
<p><strong>April Wensel</strong><br />
My name is April Wensel and I run a company called compassionate coding. And we help teams become more effective technical teams become more effective. And I'm a full stack developer, actually. So thank you for letting me be on this front end podcast. And I have used Angular in addition to a number of other things. And my happy hour beverage tonight is a cranberry and soda. That's only because my old favorite was vodka and pineapple and had some not so compassionate things that I did with that. So tremoring so did it.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, well, it's also introduced Gemin. Myself as the panelists for today. Jem, you wanna introduce yourself?

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. Alright, and each episode of the front end happier podcast, we like to choose a keyword that if it's mentioned at all, in the podcast, we will all take a drink. What did we decide today's keyword is?

</p>
<p><strong>Jem Young</strong><br />
Atlanta,

</p>
<p><strong>Ryan Burgess</strong><br />
Atlanta. So anyone probably John says the word Atlanta, we will all take a drink. All right. So since we're talking at an angular conference, in this great city, let's talk about Angular.

</p>
<p><strong>Jem Young</strong><br />
What city around?

</p>
<p><strong>Ryan Burgess</strong><br />
I can't remember where we are? Not sure. Alpha Retta Ah, there we go. There you go. Like this. So I'm interested to know kind of what your experience has been with Angular what you started, why you started with it. And we'll start off from there.

</p>
<p><strong>April Wensel</strong><br />
I'll jump in because you weren't here. So I used Angular, at a company, they had already started to use it because we were building a questionnaire type app. And so originally, it was not using any kind of framework. And the response time for the users and whatnot wasn't desirable. So the goal was, okay, let's make a single page, single page app. And so they picked Angular. So I learned Angular that way. And then I used it continuously, just because, you know, I learned it and it was useful. And, yeah, awesome.

</p>
<p><strong>John Papa</strong><br />
I got into Angular, because I was writing JavaScript spas, zero age apps with what my good friend emmalin, called a Frankenstein framework. I made up my own effectively out of Sammy in history, J. S And knockout J. S and a bunch of others put together Oh, wow. That in the end, was really difficult to maintain. And then AngularJS took a look at that. And like, wow, I could get rid of these nine things and use this one, and it's actually more effective. So that's how I got into it. That's kind

</p>
<p><strong>Ryan Burgess</strong><br />
of how I actually got into Angular. It was taking knockout jQuery turn, I think there was like mustache was in there as well. And it was this language came around, you're like, oh, this frameworks amazing. And that's how we started using Angular as an agency doing that. But I will admit, I have not done a lot of Angular lately, and I'm super impressed with it at the conference. today. I've learned a lot of things that have been added and that are coming to so I'm excited about that.

</p>
<p><strong>Simona Cotin</strong><br />
Okay, so I can go next. And basically itself on Angular and I started because I was using Java with GS JSPs and JSF, which was super boring. And we had some jQuery there as well. But that wasn't so much more fun either. So then I decided on my own spare time to like, kind of explore what else is out there. And back then Angular JS was actually quite popular. I'm not sure if react had been already open source. But I learned Angular Jas from Mr. Kent. Thoughts. on Egghead that I write on. Yeah. And that was really awesome. Because there were these free courses. So I had the opportunity to go through every single course and explore with like, really small projects. And then I build an e commerce website, and then this network data visualization platform. And it was fun, right? Amy?

</p>
<p><strong>Aimee Knight</strong><br />
Sure. So I got started with Angular, and I went to a boot camp like three years ago, and I joined a team, full stack team. And most of their developers were heavily focused on the back end, and as a way from, you know, I was trying to figure out, how can I be as valuable to this team as possible. And I had done a lot of like Ruby on Rails in the bootcamp and you know, even before I went to the bootcamp, and so I kind of approached learning Angular, like I did, learning Ruby on Rails. And I knew like, if I could learn this framework, that's how I would be able to contribute, contribute to my team, the best since, you know, they just didn't necessarily have the patience or the time to focus on the front end. So that's really how I got started into Angular. And I think I went to like the second Engie comp and fell in love with community and just kept digging deeper and deeper from there.

</p>
<p><strong>Ryan Burgess</strong><br />
For those who aren't really familiar with Angular, there's a lot of other popular frameworks react view, even back in the day backbone, I'm sure still people are using what stands out for Angular, what's the reason to like maybe leverage it against the other frameworks.

</p>
<p><strong>Simona Cotin</strong><br />
So I'm not really sure if this is necessarily something that stands out, because I feel like all these frameworks can help you build really robust applications and big applications. But I think that Angular really enables you to build scalable applications using amazing tooling like Angular CLI and VS code. And you can also use TypeScript. And I feel like there's a very good thing happening there.

</p>
<p><strong>Ryan Burgess</strong><br />
How did you find jumping into TypeScript?

</p>
<p><strong>Simona Cotin</strong><br />
I've actually worked with TypeScript and Angular JS, before Angular two, and I really loved it. But again, I have a Java background. So for me, it was actually a relief,

</p>
<p><strong>Ryan Burgess</strong><br />
like not this crazy JavaScript, where it's like, do whatever you want. It's like TypeScript kind of brings you back to Earth on that. Yeah. Yeah, really nice.

</p>
<p><strong>Jem Young</strong><br />
I think you just nailed it right there. Angular is more opinionated about how things should be done, which is just a different way of approaching how to code. And it's been good so far, just learning from everybody here, because like you said, we do react. But it doesn't matter at the core like we do JavaScript, like that's what I care about. So it's cool seeing just a plethora of ideas, especially here in Atlanta, cheers.

Garner when Angular first came out, it was we were using backbone. Now we're using jQuery, and then we're using backbone. And the biggest question was, should I use Angular? Or should I use React? And I get that all the time, even today? So Angular experts or JavaScript experts, what would you say?

</p>
<p><strong>John Papa</strong><br />
Try each one of them for a day to prove concepts and see what speaks to you the most because you Angular react to me, those three are all the top leaders. And you're not going to find like, Vice said, Hey, you guys, you guys are gonna love react when Angular is really performance. Say, Well, react performs well. Well, Angular is easy to get started with the CLI. React has a CLI, I can build PWA is that with React? Like you build really large scale apps that we could do this all day? Yeah. In the end, it's which one? Do you rather speak with urine? Atlanta.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. Thank you, John.

</p>
<p><strong>April Wensel</strong><br />
That was a great answer. I'd like to add to that, in addition to trying it out yourself, I think a good way to go about it is to find all of the stakeholders involved in your choice, like involved, that will be affected by this choice. So that includes the other developers on your team, but also designers, I think, because even though you may think, well, it's just implementation, like, what does it matter, like there's certain things that are going to be easier for you to do and one or the other that will affect what the designer is able to accomplish? So I think trying to find out the values of the various people affected by your choice. Let that informed to like which one you go with.

</p>
<p><strong>Aimee Knight</strong><br />
So I'm going to point out like, I'm going to play like a little bit of devil's advocate for Angular, but also point out some really good stuff about Angular. So from somebody like I've done in Production, I've done view React and Angular JS. I haven't done Angular. When I say Angular, I mean anything post Angular two, for people who may not have that distinction, Angular JS, meaning Angular one. But I think, like, what differentiates a lot of it is like the community, I will say, I feel like the Angular community is the most welcoming to beginners, which I don't know, I just always have a heart for people getting started. But on the other side, when I said, I play devil's advocate, I still will have to say that, like, for somebody who is learning JavaScript, I might still recommend react, because I feel like at least my experience, it's a little bit closer to just plain JavaScript. So hopefully, that's okay to say, but, but I love that.

</p>
<p><strong>Ryan Burgess</strong><br />
I definitely agree. And I agree with the Angular community. I've been very, very impressed. This is like, I've been to Angular conferences in the past, but I'm super impressed. It's been a while since I've been at one. And this is like, amazing to be here. I feel like the community is such a good community. So you hit on that one? Well. Any other things that stand out for Angular verse, another framework?

</p>
<p><strong>Aimee Knight</strong><br />
I feel like you is like very similar to Angular one. So I see a lot of people who are like comfortable Angular one point of view.

</p>
<p><strong>John Papa</strong><br />
I think the funny thing about a lot of this is a lot of people with technology, not just JavaScript frameworks, will complain, we'll claim x right? They'll complain because something is too. Various changes. Too much things are happening too often. The other side is room technology. Things change a lot. Yeah. It's always funny to say that the other side, people get upset when it doesn't change enough. Like oh, well, you know, it's been the same for the last two years. Why isn't it changing? And I've heard that same argument and angular many times, when I first was pitching Angular to companies to work at, I heard both as arguments. Well, Angular is a JavaScript flavor of the week, like you realize the now time for years, like Namie, and other frameworks has been out for years. It's still not used besides jQuery. Right? Everything else seemed to come and go. Then in the next minute, I will hear somebody say, well, it's constantly changing all the time, there's a new framework that will come back. It's It's funny, you know, you hear them back and forth. I think people pick arguments against react view and Angular, that what they're saying, a lot of times is, this thing is bad because Vax, but what they're really meaning is I really just happen to, like React or view or Angular speaks to me. So most of the time, not all the time, most of the time, people are more, they try to defend the thing that they feel good about. But they're not really articulating like that. I think we should always be honest and say, am John Papa and I like Angular? It's okay.

</p>
<p><strong>Ryan Burgess</strong><br />
No one's gonna hate on you for it. Because I like Ember, and it's okay.

</p>
<p><strong>Jem Young</strong><br />
I'm so this is an observation of the general community, I've noticed that react, Angular, Ember, whatever, tends to be very reasonable. So San Francisco, I find it very react heavy, for some reason. Same with Utah versus here, it seems to be a little more angular heavy Europeans I spoke with tend to be more angular. What, why is that it's just so yes,

</p>
<p><strong>Simona Cotin</strong><br />
I might be able to pitch in here. So I lived in Dublin, where there's everywhere. Places where there's a lot of good whiskey, right on. But there's a lot of large companies, and there's a lot of enterprise companies. And that's where Angular is very heavily used. And you could see even in the community, a lot of developers in Dublin, they're Angular, whereas now I'm in London, where the startup scene is so much bigger and so much more intense. And there's, there's obviously big companies as well, but it's much more oriented towards startups. And that's a React, and you also have Facebook, in London. So then you have the place where you have data out there, right? You have the place where we act has been.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I mean, he's Redux has been a huge thing for React, which you can use an Angular. John and I were talking about this earlier, it's like, you can actually use it, but I feel like that paradigm is better for React. And so I get that as like Facebook offices being there. But on the flip side isn't like San Francisco, we've got Google and we've got Facebook, and it does feel like I feel like more people are using React. It's an interesting thought. It's a

</p>
<p><strong>Jem Young</strong><br />
great answer. Yeah, I've never

</p>
<p><strong>Simona Cotin</strong><br />
and if you so there's this ag grid tool. And now he is the creator of that. And he was just saying that. That's one of the most popular grids around the world for enterprise applications. And he was saying that around maybe 70% Then these users are Angular users, and the rest of 30%, maybe makeup, react and Ember and all the other. Wow.

</p>
<p><strong>John Papa</strong><br />
It's pretty impressive. But seeing something folks don't recognize a lot to me, they don't see the first is that Angular react view? They all influence each other. Yeah. Someone? Have you mentioned that view? Or what was your name extension? That view feels like Angular JS?

</p>
<p><strong>Ryan Burgess</strong><br />
Yes. Yep. I

</p>
<p><strong>John Papa</strong><br />
feel that way. And Angular, the new version, from two and on took a lot of took a lot of parts from an inspiration from react and Ember, Ember CLI, and angular kind of came out of ember, which came out I think, the Ruby year, yeah, they're talking about. So it's everybody's building on each other. And these folks from Google and Facebook and Ave from view, they'll talk. This is not like, you know, different factions in the world. It's really nice to see people actually communicating and making the community better. So I don't think there has to be one that wins. Actually, it's actually good for all.

</p>
<p><strong>Ryan Burgess</strong><br />
I agree. It's like you have those things where we're influencing each other by trying different things. Yeah. And even the companies were learning from each other of like, how to do it. We were talking about that Ruby CLI, and then Ember, big on the CLI. And now you have like, react started doing it Angular, it's, we're seeing it more and more, which is great. You can spin up an app really, really quickly, just start working with one of these frameworks.

</p>
<p><strong>John Papa</strong><br />
We see this in the node community, too, not as maybe as much notoriety. But a lot of the NPM packages for node have influenced each other, like even Express js. Yeah, by far the most popular my opinion server library out there and server side. If you look at that with CO and some of the other ones that they're happy, great products, but some of the things that went into those actually influenced how Express has evolved along the way. It's good for all.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I don't think I would be happy if we just had one framework. I think that would be really, really bad of us to just have one

</p>
<p><strong>John Papa</strong><br />
happy as upon.

</p>
<p><strong>Aimee Knight</strong><br />
Can you have that in programming? Like just one? I don't? I don't think programmers do that.

</p>
<p><strong>John Papa</strong><br />
Really? John, I get it. But which one should I pick?

</p>
<p><strong>Ryan Burgess</strong><br />
I want to see someone take all of them and create something with it. Just take them all and see what happens. It'd be a mess. Yes.

</p>
<p><strong>Jem Young</strong><br />
It could be done. I, I think a lot of people are new to the jazz world forgive the early days of Internet Explorer, no offense, Microsoft people, but any type of monoculture is their product. It used to be

</p>
<p><strong>Ryan Burgess</strong><br />
it used to be a huge problem.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I think you forget, like those days when a monoculture isn't good and feels like Chrome is the best browser, I always use Chrome like, cool. But that's not good for our community in general, like CDs, Firefox, or edge or just all these things. It's better to have diversity of thought, including this conference, like we're just better for it rather than like, this one's better. Let's just innovate on that. That's the best. That's not the way to think about any of these problems.

</p>
<p><strong>Simona Cotin</strong><br />
One thing that I'm struggling with, though, you're mentioning diversity of thought, and that's not related to the React Angular, in the end, just curious. Sometimes I feel like we have this diversity of thought, within our program, programmers world. But we're not always considering the diversity of thought within our users. Right? Because you have the early adopter will always use the latest browser. But then you have people that have been working in companies for ages, and they're still using Internet Explorer. And we have to consider that right.

</p>
<p><strong>Jem Young</strong><br />
Big April, you'd be qualified.

</p>
<p><strong>April Wensel</strong><br />
Yeah, no, I think that's I mean, I think it's well said, I think that it's true, we don't think enough about the people outside of our little bubble of developers, and that includes two, as far as these frameworks, I mean, they are suitable to people with certain learning styles, like they're gonna be easier for people certain learning styles to pick up, you know, just based on how they're designed how, like the thinking process, like the processes. So if you want to also bring more people into tech, from the people who are currently outside of this little bubble, then, you know, probably we need many more frameworks that like, you know, take a totally different approach. You know, I mean, there's experimental stuff going on with like, more visual style, things like that. But I mean, I think we do need to like widen our view, what makes for good, good, good tech in general, and that brings in more more diverse people.

</p>
<p><strong>John Papa</strong><br />
Fuckin ask a question. Actually, the whole group, I'd love to hear this a lot. And I'd like to hear somebody else's answer to this. Why any framework? Why not just write the entire rap for your company in pure JavaScript?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, first off JavaScript early, early days was that would have been really difficult. I look back to jQuery. I think jQuery got us really, really far being able to support the different browsers and like JavaScript, vanilla by itself. It was really, really difficult to support various browsers. nowadays. I actually might say that, yeah, you could probably do a lot more with IES 2016. We have a lot more of the features and it's feeling More like its own little bit of a framework that we've we've kind of used a framework to support all these different browsers templating and everything. Well, we can do a lot of that now. And yes, 2016 I always want to say is six, but I'm trying to correct myself, whatever. Yeah, exactly. Yes. Next, whatever you want to call it. But I think that's a valid point. I think there's also a lot of performance gains from using the framework as well. There's a lot of state management that comes for free that a lot of these companies have thought through Facebook, Google, they're they're really solving these problems to make it great for them, but also to the open source community.

</p>
<p><strong>Jem Young</strong><br />
So we can I can, we can do a whole nother talk on frameworks. Great, great question. But as to why use a framework if you're just building like, not a single page app, a single page, developer product? Yeah, like components of Angular, Ember, or react are fantastic for productivity. So when we talk about performance, we also mean developer performance. What's faster to write JavaScript courtesy? Well, JavaScript C's gonna run faster, obviously. But we don't do that. Because they take forever to build a web agency. We use JavaScript that's kind of intermediary. So performance off of the user performance for the developer, like, these are things we care about. That's why you framework internal, don't

</p>
<p><strong>John Papa</strong><br />
you think it's less about need than it is? looking long term? So I like to answer the question with the question.

</p>
<p><strong>Ryan Burgess</strong><br />
I like it, you're setting yourself up for that. Yeah. Like, it

</p>
<p><strong>John Papa</strong><br />
sounds like the answer. Say, alright, well, if you don't want to use a framework, then tell me when is your project done? When I deliver, as you say, yeah, so after you deliver, there's no more work? No, somebody else handles it. Well, what about maintenance or new features? What about bug fixes? What about user requests, but training the users? There's a lot of things that happen afterwards. And what happens when you develop originally answers, I move on to another project. Now, Ryan walks in and looks at your Frankenstein code that I used to write your own framework, you're yelling at me and head going, I really can't stand that John, Papa. Atlanta, cheers. It's gonna be it's more about it's not just about delivery, right? It's about the whole story ROI for the entire lifecycle of a product. And maybe a suite of products, if you're in a large company, is really a lot more, if all you're concerned with is you writing an app and getting out the door. Frankly, pick whatever you want. No framework or not I look at

</p>
<p><strong>Ryan Burgess</strong><br />
but it needs a maintainability scalability of your team. And that's why it's something like we've talked about Ember, I know, even in previous episodes, where it's very prescriptive, and sometimes that's actually can be a really big benefit is like someone who works at Company X using Ember and jumps over to Company B, well, guess what they're using Ember, too, it's like you can actually get ramped up really quickly. Because it's, it's really prescriptive. And you can follow that same thing with some of the other frameworks is that you there's, you know, a little bit differences in how a company adopts Angular or react, but you can actually get ramped up a lot quicker than just like vanilla JavaScript, they've, like, you know, John's done it this way, and Ryan looks at and goes, Oh, man, I wouldn't do it that way. Like, and that could happen,

</p>
<p><strong>Aimee Knight</strong><br />
let's say plus one, two, that that's exactly what I was gonna say, like ramping up on a new project going in, like being familiar with the patterns that are already there versus like, coming onto a project and you're not familiar with the patterns and you're having to learn, you know, not just the domain. But all these patterns do

</p>
<p><strong>Ryan Burgess</strong><br />
that cuz there's business logic to that you have to worry about not you don't want to be bogged down by learning like a framework, and also learning how the business side of things needs to work for your users.

</p>
<p><strong>Simona Cotin</strong><br />
There's one thing that I that was the first thing that crossed my mind. I do remember, before frameworks, we had to test for every single browser is very selfish, but that's one of the reasons why I do like frameworks. They're helping us like they're not solving everything. But they're helping us kind of overcome.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, there's a lot we get for free out of that, too. And like there's support for the various browsers, which is nice.

</p>
<p><strong>Jem Young</strong><br />
People knock jQuery just, I think blindly. There's like jQuery. What year is it? But they forget the problem with jQuery solve was cross browser. Yeah, really, it wasn't like it was easy to use, which it was, but it solved a lot of those edge cases that we didn't have to test for, which we did back in the day. Now we don't because that's already a fact away from us.

</p>
<p><strong>John Papa</strong><br />
Now, we were doing vanilla JavaScript, and I remember being insulted and almost doubling the cost of my projects to work in Netscape. Anybody here know what Netscape is anymore? Oh, yeah. So that was harder than jQuery like, save the day. I mean, it was awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
No, and not to pick on Microsoft. But the IE six, like in your point of like, you'd almost have to like build per browser. I always felt like we build double the price for supporting ie six, because it was very, very hard. Even in jQuery world. It was like you're trying to do something that the browser just couldn't handle a lot of times too. So thank the Lord for evergreen browsers. Oh, yes. Oh, so nice. Yes. And Microsoft is right in on Not too. So thank you. Thank you both. I mean, I've seen a lot, even in the talks today. And I know there's even more talks tomorrow, a lot of really great features coming to Angular. But even like I said, I've haven't really touched Angular since version 1.34. It's been a while. There's a lot of great new features, what does everyone excited about? I would love to kind of hear what you're most excited about either coming or that's recently come to Angular.

</p>
<p><strong>Simona Cotin</strong><br />
I'm super excited about Angular elements, which is a project that's still experimental. But it's going to enable us to build components, which are going to be we're going to be able to import them even in the x applications, view applications. And I think that's really cool.

</p>
<p><strong>Ryan Burgess</strong><br />
That is really cool. So we could actually take all the frameworks and put them together.

</p>
<p><strong>Jem Young</strong><br />
The dream, make everybody happy?

</p>
<p><strong>John Papa</strong><br />
To answer that, looking back at last year, the biggest thing for me was the performance improvements that they made an angular not just because when they first started, it was a little bit larger than they wanted it to be. But they spent a lot of time and money and effort into making it really small. And the greatest part is the CLI they built just does it for you out of the box. Looking forward this year, my favorite thing that they're moving towards, is the way to package Angular. So this is going to enable the community to create more things that we can do with Angular outside, maybe a grid components or working on something myself or NGR. X. It's if you enable the community to contribute, it makes everything better. So they're working on a packaging process, which I think we raise gray thrown NPM packages.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, and actually, I'll speak to your NGR X work. I'm excited for it as well, it takes a lot of complexity out of an application, which has been I'm excited for you to release that, which it's coming soon. I think we're gonna hold you accountable.

</p>
<p><strong>John Papa</strong><br />
Building an alpha next week. All right. All right, perfect.

</p>
<p><strong>Ryan Burgess</strong><br />
Another thing, I was actually really excited when they added RX, which was what version four? Right, my wrong

</p>
<p><strong>John Papa</strong><br />
RX js? Yeah. That was that came out with Angular two,

</p>
<p><strong>Ryan Burgess</strong><br />
Angular two, right? Yes, it's evolved. Obviously, it's and it's getting actually better and better to they're adding integration for the latest version, adding in observables, which has been good. So yeah, these are all the things that are new to me when I haven't been writing Angular, and it's exciting. And we write a lot of react at Netflix, I feel like it might be a tough to like change that. There is Angular and Netflix. That's a great point, a lot of the website and and things that you see as a customer react. But there's actually a lot of internal teams building tools that you don't see as a customer. And we have I've seen Ember tools, I've seen react, I've seen Angular, which is great. I kind of love that idea that we can solve problems with different frameworks. And we should, and test them for different things as well. So it's not that we're not using it.

</p>
<p><strong>Jem Young</strong><br />
We use all these Ember, Angular backbone reacts live, there's a little bit everything. Yeah. Whatever. Like John said, whatever you're most productive in, do that.

</p>
<p><strong>Simona Cotin</strong><br />
Can you imagine we're gonna have custom elements, we're gonna have angular elements. And your friends, they're gonna build Angular applications will enable you to reuse their components. I'm getting that right.

</p>
<p><strong>Jem Young</strong><br />
We Yeah, we could talk about web components for like a whole nother because like, that's been a push, but it just hasn't happened. So I'm excited to see if that's like the final hurdle that we also are using.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, Web Components be good. What advice would you all give someone who's maybe getting started with Angular? I think there's a lot of people out there, or maybe they are on React or view? What is some advice for someone to say jumping into the Angular community? What would you give advice?

</p>
<p><strong>Aimee Knight</strong><br />
learn JavaScript? First thing?

</p>
<p><strong>Ryan Burgess</strong><br />
To be honest, me that would have been my like, exact advice is like learn the fundamentals of JavaScript for any framework.

</p>
<p><strong>Aimee Knight</strong><br />
Like so many people reached out to me about this, like a lot of newer developers, you know, what framework do I use? And like, first, have you like, I'm a huge Carl Simpson fan girl. So I'm like, first go through like the you don't know, JS books. And once you go through that, then you can pick a framework. So

</p>
<p><strong>John Papa</strong><br />
yeah, I then that HTML and CSS? Well, yeah, made a lot of developers who feel like CSS isn't my job. Or they think that like I was this way, they think they know HTML, and then all the sudden you realize, Wait, that's a property on the DOM. I didn't know

</p>
<p><strong>Aimee Knight</strong><br />
that. Yeah, it's like stop putting like words in divs. Like, that's not like,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, what drives me nuts. And I've said this on the podcast in previous episodes, is like when someone declares a div and puts a Class button on and I'm like, it's a button like there's a button element. Use it. Like it drives me nuts.

</p>
<p><strong>John Papa</strong><br />
All we need to do Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
It's like a link becomes a div. I'm like, no, no, no semantic HTML, do that. Screw accessibility like, yeah, no, no one cares about that. Like what the hell and so I've actually had PR is where I will comment on that. That looks like a button. Maybe you should change it to a button or a link. Yes, it happens.

</p>
<p><strong>John Papa</strong><br />
I like sarcasm. All right.

</p>
<p><strong>Ryan Burgess</strong><br />
Drives me nuts.

</p>
<p><strong>April Wensel</strong><br />
Um, so my advice would be that some people learn things in different ways. So someone may recommend to you a book or a video series that worked for them. But if it doesn't work for you, don't be discouraged doesn't mean you're not going to become a good, great Angular developer. It just means maybe try a different approach. Maybe you want to do a project different kind of project or whatnot. Because, you know, I mentor a lot of new developers, and they easily get discouraged if somebody tells them, oh, yeah, just do this course will be easy. It'll be great. And they're like, oh, my gosh, this is so hard. So I think you know, everyone's different. And right now, you know, tech is still largely a monoculture. And so there's a lot of times there's people, and they all kind of think the same way. So especially if you're newcomer to tech, especially if you feel kind of like an outsider, don't be discouraged, because there's plenty of different ways to learn things. So just keep an open mind.

</p>
<p><strong>Jem Young</strong><br />
Would you say it all people should stop saying easy? I've heard that before, but it's like, oh, it's very easy. It's very straightforward. And if you don't get it, it makes you feel dumb. I felt I went all the time. I still do. Oh, yeah.

</p>
<p><strong>John Papa</strong><br />
Yeah, easy just means that you've already learned it. It wasn't easy when you probably first got in a lot of times, because we read a book recently, someone I've mentioned the curse of knowledge. Yeah. Once you know how to do something, it's very hard for you to empathize person trying to learn behind you. I'm just gonna watch that video. April, you'll get it

</p>
<p><strong>Ryan Burgess</strong><br />
easy. Straightforward. It's easy. Yeah, where are we again, Atlanta, cheers.

</p>
<p><strong>John Papa</strong><br />
I think it's important for people to figure out what kind of learner they are. So I agree with you, or your reader, video watcher, hands on pair programmer.

</p>
<p><strong>Simona Cotin</strong><br />
Just gonna add on to what April said, and you mentioned there that you mentor, people. So I think that as a newcomer, it's very important to not feel or maybe feel welcome, or try to reach out to people. And it's, I think it's essential to have someone that guides you through the process. So it's not, it's not that it's easy, or, or hard or whatever. But it's more mostly to have someone to hold your hand. And then things become simpler and become much easier to use. And

</p>
<p><strong>April Wensel</strong><br />
I really love that. And I would say to any of the more senior people listening, please offer up your services to help mentor because there's so many people out there who are afraid to ask because they think, Oh, this developer so busy, and you know, and so I try to say over and over again, like, please reach out like DM me, email me, because I make the time, you know, I set aside time every week actually to do mentoring things, because I think I know how it feels to not have somebody to go to. And so I think it's all of us who have some, you know, spare cycles, or can at least, you know, make some to offer that up pretty clearly to newcomers.

</p>
<p><strong>Ryan Burgess</strong><br />
I completely agree. Like we've even said on previous episodes, it's like, I actually respond to tweets that people like I've opened, DM and I will respond. Sometimes, it might be a bit slow, but because we are all busy, but I'm always willing to help someone to answer a question, and I don't know it, I might direct them to someone else who knows it because I think it is really important. We all started from not knowing this technology, that community has grown so much that Yeah, we all had to start from somewhere.

</p>
<p><strong>Jem Young</strong><br />
I always say if you can explain a for loop, see, like your grandparents or something like that. And let's try to everybody should try it. And just remember what it's like to learn that thing and explain in really basic terms, and you could like it just takes you back to that first time on the computer. Like, wow, I know so much now. And just people have no idea. And it's hard to get back to that. So just imagine explaining it's very simple concept, even a variable to people I don't know. And you'll see how hard it is.

</p>
<p><strong>Ryan Burgess</strong><br />
It's actually hard to explain a lot of that I'm like, how would I explain a for loop? Man? I don't know. That's a tough word. What's an object? What's a variable? What's an array? Like? Those are like heart, you know, we take those for granted. But it's actually hard to explain,

</p>
<p><strong>April Wensel</strong><br />
like Greek roots to where you could volunteer some time and build some of those skills like Black Girls Code is a great group where you are explaining to young children, these basic concepts and you know, I think it is great practice and I think it helps you build empathy for you know, anyone you're interacting with who's unfamiliar with tech. And also I will say I would be remiss if I didn't mention that some grandparents are awesome coders

</p>
<p><strong>Ryan Burgess</strong><br />
are picking on the grandparents. My grandma and I'll pick up my parents they don't know.

</p>
<p><strong>Jem Young</strong><br />
Atlanta, so, okay, I saw cheers. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
As we end the episode, we also like to choose pics of things that we've found interesting or like to share with the listeners. I would like to go around the table kind of weird table here that we have. And I'd love to hear your picks for this episode. Amy.

</p>
<p><strong>Aimee Knight</strong><br />
Ah, okay, so the first pick I wanted to have like I need to give back a huge shout out the organizer of Engie

</p>
<p><strong>Ryan Burgess</strong><br />
Yes. Thank you so much Zack. Yes,

</p>
<p><strong>Aimee Knight</strong><br />
yeah, this conference has been great. I think like Zack reached out to me, man. It was like, it was a long time ago. Like last, like, early 2017. Like, yeah, it was not. It was like summer ish. Anyway, so And as somebody who's like, seeing all the work that goes into November, cuz I'm in Nashville, like the the work that the organizers do to put on these conferences, I can only imagine. Yeah, so thank you, like, thank you so much. I've been excited about this conference for a while. So I usually do like a health pick and a programming pick when I do JavaScript Jabber. So my programming one, I really read a really good article called that. What does code readability mean? And I really like challenges the person, I think I like the points that, you know, as developers, a lot of time will like, look at code and just say, you know, this is unreadable. And what we really mean is, I can't read this. So, you know, there's steps in there that you can make your code like, quote, unquote, more readable, but you know, sometimes you also have to just look at, you know, your understanding of things. And you know, it's not always the coach fault. Anyways, and then my health picks, so yeah, I've been drinking like vodka and water with VCA. So I'm gonna pick the BCAAs. I'm drinking their gummy worm flavor. So they're like, absolutely delicious, but it's company called lit. Anyway, so I don't know if you guys do like links to this kind of stuff. We'll definitely link to it. I'll link to all this stuff. So you got to get the gummy worm BCAAs

</p>
<p><strong>Jem Young</strong><br />
Good. Wait, what flavors gummy? Gummy worm is like fruity. I don't know. But

</p>
<p><strong>Aimee Knight</strong><br />
they taste really good. So yeah, like he's good with vodka. It does. It's really, really, really good. So you're like, you know, giving your liver workout and rebuilding your muscles at the same time.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so what do you have for us? Well, because we're

</p>
<p><strong>Simona Cotin</strong><br />
at mg Atlanta.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. Cuz you didn't say Atlanta chairs?

</p>
<p><strong>John Papa</strong><br />
That you said,

</p>
<p><strong>Ryan Burgess</strong><br />
I know. So we got a double drink? That's fair enough.

</p>
<p><strong>John Papa</strong><br />
That's a great way.

</p>
<p><strong>Simona Cotin</strong><br />
So my first big is movie, and that's called Debugging the Gender Gap. And it's an awesome movie talking about how to figure out like, why do we have this gap between gender and then obviously minorities, and you learn a lot a lot about the impact that we have, not only in our community, programmers community, but also outside like a lot of regular people that we build products for. And, yeah, it's an awesome movie, I do recommend watching it, it's on Netflix

</p>
<p><strong>Ryan Burgess</strong><br />
is on Netflix, I love that movie. It's great.

</p>
<p><strong>Simona Cotin</strong><br />
And then my second thing is called bar, which is an organization that runs mentoring events of for diverse groups and different Asik. They're based in London. They also have offices, I think, in New York or not offices, but they have people working, or that have started this group, and in York, and in Sydney, maybe, and one of the most welcoming groups that I've ever attended. And they have this thing where basically, you register as a mentor, or you register as an attendee, and you say what you want to learn, and you say what you want to teach. And then people just raise their hands. And they're like, I want to, I want to learn HTML, and I'm gonna say, Yeah, I would love to teach you HTML is go ahead and hack something for two hours. And it's just beautiful.

</p>
<p><strong>Jem Young</strong><br />
That's cool. I like that.

</p>
<p><strong>Ryan Burgess</strong><br />
John, what do you have for us for pics?

</p>
<p><strong>John Papa</strong><br />
do I'll do two picks one tactical one, not the technical side is any hit on top senior year to be readable code? Yes. And actually talks about this. It's like, it really speaks to me. Because I believe there's a lot that we can all learn about. Not only our own code, but how we can help other people through writing readable code. So we spend more time reading it, we actually read it. So make it readable. It's kind of what does readable mean, it's kind of more of a deeper question, right? So my second pick is more about a great movie I saw recently I went dragging, I got dragged kicking and screaming to go to this almost literally. I don't know why either. I actually liked theater. I liked musicals. And I like Hugh Jackman. Alright, for some reason my wife took me to go see British show and when she went twice the second time, she's you're going fine. And I went there and I loved it. I can't get the songs out of my head. And I thought the movie was fantastic. It's fun. I mean, you don't go to a movie like that going. Geez, that's, you know, really eat drama. It's it's fun movie. And it was really really awesome. I think people should check it out. The greatest showmen, the greatest show that PT

</p>
<p><strong>Jem Young</strong><br />
Barnum. Okay.

</p>
<p><strong>Ryan Burgess</strong><br />
April.

</p>
<p><strong>April Wensel</strong><br />
All right. So Ryan said I could do one or two picks but jumps that I can do. Sorry. Yeah, here come here. Come three. I'll spray fumbles a little so the first One is a book called The Power of full engagement BY JIM LEHRER And Tony short, it completely changed how I viewed kind of my whole life in terms of productivity and happiness and everything because it talks about managing your energy, not your time. And because burnout is such a problem in this industry, it really has helped me with that. And so I highly recommend it. And second one is a food one since I'm vegan, I have to have to say something about that. So I recommend everybody who is thinks they could never go vegan to try the beyond burger from Beyond Meat brand. It tastes just like meat, I promise. So try it out. They have it a Veggie Grill. And then three, this is a local pick in Atlanta.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. I'm out of drinks.

</p>
<p><strong>April Wensel</strong><br />
So anyone here, please check out Viva la vegan, which is a great, locally family owned restaurant near Oakland City, and they do amazing chicken and waffles and it's all vegan, so it's amazing. Check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
I have a couple pics. Yeah. The first one is a shout out to my friend Harry Wolf, who works on MongoDB. One of the smartest people I know. But it's very deceptive. He makes a lot of puns, but he has a webcast

</p>
<p><strong>Ryan Burgess</strong><br />
called he's good at the puns too. He's

</p>
<p><strong>Jem Young</strong><br />
very, very good. He has a webcast called the console log where he just talks about like what's happening in UI land. And he does it every week or so it's fantastic. I recommend second thick music. I like music for coatings just kind of just shut the world out and get in the zone. There's my neat beats called Cosmic surgery. One of my favorite albums I've heard in the past five years or so it's fantastic. My third pick is a little segment for Valley silicon. That is the segment where I highlight the absurdity of Silicon Valley and the amount of money that people spent on let's just say ridiculous things. My pick is the flame thrower. So for those that don't know Elon Musk has a company called the boring company. He said hey, people need flame throwers. So what happens 15,000 People decide that I didn't have a flame thrower yesterday, but I need one today so they bought one for $500 So that's $7.5 million in flame throwers that people just decided they need all of a sudden what do you do with a flame? I don't know. I mean, San Francisco

</p>
<p><strong>John Papa</strong><br />
is now gone right? Yeah, like I

</p>
<p><strong>Ryan Burgess</strong><br />
kind of feel like yeah, you're targeting this market and what are we doing with these flame throwers?

</p>
<p><strong>Jem Young</strong><br />
Yeah, Marshalls

</p>
<p><strong>Ryan Burgess</strong><br />
that'd be a badass Mars cool. I don't know it probably be disbarred with these for $500. Sounds good. You want to

</p>
<p><strong>John Papa</strong><br />
get your video. Oh, don't worry. We

</p>
<p><strong>Ryan Burgess</strong><br />
might not be left but hopefully the camera catches. All right. Well, and I actually have just one pic. Actually, no two pics. And the first one is a Netflix Original and which is a German show called dark. It's an amazing, amazing show. The cinematography is amazing. The stories really cool. If you like something like Stranger Things, I kind of feel like it fits in this like, you know a little bit science fiction, but not too much of it. It's a really, really great story. There's only one season so far, I highly recommend checking that one out. And then my second pick, honestly, mg Atlanta. We can drink to that because it's amazing. It's been a great conference as a first year. I'm excited for the second year. I'm coming back. It's great. Before we end the episode, I want to thank obviously Angie, Atlanta for inviting us as one. Cheers. And I need to fill up your cup. I know. I know. It's kind of bad. I also want to thank our guests. Thank you so much, Amy Simona. John, April, thank you so much for joining us. It's been amazing having you. Where can people find you online? Amy?

</p>
<p><strong>Aimee Knight</strong><br />
Well, first, thanks for having us. Appreciate fun. You can find me on Twitter. It's me aim II underscore night. Yeah. Especially by me.

</p>
<p><strong>Simona Cotin</strong><br />
Thank you for having me. This was my first ever podcast. I

</p>
<p><strong>Ryan Burgess</strong><br />
know. It's pretty awesome. Thank you for like joining us for the first one. That's amazing,

</p>
<p><strong>Simona Cotin</strong><br />
happy. And people can find me on Twitter at Simona underscore cotton and that's X Mona underscore C O ti n. John.

</p>
<p><strong>John Papa</strong><br />
Yeah, thanks for having me. This has been a lot of fun. Talk to everybody here. And you can find me on Twitter at John underscore Papa or Twitch honors or say

</p>
<p><strong>April Wensel</strong><br />
thank you again very much got to echo that. I really appreciate it. It was great conversation. And find me I'm on Twitter at April Wensel. But April like the month and Wensel W E N SEL and my websites compassionate coding.com.

</p>
<p><strong>Ryan Burgess</strong><br />
Jamie is all like Where can people get in touch with you?

</p>
<p><strong>Jem Young</strong><br />
I'm on Twitter at Jem Young spelled how it sounds or send me an email jim<a href="https://twitter.com/netflix">@netflix</a>.com I will respond. It may take me a few weeks of an emailer. But yeah, reach out to me. like April said, I'm happy to miss her.

</p>
<p><strong>Ryan Burgess</strong><br />
And I met Burgess de Ryan on Twitter as well. Thank you all for listening today's episode. Make sure to subscribe to front end Happy Hour wherever you listen to your podcasts, the various ones that there are available. And follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words?

</p>
<p><strong>Jem Young</strong><br />
Atlanta Hotlanta love. Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
Any more more drinks here, Jem. Thank you. Thank you. Thank you for listening. Thank you

</p>
`;
        return transcript;
    };