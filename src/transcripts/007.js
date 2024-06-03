module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the seventh episode of the front end, Happy Hour podcast. We have a very special guest today, a really good friend of mine and Derek's as well. genossen assumption Jennison is a digital accessibility lead at LinkedIn. So you can guess today's topic is all about accessibility. Jensen and I have known each other for years. We actually both moved to the Bay Area A few years ago from Toronto. It's great having a fellow Canadian on the podcast. genossen Can you give us a brief intro on yourself and let us know what is your favorite Happy Hour beverage?

</p>
<p><strong>Jennison Asuncion</strong><br />
I'll start with that first. I a big fan of the Dark and Stormy. Yeah. And and her sister the Moscow my

</p>
<p><strong>Ryan Burgess</strong><br />
new you would be Eric on the one. He's like similar. You're not choosy,

so much. Right. But they both have ginger beer as a base, which is a delicious drink. But yeah, so about a little about me. And while as you said, Ryan, we're both Canadian. And I come from Montreal and lived in Toronto for a long time. Been working in accessibility. Now since 2006. Full time. I did a little bit while I was a project manager in my job before that, but But yeah, I've been I was at the Royal Bank of Canada, working on an accessibility team there. Working a lot with designers and developers. And then I got the proverbial call, and stuff like that. Good times. So we just heard a buzzing. But yeah, I got the proverbial call. And here I am in the valley. I've been here for two and a half years and loving it. Been at LinkedIn, and been just enjoying my time. I've got four software engineers who are amazing who are working on various aspects of accessibility Android, iOS web stuff. So it's been a great, it's been a great one so far.

Awesome. So it's like pretty much your day to day is focusing on accessibility. Correct. Right. Before we get into starting let's go around the table and introduce the rest of the panelists. Derek Maisel started off

</p>
<p><strong>Derrick Showers</strong><br />
yes, I'm Derek, showers. I am from America, not Canada. Oh, you know, the home of the New America beer in case you know, but Vocalizer requests they renamed or fear America, you know, America. And I am a UI engineer, software engineer, one of those things here at LinkedIn,

</p>
<p><strong>Ryan Burgess</strong><br />
senior Junior, whatever Brian calls it.

</p>
<p><strong>Sarah Federman</strong><br />
Hi, I'm Sarah. I'm a UI engineer slash software engineer UI and front end person at LinkedIn. I'm from New York, upstate New York, which is basically Canada. Sounds like

</p>
<p><strong>Ryan Burgess</strong><br />
I've been I've always Canadian.

Right on, we've got like, half Canadian here. Like an hour away. Right. Awesome. That is very cool. I have been there. I used to go drink there when I was like it. Well, yeah. Because we don't have ridiculous 21 You know, adult age to drink. Yeah. And I'm Ryan Burgess. I'm a UI engineering manager at Netflix. So nice to be in pretty much get started. Before we start

</p>
<p><strong>Derrick Showers</strong><br />
though. I want to make an observation so that everyone knows that we for the first time in podcast history for front of happy hour anyway. Net or LinkedIn outnumbers Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow. Oh, that's actually pretty good. Yes. And we are also recording at LinkedIn. Very, very LinkedIn heavy today. That's awesome. Before we get started, what's today's keyword as we all like to, you know, front end, happy hour. We like to choose a keyword that every time it's mentioned, we're going to drink to it. What have we decided Today's word is? Keyword awesome. goes really well with accessibility. Perfect. So I guess start things off Jennison How did you first get into digital accessibility?

</p>
<p><strong>Jennison Asuncion</strong><br />
Actually, I want to turn the tables and find out first, first of all, about everyone here on the table. But your exposure to accessibility is

</p>
<p><strong>Derrick Showers</strong><br />
I'm friends with this guy. His name is Jennison No, but but before i i can honestly say that LinkedIn has been a huge eye opener in terms of accessibility. So I mean, I so I was previously at Apple and we did a lot of accessibility stuff. And I was doing the role that I was doing was more like bug fixing and stuff like that. So I really wasn't like learning Best Practice and stuff like that went into accessibility. And before that was an agency and quite honestly, they cared less and cared less about accessibility. So I think what about it's really refreshing? When I'm self taught, so okay, I didn't really, but, you know, I guess through I guess you could, you could still turn that to like, the resources that I used and stuff while I was teaching myself, didn't really come up all that much. But I think, you know, here is just definitely. And I think, you know, you and your team Jennison play, play a big part in like, just bringing the exposure to people here. I know, we asked about it during interview process. And so I guess pretty important, so awesome.

</p>
<p><strong>Sarah Federman</strong><br />
Sir, you said, Well, when I was interviewing, they told me about you. Yeah, so I've also mostly self taught, but I did take classes at school, and they never really went over it. My experience is, as you're learning, they kind of treat accessibility a bit like SEO, like they mentioned, things that you can do to make it better while you're learning other things. But yeah, it's not a focus, and then I'll go into it in depth.

</p>
<p><strong>Ryan Burgess</strong><br />
And actually, for me, it's funny, Derek said about agencies not caring about it, I actually started working at a lot of agencies that did a lot of government work. So I was exposed to accessibility really early on. And throughout my career, I've never really focused as being an accessibility expert or anything like that, but always been a very big advocate for it, just trying to anything that we can do to make it better for everyone. Basically, the web should be used by anyone. So anything that I've done, I've tried to like, learn. And there again, it didn't, it's not something that we learned in school, which is an interesting aspect, I love that you kind of brought that up Jennison, because I feel like now even more and more articles I see online are published on like how to write more accessible code. So hopefully schools nowadays are making a bigger point of accessibility, but I'm not quite sure it's part of a curriculum or anything.

Yeah, I think it's pretty rare that it will come up as a curriculum item. As a side thing. I'm involved in something called the Teach Access Project. And we are a bunch of tech companies and academic institutions and advocacy organizations. And we're actually looking at putting together curricula and things like that. So that accessibility is taught to cop psi engineering design and related fields. Now, we're not necessarily talking about in depth, but at least so there's a base knowledge of accessibility when people graduate from from schools that's also working on that now, we know it's an issue one, I

think, to me, it's just understanding, or at least thinking about it. So if you're, if your designer, your developer, you're actually just having that, in your back of mind, trying to think through that is like, pretty much a big win there. So if they're teaching that already, that's, that's awesome.

</p>
<p><strong>Derrick Showers</strong><br />
I think the more that it does get taught and the more awareness there is for it, the more the better that will be for for, you know, like, while you are at a maybe you are at an agency, like I was that, that puts less concern around it, like it gives you a little bit more of a foundation to stand on to, like, bring that up to, because a lot of time, it's probably gonna be you having to convince the client that you're working with, that's important, you know, and it's important to their business, like, usually, as a developer anyway, you don't take that role, that's usually right account manager, or something. So like, you have to really be that voice. So I think just having that awareness, and the real

