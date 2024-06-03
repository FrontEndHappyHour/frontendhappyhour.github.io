module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. So there's this thing, AI seems like a big subject that keeps coming up. So we've mentioned it on various episodes. And now we're just gonna go deeper on it. So we're joined by Nick to talk with us a little bit more about AI. Nick, can you give a brief introduction of who you are, what you do and what your favorite happy are beverages. 

</p>
<p><strong>Nick Heiner</strong><br />
I work at fixie, which is a startup working on AI developer platforms. Previously, I was on the Netflix Smart TV app with a bunch of y'all. And before that, I worked for the IRS for a strange reason. And my favorite Happy Hour drink is Everclear, which is what I'll be drinking tonight. 

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Yeah. Also sometime we almost need to get into this government IRS type jobs. 

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, I saw your didn't episode A while ago about, you know, Public Tech. That was with the US digital service, which is, you know, people from big tech companies trying to make the government better. Just one one a thimble full out of the ocean at a time. 

</p>
<p><strong>Ryan Burgess</strong><br />
I'm sure you have some interesting stories there. Yeah. Awesome. Well, let's also give introductions of our panelists today. Stacey want to start it off? 

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a principal front end engineer at Atlassian. 

</p>
<p><strong>Cole Turner</strong><br />
Hi, everyone. I'm Cole and I am a software engineer at Netflix.

</p>
<p><strong>Jem Young</strong><br />
Jem Young engineering manager at Netflix. Hello, I'm Augustus and I'm a software engineer at Twitch. 

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a engineering manager at Netflix. In each episode of Front End happier podcast, we like to choose a keyword that if it's mentioned on the episode, we'll all take a drink. And because we are talking AI, and we are tired of picking keywords, we leveraged AI to pick the keyword for us. And what did AI decide today's keyword is? 

</p>
<p><strong>All</strong><br />
Learning? Learning. 

</p>
<p><strong>Ryan Burgess</strong><br />
So with something like AI, I'm pretty sure the word learning is going to come up at some point in this episode, so we will likely be having some drinks. Well, let's dive into the topic. A big one. For me, that is probably an important one to that to discuss is what's the difference between AI and machine learning? And I don't know if that counts. Does that count as a keyword? Probably so yes, cheers, y'all.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, that's, that's an easy answer. If something is impressive, and magical, to us, it's AI. And if it's something we expect computers can do, it's machine learning. You know, I mean, this is sort of like a shifting goalposts thing for a long time, like people used to say, a computer will never play chess, that is the sign of true human intelligence. And then like they did it as like, it's actually not that hard. And now we just completely take it for granted. So that's certainly the cheeky answer. The more serious answer is, today, when people say AI, they're referring to large language models, predominantly, this technology from the past few years transformers and the new types of capabilities that that entails, which specifically is sort of like general intelligence, in a way that you're the Netflix recommendation algorithm, we wouldn't call that AI, because it can only recommend videos to people. Whereas GPT for can actually do a wide range of general tasks.

</p>
<p><strong>Cole Turner</strong><br />
When you say that, what do you mean are some of the new capabilities that we're seeing?

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, so the things that people have been using these models for most sort of near term, are their ability to understand structured or unstructured data, and to generate, and sort of synthesize things like text, or code or images or videos or 3d models. You know, again, if you have compared to the previous paradigm of like the Netflix video recommendation algorithm, you have to feed in very structured data that's going to operate on that. Whereas this, you can just feed into arbitrary freeform text. And for the first time to, you know, a huge range of engineers, you have the ability to have like understanding of natural language in your app that previously would have required like really advanced ml research.

</p>
<p><strong>Jem Young</strong><br />
I still like your magical answer. That might be the best best one I've heard on AI so far.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, yeah. I mean, you know, the other the other like, there are a lot of people who are trying to like really push it and make it do things. I think this is where some of the criticisms of hype come into and when the pushing like doesn't really work. You know, and sort of tried to make it do things like it's actually not super well equipped to do today. But you know, if you've known pushed the boundaries, then we're not going to know where things are. I guess I guess I'm sort of curious from you all like, Are there any use cases that you're excited to use AI for or things that you've been thinking about sort of incorporating into your work?

</p>
<p><strong>Cole Turner</strong><br />
I've got one I'm so bad with figuring out what I want to do with my house and with generative AI. They have Have these tools where you can upload pictures of a room or a garden or something and AI will go in and make it look like a showroom or make it look like a professionally designed landscape. And I'm thinking about doing my backyard right now, I've been using this tool to figure out some of these ideas, do they even look good? Well, I like it.

</p>
<p><strong>Augustus Yuan</strong><br />
One example that, you know, I will maybe integrate anytime soon. But I've just been trying to learn like game development. And it's actually really crazy how far AI has kind of come to assist in making games, the most common thing that I've seen, and it's very possible, I'm confusing AI and ML. So if I'm wrong about this, please like call me out. But they're they've integrated procedural generation. And a lot of like the game developing software. So like, there is this really cool talk I saw from GDC, where they showed, oh, like, you want to, like populate this, like map of Fort with a bunch of trees? Well, we'll just procedurally generate, like, you just pass in one texture. And we'll kind of figure out, like, what are some little adjustments we can do to the tree texture? Or where they should be spaced around the map? And it's just like, literally does it does it in like a second. And that probably would have taken a designer, someone like handpicking, that tree looks like it should go there or something?

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, I mean, I'm, I'm super excited for stuff like that. Another thing with games I'm really excited for is using large language models to do like the character dialogue. Because you know, think about what can really break the immersion on a game, when you know, the NPCs have like 10 voice lines, and the developers like 10 voice lines ought to be enough for anyone. But like, when you play the game for 20 hours, it just like really starts to grate on you. But like, with MLMs, you can just have sort of infinite generations of character voice lines.

