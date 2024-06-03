module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
I mean, it's been a while since we've talked about this topic. So it was, I like that cold brought this one up, because it has been a while. And I think, Paul, this is the last time we spoke about this was when you were like a guest, where you're not like it was kinda like your guest, and then you join the panel. Yeah,

</p>
<p><strong>Cole Turner</strong><br />
it seems like server driven UI just anchors me to this podcast. When I started, it was like, just learning about it. And now I'm just like, whoa.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, yeah. So as Cole just basically alluded to is we're going to be talking about server driven UI. And we've given perspectives on this. Yeah, probably about a year or two ago, like I lose track of time. So I can't remember I should look up to see exactly which episode it was. But yeah, we we did this topic, and I think it's worth revisiting. And to this time, we actually have Sherman Chen, joining us who's a senior software engineer at LinkedIn, which you're very familiar with some server driven UI at LinkedIn. And I think this is a great topic for us to kind of discuss and like, it's been around long enough, you know, anything with any trends that we see. It's cool when you actually revisit something that's now been around a while and see, like, is this actually working? Is it scaling? You know, is this still the right thing to be doing? Sherman's laughing so I'm, like, really curious to know what's gonna happen now. But yeah, Sherman, before we dive in, can you give a brief introduction of who you are, what you do, and what your favorite Happy Hour beverage is?

</p>
<p><strong>Sherman Chen</strong><br />
Yeah, everyone knows me. I'm Sherman. I'm currently a software engineer at LinkedIn. I work on the web platform linkedin.com. And I think I spend most of my time working on something called LinkedIn pages. You can think of it as like a profile for a company versus individual. And yeah, I think I try my best to make LinkedIn a good experience. user visits.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that model. That's good. Keep making it great. Yeah, that's good.

</p>
<p><strong>Sherman Chen</strong><br />
Yeah, I did. My my favorite Happy Hour beverage. I am hopelessly addicted to Coke Zero. I think I Claro.

</p>
<p><strong>Augustus Yuan</strong><br />
Yes. Okay. All right.

</p>
<p><strong>Ryan Burgess</strong><br />
I should let you finish that. How many do you drink a day, Sherman.

</p>
<p><strong>Sherman Chen</strong><br />
I'm trying to limit myself to two a day. Which I've been somewhat good with. Today. I haven't drank any because it is rarely as national boba day. So actually, me a milk tea.

</p>
<p><strong>Ryan Burgess</strong><br />
I wish I knew is national BOGO day. That's kind of feels like I wish I had that gem. Do you know this? Feel like that said no,

</p>
<p><strong>Jem Young</strong><br />
but I did have boba. Yes, I did do that.

</p>
<p><strong>Cole Turner</strong><br />
I'm cool. It was planned. German texted me today.

</p>
<p><strong>Ryan Burgess</strong><br />
That's so good. All right. Well, let's also give introductions of today's panelists. Augustus you want to start it off? Sure. Like is this I'm a software engineer at Twitch. Who acts now is what we're calling it, Augustus. All right. All right. Cool. My name is Cole.

</p>
<p><strong>Cole Turner</strong><br />
I'm a current software engineer at Netflix.

</p>
<p><strong>Jem Young</strong><br />
Jem young engineering manager at Netflix. And we are currently knee deep in sci fi. So this should be a good topic.

</p>
<p><strong>Ryan Burgess</strong><br />
This will be a good one. And I'm the host of front end Happy Hour Ryan Burgess. I'm also ex Netflix engineering manager there I'll follow suit with Augustus interim clerk has been nice enough to help support front end happier podcast and sponsor this episode. I'm looking at you get complete user management with pre built UI components for sign in sign up user profiles and organizations. The authentication is MFA SSO magic links, SMS and bought detection clerk provides helpful SDKs for modern frameworks such as next.js, and react seamless integrations with popular databases, even clerks free tier offers up to 10,000 monthly active users, and you never pay for a user's first day, everything you need to authenticate and manage your users freeing you up to focus on building. Let's dive in. You all have server driven UI. Maybe we should start you know, maybe not everyone has listened to that first episode, who would like to give a rough definition of what server driven UI actually is? And you know, just to kind of get that level set before we dive in. I'm looking at Cole and Sherman for this one. I think they had their fair share of server driven UI.

</p>
<p><strong>Jem Young</strong><br />
How dare you say engineering managers can explain serves everyone out there? You know,

</p>
<p><strong>Ryan Burgess</strong><br />
I already know this. You know, it's like, I feel like you and I can do the high level jam like we will give the action maybe that's how you start as a give the high level and then it's like the engineers will be like, well, you kind of messed up gets little details up. Or he should have talked about this too. You kind of miss that. So, you know, maybe I'm just going right to the source on this one, Jem.

</p>
<p><strong>Jem Young</strong><br />
Oh, no, you're 100%. Right? Better more qualified than me. I'm just say, I'm personally affected.

</p>
<p><strong>Ryan Burgess</strong><br />
But I'm with you on it. It's okay. Jim, you can hold that against me. You

</p>
<p><strong>Sherman Chen</strong><br />
know, what I can say is server driven UI, if done wrong. What I've heard is, it is what UI development or it is what a back end engineer thinks UI development is like, without ever having done utilizes. All right, a lot. 
Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Actually, even even like, you took the negative side on it. But I'm like, Okay, I'm following is that it's like, yeah, if you were explaining how something's rendered to, you know, a back end engineer, that's probably a good way to like, simplify it. Is that kind of what you're getting at cool to have a sane.

</p>
<p><strong>Cole Turner</strong><br />
Yeah, I actually really like this definition. As somebody who has shifted from front end to back end back to front end. When I think about UI development as a back end engineer, you're often thinking about contracts and what the contracts look like for UI, and it's scary.

