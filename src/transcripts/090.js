module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the latest episode of the front end happier podcast. In today's episode we are talking with Sara and Gift about VueJS. I'm really excited about because I've only played a bit around with Vue JS so I am not an expert by any means. Sarah gift. Can you give us brief introductions of who you are? What you do and what your favorite happier or beverages?


<p><strong>Gift Egwuenu</strong><br />
Alright, thanks. Um, Gift Egwuenu. I am a software engineer at Andela. And my happy hour beverage is obviously Irish cream.

</p>
<p><strong>Sarah Drasner</strong><br />
My name is Sarah Dresner. I work at Netlify as the head of developer experience. I also work for CSS tricks, and I'm a view core team member. And my drink of choice is Scotch just like it was last time.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. You have been on episodes long time ago or the one of our early episodes. I believe it was episode nine. So it has been we're on like episode 90 right now. It has been a while so I'm happy to have you back.

</p>
<p><strong>Sarah Drasner</strong><br />
Come back in 900.

</p>
<p><strong>Ryan Burgess</strong><br />
is gonna be Oh, man, that's that's holding us, like a high bar that we have to no hit 900 episodes. All right. Thanks, sir. All right. 900. You all heard it, we're hitting that and Sarah is coming. Even if she's not planning to be in San Francisco, we'll fly her out. Recording. All right. Well, let's also give introductions of today's panelists. Stacy, you want to start it off? Sure.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a senior front end engineer at Atlassian.

</p>
<p><strong>Augustus Yuan</strong><br />
Hi, I'm Augustus. I'm a software engineer at Twitch,

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. And each episode, the front end happier podcasts. We love to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And obviously today, what did we decide today's keyword is? Talking about view, why not react? Alright. So, as we're getting started, I'm really curious. And I'm sure other listeners are is like, if they're not very familiar with Vue js, how would you describe Vue js?

</p>
<p><strong>Gift Egwuenu</strong><br />
Okay, so, personally, I will describe Vue js as a front end framework that is progressively progressively used for building mobile and web experiences.

</p>
<p><strong>Ryan Burgess</strong><br />
It's a very good description of it.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, I mean, I would describe view as well as a way to create dynamic UIs. When I think about the progressive piece of that that's also progressively adopted. So one nice thing about view is you can definitely, you don't have to use it via CLI, although a lot of people do to build applications, you can also use it via a script tag and kind of incrementally adopt it. So that's, you know, a really nice thing about it. But yeah, view, I think we mentioned this before we started recording, but view it tends to be a kind of mixture of a lot of different excellent things from other frameworks. It is the view layer, of if you're familiar with MVC technologies, it's a view layer only just like React, oh,

</p>
<p><strong>Augustus Yuan</strong><br />
great keyword.

</p>
<p><strong>Ryan Burgess</strong><br />
I was waiting for that. And when you mean like, you can start using it mean, like, you don't have to be fully bought into using view. It's like, if you were using backbone or something you could you could slowly adopt adding view. That's right. That's really cool.

</p>
<p><strong>Jem Young</strong><br />
What is MVC? For the people new to web development? It used to be a popular interview question, but we don't ask it anymore.

</p>
<p><strong>Ryan Burgess</strong><br />
I think because it's really easy to Google to.

</p>
<p><strong>Gift Egwuenu</strong><br />
I could help with that. MVC is the model view, and controller, Leah, and basically with you, we work with Julia, as compared to other frameworks, like what? So that's basically my understanding of MVC, the model, view and controller.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, view doesn't you're kind of dropping the controller essentially. All right. We all kind of now have an understanding of what this beautiful framework is, what are the benefits of ujs?

</p>
<p><strong>Gift Egwuenu</strong><br />
For me, one thing that I feel like it's benefits of Vue. JS is fact it's very flexible to work with, like Sarah elke Julia mentioned, you can easily adopt it. So for instance, when you're building an app, and you're just new to GJc necessarily don't need to go overboard and start off with the view CLI. You can just start off by importing it using just the script tag and then gradually over progressively use it in your application. So that's one thing I really like about futures. It's really flexible.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah. And in terms of the flexibility, one of my favorite things about view is that it's reactive. And so a lot of times when you're working with other frameworks

you might have to add something like mob X or RX js, in order to make something reactive. Whereas with view, it actually has that reactivity system under the hood doesn't mean that you can't still pair it with something like RX js. Because of this, you can respond to changes really easily. Reactive premises make it super nice to have some hooks with which to observe changes in application, which is usually what we're doing with JavaScript frameworks to begin with. So that piece of it is really beautiful, especially because we have these like watchers built in. So you can easily look at what's changing on a certain data property. computed properties are one of my absolute favorite things about view. And that like nobody seems to know about outside of you, like everyone in view loves it. And nobody really pays attention to it if they haven't worked with it before. But basically, with computed properties, you have these cached values that can change and only update based on their dependencies. So they're super performance. So in other words, if you are working with something like downshift in React, which is a library by Kent C. Dodds, which is allows you to kind of filter things based on inputs in view, you don't need to import an entire library like that, you can literally write a filter function on, you know, with maybe like a regex, for capitalization in with one line of code, create a computed property, that's basically another view onto your data. So you're taking the original data that's stored in state, you know, that's your holding, and basically your state. And then you're allowing yourself to see one other view of that data. So it's super flexible, and performant. And just like it when you work with it, you're like, Oh, my God, am I filtering this entire table, and it's just updating, you know, on the drop of a hat. So there's tons of things that you can do with computed properties that are just really allow you to build interfaces really quickly. And I love them.