</p>
<p><strong>Cole Turner</strong><br />
I love that as someone who played a lot of video games growing up, like Final Fantasy seven, or any of those MMOs, you're just wandering around, you hear the same lines. And what you're saying is it's going to get more richer, it's going to feel more fuller. And the nice thing is, it's not just the language like now I'm seeing on tick tock, they are using AI to also do voice synthesis, which so now you have the script. Now you have the dialogue. Now you have the trees, what part of the game is actually hard coded?

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, yeah. And you also, I guess it's to your point about like, just integrating it with the development process. Like, I'm just so excited for how this is going to lower the bar to creativity, for so many people. Like, I have a lot of ideas in my head, I do not have the technical capability to like draw, or like use Photoshop in a meaningful way or any of that. But like I can go to mid journey, or I can go to stable diffusion. And I can describe what's going on in my head and then get things out. They kind of look like it. And that is just really exciting for me. Have you all have you all played around with any of the like the sort of image generation tools or anything like that.

The image generation stuff is very cool, like played with both that you've mentioned. But even Photoshop has started well, I think it's still beta, but Photoshop and some of the Adobe Suite has AI built in. And I've been blown away by the sheer volume of time I'm saving from editing photos that was just generate the rest of this background or remove something and it's just it's impressive. The odd time it's a little wonky still you get the like weird hands or arms for like people, but for the most part, I've seen some pretty impressive things that Yeah, I think for me, it was just saving a lot of time and effort. But I am curious to know, everyone's thoughts. Maybe here is like, art generated, like if you're literally going to some of these tools and just saying like, Hey, make me a wizard, you know, on a unicorn jumping over a rainbow? Should we consider that art? Like, I know that like, Nick, I think you put it really well is it's coming out of your head, right? Like you're like, I have this idea and I'm putting it on paper, I may not be able to draw that. But I'm now telling AI to produce it. Do we still consider that art.

</p>
<p><strong>Stacy London</strong><br />
I mean, one thing I do like about Adobe is that they're doing a lot of really good work to try and make sure that their models are fed with images that are approved, meaning they're, they're, you know, open to be used as opposed to you know, a lot of real artists making things that are being stolen from to populate these models where a lot of the art tends to look like other artists that have like built things in and made things with their with their time. So I think I appreciate that about Adobe that they're trying to be really careful about it. And yeah, the question of whether or not it's it's art, I think that's an interesting, ethical, moral old question for our time.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, I think it's sometimes you could ask, like, is digital photography, real photography? Like to me, you know, every everything beyond a cave painting has like more and more assistive tooling. And, you know, to me, it's all creative expression. And there's not sort of like a magical point where we say, Oh, well, now you're getting too much.

</p>
<p><strong>Augustus Yuan</strong><br />
I have strong thoughts. I love how you brought it up. Actually, there's a few episodes ago, I talked about how this was such a big deal for the moderators of the subreddit art, where they were just getting flooded with these art submissions that were just being generated. And they made a pretty controversial decision at some point to just like, ban these people. And one person got banned for actually drawing something that looked too much like Ayar, I guess, is is the best way to put it. And yeah, I don't know, it's such a it's such a good question. My personal take is, you know, when I think of art, I think I think, Nick, you put a really great word to it, like creative expression, I think of intention, like an artist comes in, and maybe it's painting something or build, trying to express something. And I think, with what these image trainer graders are giving us, it makes it that much easier, and makes the bar a lot lower. So I think like that you can consider that art, you know, there is maybe some intention of why you generated that image. But I think the bar for it will be low. And I think the appreciation for it will also become a lot lower to like, net. And I've already seen this in my day to day now I see some beautiful artworks. I'm just like, probably someone just threw some words into a generator and created that. But it's cool. That's good. And it's kind of sad, but you know, maybe that's just the way the world will be now. Yeah,

</p>
<p><strong>Nick Heiner</strong><br />
it would have been really funny to me. If if we had taken an opposite stance and been like, No, I don't think it's really art. And then someone would have been like, Okay, well, if someone uses an AI to write code, does that mean they're not a real engineer? And we're like, oh, well, oh, excuse me, like, no, no, no, no, no, that is real engineering work that deserves respect.

I mean, to be fair, I've seen on Twitter people being like, yeah, you're not a real engineer. If you use AI, and I'm like, that's, that's questionable. I feel like no, it's a tool that you are now leveraging, right? Yeah. I mean, I

say the same thing about the cave painting of like, Are you not a real engineer? If you use Google, like, Are you not a real engineer? If you use languages higher level than assembly? Like, yeah, we've just been getting new tools this whole time. Will this one finally replace us get us fully out of the loop? Eventually? Maybe. But until then, I think you're still a real engineer, even if you're using the best tools available to you. Yeah. And

hopefully, at some point, there's always we're getting better like a head of AI. But who knows? Right?

Yeah, I wouldn't, I wouldn't hold out long term hope for that.

That's why you're working at an AI startup, Nick. Yes.

Yes, that is as exactly why. Yeah, if I, if I didn't think that were true, I probably shouldn't be, you know, an engineered an AI startup.

</p>
<p><strong>Jem Young</strong><br />
I'm just gonna pivot a little bit, because we've been talking about some of the things we're excited about with AI, some of the things that it's good at, but what are what are some things it's actually good at one of the things that, you know, it's not so great at these days? And is that inherent to kind of our understanding of AI and like the large language model, like engineering field? Or is that something we're going to overcome in time? So I guess there's that we're like, what is what is AI currently good at?

