module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Music. Welcome to a brand new episode of the front end Happy Hour podcast. In this episode, we are going to be learning about SQL Lite, SQL, Cloud raft, all the things, and to help share knowledge on the subject, we have Marco bambini and Brian Holt joining us? Yes, you heard me correctly. I said, Brian. Holt, our listeners are always asking for Brian to come back and join us. So Brian, it's great to have you back. Marco, it's a pleasure to have you as well. Could you both give introductions of who you are, what you do and what your favorite Happy Hour beverages? Marco, you

Marco Bambini  
want to start so sure, I'm an Italian engineer, and when I was in university, I brought the first commercial database management system based on SQL. It was a much more fuel. Today, since 2013 it has been deployed mobile, and I found it 40 million times worldwide. So it seems like a good idea to start a company and start doing some serious things on top of this remarkable piece of salt.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that. And do you have a favorite Happy Hour beverage of choice doesn't have to be alcohol. It could be anything, a coffee, water, I

Marco Bambini  
don't know. May I say Gin Tonic?

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. Gin and tonics a classic. It's a good one.

</p>
<p><strong>Brian Holt</strong><br />
I thought Marcos wines Italian, right? That's like tradition.

</p>
<p><strong>Ryan Burgess</strong><br />
He had to flip the script a little bit. It's cool. It's true.

</p>
<p><strong>Brian Holt</strong><br />
Well, if you listen to happy hour from happy hour long enough, you probably heard some terrible things said by me before. I'm very excited to be back. I'm Brian Holt. I've been on probably, what, 3040, 50 episodes of this podcast. I can't even remember how many. I can't count that I am the chief janitor Officer of SQL, like Cloud Martha. I always get my title wrong. That was kind of tradition when I was on this, this podcast. And, yeah, I joined about a couple months ago, so it's been super fun to be here. And my favorite Happy Hour beverage at the moment. You know, I like a good Margarita these days. That's, it's a favorite,

</p>
<p><strong>Ryan Burgess</strong><br />
nice that's a good choice? Yeah. I mean, it's getting warm out, so it kind of works. Well, do you have like, a certain, like, type of Margarita that you make? Brian, my

</p>
<p><strong>Brian Holt</strong><br />
biggest pet peeve is like when they get the proportions around, like, I really want to taste the tequila when I drink a margarita so heavy on the hand, with the tequila, lighter on the agave, or or grand Menier, or whatever they choose to put in it.

</p>
<p><strong>Ryan Burgess</strong><br />
That's, that's good call. I like to actually taste the tequila as well, so that that makes a lot of sense. Yeah, cool. Well, and I'm the host of front end happy hour. Ryan Burgess, let's dive in. I'm curious to know why we're talking about SQL light. It has been around for what, over 20 years, and it seems to be popping up more these days. So I'm looking to both you. Why has it become popular? What's going on? Really? Because

Marco Bambini  
it's a remarkable piece of software. It was very powerful 20 years ago, and to rip continue to improve the product, and in the recent years, trying to squeeze every single person in performance improvement. And so we now have a library which is very lightweight in terms of research usage, but it's incredibly fast and in traditional databases, because performing a query is time consuming, you try to write very big queries in order to query several tables and join the result file in SQLite, you can do opposite. You can do 10s of micro queries, because each query could be simple to perform, simple to maintain, and you are guaranteed travel by micro cycles. And so, I mean, it's so performance wise, and so optimized that a lot of people tend to be to be the first choice when you need to choose a database, and it's already installed in every device. It's literally installed by default in billions of device software. So it just, I mean, using SQLite is like using a system library. You don't need to install anything else, and it's free to use.

