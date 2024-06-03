module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to another episode of the front end happier. This is episode 26. And we are joined by a special guest Julie Horvath, a design lead at Apple. Today we'll be discussing how designers and front end developers can collaborate together better. Julie, can you give a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?


<p><strong>Julie Horvath</strong><br />
Sure. So again, my name is Julie Horvath. I have been in tech for about seven years now Coming up on eight, I guess, primarily worked at startups. I was actually a coder before I became a designer or would call myself a designer. So I wrote CSS back in the IE six days. Very happy to be in the future. Yeah, ouch. I'm very happy to be only supporting Safari and Chrome these days. So I lead a design team for an org that builds developer tools for infrastructure engineering, at Apple, and we work really closely with the development team, primarily front end, we use React js, so I'm pretty familiar with with the stack. I'm also a developer. So I'm a lead designer, but also, I ship a lot of prs. And I'm really into large scalable CSS that's maintainable obviously. So really familiar with that type of technology. Looking forward to chatting a bit about it today. So my beverage of choice is specifical beer. I'm from Hayward, California, Oakland, Oakland, Hayward Reyes, I'm half Mexican. I'm Chicana. So my friends and me grew up drinking Pacific or modelo and tequila. And so my happy place is Pacific Island. That's usually what I ordered a bar regardless of who's judging me.


<p><strong>Ryan Burgess</strong><br />
And that's what we're drinking today.

</p>
<p><strong>Brian Holt</strong><br />
That is our drinking.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, before we go too deep in the episode, let's go around the table and give a brief introduction of today's panelists. Brian, you want to start off?

</p>
<p><strong>Brian Holt</strong><br />
Yeah. My name is Brian Holt, and my job is to arrest designers at Netflix.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London, and I'm a front end dev at Atlassian.

</p>
<p><strong>Derrick Showers</strong><br />
My name is Derek shires. I'm a senior software engineer at LinkedIn.

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix,

</p>
<p><strong>Augustus Yuan</strong><br />
I guess this year in front end engineer at Evernote.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm Ryan anklam. I'm a senior software engineer at Netflix and I actually drank way too much modelo last night. Pacific was a nice change.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. And each episode of the front end Happy Hour podcasts we like to choose a keyword that if it's mentioned in the episode, we will all take a drink. What did we decide today's keyword is? collaborate, collaborate. So if at any point, we all say the word collaborate, we all take a drink. Alright, let's get started. Julie, you've explained a little bit about what you do at Apple, I'd be interested to know how did you get into design? Especially if you started out doing development?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, sure. So I actually was really broke. And in college at USF in the city, what I was thinking going to a private school without money, you have no idea. And so I randomly replied to an ad at a startup for a data entry position. And then when I got there was actually a startup called Yammer, it was in their early days, when they just moved up from LA was about 12 people. That was my first experience being exposed to the technology industry, my background, you know, I went to some pretty not great a public schooling, then they didn't really provide any sort of education around computer science or design, or I didn't really know that that was a career option. And so when I got to gamma, and I saw sort of all the mobility that you could have in this industry without needing you know, a ton of education, or you can be really self taught, I kind of fell in love with it. And I also just have always been a nerd. And so I picked up some front end technologies, I had a lot of really awesome mentors at Yammer, who taught me some really great things about HTML, CSS, I played around in CSS and garden a

</p>
<p><strong>Ryan Burgess</strong><br />
whole bunch. Zen Garden was amazing.

</p>
<p><strong>Brian Holt</strong><br />
still around, yeah. And I ended up just teaching myself how to write CSS, and then eventually became really, really drawn to the design side of front end implementation, I found more satisfaction in making something functional and beautiful and usable than I did in the backend code. So I gravitated more toward the front end found where it could be valuable. And that ended up being in a design role.

</p>
<p><strong>Ryan Burgess</strong><br />
how closely do you work with front end now, now that you're actually designing how to work with front end developers

</p>
<p><strong>Brian Holt</strong><br />
too closely? Is my answer to that? No, I work with front end developers every single day. Actually, this is funny, funny anecdote. I'm actually being kicked out of the codebase right now. Because I was too active

on every book in your prs. Yeah. Well, it's actually

for the benefit of the team. You know, I think when you have a designer who is willing to sort of go in and clean things up and add polish, it kind of people tend to learn to rely on you to do that instead of strengthening that muscle themselves. And so part of the exercise me and my engineering partner are going through right now is making sure that You know, developers can ship with great Polish, and they don't have designer to go in and clean it up. And that they can, they can get something as close to design spec as they can. And a part of that process, which I found really interesting is documenting, you know, what do I, what's the checklist I go through for Polish for front end? devs? Like if you're about to ship a feature, like, what are the elements that I want to go through and look at? Like, are the border radius, right? Is the border color, right? Is the, you know, are we using the right things from our style guide. And so a lot of a lot of my job lately has been to kind of aid the developers in growing in that way, and being more of a resource to them than a crutch, I guess. And it's great. Our engineers are so smart. And they're so open to learning even from a designer. So yeah, it's been a it's been a really good experience. It's hard. Because I love code. I love living in code. I love designing in the build. So it's a little difficult, but it's the best thing for the team. And so that's definitely kind of where we're headed.

</p>
<p><strong>Ryan Burgess</strong><br />
What do you think are some important traits for a front end developer to work with a designer?

</p>
<p><strong>Brian Holt</strong><br />
Humility? Yeah, definitely.

open to criticism. You know, I mean, I think the hardest, the reason that I think I'm so willing to go in and fix something up for Dev is because I feel like, you know, your guys's jobs are, are hard enough. And I'm like, you know, if I'm picky about something, it's my problem, but it's really a team effort. And so, I think that in terms of it being sort of difficult, it's really hard to transfer the knowledge of like, you know, you kind of have to train your eye for pixel perfection, it's not something that you're born with. And it's not something you develop, unless you've been held to a high standard, you're in your career as a developer. And a lot of people, I mean, a lot of jokers, you know, we're lucky, we're friendly. And we we obviously have to deal with design on a regular basis, but a lot of developers just don't have that experience. And so developing that, you know, I like to call it like not being good or bad at something, but like really just needing to develop that muscle a little more, and train your eye for certain things is really good. And one exercise I find extremely useful is pairing with designers. So I'm having my team now, that's a part of the process for doing we have a design and Dev kickoff meeting, where we talk through the design, and we talk about how the data may impact the design, and also, you know, states that a user may end up in, and that we need to account for in the design. And so bringing the dev and design processes more together has been a really productive experience, I think, a lot of

