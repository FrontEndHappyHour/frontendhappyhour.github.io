module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. This is actually a special episode, not only is it 100 and 50th episode, which is wild and impressive, but it's also our first time recording since March of 2020. In person like that is wild since COVID hit, we are now finally, all together at around the same table, which is awesome. So that feels good. I'm excited about that. We had to quickly pivot for recording remotely like we'd never done recording remotely until the pandemic. So now it's kind of nice to go back to what we were used to. But we also were able to benefit a bit from having remote guests and do more and more people on the podcast. So that's been good. Today we're talking about reorg. So before we dive into the episode, let's give introductions of today's panelists. Stacy want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a senior front end engineer on Trello. I'm Augustus Yoon. I'm

</p>
<p><strong>Jem Young</strong><br />
a software engineer at Twitch, Jem Young engineering manager at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of Front End Happy Hour podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And what did we decide today's keyword is change change. So if we say the word change, which I mean, we will be saying it so many times

</p>
<p><strong>Stacy London</strong><br />
choosing in person you all we we clicked

</p>
<p><strong>Augustus Yuan</strong><br />
our glasses connected.

</p>
<p><strong>Ryan Burgess</strong><br />
It feels so real. I love it. All right, well, let's dive in Augustus do you pick this great topic, which is awesome. I'm sure we've all gotten through these reorg or changes in general chairs. What are your thoughts on reorg? It's like what comes to mind when you think of reorg?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, reorg There are definitely things that come to mind are like ownership changes, or manager change is basically and I feel like there are different types. We're gonna have fun, so bad. It's a big thing. And it's something that definitely has cascading effects. And I personally when I first went into my career, and it happened, I wasn't really sure like, Oh, I think it's just like, oh, this is just natural things. But there were things that I wish I was aware of when like it happened like things questions, I should be asking, like my manager about it. That like when I look back, so that's why I kind of wanted to talk about

</p>
<p><strong>Ryan Burgess</strong><br />
it. Yeah, I think it is one of the things that it happens. And you're like, What am I supposed to do with that, but there are things that can help you prepare for it, or maybe give input on it. So that is a valid point.

</p>
<p><strong>Augustus Yuan</strong><br />
Has anyone else experienced reorg? Like, what was it like?

</p>
<p><strong>Stacy London</strong><br />
Hmm, I mean, some of the ones I've experienced have been kind of, like, transparent, I guess where it was different levels of like, upper management, sort of shifting responsibilities. And it didn't necessarily change the the stuff that I was doing day to day. I think that can be one example of where like you as an individual contributor, or whatever you want to call it like you don't feel any effect of that change.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers, cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, we were back in person.

</p>
<p><strong>Stacy London</strong><br />
I've experienced both, like where it doesn't really seem to affect me at all, or where it absolutely does and projects get cancelled, or you start, you know, shifting strategic direction to work on something different.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think for me, they're never easy. Like, I don't think there's ever been a time where I'm like, wow, that was smooth. And there's also never a perfect reorg like, and I think that if you think you're gonna come up with the perfect solution, you're probably running a fool's errand because there's never perfect, right? Like, even the way a team structured or a whole organization. It's never perfect. There's always something that you're like, yeah, that maybe that will last for a while and then get adjusted. And I think that's the whole point too, is that you adjust over time you figure out what works, but to me, it's never been an easy thing. And also, change isn't easy. Cheers.

</p>
<p><strong>Stacy London</strong><br />
I think there's a good way or bad way to announce it i this this stuck stuck out in my mind. I went to went through a change where they call the last minute meeting. Oh God, this word is a bad

</p>
<p><strong>Jem Young</strong><br />
word. Just keep talking. Cheers for you.

</p>
<p><strong>Stacy London</strong><br />
They call it like a last minute meeting to say that. And they didn't put anything in the subject. It was an all hands and but no agenda or no details about it. And it freaked people out. Everyone was like, Oh, are you calling for solid to let us go like, What's the emergency? And then they're like, Oh, we're getting a new seat, you know, head of engineering or like, you could have sent that email that didn't make us nervous and stressed out.

</p>
<p><strong>Augustus Yuan</strong><br />
It makes me think about yeah, like I remember at one of my previous companies, you just would get a calendar in By or an email like everyone, please report downstairs at x pm and everyone's like, Oh my gosh, what is going on? And, and literally no one knows. Even the managers, they might just find out the morning of, and it's like, oh, new CEO or new executive leader has come to step in. And yeah, I feel like it creates so much anxiety.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, how productive were you? When you've like, got that email? You're like, Yeah, nobody's working, you may as well have just, like, pulled everyone off about it.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I did not do any work that day. I was just like, oh, my gosh, are they just gonna fire us all? But, you know, think things are? Yeah, I guess I wouldn't get the email, you know. Get out, get. Come downstairs with everyone at x pm, I guess this is fired.

