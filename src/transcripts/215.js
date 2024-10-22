module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Today, we're revisiting a conversation we had earlier this year on server driven UI. I want to go back to this conversation, because I think it's so important to hear engineers at large companies revisiting a technology decision they've made in the past and trying to see if it was actually the right decision. And what are some of the things that they're starting to see after a couple years of doing this in the tech world, we're so guilty about going after the new shiny thing, or what's that latest and greatest framework, we should start leveraging that today, but we never really go back and revisit these types of decisions. I think that we need to do this more often, and so this is exactly that type of conversation. So I think we should just dive in to really hear what some of these engineers are seeing after implementing server driven UI. I mean, it's been a while since we've talked about this topic. So it was, I like that Cole brought this one up because it has been a while. And I think Cole, this is the last time we spoke about this was when you were like a guest. Were you not like? It was kind of like your guest, and then you joined the panel. Yeah,


<p><strong>Cole Turner</strong><br />
it seems like server driven UI just anchors me to this podcast. When I started, it was like, just learning about it, and now I'm just like, whoa.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, yeah, so as Cole just basically alluded to, is we are going to be talking about server driven UI, and we've given perspectives on this, yeah, probably about a year or two ago, like I lose track of time, so I can't remember. I should look up to see exactly which episode it was, but yeah, we did this talk, and I think it's worth revisiting. And to this time, we actually have Sherman Chen joining us, who's a senior software engineer at LinkedIn, which you're very familiar with, some server driven UI at LinkedIn. And I think this is a great topic for us to kind of discuss, and like, it's been around long enough, you know, anything with any trends that we see, it's cool when you actually revisit something that's now been around a while and see, like, is this actually working? Is it scaling? You know, is this still the right thing to be doing? Sherman's laughing, so I'm, like, really curious to know what's gonna happen now. But yeah, Sherman, before we dive in, can you give a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?

</p>
<p><strong>Sherman Chen</strong><br />
Yeah, everyone, thanks for having me. I'm Sherman. I'm currently a software engineer at LinkedIn. I work on the web platform linkedin.com and I think I spent most of my time working on something called LinkedIn pages. You can think of it as like a profile for a company versus an individual. And yeah, I think I try my best to make LinkedIn a good experience. User visit,

</p>
<p><strong>Ryan Burgess</strong><br />
I like that model. That's good. Keep making it great. Yeah, that's that's good, yeah.

</p>
<p><strong>Sherman Chen</strong><br />
And then my my favorite Happy Hour beverage, I am hopelessly addicted to Coke Zero. I think I Coke Zero.

</p>
<p><strong>Augustus Yuan</strong><br />
Okay, all right,

</p>
<p><strong>Ryan Burgess</strong><br />
I should let you finish that. How many do you drink a day? Sherman,

</p>
<p><strong>Sherman Chen</strong><br />
I'm trying to limit myself to two a day, which I've been somewhat good with. Today, I haven't drank any because it is, apparently it's national boba day. So actually, have me a milk tea. I

</p>
<p><strong>Ryan Burgess</strong><br />
wish I knew it was national boba day. That kind of feels like, I wish I had that gem. Do you know this? Feel like that's, you know

</p>
<p><strong>Jem Young</strong><br />
it, but I did have boba nice so, yes, I did do that. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
cool. It was planned. German

</p>
<p><strong>Cole Turner</strong><br />
texted me today.

</p>
<p><strong>Ryan Burgess</strong><br />
That's so good. All right. Well, let's also give introductions of today's panelists. Augustus, you want to start it off? Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
sure. Augustus, I'm a software engineer at Twitch.

</p>
<p><strong>Ryan Burgess</strong><br />
I do x now is what we're calling it Augustus. All right. All right, Cole.

</p>
<p><strong>Sherman Chen</strong><br />
My name is Cole.

</p>
<p><strong>Cole Turner</strong><br />
I'm a current software engineer at Netflix.

</p>
<p><strong>Jem Young</strong><br />
Jem Young in. Engineering manager at Netflix, and we are currently knee deep in s UI. So this should be a good topic.

</p>
<p><strong>Ryan Burgess</strong><br />
This will be a good one. And I'm the host of front end happy hour, Ryan Burgess. I'm also ex Netflix engineering manager there. I'll follow suit with Augustus intro. Let's dive in. You all a server driven UI. Maybe we should start, you know, maybe not everyone has listened to that first episode who would like to give a rough definition of what server driven UI actually is. And, you know, just to kind of get that level set before we dive in, I'm looking at Cole and Sherman for this one. I think they had their fair share of server driven UI. Oh,

</p>
<p><strong>Jem Young</strong><br />
Darren, you're saying engineering managers can explain surge of your How dare you? No, I

</p>
<p><strong>Ryan Burgess</strong><br />
already know this. You know, it's like, I feel like you and I can do the high level gem, like, we'll give the actually, maybe that's how you start is like, give the high level and then it's like the engineers will be like, well, you kind of messed these little details up. Or you should have talked about this too. You kind of missed that. So, you know, maybe I'm just going right to the source on this one gem.

</p>
<p><strong>Jem Young</strong><br />
Oh, no, you're 100% right. They are more qualified than me. I'm just saying I'm personally offended, but I'm

</p>
<p><strong>Ryan Burgess</strong><br />
with you on it. It's okay, Jem, you can hold that against me. You

</p>
<p><strong>Sherman Chen</strong><br />
know? What I can say is server driven UI if done wrong. What I've heard is, it is what UI development, or it is what a back end engineer thinks UI development is like, without ever having done UI development,

</p>
<p><strong>Cole Turner</strong><br />
all right, a lot, yeah, actually,

</p>
<p><strong>Ryan Burgess</strong><br />
even, even, like, you took the negative side on it. But I'm like, Okay, I'm following is that it's like, yeah, if you were explaining how something's rendered to, you know, a back end engineer, that's probably a good way to, like, simplify it is that kind of where you're getting that call too, of a saying, Yeah, I actually

