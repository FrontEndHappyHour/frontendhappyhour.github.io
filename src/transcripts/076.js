// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happy hour podcast. We are joined by special guests Courtney, Maria, and Maxine to talk with us about some work that they've been doing on a interactive title for Netflix called Black Mirror Bandersnatch. Courtney, Maria, and Maxine key get brief introductions of who you are, what you do and what your favorite happy hour beverages. Courtney, you may as well start.

</p>
<p><strong>Jem Young</strong><br />
Sure. I'm an engineering manager here at Netflix and I manage the team that does a video player for all of our TV apps. So anytime you see the Netflix app on smart TVs or set top boxes, the video player inside that is done by my team.

</p>
<p><strong>Courtney Kennedy</strong><br />
Well Today I'm going with a nice cup of tea. 

</p>
<p><strong>Jem Young</strong><br />
Is it at least green tea? It is. 

</p>
<p><strong>Courtney Kennedy</strong><br />
Yeah, yeah. 

</p>
<p><strong>Ryan Burgess</strong><br />
Maria,

</p>
<p><strong>Maria Kazandjieva</strong><br />
I work right over next to Courtney. And I manage the engineering team that builds the video player for the website, as well as the Windows app and Chromecast. And the way to think about this is if you come to netflix.com, you see an amazing UI built by Smar counterparts in the UI engineering org. But the moment you click play, there is a ton of magic that happens underneath in order to get you to the actual video frames, and you're enjoying bandersnatch. And my current beverage is a gin and tonic, which is one of my favorite drinks. But if somebody wants to talk sour beer, we could probably spend an hour doing that as well.

</p>
<p><strong>Ryan Burgess</strong><br />
I could do that with you. Perfect. Maxine. Hi,

</p>
<p><strong>Maxine Cheung</strong><br />
my name is Maxine. I'm an engineering manager on our UI engineering. org. So my team is called the interactive experiences UI team. We actually build the UI experience for things like branching narrative. Under snatch across our TV, our web and our mobile platform.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Well, thank you all for joining us. So before we get started, give introduction of today's panelists, gem yarn started off Jem young senior software engineer at Netflix and the only non manager in the room right now, is that a good thing or a bad thing?

</p>
<p><strong>Jem Young</strong><br />
I mean, it probably means I'm too old to coding.

</p>
<p><strong>Ryan Burgess</strong><br />
We just talked about it. Alright, let's see what to do. I am Ryan Burgess, a software engineering manager at Netflix. In each episode of the front end happier podcast we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is branch and branch, right? So if we say the word branching and on the episode, we'll take a drink, and yes, Maxine branch will consider that as well. Alright, let's start. What is bandersnatch? For those who maybe haven't seen it? How, what is bandersnatch? How is Netflix involved in this experience? How is engineering involved with bandersnatch? I can

</p>
<p><strong>Maxine Cheung</strong><br />
take that so bandersnatch is our first interactive geared towards adults. It is a black mirror interactive film. So it's made by charlie brooker, Annabel Jones. And it's really our first attempt at branching narrative title geared towards our audience. So we've actually been doing these types of interactive titles before, but mainly geared around kids. It was kind of an experiment around, you know, we think kids have a lower barrier to entry, they're more used to interacting with things in general. And so this was our first kind of adult title around dinner,

</p>
<p><strong>Ryan Burgess</strong><br />
which honestly, it was a great title to start with to because like black mirror is amazing, kind of made the most sense, but I gotta say, I was a little a little skeptical as an adult being like, Am I gonna like an interactive piece, but I think what for me is a fan of the show and being able to watch it. It was just it felt so seamless and so great of an experience that it didn't feel painful trying to, like interact with itself. on a TV where you're like, Oh, I'm trying to sit back and just enjoy this, but you can still do that, which is pretty powerful.

</p>
<p><strong>Maxine Cheung</strong><br />
I think it was really important to have the right content creators that had the right mindset on how to create that engaging type of story and not be like a gimmick. It is a challenge, I think for people to kind of pick up that remote and start engaging with the the title because they are used to like, Hey, I'm going to sit back and watch something on Netflix. So the definitely some of the challenges we faced around

</p>
<p><strong>Jem Young</strong><br />
bandersnatch was great because it's it's really representative of what Netflix is as a company. It's always Angel debate. Are we a content company? Are we a like tech engineering company? And to me like I was involved in the creation of bandersnatch, like most people in this room, but it really like bridge that divide between like part of us on the content creator, they have to create this narrative that works with the idea of branching on the engineering side. It's like you have to create this brand new experience and like push it out to people who've never seen anything like it's like, right there in the middle and that's when I first saw bandersnatch I was blown away. I was like, I quote you quote myself, I was like, literally, I was like, This is why I work in Netflix. This is so cool. I'm so impressed with the engineering team that built this.

