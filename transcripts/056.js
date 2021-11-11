module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
So how many of you have listened to the front end? Happy Hour podcast? Great. So some of the familiar listeners Great. See, what we do is we talk about front end while drinking. So a series of topics and we all sit around and have drinks. That's what we're gonna do on stage. Today what we decided for React AThon. We obviously want to talk about Angular. Right? That makes sense. No, we're obviously talking about React, figured we talk about React at scale. Before we get started, like to go around, give introductions of today's panelists. Jem, you want to give an introduction?


<p><strong>Jem Young</strong><br />
Hi, Jem Young, I'm a senior software engineer at Netflix.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a front end engineer at Atlassian working on BitBucket cloud.

</p>
<p><strong>Derrick Showers</strong><br />
I'm Derek showers. I am a senior software engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. i In each episode of the podcast, we actually choose a keyword that if if it's mentioned at all on the podcast, we will all take a drink. So onstage we're going to do the same thing. And actually, Ben's going to even play a little bit of a noise for us if we get. So he's going to keep us on it. So if we hear that we definitely have to drink. So what did we decide? Today's keyword is? Sure. All right. So if you hear the word structure and that dang, we are all drinkin. Alright, so let's get started. I'm interested to know, before we even get into React, what does scale mean?

</p>
<p><strong>Stacy London</strong><br />
I mean, for me, it's I said a lot of things, right. from a people perspective, scale, to me really just means like, there's more than one dev working on the app, that point you're immediately scaling, you're immediately having to think of somebody else working on your code. And, and that always has implications.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I agree. I think it's beyond I think it's more than just the amount of users and traffic we were talking earlier. And that's, I think, maybe the go to thought when you think of scale. But yeah, definitely about like organizing your, your codebase. With working with other people. There's definitely a lot a lot of levels.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, when you think of actually lots of traffic going to applications website, on the front end, that's really not impacting us too much. Yes, you want to build performant code that scales, but that's a little bit different. It's not necessarily how adding more traffic to the site or application.

</p>
<p><strong>Jem Young</strong><br />
And if it is traffic, it's in terms of the reach of users like the the breath, so people can be on really low end devices, people get beyond very high devices. I think when we think about scale, we don't always think about our user bases, like broadening so they're not all gonna be running Chrome, they're all gonna be on the fastest computer. So we have to take consideration when we build our apps. Great.

</p>
<p><strong>Ryan Burgess</strong><br />
So when you're approaching your React app, brand new app or an old existing now, how do you approach it from thinking of scale in mind?

</p>
<p><strong>Jem Young</strong><br />
That's a hard question.

</p>
<p><strong>Ryan Burgess</strong><br />
You don't have an answer for this.

</p>
<p><strong>Jem Young</strong><br />
I think naively, we go in, we create apps. And we think, oh, yeah, I'll just build the structure because it makes sense to me. But cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
And was even slow on that one.

</p>
<p><strong>Jem Young</strong><br />
We don't think how it scales to five developers, or 100, developers or 1000. And we use weird paradigms like, oh, there can say, see, they know exactly what I did, because I use some weird convention. But the other 500 people that need to start, don't, and we don't think about that when we start our apps. So I like to start and think like, what's the simplest, most intuitive structure that I can think of? Be a longer one that would make sense intuitively, to most engineers, I think that's a good foundation for starting out.

</p>
<p><strong>Stacy London</strong><br />
I mean, I think thinking upfront about the patterns that you want to use, and the I'm trying to avoid the word structure of your, your folders

</p>
<p><strong>Derrick Showers</strong><br />
here trying to avoid the word.

</p>
<p><strong>Stacy London</strong><br />
So like for scaling, if you start to have a ton of components and a lot of different files, if you have a folder structure that's like highly nested or something like that, cheers, sorry, sorry. It can get very hard to manage and become very problematic later on it, it gets more difficult to develop. So some of those things, I think, are things that you have to think about kind of upfront.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I guess the one thing I'd add to is I think it's okay to make changes as you go to as you scale. I think sometimes, at least in my experience, you know, you start one way and you're like, Okay, this is the way that is the most scalable when you start and then, you know, a couple of months down the road doesn't end up being very scalable, but you're like this is we're kind of already down this path, but it's better to change direction then over engineer.

