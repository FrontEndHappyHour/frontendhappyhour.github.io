module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. It's been a tough few weeks in the tech community there have been a lot of large layoffs and companies like Twitter meta stripe, many more. It's difficult situation for everyone, even if you're not being laid off. It's it's a lot for the whole community to handle. So we thought it would be a really good discussion for us on an episode. Let's give introductions of today's panelists. I guess you want to start it off?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, sure. My name is Augustus. I'm a software engineer at twit

</p>
<p><strong>Stacy London</strong><br />
Stacy London principal front end engineer until

</p>
<p><strong>Jem Young</strong><br />
Jem Young engineering manager at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm an engineering manager at Netflix. In each episode of the front end, Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And what did we decide today's keyword is severance severance. So let's dive in. How are each of you feeling about the whole tech layoffs? What are thoughts that come to your minds?

</p>
<p><strong>Augustus Yuan</strong><br />
It's definitely it's definitely mentally taxing. Well, and just to clarify, actually, Twitch didn't have layoffs, it was Amazon. But being even like a subsidiary of them, it really affects, I don't know, it just kind of has an impact on you. You know, and I've definitely worked at companies where that have had multiple layoffs. And it's hard to explain, it feels like there's like this survivor mentality you feel when you don't get laid off. But it's, it's just like, you just, there's like a lot. Especially if like you knew someone who got laid off. It's just the worst feeling. And it's definitely like, this is like a really, really painful time for a lot of people. And it's important that we can find a way to show support,

</p>
<p><strong>Jem Young</strong><br />
as well put, I guess, you do you feel like that. Not guilt. I don't know, I don't feel guilt. Like it just like it is what it is that I know, that's like, cold. If I was on the other end, that's probably not the right way to say it. But I don't know, I don't know how to phrase it properly, which is like, you know, I think we saw this coming for a while, I guess, let me step back a little bit. So Netflix had like a bad q4 of last year, about fourth quarter, and didn't have a great first quarter either. So like our stock tanked early, and everybody's starting out their theories on like, ah, blah, blah, blah, the content, etc, etc, etc. Everybody, like took their took their turn to dunk on Netflix, because we were the first ones or one of the early ones in Silicon Valley to do layoffs of like the big fan companies, which wasn't great. Like as a manager, like having to keep morale up when you see like articles coming out all the time that like, oh, the end of Netflix is probably the culture. It doesn't work, et cetera, et cetera. But really, like it was an it's an economic thing. And it always was an economic thing. But you know, when you're the one of the only companies doing it, you know, they all took their turns at us. Which, you know, I had a lot of conversation with the team about like, you know, we're actually doing fine, you know, this is just necessary. But now, so we're like we Netflix went through our layoffs pretty early. And you know, we got a lot of press over it. It was like q3 of this year of 2022. And go into q4, all the other companies are trying to do layoffs too, because they're also like, Oh, crap, this is not going to turn around, the economy's doing really poorly. We look at our projections. And next year, we either got to layoff now, or we gotta lay a lot of people off next year. So we're gonna cut cut now. And that's what's been, I don't know. That's my mental state of, they'll be more. It's just a matter of like, who and how far it's trickles down to is it go down to startups, in effect VC funding stuff like that? Or is it just the big companies that grew really, really big in 2020? And it's going to stop there? I don't know. It is a weird feeling. But I don't know. I'm feeling pretty, pretty confident. So far. But you never know. You never know this economy.

</p>
<p><strong>Ryan Burgess</strong><br />
It's interesting to gem like, I like that you kind of brought us to the like history of how kind of we've got here. And a big part of it, too, is I think, a lot of companies going into COVID, a lot of things changed. And then even coming out of COVID a lot of things have changed. And so I think some companies over hired in not really understanding how the market was going to shape up after or wherever we're at kind of in this after state of COVID. And I think that that's been a bit of a problem too, is like it was so hard to predict. And so companies are hiring up because the need was there during the pandemic, but now we're in a different state. And it's it's not that same state.

</p>
<p><strong>Jem Young</strong><br />
So the metal layoffs happened fairly recently they laid off 11,000 people or something like that, which is a crap ton. That's, that's a lot of people. And then Zuckerberg actually the the CEO of of Mehta released a letter in which he's like this is on me, here's what happened is, we assumed all of this, like, during the pandemic, when we're all second home or online shopping, we assumed this kind of new digital native world came about where like more people are just going to naturally be online all the time. And this is the new normal. And it turns out, like we were all wrong, and things are actually going back to pre pandemic levels. And we see this on Facebook, user data, we see this on Amazon shopping trends, where we're all buying stuff online, we've actually slowed down on that. And that's just, it's kind of just reality check for Silicon Valley, because we're so used to this, like 12 years of unchecked growth. And now all of a sudden, it's like, hey, actually, we're not growing anymore, we're actually shrinking a little bit. And we grew too fast in the past few years, because like everybody was hiring, remember that when nobody was hiring. And then everybody was hiring, and then they're giving out money, and then like, suddenly, it just cut out. And that's where we are today. Unfortunately,

</p>
<p><strong>Augustus Yuan</strong><br />
I think Twitch is pretty fortunate. Because we we had to do hiring freezes earlier on in this year. And, you know, of course, everyone was very, very skeptical when they heard that. But now we're very thankful that we did those. And it's like, those are like the kind of things that might scare you at first, especially if you're at a company. And this is impacting so many people. Now, Amazon recently also announced they laid off, like 1000s of people and and, you know, I would say that, as scary as it is to hear about hiring freezes at your companies. It's also a good sign that they're kind of trying to be mindful of that. So if anyone's experiencing that, you know, that isn't something to be like, Oh, my goodness, like, are we doomed? Or something that's actually like a good sign that your leadership is kind of paying attention, and is trying to look out for the company.

