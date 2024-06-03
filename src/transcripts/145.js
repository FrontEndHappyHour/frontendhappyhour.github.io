module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast, I thought I would share that at the end of February. We are also hitting six years of recording this podcast, which is pretty incredible feels like it's been a long time, but also kind of feels like it's flown by. So I just want to thank all of our listeners who've listened to us from early on. And also thank all the listeners who have recently started listening. It's been great having people listened to us and seen all the engagement that we have and the kind words that really keeps us going. So thank you. Hopefully, you got a chance to listen to our latest episode because it was one of our first interview series where we're interviewing the panelists going a little deep on our backgrounds and careers. We will continue doing more of those episodes throughout the year. In this episode, though, we are back on a tech topic. We are joined by Cole Turner, an engineer from Netflix, who has been on a couple episodes. I think this is his third episode joining us. In this episode, he's joining us to talk about server driven UI. Cole, can you give us a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?


<p><strong>Cole Turner</strong><br />
Hi, everyone. My name is Cole Turner. I'm an API engineer at Netflix where I work on Graph QL and server driven UI. My favorite Happy Hour beverage is anything with tequila or mezcal, the smokier, the better or the closer to the tequila, the better. Make it

</p>
<p><strong>Ryan Burgess</strong><br />
burn. Nice. And since you've last joined us, you've changed roles too. Because before you're a UI engineer, now API engineer,

</p>
<p><strong>Cole Turner</strong><br />
yeah, I'm crawling further and further up the stack now.

</p>
<p><strong>Ryan Burgess</strong><br />
Let's just be a great topic for it. Alright, well, let's also give introductions of the panelists. Stacy want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a senior front end engineer on Trello. Jem Young

</p>
<p><strong>Jem Young</strong><br />
engineering manager Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm an engineering manager at Netflix. In each episode, the front end happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And what did we decide today's keyword is backend back end? Back end? All right. Well, if we say the word back end, which I'm pretty sure with, you know, server driven UI, we're probably going to say it at least once. Ball take a drink? Well, let's let's hop in before we go deep on this episode, let's start by just level setting, what is server driven UI?

</p>
<p><strong>Cole Turner</strong><br />
Nobody knows, you know, you ask a front end engineer what server driven UI is, and they tell you something like a back end. Cheers, cheers. Cheers. Something like that will give you your UI as as contracts. If you ask somebody who is on that side of things on the server side, they will tell you that it is AI data models, like things that appear on the page. So it's very interesting, depending on who you ask,

</p>
<p><strong>Stacy London</strong><br />
How long has that been sort of a concept, or like something that's been talked about, like servo driven UI is is like a named thing. I feel like

</p>
<p><strong>Cole Turner</strong><br />
it's pretty recent, you know, I, you look at like traditional software development and UI engineers have been building their UI since the dawn of PHP and writing their templates, putting it together, owning the whole thing. But in recent time, you have a lot of interest, and almost like an emerging practice of people trying to slim down their UI clients, and send more and more of those responsibilities further upstream. So I feel like it's pretty recent, as of a few years,

</p>
<p><strong>Jem Young</strong><br />
I think the name, server driven UI is the newest incarnation. But we've been doing server driven UI for a while. We were joking about this before the episode started. But PHP, you could consider is that not server driven UI versus client driven UI, which is you send HTML, then we hydrate it later with data from the backend. That that's my kind of super naive take on it, but a Kol and Stacy can enlighten me.

</p>
<p><strong>Cole Turner</strong><br />
Yeah, I, I feel like it's a spectrum of practices, because like, it's really hard to nail down what is server driven UI as a as a set of implementation. But really, when you look at it from a method to logical standpoint, it's where UI applications, they're focusing on rendering logic rather than building up these monolithic applications. And then you move the remainder of that application somewhere else, whether it's a server or some other back end.

</p>
<p><strong>Jem Young</strong><br />
Cheers. Cheers. Cheers. So the modern what's the modern definition of it? I know you said it has a it's a it's a spectrum. But let's narrow that spectrum a little

</p>
<p><strong>Cole Turner</strong><br />
bit. My my personal belief on it because it's it really is hard to narrow down one specific definition. When you look at traditional model MVC model view controller architecture. We can think of server driven UI as moving the model and the controller to the server. And then the UI client becomes the view. And then all of that remaining logic is it's guaranteed by an API contract like Graph QL, which abstracts away the underlying model implementation. So you think about something like a card that appears on one page. In traditional UI development, that is, you know, it's a movie or a post or a book. But in a server driven UI world, that is just a card. And so it doesn't matter if it's a book, or an author or a movie. What matters is how it fits into that view. That to me is server driven UI.

</p>
<p><strong>Jem Young</strong><br />
Okay, so I guess, you know, I won't say explain it to me, like I'm five but explaining to me like I'm a manager and have zero engineering talent, anyone. Essentially, the fix the client is as simple as possible. There's no glue logic, there's no API logic, it's just exists to, it's just the rendering layer. Yeah,

</p>
<p><strong>Cole Turner</strong><br />
most people don't like this word. But it's a dumb client. It just says, Give me whatever you got. And I'll render it. And I'll make the most beautiful application I can out of the data that you give me,

