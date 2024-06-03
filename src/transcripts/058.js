module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of Front End happy hour. A lot of the work we do impacts a lot of people using a product or application. And it's really important to understand how our users are resonating with the product that we create a great way to better understand what works for our users is doing user testing. In this episode, we'll be discussing user testing. Let's go around and give introductions to our panelists. Jamie, wanna start

</p>
<p><strong>Jem Young</strong><br />
off Jem Young, Senior Software Engineer at Netflix,

</p>
<p><strong>Augustus Yuan</strong><br />
I guess this year in front end engineer at

</p>
<p><strong>Ryan Burgess</strong><br />
Evernote. And I'm Ryan Burgess, I'm a software engineering manager at Netflix. And each episode, the front end Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is experience experience?

</p>
<p><strong>Augustus Yuan</strong><br />
If we say the word experience at all, in the episode, we will all take a drink. All right, so let's jump in. How would each of you describe user testing, I would describe user testing as essentially like reaching out to your target demographic or your user base. And then actually having them try out your application. And then at least how I'm familiar with it is like they will actually record themselves and go through like a bunch of different user tasks. And it's like a great way to like, kind of like get in the mindset of what a user is doing when they like, hit your application. And if you want them to do a specific action in your application, like, that's my understanding.

</p>
<p><strong>Ryan Burgess</strong><br />
I like it, I think of it very similar, but also sitting in a dark room and like behind the two a mirror and like they're, you know, you're watching the customer. I mean, I've been there I've seen it, it's great. Yeah, or even like you kind of mentioned is like they record a video of them interacting with it. So yeah,

</p>
<p><strong>Jem Young</strong><br />
what I would add is, I don't think enough companies do user testing, yes, because we have engineers, people with degrees, or many, many years experience, we have designers who are like excellent and modeling and things like that. And we we build these like beautiful UIs. And we're like, oh, it's so intuitive. It makes sense. And your friends all say that, because they're all in the same like social circle as you. And then you put out in the real world, with people who have like, are not familiar with their product, specially internationally, people that don't have the same like, values as you so like, they're not necessarily going to click on this button, because like it's not what they build. It's not like it's not a cultural norm for their design. And then you it's very humbling to see people stumble through your app. And it reminds you of like, who actually use your product, it's not your friends or your family. It's people you don't know and never heard of from it's completely different background.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think that's really true. And even I guess I said, you kind of go after the demographic of your app, maybe also that you're trying to reach a new demographic. So how would you even interact with them, you'd have to go and reach those this demographic and share your app. The thing that made me think of it to gem is when you're talking about the feature, or we build these beautiful UI is it reminds me of like the hamburger menu, like that was not really a thoughtful menu that people were using. I mean, I still see it, but it's coming less and less. And I feel like I don't know where that came from. That can't be that intuitive is like oh, this is a menu

</p>
<p><strong>Augustus Yuan</strong><br />
or carousels. Classic, should I use a carousel calm? Check it out.

</p>
<p><strong>Jem Young</strong><br />
I love when people say, or a big company will roll out a new UI or product. Like it's so intuitive and easy to use. And like big marketing speak, like this is intuitive. Have you done real testing? And seeing like, do people naturally navigate to the next? Do they know what to do? And most of the time, it's no, it's intuitive to you cuz you spent six months looking at this. But in the real world sewn in from Manitoba, Canada does not think the same way as you do. And

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, I think that's and that's a good point, too, is that you're too close to it. Right? Like you you've been working on this. You're like, oh, yeah, I get it. I see it day in and day out. That button opens and closes this menu. And yeah, it's it's so intuitive. But yeah, it may not be when someone first looks at the product.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. Especially like it kind of like we were saying like, when you work on the product, and you do you know, like inside out the code and like all like the different possible like edge cases that a user can hit. Like, you don't really think of like how intuitive it is for a user to do like a B because it's like, it's just kind of drilled into your brain that oh, this is how it's done. Because he's just looking at the code. So it's just yeah, it's like you said, it's very humbling to like, see a lot of different perspectives of people coming and trying your app and then realizing, Oh, it doesn't actually work as intuitively.

</p>
<p><strong>Ryan Burgess</strong><br />
Do your companies do it? Like I mean, well, I mean, I've actually worked at Yeah, you can answer this.

</p>
<p><strong>Augustus Yuan</strong><br />
Evernote definitely does it? Yeah, we still do it. We use usertesting.com. I think actually, yeah. When we were both, I'm still at Evernote. But when Ryan was at Evernote, we would do user testing on the marketing website, and we still heavily use usertesting.com. I think for a lot of like the recordings of testing people on mobile apps. I've seen some of those videos. And it's, it's that painful. It's it. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that is good.

</p>
<p><strong>Augustus Yuan</strong><br />
I was gonna say that, but I didn't want to say it. But since we said it, yeah, it's definitely painful to watch, but also extremely enlightening us, like Think to yourself like, oh, wow, yeah, that is really confusing now that I think of it that way. Like, if I've never used Evernote before, or if I came from another version of Evernote, maybe like, like, it can be like, pretty, like, confusing. So

</p>
<p><strong>Jem Young</strong><br />
yeah, we do, just like you said, it's, I think it's one of the more painful things I've watched in terms of engineering, I'm not talking about like, you know, childbirth or something like that. But in terms of someone has remote, and they're testing out some UI on a TV, and like 30 seconds, like, I don't know what I should do next, and it's like, click the button, click the light, it's right there, just click the button. But again, that's all the assumptions we make. Because I've seen all this before, I know what you should do next. But you put in the real world, someone who hasn't seen it before. It's painful and humbling at the same time, because your beautiful UI could just fall flat. Because people don't get it,