</p>
<p><strong>Ryan Burgess</strong><br />
So it's UI rendered on the server. And yes, I think that's, that's a good start. I like that. Now, wait, wait, wait, wait, wait, wait, what?

</p>
<p><strong>Jem Young</strong><br />
That was pretty vague UI rendered on the server. But doesn't. That's fair and wavy? For me an SRA is very misunderstood. Actually,

</p>
<p><strong>Cole Turner</strong><br />
on our second episode about SDI. I feel like on our first episode, we kind of hand waved, but on this episode, down into it, like, when he's talking about server driven UI, you're always ended up talking about how you build UIs anyways, and it feels like, if you remember from last episode, Jen was talking about thick clients versus thin clients and how it just always goes in circle. So now,

</p>
<p><strong>Ryan Burgess</strong><br />
thank you, thank you for reminding me of that call. Like I've already forgot what we talked about.

</p>
<p><strong>Cole Turner</strong><br />
Thank you. Yeah. So now, I guess my question to folks in this room having been through this two or three times now, what did we learn since then? Like, what we know what it is, but why have we learned? I

</p>
<p><strong>Sherman Chen</strong><br />
think what I learned, personally, is that despite your best efforts, there is still going to be fragmentation. At the end of the day, each platform has its own core respective way of doing things. And it's very hard to build this unify experience that's agnostic, and supposedly adaptable to x platforms in the future. But as long as you approach it from kind of like, an earnest view, and you work together, it's like, a good way to start a conversation about how to build these nice UI experience without like, kind of like dropping coverage for one or the other plus,

</p>
<p><strong>Ryan Burgess</strong><br />
maybe to even go back a little bit to because I think like, I liked the question, and the way you're answering in Sherman, but it made me also realize is like, maybe even what Jim was getting as like us defining it better. It's like maybe even starting at like, what are some of the benefits that you would want to go to right? Like starting back to like this was a year or two ago that we were talking about? This is like, Why were people thinking a server driven UI? This is a direction that we might want to go like, what are some of the benefits that you would get from

</p>
<p><strong>Augustus Yuan</strong><br />
I'm down to try to give my very bad depth? I'll just, I'll just be straight up honest, I don't think I've done server driven UI to the degree that other folks have done it. So I would love if I could just try to give a definition. And then someone could correct me because you know, everyone, the one thing is every company does things differently. So yeah, my understanding of what server driven UI is, you know, you think of a typical front end app, react, whatever, because we're all sun and happy hour. Sure, why not? Usually the relationship is the client react react app is requesting data from somewhere. And from that data on the client, you're figuring out what to read there. And my understanding of what server driven UI is is, is you know, there are a lot of use cases where it's better for the server to kind of make that determination. And it can be as like, simple as it tells you what, what the client should render. Or it could be even as extreme as the server literally just gives you the smack dab, hey, literally render this like and I've seen like different granularities of that it could be like, here are the components and props. And then you just you just literally shove it in and visual, and view and you can imagine in the front end app, it's like literally Okay, I'll take this component name. I'll figure out what component to pull. And here are the props in this JSON object. I'll just shove them in a spread JSON spread and call it a date. There's like that granularity. There's like literally like taking HTML and just slapping it. In an iframe, that's like more extreme ad does. Does that sound right? It's an I like?

</p>
<p><strong>Ryan Burgess</strong><br />
No, I think you did a great job of thinking about ways in which you can do it. And just kind of the whole essence of like what you're trying to achieve with it. I don't know if there's anything else anyone want else wants to add. But tonight,

</p>
<p><strong>Jem Young</strong><br />
I sort of all I'll take my manager explanation here as the least qualified person. So just like Augusta said, in Traditionally, when we were building UI, the the logic and the UI code are controlled by the client. So surger UI essentially saying, actually, the server controls what what UI is rendered. And that's like the short definition. What that means traditionally, is when we when we build user interfaces, what we're trying to achieve, especially when you're talking about multi platform, so we're trying to achieve parity across all these. So we have a consistent experience, trying to have means that could be across one platform, like a web, it could be mobile, Android, whatever it is you're trying to build, you're always trying to build like this same experience for for everybody that they use your application. The promise of surge of new AI is, well, instead of having a team of Android or Android engineer and iOS engineer, and three web engineers trying to build the same experience, and try to make make this parity, how about we have one unified way of describing UI on the server. And then it's up to each platform to interpret that into their own individual specifications. So that gives you the the idea of like, you can tactically universally scale any UI to any new platform, by having like this one language to describe all of these things. And the bonus you also get is, you don't have to ship a new client when you want to change the UI, because it's all described on the on the back end, like on the web, not as big a deal, because we can ship stuff all the time, it's pretty much a new client on every load. But on mobile, you get a lot of power there because you don't have to go through like the Play Store and do the rigorous updates and all these things, you can control all that in the server. So that's like the theory and then the promise servers anymore. But the execution, it turns out to be very, very complicated. It's it's one of those, it's a good idea. But it's, it's the details that that is why we get paid a lot of money to figure out these.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think I think Jim, like your ad on there, and like the selling point of like, the mobile clients is a great example of that. And like why it's so beneficial. But I think what we're all alluding to here is like that was the sell. Like we're like, yeah, that sounds great. And not something that likely would work. And we could definitely get leverage of doing this. Now, what we're kind of researching back to is like, yeah, what's we that was kind of the promise, but are we getting it? And kind of the answer is like, it's complicated. It's more complicated than I think people thought. So I'm curious, like, especially for those who are lot more familiar with it. Similar to jam, I was manager through a lot of this. Yeah, like, what was your experience? Like, what what was hard? What was like things that you just didn't expect or account for?