</p>
<p><strong>Ryan Anklam</strong><br />
that at Netflix to where we have got a lot of benefits of bringing the designers and engineers together really early because we've caught so many use cases that we never even dreamed of, you know, in that meeting, because we're like, Well, what about this error state and then like, it's kind of leads us on a whole nother path of different screens that we need different designs, different flows. And that's really, really good to have those people together right away.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's even important, not just, you know, we're talking about design and developers, but we work really closely with QA engineers, product managers, I like to have as many people in the room as possible kicking off because everyone comes at it from a different perspective. And so if you're trying to create a feature, someone will think of something that you had, you didn't even think about, they're like, Yeah, like that error message, what are we going to handle there? And the designer or the engineers like, oh, I never even thought of that. How are we going to handle?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, because unless you, you know, if you're living in the product, and you've run into that error state, you have that knowledge, right. And also, in terms of like, you know, if you work the way, where you just throw something over the fence, there's a lot of room for interpretation, when it comes to design, especially like interaction design. So it has been really beneficial for our teams to come together, both do the design dev kickoff, and then also do like a Polish pairing session, where we can really specifically point things out like, oh, did you notice this header is different than the headers on the other pages that are the same sort of information hierarchy? Maybe we can make this reusable and use it across all of our things? You know, so. So it's been, it's been really awesome. There's definitely some growing pains. But I've found a lot of value in bringing the design and the deaths together designers in the depths together.

</p>
<p><strong>Derrick Showers</strong><br />
I think that's really important too, because I've noticed, so in some situations, it's just sometimes easier for both the or they believe it's sometimes easier for the designer or the developer just to open up tickets or send an email with a long list of things. And yeah, that might be easier in the moment, because then you avoid maybe taking a couple extra hours out of your day, I think that you are able to achieve so much more when you sit down. And then you also have you both have the understanding of the why behind it versus somebody just getting this this long list and steaming the whole time through.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, you do. And one thing that's been really productive for us is that like, you get like, I don't know, you have like you build you build trust with each other as well. And you again, the developers can go a little further when they kind of know where you're coming from the whole like sending a ticket, whatever. There's so much room for miscommunication there, like even overhyped. I've worked remotely a lot for a long time. And one thing that I've noticed is really hard to communicate an idea via something like a text or

</p>
<p><strong>Ryan Anklam</strong><br />
be collaborating on an idea

</p>
<p><strong>Brian Holt</strong><br />
I realized that like I will literally spend an hour trying to communicate how you know, this drawer should slide out from the left to somebody versus if I just sat with them for 10 minutes and showed them exactly what I meant. It would be so much more effective. I found another tool That's really useful sending them like a code pen. Something that

</p>
<p><strong>Ryan Burgess</strong><br />
that is very cool. I've never had the designer send me a code pen. Yeah, awesome.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. And we'll even will code them up sometimes. And that's a good way because they can actually see how it works. They can they can reuse their code, it's a good way to work, especially if you're a remote. And you don't want to go through and design every single state, you know, if we're pretty bandwidth constricted right now. And so as we try to work as lean as as and as agile as possible, and that allows us to do it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, like that being really close and able to collaborate together.

</p>
<p><strong>Brian Holt</strong><br />
Hey,

</p>
<p><strong>Ryan Burgess</strong><br />
another thing I've always really liked to you talked about even sending a code pen. at Netflix, we actually have prototype ORS who are their front end engineers that are working with the design team, they report into design, and they're building prototypes ahead of time, they're able to accomplish some of those like transitions, that type of work ahead of time, and really iron that out, and then show us exactly what they're trying to achieve. And the designer is on board exactly what they've created. And I found that to be really useful. Well, Ryan,

</p>
<p><strong>Brian Holt</strong><br />
I have a story for you. I'm excited. So that's actually what I do right now. I actually spun up a middleman app, which is really great for designers to use when they want to prototype a static view, but use things like partials and shared styles may have really good like, a really good asset pipeline, you know, I can deploy it using something like Roku, or internal tools that we use. And it's really great for the devs. Because I'm sending them real code, I'm sending them HTML and CSS. It's not using real data, but it's really close in terms of the design spec. And so they get to cheat a little bit. And they love it. And it's an app, they can run locally. And I just push things up, and I'm like, Hey, pull down the latest, you know, it's outside of our code base. So when I make changes, there's nothing that's going to really affect the end products. And it's been really, really great. Because basically, developer can click around and all the links work. And so it's really awesome. And I really recommend that anybody who's really interested in prototyping tools, check out middleman and use it a bit. It's an awesome tool.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. I don't think I've ever actually seen that one. So I'm, I need to check it out. Yeah, that's pretty cool. Great. Yeah. I guess I'd also like to propose a question to the rest of the developers on the panelists for to be called engineers, Ryan, engineers, developers. All right. For the rest of the engineers on the panel, how do you like to work with a designer? What makes your life easier as an engineer working with a designer

</p>
<p><strong>Ryan Anklam</strong><br />
collaboration?

</p>
<p><strong>Brian Holt</strong><br />
shares? Trying to say that? No, I was, but no, it sounds like I would rather work with Julie.

</p>
<p><strong>Augustus Yuan</strong><br />
Actually, it's interesting because well, definitely at Evernote, we don't require our designers to know how to code like some of them definitely do. But we don't like formally require it and will use like prototyping apps like envision, or Yeah, or sketch. Yeah, exactly. To like, kind of illustrate what they're trying to achieve. So I think it's like really cool how like, there's more hybrid of this, this prototyping,

</p>
<p><strong>Derrick Showers</strong><br />
it's hard to,

</p>
<p><strong>Brian Holt</strong><br />
it's hard for design manager to because you don't want people to waste. So put. So because prototypes can be pretty time intensive. And so when you're resource constrained, you don't want to spend, like, I really don't want my designer spending a million years in something like principal. But if it gives someone a prototype that they can just reuse HTML and CSS, that makes total sense, right? So it's a balance, like for sure. Whereas like, sometimes I'd rather just send someone an example of how another app does it.

</p>
<p><strong>Augustus Yuan</strong><br />
Exactly. And then like speaking as an engineer,

</p>
<p><strong>Ryan Burgess</strong><br />
who collaborates with design libraries? Yes, yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, speaking as an engineer work, working with designers, I definitely like it when they like, send me like a wireframe, just so I can get started and laying out like kind of a foundation of what I'm supposed to build. And then slowly and iteratively like, I can build it out. And then like, I think, having like this iterative process where like, I pair with them to like, kind of go over the quirks and stuff. And then yeah, it's actually really helpful to talk to a designer and hear like their thought process of like, how they go about designing something. And because a lot of designers are like, oh, yeah, actually, I pulled it from this other part of the app, like see, and like trying to make consistent and that like, really helps me as an engineer like it also

</p>
<p><strong>Brian Holt</strong><br />
allows you to make it reusable. Right. Exactly.

</p>
<p><strong>Augustus Yuan</strong><br />
Exactly. I absolutely love that.

</p>
<p><strong>Ryan Burgess</strong><br />
Julie's thinking about that already. Reusability I'm like, Yes, that's great.

