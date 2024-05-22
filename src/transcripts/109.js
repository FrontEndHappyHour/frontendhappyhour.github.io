// Episode 1 transcript
module.exports = function() {
  'use strict';
  const transcript = `<p><strong>Ryan Burgess</strong><br />
  Welcome to another episode of the front end happier podcast. In this episode, we're joined by Chris and Jason to talk with us about web performance. Chris and Jason, can you give us a brief introduction of who you are, what you do, and what your favorite happy hour beverages? Who am I?
  </p>
  <p><strong>Jason Miller</strong><br />  
  A question I've asked myself anytime. I'm Jason Miller. Underscore develop it on Twitter. The non underscore develop it on Twitter is a woman in Australia who makes jewelry. Great jewelry, by the way, ad for her. I believe she's also in tech too. So there's lots of interesting crossover there. I have not on the list yet. So I'm on the Chrome team, Dev rel, and I work on some things relating to web performance. Some things relating to JavaScript performance, and then some other things relating to just general performance.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  trying to think of what else do you do anything besides performance? Nope.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  says everything today.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Yeah, pretty much performance artist. That's what I am. This and street art. That's it? Yeah, I am. Most people will will potentially know me from preact. So that's, I guess my claim to fame.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Awesome. And what's your favorite half care beverage?
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Oh, a gin and tonic, healthy, poor. It's a lot more in this than you would
  
  guess.
  
  Unless you're an alcoholic, in which case? Not enough
  
  Cheers.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  All right, Kris.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Ah, hi. Yeah, I'm Kristopher Baxter. I'm a software engineer at Google, I think is my official title. I never remember anymore, but what I tend to work on so I work on high level objectives to try to make the web better, that sounds really generic. So I'll give some examples. One of my objectives is to make the internet 1% faster every year for all devices and all sessions. So a lot of that work means working with frameworks, working with individual teams or working with domains that happen to be outliers or slower at certain things. And it also means working in standards as necessary or working on network level things if that's what's needed. So whatever I need to do to make the internet 1% faster every year, that's my job. My favorite happier beverage would definitely just be plain old beer. I love beer. I think it's like the greatest call beverage in the world. So that that is definitely what I'll be happening.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  All right, well, let's also give introductions of today's panelists. Mars, you want to start?
  
  </p>
  <p><strong>Mars Jullian </strong><br /> 
  Sure.
  
  My name is Mars Jullian. I'm a senior software engineer. in the Bay Area and all thoughts are my own.
  
  </p>
  <p><strong>Stacy London</strong><br />  
  I'm Stacy London. I'm a senior front end engineer at Atlassian and all my thoughts are Mars's 
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  My name is Brian Holt. I do not work at a well known vacation rental company.
  
  </p>
  <p><strong>Mars Jullian </strong><br /> 
  Thanks Brian.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  Stacy's and I'm
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcasts. We'd like to choose a keyword that if it's mentioned at all in the episode, we will all take a drink. So what did we decide today's keyword is speed? All right, very soothing. So if we say the word speed at all in this episode, we will all take a drink. All right. Well, let's dive right in. I'm very curious to hear everyone's thoughts on why is web performance so important these days like you You heard, Jason and Chris really in their introductions really just talking about only performance. So why is it so important? One engineering manager at Netflix told me that I had to really work worry about it. And so,
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  you know, ever since then, and then I went to LinkedIn. And I had this other ad manager that I talked to. And he just kept talking to me about web porn. So just based on those facts alone, I guess it was important.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Sounds like some good people to listen to Brian.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Yeah. Well, guess what, Brian, we brought him here today.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  For those that are, who are not briefed on this, I worked with Chris at Netflix, and then we work together again at LinkedIn. And then he abandoned Microsoft on me. I think it's important because I mean, there's there's a whole slew of reasons probably the most important to me personally, is that web performance is making your website accessible to everyone or at least more people, right? If you write heavy websites, it's not accessible to people on crappy internet crappy devices. I mean, not even crappy, even moderate ones. Right? So making it accessible to the general populace is for me the most important reason there's a bunch of other reasons like making money in bullshit like that. But you know, that's why I think it's important.
  
  </p>
  <p><strong>Stacy London</strong><br />  
  Yeah, it's user experience. That's the whole reason we build anything we're not we're building it for people to use. And if it's not fast, and they're having a crappy time, like, doesn't matter how beautiful it looks or how features you how many features you have, if if it's not fast, people are going to be upset, or they can't use it, and then they can't do what they need to do. And some of that's really important stuff like, I don't know, like banking or things that you know, give them access to things that are online government services, things that are really critical to people to be able to do so. Yeah, very similar as Brian. And also
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  just thinking of it, even from a device perspective is everything's going more and more on the mobile device. And I think about that, too, is just trying to deal with your connectivity, whether it be low latency, anything It can be happening on on a mobile device. Definitely inborn.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Yeah, I think I really like the idea of access to information for me when performance is about the ability for people to be able to access the world's greatest resource, which is the internet. If you limit access by making it behind paywalls or behind really expensive devices that are unmaintainable or even just great network access, my network connection here at home on when I'm not on Wi Fi is atrocious. And I wouldn't be able to access a lot of the websites that I think are important for critical information.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  I feel like my rhenus reason is
  
  unfairly selfish. Since everybody went with the lovely and absolutely true sort of first tier there, which is making everyone making it so everyone can access stuff. have sort of had to con myself into that empathy, or at least into feeling that empathy more directly.
  
  Which is
  
  I have a tendency to when and is not full, nationwide locked down, work out of coffee shops and in environments where I am intentionally constrained, I will constrain as many resources as I can to show distraction as if I'm honest, as an ADHD mitigation technique. And so for me, when I'm working in that mode, and I need access to a resource, and that resource is behind six megabytes of JavaScript that I can't get to download ever over the life. You know, I that is that is a frustrating experience. And, you know, I guess it makes it a lot easier to understand how, you know, for me, that's a temporary thing. I can leave the coffee shop or I can turn on LTE on my device and usually get a better experience. Unless I'm in another country, but for a lot of people like that's it, that's the only option that there is. So like, do you leave your browser running for a day to download a web page? Or do you just not do the thing that was going better your life?
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Yeah, I can't imagine just letting it sitting there waiting for a page to load. Just like I'll come back tomorrow. It might be a loaded dial up. Yeah, it was Oh, it just, yeah, it really was. And, yeah, thinking back, we cannot go back to those days. It's just It's impossible.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  I had one of those free internet providers. When I was a kid, when we finally got a computer where it's like, you watch there's like an ad bar at the top of Internet Explorer zero, or whatever it was. Or MSN browser when that was a thing. And so like for us, like you got your 10 hours per month, and that wasn't my 10 hours. That was the family's 10 hours. So that was like that experience still sticks in the back of my mind, like the whole setup process to get onto the internet. I'd have to make the decision, like, is this something that I can do inside of Encarta? Or do I have to like, set up internet to do this thing? Oh, man, those days? Yeah, your thoughts
  
  cyclopedia on CD ROM,
  
  </p>
  <p><strong>Stacy London</strong><br />  
  get off the internet, I need to get a call
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  on the floor.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  This remember that 300 baud modem that we had when I was a kid and listening to the dial tone over and over and over. Because it wouldn't connect the first time someone called or whatever else happened, you know, and, and so then you lose your connection. And that six megabyte JavaScript payload would have taken a week to
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  magically show progress bar in your browser. At that point, it was green squares going across.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  But you know what, I bet you that site was so worth it. After six days of downloading, I'd also be interested, we've moved past that now and we've said okay, performance matters, and we can't wait days to download. What are tools that you are all using maybe in your companies or even just day to day what tools are using to measure performance?
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  I guess, Pat that are Google friends on the back lighthouse is a really nice tool to use.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Yes. Plus one on that. I'm a fan. They didn't pay us to say that either.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  They just made it really easy for us to say that.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  Yeah. So I use lighthouse probably most of the time. I guess just developer tools in general.
  
  I use the tools built into like Webpack and
  
   parcel and whatever, you know, bundler I'm using to make sure that my my payloads are staying small. The stuff that came out of LinkedIn from this, that you know, the same asshole manager at LinkedIn CSS blocks, I mean, that stuff's pretty cool as well. Chris, what why do you get your fingers on everything when it comes to performance?
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  I can't help it. It's like every time I see any problem at all, all I can think of is how can we make this a web performance problem
  
  Bad it's a bad thing to have a character trait.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Chris, you just sent an impatient person, you just need everything faster.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Absolutely. But I'm it's funny when I do local development on my machine, Jason can attest to this my battery on my laptop last about 30 minutes. And the reason why is I run all my browser tabs in 10 x CPU simulation, like slowdown mode, and I throttle all my networks to low end 3g, for anything I'm developing. And the reason why is if it's fast there, it's fast everywhere, right? Like, works here. It's probably really fast there. Unfortunately, I started getting a faster machines. And now I have to like crank that up a little bit more to get real, real life data closer to real life data. But it reminded me because you were mentioning lighthouse, and I think one of my favorite tools actually is webpage tests, which I use a ton of I think anyone who's interested Performance should go to a web page test slash easy. And you'll get a really simple interface for using webpage test and click the lighthouse Report button on it. And it uses a Moto G four. And you can set the network to what speed you want. But by default, it's a 3g connection. You put a URL in and you find out what it's like to load that site on that actual device. Because when you use lighthouse locally in your browser, you've got your local CPU horsepower capability, or some kind of emulation layer that's trying to emulate what that low end devices or middle range devices like. But if you use webpage test, you're on the actual hardware in the actual data center connecting to the actual servers. And you can it's really makes it really easy to understand and feel the pain of say that second connection to Google Fonts because he wanted a font that you didn't Post
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Oh, let's let's get on the web fonts. How are we not touched on that?
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  Fucking Google Fonts?
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Yeah, so Web Fonts suck,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  don't use them. You want to speed up your site, don't use them. There you go.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Think about web fonts is this it's this weird trade off. And like, I've spent way too much time recently trying to make Web Fonts fast for the series of metrics that just was recently announced. And there's this like weird trade off that happens with web fonts. So if you load them fast enough, but you still display the font before, and then it swaps over to a new font that causes the entire document to rerender. Right, that causes a the entire browser to have to repaint that surface and reflow that surface, typically, too. And that actually can delay input for users because the browser's doing work. So by showing them the flash of content as fast as you could with the old font and then switching the new font, you can actually make the metrics worse on one side and better on another side. By doing that, that kind of change,
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  we used to see like flash of unstyled text in those cases. But now even if you don't, that swap can be a little bit of dilemonade. But like flash of unusable page,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  it's actually blocking the input route point.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Well, so what's interesting is that like, for the time that the the installed font on the system is present and showing the pages generally usable, as long as the JavaScript or whatever else is there, right. But the browser can render it, it can parse it, it can, you can scroll through the document, because that's on a different thread. But the moment the font swap swaps over to whatever you loaded, during that swap, the browser now has to completely thrashed the entire document. And the more DOM elements you have and the more reactive providers you have, the deeper your context, the more expensive that transition is. The more time spent to actually display it again. And that time period, it goes into this thing we call rage clicks. So it's like, you go to access the document, you saw it, you go to click it, and nothing happens. You do it again. You do it again you do it again and then finally a their work but it's the wrong button because it shifted down because Chris, what's
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  the recommendation? What do you do web fonts, your designer friend is said hey, we need this great, beautiful font. How do you deal with that?
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  Tom? Comic Sans that's what you got 
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Comic Sans is the is the right answer all the time. I think that's that's the best web font in the world, but you have to load it over the internet. You can't use the local copy, of course, but now, self hosted fonts. You can get them from a provider self host them. And I would recommend using font display optional, not even font display swap. And the reason for that is if the font doesn't download in time, it won't swap font display optional. So you'll never have that rage click scenario. But you will have a scenario where that font doesn't render. The only thing to not use font display optional on our icon fonts, please use SVG instead. But if you are using an icon font, don't use font display optional. Because if it doesn't show up, then the user gets, you know, a queue. That means close right? Like how are they supposed to know that that cue button means close
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  any other tools that you've all found useful? Are there things that are even in your build system? Brian, you mentioned even the packagers parcel and web pack. Are there other things that you all have for monitoring, maybe the monitoring the speed, cheers, cheers, cheers.
  
  All  
  Cheers. 
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  I use lighthouse cia lot now
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I've only used it a few times, but found that one to be a useful one. 
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  So easy. It even has a built in server if you're as lazy as I am, here's my crappy static files and then it's just like it's a 91 it's always a 91 it for That perspective, knowing that it's still just a 91 might not be useful. But if it ever
  
  goes to 93, then I know
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Has anyone used page PageSpeed? insights? I actually think that's a pretty good tool to look at as well. The nice thing about PageSpeed Insights is it will give you data from Chrome sessions, real world metrics for your website, from actual users hitting your website. And not just lab data, where you're simulating what people are seeing. You're seeing real world data that way.
  
  </p>
  <p><strong>Stacy London</strong><br />  
  Speed curve is kind of like that to write
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  the law speed, yes.
  
  Cheers, chips. So the weird thing about PageSpeed Insights is you don't have to have anything installed on your site. It basically just exposes a bunch of data that Google has. And you know, obviously, it's exposing a very small amount of aggregate data about each site and you have to be a site that's like prevalent enough in that data set for us. To have aggregate data, but I always find it interesting like you'll do like a lighthouse run or maybe a web page test.org slash easy run, grab the White House metrics from there and then check in PageSpeed Insights, what the like, real world. You know, metrics are, and sometimes they're totally different, right. And it's like, you were using threading. And as it turns out, most of your users are on devices where your background thread ends up on a crappier core. And so lighthouse can't emulate that, right, and you're just going to get another CPU core or another OS thread. And sometimes those things can have like massively outsized effects, or even something weird, like screen size. If you like you always test your website, you know, in half your monitor. And so your layouts cost x. And then it turns out your users are like most users on desktops who are on desktops, and they have it fullscreen because I really just full screens or apps now and so everybody's rendering this huge either 20 dP or 4k And your metrics are not taken in that environment. So in the wild, your site behaves much poor people actually browse their websites fullscreen,
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  you'd be surprised.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I feel like people need to tweet at, sir. Even just me I want to know like, are you viewing websites at full screen? I'm baffled by that with the massive monitors, like you mentioned 4k. I can't imagine browsing, even if I'm doing nothing but just browsing. I can't look at it that big. So
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  as an anecdotal story, we rolled out a new design in the preact site in somewhere like September 2019, I had this angled, purple bar. And look, you know, we tested over multiple monitors, it was all responsive site looked great. And we got an issue, like a couple of weeks later, where somebody showed it, what it looked like on their screen at 4k native rays. And it was just like this awkward, like div that ended halfway across the screen at a tear Why I would never test test what this website looks like when there are 4000 pixels you could have put you could have put like three of the websites side by side.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  I would just tell him like you deserve that you deserve everything.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Design man
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  designed to punish you
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  just letterbox it just blacked out.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So Jason, you kept bringing up metrics. Obviously when we're, you know, looking at various tools to check page loads, speed, cheers, tears, what metrics are important when you're thinking web performance.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  So one of the ones that I'm interested in right now, and I'm cautious about this because I'm terrible at explaining what it is, is called the cumulative cumulative layout shift. And essentially, what it tries to measure is during the loading phase of a page, how much did everything jump around and move around? like we talked about rage clicks, one of the things that causes rage quit As for synchronous layout, one of the effects of for synchronous layout is there's a huge opportunity for the page to be here one second, and then somewhere else and other second, which is roughly as infuriating as the page being unresponsive. So CLS I kind of like, as a metric for trying to quantify the effect we see where you're loading a page, you get media server rendered HTML experience that sort of looks like the website, and might even be partially interactive, like maybe links are even clickable. But then once the JavaScript finally boots up, and it hydrates or re renders or whatever it's doing based on the tech in us. Everything just moves around. Like there's a sidebar now and all of a sudden the header is like in tall mode is a media query loaded. And at that point, like there are so many websites that fall into the bucket of like, you could argue it would have been a better experience to just have a blank white page or a spinner up until the point where the website Like what's actually there, because it's just a lie prior. So CLS is like, it's not like the only thing that metric is for. But it's one way of measuring like, how unstable was this all until it finally finished? Very cool.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I honestly hadn't even thought about some of that. So that was very insightful.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Yeah, there's a, there's a bunch of new metrics that the Chrome team just start speaking about, pretty heavily, that fall under something called core web vitals. And they define what the Chrome team thinks of as a good page experience. And the interesting thing about these metrics is that they are subject to change yearly. So what is defined as the metrics this year are set in stone for a year, but next year may change, there may be new metrics that fall in that category, or they might be tightened up or loosened based off of input from web developers and from real users. So that the other two metrics have fallen under core web vitals. Some mentioned cumulative layout shift. The other ones are first input delay. So first input delay is how long it takes for your site to be able to be interactive in a, in a sense from your input only. So if you have JavaScript, that's just pegging the main thread. And you're saying you've got a really big large amount of rendering going on during loading, then the site isn't you can't interact with anything, you've delayed that first input. So that first input delay needs to be less than 100 milliseconds. And then the second the the second one, or the third one, sorry, is largest contentful. Paint. And largest contentful. Paint is a little bit different than some of the other metrics we've talked about. But it's it's a heuristic based off of what the page looks like. It's when the page looks like it's painted enough for a user to think they could use it. That's the idea. There's math and science and crazy smart people that figured out a formula for that because I think I can't do that. But uh, but it's pretty cool. So it's like if you have a hero image on your page, it's when the hero image loads, that's CLS. And it's roughly works for like 99.999, bunch of nines of websites. And that needs to be less than 2.5 seconds. At the 75th percentile. I kind of like
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  referring to forgotten the acronym already. The third one
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  CLS
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  LCP fifth LCD, largest contentful. Paint, I kind of like referring to that as like, the new load. Right? Because like load was sort of useful if you were tracking metrics in the wild, just to know like, Hey, you know, when is the page done? But then we started building a lot more rich JavaScript based apps and done probably didn't mean when all the images were done, right. Or and so all of a sudden, like the semantics of like, deferred scripts, pushing out load of But async scripts, not pushing out the load event kind of seem a little bit arbitrary when you have an application that's controlling the script loading lifecycle. And so largest contentful paint is like, let's just assume that the load event doesn't matter, right? It's just like it might be pegged on some image from a CDN that is not even displayed. So LCP would be like, for the actual content that the user hopefully was trying to get to, when did it load
  
  </p>
  <p><strong>Stacy London</strong><br />  
  that used to be called like the perceived speed or like perceptual speed? Or is that like the same thing? Or is it it's different crazy, man. It's like crazy
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  smart math applied to that concept. Those people talk to each other.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  You can tell a lot of distance from this I all this is all just falls in the bucket like lies, damned lies and statistics, and then sort of something comes up. It's like that. That seems to work. Okay, let's use that
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  every time I talk to somebody works on those metrics. caveat, they're really smart people. But when they start talking, I can feel myself not being able to understand about 10 milliseconds into the conversation. Like, it's just like gut instinct of you're a lot smarter than I am. That's, that's pretty
  
  </p>
  <p><strong>Stacy London</strong><br />  
  cool. So what about TTI? timed interactive? That one seems to be good. People talk about that one a lot,
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  I would look at TBT total blocking time. Again, this whole new set of metrics, these metrics are going to change all the time. But TBT is designed to kind of give an indication of how long script is blocking things in total time interactive was is really hard to get right for frameworks versus generic web pages. Because web pages are multi actor, right? You can have three frameworks on the same page. When is interactive, when it like? Is it when all three are done? Is it when the one that's present above the viewport is done? It's really to figure that out. Whereas TBT is a little bit more easy to understand it's the amount of time it takes or the amount of time spent blocking JavaScript executed JavaScript executions. Yeah,
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  like the flow, I like to point out in TBT. And this is not it doesn't destroy the metric, but just I can use it as a straw person example is, let's say you're using a framework that delegates event handlers, so it registers them all in the document and then fires them into pieces of your application when they're registered. TBT just sees that you have event handlers attached and thinks, oh, it must be interactive. Even though the thing that's doing the delegating might not have access to the actual code that needs to run to make that piece of application function. So it's sort of it's the same thing as like, you could game the I think it was lighthouses ServiceWorker thing at some point by just adding an empty fetch handler, that's like, Sure, yeah. You're dinging the bell for the metric. So it's not a success story. I think TV had a couple of cases like that versus sorry. TTI had a couple of cases like that TBT it's like, take an average of the amount of work that was being done over over a certain period. And it, it will like, I think that the way it's calculated, if you have any chunks of work that are less than 50 milliseconds, it drops those because a less than 50 millisecond work chunk is not going to be bad enough that it will like disrupt clicks or whatever, like, you'll still be able to respond within 100 ish milliseconds. And so it's more like a sum of the amount of time in which the page would be less than desirably responsive during the loading phase. Yeah, and this 50 millisecond,
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  like threshold is kind of this magic number, but it's one that many frameworks have kind of pivoted around. So many frameworks are kind of splitting these like, big tasks into several macro tasks. So micro tasks live within macro tasks loop. If you have an event handler that comes in the macro task loop starts for that specific event handler, you could have hundreds of micro tasks inside that macro tasks. But if it exceeds 50 milliseconds as a whole, users perceive the delay. But what you can do and what many frameworks are starting to do is they say, we've hit this magic number, we've hit 50 milliseconds, roughly, or we, we think we're close to that number. So split out from the current macro task and open a new macro task in the future by using a post message or whatever else, and continue the work later, give the browser a little bit of time to respond to the changes that have happened during that calculation window. There's a bunch of other scheduling mechanisms in play there, too. But the idea is just be a little bit more generous with the time and it helps things like TBT total blocking time. And
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Chris, you'd mentioned just going to the frameworks. Is this a standard that they're trying to follow? Any JavaScript framework? Is it something That they're following to try and be that 15 milliseconds.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  I think in general, most frameworks are really aligned about making good experiences. You know, you look on on Twitter, which is a cesspool at times. And it looks like every framework author hates each other or, you know, their their cat fighting over silly things. Right. All right. But in reality in that fight framework, authors are actually pretty friendly to one another, right, because they all share common goals, which is to make good experiences for people on the web. So yes, a lot of them have aligned around this 50 millisecond time, but that's not because there's like an official standard, just based off of research that they've been, you know, that they've done or that other people have done kind of worked with them to help create this de facto standard. If
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  I recall, the 50 number comes from rail guidelines and A bunch of the research that predates real guidelines that got sort of absorbed into that, stating that we want to hit interaction response in 100 milliseconds. And so if you assume that your work is chunked into 50 millisecond chunks, you need a up to 50 milliseconds to receive the input, because you may have been blocking that entire 50 milliseconds, the breathing room for the browser to go, oh, there's an event, fire it in, and then another potentially 50 millisecond chunk to actually render some stuff and trigger layout. So one thing to keep in mind with that 50 millisecond number is technically it should incorporate time for the browser to do its layout work. So it's not always just about like scheduling userland code, it might be essentially scheduling your frame. And Funny
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  enough, this is where CSS comes into the equation for performance thing everyone thinks about JavaScript when they think about web performance, but CSS and the layout of your document can actually have a really big impact during runtime. Specifically, if you're using Something like grid, CSS grids are slow. They're very slow. They're very powerful and very interesting. And they provide a lot of functionality and features. But that is a trade off. And the cost there is that to render out a grid is far more computationally expensive than a Flexbox layout or a float based layout, or a static layout. And, you know, choosing the right tool for the right thing. And kind of picking the thing that works best for the given scenario lets you get better performance in the end. So yeah, you you spent 35 milliseconds, but because you chose to use grid and sub grid and sub grid inside of a sub grid instead of sub grid, blah, blah, blah, blah, blah, yeah, the browser needed 400 milliseconds to paint that, but if you just use float, it's five milliseconds.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Yeah. I'm so glad that you brought up CSS. I think that's one. You know, admittedly, I think a lot of us are really focused on JavaScript and thinking about how to make that performant and then Not really just thinking about simple CSS, like there is simple things that will make your site render a lot faster. And so I'm glad you brought that up. And the grid layout was a good example where I think it kind of comes down to trade offs too. And I think with performance that comes up a lot is you do have to make trade offs. There's things where maybe you need this certain grid layout. So what how do you best do that maybe a float isn't the best thing. I'm curious to hear, really from everyone. How do you think about these trade offs when you're thinking about performance, but also building layouts or building applications? No, no, I think it's a Chrome team problem to me.
  
  But then what happens when they use the Microsoft browsers?
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  That's chromium still Google problems?
  
  </p>
  <p><strong>Mars Jullian </strong><br /> 
  No, I just I think that's such a hard question to answer because I think, at least in development or product development, it's really hard to like take a look at the whole document and its layout so that it's up like it's working in a performant way. Just because you know, sometimes it's a fix on top of a fix on top of another fix, which is traditionally how it goes. So I think that like, not enough people pay attention to the performance of CSS, which is really interesting. But I also like this, I don't think this is the answer to everything. But I was reading about the CSS property the other day called contain, which is a way of optimizing. Jason and Chris are celebrating sort of like this cool CSS property that I just learned about which sort of tells the document like what parts of the layout affect other parts of the layout, or just one part of the, the document effects are only the layout internally. So there is like a performance optimization there but also can solve some like really tricky. bugs that I've found recently, like flex, you know, extending into other parts of the document, but I guess like, just in it from a product development standpoint, like putting a fix on top of a fix and also working on individual components like that. Contains CSS properties seems really compelling to be able to see now like know in context which DOM elements are sort of like their own separate units.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Yeah, if you are, let's say developing in isolation, like everybody has sort of gravitated towards with storybook and all these sorts of things where you know, you're working on your sidebar widget thing on its own, and then it's gonna get stuck into the page, you could make an argument that putting a CSS like contains strict or contained layout, one of those, you know, more stricter boundaries around that component is going to turn off the types of freebies, CSS layout easiness, things that a reliance on would cause performance problems. So like, you know, depending on the height of a widget in a stack of widgets to figure out the total height of the stack of widgets is expensive, and it gets more expensive as those widgets increase in complexity. So now, every sub grid that you add into your widget Orange all of your widgets ends up being layout complexity and cost that hurts the whole stack that they're in. And so contain theoretically, this is where I mean everybody said theoretically contained gives us a primitive for essentially taking like what it might even just be a product boundary. And saying here like we have an organization or product boundary here and we can rely on the fact that these people are going to define the height because they need to. And so we can not use implicit height over here or we don't want style leakage or you don't want you know, random stuff flying out of one piece of the site and into another piece of the site. One thing I will say about contain because this is something that is very near and dear to my heart contained does not have very much usage right now. And there is a cart and horse type situation chicken and egg burden egg
  
  There's an egg situation, basically.
  
  And the egg number one is, if there's no contains strict usage in the wild, especially contains strict, it's really the most valuable Bs, then it's very difficult to justify having browser engineers work on contains strict optimizations because they're optimizing something that doesn't exist, or just isn't used. And so we saw this, like, for a short period of time with some of the newer ECMO script features like, wow, these are amazing, but like, why would I spend two months optimizing rest spread if 0.001% of websites actually leverage this feature? And we've seen that eventually evolve, I would love for the same thing to happen with contains traits where we all start using it for maybe for product reasons, or for, you know, to sort of help us understand like, this is where the grid stops, and this is where this other boundary begins. And now browser engineers can sort of see the usage rising and go, Okay, good. Now we can unlock all those profiles. benefits, because currently, I'm only aware of two, they're actually implemented in Chrome. I don't think they're implemented any other browsers. The One is if you modify content inside a region that has contained strict that is out of viewport, whether that is for the document or for a sub region scrolled region, then it will not invalidate the scroll height of its parent container. So let's say you're using like overlay scroll bars like on the Mac. And you change some content inside of something that is contained strict that's scrolled away, you won't see the scroll bar flashback and it will spend the CPU time as well within the within the browser. Exactly. So like the scroll bar is just sort of like oh, it's really working type noticeable thing. And the other one is something that actually somebody I won't name names, but a company that really wanted this feature contributed this to blink, which is if you have a an element that has size Like it has a set width and height and has contained stretch set, and you change its text contents like the dot data property of its first child, and it only has one text child. And it has the same number of characters as it previously did, there will be no layout of the layout is bounded up the container storage container. So you can imagine if you had a giant data grid, like an Excel type thing, you would want that very specific feature because you want to be able to update text as fast as possible without causing any layout. So that that optimization exists. But I would love to see like all the rest of the optimizations that you can imagine with this, where it's like, Okay, I'm gonna do like, absolutely positioned the way out. And I don't want any layout cost unless I touched that DOM node. That would be the holy grail, I would use that system.
  
  </p>
  <p><strong>Mars Jullian </strong><br /> 
  So I work on a design language system. And after reading about this, like I want to apply this to every container of every component that we've ever created, because we have so many issues where we have products engineers that are like moving like negative margins on text. I have no idea what's going on here. This is a mess. So I'm looking forward to using it. I have to get the rest of the team on board. Hopefully,
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  please do use it. Because the more people that use it, the more that browser vendors can actually invest in it.
  
  </p>
  <p><strong>Mars Jullian </strong><br /> 
  All right, good to know, I'll bring that back to the team. That's that's like
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  a general thing. Like that same thing happened with JavaScript, right? Everyone transpiled all their JavaScript down to es five. That's why Yes, 2017 was slow for features, right?
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  It's not now by the way, just to clarify, like that situation has been more than remedied at this point. I've actually had to reconvince myself of that recently. If, if you haven't in a while, go and test how fast the new iOS features are. And
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  using a map is fast. Instead of doing weird, strange, complex objects.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Rest parameters are two orders of magnitude faster than arguments, access of any kind, even non be up in arguments, access speeds. You
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  can see what Jason and I talked about When we have conversations
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  so what you're telling me is I should go optimize all my code just for Chrome
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  know for Chris, optimize it for Chris turbofan script. Actually, so speaking of that, one of the so we were talking about like tools that we find useful for measuring metrics and stuff. One thing that I find extremely useful that is not technically a metric. And it's definitely not a, you know, metric that works in everywhere is a tool called df ticket. And you have to get is exposing information that VA already has internally. Basically, turbofan optimizations, and D optimizations. And it basically takes something that is fairly difficult to understand JavaScript, engine implementation detail, object shape and property access inline caches, and makes it super super, super easy to understand. Like it literally You see, like, there's a picture of your source code and there's like a red box next to the thing that's bad. And it says This is bad. This is when it got bad. And it will literally tell you like, this was the reason why I got bad. And so people like me can go in and do what it's very, you know, quite low level performance optimization, basically, using pictures of telephones next two periods in my source code to figure out where to spend my time. So that is hugely valuable if you are at the stage where like, JavaScript speed is your primary problem, which I know a lot of people are not,
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  it is not the problem for the vast majority of people. Like I think that the the general thing that people should should focus on is around the actual impact of their code, using the right tools for the right jobs. So instead of using a giant framework to build a static site that has no interactivity don't go use rail
  
  Unknown Speaker  
  at all, Chris, don't
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  Wait, did he say don't and then he told me to go use Ruby, right?
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  I really don't care what it is, as long as it doesn't admit JavaScript, like just use the minimal amount of things that you can to execute the same goal, do more with less
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  people will adopt a framework. And I won't name names, because literally, this applies to all of them without the framework for like a piece of the site, the header, and kind of follows the logical conclusion of like, Oh, we should do like a migration to this framework. And oftentimes, there are whole parts of your architecture that may not be perfectly suited to that framework, but they they kind of go along with it just for uniformity. And I feel like that's one case where like, if you're looking at the trade offs that you make when you're when you're trying to get to decent performance. You always want to be explicit. When you're making those trade offs. You do want to make a trade off that happened sort of organically as a result of earlier decisions. wasn't actually looked at in isolation.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So like, you know, you don't necessarily have to render your whole page using one thing. You could render the interactive parts of your page using that thing. And then stick with your current technology or choose a different technology for the surrounding parts or the other parts. I like that you as both started bringing up frameworks a bit, too. How do you think of frameworks in around the performance side of things? Obviously, a lot of people are using frameworks today. We talked about react, being very heavy, and then something called pre act got created. How do you all think about frameworks when it comes to performance? Well, I think we all prefer Inferno if we were talking about drop in replacement. Yeah, go
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  check out Inferno.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  And the other thing I was gonna say is, I know all Google engineers love frameworks, like yeah, that's, that's kind of their jam over there.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Yeah, we try. We have a measurement that everybody tracks and at the end of the year, the number of frameworks you've used, is it the multiplier for your bonus?
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  It also you also have to create chat apps at the same time. Creating arrays
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  or like the what was the one that Ryan Florence created the database access performing beam on? Yeah. Dyneema there it is. Yeah, that one's got just, I probably been drinking too much. I've just been throwing shade this entire episode.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That's purely normal man.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  True. I love frameworks. I think they're all great. That's actually not true. Some of them I don't like writing anymore. It's been great to see some of these larger frameworks like, like Ember, like Angular really take performance more seriously and break things down into smaller pieces and really have stronger considerations for the users without losing that developer experience. Like I feel like that's something gets lost in the shuffle. Like, for context, my entire job now is developer experience. And so I disagree with those ideologues to come out and say everything is about web performance. If you are not looking at your D Ops, then you are a piece of shit and you should let right like there there there are souls that the speaking such terms, but I disagree with that, because we all we have just a chip code, right? Like none of us are out there to like, try and screw over other people. That's like a really weird evil plan if that is your plan, but I appreciate like, again like Ember, like view, like react like react, right? Like all these frameworks that are out there. Like, let's make awesome developer experiences where people can be super productive. And will use the tooling will use patterns will use teaching to get people into performant. performance. It's my favorite made up computer science term performance webpages and applications and all that kind of stuff.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Yeah, to me, like the superpower of frameworks that kind of sometimes gets glossed over is you can write code that shouldn't be performant and then compile it or run it in a certain way and take its original representation and turn it into the thing that you know you would have written if you were the stickler for performance
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  and in reality Do you think rich? Is that right?
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Oh, totally. Yeah, like, like, do the thing that's easy. And then use magic to get the thing that was hard, right? It's essentially it's, you know, going back, it's putting a multiplier in front of your output. And so to me, like, that's the like the blindingly obvious future for all these things. It's like, you know, I hope that in 2022, or whatever I'm trying to pick a sufficiently far out date probably haven't done that. In 2040, in after the fourth reincarnation of the web, once it's died three times, then I hope that we are all focused on like figuring out increasingly high level offering formats that we can move to that give us more and more superpowers, and are based on more and more substrate of impressive kind of compiler, a logic that codify all of the learnings that we have from front end into something that we now don't all have to carry with us as baggage. Right? But somebody coming into the industry doesn't need to go through The gamut of like, Oh, you know, you should really like do this thing and that thing. Otherwise it's not a real web app. Like, that's a weird place to start. If you're a new programmer who should just be able to do a thing and have the result not be terrible by default.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  If you're trying to make the fastest thing possible, you'd write assembly, like, you wouldn't be writing web pages, you'd be writing assembly code instructions are there for a reason. They provide value, they let you move faster, they let you express your idea where you couldn't otherwise frameworks are vital to the web. They're vital to app development. They're vital to software engineering. So saying, don't use a framework is akin to saying, don't build it, right. At the end of the day, you got to use something to make you productive. The software engineering feedback loop requires gratification, right? You need to be able to get that feedback that it worked, I can go to the next step when you're having to build every single system from scratch. That feedback loop is much longer. just doesn't work for a lot of products. So you should definitely use a framework. But you should find something that matches what you're trying to achieve. Maybe your only user you only have one, and they've got an iPhone. And that iPhone is the latest generation, which I don't know if you know this, but the latest generation myphone single core performance outperforms most of our laptops by far. And if you look at something like even like a, like an iPad Pro, or some of the recent surface books without with arm chips that are custom silicon, they have multi core performance that's starting to get close to hardware is still accelerating. It's just not accelerating like it used to. And frameworks provide the ability for us to move fast enough to build things that people can use without us getting dragged into details every single time. Can you imagine not using prettier now to write your code now? Right? That'd be so painful, but maybe one day will be more like rust. Where abstractions pay are not really that expensive. There's so many obstructions in the rust language output that costs 00. And maybe spelt and other similar kind of compiler technologies will help us get closer to that end goal as well. But yeah,
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  use a framework, I would like to see people move away from it, like maybe maybe this started happening, I don't know. But like, there was for a time kind of a this fairly intense focus on like, it's just JavaScript, right? Like that was sort of the way that JSX was introduced and familiarize, it's like, it's the JavaScript you know, with a little bit of special dust or whatever, I don't know what to call it, angle brackets, but I would like to see us move to an assumption that like, for something to provide sufficient value as a framework as an abstraction, it is quite likely that it will require either extending a language or replacing a language or doing something with a DSL like it is that something limiting itself to being Just JavaScript is probably also limiting what it can do for you. Right? Like,
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  if you tell me to use Dart, I'm gonna throw something. just
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  compile everything right. We need the web's kotlin. No,
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  I thought for a second, they're gonna say we should use C sharp to build that. Well,
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  blazer. No, I'm just
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I mean, I think one thing when I think about frameworks, so too is they're overused when you don't need them for very simplistic static sites, too. I think there there are times when I'm all for it, building an application don't reinvent the wheel. But I think there's also times just do you actually need a framework, it goes back to our point of trade offs, and just thinking strategically about that, too. I love what both of you have already said about the framework.
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  Now there's a lot of concern around like amp does make the internet faster. And the other thing is like I trust malt, like he seems like a smart, nice guy, right? But it's worrying to turn on over that much control. So like, what's the balance that you see there?
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  So at least for me, I'm one of those people who kind of thinks about the web as having a document mode and an app mode. And so like, I find it easier to think about these things by sort of thinking about amp as like, a hope for an app mode or for a for a document mode that is faster because some assumptions can be made. So like, as it exists today, it's just like, the things that had to be done to make that without, without building new crap into the browser, you know, tries to at least live on the web as valid web content. I would love to see the eventuality, you know, we've, you know, specs in flight and various things underway to try and make these real, of like, figure out what the standards pieces are, that are the assumptions those those key assumptions that unlock a faster employer document web, and then popularized that. It makes amp a just one happy path towards hitting those goals using those texts. To study like, I would, I would love to be able to like, click a link to a news website and know that I'm not downloading a news app to present me an article that I am instead getting an article, right, I would like for those types of interactions to be that direct, and is currently a means to that end. But to me, that just seems like something that should become a part of the web. So,
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  caveat, I am a member of the AMP project. In case I know people.
  
  And you pick the right time to ask me since I've had a beer at this point about it the end of the day, the AMP projects goal is to make the web faster. And I know that probably sounds like I'm being a little passive about this answer. But But the reason the reason I'm saying starting there is that the technology and the implementation are not the important part. The important part is that the internet is faster, that people can use the web to access information no matter where they are, and no matter what device they're on, because there are parts of the world where the web is dying, and where the web is not a useful resource, where most of the information in a local community is locked up inside of closed app ecosystems, where you can't access it unless you download that hundred and 50 megabyte application. And I think that's the death meal of the web. Right? Like, the moment you stop using the web to access information. Why would you use the web at all? Well, that's not I don't think that's true, but a lot of people feel that way. So to me, amps, mission and vision is around, trying to make the web fast and better. Not necessarily the technology that is required to do that. But the the goal of getting there. And so there's a lot of things that the project does to try to get to that goal long term, independent of the technology. The first one is heavy investment in open source communities. So amp has been a contributor to Webpack roll up preact. Pretty much any open source technology, you're using Babel, we have members of the AMP team that are specifically working on Babel, mostly full time. And it's not something we talk about a lot, because it's not something that is actually core to directly making amp better, but it's core to the mission of amp, which is to make the web a better place. So long term, will there be an AMP format, probably, but it may not be implemented using the same technologies that it is today. And the things that Jason talked about things like signed exchanges. which will allow people to do the kind of magic things that amp does that makes it feel instant. But with any document. Those are really important for us to have on the web. We don't have them today. They're missing primitives that amp solved by being very conservative in what it allowed. And so I'm hopeful that long term that the web remains and in fact gets faster over time. And that your technology choices and as important about how to get to that goal. And that's why core web vitals exists. It's a benchmark for what is a good experience, you can use amp, and you'll probably meet that benchmark. As long as you have a good CDN in front of your site and you use optimization tools on your server, you'll probably hit it. If you're using a generic approach, you're very unlikely to hit it today. And that's just the truth of the matter for that. type of application that type of document. But long term, I hope everyone can hit it independent of their choice of technology.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Awesome. Well, that actually is a great point to jump into pics Who wants to go first,
  
  </p>
  <p><strong>Mars Jullian </strong><br /> 
  I can go. I actually have like a couple performance related pics today. One actually is an article by the same team, I think that developed the web vitals, which I think is like a precursor to the web vitals called user centric performance metrics. And what I really liked about that is I think it just like kind of turns the unit the time, I think it turned the idea of performance on its head, like it's not about optimizing our sites for faster to be more competitive, but it really defined like the technical metrics that we're using in terms of like user oriented questions, and I really liked that perspective. So I think it's stuff even if the web vitals now are sort of the new direction forward, I think it's worth a read. And then the other one is a tool for storybook actually developed at Atlassian called the storybook add on per per sorry, the storybook performance add on. Where if you're someone like me who works on individual components and not a product, like a design language system, for example, you can sort of just, you know, develop your things in isolation and have an idea of how they're performing by themselves. All right
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  on stage you want to go next.
  
  </p>
  <p><strong>Stacy London</strong><br />  
  Yeah, shout out to Alex Reardon and some of the design systems team that worked on that. worked on that. That's awesome that you're checking it out. See, for pics I've got I'm not doing music picks, which is shocking. I have the first pick is a performance pick. It's an article called the cost of JavaScript frameworks by Tim Cadillac. He wrote that in April. I hope I didn't steal anybody's pick. But I thought that was a nice write up but just about, you know, what kinds of sites are out there today? What frameworks are they using? Are they not using A framework and doing an analysis of the performance implications of that. So give that a read. I think the the TLDR of that is sort of what a lot of people in this episode have mentioned is, you know, just think about what you're trying to do and the trade offs and make the right choice for what you're what you're trying to do. So that's the first pick and the second pick. Let's see, how can I tie this into performance? How to optimize your society? With everything happening right now? I am choosing a book called How to be anti racist by ibram x Kendi. So in this book, can you weave together, ethics history, law, science kind of brings it all together with his own narrative, about how he kind of awoke to being anti racist. And I think it's good book to read even if you think that you're not racist because you that I think there's always an opportunity to learn and and improve yourself. So give that a give that a read if you have some time. I got
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  I got three today. They're very in line with what Stacey was talking about. One is a black owned veteran barbecue sauce company called mud sauce. I saw this tweet by Jerome Hart, Hardaway who was actually my next picks spoiler alert. It's, uh, I just got them today. And I tried them. They're fucking great. So if you need some barbecue sauce, it's it's pretty great. My next pick is drum hardware. It's charity that I'm on the board for which is vets who code I'm not a vet, but I've known him a long time and it's an awesome charity. So definitely donate to that. And the last one, I'm going to Shout out his black visions Minh, Minnesota. If you look, if you have some extra dollars to give away from your company that does match or something like that, that's definitely a good one. That's they're doing a lot of great stuff for the state of Minnesota right now. So, yeah, those are my three picks, but
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  the one that was stolen from me, but I'm really happy that it was mentioned, honestly. And that's vets who code. It's a not for profit for veterans who teach other veterans how to program and get jobs. Phenomenal. I think it's worth your time. And if you can help them out, you should. And then the second one for me was the article on core web vitals, which I think ties into the idea around performance as a whole. And these are kind of the the idea here is these are the essential meta metrics for healthy site. So if you're doing well on these metrics, you have a healthy site that users are enjoying for your content and not because they're frustrated with your performance.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  604
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  we got tired Oh,
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  doctors.
  
  So to our music, they are polar opposites of the musical spectrum, which does not exist. I'm gonna pretend that there is one. First is a song called you and me by mute. They are a electronic marching band. So take from that what you will second is a song called Juno by Tesseract. They are gent so you probably won't like it. Okay, so the non music ones. I searched and it hasn't been suggested yet. So if anybody is somehow not aware of ASD Explorer, it is a phenomenal tool, especially if you're if you're wanting to sort of learn and play around with asds. It is a great way to sort of dive into that and see in real time how things are working under the hood.
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Jason tends to have about 100 tabs of ASD explorer open at any time.
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  I have I use one tab so I have stored links to tabs that I've closed that I still need to get back to. And also 100 tabs of ASD Of course to open. Another one is the new bug fixes option in Babel preset end. If you are targeting edge 16 plus script tag module like modern module, no module bundle setup. This is basically just a free seven to 20% size optimization for your modern bundle, which is served to 90% of browsers. So it's magic.
  
  Go and turn that on. It's going to be on by default in level eight.
  
  The second last one is the furter Electric blackout blinds from IKEA. I'm halfway through installing these if you need blinds, they are cheap. They are ZigBee so they are extensible that you could cut them to fit There's really I have nothing negative that I can say about them. They're cheaper than regular blind lines are so offensive to Yes they are. So these are they started I think 130 bucks, and they're electric remote controlled and they can be operated via Wi Fi using Google Home or Alexa. So get them if you can, they're sold out everywhere. And so the last and most important one is everybody's probably already seen this. I only moved to the US recently and didn't have Netflix before. So there's a documentary slash docu drama thing on Netflix called when they see us about the Central Park five. Watch it if if you think that you want to be a sort of a moderate on the Black Lives Matter issue, and it will change your mind or it will reaffirm that you need to do something because it is shocking.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So good. It's it's definitely worth watching. All right, well, I'm gonna go a little direction different from all of you on picks today which is good. So I've mentioned that I listened to the heist podcast is what it's called. And I went and looked up one of these basically a gang that they've been talking about various times as the pink Panthers are really famous for large hice and I watched this video, which was pretty epic they the pink Panthers drive these two outies in to a mall and smash into a jewelry store and like just basically smash and grab quickly. And they're they're gone in under a minute. I think it was it was just impressive. So you can see all this security footage. It's an interesting little video. No one's hurt. So that's that's a bonus to pretty impressive. And then I'm going to pick a actual physical tool that I found very useful for running wires. I don't know if you've ever had to sneak wires. It's no fun. It's It's hard work. But I found a tool that's really useful called the gardener bender. EFT 15 Mini cable, super easy to use, and it just looks like a measuring tape but it helps snake wires through walls. So highly recommend that before we end the episode I want to thank Chris and Jason, thanks so much for joining us. You shared a lot of great information on performance. Where can people get in touch with you?
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Hit me up on Twitter twitter.com slash hundred underscore developer Chris
  
  </p>
  <p><strong>Kristopher Baxter</strong><br />  
  Yeah, same thing Twitter but not at underscore development. I'm at Christopher Baxter.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Unless you have rude things to say maybe
  
  </p>
  <p><strong>Jason Miller</strong><br />  
  Yeah, Director rude comments towards me.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  All right, well, thank you all for listening. Today's episode you can find front end happy hour on twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> could follow us on <a href="https://frontendhappyhour.com">FrontEndHappyHour.com</a>. Subscribe to us on whatever you'd like to listen to podcasts on. Any last words? 
  
  </p>
  <p><strong>Brian Holt</strong><br />  
  You heard here first, we're recommending that everyone go back to table layouts for CSS and we are done with CSS Grid.</p>
  
  
  
  `;
  return transcript;
};