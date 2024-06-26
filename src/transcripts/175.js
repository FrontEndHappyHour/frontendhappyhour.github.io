module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. You know, it's been a really long time since we've done episodes around CSS. So guess what, on this podcast episode, we are diving deep into the CSS ecosystem, and how it's changed over the past year or so. And in this episode, we're joined by Chris Boyer, obviously, is going to be very helpful to cover CSS to really to dive into the topic. Chris, can you give a brief introduction of who you are, what you do? And what your favorite Happy Hour beverages?

</p>
<p><strong>Chris Coyier</strong><br />
Oh, I'd be glad to. Thanks for Thanks for having me on the show. Big fan of the show. Can't wait. That's gonna be cool. I was kind of curious. You said it's been a long time since it doesn't is CSS a big it's not a particularly big topic for this particular show. Right? I mean, it's part of the front end, it gets, definitely gets to,

</p>
<p><strong>Ryan Burgess</strong><br />
we should do it more as I think that's the problem is like, we haven't covered it deep enough. And I think that I've looked back on, like how CSS has changed so drastically, just in the past? Little while that it's like, why haven't we been talking about this? So I'm stoked to have you on I can't believe we haven't had you on sooner. So now we're making up for lost time, Chris. So thank you for joining us.

</p>
<p><strong>Chris Coyier</strong><br />
Yeah, right on, I work on this app called code pen, which there's all kinds of CSS on because that's kind of the gist of it is this kind of social front end coding environment thing, it's a very simple online editor where, you know, you get these three boxes for HTML, CSS, and JavaScript, and you and you write them. And people use it for all kinds of different reasons, a lot of people just, they just start showing off and they build mazing things that are just fun to look at. And so the social part of it is that when you go to the homepage of code pen, especially when you're logged in, because it's through the through the power of AI learns what you like, as you browse code pen, I don't know if everybody knows that, but it's kind of, you know, what you click on and engage with, and stuff is kind of informing a little model of like, I bet that like this two kind of thing. And you can just see what see what's what's cool. And what's happening that day, there's enough activity there that it's worth checking out, like a like a social network is. But I think most people use it to just go and try something out. They're like, I'm having a problem with this, or I want to explore this idea or something. And make room you know, what we call pens, which are just little basically little websites, and, and then share them with their team. Sometimes they get, I don't know, they use it to get sign off from a client or something or to fix a bug or to answer a StackOverflow question or whatever. That's what the the code pen it or it is. And that's my full time gig, you know, I have a co founder, Alex, who, you know, we co own it together and a small team of people keeping it going. And we're hard at work with kind of a code pen 2.0 That hopefully there'll be a beta of soon. And that's my that's my big thing. Although the big CSS connotation with me is that for a long time, I ran this blog called CSS tricks that was my baby for a long time. And a little over a year ago, sold it because it was it was too much for me to go run both code pen and CSS tricks, and I had an offer on it. So Digital Ocean is the owners of it. Now.

</p>
<p><strong>Ryan Burgess</strong><br />
That is really cool. I remember you telling me that at render Atlanta, and I had no idea that you had sold it. So that's exciting to me, we free up more of your time, and we're gonna see more features in code pen, which is cool.

</p>
<p><strong>Chris Coyier</strong><br />
Dang, right.

</p>
<p><strong>Jem Young</strong><br />
I don't know I've been working on a I've been working in front end for a long time. And I've never heard of code pen or CSS tricks. Guy, Chris. I've never heard of him either. So we're gonna have to ask him.

</p>
<p><strong>Chris Coyier</strong><br />
I got some work to do.

</p>
<p><strong>Ryan Burgess</strong><br />
Jeff has just been living under a rock. That's just what I'm hearing from this comment. I guess. Yeah. Chris, what's your favorite Happy Hour beverage?

</p>
<p><strong>Chris Coyier</strong><br />
Oh, man. That's a good one. I've been really into the room old fashioned lately. It's just a good dark room and bitters and sugar.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Yeah. It's such a simple one. That's so good. So I'd like that. All right. We'll also give introductions of panelists. Stacey, you want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. Stacy London. I'm a principal front end engineer on Confluence. Atlassian Hey, everyone.

</p>
<p><strong>Cole Turner</strong><br />
My name is Cole. I am a all kind of engineer at Netflix.

</p>
<p><strong>Jem Young</strong><br />
Jem Young engineering manager at Netflix of the growth UI platform and the web platform. And yes, I'm absolutely familiar code fan and don't get me on Twitter the job What do you even know front end? Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
If they didn't catch the joke, right? Yeah. Some people will after

</p>
<p><strong>Jem Young</strong><br />
all the time still don't pick up on my sarcasm. So I gotta be really clear about a podcast.

</p>
<p><strong>Ryan Burgess</strong><br />
Maybe that's good feedback for you. Jim. You need to be like very clear on that. Sarcasm.

</p>
<p><strong>Chris Coyier</strong><br />
It wasn't wasn't my place to call it out anyway, because I can't be like But Jay I'm Surely you've heard of me, the famous me. Come on man.

</p>
<p><strong>Stacy London</strong><br />
Conference. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. And I'm Ryan Burgess. I'm an engineering manager at Netflix in each episode of the front end happier podcasts. We like to choose a keyword that if it's mentioned at all, we will all take a drink. We've been struggling with, like, what's the best one to come up with for CSS? But what did we decide for this topic? Layout layout?

</p>
<p><strong>Jem Young</strong><br />
Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. I mean, CSS and layouts. Obviously, it's it goes hand in hand, so there'll be good. Cheers. Cheers. Cheers. All right. Well, let's dive in. Chris. Like we had mentioned a little bit about render Atlanta, you gave an excellent talk at render talking about a lot of like, the modern CSS. And that I think, is a great area for us to kind of dive into, maybe let's start with like, what are some of the new features that you've been excited about have used or just excited to be using?

</p>
<p><strong>Chris Coyier</strong><br />
Oh, I just get to pick whatever I want.

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. And let's talk about it.