</p>
<p><strong>Brian Holt</strong><br />
I mean, I think what's interesting and peculiar about the SQLite story is that it's been maintained by a very tight group of maintainers for a very long time. You have Dr hip, who's the primary creator and maintainer and has been the entire time, and a couple of other blessed contributors, and it's open source, but it's not open contribution. You can't just go contribute to SQL, which I think is another interesting thing, but I think that level of focus for so long, on keeping it well maintained, well tested, well, you know, performance, all that kind of stuff. It's like the perfect story for a piece of software over that amount of time. So just like Marco was saying, like, it's been this amazing piece of software, but it's been hyper focused on this, like, very local, oriented kind of story of, like, I have SQLite running on a file, on the same process, or, like, in the same, you know, physical location of whatever is using it. And then what Marco has done here and now, what our team is doing in SQLite cloud is we're taking that remarkable piece of software and we're adding in the things that it doesn't have, like the network layer, you know, role based authentication, some other really niceties on top of that, so that you can take this like really simple, performant piece of technology, and you can use it anywhere. You can use it anywhere that you've been using a cloud database. It has all the capabilities that you're going to need to be able to do, 99.999% of what web developers are doing anyway, which is just crud, right? So I don't know that's that's kind of a story that, when I started looking into why is this resurging now, is it's because people have been using SQLite for so long. It's such an easy to use simple piece of software to make like to approach like you look at like the rails getting started, kind of thing. And it has escalate all through it. Django has it all through it. Prisma, like, has a really good story with it as well. And so all these people kind of realize, I was like, Wait, we can have the simple, the performant of, you know what SQLite is, without all that complexity, and we can still do everything we need to do. Like, why would we ever switch after that? And so I think with all those things kind of being built in this kind of, you know, recent renaissance of SQLite, I think that's what's really driving kind of the fervor there.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that too, because it's like sometimes, like, we try and reinvent the wheel too many times as engineers, we've done it and seen it many, many times, and sometimes you need to take a step back and go, do we really need to do that? Like, is, what are we getting out of the benefits? And, like, what do we truly need for this software? And I think that that's, like, a powerful story, right? Like, people know how to use SQL lite if you've been in if you've been doing software engineering for the past few years, 1020, years, you've touched it at some point in time. And even what you'd said, Brian, it's in so many of the popular projects that people are using, it's there already. And I think that that makes a ton of sense to me, like it really, truly does. And it's simple. It is very simple to use. And there's days I just don't want to learn something new either. So I think that that's a powerful story in itself. There's

</p>
<p><strong>Brian Holt</strong><br />
some article out there. I think I've even referenced it on this podcast before about innovation tokens, and I it's been something I can't even remember who wrote it or where I read it, but this, this person kind of made this assertions, like, when you're building something new, it's very tempting to go and add all the latest wild software to it, right? Let's build this in HTML. Let's host it and do all this wild stuff with it. And this person made the argument is like you have three innovation tokens on any project that you work on, and you spend it on a couple of pieces of bleeding as software that's going to make your business case better, and then everything else needs to be as boring as possible. And that's kind of what I like about SQLite in the capacity it's like, it's so well maintained, it's such a kind of tight surface area, it's pretty boring piece of software from that perspective, right? And that's what just gets me excited about, like, and I've been at, I've been doing tons of customer interviews, just asking people like, what do you like about SQLite? What prevents you from using it more? And a lot of people are telling me things like, Well, I love that Postgres does JSON, or I love that this other database has full text search based into it, or I need, like, vector databases, because I'm doing like, LLM stuff. And my response to all those people is, like, death. SQL can do that. Like, it can do all of these things, because there's all these really, like, there's a very rich extension system for SQL as well. So it handles almost everything that you're looking for it to do, and people just don't realize that. They just assume that it's like this toy database that doesn't do all the wonderful things it really can do. So do

</p>
<p><strong>Ryan Burgess</strong><br />
you think it's a bit of like an education problem then, like, people just aren't seeing what it can do. Education

</p>
<p><strong>Brian Holt</strong><br />
kind of a branding thing as well. Like, it's been branded for so long to be this, like, you know, you embed this in, like, lightweight use cases, or you use it to, like, get started, and then you have to migrate. And so people just have that assumption, and they don't really challenge it. Because why would you right? And by the way, I am not at all, like, downplay. Saying how great a piece of software, Postgres or MySQL, or any of those other ones are. I mean, I literally taught a course on Postgres for Frontend Masters. What I am saying is that it's worth another look at SQLite to see if it covers your use cases. Because, in all reality, it probably does. And like I'm a big believer in the principle of least power, right? Choose the the tool that's the least powerful that can accomplish the task that you're trying to do, because you're going to save yourself, you know, how a learning curve. You're going to save yourself bugs and all these kind of things. So, yeah, yeah. I think it's an education. I think it's a it's a branding thing, and I think it's people need to challenge their assumptions a little bit

