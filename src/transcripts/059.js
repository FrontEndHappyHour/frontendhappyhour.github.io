module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to new episode of Front End happy hour. In our last episode we talked about user testing and how it is important to understand what makes a good user experience. To follow up from last episode, we'll be talking about AV testing. To help us talk more about AV testing. We're joined by our special guests Lisa Burgess. Lisa, can you give us a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Lisa Burgess</strong><br />
Okay, I'm Lisa Burgess. I lead the programmatic science and analytics team at Netflix. And my favorite Happy Hour beverage. I'm drinking beer right now. It's summer. So I'm gonna go with that.

</p>
<p><strong>Ryan Burgess</strong><br />
Sounds good. And this is actually your second episode. You've joined us a while ago. But welcome back. Alright, let's give introductions to the panelists. Jeremy Warner started

</p>
<p><strong>Jem Young</strong><br />
off Jem Young Senior Software Engineer at Netflix, Augusta soon

</p>
<p><strong>Augustus Yuan</strong><br />
front end engineer at Evernote.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is control control. So if we say the word control, we will all take a drink. Let's start off by defining what a B testing is. And it's not user testing. So that's a good start. But how would you define a B testing? We can't

</p>
<p><strong>Augustus Yuan</strong><br />
we kind of defined it in the last episode really briefly, but oh, God, I guess Yeah, yeah. I have to finish. It's essentially when you want to, like, test something very specific on a page. So you want to test a small thing. So usually, like all A B tests have control? Actually No way. Um, cheers. Cheers. Cheers. Cheers. Yeah, I believe you went into it a little. There's like a distinction between qualitative and quantitative and AV testing is a form of quantitative testing, where you can actually like, test something very specific and measure it.

</p>
<p><strong>Lisa Burgess</strong><br />
So yeah, I think the most important thing about a B testing is that the control and treatment group are randomized.

</p>
<p><strong>Jem Young</strong><br />
Cheers. Getting one of those episodes is

</p>
<p><strong>Ryan Burgess</strong><br />
so randomized between the different variation Exactly. And I mean, I'm going to have to say the keyword but what is control? Cheers. We're gonna have fun

</p>
<p><strong>Jem Young</strong><br />
tonight control is the the default experience,

</p>
<p><strong>Ryan Burgess</strong><br />
sort of like what you have in production, what's running, and then that's what you're you already have an experience that you're wanting to test?

</p>
<p><strong>Jem Young</strong><br />
Yeah. Think of it as a known

</p>
<p><strong>Lisa Burgess</strong><br />
value. It is yeah. And so sometimes it's called the counterfactual. It's like what should have happened, because oftentimes, if you roll out a new change, and you think, Oh, I don't have to AB test this, I'm just gonna see if my signups go up. But in reality, you don't actually know if your signups were going to go up anyway. And so you have your control group as your counterfactual to what should have happened if you hadn't rolled out that change, and you're comparing it against each other,

</p>
<p><strong>Ryan Burgess</strong><br />
and cheers and tears

</p>
<p><strong>Lisa Burgess</strong><br />
should have picked significance

</p>
<p><strong>Ryan Burgess</strong><br />
might better and better recall. But now we also have another word that we can use instead. That's good to

</p>
<p><strong>Jem Young</strong><br />
think of this Lisa's here. Yeah. Because we feel like what's, what's

</p>
<p><strong>Ryan Burgess</strong><br />
this another. Another thing that I always think of is typically refers to an A and B that you're testing. But there's also a form of, or I still consider it a form of AB testing, when it's multi variation, which could be meaning that you have an A, B, C, D, etc, that you're testing. So I think that's important to like, I consider them the same. I know some people refer to an A B test is only a and b. But then there's also the multivariate testing as well,

</p>
<p><strong>Jem Young</strong><br />
I think we should note that when you're a B testing, or ABC, it doesn't matter. Only one thing can change. Otherwise, you're not doing a B tests anymore, you're just doing a separate type of test, you can't have two separate landing pages or something like that. Otherwise, what you're testing different things you're trying to test a specific,

</p>
<p><strong>Ryan Burgess</strong><br />
good, but you don't know like, if so if a is completely different than B, B might perform better, but you may not want know what variations perform better see, might have to isolate those after. So you could say is a better than B? Well, B was better. So B is better. But at that point, you may not know all the variations wouldn't know what exactly is better? Yeah. So it's better to really isolate the variables at that point. I think that's what you're probably getting at.

</p>
<p><strong>Lisa Burgess</strong><br />
Yeah, exactly. Or align with people upfront what they want to learn about the test, because sometimes people will want to learn a specific thing. Does this copy resonate better with this user group versus that user group but then they're changing five different things. So you see that it's different, but you actually don't know if that was because the copy. Sometimes people don't care about that. They're like, we design this whole new user flow, we want to roll it out, we want to see if it is on par with our existing user flow. And we don't care about each individual element. In which case, that's, that's fine. But it is about what people want to learn from it. And what they want to say after the test too, because sometimes that is different.

</p>
<p><strong>Ryan Burgess</strong><br />
So going into the strong hypothesis could really help as that helps. Yeah, that's always a good one to outline. I'm I hate when people are like, Oh, we're just gonna test and see which one's better. But it's like, Yeah, but what do you hypothesize to happen? It's like any test. I mean, we learned this in like science class in high school, you need a hypothesis, like, you can't just go into an experiment and hope like something will happen, you need to really think about that

</p>
<p><strong>Jem Young</strong><br />
upfront, then you we were like, we're probably not hitting it hard enough. You need a hypothesis. Otherwise, you're like you you introduce bias. If you don't have like, upfront, what's your testing what you hope to get out of it? And like, what's your what do you think the results will be? Otherwise? You're just like, well, this could you can like skew the results any way you want, like, Lisa, statistician like you could you know that you can zoom in on any graph and like, tell any story you want. So you have to tell the right story, like ahead of time.