</p>
<p><strong>Ryan Burgess</strong><br />
it hurts to see that. But you can't sit and everyone's living room and tell them how to use their how to use the remote. And yeah, and also that makes a lot of sense. And Netflix, we have a whole team dedicated to that, like consumer insights team, we go to other countries and test out new features. And whether it be a new feature that's added to like playback, or something that's even for like our signup flow that getting people to understand what Netflix even is. So I find that really, really useful. I've traveled International to go and watch some of these. And it was really humbling. And you really got a lot of empathy for the user, even little things that we weren't really testing that you would start to see go oh, that's probably not the best thing to have. There are that is kind of confusing. It you just don't necessarily see it all until you actually see people interacting with the product. I heard

</p>
<p><strong>Jem Young</strong><br />
a story I forget which country it was. But we were in a country we were doing real user testing. And it turns out the font we're using made the language extremely hard to read because the language like a lot of diacritics. But it's something that we wouldn't even have considered. We're like, oh, yeah, that's the text is right. Like localization says that's correct text. But in the real world, people are like, actually, this is a really hard font to read. And it

</p>
<p><strong>Ryan Burgess</strong><br />
was the font too. It wasn't like the the translation was actually correct. Yeah. But yeah, it was the font. And, yeah, it wasn't something that we were user testing, it was in the product that we were testing. But it wasn't actually something that we were looking for. But it was something that we learned out of that user testing. So very, very powerful that we just learned something.

</p>
<p><strong>Augustus Yuan</strong><br />
Great experience, you might say, cheers. Here's,

</p>
<p><strong>Ryan Burgess</strong><br />
you know, one thing that sometimes comes up in when we talking about user testing is a B testing. And I think those things are, they're different. And so what what are the differences between A B testing and user testing, I think it's probably good that we, you know, talk about that early on in the episodes, people understand the difference,

</p>
<p><strong>Augustus Yuan</strong><br />
my take. So as we kind of talked about user testing, from our experiences, more of like someone actually walking through, probably like a guided steps. So usually, like, when we do user testing through usertesting.com, there will be like, like a little prompt, though, like, they'll have like a recording, and they'll be talking and they'll be reading out the steps that they're following through. And the user will actually go through those steps and be kind of speaking out loud to like, talk about their, like thought process. So it's a very, like, in some ways, guided but also like, a way for the user to kind of inform us like what's going on in their heads and what are their thoughts on the user experience. AV testing is kind of something that doesn't necessarily need you to like, see the user like, you can actually roll this out to people for your application. And the idea of a b testing is that you're literally testing like one single thing, and you're just comparing them. So typically, like an A B tests will have like a control, which is what your current site has. And then A and B might be two different little changes. Like it could be like a little feature change, it could be like a little design change. But the good thing about this is you compare it against your control. And you can see if there is a lift in like, if it's like doing better, or if it's doing worse than controlling, you can kind of have like a more informed opinion of if that change you made is better.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no, I think that's a good explanation. Well, I think to add to that a little bit, as well as I think of user testing is something that I think you can do at any point in the process of building developing Designing whatever it is. But I think of it as something that's typically done early in the process. It's something that you might build prototypes, like really high fidelity or low fidelity prototypes to get a signal on where to keep going. If you're like, oh, maybe this is done, like oftentimes, actually, at Netflix, it's done before engineering has built something, it's like trying to get an understanding of like, is this the right path that we're on and getting a bit of feedback from the users early on. And it's a lot more controlled environment, like you said, Augustus, it's going through some steps, asking questions along the way, it's a lot more guided to have like a user go through it, the user knows that they're going through this user testing, and there's not really a way around it, they're in like, either a focus group, or some sort of session that they're going through, versus with an AV test, the whole point of it is, is that they don't really know that they're in an A B test, like they shouldn't know. And it's, uh, it is, like you said, it's more, you know, testing a variable, really understanding what that does to the core metric. But that's tested in production with live real traffic as well. And probably done at a larger audience versus user testing is fairly small, you're not going to have millions of people going through and user testing, but an AV test may actually have millions of users going through it.

</p>
<p><strong>Jem Young</strong><br />
Yeah. It's qualitative versus quantitative, like, quantitative is actual numbers, like real people in the real world, you're like, well, a million people got the experience. And I clicked on this button. Cool. We can like count that this is a discrete number versus qualitative, which is understanding how people feel, and things I like, can't be easily counted. But like, they're still important, so they can

</p>
<p><strong>Ryan Burgess</strong><br />
see to it. But yeah, you're not going to know that in the real data. Exactly. Yeah. Like that. Alright, so we covered you know, what, it's what the difference is nicely? What are some benefits of user testing? I think we've highlighted a few. But yeah, there's definitely more that benefits to it.

</p>
<p><strong>Jem Young</strong><br />
You said, Ryan, like, you can get early feedback on a product. Before you do some expensive polish and rollout, you can find out if you're in the right direction. Yeah, you can understand like sentiment, like what motivates people to move on or why they did a certain action things you couldn't capture in just raw computed metrics.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And it cuts down on if I think of it coming from engineers, it cuts down on us investing in something, because like, you may find like, this doesn't work. And we, you know, we've user test this, we've got to signal that this is probably not the right path, rather than us spending six months or a few months, building something, rolling it out, and then finding out it doesn't work. You know, it can still happen. But hopefully this may prevent that from happening a little bit earlier on. And so that if you do a B test something in production, it's already refine that a little bit more. I mean, we've all kind of set it to it builds empathy. Yeah. Like it really builds empathy with our users is like understanding how people interact with what we're creating. We're often sitting behind a computer coding, not really thinking about that. Yeah, I mean, you're thinking about the user experience, but you don't necessarily seal see this real person using it?

