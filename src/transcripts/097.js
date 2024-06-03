// Episode 1 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  <p><strong>Ryan Burgess</strong><br />
All right, well, thank you all for coming out. This is awesome to see everyone come out. This is a live episode of the front end happier podcast to listen to an episode before. All right, there's a few hands, which is great. But for those of you who don't know, front end, happier podcast is really a group of us talking over drinks. As you can see we have some drinks on stage. We talk about all things around technology, front end design, a lot of great things and it's just really a bunch of people talking about that. And that's what we do on every episode of the podcast. But I'm really excited to be here in Columbus, Ohio, at route insurance, talking with all of you and today we are actually going to be talking about design systems. And we're joined by Ali and Gibran to help us with that. Before we begin, do you want to give us a brief introduction of who you are and what you do? And I want to know what your favorite happier beverages.

</p>
<p><strong>Jibran Kutik</strong><br />
Oli, do you wanna go first? Sure. I'm very shy.

</p>
<p><strong>Oliver Farshi</strong><br />
Okay, okay. Hey, everybody. My name is Oli. I'm a British designer. I live in the Bay Area. I've been designing things for about 1516 years now. I only design things that reduce suffering, things that reduce human suffering, basically. So there's things like tools that are used by the UN to work with refugees, robotic surgery platforms, things that stop the spread of epidemic diseases, topical, and at the moment, I am head of design over a really cool nonprofit called Kiva. We work on empowering people, some of the poorest people around the world through micro loans, so any of us in the room can band together cologne to a person somewhere around the world who could do something with that money to improve their quality of life. How's that? Oh yeah, that's my beverage is that you need to mention the beverage. My beverage is San Pellegrino. Wait for it. And in here, mezcal Del Mar a vida, mezcal. 

</p>
<p><strong>Ryan Burgess</strong><br />
Alright Jibran, you can't avoid it.

</p>
<p><strong>Jibran Kutik</strong><br />
I can I can do it. Hi, everybody. I'm Jibran I lead product design at route insurance. We are car insurance company that is focused on basically making insurance significantly fair. So we collect telematics data and price based on how well you drive and not based off of other demographic data as much as possible. We really want to focus on things that people have in control. And so before working at route, I was also out in the Bay Area. I kind of started my career at a variety of tech companies. I used to work with Ryan and Netflix, and I'm really into whiskey right now. I feel like having beat now being in the Midwest. I feel like I have to get into whiskey. Kentucky is right, right nearby. And so I'm like really getting into whiskey, bourbon, scotch, all of the whiskey, Jason. All good things like really good things.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. And let's also go around to Stacy and I on the panel, the regular panel, but Stacy want to give introduction of who you are.

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a senior front end engineer at Atlassian.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. I also want to call out that as we're talking about design systems, I want you all thinking in the audience, what kind of questions you want to have for us, because at the end of the episode, we are going to open it up for questions. We'll give a good 1015 minutes for the audience questions. We have a nice mic set up here for you all seem

odd, intimidating at all.

But yes, you will get to come up and ask us questions. Hopefully we can answer them. But yes, in each episode, when we record a podcast, we actually like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And so we're going to do that live on stage. Stage, you're all welcome to join, and also hold us accountable. Sometimes we miss it, we kind of get in the groove and forget to call it out. You can just raise your glass and we'll try and remember. So what did we decide that key word is?

</p>
<p><strong>Oliver Farshi</strong><br />
I think if memory serves it was relationship. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And if we add the s like as plural,

</p>
<p><strong>Oliver Farshi</strong><br />
relationships, multiple grades.

I don't know if I agree to that. But okay, okay. I think it's happened. All right. Fair enough. All right.

</p>
<p><strong>Ryan Burgess</strong><br />
So yeah, you all hold us accountable. They there's an audience here to actually call us out on it. Sometimes I feel like people tweet us after and be like, hey, you kind of missed like five times or that happened. So we actually have an audience calls out on it. So that's good. All right. Well, let's get started on design systems. I think there's a lot of words for it. But I'm curious. What does the design system toolkit in other words are there for it? So there's quite a few out there. What does it mean to you?

</p>
<p><strong>Oliver Farshi</strong><br />
I mean, it's a big thing. Gibran you go, like dig, dig the grave that will be

</p>
<p><strong>Jibran Kutik</strong><br />
hard. I feel like there are a collection of rules that everyone ignores immediately after you finish, is that not a good way to start this?

</p>
<p><strong>Ryan Burgess</strong><br />
The whole point is you follow thoseones it was decided upon you follow the rules.

</p>
<p><strong>Jibran Kutik</strong><br />
Everybody's really good at that. Like as soon as you're done, people are like, yeah, I'm gonna keep doing all of this. There's nothing else going on. Let's move on. Yeah, exactly.

</p>
<p><strong>Ryan Burgess</strong><br />
It is a set of rules I'm hearing.

</p>
<p><strong>Jibran Kutik</strong><br />
Yeah, okay. Definitely rules or guidelines or something kind of, I don't know how flexible but some something that you find it ridges. Maybe it can be it depends on where you work.

</p>
<p><strong>Ryan Burgess</strong><br />
I might have to get into that.

</p>
<p><strong>Oliver Farshi</strong><br />
Yeah. So I'm thinking I want to build I'm gonna Yes, and design it. So. So I think a set of rules maybe ideally that come with elements or components that I mean, it depends if we're talking about a desert system that can really be used by ENTJ or not as in as like real coder backset. Or it's just dealing with kind of the intent and the visual intent versus the code. But I think, if I'm looking, I think a solid design system has descriptive elements about what are the different features of the platform or the thing that we're applying the design to maybe a set of components and descriptions of how you'd use those components. And also, ideally, do's and don'ts, I think are really helpful, like demonstrative elements that help you understand this is how will actually implement this. I think the best style guides are actually I think the worst ones are things that are first show and they live, they live on a blog and no one else and nowhere else. No one looks at it. Exactly. And there's an announcement and that's it and the best ones that ones that are actually living style guides that as a team, or even as, as whatever designers or developers working on a given planet. form, you're referencing all the time to kind of keep the quality of your work at a consistent place.

</p>
<p><strong>Stacy London</strong><br />
Yeah. And then and then maybe from like the engineering perspective, for me, a design system is something that is a bit more tangible, like what you're saying, then it's not just some words or some guidance, but it's maybe, you know, a manifestation of that in our react UI component library are some, some tooling that you can use to implement that. So you can say, you know, this, this button is a shared thing across all of our products. And it's as simple as doing an import of that of that button.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I love that. Like to me, I think all he also summarize it for me is consistency. I heard you say that. And that, to me is always the important one is that why are we reinventing the wheel? I always think about that button that we've recreated, like 10 different times, or how many different colors of gray or black is a really multiple colors of black, like it's just one and it's like, why are we changing that? Like, let's keep that consistent. And if it does change, I'm always like, hey, Well, that's great if we have a design system, you can change it 10 different times, but at least it applies everywhere. Like we actually have that system in place, especially on the engineering side, like you said, Stacey, is that there are components that we're now importing. And if it gets updated in one place, it gets updated everywhere. Mm hmm. And like a really sophisticated one