</p>
<p><strong>Lisa Burgess</strong><br />
Yeah, that happens often. And often times going into it and saying what you want to see is hard to do. But it's very important. And I've seen before people say, you know, they start seeing the results of the test, and they go, Oh, well, even if this one's slightly worse, we'll still roll it out. Because there's operational wins on doing that. And that's fine, right? You can, you can still do that. But you should have aligned on that before you write, you should have said we were willing to accept a 5% hit on this test. But that's not usually what happens. What happens is you start to see that the thing that you want it to win is starting to lose. And then you're like, Oh, well, maybe if it's only slightly worse, or it's flat, right? It does no harm, then we'll roll it out. And that's where you can get in a lot of trouble.

</p>
<p><strong>Ryan Burgess</strong><br />
That makes a lot of sense. Yeah. I

</p>
<p><strong>Augustus Yuan</strong><br />
love how you called out like, you know, I feel like it's very easy for people to just chase metrics. And then also like, maybe they really want signups to like do well. And maybe their test does do better in signups. But then some other metrics, like take a hit for that. And that could be really bad.

</p>
<p><strong>Jem Young</strong><br />
That's a good one. I I've been guilty of that. I think Ryan's called me on before it's, we call chasing hunting green. Yeah. Because in our AV testing platform, Ignite, or whatever it's called now, like, tests are either red or green, or neither. And I'm like, Well, what about people in England on Samsung Galaxy, this test is doing great, it's green. But like, if you dig deep enough, you'll always find a wind somewhere, right? Generally, and you can't do that. That's why you need like a solid hypothesis that like,

</p>
<p><strong>Ryan Burgess</strong><br />
unless that was your hypothesis going in, you're like, all I care about is people in England on the galaxy. Hey, and then you actually you hit the green metric there at that point, if that's your hypothesis, but call that up front? Yes. So what are benefits to doing a B testing? Like why, you know, at Evernote, and at Netflix, we do a B testing? Why do we do them? Like what are some benefits for testing features that we're creating? Its objective,

</p>
<p><strong>Lisa Burgess</strong><br />
right? So it removes this, what people will call like the hippo, right, highest paid person's opinion. And so oftentimes, people have beliefs of what should be right. And instead of doing that, you just listen to the data and you do what actually is, right. And so I see that as the main benefit of doing it. And lots of times when you roll it tests like you can be wrong, right? And and so you see that with data and you know what direction to move in. So that's a big benefit.

</p>
<p><strong>Ryan Burgess</strong><br />
I always joke that we hire really talented engineers, designers, product managers, data scientists, we're all working really hard to make the best user experience. But oftentimes, we're wrong. We don't get it right all the time. And that's where that like a B tests will really, really definitively tell us, is this a better user experience? And even between two companies like if Evernote was to do something, say in there, sign up that that may work for Evernote, but it may not work for Netflix. And so we may have to do that test, or we might have to both test very similar tests, and that our users might resonate with that. And Evernote users may not vice versa. So I think it's always important to really test and learn and make a data driven decision.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I guess it's the your gut instinct is like worthless. I mean, it's not worth it. So like it can inform like making

</p>
<p><strong>Ryan Burgess</strong><br />
informed like what you should try or to try and test and see and really see is that the right thing? Yeah, so I don't think it's a bad thing to have got it's

</p>
<p><strong>Jem Young</strong><br />
no no, no, but like, if you're, if you're the head of some fortune 100 company, you're like, Well, my gut really says this is a strong market to do but you don't test any of it. Like that's, that's like not worth anything. Yeah, but you need to have qualitative data. quantitative data to figure out if you're right or not

</p>
<p><strong>Ryan Burgess</strong><br />
qualitative might help inform your abs as well. So you can get some early reads to say, Yeah, I think we've got something here to test. So because we did talk about that, when we were saying about user testing is that it can actually help inform what you may A B tests in the long run. That's good, too. I think like, to me, there's a ton of benefits in AV testing. One of the main reasons I went to Netflix is because they do so much AV testing. And that, to me is so powerful as an engineer, to able to continue iterating on a user experience and really understand like, what resonates with users, but there can be disadvantages. And I'd be I'm interested to know your opinions or thoughts on like, what some disadvantages to AV testing can be, you can get

</p>
<p><strong>Lisa Burgess</strong><br />
stuck in analysis paralysis. So if the results come up flat, let's say and you the data is not going to then make the decision for you. And you've ingrained a culture where you're always using the data to make the decision, then what do you do? Do you retest? Do you roll out what you think is the best, you're still going to be stuck in that place where you have to make a decision based on on nothing. So that's the one part of it. And the other part of it too, is that it is expensive, right? So I work on the marketing side, and every time that you're doing a test, you're you're paying to do that test. And in order to get enough sample size, in order to get a read on something that costs a lot of money, especially if you're doing half of it, where it's a worse variation, right. And you kind of see that, but you're still going to spend that money on that. So it can be expensive is worth it. But costly.

</p>
<p><strong>Ryan Burgess</strong><br />
Think even your point is actual dollars that are being spent on marketing real money. Yeah, but ours is actually on the engineering front to is that's not for free. That's a lot of time and effort going into that building multiple variations of a feature to understand what best works with the users. So that's, that's not cheap. And then also time, you're also having to run that for a while in order to see what works, then clean up the code, remove all the variations that may not have worked. And maybe if there was a clear winner, then actually having to make sure that that that can scale long term. So there's a lot of back and forth. So it's expensive in time as well. So it's not for something you just get for free. I think that that's a good point is it's expensive, we should

</p>
<p><strong>Jem Young</strong><br />
probably clarify some nomenclature for newer people. So what is flat mean? Oh, so