</p>
<p><strong>Ryan Burgess</strong><br />
It's a good point, too. And I think you all, I think Augustus, you'd started even talking about almost feeling weird or jam, like you had mentioned that to have, like, if you're the one stain, and that can be really tough. Like I remember, many years ago, at a agency I worked at were like, half the team was gone. And you're like, Okay, I didn't get cut. That's great. But it's not great, either to still be staying there, like because it's just like morale, and everything is so down because of it. And that's hard to like, I think that that's a hard state to be in.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it um, I can't help but think of this, like, we did an episode on impostor syndrome. And it just like, at least for me magnifies, like, tenfold. Knowing that it could have been me, you know, it could have been any of us, you know, and it's it's just this crazy feeling,

</p>
<p><strong>Ryan Burgess</strong><br />
or other ways in which like, you can predict these things happening at a company. It's one of those things in hindsight, you're like, oh, maybe like we over predicted things in the pandemic and how it's changed. But are there really signs that you can even predict something like this of like hat companies having to do that and

</p>
<p><strong>Jem Young</strong><br />
want to, like, throw out some bad advice, but you can't really, part of it is like, you have to have faith in the leadership team. Part of it is being aware of like larger macro economic conditions, like in recession, companies spend less on ads, if your company is dependent on ad revenue, they're gonna take a hit. That's just like how the whole system works. So part of his like you, I don't know, I don't I don't think you can. And you never know if, if they did layoffs, if you're going to be part of that cut or not. Because that's one above you, some VP or even higher, making that kind of like, this passion project that's really impactful, we're going to cut it because it's not part of our core business, or it's not making money or something like that. That's a little tricky. I think what a hedge potentially is doing boring work. If that, if that makes sense. Like, not doing the sexy crypto chat bot. Whatever the flavor of this year for tech is in just doing like the core. I build UI, I build databases, I build back end. I am a network engineer, app security engineer like these core things are usually probably a little bit safer than Hey, we're coming up with a new virtual reality headset for a car for self driving cars. That sounds awesome. That sounds fantastic. I would love to work on that. However, is that going to be the first thing you get cut when like it comes push comes to shove? Absolutely. And that's I don't know. That's like the the risk you are taking your career. It's like taking one direction or another

</p>
<p><strong>Ryan Burgess</strong><br />
be I think that's like, maybe a good way to put it Jem is it's Like a risk that you kind of should be factoring in is like, maybe that doesn't matter in the short term or you're like, I really want to learn this headset for cars, like self driving cars, like that's like, could be something you're like, I'm so passionate about it, it's worth that risk. But I agree with you is that like certain things like that get cut? Where it's, it's exploratory, it's still a huge bet. And if you have to start scaling back the business, those are usually the first things to go

</p>
<p><strong>Augustus Yuan</strong><br />
that I just completely agree with Jem that it? And it's like a common question. I see a lot of people like, kind of, say, say like, to could we see this coming? I sometimes you see a company all hands, like people ask like, you know, was there any way we could have predicted this? And I'll just be honest, yeah, I don't think there's really good ways to predict it. And that's like, what makes it so important to be paying attention to like what's happening, not just like within your company, but outside, in general, you know, and not like, not necessarily going too quickly to blame your leadership necessarily. Right. Like, I think there are some things that are kind of out of our control here. And this is just, it's kind of an unfortunate time right now. But like advertising spend is definitely going to take a hit. And that's just what happens during recessions. And if your company is very reliant on it, then yeah, yeah, I

</p>
<p><strong>Stacy London</strong><br />
think it's hard, it is hard to predict it. I want maybe I can talk about this later in the episode too. But I was part of some layoffs. But it was, it was part of a company that had never done that kind of thing before ever. And they've been around for a very, very long time. And there are people that had worked there, their entire careers, like 2030 years. And so like, there was this idea that I get a job here, and I'm here for the rest of my life. I don't need, you know, to ever worry, and it's very stable. And, you know, it's made it through ups and downs, and macroeconomic, you know, conditions and all of that. And it still happened. So like, you can definitely see it kind of broke people's, I don't know, idea of what work is and what it means to like, have some sort of like long term job somewhere it was, I was young. So it was right there. It was different for me. But there were some folks there that, you know, been there a really long time and that was yet shattering your idea of like, what work is and what it means to be a part of a company for a long time.

</p>
<p><strong>Ryan Burgess</strong><br />
Were you part of those layoffs, Stacey like immediate, like, I knew you were there when the layoffs are happening, but like, did you get laid off as well?