</p>
<p><strong>Ryan Burgess</strong><br />
always. That's like, that's advice for anything. Always so good. I'm curious, Brian, you had brought up MySQL and Postgres, great, great examples of something that are being heavily leveraged and for years too. Like, this is not something that's new, either. What would make someone, you know, I'm building a new project, or my team is building something brand new. Why would I choose SQL lite over Postgres or SQL?

</p>
<p><strong>Brian Holt</strong><br />
It's a good question. I'm sure Mark will have a good response to this as well. Here's my I'm really not going to try and talk anyone out of choosing the database that they'd know and like. So if you're a Postgres master and you are just, like, ready to go full on that? Like, you'll get nothing but a high five for me, right? Because I really like Postgres. What I am saying is that it does a lot of stuff that I don't need. It does many, many things that I don't need. And I like that SQLite, like, it's really cool that I can just throw it directly at my project. I can commit the file right that directly to my get repo. It's really easy to set up the Docker. You just attach it to a volume, and then it just saves that from, say, so like, that entire local first story with SQLite is just out of control, right? It's the best. You really can't imitate it. And like, SQLite runs on a potato chip, right? If you're doing stuff on, like Arduinos or stuff like that, like it's it's Impossibly Easy to put that SQLite in there. What's really cool about some of the stuff that Marco is building now and now our team is now building is the ability to like, not only get like SQLite running in into the cloud, but you can actually get it running on the device so that you learn all that device or the information from your cloud database directly onto the device itself, and then you can just run local queries, right? So, I mean, I was talking to a data scientist yesterday. How many times have you opened like, a chart, right? And you, like, move the facet or the filter, and it takes 30 seconds to reload, because that's to go back out to the cloud. The cloud has to run a bunch of queries, and then it brings all the data back down, right? I worked at snowflake before I worked here, and I'll tell you that it pisses off a lot of people, right? Pissed me off. And snowflake is great. Like, it's actually quite fast from that regard, but, like, latency is just real, right? You are literally limited by the speed of light there with SQLite, and now some of the stuff that we built on top of it. You can just load everything locally onto the device, read and write locally, and then the process they will backhaul all that information back to the to the cloud, right? So everything's running at local speeds. Local first is what people are kind of tagging that that experience as, and it's for you as the developer. You're just reading and writing SQL. You haven't really changed your paradigm at all. You don't have to learn it. There's nothing to learn there, right? It's all just the same stuff you were doing. But all of a sudden you went from having to have 300 milliseconds minimum on every single request to having a couple of milliseconds at worst, right?

Marco Bambini  
But the first one, but I'd like to point out, is like when most of the time you already have the data local, so locally to your application, and most of the time it's inside a SQL database. And if you want to switch to another database engine, you need to migrate the data and change the logic behind your SQL statement, while if you choose to use SQLite cloud, we are using the SQLite engine, we never fork the SQLite library, and so that means that you don't need to change your SQL statement. You don't need to change your code or your post everything works as expected, except that instead to be local, it's on the cloud. And another important point is that you should really not compare SQLite cloud with MySQL postgre, because we offer way more than a simple server side database system, we offer you fully distributed system. Thanks to raft, we can guarantee strong consistency so you can literally scale your application worldwide and without any effort, without any code. Change or any investment in your libraries, because since day one, we built the entire system on top of so it's still fully distributed because guarantee that in case some nodes crashes or case of network issues, your solution will continue to work. That's

</p>
<p><strong>Ryan Burgess</strong><br />
very cool. So I feel like it's like, you know, we've mentioned that SQL light is very, you know, simplistic, and what you all sound like are doing, are adding a lot of the not complexity. I don't want to call it that, but you're, you're making it so that, like all the things that SQL lite may be missing to that education part or what people are asking for? You're like, no, but we're actually allowing this on top of it. We're, you know, extending it to the cloud. We're making it easier for people to do that, which I think is really cool. So it's like, yeah, it's the quick and fast, easy use case on your local device. But then also, you still have this piece in the cloud too, which is like, so your data is migrating to the cloud? Is that a fair way to describe it?