</p>
<p><strong>Ryan Burgess</strong><br />
I think the the flexibility thing that got me and I think you just tweeted this, maybe even today or yesterday, was the fact that you can use JSX, which is another aspect that another framework might use, very familiar with. Not quite sure. But yeah, the fact that so even if you were using something like React, cheers, cheers, is that you? If you're familiar with JSX, you can actually be leveraging JSX in view as well. But you don't actually have to use JSX. either.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, we, we tend to use templates, which are really extremely declarative, because they offer some very nice transformations and abstractions. So in other words, instead of rewriting the same map, again, and again, we have a v4, which some people would say like, oh, well, then you're not learning JavaScript. And I would argue, like, at my level of JavaScript, I don't need more practice in writing map function just easier for me, like, I, it's totally fine for me to use v4. So I would kind of argue the other way around that once you've written it, like enough JavaScript in your life, those types of like, two way bindings, and that you get with the model, some of the other kind of pieces that you get, you're like, Ah, I don't have to like, go in trim all the whitespace, I can use this modifier that trims all the whitespace, just as I'm adding this to my application. So those pieces are really good. Evans has this really great thing in his front end masters course about view that I've seen him talk about in person, but I'm citing that because in case you want to watch it to where he says, like, you know, the front end world is kind of divided in two camps about templates versus JSX. And he's like, really, they're the same. It's very, very, you know, it's a very small amount of difference for so many people to be so upset about. And he's explains that view supports both because it understands that both are valuable at different times, the dynamicism, of being able to express things in pure JavaScript when you need to is valuable. So that's why we support JSX. But a lot of times what you need to get done, we've provided abstractions for in templates. And those things can also be nice. If you're, you know, if you have existing markup that you're just not, you know, modifying a little bit. Changing them to a couple of different directives is a very, very small amount of overhead if you're migrating an existing code base. And another thing that allows templates allows us to do is also to do some rendering pre optimizations. So there's some things that can be a little bit more performant. Because when you're working with templates, you can make some assumptions about the markup, right? When you're working with JSX, there's a lot of evaluation and errors that can be introduced because of the dynamicism, which is great. But, you know, that also means that there's a lot of overhead. So if you're working with a constrained bit of what is able and what you're allowed to do with templates, that allows you a little bit more of this ability to kind of evaluate this kind of pre compile time evaluation and optimization, which allows it to be pretty performance.

</p>
<p><strong>Ryan Burgess</strong><br />
That's very well explained. I was like, just thinking about the flexibility. But I'm like you took it one level. Further, I love it. Another thing that I don't think either of you mentioned, but always came top of mind where evaluating frameworks is interesting is the size of the library. And that is actually one more viewed really destroys other frameworks is it is only like, was like 1820 kilobytes, something like that.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, it's about to go down by a lot and better to it, the next version of youth. So v3 that's coming out next year is, is actually faster than spelt in the latest benchmark.

</p>
<p><strong>Ryan Burgess</strong><br />
That's crazy, which is something you really have to consider when you're evaluating a framework is like, that's overhead. Even just saying hello world with the framework, you are now adding additional weight. And so 20 kilobytes is pretty light. But some of the other frameworks are pushing higher.

</p>
<p><strong>Jem Young</strong><br />
I heard you mentioned the D word directives, which of course, made me think of Angular one. And I've heard a lot of comparisons between view and Angular. Could you talk a little bit more about that? You don't like

</p>
<p><strong>Ryan Burgess</strong><br />
directives? Oh, man,

</p>
<p><strong>Jem Young</strong><br />
he's a nightmares. Yeah,

</p>
<p><strong>Sarah Drasner</strong><br />
I think that the people who bring that up tend to have only glanced at the first page of the documentation. And that's about it. I hate to say it that way. But that's really where the comparison begins and ends. There's so much more depth in view to explore than that. And the comparisons really end there also. So yeah, there, we definitely pulled directives from Angular, just like we pulled view layer from react. Cheers. I would say that view, kind of, if not saying draws inspiration, we just gank. From other. I mean, we definitely make them our own. But I mean, it's, it's for sure, like people are people use it and they go, Wait, this is just knockout or this is just Angular, or this is just react, or I think that they're all right. It's a lot of those,

</p>
<p><strong>Ryan Burgess</strong><br />
the way I look at is they took the best of all the really, really great.

</p>
<p><strong>Gift Egwuenu</strong><br />
See, she said yet, nobody Oh, but

</p>
<p><strong>Stacy London</strong><br />
we're gonna get to this at all. But we talked about, is it computer properties? Is that what you said? puted? Yeah, that's one thing that's quite curious to me is the sort of managing state and the data layer, and how that might be different. And like, let's say you do have like a super complex app that needs a lot of data. So management, state state management, what does that look like? So from

</p>
<p><strong>Gift Egwuenu</strong><br />
my own perspective, there is like a library for managing states in React. And it's called View x. So if you're trying to do that you could adopt the view X library for managing states. And it's really, it's like a very impressive library, right? He handles everything for you. And yeah, pretty much does pretty much.

</p>
<p><strong>Stacy London</strong><br />
It's like an add on you like install? Yeah,

</p>
<p><strong>Sarah Drasner</strong><br />
it's basically like our version of Redux, except Redux is much more. In some ways, it's a lot more complicated. So like, what, having used both, basically, view X took out some of the features from Redux that you really want to keep, and you want to be working with, I would say, we didn't take it as far as we could have. And we're gonna change that, because we still, you know, have our current, you know, state and then getters and then mutations and then actions. But we're all already realizing that like, in terms of making things if there's like, beautiful or simplicity is when you have nothing left to take away. Actions. And mutations are a little bit like we can actually get that accomplished in one. So we're probably going to remove mutations in the next version, so that you can, you don't have to use an action to commit a mutation anymore, but basically does the same thing. Right. So there's that method of state management. We also are moving over to this composition API, which I think people will start to use in a similar way. So composition API draws very heavily from hooks. And so it's a similar kind of thing that you're seeing where like people are now using hooks to manage that kind of state as well.

