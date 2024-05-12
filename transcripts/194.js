module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. In this episode, we are joined by Rita Kozlov, who is the VP of product at Cloudflare to talk with us about serverless serverless e ai, and something Cloudflare has introduced called workers AI. Rita, thank you so much for joining us. Can you give a brief introduction of who you are, what you do? And what your favorite Happy Hour beverages?

</p>
<p><strong>Rita Kozlov</strong><br />
Absolutely, super excited to be here. So thank you for having me. I sometimes joke that my job as developer therapist, just because I spent so much time, you know, asking developers how can I make this experience better? Or tell me more about that air? So But realistically, what I do is so I lead product for Cloudflare as developer platform that and a big part of that now is AI and workers AI which I'm excited to talk about in terms of my favorite Happy Hour beverage. It's a dreary spring day in New York right now. So I'd probably opt for like a glass of chilled red wine. I don't know if that's controversial, but no,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, maybe it is Assam to me, I'm like the way you like it is the way you like it, right? Like, you know, yes, people get all uppity about that same thing with like, whiskies or things like that, you know, people have their certain way of doing it. If you enjoy it, it really doesn't matter. Cool. Well, it's cold and myself today as panelists from front end happier coal. You want to give you an introduction, and I'll get mine.

</p>
<p><strong>Cole Turner</strong><br />
Hi, everyone. My name is Cole. I'm a software engineer at Netflix who is on call today. So I'm excited to do that while I learn more about AI and my favorite Happy Hour beverage. I'm a bit sober curious these days, but when I do drink I love a good Ranch Water, tequila and Topo Chico with a little bit of lime. I'm there.

</p>
<p><strong>Ryan Burgess</strong><br />
I actually forgot what Ranch Water was. And I'm like, what is that again? So thank you for describing it cool. And I'm Ryan Burgess. I'm the host of front end happy hour. Lilia haven't been drinking a lot of alcohol either. But my go to happier beverage usually is some form of whiskey usually a Japanese whiskey is probably my favorite. Third has been nice enough to help support front end happier podcast and sponsor this episode. With clerk you get complete user management with pre built UI components for sign in sign up user profiles and organizations. The authentication is MFA SSO magic links SMS and bought detection clerk provides helpful SDKs for modern frameworks such as next.js, and react seamless integrations with popular databases, even clerk's free tier offers up to 10,000 monthly active users and you never pay for a user's first day clerk. Everything you need to authenticate and manage your users freeing you up to focus on building start here, Rita, what is workers? Ai? That's

</p>
<p><strong>Rita Kozlov</strong><br />
a really great question. So there's a short answer and a slightly longer answer. The short answer is it's a serverless inference platform. But what do those words mean? Right? So if you're if you're familiar with CloudFlare, what Cloudflare is generally known for is we run a network of, we're in over 300 different cities around the world, right. And I think almost every developer has used us at some point for CDN DNS DDoS. Right? You guys are nodding your head. Yeah. But what you can also do on top of CloudFlare, is network is actually run compute. So we launched our workers platform about seven years ago, giving developers access to actually deploying code from every single one of those data centers. So the way that I like to think about it is, if you've logged into, you know, AWS console before and selected US East, and then kind of we're on your way to start deploying stuff. With CloudFlare, the region is always Earth, and that's where you deploy everything to. And, you know, what we were able to do in the AI space is take that model and apply it to inference. So with workers AI developers have access to a whole bunch of the most popular models in our model catalog whether you know, llama three, which was just announced yesterday Mistral whisper or any of the image generation models. And the idea of the serverless model is that, you know, you just run your code, or in this case, you just run your inference. And you don't have to worry about any of the infrastructure or scaling or performance or optimization, where the infrastructure provider and will take care of all of that for you.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. So it just becomes you get a lot of the benefits being a user, but don't have to deal with as much even even more so I feel like Cloudflare anytime I've used it has been fairly straightforward and easy for me to use as a developer, but it sounds like with the workers AI you're actually getting more benefit with less work. Is that a fair statement?

</p>
<p><strong>Rita Kozlov</strong><br />
I mean, that's So that's what we're all about, right? I'm a developer at heart. And there's nothing more frustrating than when you hear about something new. I'll use the model example again, right? Llama three was released yesterday. And so I don't think that you want to spend your time kind of just trying to get things configured and get things up and running and dealing with VMs and GPUs. And so the idea is, yeah, kind of let's get to the the fun parts of actually running queries against the models and adjusting user prompts. And you know, all of that good stuff.