</p>
<p><strong>Jem Young</strong><br />
For me, my most successful relationships with designers have always been designers, I understand that. There's no such thing as perfect design and perfect engineering. Like it'll never happen.

</p>
<p><strong>Brian Holt</strong><br />
Software is done like the grass is done growing, right. Like, it's never done.

</p>
<p><strong>Jem Young</strong><br />
That was actually my when my interview questions that Netflix is open ended. They're like, how do you have to unify these things? And like, I thought, I thought I thought I was like, Oh, I'm like, you can't? And he's like, yeah, you can like you can try but you can't and the best designers to me that that I've worked with are ones understand that like, you gotta be in the middle somewhere. Like I know, there's like that one pixel off, but you can't always get it right. And you kind of compromise,

</p>
<p><strong>Brian Holt</strong><br />
right? Like, you got to make some compromises and there needs to be sort of a partnership there instead of like design doesn't work for dev and Dev doesn't work for design. One thing I really try to foster and Nicole Find team is that sometimes we have to make hard decisions, but we do it for like what's best for the product, basically. And if you know if spinning, if our dev spending another three hours on pixel perfection, is going to take away from them shipping a different feature that actually has a really big impact for our users or makes their lives easier. I'm like, don't do it, like, Fuck it, ship it, like, I don't care.

</p>
<p><strong>Ryan Anklam</strong><br />
I think a good word to kind of boils down to is trust, like, you got to trust your designer, the designers got to trust the engineers that we're going to give you the feedback. If this is gonna take too long, you got to trust that we're gonna say, and we got to trust you that if you want this that perfect. And you think it's really important, we got to trust it. That's what's best for the product.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. And then sometimes for our team, what happens is, we'll just be like, we, I think that we can get to that later. And we document and we're like, you know, I think I'd really like to have like filtering functionality. But right now, is that realistic? And would I rather have something that's more impactful now? And just worry about that later? Absolutely. It's all about compromise, I think. And in terms of product development,

</p>
<p><strong>Ryan Burgess</strong><br />
that's another beauty. It's software, you can ship something afterwards, get it in front of the users, and then slowly tweak it, which is great to think to

</p>
<p><strong>Derrick Showers</strong><br />
like that compromise is good if it comes sooner rather than later. Yeah. Like I've, you know, it happens a lot. And I think it's just because everyone's busy. And, you know, it sounds good on paper to have these conversations from the very beginning. But then you know, you get busy in your own work, and then you don't always have the conversation. So it design gets handoff handed off to a dev and at that point, then that's when that compromise needs to happen. And that's a little bit harder, I think, then having that relationship with your designer, you know, when the when the when the concept is being conceptual

</p>
<p><strong>Brian Holt</strong><br />
in the wireframe phase. Yeah, I think and I think that's a great thing to do, because neither person puts too much effort into one place, because I think designers especially can come can come to that conversation, pretty defensive, they feel like they've dumped months into this work. Yeah. And they're, you're telling them, they can't do it, you know, it's like a little frustrating. And so we really just got to find the right balance and, and check in early. Like, the biggest thing for me as a designer and a design lead is to make sure that I'm getting buy in as early as possible. So we have a process where we actually, even before wireframes, we do user flows, where I actually show you what data is going to show up on which view so a developer can get started in that in that place. And we can get buy in from the whole group so that the pixel stuff they care less about, right? Like they care more about the the weather the backend service reflects the UX or whatever, right? So we get buy in there. And then we go to our friends, we get buy in there, you know, and then we go to pixel perfection. And by then people are like, we're all on the same page. There's no surprises, a developer has been able to scope their work, and it seems reasonable. Like us,

</p>
<p><strong>Ryan Burgess</strong><br />
Derek touched on it a little bit. But I also don't like having engineers say we can't do it. Because I to me, I think everything is possible. It's compromises of trying to Yeah, it might take more like three, three weeks. Yeah, two or three months,

</p>
<p><strong>Brian Holt</strong><br />
would you rather work on this other thing? You know, I mean, like, and then me and my engineering partner, like we have a lot of conversations like that, where it's like, how much am I willing to bet, like, what do I think is the most impactful thing and like, I'd honestly rather sometimes instead of getting something to be like, a beautiful experience, I'd rather have something functional and usable for all our user

</p>
<p><strong>Ryan Burgess</strong><br />
and get it up there? Oh, cuz I might say to you is like, yeah, we can do that. It's gonna take three weeks just to do that small little feature. And you're like, that's not worth the three weeks. But I think at the end of the day, we can achieve anything. It's, it is possible, really, I've definitely worked on teams, where it's some of the engineers will be like, now we can't do that. Just because it's hard. And to me, that's not the right answer is

</p>
<p><strong>Brian Holt</strong><br />
that's why Yeah, that's why I love being technical, because I can call them on their bullshit and be like, Oh, actually, that is possible. You're lying. But um, that's, that's a really good point. Because I think what it really comes down to is value you're adding to the product, too, right? Like, yeah, we could spend three weeks on that, but what is the value we're adding there versus the value in pursuing some other projects that we're working on? Is

</p>
<p><strong>Ryan Burgess</strong><br />
it really gonna, like impact your users that much to have that animation? So see? Maybe, but maybe not? So usually

</p>
<p><strong>Brian Holt</strong><br />
not right, like, and I think it depends on the maturity of your product to right, like, when you're in the early phases of your product, sort of the way that we are now I think, functionality and usability is the priority versus having something be modern looking are pretty, you know, like, I could care less about that. I want it to function. I want people to know what's going on, I want air states to render properly like, and I think when you are partnering with designers at you're collaborating with designers, Jeff is really important for both the engineers and the designers who agree on on what the value add is on the projects. I think

</p>
<p><strong>Ryan Burgess</strong><br />
that's super important, right at the start of the project, what's the goal of the project? What's the hypothesis like? And then I always bring that up and sometimes on a project, is that really going to change the goal of the project? Absolutely. And it's going to cost us three extra weeks to get that feature or that little, you know, animation, whatever it is. And some everyone kind of looks around the room like No, it really doesn't change. We can still get this out of the door. And so at that point, I think it's more Yes, you could achieve that and get whatever the changes done, but it's not worth the time. And it doesn't change your hypothesis that you're trying to do.

</p>
<p><strong>Brian Holt</strong><br />
Right, totally. And we document that is one process. One piece of our process that I actually do before we even jump into user flows is writing product specs, and listing out like, what are the features? And then also, how are we going to measure whether those are successful? That's really important to me, because we can build all the things in the world. But if we don't know whether or not they're having an impact for our users, or that they're being successful, seems like kind of a waste of time to me. I don't know, I think

</p>
<p><strong>Ryan Burgess</strong><br />
load time is another thing that I've definitely sometimes been hard. It's a hard conversation with designers to is like, how do we achieve it to be fast, but also achieve the design necessary? Because I think that can be really difficult because totally, they're battling each other. At times, it's like, it's always hard to get something really image heavy, very beautiful design. And sometimes that comes at a cost. And so it's a balance of trying to juggle that.