</p>
<p><strong>Stacy London</strong><br />
I did. Yeah. A whole story. If we want to start telling layoff stories, I could, I could share that on.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it's gotta be tough. I mean, I think it is worth trying to dig in.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I I was working for Well, I won't, I won't, I guess leave company names or anything. But I was working for a company that was pretty early in my career. So I hadn't been working a long time when it happened. But it was for a company that had never done that kind of thing before. And so I kind of thought I'd be working there for a really long time. Like, I like my job. I liked my coworkers. But they were a private company that had been they purchased. They're one of their biggest competitors, which was like semi public. And so there was some, I think, additional scrutiny on the books like, Oh, you're spending like way too much on r&d, or like it or tech, compared to like other companies like this in the industry. So you know, you probably need to like slim that down. And then there was this was also around the time of like a big movement towards like offshoring. And like, doing a lot of work with like Indian companies like like Wipro and if there's like a bunch of companies like that were doing a lot of augmentation that way. And so there was a hundreds of us that lost our job. And and we were, I don't know, it was the hardest part for me it was we in order to get severance, you had to train your replacement years. Cheers. There's, you had to train your replacement. And they, and they had to sign off to say that you did a good enough job that they felt confident that they could to do your, you know, responsibilities and role at that. That killed me.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow, could you imagine like not doing a good enough job? Like they're like, No, like he kind of trained the person so you're not qualified for yourself? Sorry. Bye. Cheers.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I couldn't. It was very surreal. And then the other thing, I mean, I kind of knew it was going to happen like where they started asking me questions about like, Hey, would you mind being a manager of a Team, an offshore team only offshore. And I was like, No, I don't want to do that that like sounds like a lot of weird hours. And I just that doesn't sound good at all. So I kind of as I was saying it, I'm like, Oh, I'm stealing my fate. I feel like this is like, I'm for sure gonna be in the layoff group by saying no to this question. So I guess in that way, I predicted I could predict a little bit but yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I respect you for the fact that you're like, No, I do not want to do that. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I was like it was. Because it was so early in my career, I didn't have a lot of the stuff that makes it really hard for people, like I didn't have a gigantic mortgage, I don't know, kids, I didn't have all these sorts of things that add to that weight of a burden of having a job like are giant medical conditions were like having having insurances tied to your job, that's huge. For a lot of people, almost everybody, you can easily go bankrupt to this company with you don't have health insurance. So yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that's a big one. Or another big one that people don't think of too, is being on a visa, like when you are, you know, you're not an American citizen. I mean, a lot of these companies are American. And so that is really tough, too, because that is an added fear for folks, you have a very limited time to find another job. And you're tied to a work visa, like you have to be working to live and in that country. And there's a lot of people who've been here a lot longer than I have in the US who still don't have American citizenship. And so they're on these long, h1 B visas. And that can be really tough to and like that's really an additional scary piece where you've built your life here and like you're like, oh, shit, I may not have a job tomorrow and have to scramble to find something not that to me. There's a lot of these facts.

</p>
<p><strong>Jem Young</strong><br />
That's a good call outs AC on the one that sounds like a terrible experience seven string replacement. That's just awful. I'm sorry to go through the

</p>
<p><strong>Ryan Burgess</strong><br />
ads of Roth. Yeah,

</p>
<p><strong>Jem Young</strong><br />
but the I think the medical insurance is a really, really big one and totally under it underestimated. Now that, you know, I have two kids and a wife, I was just like, you know, playing around with how much it cost to put all of them on my insurance and like it's a lot of money. It is a lot of money to have like the whole family, like you say if someone got laid off, to have on one insurance like that will sink you really quickly. But you got to have it. Otherwise, yeah, medical debt will will take you down really, really quickly in this country.

</p>
<p><strong>Stacy London</strong><br />
When the other I guess interesting parts of the story too is I had, I guess I'll try and do positive spins on that nightmare. I was of a situation positive spins where I had a really good manager at the time. And they as part of the severance package, they set you up with people to like help you find jobs and that kind of stuff, which was which was nice. And end up finding a job pretty quick. But it was like they wanted me to start before I officially my end date, there was some like weird overlap where I needed to like if I was going to do it, I would have had to have quit and lost my severance to take the new job. There was like this timing thing. And my new My manager was really great. She was like, No, like we let's figure this out. And she figured it out and got it so that I was able to leave earlier than I was supposed to and still got my severance which was really nice. So yay for managers fighting for their people. It's probably good because I got a different job I got new experiences I met new people like I wouldn't be here now with you all doing this podcast if that hadn't happened, butterfly effect of of things, changing the trajectory of your life good things.

</p>
<p><strong>Ryan Burgess</strong><br />
So that in itself sees you're on this podcast. I love that that's a win in itself. I love it. Yeah. Yeah. I mean it's that's awesome. Like to actually have management helping I've heard instances where people have gotten let go and they're their managers like helping them to find a new role. Nobody expects these things to happen and even that manager in that situation probably had zero call on you getting let go and so that that's really cool to have a managers actually cares and does that I think about this in the sense that like how would you approach even talking with your manager maybe even being on a team that still stayed right like there's peers like you all mentioned earlier is like you have a peer that got let go or another team that you work closely with got completely let go and like this can affect mental health too. And I'm curious like how each of you would maybe deal with that talking to a manager and should you talk to them?

</p>
<p><strong>Jem Young</strong><br />
Yeah, you should talk to your manager I've found in my I'll be at Salt saloon experience as a as an engineering manager is You are therapists, sometimes people will talk to you about problems that are unrelated to work sometimes and you, you listen. So yeah, you're, hopefully you have that relationship with your manager, and you should be able to, like, be candid. I'm like, when Netflix was going through layoffs earlier this year, I was super candid. The team like, here's what I know, here's what's just speculation. So like, if you hear that, or read that, like in some article or journal, that's speculation, they don't understand our finance financials or what we're doing. So here's what I know, any other questions, you know, I can point to my manager, or we can have like a beer town hall or something like that, or I can get this feedback to my manager, or we can put together an FAQ or something like that, that's something that managers should be doing is, if a lot of people are feeling nervous, or kind of like, you know, I'm getting having a lot of anxiety about the current market, is your managers should be feeding that upwards to upper leadership. So they can either assure them or I don't know, sometimes it's bad news, too. And they don't want to tell you that, which is unfortunate. But yeah, you should always like tell your manager, you're having these thoughts and feelings, it doesn't help to keep it bottled in, and then you're just like a nervous wreck every single week.

