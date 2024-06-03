module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of Front End happier podcast. component libraries are definitely useful tools continuing to be fairly popular in our industry and being leveraged by many companies building various products. In this episode, we are joined by Kate where Dean to talk with us about building and owning a component library. Kate, can you give a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?


<p><strong>Kate Wardin</strong><br />
Yes, thank you so much excited to be here. longtime listener. Big fan, okay. I'm Kate Wardin. I am an engineering manager at Netflix. I lead the Hawkins team. Hawkins is our internal design system. It's also the name of the town in Indiana featured in Stranger Things. Let's see. I'm in Minneapolis, Minnesota. What else my favorite beverage. This is really difficult. I love it's getting warm here in Minnesota. So I love like a hazy IPA. Just very refreshing, refreshing, kind of citrusy. But otherwise, like with a nice meal, I would say a Pinot Noir. So more of a lighter red. That's me

</p>
<p><strong>Ryan Burgess</strong><br />
both good choices. I'm all for that. So really good. And it's just Stacey and I but we'll give introduction, Stacy want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy. I'm a principal front end engineer at Atlassian.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm a engineering manager at Netflix in each episode, the front end happier podcasts. We love to choose a keyword that if it's mentioned on the episode, we will all take a drink. And for component libraries, what did we choose? We'll have a bridge. All right, we'll see how much we leverage our keyword in this episode. Yeah, might be might be used a few times. Let's start off with maybe defining what is a component library. There's also many names like design library component library. I'm sure there's others that I'm not even thinking of. But yeah, what is a component library?

</p>
<p><strong>Kate Wardin</strong><br />
Yeah, happy to take a stab at that. So I would say a component library from an engineering perspective is that reusable library of components for us, it's for us it is React components specifically, from a design side. It can be anything from brand guidelines, to styling to color choices to even tone a voice with documentation. So it's this shared language that engineering and design can use when building front end applications. And they can be mobile, they can be web applications, they can be desktop applications, they could be TV applications, like we have at Netflix.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I like to think about them a bit too, as building blocks. Sort of a Lego analogy, but just the sort of base things that if you want multiple applications to have a similar sort of feel, and interaction behavior, that you can share them across a button or your inputs on forms, and they all look the same behave the same, then you get sort of built in things for free, like maybe they are built to be really accessible. And so you get that for free, that kind of thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And then also bug fixes. If there is something wrong you you get to someone else fixes it. And hopefully you get that for free, which is really nice. I also liked that Kate, you mentioned Bran to like colors and things like that. There's even libraries that are really specific to brand for even external, right, how's the logo being used if like you're presented on another website, or whatever it is like there's there's branding, even that is leveraged by people outside of your company. So that that's another form, I guess not so much component based, but a design language library. So when you said that it sparked one for me, I was like, Alright, there's also that. Yeah, absolutely. What are the benefits? I mean, for me it consistency, things like that stand out. But I'm curious for all of you what have been the benefits having a component library leveraging it in a company for a product?

</p>
<p><strong>Kate Wardin</strong><br />
Yeah, I would say a lot of so many things. Okay. Let me start with and I alluded to this before, but that bridge, that common language between branding, design, writing engineering that can sometimes be really challenging without that central core component library core design system. Also, and I think about from both external and internal experiences. You have this really predictable experience as you're navigating through applications that were built. Built with a design system, there's this psychology of shifting context that we might not even be aware of. But as we're using different applications, if a button just looks entirely different or interacts entirely different, it's going to be costly, like over time. And so that's another one of those really feel intangible, but it is a benefit of like reducing the psychology shift as you're using different applications throw it in an ecosystem. C'est la vie mentioned accessibility, we have a really big accessibility initiative right now for our, our design systems. And I'm going to say our keyword leverage, right leverage, use leverage

</p>
<p><strong>Ryan Burgess</strong><br />
for cheers, cheers, cheers.

</p>
<p><strong>Kate Wardin</strong><br />
Right, because if we build a button once, if we build a complex component, once, this frees up those designers and engineers to focus on less on those low level things, and more on those high level creative, you know, user needs workflow innovation, so that leverage is extremely powerful. There's

</p>
<p><strong>Stacy London</strong><br />
some some interesting technical benefits to obviously, like, your engineers aren't just like, creating bespoke buttons all over the place that are slightly different. And even when you get down to say, like performance stuff, like if you have a bunch of bespoke React components that are various different flavors of buttons, all of that gets bundled into your JavaScript bundles, and like, so that starts to potentially make those way bigger than they need to be. And if you have just a single component being bundled in, that's reused all over the place like that can have some performance benefits. Love that.