</p>
<p><strong>Cole Turner</strong><br />
really like this definition as somebody who has shifted from front end to back end, back to front end. When I think about UI development as a back end engineer, you're often thinking about contracts and what the contracts look like for UI, and it's scary.

</p>
<p><strong>Ryan Burgess</strong><br />
So it's UI rendered on the server. And yes, I think that's that's a good start. I like that now.

</p>
<p><strong>Jem Young</strong><br />
What that was pretty vague, UI rendered on a server that doesn't that's fair and wavy for me and very misunderstood, especially

</p>
<p><strong>Cole Turner</strong><br />
on our second episode about SD UI. I feel like on our first episode, we kind of hand waved, but on this episode, down into it, like when you talk about server driven UI, you're always ending up talking about how you build UIs anyways, and it feels like, if you remember from last episode, Jem was talking about thick clients versus thin clients, and how it just always goes in circles. So now, thank

</p>
<p><strong>Ryan Burgess</strong><br />
you. Thank you for reminding me of that Cole like I've already forgot what we talked about. Thank you. Yeah. So

</p>
<p><strong>Cole Turner</strong><br />
now, I guess my question to folks in this room having been through this two or three times now, what have we learned since then? Like what we know it is, but what have we learned? I

</p>
<p><strong>Sherman Chen</strong><br />
think what I learned personally is that despite your best efforts, there is still going to be fragmentation. At the end of the day, each platform has its own core, respective way of doing things, and it's very hard to build this unify experience that's agnostic and supposedly adaptable to x platforms in the future, but as long as you approach it from kind of like an artist view and you work together. It's like a good way to start a conversation about how to build these nice UI experience without, like, kind of, like dropping coverage for one or the other platform.

</p>
<p><strong>Ryan Burgess</strong><br />
Maybe to even go back a little bit too, because I think, like, I like the question and the way you're answering, Sherman, but it made me also realizes, like, maybe what gem was getting as, like us defining it better. It's like, maybe even starting at, like, what are some of the benefits that you would want to go to, right? Like, starting back to, like, this was a year or two ago that we were talking about this is like, Why were people thinking, hey, server driven UI, this is a direction that we might want to go. Like, what are some of the benefits that you would get from endow to

</p>
<p><strong>Augustus Yuan</strong><br />
try to give my very bad depth. Yeah, I'll just, I'll just be straight up honest. I don't think I've done server driven UI to the degree that other folks have done it. So I would love if I could just try to give a definition to them. Someone could correct me, because, you know, everyone, the one thing is every company does things differently. So, yeah, my understanding with server driven UI is, you know, you think of that typical front end app react, however, because we're all front end happy hour, sure? Why? Not? Usually, the relationship is the client. React app is requesting data from somewhere for. Hand from that data on the client you're figuring out what to render. And my understanding of what server driven UI is is is, you know, there are a lot of use cases where it's better for the server to kind of make that determination. And it can be as like simple as it tells you what what the client should render, or or it could be even as extreme as the server literally just gives you the smack dab, hey, literally rendered this like, and I've seen like, different granularities of that. It could be like, here are the components and props, and they you just, you just literally shove it in and it'll and you. And in the app, you can imagine, in the front end app. It's like, literally, okay, I'll take this component name, I'll figure out what component to pull, and here are the props in this JSON object. I'll just shove them in a spread, JSON spread and call it a day. There's like, that granularity, there's like literally, like taking HTML and just slapping it in an iframe. That's like, more extreme, and does, does that sound right? And I my toy, no,

</p>
<p><strong>Ryan Burgess</strong><br />
I think you did a great job of thinking about ways in which you can do it, and just kind of the whole essence of, like, what you're trying to achieve with it. I don't know if there's anything else anyone want, else wants to add, but I thought that

</p>
<p><strong>Jem Young</strong><br />
was, Can I sort of, I'll take my manager explanation here as the least qualified person. So just like Augusta said in Traditionally, when you're building UI, the logic and the UI code are controlled by the client. So serger UI essentially saying, actually the server controls what, what UI is rendered. And that's like the short definition. What that means, traditionally, is when we when we build user interfaces, what we're trying to achieve, especially if you're talking about multi platform, so we're trying to achieve parity across all these so we have a consistent experience. So that means that could be across one platform, like a web it could be mobile, Android, whatever it is you're trying to build, you're always trying to build like this same experience for for everybody that that use your application, the promise of server driven UI is, well, instead of having a T Android or an Android engineer, an iOS engineer and three web engineers trying to build the same experience and trying to make make this parity, How about we have one unified way of describing UI on the server, and then it's up to each platform to interpret that into their own individual specifications. So that gives you the idea of like you can technically, universally scale any UI to any new platform by having like this one language to describe all these things. And the bonus you also get is you don't have to ship a new client when you want to change the UI, because it's all described on the on the back end. So on the web, not as big a deal, because we can ship stuff all the time. It's pretty much a new client on every load. But on mobile, you get a lot of power there, because you don't have to go through the Play Store and do the rigorous updates and all these things you can control, all that in the server. So that's like the theory and then the promise of server driven y, but the execution, it turns out to be very, very complicated. It's, it's what, it's a good idea, but it's, it's the details that that is why we get paid a lot of money to figure out these problems.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think, I think Jim, like, your ad on there, and like the selling point of like the mobile clients is a great example of that, and like, why it's so beneficial. But I think what we're all alluding to here is, like, that was the sell. Like, we're like, yeah, that sounds great. And that's something that likely would work, and we could definitely get leverage of doing this. Now what we're kind of recircling back to is like, yeah, what's we that was kind of the promise, but are we getting it? And kind of the answer is, like, it's complicated. It's more complicated than I think people thought. So I'm curious, like, especially for those who are a lot more familiar with it, you know, similar to gem, I was a manager through a lot of this, yeah, like, what was your experience like? What What was hard? What was like, things that you just didn't expect or account for?