</p>
<p><strong>Jem Young</strong><br />
the actual software word for that is thin client, that is a real term, Thin Client versus the client. It's a cycle, like all things in tech are. So in the beginning, we had, we had thick clients. So essentially, all of the application, all the logic is loaded onto is in the client. And of course, I'm talking about the pre web days. So this is the days when you had to download entire application. And then the web came along. And they were like, Hey, let's put the application on the server. And just make the UI just very simple. It just is a display for the application right on the server. And then as JavaScript nerds King came along, and said, Hey, why don't we put all the application back on the client, and we can build that up using web technologies. So now, here we are, again, talking about making the client very, very simple, known as the thin client, and putting all the rendering or putting all of the logic and the data and the API back on the server. Just Just so we're all clear, we're keeping score about what's happening here, just the cycle of tech continues. And I'm not talking modern server driven UI, I'm just calling out we've done this before.

</p>
<p><strong>Cole Turner</strong><br />
Yeah, it's it's almost a cycle in itself, because you look at traditional UI development. And now we're kind of beyond the traditional server UI development. A lot of companies have tried it. And there's some documentation and some practices out there. But we're reaching that cycle, where we're emerging from the traditions, and exploring how it can continue to, you know, get better and and try new things. And I feel like everybody's learning from what they first did. There's these, like you said, tech is cyclical. We have these reactions to how we're doing things from a year ago. And so we shoot off in the opposite direction. Maybe we like it, maybe we don't, but we find ourselves having this Groundhog Day of, of technology, and especially in JavaScript and modern UI development.

</p>
<p><strong>Ryan Burgess</strong><br />
Cole, you mentioned some of the companies that are doing it, Airbnb and Lyft. I feel like are ones that have kind of been known for it. I feel like Airbnb that was like they went big on doing server driven UI, especially for iOS and Android applications. And I think that that's one that's been a big driver for server driven UI is the mobile applications, you know, the benefits that you can get from updating the app on the mobile side. I always thought that was really where I gravitated to when I was thinking about server driven UI. Yeah, that's a really

</p>
<p><strong>Cole Turner</strong><br />
good point. And what kind of distinguishes it from this cycle is now server driven UI is focused on a cross platform approach to sharing, sharing model and controller logic. So for example, you have a website. Now you want to get that website and a mobile application, do you build up to different platforms, if they end up sharing a lot of the same functionality and product features? Something like server driven UI can give you leverage to deploy to multiple platforms and, and reach more customers? Potentially, this seems

</p>
<p><strong>Jem Young</strong><br />
so simple, like it, I have an application I want to build. But I don't want to hire a or I don't necessarily want to invest in a bunch of mobile engineers, a bunch of web engineers and a bunch of, say, TV engineers, this seems like a pretty straightforward thing that we would embrace. Why haven't we? I feel

</p>
<p><strong>Cole Turner</strong><br />
like that's like, that's such a hard question to answer because I can also ask like, why don't we just do web views everywhere? Why don't we just send HTML to mobile clients and part of me wishes that we did, because then my life would be easier. And I probably make more money being able to build for mobile. But I you look at what's possible and what's feasible, you know, React Native exists, and you can build an application that shares functionality between the web and mobile. But how do you think about performance, and especially when you're dealing with older devices, you could send them React Native, and you can share components, you can share styles. But I think the advantage to a server driven UI approach is, all of these companies are building up this cross platform stack, and as well as trying to reach millions upon billions of customers, when you're trying to have that market reach something like server driven UI gives you the ability to go back and update older applications to which, you know, it's a cost opportunity. But I feel like the reason why it's so heavily debated today is because various companies have tried it. And more or less, they didn't like the approach that they took. And so they're either walking it back, or they're doing their version two of server driven UI. I feel like it's in a way it's beyond the emerging practice. And it's this evolving practice that people are figuring out, you know, what is How do I look at this as a methodology? What are the different principles that I need to look at? To figure out how to build something that scales over time?

</p>
<p><strong>Ryan Burgess</strong><br />
Why is it such a heated debate? Almost like I feel like anytime this like server driven UI topic is brought up? should we or should we not do it? I feel like it causes a lot of back and forth. Maybe this is just me. But I feel like even when you read some articles, or even debates on our lovely Twitter is it's I feel like there's pretty strong opinions one way or the other. And has anyone else noticed that? Or is like, is there a reason for that

</p>
<p><strong>Jem Young</strong><br />
from a Jose gatekeeping. Because no one no one thinks of it like this. But as a UI engineer, I'm like, I should manage all this, because I should control this. This is my space. And it's weird to get, I won't say political, I don't know what the right term for it is. But it's where to get like, you want to cordon off all these areas, like back into, say, a back end, you should manage UI. That honestly seems to be like a lot of the debate that comes along, it takes people to let go their ego and be like, actually, this is more efficient way of building UI, that way, I can just focus on building this universal UI that works for all these clients, and the back end can be managed by someone else, and don't have to worry about that.