</p>
<p><strong>Ryan Burgess</strong><br />
and the reality is from from the stuff I've heard, particularly with agencies, they're working with small to medium sized businesses. And, you know, when you talk to them about accessibility, that the company itself, then you're, that's the client probably doesn't have accessibility people on board. So they're like, well, more budget. So they're like, Well, you can do it, but then we can maintain it, and what if we want change stuff and things? So going? It's definitely an issue. One of my particular areas of interest, though, is making sure even the boot camps out there that that are, you know, turning out engineers slash web developers, that those folks are also like the General Assembly's of the world. And other boot camps are gonna start teaching accessibility. Some of them are already doing it. They'll touch upon it. But it's one of those skills. You're asking, I think around your original questions how I got into the field. Yeah, to me, I mean, it was just more. It was something that I wasn't planning to get into originally, I was doing more project management, stuff like that. But accessibility is one of those fields where in it, where you can actually have an impact on on people's lives. When you think about it. You know, there's more than 1 billion people with disabilities in this world with different disabilities, not just people who are blind but the full gambit of it and the fact that you can work on making sure that that 1 billion plus population base can have access to whatever you're building, I think that there's there's some value to that. It's it's one of those very unique career areas where you know that you're actually making an actual difference for people.

Because a good way to put it. So you're actually, yeah, you're making a difference in someone's life making it easier.

Or if you're not making stuff accessible, you're making it harder for them, right? I mean, anyone like, and just as a general statement, I mean, if you're not developing yourself to be accessible, deliberately, you could be, you know, depending on what you're working on, you could be making the difference between some of the disability being able to use a tool for work, for example. Yeah, I think I think a

</p>
<p><strong>Derrick Showers</strong><br />
good side note to that is, people I've heard people make a comparison. And I added it has probably too, especially when talking about going to clients and like getting budget for things, but they made the comparison to supporting older browsers so and, you know, because it's kind of like, this extra step that you may be able to get away with. But I think the difference is, and this goes back to your point is equal can, most people can upgrade their browser or choose a different browser or choose a different machine. Whereas you know, accessibility, I think is a little bit more important, because there's not necessarily an option, right.

</p>
<p><strong>Ryan Burgess</strong><br />
And I also remember seeing like statistic, I don't want to quote it, because I can't remember the exact percentage, but it was like some comparison to people using like, ie seven or IE eight, and it was like, there's a higher percentage of people that are actually using like assistive technologies for accessibility, or using the keyboard. Cheers. Yeah, so they're using that and that it's more important than some of the legacy browsers that we're trying to support. And I think a lot of companies are putting a lot of extra effort into supporting these browsers, when really, I think more importance should actually be put on accessibility. Yeah, I can't remember the exact percentage. But

</p>
<p><strong>Derrick Showers</strong><br />
I think the other thing too, and maybe we can get into talking about this a little bit more, but there's two different sides to accessibility when you're actually writing code. And that's like, you have one side that you just if you inherently know, and you write good semantics, and you you know, you know, basics about focus and like so that you don't want that focus, like blue outline and Chrome to you know, you want to go away Sure, you can do focus, none, you know, like, outline none. But I think just kind of knowing about that stuff prevents you from from making those decisions. So you can kind of do that while you're writing code. I think what what is frustrating sometimes I know from from as doing this stuff is there's sometimes, you know, like, when you're building for screen readers, for instance, things screaming, they're just not behaving the way that you want it to. And it's very frustrating, right? It's like, it's almost like that browser thing where you're trying to build for like seven or eight. And there's just no reason or rhyme or reason what's happening. So,

</p>
<p><strong>Ryan Burgess</strong><br />
but I would say just to that point, because we those of us who work in accessibility full time here that time and part of that part of the issue is, it has nothing to do with the work you folks are doing on the dev side, I've always said, you know, follow the standards, like Web Content Accessibility Guidelines, part of the responsibility lies on the assistive technology vendors, the screen reader, the people who actually build the screen readers, because there are set things with the guidelines, and there's best practices. And it's not your fault, if the screen reader that you're particularly testing on isn't doesn't act properly with it. So some of the some of the onus does lie on the manufacturers of the different assistive technologies to

</p>
<p><strong>Derrick Showers</strong><br />
Sue, I think, I guess my point is that, like, you can do simple things. And you guys talk about it, use simple things like use it use a button or a link where appropriate, you know, because you get so much use the need, oh, yes, you get all that stuff for free that you know, you don't have to worry about and going back and being frustrated by all the things that aren't working. One of

</p>
<p><strong>Ryan Burgess</strong><br />
my previous episodes is hating on the people who quit class equals button on a div like to use a is a button. Like that's so much

</p>
<p><strong>Derrick Showers</strong><br />
better. And a lot of things like if you just think about things, like if you just think about the site from the standpoint of a screen reader, it makes it easier. So because, like sometimes it's hard because I think a common one is oh, there's a button on the page. But that goes to a different page. It's not really a button. There's a link. Yeah. So it's just just because it's styled to look like something else in the Pages button. If you think about that, from the context of whether you can you can call it like just basic semantics, or you can talk or sometimes think it's easier to visualize, if you think of it as common sense.

</p>
<p><strong>Ryan Burgess</strong><br />
But just just talking about this whole thing, just maybe branching off a little bit. For sure. There was a great article that just came out in the last couple of days, and I recommend everyone listening. Use your favorite search engine to find it. It's on medium, and it's called danger testing accessibility with real people. And this article was written in response to another article meaning you can find out by looking at this Medium post. But essentially, it was talking about how important it is to use ARIA when required. So ARIA is Accessible Rich Internet Application. And that's for things that were native native components might not necessarily be the way you need to go like if you're using a tab control or something like that. But it's just what it talks about. There's just, you know, don't don't shy away from it, but use ARIA responsibly. That's important. Because sometimes the reverse can happen. Sometimes people are like, well, that's too much of a complicated interaction, let's make it easier so that screen reader users or keyboard only users can

keep going on to set it again. We kind of brought up ARIA there. And yeah, you know, not using it only when needed. Yeah.

Because it's been other times when people are using, like, label ARIA label by and other things where it's just not necessary. They should just use, like, use semantic markup and use the native elements.

Wasn't there? Like what's the number one rule about ARIA? Never use ARIA? Yeah, or don't use, don't use Arias like is basically to try and avoid using it unless you really have to.

And there's very specific use cases for it. It just it's the sexy thing. Everyone's just like, oh, yeah,

we'll apply Aria, now we're accessible. Yeah, done. One of the challenges

with ARIA is, it's not a visual thing that that folks who can see, can see unless you actually use a screen reader. And most people who are using screen readers who can't see don't necessarily have know how to use the screen reader properly. So they're just everyone. Everyone has good intentions, but then you've you've slapped on all this aria, you haven't necessarily used the screen reader properly to see how it is. You haven't tested it with an actual screen reader user, and you put it out in the wild, hoping that it was useful. But it wasn't you know, so you have to just be judicious when using reo.