</p>
<p><strong>Chris Coyier</strong><br />
Let's talk about it. Uh, you know, if I had to pick one to just to start with, just because I hope more people like know about it and start thinking about it and using it, especially because it has, it's dropped in stable Chrome. And dropping in Chrome is like a big deal these days, right? Because it goes goes an edge automatically. And all those people using arc and what else? I feel like it's a pretty copied browser engine these days. So you get a lot of mileage when things drop in Chrome, is the view transitions API. Have y'all seen that one? You know what I'm talking about? Oh, that's really cool. It comes in these two forms. One of them the JavaScript API is just one, it's just one call, like. So as far as wrapping your mind around it. It's it's quick to it's called Start view transition. And you just like, however, the DOM is, before that call, it just just knows that I guess I don't know. And you don't have to do anything special. And then you call start view transition and change the DOM in some way. And then when that function is done executing, it knows that like, okay, the Dom has changed in some way, this div that was up here is now has now changed its styling properties or is in a different position in the DOM or something and be like, I know what to do, I will tween it from from where it was to where it is now. And you get that tweening for free. tweening. Like like that old school flash word that was like, Yeah, move to the color or the size, the shape, or whatever. You just get it for free. It just it just does it. And you have to write zero lines of CSS, if you want to get that like div to move from one place to another. And you know, just because it can't help but thinking about oh, you're sitting with a bunch of Netflix people that looks UI is full of that crap, you click on a thumbnail of a thing and it expands into it's not even. It's it's like every app does that what I think about is when you pick up your phone and you look at it, and you're and then any anything that you do on a phone is just loaded with you transitions, you click an app, it goes whoop, and it opens up and then you click on your podcast and overcast or whatever you use it like zushi is over to the left and shows you the episodes and you pick the episode and its uses down and shows you that there's zooming all day every day on mobile apps. And it's it's not even because it's just like that's what's hip right now. It's like that's the grunge of right now or something. It's like no, no, we're well past that. It's because it's a design pattern, that it's just better. It makes people understand what's happening. It's like, Oh, I've moved from my list of items to a single item. And when I do that, there's almost this concept of like, object permanence in it's almost an accessibility concern is like, Oh, I get what's happening because the whole world didn't just disappear and then reappear in a new state. I saw it move away. So it's gone, because it moved away. Like I can't see the cheetah anymore. Because the cheetah walked away from me. It's almost like caveman, right? Like, I understand what's happening because things moved. So that's, that's just established as a thing to do. And yet, the web platform had no way of helping us with that, necessarily, if you wanted that to happen. And you're moving from a list of items to a single item, and the URL is changing. It was like, Oh, well, too bad. It's just gonna it's gonna change. So that that JavaScript API I mentioned, if you change the DOM without the URL changing, you call start view transition, and it will tween them for you. And like I said, you need no, you don't even write have to write a single line of CSS to make that happen. So I guess it's a JavaScript API, but if you want to, they expose all these CSS things to control it, not just how long it takes, but do you want it to Turn 90 degrees while it's doing it. You know what, what do you what do you want here and you want to change opacity while it's happening, you have full CSS control if you want it. And we'll see how that shakes out like, do most people take advantage of that or not? I don't know, I kind of suspect some will some won't. Kind of like when you do a transition today, a lot of people just say, I don't know, transition 0.2 seconds or something. They don't bother specifying a special easing quality or something. It's like some do some don't. But so that's the first kind of there's the second kind of view transitions, which instead of being all, JavaScript is all CSS. And HTML, really, you put on on the HTML nodes, you put this special CSS property that we're trying to Can I sneak the word layout in here, so

you give it a few transition name. And then if you click a link, it's like the, you know, the way that a browser does prefetching and stuff it like goes and gets the new HTML and the new CSS of the new page. And it really quickly looks to see, Oh, is there anything else that also has that view transition name, if there is, I'm going to do that same tweening thing, between the things that have the same view transition name, so nothing can have the same view transition name, if you if you don't have two elements that have the same one, the whole thing just aborts. It's like I refuse to participate. So you have to be real careful about giving things, only the one existing name, and then they'll move. But the beauty of this, there's no JavaScript involved, not a line of JavaScript requires that to work. And, you know, the refrain so far about all this is like, that's incredible. Because, believe it or not, they might not even phrase it this way. But sometimes people pick SPI frameworks, meaning you're using React router, or whatever you're using next, or you're using Knox or some kind of framework, because you get that because it opens the door to the possibility of what does it feel like to move from page to page? And can I control it if I want to? Now you don't have to make that choice that you can have, you could have 100%, not a line of JavaScript, old school website and still build those like mobile like transitions of how things move around and totally control it and CSS. That's huge. Thanks to everyone involved. Good job.

</p>
<p><strong>Jem Young</strong><br />
Chris, can we take you on a side quests real quick? Because you brought up a really interesting topic that I don't know if we've really covered which is that idea of thinking about how humans interact with your with your UI, is something that as developers, we don't really do. We're like, oh, it looks cool. But why is it cool? Why is it important to have this button like bounce a little bit? What's What's your stance on UX design? To me like an underrated part of front end, but someone who actually studies how people are interacting with your page? And how does that relate to that kind of you transition? And that natural movement that makes sense to people?