</p>
<p><strong>Lisa Burgess</strong><br />
flat means that there is no difference between your test and control. So no statistical difference yours, yours. And that means that from a statistical standpoint, A and B are essentially the same. So there is no no notable difference between them, there's a 95% chance that they're actually the same.

</p>
<p><strong>Jem Young</strong><br />
So like we asked you, because we're talking about the disadvantages of AV testing. To get to school significance, you need a certain amount of tests to be run, you

</p>
<p><strong>Lisa Burgess</strong><br />
definitely when you're running an A B experiment, depending on how different you think a and b are going to be from one another helps to inform you how much sample size you're going to need in order to detect that effect. If you're looking for something really small, like if you're making an incredibly small change between something and changing the color of a button falls into that category, because it is it is small, and it's going to be a small effect, you need massive sample sizes in order to detect if there's actually a difference between them. And if you don't have enough sample size, what can happen is that there could be a real difference between a and b, but your test wasn't big enough to detect it. So you'll get fake flat results is what I call it. So if you can actually design a test, like let's say you, you were aiming for getting flat results, right? If flat meant that you could roll out this new thing, you could actually construct a test that would almost ensure you would get flat results by having not enough people in the studies, right. So it is one of those ways that people can game the system, if you will, on it. And not that people usually do that intentionally it's usually unintentionally but it's something that you have to think of and why testing can be really expensive too because it's depending on the effect that you're looking for. You can use massive sample sizes that take weeks or you know, however long to run depending on how many people are coming to your website or how many marketing dollars you're willing to spend.

</p>
<p><strong>Ryan Burgess</strong><br />
That's interesting I hadn't really thought of that but that's a very valid point

</p>
<p><strong>Jem Young</strong><br />
it's so I guess bring it back to the world because like this the world we live in a lot of times probably not so much math Lisa's really really smart. But let's say that a coin not flipping it how do I know when I'm like sits like I know this coin is rigged. Like I have a few coins. One of them is rigged to be heads most of the time. What if I flip and it's like heads 10 times in a row. At what point do I know like this the rig coin or I need to keep flipping because like at any point in the timeline, you can look and like get the results that you want.

</p>
<p><strong>Lisa Burgess</strong><br />
Yeah, so people will call that peaking like early peaking at results,

</p>
<p><strong>Ryan Burgess</strong><br />
guilty for this.

</p>
<p><strong>Lisa Burgess</strong><br />
I mean, I do it too, right? I do it too, but preferably, you want to wait until you have enough sample size. So like what you're what you're talking about is like there's this concept of power and having enough power in your test to detect the fact that you're looking for. And you have to wait for your test to hit that right? Or else, the results that you see may not be real, they may not be real at all. And so I don't want to get like too into the weeds at all. But if you're working with a scientist who's helped you construct your test, and they say you need a million people per cell, before you can get a read, you probably need a million people per cell before looking at it. Because if you look at it early, and it looks green, or almost on the verge of green, it can change. It may not be it might not stay that way. It might

</p>
<p><strong>Ryan Burgess</strong><br />
we, we can look at the data, you know, in it a little bit of a dashboard. And yes, I always rely on data scientists on our teams to like help inform, like, is it too early to look, they're like, yeah, it's too early to look like okay, but it's looking positive. And they're like, Yeah, but it's still too early. It's always exciting to watch that happen, because that it may change over time. But it's still it's very, we're guilty of looking at it. That's that's the problem.

</p>
<p><strong>Lisa Burgess</strong><br />
Do you action on it? No, you wait,

</p>
<p><strong>Ryan Burgess</strong><br />
no, you still wait. And but it's I think it's still exciting to see like what's happening over time and monitoring that, like, we'll often go look at a feature and see what's happening. But you still know that in the back of your mind, it's way too early, and you can't make a call. But you might say, hey, it's looking positive and hoping that but at the end of the day, we rely on data scientists to really tell us when the right time it is to call it

</p>
<p><strong>Augustus Yuan</strong><br />
is if you place bets on variants, you'd be like, oh,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, I mean, it's exciting, because like, should it I don't gamble. It's no, but it's good to bet on them. Because like, oftentimes all like have Ooh, there's been times we've done user experiences where I can tell you or I would have confidently said, this is going to be a great user experience. And it fails, like it's completely wrong. Or the vice versa. I've had it where I'm like this, there's no way this is a better user experience. And I'm so wrong. And it's kind of it's awesome to kind of have that hypothesis even going in or having your own opinion on it. It's nice to see what you're right and wrong on. So it's really taught me a lot

</p>
<p><strong>Augustus Yuan</strong><br />
of things. Actually, I had a quick question, because yeah, so we talked about how your A and B are wherever variants, you have need to be distinct enough. But then at the same time, if your variants are two distinct, then you might sacrifice in understanding what is what is actually causing to do better. So what's like a good middle ground? I guess, like what's a good example tests you've seen? Maybe, like, in your career of like, a good envy that were very distinct enough? That? I don't know, like, I guess the button color changing? That makes a lot of sense. Like, that's pretty subtle. And so it would take a lot of like people to hit significantly,

</p>
<p><strong>Lisa Burgess</strong><br />
like so even with even though messaging seems subtle, it actually can have very different.

</p>
<p><strong>Ryan Burgess</strong><br />
We've seen huge effects, right, by uncertain messaging. So I think

</p>
<p><strong>Lisa Burgess</strong><br />
that it depends on your own company's data as well, like what your own baselines look like. And if you've never really done any testing, you actually don't know what the variance is going to look like. So your first couple of tests, you may not know what is small and what is big. Right. But it's, you know, like, historically, what we've seen is that, even if you change a CTA, like a call to action on the button, yeah, that can have a dramatic effect. But changing the color alone, you know, doesn't doesn't really do Oh, I mean, I guess it can