</p>
<p><strong>Sarah Federman</strong><br />
Can you elaborate for some people who don't really know aria that? Sure? Absolutely. Now like, why don't we like ARIA? Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, well, I would say it's more to do with so what ARIA does just just so people are clear is in situations where it's not already natively exposed. Aria allows custom controls, and widgets to expose things like the name, role, state and value. And those are important when you're when you are using assistive technology like a screen reader, because the user will be moving around the screen. And they need to now like what like what is this this is a piece of text, or is this actually select interact with? So what are you does is it allows extra markup behind the scenes to like the, to communicate with the screen reader to say, this is going to be a tab panel, or this is going to be an accordion or something like that, and give that semantic information to the screen reader user. It doesn't have any change, like visually, you wouldn't even know. But it's it's more specifically for screen readers. And more. More recently, it's also helping people who use voice recognition software like Dragon Naturally Speaking, so people who can't use their hands at all. So it's not only good for people who are using screen meters. So there's a lot of stuff out there on Aria. But that's the high level. That's what it is. It's just a set of specifications that allow you to markup naval states.

Those objects, yeah, it's literally just added to your DOM element. So you're right, no one else visually sees any change in the markup, or mean, it's in the markup, but they don't visually see it on the page.

Because that's always the one thing as the person that accessibility, I have to tell you, the one thing we always want when working with anyone, we're always very careful, because we know that the visual look and feel that's a precious thing. That's an important thing. So you know, like this will not change the visual look and feel because we know that that gets people concerned, because you already have a limited amount of real estate on the screen. So if they hear well, by adding this, so you, you know, you quickly say, but this none of this will impact the visual economic. Okay.

That's a good thing. Yeah. All right. So another thing that I wanted to bring up early on, I think it's a good question for people that may see this, like on Twitter and things like that, is that accessibility is often references a one one why, why is that? And how do you actually pronounce that? genossen? What is the best possible way to pronounce that? And what does it mean?

So what it means so accessibility, the between the A and the Y, there's 11 letters, so to shorten it, it's a one a 11 y, and that's what they've been using on Twitter, for example, just to save real estate. Some people call it Ali or ally, but that's like to me anyway, It's like that's like nails on a chalkboard. It's a 11. Why is how you should pronounce it.

</p>
<p><strong>Derrick Showers</strong><br />
So it's Twitter. What was smart?

</p>
<p><strong>Ryan Burgess</strong><br />
I think, honestly, I

</p>
<p><strong>Derrick Showers</strong><br />
mean, that makes sense. I never thought about

</p>
<p><strong>Ryan Burgess</strong><br />
it. Yeah, I believe that's where it started.

I actually assumed that but you're right. I don't know for sure.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. Just make those like Elton and alternate for

</p>
<p><strong>Ryan Burgess</strong><br />
everyone finalization. So yeah, if and that's, by the way, that's a great if for people who are just getting into accessibility, if you're on Twitter, the 11 Why hashtag is like that's burning up always with accessibility stuff.

Like you're always tweeting on

</p>
<p><strong>Sarah Federman</strong><br />
something. Yeah. What's your Twitter handle? genossen?

</p>
<p><strong>Ryan Burgess</strong><br />
I know, he has this first name. Jelsa that? So why is it important for developers to care about accessibility? And how is it? How are they able to make sure that they're building accessible websites?

So I mean, the, from my perspective, I mean, if a developer cares about the quality of their code, and the integrity of their code, and if they if they care that everyone can use whatever they're building, then then accessibility should matter to them. Hope like full stop, right? There's nothing else to say on that. But it has to do with quality code, like writing good code, that semantic, that's clean, and that's accessible. And then knowing that you're you're building something, you're following best practices to make sure that anyone who picks it up, can can actually use what you built. I mean, why would you want Why would anyone want to build something deliberately, whether excluding people from using

one, I think that's a good point, and I've even seen where you were saying about, like, you know, using the proper code and writing clean code, and, and to me, that's very important. I care about that a lot. And it's funny, even sometimes in people's HTML. And I've seen this happen countless times on various companies, and, you know, projects that I've even been on is like, even something as simple as like heading structure where I've seen like, you know, you've got h1, h2, h3, h4, etc, for a reason. And I've even seen it where like, everything's an h1, or I've seen H ones and footers, which don't make a lot of sense, like, why are you using an h1, there should typically only be one h1 tag on a page that you're heading, and you've got your sub headings, it could be h2, etc, afterwards, but there's some just weird mistakes that people do. And they're styling them different. But it's like just use the proper semantic markup.

</p>
<p><strong>Derrick Showers</strong><br />
One trick, I think, is, is just take CSS out of the equation, you know, like, think about, like, think about what your markup looks like without CSS. And that's kind of what the screen reader sees. I mean, I think screen readers use CSS sometimes, like they ignore certain things like Who are they actually, I think they adhere to, like display on or whatever. But, but yeah, I mean, just take CSS out of equation and think about how it will look. And I think that answers the the example we talked about earlier with a Button Link thing, right? Like you wouldn't have took CSS out of equation. It's a link goes to every page. Exactly right. If you have a Oh H ones on the page, it will look

</p>
<p><strong>Ryan Burgess</strong><br />
washed. And if it was my point being like pissy about someone adding div class equals button, well, that without well without JavaScript, probably that they're targeting. But if you have just said, no JavaScript, no CSS, what does it click anywhere? But if it was an actual href? Well, yeah, no, it actually clicks to whatever it's supposed to go to. But away from

that stuff. I mean, also just things important things like color contrast, having sufficient foreground and background color contrast, there's enough tools out there on the market, that you can run your pages on to see. And if you know that you've if there's there strict ratios. And if if you knowingly put something out there, knowing that it doesn't pass, like minimum sufficient foreground background color contrast, you're just shutting out people with low vision or color blind from reading stuff. So it's just about deliberate choices. And I get it that not devs particularly don't might not necessarily, like have a choice. Maybe they're maybe they're under tight deadlines and stuff like that. I get all that stuff. But at the end of the day, I mean, there's just some some fundamental things, like keyboard, for example.

He did not win on purpose. But, so but yeah, the contrasting though, yeah. Is that a developer's responsibility or a designer responsibility?

</p>
<p><strong>Sarah Federman</strong><br />
Shared responsibility? Thank

</p>
<p><strong>Ryan Burgess</strong><br />
you, sir.

I agree. I just wanted to add some controversy. To be a, you know,

I would always say like, I want to talk to my, to my developers, I've always said like, if you see that contrast is out, you know, sometimes sometimes they can sneak it and fix it. But sometimes they have to go to their designers and let them know what I

think that's okay. Yeah. To get more into that conversation. I've definitely worked with designers and said, Hey, we like bump up the contrast between these two components. And I think it was more explaining why I was getting at that is like, hey, look The contrast and I've even shared tools to help them see what I was getting at is that the colorblind people are definitely not able to see this, or even someone is hard have seen, you're not going to be able to see that color difference. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
think that the tools are important to mention, because as developers, we have tools that designers don't necessarily have. So I think that's where that