</p>
<p><strong>Chris Coyier</strong><br />
Yeah, yeah, I'm not sure if I have any, like real. I've never like academically researched it myself. So a lot of what I do comes down to like, Does that feel good? Does that does that seem like the right call, but then balancing that with, like, I'm just one person, and we build websites for all sorts of people. So you got to think about that stuff, too. One of the things I think about, let's see if this is relevant to what you mean, but like, that classic, mobile one, you know, like from a list of items to one item, like I was talking about that, you know, so many apps have, it's just kind of kind of a classic auto scan on a small screen that's in your hand, that like movement of the whole screen over to another screen is like, kind of fine, we're used to it. Maybe if you're really sensitive to movement, you might go into your phone settings and change. There's generally kind of a reduced motion setting in, in everything from from desktop to mobile operating systems, but like that one is I feel like probably most people aren't terribly bothered by it. I don't know. Like I said, I don't have any academic research, but a lot of people leave that on. Whereas on the desktop, I'm looking at a giant monitor right now, if every single thing I clicked move the entire page 2000 some pixels to the left, you'd be like, oh, you know that you get that vomit comment thing going on. Even if you're not really susceptible to some people are very susceptible to it and that would definitely, but even people that aren't normally susceptible to it that you I think a while browsing, watching 2000 pixels constantly flying by it would be too much. And so that's what I think is you're using intuition, but, you know, using movements to help what's going on On but not too much, you know, like, like to have Michael Pollan's take on web animation, like use animation, not too much, mostly quick, you know.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think that's the cool thing, though, too, with it being native to the browser, too, is that it's going to feel more seamless where it's like, if you have any, like janky feeling that, you know, we've we've been there with like, Chris, you mentioned flash, or even like JavaScript of us having to do this all on our own or use a framework, the browser, allowing this natively just makes it so much smoother. And I think that in itself makes a better transition to I'm sure, with someone out there is going to make it as obnoxious as possible with the CSS controls on it. But, you know, for the most part, it should be fairly seamless, like it should be that like, just subtlety. Yeah,

</p>
<p><strong>Chris Coyier</strong><br />
I don't know, I don't envy the people that had to choose the defaults for it. Because that's, that's tricky for, for a new thing. If you're like me, you make a website and you put a hamburger menu on it, you click and you're like, oh, you know what, I'm gonna have it slide out. And then you use your own hamburger menu about 50 times and you're like, you know what, I need to make that about three times as fast, because that's frickin obnoxious, how long it's taking, and then you do open another 50 times, and you're like, screw that transition, that thing's just got to open because I can't, I cannot wait for it anymore. It's driving me crazy, you know, that? That That's tricky. And if they get these defaults wrong, it might drive people away from using them at all, because they're like, Ah, it's feel so sluggish, you know, in the web is so good about backwards compatibility stuff. I'm not sure if a good transition timing qualifies as a breaking change. But the web is pretty hesitant to, to change stuff once it's already there.

</p>
<p><strong>Cole Turner</strong><br />
Well, that's the beauty of the view transition API that I'm seeing what you're saying, Chris, is they don't have to do much out of the box, they get a lot for free. And I think the beauty of that is, over time, the operating system can optimize what is the ideal experience for the user, or how these transitions should evolve over time. And that allows the platform to create consistency to create leverage to give those users those accessibility options. Whereas if the API required more hyper customization, I think we would find ourselves back in the land of jQuery and global stylesheets. And that was fun.

</p>
<p><strong>Chris Coyier</strong><br />
That's a good point. It makes me You know how sometimes the spec doesn't say stuff. Like it intentionally leaves out implementation details, because that's like an individual browser concern. I think of like, the calendar picker or something, or that input type equals date. They that the spec doesn't say, it just says very vaguely, like, it should allow the user to pick a date. That's about what you get. And then if you're on the WebKit, team at Apple or something, you just got to be like, Okay, I guess we're going with weird dial things. But it doesn't say on purpose, because I wonder if that is similar here. And that. And then it says, Well, you know, that element should tween to itself. But it doesn't have to be 0.2 seconds. You know, if Apple decides that 0.18 seconds, then that's what they're going to do. I wouldn't be surprised.

</p>
<p><strong>Cole Turner</strong><br />
Yeah. And like today, we might prefer smooth flowing pages. But tomorrow might be the year of just instant flashing pop ups or whatever. I hope not. But that allows the platform to evolve what the user experience looks like, consistently across application,

</p>
<p><strong>Chris Coyier</strong><br />
right? And they did put the, I don't know if primitives is the right word. That's what came to mind, though. It's like, the API's or whatever involved so that if you want to take control, you know, whatever Netflix would take control. You wouldn't, you know, I don't think you'd just leave it to browser defaults, you know, anyway, that's cool. That's a that's a big one, it gives just a huge, huge thumbs up from me for a thing that I'd never thought you'd be able to do. This whole last year was just, uh, just jaw dropping, like how we were told our whole lives. This was not happening in CSS, and all of a sudden, they're like, Oh, you want to select the parent of something? Yeah, you can do that. Now. You're like, wait, what? That was a, that was a, that was a thing that was not happening. And they're like, oh, not only did we do that, but we made it way better. It's not even just the parent, but it's like conditional. And you can reach up to the parent and then back down again, if you want to, like do like, solve everything we'd ever want to deal with, with selecting with a has selector and CSS that's like, I just, I haven't even I'm just still reeling from it. I don't I don't think I fully have it in my brain yet. Like, you know, opportunities that I probably should be reaching for it. But hey, I'm so conditioned to assume that it's impossible. That one's that one's wild. And then we got it right off the heels of container queries, which is you know, this ability to write a media query for the individual components that were also was, you know, very clearly expressed from the powers that be that you are not getting this When asked about something else, you know, we're super sick of hearing these requests for container queries, it's not happening. And they're like, Oh, actually, we figured it out. Here you go. Unbelievable. I mean, between those three things happening in like, one year, it's like, yes, crazy. That's wild. No good time to be a CSS developer weird time to sell a CSS blog. But anyway, what do you want to y'all excited about? I mean, we're, we're, we were bringing CSS to front end happy hour, you know, yeah,

</p>
<p><strong>Stacy London</strong><br />
the container query stuff. I just want to talk about that more just because like, how monumental that is, like, how much JavaScript have we all written to achieve that particular layout? Tears, effect of chairs, container queries? Is it truly if you go to like, can I use? I mean, is it truly, you can use that in in modern, all modern browsers