</p>
<p><strong>Ryan Burgess</strong><br />
Shame you in front of the whole

</p>
<p><strong>Jem Young</strong><br />
terrify a lot of our front end, happy hours are breaking in the tech. So we're not quite familiar. Can you all explain what a reorganization means?

</p>
<p><strong>Ryan Burgess</strong><br />
Why don't we kick that off at the start? That would have been smart. We

</p>
<p><strong>Jem Young</strong><br />
were all like very senior. So we're used to these terms, but not everybody is.

</p>
<p><strong>Ryan Burgess</strong><br />
Now I think like for me, a reorg is any changing of interest can be large, like it could be company wide, or it could be multiple team changes. But it's adjusting how a team fits and like, maybe you're absorbing chairs. They don't want to be rude. But maybe your team is absorbing another team or a new project or effort. And you have to shift people around, I think that's the best way to call it as you're shifting people around to fit the business needs or product needs. Whatever that is, it's like that's what you're doing. Maybe it's a complete shift of direction. But it's really a shift of people anyone wanted any outside to that

</p>
<p><strong>Augustus Yuan</strong><br />
no plus one and is there's different, I feel magnitudes of I don't want to say the word of

</p>
<p><strong>Ryan Burgess</strong><br />
effect adjustment, the

</p>
<p><strong>Augustus Yuan</strong><br />
cascading effects that can happen, an Executive leader may leave and everyone that reports to them now needs to shift. And sometimes it's not just as simple as moving the entire tree of people to another executive leader, it might be distributed to multiple leaders, or they rethink that process. And I feel like depend, and actually, as I realized this, I feel managers might get different effects than ICs. Like it might impact ICS less sometimes and impact managers more, and vice versa. But then there are also rewards where ownership when ownership has cascading effects. cascading effects, and that can be very influential, you know, and, and what changes would do to your day to day cheers. Yes,

</p>
<p><strong>Ryan Burgess</strong><br />
I do like what you said to her, can we be asking the question of like, what's the difference from like, an icy, like, individual contributor to like a manager or leader? I think it does have differences. But I mean, it's still things that you're adjusting to. And so, I mean, some of the reasons even for a reorg could be that a manager has too many direct reports, and like that can just automatically set like, Okay, well, we need to maybe hire a new manager, which that's not really a reorg necessarily. Or maybe you have to split up the team into smaller components, or there's a lot of those types of things that can happen that might that might be just a small shuffle of a reorg to

</p>
<p><strong>Jem Young</strong><br />
reorg czar, a natural part of the business cycle, businesses are always growing or shrinking. So you're constantly looking at the people you have kind of the focus you have. And usually reorge happen when there's a change in leadership, because someone's like, hey, you know what, we've been wanting to do this for a while. And this is a good excuse to do it. That's that's what I've seen historically. But they're a natural part of business. That's why it's a really good topic, because you will, at some point in your career or software development career, go through a reorganization and whether or not affects you, you'll be close to it or in the middle of it. And I think your proximity to it changes your perspective on reorganizations.

</p>
<p><strong>Ryan Burgess</strong><br />
And sometimes it's like each Your point is all of you mentioned how it affects you. Sometimes it doesn't affect you at all right? Like, I mean, I I've seen that happen where I get an email, and there's an organization that's done a reshuffle completely. And you're like, okay, cool. That's like, good to know, that's a great update, but doesn't really affect my day to day. I think it's even in a company, you'll see those things change that don't necessarily affect you.

</p>
<p><strong>Stacy London</strong><br />
One example I saw of sort of something that did affect me as a individual contributor was, there was I was working on a product. And so you were really excited about building features for that product and making it better for people that use it. But as the company gets bigger, they start to try and figure out Ways to like, connect the products like multiple products that they have. And so one of the strategic changes was like changing it from like, Oh, you're just focusing on a strategy for the product. Instead, it's more of a strategy of integration and a strategy of how to make the products work better together. So then it really did affect, like, the roadmaps and the things that you were working on. So maybe it wasn't like building every, like, new feature to try and keep up with competition. It was, how do we integrate better with this other product? So there's a suite of products that make the the company more successful as a whole. So that was, I guess, one example of where like, that really did shift, and you started to work more on like, platform things and integration versus like a feature

</p>
<p><strong>Ryan Burgess</strong><br />
finding two, we haven't also mentioned this, but there could also be a product or feature or whatever it is discontinued, right? Like, and that can happen too. Or it's like, yeah, we're shutting down this effort. And a whole, multiple teams, or a whole entire organization, could be shuffling, because they're no longer supporting that thing. And it's like, now we're going to double down in another area, or some people unfortunately, could get let go. And so that can actually be a big negative to, like, we talked about how does this impact you, even if you're not a person getting let go or seen right affecting on that product that got discontinued? It still affects you? Because it's just like, it's sad to see that those are your colleagues that could have been like go or a product that you're like, Oh, I wish that was still going or even though I wasn't working on it, like a lot of the people I work with were and so I think that's another thing that can have just cascading effects for people.

