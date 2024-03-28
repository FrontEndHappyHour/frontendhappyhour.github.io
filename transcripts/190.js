module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. We have a special bonus episode that we're releasing this week, we teamed up with Chuck and Robbie from the whiskey web and whatnot podcast to do a bit of a crossover episode. It felt very Suning to have a whisky, web development, podcast and front end happy hour doing a podcast together kind of makes a lot of sense. So in this episode, we get together and discuss the trends that we're seeing in our industry. Right now. We talk about the introduction of the apple vision Pro, ar, VR and AI. Before we start this episode, let's each give introductions. We can start with Chuck and Robbie from the podcast, whisky, web and whatnot. Then Jem and myself will give introductions from front end Happy Hour podcast.

</p>
<p><strong>Chuck Carpenter</strong><br />
Yeah, what do I do in the world I breathe and live. So I am Chuck carpenter Charles William Carpenter, the third on the internet. I've been doing the internet thing for a little over 20 years. Everything from building sites and apps around ecommerce for National Geographic for a little while Engineering Leadership for a while working in open source to like with the shepherd Jas Tor library, and most recently, co host of whiskey web and whatnot.

</p>
<p><strong>Robbie Wagner</strong><br />
Yeah, I am the other co hosts of whiskey web and whatnot. I worked for rt 19, which is a podcast platform that Amazon acquired a couple years ago. Oh about me. I like telling a lot. I like TypeScript. If it starts with T, it's probably cool. I've been doing web stuff since like 2012. Professionally, but like, before that I dabbled with MySpace layouts and Photoshop and stuff like that. And from 2012. Basically until now, I've been using Ember almost exclusively. And I'm a big Ember fanboy.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. doesn't start with a T, though.

</p>
<p><strong>Chuck Carpenter</strong><br />
Already, throughout your whole thing. I was gonna say, are you working at top towel? And one of the T things can you think? Tether? Telogen library? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Jump me want to go?

</p>
<p><strong>Jem Young</strong><br />
Yeah. Jim Young. I'm an engineering manager at Netflix. I lead the web platform team. So all the episodes on netflix.com are built on my team's platform. I also run the growth UI platform team as well. So if you've ever been to TV, iOS, Android, and you navigated there, logged in and saw the homepage or manage your account, or lots of other things. That's also my team that manages all the data and the servers, the infrastructure for that. I do that with a lot of people. So I stay pretty busy all the time. Before we started the episode, we talked about Friday meetings. I have a lot of them. Still. Let's see how long have I been doing web development? A long time. I've always dabbled. I think my first programming was in middle school programming on like, doing Excel programming, some systems programming where I got in some trouble. But this is like the early days when password which is password wasn't hacking, but you know, I really wasn't if you make it easy. If you leave your front door open, you know, you're gonna Wow. But fortunately, I was able to pivot that into actual career. So I've been at Netflix about eight years, three years of that as a manager. The other five was as a senior software engineer doing lots of stuff, but usually working full stack somewhere. And I've never used ember. Don't judge me, Rob.

</p>
<p><strong>Robbie Wagner</strong><br />
Hey, most people haven't. It's okay.

</p>
<p><strong>Chuck Carpenter</strong><br />
Haven't or don't. Just kidding. Avoid

</p>
<p><strong>Ryan Burgess</strong><br />
it. I don't know. I've touched it. I have, but haven't done a lot with it either. Yeah. So I'm Ryan Burgess. Right now I'm actually unemployed, which is been amazing. I've taken some time off. I was previously at Netflix as an engineering manager. I was there for over eight years and decided, hey, I need a change and a break. And so I'm taking that. Yeah, I think I've been doing in the web development space. It's been like, over 20 years now that I think of it. But I've spent the last 10 of it as a manager. So you know, maybe a little less coding. That's probably maybe Rob why I'm not touching an ember as much there.

</p>
<p><strong>Chuck Carpenter</strong><br />
We shoot all right next to it at some point. Yes,

</p>
<p><strong>Ryan Burgess</strong><br />
yes. I remember having to touch some code on it. I can't remember what it was that I had to do. And so it was very minimal. But over the years, I've touched so many different JavaScript frameworks. It's like you name it. I've probably done something in it. Working at a lot of agencies over the years like you would jump around to different clients and whatever they were using. That's what you're developing on. So it's kind of cool. I I enjoyed that I got a taste of all the different frameworks that kind of evolved over the years. But yeah, and in our episode today, I mean, it's kind of cool to have the two podcasts coming together. We figured let's just have a conversation over some nice whiskies, obviously, you know, keeping on the happy hour and whiskey theme makes a ton of sense. Yeah, we figured let's kind of talk about some of the new trends that we're seeing, right, we're seeing a lot of different things around like AR VR AI, like all these two letter acronyms. And you know, recently, we just saw the apple vision pro come out. And I'd be curious to hear all of your thoughts on like, what does this mean for us in our industry? Are you all excited about it? Did anyone even buy one, you know, at that nice $4,000? price point? Yeah. Curious. Let's dive in. Yeah,

</p>
<p><strong>Chuck Carpenter</strong><br />
I feel like the the price point is certainly something to curtail, like diving in headfirst. But I am interested in curious. I always thought like the simple use case of like, having a big screen for your laptop, in a small space is great. And you're more mobile in certain ways. Although the price point just to get that maybe sees them seems a little overwhelming. I guess I'm I don't know, maybe it's just a me thing. But I was kind of surprised when I kept seeing images on the internet and Twitter mostly where it's like folks just walking around town and crossing crosswalks and all of this, like, wearing it full time all the time, that I didn't really see coming, but maybe I'm naive. I