</p>
<p><strong>Brian Holt</strong><br />
My solution is no images, icon fonts. But before you ship anything, it should be fast, like, in my opinion, and if you can't make it fast, like let's go back to the drawing board.

</p>
<p><strong>Ryan Burgess</strong><br />
One, there's always ways to like it could be that we progressively load that too is like

</p>
<p><strong>Brian Holt</strong><br />
does it lazy, loading paginate something, do we,

</p>
<p><strong>Stacy London</strong><br />
but the fact that you know that I think that's like one of my opinions about like, what makes a good designer is the fact that knowing the constraints of the medium, and that has been huge for me. So it doesn't matter, like that whole extreme argument of like, oh, it has to be you have to be a code designer to be a real designer and web or whatever, like that. That argument silly. To me. It's like if you understand the constraints of the medium, whatever tool you need, that's cool. But as long as you get that, yeah,

</p>
<p><strong>Derrick Showers</strong><br />
absolutely. Like I'm working on iOS stuff now. And I don't expect designers to be able to write Swift or whatever, you know, like, but they

</p>
<p><strong>Ryan Burgess</strong><br />
are Objective C? Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
I would hope that they know the patterns that that Apple has established or on Android that that Google has established so that they can create better designs. So I think that's important.

</p>
<p><strong>Jem Young</strong><br />
So what's the reverse? We're talking about how we I think we all agree that it's good for designer knows something about coding just understand like the limits of like you said, the medium? What's the reverse for engineers? Like, what should we know about design?

</p>
<p><strong>Brian Holt</strong><br />
I think you should know that designers aren't dumb, like, I don't know, like, I feel like you should other designers have the capacity to understand technical constraints. And I would assume that of any any competent designer. And I would also just, you know, again, ask questions is my biggest thing with process because, you know, you may be thinking that, you know, this crazy side nav thing that we're doing is just for Lux, there might actually be a user experience application there as to why we want to implement something a specific way. So the best thing, the best developers that I've been partners with has asked questions, instead of just assuming that we're just being ridiculous designers or whatever, you know what I mean. So I think I think that's really important. I also think it's important to know that like, it takes time to develop good design and good design patterns. And I think that typically are not typically I mean, I think that developers can be pretty impatient with designers and just get it done. Because it's binary. You know, and, and it actually, like most of design work is thinking through something, when you can be a part of that thinking, that's the other thing. Like, you can ask a designer, like, Hey, can we jump in a room and like whiteboard through this user experience? So that I know that we're on the same page? That's a really good tool? Yeah, I mean, understanding that it takes time, but also understanding that it's a partnership, and that, just as you know, designers need to compromise. So shit does I mean, it's, again, I guess that's the definition of partnerships. I don't have to say that too often. But collaborating with designers. Yes. Good conversation, good communication in terms of like, Hey, I could give you this feature. But it would take me two extra weeks, what's more important to you, as the designer that I think that's a really good tool, in terms of scoping, scoping a project to,

</p>
<p><strong>Jem Young</strong><br />
do you ever struggle with fighting? Well, I know design takes time, you're thinking about, like how the user is going to work it but do you ever struggle with your own personal opinion versus design aesthetic of say the company like Netflix has design aesthetic, Apple's design aesthetic, but you're like, actually, this is going to be better like this way, but it doesn't fit with the way all of Apple products work, things like that, I

</p>
<p><strong>Brian Holt</strong><br />
see my job as being a representative and an advocate for the user. So if my user is not the average consumer of Apple, then I'm absolutely going to deviate from from whatever the design pattern is, for example, I work on developer tools. So my design is not going to be like super sexy, like iOS style. And because it doesn't make sense for the platform that we're using, you know, I primarily work on web and I design for the medium for the place that I project will live. So I have no problem deviating from design patterns like that. I I generally like to start with design patterns that have been established because I think that there's some value there and I love when other people do work for me. That's great. I get to start a little earlier. You know what I mean? It's like it's great to start on. It's a good foundation, sort of the way that people use things like BootROM and find it. It's a good foundation. It's a good, it's a good place to start. But it's not always going to be the right thing for your users. And so my job is to figure out what is the right thing for my users and to do the best thing for them in their interest? Not necessarily because Mark com, does it a certain way.

</p>
<p><strong>Ryan Burgess</strong><br />
Do you expect engineers to be able to jump into Photoshop Illustrator sketch?

</p>
<p><strong>Brian Holt</strong><br />
No, absolutely not. I think it's great if you can, you know, if you want to make a proposal, and you want to say, Hey, I'm thinking about doing this this way, what do you think sketch is a great tool for that. Again, if you have an awesome design team like mine, I'm hiring by the way. You can do that really easily. And like some sort of prototyping tool, but I do not expect that if my dad's I don't expect you to slice Photoshop files, I expect my team to deliver assets, I expect them to deliver specs at what pixel ratios and asset should be, I totally expect that of my team, I think that your place should be in a developer's job should be to implement a feature, but also to make that feature modular and accessible and reusable. Right now, what I'm working on is delivering a style guide to my team, I don't think they should ever have to worry about the pixel width of a fucking button. Like, that should never be a developer's concern. It should be standardized, it should be documented, and it should be shareable. And so that's sort of my opinion, it totally depends on the team and the manager. Like that's the way I manage just not the way that other people manage. Again, like my like, sort of, I don't just because I'm technical, I don't demand that a developer be, you know, have gone to art school or like, you know, like, I think like, you know, I think Photoshop and Illustrator, especially, I think they're becoming sort of antiquated tools in terms of the web. I think we're really maturing in the web. And I don't expect, anybody's have to have to jump into that. If I asked you to document anything, it's going to be sketchy to to annotate a screenshot and tell me what's wrong with it. And I really like that feedback process a lot with my developers, they've gotten really good at it. They've also gotten really good at component types, seeing my design, so I'll send them a screenshot. And they'll actually like I love my teammates, but strong, especially strong and Devin are great at this will actually go in and highlight with different colors, like the boxes, which can become reusable React components. And I'm like, Yes, that makes absolute sense. Do that, because we'll reuse this and in several other places in the product. So again, that collaboration is really important chairs are important for a team. But you can only get that if you're talking. If you're talking and you're on the same page. And you're, and you're using the same, you speak the same language, because that's really what it's about. It's not about using the same tools, I could give a shit. If anyone knows sketch, I do not care. I don't care for designers. Either design in whatever field makes you feel comfortable, but I care about is being able to speak the same language.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think that's really important. And I think that's the reason that like going back to what we're talking about earlier is why it's nice when designers know a little bit Dev, and it's not because it's not so that they can like send us a prototype that we can then reuse even though that's great. That's great. Yeah, I mean, it's not a bad thing. But it's more about just being able to speak the same language. And it's super helpful. And I

