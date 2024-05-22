module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end Happy Hour podcast. In this episode, we have a special idea that pretty much stemmed from our last episode where Gemini started debating smart devices. So we thought why not do an episode on IoT and smart devices, but we'll share our thoughts on smart devices and how you can actually leverage JavaScript to create your own devices. We also have a special guest joining us today, who's been on a couple episodes in the past Sara showers. Before I get Sarah to give her a brief introduction. I also want to announce that we have been asked quite a few times to run more T shirts and we have more shirts available now on the front end, Happy Hour website at front end, Happy hour.com/shirts. Sarah, can you give a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?


<p><strong>Sarah Showers</strong><br />
Sure. I'm Sara showers. Episode number four.

</p>
<p><strong>Ryan Burgess</strong><br />
I was trying to remember how many I think it's floor.

</p>
<p><strong>Sarah Showers</strong><br />
I think I might have like the most number of guests appearances

</p>
<p><strong>Ryan Burgess</strong><br />
you definitely do.

</p>
<p><strong>Sarah Showers</strong><br />
I am a software engineer at LinkedIn. I've been there for a couple of years now. I love this podcast. I love what you guys do. And it's pleasure to be back.

</p>
<p><strong>Ryan Burgess</strong><br />
We love having you. Alright, before we get started, let's go around the table and give introductions. Today's panelists, Jamie want to start off Jem

</p>
<p><strong>Jem Young</strong><br />
Young Senior Software Engineer at Netflix.

</p>
<p><strong>Derrick Showers</strong><br />
I'm Derek and ironically have the same last name is Sarah and ironically work at the same company as Sarah. So there's that LinkedIn. Right on.

</p>
<p><strong>Mars Jullian</strong><br />
And I'm Mark Julian, I'm a senior software engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And each episode of the front end Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What do we decide today's keyword is connect? Connect connected. So if any of us say the word connected from now on, we will all take a drink. Alright, well, let's get started. At the start, I would love to know what kind of smart devices do you each use in your house or apartments? Wait to define what a smart devices, that's probably a good way to start. Because actually Mars and I were talking about this earlier? It's like, is it does it have to be connected to the internet shares?

</p>
<p><strong>Mars Jullian</strong><br />
I mean, it's gonna come up so many times does it? Well, I think when we talk about the Internet of technology, yes. But when we talk about smart devices, probably not necessarily.

</p>
<p><strong>Ryan Burgess</strong><br />
So smart devices, probably something that automated or does something without you having to be the one doing it.

</p>
<p><strong>Derrick Showers</strong><br />
What's a smart device that

</p>
<p><strong>Mars Jullian</strong><br />
isn't connected? Well, you can have things that are connected to Bluetooth that we just connected like twice.

Well, I think like there, I've had devices that I've worked previously at home when it's attached to my phone via Bluetooth. And so it'll it's like a Proximity Detection basically. So it'll turn on or off based on proximity. But it's not something that I can control when I'm away from the house.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's smart. I think that I would consider that. Oh, definitely. But to answer Derek's

</p>
<p><strong>Mars Jullian</strong><br />
question about what devices aren't actually attached to.

</p>
<p><strong>Derrick Showers</strong><br />
It's sort of smart, right? Like, yeah, if you're like, if you're not attached to the

</p>
<p><strong>Mars Jullian</strong><br />
smart, I mean, if the point of a smart device is to automate your life or to make something more convenient, then there's many mechanisms by which they can do that. A lot of them happen to be connected to the internet. So

</p>
<p><strong>Ryan Burgess</strong><br />
Mars, you chose that keyword. Alright, so any of these smart devices, whether or not they're attached to the internet or not? What do you have in your house?

</p>
<p><strong>Jem Young</strong><br />
Wait, wait, wait, wait, I still don't think we solve this. I think so. Like what so what is a smart device? Like give me I think

</p>
<p><strong>Ryan Burgess</strong><br />
ours did it really well. It makes your life easier. It's

</p>
<p><strong>Mars Jullian</strong><br />
I think a way to simplify it is a smart device is something that you can use without actually having to touch it. A lot of the things that we have in our homes from maybe like 510 years ago or manual, and a lot of our smart devices nowadays are automated in some way or you don't really need to go near them for them to work. I

</p>
<p><strong>Ryan Burgess</strong><br />
don't have to get off my ass.

</p>
<p><strong>Mars Jullian</strong><br />
That's a good description.

</p>
<p><strong>Derrick Showers</strong><br />
Kim I've never seen you so critical of the topic.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, it's coming.

</p>
<p><strong>Jem Young</strong><br />
No even start No, I just like I want to get a clearer definition because I'm like, It's my TV a smart device. I don't have to touch it.

</p>
<p><strong>Sarah Showers</strong><br />
There are TVs

</p>
<p><strong>Mars Jullian</strong><br />
there are smart TV,

</p>
<p><strong>Jem Young</strong><br />
smart TVs, but

</p>
<p><strong>Ryan Burgess</strong><br />
because they're connected to the

</p>
<p><strong>Mars Jullian</strong><br />
Oh lord. Think also smart devices are the epitome of the phrase laziness is the mother of invention because now you no longer have to get up to actually use the things that we use day to day like a light switch like one of the most basic things you use in your apartment, you no longer need to get up to touch it if you don't want to. Yeah, you

</p>
<p><strong>Ryan Burgess</strong><br />
can control them, you can have them all to a setting that they turn on from another device that something happened. I don't know. It's a hard one to define,

</p>
<p><strong>Jem Young</strong><br />
I think smart devices up there with machine learning and anytime someone uses AI or blockchain, like it doesn't actually mean anything. It just, they just said it and now it's like become ubiquitous, but no, I

</p>
<p><strong>Mars Jullian</strong><br />
think it's like a marketing ploy.

</p>
<p><strong>Jem Young</strong><br />
It was a marketing ploy. I would say, oh, here hold on. I'm

</p>
<p><strong>Mars Jullian</strong><br />
I'm going to Wikipedia. It says a smart device is an electronic device generally connected. Gosh. Right, to other devices or networks via different wireless protocols, such as Bluetooth, NFC, Wi Fi, blah, blah, blah, that can operate to some extent interactively and autonomously. Okay, so they they themselves are connected to a network.

</p>
<p><strong>Mars Jullian</strong><br />
clarify things?

</p>
<p><strong>Jem Young</strong><br />
I guess? That's still like the most vague definition of anything that I've heard. But I

</p>
<p><strong>Sarah Showers</strong><br />
mean, it's Wikipedia. So