</p>
<p><strong>Ryan Burgess</strong><br />
I can, I was gonna say there definitely could be times where that could make a difference. I mean, you could go really extreme and like a large call to action, it could get larger and brighter. And that could actually do it might not be the best thing.

</p>
<p><strong>Augustus Yuan</strong><br />
The whole page. There's Yeah, just you gotta click here.

</p>
<p><strong>Ryan Burgess</strong><br />
Like there's nothing else. To is like, sometimes you might move metrics in, I think this is an important thing to call out to it's not a disadvantage, but I think it's something to be aware of, is that sometimes you may move metrics one way, like if it was thinking of like someone signing up for your experience, you could also impact someone trying to log in, and that they get confused and end up signing up for a new account. And so you've got more signups when that's not really the goal to like, hurt your current user experience to actually wanting to log in, but you've maybe just made a sign up button and no login. And so they're like I want to get into the product. And so it's like wow, look at the signups we've got so many more signups. It's like yeah, because you don't have a login option. You know, that's a pretty extreme, but those things can happen as well. Another area that I wanted to call out is on the design side of things. I think oftentimes, design sometimes for designers, because they want something to look better in the product. And that doesn't always work, if you do it from a data driven perspective is, yeah, it may look better visually. But it may not necessarily work with your users. And so that can be very discouraging. I don't think it's a, it's not a reason not to ABX test. But it's like, it can be discouraging when you're trying like this new design that looks really great, but doesn't perform well. And to me, you should still be data driven, but it can be discouraging.

</p>
<p><strong>Jem Young</strong><br />
So like, bring this back to I think we've talked a lot of theory, and we're all kind of used to that a little bit, but bring it back to people who aren't as familiar with AV testing. AV testing is really powerful in that. But we also learned that you can be wrong, and you can end up like productizing the wrong thing and just be wrong and be like, Why are our signups down? Or why aren't people buying our product anymore? Just because you were wrong, like months ago, and you don't realize it? So it's it's a, it's a dangerous tool. Sometimes if you don't know what you're doing.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's a very valid point, too, is like even to like what Lisa said, you can read the data wrong or get like a false read. And then that could totally throw things. What do you mean by productizing to Jem

</p>
<p><strong>Jem Young</strong><br />
privatizing would be taking the winning cell and the cells are ABCDE, whatever you're testing, and then making that the default experience for everybody that comes to your site or app or whatever you're testing?

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Is there any time like, we talked about disadvantages, so there's like some things there. But is there a time when you shouldn't be a B testing?

</p>
<p><strong>Augustus Yuan</strong><br />
I was gonna say, like, remember, at SAC GS, we had this talk with Brian, and Ryan was talking about, like, you know, there are lots of things that could change, you know, there's seasonal things. I feel like, if you're a company that doesn't have like, historical data, like to even like, consider, like, past experiences, that might be a time that it's too early to be testing like you, you're like, so new that you don't have anything to kind of base your, like, tests on. That might be completely wrong. I don't know. I don't know did for

</p>
<p><strong>Ryan Burgess</strong><br />
that's a valid point. Yeah.

</p>
<p><strong>Lisa Burgess</strong><br />
Right. Like, if you're gonna be testing something around the Superbowl, you know, things are gonna behave differently than if you're testing, you know, it depends on your business. But that seasonality is a good thing to think of when you're running an AV test.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, we even think about is for seasonality is like the day of the week too, right. So even if you had, depending on the section of application that gets used was like widely used, you might have enough traffic to like actually get a decent read on it in like two days. But that could be like, a weekend. And that's probably not, that's not really hitting your seasonality, you want to at least run it across all days of the week to really get a better understanding. But then also, yeah, if you have Super Bowl on the Sunday, and that, like, you know, increases traffic or something like that, that could actually not really read, right. So you might actually want another set like days of the week as well, I

</p>
<p><strong>Lisa Burgess</strong><br />
think if you're looking for something small, if you think the effect between A and B is going to be small, and that you cannot get enough sample size, the read from your test is going to be useless, it's not going to be trustworthy. So in that event, it's better that you just go with your gut and what you think is better than getting bad data that's going to shake your gut, right. So if you think that a is better, because this color is better, and you can't actually get enough sample size to detect whether there is a difference, just roll out a because if you get test results, that short show that B is sort of leaning better, then you're going to second guess yourself. And it seems counterintuitive, coming from someone who works in data science, but I'd much rather someone just roll something out, especially when it's like detecting something super small, that if you can't run a test that's going to show whether or not it's better, just don't do it, just go with your gut,

</p>
<p><strong>Ryan Burgess</strong><br />
it goes back to the expense part there too of like time and effort that goes into it, it's probably not worth it at that point. And

</p>
<p><strong>Jem Young</strong><br />
not to mention, seasonality is a good point. Like if you're a business that makes most of their money around the holiday season, and you have to radical to radical sells, half those people are gonna be getting a worse experience. And that may not be what you want. Because if you're doing you know 100 million in traffic a day like 50 million of those people are going to get a terrible experience like

</p>
<p><strong>Ryan Burgess</strong><br />
you think of those like major like shopping days of the year of like around like the Christmas holiday for Black Friday. Those are huge in the US and like, like I've seen Walmart even talk about the traffic they get on like Black Friday. That could be you don't really maybe want to run an AV tests on that. You want to have a fairly strong experience and not worry about it and put your best foot forward rather than trying to be like let's test it. Because then yeah, you're right. You're giving some customers are not optimal experience and know that probably not the best time. What kind of tools do you need to run a B tests