</p>
<p><strong>Ryan Burgess</strong><br />
What I'm hearing a lot too from both you saying it's like, it's like reduces cognitive load on many things. Like there's the, the user side of it, Kate, you had mentioned, like people using tools across an ecosystem or across a product, whatever it is, is like they shouldn't have three different form input fields, 10, different buttons, whatever it is, it's like that's can get confusing, and we want to build a great user experience. And so if you think about it from an approach, where it's like, Don't reinvent the wheel, it's like, that's exactly what happens. But then it's also cognitive load for designers and engineers, that they don't have to think about those things, they can innovate on something different. But also, they can actually innovate on that specific thing, if the button needs to change, because it's not really meeting the needs for everything or whatever it is, like, we're tired of the color red at Netflix, we want to be blue now or something, it's like you can make those changes. And everyone adopts them fairly quickly, right? Like it's the you don't have to go in and search the code base and make those updates teams are just getting those updates from that single component or multiple components that changed.

</p>
<p><strong>Kate Wardin</strong><br />
Yeah, that's such a good call is, is that changing once and everyone reaps the benefits, there is a really cool, like success story that might seem, you know, minor to external listeners, but even us, like the external design system, introducing the thumbs up feature for for Netflix, without the design system, you know, for my understanding, I'm on the internal design system. But that would have been extremely costly. Such a simple thing to like, use it throughout all of the different workflows are user experiences. And with the design system, that was a big success story as it was just getting launched. Well, I think,

</p>
<p><strong>Ryan Burgess</strong><br />
too, in that scenario, and I'm not super close to as that got built either. But I think it also changes a bit of the mindset of engineers and designers, too, is that sometimes in companies, you have people a little like siloed thinking they're working on a web site, or they're working. You know, in our case, like Kate, you mentioned, there's TVs, there's web, there's mobile. And I think when you just put it in a component library, you force that decision making to is like, how does this extend and work on the TV? How does it work on the mobile device? And it just really forces those conversations because you want it to extend? That's the whole point of it and keep that consistency. And so I think it also forces us to have those conversations and think a little more broadly than just like our scenario, that we're leveraging it. And so for the user on the other end, it's like it's a consistent feel, because there's more thought being forced into it.

</p>
<p><strong>Kate Wardin</strong><br />
Yeah, that's so true. And those like, kind of what you're what you're speaking to those design tokens, especially if you have multiple platforms that you're exposing via user experiences, internal or external, the use of design tokens is so powerful, because again, you can have these themes that regardless of if it's an iOS app, or Android or TV, you can change color once and it changes it everywhere. So those API's are pretty awesome to lots of leverage there.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. Lots of leverage. I was going to use the word extensible, but I like leverage at that point.

</p>
<p><strong>Stacy London</strong><br />
100% for the token stuff that one of the things in if you if you have a company that's been around for a while and you have applications that have lived multiple years, they're probably in different stacks. And one of the challenges with some, like early design system stuff was our, you know, we're doing it and react or using, you know, CSS and JS are whatever flavor of the day thing. Well, that would only work if you only built in that stack, and only built with those things. And now we're at this point where we have like CSS properties and variables, where you can define them in a way that like any stack could use. And that's so huge, really helpful.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, I know with anything, there's always trade offs, right? There's a lot of amazing things that we shared about component libraries. But I'm curious for all of you, what are some of the trade offs for leveraging a component library that, you know, teams should be aware of,

</p>
<p><strong>Kate Wardin</strong><br />
I think, what comes to mind for me is the engineering or design freedom and sometimes feeling like we're limited in the creativity? Sometimes, you know, if you only have a set of Lego blocks, and you you want to do something really complex with your user experience, and you only have these Legos like, oh, well, then what do I do? If I don't have the right Lego blocks? You know, you're restricted, it might feel restricting. So sometimes there are those edge cases, and what's the design system doesn't yet quite support or, you know, it's by design, the components are built in a way that's going to be, you know, the most basic and the most applicable to the most use cases as possible. So sometimes that can be restricting. But I'm always wanting to think about the silver lining and things. And you know, for that, I think it's about instead of spending that time and energy working on, you know, customizations and overrides, like, Let's spend that time on, again, those innovations of how can we solve the user's problems in different creative ways, like using those Legos instead of having to design this button and spend my time on that? So I think just depending on the implementation, and the components that make up the design system, it can feel restrictive for participants and teams, leveraging the system? Yeah,