</p>
<p><strong>Cole Turner</strong><br />
I just wanted to say, that's really nice, because as an engineer, most of the time you just want to write code, you just want to get started and start shipping. And it sounds like with this approach, you don't have to worry about the infrastructure, the bootstrapping, you just start writing code, and you follow the documentation, you're able to deploy it see it, I love that. But I'm not an expert in AI. So I'm wondering, I'm gonna ask a crazy question. It sounds like you can deploy AI to these workers. Can you have that AI? Write the code for the project? Can I can I build AI to build the project itself?

</p>
<p><strong>Rita Kozlov</strong><br />
That's such a good question. And a very timely question, too. So we just did an internal hack week, actually. So I'm coming off of the high of that. And literally three hours ago, we did a demo hour where everyone presented, what they worked on. And literally someone presented a co pilot, kind of like GitHub co pilot builds on top of workers AI to help them write workers with workers AI. So it's all very inception II meta, and it totally blew my mind. So yes, you definitely can. I

</p>
<p><strong>Cole Turner</strong><br />
absolutely love that. I think like using AI to write more code, and even in this case, deploy your infrastructure is a game changer.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. I mean, it's like we've talked on previous episodes a lot about AI. And I think there's some camps of people worried that, okay, I'm gonna lose my job, you know, especially, I think there are definitely jobs going away. But let's talk even more specifically to software engineering, people are like, Oh, I'm gonna, like, totally lose my job, because like, AI is gonna be able to do that. I still don't see that I see it as more of a it's a tool, right? Like, it's, it's absolutely a tool. And even what you said, Rita, just like lifting away some of those just abstracting things. So we can get what we want done. It's like, be creative, and build something and ship it and get it out to the world. Versus like, Oh, I've got to fine tune my CDN, I've kind of oh, well, how do I deploy this? Some of that stuff, don't get me wrong, I love it. It's interesting. But at the end of the day, when I'm like, I just want to get this out to the world and kind of learn how it works. I don't want to be fiddling with that. But maybe on top of that is like so the AI sounds like it's doing a lot, which is great. How much fine tuning do I have? If I want to tweak that?

</p>
<p><strong>Rita Kozlov</strong><br />
I think so fine. Tuning is a really interesting area. And I think that that really depends, right? So it depends on the use case, if you're trying to get up and running with something that's relatively low context, or I mean, actually, wow, this is such a nuanced subject. So with a lot of the new models that are supported, we're getting larger and larger context windows. So what that allows you to do is actually kind of provide the AI with more information upfront, right? So that it can give you a more nuanced and interesting suggestion. So if the context window is small, you ask it a question. And like, that's it. But imagine now instead, you can provide it like a whole bunch of documentation that's new, and also ask your question on top of it. So I that landscape is changing really, really quickly. That said, most organizations that I talked to kind of at the enterprise level that are deploying AI in production, for things that are customer facing, you do have to do a fair amount of fine tuning to make it useful. So even to use the workers example, right, so workers is Cloudflare is a JavaScript deployment platform. We support python two now as of a couple of weeks ago, but it's actually very distinctly not node, which is what the vast majority of examples on the internet have server side JavaScript are. So if you take an off the shelf model, probably the code that it generates is not going to run as immediately or as smoothly on top of workers. And so for that particular copilot example that I was just talking about, you probably want to take a bunch of examples of worker specific code, fine tune the model for that particular use case and then deploy it. That's really

</p>
<p><strong>Cole Turner</strong><br />
cool. I guess one question I have is, as this feature has been released to users, what are you starting to see people do with it? What kind of functionality are they building?

</p>
<p><strong>Rita Kozlov</strong><br />
Oh my God, so many cool things we did. We did an AI challenge with our friends on dev dot two recently I saw someone build an AI therapist.

</p>
<p><strong>Ryan Burgess</strong><br />
I want that in my life. That sounds amazing. It

</p>
<p><strong>Rita Kozlov</strong><br />
honestly, it took some of the stress off my shoulders. I was like, I just came off of developer week. And I was like, you know, what does one do to alleviate the stress of like, a big launch coming up? And I was like, you know, I mean, it was slightly off the shelf advice, like maybe go for a walk, but I was like, okay, it didn't cost me $300 A session. So. And sometimes

</p>
<p><strong>Ryan Burgess</strong><br />
that's all you need to is really that walking away. And so if, if something's reminding you of that, sure. I don't like when Apple tells me on my Apple watch, you need to stand up. I'm like, no, like, I'm busy. Like, leave me alone.

</p>
<p><strong>Rita Kozlov</strong><br />
Exactly. You want it, you want it to be prompted, it'd be like, tell me how I can be comforted right now.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. So that's really cool. What else do you see