</p>
<p><strong>Nick Heiner</strong><br />
Yeah. So what is currently good things people are the most canonical hello world example is the chat with your Doc's, that the chat with your knowledge base. If you go on Twitter on like AI, Twitter, like every 45 minutes, someone's like, I just hooked up open AI to talk to him my company's customer support. So like that, I think is like a really strong use case that people really like. I don't feel like we've totally settled on like the UI patterns for all that yet. We're just really interested to make they feel like they're like as sort of a community of UI engineers. We need to come up with new patterns for all these new apps. A lot of the SSC feel like the radio show on TV effect, which was when TV first started, people weren't making like real TV shows, they were just reading radio shows on the TV because they only knew how to do the last thing. I feel like we're kind of in that phase now with AI apps. So it'd be very exciting to see you know, how we help you progress and figure out how these things was was working.

</p>
<p><strong>Cole Turner</strong><br />
I know what you mean, because I've seen a few apps where like you're describing, it just feels like they bolted on AI on top of their existing app. I recently saw a travel app which now I wish I knew the name of it because it had aI built into it where it could help you figure out certain attractions or activities that were in close proximity. And the beauty of it, it wasn't just a eyeball. Sit on, it was like there's an interactive map, there's filters and toggles that plug into the inputs into the AI. And it provides a specific artificial intelligence on top of travel versus like, chat and searching for a flight is totally different.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, exactly. So it's I think what it's good at today is like, we can now easily make apps that really understand user intent from natural language. Like, you know, I have this little open source program that I wrote, I called the natural language router, where it routes your application based on just a natural language description. So you can like when the user is angry, take them to the apology, microsite, you know, or like, if the user is confused, you know, then show like a health page. And like, the AI can just look at what the user is saying, and come up with a term determinations like that in a way that like a year ago, two years ago, that was not a broadly accessible thing. Other things that it can be really powerful for are generating content. So you know, if you give it sort of like an outline, and some knowledge, it can sort of generate stuff from that. It's really good at shifting styles or tones. So if you have some like semantic meaning, and you say, like, make this more professional, make this more casual, rewrite it as a Shakespearean sonnet, like it's really good at style shifting like that.

You can write some good poems like I'm impressed, right, you can just give it something and I'm like, damn, I don't think I could have ever written a poem that good. So it's pretty impressive. Yeah,

yeah. There were some people who were like, you know, I write the first half of my memo. And then I use Chad GPT, to write the second half. And like that, I feel like it's not as good at. And because really, what it's doing at that point is, it's just inferring, based on the first half of what you said, what you're going to say in the second half. And like, if Chad GPT can do that, you probably don't need to write the second half of the memo, because it probably is just sort of contained in the first half.

You know, I think that that's like, where some of the limitations are, too is that we're leveraging things like chat GBT to absolutely help assist in maybe writing that memo or starting some of those things. I think that's the thing is it starts it, it's a good way to like help shape an idea. But it's not great. Like, I can't hit submit to that, right? Like, or if I write an email, I've definitely leveraged that. And I'm like, Yeah, let's change the tone a bit. And I'm sure you could throw it back in the AI and I would tweak it a bit. But I think there's still things where I'm like, I'm gonna put my own personal touch on it, but it is saving me time by just like getting from nothing to something I've actually never tried, though. Yeah, here's half my memo, right? The rest of it? Because like you said, Nick, you're not you're, it's just gonna kind of probably almost duplicate it, but rewrite it a little bit differently.

Yeah, or just really have a prediction of like, based on every other memo that I've written, or that I've read, that starts like this, this is how they tend to end. You know, but then does it start to be interesting of like, you know, I only want to write content that Chad JpT could not easily produce, because like, otherwise, I'm just being derivative. And like, not that interesting.

</p>
<p><strong>Cole Turner</strong><br />
In that sense. I feel like that's where ChatGPT even though that is a limitation, that's where you don't want to use it to its full ability. For example, I've used chat GPT, to describe a piece of software I'm working on and say, Hey, give me a getting started guide. And because it's able to template an outline, and use its language modeling patterns, it was able to produce a getting started guide that follows kind of like what you would typically see in getting started guides. And then all I had to do on top of that is what you're both saying is I have to go in and fix the templating fix the outline. And that combination of human plus AI is where I think even if there are limitations, it's still augmenting our abilities.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah. And for me, well on stuff comes down to it was like, it's easier to be an editor than an author, it's easier to review a pull request than it is to write it in the first place. That's like if the AI is the author, and I'm the editor, like that's a substantial cognitive load

off of me, Oh, yeah. Like, even to the pull request thing. Like, I would love for you to almost like write up some of your pull requests for you. He can read the code and say, like, oh, yeah, and be able to almost like fill in that blank input field and say, like, here's my pull request and describing that to your team. And you can tweak it right, but like that is going to substantially make it better. I know of her Jem say many times write comments in your code. Well, I mean, AI can help start to do that. I still think it's not going to be perfect that your human intervention can tighten that up. But like, these are absolutely things that can make us better and just save us time, which I think is really cool.

</p>
<p><strong>Cole Turner</strong><br />
That's where I feel like these tools, they're still not mature to the point where we've contained them. And one area where I feel like that's becoming out of control is academia and schooling. We've been hearing how essays are clearly Coming from chat GPT we've been hearing how students aren't even doing the research anymore. And so it's almost like what happened with the internet and Wikipedia, if you remember, old professors or your teachers would say, you can't use Wikipedia as a source. Now Wikipedia has citations. It has sources. And so chat GPT is doing in the 2023. What Wikipedia did in the early 2000s. It's giving us a tool that we can use to do our research.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, I mean, I mean, heartache. Like I understand maybe this is impractical for academia. But I feel like if the homework assignment is trivially doable with Chad JpT, then you know, your homework assignment, you know, sort of like saying, if you're, you know, if the homework assignment is trivially doable with a calculator, like, okay, maybe at some point, you need to learn how the calculator works. But like, that's not sort of where you want to end up, but not the most interesting stuff.

