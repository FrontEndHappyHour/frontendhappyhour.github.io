// Episode 1 transcript
module.exports = function() {
  const transcript = `
  <p><strong>Ryan Burgess</strong><br />
Welcome to another episode of the front end happy hour podcast. In today's episode, we are joined by Jerome to talk with us about serverless. Jerome, can you give us a brief introduction of who you are, what you do and what your favorite happy hour beverages?

</p>
<p><strong>Jerome Hardaway</strong><br />
Roger that My name is Jerome Hardaway I am a dev advocate at Quicken Loans by day and at night I am the geek at arms or executive director whichever way you want to call it. That Sukkot so basically like a broke version of Batman so I'll be arrow. My drink. My drink of choice is a classic I always suddenly want to drink is Hibiki harmony because a Japanese whiskey so good. Yes. It's so smooth. It's so why what have you Where have you been all my life? So like this, what I'm actually drinking right now.

</p>
<p><strong>Augustus Yuan</strong><br />
Very nice.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. Well, let's also give introductions of today's panelists. Augustus you want to start it off?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, sure. My name is Augustus. I'm a software engineer at twitch

</p>
<p><strong>Stacy London</strong><br />
Stacy, London senior front end engineer at Atlassian.

</p>
<p><strong>Jem Young</strong><br />
Jem Young, senior software engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. So what did we decide? Today's keyword is? 

</p>
<p><strong>All</strong><br />
API

</p>
<p><strong>Ryan Burgess</strong><br />
All right. So if we say API From now on, we will all take a drink. Well, let's hop into serverless what is serverless? Can someone please describe what is serverless?

</p>
<p><strong>Stacy London</strong><br />
It's been someone at work starts speaking Greek and they're like, why am does

</p>
<p><strong>Jerome Hardaway</strong><br />
Oh man, um, serverless is a practice of instead of having thank goodness, this isn't a word Eureka. Instead of having like a like hard server that you're putting all your data on, you're having something in the cloud another someone else's server serverless is the practice of using servers that and API's and cloud signallers. Cheers, cheers. Yeah. So using API's and cloud technologies to serve data to the web, right? handle all your data in the cloud via NVA. API says two times, right? I'm really yours.

</p>
<p><strong>Jem Young</strong><br />
Cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
I had a long day at work. So this is great.

</p>
<p><strong>Stacy London</strong><br />
Like, how is that different than I have make a website? I put those files in the cloud? Like, how would it be different than that? Like the traditional way we sort of think about deploying a website to the cloud or putting it somewhere

</p>
<p><strong>Ryan Burgess</strong><br />
mean FTP?

</p>
<p><strong>Jerome Hardaway</strong><br />
What you're saying to the cloud, I was like, oh, like it's either help people? Because I actually it's been Four score and seven years ago since I even touch FTP, right? Well, yes, like crazy old school. So you think of FTP and putting your files like someplace and like a hard, like core like situation, like, oh, here is my files, and I'm dragging and dropping? And I'm waiting in a doubt upload. And then I'll hopefully have a cache and it takes 2030 minutes, right? Well, when you're thinking of serverless, and things that you have, I'll go off the most simple format, right, um, one of my favorites a lot I like to the first thing I introduce my students to is search, right, so each.sh. So they build their build their website, and they go into SEO, into the COI. And they use search, which is a search, you know, a service that takes their tools, turns it all into a CDN and then shoots it the internet with this own domain name that you can either mask or you can make up on the fly. They come up with, like really crazy domain names like everybody else. So that is like the biggest, lightest easier, it's faster. It's leaner. Right? I think that's the biggest and it's empowering, right? I think that's the biggest w for especially those who are coming in front end game from a monitoring perspective. It's just so much leaner for the new for the newer devs to come in and they're like, Hey, I can actually like spin eight bucks on a domain name and use net apply and surge and contentful and that that's it and have my blog up and running in like a week, right? And he's all like serverless tools that help you know, hitless cmss and things that nature they empower the front end and that's kind of makes me excited about them.

</p>
<p><strong>Jem Young</strong><br />
I think Your your definition of solid on serverless. I, I think that make it a little more clear because some of it is like, Man, I'm new to the game, I have no idea what you're talking about, like what is all that cool stuff like making it even simpler. It's the idea of like you write a function write function takes an input produce an output, right? Basic functional programming. So imagine taking that function and being able to upload it somewhere so that it responds to internet requests. So it's not just your machine, it's anybody. And that's the basic idea behind serverless is, yeah, you can do that you just take an input give an output, except you don't have to worry about any of the in between state, it just works. And then you can update it quickly over time. So it's pretty powerful stuff. A Wi Fi fascinating. Andrew, you're, you're touching on it is like I 15 years ago, to make a webpage, you needed to be a front end engineer, like you needed to be an engineer, you need to have skills you need to know HTML, CSS, a little bit of JavaScript, that isn't changed. We have like Shopify, and Squarespace. Anybody can make a website now it doesn't take any skills. Okay. So 10 years, five years ago, if you want to deploy a server to actually do custom stuff beyond like a WordPress site, you need to be a front end engineer, you need to know that sort of thing. You know how to deploy a server, all these things. Now 2020, you don't need any of that. So you can build entire webpage silent how you want all that deploy, deploy to multiple regions have CDN fallbacks, and all that stuff. And never know any of the other stuff. You only need a front end engineer as much anymore. I think it's like the tail of the of serverless is, and we'll talk about serverless. Like how I hate the name, but the tail, that is just how front end keeps evolving. And like if you don't keep your skills fresh, you will get left behind because you're like, Oh, yeah, when's the last time you had someone who called themselves a webmaster? Like, remember that I remember.

</p>
<p><strong>Augustus Yuan</strong><br />
That's a good point.

</p>
<p><strong>Jerome Hardaway</strong><br />
I am legit spending my early mornings training a team of webmasters and web developers. So it still exists out there. The further you get away from tech hubs, you start seeing these rolls again. So yeah, like a serverless helps that bandwidth right away, oh, I'm UX, but I want to be able to serve to the web. And I really don't want you know, to spend a lot of time learning something. So like I said, I mean, just comes back to like the whole story of how service is empowering, right? It's just, it gives the front end superpowers, especially the newer generation of guys and girls are coming behind us. So they can focus on things like learning, like going deeper into the language and learning the, you know, other gotchas, then we can all the how to fix all the problems we left behind for them, like all the bad serviceability things, we screwed up and other websites. So why did he come behind us? And like learn that stuff without having to learn like how to deal with the pain of FTP? Because yes, remember, FTP versus now?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, yeah

</p>
<p><strong>Ryan Burgess</strong><br />
I'm not gonna lie. I've still used it in like, the past year, like it's happened, it's been definitely do it. It's still useful. I 100% agree with the points on like, serverless just been a lot more straightforward. And, you know, just the amount of work that it would take even domain forwarding, or just dealing with all those little details that it was so hard to get your.com up and running. I mean, it's not hard. But it's like you needed to know how to do that, and how to deal with name servers and make sure that it's all going to the right place. And it's really frustrating when it doesn't work, because it's not easy to debug if you barely knew what you're doing in the first place. So I think a lot of that makes sense. But you know, what else is really good, too, is serverless works for large companies to like we're touching on right now talking about just the individual. But serverless is used by many large companies for a lot of great reasons to like there's a there's benefits in scale. Yes. And same thing with the small place, you know, maybe there's a Shopify site, like john mentioned, and it starts blowing up and getting all this traffic. And, you know, you need to put more servers behind, it's really easy in a serverless environment, you can scale up or scale down really quickly, which is great,

</p>
<p><strong>Jerome Hardaway</strong><br />
or like tools like serverless tools that help you like, you know, fastly write a CDN or why masking your front end, right? So that when you know, you hit a surge, and everybody's like, oh, why your site's amazing, but you don't have that while you're spinning up more. So imaginary servers, you're able to use fastly to lie Oh, like they're hitting, especially they're not signed in. They used to do this at Comic Book and they weren't signed in, they only get the fastly version, the cached version of the site server via fastly right, which is one giant CDN. And because like these tools, they just they help say, save money to help save time, especially when we had what we would call a runner like article that like, you know, people Everybody was on. I never forget, Brandon Davis did something like he's a big person and like comments and stuff. on the interwebs, he had to go follow him on Twitter, he wrote an article that was maybe two sentences long, that became a runner and almost broke the site. And it wasn't for serverless technology. So being a good AWS made more servers on it, while also ensuring that we were like sending everyone that wasn't signed in to the cached version of website via fastly, the site would have went down. And I never forget, like, I was just like, thanks a lot, jackass by whatever. I remember. I think it was something about Wolverine. At that time. I was like, Yo, this dude, almost, you know, broke the internet by talking about Hugh Jackman. Like, what what's going on here?

</p>
<p><strong>Ryan Burgess</strong><br />
That's wild, too. It's like those little things can happen. Just a small thing that you didn't, you didn't plan for blowing up. Like, that's really hard. It's hard to plan for what goes viral. like everyone's always like, I'm gonna create the next viral video or something like that. It's impossible. Maybe like you can't set out to do that. It just happens organically and good on all the people that it's happened for. That's really awesome. You would mention like something like fastly, great, great point is like you can use a CDN really easily. But also the whole serverless world to is great in the fact that you can now have servers deployed across the world. And so you can have less latency. So if I'm in the US, I'm likely hitting a server that is in the US. Okay, well, Netflix, I think it's worldwide. Yeah, people, people watching Netflix across the world, someone's in, in Japan, they're not hitting the US servers, because that doesn't make a lot of sense. It's like that would cause latency. And so that you can now have deployed across the world, which is huge. I think that's just a win rate in itself. I think

</p>
<p><strong>Jerome Hardaway</strong><br />
they also like, you know, because of serverless. And having been having people be able to be deployed, having the tool, being able to a website and be deployed across Well, it helps makes internet international internationalization a lot easier, right? Like, well, you know, you know, like, only these resources need to be deployed to this particular country, because, hey, you know, their language and their ways of using the web because I didn't Elsa crate first thing when it came to FTP, and like websites, and like, especially big web apps, that was the first like experience, I had, oh, this is crazy how we're doing, like serving to the lab. I was working on a franchising app. And every country had to have his own app. That's how they wanted it to, they wanted to do it. And just learning how, you know, people in Japan use the web and like zip codes, like, you know, they have every block is a zip code, I had no idea. And I was like, lost, like, what, how am I supposed to do this? How am I supposed to figure this out? how, you know, you're staying up at certain times to make sure you do deployments when their traffic is down, right. So like AWS, for instance, you don't have to do that it tells you could just time it, and it handles all of that stuff automatically, right? Just set the timer or you have someone to play it. Like who doesn't, who remembers the days the light waiting to like, midnight to deploy a website or to update a website just to ensure

</p>
<p><strong>Ryan Burgess</strong><br />
to avoid the like mass surge. And if there was a problem, you can fix it without all your users, you know, seeing that problem? Yeah, absolutely. Now, it's like, well, you could try that. But when you are a global company, when's the right time? When's that? When's that midnight? The Midnight doesn't

</p>
<p><strong>Jerome Hardaway</strong><br />
exist midnight moves right now. So they just been have been able to, like with serverless technologies, you can, you know, you can stack and stagger resources and assets when you're moving them, right. Like, you can, like being able to figure out what's critical and critical. In serving that has never been as easy as is now with serverless technologies, right, you know, so figuring out like those that above the fold content that the users need and what needs to be first and be fast and ensure that your user doesn't hate you. Like serverless helps with all that, you know, AWS is Bay when trying to make sure you know, your users stay late. I'm dropping bars like

I really was trying to run bars.

</p>
<p><strong>Ryan Burgess</strong><br />
I love it. We need some beats behind this. We should

</p>
<p><strong>Jem Young</strong><br />
shift the discussion slightly. I like to have a more meta discussion as we usually do. So one thing and you all have been touching on this is like the ease of doing things that was previously actually can be difficult, or required a lot of training or required a lot of money up front. And now you don't need to do that anymore. Like, for instance, having a multi availability zone on Amazon is used to be really difficult because it means you have to set up a server in each specific region. And then like maintain all those, make sure they and all that stuff. But now all that's done for you, like you can do it automatically, like, which is really powerful. So the discussion, I'd be sitting here your thoughts on are? How are we the only industry that does this? So I'm gonna get a little technical here. Are you familiar with the concept of regulatory capture? Maybe I'll explain anyways, just because like the podcast, you might know.

</p>
<p><strong>Ryan Burgess</strong><br />
We are shaking our heads know,

</p>
<p><strong>Jem Young</strong><br />
the idea of regulatory capture is a special interest groups, or in this case, let's say, developers, we got a politician say like, hey, if you want to call yourself an engineer, or developer, you need to get this federal certification. And this certification costs $20,000. Because it's worth it, we get paid a lot of money. So politicians like yeah, that's, that's right. Probably everybody shouldn't be engineer. So let's create this special permitting process and all those things. So then, right there, we've created ready regulatory capture only people who can afford to pay this bar and cross this hurdle and pass this test that we've established, can become engineers. And of course, that's not the case with software engineering in America. There's no certification. You could go from a banker yesterday to a engineer tomorrow. I an example of this in real life is we see people that need permits to do people's hair. So many states, actually, I think, a bunch of states to braid someone's hair, you need a special permit, you need licensing, and you need all these things. And I know if you're sounding skeptical, like that's crazy, that's not a doctor. It's it's like doing hair or, or nails or something like that.

</p>
<p><strong>Jerome Hardaway</strong><br />
We had a big lawsuit in Tennessee about a woman in Knoxville is getting sued because she didn't have a license for braiding. And they hit her with like a fine. It was like five times more than the license, it was really well. So you're asking about trends and regulatory capture first, like when it comes to when it comes globally and regular regulatory capture, that's a very hard moving post, because rotatory capture when it comes to special politics, it doesn't just follow on politicians, falls on communities, right? I've shared this earlier, we're the last like frontier when it comes to treating tech as a trade, right? You go to any your places like for instance, there's free college, well, then they use the free college as the quote unquote, repertory capture to get the jobs right. Oh, you don't have a CS degree, you can engineer some of that. But right you're in. You're in Germany for college. You don't have CS degree, no coming out. Now becoming an engineer, right? There's nothing you can do about right, no matter how much code you've written in your life. I had a veteran, I actually helped him today. And yet, he's by 253rd. Veteran. He was in Finland, and was writing code, and he couldn't get a job, because he didn't have a CS degree. And cancer college is free, please. Like I'm America. And of course, I don't qualify for that stuff. So but now he's like, he's gotten two jobs in America now. But so when we talk about that, and we talk about the idea of serverless. Like, I think like the AWS certification does come to mind, like immediately for capture, because I know especially on my side of the fence, when it comes to people, like certs are still being pushed to minorities and people cover underrepresented communities, right? Like you see certifications and stuff and push all time on AWS. It's really weird, because I've worked in AWS and I've never had a cert, and I see people who they don't even think they can get a job that certification. That idea like is going all over. Like, you know, puff like politicians keeping people from doing it. It's very, it's very weird and very unique or even idea like companies like EP for doing what cops is serverless it's very weird. Like, I feel like serverless key light is mitigating gatekeeping to the degree. I think that's one of the reasons why I love it. I'm interested to hear your thoughts on it. How's it serverless repertory captured?

</p>
<p><strong>Jem Young</strong><br />
Yeah, like, you brought a lot of good points there. Like the idea of regulatory capture is, essentially people in power, stay in power and they get more power. So communities that are historically disenfranchised, or people that have not been paid as much as white men historically, are generally affected the most most, where it comes back to serverless. It's that we're the only by far and I'd like to know if there's other examples, but we're the only career That doesn't do this. In fact, we actively make it easier for people to join, like serverless takes so much out of the equation. So like, you're some guy in Bend for Tennessee, I want to create a webpage to sell something, or I just want to blog. Now, we actively as engineers create the tools to make that easier so that there is no gatekeeping. There's no capture, you want to be create the next big webpage, you can do it. And we were the only ones that do this. Like you don't see bankers make an easier become bankers. You don't see lawyers make it easier to become lawyers.

</p>
<p><strong>Jerome Hardaway</strong><br />
You're absolutely right. Oh, no, I don't see anyone

</p>
<p><strong>Stacy London</strong><br />
we try it, we try and program our way out of our jobs. Right.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, that's true. That's true.

</p>
<p><strong>Stacy London</strong><br />
Or even to build upon that point, the service making it more from like a monetary perspective, it's cheaper to only pay for what you use, which is kind of a lot that is associated with serverless. And so right, it's making it more you know, reducing price free, the internet's free, like all these things that kind of make it like available to anybody, regardless of your class or status, or how much money you have. And, you know, this this is like a thing that's making it more accessible to more people.

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. Eve also mean serverless is great. But what are the drawbacks? There's got to be some there's there's always pros and cons. What are the drawbacks? serverless

</p>
<p><strong>Jerome Hardaway</strong><br />
are the drawbacks with serverless? I think the volatility in the market right now I there's so many things, right? There's so many competitors, you have Google with Firebase we ever sell, you'll never fly that AWS Yeah, that's your, yeah, Google Cloud Platform, like Google's like doing it, you know, they're doing a three tier on it. So you know, just making that decision, right? There's a lot of decision bloat, right? Like, you know, as front ends, you know, that a, you know, HTML, CSS, JavaScript. And then you have like, maybe three or four if you're being generous, like front frameworks to choose from on the front end side. So you know, maybe if you wanted to throw Ember like framework on LinkedIn, I have issue with LinkedIn using embers. So why we can like we can hash it out, like we can talk about. So I'm not a fan of that decision. But I think like that decision blow, like one of the thing reason, one of the things that attracted me to front end was the lack of decisions I had, so I could focus on a deeper process, right. Everything in the end was HTML, CSS, JavaScript, so I could get into these theories of HTML, CSS, JavaScript, from design systems for enterprise apps, to accessibility to perf, when it came to JavaScript, and then when it came to initially, AWS was like the biggest player on the serverless game. So it just was that one thing how to search the web, then search came a little step back into this even easier, then net apply came. And then people talked about hitless in the messages. And then Barcelona came, it's like, oh, my goodness. Now, like, when a new person asked me which services they use, I'm like, I'm gonna tell you what I use. I recommend you play with them all and decide which one speaks to you yourself.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, no, I was gonna say, yeah, there's like, a lot of overhead with so many decisions. And also, I feel like, this is gonna be awkward, middle of this episode. I still sometimes like not really sure how to define serverless. Because there's so many ways you could view serverless. Like, I guess the definition I'm going off of is you do not have to manage your own server. So it's actually hilarious. Because when we talk about FTP, I'll just define it for people who don't know, it's like file file transfer. And you would use you used to have to like drag. I remember I dragged like, index HTML, I forgot the frickin program I use, but it's like, that's probably something so forward to. But yeah, kind of like what I was saying, like, at least this is. So my definition of serverless is, you know, you don't have to manage your own servers. And I'll say that, I would say, one of the drawbacks is, you know, just as much as like, not having to manage your own servers and getting all the awesome benefits of auto scaling are great. Like, let's say you did get viral and you did auto scale. Like, it's, it can be very expensive. If you're not managing it closely. Like, this is like why, like, you still need to pre provision resources and stuff like that. Like you shouldn't just let the auto scaling group handle it for you. Right, like, it can be very, very expensive.

</p>
<p><strong>Ryan Burgess</strong><br />
Funding is Another drawback I was thinking about. You know, I think there's always fear especially Want to think about it from larger companies is now you're relying on yet another company. Like back in the day, I don't know about all you, I have actually set up my own little web server. And it was legitimately a little tower that I would run. And I had control over that there was times it went down, but I could debug and figure that out. But when it is in the cloud, or it's, you know, you're not relying on a third party to deal with this. And I think it maybe it's not as big of a deal when it's a smaller site. But when you're thinking of large applications, like a lot of companies rely on AWS, if Amazon has any problem that could take down a lot of websites across the board.

</p>
<p><strong>Jerome Hardaway</strong><br />
Yes. And like and that did happen, guys remember, did that Junior programmer, somehow, like push the wrong code? He took down the east coast? That was hilarious. I'm sorry.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a big deal. Right? Like that's like, that can be problematic for a lot of companies. You're losing money. Yeah, has that error that happened, I even laugh, like, and Jim's gonna laugh at me for it. But my house runs on the internet, like, there's a lot of things when you start to move to everything. IoT, it's like, yeah, you lose the internet, you're like, oh, my goodness, like, this is a pain in the ass. And so it's like, those types of things, we all start to rely on these services so heavily,

</p>
<p><strong>Jem Young</strong><br />
one of the drawbacks of serverless is you give people the capability to do things, which they do not have the, they don't have the skill to fully grasp. Like, you know, if I gave my six month old, I don't know $1,000, that there's a lot you can do with $1,000. But to him, he's like, oh, cool, and he just probably throw it or drop it and move on to the next thing I play with, eat it, probably five baht probably try to eat it first. But that's that's the, I guess the one of the drawbacks of serverless is it gives you so much power. And you can create a website and all these things. And you can get really far you can build these complex, beautiful applications. But if something goes wrong, you may not have the skill to handle that. And debugging, I would argue part of an engineer skill, actually, the larger part of a good engineer skill is the ability to debug things. Anybody great things like I can hit a button and create a web page, blah, blah. But can I fix it if it goes wrong? And that's where I see people kind of writing themselves into a corner a bit more, where they're, they're using all these great technologies and game changing life changing technologies. But if you were to ask them, like any more than the surface level question, they don't know, they're just like, I don't know it, it goes somewhere. But you know, and it just works. And people say like, you're an engineer, right? Like, yeah, but you know, I only know this. And that may be okay for your basic webpage. But I see this bubbling up more in interviews where people like, Oh, I did this, and I pull this webpage. And I did this my cool. Tell me about a bit about networking, like how did you transfer from hv to h v3. And they're just like, nothing. They're like, it's just God. It's like such a very narrow skill set. And I worry people will become so involved in one thing, they never broaden outside of that, and they don't learn like the fundamentals behind that. Wait, let me let me do Ryan. So that was a great conversation about serverless. And like, I really hope we can we can get some links from you Jerome by the end. And now let's transition to fix at every episode of front end now.

</p>
<p><strong>Ryan Burgess</strong><br />
It's like be pretty on point.

</p>
<p><strong>Augustus Yuan</strong><br />
All right. Okay.

</p>
<p><strong>Ryan Burgess</strong><br />
So that was a good, interesting conversation. Thanks, Jim. For summarizing that, I think it's about time we jump into pics, or each episode, we'd love to share pics of things that we find interesting. It can be anything, it might even be about serverless. But if it's not, it doesn't matter. We're going to share fun pics for you all to find out about

</p>
<p><strong>Jem Young</strong><br />
I'll start out I only have two. The first one is a television show. It is on. I know don't hate me. amazon prime video. Before I go into the AWS Can I just say how terrible prime video is, like literally once a week after unplug my TV cuz like the app just dies and it will not start it doesn't do anything. When I restart my TV. It starts in like a health message saying your Internet's out. And then I switch to the German. I'm just like, my wife has the office all the time. But I'm just like, come on. Come on prime video. You've been doing this for a long time. Get better. Anyways, if you go through all that there's a show on Amazon Prime called the world's toughest race eco challenge. It's hosted by Bear Grylls and it's 66 teams of four people trying to race across Fiji. And when I first started I was like, How hard can this thing be? I could probably do that. And then I could, I'll just say I can. I got a lot of ego but I can just tell you I couldn't. It is really fascinating to see how far people can push themselves and just like for five days no sleep, covering hundreds of miles. It is. It's worth watching it is it sucks you in and then it just keeps going. So that's the world's toughest race eco challenge Fiji. My second pick is Valley silicon pick. That is the pick where I pick things that only exists because we just get paid too much money here. Otherwise it shouldn't exist. How much would you pay for a window in your house?

</p>
<p><strong>Stacy London</strong><br />
Oh, a couple hundred dollars.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm sorry. gem windows are actually pretty expensive.

</p>
<p><strong>Jem Young</strong><br />
They are. Yeah, yeah. But what if you just wanted to add a window? anywhere? anywhere? You didn't you need to cut a hole.

</p>
<p><strong>Augustus Yuan</strong><br />
Like even if there was a wall already,

</p>
<p><strong>Jem Young</strong><br />
even if there's a wall?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it's pretty pricey. I would say that's pretty pricey, right? Yeah,

</p>
<p><strong>Jem Young</strong><br />
it's expensive. That window. So this company called daylight windows, they will sell you a fake window. That includes a fake light behind it. For the low low price of $435. What's that? That's a deal, right? You can put a fake window anywhere. It'll even mean it doesn't mean anything. I mean, I could make maybe you feel better about yourself. I I don't know maybe maybe salespeople I shouldn't I shouldn't criticize Vegas. How

</p>
<p><strong>Ryan Burgess</strong><br />
big is the window? Because I also feel like what's the price of a like, LCD? Right? You could make a window just by throwing a TV on your wall?

</p>
<p><strong>Jem Young</strong><br />
Like, I don't know, maybe? Maybe you live in a basement and you need like yours you're feeling bad that you got this basement apartment and you're regretting it now. With the windows and you buy a bunch of these you might feel better. I don't know it to me it seems kind of ludicrous for a fake window with some LEDs to be $435 but that's why this is Valley silicon. And that's why I make these crazy crazy sorry actually these are workers wild pics.

</p>
<p><strong>Ryan Burgess</strong><br />
I would maybe pay $100 

</p>
<p><strong>Jem Young</strong><br />
I pay like 25

</p>
<p><strong>Jerome Hardaway</strong><br />
I wouldn't pay anything

</p>
<p><strong>Ryan Burgess</strong><br />
I was I was trying to be nice.

</p>
<p><strong>Jerome Hardaway</strong><br />
I would go outside. What is going on? I'm so confused right now. Wow, I guess I'll go next cuz you just wow Um, so um, I have I have a technical pig first serverless CSS tricks calm if your front end and you love you will learn more about serverless like CSS tricks Chris Boyer he has an entire like website about I don't remember when it dropped. I was like, Oh man, this is awesome. This is gonna buy really supercharged people's learning from him very I love it right. And I guess I want to pick two casual picks. You know Jim Steele as he kind of shook tomorrow I don't know what you guys want to drop this but tomorrow on Friday is a Lucifer drops on Netflix and I am crazy excited for that. And then two weeks after this in September the boys season two jobs on amazon prime and I'm super excited for that. So the boys Season Two that is the I feel like the boys and project power right now are the best like comic book stories out there. Because they're putting like that, like real spin on comic books versus like the you know, of course Superman Captain America would both be like good guys like know if this is like America, Superman, Captain America both be jerks. Why? You know, they'd be capitalist or it's like, Superman will be Donald Trump, like in real life. Why? Let's just keep it 100 right, you know, Captain America would be that's my favorite character. I want to think about what he would be in real life. So both those shows are going to be coming out and I'm going to be dinging them all like I'm looking for I have my food. I like my entire business ready are have the meal I'm gonna make when I make a Hawaiian just want Hawaiian rice blend with pork belly. And pineapple is to infuse it why I'm going to be very happy for this and I'm just going to eat like a giant bowl of lamb of red peppers and the special spicy flour that's coming that comes from China. And pineapple fried rice with pork belly in it and I'm just gonna watch the entire season of Lucifer tomahto

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, Stacy, what do you have for us?

</p>
<p><strong>Stacy London</strong><br />
Alright, two picks music picks. As usual, I have the first one is suka fool, Max Cooper Firefly remix, by a menagerie of people but it's been described as sort of an amalgamation of Indian and Western folk music. It's kind of melancholy and then bubbling jazz like bass bass line. So it's a very unique track but I like max Cooper a lot when I came across this I thought it was really cool. And the next pick is a song called back to the sky by Olafur arnalds and Bofors a, an artist that I really liked from Iceland that he does a lot of kind of neo classical piano stuff. But this is a collaboration he did with another singer song songwriter. And it's it's really beautiful in the in, the songwriter said that kind of inspired by she just moved, I think to Reykjavik, and she was looking at the sky and it was kind of dark and she felt a little lonely and she was staring in the sky and it felt like kind of like speaking to someone through the cosmos, which I think all of us maybe are a lot of us that might still be like self isolating, and quarantining and feeling a little lonely. I think the song might resonate a little bit with you.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice, Augustus what do you have for us? 

</p>
<p><strong>Augustus Yuan</strong><br />
Sure. I have two quick picks. My first pick is a game called fall, guys. For those of you who don't know, it's a game that kind of got more viral recently. It's basically a kid's version of Battle Royale. And that you don't, you don't shoot each other. You just do these like challenges. And it's that it's like a Mario Party Battle Royale. Essentially, you patch up with a bunch of people in jellybeans costumes, and it's really cute, but it's also very addicting, so highly recommend. And then my second pick, very relevant to this episode is a YouTube video on intro to AWS, lambda and serverless. I've just thought it was a very good talk. And in general, that YouTube, that YouTube channel AWS services, like I feel like they have a lot of really solid videos on AWS stuff, so definitely worth checking out. Awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
And I have two picks for us in this episode. One is a actually another Netflix original to add to the pile a Chef's Table barbecue, which is so good. It actually features a restaurant that I've always really wanted to try. In Lexington, Texas. There's a barbecue place. It just sounds like so amazing called snows barbecue. The main pit. Cook is her name is Tootsie and she's 85 years old and still cooking like it's so amazing. So I yeah, it's it's pretty amazing. The first episode is on the Lexington, Texas place Tootsie It's amazing. I really enjoyed it. I'm not fully done the series yet, but I highly recommend it. And then I have another one for cocktails. I've been trying to find a good app for recipes for cocktails, and found an interesting one called mixel. So it's m i XEL cocktail app. It's great. So I highly recommend checking it out. It's kind of cool. It has like a pixel vibe to it too, which is great. So before we end the episode, I want to thank Jerome thanks so much for joining us. It was a pleasure having you on where can people get in touch with you?

</p>
<p><strong>Jerome Hardaway</strong><br />
Oh yeah, you guys can find me at <a href="https://twitter.com/JeromeHardaway">@JeromeHardaway</a> on Twitter. That's where I'm at most of the time. And I would love to like talk to you talk to people about serverless veterans. People need help you in your first front end job. I do. Like I'm a jack of all trades right on, at least on the front end front. So I'm excited to like, you know, interact with

</p>
<p><strong>Ryan Burgess</strong><br />
right on. Thank you all for listening to today's episode. You can find us on <a href="https://frontendhappyhour.com">FrontEndHappyHour.com</a> Subscribe to us on whatever you like to listen to podcasts on. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> any last words

</p>
<p><strong>Stacy London</strong><br />
API

</p>
<p><strong>Augustus Yuan</strong><br />
API Cheers. Cheers.</p>
  
  `;
  return transcript;
};