</p>
<p><strong>Ryan Burgess</strong><br />
the Chrome Accessibility extension is a good example. Because that exact talks about or that has color, yeah, there's a color contrast analyzer on that. So you can hover over a component, and you can do an audit on it, and it'll show you, it will actually show you what it would look like if you if you pump it

</p>
<p><strong>Sarah Federman</strong><br />
properly, it's good to just talk about it. I mean, because like a lot of designers just don't know, they don't teach it at all. They teach it even less than developers. And it mean sometimes it's not sexy, because you have these like tiny little Sans Serif fonts on like, light backgrounds. And it's a cute brand, but it just doesn't work for everybody.

</p>
<p><strong>Ryan Burgess</strong><br />
What I do designers like that, because I've seen that.

</p>
<p><strong>Sarah Federman</strong><br />
It's like, it's a trend. It's minimalistic, and I don't know, people like to do it.

</p>
<p><strong>Ryan Burgess</strong><br />
Fair enough. Yeah, I see it a lot. So it must look good. But yeah, to someone who is hard of seeing that is completely a hard thing to see. Like actually see,

</p>
<p><strong>Sarah Federman</strong><br />
yeah, if you're using a thin pot automatically reassess. Because there's light and then there's thin. So

</p>
<p><strong>Derrick Showers</strong><br />
I wanted to ask to you kind of brought up, you brought this up with contrast. And and we talked about keyboard just so I know, you know, I think the definition of accessibility should be making making your app or site accessible to everybody. Right. But that's a general definition. But is there anything else that I think people gravitate, we talked about this earlier, but people gravitate towards screen readers when you talk about accessibility? But what are some of the things is there anything else besides this three things contrast? The word we keyboard? Yeah. But that?

</p>
<p><strong>Ryan Burgess</strong><br />
And oh, yeah, you can't.

But I have to say no keyboard is fundamental. And there's there's one key. So I think you were asking me, Ryan, your written part of your original question was around, like, how can developers test if you can't, if you can't navigate to an operate, all focus of all elements on the screen using that? That word? Right, it rhymes with keyboard?

Avoiding? What was its keyboard keyboard? We like to drink? Oh, yeah, yeah. Right now. He does have some ramen, right.

But yeah, if you can navigate to and operate all of those focused elements with that device, then you're dead in the water. Like that's fundamental. The The other thing is actually seeing visible, visible keyboard focus. Yeah. So as you're, as you're tapping around you, if you can't see where you are, that kind of defeats the purpose. Oh,

I'm a huge, huge user of a lot of dead

people. Nicolas, Eric is a huge keyboard, user, and he's like, really all powerful in JavaScript. So he needs a power keyboard.

No, I'm the same way I actually use it all the time. And I can't stand when I have no idea where I'm at where there's no like focus state, that's a huge thing. Honestly, I even say is a simple thing is every time in your CSS that you're adding a hover state, just put comma focus on that, it's the same thing. But I want to be able to actually see where I am on the page. So if I'm not using the most, I'm able to tab where I am, and actually see that I think to me, and I'm a visual user, but I can actually do that with my keyboard. I don't want to be on a mouse all the time.

</p>
<p><strong>Derrick Showers</strong><br />
And also helps because I don't know if this is a recent thing. I don't know how recent This is. But you know, the blue outline at Chrome I mentioned earlier.

</p>
<p><strong>Ryan Burgess</strong><br />
And you said to remove it, and I was gonna like be like, Oh,

</p>
<p><strong>Derrick Showers</strong><br />
I'm saying there's hate it. I'm saying I need it. But I'm saying that that you might not remove it is what I meant to say, Oh, yeah. Because people would just think, oh, I don't why is that they're just gonna make sure you don't do anything about Yes. But the I like your idea about just comma, focus everything because then you can avoid that because designers do hate that. And it does. Better focus state.

</p>
<p><strong>Ryan Burgess</strong><br />
Yes. Also, you're I mean, you can remove it, but remove it and make sure that you're replacing it with a focus state. That's super important.

I think I think it's also just if we could step back for a second I think it's important to say that he all the things we're talking about all these various guidance that we're giving you. These aren't things I've been made up like he's here tonight or whatever. There's actually a summation general but there's like, there's a false because people are always people always saying like, well, we want to see the accessibility requirements and worthies and it's essentially it's the Web Content Accessibility Guidelines. Version two Dotto, which came out in 2008, which really the Bible for anyone working in accessibility and I get an All of us makes us really realize for developers, if you look at that, if you look at those guidelines, it's just like it's, you need like a PhD to understand some of it. But people need to understand that there is actually a reference. Yeah,

well, it's it to me, it actually reminds me of like W three C standards like the other browser. It's not fun reading it.

But here's the other thing that people need to understand is there's the god dev guidelines for reason, because there's more than one way to meet them. Everyone is like, oh, like, what's the? What do I have to do? Like, what's the one way to get there. And, you know, if you asked one person, you might be able to achieve the guideline, by doing it one way, there's, or you come to someone else. And they might say something a little different, but it achieves the same end. Ultimately, what you're trying to do is just make sure that people can independently use and interact with your content, regardless of what what they're using, they're using a mouse or any other device,

</p>
<p><strong>Sarah Federman</strong><br />
keyboard, like a keyboard.

</p>
<p><strong>Ryan Burgess</strong><br />
So genossen, what are your biggest pet peeves for accessibility that you come across in websites? You know, whether it be booking in air flights, or anything that you're interacting with on a daily basis? What are your biggest things that you notice that are common mistakes?

And I guess just for the, for the interest of our podcast listeners, since you've asked the question that way, I think it's time to reveal a dirty little secret. I'm completely blind. And I use a screen reader. Awesome.

So you use this on a daily basis. And you're a power user?

Using Scrivener for a while? Yes. My first actually, it's interesting. My very first screen readers were my cousins who would read to me on the screen as I was trying to program games in basic and stuff like that, but no shit. I wouldn't be like reading to be like error messages and stuff. And I'd be like doing that. My biggest pet peeves lately is like video, I don't playing video. So I'll go to a website to read a news story or something like, I'll be in Facebook, and I'll click, I'll activate a link. And then like I'm listening to with my screen reader. And then suddenly out of nowhere, there's like talking and stuff that totally will interfere with my screen reader that I'm using. And there's no pause button or anything that I can find quickly enough. And by the way,

</p>
<p><strong>Derrick Showers</strong><br />
it's annoying for every human. No, I know. can find a pause but Right?

</p>
<p><strong>Ryan Burgess</strong><br />
Out of anything that has my point is don't ever do it. Yeah,

right. Is there? Is there ever a good time to do that? Jennison is there like a point where you're like, Okay, I get it, that it's been done, which autoplay video,

again lightly, because you expect it on YouTube, right? The video will automatically play, but that has the controls and stuff. So I can't think What about,

