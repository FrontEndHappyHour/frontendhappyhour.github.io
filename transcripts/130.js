module.exports = function() {
'use strict';
const transcript = `

<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. In previous episodes, we've talked about technical stack, the trade offs and things that we're choosing for that stack and how that works in our companies or in our team. But in this episode, Jason's joining us to talk a little bit more about the choice of stack and infrastructure and how it reflects on the company culture. Jason, can you give a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?

</p>
<p><strong>Jason Lengstorf</strong><br />
Yeah, I am Jason Lengstorf. I am the VP of developer experience at Netlify. And my favorite Happy Hour beverage is whatever the bartender makes when I show up at 4pm, and I'm the only one in there and I talk their ear off about what they're excited about.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a great way to order a drink, though cuz I bet you get some amazing drinks.

</p>
<p><strong>Jason Lengstorf</strong><br />
Like, yeah, you will you learn about stuff. I am very much like a nerd in that way that I love to learn about different types of food. And so getting a bartender talking about what kind of like drinks and booze and stuff they're excited about, you get really interesting stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that I'm gonna try that approach. Like the next time. I think that's a great way to do it. But I'm super happy that you've joining us, which I thought we'd had you on before. But I realized it was a live panel that we all had done for Q con A little while back. So it's nice to have you on the actual podcast now.

</p>
<p><strong>Jason Lengstorf</strong><br />
So I'm thrilled to be here. This is a this is like one of the OG podcasts. And when I was coming up, I remember looking at this podcast and being like someday, someday I'm going to be on that podcast. So this is a little bit of a bucket list. I

</p>
<p><strong>Ryan Burgess</strong><br />
know we do it sooner. Jason like come on. We've known each other for years.

</p>
<p><strong>Jason Lengstorf</strong><br />
Asking like I know, it is I'm always like, I don't want to like MIT put them in that weird position of having to be like, Okay, you can come on our show or having to be like, Sorry, we don't want you.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I totally forgot I was gonna invite you on. And then I didn't.

</p>
<p><strong>Ryan Burgess</strong><br />
It's more on us. I guess anytime that there's like people, I'm like, Oh, yeah. Like, why haven't we got so and so on? And so yes, welcome. It's great to have you. Let's go around and give introductions of our panelists.

</p>
<p><strong>Jem Young</strong><br />
Jem Young, I'm an engineering manager and Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
Are we going to talk about that? I mean,

</p>
<p><strong>Jem Young</strong><br />
we can. Yes, I now leave the web platform. So netflix.com, I would actually my team runs the infrastructure beyond that.

</p>
<p><strong>Ryan Burgess</strong><br />
Congrats. So for me more meetings. Welcome to Management jam. I love it.

</p>
<p><strong>Jem Young</strong><br />
It is so much harder than I thought. Like, it's so many things to juggle. Like I thought being a software engineer was difficult. With context switching? Nothing. I'll be the manager. Just do another episode on all the things I have to work on in my first two weeks.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's a great idea for an episode. Yeah. All right. I

</p>
<p><strong>Jason Lengstorf</strong><br />
want to listen to that episode.

</p>
<p><strong>Brian Holt</strong><br />
I'm Brian Holt. And by the time you listen to this, I will be probably unemployed. And I am about to become a product manager at a unspecified future company. Maybe by the time you listen to us, you can go to my Twitter profile. It'll update.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. I'm excited to find out what it is. Surely.

</p>
<p><strong>Shirley Wu</strong><br />
Hi, I'm Shirley Liu. I think my newest title is independent data visualization designer developer. Have I used that one before?

</p>
<p><strong>Stacy London</strong><br />
Stacy. London. I'm a senior front end engineer on Trello.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on, and I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And what did we decide today's keyword is? paid off? We will definitely be saying trade off at some point in this episode. I know that. All right, well, let's jump in. I'm curious. What stack technologies do each of your companies use today? Like when you think someone asking you because I mean, I always get the site interviews and things like people ask like, what's the stack of the team? And so I'm curious, like, let's start there with each all of us working on different products and teams, what are you all using?

</p>
<p><strong>Brian Holt</strong><br />
I can start I mean, I, I was just working on Azure. And Azure kind of is the stack rather than what is the stack that it's using, but it was all mostly C sharp, frequently was using Windows under the hood, Windows VM. Some of the parts of the stack were Linux. There's a bit of node like Application Insights is run on node j. S. But I mean, it's a big sprawling monstrosity of servers and such. So it's, there's every stack you can imagine there.

</p>
<p><strong>Stacy London</strong><br />
You can go next I guess ah, See if Trello specifically, is we got manga, we have some node for server backend stuff. And for front end things I've been working on some mixed bag, you probably remember, like Trello was one of the early adapters or with Backbone way back. That's still there. But there's a lot of modern stuff being written with React and Apollo Graph QL mixed bag of things. But that's kind of the gist of it. I didn't

</p>
<p><strong>Jem Young</strong><br />
go I can only describe parts of Netflix because, and we'll talk about this later, our larger architecture infrastructures micro service oriented, so it's whatever team wants to use. That's what they use. Mike, in particular, we run Node js, on top of more Node js on top of container service called node cork, which Netflix created. And it's pretty broadly used across the company in terms of deploying applications quickly. containerized I don't think it's open source, because people always ask like, Is it open source? It's one of those things that's like, so tied to our infrastructure, it wouldn't be worth open sourcing, just just cutting that off before people. People ask me on Twitter, like it's always good. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, it's funny to Jen, you say that, you know, yes, Netflix, super micro service oriented. I don't know that. I would say that, like, you could just use anything like you can. But I do feel like even moving into my new role of being in the productivity engineering Spaces, we're trying to be more thoughtful on having paved paths for folks to to leverage and use so that you're not just using any technology. So that, you know, there's more infrastructure built up around it, making it easier for teams to jump on, and not have to worry about all the tooling and everything in that way. And then it makes our team a lot easier for us to support that. But I have seen even in my new team, you know, we're using React in various places for our front end UIs some Java on the back end. But you know, it's really cool to that I found out not that long ago is some of the engineers are writing Kotlin. On the back end, I was pretty excited on that. I was like, wow, I really liked Kotlin I've only written a little bit of it. But damn, it's a nice language. So I was excited to see that engineers are using that too.

</p>
<p><strong>Jason Lengstorf</strong><br />
I just got an introduction to Kotlin on on my live stream, I had one of the several minor came on and taught me about it. I was kind of expecting to like, go through that episode, like, oh, okay, so Java, right? It's yeah, so not Java. It's so much nicer. Yeah, it's, it's really nice, like the IDE is, is really good. And it felt it was like, I have never written Java, I've like worked around Java, I've been in the proximity of Java. zero chance I could read it, I'd never even seen Kotlin before that episode. And I was able to not quite intuitively because you know, it's a language. But with minimal guidance, like there because of the IDE, and autocomplete and stuff I was so impressed with, with how intuitive it felt.

</p>
<p><strong>Shirley Wu</strong><br />
So chime in really quickly about my tech stack, as in freelancer, which is. So for me, I use d3, and oftentimes view and I used to use React. And sometimes I'll use green sock for animations. But I think this conversation has actually reminded me um, so usually, it depends very much on the clients I work with, sometimes they'll be completely okay with whatever tech stack I have. And sometimes they'll be more opinionated because maybe they already have something existing. And sometimes that would mean that I actually don't potentially do not go with that client. And like I said, I don't end up working with that client, because it might be a tech stack that I'm not as familiar with.

</p>
<p><strong>Jason Lengstorf</strong><br />
So it Netlify I work on the front end side of things. And mostly what we work on is it's a React front end. So the the whole front end of like app.nullify.com is a React app. It's built on Netlify. So it's the JAMstack architecture decoupled front end and it talks to the back end through API endpoints. So as far as the front end team is concerned, their their front end stack is reacting API's. In the back end of Netlify, we have a whole bunch of services around building and deploying sites that are built in Ruby and go and rust and all sorts of fun things. And what I what I really like about this is that you know, I can go and peek into what teams are doing with with rust and stuff like that and keep up Onyx. I think it's super exciting. I love this, this rust boom that's happening right now. But I don't have to learn rust to contribute to our front end. And I think that was like in previous jobs that always felt like it was kind of a thing. You know, we had this this Java monolith. And so working on the front end meant that I also had to write some Java and I was like, Oh, can I not?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's like having that decoupling that is really nice because you're You can do what you want. Or you can change pieces without the other people caring, right? Like if your yes Java team is like now I'm writing call it on the back end, you're like, oh, okay, cool. Like, I'm separate from that.

</p>
<p><strong>Jason Lengstorf</strong><br />
This is where I get really opinionated. Honestly, it's like the because you know, when I'm talking about, like, how the choices we make affect your culture. One of the things that I see demotivate teams more than anything is like, if I'm hired as a front end developer, and I go join a team. And the first thing they tell me to do is install and configure nginx and Docker Kubernetes setup so that I can run the service on my machine, I'm like, This is not for you it like why am I why am I doing this much backend work so that I can do my job. And it continues that way, you know, you're always like, Okay, I have to do this change. And now I'm messing around on a node proxy layer, or I'm trying to, you know, set up other other backend services that support the front end. And you know, because of that lack of decoupling, you're waiting on another team to get bandwidth to come and help you or you're waiting on another team to review your work so that it can go into the QA pipeline. And because all those other teams are busy, they don't always give it the best look, and then your thing breaks and you get paged. And now everybody doesn't trust anybody else. And they say, Well, you can't touch this unless you go through this team's approval process. And suddenly, all the teams are demotivated, and they don't trust each other. And they're, you know, they throw each other under the bus in retros. And that's just a really frustrating culture to be in. And when you start doing this decoupling, what I've seen is that you see so much less of that, you know, when when you've got a front end team, where their first day is, okay, clone this repo, run, you know, NPM, install, and NPM, run Dev, and, okay, you're building our front end, open a PR, hey, you've just committed to production on your first day. And you didn't have to deal with any backend services, because you're not a back end developer and our back end developers, they can work on the back end. And as long as they don't break the API contract, as you said, Ryan, they can do literally whatever they want. They we migrated a bunch of services to rust, I don't even know if the front end team knows that that happened. We didn't ask that. As long as

</p>
<p><strong>Ryan Burgess</strong><br />
those API's are the same. You're good, right? Yeah,

</p>
<p><strong>Brian Holt</strong><br />
exactly. Yeah, I was I was really enjoying listening to that. Your, your rant? Jason, I don't know what whatever would call that. And like, I think the thing that's just kind of standing out to me is like, it's just like a lack of trust between the like, your hypothetical team there. And I've certainly worked in organizations where I felt like I was distrusted, right, like, I had to go through, you know, Ackles approvers. And I had to go through all these various different steps, because people didn't trust me. I was like, Why? Why are you paying me if you don't trust me? Like, let me be, like, either a, let me be the shepherd with my own code or be don't like, hire, you know, code monkeys, because that's now let's like, now what I feel like I am, right, that's not the value that I offered the company. Because like, we were describing the first part, what you're saying, which is like, you know, I had to install Kubernetes and get all this stuff running on my computer. I get excited about that. Like, that sounds like a ton of fun to me. But I also have a high threshold for infrastructure pain, because I work in infrastructure now. But the part later that we're talking about where you had to get approvals and all that kind of stuff. That's, that sounds like a personal help me like waiting on other teams to rubber stamp something that they're not even going to really look at, not at all that's anyway comes down to trust. I think. That's the that's the trade off there. Cheers, cheers.

</p>
<p><strong>Jem Young</strong><br />
Cheers. Cheers. Bye. I like both Jason and Brian brought up the concept of trust, which is a really interesting concept in computer science. Insecurity. There's such thing as zero trust, which is usually the way most security should be set up. But we don't talk about that when it comes to coding, really, which is, I shouldn't have to trust the backend other than they fulfill their contracts. I really don't need to know what they're doing. And sent Converse on the front end, if I'm a back end engineer, I don't care if I'm using React or Angular Ember view or whatever they're using. It literally doesn't matter to me. But the reason why when Jason brought up this topic of like, yes, yes, this is a good topic is because we never acknowledge this. And then there's just like this inherent tension between the front end the back end, because they're so intertwined, but no one wants to put in the work to decouple. So like it's just people fighting. It's like the North North Korean South Korean line. It's just like people fighting over this no man's land. But no one wants to fix it. It's just and I'm not making any political commentary there. But it's just yeah, it's like a known it's a known issue. And I Jason I love your example of hey, welcome your front engineer. Now here spend three days setting up the backend so you can get your your bots running. We keep doing this in our Ministry like we keep doing it, and we never go back and fix it. It's like, it's just like that interviews. We get them done. And then we never were like, oh, man, that sucks. And let's do it go do to someone else. And just like setting up your computer for the first time and all that. It's like, Man, this sucks. And then we just forget about it and pass it on to the next person. And just like nobody ever wants to fix it.

</p>
<p><strong>Jason Lengstorf</strong><br />
Yes, this is actual. I mean, like, your example about the interviews is like the weirdest bonding experience that I've had at companies is when I'm either the interviewee or the interviewer. And when I get done, the person who was on the other side of the table that, you know, either hired me or or who we hired, we bond over how terrible the experience was. Yeah, it's like our first experience as teammates is to go, well, that really sucked in it. And then we just like, move on with our lives like, well, never do that, again. It but I do think that there is a one of the analogies that I've used that that I think is, it sticks with me, is the idea of having roommates. And like the cleaning schedule, you know, if when you're working with the front end, and the back end team, you all are in the same house. And if you implicitly wait for somebody to clean the bathroom, it will never happen. Like, you'll all take care of your own spit, your room will be clean, you'll have your own spot in the kitchen, where you know, you've got your own your own food and like nothing's like out, you're none of your gross people, but like, nobody's gonna be the only one to take care of the bathroom, and everybody feels put out if they're like, Well, no one else will take care of this. So I have to take care of this. And so there's, you know, like, my way of solving this problem when I had roommates was always to just work the cost of cleaning into the, the rent. So instead of, you know, whatever our rent was just add 100 bucks and have somebody come in and cleaned the dang bathroom for us, right? Because I didn't want to negotiate that contract and feel resentful toward my roommates. And that's, that's also when you get into the like build versus buy conversation around trade offs, chairs. That's why I'm a big proponent of by is I don't want to have, I don't want to have to have that conversation in my team, about setting up the rotation or the responsibility lines and then having to consistently renegotiate those about where we fall, I want to I want to purchase a solution or use a platform, that kind of by default, I want the infrastructure to create that separation. So that it's really clear how we enter you know how we operate. Front end is our room will clean it back end as your room will clean up the infrastructure keeps that clear Bay boundary by decoupling and having that, you know, platform that we know where the lines of ownership are

</p>
<p><strong>Ryan Burgess</strong><br />
also glad you brought up the interviewing because it also made me think about when I think of tech stacks, a lot of it like I mentioned earlier, when I even asked all of you about what tech sector you're using, is that's asked in interviews so much and and I'm curious, like how important is that for companies to think about is like, is it marketable to be on the latest and greatest? Like, I feel like all engineers want to try and be on the latest and greatest. But it's unrealistic for companies to always be chasing that latest and greatest like we we would literally be doing no work. Like we wouldn't be shipping products, we would just be updating the lead to the latest and greatest framework. And, and so I'm curious, I don't know exactly where I'm headed with the question, but more of like, What's your thoughts on like the latest and greatest? And like, how do you think about that when you're picking a stack for a company or as a team? No, do you pull the latest and greatest off the shelf right away? Do you wait for it to be a little more big? Like, how do you think about those things?

</p>
<p><strong>Stacy London</strong><br />
Senior Engineer answer of it depends.

</p>
<p><strong>Brian Holt</strong><br />
Oh, that's a great way to answer. Well, let's end the podcast there. Yeah.

</p>
<p><strong>Jem Young</strong><br />
I was gonna take you Stacy. Well, it depends.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I feel like that's what this podcast should always be as well demands. Like, that's the answer. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I mean, right. Like, if you're a super small, maybe a startup, you're just like Greenfield, you're building an app from scratch. Like, you probably can pick the most modern up to date, things that you're familiar with, or what you're familiar with. It may not even be modern, you might just be familiar with it. I don't know. So yeah, what skills the team has all that all plays into it. And like, if you're at a bigger company, maybe you have, like, millions of lines of code already written in a particular thing. Taking a brand new thing, it's gonna be a big deal. And you're gonna have to, like try and convince people about it and show like, why it's beneficial. And is it going to help us build features faster? Or is it going to make developers more productive? Or are we going to be able to recruit people because they'll be more excited to come here? There's like, so many factors. Yeah.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, it depends. I mean, I think Stacy's outlining it perfectly, right. It's, your decisions need to have like material benefit, right? Not just because it's cool, right? I mean, I guess cools one material benefit. Maybe Probably not, no one on

</p>
<p><strong>Ryan Burgess</strong><br />
Twitter said it was cool. So you're like I should do it. Yeah,

</p>
<p><strong>Brian Holt</strong><br />
like rewrites are very, very frequently misguided. Like, the one that I feel pretty happy about that I participate in was the one at Netflix. That old Java stack was just horrendous to work with. And like, none of the front engineers were motivated to work on it at all, because it was just just pulling teeth. Like I remember there was Joel, and that was the only person that would like, be happy to like, work on the, the, the Java stuff. And he was like, Alright, give that to Joel, because we don't want to touch it anymore. Bless you draw, wherever you are. So, yeah, I think you need to form it, and like some sort of material benefit to your team of like, this is gonna just mean exactly what Stacey was outlining before. And then that will kind of gauges like, is this something that we're just, you know, chasing the dragon and looking for, you know, new kicks and thrills? Or is this actually going to help us, you know, be more successful in whatever we're trying to do?

</p>
<p><strong>Shirley Wu</strong><br />
I especially out of kind of everything that's CeCe said, I really liked what you were saying about having to get buy in, from your teammates. And like, I think, I mean, like, even at a very small company, you probably if there is already something in place, you probably have to get buy in from your teammates to do something. And the larger the company, the like, probably the bigger the pain point. And then hopefully, you have good teammates that like will, you know, have a good discussion with you about like, why, like, the transition might be good or bad. I remember, I'm the last company I was at a while ago, was, I think, just 30 or 40 people when I first joined, and we were using backbone, this was 2014. And react had just come out maybe like a year ago, and we spent weeks disgusting, why we should or should not, you know, move to react. And I remember that I think this was like, you know, it was like maybe six or seven people. And I think our like, our application wasn't even that large. But like, it was still like a very big consideration where like, I appreciated that the whole team was involved in making that decision. And nowadays, if I think about like, I'm basically, you know, like, like, I'm basically interviewing for new companies every two or three months with the contracts I do. And I definitely, like I mentioned earlier, like, if they're stuck is not something that I'm, like, now very familiar with, or like a framework that I want to move to, it's it really is like I like there is a much higher friction in me getting started or like even considering that place of like, for example, I haven't used React in about three years. So if I, you know, think about a client whose whole stack is react, then I there's like an upfront cost to engaging with that client. And I and I think also the thought of, if I go in with a particular stock, like, would that client be able to sustain it after I'm gone? Like, that's also a consideration I have. And I that's probably similar for like, a, like, a full time job at a company. Like, whenever we're pitching a new stack, that's probably something that we want to be aware of also, like if I after I pitch this, and then we implement it, like, are there people that are going to be able to sustain and continue it after I'm gone? So I think those are the things I think about when it comes to like new frameworks. I am a very late adopter, in that I'm like, I only want to go with a JavaScript library that has like a very established community. It has like a lot of like Stack Overflow answers. And like, if I ask a question, there's gonna be answers, because I just hate the friction of something new and banging my head being like, why is this not working?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I think that's smart.

</p>
<p><strong>Jason Lengstorf</strong><br />
It's, it's super smart. I, one of the things that I've noticed is, is that a lot of times a rewrite can be a symptom of something that nobody wants to address, which is that as you build any application, it's going to continue to get more and more complex. And you can, you can architect your way around some complexity, putting in good boundaries and, you know, going with microservices and decoupling so that the areas of concern stay contained and you get less leaky code. But there's only so much of that you can do like any piece of code is going to get more complex and the person who wrote it is going to leave and you're going to have tribal knowledge that gets lost along the way. So they it just gets more and more frustrating to deal with that legacy code. But what I've noticed is that a lot of times, teams get to like 80%, of a long term sustainable solution. And they hit that last 20% of problems that are like, Oh, these are the squishy ones, like, we got to work around limitations of the framework, we got to work around limitations of the platform, whatever it is, and they go, I know what will solve our problems, let's throw away all of our work and rebuild the whole thing in this other framework, which allows them to punt those hard questions down the road while they rebuild that 80% That was already fine in that other language. And then you know, that I've seen a lot of teams where the front end gets rebuilt every three years. Because they they're like, Oh, well, you know, backbone didn't meet our needs. So we tore it all down and rewrote it and react, and now they're, well react, not meeting our needs. So we're gonna tear it all down and rebuild it all and spell it and it's like you can, but I don't think it's the framework. And I think in those conversations, when you're starting to talk about like, the, the carefully choosing my words, the upsides and downsides of what your of what you're building, like, if you're doing it because there's an actual demonstrable limitation in the tools that you're using, or because there's, there's something that you can provably See, a team wide benefit for it will make you faster, it'll cost you less money, it'll save you more time, then it's worth having that serious conversation and trying to get the teams to buy in. But so many times I've seen it is like it's, it's like, oh, we'd have to do hard stuff. Or we could just rebuild and rebuilding is fun. And so everybody wants to do a full burn it down and start over, I realized that and I didn't realize I learned through conversations that there is a there's like a division in the the way that people like to work. So there's the the group that you're talking about, like the ones who always want to be on the bleeding edge and try all the new things. I've like categorize them as tinkerers, or like inventors. And but that's not the only way that people work. That's just like, you know, I'm, I'm that type of person. But I also know that that stresses a lot of people on my team out. And so there are two other categories that I've seen, which is in the middle, there's the people that I would call like the cultivators or the farmers, they, they want to take something that's, that's growing, and they want to see it reach maturity. So they they're the ones who they don't want to be the Greenfield people, they want to be the ones who take an idea and develop that idea into something viable. And then there's the people who are more like urban planners, where they want to walk into a working system, and they want to get all the systems functioning together in harmony. And that work, to me, is far more stressful than being handed a blank slate and saying, Hey, build me a solution. But when I was at IBM, the most successful managers that I saw, they were hardcore urban planners, they walked into a room, they would they were like, give me your gnarliest system, they were creating these huge boards of dependencies and architectural diagrams. And they were drawing up all these strategies for like, here's how we can simplify here, cut cost here, how we can align teams here. And it was magical to watch them work. And it stressed me out. And then I talked to him about some Greenfield thing like how your job is so stressful to me. And I was like, I'm so glad that both of us are here.

</p>
<p><strong>Shirley Wu</strong><br />
Do you say your analogies are superb? I also loved your roommate analogy.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you very Yeah, they've been very onpoint. Very good. And it's funny, I think it's something that's come up I think both Jem and Jason have mentioned. But communication, like communication is definitely something that is so important, even to Shirley's point of like, oh, let's just rewrite this because the people aren't here anymore. And we don't understand why in which it's written. I think a lot of that is just a problem of bad communication, right? It's like, how do we document things? How do we be strategic like, I know, Gem loves comments and code. And there's a really good reason for that is because like, That person may not be there. But it's like, hey, this was done this way. Because I wrote these comments here. So you can better understand it when you're jumping in. And so I think a lot of it comes down to a lot of problems. It's just not communicating properly. And so I'm curious to hear what works for all of you when you're thinking about these problems, like what is it writing documentation? Is it better comments? Or is it just having these conversations verbally? Like, I'm curious about the communication side,

</p>
<p><strong>Jem Young</strong><br />
a bit more abstract, it's about the composition of the teams at the company you're at, and their seniority. When you first start out. This isn't universally true, but generally true. When you first start out. You are the Tinker. Like Jason said, you want to build brand new things you don't want to about maintenance or technical debt or anything like that. You just want to build things. And as you mature, generally speaking, again, you see that software engineering is more than code. It's about how it all operates together. And then even more above that, you see it's actually about how people communicate with each other. And everything else is just a byproduct of that. So I think I can only speak from my own experience at Netflix in particular, our micro service architecture probably would not work at other companies, because it does take a certain level of maturity of each team to own own theirs themselves, own their SLAs own their uptime, or own their infrastructure choices that they make and be responsible for that. It Yeah, it just doesn't work at every company, because you need like a really high degree of honesty. And like the ability to do blameless post mortems, things like that. Just be like, Hey, I ft up. Here's how, and you just share that with everybody and like, but you do need to be vulnerable as a team. And as as, like your leaders need to have that tune and be like, Hey, we screwed up. But if you have a culture where it's like, it wasn't us, it was it was the it was the edge team. Oh, no, it wasn't not to have security and are hampering our ability to update the packages. And that broke everything. That may be true, but like, you can't operate like that. You just, you will never have an efficient architecture, you'll never have an efficient team. So yeah, it it is interesting, the more experience I get, the more I see how communication shapes the culture. And that shapes the technology that we use, which is why we're talking about this.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, well said two I think like even we've talked about trusts, like earlier in the episode and like, yeah, if your communication style is literally playing the blame game, where's the trust? Right? Like, I think that level of ownership is just saying like, yeah, I messed up. This is what happened. And and everyone not being judgmental on that either is not pointing the finger and saying, oh, yeah, you did you messed up. It's like, cool. That's the problem. Let's all address it and fix it and be a full on team or, as a company, working together to solve the problem and just not having that finger pointing. It doesn't help the problems there. Right. Like if if there's an issue, it's there, it doesn't matter how it got there. It's still there. And like, let's just address it.

</p>
<p><strong>Shirley Wu</strong><br />
I really appreciate this podcast and the dismantling of the very toxic stereotype of like Silicon Valley tech companies, and especially tech startups are like, what does it move fast break things? And I'm like, no, no, don't. And the feeling the pressure, especially like, especially like, if we're really Junior, feeling the pressure to just go really fast, not have documentation, only turn out the code necessary to like, you know, get that feature done, or like get that bug fixed. And I appreciate the conversations that we have on here.

</p>
<p><strong>Jason Lengstorf</strong><br />
I also like love this conversation. And I think that, you know, to Jem's point, the that trust and vulnerability is at the bottom of everything. You know, there's there's plenty of research. I know that the there's a Google report that just the Dora report just came out about what makes a team healthy and like what affects productivity. And at the bottom of all of it was this level of like trust teams feel empowered and autonomous. And to loop this around to the theme of our episode about how infrastructure shapes that stuff. This is one of the reasons why I'm such a big fan of these, these clear delineations in in architecture, because where I think that mistrust and that blame game creeps in is the more ambiguous a boundary is, the more blurry the lines of ownership are, the easier it is for somebody to say I'm not sure if I'm allowed to make that call. And then they hesitate. And then things go wrong. And then that turns into resentment. Like they knew kind of that they were supposed to deal with it. But they also knew that it wasn't really their call. And so they feel guilty and angry. And then that's that's where the feelings get bad. And so I love this idea of shaping your infrastructure in such a way to minimize those those blurry boundaries as much as possible. So that the trust is like the trust can be built on the people on the teams rather than than the trust being tested by the way that the code is architected.

</p>
<p><strong>Brian Holt</strong><br />
I mean, what we're talking about here is classic bystander effect. defusal responsibility, right? That if no one particular owns it, no one owns it, right? If you can, like look at something's like, well, you know, this, this should really be handled by the other team. I'm not gonna deal with it because no one wants to own, like scope they don't want to deal with, right. Like, if I had the opportunity to pass something off that I could potentially be paged on. I'm going to do that every single time. Right? Yeah. So I think that that plays well, exactly. With your roommate example that you made earlier.

</p>
<p><strong>Jem Young</strong><br />
And if you don't have that, trust you what you have is stifled innovation. Because no one wants to take a risk. And no one wants to go out there and try something new. It's always about covering your own butt. Making sure you're like, hey, I did everything I was supposed to do. It's not my fault. This team didn't do that. Which I think the larger you get a As a company, the more software tends to move towards that direction unless you are very, very clear about how you want to communicate and how you want to trust each other. And how like, yes, that's gonna break. That's okay. Like, as long as you own it and are aware of it. And like you're saying, like, there's clear delineation between, between different boundaries about what you own. And it's very, very clear, then, yeah, you can succeed. But as these companies grow as software, and tech, just like gobbles the world slowly but surely, like, we're gonna have more and more of these conversations. And they, I don't know, probably a lot of our listeners are in the middle of that. And they probably they might not even know it. They're just like, oh, yeah, I stay in my little corner. i What's the term? siloed? Yeah, that's, that's the term siloed. And that's not what you want, like you want, I don't know what the better Jason, I need a better analogy for this. But you don't want silos, but you want clear boundaries about what you own what you don't own. But you don't necessarily want to be like, I don't know what they're even doing over there. somewhere. I don't know what the right phrasing is, like,

</p>
<p><strong>Stacy London</strong><br />
there's this like, this continuum or spectrum of like, I've worked at places where like, I couldn't even create a branch in the repository, like I had to ask an admin to do, you know, like, really locked down, everything has to be requested and forms filled out to like, the total opposite where like, you could do, you could change code and any repo in this company, and, you know, someone will review and it'll get merged like, very like, opposite of that. And it's like, both have their issues. Like, if it's super free and open, then maybe the code starts to just get messy and weird over time. Because like people that don't know it, well are touching it. And there's not good boundaries, and there's not good tooling around it to make sure that you know what you're doing. But you can get a lot done really fast. Like, it's like weighing those extremes.

</p>
<p><strong>Jason Lengstorf</strong><br />
Let's, let's see if I can go three for three on my analogies here. I think it's like, it's like playing in a band, where you, you're all doing different things. I'm not gonna go touch the drums, I'm playing guitar. But if I'm not paying attention, if we're not talking to each other, it's not going to go very well. So it's, it's about being able to have that clear communication and that clear understanding of what's going on and all working in the same direction. But knowing that we are trusting each other, there's a clear delineation of what each of us is going to do. But we have to do it in concert.

</p>
<p><strong>Jem Young</strong><br />
Yes. To respect, healthy respect for everybody. Like, yeah, there's a lot of disparagement, like, Oh, you're just the back in engineering, just different engineer. It doesn't like boundaries, and all that, yes, you need that. But if you don't respect each other, and the work you're doing and acknowledge, like, the work you're doing is different from the work I'm doing. And it's not any more hard or any easier. It's just different. Like, unless you have that none of this works, either. It's a lot. It's a lot that goes into making good software.

</p>
<p><strong>Shirley Wu</strong><br />
I have two questions. So the first being, I remember, Jason, you mentioned before the recording that you're aware you, you're at nella phi, because you appreciate the way that they set up the infrastructure. Sorry, if I missed, like misquoting you, but you appreciate that they set it up in such a way that it promotes the culture you like? And so the first question is, if I'm interviewing somewhere, what are the things that I should be asking? What are the things that I should be looking out for, to like, to kind of like filter and figure out if that company is, you know, has that infrastructure and culture in place for that respect, and trust? And the second part of this is, like, if I'm already at a place where, you know, like, to Jem's point of, it's, it's like, siloed, or like, it's just not working well, or everybody's distrusting each other? Like, what are the steps that you know, the team can take, or the company can take or whoever that can get that team or company to? Hopefully the other side? Or the, you know, the side that has that trust and respect?

</p>
<p><strong>Ryan Burgess</strong><br />
All right, I like those questions. I have a thought on the first one, especially like the perspective of interviewing and understanding the culture that you're walking into an accompany. One thing that came to mind is literally ask, how do you decide on tech changes? Like if there's, you know, for moving to a new framework, or, you know, whatever it is, like stack is changing? Who makes that decision? How does the decision get made? And like, what are the factors that you all think about? And just hear what they say like, it could be like, oh, yeah, the VP of engineering just comes and tells us what to do. And that's it. And that might, that might be fine. But that may also be like I don't want to work at a company where that's dictated down. So I think you can learn a lot just by literally asking small questions about how they make those decisions. That's how I would approach it.

</p>
<p><strong>Brian Holt</strong><br />
I, I've thought about this a lot. And in fact, I think I've said on this podcast before that I think interviewing is pointless, I maintain that. So I'm going to pull my best Jason on my ass and try and make a good analogy here. It's like buying a house without ever going in the house. So all you can do is look at it from the curb, right? So it can be like a really nice facade and everything like that. But you don't know until you're actually inside the house, right? And you can ask the people inside the house, like, what are the bathrooms like, and Jason's gonna say, no one cleans them, right. But what I'm getting at here is, it's really, really hard to tell from the interview process, because you're just getting the facade right, you're getting the best sunniest rosiest picture of what's, what's happening inside. But I've always found that the best way to really figure it out is to ask people that have you know that work there will actually give you the straight answer. Because if you ask them in an interview process, like Hey, is it nice to work here? I think they're like, contractually obligated to say yes. I don't know if it's like Stockholm Syndrome, or, or they just want to keep their damn job. But yeah, I don't think you can get it all from the interview process.

</p>
<p><strong>Jason Lengstorf</strong><br />
I like I believe in this idea of like, you have to ask six questions to get one piece of information, because you're kind of looking at like, does it all line up? And a lot of what I asked when I was interviewing and Netlify, because like, I was in extremely fortunate position where I didn't need a job. So I was like, I'm only taking a job if I really want to work at this place. And so the I asked to interview with people in, in senior leadership in management and ICS, across a couple different teams. So I had like seven interviews as part of deciding whether or not I was going to work there. And with each of them, I asked, you know, how far in advance do you feel confident you could predict the roadmap of the company? When things change? Where do you find that information? I was looking to see, does everybody go to the same place or like people getting this tribally? I asked about, like, you know, what, when you have an idea, where do you go to, to pitch that idea? And like what how, how do you feel your ability to impact the roadmap is and you know, what, hearing the way that people talk about, like, I'm clear on what things are, I'm clear on how I work, I'm clear on on where I should go. I think that's all the sort of stuff that really guides hearing that people at every level of the company gave similar answers, that gave me confidence that the place I was going was, if nothing else consistent. And that's I think consistency is the foundation for a lot of being able to improve an organization is, you know, if everybody believes that the same things are true, top to bottom, then we can fix problems if people believe the problems are wildly different, like leadership thinks reality is this way. And I see I see think it's different. That's I would walk away from a situation like that,

</p>
<p><strong>Ryan Burgess</strong><br />
like that. Surely you also had one second question, there are two that I thought we could maybe each go around and give a little piece of advice before jumping into pics. But the question was, is like so you're in this place? And maybe it's not that healthy of a culture and you're trying to fix some of the problems around picking better stacks or the infrastructure? How do you improve that? One? You could just quit? I guess that's one that maybe that's my answer. But how do you help influence for the better is probably a good way to look at it. Okay,

</p>
<p><strong>Stacy London</strong><br />
I'll give you an example. Timo was on the front end team, there was no one really dedicated to engineering efficiency or like dev speed or making sure frameworks are updated to kind of the front end front end infra stuff. And it was whoever cared about it, the most that would do it would do it ad hoc, in like, but everyone was supposed to be working on features. So it was like really hard to, to keep the stacks up to date and make the builds working really efficiently. Make sure your startup time for your app was was speedy, like all those things were kind of up to whoever cared about it. And if you didn't have anyone that cared about it, it just got worse over time. So one of the things we did was a coworker of I put together a proposal to management to say can we have a couple of engineers dedicated to front end efficiency and engineering, infrastructure kind of stuff. talked to a bunch of different managers on various teams, I can, you know, sold it whatever you want to call it, but like talk to lots of people to get buy in and eventually got it approved. And then some people were able to move into those roles. So it can change if you if you you know, put enough effort into it if you if you're passionate enough about making that change,

</p>
<p><strong>Jem Young</strong><br />
it's really difficult to change that because it comes a lot of this comes from the top and leaders and their their idea of what their leaders look like and what I see is look like so if you say you had a VP who wasn't vulnerable and believed in like pointing fingers and you know in guys holding people accountable as an IC, or as a software engineer, it's, it's really difficult to change that, because you want to be the bridge builder, and you want to, like, be vulnerable and help people and like help see, help people change how software is done at the company. But, you know, if you don't have that freedom to do that, or you're the one sticking out, like saying, like, hey, we messed up, hey, we messed up. You know, if the leaders don't have confidence in you, like, you're just gonna get let go, and like, Oh, they're low performer, rather than know what they're actually they're being vulnerable, being honest about what's going on. But you, you have to be comfortable with that. So it's increasingly I see like how much CEOs, MC levels influence companies down, and like how critical they are. So I don't know, this is a bit more meta, but when I see CEOs, like big personalities on Twitter and doing this, and that espousing these thing, I just get like a bad vibe, because like, that's not what they should be doing. They should be pulling people together. And like, setting vision and direction for the company, not like their own personal opinion, because like, that just doesn't matter. What matters is how their leaders underneath them are. But so let's say you're in a good position. But the company is still not working together to answer Shirley's question, I, it's really hard. But what you have to do is you have to bend over backwards to understand what the other engineers are doing, what their concerns are the other teams, you have to do a lot of fence mending. And it doesn't feel like software engineering, but it is, but like you have to, you have to bridge those gaps and like, find the understanding. And then from there, you can give a clearer picture and like, okay, cool, I understand you, you have this problem with downtime. And you've probably performance, we get that on our team on the UI team. Cool, cool. So how about we set the line here where you own this, and we'll take this on for you, because that's closer to our area of expertise. And then we can both get better. And then like, you just establish those relationships one at a time. And it's, it's not always fun, but a year or two from now, you will feel so much better. And like you'll be vulnerable, you'll be you'll be innovating faster. But again, it's just it's not that glamorous work that people think of when they think of software engineering, it's just, you know, we think of building things and hacking a lot. But that's really the real work, not real work. But that's that's another side of the of the work we'll do

</p>
<p><strong>Brian Holt</strong><br />
much like totally agree with Jem, the way I've found to best influence the culture, which is again, difficult, especially if it's like a bad culture from on high, there's not, you can't fix all that, like, as long as it's poison at the top, it just keeps seeping down. What you can do to influence your sphere around you is direct, clear communication, and being willing to have difficult conversations. And again, this is kind of general high level advice, and you kind of have to evaluate it through your own lens, aka, this is steeped in survivorship bias. So make sure you're not just doing it because I told you to, it's a bad idea. many occasions, most occasions, most occasions anyway, just kind of going again, going back to Jason's example there with the roommates like setting up expectations really clear upfront, like this is what we expect about this bathroom and how it's going to get done. And make sure whoever is you know, turn it is to clean, it leaves that, you know meeting expecting to do that, and everyone around it is expected to do it. Because once you set those expectations, then there's accountability, there's a bunch of things like that. And so even if it's not your job, to enforce expectations, you can kind of use your ability to influence without authority, a pm mouse FTEs, all those fucking terms. Using that ability to influence without authority is like basically setting terms setting expectations. And then letting your peers kind of an enforced that this, you know, follows through or doesn't follow through. And then piece by piece time by time other people are gonna start doing it to other people. And it kind of permeates outwards from you. But it first starts with setting expectations, having direct conversations where people understand you're going to do this, I'm going to do this and then being willing to have those difficult conversations of like, this was the expectation this didn't happen whether you know, it's you're not meeting expectations or them not meeting expectations. And then from there, you can really start building a culture of accountability and trust

</p>
<p><strong>Jason Lengstorf</strong><br />
I'm so on board with everything that's been said here. So I won't talk about the the accountability and trust because I'm just going to repeat everything you said. And instead I'll talk about one strategy that that we used when I was at IBM because at IBM we had an issue with silos. We had an issue with with silos and like territory, like kind of turf wars almost. And the problem largely came from this sense that when, when teams were working on things, there was a there were a couple teams that felt like they were like the the traffic control tower for the whole country. And it ended up being it was like kind of a bottleneck II thing. And a lot of that was steeped in fear and worried about losing their jobs. And so a lot of what we had to do to start repairing this was first all of the things that you said about vulnerability, clear communication. And the other things were starting to look at, what were the the structural technical hurdles that were causing us to feel like we needed that kind of air traffic control? And then we looked at what were the things that we controlled on our team only, so not, let's rebuild the whole company. But let's look at where are we spending an inordinate amount of time. So we, you know, I mentioned earlier that when I showed up, the first thing I had to do is configure nginx, and configure Docker and Kubernetes on my local machine and get all these back end infra things set up. So we put a couple engineers aside, and we built a one click front end engineers are able to develop locally day one. And so we started moving toward this decoupling where the front end operated as a front end. And all we needed on the on the back end was, you know, we couldn't get away, we couldn't go to like full decoupled. So we had this tiny little node server, and that was all it ran. And we specifically forbade our team from adding anything to the node server, just like we don't write node code, we write front end code, if you need something on the back end, let's figure out what it is and, and figure out what the proper channels are to solve that, as we built more of those firm boundaries in what we saw was our team saw fewer and fewer incidents, because we were doing fewer things outside of our core expertise. And as our pager duty went down our like confidence and our willingness to be vulnerable. And things went up because we we had this track record of, hey, we're delivering things. And so we were more willing to take risks and more willing to say, Hey, this is the thing that should work. And it became sort of a tribal thing where what we were doing on the technical side, and what that enabled us to do. From the trust and communication side, other managers started to notice that we were that our team was starting to speed up and then they got interested in then they started to adopt it. So we saw a little bit of a groundswell where we were able to drive a little bit of horizontal culture, you know, and that what I mean, I will say like the leadership at IBM was was not toxic. So it wasn't like we were fighting against a company or anything it was we were fighting against inertia. It's a giant company, where each team almost operates as an independent entity. So we were trying, we weren't overcoming anything toxic. We were just overcoming something that had settled.

</p>
<p><strong>Ryan Burgess</strong><br />
That makes a ton of sense. All right, well, in each episode of the front end, Happy Hour podcast, we like to share a pics of things that we've found interesting and share it with all of you who would like to start, I can start pick. Alright, go for Brian.

</p>
<p><strong>Brian Holt</strong><br />
Just two picks for me today. One of them is tropical weather coffee from Onyx coffee lab. I've now ordered like probably over 10 pounds of this coffee because I like it so much. I make it as an espresso but I've also had it as a pour over. It's really really good. Yeah, onyx coffee lab. The name of the blend is the tropical weather. And I'm a little late on this TV show. But I quite like mythic quest on Apple TV plus, it's a it's pretty funny, right? It's very, very reminiscent of my time at Reddit it's totally insane. Like nothing ever goes correctly. People are fighting all the time and yet somehow stuff gets shipped. I don't understand it. But yeah, it's just there's a lot of echoes that are working at a small startup

</p>
<p><strong>Ryan Burgess</strong><br />
right on Stacy, what do you have

</p>
<p><strong>Stacy London</strong><br />
to music pics? Not electronic this time in the in the indie rock sort of things. First one is lilies by warpaint. They're all lady indie rock band at LA. They've been around for a long time. They haven't put anything new out for a while so it's very exciting to hear this new track come out so take a listen to that and the second one is animal by Laura Marling and Mike Lindsey, kind of like electro folk I guess you might call it you might know Laura Marling from some folk stuff that she does but to pretty some the fun song to listen to. So

</p>
<p><strong>Ryan Burgess</strong><br />
those topics right on surely What do you have?

</p>
<p><strong>Shirley Wu</strong><br />
I'm so excited for this first one. I don't even know how to describe it. So the first one is this anime that my husband and I just started watching like a week ago. We're like 15 episodes in so it's called in Japanese called Kuhmo discipline Anika. And then in English, it's called so I'm a spider. So what the premise is, there's there's been like a lot of anime in the last few years that's like, about like, it's called like reincarnation or like a sick guy. And what what that means is like it's usually you know, like a normal Japanese person and they like somehow die get hit by a truck, a meteor or whatever. And they get reincarnated into a different world. So it's like, I mean, it's different world. It's super funny. And I would say that the animation slash rendering, especially the 3d rendering is sometimes very, like, not the best quality. But the story plot is amazing. And the main voice acting for the main character, oh my gosh, she's so good. I would not recommend it though. If you have a fear of spiders because there's going to be a lot of really gross looking spiders sometimes. Some of them are just like, just a little too much. But that it's hilarious. Super, super recommend. It's on Netflix right now. And the second pic I have is I'm so excited about this one. So Noisebridge in SF is a like maker hackerspace has been around for like, I don't know decades, right? It's really famous. And I think a few years ago, a year ago or so they had to move because something about their lease and the they've liking a slowly been moving to their new space. And in that new space, they actually commissioned my studio may Amy Saylor. HG to paint a mural there, which is so awesome. So if anybody's like, familiar with Amy's like style home works like very inclusive, kind of tech illustrations. She has so many more things than that. But um, I think it's just so awesome that Noisebridge which for them to like commission, Amy who's like, illustrations are just so welcoming. And so like, you know, I guess you can say feminine. I just, I'm really excited about what they have in mind for this new Noisebridge space and how welcoming and inclusive it can be. Right up?

</p>
<p><strong>Ryan Burgess</strong><br />
Let's go Jem.

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's hard to talk. Shirley's enthusiasm for life. I'll do my best to counter it. Cuz I don't

</p>
<p><strong>Shirley Wu</strong><br />
have children. Sorry.

</p>
<p><strong>Jem Young</strong><br />
Oh, that's true. It doesn't beat you down. No, no. I have three picks. The first one is a television show. It is not Netflix. It is on Amazon Prime video. I know. I know. I hate saying no. But every so often, they come up with a good show on Amazon Prime. And you know, I got to navigate their clunky UI to get to it. And yeah, I'm hating other UI, because it's just not good. They could do better. They can do better. Anyways, the show is it's called invincible. It is an animated adults cartoon. It is I'm only about halfway through it is fantastic. It is it. It's about superheroes. But it doesn't follow the typical tropes that you always see. And it's definitely more on the adult side as in like full violence, like, you can't be a superhero punch on and face and they're just fine. They're probably dead. And they show that and just letting you all know, like what level we're expecting, but it's just so refreshing to not fall into the like, Marvel DC traditional tropes of superheroes, which like have just been beaten to death by now in 2021. It's a really fresh take on it. Really worth watching. I just watched one episode, if you don't get into it, that's fine. My second pick is I following my general critiques of tech and the software industry. Do you all know about the federated learning of cohorts? No, nobody knows. So do you all use Google Chrome as your browser?

</p>
<p><strong>Stacy London</strong><br />
No, it's Oh,

</p>
<p><strong>Jason Lengstorf</strong><br />
I have heard? Brian is talking about I know we're talking about?

</p>
<p><strong>Jem Young</strong><br />
Yes. So I I don't think we all know this as software engineers. But browsers are a business. They are an application that large companies like Microsoft and Google and Apple and Mozilla put out, they don't put them out for the good of the world. There's a business behind it. Google has been playing the long, long game by being the best honestly, one of the best browsers for developer support developer tooling. They put a lot of money and resources into it. So now we all use Google Chrome, right? Yes, everybody, Mozilla, they I bazille. I still love will probably love until my dying breath until they hopefully they'll do anything bad, but browser business. So what Google has done is they've silently baked this idea of ad tracking into the browser itself, which is not new. But what was happening is there's this big outrage of third party cookies, you know, like, you land on a website and then everybody in their mom dumps their cookie so they can track you around the internet, all these advertisers so there's a big pushback against third party cookies. I was like, this is dirty. This is scummy. Why did these businesses get to track me around the internet? I don't I didn't even sign up for any of you. Server. So yeah, third party cookies are bad. You know, we haven't said let's just build third party tracking you into the browser itself. So that's what federated learning of cohorts has done is Google has now baked, tracking into the browser. So it's not you can't opt out. You are now getting tracked everywhere on the internet. Google knows every site you have you visited, incognito doesn't do anything for you. And I don't think we're aware. I don't think the general tech community is aware that this happened. They just silently did it. And they've gotten away with it by saying, like, oh, no, no, it's anonymized. You're just in this group of people. So we can give you targeted advertising, but it's not specific to you. But the resources have already done like, yeah, we can anonymize you very, very quickly. Like your browsing habits are extremely unique to yourself. Yeah, I just like, I don't know, it's kind of outrageous that they've done this. Like, I'm aware that browsers are business, but, man, it's just underhanded. They just stuck that in there. And we have software developers have just not done anything about it or even been outraged. But yes. So my pick this is one, be aware that this is happening. And be aware that like we're in a business, these we're talking about trillions of dollars at stake here. And we as software developers need to be aware of what's going on to Yes, use Firefox. Mozilla is a nonprofit, they want to do best for the internet. And that includes privacy. Yeah, use more Firefox, man. Geez. Anyway, sorry, I've been saving that rant for a while I can go on a lot longer about that one. My third pick is a bit more lighthearted. It's a valley silicon pitch. And that's where I pick things that are outrageous and shouldn't exist. And they only do because we hear get paid too much money. I gotta ask you this in 2020. At all, have you ever considered being a serial killer? I mean, yeah, think about it, you know, to use some of those smarts out with the police, you know, take out some of that anger and aggression. I don't know. Well, if you have at least a vigilante, there

</p>
<p><strong>Brian Holt</strong><br />
you go.

</p>
<p><strong>Jem Young</strong><br />
It's a fine line between vigilante and serial killer. I think one one wears a cape and one does not. So there's this thing called the chopper fitness tool. It looks like an axe, but it doesn't have an axe, there's no blade on it, essentially. And it's one of those things like you have to go on the website and see this in action and people chopping. It is literally a weighted axe. So you can practice chopping. And for the low price of $100, you get this privilege of chopping? Could you go to Home Depot and like, you know, build this yourself with an axe and $20? Yes, you could, but it wouldn't be the smart chopper. So, you know, go ahead and check that out. If you've been thinking about getting more in the Axe Murder in or chopping down trees. Alright, and that is my pick for Valley silicon this week.

</p>
<p><strong>Ryan Burgess</strong><br />
Jason, how do you how do you follow this for your picks,

</p>
<p><strong>Jason Lengstorf</strong><br />
I'm gonna follow it in the most disappointing way possible, I'm going to recommend the Oni Kota gas powered pizza oven. It is a a reasonably priced like tabletop pizza oven, that gets hot enough that you can do neapolitan style pizzas. So they're not going to be authentic, you're not going to get certified or whatever, they do have a woodfired one if you want your pieces to take three times longer and have a whole lot more mess to clean up. But you know what, as long as as Joel hooks, is who is the one of the founders of Egghead is the one who turned me on to this. And he, he said, the difference between how much smoke gets into a pizza that's in the oven for one minute, versus what it tastes like with a gas oven. You're not going to notice like nobody's gonna be able to tell the difference and and so I went up to his place and had this the other day and it was like an Insta buy for me it's it's so easy to use the pieces were so good. And it's like a thing you just set outside you're on your back porch. So so that is a big pick for me. I'm very, very excited about that. The the other pick is Brian got me thinking about coffee. And so now I'm going to talk about my favorite coffee which is cocoa coffee in here in Portland Cova is a like roasters go and levels of darkness from like, you know, you've got the the really light roast that are really fruity. And then you've got the really dark roast. It's like, you know, kind of like the Starbucks roast COVID Somewhere in the middle that that gets all the things I like about like, all of those different flavors. And they're really good at working directly with purveyor so they a lot of times they're the roaster named after the the person who owns the coffee plantation. Right so it's it's really really good stuff. They do excellent work and that's I Brian was saying he's bought 10 pounds of the Onyx coffee I at this point I don't even want to know how many pounds of COVID coffee I've purchased but it's my it's been my daily driver for since I moved to Portland.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. I love that we have Two coffee picks for people that you like, try, that's great. I do not have coffee picks, I have two picks. One is a article that is doing better on the technical interview. We I know we've talked about this, even in this episode that the interview is never great cold Turner, who works at Netflix with a few of us as come up with a really cool article that just makes you stop and think about how to approach the technical interview. And he even came up with a great acronym for it. And it's it's the louder acronym. And so the article is called standing out louder in the technical interview, I think he's got a really a lot of really great insights in here. And I think it's a really good read for people to to help them in that technical interview. Then my second pick is a TV show that I'm been really enjoying. Not on Netflix, it's on HBO, but it's called mayor of East town. It's so good. But what really frustrates me is not being able to binge it. I do not like the weekly releases that HBO does. It's my biggest pet peeve. I just want to sit there and binge watch as much as I can. Alright, well, thank you, Jason, so much for joining us on the episode. Where can people get in touch with you?

</p>
<p><strong>Jason Lengstorf</strong><br />
I mean, I spent far too much time on Twitter. So probably there. You can find me. My website is jason.af. And it's got links to all the places that I hang out. So maybe that's the best place to start

</p>
<p><strong>Ryan Burgess</strong><br />
right on. Well, thank you all for listening to today's episode. You can find us at front end happier.com You can find us on Twitter at front end. Ah, any last words?

</p>
<p><strong>Stacy London</strong><br />
I can't think of anything funny.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, either.

</p>
<p><strong>Brian Holt</strong><br />
Drink. I mean, I guess it's the most appropriate thing. Cheers. Cheers.

</p>
`;
return transcript;
};