</p>
<p><strong>Rita Kozlov</strong><br />
another cool one was that I liked summarized YouTube videos. So you know, if someone doesn't have time to watch the full hour of this podcast, you can basically provide the link to the YouTube and it'll tell you like Rita Cole, and Ryan cover this, this and that. So that one I thought was really cool. I would save

</p>
<p><strong>Ryan Burgess</strong><br />
me time too. I could even maybe like leverage, something like that for putting a summary in the notes and stuff like that. But if that's watching this, you should, you should definitely watch the whole video because you're gonna miss some really good things. So just just the service announcement on that. I wish I

</p>
<p><strong>Cole Turner</strong><br />
could use that because, you know, therapeutic benefits. Absolutely. But like being able to synthesize information is really what aI think is most useful at. And I think about the number of meetings I'm unable to pretend to attend, but they give us recording, and they didn't turn on transcript. So I feel like I need to go build a workflow AI so that I can start leveraging this

</p>
<p><strong>Rita Kozlov</strong><br />
myself. Yes, definitely. Although I will say specifically for the so I take a lot of notes during meetings, actually. And I've tried using AI to summarize it. And it's really good. So summarization is something that it's really good at, right? Like you have a whole bunch of stuff. And it'll tell you, these are the things that you've covered. But what it's less good at right now I found is finding little insights. So for me, there are always little nuggets that I find particularly interesting, right? So maybe someone will drop in a conversation, we started using workers, because we heard about it on this particular podcast. And I find that fascinating, right? Because in terms of you know, thinking about, Okay, this is maybe where we invest some resources or like this campaign, or this thing paid off, and like, Oh, that's cool. But AI will kind of miss it in the rest of the whole thing. Or, or someone, sometimes someone will make a little comment about like a little bug or you know, something. I think that there's a human insights element that's a bit different from summarization. That's,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's also where the context aspect comes into, like, the more AI starts to develop. And we're seeing more of this even in like Chachi Beatty and others that it's like, it starts to learn you, right, like, which is creepy in in a sense. But I think that that's where it's more powerful to is like, yeah, what is Rita going to care about in this meeting? Or how would she interpret or even say something? I think even when we're prompting AI to do something for us summarize or write something up, start an email, all those things. There's oftentimes I read it, I was like, I would never say that. So I'm going to tweak it and adjust it. But the more and more the AI learns about an individual and the style and tone and all those things, that's where it becomes more powerful. I still think we're never going to get rid of that human aspect, Rita that like, yes, you're gonna just be like, that was an interesting aspect. I want to touch more on to that. But I think it has potential to get more power.

</p>
<p><strong>Rita Kozlov</strong><br />
I agree. I actually have a very happy hour relevant example here that I heard from a coworker of something they were using AI for. So one of my co workers started using AI as his personal Somalia and would tell it, I'm going to have this for dinner. Normally, I would reach for this Can you recommend me something that would go with that and like give me a conventional choice and give me an off the beaten path option. And it started he started giving it feedback about you know, this worked out this didn't work out and he's like, yeah, it's getting so much better.

</p>
<p><strong>Ryan Burgess</strong><br />
That's cool. I love that just sort of like such such a like, simplistic thing that you're like, I want to up my game on like the pairing of wine with food. And you know, yes, you can Google things, watch a bunch of YouTube videos, talk to a small a whatever. I don't know there's options out there. But like, that's pretty cool to just kind of and start To train that model to be like, Yeah, this was good, this wasn't. And so if it starts to learn what your taste preferences are, that's pretty cool, too. So really cool examples. I like that, I guess like, going back to maybe workers AI, with Cloudflare. As a developer, you know, I think I've heard some of the benefits already. But like, what are some benefits that you would highlight? If I was a developer wanting to leverage it? What What should I be expecting?

