module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the third episode of Front End happier the podcasts where over drinks we talk about all things front end developments. Working as a front end developer is really interesting. You've learned a lot of skills to do the job. But it's a field that's constantly changing in order to stay relevant and stay up to date you're constantly having to learn. In today's episode, we talk about our backgrounds, and how we first got started. But we also share ideas on how to how we continue to learn and stay up to date. On each episode, we like to choose a keyword that if it's mentioned in our conversation, we'll take a drink, and we also invite you as listeners to drink along. So what's today's word that we've chosen? Skills, skills, that skills with an S skills with a Z. All right on. Before we jump into today's topic, let's go around the table and introduce this episode's panelists. Derek, you want to kick us off?


<p><strong>Derrick Showers</strong><br />
Yep, I am. Derek showers a UI engineer at LinkedIn.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm Ryan Anklam. I'm a senior UI engineer at Netflix. I am also bittersweet Ryan on Twitter if you want to go ahead and follow me.

</p>
<p><strong>Jem Young</strong><br />
First of all, I'm Jem Young I'm also a last 100 followers, by

</p>
<p><strong>Ryan Burgess</strong><br />
the way. Yeah, they all just

</p>
<p><strong>Jem Young</strong><br />
expand my legion of followers. I believe it works like

</p>
<p><strong>Ryan Anklam</strong><br />
1000 I'm gonna be 20

</p>
<p><strong>Jem Young</strong><br />
I'm Jem Young. I'm also a senior UI engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm Ryan Burgess. I'm a UI engineering manager as well at Netflix. And we also have a special guest joining us today. Sara, do you want to give us a brief introduction of who you are, what you do and what's your favorite adult beverage?

</p>
<p><strong>Sarah Showers</strong><br />
My name is Sarah. I'm a front end developer at Apple and my favorite happier beverage. So fancy wine. I am a huge fan of a basil gimlet season.

</p>
<p><strong>Ryan Burgess</strong><br />
That's pretty fancy. We

</p>
<p><strong>Ryan Anklam</strong><br />
have an episode we're all stricken basil gimlets. Now,

</p>
<p><strong>Ryan Burgess</strong><br />
I kind of feel like that's a good idea.

</p>
<p><strong>Sarah Showers</strong><br />
Only only if you invite me back

</p>
<p><strong>Ryan Burgess</strong><br />
ceremony enough

</p>
<p><strong>Ryan Anklam</strong><br />
to supplying these drinks. That's how you get on the show. Yes. 16 ounces of

</p>
<p><strong>Derrick Showers</strong><br />
basil gimlets.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so before we get into each other's like school background and everything like that, I'm actually interested to know what led each of you into being interested in front end development. Garrick?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I see I can make this story short. I was started my own web design company in high school with a friend. And we went door to door trying to sell websites to people. And we did everything on Dreamweaver. Because that was awesome. That was all the hotness back then. And unfortunately, we didn't make any money because no one wanted to buy websites from to 16 year old high school kids, but it was still fun. And yes, I mean, that's just kind of been interested in it ever since. Awesome.

</p>
<p><strong>Jem Young</strong><br />
Would you say you had a lot of skills back then to do websites?

</p>
<p><strong>Derrick Showers</strong><br />
No. I told you use Dreamweaver

</p>
<p><strong>Ryan Burgess</strong><br />
can hate on dream Wherever they still make that don't they?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think so. Hello. They just came out with their new new thing. The Adobe CC or something? What's that? Okay.

</p>
<p><strong>Ryan Burgess</strong><br />
I've never even I don't know, I know the Creative Cloud is but I thought oh, no, it's

</p>
<p><strong>Derrick Showers</strong><br />
just announced. That's how long it's been severed with.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I have a few Adobe products installed. Yeah, definitely Photoshop edition. That's how I edit the podcast. GarageBand? No. Is that product? Yes. Oh, I see what you're saying. Oops. Sara is from Apple. Ryan, what about you? What What was your kind of kick into front end development?

</p>
<p><strong>Ryan Anklam</strong><br />
Um, what was my friend Mike kick into fund development. So I started back in probably 1997. I was actually in school for architecture. And I had to do a report on something. I don't remember what it was. But that was back when geo cities was thing. So I went to a couple geo cities pages and viewed source and kind of copied that and I was like, this is way more fun than architecture. But back then, you know, that was when we had ie three, Netscape and writing JavaScript sucked. Like it was just terrible. You have this little yellow exclamation point and click that in the end it says No, I don't remember what the messages were. But they were terrible. So the beginning of my career, I hated JavaScript. And I was a ColdFusion developer. And that's kind of where I thought the bee's knees was at the time. I think right around the time jQuery came out, it's like, holy crap, this is actually pretty fun. I can make these interfaces that are fun to use and make them look better and make them much more interactive. And I fell in love at that point. I've kind of haven't looked back since then. That's probably what was it? I remember what year that was anymore. But

</p>
<p><strong>Ryan Burgess</strong><br />
meanwhile, no one was geo City's done. I think it was less was

</p>
<p><strong>Ryan Anklam</strong><br />
so no jQuery. That's what oh, that's for Yeah. So 2009 2008. Yes. Sounds

</p>
<p><strong>Jem Young</strong><br />
like

</p>
<p><strong>Ryan Burgess</strong><br />
you might even be a little earlier. Yeah. That's probably what that Yeah,

</p>
<p><strong>Ryan Anklam</strong><br />
I think that's, that's why it was. So that's when I fell in love with front end development and

</p>
<p><strong>Ryan Burgess</strong><br />
nice. Jam, how about yourself?

</p>
<p><strong>Jem Young</strong><br />
Let's see way back when No, my first job out of school was at healthcare company. And I was doing PHP and JavaScript. So did a lot of that. And I was like this so much better than this boring Java that I'm doing. And it's just, I found it is more satisfying, because I can build something and then see it. And then I can show it to somebody versus as far as writing C or something. Check out this cool algorithm I built it runs in like half the time the previous one. And we were like, oh, yeah, cool, whatever. But front ends, like I can build this thing. And I can show it to my parents like so it's my friends. And they like vaguely understand what

</p>
<p><strong>Ryan Burgess</strong><br />
I'm doing mom factor you, Mom, I created this. And you can show them that it's true.

</p>
<p><strong>Ryan Anklam</strong><br />
That they think you have tons of skills.