</p>
<p><strong>Stacy London</strong><br />
is like a feedback loop. A sophisticated design system is where engineers are doing things with the design system and building things with it, but also like, oh, I've reached a limit with this particular component. And that feedback can go back to the design team, and then everyone can kind of collaborate or like internal open source where you're like, Oh, this component didn't meet my needs. I'm gonna put up a PR to like, expand the props or something and have a discussion about it with everybody to make sure that it makes sense to do where it's like a full circle

</p>
<p><strong>Ryan Burgess</strong><br />
living and breathing.

</p>
<p><strong>Jibran Kutik</strong><br />
Yeah. Ryan, I feel like you're giving me flashbacks to. to Netflix. I'm like envisioning the conversations about button colors and shapes and corner radiuses. But mostly the word consistency is like a real trigger for me, and I don't know if this is maybe too much of a very like esoteric deep cut. But my when I was interviewing at Netflix, you know, Todd Yellin yeah. Oh yeah, I think the first question he asked you is like, tell me about what you think about consistency. Is it important? And I was like, What

</p>
<p><strong>Ryan Burgess</strong><br />
did you respond? 

</p>
<p><strong>Jibran Kutik</strong><br />
Well, so I I have like a lot of

</p>
<p><strong>Oliver Farshi</strong><br />
sounds like a trap

</p>
<p><strong>Jibran Kutik</strong><br />
well, so I I've gotten a lot of opinions on it since then I feel like there's this this like fine line, that consistency can walk where consistency for consistency sake can be really unpleasant and unhelpful. And so you have to figure out, I'm really curious how you all have approach kind of making sure that things are consistent for for a valuable reason, for a way that's actually it's more efficient, or it's for user understanding. So like, the classic example I always come back to is Android versus iOS icons. And I don't know, I don't even know where we are on these anymore. I feel like I'm stepping back five years or more. But there was this point where was a really big deal, too. You have the right icon in the right platform cuz you want people to understand the share button. That's That's the one. That's, that's been answered.

</p>
<p><strong>Ryan Burgess</strong><br />
That's been decided on.

It's still inconsistent. It's it's different on each platform, right? 

</p>
<p><strong>Jibran Kutik</strong><br />
But it's consistent. As a brand. You want to have that consistent icon in your platform, right? Like you don't want to make up your own. Like we shouldn't make our own route share icons, that would be bananas. like it'd be much better to orient towards the one on the platform,

</p>
<p><strong>Ryan Burgess</strong><br />
right? Because you want to make it easier for your users who are jumping across multiple application. Well, they could be on iOS, it could be an Android doesn't really matter is you want them to understand, like, I'm coming to this, oh, that share icon I get that I don't maybe I want to share maybe I don't want to, but I know what it does. You Brian, you talked about Netflix too. And we do a ton of AV testing at Netflix. And I always feel like that's a little bit counterintuitive to the design system a bit. Because you're constantly iterating on something. You're saying, Well, you know, everything's up for grabs. We're gonna constantly test something. We're gonna try something differently. But in the same vein, I think it's actually okay to have a design system where you're like, at least you have the baseline, and that you have that implemented in your code. And if it changes, it changes, if it changes every like 10 every 10 days it changes, it's fine, it gets updated everywhere, and then you can test it. But I am curious from a design standpoint, do you feel like that puts you in a bit of a box if there is this design system that saying like, I have to follow these rules?

</p>
<p><strong>Jibran Kutik</strong><br />
What they feel like we're a tenant like this is a tennis match. I want to let someone else Oh, you look like

</p>
<p><strong>Ryan Burgess</strong><br />
both of you. Like Stacy and I are maybe I'm speaking for Stacy, but I feel like I'm like yeah, like when I just have something that's told to me Mikey I can reuse this component. I don't have to recreate that.

</p>
<p><strong>Stacy London</strong><br />
It's I mean, yes, it's alright. Yeah, it's it's extremely nice as an engineer to to make a new screen new, whatever you're doing and and be able to pick from sort of this Lego box of things and put them together. It doesn't mean there still isn't designed and you have to like You know, you have to build relationships.

</p>
<p><strong>Jibran Kutik</strong><br />
I was trying to figure out how was your

</p>
<p><strong>Stacy London</strong><br />
Cheers! 

</p>
<p><strong>Oliver Farshi</strong><br />
double. That's more than one. That was plural. Yeah.

</p>
<p><strong>Stacy London</strong><br />
But I do appreciate it. And it doesn't mean that it's not malleable, but it is very nice to start with that it makes things much quicker, you can build things much quicker.

</p>
<p><strong>Oliver Farshi</strong><br />
I think, for me, it becomes almost almost philosophical in terms of when do we break the rules? And how do we think about that? So I, I come to I'm gonna come from a very design standpoint start off with so I think about the grid, and grid systems. So when, as designers, we ideally, we're building around a grid, you're laying down a grid when you start your work, not always. But ideally, you're starting and laying down around the grid. You're going to break the grid and ideally, the more effective you get as a designer, the more effectively you can break the grid in meaningful ways. But when you do break the grid, it's not Just for the sake of it, it's very, very intentional. So if we lay that out over entire design system, I think those times when we contradict the design system or go beyond the bounds of the design system, this should be very whether we're and or whether we design it should be very thoughtful, intentional moments, we should at least even on an individual basis, understand, why am I doing this? What is the purpose in doing this? What am I going to bring to this, this feature or this design or this implementation? And what am I taking away? or What am I losing or even, I like thinking in terms of debt, as well? Am I causing debt at this point? Am I causing design debt? Am I causing dev debt by doing that? Thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's what my head was like. Yeah, I don't want to deal with that later on. Definitely. That's a benefit is like not it does help avoiding debt. What are some other benefits that each of you see for I mean, design, engineering, what are some benefits we all strive for? Doing these design systems for a reason why?

</p>
<p><strong>Jibran Kutik</strong><br />
Well, I think that one of the I mean, I feel like another variation on consistency that's a little bit less, a little bit less, I don't know, maybe that feels a little self serving to me is the other side of it, which is a single voice for the user, right, a single brand voice for the user. I think one of the things that's hardest to, to tell, especially through a B testing is, what's the impact of an experience that changes from screen to screen to screen, I feel like I've run through a number of, you know, everywhere I've ever worked, every screen is slightly different, because your product tends to represent the silos of for the teams that are building them. And so in its ideal state, I think why a lot of designers want to tackle the design system is this is a way that we can have a consistent voice through our entire experience.

</p>
<p><strong>Stacy London</strong><br />
I like that you said that too. Because you're right. Like it sometimes feels like it's we're passing things over a wall. It's like, Well, we've created this for this experience, and it works really well. But haven't thought about it holistically across and saying why is this button red and this one's black, and there's usually no rhyme or reason, it was just like, well, that designer did it that way. And that designer did