</p>
<p><strong>Sherman Chen</strong><br />
I think one of the hardest things is trying to envision how a platform works. From almost like an entirely, let's say, like a text based approach. I'm sending you JSON. But this JSON has to represent not just the look of your app, but how users are actually going to interact with and eventually navigate throughout the application. So it gets hard to start trying to model actions when they're techspace. And then how do I store state? You know, like, because my servers are not that my UI is sent from the server. Like, I can't ideally, I don't go back and ask for things. And I really I never store state on a server that's kind of like a big nono. Right? So how do I start representing this state of my client, when I only like make one initial trip to the server to get back Supposedly, this like holy grail of the layout, the actions and every day? I know one way that LinkedIn has been leveraging thing is kind of keeping a lot of state in query params. It is a it's a challenge. But it's one thing that's kind of universal in the sense that like, the way a URL is constructed, is the same across a web browser or across a mobile phone, across the tablet, etc. And then from there, you can kind of figure out, hey, is like, well, you know, page Am I navigating to when that navigation happens, you know, how does my respective like platform stack history work? If I need to show a widget or a component, I don't necessarily want to push a new frame on the stack. You know, how can I like damage next, how can I keep track of that within each So like client, so then maybe that's when a query frown would be leveraged? And then I think most challenging is how do I handle deep linking? deep linking is it's it's a challenge on its own. And now once I'm like trying to integrate all this, like server driven UI, I don't know which how exactly a user enters my application, and by the time to enter a specific viewer out what's available? Yes, I think this is my experience. Those are some of the more challenging problems. Sherman,

</p>
<p><strong>Ryan Burgess</strong><br />
I'm actually glad you brought up the query pram, wrote it, Augustus, it kind of made me remember a lot of things that we were doing at Evernote was doing not necessarily for server driven. But I mean, a lot of it was a PHP application or a Java application. And that was a lot of the problem, too, is we are trying to interact with different teams and platforms. And so sometimes it was very much you could send a lot of the data and even signals to change the UI, in a sense, just to query params. And it got complicated, though. Like, I think that that's, you know, probably Sherman, you felt this too, is like, simple when you're doing five, six things, and then you start adding more, and there's more complexity. And then each team has to understand those handoffs and video, there's all this documentation that comes along with it. It's not bad, but it just continues to get more complicated as it's trying to scale. That to me is like, it makes so much sense. I'm like, Yes, parameters that that's simple. And that will be great. That's easy. But it's the scale part. Am I wrong? Like Sherman is that like, really where it got to you all is like just getting harder with as it's scaled? Oh,

</p>
<p><strong>Sherman Chen</strong><br />
you know, my worst fear is that one day, I somehow think of the exact same query parameters as an engineer on some entirely different team. We both use it. And now the page has no idea what to show, because you can only have one. map to a certain state action.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no, we'll take the last one, right. Like it will take like, if you have like a equals one, and a equals two, it's going to equal two, it's the last one that shows so yeah, you're right.

</p>
<p><strong>Cole Turner</strong><br />
It's so funny here in this because what I'm hearing from Sherman a chi here, from gem from everyone, when it comes to server driven UI, the two kind of key parts, where it becomes challenging is when you have to do anything interactive, if you're doing anything beyond just presenting to the user, it gets more challenging because you're, you're modeling a part of the UI interaction that hasn't been done the client before where the user is coming back to the same session, that's when we're dealing with state. The second kind of challenging issue that is being talked about right now is server driven UI, is it one design language, it's really what the UI design language means to us. So getting Ryan and Sherman to agree on one language to describe UI, then getting them to do it across platforms, then getting them to do it across features. Getting one version of Netflix, for example, in Server driven UI is impossible, because you'll never get engineers even to agree on tabs versus spaces. Are you going to get them to agree what an initial look like,

</p>
<p><strong>Ryan Burgess</strong><br />
all the meetings to like Jemini are going to be in those meetings trying to discuss and figure this out for like other teams. And partnering with teams is like, Well, you gotta agree on this. And like, there's so much complexity, and that just the handoff, there's no coding right there that is just like, literally conversations about how to do that.

</p>
<p><strong>Cole Turner</strong><br />
And it will say, like, the biggest problem I see is everybody wants to run a marathon, the game, nobody wants to do anything incremental, or build on top of what they already have. Everybody always wants to design a full language, DSL, and that takes time

</p>
<p><strong>Jem Young</strong><br />
and a lot of investment. It's a build on my experience with server driven UI, it comes down to to build something from scratch, you have to first invent the universe. And coming back to the server driven UI, like we forget the stuff that like sure we're just talking about like routing, or service day things that are very solve problems you have to read, you'd like essentially reinvent those problems that you have to solve them universally across every platform or what's going to be supported by that. So if you're new I that's always underestimated that complexity of engineering. And then like almost saying, trying to get people to agree on one unified solution, even though it looks foreign to to whatever native platform like if you're a React developer, it's gonna look weird if you're a Kotlin developer, it's gonna look weird. So try to get like these disparate viewpoints to align on one thing is incredibly challenged. And it's it's funny, I hate to say like, sound like manager, but all these things like boil down to organizational problems and not necessarily engineering. hours. And like I really hate saying that. But it's true. A lot of servitor UI that I've seen be successful or not successful is down to the organization, automation and leadership versus, oh, it's a really tough engineering problem. It is. But it's solvable, it's been done plenty of times. But getting that alignment takes a lot of work like you're alluding to, right. So the and Cole Cole kind of alluded to this as well, the failure that I've seen consistently is not scoping, your implementation down to saying like, this is what it is, and this is what it's not all because, like you said, you can grow it infinitely, because it's such a powerful tool. And once I think engineers grok on to that. They're like, Oh, I can do this, and this and build this. And it's like, a really tempting problem to go after versus someone saying, No, then this is what the boundaries are. And we're not going to exceed that. And again, that's an organizational problem, not an engineering one.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. So I mean, Jim, you and I need to take the blame on this one. As managers. That's our it's our fault. I'll always, but I think to what's interesting here, is that like, what you said, there, too, is like, it's almost like some really great advice is if you're going down the route of server driven UI. Actually, any technology is like setting the boundaries of like, well, why are we using this and being really upfront? Like, what are the benefits? What are we truly needing this for? And like, hold yourself accountable to not just shove everything in there, we've, we've made that mistake with so many things. Like it's not just server driven UI, you name it a framework, anything out there, we've made this mistake before,