Oh, I mean, I remember being told in math class that, you know, you're not always going to have a calculator with you. So you have to learn this. I'm pretty sure I always have a calculator with me. It's it's probably every one of us does. And like that's, it's just funny that how technology does shift that, in the schooling have historically fought some of those things, right? Internet Absolutely. Called Wikipedia, even writing, like, maybe this is dating me, but I feel like I remember me made to, like, had to still write pen and paper. And they're like, no, no, you can't type that up. It's like, when was the last time you hand wrote like a, an essay, or memo or something like that would be ridiculous. Like, I still take some hand notes here and there, but that I'm not sending that to like my team to read. So yeah, it's really funny how that changes. The school is a really interesting

</p>
<p><strong>Jem Young</strong><br />
example. Like, I get bored sometimes. So I one time I saw like the the entrance exam for Harvard for like the class of 1900. And it was like pure rote memorization of just this, like random collection of esoteric facts. And I'm like, is this what academia was back then, and 1900. Whereas today, we jumped at 2023. I think, we like to think of learning and academia as more like the application of that knowledge. But a lot of it is just rote memorization just looks a little bit different. So I'm with the neck. Like, if it can't be done trivially by some AI, then it's probably not a good application of like testing if I knew the subject or not, it's just trying to ingrain in my brain, old school. And honestly, I don't think the world is ready for that when it comes to education. If people can just look this stuff up, because like, everything we do today is based on just repetition, repetition, repetition, to the point where, you know, that's all people know, they know what it is, but not what it means. And I don't know if AI can help with that, like that kind of giving meaning to things. Yeah,

</p>
<p><strong>Nick Heiner</strong><br />
I mean, one of the fundamental debates with AI is between people who think that it's a form of genuine meaningful intelligence, versus the stochastic parrot crowd, which is to say, the AI doesn't understand anything, it just regurgitates patterns. To which I might ask, Are we sure that we are not just regurgitating patterns? Would I feel like Sir, from the inside of my cognition, that like, I am a pattern matcher. And like, I just sort of predicted the appropriate thing to say in a given moment. I'm not sure that I'm any better than what the AI would be. But, you know, be a gem to your point with like education. I think there's a lot of stuff in education, where it's sort of guessing the teacher's password as they would say, of like, you just need to sort of regurgitate the right sequence of words, but like, are we really training or testing for like, true, integrative understanding? I don't always know,

</p>
<p><strong>Cole Turner</strong><br />
I feel like that means the goal of academia changes because it's no longer about what can you assemble in terms of information that you're reciting or regurgitating? But rather, what can you assemble from language models from AI? And rather than having to learn cheers, rather than learn stuff, it becomes about how much can we do on the cost? Because with all of this information at our fingertips, how much do we actually need to absorb anymore?

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, and I think software engineering itself is going to change like that, too. Like, I think that, you know, our, our day to day will become less of, you know, how much code can you write yourself and more? How good are you at sort of provoking the model to produce the code you need? Like, in a way we might all become engineering managers, right? We might all become tech leads, where you sort of have these models. The other things I think might happen is we might design interfaces and like write documentation and code that is easy for AI to use, right? Like today we design our systems on the presumption that like humans are going to be using it. But like if AI is the ultimate consumer of the API like that, that might change how we structure things, I've heard

</p>
<p><strong>Jem Young</strong><br />
this, this theory that AI is actually going to make bugs proliferate a lot more, because AI can only generate what it's seen before. So if it's copying like code from GitHub in some most popular repo, and there's a bug in there, it's always gonna copy that bug and apply that to all the code that people see. So it'll never, and the problem is like, because engineers only will know how to use AI, they won't know how to debug that. I've heard that theory too. But it's gonna be some that like generational talking down to the generation after is, is pretty common in human history, or like, the kids will never understand. They're dumber than we are, et cetera, et cetera. So I don't know how much of that is true,

</p>
<p><strong>Nick Heiner</strong><br />
I think is bullshit. I think kids are way smarter. Like, each generation, we're like, more and more smarter. I know, my kids are gonna be like, 10x smarter than me. And I'm good with that. That's awesome. But Jim, if you make a valid point, like I think about it, even we've said this as front end engineers a lot is that it's really important to understand the fundamentals of JavaScript and not just rely on the framework, because Absolutely, you run into those situations, where you're like, oh, shit, something's not working. How do I deal with it? And how do I debug it? And there is still a skill there. And so I think the same can be said, with AI. It's like, I mean, I've generated components from chat, GBT is pretty impressive. They're not perfect, though. And so you still need to understand, like, if you're generating a React component, you still have to understand how to manipulate or tweak it to get it to work. And granted, I'm sure we'll get into this more as AI evolves is like, it's going to continue to get better. And so hopefully, those bugs slowly get worked out. But I think you still need to understand how to change something.

Yeah, I think it's a lot like going to Stack Overflow, like, you know, we've all done it. You'd find the Stack Overflow, magic incantation, that seems like it does what you want, and you paste it in and you rerun the code, and it works, and then you move on. But of course, if you don't actually understand what's doing, like, you know, bugs can slip in there. And it's the same with AI. Right? If you don't understand what's going on, like you are at risk. I personally think AI is gonna have higher accuracy than StackOverflow pasting because at least the AI is like aware of your context, and can try to do something a little more specific to your environment. Yeah, absolutely. Jim, if it's not, at least at least with today's models in today's world, it is a big assistance, but it's not going to completely replace knowing what's going on. Yeah, I mean, one, one sort of workflow that I really like is taking something like you know, you have your Webpack config. And you want to enable hot module reloading or something. And you can paste that into the model. And say, Here's my config, please rewrite it with hot module reloading, enable, and then it spits it back out. You look at it, you're like, yeah, that is what it was. And then you paste it back into your editor, and you're done. And like that, to me is so much easier than having to Google for the Webpack hot module API, and then integrate that into the specifics of my project.