</p>
<p><strong>Maria Kazandjieva</strong><br />
I think it was pretty unique in the sense that it's really the first big title, where, yes, there's engineering. And yes, there is content, which is true for pretty much anything that we do where there's original content. But in this case, it wouldn't exist. Unless all of the pieces were actually working together and were being developed at the same time. It wouldn't Of course, it wouldn't exist. Unless you create content. That's, that's meant for for branching. Cheers, cheers. It doesn't work. If you don't have the content that specifically created for that. It doesn't work if you don't have a new style of UI interaction that's specifically created for this use case. And it doesn't work if you don't have the underlying engineering to make it smooth and seamless. And so it's the first time where I think you see the power that you get from having everything happening within the same company and and being able to innovate on every every layer. And that was that was Pretty exciting. So I definitely relate to Jem's feelings on the topic.

</p>
<p><strong>Ryan Burgess</strong><br />
So I think we covered like some of the things that made bandersnatch unique from like a viewing perspective. But I'm interested from a technical perspective. Obviously Gemini are a big fans of watching it but weren't involved in the engineering efforts. What made bandersnatch so much different than some of the kids titles that we talked about that were a very interactive piece. What's so much different? What's so much more complicated that came along with bandersnatch?

</p>
<p><strong>Courtney Kennedy</strong><br />
Well, one of the things that was a real challenge for my team was getting all of the transitions after someone has made a choice, getting them to happen seamlessly. My team considers ourselves success when you don't even notice what we've done when our player just disappears into the background and you can just be immersed in the content. For this title. It was much more challenging than usual. We had to think about how to make sure the right video and audio was there in time to make that transition smoothly. And then there was a lot of work. Really, it was the most cross functional project, we've worked on working with the encoding team working with the UI team, through design to make sure that it was possible to stitch the video and audio together at the right points in the content, because each of those videos are piece like they're not it's not one seamless video, watching it, it felt like one just felt like I was watching something that was very linear, but it wasn't. It was multiple pieces of video, which I think that's where, to your point, Courtney is like, I didn't even realize that was happening, which is a cool experience.

</p>
<p><strong>Maxine Cheung</strong><br />
What was great as I think people who were fans of IT people who would call out the seamlessness, like I think you did at the beginning. Whereas I think when you're watching content, you usually don't think about it, right. Like if it just plays in high quality, that's what you're looking for. But people notice like, wow, that transition was so seamless, like I didn't because the expectation is like oh, it's something's gonna be delay or something right, like, and I think that's the great work that the player teams did to really make that experience.

</p>
<p><strong>Ryan Burgess</strong><br />
mean I expected like a black screen transition? It was like, Oh, you pick this cereal. Now I'm gonna switch to this new video. But it wasn't that it was like, Wait, where was the Where was the break in between the scenes, there wasn't a break, it was just like it felt like it was all put together at once.

</p>
<p><strong>Maxine Cheung</strong><br />
Yeah. And that was really a combination of content being built that way. And the technology because if you do look at our previous kids titles, they don't have that seamless transition. We didn't have the tech yet there. And we built the content kind of accordingly knowing Hey, you're going to have a black frame here or you're going to have a break. So the the animation was kind of built around that

</p>
<p><strong>Courtney Kennedy</strong><br />
there was a great back and forth between the content creation and the engineering technology. We realized that if we couldn't get those seamless transitions, it was going to take away from the story, it was going to break up the rhythm of it and and just take the viewer out of the story. So we worked really hard to get that to work as as well as possible, but at the same time the content creators work to craft their Their transitions and everything around what we could do. So it was really kind of an interesting back and forth that I haven't had before Netflix. You're right. Like, usually we're creating a player, we're creating a UI. And it's just content is fed through it. And that works. But it sounds like there was a very collaborative piece that was happening with the content creator, as well as engineering, which is like, that is pretty impressive.

</p>
<p><strong>Maxine Cheung</strong><br />
Yeah. I mean, so my team, I think, and one of my engineers on my team, basically, you know, he was working directly with charlie brooker, like, you know, trying to understand what their vision was kind of showing them what we could could do. And so I think that was pretty neat. One, we also created a tool to make their lives easier, correct? Yes. called the branch manager. Ryan set that up?

</p>
<p><strong>Ryan Burgess</strong><br />
I definitely did.

</p>
<p><strong>Maxine Cheung</strong><br />
Yeah, there wasn't tools. Because one thing about banners such as super complex, right, like, it's not kind of a traditional, non linear story with like, You know, two branches. I don't know how to get around that. two paths. And so, you know, there's a lot of state tracking that goes on, right? There's a lot of different logic. And so just creating that graph, there just wasn't tools that existed for that. So we did create a new tool for them to help them with that workflow,