</p>
<p><strong>Ryan Burgess</strong><br />
So I'm curious to I see this as maybe a positive and a negative is, and I would love to hear everyone's thoughts on this view is not backed by a company. And so that can be a big positive, in my opinion, I think there's a lot of benefits to that is that it's a very community driven framework. And so there's not this opinion of a company that's now created it for their use case, which is completely valid, but then they're solving their problems and saying, like, yeah, you can use this, but we've solved it for us. And that's the direction of this. And so I think there is some positives, but maybe some negatives to it. So I'm curious, everyone's thoughts on that. So

</p>
<p><strong>Sarah Drasner</strong><br />
I also think it's a positive, to be honest, I think that it's, we get tons of financial backing from different groups. And there's other ways not even just through Patreon, and open collective, which we use and GitHub sponsors. But there's other ways that we make money and make sure that the project is sustainable, but having the decisions be the core team's decision, because we all believe that that's the direction for the for view is really helpful. What Jem is referring to his, okay, several years ago has been works for a digital or he doesn't anymore. He works for packet now, but he used to be VPN of DigitalOcean. And he, he was interviewing this person for this front, like lead front end role. And we were having lunch, and he's like, so is it normal for front ends to say that, like, if I come in, you have to use a framework I invented, or else I'm not joining? I'm like,

</p>
<p><strong>Ryan Burgess</strong><br />
No. I'm not saying

</p>
<p><strong>Sarah Drasner</strong><br />
you he's like, Yeah, you know, I interviewed this guy, he seemed great. But like and like became highly recommended. But I don't know, he was like, Oh, I really want to work on my framework. And like, the only way I'd work here is if everybody switched to my framework, and I got to work on it part time and this whole thing. And I was like, No, honey just should not hire this person. Totally, so many red flags. And then, then, years later, Evan was telling me about how he interviewed at DigitalOcean. I was like, wait

</p>
<p><strong>Ryan Burgess</strong><br />
is Evan

</p>
<p><strong>Sarah Drasner</strong><br />
Evan? Evan is Evan U who created Vue js. And at that point, that was the point where he stopped working in a company and started just working full time on view. And actually, we what we talked about was had he not, it wasn't that that you got rejected? Because he also put, you know, he, he said no, as well, I think it was a mutual like, this isn't a good fit. But had that not happened and he gone to DigitalOcean, I don't know that view would have taken off. And now I'm, I mean, at the time, I was not using view or view developer at all. So it's also changed to the that decision has changed the trajectory of my life. So

</p>
<p><strong>Ryan Burgess</strong><br />
that's a great story.

</p>
<p><strong>Jem Young</strong><br />
I don't think as developers, we realize how much corporations have taken over development. I like we take it as a good thing, which it is, Microsoft has done a ton developer say VS code is fantastic to work with, like and all the other tooling, react Angular, all the frameworks that came out in the past few years. Browsers are so much better once they started listening to people who built stuff in browsers rather than like PM. So you're just like, we need this feature. So like, that's a good thing. But it's also dangerous. There's not that many companies that run most of what we consider ecosystem like GitHub zone by Corp. Chrome, the primary browser, everybody uses owned by Corp, like, there's not many independent things. Left view is one of the few big ones left that's not owned by anybody, which is good.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I mean, there's definitely some benefits to that, in that sense. But there could be some, there's some, there's some negatives too, because like, now it is, like you Matera dress is that you have to try and figure out how to pay people to work on this because like, there's a lot of time and effort that goes into this. They're giving up a lot to work on it. Sarah gives up her time and effort to do this trade offs that you're probably having to make to do that. And and so that Yeah, something like Facebook supporting this framework that you guys keep talking about, you know, they they they have that company that's part of someone's job to do that versus it's a little bit different in that way and so that company's now back that that much stronger. But I think back to my point of being the benefit of not is that that company controls the framework to

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, no, I mean, in terms of like view core team, one thing one, you know, kind of downside of it not being backed by a company is like it's kind of a downside and a benefit for The benefit is that you have these passionate individuals. And that's how we become core team members, right? Like you actually kind of prove that you do a ton of work. And then you become a core team member, it doesn't go the opposite way where they just, like, invite you or something like that. But that, you know, the downside is that we aren't working full time, the way that you know, the React team. Like Evan is working full time on it, I think post fun game are working, like halftime funded, kind of that kind of work on it. But what you don't have is this kind of semblance of like you, like joined the company for that purpose. That's what you do. And then you leave. But then there's it flips back to the negative side of that where like, you lose someone like Sophie, because she leaves Facebook and not necessarily wanting to leave react. So like, there's positives and ah, cheers. differently.

</p>
<p><strong>Augustus Yuan</strong><br />
I didn't mean to pick up my cup.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that example, though. Because, yeah, it's a project that she's now left, not necessarily wanting to leave that project, just leaving the company versus that's, that's such a benefit. I love that. Because yeah, if you're part of this framework, you're trying to help shift and drive. You don't you can control that we're versus like, companies like No, like you're a part of this company. And you're working on this.

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's more like, a lot of things I, I always we always talk about Google is like, one company, but it's like many, many, many, many, many different organizations within one. So it's really

</p>
<p><strong>Ryan Burgess</strong><br />
two companies. It's alphabet and Google, isn't it? I mean, yeah,