</p>
<p><strong>Derrick Showers</strong><br />
Whenever I show my mom something, she's like, oh, shoot, you know, and I tell her it took like months to build. She's like, Oh, I guess I just don't I don't understand. Like PowerPoint, where you just drag everything into the screen in there. It's

</p>
<p><strong>Ryan Burgess</strong><br />
I don't think my mom knows what I do. I don't think she understands what I do. Yeah. When I actually when I first moved out to Silicon Valley, she was like, why? I was I was working at Evernote at the time, I had gotten job there. And she was saying, why would they hire you? And I was like, What do you mean by that? I'm like, you know, kind of confused, like, what does that mean? She's like, well, they already have an app. What are you gonna go do? And I was like, I was kind of okay. All right, whatever, mom. But I use I said to her, like in response was, Well, what about a car company? They have cars, but they're creating new ones all the time. It's like we're upgrading. We're doing new features. We're bettering anything for our users. Like there's a lot of things that we're trying to do. But yeah, that's, I don't think she gets it so

</p>
<p><strong>Jem Young</strong><br />
parent parents will never get in. They're so far behind on technology. I told my mom I got a job at Netflix. You know, her response was, oh, you can get a job with Google. is pretty good. Pretty good.

</p>
<p><strong>Derrick Showers</strong><br />
I told my mom I got a job at LinkedIn. I think her response was something along the lines up. Are they gonna be around for a little while?

</p>
<p><strong>Sarah Showers</strong><br />
Friends with her on LinkedIn. Yeah, that's the reason she got a LinkedIn account. Yeah, ship the ship. A

</p>
<p><strong>Derrick Showers</strong><br />
lot of people I am raising our one family member, one family

</p>
<p><strong>Sarah Showers</strong><br />
member. My parents response was do we get a discount? Well, I didn't get a discount.

</p>
<p><strong>Ryan Burgess</strong><br />
Sure. Like you're not getting no Apple Watch is still gonna cost you money. Sarah, how did you get started?

</p>
<p><strong>Sarah Showers</strong><br />
Um, so I'm gonna have a really different storytelling you guys cuz I've been doing this for like, no longer than three years. So like, I don't even know the pain of border radius before border radius. Awesome,

</p>
<p><strong>Jem Young</strong><br />
though. Yeah.

</p>
<p><strong>Sarah Showers</strong><br />
Yes, a snow day when we lived on the east coast was when I first sat down and wrote my first HTML CSS. And since then, I went to a boot camp, graduated. And first job yeah. So I'm about a little over a year in

</p>
<p><strong>Ryan Burgess</strong><br />
so you're, like, fully seasoned now. That's what I'm here. So I started I'd say my first experience with like, HTML, doing anything like that was definitely like Ryan GeoCities was an early thing. Those like, fire animated GIFs amazing. I was like, big into like graffiti art and street art, things like that. And so I was like, oh, like, I got to share these photos somehow. And built my probably my first like, Angel Fire GeoCities camera, one of the two I built a site for that. That's where I got first into it. But I would say then, when I started actually working, I was big into Flash. I did a lot of flash development as to as three and then something happened to flash. It's no longer cool. And yeah, definitely, definitely jumped into front end development with that. So yeah, I think Apple stuff it was a bit.

</p>
<p><strong>Sarah Showers</strong><br />
Sorry. It's all my fault.

</p>
<p><strong>Ryan Anklam</strong><br />
So do you ever go back into the internet archives and try to look at your geo cities or Angelfire pages?

</p>
<p><strong>Ryan Burgess</strong><br />
No, do they still exist.

</p>
<p><strong>Sarah Showers</strong><br />
Somebody just did that recently at work. Wow. Look at mine and archive and one of the large developers and it was like all kinds of epic, like he shared it with the entire interactive development team.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I don't think I would even know what to look for, to be honest. Like, I have no idea what I would have called it or anything, but it's kind of worth searching for.

</p>
<p><strong>Ryan Anklam</strong><br />
I think it was driving a Chevy Z 24 at the time was a fancy Cavalier so I had a webpage that was devoted to z 20. Fours. Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
awesome. Was it like the ones that like rims on it and like lowered and spoilers?

</p>
<p><strong>Ryan Anklam</strong><br />
People did that to their Cavaliers? So it's pretty much

</p>
<p><strong>Sarah Showers</strong><br />
so what you're saying is you guys don't have these websites on your LinkedIn profiles?

</p>
<p><strong>Ryan Burgess</strong><br />
Definitely not. I don't know if I would have a job today.

</p>
<p><strong>Ryan Anklam</strong><br />
We had those skills on our profile. Yeah. Geo city skills.

</p>
<p><strong>Derrick Showers</strong><br />
Alright, let's go endorse each other.

</p>
<p><strong>Sarah Showers</strong><br />
That's that's a that's a something recruiters are actively looking for. Right? All right. All of the frameworks,

</p>
<p><strong>Ryan Burgess</strong><br />
all of the framework, all of

</p>
<p><strong>Jem Young</strong><br />
them. They're also looking for 10 years of React experience. So

</p>
<p><strong>Derrick Showers</strong><br />
I'm really disappointed that no one got their interest in web development from MySpace.

</p>
<p><strong>Ryan Burgess</strong><br />
But I mean, GeoCities Angel Fire that was we're already coding in our fire gifts. And we already passed that.

</p>
<p><strong>Jem Young</strong><br />
Dancing, baby dancing baby gifts.

</p>
<p><strong>Ryan Anklam</strong><br />
Remember that under construction gifts?

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I love the sites that you would go to for like yours. Like it was like, under construction coming soon.

</p>
<p><strong>Ryan Anklam</strong><br />
Too lazy to finish my books. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
So kind of switching gears to and we touched on it a bit. I know, Sarah had mentioned going to a boot camp. But I'm interested like, what kind of schooling Have you guys done for me, it's not necessarily front end specific. But for development are what kind of led you to actually where you are today. There are about you.