</p>
<p><strong>Rita Kozlov</strong><br />
So the thing that I thought has been really interesting, especially having been in the serverless space for a little while now, is, there are so many problems that I feel like we've solved for kind of generic compute. So you know, the whole reason that the idea of serverless exists is, again, the idea of you don't have to manage infrastructure, or think about optimizing things, you can focus on writing the code, and someone else manages the infrastructure for you. And with API, we saw a lot of these problems kind of return. So especially when it comes to and I would emphasize this quite a bit. I think, if you're a developer that's just trying to play around with things, I first of all, think this is a really fun time to be a developer. And there are so many different tools that make it really, really fun. But in, I think, workers AI makes it really easy. But there, there's a ton of other tools that also kind of make it really easy to have access to all these models. I think that the challenging part is taking that demo to production. And that's where it feels like we've regressed a little bit. Because if you want access to more serious inference resources, for the most part, you have to reach for VMs all over again. And what we're hearing a lot of people talk about, even for some of the serverless inference providers, is the whole notion of dedicated resources is starting to come back. Because, you know, training workload, for example, is very predictable, in a sense, right? Like you have a whole bunch of data. And you're going to spend, you know that next n number of months, kind of training it to a certain extent on your own schedule. inference is much more dependent on your users. And you know, how good is the experience you provided? And how useful are they finding it. And anything that involves users is really hard to plan for, right? So there's kind of two scenarios that happen, one, which is you're really excited about this thing that you built, and you want it to go smoothly. So you go and provision a bunch of resources. And we all love for our thing to take off on Hacker News. But maybe that didn't happen. And so now you're stuck paying for those resources for the next month. Or you have the opposite scenario, which is you under provision, and it does become successful, and all of a sudden, you have users whose traffic you're dropping on the floor. So again, that's something that we've felt like it's been solved for a little while. And now it's come back all over again with inference workloads. And I think the that's the big thing that we're aiming to solve with workers AI is that reliability and running in production component. And obviously, that includes things like performance as well. So today, today, I would say the the limiting part of performance when it comes to inference workloads, is actually not the speed of light. So we were really excited about running models really close to end users. But if a model is going to take a couple seconds to run, then that 50 To even 200 millisecond difference is not going to be that significant at the end of the day. But models are getting a lot smaller models are getting a lot faster. Similarly, chips are getting a lot a lot faster. Right. So you know, I think again, the llama three announcement is a really great example of that where the the 8 billion parameter at llama llama three is now as powerful as previously the 70 billion parameter, llama too. So as those models get smaller, one of the benefits that I think users will really start to get out of workers AI is that additional performance of, you know, you don't want your AI running on the opposite opposite side of the planet, especially if you have users in Australia, in Europe and Asia in South America. Having those resources centralized in the US doesn't make as much sense.

</p>
<p><strong>Ryan Burgess</strong><br />
No, that makes so much sense in your right, like some of the milliseconds to some of these models. You're not going to really care about too much. But over time, yes, you probably will. Especially when I think about is like cool AI is doing some of my job for me. I can set it and forget it, hopefully. And so that makes a ton of sense. And they're, I'm curious to is, you know, some of these things that you all are trying to do. I love it like because it's even thinking about coal We'll on call right now, sometimes, you know, there are things where it's just like, Yeah, you didn't plan for the right resources you need, like, you just the traffic goes wild, which is a good, good problem to have,

</p>
<p><strong>Rita Kozlov</strong><br />
it's a good problem to have.

</p>
<p><strong>Ryan Burgess</strong><br />
But at the same time, it could be that engineer who is on call going, oh, man, I gotta go up and you know, wake up at 2am and fix that or adjust. And so what I believe I'm hearing you're saying read it that may no longer be the case is that we can definitely start leveraging AI more, also, probably likely saving money for companies to write because it's you're not having to preemptively predict it's been doing a lot of this for you. Exactly. That's exactly right. I like that, yes, anything to, you know, for companies to save money and headache and not be woken up in the middle of night. I'm all for that. I'll

</p>
<p><strong>Rita Kozlov</strong><br />
add one more thing that's maybe a little bit less sexy, too. But I think important to think about, which is so Cloudflare sits in a really interesting position. Because we're a really global company and run this global network. And over the past few years, it's been really interesting working with customers in different regions, because there are more and more of these regional constraint policies. Right. So GDPR is a really big one for keeping data localized in Europe, and we are starting to see governments more and more start to think about, you know, where should these workloads be running and trying to enforce them running in region more and more, especially since if you think about your interactions with the AI model, you're putting some sensitive stuff in there, right? You might be putting symptoms that you're experiencing in there, right, that you might be putting customer information there. And so keeping a lot of that data local, and keeping the inference local, in and of itself, I think is going to become more and more important. And so they're having a network where you do actually have a data center in Italy, in you know, the Middle East, in that particular country, and Asia becomes really, really critical as well.

</p>
<p><strong>Ryan Burgess</strong><br />
That is a huge benefit, like and you're right, maybe like the site, it's not the most sexy thing, but I think it really is an important one, when we're working at companies having to deal with things like GDPR, it's like, that's not going away. Obviously, we've you know, that's been around for a few years. Now, I remember it being at Netflix having to implement a lot of those changes, it's a lot of work. But then also for lawyers at companies having to deal with making sure that data is retained the right and proper way. All good things. But it is more work on companies. And so being able to separate that by country is probably very beneficial. And I think if anything, even speaking to the United States, like we actually don't have a lot in place right now. I think that's going to change. It's slow. Obviously, government sometimes is a bit slow. But I think that the data policies are going to change. And so having some of this pre emptive thinking already, I think will be very beneficial. I

