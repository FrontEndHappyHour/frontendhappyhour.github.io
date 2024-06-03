module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast, we are joined by two special guests who talked to us about web components and how their team leverages them. I'd like to welcome Ravi and Erick is great having you both join us. Robin. Eric, can you give us brief introduction of who you are, what you do and what your favorite happier beverages?


<p><strong>Ravi Srinivas</strong><br />
Hi, I'm Ravi. I'm an engineering manager on the ads personalization team at Netflix. We are essentially on a team that helps the global scalable advertising. Because Netflix has a lot of marketing interest. We spend a lot of money behind it. So we leverage technology a little bit uniquely to make sure that our ads work well. And they're scalable and been able to ship a lot of ads very quickly and efficiently. Awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
Erick, how about yourself?

</p>
<p><strong>Erick Purino</strong><br />
Yeah, my name is Erick. I'm a UI engineer on the ad tech team. My favorite beverage is long tea. Yeah, and I hope Bo work on the web components that we use in all our digital display ads.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. So you are using Web Components quite a bit. We have great guests for this. Before we get started. Let's go around the table and give introduction of today's panelists. Jamie warm start.

</p>
<p><strong>Jem Young</strong><br />
Jem young Senior Software Engineer at Netflix.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm Ryan anklam. Making get a another triumphant return to the podcast. I'm a senior software engineer here at Netflix as well.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcasts. We like to choose a keyword that if it's mentioned at all, in the podcast, we will all take a drink. What did we decide today's keyword is reusable, reusable. Since web components are very reusable, this could be a messy episode. But if we say the word we will all take a drink. Alright, let's get started. Before we really dive too deep into web components, what are web components?

</p>
<p><strong>Erick Purino</strong><br />
Do you want to take this one either?

</p>
<p><strong>Ryan Burgess</strong><br />
Are they reusable?

</p>
<p><strong>Erick Purino</strong><br />
I have to say to that question, definitely. So hence why we use Web Components. Basically, they're from my perspective, they're just basic JavaScript that enable us to be reused many places using standard HTML tags.

</p>
<p><strong>Ryan Burgess</strong><br />
Right? Because that's a big appeal to is that you're actually just mainly using HTML at them for the most part. Exactly, exactly. Obviously, your team is leveraging them. Ravi, I think you had mentioned focusing on for ads, and then that's what a lot of the benefits are. But I'm really interested, like, what are some of the things that kind of drove your team to using them?

</p>
<p><strong>Ravi Srinivas</strong><br />
Yeah. So to answer that, I'll first give a brief background on how ads were built for Netflix before. Earlier, we'd work with a lot of third party agencies, they'll have their own proprietary ways of doing things. And they'll build these ads for us. Every ad is roughly a website that's branded for Netflix, if you look at it, there's a lot of commonalities across all of them. But there are siloed in locked within each and every agency. So one of our key motivators was, how do we get this work that's being done in a bunch of different places to be done in a unified centralized way. That meant we started with, Okay, do we have a central repo? Do we have people like pull from that repo in shared a lot of code, but that was not clean. And the modularity and reusability of web components is basically,

</p>
<p><strong>Ryan Burgess</strong><br />
I like that you said, they're basically like a webpage on themself, and that they have no way of talking each other because I can just see the hell that you'd have to deal with trying to update something as simple as like a small text change or something across all the different places. And so that makes a lot of sense for something like web components being leveraged, right?

</p>
<p><strong>Erick Purino</strong><br />
And don't forget that we're making these ads for global consumption. Right? So things like that one small change. Yeah, how many times we'd have to redo that preview.

</p>
<p><strong>Ryan Burgess</strong><br />
And also localization. On that side, too, is that if you're making that change, it's not only going to be a change across all one language, it's multiple languages across different countries.

</p>
<p><strong>Jem Young</strong><br />
23 ads, could you clarify like, what sort of ads are we talking?

</p>
<p><strong>Ravi Srinivas</strong><br />
So go to New York Times, CNN, anywhere on the web, all of your web pages, they load dynamic display ads there, as I mentioned, just html5 bundles, which are served by double click, which is Google's proprietary ad server, there are other servers as well. But we use double click a whole lot because it's got a global scale that we really like.

</p>
<p><strong>Jem Young</strong><br />
Okay, so their ads for shows and things. Yes, that's for sure.

</p>
<p><strong>Ryan Anklam</strong><br />
So what kind of browser compatibility issues do you guys run into I mean, a web components It's supported in some of the older browsers broadly. So how do you guys deal with that?

</p>
<p><strong>Erick Purino</strong><br />
So for that, we have to have a polyfill to enable that support. Luckily, the polyfill that we use is very small. It, it comes in at around 5k. Five kilobytes, sorry. And that's basically your framework, because that enables blocks to custom components or custom elements. And then we get that reusability across all our ads. That's

</p>
<p><strong>Ryan Burgess</strong><br />
pretty impressive, actually, for how small that polyfill is. That's, like, really powerful.

</p>
<p><strong>Erick Purino</strong><br />
Exactly. And one of our key wishes is that all browsers would support Yes, because it's very basic. And again, it's just JavaScript in the end. So that's how we get around that. And we do extensive testing with browser stock across the different browsers as well as devices because we need to support and our baseline is IE 10. That's our lowest.