</p>
<p><strong>Derrick Showers</strong><br />
So I went to school for journalism. So that's why I'm here on podcast. Thanks for the invite. I know nothing about web development. So let's see I went to I got an associate's degree after a bachelor's degree in journalism. Well, I did hospital, I was kind of all over the place. But anyhow, I think that you know, for me, and I'm sure we'll talk about this more like as we go. But for me, I learned, I did do something so that I got something on paper and could get a first job. But I remember, at my first job as a developer, I was like, over, like, I was just completely overwhelmed. But I learned so much during that first year that much more than I learned in any sort of like, official, formal education. It was very, very stressful, you know, I'd come home thinking there's no way that I can do this. But yeah, I mean, just I was at an agency too. So it's just like constantly having different things thrown at me and just learn that way.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm sure that I was actually a bunch of agencies as well. And you learn quickly. Yeah.

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah. So I went to school for architecture, actually. And then one day, I decided to write out a paper as a webpage. And not even halfway through that I'm like, I'm doing the wrong thing. This is way more fun writing web pages. So yeah, then I just kind of took off and I was mostly self taught, you know, it's reading books and blog posts, and anything I get my hands on that No, actually, I'm going to school still, to get my formal CS degree. I started this before I got a job at Netflix in Silicon Valley. But, um, it's really interesting to kind of go back and get that foundation that I always wish I had, but I never really had. But, you know, from from what I do, a lot of the stuff I'm learning probably doesn't pertain a lot to it, but it's still still fun to learn it.

</p>
<p><strong>Ryan Burgess</strong><br />
Definitely. I think that's cool.

</p>
<p><strong>Derrick Showers</strong><br />
It's still a lot of new skills if nothing else.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, how about yourself?

</p>
<p><strong>Ryan Anklam</strong><br />
What skills do you have? Do we

</p>
<p><strong>Jem Young</strong><br />
have some sort of throttle on skills

</p>
<p><strong>Ryan Anklam</strong><br />
this is gonna turn into front end sloppy hour.

</p>
<p><strong>Jem Young</strong><br />
That was pretty good. I did the grind for five years and got a CS degree didn't do much front end work in CS. It was very theory. So a lot of database slot algorithms, a lot of Java. So mostly like my friend skills. I was trying.

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like you were trying

</p>
<p><strong>Derrick Showers</strong><br />
really hard to hold back.

</p>
<p><strong>Ryan Anklam</strong><br />
There's no other word guys. It's got to be

</p>
<p><strong>Jem Young</strong><br />
that yeah, what works. So most of my front end, talents are self taught.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Do you find like the CS degree helped? You obviously have some principles? Two words to put that,

</p>
<p><strong>Jem Young</strong><br />
I'd say. So there's things you run into just even anecdotally passing like Bego, or like how to write efficient sorting algorithm, just understanding all that and how, even, like how compilers work, stuff like that. It's pretty useful. But I think you can get pretty far in front end without degree. And we have some very talented people that Netflix that non degree, so it's available about four. So certainly front end development, whether a CS degree is worth it.

</p>
<p><strong>Derrick Showers</strong><br />
I think that is one thing that is not having a CS degree, one thing I feel like I'm somewhat at a disadvantage at is just speaking the same language sometimes, because there's a lot of concepts and stuff like that, that I didn't, you know, that I didn't necessarily learn in school. So I feel like everybody, there's a lot of people that are looking to, to use terminology and stuff like that to to explain themselves. And it's usually comes from like a CS type. Background. So that's the only thing I feel sometimes is, is different.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, actually, I'd agree with that as well. I feel like I didn't have a CS degree, either. I actually did end up going to I went to like a college for like a really, like a new course that was on development. I started thinking going through it being actually wanting to be a designer, which is hilarious. And like, went through art history, all these types of things. And when I started actually coding, I was like, no, no, no, this is way cooler than actual design. But yeah, there's sometimes I kind of agree with that is that I've actually gone in like, read CS books and things like that to actually learn more about the concepts. Because my, my course was more, you know, you learned how to code, you learn some concepts, but it didn't go in depth, it was actually more focused on web development, which is great, because that's ends up like what I love doing. But I think sometimes it does help to have those Cs understanding and concepts to actually help you in your day to day.

</p>
<p><strong>Derrick Showers</strong><br />
But say the only good good thing out of that comes out of it sometimes is it forces you I think you just have to be okay, with just taking the risk that somebody is going to think that you're you're less intelligent, because you don't know what a certain concept means. So, for me, I don't have a problem. I'll just just ask what sure what that means.

</p>
<p><strong>Ryan Burgess</strong><br />
And I mean, you can't know everything. And yeah, so it is worth asking the questions. That's for sure. Sarah, and, you know, actually being newer, so it's interesting to hear being at a boot camp that's fairly new, actually, in concept, I think only been around a few years, I think. But yeah, I

</p>
<p><strong>Sarah Showers</strong><br />
think they're celebrating their depth boot camp specifically. I think they're coming up on four years.

</p>
<p><strong>Ryan Burgess</strong><br />
That's pretty impressive like it. And they've and more and more have popped up since then, too. And like, I've actually been impressed with how many how much knowledge people gained just from going for that, how long was the course to

</p>
<p><strong>Sarah Showers</strong><br />
so it was nine weeks remote, nine weeks on site, and then a week of like, pimp your LinkedIn profile, and like careers coaching whatnot. Like my mind was so saturated with stuff. I don't know how much I retained, but there's definitely stuff that like, as I talk to like peers and go to meetups and whatnot, like, like, oh, yeah, I've heard of this, I might not know it in like any depth, but they covered like, so much material in a short space of time that I don't think anybody can, like absorb that much, especially in that kind of learning environment. But that's why they're designed that way to be immersive. So there's, like, retention might not be 100%. But you definitely, like have that trigger as like, they go. I haven't like written any kind of like extensive JavaScript, that's you just need to, like use that kind of like a patent. But I know what it is. So

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's the cool thing, too, is it sounds like you're getting the building blocks to understand, and maybe almost pick the areas that you need to focus on to in order to get those skills and continue that.

</p>
<p><strong>Ryan Anklam</strong><br />
Do they teach you at a kind of way? Yeah.