</p>
<p><strong>Cole Turner</strong><br />
want a plus wonder, and I feel like the what I'm hearing, aside from the platform integration, like you have a platform that is integrated within itself, a CDN, workers AI all working together. But the biggest value is the global reach, being able to deploy your application to one region is a lot of work, being able to deploy it to two regions is a lot of work. Having it deployed to every region that Cloudflare has available in my mind is like key, like, it's just, it's it just works. And when I think about all we have to do at Netflix to get even just one region to work. And when that region fails, we fell over. You've already solved that for everyone else. And I guess one question I have is if you're a developer right now trying to choose a platform to start your project on, why choose serverless? Overnight serverless.

</p>
<p><strong>Rita Kozlov</strong><br />
You know, I think all of the benefits that we talked about before. The way that I like to think about it is the pre launch checklist and the post launch checklist, right? So in terms of pre launch, you know, there's been some discussion on Twitter recently about like, why don't we all go back to just doing all of our stuff on a $5 VPS? I don't know if you guys have configured a $5 VPS. Before I have, it's not fun, I'll be honest.

</p>
<p><strong>Ryan Burgess</strong><br />
No, I would pay more money not to do that. Please, please.

</p>
<p><strong>Rita Kozlov</strong><br />
Setting up setting up the operating system setting up nginx getting all the ports correctly configured. There's so much stuff that you have to do before you get to writing the code which is the Art, like, that's the value to your customer, right is the features in the code that you write your customers really don't care about your infrastructure at all, like, maybe blog about it. And you know, we'll find it interesting and read all about it. But, you know, I think that that's the most important part. And so I think the reason you would choose serverless infrastructure is to save yourself all of that time upfront. But then there's also the post launch checklist, right? So that's when all of the scaling begins all of the we need another region for failover, we need to add a load balancer, we, you know, even small things like getting SSL certificate provision, there are so many things that you have to worry about. And so and, you know, I'm glad that you would pay to not have to worry about all of those things. But I would say most of the time, probably, it will end up being cheaper being serverless. Anyway, especially because you're not paying for over provisioned resources, there's so much that you get for free on so many services, including Cloudflare out of the box these days, too. So

</p>
<p><strong>Ryan Burgess</strong><br />
our lives are gotten easier. As developers, they've just gotten so much easier by a lot of the products and things out there that you just don't have to worry about those details as much, honestly, as a developer to when things like the port is wrong, or I'm just trying to think nginx like all those things that I've had to deal with years ago, it's, I feel stupid, like I feel like I'm like, Oh, I built this amazing application. It's like, oh, yeah, it's all working. And it's not because of something wrong with the server. And like, that sucks. It's just demoralizing, sometimes, too. So like thinking back, I do not want to go back to that. So if anything, you know, just to make it easier, great. I'm with you

</p>
<p><strong>Cole Turner</strong><br />
know, you're right. And it's a lot of work to like, there's a lot of upfront investment to not go serverless, you have to provision your stuff, you have to configure it, you have to make sure it's working. And that's all before you write a single line of code. And it sounds like you don't even have to choose between the two, you could start serverless and then write your code and make sure that it works. And then take off that way. And it might be cheaper, and then eventually decide, okay, maybe I do need to manage my own infrastructure. And then by then you could have a Cloudflare worker AI to write the infrastructure for you to configure Docker to configure PHP, or whatever you're using in that state. And in the future, we just don't have to write any code, I hope. But well,

</p>
<p><strong>Rita Kozlov</strong><br />
I will say, Our goal with workers is even at scale, you shouldn't have to provision your own infrastructure, right. So we will still manage all of that for you. But you know, if you if you want to scratch that edge, you can go deploy some Docker containers.

</p>
<p><strong>Ryan Burgess</strong><br />
We talked about this earlier, a little briefly about like, you know, mentioning how AI affects developers, and you know, we're seeing all these changes so fast to like, it's like, every other day, there's something new and it's like, you know, it's a lot to keep up with. But also, you know, I'd love to hear really your perspective and even calls myself of like, what's it going to be like, for developers? Like, how do we see this changing? Like, how is AI going to change the job of an engineer, software engineer?

</p>
<p><strong>Rita Kozlov</strong><br />
I think that's such a fascinating question. I started thinking about this a lot when the Devon demo came out, right? I think that that was a big. Yes. Yes. All right.