</p>
<p><strong>Cole Turner</strong><br />
Yeah, I feel like that is one of the biggest hold backs for most people to even come around to the ideas. Where does all of my, if I'm getting rid of all this, where does it go? Most people think, you know, I'm handing over all of that to another engineer, and they don't understand UI, so they're gonna, they're gonna figure it out, and they'll get whatever I can get. But when you look at the different model and controller logic, there's different ways to represent that in the backend. And so you know, who owns it is really up for debate. And I feel like the biggest challenge the reason why it's such a heated debate today, is because nobody's really talking to each other. There's this lack of empathy between front end and back end. Cheers. And that empathy is, is really just how do you get them to see eye to eye and get them to see what is it we're actually discussing? Like? What are the different things that make up server driven UI?

</p>
<p><strong>Ryan Burgess</strong><br />
That makes a lot of sense, like it honestly does. Like, I like the notion of like people having to give up a bit of control. That's hard. Like, that is a big thing. But I like what we're saying, too, is that people need to focus more on like what's best for the end result, right? Like what's best for the company or the application that you're building? And be thoughtful around that, which isn't always easy. Like I love that Jem mentioned the ego part, it's hard to really give that up. So that makes a ton of sense. When I think of server driven UI, what are some of the advantages that I would be like? Yes, we really need to do that, like we've mentioned a couple already. But it's a big overhaul. So I want to be considered of like, what would make a company you want to go all in on server driven UI,

</p>
<p><strong>Cole Turner</strong><br />
I think the biggest advantage that outweighs all of the disadvantages, all of the trade offs is that you make this large upfront investment in separating the thick client from sorry, the thin client from the thick back end. Cheers. And when you do that, eventually as you continue to innovate and evolve, you will increase velocity for experimentation for are increasing the surface area of changes that can be made without an application push. And if you're a company with a mobile application, that's huge, because for any change that you make, you're waiting three to four weeks for Apple or Google to review your change and approve it in the app store. You're waiting for that to be downloaded by users. And so if you're not making, like a design system change if your UI looks the same, but you want to, you know, maybe put a button here, move a screen over here, then you can actually do that without deploying a new application without waiting for users to download that. And that's, that's faster time to market. That's time that you will beat your competitors.

</p>
<p><strong>Stacy London</strong><br />
I guess you mentioned Yeah, like, faster time to market. But what about something like? Is there a user experience change? Like do? Do you guys, like render faster? Do his performance that consideration in why you might choose this? Yeah,

</p>
<p><strong>Cole Turner</strong><br />
totally. That's a great question. Because I, you want to benefit the user as well. And when you look at server driven UI, you know, your mileage may vary. But all of that logic that you're shedding from the UI, is stuff that you don't have to send down in a JavaScript bundle. So all of the form logic, all of the, you know, back and forth round trip data transformation, a ton of glue logic, that today just riddles every front end application, that stuff that you can abstract and make a contract. And so most of the time, your performance will improve, because that's just less things that you're sending down in your bundles. Would that

</p>
<p><strong>Ryan Burgess</strong><br />
be the same case, though, for mobile, right? Like because mobile, you've typically have a downloaded application on your mobile device, yes, it's still receiving data from the server. But now you're rendering a lot of that UI on the server. So I'm assuming you're, you're probably going to deal with some performance at that point,

</p>
<p><strong>Cole Turner</strong><br />
that's a good call out mobile, you know, it's an application that runs and you download it, and all of its available to you. I think the benefit for mobile is more on getting access to new features before everyone else. So if you're a mobile customer, and you're using a server driven UI application, you can leverage those new product features before another competitor who's not using server driven UI. And, you know, as a user, getting access to those features like that is the FOMO is real, like how I jumped on clubhouse immediately, just because everybody else was doing it. And so, you know, think about how much more clubhouse could have beat Twitter spaces, if they were using a server driven UI approach.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that a lot actually. Cool. That makes a ton of sense. And also, you're avoiding the fact of having to wait on your application to go through all the approvals and releases that you depend on both Android and iOS app stores. So that makes a ton of sense. And then also, you can release at the same time, like that's the beauty of it, too is Android and iOS are being released at the same time. So people are getting feature parity, you're not having to wait for oh, the Play Store released it are the latest feature. But iOS is lagging behind that. That's pretty cool, too. In that sense? Yeah,

</p>
<p><strong>Cole Turner</strong><br />
I think so it has a lot of benefits all around whether you're an user, or you're an engineer, or even a product manager. But it's not without its disadvantages, either. It's it's not a silver bullet or a cure all.