</p>
<p><strong>Sarah Showers</strong><br />
Um, so it is, Ruby on Rails is their primary spec. There's other boot camps out there that are, you know, full stack JavaScript, there's other ones that touch like, so much stuff. And I know people that have gone through those ones and speak highly of them. For me, knowing like, every day was like, a huge like uphill battle. Being there 12 hours a day learning stuff that you use, sometimes, like, what the heck is going on kind of thing. Like for those people that went through boot camps that touch a lot of tech is like, crazy to me, because I know, just focusing on one how like intensive that was. And I was eight weeks into the experience before I was like, I want to be a front end developer. But I also got a lot out of just the experience. They teach you a lot of you know, empathy. Derek was talking about you know, when he first started, that he was telling Dealing with why am I doing this? Can I even do this? And they teach you a lot of how to, like, deal with that. And I think, coming into our workspace where people are so smart, there's a lot of, you know, self doubt, being able to manage that is pretty valuable on its own on top of, you know, coming in and having worked on projects in teams. I don't, I can't speak for a college degree because I didn't do it. But I don't know how much of that exposure you get, you know, building applications and contributing as part of a team. Like everything we did was that kind of process. Here's an app, be in a team build it next week new app being a team built. Yeah.

</p>
<p><strong>Ryan Anklam</strong><br />
That's great. I think the self doubt thing is a really good thing to teach, too. Because I mean, we I

</p>
<p><strong>Ryan Burgess</strong><br />
was gonna say all through that, I don't think it's something that you lose like the the imposter syndrome is a legit thing. It's happened to us all the time. It doesn't matter how senior you are, I think it's something that is hard to overcome. And yeah, I think it's funny, because yeah, you think of someone being Junior and starting out is going to have that more. But I still have it today. Like it still happens. You talked to someone who you're like, wow, you're brilliant, you know, way more than me, or going to a new company, you're like, oh, they definitely know more than me. And it is something you have to overcome. It's not easy.

</p>
<p><strong>Ryan Anklam</strong><br />
No, it's invigorating, I find a way to kind of turn that inside out and make that imposter syndrome make me want to work harder and learn more things,

</p>
<p><strong>Ryan Burgess</strong><br />
we should be learning from them,

</p>
<p><strong>Sarah Showers</strong><br />
that's kind of the exact like, process they teach you is like recognizing the kind of onset of these like, downward spirals into like, complete shutdown and how to like, stop yourself getting there. Because once you get there, it's even worse. And so being able to recognize the onset, and find like, what kind of personality you have. And a lot of the theories they teach you are based on like Freud, and I'm not like super, like knowledgeable about it, but the stuff they spoke to is really interesting, what kind of a personality you have. And so these are likely things that will close you triggers. So these are how you can combat them. So for me just having that alone, like I'm my own worst enemy. And I think a lot of people probably have the same like kind of feeling when they like get into that kind of a situation that like just trying to be able to tackle that and just continue to be productive, especially in interview situations like, like shutting down in an interview, like being able to on the spot like withdrawal from that situation to be able to keep pushing forward. It's, it's really good thing to know,

</p>
<p><strong>Ryan Burgess</strong><br />
when you were going through the bootcamp to I hear you have a pretty smart husband, that's a front end engineer. Yeah. Did he help you at all,

</p>
<p><strong>Sarah Showers</strong><br />
um, he was around as definitely a support but he's not a Rails engineer. So you know, he was he was helping me think through the problem at the same time as we were learning it together. And so we're like the ultimate nerd couple like we go home we write code the weekend we go to a cafe we write code.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. For for our listeners, Derek and Sarah are actually married. So that's, you know, tying those things together. And Derek is smart guy, and I kind of figured that might help help out some of the concepts at least, you

</p>
<p><strong>Derrick Showers</strong><br />
know, it's actually interesting, because just it kind of gives me some perspective, like, I like it's fun, like, I like working together on stuff because it's like, there's, there's, it's just thinking about things in a different way of like, trying to, like figure out how to explain things sometimes and like, and it's fine, like and vice versa, like we you know, kind of learn from each other.

</p>
<p><strong>Jem Young</strong><br />
You know, actually, you guys are bringing up a good point on that. Just show the data shower thought and there was in music for

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I feel like it sounds like a shower music gems, just shower thoughts.

</p>
<p><strong>Sarah Showers</strong><br />
It's a reoccurring theme so I think my thing yeah, my

</p>
<p><strong>Jem Young</strong><br />
personal love. It's like Ryan, you know,

</p>
<p><strong>Derrick Showers</strong><br />
it can be it can be like maybe like split up the show a little bit. You know, in the middle. We just have this music playing and

</p>
<p><strong>Jem Young</strong><br />
they all left the room.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm upset we don't have Brian bolt on today because his voice Oh, he needed. Brian Oh, yeah.

</p>
<p><strong>Sarah Showers</strong><br />
Maybe you should just have him record a sound bite.

</p>
<p><strong>Ryan Burgess</strong><br />
We probably could pull it from. Sorry, go ahead. Jump on shower thoughts.

</p>
<p><strong>Jem Young</strong><br />
Just literally happens every time on shower. That's why it's the best. No, but it's it's what separates a good engineer from just someone who can like copy paste from Stack Overflow is it's the grind, you know, and I'll say that's one thing I got a CS degree is like you described on a problem for hours. And it sounds like that coding school or the bootcamp like you definitely learn that. That's literally what being a good engineer is like you'd have to you hit that problem. You're stuck on it. You have to know Like, where to look who to ask and like when to give up and just be like, well, here's a workaround. But I've seen a lot of boot camps, and they don't teach the grime and teach you like, here's an application. Here's Minesweeper in Ruby or something. And I interview these people. And they, they don't, they don't have it, because like, they miss a lot of concepts. And I missed like, No, you gotta go home, you got to keep grinding on these hard problems do you run into you can't just like, give up with some Stack Overflow? Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that kind of brings up a good point, too. Is that just going and doing schooling or, you know, whether it be a boot camp or anything like that? It's not really you're not done. It's like, it's never ending. It's like, you're always trying to learn and grow. And you go to the school, I think sometimes maybe I don't know, if the concept I think sometimes people will get sold on, oh, yeah, you'll go to this boot camp, and you're, you know, learn all this development, and then you're done. But it's not the case. Even if you have a CS degree, or you have any type of schooling, or you self taught you're, you're still self taught like you keep going.