</p>
<p><strong>Augustus Yuan</strong><br />
so we actually For one I was on marketing website with, you know, with Lisa and Ryan here at Evernote, we, we actually, Google Analytics at the time offered something and they actually changed it. It's called Google Optimize now, but we used to use this thing called Google experiments. And you can actually, like just I think they have this library called the CX API, which actually does a lot of the heavy lifting for you. So it's just like a very simple API, which uses like Google auth cookies. And you know, you can like define a test in the Google Analytics GUI. You just log in, you create an experiment, URL, put the URLs to your variants, and then the Google experiments library will like do all the heavy lifting of segmenting everyone out and actually randomize? Yep, yep. And actually has like some pretty advanced features like, like, I think it's called multi Armed Bandit, or something of the sort Oh, yeah. And for those of you who aren't aware of what that is, that is basically, Google will have this system where it will like, you put in a metric that you've hooked into Google Analytics. So you can define like certain metrics or dimensions that you like, are wanting to focus on in like winning for the experiment. And if a very if a certain variant is doing well, in that, it will, like start auto segmenting people into the winning variant.

</p>
<p><strong>Lisa Burgess</strong><br />
Yeah, the, the image that is always shown for the multi Armed Bandit is an octopus at the casino. And it's just like, all the arms are pulling the slot machines. And so it's like, Oh, if this slot machine is paying out more like I'm just gonna start pulling more on this one like that is the image that everyone knows for multi armed bandits, the same picture always explained, every presentation I've ever seen has this like octopus

</p>
<p><strong>Jem Young</strong><br />
talking about?

</p>
<p><strong>Ryan Burgess</strong><br />
I think the one thing I actually say if you are wanting to start a be testing that the Google Analytics tooling for the I didn't even know that they changed names on it. That's recent, very recapping. But I always say is like most sites and applications, unless they're doing something different. Most sites and applications use Google Analytics already. So it's a tool that's already built in. One caveat there, that I always I have concerns with Optimizely as another tool, Google Analytics is it's done client side. And so there, there are some concerns there of, you know, redirects that are happening. It's happening on the client. And that can actually impact the user experience on the control, cheers, cheers. Where your Your experience may not, there might not be a redirect happening to the people in the control variance. Cheers, cheers, cheers. It's happening on the other other variations. And so that can actually change the like performance of things a little bit. And so that, to me, is something to be aware of, and worry about as well. But I think it's a good way to start. Like, there's there's also ways that you could try and do some of that on the server versus on the client. But leveraging that API is very, very useful. I always think that's a great start for, you know, doing that. at Netflix, we have an internal team that builds amazing tooling for us, we have a team dedicated to that, which is awesome. Not every company can do that. And so I think there are ways that companies can, you know, leverage Google Analytics Optimizely, there's other tools that are out there, I think that's a great way to start, because you're not going to necessarily go invest. Let's build our entire tooling system around it. I mean, you could even start with like just building it into, like, some components, I can React components or whatever framework you're using, you could do that. But also need to probably figure out how you're measuring it, that's probably the most important thing, making sure that the data is actually being logged, clearly. Probably not up to the engineers on that side, I would definitely rely on data science at that point.

</p>
<p><strong>Jem Young</strong><br />
Yeah, at least what did you say earlier? If you think about doing a B testing? Don't get a data scientist versus, you know,

</p>
<p><strong>Lisa Burgess</strong><br />
yeah, like, how do you measure an A B test? Well, you don't you're your analytics partner, your data science partner? Does? That is the best advice I would say on on any of this. So even if you're going to use some of those tools, you know, have someone internally or or even, you know, like, if you're using something like Optimizely I believe they also have resources that you can, you know, kind of partner with? Yeah, I think like if consult like on that on that. Yeah, like on the science side, you know, so it's always good to kind of beef up on that and, and really know what you're getting because doing it without really doing it is not going to get you very

</p>
<p><strong>Ryan Burgess</strong><br />
far. It goes back to your point that you could actually be getting the wrong measurements and making while you're making informed decisions on data. That's wrong. You're making bad decisions. Yeah, you're making

</p>
<p><strong>Lisa Burgess</strong><br />
wrong data. And that might feel good, but it's not gonna actually drive your business.

</p>
<p><strong>Ryan Burgess</strong><br />
You'd be better to just

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, it actually can be more harmful, because the learnings you take away from that just carry out through for the rest of your experiments.

</p>
<p><strong>Ryan Burgess</strong><br />
How do a B, like doing a B tests affect how you write code? I mean, it could be

</p>
<p><strong>Augustus Yuan</strong><br />
that it could. Yeah. And actually like for us, like very early on, it really was that I think we're still open to like, trying to, like, explore different ideas for that. I'm curious how Netflix was it. I also, like I know, for React, like, there's like this idea of context. And there might be some cool solutions you can do with that. But yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think react or even just a lot of the frameworks lend very nicely to a B testing in the sense that the idea of creating components and that you can add and remove components really easily. I think that really lends well to a B testing Gemini want to talk more about how we do inclusion strategies. And in our code,

</p>
<p><strong>Jem Young</strong><br />
that's pretty detailed a high level, we have a packager called Codex, Codex bundles, all of the packages that you need for a particular user into one JavaScript bundle and sends it on down. That way we're not I mean, we're constantly running all the 1000s of AV tests all the time. So we're not sending all of that code for everybody to the client, they only get exactly what they need,

</p>
<p><strong>Ryan Burgess</strong><br />
right, because if you and I are both in an A B test, we're in the same A B test, but you've got variation C and I've got variation, a, I don't want your code, and you don't want my code, because then that will actually add more weight to each of the pages. And that's not a good user experience. And that can impact the test as well.