</p>
<p><strong>Ryan Burgess</strong><br />
Which is like becoming fairly low. So that's well done. Oh, that's interesting. So do you ship the polyfill to all browsers? Are you trying to avoid something like the latest version of Chrome? Does it get the polyfill? with it? Are you able to smartly not ship

</p>
<p><strong>Erick Purino</strong><br />
that? For the time being we ship it consistently across all browsers, but we will get to a point where we will selectively only load the polyfill for browsers that don't support custom elements. And since it's small enough at 5k, we included in all all the digital ads, because it's like an HTML page. That's where the required scripts that we have. Okay,

</p>
<p><strong>Ryan Burgess</strong><br />
that makes sense. And also you're on ads, I'm assuming you're limited to size to so that five kilobytes could be expensive.

</p>
<p><strong>Erick Purino</strong><br />
Exactly. We've had that issue before where the file size for us, Ravi mentioned, double click, I think the limit is something like 500 kilobytes on initial load. So we have to be well within that.

</p>
<p><strong>Ryan Anklam</strong><br />
Expand a bit on what's a custom element as well, you said custom elements. But I don't think we actually touched on what a custom element actually is.

</p>
<p><strong>Ravi Srinivas</strong><br />
Yeah, so custom element is, whatever you want it to be. So it's an HTML tag that you basically come up with, if you want to bring back the blinking marquees. You can now do that yourself. Even if the browser's deprecated and don't support that, you get to define a tag. And by plugging into like the lifecycle events that the components spec defines, you're able to come up with HTML tags, and figure out how they behave and what they load in what the sort of representation is going

</p>
<p><strong>Ryan Burgess</strong><br />
to be interesting, please don't bring back the blink tag. I love that you

</p>
<p><strong>Ryan Anklam</strong><br />
have the option. So one of the important parts of the web component spec, I think there's probably a little bit more to it than just custom elements.

</p>
<p><strong>Ravi Srinivas</strong><br />
Right? We use custom elements a whole lot. So that's why I lead with that. Yeah, there is the other super interesting and exciting piece, which is the Shadow DOM. I think a lot of frameworks have tried to do it in one way or the other. But the cool thing about Shadow DOM is it's every browser supporting it natively. So you get the purest possible performance, it works very well across all browsers, and you're going to get the best in class. That's the other part which gets people excited. Besides that, there's the other portion that we're starting to look into the HTML templates.

</p>
<p><strong>Erick Purino</strong><br />
Because at the moment, when we have our custom elements, we're writing to the DOM with pure JavaScript creating, creating the DOM. Eventually, we'd like to move that just having the templates define what the structure will look like. We just have the JavaScript handled the behavior of the component,

</p>
<p><strong>Ryan Burgess</strong><br />
right. And it's still taking advantage of the Shadow DOM to at that point, which is very nice. So you still get that performance. But you have a little more control on what the HTML markup will come out. Let's right. That's right. So I'm glad that the Shadow DOM got brought up, because that is a big important thing. And I'm sure with ads, especially performance matters, performance is very important. Was that one of the key factors of why Web Components was chosen? Yeah,

</p>
<p><strong>Ravi Srinivas</strong><br />
I think if you look at it, the first thing we looked at was, we didn't want to reinvent the wheel. We looked at various client side frameworks looked at what they did, when you load one of them in your dead files, wait is just too big for us to load them inside node? So the idea is, okay, how do we get the best of what they offered, without having to go like do a bunch of plumbing ourselves, which is why web components were immediately a great fit for us.

</p>
<p><strong>Ryan Burgess</strong><br />
That makes sense to we use react on on our site at Netflix and React is great, and you've got the virtual DOM, and then that's really helpful. But if you were just to ship react with yours, you're already paying a pretty big cost. Because what is what is react Jesup 30k. As that is an old one that doesn't matter. I don't remember off the top my head. But that's a huge cost. And when you're talking 5k, that's a big difference. So I can see a lot of value there.

</p>
<p><strong>Erick Purino</strong><br />
The other thing with React and the benefit of having custom elements is that if we were to go with React and have React components for the ads, we'd expect all or third party agencies to be familiar with React. But using web components, we free them from having to know the internals of JavaScript or whatever. So we can have designers actually build the creatives using Google's

</p>
<p><strong>Ravi Srinivas</strong><br />
tool. So Eric actually alluded to a second benefit that we haven't discussed so far, which is extensive portability of web components. What we do is we package them up in this other flavor that works with Google's ad designer tool. It's called Google Web Designer. And it has native support for the components. So you can go there and import it like, okay, click that plus button and say, Okay, I want to import this component. And now you have it good to go. And from that point, it's just drag and drop, place it on the timeline. It's kind of meant for designers who are very familiar with the flash arrow, it's bringing them into html5. Once again, these are like things that we face day in and day out on the ad side, but not so much in like a regular application development. But that's the power of it. So you can import it inside Google's too. And then they can drag and drop, do their fancy animations on the timeline, and be able to reuse the best in class that we produce.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. And actually, the age myself, but definitely remember doing a lot of flash banner ads back back in the day. And that's how it was done. Luckily, I usually leveraged ActionScript at the time because the timeline is like, it can get hairy. And especially when you have a designer's like, can we just tweak that just by a couple like frames? And you're like, I've got to go add and remove frames, at least with code. You're like, alright, yeah, that's it's just a percentage or a number. But yeah, so like, now it's web components is the new the new flash. I'm going to call it that.