</p>
<p><strong>Brian Holt</strong><br />
think it's worthwhile to challenge our listeners, that our front end developers to go learn a bit of designing type things, right. Like there's a great book that I read called Design for Hackers. That's really great that you can just go through it and like teaches like, Okay, this is when you use a serif font. This is when you use a sans serif font. This is what accessible colors mean, right? Like, some of those like basics of design are really helpful as a friend developer to kind of have a grasp on

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I completely agree.

</p>
<p><strong>Brian Holt</strong><br />
There's also a hack design.org, I've contributed to as well, and they send you like a weekly like, Hey, here's the thing about designing for mobile, or here's the thing for and it's like really low key, it's not like you're having to go and read an entire book about it. But it's just familiarizing yourself with the with, with the language of design, I would be

</p>
<p><strong>Ryan Burgess</strong><br />
interested to hear what is your thoughts on web fonts?

</p>
<p><strong>Brian Holt</strong><br />
This is a minefield, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
this is like, it might open the door a lot. But I'd be interested to hear your thoughts on web fonts. How important are they?

</p>
<p><strong>Brian Holt</strong><br />
I think deprecation is really important. So web fonts are great. But if they don't load what happens, I think that's the important thing. I think that things should always degrade gracefully. So that's my main priority. Again, I think typography is beautiful. But I, I always try to prioritize usability over visual pleasure essentially. Sounds like way too, like sauce for this. But I think that that's important, you know, web fonts are getting to the point where they're actually pretty performant. Now, I remember that back in the day, when like, you would still get like the major flash on your screen. One thing that as designers, I think we need to get a little more familiar with NSF is is that not everyone has the connection speed and the rate that we have, or the bandwidth that we have. I spent some time in East Africa, where the connections are actually like really unreliable. And so they they don't they can't download those massive fucking font files. And so that shouldn't stop them from from shipping and pull requests, right? So again, comes down to compromise. It comes down to usability, but it also comes down to considering people who you know, aren't don't live in San Francisco, and maybe don't have the strongest internet connections and can't really download massive packages over the web. So sounds

</p>
<p><strong>Ryan Burgess</strong><br />
like you're just you'd like them, but it's also okay. Have something as like a backup because you'd rather someone read the content than not get it

</p>
<p><strong>Brian Holt</strong><br />
so important, especially when we talk about accessibility, because there are some people who just will straight up turn CSS off. Right. I think I think that's really important. I think browsers have done a great job of having like an agent, browser stylesheet. That makes things really important. But I think on the Deaf side, that means that we need to structure our HTML to be the correct information hierarchy. And I think designers should play a role in that I think that designers should pay more attention to accessibility into into performance.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that you're thinking through all that. All right,

</p>
<p><strong>Brian Holt</strong><br />
yeah. I mean, I guess one of the things is like, we we we didn't, so I was gonna have three years ago, but one of the rules was, you know, ship something until it's performing well. And that's for everyone, not just for people in San Francisco that's like people

</p>
<p><strong>Ryan Burgess</strong><br />
and someone on a 2g network, will be able to

</p>
<p><strong>Brian Holt</strong><br />
be able to load a webpage. And again, I learned to CSS in IECEx. And so I know all about graceful degradation. And I understand its importance. And I think design should operate in the same way.

</p>
<p><strong>Stacy London</strong><br />
Have you set up like performance budget kind of stuff? Yeah. So

</p>
<p><strong>Brian Holt</strong><br />
I actually have a really good friend named Yesenia, who gives, she actually tours and gives talks about designing for performance. Laura, Laura Hogan also gives a lot of good talks about that. And as a designer, and as a as a design lead. Like I find it it's important that we consider those things when we're designing. And I've always been because I came from the coding side, I've always been all about like, not image heavy, like, I've always been about optimizing for speed. So luckily, I have that in my in my background. But yeah, I think that there's, there's a lot of, there's a lot of great resources for that kind of thing right now. And you know, like I have even on my parents, I have fucking PageSpeed loaded in my, you know, in my in my console, and like, I'm looking at that to see exactly like, what does it take to load an icon font? How do we make it a little more usable? And that's what I love about hopefully, we'll get some time to talk about this. But CSS modules being a really great technology for that, because you're only loading the CSS, you're going to render on it in a specific component, which I think is tremendous for performance.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, yeah, you didn't kind of mention, too, that you'd done some work with CSS. And I mean, let's get on that topic of how much do you think about that, even now, when you're designing is like reusability.

</p>
<p><strong>Brian Holt</strong><br />
A lot, actually. So the practice of marking and now we use CSS modules. So there's this concept of compositions, which are basically like reusable elements. And now they're their grades, I can go in and contribute, like a composition, they call them composes, or whatever. And in CSS modules can be reused throughout the codebase. The place that I really struggle with that is, so many developers tend to write selectors that are really page specific. And so it's, it's, it's really hard to strike a balance between the page specific styles or reusable elements. And I would love to hear from some of you guys about your experience with that and, and how you manage module modularity. If you ask me, in terms of that, I mean, sometimes you just have to ship something and get it out. And like, I understand that, I think there's a lot of value in using something like CSS modules, because you can literally write, you can change something in one place, and have it populate everywhere, instead of you know, and I hear the argument, a lot of devs make this argument for like, oh, well, we should just be passing in inline styles via prop. But one, those are so hard to debug, especially for designers, and they're super hard to modify for designers. So if you want designers contributing to your code, definitely don't do that. Just write CSS. That's okay. CSS is great. We love it. And use things like composes.

</p>
<p><strong>Ryan Burgess</strong><br />
It's also nice too, is like, you can keep things like very modular with, obviously, with CSS modules, but it gets really specific to what you're trying to achieve. So if it's like a header, you can have just a little module that styles the header, and you can call it when you need it, you can remove it when you don't need it. So does your code very clean. And it's very useful. So I mean, I'm all for it. I have nothing against that.

</p>
<p><strong>Brian Holt</strong><br />
I'm all about writing CSS to throw it away. I tell everyone to listen to me. So that you can write CSS and as soon as you're done with it, because a lot of CSS goes out of scope eventually, right. And so anyway, you can identify this as dead CSS, and I want it to go away, I think that is like King, or at least to me. And so that's why I really like CSS modules is you can say, Well, this was never imported, so we don't need it anymore.

Find it. There are actually some tools that will lint through your your repository or your stack and, and find selectors that are no longer being used, and you can just rip them out. There's no better. I feel similarly about design. I love deleting things. I just feel so good here. So I'm like, oh, less complicated. Sounds great.

</p>
<p><strong>Ryan Burgess</strong><br />
I've actually even written CLI tools to remove modules that aren't being used anymore. I mean, they'll still be in Git. So if you really ever want to bring them back for some reason you can. But at that point, it's just bloat in your code base for no reason. Get rid of them, like Brian said, right for just getting rid of CSS like if you don't need anymore, you have a module that you can just drop and it's not impacting the code.