</p>
<p><strong>Chris Coyier</strong><br />
now? Yep. No one's ready to rock. That one's absolutely amazing. Especially because it I like it when they are like simpatico with what what front end developers are doing anyway. And that I know, this has been a long time now. But it's like the paradigm of we are building in components now has taken over. I mean, I guess that's clear to everyone. But at the same time, a lot of us are like, Oh, but did you know that WordPress is 42% of the web or whatever? I'm sure you hear that one ad nauseam, right? Something this incredible statistic about WordPress, WordPress websites are built from PHP templates, they don't have components. PHP doesn't have like a great components syntax. So that huge quoted number is probably not individual developers crafting each one of those websites from scratch, there are people that just go to wordpress.com, and pick a theme and roll with it. But still, the number is staggering. There are lots of custom design websites, there is a big chunk of the web that doesn't, doesn't think like people that use modern JavaScript frameworks think when they make a website, and I'm talking about, they're all there as much as there's fun little fighting and stabbing between the view people and react people and smell people and solid people and all those people. They all they all build crap with components, they all have props, or attributes or whatever, they all build their own little nested tree of, of component tree. That's all they all work. And so Okay, I like it. I like it so much that I wish WordPress would figure it out. I want to build old school websites that way to which you know, the I guess, you know, you should use Web Components. That's a whole other story, I guess. But that's sort of like the native Web's answer to this component tree system. But okay, we're building things with components, right. So I don't I never think about where it's going to be used. I just I just thinking about this bubble that is a particular component. So if I'm going to write styles for that component, I have no idea how big the pages, I can never write a media query, because I just don't know how big that component is going to be. Nor do I want to know, it's like information that should not be in my brain when I'm working on an individual component. Thus, the only tool available to me to size that or make styling decisions based on how big it is, is a container query. So it's not just like, hey, that's a good idea. It's Hey, that's the that's, that's the thing I shouldn't shouldn't be doing on every single component in my entire codebase. Yeah. And if you need to, like ask, like, how big is the screen? Really, you still have stuff like viewport units? Yeah. If you're still like, oh, how big the text should be actually should be, perhaps have something to do with how big the entire browser screen is? Well, you can still do that

</p>
<p><strong>Stacy London</strong><br />
the amount of JavaScript that I've seen to try and in basically do what container queries do. There's like this whole community of jobs for people that are obsessed with performance and performance tuning yet, that kind of JavaScript to do all these measurements. And Recalbox is like some of the like, most gnarly on performant code that I've ever seen. And it's just like, to it, people just get into trouble very quickly with that logic. And it's like, to me so exciting that you can say, don't, you don't have to worry about that, like the browser's hyper optimized to figure this stuff out. And to kind of be able to rip out some of those performance, like foot guns or whatever you want to call it,

</p>
<p><strong>Chris Coyier</strong><br />
because you're like, oh, which JavaScript thread should I use to measure this? I think I'll use the main one. Yeah. Only one Yeah. Right. And that's that's just been classic forever any scroll event or resize event, the JavaScript had no option but to fire that thing. Just constantly which was led to some pretty horrible code over time and other didn't you know, there's good led to better stuff like intersection observer, a mutation observer and there's there's better ways to code some of that stuff possibly now, but every time something like moves down the stack, in view transitions is a is It is a thing for this to that, you just get some of that performance stuff, you know, quote unquote, for free. That's just great. You know, I saw just up I think it was a post yesterday, here's a, here's another minor pivot to this thing called scroll driven animations in, in the CSS. So there, it's kind of like being able to attach a keyframe animation instead of over a period of time, over how far you've scrolled in something. So if you're saying keyframe at 42%, it's not 42% of a duration, it's 42%. Scroll through that element. And you can attach it right to the body element. So you know, zero through 100%, scrolled through the body. And so you can do cool stuff. Like as you're scrolling down, have things fly in, or whatever, you know, I'm trying to give you tasteful ones. But there's plenty of tasteful demos out there. A really classic Mo is just one of those reading bar indicators, like how far am I through this article? That's what their their performance demo was. It was a blog and went to Google's blogs like web dot Dev, or whatever it is. And it was it was comparing, doing that with JavaScript, because you have to attach it to the scroll event to the keys on scroll, fire a little JavaScript function that then asks, okay, well, how far is this element scrolled through the thing and report that, and that's fine, it's actually not that bad. These days, it used to be like real bad to attach anything to on scroll. And I feel like I don't know, maybe browsers optimized or computers or got better a little bit, you can get away with it a little bit. But in their demo, what they did is they put some arbitrary heavy JavaScript running. So it's just a set interval loop and the set interval, measured something. And that's enough, if you have like an infinitely running set interval that's measuring something that just sucks for the main thread, it's just gonna gobble it up, you know. So they, you can click a button, and it would start that heavy JavaScript, and then you could scroll down the page, and you could watch that bar that's supposed to be filling very smoothly across as you scroll down about every, you know, maybe half a second, it would jump to the next position, because the browser is only giving up one frame every once in a while outside of that set interval. Loop. And it was so janky, you know, it's the perfect kind of thing, then they were like, Okay, I'm gonna do the same exact demo. Really simple code, instead uses scroll driven animation and fill up that bar, that horizontal bar just based on how vertically far you are, scroll down the page, and then turned on the heavy JavaScript again. And you can scroll up and down the page. And it's just buttery, smooth still, how much that? And that's a contrived example of you know, like, that's not, but it's a good one. And then it's like it, when you can pick something that does, it doesn't matter what else is happening on the page it like, keeps it's, you know, buttery, potential. It's great. And usually that means, like, if I can pick it up and put it in CSS, it's going to do that pretty cool scroll driven animations and put that on the list. That's the

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, that's, that's one I didn't even wasn't even aware about. So that's really cool. Another one that stands out for me is some of the changes to color. Right? That was a big thing. That's I don't know when it was added, but more of like, how we're dealing with colors and aqua, most of this year. More Colors. Yeah,