</p>
<p><strong>Jem Young</strong><br />
that's true.

</p>
<p><strong>Mars Jullian</strong><br />
What about a device that runs a chip of some kind?

</p>
<p><strong>Jem Young</strong><br />
Every our toaster? was trying to be clear, I'm not criticizing the definition. I just like want to be clear what we're talking about precisely because, for instance, I have like a Google Home. Only because it came free with my cell phone, which is a thing to

</p>
<p><strong>Derrick Showers</strong><br />
clarify.

</p>
<p><strong>Jem Young</strong><br />
By myself. Like the mics turned off, I use it for playing music in my kitchen. Yeah, she's like, awesome.

</p>
<p><strong>Mars Jullian</strong><br />
That's a smart device. In my in my opinion. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I would consider a smart device. Agreed.

</p>
<p><strong>Jem Young</strong><br />
But to me, I think, I don't know. 10 years ago, Bluetooth speakers were still a thing, but nobody called them smart. But you can talk to a Google Home, you can talk to it, which makes it smart. Now

</p>
<p><strong>Mars Jullian</strong><br />
I think honestly, like smart devices. Also, beyond just automating and enabling our laziness. We can multitask. No, really, like if you're if I'm in the middle of cooking, and I need to set a timer. I don't want to wash my hands. I'm just like, hey, Alexa, set me a five minute timer or whatever. I like to fail. Kitten here as currently.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, I think we've somewhat defined it probably not well, but we have we spend 10 minutes defining it. So that's good. All right. So devices in the home we've actually established at jam does have a Google Home. And Mars has a Amazon Echo, which actually have an Amazon Echo and google home but I've never used the Google Home.

</p>
<p><strong>Jem Young</strong><br />
Did you get it for free? I did get

</p>
<p><strong>Sarah Showers</strong><br />
team showers is all Apple all the way we have a home pause.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm surprised to hear that. We've given Derek a record time, many times you can get it for free. No, that costs a lot of money.

</p>
<p><strong>Derrick Showers</strong><br />
We also have was we Yeah. So we're kind of big into the lighting. So we only buy lights that are compatible with HomeKit.

</p>
<p><strong>Sarah Showers</strong><br />
Yeah, we have a pretty big stake in Philips Hue light bulbs.

</p>
<p><strong>Ryan Burgess</strong><br />
I think they're one of the best ones though. If you're if you're going to do lighting. Yeah.

</p>
<p><strong>Sarah Showers</strong><br />
On the topic of Philips Hue Have you guys ever have you had the opportunity to see the videos where they like sync with music videos?

</p>
<p><strong>Ryan Burgess</strong><br />
No,

</p>
<p><strong>Mars Jullian</strong><br />
that sounds pretty cool. I haven't

</p>
<p><strong>Sarah Showers</strong><br />
watched it but I know. Disney has an acapella group and their music video was actually set up to work with this new like Philips Hue TV color sync and it will match your lights. Like to the background color of whatever is on your TV.

</p>
<p><strong>Ryan Burgess</strong><br />
That's pretty cool. Yeah. So while you're watching the music video, it's actually changing the color. Yeah,

</p>
<p><strong>Sarah Showers</strong><br />
I'm glad I got Disney acapella and Apple all in one park.

</p>
<p><strong>Mars Jullian</strong><br />
No, I'm home. I mean, I would consider my minimal my setup pretty minimal compared to everyone else except for maybe, Jem. But yeah, I have an Amazon Alexa at home gifted to me, I still don't quite see the point. But whatever. I have a like a couple of limos, those smart switches that you can turn on and off from your phone. And it's like, oh, I just have a Nest Cam setup.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, yeah. The WeMo switches are pretty awesome, though. Because really, that turns any dumb device that is not right into a smart device. Yeah. Into a smart device. Yeah. I

</p>
<p><strong>Mars Jullian</strong><br />
mean, there's a lot of like smart devices that have come out to allow older things to be not backwards compatible forward compatible with the way that we do things now. So

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, and so I'm probably on the other end I have like definitely the opposite of gem. I have a lot of smart home devices, Nest cameras, alarm thermostat, Smart Lock, smart blinds. It's one of my favorites because I do I can control it all at once and I love that. I have lights I have the WeMo switches washer and dryer that are smart. Oh yeah, even my audio system is all smart throughout the house.

</p>
<p><strong>Derrick Showers</strong><br />
What is your washer and dryer? Do this smart?

</p>
<p><strong>Ryan Burgess</strong><br />
Actually, you know, and I didn't buy them for that it was just built in now the cool thing I like about it tells you when they're done I guess that's okay. That's nice. Do that with a beep. Yeah. My house isn't that big I can hear yes throw

</p>
<p><strong>Derrick Showers</strong><br />
out if you're not home you might have to be you might be on a walking tour.

</p>
<p><strong>Sarah Showers</strong><br />
But you want to get really excited about this. So you can turn on your washer remotely, so that when you get home, your wash is done. Yes. That's great. Yeah, you

</p>
<p><strong>Ryan Burgess</strong><br />
could, then you have to load it and everything too, right? It's

</p>
<p><strong>Mars Jullian</strong><br />
but you can load it. It's like one of those like delayed slow cookers, you know, like the late start, but two hours. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
one thing I really liked about it is that it tells me when the dryer trap needs emptied. I thought that was pretty cool. That was a nice little feature that it will send me a message when it needs to be cleaned. Mike. All right. Cool. Thanks. But just that one is really nice.

</p>
<p><strong>Jem Young</strong><br />
Is that necessary, though? Well, I'm

</p>
<p><strong>Ryan Burgess</strong><br />
not saying it's necessary. It's just a nice little feature. It's not hurting anyone gem that it's there. But what it breaks. So my and it still works is a washer and dryer. Yeah, but

</p>
<p><strong>Jem Young</strong><br />
what if it's like, oh, you you become reliant on it, and you never change your lint trap. And if you've never seen a lint trap fire, they're pretty nasty.

</p>
<p><strong>Ryan Burgess</strong><br />
That is true. So you're telling me if I should, I mean, I still check it. So

</p>
<p><strong>Jem Young</strong><br />
so so what's the point of the thing? If you still buy it for that feature? Like no, I'm not knocking you. I'm saying like,

</p>
<p><strong>Derrick Showers</strong><br />
failsafe, like if you don't check it off. Yeah. And, and you know, it's a backup plan.

</p>
<p><strong>Mars Jullian</strong><br />
It's like, almost like they're trying to save us from ourselves. To be honest. That's true.