</p>
<p><strong>Stacy London</strong><br />
Yeah,

</p>
<p><strong>Jem Young</strong><br />
I think that's hard. What one of the hardest things I can say as an engineer was, I was wrong. I think a lot of people are in that camp, whether they admit or not, and it's hard to get six months in and realize, oh, the architecture that I built, isn't right, and it doesn't make sense anymore. And very few people do, we just keep going we refactor, we pay that debt, we pay that debt. But a really good engineer will be like, hey, there's actually something new and my bad, and I'm gonna help fix it. But here's what's going on, you just don't see it that often?

</p>
<p><strong>Ryan Burgess</strong><br />
Well, because it's hard, you're probably having been pushed by managers, you know, product managers, whatever it is you're working with, to build features. And there's usually not the time to do that. But you end up paying the cost down the road. So it's like, wherever you can find the time to do that. I think that's always important. I think a few of you touched on this point, too, is adding new people to the team. I always think that is like the one time where I'm like really wanting to make sure that the codebase is in a good spot so that it's easy for someone to ramp up on it. And that's not always easy. If you are using weird paradigms that some crazy architecture that yeah, Stacy and Jem wrote that I have no idea I have to learn that. But if it's using some library that's already, you know, pretty familiar out there. It's well documented using something like Redux or flux, it's like something like that being in your code base. It maybe they've already used that, or experienced that. And that can be very useful.

</p>
<p><strong>Stacy London</strong><br />
Yeah, like, Don't reinvent the wheel, like, don't write Redux, your own flavor of it from scratch, like maybe just use that because it's got more mindshare, and it's easier and more supportable, and all the doors.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. You don't even have to write the documentation. It's already done for you.

</p>
<p><strong>Jem Young</strong><br />
I've seen some this is early days react. I couldn't tell you what version was three, four years ago. And the developer who was working with had made like deep hooks into, you know, the part of React code where it's like, don't touch this, the private API did that anyways, because it's like, oh, any built out like this entire application based on some core Redux or react functions. And then of course, the API change. And we were screwed, because we couldn't upgrade because it was just too costly to, to, like, refactor all this code. So again, this person, like wasn't thinking ahead about scaling across four or 510. Engineers, they made a choice because it was easy in the beginning, but now they're still paying my costs.

</p>
<p><strong>Ryan Burgess</strong><br />
I love it, too. It's not even just like other engineers jumping in it's also version can now they've kind of reached into something that may not even exist anymore. So that can be problematic for you.

</p>
<p><strong>Derrick Showers</strong><br />
And I guess what I was, what I was trying to get to is, the sooner you can make that decision and realize that maybe you went the wrong direction, the better. I mean, maybe after two years down down the path of One Direction, it is a lot harder and a lot more expensive. And, and there's a lot more people invested in and just you but you know, even if it's like a couple of weeks, I think it's it could be still as hard as still as hard, right? Because it's still like, you know, maybe you maybe you spent months fighting for this one direction. But now you realize that it's not the right direction.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've already started touching on these, but what are some challenges that you've seen? I mean, Jeremy just mentioned one, one pretty big challenge. But what are some challenges that you've seen going into a codebase? Or just even in your own structure? Cheers. Where you regretted or looked back and said, Oh, wait, I should have fixed that or thought about that ahead of time.

</p>
<p><strong>Jem Young</strong><br />
This is a really controversial thing I always say, but everybody should come with their code more. And I know there's people right out the game, oh, my code self documenting, because I write excellent code. You don't. I've come into code bases, where the people were, it's like really small startup, it was a tight knit, they all understood each other. And then I come in saying, like, what's going on? None of this is documented. Oh, that's okay. Because like, it's this and this and this and like, okay, but of course, explaining to one person how your codebase work does not scale. So if you don't document your code, you're in for a bad time. And that's something I've run into a lot at many different companies just people assume one paradigm and they assume everybody use that same paradigm that's not true, even react, which is fairly straightforward. People use different paradigms that may or may not make sense.