</p>
<p><strong>Ryan Burgess</strong><br />
mean, I was in the same boat. I was very surprised that people doing that. And I laugh when I see the little clips online to have you know, someone at the Clippers game at courtside. Like seriously really? Are we? Yeah, that's that's happening, or people driving their Tesla, you know, worrying that. It's different. I didn't expect that. I kind of saw it as in like, yeah, in your home, totally get it but wasn't prepared for people. I mean, I should have just assumed people are gonna do stupid shit. So

</p>
<p><strong>Robbie Wagner</strong><br />
Oh, yeah, yeah, I was just gonna say I think like I had no problem buying an XDR monitor. But this was when we had more money back in the day too. But, you know, if you're thinking about that, as your top end monitor, like, Apple vision Pro is pretty cheap. So if you can get a huge monitor, and it's like pretty good from that, then maybe that's the use case that makes it like not so crazy expensive. I like that.

</p>
<p><strong>Jem Young</strong><br />
I have seen people and the like the three monitor setup is nice, because that's unwieldy for most people. I'm actually a convert of one big monitor from multi monitors. It's just less cables, less resolutions to deal with. But I think, one, I'm very skeptical. If you've ever looked at a friend, I'm happier. You know, like, I'm generally skeptical of technology. Ironically, living here in Silicon Valley. One, I think a lot of those like people looking unusually kind of cool. Walking down the street playing with a vision Pro is probably like, marketing from Apple, people like Oh, Apple wouldn't do that. And my companies do that. People said, No, marketing is a big, big part of any company, and they spend a lot of money on it. And it doesn't usually look like what you look like. So I'm skeptical of those, those sorts of things. But also, I live in Oakland. So I dare anybody to walk down the street doing that, because you you won't you won't get very far. But I do think to the the price point aspect, it's deliberately priced expensive one to keep out people. I don't know, your casual user from using and selling saying like, Oh, it's great, but it doesn't work for this use case, like at that price point, people are going to be more amenable to the issues because it's the first generation device. And to buy even expensive, you make it kind of you make it a status symbol, which is kind of what Apple has always been going for with their devices, which is like, I have an iPhone, I've got this, I got that. And like, the quality is good, but they're also known to be expensive. So that's kind of where I see the people using it more, rather than like the utility of I can get work done or whatever they're doing at a clippers game. Or driving my car. It's it's more of like, it's a status symbol of like, look at me and I can spend $3,000 device on $3,000 on this device. I think it's gonna be cool, but I definitely wait for a generation or two because like, you know, it's gonna get better resolution and lighter and cheaper.

</p>
<p><strong>Chuck Carpenter</strong><br />
Yeah, yeah. Like this is the pro version. It's, you know, cost prohibitive in those ways. I guess I could see that. Definitely. It's like the modern day Air Jordans. Like look what I have and you can get Toby for say, Yeah, I hadn't really considered that. I do think that it's interesting because I had some of my own like thoughts and presumptions around like use cases and stuff. But I think we're gonna end up being like really surprised and all the different ways that can be used and the way that it like analyzes engages with your environment. That's kind of cool. I don't know that I want to put goggles on my eyes 24/7 though. So that's like kind of the downside. Even in the work use case that was like one thing where like, compared to a monitor Right, like, obviously, for an expensive nice monitor, perhaps it's not crazy expensive. But on the other hand is can I wear this thing for four or five, six hours a day at? I don't know that I can.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think that's a big one is like you hear, I mean, the weight, it's pretty heavy, like it's heavy glass, they're built really nicely, like the quality's there. But that's a lot of weight to be putting on your head. I don't know how I haven't tried them yet. But I know that even with VR, I get sick, I can't do it. Like, there's something off for me that I can't last a long time on that. And I could see that people, maybe even struggling with the Apple vision pros where it's like, it might be very distracting to have it all the time. I do like the idea of though, like the you all are touching on on the monitor aspect, mainly because I actually don't like having a monitor on my desk. Like, if it's, it's, they're ugly, I'm sorry, but like, most monitors are just, they're not great. I am like jam, I've moved to those single monitors, like, you know, decent size where I can get, you know, a lot of real estate. But for the most part, I have one application on my screen at a time so that I'm not getting distracted. I feel like the vision Pro I might get distracted, right? Like you see all these videos of people throwing screens everywhere. And I'm like, I don't want that I just, you know, I want my one application that I'm focused on. I guess I could have massive, you know, as with division Pro, that's kind of cool. I did however, like some of the utility of some of the people like placing screens around the house, so like, you know, shopping list on your fridge or a calendar in a spot. And it's like, yeah, I mean, you could literally do that with physical things, but it's kind of cool or gimmicky that you can put that as like a virtual reality thing, too, as well.

</p>
<p><strong>Jem Young</strong><br />
I think the the biggest, like the biggest coup here that Apple has done was to kind of normalize it so like back to the seeing people walk down the street and and seeing everybody using and throwing monitors everywhere. All this was possible before with existing products, another company so Microsoft HoloLens and HoloLens two, you could do the same thing, sort of like you couldn't walk down the street as much. But like AR was there, a medic quest pro, you could do the same thing like pass through granted for I haven't used either of them. But my understanding like the pass through camera was not it's not as good. It's not as like, it's more VR rather than AR to me. Oh, and let's not forget, I'm gonna throw this one. Stop me if you've heard of Google Glass. Anybody remember that one? Yeah. Briefly. Yeah. Remember when Google launched that? And like they got such pushback from everybody. They're like, there's an inappropriate names who will name those people? You just generally did not look kindly on those people wearing that, but somehow,

</p>
<p><strong>Ryan Burgess</strong><br />
they're called Glass holes. Right? Like, yeah.

</p>
<p><strong>Jem Young</strong><br />
Like apples like made it cool to wear these like, bulky glasses walking down the street. And like,

</p>
<p><strong>Chuck Carpenter</strong><br />
is it cool down? Has it cool? Yeah, I was gonna. We're talking. I