</p>
<p><strong>Ryan Burgess</strong><br />
For those who aren't familiar, it was this whole thing of what not even that long ago, a few weeks ago on, you know, just this, this AI, that was basically yeah, a made up engineer that's doing every Yeah.

</p>
<p><strong>Rita Kozlov</strong><br />
And I was like, you know, who's using this, right? So if we imagine a world in which if you take the dial kind of to the extreme of there's no more engineers? Does that mean that I the PM, I'm using this, which if you follow the demo, you do have to give it quite a few instructions, right? It's like, okay, go set up a GitHub repo now and go, like add these API keys. And I was like, okay, so I don't think that the Pm is the person that's using this. And so I think the answer is still an engineer is using this. And to me, it seems a bit like a conversation between a senior engineer and a junior engineer a little bit, right? That's like, Okay, this is your task, how would you go break it down? And you write out the steps and you're like, Okay, now, go execute on those steps. And it comes back to you. And it's like, I couldn't complete this one. Can you help me out? And you're like, Yeah, I'll help you.

</p>
<p><strong>Cole Turner</strong><br />
I love the way you frame that reader, because that's exactly and it comes back wrong. And you're like, I didn't quite ask for that. So like, Can we do it again? Can we try this a little differently? And it learns,

</p>
<p><strong>Rita Kozlov</strong><br />
and does I think it's very interesting to see how will fit into the software development lifecycle and one thing that I think will be a really interesting milestone, so So the other question is, what are the types of tasks that you expected? To be really good at because, you know, I think so far, there's, you know, there's consensus around, okay, it's there to help you automate some of the more tedious boilerplate parts of the code. But when it comes to, you know, architecting, maybe complex distributed systems, or coming up with algorithms or any of that stuff, you kind of have to do it yourself. So I was trying to think about what's something a bit more menial, that doesn't even require that level of thinking that I would love to have aI automate for me. And something that we take on quite a bit in the software engineering world, is rewrites, and rewrites are terrifying, and rewrites suck. And the thing that's always nerve racking is you have the old thing, and the old thing kind of keeps progressing. And so you're like, Okay, I'm gonna build the new thing. And the second that that I catch up, I have to build all these new features. So I will, I'll be very, I'll be a lot more excited about AI for I think software engineering use case, I would love to see the first rewrite done by AI. Because in theory, you should be able to take one thing and kind of, you know, take a React app and put it in view or, you know, whatever.

</p>
<p><strong>Ryan Burgess</strong><br />
That rewrite scenario, oh my god, Rita, that is honestly, like, just one of the hardest things, it really truly is. Because it's not something that you're always going to rewrite your code base that happens, you know, hopefully, you're not doing it every like, oh, views out. Now, I gotta jump to the latest framework, that shouldn't be the reason. But there are absolutely reasons where you get benefits from leveraging a new framework, or you need to just whatever it is. And I've experienced that so many different times throughout my career at large companies where it's like, you can't stop shipping, right? Like, I can't go to the product managers and go, Hey, we're just actually going to rewrite everything right now. And just, you know, we can't touch the state of things, because you know, what, it's going to be harder for us to, you know, rewrite it, I just being able to do that more with AI makes a ton of sense, it's probably still never going to be perfect. But if you could get close to parity, that's huge. Something that we were doing at Netflix, often to was like, even when we would rewrite something, we wouldn't change features, right? Like we would just It would almost to the user looks exactly the same. She wouldn't want to adjust it too much. And we'd even measure that in production as almost like an A B tests were but it was really to the users the exact same thing to measure, did we miss something like is this actually performing poorly. And so if you could get like some of that even faster, where like an engineer doesn't have to take react and move it to view and just literally be able to get it in front of customers to get data on that. That's huge. I love that scenario. And I want to see that. And I also

</p>
<p><strong>Cole Turner</strong><br />
want to add like because the future of AI, I'm really hoping for the day where just all of our system and infrastructure is plugged in. So like, it's able to infer the state of the system, the code that has changed since the last deployment. What are the anomalies in the runtime or the compute time? I feel like we're on the cusp of it. And we just need the most crisp model to make that happen. But when it does, I feel like the software engineering game will change significantly. It'll be a matter of, we know how to get things done. But we don't necessarily need to know how to do it ourselves. We can use the AI to do it. And today, it's funny, I'm doing this in my job today, I'm using ChatGPT to summarize incidents, or I've even used it to generate source code for when I'm working with abstract syntax trees, and I want to generate source code, but I don't know how to use that compiler. And so just being able to ask chat TBT How would I write this source code? If I was using the TypeScript compiler? It did that for me. And I love that. And this is just the start. So I'm excited. Yeah,