</p>
<p><strong>Chris Coyier</strong><br />
unbelievable, right? Like the world's always been how the world is. But somehow we designed monitors and such to me, it was just a limitation of our time. I'm sure you can imagine an old Commodore 64 or whatever that just had 16 colors or 256 colors or whatever, it that's just where technology was at the time. So when we invented programming language, just they they were just capable of expressing what those colors were. It's just gotten weird in our heads. Because once we got to millions of colors, I think we all just kind of assumed that like, yeah, that's, that's probably all of them. Right? Like, I think we think we got it. With millions of colors. I don't know how much more you need. Or at least in my brain. It's like, even if we only have millions of colors, at least you like you got the edges, right. And then maybe if you've got more colors, you just be filling in little gaps between those colors, but the edges are right. The edges were not right. That just were wrong, unfortunately, so like if you want to express like mega mega, pink, yellow, green, these are like colors that in this new P two color space is their way extended. So before this all happened if you wanted to express the pinkie as pink, you could it's lame. Now if you look at the two color swatches next to each other. Wow, way. It's just way more extreme. And now there's all kinds of it's p3 color space. Did I say p 200. That was misspoke. By the way in case there's anybody out there.

</p>
<p><strong>Ryan Burgess</strong><br />
You'll just get someone tweeting at you and saying no, it's actually Eat actually,

</p>
<p><strong>Chris Coyier</strong><br />
that's fine. But that's a color that's a color space. So that like the conceptual model of colors, okay, p3, great. And there's other ones too. But p3 is the big one that matters right now for us on the web. And it has these potential for more color. But then in CSS, how you call colors in that space can be different. So if you there what there isn't, there's no such thing as a hex code that can display a p3 color. It's not possible because it uses the sRGB color model. And there's no way to say, hey, browser, I want to I want to write a hex code, but I want to express that mp3, you can't just because of the limitations. So you have to use some new way to reference color. And there's a color function that can do it. But for the most part, you're you're picking a new color function or something to do it. And there's, there's, you know, there's really cool ones like LCH. And okay, LCH allow you to reach into that, that color space and do it. And they their color model has interesting characteristics, like this the nerdiest stuff I've ever seen in my life where they made a like a, like, that's RGB was just a cube. They're like, Oh, programmatically, colors will just be coordinates on a cube, that's where the color is. But they're like, oh, it turns out that when you map color onto a cube, it doesn't. It has some like, kind of sucky characteristics. Like if you, if you're going to draw gradient from blue to yellow in a cube, and then programmatically choose the colors between there it goes through like gray. So you're like, oh, that's unfortunate. But what if you don't want to go through gray? Well, that's okay. You can use in CSS, you can do multiple color stops, and you can avoid gray if you want to. But so many people are just like, I just want to gradient from blue to yellow, could you please just do that for me, please? Different color models came along and said, Oh, in our color model, when you go from blue to yellow, it goes, it's just as much more aesthetically beautiful path to get there. And all these color models have different different paths to paths to getting there. But an even better one is, this is one of my favorites of all time there used to be, what is the HSL that's a color thing and CSS that there's hex codes. And there's different ways HSL was a good one Hue Saturation and Lightness. And it made it really programmatically easy to work with color. Because if you had some kind of red color and HSL, and you wanted it to be lighter, you would just increase the l value at the end of it. And it'd be like, Okay, now that's a brighter color than I had before. A lot of us that use Sass used to love that you'd be like, lighten, and then he sent you know, and you'd get a lighter version of it. Well, now that's come to, you know, to a CSS color model isn't your color function is that you just change that value. But there's this big problem and HSL. The problem is that if you adjust a color upwards, 10% depending on what starting color was, it could feel very differently, it could feel like one color was really cranked up 10% was like too much Ah, stop it, or 10 minutes was not enough, you know, you'd really have to turn those dials differently. Whereas in the okay LCH model, they somehow dialed in, it's so perfectly that if you change your color 10% It perceptively looks 10% brighter, no matter what your starting color was. It's just like a characteristic of that color model. That's really cool. So like, why not use that if you're a designer, and working in CSS as well, using that color model just has that side effect that's really nice. It's like, wow, I get better gradients. And I get more perceptive lightness and I can reach into the p3 color space. And it's like, holy crap, you know, so you kind of kind of kind of got to know that. Especially because it's it's almost part of a, a time period where like, there was an awkward time where like some people at high density monitors, but most people didn't. And for the people that did if they looked at like a JPEG that was too small, it would look really janky. And like favicons for high density display people you there's this era where everybody's favourite con looked like crap, if you had too nice of a monitor. Yeah, it was like a transitional period. We're kind of in a transitional period where the more and more websites use the full spectrum of colors from p3, it there'll be a period where like, those websites look good. And then they start to look normal. And then the ones that don't are gonna look drab, you're gonna be like, you're clearly using a limited color space. So we're just entering that phase. I feel like So yeah, that's a big one. Thanks for mentioning that. Yeah, colors, colors, getting a while. We get even a little more stuff, too. There's kind of a relative color syntax that I'm excited about that you can, you can you can tweak the individual federal values of any of any color space, like right now, if you have a hex code of orange, and you're like, I'd like to manipulate that. It'd be like, oh, man, I can't because it's not in HLSL or LCH, or something useful in which I can tweak one of the values. It's just a hex code and I don't know how to tweak hex codes, you know very few people do. But you can use the relative color syntax just it's just you just call a function called color and say from that hex code, and then it kind of like D structures the color into individual values of the color space you're moving to. And you can, you can start with the hex code and say, give me 10%, more lightness, or more hue, or shift on it or something. And do that no matter what your starting color is. Pretty cool.

</p>
<p><strong>Stacy London</strong><br />
That's super cool. Because just being able to the math of that I like recently, like, dug deep into that math of this is for Trello, for building out three mobile things like the your board background that you pick, you know, is some image and you say, Oh, we know the dominant color on that is this hex code. And that's what I had to work with was the hex code. So I had the hex code of the dominant color, but all the math that I had to do to like transform that into HLSL is what I chose, because I needed to adjust lightness. And part of that was like accessibility stuff. It's like, well, you're throwing text on there. So you need that color to be contrast ratios. So people can actually read that text on this like dynamic color that you have no idea about an auto ratcheting the lightness up or down. And like that was all good. Like mathematically, you could figure all that out. But there were still these scenarios where like it met, you know, wiki egg contrast ratio, but it just, you know, blasted your I was saturation, and it was like, what kind of algorithm can we apply to it to make it not so saturated, but maybe like, more pleasant on the eyes, like all these new color options and ways of doing the math around them? And making it easier? It's just Yeah, it's super exciting. I don't know. Like, that's not like a common thing that a lot of developers are like, thinking about or working on. That's like, kind of this hyper specific thing with themes. But I just ran into that recently. So I was like, oh, colors, I'm really excited about these new new ways of doing math around color.