</p>
<p><strong>Derrick Showers</strong><br />
like a lot of sites are using background videos now. So I guess because there's no sound. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I wouldn't even know there's so much stuff that time. Okay. So here's the other thing. There's so much stuff that happens on the screen that I kind of jokingly, I can plead ignorance. Like, I can be like I can, what's the word? I can walk blindly onto a website because like, there's, there's background images, right? And then sometimes on restaurant websites, they'll have their menus, which is a scan image, I have, like, decided not to go to certain restaurants just because I was just trying to see like, I want to hear the menu before we go. Is that like a crime? You know, I've got money to spend. So I take that money elsewhere. I'm like, screw that.

</p>
<p><strong>Derrick Showers</strong><br />
How hard is it to convert that I see that all the time on restaurant websites, too? How hard is it to convert? It's not huge HTML, right? And actually, maybe we should go maybe we should go into business converting menus.

</p>
<p><strong>Ryan Burgess</strong><br />
I honestly I'll do that. Because you know what? Evernote, Evernote does actually do some reading text. That is a good

one. The worst is when the PDF is a scanned image. Oh, one thing first PDF that has text in it like yes, that's a good point. But if it's a scanned image, all I hear from my screen reader is a document empty.

Well, that's all it reads here. Right? Yeah, one of my other

pet peeves is is inaccessible error messaging. So I'm busy filling out a form. And it's one of these forms where witnesses you tab off the form, the error message pops up. But no one's done anything using ARIA to make that error message accessible. So here I am, again, blindly filling out this form thinking I'm doing it right. And then I hit the submit button and nothing happens. And then I'm like, now I'm someone who like I know what's going on. But I can imagine like the average Joe, and Julian is just trying to fill out a form. Right? And you're

actually working in this field. So I kind of

I just expect stuff not to be accessible. I hate to say it, but I just expect stuff not to be accessible these days. So I just I'm extra careful to check around but I believe leave a form field, I just automatically look to see, is there an error message or something? I don't want to go back and look,

</p>
<p><strong>Derrick Showers</strong><br />
is Aria something that you would always have to use? Because we talked earlier about like the first year of malaria, not 10 Is it but like this is probably some no

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, there's other things you can do, you can move focus to the arm to the error message as well. Because think about moving focuses like using your your eyes, like if there's something that needs to be drawn attention to, for a screen reader user, like an error, then just get the focus there, if it's one of these things where you are getting error messages before you submit, but I was mentioned before we went on tape on podcast that I was I was filling out a form. Last week, on a flight, I was flying on a major airline that will remain nameless

</p>
<p><strong>Derrick Showers</strong><br />
now southwest.

</p>
<p><strong>Ryan Burgess</strong><br />
I was flying back to San Jose, and I like everyone else I wanted to get online. So I was on their mobile website. And it took me forever, it took me more than six times to fill out a form. Because for there were just a bunch of different issues that I had to contend with. What from one reason from one thing, focus was being auto automatically moved from field to field. So sometimes I got thrown off, they were using placeholders. So as soon as I removed the text, the placeholder text, the label, they didn't put a label in the code, so I had no idea. So when I hit submit, the focus was just brought to some random place, there was an error message on screen that I didn't know was there. But I knew something had wrong, it happened because I kept seeing the form or reading the form. So I knew I hadn't proceeded. So it took me more than six times to figure this out. And I'm almost positive, they were using custom controls, because I was trying to like check a checkbox, it took me like forever to check to get it to say checkbox checked, which wouldn't normally happen if it was a native checkbox. So I have to say like, we're not getting my soapbox, like, all of you listening, and you get new folks here. But if you have to go through that, you'd be outraged. Like, it's ridiculous. Why should take forever to fill out a freaking form? Like it's ended with a caption to boot? Which you know, caption? Yeah. Oh, now, it had I had an audio capture. But my problem was, the first numbers were being drowned out by my screen reader. So I had to listen to the capture a couple of times theoret? And what am I supposed to do turn to a passenger on the plane to read to me like what's on the screen? No, I should be able to independently do that.

</p>
<p><strong>Derrick Showers</strong><br />
And what's crazy about that is some some team probably spent a lot of time introducing these extra features, like moving focus, like it doesn't happen by itself. Right. So moving focus in next field and doing these custom controls where time could have been spent, you know, making sure that was successful and said, Yeah, still making one I

</p>
<p><strong>Ryan Burgess</strong><br />
think he also hit on a good one is the placeholder text, placeholder text is not accessible. And it's fine. Like I've seen a lot of times designers want to maximize the real estate. Yeah. And they want to just have a placeholder text. It's also okay to put a I mean, no, sorry, it's not okay, you need to have a label with an input field. Always like in my mind, you always have to have it. And so at least it's there to read to the screen here. So genossen actually can read that. But even if the designer is like, no, no, we don't want that. We just want it as placeholder, that's fine for the visual user. But for someone for like using screen technology, like assistive technology to help read that, you can still use techniques of using the label in your markup. But using something like CSS, like Text Indent, putting until like negative nine and nine pixels or whatever off screen screen are still actually going to read it. But to the designer, they have no clue. It's they're not saying that you're hiding something from the designer, but they're still achieving both things. And proper markup needs a label in a form.

So just a couple things on placeholders. I mean, they're placeholders were really intended for as advisory tax. And those of us in accessibility aren't saying don't use placeholders but but just understand that you're supposed to use it as what it was intended for, to your point around the label and hiding it. You know, if we move beyond full color blind, if you think of people with cognitive disabilities, and other visual disabilities and things like that, and also people who use voice recognition software where they need to be able to mention, they need to say go to this field while there's no label there. Or if they don't know what it is, and it's gone, then that doesn't help them either. And the other thing about placeholder text, it's also out of the box, it doesn't pass code contrast.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think I think you should really have I mean, because the other checks and I have a placeholder text is just for every user. It's very, because you'd like you said it's supporting text. So it's like, Okay, I've typed something in or maybe I have Chrome autofill turned on which a lot of people do, right and so you have no idea what those fields actually force like. One way around that I've seen I know we do it at LinkedIn is just kind of like do a floating so like it's kind of starts in text in the input field. They kind of like floats to the top once you start typing, but in that case, it's Yeah, that's cool. In that case, you have to label it's a label that is actually good enough that yes, you can't like really manipulate placeholder text. So it kind of forces you to do that.

