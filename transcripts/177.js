module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast in I think it was our one of our recent episodes, probably two or three episodes ago, we were joined by Chris coIour to talk about CSS. And because we haven't really covered CSS that often, and it's a great topic to cover we're diving in again, this time was special guests, Estelle and Eric, Estelle and Eric, can you give us a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages still, I

</p>
<p><strong>Eric Meyer</strong><br />
think you should go first because you already have your right to have a beverage. 

</p>
<p><strong>Estelle Weyl</strong><br />
My name is Estelle, while I am a technical writer, I work on the documentation that is hosted at MDN, which is Mozilla. I mean developer.mozilla.org. But I work for open source collective called Open Web Doc's. So it's OpenWebDocs.org. And we're funded by browsers and individuals to write full-time and write documentation on everything web related, that's open source. So I usually do the CSS, HTML, and things like progressive web apps and accessibility and performance. And my favorite beverage. I like passionfruit martinis and lychee martinis.

</p>
<p><strong>Eric Meyer</strong><br />
Eric. Yeah. Hi. My name is Eric Meyer, kind of a longtime gadfly of the web been doing this web thing since 1993. written some stuff about CSS style, and I co authored a book, CSS, the Definitive Guide, fifth edition. I'm currently a developer advocate for igalia, which is a open source consultancy based in Spain, and is responsible for things like CSS grid implementation in two major browsers and a bunch of other things like that. My favorite Happy Hour drink, I would have to say as a water on the rocks. I'm very square.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Let's also give introductions of today's panelists. Cool. You want to start it off?

</p>
<p><strong>Cole Turner</strong><br />
Hi, everyone. My name is Cole. I'm a software engineer at Netflix,

</p>
<p><strong>Stacy London</strong><br />
Stacy London. I'm a principal front end engineer at Atlassian.

</p>
<p><strong>Augustus Yuan</strong><br />
Hello, I'm Augustus. I'm a software engineer at Twitch.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a engineering manager at Netflix. In each episode of Front End happier podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And what did we decide today's keyword is day to day to tie? Well, let's dive into the episode. I'm curious for everyone's thoughts. We've seen a lot change in CSS probably in the last year, half a year or something like that. It's been great to see so many changes. What's everyone been excited about? So

</p>
<p><strong>Eric Meyer</strong><br />
many things. I think for me, it's I'm going to give it I'm going to assign a tie subgrid in Chrome, or chromium as the case may be. And then the has selector in various engines.

</p>
<p><strong>Estelle Weyl</strong><br />
I think for the general population, it's been grid and Flexbox. But I would have to say :has(), :not(), :is(), :where(), and cascade layers.

</p>
<p><strong>Ryan Burgess</strong><br />
These are all really good ones. I feel like we should expand on all of them. Where to start? Let's start with some of the selectors, like has the stellt. What is what has has, so how does that even work?

</p>
<p><strong>Estelle Weyl</strong><br />
So Eric is actually a better person to talk about this, because I believe, I'll tell you Igalia, where he works, they did the first they didn't implement it in the first browser, but they did the they basically idea and came up with the prototype. So that would actually work because the reason that we never had :has(), or the parent selector, was because of the slowness that the selector would have. So you could, you know, jQuery had has(), I'm so glad we're not drinking with the word has. And you could do that because JavaScript is slow bytes in and of itself, you're adding a framework, you know, that's okay. Because, you know, you know, you're slowing down the browser. But browser vendors can not put something slow into the browser. So every time you have something that's actually released, it's going to be performant. And that's also, as a non sequitur or possibly a sequitur, why I always recommend to never use CSS prefixes, because all of those prefixes that we used to use meant that it wasn't necessarily performant. So if you use a prefix, if you forgot to remove a prefix from a old code base, if you put, you know -webkit-border-radius and something, the only browser that needs -webkit-border-radius is Android, you know, in the two versions, which are still used in some countries, and that is going to slow down their browser. So there's no reason to serve prefixed properties, because they're ridiculously slow. So going back to :has(): the reason :has() was never put into the browser originally is because there was no way of saying okay, this is a parent selector. Then as your DOM changes, how do we quickly or instantly update this? And so I'll let Eric explain how that's done.

</p>
<p><strong>Eric Meyer</strong><br />
Yeah, I mean, this is one of the things that I think most of us don't appreciate is that browser vendors have to render web pages at 60 frames a second are better for the most part. Because if you're going to scroll, you don't want it to be janky. Right? Well, janky is low frame rates, that's what it is. So the same kinds of frame rates that you would expect out of fortnight, or, you know, whatever first person shooter is popular with the kids these days, I don't even know anymore, the same kinds of constraints apply. And so what has is has is a way to say this element has some other element in relationship to it, and we're going to select the element that has the has. So if you say something like a href has, and then in the parentheses, you put IMG, you're saying this, any hyperlink that has an image as a descendant, or you could throw in a little child Combinator, a little, you know, angle bracket, so that it's any hyperlink that has an image as a child, you select the hyperlink, not the image, which is not the way CSS has ever worked before has basically. And that, like Estelle was saying, the the barrier was always browser vendors saying, Sure, we'd know how to look up a DOM chain, right? We know how to look from one element up to another. But being able to do that in a performant way, like, when the DOM might be recalculated, because of scripting, or because of somebody's hover, or whatever. Like we don't, we don't really know how to do that performance really. And then one of the values clients, I owe the people who do Adblock Plus, they basically contracted with a guy to say, Can you do a prototype implementation just to see if it can be made performance? And then, yeah, then things got moved very quickly, once basically, it was shown that yes, this can be done performance, really. And it involves a whole lot of tricks that we I only sort of understand myself, it basically has to do with, it turns out the browser's cache, they have a lot of caches, right, there's a style cache, there's a DOM cache, there's a layout cache, like all this stuff is cached to make everything really fast. And be only Lee at at a value of basically figuring out a way to like, put a little cash flags on things to make it much faster to say, Okay, well, rather than having to like go up in traverse the entire sub DOM of some ancestor element, you can very quickly see, oh, these two are related or oh, they're not related. And that's the other thing about has is that it's not specifically a parent selector. This is what people have asked for, for a long time. It's really an it's, it's an ancestor selector, but it's not even an ancestor selector. It's a relational selector, you can literally set it up. So you say I want to select a div that has an ordered list inside of it. But then you keep going with your selector to say, Okay, if there's a div that has an ordered list inside of it, that and it has a table that comes immediately after it, I want to style that table. So the only style of the table if it immediately comes after a div, where the div has an ordered list inside it. Like you need some really wacky stuff. So yeah, it's it's incredibly powerful. And we're only just beginning to figure out the barest beginnings of what might be possible with it.