</p>
<p><strong>Ryan Anklam</strong><br />
So I did a quick look up in React 16.3 G zipped is 2.5k for React and the React DOM package is 32k.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, so it wasn't too far off. Yeah, you have to add the DOM element, though, at that point. So

</p>
<p><strong>Jem Young</strong><br />
anyway, that's instantiated. And yeah, all the things that go with running a framework or a library,

</p>
<p><strong>Ryan Burgess</strong><br />
how long has the team been using web components?

</p>
<p><strong>Ravi Srinivas</strong><br />
So we started like experimenting with it a year ago? Yeah. But as of three months ago, all of Netflix's ads are essentially built with components, every single one of them. And we were able to get to adoption pretty quickly, mainly because of the Google Web Designer support that I mentioned,

</p>
<p><strong>Ryan Burgess</strong><br />
as you've been focused on leveraging them, I'm sure there's been a couple things that you've had to deal with. What are some disadvantages, some headaches that you've had to deal with?

</p>
<p><strong>Erick Purino</strong><br />
I think the biggest one for me in working with the Web Components was being aware of the life cycle, because there's a few lifecycle methods. One is the created callback. The other one is the Attach callback, be aware that we're using the V zero of custom elements, versus the V one, which had a different naming for the lifecycle methods. And basically just hooking into those and being aware of when things are created versus being added to the DOM. And that was one of the biggest things I would struggle with in terms of getting things to render properly, such

</p>
<p><strong>Ravi Srinivas</strong><br />
as conditions basically write lots of race conditions, dealing

</p>
<p><strong>Ryan Burgess</strong><br />
with a lot of fun. Yeah,

</p>
<p><strong>Erick Purino</strong><br />
I think we've got it stable now knock on wood. But I think the reusability of the web components is really shining through laser shares. But the other thing about the web components and going back to the advantage is that not only does it work with GDD, but people that are comfortable using React and using Webpack can take these JavaScript or custom elements and package them up as they need, integrating them with their own

</p>
<p><strong>Ryan Burgess</strong><br />
libraries. Oh, interesting. So they'll work, no problem with some new angular, Ember, whatever framework you're using, it will just basically

</p>
<p><strong>Erick Purino</strong><br />
work. So they just have to package it up in their own build system, which Ravi alluded to before. And it'll work. So we support dual to workflows. It's really cool.

</p>
<p><strong>Jem Young</strong><br />
So what made you go with custom elements and not use like a skateboard js or Google has their own, like polymer? Yeah, polymer or something like that?

</p>
<p><strong>Erick Purino</strong><br />
I think polymer was a bit too heavy, because a lot of it has a lot of other dependencies, skate js, I looked at that briefly, but for what we were doing, I didn't think that we needed that extra overhead. But that's definitely something we could revisit in the future, depending on the needs of our agencies,

</p>
<p><strong>Ravi Srinivas</strong><br />
I think like, but that components, like one of the key drivers, as I keep mentioning back to it is that support with Google Web Designer, if you look at it, we're building for our users for these ad agencies, they are familiar with it, they are going to use it immediately. And you build it as html5 web component, it's going to work in that and they're able to leverage it more or less instantaneously. So that was a that was kind of what clinched the deal. In addition to all of the technical sort of benefits,

</p>
<p><strong>Ryan Burgess</strong><br />
if that makes sense to you. I think from like the scalability on that, obviously, you've got the scale of how you're able to ship these out at the end of the day, but also just the ability of like thinking about all the different people that involved in creating the ads, it's less work necessarily dealing with engineering all the time. It's like it can be moved across this board and leveraging Google's web design tooling that's already in place that they're familiar with. That's a huge benefit. I can imagine.

</p>
<p><strong>Erick Purino</strong><br />
To the point we actually did a session down on Mexico City for one of our agencies. sat in a room for a day, or last, but we had they split up into three teams of twos. And we had account managers, designers, regular engineers, and they each were able to create an ad before the end of the day using GW D, was really powerful. Yeah, people that had never coded and were able to create ads.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, always dealing with that it brings me back to like Dreamweaver days or any of the WYSIWYG, like shipped to, you know, production. Are you able to take something that's created in Google web design and ship it? Do you feel comfortable from the engineering side to just ship it from that?

</p>
<p><strong>Erick Purino</strong><br />
So in? Great question, in regards to that, we we ran into that issue ourselves. So we actually have tooling on our side that will take an output from GDD and package it up to get ready to be served through our we have an A main app called Monet, that we serve it through there to be configured and might five, yeah, I

</p>
<p><strong>Ravi Srinivas</strong><br />
won't light there is a bit of scaffolding and other sort of investments that we've had to make, to sort of create this ecosystem that agencies can use. Without sophisticated tooling, this doesn't really work. So you have to bake all those pieces so that you can make this pipeline as efficient and bottleneck free as possible. One thing

</p>
<p><strong>Ryan Anklam</strong><br />
I'm curious about, know that you guys have a lot of experience with web components. If you were building a side project from scratch, would you start it by using Web Components? Or would you pick up something like React Ember or something like that?

</p>
<p><strong>Erick Purino</strong><br />
Um, I think it depends on what the needs are, what the use cases, I wouldn't say that web components

</p>
<p><strong>Ryan Anklam</strong><br />
are made for our state you look at for what would it be the first thing you look at would you think of,