</p>
<p><strong>Chris Coyier</strong><br />
Yeah, used to talk about plucking something out and moving it to CSS. If you were in a situation where you need to do really dynamic things with color, you're in JavaScript territory. And now you just don't necessarily need to be or at least less less. So pretty rad. Yeah, it's okay. That it's specific. Not every website needs it. Not every website needs drag and drop. Not every website needs file upload, you know, like, but some do. So help us out here.

</p>
<p><strong>Ryan Burgess</strong><br />
So Chris, I'm also interested, like, we've talked about a lot of the great features that are here today. What are some things that you all want to see for the future of CSS? Like, what are things that we're still missing that you would love to see?

</p>
<p><strong>Chris Coyier</strong><br />
Yeah, yeah, I mean, I got stuff. Not. I'm almost like, happy to wait almost for just them to surprise us in a way because we got so much this year. And I've heard I've heard interesting people be like, just wait, there's so much more coming. That'd be like really, like I, my brain is starting to run out of things that I think we need only because it's so amazing what we've got so but there's still stuff I mean, a big a big hanging one to me is the Animate to auto, which is like, I have this thing that is collapsed to zero or not on the page at all. And I wanted to enter the DOM and then expand to however big it it naturally is, like let's say it's a PLM in a paragraph that just has absolutely arbitrary text and that you have no, you have no idea how how large that's going to be and CSS. There's no way to express in CSS animate from zero to however tall you are. There's just no syntax for that. You can't say height, you can't animate from height zero to height, auto, the browser just will ignore that. And, but you should and it shouldn't be that simple. It should be like height, auto should just be a valid option for what you can animate something to that would be cool. Again, something that JavaScript often ultimately does, you know, it'll like grab that paragraph element, render it somewhere, that's not height zero, get the, you know, get bounding client rect height on it or whatever, that it knows the number and then sets that value somewhere in animates to that JavaScript often gets involved in that way. Or there's little workarounds, where you can animate to like max height, I don't know 500. That's probably taller than it will be. So I'll animate to that. But that's not very specific that animates to the 500. And it might have been done at 300. So your timings get off and stuff. That seems like a low hanging fruit. I'd like to see this here. I got I had to do a bunch of like, click and drag to resize stuff recently. You know, you can tell the code pen interfaces full of that, like grab a bar and drag it down. You know, and that now the top area is bigger and the bottom area is smaller. It seems funny to me that CSS can't help with that. There's not really a resize McCain Anak, that that works great in that way, there is a resize property in CSS, but it has to be overflow hidden on that thing. And it gives you this tiny little, these two tiny little black dots in the bottom right corner of whatever it is to resize, you'll notice it from a default text area text areas are naturally resizeable. But you can make a div for example, resizeable, too, if you want to. But all you get is that tiny little thing at the bottom right corner, you can't say, give me the full bottom bar of the div I want to resize that. That would be that would be great to me to again, not have to resort to JavaScript just to do I should be able to say, with some layout, I should be able to, say display grid have to be able to set two grid columns right next to each other, have that separator in the middle and then just drag them resize them, why can't I do that and CSS love to be able to do that. That's just a couple of things. You know, I'm almost more excited. It's it sounds like there's so much momentum with improved CSS that they probably have some stuff in mind that they're gonna go with, although, you know, doing it based on actual author feedback is probably a good way to go. But we got nesting too. That's amazing to dig near dropped across all browsers.

</p>
<p><strong>Ryan Burgess</strong><br />
That was huge. Like, that's something that we've been doing in preprocessors. Forever. And I'm so excited to have that native css.

</p>
<p><strong>Chris Coyier</strong><br />
Yeah, yeah. Isn't it interesting? Most of this stuff is just applauded, like this whole episode. We're like, oh, I can do that now. Oh, I can Yeah, no. There's, there's, there's not that much people being like, ooh, are you sure that's the right direction, or CSS? You know, I feel like we're due for an age like that, too. Like, it's time for some infighting. And some people being salty about stuff. Let's do that.

</p>
<p><strong>Cole Turner</strong><br />
Let's go back to cities. I like what you said there, because that's it. For me, I think about the days where I used to have to make like nine slice tables to get rounded corners. And there was the age of every design had rounded corners. And so you would spend hours just putting like, table cells and rows together images, PNGs, making sure that the images were transparent, making sure that the color space is right. And what I see happening with CSS is that's being replaced with the shorthand properties are the more convenient solutions like the view transaction API. And I'm looking forward to more of that. Because when you think about some of the harder things to do in CSS, with layout, choose, it's gotten better with things like logical properties and grids. But there's still a lot of custom design work that requires heavy handed CSS, like when you want to take up a full screen or something, things like that are becoming easier. And that's what's most exciting to me. And one question I have, for the developers out there is, you know, as CSS is getting more advanced, do we even need less or Sass anymore?

</p>
<p><strong>Chris Coyier</strong><br />
I just explored that the other day, because I had that same thought that you didn't, I was like, let me just look down the list of stuff that Sass does, and see if see if we got it now. And we got you know, 80% of it, maybe there's a handful of things that that it doesn't have, it doesn't have, like at if in Sass, you could say at if and then a variable and then else. So you could you could do really conditional CSS you can't do in that clean of away with custom properties. Sass also had loops, which we saw a lot of, and still do a code pen, because maybe you have like 100 DOM elements, and you're trying to like apply a slightly different transition to all of them to have like a staggered effect or something. There's some reasons to have loops in SAS that way, you don't have to write like and child one and child two and child three and child four, you know, 100 times that's not maintainable code. So you'd write a for loop and I'll put the variable that way. No loops and CSS yet either. Those are two pretty significant ones. You know what my favorite one is? That pisses me off about CSS is just slash slash, like JavaScript does and so many other programming languages have single line. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I forgot about how painful that is.