</p>
<p><strong>Ryan Burgess</strong><br />
I think a big piece of that job. I love how you put that. I think encouraging more vulnerability in that sense is like building that trust and being able to be open and honest with your team or your manager. I think it's huge. And so I think, yeah, if you're able to build that trust, and say, like, with your manager, like, I'm struggling with this, like, how do I deal with it, and they may not have the answers, but I think even just sometimes being on that same page can go a long way to where you're like, oh, at least my manager understands where I'm, how I'm dealing with this. And like, that, that can go a long way. So I love that you called that

</p>
<p><strong>Stacy London</strong><br />
out. I like when managers or leadership to proactively message about stuff, like, especially right now, with all the laughs happening, like, even if maybe people haven't said, like, Oh, this is making me nervous. It's it was like, nice to see some of my leadership as an example. Like, proactively be like, Hey, we know, like, things are a little, you know, uneasy in the market, and blah, blah, blah, and there's a lot of stuff happening, you know, here's, you know, here's where Atlassian is positioned, here's what our financials are, and this is, you know, we feel good about blah, blah, blah. So like, that's helpful. the proactive side of that's helpful too,

</p>
<p><strong>Ryan Burgess</strong><br />
that's a really good call out to is like, a lot of communication is getting ahead of things, instead of being reactive to sometimes the reactiveness is actually doesn't feel as good when a leader is being silent on some of those things.

</p>
<p><strong>Augustus Yuan</strong><br />
I also have Ryan, how you mentioned, you know, it's not just the manager, hopefully, you can feel comfortable talking to the whole team about it. And I personally think like, just getting the team together to just talk together and vent about it is like, really great way to, like, get some of those emotions out. And you know, not everyone's comfortable doing that. So that's totally fine. Don't feel like you need to do that. But I heavily encourage you all like to check in with your teammates, because I guarantee they're probably feeling something too. And it is really tempting to just bottle it in. But once someone like kind of speaks up about it, it makes it a lot easier. I feel like I personally, it helps me a lot more. But yeah, I hope everyone who listens to our podcast can develop a good relationship with their manager, they're definitely your allies. I know. I don't know that. This was when I was a kid, I had these misconceptions that when layoffs happened, the manager was like, Oh, I'm gonna pick this person, because they called me something weird or something. But it's many times it's not even in their control, they can't even choose and you know, they are your ally. And they're, they're just as much in it as you are. And, you know, it's important that you can work with them.

</p>
<p><strong>Jem Young</strong><br />
And to riff off that excellent point. I understand. You're just behind your manager to during these times, I'd say most of the time line level managers don't have any more information than you do. Like if there's layoffs coming. managers don't know about it, because we're too far down the food chain. And I know it's kind of a you look your manager like Oh, obviously they know what's going on. They're awesome. They're handsome. But like, you know, what I've experienced this year is most of the time I don't know this stuff is coming. I can I can choose how to react, I can choose how to disseminate the information in a way that doesn't cause any like alarm. But I'm not in control of these things. These decisions are made above me. And sometimes it was difficult. Sometimes the team would ask me hard questions that I don't have answers to and I'm like, I don't know. I'm sorry. I will tell you everything I know. But that's it. But I've also heard instance of like people just like really tearing into their manager, like, why aren't you doing this and like not treating them well, and just remember, they're people too, and they're just in the middle. And it's even worse because like they don't, as a manager, it's really tough during these times, because you're aware that you don't produce. You don't produce like a tangible output for the company. I guess as a way of putting it. As an I see, the power you have is like, I build this product, I shipped these 10 things last year, these commits have my name on it. As a manager, you have none of that your your output is purely based on your team. And so like you start getting nervous too, because you're like, if they're cutting people, are they going to cut the engineers who made something I'm going to cut the manager who, you know, your question, your your value is always questionable. It's not true, you obviously need a manager, I think we all agree that but during these times when things are getting a little, little tight, as a manager you were nervous to and then you have to answer your questions about you from your team, when you have your own concerns to about your role and your team's role, et cetera. So it's not like a tiny violin for managers. It's just like, let's all be kind to each other. Like you got to said, like, get to know each other, be vulnerable, be candid. I think that goes a long way, especially because you don't know these things are coming. It's really uncertain. But hopefully you have each other and you hopefully you have these relationships in this trust that will carry you through.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I liked what you said there, Jem, too, is like sometimes also, the management is just like dealing with it maybe seconds before and having to like, share that message, like really quickly with their team. And sometimes they haven't even had time to like, internalize it, right. And so that can be tough. I think honestly, in all leadership levels, I think this is tough to deal with reading, like, let's say Mark Zuckerberg, this letter was published for the meta employees getting let go, I read that and was like, Man, that's gotta be tough like to make that call for such a large percentage of your employees. I thought he did a really good job, trying to own it take responsibility for that. But like, at the end of the day, that still sucks, like, you know, even tap to make that decision for people. It's not like he was like, Yeah, you know what, it's okay, let's let people go. It's like, that's a big decision to have to make. And then, you know, execute on it.

