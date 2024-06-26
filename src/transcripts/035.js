module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End happy hour. This is episode 35 And we are joined by Jyri Tuulos, a staff engineer at ad roll and Josh London a senior designer at Netflix. In this episode, we will be discussing style guides and shared components. EURion. Josh, before we get started, you want to give us a brief introduction of who you are, what you do and what your favorite Happy Hour beverages.

</p>
<p><strong>Josh London</strong><br />
I'm Josh London. I'm a senior product designer at Netflix and favorite happier beverage would actually have to be the Uber ginger beer

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Which Gus has made up to share one with you.

</p>
<p><strong>Mars Jullian</strong><br />
Oh, like maybe you guys offer

</p>
<p><strong>Augustus Yuan</strong><br />
you like one. Okay, you can refill this diet though. I ran out of the normal.

</p>
<p><strong>Ryan Burgess</strong><br />
You're watching your diet.

</p>
<p><strong>Augustus Yuan</strong><br />
Just ran out. Right here. Alright,

</p>
<p><strong>Jyri Tuulos</strong><br />
I'm Jyri Tuulos. I'm Steph UI engineer at Apple. I run the front end core team there. And depending on the day, I guess I would have either an IPA or an old fashioned

</p>
<p><strong>Ryan Burgess</strong><br />
right on and let's also go around the table and give introductions to today's panelists. Stacy started off sure

</p>
<p><strong>Stacy London</strong><br />
Stacy London. I'm a front end dev at Atlassian.

</p>
<p><strong>Jem Young</strong><br />
Jem Young Senior Software Engineer at Netflix,

</p>
<p><strong>Mars Jullian</strong><br />
Mars Jullian. I'm also a senior software engineer at Netflix.

</p>
<p><strong>Augustus Yuan</strong><br />
My guests this year in front end engineer at Evernote.

</p>
<p><strong>Derrick Showers</strong><br />
I'm glad we're breaking up the Netflix train here. Derek Shahar, Senior Software Engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Guess what? Netflix there. I'd also like to mention that in a future episode, we'd like to do an AMA episode, which is Ask me anything. And we'll answer whatever questions that our listeners have. So to help us out, go visit funding happy hour.com/ama. To leave us a message. We are excited to answer anything about coding careers, personal questions that you may have for us, leave us a message and we will try and answer it. In each episode of the front end Happy Hour podcast. We like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is? Consistency. So at any point in the episode, we say the word consistency, we will all take a drink. Alright, well, let's get started with the questions start off with what is a reasonable component? And what is the style guide? How would someone define that?

</p>
<p><strong>Josh London</strong><br />
I guess reusable components. And I guess at a base level, even just a style guide is trying to set a visual language for an application or website. You can even use them for language and even motion things like that. So it's actually setting some consistency for an entire application for whole teams to and whole companies to kind of follow. So everyone's using the same language.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. When you say language, your meaning actually specifically to the like verbage and everything in the content

</p>
<p><strong>Josh London</strong><br />
in one context. Yeah. But then the design language, I guess, oh, to have like visual and visual language. Yeah, that makes everything kind of looks like

</p>
<p><strong>Jyri Tuulos</strong><br />
yeah, I would also like to add the reusable components, people usually talk about them in the context of JavaScript libraries. But I would also think about them more broadly, like any anything like a simple CSS class could be a reusable component, because that it ends up being a visual component in the app that multiple teams might use.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, even like the preprocessor languages, that's kind of how they've been structured to be built so that you can split them up into smaller modules or components and reuse them. So right, that's a good JavaScript. There's not it's not just JavaScript. Yeah. I mean, you could do it in any language, you could do it in like PHP Break, break up code. And yeah, that makes sense. I'd love to hear people's thoughts on the benefits for creating a style guide or using reusable components in your companies or even just in a larger project.

</p>
<p><strong>Stacy London</strong><br />
I think one of the biggest ones is consistency. Yeah, if you especially if you're a company that makes multiple products, you want all those products to look like they are built by the same they come from the same company, they come from the same place. And in order to do that, it's it can be pretty, I'd say almost impossible if you don't have something like a style guide or reusable components because you're going to not have your have disparate teams working on each product, doing their own thing having their own deadlines. And if you don't have something structured to give them guidance, like I think it's it gets very difficult to keep consistency across products and chairs again, on

</p>
<p><strong>Derrick Showers</strong><br />
the flip side of that, so we use a we have a pretty well established design pattern, LinkedIn that has been through many iterations but so anyway, the most recent one is is has been probably around for about a year and a half, two years and I guess like The Conduit is that, you know, when you're working on different products, you are sometimes limited in, like what you can do. And like, you know, this product might have reasons for going this way. And you know, versus like the linkedin.com, you know, feed might look different than the product that I work on, which is a LinkedIn learning app. But I think the good thing about that is it forces you to then think about the decisions that you're making and like, almost justify or like, think about things just like, Okay, this is a little bit different. There's a little bit different use case, but, you know, we're being inconsistent because of this reason, versus if you don't have that, then you're just you're not necessarily thinking about that.

</p>
<p><strong>Jem Young</strong><br />
Yeah. And I think there's just truths when you put enough smart people in a room, and one is they're gonna argue over tabular spaces into everybody's gonna have their own opinion about like, what looks good. And that's just the nature of you put enough good software engineers in the room, they're all going to want to make their own thing and a style guide kind of forces you to say like, No, we've already argued about this. And this is what we decided, and this is where we're going to go. And that kind of solves the knot builder problem that you just run into eventually, in any large organization where we all want to make four versions of an input component or button. And we don't need to, even though your way might be slightly better, like we just don't need to it's better problems to solve

</p>
<p><strong>Ryan Burgess</strong><br />
saves time, you're not recreating the wheel every single time, like you just said, jam, you're creating one input that works kind of rules them all. But at the same time, is if you did want to change it, and you found a better way that works better across your site or application, you've changed that one component, and it applies everywhere. And to me, that's huge is like even if you want to change your button style every other week, well, at least you have one consistent one that just gets applied everywhere. That saves a lot of time than having to go back and forth trying to find where is this button been used? Oh, I have to updated here and I have to update it here. If you have one consistent location, that makes a big difference.

</p>
<p><strong>Mars Jullian</strong><br />
And that's, I think one thing that kind of gets lost in the whole reusable component style guide conversation is for engineers or for designers or for you know, teams working together in large companies, sometimes it feels like a lot of overhead. And you kind of have to remember that there was a point to designing a visual brand, I think it's really important for users to feel like they know your product well. And they can identify it from other play, like from other products, not only so they can navigate it, but also so that it's kind of they can talk about it to their friends in a way that makes sense. And it doesn't blend together with you know, all of the other products that might be out there in the market. And you know, it's job security for some of us. But a little bit of overhead, I don't think hurt anyone, especially when you start to go beyond being an engineer and start to empathize with your users a bit more and really think about how they're using your application.