</p>
<p><strong>Ryan Burgess</strong><br />
But I so the other thing I want to go back to and not to over, like hammer this point too far, but using native controls is so important because I or applying ARIA correctly, because I can't tell you how many times I've gone to a website. And I just have to kind of figure out that this piece of text is actually a checkbox or something else, or will say, like, check this, you know, check the checkbox to say that you agree with the terms and conditions I've had this happen. And I'm looking for an actual checkbox to check in there's none, because they didn't implement Aria. And so I've stuck. So using native control, like using native controls or implementing Aria, I mean, it's so important.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, and even if you implement the native control under the hood, you know, like, I know, there's a lot of designers that like, this is becoming less of a thing now, thank God, but maybe, maybe it's just like, the the select box being like decorated into this, like fancy drop down. And I remember the agency, they always want to and like the the approach a couple years ago, it's like using another list. And my Well, it's not accessible, right. But like, if you use it, even if you, you know, however you style it, if you use a select box variances in that situation under the under the hood, you still have that native element, which is checkboxes to like,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, and one of the things I want to mention that I don't see, actually, I do see often, if you have more than one call to action button, like a Like button, because it was screaming your users, what we what we can do is we can pull up a list of links or list of buttons, or checkboxes, and things. And if you have like more than one of the same thing. The advice is always and again, you can hide this off screen is to make those call to action buttons unique and meaningful. So we'd say like, like Sarah's post, or comment on Ryan's post, as opposed to just comment button. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
like, I actually you guys caught me on this one time with, with some things on LinkedIn. But like, there's like remove buttons I was working on like, a phone number management thing is like, you would just think like the supporting tech needs to be removed. Right? Right. What do you have 10 phone numbers, like, right, you should, you don't necessarily need the user to see remove this phone number, like the actual phone number, but like you want the screen reader saver who

</p>
<p><strong>Ryan Burgess</strong><br />
actually read it. That's a good point. And it's even to like always make the point of like, even the simple alt tag on an image, if you're going to put it there, put a bit of description, not just like photo, I mean, that really does no value. And if you can think of something, Derek drinking a beer, well, at least I give some context to what that photo is. And that's a lot better than just saying photo, I

have to give a shout out to my, my peers over Facebook has done some really great stuff with the artificial intelligence. So now I can swipe on my iPhone. I know we're concentrating here more on web. But on my iPhone app, I can swipe on Facebook. And if there's a photo, they have implemented artificial intelligence. So it gives me some level of information it will say like photo with like two people, or so that's

automatically seen that. And

that's because it's using the artificial intelligence. I mean, there's still perfecting it. But I mean, it's better than nothing. Right? And it allows just some, some people want more detail, like that level of detail. So that's great.

Sure. Well, I mean, hearing photo doesn't really Yeah, which context like, okay, great, thanks, nothing. Yeah, we don't for

</p>
<p><strong>Sarah Federman</strong><br />
the sake of our listeners that don't do this are gonna have to deal with this a lot. When you're talking about like adding more context to like your CTAs and whatnot. How would they actually go about doing that?

</p>
<p><strong>Ryan Burgess</strong><br />
Without changing the visual aspects?

</p>
<p><strong>Derrick Showers</strong><br />
Oh, yeah. I think one way, I think there's a lot of like you said earlier, there's a lot of ways to do the same thing. I think, yeah, you can hide off screen, but you can hide certain parts of it off screen. So I know like for the Remove situation. In that case, it was just, it was just actually icon. So it was kind of easy, because you have to like hide the whole, you can hide the whole thing off screen. But like if there's other situations where it might be just removed, and then for phone number, blah, blah, blah, like he would just put that maybe in a span and just put that scan on the screen.

</p>
<p><strong>Ryan Burgess</strong><br />
And then how did you in your CSS? How did you target that span to actually move it off screen because display none will actually hide it from the

</p>
<p><strong>Derrick Showers</strong><br />
screen. So I think I honestly don't know off the top of my head. But if you look at if you google it there's because I think a lot of you should know us after a lot of tactics. It's kind of like the clear face like I always have to Google it.

</p>
<p><strong>Ryan Burgess</strong><br />
But well, it's like Text Indent negative nine and nine. I know that Asian I don't know

</p>
<p><strong>Derrick Showers</strong><br />
that text 999 Negative 999 work, so

</p>
<p><strong>Ryan Burgess</strong><br />
it does. It does say sure Yeah, that's

</p>
<p><strong>Derrick Showers</strong><br />
what I thought you had to do. Like nowadays I thought I thought screen readers were smarter at clipping and like height zero and fonts.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah, there's like, there's such a different there's some added things. Yes. But

</p>
<p><strong>Derrick Showers</strong><br />
anyway, what if you're using when you're using Sass, or any sort of preprocessor, just create a mixin and three return tax that way, you don't have to worry

</p>
<p><strong>Ryan Burgess</strong><br />
about it. And my point is just just to make sure if you have more than one of the same link or button names, you need to be unique. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
that's a really good tip.

</p>
<p><strong>Ryan Burgess</strong><br />
Can I jump back because you asked about testing. So in addition to keyboard testing, nice one. So I want to say a couple of other things about keyboard testing, because we talked about like, making sure it's operable and navigable. But you also want to make sure there's a logical tabbing order left to right, top to bottom. But moving away from that there are also a bunch of good tools out there on that you free tools, or other tools that you can use to audit your page, we already talked about the Chrome Accessibility extension. But there's also something called Access lint, which is another tool that you can do audit of your page. And then there's something called X a capital X. Well, he, there's a digital accessibility agency called DT systems that basically open sourced all the accessibility rules for their accessibility engine. And so if you're looking to do like continuous accessibility testing, like as a developer, and you want to just to be able to run a set of rules, I would recommend looking at that, Google has their own accessibility developer tools. There's also another paid tool called tenon. So there's a bunch of tools out there. So it's not like there's it's not like you can't do it. And I want to just address really quickly around screen reader testing, because that's a pretty contentious issue in the in the accessibility field, because they're like, don't teach developers how to use guru because they don't use screen readers often enough. So that they would know, I would say the only, I would say you would want to learn how to use a screen reader properly. But you would want to only use it to test things like if you were using non standard or custom controls, or if you're using ARIA or if you're using dynamic content. And you wanted to make sure that focus was being managed properly, that's when you use screen readers. Because you can test for things like alternative texts by just using the mouse and hovering over things. So I wouldn't go crazy with that. But there's a free screen reader called NVDA, which people can use a favorite search engine TTU, look up and download. And if you're going to do any testing, I would strongly suggest you test at least a little bit on Windows if you can, and I'd use NVDA with Firefox, voiceover with Safari. And there's also Jaws, just J AWS, which is basically the the dominant screen reader in the market is is a Windows screen reader. There is a developer version, which I think is very inexpensive. For the average user, it's $1,100 to purchase. But I get that deaths mainly are using MAC's. So I would just use VoiceOver with Safari, because a lot more people are using VoiceOver with Safari these days. And if you're going to be like trying to get the experience that a voiceover user would be doing and why not use the the prominent combination that's out there.

Now, one nice thing is honestly, it's command command. It's right there, it's right there.

And all you need to do honestly, like there's a couple of key commands that you should know how to do like how to properly move around. Using those using the voiceover keys. The rotor is another one, I'll just assume that people if they're really interested, they'll look these terms up. But LinkedIn, yeah, no, it's the rotor. So you can actually see what the buttons will will will sound like so you can test to see for example, if you're using if you have to use buttons that are not actual native buttons, you can use the rotor to actually see a voiceover is recognizing those nonstandard buttons as buttons, and you can and you can also see if you've properly made those buttons unique meaningful, because you'll see a full list of them.

</p>
<p><strong>Derrick Showers</strong><br />
It's another good tool, Chrome. Because you can use it more. Yeah, I mean, because you can kind of like, especially if you are like working very, you'll have headphones or something you want to like you want to kind of get an idea of how things are, you can kind of get a visual representation of the