Marco Bambini  
Yeah, sure. Yep, definitely. Okay,

</p>
<p><strong>Ryan Burgess</strong><br />
I am curious about raft. That's something I'm not familiar with, and I'm sure there are people out there that haven't you know, dealt with it. I'm curious. What is raft and like, what is it doing to help SQL Lite? Well,

Marco Bambini  
rafty is a consensual algorithm developed to for distributed system. And thanks to raft, your cluster can be composed by many nodes. Everything works transparently for you, except that your database gives better and you can reply, for example, with our solution, you are always we guarantee that the note that is much closer to the request is we know that always reply to you so we can minimize the vacancy. And basically, when you perform right operation, raft, make sure to have consensual over the right operation. And when, from a client perspective, you receive an okay of a positive reply, you can be sure that your information is written permanently into your cluster, and even in case some node crashes, or I don't know where our disk fails, in some way, where you lose all Your database the other nodes the cluster, can collaborate rebuilding the database, and so you can guarantee that strong consistency of the data and the reliability of your network. We

</p>
<p><strong>Brian Holt</strong><br />
should post in the show notes here that Marco sent me, like a like, a visual representation of how raft works that helped me a time to understand it. But it like, the thing that, like, kind of recommends you, like, this is actually, like, a really interesting, cool piece of technology that shows that, like, if you have, like a leader node, and it's has like, five, or, let's say, four follower notes, and one of them goes offline, they like, hold an election and they get a new leader. And like, if it works, even if there's like a network partition, and like, you have two nodes over here and three nodes over here. What happens when they the network partition heals, and also they, you have two leaders, and how do they, like, merge their the data and like, what's happened in the meantime, it's, on one hand, like, actually, very conceptually approachable, but it's also just, like, impressive that, like, it's able to be so resilient despite, you know, challenging network conditions.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. No, I love all that. Thank you for the explanation. I think that really helps, you know, just understand, like, yeah, like, what the benefits are coming along with the algorithm, and how that actually works. So let's, let's maybe go a little bit more into the local first architecture. I think that that's like, that is a really good, compelling story. Like, for me, definitely, when I'm building, especially smaller, like, side projects, it's like, that's all I need. Sometimes, like, sometimes I'll just even write some JSON, just because I'm like, Yeah, I don't. I just want that local file. And you just need something small. So I want to go a little bit further in that. Like, is, you know, what other benefits do you all see for, like, local web development, not having to, you know, set up the database like I can think of so many. But I know you all have thought about this more deeply, and I'd love to hear your thoughts on that. My biggest

</p>
<p><strong>Brian Holt</strong><br />
thing with is, like, How many times have you written like a project and everything works wonderfully locally, and then you deploy it, and all sudden you have, like, race conditions, you have huge networks, things like and everything just kind of falls apart because all sudden everything got stretched apart, right? Yes, basically every time for me, right now, I'm probably just a bad developer. Everyone knows that. But Well,

</p>
<p><strong>Ryan Burgess</strong><br />
Brian, I'm terrible too, because I'm dealing with this, like, I think literally yesterday it was deal. In with issues on that. So I totally get it,

</p>
<p><strong>Brian Holt</strong><br />
yeah, beyond that, like, it's not like, you'll get run into issues of like, you know, cross origin, resource sharing. You'll run into like, other bugs you just don't expect, because everything was locally running great on your computer with zero latency between the pieces, and all sudden, you have, like, now network conditions behind it, and all sorts of additional factors kind of introduced here. And so just the entire local first movement, not just us, but the entire idea of like, like you kind of basically replicate whatever that is running in your local computer for your your participants of whoever's like, you know, using your app, whether that's just on your server, or that can even be like on like a mobile device, right? You can have everything running local to to an app, right? The nice thing is, like, everything, like, they get that same kind of, like lightning fast experience that you the developer are getting. Like, how many times have we had to talk about on stage or conferences of like, yes, you need to try, you know, try this on slow connections. Yes, you have to try this on, you know, blah, blah, blah, whatever. And so I'm a big fan of this, like local first idea. I don't know if I'm necessarily still in the name, because I think it's confusing, right? But I love the idea of CO locating your data and your app and your app logic, so that everything is just in this very tight loop that's very reproducible, that everyone can kind of get that, like lightning fast local experience, right? And I think couple that with like emerging technologies like React server components or the various permutations for the other frameworks. Of you now have the data sitting next to the server, sitting next to like the basically the client side logic, right? And all that is happening in one very tight loop, and then you're sitting just like a minimum. A minimal packet down of like the result to your client, right? That entire thing then ends up with a user with a very fast, and not only just like a faster display, but fast to be interactive experience. I think it's just kind of unbeatable. I think it's really cool. Yeah,

