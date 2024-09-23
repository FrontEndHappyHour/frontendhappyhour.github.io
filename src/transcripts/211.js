module.exports = function() {
        const transcript =`
        Ken Wheeler  
You see kids today, kids got out of college, they're like, Oh yeah, fucking cracked. I'm making like, fucking like, $700,000 of faang and Oh shit, you


<p><strong>Ryan Burgess</strong><br />
heard that right? 700k that might be a bit of an exaggeration of what engineers are making right out of school, but with experience, it absolutely is attainable. Ken Wheeler and I had an amazing conversation about how things have evolved in the tech industry, from scraping by on our first jobs to today's huge tech salaries. We talk about how the industry has changed from the early days of flash and jQuery to the current state of the JavaScript ecosystem we live and breathe today. If you know of Ken Wheeler, you know he's quite the character, which makes for a very interesting conversation. Welcome to the front end Happy Hour podcast. This is our sips of wisdom series where I'm interviewing people across the software engineering community to learn about their careers. Ken, thank you for joining front end happy hour.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Thanks for having awesome well, thank


<p><strong>Ryan Burgess</strong><br />
you. Can you give us a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages.
</p>
<p><strong>Ken Wheeler</strong><br /> 
I'm just some dude.

</p>
<p><strong>Ryan Burgess</strong><br />
Just some dude. Okay, all right, we'll start there. So some dude in sunglasses for anybody who's watching on he is, do
</p>
<p><strong>Ken Wheeler</strong><br /> 
you want to see? No,

</p>
<p><strong>Ryan Burgess</strong><br />
I know. I like the vibes.
</p>
<p><strong>Ken Wheeler</strong><br /> 
I mean, back off, maybe.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. All right. If
</p>
<p><strong>Ken Wheeler</strong><br /> 
it gets too bad. Hey, listeners,

</p>
<p><strong>Ryan Burgess</strong><br />
Hey, listeners, have you heard of <a href="https://Infinite.red/FrontEndHH">Infinite Red</a>? They're a powerhouse in the React Native world, and we're excited to have them as a sponsor of this episode. Since 2015 they've built over 75 apps for companies ranging from startups to global brands. Infinite Red's team of senior developers are the experts you need to build your next React Native app. They're not just about delivering amazing products. They also empower your team by working with your team to share their knowledge, plus they're deeply involved in the community, hosting the chain react conference to over 400 developers and producing the popular React Native radio podcast. If your company needs a React Native partner, look no further than Infinite Red. Check them out at <a href="https://Infinite.red/FrontEndHH">Infinite.red/FrontEndHH</a></p>
<p><strong>Ken Wheeler</strong><br /> 
yeah, so I don't know, a long time ago, I spent a lot of time working in E commerce. As a result. You know, any open source that exists is born out of frustration with something, right? Generally speaking, so in E commerce, right? Making a lot of carousels all the time. Oh, god, you're struggling with them. So yeah, I guess my whole thing is, right, I made a jQuery carousel that a few folks like. That was way back then, though, I think, like after what was it called slick, slick

</p>
<p><strong>Ryan Burgess</strong><br />
remember that one or not? Yeah. I mean, there were so many of them that was
</p>
<p><strong>Ken Wheeler</strong><br /> 
like, Yeah. There was Yeah. At the time I was competing with, like, OWL slider, I think. And then later, flickety, yeah, I

</p>
<p><strong>Ryan Burgess</strong><br />
remember that one. But, you know, you gotta say this is, like, what, like, 12 years ago, yeah, so long. I mean, jQuery days too, right? Like, yeah, it was, it was hard to get certain things too, because you actually, at those time, you had to start getting, uh, swipes too, right? Like, you had to think about the mobile aspect as well.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Yeah, that was brand new, right? So, like, I think, like, the actual success of that plugin was based on that you could have different settings based upon window with, right? So if you wanted, like, this, like certain behavior on desktop, like, you could have a whole different settings object for when it went to mobile. Oh, nice, yeah, you know, be like dots underneath, or whatever the fuck you do. I mean, rather than, like, autoplay and it's swipe and everything like that. But it was funny, because back then, and, like, a lot of people listening, right, if they're newer, you know, whatever back then, like, when you when you would put something into a project, right there, this wasn't this npm install shit, no, no, no. You have, yeah, so you had a plugins.js, giant file, yes. And you would paste the minified plugin, boop, right? But then it would have, like, a little comment, like an attribution comment up top, it'd be like, slick carousel. Ken Wheeler, last carousel ever need version 1.07 blah, blah, blah, blah, blah. Here's the website, right? So you'd have like, this, like, multiline comment at the top of, like, the blob of minified JavaScript, Yep, yeah. So, like, you'd sit there and you'd be like, Oh, what's going on? Yeah, you'd edit the plugins.js, over, FTP. Man, such, such agile times now, oh, yeah, huge difference. Like now, people are sitting around playing video games, waiting for builds to finish and shit. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, or you can now ask AI to do some of it for you, which is, it's, it's just like a whole nother world that we're living in. I love how drastically things keep changing. It keeps us on our toes, which I find interesting.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Yeah, you know, I think that, um, you know, the whole AI thing. I initially hated it, and then I realized it's dumb. It's not actually, like, smart, no, right? So. It's, it's not, I'll probably be able to retire, so I'm not very concerned anymore, but in that same sense, right? Like, like, do you remember when like, prettier came out? Yes, like, like, 2000

</p>
<p><strong>Ryan Burgess</strong><br />
Holland 15?
</p>
<p><strong>Ken Wheeler</strong><br /> 
Yeah, it's like, one of those things, 15. Yeah, it's not gonna, like, take my job from formatting shit, right? But it's like removing a lot of drudgery, and I feel like that's a lot of what AI is doing more and more lately, right? It depends on what you're working on, because if it's something novel, right, it's gonna fuck up. And, you know, you're gonna be fixing more than you're generating, right? But I mean, if you're like, oh, you know, I need a couple routes on an express API or something, or nestjs or whatever that should have just,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, yeah, I had it like, reformat some large JSON the other day where it was like, it was kind of merging two formatted ones. One was formatted one way or missing something, some objects in another. And it was just like, can you just merge these two and I want it to be formatted this way. And it did it, and it's like, wow, that would have taken me probably a few hours to do, like, probably, you know, actually, and just, just painful, like, I would not want, I'd probably not want to do it. I
</p>
<p><strong>Ken Wheeler</strong><br /> 
don't know what I like. You know, what I like? To use it for, docs.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yes, like writing them or reading them, or both.
</p>
<p><strong>Ken Wheeler</strong><br /> 
So I'll have it spit out docs, yeah, and then I'll just go and do the editorial review, go update where I need to. But the thing is that it gives you a well formatted docs, which I know how to do, but I don't fucking feel like setting it up, right, but like, and on top of that, but it's actually reading your code, and it's like, being like, like, have you ever, like, been sitting there documenting something, and you have to document, like, document, like, react props, and you have to do, like, the markdown table, yeah? Like, fuck, my fucking life, yes. Like, it'll go set that up. And you're like, okay, yeah. So you go in and you tweak it, you you editorialize it and shit. But yeah, it's, it makes a lot of that bullshit work so much faster now,

</p>
<p><strong>Ryan Burgess</strong><br />
80% of the way it gets you 80% of the way there, I think, and then you still need that human eye. Like,
</p>
<p><strong>Ken Wheeler</strong><br /> 
I don't like so me, personally, I fucking hate videos, like so much, like so much culture has shipped into, like, everything is video learning, yes, and I fucking hate videos just because I don't have the attention span for that shit. I like speed, right? I speed read parsley shit, and we're on a video format right now, but I can watch this like I could watch like this. I could watch like DAX is shit, right? Because it's like, entertaining, right? It's like people shoot, but like, as far as like, absorbing like tech knowledge in a timely format, video, no, but yeah, like, you could use like, summarize that tech to get a whole summary of the video. Or what I like to do is, I was just going with, what's the cool guy now, sonnet Claude, and I'll just, like, ask it shit. Like, sort of, like, if I was with my buddy and I was gonna, like, I wanted to learn, like, go. I'm like, Yo, can you explain like channels to me? And it will, yeah, right, oh yeah. I'll go write the code. But rather than, like, go through, like, the official go getting started, or, yada yada yada, right? I'm like, yo, like, concisely explain, you know, Go routines to me, right?

</p>
<p><strong>Ryan Burgess</strong><br />
And it does a good job. Or even sometimes, like, if you're getting an error, or sometimes I'll just slap it in there, and it's like, oh, you should probably check this, this and this. I'm like, Oh, thanks that. That just helps go that much quicker. It's not creating something for you. Like, yeah, you can tell it to go create a React component, and it will work, and it will do a decent job of it. But it's like, when you start to need it to do certain things or refine it, it starts to, it starts to mess up. Like, you're like, Dude, you just removed some of my functionality. Like,
</p>
<p><strong>Ken Wheeler</strong><br /> 
that's not good. Like that. It'll do shit like that. Or, like, my favorite is when it fills in API keys.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, my God, yes. Left their keys and their
</p>
<p><strong>Ken Wheeler</strong><br /> 
code is the funniest shit. But, like, did you try the new one yet? I forget what stupid thing they called it, but it was like, strawberry or whatever. No, it's funny. It takes for fucking ever. It's like 30 seconds, but it's like, but it actually, the progress is actually great. Like, UI, UX, right? Like, it's like, it's like, it's like, thinking, reasoning. It's like, you know, I asked it to, like, make Duck Hunt. It's like, looking up the sprites, looking up this, setting up the game loop, right? So, like, it's like, not like, it's kind of cool progress bar, like, yeah, like, the actual loading thing it's exposing to you, like, the actual steps that it's running through, which I thought was really cool. I'm like, I like that too.

</p>
<p><strong>Ryan Burgess</strong><br />
Because, like, if you and I are building Duck Hunt right now live on video, we would be talking through those like, Hey, Ryan, yeah, I'll start making the sprites all you know, here's the loop of the game that's needed, here's some of the game logic that you need. And you know, we would talk through that, right? Like, it's like, you take this, I take that. I like that progress. It's not just a like, I'm spitting some things out here,
</p>
<p><strong>Ken Wheeler</strong><br /> 
yeah, not just black box, but Right? So it did a really, really bad job at making Duck Hunt. Yeah, I can see that. I tried it with Have you tried the Claude projects? Yeah. I have not so, like, with Claude, right? It'll actually give you, like, a little preview of whatever it built. Yeah? If you ask for, like, React component, it will, like, show it like live. You're like, oh, that's fucking sick, right? So it did it, and it did a much better job the initial one, right? It had like, these birds, like shitty birds flying in from the sides. And you can, like, click them, and I'm like, can we make it duck huntier? And it's like, that word, and it's like, yeah, we're gonna, you know, all right, here's what we'll do. We'll, you know, put this here and do some ground and sky and shit. I'm like, a little bit duck huntier, right? It's like, the birds flap the bottom, and we'll have, like, the dog transition animation. And it, like, did it. I was like, Okay, I have built, I've literally built Duck Hunt, but I did it for, like, React Native,

</p>
<p><strong>Ryan Burgess</strong><br />
like, you did that with AI or without AI? No,
</p>
<p><strong>Ken Wheeler</strong><br /> 
I did that, like, 667, years ago, just a raw dog in it with, uh, I, like, stole the official sprites, nice and, like, did it in React Native. And it was fun.

</p>
<p><strong>Ryan Burgess</strong><br />
I was curious because, like, I could see benefit to testing something like I've already built this. I have an understanding of it. Now. I'm going to throw AI at it and see what happens. I do think that I code a lot faster with AI. There's times where I just want to smack it because it's like, oh my god, no. Like, you just messed that up for me. But there are things that I've learned to offload, like there are tasks, like you said, the writing the docs, you know, cleaning up some JSON, even some logic or checking errors, can actually be done fairly well. But I like what you said, it's getting rid of some of those tasks that you just don't want to do some
</p>
<p><strong>Ken Wheeler</strong><br /> 
shit that I don't feel like looking up, especially in like, your like your co pilot, or your your cursor, or your super Maven, kind of like completion scenario where it's less like asking and more like proactive, like, one of the best ways of explaining it to people is that, like, it's not smart, it's just like a better search engine, right? So like, for me, if I was like, oh, I need to implement this thing, you know, kind of algorithm, or whatever, like, and like, I don't, I don't remember off the top my head how to do that, right. Like, you know, calculate some something right. Like, you'll say, name the function. Like, you know, calculate velocity, where the right? And it's just like, like, it throws it in. So I don't have to look up the actual like formula for that. Yeah. So it's like, a phenomenal search engine if you know how to like, nudge it. Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah. Well, I mean, all right, we always joke, like, as, uh, engineers, for years, we've been saying, like, hey, we use Google. Like, there's so many things that I'm like, I don't remember how to do that. I know how to do it. But like, I'm just gonna Google that, because it's like, that will help me so much faster than trying to remember every little detail of how something's formatted. Like, regex, God, no, I don't want to remember that.
</p>
<p><strong>Ken Wheeler</strong><br /> 
I actually, I use that enough that I'm it's not that bad anymore. But

</p>
<p><strong>Ryan Burgess</strong><br />
like, regex, like, yeah, like, I do it enough. I've gotten better over the years, but there's certain ones that I just forget. Certain
</p>
<p><strong>Ken Wheeler</strong><br /> 
ones, yeah, I absolutely have to look it up or won't work, and I won't know why. So, like, I'll have, like, I'll have to defer to, like, I have this little, like, regex tester website, yeah, I can go, like, paste the thing. I'm like, Why is this not captured properly? And, like, that's, yeah, I'm like, Oh, fucking you know,

</p>
<p><strong>Ryan Burgess</strong><br />
that's where AI could probably help you too. Yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
it would sort of know

</p>
<p><strong>Ryan Burgess</strong><br />
sometimes, yeah, I'm sure sometimes it's like, has no clue. Cool. Well, let's maybe go into bit of your career. Ken, sure. How did you get into programming? Like, what? What was the moment where you're like, hey, I want to do this full time.
</p></p>
<p><strong>Ken Wheeler</strong><br /> 
So I got a new when I was a kid. I knew how to type really early. My dad had gotten a computer for the house because he he had his own, like, the construction business, and I guess they had like, accounting on it, or some shit. Like, my mom takes accounting, and they had, like, the computer or whatever, and he had the games on it, but it was like, DOS games, like, text games. Oh, yes,

</p>
<p><strong>Ryan Burgess</strong><br /> 
yes, right? So, you
</p>
<p><strong>Ken Wheeler</strong><br /> 
know everything, yeah. Like, what

</p>
<p><strong>Ryan Burgess</strong><br />
kind of games, like, were you doing? Like, story games and things like that. Well, there was
</p>
<p><strong>Ken Wheeler</strong><br /> 
one where you were, like, a big road trucker or some shit like that. I remember this one, yes, yes. And then what was the other one? Who's like, Zork, oh,

</p>
<p><strong>Ryan Burgess</strong><br />
I don't think I played that one. I know which I've heard of it, but I don't think I played that one.
</p>
<p><strong>Ken Wheeler</strong><br /> 
It's like, walk into the gondola, look around, yes. Like, what

</p>
<p><strong>Ryan Burgess</strong><br />
do you what are those games called, like, adventures, tax based adventures, yes,
</p>
<p><strong>Ken Wheeler</strong><br /> 
yeah, yeah. So it was like, that shit. And then, like, so when I get to school, right? We started having a, you know, typing class, yeah, that was, like, the first thing, like, Oh, you got to do typing class, right? Like, everyone was in typing class, and I'm sitting here, like, absolutely fucking annihilating Mavis Beacon. Like, I'm like, I know how to fucking type, right? They're like, they're like, You know what? Just do whatever you want. Just self study. Yeah, right. Love it. So, like, I got tired of playing minesweeper, and I'm, like, looking around like a beer like, what is that? What else of the 27 things on this Windows, 3.5 can I do? Right? And. Um, I don't, I don't know how that card game works. What was that Solitaire? Solitaire, yeah, yeah. I don't know how that works. So I was just like, fucking so I go and, um, I found Q basic, yep. I'm like, this is kind of cool, right? So like, uh, went in there and, like, you know, started understanding, like, while loops or for loops. And I would draw shit, right? I try to make like gradients, or like text games, or, you know, stupid, stupid shit, right? And then, um, you know, that was exciting. Then I got into like Visual Basic with like AOL, like, around AOL Time, like, we make, like punters and shit. And I would make games you were early, yes, yeah. I'd make like games of, like, my teachers get in trouble for it, and then, then I got into music, and the ladies and I stopped giving the completely about computers Fair enough. Then, then later, right? Like, on, like, tail end of music career, like, when it wasn't going to be, like, really happening, I opened a recording studio, and then, like, as part of, like, the package, the package that I would offer to people. You're like, I'd record your music and then I'd burn it to CDs. Oh, yeah, design the cover, yeah, and make you a website, right? So like that eventually failed, so I go back, and I'm, like, working construction with my dad and shit, and he fires me because I'm an asshole and I love it, yeah, yeah. No, I'm not very good at construction, fair enough. He

</p>
<p><strong>Ryan Burgess</strong><br />
did you a favor, Ken, he did the world a favor. Yes, really did.
</p>
<p><strong>Ken Wheeler</strong><br /> 
And so my mom's like, Ah, you got to get a job. So, like, back, you know, nowadays, right? Like, you know, all these online shit every back, then you take today's newspaper and you go in the back and you say, I say, like, like, web designer. I'm like, I could do that. Like, I know how to do that. So, like, I, like, lied my way. And I'm like, yeah, yeah, yeah. I got, like, three years, four years experience, if I would go down there. He's like, All right, yeah, man, let's go right. So I got hired at that place, and like, the first, like, three months, it was flash, believe it

</p>
<p><strong>Ryan Burgess</strong><br />
or not, that's where I started. I did a ton of flush, yes, so, like, I
</p>
<p><strong>Ken Wheeler</strong><br /> 
backfilled all, like, the missing info, right? Like, over, like, the first three months. And, like, you know, at the time, it was like, decent money, right? It was like, I don't know, like, four or 500 bucks a week, but, you know, I mean, like, you see kids today, kids get out of college, they're like, Oh yeah, fucking I'm cracked. I'm making like, fucking, like, $700,000 at Fang and all this shit. And like, that's not how that shit was back in the day. Like, no, no. It was like, you being like, like, the shittiest office park ever. There's like, wood panels on the walls surrounded by the biggest fucking dorks you've ever seen. Your entire you're all dorks, windows, computers are shit and flash and cold fusion and shit. Yeah, it was a different setup.

</p>
<p><strong>Ryan Burgess</strong><br />
I think my first job, like, which was, you know, a first job of doing work, you know, programming. I think it was, it was 27k 27,000 Canadian, yeah, like, you know, nowadays,
</p>
<p><strong>Ken Wheeler</strong><br /> 
that's crazy. Works out to is that more or less, or

</p>
<p><strong>Ryan Burgess</strong><br />
more or less that, like, by the hour, or whatever, like, yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
like, because it's like, like, what's like that in us? Oh, it's

</p>
<p><strong>Ryan Burgess</strong><br />
like a, it's, it's about, it depends on, obviously, on the dollar, but it's usually, like, a 30% cut difference between the US and Canada, really, so that, yeah, so it's like, that was not a lot of money. Yeah, yeah. So, like, yeah, you have these kids coming out of school being like, Yeah, I'm making 200 300k I'm like, what? That's crazy, yeah.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Can you even imagine being that age with that money?

</p>
<p><strong>Ryan Burgess</strong><br />
No, I honestly, I think you, I know you would have to Ken you and I both would probably be more in trouble at that point, making too that's money dead. I'm like, I would have bought in some fast car that probably would have got me in so much trouble. Like, it's like, things like that that are, like, yeah, it probably better off. I didn't make that much money.
</p>
<p><strong>Ken Wheeler</strong><br /> 
So when I was in music, I actually kicked out pretty good. Like, like, prior to the web stuff. Like, I don't know the music shit that I was doing, it was doing, it was like two grand a week or so, good money. Then yeah, and I did some fucking real dickhead shit. But it tell you what, I had this I had this suburban, right? Yeah, it was like this red suburban, like 1500 not like the new styles, the old style, that square fucker, right? And this shit had, like a Tempur Pedic bed in the back, on top. Oh, my God. Top of like, 15 inch, like subwoofer. I

</p>
<p><strong>Ryan Burgess</strong><br />
was just gonna say there was a subwoofer, for sure. I love it, yes. The best part was,
</p>
<p><strong>Ken Wheeler</strong><br /> 
right, like, so like, there was like, like, you didn't have like, video shit in cars. You barely had audio shit in cars. No,

</p>
<p><strong>Ryan Burgess</strong><br />
no. Video was like, you could get the like, one that came out of the dash once in a while, but it was like two or three grand for that thing. They weren't that great. I wasn't breaded
</p>
<p><strong>Ken Wheeler</strong><br /> 
up like that. So, yeah, I had like an aftermarket receiver that had, like the CD player, and had like an aux right. So I had a, I got a portable DVD player and velcroed it to the dashboard and ran that in there, in the center console. Let's date this for a second. There was a GameCube.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yes, yeah.
</p>
<p><strong>Ken Wheeler</strong><br /> 
So this was just nice. Oh, we were such fucking assholes. It was unbelievable. But

</p>
<p><strong>Ryan Burgess</strong><br />
the GameCube was actually, I remember that back in those days, was perfect. Like, a lot of people were putting them in cars because of the how small they were. I shouldn't say a lot of people, but I would go to car shows, and I would see that often, like, that was, like, something that got put it
</p>
<p><strong>Ken Wheeler</strong><br /> 
fit in the in the center console, right in there. So what can you say about these days you're gonna put the PS five pro in there?

</p>
<p><strong>Ryan Burgess</strong><br />
No, it's probably overheat, like, in a couple minutes. No, I
</p>
<p><strong>Ken Wheeler</strong><br /> 
definitely map that to the back of the seat if you really wanted to do it. Or, yeah, something like, All

</p>
<p><strong>Ryan Burgess</strong><br />
right, so you were, you moved into it from a classified ad, which, this is amazing, because, yeah, that's, I remember these days, also the music. Like, you still do music, Ken, right? Like, that's something that I see you doing lots of I've heard lots of your music. I've very much appreciated it. What's, you know, what's the passion around that? What makes you want to do music? I don't know, what kind of music are you doing? Maybe that's a better way to start it make like, trap rap
</p>
<p><strong>Ken Wheeler</strong><br /> 
music, or like, 80s action movie music. That's pretty much it.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that. I get that. Yeah.
</p>
<p><strong>Ken Wheeler</strong><br /> 
I mean, you know, anything that's cool, right? Like, some R, B, shit too. But I don't know. I always thought it was, like, a fun thing. I always used so I used to, like, like, I used to play guitar and shit when I was a kid, and we'd have like, bands, and it was always so fucking annoying trying to get like, a bunch of people together, right? Yes, like, trying to get people on the same page and play together, play the node, no one play the same songs, and yada yada. I'm like, over my buddy's house, right? And he has like, some, like, Windows 95 like, like, Nickelodeon app. Remember, you get like, an app on like a CD, and it would be like a game kind of app thing, and you just, like, fuck around in there, like, and it had like a music maker thing on there, right? Oh, playing with that. I'm like, Dude, this is the coolest, this one man band, right? I don't, yeah, have all these fucking dickheads, right? Like, I could just do it myself, right? So, like, I didn't realize that you could do that until much later, I think, for like, my like, 15th birthday or something, I asked for turntables, yeah, and I got them, and I fucking was doing like, scratch turntablism on, like, my parents records, and my parents are, like, rock and roll people, right? So it's like, the best of bread and, like, fucking Aerosmith and shit, right? So I'm not really working with like, funk records or anything yet, later on, I would get them, but I figured out that you can, like, run, like, one, the output into a tape, like a cassette tape thing, yep, and like, record it. So you'd be like, right? And you could switch the tapes to another one, and this one would play through this channel, and it'd be like, and you'd hit record on the other tape, and you just keep recording over them and over them. So, like, yo. And the best thing about it was how gnarly it sounded, right? Because, like, if you did that properly with a mixing board, right, it wouldn't have all this, but because, like, it was, like, switching tapes and record like, the noise compounded, yep, right. So it was, like, this warm, noisy, like it was, it was, it was fucking cool. But, yeah. And then just later on, it just, you know, trapped, like, like, Fruity Loops came out FL Studio, and then, then I got money for hardware, which is fucking everywhere in here. Just, I'm

</p>
<p><strong>Ryan Burgess</strong><br />
seeing it everywhere. I want to come hang out. I'm like, I want to play around. This is great.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Everything, dude, everywhere. It's everywhere. Good, yeah, that's good. So, no, I

</p>
<p><strong>Ryan Burgess</strong><br />
love that. It's like you continued that. Yeah, absolutely, I've never, I mean, I played guitar when I was a kid. I did bass, guitar, guitar, stand up, bass, like, all these different things. I always wanted to have a band. But same thing too, is like finding people who have that same, like, level of passion and want to do it, or are on the same page, is really difficult. So I love that you're like, wait, I found actual digital things that can do that for me. I remember playing around with Fruity Loops. I was no good at that. I maybe I just didn't put enough time and effort in it, but I thought the concept of it was cool. And so I love that that's like, what kind of pulled it together for you? You You
</p>
<p><strong>Ken Wheeler</strong><br /> 
know, the funny thing about it is, like, started going to record labels, right? They won, like, beat battles in New York City and shit like, so I make the label contacts, I'm going around all these labels, and people would make fun of me for using Fruity Loops. Why? At the time, it was, like, corny. Because it was not, like, yeah, they wasn't like, everybody had an npc and a Triton, and that's how, you know they're in the studio. Yep, yep. You know that was, like, the shit, right? And I'm like, All right, Fuck you guys, whatever. So I, like, get an npc and all that stuff that, uh, music doesn't work out. 20 years later, everybody uses FL Studio. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you were on something Ken and, and, like, honestly, like, going back to your, like, scratching days of like, I still very much appreciate, like, some of the like 90s, late 90s, even still had this, like the hip hop like, it just had this, like, very raw, like scratchy, kind of it warm. I loved how you said warm. It still has this, like, really unique vibe to it. And I kind of miss that sometimes, like this over, you know, perfection, uh, auto tune, all those types of things. It's not a bad thing. It's just we've kind of gone away from the like, just this
</p>
<p><strong>Ken Wheeler</strong><br /> 
raw still exists in pockets. It does, yes, one of which less, are you familiar with, the alchemist? Yes, yeah, that's, a place where you're gonna get that. Yeah, that's Bronson's records, man. I fucking love action. Bronson. He

</p>
<p><strong>Ryan Burgess</strong><br />
still has that, like, vibe. There's a few, not a few, like, Nas, still, oh, I mean, Nas, he's awesome. Like, still, so good. But, like, they still have that raw sound, which I very much still appreciate. I appreciate some of the new stuff, but it's like, there's still something special about I
</p>
<p><strong>Ken Wheeler</strong><br /> 
didn't like it for a long time. Like, I liked, like, New York rap for a long time. Like, it's like, like, when, um, when all the like, crunk shit was first going on. It was very much a 50 cent man.

</p>
<p><strong>Ryan Burgess</strong><br />
Ah, nice, yeah. And then it grew on me.
</p>
<p><strong>Ken Wheeler</strong><br /> 
I was like, Oh, this is shit.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, you, I mean, you grew up in New Jersey, right? Yeah. So close to New York scene. Yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
northeast focused. But you know, yeah, yeah, if you ever listen to, like, trap in a strip club, then you just understand it's just like, you're like, oh man. Like, no, the base really is a force. The

</p>
<p><strong>Ryan Burgess</strong><br />
whole base has some power. It does. It changes the whole vibe. I mean, even getting into that suburban with like, some big, 15 inch subwoofers, like, there is a vibe to that. Like, it truly is, like, I don't know that I can go back to that in my SUV now of having big subwoofers, but, I mean, I still have, and it's great I
</p>
<p><strong>Ken Wheeler</strong><br /> 
did so, like, yeah, yeah. So, like, like, I think my current car is the only one that doesn't have a subwoofer in it. Okay, the all the prior ones were jeeps, like, uh, like, four door Wranglers, and I put a sub in there. Not awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I, like, I said, I do have a sub. It's not a lot of them come factory. Like, my system in the car is pretty amazing. But, like, it's, I like, that it's there. I mean, it's just not as big as what I think about when I had my own car as a teenager, where it's like, oh yeah, let's, like, put all the subwoofers in and just, like, be so ridiculously loud, yes, like, where my trunk was vibrating and like people around me are probably as an idiot, I still do, but I don't know that I can, like, drive my kids to school bumping that loud I could. I mean, I guess I see that, Ken, I'm like, I know that you probably could. Yes, you would
</p>
<p><strong>Ken Wheeler</strong><br /> 
not willing to do that to the Land Rover.

</p>
<p><strong>Ryan Burgess</strong><br />
That's fair. You could probably fit a nice, smaller one in there. You don't want to give up a ton of trunk space. Could, but
</p>
<p><strong>Ken Wheeler</strong><br /> 
it's a lease, and, like the Jeep, you could just buy out if you really wanted to. I'm not gonna buy a man. Think about the maintenance on that thing. The chip falls out of warranty. You're asking for trouble.

</p>
<p><strong>Ryan Burgess</strong><br />
That is fair enough. So Ken, you've been, you've been in the, like, JavaScript ecosystem for years. Like, I mean, even talking like, we started in Flash days, and then it became JavaScript. I'm curious. Like, what are some of the changes we've already mentioned some of them here. But like, what are some of the changes in the community that you've seen? What how do you feel about the current state of our JavaScript community?
</p>
<p><strong>Ken Wheeler</strong><br /> 
It's a whole new guard. Think when, um, when jQuery is on the way out, I got in very early on the React thing, right? Yes. So

</p>
<p><strong>Ryan Burgess</strong><br />
did I actually, yeah. So, like, I
</p>
<p><strong>Ken Wheeler</strong><br /> 
was like, part of, like, rebuilding Walmart with with React, which was, like, one of the the first they were early. Yeah, they were super early. He was like, damn. Like, Airbnb and, like, yeah, maybe a couple other places. But I got in on that. And then as a result of that, got to do a bunch of, like, low hanging fruit, open source, and went and started speaking places and doing all that shit, right? So you had like, that whole era, right? But I feel like that's largely that whole era that came after the jQuery area has largely ended, and like, now it's kind of like more of like a next JSE era kind of thing. Yeah, right. And that's all you hear about. It's a lot of, like, YouTubers and shit. And I don't mean that like derogatorily, but like, you know, when you speak, you see, like, the crop change out, right? So guys that you speak with not there anymore. A lot of the new guys love them, but the but they new guys, right? It's not, yeah, it's not the old guys. So you have, like, a lot of the YouTube characters right there. They're out and about, you know, a lot of the vercel Shit, you know, this big push for, like, server running and react, got competition, right? Like, there's like, re like, first of all, like, Laravel is a the shit and be huge. A ton of people use it, you know, view is huge. For a while, there it was just like, you know, Angular very much, had a little period pre react, and then it kind of held and stayed right. But like, react was like the paradigm shift. But you. Like, a lot of these newer things are now mixed in there, and they're viable. You know, people like, who just like, straight up write svelte, or people who write flutter, or people who write view all the time, and they write view with Laravel and like that, right? So it's like a it's more diverse than when everyone was just like, all in a React, and everything was like React. And if you weren't react, you were Angular. And if you weren't Angular, you know, you were just like Jake, or your backbone, or whatever the

</p>
<p><strong>Ryan Burgess</strong><br />
you were stuck on the old stuff that you're like, I want to be on reactor Angular. Like, that's usually, typically what had happened in companies where they just hadn't upgraded. And I agree with you, Angular. Angular had, I think it's, I don't know if you've paid attention to it, like in the last few years, but it's gotten so much better. But when it first came out, it was, like, a big shift. It really, truly was from, like, those were the days of, like, backbone to Angular. Like, Angular was kind of the one that popped up after, and it did have its like stage for a bit, but it didn't last long. I think Angular had some things to work out. Like it was, you know, it wasn't the easiest to debug. It was, you know, there's certain things that just weren't great with it, but I've been impressed with it since I don't write a lot of Angular, I'm still on the React side of things. But it, I was impressed with it over the
</p>
<p><strong>Ken Wheeler</strong><br /> 
years. I gave Angular a fair shake. Yeah, I didn't have anything to work on with it professionally. That's fair. Some guys were asking me to evaluate it, because it was like, you know, they dropped the JS and now it was Angular, but they'd come out with a bunch of these, these things like to change detection, and that was all RX and everything, decorators and shit like that, which is very cool. It felt almost like Swifty. I like that a lot. I spoke at an angular meetup, and I was like, this is, like, what I thought of Angular from, like a React guys perspective. And I built a slideshow software in Angular to give the talk with. I like that, and I kind of talked about it and shit. And, you know, it was fine, you know, the thing is, is like, I don't know. I feel like, if you do this shit long enough, it doesn't really matter, you know, like, I went and tried a Laravel project the other day, and I wasn't like, Oh, no. How does this work? You know, like, you're like, Okay, well, yeah, MBC type shit. It's not like, it's not crazy. Oh, composer, that's their package management. All right. You know, I used to do cake PHP back in the day. I know what this does, right? Yeah, I remember cake. PHV, yeah, yes, yeah, yeah. So it's, you know, it's, I don't know. I feel like you can swap the tools out pretty easily. You

</p>
<p><strong>Ryan Burgess</strong><br />
can. I mean, I've written Python many, many years ago, but even recently, have started to write some Python for certain things that I'm doing. And I was like, oh, oh, yeah, okay, this makes sense. Like, there's, there's a lot of differences, but, like, a lot of similarities between even our JavaScript ecosystem that I was like, I mean, I can figure this out. It's not that hard. Yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
yeah, no. I mean, it's a, oh God, the fucking package management

</p>
<p><strong>Ryan Burgess</strong><br />
that one drives me nuts. Like, I yeah, don't even get some like, Oh,
</p>
<p><strong>Ken Wheeler</strong><br /> 
it's just, like, a lot of, like, the environment mismatching drives me out of my fucking mind. Like, I'll try and do, like, some AI things, especially, I like to run things locally. I don't like I, I do not like being at the whim of, like, a service or some kind of thing like that, right? So, like, I like to do things locally, if possible, yeah, and you try and get these things running locally, holy shit. Like, it's like, oh well, you know this thing, and your coot is all fucked up, and I'm like, this isn't flask.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, man. But yeah, so by the way, is this drinking podcast?
</p>
<p><strong>Ken Wheeler</strong><br /> 
It is you can have drinks. Are you drinking? No,

</p>
<p><strong>Ryan Burgess</strong><br />
no, not right now. Okay, 11am for me. Yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
I haven't had a drink in five days. Good for you, yeah, but

</p>
<p><strong>Ryan Burgess</strong><br />
what is your what is your drink of choice? We didn't even get to that. So what's your drink of choice? Basil. Ha, what do you got here? I don't know if I've had that one before. Yeah, it's bourbon. Yeah, it looks familiar. But, and I mean, I'm a whiskey guy, I love whiskey. Yeah, no. Whiskey for you. No. I mean, this is why. Honestly, when we started front end happy hour for, I don't know this many years we've been doing this, but when we had done it originally, it was always in person. Right until the pandemic hit, it was like, always, always in person. And so it was awesome. Like, we'd have guests on and be like, what's your favorite drink? And like, we'd make sure to have that. Or, you know, it was always great. You could just kind of share drinks around the table. It was awesome. But it's a lot harder virtually. I can't, you know, other than, I guess, I could just put in an order for some whiskey, right? Now, I
</p>
<p><strong>Ken Wheeler</strong><br /> 
do it some. I do it sometimes. So that's what I did. I was like, I was like, well, if it's, like, a drink podcast, I'm like, I fucking, I have to, I think it's some whiskey, right? So, like, I went and, like, DoorDash, some whiskey.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that. That's
</p>
<p><strong>Ken Wheeler</strong><br /> 
so good. Like, at like, noon, right? Like, the guy drops it off to me. He's like, Yeah, he

</p>
<p><strong>Ryan Burgess</strong><br />
totally gave you that look like, what do you do? I mean, it's Friday. It's like, you know, yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
me a fucking break buddy. But yeah. Like,

</p>
<p><strong>Ryan Burgess</strong><br />
don't judge me.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Yeah. So. No, dude, I'm afraid of how hard this is gonna hit not drinking for five days, then hop back in. Ooh. It's it's gonna hit his way down, dude. It's gonna taste crazy.

</p>
<p><strong>Ryan Burgess</strong><br />
I went like, uh, I think it was almost an entire year without drinking and having alcohol back in the system. You're like, Whoa, that my tolerance is no longer there. Yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
yeah. I mean, for me, it's like a, it's like a weight loss thing. So it's not like a, it's not like, I'm hopping off the wagon for good. Yeah, it's, it's weird, because, like, after a while there, right? It tastes like, pretty normal, yeah. And then you don't for a little while and you taste it, you're like, Ah, you throw off, like a cat, you don't throw up. You're like, Ah, right? Like, same thing with coffee. If you don't have coffee for a while, then you have coffee like

</p>
<p><strong>Ryan Burgess</strong><br />
it, and then it's so funny, you get so dependent on it too. Like, not that like the alcohol, but coffee is like, if I don't have it in the morning, I start to have, like, a headache here, I actually, and they don't,
</p>
<p><strong>Ken Wheeler</strong><br /> 
you don't get the headaches. No,

</p>
<p><strong>Ryan Burgess</strong><br />
oh, I'm so jealous, man. I feel like I have a lined off,
</p>
<p><strong>Ken Wheeler</strong><br /> 
or, like, UK, right? Like, coffee is not like first or, if they do, it's like the espresso bullshit, right? So it's like, it's not like a proper drip percolator coffee kind of thing. But, like, yeah, I remember, you know, kind of in England, like a billion times. But when you go there, right, like, in the morning, right? Like, tray of tea and shit, I'm like, What

</p>
<p><strong>Ryan Burgess</strong><br />
the fuck? I'm like, where's my coffee? Yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
I'm like, All right, whatever. But, like, a lot of the time, like, I'll, if there's a time difference, like, I'll wake up way too early to even get coffee, especially on the West Coast, West Coast thing, right? Yep, I think so. Or maybe it's the other way around. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
a lot earlier than you are. Ken, yeah, yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
I think yeah, I'll wake up in the middle of the fucking night, right? Compared to, like, here, right? And Then There's just nowhere to get coffee. And that happens.

</p>
<p><strong>Ryan Burgess</strong><br />
So your pepper, your body ends up, yeah, your body kind of is like, All right, well, I gave up coffee. We're good. Let's keep going. It's
</p>
<p><strong>Ken Wheeler</strong><br /> 
like, you know, coffee's not an option, so I guess I'll just, like, sit here in bed and drink water and stare at the fucking wall for two hours because it's 330 in the morning in Chicago.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, there's times that I actually like those moments where I like to take photos, like, do photography. And so there was times where I'm like, Oh, I guess I'm catching the sunrise because nobody's around. There's nothing to do. And some of my favorite moments have been when I've been traveling alone and just been like, it's 4am like, what am I supposed to do right now? And I'll go out for like, three hours taking photos and go eat my breakfast and be like, at the conference or work or whatever I was doing. And it was just fine, because you're jet lagged, it's like, I needed to go do something. And so that man of the night, was a good time. Yeah, exactly. And it's, it's kind of a cool way to see a city and things that you haven't seen in London.
</p>
<p><strong>Ken Wheeler</strong><br /> 
I went to in London, like, three in the morning. Like, yeah, the entirety of London.

</p>
<p><strong>Ryan Burgess</strong><br />
How was it? It was amazing. And I could see that actually. And
</p>
<p><strong>Ken Wheeler</strong><br /> 
it was like, crisp, like, a leather jacket on, like, just walking around.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh man, it's fun. That's good. Oh yeah, the music. Music's a good vibe, too. Just kind of walk around. I
</p>
<p><strong>Ken Wheeler</strong><br /> 
was listening to your shit when I'm over there. Like, Stormzy, nice UK rap.

</p>
<p><strong>Ryan Burgess</strong><br />
Just put you in the like mood of like, I'm in London right now.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Yeah, I catch you, yeah, I get you right, right where you need to be. Vibe wise,

</p>
<p><strong>Ryan Burgess</strong><br />
I like that. That's good way to do it, bruv. And so you kind of have this two track of, uh, well, construction worker was maybe three tracks. Construction worker didn't work out. Music was like,
</p>
<p><strong>Ken Wheeler</strong><br /> 
still, there so many things. It was like a assistant butcher and, oh,

</p>
<p><strong>Ryan Burgess</strong><br />
my God, wait, wait, let's tell a marketer, I've done this too. All right, we got to go the butcher stuff. Here I did. I was a butcher for a while, too. Really, my dad, yeah, my dad owned a grocery store, which then turned into more of like a, you know, butcher shop completely had always been a butcher shop, but then it just pivoted to that. So I spent years helping him and doing that and learning how to be a butcher, and I still can do that. If I really wanted to clean the sauce, I had to clean the saws. I was cutting steaks. I was cutting mostly like beef and cows. Sometimes people would bring deer in, and I'd have to do, like, deer meat and things like that. And
</p>
<p><strong>Ken Wheeler</strong><br /> 
so my exposure these days like the deer hunt. So, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
so are you doing the deer cutting yourself?
</p>
<p><strong>Ken Wheeler</strong><br /> 
Not? Most of it, no, no. Mostly just the initial stuff. I have a guy that's fair who does a really nice job. I mean, it's

</p>
<p><strong>Ryan Burgess</strong><br />
one of those things you're like,
</p>
<p><strong>Ken Wheeler</strong><br /> 
No, yeah, like they, you know, it's lean, right? So you have to, like, mix in, like, the Angus fat, yep, which I don't have access to, right? So

</p>
<p><strong>Ryan Burgess</strong><br />
that's fair, yeah, it's, like, all those little extra steps. So, I mean, that's the same. If I was a deer hunter and had that, I would wouldn't be doing it myself either, because I just don't have those things, but had a whole butcher shop growing up, and that was there. So yeah, that's cool. And telemarketing, I did that too. I want to blow my brains out. That is not fun. It's it's not a fun thing to do. But I think I did that during school, which kind of just kept me going through it. So it's like
</p>
<p><strong>Ken Wheeler</strong><br /> 
boiler room stockbroking, too. What boiler room? No. I didn't watch a movie boiler room.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't think I've seen that. No, oh, it's
</p>
<p><strong>Ken Wheeler</strong><br /> 
like, you know, you it's essentially telemarketing for like, like, boiling room stock broking. That's pretty cool. Yeah, you'd have to see, you'd have to watch the movie to even understand the concept. Yeah, I'm like, I looked up

</p>
<p><strong>Ryan Burgess</strong><br />
the movie, and I was like, yeah, that doesn't look familiar. So I'll have to go watch that
</p>
<p><strong>Ken Wheeler</strong><br /> 
bunch of degenerates in an office talking about just shit on the phone. It was just fun. That sounds

</p>
<p><strong>Ryan Burgess</strong><br />
good. I like that. Yeah, I guess like music and Cody has kind of, yeah, been been the thing. If you weren't doing software engineering, would it be full time music, or would it be something completely different?
</p>
<p><strong>Ken Wheeler</strong><br /> 
Oh, I have way too much lifestyle creep and bills, I'd have to really figure something out. Yeah, if I wasn't doing software engineering for whatever they say, like, AI put me out of a job, yeah, right, I would probably try and figure out how to develop a bunch of passive income, right? Like, I'd probably buy up, like, a couple brick and mortar things like laundromats or some shit like that. Like, do, like, content plays shit, like, you know, that kind of thing. Like,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, yeah, just a mix of things to kind of pay the bills, yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
yeah. That makes sense. Absolutely, just become a hit man.

</p>
<p><strong>Ryan Burgess</strong><br />
Man, that would be an interesting job. And just in general, like, one, how do you even go about being a hit man, like, how do you get started in that? I
</p>
<p><strong>Ken Wheeler</strong><br /> 
feel like you can't take, you can't take fucking walk ins, right? That's the problem. No, right? No, you sit here. You take walking you're trying to do it on the deep web with Bitcoin and shit. You know, that's a recipe for disaster. You need to get affiliated with a criminal organization, and at that point, then you can safely pursue this. Can just be some fucking Bitcoin Hitman killing people's wives and shit, because that's, you know, that's like, unethical as fuck. Yeah, I

</p>
<p><strong>Ryan Burgess</strong><br />
know. I definitely think, yeah, you're in a mob. You're like, inside baseball, you know, I get that too. It's like, the criminal organization. It just kind of fits. But you can't even be safe doing this stuff. Like, obviously, you know, police and suffer going under. But, like, that's a hard job to do with all these cameras everywhere. And then so cameras. But then also, did you hear about the like, FBI, basically making their own phone and phone service that was, you know, for criminals, and then they were just monitoring the criminals. Like, the criminals were legit. Like, worldwide, we're using this phone. I forgot what the name of it
</p>
<p><strong>Ken Wheeler</strong><br /> 
was. Oh, no, I know, yeah. Like, they made it. It was supposed to be, like, the criminal phone, yes. Anyway, they were the ones who made

</p>
<p><strong>Ryan Burgess</strong><br />
it, yes. And like, they were totally monitoring it the entire time. There's all these, like hits going down, everything and and like they're just sitting there, like, getting all this information. Like, that is wild to me, right? Like, you're like, I know how to play the game. Like
</p>
<p><strong>Ken Wheeler</strong><br /> 
one of like those badge on the net cops, right? Like we're just hanging

</p>
<p><strong>Ryan Burgess</strong><br />
like you still get to wear your clothes, and you just kind of throw it on sunglasses in the badge, I could see this, yeah, like that. All right, that style
</p>
<p><strong>Ken Wheeler</strong><br /> 
of policing back. You're into it. Feel like I'd just be a shoe in all right?

</p>
<p><strong>Ryan Burgess</strong><br />
This maybe leads me into a good question for you. Is like, you definitely bring some great energy, I would say, like, some nice, wild energy to the JavaScript community. How do you feel your personality influences your approach to like, coding or community building? Like, this is just, this is just you, and this is how it is. Or do you think about it? It's
</p>
<p><strong>Ken Wheeler</strong><br /> 
very much, pretty much, just how I am.

</p>
<p><strong>Ryan Burgess</strong><br />
I figured, I
</p>
<p><strong>Ken Wheeler</strong><br /> 
mean, for the most part, yeah, you know, I mean, but it's like, Yeah, it's funny. When people meet me, they're like, Oh, you're not. You're not fucking kidding. I'm like, no, no, no, I'm not. But I think that there's actually a benefit to that. I think there's the grave, like, like, trust involved. Like, I'm not trying to sell you fucking courses, right? I'm not trying to pitch my sass. You know, there's, you know, I'm not, I'm not hiding behind professionalism or anything. You know, I'm just, I'm just doing it for fun. Like, like, a psychopath.

</p>
<p><strong>Ryan Burgess</strong><br />
I actually respect that a ton Ken, like, I think there's something to just be yourself and be authentic and just be like, unapologetic. You're like, I get to be myself. And if you like it, fine, if you don't fine, like, it's, I'm being me. And to even what you said is, like, not worrying about the corporate, you know, side of things, or any of that, or,
</p>
<p><strong>Ken Wheeler</strong><br /> 
I mean, you just, I get on a call, like, behave myself, absolutely. I get that. But like, you have these guys who, like, don't

</p>
<p><strong>Ryan Burgess</strong><br />
turn it off, like, the salesy side, or the like,
</p>
<p><strong>Ken Wheeler</strong><br /> 
I mean, there's devs mostly like, say, like, like, like, base dev guys, like, they're in LinkedIn mode all the time, right? Let's connect. I'm like, it is 10 o'clock at night in a strip club. Fuck you talking about

</p>
<p><strong>Ryan Burgess</strong><br />
Connect. Let's pull up our LinkedIn and let's connect. Yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
touch base and shit. You know, stay connected. I'm like,

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, 10 o'clock at night is not when you're pulling up LinkedIn. That's fair.
</p>
<p><strong>Ken Wheeler</strong><br /> 
One thing that I don't really. They shoot for. But is a, I guess, like an effect of it, right? Is that, you know, I think traditionally coding, especially like post wood paneling era, has been very much like a monoculture of, like, you know, like Silicon Valley dorkery For the most part, like, you're, you're, you're all birdie, well, actually, type motherfuckers, where, as you know, I've had people that come up to me and they're like, they're like, Yo man, like, you fucking, you know, made me like, I could, like, actually do this. Because, like, you know, we're similar type of people, and you could, and you do it. So again, like, I was like, you know, if I don't know if I'd fit it, because, like, you know, for all the shit that they talk about, like, inclusion and shit like that, if you know, they if you're not like them, though, they'll fucking give you a hard time for it, a lot of the time, extremely exclusive, ideologically, on a lot of different things. That's actually

</p>
<p><strong>Ryan Burgess</strong><br />
not far from the truth too, right? Yeah. Like, if it's, like, if you're not being yourself. Like, the whole part of inclusion is being able to show up yourself at work, and if you're you know, and there's a balance, I mean, like, like you said, I can turn off and be business side. If I'm like, 10 o'clock at night at a bar, I'm going to be different person. Like, absolutely. But being able to bring more of that self in the workplace, I think, is that's inclusion and just being able to bring yourself, yeah, and
</p>
<p><strong>Ken Wheeler</strong><br /> 
you know, that's not just, like, you know how you're acting and what you're saying, but that's like, your creds as well, right? So, like, if people had, like, non traditional backgrounds, you know, they're self taught, or, like, previously incarcerated, things like that, right? Like, that's starting to become more okay, whereas, like, you know, there's still some circles where it's like, it's like, well, which part of Stanford did you go to? Yeah, and dorks.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I like that too, because, like, there's, I remember early in my career, of, like, you know, I have a fair amount of tattoos and like that. Definitely, I think we've gotten better of over the years, that that's more accepting, but I remember getting some weird pushback, or just weird feelings around it. And if you see me speaking on stage, I'm wearing a t shirt, I'm going to be showing tattoos, because I think it is just more like, why does that matter? Like, let's just be more inclusive, to let people show up who they are. And like, to me, tattoos are not offensive. I mean, I guess if I had something like, very offensive tattoos, that might be different, yes, yes, like, but it's like, that's just, that's stigma
</p>
<p><strong>Ken Wheeler</strong><br /> 
on certain things, absolutely, you know. And like, I feel like Tech's getting better for that. Other places, yeah, you know, they're like, you know, certain it's weird because, like, they enforce it that kind of shit, like, for way lower paying jobs, right? Like, you'll, you'll work at like a, like, a doctor's office. It'll make you wear like, long sleeves. Yes, work at like, subway, and they'll make you wear like, long sleeves. They're like, what exactly do you fuck do you think is going on here?

</p>
<p><strong>Ryan Burgess</strong><br />
It's like, come on. Or, like, I've seen, like, people have to, like, cover I don't know if this is still a thing, but years ago, maybe when I was like, younger, like a teenager, or something, that people would have to, like, cover up their piercings, like, they would have to, like, put tape or something on their ear, like, or take them out, and it's like, what? Like, why? Come on?
</p>
<p><strong>Ken Wheeler</strong><br /> 
Yeah, it's crazy. You wanna hear a funny thing? I don't have a scene, yes. That's, I can see that surprising. I don't know.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know. I don't
</p>
<p><strong>Ken Wheeler</strong><br /> 
know. Yeah, no, no, single tattoo.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, for me, I think it's like, if you're gonna have tattoos, have lots of tattoos. You know, it's like, you don't need just one, just, you know, have lots. And so I think there's people out there who are like, Oh, I have one. I have that one, like, little one that I got when I was 18 or whatever, 21 kind of things celebrating when I was little. And
</p>
<p><strong>Ken Wheeler</strong><br /> 
you're like, committed going to, like, artists with, like, waiting periods. And, like, my brother's a tattoo guy. He's got tattoos everywhere, sick ones too, from SICK artists, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
And it's, it is a, it's a waiting man. Like, you're not, you're not, like, walking into the shop, like, I feel like getting a tattoo tomorrow. It's like, No, you're planning that you take
</p>
<p><strong>Ken Wheeler</strong><br /> 
time. This guy's going to be in New York in October. And, Yep, yeah. And

</p>
<p><strong>Ryan Burgess</strong><br />
it's, it's a, it's an appointment that you've put in the time for. It's
</p>
<p><strong>Ken Wheeler</strong><br /> 
a, I'm afraid of needles. I don't like them. I don't either man. And B, you know, I'm like, a big, bald headed white guy. If I get tattoos, you know, might

</p>
<p><strong>Ryan Burgess</strong><br />
look more scary, yeah,
</p>
<p><strong>Ken Wheeler</strong><br /> 
yeah, yeah. That's very silly. If I get, like, I don't know, I'm like, I'm like, Well, I'm like, what would I even get? Like, like, a cross or a deer and like, suddenly you just like, Look racist. Hell. I'm like, I'm not gonna get that shit. Like,

</p>
<p><strong>Ryan Burgess</strong><br />
that's fair. Um, yeah, because it's like, you have to watch for that kind of stuff too. You know, before we end. I'd be curious, if you were to give advice to your younger self just starting in tech, what would it be?
</p>
<p><strong>Ken Wheeler</strong><br /> 
Godspeed, I love it. Just say, good luck. And yes, you know, I don't know. I don't know. I honestly don't I think, I think my younger self was already on the. Half that was required. It's really just, like, it's at one point in time in my life, I decided, like, it's time to just show up, right? Like, yeah, people say that, like, you know, the half, half the battle is just showing up, and half the battle is very much just showing up. And, you know, it's not like, like getting there on time, necessarily, but like showing up doing the work. Just like, show up and do your fucking work, right? And then the other half is luck. So, yeah, that's hard. I'm not sure there's anything I could tell myself that would nudge luck any which way. But

</p>
<p><strong>Ryan Burgess</strong><br />
if you think of luck as like, almost like, winning the lottery, it's like, if you don't play the lottery, you're not going to win, right? Like, if you're if you're not playing it, but if you're playing the lottery, yeah, you might have a better chance of winning. So showing up and doing the work, and like, you protect that's where you're gonna have the luck. It's like, you actually have to put in the work if
</p>
<p><strong>Ken Wheeler</strong><br /> 
you just show up and do your work. I mean, that's, that's more than a lot of people. It's fair enough, even in our professional stuff, right? There's a lot of who, like, don't get the work done, which is, like, weird, right? Like, you're like,

</p>
<p><strong>Ryan Burgess</strong><br />
your, your one job is to get that work done and like, but sometimes people just don't do that either. And I think that's a huge miss, absolutely. So
</p>
<p><strong>Ken Wheeler</strong><br /> 
yeah, if you just show up and get the work done, I mean, I don't know. I'm trying to dig deep. What would I What would I tell myself, don't spend 10 years on the internet making yourself unmarketable.

</p>
<p><strong>Ryan Burgess</strong><br />
I would argue you've made yourself marketable in a sense, though it's a brand,
</p>
<p><strong>Ken Wheeler</strong><br /> 
for sure, yeah, but you know, is it like a, like a Google friendly brand?

</p>
<p><strong>Ryan Burgess</strong><br />
Do you want it to be, though,
</p>
<p><strong>Ken Wheeler</strong><br /> 
not right? Like, I

</p>
<p><strong>Ryan Burgess</strong><br />
think sometimes we being authentic too, like when you are being truly authentic to who you are. Yeah, maybe you don't fit in at Google. Maybe that's okay, Ken, because you wouldn't fit there, you wouldn't enjoy it, necessarily. I could be wrong, but that's like my thinking too. There's
</p>
<p><strong>Ken Wheeler</strong><br /> 
a plus and there's a minus to to bring in your whole ass to work, for sure. Let's

</p>
<p><strong>Ryan Burgess</strong><br />
hear it. What's the what's the minus, or what's the plus?
</p>
<p><strong>Ken Wheeler</strong><br /> 
Let's Well, I mean, I mean, I mean, the plus is right. Like, funny people know, you and shit, and, you know, the authentic shit, right? But, like, the other thing is right, like, like, oh, is this fucking guy, like, a liability? Yeah, you know, if you're like, Mr. Like, squeaky clean, right? Like, a lot of the places would be like, Oh yeah, let's fucking bring him in, have him sign my kid, right? Like, me, it's like some HR keep an eye on this fucking guy.

</p>
<p><strong>Ryan Burgess</strong><br />
Is he gonna go on some podcast and say something that he shouldn't say? Go
</p>
<p><strong>Ken Wheeler</strong><br /> 
say some crazy shit. I'm really not like, I

</p>
<p><strong>Ryan Burgess</strong><br />
don't say that crazy shit. No, no, definitely not.
</p>
<p><strong>Ken Wheeler</strong><br /> 
Sometimes I say, I've said some crazy shit, but, like, nothing that crazy. Like, fair, fair. There's developer crazy. Yeah, there's

</p>
<p><strong>Ryan Burgess</strong><br />
a like, line, you know, guys would be like, Oh yeah, you're
</p>
<p><strong>Ken Wheeler</strong><br /> 
so crazy. So, yeah, you're like, a fucking tough guy, or whatever, like that. Like, like, I'm like, like, a bitch, compared to the rest of my friends who are, like, not in tech, like, I'm like, right? Like, these guys, like, you know, they're like, What are you doing all day, fucking tapping on the computer.

</p>
<p><strong>Ryan Burgess</strong><br />
You're like, I'm exhausted, you know? And they're like, You were sitting on your ass, typing on the computer. You're like, Yeah, I'm exhausted. But it's a different type of power here, smooth
</p>
<p><strong>Ken Wheeler</strong><br /> 
handed bastard, right? Yeah, it's, that's, that's another thing with the with the monoculture, right? It's like, yeah. Like, they're not hanging out outside of those circles very much, right?

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely, yeah. I mean, I live in, I live in Silicon Valley. It is, like, it is hard to meet people that don't work in tech or somehow involved this time. Weirdest
</p>
<p><strong>Ken Wheeler</strong><br /> 
thing, like, coming from somewhere where, like, it's not like that, yeah. And then, like, you go there and you're like, What the fuck. Like, there's, like, there's like, a billboard for Dropbox, yes, like,

</p>
<p><strong>Ryan Burgess</strong><br />
or drop. Our like, our billboards are hilarious,
</p>
<p><strong>Ken Wheeler</strong><br /> 
dude, all these tech billboards and like, you go, like, you go to Starbucks and start coding. You're not the only guy coding.

</p>
<p><strong>Ryan Burgess</strong><br />
No. Like, you look at someone else's computer and there's an editor open. Like, pretty much everyone around you has an editor open.
</p>
<p><strong>Ken Wheeler</strong><br /> 
I know, for the first time I walk through Palo Alto, right? There's like, people on, like, those segways, right? Like, you look up and there's like, there's like a second floor of like, like glass windows. There's all these dudes sitting there, stand up desk, typing and shit and like this. There's like an iPad on, like a robot coming around, like, some dudes, I'm like, What the fuck is going?

</p>
<p><strong>Ryan Burgess</strong><br />
Where am I like? What
</p>
<p><strong>Ken Wheeler</strong><br /> 
is this place like? It's, it's

</p>
<p><strong>Ryan Burgess</strong><br />
a different place, that is for sure. I remember when I first moved here, I was like, what is it like? In some ways, there's the there, again, pros and cons of it, that's for sure. Ken, it's been so good talking with you. Where can people get in touch with you? Twitter,
</p>
<p><strong>Ken Wheeler</strong><br /> 
Twitter. Yeah, still. Can I go Twitter? Wheeler, on Twitter yet? That's pretty much it. I don't really answer emails all the promotions for shit, so it's like, Twitter's like, the best place sliding the DM like, Twitter, like, that's, that's, that's how you're gonna get responded to, absolutely.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, thanks so much, Ken. It's, it's been a pleasure, as always. Thank you so much for spending the time with me and. Hanging out and just Yeah, telling us a lot about your background, likewise,
</p>
<p><strong>Ken Wheeler</strong><br /> 
thanks. Thanks for having me. You.

</p>
`;
        return transcript;
    };