</p>
<p><strong>Ryan Burgess</strong><br />
It's like, Well, to me, actually, one of the benefits that I like about smart devices, is I don't have to think about certain things. I think that to me is the really nice thing. I know, Jem laughed at me the one day because I put in a it was actually a WeMo light switch. For my outdoor patio lights. I always turn it on at night, and then forget to turn it off in the morning and beyond all day long. That's kind of ridiculous. So now it just at sunset it turns on and sunrise, it turns off, its I never have to think about it again. And it does what I need to do. So now I'm not wasting power letting it run. Does that lead well into our next question, then it leads very well of like, what are some of the benefits? I think

</p>
<p><strong>Mars Jullian</strong><br />
there's like a spectrum of things. I think on the one hand, we get extreme convenience to the point of never getting up off the couch to security and safety and peace of mind. Like some of the things that I love the most happened to be about like the night I used to have a Nest Protect actually one of the the smart fire alarms and carbon monoxide detectors. And which would actually was connected cheers to the Nest Cam that I had set up. So it would take a photo whenever the alarm went off. So you would know what was going on in your home while something like while some sort of alarm was going off. And I think that that was really useful because I could be away from the house and make sure that everything was okay, especially in older apartments that my apartment didn't even have a smoke alarm in it. And because my landlord didn't put one in and so

</p>
<p><strong>Ryan Burgess</strong><br />
that you have to I'm pretty sure that's like, are they illegal?

</p>
<p><strong>Mars Jullian</strong><br />
They didn't have they didn't have it's so illegal. Well, I was super like, Well, I mean, this was a good solution anyways, but I mean, even if he had one, I think this was the fact that they could talk to each other. And you could kind of get a full picture, an idea of what was going on in your home was really, really interesting. I think nest is kind of doing their whole ecosystem of products really well. But that's just to say that we I think there's two spectrums, there's convenience, and then there's safety and security and not having to think about things like lint trap fires, or you know what's going on in my house while I'm gone? Like Did someone break in while I'm on vacation? Like how are my plants doing? Or in my case? How is my pet doing? That kind of thing?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think like convenience is what it maybe gets a bad rap for, because, but I mean, I think you can make the same argument with a light switch, like you could just walk around and turn your lights on by yourself. But we've developed the light switch, you can turn all your lights on the same time. This is just maybe a step beyond that. But yeah, I think it's like but like the one thing I would say with the lighting is that you know, just the automation that you could set up behind it. So like when I get home, and when after it's dark, my lights are already on, which is just nice. And like I don't you don't really think about it until you get home and your house is completely dark because something didn't work in here. Like and yeah, I mean, maybe it's convenience, but it's just not it's just yeah, there's a sense of security there. But it just makes

</p>
<p><strong>Ryan Burgess</strong><br />
you have dogs too. Like that was one of the first reasons I bought a WeMo Switch was to turn on the bedroom light for my dog because like if I was running late or something and especially in the winter, it gets darker a lot quicker, hey, he's got light he's not I'm not coming home to him in the dark, which kind of sucks.

</p>
<p><strong>Derrick Showers</strong><br />
And the only the one other thing I'd add is just I think the other benefit is when you start stringing them together, stringing all these pieces together. So like for instance with our camera, we can set it up so that when there's movement and there's a person home, then it will turn lights on, you know, when you that's when it becomes when it starts to become very powerful. But sometimes it's hard to like think about all these pieces that you put together Though to make that thing work, but but when you can, you know, when there's there's there's a lot of apps that now like surface these ideas for what you can do, like if this then that does that,

</p>
<p><strong>Ryan Burgess</strong><br />
which is an amazing app. Yeah, does so many things you don't even need some hardware devices, it doesn't you just need an API, and then that will deal with it, which is awesome. Yeah.

</p>
<p><strong>Mars Jullian</strong><br />
Well as also what you bring up the lights, which is interesting, because I think one of the benefits there actually goes beyond just like, you know, the individual convenience and safety that we get. But for light switches, and you know, you leave the house, it turns it off, there's an environmental impact there as well, which is really useful as just, you know, we're not using or hopefully we're not consuming as much electricity as we need to be if we're never home.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, and I think NASA has always done that with like the thermostat, right? Tries to be very smart about how what the temperature settings is right? Like, tries to actually and maybe saves you money too, because you're not paying

</p>
<p><strong>Mars Jullian</strong><br />
but the way you sell that is by appealing to the individual. Oh, hey, you know, we're helping the environment, but it's cheaper for you. And it's more convenient. And

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, people care about saving money. That's

</p>
<p><strong>Mars Jullian</strong><br />
right. Exactly. Exactly.

</p>
<p><strong>Ryan Burgess</strong><br />
Since like, typically talk about coding, engineering, JavaScript, what are some things like that you've used in the past to maybe create your own smart devices or, you know, do something like that, like, I know, I've used a few things Arduino, Raspberry Pi. And actually, one of my favorite ones that is really focused to JavaScript is the TESL board, which is really cool. Other than I, it's easy, you don't have to solder anything to do to hook up all the different components, I kind of like the soldering aspect. But if you don't want to do that, it you can buy these components and hook it up to the board. And then just npm install. So if you put like a motion sensor, and you just NPM, install that package for the motion sensor, and then once it starts working, you can do whatever you want with the hit something moved, trigger this or do whatever you want. That's where you have to start coding is figuring out what you want to do with that message that comes from it. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I know, I It's been a while since I've played around with it. But I know like, Hugh has you just, it's pretty easy. You just send HTTP requests to a local IP. And I know like things are becoming a little bit more complicated because people are starting to worry about security.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, yeah. Probably not the most.

</p>
<p><strong>Derrick Showers</strong><br />
I mean, I've always been kind of under the impression of if my lights like, I mean,

</p>
<p><strong>Mars Jullian</strong><br />
sure, someone's gonna turn them on strobe in the middle of the night.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, the ship is really truly something that becomes a new thing.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, but I thought it was gonna be I had been meaning to, like, do something similar. Ryan is place has a iPad on the wall, like he could make like a cold dashboard or something and have a high tech light switch. And it's actually pretty easy, because you just if you're just sending HTTP requests, you just write some simple app for that.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no, that's really cool. Jem, you were actually recently creating something with Raspberry Pi.

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah, I bought a Raspberry Pi and the motion sensor. And I'm working on programming. Because I know my cat comes on the counter, when I'm not downstairs. But he's smart enough to know not to do it around me. But like, I know you do it. So I'm pretty motion sensor that will I want to connect it to my Google Home to be like, Oh, I get off the counter. But also the camera is the key. So I want his face.