</p>
<p><strong>Jem Young</strong><br />
there's like subdivisions things. Yeah. But when companies release frameworks and products and things like that, they're essentially saying, like, here's how we code and here's how you should code, which is fine. Like, they have many, many smart people working on, like how to be better coding, the only issue I would take with that is, it's telling you how to do something, which may not be the right way. But people are going to say it because it's backed by some big company, which is why things like view are really important is like something built by developers. For developers. There's no like, here's, here's the coding guide on how you should do it. It's just, we talk to a lot of people, and here's how you code for something, it's gonna come out of Facebook, or Google or Netflix, or Microsoft, is going to be reflective of their engineering culture, which may not be the right way for everybody. But people are gonna take that as gospel is like this, how you should do things. And that's not how it should be.

</p>
<p><strong>Stacy London</strong><br />
And I think another interesting point is, like, that framework being built by Facebook, for their use cases, I remember a lot of people when it first came out, would say, like, oh, it's really hard. It's really complicated. It uses a lot of words that are very, like computer science II. And a lot of people in the web community were trying to do maybe more simple things. And that felt like a barrier to even using it. And so other frameworks that come out where, you know, maybe it is easier to use, and it it's more friendly and welcoming, or in terms of its API's, or whatever it that kind of stuff, you know, matters. And

</p>
<p><strong>Ryan Burgess</strong><br />
maybe documentation, like even straight up documentation can make a huge difference.

</p>
<p><strong>Gift Egwuenu</strong><br />
Yeah, I was going to add something when Jem was talking. So something that I really like about view is the fact that it's community driven, right. And there is also something that I recently found out about is called the RFC, and request for comments. So for instance, if they're thinking, Oh, if the courts in thinking of adding something new, it's not just their decision is more like the committee's decision, right, Sarah? Yeah.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, this, this gets into Muddy Waters speak for sure. Because we there are, we do do request for comments RFCs. And they are mostly really, really great. And what so what ends up happening is it becomes a kind of hybrid between approach of like, anyone can file an RFC. Of course, a lot of us, a lot of them are filed by us, kind of expressing, you know, desire to hear back from the community about things that we're working on. So we'll kind of talk about things internally first, and then post them publicly for the community, get feedback, and then we will again, there's usually RFCs that fall into like, yes, we're going to do this for sure. No, we're not going to do this for sure. And then there's this gray area RFC where we're like, ah, there's stuff we like, there's stuff we're not sure about. And for that, we make this big spreadsheet we all explain like, what where we're sitting with it, how we're viewing it, and then we kind of take it to a final step. And then, you know, update comments on the RFC for final revision with the community as well. So it kind of goes back and forth between being an internal core decision and a community decision. It's Not all are one, you know, all for the community, our or all core team. Mainly, it's been really beneficial because it's it helps us to hear from people how things are being used. And if it also helps us to hear like, oh, like, maybe we're going down the wrong path here because people really did not like this. And we you can see this what what happened with the composition API, as it's now called, was we introduced this terrible word that should have been our drinking word, which is the D word deprecation. Which should just never should be struct for them from the record, nobody should ever use that term ever. Because people got really, really worried and upset. And it ended up being like many 1000s of comments later, we found out that that wasn't the right direction. That sounds like it's a nightmare. And it was, but the good thing about it is that it allowed us to hear from the community that that wasn't a good direction. And that we shouldn't, rather than us, it sounded like what we what we heard from people was that they liked the concept of it. But the idea of forcing into just one path was the part that people really got upset about. So now it's this kind of additive feature. That's a more advanced feature that people can play around with, and then possibly migrate to if they feel comfortable with but the options API, which is what people are more accustomed to, and view is still around and kicking in. That's still the way that we're doing things. So that sounds like it was a bad experience in some ways. But it was a good experience in that we didn't go into an area of the framework framework development, just because the core team thought it was a good idea. We actually did listen to the community and backup.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that though. But at the end of the day, you definitely need someone to champion it too. Because like, you're not going to be able to please everyone. And so I think that's where the core group needs to be like, this is the direction we're headed. We've taken everyone's feedback, and we're trying to mitigate all risks, but you can't do everything like that avoiding the deprecation. I think that's like, honestly, especially that's a huge positive, especially when large companies are anyone actually adopting a framework is that when you're trying to upgrade in or if you have to stop using something that is now been deprecated, that's a huge cost, like a massive cost when you have a huge code base, and you have to like go through and start to remove something that this is no longer the way to do it. And you can't support this in you know, whatever version. That's, it's, it's costly. I, I've seen it happen many times at every company I've worked at when we're upgrading something, it's costly.

</p>
<p><strong>Augustus Yuan</strong><br />
I was gonna make a joke, he didn't pull an Angular two. But yeah, that's probably not nice.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, Angular one to Angular two was definitely a big one.

</p>
<p><strong>Stacy London</strong><br />
On the flip side, if you never deprecate anything, then over many years, you bring a new dev in and they look at something and they're like, do I write the component like that, or like this other one, or that one, and you start to get confusion about like the right pattern and the right way to do something. So that's like, a consideration thing.

</p>
<p><strong>Ryan Burgess</strong><br />
It's also like that, to me is you gotta have good communication on your team is like, there's times when there's we all have that there's pieces in the codebase, where they're, they're just, they don't get touched a lot. And that's not a bad thing. It just means they do their function, and we're not innovating, we're not doing anything on them. They'd be something that I would be like, yeah, when we have to touch them, maybe we should change it from whatever the whatever piece of function that's now deprecated, maybe that's when we upgrade them. But it's costly to say that we have to upgrade that piece of code. It's not It's, we need that feature. But it's not something that we need to like innovate on top of. And so I think it's more that's where your team needs to be strong communication and saying like, No, this is the pattern, we're going on new things, that old stuff we'd like to touch at some point and clean up. But there's still not a good answer. But I'm just saying this communication is important at that point. Also, something