</p>
<p><strong>Jem Young</strong><br />
A question for you all is what? What does all this mean for the market? People are already saying it's a tech winter, whatever popular vernacular you want to use. But how do you think all this will affect affects kind of the overall tech market?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, we're definitely going to see headcount reduced. So finding jobs is a little bit harder. So for the next, like, maybe few quarters, it might be difficult. For there, there'll be definitely companies hiring. But I don't think there'll be as many choices that we've typically had in years prior. That will definitely be something that will affect things, I think, right away, like if not already, that's what the markets looking like, yeah, if

</p>
<p><strong>Augustus Yuan</strong><br />
you're if you're like a new grad, right now, I really feel for you, like tech is hard and competitive as it is. And to have this kind of happen. Will def I, I know it sucks. Like there's no easy way to say that. Like, it feels so unfair, that it happens at a time when you're graduating. But, you know, things will things always turn around. So. But yeah, it sucks. There's no really easy way of saying it. I don't know if there's any advice we can give to any new graduate listeners.

</p>
<p><strong>Stacy London</strong><br />
Um, one thing I was thinking about is a lot of this is like, layoffs late are in companies that are software specific, like these are all software companies, that's their sole thing. But there's a lot of companies out there that have tons of tech jobs that are not. That's the software is not their only thing, and they haven't done layoffs. And they're, you know, so I think that there's still going to be those kinds of jobs. So maybe that's not what you're looking for, but I feel like there's still be a lot of openings in different industries, but still related to like programming, building software.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, actually, that's a super good point that is worth mentioning, like, most of the companies that are getting hit are ones that have very high advertising revenue. And there's actually a lot of companies that are doing very well, you know, post COVID And they're not as impacted. They may get impacted later but so there's still a lot of hope.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, and also I wonder just you know, it's it's really hard to predict clearly even the sense that companies want to predicted this happening, but it's also wonder like, how long will this like last two, right, like, I think that it might only be He part of a year that people are kind of having to deal with this in the company start to build up. Like I said there may slow down on hiring. Maybe that starts to build up halfway through next year where it's still not going to be like, boom, we turn on and we're hiring a bunch of people. But maybe that starts to just like, slowly pick up again.

</p>
<p><strong>Jem Young</strong><br />
Yes, I think we'll we'll see, I think, watching all this unfold, and being kind of in the middle of like Silicon Valley, and tech. We don't know. But I see how connected everything is like, consumer spending is down, you're like, cool. But if consumer spending is down, then advertisers are spending less, because why would they advertise people aren't buying if they're buying less than companies revenues, like Google or meta or down because in Twitter, they're all relying on advertisers. And like, you start understanding like, Okay, how does this company make money? That's something you probably should always understand about any job. But understand, who are the customers? How does it? How did these companies make money? I think there are certain places that are, I wouldn't say rock solid, nothing's rock solid. But there are places that are better positions right now to be at. Not not to give you a free shout out. But Atlassian like is a business to business company, you're always going to need Jira, you're always going to need these tools. People aren't cutting those budgets, because like they're not, you know, they're not a software engineer salary that they're looking at. And but they always need like that sort of tooling. Those are pretty safe business consumer is a little bit trickier. Because when people aren't buying, people aren't buying. But businesses are always spending money. Like even when they're losing money, they're spending a lot of money. Those are traditionally a little bit safer in times like these. So yeah, like you called out Stacy there, there are other jobs out there, it just may not be where you're looking. Or it may not be like the the hip cool job that you want to work at. But tech is still hiring, I still see plenty of jobs, it's just a little bit, probably a little bit more competitive now. And salaries are probably going to stay flat this year. Probably next year, it is a free market. This you know, if there's a lot of talent, then salaries will have to go up. That's just how it goes. I don't know how long it's gonna last maybe, hopefully just a couple of quarters, hopefully not as 2024. But just pure speculation.

</p>
<p><strong>Ryan Burgess</strong><br />
Yes, so hard to no good call out on the salaries too. Like I think that that's a really important one too, if the markets like not hiring as much, the salaries may not change much for a while either, which is

</p>
<p><strong>Jem Young</strong><br />
I hate to say this, and like I all our front of happy our regulars take this in the best way possible. Because I don't mean to be like glib about it. I'm not going through layoffs. And I recognize they're very difficult. However, there is some upside to this, which is companies are getting lean again, we've gotten pretty fat in tech over the past decade, because like the stock market just kept going up. You you literally throw money at anything, whether it be like crypto or, or the latest ml, whatever, how many self driving cars startups are there in San Francisco, like a dozens, dozens and dozens, like we've gotten pretty, pretty lacks about being efficient with capital and being efficient with our time. And we just like we're throwing stuff out there. I mean, stock market's been up for the past 12 years, like literally any stock, you can pick, it just shot up there. So on layoffs are they suck? There's no way around it. It's it's very painful. On the other hand, it's it's good that companies are leaning out and being like, hey, you know, maybe we don't need 50 engineers dedicated to this out in a virtual reality experience for pets, or something like that. And that's something that's a natural cycle of business, which is, you know, recession, boom and bust, etc. But so yeah, it's still it's hard to see. But we will see companies emerge out of here that are leaner and meaner and more efficient and can do a lot more with fewer engineers, and for less money. And that's kind of the point. That's how capitalism works, for better for worse.

</p>
<p><strong>Ryan Burgess</strong><br />
So it's one way you're looking at is, in some ways, it's positive to like it, you know, as engineers, like, we deal with constraints. Well, you know, what, this is a business getting constrained to bid to really figure that out. And some sometimes that can actually also create innovation, right? Just like you're tightening up things that you're how do we deal with this? Or how do we scale the business more? And so, you know, there are likely some ways that you can look at positives out of it, too. I like