</p>
<p><strong>Erick Purino</strong><br />
again, depends on the kind of what I'm building, if I were building an app, I don't know that I would go with custom elements just because I'm comfortable using React, for example, for doing that kind of thing. But

</p>
<p><strong>Ravi Srinivas</strong><br />
so I have a controversial statement, which is that long term, everybody's going to be using it. I think it's a little bit risky doesn't make statements like that, because more often than not, people are wrong. But I feel pretty confident, given the way they've worked for us. And given the way, like the industry is pushing it forward, the way I can see Google sort of pilot this technology and move it forward. I strongly believe that Okay, everybody is going to be using it in some flavor or the other in the near future, if not, right now. Take a look at it is what I'd say for most people. If the fit is good, get in early, it's always good to sort of learn a technology before it becomes mainstream,

</p>
<p><strong>Ryan Burgess</strong><br />
even talking about it to the more modern browsers is it's more adopted. So it is it's not something going away, it's actually been more adopted. And so you're right, there's probably going to be more need for it, or more people using it. And so it just kind of leads to that long term.

</p>
<p><strong>Jem Young</strong><br />
So last, because we we've actually done an episode on web components with the Creator skip this section here Netflix, too. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
ironically, weird, which he's at Atlassian. Right. Yeah.

</p>
<p><strong>Jem Young</strong><br />
But so Web Components been around for years now. They've not really caught on, like, I don't hear much about them. Why do you think that is, is because they're just not sexy. It's just like, it's HTML, JavaScript. And today, it's like nothing fancy. Or I think

</p>
<p><strong>Ravi Srinivas</strong><br />
the client side frameworks react, for example. And Angular two, they've done a great job, kind of getting the best of the components baked into, like their thinking, you use React components, you kind of get the same feel of that components, you're happy using them. So if you you're still using the idea, even if you're not using the API's directly, right? So I'd argue, because they're kind of filling that gap. You're happy not knowing about it. But if browsers kind of step up in like, get there, again, to that point, you might have to rethink and figured out, okay, do I need the framework to do that job.

</p>
<p><strong>Jem Young</strong><br />
So your, your use case, just so I like to summarize now. And then. So the use case for the web component is you're building small, lightweight HTML pages, essentially. But they need to be reusable, like everything in there needs to be reusable is nice. If that's the case, where something like React, or Angular or Ember wouldn't work, because it's just too heavy. But you still need that usability aspects. But you still need to be lightweight. And that's where the web components come in. It feels like niche right there. Right, exactly. Okay. Make sense? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Going to the custom part of it, even though I love Ravi, that you brought up the blink tag. Are there concerns there to have like, I think of like accessibility, and I've seen this I've I've bitched about on the podcast is that, like coming around the accessibility side is we often tend to in React, I've seen it many times that were like, a div is used as a button because it's like, Ah, it's just JavaScript. We can add a event handler on it. Now it's a button, but it's not being used as Hopper markup. Do you see, are there some downsides or will that happen with web components is that we're not using semantic markup. I

</p>
<p><strong>Ravi Srinivas</strong><br />
think it's a little bit out of my understanding.

</p>
<p><strong>Erick Purino</strong><br />
I haven't actually run into or heard any issues with regards to that and But it would definitely be something I would revisit if that issue did come up and see how, how are we creating? You know, for example, CTA, which is a call to action button, yeah. Are we using semantic, right? DOM elements? Yes. Like you said, a div versus a button. Yeah, I would definitely revisit it, and then we can change it, and then everyone would get the benefit of it.

</p>
<p><strong>Ryan Burgess</strong><br />
So that's another thing too, is like at that point, if I like built it with a div, and you're like, Whoa, this is not like, even accessible, let's just make it a button, you could change that. And it's going to apply everywhere that's being used. That's

</p>
<p><strong>Erick Purino</strong><br />
right, because, um, based on the tooling that we have, internally, for all the agencies, we are able to publish it via, we have an NPM repo that houses all the components, so they can grab the update through NPM. Or we also have another tool where they can, that updates all the components for them. That's so they run this updater. And whenever we published an updated version of components, it'll go through their internal version of components and update it for CWD. So we remove that friction of having to manually remove and update a component every time because we were running into that issue,

</p>
<p><strong>Ryan Burgess</strong><br />
I could see that now, especially when you're able to build something like a WYSIWYG that's basically allows anyone to create that is they're not going to have all that understanding of what the implications are to leveraging some markup that's not shouldn't be used in those scenarios, like the blink tag should not be probably used, but you can do it. So what are those guardrails to kind of help prevent that, and I think that's a pretty good way of doing that is, you know, there might go out into production as broken for a while, but at least you can kind of pull back on that as

</p>
<p><strong>Erick Purino</strong><br />
well. That's right. That's right. And that allows us also with the versioning, that we do, we can roll back, if there is a production issue, and roll a quick fix, like we keep a good a good watch over the components, because we know all the agencies globally are using them. Yeah. And this affects everyone