</p>
<p><strong>Rita Kozlov</strong><br />
I mean, it to your point and thinking about the fact that you're on call right now. And automating finding all of these anomalies. I think it'd be so cool to be able to, yeah, get, you know, ideally, you don't get paged all in one day, things resolve themselves magically. But if you do get a download of, you know, I've checked all of the systems like, this is the last deploy that happened, like all of the 500 errors are coming from this particular data center, or, like, this line of code of law.

</p>
<p><strong>Ryan Burgess</strong><br />
Even to give you that, like, yeah, when you're getting paged, like it's just like this quick runbook that you dive into? Would that's massive, I think I'll add to is like, even in the development stage, like, I think we're already starting to see this, but I don't know that. I quite think it's there yet. But even writing better documentation and writing tests like that, to me, is not the most exciting thing as an engineer are to be doing. Some are better than others. Like I sometimes read some engineers code. I'm like, wow, this is so well documented and the best comments I've ever read, I am not one of those people, I try to do better all the time. But if AI could take care of that a lot better and just doing that as things change. I think that's always been my biggest pet peeve with documentation and tests while tests at least they'll fail, and you have to fix them. But documentation, it just gets outdated, and then I don't trust it. And so if that could even be updated more and trustfully, that would be huge. Do

</p>
<p><strong>Rita Kozlov</strong><br />
I think that documentation is such an interesting point in two directions? The first one is exactly the one that you mentioned, which is documentation is really hard, because No, everyone always has a plan for it. And then you don't know what it's going to work. Like the only person that knows how something is going to work is the engineer that worked on it, right? And so getting that engineer to connect with like the technical writer and the PM, there's always going to be those loopholes. So whether that's external documentation, or as you said, in the code, just having AI annotate things for the next person, I think is really great. I think inversely, though, kind of going back to the conversation of, you know, how far is AI going to be able to go in terms of, you know, replacing engineers? I think bootstrapping projects is kind of an interesting one for AI, right? There's a lot of tools out there right now, like v zero, that will help you kind of maybe get something up and running. But I think, you know, it's hard enough to understand, when you're coming into a new code base that a person wrote, right, the first thing that you're going to do is grab some time with them and ask them like, hey, walk me through this, what was your thinking here? And so I think it's going to be interesting for humans to interact with AI generated code. And, you know, try to understand what was going on in the AIS head, so to say, I want to build something a certain way. And I think in that way, it's sometimes harder to come into something or correct it, then, you know, guide it as you're going along yourself when you're starting out. I'm curious what you think about that?

</p>
<p><strong>Ryan Burgess</strong><br />
No, that's a great point. You're right. Like it's, you know, the AI is going to understand its own code. And that's great. But that human aspect, you're still as engineers, even if you rely on the AI that's done something, you still need to better understand that too. And you're right, like coming into a new code base. It's like, Hey, cool. Walk me through what you were thinking here. How did you why did you do this? And that could be in comments to write. And so I think, hopefully, even the AI is, you know, thoughtful enough to write some comments. But you're right, there's, there is some human aspect there that we need still, you need to be able to know how to debug something, or why something was written in a way that if you change, it could be really bad. Like it could actually affect customers, or whatever the reason was for we make a lot of trade offs, right? There's human trade offs that we make, in order to ship something, to make sure that it's working for our customers. There's a lot that goes on there. And like you said, Really, the two is conversations between product management, technical writers, designers, I'm just going to list everything. That's it like product oriented, like there's a lot of conversations there. That is context that the AI may not be receiving, too. And so that that's an important call up.

</p>
<p><strong>Cole Turner</strong><br />
Yeah. And I feel like on that note, AI is more of a science than an art. But the practice of applying AI is more of an art than a science. Meaning we have to today validate what the models are doing to make sure that it's producing the output that we want. But I think about in the future, we might not even need to produce the output at all. When I think about documentation. I hope I don't have to write documentation in the future. I hope that there's just a prompt like a chatbot in my editor, and I can just say what's going on in this function. Tell me what's going on. And I think we'll get there but caveat that I think there will always be human judgment involved. And if there's not that I'm scared, because then the AIs are judging each other.

</p>
<p><strong>Rita Kozlov</strong><br />
That's so interesting, actually, the way that AI might change the way the code looks too, right? Because, yeah, actually, like do annotations become less meaningful? If you can just prompt and ask, what does this do then it maybe doesn't need to, like sit there permanently.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good call out to is like if the more and more AI is like in the editor, which we've seen lots of already. It's like, yeah, you could just pick what does this do? And you could highlight that function, and it's going to tell you what it does. Maybe Yeah, maybe my comment on having comments is probably not as powerful. It could still be nice if it's there for you. But if you can just select something to deeper dive. That's pretty Cool to maybe before we get into pics, I'd be curious. Maybe going back to workers AI a bit, Rita is, you know, what can people expect in the future things that are coming? I'm sure you can't share all the secrets, but like, what are things that people kind of expect for that direction?