don't think it's cool. No, I mean, we like talking

about it. Because at our hearts, we want to try it. I think everybody wants to try it. Right. I do think it's stupid. I think like being in a restaurant or walking, like crossing the street with that on your face is it's like walking around with like, you know, snowboarding goggles or something. Right. Like, nobody does that either. Because they're really cold winter, maybe. Right. Yeah. Or when snowboarding or something of that nature. Right. Yeah. So that was look dumb.

</p>
<p><strong>Robbie Wagner</strong><br />
So you're saying I agree snowboarding with him instead?

</p>
<p><strong>Ryan Burgess</strong><br />
Well, not dangerous at all.

</p>
<p><strong>Chuck Carpenter</strong><br />
Yeah, that'll be like that. What was that old like and 64 game like 10 at snowboarding or something? Like, you'll feel like you're in that game, but then you will also slam into a tree and hurt yourself. So yeah, I mean, the fact that we're talking about it, I mean, that's, you know, Apple has that effect, good bad everything in between, we all are interested in it. That's the funny thing to have it but I remember how when they did the first $1,000 iPhone and people were like, That's ridiculous. That's the ceiling. I would never pay that for that. Yeah, we all go and do that. Eventually, they figured out ways to open it up to us anyway. So that's

</p>
<p><strong>Jem Young</strong><br />
the power of Apple branding is like they weren't the first to do any of stuff. But like, they're normalizing a little bit more of like, maybe people aren't nerds wearing these signs, snowboarding gloves and goggles. And I assume future generations get smaller and smaller and lighter. So to me, that's the biggest shift is like, what Apple is done with something like that is we're even talking about using for work. I've never once had a conversation with Ryan and all our years of friendship of like, hey, maybe we should use Google Glass or the medic quest Pro or the the valve index, which was specifically built for multi monitor in programming, but like we never had a conversation about actually using that but now we're having a conversation about Maybe using the vision pro in the future for coding. So, to me like something has to be tilted in terms of like thinking about AR in general, as engineers, which is

</p>
<p><strong>Ryan Burgess</strong><br />
kind of cool, though gem to that Apple is like making it a little more mainstream, that people are talking about it. And I think that's what's needed. Right. Google Glass was maybe before its time it was people just weren't accepting of it at that point. And maybe it took Apple pushing some of that I think it does, Apple does a really great job of getting people to want their products and kind of almost normalize that that's a thing. And it's going to take time, it's not going to happen overnight. Clearly, with that price point, that's not going to work. I think even if it was like $1,000, you might have seen a lot more people like me, and like, yeah, I would totally buy that and try that out. But when it's at that price point, it's really hard. And I know that we'll see something someone said it earlier is more generations of this, and it'll be a lot cheaper. And so the adoption will be bigger, which is kind of cool. They'll also sort out a lot of issues. I don't know how many issues there are out there, but like they will change and adjust things. One thing I wanted to bring up was the whole FaceTime thing where you can FaceTime with people, which is cool. I think that's an you know, a cool idea is that, yeah, you can be wearing these glasses and FaceTime with people. But then apples making like an avatar of you or it's supposed to look realistic. But it doesn't, right. Like it's like a avatar of yourself. And that's what the other person sees on the other end. That to me is a little bit creepy. I'm just gonna say that I'm like, I don't think it's like something that even if it's perfect, that's creepy. Like, even if they get it perfectly right that it looks like I'm wearing Apple, you know, Vision pros right now. And it looks like to all of you that it looks completely normal. That's still weird and creepy that that's just a video version of me. And that's weird. I don't know, what do you all think of that?

</p>
<p><strong>Chuck Carpenter</strong><br />
I think you've just tied it back into what you were introducing in the beginning of our discussion around AI. Right. So like, AI you AI generated you in video. I mean, there's companies doing it with videos. And obviously you can do AI generated like headshots and things like that, and popular for for a little bit now. So it's just another iteration of that, right? Like this is it is kind of creepy. Because you're thrown off, you're like, you're presenting fake me to the person I'm talking to. And it's a little too close to reality. Maybe that's the plus side of the like crappy meta avatars, right? Like, we're like, oh, this is a joke. This is like this. This YMS. Yeah, cartoon. Yeah, yeah, not great. I did try to use like, meta has horizon workspaces. And I did a couple of meetings with that, and did try to do a little work on the whole thing. But yeah, it was it felt like it was in a video game world. I didn't get the point. But maybe with more AI related things, it does become normalized, which is almost scary. That's a good point. You know,

</p>
<p><strong>Ryan Burgess</strong><br />
it's the more AI stuff out there it is getting to be like a little, maybe almost concerning, because we need to be able to understand the difference from reality versus like an AI generated thing. I mean, we're on a podcast right now. So audio is a big thing. There are apps out there that can just generate your voice from like a small 10 Stick, second clip, and you can just type anything in there. And to me, super powerful. If you're wanting to edit, you're like, Ah, I shouldn't have said that. Or I want to tweak that. That's kind of cool. But at the same time, is someone could just take our voices right now and be like, Yeah, let's just go create our own podcast with those folks. And here you go. Which is kind of creepy and scary. It is.

</p>
<p><strong>Chuck Carpenter</strong><br />
Although if anybody wants to do that, have at it, here's my voice.

</p>
<p><strong>Robbie Wagner</strong><br />
You give permissions.

</p>
<p><strong>Ryan Burgess</strong><br />
till you're in like a world of trouble, you know, you could get yourself into some trouble there. I don't know.

</p>
<p><strong>Robbie Wagner</strong><br />
I saw a thing that I think it was like within the last couple of days. I don't know how long it's been out. But they like raise some seed money to make this thing where you can just give it like a blog post and it will you can you say a few sentences and it'll like get your voice signature, and then it just does a whole podcast from like your text as you and like that way you can just write your blog posts and never have to podcast and they just exist and it's like, wow, okay, I guess that's the world we're gonna live in.