</p>
<p><strong>Stacy London</strong><br />
Yeah, the last one did that with and that was very public with stripe, which was their chat app that they were trying to compete with Slack and other major competitors. And that just didn't work out, you know, and they had to make a really tough call to, to shut it down and try and but they did, they did good things by offering everybody like, you know, there's roles elsewhere and other teams and products. And they did, I think, by many standards, like a good job with that, although I'm sure a lot of people were frustrated and some quit.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. I mean, they might have joined Atlassian to work on that particular product. And they're like, Oh, my God, it's no longer here. And that can be frustrating, too. But I think you're right, if they're able to try and find homes for people, so they're not losing their jobs. That's, that's, that's a huge benefit, I would say or like a good reorg Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Yes, it sounds similar thing happened at Twitch, there is a feature called Twitch music, where it was basically, they wanted to create this America's Got Talent kind of thing for Twitch. I'll just be honest, sometimes it's kind of a meme a little at this point is like, how did we think of that? But, you know, it's like, you're trying new things. And you know, it didn't work. And, and so I actually, I was gonna say, like, I love how, Jem, you mentioned that it's just a natural thing. And, you know, part of innovation, you know, when things don't work, you just have to, you have to cut it in. And we were very fortunate that we didn't have to let go people or at least I don't think we did, we could shuffle them around and stuff. But I personally thought it was like a very, like, healthy sign to see the business and make that kind of tough call like, hey, you know, this isn't panning out, this isn't working out. We're gonna try something else.

</p>
<p><strong>Jem Young</strong><br />
Like what you said there on healthy. I think it is healthy to reevaluate the business every so often your competitors are people change your the talent density in certain areas changes their natural tears, tears, I think the the key difference is, how they're executed. And that makes the big difference in in rewards. I've seen them go poorly, I've seen them go well, to, you know, a year or two out the business is doing much better, and was like, wow, this is a great idea. We should have done this a long time ago. Whereas other cases where there's some layoffs, a lot of bitterness. The company loses direction now, because it's entirely different. And no one knows where where the the footing is with the Northstar. So it really depends. And I don't I don't know, I think the most frustrating thing about reorg is, as an IC was kind of, you don't have a lot of power there. Because the decisions already been made by the time you hear about it. You can complain all you want, but you're not going to change it. So you kind of just have to go along with the ride and hope leadership or whoever's leading that reorganization has the right idea. Yeah. You

</p>
<p><strong>Stacy London</strong><br />
can like destroy culture, right? If you absolutely have a particular culture and like they do it poorly. Can like even if people want to stay, they can be like, Well, that was executed poorly. I think it would treat me the same way if they ever have to do it again, like, Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think too. It's like even to Jem's point is like there's ones that like play out negatively. And ones that play out positively. I think the thing is to it. It's an investment you actually don't know right away, right? Like it's like Going back to our nice keyword of changes, like people don't like change, right? So cheers. You know, it's always difficult to deal with that. And that can always just cause a little disruption, no matter good or bad, it's going to do that. And you're, you're kind of waiting for it to play out. And it could play out negatively, or hopefully it's like, plays out in the positives. But that takes time to see that investment play out. It doesn't all of a sudden be like, Wow, we should have done this a long time ago. It's like that takes time to figure that out. And so I think that's like tough too, because it's, it's not going to just be sunshine and rainbows after you pull the trigger. It's like, no, now we actually have to, like sort this out and figure out how this rolls out. And, you know, how do we be most effective? And that takes time?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, definitely, like, as an Icee, I totally feel the sentiment of sometimes it feels like I'm just riding the wave, there's not much I can do that. The die has been cast, you know, but I've, I feel if you ever experienced a reorg This is where talking to your manager, and asking questions, really get the context of what they know why it's going on, that like really helps. Like, I don't know, at least for me for the anxiety sometimes like, and, you know, the takeaway shouldn't be that reorders are negative, you know, they can be like, most of the time, they're very positive, and they're very needed and healthy. But it's good to build that context of why they're doing it. That that really helps. It helped me, you know, because I get anxious about that stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's not just you like feeling that I think it's also in order for a good rollout of a reorg. It comes down to leadership is usually the one someone's making that decision. It has to be clear, it has to be like clear, concise, it's all about that communication, of like, what when are you telling people maybe not pulling them all into like a last, you know, like the Stacy's example of like, throwing something on the calendar and like freaking everyone out, probably not the best thing. And it's not easy on the leadership side either is like, how do you cascade this information, and make sure that it's clear and people understand it. They're all getting it all at once. Like you do want to control the fact that you don't want like it seated, and some people know about it, and others don't, because then it's like, that gets leaked pretty quickly. And then it's confusing, and people are frustrated that way. And so that's not easy either. But like, I do think there's really great ways to communicate it and really poorly ways like I've seen some bad examples of like, just it poorly communicated or things aren't clear. And there's a lot of questions from people because it's it wasn't clear. And that's a huge distraction, then you're like, not really bought into like, why are we doing this? And if that's not clear, then that's a problem, too. Even if you don't agree with it, hopefully, it was clear the motivations behind it,