</p>
<p><strong>Gift Egwuenu</strong><br />
that I would like to add to that is probably having documentation within the same. So if any new developer joins it, can he or she can easily just go back and go through the documentation and we the can level look on what could be looks like. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah. And that's exactly communication, whatever it looks like documentation or speaking.

</p>
<p><strong>Sarah Drasner</strong><br />
I yeah, I see it both ways. And this is something that I've talked to Dan and Sunil and a few other people on that framework that must not be named. Are you I used to be a dev who worked with that framework. And what I found was on larger scale applications, what ended up happening was different components were written in different styles. And I could literally look at it and say, like, oh, react dot create classes was written four years ago, this class extends this was written three years ago. You know, like, I knew exactly when things were written at a certain time, which doesn't sound like a bad thing. What when it becomes a bad thing is if you have a junior developer, that you're kind of onboarding and trying to get up to up to speed, they then have to learn every single syntax in order to commit to the code base. And that can be kind of challenging.

</p>
<p><strong>Augustus Yuan</strong><br />
I 100%. Agree, I also kind of want to speak to this because a typical thing that junior developers will do, or any developer will do is they'll google it, they'll go to Stack Overflow, they'll find an answer. And they're going to see actually, I've run into this many times where, like, how do I how would I do some very common react thing, and they might be using deprecated component life cycles now?

</p>
<p><strong>Stacy London</strong><br />
Ah. So does the view view take a stance or like being that backwards compatible for forever? Or is it sort of case by case?

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, I mean, we're, we're, our syntax has not deviated that much, to be honest. Like, it's not at the level that other frameworks have bite for, for sure. So the options API has been pretty steady for this entire time. And also the view three, the changes between v2 and v3 are mostly internal. We rewrote it from scratch using proxies for the reactivity instead of getters and setters. And that's also what allows us to have it be more performant and have it be smaller. And so and I have some explainers that show in an animated way I can like I'm in charge of doing the the new reactivity documentation. So I'm trying to do animated explainers for how they're

</p>
<p><strong>Ryan Burgess</strong><br />
pretty good animations. It makes a lot of

</p>
<p><strong>Jem Young</strong><br />
juice, okay.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, I mean, animations really good for explaining things like reactivity, because when you're showing things that change over time, animation just shows things a little bit more clearly than a static diagram. So I'll hook I'll link up some of those in the show notes. But basically, the it's rewritten in TypeScript with proxies, but the surface API hasn't changed. So most of what you're working with on the top layer is the same. There are some small bits that were changing with RFC, so everything is well documented towards this migration path. And actually, I'm working with the team to create this migration guide that really details all of those changes. So that everything you can see the differences. But in terms of different types of syntax for different things, this composition API is the first newer way that we're introducing in a very, very long time, it's mostly been like, here's the standard way of writing everything, except if you want to write like render functions and JSX vs templates, that's going to look a little bit different, depending on your needs. But it's been fairly consistent. So we're introducing one new way. Instead of like, this being the fourth or fifth or something.

</p>
<p><strong>Jem Young</strong><br />
You mentioned, proxies, like every, I've used them only, like development, debugging, stuff like that. Every, like apocryphal story you ever hear about proxies? Like they're not performance? So people don't use that was

</p>
<p><strong>Augustus Yuan</strong><br />
gonna say that as well. Yeah, I was very, very curious. But

</p>
<p><strong>Sarah Drasner</strong><br />
yeah, I mean, the, with the newer version, I mean, so okay, what we're doing is we're creating a backwards compatible version of the library that is going to be using, it kind of goes back to if you have to support older versions of IE and things, but the newer version of proxies is much more performant. And so the, the smaller bit, the way that view becomes smaller is by not supporting some of the old Microsoft browsers. It's a good question. You can we do have the view Next, repo open, if you're curious how the internals are actually working under the hood. But some of the benchmarks are showing that it is quite performance.

</p>
<p><strong>Augustus Yuan</strong><br />
Very cool. It is awesome.

</p>
<p><strong>Jem Young</strong><br />
Remember, Ryan Empire J. S? Yep. Onstage or like, what's the most exciting feature of JavaScript? And then think of the fifth most exciting thing anyways, proxies? Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
Like I said, when you said that, I was like, Oh, yes, I remember that talk. So yes, but I can never

</p>
<p><strong>Jem Young</strong><br />
use them in prod because people, like don't understand. Like, if they're not really clearly documented. You can get some nasty cases with proxies because like, it'll just catch things and people are like, where's it going? Well, walkthrough.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, I mean, one thing if you're not careful, I mean, we, thankfully we are making this. But yeah, if you are somebody who's just trying out proxies, what it allows you to do is literally intercept the object creation, right? So you can actually make it so that properties are just not being assigned at all, if you are intercepting it to do something, and then you're not actually assigning those values. Yeah, it just won't happen. So that that is kind of like danger zone. And you do need to know what you're doing in order to use it for like normal application development. And that's also why a, you know, I think that the animated explainers help because it helps people kind of visualize like, Oh, alright, this is literally being intercepted. Because it's kind of a heart. It's a weird concept for most people, I think, especially if you're coming from objects that define property, which works differently, you know,

</p>
<p><strong>Ryan Burgess</strong><br />
what else can we look forward to, like we talked about a lot of these things were, well, avoiding deprecation. Great word to avoid. But what's what's the future? What are we looking forward to in Vue js?