</p>
<p><strong>Derrick Showers</strong><br />
I just want to touch on one thing that you said about the boot camp thing. I think it's it's very interesting to think about, like, these boot camps are trying to flipside of this, right, these boot camps are trying to make money. So I think a lot of them are trying to sell, come learn web development in 12 weeks and make shit ton more money. Gotcha. And it's interesting. And I'm curious on everyone else's thoughts too. Like, I think when you take it doesn't matter if it's CS degree, any sort of college education, you think of that as a journey, right? You think of that as like, Alright, I'm going to go back to school, or I'm out of high school, I'm going to go to school, and then that doesn't mean that I'm gonna have a job right out of college. It just means like, I'm starting on this career path. Whereas it seems like sometimes the thought behind some of these boot camps are okay, I hate my job. But in 12 months, I can get a new job, or I'm making a lot more money, double, triple. It's not that way, you know, so I'm just, that's kind of, I think, the flip side with these boot camps, it's just I guess, it's just really what you put into it. And I think, for Sarah, she's put in to like, she's committed to learning pass that, but I don't know that that's true for everybody. That makes

</p>
<p><strong>Ryan Burgess</strong><br />
sense. It's like you get a lot of even what we're saying is you get those building blocks, and you know, these concepts, and it's like on you to kind of challenge those and learn more. And, you know, I know actually, you've done hackathons I know before, yes, those types of things are challenges, like you have those skills in order to survive. So on that note, how do you guys stay up to date and learn and constantly learn new frameworks, technologies, different things like that? How do you find the easiest way to stay up to date while you're working a full time job,

</p>
<p><strong>Derrick Showers</strong><br />
I'm interested to hear everybody else's. Because I think it's interesting to hear how people learn. And like, for me, I like to watch videos. The problem is, I don't have a lot of time for videos, but I'm definitely more of a visual learner. So I learned a ton more by watching than I do readings, I'm just not, I don't know. But but the problem is readings a lot easier, because it's can be done almost anywhere. So one of the big things I do is just follow as many things as I can, I've went from like, our RSS with Google Reader. And then when that got shut down, I've transitioned pretty much to Twitter. And just try to just keep you up to date. That way. We're just following people that think everyone does this, but just following people that I respect and look up to and, and taking what they have to say and reading about that.

</p>
<p><strong>Jem Young</strong><br />
My go to is I like to speak at meetups or conferences, because it makes me learn something. And I generally liked it. I always pick on topics that I'm interested in personally, not just, here's a topic that'll get me into a conference. But here's something that's interesting to me. And I really have to dig in. And like understand that because people are gonna ask me questions, I need to know it. And that's like, a way that I stay on top of things. Because I think I always say, I want to do more side projects, but I never have time and it's getting lost doing something else. But if you have a conference, you have a deadline, you have a meet up that you get to speak out even like a small presentation at work, you're gonna know that and you're gonna know it very well. And I think it's an awesome way for me personally to step on top technologies. So

</p>
<p><strong>Ryan Burgess</strong><br />
on that day, you when you're choosing to submit a talk have a deadline to submit the Talk or outline that you're doing. Do you submit that before? You're you have an idea of like what you're speaking on?

</p>
<p><strong>Jem Young</strong><br />
Absolutely. Yeah. I mean, I generally have a pretty solid outline before I submit a talk, but it's definitely it'll be always be something that I'm not as familiar with. For instance, last year, we met at a React Rally, and I didn't know that much. Yes, six. Yes, yes. Next what we want to call these days, but I bought two books on it. And I studied the mess out of that and I knew it and now I know let's back my hand and had not done that. I'd still be like catching up with everybody else

</p>
<p><strong>Ryan Burgess</strong><br />
along being in the audience. I was like, This guy knows his six like he knows this like to a tee. So he sold me on it.

</p>
<p><strong>Jem Young</strong><br />
But yeah, that's what I was going for. So six skills

</p>
<p><strong>Ryan Anklam</strong><br />
It's interesting, I think different mediums promote different kinds of learning. For me, like when I go to a conference, I get excited about new technologies and want to go back and write a bunch of code right away. You know, I subscribe to a ton of newsletters. And that's a great way to find out new techniques and things I'm already kind of diving into. But I don't get as inspired like I would at a conference like at a conference where I meet people and talk to people. It's a completely different feeling from when I see something on a newsletter. And same thing about Twitter, Twitter, introduces me to a lot of new topics, or gives me new ways to think about problems that I'm trying to solve new frameworks like redox, I think I first read about that on on Twitter when someone talked about it. But I think there's just so many different ways to get information. And there's each one of these ways has different benefits, I guess. So I don't think you can just do one thing or the other and get a full picture of all the new stuff that's coming out or new ways to learn things.

</p>
<p><strong>Jem Young</strong><br />
And I found in, in all my jobs, there's always that one person who's like, the technophile, and they're like, Hey, have you heard this latest thing that just came out? And I've every job guarantee at your job unless you work in like a three man startup. And in that case, you're probably that person, but every single company has that person like find that person make friends with them, because they know and built a slight filter things for you. Twitter is fantastic. That's fantastic resource. The noise is pretty high there unfortunately. Because like, know

</p>
<p><strong>Ryan Anklam</strong><br />
what to look for. Yeah, cuz like, filter.

</p>
<p><strong>Jem Young</strong><br />
They'll be an article on why React is dead. You have like React, said, I guess this is going nowhere. It's what else we like. Now there's an article Why React is thriving and wants to new hotness. So the filter is pretty hot on Twitter, but it is very useful.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, you have 140 characters for clickbait. So it's that can feed into that.

</p>
<p><strong>Ryan Anklam</strong><br />
I think clickbait is my biggest weakness too. I am such a sucker for clickbait when I see that like, oh, shit, I gotta click. But it's always good to get to read stuff that's over the top. And there's always something that you could probably take away from it or

</p>
<p><strong>Ryan Burgess</strong><br />
learn from it, or even when it's to the extreme, if it's good or bad. Yeah, so it's something to rethink. And medium is probably one of the big ones for that I always see is like, it's think who can make the best clickbait title, and then be controversial in that article.