</p>
<p><strong>Cole Turner</strong><br />
I feel like it often comes from boiling the ocean, right? Like this mistake you're talking about. It's like we're talking about doing too much too fast. With server driven UI, it's almost always better to start with just one step from where you are you move your contract to the server, describe your component in a contract and ship it. But if you spend all day designing the one perfect language, like John says, which often teams do, they never actually shipped to market, they never actually get one feature across platforms. And that's the problem is like, you actually have to ship something. So it's almost always better for one engineer to go and design something that at least works and prototype it. And then get that on one platform. Once it's on one platform, you shipped more than most server driven UI teams ever had. Right?

</p>
<p><strong>Ryan Burgess</strong><br />
So we never got to the to the goal, or the benefit that we had set out to do with like shipping to multiple platforms is what you're telling me cool.

</p>
<p><strong>Cole Turner</strong><br />
I mean, it depends on where you are like, I think in different companies, I've seen them combine multiple systems, I've seen different companies just say this is the system for the web, and this is an assistant for mobile, you got to find what works for you. As far as this kind

</p>
<p><strong>Sherman Chen</strong><br />
of sounds like that's the bell on a cat problem, you know, like automize scattering, they're like, Oh, that's a great idea to know, when a cat's coming, we'll just put a bell on it, and then we'll hear it coming and everyone's giving each other high fives always solve the problem, never gonna be hunted. Again, that didn't one most says, Wait a minute, who's putting the bell on the head in the first place. But I do really agree with COEs point which is, uh, one really powerful thing about SDU is that you don't need like wholesale adoption from scratch. You don't need to recreate the universe, you can definitely do a thing like, progressively make it part of your app for starter. You know, like we talked about how one of the more challenging parts is interactivity. So maybe let's not start with that. Let's start with just doing some views. You know, I think one case was my understanding. I think Lyft implemented SD UI in their mobile apps under a web app, religiously their app. Not that we're not not we're platform agnostic, supposedly. But the first use case they had wasn't necessarily an interactive one. It was just to display. Messaging, I think it was during COVID. They wanted to display safety banners. And, you know, they wanted to make sure they could get this across all their applications without going through a review cycle, because it's kind of like a public health emergency. So, you know, like, There's definitely times to just incrementally adopted versus trying to just recreate an entire new feature or recreate your entire house with an SD UI problem.

</p>
<p><strong>Cole Turner</strong><br />
I'm trying hard not to laugh, because it seems like STI is most successful with email. And that's kind of ironic.

</p>
<p><strong>Sherman Chen</strong><br />
You know, a lot of messaging. Yeah. I think a lot of folks I've talked to and broaching the topic of SDI. At some point the someone's going to chime in. Isn't this just HD GML pretty much. Yeah. Everything you're describing isn't the problem, like, this is just h, this literally HTML, you just want it in a phone. But

</p>
<p><strong>Ryan Burgess</strong><br />
I think also Sherman is I think it gets back to like, some of the goals or promises of it was that it was more like, no, it will write one UI and all the interactions, everything it will just be, and it will get delivered to all those devices, all those platforms without you having to really worry about it. You know, just write once and it works everywhere. You know, I think we've been promised that many times. And it's just not true. It's like, maybe 80% of it is like, right, once if you're lucky. But we all know that that last 20% is hard. It's not easy to do that. And I think that's the complexity that's coming along with St. UI is that it's it is complex. And it seems simple. You're just rendering HTML, have this. We've done this before. We were good at this. But it was overcomplicated to think that's like it was simple, but overly complicated. It's

</p>
<p><strong>Jem Young</strong><br />
like, I've been on this rant before. It's like design systems. design systems are great idea why instead of inventing 12 buttons, we have one unified way of presenting UI components across an order business, whatever it is, great idea. Why do design systems fail? organizational problem, like it takes discipline to like say, we're not going to build outside of these design, you're bound to these constraints, UI engineers, you're bound to use these components and not try to modify them for your face. Product Managers, you have to work within these constraints, like engineering, good engineering takes discipline. And that's something it's really hard to, to impart on people versus like, Oh, I see a really hard problem. Let's go solve it. That's how so like servers and UI design systems, they're kind of all the same. Bucket Of like, yeah, they're really good, really challenging and really powerful tools, with a really narrow scope. And like Sherman, and Cole already talked about, like, emails, good one pop ups that are such a great use of surgery. No, I really, Chris, it's a really well established pattern. The minute you step outside, that, it's, it's gonna cost you more and the power is there. But again, it's just going to take more discipline to say like, this is what we're going to do with this, what we're not going to do, I don't care who's listening, or like, no one's going to change my mind on that. And then it can be successful. But that's hard. That's really

</p>
<p><strong>Ryan Burgess</strong><br />
well, I think it's like, Jim, basically, what you're saying too, is like, it's like pick the tool for what it's good for kind of thing, right? Like, there is some value here. But I think we went overboard on doing that, like, if it is an interstitial, or email or message or whatever that may be. That's also something that you kind of just want to be consistent across all platforms as much as possible. And also, you know, hitting submit all that it should just be all kind of seamless. Like, if a user is jumping around between an android iphone and desktop, like, you kind of just want it to work for them very seamlessly. And so it makes sense. And I think it goes back to Jim, your point on the boundaries, like set those boundaries of like, why you're doing it, what's the, you know, why? What are you getting out of it, and then stop there, I love it. Any other things that were missing on benefits, like of via, you know, like, we obviously got the multiple devices and everything, but even are there certain use cases that were completely missing, that might still be very useful if you kind of set it in that boundary?