</p>
<p><strong>Ryan Burgess</strong><br />
takes a photo of him. Right. And that yeah, shit. Yeah. Like guilty. Yeah.

</p>
<p><strong>Mars Jullian</strong><br />
So question, why would you build your own as opposed to using something that's already out there on the market? Like the Nest Cam, you can set up smart zones, and it would Yeah, and you can Yeah, you can actually,

</p>
<p><strong>Jem Young</strong><br />
this is more alerting. So I've always wanted to mess with some hardware. All right. Raspberry pies. $30.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no. All right. Totally. Pies. So cool. Like it is it can do so many things.

</p>
<p><strong>Jem Young</strong><br />
It's so slow, though. Like it's it's good to like bring it back to feeling how slow it is. And I'm like, oh my god,

</p>
<p><strong>Ryan Burgess</strong><br />
like that. Just to have a simple motion sensor. You don't need much power to do that. Which is really cool. Yeah. And it's small. Yeah, you don't need a big you know, on a big tower computer to control a little sensor.

</p>
<p><strong>Mars Jullian</strong><br />
Tiny little cameras,

</p>
<p><strong>Derrick Showers</strong><br />
and you're gonna get the super high powered CPU to catch your cat it jumping up. It's just like he goes, you're like, What are you buying in the store? What are you buying this for? It's for my cat.

</p>
<p><strong>Jem Young</strong><br />
I don't want to know what he's up to. Because I have a an automated feeder. Yeah. That like I've seen him stare at it. I know. He spends time thinking about how to get inside it. I just want to like get a camera to like see his adventures of trying to unlock Yeah, I

</p>
<p><strong>Mars Jullian</strong><br />
totally feel you. I used to have my Nest Cam set up that would tell me whenever my cat would eat. Yeah, that's awesome. Because she was sick and I wanted her to eat so I was curious. You're making sure you can check peace of mind. Yeah, peace of mind.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, along the same lines. We had recently had our dog lost control of his back legs and so we had to keep them in a crate for six weeks. And so we bought a camera specifically for this reason, just so we could make sure and actually funny, funny enough, we went out once and we happen to check the camera and He had somehow escaped from. We're still to this day, not sure how that happened. This

</p>
<p><strong>Sarah Showers</strong><br />
rewind, this was before he could even like stand on his own again, he managed to like but shuffle his way out. This

</p>
<p><strong>Mars Jullian</strong><br />
way, you can rewind and see what happened before, you know, we

</p>
<p><strong>Derrick Showers</strong><br />
went through three cameras. Had you needed to have a SD card? Oh, I see in order to have a history, and it was the only of the three the only the three cameras that we had that needed this

</p>
<p><strong>Ryan Burgess</strong><br />
is a dead zone. He knew he had like I got this my chance.

</p>
<p><strong>Mars Jullian</strong><br />
I mean, I think for develop development to there's like, I think we mentioned already if this than that, which enables development in a set. I mean, in a sense, if you think of it as just connection between smart devices that already don't talk to each other. And if this and that, I think is really powerful for doing that connection and automating and maybe just set it up. I know, I really did. I think connection doesn't count.

</p>
<p><strong>Sarah Showers</strong><br />
Do you have any more to get out before we

</p>
<p><strong>Mars Jullian</strong><br />
cheers? Cheers. No, I just think if we're talking about development, if this then that kind of enables it for. I mean, I think also for even people who are tech savvy, but also for people who aren't tech savvy, too, because there are so many devices out there on so many different ecosystems, and they don't naturally interact. So something like that is really useful to kind of cross that border.

</p>
<p><strong>Ryan Burgess</strong><br />
And you're dealing with all these different API's that can actually take a lot of time to read the documentation and figure out right, use and leverage each API.

</p>
<p><strong>Mars Jullian</strong><br />
And not everyone wants to develop just for the sake of learning something new. Yeah. So

</p>
<p><strong>Jem Young</strong><br />
I'm glad we're on development. So now I can start by my portion of this episode. Absolutely. Talk about the downsides as far as

</p>
<p><strong>Ryan Burgess</strong><br />
what are some issues and that bother you with smart homes? Jem,

</p>
<p><strong>Jem Young</strong><br />
it's for general issue of software engineering, interfere with people's lives in general. It's not just smart homes, it's cars.

</p>
<p><strong>Mars Jullian</strong><br />
Which are smart now,

</p>
<p><strong>Jem Young</strong><br />
which are smart. They're probably smart. Yeah, in my opinion, it's the idea that there is no if I wanna become a doctor, I need to like go through school, I need to go through like certification, I need to have someone like many people sign off. Like, Jem was a competent doctor. Software Engineering, there's no certification, at least in United States. So I can go out in program, a smart lock, and then sell to you. But it like it doesn't work or has like some edge case. And I'm like, Oh, we're out of business. Sucks for you and your $2,000 investment. I don't know that, that that's my general problem with all the smart homes, there's like, there's no standardization, there's no regulation on what you can and can't do. What kind of developers work on it. I don't know, I've seen some of the smart things you got for Austin, your baby. And I'm like, That's cool. That's cool. But like, I would want a regulatory body mean, like, this crib can sometimes over tilt and kill your baby sometimes. And

</p>
<p><strong>Ryan Burgess</strong><br />
actually, to be fair, like anything that he has is not something that he comes in contact with. Because probably some of those fears is like, you know, we have like a noise machine that you can control from the phone, which seriously is amazing because he would wake up or something. And if you weren't in the room to put on the music or do anything like that, he would then be up like you'd be fully up and you know that that has saved us headaches by not having to actually go in the room and wake them fully up. So but yeah, I don't think I've ever had a device that like a crib that I can control from anywhere or something like that. Because that would that feels a little weird.

</p>
<p><strong>Jem Young</strong><br />
It's a little third to me like it's everybody has this comfort level with technology and think mine is like further away than yours. Oh, yeah. Even your your like the crib is too far. But everybody has their own point. Where's their Sarah? You know, you guys, if you're like no smart crib, it's amazing and rock the baby and like play Metallica or whatever. For sure.

</p>
<p><strong>Sarah Showers</strong><br />
Mostly Fair Play Metallica.

