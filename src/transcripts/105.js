// Episode 1 transcript
module.exports = function() {
  const transcript = `
  <p><strong>Ryan Burgess</strong><br /> 
  Welcome to another episode of the front end, happy hour podcast. We all like to bundle up our code that is shipped to the client. And there are a lot of great tools to help us out with that. In this episode, we're joined by Maia will and Devon to talk with us about parcel made will and Devin, can you give us brief introductions of who you are, what you do, and what your favorite happier beverages?
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  Yeah, so I'm Maia Teegarden. I'm a senior software engineer at Atlassian and I work and front end developer tooling. And I've been contributing to parcel for almost two years now. My happy hour drink of choice is Almanac, Oak aged sour beer. This one is called dream sequence, 
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  I'm Will Binns-Smith. I'm also work at Atlassian I worked alongside male, senior software engineer. Also, like Maia said on the on the same team. We are sometimes forget the name of our team. But at some point in other we were build tools team. But nowadays we're Atlassian front end platform. And we're focused primarily on developer infrastructure. So we ended up spending quite a bit of time working on parcel where we are now in the process of landing, parcel bundles in Bitbucket. Bitbucket cloud. My beverage today, I don't know, like I don't, I don't have loyalty to a particular beverage or another. But today, I happen to have just a diet coke with some Dominican rum.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  I'm Devin Gravette. I work at Adobe, mostly on our design system. But kind of front end tooling in general and like infrastructure kind of things. So yeah, I started the parcel project, who three years ago now Time flies. And let's see. Today I'm drinking this nice Porter from the crux fermentation project.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  So it's pretty good. It's funny. You said how Time Is Flying pie. It was actually a guest of ours talking about build tools two years ago, like it does not feel like that. So welcome back. But yeah, I was surprised to see how long ago when I look that up. All right. Let's also give introductions of today's panelists. Stacy, want to start it off?
  
  </p>
  <p><strong>Stacy London</strong><br />
  Sure. I'm Stacy London. I'm a senior front end engineer at Atlassian. And I also work on the same team with Will and Maia.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  I'm Augustus. I'm a guest this year, and I'm a software engineer at Twitch. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcast we like to choose a keyword that if it's mentioned at all in the episode we will all take a drink. And what did we decide? Today's keyword is pack package right on
  
  All  
  Cheers.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  We're starting off strong.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Cheers. I'm curious as a as a quick start, who'd like to describe what parcel is?
  
  </p>
  <p><strong>Devon Govett</strong><br />
  I can take that one. So parcel is a bundler.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Cheers. Cheers. It was
  
  </p>
  <p><strong>Devon Govett</strong><br />
  a package, but it's called cheers anyway. So parcel takes in all your code and kind of walks through it and builds up a whole graph of dependencies, and then spits out a set of smaller files, or like larger files containing more, more more files, more original files, and, and then you ship that to an end user. So you start out with modules, that's your source code. And in the end, you end up with kind of an optimized bundle for production that you can ship to end users that's kind of going to load faster than done the original source code. So that's kind of the overall picture of what like bundling as
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  feel like you've described parcel before.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yeah. Yeah, a couple of times.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  What are some examples of web applications that are bundling? And why would they want to bundle I think you, you know, alluded a little bit to making smaller packages Cheers.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  You're seeing but why else,
  
  </p>
  <p><strong>Devon Govett</strong><br />
  you might have source code that might not run directly in the browser, you might use things like TypeScript or kind of future JavaScript that isn't quite implemented across all the browsers yet. So that's kind of another reason why a lot of build tooling exists out there, in general. So I don't know kind of parcel parcel is a bit more opinionated, I suppose, than some other tools out there. And that it kind of gives you more more of this out of the box. And so it kind of ties together a lot of those tools that you'd normally use to build things into kind of a more unified experience. And so so yeah, that's kind of another reason why you'd use a tool like parcel is just to help you build applications quicker.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  any examples of web applications that you guys are all aware of, maybe it's not even parcel. But I mean, a lot of the applications that we're all working on are using some form of bundling. I almost want to say the key word there, but chose not to.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  I mean, these days, it's kind of hard to find an application that isn't bundled.
  
  I guess.
  
  You know, in the beginning, there were no modules. And in JavaScript at all, so you just had kind of scripts and everything was running in the global scope. So it's kind of chaos, right? And I don't know if you all remember things like require j s, or AMD are these kind of early types of module systems that people people built. Or just like kind of cat or just carefully arranging your screen. tags together to, to build things together. So kind of bundlers came out of that to try to make things both faster and an easier to use. So the first kind of module system that was really widely used in terms of bundling was kind of common j s, which was created in the node ecosystem. So on the server side, almost, but people brought this to the browser through things like browserify. So browserify was kind of a very early bundler that it took this this common j s syntax that people were using to create modules that were kind of well scoped to file boundaries. So variables weren't leaking outside of the scope and all that stuff. So you could you could build more modular, I mean, module applications. So So browserify was one of these early bundlers that put put these things together for the browser, so it emulated the node module system. But But bundled everything up into a single file that ran in the web browser. And these days, we have, like a native module system built into web browsers. It's the yes module system that came out in 2015. Yes, 2015 spec. And like people were finally able to start like writing modules in a way that's actually specified as part of the language. And this gives us kind of lots of different benefits, including, you know, better. Just since it's built into the language, it's easier to analyze, ahead of time at build time, and all that. So I think we're, we'll probably get into some benefits of that later on. But that's kind of just an overview of or like kind of history of module systems.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  I love that you painted the history it just it brought me back to the days of even just having to order order those script tags. appropriately and I'm like, Oh, right. And then you just mess one up and you're like what's going on, and it was simply just moving that around or required GS seemed, I mean, it seemed good at first. But I felt like that one wildly got complicated. If you're on a large application, I was blown away when common j. s came to the browser, like leveraging browserify I felt like that was where I actually felt like we were building bundles appropriately. So I feel like we've just continued to get better and better from that. And the tools continually get better. And I
  
  </p>
  <p><strong>Devon Govett</strong><br />
  remember like using require j s on larger applications. And the load times are just like in development, we're just like, so slow, like every, that you're loading hundreds of scripts on the page at a time and the browser is just going crazy trying to trying to process all that. I remember early, like in a, you know, applications back in like, I don't know, 2011, probably even we were just kind of using Cat to like, combine files together. And we had like manual scripts where it's like, here's an array of like all of my scripts that are in my application and like some some, we had some set of scripts that would concatenate them together in the right order. We've come a long way. I would say,
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  if you move that out of the array just by a little bit, it could throw everything off.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yeah, you you introduce a dependency into one of the files, but forget to reorder the array then like things could break.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  And you forgot to define jQuery before your jQuery plugin.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Actually,
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  for I guess, for context for folks who weren't in the front end space, in the early days, I mean, the rationale for concatenating assets is there are a couple advantages to doing that, right. Like pre HTV, two, you were limited to something like six or eight concurrent requests to the same domain. So by concatenating everything you reduce the number of of HTTP requests you make. And you can take more advantage of things like jesup, which with the window size, can better compress text. So for example, if you had, you know, like hundreds of script tags to small, tiny scripts, you'd essentially be blocked waiting on downloading and executing those eight at a time. And then a compressor like jesup wouldn't be able to act on a large enough window size
  
  for the gains and compression.
  
  These days, we have HTV two, which gives us multiplexing of requests. So it's a lot less of an issue. Although there are still a lot of reasons why bundling is still relevant, although probably to the extent probably not to the extent of back in the old days, and it probably opens up Some capabilities and some interesting new opportunities for changing the the way we bundle I guess
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  the question, as you say about that we've moved away from there were certain reasons why we needed it in the past exactly what you said of making too many HTTP requests. That's not as as much of a constraint to worry about anymore. Do you? Do all of you think there will ever be a time where we no longer need a bundle system?
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Oh, yeah, actually, recently, there's been kind of a lot of different experimentation with with this. I don't know if people have seen things like snowpack or these kind of newer tools out there. I think bundling is here to stay for a while, though, at least for production, right. So like snowpack, and some of these other things are, are kind of optimizing the development experience. So you have to bundle less during development. But there's still like the performance. benefits to bundling and production are still quite large. There's some research data that Google I think recently published shows like even with HTTP two, there's a practical limit to the number of requests that you can do when you're loading a page before you start running into performance problems. So I think they came up with a limit of around like 25 requests during page load, even with HTTP two. And you know, as as well mentioned, like, the, the jesup, compression, effectiveness kind of drops with smaller files as well. So you end up even if you load lots of small files, you end up downloading more data overall, which can kind of slow down things as well. So I think bundling, at least in production for any reasonably sized app is going to be with us for a while, even if it's even if it changes in development quite a bit.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Oh, this might be more of a question towards Devin, but I'd love to hear a little bit more around the history of parcel and, and how it all came about.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  So let's see. It was 2017
  
  I was He's working on like a product at Adobe. And we had some quite long build times. We were using at sea. I think we were using browserify at the time. And, and our app was getting pretty big and like just starting up the development server was taking like, I don't know, over a minute, probably. I don't know if you've all experienced applications like that.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Oh, yes,
  
  </p>
  <p><strong>Devon Govett</strong><br />
  yeah. Yes. So I started looking into ways to optimize this just because the team was kind of getting frustrated with it. So I experimented with like using other tools Webpack I think that was the only other one that was around at the time. There were various plugins to try to do like caching in Webpack. And, like, try to parallelize things, but they at the time, they were really not mature at all and It was clear that the Webpack kind of plug in architecture was just not really designed for doing those kind of things. I know they're working on that now. But back then, this was definitely not the case. So I kind of started experimenting with building my own bundler just for fun at the start to see like what I could do in terms of, of caching things, and, and parallelization. So yeah, I kind of spent a few months on that, just kind of on the side and, and eventually we started, like, we started using it on the team and trying it out. So really, the first version of parcel was exactly what our team needed, and nothing more. I kind of just open sourced it because I thought it was interesting, really with no expectation that it would be come like popular or used by anyone else. Really. So yeah, that's kind of how parcel came to be. The other thing about parcel is Is that it's kind of I was frustrated with like, configuring these tools. I don't know if you all have configured Webpack. But
  
  it can be, it can be an interesting experience.
  
  I'll just say that. So and then the other thing is Webpack is really mostly about JavaScript. And most of these other tools are I don't, I still don't think there's another bundler out there that is really handles files other than JavaScript and Webpack kind of does. But really, what they do is they're loaders convert all file types pretty much to JavaScript. And then sometimes there's even plugins that like re extract some stuff out of the JavaScript, so like the CSS loader. Yeah, right, called CSS
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  extract plugin to get the CSS file out of the graph of JavaScript. Yeah,
  
  </p>
  <p><strong>Devon Govett</strong><br />
  right, exactly. So they build it into JavaScript in like a string. And then later on, they have a plugin to extract that back out into a CSS file. So I kind of thought this was like kind of strange, just kind of a strange way to build things. So parcel one had had that whole file type agnostic architecture as well. So we, you could, you could build a CSS file and it was native to parcel as any, any kind of file was native to parcel as well, we didn't really have any assumptions about it being JavaScript. Yeah. And then the whole zero config thing was, I mean, I was just kind of wrapping up a lot of tools that we were using at the time Babel and post CSS and all bunch of other things like that. And it turned out that we had some pretty good like, defaults that people people were able to use as well. So it never it never really meant like you couldn't configure parcel. I mean, you could configure Babel and like all the other tools that parcel ran. But uh, yeah, just trying to make that Painful configuration experience a little easier to manage. So yeah, those were kind of the main things about the original version of parcel.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Can I just say thanks for making it easier?
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yeah, I guess so. I was gonna say what you said. Yeah. Webpack configuration is interesting. I that's not the word I would use. I was just gonna say painful.
  
  Unknown Speaker  
  Well, I don't want to start a war and like,
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  No, no, Webpack is an amazing, amazing bundler. You know, oh, yeah.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  started the year starting the word guys. Let's put
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  some constructive criticism criticism out there. That could be better. So
  
  </p>
  <p><strong>Devon Govett</strong><br />
  yeah, and they they're aware of all of that as well. And they've definitely made improvements over the years that have been directly because of things like parcel as well. So So that's, that's good to see as well.
  
  </p>
  <p><strong>Stacy London</strong><br />
  That's sort of the beauty of open source, like things get developed and gained popularity and then other things get better too. So
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Exactly. I mean, I think we even started that going Down the deep history of how we actually started combining Java JavaScript files, it was, you know, how do we do this and things kept getting better. There was something like require JS was great for its time, but it started to not be as easy to use and then, you know, common j s was starting to be leveraged and it's like, I love that it's like we continue to get better and better, which is awesome. brings me to an interesting question to ask all of you parcel makes a lot easier not to have to do configs. But I would be interested to what are other reasons that you all would choose parcel as a bundler over another one?
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Yes, sir. That's a good question. Um, I think for me, it's been all about just getting off the ground running. And this, this can apply. You know, from everything from, you know, a small, you know, hobby app that I'm building, to just a quick test that I'm running all the way up to something the size of Bitbucket. For for Bitbucket, we have Ma'am, do you remember if you have a parcel config? I don't even think we have a parcel config for Bitbucket? No, we have we have a cost, we have a couple custom plugins that we that we wrote. Thankfully, like the the delineation and clear roles that parcel plugins have make it actually quite straightforward to, to write a plug in the flow typing helps quite a bit as well. Yeah, I mean, I think just being able to get up off the ground running to be able to just create, like an HTML file, add some script tags to it, add some link tags for my style sheets, call and create web workers in my JavaScript, and to be able to run that HTML file just as it is without a bundler at all, in in the browser. And then just point parcel at it and instantly get optimized bundled output and have that behave exactly the same way. is just I think that kind of really tells the story of kind of the The thought we put into the user experience for parcel. But just also kind of like how native native it is you don't need to go and and piece together a bunch of plugins and teach it how to load certain things. It kind of works kind of natively, just as the web does, I think is kind of just one of the greatest things about it. And then if, if for some reason, the zero config case isn't enough for you, just as I was saying, like, you can build a plug in, that does what you need. I think really what we're aiming for is something that works for the for like the 90%. You just don't have to touch anything, and just kind of does what you'd expect, does what's what's what we believe is best for your web application. And if what you believe is different, you can go ahead and swap out any modular piece of parcel with your own and achieve what you wanted.
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  I guess for me, one thing that really attracted me to parcel was the caching. And I've been working to make that better and parcel two So just being able to keep track of everything that's happening and only run
  
  things that are related to the changes. So this idea that
  
  the length of the build has to do with the the size of the changes,
  
  </p>
  <p><strong>Devon Govett</strong><br />
  as opposed to size of the app that is right. I would
  
  </p>
  <p><strong>Stacy London</strong><br />
  echo Will's comment about ease of getting going. That was just like super impressive to me. Because like, I think sometimes you start trying to build a modern web app. And then because you have like a project idea in your head, like I want to build this like thing for fun. And then you start trying to assemble it and then you get lost in the Yak shaving of like configs and setups and tooling and in like, hours and hours later, you're like, Okay, now I can start the thing that I was supposed to be doing initially. And I feel like with parcel just let you it lets you kind of start building the thing and not worry about all that plumbing. That, you know, stuff that takes well and is kind of tricky to figure out. And so that was a big difference like create react app that was that if that came about because all of that work was so complicated and convoluted and took so much time to like, Well, here's create react app, and then you can exit out of it. And you have all that config. But like, even that is complicated once you exit out of it. And so I know that that was just the really appealing part to me about about parcel is that it lets you really focus on what you're truly trying to do, which is built a cool whether
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  you have like, preparing for this, I was considering, like drawing a comparison between our plugin API and web packs. And I started Googling around for Webpack internals and I, I typed in Webpack inter and Google's suggestion, I think it was like a second or third suggestions, web pack interview questions. And it's just it's so surprising to me. And you know, like you hear from Folks who, who have had like a big chunk of their full time job dedicated to configuring Webpack and wrangling these plugins and, and coordinating everything, and having just so much shift around them, it just the the complexity of the systems, I think for the just the vast majority of folks, it's really leaky, you know, like somebody who's just getting off the ground running, shouldn't need to know about mini CSS extract plugin and Ts loader and how that's different from Ts awesome loader and all that. Really, they're just interested in building your app and getting the market. And I think, you know, we also, again, want to be able to support the folks who, who do need the kind of raw power that people usually reach to configuration for and we offer
  
  a lot like a modular take on that instead.
  
  Although like We're probably going to be broadening up configuration a little bit. I think, in general, the, the idea behind zero configuration for parcel is not that configuration doesn't exist. It's that, you know, we, we kind of do what you expect. I think I mentioned this before, but like, we do the right thing at the right time. And if you feel differently, you can make that happen.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yeah, I think some people mentioned like tools like create react app, and there's other ones out there that are kind of specific to a particular framework or something like that. So yeah, in many ways parcel kind of works kind of like some of those tools in many ways. Like we, we configure Babel for you, we can we set up TypeScript, we do all these things that you'd normally have to do if you're just using Webpack or something like that raw. But But parcel is kind of framework and tooling agnostic in that way. So it's not tied to react. It's not tied to view it's not tied to svelte or whatever else. Your you're using, and kind of it's more web native in that way, right? Like you start with an HTML file and, and you put your script tags in there, and you put your link tags for your CSS in there. And kind of part parcel walks, everything from there to kind of figure out your whole application. And we've got, we've dude, we do have some frameworks, framework features in there. Like, we recently added support for react fast refresh, which is their new like, hot module reloading system. Actually, we added it like a while ago. But uh, so we do have some things like that, but but a lot of them are kind of like, detected based on what your code has in it. So we kind of infer a lot of that configuration for you. So we're looking at your code, we're looking at your dependencies, we see Oh, you have react installed. Okay, we can do this extra thing for you. So yeah, it's it's kind of smarter defaults as opposed to just hard coded. defaults, if that makes sense.
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  Like we should have chose configuration for the word. Cheers. Cheers.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Cheers. I'd also be really interested to hear from all of you that what's new and exciting to parcel two, because that's recently been released. Is it? Is it not? Well,
  
  </p>
  <p><strong>Devon Govett</strong><br />
  alpha soon soon beta, okay. Okay in beta.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  So then we're getting like getting close again, which is great getting close. That's awesome. That's exciting.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Possibly by the by the time folks are listening to this, there may or may not be a first beta out
  
  </p>
  <p><strong>Devon Govett</strong><br />
  we hope
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  will hold you accountable.
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  I think I remember from last time, Jamie was talking about parcel one. And how the his first suggestion to Devin was to add a config file.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yes, that's true.
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  I'm changing it.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Cheers.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Is this a first as the drinking word ever changed mid episode? 
  
  </p>
  <p><strong>Stacy London</strong><br />
  No.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  is the first one to change Change it well done.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yeah, that's true.
  
  So I started talking to Jamie, Jamie Kyle, that is, like a couple couple days even after the first parcel release, he had been thinking about building a bundler as well at the time. And so we just decided to collaborate on on that. And yeah, he had, he had a lot of experience with building other tools like Babel. And flow, he worked on the flow team, I think, and others. And so that was really invaluable to like, learn from what he had picked up over the years working on those tools. So yeah, we met and the first thing he said was, what's out a config file. And, and I was like, I don't know. So but eventually he convinced me that it was the right thing to do. We could have good defaults and we could, we could still do most of what we wanted to do. But but allow people to act. Send it send parcel in a better way. I kind of like to tell the story of how I built the plugin system for parcel one, like the day before the public release, because I was like, Huh, well, maybe people will want to, like extend this. So I just kind of added added it kind of as an afterthought. And I wish I hadn't, you know, I wish I wish it had been better thought through. And so that's kind of what we've been doing with parcel two is really thinking through how the whole pipeline should work end to end and how it can be extended in kind of a reusable and useful way that's kind of not just tapping into like, lots of different events or anything like I don't know if you've seen Webpack internals, but the plugins can be pretty hairy and hard to understand, I think. Because they're really just tapping into all these events and they can, anything can happen anywhere. So we kind of designed the parcel plugin system around like this pipeline end to end Here's the stages of parcel. And then we have plug in types for each one with well defined API's and everything. So yeah, that's kind of the core of what parcel two is, is this is this optimized kind of graph of your whole application and with with ways to tap into specific parts of that with specific plugin API's to customize it. And partial core partial to core basically doesn't really do anything by itself, right, you have to have plugins. And so all of all of the internals of parcel are plugins as well. So we use our own plug in system to build everything in parcel. So each, each, you know, you got, you've got transformers and resolvers, and these kind of things that that run as part of the the pipeline and all of those are all the core ones are plugins to so. So we hope that this allows like while we have a default config that does you know, everything that parcel One did and and more now even we, it'll allow you to, you know, swap out any part of parcel and you know, change how it works if you need to
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  probably worth noting that the core bundling strategy is itself a plugin. So if you, you know, if you feel like you have a better take on bundling than we do. And by bundling I mean, deciding how assets are grouped together in which bundles and whether bundles exist or not, and where they exist, you're welcome to just swap out the actual core bundling strategy itself a plugin in parse
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yeah, and same with pretty much everything. So you want to swap out the way that you know, compilation happens or you want to swap out the way that the way that tree shaking works or any of these kind of pieces, they're all plugins and you can you can do that and. Yeah, I think the bundling piece is really interesting though. So like, parcel by itself really isn't even a bundler anymore. It's just kind of the plugin that makes it that makes it a bundler, right, that combines these assets together in different ways. And so if you want to, if you want to, you know, do as we were talking earlier about kind of like the snowpack approach of like, I want to not bundle during development, like that could be implemented as a partial plugin, right? You could just write up a bundler plugin that outputs a single file for each input file. So you basically end up with, you know, you don't end up bundling anything during development. You could totally build that as a plugin. Yeah, it sounds like you've created like an ecosystem that
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yeah, really lends itself well,
  
  </p>
  <p><strong>Devon Govett</strong><br />
  yeah, I've been kind of describing parcel two as like a, like an application graph as opposed to like a bundler by itself, because bundling is kind of one thing that it does. The plugin system is quite powerful. And I've actually been experimenting with different things that you could build on top of On top of it as well. So like at work, we have a documentation website for our design system. And we want to show things in there. Like, we want to generate from like the TypeScript definitions. Like, here's, like, here's all the props for each component, and all that kind of thing and render that on a page with some custom UI. Now, there's a lot of documentation generators out there that will kind of try to do this. But you're kind of stuck in most of them, you're kind of stuck build with the UI that they give you, right? And so if you want to build like some kind of custom UI around that, it's pretty difficult. So yeah, I've actually been experimenting with building like documentation generator on top of parcel. You can kind of think of like the whole pipeline as like a big MapReduce kind of over your over your asset graph, right? Like you've got, you've got input files that come in, you build all that up into a big graph, and then you combine them together in some way and write them out. Right, that's kind of the whole pipeline. So with documentation, it's really just a different way of doing that. Right? So instead of compiling your TypeScript to JavaScript, you take the TypeScript and convert it to some data representation of of those types, right? And then you've got some piece later on that combines them together into like a, like, here's all of the all the data about your types across different files event. And you've got kind of a documentation generator, and then you can use that to feed into your site generator or anything like that. So yeah, the plug in system is quite powerful. And I think we're only kind of scratching the surface of what it can do. That's really exciting. Are you going to be encouraging more open source to be adding to it, I guess, now that you're extending that more? Oh, yeah, absolutely. I think. I mean, I'm really excited to see what people build with it. I think we're definitely gonna like that documentation thing that I was mentioning. We're going to try to open source that at some point, and hopefully, that'll
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  kind of give people an idea of what you can do. I'm curious, I don't know Gustus. If you Using parcel at Twitch, but I know we're not at Netflix be actually curious to hear sounding like Adobe and Atlassian. How are you all using and leveraging at work? I know obviously the three of you working on parcel actually helping contribute back. But when you're using it as more of a tool at work, how does that look like? What is the setup look like? extremely
  
  </p>
  <p><strong>Stacy London</strong><br />
  simple.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  I guess is a good word. I mean, hold on. Are you describing something in technology is extremely simple.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  If you needed a quick description of parcel, I think simplicity just yeah, says it all.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Definitely. I mean, it's relative simplicity, right?
  
  </p>
  <p><strong>Stacy London</strong><br />
  Yeah. Yeah, I guess like as an example, I was working on. We have like an existing internationalization side of things, basically extracting strings out of the app to be translated and then imported back in and that was using, you know, Webpack to do to create those bundles and to create Like a manifest file and just the, it's a small one, it's a one line call to parcel to say, you know, built, build these things. Here's the input here, the end, here's the inputs, the entry files for it and just build it. So there's just it's very simple. It's very simple to use and to, to transform that from Webpack to parcel was, was really straightforward. So that's, I guess, one example of like a thing that, you know, I did to kind of move something off of Webpack. And it was, it was really easy and seamless.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  And I think one of the one of the like, bigger moments we had, as we were porting Bitbucket over from Webpack to parcel was one of the I think may I was probably may it was kind of the this first happened when may have built Bitbucket after, after building it again. This is essentially a zero change, incremental build and a built in I don't know it must have been less than five seconds or something. And this is some That took for a production build with Webpack and running through, you know, tercer. And everything was on the order of minutes. But because that five seconds was essentially spent in examining the state of the world and the cache, realizing that we had nothing to do, and then successfully exiting the program was, I don't know, it was just kind of like one of those moments of like, wow, we've actually like, this is a pretty big moment for us.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Yeah, that's pretty impressive just to see that fast. Like, that's, that's amazing. Anytime that you're developing, especially on a large project, like Bitbucket, just being able to see it go that fast. I'm sure the team all was thinking, thanking me for that.
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  Yeah, I mean, that's mostly in dev right now. We're working on being able to do that in ci as well. And this idea of a shared cache, so not only you're not building things that you've built before, but you're Not even building things that your teammates have built before. So that's not a reality yet, but something I'm excited to get to.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Yeah, that's something. That's something we're taking inspiration from other compilers and bundlers out there. So Google has a tool called bazel, which is the public version of their internal blaze program. And Facebook has Metro, which which powers bundling for React Native apps. And both of these have a feature called remote cache. And essentially, in the simplest case, it's just a matter of using HTTP to publish and retrieve cache artifacts for things that have already been built, or things that have just been built. So essentially, replacing the, like the cache get and set that we have on local disk was something that lives on the network. And yeah, so that's something we're exploring in the near term. Future. So you know, somebody starts on their on their first day on your team. And you know, they run parcel. And all it does instead of going in, you know, using Babel to transform your files going through and re bundling the app, and spitting out output files, it's essentially just downloading artifacts that either another coworker or ci system has published into, you know, a remote server that you have on could just be an s3 bucket could be a local server that you're running on your network. And it's just downloading artifacts that have already been built before. So that's kind of part of this multi tiered cache strategy that we want to have in the future. Right now we have a disk cache. But we want to have, we want to be able to share contents in memory as well. So essentially, there are there are there are layers of, of, you know, closest in response to this responsiveness, kind of mirroring Like your CPUs, l two cache and your your, your tertiary
  
  storage on disk, and then your RAM in the middle.
  
  So this isn't this is something we're really excited about in terms of, you know, extending parcel, not just you know, from from small puppy apps but to something that scales up to beyond the size of something like Bitbucket.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  So at Adobe, we've got a bunch of different apps using using parcel now. Which is cool. Yeah. You know, at big companies like that. It takes a long time to push change, for sure, especially if the if the, you know, the tooling isn't coming isn't being mandated or coming from a central place. So that's certainly the case at Adobe. But we got a bunch of different apps running parcel one, and some of them are migrating right now to parcel two. And we've seen some pretty good, like, bundle size reductions with that. A couple of things that parcel two is is doing over parcel. One is that we we have like, tree shaking is turned on by default now. And like, thanks to some of our contributors like Nicholas, on on our on the core team has done a huge amount of work on making that, like reliable. And so that's really exciting. And you know, so like, unlike a bunch of other bundlers, like we even do tree shaking for common j s modules, not just ES modules. And and that can have like a pretty big effect, when you take into account that like most of the modules on NPM are still common j s, or are compiled from ESM to common j s before they're published, right. So when you take that into account, like the fact that we're able to appreciate common GS is like a pretty big deal. And the other thing is the work that we've done on on code splitting In parcel two, so I think well, Will's done like tremendous work on this, in particular. And so now, what happens is, you can, if you have like a module that's shared between multiple bundles, it can be automatically extracted out into its own bundle, which means that both of those original bundles kind of get smaller. And you're able to cache that shared shared bundle, independently. So it kind of when you navigate between pages on a site, if you've got react on all of them, for example, you know that that bundle doesn't that module doesn't need to be reloaded, every time you navigate just the just the new just a new contents of the, of the code for the for the page that you're navigating to. So that's really exciting. And it's kind of completely automatic, which is really cool. You don't have to configure anything about like, Oh, I want to extract react or I want to have my vendor bundle are these kind of things that you've often had to do before. It's all kind of automatic. And so that's really exciting too. So like, at Adobe, we had one application that we saw like a 23% size reduction on the initial bundle, like page load. So like that's pretty, that's a pretty good improvement over over the previous previous app. So like the team was really excited about seeing that. So that's pretty cool. Let's see. Another thing we're doing is like, parcel is also like can be used to build like libraries, as opposed to just applications. So we have our I mentioned our design system a few times. We've got like a typical like monitor repo set up in there with lots of different packages and everything. And one of the cool things that we added to parcel two was this ability to just run parcel build, like packages slash star or whatever, and it goes in it'll, it'll go through all the packages in your in your mono repo.
  
  Unknown Speaker  
  We got a drink Cheers.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Didn't we changes? 
  
  Are wedoing both. Okay, 
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  I think we're doing both 
  
  I should do too well with config after I didn't, every time so
  
  </p>
  <p><strong>Devon Govett</strong><br />
  yeah, so you can run parcel build packages slash star and it'll go through all the packages in your mono repo, look at their, like source, like their entry fields in their package JSON and everything and, and their, their outputs in their package JSON, like you've got your main and module and all these different fields that are in your package JSON that you want to build to. And so it'll just go through all those packages. And you'll end up with like a common j s version for each package along with an S module version and all the smaller stuff kind of just with one command. So we've been using that for our for design system, like publishing all the packages for each component and everything as well. So it's kind of a bunch of different things. We're doing 10 drinks.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yeah, I think he said it a few times. 
  
  </p>
  <p><strong>Devon Govett</strong><br />
  I must have said it a few times.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  package for good measure, you know, cheers.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Devin, have you talked about how we're using package JSON for configuration?
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Have you taught cheers and cheers?
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Yeah. So before we get into pics on this episode, I would love to hear I mean, I'm pretty convinced that parcel is a great way to go. But if you were to give one piece of advice for someone that wants to move to parcel, what's the one piece of advice that you would suggest to someone moving to parcel?
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  That's a good question I would probably say, and this is this is easier said than done and certainly harder in certain circumstances. But I would say embrace the native web. If you build your app against the the primitives that the web gives you. Using the native web worker constructor instead of a
  
  web worker plugin for your bundler
  
  or using some kind of special notation like magic comments or something like that to rely on behavior. From your bundler, I would say, to the extent that you can embrace the native web and the way the web does things and parcel will meet you halfway there.
  
  And actually, most cases will meet you all the way.
  
  </p>
  <p><strong>Stacy London</strong><br />
  I think for like teams, like, I know, Devin mentioned, like, you know, at bigger companies, maybe it's harder to switch something if you've got, like, you know, something that's real popular in the company or mandated, you know, and in the tech stack or something. I think one thing that will help any, you know, almost with any technical decision that you're trying to make is to convince people is to show the, to show the value of what what the tool does and what it brings to the team. So if you say, I want to just use this new new bundler, new packager, why, and if you if it's just because it's a new thing, that that's not a good story, you have to, you know, describe the benefits and if you can say Oh, developer productivity is going to go up because, you know, those rebuild times are because of the cash or wave. It's faster. And it's going to save developers all this time is there is they're building out new features. That's the story that's gonna, you know, help help you convince people, especially like leadership management, and that kind of thing to say this is worth your time to swap.
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  Yeah, I think those are good answers. I would just say that Yeah, like larger projects that are kind of kind of show that they what tools they've been built with, it's going to be harder to move to parcel. I think it's going to be much easier if you've got like a small project that you're just starting out with or like a larger project that doesn't have many beholden things, to what tools it's using.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yeah, for sure. If you're building kind of a new, a new like kind of Greenfield project, where you're just starting like it's a good opportunity to try new tools. In general, just not even just parcel like just in general. Just try try new things. And you might be surprised that you like That you like them, right? Or that it makes your life easier when you're starting out. And, you know, like a lot of like, well was mentioning, like all these things that were tied to specific tools before. Like the whole worker plugin thing or all that all that kind of thing. And you know, there's lots of like Webpack plugins or things like that, where that where you're, you know, doing you have Webpack specific, you know, syntax in your code, right? And parcel like tries really hard to avoid those kind of things. So, like, we're trying not to lock you in, which a lot of other, you know, tooling can't can't claim, right. So I feel like, what's the risk and trying it if you can move off of it, if you don't, if you don't like it, or it doesn't work for your project or something like that? We think it will. But, you know, there's always a chance that something else is going to work better for you. So give it a go and see how it goes.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yeah, I like how you mentioned, like starting with a Greenfield project, like almost every company has a documentation website. You could use Like start with that. So maybe when you open source that awesome ducks generator, we could just use it and stuff. And and I also want to like super plus one what Stacey said, like really communicating the pros and cons. This one might be a little tougher but what I've seen a lot of engineers do when they want to propose really large technical solution changes is they put up a dock on like a migration strategy that can be pretty involved. So you might want to work with someone but if you can, like outline what the changes would be or what the path forward is, I feel it takes a lot of risk from leadership's and of like saying Okay, I understand the pros and this is the work that's needed and then you can kind of like paint a path of when you how you can do that
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  right on all really great advice to start using parcels. I hope people are excited for parcel two, but also just excited to try it out if they haven't yet. Well, let's move into pics. In each episode we like to share things that we've found Interesting with our listeners.
  
  </p>
  <p><strong>Stacy London</strong><br />
  Stacy, you want to start it off? Sure. I've got two picks today I've got the first one is a song called unreal by Sun glitters. But it's spelled with all the letters repeated a bunch. And it's a Luxembourg base, you music producer. Kinda like downtempo electronica, that particular song is kind of movie soundtrack like. So I like like that one. It's good for good for coding. And then the second one is a song called breath taker by dziadek. It's been described as vaporous, synthpop. There's lots of layers going on in that so it's really good with headphones. It kind of reminded me at first, a little bit of postal service if you've ever listened to them a while back. Yeah, so those are my two picks.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  So I have two picks. One is show on Netflix or will a movie on Netflix called the half of it recently came out it was directed by Alice. Woo. I just thought it was a really really good movie. I could give you like a plot summary of it, but I rather maybe just just watch it. Just watch it. I just thought it was it was a cute Okay, I'll give you it's a little romantic kind. It's all love story, but, but yeah, I think you should watch it. I thought it just had so many good things about it. I won't spoil what it's about. And then the second. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  I love that you didn't give it a description of it. I want to now go watch it.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  That's the best way you know, drive curiosity. And then my second pick is actually a shirt. It's a parcel on parcels website. There's a parcel t shirt on cotton baru and oh my gosh, it is the cutest frickin logo I've ever seen. It's this cat in a box. We've actually given a shout out to cotton berry It's a T shirt website. But they have really great shirts. But yeah, it's just so adorable. I like opened it. I was like, Oh my god, I want that shirt.
  
  </p>
  <p><strong>Devon Govett</strong><br />
  We'll have to do another another run soon. Yeah, that was designed by my friend Tim Kim. So shout out to him
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  right on. Well, do you want to give your pick? Sure.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  First of all, I think you might want to try like an AB test at Netflix, where you just hide all the descriptive text about an entry.
  
  I like that. Yeah, I don't know. I'm interested to see how it goes.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Or maybe like me not well, I feel like some people would want that.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  Yeah, I mean, my first is just kind of like a piece of advice that I'm sure May I will call me out for not following very well. But that's not if you're in the tech industry right now. In this kind of strange place strange time. In this world. There's a good chance that you are fortunate enough to be working from home right now. I would just say, we're to urge you not to conflate not being in the office with not being at work or not working. Just because you're you know, you're holed up in maybe your home office. If you're lucky enough to have one all day, or hunched over your laptop on the kitchen table, you're still at work. So I would just urge you to take some time away, like, PTO still exists. Despite you being in your house all the time. You know, your lunch break still exists. You can still play Animal Crossing during your lunch break. It's totally okay. At least for me. Yeah, so that's kind of my first one. And second is a little tool I'm using on my VPS virtual private server called Doku. If you want to deploy like a hobby app or a blog or something like that, you can go in and you know, manually maintain some nginx configuration and manage processes that way. You know, if you want to go old school, or you know, you could go and get your like PhD in Kubernetes or something like that, and, you know, like waste weeks. Sorry, not waste their learning, but you know, invest weeks of your life into, you know, getting your little static blog up or something like that. But there's this, there's this tool called Doku. And it's it, I think it started out really as a collection of shell scripts. It's written a lot in go these days. But it's great for a single mode. You know, you've got your, like, one VPS, or whatever. And when, when you push up to it, it works a lot like Heroku. There's like a, I think it's a post receive hook. In get goes and determines the runtime of your app goes and builds a Docker image just for your app. And this is all happening as your get pushing and then deploys it and then the good push will succeed or fail, I believe based off of your deploying, it'll go, it'll do, it'll like start up a second image, and then cut over the traffic for it. Once it's up and going, it's really great. You can, you can still define a Docker file if you really want to, or you can, you know, if you have a node app, you can just declare your node version and engines and we'll go and download that particular version of node, install your dependencies, run yarn, all that kind of stuff, run, run any, you know, web pack or parcel builds you've got and then deploy your app. It's to me it's a really nice sweet spot for for small hobby projects. Oh, yeah. And one of the greatest things about it is there's a plugin for it for Let's Encrypt. And it's like, ridiculously simple. It goes in and manages setting up a web server to you know, do the the handshake with Let's Encrypt to get you a valid certificate. It manages like the cron recurring cron task for, for renewing that cert. It's it's really, really great. I would encourage you to try it out. If you have a small you know, hobby. pvps
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Mia, what do you have for pics
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  do a music pic today, two albums that I've been listening to recently. First one is the artists as well hada which is Reggie Watts and john Tejada, they put out an album end of February called Don't let it get you down. It's put out by the brain theater record label, which is also the same label that put out the next album, which is thundercat it is what it is.
  
  So yeah, I've been enjoying those recently.
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  Devin, what do you have for us? Oh, yeah,
  
  </p>
  <p><strong>Devon Govett</strong><br />
  so since we've all been trapped at home, one thing that I've kind of I did when we started off the quarantine was buy a coffee machine, like a nice espresso machine cuz I used to go out all the time to get coffee. Couldn't do that anymore. So highly recommended. If you're a coffee. drinker get like a nice, a nice machine, it's worth the investment. So I got the Breville bambino Plus, it's just a kind of it's very compact and small. And it has like these really awesome features on it like it'll auto clean itself. And it like automatically steams the milk to like a perfect like temperature because it's got like a temperature sensor on the bottom. So you just put the little jug thing underneath there, and it automatically senses when it should stop. Really awesome. So I highly, highly recommend checking out something like that if you're a coffee drinker. And the other one is kind of a tool that I've been liking recently. It's a ticket UI. So there's a lot of these out there for using get kind of with a more visual interface to get x and even I think GitHub has their own now, but I've been liking this new one called fork recently. It's a really interesting Really nice app, I think it's available for both Mac and Windows now. And yeah, it like my favorite feature of it is the, like interactive rebase feature, which I always had to do with like a terminal before because like I couldn't, I never found like a good UI for that. But this thing is really awesome. You just drag like a branch on top of another branch. And then it like this modal comes up and you can just choose like to you know, pick or dropper whatever the commit each commit in that with like, a nice visual interface as opposed to like having to be dumped into your terminal using them and then figuring out how to exit it, you know, so, so yeah, fork. Really nice. Get UI. Those are my
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  picks right on and I got I got a plus one on the Breville. It's a really nice machine. Well, I have I don't have the same one. Mine doesn't self clean. Like that. Sounds awesome. It's pretty fancy. Yeah, mine is mine's a little larger than the compact one. So maybe it's like oh, we don't know how to figured that one out yet for self cleaning, but I want that feature because I do make a mess even making my espresso. Alright, I have two picks I have very similar I feel like I've been trying I feel like some people say they have all this extra time. I don't know that I actually have all this extra time in quarantine. Maybe a mix of both but I have been fine and watching more TV and I started watching Kim's convenience. I think it's a great just nice, easygoing show that's really funny. It's about a Korean family in Toronto that owns a grocery store. Just really nice easy watching, I highly recommend it. And then I signed up for master class and found there's a lot of interesting things that you could be learning if you were actually finding you have a lot of extra time there's like cooking classes there's I watched a couple like photography courses. There's like business courses. There's there's some really interesting courses on there. By Some really famous people that taking the time to put that together you can learn how to be a DJ from dead mouse if you really want to be. I've got a bit of lag and I'm like waiting for Stacy's reaction. All right, well before we end the episode I want to thank me a will and Devin for joining us. It was really a pleasure having us and and just sharing a lot of great knowledge on parcel. Where can people get in touch with you? I know there's going to be more questions for all of you. Where can people get in touch?
  
  </p>
  <p><strong>Devon Govett</strong><br />
  Yeah, I'm Devin covered on Twitter. And if you want to learn more about parcel parcel JS org.
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  Yeah. I'm Padma PhD, Ma, I A on Twitter and GitHub.
  
  </p>
  <p><strong>Will Binns-Smith</strong><br /> 
  I'm w Ben Smith on Twitter and GitHub. It's web I double n double SF myth. Yeah, and actually one one thing I just wanted wanted to shout out really quick at the end. I know Devin mentioned Nicholas in passing. But both Nicholas and Jasper is another Member of the core team just do incredible work. And like we we wouldn't have, we wouldn't be representing half the stuff we're here representing if it weren't for them. So I'm really grateful for their contributions and this is 100% of team effort. And we're an open source
  
  </p>
  <p><strong>Devon Govett</strong><br />
  project of course. So go Come and contribute. We have you know, plenty of issues on GitHub for people to work on and I think there's a good first issue kind of label on there as well for people to check out if they want and yeah, I mean, you mentioned Nicholas and Jasper there and so we we pay them as well through open collective so if you want to help support our work, open collective.org slash parcel
  
  </p>
  <p><strong>Ryan Burgess</strong><br /> 
  right on Thank you all. That's great. And thank you all for listening today's episode, you can find us on  <a href="https://frontendhappyhour.com">FrontEndHappyHour.com</a> you can subscribe to us on whatever you like to listen to your podcasts on. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> any last words config
  
  </p>
  <p><strong>Maia Teegarden</strong><br />
  packet package
  
  </p>
  <p><strong>Stacy London</strong><br />
  all the things Cheers. Cheers.
  </p>
  `;
  return transcript;
};