</p>
<p><strong>Stacy London</strong><br />
I think sometimes, too, depending on the model that you have at your company. If if it's like sort of an open source, internal open source model, like can engineers from other teams, designers from other teams, like contribute back into it? Or can they not? Is that like a situation where you need to have like, a discussion with with a design system team and then put in a feature requests and see if it can get roadmaps? And so sometimes it can feel like if you're on a feature team, and you're trying to move, like, sort of quick, sometimes there's this connects there, and it's like, how do you make that work really well. And sometimes that internal open source model can kind of help that, but you have to be careful because like, everyone's sort of motivated by their individual feature team, things that may not make sense to push back into the design system. So there's some kind of push and pull there.

</p>
<p><strong>Kate Wardin</strong><br />
I love that that's such a, that's so real, that's such a good call out. And because we don't want to be a bottleneck. But naturally, that's going to happen when you have the central platform team. And so I love the open source, inner source model, we've been trying to encourage contribution, it is tough, because people still think like, Oh, I didn't know I could or, you know, do I have to wait for your team to review the PR and stuff like that, but it can absolutely be a bottleneck if, you know, one central team has, of course, all of the users and teams that are leveraging the system, and you gotta wait for your, your feature to be, you know, up next. So that is that is the downside of not having that ability and control over over changes and priorities all the time.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, really good call out there. Because that is like, it's, it's always like, how can we move fast, right? Like, I think as engineers, we want to be able to just like innovate and go. And so when there are those extra steps process that can feel daunting, I definitely see that in the past. Also, another thing, there's also ways in which it dictates a lot of things for even the technical aspects, right? Kate, I know you mentioned like Netflix, it the component library is react based. Now, if you have teams that are using something like Angular or web components, that's different. And that will not necessarily work. You can as a, you know, central team, Kate's team could say, All right, we're gonna support them all. But that's really difficult. That's not a simple task, because now they're going to have to adopt these changes or feature sets or components to each of the frameworks that are out there. And so I could see that been challenging for teams to if they don't like React, they want to use something different. This is, you know, preventative like they're, they're making a trade off there. So those are things to definitely think about as well. I have seen companies try and solve that. I'm not sure that's the best use of their time. I could be wrong, but having to try and have a component library that works for every framework that's out there.

</p>
<p><strong>Kate Wardin</strong><br />
Yeah, that restrictive feeling of not only of course, like design choices, but engineering choices to there's an opinionated set of choices that, yeah, sometimes it might not be what engineers prefer. So like that call up to Ryan.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, one thing I was thinking to Kate, you mentioned the, like, maybe stifling innovation or preventing it from happening. I think that I've definitely always heard that one from anytime that I've had a component library even proposed, if a company didn't have it, that's always a big fear from from design, but from engineers to like, it goes on both sides. And I always found that one, I don't know, I didn't really buy it too much. And I'd be curious on both of your opinions, but I always felt like I'm like, Well, you know, if you the button that's created, that doesn't really need to be changed constantly. But if you do want to innovate on it, change it, right like, and the thing is, is like you and especially Netflix, we do a ton of AV testing on our consumer product, is if you're like I want to test a different style of button, go do that like that shouldn't prevent you to do that. And then if we learn that that's a better use, or whatever it is, is now you just apply that back to the common library. And then everyone just gets that learning from that AB test or, you know, we want to update the look and feel of it, whatever that is. So I've kind of struggled with that. And I don't know that I buy that, that prevents innovation in my mind it, it takes that cognitive load to where you're like, I just need the button, I don't want to think about that. I'm worried about this other thing that I want to innovate on. And that's what's like nice about it. But then even in the other piece when that button needs to be updated. What's preventing you from doing that, like nothing really,

</p>
<p><strong>Kate Wardin</strong><br />
right? It gives you choice, it gives you the ability to choose, like, I will use this system component, I'll customize certain things, or I'm gonna leave lately as is good, I'm good. Or yeah, I can say, Oh, I have this really unique use case, I'm gonna tweak it heavily. Or yeah, I'm gonna test something else out and see if this is even better, we can put in a couple applications and then contribute it back to the design system. I think it's a great call out and yeah, innovation, because I love the you know, thinking through the Lego analogy, again, like, you know, you can only have so many different shapes of Legos. The innovation comes with like the starship that you make, or the baseball stadium or what you make with it. So like, that's really where we we unlock value is like how we put together the Legos. So I pushed back on, on that claim as well with innovation.