</p>
<p><strong>Sherman Chen</strong><br />
I think one of the hardest things is trying to envision how a platform works from almost like an entirely, let's say like a text based approach, I'm sending you JSON, but this JSON has to represent not just the look of your app, but how users are actually going to interact with and eventually navigate throughout the application. So it gets hard to start trying to model actions when they're text based. And then, how do I store state? You know, like, because my servers are not at my UI, sent from the server like, I can't ideally I don't go back and ask for things, and ideally I never store state on a server. That's like, a big no no, right? So how do I start representing this state of my class? I when I only like make one initial trip to the server to get back. Supposedly this like holy grail of the layout, the actions and every day. I know one way that LinkedIn has been leveraging thing is kind of keeping a lot of state in query programs. It is a it's a challenge, but it's one thing that's kind of universal, in a sense that like, the way a URL is constructed is the same across a web browser, across a mobile phone, across the tablet, etc. And then from there, you can kind of figure out, hey, it's like, which page Am I navigating to? When that navigation happens. You know, how does my respective like, platform stack history work? If I need to show a widget or a component, I don't necessarily want to push a new frame on the stack, you know? How can I, like, demonstrate like, How can I keep track of that within each like client? So then maybe that's when a query problem would be leveraged. And then I think I probably most challenging is, how do I handle deep linking? Deep linking is I pitch its own challenge on its own. And then now, once I'm like, trying to integrate all this, like server driven UI, I don't know which, how exactly a user enters my application, and by the time to enter a specific view around what's available. Yes, I think this is my experience. Those are some of the more challenging problems. Sherman,

</p>
<p><strong>Ryan Burgess</strong><br />
I'm actually glad you brought up the query. Pram wrote it Augustus, it kind of made me remember a lot of things that we were doing at Evernote was doing not, not necessarily for server driven, but, I mean, a lot of it was a PHP application or a Java application, and that was a lot of the problem too, is we were trying to interact with different teams and platforms, and so sometimes it was very much. You could send a lot of the data and even signals to change the UI, in a sense, just through query prams. And it, it got complicated, though, like, I think that that's, you know, probably Sherman, you felt this too, is like simple when you're doing five, six things, and then you start adding more, and there's more complexity, and then each team has to understand those handoffs, and you know, there's all this documentation that comes along with it. It's not bad, but it just continues to get more complicated as it's trying to scale. That, to me, is like, it makes so much sense. I'm like, Yes, parameters that that's simple and that will be great. That's easy, but it's the scale part. Am I wrong? Like Sherman, is that, like, really, where it got to you all is like, just getting harder with has it scaled?

</p>
<p><strong>Sherman Chen</strong><br />
Oh, you know, I think my worst fear is that one day I somehow think of the exact same query param as an engineer on some entirely different team, and we both use it, and now the page has no idea what to show, because you can only have one map to a certain action, as far as I'm yeah, I'll

</p>
<p><strong>Ryan Burgess</strong><br />
take the last one, right? Like, it will take, like, if you have like, a equals one and a equals two, it's going to equal two. It's the last one that shows so, yeah, you're right. It's so funny hearing

</p>
<p><strong>Cole Turner</strong><br />
this, because what I'm hearing from Sherman, I hear from gem, from everyone, when it comes to server driven UI, the two kind of key parts where it becomes challenging is when you have to do anything interactive. If you're doing anything beyond just presenting to the user, it gets more challenging because you're you're modeling a part of the UI interaction that hasn't been done in the client before where the user is coming back to the same session, and that's when we're dealing with state. The second kind of challenging issue that is being talked about right now is server driven. UI isn't one design language. It's really what the UI design language means to you. So getting Ryan and Sherman to agree on one language to describe UI, then getting them to do it across platforms, then getting them to do it across features, getting one version of Netflix, for example, in Server driven, driven UI is impossible, because you'll never get engineers even to agree on tabs versus spaces. How are you going to get them to agree what an finisher look like? All the meetings

</p>
<p><strong>Ryan Burgess</strong><br />
too, like Jemini are going to be in those meetings trying to discuss and figure this out for like, other teams, and partnering with teams is like, Well, you got to agree on this. And like, there's so much complexity in that, just the handoff, there's no coding right there. That is just, like, literally conversations about how to do that. I

</p>
<p><strong>Cole Turner</strong><br />
will say, like, the biggest problem I've seen is everybody wants to run into the gate. Nobody wants to do anything incremental or build on top of what they already have. Everybody always wants to design a full language, a full DSL, and that takes time and a lot of investment to

</p>
<p><strong>Jem Young</strong><br />
build on. My experience with server driven UI, it comes down to to. Build something from scratch. You have to first invent the universe. And I coming back to serve driven UI, like, we forget the stuff that, like shimmer, just talking about, like routing or server state, things that are very solved problems. You have to re you, like, essentially reinvent those problems, and you have to solve them universally across every platform, or what's going to be supported by serve driven UI. That's always underestimated, that complexity of engineering, and then, like Cole was saying, trying to get people to agree on one's unified solution, even though it looks foreign to whatever native platform like, if you're react developer, it's going to look weird. If you're a Kotlin developer, it's gonna look weird. So trying to get like, these disparate viewpoints to align on one thing is incredibly challenged, and it's, it's funny. I hate to say, like, sound like manager, but all these things, like, put it onto organizational problems and not necessarily engineering problems, and like, I really hate saying that, but it's true, a lot of server driven UI that I've seen be successful or not successful is down to the organization and communication and leadership versus, oh, it's a really tough engineering problem. It is, but it's solvable. It's been done plenty of times, but getting that alignment takes a lot of work, like you're alluding to Ryan so the and Cole, Cole kind of alluded to this as well. The failure that I've seen consistently is not scoping your server driven UI implementation down to saying, like, this is what it is, and this is what it's not, because, like you said, you can grow it infinitely, because it's such a powerful tool. And once I think engineers grock on to that, they're like, oh, I can do this and this and build this, and it's like a really tempting problem to go after, versus someone saying, No, this is what the boundaries are, and we're not going to exceed that. And again, that's an organizational problem, not an engineering one,