</p>
<p><strong>Sarah Showers</strong><br />
I don't know how LinkedIn is gonna compete with medium, but they once in a while through, again, a lot of noise, they'll have something that really grabs me. And you know, then I'll invest the time, I've read it. But for me, it's writing code, I have a really badass accountability buddy that like, make sure that we, you know, invest in each other. And it's really sappy. But we do spend a lot of our evenings and weekends writing cones. I am the first person to read a book how to like, can name drop the sky, the second week in a row calcium soon, you don't know, Jay is like totally on my level. I like reading it, I enjoy reading it. But I'm at the point now where like, I need to just stop reading and just go out and build things. And so like, the biggest thing guy fight is like, well, what am I gonna build, and like, just picking, it doesn't matter if it exists, just build it. And so it's stupid, but just want to read a book, I'm reading the book isn't gonna have me implementing all these things that I'm reading. And so that's like, where I'm not retaining the stuff that I'm learning. I also am a huge fan of Girl Develop It. And I've gotten a lot of networking opportunities out of attending their JavaScript classes, specifically, and what is it? It's focused on women, but I've definitely seen guys show up to them. But it's all over the country. There's learning opportunities. So they'll do you know, anything from HTML, CSS classes, JavaScript, and the JavaScript starts at like, you know, one to one basics all the way up to frameworks Angular, you know, even the different classes that they have between Oakland, San Francisco and San Jose, the curriculums are slightly different. I believe they're working to standardize some of that stuff, just getting out there. And being a woman in tech. It's a whole different, you know, podcast episode, but being around like badass women engineers that just want to get into the field. It's very inspiring, and it's, you know, taught by women for women. And, you know, I've made a couple of really solid friends that I'm still in touch with now, I'm just attending those classes after graduating from debt boot camp, just to keep my skills sharp. But be not being ashamed of reaching out to people that you meet at meetups and through just friends. I think like that's really valuable and you shouldn't be ashamed to leverage the people that you make connections with.

</p>
<p><strong>Ryan Burgess</strong><br />
Like that. Actually, it's you should never be scared to ask the question. Sometimes I think we fear asking those questions. Holy shit, I don't know this. But sometimes asking those questions, it's getting over that fear of asking a question and getting to learn from someone is so valuable. It's like, don't worry about not knowing everything. We all at this table know different points that someone else does not know. And it's really difficult to know everything you can't. So someone else is going to know something more or better than you and you just have to rely on them. And I think that's a good way to put that.

</p>
<p><strong>Sarah Showers</strong><br />
Like you were one of the first people I spoke to after I graduated. Yeah, that's true. spoke to me about Sass, and you spoke to me about grunt, I didn't know what they were them. But now I use them every day.

</p>
<p><strong>Derrick Showers</strong><br />
So he taught you about some skills development.

</p>
<p><strong>Ryan Burgess</strong><br />
What was your favorite skill for other Those

</p>
<p><strong>Derrick Showers</strong><br />
were your favorites, maybe they use disease killers.

</p>
<p><strong>Sarah Showers</strong><br />
SAS is super powerful. Like I love. I wish I wrote more ground up sass. And that's probably me for not doing it on stuff that I work on personally. But I just like that you can, everything can be reusable, like you don't have to write the same code over and over again anymore. And the same thing with like grunt, gulp, you can build these tasks that take the mundane, repetitive work out of writing code due on time, and then might be a headache to set it up. But automation,

</p>
<p><strong>Derrick Showers</strong><br />
awesome. JavaScript tools.

</p>
<p><strong>Ryan Anklam</strong><br />
A drink that I think that,

</p>
<p><strong>Derrick Showers</strong><br />
I think that one thing maybe we could talk about for a couple of minutes is is what advice we would give to people that are starting out because we're already starting to touch on that a little bit. But I think it's interesting, because we talked about like, who to follow on Twitter, or like speaking at conferences, but I think if you're starting obviously, that's probably not something that you're gonna know inherently like who to follow, or maybe not like, know what conferences that you'd want to speak at, and what topics you'd want to speak on. So

</p>
<p><strong>Ryan Burgess</strong><br />
just curious, that's actually a really good point, too, is even starting, I think, you're not necessarily going to know who to follow. Like, say Twitter is a great place. I think we all can agree that we learn a lot from that. And yeah, you may have to sift through certain things to actually learn from it. But actually find even hashtags is a good way is like you might be able to learn from that and you know, be able to find other groups of people talking about a certain thing like JavaScript, even just following that hashtag you might actually build learn something from that. So aside from hashtags, what other ways on Twitter other aspects, how else can other people learn and stay up to date? How do you guys all do that?

</p>
<p><strong>Derrick Showers</strong><br />
I think something, as Sarah mentioned, is is interesting is just building stuff, like because it gives you the opportunity to find what you don't know and to and to then look into that more maybe, you know, there's there's there's definitely advantages in reading up on stuff and following people on Twitter and using watching videos on like, Code School and treehouse and stuff like that. But I think there's then you at some point need to take that and apply that or you're just gonna learn concepts, and then you're I think you're just at a point where you're just memorizing shit. And you're not really understanding like how that concept then gets put into real life scenarios. Like,

</p>
<p><strong>Ryan Burgess</strong><br />
how do you actually put those skills to work?

</p>
<p><strong>Sarah Showers</strong><br />
And that's the situation I have skills. That's the situation I kind of find myself in is that I can talk about a lot of concepts. But can I like, actually, like, apply that code? That's kind of where I found myself more recently. And so yeah, like I was just saying that I kind of got really stuck on like, what can I build, like, it doesn't matter, like just build, like build a calculator, like build, like a have a sit stand desks, they're telling you, you should, you know, Stanford 20 minutes of every hour, like write an application that will, you know, send you a notification to stand up. Like, there's so many things like, just because it's been done doesn't mean you can't redo it. And it's like, it's a weird thing to get your head around a little bit. Especially it's a new person, like, somebody already made this and it's better, like, it doesn't matter. Like it, you're doing this for you.

</p>
<p><strong>Ryan Anklam</strong><br />
The most important thing for any newcomer to front end engineering or front development is to stay curious, right? Ask questions, go out there and seek knowledge. Don't ever be satisfied with what you know. You know, front end engineering especially is a continually evolving field. There's always something new to learn, always something new. out there. There's new frameworks, new ideas, new patterns. So Stay curious. And then you know, don't listen to people when they tell you you're wrong or tell you it has to be done this way. You know, form your own opinions, because there's always someone that's going to tell you, the way you're doing it is wrong. There's a better way, but you know, think for yourself don't follow exactly what everyone else tells you.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, and I think it can be like very overwhelming sometimes. So I think but staying curious is really important. cuz you can get very tainted to like, they're just just, I'm never gonna be able to learn this, I'm never going to be able to master all this. I can't build that because there's so much I need to learn in order to even get close to being able to build

</p>
<p><strong>Ryan Anklam</strong><br />
skills you need.