</p>
<p><strong>Augustus Yuan</strong><br />
i Yeah, I will say like, after watching, like user testing videos, I care a lot more about my product. Not that I don't care about my product in general. But it's like, once you like, see someone struggling to use your application. It like it really like hits you like, wow, like I want to help them. Yeah. So I really

</p>
<p><strong>Ryan Burgess</strong><br />
love the ideas that could Yeah, improve that, which is really cool.

</p>
<p><strong>Jem Young</strong><br />
Especially as a woman, we're user interface engineers, and if the user cannot correctly interface with the products that we're building, then we're doing it wrong. And I think a common one I see a lot I hear a lot is the URL. People just don't understand the UI. And it's like, well, no, if everybody doesn't understand that you're the one that's wrong. It's not the people, because the people are ultimately the ones who have to use it,

</p>
<p><strong>Ryan Burgess</strong><br />
or unless you're creating the product for yourself. But that's typically not what we're getting paid for. Generally, no, yeah, no, it's generally that's not it. I mean, there's times I've created things for myself, but I'm not rolling it out to the world. Yeah, yeah. So it feels like we've listed a lot of great things. And there are a lot of great things that I do think user testing should be done. But there are some disadvantages, or at least things to be aware of that when you're structuring a test or a user test. What are some things that could be a disadvantage when user testing? There are many?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I guess I'll speak from Evernote perspective, sometimes you can, like learn the wrong wrong thing, if that makes sense. Yeah, actually, like I want to share an example of like what happened at Evernote where we like did a lot of user testing. And it was we like, testing a bunch of users. It was like hard to like kind of like, show them all like the different features that Evernote offers. So there's like tags, there's notebooks, there's lots of different ways you can organize your content. And so we actually, like started testing a bunch of different like onboarding flows to like call out out these like features, so like, hey, like, here's a little tool tip about here are tags. And hey, these are notebooks. And then we launched like our business products like, Hey, these are spaces. And then like, actually, as new user tests came in, when we like made these changes, sure, like people started being more aware, but then we actually, like started noticing, like, some time some of the retention would go down. And there was because like, people were overwhelmed with like, all the things like, oh, there's tags, there's no clicks, it's like they I just want to create a note. And like, sure, we like call that out in the first step. But it's just like, people get so overwhelmed that it can like have like, you have to be careful of like what you like decide to like tat what problem you decided to tackle, I guess I look at that

</p>
<p><strong>Ryan Burgess</strong><br />
example. No, that actually makes a lot of sense is because like, you're actually trying to make things very organized for people and give them options on how to organize. But at that point, it becomes like there's too many options, right, organize? That's interesting. Yeah. It's like, it becomes like this, like overwhelming thing that's like a stressor, not something that's helping organize their life.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it's like, we tried to ultimately try to, like, optimize for maybe like power users, like we assumed, like people would become power user, and like, Oh, I get all these options to organize. But not everyone like organizes like, is like super organized. Some people just like want to create a note and like, just like, leave it there and come back to it. And they don't need to be organized, they just search everything or something. So it's just you really have to, like, be aware of that. And you know, upon further more user testing, we were able to learn that so humbling. humbling experience

</p>
<p><strong>Jem Young</strong><br />
you there are many disadvantages, or I wouldn't say disadvantages. There are many like gotchas to use, like me to put it. Yeah, cuz it's like not a disadvantage, but like I live in the money and time, blah, blah.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, that is like it is it's time that you should have shipped the product and hope that the feature worked better. Because what you could gamble on that it could just be a really great feature. But you wasted all this time trying to figure out if it is a great feature.

</p>
<p><strong>Jem Young</strong><br />
Yeah, like the cost of flying. I don't know five people to Thailand to do qualitative testing is expensive and time consuming with way back and write it up and discuss in group. But I guess it's like your point brings up a good one that is the downfall of many startups in Silicon Valley. And that's feature creep, where you ask 10 people in your life, and they all say I love your product. But if you had this one thing, I would definitely buy it right now I wouldn't buy it. But if he had this one thing I would totally like this is like the game changer. And you end up spending like six months or a year or whatever. And you blow your whole runway trying to build this one feature because it's the killer feature according to the 10 people you talk to. And then you get the real world, you're like, oh, this wasn't it in my prime example, and I'm gonna mock them because Stacy's not here to defend Atlassian is JIRA for feature creep, like, go into a JIRA board. And it's just like, I just want to file a ticket, assign it to somebody, and like add some comments. But like, there's 50 budget, or buttons and widgets. And I'm sure it's customizable, but

</p>
<p><strong>Ryan Burgess</strong><br />
it is though, but that's hard to, it's very hard to customize. And so that becomes a tax as well, how you build your own like little dashboard and tooling for each type of ticket and everything. It's very, very flexible. But it's also daunting, similar to Augustus point, there's all these features, and it's daunting, JIRA scares me.