</p>
<p><strong>Chris Coyier</strong><br />
That's very obnoxious that you know what, there's no single line comments and CSS and I'm sure there's big time historical reasons. It's probably a breaking change even Adam now. So we probably won't get that but that would sure it would be nice.

</p>
<p><strong>Stacy London</strong><br />
What about an easily styleable select component like that today is still like everyone rewrites the Select. If

</p>
<p><strong>Chris Coyier</strong><br />
you look at lookups select dash menu, they made a new HTML element that behaves exactly like the select element does only this one. You can you can just select it and style it, do whatever you want. Crucially that the inside of it. The option elements were always harder to style than the Select itself, you don't have little control over that. But when you open it, you had nothing. Yeah. But the select menu, which is I don't think it's done done yet, but there certainly was some prototypes in browsers that that are allowing that. Yeah, that's a big one. That was I think, as far as like, going around asking developers, what's one of the most painful things you have to do? That one always kind of topped the lists. In a top that list for good reason, because it topped the list if you're trying to do it, right. You know, the, the classic thing is like, Oh, sure, I can, I can write a div with an unclick on it that that opens up another div that has a bunch of options in it. That is super inaccessible. For one, that's a click only did you handle all the other ways that you can open it? Did you deal with the spacebar? Or do the arrow keys work? Does the tab keys work? Does the Escape key work to close it? Where does the focus go? After I leave it? There's like a million things that you have to do. So if you're gonna take that into your own hands. And do you better be prepared, you know, to do it right. And you're not going to? Even if you have the best of intentions, you'll screw it up. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I know teams that spent six months writing a JavaScript like a really, you know, robust, select situation. It's like

</p>
<p><strong>Chris Coyier</strong><br />
huge bundles because you're at Atlassian. And that better have like that fancy blue color around.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, that's probably a good segue into our picks for this episode. In each episode of the front end, happier podcast. We'd love to choose pics of things that we found interesting. Want to share with you all gem you want to start it off?

</p>
<p><strong>Jem Young</strong><br />
Yeah, I have one pick. This one is my valley shell can pick for those from that happy hour regulars. They should know that. Valley silicon is the part of the show where I pick things that are wildly expensive, and they only exist because we here in tech get paid too much money. So today, this one's probably along the lines for Stacy. Stacy. Yura you're a music fan as we Whoa, is that yes, that's correct. Yes. Do you happen to own any turntables for records? I do. Oh, well, you should throw those out. Because my pic is just for you today. So this one is the lens on tech, LP 1250 It is a very nice looking turntable. But what's probably most notable about it is its price tag. How much do you think it is? Without looking for a sell? 800 Yeah, that's,

</p>
<p><strong>Ryan Burgess</strong><br />
I was gonna guess around the 1k mark. Yeah. 1k

</p>
<p><strong>Jem Young</strong><br />
for a turntable be quite a bit. You all are pretty close. So the lens on tech is $60,000. So you're only off by a little bit. Oh, it looks like a turntable. It's it's good looking. 16 Wow. Yeah, that's,

</p>
<p><strong>Chris Coyier</strong><br />
I want to see it. I found a turntable.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. That was absolutely where my head went is like, I have a really good sound system in my Audi. Like, yeah, like, I don't know, like, I can drive that. I don't need the one turntable. That's you don't have speakers on this thing?

</p>
<p><strong>Jem Young</strong><br />
No. I think the one it's limited edition. It's one of 250 and this one was designed by Gianni if she's very, very, very famous. That's why famous but the question is, is that worth $60,000 to you for a turntable?

</p>
<p><strong>Cole Turner</strong><br />
Yeah, no, only if you pass it up and plug it in from the bottom to charge it.

</p>
<p><strong>Ryan Burgess</strong><br />
it over. You can't use it while it's charging.

</p>
<p><strong>Chris Coyier</strong><br />
Amazing. Oh my god, you got to turn it.

</p>
<p><strong>Jem Young</strong><br />
That's great.

</p>
<p><strong>Chris Coyier</strong><br />
I love Why does the price you'd think what I want a $60,000 turntable, but I want it to solve some UX issue. Like help me get the record on and off of it or play two records without me walking over to the dang thing or just can you solve one UX issue with certain things? For that price?

</p>
<p><strong>Jem Young</strong><br />
Yeah, it doesn't even look like a 60 kg turntable. I know that one should be like gaudy, like gold and underglow lighting and yeah

</p>
<p><strong>Ryan Burgess</strong><br />
it does look it I gotta say, you know, aside from the price it looks it looks clean. I like it only 60k

</p>
<p><strong>Jem Young</strong><br />
right now. Is that our that our car, you know? Yeah, so that's my one pick and thank you to one of the front unhappier regulars who sent it to me because this is perfect. It's amazing.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. And you can send more, you know, Valley silicon pics a gem on Twitter. He's always open for them. Yes. All right, Stacey, what do you have for us?

</p>
<p><strong>Stacy London</strong><br />
Sure. I've got one music Peck. Maybe this this particular song would sound amazing on that $60,000 turntable. It's out Line of Fire, featuring Sharon Van Eaton Juniper Elias Jose Gonzalez Sharon Benning, Tobias Winterkorn. It's like a huge lineup of people but it's an it's an old song that's just redone with like, an amazing cast of characters and it's just really, really good song. cue it up. Sweet. Let's

</p>
<p><strong>Ryan Burgess</strong><br />
on call. What do you have for us?

</p>
<p><strong>Cole Turner</strong><br />
I've got two picks today one movie and one shoe. Buckle up because I know hard feelings is hilarious hysterical cringy it is one of the funniest movies I have seen probably in the last decade I would put it on the same level is like super bad. And it's interesting to see Jennifer Lawrence go in that direction in comedy. I my other pick is crocs Ryan hates them. I love them. I wear them to Home Depot. I watch him. Oh, rock out with your crocs out they are the backyard shoe. I will. I will be getting everybody. I know crocs for the next presents. So buckle up your crocs. No.