</p>
<p><strong>Jem Young</strong><br />
So I want to build a new application I wanted to work on will say, the web and my mobile app. I want to save resources be as efficient as possible. So I am making my UI, just the rendering layer. So essentially, I'm just serving templates. And the back end is the one hydrating those templates and sending them out and assembling them correctly today is that it's so far for server driven UI, like some of the benefits. Yeah, okay, I can see some downsides of this, like I am going back and forth, as we're discussing about like whether or not an implemented for whatever new app I'm going to build. The the benefits are exactly as you're describing. It's simpler. It's easier to reason about, you don't need a whole host of UI engineers on different platforms trying to reason with the back end. Cheers. Cheers. The downsides I'm seeing are part of that is the coordination tax. And that's anytime you have to get two engineers of different specialties to talk to each other. There is a coordination tax you're gonna pay versus say, if I wrote my entire application in PHP, I don't have to talk to anybody. I can just do it myself. I can ship the UI I can shut the server all in one. The other downside I can see and this is where I feel most companies run into the wall. is when I want to build a app or I want to build a platform specific feature. So I want to build something for my web client that the mobile app doesn't have the API access to. And so how do you deal with that? Is it just, you bloat your client a little bit and put that logic there? Or do you try to bake into the backend? Even though it's not applicable to, say, the other platforms chairs?

</p>
<p><strong>Cole Turner</strong><br />
That's a great question. Because it's, you know, it's not all stars and, and rainbows. It's, you know, there's disadvantages and trade offs. I, a lot of what you're describing is how you deal with cross platform concerns? And how do you enable a single platform to move in a different direction. And a large part of that has to do with the specificity of the contract that you're writing. If your server, you know, only has properties across all platforms, you'll miss out on an opportunity to leverage things that might be specific to iPhones or Androids, in which case, you need to find escape hatches and ways to drive that or insulate it. So the biggest challenge is, you build a feature on your, you know, one specific platform, and you're experimenting with that. But what happens when you want to extend that cross platform? Well, the way you can think about just making an escape hatch is, you know, sending down some sort of placeholder for this is what this functionality represents. So let's let's get a bit more practical. If we're talking about like new AR functionality, or whatever is hip these days, then sending down a placeholder that's like, here's the AR camera, then the individual platform can implement that, however, that makes sense for that platform. But the broad contract, the abstract view on top of that can be a little bit more generic and shared. But it kind of raises a bigger question is, you know, who should build the contract? I think one of the biggest disadvantages to server driven UI today is it's as it developed as an emerging practice, people thought, Okay, I'm just gonna throw this over to a server engineer, somebody who writes data models and will generate the view for me. But it begs the question, Why can't a front end engineer build the server driven UI? Back End? Cheers,

</p>
<p><strong>Ryan Burgess</strong><br />
cheers. That's actually a really good question called because yeah, we've we've always been thinking about it, I think it's been brought up a few times here is that it would affect the UI engineer not being able to write their work, but it could go the other way around is what you're saying is that the UI engineer could actually be writing some of the backend code. Cheers.

</p>
<p><strong>Cole Turner</strong><br />
Yeah, I feel like server driven UI challenges the notion of what is front end and what isn't front end. Because while I'm writing a thin rendering client, I could still write the API contract the schema that represents what the view is. And when we look at contracts, it's the things that are UI concerns. So I can write that I can hand it over for somebody else to write. I feel like, you know, stepping away from like, business and user experience for a second, that's the biggest disadvantage to server driven UI is it's so largely undefined about what exactly it is that people argue about who does what and where do they do it. But if you're looking at more practical disadvantages, I think the biggest thing is just what Jem pointed out earlier is how granular or how broad that API contract is the the schema for the view. In some cases, it can just feel too restrictive. And you know, if it's too granular, how do you add that individual platform concern? How do you add flexibility and escape hatches? Because at the end of the day, we don't want to reinvent HTML?

</p>
<p><strong>Jem Young</strong><br />
Or do we react native?

</p>
<p><strong>Ryan Burgess</strong><br />
React Native, we've done episodes on React Native, but yes, I wouldn't. This is not the same thing, though, that it is different. But I'm glad you're kind of calling that out, too.

</p>
<p><strong>Cole Turner</strong><br />
Yeah. There. You know, there's other differences between React Native and disadvantages that folks will want to consider is, you know, it works best when you're working with in a design system. So if you're dealing with components, it's very easy. If your UI is like very bespoke, and none of it looks the same, then server driven UI is probably not for you. And lastly, it's just it's a large upfront cost. You invest in a design system and a rendering engine. And, you know, for me, sometimes it's easier to just write some PHP and be done with it, go home and pet my dog.

</p>
<p><strong>Ryan Burgess</strong><br />
Cool. You mentioned the large upfront cost would it be I mean, you've mentioned a couple things like the contract and even understanding like who who's doing what and I think that to me, that spoke volumes for me is just thinking about that coordination tax between engineers is expensive. No, I think of server driven UI is, at the end of the day, one of the benefits is to move faster, you can iterate quickly, you know, you update the clients a lot faster, especially on iOS and Android, that seems beneficial. But if you are slowing down, trying to develop, that's just that that's probably the most expensive point, it's not so much about shipping a product, it's really about, like the actual development time, if there's a lot of back and forth, and I mean, like a week or two, that you you're not used to that can be really, really expensive. And then you're not really benefiting at the time, like how do you mitigate that? How do you even try and figure that out?