</p>
<p><strong>Ryan Burgess</strong><br />
which also, in return, I believe it helped feed some of the data on our end as well.

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's great that like, the engineering team push the bounds of what is possible in terms of interactive content, but for show like black mirror which talks all about, like the edge of technology and the consequences like it a minute Yeah, it's so bad, but it's so it's so great on this other level that I don't think people that understand the challenges behind it. Like they probably don't even know yet that it it just all works together. I don't know I'm a big fan of bandersnatch.

</p>
<p><strong>Maxine Cheung</strong><br />
I think one of the things that I think was very rewarding from an engineering perspective and also very frustrating and difficult at times when we were working is I like to think that Netflix has a really high bar for quality. And something that if you're if you're a Netflix customer, and you normally use your TV or you normally use your phone, you think about the couple of devices that you have, you really have to think about the fact that there is literally hundreds of different flavors of hardware and underlying systems that we want to make Netflix in general work well on. And with bandersnatch. And the seamless experience, that challenge was was amplified on Courtney's and I will in a moment I would love for her to elaborate on Courtney side with the TVs and and set top boxes. There's such an array of hardware, and you have to get it to work with all of that. But even on the browser, there's there's challenges that a lot of times we don't have to think about because we developed something and if it works on the number one or two devices, maybe it's an app or a website, then you're good, but you really want to get the best possible experience everywhere. And I looked at some of these challenges, and I honestly was was forced into thinking about the underlying implementation of the browser. The hardware, because we wanted to have everything worked flawlessly, even something like me not having control over how the browser crossfades between two pieces of audio. That's not something in my five years at Netflix I've ever had to think about as much as I had to think about during bandersnatch. And it's it crossed. So this project cross not just from the content creation, creation, and and the Hollywood side of things to the engineering but also reach deep into even thinking about about hardware and how audio waves are being processed on the piece of technology that you use to watch bandersnatch and I'm sure Courtney had a lot more of those battle stories.

</p>
<p><strong>Courtney Kennedy</strong><br />
Yeah, this is the main source of my anxiety around this release. For for as Maria said, we had to get way down in the details of how each different device handles video and audio handles transitions between two different pieces. And for my platform, there are just so many different device models out They're everything from the brand new 4k TV that just came out last year to, you know, five, six year old set top box. And we had to make this work across such a broad set of conditions. And make sure the experience was was great across all of those. So it was a really challenging problem. We had to think about different ways of doing our QA for this project than we usually use. And and that was a big challenge to

</p>
<p><strong>Ryan Burgess</strong><br />
what kind of specifically to like testing and QA was different for this scenario.

</p>
<p><strong>Courtney Kennedy</strong><br />
Well, for the most part, my team is almost 100% automated testing in the way we qualify our software for this project, because we're so focused on getting the seamless transitions and getting the video and audio quality, perfect across transitions. We had to do a lot more manual testing. In addition to that, we we instrumented the transition so that we could measure them Basically, we we did write a bunch of new automation, and then put instrumentation in place so that we could measure how the transitions behaved while running under automation as well. So it was like a multi pronged approach to try and test it. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
when especially when it's like a large new piece that's happening within the company to if you don't have all the tooling and infrastructure ready for it, obviously, like some manual testing is absolutely necessary to have it from the user perspective as well.

</p>
<p><strong>Maxine Cheung</strong><br />
One thing to add to that was going back to this idea that, you know, this was happening across the engineering, UI engineering and content. All of this was kind of sort of being developed at the same time, which meant that even some of our existing tooling around automated testing, we couldn't use it, because think about this, you actually have a special UI for bandersnatch. But if the UI is not ready yet, you need a different decoupled way of actually triggering those same transitions. So one of the things that we did pretty early on, is we for browser player, we build a standalone testing page where we could test some of the code that we were writing, before we have the UI, the choice UI, and before we have the content, so we actually took regular content and pretended that it was a brand new piece of content. Sorry, cheers. We took this this standalone tool where we could vet out the changes that we're making without having the UI or without having the content. And then as we started having the content, we could test on the real, real bandersnatch. Right, but without necessarily coupling with the UI, because it was important for us to trigger our own transitions and be able to walk through the graph of choices in you know, repeatable, but randomized paths and so on. So it was actually quite fun to think about, how do we collaborate so everything comes together at the end, but during the development process, we stay sufficiently decoupled so we can be making progress at the same time.

</p>
<p><strong>Ryan Burgess</strong><br />
Maxine, I'm assuming that's pretty much on the UI. You had to do things that were abnormal,

</p>
<p><strong>Maxine Cheung</strong><br />
I think one of the challenges for my team is that we're actually a cross platform team. So we're working with each of the player teams in terms of supporting the new functionality for each platform. And then my team has all four platforms that we need to test on the UI side, you know, there's a lot of content to go through, there's a lot of logic, I would say around what we call state tracking, right? So that Frosties or sugar puff choice you made actually shows up later in the content. And that's all magic that the UI is maintaining. And so you know, just complexities around how do you vet out all the hundreds of different paths and making sure that they're consistent was one of the challenges we had? And so long with kind of integrating with all the new playback tech, I would say,