Marco Bambini  
and we strongly believe that it's time for a radical paradigm change, because, especially on mobile development, if you try to turn airplane mode on, probably 99% of Europe seems like doesn't work as expected. With an offline sync library, you can really develop the best user experience, because the user we can continue to use your application even if the network is unstable, there is no network at all, and when the network goes online again, or you turn off and mode, we guarantee that everything is seen across all the devices, or all your notes in your class without any conflict. But

</p>
<p><strong>Brian Holt</strong><br />
speaking of that offline first experience, like Ryan, I know you've written like service workers, that kind of stuff in, like, offline first code. It's, it's hard. It's actually really hard code to write because you have to, like, anticipate how, like, network conditions can change and the connecting and reconnecting and all that kind of stuff. It's, it's time consuming to write that kind of code, and frankly, not fun, in my opinion, though possible. The nice thing with this, like local first architecture, is you're just reading and writing SQL to a database, right? And then it's the database attend, handling all of the offline sync stuff, so your code doesn't change. You don't have to change anything about how you're interacting with that database. You're just reading and writing data, right, and then the database will handle everything else for you, like that. That was also super, super compulsory.

</p>
<p><strong>Ryan Burgess</strong><br />
That's the magic part. Like, I love that. It's just like all those things Brian that you said absolutely are true. It is difficult, and it's something that you're having to think about as the engineer building it, but then also debugging, and, you know, figuring out issues that come up, because there's lots of issues that come up, and that's just more that you have to think about, especially when you're like, I just try to build this app and I want it to work for my users. It's like, that's huge. When you have just something doing the heavy lifting and something that's been heavily tested too, right? Like, it's meeting a lot of other customer use cases, and you're getting a lot of those benefits. It's like, it's the build versus not buy, right? It's like, that's a big portion here is like, there's a lot of benefits that you get from that. So I love that. But then another thing that really struck with me too, was oftentimes at companies, we're trying so hard to squeeze out just any little performance gain that we can get, especially for, you know, companies trying to move that bottom line, like speed matters, like we know that, and so, you know, being able to not worry about that, like latency and just like know that it's happening. Mean, behind the scenes afterwards, when there's a better connection, that's huge and, and I think if that can be well sold and, like, I guess trusted that that to me is like, gold, right? Like, I think that, to me is a really powerful piece of this like, equation. So that's really cool, awesome. Yeah. What about security wise? That's one that I'm gonna say it. It's always like, my afterthought is, like, you know, especially when I'm building, like, some small app, I'm like, Yeah, whatever. Someone steals my data. It's not the end of the world for some of the smaller things I've done. But obviously, when you're building larger applications with major users, what? What can we think about for security, especially in that local first development, having it in a mobile app, that is, you know, transferring data after the fact. You know, what does that look like for a security story? Well,

Marco Bambini  
we enforce the rollout of security on server side, and so locally, used to just see your data and the data you choose to share with other users, and there are others. I mean, there are alternatives to this feature offered by our companies. And some companies thinks that the best way to proceed on solar side is that I don't know, for example, if you develop a to do application and you publish your application on the app store and you have 1 million user some company thinks that the best way to proceed on server side is to have 1 million different databases all related to your to do application. And in our opinion, this is a nightmare for developers point of view, because if you need to do analytics, or you need to analyze it to open a million connection, individual connection. I mean, this doesn't work and doesn't scale in our solution, you have just one big, huge database with all the data from from your 1 million user inside. I mean, each user have a sharp ID, so they just see what you decide that they can pass this to and for a developer perspective, is much more simple to use just one database or form analytics and do whatever you want.