</p>
<p><strong>Jem Young</strong><br />
Yeah, if you have a cell that is particularly heavy on the payload, it can definitely skew the test because you're like, oh, this, the cells doing worse. But actually, you increase the payload size by 500 kilobytes, throwing off the time to render, which is throwing off your, like stuff like that you have to take into account. So a b testing is not as it's not as easy as people said, Ryan has been on many rants to me about he's like, I heard his podcast, they're talking about AV testing, and they made it seem so easy. And it's like, really, really hard stuff. And then Lisa can back it up with the math is like really hard to. But you know, we said if you do it, right, you can get some big wins. But from a code perspective, if you're, it makes you write more portable code, and more isolated code, because at any given time, you're gonna have to rip that code back out. And it's hard as an engineer, like building things, like spending a lot of time on a particular cell, only to be like, Oh, that's a loss, delete all that code. But this is something you get used to building things and deleting them. But it does make you write cleaner code. I think

</p>
<p><strong>Ryan Burgess</strong><br />
I actually like the aspect of being able to throw a shit. I mean, it can be it can be like a get your point where it's like, that kind of sucks when you're like, I did all that work, and I'm throwing it away. But I've also been on the reverse, where I know that there's like some bad feature that was built. And you talk to it. And it's like, why do we still have this? Or like, why are we keeping this around? And like our customers don't like this feature. But I've definitely heard this from like higher ups. And they're like, but we spent all this engineering effort on it. And to me, it's like, yeah, but if it's not good to just throw it away, because maintenance costs, we all know that, like code debt is a big thing. And to me, if I can throw something out, that's not valuable. I'm okay with that. I mean, deleting lines of code gem, it feels great. Yeah, but

</p>
<p><strong>Jem Young</strong><br />
it hurts, though, you know, you for that time. Really sweat keyboard,

</p>
<p><strong>Augustus Yuan</strong><br />
that is a good call out there, like a B testing, you have to be okay with like throwing that away, because it is for the test, you know, absolutely. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think also too, I mean, Jem probably is upset when I'm like, Jem, we got to throw that away. But at the same point, I think of it too, is that's also ways that you can think about that in a smart way, is like we talked about cutting some corners, in the sense that we don't want to impact or hurt the user experience. But you may not write the cleanest, most thoughtful code, if there's multiple variations. But when you find that winning one, that's when you take the time to really like re architect the code and think about scale at that point is that we won't just ship it and say, yeah, just shipping it, we found a winner. It's like, we'll take the time to really be thoughtful about the Clean Code aspect of that point. And I think

</p>
<p><strong>Lisa Burgess</strong><br />
it speaks to like, making sure that all teams actually buy into the concept of AV testing, right? Because as an engineer, you're writing all of this code, and to just get some answer from some data science saying, oh, that's no good. And you know, if you don't actually buy into the concept of what it is, what it can do for the business and things like that, you're not going to feel so great. You're not going to feel motivated at work. But at Netflix, we have ingrained this test and learn and test and learn and iterate culture and everybody buys into it. And so that is another important element. So technically, there's a lot of things to consider with a B testing, but there's also a lot of organizational I in stakeholder trust, I guess, that you need to be able to run these correctly and keep everyone, you know, happy and motivated at their jobs. Because it does mean throwing out things that people work really hard on.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, there you have that investment, you spend a lot of time on that. And even, even at the end of the day, even if you find one variation that, like wins, or as a positive read, that means that there's at least, you know, depending on how many variations you've had, that there's like, ABCD, did not work, but he did. So you just have to throw a bunch of work away and only keep one thing at the end of the day, you always know that some of this is throw away. And that can be disheartening.

</p>
<p><strong>Jem Young</strong><br />
And well, it's it's expected. I think product managers are, there's no like hard rule, but you're expected to fail a certain amount of time. Because if you're not failing at AV tests, like your hypothesis is dead wrong, then you're not pushing the bounds enough. Like, you need to push the bounds to get those big wins. So like it's gonna happen, we're gonna have to throw a code, that AV test just

</p>
<p><strong>Ryan Burgess</strong><br />
in failings, not bad, I think failing is actually a good thing, because you learn something from it. And it may inform the next test or, you know, in form a different route to go. I mean, if you continue to fail at the same thing, that's when it's a bad fit. Like, hey, that's working. Let's try it again. You're like, no, like, you're just continuing to do the same thing and hoping for different results. That's craziness. So that doesn't work.

</p>
<p><strong>Augustus Yuan</strong><br />
And failing is much better than learning the wrong thing. Yeah, yeah. learning, learning the wrong thing is very harmful. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that a lot. That's good. kind of leads into some, like, other good questions we were talking about, our companies are doing a B testing. What about people who want to start AV testing within their companies? I know, like even Lisa, you're saying that? Like there's a culture around it at Netflix of us. iterating and testing, there's buy in from everyone. How does someone start to build that within their companies? What advice would you give someone that wants to start AV testing in their company?

</p>
<p><strong>Lisa Burgess</strong><br />
I think you start out it from, you know, depends on what role you play, right? So if you're an engineer, thinking about what solution might you present to someone that would make it possible to do a B testing, right? And say, you know, I'm interested in this, and here's, here's how I go about it. And here's how we could do it. That is not too taxing on me, not too taxing on the organization, if you're in a different role. Other than that, you know, you might come at it from a hypothesis perspective, like, Wouldn't it be great if we knew this versus that. So I think it really depends like your path of influence, or how you might go about it is going to be completely different based on where you are, like, what your role is in the organization, and what your approach would be to it. So I would leave that up to the individual really, because there's a number of ways to go about it. Sometimes it's just do it right. Like, sometimes your company is small enough that you've got Google Analytics, and you can just just just do it, and then show the results, right. So

</p>
<p><strong>Ryan Burgess</strong><br />
that's kind of where I lean on, like, being an engineer is like, there probably is ways that you can start to play around with that. But if you already have the tooling in place, it's like, Alright, how like, look into the API's, see how you can leverage it, see, you know, showing one variation versus the other, and start to kind of run some experiments, maybe work closely with a designer, or, you know, and go back to trying to pull someone within with some statistical knowledge and getting a data scientist involved is very important, but there's ways that you can do it in a pretty low fi way to least try it out.