</p>
<p><strong>Jem Young</strong><br />
innovation. Yeah. Why? Why innovate, when you can just solve a problem by throwing more servers and more engineers at a problem? Like you're not, you're not forcing anybody to push the bounds? And maybe this will, I don't know, I'm really struggling to like, see this rationally as like a rational unemotional person they see as purely like numbers. But on the other hand, like real people at the other end, it could have been me with my mortgage and my kids in school and my health insurance, all these things. So Oh, I don't know, I'm really struggling how to like articulate this well, without being cold hearted.

</p>
<p><strong>Stacy London</strong><br />
There's a part of me too, you just don't see a lot of, you know, like the the charts about, you know, executive salaries versus everybody else's salaries and how divergent they've been over decades and decades, and they keep getting wider. And I don't see a lot of execs being like, hey, maybe, since I made the mistake of over hiring, maybe I take a pay cut, and we keep you around until things get better. I don't see that happening very often. And I get it right. This is capitalism all you know, but it also bums me out because it's like, the purse, you know, if if there is true accountability, be accountable, you know, and maybe make a little sacrifice to keep keep people around. That's not a very good take. And people are probably I just I know.

</p>
<p><strong>Augustus Yuan</strong><br />
That's the real estate there. Is that so true?

</p>
<p><strong>Jem Young</strong><br />
No, I'll tell you, if I was on the other side of a layoff. Say as I made it down, I'm getting laid off. I'd be pissed off, I'd be so angry. Because like, they still make for like their net income or net revenue. Last quarter was like $36 billion. And you're like laying me off? In my like, tiny salary on top of that. It is insulting. Why aren't CEO CEOs losing their their bonuses for the year? Or? How much could like that that extra pay raise the board got this year? How many engineers could you have kept on for that? It is unfair. It is an unfair system. And that is the reality of the situation is the people who often grew too much and over hire to make their kingdoms bigger. Like, look at me, I have 400 engineers underneath me because I hired all them. And now with lay off half of them who's like, yeah, whose responsibility is that? It's the person that did that. They didn't plan. Well, they weren't lean. They were just like, let me inflate my status. Are those people getting laid off? Probably not. They're probably not losing bonuses. They're probably not taking a pay cut. So yeah, I mean, it's right to be angry about these things. But I don't know. I don't want to be like, all morose about it and say like, Oh, it is what it is. But part of it. It is what it is. Hopefully, you have a good company that will take care of you. But yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
I don't know. Yeah, I just want to say I appreciate Jem, you saying that. Because, you know, there are two sides, people who are getting laid off, but also people who are still at the company. And there's, at least for me, I was part of a company that had multiple layoffs. Like I think it had three of them. And every time a layoff happened, I had to ask myself, do I want to stay? Or do I want or should I leave? And it's a really scary feeling. But one thing that I had to realize was, you know, like, like, like a company deciding to lay off while it sucks, is something very, like, it's a very mature decision that a company needs to make when they realize hey, we can't we can't support these people. We can't pay them. Do we? Do we just we just sink? Or do we do something about it? And you I would say like if you're at a company and you are having these thoughts, like really ask yourself, what are you getting out of the company not just in terms of salary, but career growth, and try to make a decision from there like, and, you know, I've personally like I think I could have left at any time, but I personally don't necessarily regret staying for as long as I did, even though it was scary every time a layoff happened, but it just just understand, you know, it's capitalism, it's a cycle things happen, but like, you know, make you a company doing layoffs isn't necessarily a bad thing. It's it's like something that naturally can happen.

</p>
<p><strong>Ryan Burgess</strong><br />
So if you all found yourself laid off or for people who have maybe are finding themselves in that situation, what advice would you all give someone in that situation?

</p>
<p><strong>Stacy London</strong><br />
And this advice, I suppose, is not just for layoffs, but has been for at least for me in my career has always been like, the don't burn bridges thing, like keep your networks Good. Keep in touch with people like all of that stuff matters so much. Because it helps open a lot of doors that maybe aren't going to necessarily be open or you know, like this idea of the market being flooded with so many people being laid off. Well, how do you stand out it's usually through maybe your connections and being able to get referrals and all that kind of stuff. So like, I guess just that stuff has always been really important. And even if you're an introvert and you hate that kind of networking, stuff like it still, if you can, you can do that you can be genuine. And you can do that. And is this beneficial?

</p>
<p><strong>Augustus Yuan</strong><br />
I hope everyone is doing this. But you know, they're like, from a financial perspective, I hope everyone has some savings that they're mindful of, in case, the most unfortunate things happen. No, I don't remember what the saying is, you know, maybe have like three months of runway. And this is just like good advice in general, like, whether layoffs are happening or getting fired. But assuming you are in a good position, and you do get laid off, as someone who's never been laid off, but has talked to people, like really just give yourself a little break. And you know, it might be tempting to just jump to try to start, like looking for jobs and stuff. And I hope you're not in a position where you are financially struggling where you kind of have to do that. But assuming you have some leeway, really give yourself a little break and take some time. I honestly think that's like for the best.