</p>
<p><strong>Gift Egwuenu</strong><br />
Okay. So like Sarah already mentioned, we are looking forward to the release of v3 next year. And one, one of the features that I'm really excited about is called fragments. So in reacts, we already have

</p>
<p><strong>Augustus Yuan</strong><br />
shares,

</p>
<p><strong>Ryan Burgess</strong><br />
you just love that word.

</p>
<p><strong>Gift Egwuenu</strong><br />
Yeah, so um, in the framework, there is already, there is already fragments for view, three is going to introduce fragment two, with the new API. So basically, what it means is, you know, with view, you can only have within the templates can just only have one enclosing div. But with the new fragments, you can have multiple nodes for your View API. So that's something one of the features of the v2 API, and I'm looking forwards.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, there's a couple of other things. The composition API, of course, is the biggest one. And I won't go into too much detail there. But maybe I'll link up some resources. Or I mean, I can if people are interested. But the it's it's very similar to where it draws from hooks. Actually, I'll say a couple of things about it. One thing that's really nice, but previously, react, oh.

</p>
<p><strong>Augustus Yuan</strong><br />
That's a great keyword what I had a long day. So this

</p>
<p><strong>Ryan Burgess</strong><br />
often say,
every day is a long

</p>
<p><strong>Sarah Drasner</strong><br />
day. Okay. So we, we, unlike other people had kept mixins, I actually really enjoyed mix ins, I think they're really lovely, especially the way that we're using them, you declare the mixin on the component that it's being imported to. So it's pretty clear, you know, that it's there, which tended to be a big anti pattern statement about, you know, why mixins got deprecated. To begin with. What's nice about the composition API that mixins didn't allow for is that you, it makes it very clear what the return value is from the given component. So in the composition API, you can see clearly what's being consumed. The other thing is that mixins didn't allow for composition. So you couldn't, you know, for instance, pass one to another. And that is something that the composition API is allowing for. So as components get larger, sometimes you want to abstract these small pieces of functionality that you know that you're going to reuse, instead of having it all be one piece, which is kind of like a premise of functional programming, right, we write smaller and smaller functions so that we can reuse them throughout the application. So it keeps the logic decoupled in that way that you can use things over over time, and to also then encapsulate them now in in one another. So that's, that's pretty great. So that's one thing. One thing that I'm really excited about is abstractions tend to this is different abstractions tend to break down when you can use them for something, right? Like, a big thing that happened with jQuery and those kinds of things is that you would, you'd be like, Oh, this is great. This is great. And then you hit a wall, because you'd be like, Oh, this doesn't cover my use case. And then you kind of just be screwed. So directives, could be one of those things because it's an abstraction. However, we allow you so many, you know, different ways of composing things. So custom directives are something that you can create. So I can create a custom directive that allows me to make my own directive out of any kind of piece of logic. If I'm going to use it many times throughout an application, one example of this, if people are confused by what I mean is, I typically use the example of like tacking something to the page, like, let's say, I have, you know, a page that has pieces that need to be stuck in certain places that are absolutely positioned or an animation is going to happen on scroll or something like that, I could make a custom directive called V tak instead of, you know, rewriting that logic again, and again, and then I have access to that. And I can pass arguments to it. And, and use values in that. So we have these custom directives. Previously, custom directives had their own hooks. So you, we have our we have lifecycle methods, just like other frameworks. And these custom directives had had these hooks that were completely separate and named differently, even though they did similar things when things were mounted to the DOM when things were unmounted. And so this new version of view, solidifies that and brings those together. So deprecates, anything that's not one of those lifecycle methods and brings cohesion between our standard component lifecycle methods, and those custom directive lifecycle methods. So it's one of those things where like, if you are new and you're browsing the docks, you're not going to encounter this. But as someone who works with view quite heavily in work, creates libraries that other people use, because other some, you know, custom directives are also something that you might want to afford other developers if they install an NPM package. Wow, that makes it so much more simple because I used to have to, I wrote articles about it so that I could look it up.

</p>
<p><strong>Ryan Burgess</strong><br />
It's made life so much easier. Yeah. Before we get into pics, I'm interested is like, as a new watch, I am a new Vue js engineer. What are some things that our listeners if they're wanting to get into view? What would you recommend? How do they learn? How do they jump in?

</p>
<p><strong>Gift Egwuenu</strong><br />
Okay, what advice I would like to give to new beginners trying to learn view is gradually, as you learn, try to build something as well. So most people would tend to like learn using tutorials, articles, and then they just, they just download that and didn't actually try to beat them. So one way you can solidify your knowledge of view is, as you're learning, try to also be like, it's small projects. And I feel like if you go through the route, it's easy for you to understand the concepts of ujs. So yeah, my advice is try to build something as you're learning. Whew,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah. A lot of that advice, honestly, like just being able to like build something you learn so much, even if it's like, rebuilding something that already exists. It's so important just to like, apply what you're learning.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, that's the giant plus one for me. I think that that's a really, that's, that's really great advice for learning anything, in terms of learning view, gift is actually a really talented technical documentarian. And we should definitely go check out all of her resources because she has tons of great stuff, including, you know, in terms of like meta frameworks, like view, view press, if you're working with view and you want to write your own documentation for something you press is awesome gift wrote a great beginning guide to that as well. So go check out her stuff,

</p>
<p><strong>Ryan Burgess</strong><br />
where can they find it?

</p>
<p><strong>Gift Egwuenu</strong><br />
Okay, I have a website or blog, and it's gift a green.com basically my name and yeah, I tend to write articles on front end development, career guides and a whole lot of things so