</p>
<p><strong>Sherman Chen</strong><br />
I think, and this is I'll call it a double edged sword. I think SDU is, at its best, is fostering collaboration between everyone on your team, everyone, I just mean your front end engineers, and your back end engineers. But I really mean like, your design partners product, even data science, because as you all work together to really understand the application, you want to build, ship track, measure a B test, the more you get together and like and map out what you want, like the less is lost and like the telephone conversation. Of course, that being said, when you get many people in a room, or a zoom call, like ideas just kind of start exploding. And suddenly, it's harder and harder for us to kind of like, focus on like, the original goal versus all these things that want to do, because it's awesome and shiny. But I think in my experience, one of the most fun parts times I had with the UI was actually just setting aside time to have like, a brainstorming session with my design partner. Because oftentimes, the design teams they love, they love what they do. They love building, great user marketing, building great user experiences, and I love like bringing that to life and making it a reality. But sometimes there are things they want, that I don't, I can't necessarily do, or there's a trade off like it will ship in time. And as the UI is great, because let's say it actually works, and we are working within the constraints that we set. Now, we don't have to, like try to do too much, we can agree on what we can do in this iteration. Let's deploy it. And then in the meantime, let's figure out the next enter iteration. And then the Holy Grail promise is that it's server driven. I can swap it out in anytime in the future. I don't have to have it immediately. So yeah, back to what Jim said, I think what gets lost is sounds like ambition. Ambition. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think it's even like, yeah, you do get ambitious, like even design systems. That one, like when Jim said, that doesn't, yeah, that's exactly it is everyone's like, well, we need everything like, you know, it's like, you could just start with that button. And like everyone agree like that, we should just have that consistency, and just start there. But I think it's like, everyone gets sold on like, the end state where you could just have everything just controlled so easily, what you might get there. But also, maybe don't try and get there like Don't Don't, don't push to do that right off the start and just get a taste of it. And also, it made me think when you said Zoom meeting Sherman, it also made me start to think Wait is this did it become even harder, like we've talked a lot about like being remote hybrid, you know, this is a new thing for a lot of companies dealing with. And one of these things that I've seen time and time, again, is sometimes that in person conversation can be very beneficial. When you're going through some of that like back and forth with a designer or a technical, another engineer, PM, whatever it is. And zoom calls do make it a little bit harder. It's the same thing as trying to go back and forth over slack. It's just hard. And so I think like, maybe we're losing some of that, too, it's actually getting it getting harder, because you have to have these conversations, and they are more effective. Maybe in person. I'm sure there's people who disagree, feel free to tweet at me and tell me that, but I have found that there's certain times that in person meetings will be more effective. It's not to say you can't achieve it, going back and forth on Slack or email or pull requests or in on a video, but I think it just loses some of that translation over to me, that's my rant about being like a remote and hybrid.

</p>
<p><strong>Cole Turner</strong><br />
No, I think you kind of hit the nail on the head, right? Like, server driven UI is hard. Engineering is hard. And to put server driven UI on top of engineering on top of remote work, you're communicating in a language that does not yet exist. And even get back end and UI to see the same data requirements without server driven UI is already challenging. And I think like, as much as I've seen, UI and back end, try to understand each other. When it comes to server driven UI. I'm of the opinion that the contracts need to be controlled by the UI. My perspective is when it comes to a successful server driven UI application. The backend folks provide data to fulfill the UI, but the UI is responsible for composing itself for understanding, does this data make sense in this context of this page? And I think what ends up happening is the relation get the relationship gets screwed up, because it often is seen as a equal dynamic, but it's not equal, because one person gets to throw data over the fence and the other person has to live with it. And so I think it's really important to get that relationship, right. Because to be successful at server driven UI, you're thinking about your application in terms of components, whether it's you, or data,

</p>
<p><strong>Sherman Chen</strong><br />
that's a interesting, what you're trying to say is kind of like before, it was like, Hey, I handled a client stuff. You had this kind of implicit trust in me. You handle the backend stuff, I have this implicit trust in you. I don't question how you're fetching that data or doing any of the other way downstream things, you know. But now, it's kind of like, on top of doing all that you're also kind of doing my job, too. And what am I left to do the is that we're just kind of like getting towards Yeah,

</p>
<p><strong>Cole Turner</strong><br />
I think there's often a tension there where the backend people think they're composing the UI, but they're actually in my opinion, just fulfilling it.

</p>
<p><strong>Sherman Chen</strong><br />
This is this is, I think I've said this at the start. I think that's when done poorly. It's what he was one of the backend engineer things UI engineering it.

</p>
<p><strong>Ryan Burgess</strong><br />
What's you're saying to Cole is really smart in the sense that it's also like, you're having to know more than you needed to know before in that contract. Like it's, and that's not a bad thing. There's times where I'm like, No, it's really good to know. You know, something on wherever that like. There's some blurriness of like, you want to know a little bit of what's happening on the other end. But you don't want to know every little detail and like a back end engineer doesn't want to know how every little myopic little interaction that happens on the UI. That's going on, they don't care. There's like, it looks good, it works great. You know, I don't care about how you're being performed and all those details, because that's a whole entire role. We should not think about every single detail. I mean, there's a lot of people out there, and probably a lot of our listeners who literally are just like full stack, they build client sites or whatever. And it's like, all in, that's fine. That's great. But there's also times when you need to have specialization. And so that's maybe why it's getting more complicated to with SDI, because there's not this nice divide. Yeah, you always have a little bit of blurriness. But there's not a nice divide at all. You're right.