</p>
<p><strong>Jem Young</strong><br />
I don't need 90% of the features. In Jira, I'm just trying to file ticket or close ticket like, but that's example feature creep. Many a Silicon Valley company has gone down, wasting time trying to build out this one feature, rather than like just getting something out the door like an MVP, they're just like, oh, well, streets build is one thing, the quarter is gonna turn, we're gonna get more money and all these things, and it just never happens. I want to say with some notable examples, I want to say fabulous is probably a good example. Maybe I'm thinking of the wrong. That was the one that like was building this revolutionary modeling framework in Java scripts. Oh, interesting. Or famous, is it? I mean, yeah, that sounds familiar. Yeah, what it's like

</p>
<p><strong>Ryan Burgess</strong><br />
oh,

</p>
<p><strong>Jem Young</strong><br />
I think they like kept saying they're building this new thing. But I mean, maybe came out and I didn't notice but like, their time had come and gone. And like, I'm not knocking those people. I'm sure. They're very smart people. But like, it was one of those just like, get something out the door instead of like, let me build one last feature.

</p>
<p><strong>Ryan Burgess</strong><br />
And that could be it too, I guess to even the point of the time, especially when your startup sometimes you need it's almost better to have something out the door versus like getting refining and getting the perfect thing. So I think there's a balance, I think there's definitely you need some input, or else you're kind of in a box and you're very, like close minded looking at the product too much. And so you need others for perspective. But it is a time cost for sure. And it's a bit of an investment. But it could also save you in the long run.

</p>
<p><strong>Jem Young</strong><br />
Maybe there's a bouncer and building features and getting something out the door. I had a friend in New York who's building like a video editing startup. And he's like, Well, I had all the He's big clients that are just like, yeah, if you had this one feature, I would like totally invest in your product. And I would buy it at sign up. And then he built it. And they're like, well, actually, our needs have changed or something because like, corporations don't care. No, no, just just sometimes there

</p>
<p><strong>Ryan Burgess</strong><br />
was, there was no like, set contract that if you add this feature in there, I'll buy a writer 10 years contract, nothing like that. It's like, you know, and of course, when your startup, you're like, cool, you'll pay me, I'll do that feature like this? You know, yeah, that can be really difficult.

</p>
<p><strong>Jem Young</strong><br />
Another one, and we actually talked about this is like, there's a few, but there's like, I forget the actual psychological name, but it's like people pleasing. It's like, if you're in a room full of Augustus and Ryan, and like, you're just like, yeah, we put a lot of sweat and tears in this product. How do you like it? People are biased to be like, I love it, even if they don't, yeah, because they want to be like, No, you want to please people even they don't know you. That's just human nature. So. So you get like, the UI is great. A good example is give a speech or something, and it's like a terrible speech or something, and then ask your mom or your parents, like, what did you think they'll be like? Yeah, that was pretty good. When like, you know, for a fact it was not good. But because people want to make you happy, they will tell you, you don't want

</p>
<p><strong>Ryan Burgess</strong><br />
to hurt your feelings. It's like, it's hard to be very constructive at that point. Yeah. And you're right, that could very well happen.

</p>
<p><strong>Jem Young</strong><br />
I think it happens quite often.

</p>
<p><strong>Augustus Yuan</strong><br />
Which is, which is why I totally recommend people, if you do user testing, watch the videos, like because I totally, I totally know what you're talking about. It's like, you know, how much work went into it? And it's like, you don't want that work to go to waste. But it's when you see like a user struggling with that. It's just like, Okay, well, you can't argue there's, there's no argument against this, right? It's like if people are actually

</p>
<p><strong>Ryan Burgess</strong><br />
like, well, that could be even there. Okay, that's, I've completely agree with you on that. But then you could do it go down this rabbit hole just because this one person had if that's fair, that's a great point. And so I think that could be the disadvantage. Sometimes you get false positives, where you're like, Oh, my God, this needs to be completely fixed and torn down rebuilt. And and it could very well, that could be legitimate. But your sample size is so small, that you might be going after something that really only impacts that one person out of, you know, maybe you only did three tests.

</p>
<p><strong>Augustus Yuan</strong><br />
No, that's true. Yeah. Okay. That's a great point. Don't Don't go chasing these users and be like, you're right.

</p>
<p><strong>Jem Young</strong><br />
I think what you're both saying is like distilling false positives from false negatives, is a difficult, like, that's why it's qualitative. Like, you have to, at some point, make a judgment call. There's no like, three people said, Yes, three people said, No, who's right, somewhere in the middle, like, we don't know, I think, Ryan, you're right, you can end up chasing a false negative for a long time, like, this one guy from Akron, like hated our product, we got to fix it to make it better for him. But he could just like,

</p>
<p><strong>Ryan Burgess</strong><br />
it could have been a poor internet connection. Yeah. Or who knows? Like, there's, there's a lot of variables in there. And it's such a small sample size that it could really send you down the rabbit hole. And so I think you have to monitor that. I also think it can be difficult to have the right questions. If you don't ask the right questions. Yes, that can really give you some weird signals, trying to think of a good example. But I mean, one, if you ask too many questions of a user, then that could be it too, as eventually, like, even to Jem's point is like asking your mom, if it's good or not, you know, she might be a little biased and just tell you, it's good. But if you ask 10 things, they might not want to say like, all 10, things are bad. So they might pick, you know, five of them good and five, bad. And it's like really, all 10 are bad. And so it's like you have to really narrow focus and understand, like, what you're trying to get out of it. And I think there's a bit of an art to that. It's like same thing as like, writing a survey once or surveys, pretty qualitative as well, kind of have to read into that as well. And like, it's, it's not perfect. If you're like, why did you cancel your subscription to you know, whatever product, it's like, well, there's like five reasons. And then that other check box or whatever, you know, and they're like, I don't know, I'm just gonna check one. And so like, you don't really know they, it's really hard. It might give you a little bit of a signal, but it's not perfect.