</p>
<p><strong>Estelle Weyl</strong><br />
Just a few things to note about that selector. It used to used to accept a forgiving list. And that has been changed to a non-forgiving list. So if there's something invalid, if there's an invalid selector, because it does take a query, it does take a complex complex compound Selector Lists, so you can have comma-separated selectors that are very complex in there. But they all have to be valid. So you can't put you know, pseudo-class that doesn't exist. And you also can't put a pseudo-element. The spec says that there will be some :has() accepting pseudo-elements, but none have been defined. So none of them are valid.

</p>
<p><strong>Ryan Burgess</strong><br />
Interesting. That's good to know. I did not know that part of it. So

</p>
<p><strong>Estelle Weyl</strong><br />
Eric, and I know tons of useless trivia.

</p>
<p><strong>Eric Meyer</strong><br />
We really do. Yeah. So the, I think where most people will probably first US House is in context where they used to have some JavaScript that would add a class somewhere in the DOM tree. That effectively meant there's a thing inside Have this element, but I want to style the element that contains the thing. So like you'll, you know, in frameworks you you're at a class that says, you know, has nav or something like that, because there's a navigation element inside of there. And you can replace those sorts of things, instead of having to do that server side calculation and like stuff, classes in your, in your HTML, just so that you can style some sort of ancestor, you can just do it with a CSS selector now, and it will be much faster.

</p>
<p><strong>Estelle Weyl</strong><br />
So I think that Eric gave you the simplest example of what people are going to be using it for. But you can use it for really complex things. And I think what people will want to use it for is like, let's say there's an error form on the page. But you don't want to style the form, you want to style some other component on the page. So you can do like body:has(form) with an error class active, then you do something, that's the end of the :has() part. And then you just do within that body. So it's selected this body because that matches the body. Does it have this other element and style that other element? Or does that other element also have something then you can style this third thing, and it's just one selector that gets super long? And the specificity could get pretty high? You think? But that's where you use the :where()? Or :is()? I can't remember which one has no specificity?

</p>
<p><strong>Eric Meyer</strong><br />
:where() is the one that has no specificity?

</p>
<p><strong>Estelle Weyl</strong><br />
So you just took everything in a :where(). And it does two things. It removes all the specificity. So you're not making it hugely specific. And also, if there's an error in it. like you put a pseudo-class. You're targeting like some Mozilla feature WebKit feature? Such you know, then it's like, cool. I got it. I'm not going to fail on that.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Eric, I think you had also mentioned another one that's really cool that you're excited about is cascade layers. I'd love to hear more on that one. Well, the

</p>
<p><strong>Eric Meyer</strong><br />
point I was just making actually leads right into this, right? Which is perfect. Yeah, exactly. Where if you're, like doing selector tricks to try to lower specificity or raise specificity or get your specificity in some corner, sort of band, cascade layers will do that. The, you're able to set up your own sort of layers. The way that I present it to people is that we've always had to cascade layers. The important rules are in one layer, and everything else is in the default layer, quote, unquote. And then, I mean, you can get into the whole which way, the layers, the important and the default layers go with respect to is it an author style? Or is it a user style? And is it a user agent style, like he gets more complicated. But with Cascade layers, you can define more layers, you could literally have, besides the default layer, you could have a layer that contains all of the rules for your design system. And another one that has all the rules for the network that you have been told that you have to put on the site, or whatever. And you can define what order those layers go in. So all of the rules in one layer, no matter what their specificity is, they will overrule any rule that's in a lower cascade layer, regardless of its specified unless

</p>
<p><strong>Estelle Weyl</strong><br />
it's important, and unless it's

</p>
<p><strong>Eric Meyer</strong><br />
so right, stop, like we've always said, Don't do important, even more, don't do important. If you're using cascade layers, you should never ever use important. I'm just drawing that line in the sand. I don't. I got nothing.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm happy to hear you say that, Eric. I mean, I feel like we've all heard never use important and anytime I've ever opened up some old legacy CSS that someone has, it drives me nuts. So still we shouldn't be using as important is that the takeaway here,