</p>
<p><strong>Stacy London</strong><br />
what kind of things you said, like questions that you would ask your manager, did you have like some things that you've thought about?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, as I look back, I wish I asked. And I think actually what Ryan was mentioning, you know, I do feel that leadership, it would, ideally, they would be very upfront and clear about their reasons why they're doing it. You know, if you have questions of why the reorg is happening, I think that's a sign of very bad communication,

</p>
<p><strong>Ryan Burgess</strong><br />
you know, don't go You should still ask, if it's not clear, ask the question. Don't go yelling at

</p>
<p><strong>Augustus Yuan</strong><br />
them, like, hey, why don't you clear or something? But, you know, I, yeah, if you are an Executive leader, please be very clear about the reorg. But definitely talking to my managers, really asking them, what they foresee the impact is because I feel a manager definitely can can foresee the impact. Sometimes they have more context of the why maybe they won't say everything, and then announcement email or meeting and, and the manager has just a very much better sense of what the effect can be for the team, you know, maybe down maybe something that doesn't happen now. But a year or two later, it could like affect headcount, or it could affect projects that come down. And, and, you know, even though it's kind of small things can have big ramifications, right? Like, maybe less projects come to the team. And then you know, if your promotion opportunities, promotion process involves being able to get good projects that that's, that could be a thing, that could be a thing that ends up affecting you. And you don't realize it until a year or two later, where you're like, oh, roadmap meeting, and you realize, okay, so now this team is now owning this product. So we have this much. We only have these things, and they're not significant enough. That's a great, great question. Yeah. So definitely, definitely talk to your manager is my recommendation and ask him,

</p>
<p><strong>Ryan Burgess</strong><br />
I like what you said to Augustus sadhana, like, the manager may have more context or understanding. I think that they should also be connecting the dots for you and where does this affect our team, right? Maybe it's a big big change. That's like A lot of teams affected that. Yeah. Cheers. I'm hoping that the manager is able to articulate how does this affect us? And like, what does this mean for our team in the future? And so I liked that you're asking those questions, too, because they'll put the spin on it as like, how does this affect our team? I think that's a good way to look at it.

</p>
<p><strong>Stacy London</strong><br />
Even like asking, like, how do you feel about this? Like, just ask your manager like, how do you feel? Yeah. And I mean, maybe they will tell you the truth or not, but like, at least you get less sense from them, if they feel good about it. And that can help your confidence about

</p>
<p><strong>Ryan Burgess</strong><br />
what happens if they're freaked out about oh, that's

</p>
<p><strong>Stacy London</strong><br />
awkward moment.

</p>
<p><strong>Ryan Burgess</strong><br />
Like, give you much confidence know,

</p>
<p><strong>Stacy London</strong><br />
if they say something like run,

</p>
<p><strong>Ryan Burgess</strong><br />
just quietly run, you know,

</p>
<p><strong>Jem Young</strong><br />
catch them printing out their resume?

</p>
<p><strong>Ryan Burgess</strong><br />
Probably about a good sign. Yeah. When their LinkedIn gets updated? Yeah.

</p>
<p><strong>Stacy London</strong><br />
LinkedIn server this time?

</p>
<p><strong>Augustus Yuan</strong><br />
Sorry, we're have to postpone this one. I want a minute interview.

</p>
<p><strong>Ryan Burgess</strong><br />
Check their calendar. It's like, why is this interview on your calendar? I think another good one that Gus is asking your manager these questions. I think it was a great perspective. I think another one is, what are your expectations? Like? Have you the individual like asking your manager? How has this changed from expectations of me? Like how can I help? Maybe Justin and shift to like where we need to be? And then like, how does it affect that future? Like you said, like you said, about promotions, I haven't even really thought of that. It's like, maybe you're observing another team. And like, this may mean more for you, which is a good thing in the sense that maybe it's like more impact that you can have, maybe you're leading efforts or taking on a new project, like I love that, too, is like it could mean that you're growing as as an engineer,

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, oh, my gosh, that's such a good point. Like sometimes reorg, there's a lot of opportunity that comes with it, like you might lose some ownership of something, but then you gain some ownership. And, you know, maybe at first you're like, not very excited, maybe it's like, some very old project that hasn't gotten a lot of love. And that that actually is generally sometimes the those are the important projects that really get you promoted, you know, like, there's this old project that no one's really maintaining, everyone wants to stay away from it. And you can kind of come in there swoop in and really say, Hey, these are the improvements we need to make. And that that's like real change. That's really big. Change.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers, man, we picked a good one. We have to celebrate it's 150. To celebrate person, this is great. You know, we talked a lot about what's good about a reorg? Or why, what are some of the negative experiences you've had, I personally have had some negative experiences. I think Jem, you mentioned they're not a bad thing, or they they're natural that need to happen. But I've definitely experienced some bad ones. And I'm curious if all of you have had some situations that you have not enjoyed. And what made it bad. One of