</p>
<p><strong>Ryan Burgess</strong><br />
Also think of it too is anytime that like we run into bugs, if you fix it, something's wrong with your input fields, or whatever that component is that we're talking about, it gets fixed at once, and then it applies everywhere, you're not trying to fish around finding it. And I think like looking to the design aspect, and I'm sure Josh you can agree to this is that you build better ux by just planning that out from a holistic view, rather than just oh, I need a button, I'm gonna throw it in here, I'm gonna need an input, I'll just throw it in here, it's more thought out, like, across the board.

</p>
<p><strong>Josh London</strong><br />
And it's thought of as, like a design system then. So everything, you know, is cohesive, and everything kind of plays off with one another. And I guess, to kind of go back to the like, where the work can kind of struggle is when, like when they had to have, you know, designers have opposing views on things. And like, when you're mentioning like inputs, we were like, when the whole placeholder only inputs trend came around, I saw a lot of, you know, design systems, you know, really releasing that with like material design and things like that. And but the accessibility on that is terrible. And the usability on them are terrible, because the label disappears when you're when you're in the input. So what what's kind of great about it is that you can change it globally. But some of the drawbacks is that you have to have those internal conversations kind of maybe more than once. And then, you know, fortunately, I've worked with a lot of people who don't have big egos. And so we can actually like kind of leave our egos at the door and do what's best for the user. And then we'll actually roll back changes or we can actually if someone wants to introduce something new, you just add it to your your library and then do PR on it, and everyone can sit around and approve it and comment on it, things like that. But that does add overhead and additional time

</p>
<p><strong>Derrick Showers</strong><br />
to expand on what Ryan and Josh both said, though, I think one of the also one of the great things about working on stuff that's already been patronized is that you don't have to worry necessarily as much about things like accessibility or browser support, because in theory that's already been tested, you know, by the person who built the component. So that's and even just what you were saying about accessibility applying like all across the board, like you have that advantage too. So like if there is an accessibility bug, like Ryan was saying, or, you know, you can fix that in one place and then It is for free everywhere else.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And you can write unit tests around it automation that constantly keeps checking these components. And, you know, if something does break, it can let you know, before it ever gets into production. Because adding unit tests and writing automation, those are extra steps. But if you do it once, it's really consistent across the board and can catch things

</p>
<p><strong>Stacy London</strong><br />
to the to the point about overhead and like having, you know, a company dedicate money and resources to having a team focused on building like that style guide reusable components, I think it's often hard to justify sometimes to be like, we need to bring an accessibility expert to help build something for the team. But if you have a, like a full time team, that that's what they do is build these things. It's maybe easier to have that conversation and be like, Yeah, and we also need to bring someone on that has that expertise, so that you know, the system works for all products and is consistently accessible. And, and done right. And I think that's that's kind of a nice benefit to it. If your company's willing to do it, they're probably even more willing to, to bring on specialized skill sets.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And that's actually so genossen, who works at LinkedIn was also on a previous episode, he works, he works on the design system team, so like, are like part of the same group. So it's really easy for him to make changes that affect the entire organization and the entire product, because he's, you know, kind of like at the foundation of everything.

</p>
<p><strong>Ryan Burgess</strong><br />
So we're all at fairly large companies, how would someone in a smaller company do that? Because you're not going to necessarily have a whole team dedicated to building a style guide? What's the best way to do that in a smaller team? Maybe it is just a couple to designers and to engineers, like I think that's still valuable to have a style guide and have that written language that show how to create these components and share them. But how do you do go about that, if it's just a small team, I

</p>
<p><strong>Mars Jullian</strong><br />
think we should defer to URI for that answer is like a pretty big company, but relative to a lot of the companies we work for the engineering team is actually quite small. And in probably a year and a half, two years, they've done quite a lot with the reusable components and style guides. And I think, while you can speak more to it, but they've just released their style guide online with all of the reusable components that they've built.

</p>
<p><strong>Jyri Tuulos</strong><br />
Yeah, I can definitely talk to the resourcing part, even smaller companies, or if there's a company that has just less front end resources, it doesn't have to be dedicated people, all it takes is one or two passionate people who really care about this stuff. Maybe working together with some of the product leads or the designers, and kind of setting up a process on the side that builds into these style guides and reusable components. For example, at agile we have, we don't have that many people working on this full time. But we have a meeting every two weeks, and everybody in the company is welcome to join. And mostly it's all the front end engineers, all the designers talking about, basically what they've built in the last two weeks. And that kind of builds that shared knowledge of all the components we have without really having a dedicated team for it.

</p>
<p><strong>Ryan Burgess</strong><br />
And then I guess when you're started deciding, hey, we're gonna have a solid guide, and we're gonna have this component library. How did you approach that? did was it like, people went off and created it? Or was it organically just growing?

</p>
<p><strong>Jyri Tuulos</strong><br />
Well, it started growing organically because we started building UIs in multiple repos. So there was definitely need to have some shared code and some way of sharing it. But then to actually get it to a point where we have a style guide, and is formalized that we had to convince a few people. So I mean, I think it's just a matter of finding the people who really care about consistency. Okay, but consider consistency. Who cares about engineering efficiency, you care about infrastructure, and just like, telling them about all the pros and all the cons?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that makes sense. I think that's probably one of the harder things like we get into some of the cons is getting in alignment and getting convincing stakeholders that, hey, this is a good idea, we should go build this. I think that's always one of the hardest things to do is really get alignment from the team, product managers, designers, engineers, everyone that's involved, it's really hard to get that alignment to say, this is something we should invest in. One of

</p>
<p><strong>Mars Jullian</strong><br />
the hardest things too is because I was starting to build this is in order to justify what you're doing, you need to prove that it's useful. But in order to prove that it's useful, you need to build it. So it's kind of like it starts. It grows organically. But after sort of, you know, this kind of covert, hey, I'm building this thing over here type thing, which, which is really interesting to see it grow. It's also really hard to test to if you're working on stuff, you can't test that it's reusable, because it's not being reused everywhere yet. So it's it's this really interesting dynamic when you start to work on reusable components without having sort of the alignment or the agreement from the very getgo.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think you have to know that it's just going to have to be iterative, like when you're just building it out and like so Atlassian has a design system or guidelines that they've built out and they spent a lot of time like defining what design is and what the product design should be. And then having an entirely dedicated team to build out something called ELS kit, which is a the React UI implementation of those patterns and the components that make it that up. And there are, you know, we were Bitbucket was one of the first consumers of some of these components to go out and be released to the public. And there was definitely iteration like they had the component we consumed it, we ran into like an issue here and there, we'd open up tickets, they would fix it. And then you know, and continue on like that. But being the first product to use it, like you said, like, there will be little, you know, issues, but you can't, you can't like go in a vacuum and build an entire style guide an entire component system, and then release it like almost has to be done like in small chunks.