</p>
<p><strong>Ravi Srinivas</strong><br />
to give you guys a sense of where we started and where we are today. Originally, when things are broken, nobody would find out about it. Things are that bad. So we started making our agencies instrument, the ads. And of course, we have suicide detection, it'll figure out if things are broken down here. Okay, this is broken, fix it. But that happened constantly, because people would share bad code and say that it's all the time, which is like basically what got us thinking in this way, very early days. And Eric sort of alluded to a very nice point, which is versioning. Earlier, if people had to fix that, it's not just about going in there and changing the code, it would have to be approved by marketing, they'd have to do quality control, visually look at it to say that, Hey, okay, this works, and do it across a lot of different browsers, or devices. And it was just insane. Now, for example, it's okay, update this component, we have a suite of automated tests that we're finishing up right now, it tests that, okay, it doesn't break any of these ads that are going to use it, and then immediately ships it out. And everybody gets it through our updaters and NPM packages.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I was very curious about that is what type of automated tests or testing is being done, but it sounds like you have already thought about that. And it probably saves a lot of headaches by just checking that like,

</p>
<p><strong>Erick Purino</strong><br />
definitely, definitely, there was something a key thing that we talked about, I mean, Ravi many times before is that, you know, we need to have some sort of safety to know that when people are making these changes, because we have a few people that can help out that those changes are resilient, and they're not breaking things in other places, because we do they send out events, and we have animation components as well. We want to make sure that they're consistent.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I guess that's another thing too, is like brand consistency. Right? You know, when you have a large group of people making animations or assets, it's like, that brand piece is very important that we don't do certain foreign door animations or a star swipe. And but he built that tool in anyone could do it. So that's very cool that there's a little bit of testing in place for that.

</p>
<p><strong>Jem Young</strong><br />
I was gonna ask, what sort of do you test components in isolation? Or do you test them as a whole, like, you put all the products together, and

</p>
<p><strong>Ravi Srinivas</strong><br />
it's those it's both. We test them in isolation, we just find it up and say, here's what you're supposed to do, here are the events that you're going to fire, here's how you render yourself. In those tests happen, you still need to stick them inside the HTML page and sort of put a little bit scaffold around it. But for the most part, it's isolated. And the compliment of that is, here are some templatized standard ads that we know have to work each and every time. So we're able to instrument it very well and test that. Okay, it actually doesn't break when you put out a new version.

</p>
<p><strong>Jem Young</strong><br />
Did you like visual testing? Or is it you're hooking to events in the lifecycle seeing like there

</p>
<p><strong>Erick Purino</strong><br />
at the moment we hook into events because the ad when it loads, it'll fire like a ad loaded kind of event. But we are looking at doing visual events as well. Yeah, there's this like screenshotting I can't remember the exact tool that you're talking about nightwatching Using Nightwatch, for end to end testing, and then we'll integrate the visual testing within that tool as well.

</p>
<p><strong>Ravi Srinivas</strong><br />
And it's also, we integrates with Browser Stack. So you make sure that the changes that you make is going to work on all of those different browsers, and mobile devices and different browsers on mobile devices. So that's the kind of cool thing by automating all of this, you're able to make sure that things don't break in, like the needle in the haystack, and cause an upset for you after the ad goes live.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, especially because I it's it's not only breaking product experiences, like we definitely have to worry about all the different browsers that were supporting devices, iOS, Android, and the whole gamut of different viewport sizes, all that for you. It's even I think, there's even this weirdness of every dollar spent for marking, like, serve up an ad, that's, that's costing money. And so if it's broken, well, that's not going to really help at all, you're not going to see that conversion rate, it's actually going to hurt that, and it's going to cost a lot of money.

</p>
<p><strong>Ravi Srinivas</strong><br />
Yeah, the common thing that I like to say is, by the time we sell the ad, the dollar has already been spent. Yeah, yeah, the question is, are you putting it to good use or not? And there's two kinds of failures. One is the white box where nothing loads, which is okay, in my personal opinion, the worst thing is when the ad just looks really ugly, and you really don't want that to happen. Because it's like, trying to present your brand in the nicest possible way, and trying to get somebody excited about what you've got. And you've basically ruined the day, because, okay, they're looking at an ad and worse, it's not even rendering correctly, and it's probably slowing the process down.

</p>
<p><strong>Ryan Burgess</strong><br />
That's true, I guess the white but banner ad is bad, but because you can't see anything. The one that's kind of broken, it might be making me curious to click on though, what is this gonna happen? Could happen actually, in really help conversion? I don't know.

</p>
<p><strong>Ravi Srinivas</strong><br />
The thing is, a lot of those times, if you click, it won't take you anywhere.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, well, then that's gonna get me to where I need to go. That is a problem. Yes. All right.

</p>
<p><strong>Erick Purino</strong><br />
Away, when you don't know that it's us. So that's

</p>
<p><strong>Ryan Burgess</strong><br />
true. It could be anyone, or if they have a white page, like a lot of content sites are just a white page. So just, it's just the whole site. And it's nice, that's perfect. It's like some nice negative space. Works with the design.

</p>
<p><strong>Jem Young</strong><br />
I like the work. I mean, I like your team. I like the work you're doing because like it's very Netflix culture. Because I think most companies would be like, we have all these agencies we have asked me to serve, let's just keep throwing money at them. And like, we'll hire a liaison. They're like, help juggle this technical thing. But it's like, no, let's solve this problem once and for all. And like, let's create a team to help these people so that they empower all these other people. I think other companies are doing very differently. But Netflix, like let's solve this problem here. Now,