</p>
<p><strong>Cole Turner</strong><br />
Yeah, like you don't want to, you don't want to slow down development by have to spend time developing a contract or meeting in the middle, you don't want to continually establish that empathy between the front end and the back end. And so, in my opinion, that's where it moves beyond an emerging practice and needs to evolve. Because why does it have to be a server engineer and a front end engineer, you know, if you're a front end engineer, and you're writing the engine, and the render, then you don't need a back end person cheers, to tell you how to write your engine or how to write your rendering layer, in which case, that is the same, it is no delta between traditional UI development. On the other hand, where I think a lot of people get this methodology wrong is they put into practice that the front end now has to depend on someone else for the change. And so that is the operational tasks that you're you're describing Ryan, where you have to get back into a room and agree on every change, you have to wait for them to make that available to you. And I think that's where server driven UI has left a bad taste in some people's mouth, because it doesn't have to be that way. What is the third, fourth or fifth option that we haven't looked at?

</p>
<p><strong>Ryan Burgess</strong><br />
So cool, you'd mentioned a bit of a scenario where you wouldn't want to do server driven UI. Are there others that really stand out to all of you that like, let's just not even bother a server driven UI, that's not the right route, like what are some of those scenarios,

</p>
<p><strong>Cole Turner</strong><br />
I definitely don't want server driven UI on my DMV website. It's bad enough as it is all jokes aside, but you probably don't want server driven UI on like, things that are very self contained, and things that are componentized. So for example, on Netflix, we have a video player, and usually when we have a video player that just appears on a page, and you wouldn't want to instrument the whole video player in Server driven UI, because it's it's self contained, it's not something that can be broken out beyond that component level. And so you might just think of that as one component. On the other hand, you know, various experiences that can't make leverage of a design system, if you can't confine your UI into the bounds of a design system, then your mileage will vary. And you may or may not benefit from server driven UI,

</p>
<p><strong>Jem Young</strong><br />
I can think of a case where there are specific application requirements that need to leverage platform specific API's. So I can think of a good one like figma, figma, their client is written in WebAssembly. Because it's the most performant way of building that that sort of application. That's something that obviously wouldn't benefit from, I don't know, something like server driven UI, that's a very specific use case. cases were just born that like cases where it's, it's just a complex application where you don't necessarily know where you're going to build, you're just like, hey, let's get this beta out. But we know we're going to build on top of it, we're gonna we know we're going to build a very robust client with a lot of interactions, things like that. Probably not the best case there. For server driven UI.

</p>
<p><strong>Stacy London</strong><br />
Do you think that doing this kind of approach you almost requires that you have a lot of like, a large organization, a large amount of budget to go towards building something because it is quite custom, right? Like you, if you're a small company, you're trying to build something quickly? Like, are you going to be able to do all of this abstraction like having, because it's not like it's like, you can just go out and get something off the shelf to be like, I want server server driven UI framework dot j s, like there's no, there's no, you have to build it yourself, right? You're custom built things like Airbnb builds a custom thing. I'm sure Netflix is building like a custom thing. And acquires like, doesn't require like a huge amount of engineering investment.

</p>
<p><strong>Ryan Burgess</strong><br />
That's interesting. Like I would have thought, yes, like it does take some initial like planning and thinking around that, but in some ways, maybe having a smaller team, where you're a very small startup, I could see a lot of benefits to doing something in Server driven UI space in the sense that you can ship to both applications on the iOS and Android side, maybe even include your web application. And so you're writing a lot smaller and updating a lot faster. And to, you know, cold point on clubhouse, which I really love is that that essentially was a brand new application, you're wanting to ship really fast, I could maybe see some benefits of server driven UI in a smaller team. Maybe also, when you're building from scratch, right? Like, you're not taking a whole code base that's old, and that you're wanting to come back and like, hey, let's do server driven UI. Now, that would probably be a lot more expensive. But maybe from the get go, it's simpler, or I mean, not simpler. But that might be a way to go.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I was just, I mostly pulled that from like reading, you know, mediums, or Airbnb has written some medium blog posts about the server driven UI work that they've done. And just they've themselves have said, like, it's really complex, and they've had to spend a lot of time creating these schemas and, and frameworks that are, I think, kind of custom to their implementation. So it did sound like it was like a large, like engineering effort,

</p>
<p><strong>Cole Turner</strong><br />
I feel like we're describing what is like an inherent problem with software development. Like if you're at a small company, it's easy to move fast. If you're at a large company, there's a tax to getting people in the room and getting them to agree on something. And I really like Stacy's point because there is no off the shelf solution. You can't just integrate figma with some react library and ship it and call it a day, you're really developing a framework for how you build UIs as your application. So I feel like your mileage will vary. You know, if you're a small company, and there's a lot of reuse in your application from from interface to interface, then you will reap the advantages early on, and maybe something like clubhouse would have reached iOS and Android imparity a lot sooner, and maybe Twitter spaces wouldn't have beat them with the audience. But you know, we're here, and we're all on Twitter spaces now. And so I feel like the the real meat and potatoes of whether or not somebody should try it is kind of a decision making framework, you know, do you have a design system of components, if not, then you're probably going to spend more time designing the contracts for the UI, that you will actually reaping the benefits. However, if you do have components, and you know, there's not a lot of complicated business logic, then something like server driven UI can actually help you reach your market faster. Because you can build cross platform, you can abstract away the underlying implementation details. And that frees you up to get a lot done sooner. And some of the advantages that we described earlier is just the start. I think they're, you know, you go beyond that. And Jem Ryan, you both have been engineering managers, if you still are, you're running, you're running a team. And one of your concerns is how well can each one of my direct reports move from surface area to surface area. And if you're at a large company, that's that's very difficult, because there's just so much domain knowledge. But I really like one of the perspectives that Jordanna Kwok from Netflix shared with me, which is server driven UI allows your engineers to focus on what they do best, you know, building UIs. And what's nice about it is allows them to travel from domain to domain, and focus on those components versus having to build up deep domain knowledge about each aspect of your company. And that's pretty powerful.