</p>
<p><strong>Ryan Burgess</strong><br />
and I gotta tell you that like sometimes we get some like sometimes people will say like, I don't understand why like it's not reading the form Nate like that the field names and had they used the Chrome Accessibility extension they would have seen the Forgot before and it like it wasn't matching. So this low hanging fruit now I will say that these automated tools are great But they ultimately they only pick up about 25 to 30% of the accessibility issues. So

I think one thing that's is very cool. The automated tools, like something that you mentioned tenon is that you can actually implement that into your build system. So you could literally flag errors before it's actually getting pushed to production,

or x or any of them. Yeah, but there's some really good tools. And I really encourage our listeners to really test them all out and see which one works for you. Because some of them, you know, it just depends on your situation. So I can name like a whole bunch of them. But certainly like, well, in the show notes, the Web Accessibility Initiative, the people behind WIC AG, or WCAG, has published a list of tools, and we can link to that and people can I want people to shop around and find out the tool that works best for them.

So another thing I think that's important to mention, which is coming up may 19, is global accessibility awareness day, I wanted to bring in bring this up, because I know Jennison actually has a piece in this and started it into the game into the game. That's a good way. But I'm interested to know, how did it start? And what's the, what's the goal of

it. So it all started, there's a developer named Joe Devin in Los Angeles, who wrote a blog post back in November of 2011. And he basically just said, developers need to need to have some fundamental knowledge about accessibility. And there should be a day dedicated to that kind of not learning about accessibility. And again, it was an innocuous blog post, and then he tweeted about it. It was some random Saturday in November of 2011. And for whatever reason, I read it, and I clicked the link, and I saw it. And I'm like, Oh, this is interesting. So I responded to the blog post and said, Hey, if you're interested in doing it, I've got some connections. And let's see if we can do it, that you need to know that Joe, Devin and I are two fairly busy people. And so like this, this, we didn't think it would pick up. And then we just did it. And then I the literally the first global accessibility awareness day in 2012. Was me emailing a bunch of my friends in accessibility in different cities, going more thinking and doing this? What can you like, organize something, and, and from that tweet, and those that first initial communication, and again, realize that I didn't know Joe, when we just met, virtually, it happened. And here we are the fifth anniversary, you know, we have events around the world that people go to Global Accessibility Awareness, day.org, you'll see a bunch, you click on Events, we have events, right now, as of the time of this recording, we have events happening, like from Ottawa, Canada, to Perth, Australia, from Cape Town, South Africa, to Belfast in the UK. So it's all over the place. And it's just a day to for people to spend whatever period of time, whether it's an hour, like half a day, whatever, to just learn to just take some time to learn about digital accessibility, like web and mobile, and just talk about it. It's like one of these things that people, I don't know what it is about accessibility, I sometimes feel like people are worried because like, they don't want to ask them questions and things like that. So we wanted to make it a day where people felt comfortable to just do stuff and ask questions, and things like that. So there's a bunch of activities happening around the world. And then there's a bunch of activities you can do on your own, just like, like, go to your favorite website and just use the keyboard. And see if you can actually do, like, perform a transaction with it. Just little things like that, or there's bigger things to do, but it's just a day and some people can't do it on. So it's the third Thursday of every month now. Everyone, I wish, no third Thursday of May every year. But some people unfortunately can't do it on that day because they couldn't find space. So for example, Cape Town, South Africa, they're doing theirs on the 14th was just exciting to see like people are just picking this up. It's a grassroots effort. John, I never thought it would just pick up but people just get all excited around that date or and particularly on that date. And it's just it's it's it's just an opportunity for people to feel comfortable learning about different issues of digital accessibility. So that's that's what it was meant to do. And it seems to be fulfilling its its mission.

What are some ways that like you would suggest people to participate, especially in companies like I know, your LinkedIn, Netflix, anything? How can we participate?

What do you suggest? Well, one of the big things you could do is just like identify and fix one accessibility bug. Could you imagine if everyone listening here, identified one accessibility bug on their either their own page that they have on on a client page On accompany page, and just like I addressed that one issue

that actually be quite significant if everyone if every developer fix one thing issue,

</p>
<p><strong>Sarah Federman</strong><br />
especially if Every golfer who observes global system Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, thank you, I just find one issue like use Chrome Accessibility extension, use it and the tools we talked about, use the use the keyboard and see if you can

love the Genesis good about calling out keyword right now

it's important. Right? If everyone just found one accessibility bug, and it could be like, you could end up adding captions transcript to a video, you could bump up the color on on a page to make it meet the sufficient foreground background color contrast, there's any number of things, you could convert some buttons that you created with divs and spans to like actual links or buttons, then it could just be something simple like that, or, or like, do some research and just learn about accessibility or download a screen reader or turn on VoiceOver on the Mac. And just check it out. Like it doesn't have to be a huge thing. It just did little activities. If you go to Global Accessibility Awareness day.org and click on the participant link, participate, Link, there's a whole bunch of different activities that we suggest people can do, in addition to attending any number of public events that are happening, be really

</p>
<p><strong>Derrick Showers</strong><br />
cool, too. If like, you know, people could go and maybe check out their favorite framework or, and contribute back to open source community. Some of that stuff like that'd be awesome. That's yeah, it might take a little bit because I know why not. Yeah, but yeah, but I know like, single page apps are definitely there. I'm sure you can find something right. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
There's every single one of us tons of things to do for granted accessibility Wednesday. Thanks. Thanks for being.

So before we move to like our picks for the episode, what is some final advice that you could probably share with everyone to make things more digitally accessible? What is like one thing takeaway for every developer, listen to the podcast,

if I can maybe like expand on that question. And just like, answered in terms of what can developers do to learn more about accessibility as well?

Yeah, I like that, actually. How can everyone in this podcast learn more?