</p>
<p><strong>Ravi Srinivas</strong><br />
I like how you immediately gravitate the aspect of its cultural, because the original impetus for doing this came from the marketing side, those guys are like, Hey, we are we've got all of these agencies we love like what you've got with the dynamic ad technology that we've sort of built at Netflix, but we want to scale it up. And the only way to scale it up is to throw more money. And we don't want to do that. Right. So they came to us with this problem with this. Hey, okay, what can you guys do? What can we do collectively? Right? And that's when like, we figured out through a bunch of ideas. And and this is the one that one out because of the merits. I love

</p>
<p><strong>Jem Young</strong><br />
it. Like I think usually historically, marketing and engineering are like antagonistic. It's like marketing wants this. And engineering is like, No, I'm not going to like do this. You're like, maybe, but like the collaboration, I think, is really powerful. And it just, it solves a problem for everybody. So it's less work on both ends. And I

</p>
<p><strong>Erick Purino</strong><br />
think what's happening in marketing, and the kind of tooling that we're doing is unique across globally, because I don't think anyone is doing the kind of things that we're doing, trying to solve those problems that we're solving. And I think it's really empowering the marketing teams to create and, and at a global scale. Because if you think we're going to launch something like 700 titles this year, think about all the creatives you would have to do for each title globally. Multiply that for all the different permutations as well. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Like it's the scale, the sheer scale and volume. And I love that you have actually empowered exactly what Jem said, it's like, we're empowering the engineering aspect to scale marketing, and give them tools to actually be able to do a lot of things. I think that's great. We're spending

</p>
<p><strong>Jem Young</strong><br />
2 billion on marketing. It's not a secret that reads like any like, can you say that? It's not? No, I know. Yeah. Like, yeah, we're spending 2 billion on marketing on our original titles and all these other things. And I think, again, I think most companies just like throw money, like do big stunts, but it's just like, No, let's get some more engineers and like, let's solve this problem. So that that 2 billion goes even further than it would other places.

</p>
<p><strong>Ravi Srinivas</strong><br />
So here's something that I can talk about. Now. It is, which is we push the ads industry forward in terms of what's called incremental bidding. A lot of times if you look at the ad platforms, there's bidding for conversions. It's Hey, I'm gonna bid for Jem, because he's gonna convert, if he converts, I get credit, I'm gonna bet for Ryan Burgess. And if he converts, I get credit problem with that is, if Jem was going to convert anyway, now the ad got credit for it when it really shouldn't have it just influenced trying to convert. And that's what it was causal. So that's where the concept of incremental reading comes in, which is just go after people who wouldn't have converted, except for the fact that they saw your ad. So they decided, okay, let me convert in, like, sign up for Netflix. Right. So those are things that like, overall in the ad technology team, we kind of did it. And now we're getting our ad partners to like, invest mode and more into it. It's really cool long.

</p>
<p><strong>Ryan Burgess</strong><br />
What would you guys like to see for web components in the future?

</p>
<p><strong>Erick Purino</strong><br />
I like to see more adoption. I'd like to see community rally up around it. I mean, be great to have something like the React community around it, because I think it's a very viable technology piece that can be reused.

</p>
<p><strong>Ravi Srinivas</strong><br />
I have a very fundamental ask, which is make it a standard. It's not a standard yet. Yeah, it's been a spec for quite a long time. I think 2014, late 2014, early 2015. Yeah. And so I'd love to see it to be a standard, because that's when adoption will start. The longer it kind of sits on the shelf, the less likely it is that okay, things will work out perfectly. So that's the path that I hope for the most.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, and I mean, Google has been pushing it I'm I feel like for a while but it touching go like sometimes I feel like they're really pushing it. And then it's like quiet, and then they're pushing again. So I'm hoping that the momentum keeps up. I feel like early 2014, it was really heavy, like, especially with polymer that's like, roughly around the time polymer really been pushed. And now I'm hearing more and more about web components. So maybe we're on the right track again.

</p>
<p><strong>Ravi Srinivas</strong><br />
Right. And you touched on the other big ask that I do have for web components, which is universal browser support. Firefox, I need to wake up they need to adopt the standard, and they need to like

</p>
<p><strong>Ryan Burgess</strong><br />
how was the edge like his edge adopted web components?

</p>
<p><strong>Erick Purino</strong><br />
I know, I believe I still need to polyfill

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Okay. So hopefully we have some people listening who work on those browsers get that in, that'd be useful.

</p>
<p><strong>Ryan Anklam</strong><br />
Yep. Step one is push the standard right get get it as a standard and then the browser's don't have a choice but to implement it. Right. It's true.

</p>
<p><strong>Ryan Burgess</strong><br />
And and coming to that conclusion together to like, how do we implement this?

</p>
<p><strong>Jem Young</strong><br />
Why why is it not a standard, though, is like W three C's doesn't bother or?

</p>
<p><strong>Erick Purino</strong><br />
That I don't know,

</p>
<p><strong>Ravi Srinivas</strong><br />
if these things take time?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Especially if you think of how long a speck takes to go through? Sure. Unfortunately, it takes time. Which it may be actually a good thing. Sometimes.

</p>
<p><strong>Jem Young</strong><br />
It is. I don't see the opposition to this, though. So I don't think it hurts anything. There are things that I think are harmful. If they got implemented, it would harm the web in general. But I think this is pretty much like if you don't need it, don't use it. It's not gonna hurt you.

</p>
<p><strong>Ryan Anklam</strong><br />
Oh, no, it's Mosqueda. Solved. Maybe we can.