</p>
<p><strong>Ryan Burgess</strong><br />
I've seen that people try and do that in companies. And it almost, I don't think I've ever actually seen it work. It never does. Because it's too hard. You're no one's gonna give you enough time to go create that, by the time you've created it. There's all these issues that come up, because you haven't tested and iterated on it and actually see, can we actually share these components? Does this actually make sense? And so yeah, I think that's probably the best way is starting small, like create that one input and see if it works everywhere.

</p>
<p><strong>Jyri Tuulos</strong><br />
And the worst thing is a shared component that nobody's using. Like, if it's done, it's no longer shared. It's a big component that like was meant to be shared, but nobody's using that's just like a sad thing.

</p>
<p><strong>Mars Jullian</strong><br />
I think you have to accept that though. Because you can build something thinking people are gonna use it and then realize that perhaps it's either too big to be a reusable component, it's just like too heavy, and you can't get it to be consistent across all your eyes.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, actually, actually ever note, we're kind of struggling to create our own style guide, like we started using React storybook and kind of going with how small teams, I would say Evernote, still pretty small. But the way like, someone actually just kind of championed it through and converted all of our existing components. Because it's, I think a lot of the struggle Evernote has had is like, we tried to get all the designers like, hey, let's make consensus of what the style guide should be. And then like, it just kind of goes on for this very long conversation that just never happens. And I think like if you are trying to like get a style guide going just like take what you have existing, get it into like a place that it's like, easily viewable and accessible by designers. And then like when they start making changes to it, they can kind of see the impact of what those changes do. And they can start kind of thinking in that like, style guide, ask thing.

</p>
<p><strong>Mars Jullian</strong><br />
I think now we're just doing it on purpose.

</p>
<p><strong>Jem Young</strong><br />
So what I'm hearing kind of from all of you built works in a lot of teams and build different reusable components is the only way to make it happen is you need a champion and you need someone to own it across the board. You can't just say, oh, yeah, I want to make a use component versus Yeah, good job, Josh theory, and then it just dies off, which I've seen happen, you kind of you really have to own it and push it through the system and make sure you keep it up to date. Would that be accurate?

</p>
<p><strong>Jyri Tuulos</strong><br />
Yeah. If it's if it's everybody's problem, then it's nobody's problem. That's, that's what I've found. Like, there has to be somebody who cares about it, who's driving it forward? From the top down. It the whole process doesn't have to be top down. But there has to be somebody who cares about it.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I agree. I think if even in a larger company, it's tough to I mean, I think every company in the world under investigate under invest in infrastructure, and this is is kind of one of those things that fall into that umbrella. So I think you have to have somebody that's really passionate about it. At the top, that's

</p>
<p><strong>Stacy London</strong><br />
I think you have to have like design be as valued as product at at whatever place you are like, if you don't have, if you don't have senior leadership that thinks that design is important, then they're not going to give you the funding or like the the team creation capability to like, do the thing. I

</p>
<p><strong>Mars Jullian</strong><br />
actually think that's pretty interesting, because I kind of wanted to talk about how style guides and reusable components can improve the relationship between product and design. Because you're kind of given engineering. And engineering. Yeah, you're giving people the tools to build things that are visually consistent. Cheers. You're giving people the tools and you're there for reducing the friction that goes into every new project in order to like either build something from the ground up or to align it closer with the rest of the product and that kind of thing. So to your point, yeah, I think it's really important that you have someone that values design. But when you have two champions, probably some sort of a liaison between engineering and design. The rest of the organization doesn't necessarily need to care as much about design. I think they should definitely, but you're reducing the friction and the amount of overhead that'll go into every project and I think it improves the relationship over time. Because you get you get less fighting, you get less head buddy, you get less of an engineer going oh, this is a new project that looks totally different. I'm just gonna kind of do what you want me to do, but actually it's much easier for them to implement someone else's vision or two iterate on it if you give them the toolkits in order to do that. So I think it's great to give everyone the tools, but it's even better when internally as improving the dynamics of your engineering team and design and product and VPS. And you know, whoever else you want to involve

</p>
<p><strong>Ryan Burgess</strong><br />
builds better relationships,

</p>
<p><strong>Mars Jullian</strong><br />
and better UIs. So, better user

</p>
<p><strong>Ryan Burgess</strong><br />
experience is great.

</p>
<p><strong>Derrick Showers</strong><br />
I've actually found the opposite of that. Sometimes I totally agree with everything you said. But I found the opposite sometimes is because at least at LinkedIn, there are there are often times where design will come up with something that's not necessarily patronized. And so it kind of puts you as the engineer kind of in the middle bit of this like centralized design system. And because you're the one has to implement it. So like if you, you know, obviously, in a code review, if you're not using something that's already been patronized, you're going to get questions on your on your pull request on why you're not using something that already exists. And you're like, well, the designer didn't wanted to go a different direction. And and then now you're kind of like in this awkward position between the designer and the design systems team.

</p>
<p><strong>Ryan Burgess</strong><br />
I think, to me, that goes on you as the engineer is, why aren't you like bringing that to the designer and sharing that with them? Because I think at the end of the day, and Josh can correct me if I'm wrong, but I think designers care about consistency. And they say the

</p>
<p><strong>Derrick Showers</strong><br />
same. He definitely does. But you you lose friends that way.

</p>
<p><strong>Ryan Burgess</strong><br />
Josh, would you be mad if I was like, this isn't consistent.

</p>
<p><strong>Derrick Showers</strong><br />
Be honest. And if not, you should come to LinkedIn. Because

</p>
<p><strong>Mars Jullian</strong><br />
I think the problem too, is when you start involving engineers and the reusable components and having a closer relationship with design, they obvious, they start to kind of align with design way more closely. And you start to notice, and you're like, why isn't this consistent with what I wrote? It's just it kind of, it's pretty interesting that, you know, everyone starts to feel responsible for the visual brand outside of design,

</p>
<p><strong>Jyri Tuulos</strong><br />
but that there's definitely that overhead that we've been talking about. And I've seen that there's like, specifically, there's like, overhead for the design process, like you start have to start thinking like, okay, new feature, is this going to be shared? do multiple teams need this? Like, is this? Do we just build it out and do shared components later? Or do we just build it out as a shared component? Now, those are kind of the it's new questions that then you have if you have a style guide, and then in the development process, you just really want to make sure that nothing is a breaking change. So when you're changing code that other people use, you just want to make sure if it's versioning, NPM, packages, testing, whatever you have, like, there's just those additional layers to make sure that nothing breaks.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think if you have a good system to almost like internal open source, right, like you, you allow people to do pull requests. So if that component doesn't work for a particular team, maybe they can do a PR into that component to enhance it. And it can be accepted, if it makes sense for everything. And like, therefore, like, it may not always have to be a giant conversation, you can just sort of improve it over time through like everybody contributing to it, which I think is important.