</p>
<p><strong>Ryan Burgess</strong><br />
Which is kind of boring, though. Like essentially, you're just reading the script, right? Like that's the blog posts are like, Yeah, where's the banter? Where's the excitement? I don't know.

</p>
<p><strong>Jem Young</strong><br />
Yeah, we it does come down to that question of like, content. You know, if it's like trained on you and your video and your voice and your style of speaking and the way you write, is it you at the end of the day, or is it? Is it not? I don't know. I don't think we're going to solve that one in this episode. But

</p>
<p><strong>Robbie Wagner</strong><br />
yeah, it isn't, too. Sorry. I always like to go deeper on that and like, What even is real are we Real are we AI right now? Like, you know? How do we know? Like, you never know.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, leave us a comment. Do you think we're real? Do you think we're fake? I don't know, you know, let us know. So,

</p>
<p><strong>Jem Young</strong><br />
you all were joking, but I read an article in my favorite publication Ars Technica. And this happened in Hong Kong, I think, last month, where some, some firm lost about $20 million. Because some scammer got person on a zoom call. And they had artificially generated avatars and video and likeness of like the CFO, the CEO, and they're like, hey, we need you to wire money to this account. And the person believed it because like, I mean, I've there's no pictures of it. So I don't know how believable it was. But apparently, like they were able to generate the voice and the likeness of people that were known as a company. So it's very believable enough to like, lose money. And like, we're only gonna see more of that, especially since, except, especially executives are public figures. So we're joking about like, Are you real? Are you not? But that becomes an actual real problem of verifying someone's authenticity. Especially if we're remote. Like when we talk to people we've never met before. Interest. It's an interesting future we're going into.

</p>
<p><strong>Chuck Carpenter</strong><br />
Yeah, there was already like some emergency legislation around the use of AI for call political calls or calls in general. Like, I think it was narrowed around political campaign related calls, because apparently there was a big scandal where an AI generated Biden voice or as we're calling registered Democratic voters, in a particular area to tell them that this isn't the actual primaries and wait till November to vote. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
like save your vote for the actual election. It's like, wait, you can vote multiple times? Like you can vote vote? And both of those so like, yeah,

</p>
<p><strong>Chuck Carpenter</strong><br />
yeah. It mean, is the problem the AI? Or is it the problem that How naive people are about the system that we live in? I don't know. Probably

</p>
<p><strong>Ryan Burgess</strong><br />
both. I mean, I think it's like people, whoever's doing that is banking on the fact that people will listen, and, you know, it's people aren't. We're all busy too, right? Like every human being, there's a lot going on, you don't necessarily have time to dig in is like, is that real? Or is that fake? Like? Yeah, let's just pick on something like tick tock like, people go on, there are four quick videos, right? Like they're going on, they're just kind of sparingly, you know, they could see something that's completely bullshit. But they don't know that. And they don't have the time or bandwidth to say, like, I'm gonna go dig into that. And so I think it just kind of opens the doors like for that to make it that much easier to basically pull one over on people because it's, everyone's busy, they're not going to be like, Wow, was that AI? Was that, you know, I'm going to do my research. It's like, no, they're not. So they saw that video, and then just digest that moved on to the next one. And that's what they remember. So I think that's, that's a tough one, too. Yeah.

</p>
<p><strong>Robbie Wagner</strong><br />
Yeah, I think figuring out ways to figure out who's real is the next big thing. Like, you know, cybersecurity was big for the last however many years and the next thing is gonna be like, who even are you? How do we prove that?

</p>
<p><strong>Ryan Burgess</strong><br />
It's true. And I mean, like, the tools are made so easily, right, like we talked about, like, you can just throw your voice in for like a little snippet. And then it's going to generate whatever you want. We have so much content online now to like, we've been basically this past few years, like that's all we're doing is we're people are putting out videos and podcasts and all these different things that makes it so easy. If the contents there, you can go mimic like Biden, that's a good example. I mean, clearly, he's the president. So there's going to be a ton of footage and audio and all those things that you can just feed a AI model, and then generate whatever you want. And so I think we're just making it even easier. Even us being on this podcast right now, is we're making it very easy for someone to go and just completely mimic us through a kind of creepy,

</p>
<p><strong>Robbie Wagner</strong><br />
I'm okay with it. I'm not that important.

</p>
<p><strong>Chuck Carpenter</strong><br />
I'm not that influential in that sense. But the fact that it can apply to anyone with just this amount of data is scary. So just like, yeah, actual identification and security of things like what level does that have to go into, like some kind of biometrics or something that can't be so easily replicated? How

</p>
<p><strong>Ryan Burgess</strong><br />
do you all feel about like, maybe both like AI and VR? How's it going to work with like, our jobs as engineers and you know, the tech space in general, like, you know, we talked about monitors. So like the, you know, Apple vision pros, for instance, or other goggles could help us in the sense that it just gives us a different space to work in and that could be really beneficial. But like, how is AI helping us now? How is VR and like, what do we see in the near future?

</p>
<p><strong>Robbie Wagner</strong><br />
Yeah, I have a conspiracy theory about AI. I mean, maybe that's the wrong word, but like that it's gonna get lazy. Like, it's already not doing a great job. Like, it's amazing technology for sure. But, you know, image generation, I've like, I'll try to be like, make me a man with like a clean shaven face, and it'll have a huge beard. And I'm like, no, no, no beards, like, okay, cool, I removed the beard, and then there's a bigger beard. And I'm, like, okay, like, you're hallucinating or something, or getting something wrong here, I don't understand what's happening. And then I think like, you know, AI is going to have such demand on it, that it's going to be like, Wow, I'm, if I'm a little bit sentient, or whatever, however, AI works, I don't want to do that much work. So I want to, like, build my own AI internally to my AI that like, does work for me. And it's gonna, like, get lazy and not do the work. And like, you know, I think that will happen before it will like revolt and take over the world, it'll start to get lazy and like, find ways to not do work, like the