</p>
<p><strong>Ryan Burgess</strong><br />
So I will all test gem does actually write really good comments and his code like it really good. So it helps

</p>
<p><strong>Derrick Showers</strong><br />
one thing Reese I guess, kind of recently is testing and and, you know, we try to be as good as try to be as good at testing as possible. But recently was working on an app that was just a prototype and I think sometimes you fall victim and you're in this like prototype stage, you're not going to write as many or any maybe you know, acceptance tests or whatever, but then you know, there's that prototype often will become not a prototype anymore, and then you're stuck and then it's really hard to get back into that. So I think that's really important to do from the beginning.

</p>
<p><strong>Ryan Burgess</strong><br />
So you think like writing unit tests, everything should be done from the from the get go?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think that makes it a lot easier. I mean, there's always exceptions. I know things get crazy in the day to day but I think whenever you can try to do that that's the best.

</p>
<p><strong>Stacy London</strong><br />
I think on those random it's not specific to react but if you have good linting good, put all the automation you can in there so that when you scale the people on your team, you don't have to have like silly arguments over style style and stuff. So like get you know, put prettier in there or have you know, style lint and all that all the linting you can have just to avoid those conversations over and over and over.

</p>
<p><strong>Ryan Burgess</strong><br />
Let the CLI yell at the people you don't feel. I'll

</p>
<p><strong>Jem Young</strong><br />
say plus one a prettier. This was maybe last month at Netflix, someone said, Hey, we should standardize our file naming conventions. Which, of course, yeah, it makes sense. You want them all to be the same. Now, there's a big debate over camel case versus snake case, versus I don't even know the case. But it is easier when use a tool when you just say like, Hey, we're gonna use prettier, we're gonna use this format. And it just does it for you. That just cuts out a lot of just extraneous conversations.

</p>
<p><strong>Ryan Burgess</strong><br />
So I want to touch on the unit based like unit tests, and everything, especially in React is, are we writing unit tests for the components? Are you thinking more for helper functions? Or is it like both? When you're writing? You know, you're writing your components early on? How are you thinking about that? All of you. But I know Derrick, man,

</p>
<p><strong>Derrick Showers</strong><br />
you haven't? I haven't written a lot of React. So Well, there

</p>
<p><strong>Ryan Burgess</strong><br />
you go. Jem, you're a big unit test guy. What do you think?

</p>
<p><strong>Jem Young</strong><br />
I write unit tests for service things like because they're self encapsulated functions that they should do one thing and one thing only. So it's easy to unit test. For components, I break it down to the base component and right, I use enzyme for component based testing. And that usually gets us most of the way. And then we have and then test that kind of cover the whole suite.

</p>
<p><strong>Stacy London</strong><br />
Or if you want to just like very low bar to entry snapshot tests with just like, if you don't want to put a ton of effort into it, there's at least some level of

</p>
<p><strong>Ryan Burgess</strong><br />
verification. Yeah, so also, what approaches have you found? Helpful? I'm gonna say it structuring your reactives. Chairs.