</p>
<p><strong>Brian Holt</strong><br />
The way I like to think about it is that you can open the Network tab on any one of the apps that you use, and you can look at the network key that you're using to call the APIs right and you can take the net, that network key, you can open postman, you can just start blowing away your data. What you can call any API key as yourself, right, and do whatever damage you can with whatever public API they're exposing. So same kind of thing here is like we're using a sharding technique, where users can basically when we access data that applies to themselves, that you allow them to, that you give them a role to access them. So yeah, they can open their database and they can blow themselves away. But, I mean, they could. They could have done that in the first place anyway, right?

</p>
<p><strong>Ryan Burgess</strong><br />
So it sounds like you're like the roles is the big key selling point. There is, like having that ability to just set up, like, permissions, that's the big one. Yeah, yeah, exactly. Okay, that makes a ton of sense. I like that. All right. I feel like I'm sold on, like, SQL light again. So, yeah, like, I think you all have done a good job. I'm like, damn, I need to use this on my next project. What would I do to get started? Like, what are, you know, what's advice you all give for someone who's like, all right, maybe they've touched SQL light in the past and haven't touched it for a long time. Maybe they haven't touched it at all. Maybe they're newer to the web development world and they've, you know, leveraged MySQL Postgres. What do you what are recommendations or suggestions you have for someone to get started? Well,

</p>
<p><strong>Brian Holt</strong><br />
I'm teaching an SQLite course in about a month, no two months. In about two months, I'm going back to front end masters to teach a course on SQLite, which I think I will do a good job. I hope I will do a good job.

</p>
<p><strong>Ryan Burgess</strong><br />
I always enjoy your I enjoy your courses, Brian, so I'm pretty confident that you'll do a good job on it. So obviously, Masters does a good job too. So

</p>
<p><strong>Brian Holt</strong><br />
let's go say that now we're, uh, front and masters brothers, right?

</p>
<p><strong>Ryan Burgess</strong><br />
It's true, yes, yeah. And, you know, we just now all who, who have been teachers there, know of the acts in the bathroom, right? Like that is, like, you know, a hidden, hidden secret in the hotel,

</p>
<p><strong>Brian Holt</strong><br />
the sacred hatchet. Um, that's true for anyone listening. There's they put front of masters and instructors in the same hotel, and so that weirdly, has a hatchet in the bathroom, which is, it's actually really cool, kind of a steel one, one of these types. I go, Yeah, what I was going to say about SQLite and learning it is, like, the nice thing about SQL as a language, kind. In general, it is a standardized language, and like you know, there's some variant across Postgres, SQLite, MySQL, Oracle, Aurora, pick, pick your favorite there. But generally, the high level principles remain about the same. So you can take any skills that you already have with SQL and you can apply this to SQLite. That's a really easy way to get started. Or you can pick your favorite or ORM I used to have, like, a very sour take on ORMs, but they've, I think they've progressed so much from the time that I you know last used. I think the the first one I ever used was, was for Zen framework one and PHP, and it's probably me being the idiot, but I just couldn't do it very well, and I found myself fighting it more than actually getting benefit out of it. But things today like Prisma work great with SQ, uh, light. And therefore you can, you know, hop into one of those kind of things, prisma being my, my personal one that I've used and liked. And then, yeah,

Marco Bambini  
yeah, you can just go to our website in the documentation section, there are tons of documentation about SQLite, and there is also iterative console, so you can try to perform SQL statement, and you see the result of the web page. It's all driven by SQLite, compiling transpile to Wasp, so you can do your experimentation without the other tools. Just close and align to our documentation section. That always

</p>
<p><strong>Ryan Burgess</strong><br />
makes sense. So I'm assuming there's good, solid documentation there that will help people get started.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, the like in browser SQL stuff that they've built is actually really cool, really, because you can just run the queries there and see the results

</p>
<p><strong>Ryan Burgess</strong><br />
before we dive into pix, I would love to hear just any last words of advice for leveraging SQL Lite. What advice would you give folks? Just

</p>
<p><strong>Brian Holt</strong><br />
do the simplest thing possible, just start a SQLite process. Does anyone have to be us, right? Just a normal, vanilla out of the box or and start playing around with it? I think you'll find pretty quickly that it's incredibly easy to get started and incredibly easy to just kind of build up and then, you know, attach it to your favorite web framework. Most of them have documentation of how to get started with SQLite, yeah, just, just get going and then realize that, like, once you've built something that that you're proud of and you want to share, hopefully we're the place that you're like, Okay, I go from SQL, like, locally to SQLite cloud, right? That's, that's kind of our goal. There is that progression? Yeah, I