</p>
<p><strong>Jem Young</strong><br />
That's good. Good advice. And I also I like your advice to Stacey about networking, don't burn bridges, kind of boils down. Like don't be a jerk. I know that's not helping people currently were laid off. But it's generally good advice, which is tech is really small. People will remember if you're a good person to work with or not, if you were kind if you're empathetic. If you're good at your job, when did you slack off. It's a good time to touch your, your personal network and just like see who's hiring. Because like we said, and we've alluded to all of our companies are still hiring, they're just not hiring as much. And it's not like the gangbusters times of like 2019. But yeah, get on LinkedIn, polish up your resume. Don't be afraid to look at startups, because they're still hiring, I still get plenty of inbounds to my inbox where companies are still hiring. But I'd also say as I know, someone who was laid off twice this year, try do your best to understand the company in the business and ask these questions before you start a job and like pin yourself to that. Because it is likely we're not done yet. In this time when we're recording this episode, this could go on to 2023. It may rippled down into more than medium sized companies as well. So like try to try to understand these things before you you sign another offer. Yeah, other than that, yeah, but I like yours, I guess. Keep your chin up. Like it sucks. But like Stacy story says, you know, it actually worked out in the best it sucks in the short term, but in the long run, they pushed her for what I don't want to speak for you, Stacey. But it sounds like it puts you outside of your comfort zone a little bit forced you to try something new, which was good. And you wouldn't have maybe if you stayed at that company. So I guess try to keep trying to be optimistic about that

</p>
<p><strong>Stacy London</strong><br />
person.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, yeah, I think all of you shared really good advice. And I think like to Stacy's point, too, it's like a lot of it is just like, advice we would give for if you're applying for jobs is just like thinking about all those things. And building that network. I love that. Another thing that I'll echo that we talked about earlier, too, is talk with someone like it, maybe it is a manager or mentor things like that, too, is like this is not easy to go through for anyone. And so I think like just kind of talking through those things can go a long way too. All right. Well, on that note, let's jump into Hicks. In each episode, the front end happier podcast, we like to choose picks that we found interesting and want to share with all of you, Augustus you want to kick it off?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh me? Sure. Yeah, I have two picks. My first pick is evolve. Evolve is a game that's kind of like us, like a team of survivors versus a monster. And this game has had a quite an interesting history. But the TLDR of it is a died for a bit and a company was slowly like considering turning it off. But then slowly like this, like community developed. And they somehow like were able to motivate the company to keep keep it going. And they they've started started it again and they gave out a bunch of keys. And yeah, I wanted to give a shout out to the game and also none of my friends. Well, I guess I didn't ask Jem Ryan or stay seated. If y'all want to play like you want to let me know but I have some extra keys that I'm willing to give away. I think I have three or four. So if you tweet front end happy hour. Upon a funny pie. You can get a t shirt why I love it now. Yeah. Yeah. And then the second pick I have is a Chrome extension called moderator toolbox for Reddit. I've started getting into moderating subreddits. I've recently became a moderator for the Rocket League subreddit. Cool, honored, very honored to the moderator there. And this is an incredible Chrome extension if you moderate sub Reddits definitely, you've probably heard of it, but I just think it's just really well done. So if you've ordered sub Reddits please check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Stacey, what do you have for us?

</p>
<p><strong>Stacy London</strong><br />
Got two picks? I'm gonna do a non music pick for the first time maybe ever? I don't know. First one is it's a website called layoffs dot FYI. And I figured maybe do something topical for this show. It's a good site to just find out what companies have been doing layoffs recently and how many people have been laid off and there's some charts and stuff in there that might be helpful when you're if you're looking for something new to see trends and where you might want to apply. The second pick is a song called to feel again by John Hopkins Kelly Lee Owens, salt and Shepard and Jarrow. That's a big collaboration. Kelly said of it, quote, the energy this track encapsulate the most blissful summer for me being reunited with live music, old friends and new John and I tried to capture the joy of that and Sonic form and expansive cosmic blissful euphoria. I listened to this recently, and I was driving back down the coast after going to check out some redwoods and it was just very happy, happiness inducing. So check that