</p>
<p><strong>Stacy London</strong><br />
the remarks they it was more because of an acquisition. But the managers manager changed. And this person loved to be very micromanage it and not in the same state. So like, all of us were in one office, but this person was in a different place. And just like on the phone, like trying to call me at like 5pm like emergency, you need to like do this thing right now. And I was like, I'm going home. What are you talking? It was just very like, I don't know, it wasn't it. It was a weird relationship. And it didn't seem very collaborative. It was more like commanding. And it wasn't the spirit of the company that I had joined. Like, the culture was so different. And it really kind of like started to mess with the culture and like, make everybody kind of a little unhappy. And so that went that didn't go well.

</p>
<p><strong>Augustus Yuan</strong><br />
I have one that, hilariously, I feel benefited me. But in hindsight, I can see organizationally why it didn't really pan out and wasn't good. It was when I when I was on Brian's team on marketing website. Like a few years later, after you left, they considered doing a reorg where they merge marketing website with the web client of Evernote. So all the web, all the web folks are together and they can contribute. And so I think in retrospective view sounds like a really great idea. But at the time, you know, Evernote was a Java shop, everything was Google Web Toolkit, our favorite framework to beauty from talking to a front end engineer, just talk about gwit and they'll be your best friend.

</p>
<p><strong>Ryan Burgess</strong><br />
Why why do you react when you can do good Java.

</p>
<p><strong>Augustus Yuan</strong><br />
That's right, it sounded like a good idea. But I would say it was hard to really find the time because there's so many projects on both work streams, and just like not having the time for the teams to really take the time to learn each other's code bases. So we just never really had the time set out to set that set that change up for success. Cheers, cheers, cheers, cheers. It benefited me, because, you know, I work, I kind of went out of my way to learn how the web application worked. And, and that was able, I could dip my toes in both code bases. But eventually, I think that reorg kind of like backpedaled a bit. Because they weren't really seeing the what they wanted to see, you know,

</p>
<p><strong>Ryan Burgess</strong><br />
which it can happen. Yeah. And I actually think if they backpedal out of it, sometimes that's okay, too. Frustrating. Absolutely. But like, recognizing that we tried something and it didn't work. I mean, that at least they're recognizing that instead of just keep plowing through it, exactly. I think in that scenario, too, is like if the code bases are so different, it's like, yeah, then you're basically on two completely different, like, you'd be like, writing Android and writing iOS feels not different, that you're not getting the shared value of the components or things like that, too. So I could see that. Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, definitely. Like, even from, like a developer experience, it was, it's like very jarring to switch development environments, you know, you're working in Java. And then all of a sudden, oh, gotta go to PHP, sass.

</p>
<p><strong>Jem Young</strong><br />
Scene reorg. Eggs go poorly, largely due to communication, which is like, it doesn't make sense. But it that seems to be the root cause of like, a lot of the failures I've seen. A lot of it stems from a lack of empathy for the ICS. Because reorge are never triggered by manager, like, so people at Riot level, like we're never going to do like we should reorg our organization change our name and shift teams, that'll never happen. It's always maybe directors, but usually VPS, or even sea levels. And that gap, however many layers are between that person and the individual contributor, it makes reorge harder if that executive or whoever did it isn't like, Hey, I have this context, I see the business and I see that what's going to happen, I'm doing forecasting for 510 years out, and we need to do this thing. But their failure to communicate that to people or like, oh, they don't need to know, they just need to do it is where I've seen reorg go really wrong. And I think under estimating individual contributors. And the fact that like they are the blood of the company, is where reorg tend to go wrong. Where they go well, is when someone's like, Hey, we're doing this thing. I know, it sucks. And I know, we probably just did a reorg last year, but here's the outcome we're looking for. And here's why we're doing it. And yeah, you may not agree, but at least you understand their motivation. And you can like, you can disagree and commit, or you can leave and say like, you know, I understand it. And this isn't really, really where I want to be. But that ambiguity is where like a lot of the failures come from, and it's just it's so simple. But like, we've been making the same mistakes for you know, 50 probably as long as corporations have been around. We keep doing this

</p>
<p><strong>Ryan Burgess</strong><br />
not just even engineering software. It's like yes, as corporations been around. Like even