</p>
<p><strong>Josh London</strong><br />
I think of style guides and pattern libraries, pattern libraries, or design systems as being a little bit different from one another, like I tend to, I think style guides are great, because they give you the base level elements of that you need for everything, whether that be typography, or inputs or buttons or anything like that, that everyone can use. And there's there's really no going around that because you can't make a case that oh, well, this didn't work for my feature, well, it's just a text input, of course, it worked for your feature, you just want it to look a different way. So then that's a different argument. But when you get to like a design system, that's where I've seen it kind of break down is because design is very iterative. So you can go prototype something, go test it with users, you've already built this component. And especially if you have another team that is actually building this design system, you have to have constant feedback to them saying, Well, this didn't test well, or we didn't get the results that we wanted with this particular component, we need to revise it. And if you're doing this every week, or every two weeks, that can really you know, create a lot of overhead and a lot of churn out a lot of stuff and then you end up kind of awry, in my experience, you end up compromising on various things. And that could be at the expense of the user experience, then

</p>
<p><strong>Ryan Burgess</strong><br />
see, and I'd be in some ways that actually be okay. Like I said, like if you change something, I mean, nobody wants to change something every week or every two weeks. But I think if you get that baseline of like that one component, even if it gets changed every week, if it's applied everywhere, then at least everywhere is getting updated all at once. Yes, there's that overhead but that initial like getting that baseline I think really helps save time.

</p>
<p><strong>Josh London</strong><br />
Yeah, and I think I guess what I was speaking to more was like if you've got a let's say TypePad search or like a predictive search, depending on the results coming in from that from whatever your use cases for that you may need a you know, a larger list or a section out list. So that can vary, you know, so that there can be different variants of that And as you're testing through that, I mean, I guess you can get to a point where once it's released, you can say, Okay, now let's, let's push this back up into the design system. And so you may have three different versions of the predictive search results, because there's three different use cases for it now, but if you're trying to design that up ahead of time, and say, every app has to use this particular search result, then that's where you might run into problems. And then you may have one team saying, Well, that's what we have to use. And that's what you just end up implementing. Instead of having those conversations and trying to push that roll that back up to the design system.

</p>
<p><strong>Stacy London</strong><br />
Yeah, you don't wanna like sacrifice UX, just because it's the system. It's the Cumbrae or the system. Yeah, like, but it maybe isn't

</p>
<p><strong>Josh London</strong><br />
the best. That's why I've always liked style guides, it's a guy.

</p>
<p><strong>Ryan Burgess</strong><br />
When do you feel like I think, as a designer, and even as engineers, do you feel something like a pattern library style guide? Reasonable components, any whatever it is, do you feel constrained, I think that can be a con as well, that I've heard lots of arguments against the pattern libraries is because you feel like it's already been done, I feel constrained, I'm not recreating anything, I'm just reusing something.

</p>
<p><strong>Josh London</strong><br />
So I think that's a really good indicator of a experienced product designer versus maybe someone who's a little less experienced, is a lot of times you kind of set that aside. And it's actually kind of great to work with constraints a lot. Because then you're you really have to, you know, validate that you need to change this particular thing for your use case. And that constraint being there, you know, may not have forced you into that direction of maybe finding a new pattern that you have to introduce, or at least questioning at first and then finding that No, I don't actually have to have to change this. Because it's been well thought out. It works, you know, perfectly for my use case. But it's also I mean, I've seen that where, you know, people's egos getting away, and they'll be like, well, I want it to look this way. And I want my my stamp on this. That's where I think the conflicts kind of arise. And, and in my experience,

</p>
<p><strong>Ryan Burgess</strong><br />
engineers do it all the time, we recreate things all the time, it's like, I can write this code better. And so I can see that even happen, I think there

</p>
<p><strong>Jyri Tuulos</strong><br />
has to be like with any system, there has to be some room for experimentation. Like it has to be, it's like, you know, like evolution, like there's a kind of the normal path where things kind of evolved iteratively. But sometimes there's like a crazy mutation that might be better for everybody. And so you, you want to allow that sometimes, there might be a new product that a team starts building, and it might be okay for them to totally take their own way with it. And, and then as an experiment to see if that kind of UI works or if those features work. And if they end up working, or other teams start asking for the same things, then you can kind of go back and add them into the library.

</p>
<p><strong>Stacy London</strong><br />
Yeah, as an example, for BitBucket. We've got a like our own little separated out component library that isn't really meant to be shared with the entire product suite. But it is sort of this place where we can define a shared UI component with the idea that maybe like it's only useful for Bitbucket right now. But maybe it eventually might be useful for another product within Atlassian. And therefore it at that point, maybe we take it out of our own little self maintain library. And we we promoted up into Atlas kit and we make it shareable for the world and kind of have like this little sandbox where we set it up so it could be shareable. So you at least do some pre work to make sure that you're coding it in the right way. So that is like the shareable thing.

</p>
<p><strong>Jem Young</strong><br />
And we've talked like everybody's kind of touched on it here in there. But one of the main cons of reusable components is you have to have good testing in place. Because if you change a base component, and that propagates out, yeah, that's cool, fix it for everybody. But also it's double edged sword, it can break things for everybody, tons of regressions, exactly. And it's very, very subtle. And I've run into it before and it's just, you might not even notice it till months later. And you're like this thing used to work and it doesn't work. And you have to backtrack, backtrack, backtrack and find out. So I change the base component on you. And we didn't have testing in place to cover the that's this, like that's more of the real world. And what actually happens when you try to implement it's yeah,

</p>
<p><strong>Jyri Tuulos</strong><br />
it's really hard. We do all of our components, each one of them is an NPM package internally, and we submit we do like semantic versioning. So we try to make it clear what's a breaking change and what's not. We can do pre releases, stuff like that just like an open source. But even with that, it's hard. Like that's like the first thing I look at with every PR against our components is like, what does the developer think the version is? Did the public API change? And if it did, like, is this mark does it break? conversion. And even then if it's a braking version, then that's going to be a manual upgrade for every application that's using the components. So even with versioning, then you get into the issue of having multiple versions out there. How do you communicate

</p>
<p><strong>Mars Jullian</strong><br />
that to the different teams? Is it just sort of, you know, broad email, or most people actually looking at the pull request? Or is this just you have to be very proactive. And you really have to keep on top of how the library is evolving?