</p>
<p><strong>Derrick Showers</strong><br />
So I'm gonna be I, you know, I'm gonna be annoying here and talk about Apple. But I think this is one of the advantages with HomeKit is that they certify every single device that they put out. And that's actually hindered HomeKit from becoming an elite leader in the industry, but you have to have a literal chip in your device in order for them to certify it as HomeKit compatible. They've actually with iOS 12. They've like that. And so now they give like a certification based on like a review process. But I think that's that's kind of nice that that maybe this stuff isn't happening as much with

</p>
<p><strong>Ryan Burgess</strong><br />
you. I think there's an apples always been known for that as being pretty sticklers on certain things which are good and bad. I think sometimes they prevent innovation on some gems as well. I think one of the negatives too, is just the fact that like HomeKit, to me actually seems like an amazing idea. But yeah, it's not that great because it doesn't there's not a lot of devices on that ecosystem. Will that change? Yes, there is going to be more and more. But the the benefit being sold there is it's on one central dashboard like device. Right now you have like multiple apps that you're opening on your phone to do certain things and it's kind of annoying. So The state that it's in right now is kind of like that. That's frustrating. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I guess, like, what I'm trying to say those is, you get the, you're not going to have as many devices, because there are going to be a lot of manufacturers and software engineers that aren't going to want to comply with it. Because it's more money. So it's like, what do you what do you want it? Like, if you want to have a world like, Jem, you're explaining, then, you know, things are gonna, it's going to be slower to progress. But if, if you don't care about that, obviously, and but with is in, and I think a lot of Africans a lot of criticism, because with apps or with, you know, their app store approval, like maybe that doesn't matter, but maybe in the case of of devices that have a baby, yeah. And in mind, then, you know, maybe there needs to be some sort of like over governing body.

</p>
<p><strong>Jem Young</strong><br />
Oh, like, I'm not the biggest Apple fan, as everybody knows. But I do respect that. When they build something, they build it well, and they build, like, they're not just going to open up the ecosystem, anybody they. And they take a stronger stance on privacy than like almost any company out there. So like I do respect them for that. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
no, definitely. And I think when it comes to these devices may like that might be the right thing.

</p>
<p><strong>Jem Young</strong><br />
And like smart homes largely are for me, it's like privacy and security. And you give up a lot of your privacy when you use a smart device

</p>
<p><strong>Mars Jullian</strong><br />
unintentionally. Yeah, wait, way more news? Yeah, no, exactly. Well,

</p>
<p><strong>Ryan Burgess</strong><br />
just the fact is, is like, like cameras and things like that they're recording to the cloud, which is now owned by you know, whether if you have Google or Nast, it's like now Google owns that. And yes, hopefully, they're not doing anything malicious with that. But how do you know for sure.

</p>
<p><strong>Jem Young</strong><br />
So I have a good example of, like Mark said, like you, you give them a lot more privacy than you think I had a friend. He had a Smart Label company or is a smart home. But his first product was a smart light bulb. And I was like, Oh, interesting. Like, what sort of logs you keep? He's like, Oh, yeah, we log everything. And he's like, it is amazing the amount of data we can get from a simple Smart Label, which most people wouldn't think that takes any privacy. But he's like, No, we have temperature readings. So we need to know if the light bulbs like intact. So like we know, when you're home, we know when you're not home, we know when you're in the room, we know when you're not in the room. Like you can tell all this stuff, just from a smart light bulb. Like and that's not even that intelligent device, like think what you can do with the smart speaker or camera or things like that. It's yeah, that's like too much for me. I, I think all these companies, Google, all of them have so much data on us already. I don't need to invite in my home as it is because like they can probably know most about me from my phone.

</p>
<p><strong>Derrick Showers</strong><br />
Couldn't make that argument that with a lot of things that we use, like, Uber is a good example. Right? Like, you can probably I'm sure you can use that data to figure out when you're

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. Like, where you are what like your patterns of behavior? Sure,

</p>
<p><strong>Derrick Showers</strong><br />
maybe I mean,

</p>
<p><strong>Mars Jullian</strong><br />
like the internet. I mean, this has always been a concern with going online. I mean, the internet is free, because we have ads, but what we give up in return is that we're constantly being tracked, and we can they can tell who we are based on our search history, all of the sites we visit, like, just all that stuff. That I mean, this isn't a new concept that we give a privacy for convenience. It may seem more invasive in the home, though.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And maybe it's maybe I guess the argument is, it's not a necessary privacy, they maybe that would be your argument. Like it's not, it's a convenience, that's not necessary. So like, why give up that

</p>
<p><strong>Jem Young</strong><br />
I'm not getting enough in return for the

</p>
<p><strong>Ryan Burgess</strong><br />
smart light. Yeah, they're doing a lot for nothing. I'm not getting value out of it. Like I use

</p>
<p><strong>Jem Young</strong><br />
Google Maps, which like it tracks your phone and tracks traffic. But it's useful, because like, we all it's good to know where traffic is. And it's cool for all agree to opt into this, because I get value out of that. That's, that's a trade off that I'm making. The thing is like, with smart devices, um, we're not clear about the trade offs we're making yet.

</p>
<p><strong>Mars Jullian</strong><br />
But on the other hand, how do they function without having all that information about

</p>
<p><strong>Ryan Burgess</strong><br />
us? Right? Yeah, it's almost it needs to have that to do. Right. Right. Yeah. To automate. And even to your phone. It's like it Google knows when you're home.

</p>
<p><strong>Jem Young</strong><br />
Yeah, having atrax? When GPS, yeah. Where I work,

</p>
<p><strong>Derrick Showers</strong><br />
and I feel like Google Maps is maybe has has decided a way to give that benefit back to you. But really, their ultimate benefit is not that I mean, you know, obviously we all know that. But you know, it's it's the same, the same benefit is the data. And they're just they just found a way to say, hey, we're capturing this data. And it's actually good for you. But really, I mean, it's,

</p>
<p><strong>Mars Jullian</strong><br />
but they're not doing it maliciously. I guess that's where I get stuck. Because like, yes, we are giving a privacy. No one's actually looking at our data. I mean, it can be hacked. And yes, there can be malicious agents. But that's not really the core of these products. I think the security Well, the security we give up is just unintentionally, these products aren't trying to make our life less secure. They need this much data to function and operate. It can sometimes happen that we are compromised.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think that can that's always a big concern is that, you know, you could be compromised in your home. But now you're also just sharing that data everywhere so that it could be compromised right outside.

</p>
<p><strong>Mars Jullian</strong><br />
So the risk of compromise, I guess, is the scary thing because of how invasive the data can be.