</p>
<p><strong>Rita Kozlov</strong><br />
You know, we're not a very stealthy company. So I think some of this we might have teased out already. So to state some of the I guess I'll start with the more obvious things, we're gonna continue growing our model catalog, we're constantly paying attention to the newest models out there, we partnered with hugging phase, so you can now actually deployed to workers AI directly through their interface, which I think is really, really cool. By the end of the so today, we have GPUs in 150 cities around the world. By the end of the year, we plan to be in all of cloud fleurs 300 cities. So that's really exciting. But as we look at the future, so yeah, one of the things that we announced a couple of weeks ago is support for fine tuned models on top of workers AI. And so we'll we're going to kind of continue expanding on more and more, is allowing developers to have more and more custom workloads on us. So starting out with fine tuning. And the goal is to eventually support allowing developers to bring their own models and kind of build their own pipelines on top of us. So the way that you know, what I expect from the workers AI roadmap is really kind of completing that picture of what are all of the things that you need on the inference side in order to run an AI application? Cool.

</p>
<p><strong>Ryan Burgess</strong><br />
No, that's like a lot of exciting things coming. I like that. Well, it's probably a good time for us to dive into pics. In each episode, the front end happier podcasts. We like to share fun things that we found interesting articles, books, blogs, videos, whatever it is cool. You want to start us off?

</p>
<p><strong>Cole Turner</strong><br />
Yes. I have two picks today. I was ready. My first pick is the steam deck. I just got an OLED steam deck. I've not been gaming for a minute. And it's awesome because I can just game on my couch. I can play party games, couch games, single player games. I can even play cyberpunk on this handheld. And that's really cool. And my second pick is a game itself. I've been obsessed with this game jelly animals that are rage fighting with each other. And so you go across these obstacle courses. You fight other jelly animals, you throw them off the map and it is an amazing stress reliever when you're done with on call. So those are my two picks steamed duck and party animals.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on Rita, what do you have to share with our listeners?

</p>
<p><strong>Rita Kozlov</strong><br />
I did not come as prepared. So let's see. Something my partner and I have been really into. So there's a movie theater in New York called film form. And they show a lot of kind of indie movies or older movies and they've been doing an OLED Dylon marathon. So we've gone down this rabbit hole of watching movies. He's a French actor from the late 1960s and 70s. And they've all been absolutely excellent. I think my favorite has been les Samurai, which is kind of a thriller movie about an assassin. It's very, very cool. Very Noir. So that'd be one of my picks. My second pick. Mmm hmm. I'm trying to think of something that is actually more on topic and AI related. I don't know, I might recommend the AI care test. I thought it was really really great.

</p>
<p><strong>Ryan Burgess</strong><br />
Is there a place that people can get to that too? Yes, I'll share the link for it. Awesome. Thank you. Yeah, that is that is pretty cool. I like it. I might have to give that a try. Awesome. I have two picks. Both TV kind of related. There's an Apple TV original called sugar. It's I think they only have like four or five episodes out so far. It's you know, unfortunately released weekly, which I'm never a fan of. But so far, it's been really good. It's a TV series about a private investigator in LA looking for a missing girl. The story has been good. And the cinematography has been really good too. I've just like enjoyed the story and how it's all coming together. So I'll keep watching that one. Hopefully it continues and then one of our guests from maybe even our last episode, Jason lengths, or if he's been on a few times he put me on to this Youtube series done by Natalie Lynn. She's just doing like a V log series of her traveling around the United States in her van. It's beautifully shot. She does such an amazing job and I'm really enjoying how that one's done. So that's worth checking out as well. Rita, thank you so much for joining us on this episode. I learned so much and just always love the conversations around AI just because it's impacting us so much. So thank you for coming on sharing great insights on workers AI. Where can people get in touch with you?

</p>
<p><strong>Rita Kozlov</strong><br />
You can find me on Twitter at Rita Kozlov underscore Yep, pretty active there. So come say hello. Awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
And as for our listeners, you can find us on Twitter at front end H H on YouTube at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Really wherever you like to listen to podcasts on. Any last words Colin Rita,

</p>
<p><strong>Rita Kozlov</strong><br />
I just want to say thank you so much. Yeah, yes. And the pleasure has been all mine.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Thank you so much, Rita. And thank you all for listening.

</p>
`;
        return transcript;
    };