</p>
<p><strong>Ryan Burgess</strong><br />
So I'm sure a lot of our listeners may have never actually leveraged web components, what advice would you give to someone first, trying to test it out, learn it, just try

</p>
<p><strong>Erick Purino</strong><br />
it and be aware of the lifecycle methods. I think those were the You did say that earlier. Those are the key takeaways for me, once you once I got used to create a callback and Todd's callback, everything else just fell in place. I mean, in the end, it's just vanilla JavaScript, you can write JavaScript, you can write a web component.

</p>
<p><strong>Ryan Burgess</strong><br />
And that's all advice we always give on frameworks in general is like if you can write JavaScript, you can learn a framework, the end of the day, it's JavaScript, and that's the most important getting those fundamentals.

</p>
<p><strong>Ryan Anklam</strong><br />
So for someone that wanted to learn web components, do you have any suggestions of where should someone go to get started?

</p>
<p><strong>Ravi Srinivas</strong><br />
Think like, I just used Google, I didn't really like try to find my way in a structured fashion. It was just hey, like, let me search for it. Look at some articles, look at people who actually used it. And I just learned learn by example. So yes,

</p>
<p><strong>Ryan Anklam</strong><br />
maybe we need to put some of that our tech blog about how we use Web Components. Show. Sure, Ravi, let's

</p>
<p><strong>Ryan Burgess</strong><br />
start writing that. Now. You guys are on record

</p>
<p><strong>Ryan Anklam</strong><br />
saying that.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, well, at the end of each episode, we'd like to share pics of things that we've found interesting to share with our listeners. Let's go around the table and share pics of things we found interesting. Ravi, you want to start it off?

</p>
<p><strong>Ravi Srinivas</strong><br />
Yeah. So I have this problem where I'm constantly presenting in meetings. And that's the time when my wife decides to text me about picking up trash bags and stuff. And I believe it's embarrassing, right? Yeah, totally. So I found this app called Mazel so it works on a Mac. It automatically puts your Mac on a Do Not Disturb mode when you're presenting. It's contextually aware, and I swear I haven't had this problem happen for the last six months. So it's probably working perfectly. Because I do get notifications every other time. It's just okay it's it's so second nature to me right now that I don't even bother. It's not a concern anymore ever since I got it and it's free. That's the best.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh my God, that's awesome. I'm

</p>
<p><strong>Jem Young</strong><br />
totally download isn't that built in OSX by default, like if I plug in to HDMI, it It will hide my notifications by default, but no,

</p>
<p><strong>Ravi Srinivas</strong><br />
it's not on Google Hangouts. Any other kind of browser?

</p>
<p><strong>Jem Young</strong><br />
Oh, and yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
Keynote and things like that. It's okay. But it's like if your full screen on Hangouts I don't think it does. Yeah, that's true. Yeah.

</p>
<p><strong>Ravi Srinivas</strong><br />
I've texted I mean, the downside now is I often like write something on Slack. My coworker was presenting. I don't remember that. Okay. He doesn't have this new.

</p>
<p><strong>Erick Purino</strong><br />
Yeah, I don't really have a pic like, I have a suggestion though. In Mind pic is really the city of Osaka in Japan. I mean, if you ever get a chance to go to Japan, I highly recommend visiting Osaka one because it's considered the kitchen of Japan. So the best food they say is down in Osaka. The other thing is if you want to visit some other cities nearby, Kyoto, Nara and Kobe are all are all 30 minutes in each direction. So definitely highly recommended.

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan, what do you have for us?

</p>
<p><strong>Ryan Anklam</strong><br />
My first pick is a song by Jack Jones called Breathe. It's just one of those songs if I'm having a bad day, and I'm crabby into my car, and it comes on, just has me jamming along singing along and it always puts me in a good mood. So

</p>
<p><strong>Ryan Burgess</strong><br />
how many times have you listened to it all?

</p>
<p><strong>Ryan Anklam</strong><br />
It's always coming home. And it's always sunny. It's always nice out. No. So if you're having a bad day, stick a listen. My second pick is an app called native a fire native fire. It's npm module, and it will wrap any website and an electron app. So I thought of this because I was actually going to have my pic be the new Android web messages yet, which I wrapped a native fire now. So I have this native Android Messages app on my computer that works just like iMessage used to. So it's really nice for messaging apps, you can wrap I think the WhatsApp Web app and it or any web page you want. And it turns it into a native app wrapped in electron. Very cool. I definitely want to check that out. Yeah, it's all command line interface is to native phi, and then send it the URL and we'll go inspect it. And it'll even try to get the icon and things like that from the website. So Wow, pretty cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Jam, what do you have for us,

</p>
<p><strong>Jem Young</strong><br />
I just want to say that not everything should be an electron app. company can't make a native app. Sorry, I've been on Slack, right. So for the amount of resources that consume anyways, I have two picks Nova meaningful. My first pick for my valley silicon segment where I pick something that shouldn't exists, or it only exists because we have too much money is Dyson fans. I bought one $420 later for a fan, I'm returning it. It's just the fan. I expected more for the money for the hype that Dyson gets. It's like it's cool. It's a fan. But it's it's not that great. It's not $400 grade, a $50

</p>
<p><strong>Ryan Burgess</strong><br />
fan would have done it. So you and I also talked about it only has the one button on it. And then there's a remote that goes along with it, which has the controls to oscillate and change the beat of the fan. So if you lose that remote, which is smaller than the Apple TV remote, it is like $40 to buy a new one.