</p>
<p><strong>Ryan Burgess</strong><br />
I guess. I mean, Jem you and I need to take the blame on this one as managers. That's our it's our fault always. But I think too, what's interesting here is that, like, what you said there too, is, like, it's almost like some really great advice is, if you're going down the route of server driven UI, actually, any technology is like, setting the boundaries of like, what? Why are we using this and being really upfront, like, what are the benefits? What are we truly needing this for? And like, hold yourselves accountable to not just shove everything in there. We've we've made that mistake with so many things. Like, it's not just server driven, UI, you name it, a framework, anything out there. We've made this mistake before. I feel like

</p>
<p><strong>Cole Turner</strong><br />
it often comes from boiling the ocean, Ryan, like this mistake you're talking about. It's like we're talking about doing too much, too fast with server driven UI. It's almost always better to start with just one step from where you are. You move your contract to the server, describe your component in a contract and ship it. But if you spend all day designing the one perfect language like gem says, which often teams do, they never actually ship to market. They never actually get one feature across platforms. And that's the problem is like you actually have to ship something. So it's almost always better for one engineer to go and design something that at least works and prototype it and then get that on one platform. Once it's on one platform, you shipped more than most sugar driven UI teams ever had

</p>
<p><strong>Ryan Burgess</strong><br />
wait. So we never got to the to the goal or the benefit that we had set out to do of like, shipping to multiple platforms is what you're telling me, Cole I mean, it

</p>
<p><strong>Cole Turner</strong><br />
depends on where you are. Like, I think in different companies, I've seen them combine multiple systems. I've seen different companies just say, this is the system for the web, and this is an assistant for mobile. You got to find what works for you.

</p>
<p><strong>Sherman Chen</strong><br />
I This, I this kind of sounds like the bell on a cat problem. You know, we're like, all the mice scatter, and they're like, oh, there's a great idea to know when a cat's coming, we'll just put a bell on it, and then we'll hear it coming, and everyone's giving each other high fives. Oh, we've solved the problem. Never gonna be hunted again. Then in one mouse says, Wait a minute. Who's putting the bell on the head in the first place? But I do really agree with Cole's point, which is one really powerful thing about SD UI is that you don't need, like, wholesale adoption from scratch. You don't need to recreate the universe. You can definitely do a thinking like, progressively make it part of your app for starter. You know, like we talked about how one of the more challenging parts is interactivity. So maybe let's not start with that. Let's start with just doing some views. You know, I think one case was my understanding. I think Lyft implemented SD UI in their mobile apps and their web app, but let's just say their app not at. That network platform agnostic, explosively. But the first use case they had wasn't necessarily interactive one. It was just to display messaging. I think it was during covid. They wanted to display safety banners. And, you know, they wanted to make sure they could get this across all their applications without going to review cycle, because it's kind of like a public health emergency. So, you know, like, There's definitely times to just incrementally adopt it, versus trying to just recreate an entire new feature, or recreate your entire app of an sdui problem. I'm

</p>
<p><strong>Cole Turner</strong><br />
trying hard not to laugh, because it seems like SD WA is most successful with email, and that's kind of ironic.

</p>
<p><strong>Sherman Chen</strong><br />
You know, a lot of messaging, yeah, I think a lot of folks I've talked to and broaching the topic of SD UI, at some point the someone's going to chime in, isn't this just HTML,

</p>
<p><strong>Ryan Burgess</strong><br />
pretty much. I mean, yeah.

</p>
<p><strong>Sherman Chen</strong><br />
Like, everything you're describing isn't the problem. Like, this is just h. This is literally HTML. You just want it in a phone.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think also Sherman is, I think it gets back to, like, some of the goals or promises of it was that it was more like, no, we'll write one UI at all the interactions, everything, it will just be and it will get delivered to all those devices, all those platforms, without you having to really worry about it. You know, just write once, and it works everywhere. You know, I think we've been promised that many times, and it's, it's just not true. It's like, maybe 80% of it is like, right, once, if you're lucky, but we all know that that last 20% is hard. It's not easy to do that. And I think that's the complexity that's coming along with SD UI is that it's it is complex. It It seems simple. You're just rendering HTML. How this? We've done this before. We were good at this, but it was over complicated too. I think that's like it was simple but overly complicated. It's

</p>
<p><strong>Jem Young</strong><br />
like, I've been on this ramp before. It's like design systems. Design systems are a great idea. Why, instead of inventing 12 buttons, we have one unified way of present UI components across an org or business, whatever it is, great idea. Why do design systems fail. Organizational problem like, it takes discipline to, like, say, we're not going to build outside of these design you're bound to these constraints. UI engineers, you're bound to use these components and not try to modify them for your own base. Product Managers, you have to work within these constraints. Like, engineering, good engineering takes discipline, and that's something it's really hard to to impart on people, versus like, Oh, I see a really hard problem. Let's go solve it. So like, server driven UI design systems, they're kind of all the same to me, the same bucket of like, yeah. They're really good, really challenging and really powerful tools with a really narrow scope. And like, Sherman and Cole already talked about, like, uh, emails, good one pop ups intersect, great use of serve driven ROI, really crisp. It's a really well established pattern. The minute you step outside that it's it's going to cost you more, and the power is there. But again, it's just going to take more discipline to say, like, this is what we're going to do. This is what we're not going to do. I don't care who's listening or like, no one's going to change my mind on that. And then it can be successful. But that's hard. That's really hard.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think it's like, gem, basically, what you're saying too, is, like, it's like, pick the tool for what it's good for, kind of thing, right? Like, there is some value here, but I think we went overboard on doing that. Like, if it is an interstitial or email or message or whatever that may be. That's also something that you kind of just want to be consistent across all platforms as much as possible. And also, you know, hitting submit all that it should just be all kind of seamless, like if a user's jumping around between an Android, iPhone and desktop, like you kind of just want it to work for them very seamlessly. And so it makes sense. And I think it goes back to gem, your point on the boundaries, like, set those boundaries of, like, why you're doing it, what's the you know, why? What are you getting out of it? And then stop there. I love it. Any other things that we're missing on benefits, like, of, you know, like, we obviously got the multiple devices and everything. But even are there certain use cases that were completely missing that might still be very useful, if you kind of set it in that boundary,