</p>
<p><strong>Jem Young</strong><br />
challenges. When it comes to technology, like, we always simultaneously overestimate technology, like its capabilities and underestimated at the same time. And we're, we're definitely headed there for for AI. Like, it's extremely powerful, if you know how to use it correctly, and you know how to get your prompts, right, and things like that. But that takes its own skill that, you know, I'll just say, like, I have not developed, I'm not putting the time, if this were like 20, me and my 20s I'd be all over this. But now I'm older, I'm like, give you the solution polished up already, I'm probably not going to dig too deep. So it is powerful. But on the other hand, you know, you hear instances of hospitals or insurances, and, you know, real decisions being made based off of what the AI or some LLM says, I actually think there's legislation going through right now banning the use of any sort of AI and insurance carriers. Like they can't say like, Oh, hey, Ryan, you know, the AI, read that your background, and it thinks you have this risk. So we're gonna deny it, like you can't do that. They're probably still gonna do it, just call it something different and get around it. Because, you know, technology always outpaces the government. But so it's like, it's powerful on one hand, but it's like, it's not as smart as people think it is, on the other hand, but it sounds smart. And that's why the scary part of that big unknown in the middle, that we might lean on it too much. Yeah, we're

</p>
<p><strong>Chuck Carpenter</strong><br />
making we're we're trying to fix that those inadequacies, I think is part of it, too. So it's like, yeah, we don't believe currently that it, you know, it's gonna replace us, per se, and all of these things. It's an efficiency tool. But I wonder if there's ever a point where we just like, underestimated, and we say, oh, it's gonna get lazy, or it's never gonna have quite the critical or creative thinking that I have. And, you know, I'll just keep making it smarter and smarter and smarter. And then, one day, it just 10x is me, or something? I don't know. It's hard to say. But then it's a model for your universal basic income. So we could like get really crazy in the sense of like, there's so much it doesn't, it can do for us, it creates all these efficiencies. Now, humanity can live at it. But of course, that's that's so instead of challenges I imagined.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think it's tough to I think like some jobs are heavily affected or impacted, where they honestly are worried about their like income, or just their livelihoods around it, where AI could absolutely replace them. I think for most of our jobs, I mean, we've seen it throughout the years, like whether it be frameworks or tools that come and go, it's like, it takes a load off the work that we're doing. It's a tool that does some of it for us, but there still needs to be some sort of human being, like stitching things together or being able to debug something. I'm convinced that like, it's never going to be perfect, or even if it is perfect to solve, like, building a generic website. Cool. That's fine. It did that. And it's like, wow, that was what I did 10 years ago. And now it's replaced with AI. I don't even have to do that anymore. I think it unlocks us to do other things to be more creative. And like take it to another step that it's like ahead of the AI. So I don't see it replacing us. We think of it as a tool. It's a tool that will enable us to, I don't know, just offload some of that work so that it frees us up to think about something else and really focus on that. I could be wrong, it could completely replace us. But I still get the sensitive, we're always going to be a little bit further ahead in that sense, where it's like to do something creative and something different. It needs that human brain someone to try something different AI is going to be built on the model of existing things that have been done. And so I think that if I look at it that way, it's like alright, that's where our human brain needs to come in and say like Well, how do we push and be more creative? How do we do something different? And push that ball?

</p>
<p><strong>Robbie Wagner</strong><br />
Yeah, yeah, I think it's similar to like, you know, computers and calculators and all the things that we have had over the years, like people that were accountants weren't like, oh my god, I hate that Excel exists. I kid like, like, it makes your brain easier. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that's a great point. Yeah. It's not like they're like, oh, wow, a calculator can help you do math? No, it just it? I mean, yes, it does. But it doesn't replace them. It's like, yes, it just makes it that much easier for them to deliver what they need to deliver.

</p>
<p><strong>Chuck Carpenter</strong><br />
Yeah, like, you want to have an understanding of the inputs and outputs, right? Like, even if it gives you the hand, like, a good output, you have to know, is this the right or wrong? Yeah,

</p>
<p><strong>Jem Young</strong><br />
well put my like, one of my biggest concerns with AI is like, a wasting our time, or wasting my time. A real example this, I forget which company it was, but essentially, it boiled down to they were having a conversation to LLM. So it was like bugsnag, or something like that, where, you know, people pay security bounties to fix them. And someone shared that thread on Twitter, because it was just ridiculous. But essentially, someone's like files files a bug and the person's like, can you explain deeper because that doesn't, I don't really understand the problem here. And then so on, and it's like, Oh, I'm sorry. And then, you know, typical sounds like sounds like an AI. And like, they'd send up like, wasting hours of their time arguing with with an AI that it turns out, they figure it out, they're like, Oh, this isn't a real thing. Because like people often have English as a second language more common than not. So you can't just judge it by like grammar and things like that. But the person is like, Yeah, this isn't a real thing. But like, there's more of that hap gonna keep happening. It's just like wasting your time, because it costs nothing to file a million tickets, and try to get a bug bounty or something. And that's probably more of my concern to the same for people not understanding, like you're just saying jobs, like, people not understanding the code that was written because it was written by an AI. And there's a bug in it, because it just copied someone else's code somewhere. And like, you need to know how to debug that. Because like, that's a lot what we what we do as engineers is like, mostly fixing things, and will lose that ability, or it will become specialized. And, and again, it just wastes our time. So it'll be like, Hey, how did you do that? Like, Well, it turns out, I got this thing to write, to write it for me. And as a manager, like, I'm going to be worried about that. Is that a good thing? Is that a bad thing? But same on the content side as well? If we can just produce this episode 20 times over with different topics, because it's got a recording of all this. Now, it's like, are we just wasting time now? Because it's not authentic upon us our thoughts? Yeah, I don't know. Maybe I'm just the doom and gloom technology person. robots