</p>
<p><strong>Augustus Yuan</strong><br />
I just want to also give a quick shout out the docs review I'm also a UI view noob is it boo or view I assume it's view but whatever you

</p>
<p><strong>Jem Young</strong><br />
want to guess

</p>
<p><strong>Ryan Burgess</strong><br />
All right, we have been saying view the whole we have

</p>
<p><strong>Jem Young</strong><br />
Sarah in practice so

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, actually okay. When everyone was talking sorry to tangent but I had this realization is view based on Haven't you? Like

</p>
<p><strong>Sarah Drasner</strong><br />
it's I just like it's like not I think it's based off of the

</p>
<p><strong>Augustus Yuan</strong><br />
view layer. That makes more sense. That makes more sense. But there's something there Yeah, I was just drinking I just like,

</p>
<p><strong>Ryan Burgess</strong><br />
oh my gosh,

</p>
<p><strong>Augustus Yuan</strong><br />
I just cracked this.

</p>
<p><strong>Ryan Burgess</strong><br />
Chose a really good keyword that is definitely got you thinking so for

</p>
<p><strong>Augustus Yuan</strong><br />
sure. Yeah. Yeah, no, but in all seriousness, I did want to give a huge shout out to the docs i I'm personally very new, and I was reading the docs and they were very, very clear, really easy to walk through and they even link to resources. is everywhere view mastery a bunch of different resources. So I think if people are new, just check that out. Like they're incredible. So they're very well shout out to SEER. Yes. I mean, yeah, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
You're the one here. So we're

</p>
<p><strong>Sarah Drasner</strong><br />
also Natalia and Chris Fritz on fun and, and, I mean, he, he goes by on but he's also fine on on on GitHub and Ben Hong. So all of those people also deserve. And Ivan also Evans written a lot of the docs to

</p>
<p><strong>Ryan Burgess</strong><br />
write on. So at the end of each episode, we like to choose pics that are interesting, or we'd like to share with our listeners. I'm going to start with you, Sarah, what kind of pics do you have for our listeners? This episode? Yeah, well,

</p>
<p><strong>Sarah Drasner</strong><br />
since I'm not here, talking about animation, like I was last time, my pick is animation based. Green sock is a library that I'm super super into. If you've seen my demos, then they're all mostly on using green sock these days. Green sock just came out with a new version of the library. Also a three version like view

</p>
<p><strong>Ryan Burgess</strong><br />
going on there.

</p>
<p><strong>Sarah Drasner</strong><br />
It's also half the size, and has a lot of really nice things like defaults, which allow you to to express some defaults per a timeline. So a lot of times, if you're working for a big company, there's like a standard ease that you might need to use to keep things consistent. You can set that for the entire timeline now. So the new version of G SAP is super awesome. And you should go check it out

</p>
<p><strong>Stacy London</strong><br />
to music pics, as always. The first one is an

</p>
<p><strong>Ryan Burgess</strong><br />
intro like the like everyone loves your music. Or more music.

</p>
<p><strong>Stacy London</strong><br />
That's nice. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
glad people enjoy. I am enjoying your playlist. It's good coding playlist that

</p>
<p><strong>Stacy London</strong><br />
hopefully these are also good coding picks. The first one is yearning for the infinite by Max Cooper. He just released that album. It was commissioned by the Barbican they wanted, like a new audio visual show built around emergent technologies theme that they had called Life rewired. And this quote I thought was really interesting. He said, I wanted to take the whole idea of human progress, growth in technology and the data explosion, etc. boil it down to its essence, our seemingly endless desire to move forwards somehow as individuals and as a species. So his stuff is like, yes, it's electronic music, but it also has so much behind it, which I find really fascinating. And I think I can kind of hear it in it. So that album is really great. Check that out. The next one is a song called immersed by Alex banks. And he's actually on max Cooper's label called mesh. So if you like Max Cooper stuff, you'll probably like Alex banks and stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Thank you.

</p>
<p><strong>Jem Young</strong><br />
Oh, shout out to that a because you shared that album The other day in our slack. Great coding music, like I've been coding journaling all week. Awesome. It's a great coding album.

</p>
<p><strong>Ryan Burgess</strong><br />
Ooh, I guess this? Sure.

</p>
<p><strong>Augustus Yuan</strong><br />
So I have two picks. So my first pick. So relatively whenever Chrome Dev Summit was compared to when this like podcast episode. Yeah. Basically, Chrome Dev Summit, Addy Osmani. Had a really great talk. And he open sourced or undercooling google chrome labs react to a React adaptive. Dang it wait. does count. Ah, jeez. Yeah. All right. Cheers. Well, Facebook adaptive hooks. No, they came out with this repo of a bunch of hooks that really help with utilities for targeting low end devices. I think one of the really, really cool ones is he has hooks that target very different things like ones that save data. One that I thought was really interesting is he has ones that target how many CPU cores and a device has and I think it's just really cool. Definitely worth checking out along with the talk. Um, my second pick is kind of random. But at Trader Joe's, there's a ravioli section. Yeah, you wait till you hear the cauliflower ravioli? Like there's a lot of other ones there's a lobster and lots of ones you think those are all traps the real prize? Which is lobster crazy. Really? Yeah, it's good that actually they're all good, but the call of thought wow, they do something. I'm like, shocked at I like, like, like, like honestly, I have like a list of picks. And I was like, I don't think anything beats this one.

</p>
<p><strong>Ryan Burgess</strong><br />
We're all gonna try this and we're trying

</p>
<p><strong>Jem Young</strong><br />
energize is a discount grocery store. Oh yeah they're on all coasts there. Yeah, they sister stores all the right pass anyway, it's it actually is served by two brothers and like one brother started Trader Joe's one started all the and they're like the same concept but very different executions. That's