</p>
<p><strong>Ryan Burgess</strong><br />
which I gotta say, too, is like, even just that is when you make a choice, and that it's like, repeated or brought up later, is so impressive. It's it's subtle, but it's there and you're like, Wow, that's pretty cool. Which obviously adds to the engineering complexity because you're like, Great, that's just something else. I have to track and keep state and remember that that was the choice that was made and then make sure that that video is loaded up the next choice or imagine a big challenges. You don't know what you don't know. Like you had these you've done a ratchet narratives with kids cheers.

</p>
<p><strong>Jem Young</strong><br />
Cheers snuck in there. This one there's no no loading had to be seamless and this is like a big tentpole title that a lot of resources went into. And you only have one chance to get it right. Because if you get it wrong the first time people will be like, Oh, it's a gimmick. It doesn't really work. Well. Like what what was the most unexpected challenge? I'm sure when they handed you the the project you've probably said like what, but during the the process, what is something that you didn't expect to be as hard as it was? I'm just

</p>
<p><strong>Courtney Kennedy</strong><br />
trying to think I think I've kind of blocked them all out at this point.

</p>
<p><strong>Ryan Burgess</strong><br />
It's out the door. You're done.

</p>
<p><strong>Jem Young</strong><br />
Yeah,

</p>
<p><strong>Maria Kazandjieva</strong><br />
hands down. I have to say audio.

</p>
<p><strong>Courtney Kennedy</strong><br />
That's what I was gonna say.

</p>
<p><strong>Maria Kazandjieva</strong><br />
I was an MIT. I've been from an engineering perspective for me and I think for coordinate and the other Are the other player teams as well as the mobile teams. I've been at Netflix for five years in three months. And it's not that I don't like thinking about audio, we're doing audio right now with this podcast. But generally, there's a lot more cycles being spent on the video component because it's generally more complicated. But for this, I was not prepared for how much we had to think about audio and getting that, that to be seamless. I don't want to kill anybody's Bose speakers.

</p>
<p><strong>Courtney Kennedy</strong><br />
Right? Or their ears

</p>
<p><strong>Maria Kazandjieva</strong><br />
or their ears. Oh, yeah, that's

</p>
<p><strong>Ryan Burgess</strong><br />
correct me if I'm wrong, too, is it's the video and audio are separate. Yes. And so to me, anytime that happens, that's a challenge in itself is trying to make sure that Oh, even the sinking exactly like yeah, so just knowing that I don't, I don't think I really thought about that until the talk said, you all gave out a JavaScript talks that we hosted at Netflix. And I was like, oh, wow, yeah, that makes sense that that has to be separated. But how much more challenging? That is like, just just from an outside perspective is like, oh man, that's not easy.

</p>
<p><strong>Maxine Cheung</strong><br />
Yeah. And like Courtney's point, we focus a lot on video and like the visual, right, and you want that seamless, no black transition. But if you listen to it, you also want that transition to make sense to and kind of the audio transitions, like, you know, continuing across the segments is really important to keep you in that world. Because that can be very jarring, right? Like hearing a pop, or just, suddenly the audio changes, right? So

</p>
<p><strong>Ryan Burgess</strong><br />
you don't want the black screen. But if there's a pop or weirdness, then your seamless video doesn't really look great anymore, just because that it throws the user off at that point.

</p>
<p><strong>Maria Kazandjieva</strong><br />
And the soundtrack for bandersnatch was so amazing that we really had to do adjust this. I might have listened to it a little too many times in December. But we had to do right by the audio.

</p>
<p><strong>Jem Young</strong><br />
Definitely a good one. So it was the primary challenge is there's say a background audio track during a choice point. And you had to continue that no matter which which point they chose. That was one of the challenges.

</p>
<p><strong>Courtney Kennedy</strong><br />
Yeah. Being able to get to sort of stitch two separate together. disparate pieces of audio together and have it play without a click or a pop or any kind of artifact is was, in a lot of ways more challenging than getting the video to play seamlessly across. And then the third piece, if you got both video and audio looking and sounding good, you had to make sure they were in sync. So those three pieces of the puzzle and doing it across all of the browsers, all the different conditions, all the different devices we support. And that that was the complexity of it.

</p>
<p><strong>Maxine Cheung</strong><br />
And there's different challenges on every platform for for audio, including the mobile platform,

</p>
<p><strong>Ryan Burgess</strong><br />
which I thought like, yeah, thinking that the TV ecosystem I feel like is even harder. But even mobile, like especially Android, there's such a vast difference of devices that you're dealing with. So I feel like that ecosystem is large enough. And then browsers of course, have their own fun and quirks that you have to deal with all the time. So yeah, all around. There's not one perfect device either. That would have been nice and easy. So on this podcast, We mainly focus on front end JavaScript. And the interesting thing is what we're talking about here is a lot of JavaScript. What can you tell us about JavaScript and how this helped make bandersnatch so interactive?