</p>
<p><strong>Jyri Tuulos</strong><br />
Well, I would say, we have a Slack channel where we can just post like the most critical updates, and that's where all the UI engineers are. And then we have the meeting every two weeks. That's kind of like the bigger updates kind of thing. So usually, what happens is that there's a change a new feature to a component, and we add it to the code base, but it's disabled by default. So it doesn't break anything for anybody. And then we start communicating about like, okay, let's roll this out. Let's enable it everywhere. And so it's definitely like a communications thing. It's a coordination heavy thing.

</p>
<p><strong>Stacy London</strong><br />
Yeah, same for the so that whenever Alice get updates, one of their main components, there's a change log, and it talks about, like, what was break breaking change, and you don't have to consume it right away, obviously, like you do when when you need it. But there's also just that human component, like we have a meeting every, every week with the the larger design team that's done the design system, as well as a member from the Alice kit team, so that we talk through like, this is, you know, this, this changes here, you're gonna have to consume it, or hey, we ran into these issues like we have that like a conversation. So it's not just like this sort of, Oh, watch, just watch the change log. That's all you need to do. You actually like talk, talk to people, human human interaction,

</p>
<p><strong>Ryan Burgess</strong><br />
which is so funny, because on our previous episode, we were talking with Laurie Voss, from NPM. And he was like, NPM, is trying to make it so that you can avoid those human interactions and just follow the NPM package updates and everything. But I think it is really, really tough to just do that and just follow a change log, you need those discussions in person.

</p>
<p><strong>Stacy London</strong><br />
Yeah, because humans are imperfect, right. And the change log is, you as you have to make sure that all the changes are documented in the change log, and maybe you miss something. And you know, people make mistakes, I think it's so important.

</p>
<p><strong>Jyri Tuulos</strong><br />
And then you get into all kinds of very hard to catch stuff like changing the base styles, and then a component having some kind of custom style that conflicts with it, it gets like there's all kinds of stuff that's hard to catch between like multiple components updating at the same time.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've talked about some of the pros and cons of why we'd want to have a style guide, component library, whatever you want to call it. What are some tools, frameworks, libraries that can help create these style guides? Are there some that you've used, or some that you've seen out there open source that are really good that people could start using

</p>
<p><strong>Jem Young</strong><br />
surely react, and Angular in general, kind of make reusable components easier? Because the idea behind it at its core? Are components? So that makes it pretty easy? Yeah, kind of drives the path.

</p>
<p><strong>Jyri Tuulos</strong><br />
There's this great talk online called react plus x.

</p>
<p><strong>Mars Jullian</strong><br />
Wait, that sounds familiar?

</p>
<p><strong>Jyri Tuulos</strong><br />
Yeah. So Mark gave a talk at front and J forward J. S. And you can look it up. And so yeah, it's exactly about this, how great React is for reusable components?

</p>
<p><strong>Mars Jullian</strong><br />
Well, I almost I don't know exactly how I say it in the talk. But I would go so far as to say that react as a framework has helped do AI engineers think about things in terms of components, which was a really big shift and kind of why we've evolved from style guides to being guides and patterns and everything and actually moved into like tools that engineers can use. So there you can have designers working on, you know, different visual language, but we can also make it like, you know, reusable components are called reusable for a reason. And I think it's just you evolve past just having guides, you have actual things that people can use, and I think react has done a really great job of championing that concept.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I mentioned it earlier. But for for React, we use a thing called react storybook. It's just like this kind of playground for like, you could like literally just take the component you made in React and just shove it into that playground. And it just makes it really easy for you to add it to the nav and then you just click it and then it renders and it's actually been like, pretty useful for us because it doesn't render there. Like formerly, it's like, oh, wow, there's a lot of missing things. This component needed it's not as reusable or consistent

</p>
<p><strong>Jyri Tuulos</strong><br />
as we thought so it's like living documentation.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, is literally like living documentation. And it's been like super useful. It's like helped a lot with like, QA ng things and stuff. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
there's a lot of great tools like that. Like I think there's yeah, there's a React style guide generator, which Yeah, same thing. It takes the component I don't know if that's the same tool but

</p>
<p><strong>Augustus Yuan</strong><br />
it's like it's like pretty similar.

</p>
<p><strong>Ryan Burgess</strong><br />
I seen a couple of them. Yeah. And it just creates your own interactive library from exactly which is great. Yeah, storybook

</p>
<p><strong>Stacy London</strong><br />
has been awesome. That's like Alice kit uses a lot of that users storybook to show you the various state of a particular component. Like if you have a Navigation component, here's when the The drawer is open for search, here's what it's not, here's when there's many items in the navigation versus not many items in the navigation. So they give you all these examples to, to click through. And it's just to see the implementation examples and details. And then also you can like drill into the code and be like, how do they get their component to actually behave like that. And so you can see, that's good for engineers to see, like the example of how it was built to.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, that was actually like something I was gonna bring up earlier, like another huge benefit for style guides. It's like onboarding, like, I've found that it's like, someone can just go there, and they see how components use and it should, or even like a designer, they just go there and go to

</p>
<p><strong>Ryan Burgess</strong><br />
these are all our different styles. Yeah, this is what it's like.

</p>
<p><strong>Augustus Yuan</strong><br />
It's just like a really like, oh, that's how you use it. Don't copy paste.

</p>
<p><strong>Ryan Burgess</strong><br />
One, I think one that always comes to mind that I was really impressed by is called Pattern Lab, Brad Frost and Dave Olson had created that. And it breaks everything down into like how to create components into they call them molecules, organisms, and atoms, and they break how this component is actually created.

</p>
<p><strong>Josh London</strong><br />
I think it's really, really interesting. And Brad Frost actually even has a book called atomic design that covers a lot of that. And I think those are really great resources. Pattern Lab actually helps you create your own. So very cool. And I've been using Brad Frost atomic design for a couple of years now. And it's been hugely beneficial, just because you can break things down to the atomic level, and then you building them, like, you've got some atoms into a molecule, and then a few molecules into organism, and then you can start putting those into templates. And so it's really great to be able to break those down and kind of see how everything fits together. And it really helps just, with even just like semantic naming, and things like that. So you kind of nowhere, where things are like buttons are going to be in the atoms. Because it's one thing,

</p>
<p><strong>Ryan Burgess</strong><br />
it makes a lot of sense. Once you break it down like that. I really liked that they use that analogy, because it works really well. And actually, we had Brad Frost on site at Netflix, a couple years ago, but he had given a presentation on that. And yeah, I thought it was explained really, really well. And that made me it made a lot of sense to me at that point.