</p>
<p><strong>Stacy London</strong><br />
tooling changes that was like the speaking to your point about taking into account like the individual contributors how they feel about stuff like when one of these reorders, which was basically just an acquisition, but it's kind of similar thing. We were told to, we had to stop, you know, maybe using Git and we needed to use Perforce. We had to, at the time, we were using like all the on prem Atlassian stuff. So we're tracking stuff in JIRA, and it was hooked into BitBucket. And it was all like nicely integrated in like, as complicated as sometimes JIRA is like at least we all like we were on to it, it was fine. The, they're like you need to stop using that and track all your bugs and Salesforce. And we're like Salesforce, that's not a tool for tracking bugs. Like what are you talking about? It was like, all these all these sort of did not suggestions, but like, this is what we're doing. And it was it just felt you're like, didn't you acquire US? Because like, we had been successful at a thing and like, Why were we successful? It's like, oh, we had like tooling that was efficient and helped us build stuff in an efficient way. And so like, that can pull up right like if you if it's not a good change?

</p>
<p><strong>Ryan Burgess</strong><br />
No, I think it gets to Jem's point of just empathy of like, curiosity even I think maybe that's even a better way of looking at it is like understanding like, what's working and what's not. And maybe seeing inefficiencies where like, maybe you have like, multiple different things like some some of the teams are using Perforce and some are using Git and some are some are using Bitbucket and some are using GitHub and like Maybe there is value in consolidating that, but like, if they're not really understanding, like what the value is and trying to dig at that first to try and make informed decisions, then it is really culture breaking. Right? Like, and it's like inefficient to do. Yeah, that's rough. Like that is really tough.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I can't relate more. Yeah, like Twitch, and I actually, I would say a lot of it was for the better. But when Twitch was acquired by Amazon, um, you know, like, Amazon has figured out stuff like, far beyond that, but Twitch might need to handle so migrating to some of the tooling they have. However, you know, they're like, the migration process and moving over is very, very unproductive, like, managing to VPN is like, oh, here, I need to go to this Twitch tooling, oh, Twitch VPN. Oh, I need to switch to Amazon tooling, oh, Amazon VPN? Oh, god, it's just, it's very unproductive. Thankfully, we're in a better place now.

</p>
<p><strong>Ryan Burgess</strong><br />
And even to Jem's point, I like that you mentioned like, it's not necessarily it, that's almost never a manager making these decisions. Like, it's usually a higher up person that's dealing with that or making that change. When things go really poorly, guess who gets hammered with like, all the questions and everything. And in dealing with that, and trying to almost address and maybe not may not even fix the problems, but just address some of those concerns. It's the manager who may not even have the full picture either. If the communication hasn't gone? Well, it's like maybe the manager doesn't even know all that stuff. And that can be tough to is like you get put into like this really crappy spot to deal with that. So valid point on that where it can go really wrong. I think I can think of two examples where I think as an IC, or I was in a company where unfortunately, it was like a downsizing situation. My team went, I think it was like, divided in half. Like it was like it was drastic, I was fortunate enough to be able to like was one of the ones that stayed. But that didn't make it any better. It was like kind of similar to your point, Stacey, it was we're shifting to another team. But to your point of like getting pulled into a meeting, that's how we were told it was like this immediate meeting, like in five minutes. And it was like, Okay, this is not good. And you look around the room and you're like, oh, half my team's not here and like, Oh, now we're being absorbed like it was it just wasn't a great feeling at all, it was actually communicated well, why we were doing it. And it actually made sense. It just didn't feel right, just to see your colleagues gone. On another point where I was involved in a lot of discussions as a leader doing a reorg. It was painful, like I'll look back on this is like it took so long, it was taking months of conversations. And I reflect on this where I'm like a reorg should never take that long. Like it should not take months of conversations. Like I think that in itself is probably an indication that it's like something's wrong. Yeah, there's things that need to be figured out in a dress, but like you kind of need to act fairly quickly. You don't want to draw it out in this long process. Because I don't think that's the right thing, either. And, like I said, No reorg is ever perfect. And so you're never going to make it perfect. So don't spend time and time on it like for it's months long process. It's not worth it. And I think that that was I reflected on that one like, yeah, that was probably like really unhealthy. And someone's not making a decision. And that's a problem in itself. All in all, I don't think there's a perfect way to do it. But we've definitely addressed some of the things were like communication is key. And like, you know, making sure that people you're thinking about people like empathy and understanding of that, that can go a long way.

</p>
<p><strong>Jem Young</strong><br />
Yeah. All add on, on the communication that sharing the vision is important too. Because, Ryan, like you're saying, a lot of time managers have no idea. Like we don't know any more than anything else, or we disagree. And we've disagreed like privately amongst other leaders. And we're, we start to move forward at a certain point. And but we still have to sell that. It's important to have that vision and understand it. So at least it's like, yeah, this is changing. But here's, here's the big picture. Here's what you can sell people on. That I think in my now coming up on one year of manager experience and all these learnings, that's probably the bigger takeaway is like managers often don't know. And we have to fill in the gaps as best we can. And again, it just falls the communication you have to over over communicate, and then you have to sell it to you can't just say this a reorg because I went to Harvard and I'm smart, and they just hired me or they're paying me $10 billion and run this company. This is what we're going to do and just do it like you have to go you have to execute on and communicate well and then go down and sell it after that. And it's a lot of work and most people don't put in that level. But the ones that have gone well are those people that like they got it they have town halls, they have q&a docks, they go and meet the teams and hear their concerns, and they sell people on it. And that's like the hard part of long, the long tail of execution of reorganizations.