</p>
<p><strong>Estelle Weyl</strong><br />
I'd like to give an example of when I use cascade layers, I don't know if you all use CodePen, which Chris Coyier, who you had on two weeks ago, runs. So in a CodePen, you can have your CSS, like there's three panels, there's HTML, CSS, and JavaScript. And then in the CSS, basically, I'm always teaching people something. So I want them to see the point of what I'm teaching them. So I want that to be first. But I don't want to like have to worry about the foundations of the page that I'm showing them. So I put all of that in a cascade layer. So that I put in the cascade layer, I say, you know, the basically I call it @cascade, and I named the layer framework. And then I put everything that I want in the page, outside of a cascade aside, have a layer, and then everything that makes the page look the way it does that isn't important to the tutorial I'm teaching is in a layer. And so whatever I'm teaching overrides, even though Using an A element. So the specificity is 001. And I'm overriding, you know, the pound sign my page A (#myPage a), that bootstrap put in. So you can actually take Bootstrap, put it in a cascade layer and override everything you want. Which is unfortunate, because that's how I used to get paid all my big bucks was removing frameworks from

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it is nice. Now it's a little bit easier to stall. So you could still get paid to do it. It just might make it a little bit easier. I

</p>
<p><strong>Estelle Weyl</strong><br />
could tell them it takes me a month. And all I have to do is stick in the cascade later.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, that's this is fair. Yeah. See, like this is, you know, you're just optimizing your time. I like it.

</p>
<p><strong>Eric Meyer</strong><br />
Lawful evil, very nice.

</p>
<p><strong>Ryan Burgess</strong><br />
Estelle, you'd also mentioned grid and Flexbox. Those are great ones that have they've been around for a while and definitely made our lives a bit easier. But let's, let's dive in there. What do you like about grid and Flexbox?

</p>
<p><strong>Estelle Weyl</strong><br />
Like, to me, they're kind of boring, because they've been around and everyone teaches it, so I don't focus on it at all. And I don't even know the names of the properties. Like, I mean, I do, but I don't. Like it's not something I teach. I teach it in 15 minutes, because I'm like, there are 16 videos on this, you don't want to take my time to teach you this, because you can learn this really quickly. But it's, you know, when we were writing CSS, the Definitive Guide, version five, in version four, there was a huge chapter on positioning. And now that chapter is tiny, because you don't need to teach floats anymore. So you still do need to teach floats, because floating is still useful, and important. You can still so it's got to be in there. It's not the basis for building websites, asking

</p>
<p><strong>Cole Turner</strong><br />
as someone who hasn't floated anything in a long time, I just recently returned to UI development. What are some of the use cases you're seeing for floats in 2023,

</p>
<p><strong>Estelle Weyl</strong><br />
you want to float your figure, like you have text, you still want to float the figure within the text. And you still need to know how to break afterwards or not break afterwards. If you ever write a word doc, and you stick an image in it, do you want the text to go behind it in front of it? You know, that's the same thing that you have to do.

</p>
<p><strong>Eric Meyer</strong><br />
Yeah, I mean, that's, that's mostly what it is like, on my website on my blog, my or web.com? What I have figures, they're flooded, most usually, unless they're super huge. And I want them to be full column with whatever. But yeah, like little fingers are floated to the side, and the text flows around them. That's the only thing I use float for anymore. It's a little weird sometimes to realize, oh, yeah, I used to float everything. And now I barely float anything. But when I float things, there are things that should be fluid layout structure. So the layout

</p>
<p><strong>Ryan Burgess</strong><br />
structure floats were always a pain in the ass like, honestly.

</p>
<p><strong>Eric Meyer</strong><br />
But it was, it was really all we had. Because we had clear,

</p>
<p><strong>Augustus Yuan</strong><br />
yeah, kind of crazy. Because yeah, back in the day, like, you know, especially as responsive design started becoming more popular, like floats, felt like the most tangible way of achieving those kind of layout, addressing all those layout issues. And then Flexbox came out. And that was just I was just such a huge game changer, especially for me, I was like, oh my god, this is like incredible.

</p>
<p><strong>Estelle Weyl</strong><br />
The original version of the Flexbox chapter was its own little book. And I spent six weeks trying to explain how Flexbox worked, because we didn't have logical properties. So now that we have logical properties, really easy to explain a night and people can understand it. Before that, it was nearly impossible. Eric, do you want explain the logical properties?

</p>
<p><strong>Eric Meyer</strong><br />
Yeah, I mean, logical properties are things like margin block and margin in line. So we, for 25 years, for generation, literally, we had margin, top margin, left margin, right margin bottom, that sort of things. They were physical directions. But that doesn't play very well with different writing systems, right, as long as you're writing, you know, left to right, top to bottom, top to bottom, left to right, whatever. Those can make sense. But you know, margin left and margin right or padding left and padding right. You already start to run into trouble if you're now need to publish in Arabic or Hebrew, which are right to left. And then if you want to have your designs adapt to let's say, Japanese were oftentimes not always but oftentimes the writing is prime you know, like the inline direction is top to bottom and then the text the block direction runs right to left. So instead of having these physical properties, like you know, padding, left, margin pop, etc. Now we have things like margin block start and padding inline end, right to be able to say I want this padding to be at the ends of line whichever like side of the screen that's on whether it's the you know, quote unquote, top or bottom, or the left or the right doesn't matter, this is what I want over here. And there is not as yet a way to use the shorthand margin, or padding or border properties in a logical way that's been considered by the CSS Working Group. I'm not sure where that discussion stands, because there are so many discussions, it's almost impossible to keep track of them all. Unless literally, you're paid by somebody to do that, like there

</p>
<p><strong>Estelle Weyl</strong><br />
as a full-time job of a few people as a full-time job; not just paid, you know, a few hours, but a full-time job,

</p>
<p><strong>Eric Meyer</strong><br />
right? Yeah, there are a few people out there that like Google, Apple, Microsoft, open web docs, pays, who, you know, like a huge component of their job is just to know what's going on with all of the specs. So yeah, so logical properties. I've actually, I've shifted my, the way that I write things like margins and padding. And I'm not the only one I know, like, Jeremy Keith has talked about this, Chris clear. Some other people, Estelle,

</p>
<p><strong>Estelle Weyl</strong><br />
I asked her to send Miriam Suzanne, and Rachel Andrew as well.

</p>
<p><strong>Eric Meyer</strong><br />
Oh, yeah. Yeah. Miriam. Yeah, Miriam. Absolutely. But where I almost never use the physical directions anymore.

</p>
<p><strong>Estelle Weyl</strong><br />
So when we first wrote Flexbox, those logical properties didn't exist. But Flexbox was kind of the first property that when you change the language to Arabic, or to Hebrew, it went into a right-to-left writing mode. So it would flip it for you. So explaining that was really difficult. And now it's, it's not,

</p>
<p><strong>Eric Meyer</strong><br />
it's less of a less of a challenge, right? Because flex box originally had like justify contents Center, which everyone was like, Oh, my God, we could center things now. But there was also originally justify content, flex end or flex start. Those are just now and and start. But that was where that first sort of got into CSS was that sort of logical direction for everything. And now, there are properties, like Estelle said, Where margin block or you know, border in line starts. So

</p>
<p><strong>Estelle Weyl</strong><br />
the interesting thing about the book we wrote is there's tons and tons of graphics in the book all taken as screenshots. And none of it or all of it rather, is actually code that works because neither Eric nor I have any photoshop skills whatsoever.

</p>
<p><strong>Eric Meyer</strong><br />
 Hey, some Photoshop,

</p>
<p><strong>Estelle Weyl</strong><br />
I know how to hit quit. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
The shortcut key Estelle, or is it you're just closing it?

</p>
<p><strong>Estelle Weyl</strong><br />
turn the computer off. So

</p>
<p><strong>Eric Meyer</strong><br />
Photoshop is your VI? I got it. Okay.

</p>
<p><strong>Augustus Yuan</strong><br />
I vaguely recall reading that y'all use the screenshot sub screenshot tool in Firefox for all your examples and your bank or something like that?

</p>
<p><strong>Eric Meyer</strong><br />
Yes. 90, like 99% of the figures are literally high DPR screenshots taken directly from the console in Firefox, Firefox has, well, it had a console command called screenshot, I think it was called originally. And then they dropped it. And I complain, I was like, This is what I use. Like, I need this. And so it came back actually, is nice. But now let's colon screenshot. I don't know why it has to start with a column. But it does. And I just I roll with it. But yeah, there's when you're on the console, you can do colon screenshot, like dash dash full page, if you want, literally the entire page. If you leave that off, it just takes a picture of the window, you can also do dash test selector, give it a CSS selector, and it will take a picture of the first match to that selector. And then you can set a DPR. So because because I'm capturing for print, I'll do like for XDP.

</p>
<p><strong>Estelle Weyl</strong><br />
And when you all whoever's listening can't see us. But we all just looked at Eric like, Oh, my God, I didn't know that this could do this. So yeah, Eric has more, more console skills than we have vi skills.

</p>
<p><strong>Eric Meyer</strong><br />
I even wrote a blog post or two about this. And like, there's some documentation of it. So if you if you search for Firefox screenshot Meyer web.com, you'll probably find it pretty probably come up pretty high in the results there. And it just talks about, you know, and that was I think I wrote that around the time of the fourth edition, but that's did the same thing for the fifth edition here. There are several 100 figures and I think fewer than half a dozen were done some other way.

</p>
<p><strong>Ryan Burgess</strong><br />
But I love that like it's so it's like demos that you're like, hey, we this is what it looks like. This is exactly what you should be seeing And there's actually

</p>
<p><strong>Estelle Weyl</strong><br />
a repo for all of those.

</p>
<p><strong>Eric Meyer</strong><br />
Yeah, we took all the all the all those files, all the files that were used for these are in a GitHub repository. It's also up on GitHub pages as a live site that you can just click through and like each chapter page just lists all of the figures. And if a figure title is a link, you can click on it, and it'll load up. And that's the thing that I took a screenshot of, basically, and only in a very few cases, like I say, is it either not linked for some reason? Or, you know, that there might there are some that are more interactive than we could show in

</p>
<p><strong>Ryan Burgess</strong><br />
a book. Very cool. I love the like, insights to this to like, just going deep into that. That's very cool. Yeah. Now, we also know how to take screenshots and Firefox, with very low DPI. Yeah.

</p>
<p><strong>Eric Meyer</strong><br />
I mean, part of the reason that I did that, like have been doing that for a while, and that we continue to do it in these additions is that building the figures, out of the stuff that's been written about, sometimes I would discover, oh, I just wrote two pages that we're wrong, because I misunderstood how this one property value works. And once I figured out how it worked was like, Oh, I'm gonna have to go back and rewrite that part. Because that's not how that actually goes. You can you can have that happen. But it was, it was a good sanity check, you know, to say, Okay, this thing I just heard about, I'm gonna, like, I put in code samples. Now I need to prove that they actually work. And if they work, I can take a screenshot. Yeah. So it made it. It was it was a, it was a good way to sort of fact check as the thing was written. And then also, we could just take everything, throw it up on GitHub, and people can see it live. So which is particularly nice. If you are a print connoisseur as I am, I still we haven't been able to convince O'Reilly to print this book in color. And so sometimes is

</p>
<p><strong>Estelle Weyl</strong><br />
almost 1200 pages. So that would be really, really expensive.

</p>
<p><strong>Eric Meyer</strong><br />
Yeah, well, you know, I but I still think they should do it. But in the meantime, if you're like reading about color, and there's an example that refers to a bunch of different hue angles, or whatever, and then there's a figure and you're like, it's all gray. It's like, go see it on the web. And then, and if you're reading it electronically, they're all or at least many of them are linked to the actual life files.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, you heard it too. Stacy's willing to pay for it pay extra for the color version, what you need to do is convince them that Yeah, fine. Do the black and the white one, but we will also have the premium color version. I like this.

</p>
<p><strong>Eric Meyer</strong><br />
The Deluxe, the plan? Yes, yes.

</p>
<p><strong>Estelle Weyl</strong><br />
So if you actually take the book and you put two together, it's the same height as a stair. So you have to buy your copy wild, you have to buy two copies so that you can put ladders on your staircase.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, Estelle, how do you know this?

</p>
<p><strong>Estelle Weyl</strong><br />
Okay, so we moved to San Francisco two years ago, two and a half years ago. And I removed this light bulb from the top of the staircase and put it in the bathroom. And I could never get back to where that light bulb was to replace it, because it was above the staircase. And when I got the book, I put four of them down. So like, two steps, were on this one step, and then two others were on the next step. And then I was able to put my little stepladder and change the light bulb.

</p>
<p><strong>Stacy London</strong><br />
I'm glad you're still with us.

</p>
<p><strong>Estelle Weyl</strong><br />
The reason that the sound is so loud whenever a fire truck goes by is because we removed the window right next to me. And then the window broke. So there's just basically plywood so you can hear all the sound. And you can also hear my dog crying for food. He's only been fed 10 times today. So he really needs to shut up soon. So when I going to put the window in from outside, I am going to put eight books, I need eight books because I actually have to go over two stairs rather than just one step.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh man, so at least you're close to a hospital.

</p>
<p><strong>Cole Turner</strong><br />
That means you can no longer change the contents of the books or like CSS cannot grow any further no more new data types. Because we need those books to be the stairs that guide us through CSS.

</p>
<p><strong>Estelle Weyl</strong><br />
I wrote a book many years ago called Mobile HTML5. And it's about how to write mobile websites basically how to create a progressive web app. But using SQL, Web SQL, and App Cache, which we all know is a douche. Yes. So I have tons of those books and I can't give them away because They don't want anyone to use the content. And you put six together. And it's the same as

</p>
<p><strong>Ryan Burgess</strong><br />
Estelle just needs her own episode of a podcast where it's like how to make steps with a step. Alright, so we've covered some pretty interesting additions to CSS. I'm curious, what are some things that are still missing for both of you? Like, there's definitely things that are still out there that would make our lives easier. And I would love to hear your thoughts on that.

</p>
<p><strong>Eric Meyer</strong><br />
I would actually love to hear from the other people in the room, what they feel is missing from CSS, like, what is it that they keep running into? And then maybe we can tell you that it already exists? Or we can say, oh, yeah, but that's still missing.

</p>
<p><strong>Stacy London</strong><br />
I mean, on the episode with Chris, I, like I mentioned, like, you know, a really easily styleable select component. He's like, it already exists. I'm like, Yes, but it's not available in all the browsers yet some eagerly awaiting for it to to be more like mainstream, but that one has been huge, because it just the number, the amount of JavaScript that's been written over the years to achieve that has is monstrous, like monstrous amounts of JavaScript.

</p>
<p><strong>Estelle Weyl</strong><br />
Can I add something to that? So the issue with datalist, I don't know if you know what a datalist is, you can basically create an input and make it drop down like a select that is styled in the browser, and there's no way to overwrite that styling. So be very careful when you use a datalist because it's actually not fully accessible. Because you can grow the font for the whole, you can zoom in, but that font will stay the same. Which brings us to shadow DOMs.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, let's hear it, it's still what's what's the shadow. So

</p>
<p><strong>Estelle Weyl</strong><br />
when you create a custom element, basically all the styles you put, when you create a custom element, the element, the element is, just like my-super-button, it has to have a dash in the name of the custom element. If it doesn't have a dash in the name of the custom element, when you use the :defined pseudo-class, the selector for that element will automatically be defined. So if you do like myButton with no dash, it'll say it's defined even though you haven't defined it yet. If you do my-dash-button, then it will wait till you actually register the custom element for it to be defined. So. So that's really important for that pseudo-class. So anyway, once you create a pseudo-element, I did a tutorial for web.dev/learn/HTML, there's a thing on templates and slots, and I created a custom element that is actually a five-star rating thing. So it uses basically no JavaScript for it to work itself. So you can rate something one to five. And that works without any JavaScript, but you still have to register the elements so that you have a custom element called Star dash rating. So when I create this element called Star-rating, all I have to do is put star-rating into my HTML, it's defined, and it will have all the components inside that create that which is five input elements that are made to look like stars. And when you select like the fourth one, then all the one through four turn orange, and the fifth one turns white. When you're hovering over them, they're all gray or white. So it completely works without any JavaScript, but doesn't do anything. But when you register it, it becomes defined. And then all of those buttons, those inputs are in a Shadow DOM. So there's basically a barrier kind of like there's the Brain-Body barrier, where you're like, if you do something like you know, like, if you have an illness in your body, it doesn't go through the brain, because you're that barrier. There's kind of a barrier between the regular light DOM and the Shadow DOM. You can pass through it with certain selectors. There's the ::part() pseudo-element. There's the :slotted pseudo-class, I think, or pseudo-element. And then there's the :host() and :host-context. So from inside the Shadow DOM, so just stepping back. So if I styled a radio button inside my custom element, that radio button is only styled there, I don't have to worry about the specificity because it won't go through to the page and no styling of the inputs, the radio buttons from the page will go into my Shadow DOM or my custom element. So the custom element, I can say, you know, I called it star-dash-rating, I can say you know, star-dash-rating rating, and I can float it to the right or to the left. So here we are floating. You see, you can need to float that start star rating. You know I can my regular CSS will hit that element but it won't hit anything inside it. So if I do my rating, and I do input type, radio, you It's not going to reach anything. But if so, you can go through that that body-brain barrier, which is the light DOM or the regular DOM, into the Shadow DOM, with certain pseudo-classes. So there's the slot element. So you have a template element. And inside that you have a slot and you can write whatever HTML. So from the outside, you can style the slot. And from inside, you can say, hey, the host, it's a pseudo-class, the host, you can style like and say float it to the right. So when someone puts a star rating, you can say, always float the star rating to the right. I don't actually know if the specificity from inside the element, I think that will have lower specificity. I think that will be like a user agent, in terms of the user will always the author will always override. But I would have to double-check that. Because I can only keep you up to a certain level.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I think you did a great, great job explaining it. So like it's not an easy one to necessarily explain. And so I think you've done a very good job of it

</p>
<p><strong>Estelle Weyl</strong><br />
without any diagrams. Okay, where did I get wrong? Yeah.

</p>
<p><strong>Eric Meyer</strong><br />
So what else is missing?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, one that I isn't missing any more. But one that I was very, very excited about was even just simply having nesting in CSS, that was one that like having Sass less all that just being able to do that, once you start writing that way, it's like, it's really hard to go back and just write CSS. So that was one thing that I've been very happy about. It's to me, it's pretty simple. But, you know, it has brought me a lot more joy if I'm having to write CSS. So it's not necessarily wanting something new. But that is something that I'm excited about. Well,

</p>
<p><strong>Eric Meyer</strong><br />
that's pretty new.

</p>
<p><strong>Augustus Yuan</strong><br />
It is yeah,

</p>
<p><strong>Eric Meyer</strong><br />
really. So. And not it's not 100% browser, it's

</p>
<p><strong>Ryan Burgess</strong><br />
it's not I think it's still missing from I can't remember, I think it was one or two browsers are still not supported it. So it's not like you can really use it. But what is common? Yes,

</p>
<p><strong>Estelle Weyl</strong><br />
so interOP 2023. Basically, all the browsers have decided, I think that's part of interOP 2023, is it not?

</p>
<p><strong>Eric Meyer</strong><br />
I think it may not have made the cut, because at the time that the interrupt 2023 list had to be determined. It was still in flux, like what the syntax was gonna be. And, but I'm not 100% on that, because, you know, 2023 is like 26 topic areas. So that could have ended up being one of them. But if it's not in 2023, I would imagine that it probably will make 21

</p>
<p><strong>Estelle Weyl</strong><br />
issue with nesting that I definitely saw a lot with, with Sass and Less is specificity. So people would just basically, nest and nest and nest and then nothing worked. And they didn't know how to write CSS selectors. So they just put a pound sign my page (#myPage) in front of it, and then nothing could override from any other. You know, that's where cascade layers comes in. But don't force yourself to need cascade layers by nesting things 27 deep. But now, at least, if you nest 27 deep, you can just stick it in cascade layer and say forget about it.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, there's always that unwritten rule I think even in Lesson SAS to only go three and that was it. Like stop there. You shouldn't have to go any further. I'm I've definitely seen people go very far. Way too deep on it. But I think for the most part, you shouldn't need to

</p>
<p><strong>Estelle Weyl</strong><br />
I've worked with too many people that did not get the memo.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it wasn't really it was like that unwritten memo that people definitely didn't

</p>
<p><strong>Estelle Weyl</strong><br />
I read. I wrote the memo many times every time I took a job and like, here's my memo.

</p>
<p><strong>Cole Turner</strong><br />
Okay, who else? I feel like for me, I I'm going to be totally wrong about this. But that plus tailwind, CSS makes me believe that there is some need to transpose or copy styles, multiple bulk of them and not use selectors and not use specificity. And I know that sounds gross, and that goes against everything about CSS. But when I look at what tailwind is doing or what even I see with a lot of CSS variables. There's been many times where I just make the specificity worse because I want to copy these bulk styles and then when you do that you have to unset or reset and so I just don't know I don't know what's right anymore.

</p>
<p><strong>Estelle Weyl</strong><br />
Data Type. So to me tell when nothing personal and I'm going to piss off half of the React developers in the world the

</p>
<p><strong>Ryan Burgess</strong><br />
minute it comes up still the minute the word tailwind comes up you're pissing somebody off.

</p>
<p><strong>Estelle Weyl</strong><br />
I mean to me to when it's when you fart

I love puns. It's not a pun. It's literally in Shakespeare. They're like tail winds. And that's what they're referring. When I'm offered an opportunity to speak at a conference and they say, you know, like, come speak at a conference. And therefore I don't have to go through the selection process. I always speak about selectors, because what UI engineers don't understand is CSS selectors, specificity, and the cascade, and inheritance. And you can select any element. I basically, when I worked at visa, I rewrote their application that was five or six megabytes in less than 1000 lines of JavaScript, HTML and CSS. Because they weren't, they weren't adding like they had Bootstrap. They had react, they had something called Metro, which was internal, they had mustache, they had all of the things for a form. I used to work at William Sonoma. And I was no longer needed when they change to tailwind because they don't need CSS anymore. And I'm like, you don't need a CSS expert, you're using tailwind to write CSS, you still need to understand CSS. But if you put so with the Shadow DOM that we talked about earlier, you can basically style your web component, and that CSS is encapsulated. It's into that tiny component. And so you can always you know exactly what style that is, you don't need to put tell when you just need to put four lines of CSS inside your component. And you can do that with a style element. I also see tons of people writing the styles with JavaScript. Why? Like, it's shorter to just write the CSS and you write a selector and it matches and then if someone changes the element, you just put a comma, button (, button) or you know, a comma input type equals submit (, button[type=submit]), whatever, you just add a selector. But the selectors can select anything on the page with including parents, and the sibling, four times over, that has the same parent or that doesn't have the same parent. I teach people how to write an American flag, like here's a table, it has like 40 cells or something like that, and 13 rows. And if you start I teach it by starting at the end, I'm going to style it into an American flag by starting at the end. So just counting every odd row starting from the end, make it red than every every cell starting from the fifth row from the bottom and the seventh row from the right, make that blue. And then every cell in that area, put a star in it, every odd one move at 50% to the right. And there you have an American flag with 48 stars, but who's counting. But the thing is like, selectors can actually say start from the end or start from the beginning. Do every odd to every fifth, do every fifth except for every you know if it's divisible by 15. You can do anything with the selector just use CSS for what it's known for, which is the cascade. When you're using tailwind, nothing is cascading you're basically having to define everything over and over and over and over again. And since most of us learn how to write code by viewing source, you can't view the source of your of tailwind. It's basically it's written by people who is used mostly by people who haven't taken the time to learn CSS. And they say, I don't want to learn CSS because it's so easy. Like it's not a real programming language. And the fact is, it's actually not that difficult, if you try but you have to put the effort in. And a lot of people aren't putting the effort in because, you know, it's, you know, not to get political, but it's seen as a feminine domain versus JavaScript is seen as a masculine domain. And so it's disrespected. And yeah, I went there. Yeah, that's a fair

</p>
<p><strong>Ryan Burgess</strong><br />
datatype. Augustus maybe a good segue is what what's missing for you in CSS?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, yes. So for me, I think cascade layers solves this problem. But there's, there's a great place to check it. It's nothing like specific about CSS. But you know, especially like when you work in like really large code bases, and every team has their own. We'll just be honest, even though CSS is a language, everybody has their own way of writing their own CSS and I feel like as time has gone on, you know, a lot of companies build their own design systems. They try to align themselves and they have they ship all these components with predefined styles, but especially They're working in a massive codebase like, and there's just like, all these ways that stats can kind of conflict. And I'm really excited to see like how design systems kind of change with Cascade layers and stuff like that. That that was definitely a problem that's like, you know, I don't have as much where I work now, but it's definitely been something that I've run into before. I'd love to hear. So in Eric, or anyone's thoughts,

</p>
<p><strong>Estelle Weyl</strong><br />
I think variables have also helped with that a lot. So if you look at these different code bases that used to exist, like Facebook famously had, what, 54 blues. I worked at Survey Monkey, I know it has a different name now, I don't remember what the name is, but when I started working there, they have like 20+ greens. And so the designer would always give me a new green. And so we created a pattern library. So it wasn't custom elements, it was just a pattern library was like, and every green had a name. And, or every color had a name. And I'm like, what? So every time he gave me a color, I'm like, What is the name, so let's have the purpose of this color. So by doing custom variables, they can just say this is our business blue. And then you define business blue once, you define business blue being 90%, opaque, or, you know, adding 20% Gray, so you have two shades of it. But it's when you change the blue, the whole site changes. So if you're having, like theming, you can go from pink to blue, and so on. So I think what you were talking about is actually really helped by custom variables.

</p>
<p><strong>Augustus Yuan</strong><br />
That's super true. Yeah, actually, when you're talking about CSS variables, I was thinking about theming, dark theming and light themes, when especially like, I don't know, even what caused it, like dark themes just like blew up in popularity, or something like that, like, does anyone know the origin of this like, like, all of a sudden everyone's doing dark themes? I was like, sounds good to me.

</p>
<p><strong>Estelle Weyl</strong><br />
I think dark themes could have been once a preference and also an accessibility issue. So

</p>
<p><strong>Eric Meyer</strong><br />
they are sometimes that's true. Yeah, yes, variable. Yes, CSS variables, custom properties technically help with that sort of thing. And cascade layers will also help, like, keep things straight, but they will only help. Because what you're really describing are organizational problems. They're Human problems. They're not technical problems, right. And CSS variables, cascade layers, you know, whatever else nesting, right, those can be useful tools in the same way that a pattern library or a design system is a useful tool. But those are really just to help every like to help the organization, everyone in the organization get on the same page. And that's, I mean, that's something that CSS or JavaScript or any programming language is never actually going to fix. It can only help you. And that's, you know, understanding how to use those tools in order to make those organizational problems easier to solve is really important. And that's why understanding where custom properties fit in to the like CSS, like technically how they work and how cascade layers operate, will be important. But they'll they'll really only be useful in those scenarios. And let if the, you know, there used to create cascade layers, that actually makes sense organizationally, right. So if you're going to, like have all of your colors in one layer, because you want to be able to override them with the default, the default style layer at any point, like that's one way to go about it might be the right way for some situations, and in other situations, it might be a complete disaster. Right. So that is, that is the one thing that worry doesn't worry me just every now and again, to get sort of a little tickle in the back of my head like, yeah, these are cool tools. But sometimes I feel like people think, oh, with that added to CSS, my organization problems will go away. Like now, you're still going to have to talk to people. That's a really important skill. It turns out that the quote unquote soft skills are not soft. They're actually some of the hardest skills and they're not soft skills, their core skills.

</p>
<p><strong>Estelle Weyl</strong><br />
Cheers. I actually went to a talk at an event apart where they were talking about component libraries. And I can't remember who the speaker was, what his name was. But um, what he said that was a very interesting thing is if you're going to build a component library and you want to convince the powers that be the teams to use your component library, do not start with a button. Because the button, there's like 400 different renditions of the button, you have, you know, three hover states, the active state, whether it's in the header, whether it's small, whether it's large, whether it's the main call to action, the second call to action, do something that a team actually needs, such as a map. So that's reusable. No one wants to design it the second time, it has functionality, and it's really helpful. So basically, the reason I bring this up now is because my master's degree is in health and social behavior. And one of the things that's really helpful in web development is social behavior. So it's basically figuring out a way that you can communicate with people in a way that they'll actually absorb what you're trying to say, and be on your team. So if you're doing a button, you're going to have so many different opinions, and so many people aren't going to be passionate about it. But if you're doing, say, a map, you're going to be like, Yay, it works. Thank you for doing it for me. We're going to implement this right away. What else do you have for me? So with all things, it's figuring out a way to communicate with people like saying don't use important to someone who's doesn't know CSS that well and uses it as a crutch. That's not gonna get through to them. I know that from experience, I haven't figured out how to get through to them. I used to bake cookies for people. But now I just don't see people in real life and I also went gluten-free.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, maybe maybe that's something in the future just to remove important we don't want it anymore. And that's you know, that could be it. That's probably a good segue into us diving into pics. In each episode of the front unhappier podcasts. We like to choose pics of things that may be related to the topic may not be but just things that we want to share with all of you listening. All you want to start it off. Sure.

</p>
<p><strong>Cole Turner</strong><br />
I have two picks today, and it follows one of my earlier picks. If you love to crocs, you're going to love dog crocs. They're called a wag. boilies No. And, you know, the thing is, Ryan sent these to me, and I have to get them for my dog. Um, I haven't ordered them yet. Because you have to like size your dog's feet or whatever. But they're just like, the regular crocs, but for your dog. And that's the thing is like, open toed shoes, or semi open toed shoes for dogs is actually super important. But we're not going to get into that in my second pick, because I have a lot of adult money. I bought a ginormous inflatable green dinosaur yard summer sprinkler, because I got a pool for my place this summer. And I you know, it's just not complete without a giant dinosaur leaning and spraying water all over. And those are my two picks.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Stacy, what do you have for us,

</p>
<p><strong>Stacy London</strong><br />
I've got three picks. My first two picks are Eric and Estelle humans I'm there are my picks. We I think you both have talked about, you know, being in this industry for a very long time. And I have as well as this, like you're 23 for me, but professionally, but before that I was like making web pages in the late 90s. And I've learned immense amounts of things from you both the breadth of knowledge and the depth of knowledge that you have shared with the community, through your books and your talks and being constant advocates for all sorts of great things, buy their books, read them. Don't use them for standing on stairs and changing light balls made them there are a wealth of knowledge. So what an honor to be able to talk to you in this podcast and say thank you in sort of person or zoom or you know, over virtual way, but But thank you,

</p>
<p><strong>Eric Meyer</strong><br />
thank you very much.

</p>
<p><strong>Stacy London</strong><br />
And I said I had three picks. The third pick is just some this is some music as as per usual. It's just a max Cooper song just released called vertebrae of forgotten places. It's a very big departure from his normal sound kind of drum and Basie going back to some of I think maybe his roots. It's a good song to write some code to

</p>
<p><strong>Ryan Burgess</strong><br />
awesome Augustus. What do you have? Hello,

</p>
<p><strong>Augustus Yuan</strong><br />
I have only one pick today, but that's okay, because it's a great pick. i My pick is this new chromium based browser called Arc? It's, as I said, chromium based, you know, and okay, I'll be honest, I'm not the type As a person who likes to add more browsers to the wheel of things we have to now test for, or whatever. But I think it's really cool because this browser is really trying to play around with different ways of organizing, like how tabs where the vendor has a more slack, kind of feel where everything's on the side nav, and it comes with a lot of ways to configure the webpage. I think it just does some, like injecting CSS and makes it very user friendly for the user to just easily do that. I just thought it was a really cool take on what, you know, internet browsing, how it could look or how it could change in the future.

</p>
<p><strong>Ryan Burgess</strong><br />
So right on, Eric, what do you have for us?

</p>
<p><strong>Eric Meyer</strong><br />
Ah, okay, I'm gonna go with three things. The first is, for anyone who's looking for a web performance job perf work.com, recently launched. And that has, basically, it's a web performance job board that has a sauna, and Meyer, for those who know what Meyer is MathWorks Walmart have posted on there a bunch of other people as well. So that's my first pick. My second pick, is that I just found out about this today. Matt Marquesses. JavaScript for web designers is now available for free, as a complete book, from a book apart, it's at JavaScript for web designers dot a book, a book a party.com, excuse me, JavaScript. For web designers. There's we're just separated by hyphens. But I'll get the link in the show notes. But yeah, it's the entire book is available online for free, you can buy a copy if you want to put it on your shelf. But that's there. And it's a it's a, it's a good book. And then the third one is actually going to lead into a sell, because my third pick is a sales cycle tracker PWA. And I'm going to let her explain it.

</p>
<p><strong>Estelle Weyl</strong><br />
Yes. Okay. So we had to do a tutorial for how to build progressive web apps. And so we decided to do a useful app, and it is a menstrual cycle tracker. So if you want to learn how to do progressive web apps, you can create a web app that has complete privacy and security since you actually write the code. And then you can run it on any device that you have, and then delete the code base, and you still have a website that works as an application. So one of the things I've been doing at Open Web Docs, is what I call micro-benevolences instead of micro aggressions. And the cycle tracker was one of them and making culturally diverse names and code examples was another. So before I say my picks, I just want to point out two things. If I Google search or Google search, I BING searched in Edge for the Ark browser. And there was a huge banner says, like, promoted by Microsoft, there's no need to download a new web browser. And I've never seen like larger fonts on an app.

</p>
<p><strong>Ryan Burgess</strong><br />
That's amazing.

</p>
<p><strong>Eric Meyer</strong><br />
That's the best. And then

</p>
<p><strong>Estelle Weyl</strong><br />
for the WAG where we actually bought for my dog's 20th birthday last year, we bought her shoes because the pads get thinner when you get older. It did not work. She did not want to wear them, but it was the cutest video ever. So you can actually buy dog shoes for $5 for a set of four. And these are 50 So I'm not and she didn't wear those so I'm not gonna I'm not gonna splurge on on crocs, but they're adorable. My pick is gluten free Oreo cookies. So if you like Oreo cookies, the gluten free cookies are to die for. And if you don't like Oreo cookies, well don't try the gluten free ones because you'll actually start liking Oreo cookies and then eat the whole bag when you have the munchies. But it's like 10 times better than regular Oreos and no one knows this. But maybe if enough people find out they'll have gluten free Oreo cookie ice cream, which is also fantastic. I make my own ice cream and it's a fantastic

</p>
<p><strong>Ryan Burgess</strong><br />
Stella have had the cookies and I was surprised like I felt like maybe I need to almost taste test them beside each other but when I ate it I don't think I would have been able to tell you that it was gluten free like I was like wow this just a normal Oreo like

</p>
<p><strong>Estelle Weyl</strong><br />
oh, it tastes better it actually

</p>
<p><strong>Ryan Burgess</strong><br />
okay, I need to go back and try these again. So all right, like Oreo cookies

</p>
<p><strong>Estelle Weyl</strong><br />
don't have flavor. Gluten Free Oreo cookies. Tastes like chocolate cookies,

</p>
<p><strong>Ryan Burgess</strong><br />
man. Now I need to go back and try this. Alright, that's that's on my list now. All right. I only have one pick for this episode. It's actually going to help Cole blow up his anus or that he purchased I've been finding myself. I mean, I've kids small kids. You're always blowing up various things. And so I found a air inflator. I've had it Other ones, but this DeWalt makes one, it's a little more expensive than then some of their other ones that I've tried. But what I like about it is it is fast, it blows up things very fast. And so, you know, when your kids are like, hey, we need this inflated, you could do that very fast. If it's that inflatable pool or giant dinosaur, or in my case, we have a giant unicorn. And it is a great purchase so far. So Estelle and Eric, thank you so much for joining us on the site. It was a pleasure datatype as always, cheers to

</p>
<p><strong>Eric Meyer</strong><br />
thanks, it was great being here. Thank

</p>
<p><strong>Estelle Weyl</strong><br />
you for happiness, Stacy's

</p>
<p><strong>Ryan Burgess</strong><br />
worded it perfectly. Like we are big fans of yours. And you know, it's, it's been awesome to have you on and just be thankful for all the amazing content that you continually put out there. So we appreciate that. Where can people get in touch with you if they want to learn more other than obviously buying your books and looking up the tons of content online? Eric, where can people get in touch with you?

</p>
<p><strong>Eric Meyer</strong><br />
My website, Meyer web.com. So M EY, er web.com. And then, in the footer of pages on that site, there's what I call my identity archipelago that has links to Macedon and GitHub and Flickr, although I haven't posted there in like six years. But stuff like that. So really, you can find me as my or web almost anywhere that I actually am. But the the Meyer web.com is really the place to go.

</p>
<p><strong>Ryan Burgess</strong><br />
That's still where can people get in touch.

</p>
<p><strong>Estelle Weyl</strong><br />
I used to blog at standardista.com. And I used to do a lot of browser compatibility data. And now since canIUse it so much better. My website now says future home and Estelle Weyl so that's not the best place. So my name is Estelle, and you can find me online by looking at estelle and then CSS or anything else web related. But it's estelle.github.io or github.com/estelle has my contact information. So all of my presentations are Estelle.github.io. And all of my contact information is at github.com/estelle or through open web docs, which is OpenWebDocs.org

</p>
<p><strong>Ryan Burgess</strong><br />
Right on well, and thank you all for listening to our episode. You can really listen to us on whatever you like to listen to podcasts on make sure to subscribe. You can follow us on Twitter at  <a href="https://twitter.com/frontendhh">@frontendhh</a> I guess should I be saying x I don't think I can do that.

</p>
<p><strong>Estelle Weyl</strong><br />
So say Mastodon.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, anything other point, and blue sky all the things but yes, front end. Ah ah, you can follow us there. Find us at front end happy hour.com Any last words?

</p>
<p><strong>Eric Meyer</strong><br />
That sounded ominous is

</p>
`;
        return transcript;
    };