</p>
<p><strong>Stacy London</strong><br />
Oh, yeah, I think it definitely agree. I, I, I've heard that argument. I feel like you hear more from maybe more junior level design and engineers who maybe haven't worked within constraints and systems. And also like, you know, the web has been around a really long time, there are a lot of patterns that people are very used to using. And if you're going to innovate on the web, you're going to potentially create a brand new pattern that people don't know how to use and don't know how to interact with you might create a usability problem. So you have to be really careful to think about, like, what does innovation mean on on the web, and it takes a little bit, I think, more thinking, and also, you shouldn't be innovating on the button, like innovate on this stuff, the harder stuff like that should free you up to actually think about the really the harder problems. There's like business domain specific problems that are the things you really should be putting that energy towards innovation.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, one of the things that I've found probably the hardest thing is introducing a component library into a company. I've seen it tried many times, and that it's often not actually successful. Even my time at Netflix, there has been before Hawkins existed, there was many starts and stops on component libraries. Before that, it's a difficult thing to deal with. What I saw aloft oftentimes is maybe engineering one set design doesn't want it or vice versa. But even times where I've seen like design and engineering, both be like, yes, we need it, and we want it. But like getting that adoption is really, really difficult. And you know, I'd be curious on both your thoughts. How do you approach introducing a component library? If your company doesn't have it? How do you maybe suggest it? And then how do you even help get adoption on it?

</p>
<p><strong>Kate Wardin</strong><br />
Yeah, that's the million dollar was the $2 million questions. Introducing. So I would say, and you hinted at this Ryan is to first align cross functionally. So engineering, product design, everybody has to be on the same page. So I think like very, very, very first step, perhaps you take an audit of how many applications do exist internally externally, how many times and then you can start to calculate like, Okay, we literally had to build the button this many times, like you can start to generate the quote, cost of not only Building but now continuing to maintain each application. Um, this was before my time but at Netflix to get that like skin in the game from engineering product design, what they did was they had a rotational like program were engineers would come for about six months help build out the system same with designers were more full time at the time, but engineers would swap in swap out so that when they went back to their app teams, they were advocates, they are evangelists of the system, hey, now I'm going to help us rewrite our application using Hawkins because I understand the inner workings and I am excited about it. So kind of getting natural champions organic champions that way. And it sounds like that was very effective until we got to the point where it had a lot of leverage. And so then a lot of teams were using it. And then we built up a formal, full time team, which is awesome, and why I'm here. Um, another thing too, I would say is to road show the benefits. So it does take the time to say, Hey, this is going to be a huge investment upfront, let's acknowledge that, let's talk about that. I don't want to say it's going to be easy. Sometimes it requires rewrites, but wrote showing the benefits. Maybe even discussing testimonials of applications that have started using a system or even other companies, bring them in to speak to like, talk about their journey, I think that could be a really good way to show those who are doubting it or, you know, cuz like understandably concerned about bringing in a design system into an ecosystem. But curious to hear your thoughts, Stacy?

</p>
<p><strong>Stacy London</strong><br />
Yeah, those are great points. I think that's absolutely. So huge that you have it's socialized and you have all leadership kind of in on it. And and because if you don't, you can't get it funded, you can't get budget, you need to have a dedicated team that's going to be working on it, to keep it going. Because like the concern we brought up earlier, were like, Oh, you don't want it to be a bottleneck? Well, if you only have, you know, two people working on it, and your organization has 500 engineers like that, that becomes a problem, you need to scale that team with the size of your org. And so you need to make sure you can get budget and that it's agreed upon is important and valuable. And all that stuff is really, really, really huge. But if you're at a tiny company, maybe like, you know, a small, a small, small company, sometimes you don't even have to ask permission. Sometimes I think about this in terms of like, you know, maybe your small 1010 engineers total, it's like, well, you're gonna probably want to build something and it componentized way, it's sort of the the natural way of developing. So just create a folder called components and create a folder called button and then you start reusing it because it's there. And it's easy, and it's discoverable. Maybe you put storybook in there, so it's easily discoverable. But you don't have to do a ton of work to make it discoverable. There's like little things you can do also, like there's sort of that spectrum of like, tiny, reusable component type scenarios, to big enterprise giant companies with, you know, huge design systems with big teams.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think Stacy, so many good things there too, that I would echo is starting small, right? Like you just said, like, oh, there's a folder, just put, start putting some common components there. You know, leveraging something like storybook is great, because you can then also toss it over the designers, right? Like, you've interpreted their designs that they've created. But you can also say, Oh, here's, here's what it looks like. And so that, maybe they're starting to go back to that to is like, oh, yeah, we already have a drop down, we already have a button that we've talked about many times on this episode that like we don't need to reinvent. And so I think those are really great ways to start. I love the call out for leadership. I think that that's a big piece of this is you really, really need that buy in, because what both of you said is you need the dedicated time to actually do this. When I saw false starts at companies, it often was because it wasn't well funded. It was like, people would believe in it. I don't even think like leadership are necessarily not bought in. But I don't think they realize that we need some in order to buy in and actually be successful for this. We need to actually put, you know, time and effort behind it. We need to invest in this. It doesn't happen overnight. And it can't necessarily be a side job. I mean, the starting small I absolutely think that can and that might be the way to start it is just start small and that you might have one or two components that are reused and that's okay. And that might be a win and then you can also see, alright, is this working for us? What are some of those challenges? Do we start adding more is this working and, you know, you can reevaluate as you I think oftentimes two people are trying to create everything reusable, and that's a full Seren because that's too hard, you might get to that point, but it's not going to happen overnight. Yeah, I