</p>
<p><strong>Jem Young</strong><br />
Is it really? Yeah.

</p>
<p><strong>Ryan Anklam</strong><br />
So then the engineers did not have children? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
It's not a Smart Fan. No, there's no like app to hook up to your phone, which to me, I'd be like, alright, well, that might be a little more appealing. It doesn't

</p>
<p><strong>Jem Young</strong><br />
even remember the previous settings that if I had an oscillator on like level four, and I turned it on without the remote, or if when I turned it back on it does not remember the previous setting like like original like it'll say level four, but it won't oscillate again. And if I don't have a remote you are now stuck in that one mode permanently because you can't change like Ryan. I don't know for that much money. I expect more polished product like a MacBook is expensive. But it's a well made machine. I don't have any problems with it. Ryan just gave a face Ryan and new
ones are sold one.

</p>
<p><strong>Ryan Burgess</strong><br />
Stuck on the old one. Yeah, hold on still. Yeah, like even the two of the people here are very smart and stuck on the old one. But the rest of us not so much so.

</p>
<p><strong>Jem Young</strong><br />
And for my second pick after that EPA grant. Another rant. I'm calling it now. Today, the end of IPAs. I think the IPA hype train is over. For those who don't know IPAs, Indian Pale Ale it is like the most overhyped beer of all time. That's bitter, and it's Hoppy, and it's terrible. But people swear by it, like, oh, it's triple hops. It's not good beer. And I'm calling the end of it now because I think people are now starting to learn that IPAs are not that good. stouts I'm a style person. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I'll take the IPA over the stout. So it's

</p>
<p><strong>Ryan Anklam</strong><br />
a different pale ales, but not necessarily India paleo. So like, there's been barely like called, I forget what it's called. But it's yeah, like LC that's the one I was thinking your pond. Oh, yeah. Paleo

</p>
<p><strong>Ryan Burgess</strong><br />
is really good. So we got some good Jem rants. Yeah, you know, awesome. All right. And I have two picks. One is actually a music pick one of my favorite bands. I haven't heard a new song from them from a while but the Gaslight Anthem they have a new song called God's gonna cut you down. I really like it good song and then to, I don't know, it's not an anti pick, but I'm pretty sure Jem will consider an anti pick that's on him. I got a smart lock. And I've had it for almost a week now and I've had no issues and I'm enjoying it is the nest and Yale lock. It's a great Smart Lock, it's Wi Fi enabled. It also has a key code on the front. So if you don't actually need an app to turn it on or turn it off, it integrates really well with other nest products. I highly recommend it Jem. He's shaking his head I mean, that's fine.

</p>
<p><strong>Jem Young</strong><br />
We will save this for him for another episode but I just want to point out that the lock has been around for a long time right nothing wrong with it

</p>
<p><strong>Ryan Burgess</strong><br />
like the deadbolt I think what did I tell you was like 19 is 1905 1901 or something when it was created. It has not been innovated in a long time just

</p>
<p><strong>Jem Young</strong><br />
need to be

</p>
<p><strong>Ryan Burgess</strong><br />
it works it's easy to pick a deadbolt so yeah, I don't know it's that easy.

</p>
<p><strong>Jem Young</strong><br />
A good lock is not that easy.

</p>
<p><strong>Ryan Anklam</strong><br />
Just like we talked about for the episode though if you're laying in bed and you don't remember you lock the front door Smart Lock is the sweets it's

</p>
<p><strong>Jem Young</strong><br />
not a real problem though.

</p>
<p><strong>Ryan Burgess</strong><br />
I get up in the middle of night

</p>
<p><strong>Ravi Srinivas</strong><br />
to Comcast outages in my area and the last month I'm pretty sure I'd have gotten stuck because it was like around six SPM I would have been stuck if I had a smart locks.

</p>
<p><strong>Ryan Burgess</strong><br />
This slot does work without Wi Fi. So it does Yeah, you got your power. Power. Ah, yeah, no, it's actually battery powered. It will tell you when the battery starts to die. So that's good, too.

</p>
<p><strong>Erick Purino</strong><br />
So did you start worrying about Oh shit, is the battery dying on my smart sheets tell

</p>
<p><strong>Ryan Burgess</strong><br />
me if it if it fails there, maybe we'll have a problem. And I might be texting Jem to come help. But it's fine. I haven't hit that point yet. Before we end the episode. I want to thank our guests. Thank you both Eric and Robbie for joining us. It was a pleasure having you both on where can people get in touch with you?

</p>
<p><strong>Ravi Srinivas</strong><br />
I have a Twitter that I don't really use a whole lot. It's at doc type d u c k t YT. Ed. I'm a huge Python fan if you haven't figured out based on that handle, but that's basically me.

</p>
<p><strong>Erick Purino</strong><br />
You can reach me on Twitter My Twitter handle is at Super bok bok that super bok bok comes from my old quick days. Oh, wait tag, and that's tag I use now and Quake Champions.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, well thank you all for listening today's episode, make sure to subscribe to find on Happy Hour podcast on whatever you like to listen to podcasts on. And you can follow us on Twitter at front end. Ah, any last words?

</p>
<p><strong>Erick Purino</strong><br />
Thanks for having us on.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, right on. Thanks for joining us. All right. Thank you.

</p>
`;
        return transcript;
    };