</p>
<p><strong>Derrick Showers</strong><br />
Distribution is another I think like, it's just something as simple as NPM has really helped. Like I remember, I'm sure we all remember back in the days of jQuery where you had to, like, download the jQuery plugin and like, but you know, it's so easy not only to, to consume components, but also to publish them to and easily get people to see it, you know, NPM has done, like stuff that has always exist, I guess, with node, but now is finally easy to do on the front end.

</p>
<p><strong>Jyri Tuulos</strong><br />
Yeah. And it's like good to realize why it's so useful, like versioning, it's really good. But also like, compared to the jQuery times when you might have had jQuery in your repo, like you commit it the libraries in your area, which eventually always leads to somebody modifying the third party library. And that's when you're like, that's like, that's the end of the like, line because you don't you don't get to upgrade the thing anymore, because now it has local updates. So NPM, just it's such a nice abstraction for okay, this is the stuff you're not supposed to touch. And this is the code that's local to the repo.

</p>
<p><strong>Ryan Burgess</strong><br />
And you can have different versions to like jQuery, like, I don't know, I remember the days when I would go into the code base, and there'd be like three links to jQuery. But it was all different versions, because some library or framework needed that, like you were using a carousel that needed jQuery 1.7 and some other tool on your site, like, navigation needed 1.5. And so they're calling all these different libraries. And it's just crazy, which MPM solves a lot of that, which is great. Yeah,

</p>
<p><strong>Mars Jullian</strong><br />
I mean, but for all of like, you know, a lot of us complain about jQuery, but it didn't make a lot of things really easy at the very beginning. And actually, if you think if you think about it, they weren't called reusable components. But jQuery widgets are essentially the same thing. And totally without, I mean, this is way more ubiquitous than it was before. But jQuery widgets were developed. And they were, you know, like browser, that Cross Browser Compatible, they would work with different versions and everything like that. And it's really interesting to see that they got it right back then. And now we're all kind of starting to realize the same thing in different companies, you know, over and over again.

</p>
<p><strong>Ryan Burgess</strong><br />
So are these practices done at most companies? Like I know, we've talked about our role now doing that Atlassian has been doing that. Is this like creating component library style guides? Is this something that we are seeing more and more is it something that companies should be doing?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I definitely think so. Like to. So when I said that Evernote started doing it, it was actually the growth team um, Kevin Fahey. They do a lot of experiments that Evernote runs and he like started using storybook as a way to say when we wanted to do like visual AV tests. It was like a really good platform to be like, Hey, here's a component and I can see this variant and this variant and made it very easy for like QA or someone to just kind of see what experiment was running, and then what the different variations are. I think it's definitely something we're trying to continue doing. But naturally, like I think a large part of our discussion is like finding resources and time to actually do it is somewhat difficult.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, it's interesting as most companies will work on their products for their end users. But when you start working on a reusable component library, you have to carve out some of your resources to build products for your company, if that makes sense. Like the clients for those particular engineers are no longer your end clients. You know, it's internally, really developing for developers, which is, you know, a lot of companies work, you know, they provide software solutions, like NPM is for other developers. But when you really think about building internally, you really start thinking about the other people you're working with. Yeah,

</p>
<p><strong>Jyri Tuulos</strong><br />
I think there is a point like going back to the to Ryan's point about smaller companies, I think like that, absolutely. The smallest startups like should not do this, because it's way too much overhead on top of iterating. Fast. So I, the breaking point is either like having UIs and multiple repos. That's kind of what's like, then you start need to start thinking about consistency. But also, like, if the company gets big enough, even if you're in the same code base, but if you have UI engineers, or designers who don't talk to each other every day who are not sitting at the same table physically, then it kind of gets to a point where you need to have that source of truth somewhere else.

</p>
<p><strong>Derrick Showers</strong><br />
Okay, I think so one of the I believe one of the reasons that LinkedIn invest so much money and or so much resources into it design systems is because we heard from users. And it wasn't that long ago was maybe like 434 or five years ago, probably that they heard from users that there's, you know, these different products, different teams, different repos. But different products at LinkedIn that feel very different. Like, like we had users say, we're using a, we're using a product that is a LinkedIn product, but it doesn't feel like LinkedIn. So that's a really easy way, I think, if when you get to that point to justify the expense of making things consistent.

</p>
<p><strong>Josh London</strong><br />
So I actually work on the a lot of internal products, and it's for our studio for all the Netflix originals. And so we have quite a few apps that our employees use to get like all their workflows done. And I was new to the team. And I was I was really glad to see that we had a design system started in both sketch, and then also kind of like a code base, or legacy as era SAS repo, essentially, we don't have any React components or anything built yet. But to see, to be able to get that feedback immediately from all the various stakeholders, because some of the stakeholders will jump from, you know, one application to two or more. And if you don't have that consistency there, they don't know if they're in our internal tools or not, or having a big visual jump may be jarring to them and kind of confusing. So being able to start from scratch, I guess, and trying to, you know, publish that to like every single application. We're seeing some of those those pains on like, we don't have enough time, we're, you know, building apps really fast. And it's to try and take some of that some of the resources away from that. And trying to build this visual system that everyone can use. And engineers can just kind of plug and play. It's kind of a hard sell, because it's internal tools. But I think it's just as important if it was public facing,

</p>
<p><strong>Derrick Showers</strong><br />
we had this exact same thing. And so like all of our internal tools for a long time, and still to extend today, that legacy ones are Twitter Bootstrap, you know, so because it was just the easiest, and a lot of the internal tools are built by back end engineers, and they just needed a quick front end. So like, you know, bootstrap was just the easiest solution. But I think we found and I totally agree with that. It's it's important, I think to invest in in making sure there's still that same design system for your internal tools, because then it's it's it just makes it easier, like the same reasons that that is important for your consumer facing product to be consistent for all users is just as important, if not more important for productivity for all of your internal tools,

</p>
<p><strong>Ryan Burgess</strong><br />
you still have customers that are using your product, it doesn't matter if not even heavier customer. Exactly. And when you're you're investing in your own team, or whoever like is using this in your company. And if it's going to cost you more time to figure out a bad UX. Well, that kind of sucks. So if you can make it better and really consistent across the board.

</p>
<p><strong>Mars Jullian</strong><br />
We've missed a couple two.

</p>
<p><strong>Ryan Burgess</strong><br />
What are some good examples of style guides that you've seen in the wild? I'd love to hear some examples that you guys have found really useful.

</p>
<p><strong>Derrick Showers</strong><br />
I saw I think like I know everyone hates it, but like I think Bootstrap is a good way for people to get started like it. It gives all the advantages that we talked about to people that don't want to necessarily worry about figuring all that stuff out and it's consistently good UX like You know, it gets a bad rap just because it's used. It's because it is so popular and everything looks the same but,