it that way. I think one thing I've seen it do at Atlassian is when you're working on products and new features for a particular product, you spend the designers and the engineers spend more time on the thing that's particular to the product. So they're not having those discussions about, what is the primary button look like? Or the subtle button look like? They're, they're not spending time on that anymore, because that's already been figured out. And so it's more about like, as an example, for Bitbucket. It's like what should our diff component look like on a pull request? And why should that be unique? And what what what what matters there? And so they're having those discussions as opposed to kind of the the common stuff?

Yeah, I kind of when I start out thinking about this, if we're if we're going to build a design system, I want to start out, why are we doing this? What's the problem that we're solving? What's the goal here? I think this stuff can get really almost kind of masturbatory and kind of Like internal and people just doing the thing for the sake of doing the thing, and not not the reason beyond that, what is this? Who are we trying to help? What's the goal by doing this? And it becomes like, you know, they're an NGO, Google introduced me to this term. It's like Yak shaving. You know that idea?

</p>
<p><strong>Ryan Burgess</strong><br />
Yes. No, no, no, explain it, please. I have not heard this one.

</p>
<p><strong>Stacy London</strong><br />
But you haven't.

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like I have, but I can't. I definitely can define it. I've heard the term but I'm like, yeah, I have no idea.

</p>
<p><strong>Stacy London</strong><br />
it's like, oh, I need I need to do this one thing I need to add, I need to add a button to this page. Like I keep using the button example. But it's very easy as ever, we've all dealt with the button. But instead of the button, it's like, I imported the button and I ran the build and something failed in the build. Oh, it's because my yarn version isn't up to date. I need to upgrade yarn. Oh, wait, I like something in your operating system separating it just like you're digging deeper and deeper and deeper away from like the actual thing you're trying to do. And then eventually, like hours later, you come Back to them like, okay, there's the button. And what was I doing again? Yeah, so you don't have to do

</p>
<p><strong>Jibran Kutik</strong><br />
with the axe. I'm very confused.

</p>
<p><strong>Oliver Farshi</strong><br />
So I think it's something like in. I can't quite remember it was like in order to make a shave the oh yeah in order to make a sweater out of yaqi on you've got a if you rewind that process yes you start you probably saw you need you need a farm to the farm. You need to move out the weather. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, I have no idea where that they don't know. I need to do that. I need to figure out where the acts are. Yeah. Okay. Okay. I'm falling a bit. I don't know why I would want a yaxha sweater but yeah, okay. Is

</p>
<p><strong>Stacy London</strong><br />
that really soft and terrible? Oh, shit. Okay.

</p>
<p><strong>Ryan Burgess</strong><br />
Obviously. All right. We're gonna talk after I need more help where I get my Yak sweater. That sounds good. Now, I mean, we've kind of talked some benefits. I honestly every time I tackle I've worked at many different company is working on trying to accomplish a design system.

</p>
<p><strong>Stacy London</strong><br />
Actually, I don't know if I've ever accomplished it. So maybe that's part of the problem. There's a lot of challenges that come with trying to build a design system. And I'm curious, like, I have a lot of opinions on this. But I want to hear all three of you to is like, what are some of the challenges that come trying to implement a design system, I feel like going back to kind of the conversation about in consistent buttons throughout an experience, and I feel like we're missing a voice here, which is the product manager. And that that voice ends up being kind of these different levels, where one of them is the PM, whose voice is always in the back of my head that says, we can't make that button read that feels like an error. And then I'm like, well, but our brand color is red. So yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you work at Netflix. I mean, it should be y'all know, which I've always struggled with you. It's like, Oh, is that an error? No, it's our brand color. 

</p>
<p><strong>Jibran Kutik</strong><br />
And so then I'm like, well, but I mean, she she kind of has a point like, yeah, that experience or red kinda, I mean, if you're doing a signup funnel and you have a red button that feels a little bit out of what's a little weird. Wait, how do you

</p>
<p><strong>Stacy London</strong><br />
have that just blew my mind.

How do you deal with that? And Netflix? What color are the buttons in the signup funnel? They validation. They're orange,

</p>
<p><strong>Jibran Kutik</strong><br />
the errors are orange. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
And even to John's point, I love the fact that you brought up signup flows because like, I mean, how many people are Netflix subscribers here? That's a big amount of the room. All right, let's good, happy that you are a subscriber to Netflix. But I mean, there's not many people that are going through the signup flow. And so when you think about it, coming through the signup

</p>
<p><strong>Jibran Kutik</strong><br />
say there are not many people who are going through the signup flow.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, they already have, they're not going

</p>
<p><strong>Jibran Kutik</strong><br />
to they're not okay, again.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I know. There's people going through the signup flow. But the thing is, is like when you think about it, it's the people, all the people in here we're talking about, they're already our members, and they're like, yeah, Netflix brand is red. But if you're a new person coming into it, it's like wait a second, why is this button red and it is kind of weird. Like, it is It's a tough problem to have. 

</p>
<p><strong>Jibran Kutik</strong><br />
Well, now we're getting into sort of an interesting brand conversation that attaches kind of like design systems kind of funnel from, which is like, holy, how does your brand change from the way you talk to people who are not currently a member of your product? And then once they become a member your product,

</p>
<p><strong>Ryan Burgess</strong><br />
and that and should that change, but that goes back to the like point of that's the fence. I feel like that's where you're like, Oh, yeah, we're just toss that over. It's like, and to the user going through that. They're like, Did I just join two different companies? They don't know because it does feel different. And because it's probably different designers, different engineers. It oftentimes that's where divergence pens design system. Right? On the problem, right, maybe.

</p>
<p><strong>Jibran Kutik</strong><br />
So So going back to your question about problems, I feel like one of the most important things about design systems is when you get started, or one of the things I feel like I can expose is do you have a good relationship? between years and years? I was

</p>
<p><strong>Ryan Burgess</strong><br />
actually gonna I took a sip here. Are we having that soon? Cheers. Cheers. You're all welcome to join you everyone

</p>
<p><strong>Oliver Farshi</strong><br />
Cheers is everyone.

</p>
<p><strong>Jibran Kutik</strong><br />
But before you start working on it, is there a good relationship between design engineering and product management? Or is that something you're going to trial by fire? I feel like if you start that relationship if you start, oh, you're killing it. Oh, sorry. Let me

</p>
<p><strong>Stacy London</strong><br />
so many more cheers. Cheers!

</p>
<p><strong>Jibran Kutik</strong><br />
what have you start with a bad? I don't know another word. If you're not good at Yeah, if your partnership isn't good when you start building a design system will expose all of your your communication problems, because what you start to have is all of these people who are talking past each other about a thing that they want. I feel like the way that I've seen a lot of these starters were either design or engineering. It's never product management. But either design or engineering says we have to have a design system or a component library or toolkit. And then that group starts running with it. And a lot of the time either the designer engineer whoever wasn't involved, it gets left behind. There's never a conversation about what this is solving for both groups. And I think that's a thing that can be a really big challenge to cross.