</p>
<p><strong>Sherman Chen</strong><br />
I think, and this is, I'll call it a double edged sword. I think SD UI at its best is fostering collaboration between everyone on your team. And I know I just mean your front end engineers and your back end engineers, but I really mean like your design partners, product, even data science, because as you all work together to really understand the application you want to build, ship, track, measure, A, B, test. I. That the more you get together and like and map out what you want, like, the less is lost in, like, the telephone conversation. Of course, that being said, when you get many people in a room or a zoom call, like, ideas just kind of start exploding, and suddenly it's harder and harder for us to kind of like focus on, like the original goal versus all these things we want to do because it's awesome and shiny. But I think, in my experience, one of the more fun parts of times I had with CUI was actually just setting aside time to have, like, a brainstorming session with my design partner. Because oftentimes, like the design teams, they love they love what they do. They love building great user mocking, building great user experiences. And I love like bringing that to life, like making a reality. But sometimes there are things they want that I don't, I can't necessarily do, or there's a trade off, like it won't ship in time. And SD UI is great because, let's say it actually works, and we are working within the constraints that we set. Now we don't have to, like, try to do too much. We can agree on what we can do in this iteration. Let's deploy it, and then, in the meantime, let's figure out the next inner iteration, and then the and then the only girl promise is that it's server driven. I can swap it out in any time in the future. I don't have to have it immediately now. So, yeah, back to what gem said. I think what gets lost is I also sounds like ambition. Ambition goes back. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think it's even like, yeah, you do get ambitious. Like, even design systems that one. Like, when Jeb said that, I was like, Yeah, that's exactly. It is. Everyone's like, well, we need everything. Like, you know, it's like you could just start with that button and like, Everyone agree like that, we should just have that consistency and just start there. But I think it's like everyone gets sold on, like, the end state, where you could just have everything just controlled so easily, which you might get there. But also maybe don't try and get there, like, don't, don't, don't push to do that right off the start, and just get a taste of it. And also, it made me think, when you said, zoom, meeting Sherman, it also made me start to think, Wait, is this? Did it become even harder? Like, we've talked a lot about, like, being remote hybrid. You know, this is a new thing for a lot of companies dealing with and one of these things that I've seen time and time again is sometimes that in person, conversation can be very beneficial when you're going through some of that, like back and forth with the designer or a technical, another engineer, or PM, whatever it is. And zoom calls do make it a little bit harder. It's the same thing as trying to go back and forth over slack. It's just hard. And so I think, like, maybe we're losing some of that too. It's actually getting it getting harder, because you have to have these conversations, and they are more effective. Maybe in person. I'm sure there's people who disagree. Feel free to tweet at me and tell me that, but I have found that there's certain times that in person meetings will be more effective. It's not to say you can't achieve it going back and forth on Slack or email or pull requests or in on a video, but I think it just loses some of that translation over time. Oh, maybe that's my rant about being like remote and hybrid.

</p>
<p><strong>Cole Turner</strong><br />
No, I think you kind of hitting on the nail on the head, right? Like server driven UI is hard engineering is hard, and to put server driven UI on top of engineering, on top of remote work, you're communicating in a language that does not yet exist, and to even get back end and UI to see the same data requirements without server driven UI is already challenging, and I think, like as much as I've seen, UI and back end try to understand each other when it comes to server driven UI, I'm of the opinion that the contracts need to be controlled by the UI. My perspective is, when it comes to a successful server driven UI application, the back end folks provide data to fulfill the UI, but the UI is responsible for composing itself for understanding. Does this data make sense in this context of this page? And I think what ends up happening is the relation get. The relationship gets screwed up because it often is seen as a equal dynamic, but it's not equal because one person gets to throw data over the fence and the other person has to live with it. And so I think it's really important to get that relationship right, because to be successful at server driven UI, you're thinking about your application in terms of components, whether it's you or data

</p>
<p><strong>Sherman Chen</strong><br />
that's interesting. What you're trying to say is kind of like before it was like, Hey, I I handle the client stuff. You have this kind of implicit trust in me. You handle the back end stuff. I have this implicit trust in you. I don't question how you're fetching that data or doing any of the other downstream things, you know. But now it's kind of like, on top of doing all that, you're also kind of doing my job. To, and what am I left to do is that we're just kind of, like getting towards, yeah,

</p>
<p><strong>Cole Turner</strong><br />
I think there's often a tension there, where the back end people think they're composing the UI but they're actually, in my opinion, just fulfilling it. Ah,

</p>
<p><strong>Sherman Chen</strong><br />
this is, this is, I think I said this at the start, when done poorly, it's what UI engineer was, one of back end engineer things, UI engineering. It,

</p>
<p><strong>Ryan Burgess</strong><br />
which you're saying too Cole, is really smart in the sense that it's also like you're having to know more than you needed to know before in that contract. Like it's and that's not a bad thing. There's times where I'm like, No, it's really good to know you know, something on wherever that, like, there's some blurriness of, like, you want to know a little bit of what's happening on the other end, but you don't want to know every little detail. And, like, a back end engineer doesn't want to know how every little myopic, little interaction that happens on the UI that's going on. They don't care. There's like, it looks good, it works great. You know, I don't care about how you're being performant all those details, because that's a whole entire role. We should not think about any little detail. I mean, there's a lot of people out there, and probably a lot of our listeners who literally are just like, full stack, they build client sites or whatever, and it's like, all in, that's fine, that's great. But there's also times when you need to have specialization, and so that's maybe why it's getting more complicated, too, with SD UI, because there's not this nice divide. Yeah, you always have a little bit of blurriness, but there's not a nice divide at all. You're right. And