</p>
<p><strong>Kate Wardin</strong><br />
love starting starting small, even that library with a couple that's a design, you got it. It's there. Yeah, there's a component library right there, you've done it.

</p>
<p><strong>Ryan Burgess</strong><br />
Even just like, you know, at the start, Kate, I think you had mentioned, like, when we're talking about what is a component, library design, library, pattern library, whatever colors came up. And that one, to me is such a simple one to maybe even take stock of whether you're using CSS or whatever framework and CSS you want to be using, you could just even going through and taking stock of what colors are being used. I've seen that many times gray is probably a big one for a lot of companies, probably many of them, like 50 Shades of Grey when you probably needed to. And it's like just maybe even taking stock of that and saying like, let's align on the actual hex value that we're leveraging for certain tones that we need. And let's just go clean that up. And then we can have it maybe set as a variable, whatever it is. And that's one start. And I think that can go a long way. It's why why your change, you don't need a bunch of different Gray's driving consistency. Yeah, that's I mean, that's, that's really what the component library is trying to achieve, too. So I think it's you can take those steps, and you don't have to necessarily even have buy in for that. Like, it could just be one engineer or designer, you know, saying I want to champion this and start to work with people, not too many people are going to argue with you that, hey, we probably don't need 100 different colors of the same color, right? Like you don't, you know, no one's gonna argue that, but someone has to take that on. And that's the thing is like, there's always things in a code base that you look at, you're like, Oh, I wish this was better. It's not on fire. So you know, someone has to be passionate enough to do this. And that might be you to the one that wants to do it. So that's another way to kind of look at it too.

</p>
<p><strong>Kate Wardin</strong><br />
And what it makes it challenging, too, is it's not directly tied to business value. So it requires that additional elaboration of you know, here is why it is important. Here's how it will save us time later. So I think that's, that's an important call out to

</p>
<p><strong>Stacy London</strong><br />
Yeah, huge like there you can think about, it's the same discussion around like tech debt, it's like you can do a little bit of thinking ahead of time, makes stuff reusable. And then stuff is more easily switched, like you have a brand change and your brand color changes. Okay, that's really fast to roll out at that point, because you've thought about it ahead of time, versus you've just accumulated a mountain of tech debt. And there's 4000 css places, you have to change individually. So it takes forever to do that thing. So it's like mortgaging your, your time. So that's like one way I've like had been able to, like describe that in a way that people think is more a little bit more tangible to cost versus benefit. But but we've been and the other thing I was thinking about is we've been doing this a long time, we just haven't called it component libraries or design systems. We've just been writing CSS as an example, when less and Sass came out. And we started creating variables for our colors to make them reusable. And we used, you know, base stylesheets to style a button the same at a base level. And it always was done in the same style across your entire site. Well, it's sort of the same thing. It's just a different technical form now. So we've been doing it a long time. It just has kind of a different name.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. I mean, you're right, Stacy, CSS has absolutely done that. I mean, I've had absolutely worked in projects, where it's been, like inline styling in and things and it's like, oh, wait, this isn't really helpful, or, you know, even just templates to write like, we think about things like on that level, I think this is just that next depth of it, like how do we extend this even more, and that's where it's really been effective to so I think to what I really have liked is that it has tightened up that language between design and engineering more. So I think even just seeing tools like figma and just how tightly coupled you can be with a component library, engineering side of things. And the design side just really coming together is huge. That's something that you know, now that I've moved into management and I look at what my teams are doing that when I was an engineer I'm like wow, this would have been so powerful that I wish I experienced that more being like hands on like that that's it's so powerful in a time