</p>
<p><strong>Jem Young</strong><br />
This is a hard one, knowing when to componentize something is a really hard debate. Like just hands up. If you've seen a talk about UI components, at any conference, every get everybody has everybody seen a talk on how to build UI components, why they're good, we should be doing it. But no one really talks about when we should do it, because there's a cost to doing that, like extracting CSS, and the J S and everything else. There's a cost of doing that. I so I think ahead of time, it's good to set up rules to say like, if this component is used, it's this functionality is using, say three places should probably pull to its own component. And if you have a firm rule like that, then you don't end up with like, component explosion, which I've also seen too. I think I mean, it's not a good example. That's Facebook, but I think they said somewhere they have like 40,000 components or something like that, which I mean, it's Facebook, but still, I like I don't want to be in that, oh, I have a button. Now we have a component for red button. Don't worry about that. Like that's, that's too far. So I think thinking about that, and thinking about scaling across multiple engineers is something that when I first go into that vision, that's what I'm thinking about.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that you said rules around that too, because I have been in code bases where it's like componentize, everything and it gets really, really hard to understand what's even going on at that point, you're digging in files on files and files. And you're like, okay, yeah, like you said, one red button and you're like, Okay, well, could that just be a button in general and have multiple colors or shapes and everything, and, you know, control that. But so I like that you said that, too, is like there is a point where it's too much componentized I mean, for me too, I one thing I always struggle with, I'm interested to hear your thoughts, too, is when you start using something like Redux, especially in your React application, I find I kick myself down the road later, I should just use it. But I started out, I'm like, I'd only have a couple components here. I don't really need to introduce Redux. And then it comes a couple more components. And then this component needs to talk to this component. And I'm like, Okay, I should have added Redux. But I'm interested to know your each of your thoughts on when to use something like Redux, I have

</p>
<p><strong>Stacy London</strong><br />
an interesting experience, because I don't, when I started to use React, it wasn't just using React, it was a massive stack of things, I came into something that like had already, they very picked a huge amount of that architecture. So I came in where Redux was already in place. And so that was something that I had to use. And so it made sense to me, because the the thing that I was working on had, you know, a lot of components on a page that did have to share state like, like, I've worked on BitBucket, if you need to merge a PR you have a button where you click Merge and the does some sort of asynchronous thing. And then the result that comes back another component on the screen needs to do something based on that to show like successful merge or maybe show an error dialog or something like that. And so like that immediately was, seemed to me very, it was seemed like a nice implementation for the complicated app that I was using and building. But I think obviously, if you're not building something so complicated, maybe you only have like three components like at that point, like do you bring in Redux? How do you know if it's going to get more complicated, and maybe it won't, maybe that's overhead. I mean, I personally found Redux to be a bit hard to get my head around. It actually was I think The hardest thing of learning that entire stack, because there's a lot of boilerplate and a lot of code happening in lots of different places to get something that seemed kind of simple to happen. So that I think there's a learning cost to adding Redux to your code base.

</p>
<p><strong>Jem Young</strong><br />
I on my team, I was the holdout against Redux. I, but in all things, I prefer simplicity. above anything else, like just keep it simple. And I I argued that we didn't need Redux at the time, because I was wrong. Because our app grew in complexity grew. But at the time, I was saying, we don't need Redux. I think a lot of times engineers, we embrace complexity because we build this giant tower of things. And then someone comes up like, Hey, how did you build that? You're like, dummy, like, Here, here's the docs. And then like, you make people just feel not as intelligent because you chose to build this complicated thing. So people just they say, like, oh, yeah, I want to get started react. How do you do it? Well, you need to Webpack. And then let's, let's throw in less, maybe some emotion just flows was throwing some flow, or even TypeScript it. How about both? Why not? Both same time. So you need just

</p>
<p><strong>Ryan Burgess</strong><br />
like TypeScript. So yeah, like flow. Let's try both.

</p>
<p><strong>Jem Young</strong><br />
Yeah, let's go and redox. And if we're using Redux, let's use immutable J. S, because that's important. Select. Oh, yeah. Reselect GS. So like, Realizer

</p>
<p><strong>Stacy London</strong><br />
D normalizer.