</p>
<p><strong>Augustus Yuan</strong><br />
I want to say that, you know, very envious of Netflix like codecs, and like, packed, let it's like, super optimal. And when you're at Netflix scale, you definitely have to care about that. But just, you know, letting people know, you know, there's ways to do a B testing without like, such an advanced way. Like honestly, like starting off with Google experiments, or, or like anything of the sort, like, you can definitely get it going. Like, yeah, like once you get to Netflix scale, maybe you can care about but

</p>
<p><strong>Ryan Burgess</strong><br />
that's the thing, too, is like, right, you had to learn our way into it. Yeah, exactly. Just one day it appeared. And it's like, yes, we have a team dedicated to building building this infrastructure in total lean, which makes our lives easier to enable to run more AV tests. But even then, it's like that team is still innovating and building new tools and making it easier and better for us as well. Yeah, great. Before we end the episode, we'd like to share pics of things that we found interesting and like to share with our listeners, let's go around the table and share our picks for today's episode. Jem already have

</p>
<p><strong>Jem Young</strong><br />
Oh man. Oh, okay. Don't judge me. No one judge me.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm always judge don't even look at

</p>
<p><strong>Lisa Burgess</strong><br />
judging, don't read judging.

</p>
<p><strong>Jem Young</strong><br />
Is music album It is the first album of 2018 that I've listened to repeatedly all the way through and I don't normally do I usually just pick songs. You sing along. Sometimes we miss shower when I'm feeling alone, no. It's a solid album. I've been listening to the gym a lot on my way to work. It is called sire and it's the album by Jaden Smith. You have to listen to every track like back to back and it just makes sense it like I'm impressed. Like, I didn't want to like it, but I do. It's just I'm gonna

</p>
<p><strong>Lisa Burgess</strong><br />
try it. I will. I'm gonna try it.

</p>
<p><strong>Jem Young</strong><br />
Give it a shot. Yeah, it's, it's good. I don't I don't recommend music that often. But

</p>
<p><strong>Ryan Burgess</strong><br />
no, you don't. That's true. So we should probably give it a little give it?

</p>
<p><strong>Jem Young</strong><br />
Yeah, they're not. My second pick is a movie I saw last weekend. It's on Netflix. Not an original just on Netflix. It's called American hero. It's about a guy who has superpowers he can move things in his mind. He can like fall from big heights. And I get it. It's unclear like the extent of his powers. But he's a total slacker and doesn't do anything with him. Like he uses it to like grab beer or something like that. But it's just like a well shot movie. It's not like action oriented. It's not like crazy explosion or anything like that. It's one of these quiet movies that like he has superpowers and like the neighborhood around him like oh, yeah, superpowers. I mean, he knows that. It's worth watching if you're in this type of movie, I have like a very specific genre of movies that I like that I like and this is one of them. So I recommend that

</p>
<p><strong>Augustus Yuan</strong><br />
it's interesting like an anti hero but isn't really a villain instead is like he goes against the stereotype because he's

</p>
<p><strong>Ryan Burgess</strong><br />
kind of reminds me of Jessica Jones in a way like she just does her own thing but you know, she's doing some good but also just kind of does whatever she wants.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I think I've picked up a movie called monsters which is also not about superpowers. It's not like aliens invading Earth that they have in Mexico and he's really trying to get up to the night so anyways, I picked it before but it's another one of these like not a whole lot of dialogue just a lot of like good cinematography and music, but like a solid plotline but it's not Hollywood you know Michael Bay style explosions things like that. It's just like

</p>
<p><strong>Ryan Burgess</strong><br />
your sold me by saying it's not that I know

</p>
<p><strong>Jem Young</strong><br />
and that's type movie I like It's like more of a Quiet quiet movie with interesting premise

</p>
<p><strong>Ryan Burgess</strong><br />
Michael Bay ruins everything

</p>
<p><strong>Jem Young</strong><br />
he ruins keep giving him money.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, got stopped

</p>
<p><strong>Jem Young</strong><br />
on transformers like 10

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, he's ruining my childhood like Transformers. What else is he made that it's terrible.

</p>
<p><strong>Jem Young</strong><br />
The island all bad movies. True but to be fair, we all see or Riley see Fast and Furious, which are terrible. Either for the next one.

</p>
<p><strong>Ryan Burgess</strong><br />
Lisa, what do you have for pics?

</p>
<p><strong>Lisa Burgess</strong><br />
So I have just one. So I recently watched Ali Wong's second comedy on Netflix called Hard Knock wife. I thought it was so funny. I actually almost threw up. I was laughing so hard. And I think it was just more specific to my own experience because I had a baby a year ago. And you know, she talks a lot about being a new mom. And it's, it's, it's really funny. Like, I thought it was so good. She also has another one baby cobra, which is also really funny, but I really like the second one more

</p>
<p><strong>Jem Young</strong><br />
need to watch though. I think both of you have recommended Yeah,

</p>
<p><strong>Lisa Burgess</strong><br />
I gotta give it a

</p>
<p><strong>Ryan Burgess</strong><br />
funny, really funny. Augustus actually saw her live too. Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
I did see that. Well, yeah. It was great. Yeah, it was the one fantastic I've had I have so much appreciation for Mother's like maternity needs to be two years

</p>
<p><strong>Ryan Burgess</strong><br />
from Oh, yeah, most people don't even get the year anything like yeah, so yeah, it's craziness. But she does touch on that and in that comedy special, which is great. I guess that's what do you have?

