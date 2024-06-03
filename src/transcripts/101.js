// Episode 101 transcript
module.exports = function() {
  const transcript = `</p>
  <p><strong>Ryan Burgess </strong><br />
  Welcome to Episode 101 of the front end happier podcast. It's actually been a long long milestone to hit Episode 100. Do you think we will maybe hit the milestone of 200 at some point?
  
  </p>
  <p><strong>Jem Young </strong><br />
  only if the government bails us out?
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Jem needs some of that sweet, sweet cash. 
  
  </p>
  <p><strong>Jem Young </strong><br />
  I need some of that small business bailout money.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Yeah, but definitely it's kind of exciting to be released though, Episode 110. For this episode, we all focus a lot of our time on engineering work for large companies. But we've always you know, there's always been side projects or things that we've worked on throughout our careers and so we thought it'd be in this episode would be really cool to share some details about some of our side projects that we've done in the past. Before we get started, let's go around and give introductions of today's panel.
  
  Augustus you want to start off? 
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Yeah, sure. My name is Augustus. I'm a software engineer at Twitch
  
  </p>
  <p><strong>Jem Young </strong><br />
  Jem Young, senior software engineer at Netflix. 
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  And I'm Ryan Burgess. I'm a software engineering manager at Netflix. So only the three of us today. So be fun. All right, in each episode of the front end, happier podcasts. We love to choose a keyword that if it's mentioned at all in the podcast, we will all take a drink. What do we decide today's keyword is personal personal. Awesome. Alright, so if we say the word personal, which I'm sure we will, we will all take a drink. To start off, I'm really interested in curious to hear each of your side projects that you've done in the past. I'm sure there's been a few and I'd love to hear some of the things that you've each done.
  
  </p>
  <p><strong>Jem Young </strong><br />
  And I can say this topic came up with from our previous episode, we did a twitch livestream, one of our listeners asked, Hey, y'all talk about corporate programming all the time because you all work at large corporations. Do you ever do personal side effects anymore in tears, like Cheers. To good topic. Let's see, done a few in the past or if done many in the past, obviously. Yeah, one show me an engineer who is pretty senior. And like who's never done a side project and like it just doesn't happen. Like, I think to get where you are, you have to do some sort of work on the side. It's just the nature of being a good software engineer.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  I feel like that's how I learned, like, that's really how I truly learned it was constantly trying to solve some sort of a problem that I was really excited to do and build. And I felt like I learned a lot by doing that you can read and learn, but I feel like actually applying it is where I excelled to learn really quickly.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Yeah, I agree. I find that when you work in just for your job, you're so focused on the problem and just maybe shipping, like how do you ship it out to users but the nice thing about side projects is you can really focus more on the learning aspect. aspect of Oh, this is what I ideally want to build. And even if it's, even if it doesn't solve anything, it's like exciting because maybe you might choose a random new technology like, Oh, I want to learn view this time or something. It's just really nice, you have a lot more freedom. And also, you can cut corners. It does,
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  yeah, whatever. It's, it's my project. I'm gonna do what I want.
  
  </p>
  <p><strong>Jem Young </strong><br />
  write tests, if you want, comment your code, if you want,
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  you should always comment your code. I've heard Jim say that
  
  </p>
  <p><strong>Jem Young </strong><br />
  I do call in my code. Because looking at my GitHub repo from years ago, and it's in my projects, I'm glad it comments my code, because I have no idea what I was doing at the time. And the comments. I'm like, okay, I can make a quick change
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  here if I need to, because I commented my code, so I'm guilty. I gotta say, on my side projects, I have not applied the best practices sometimes. And it has that commenting as seriously, it has bitten me in the ass a few times, because you're right. He might want to make a change to something and you're like, I'll just quickly go do that. But when you haven't made those comments, it becomes really difficult than it becomes a bigger chore to try and make that change. So I'm with the gem, I should take that advice more often.
  
  </p>
  <p><strong>Jem Young </strong><br />
  I'll say this that it's controversial for those listening in the car at home. I would comment my code before I wrote tests, if you're asking me like, which one is more valuable for personal projects, commenting code? Like I almost I almost never write tests for my personal projects, like I, I don't care. I know it's bad practice. Bla Bla, bla, bla, bla, but there's no stakes. So unless I'm doing something for money, for that point, it'd be more of a side hustle, not a personal project. Cheers.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Cheers. Yeah, it's funny. I feel like a lot of people are really obsessed with test driven development, or really, let's write up to write the tests up front first, and then, you know, have 100% code coverage or all these things, but especially for side projects, you know, just just build what you want to build the dam.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Below you don't even get me started on the like, 100% test. Yeah, it's like, I don't believe that. I mean, I don't think you can do it. Now. I don't I don't think that fool's errand.
  
  </p>
  <p><strong>Jem Young </strong><br />
  Yeah, I don't think there's such thing as 100% test coverage. Like, if that's the case, then you never have bugs. And if that's the case, I don't know. There's no, there's no case where there's no bugs like it. Yeah. Yeah, it doesn't happen before we get into like the the projects we've been working on. I'll say like a failure that I see. And I think what discourages a lot of new people is, they're like, Oh, I want to build something. I want to build a quick game website. on my own. You ask for advice on Twitter, people like well, what you need is react starter kit, you need netlify you need every wiza you need a patchy, like your own server you need like a million things get started. I'm like no, start with an HTML page. Add a script tag and like, see where you go. And if you need that sort of thing, cool. But if you look at most of the work that I've done in the past, or my side projects, they're like minimum minimum like maybe node Almost never framework. It's just like hassle. And if I'm doing that I'm not learning anything. It's different if you're trying to learn react or view or Angular or something like that, but I really think side projects for like exploration just like freeform like art as you can make it. And if you get too hung up on like, the precision and tests in like the right framework and all these things, then you're kind of
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  doing yourself a disservice, using the frameworks great or using node or some other language that you're like, I'm just kind of curious about learning it or this will do the job really well. Absolutely. But I agree with you is that people get hung up too much on getting all the things like I got to make sure web pack is configured, I've got to make sure that all these different build tasks are happening to your point gem, like maybe just writing some vanilla JavaScript in a script tag might actually do do do just what you need for that project. I think another one that I always hear to is especially when people are trying to learn something, it's like well, what can I create that's already been created. I'm always like, go create another Facebook Like, honestly, you'll learn lots like if that's something that you want to do is create another social network, or a game or something like that, that's a great way to learn is like recreating something from scratch.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Yeah, plus 1002 that I felt like I had that kind of same mentality, where, as they Oh, this sounds like a good idea. But it's already done. Like, I guess the world doesn't need it. It's like, Don't Don't think of everything you want to build as something that needs to solve a problem that everyone has necessarily. I mean, those are good problems to solve, I guess. But, you know, just do it, even for learning for your own sake is like a really beneficial side project. I always like doing projects or something that will make my life better and like are easier like some when I think of building like a tool, or command line tools script, plugin library. Something that I'm creating is like, hey, this helped me in just the smallest slightest way to be more productive or just shave off some time. Whatever it is. If I throw up on GitHub and like one or two people find it useful, great. If not, who cares? It made my life easier. And that's all that matters. And it was cool to create, like, that's kind of the way I look at it. But yeah, I want to hear the past projects that you've all worked on. I think I know of two that I worked on, but it's embarrassing, because they're not that big. But they're, I don't know, I guess I'm proud of the proud of proud of them enough that I would pin them on my GitHub, with zero stars or whatever. But, uh, so one project I worked on was, it's called Konami Commando. It's on NPM. And literally, all it is, is there's this thing called the Konami code. And I forgot what game did it but there's a lot of games that have this secret code. This is
  
  </p>
  <p><strong>Jem Young </strong><br />
  a big one. Okay,
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  yeah. So, yeah, so there's this code like, up up, down, down, left, right, left, right ba or something. And I saw a lot of games do it and I thought it'd be cool. If It'd be like, there's just this cool NPM package they could just install onto your website. And then you could just have this very convenient handler that said, when this chain of commands was was done, then it would just do something. So I just published it. NPM one day, so, so that added, that's awesome. Yeah, I love it. Yeah, this was like when I was like, super new to NPM. in general. I was like, oh, wow, there's a whole package manager. And so I just thought it'd be a cool thing to do.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  And but even that, like learning how to publish your own package, like that's not something that you're regularly doing in your day to day job, maybe, but not always. So that's like you learned how to do that, which is really cool.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Yeah. And it's awesome. Because when you open source or side projects, it's it's actually pretty surprising how many people might stumble on it. Like I wrote that, like years ago. And then, well, a few years ago, but more years than when it started, someone came and said, hey, it's kinda interesting. thing that you have jQuery as a dependency for this when it literally, like, requires no j or jQuery whatsoever. I was like, Oh, that's a really good point, you know, so it's just like those small things. You learn that just over time, you know, when you first started, it almost felt like it was like a time machine. Or like, I remember when I actually code
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  or something, like add so many projects that come to mind.
  
  </p>
  <p><strong>Jem Young </strong><br />
  Oh, man, I'm just I just went on my GitHub to see where everything yeah, I do love GitHub for that, because I don't remember what I worked on. Which one did I? Oh, one of my favorites was, it was for a conference in Sweden called Nordic j. s. And I was the final speaker. And I'm like, you know what, I'm gonna try like a project this time. I want to, I want something really impressive. that people are gonna be like, wow, this is pretty cool. It actually built most of it on the train from London to Edinburgh. I was like, you know, I've always wanted to mess with Web Bluetooth, never do anything with that. I want to do something with reactive programming. So I want to use RX j s. And I just love WebSockets. To this day, I still love WebSockets. They're just like, they're awesome. They're real time pipes, and you can do whatever you want with it. It's just such
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  a cool technology.
  
  </p>
  <p><strong>Jem Young </strong><br />
  That's awesome. But I was like, I don't know enough about this stuff. So let me put together a project that does all these things. So what I did was I connected a heart rate monitor to my computer via Bluetooth, web, Bluetooth. And then I connected that to a web server serving out my heart rate over like intervals, and I'm using our access control the intervals properly. I send that down to the client. So all the everybody in the audience like I say, like, hey, go to this website. Just like just wait, something will happen. So everybody's going to the WebSocket connect to the server. And then I'm like, if you ever wonder what it's like to give a presentation, live on stage like what's your heart rate is here you go so I turned it on. sent my heart rate through the through through a website out to everybody's phones. And then I use the vibration API, which I didn't know existed till I was like, Huh, I wonder if I could do this vibration API on the phone to vibrate the phone to my heart rate. And like trying to get that all synced up properly with the animation on screen was like so much more work than I thought. But when it worked, and it did work, it was just it was fantastic. Because it was like so many different technologies that I've never done before. And just like, not that useful in real life, but as a proof of concept, it was just amazing. I learned so much, much more than if I had just read a blog post or something like that. Yeah, I
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  think even in that scenario, you're right. Like there's not, maybe there's a real world use case there. But it was just like a cool concept. And also could be inspiring for someone like not even realizing, oh, there's a vibration API that I could leverage. And like that's, that's super cool. Or like WebSockets like, that's what you can do with them. It becomes really inspiring for the audience. I love that you did that. Did you? Got panic too, that it wasn't gonna work? Because like anytime you're on stage, I'm always like live coding and anything like that, to me is just like the scariest thing. I've always avoided it. It's like have a demo. And that's the way to go.
  
  </p>
  <p><strong>Jem Young </strong><br />
  Normally, yes, it all work the first time.
  
  I was born nervous about the Web Bluetooth, because like Bluetooth already. Yeah, it's kind of shaky as it is. I know, like modern Web Bluetooth, but this was a few years ago. So the standard wasn't as strong. I didn't know how many WebSocket connections my server would support at the same time. Like I, I can't load test that it's really hard to load test WebSockets it's when all came together. At the end of my talk. It was just one of the best feelings in the world. And I still that goes down is probably one of the best talks I've ever given. I think because they just like put the cherry on top at the end. That was awesome. I like that. What about to write
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  like I've done a variety of things like where there'll be like a lot of times I'll just Create like small like helper functions or see Li tools that have just made my life easier. One that I just thought of the other day that I continuously use. When I'm shooting photos, I am pretty anal about how I organize my photos, I shoot RAW and then if I video or raw files, like I want them really organized and so I literally just wrote a COI tool or script that will just like automatically organize for me. And so it just has like a couple commands that just makes my life easier, which I love. It didn't take me much to write it probably like 20 minutes. I think I even wrote it in Node but it was super quick and dirty, but I still use it to this day. I don't even remember when I wrote it. But one of the things that I would say I learned a ton from from various things from like programming to marketing to making money off of websites, like just a ton of different things was one of the larger personal projects cheers that I've done was building a graffiti and tattoo blog. called census lost and it's still available or like still up census loss calm, but it started to gain a lot of traffic like I was posting every day to this site. This is like many, many years ago before blog or maybe like blogs are just starting to be a thing but it was like before they were cool. And so it was just something I started building out I learned a ton about SEO, monetizing this site and just a lot of different tricks and I started to it was all built in WordPress, like one of the early versions of WordPress so I knew a ton of PHP so I was writing WordPress plugins, things that made it a lot easier for me and then I think I published a few plugins along along not too so I wouldn't always stood out to me as a fairly large project also because it, it lasted for I don't know, I mean, it's still around but like I posted on that for daily for years, like so it was it was a big portion of my life. I just kept going and going and going with it. So it was kind of Cool. Oh, another interesting one that I never did much with. I used it, but I never really published it anywhere. I don't know, were you guys big users of Google Reader at all?
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  No, no, I wasn't sorry.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  All right. Okay, fair enough. I was really sad when Google is getting rid of Google Reader for RSS feeds. And I actually a lot of the content that I would write and everything for my blog was coming from like other RSS feeds and like it just you could have all this like news coming to Google shutting down reader, and like, oh, man, what am I going to use? There was things like Feedly popping up and all these other RSS readers, but they were just like, overcomplex if it makes sense, like Feedly has like all these like crazy layouts and things. I was like, I just want the really like traditional, crappy, old looking Google Reader. And so I from the ground up, I believe it was one of my first node projects wrote like using lightning Express, this is before react existed. So it was like, I think I use like mustache templates. But I built a complete RSS reader where you could create your own account. So you had registration, you could log in and create, you know, basically have your own database and flag all these RSS feeds. It was it was really cool. So I used it made it so that others could use it, but I just never really, I think I got it to like 95% and there's just never fully shipped it.
  
  </p>
  <p><strong>Jem Young </strong><br />
  So the last 10% of side projects is is hard, I think it is or you talk about that a bit more later because that's I think that's interesting thing about side projects.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Well, I think it is due because you've learned some things you're like hands cool, finalizing it or making it a little more polished. is a little more tedious and more work you have basically it working for you. But if you want to extend it to more people, like all this extra work or even like Augustus is pointing Having jQuery in there, and not even using it, you're referencing it but not using it. You probably thought early on, you're like, Oh, yeah, I'll just throw this in, because I'll probably end up using jQuery. But then you started going on your merry way, and you didn't use it. And it's like, Oh, I got to go back and clean all that up and make it production ready. That's
  
  </p>
  <p><strong>Jem Young </strong><br />
  a lot of work. I think the rule is, unless you start off with the intent of open sourcing, whatever you're doing, like from the very beginning, it's really, really hard to like open source, a personal project or something like that. If you didn't, if you didn't mean to, like it's better to start off with like, NPM package and all these things, give it a name, like maybe even publish it to your own GitHub until it's ready to go. But going backwards is so much work. You're like tests and documentation, you have to rethink the architecture. And does this make sense? And then a lot of times, I'm just like, not worth it. It's just not worth it. I should have started off with this, but I didn't. So it's on GitHub. So and really What's that? I couldn't figure it out. It's I think it's where all my projects end up. 99
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Oh, yeah, like, I bet you there's a lot of junk that I have on GitHub, and I am whatever I like, started out there also, because you've got your version control, and you're just like working away. You're like, I don't really care too much, but I have it here. And then it's probably been sitting there for 10 years, and you're like, this probably shouldn't be there. Because nobody should ever go use this. It's so deprecated. But hey, it's there. I love it too. Like Jim, you're able to look back and say, Oh, right. I worked on that like it is it keeps a bit of your history. When I think back to way before the days of kit or version control. There's a lot of projects that I would love to just resurface just to look at and see my own growth, like how I'm sure I programmed really poorly on them. But it would just be really cool to go back and look at some of these projects, which I don't think I have anywhere like I don't think they're on a hard drive or CD or I don't know. Yeah, so Be kind of cool to go back to like, look at some, some of my old flash games or applications that I built in those days I'd love to go look at that
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  actually brings up a funny thing I thought about when I was first graduating, I always thought I saw another fear I had about launching side projects on GitHub was I felt people would judge me, like because you know, you've turned in your resume and as your GitHub, like, Oh, well, these programmers, will interviewers evaluate me based on that? And, and I would say one, don't think about that, because no one should. And two, if you're someone that is that that's totally unfair, you know, don't evaluate someone based on their side projects, or like their coding qualities, like, as a side project, have tests know, wow, this person doesn't like unit testing or something.
  
  </p>
  <p><strong>Jem Young </strong><br />
  Yes.
  
  Unknown Speaker  
  Yeah. It's like go. Don't be one of those
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  people that does that, you know, that is true is like I don't necessarily look at someone's GitHub and judge them to that detail I might look at as more of a positive advice saw a bunch of random little projects or things like that. It's like oh, cool, they're just like open to trying and doing something versus like having to be perfect and polished. Because Yeah, that is not what's on my GitHub is like this perfect and polished repo millions of stars or anything like that might have two stars. Me and like bagging jammer, I guess says to like it. That's
  
  </p>
  <p><strong>Jem Young </strong><br />
  it. But I love your point, I guess and I hundred percent agree with you all say one addition to that is if you have no experience, like professional experience, like you just finished a boot camp or college. In that case, I would have personal projects on GitHub that people should be able to judge you on because you're like, hey, I want to work as professional. Cheers. If you say I want to work as professional engineer, even though I have no professional experience, you have to go off something like some sort of indicator and a good suite of personal projects, I think can go a long way when you're first starting off at least
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  that's really valid. That's it Very good point, Jeff. Because it's like, remember starting jobs. It was like the portfolio site. I don't know if you ever had those to where it was like a lot more polished, you weren't just putting up like some random thing that you'd built you're like linking out to, here's this project that I've been built. Even if I hadn't had a job, it was like really emphasizing, like, I did this, and here's my thoughts around it. So that's a very valid point is GitHub absolutely could be that. But maybe you're actually linking directly to that project. Like maybe you have a bunch of other random things, but you're like, this shows off my personal ability. shares. Yes,
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  totally agree.
  
  </p>
  <p><strong>Jem Young </strong><br />
  Unless you're just like designers have to have a portfolio project or if you say you're a UX specialist, you probably have to have a portfolio because oh, yeah, it's one of the ways people judge you like very quickly it's like, okay, we like this designer. We don't we like the way they design UX, we don't. So it's a little bit different world for if you're that sort of front end development. But for engineering, I think It's okay.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Yeah, it's valid. I think, you know, designers typically have a little more polished portfolios. Now my website is like zero, nothing. Like I can't remember the last time I had a portfolio site that was like, look at all the work I've done. I know I've had them at various points of my career. But it is not something that if I was finding a new job today, it's not something that I would even bother with
  
  </p>
  <p><strong>Jem Young </strong><br />
  saying, I have, like, other bodies of work that are more apparent than like what I've done on GitHub. Speaking of personal websites, when is the last time you to updated your personal website when I change jobs? Just to change? change?
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Yeah, that's a good question. I feel like it's probably on GitHub, so I could check, but it's probably I think it's been within a year or two. Just because I feel like I didn't have like the photo or something. I think I changed it.
  
  That was about it. 
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  I'm looking right now.
  
  </p>
  <p><strong>Jem Young </strong><br />
  I'm looking at </p>
  <p><strong>Ryan Burgess </strong>calm. Not a lot going on here.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Super exciting man.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Oh, hilariously, I touched mine in January also to update my profile.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Yeah, there you go we care about we've changed what we look like. 
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  So I will say your personal website is a great place to just do whatever you want. 
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Sure. 
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  I mean sure, like represents you and make it make it clean, but like definitely like Feel free to go wild on it. Like I've never played with three JS that was like something I got super into, like Web GL. I was like, wow, 3d is the future. So that was like the theme of my website. I don't know if it's actually good, but
  
  </p>
  <p><strong>Jem Young </strong><br />
  we're checking out your website right now I guess. Oh, this is pretty cool.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Yeah, man. This is way better than mine.
  
  </p>
  <p><strong>Jem Young </strong><br />
  Way better than mine to man. I guess this would make us look bad. Oh, it rarely
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Can I just like fork this and like totally steal it? Yeah,
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  sure. I like it. I mean, honestly, like, it's cool because Doing some of the three JS stuff, I learned a lot performance optimization stuff. I coded this initially so poorly. I could only have a few cubes flowing around before. Things like before my CPU fan started going crazy. And it turns out that I was like doing so many things inefficiently in 3d That's
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  so cool. You're learning even things that will apply to your day to day job of like, and because performance matters and pretty much everything you're doing so that's awesome. I have to ask you guys this what's the the count numbers out the people visiting your site?
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Are you talking about the game? Yeah, yeah. So I was just like, I don't know. I was kind of like, wow, I'm joining a twitch and I'm into games. I should have like some mini game. I wanted like some mini game. And so yeah, the way it works is if you hover over the cubes, they they like blow up a little. And it just is like, if you as you hover more over that creates a count and sees how many you can like keep over there. something out. No, that's awesome. I love it round. If you get to 100 there's like secrets. I just, I just try to litter easter eggs everywhere. But if you get to 100 something
  
  nice. 
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  I'm close to 100 by the way,
  
  </p>
  <p><strong>Jem Young </strong><br />
  we're on Gustus dot Dev. For anybody listening.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Yes, this is go check it out. This is pretty cool. So I'm interested, I think some of the things that we've said probably fit into this, but what keeps you motivated or interested to do a side project? Like clearly learning has come up a lot. But what are other things that that get you motivated?
  
  </p>
  <p><strong>Jem Young </strong><br />
  Like, we're talking about motivations, it's all I'll say, I don't do side projects much anymore, if at all, like a lot of my work goes into like doing a podcast or giving a talk or like giving a presentation or maybe doing a hack day or something like that, not as big of a side project anymore. And I think part of that is the motivation isn't there. So my motivation from for starting side projects was always Can it be done? Like, can I do it? Like, I guess if you're saying you want to mess with three, js and animations, that's a great, that's a great reason to build something out. You say like, Oh, can I figure this out? can I learn something new? And I guess the problem getting more senior is, I know I can, like if I spend enough time, I know I can solve like a lot of these problems that I want to do. And anything else that what I couldn't solve immediately would probably not be a side project anymore. It probably be a real project, like something much more involved, that I just wouldn't feel like tackling. And that's that's kind of the weird limbo. I think a lot of us get into as we work into like corporate and things like that is we know we can do these things. So we just don't bother anymore. Just kind of sad in some ways, but I guess the natural evolution of things.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Yeah, I kind of agree with you. Like a lot of the side projects. I've worked on.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Generally, genuinely stem from I want to learn this new technology, what is something that I wanted to do that kind of fits together with this and then I can apply it. So kind of for gives me a forcing reason to learn, said technology. I feel nowadays I don't have as many side projects, but I have ideas of side projects, which I'll be honest, I've done absolutely nothing recently. But I there's still like, I want to pursue these at one point. Those I feel more recently. And this is probably kind of what you were saying, Jim, as I become more senior, it's less of was the technology that I want to learn to solve these problems. It's the actual problem itself. I agree with both of you, especially I'm trying to learn something is that usually like the starter, it's like this can be done. I'm gonna go and solve this and figure that out. I think going back to it to to what motivates me usually is I just want to getting back to like creating some tool or something or a library. If I can make my life easier. That's what I'm creating it for. And so I think Those are the types of things that I wouldn't I don't even know if I'd call them a side project, maybe sometimes it might be, I'm taking 30 minutes to create it. But when I have done side projects, I typically have to be either learning something. And even then I have to be really passionate about what I'm creating. So even thinking of the subject matter of creating a blog or application, it's something that I had to when I did it, it was like, I mean, I still love tattoos and graffiti. And so like that was really motivating, to me is like, I'm passionate about that subject. And it kept me going and wanting to keep going and building and learning. But I think if you're just forcing it, you fizzle really quickly. 
  
  </p>
  <p><strong>Jem Young </strong><br />
  Do you guys think that part of it is that working for larger companies, you see that learning new technology, for the sake of learning new technology is not necessarily the most beneficial thing to your career anymore. Because when you're first starting out, you don't really know where you're going to end up. So it's actually better to say like, oh, I've got a little bit of experience. And Ember, and a little bit in jQuery and Python, like you touch a little bit of everything, because you don't really know where you want to end up and what you want to do. But as you work in larger engineering organizations, you say like, well, learning flow, or like changing my codebase to flow isn't necessarily the most useful thing for me to learn right now. It's maybe organizational skills, or how to speak in meetings or like, things that aren't necessarily technology related. That's an observation I've had, like, pretty pretty recently.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Yeah, I think you're more you're being more specialized. The more senior you're, I'm owning this. This is the area that I've become very passionate about. Maybe it is a typical language, or maybe it is a framework, but you're really deep on that area. And so maybe some side projects pop up out of that, but I agree with you there. Jasmine's like when I think of things that I want to improve on, communication is always The top of my list, because I think it's important in anything you do. And the more senior you are, you have to communicate ideas really efficient. And like if you're telling five other engineers that you're working with, like you want that idea to be very clear and concise. There's an art to that, whether it be verbal or written. So I love that you said that.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Yeah, it's actually shocking. How relatable This is. So something I've been trying to improve on at Twitch is my writing because Amazon and Twitch has a pretty strong writing culture, where when you want to propose something, when you want to integrate with another service, you have to have a write up of here, the changes that you're going to be making, what's the expected TPS that this service is going to be making to the service, etc, etc. There's all these things that you have to write out. So it's very clear and you have to, you have to write in such a way that anybody without any context can get a pretty good understanding of what's going on Netflix, we do a lot of writing to like I feel like anytime that we're you have an idea or you want to make some change. A lot of it is the best way to communicate it is putting it in just like Google doc and, and circulating that and getting people to comment on that. So yeah, written and verbals key. I know that maybe that's your side project is like how do you get better at that?
  
  </p>
  <p><strong>Jem Young </strong><br />
  It makes me sad though, because there's so much cool technology out there that I'm like, Oh, I'd love to learn a bit of machine learning, or Oh, yeah, I don't know, something to do with computer vision and webcams. And I'm like, I could build so many cool side projects. And then I'm like, Well, yeah, yeah, I could do that. I could spend all this time but it doesn't really do anything other than satisfy my own curiosity. And at the stage of life, I there are more interesting things I'd rather be doing. which kind of makes me sad to like, see that? But it's also true. I think it's just part of being an adult as you are growing up. You just don't have time to dabble as much anymore.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  I think it depends. too, as I agree with you is the time. Everything is a time command and everything's a trade off as especially you have more responsibilities as you get older and, and that absolutely limits your free time to do a lot of these things. Jim, you mentioned and obviously all of us are doing this, but like a lot of our time goes into the podcasts like we're on a podcast like that takes work that takes planning, even just spending an hour recording and talking about whatever it is we're talking about. And so that is like something that we've continually done. That is a side project. No one's paying us to do that. I think of people like Sarah dresner comes to mind where she is very passionate about creating art with code, she just creates these amazing code pens that are super inspiring to the community. And it might just be some like really fun thing that she's just created and is alright cool, created that on to the next thing. And I think things like that to me or maybe you just don't do as many things but you find something that you're like, Oh, I'm giving back to the community or I'm inspiring. Others aren't Just this is really relaxing for me to do. And I enjoy it. So maybe it's just that you don't do as many things. You're not investigating all the latest and greatest technologies that could be someone's niche that they're like, I love that I want to keep doing that. But I think it's just you start to narrow focus on what you're doing
  
  </p>
  <p><strong>Jem Young </strong><br />
  well, well, that makes sense. No, that's very well put, cuz it reminds me of our friend, Harry Wolf, at Mongo in New York. He's like King of investigating, like all the new technology is something new. He's on it. And he's, he's a senior as any of us. And he still does that, because that's what he's really into. And, personally, I think it's important always find that person at a company and like, be friends with them, because they always know the latest and greatest. And they'll be like, Oh, yeah, just read this blog post. And I've learned a ton just from being around those type of people that will say like, wow, we don't do side projects as much anymore. I read a lot more about technology. Like I read a lot more at different people's blog posts. I just try to absorb as much as I can. Like, how does Kubernetes work and how does its relation to Docker has nothing to do with my day to day job. But I still read about it just so I'm moderately informed about things like that. But yeah, it's not the same as hands on.
  
  I don't know. I don't know how I feel about that there
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  again, I love that you brought up Harry's point too. He's passionate for that. You know what I mean? Like, there goes back, what motivates people's passion, he's passionate about digging into that. And like, I mean, I still love new technology, but it doesn't necessarily fall at the top of my like, passion list. It's in there. But it's like, with all the constraints of other things, eating out my time. It didn't bubble up to like the point where I'm like, I can fit that in there. And so I think that's where that kind of comes with the life you know, changing and you just have to trade off where you're spending your time there was well put, I mean, I guess we could stop the podcasts and spend more time but I feel like some people might actually be upset you know, that's the thing is like, I enjoy this because one I enjoy talking to follow you but also people seem to get benefits from listening to us talk about nonsense. I am curious. So if you were to start a new project today, like you, you've just miraculously found a bunch of time. How do you start a new project? You know, what are the best ways to start? Like I know jam, you said, like, just throw in a script tag and start going, but are there certain tools or things that help you get started?
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  So I will say depends on what you're trying to start. So I mentioned how I have some ideas of things that I want to eventually do. But I have made absolutely zero progress. One of the one of the things is like a vs. Code extension. And so for me, it would just be starting, like, not only looking at how do I build a VS code extension, but what I like to do is actually look at other projects, like existing projects, like what are some existing VS code extensions, they're open source and out in the wild. And I can learn a lot about what other people do, how they handle certain things and just absorbing I found code reviewing and just looking at code, learning other people's patterns and styles and Like, he's helped me a lot. So
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  that's where I would start. I'll second that for I know, I've done that with Chrome extensions. I remember the first time I wrote a Chrome extensions, like, how do I even do that. And there's pretty good documentation on it. But I remember just looking at a couple repos, and there's there is some different unique styles on how to do it properly, even depending on what you're trying to achieve with the Chrome extension. So I thought, that's a great idea.
  
  </p>
  <p><strong>Jem Young </strong><br />
  I like, you know, as I was saying, people shouldn't over engineer their personal projects with create react apps, things like that. That said, things like create react app or basic starter kits are really useful if you're like, I want to build a web page, and it has interactive functionality, and I don't want to spend too much brainpower on it. If I use one of these apps, it'll put it together for me, and it just gives me like, the boilerplate just to get things started. Those are pretty useful. What I like to do often is like clone one of my old projects, that has a like, a good baseline is because I know all the code I commented it, I wrote it I know it's simple, and I know it works and there's nothing too complex about it. But in terms of where I'd be if I wanted to get started on a personal project, cheers, cheers. The first thing to do is like, always create a GitHub repo. It's just the first thing I always do, and then put a readme and put a title and from there and go anywhere, but that's, that's how I start every project,
  
  Unknown Speaker  
  I kind of want a second just getting started is sometimes the biggest hump for a lot of people. And even if you just start with our markdown README that has links to articles of things you've looked at to help you get started that's has been like super helpful for me, too. All right.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  So you both mentioned Well, I know a guest has mentioned he has like ideas to create a visual code plugin before we go into pics like what are some future projects? If you had so much time on your hands? What is it like one thing that you would love to be creating?
  
  </p>
  <p><strong>Jem Young </strong><br />
  So I'll say this guiltily, skillfully a word, I don't think you'll use
  
  it, isn't it? Is there sorry on podcast.
  
  So I just came off paternity leave not too long ago. But one of my goals on maternity leave was I said, I'm going to redo my website. I'm going to redo jemmy on comm I built it like seven years ago. And it's totally over engineered. It's like I got my own web server, which I don't even really need. It's like way over provisioned, running nginx with a with like a pretty hefty cache in front of it for no reason. It's like I'm getting a lot of traffic, running Python, with flask in Jinja templates and fast CGI connection, like it is over engineered for a one page site as you can be. And I said over the break, I'm going to redo my personal site. And I did not like the most basic thing. It's literally one page. And I still didn't manage to get the motivation to redo it. So if I if I had a personal ambitious project it would be to actually read reconfigure my entire website to be much simpler.
  
  Unknown Speaker  
  I like that. 
  
  </p>
  <p><strong>Jem Young </strong><br />
  What about you? Ryan?
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Probably similar vein, I think my websites sucks.
  
  </p>
  <p><strong>Jem Young </strong><br />
  I like your website, its minimalist.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  There's things that I always want to do, whether it be like, up maybe like completely overhauling the front end, happy our website or I would love to do more something with hardware, like getting into more like building my own, like software and hardware. There's like a lot of things maybe not one thing in particular, it's just like things that I'm like, get excited about want to dig into. And then I'm like, ah, when I have time, it just never happens. I guess.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Yeah, I have a few. I have a few. I can talk about some of them. One of them is friend and happy hour related. And I think I've talked to Ryan about it sometimes. Where now we have a lot of podcasts and a lot of people talk to us about why don't we transcribe our podcasts and you know, it's it's It's tedious, it's expensive, or is it don't and so I think I've been looking into is there's a lot of cloud solutions now. So GCP, Google Cloud, AWS, and even Azure. They offer cloud transcription software tools where you can upload an audio file, and then they will run some audio model that can transcribe the text from that audio file. There's a lot that goes into that, I guess, which we were able to get something working for, like one episode on Google Cloud. And there's like a lot of interesting nuances that I didn't know for example, you have to upload the audio file to Google Cloud Storage for it to transcribe it and stuff. There's all these like little interesting nuances. So that's like one side project that I'd love to explore if I had more time. The VS code extension one, I guess I can talk about it, which is basically, I, I've always been into education, I think education. So really, everybody learns differently. And what helped me learn programming a lot more was when we were learning Java, there's a special ID called j grasp, which is an ID that is definitely, I think, not ideal for enterprise building applications. But what it has is when you debug, it creates a visual. So I think they have somehow imported all the different Java data structs. And they have associated visuals. So when you debug, let's say, a binary tree or a hash table, they have visuals so that when you put a debug breakpoint, you can see a visual of a tree. And let's say the pointer was pointing at one node, the root node, it would highlight that node. And it makes it very, very good for teaching algorithms for example. So like, if you Want to learn breadth first search or depth first search. The instructor can literally put the algorithm in a Java program and then step through it with the debugger. And you could see in real time through the debugger like visuals of what node, it's looking at what's going on. And I think that would be just a very useful thing to have in general in JavaScript in VS code. But yeah, I have not gotten around to it at all. Actually, I think I saw so when experience I think, more recently, this came up because I saw someone do something similar. So I've been meaning to look into it, but or what you'd need to do now guess this is just create the GitHub repo and
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  tell everyone to go and start building for you. Yes,
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  yes. Here's my vision. Go my minion Yeah.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  All right. Well, let's move into picks. Each episode. We love to share things that are we found interesting. Want to share with you all listening. Jim, you want to start it off?
  
  </p>
  <p><strong>Jem Young </strong><br />
  Yeah. One pic, you know, you think I'd have more pics because I have nothing to do but I'm at home.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  You seriously, you have nothing to do you have a newborn.
  
  </p>
  <p><strong>Jem Young </strong><br />
  I know, man, best for you I pick his babies, there are a lot of work. There are a lot more work than you think. But my one pic is a blog post by Stanislav Mian chenkov. That's close enough. But it's it's called cognitive biases in software development. And this is something I increasingly get into as I get more experienced. It's just I think about the theory of coding, not not in terms of CS Principles, but in terms of how to humans, how do we as humans think about coding and how we organize coding and structure and how do we explain that to a team of 100 200 500 people. But this one's about like the bias we have as engineers, we have lots of biases, like we don't even realize it but we have lots of biases, but one of them is that But not built here syndrome. I'm sure you've all experienced that where, hey, we need a software solution. Alright, let's build it rather than let's use somebody else's. And yeah, there's always somebody who's like, yeah, we could use this. But if we build ourselves, it'll have this one feature. And it's something that is very unique. I think, as software engineers that we just we always want to build something on our own. Even if there's a well developed solution, we always want to build it. And what this person is talking about is the fact that like, anytime we come into old code, we always think this code is terrible. Like, why do they do this? I can't believe they made these architecture decisions. This code doesn't make any sense as part of useless this library is not being used anymore, and all these things and like we're so critical of especially legacy code. But the point I make and I love and this is a broader discussion, but Like, but the person who wrote that code, the people that wrote the code, were as thoughtful as you were about your code. And there's a reason they did everything. And you just have a bias against that. You don't want to admit that. They also put thought into their architecture and their code and the way they structure their algorithms and things like that. But like, as engineers, we never think that like ever, we always go in there and like, this is wrong, this is wrong, I wouldn't have done it this way. I would have done it this way. And it's just a challenge to rethink that and think, hey, if there's like a weird bit of code, you don't understand. It doesn't mean it's bad code. It just means you don't understand it. But there's a reason like somebody took the time to write that and it is meaningful. And if you just delete it, that's how you break stuff. It it's the whole thing is fascinating. And these questions are such that like, they look like a category of problem you've seen before, like the basic word problems, but they're not. They're more cognitive problems. And it's really deceptive and it's easy to fall into that trap. And that's the idea. This is my one pick, but that's the whole point of Have these sort of cognitive exercises that we're so tempted as engineers to say like, oh, there's a problem. I've seen it before. Oh, wait, this solution doesn't look like the solution I had in my head. That solution is incorrect. But really what we need to do is say like, Okay, what is the information we're being presented with? Okay, how does that differ from the information that's in my head? Why is why is their solution different from mine, rather than just saying, like, everything they did was wrong, and I'm gonna rewrite it. It's, it's a different way of thinking about software that I find fascinating, because these are not problems I've run into before, like this sort of thinking. So that's my pick. Little long,
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Augustus. What do you have?
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Ooh, I also have one, but uh, ah, can I just piggyback off of what Jeb said real quick that I 100% agree. I've experienced that a lot where I've seen people look at legacy code that maybe I didn't write, but I knew that engineer, and you know, I really respected them and they said, Man, this guy didn't know what he was doing at all. It's just like, Nope, you're just not here. But I think one thing that helps a lot is people who write very detailed commit messages and link tickets, because those tickets have a lot of context. And that has helped a lot to help solve that problem. It doesn't always solve it, of course, because people generally will just look at it and be like, Oh, this is garbage.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  Well, and it's garbage today, right? Like, yeah, like, I'll look back on my own code, even months ago, even in our community, like I think back to like, when react was first adopted, the community has shifted a lot that when react are shipped there, there's no flux. And then we went through now it's like Redux is the thing. It's like, we've gone through this scenario of we've learned as a community and things have changed. But that doesn't mean that everyone's codebase is going to be the latest and greatest. And so given that time, and some of the trade offs or even just the like the way of doing it has now changed. And so yeah, you can, I mean, I pick at code doing that to pick up my own I'm like, What the hell was I thinking? But in that moment, that's what I was thinking it was probably legit fine what I was doing but now it's like a year later or six months or a month, and it doesn't feel like it was a good idea. Like things change. Alright, I guess what do you what pics? Yeah.
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  I also only have one pick today. You know, I just yeah, I should have more time. But but but yeah, so my pick is a website called broken picture phone. So it's a little jank. Ui wise. That's my constructive feedback to the Creator. But I will say, when I was in college, there was a game that we played called telephone Pictionary. Do you know this? game? No. Okay. So, take the game Pictionary. So Pictionary is a game where you're given some word, and you have to dry and then people have to guess what that word was. And take the telephone game where you have a word that starts and you tell people along the line and then it's a very, it's a very childish game where like, by the end, it's not the same word and everyone's like hi changed or something, this game kind of combines them where you start off with a word, and you give it to the next person. Next person draws it. And then the person after has to guess the word that that was drawn. And you get these hilarious, you get these hilarious books of people who, like you starts with like tomato, and then maybe you'll end up as like, Apple riding a horse or something. It's just hilarious. So somebody made an online version of this game that I I loved playing this game with my college friends and it's, it's not the cleanest UI, but it works. I played with some friends recently. It was really fun. So
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  nice. I like the concept that's really cool. So it's funny each have one pick. I'm coming out with three picks. So one of the They are the first couple of when I was trying to get a bit creative and in our world of being in COVID-19 people I've seen this cutting their own hair. I've seen this like pop up a lot online. And it always reminded me I don't know if you all remember the resist vacuum thing back in like, maybe it was like the late 80s, maybe early 90s it was called the flowbee. And it was this thing that like you attached onto your vacuum and it cuts your hair, which like kind of sounds like a cool concept because it's like the hairs like you know, you don't have to clean up the mess Well, there is a hair clipper that does have essentially a little vacuum built into it. And it works really really well I do have it and it's a regular clipper but it has this like little built in thing that's catching the hair and just kind of adding a little bit of suction to catch it so it is less mess. So if you're wanting to, you know, shave your own head or try and do your own haircut because we don't have hairdressers right now, this might be a good investment from a good Amazon purchase. Then another thing that I've seen people dealing with a lot, I mean, I think Wi Fi is always a could be a pain point in your house, with people doing more work from home or working remote spending a lot more time on the internet is people are dealing with connectivity issues with their Wi Fi. I've used this years ago and from time to time when I've set up new Wi Fi use it again. But it's a app called netspot which really helps you it maps your Wi Fi throughout the house and shows you the signal strengths works really well you can kind of just walk around your house checking different points of where the Wi Fi is good. And so you can make adjustments to where your router is. If you have a mesh point you can move that around. Little things like that that could actually help make your signal be a lot better. Maybe you want to work outside, maybe you want better signal going outside, you can figure that out too. And then I always seem to pick Netflix originals. This is going to be a time where I didn't but guess what I am. binge watched it fairly quickly too. But I started watching black as the show's hilarious. It's the about the writer created blackish, the ABC show. It's kind of like a mockumentary type of his life and his family together. It's just like really, really funny. I don't even know how to really describe it. It's really unique, how they shoot it, and it's, it's not real, like it's completely like a fake documentary, but it's super interesting. I think it's well worth the watch. Alright, so that's the end of our podcast today. But I want to thank everyone for listening today's episode. You can find us at <a href="https://frontendhappyhour.com/">FrontEndHappyHour.com</a>. Subscribe to us on whatever you like to listen to your podcasts on. And you can also follow us on Twitter at <a href="https://twitter.com/frontendhh">@FrontEndHH</a>. Any last words from Augustus and Jim?
  
  </p>
  <p><strong>Jem Young </strong><br />
  I like how the show was only three of us we still went like a lot longer.
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  I know usually you would think it would go shorter but we just kept going.
  
  </p>
  <p><strong>Jem Young </strong><br />
  Are we just lonely? Are we just really good friends 
  
  </p>
  <p><strong>Ryan Burgess </strong><br />
  all the above
  
  </p>
  <p><strong>Augustus Yuan</strong><br /> 
  Cute.</p>
  
  `;
  return transcript;
};