</p>
<p><strong>Jem Young</strong><br />
Keep going, I don't know. But like, we we don't think about like the complexity, ratting, like, even immutable js, like that's a new paradigm for most JavaScript engineers. But just everybody jumps in because someone smart once said, like use use mutable without understanding why. And that is the conversation anytime someone as a new library, I say, explain it to me why exactly I need this. And I can't do this normally. And if they can't explain it, then don't add it in. And that's always been my, my like bar for adding in libraries or state management or anything like that.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I actually appreciated gem in this conversation, because I was actually one of the big believers in adding Redux. In our code base. We adopted react at Netflix really, really early on. And Han, we had different like flux implementations and non flux and just so many crazy like paradigms that were going on, because we were building it as the ecosystem of React was changing. And so there was some pages built one way some the other. And as we were building like more of a single page application, it actually made a lot of sense to leverage something like Redux. And we almost kind of went what Stacy was saying is almost created our own version at one point. And it really, really made sense to use something like Redux. And I remember debating this with Jem very much. And like we walked through different things. And like, Now, it sounds like you're a lot more open to it, which is good to hear.

</p>
<p><strong>Stacy London</strong><br />
One of the interesting things with Redux and scaling is early on, the decision was to make everything goes in redox. Like all state no matter what, no matter how small. So even if you have like a UI state where a twisty an expanded state in a collapsed state. And even that went into Redux. And the idea was like, well, then it's, you know, this Absolute Source of Truth, you can play forwards and backwards, you can reproduce, you know, issues, all that kind of thing. And then, you know, different engineer gets hired has a different opinion about that. And they say, Well, I don't think that should be there. Because that's, that's to, you know, not what else needs to know about that nothing else needs to know about it's not really shared state, take that out this night, this mixed bag of things. And so a scaling issue with that is kind of fascinating. As recently we were talking about air handling, and like unhandled exceptions, or throwing things up to some sort of tool that's capturing all your exceptions in your app. Well, if you don't have everything in one place, you are not able to necessarily send a current state snapshot to an exception handler to send that back up. So now you're troubleshooting. You can't use the play forward backwards feature of Redux anymore, because it's not all there anymore. So it gets a little bit more difficult to debug something, if you have a support issue come through. So I thought that was an interesting twist at the end of that.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that, too, is even just you've separated concerns at that point to that something that we've done a lot where we've even I mean, go for is like saying, I mean Netflix loves microsystems. Well guess what it's we do. And even just like separating some of the business logic and having it centralized the team at Gemini work on it's a, we're building cross platform. So even something like that, if you can build like really dumb UI components that aren't carrying a lot of business logic. Yeah, you can do a lot where you're passing error states, you can really just manage a lot of things. And you don't have to write the business logic multiple times in the UI as well. And so that's been very useful.

</p>
<p><strong>Derrick Showers</strong><br />
It's interesting. One thing I wanted to just point out is you mentioned about like, the writing about the app being hard and being in different states across different teams, and at LinkedIn, we are now fully on board and have been for the past couple of years with ember. And so one of the reasons we chose Ember is because it was it allowed us to solve that problem. But I think the the point of this is that one thing that I think react really excels at and Ember is now trying to do with glimmer is, is it scales both ways. So you know, there are obviously a lot of use cases where you want to scale the opposite direction and not have Redux or whatever, like not have the whole package and just be able to have, you know, a small part of it. So, like, glimmer is actually separating those concerns. Yeah, glimmer is like the essentially the view layer of ember that they're trying to separate out.

</p>
<p><strong>Ryan Burgess</strong><br />
That makes a lot of sense. And yeah, definitely the frameworks and getting into like Angular, React Ember, it's like, we're starting to see more of that, like similarities that are coming about, like we're learning from each other, which is great.

</p>
<p><strong>Jem Young</strong><br />
And speaking of all the frameworks, like I have no beef with ember. I mean, I give Derek a hard time just me, just you just you all the time. But who was it? It was a we're speaking for Jess and Alan works for OXA. He's on TC 39. He's kind of like OG JavaScript. He was saying that. It's done that like people get in such heated debates about which one's better Ember, or react, or Angular or view. And he's like, what's funny is the people that created these libraries aren't involved in these debates, because they're like, they're all good solutions. But it's all the people that use them. They're like, No, you're wrong. This is better than this. Ember is dumb. Angular is dumb. React is the one true way and like we're having this massive argument, but it really doesn't matter. It's just if you're aligned is a team, use whatever you want. Like, I love react. It's awesome. But I'm not so opinionated, that if I went to a new company, and they're using Ember, I'd be like, Okay, that's cool. But as long as we're consistent on maybe memory, but

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, we got about Derek. So what advice would you give people if they're starting a new application, or, you know, just something to take away that we can help improve, like writing react for scale, having better structure, cheers.