</p>
<p><strong>Derrick Showers</strong><br />
But I mean, yeah, I totally agree with that. And I think you can also get that data in a very old fashioned way and that you sit outside of somebody's house. Right. That's more noticeable, though. Yeah, I guess. But I mean, you could also probably master it. So that is, I mean, maybe don't have to be in a van. Right. I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
all right. But even outside of the smart stuff, I think that's a good example. And I think Mars touched on that as well. Is that I mean, people, like update their Facebook, they update instagram, twitter, on all the things that where they are, they're on a trip or wherever, like, Oh, I'm flying to so. So like, my parents. My parents

</p>
<p><strong>Derrick Showers</strong><br />
have a hard requirement that we don't tag them in any Facebook posts when, when they're because they're so worried about.

</p>
<p><strong>Ryan Burgess</strong><br />
They're very interesting. Yeah. See, I mean, and that's a generational thing. We're just like, Yeah, whatever. It's no big deal. And so we're giving up all this privacy, it's one of those things

</p>
<p><strong>Mars Jullian</strong><br />
that goes really right until it goes wrong. I feel like same thing with with the posting on Instagram, where you are located, or the whole smart devices thing, like everything is working handy, like, you know, fine now, but some big breach is gonna make us all question. Question. And again, one, you

</p>
<p><strong>Ryan Burgess</strong><br />
know, I saw something about Alexa, not that long ago, if you turned on the ability to access your phone contacts, it was sending recordings of conversations of people in their homes. So it'd be if Lisa and I were at home talking with our son, and it could accidentally send Jem a text message with our audio recorded. And that to me, that is very, very scary. Jem doesn't need to hear our personal conversation. And that can be really weird. That's not even a breach. That's just a bug. Yeah. Well, to back to Jem's point. Yeah, no, exactly. No software developer could screw up. And yeah, it's a pretty big bug.

</p>
<p><strong>Sarah Showers</strong><br />
I was listening to our past cat podcast last week. And it was about how, like, talking dolls have evolved from, you know, being these giant things that had like this massive piece of machinery in there to play like a track. And now you have really like fancy toys, that as a parent, I can have my phone connected to this toy. I don't remember exactly what what the doll was called. But there was essentially like, they found out that there was no real way for like me to be able to connect to some random person's child is just a Bluetooth connection with no security. So like, then I could connect my phone to this person's doll. And so then I am able to talk to a child. And it was like a smart doll that had aI built into it that like you could have conversation, the child can have conversation, the doll learns, like, that kind of stuffs pretty

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. So just in proximity, yes. It's not connected to the internet. Cheers. It's been a while, yes. But you're still close enough that you know, just someone near your house or whatever, it's enough that it could be hooked up to via Bluetooth.

</p>
<p><strong>Jem Young</strong><br />
And like, I'm not as negative. Smart Home as Ryan makes me to be. I'm just like, I preach comment.

</p>
<p><strong>Ryan Burgess</strong><br />
Am I picking on you, Jem? No,

</p>
<p><strong>Mars Jullian</strong><br />
this is critical.

</p>
<p><strong>Jem Young</strong><br />
I am critical. Like, I preach caution on these things. And we just we keep pushing the boundaries of like, what's connected? What's smart? Because we can not because we should. And I think and this talks into a larger topic of ethics. So we want to do at some point, but it's just like, we have this idea because we're all software engineers, that we're all moral and ethical people that will do the right thing. So we're like, oh, no, Google, or Amazon will never track my recordings, because like the software engineers, like they would never push that code, let that happen, like track people. But they would like, and we should admit that to ourselves. Like if your jobs on the line, and someone's like Ryan, push this code is gonna turn on everybody's microphones in their houses, because like, we need to record it for better analytics or something, you're gonna be like, okay, and probably not think about it that deeply because like, you want your job to pay a lot of money. And like, as fellow engineers, we're like, oh, no, no, Ryan would never do that. But like, we've never stopped and asked ourselves, would you? If I was on the line of someone's like, I need you to create more invasive tracking? Would you do that? Or would you not? Would you say no, I quit? Well,

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's also that you may not think of it at the time, maybe I don't think that that's a bad thing. Maybe it's just like, oh, well turning that on. Yeah, just to get data. We're not doing anything. We're not actually going to personalize it. It's like disconnected from who this person is. That could be an argument to is that maybe people don't even realize what this is happening. Or or, or it's a software bug. That too, right is now this is they didn't No one meant for this to happen. Those companies didn't mean to do something. And that's where it could be very scary as well.

</p>
<p><strong>Jem Young</strong><br />
Well, that's the thing like we're so disconnected from as engineers, we're disconnected from the end result also what we do, for instance, that that bug in the Uber code that killed that woman crossing the street, does that engineer know that they did that? Is there any consequences for like, you killed somebody? Because you wrote sloppy code? Like, are they aware, I don't want to like shame whoever that person is, like,

</p>
<p><strong>Ryan Burgess</strong><br />
I hope that person doesn't even know if Yeah,

</p>
<p><strong>Jem Young</strong><br />
but like, they should know, like the the consequences of your your choices that we build, like you should have to live with that a doctor can't kill somebody, you're like, my bad. I'll learn next time. I mean, they can meet, probably, they probably would do. That's something that they'll do with us. As people, as engineers, we don't have to live with that. My last example, and then I'll drop it, there's a company in San Francisco startup, I forgot the name of it, fortunately for them, but they make an app for TV that now more and more TV manufacturers are including with the TV, like their smart TVs, and it does pixel matching based on the content of what you're watching. So if you're at Netflix show HBO show, it actually doesn't matter. It can it'll pixel match what you're watching, so it'll fingerprint, like all the content you're watching, use that fingerprint to send ads to the rest of the devices on your home network. So so if you're watching Game of Thrones, they'll be like, Oh, this person's in the Game of Thrones, they will now send ads for like maybe Westworld or something to the rest of your devices on your home network. That's like such an egregious re overreach of like technology. But these are all engineers in San Francisco, the startup that probably has raised millions of dollars that are all cool with this. They're like, No, this is I have no moral dilemmas or ethical dilemmas with doing this. Even though if you ask somebody, would they consent to being tracked? You'd be like hell no.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, and even to those services, I think that is frustrating as well is HBO, Netflix, those are services you pay for so that you don't have ads. And now you're you're pretty much that's not what's happening. It's not those companies that are charging you for our Yeah, it's not those companies that are necessarily the ones advertising to you. It's this other like third party device.