</p>
<p><strong>Jem Young</strong><br />
I guess, I don't disagree with that at all. And it's a good thing. But I would say, at least speaking personally, from my own journey of engineering, and how I got to where I am, like, a lot of that was built on just random exploration of, hey, I want to do X, and then three hours later, I'm doing y and z. And but like, all that I retain somewhere and like, I can now apply all of that to every problem that I see in the future versus what's the answer? Here's the solution. I'm like, Cool, and move on. I would, I would say, I always feel bad for engineers coming out. Because like, I wouldn't, I wouldn't know all the stuff that I know, if I just I immediately got the answer. So it's kind of like a, I don't know, I'm, I'm very conflicted on this. Because on one hand, it does make me more productive, where I need to do something, I can get it done much faster. But in the long run, is it like hindering me by just like audits always given me the solution? I never have to kind of struggle. And that's kind of what allows me to apply my my rigor to being a good engineer. So I don't know, I really go back and forth on this.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, I think I think it is an interesting point. I feel like it's sort of like with some, you know, consumer facing UI, where they'll run an A B test, where they're like, we know exactly where the user is going. So we're just going to serve them that immediately. But then, because the user didn't have to click through the app, and like see sort of other content in the app on the way in there. You know, they actually own the long term, they're missing out, right? Because they don't get to see that other stuff. So yeah, in the same way, if, you know, let's say you're new to Python, and the GitHub copilot knows that you want to open a file, and so it just spits out, you know, the file open function. But what you miss out on is going to the Python docs and like learning what else Python can do, like all that stuff. Yeah, I agree. I think that is sort of a missed opportunity. And I don't know, you know, what's gonna replace that or if it's just gonna be you know, something that gets lost.

</p>
<p><strong>Augustus Yuan</strong><br />
I love that you brought this up too, because It's like, I also am conflicted because it is a trade off. And it's funny because even before this huge boom in AI, like I've seen this happen, a lot like, like quick story like, at an old company I worked at, we had a job, just say we worked at Evernote, and we worked on everyone's favorite front end framework, Google Web Toolkit. And, and there is this, to compile the Maven project, you know, all the Maven commands, whatever, someone wrote this incredibly detailed build shell script that did everything for you, it literally did everything. And later, that guy, you know, he moved jobs. And literally, no one knew exactly how this build script worked, you know, like not, he was like a wizard in bash programming. So we had to, like eventually, one day reverse engineer, we had to reverse engineer how this build script worked. And it was, it was crazy.

</p>
<p><strong>Nick Heiner</strong><br />
I mean, just just, I totally get Jim's point about like, the joy of learning software. But I will fully give up all knowledge of Maven, I just want to do whatever it takes to get in and get out as quickly as possible. And I recognize this as my full stack JavaScript privilege showing, but like, I have no desire to tarry in those stolen lands.

So I think we've mentioned a few things in this episode that I think are interesting for productivity and thinking of us as developers. What are ways that developers today should be leveraging AI to help them be more productive and effective to like, it's, you know, yeah, you could tell chat GBT to write all your code. But we know, that's probably not the most effective thing. So what are things today that engineers should be doing?

Yeah, so I, I am using sort of model based search engines. So there's one called perplexity, I use a lot, you know, new Bing, chat GPT, with plugins, like these are all sort of similar things. And my googling has actually gone way down, like, and when these tools are not available, I am unhappy. Basically, the process where you have some error message, you're trying to figure out what it means you Google for it, you click on the top three results that kind of smell good. You read through it, you figure out which one isn't relevant, then this GitHub issue turned into a flame war. And now you're like, Oh, my God, what's going on here, and now you're really distracted. It's kind of fun, but you're losing time. Anyway, the bot will just do all that for you. And it'll just write out basically, like, you know, when you're Googling, and then you find like, the perfect blog post that exactly answered your question. Basically, the bot will just write that blog post for you on the spot, using your code as the example in the blog post. And when it works, it's a really magical experience. You'll know about the let me Google that for you. So yes, that's just the classic, you know, someone asks you a silly question. And you go to this website and has a little animation showing them how to use Google. So like, perplexity is the new thing like that for me, where if someone asks me a question that was like, very easily perplexity of all just, like, send them the link to me answering that on that site? So you know, I think I think that stuff is super useful. Another thing that I use, chat GBT for is to translate code. So like, I was experimenting recently with defining types and TypeScript, and then defining types and Zod, which is this like, library that outputs a JSON schema. So it's two different ways to have defined types in your code. And I wrote all the TypeScript, I paste into GPT and said, rewrite this Zod and it just spit the right back out for me. Like, you know, the model is just super good at doing that type of thing. So that's, that's been a big boost for me. Has anyone else been sort of using using these tools in their day to day,

</p>
<p><strong>Cole Turner</strong><br />
I can't wait for the day when these AI programs or machine learning programs, cheers, cheers just built into the environment, or the operating system or the platform. And the reason why is it's cool that it can help you write code. But writing code is only half the problem of engineering. The other half is maintaining the systems, keeping them keeping the lights on. And I would love for nothing more than to ask some chat software. What is wrong with my application? Why is it Why is latency high? Why is it timing out? Why are why isn't scaling up or down? And it will just know it will know from the statistics from the metrics from the way the program runs over time. While it's not in the good state. And that's I mean, I know we're like on the cusp of that that's what I'm waiting for.