</p>
<p><strong>Ryan Burgess</strong><br />
like that a lot too. That, you know, you can start, like, locally, like, I know we went really hard on the local development side, but I like that point is that, you know, you don't have to go all the way. And I got to pay for SQL cloud. It's like, you know, you can get started and kind of build that application, take the time, because a lot of my side projects start out and I get, you know, momentum, and then I sit on it for two months and go, oh yeah, I need to go back to that. And, like, I didn't have to pay a bill yet. Like, I can still develop. But then when I really need the power of the cloud, I'm like, Cool, I can go enable that. And I think that's a powerful story too,

</p>
<p><strong>Brian Holt</strong><br />
yeah, well, we'll have a generous free tier for people that want to, like, get started, not pay anything. And one of my favorite features is, like, you get started with the local SQLite database. You do a bunch of stuff. You're happy with the schema, just upload your database, and also, now you're in the cloud, right? That's that's all it takes. Like, you can literally drag and drop the file. It works. That's

</p>
<p><strong>Ryan Burgess</strong><br />
so good. It's like, back to FTP days. You just, like, drag and drop. It should work, right? We should

</p>
<p><strong>Brian Holt</strong><br />
make an FTP endpoint. That sounds like a terrible idea, and I love it, it

</p>
<p><strong>Ryan Burgess</strong><br />
does. But I'm like, yeah, it might resonate with some people. They're like, Oh yeah, I remember them. And that was that simple. So there was a lot of problems with that approach. But hey, that's that was a simple way of doing it. I love that, all right. Well, let's dive into pics in each episode of the front end, happier podcast Brian will be very familiar with this is we like to share things that we found interesting with all of you. Sometimes they pertain to the subject. Oftentimes they don't. But yeah, let's share some of our picks, Brian, you want to start it off. Yep,

</p>
<p><strong>Brian Holt</strong><br />
they got two picks. First one is a video game that I just cannot put down. It's called backpack hero, which sounds like the weirdest game, and like, it came out a while ago. And I was like, that sounds very dumb. I'm not going to try that. And then I was like, it works on Mac, right? So I was flying to Minneapolis to Minneapolis to teach for Frontend Masters. Like, well, I need something on my computer. I downloaded it, and now I played all the time. So that one's quite fun. It's kind of like it's a rogue. Like, if that means anything to you, if it doesn't, then it's just fun. You should try it. And then I think last time, I can't remember last time was unfreedom. Had. Happy Hour. But I did. I've I'm finishing my MBA literally next week, which is wild to say. And if there's one thing I've learned during my masters, it's that everything is a spreadsheet. So my pick is Microsoft Excel.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, man, I cry. No, no.

</p>
<p><strong>Brian Holt</strong><br />
I use it all the time now, Marco can tell you that I send them just random ass spreadsheets on a fairly regular basis. And it's i Someone once said, and I don't remember it might be Paul grammar, one of those uh, VC people that every startups primary competitor is Microsoft Excel, and now I can see why, because you can do almost anything in Microsoft Excel, and whatever you're doing must be better than Microsoft Excel. So I both love and hate it and love it and it's it's terrible, and you should all use it.

</p>
<p><strong>Ryan Burgess</strong><br />
I love it like it's such an interesting pick, but I see your points on it, so that's it's funny. All right, Marco, what kind of picks do you have to share with our listeners? Oh, well,

Marco Bambini  
I have a couple of side project. Some years ago, I wrote 17 sanctuary church in my local village, and I'm now trying to renovate the church. So one day we became our office, I guess. Yeah. So it's a lot of history, a lot of things to do, but it's nice programs. It's really cool,

</p>
<p><strong>Ryan Burgess</strong><br />
awesome. You have to make sure to share a link to it as well. Oh, yeah,