</p>
<p><strong>Ryan Burgess</strong><br />
So cool, when you mean that it's even talking about not having to write three different languages if you're supporting web, iOS and Android, and actually, possibly even more languages, because we're just talking about the client, not the back end. Cheers. Yeah,

</p>
<p><strong>Cole Turner</strong><br />
I think it really allows engineers to specialize in what they do best. But you look at examples out there like Airbnb and Uber, who have since walked back or revisited their approaches. A large part of the problems that have been outlined are the approach not necessarily the practice or the implementation, but the approach towards getting people in a room and getting them to agree on contracts. So far, what I've heard the largest difficult part of implementing server driven UI is developing contracts that are too granular. It just limits them later. And so that's why they're walking it back. And it's also why I think more eyes and ears need to be on this so that we can figure out what are the best practices.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so we've talked about some of the advantages disadvantages. I mean, we recognize that a lot of technologies comes back to trade offs. We all know that. And there might be a lot of benefits to leveraging some sort of technology or approach. Say you have decided, this is the approach I'm going to take, we've highlighted, there's not really a great pattern or way of doing this, like, you're pretty much going to have to figure this out. What technologies do you need to build server driven UI? Wise?

</p>
<p><strong>Cole Turner</strong><br />
It's a great question. When I think about how to make server driven UI wise, more successful, my mind immediately jumps to Graph QL. Now, most people will say, you know, what's the benefit of Graph QL, if you're not getting that deep graph, but it gives you the safety of type checking, and a strong contract. And it's pretty powerful as a technology when you're powering it from the server, because you can actually introspect what the client is requesting. And why that matters is it gives you the leverage to send down what the client supports, which is crucial. If you're doing server driven UI, it's table stakes, because you want to see that the client can support whatever you're sending down. So Graph QL is powerful, because servers can actually see from the query what the client supports, and send down just the things that it needs, and avoid the things that it doesn't need. And this is powerful, because it allows you to update older clients, which I think is one of the biggest opportunity costs it you know, traditional UI clients, they're frozen in time you ship an iOS or an Android binary. And that's out there forever. So not only are you supporting that UI client, but you're supporting that API platform. And so that's where the power of Graph QL comes in.

</p>
<p><strong>Ryan Burgess</strong><br />
Also, cool, I think you just highlighted a great advantage for server driven UI just in itself, is we didn't really talk about the mobile binary applications that are sitting out there is if you are doing server driven UI, you're not really concerned about having to support some legacy application that's sitting out there, you are actually shipping, probably more closer to the latest and greatest features. I'm sure there's trade offs further as you go along, depending on the device set and everything. But that that's really a great advantage is that your you're just shipping the server driven UI, and everyone's getting the latest and greatest, there's not these version, you know, 2.3 that's parked and that we're, we still have to think about a little bit and people are stuck on that. So I really like that you call that 102? We didn't even really surface that in the advantages.

</p>
<p><strong>Cole Turner</strong><br />
Yeah, for me, it's it's an advantage. But it's an opportunity cost where you're paying that cost in automation and testing. And you're paying that cost by a marginal increase in complexity on the back end. Cheers, cheers. But I think that's a cost that's worth paying, because I it allows you to introspect what the client is requesting. And if it's if it once that video player component, if it's if it's asking for that contract, then your server knows that with a technology like Graph QL.

</p>
<p><strong>Stacy London</strong><br />
Alright, cool. You mentioned that the client with Graph QL has the ability to say, what it supports is that sort of like the client saying, like, I'm a browser, so then the server knows, oh, I can send this thing that a browser supports versus like an iOS client may not be able to support some things, and therefore it doesn't send that down. Is that kind of how it works?

</p>
<p><strong>Cole Turner</strong><br />
Yeah, that's just one of many variables that can be facilitated. So whether it's a browser or mobile device, and even more granular, like, what are the different components that this browser device supports? Or what if both a browser and a mobile client share similar components, but the TV doesn't, in which case having that deep introspection of Graph QL is pretty powerful. And then to even go beyond that, I think another it's not a technology, but an implementation detail. I think it's very powerful to have primitives. So in your server driven UI application, you'll have very expressive contracts, like this is a video player, or this is a list of movies. But you'll want more primitive contracts, like here's a web view, because if you have a really older client out there, you don't want it to be broken. In traditional UI development, we just we we kill that application, because we don't support that API platform anymore. But with server driven UI, you can actually send down a primitive component, like a web view or some sort of help screen and that allows you to at least either give it more helpful messaging, or even serve a web view experience. where you may not care about performance on that older device, because they're going to have a crappy experience anyways. And that's I think one of the more powerful opportunity costs is that flexibility between something like Graph QL, and primitives to help you reach those older devices,