So there's a couple of things you can you can always look at the 11, my hashtag on Twitter. There's a there's a great book by a buddy of mine, Hayden Pickering, called apps for all. So you can you can use your favorite search engine and look for that one, we'll have some instruments, but that in a lot of the major tech cities, there are also meetup groups that are specific to accessibility. So again, use your favorite search engine and type the word accessibility and meet up there. I know here in the States, there's there's meetup groups in New York in DC and Boston, Austin here in the San Francisco Bay area, in Denver, in Minneapolis plays like that in in London, England. So that's another way where you can just connect and get some real world exposure to accessibility that way as well. And just like part of it is also just reading and and like finding blogs, Mike Jose, from from Zillow, puts out some great blog posts. Leonie Watson is another one, she's also she, she puts out some good posts. So there's, there's some blogs. But I've always said, if you're, if you're listening, and you're all if you care about accessibility, and you have the empathy for it, if you've got strong JavaScript, CSS, and HTML five skills, and you have the empathy accessibility, you can, you can be taught a lot of the technique. And there's there are these days, there's a lot of opportunities right now, particularly here in the Bay Area, but elsewhere, too. There's a lot of companies that are looking for people to fill accessibility roles. And I will say like, for those of you who had matters, you know, you you are like you're, you're paid generously for for doing that kind of work. There's definitely some opportunities there. And that's going to continue to grow. I mean, there's, there's work now building a certification process for accessibility folks, as well. So there's the accessibility industry in itself. Is is moving and growing. And, you know, people are interested you can, there's a Twitter account that I run, which is at 11 wide jobs, where I tweet about different job opportunities that come up. And there's also at a live and why events where I tweet about different conferences. There's a bunch of free or inexpensive conferences that happen annually. I run something called Accessibility Bay Area, which will be happening later in the fall. But you know, more on that when it comes out. But there's events in Toronto and elsewhere, the people conference is in San Diego. It'll be next February that the week that straddles February and March. And that's the International Technology and persons with disabilities conference. And that's a big one. That's kind of like our version of the Consumer Electronics Show for accessibility. There's about 5000 folks who get together. And they're not only talking about web accessibility, they're talking about everything. And it's an interesting opportunity for developers to get full immersion because one of the issues if I could, is, I know this, because I spoken to enough developers, unless you get exposed to actually seeing a person with a disability, trying to use your site or your app, you don't necessarily get it, and you're kind of like forced to just like believe that what you're doing is accessible, or is doing the right thing, or you're being, you know, maybe you're just handed the checklist, and you're told here and make sure your site does this. But when you get that opportunity to sit with someone and actually see them, for lack of a better word struggling with your site, you might not appreciate what the work you're doing behind the scenes, and the code can actually the impact of what that can do. So that that sees on conference, I've always heard from dads who attended it. It's like, that's a big one. Because they're like, oh, my gosh, like, here are all my there are people who are actually trying to use my products. So that one, it's not a cheap conference, but that one's a good one. But there's, like I said, there's a lot of free or inexpensive ones, you can always tweet me at genossen. And I can try and help you find something that's close to where you're at, in terms of location of the city, but I know there's going to be a conference coming up in Boston and like I said, here in the Bay Area, and it's just a good opportunity to to interact with other devs who are and designers who are interested and to actually interact with end users with disabilities.

Awesome. At the end of all of our podcasts, we usually do some pics genossen Do you have any pics for a couple awesome non

accessibility related? Oh, so me being a bit of a travel Holic. The points guy.com is a good website if your points collector, but another site because I like to go out and about in the city in San Francisco and elsewhere. I love the Cash App on my mobile phone. It works for me. And I'm able to very quickly, obviously, many people know about it, but very quickly able to like transfer cash to people. And then the other kind of do with or do a third? Yes, because I'm a jazz fan jazz.fm which is the Jazz Radio Station in Toronto. They they do live stream. But it's an easy URL to remember. And it's a great radio station.

Sarah, what do you have this week, oh,

</p>
<p><strong>Sarah Federman</strong><br />
man, this week, all since I just spent all my time working on my final projects, when you graduate, I was looking at it through walking time to see how much time I actually spent. Walking time is like a really cool time tracker, it like automatically connects to all your editors. And it tracks without you doing anything, what how much you're doing and how much time you spend on each commit and like, gives you a nice dashboard. And it'll be a nice summary. So I really enjoy that. You're gonna find out accessibility nice, perfect. And so I'm also finally done the school. Yeah, I get to do more hobby projects. So I was looking at this really cool website. hackster.io is just like a big library of Arduino and like all sorts of different electronic projects, but you put in all of the components you own, and it gives you like projects that use those components. And you can also if you contribute, you can like get points and like redeem them for free stuff in their store. Like free electronics and stuff. And the other one is low songs, which is previously structure. It provides like a visual programming kind of interface for IoT stuff. So like you connects little pods as a graph, so by something senses something, I could tweet something. It's very simple, and it's easy to use, and this

</p>
<p><strong>Ryan Burgess</strong><br />
stuff is always good. Derek we have.

</p>
<p><strong>Derrick Showers</strong><br />
So my first one is is accessibility related. So Addy Osmani has this command line tool for accessibility audit, and it actually goes through the Chrome Accessibility developer tools. But it's kind of cool, because, you know, we, as developers like to be like to go back to like the 1970s and do everything on command line. So But anyway, that's pretty cool. And then, like you were saying earlier writing Hi, this is Jerry like, filter to see. I think so. Yeah, so, so that seems pretty cool. And my other one is everyone's making fun of me earlier because I was talking about ways that I budget and not spend a ton of money but I found this to let you guys in a secret the reason that I've been like this cuz I started this new budget, it's called YNAB short for you need a budget you need a budget. Oh, nice omegas

Yes. But it's actually really cool tool. And I really, really love I've only been using it for about a week and a half, but they're their UI is amazing. I don't know how accessible but the UI is like everything's like really well thought through and actually have $5 a month, but I've been

</p>
<p><strong>Ryan Burgess</strong><br />
paying to create a bunch but I've been I've been a big

</p>
<p><strong>Derrick Showers</strong><br />
user for a while ever I feel like a lot of people use me and this is this is a great alternative. And they do classes for for free but after the $5 subscription maybe classes articles yeah on how to just be better with your personal finances so I really suggestion Yeah, they have a 30 day free trial if you don't want to Jennison

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Well, as long as it's acceptable.

I actually will start with a accessABILITY reacts plugin is react A one one why Ollie if jettison will just cringe when I say that? Ordinary okay. But the nice thing about it is it indentifies issues in your React components ahead of time. So I definitely recommend checking that out. I'll add it in the show notes so people can link to it. And since we've been doing music picks, I chose probably one of my favorite bands, the Gaslight Anthem, definitely recommend checking them out. Another pic I have is I was just in Toronto this past weekend, and tried some new ice cream place called Sweet Jesus ice cream noise. It's amazing. Honestly, even just go check out their site and look at the epic ice cream choices and flavors that you have. I had something that had like cotton candy and craziness going on there. It was delicious. Definitely recommend trying that out. As we close the episode. I want to thank you so much Jennison for joining us. It was a pleasure having you on the episode. Thanks for inviting me. Yeah, thank you so much. Where can people find you online? Sure. If they're interested in talking more about digital accessibility,

absolutely. So they can find me at genossen je and n is a win. And they can find me also genossen.ca

Right on that's a Canadian domain

</p>
<p><strong>Derrick Showers</strong><br />
is, as you guess, so good.

</p>
<p><strong>Ryan Burgess</strong><br />
So that's it for today's episode. Make sure to follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> and Tweet us and tell us how you're gonna spend your global accessibility awareness day what activities you're going to be doing.

</p>
<p><strong>Sarah Federman</strong><br />
How could it be

</p>
<p><strong>Ryan Burgess</strong><br />
testing something to say Hi

</p>
<p><strong>Sarah Federman</strong><br />
Andrew here.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Thanks, everyone.

</p>
<p><strong>Sarah Federman</strong><br />
Last cheers I guess

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers.

</p>
`;
        return transcript;
    };