</p>
<p><strong>Jem Young</strong><br />
Well, I get ads on my TV, which I paid a lot of money for. Yeah. And like I didn't sign up the ads, I paid money to knock it as it is a television, it doesn't need to be that intelligent to try to like market me things. But I still get

</p>
<p><strong>Derrick Showers</strong><br />
are the ads that you're talking about interested? Like? Are they just as that you would get normally? Or are they like new ads that based on this technology? I guess my point is, like, if it's just if it's just bettering the ads that you would get normally I actually don't really have a problem with that.

</p>
<p><strong>Ryan Burgess</strong><br />
Really, like, I think to your point is like, if you're gonna see an ad,

</p>
<p><strong>Derrick Showers</strong><br />
I think it goes to what Mark was saying earlier and that like, it's, it's not really invasive, in my opinion. I know, this is like maybe contradictory, a lot of people but not really invasive of my privacy, because it's such a large scale. And it's like, it's not like pinpointing me as a person. It's just trying to, in a way better my experiences or like I'm, I don't normally look at an ad but maybe like I have to look at an ad. So I'd rather look at an ad that is somewhat relative to I mean, I would I would love to see a Westworld ad. I don't know. I mean, if it's if it's causing me to get more as it obviously, that's something that I haven't signed up for. And yet to your point, it's it's paid for service, I don't want ads, but it's the same as that I'm already getting in there more relative now because of some technology exists, I guess at all problems.

</p>
<p><strong>Jem Young</strong><br />
I think it's about like being tracked when I did not consent to being tracked. Google Maps is a good example. Like I opted in, like I'm aware of the trade off. I'm making like I'm fine with that. But

</p>
<p><strong>Derrick Showers</strong><br />
you but I think you're you opted in. I think there's actually a lot of people that use Google Maps that don't know that that is happening. And so I think it's kind of the same thing. Whereas like, maybe maybe Google Maps is just such a big part of our life that we kind of know the trade offs we're making. But it's actually probably similar to maybe my parents that that's Google Maps is the same as technology that you mentioned, it's kind of all the same thing. And in all of those things. They don't really opt in it probably both both on both of those situations. It probably isn't some sort of terms and conditions that you're being that Oh, for sure happening. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, like, when was the last time you read that?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, and you don't use Google Maps either. But you still kind of know, just because I think it's just such a, but I think there's a lot of people that don't know that. It's more

</p>
<p><strong>Jem Young</strong><br />
like the future of things is us being tracks just all the time. Like, we haven't reached this level yet United States, but I know China has like massive facial recognition, like everywhere, like the cops have facial recognition part of us like, Oh, that's cool to catch criminals. The other part is, let's say I was dating a cop, and like we had a nasty breakup. But now that cop can use this technology to track me around town and like, stalk me if they were so inclined, like, police can do that. Now.

</p>
<p><strong>Derrick Showers</strong><br />
I guess one one good thing about the all of the recent GDPR stuff is that it's it's you know, it's paid for us as software engineers, but this is kind of hopefully enforcing some of this enterprise

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, yeah, I guess like we've talked about pros and cons of smart devices. Is it something like what what's some advice that you'd give someone wanting to pick up new devices? Or even like we talked about programming their own? What are some things that you give advice to someone wanting to do that?

</p>
<p><strong>Jem Young</strong><br />
To be aware of the trade off that you're making? If can you afford for this device to go like, catastrophically wrong, like a bad update gets pushed? Will your home cease to function like if something bad gonna happen because of that? I may find your Smart Lock, but like they come a long way. But a few years ago, I was using smart locks. There's time like, I couldn't get in the house, right? Because like, the Bluetooth didn't connect, and I'm like stuck outside, because there's no way to use key, because that was the stage of smart locks at the time, they've gotten better. But something like that, like be aware of, like the trade offs you're making with smart home. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
And even actually, when I get that's a perfect example, when I got the Smart Lock, I knew that I was like, worst case scenario, I have another door. It's not the end of the world. And also, there are other functions that it doesn't necessarily need the Internet to work. Because yeah, what if your internet goes down? And then it doesn't work? That doesn't that doesn't make much sense? Or do you actually need your phone? Because what if I like, my phone died, or I got a stolen or lost, I can't get home? Like, that doesn't make a lot of sense.

</p>
<p><strong>Mars Jullian</strong><br />
I mean, in to kind of like along the same lines with gems that I would just say, do your research. And actually, maybe this is kind of like a very naive way of doing it. But I'm like, I would rather go with a company that's more established. And maybe it's on the second or third generation of these devices. Because, like with other things that are first generation, they tend to be a bit buggy. They haven't quite figured it out yet.

</p>
<p><strong>Ryan Burgess</strong><br />
So get going. Right? Yeah, I

</p>
<p><strong>Mars Jullian</strong><br />
mean, go with things that have kind of been tried and tested in a sense and do your research and see what other people's experience is like?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think one thing I learned just in this episode is that is think about the privacy repercussions as even as a manufacturer of a device because I didn't I thought your story Jeff about the like, like the data you can get off a flight pop is interesting. And you think like, I kind of think I was just just lights like, who cares? But yeah, I think he's just like being aware of that and making sure that you're as transparent as possible with this kind of thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. Before we end the episode, let's do our picks. Does everyone have smart device picks or? Let's go around the table and share today's episodes picks? Sarah, you want to start it off?

</p>
<p><strong>Sarah Showers</strong><br />
Sure. Um, so to touch back on the podcast I was talking about. It's 20,000 Hertz. It's one that we both really enjoy the episode. The doll is my friend Kayla. And I was just reading the transcript and I was immediately like, oh, yeah, I forgot how about this episode was in terms of the scariness this scariness. Yep. Like this, this doll asks your mom's name your dad's name like we're, like, learns and saves this information. That's terrifying. Yes, listen to it. Enjoy. The second pick, I have circles all the way back to the beginning of this episode on D Capella. So, I sing acapella at LinkedIn. It's something that I'm really sad to walk away from. Spoiler alert, we have some news coming. But so Disney has formed its own acapella group. And so they are the ones that have this whole like, Philips Hue bulb light thing with their first music video. But the Incredibles two soundtrack, they actually recorded four tracks. And if you listened to the recording that is in the movie, and then listened to there's it's really cool, like what these people have done with their voices like to mimic trumpet sounds and it's very like old fashioned like superhero. Like,

</p>
<p><strong>Ryan Burgess</strong><br />
that's really cool. Yeah,