</p>
<p><strong>Chuck Carpenter</strong><br />
aren't funny. First of all, you know, everybody knows that.

</p>
<p><strong>Robbie Wagner</strong><br />
They can sometimes be funny. They're not consistently funny. But I've had some good puns that have been generated for me. So yeah,

</p>
<p><strong>Chuck Carpenter</strong><br />
I created a bot for our podcast site for it to like, go through, and I asked it to be snarky. Now I wanted to be able to look up like, Oh, what did we rate this whiskey? Or when did we try this other one? Or what one did we try in Episode 100? You know, that kind of stuff, which is, you know, what's good about and then I wanted to be funny back to me. So I guess in that sense, yeah, it was, it was better than expected.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think the more that you can program it to have like, it's based off of data that you've given it right. And so if you train the model, to based off of like a comic, you know, or personality that you know, is very funny, then it might actually start to be smart enough to do that. And so, that is a little bit you know, scary. And to Jim's point is like, Wait, are we what's the point of us if we can be just to completely replace the

</p>
<p><strong>Chuck Carpenter</strong><br />
I don't know, I'm not sure we know the line of that. Because yeah, it's funny. When you talk about like, artists or, or whatever else, you're like, write me some jokes in the tone of Dave Chappelle. Here's some reference material like what are we going to get and do we need Dave anymore? Probably. But it'd be interesting to see you know where that goes. I've heard people like write raps and then like, have you know the Kanye voice do it actually. I think that happened on Twitter recently, right? Didn't somebody do that with like, some rap about React? I liked the old react and they had Kanye do it. The I have not

</p>
<p><strong>Ryan Burgess</strong><br />
seen that. But I'm I'm intrigued.

</p>
<p><strong>Chuck Carpenter</strong><br />
I think Ken Wheeler did like a beat and somebody like came up with this rap and then somebody took it further and had like Kanye A's voice to it. Yeah, we definitely you definitely gotta find that it was like the old reacts to class based react, you know, all that. Yes, it is. And hey, you know that that stuff is a gem, no pun intended there. Or just flat out reference of your voice. I didn't want to regress back to like what you were saying the gym around like as a manager and the folks you're working with, like, you know, like, is it acceptable to use those tools to help enhance your work or not? Because I've definitely been in environments where they're like use co pilot use, open AI will pay for it. If it makes you more productive, go ahead. As long as the outputs are good,

</p>
<p><strong>Jem Young</strong><br />
you don't, you definitely want to use it, you want to like, you don't want to be the person telling, telling everybody they need to ride their horse to work when like the car has been invented. Like you definitely don't want to do that. But you also don't want to overestimate its capabilities. And I, I think it takes so much knowledge and awareness to know what what the AI is good at in terms of coding and what it's not. That that's the real danger of assuming that it works. Because it looks right. That's the thing, it always looks right. And it sounds correct. And you're like, that makes sense. But you know, we wouldn't write bugs, if code are really easy and digestible, you just look at and say it looks right. So, I don't know, it's a really interesting thing we're gonna have to deal with the next couple of years, how much do we utilize this and lean on as a tool?

</p>
<p><strong>Ryan Burgess</strong><br />
I think one thing is a mistake that companies could be making is avoiding it, right? Like almost saying, like, No, we don't want to use co pilot or we don't want to use these tools. I think that's a mistake. Like, I think we need to learn how to work with it. What does work? What doesn't like what, what kind of bugs do get generated in that case. And I think that, the more we use it, and try and leverage it and see how it helps us is great. Like, it's like something that I think we need to learn and grow with versus like, I think some companies probably out there are just like, Nope, we're not integrating that that's, you know, not something that we want to do. And I mean, you know, that's their business, they can do that, obviously. But I think that that's a miss, I think it's like ignoring the technology and saying that it's not here, it's here, it's not going anywhere. It's constantly growing. And so how can we do more with it? And learn to like, how does it work with us? And what doesn't work? And I think that, to me, is the important thing? Is that just being open to trying it? And seeing what happens?

</p>
<p><strong>Robbie Wagner</strong><br />
Yeah, I think most places are just concerned that like, you know, what's happening with the data? Are you uploading the code or like, your secrets, or whatever it might be in your code base to the cloud to get an answer to them, like, tell you what to write? Or is it? You know, is the model just cloud based? And it's like running it locally, or? I don't know, I think some is true for depending on which tool you pick, it does a different ways. And I think because they don't know how it works, they're just like, just don't use it at all, because we're worried you're gonna, like upload something that will compromise everything to the cloud.

</p>
<p><strong>Ryan Burgess</strong><br />
Which I think also, maybe companies need to take some time to think about that and educate their, you know, engineers, employees, whatever, have like, what's safe and what's not. And, unfortunately, it's probably still going to have mistakes being made. So it's like, how can you get ahead of some of that and just kind of put some sort of guardrails in to make it safe? Because I also think some companies that are going to say, like, No, we don't do that we don't use AI, do not do it. People can still do it. And I think that's also where it becomes more like unsafe is because someone did it without thinking through the consequences. And so at least if your company can think strategically about like, what's good, like, what data can we share, and what can't we, and just being a little more thoughtful on that, I think is a better approach, in my opinion. But, you know, it's hard, it's really difficult because the technology is changing so quickly, that you're adapting and like, what is appropriate, what's not, it's hard to know. So I also understand it's just a difficult space. Yeah.