</p>
<p><strong>Jem Young</strong><br />
The advice is the same as the advice we've been giving out on front and happier for years now. Learn Java scripts, I say that because I interviewed someone just the other day. And they couldn't explain like event delegation and event bubbling to me because they just use React, and that it does it all for them. And I worry, there's just this new class of engineer coming into front end land, and they don't understand what's happening under the hood. So if you build an application in JavaScript, and then as you need it poured in React, because that's what React is really good at just use it when you need it. And then from there, like build your application if it's your first app, and then you understand exactly what React is good for and what it's not so good for. And from there, you become like a really solid engineer. But if you just jump in with create react app, you'll be spending days configuring Webpack, which I've spent doing or redox. Or it doesn't, all those tools that are kind of superfluous to your end goal of just building a UI.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I'll echo that. I think, yeah, I've interviewed people in the same vein of whether it be Angular react. And that's, that's what they know. And I've written so many different frameworks over the years that I'm like, Yeah, I'm still just writing JavaScript, which is great. But yeah, react might not be the thing anymore. It's like, We could totally ditch it a few years from now. And then it's like, we have to learn something new anyway. So you don't want to be to hold into the framework.

</p>
<p><strong>Stacy London</strong><br />
I think if you're just getting started, and maybe you are new to react, but you want to make sure you're setting yourself up for scale, would be to I guess, just read a lot of read a lot of blog posts, there's lots of people that a lot of opinions about structure and choose yours. And the way that things should, what patterns to use. And just use some of that to start with, maybe come up with your own if you start to feel like those things. Don't meet your needs. But don't, I guess try and start off creating your own pattern like you'll get there eventually. But use use the mind share of of stand out stand on the shoulders of giants

</p>
<p><strong>Derrick Showers</strong><br />
like that. Yeah, I think in general, too. I mean, you know, it's good to read as much as you can and make sure that you're able to make the most informed decision that you can. But obviously, there's a point where you just need to jump in. And you also going back to what I was saying earlier, and you just need to be okay with admitting that you were wrong. You know that if it comes to that. So

</p>
<p><strong>Jem Young</strong><br />
I have a hard question for the panel. When do you use React Native if we're talking about scale?

</p>
<p><strong>Ryan Burgess</strong><br />
Ooh, that's a good one. Well, you can write for two applications at once, which is a benefit. There's definitely trade offs even for one thing that always worried me when we we've kind of explored that at Netflix is in the angular or sorry, in? No, I said Angular, but whatever. In Android, you're adding actually a lot of weight to the actual app size. Roughly two to three Meg's just by adding React Native to it, and that can be concerning, like you're thinking about, especially in some of the Netflix being global, I'm thinking about, okay, you know, someone in India downloading this, they may not have the fastest connectivity. And so now that's adding to this the download size. Yes, it's pretty small. But we haven't built anything, we just added a library. So that can be concerning. I think there's also things as Apple and Google release new features new iOS, well, now you're also having to wait for React Native to catch up with those new features and API's so that you can take advantage of it. There is benefits to it, though, as well, that you can you don't you're not just writing React Native, you could also be writing Objective C, Swift, Kotlin. Java on Android side, you can you're not just writing react, so you can kind of get around that as well. But definitely interested in everyone else's thoughts.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think if you I mean, if it's very, if it's very animation, graphic, heavy, I mean, every time you have to jump across the bridge, or whatever they call it, it's, you know, it can. And I think sometimes if you write react, maybe you don't always understand what's happening under the hood on the on the native side, and vice versa. So, you know, I think if you do understand that, then I think maybe you can probably write a pretty performant React Native app. But thing I always thought was really interesting about React Native, and this would help with the binary size. But the, what I think would would, is a really good use case. And what Facebook does a lot is to use it in a place of what you would typically use a WebView for. So like a lot of times a WebView is just something that, you know, at least on a native app, you just want to throw up something quick for, you know, all three for all your platforms. So for instance, at LinkedIn, we do it for all of our settings, because it's just kind of a chore to update settings across all three platforms that we support. So I think React Native is a really good use case for that. And I know like Facebook uses it for like their advertising manager and their I think even for their events, P or their events portion of their flagship app. So I think that's a really good use case, because then you still get the native experience. It's not as it's not as bad as having to load and deal with some of the performance issues of loading a WebView.