</p>
<p><strong>Jem Young</strong><br />
So we're definitely on the user interface side. But there are like, the UX side the user experience is a real, like, feel that I guess we will talk about that we probably touch on it a lot like user experience, but like it's very different from UI is

</p>
<p><strong>Augustus Yuan</strong><br />
to to Yeah, just like cheers. Cheers. Yeah, cheers.

</p>
<p><strong>Jem Young</strong><br />
Someone who's like skill a user experience is someone that like, Sorry, just nailed it. Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
they got finished these.

</p>
<p><strong>Jem Young</strong><br />
They know how to ask the questions in an unbiased way, because it's actually very difficult to ask a question in a unbiased way. It's like

</p>
<p><strong>Augustus Yuan</strong><br />
not like a leading way or right that's a good way to

</p>
<p><strong>Jem Young</strong><br />
like like us to see like these new shoes that I spent $100 on you're gonna be like, yes, because I led you to say like, yes, but you say Like objectively to like issues like, I don't know how to

</p>
<p><strong>Ryan Burgess</strong><br />
send the prices lower, I might like not really, because they don't feel bad that you didn't waste a bunch of money on that. But that literally that small variable has just changed someone's perspective. I love that example.

</p>
<p><strong>Jem Young</strong><br />
But that's why you need a user expect you need someone that knows how to ask objectively, because it's not about making sure your product is the best product and people love it. It's about like getting actual, valuable data out of that, which is a very hard problem. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, that's why we literally hire people in consumer insights to do this. And like, that's why there's that job. Like, I think all three of us could probably run it user testing and do an okay job at it. Chances are, we might get some of those like, wrong signals. And you know, we might get some really good signals, though, as well. But chances are, we're not asking the questions, right? We might be leading someone down the wrong path.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I was gonna throw like another example. Not that we ask these questions, like, we have like a UX researcher who's very professional asking, but like, I guess another leading question would be like, oh, like for organizing your notes, which do you prefer notebooks or tags? It's kind of like, well, I might not prefer either of them. But you are leading them to choose one or the other. Right? And so like, maybe they prefer searching or maybe yeah, they maybe they don't prefer organizing. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Or other ways letter. You just yeah, you just kind of let them option rather than be like, how do you exactly know? Yeah, I don't? Well, that's an answer. Yeah. But you wouldn't have got that answer to those, oh, I probably like notebooks. Whereas Like, I literally don't use any of the two the options that you gave me. That's a good example.

</p>
<p><strong>Jem Young</strong><br />
And now we're digging deep into, like theory. But that can be done with AV testing as well. It's like you have two buttons on the screen. People prefer the pink button over the red button. But maybe they hate the pink button too. But like this is slightly better than the other option. But

</p>
<p><strong>Ryan Burgess</strong><br />
still, at that point, at least you're incrementally getting better in some ways. Because you have already quantitative you have enough data. While hopefully you have enough data. That's another like whole nother story if you're not getting hitting statistical significance. And that could be a whole nother problem. But well, that's another episode on.

</p>
<p><strong>Jem Young</strong><br />
But that's why you do hold back test to make sure that you're Yeah, and another disadvantage to user testing that you can or not dismiss, again, like cases to look out for is locality bias. So, Ryan, I guess, just check out my sweet new app. And what it does is it delivers cold beer to you anytime it cost $50. I'm saying exactly he's made that you're like, Oh, we're, we're gonna get VC funding, we're gonna make a millions of dollars billions of dollars, trillions of dollars off this app. Yep. But already paid for it. Look at where we live, look at the income levels look at like your technical expertise. And that's something that it's actually hard to avoid. Because if you if we did just user testing in Silicon Valley, I think the average user is going to be slightly higher, because we might get some people actually work in software companies, things like that. And it's totally buys your product in one way. And avoiding that is pretty difficult. Like, it's important to travel the world if you can, or like find people that are not in your income levels, or economic levels, or people that like think differently than you diversity, diversity.

</p>
<p><strong>Ryan Burgess</strong><br />
I think well, I mean, we've even talked about diversity in hiring, I think that's the same ideas. Like when you're building a product, like I said, kind of made that example I built sometimes build tools for myself, well, guess what it's gonna work for my use case. And like, if I give it to each of you, you're both gonna be like, Wow, I kind of want this to work and this feature change, but it's like, I built it for myself, we're not building products for ourselves, we need that diverse way of thinking to help shape and build the product to be great for everyone. I mean, if you're only building it for a few people, then just ask those few people what they want. But that's typically not the case. And so I agree with you, Jem, too, is like, yeah, looking in our little bubble of Silicon Valley is probably not the best place, you might get some decent feedback. But I do think you need to go other countries or even other places, if you're looking in the US just go some other cities that may not be averse to being in tech all the time, or even ask your parents, I honestly that sometimes is a good test. I know we were kind of talking about it from the budget of companies. I mean, I build products on the side, I know each of you do and like sometimes just throw, like throw it at your parents and see if it's intuitive. And sometimes that can be a lot of feedback to is, you know, there again, it's very small sample size, but that could be a signal that you might be like, huh, I hadn't thought of that that way and might change how you approach it. Yeah,