</p>
<p><strong>Cole Turner</strong><br />
And I just want to be fair to our back end engineers for a minute has nothing to do with ability. It has everything to do with this is the area that I specialize in, I write this UI client, I understand the contracts that power it. And that's it. It's contracts based development, and whether you're doing server driven UI, or just regular Graph QL. Starting with a contract is a solid way to get something done. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
by no mines think that I'm good enough to be back in engineer cool. So that's like, I think it goes both ways. I'm like, Yeah, though, that's like I could do it. But it's not going to be at the level that I expect someone who specializes in it. Exactly. Maybe before we dive into pics, I would love to, you know, we've we've given some advice already for listeners. But like throughout this episode, I definitely has a lot of good ones. But what it's like a piece of advice that you would give someone who's thinking about leveraging SDI in the next project, or maybe it's their team is thinking about that. What's some advice that you would have? I

</p>
<p><strong>Sherman Chen</strong><br />
think I can say this, if you or your team is considering SD UI, because you think that it can replace the work of three, four engineers with one engine that is kind of like the completely wrong way to go about it. But if you are considering it, because you think it would unify your app experience across platforms, and really kind of get everyone to buy in on a way of building an application. It is worth like investing in. And it's one of those things where it's a it's like a snowball like it initially, it's really tiny. But as as it goes through time and more people buy in and work together, it will get bigger. So at the beginning it I think it's one of those things where it requires a lot of investment ahead of time before even writing a single piece of code. You know, before even figuring out names for your like your DSL your models, they get down not just with each like engineer, but what for your design team with your product and really like figure out what what like how we as an organization are going to do this, because it's not a magic bullet that was just going to solve everything. And freedom mobile developers from the app release cycle and review process. Yeah, that's like, the that's the one thing that I would say which Sherman

</p>
<p><strong>Ryan Burgess</strong><br />
maybe sorry, I know, I asked for everyone for advice on this. But I'm on the app lake side of publishing, like, you know, iOS and Android, they do have to go through reviews, like even if your Netflix or LinkedIn. If you're making changes, like there are reviewers on the apps like iOS and Apple side that's reviewing it. Is that totally true that you're getting completely bypass and you could just do whatever you want in the, you know, app stores with server driven UI? I think the answer is no. But you know, so it's like, that's even to another point, right? It's not completely server driven UI doesn't solve that problem.

</p>
<p><strong>Sherman Chen</strong><br />
Yeah, spot on. So I don't think there's a that's gonna get through that. And for good reason, you know, those policies are in place. Because at the end of the day, Apple and Google want to make sure there are users don't get taken advantage of by bad actors. On the flip side, you know, what server you server driven UI does help you as a company do is, effectively AB test your features in within your app, because now instead of waiting, or a user to just update the app version, you could just send a different response from your server. And if your layout has been implemented before, then it can shift and show different experiences. Is this kind of solves the problem of where like a web app, you're kind of forced to have the latest version at all times. And a mobile phone app. I pulled my iPhone, iPhone right now, I probably have a lot of very outdated apps. And I'm pretty sure those developers want me to press the install. What's it just

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good point, too. Yeah. So whereas like you don't have to worry about that. That is something that we didn't call out. So I like that you got to that as well. Any other advice that you all have coals Augustus gem that you would like to leave our listeners with? My

</p>
<p><strong>Jem Young</strong><br />
advice would be one listen this episode. And don't fall for the green dragon. I don't know how it may have served you I like served you I can be like as simple as complex. as you want it to be, it can describe an entire page or just a component on that page. But like Sharon was saying, You need to have that understanding upfront and say this was for this, what it's not for. There are really powerful use cases, for what served, you know, it does really well. But, and like, it's good to research that and have that knowledge going in, versus falling for the temptation of the engineering trap of, but we can rebuild, essentially build your own HTML, which is so tempting for really intelligent engineer that like nourishing them off of that, again, it just takes discipline. So my advice is, know what you're going into have these strong understandings about what you're going to do and what you're gonna do, I'll

</p>
<p><strong>Augustus Yuan</strong><br />
just reinforce something that was said earlier, which is like, if you are interested in doing it starting incrementally, and I, like, I think that's honestly, I will say that's true for majority of things. But you can't always have that, because of whatever product business reason, whatever. But if you can, I think starting small, and then working your way, towards what that end goal is, I think it's like, easy to say like, oh, yeah, this is gonna be amazing, it's good. It's gonna be needing to update billions of times a day. So that's why we want to do it in one place in one shot. And then yeah, dope, like, oh, actually, we only needed update this every few times a month. And it's like, you know, over engineered it for nothing, you know, right. There's like a few places in Twitch, where they use utilize what views for stuff, and that's fine. I honestly don't think they update that often, truthfully, in terms of design, and all that. And that isn't to say that it wasn't necessary. They had other reasons why they wanted to do it from a, from a team ownership perspective, like, hey, we, as a team, we have front end engineers, and back end engineers, and we want to own this component. You want it very standardized across everywhere, including the mobile and web. Everyone knows they're like, very good reasons. Why. And, you know, I think Sherman was kind of talking about it, like being allied with product designers and your stakeholders, like, that's such an important thing. But if you can't start small, so work your way there.

</p>
<p><strong>Sherman Chen</strong><br />
I think I know, like, maybe listeners might listen to this episode and think negative thoughts towards SDI. But I want to reinforce there are a lot of positives to it, and not even just from what it is as a as architecture pattern. Everyone, I kind of like the meta stuff it brings which going back is I think it's encouraging a lot of in fostering collaboration, especially up front. I don't think teams necessarily spend enough time just in planning phases before jumping into code, right. And one other thing is, I think it helps you really think about things outside of the immediate scope of your of your work, you know, like ever since we've kind of started doing things more st UI. I've started considering when building clients, not just how I'm going to build this for web, but what's the experience going to like in mobile, because I don't want to fall for the previous foot gun where we had segments and experiences because the way a mobile developer thought one thing was different than the way a web developer.so. Now it's really nice, because it elevates, helped me reinforces on where I realize I want my users how they access the experience to be the same no matter what platform they use. And I truly believe that statement, I need to commit myself to understanding how those platforms work as well, that I