</p>
<p><strong>Jyri Tuulos</strong><br />
but it's also like if you get the less or the SAS version of Bootstrap, it's fairly customizable, like, Yeah, our base styles are actually based on Bootstrap. And we just we just replace some of the variables, we redefine some of the classes to a point where it doesn't look like Bootstrap anymore. But it's still a useful base for the styles and for the markup or like accessibility for stuff like that. Yeah, exactly.

</p>
<p><strong>Mars Jullian</strong><br />
Well, Bootstrap has a React Bootstrap. Well, there's an NPM package called react bootstrap with is eight, which is a React reusable components library for Bootstrap. So if you know you go to, you go to the base styles from Bootstrap, and you start customizing your theme, it's going to apply to all of your bootstrap components. And I think that for small companies, we're looking to get off the ground really quickly, public, reusable component libraries, or style guides of any kind really are useful to start somewhere, especially because when you have a small company, you don't necessarily have front end engineers, you have someone who's trying to do all jobs all at once. And you really need the tools to get off the ground running,

</p>
<p><strong>Ryan Burgess</strong><br />
especially startup to it's like anyone just ship it, get it out there. I think one of the first style guides or interactive style guides, I think that's a better way to put it that I ever saw that I really liked. And I feel like they've kept it consistent is Starbucks, I thought that was one of the first ones I'd ever seen that was

</p>
<p><strong>Stacy London</strong><br />
innovative. They were

</p>
<p><strong>Ryan Burgess</strong><br />
they really were and it was impressive, because you could go through and you could see how they're modal windows open and close. And like how their inputs work. I always found that one to be one of the first ones I'd ever seen. And I always think of it as still consistently pretty good. Cheers.

</p>
<p><strong>Mars Jullian</strong><br />
Also, everyone's on their laptops now googling Starbucks.

</p>
<p><strong>Jem Young</strong><br />
I just found style guides.io.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's a great, so many examples. You kind of blew Augustus pic for later. But it's still very good, because it has a lot of really good examples on there.

</p>
<p><strong>Mars Jullian</strong><br />
I think also Admiral just published a style guide. There reusable components and working on that one. Yeah. It's interesting.

</p>
<p><strong>Jem Young</strong><br />
Since I've a lot of style guide experts here. What's the difference between a style guide and a brand guideline? That's like most companies that brand guidelines,

</p>
<p><strong>Ryan Burgess</strong><br />
Josh touched on it a little bit and talking about the like fonts like typography and everything, but uh, Josh can probably answer better than I can.

</p>
<p><strong>Josh London</strong><br />
Yeah, I mean, I guess that's kind of your core, it's typically consumer facing. And so it's kind of like your core personality, visual personality, and sewing. And a lot of it too, is how to use the logo type. And you know how to put clear space around it, how much padding does it need, do this with it, don't do that with it, don't squish it, things like that. And then here's our color palette, our typography, kind of just setting some of that base information. And I think a lot of times too, it's usually in a marketing setting versus a product setting. And so it's usually not nearly as robust. And a lot of times it's a PDF.

</p>
<p><strong>Jyri Tuulos</strong><br />
It's just filled by different people, like usually marketing is a different department from engineering UX. So I would assume in most big company,

</p>
<p><strong>Ryan Burgess</strong><br />
it's not an interactive, like I think of like at Netflix like we have, we definitely have a brand guide. And it's even for like partners, like we'll have TV manufacturers that ship with Netflix spilt in or on the remote, there's a button. And they have to follow how like exactly what Josh said, how does that logo look? What's the color of the logo, what's the padding, what's the margin, all those types of things need to be done appropriately to the brand. And you have to follow those guidelines if you're going to use their logo. So I think to me, that's a brand guideline versus like, a style guide to me is a little more interactive, and it's kind of what we're talking about of like reusable components and something that we can use internally to make sure that we're keeping things consistent tears,

</p>
<p><strong>Stacy London</strong><br />
I've generally seen style guides will sit in early days before you know, kind of even the idea of componentized things they would sit on top of your CSS. So it would be like built in it would be a part of your application. And it would just be like, here's just a big giant page that has sits on top of your actual CSS and shows you what an icon or input or a paragraph or whatever it looks like. But it was but it's rendering it because based on your actual CSS that you use you also use for your your product. So I think that's kind of a big difference from like the PDF brand guidelines versus like style guide. Yeah, no, it

</p>
<p><strong>Ryan Burgess</strong><br />
makes a lot of sense. So as we wrap up today's episode, we like to share pics of things that we've found interesting to share and let's go around the table and share pics for today's episode. Derek, let's start it off with you. We have

</p>
<p><strong>Derrick Showers</strong><br />
sure I have two completely unrelated to style guys by ironically, I think both of them have very well designed products. So we'll just go with that. My first pick is Instacart. So I've used Instacart for I think, since they started and I actually recently listened to another podcast how I built this, which I mentioned last week, I have been into since Ryan is suggested a good episode. Yeah, they did an episode on Instacart. And, but anyway, just just there, I think their product is amazing. And I think their idea is great. I love not having to go to the grocery store. A lot of times people say it's because I'm lazy, which I am. So that's fine. I'm okay with that

</p>
<p><strong>Ryan Burgess</strong><br />
you'd like convenience.

</p>
<p><strong>Derrick Showers</strong><br />
And my second pick is Blue Apron. And something else I've been doing for a while. But no, my wife and I do Blue Apron. Probably twice a month. Now. We just love it because it's just fun to the experience of cooking whatever dishes and all the recipes are really really good. So probably more geared towards people that there's like two at least two people in the household because, you know, one person is kind of, you know, it's hard to I guess you can cook one dish and save you know, for leftovers, but But anyway, if you haven't tried it, I mean

</p>
<p><strong>Ryan Burgess</strong><br />
it is good. My problem with it is I'm lazy and takes a lot of work. It gets like a good 40 minutes to an hour to cook but balanced out my Instacart shopping Fair enough. I like your attitude there. Derek It is delicious food though. So it's good.

</p>
<p><strong>Mars Jullian</strong><br />
You could also like try caviar and just have your food delivered to you.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that

</p>
<p><strong>Mars Jullian</strong><br />
cookie involved here.

</p>
<p><strong>Ryan Burgess</strong><br />
I got this saga Ito

</p>
<p><strong>Augustus Yuan</strong><br />
was one but Jem mentioned it. So I don't worry, I have a backup. Don't worry. So one is Quick Draw. I think we actually mentioned it at another podcast. It's like basically Google's thing where you it gives you a word and you draw something I tries to guess they actually publish the dataset for it. And you can actually go to a bunch of these drawings and see 10,000 different ways someone drew like a fire truck or like an anchor. And actually even though website is just made really incredibly it's like a renders at all in a giant canvas. And shows every single drawing that every winter. Yeah. And then I guess going with Google, Google I O was last week, and I heavily recommend just checking out the videos. There's a lot of good things that came out like Android. Oh, this new link or not new language, but it's gonna be supported by Android pop was made by Yeah, Kafka and paid by IntelliJ. So yeah,