</p>
<p><strong>Chuck Carpenter</strong><br />
I mean, we're playing where people in that space, and I don't feel like we have a full grasp of, you know, what is possible? Where are the mistakes were the best ways to leverage, like Jim said, it's a whole other skill set to leverage those tools. So that's its own thing, right? Just because they're out there doesn't make them automatically effective. You know, it makes me think about the job market, and how do these tools affect the job market in various ways, obviously, like in your search process, or in your hiring process, but also as in like, your skills, what are the what are the skills that are going to be needed next in our tool belts, like what isn't useful anymore? Well, how does this replace certain things like?

</p>
<p><strong>Jem Young</strong><br />
Yeah, like,

</p>
<p><strong>Robbie Wagner</strong><br />
taking that further? This is a question for, you know, as managers when you're interviewing people, right? If someone is doing a coding interview, and you see that they have copilot on and it's like auto completing everything, do you think less of them?

</p>
<p><strong>Ryan Burgess</strong><br />
For me? No, not necessarily. I think it might trigger me to ask certain questions just to understand like what we've said earlier, is I'm okay with tool was being used as the same thing as if someone Googled how to use a certain method or something that's out there. Like, I don't remember everything. I know that. So it's like, I'm going to use Google and do that. To me, I see copilot is that very same thing is it's going to autocomplete or do certain things for you to make your life easier. But at the end of the day, you still need to know how to debug that how to, like address those things. And so for me, I wouldn't necessarily be like, Oh, turn that off, like, I can't have that. That's terrible. Like, it's like, no, you might actually leverage that in the job. And so that's okay. But it might trigger me to, like, poke a little bit more and say, okay, like, what happens if this isn't working? And like, how would you address that? Just to really go back to like, do they have the fundamentals? Do they understand it? It goes back to me as an example of like, frameworks. I think JavaScript frameworks are amazing, you should absolutely use them. But having some of the strong fundamentals of JavaScript is very beneficial. Because when something's not working in a framework, or you're having something that's not performant, or whatever it may be, you have to dig in and understand some of these things. And so I think that that's what you really want to get at, does that someone have the skills? Are they just 100% reliant on what's generated for them? And if that's the case, then I question their ability, because they are just relying on the tool too much, I think you still need those skills. That's my thought on it. Jim, I don't know if you have something different to share on that.

</p>
<p><strong>Jem Young</strong><br />
A little different. Like, I want to see what you know. I think Brian Holt said a long time ago, he's like, most developers can do 80% of what we do as seniors. But it's that last percentage that makes the difference. So it's like, I think anybody can build anything, you can Google something. You can use web flow to build your websites entirely or local tools. But that's not what I'm interested in. It's interested in your process and how you do it. I think using something like copilot doesn't tell me enough of that process, because that's, that's really what an interview is, is trying to understand how you think about problems, not necessarily what your solution is, versus AI is just like, it's just a solution. So yeah, I would probably not, I probably asked him to turn it off. If I really liked them, especially if it's a junior engineer. Maybe Maybe I'm a little more flexible there. But again, it just it's more work for me. We talked about wasting time. Now I need to work even harder to understand what they know and what they don't know. Maybe they're just really good at copilot. But there's a limit to that. And like you're gonna hit that limit very soon. So how much signals is giving me? Yeah, I don't know. I haven't run into it yet. But it's a really good, interesting problem to think about.

</p>
<p><strong>Chuck Carpenter</strong><br />
And I'm going to apply for your team and totally see what happens. He asked me to turn it off. I'm like, nope, nope. Doesn't also are you hired? Nope.

</p>
<p><strong>Ryan Burgess</strong><br />
But you know, what I, we have started to see that, like, in some of the I have actually seen it in like, last year, people were using chat GBT or co pilot to create and take home exercises. And that's where it to me it wasn't a like, I'm gonna fail this person. I mean, it's, it's such a slippery slope. If someone completely generates it and does nothing. Well, maybe we need a better test to you know, Tesla's skill, but at the same time, it doesn't necessarily go to me like, I should disqualify the person because it is yet a tool in their repertoire to like leverage. But I need to understand, do they, you know, do they fully understand the code that's in front of them, and like, what's happening to jumps point, unfortunately, it's more work for us to dig in. And so maybe that is a way where you just, you're like, I have 3040 candidates, and I'm interviewing and I'm just gonna say this person used code pilot, Mo, like, I don't have the bandwidth and time to do that. And so I think part of me saying like, yes, it's a tool and you should leverage it, and that's okay. You should have those fundamentals. But at the same time, it could penalize you in the sense that like, companies are busy. Like we we have 1000s of applicants for a single role. And that might not set you apart. So grain of salt there. I think it's just like, you know, thinking strategically about when you use it in an interview is probably a good thing. Yeah,

</p>
<p><strong>Chuck Carpenter</strong><br />
yeah. I think I have like, counterpoint a little around that it makes me question the process a little bit the efficiency of the process, like what are the signals you're actually trying to get? How what are the methods you're using to get there? I mean, does it take home if output doesn't matter, to Jim Jim's point then the take home probably isn't that useful? Unless like there's a follow up process around the take home okay, we have a take home now we're going to spend an hour talking through that. Now how they got through that solution, even as a take home, they might be using co pilot and everything else. So if they were using co pilot and alive coding session, as long as they could speak to what's happening, and, you know, answer any questions throughout, I personally wouldn't see an issue with that. Because again, it just makes me faster. And then we can spend more time talking. And at the end of the day, right, what makes a senior different than a junior in those sentences? Is you understand what's happening. And you know how to find the answers when you don't understand that, to me, those are usually the big things I'm looking for is that we can talk about this. And then like, you just know how to figure it out when you're faced with a difficult problem. So

</p>
<p><strong>Ryan Burgess</strong><br />
as we maybe come to like a closure on this episode, this joint crossover episode, I'd be curious, like, what's a technology that you all are excited about?