</p>
<p><strong>Ryan Burgess</strong><br />
I think a manager's role in that, too, is to your point is like, you might be brought in a bit earlier than, like, ICS at that point. And you're right, you're fighting for the concerns of like, that you would have that should like affect your team. And so hopefully, you're, you know, voicing that concern and giving that feedback. I think another important factor is is like, I think, Jem, you mentioned disagree and commit at another point in the episode is that there are points where, if the decision has been made, and like you, they've heard you, they've you've given feedback, even if it wasn't taken, it's like, great. There's also a point where I think you need to try and help almost get on board to make it successful. It's like, and I'm not saying you have to, like, go overboard and sell it, oh, this is the best thing in the world. It's like, no, be honest. But like, also, don't be combative, either. Because that's not going to help your team either. And I think it's a weird situation. But I do think it's like your job as a leader to also okay, like, this is the direction, how do I help shape this for my team? Or how do I help shape this for like, their make it the best that it can be? Even if I'm a little skeptical of it, it's like, great, I, I'm gonna be on board and figure out how to work that. And I think that that's a tough situation, too. And a lot of these rewards,

</p>
<p><strong>Stacy London</strong><br />
I think with the communication, it's really important to use plain words. And yes, English and that corporate speak, if you like, sell it as like, We're just driving some synergies to

</p>
<p><strong>Ryan Burgess</strong><br />
you, you're gonna say synergy.

</p>
<p><strong>Stacy London</strong><br />
Like look in the audience and sort of blank stares back at you like, what does that even mean? Like, use real? Real examples of like, why it's gonna benefit customers? Or why it's gonna benefit people that you're buying, you know, the thing that you're making, like us, just stop with the corporate speak and just use real words.

</p>
<p><strong>Ryan Burgess</strong><br />
And also be honest on what you don't know. Like, because there's also unknowns, right? Like, you're like, yeah, it's not perfect synergy. I'm gonna tell you, you know, this is still unknown here. We think it's going to work. And here's how we're hoping it plays out. But it's still unknown. And like this is we're trying to work through those details. That is actually good. Communication is like, here's what we don't know. We're calling this out. We're debt. We're figuring it out. But yeah, we don't know all the details. I'm actually better with that answer than like not telling anything, like, better to call it out as like, yeah, we're still working out on that. Good, at least you're aware of that.

</p>
<p><strong>Augustus Yuan</strong><br />
I love. I'm so glad we can hear like, you're both of yours perspective from a manager because I think a lot of people do forget that. Like, I've been really lucky when reorders have happened. My managers are so transparent, and they don't use the corporate speak, they'll literally just tell me, I'll just be straight up honest. I learned about this this morning. So five hours before you Yeah, and I don't know the ramifications yet. But I'm gonna get back to you on what I feel how it's going to impact the team. And that is like, you know, we don't get a lot from that. But that just sounds so much better and makes me less anxious. Like, okay, hey, you know, we don't know why, but we're gonna get through it. And we're in it together. And we're in it together. Yeah.

</p>
<p><strong>Jem Young</strong><br />
I'll say you will be surprised how often things happen that your manager just disagrees with. And you'll never know, you won't know how much they argued against this certain thing. But I think a good manager obfuscates that from you. It's like, hey, yeah, you know, there's some changes and but here's what's going to happen. But again, that's so hard that all these things I'm learning as a manager is like, it's so hard to do to like, personally disagree with something, but to you need to execute, because it's a business and we're all here to do a job. And it doesn't help your team. If you're like, Yeah, this sucks. Blah, blah, blah. Like that doesn't help anybody. It might make you feel better. Yeah, I could. We could do a whole episode on things I've learned and

</p>
<p><strong>Ryan Burgess</strong><br />
I just take it out and talk on a podcast. All right. On that note, I think it's a great time to jump into pics. At the end of each episode, we'd love to share things that we've found interesting and want to share with all of you. Let's go around the table at physical real world table and share pics for today's episode. Jemmy want to start it off?