</p>
<p><strong>Derrick Showers</strong><br />
skills. One of the one of the best things I've ever heard about front end development, and and just engineering, software engineering in general is like the biggest skill, the biggest one. Just being able to figure it out. Like that's, and I think that's what's what's so important about, about doing just going just going for it, because that's the single most important quality, like, it doesn't matter how much you know, it's just about just being able to just sit down and just figure it out. Maybe it takes you months, maybe it takes you days, depending on where you're at. But

</p>
<p><strong>Ryan Anklam</strong><br />
yeah, there's definitely just no one way to solve a problem. I mean, I do a lot of interviewing at Netflix, and I give a variety of different questions, but I've never gotten anything remotely close to the same answer to a question. There's so many different ways to do things. And that's what makes you know, there's so much fun, there is no exact right answer to a lot of problems. And there's so much creativity involved. If

</p>
<p><strong>Derrick Showers</strong><br />
I do during the interview, get a question that or an answer. That's exactly like the way that I, you know, would have it solved. They're very, very good. Like we have a kind of like a cheat sheet on like the best possible way to solve it. Like, okay, that question must be on Glassdoor. Yeah. But I mean, the point is, you know, there's the I'd rather them solve it in a way even if it's not the best way, I'd rather solve it in a way where they're actually thinking about it for themselves. And like thinking through the problem, totally,

</p>
<p><strong>Jem Young</strong><br />
I think it's important to also find a company that aligns with your own personal goals. So if you're a new grad, and you're applying for a job, and it's companies saying, Hey, we're using backbone, jQuery 1.3, like you have to ask yourself, Is this company when I leave going to put me ahead? Or am I going to be stuck with like, these antiquated skills that I really have spent a lot of time at home? Like brushing up when I leave?

</p>
<p><strong>Ryan Burgess</strong><br />
Chip? Do you think it's true that anyone can code? Is that a fair statement? Is it something that people can learn grow? Any background? Do you think anyone can code? I'm interested to hear what you guys think?

</p>
<p><strong>Derrick Showers</strong><br />
I mean, if they have the skills?

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yes. Skills are the most important. Part three, we have to cheers to that. Alright, so can anyone actually code? Is it a fair statement to say that anyone actually has had potential to code?

</p>
<p><strong>Derrick Showers</strong><br />
They're now teaching kids in elementary schools, which is awesome. Yeah, to code. So I think with that said, I think anyone can code I think it's more of a state of mind than it is an ability. You know, I think people tend to put this whole stigma on programmers as being smart and nerdy. But I think that's just a stereotype. Yeah, I don't think that you have to be nerdy, you just have to have the mindset for it.

</p>
<p><strong>Ryan Anklam</strong><br />
I think anybody can code but I think it takes a certain type of person to enjoy coding, I think you need to enjoy coding to be good at it. You have to love what you're doing. You have to have fun coding. Otherwise, you're just gonna be miserable.

</p>
<p><strong>Derrick Showers</strong><br />
Which is true, I think with any any

</p>
<p><strong>Sarah Showers</strong><br />
tech why at that point, it's like, I think you have to persevere through that whole, like, imposter syndrome stuff we talked about earlier, like the not knowing, like, why am I doing this, it's just like a huge mistake. Like you, I think you have to persevere through that for a certain amount of time until like, you know enough to get to the point where it becomes enjoyable. Because I think it's a very easy point to give up is that when you start hitting those walls, and it becomes a struggle, that that's probably when a lot of people change their mind and decide that it's not for them, but like for our generation, I think that like, so many people had MySpace accounts and probably didn't even realize they were writing code to customize their MySpace accounts like everyone did like that. That's how you did it.

</p>
<p><strong>Ryan Burgess</strong><br />
Put that music on put that background image

</p>
<p><strong>Ryan Anklam</strong><br />
Yeah, you have to enjoy that journey. Sure, enjoy the grind because the grind is a big part of this and it has to be fun you have to hit that problem be like I'm going to solve this problem I don't care what it takes. It's totally

</p>
<p><strong>Sarah Showers</strong><br />
hard work and you do have to like stick with it. But when when you finally figure something out like that sense of achievement, like like I've not gotten that working in restaurants like you don't get that fucking

</p>
<p><strong>Jem Young</strong><br />
so I'm gonna go similar but I'm gonna say no, not everybody can code because can anybody make a webpage or anybody like sure No, copy paste somebody for StackOverflow get through run Sure. But are you going to be like a great coder? If you don't have a passion for it? Just like all you guys said? Absolutely not. You are going to fail and you should quit now I hate to say it but if you're if you don't have a passion like do that crime to do that, like what am I trying to solve this one line of code You can't figure out working, you're not gonna be good at your job. And you'll, you're not going to work at Netflix and I work at Apple or LinkedIn without that passion. If you're just in this for the money, which, that's probably one of my problems with some of the boot camps out there. It's like, oh, yeah, switch careers and make 100 grand, like, if you're in it for the money, you're gonna fail. And it's just like, can you get like a? I don't know, like a code factory job. You're just like making stickers and stuff, and you just copied it from the internet somewhere? Sure. Is that fulfilling? though? I don't think that that's a pat success. And I think anybody's saying otherwise is lit setting people up for failure.

</p>
<p><strong>Ryan Burgess</strong><br />
So I guess what you're also getting to is it you can't even just do training in school. It's like, you actually have to be passionate about what you're doing.

</p>
<p><strong>Jem Young</strong><br />
Absolutely. And Sarah is the perfect case. You can tell when she talks, she's passionate about it, she wants to do better work at big companies or work at so any company where she can like, embrace that passion. And if you don't have that, and you're coming out of a coding boot camp, and you're just like, that was tough. And that sucks, but lucky, I'm done. Yeah, that you were in for a very, very bad time.

</p>
<p><strong>Derrick Showers</strong><br />
Like, I don't think anyone's not able to if they have that passion. I don't think anyone's not able to do it. Like only people sometimes think, Oh, it's just I just can't do this. But I totally agree. I think it's just all about passion, which I think is true with any career. You know, I think that coding is big right now, because it is tech is is booming, right? So like, everyone looks at everyone wants to code because they can make they can they can get a good paycheck out of it. But I guess the good question to ask is, would any of us still want to write code? If we were making half as much? You know, I

</p>
<p><strong>Ryan Burgess</strong><br />
would do it for free?

</p>
<p><strong>Jem Young</strong><br />
I would do it for free.