</p>
<p><strong>Cole Turner</strong><br />
I just want to be fair to our back end engineers for a minute. It has nothing to do with ability. It has everything to do with this is the area that I specialize in. I write this UI client. I understand the contracts that power it, and that's it. It's contracts based development, and whether you're doing server driven UI or just regular GraphQL, starting with a contract is a solid way to
get something done.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm by no minds think that I'm good enough to be back in engineer coal. So that's like, I think it goes both ways. I'm like, yeah, no, that's like, I could do it, but it's not going to be at the level that I expect someone who specializes in it exactly. Maybe before we dive into pics, I would love to you know, we've we've given some advice already for listeners, but like throughout this episode, I definitely there's a lot of good ones. But what it's like a piece of advice that you would give someone who's thinking about leveraging SD wa in the next project, or maybe it's their team is thinking about that. What's some advice that you would have? I

</p>
<p><strong>Sherman Chen</strong><br />
think I can say this if you or your team is considering sdui, because you think that it can replace the work of three, four engineers with one that is kind of like the completely wrong way to go about it. But if you are considering it, because you think it would unify your app experience across platforms and really kind of get everyone to buy in on a way of building an application, it is worth, like investing in. And it's one of those things where it's a it's like a snowball, like, initially it's really tiny, but as as it goes through time and more people buy in and work together, it'll get bigger. So at the beginning, I think it's one of those things where it requires a lot of investment ahead of time, before even writing a single piece of code, you know, before even figuring out names for your like, your DSL, your models. Sit down, not just with each like engineer, but with your design team, with your product and really, like, figure out what, what like, how we as an organization are going to do this, because it's not a magic bullet that was just going to solve everything and freedom mobile developers from the app release cyclone review process. Yeah, that's like, as the I think that's the one thing I would say, which Sherman

</p>
<p><strong>Ryan Burgess</strong><br />
maybe, sorry. I know I asked for everyone for advice on this, but I'm on the app, like, side of publishing, like, you know, iOS and Android, they do have to go through reviews. Like, even if you're Netflix or LinkedIn, if you're making changes, like, there are reviewers on the apps like iOS and Apple side that's reviewing it is that totally true, that you're getting completely bypassed and you could just do whatever you want in the, you know, app stores with server driven UI? I think the answer is no, but, you know, so it's like, that's even to another point, right? It's not completely server driven. UI doesn't solve that problem.

</p>
<p><strong>Sherman Chen</strong><br />
Yeah, yeah, spot on. So I don't think there's anything that's going to get through that. And for good reason, you know, those policies are in place because the other day, Apple and Google want to make sure their users don't get taken advantage of by bad actors. On the flip side, you know what server you server driven UI does help you as a company, do is effectively IAB test your features within your app, because now, instead of waiting for a user to it, just update. The app version, you could just send a different response from your server, and if your layout has been implemented before, then it can shift and show different experiences. This kind of solves the problem of or like a web app, you're kind of forced to have the latest version at all times. And a mobile phone, if I pulled my iPhone, iPhone right now, I probably have a lot of very outdated apps, and I'm pretty sure those developers want me to press the Install button. But I'm just

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good point too, yes, whereas, like, you don't have to worry about that, that is something that we didn't call out. So I like that you got to that as well any other advice that you all have called Augustus gem that you would like to leave our listeners with, my

</p>
<p><strong>Jem Young</strong><br />
advice would be one listen this episode and don't fall for the green dragon. I don't know, making that up of server driven UI. Like server driven UI can be like as simple, as complex as you want it to be. It can describe an entire page or just a component on that page. But like, Shrem was saying, You need to have that understanding up front and say, This is what it's for. This is what it's not for. There are really powerful use cases for what server driven, why does really well. But, and like, it's good to research that and have that knowledge going in, versus falling for the temptation of the engineering trap of but we can rebuild, essentially, build your own HTML, which is so tempting for for really intelligent engineering, and like pushing them off of that again, it just takes discipline. So my advice is, know what you're going into. Have have these strong understandings about what you're going to do and what you're not going to do. I'll

</p>
<p><strong>Augustus Yuan</strong><br />
just reinforce something that was said earlier, which is like, if you are interested in doing it, starting incrementally, and that, I like, I think that's honestly, I'll say that's true for majority of things, but you can't always have that because of whatever product business reason or whatever. But if you can, I think starting small and then working your way towards what that end goal is, I think it's like, easy to say, like, oh, yeah, this is going to be amazing. It's good. It's going to be needing to update billions of times a day. So that's why we want to do it in one place, in one shot, and then you end up like, oh, actually, we only needed to update this every few times a month. And it's like, you, you over engineered it for nothing, you know it right? There's, like, a few places in Twitch where they use, utilize web views for stuff, and I honestly don't think they update that often, truthfully in terms of design. And that isn't to say that it would, it wasn't necessary. They had other reasons why they wanted to do it, from a from a team ownership perspective, like, hey, we as a team. We have front end engineers and back end engineers. We want to own this component. We want it very standardized across everywhere, including the mobile and web. I feel like those are, like, very good reasons why. And you know, I think Sherman was kind of talking about it, like being aligned with product designers and your stakeholders. Like, that's such an important thing, but if you can't start small, so work your way there in a

</p>
<p><strong>Sherman Chen</strong><br />
I think I know, like, maybe listeners might listen to this episode and think negative thoughts towards SD UI, but I want to reinforce there are a lot of positives to it, and not even just From what it is as a as an architecture pattern, but I kind of like the meta stuff it brings, which, going back is, I think it's encouraging a lot of in fostering collaboration, especially upfront. I don't think teams necessarily spend enough time just in planning phases before jumping in the code, right. And one other thing is, I think it helps you really think about things outside of the immediate scope of your of your work, you know, like, ever since we've kind of started doing things more, SD UI, I've started considering when building clients, not just how I'm going to build this for web, but what's the experience going to look like in mobile, because I don't want to fall for the previous foot gun where we had fragmented experiences, because the way a mobile developer got one thing was different than the way a web developer thought. So now it's really nice, because it helped me reinforce this pattern where I realized I like my users, how they access the experience to be the same no matter what platform they use. And if I truly believe that statement, I need to commit myself to understanding how those platforms work as well that I