</p>
<p><strong>Oliver Farshi</strong><br />
I think also this, this might be a personal bias. Please challenge me on this if this sounds wrong, but often I feel like design is doing the design system for the wrong reasons. an ENTJ wants to design system for the right reasons, as in ENTJ, wants a design system because it's going to make life easier to build designs and to implement things. The design design wants to do the design system, because it's fun to like, build a design system. I'm the designer. I know. No, I love you. As a designer.

I get to be creative.

</p>
<p><strong>Ryan Burgess</strong><br />
My impression on the engineering side is like I've always thought it was like designers want consistency. And so this makes sense to me. But you're saying on the

</p>
<p><strong>Oliver Farshi</strong><br />
surface level. Yeah, no, really. They want consistency.

</p>
<p><strong>Jibran Kutik</strong><br />
It's not even it's not even the fun of making instant blog post. I really hope we get into

</p>
<p><strong>Ryan Burgess</strong><br />
those mailing list theme of like, Yo, I created this shit. We're good.

</p>
<p><strong>Jibran Kutik</strong><br />
That's why we put such effort into naming our design systems.

</p>
<p><strong>Ryan Burgess</strong><br />
I appreciate the cool design names, like even Stacy mentioned Lego blocks. I'm like, Yeah, that's a good name Lego style guide.

</p>
<p><strong>Jibran Kutik</strong><br />
Didn't we have that? 

</p>
<p><strong>Ryan Burgess</strong><br />
I think we did.

But yes, like, I mean, I love the creativity in the name, that's fine. But I always thought it was more for consistency. You're telling me it's not? 

</p>
<p><strong>Oliver Farshi</strong><br />
No, I say I think it is. for consistency. I think there's a lot this has been on my mind a lot. I think there's an immense amount of ego in design. Yeah, I don't want to speak French, but in design. So I think one of the places where we'll see that arise, isn't I've had so many designers come to me and say I want to, I want to build a design system. Like what why, like, explain why are we ready? Are we at that place? Do we have where's our data at? Where's our credit at where what are the resources looking? Like? What asking the really, really tough questions. First, about why are we doing this? Why do we need this? What does it mean cross functionally? What does it mean organizationally? And then and then yeah, exercise your ego and have fun doing.

</p>
<p><strong>Stacy London</strong><br />
Yeah, because it's not cheap to do it is not cost free, you have to have a dedicated design team that is working on building that thing, you have to have a dedicated engineering team that is building those reusable components. And they have to be staffed appropriately, they have to be able to not only build the thing initially, but then support it and maintain it and change it over time. to think strategically about it to expand it. And all of that takes quite a few people that so your company has to be ready to put a decent amount of money towards it and and be all in on it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's actually one that I've always struggled with is like how do you actually create it? It's like, I think we can all sit here and say, Hey, this is great. Let's do this. But how do we actually create it? I think of two approaches I always thought on the engineering side is like you stop work on on actually shipping features. which you mentioned PMS. I think both of you mentioned that. Okay. Well, rpm is going to be down for that we're, we're like, we're not shipping any features for the next six months, because we are going to build something, this toolkit that is going to help us in the long run. So that's one approach is you stop all development or all designing, and you just focus on this, or depending on resources, sorry

</p>
<p><strong>Oliver Farshi</strong><br />
to interrupt. Yeah, no, I like I'm thinking we might over a Kiva. I'm really thinking, what happens if we outsource? Because we have a very small internal team, outsource the design system, and we just manage directing it internally. Because otherwise Yeah, we're gonna that's an

</p>
<p><strong>Ryan Burgess</strong><br />
interesting point, too, is like you could actually resource that like, set the direction and let someone else do it.

</p>
<p><strong>Jibran Kutik</strong><br />
Well, that terrifies me.

</p>
<p><strong>Ryan Burgess</strong><br />
It does too. Like anytime you add contractors, like you're now managing those people that are outside of your world to it. I feel

</p>
<p><strong>Jibran Kutik</strong><br />
like when I would get I have a number of my designers sitting here in the audience, but I feel like What I get from all of the designers on my team, when we outsource is why don't I get to do that fun work,

</p>
<p><strong>Oliver Farshi</strong><br />
which is the ego. That's the thing I'm talking about.

</p>
<p><strong>Jibran Kutik</strong><br />
So you're just you're just like, man I don't care about your

</p>
<p><strong>Oliver Farshi</strong><br />
big thing for me is like leave your ego at the when we actually start doing the work. Maybe that's normal for other people, but especially having a bunch of the work I've done is humanity at what I call humanitarian design. As in when you think you design if you fail, people can be hurt, people will be suffering if you make a mistake. And so it becomes really, really important to encourage collaborators to really like leave your ego outside of the door because we're trying to help people now. And so I've kind of taken that into less high risk situations. But I still feel really strongly about that.

</p>
<p><strong>Jibran Kutik</strong><br />
Well, I feel like the other side of it, the less ego driven side is the and maybe I'm over over indexing on a design system is related is a brand is Is your product and your brand and product? But how do you kind of get a con? Maybe we're getting a rabbit hole now but like how do you get a contractor or an outsourced person to really deeply understand that? what you stand for relative to the people who work for you who like live and breathe in every day?

</p>
<p><strong>Stacy London</strong><br />
Right? I mean, that's that's a hard question.

</p>
<p><strong>Oliver Farshi</strong><br />
Really difficult. That's a

</p>
<p><strong>Ryan Burgess</strong><br />
conflict That's tough. And I feel like then again, someone's got to manage that to like, someone has to spend the time on there. And and I think another methodology that I've taken is, oh, well, every new feature, let's just implement this style guide or design system. We'll just start doing that way. It works. It takes forever. And then there's those old dusty corners that you're like, Oh, yeah, we didn't touch that. Because nobody, we don't really spend a lot of time on there. And so then that never gets updated. So I don't that doesn't work that well, either. It's really a hard problem. I don't have the perfect solution. I wish we had like, all the time in the world to solve it. And I'm curious like What is the right solution? If you're to create a design system today, you look at your codebase. You look at your designs, and you're like, we need to create more consistency. We need to build some great relationships between design and engineering. Cheers. how do you do that? 

</p>
<p><strong>Stacy London</strong><br />
I think, at least from an engineering perspective, I feel like it's more it's easier than ever to actually create shareable things. I've been doing stuff for the web for quite a long time. And it was quite difficult to actually write something that was easily shareable. And so we have things like react as an example makes it easy to write a component and an isolate that stuff to that component. We have MPM, we have places to publish things that could be shareable very easily. So now more than ever, it is quite easy to make something that could be shareable. And so if you can start tiny, I mean, do the button like, it doesn't buttons when they can be very low, low risk, low maintenance, like there's that terrible thing within like a couple lines of code and publishing and then consumption?