</p>
<p><strong>Jem Young</strong><br />
My one complaint against modularity started to go against everybody here is Oh, that's good.

</p>
<p><strong>Ryan Burgess</strong><br />
We want to hear

</p>
<p><strong>Jem Young</strong><br />
your dissent is important. I will say all the sudden with the purpose Prior to only probably modularity, and I've seen this at every single place I've ever worked that in all engineering, it only works if there's someone paying attention to everything. Like I design a checkbox, I guess design a checkbox. Now it's true. We have to then Brian comes in says, which one do I use? And they're just like, use this one because this one I wrote and then,

 
yeah, and then what about a style guide, though? Yeah.

</p>
<p><strong>Jem Young</strong><br />
If there if you follow it, though, so I'm gonna have to enforce that.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. Because that's the problem you get when you have like, a big dev team, right is like, everyone's like, Oh, well, I don't, I don't know if we have this yet. So I'll just write it, which is the problem. But that's where composes come in really great, because you may apply the composed to page specific style, but you can just go to your like, we have like a Utilities folder, or whatever, um, you just go to your composes. And you're like, oh, in forms, we actually have the input style. So I'm just gonna reuse this. Whereas instead of having to ask somebody, you just have sort of that base set of styles. And if something deviates from that, then you just write that into the CSS module. But you're right, you do have to, there is a maintainability element to that. And if people aren't talking to each other, like, you'll end up writing the same exact thing over and over and over again, you run into

</p>
<p><strong>Ryan Anklam</strong><br />
the Yeah, buts a lot. And Netflix to like, really will know that there's a checkbox I was like, Yeah, but I need a checkbox that's a little bit different. And what do we do? Do we extend this one? Do we write another one, and then we get these really high specificity checkboxes, or we have two ones that kind of start

</p>
<p><strong>Brian Holt</strong><br />
diverging too much time on checkbox.

</p>
<p><strong>Ryan Anklam</strong><br />
time that we spent on checkboxes,

</p>
<p><strong>Brian Holt</strong><br />
that sounds insane. I don't

</p>
<p><strong>Ryan Anklam</strong><br />
want to say we have spent an insane amount of time on checkboxes.

</p>
<p><strong>Jem Young</strong><br />
I postulate that composability. And modularity actually goes against the core of engineering because like, our instinct is to build something. It's like a checkbox, I can build it better. So like, being modular, takes a lot of discipline and takes, like coming back, just informing people,

</p>
<p><strong>Brian Holt</strong><br />
the better you have to contribute it back.

</p>
<p><strong>Ryan Burgess</strong><br />
I like what you're saying, Jem, because I'm all for building something better. But why can't you take the existing one, it's there, add your case, or however you want to do it, build on top of it, and then you make it better, it applies to

</p>
<p><strong>Brian Holt</strong><br />
everything, the danger, because then you have to go through your codebase and test everywhere that's being used. Because if you don't

</p>
<p><strong>Ryan Burgess</strong><br />
test match, test,

</p>
<p><strong>Brian Holt</strong><br />
selectors are actually super hard to unit tests, it turns out but but that's the thing is you actually have to go through and see how your changes impact other parts of the code. But yeah, I think having like better reviews amongst developers can help sort of mitigate that risk to like, if someone if you know, someone's touched something before you can CC them on your PR and be like, hey, like, can you take a look? I want to make sure that I didn't break anything with these changes. Yeah, no,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's clear to is but there again, the larger the team gets, it's harder. It's harder. Definitely. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I think that so I've made this comment in the past about our visual framework at LinkedIn and got some offhanded, Microsoft,

</p>
<p><strong>Ryan Burgess</strong><br />
what we got, we never, ever been working

</p>
<p><strong>Derrick Showers</strong><br />
at Microsoft, I think what we have works works pretty well. And it's Chili's kind of what you explained, but it's, you know, there's, there's a library of visual elements that you're able to pick from it. A lot of it is, you know, the challenge, I think, for developers that we're all challenged with is if something doesn't fit in the design that are given, if so, for instance, if a designer gives us something that doesn't fit in that already predetermined, you know, framework, then that is a conversation that we need to have, and then at that point, it needs to, you know, be iterated on. And that's when it goes a little bit hard. But I think like you should always go towards something that's already there, if at all possible, and it's this extreme use case, that cannot be, you know, obviously, you have to have a framework that's big enough, that has enough things in it for you to be able to utilize what you're doing. Yeah, but I

</p>
<p><strong>Brian Holt</strong><br />
think that designers should share some responsibility there. I don't think it's just on developers to be like, Oh, this doesn't like, because I think that there is a compromise to be made there too. Because if there's already an element that exists, that's really close to what they have, and like, there's not a big usability impact in terms of changing it, then they should give that up designers like I would be like, just sit down. Like, that's, that's not a really good use of again, it's all like comes down to like, how are we using our time as a team, like as a joint team? And like, is that a good use of our time to develop an entirely new component just to make this change with maybe just like pixel border weight? Or like, you know, like, there's all these like things. I mean, there's always the exception, obviously,

</p>
<p><strong>Derrick Showers</strong><br />
I think it's a culture thing, too. And so I think, you know, I think we have that culture, which is nice. So like, as a developer, if I get something that isn't built, then you know, I'm going to go to our horizontal visual framework team. And, and, you know, propose something that needs to be built for for this specific case I'm working on. And then at that point, it goes back to the horizontal design team, and then they go back to the designer I'm working with so it's kind of like this, you know, circle of thing, but it also helps keep accountability, where it needs to be, you know, it's not like going behind people's back and like, oh, you can't do this, because you know, that, but, but it's, it's just important, cuz I think it just kind of helps keep people in the same team, same page, and conversations can happen and conversations start happening about like, Okay, why does this need to be different in this case, and

</p>
<p><strong>Brian Holt</strong><br />
this is why I'm very against organizational like breakdown. Like I think that I think that designers should be really heavily embedded within teams. I'm a really big proponent of feature teams. So you know, you get a dev, you get a designer, you get a pm whatever ship a feature, you disband, you go to the next thing and, you know, get I've been do when I was at GitHub, I'm sure a few of you know, they didn't do a lot of things great. But one thing that we did great as a team was that we really did the feature team thing really well, where we had one designer or one developer, or one or two developers, depending on you know, like, what the feature entails, we'd ship a feature, and then we'd move on to the next thing. And I think really having a designer there embedded that you can just go to instead of having to make a request to the frameworks team, who then makes a request to the frameworks design team. And at that point, is the design team even really understanding the impact,

</p>
<p><strong>Ryan Burgess</strong><br />
you should talk and collaborate in the same room. Cheers.

</p>
<p><strong>Ryan Anklam</strong><br />
I have a completely unrelated question. And that is, from an engineering standpoint, what is up with the color gray?