</p>
<p><strong>Jem Young</strong><br />
Yeah, I have two picks. The first one is a show. It is currently streaming on Netflix in the US are it's not a show. It's a movie. It's called sorry to bother you. It's about a telemarketer. And the adventures that they they go on. I won't get into it and I won't spoil it but it's it's kind of a surrealist comedy. That really takes it to the next level. The third act gets a little off the rails but just just watch it. I promise you won't be disappointed. It is. It's really good. The second one is a show it is not on Netflix. It is on Apple TV. It is called severance Yeah, it on many levels. It's such a good show. Probably the best show I've seen in in 2022 Put the best show I've seen in a long time. Wow. It really challenges that whole work life balance perspective, and it puts it in a whole nother twist. And it really makes you think like, who is my work persona? Who's my own persona? Are they different people? I won't spoil anything, but it is just so fantastic. You watch it all the way up to the end, and you're just like, it's such a fresh take to that. Like, it's really nice to not see something rehashed just like a totally fresh idea. And they really, really take it to the end. Stacy, do you have any thoughts on this?

</p>
<p><strong>Stacy London</strong><br />
I love it. It was so good. I've heard some people say like, oh, they watched a few episodes. They couldn't get into it. I was like, their character building character. But like, I got into it immediately. So I didn't I didn't relate to that statement, but is worth it.

</p>
<p><strong>Jem Young</strong><br />
It's it's worth a watch. And this affects nothing. But it's directed by Ben Stiller. Yeah, I did see that actually. Yeah. And it just solid direction. Solid writing solid storyline, solid cinematography. Yeah. All right. You all know me, I'm pretty critical of shows. And this, this one is solid.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. I guess this? Where do you have?

</p>
<p><strong>Augustus Yuan</strong><br />
Ooh, yes. So what I have both are on GitHub. So my first pick is a package called endgame. Twitch got hacked, I'll just I'll just be honest, you know, everybody knows. So it's not even a secret. So. And there's this really cool package called end game, and it's an AWS pen testing tool. So you can run it on your service. And it will literally try every single vulnerability, it kind of knows on common AWS services, and it can it will tell you like, hey, you need to do this, you should fix this, blah, blah, blah. And I thought it's just like a really useful tool. So worth checking out. So don't get hacked. Is, is uh, yeah, but, and then my second pick is another thing. It's called architecture decision record, it's not package, it's actually more of kind of a philosophy of how you should go about making large architecture changes are even small ones. And what it is, is it's kind of a template, it's all in Markdown. And when you make a fairly significant change to your codebase, let's say you need to handle some new product requirements, or you need to handle some new level of, I don't know, you need to agree,

</p>
<p><strong>Ryan Burgess</strong><br />
you reorg and you need,

</p>
<p><strong>Augustus Yuan</strong><br />
you need to, you need to do something and involves changing the architecture, you write a quick document, and it's just this template that uses and you just committed to your repository. And that way, there's kind of this paper trail of, okay, hey, I've made these changes. Here's why. And just sort of like a very systematic way of kind of creating a change log of why you made this change. And it's like, kind of intuitive, but you wouldn't think oh, I should do that. You know, so

</p>
<p><strong>Ryan Burgess</strong><br />
I like that. Awesome. Stacy, what do you have

</p>
<p><strong>Stacy London</strong><br />
right? To music picks. The first one is beings of light by fort Remo. filled with colorful scents and heavy bass lines. Attack magazine described it as expresses spatial ambiguity is contemplative, reflective and carves a world for the listeners imagination to freely unravel. So check it out, the whole album is really good. And the second pick is war by Brutus. It's a Belgian band. The genre is sort of post hardcore math rock shoegaze, which is an interesting combo. The drummer, Stephanie is also the lead singer, which I find incredibly impressive, because drumming is very difficult in and of itself. And then to sing on top of that I find very impressive. That sounds really great. But the whole album is also very, very, very, very good.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. All right, well, I have two picks going to choose like a Netflix Original that is like more in the trash TV. Like reality. It's been out for a while. But the ultimatum is like, honestly, one of the wildest shows. I mean, the premise of it is these couples that none of them are married. There's I think six couples, and they're all one of them. One of the people in the couple has given an ultimatum that basically they want to get married, and sirloin on this show with this ultimatum. And they're like, they get split up and get paired up with others. And like other couples, it's just bizarre. It's like torture, like I swear it is. It's one of those ones where you just can't look away. Like I feel like I binge this thing too quickly. And I'm not a huge reality TV person. Like there's pieces of it where I'm like, Yeah, I end up watching it, it's fine. But this one, I was just like, it was so unique, and I've never seen something like it. And I highly recommend checking it out. I feel so sorry for everyone who was involved having to go through that I could never do that. But it was interesting. And then my second pick is a smart home thing that I realized I haven't I don't think I've ever picked it but Lutron lights they're honestly the best switches if you want to switch your lights to anything smart Lutron light system is amazing. I have a couple of Lutron products but the light switches are amazing. So I highly recommend that. Thank you all for listening to today's episode. We are super pumped to all be together. Thank you all for joining us and listening to us together again. If you'd like to leave us a review let us know how we're doing on whatever you like to listen to podcasts on. You can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> any last words cheers to

</p>
<p><strong>Stacy London</strong><br />
seeing France in person or 250

</p>
`;
        return transcript;
    };