</p>
<p><strong>Ryan Burgess</strong><br />
love that Sherman, that's so good. I think, though, what the takeaway there too is, how do you foster more of that, right? Like, how do you foster more of the conversations and understanding on how, like, each of your applications behave. I don't think you necessarily have to go the SD, why route, right? Like, it's like, how do we just do that more? And that might be the problem you're trying to solve, right? I think too often as engineers, we're so guilty of this, it's like, oh, this will solve all of our problems. And we just kind of. Dive in when it's like, wait, what problem are we trying to solve? And if you're like, sermon, that might be legitimately a problem. Is, like, our user experience is very fragmented, like between iOS and Android, that they're kind of similar, but web, it just feels so different, and it shouldn't. It's like, how do you foster that? Well, server driven UI could be an answer. But there's also, like, other ways. It's like, oh, well, we need to talk more. It's like, yeah, like, start to do that. But I love that. That kind of was a forcing factor, like it just kind of organically that helped have more meaningful conversation. Yeah,

</p>
<p><strong>Sherman Chen</strong><br />
that and realizing there is a lot of limitations to just storing all your stating query paramps.

</p>
<p><strong>Augustus Yuan</strong><br />
You don't do that is what you're saying. But

</p>
<p><strong>Ryan Burgess</strong><br />
there again, maybe, maybe there's boundaries, right? Like, but then it's a slippery slope. I know how that boundary works, because it's like, well, it's just one word query pram, like, just, just one more. It's fine.

</p>
<p><strong>Cole Turner</strong><br />
It really is a slippery slope. Like, I from hearing all of your advice, I feel like what I'm walking away with is, if you asked me on the last episode, I would say, yeah, go do server driven UI. And I know we've talked about the negatives and the positives, and yes, it's easier to compose universal experiences across platforms, and it can help increase your time to market. But I think my advice changing on this episode is, don't do it most people listening. You probably don't need server driven UI. And it's not that it's too advanced or it's too complex. It's probably just not a good fit for your use case. If you're not having these same problems where, you know, start on one platform, start on iPhone, get it universal to Android, get that same design language working on both of those platforms. Do that before you bring in Web. Do that before you bring in something else. Because, as Ryan said, this problem is a slippery slope, because we're talking in abstracts about our applications in ways that we haven't before. It's easy to just spiral out and just do nothing and burn out. So don't do that.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. So Cole's advice is, don't do it. I love Yeah, because it was more positive coal and, like, the couple years ago that the last episode, which is cool. I'm not hating on that coal. It's like, that is actually a good thing to celebrate. It's like, you try something and you learn from it. And like to revisit and do that. I think is awesome. So, yeah, it's not a shot at you for that. I think it's an awesome thing where it's like, wow, that I learned wasn't the right route for me.

</p>
<p><strong>Cole Turner</strong><br />
I've been very bullish on server driven UI, and I still am, to some degree, but I think just what I've seen in practice, everything that people have said today, just happens everywhere, and it's not like HTML, it's not like JSX, you you don't just do it, so, yeah, something, build something, and half the time you'll do it faster than if you do it in Server driven UI.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a great point, all right. Well, it's probably a good time for us to dive in to picks. I don't think server driven UI is a pick in this episode, but who knows? You know, you just never know we did lose gem. He just got back from vacation, so he told me he didn't have any picks to share. So, you know, send him Valley silicon pics. He needs more to share with all of you. Cole you want to start it off? Yes, my first

</p>
<p><strong>Cole Turner</strong><br />
pick for today is as somebody who struggles to do any kind of interior design, I need help. So I found this really cool website called wallism. They do tailor made wallpaper and murals. And so behind me is a blank white wall. I hope by the next time we record, it'll be a really nice Indigo ocean blue mural that is more interesting, and that is my only pick for today. Right on. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
excited to see your new background. I think that will be really cool. That's cool that you can kind of just create your own too.

</p>
<p><strong>Cole Turner</strong><br />
They do custom sizes too, like you can print to your wall.

</p>
<p><strong>Ryan Burgess</strong><br />
That's all that is, actually, that's pretty badass. Absolutely, yeah, yeah. I wonder if there's a limit on the size. Now, I'm curious, but it's still, still, I'm sure most standard walls like they're probably targeting that's pretty cool. All right, Augustus, what do you have for

</p>
<p><strong>Augustus Yuan</strong><br />
us? Yeah, two picks, one somewhat related to the topic today. It's, well, I guess in general, Apollo GraphQL docs, they have kind of a section for technodes, which they just kind of had a high level talk about, like, different types of things, and server driven UI basics, was one in that article. Like, I recommend that. But in that article, there's also, like, this discussion of demand oriented schema design. You know when, if you, if you ever done Graph QL, like, you have to be very mindful of how you design your schema, and especially like, you know, working on Twitch, like microservices, you know, you might have whatever, whatever you want to return, and then figuring out how that maps to graph, QL and then backs to clients, is something you have to be have a lot of intentional thought about. And it. It some very many times. It really comes down to what is being populated on the UI. And so I thought it was a really great read of demand oriented schema design. My second pick is this app called POV dot camera that's literally the website. It the use case is, you know how, like, there's like, those disposable cameras, where you take a picture and take it wise, and then you get a certain amount, and then you're done. Basically, someone made an app for it. I think what's really interesting about this app, the one I think I freaking hate, is every time someone has one of these apps, you have to go download the app. And I haven't figured out how to do it, but there's this QR code that when you go to event. So I went to a wedding, I scan it, and it literally took me. I had to sign in with my Apple ID, but that was really the only thing, and then it takes me straight into the app. Maybe it's progressive web app. I haven't really dug into it. It's probably what it is, right? And it felt like such a seamless like, Oh my God, thank goodness I didn't have to download another dumb app just to like, you know, because you don't want to be that guy that says, hey, loved your wedding, but I, I didn't want to download the app, you know, you don't want to be that guy, but so, yeah, I thought it was a cool I