</p>
<p><strong>Stacy London</strong><br />
Do you know that croc Do you ever watch Idiocracy? Do you ever watch that movie? No, I have it. Watch Idiocracy in my garage.

</p>
<p><strong>Cole Turner</strong><br />
Okay, I'll watch it in my crocs. But like, I have to say I used to be a croc hater until I tried them. I now it's like they're the perfect shoe to go take my dogs for a walk to go out in the backyard. Don't knock it till you try it.

</p>
<p><strong>Ryan Burgess</strong><br />
That is fair. I have not tried it yet. Like I have not tried it. And I do not plan on trying to call please do not find. Chris, what kind of pics do you have to share with our listeners?

</p>
<p><strong>Chris Coyier</strong><br />
Yeah, I was just I just have to look around I think to kind of forgot about it. But there's the like, what was what is what is gem called a Silicon Valley pick or something? You know where else where it's more expensive than it that it needs to be? Perhaps this is not not nearly at that level. But what do you think? What would you pay for? For a mousepad? What do you think? You know, like on average, what's your like? They're free. You just go to a conference and fill your bag

</p>
<p><strong>Cole Turner</strong><br />
like 20 bucks.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I think I'm assuming yours is maybe the like, is it one of the larger ones where it's like mouse pad and keyboard?

</p>
<p><strong>Chris Coyier</strong><br />
It's not that although that can be kind of a cool look. You know, I feel like yeah, see somebody's fancy, you know, where they clearly picked up their office for wants to take a picture of their office and they perfectly center their keyboard? No, but it is humongous. It's the razor Atlas tempered glass gaming mouse mat. And it's like, what I like about it. Oh, even if it was just like a piece of plastic or leather or something. The size of it is just really nice. I didn't realize how annoyed I was with how small mouse pads were. But I also have a desk that can fit it. So if you if you don't that's that makes sense. But after here, I guess I'll send the link in Riverside here. You need it anyway, right? It's just but it's tempered glass, which just makes it super silky smooth. And it's also like, a foot and a half wide. It's at $9 So it's not totally crazy, but it's just minutes. My favorite thing on my desk at the moment. So beautiful. It looks

</p>
<p><strong>Ryan Burgess</strong><br />
good. I gotta say it is a very like nice looking mousepad

</p>
<p><strong>Chris Coyier</strong><br />
it's really no, you won't regret it. I'm

</p>
<p><strong>Cole Turner</strong><br />
surprised it's not RGB lit up, or what was the what's the new color scheme? Okay. LCH

</p>
<p><strong>Chris Coyier</strong><br />
Yeah. But it's it exists in real life. And real life has even more colors than Okay, I'll see. Ah, yes.

</p>
<p><strong>Ryan Burgess</strong><br />
Good point. All right. Well, I like that one, Chris. I've got two picks for us on this episode. One is a snack that everyone needs to just go by. Because as a Canadian, you cannot find ketchup chips in the US. But Doritos right now has a Doritos favorite kept or flavored ketchup chip is so good. I've already gone through a few bags of them. They're delicious. So I highly recommend going and trying those. And if it's temporary, I'm hoping that everyone buys them and loves them and that they just keep making them because they're so good. And then to try and keep on the episode. Chris, you wrote a really great article, I think sums it. I think it was right after render Atlanta after you gave the talk on modern CSS. But there's a really good blog post that Chris put together that goes in even more depth of what we've talked about on this episode. It's called Modern CSS in real life. I will link it in the show notes. It's on Chris coyier.net Some of those animations too on like that we talked about the transitions. You have some really good examples on that that I think are just worth it in itself. So I have a

</p>
<p><strong>Chris Coyier</strong><br />
room to get excited people few trends very.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, your passion through this episode has been great. So I hope people are excited after listening that they're like yes, I need to go use this and try this. You know, even just jump in a code pen and try it like come on. Yeah, like exactly what that's for.

</p>
<p><strong>Chris Coyier</strong><br />
You know, we should also say that they're really progressive and hence enhancement friendly to it's not one of those API's where you're like, Yeah, I'll use that once it's supported. You can. I mean, there's little different approaches, but you can kind of use them now in a way that is no penalty for older browsers. So pretty sweet.

</p>
<p><strong>Ryan Burgess</strong><br />
That is really cool. I mean, I think that's also what I think you mentioned something about in the episode of like, how browsers are always trying to like, think about that, too. And like, you know, that you're not breaking change for some old browser. And I think that that, to me, has been really helpful to see CSS adding these features natively, because they're thinking through that long term. Chris, thank you so much for coming on this episode, I learned so many new insights on CSS, where can people get in touch with you?

</p>
<p><strong>Chris Coyier</strong><br />
I'm old school, I have my name.net Chris coIour. dotnet is my kind of my personal web. That's where that that post is called Modern CSS in real life. So if you find that that's where I'm pointing you to generally, but just kind of an old school Blogger blog about tech and my life and all that crap. And then it points to whatever. Social networks are hot at the time. I don't even know what to link to anymore. It's gotten it's gotten weird out there.

</p>
<p><strong>Ryan Burgess</strong><br />
It has. I mean, every other week, we have some new Twitter replacement, and yet it doesn't yet replace Twitter. So it's been interesting to see that so yeah. Well, thank you so much. Again, it was a pleasure having you for everyone listening. Follow us on Twitter at front end. Ehh you can listen to us at front end happy hour.com really subscribe to us on whatever you like to listen to podcasts on. Any last words.

</p>
<p><strong>Stacy London</strong><br />
CSS is awesome. Not like that stupid meme, but it really is awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
You know what the the new ways of dealing with layout Stacy is that that mug doesn't really work anymore.

</p>
<p><strong>Stacy London</strong><br />
Now cheers. Cheers.

</p>
`;
        return transcript;
    };