</p>
<p><strong>Kate Wardin</strong><br />
to be alive. You can just drag and drops and Legos and build your apps quickly.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. And I think that maybe some people worried like on maybe the like trade off side is that you know, that takes away from their actual work but there again, I don't have security. Yeah, and I don't buy that one. I never I do like even when people start worrying about AI and everything. I'm like, yeah, it might take away Is some portion of something? Yeah, you don't have to go build that component 10 times because it's already done for you. So yes, that is work that you're not doing. But it frees you up to go innovate on something new. And that's always been that, like mindset that people should have as engineers is there's always new problems, there's always something that we could be looking at.

</p>
<p><strong>Kate Wardin</strong><br />
Yeah. And I don't know, many engineering teams that are just twiddling their thumbs, like there's always more work. So how do you think the anything to, you know make life easier, quicker ability to, like you said, spend time thinking of what the next big thing could be? Or even just tackling that list that priority list that we haven't been able to get to?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, Kate, you'd mentioned? Well, you have a centralized team around this, do you feel in order for a component library to be successful, that it needs to have a centralized team? I know, Stacy also mentioned like more of the open source model. I'd love to hear both your thoughts on this one? I'm I'm not sure I have a strong opinion, I think that there's good options to tackle on this direction.

</p>
<p><strong>Kate Wardin</strong><br />
Yeah, same. I think there are a lot of different options. And I think it depends on a couple of things like how large the engineering organization is, how many applications are within that ecosystem. Because I think I don't have any data to support this. But you know, what I've seen the larger organizations just with the scale, the need for that dedicated team becomes greater. Because you need that shared vision, you need that, like dedication and investment in saying like, this group of people will focus on fixing the things that are wrong. And we'll focus on adding the features supporting the system, whereas I imagine at a smaller company, you could continue longer on that open source model, assuming that there are still specific individuals who are committed to helping it continue. Because without that, like without that skin in the game, even in the long term, not even just building up the system, because it's constantly evolving. That would be the concern is like, if there's a crucial bug fix, and everyone's like, Oh, someone else will do it, you know, that? That's not a good place to be in? So I think it depends on the size of the organization. That would be I would think that would be the number one factor.

</p>
<p><strong>Stacy London</strong><br />
Yeah, absolutely, I think you covered it, I, I think you can kind of have a hybrid, I guess, sometimes you can kind of still even with the big company. So Atlassian is an example we have our Atlassian design system, it is a big, a big platform team. But there's still somewhat of an open source model to it, where I can put up a PR if I want in that. But there's still someone maintaining that vision and direction and cohesiveness and they so if you put up a PR that kind of deviates from that you might run into some challenges, and you're gonna have to have discussions, and it'll kind of force you to think about like, is this change just for me? And my one off use case? Or is this going to benefit, you know, all the products that are consuming this component. There's also kind of maybe an area for like incubation. So you can maybe have an area in your design system that's like experimental. And so people could contribute up to it, and it sits there as an experimental component. And then if it starts being adopted by other products, maybe then it starts to graduate until like, the thing managed by the design system team. So there's maybe some ideas like that, that can allow for, like, iteration by all Yeah,

</p>
<p><strong>Kate Wardin</strong><br />
that hybrid approach you just described, actually, we have something similar. So we have like Hawkins, and then we also have Hawkins community where anyone can contribute, and there's not like a gatekeeping from my team, so anyone can contribute, say, hey, this might be useful to others. You know, it's not specific to the specs of our design system. But there's this graduation process in which we say, Oh, this has been used by, you know, quite a lot of applications. Let's talk about building this into Hopkins professional. So that's also a cool, hybrid approach. And, and what you said to you call that a risk pasty of, of, if you do have, like, without that, without that one team, supporting the system. There's this risk of people not like saying, okay, yeah, this is really, really useful for for my use case, but it's a bespoke use case, and then they contribute it. And then if it's not getting that reuse, you know, then we're not getting the ROI, that leverage of the design system because we want the components to be, you know, as common as possible as foundational as possible. And so with, without that, that core group who can who can make those decisions, I'm sure and share out that that vision, that's it's just more challenging