</p>
<p><strong>Ryan Burgess</strong><br />
that's super interesting. I hadn't even really thought of like that depth to it. So thank you cool. Teams are bought in, they're like, yep, we want to do server driven UI, there's a lot of benefits for us. And I think the benefits for our, you know, application or business that we're driving. So what some advice that we should leave our listeners with, when they're thinking about diving into server driven UI,

</p>
<p><strong>Cole Turner</strong><br />
I think the first thing that needs to be done is take a step back and absorb all of the information out there, do a scorched earth approach, figure out what other companies are engineers have learned from, so that you're most informed in your approach. And then make sure that you're gathering everyone together, make sure that you have enough representation from your UI team. So the different client platforms like web, mobile, or even TV devices, and then make sure that there's a shared understanding and a shared vocabulary about what you're discussing, make sure that front ends and backends cheers are speaking the same language. And that way, the discussion is a little bit more productive. And you want to make sure that all that context is shared before you chart your course forward and implement.

</p>
<p><strong>Ryan Burgess</strong><br />
Well put, I think, anytime we talk about these things, I always think about it is it doesn't really matter, the approach that you should be thinking about, it's more what are the trade offs and really decide as a team or as a company? What is going to be best for what you're trying to achieve? And I think that that to me is you know, just really indicative what you just said cold, like, I think it's like really just take a step back and think about it. Yeah, I think

</p>
<p><strong>Stacy London</strong><br />
all of those really cover it, I think another thing to think about would be is your company willing to make this investment long term. So you're going to put a lot of like engineering effort into building out this as as a thing. And if you don't make sure you can have the money and time and dedication to maintain it to expand upon it. Because it's it's going to be something that you know, someone if you're hiring people, they're not going to come in with like, most people come in with React experience, or any no a framework or a library, like this is not something someone's going to be hired and know how to do so you're gonna have to take time to train them. So a lot of investment documentation, probably. So there's like, an investment, like, I guess, just make sure upfront that the your company's like willing to invest in this, not just up front, but for the long term as well.

</p>
<p><strong>Cole Turner</strong><br />
I like that. That's, I think, what sets teams up for success. And then once you're actually diving into the details, and you're figuring out your implementation, the tips that I would give is to start broad, and then move to a more middle ground approach. I think a lot of people find that they start with a really granular approach. And they almost try to recreate HTML and CSS. And they almost always regret it later. I haven't heard one case of it working out. And so taking a more moderate in the middle approach of describing your UI without the more granular details like CSS or styles, colors, etc. And then the second tip, I think it's really powerful to have a design system. So partnering closely with your design team. Figuring out the anatomical breakdown of your UI into components not only helps you build better contracts for server driven UI, but it also helps you establish a great partnership with design and product to be able to leverage what you've built in a way that evolves and makes it easier to use down the line.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Good advice. Thank you all for sharing. I think it's right great time for us to jump into pics. In each episode, the front end happier podcasts we'd like to share things that we found interesting want to share with all of you Stacy want to kick it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. Got to music picks. First one is called working title by Walton. I guess for genres it would be described as UK Garriage bass, grime techno kind of a mix of all those. It was the album that this was this track was a part of was written over three months in 2020. And it was described as it seeing him explore introspective soundscapes, rhythmically charged brakes and depth charged bass. So that's a good one to listen to as you go. And then the second one is everything. Bye Max Cooper, he just released this new track. And it was described as an excitable expression of freedom and joy and explosion of color referencing classic synth sounds from his formative years and the golden era of idealism and music and popular culture of the 80s and 90s. It's a feel good track.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome, Stacy, I love it. Alright, Jem, what pics do you have for us? For pics,

</p>
<p><strong>Jem Young</strong><br />
I have two picks today. The first one is dark pattern dot games. That one is pretty fun, because I'm sure you've all played free to play games, right? Or any sort of mobile game. They all have these patterns built into them to get you to either spend more time with the app spend more time sharing it with people or pretty much spending money. That's the core of it is either eyeballs via ad time or spending money. So there's all these dark patterns that are in games that once you read about them. You're like, Oh, crap, yeah, my favorite game that I really love and just happens to have like a countdown timer or something like that. It's actually a dark pattern to get me to spend money. And all these patterns that are built in the games, and they kind of ruin modern gaming on especially on mobile devices to the point where I just buy my games, if it's a good game, I just buy it. I don't want any pop ups or anything like that. And I bring this up, because one, it's a great site, dark pattern games, it's a lot of good reading. But Netflix just released Netflix games. And I promised this as an apply for Netflix games, just something I've noticed. Some of the games that are on there were clearly you know, probably former free to play games that no longer have the timers and all these things. And when you're playing the games, you feel the mechanics of these dark patterns that are no longer there, because they're not trying to monetize you because Netflix games are all free. But you feel how it's like fundamentally change the game design itself, to the point where you're like, Is this even a design to tell a good story or like be entertaining? Or is it just a long winded way of getting more money out of me. And a lot of modern mobile games are just long ways of getting money out of you. It's it's a little depressing, to be honest. But I think it's worth calling out that these patterns exist. And we could do probably a little bit better. My second pick, not necessarily tech related. It's something that came across on Hacker News. It's called the rule of 72. And it's a mental math shortcut to calculate the effects of growth over time. So for example, if you say, Hmm, if I get 6% interest rate on my money, how long does it take for my money to double? So using the rule of 70, or 7272 divided by six, at 6% interest rate, your money's gonna take roughly 12 years to double. And so you can do all these mental math calculations, which historically, compound interest is fairly difficult to think to calculate, at least for me, but using this really simple rule, I can start making assumptions about like, hey, if I pay off my mortgage here, instead of here, here's how much money it's gonna cost me in the long run here so much money I'm gonna save just a nice mental math rule if you're ever stuck on how to calculate things. Those are my picks.