</p>
<p><strong>Ryan Burgess</strong><br />
up. Awesome. Jem, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
I have two picks today. The first one is a show on Amazon Prime. I know I pick an Amazon Prime video. But sometimes they have good content, though their UX is just terrible. And I'll keep saying that until they fix it i i have so many issues with it. The first show is called or the show is called Jungle on on Netflix and I started watching it or on Amazon sorry for it's a habit. And I was stunned by the trailer for it, which I really big in the trailers like a good trailer will will sell me on it on a show. And as I'm watching this story unfold, it's just like it got better and better. And towards the end, I was like this a fantastic show. So the show is called Junk jungle. It takes place in London in the future and kind of the hood, which it sells a story of, well, I don't want to dwell too much. But the first story, there's two stories here, it tells a story of kind of a young black man like trying to make it his girlfriend's pregnant. He doesn't want to get into trouble. But he's friends with a guy who like, ropes him into some pretty serious crime. And he's like, What are we doing here? This isn't like what I plan to be. And I'm saying that and it's like, okay, that's a story we've all heard before we've seen The Wire, we've seen like soars like that. Like that's nothing original. However, what makes jungle different is one, like I said, it's at play. It said it takes place in future London, which has no bearing on the story whatsoever other than like, it's just the the place. And by doing that they kind of take you out a traditional mentality where like, Oh, I've seen the ghetto. I've seen crackheads. I've seen poverty. I know I've seen the story, bla bla bla bla bla, we've seen this before, but you put it in the future and it it looks different, like an example of this difference is everybody drives classic cars. So they drive like vintage Aston Martin's and vintage Mercedes and vintage BMW, and they're all like polished stuff. They look fantastic, like museum quality. And the show doesn't ever explain that I just like, man, he's riding around and I like a 1952 Jaguar and it looks amazing. And just like everybody does that. So they take kind of that aspect of, of the story out of the equation where people drive crappy cars, stuff like that. And you're like, Okay, this is a different show. Another one is like they really play with lighting a lot. It has the best lighting I've ever seen in a television show like and they really, really play with it a lot to the factor like it tells its own story that I like I really am impressed by the show. The third one is all of the important dialogue between characters and multiple characters is done in rap form. Similar to Hamilton, except it's trap and drill style, which if you're not familiar with UK, that's a very British style of rap. I will say it's difficult to understand them. I had to turn on the subtitles many times because like UK slang is completed from American slang and they're already in there rapping it but like I just love this. They're wrapping out their internal conflicts. They're wrapping out there. They're like struggles are wrapping out like I don't know, it's worth seeing for that and it threw me because I didn't expect it. The first time I happened I was like What's going on here, there and then let you sort of get a feel for the show. And like what's happening because the show doesn't like spoon feed you any of this stuff, it just drops you in the middle, and it tells a story. And the second, the second act of the show, is probably the best one because it explains the struggle. And it doesn't matter if they're in England, they're in America, wherever, like the struggle of a black person in modern times, trying to get out and why you can't and why it's a trap. And like, why it just pulls you back in no matter what you do. And it's like, this slow moving tragedy, and you see it coming and like, you know, nothing is good is gonna come on this, but you have to watch it towards the end. And like maybe something will different or change in. Well, I won't spoil it. But the show is really powerful. I really enjoyed the show, I highly encourage you to watch it. It's fantastic. On a less serious note, but just as good. I'm back, it's been a while for Valley silicon. That's the part of show where I point out things that are so ridiculous, so expensive, and they only exist because we here in Silicon Valley still get paid too much money. The question I have for you all today on the panel is how much would you pay for a mouse? An average computer mouse?

</p>
<p><strong>Stacy London</strong><br />
I pay $60 for an ergonomic 100 bucks. Yeah. 100 I pay 100.

</p>
<p><strong>Jem Young</strong><br />
Okay, 100 Yeah, that's about right. I think mine costs about 100. And it's, it's awesome at last month's. What I have for you today is from pointer instruments. It's called the classic brown. And I'll just read quickly to the scription. It's a classic tone with a dash of heritage. The points are instrument features full grain leather with minimum treatments, finish with a question and smiled inspired stitching and an uncoated solid brass base. And this will be in the show notes. So definitely check it out, because it's worth seeing it is a mouse, your average computer mouse except it's all in brass on the bottom and the top is leather, and it's brown leather. And this cost $217 For like, you know, a $10 what should be a $10 piece of equipment. I don't know what else to say about it. It's a $200 mouse, it's not going to make you more performant it's not going to make you click faster. It's not going to help you win games. It just exists because people out there have too much money and they want to spend it on having a nice looking mass. What is the question? Frustrating inspired stitching?

</p>
<p><strong>Stacy London</strong><br />
Is that with horsehair?

</p>
<p><strong>Jem Young</strong><br />
I don't know. I'm too poor. I'm too poor and uncultured to know what a question inspired is.

</p>
<p><strong>Ryan Burgess</strong><br />
I just want to point out this is like the ugliest most I've ever seen.

</p>
<p><strong>Augustus Yuan</strong><br />
But it's hilarious. There's a leather mousepad is that even? It's even nicer.

</p>
<p><strong>Jem Young</strong><br />
All there is oh, I didn't even check it. The mouse pads a 60 color probably

</p>
<p><strong>Augustus Yuan</strong><br />
extra.

</p>
<p><strong>Ryan Burgess</strong><br />
That's extra. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, it's extra. It's not even included. Oh geez.

</p>
<p><strong>Jem Young</strong><br />
This is the kind of things I picture designers having because you're like you're reaching a designer's desk and it's always like curated and like tactically placed books and things like that. I feel like it's something they would go for but your average developer, I don't know my baskets. 30 I do not want leather for a mouse. That's anyways, that's my pick for valid silicone is this $200 leather in case leather and brass in case mouse for by pointer instruments.

</p>
<p><strong>Ryan Burgess</strong><br />
Like how do I follow? I mean, this is really tough. That's awesome. Jem, I have two picks for this episode. One is this time of year is probably one of the best snacks ever that you can only get at this time of the year is the white fudge covered Oreos. They are so delicious. And they're hard to find sometimes too. But currently, I've been lucky to keep finding them, which is probably a bad thing because the calories are not good. But hey, they're very tasty. So that's my one pick. And then my second pick is a Netflix original show called Drink masters. It's been a really just kind of chill cool competition show. It's kind of on brand for us. It's bartenders competing on creating creative cocktails. It's it's really cool to see what they create. And seriously how visually appealing they are like we're not tasting these. We don't know what they taste like. But they look really, really cool. And the courts the judges are they're tasting them. Now I want to figure out how do I pitch Netflix that they should have front end Happy Hour be the next season's judges, because I think that'd be really cool. I don't know how to figure that one out. But I'll work on that. Thank you all for listening to this episode. You can find us on Twitter at front end each age or front end happy hour.com Listen to us on whatever you like to listen to podcasts on. Any last words.

</p>
<p><strong>Stacy London</strong><br />
Hope you all get severance if you do get laid off Cheers

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers ring a ding ding

</p>
`;
        return transcript;
    };