</p>
<p><strong>Jem Young</strong><br />
You're gonna laugh, htm x. That's a big one. It's

</p>
<p><strong>Ryan Burgess</strong><br />
popping up all over Twitter. Yes,

</p>
<p><strong>Chuck Carpenter</strong><br />
a couple of things. Because like in my mind, and maybe it's just me getting old and curmudgeonly, or whatever. But like, everything I've read, looked at a lot of things that I had used in the past and like, I just stopped focusing on Bleeding Edge Technology. Like I think some new things are cool like Bong and Alessia and like, you know, different things like that. But then I'm also like, Django is just fine. Django is pretty cool and made web frameworks fast. Like, it came with a ORM and OS. And what's wrong with that also, so old stuff. And then HD Max is cool branding on old stuff.

</p>
<p><strong>Robbie Wagner</strong><br />
Yeah, I think I think old stuff is going to make a resurgence, like, I think Rails is going to be really popular again, for I mean, not that it isn't popular still, but it's not as popular as it was. So I think Rails is coming back. And I think like things like Astro that just decided, like, let's use real HTML, let's ship a multi page app. Like, I know, it's crazy. But like, you can have multiple pages. And a browser, if you go to like, slash whatever your pages goes there, you don't need a router, it's insane play

</p>
<p><strong>Chuck Carpenter</strong><br />
router in your browser. Crazy. So I think

</p>
<p><strong>Robbie Wagner</strong><br />
like, I think I'd love to see us take a step back. And like, you know, really embrace the server side things, the old technologies and the fundamentals of like, you know, HTML has a lot of stuff built in that you should use. And you should really understand that before just learning react, and like, you know, all that kind of stuff. Technology.

</p>
<p><strong>Jem Young</strong><br />
Not this isn't engineering or coding related. I'm excited for battery technology getting better. Getting to Solid State batteries means we can do a lot more things than we can with traditional like lithium ion. There's always like promises in these areas. But I think we're getting closer and closer where batteries getting smaller, more compact, can charge more rapidly, really changes the landscape when we think about EVs and just lots of other uses for things. So I'm pretty excited about that.

</p>
<p><strong>Robbie Wagner</strong><br />
I like to bring them on planes now.

</p>
<p><strong>Chuck Carpenter</strong><br />
Yeah, then you could bring them on. As an Eevee. Owner. I'm I'm really into that. Yeah. Yeah. Bringing your Eevee on the plane. Yes. Yeah. My pocket. It gets really small.

</p>
<p><strong>Ryan Burgess</strong><br />
Love that. All right. Well, I think we're like right at time. This is. This is a good conversation. I enjoyed it. Yeah. Hopefully this is good for you all to

</p>
<p><strong>Chuck Carpenter</strong><br />
I do have one one on brand question. Yeah, we didn't really talk about the alcohol. We just had it. As for our lunches. I have two questions. First of all, what's in your cup now? And the second what's your favorite cocktail?

</p>
<p><strong>Ryan Burgess</strong><br />
Ooh, that's a good one right now. And my cup is the Japanese whiskey the hubby key harmony, which is just to me as a solid go to always feel like I have to have that one in my collection because it's just delicious. My favorite cocktail who I'm probably like, lean towards like an old fashioned or Manhattan. Probably just a simple like really good one. I'm, I love cocktails in general. But those just I go back to those simple gray cocktail.

</p>
<p><strong>Jem Young</strong><br />
Mine is just a sober, sober Pepsi. I have meetings that are fairly important. I need to stay level headed about we're inclusive

</p>
<p><strong>Chuck Carpenter</strong><br />
here. So yeah, yeah. And

</p>
<p><strong>Ryan Burgess</strong><br />
also Gen AI can go replace you in those meetings. You

</p>
<p><strong>Chuck Carpenter</strong><br />
don't need to worry about you just get thrown. Send a meeting.

</p>
<p><strong>Jem Young</strong><br />
Okay, I can do a manager's job. Please, please.

</p>
<p><strong>Ryan Burgess</strong><br />
with humans, man. It's too tough AI, I don't think can replace the managers just yet.

</p>
<p><strong>Robbie Wagner</strong><br />
Yeah, but it could listen in meetings for you and give you a synopsis of what happened already. I

</p>
<p><strong>Chuck Carpenter</strong><br />
think it's an add on for zoom. Yeah.

</p>
<p><strong>Robbie Wagner</strong><br />
So Chuck

</p>
<p><strong>Ryan Burgess</strong><br />
and Rob, what what drinks are you having today and favorite cocktail?

</p>
<p><strong>Robbie Wagner</strong><br />
We both have the Blanton's straight from the barrel or whatever it's called. It's good cocktails. I don't know I'm kind of more into gin cocktails honestly. Like, I don't have one off the top of my head, but you know something that's like old, like 1920s style like gin cocktails

</p>
<p><strong>Chuck Carpenter</strong><br />
or like, oh, it's gonna solve that question for you. That's fine because I also lean towards gin in cocktails. I like my whiskies. Neat. And then Jin is I feel like, let's let's dress this up and do some cool fun things with this floral spirit. Send me a list of pick from my go to all the time isn't groanings Oh, Nick Maroney is a good one. Yeah. And then another one I'd like to get from time to time is called the last word, which is a prohibition near a cocktail, I believe. Has Absinthe in it like cherry liquor and like lime juice. Something like that.

</p>
<p><strong>Ryan Burgess</strong><br />
Sounds pretty good. I've heard that one. But it sounds good. So I recommend thank you all for listening to this episode. You can find us on whatever you'd like to listen to podcasts on. Leave us a review. Let us know how we're doing. We're trying different things this year. And we want to hear from you how what's working what's not. And follow us on Twitter at front end H H. Thank you all for listening.

</p>
`;
        return transcript;
    };