</p>
<p><strong>Sarah Showers</strong><br />
it's definitely worth a listen. Recommend.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on Mars. What do you have?

</p>
<p><strong>Mars Jullian</strong><br />
I have two picks today. One is the TV show called Amazing hotels life beyond the lobby. I really liked this show because I like travel. I like hospitality. But what I find really interesting about this particular show is that every episode has, it's more than just like a luxurious hotel for the sake of luxury. If you really dig into it, each hotel kind of has its own unique like take on the area and is trying to educate its visitors about you know, particular thing I would say the second episode was actually the most poignant for me about how it was an ex mayor who was trying to get people to fall in love with the rainforest and in the longer term conservation effort. So that's kind of what I mean by it's not just luxury for the sake of luxury, it's about learning about the area and getting invested and all that stuff. Anyway, so I'll let you guys enjoy it for yourself and hopefully also fall in love with it like I did. The second you've seen it Yeah,

</p>
<p><strong>Jem Young</strong><br />
it convinced me not to stay at the hotel in Sweden, right? Yeah. Cuz it like in theory, it looks cool. And then I saw the it's a really good show right on I'm like, I'm not saying in a hotel man. Well, yeah,

</p>
<p><strong>Mars Jullian</strong><br />
the first episode is about the Marina Bay Sands in Singapore, which really is kind of about the luxury for the sake of luxury. But it's also more subtly about how a hotel at that scale operates, which is really interesting. So it's not just about travel, it's about kind of the more interesting aspects of it anyways, the second pic that I have is called the surefeed microchip pet feeder on the topic of smart devices, they have a more analog one. And basically the idea is that this pet feeder will program to your pets microchip and or either one or two or however you want to do it. And for me, it's useful because I've got two kittens now at home and one of them likes to eat all the dry food and she's getting a little chunky. So we need to start rationing the food and making sure that everyone gets their proper portion of food. So the idea here is to just you know, keep the food separate. And there's more uses than that, and especially like medicated pet food and that kind of thing, but so it will program to your pets microchip. They have a dumber version, which is just kind of with a lid, which will help keep the food stay fresh longer.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Derek What

</p>
<p><strong>Derrick Showers</strong><br />
if so my first big I haven't I guess I haven't been on the episode since this happened. But I was a huge fan of Anthony Bourdain. And it's very, very sad news when when he passed, but I've actually started reading his most recent book, which is from 2010. But medium raw is super interesting. And if you like on the board, and you like his style, I think he's like one of the best narrators and like writers that he's just just fun to read. And think anyone even if you're not in like it's kind of for people in the food industry. But if you're not in the food industry, like all of us, it's still very interesting. So highly recommend it. I can pick his movie I saw just a couple days ago called three identical strangers. It's a documentary about three people that were separated three twins that were separated. triplets are those that are separated at birth, I really want to see that really good. So good. It's kind of a story about nature versus nurture. But it's just, I thought it was just so well done. Even just a story aside, it was just a really good movie. So recommend it. And I guess my final pick is New York City, because I'm moving there, so I have to pick it. So I will unfortunately not be part of a podcast for except for me when I come back and visit but it's obviously it's a bittersweet moments with this decision. But yeah, Sarah and I are moving to New York in a couple of weeks. So York City

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Which a good city like but sad that you're leaving.

</p>
<p><strong>Jem Young</strong><br />
New York is worth leaving for you're going to like Boise. No offense anyway. I feel what are you doing?

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
I have two picks. I do not have a valley silicone pick because I you know, I didn't want to bang I could pick any sport.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm gonna say you could probably do we did on the episode you did a few. Yeah.

</p>
<p><strong>Jem Young</strong><br />
My first pick is a vacuum cleaner. It is the Hoover cordless links. It is phenomenal. It is battery powered. Vacuum Cleaner. I think you have a Dyson. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
of course not the

</p>
<p><strong>Jem Young</strong><br />
the cordless vacuum is amazing. Because it just in some sweeping all the time, I can just run the vacuum and it's cordless. So it just charge the battery. I changed the filter just like drops a button and it's like easy to pick up. It keeps out so much cleaner. And I just like oh, it's a little messy day I just without the vacuum vacuum really quickly. And it's like $100 but it is so much better than just like sweeping all the time. It's just really convenient. My second pick is a game. It's called BattleTech it is based on the old MechWarrior university I used to love MechWarrior and now I'm just like nerding out of it but BattleTech is like the modern incantation of it. It is fantastic if you want to pilot like at time machines and like go to battle it's a fantastic game.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. All right, well now I have two picks that are actually unrelated to smart devices. So my first pick is a Netflix originals comedy series Hannah Gatsby Ninette a she does a phenomenal stand up. It's just like mind blowing. She kind of takes kami to this new level and the way that she tells stories. It goes from like really funny to this like really deep, deep story of her life. And I mean I just it was it was crazy. The the message behind it is so powerful. I highly recommend everyone go watch it even if you don't like stand up comics highly recommend watching it. And then my second pick is actually another Netflix Original, which is amazing interiors. Some of the interiors of people's houses are on this show are just insane. They just go all ends to do the craziest things. One guy had a full aquarium in his house that was

</p>
<p><strong>Mars Jullian</strong><br />
so cool. Like it was his hobby because he was retired and it was just Amid

</p>
<p><strong>Ryan Burgess</strong><br />
scuba diving in his house, that's how cool that kind of stuff is. I highly recommend checking that out. It's an interesting show. Before we wrap up the episode, I want to thank Sarah for joining us. I hope this isn't the last time even though you're moving to New York, we always love having you on as a guest. Where can people get in touch with you?

</p>
<p><strong>Sarah Showers</strong><br />
You can find me on LinkedIn. Yes, I am also available on Twitter Sarah l showers. Yeah, it's been a pleasure. I'm really bummed that it's kind of the end of a chapter but very exciting. New Adventure. I was trying to come up with the word for like, what is like the follow up to something and I could?

</p>
<p><strong>Ryan Burgess</strong><br />
Well, you know what, it's a good excuse for us to come visit.

</p>
<p><strong>Sarah Showers</strong><br />
Right. So Right. That's always welcome. And, um, we'll be back

</p>
<p><strong>Mars Jullian</strong><br />
with you guys in five years. So yeah, it's a good amount.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. Thank you all for listening today's episode, make sure to subscribe to front end Happy Hour on your favorite podcast catcher. And follow us on Twitter at  <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>. Any last words Derrick

</p>
<p><strong>Jem Young</strong><br />
HomeKit.

</p>
`;
        return transcript;
    };