</p>
<p><strong>Derrick Showers</strong><br />
I think we all do.

</p>
<p><strong>Ryan Burgess</strong><br />
You. I mean, I love submitting stuff for open source. Yeah. And honestly, if one person finds it useful, that to me is like fulfilling, I learned something writing that code. And if someone else finds it useful, that's like, to me, that's awesome. Like, I feel so rewarded at that point, almost more than getting a paycheck. And I've

</p>
<p><strong>Jem Young</strong><br />
hired like junior developers who lacked the skills I felt, but they had the passion, they have that fire that I said, this person is going to succeed. And I'm going to help them. So I'm going to do that. And that's also good advice. If you're a junior developer, like show you a passion. And that enough can carry you through a lot of an interview, often if you if you don't know the answer the question, but you say, Hey, I'm hungry to learn. So yeah, totally hired

</p>
<p><strong>Ryan Burgess</strong><br />
people. Because of that is you can hire someone who knows something. And that's great. But if they're not willing to learn more, that can be a stopping point there. But someone who's willing to really learn and constantly grow and be hungry for that, that's a big selling point,

</p>
<p><strong>Derrick Showers</strong><br />
I think is a huge issue. If they I don't care how like, you can be attenex engineer, if you're not willing to know, if you're not willing to learn anything above that. I think that's a huge issue, I'm sure because you're you're only going to go especially in web development when things are changing so fast. Like there's no way you're gonna be you're gonna Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
it's about time to wrap up today's episode. But first, let's share our picks. For this episode, we have a special one that actually Ryan has shared an idea where we talk about the recent music that we've been listening to while we code Derrick, you want to kick us off with what's what's the last thing you were listening to while you're coding? So I'm

</p>
<p><strong>Derrick Showers</strong><br />
a little bit, I guess, when it comes to this, because I really listened to a lot of like, well, actually, I'm just kind of lazy because I always I always will open up iTunes and like figure out something on Apple music to listen to, but then I'm like, Okay, fine. After five seconds, I'm like, I don't have time for this. And they just turn on. I usually just go with Beats one or like, I go to the chill out station, or I don't listen to any music and just continue to wear my headphones. And, and just pretend like I'm listening. People don't bother me. I love that. So people do it's like the best of both worlds. I can still hear people's conversations.

</p>
<p><strong>Jem Young</strong><br />
Man sucks. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
we can hear like noise cancelling headphones. He's not a team player. Oh. Brian, what are you listening to now?

</p>
<p><strong>Ryan Anklam</strong><br />
I think this week I've listened to a lot of massive attack. Awesome. Saga Angel. And when I hear that, and I'm just be coding gently, you know, just but it's a great song to code to I think it's perfect.

</p>
<p><strong>Jem Young</strong><br />
Uh, what's my go to? Oh my gosh, he was explosion in the sky. The first album that's outrageous. It's like that if I'm looking I'm like, I'm about to grind here. Put on this album. Leave me alone. I'm not gonna also have a pic this week because I thought we were doing pixel. My pick is Scotland. Yes. I'll be speaking there in June. On some really, really awesome stuff. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
pretty pumped about it and what I think what he ServiceWorkers on that or ServiceWorkers

</p>
<p><strong>Jem Young</strong><br />
yesterday. And the future JavaScript, it's gonna be fantastic. And if you're in Europe anywhere I think react conference actually the same weekend but if you didn't get tickets to that which you probably didn't come to they're really hard to get to come to Scotland. Yes and I'll buy you a beer or what I drink in Scotland Scotch

let's see you guys later.

</p>
<p><strong>Ryan Burgess</strong><br />
Sarah What about you?

</p>
<p><strong>Sarah Showers</strong><br />
I'm a massive Broadway nerd so right now I'm learning every word to Hamilton.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
you say nice try living with her.

</p>
<p><strong>Ryan Anklam</strong><br />
Like corny listening to that soundtrack

</p>
<p><strong>Sarah Showers</strong><br />
every every opportunity I can find to like, drop Hamilton and like conversation and and I am like, just in everyday life. I will do that. It's amazing. It's coming. San Francisco next March come Oh, really? Yes. It's

</p>
<p><strong>Jem Young</strong><br />
ticket tickets to it. It's like sold out to whatever

</p>
<p><strong>Sarah Showers</strong><br />
the next millennium is kicking off its national tour in March. It's here for 21 weeks next year. Yeah. So from this world coming together,

</p>
<p><strong>Ryan Burgess</strong><br />
I was looking at some of this stuff that are listened to while I've been coding. I've enjoyed taiko, which is actually a San Francisco. He's our local. And then comeback kid, which is kind of like a punk band. Just think is out of Winnipeg in Canada. Love it. It's like very heavy. But sometimes like that just gets me in the zone. So it's probably one of the last ones I listened to. Alright, so close everything off. Let's go around. And where can people get in touch with you, Derek?

</p>
<p><strong>Derrick Showers</strong><br />
So Twitter? Yeah. At Derek. Showers on Twitter.

</p>
<p><strong>Jem Young</strong><br />
Not on LinkedIn. Oh, yeah. I

</p>
<p><strong>Derrick Showers</strong><br />
actually don't have a LinkedIn account. I just don't want you to pay to send me an email.

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan, how about you? I think you did

</p>
<p><strong>Ryan Anklam</strong><br />
kick off this Twitter account that may or may not have heard from before. It's actually bittersweet, Ryan.

</p>
<p><strong>Jem Young</strong><br />
I'm Jem Young on Twitter. It's just at Jem Young, pretty easy. If you tweeting pictures of dogs, I will send you free stickers.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Front end Happy Hour stickers.

</p>
<p><strong>Jem Young</strong><br />
Absolutely.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on

</p>
<p><strong>Sarah Showers</strong><br />
can find me on Twitter under Sarah l showers. Somebody already took Sarah showers just pointing

</p>
<p><strong>Ryan Burgess</strong><br />
and I'm at <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a>. Find me on Twitter. Thank you to Sarah for joining us today. That's it for today's episode. Make sure to follow us on Twitter at <a href="https://twitter.com/frontendhhw"><a href="https://twitter.com/frontendhhw">@frontendhhw</a></a>. If at any point in this episode, we missed drinking to the keyword. Let us know on Twitter and we'll send you some front end Happy Hour stickers. Until next time, thanks for listening

</p>
`;
        return transcript;
    };