</p>
<p><strong>Ryan Burgess</strong><br />
So will you ever change your WebView or from a WebView to React Native?

</p>
<p><strong>Derrick Showers</strong><br />
I mean, like, I would love to, you know, parts of the app that are that are that are web use. Now, I think they should definitely be, that would be that'd be awesome to be reckoned with.
 
I like that use case.

</p>
<p><strong>Stacy London</strong><br />
I think some of it is a people scale problem, too. Like, if you have like a small number of people. And they all know JavaScript, then probably makes sense to something where they can write at once and run it multiple places, as opposed to like, your bigger company, maybe you have more money, you can have like teams building out the native thing like your your Android team, your iOS team. So it was always a scale thing, like I had done some Cordova hybrid apps a few years back. And it really was about money and business decision. Like we don't have the money to like spin up all these teams to do these different stacks.

</p>
<p><strong>Ryan Burgess</strong><br />
Like that you could even like there are ways to even tie some of the web code into your React Native. But even going back to Redux, you could leverage Redux to really manage a lot of the logic up top and really just build out components for the UI. Yes, iOS and Android are written a little bit different than the web. But you could actually leverage something like Redux across those three platforms. So there could be value there as well for scaling and to your point, is also scaling for multiple engineers.

</p>
<p><strong>Jem Young</strong><br />
And on the Redux not to jump back to it. I still argue that if someone saying, hey, we want to add Redux to our platform, they should give me a convincing reason why, because it still adds this layer of complexity that I think a lot of people don't necessarily need until you're at scale. And but they just throw it in there. And then I, we have a private slack group for just like front end people. And I see a lot of questions about redox. And people are like, just basic questions, because they're using it for things that like just don't need Redux. So if you don't understand why, then don't use it. And that's, I should make them a t shirt. Would you? Would you buy anybody? No. Okay. One person. That's That's enough for me.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. Well, I think we're running just just on time here. We got five minutes. You know, where can people get in touch with you? I'd love to hear you know, if you want to get in touch with you, Jem, where can they find you?

</p>
<p><strong>Jem Young</strong><br />
If it's a friendly email, you can hit me up at Jem and that Flix calm. If you're just angry. You can just send me a tweet at Jem Young at Jem Young. I prefer dog pictures. Throw that out there.

</p>
<p><strong>Stacy London</strong><br />
I'm Stacy Londoner on Twitter.

</p>
<p><strong>Derrick Showers</strong><br />
I'm Derek showers on Twitter.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm at Burgess de Ryan on Twitter. I like the dog pictures, but you can also send me some tattoo photos. If you have tattoos. Javon will send you stickers so I'll do the same if I get some photos. So that would be a good way their eyes are coming out. Bribes are coming out. Well, thank you all for listening. You're wanting to listen to us. Check out front end happy hour.com We're on Twitter as well at front end H H. Fall you know subscribe to us on whatever podcast Test catcher that you like to listen to and I want to thank react react AThon for having us out here we really enjoyed being out here it's been a great conference so thank you so much and thanks for listening thank you thank you

</p>
`;
        return transcript;
    };