</p>
<p><strong>Jem Young</strong><br />
it's like actually a larger life philosophy. It's important to have friends that'll give you honest feedback. Because that's actually very hard to come by. Because again, most people just want to make you happy. You're like, good job. Augustus. Like you did a great job like all the time like it, but that's, that's not valuable for your personal growth, and I'm valuable for your product growth. And that's, it's something to avoid. It's like an edge case on user testing.

</p>
<p><strong>Augustus Yuan</strong><br />
When you think should be doing user testing, like when's the optimal time. I know I said earlier is probably best. But do you feel differently personally, like routinely is like, you should always be user testing every now and then. Yeah, like, honestly, like, yeah, I just can't really see like a moment where you shouldn't be user testing. Granted, you don't have to do it, like, every single day or something. But it's definitely like to get like getting a lot of perspective helps. And even like, even during, like seasonal time, like seasonal times, like are well, I guess that's more of a demographic thing where like, so for us, like, during this one, the school year starts, maybe we'll get like a huge bump, because people are like, trying to be productive and stuff. So it's like, good to be like, it's just good to always be user testing lots of different demographic, right?

</p>
<p><strong>Ryan Burgess</strong><br />
And doing it at different times. Like that, too, is like so you might want to target that back to school crowd. Yes. But you may also want to see what happens in the summer. You don't want it Yeah, yeah, exactly. I'm or whatever. That's interesting, as well.

</p>
<p><strong>Jem Young</strong><br />
So I have a question for you both. Alright. So Henry Ford, or someone once said, like, if I ask people what they wanted, they would have said a faster horse. So how do you avoid that when you use a testing? Like, if you have a radical new idea? How do you avoid people being like, well, I don't think this is gonna work. Because most innovative ideas, like streaming on the internet, that's, that's

</p>
<p><strong>Ryan Burgess</strong><br />
a crazy idea time, right? Nobody's gonna want that. And a lot of people get told that that's when the brilliant ideas are there, too, is like we're shifting completely. Yeah, that's, that's a good question.

</p>
<p><strong>Jem Young</strong><br />
So how do you? How do you test for that?

</p>
<p><strong>Augustus Yuan</strong><br />
Can you can you repeat the question?

</p>
<p><strong>Jem Young</strong><br />
How do you test radical ideas? Like radical approaches? Like something just completely different?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Cuz like, Okay, well, let's use the Henry Ford one. That's a perfect example, back when Henry Ford decided we need to build this motorized car, if he went and got user testing on this would have been, he definitely would have got a lot of negative feedback that said, Don't do this. This is terrible. I want my horse to be faster, like this doesn't help me in any way. Like, I guarantee that it would have been like that, because he did get pushback, or he kind of seemed like a dumb idea at the time. Would you if you did that now. Like, it'd be like, take us saying like, here's a horse, you want to trade in your car for this horse? No, like, not at all. So I don't know how, like, at what point so that would actually be an example where user testing wouldn't have worked, I guess, right? Is that what you're kind of asked? Yeah.

</p>
<p><strong>Jem Young</strong><br />
Like, how do you test radical approaches to solving problems that people haven't seen before? That? I mean, people like familiarity. So how do you test something that's just completely that familiar?

</p>
<p><strong>Augustus Yuan</strong><br />
Honestly, in my opinion, when your ideas are just so new, like, it's hard to get people to buy in unless they've actually unless they actually see the application of how it's solving the problem you're trying to solve? So like, yeah, and it's like, I find it hard for you to like user test it when you don't even have a really a finished product, which is like, I don't know, like for startups, right? They try to like, like, show, maybe concepts, but they have to, like get like something going to like get like in spring funding, and stuff like that. But yeah, it is pretty tough. I don't know what like, honestly, if you're, I feel like if you're just starting out, like user testing might not be like the thing you're trying to solve for like, really figure out what problem you're trying trying to solve first. And then like how you're going to do that. And then you can kind of focus on like user testing. It might be that might be you might be in a too early phase for that. That's my fight. Yeah, my take on it.

</p>
<p><strong>Ryan Burgess</strong><br />
You? I don't know. I think that goes back to being very qualitative is like, you still need to take the feedback and decide what to do with it. I don't I don't know if there's an easy answer. I think if you were Henry Ford, in that situation, you might still be like, Yeah, I don't care what they all say, I'm still gonna go forward with this. How it's tough. I don't know if there's a perfect answer. But it did bring up you know, when we said about, like, when to get started with user or when to do user testing. I think like anytime that you have a hypothesis that you want to answer that might be a good time, or like I like what Gustus said of like, often, like keeping, you know, often do user testing, don't stop doing it. I think that's good. But I think also, if you have something new, or a hypothesis, you want to test us user testing.

</p>
<p><strong>Augustus Yuan</strong><br />
Just curious, you know, what Ford did?

</p>
<p><strong>Jem Young</strong><br />
kept on building he just kept on building now. It's the major car company.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, that's crazy. How can

</p>
<p><strong>Ryan Burgess</strong><br />
you get started user testing? What are some ways to like get started? I know actually, Augustus mentioned usertesting.com I think to me, that's probably one of the best services to really just give it a try and you can learn quickly. It doesn't take much you don't you don't need a fancy glass two way mirror or anything like that. You literally can just have people online testing your product.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I guess for us. Yeah, I I definitely think usertesting.com is like a good place. If you're like really new and stuff even like just testing within your own company like from other team's like, like maybe like the marketing team or human resources or analytics, like asking their perspectives and granted, that still kind of a bubble, you're still you're not like getting the whole picture. But even that kind of testing is valuable. Let me see dogfooding your product exactly is like, that's really great. Like people who do who haven't seen what the actual, like flow is, like, they don't know all the possibilities, like just seeing how they would Hey, you know, how would you get to notebooks for or something of the sort, like, just seeing like that from like, anybody who doesn't know what it would normally be, is very valuable. So.