</p>
<p><strong>Courtney Kennedy</strong><br />
Well, for my platform, we couldn't have done it if we didn't have a JavaScript video player. Because the way it works as Netflix ships, a library on all of our devices, when they are when they are manufactured, and that libraries, it's written in c++, and it ships as a binary on, you know, new TVs or what have you. And it's usually pretty hard to update it after it goes out. So if our video player was included in that library, instead of being a JavaScript downloadable piece, we wouldn't have been able to innovate on it across the whole ecosystem. And and do the work we needed to support this. It almost be just for like new devices or ones that you're like, Okay, well, this is going to be a new device so we can ship this new feature. Yeah. So it was basically the difference between being able to do it at all or Not That's awesome.

</p>
<p><strong>Maria Kazandjieva</strong><br />
Yeah. And from from my perspective to add to that, of course, our video player runs in, in the browser. So naturally it's in it's in JavaScript, even though it's actually written in TypeScript, and then transpiled. But the ability to have JavaScript actually plays a big role in us being to innovate across the teams, because there is components of the playback experience that are in JavaScript that are shared between the player that Courtney steamships in TV devices, and so on, and the player that that we ship. And so actually, as we were working on bandersnatch, people from engineers, and both of our teams were working together on the same shared module of JavaScript code. And that really enabled us I think, to just speed up things a little bit, and learn from each other and figure out how to do this in an efficient way. So I think having common languages is critical.

</p>
<p><strong>Courtney Kennedy</strong><br />
That's really true. If you think about all the work that we did, if we'd had to do those two separate implementations boy

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it could be done, but it would take a lot longer. And you're also not you're not getting any benefit from the shared aspect. Yeah,

</p>
<p><strong>Maxine Cheung</strong><br />
well, our front ends are written in JavaScript as well. But I think what's great is because there is so much that was on the playback side, too. So our TV UI, our web UI are all in JavaScript. I think the challenge for my team is that our mobile platforms are native, right? So there isn't a lot of sharing, we can do on the UI side. So we actually do push a lot of the business logic onto the back end, right. So outside of JavaScript, but we really want to take advantage of some of that sharing, right. And it's very much a metadata driven UI. So we can we can do that, which is really, I think, what helped my team in terms of coordinating and making sure we have a consistent experience across all of those devices.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think that's what like thinking about, we've heard the big theme of like, how do we support across like multiple platforms. And just hearing those two pieces where it's like some of its going to be backend driven, but some of it is and just leveraging JavaScript to be able to enable us to be on all these devices is pretty powerful as well.

And not to mention that in general JavaScript is making It's way too many people's back ends these days.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean JavaScript everywhere. I like we hear it all the time. Right? So better

</p>
<p><strong>Maria Kazandjieva</strong><br />
for worse. Depends on the day I suppose.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've talked about the interactive pieces for kids. For now we've we actually have done something for adults, and really up leveled the game of Netflix and how I don't want to use the word. So it's going to be more just keeping it to the interactive experiences. What can we expect in the future for the technology? What are things that we want to be investing in at Netflix?

</p>
<p><strong>Maxine Cheung</strong><br />
That's a good question. I think bandersnatch definitely opens the door to us to explore more around adult interactive content, right. But we're also continuing to explore around the kids and family space as well. Right. But now we can leverage a lot of like, of this new playback tech that we have. And I think, you know, on the product innovation side, trying to figure out what are the new different features or new tool sets we can offer content creators for them to kind of create different stories right? Like, and so I think there's a lot of different possibilities you can use with like the branching mechanic. Cheers, cheers. Cheers. That will be interesting to see what they can come up with. Because in the end, our goal is to give them the tools for them to create stories they couldn't create before, right, like, and so branching is just

</p>
<p><strong>Maria Kazandjieva</strong><br />
wow, cheers. I don't know if I can keep up. Maxine, sorry.

</p>
<p><strong>Maxine Cheung</strong><br />
It's one of the mechanics. But it might not be the only one we might explore around interactive content in the future.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that, too, is like even creating tools is also we're kind of getting out of the way of content creators, as well as like, here's a mechanism that you can use, but we're not telling you how to do it. It's like really just giving the right tools to them and walking away and allowing content to be created the way it should be.

</p>
<p><strong>Jem Young</strong><br />
Yeah, exactly. It's really giving them the control, right. But then it's just, it's just new ways for them to think about bringing a story they couldn't maybe do before, right like on a linear platform, right and even just our distribution model, right? Where we can be on all these devices and all these different types of devices at the same time. It's really powerful. So on top of the the audio challenges, the video challenges, the brand new player sinking all this the the hardware challenges and the content challenges, you had the additional challenge of creating, making sure whatever you're creating is reusable in the future, not just one off tools because like, you know, we're all engineers, we can all hack something together one time. But to create it for the future is another layer of work is anybody's like ever open source anything knows that, like it's so much more work. So you had a role that in top of all the other work you're doing?