</p>
<p><strong>Stacy London</strong><br />
Yes call I love that so much the going on support and trying to inlet getting pulled into some hot where they're like, oh, you know, lag is down. You know, like something's not performance level on this service endpoints not not where it should be. And like there there's like a million people searching slacks to see if there's another one service that's down or is AWS down? Or is this down? Or maybe something else is affecting it. It's like to have some tool that inspects all of that at lightspeed to tell you, Oh, that's because there's very specific things happening, that you it would have taken you forever to find out. That's, that would be amazing. And I think that that's the kind of stuff that we should really leverage

</p>
<p><strong>Nick Heiner</strong><br />
it for. Yeah, or even something just as simple as like, I'd Netflix, you know, there's some SRE incident. And it's pretty common to have new people get paged in when they're needed. And then someone always has to explain to them, like, you know, we've been in the trenches for three hours. Let me just give you the three key points or whatever. That is, like, very doable by an AI.

Oh, yeah. Like, I actually just want that in Slack, too. Like, I'm tired of being thrown into a 30, you know, message thread that's like Ryan, what do you think? You know what I think, can someone please summarize this for me, and that's where AI would be really helpful. Because I think it's really disconnecting and unproductive to kind of throw someone in like that. But I get it too, is you're not like, Oh, let me you know, necessarily summarize everything for you. That is where AI can be very beneficial. One, I'm excited for it. To be honest, I'm sure a lot of companies are using, I've used it a little bit on the side is copilot. I think copilot is quite a powerful tool, that it really, to me helps like, define that, like, it is a tool, that it's something that's assisting you. And it's there just to make your life that much easier. And just like to finish things for you that you're not thinking of. And it's quite powerful. Like, I've been pretty impressed. And I've only played with a little bit. And so I think like, things like that, where you have AI as long side, what you're doing can be really powerful.

</p>
<p><strong>Cole Turner</strong><br />
Where's AI in the testing space right now? Because I feel like that is a prime target for it. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I want it to write all of my unit tests and all my integration tests and all I wanted to write all the tests, I never want to write tests ever again.

</p>
<p><strong>Nick Heiner</strong><br />
Yeah, and I remember back in like, 2013, there was this Ruby library that would like let the PMs write tests, and the PMs would write or the user stories in natural language. But then the engineers would write like, very deterministic code that would, you know, parse out the natural language is like, Okay, you, you, it doesn't really look to the promise of like, natural language understanding, yeah, maybe maybe even called cucumber I can't remember. But like, now, we actually have the ability to do that. Right. And I don't know of any sort of products that are offering that yet. But like, I expect in the next year or so, like, we'll see something like that. And finally, we can have the dream of just going straight from user story to, you know, to testing. And then and then we even have things like, you know, today, if you're writing web tests, you know, you're gonna be using something like Selenium, or Cypress, or, you know, something like that. And you're sort of, you're annotating your UI with all of these like data test attributes, or these other sort of ways for the test runners who have hooked into it. But there are people out there who are making companies to train AI is to just navigate arbitrary user interfaces. And once you have that, and then you add that to the piece of like, understanding what the Pm is saying in the in the user stories, then as a US as UI engineers, we don't need to build those special hooks in at all, just the API is just able to use our app, like a normal user. Another direction where things might get get interesting or get easier is if we move away from building dedicated you eyes for everything we're doing. And it's more just sort of like affordances in various chat bots. And so users are just saying to the chat bots, here's the task I'm trying to accomplish. Maybe we have UI that was generated on the fly like a little widgets to show up to do specific sorts of tasks. But in that case, I also think that like the integration testing burden on us goes way down. Because all we have to do is sort of be able to render a few widgets to do key tasks. And all the business logic can be handled by the AI

that is really cool to think about too, is like even think of that, like pm, like input and like how they're like, you know, they're almost explaining right now. They would explain to engineers like what they're trying to achieve, and there's a lot of back and forth. But yeah, if you could have that back and forth with AI and being able to help that I that's, it just opened my eyes a lot. And just hearing you say that, Nick. I'm like, Yeah, I hadn't thought of it that way. So it's really cool.

Yeah, but but to be clear that back and forth will happen with AI. Oh, yes. Yeah. Which Which brings us to prompt engineering. Are you familiar with this, with this field with this endeavor? I think I think that's gonna become the new AB testing. Where like, you because the thing with these models is and this is this also goes into limitations category. It can be genuinely frustrating to work with these models because they are these opaque machines. Like no one understands why they do the things that they do. interpretability is like a major field of research. That is like under or developed right now. So sometimes you will just give the model an instruction, and it will just not pay attention. And then you sort of have to like phrase it in a different way or get to pay more attention. And then like it works better. But it sort of becomes like an A B testing type problem of like, okay, I'm going to change my prompt in production. And I need some way to observe how it behaves. And you're on the on all of the metrics or user that you'd be testing, right, like correctness, performance, you know, other sort of downstream metrics and indicators. And the various companies are popping up to like, try to help with that. You know, yeah, both both designing the prompts. And then also like to AV testing the observability about like a whole new sort of observability layer of the stack that has previously not been under consideration at all. That's really

</p>
<p><strong>Cole Turner</strong><br />
funny, because that takes me back to something you said at the start of the episode, which is, what how we're interfacing with AI today through these prompts is kind of like what you said with TV, just starting with radio. It's like it's it's the format that gets us off the ground. But it's not necessarily the input and output that we'll use with air long term. Yeah.