</p>
<p><strong>Ryan Burgess</strong><br />
love that Sherman. That's so good. I think, though, what the takeaway there too, is, how do you foster more of that, right? Like, how do you foster more of the conversations and understanding on how like each of your applications behave? I don't think you necessarily have to go the SDI route, right? Like, it's like, how do we just do that more? And that might be the problem you're trying to solve, right? I think too often, as engineers, we're so guilty of this. It's like, oh, this will solve all of our problems. And we just kind of dive in. When it's like, wait, what problem are we trying to solve? And if you're like Surman that might be legitimately a problem is like our user experience is very fragmented, like between iOS and Android, that they're kind of similar. But web, it just feels so different. And it shouldn't. It's like, how do you foster that? Well, server driven UI could be an answer. But there's also like other ways, it's like, oh, well, we need to talk more. It's like, yeah, like start to do that. But I love that that kinda was a forcing factor. Like it just kind of organically that helped have more meaningful conversation. Yeah,

</p>
<p><strong>Sherman Chen</strong><br />
that and realizing there is a lot of limitations to just storing all your state inquiry perhaps.

</p>
<p><strong>Augustus Yuan</strong><br />
Do you don't do that is what you're saying.

</p>
<p><strong>Ryan Burgess</strong><br />
But there again, maybe maybe there's boundaries, right? Like, but then it's a slippery slope. I know how that boundary works, because it's like, well, it's just one word. pram. Like, just just one more, it's fine.

</p>
<p><strong>Cole Turner</strong><br />
It really is a slippery slope like I from hearing all of your advice, I feel like what I'm walking away with is if you asked me on the last episode, I would say, yeah, go do server driven UI. And I know we've talked about the negatives and the positives. And yes, it's easier to compose universal experiences across platforms. And it can help increase your time to market. But I think my advice changing on this episode is, don't do it. Most people listening, you probably don't need server driven UI. And it's not that it's too advanced, or it's too complex, it's probably just not a good fit for your use case. If you're not having the same problems, where, you know, start on one platform, start on iPhone, get it universal to Android, get that same design language working on both of those platforms. Do that before you bring in web do that before you bring in something else. Because as Ryan said, this problem is a slippery slope, because we're talking in abstracts about our applications in ways that we hadn't before. It's easy to just spiral out and just do nothing. And so don't said,

</p>
<p><strong>Ryan Burgess</strong><br />
All right. So calls advices. Don't do it. I love the app, because it was more positive coal. And like the couple years ago that the last episode, which is cool, I'm not hating on that call. It's like, that is actually a good thing to celebrate. It's like, you try something and you learn from it, and like to revisit and do that, I think is awesome. So yeah, it's not a shot at you for that. I think it's an awesome thing where it's like, wow, that I learned wasn't the right route for me.

</p>
<p><strong>Cole Turner</strong><br />
I I've been very bullish on server driven UI. And I still am to some degree, but I think just what I've seen in practice, everything that people have said today just happens everywhere. And it's not like HTML, it's not like JSX you, you don't just do it. Yeah, shipped something, build something and half the time, you will do it faster than if you do it in Server driven UI.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a great point. All right. Well, it's probably a good time for us to dive in to pics. I don't think server driven UI as a pic in this episode, but who knows, you know, you just never know we did lose jam. He just got back from vacation. So he told me he didn't have any pics to share. So you know, send him Valley silicon pics, he needs more to share with all of you. Cool, you want to start it off? Yes. My first

</p>
<p><strong>Cole Turner</strong><br />
pick for today is as somebody who struggles to do any kind of interior design, I need help. So I found this really cool website called Wall ism they do tailor made wallpaper and murals. And so behind me is a blank white wall. I hope by the next time we record it, it'll be a really nice Indigo ocean blue mural that is more interesting. And that is my only pick for today.

</p>
<p><strong>Ryan Burgess</strong><br />
All right on I'm excited. See your new background. I think that will be really cool. That's cool that you can kind of just create your own to

</p>
<p><strong>Cole Turner</strong><br />
that you custom sizes to like you can print to your wall. Alright,

</p>
<p><strong>Ryan Burgess</strong><br />
that is actually that's pretty badass. Yeah, yeah. Oh, I wonder if there's a limit on the size now. I'm curious. But there's still still I'm sure most standard walls like they're probably targeting. That's pretty cool. Alright, Augustus, what do you have for us? Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
two picks. One somewhat related to the topic today. It's, well, I guess in general, Apollo Graph QL. Doc's, they have taken away the section for tech notes, which they just kind of at a high level talk about, like, different types of things. And server driven UI basics was one in that article, like, I recommend that but in that article, there's also like this discussion of demand oriented schema design, you know, when if you if you've ever done Graph QL like to get ones you have to be very mindful of how you design your schema. And especially like, you know, working on Twitch like microservices, you know, you might have taken ones or whatever you want to return, and then figuring out how that maps to Graph QL, then backs to clients is something you have to be have a lot of intentional thought about. And it some very many times, it really comes down to what is being populated on the UI. And so I thought it was a really great read of demand oriented schema design. My second pick is this app called POV dot camera. That's literally the website. The use case is the you know how like, there's like those disposable cameras where you take a picture and take it once and then you get a certain amount, and then you're done. Basically, someone made an app for it. I think what's really interesting about this app, the one meeting I frickin hate is makes every time someone has one of these apps, you have to go download the app. And I haven't figured out how to do it. But there's this QR code that when you go to an event, so I went to a wedding. Me scan it, and it literally took me I had to sign in with my Apple ID. But that was really the only thing and then it takes me straight into the app. Maybe it's progressive web app, I believe dug into it. That's probably what it is right? And it felt like such a seamless, like, Oh my God, thank goodness, I didn't have to download another dumb app just to like, you know, because you don't want to be that guy that says, hey, I loved your wedding but I didn't want to download the app. You know, you don't want to be that guy. But so yeah, I thought it was a cool.