</p>
<p><strong>Jibran Kutik</strong><br />
Well, I think the other side of it is how do you leave it open? Like to allow for more for continued innovation? I think one of the biggest challenges that I have with the design system is, does it become a crutch that either design or the engineering team can't design without it? Like one of the things that scares me the most is when a design team is now wireframing. In the design system? Are they just dragging and dropping components from the light? What is that scare you? Because I think that it very quickly limits you to what exists already. And I think one of the things that, you know, I think as designers, we've spent the last, I want to say at least 10 years, trying to get away from being responsible for the pixels and trying to get more responsible for the experience. And the thing that that's always frustrated me about design systems is that their designer is saying, after all of that work of saying, We don't wanna be responsible with a pixel saying no, what really matters is the pixels. And so I think it's okay to build a design system that helps you get away but I think you need to get to this is to help us get away from the pixels and it can't just be letters Drag and drop components and use that to build things because you can't get stuck in what you thought of a year ago isn't necessarily going to work for what you need to build

</p>
<p><strong>Stacy London</strong><br />
now, or the or the argument from the engineer is going to be, oh, that it's deviating from the components that I have available to me, that's going to take too much time. And then you're like, well, we need to ship this by, you know, certain time period. Oh, and then balancing those trade offs and trying to have discussions. I feel like now you're saying that designers

</p>
<p><strong>Jibran Kutik</strong><br />
need to build a strong relationship with their

</p>
<p><strong>Stacy London</strong><br />
It's like a relationship that's really about

</p>
<p><strong>Ryan Burgess</strong><br />
It's weird how that works. Cheers!

</p>
<p><strong>Jibran Kutik</strong><br />
Nope, I think that is a really, there is an interesting thing around I think this is the thing that I've learned kind of as my career has gone on is how much designers need to understand the core of what engineers are doing. I think a lot of designers will start their career and they're like, I don't care about HTML. I don't care about CSS. I don't care about the tools that that engineers are using. And the more that a designer can understand those tools as quickly as possible, the more they can have a real conversation with their engineering partners, and the more they can understand where their engineers are coming from it That empathy with that partner, that I think that's how you build something, it's actually useful. It's not it. This is a tool that serves both of us. It's not a thing that one of us is going to use to block the other one when we don't want to do something.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it goes both ways, too. I think like, I love that you said that. But I think it's also like Gibran if you're You and I are working on building a feature. I look it is like, we also have to talk about like, I have to share that information with you as well, is to try and help shape that as like, here's why that mean, may or may not work, or Hey, okay, that works on mobile. But how does that scale up as we talk about all you mentioned, the grid is like, how does that scale up to desktop and really showing and demonstrating that and talking through that? I think it goes both ways. It really is operation? It's it's we're good.

</p>
<p><strong>Oliver Farshi</strong><br />
But jumping back to that innovation point. I think there's something there that kind of bothered me a little in terms of, I don't know that a designer designing with it like dragging and dropping elements of the story. Is the failure mode for innovation? I think

</p>
<p><strong>Ryan Burgess</strong><br />
you think it's like you're not being able to innovate or

</p>
<p><strong>Jibran Kutik</strong><br />
no, I think you're getting to a really interesting place that talks about that, that I started thinking about is the age of your company or the maturity of your product is a really huge component of when to do this and why. And maybe this is a little bit of my, I don't know if bias is the right word, but maybe a little bit of my biases, I'm working in a much newer company than than all of you. But a lot of the experiences that that route, will, we'll design over the next hopefully, long period of time that we continue to exist, are things that we haven't thought of yet. Like there's most of the stuff that we're building now is is probably not going to exist in a few years because we'll have completely reinvented it, we'll be building completely new things. And so there's a really huge gap right when I worked at Netflix, we you know, making the signup flow better was a huge win for the company. But it was still a signup flow, right? Like it was still the same thing. And I think we did a really amazing job making it better for our customers. It wasn't about inventing an entire new way for people to sign up, it was making signup better. Whereas, you know, now that I'm working in a much younger company for the first time in my career, so many things that we're doing are going from zero to one. And so our design system isn't necessarily going to serve the products. We haven't built yet

</p>
<p><strong>Oliver Farshi</strong><br />
to something that we were I think I agree with you 100%. But I think the failure mode for innovation isn't in terms of people dragging designers dragging and dropping components, or enjoy being able to use those components or not, I think it's something more philosophical in terms of the designers approaching the work they do and using the design system in such a way that they can identify though the delta between what is possible today, and what could be possible given question mark

</p>
<p><strong>Ryan Burgess</strong><br />
given right like I think it's like why recreate that? We come back to the button, but it's so easy, the button inputfield it's like just take those components and put them together and then create something that's abstract that You're like, this is brand new. But it's like some of those pieces, you don't need brand new pieces to test that hypothesis

</p>
<p><strong>Jibran Kutik</strong><br />
you really don't like I think that's where like the button ends up being kind of this red herring as part of this conversation, right? Like, the button is an easy thing to pick one and say, all right, our corner radiuses are this many pixels, and that's good. Like, you're never really gonna need to change that you can you

</p>
<p><strong>Ryan Burgess</strong><br />
can change it, you can change it 10 times, I don't care. 

</p>
<p><strong>Jibran Kutik</strong><br />
It's never gonna matter. 

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, on the engineering side, I'm like, I just want one consistency, where I'm like, I can call that I'm like, Yeah, cool. But I got rules around that. 

</p>
<p><strong>Jibran Kutik</strong><br />
The other side of it is, is say, so for Netflix, the video player is a great example of, that's a place where you want to be able to keep innovating, right? Like you don't want to say this is our style guide for a video player. And I think that's kind of the whereas ours is Yeah, I dress to your

</p>
<p><strong>Ryan Burgess</strong><br />
point on the user aspect, too, is like, do you want to change that every time like that could be difficult to for the user if you're constantly changing that that could be that could be hard. I mean, I saw the hands in this room. They might be like, Oh, man, they keep changing the player. There's a you you are gonna have a cohort though you're not going to change it for everyone. So there's only going to like them in the corner. Yeah, change it. Only like five people up front who sat up front. 

</p>
<p><strong>Oliver Farshi</strong><br />
Yeah, the up from you get the new stuff everyone else gets. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
So you're right. But I mean, we have to think about those things is like, how is this affecting our users? I think that's important, too.

</p>
<p><strong>Stacy London</strong><br />
Maybe to help this conversation a little bit, I think in terms of like, still allowing for innovation in a design system. One thing that I think that is kind of cool about what Atlassian has done is that we have our implementation, the design system called Atlas kit, it used to be that it was just the design system, it was just one thing. But now, individual products can contribute back to it. It always has been the case. But there's now like sort of side buckets for it. So you could say, for the bucket as an example. We need this component that is how to display code in a pull request. we iterate on that and it's not it's official. Some of the it hasn't gone through some of the same vetting as some of the things that are truly going to be shared across everybody. But we're still putting it in the same repository, we're still putting it in the same place that everybody can see. And so maybe like another product spins up, that's like, Oh, I want to I want to show a diff. I don't know why. But you know, they might, we're going to use it, and then they start contributing back to it. And maybe it becomes part of the base set of things. But it allows for innovation in a way that's like not so restricted to the like, very specific definitions of a design system, but still lets people see things that are being innovated on. And then they kind of iterate into the main thing, which I think is kind of cool. Very cool.