</p>
<p><strong>Nick Heiner</strong><br />
And it's interesting, like, I think there are some different directions that could go, I think everyone is really focused on the chat interface right now, because Chad GPT had just this meteoric rise. But I think there's a lot of ways as engineers, we can integrate AI into our applications that is not through a chat interface, whether that's like just offline processing, or sort of applying intelligence behind the scenes or something that's more user more UI element forward. But it is an AI that sort of piecing some things together behind the scenes. And yet, it just sort of remains to be seen what those patterns are going to be. You know, another interesting new challenge is, all of a sudden, we have a lot of latency on our API requests, again, like I think, in sort of a previous generation, we had a lot of UI tricks to like, make things feel smooth, because like the back end could be very slow sometimes. And like nowadays, you know, even like streaming video, right? Like, for people with good connections, the play delay is measured, you know, in very small amounts of time. But with AI is, you know, it takes a long time to generate these tokens. And so like now, people need to come up with new UI paradigms, or mayor's have refreshed some of the old ones. But how do you keep the user engaged? As this content is coming in? Like how do you give them a sense of progress or not like their whole app is just locking up, it's like one super low level thing is, on some of these, these tools, the AI can omit markdown, which is nice, because it gives like a very easy way right? You can make make easily make a front end component that just renders markdown, the AI understands markdown really well. And so now you have some more structure to your output instead of just a big wall of text. But as you're streaming, like when you when the Markdown is or partially coming in, you're going to see sort of like some weirdness. So like, you know, to start bolding in Markdown, I think it's like two stars rally to Asterix is what that means, as you're streaming in, when you start bolding, you'll just see those two stars, and then you'll see the content and then the other two stars will come in, and then that whole thing will pop into bold, which like, I don't know, like, are we just going to accept that forever? Like, is there a better solution? You know, I was trying to think like, are we going to start seeing things where you have heuristics, we're like, oh, are these two stars and started folding or, you know, sort of show like, hold it back until I see that? You know, what comes later. So it's interesting to think about how we're going to evolve that stuff.

It is a good segue, like, we've seen this mature so fast, like AI in general, what's kind of next, like what's evolving, just like even now, like, I think I feel like each week, something's getting better and better. And so how is the ecosystem maturing?

It is pretty amazing how quickly things are changing. So you're just this last week, we saw the release of llama two, which is really significant, because it's the first big open source model that's competitive with the big closed models. And what that means is that, you know, less less for people like me who you know, just just front and engineers. But like, if you're at a company that has some AI engineers, you can take llama to and you can change the internals to serve your fit your needs, in a way that like, open AI like that does out of the question for you. So yeah, that's, that's, I think, really significant. And the fact that Facebook is going to be putting a lot of energy metals and energy into that I think is very interesting for the space. You know, and then and then previous weeks have also had like, very big announcements. So yeah, it's a very rapidly holding space. But your question about sort of what's next? And where's it going? In terms of like the app developer space, like if you're looking to build with AI, it is it is in such like a wet clay state right now. People are still trying to figure out like, what are the layers of the stack? And where does everyone want to sit? Like what pieces do people want to own? Some companies are taking what feels like really thin slivers of value. Other companies are doing things that feel way too thick. And then you'll have someone else who comes in and like they're drawing it diagonally. It's like I'm doing some of this and some of this. And it's like no one really really knows, I think in the way that like with traditional full stack app development, you know, I think we have a pretty good sense now of like, what the stack is, and sort of what the different modular layers you swap in and out are. So that's, that's something I'm really excited to see, you know, how that how that evolves. And also just the products like, I think there's a lot of AI products coming out. Now, a lot of them are fairly immature, because they're all built within the last six months. But like, I think next year, we're going to see them start to come to maturity and to see, some of the bigger companies start to release these things into their products more like, you know, Slack is we're matching slack is going to have their chat bots show up, you know, Google for like all the G Suite stuff, they've announced some very cool things. They're trickling that out, GitHub, co pilot X, I think it's gonna be incredible. That's, you know, moving out. I don't want to comment on how fast it's moving out. But like, I think a lot of these things that have been announced are gonna become real sort of in the next year, and it's gonna feel pretty different.

Yeah, it feels a lot more like we've seen some pretty cool things from AI. And like, what it can do some of it feeling a little gimmicky. Some of the images where it's like trying to replicate you as a person. It's like, you're like not, something's off, but like, it's just not that polished. But I think now we're just going to see like these big differences, like you said that with companies announcing that not that's going to be exciting to see and just like, is really going to make a big shift for how we view AI. Yeah.

And, you know, the other thing that's just sort of fun with the, like, trying to figure out what all the layers of the stack are, is, they're also people who are making their app frameworks for AI. And what's hard about that is it kind of feels like and I say this as someone who's making more of those frameworks themselves. It feels like, you know, we went back in time to when JavaScript was first released in the browser, and someone said, Can you make me react today? And like, it's really hard to make react without having years of experience of seeing like, what are the common patterns? What are the problems that need to be solved? And so today, you know, I think we have some interesting first guesses. But I think that the way these frameworks are going to evolve over the next, you know, year or two, they could look very different from the way they look today. Observe the key abstractions could look very different.

Very cool. That's probably a good stopping point for us to dive into picks. In each episode, the front end, Happy Hour podcast, we like to choose things that share with all of you that we find interesting. Augustus, you want to start us off?

</p>
<p><strong>Augustus Yuan</strong><br />
Yes, absolutely. Yeah, I have two picks. One is, I never thought I would recommend a bottle. But here I am. There's a bottle called a Wallah. And it's just a really well designed bottle. It's like a Hydro Flask. But I just love it. I recently bought one. And it's great. I think it's worth checking out very, very sleek design. And I love how like when you carry it, it doesn't feel it doesn't feel awkward. So that's all I'll say about it. It's just a bottle. The and then my second pick, which is somewhat related to this topic, is this article or paper I found called Hidden technical debt, and machine learning systems. I found it when I was perusing some ml ops kind of guide. And it's a really, really quick but detailed write up of some of the pitfalls that happened when you're designing ml systems. And just it's just a really good summation of here's the problem. Here's like, how you might solve it. And it's pretty tempting to do, but here are like the ramifications of how that can impact you. And I think it's just like a really good read for anyone who's like, trying to get involved in ML