</p>
<p><strong>Ryan Burgess</strong><br />
I figured that was the use case was the weddings like that's exactly where my head went. And you're right, it Gustus like that barrier to just download. I don't know, it's like, and I've been to a lot of weddings to where the, the internet's may be a little shoddy. And so like, if you just kind of get that bad spot. I mean, you might still have that with trying to hit the Progressive Web App. But like, it just feels a lot more seamless. I like that a lot. I also thought like, my prediction, I don't know, years ago, I don't know when it was, was that we would move away from apps a lot sooner. I know, there's a lot of reasons for some of the dedicated apps. But just having more web based things is just kind of Olivia kind of goes with this topic on server driven UI. So Gus, I love that you brought that up. That's cool. All right, Sherman, what do you have to share with our listeners?

</p>
<p><strong>Sherman Chen</strong><br />
Yeah, I think first off, I want to say a shout out to Augustus, for that I'm definitely stealing their recommendation because me and my wife Robin reception later this year, and that Whoa, that was not a thing that I was thinking about what am I guess what have good Wi Fi at the venue? So awesome. But yeah, for me, I have two picks, not related to today's conversation, but just general picks. One is there is a mini series out on HBO Max called The Sympathizer. It is a adaption of a book of the same name. And I would highly recommend it because it was one of the it is better books I've read recently, and the TV show so far has been great. And my second pick is all about show actually, it's as a British show, almost the equivalent of jeopardy, but very English and posh. It's called University Challenge. I was introduced to it by a friend of the pod, Tony Edwards. And I've been binging episodes while working in the background trying to keep up with these very, very, very smart kids that go into like Oxford or Cambridge. And yeah, we just saw the most recent season's finale together. It was great. I would recommend it if you enjoy trivia. That's almost Eurocentric, so maybe a bit more upscale. I don't know. But yeah, great stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I need more TV recommendations. So this is awesome. I appreciate that a lot. That's always good. I just have one pick for the episode. It was actually music related, which like I feel like because Stacey couldn't make it tonight, I almost have to like, you know, make up for her not being here. There's a new album, the hip hop artists classified released called Luke's view. He hasn't released anything in like four years. This is like someone I've listened to kind of growing up over the years. And so it's kind of cool to just keep following the music. Um, so I was excited to see him release a new one. It's been really good so far. I've listened to it a couple times. So yeah, check that one out. Sherman, thank you so much for joining us on this episode. I think it was such a cool way to revisit something that, you know, we talked about years ago as like it was a new trend and then us revisiting it as companies have adopted it. And so thank you so much for joining us and kind of sharing your thoughts on that. Where can people get in touch with you?

</p>
<p><strong>Sherman Chen</strong><br />
They follow me on Twitter or x underscore sure mango? Can't say that. I'm very active on that platform. If you'd like to, I don't know connect with me on LinkedIn and maybe that's the that was waiting

</p>
<p><strong>Augustus Yuan</strong><br />
for it. I was like it's gotta be called as he's gotten

</p>
<p><strong>Sherman Chen</strong><br />
I'll probably I've done definitely respond quicker on that one because I am pretty much on it. 24/7 That's

</p>
<p><strong>Ryan Burgess</strong><br />
awesome. Well, thank you so much for joining us. It was awesome having you on if people want to find us, you know kind of how to find us on whatever you like to listen to podcasts on. We are on YouTube. Definitely doing more video like we said this year. It's been fun doing more of that. You can find us on Twitter. I don't think it's called X I'm pretty sure it's still Twitter.

</p>
<p><strong>Augustus Yuan</strong><br />
Ah ah,

</p>
<p><strong>Ryan Burgess</strong><br />
any last words you all play content morning.

</p>
<p><strong>Sherman Chen</strong><br />
If you if you ever wanted to be a social media influencer, that should be your gateway. Okay.

</p>
<p><strong>Cole Turner</strong><br />
Is the game yeah it's it's a game like what's the other one but dangerous game the backroom

</p>
<p><strong>Sherman Chen</strong><br />
lethal company? Yeah. Yeah.

</p>
<p><strong>Cole Turner</strong><br />
So it's basically it's four of you, you go down into a dungeon and you film each other getting scared the shit out of with monsters and it's honestly like paranormal activity but like Co Op.

</p>
<p><strong>Augustus Yuan</strong><br />
It's scary. Actually, that

</p>
<p><strong>Ryan Burgess</strong><br />
sounds interesting. Yeah.

</p>
<p><strong>Sherman Chen</strong><br />
It's great because it is a perfect example of what social media cloud is about risking your life for internet fame.

</p>
<p><strong>Ryan Burgess</strong><br />
15 minutes, man. That's all you gotta get 15 minutes of fame.

</p>
<p><strong>Cole Turner</strong><br />
It's funny, right? And when you were talking about your pick, I didn't Stacy. I remembered when Jim was talking about Stacy's music fix and he was like, Yeah, I'm playing some island. Funk. I don't want to say there's no thing because only Jim can do but

</p>
<p><strong>Ryan Burgess</strong><br />
oh yeah. Jim did a good job of like describing she always has amazing descriptions of the songs. And I don't know that classified would fit the that her descriptions of like maybe maybe she could do a good job of it. I'm not sure. But yeah, it's not technically the music that she would usually listen to but you know, it's a music

</p>
`;
        return transcript;
    };