</p>
<p><strong>Jem Young</strong><br />
So Amazon, Mechanical Turk is a good can be a good tool for that. Like, you have to be very careful. Its people can sometimes fly through things. If you're paid on like how fast you complete it. But it's a good way of just like outsourcing general, I've got this work I needed to do, or I need random people from around the world to test this out. It could be good. You have to manage it carefully. But

</p>
<p><strong>Ryan Burgess</strong><br />
good work. Yeah. And also friends and family. Always a good spot. Like you said, real Jem might feel there's a bias. Yeah, but you might get some signals. I think just being aware of what signals you're getting. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Tell them you didn't work on it. What do you think? I think it's garbage. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
What do you

</p>
<p><strong>Augustus Yuan</strong><br />
just Just FYI, he's not my really good friend. So just hang out.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, before we get into pics, what advice would you give someone wanting to start user testing?

</p>
<p><strong>Jem Young</strong><br />
Make sure the person the Proctor, whoever's in charge of the test is preferably so not with the company, or they're unbiased, like you have a set of questions, like I said, and you just print them out and have someone else who's unrelated to the company read them. Because unconscious bias even in the way we say things, is, it's like it's a very real thing. And it we can't ever account for it. So it's like, again, do you like my nice expensive shoes, like even that phrase, there is like already leading you and you don't want that you want someone that's like, has no stake has no skin in the game. They're just like, I'm here to do this job and then leave. That's ideally what you want.

</p>
<p><strong>Ryan Burgess</strong><br />
When I think it also even to that point, what the expensive term that you said could like that already lead you to like certain feeling, and the fact that it's yours to union, he said my shoes. And if it was just like, What do you think of this pair of shoes? Yes. It's like, that's already removed. Because I might like, I don't want to hurt your feelings. But if you're like, on the shelf, I'm not going to think anything of it that I'm hurting your feelings. You just said what do you think of the shoes? And so like that, just that wording has already changed? Like how an answer could be given? Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, I guess for I actually like what used to just say Ryan, like, even like family or friends or like really good people. And basically what Jem alluded to, like people who are very unbiased, like, are very good places to start. I think if you're actually an engineer, that is like building out some things, one thing that I think is really good is like, I firmly believe, if you have to explain something, it's probably not a good user experience. Right. And so I think when you go into a design meeting, where they like pitch, oh, hey, this is like the design. And this is the flow, like you kind of have the flow that they're explaining. So it's like, not to say intuitive, but it's just like very explained to you. It helps to sometimes just like, before the meeting, just go to the design and just look at it, and see if you know what you can do from there. Sometimes like that helps to like, just like give you the perspective of like, oh, okay, that's how I was supposed to do that and bring your questions to Yeah, exactly. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I like that. I also think like, when you actually plan to do a test, like if you are wanting to do it and be successful on the test, is really setting clear expectations for the participants. I think that's really important. And also to try not overwhelm them with too many tasks similar to like the the notes example, or how to organize, don't give them too many tasks, or ask them have too many things because it can become overwhelming. And at that point, you might just be answering just to get out of being or just kind of finished. So be very prescriptive, and be very, you know, focused on what you're trying to achieve. And like if you need another session of user testing for another feature, then do another set. Don't try and cram it all into one.

</p>
<p><strong>Jem Young</strong><br />
So what's your sum up? Like what you're saying is like an A B tests used to have a hypothesis in the beginning and like a clear thing you're trying to test and not just like, let's throw this out there and see what people think. Because, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
right, like I built this whole new product, what do you think of it? Well, what do you want me to look at? Like, what are things like, you know, you can lead them, you know, isn't intuitive. How do you? How would you go and create a new note. Let's go to the Evernote examples. Like here's the product, how do you go create a new note? Well, now you're asking How intuitive is it to actually go create a note, right? And that could literally be a question and that could tell you a lot. But if you're just like yeah, what do you think of this amazing product and you're like I mean, surveys, it looks great. Like, it didn't really tell you much. And so I think you really have to understand what you're trying to get out of it and ask the right questions. It's not easy. I don't think this is an easy like, there's not a one solution that fits all. It's like, here's the checklist and do it. But to just be very thoughtful when you're building these tests and have a strong hypothesis. That's a good way to put it. Yeah. Yeah. All right. At the end of each episode, we love to choose pics of things that we're just dying to share with our listeners that we found interesting and think hopefully people enjoy them. What do each of you have for today's episode? Joe?

</p>
<p><strong>Jem Young</strong><br />
Should I just like hate on the other panelists who weren't? Us three? I won't do that. I will not. I will take the high road, though. I don't miss them to wherever they are in the world.

</p>
<p><strong>Ryan Burgess</strong><br />
They're like most of them are like in like a fewer in Europe. I don't know. Like everyone's there. All traveling are well traveled group. Yeah, but you asked three. We're in San Francisco right now. We need to get that we needed to be traveling right now.

</p>
<p><strong>Jem Young</strong><br />
My first pick is it's a movie on Netflix. I won't say it's Netflix original, but I think it's on other platforms as well. But it's called The Little Prince. It is a fantastic movie. Actually. Probably a year or two ago. Reed Hastings our CEO recommend he's like, You should watch this movie. And I was like, What do you know, read? It's like a half cartoon half claymation movie. It is phenomenal. I would argue it's one of the best movies we have on our platform. I won't. I won't spoil it for it. But like sit through it. It is worth watching.

