// Episode 1 transcript
module.exports = function() {
  'use strict';
  const transcript = `</p>
  <p><strong>Ryan Burgess</strong><br />
  Well welcome to a new episode of the front end happier podcast. We are still in quarantine. So we are recording remote but there is some added benefit in this episode. I'm excited we have returning guests, Sarah dresner joining us to discuss complex projects and code bases. Sarah, can you give a brief introduction of who you are, what you do and what your favorite happy hour beverages?
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Sure. Hi, my name is Sarah Drasner. I'm Sara at on Twitter. I am VP of developer experience at net. LIFFE I Netflix which is confusing for this call. I also do a lot of open source work including I'm a view core team member. I also write first. I'm a staff writer for CSS tricks. And yeah, that's it. I think that's about it. I am the proud mom of two puppies.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And what are your puppies names?
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Well, I have one name sudo. So I can tell her sudo sit, but she didn't listen to me because I don't have root access. And the other one is called beam which is the Erling runtime because my husband nice loves early. But the next time we get is going to be called Cat
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Cat. That's so good. I love it. And then has your happy hour beverage of choice changed since the last time you were on
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  yesterday. We have Glenmorangie sushi, which is my favorite. Actually, I got it at the gas station down the street. I think they just had it for display purpose.
  
  Don't buy that. I'm like, No, I want I need it.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Like I really, really want this right.
  
  Alright, well, let's also give introductions of today's panelists. Do you want to start it off?
  
  </p>
  <p><strong>Stacy London</strong><br />
  Sure. I'm Stacy Lynn, and I'm a senior front end engineer at Atlassian.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  I'm Ryan a club. I'm a senior software engineer at Netflix,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Jim young, senior software engineer at Netflix. And I'm Ryan Burgess. I'm a software engineering manager at Netflix, not netlify Netflix. In each episode of the front end happier podcasts. We love to choose a keyword that if it's mentioned it all in the episode, we will all take a drink. Now what did we decide? Today's perfect keyword is complexity, complexity. All right. So if we say the word complexity, maybe even complex, we will all Oh, Stacy's not agreeing. We'll see what happens. I mean, what else we got going on tonight? Sure. All right. Let's hop in. I'm really curious to start it off with knowing how each of you like to ramp up in a new code base. Maybe it is something that's legacy or you've joined a new company. So it's already been built. Maybe it's not just a brand new code base, but I'm curious how each of you ramp up and jump in.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  I really want to hear the answers to this because I feel like I am so bad at this. So I'm going to sit back and listen and learn from this one.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  I actually I do something that I inflict on other people.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Oh, I like this.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  I learned best by like recording and teaching, which should probably not surprise anyone considering what I usually do. So I tried to update docs while I'm ramping up on a code base. So like, I look through the if there is existing docs, which sometimes there isn't, ideally there is but sometimes there isn't. While I'm looking through the docs, I update them or if there isn't any, I make them and I do this to people who work for me. So I make every member of the team go through and update documentation as they're learning and sometimes people are okay with that and like into it, and sometimes People are not.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I mean, it makes it better for the next person jumping into, which is good. Because documentation gets out of date.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  It usually does like pay off in team productivity or, you know,
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  it gets out of date. Code comments, oh,
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  are we picking fights?
  
  I would argue that code comments get out of date because you're not maintaining them like you're supposed to, because they're in your code. If code comments exist in your code, it's your job to either maintain them or delete them I update my code comments but
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  I never touch anybody else's Oh, wow. Yeah, why not? I don't know I just I usually just skim right past I don't actually knowledge their existence even I usually just
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  but that's like leaving a sign up. That's like
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  I've had enough experiences where it's just not actually been remotely close to the code I'm reading. But that's that is vicious circle. Have to be they have to be updated.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Or you can delete them. I would I would prefer that someone delete a comment if it's not relevant anymore than leave it around. Like, ideally. Yeah,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  ideally I can hundred percent agree like I think comments are amazing and you should be commenting and you should be editing others if you've made a change and acknowledging those changes and with a comment. But I also have one thing to say about comments as well as much as they can be helpful. But if you over comment, meaning is like you write like a paragraph for some change, people are gonna ignore that. Maybe that's Ryan, some of your symptoms there too, where it's like you've read, it's like, it's bloated, and you're like, Ah, this is too much. Yeah.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  Or it's like they're useless, right, like slash slash return a number, something that doesn't make like, yeah, I could that I can figure out.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Yeah, I mean, I actually have a talk on this exact thing. Because there are bad comments like I think that we get, we kind of get on one side or the other of like a comments or Good or bad, but there's they're bad comments, and they're good comments, and we don't talk through the nuances there. Yeah, if it's repeating what's there, then that's annoying because you're reading it twice. Like that's so unhelpful. But sometimes code comments can be really useful for explaining the why because code can always explain what not the Why
  
  </p>
  <p><strong>Jem Young</strong><br />
  yes, I didn't want to jump on this yet. But since Ryan's gonna go ahead and start start trouble a few minutes into the podcast, why not? Yes. 100% agree with you, Sarah. Comments, explain why. And code explains the how, yeah, I the best way I think about the best design system, especially when we're talking about complex systems. Cheers. Is, is your question, Ryan, when you're when you first started a company, and we've all started at a company at some point, and you're like, I'm smart, and then you get dropped into a codebase. You're like, I have no idea what's going on. What's the ideal system that you want to be dropped into? Just like Sarah was saying, You want something with a good read me because that means People care about other people on the on the code. You want something with a lot of comments. Because people's code styles differ wildly, especially in JavaScript, the the wild wild west of programming, the way I write, let's say, an asynchronous function probably looks completely different from the way Stacey writes it. And they're all valid, but you want comments explaining, like, kind of why you're doing it this way. And that really helps onboard a new person. And then finally, of course, what you want is a bunch of tests so that when you finally get ramped up and you make that change, you want to be certain that you didn't break anything. And that is an ideal system, something that you can just drop in and get get going. And you have full confidence in your changes and you understand exactly what's happening.
  
  </p>
  <p><strong>Stacy London</strong><br />
  Yep, I just dropped in there. Kobe had none of those things, no unit tests, no comments. Very scary to change a
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  pic to mean you get one or two or to two of the three. You can get really good unit tests. Good comment. Don't ever get All three of these, I have never seen a code base that has all three. So
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Stacey, how do you approach that?
  
  </p>
  <p><strong>Stacy London</strong><br />
  Well, I was lucky enough to still know who wrote the code originally, and that person was still at the company. So I reached out and I said, here's the thing that I want to do. And then we pair programming on it a little bit. So that was nice. But that's if that person's not there anymore, and you don't have a way to get ahold of them. I mean, that then you're in a different predicament and you're just sort of have to make the change and try and test it manually as best as you know how but yeah, it's still it's, it's not it's not a good place to be in
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  that reaching out among the like, inside of a company is so funny. Like I definitely showed up just like, you know, I had a big company, when you have to like go find their office and or row of desks or whatever, and you sit next to them and you're like, so
  
  I have something to talk about. It's called line 10,072.
  
  Explain yourself and they're like.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I like that point, though I think like it when you can talk to people in your team or in the company just better understand. I think that's always really a lot better. But even to your point, Sarah, I think another good point that I always think about looking at a new code bases, being empathetic, that there are trade offs made is like you sometimes look at the code, and it's not that great or something was weird. And but there was a trade off. And there was a reason for that. Maybe they were rushing something out the door that happens to all of us. And I know we even mentioned this in our previous episode that you kind of have to get context of why someone took that certain approach and that it doesn't mean they're did a bad thing or poor job on it. Maybe they did, but it could have been just that they were trying to ship something quickly or there was some other dependency that they had to do that that thing, which would help having a comment of had to do this ugly code from This reason
  
  Jem's nodding his head, I see that
  
  </p>
  <p><strong>Jem Young</strong><br />
  we we, we had this exact discussion in the previous episode. We're talking about cognitive bias and software and it's it's our biases engineers to jump to a code base and say, What the crap is this who writes code like this? Why would they do and like, it's it's really easy to be critical because I feel like when you're first jumping into a codebase, that's what you feel, is the most impactful thing you can do is kind of be like, hey, you could do this better, you could do this better. But really what we should do is understand why it was written that way. And is this the status quo? Is this a one off? This is why comments help because they explain like what the business purpose of the code being this and this crazy reg reg X was doing. But yes, I have started. A few companies started at a few companies and it's always scary when you're first jumping in. And my first thing is always like, who wrote this like This is the wrong pattern. This isn't the modern pattern or anything, but when you're dealing with big legacy systems, stuff is around from six, seven years ago. And yeah, we might have been using reacts or something else. And it's gonna look a lot from the React you're familiar with. And you can just say, Oh, this is, how could they do this is the wrong pattern, we know better than to spread props around now. But you know, things change, you have to keep an open mind. So I'd say that first starting in system, I try to keep an open mind.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  Yeah, I like that. I just did a really large code conversion. And I one thing I like kept repeating myself is every line of code has a story, right? There's reason Yes, someone put that there. And a couple places where I was like, What the hell is this? This is make sense. I left it out of the conversion. And then two months later, there's a JIRA. Oh, yeah. That's why that was there.
  
  </p>
  <p><strong>Stacy London</strong><br />
  When I first start like this, the story part that you just said, I summon like, the first few days if someone's just like, here's some Doc's go get your development environment going, get going. I don't, I don't want to do that. I want to talk to somebody about like, tell me this, like, tell me the story of like, how did this repo come to be? And why are you know what are the right patterns that you can tell me like verbally? Are the right patterns that are you know, we should use if there's a doc on that cool but I've it's rare that I've seen Doc's that talk about the patterns. Like Jim, you mentioned, like, oh, written to react this way. Like, there'll be like, several ways of doing it in the code base. And no one has like written down like this is now how we do it. It's it's like talking to people. So I find that really helpful at first
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Jamison, Dan two runs. He's one of the people who run react rally, did a really wrote a really great article a few years back that talks about how when you're first joining a company, you have that feeling, but it's actually a superpower to bring up the things that might be glaringly obvious that people have just gotten used to and we you know, I've been trying to Push on that a little bit instead of it being like the like, Oh, no, that's just how we always do it. Cassidy Williams just joined my team. And yeah, yeah. And, you know, I've been trying to encourage her to say like, let's see, let's use the fact that you aren't familiar with stuff to call out the stuff that isn't working the stuff that is like, wait, but why or like, the stuff that's bumpy that we've just gotten used to? Because that's, that's really valuable or even just like Fudd, right, like any kind of like, fear, uncertainty or doubt that is surrounding any particular area is more easily surface surface when you're, you know, there's a certain drumbeat that happens at a company, and everybody kind of gets on the same page of like, Oh, yeah, we like x, but you don't really know the non x if you're joining in, so it's kind of useful to check in with those pieces.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Like I love that. is just encouraging new people to have those questions and question those things because they are bringing a fresh perspective. But another point too, is that sometimes there's things that I think about where I'm like, I would love to get around to using some latest and greatest tool or framework in our code base. But it's just like, I haven't been able to prioritize that. And so oftentimes, I've even had engineers on our team join and be like, Oh, why, why aren't we using this or that? I'm like, that's a great idea. We should do that. I know that others have thought the same thing and just haven't been able to find the time to do that. And if you're passionate about it, let's do that. Like that's, let's get let's move in on that. Because I think that's easy to think of, why haven't we done it, but usually, it was just a trade off against the actual work that we're doing.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  And that's hard to remember to do as a manager, like, depending on how tight your deadlines and priorities are stacked up, like, you can't always have that. Sometimes it has to be like, Look, we just got to ship this thing in the next two weeks. And I'm like, I appreciate your thoughts and opinions, but we got to go like, so yeah, I'm definitely no judgment if you don't have the time and affordance, because we've all been up against those product deadlines.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Another one Stacy had mentioned coming into code base. With no unit tests that can be a decent way to learn is add unit tests. Because you have to really understand how the codes working to write unit tests. And so if you're poking around at the code base, you can start to really just start writing some tests it helps the team to but also it can be a decent way to learn.
  
  </p>
  <p><strong>Jem Young</strong><br />
  But the only thing I'd say about that Ryan is oftentimes getting the unit tests integrated with your build systems. And since it's 2020, we all have build systems can often be like a monumental task, like far outside your scope of being a new person, which, yeah, it's much easier to have like just one unit test integrated and even if you write no test, just give the people the ability to write tests. If you can, then having a new write tests is a great way of doing it,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I guess I was my naive assumption is that you can easily write tests there that people are just lazy and didn't write them. It's all in the build system, it's ready to go. Because I 100% agree a few gem is that can be really a big task to just get that in the build system.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Yeah, depending on the system, you're inheriting, you might just be screaming for the first.
  
  What is this backbone, angular?
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Five versions of jQuery? backbone, he got some Angular in here, what's going on? Alright, so here's a good question. At what point do you call this code base brittle enough that you need to rewrite like, what are some signals? Is it the fact that there is 10 different versions of jQuery and backbone? And like what point what are some signals that you all see where you're like, I think we need to rewrite from the ground up I
  
  </p>
  <p><strong>Stacy London</strong><br />
  think if you're trying to build a new feature and in that existing In Kobe's, and there's so much entanglement and multiple layers of technology that are conflicting with each other, that maybe it takes, like, longer to work through that than to build the feature. Like if your estimates like, Oh, this wouldn't be so hard if it was all one stack of things, but it's probably gonna take me like 10 times as long just because I have to weed through all this code that that's maybe like a signal
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  that something's not right. Also, like if you have to build abstractions on top of the thing that you're building, and it's complicated. Like there was one project at an unnamed company that I worked, where we were building a system and that system had to get them get ported over to another system, and be used for a slightly different purpose. So if the code wasn't clean enough to begin with, that would have been way more challenge right like you like it's it's tough enough. To build something that can be ported over and altered slightly for a different purpose, it's especially tough if you do have many different versions of jQuery going on and things like that.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I like Stacy kind of alluded to this always good time to revisit your code base. At some point in time. Maybe it's I don't know what the rule is, like, maybe five years, I don't know. But to me, it's, it goes to the point of when you're finding that you're slowing down. Because I think the ultimate goal is what you're trying to do is build out new features ship new product to your consumers. And if you're moving at a slower pace, and it's become more complex, cheers, cheers, cheers. That's when
  
  </p>
  <p><strong>Jem Young</strong><br />
  you might want to rewrite if you're working somewhere and you have a dedicated team, or even a dedicated person that just works on the build system. You have a complex system.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  I would love people who just worked on that. I've definitely worked at companies where like, it was nobody's job to work on the build system. And then it was just like a hero's journey like you would like like It wasn't even part of product timelines or anything. So it would just be like, Frank did this on his Saturday. And we love Frank. Now we're all buying drinks, like it was just not part of like, I agree with you. But I also think that a lot of companies will have these kind of like pieces of the code base that they don't consider the code base because it's not product focused. And that tends to like we, we've talked about this at a few companies about like how those types of configuration for teams can sometimes lead to tech debt because people are only feature focused and never pausing to that that type of tactic just isn't owned by anyone. Is it helpful to have people to do that though, like, is it helpful where I mean, some teams are too small to even do that, but but even a small team, maybe there's like four people. Is it helpful to have like one person dedicated to owning maybe The build system, or cleaning up code and the architecture, I don't know that it needs to be one person's responsibility, but at least having some organization structure where there's a sense of ownership, like, during this time, this group is an owner of this. And this time this group is an owner of this because otherwise it becomes a no man's land of waste where people pop into that, or at least this is my experience, I'll just speak for myself, where folks just pop into the system long enough to do one thing and there even becomes a thing of like, don't do too much to fix it because then it will become your responsibility for people will always go to you from then on, and then you'll have your regular job and a new job, which is Webpack.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  A new web pack.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  That should have been. I don't know that might have just been at the companies that I
  
  </p>
  <p><strong>Jem Young</strong><br />
  know that that's absolutely my experience everywhere else. I like what you said about people say, oh, code is for product and product alone. And anything related to that is purely tangential. I think build systems folder that usually most build systems I come across her. Well it works and don't touch it unless you really know what you're doing. Otherwise, you're going to be the last person to touch this. So it's on you like the entire thing. You're like, I changed. I've changed one line actually just added a comment, because I didn't understand it. It's on you. You you now own the bill. I don't know anything about parcel. I would say testing falls under that too. As far as like, it's a reflection of the maturity of the organization. If they prioritize like, is your build system up to date to remain up to date? Do you have testing in place because that's not product focused, per se. It is but a lot of people think it's not and especially the we're a fast burst scrappy, fast growing startup, our codes not gonna live that long. We're not to do tests. That's cool. But there's a point when you say my system is complex, and I probably should have some tests back here. it up. But usually when that happens, there's like a major bug or outage. Cheers. Cheers. It's usually like an outage or something. It's something critical that precipitates the need for testing. Not someone comes in like we should write some tests. Like, yeah, yeah. Sarah Stacy, you take some time and do that. That never happens. It's like, Oh, crap, we dropped production database because we have like, no tests in place and no resiliency. And then something happens. I 100%
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  agree because like, usually you work with, like, for a product usually have like a product manager, the product managers like, Hey, did you write your test? Did you make sure that's good? They're they're not really asking you that?
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Oh, I was like, who do you work? Oh,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  no, we don't have never gone but I do think that that's on engineers to help communicate that to the rest of the team. And Russ a team typically being a product manager, maybe designers, other stakeholders is really talking through why You need that time and actually setting aside time for shipping a feature and making sure that it is well tested. I think to me, it's just communicating the benefits to that. Just help them understand that. Yeah, they're not going to come to you and say, Hey, did you write a good test there? They're not asking that. They just they're hoping to ship their feature.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Yeah. And I think even a project manager can help with that. Not Product Manager, but like, project managers. I've good, really good ones are worth their weight in gold, because they'll do little checks of like, Yeah, but did you do everything that you need? And they won't necessarily say, Did you write tests, but they'll say, like, Do you have enough time to make this sustainable code? Especially if you give an estimate? Like I could do that in four hours? They're like,
  
  you maybe could But should you?
  
  So I've definitely worked with some really good project managers who kind of kept everybody in in check that way. They're not Oh, it's not always like that. But I think also if there are situations where products And engineering work well together where engineering can say like, hey, I need this time to work on things like tech debt and product says, Okay. And I've seen that in action. In fact, I would say metla phi is pretty good at that. I'm really happy to see how well product and engineering work there so it can happen. I know it's a myth. Like it's like this like mythical beast. In the meadow people are like, does that exist? Like No, I've seen one.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I will play for Netflix. I feel like I've actually found that we're, I feel we've been able to talk through those and product managers really understand that. They want you to ship a quality product. It's not just about shipping something quickly. But I think you have to explain that too. It's not just do it and not say, Oh, it's gonna take me longer or I didn't get around to this. It's just bringing them along for the ride. So how do you make improvements to a code base that has basically become very complicated. had to find a word not to use the word complex.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Cheers. Cheers. Cheers very carefully. There should be some roller. There's like, Is there a golden golden book of rules for engineering? Because one of them should be one. always come in your code. I don't care who you are, what language you're covering your code to. It is so much easier to make a system more complex and is to make it less complex. Like I don't know. I'd like to hear everybody's thoughts on Yeah. How you actually do make it
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  less complex tattooed on my that's a really good quote. 
  
  </p>
  <p><strong>Jem Young</strong><br />
  Jem's law. School Jem's law
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Jem's law. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  This quarantine shit is annoying. I want tattoos so it would be nice
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  if we find Ryan with just like a ballpoint pen.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I'm also that point, I used to have tattoo machines I don't anymore. So 
  
  </p>
  <p><strong>Stacy London</strong><br />
  What did you do with them? This is a whole topic What?
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I can't remember he was around when my son was born. I was like, Yeah, I don't want these around the house just in case.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Just in case you're tempted to tattoo him just a little.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Now he draws them on himself with markers and tells me their tattoos all the time.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  Oh, can't you just take a road trip to Georgia? Right? They're tattooing, aren't they? Yeah, I'm
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  not I'm not doing anything like, that doesn't sound very safe. Alright, as Jim says, calm comments are important. What else do we do for complicated code bases? I
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  mean, I think what what Gemma is getting at here is really important. And in fact, if you read books on like refactoring, like the Martin Fowler book on refactoring is pretty good. And it kind of gets to this piece too, of like, you know, taking something that's complicated and stringy and everything's attached to each other and find breaking it down to explain bits so that it's, you know, as tangible as possible. And I kind of like the kind of the naming principle with functional programming that if something is too complicated to give a good name to it, you're probably giving the function too much responsibility that that resonates with me because I do feel like anytime I look at code where I'm like, Oh, dear Lord, it's usually something that I can't explain in one name, right. And if I can start to break that apart into smaller functions, smaller pieces of responsibility in it, it starts to become a little bit more manageable where I'm even the legibility becomes a little bit more manageable, where I'm like, Ah, this thing does this. Then this part does this. And then this part, and then they come together, like so. Instead of like, reading a really long run on sentence basically,
  
  </p>
  <p><strong>Stacy London</strong><br />
  I think one thing you can do Maybe it shows like a level of engineering maturity is if you come into say, like a legacy or older codebase. And you have this temptation to bring in like some new pattern or to like, refactor more than kind of what you were actually your original focus was or what the task was to maybe just don't do that. Like, it's especially if it's cold, that's like, maybe not touch super often, or it's not, like very, I don't know, highly important, like, just, you know, use the jQuery, whatever that's there and just extend it a little bit to do what you need and don't start adding a new pattern and adding another library, if it's if it's not really that important to do it at that time.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  Now, as I say, restraint is a very undervalued skill.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Yes. Especially as engineers, and our instinct is just to build, build, build and modify not to understand what someone did before because that takes more work. Like let's be honest, I could write code all day. I could rewrite Netflix if I wanted to. But to understand what everybody else did before me takes Far, far more work. And that's less sexy. Because it doesn't look like I'm actually doing anything. It doesn't feel like I'm doing anything understanding, like what Ryan wrote, versus like, I just deleted that because he didn't know what he's doing. And I rewrote it all easier, because I know what I'm doing.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  All right, are any of you thinking about what it's like to review the code that you're refactoring when you refactor? Because I guess I, I think about that. Time and again, because I am also reviewing code, right? And so the more people Hand me like a giant honking, I changed everything in the world kind of prs. I mean, I just don't, as a reviewer, you're like, this is never gonna get reviewed. Like I don't have time for it now and I'll put it off next week. And then they're like, why isn't this coming? Why is it stuck and it's like because I don't have four weeks. Millions of changes.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I hate that honestly, like anytime that I get like a large PR, or even a large email, this goes to email us, it's like, my response will take a lot longer it will. It scares me I look at it like oh yeah, like I might even, like, open it up look at it. But yeah, I'll get back to this. And I put it off because I feel like I need to set aside more time. So I think like doing smaller prs is a lot better approach is probably what you're kind of getting at Sarah.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Well, I think, you know, as you as engineers go more into management, they start to see some symmetries between the management columns and the code things. I mean, I think that like, I, you know, I, as I do more management, I have emails where I'm proud of myself this way that I was when I wrote tanzu code all day, like, you know, I mean, I still write code all day, but like, the those, I'm not expressing myself, Well, there's some pieces of communication that are Similar to code communication where you don't put too much on the person or, you know, when things go badly that it's because too much was communicated at once, whether it be code or email.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Yeah, it's it's being clear and concise. Honestly, I think that easy to digest and being clear, not complicated. All that goes into writing in an email or verbal communication, or in your PR or code. I think it's all really trying to be trying to make it easier for someone else to digest. If you have to over explain something, maybe need to rethink that.
  
  </p>
  <p><strong>Jem Young</strong><br />
  It's, it's good. You mentioned that I like the reviewing part when you're thinking about writing code or any large spaghetti like systems. I'm avoiding the word as well. I, I think of I caught the Twitter problem. Like I'm really bad at responding to emails, like really, really bad. I'm sorry to all of you feel me. I'm getting to it. But like, if someone reached out to me on Twitter, I will probably respond much faster. Because just the brevity of the message, I can be like, Okay, I get that it's easily digestible. I can read, I could respond to that. But when we think of large systems, it goes against our first instinct as software engineers, which is, I want people to see how smart I am. So let me refactor this giant block of code, I'm going to submit this 2000 line pull request, and people will be like, yeah, Jim really knows what he's doing. Like, look at that code. It's so complex, I can't even understand it. He must be really smart. And I'm just saying for myself, because when I first started engineering, I wanted to prove myself as an engineer. And I said, that's the better way to do it. But that's wrong. It's small, digestible chunks, because you're thinking of like my teammates like Ryan, who needs to review my code and understand it like quickly cuz he's got a million other things to do. Like, that's how we should be coding. And that's partly how you start to break down a complex system is like little bits. But speaking of the original question, I really love this topic because we're just going everywhere and it's touching everything. One way of simplifying a complex system, I'm going to say I'm going to whisper it because it's a dirty word. And some of you may know like it. micro services,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  micro services. Oh, yeah.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  I'm definitely down with micro services. I probably wouldn't have Netlify. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  cheers to micro services.
  
  Don't worry, you could put netlify or Netflix and you're good. Your micro services exist,
  
  </p>
  <p><strong>Jem Young</strong><br />
  that star. And micro services are a double edged sword. It's more the encapsulation of separation of responsibilities that microservices give you. So if you say I've got this large system, it's all I don't know Django pretty common for a large monolith. And I want to break this up. You say, oh, let me break out the email service into I don't know, Java running on Tomcat or something like that, and then you break those up into different micro services. So That when you need to refactor the future, it's much simpler. The danger of that is you have to say this, I'll call the Netflix problem where we don't have an architect, as Joffrey saying famously said, there's no position of architect at Netflix because no one person could keep the architecture in their head, because it's so complicated is insanely, insanely complicated. And then you end up getting siloed. And then you have a different sort of complexity. So microservices aren't like the panacea that's gonna solve all your problems, but they're a good start, if you really know what you're doing. The one
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  thing I really like about them is the clear ownership. I think, like you can really have a defined ownership of a service, but also hire expertise for that specific thing. And to me, that is really beneficial. Of course, like at a very small startup, that is not possible. You're just like, We're in 30 different hats to get a feature of the door, but in the World of microservices, that is my one favorite thing is like, you know that service inside and out. And there might be other services, you have no idea what's going on. And that's okay.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Although I would I would challenge that a little bit like it's not that you're wrong, because you're definitely not. But I have worked at small startups that were a few people that had microservices just because an industry you the people go from micro service to micro service, because that what they're doing is separating things out, to keep things testable, to keep things reproducible, to make observability a little bit better. So that I think that there's the human element of like, oh, in a large, gigantic system, we have these like clear tiers of responsibility, and we know what goes in and what we're responsible of coming out. But it's even beneficial sometimes in smaller systems, because those that same thing that keeps the team working well can make the system a little bit more Reliable because you're not dealing with possible side effects that could come from the intermingling of them that you're just not sure about. At netlify, we're dealing with so many different ways that people want to deploy code, right? We've got people like Citrix on our platform who are deploying millions of pages a day, just for them. And then we've got people who are small hobbyists, and people are trying and this is not on Citrix or anything, but like every different thing is deploying things in a slightly different way. And there are hacks in their code base and there's all sorts of stuff. So we we have to step up to the challenge of making sure that things on our side are reliable and dependable, even if what we're given is not and splitting things into microservices can sort of help. Understand, okay, we know that this was supposed to happen here and this was supposed to happen on Here, and if that doesn't, then something didn't work. So it can, it can be good for that as well.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Such a valid point to also think about the benefit is even if you are the owner of like, like I talked about it is more of a large company and you own one service, you know, the inside and out in a smaller company own five or six services. And the benefit there too, I think about it is even if you are in a small startup is you're separating those concerns, so that even if you wanted to migrate one service to you know, update to some latest and greatest technology, you can do that. And as long as that contract to the rest of the other services the same, you're good, everyone's just like happy as can be. So I do think you're right, Sara is that there. It's not just for large companies. It is even for smaller companies that you're just making things really easy digestible and really specific.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  That goes back to I forget who brought up tests before but tests for good or you know, for complicated systems being a good piece to see You know, any kind of thing that can tell you back like, yep, we've got it. It's what what you think is happening is happening?
  
  </p>
  <p><strong>Stacy London</strong><br />
  I think it was like maybe a little bit not a counterpoint to the microservices being a good thing for complexity, but just that it it can you have to have some good documentation. Like I think what Sarah said, like, you have to have good infrastructure and, and mechanisms for Microsoft services to be successful. And if you don't, it can be like, hard to know, like, Oh, this thing is going wrong. What repo is that again? Oh, that's in like, you know, like, Oh, it's got split out and it's in this other repo way over here, and, oh, I don't have rights to it anymore. Oh, what am I gonna do? like that kind of stuff can really make it complicated if you're not set up for it. Right?
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Well, and also that communication is costly, right. Like, even in small systems, big systems, whatever like I don't know if you saw David Rupert put a tweet out where he was like, this is the best explanation of microservices I've seen and it was like, This pm was like, Okay, well, how hard is it for us to just add a Friday? Yes. That
  
  </p>
  <p><strong>Jem Young</strong><br />
  is hard far as like, Wait, are these this real company? They listed are absolutely. Sounds like one of the meetings I'm in.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  But it does also feel like that from the engineer's point of view, when someone says, Well, how hard is it to just do x and you're like, Oh, my God.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So before we jump into pics, I would love to hear you know, we talked a lot about people, having, you know, all of us having to jump into old code bases, or maybe it's something that's very bloated. What's one piece of advice that you would give someone when they're jumping into a new code base that may need some fixing up or might have been a little complex? Cheers. Cheers. I liked
  
  </p>
  <p><strong>Stacy London</strong><br />
  what Sarah kind of mentioned in the beginning of the episode about just if there is documentation, like adding to it and correcting it as you go. I think that's just huge. If you're writing notes down about something, as you're learning this new system, those notes are probably valuable to somebody else. So share them somewhere, even if it's just like, a little personal blog that you have that you can point a link to somebody and they can benefit from it. Like, I just I find that so helpful. And I think a lot of people do as well.
  
  </p>
  <p><strong>Jem Young</strong><br />
  I would say, yes, plus one to readmes. Never met a readme I didn't like unless it's out of date. keeping up to date is actually difficult. I would say this and this one's hard because it's easy to say, at a company companies that we work for which pretty open and collaborative. But when you're diving into a new system, it's a new person onboarding or something like that. Ask a lot of questions. And like, ask the hard questions like, why is this? Why do we have Why is our build pipeline like 20 steps? Why? And hopefully you have a team that understands and like, isn't like, Oh, this person doesn't know what they're doing. That makes people question like, Yeah, why why is that the way it is? You don't necessarily have to change things yourself, especially starting out on your own because you don't have kind of a, I don't know the street cred to, to like push these large changes. But it's a good place to start to get the team thinking about these things. I would also say if you're an owner of the codebase, or manager or something like that, have people own different parts of the system. That's kind of what we're talking about. microservices is just an ownership model of gems and try to read charts read me Oh gee, Ryan's in charge of the type system, Sara's in charge of this a services, but like when you make people owners of Park services, Some say he, he owns the build system, it automatically makes it better because you have someone to go to every single time and engineers don't want to be bothered. So they're gonna make sure that thing runs smoothly by the end of the day. But when nobody owns anything, that's what I'm like, I'm gonna reach over here to PHP land. I'm just gonna, like import this real quick and, like, you end up with spaghetti. And you had to put this giant complex with some that no one understands
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  those two are really great. I mean, well, first that like number one is survive, right? Jumping into really complex system. I think everybody like that. It's fun for us to be on the podcast and wax poetic. But if people are actually doing this in real life, like, it's hard, it's just really hard and give yourself a break. Because like, I think there is that piece of you that goes like, Am I the only one who doesn't understand why we have five versions of jQuery or like, you know, that there's this, this piece of you that's like, I got to ramp up on all of these things, and everybody else seems to know what's going on. But me and like, there's a bunch of stuff that goes on. So there, there's that first level of just like, try to figure it out as best you can and not put too much pressure on yourself. But the other, if you get past that stage, and you feel like you want to go beyond that, and you have the space and time, anything that you any of the first prs, you can do that make other people's lives a little bit easier. You will earn more trust more quickly. Like, if you come into a team and your first fixes are ones that the entire team's like, Oh, thank God. I'm so glad you did that. Thank you so much like that actually does kind of set you up for success in the future. People remember these things because we're humans and stuff. So yeah, that's that's my advice
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  like that. I think one other thing, and maybe this isn't specific to dealing with necessarily a new code base, maybe it's just dealing with codebase in general, learn to code defensively think about future use cases, I think about this as more of a collaboration to is that you're not going to be the only one touching this code. And so trying to think a little bit ahead of like, how will this code extend? What other use cases can I think about? Maybe you don't necessarily code it for it in the moment there. But just trying to think about how it scales can go a long way. It's not it's, it's not perfect. You're never going to think of 100% of the use cases, never. It's just not going to happen. But just put yourself in the mindset of Okay, this is what I need today. How will this help later in the future? A couple weeks from now or a year? Yeah, I love that.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  Like, one thing I would say is have an open mind.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  You know, don't go in and start bashing the code or the person who wrote it. There's probably a reason behind it. And you don't have all that context. You may not have all that context. So just have an open mind. Be kind Find someone asked maybe why what happened? Or why is this written this way or just don't just assume that there was a reason it was written that way and accept it. Awesome. Those are all really great points for some good advice. At the end of each episode, we'd love to share pics of things that we found interesting and want to share with all of our listeners. Let's go around this virtual table and give pics for today's episode. Who wants to start it off?
  
  </p>
  <p><strong>Stacy London</strong><br />
  All right, okay, I'll go to Well, it's kind of three picks. The first pick is a song called leaving the grid by I tell tech it's a there's a really beautiful video that goes along with it which is kind of like the part to the pic by someone named Ruben fro and does a lot of stuff of the unity. And I think it's like film of like someone walking through, I think somewhere in Japan and kind of deep structured to go with a song It's very very beautiful really cool kind of chilled out thing to watch and listen to. So check that out. And then this is a very kind of departure from techno but in the 90s I liked an artist called Fiona Apple. And she came out with a new album and it's fantastically weird thing. And under the table is one of the songs on it that I really I really like. But yeah, it's it's a strange album, but it's also fantastic. So those are those are my picks. Right on.
  
  </p>
  <p><strong>Jem Young</strong><br />
  I have two picks. I don't have a valley silicon because I don't know no one sent me any I just maybe the world's just too depressing for me to make fun of the rich people right now. Yeah, but I got nothing. It's it's never never that depressing. But I have to Next, the first one is a blog post. It's called on being a senior engineer. And I found it really useful, because it's a question that comes up a lot, and especially front end development, which has a high percentage of at any given time of newer people joining because it's, it's a more friendlier environment, gotta get started programming. There's kind of this misconception about what a senior engineering is. And a lot of people think they're the, I don't know, the john reisig. They're like the Rockstar engineers who create some insane library and everybody uses it. And you're like, wow, that's senior engineer. That's what they do. They code and they architect things, but really being a senior engineers many things. And one of those is just doing that non sexy work that the behind the scenes, the optimizing your build systems and making sure people can write tests easily and creating documentation and going out reaching out to all the other teams and saying, like, Hey, we're about to update this. does this affect you like that really unpleasant work that we don't think of as engineering? But that's what most senior engineers Do it's not code all day. And this blog post is just full of just kind of tamping down these misconceptions about what it means to be a really advanced engineer. I found it really useful I hope a lot of newer people read it new people newer to programming because it'll help guide their career path a lot better than just I need to get better at machine learning and rust and plasm and like everything else when there are probably like stronger places you could, you could you could spend your time on. I my second pick is a Netflix and ESPN documentary called The Last Dance. It's about the Chicago Bulls season from 97 to 98. But really, it goes back in time jumps in four, back and forth and covers Michael Jordan Scottie Pippen. It is just fantastic. I am not a huge basketball fan, but it's probably one of the best shows I've seen in a long, long time. And it's just one of those like, I can't wait till it comes out next week. Because the drama in there is so real I think most people agreed Michael Jordan's a pretty good guy. But like just seeing what made him that way and just his, I don't care. I don't give a crap who you are what you believe in, or even how you act. As long as we win. That is all that matters. And like, we've probably never seen someone that competitive in our lifetime. And it just comes through by I will, I won't say I'll give it away because it's from 20 years ago, Animal, but it's just just good television. If you don't care about basketball, just watch it a bit and see if it doesn't just suck you into the story. So the last dance it's on ESPN, it's also on Netflix outside of the United States.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  Yeah. Dennis Rodman episode on that was fantastic. Like, in the middle of an NBA season. Yes. for vacation to go to Vegas to go for a two day bender like that. Go ahead. He did. He went to Vegas and like crazy for two days in the middle of an NBA season.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Wasn't it like a week? It turned into like a week. They're like 48 hours in Jordans like he's not gonna come back 48 hours. And then it was that I really I will talk about this offline because like, that was a really good episode. Yeah.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Good show. Sarah, what kind of pics do you have for our listeners?
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Yeah, I'm gonna do one that's dev related. A tiny dash helpers.gov is really cool. I don't know if you've seen it, but it is a collection of a lot of other tools that other people have put out. I do little, you know, demo tools that are open source every once in a while that can help people be better at x or whatever. This is a collection of all of those. So it's like
  
  things that West boss put out things that you know,
  
  like a million people who might not know the names of put out and it's like CSS arrows or give me accessible colors or like brim color alignment or cheap sheets or even Can I use is on there and like Clippy things to do clip paths. So like, anytime you have to do something and you're like, Oh man, I gotta go look this up, that might be a good place to start because it's a really rich collection of all sorts of stuff that you're like, Ah, okay, now I can make this thing really quickly and I don't need to read the spec for five hours in order to get going. So that that one's really cool. Also, you know, we're in a pandemic, of course, so I we're, we're watching more TV. I think Previously, we hadn't watched The Handmaid's Tale because it seemed too like intense and insane. And I didn't really want to be reminded of all of the, those types of things and we started watching it and it's kind of relieving right now, in some ways, because it's the one sci fi reality that's worse than what
  
  Watch it when you stop watching him, you're like, ah, life is really good.
  
  But I guess I also like I like sci fi stuff that's like, what if reality was just a little bit different and it's like a commentary on society. there's a there's a ton of things like that, like Ender's Game and like other. I won't go into my sci fi list, but this one is fairly easy to bench binge watch if you're looking for something that makes you feel better about sitting in your house.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I love that. That's a great fit.
  
  </p>
  <p><strong>Ryan Anklam</strong><br />
  Ryan, what do you have for us? Yeah, I can't believe my first pick I haven't picked before. And it's the book effective TypeScript. I've been carrying this thing around for probably three or four months now. And I starting to get a little raggedy because I've been taking notes and reading and rereading chapters. So if you're writing TypeScript, this is a really, really good book with a lot of really good pieces of information in there. So it's something I keep going back to once after I finished reading it. And the second one, since we're in quarantine and gyms and everything are closed, I've been looking for a way to get some weights into my home gym, which is also my office. So I can't have a huge set of weights in here. So I've settled on purchasing this weights that called the power block, and it's 50 pounds down to five pounds and five pound increments and they fit in this tiny little space. And they're really simple. There's not a lot of technology to them. It's just a magnet that you pull out and put in so I know they're going to last a while they're not going to break. There's not some weird tech in there. That's finicky. So yeah, those are my two picks. Do you lift weights while you're on meetings? Yeah.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Bye. All right, I have two picks as well. One to maybe help you enjoy some TV shows. While you're in quarantine, though it's a little dark. So maybe it kind of fits with Sarah your pick. It's the documentary on Don't f with cats. It's one that I kept putting off on wanting to watch just because I knew there was cruelty to animals and didn't really want to watch that. But I gotta say they try and avoid showing too much of that. And they really tell the story around the people behind the scenes, seeing this video and being like, this is bullshit. And like, we got to find out who did this and they do this whole investigating, like just regular people trying to find out who this person is and looking for clues in the original video. The reason I really loved this story was I realized that I remember this guy that killed this person in Montreal, like what while I was living in Canada, and so this whole story plays out and just is really uniquely done in the way they follow the story. And it's the perspective of Just these regular people online getting together and being like, we got to find this person who is it an interesting story, but I did avoid it for a long time just because of Yeah, it was cruelty to cats. I didn't like that. One of my favorite internet memes about Tiger King is it says the only person who could find out who killed Carol baskets has made it so the lady from don't Africa cats. That works very well. Which I To be honest, I'm surprised that none of us I don't think have picked that Tiger King documentary ever yet too easy.
  
  I mean, it is too easy. I think the world has watched that one. But if you haven't, I highly recommend going and watching that one too.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  I tried but they had a they had a like big cat in the back of a van and there's like the first scene and I was like,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  it is tough, right? Like there's something about the animal cruelty that I just I can't watch. I think there's another doctor Intro Netflix it's about a young child getting murdered. I'm like, I just can't watch that I did get past the kitten one. Maybe I fast forward it if there was anything I felt like necessary, but it was they did a good job of trying to avoid any of that, which is good.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Yeah, I mean, it's like an interesting commentary on me that I can watch human cruelty much easier.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Animals are way harder to feel like it is. It's so much harder. I get it. I'm with you. And then I thought I'd share a blog post I read. I don't know if anyone's familiar with the Spotify squad model. Spotify has built like smaller teams of basically sub teams that are working in certain areas of the company. There was someone who previously worked at Spotify had wrote about why the squad model has actually failed. So some interesting insights there in the document that I really enjoyed reading through it. I think it's really a good one to think about how you your team's structured, maybe give you some good insights. That's the end of our episode. And I wanted to thank Sarah, for joining us on I believe this is the third episode. So thank you again for joining us again.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Thanks for having me.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Oh, you're always welcome. Anytime
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  we didn't wait until the 900th episode.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  No, that was really funny. We did say that on your last episode that you're gonna make it to 900. Someone that actually recently tweeted that. And I was like, Yeah, I think she's gonna make it sooner. So where can people get in touch with you?
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Yeah, Twitter is a pretty good place. I'm Sarah on Twitter. I also have a site with a forum, which is Sarah dot Dev. I scoop that up early. And also, like, yeah, lately, my team has been doing a lot of random posts on netlify blog, so not if you're interested in not just me, but lots of brilliant people. on my team, there's, there's lots of good posts like setting up strike to do X and things like that.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And you have a lot of great people on that fly working with you. So I was gonna say
  
  </p>
  <p><strong>Jem Young</strong><br />
  it's like so good. What do you call it like a supergroup? Yeah. It's kind of like a sibling that every time I'm like, wait, I got them.
  
  </p>
  <p><strong>Sarah Drasner</strong><br />
  Yeah. Yeah, some days I joined like a team meeting and I'm like, wow, I get to work with all these people. So yeah, I mean, that's the it's not also like it's not like just hype stuff, either. They're all really wonderful, nice, hardworking, smart. Funny.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Thank you to all of our listeners for listening to today's episode. You can find us on Twitter at front end, h h visit us on front end. Happy hour.com listen to us on whatever podcasts catcher you like to listen to podcasts on. Any last words.
  
  </p>
  <p><strong>Jem Young</strong><br />
  You know, I don't think you really want a complex cocktail. The best ones are like three or four ingredients. At the most Like you get to like 567 they're usually not good.
  
  </p>
  <p><strong>Stacy London</strong><br />
  I would agree fact. I think your Cheers Cheers. Cheers.
  </p>
  
  
  `;
  return transcript;
};