Marco Bambini  
sure. And yeah, and when I'm not running, as you like Cloud and I'm not trying to renovate a church, I like to play tennis. Like to play tennis a lot. Yeah, and do gardening because I feel the need to do some physical work, spending over the day developing and thinking about a lot of difficult task. And so yes, everything is a normal malach.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that. I feel like I just recently heard someone saying about gardening, how it is their time of like reflection, like they're able to like, I think there's something about connecting with nature and then also, just like having that quiet time, they're actually doing work, but like, it's, it's in their head, like thinking through problems, or, you know, reflecting on their day. And I was like, that's so cool, like that they have this like hobby that, you know, is really cool to do, but then they're also finding it as a mechanism to just have that self reflection and time to themselves. So that sounds like a powerful thing to be doing.

Marco Bambini  
So yeah, totally agree.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. Well, I have two picks for this episode. One is a TV show which is a Netflix Original. It's a limited series on Netflix that follows what's called Griselda. And it follows the story of Griselda Blanco, which is one of the most notorious, like Narcos lords in history. She is. She's a pretty badass woman. I will just say that is, it's been a really good story. I think I only have like, one or two episodes left. It's been out for a while now, and I thoroughly recommend checking that one out. It's a really good story and super well done. It's similar to, like, Narcos, the show. If anyone watched that one on Netflix,

Speaker 1  
yeah, it's got the woman from Modern Family, right? Yeah. And she's like, you know,

</p>
<p><strong>Ryan Burgess</strong><br />
yes, thank you. I was like, it was on the tip of my tongue. I knew her first name was Sophia, but thank you, Marco. She's awesome. Like, she is, like, she's so good in Modern Family. But I think she plays this role very well. Like, it feels like, you know, just like, even comments she says in modern family about, like, how, how she would do things in Colombia. And then you see her play this part, I'm like, Oh yeah, yeah, you are, you are very badass. That's awesome. And then my second pick is kids, temporary tattoos. They are so cool nowadays, way cooler than when I had been growing up where, you know, just get those dinky little tattoos that were, like, you know, a little rainbow or a star. I don't know. They just weren't very cool looking. Now you can get, like tattoo artists have designed, you know, temporary tattoos. You can get full sleeves for your kids. My daughter has, right now, has her both arms and legs, fully covered in like these large temporary tattoos that I got her just off Amazon. So I highly recommend checking that one out. Brian and Marco, thank you so much for joining us. This was awesome. I definitely learned a lot more about SQL Lite, more like the current state of things, and I really very much appreciate that. And I hope our listeners do too. Where can people get in touch with you if they have questions or want to learn more?

</p>
<p><strong>Brian Holt</strong><br />
I mean, Twitter is usually the best place for me. I'm at Holt. BT, if you're interested in talking about SQLite, just send me an email. I'm brian<a href="https://twitter.com/sqlite">@sqlite</a>.io happy to talk to anyone and anyone about stuff that they're doing. And yeah, send me an email.

Marco Bambini  
Yeah, you can contact us the website, there is a form section or, yeah, you can contact me directly, Marco at SQLite cloud, send me an email. Oh,

</p>
<p><strong>Brian Holt</strong><br />
and we're building a forum, right? So pretty soon, at community that SQLite cloud.io, you'll be able to come and hang out, ask us, ask the engineers questions. Talk about ask you later, and Android cloud. So yeah, that'll be a good place to

</p>
<p><strong>Ryan Burgess</strong><br />
those are always good, like just to get answers for things that probably have already been answered, which is always nice too. Yeah, I like that. Well, thank you all for listening to our episode. You can find us on Twitter at front nhh. You can find us on YouTube at front nhh, whatever, and also, really wherever you like to listen to podcasts on subscribe, leave us a review, let us know how we're doing. Any last words you two,

</p>
<p><strong>Brian Holt</strong><br />
man, I normally have something snarky to say. They forgot to prepare something. So

</p>
<p><strong>Ryan Burgess</strong><br />
do you really need to prepare that Brian, like, do you actually prepare that stuff ahead of time?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, we're doing this at like 10 in the morning. So I have not been drinking so, but I'll borrow oil from my favorite podcast, my other favorite podcast, which is behind the bastards and their tagline is, I love you go to hell.

</p>
<p><strong>Ryan Burgess</strong><br />
Fine word, standby, yeah, I.

</p>
`;
        return transcript;
    };