</p>
<p><strong>Nick Heiner</strong><br />
Augusta, thanks for sharing cool, what do you have for us,

</p>
<p><strong>Cole Turner</strong><br />
my two picks today are just fun for life. First pick is a movie called Joy Ride it if you saw everything everywhere all at once it has Stephanie Chu and other notable actresses who get up to the most craziest high jinks and it's just it's hysterical. And it's good to see the representation. The other pic I have is I if you're like me and you have struggles with sleep, getting to bed falling asleep staying asleep. I will put you on to something that was a game changer for me. It's called tart cherry juice. You don't want the sweet stuff you don't want whatever. Get the tart cherry juice, drink a fourth of a cup before bed and you will sleep peacefully. The second or third night the first night you will be waking up to go to the bathroom because it is also a digestive aid and it is also a great recovery tool for workouts and stuff. So yeah, I tart cherry juice changed my life. Very cool. I

</p>
<p><strong>Nick Heiner</strong><br />
know you have told me that. It's still nice to try that one

I'm going to be I'm going to be listening to every subsequent front and happy hour episode in hopes of further homeopathy. remedies from coal

that's setting the bar now he is like has to live up to that. Buckle up. There's

</p>
<p><strong>Cole Turner</strong><br />
more. All right, Stacy, what

</p>
<p><strong>Nick Heiner</strong><br />
do you have for us?

</p>
<p><strong>Stacy London</strong><br />
Sure. I've got two picks. One is on this topic. It's there's a really great podcast episode called Don't fall for the AI hype with timnit gebru. She is founder and executive director of the distributed AI research institute, and former co lead of the ethical AI research team at Google. I think in that podcast, there's just like, you can learn so much from her about some of the things we didn't really cover any of that on this episode, but just like, how it can be dangerous, how can we make it safe? How can we make people feel represented and that that kind of thing. So I think there's a lot a lot to dig into there. And I think that's a really good episode to listen to on that. And then the second pic I have is music pick. It's a song called a little bit further by tourists. It's a really lovely, sort of upbeat electronic track full of, I don't know, summer vibes. Listen to it while you go on go on a drive. It samples a song called song for wild by Mark Fried's, a psychedelic folk musicians really old song, but it's done in a really great way.

</p>
<p><strong>Nick Heiner</strong><br />
Awesome. Those are great pics. Stacy. Jim, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
Today I have two picks. The first one is a show on Amazon. Funnily enough, I fixed it before. But this one is marvelous Mrs. Maisel, season five, it's the final season of a really, really great show. Season Five kind of, I don't know, would say go gone off the rails a little bit, but it's very different style than the previous seasons. But it's a it's a nice conclusion to the series. And if you haven't seen any of it, definitely worth checking out. My second pick is a link that Nick sent me in the run up to this episode, called a guide for AI newcomers. I'm a newcomer. And I found this a really approachable guides, just learning about like prompts engineering, the limitations of AI, really easy read, and a really quick rundown of kind of where we are today. So I recommend checking that out.

</p>
<p><strong>Nick Heiner</strong><br />
I think you appreciate that.

Right on, Nick, what do you have for picks for our listeners by three picks.

The first is the City of Cape Town, I just went on vacation. It's an absolutely beautiful part of the world, the scenery is incredible. There are penguins and lots of animals around. The second pick is dog training, I have been going on a journey of spiritual renewal with my dog. And it just she's just so much calmer and happier. And it's I can't believe we didn't do it sooner. And I just really recommend it to people. And then last pick is the open source API framework I've been working on called AI dot JSX. And it's a framework for front end developers or full stack Java developers who want to integrate AI with their user interface. It's

very cool. So when can we check this one out? Right now? Nice. All right, on

just just ai jsx.com I think or AI JSX on GitHub. Awesome.

I have two picks not related to AI. Well, no, not really, one's robot related is a restaurant in San Francisco, called Zen Po. It's a bullet train sushi. So there's a little train that delivers your sushi as well as like a little robot server that delivers your sushi. And usually I would say these things are gimmicky and so usually, maybe the food's not going to be that great, but the sushi is quite good. I have no complaints. I've been there a couple times because my kids love it. And so I'm able to actually still eat sushi and my kids like sushi enough to eat it. And but the robots absolutely help. So that's been a fun one. I highly recommend checking that out if you're in San Francisco or in the area. And then another San Francisco pick is a video I came across from Thrasher. They talked about this old ledge, which is an area in right across from the Ferry Building in on Embarcadero in San Francisco. It's a really cool video talking about how things have changed and how they were skateboarding there. It's just a quick video definitely worth checking out. Nick, thanks so much for joining us. Definitely sharing some great insights into AI. I've learned a lot even just on this episode. Where can people get in touch with you?

I'm Nick Heiner on Twitter, or x or whatever it's called by the time this episode airs

I'm surprised we hadn't made that earlier. So Thank you Nick for throwing that I saw even online just before we dove on this episode, they were already removing the Twitter sign on Market Street and that that feels weird.

It does feel weird. Yeah. So I read on platform or that Twitter did not like get permits for the crane. And so they just like had a crane pull up and like the police were like investigating and then they said quote, we determined it was not a police related law enforcement incident, this crane, so they drove away. But yeah, of course they just so fitting with where they don't even get permission for their own crane

to actually I'm not surprised to hear that so that's hilarious. Well thank you so much, Nick for joining us. Thank you all for listening to today's episode. You can find us on Twitter at  <a href="https://twitter.com/frontendhh">@frontendhh</a> you can follow us at front end happier.com really subscribe to us, whatever you like to listen to podcasts on. Any last words.

It's been it's been great learning today.

Cheers. Cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers. Ring a ding ding

</p>
`;
        return transcript;
    };