</p>
<p><strong>Maxine Cheung</strong><br />
Yeah, in a way. And then the thing is, I think a lot of people don't realize is that bandersnatch wasn't our first branching narrative title.

</p>
<p><strong>Maria Kazandjieva</strong><br />
Here's our first action is really killing it.

</p>
<p><strong>Maxine Cheung</strong><br />
Ryan chose us I'm like this,

</p>
<p><strong>Ryan Burgess</strong><br />
you might be winning this game.

</p>
<p><strong>Maria Kazandjieva</strong><br />
I don't know. I feel like I'm winning.

</p>
<p><strong>Maxine Cheung</strong><br />
But it wasn't our first and I do think if it was it would have been a lot more difficult because we didn't have the opportunity to build that foundation. For us. We are trying to build a reusable framework right? Like this isn't going to be one off just for this one title. Because we want to be able to support more this stuff in the future. And so on the UI side, it's all metadata driven, right? So it's not like we're building super customized UI is and that's not the goal. It's the goal is to make it flexible for the future.

</p>
<p><strong>Maria Kazandjieva</strong><br />
And I think that goes for for the playback engineering bits as well, where some stuff we we build it in is more general, like some of the testing stuff, we kind of started thinking about how do we decouple how do we make it more general? As I said, Hey, I want to be able to test bandersnatch without having bandersnatch. Right? Because if every time you have to wait for the next title to be available as a as a video, before you can start working against it, it's almost too late. But I think there's also a lot of opportunity to think about how we can generalize some of the tools that we've had. How do we think about monitoring how these titles are performing in production from a quality of experience perspective? Is the video pixelated? Are we having audio issues, those things are across titles, and some we started building for bandersnatch but I It also opened a lot of new challenges and questions, where as Maxine said, it's not our first one, it's not our last one. And so how do we scale everything so that we can bring more of that content to Netflix viewers,

</p>
<p><strong>Courtney Kennedy</strong><br />
my team learned a huge amount from this project. And it really did point out some places where we need to shore up infrastructure support, testing, support, and, and even re architect the way our player works to be more flexible and more robust as we have. I mean, it may be their new interactive titles that we need to support, but it could be something different. That requires more flexibility in the player.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I mean, when you originally wrote the player, I'm sure you weren't like, Oh, this is gonna need to be interactive at the time, right? Like, right, it's like so what are those future things? And the more that we can think ahead of them Yeah,

</p>
<p><strong>Maxine Cheung</strong><br />
yeah, we don't know yet. Right? We we don't know. We don't know

</p>
<p><strong>Ryan Burgess</strong><br />
which is the most interesting piece of it. That's what we love is solving problems as engineers

</p>
<p><strong>Maria Kazandjieva</strong><br />
every day is a new day and a lot of the challenges are not not repeated, which It's why I like it.

</p>
<p><strong>Ryan Burgess</strong><br />
It's fun. So at the end of each episode, we'd like to share pics of things that we've maybe found interesting that we want to share with our listeners. Let's go around the table and share pics for today's episode. Jem, you want to start it off? Uh,

</p>
<p><strong>Jem Young</strong><br />
yeah, I'll start off with my Valley silicon Vic. For those who don't know, Valley silicon is the pick. Why highlight that people in Silicon Valley just have too much money. And we just throw money at things that just probably should exist, but they only exist because we pay too much money. One of them is the FDA issued a warning today against companies that were selling young blood. So what it is is rich people Excuse me. Yes. So

</p>
<p><strong>Maria Kazandjieva</strong><br />
I'm sorry. I'll take a sip of my drink. We drink young blood and selling in the same sentence.

</p>
<p><strong>Jem Young</strong><br />
So they they satirize it on Silicon Valley, the HBO show, which is great, because that's actually a documentary about what really happens out here. But what it was is millionaires ostensibly could buy young blood, so The blood of 18 year olds are suddenly 20 year olds and injected themselves and it's supposed to be some sort of life altering life extending I don't know what it's supposed to do. How do

</p>
<p><strong>Maria Kazandjieva</strong><br />
we make it stop

</p>
<p><strong>Jem Young</strong><br />
rejuvenating? Oh, yeah, make your skin look I don't know what he's supposed to do. But

</p>
<p><strong>Maxine Cheung</strong><br />
so like I've heard this in like a bad movie. Exactly. But this real life

</p>
<p><strong>Jem Young</strong><br />
this is why it's Valley silicon. So the FDA actually had to issue a warning against doing this because they said there's no proven benefit. There are downsides. There are companies that exist in Silicon Valley that do this so this is this is real life people this is actually happening. So that's my pick Valley silicon is the fact that you can buy the blood of a young person and injected in tears. You're not advocating for it though. No, I'm definitely against that's