</p>
<p><strong>Jem Young</strong><br />
and the lens. That's cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Use

</p>
<p><strong>Jem Young</strong><br />
lens finally. That's cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Maurice, what do you have?

</p>
<p><strong>Mars Jullian</strong><br />
So my first pick is a dot single div.com, which is this website where one person uses a literally a single div and has all these crazy drawings trying to I guess, you know, illustrate like literally illustrate the power of CSS. And my second one would probably be detour, which is an audio walking tour app and different cities in the US, which was developed by or actually, the developers of detour, also did the SF MOMA audio walking tour. So it's supposed to be really interesting and take you to sort of hidden corners of the city. So I haven't tried it out yet. But I've heard really good things from some people. So I'm looking forward to aimlessly getting lost in

</p>
<p><strong>Ryan Burgess</strong><br />
San Francisco. That's really cool. Uri. What do you have for us? So first

</p>
<p><strong>Jyri Tuulos</strong><br />
up, I'm gonna do a shameless plug, we did publish our style guide, just this week. It's at ux.ad roll.com. And you can see all of our base styles in action. You can see all of our React components in action. And there's even a section for voice and tone from our copywriters. So check it out. Let me know if you have any comments. If you find any bugs,

</p>
<p><strong>Ryan Burgess</strong><br />
should people reach out to you directly?

</p>
<p><strong>Jyri Tuulos</strong><br />
Sure, why not? The other pic that I have is a podcast called reasonably sound. It's very interesting. I'm kind of a music nerd. And so that kind of leads into this podcast. They cover interesting phenomena in audio and sound. One example would be they had an episode on the inception sound, the brown and kind of the origins of the sound and how they take it apart, like acoustically and stuff. And it's pretty interesting. So those would be my picks

</p>
<p><strong>Ryan Burgess</strong><br />
jam, what do you have?

</p>
<p><strong>Jem Young</strong><br />
My first pick is a rare treat, because this pick is probably older than some people listening to the podcast.

</p>
<p><strong>Derrick Showers</strong><br />
I thought I was gonna shower thought, no, I

</p>
<p><strong>Jem Young</strong><br />
had a shower thought. But I decided to do away with that. Now, the first pick is why does chicken cross the road? But it's a text link that probably exists on some bbs like long, long time ago. But it's it's a lot of famous people's solutions to why chicken cross the road. I find it fascinating because I like a bit of philosophy here and there. And it's, it's a good read, if you're ever boards read through it. My second pick is bit nerdier. But still just as cool as six proxies and reflection proxies are awesome. And the reflection API is also cool in JavaScript. And I feel like we haven't used it yet, even though it's been around for two years. So Mozilla has Mozilla hacks, which is a blog about just Random Hacks. They do a lot of smart people there. It's worth reading. I think everybody should know a bit more about proxy. So we can start building some software that uses things like that.

</p>
<p><strong>Ryan Burgess</strong><br />
Josh, what do you have for us? My first one is

</p>
<p><strong>Josh London</strong><br />
a little travel related, I just came across it. I haven't used it yet. But it looks really promising. It's called I believe it's pronounced inspire roc, I in SPI r ock.com. And it's basically you just type in your destination, your dates, and then it asks you what kind of activities you want. So you can say, I wanted some popular or hidden gems fast paced medium, or slow and easy and enter this criteria, and then it gives you a plan, and it'll generate an itinerary for you. And then you can adjust it and save it. And then of course, they want you to pay for the hotels and the flights and everything through them. But it looks promising. I think I might try for my next, my next, my next trip. And then I have two they're very really are pretty related. But the Envision, I'm sorry, sketch app. So there's two things. One, they just released a prototype portion of it. So now you can do all the like prototyping within sketch. And then it's, you know, uploaded to envision and then you can do clickable prototypes between all your different screens. And something somewhat related would be Airbnbs react sketch app. And I haven't used that yet. But I do know someone on my team who was pretty excited about it. Yeah, that's it. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that's pretty cool. Definitely. I've looked at it a little bit. And I'm, I'm pretty impressed by the React and sketch integration. That's pretty cool. Stacey, what do you have? Alright, so

</p>
<p><strong>Stacy London</strong><br />
two picks. First pick is I talked about it a decent amount during this episode. So I feel like it should be my pick. And that is Atlas kit. It's open sourced. So it's public. I think it's kind of nice that a company that created something a design system, as well as the UI implementation component shared libraries, like open sourcing it and sharing it with everybody. So it's cool that you could like you, if you're considering building something like this out, you can dig into this code and see like how, how Atlassian chose to do it. So that's Atlas kit<a href="https://twitter.com/atlassian">@atlassian</a>.com. And there's links there to like, not only the code implementation, but then also like the philosophy and design guidelines and such. So that's my first pick. And then my second pick is it's been very sunny here recently. And I think this song is a very, like, summary, happy times kind of song and it's by an artist called dziadek. And it's called actually smiling is the name of the track. It's another ghostly international artist, and I like them a lot as you might string together through my recommendations.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on usually do have some good music recommendations. Alright, so for my picks I have two one is totally a shameless dad pick. As Jem had mentioned in a couple episodes ago, I recently had a my first child, so I needed a diaper bag, which is something I never thought I would need. But of course, I need the nerdiest one that I can find. And so there is the XLR eight connect diaper bag. And what that is, is it's a backpack and it has a charger for your phone built in. It has the light to search inside the bag has a Bluetooth speaker built in and then it has a bunch of cool shit for like changing your baby's diapers. It has a bunch of compartments for like, like the milk and everything to like put that in there so that it kept cold. It's pretty cool bag. I totally highly recommend it to any other parent that needs a diaper bag. Then my second pick is a Amazon TV show, which I recently watched. They have three seasons. It's called Bosch. It's a cop show, I highly recommend checking that one out. Before we end the episode. I want to thank Yuri and Josh for joining us and being guests on the podcast. It was a pleasure having both of you. Where can people get in touch with you? Josh, you

</p>
<p><strong>Josh London</strong><br />
want to start? You can find me on Twitter. It's just at Trashmore London

</p>
<p><strong>Jyri Tuulos</strong><br />
URI. You can also find me on Twitter. I'm at JTU You LLS?

</p>
<p><strong>Ryan Burgess</strong><br />
Great. Thank you both again for joining us. Thank you all for listening today's episode, make sure to follow us on Twitter and Instagram at <a href="https://twitter.com/frontendhh">@frontendhh</a>. And don't forget to ask us questions for AMA episode at front end happy hour.com/ama Any last words consistency

</p>
`;
        return transcript;
    };