</p>
<p><strong>Ryan Burgess</strong><br />
I want to start make sure we leave room for questions to the audience. But before we go into that, I feel like we talked about this as like, there's there's a lot going on here. What can you all give advice for we've all worked in. Like I said, I don't know if I've successfully accomplished this, but we've worked in companies where we've tried to to either implemented design system or we have, what advice would you give someone who's like, I'm starting from day one? How do I do that?

</p>
<p><strong>Jibran Kutik</strong><br />
I think that I think the biggest thing is like, lean into flexibility, like, focus on, what's the problem that you're trying to solve? Why is that problem important? I think these are the things that every designer, every engineer, every product, everyone working in text as if this is what they care about. But a lot of the time we forget it, and we actually start building something. And I think if you don't start with this as the problem we're trying to solve by building this, it's really easy to go on all these wild goose chases. I'd say like, write it down, make like, I love Google documents. And maybe that's my Netflix experience. Yes. Probably from Netflix, a confluence from Atlassian.

Yeah, we use Confluence and then we switch. I shouldn't Sorry. I'm just I remember those old Confluence days.

</p>
<p><strong>Oliver Farshi</strong><br />
We use Confluence Akiva.

</p>
<p><strong>Jibran Kutik</strong><br />
Like seriously, I think it's really important to like when you start working on mean anything but like designs. Have something as cross functional as a design system, something that that like leans on how good your relationship 

All  
Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
That was well suited.

</p>
<p><strong>Jibran Kutik</strong><br />
Write down the problem you're trying to solve at the beginning. And make sure you you continue to address that, like, go back to it. Yes, make sure everyone agrees with it and continues to agree with that check in on it. Is it still real? Is it still true? I love that. I

</p>
<p><strong>Oliver Farshi</strong><br />
think that's great. I kind of want to build on that. I think maybe mine applies to all of design, but maybe especially here with design systems. Just and I'm just speaking to designers here. I don't want to speak to and leave your ego at the door like remember why why are we doing this thing? What was the reason that we chose to do this? Why are we using this organization's resources on this particular project? How is it going to help my peers How is the the eventual outcome of the project and cross functional peers By the way, not just InDesign? How is the eventual outcome of the project going to help people who Use the things that we made, leaving your ego at the door means becoming more sensitive to all of the different factors, all of the intersectional factors that will play into the work that you're doing and make it make you remember why you're building the thing, initially, who you're building it for, and make you use the resources that you have the infrastructure, the people, the technology may use that in a more responsible way. This isn't an exercise in creativity. This is really an exercise in a functional object or a functional artifact that the team will use going forward to kind of superpower their work hopefully for a very long time.

</p>
<p><strong>Stacy London</strong><br />
Wow, that was very well stated.

</p>
<p><strong>Ryan Burgess</strong><br />
No, I'm like plus one, that one.

</p>
<p><strong>Stacy London</strong><br />
Your original question was like how you get started, I think. I like what I like about what I've seen at Atlassian is that idea of what I mentioned before where it is intuitive. all open source external open sources, it's externally open source well, to make sure that there's always that conversation happening. It has to be like from the very beginning. It's, it's the description of what something should be and then the engineering implementation of it and that feedback loop always happening. And in making that important so that there's never a one way it's never a one way conversation of you the design system is this and you shall use it like this. It's like no, take feedback from the people implementing the design system and the challenges that they're experiencing, trying to consume it and making sure that it's always being heard and listened to and getting better

</p>
<p><strong>Ryan Burgess</strong><br />
thing. My last comment because it's, it's hard you guys all give great advice. I think there needs to be clear collaboration between design and engineering

</p>
<p><strong>Stacy London</strong><br />
a relationship. Yeah.

</p>
<p><strong>Oliver Farshi</strong><br />
Got it.

</p>
<p><strong>Ryan Burgess</strong><br />
Thanks, Stacy. Cheers, but I think that's a really important for like alignment between the two teams. Because I have seen it where design is like, yes, let's create a design system. And then engineers like, yeah, we don't care or vice versa. And I don't think it works unless you're both bought into it. So I think that's really important is the collaboration.

</p>
<p><strong>Stacy London</strong><br />
Yeah. To be like really strategic about it. So like you, if you're not, it ends up being these one off changes. And so eventually, like, as an example, for a component that you've built, the props become 20 props later. Oh, it's very flexible. It's an incredibly flexible component, your lady thing?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Yeah, no, you're right.

We can do so many things. You're like, wait, Yeah, why? So this is a point where I want to open up to the rest of you is to the audience, kind of questions you have about design systems engineering or design related. 

</p>
<p><strong>Audience question</strong><br />
I'm a front end engineer with good studios. And I come from a background in design. So one of the things I feel like I struggled with the most was how do you overcome your brands, like difficulties for accessibility, especially with engineering and designers.

</p>
<p><strong>Ryan Burgess</strong><br />
So I think actually, word design systems work really well for accessibility, because you're actually thinking about the problem is like, it goes back to the consistency, where we can think about that problem. So it's like whether it's a button, it's form inputs, we're all thinking about that is like, what does it look like? How does it interact? You can actually really embed accessibility right in there and actually think we didn't really talk about that. That to me is actually a benefit is accessibility is ends up being better for it. I don't know if that helps answer the question. But I think design some end up helping it

</p>
<p><strong>Stacy London</strong><br />
as an example at Atlassian for Atlas can't one of the engineers on on that was incredibly passionate about accessibility. He's really good at it. And so sometimes it might be hard to like, convince people to hire someone who's really good at that. At like a product level. Maybe Like, all but there's one person for the entire company. Okay, cool if there's one person for the entire company that's really, really amazing and deep in accessibility for front end, that they live on the team that's building your design system, and then everyone gets it for free. That's huge. That's so huge. It doesn't mean that they everyone still doesn't need to learn about and understand it, but it's built in and you get it. And then it's like, users get it like and the users guilty.

</p>
<p><strong>Oliver Farshi</strong><br />
It's massive. I actually go a different way. No, I agree with both of you. But I go, I go a different way. My response, which is, I really I love going to therapy. And I love a really different way with my response.

</p>
<p><strong>Ryan Burgess</strong><br />
Are you like drink? 

</p>
<p><strong>Jibran Kutik</strong><br />
What What is this about?

</p>
<p><strong>Oliver Farshi</strong><br />
Going to therapy? So so something I'm really into is what why do we use the language that we use? Why did we say something the way that we said it? And I know it's you talked about overcoming the brand. And so I would almost This is a completely different answer, but almost start there. Like if We're already whether we design orange, if we're already in a position where we're struggling against our brand, we might, we might not have placed ourselves in the ideal position to build on top of or innovate with the brand. And I do think it's actually in this case, it's even just in a philosophical adjustment in kind of saying, Wait a minute, I'm in this empowered position to move with the brand to grow the brand to innovate with the brand, and build on top of it, as opposed to I am struggling against the legacy of what has been built. So I'd almost nudge you to kind of think of it in that way. I don't feel like I have