</p>
<p><strong>Maxine Cheung</strong><br />
an anti recommendation.

</p>
<p><strong>Jem Young</strong><br />
That is a but it's my pick for things that shouldn't exist but only exists because there's too much money out here. My second pick, I'm gonna I'm gonna take it a little bit lighter. I'm gonna pick the umbrella Academy. Yeah, it's it's very different. I think had I not known it was a comic or a graphic novel. I would not have liked I would have been like this is a really weird show. But understanding it came from a graphic novel and like it's shot like that. I really enjoy it. It's a nice change from our traditional Marvel offerings which are a bit more darker. Not as funny. This one has like humor. It's got a lot of complex interactions. I really enjoy the show

</p>
<p><strong>Ryan Burgess</strong><br />
Maxime, what do you have for us?

</p>
<p><strong>Maxine Cheung</strong><br />
Right now I'm watching on Netflix is tidying up by Marie Kondo, so everyone should konmari their lives. And so

</p>
<p><strong>Ryan Burgess</strong><br />
is this podcast bringing you joy?

</p>
<p><strong>Maxine Cheung</strong><br />
This podcast is bringing joy and it does not add clutter into my house. Right on. And so yes, I think maybe my husband's a little bit more into it than I am, but definitely recommend people checking it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Have you been folding your clothes really neatly? Yes. In little, little pockets

</p>
<p><strong>Maxine Cheung</strong><br />
or whatever?

</p>
<p><strong>Ryan Burgess</strong><br />
Right. Oh, Maria, what do you have for us?

</p>
<p><strong>Maria Kazandjieva</strong><br />
All right. Well, at the beginning, since this is a front end, happy hour podcast, we did talk about drinks, and I mentioned the sour beer. So I should do a sour beer recommendation. There is a brewery in Monterey, California. called Alvarado street brewing. And they have a line of sour beers called the East of Eden, where East is spelled with a Why? Because the sour beer in it highly, highly recommended. So that's on the drinks side of things on the keeping it light. I mentioned before we started recording that, apparently people auto tuning their cats on Twitter is a thing. You know, make sure that you don't pop your ears or your Bose speakers without one but it's kind of fun. And then on the perhaps more content side of things. There is a book that I want to recommend which is called amusing ourselves to death. It was written in 1985. And it might as well have been written last November. It talks about television as a medium and how it changes the public discourse in general, it's a bit more focused on news rather than entertainment. But it makes a really good argument about why television is a different medium than writing or audio, and how it actually impacts what information you can present and what level of intellectual conversation you can have. So it's quite fascinating. It is worth mentioning that I learned about this book by reading an interview with the singer from the Arctic Monkeys about his latest album called Tranquility Base Hotel and Casino, which is my other pick. It's a concept album. So again, listen at your own risk. So I think that book and that album, in the fact that they're related kind of blew my mind. And then one last pick, which is a lot of people who know me know that I love love, space and physics. And so I'm going to give a shout out to Scott Manley, who's from the Bay Area and does a lot of space related videos on YouTube. And they're highly educational, and super interesting, and a great snack in between my binge watching of the moment. Academy

</p>
<p><strong>Jem Young</strong><br />
right on, you know that, uh, the idea of kind of like how the internet and things have changed or just are how we, how we ingest media and art came up in a Russian doll, which is a pic last time. Yes. It's like why visual art has declined in the past 30 years and the answer was like the internet like it is not declined. It's just moved to a different different media different media. Yeah,

</p>
<p><strong>Maria Kazandjieva</strong><br />
it's pretty fascinating and is all of us being being at Netflix I think there's it's interesting to think about those those types of questions because we're creating, you know, in that medium,

</p>
<p><strong>Ryan Burgess</strong><br />
that's really cool. Courtney, what do you have for us?

</p>
<p><strong>Courtney Kennedy</strong><br />
Oh, boy, it's hard to too hard to follow. I don't know if I have mine or any good. But I'm an amateur musician. And lately, I've been watching a lot of bio series or documentaries about musicians, the Quincy documentary, and there's one about Sam Cooke as well that I thought was great. And then for books, I'm reading this really interesting book by Kelly McGonigal who's a professor at Stanford. It's called the upside of stress. And it's about how, you know, we always think of stress as bad and something to minimize in our life. But she's makes the case that is actually a constructive thing that you should embrace. So I

</p>
<p><strong>Ryan Burgess</strong><br />
like that. So I don't have to worry about stress. I can just say it's a good thing.