</p>
<p><strong>Sarah Drasner</strong><br />
where they're like, like the family thought Black Sheep kind of thing like not

</p>
<p><strong>Jem Young</strong><br />
I heard an entire podcast on this before

</p>
<p><strong>Stacy London</strong><br />
Freakonomics did a really fascinating episode on Trader Joe's check out

</p>
<p><strong>Ryan Burgess</strong><br />
that's a part of it. Someone's pick here is go listen to that episode. Yeah. Alright, Jeff, what do you got for us chattel

</p>
<p><strong>Jem Young</strong><br />
Trader Joe's? The first one is I think you all know for people that that just met me. There's nothing I love more than a good rant. But you know what I love more than a good rant, a good rant with action. So there's this dude. His name is Eric Bern Hartson. And he was sitting at work. And he was like, why are the buffet line so long? This, this makes absolutely no sense. We have some of the sort of people in the world, we can't solve the fate line. So what he did was he created the simulation for buffet lines trying to optimize the trying to create the optimal buffet line so that everybody can get the food and it moves quickly. It's a great target site. It's linked to in the show notes. But he has all these methods and they're all They're all animated and everything to I'm showing everybody in the room. But he has animations for different ways of getting through the buffet and which one's optimal. It's just great. Because like he was angry about something, but he decided to do something.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I love that. It's like literally like something there's a problem there sort of bitching about it. I'm going to try and solve it. Wow. Well,

</p>
<p><strong>Augustus Yuan</strong><br />
Mo G's and that avocado line is

</p>
<p><strong>Jem Young</strong><br />
this person is better than me because they go on rants and then do something about it. I just go on rants and do nothing. Just take that angered. Hold it in

</p>
<p><strong>Sarah Drasner</strong><br />
YouTube could be an emoji animator,

</p>
<p><strong>Jem Young</strong><br />
but I'm so lazy. So

</p>
<p><strong>Ryan Burgess</strong><br />
is Erica motivate you? That's true.

</p>
<p><strong>Sarah Drasner</strong><br />
That's actually technically my job. I think is the emoji animator. Motivate motivating speech? Person? Oh, God.

</p>
<p><strong>Ryan Burgess</strong><br />
already motivated,

</p>
<p><strong>Jem Young</strong><br />
sir. My next pick is a show pick. It's called happened, Leonard. It is a wait here. Sundance TV original. Yes, that's a real channel. They have originals. However, the show is fantastic. It's about two middle aged men in Texas in the 80s. And kind of the adventures they have. I really don't do the show justice. It's worth watching every seasons like six or seven episodes. There's only three seasons so far. But the show's Fantastic. Great actors on it.

</p>
<p><strong>Ryan Burgess</strong><br />
Give what do you have for us?

</p>
<p><strong>Gift Egwuenu</strong><br />
So I have two peaks. And the first one was I had like, very amazing experience at London recently. I was on the Harry Potter and escape from Gringotts. Right. And couth in Israel also in a Harry Potter themed room.

</p>
<p><strong>Ryan Burgess</strong><br />
Which is really cool. Yeah, those really

</p>
<p><strong>Gift Egwuenu</strong><br />
amazing. And if anyone is in Orlando, you should try that. Right. And then my second peak is a music playlist, which I created for cooking. It's actually nigerian music. And yeah, I'm very sure everybody, it's really good. Zira already has access to it. And I'll be sharing that in the show notes. Also, it's a

</p>
<p><strong>Sarah Drasner</strong><br />
it's a YouTube playlist and the videos are really good too. So definitely don't just listen also watch them

</p>
<p><strong>Ryan Burgess</strong><br />
right on. Alright, I have two pics. They're not really relevant to our topic date, which is fine. Very creative pics. Actually, I don't know how many people are familiar with Mike giant. I'm a huge fan of his artwork comes from graffitis on tattoos. He's, he's great. He also lived in San Francisco for a long time. Mike giant has a podcast and I listened to all binge listened to all our episodes. And he sits down with other artists and talks about their art. And I think it's really, really great. There might be some weed involved as they they're talking. Similar to our podcast we're drinking on episode. I think it's a really good podcast where they're really talking about the creative process. And I think it's really, really interesting. And then along that lines on the creative side, I've been using a Tombow Dual Brush pens. I've been really enjoying using them for just drying. My son likes to paint and stuff like that. So I'm drying him different things that he asked me to draw. I found these things. Very, very useful. So that's my final pick. Before we end the episode, I want to thank Sarah and gift for joining us. It was a pleasure having both of you join us. Where can people get in touch with you? Okay,

</p>
<p><strong>Gift Egwuenu</strong><br />
I'm on Twitter at Laura gift 21 And also I have like a personal blog. It's gift a green.com.

</p>
<p><strong>Sarah Drasner</strong><br />
Yeah, thank you for having me again. It was it's been such a pleasure. I am at Sarah dot dev online, you can find my awesome coworkers and all of the great work that they do<a href="https://twitter.com/nullify"><a href="https://twitter.com/nullify">@nullify</a></a>.com nullify is a company that I worked for, because I really like what they do. Like I asked them if I could work for them. So you should definitely go check out their services. It's an easy way of deploying sites online. And then also CSS tricks. If you go to my author page, there's just like a ton of stuff there.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you all for listening to this episode. We'd love to hear from you. Give us feedback, love to hear from you and like different whatever you'd like to give feedback on whether it's like iTunes or Google Play. Let us know how the show's going. And you can also follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>, any last words? I love react. Stop it.

</p>
`;
        return transcript;
    };