</p>
<p><strong>Jibran Kutik</strong><br />
anything. I feel like y'all covered that really well. Thank you. I don't feel like I have anything. Like, that's a good thing. I could just say the same thing. You all said. All right. That's useful.

</p>
<p><strong>Ryan Burgess</strong><br />
hopefully that was helpful. 

</p>
<p><strong>Audience question</strong><br />
Hi, I'm Sarah. I'm one of the designers. 

</p>
<p><strong>Stacy London</strong><br />
I like your tattoos.

</p>
<p><strong>Ryan Burgess</strong><br />
We can talk about tattoos later. 

</p>
<p><strong>Jibran Kutik</strong><br />
We have a whole tattoo conversation. Yeah. 

</p>
<p><strong>Audience question</strong><br />
Alright, so one of my questions is if you actually touched on it a little bit, and it was one of the things and the last company I worked for, we had just implemented our design system and we had a component and it had probably like 20 different flags on it that it was like this massive thing and what do you what as an engineer, what do you do in that situation? Like, do you start breaking it apart? Do you just leave it is like it. Like we always had a really big struggle about what to do. It was a card component, which you know, the cards sometimes have flags, and sometimes it needs different texts, and sometimes it needs different images. And we were just like, this one card will serve 30 purposes, but it's great. It's such a good because it's

</p>
<p><strong>Ryan Burgess</strong><br />
definitely a problem we always deal with.

</p>
<p><strong>Audience question</strong><br />
It's always that one component component, and it's 

</p>
<p><strong>Ryan Burgess</strong><br />
unfortunate it's not just onecomponent either. Never all components have this problem. 

</p>
<p><strong>Jibran Kutik</strong><br />
How many cards do you all have?

</p>
<p><strong>Stacy London</strong><br />
Stacy's gonna add? Atlaskit could has no card component and so Bitbucket actually We built our own cart component. So we don't have that quite problem. We don't have that problem with our cart component. 

</p>
<p><strong>Ryan Burgess</strong><br />
But good for you. How do you not? 

</p>
<p><strong>Stacy London</strong><br />
I mean, well, because only big buckets using it right? It's not all the products and everybody trying to add all of their various use cases to it. I think if you're at that point, I think you have to start looking at it if you can, I don't know, if you do get stats, do you get metrics at all about like, how it's being used and consumed? That's probably very sophisticated. I don't know. Like, I i think i think of it that way. It would be really, really interesting to have some sort of metrics or stats about how this component is actually consumed. What props is it using and why like, what's the most common, like combinations of those things that are being used, and then maybe like, step back and, and say, Oh, actually, like of these 30 things that are possible, only three of them actually are used very frequently. So let's parrot back, which is a hard thing to do, because you have to it's deprecation. And that's not easy, like products don't want to refactor. They're like, Oh, deprecations terrible. But if you can show maybe some data around it to say like, oh, like, there's really only these three patterns. And then and kind of pare it back that way, I think would be an interesting sort of engineering way to approach how it's used.

</p>
<p><strong>Oliver Farshi</strong><br />
I also I really like that a lot. And I don't think it should just be an engineering way. I agree with you so much. And I think I'm a big fan after I went to Google. And I learned, this is so much data available to you, you can take so many signals in to make the decisions that you're, you're making around design, I really shifted in a big way to whether we call it data driven design or evidence based design, that angle so I would really look at it that way. Like I just a big, big, big plus one, two, that yes, we should be as designers, we should be super responsible. Let's go And get data to back whatever decisions that we're making and to inform our choices.

</p>
<p><strong>Jibran Kutik</strong><br />
I like that. I don't think I think I'm getting way far away from the question. But I think this is a really great opportunity to plug one of my favorite things I learned. I'm very digging too deep into the Netflix while but one of the things that I loved the most that I learned there was this concept of a barnacle. And so, this idea of I don't know if you all talked about this before on your podcast barnacles. So this was I mean, tech barnacles

</p>
<p><strong>Ryan Burgess</strong><br />
is probably come up with maybe not, not today.

</p>
<p><strong>Jibran Kutik</strong><br />
I think that this term was coined by Eddie Wu, I'm pretty sure that he's the one who's who I learned from, I think he's the one who he's the pm and Netflix. It's been a while since I work there. But this idea of barnacle is basically this relentless pursuit of like things, making sure that things that exists in your product are still actually useful. And so a lot of a lot of companies will AB test something and if it's flat, they'll roll it out because they like it. And at Netflix, we were really rigorous about if it's not a positive, if it's not a win, we don't roll Went out because we didn't want to have, you know, a flat test means that you're now maintaining that the result of that test. And so I think that that touches on this or it's the thing that I really I take really seriously is like, let's not ship anything that's not actually useful and measurable, useful. And let's cut everything that's not so you going back to what you asked are like, let's cut everything that doesn't actually deliver value. And that, to me has been a thing that I've held really, really dear inside like, it's always in the back of my head is Eddie's voice like, is this a barnacle? Is this a thing that's actually beneficial? Or am I just trying to keep this in? Because I really like it. How do I have that that rigor around

</p>
<p><strong>Stacy London</strong><br />
it maybe like gathering data is such a like, also, like privilege thing, like if you work for a very big company that has the capabilities to have all these kind of metrics and systems that you can use to analyze like, you might be looking for a small place that doesn't have that capability. So maybe just search through your codebase you know,

</p>
<p><strong>Jibran Kutik</strong><br />
all I would probably would say to that is like if you're working at a small company, and you're not collecting data, make an effort to collect That data get make that a thing that you care about, someone needs to care about it. Because like you will be, hopefully you're gonna become a big company, and you're gonna want to run a B test. And you're gonna want to know what your users are doing. You need to start from the beginning.

</p>
<p><strong>Oliver Farshi</strong><br />
But also, it's not. It's not just the the stats or the metrics built into the product, especially when you're a designer, you should ideally I don't like using the word should. But ideally, you have some kind of you're building your capacity for UX research or ethnography or something like that. Ideally, you're making decisions based on some kind of evidence, or recommendations based on some kind of evidence that you can gather somehow, whether it's desk research, or making phone calls, or literally, we call it cafe studies at Google, but walking out onto the street and just asking people questions, like I love that go get data. There are people all around us.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, one more question. 

So my name is Zack. So my day Design question would be, how much? Or how little Do you use from your competition in your space? And how do you use that to either decide what you should do what you shouldn't do? And kind of like going back to like share buttons where you want that familiarity, but you also want your brand to be unique. So like, how do you use that in your competition? 

</p>
<p><strong>Jibran Kutik</strong><br />
Oli I feel like you keep saying my name and asking me to answer first Gibran Do you think you should go for that was tricky.