</p>
<p><strong>Ryan Burgess</strong><br />
Cole, what do you have for us?

</p>
<p><strong>Cole Turner</strong><br />
My first pick is something I actually built. And I don't mean this to sound like an advertisement, it is actually captured my attention. And it is to do.com TUDU m.com It's Netflix's new companion site where you can go behind the scenes and see like inside looks on, you know, what was this actor thinking? Or how, what was the inspiration for inventing Anna? Or is Ozark? Is it really real? And I thought I was going to just casually browse it. But every time I'm wondering about a show now, that's my first source of information. Like I'll I used to always be on Reddit. But I learned about how you know, the different actors manage the accents and inventing piano or the drug cartel history behind Ozark. I just thought it was a really cool way to get obsessed without having to go in view a bunch of ads. And then my second pick is shaker and spoon. It's a subscription box that delivers craft cocktail ingredients and recipes. And if you're someone like me that doesn't know what to make as a drink. I really like it because it it'll give you really random ingredients like date syrup. I would never think to put a date syrup in a drink but it's it's delicious. And then my last pic I adding to the Silicon Valley picks is a introductory flight course. I didn't know this existed. But apparently if you go to a flight school and sign up for an introductory course, they will let you fly a plane, like in the air for half an hour to an hour. It's the most incredible thing I've ever done, it was given to me is a gift. But when I say it's, it's really a once in a lifetime experience, I really recommend it for anybody who wants to kick something off their bucket list.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I also love that you pick shaker and spoon because that is actually something cool gave me as a gift. And it is amazing. I mean, I love making cocktails. And you know, I have quite a few ingredients, usually kicking around to just to make cocktails. But I feel like just some of the ingredients I never would have even thought of, like you said your dates are. And it's it makes such great cocktails. And it's just really cool. I think it's a great gift. And it's a great like way if you're like wanting to experiment, just to get a pack and it sends you all that minus the alcohol. I mean, you saw after the alcohol, but that might even push you to go buy some of them if you don't have some of that on hand, which is kind of cool. So I like that pick. That's a good one. I have two picks for this episode. I have one is a brand new Netflix show called pieces of her. It's an interesting thriller that had just come out. I really enjoyed it burn through it really fast. I'm not going to say much about it. I just highly recommend going and checking it out. It's it's interesting. It was a really cool story. And then it's really funny Jem had picked games and and talked about the all the different advertising everything. It's really funny, it made me think of my second pick, was actually a iOS game that I've been playing with my son, which I don't typically play a lot of games anymore, especially on mobile or like an iPad. But he's been playing this game called skate city. And it reminds me a lot of the Tony Hawk skateboarding games. It's not exactly the same, but it's really cool. And like seeing him play that he's keeps telling me Dad, come play with me. And so I've actually really enjoyed it. So that's one I've even played on my own time when he's in bed. So it's been a fun one to play. Thank you, Cole, so much for coming. And joining us on your third time. You haven't been sick of us enough yet. So which is great. Thank you for sharing so many great insights on server driven UI. Where can people get in touch with you if they want to learn more about server driven UI?

</p>
<p><strong>Cole Turner</strong><br />
If you want to chat about server driven UI or just see copious pictures of my dog, you can follow me on Twitter at cole Turner. And I look forward to hearing from you.

</p>
<p><strong>Ryan Burgess</strong><br />
You do have a really cute dog. I mean, I think that's the only reason I follow you on Twitter. But you know, that's That's it.

</p>
<p><strong>Cole Turner</strong><br />
It's the only reason people talk to me anyway.

</p>
<p><strong>Ryan Burgess</strong><br />
Just kidding cold. No, you said really good tweets. I always enjoy them. Thank you all for listening. Today's episode, you can follow us on Twitter at front end H H. I don't think we have great dog pics. May we need to step up our game or maybe we'll share a colles dog at some point. Also, let us know what you think. Tell us what you think of server driven UI tweet out us like I said at front end. Ah. Any last words

</p>
<p><strong>Cole Turner</strong><br />
back end. Cheers.

</p>
<p><strong>All</strong><br />
Cheers.
</p>
`;
        return transcript;
    };