</p>
<p><strong>Ryan Burgess</strong><br />
It is an original film. I have not seen it. I've heard good things. You

</p>
<p><strong>Jem Young</strong><br />
should watch it. I won't say like life changer. But like it's definitely like a very solid. It's a solid movie to watch. Yeah, put it that way. My next pick is for the segment called Valley silicon where I pick things that shouldn't exist, but they only do because silicon people in Silicon Valley have too much money or not always good sense. My pick this time is the slack incubator. Yes. I'm not hating on Slack personally, because there's some good people to work there. But the fact that a startup has an incubator for other startups is like, I don't know. It's like a 10 year old baby sitting a five year old being like, Hey, kid, look at me. I don't worry. I know everything. There's no life all mine. Like, I don't know. And slack is not the only incubator. It's not the only startup that has other startups working for it. But it's just a weird concept. I I don't know. That's like something very off about that. And also, okay, I'm just gonna use Slack for a rant. Slack the app, it sucks. I know. It sucks. It sucks. There are three different loading screens they buried they disguise it very well give it to designers. But slack should like really focus on making their app better and more stable. Sorry for that rant. A bit works in Slack. But fix your stuff, man. Stop incubating startups.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, there will fix it. Yeah.

</p>
<p><strong>Jem Young</strong><br />
I'm sure they'll fix it. Now. They'll listen to Jem. Yeah. Like Jem said, So. So.

</p>
<p><strong>Augustus Yuan</strong><br />
I like Slack. Well, I like Slack bots. But yeah, no, no, that's but yeah, they're I mean, Slack isn't perfect. I'm sure. So I guess this what kind of fix do you have for us? Sure. So my first pick his top two books. It's this experimental AI from Google. It's like bookstore google.com. And you can like help train their AI for like talk by talking to books. I thought it was like really interesting. And like, I went to Google IO, I was pretty fortunate to be able to go and like they're making like huge pushes for AI. And AI is just like, so fascinating. Like the problems they're solving as machine learning and AI. It's really cool. So I thought this was like a cool thing to check out. And then the second thing is this thing called Pocket developer I saw on Kassa do or Cassidy and Cassidy Williams, Twitter. And it's basically this dice that has like a bunch of like, common sayings that developers might say, like, let's see, one of them is like, that's a first or like, cash. And then there was like one booty. Yeah. Or and one was like IE six. It's just like question mark, exclamation point. It's just like a funny dice. And it's like, you can just like, I don't know, you can just roll it in. I want.

</p>
<p><strong>Jem Young</strong><br />
I love the works for me. works on my machine.

</p>
<p><strong>Augustus Yuan</strong><br />
Almost then. Yeah, so 20 sided die. 20 different possibilities. Great.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. I have two picks. I have one been in a new house recently, I had to go and hang up artwork and all that fun stuff. And Jem is actually the one who recommended this meet I think a couple years ago, but the 3am command strips Oh, man, those are good. Like, you don't have to like drill holes in the wall or hammer nails in the wall. These strips are amazing. They're just like sticky and they're Velcro. super impressive, they work really well. And also like moving out of my last apartment. They didn't ruin the walls. So that that was that was a win. And then my second pick, I've been a huge fan of Sonos speakers. They're just impressive for how you can actually connect on like Wi Fi network, control them really easily send music to them. Like if you're on Spotify, and you want to just like you come home and you want to send it to your Sonos speaker. It's impressive how well they work. And then the more you get the like, the better they work with the ecosystem. You can even connect like, other things that aren't really like smart speakers like there's a Kinect, that will, you know, hook up to an amplifier. All in all, I'm really impressed with it. I have a few things that are Sonos, and I've been really impressed with the products. They're on the pricier end, but all in all, like if you want to be fully connected on Wi Fi for music, it's pretty impressive. So before we end the episode, where Can everyone get in touch with you and get pissed off at your pics and rants? Jem?

</p>
<p><strong>Jem Young</strong><br />
I am on Twitter at Jem Young. Send me whatever you want, because I'll probably ignore it. Just kidding. You're nice. I was fun.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, you can reach me at Twitter at OG, Berto, Aug. Bu RTO.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm on Twitter as well at Burgess D. Ryan. Thank you all for listening. Today's episode, make sure to subscribe to front end happier podcast on you know, whatever podcast catcher you use. Follow us on Twitter at front end each H any last words? great user experience.

</p>
<p><strong>Augustus Yuan</strong><br />
great user experience. Cheers, cheers. good user experience. Even a drunk guy can do it.

</p>
<p><strong>Ryan Burgess</strong><br />
Drunk testing.

</p>
<p><strong>Jem Young</strong><br />
And so they mentioned that.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it is a thing. And there's people who you can pay to test your site drunk.

</p>
<p><strong>Ryan Burgess</strong><br />
Can I sign up for that? Oh, yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
we should do it. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, we

</p>
<p><strong>Augustus Yuan</strong><br />
will do it after.

</p>
<p><strong>Jem Young</strong><br />
I will get trunking Oh, yeah, be awesome. I would do

</p>
<p><strong>Augustus Yuan</strong><br />
it. I will record a little film

</p>
<p><strong>Ryan Burgess</strong><br />
at two. I'll do it for Netflix too.

</p>
`;
        return transcript;
    };