</p>
<p><strong>Oliver Farshi</strong><br />
That was nicely done. Um, so I think ideally, we're looking around at the work other people have done and trying to build on what we what our best guess, is a best practice, basically. So if you see, there's a reason just to make a really broad sweeping example that we'll all know, there's a reason there's a certain kind of setup or funnel on amazon.com. There's something there that is working for them that is within that funnel that perhaps we can learn from and then a great way this almost goes to research agreement. Way of verifying that, perhaps is to then go and look at, I don't know, walmart.com and every jet dot, I think jet.com was shut down, but a bunch of other competitors and so on. No. I think it's like a white dove. So my point being at the same way I go and look at what what are the apps that are doing the thing that does the thing we want to do already? And what are the ones that really resonate with us and really seem to get me to the thing that I want quickly, and which are the ones where I feel a lot of friction, as I'm moving through that journey. So I think, I don't think that should be the only data point. But that there should definitely be a point of reference go and look at how other people are solving the problem that you're trying to solve.

</p>
<p><strong>Ryan Burgess</strong><br />
A little bit on top of that is like, I also don't know that just because like you mentioned, like Walmart or Amazon. Something might work. differently for each of those companies. And so it's like, data is important. I'm a, I love data, like I love it. I mean, part of the reason I joined Netflix is because we do so much AV testing, you get data informed decisions. And and part of it is really understanding of like, what works for this specific use case, what works for this like user, at this time, this user might be a person who goes and shops on Amazon, it might be someone who goes and shops on Walmart, they might sign up for Netflix, but they don't necessarily always work. So like, if I worked at Amazon, and like, hey, this really resonated with our customers. And then I go join Netflix, and I'm like, Oh, yeah, this really worked. It doesn't necessarily always work for that particular customer and to me, so like, that's where the data informed decisions really come into play. And so I love that you brought it up, you're like, yeah, data informed decisions. And I'm like, yeah, that don't necessarily work. cross each.

</p>
<p><strong>Oliver Farshi</strong><br />
I think you're right. And I think the way the way that we talked about data, at least at Google was signals. Yes. So this is that's one signal. Yeah. And can we find other signals that verify or contradict the the assumption or the direction that we think we're going in? So I think also knowing everything isn't always true, even if we see it to be so

</p>
<p><strong>Ryan Burgess</strong><br />
open to testing in your own world?

</p>
<p><strong>Jibran Kutik</strong><br />
Yeah, I think the other side of it is, is I mean, the way that I feel like designers talk about the room we use, we're very reserved words we use with competitive research. And I think that like your decisions should be driven to some extent by competitive research that you're doing. Like you should be looking at what your competitors are doing. Why do you think they're doing it and whether or not that works, and I think depending on the age of your company, you'll be able to like there were a number of things at Netflix where I saw, oh, Amazon does this, Should we try it? Because I trust Amazon. I believe that you know, if there's a company I know that AV tests, it's Amazon. And so they were doing something I figured that must work. And I would love to try that. And then I get to see like, does this work for us. But if you're a younger company, there's still a ton that you can learn from what your competitors are doing, especially if you're competing in a space that has incumbents, right? So, you know, for us, we're an insurance company, it would be it would be bananas for me to say that, like, nationwide doesn't know what they're doing. Like, clearly, they're gonna know, they know how to sell insurance, they were doing it for, I don't know, 100 years, maybe, maybe more, maybe less a long time. So I obviously want to look at them and say there, there's something they're doing, it's working and what can I learn from that? And then the the value of that is, as a competitor to those companies that can I can learn based on what they're doing well, how can I leapfrog them and make it better, because I can move faster than they can one

</p>
<p><strong>Stacy London</strong><br />
of the things that some my my partner's a product designer, and I'm an engineer, so we have very nerdy conversations all the time about how we build things and why. And some of it is like, don't innovate on the things that are the commonplace things. So like the share button I think someone mentioned Don't try to innovate on that, like, spend your time somebody be consistent. Yeah, that consistency good. They're like there's something else that your product can do that is not that like, obviously, make it easy to share. But like, the thing that you're building is probably obviously much more important. And there's your energy is better spent figuring out how you can make that thing useful, not just, you know, making the share button more

</p>
<p><strong>Ryan Burgess</strong><br />
before we end the episode. I want to thank both Gibran and Ollie for joining us. We often ask Pete our guests work and people can touch you because they got questions. They're gonna ask you some great questions. Jibran, Oli, where can they get in touch with you?

</p>
<p><strong>Jibran Kutik</strong><br />
I guess I'm most accessible on LinkedIn. I realized that most people are going to say Twitter. I have a Twitter 

I was gonna say I think you do. 

My Twitter is my is my first initial and last name. So <a href="https://twitter.com/JKutik">@JKutik</a> but you can also find me on that. LinkedIn, I'm probably the only Jibran Kutik on LinkedIn. So feel free to look me up and send me an invite. I would love to talk. If you tweet at me or if you send me a DM on Twitter, I'll get back to you eventually. Probably, I hope. Go through Ryan. Do you want to get in touch? If you want to get in touch with me send Ryan a DM and he'll text me 

</p>
<p><strong>Oliver Farshi</strong><br />
go through Ryan Ryan will handle all of my media inquiries.

</p>
<p><strong>Ryan Burgess</strong><br />
Man, that's what a lot of pressure on me All right, fair, fair.

</p>
<p><strong>Oliver Farshi</strong><br />
Also, I think also LinkedIn. For me, I'm just like you I'm the only Oli Farshi in the world is no others. So go through LinkedIn. Or if you really, really want to get in touch with me, you can go to my website made by oliver.com. And I think my emails on their recruiters seem to find my email. Thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you both for joining us. It's been a pleasure having you. We may as well. Same thing, our means your bronze already telling you all to contact me. So Stacy, where can people get in touch with you?

</p>
<p><strong>Stacy London</strong><br />
I'm on Twitter at <a href="https://twitter.com/StaceyLondoner">@StaceyLondoner</a>.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm on Twitter at <a href="https://twitter.com/Burgessdryan">@Burgessdryan</a>. I You can also find us if I saw, like a couple hands that have listened to podcasts. But if you're wanting to listen to podcasts, you can find us on what's it like to listen to podcasts on Spotify, iTunes, Google play, whatever it is, but you can also follow us on <a href="https://twitter.com/frontendhh">@frontendhh</a> on Twitter, and we have <a href="https://frontendhappyhour.com">FrontEndHappyHour.com</a>. Any last words before we end the episode

</p>
<p><strong>Jibran Kutik</strong><br />
two I think two things. I feel like I have like three sequels that we need to work on. We'll talk about that later. 

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, man. There's so many sequels. 

</p>
<p><strong>Jibran Kutik</strong><br />
And and also just I just want to say one more time relationships

</p>
<p><strong>Stacy London</strong><br />
relationship. Cheers.

</p>
<p><strong>Jibran Kutik</strong><br />
Oh, and thank you all for coming out to Columbus. I appreciate everyone coming out to visit. I'm excited tonight we're going to see the best The contest has to offer to be great. And also thank you to Kevin Rapp, our engineer the right word for what he's doing right now. He's killing it over there. Everyone can hear us. Thank you, Kevin.

</p>
<p><strong>Ryan Burgess</strong><br />
Great, thank you all for coming out.
</p>
  
  `;
  return transcript;
};