</p>
<p><strong>Brian Holt</strong><br />
How many times because

</p>
<p><strong>Ryan Anklam</strong><br />
I can sit down with a designer and that'd be like that's 2% to black you got to fix that blows my mind that they can see those tiny little variations in gray, like instantly wrote comments in our, in our repository about 50 Shades of Grey, because really

</p>
<p><strong>Brian Holt</strong><br />
naming variables are like 5049 48 thing that I find really important actually, when it comes to like things like variables is like naming them semantically instead of like, this is gray, darker. This is gray, darker, darker, darker. This is gray, darkest, this is the gray, the darkest that ever was, you know, I mean, I think it's a very slippery slope in terms of reusability there, again, when you're collaborating, cheers.

</p>
<p><strong>Jem Young</strong><br />
Car what episode where we arguing for like, 20 minutes on classes versus IDs?

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, man, our CSS. Let's hear Julie's thoughts on that. I would love to hear her thoughts. Never on Id never an ID. Brian, this.

</p>
<p><strong>Brian Holt</strong><br />
You can sell an idea. If you haven't you can

</p>
<p><strong>Ryan Burgess</strong><br />
you shouldn't you have

</p>
<p><strong>Brian Holt</strong><br />
an ethical question?

</p>
<p><strong>Augustus Yuan</strong><br />
We really quick. We have like old podcasts about this. So but no, you should still you should still do it. I just want people

</p>
<p><strong>Brian Holt</strong><br />
to it enforces uniqueness and sometimes that's a useful tool. And so I think it's it's dumb to say

what elements are recalling IDs on just to be super clear.

What Ellen's IDs on Yeah. Yeah, all the time.

Which one? Are you calling on a pair off? Are you pulling a head? Are you calling an intersection?

</p>
<p><strong>Ryan Anklam</strong><br />
Think Brian only uses dips, checkboxes.

</p>
<p><strong>Brian Holt</strong><br />
It would be like, like a container like this is the ID of our or like the idea of like our header, right. So our header element has the ID and then we we go off?

I mean, are you writing JavaScript that calls that idea? Is that why? You could you could enter slackers? Yeah, like you can get paged specific class likers. Like, that's another cool thing.

She's agreeing with me. But it's not enforced. Unique, right? If you try and put two IDs on a page, the problem

now is that enforcing uniqueness is a really bad problem, especially when share so many so much code across a product, you're not going to have your header twice on a page. But you may have it on two different pages. So which of those they

both have the same header ID right. Now?

</p>
<p><strong>Derrick Showers</strong><br />
I think I think four was the specificity that that and actually using CSS using IDs in CSS, right. That was the part that you

</p>
<p><strong>Brian Holt</strong><br />
avoid the cascade, like I think most people did was selector. So yeah. But I think in all cases, you avoid the cascade. Yeah, always. So you, we all agree, you avoid the cascade. So why can't you use IDs? Because if you're avoiding the cascade, then it's all considered equal.

I don't like that. There's like one ring to rule them all. That's my problem with IDs is that it's a little too dangerous to

</p>
<p><strong>Ryan Burgess</strong><br />
use them for JavaScript and only JavaScript. Yeah,

</p>
<p><strong>Brian Holt</strong><br />
I can see that I can see like calling an element with an ID via JavaScript, I can see that part. But I cannot see at this point in time. I will not concede this argument over class selectors. I think class selectors do fine. And I think the performance is actually better, right?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. And actually, even for JavaScript, I like to have j s stash classes. Yeah. And then like, you just use those but I wanted to tell viewers because they can't see like, the guy's eyes are like so intense right now. It's like, it's like it was so intense like God, they're like so kicking Ashley about this I broken

</p>
<p><strong>Brian Holt</strong><br />
a bottle ready to play.

</p>
<p><strong>Ryan Burgess</strong><br />
Other than obviously, don't use IDs. Any last advice before we get into pics that you would love to share?

</p>
<p><strong>Augustus Yuan</strong><br />
are actually like even for like junior designers like I just came from a career fair who like a lot of people are looking for internships for product design, and like they all would probably appreciate advice.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, totally. So in terms of design, design advice for junior designers, I would say find what you're passionate about. go really deep on that until then be a generalist touch a million different things in terms of design, touch, visual design, touch UX, touch front and development. Understand that constraints come to understand the constraints of front end development, because developers will love you. And that's I've basically built a career off of that. So I feel like you can do that. Also, you don't need to go to art school, you don't need to read medium blog posts, all you need to do is really like dive into the work that you're provided. Or you also need to just like work with a developer for a while, build a product, ship something, find something that you, you really want to build and build it and ship it and get experienced there also demand good titles. And with your jobs, I will say I'm trying to realize that young when I was younger, in my career, I was doing the work of junior developer or junior designer and I wasn't getting that title. Like they would always like be like creative technologist or something like that. And that really hurts you later on in your career. So I would say really push, push yourself and demand and always ask for more from your managers and from your organization. And also just like Teach Yourself stuff, like go on the web, this thing called the internet, you know, read the books also. Number one thing that I would actually say for people who want to be web designers is to study dance theater homes, book, CSS three for web designers, because it does a really good job of translating design language into code and recreating elements in code. And I think, I think that's a part of building the bridge between design and best.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, that is actually some pretty good advice. Even for an engineer starting I would think that's like some of that definitely works for both. As we wrap up today's episode, we like to share pics of things that we like or have found interesting to share. Let's go around the table and share pics for today's episode. Brian, you want to start it off,

</p>
<p><strong>Brian Holt</strong><br />
I just have one pick this week. My pick is the ACLU. And I don't want to get super political. But I just want to say that there is a line somewhere for everyone, right? And so whenever that line gets crossed, you hoped someone like the ACLU is going to step in for you. And they have stepped in a lot over the last couple days. Now they've helped a lot of really good people. So I would encourage our listeners to maybe think about contributing great, Stacey, what do you have

</p>
<p><strong>Stacy London</strong><br />
two picks. One of them is vision. I think I mentioned it earlier in the show. Just a cool tool to tool to kind of share interactive prototyping kind of things between your dev and design team. I've had good luck with that with designers. So that's one of my picks. And then my other pick is ghostly International, which is it's a music label, which I enjoy. But I picked it for the design purposes as well, because they do a lot of really cool stuff, being purveyors of good design. And so yeah, you should check them out a lot of my favorite artists from very cool.

</p>
<p><strong>Derrick Showers</strong><br />
So I was gonna pick envision to actually and that's a tool I use every day. So it's like I kind of hate it. But I also kind of really love the fact that you can collaborate really well with it. That's all I want to say just one string. No, but I mean, you know, if you're if you're not, if you're not able to sit down with a designer or a developer, as a designer, it's a really good way because you can leave comments on things and see the flow, and it's really cool. My other pick is I don't normally take Google products, but I'm really excited to see Google voice speaking. No, I know you can do me I'm killing myself right now inside so but I'm really excited to see that Google Voice is getting revamped and finally updated. I thought they get forgotten about that. And I think it's a really cool product. So I'm excited to check it out. Jam it

