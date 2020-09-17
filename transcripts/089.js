// Episode 1 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  <p><strong>Ryan Burgess</strong><br />
  Welcome to a brand new episode of the front end happy hour podcast. In this episode we are talking with Priyanka and Lauren about an interesting engineering effort their teams are working on at Netflix. Netflix continues to create its own content. And Hollywood is an interesting world with tons of opportunities for engineering to integrate technology to make things more efficient. Priyanka and Lauren will be telling us a little bit more about those nice interesting engineering challenges. Priyanka and Lauren, can you give us a brief introduction of who you are, what you do, and what your favorite happy hour beverages?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  Hi, I'm Priyanka I'm a brand new engineering manager in studio UI. My favorite beverage is usually an old fashioned.
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Hi, I'm Lauren. I've been a manager for two years. My favorite happy hour beverage would be just a good glass of wine. But I've given up alcohol recently. So I'm not the fun one at parties anymore, unfortunately. And I'm drinking aloe vera juice drink today.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And how is that aloe vera juice drink? It's very healthy fiber. Alright, Jim, you want to give introduction?
  
  </p>
  <p><strong>Jem Young</strong><br />
  Jim young senior software engineer at Netflix. And
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcast we'd like to choose a keyword that if it's mentioned at all in the episode we will all take a drink. What did we decide today's keyword is? entertainment entertainment. So from now on, if we say the word entertainment, we will all take a drink. All right, well, let's hop right in. What is studio engineering at Netflix I'm looking at you Priyanka and Lauren to help Gemini understand what this means for Netflix.
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Where do I start? studio engineering is a very interesting organization. Within Netflix, we started I want to say a couple years ago, back when Flix was first starting to get interested in producing original content. And the need for this team really came about because we soon start to realize, given the amount of content that we wanted to produce the tools that were originally available or not available, meet that process very, very difficult. So pseudo engineering really came about as an effort to innovate and provide software and technology and user experiences that make that process of entertainment production, more efficient. Cheers. But on a super high level that's released to the engineering, we're producing tools for Hollywood and other entertainment industries around the world to make their lives much better. Right on, I was actually really
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  in depth way of explaining Yeah, thank you Priyanka. Anything that you want to add to that?
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Yeah. I think that Netflix has a really mature engineering org. We've been around from the beginning, pre streaming, even when I think that we have a really mature UI org as well. And we're taking all of those learnings from the consumer side. And we're moving it to build best in class apps. First for the studio. And one of the things that has really helped us with this is bringing people from the consumer side learning DSP algorithms, machine learning, analysis, all the good stuff from the consumer side,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  What's DSE?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  Ah, sorry, it's data science engineering.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Right on. I'm really curious is I always think about this too, is anytime any company creates something especially internal, like tooling is why like, could we just buy it? Or is there something already on the market? What really compelled Netflix to start building these tools?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  I think we're trying to be the biggest and best studio in the world. And I think the most efficient way to do this is to build technology, technology in the entertainment world. Cheers. This isn't a new thing. There's been other players in this market who've built one off tools, but nothing in a connected 360 whole way, the way Netflix is trying to do it. And I think that this will be a huge, huge competitive advantage when we're going against incumbents in the market like Disney and Warner Brothers.
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Yeah. And I think the thing that's also really unique about Netflix and the studio effort is the scale at which we're producing all of this content is unprecedented. Other thing that we're in, in the sense that, you know, in your typical incumbent studios, a lot of what they do today is not necessarily much lower volume, but not quite at the scale that we're hoping to get Netflix to. So there are tools that do exist in pockets, but when we did, I think some early analysis and then they either were, you know, not really right for the kind of problems we're trying to solve or they were really more optimized for like a studio that was producing three or four titles a year or like 10 titles, at most. While Netflix is I think we're on the verge of almost 1000 a year, which is an insane amount of content to produce, and also a lot of people that essentially need to provide their services and your creative expertise on all of these productions. Because, you know, we have through the productions, we work with actors with directors, script writers, editors, transportation drivers, all of these people from different walks of life. So it was really difficult to find something off the shelf that you know, kind of suited our needs. So that was kind of the high level thought of why we decided to build certain things and not just use something off the shelf
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  that makes a lot of sense I hadn't even thought to is like when I think of like, maybe it's passing along scripts or coordinating certain efforts in a movie or TV show that's been made, but hadn't even thought about like some of the things transportation or coordinating the certain types of equipment that needs to be there. Like there's a lot of things that are going into these tools, which is
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  pretty impressive. Look it is my not two cents because I don't want to do that. Although my, my half cent of my understanding when I look at is Hollywood is really old school like they are all neighbor. Yeah, they're their pen and paper. They're they're like the last bastion of places that technology is not quite reached all the way. Yeah, I think I definitely agree with that. I think I was very intrigued when I first joined studio because I heard about, you know, like situations like that and also the fact that a lot of these productions for example, so use like fax machines, and I'm serious. Yeah, and or I don't know, they have like passwords exposed on or maybe don't even have passwords. It's all like paper, like literal hard copy paper. And I recall a story someone told me before I don't recall who but but she told me that a producer or someone that she was working with in Hollywood didn't even have an email address. And this was someone who was deep in the industry had like 20 years of experience. You think they'd be, you know, somewhat technology savvy, but for whatever reason, they were coming pletely high degree of aversion to even email which a lot of people today take for granted as like, like, how can you not have email? Like, is that even legal? You know? So that was a very eye opening for me. But at least when I think about, you know, the mission that we have, it's as our role as UI engineering teams is, how do we, you know, go after the people like that, like, how do we, you know, help them make their lives easier, you know, and in such a way that it doesn't feel like we're just forcing them to use technology for technology's sake, but because they actually see the value in the benefit. And the time saving, because now they can spend more time on the creative side on the fun stuff, not on the writing piece of paper or something like
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  that is interesting, too, because if you're thinking about the user experiences, you truly have to understand what are the creative people needing to in order to get their job done. They're not going to tell you that either. Because if you are trying to introduce technology to them, they're not going to say like, Oh, this is exactly what I need. It's really your jobs to truly understand what's going to help empower them. Things that They're not even asking
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  for, I think we are being very strategic about it as well. I think there are pieces that where we try to leverage other apps and technology that's already out there. And for things that are really different than, you know, that we really need a solution for. That's the parts that we're investing. And we have a really great product team that's making really good calls in
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  this. And so do you mean like frameworks and technologies and things that you're using to build, like, those are the types of tools that you're using that are already exists?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  It's that and sometimes an Excel sheet is okay. And we we make we take a call, sometimes, you know, passing things on an email or printing things are okay. And then we look for the most high value applications, and we only build those regs, you can't solve
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  all the problems. I think that's a good way to put it go after the most impactful and I'll get into that, too is what are some unique challenges like from an engineering perspective, or even just a business perspective? What are some unique challenges that each of you've seen working in Studio side for me. So
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  I've been I've been in Netflix for coming two, three and a half years. I think in that time, the biggest issue I see with like adoption of these applications is really trying to essentially innovate in a way that makes sense. And the reason I say that is because a lot of times, like even at the Netflix CEO level, like, even though we're producing so much content, the current processes like before technology, like, you know, the tools we're building aren't necessarily the most efficient way of doing something like maybe they're using an Excel spreadsheet, or they have an email or we have a lot of people who are really good at Excel. So we have these like elaborate Excel spreadsheets that have like formulas and macros in them that like do all sorts of awesome things I'm actually really impressed about a lot of times what we find is that it doesn't mean like what they do today is necessarily the best practice and we find it sometimes interesting to see how we can innovate and offer more than just translating what they already have into a digital experience. Because one of the words I always have is that Are we just moving work from one place to another? Right and like to Priyanka is point, I think we want to ensure that we're only moving the high leverage applications were the things that really give us the 10 X or multiple x improvements that are so much better than like what we could do with just an email. So I think that's definitely the challenge and the opportunity.
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  I'm going to try to answer this question from the challenges for adoption for the apps that we built. I think it's super unique in the first thing that I found as soon as I went to studio was how little I knew about the entertainment industry. And I've always been fascinated by it. There's a good catch, learn. been fascinated by it. I've always loved movies, I did a lot of play acting growing up and I thought it was so different. And then you go in and you're trying to build an app and you hear all these acronyms and words that you've never heard before. I actually assumed some of it were typos. I saw some somebody with the title second second ad, and I was like, oh, okay, let me fix that. I guess they have it, but it's a legit A title. So learning about the entertainment industry was was a challenge that I, which I embraced. And I really, really enjoyed. And I, and I think most of the engineers on my team who come in have also been from non from, not from the same background. And they've all really enjoyed getting to know the space as well. So that's the new unique challenge here. The other thing is the end users itself. I think that technology is a wonderful tool, and all of us have iPhones and mock laptops. And we're used to using the latest and greatest apps and we know how to use a UI that you see, but many people in the industry are sometimes using a Windows desktop or some other form of technology that we aren't used to and we aren't designing for. And I think it's really important to be inclusive in the apps that we build. And we try to make it accessible for everybody. So that's really unique. The third thing which I found really interesting, was one of our team is building apps for productions. So that's actually in the phase where you're filming things on a camera. You're actually building the video and they built apps Use the internet, you build an app that you know updates throughout the day, and you're on always supposed to be using it on the field. But we found out later that you're not allowed to carry your phone, no one on the set is allowed to carry their phone because it's a closed set.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So I didn't know that was a rule.
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  There are secret projects, you know, the next giant up foam or anything like that is considered to be secret. And they have rules where they don't allow anyone on site to carry your phone. And they do everything on a on a walkie talkie. So there goes the app that we built. Or sometimes it's filled in New Zealand where there's no internet. So then we have to build offline support and things like that, which are really different. So those challenges that's so
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  fascinating, right when you're speaking I was like, Okay, what she's gonna get at as the offline mode, because that to me was like, Okay, well, you could be in a remote location that you're filming. And yeah, the connectivity might not be great. So how do you maybe have resiliency and make sure that you're having some offline mode, but hadn't even thought you're not allowed to have a phone on set Interesting.
  
  </p>
  <p><strong>Jem Young</strong><br />
  How do you deal with security if they're, you know, if you can't have a phone, and you have like a high value, like hundred million dollar movies, things like that? Is that like Top of Mind or is just built in by default?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  It is top of mind, we don't want to be the reason why a title launch goes out early or the press finds out about any way. Exactly. We don't want to be that. So it is top of mind. I think all the same security principles that we had on the consumer side, we have here as well, we try to use, you know, end to end encryption. And I think I shouldn't go too deep into the things that we do.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  But yes, it is super top of mind. You mentioned creating almost a product that people can even end up using, right, like in the case that while you're not even able to use the device. Do you get to interact with your customers? Do the engineers on the team do your pm like are you interacting with the customers working in Hollywood to better understand their needs?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  Yeah, it's I think one of the, in a way, it's like a unique challenge. And as well, I suppose that we, in the studio, we have, you know, in this direct line of communication with a lot of stakeholders and users who are typically, either, you know, like in Los Angeles, or even around the world, like Amsterdam or New York, and so we have a lot of opportunity to kind of work with them and understand, does this application actually work for them? And so it's very interesting in the sense that, you know, like, while on the consumer side, we're really into, you know, AV testing being very data informed. It's slightly more challenging to do on the studio side. But the I guess the, you know, the flip side is like we have direct access to, you know, just asking our stakeholders a Hey, did you like this feature? Was it useful to save your time? And so I think there's a lot of opportunities for us to collaborate with them. One of the things I always encourage my team to do, I'm sure Priyanka, you've done so well, is to encourage my engineers to go down to LA and get a sense of, you know, what's happening over there. So you A lot of times or not a lot of times, but sometimes we do like the things like offsites. In LA, we go to visit a set, and we get to see what actually happens in production. Not many people have actually been on a on the Live Set. But it's always really fascinating. It's such a treat when you get to do it, because you see all the hard work that has to go into actually creating the content. Oh, my goodness, I saw I went to the set a couple months ago. I can't recall what it was. But it was really interesting seeing how they built the set. And when you were in it, this set was built to look like a living room. And even though it was basically like a quarter of the living room, it felt so real. I was so impressed by the level of craftsmanship we put into these temporary things that they're building just for the show. I didn't always have an appreciation for it because sometimes you just see something like a prop on set and you just assume Oh, they just bought it from somewhere. But a lot of times these are actually custom built by someone who specializes in prop making or special effects. And you know, you start appreciating more about the craft and you know the art that goes on to that kind of work, but that all helps us build the empathy to, you know, understand, like what the use case for the applications are.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That's awesome. Yeah, right away of thinking of that not only do you get some insights into, that's a cool thing to see some of this being created, but you're building empathy, you're starting to see like, how are people needing technology? or How could it help them in their day to day, which is really, probably a powerful thing to have happen to the people
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  are also so interesting. And we met somebody who came in to talk to us about how post production works into Los Gatos and he just casually dropped that he worked on the Eternal Sunshine Spotless Mind, just you know, casual. This is no big deal to me. Okay. Yeah. We met. We met a PA last week. And he was like, Oh, my car was in the lot for the office. It was right next to Dwight's car that cars that that is so cool, super cool.
  
  So lots of really cool people. And they have lots of interesting use cases that we haven't thought of. We didn't have time zones in our app. And the users mentioned give us like really interesting use cases. You know, you might film in Brazil, and you're doing cutting in Canada, and you're looking at doing sound mixing in the UK, time zones are super important. Exam doesn't mean exam all over the world. And they give us really real world interesting use cases. So we don't actually just go ahead and over engineer things that aren't needed. It's always based on something and they give us all of those. So you're saying you're not supporting
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Mars is a time zone and you're not today? Yeah. Okay.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So I'm also interested in hearing you build these apps, you have to get people adopting it. How do you measure success? How do you know you've created a successful application or feature for your customers?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  People tell us? 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Hey, that's, that's one form of measurement. Absolutely.
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  This is a philosophical question. I feel like everyone is trying to answer. We invest in all these really smart people and we build these amazing apps, but are they being used because it's part of the workflow or They've been used because they're amazing. And that's something that we're constantly trying to get better at. We have stories from users, which help our vanity I guess, knowing that people are really happy with us. But there's things outside of that data that we're investing. I personally really love heat maps. And I always think that you can tell from how many clicks a degree user to get to get to something, how effective the app is. There's tons of user studies. There's UX research that goes into apps that are getting built. But yeah, this is something that we're constantly learning. One thing I was really pumped to learn about. So we have this amazing consumer insights team at Netflix. And I learned recently that we now have a studio consumer insights team that's going to be built. And I got really excited because you're starting to help us think about more rigorous user experience and design research that we can bring in do with our stakeholders and users to find out what's working for them what isn't. So it's kind of like blending art and science in a way because kind of what I mentioned earlier, you know, it's Not you can AB test a lot of these applications for building because the you know, the scale, the traffic is not as as large but the you know, the individual user, you know, maybe as managing higher amount, I don't know, like a, maybe the each transaction is worth more, or the HTTP request is worth more, but a very difficult question to answer. I know there's a lot of effort going into it. And some of the applications we're working on, I think, are easier to measure success. Some are more difficult. Like an example being one of the apps that my team is working on. I sometimes joke that we're building JIRA about renaut. It's really a way for us to connect all of the different unique workflows from each different team, whether your business or legal affairs or marketing or encoding, and build that all into a tool that gives you that visibility of how the work is progressing across the board. So one of the things I'm really excited for is the future ability for us to You know, like, for example, if we went to our Chief Content Officer, and we told them, hey, Stranger Things seven is going to be delayed because of XYZ reason, we now actually have the data to back up the information. And you know, in many ways, it will help us, hopefully, in the long run, streamline how we produce content and, you know, create more chances of success. I think there's a lot of efforts going underway, which I'm very excited about
  
  </p>
  <p><strong>Jem Young</strong><br />
  when building apps for things that never had apps it for like words traditionally, like papers, old school ways. How do you avoid feature creep? Because that is like a constant. When you're building software, it's like, oh, if you just had this one feature, like be game changer,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I think it comes down to just being really ruthless about prioritization. I think it's no different from like how you would you know, cut features on a consumer facing application or something that's more established. Because I think one of the things like I, I love to encourage my team is to, you know, if we could only do one thing, or a couple of things, what would they be? And you know, why should we be the best at that particular feature? And I think it's such an interesting conversation because we then go back to our product partners and our designers or stakeholders who are coming to us with these requests, and we work together with them to understand like, is this the right direction? We want to take this application? Are there different ways to solve the problem? Or maybe it is the direction, a different course that we should, you know, correct to? But it's a really great question, because I think it's definitely inevitable. And I think it's not just unique to the entertainment industry. Cheers, cheers. But also, I think like any technology company, or even the startup, like, there's always this, you know, like the shiny lights, the distractions that kind of steer you away. I mean, even something as established as like the netflix.com experience. I'm sure there are distractions that come up all the time. So you kind of have to be really disciplined about you know, staying the course and not adding a million features in through your application. Yeah, we definitely have the model of try to go after the most impactful things and be really prioritizing and things Thinking about strategically around that. But I think we're, we don't speak to our customers, right? Like, yes, you can hear feedback from customers. And we do have customer insights teams doing that, which helps with more like a qualitative approach that maybe give us some insights into, yeah, maybe this is the direction that we should go out and put out to the world. But we have the mechanism of AV testing to which can really help quantitatively tell you this is a feature that people like and use, or this is absolutely a terrible idea, versus sometimes it's probably harder. When you're actually talking to the legitimate customers. The loudest voice in the room may win, right? Like they're like, I need this feature. This is the most impactful thing is going to change my life and it's going to be the best thing ever. But it could only be for one person and I think that would be a really challenging aspect with working with directly with your customers.
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  I think that it takes a lot of discipline. That's true. There are lots of loud voices in the room with big titles and you feel like you have to listen to like Lauren's distraction is just the enemy of excellence. And we're trying to build excellent products. I think we I personally have always driven towards the MVP model, let's get the MVP out. And then we'll add any features. And it always goes hand in hand with the promise, the promise that we're not going to stop development just because the MVP is out there, we're going to keep building, you just have to have some patience. And then making that roadmap open, making that roadmap and adding those features and the list of features and getting people to vote on it, making them feel like they have a voice and that they are listened to. And we are going to build it and it's going to be like continued improvement after the MVP is out. So that's what I'm trying to do, whether I'm successful or not find out
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I like that approach. So you're bringing them along the ride like you're you're not just leaving them in the dark and that like add this is coming. It's like no, this is where we're at in the stages, and so that they're at least getting those updates. I think that's very valuable.
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Yeah, I think that's actually in many ways. It's like the one of the perks as well being directly Working with your stakeholder user because you can literally, you know, and get that real time feedback almost like oh, well, you know, we thought about this approach. But we realized that we don't actually want or give you that kind of feedback that you won't normally get an environment where you kind of have to build something for us in order to validate it. Sometimes we can validate just by a conversation or just doing design research, without always going to building a prototype. But yeah, there are
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  multiple ways before we get into pics. I'm curious what sold both of you on working in studio engineering? What's one thing that was just the driver?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  I think we both have different stories of how we got into city engineering. My story is that I started on the consumer side actually work with both Jem and Ryan as an engineer and acquisition. And I spent all this time trying to make dollars for Netflix and you know, get every last dollar successful. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  You're very successful. 
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  Yeah, I'm like, help the company make money and I wanted to do something different. I wanted to do something that would impact the different impact the business but in a different way. And when When I heard about su do and how they were actually making sure that all of those dollars that we worked really hard to earn are spent efficiently. I thought that was a really unique challenge. And they want it to be a part of it. I've also spent a lot of time in my career always working on mature consumer products. And I thought this was a unique opportunity to work in a big company, but on a Greenfield project. And I think there's a ton of energy and motivation that I derive from being a project like that. It's so different. There's it almost feels like no strings attached, choose what you want. And it's really, really fun. I also really like the people. I think there are a lot of really brilliant people on the studio side, front end, back end. And even outside of engineering, I think my pm and my designer are two of the smartest people I've ever met. So those are all of the things that excited me about this role.
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Yeah, I think of many ways. I echo what you said. I think for me, I joined studio directly. The thing that really sold me was I guess Both people but also the like, really interesting challenges that I've never, I never expected, like, you know, a company to go after so many at the same time. Because, you know, you see that your average startup and you know, like they might focus on like one big product. And that's really the mean, usually the main product that they work on. But sometimes I see the studio and i and i look at the portfolio of different applications that are different teams are building. And it looks almost like if you if if each app was a startup, then we kind of have like a portfolio of like, I don't know, 5040 startups in the Netflix studio, which is so interesting, right like that we're taking so many of these interesting bets on different aspects of content production. So I was really drawn to that. I thought it was very exciting. You know, Greenfield applications are obviously I think, engineers are always very excited about that, you know, getting to try out new technologies or, you know, help to, I guess, set the standard or set the tone For the application and kind of like solve really ambiguous challenges, that was something that also kind of really stood out to me as something that would I would get a lot of in studio because again, like sometimes we don't even know what the best solution is we're just kind of like winging it and we're kind of like learning as we go so that experimental part of the company really excited me and of course, you know, getting to work with people that Priyanka is a treat as well.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  She paid you to say that all right. At the end of each episode, we like to share pics of things that we found interesting like to share with our listeners. Let's go around the table and share pics for today's episode. Jim, you want to start it off?
  
  </p>
  <p><strong>Jem Young</strong><br />
  Yeah, I have say two picks today. Maybe three to go to. My first pick is a Netflix show. I watched the politician. It's I started off not understanding what it is and even I finished the entire season. I still don't really know what it is. I can't tell if it's satire on like a teen drama or politics or something? I don't know but I enjoyed it it was it was very different which I appreciate shows that like we take a gamble on and just different style entirely my second pick for Valley silicon that's the section where I pick things that are just so expensive. They only exist because people have too much money. It is $125 tube of toothpaste.
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  Yeah, it isn't like gold flakes and your toothpaste is
  
  </p>
  <p><strong>Jem Young</strong><br />
  having the The packaging is gold if that helps you. I don't know what makes it special. There's some people on Twitter saying it's worth the money because it does this but out of a standard tuba toothpaste is like $3 so you jump up like TEDx or something? I don't know. I I don't know. I don't know why exist maybe it's awesome. Everybody gives me money and I'll try it out and let you know, hey, you need to start a GoFundMe to try this. I should do that then like send me money and I'll try out the expensive stuff that I make fun of.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Priyanka, what do you have for us?
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  So I have two, maybe three. The first one is a Netflix show that I caught up this weekend. It's called Living with yourself. I'm unofficially the leader of the Paul Rand fan club. I've always really liked him since he was Josh and clueless. So that was why I watched the show. I thought he was it was a really good show. It's about he plays two characters he was the premise of the show is that he was clone without knowing that he was going to be and him and his Cloner trying to figure life out. But it's a good show.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I got a plus one, though, and I, I think it was it was really unique and really well done. And yes, he plays that role very well.
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  He does and he does not age. So that was that was interesting. And then the second thing is that I love Harry Potter 1997 to 2000 sixes were the best years of my life because of the Harry Potter books. I have self selected myself into the Hufflepuff house, but ever since 2006 it's been really quiet because there haven't been any hyper Books. And then JK Rowling put together a team. And they they created a new play called the Cursed Child. And it's 19 years after the last Harry Potter book, they decided to do it as a play because that was the only medium that made sense to tell the story. So the sequel, but the script of the play is actually available online. The play itself is in San Francisco this week, and it's two nights. I think it's three hours each is a huge, huge commitment, but I'm super excited about it. But if anyone can't get tickets to that, I think buying the script would be the next best
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  thing. Very cool. Lauren, what do you have for us?
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  I have a couple. The first one I'm going to pick is Hawaii, actually, because I'm going there next week for vacation my first time in Honolulu. So I'm very excited for that. If any of you on the podcast, you're this please send me suggestions on what to do. So I'm going to need it. The other pic I have is TypeScript conference. I was there a couple weeks ago and I really enjoyed it. I got to learn about all the you know the cool new features like knowledge coalescing, coming into TypeScript. And I'm a huge fan of TypeScript. So I'm very excited by that. My other picks are a blog post I read, called the meta conversation. It's a blog post by Julie who works at Facebook. And she talks a little bit about how to uplevel the conversation when you sometimes are in a bit of an impasse, or you're kind of coming up against maybe someone who is being stubborn or overly defensive. And it's a way for you to, you know, kind of help guide the conversation to a more productive way. So I thought that was really great because sometimes, you know, if you if you are having a discussion with someone who's being a bit difficult, then it's always frustrating. So that was a good reminder. And my last pick is a Netflix movie called El Camino. I've been watching Better Call Saul a lot recently. So when the El Camino movie came out with I have to watch this. So I've watched it, it's really good. I'm not going to spoil anything. But you should definitely watch it and I've even started rewatching Breaking Bad again because I'm I don't know I just like the show a lot. So it's so interesting and when you watch it again you get so much more insight about the character than like all the foreshadowing that the producers are I mean very interesting.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Yeah, I feel like the watching El Camino made me want to go back and watch Breaking Bad I haven't got to the point yet where I've started but that is a plan to go back to it and I think the best way to describe it if you've watched Breaking Bad is it's just a long episode of Breaking Bad with like some missing pieces that are now told in the story. So I think it was well done. I enjoyed it as well. All right, I have one pic. And because I kind of feel like Priyanka and and Lauren stole a little bit of mine where I'm like, yeah, those are both great pics. So instead of choosing another Netflix show, I'm actually going to choose the hbos watchmen, which really actually just started last week with their first episode, but it was a really good first episode, so I'm really excited for the rest of the series. Like the first 15 minutes is just, like really amazing and intense. Definitely need to go watch that. If you haven't seen it yet, I highly recommend it and I'm excited to see what they do with the rest of the series. Before we end the episode, I want to thank Priyanka and Lauren, for joining us. Thank you. It's been a pleasure having you both join us and tell us a lot more about Netflix studio. Where can people get in touch with you? You can send me a tweet or you can send me some memes as well. I'm <a href="https://twitter.com/sugarpirate_">@sugarpirate_</a> on Twitter. Don't forget that underscore.
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  I am <a href="https://twitter.com/priyankaavj">@priyankaavj</a> on Twitter and on LinkedIn either forum works means are appreciated on either 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Jem where can people get in touch with you? 
  
  </p>
  <p><strong>Jem Young</strong><br />
  You shouldn't, I'm a busy man. But if you have to <a href="https://twitter.com/JemYoung">@JemYoung</a> on Twitter.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And I'm <a href="https://twitter.com/burgessdryan">@Burgessdryan</a> on Twitter, thank you all for listening today's episode, make sure to subscribe to front end happier podcasts on whatever you like to listen to podcasts these days on Follow us on Twitter at <a href="https://twitter.com/frontendhh">@FrontEndHH</a> any last words
  
  </p>
  <p><strong>Jem Young</strong><br />
  seen breaking Brown? And
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  yeah, Jim, you need to go watch Breaking Bad.
  
  </p>
  <p><strong>Jem Young</strong><br />
  I've tried twice and I just can't get into it. Like I've watched the entire season and I'm just like, you
  
  </p>
  <p><strong>Priyankaa Vijayakumar</strong><br /> 
  can watch El Camino without breaking bad.
  
  </p>
  <p><strong>Jem Young</strong><br />
  how I did it. I was doing a Better Call Saul, which I really enjoyed. I think watch season of it, but I felt like there's a lot that I'm missing. Back. Sorry. Yeah, I just Yeah, I've tried twice on breaking bad. I just doesn't do it. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  You're missing out. 
  
  </p>
  <p><strong>Lauren Tan</strong><br />
  You are
  </p>
    
  `;
  return transcript;
};