</p>
<p><strong>Ryan Burgess</strong><br />
to do that. Yeah, I think what I'm hearing from both of you, it's like, you still need some of that accountability in whatever manner. And accountability. Yeah, like whatever model you take, as someone has to be thinking about these things, has to be accountable for like, yeah, I own or Shepherd these pieces together to help really think more broadly. Because I think even anyone contributing, I think, is a great thing you want to empower people contributing, but they're contributing with not all the contexts across the broader vision of the company or the product. And so I think you need, whether it even if isn't an open source, one model, it's like, someone kind of still has to be the like, the little bit more of the owner maintainer of it. And I think that's maybe what it is, is like, you still have to make sure that you have someone who's accountable, who's really thinking more broadly, and probably just call that out up front. And so obviously, having a centralized team, that them that it is, but in the open source model, I would suspect that you have someone who's passionate, or is really the kind of key person to be working. So before we dive into pics, I would love with us tons of advice in this episode already. But what's one key piece of advice you would have for our listeners, for maybe starting out with a design library? What would you tell, you know, past selves of dealing with design libraries? What would you share with our listeners,

</p>
<p><strong>Kate Wardin</strong><br />
I would say network with other companies who are far along in the process. That's one thing I really wish I did. years ago, recently, we've actually started a new design system community chapter, to do just that, to exchange ideas to say, What have you done with, you know, implementing more sophisticated metrics to see how your components are used in the wild? Like, even just these aha moments that if we could talk to companies who were really, really mature in the design space, like Atlassian, you know, what can we learn from other companies who have gone through this, this journey, that's one thing I would suggest when starting out is just start meeting with people reach out look on LinkedIn for keyword design system engineer, designer, and just reach out to see if they're willing to chat through their their experience.
I love that.

</p>
<p><strong>Stacy London</strong><br />
Let's see, I would probably recommend starting with and iterating on the basics for really long time. Like don't try and get super complicated with the components that you offer in in the system. I think about like, like Brad Frost's way of thinking of like atomic things like small, small things, the button, the input, the, the expander, you know, just those basics, because if you start to create complex compound components that rely on other components within that same design system, there's some really fascinating challenges that you start to run into. As an example, if you have like a React system, let's say you have a really complex compound component that has seven other components from the design system within it, you run into some really interesting upgrade challenges, like you might create a new version of button. And all the products upgrade that button, but they haven't upgraded the compound component, which is still using the older version of button. Well, now you're bundling and sending out two versions of buttons. So your bundle start to explode and get big and cause performance problems. So it's an interesting that that one sort of like I think, once you get to a maybe a mature place, you'll start to see these problems happen. And so maybe the advice is like, keep keep it keep it pretty basic and simple.

</p>
<p><strong>Kate Wardin</strong><br />
I can confirm that as a pain point that has happened to us. That exact same scenario.

</p>
<p><strong>Ryan Burgess</strong><br />
What I liked the CCU also called a Brad Frost book like atomic design. It's I mean, we've had Brad Frost on as a guest, but it's really funny that atomic design, it was written like, I think it was like 2015 2016. It's an old book and still to this day, holds up to be a really good way to approach some of these design systems. And so I just wanted to like highlight that, that that was a really good call out for me as a piece of advice, where at least in my experience is oftentimes a component library, design library, whatever it is, starts out fairly organic. I don't typically see a leader coming going, Hey, we need to do this. Maybe now. Maybe that's happening more now. But it's usually like coming from engineering or design or product that just like hey, we should start doing this. And so what I'm getting at there is it's a daunting task. And so for the people who are pushing that and being passionate about it is kind of similar to taking a small approach. is also set goals, right? Like, hey, this is what we're going to try and achieve just and starting small and chunking those pieces out, because it can get very overwhelming. And that's where I've seen things fizzle out where it's like the everyone had the best intentions to get the component library together, but it just never happened. Because it's such a large task. And so I think chunking the goals thinking, you know, strategically on how you're going to get there and being happy with small wins and you know, getting there is celebrating exactly celebrate those wins. All right, well, that's a great time for us to jump into pics, we'd like to choose pics of things that things that we've just found interesting and want to share with all of you, Stacy, you want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I've got two music pics, as per usual, the first one is a song called head on the art version by Jose Gonzalez. He's an artists have listened to for a long time. He's really a great songwriter, and guitarist. But this particular mix, dips a little bit into electronic stuff. And I thought it was cool that he did the remix. So that was an interesting exploration for him. And the second pick is song Three by the super void choral ensemble, which is a very dramatically different genre of music. This is post rock post metal, no vocals. I'm a fan of a called kicker, which is basically just up and sharp, a single guy. He's now in this new band, and I thought it was really good EP very cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Kate, what do you have to share with our listeners?