</p>
<p><strong>Ryan Burgess</strong><br />
up for a

</p>
<p><strong>Jem Young</strong><br />
certain point out ghostly International. I did not know Tyco was on that record, but I love Tiger Woods like my top. Tigers. Amazing, right? Yeah. Put it on a plane. I get it all day. My first pick is follows Brian's pick, I know. We're not political on this podcast. We try to appeal to everybody. But he's right. There's a line and you just you can't cross it. So my pick is also ACLU donate money. We make a lot of money in tech. And there's no doubt you know, someone who's an immigrant, or someone's green card or something just like do something. Don't tell me Come

</p>
<p><strong>Ryan Burgess</strong><br />
on, like we're coming immigrants we have that are working in this. Well, yeah. I'm an immigrant on working in Silicon Valley. So yes.

</p>
<p><strong>Jem Young</strong><br />
And speaking of Canadians, My second pick, as I want to learn more about the history of my Canadian brothers, such as Ryan Burgess here, I'm watching friends here on Netflix, which is a story of

</p>
<p><strong>Brian Holt</strong><br />
Ryan Burgess. Totally true. Yeah.

</p>
<p><strong>Jem Young</strong><br />
It's a great show about the early days of Canada. So I actually don't know that much Canadian history. So that's pretty cool. Actually an autobiography.

</p>
<p><strong>Ryan Burgess</strong><br />
I better watch this just to make sure.

</p>
<p><strong>Derrick Showers</strong><br />
You were around for the early days of Canada, obviously. I got the sweaty

</p>
<p><strong>Augustus Yuan</strong><br />
of cool. I have two. One is standard style USA doc of which. So apparently, our government has a style guide. And they have reusable UI components. And yeah, pretty impressive. So I thought that was like super cool. Um, specifically for this talk. The other one is this medium article along with a plugin called CSS sketch. And the article is called programmers designed differently. And this guy basically made a CSS plugin for sketch three, just FYI. It's breaking in Sketch four. And he's not responding to

</p>
<p><strong>Brian Holt</strong><br />
a updated version like every other day. Yeah, exactly. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
But it's like apparently like you can Upload a SASS LS or CSS stylesheet. And then schedule just kind of like automatically do that

</p>
<p><strong>Brian Holt</strong><br />
anyway, like, you can always right click and copy CSS. But the CSS is like pretty, it's like it thinks it's an absolute, like you're coding in, like 1940s or 1944 1994. And like it's absolutely position. So you just have to be careful. But like, there's definitely like already that natively, which is kind of nice. So if you need pixel perfection type things, Ryan, what do you have?

</p>
<p><strong>Ryan Anklam</strong><br />
So my first pick is a web app called the Smash Run. If you do any kind of running, it's a really, really nice data visualization app. Um, so it imports all the data I have from one keeper, and just lays it out really nicely. And lets me track my progress over time. And it's really well done, it looks really good. My second one is roll up that J S, and it's a new JavaScript, Bundler. And it's a little bit more opinionated. So it only works with es 2015 modules. So it's, I think it's been you know, Webpack has been the king of the hill for a very long time and people haven't challenged that. That seems like the really good new one to come on to actually kind of challenge that space. So

</p>
<p><strong>Ryan Burgess</strong><br />
great. Julie, what do you have for us? I

</p>
<p><strong>Brian Holt</strong><br />
have a lot of pics. Okay, that's awesome. Sorry, the nerdy stuff. So tools middleman app. So badass CSS modules and bem the naming the naming convention, TV shows baskets with Zach Galifianakis. It's a little sad, a little funny. It's great book, long division by Casey layman. He's amazing. And it's a really good book to read right now. I also had the ACLU, I donated a big donation this morning. And if anyone wants to match me, I would love you forever. Comic books. I'm a really big comic book nerd. And right now in our political climate. I'm reading something called east of West and it's really really, really amazing. And I think if you need some space and just like some literature to dive into, I think that's definitely a good place to be albums. Kailani just released sweet, sexy, savage. She is homegrown Oakland girl, everyone should support her. She is an advocate for mental health and for the Bay Area and for Americans, right? So definitely check her out. And also I'm hiring. Please come work with me. I hiring designers are looking for a senior UX designer who is deeply technical and has a passion for developer tools. So if you know anybody, please hit me up on Twitter. I'm at in RRR D CR E, that's three Rs or julie_horvath<a href="https://twitter.com/apple"><a href="https://twitter.com/apple"><a href="https://twitter.com/apple"><a href="https://twitter.com/apple"><a href="https://twitter.com/apple"><a href="https://twitter.com/apple">@apple</a></a></a></a></a></a>.com. Please let me know if you have a friend that sounds like someone I'm looking for.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Now's a good load of pics. Actually, I'm impressed. So I only have two pics. And I feel like following that as a loser. So one because we're talking about design and actually have started to draw a lot more or get back into drawing. Adobe Illustrator I still really love it. It's a great program. It's probably not something that we use so much for web design. But for my drawings, I've definitely loved getting back into it. Another one that I came across the other day is a homebrew I guess script that called brew cask. I've been having issues with my new MacBook, unfortunately, and it crashed. And so I'm on a temporary machine right now. And I've switched machines three different times in the last month. And I found it really difficult. I don't want to run time machine, I've set up brand new machines. And so having to install all the apps you need is really difficult. And so this app brew cask is a way to actually write scripts, like shell scripts that just start installing all the things that you want and need do, you can just decide what kind of apps that you run on Mac OSX. And you run the script and we'll just install them all. So definitely worth checking out. Before we end the episode. I want to thank Julie for being a guest on the podcast. Thank you so much for joining us. It was a pleasure having you on you did mention your Twitter handle. But where can people get in touch with you Twitter's good

</p>
<p><strong>Brian Holt</strong><br />
place for that my emails pretty public. It's just Jay and Horvath that gmail.com Or my apple when is great to julie_horvath@apple.com. I'm pretty responsive there and those places, so check me down. happy to chat again. I'd love to find a designer like who wants to be my kinfolk. And it's been a pleasure. Thank you so much for having me.

</p>
<p><strong>Ryan Burgess</strong><br />
Since so many of us have chosen the ACLU as a pick today. I think it'd be a great idea for us to release a brand new T shirt design. All the cells that we get from the T shirts we will donate to the ACLU. So for this week, we will be launching a brand new T shirt to get your very own front end Happy Hour t shirt go to front end happy hour.com/aclu The T shirts are extremely comfortable and available in both men's and women's sizes. So make sure to get yours before they all run out. Thank you all for listening to today's episode, like us on Facebook and follow us on Twitter at front nhh

</p>
`;
        return transcript;
    };