</p>
<p><strong>Ryan Burgess</strong><br />
figured that was the use case. Was the weddings. Like, that's exactly where my head went, and you're right, Augustus. Like, that barrier to just download, I don't know it's like, and I've been to a lot of weddings too, where the the internet's maybe a little shoddy, and so like, if you just kind of get that bad spot, I mean, you might still have that with trying to hit the progressive web app, but like, it just feels a lot more seamless. I like that a lot. I also thought, like my prediction, I don't know, years ago, I don't know when it was was that we would move away from apps a lot sooner. I know there's a lot of reasons for some of the dedicated apps, but just having more web based things is just kind of, I mean, it kind of goes with this topic on server driven UI, so Augustus, I love that you brought that up. That's cool. All right. Sherman, what do you have to share with our listeners?

</p>
<p><strong>Sherman Chen</strong><br />
Yeah, I think first off, I want to say a shout out to Augustus for that. I'm definitely stealing that recommendation because me and my wife were having a reception later this year, and that was not, that was not a thing that I was thinking about whether my guests would have good Wi Fi at the venue. So awesome. But yeah, for me, I have two picks not related to today's conversation, but just just general picks. One is there is a mini series out on HBO Max called The Sympathizer. It is a adaption of a book of the same name, and I would highly recommend it, because it was one of the either books I've read recently, and the TV show so far has been great. And my second pick is another show, actually. It is a British show, almost the equivalent of jeopardy, but very English and posh. It's called University Challenge. I was introduced to it by a friend of the pod, Tony Edwards, and I've been binging episodes while workings in the background, trying to keep up with these very, very, very smart kids that are going to like Oxford or Cambridge. And yeah, we just saw the most recent seasons of finale together. It was great. Would recommend it if you enjoy trivia that's almost Euro centric, so maybe a bit more upscale, I don't know, but yeah, great stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I need more TV recommendations. So this is awesome. I appreciate that a lot. That's always good. I just have one pick for the episode. It was actually music related, which, like, I feel like, because Stacy couldn't make it tonight, I almost have to, like, you know, make up for her not being here. There's a new album The hip hop artist classified released, called Luke's view. He hasn't released anything in like, four years. This is, like, someone I'd listen to kind of growing up over the years, and so it's kind of cool to just keep following the music. So I was excited to see him release a new one. It's been really good. So far, I've listened to it a couple times, so yeah, check that one out. Sherman, thank you so much for joining us on this episode. I think it was such a cool way to revisit something that, you know we talked about years ago as like it was a new trend, and then us revisiting it as companies have adopted it. And so thank you so much for joining us and kind of sharing your thoughts on that. Where can people get in touch with you?

</p>
<p><strong>Sherman Chen</strong><br />
They follow me on Twitter or x underscore shermango can't say that. I'm very active on that platform. If you'd like to, I don't know, connect with me on LinkedIn, the movie. That's the I was waiting for it.
 
I was like, it's gotta be called out.

</p>
<p><strong>Sherman Chen</strong><br />
Hey, I'll probably, I'll definitely respond quicker on that platform, because I am pretty much on it, 24/7, that's fair,

</p>
<p><strong>Ryan Burgess</strong><br />
awesome. Well, thank you so much for joining us. It was awesome having you on if people want to find us, you know kind of how to find us on whatever you like to listen to podcasts on we are on YouTube, definitely doing more video. Like we said this year, it's been fun doing more of that. You can find us on Twitter. It, I don't think it's called x. I'm pretty sure it's still Twitter front end. HH,

any last words, you all

</p>
<p><strong>Sherman Chen</strong><br />
play content warning. If you ever wanted to be a social media influencer, that should be your gateway. It's a

</p>
<p><strong>Cole Turner</strong><br />
game. Yeah, it's, it's a game, like, what's that other one? The Dangerous Game, the backroom,

</p>
<p><strong>Sherman Chen</strong><br />
lethal company, yeah,  
lethal cup, yeah.

</p>
<p><strong>Cole Turner</strong><br />
So it's basically, it's four of you, you go down into a dungeon, and you film each other getting scared the shit out of with monsters. And it's, honestly, it's like paranormal activity, but like Co Op.

</p>
<p><strong>Augustus Yuan</strong><br />
It's scary. Actually kind of sounds interesting. Yeah,

</p>
<p><strong>Sherman Chen</strong><br />
it's great because it is a perfect example of what social media clout is about, risking your life for internet fame.

</p>
<p><strong>Ryan Burgess</strong><br />
15 minutes man, that's all you got to get 15 minutes of fame.

</p>
<p><strong>Cole Turner</strong><br />
It's funny, Ryan, when you were talking about your pick and Stacy, I remembered when Jem was talking about Stacy's music pics, and he was like, Yeah, I'm playing some island fun. I don't want to say the whole thing, because only gem can do, but

</p>
<p><strong>Ryan Burgess</strong><br />
oh yeah, Jem did a good job of like, describing. She always has amazing descriptions of the songs, and I don't know that classified would fit the that her descriptions of like maybe, maybe she could do a good job of it, I'm not sure, but yeah, it's not technically the music that she would usually listen to. But in today's discussion, we reflected on the promises and the challenges that came along with server driven UI, while the idea of a unified UI experience across multiple platforms is so appealing. We've seen this time and time again for years. There's also a lot of complexity for the broader organization. We heard of really good examples, how large companies like Netflix and LinkedIn have been leveraging something like server driven UI to try and iterate faster get more consistency across their platforms. But we also learned that in reality, something like server driven UI requires a lot of discipline and coordination across a large set of engineers. It's not a silver bullet. Another thing we learned was that sometimes the simplest solution and starting small can actually help build a great foundation for iterating and learning faster. Ultimately, it's just about being more intentional about the tech that you're choosing for you, your project and your team, and really understanding how that will work in the short term versus the long term. And as always, thanks for listening. We can't wait to see you on the next episode for more deep discussions on technology like this one i.

</p>
`;
        return transcript;
    };