</p>
<p><strong>Augustus Yuan</strong><br />
Yes, actually, my pics segue pretty well, I was talking to Lisa about this I'm putting cool is like, kind of a site actually surely has contributed to it. They do a lot of data visualizations. And they have a really cool one called the, the structure of stand up comedy. And they feature Ali Wong's first Netflix special, and they just kind of go through and like they really study her piece and why her stand up is like brilliant. I highly recommend checking, like a lot of their data visualizations. But this one, especially like, it's really cool. They even show like, how her like they measure the amount of decibels like of laughter, like in magnitude and how like it led up to that point. And like how those topics like kind of like concluded in such a way that people would like laugh that hard on climax. So like, throw up? Yes, yeah. Cool. So that's very cool. And then my second pick is just this thing that this person named T Baldwin made. He made a visualization of all the buildings in Manhattan, it's like really cool. And yeah, I think it's just definitely worth checking out. Like you don't get to see like, like data visualization at the scale very often. And it's just cool to see this guy like make it free for someone to see and it's all open source. So you can like check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Very awesome. I have two picks. First one is a Netflix original show that actually Lisa and I binge really hard. We went through that really quick, which was safe It's an interesting story about it's actually the main character from Dexter. He's the main character in this as well. And he, he's missing his daughter. And there's all these like crazy things that are happening. And I don't want to give too much away in the story, but it is very, very good. I really enjoyed it.

</p>
<p><strong>Jem Young</strong><br />
Okay, answering this I saw the trailer. Is he actually British? Or seemed like doing a British accent?

</p>
<p><strong>Ryan Burgess</strong><br />
I think he's doing a British accent. Wow. And I don't. I'm not 100% sure to be honest. So it's probably for us to look unclear. Yeah, I mean, he changed Dexter. He didn't have a British accent. So

</p>
<p><strong>Augustus Yuan</strong><br />
he's definitely American. Yes. But I have no idea.

</p>
<p><strong>Jem Young</strong><br />
But you know, like, the show house? If you look, yeah, yeah, I did not know he was British. Yeah, I didn't know he never

</p>
<p><strong>Ryan Burgess</strong><br />
would have your own. Yeah. And so that could be the case. But I really don't know. And I'm sure someone can tell us we're not knowing, then my second pick is something that I've been using, I think it's, I've had it on my phone for a few weeks, you kind of just put it in the background and don't really think about it. But it's an app called hire. And what it does is it helps prevent spam calls. And I have to say, I used to get spammed a lot like I'd be picking up calls all the time, where it's like, yeah, like this hotel, this vacation. Who knows what I was winning, it was crazy all the time. But I got to the point where I wouldn't even answer my damn phone. So that's kind of a problem. And I would just ignore calls. So this is an app that actually tries to prevent spam. And I have to say, I can't remember the last call of hat. And that's pretty impressive. I'm sure it does awesome. All but it helps prevent them. It is for iOS and Android definitely worth checking out. I think it's a freemium product. So you can try it out for free. And I'm sure you have to pay for added features, but definitely something worth checking out.

</p>
<p><strong>Jem Young</strong><br />
So I download it briefly, but I was unclear on how they make money. And they have like a really big team. You don't pay for anything. Mm hmm. So like, you know, and products like that were to you know, I'm looking at their paid people it. Yeah, I was just

</p>
<p><strong>Ryan Burgess</strong><br />
selling your data. You know what, I'm okay with that, you know, all my

</p>
<p><strong>Jem Young</strong><br />
other episodes next time.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. All your phone numbers are in my phone. So. But I don't get spam calls and silver lining. Yeah,

</p>
<p><strong>Jem Young</strong><br />
I still get those political text messages. Oh, those are annoying to get like 1000s I haven't had those in a long time.

</p>
<p><strong>Ryan Burgess</strong><br />
Maybe you need high you're not

</p>
<p><strong>Jem Young</strong><br />
registered. It doesn't work for Hey,

</p>
<p><strong>Augustus Yuan</strong><br />
maybe that's how they're making money. When they're like they you get the you want. There'll be like, hey, they're taking

</p>
<p><strong>Ryan Burgess</strong><br />
they're actually getting the free. Alright, before we end the episode, I want to thank our special guests, Lisa, for joining us. It was a pleasure having you join us. Where can people get in touch with you

</p>
<p><strong>Lisa Burgess</strong><br />
so people can get in touch with me on Twitter, although I don't use it all that often. But you definitely can reach out to me there. It's underscore Lisa Burgess is my handle and

</p>
<p><strong>Ryan Burgess</strong><br />
where else they can get in touch with you. That's it. All right.

</p>
<p><strong>Lisa Burgess</strong><br />
LinkedIn, you can always reach out to me on LinkedIn. I mean, you can find me there.

</p>
<p><strong>Ryan Burgess</strong><br />
What about the rest of the panelists? Jem, where can people get in touch with you? I'm on Twitter at Jem Young and they could probably find your phone number on the internet all right.

</p>
<p><strong>Augustus Yuan</strong><br />
I got this. Yeah, my Twitter at OG Berto, Aug. Bu RTO. So much. You tweet me if that's like a bad hand.

</p>
<p><strong>Ryan Burgess</strong><br />
I should maybe I should get it. You don't want to change it now though. It's too late. It's too late. Too many links to it. Yeah. Just links to it. You've announced it on a bunch of episodes. Too late. So okay. Don't worry. Okay. Yeah. All right. And I'm on Twitter at Burgess D. Ryan. Thank you all for listening today's episode, make sure to subscribe to front end Happy Hour podcast on whatever you like to listen to podcasts on and follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. If it's not a good handle, we're not changing it. So let's go. Yeah, any last words

</p>
<p><strong>Jem Young</strong><br />
control I guess.

</p>
<p><strong>Augustus Yuan</strong><br />
Control control your blood. I can't control your bladder.

</p>
`;
        return transcript;
    };