</p>
<p><strong>Maria Kazandjieva</strong><br />
I've read some of her prior work and would plus one, that recommendation. Her research is pretty fascinating.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on, well, I'm going to only follow with one pic. And it's actually kind of boring compared to all these graphics, but I'm actually choosing a foam roller for your back. Honestly, like as engineers who sit at your desk all the time. It's you back and get sore and hurt. And I actually got the recommendation from my tattoo artist who's doing some work on me was, I'd ask him like, you must have the worst back pain because they're literally sitting and hovering over in like weird positions. And he said no, because he uses this foam roller. That's like, I don't know, like $30 on Amazon and he uses like one or two minutes in the morning one or two minutes in the evening and he does no back problems so I've been doing that for almost a year now and like I'm not probably as consistent as it sounds, he is doing it but it actually does help a lot I feel like I don't have as much back pain and maybe my posture is a little better I don't know if it is but so that's that's gonna be my pick.

</p>
<p><strong>Maria Kazandjieva</strong><br />
Do you have a recommendation on how to get myself to start using the foam roller that is right next to my television in the living room and I've owned for three four years

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, just set a reminder you know put put time in your calendar for it like come on. these are these are easy problems to solve

</p>
<p><strong>Jem Young</strong><br />
your budget manager.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. That's the easy way to solve this your

</p>
<p><strong>Courtney Kennedy</strong><br />
to do list that'll help Yeah,

</p>
<p><strong>Maria Kazandjieva</strong><br />
it's having the calendar that's actually not a

</p>
<p><strong>Ryan Burgess</strong><br />
that's a good idea. I told you I like to make time for the calendar will tell her that she's supposed to do that and she'll follow I only

</p>
<p><strong>Maria Kazandjieva</strong><br />
do whatever the calendar says. So it's pretty much

</p>
<p><strong>Jem Young</strong><br />
I was telling my fiance this Lauren, I was like if hackers want to break so Can Vallier like break the web? Just like delete Gmail and Google Calendar and like we would all be lost. I'd have no idea what's going on this week. I'd

</p>
<p><strong>Ryan Burgess</strong><br />
be pretty bored. I don't have anything to do. Yeah, sweet.

</p>
<p><strong>Maria Kazandjieva</strong><br />
Jem, I gotta tell you that I am super excited to have been super excited in the last probably fewer than 24 hours. I feel like I have a new phone. And it's really, really cool because I genuinely I feel happiness because I feel like I have a new phone. But I don't have a new phone. What happened is I got the Gmail update. And Gmail looks different on my phone. But I spent so much time in Gmail on my phone, that it actually feels like I have gotten a different phone and I caught myself being kind of excited. Well, this looks different. Like there's some dopamine something's happening in my brain is because Gmail looks different.

</p>
<p><strong>Ryan Burgess</strong><br />
So yes, you're my advice because of it.

</p>
<p><strong>Maria Kazandjieva</strong><br />
Yeah. And so yeah, you're right. I think if they wanted to take me out, take my Gmail, take my calendar and and i will be crippled or I'll just take a break and you know, have another drink.

</p>
<p><strong>Ryan Burgess</strong><br />
So before we end the episode, I want to thank you all for joining us. Thank you, Courtney, Maria, and Maxine. for joining us, it was a pleasure having you on where can people get in touch with you? You know, some people say Twitter but I'm also open to hearing other examples where they can get touchy phone numbers, address, email, whatever works LinkedIn.

</p>
<p><strong>Maxine Cheung</strong><br />
I told Ryan I don't have a Twitter account. Um, so I would say you could reach me on LinkedIn, maybe I'm not going to give my email address my name

</p>
<p><strong>Ryan Burgess</strong><br />
or your phone number, not your address.

</p>
<p><strong>Maxine Cheung</strong><br />
No, I think I'm okay. LinkedIn. My name is Maxine Chung, CH e un g which confuses people. You can find me there.

</p>
<p><strong>Maria Kazandjieva</strong><br />
You can find me on Twitter. My handle is at <a href="https://twitter.com/stranger_cork">@stranger_cork</a>. The cork is because I like physics as we've established. The stranger is because strange was taken which is the proper name for this so I really wanted strange cork. But it was taken so I took stranger but it kind of works because I love Stranger Things. And it's Netflix II so stranger cork. If you do follow me before There's a lot of space stuff that happens on my Twitter and cats as well. I was

</p>
<p><strong>Ryan Burgess</strong><br />
just gonna say the cats have to be put in there. Yeah,

</p>
<p><strong>Maria Kazandjieva</strong><br />
there's cats in space and some random techie stuff. All right, Courtney.

</p>
<p><strong>Courtney Kennedy</strong><br />
Well, I like Maxie, and I also don't have a Twitter account, but you can find me on LinkedIn. Courtney Kennedy, working in Netflix, so

</p>
<p><strong>Ryan Burgess</strong><br />
right on. Well, thank you all again for joining us. And thank you all for listening today's episode, you can subscribe to front unhappier podcasts on whatever you like to listen to podcasts on. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>

</p>


  `;
  return transcript;
};