</p>
<p><strong>Kate Wardin</strong><br />
This can be anything right? Random,

</p>
<p><strong>Ryan Burgess</strong><br />
randomly anything. It doesn't have to be with, you know, design systems or anything can be really anything. Gosh, I love

</p>
<p><strong>Kate Wardin</strong><br />
the music picks. Okay, I just finished a book called tomorrow, tomorrow and tomorrow. Have you read it?

</p>
<p><strong>Ryan Burgess</strong><br />
Do you think? No.

</p>
<p><strong>Kate Wardin</strong><br />
It's a fiction, but it's it. It was timely for me because number one at Netflix like we're in to building video games now, of course, which is very exciting. But I'm very unfamiliar with the industry and the space and like what all the fuss is about. And so it was a really, really awesome story. I won't give away too many. But there were so many moments where you're like, I want to read it again, because you're like, oh, this definitely connects to the start of the book when they met at the train station. So I highly recommend it. It was a really, really good book, regardless of if you're in the gaming space. And then I've been trying to drink more water lately. So I have this half gallon. Oh, you can't see on the podcast, but it is blue and the size of a half gallon water. And I love it because it helps me track throughout the day. So like right now, I don't know, I'm probably like two thirds the way done, but just want to make sure I'm drinking enough water throughout the day. Those are my two picks.

</p>
<p><strong>Ryan Burgess</strong><br />
I love how it's like a simple water bottle too. It's not like some smart water bottle to be like, Hey, you should drink more water. You're like No, I'm just going to fill a big half Gallon Bottle of water. And I know that it needs a drink that so I love that. That's really good. Slow tech. Yeah, exactly. And it works. All right. I have two picks. Totally unrelated to the topic today. I'm reading an older book. Actually, right now I'm almost pretty much done. So I feel like I can recommend it is Jay Z's decoded book. It's like autobiography covers a lot of his life. But what I really liked too, is he decodes a lot of the songs, right? Like he talks about how and what some of the lyrics mean and how he was thought about this, and I really am enjoying it. I've always been a Jay Z fan. It's it was really cool to kind of hear some of that background of his life, but then also how it ties into his actual lyrics. So I highly recommend checking that one out. I'm actually reading it like in hardcover form too. Not audio book or anything either. It feels good. And then my second pick is something called a rocket bubble machine. It is something I bought for my kids. And it is awesome. I've if people follow me on Twitter or Instagram, you've probably even seen that I posted this but just is like basically a gun that shoots bubbles. And it is shoots a ton of bubbles like really fast and effectively. My two year old can use it really easily. So I think if you're a parent, yeah, me you don't have to be a parent. This thing is cool. If you want bubbles, this thing is worth it. It even has like little LEDs. I was playing with it at night the other night and like the bubbles are all colorful. So yeah, highly recommend checking that bio. It's like 20 $30 post purchase on Amazon. So it's not an expensive thing. But yes, you will get lots of bubbles.

</p>
<p><strong>Kate Wardin</strong><br />
I can vouch for that. We have that. And we have bubble parties, bubble dance parties, and it shoots out so many bubbles. It's very fun. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
it's very effective. I like it. Kate, thank you so much for joining us on today's episode. It was a pleasure having you I know like you said, I love that you're a longtime listener and fan of the show, but it was so great. have you on? Where can people get in touch with you?

</p>
<p><strong>Kate Wardin</strong><br />
I'm so bad at social media. But I'll say this is lame, LinkedIn. Find me on LinkedIn. That's the quickest way I'll respond. I don't really use Twitter often. But LinkedIn is the best way Kate or Dean.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on so people can talk to you about, you know, building their component library.

</p>
<p><strong>Kate Wardin</strong><br />
Yes. And when they read tomorrow, tomorrow, and tomorrow, I want to talk about the ending. I'm excited.

</p>
<p><strong>Ryan Burgess</strong><br />
Now. You did convince me I was like, Okay, I'm intrigued. Yeah, exactly. Well, thank you all for listening to our episode. You can find us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>. You can find us at front end happier.com You can really subscribe to us on whatever you like to listen to front end, Happy Hour podcast on any last words.

</p>
<p><strong>Kate Wardin</strong><br />
Thank you. Thank you so much for having me. Awesome. Well, thanks for joining us.

</p>
`;
        return transcript;
    };