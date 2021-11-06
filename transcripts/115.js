module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to another episode of the front end happier podcast. In today's episode, we have a guest that I'm not really sure if we even need to introduce at this point. But we are really fortunate to have Shirley roux join us again, I'm really excited about our topic today, we will be talking about imposter syndrome. We have discussed it on I believe it was back on like episode 32. So a really, really long time ago. And it's one of those topics that a lot of people have asked us to continue to talk about. So we're going to do it again. And I'm sure there's a lot of new information to discuss. Surely, can you give our listeners, you know, even though they probably already know you, but we're always getting new listeners all the time. Maybe give a brief introduction of who you are, what you do. And of course, what is your favorite Happy Hour beverage? Hi, thanks


<p><strong>Shirley Wu</strong><br />
so much for the introduction, Ryan. And hello, my name is Shirley. I'm a the latest title have decided to give myself is independent data visualization designer and developer because that really rolls off the tongue.

</p>
<p><strong>Ryan Burgess</strong><br />
But it's a mouthful, I know.

</p>
<p><strong>Shirley Wu</strong><br />
And it's really just because I'm self employed. And I work so which means I just I like always have a hard time when people are like, what's your title? And I'm like, I've no idea I make it up. And what it means is I get to work with a bunch of different clients, usually in the tech or media or journalism spaces, and I help them make sense of their data and tell visual stories with their data. So this is I don't even know what a fifth sixth time and I'm super happy to be back because I just want to hang out with all these lovely people. Oh, even if it's virtually heart and and yeah, really excited to be here and my favorite Happy Hour beverage as always is still whiskey.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Any Are you feeling any new whiskies over quarantine?

</p>
<p><strong>Shirley Wu</strong><br />
Actually, I'm trying not to drink hardly. Because if you like it's really dangerous, because I feel like before when I drink hard liquor with like friends and stuff at least like I had to be limited in some amounts by you know, the fact that I have to get home. But like now, there's like no such limitation. And I'm like my, yeah, I have a really unfortunate personality and the whole like, go big go or go home kind, except I'm already home. So I just go so we're trying to stick to beer and wine.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, that's fair. Let's also go around the virtual table and give introduction of today's panelists.

</p>
<p><strong>Jem Young</strong><br />
Jem Young Senior Software Engineer at Netflix,

</p>
<p><strong>Augustus Yuan</strong><br />
Gus tissue and software engineer at Twitch.

</p>
<p><strong>Mars Jullian</strong><br />
Mars Jullian, I'm a senior front end engineer at a company in the Bay Area. And I will slip

</p>
<p><strong>Stacy London</strong><br />
thoughts are my own slipped. Stacy London. I'm a senior front end engineer at Atlassian. And my thoughts are Mars's

</p>
<p><strong>Shirley Wu</strong><br />
amazing.

</p>
<p><strong>Ryan Burgess</strong><br />
And I Ryan Burgess. I'm a software engineering manager at Netflix. In each episode, the front end happier podcast, we love to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What do we decide today's keyword is confidence, confidence. I'm sure this word will come up just a couple times, I'm sure and we will all be taking our drinks. Let's hop into the episode. What does imposter syndrome mean? I feel like we have discussed this in the previous episode. But we need a baseline. What does it mean to all of you?

</p>
<p><strong>Stacy London</strong><br />
There's like professional descriptions of it. Right? So there's like, the idea that you doubt your accomplishments or your capabilities. Despite no external evidence of such thing. Like you might be a very highly regarded competent person that people if they if you asked other people, they would say you do excellent work and you're smart and resourceful, and all these kinds of things. And then But internally, you're like, they're gonna find out, they're gonna find out what I'm doing.

</p>
<p><strong>Shirley Wu</strong><br />
For me, it's feeling like I don't belong in the space that I am in.

</p>
<p><strong>Mars Jullian</strong><br />
And I was gonna say the exact same thing like and also kind of combining it with something Stacy said of like, and then that anxiety that someone's gonna find you out and you're gonna sort of like, lose, you know, the job that you're at, or the respect of your peers is kind of it's really quite nerve wracking.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, someone just coming to me one day and said, Hmm, I just realized you're always on StackOverflow Well, you call yourself an engineer

you're fired. I can't believe

</p>
<p><strong>Stacy London</strong><br />
I just pulled up your internet history, and I saw that you were looking up Flexbox

</p>
<p><strong>Augustus Yuan</strong><br />
you don't know how to vertically align?

</p>
<p><strong>Shirley Wu</strong><br />
Honestly, can I say that CSS intimidates me so much? Like, after all these years of coding CSS I, yeah, it scares me. And intimidates me. I think that makes

</p>
<p><strong>Ryan Burgess</strong><br />
a lot of sense, though, because it's one of those languages that there's a lot of trickery. Like, it's like, you have to learn the things that are almost sometimes illogical. It actually, to be honest, has gotten better over the years. But I think back earlier days, there's always like, Oh, you have that problem? You got to do this, this and this. And it's like, why? Just because that that work feel like those were like tricks that you just needed to know, hence, probably the name CSS tricks for the website.

</p>
<p><strong>Stacy London</strong><br />
Do you think like, like we we talked about imposter syndrome a lot in, in tech, I feel like do you think other industries talk about it as much as we do? Or is it like, localized are,

</p>
<p><strong>Ryan Burgess</strong><br />
I think someone in tech came up with the definition or the term for it. But I feel like it's a normal behavior or feeling that likely happens in any industry, pretty, they just don't call it that. I don't think they're probably just saying lack of confidence she

</p>
<p><strong>Jem Young</strong><br />
hears but doesn't happen in the world of higher education. Like you are measured by the number of papers, you get published a year. It doesn't matter if you're smart or not. It's just like, that's the metric that you're determined you're worth. So I think it does exist in other industries, too. It's just not called imposter syndrome.

</p>
<p><strong>Shirley Wu</strong><br />
I do wonder though, if it has something to do with our extreme like Tech's extreme obsession with like meritocracy of like, whether you belong here or not, because of like how well you do this thing. So we're all like, Oh, my God, I don't do this well enough. So I don't belong here. So I guess the only other industry I've like, had a taste up was in finance. And that one, I don't think any of us ever talked about imposter syndrome because we were just like, yeah. Money.

</p>
<p><strong>Stacy London</strong><br />
Patagonia.

</p>
<p><strong>Shirley Wu</strong><br />
Like, you just have to be really confident. Cheers, cheers. I think I felt the most imposter syndrome. So I actually asked if I could talk about this because I'm the your first imposter syndrome episode was the one that I like, first listen to right before I came on for the first time. And I think we're 2017. So like, in preparation for, like, coming on to the show. I was like browsing through your past history. And I was like, Oh, like this episode on impulse. And I remember, I was like, driving through like a canyon. I was just like, Yeah, I agree with this. And they're just like nodding along. And that's why I've always wanted to come back on and talk about this with you all, because I guess just a little bit of my background, I studied business and university. And then I decided to take some computer science classes for fun. And then I realized I liked it so much more than all my finance classes. And so I did a CS minor, and nobody thought that I was going to be able to get a software engineering job, right after graduation, including me and my mom. And basically anybody I told. Because I had only had like three semesters of CS classes and like, I think no internships, which I think now people are like, yeah, that's not a big deal. And I think it's never really been that big of a deal to have a degree or not. But I think in college in that mindset, where everybody around me would say, like, I had all these like, CS, big CS internships, I just thought I wasn't gonna be able to get it. And then I was able to get a software engineering offer my senior year. And then once I got into the company, I had such massive amounts of imposter syndrome, just like every single day, being like, I don't belong here. Why did they hire me? Like, um, and actually, at one point, I was like, Oh, my God, I'm probably the diversity hire. My manager is like, No, you're not. We hired you because we liked the combination of like your business degree with your CS minor, and I'm like, Oh, by still felt such extreme imposter syndrome. And that really was what like, drove me to work. super hard to kind of like, do all these side projects and learn on my own. I think within a year to two years, I felt pretty confident in Oh, cheers,

</p>
<p><strong>Augustus Yuan</strong><br />
great keyword.

</p>
<p><strong>Shirley Wu</strong><br />
After two years, I felt pretty good about my technical skills. And I think my imposter syndrome really, really kind of subsided. And I feel like listening to your first recording of imposter syndrome really reminded me of that time when I was just starting out, because I think it really is a lot people feel it when they're just starting out in tech, especially if they don't have like a, like, super intense CS degree from somewhere. And but then, the reason why I wanted to come back was actually in the last few years, I've actually felt imposter syndrome, again, like a crippling amount of imposter syndrome. And I wanted to come back and like talk about that and see like, what opinions you might have.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that a couple things you said there, too, is like, yes, usually shows up your first job. I don't think at the time, I would have known what the term imposter syndrome even was at the time. But I definitely felt that but then to it does happen again. It's not like it's not something that only happens when you're new, it happens a lot new jobs, often that will happen. But it could just be random times in your even current role that you're in, it can show up. And I love another term that you said there was crippling because I think that's the thing is imposter syndrome can really hold you back and actually can be detrimental to like you actually performing well, like you can perform well. But if you let that imposter syndrome sneak up, it will hold you back.

</p>
<p><strong>Stacy London</strong><br />
I think one thing is like this industry changes. I think we over exaggerate how fast the changes, like we're, there's like, oh, there's a new framework every five minutes. And it's like it's not, doesn't change that fast. But it changes fast enough that like, you know, every couple of years, maybe you have to kind of learn a new framework or learning a new way of approaching, like front end development and building UIs. And they, some of the fundamentals and the baseline stay kind of consistent, but you are having to learn new stuff. And sometimes you see other people just like pick it up, either, it's appears that they have picked it up very quickly. Or they're just always on top of the latest thing. And they're like, they seem like the superhuman person who could like, absorb everything new coming at them from every direction, and they're just like, masters at it. But usually, that's not true. But sometimes you you see it that way, and then you start to doubt yourself, you're like, Oh, I'm not keeping up and everything, like, get overwhelmed by that.

</p>
<p><strong>Shirley Wu</strong><br />
I like this insight of how our own imposter syndrome might be tied to our perception and perception of other people that you just made.

</p>
<p><strong>Stacy London</strong><br />
Yeah, like comparing yourself top 1% of people. Like, not healthy.

</p>
<p><strong>Augustus Yuan</strong><br />
I also think, I think surely touched on this too. It's like in in education, what you learn at school is so different from what you actually do in the real world. Like, I just remember coming out of school thinking like, holy crap, I have to like go from building these, like, quick little programs to now like shipping large enterprise code, which, by the way, is like totally different from what you're taught in school, like, like, I feel like schools still have this mindset of computer science fundamentals understanding like, oh, the Oh event like how does like this computation scale, and that are like, oh, you should reuse code as much as possible, blah, blah, blah, and that. And then when you get to the real world, they're like, Oh, actually, you know, we're running experiments, and we actually are expecting to throw away this code. So you know, all that work you want to do to make it reusable, that actually probably is a waste of time, you know, like, like, we're gonna throw this away this code in like, a few, like, in a few months, you know, if it doesn't work out or something. So it's just like a very different, you just come to this very different world. And every, that at least that's how I felt when coming out of school. Like, I just felt like, Oh, my God, like, I got this degree. And it's like, I'm just like, so far behind everyone else.

</p>
<p><strong>Ryan Burgess</strong><br />
It's more theoretical than it is practical. Yes. Yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
That's a great way of putting

</p>
<p><strong>Jem Young</strong><br />
it. I was on a podcast earlier today. And they were just asking about my history, like how I ended up at Netflix, all these other things. They said, they asked me, they said, Jem, do you still feel imposter syndrome? After all the things you've done? Do you still feel it? And I was like, absolutely. I won't say all the time. I feel it less now. I think working remotely actually has decreased by imposter syndrome a bit. I don't know why I think just because everybody's output is altered because we're all in very different living search situations that You can't accurately measure someone's quality as an engineer because I don't know maybe they take care of their grandmother, their three sick cats. You don't know what's going on. So at this point, it's unfair to measure anybody. So actually feel it a little less these days. Interesting enough. I don't know if any of you feel that way or working remotely has changed your opinion of yourself?

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know. I think it's brought up more concerns for me. I don't know maybe it's not like necessarily imposter syndrome. But like, yeah, there's been a couple things actually, on previous episodes, we've talked about like hiring or onboarding new people, there's been times definitely having a new engineer on the team that I feel like I have not done my job. Well, onboarding someone because it's like, I'm not really quite sure how to do that. It's it's things are harder. And so I've doubted myself, even though on the other end it really funny enough is like the one engineer that I did on board during quarantine. He's like, Yeah, it's been really great. There was my self doubt, I was like, I don't think I'm doing a good job here. So I think it's showing up but I can see your point gem where it's like, maybe it's just, it's less in your mind, because it's like, it's changed the playing field a little bit more. And everyone's work is at a different capacity. And you're not all at work together doing just work. You're doing like probably 10 Other things at the same time.

</p>
<p><strong>Stacy London</strong><br />
I know I've I felt it recently, because I've like switched roles or teams, and I'm working on something pretty different from what I had been doing for many years. So like, I'm not building UIs. Right now. I'm working on front end tooling. So a lot of like, node, some back end stuff that is a little bit more hardcore for me. So I'm feeling it pretty hard right now for sure. Like I'm learning as I go, and but I'm also expected to deliver so it's kind of this like, grimace emoji face all the time. Like,

</p>
<p><strong>Augustus Yuan</strong><br />
ah, yeah, I can I just say I just love how we feel like we can talk about this because I totally know what you're feeling because I just transitioned. Well, it's been a year now. But transitioning from Evernote, which was a con a completely different stack, we use Google Cloud Platform, and coming to twitch, which is all AWS and I do a lot more backend now. Like, go Lang, which I've never done before. And there's just so much like, expectation of like, like, actually, like a few episodes ago, I I gave a pick to this. AWS, AWS in plain English pick. And it's like literally, like, I just did not know what the heck people were talking about when they spit out these AWS names like, oh, you know, diabo CloudFormation? Yeah. Like, I was just like, what is that? What, what is? What are these words are? And it's like, you know, with how great we are at naming things in tech, you know, it's like, is that the project name? Is that like, is that the service name? Or is that an AWS thing and all of

</p>
<p><strong>Shirley Wu</strong><br />
our imposter syndrome is just because of all of the different ways nonsensical ways that people have chosen we have chosen to name our software, we've solved it.

</p>
<p><strong>Ryan Burgess</strong><br />
The acronyms, acronym acronyms. Even there's acronyms, I know what they're defined as, but I can't remember what each word is that is in the acronym. Someone asked, like, well, what's each letter I'm like, I don't really remember. But I'm able to describe what it is.

</p>
<p><strong>Shirley Wu</strong><br />
To that point. To this day, I still feel like imposter syndrome whenever somebody, like uses a fancy coding term, and I'm like, I've no idea what that means. And then they describe what it means. And I'm like, oh, yeah, like, Yeah, I know, I know that. But like, I don't know, if it's just like the lack of I don't, I don't think I can even blame it on like the lack of like a full CS education. I think it's just like, there's just so much going on in front end. And then if I you know, don't try to take workshops or try and like read up on material. And we're even the fact that as a freelancer for the last four years, I have not had any technical mentorship and so for me to try and grow technically, I have to either go out and seek it myself or actually the way that I've really enjoyed doing it was I stream on Twitch now I live code on Twitch and then I'll ask people I'll be

</p>
<p><strong>Augustus Yuan</strong><br />
excellent.

</p>
<p><strong>Shirley Wu</strong><br />
Really enjoy it. And then I started doing because there was no upcat and she had a really great blog post about me Multi massively multiplayer Multiplayer Online pair programming. And then that's how I've learned like you, like, yes, six features, or whatever the newest versions of ESX are, yes, whatever is like, that's how I'm learning it. But, um, well, that was quite a tangent. Oh, I meant to say is I oftentimes do not know the official terms of concepts. And then when people describe it, I'm like, oh, yeah, I know what that is. That also adds to my imposter syndrome, because I'm like, I should know this.

</p>
<p><strong>Jem Young</strong><br />
The best leaders that I've seen are the ones that are not afraid to ask questions. So it'll be like, blah, blah, blah, blah, blah. And, you know, I see this at work, and there'll be a director, he's like, Hey, sorry, what does that mean? And like, when you see people doing it, and people you respect to it, you're like, oh, yeah, it's not that big a deal. It's totally in your head. And if you don't know something, ask a question. Because there's, it's so it's such a common saying, but it's true. If you don't know something, there's probably someone else in the room that also doesn't know it. So like, if you ask, you're helping them as well. And that is almost always true.

</p>
<p><strong>Ryan Burgess</strong><br />
It happens all the time. There's someone like, especially a new employee, like someone who's new to the company, ask the question, I guarantee there's like, at least two people in that room that were like, who I didn't know that either. And I just was nodding along, the best

</p>
<p><strong>Jem Young</strong><br />
leaders ask questions, even when they know the answer, because they know that other people probably don't know. Especially when there's new people to rewrite. I've seen you do this with new people you'd like Hey, you said, I don't know GP? What does that stand for? And you know what that means? But you know that there's three new people in the room who don't know, and they're, they don't have the confidence to ask, so someone will explain that you're like, Okay, thank you. When like, that's a sign of great leadership, like just thinking of other people and forgetting your ego. Yeah, it's something I really respected people.

</p>
<p><strong>Shirley Wu</strong><br />
Oh, I think that's a really great. I want to ask that question then of what do you think managers and leadership other than like what you just said, like, what can leadership do in terms of like imposter syndrome,

</p>
<p><strong>Ryan Burgess</strong><br />
like, even something that I sometimes feel like I need? And I'd love to hear other people's thoughts. And I think this is one that I've always felt positive reinforcement goes a long way, is like, there's the reinforcement of knowing Oh, I am doing the right things, is really helpful. It's great to get constructive feedback, though, too, is knowing Oh, hey, this is how I can improve. But if I'm only hearing constructive feedback, guess what, I think I'm doing a terrible job. But knowing like, oh, keep doing what you're doing here. This is so good. And being reminded that you're doing the right things that to me, really relieves me of that pressure. Yeah, kinda

</p>
<p><strong>Mars Jullian</strong><br />
to tack on to that like not just a positive reinforcement looking forward, but like something that helped me recently in a one on one with my manager was like, reminding me how far I've come. Because imposter syndrome has a lot to do with like, comparing yourself to, I don't know, someone who's an expert in you know, area A and forgetting that you might be an expert in Area B. And also like, just being able to, like ask those questions. And even though you started from somewhere that was like very rudimentary, like, even on it like this was in respect to a new project. And then realizing that like, the technical skills and foundation, like all of the stuff that I built over the past month, I was completely not, I was like, over looking at you like, oh, there's still so much to learn. But I You have to remember also, like how much you have learned already. Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
I like that. It's really good.

</p>
<p><strong>Shirley Wu</strong><br />
I actually, to your point of remembering how much you've learned versus how much they're more there is to learn. I actually think that that's how this this kind of like second big wave of imposter syndrome that I've been feeling. I think it started a few years ago, maybe like three years, two or three years ago. And I didn't expect it, it kind of like came out of nowhere. But I think you came out of the, at the core, I think where it came out of is knowing how much further I need to go. So what I mean by that is a kind of kind of to Mars point of like, concentrating so much on what I don't know. And, and I guess what I mean by that is like, and when I was first starting, and I think the reason why I was able to get the confidence in Oh, cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
It's been a while. Yeah,

</p>
<p><strong>Shirley Wu</strong><br />
I think my first job and this is, I guess, to the point of what Maurice you said about what your manager did, and I don't think every manager can do this because what my manager did for me to boost my confidence. I don't know if he was doing okay. I don't know if he did this intentionally or not. But he kind of gave me a project that eventually made me a quote unquote expert internally, which is that he asked if I wanted to learn d3, which was at the time like extremely new it was only a year in and nobody else in the company hadn't really kind of like, you know, spent the time and effort on d3. So then in like half a year or a year after I started learning it, I became quote unquote, like the internal expert on d3. Not that I was like that great. And I felt like comparatively to everybody else I was and I think that really helped my confidence of being like, oh, there's something that i Cheers. Cheers. Yeah, that was good at. Um, and so I think that really helped carry me for a good few years of just being skilled at something that was quite niche. And, and then when I quit to go freelancing, suddenly, I realized that it wasn't quite enough to be able to just code with d3. Like if I was trying to take on data visualization projects for my clients. Most of the times, I was the only person that they were hiring for the data visualization. And most of the times, they would come to me with like, the data set, and be like, Can you do something with it, and suddenly, I realized that, like, I had to get better at like the data analysis, which I know nothing about, like, I was horrible with statistics back in college. And I was like, I don't want to do stats ever again. But suddenly, I had to, and I had to also teach myself like, information design, which is like subtly different from web design. And, and there was like, all these new things of, and then I just felt, again, kind of like the crippling imposter syndrome, but this month, and this time it was mixed with, I shouldn't be feeling this because like, you know, I've, I'm now more established, I know what I'm doing. Like, why am I feeling imposter syndrome? But every time somebody was like, oh, surely you're so good at what you do. I'm like, No, I'm not I'm actually I don't actually know what I'm doing. And you're gonna see through me. And, and that's a, that's my, my second round of imposter syndrome.

</p>
<p><strong>Ryan Burgess</strong><br />
So when you all face this, how do you deal with it? So surely you recognize that there you're like, you know, I'm going through this imposter syndrome right now, what are ways that could or have dealt with, for

</p>
<p><strong>Shirley Wu</strong><br />
me, I desperately tried to educate myself. So I like spent the last. As soon as I realized I spent years kind of being like, Oh, these are the things, these are the areas I'm lacking. And I'm going to read all the books, I'm going to like try and get as much experience in as possible, I'm going to do as much kind of personal projects as I can to fill in this gap. And that's how I've always kind of gone about imposter syndrome. And there's something that in your first recording that has stuck with me to this day, which is that you said, which was impulsive syndrome is actually a really great thing, if you can use it as your motivation to improve because it means that you know that you're lacking something. And you as long as you don't let that crippling like, you don't let that stop you. It's actually a really great motivation. And I wholeheartedly agree with that. And that's, and I think, I think, in the last few months, in just the last few months, I think I'm starting to fall starting to come out of it again, where I feel like I've, you know, taught myself enough of the design, and I'm starting to get better, and have figured out my process for like the data analysis part where I'm feeling confident again, I think I'm like, Finally, over the hump of the second wave of imposter syndrome.

</p>
<p><strong>Ryan Burgess</strong><br />
I think also another way to is like, because that could be that could hit that crippling moment where you're like, Oh, my goodness, I need to learn all the things and you list off like 30 things, which is probably impossible, not impossible, but in a short time is absolutely impossible to learn all that. I think another thing too, is stop for a second and reflect on all the things that you know, well almost remind yourself of like, oh, yeah, no, I've got X, Y and Z. I've crushing that. It's, you know, the letter A that I need to kind of maybe go spend a little bit more time on. And so I think like just honestly, it sounds cheesy, but like, reflect and go, What am I good at?

</p>
<p><strong>Stacy London</strong><br />
And that's really good. You mentioned stats, surely so one of the things that I'm having to do right now is something like this, like do some like pretty hardcore data analysis with like confidence intervals and standard deviations and all this stuff that like

</p>
<p><strong>Ryan Burgess</strong><br />
I took a staff class a data scientist, you

</p>
<p><strong>Stacy London</strong><br />
Yeah, exactly. There's a reason this is a profession. It's like yeah, imposter syndrome, like happening hard with that because I'm like having to try and get your head around those things, but do it well enough. So You can like, create meaningful visualizations stuff. And one thing I think maybe that can help other people, if you're like, put in that position where they're like, maybe you're being asked to do something that you're like, wait a minute, there's like data scientists, people do this as like their entire job. You could, at least if you haven't comfort to, like, try and push back a little bit like to, you know, talk to your manager or somebody to say, hey, actually, it would be great to get some help on this, like, can we reach out to the if you're, if your company is lucky enough to have a data scientist or team of that? Can we reach out to them and get their consultation to help with this? So that you don't feel like you have to master something that takes years to be really, you know, excellent at so asking for help. I guess

</p>
<p><strong>Shirley Wu</strong><br />
I want to ask this question, which I think is the opposite of what Jem was saying about like a director feeling confident about asking questions, and then a little bit of what Stacey hadn't touched on to, which is, I knew that when I'm the new person, or when I don't know anything, like I just feel so insecure. Asking a question. And so how would you go about that? Like, if you're absolutely new in the company, or you're absolutely new to the field?

</p>
<p><strong>Ryan Burgess</strong><br />
It's funny, though, surely, it's like you said, like, you're like, I can ask that question. Because I feel more established. I, you know, I have these proven things. And it's like Augustus saying, like, I you know, he's coming from like, a lot of JavaScript things like I'm learning go. And I've got to ask some questions around go, because that's not a language I'm familiar with. Think about it is more. And this is kind of, I don't know if it's the best answer. But it's like, you almost just need to get over the fact that, you know, you just need to ask the questions. Because like, if all of us here, if you had someone that was right out of school, and you're working with them, and they asked you a quote unquote, simple question, do you actually judge them for asking it? I personally don't. I'm like, Cool, I'm happy to help an answer that I feel happy to help. Like, I'm actually feel good about myself that I'm like, oh, cool, I can help you there. I'm not judging them. And so I think like, a lot of it is just ask the question, it's really hard, I get it, get over it. Because the longer it goes on. When you ask the question a month later, it's worse.

</p>
<p><strong>Stacy London</strong><br />
Hopefully, like, it should be an organic thing to you should, hopefully you have maybe a mentor or a buddy are, you know, someone assigned to you to like, make it more comfortable to ask a question, not in a big group, like in a Slack channel with 200 people in it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, so So you mean, don't add channel?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, channel. Hi, I have a question.

</p>
<p><strong>Stacy London</strong><br />
And then, and then like, if that mentor, hopefully you have a good mentor, good buddy, that is like kind and makes you feel comfortable and doesn't shame you for asking things. But then it should grow bigger there. So like, that'll start the trust. And then the bigger team. If they're also acting that way, then the trusts grows. And then you're like, oh, I can ask the bigger team that I'm on. And then it can continue to keep growing as long as people like, don't break that trust.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, like super plus one to that, like, just having a new hire buddy. When I came to twitch, having a new hire buddy to ask questions privately made me feel a lot more comfortable. And of course, like when I when I became the new hire buddy for a new hire, you know, I like you could totally relate to how they feel right? I also want to say that one thing I really appreciate that I only recently realized Twitch does is like they have office hours, like certain teams have office hours that you can go to, it's like every week, they just go into this Google meet or something. And you can just hop in and ask whatever, whatever question you want. And like, especially for B, who doesn't know anything about AWS? Like I go to the system, and for office hours, I asked like, Hi, this is probably a dumb question. But what is this? And they're like, oh, yeah, it's just right. It feels like I don't know, like, when you type in a channel just feel so much more formal. Like, this is a question like, everybody's like, looking down like. So I

</p>
<p><strong>Stacy London</strong><br />
like that idea. A lot.

</p>
<p><strong>Jem Young</strong><br />
Surely, I love your point. Like we we all work at fairly large tech companies, or our you know, the top rated data visualization engineer in the world. So like, we all have things we can fall back on. Like we have some sort of confidence there. And we can't go backwards. Oh, yes. That was even deliberate. But I think what we can do as senior people is create environments that are welcoming for other people. And just like we asked questions, let people know that they're free to ask questions, and then we can just make things better for other people. And I know that doesn't help if you're new and you're starting out and you're like, well, they've all been doing this For years, and I don't have that experience, I guess my only advice is find a place where it's okay to ask questions. And if people kind of browbeat you or give you the side eye and be like, That's a dumb question, then it may not be the right place for you. And I say that cavalierly, like, it's easy to find a job. But if you can, that's a sign of a bad culture, if people don't ask a lot of questions, and they just like, okay. The CEO just gave a big speech about something, okay, nobody has any questions. I love when people dissent, I encourage you, if I'm holding a meeting, I'm like, disagree with me. Because like, that's how we get to the right idea. If I'm just bulldozing my opinion, which I can do very easily, then like, we're not going to arrive at a well balanced, reasonable conclusion. So like, disagree with me,

</p>
<p><strong>Ryan Burgess</strong><br />
I purposely disagree with you.

</p>
<p><strong>Jem Young</strong><br />
Because it's true.

</p>
<p><strong>Ryan Burgess</strong><br />
Also, I think for like people who are maybe a little more senior, we're talking with a group here that are more senior. And I think it's a good reminder is like empathy. Empathy is so important. We were all in that position. We were all day one didn't know what the hell we were doing. And someone along the line took time and answered our questions. And so it's like, it's a good reminder for all of us answer those questions. And don't make people feel like stupid for asking the question. Even offer. Hey, you have any questions? Just ask. There's gonna be tons of questions. Like, I know, when I started this job, it was like, Whoa, man, there's so many acronyms. There are so many like code names. There's so many different things that I was struggling with. I wish I asked those questions. Just make it feel more welcoming to like, I think that to me is a good reminder for all of us is like, what can we do to help day one person feel better about it, because it is hard. I love

</p>
<p><strong>Shirley Wu</strong><br />
what all of you are saying about how with imposter syndrome, it really is very much about like, insecurity and how we feel about ourselves. So like what Stacey was saying about like fostering a place of trust. And because it really is about trust. I love what you. And I love what's being said right now and to kind of take what you all been saying. And I guess as a beginner, and this is something that's hard to keep in mind when we're just beginning. But it's that cliche of we were all once beginners. So unless we're real assholes, we're not going to be like, shaming you for the questions you ask for, as a beginner. So I think that's a really great reminder to

</p>
<p><strong>Mars Jullian</strong><br />
kind of add on to that, like, we definitely were all beginners once, but we will also all be beginners again. And that's something that is that easily triggers imposter syndrome. But it's, it's also important to have that empathy, because you're going to be in that situation where you're starting on a new project, or you're moving to a different area of the stack that you don't understand. And then you're kind of you're you're in that position again. So it's, it's definitely something we have to remember that we're not we're never done learning. And I think maybe that's why it seems like some people are done learning, they've accomplished all the things. But they're also not done learning. And you know, no one talks about that, which is super interesting.

</p>
<p><strong>Ryan Burgess</strong><br />
No one has done learning.

</p>
<p><strong>Shirley Wu</strong><br />
I also feel like that's a lot of the reasons why a lot of us are in front end, because we're constantly learning. And we love that challenge. So I guess we're also just constantly putting ourselves into impulses. I guess I am.

</p>
<p><strong>Mars Jullian</strong><br />
I think it's interesting, too, I wonder if it's unique to front end, or if there's it happens in other areas too. But it feels like front end, there's a lot going on in front end. And a lot of the times none of it none of it's really the paved road. So sometimes what you're seeing, or you're seeing other people express is really an opinion and not necessarily a fact. And so we're dealing a lot of times with a lot of opinions that come across as facts and that can also lead to imposter syndrome of like, here's one opinion, here's another opinion, there's the like, there are so many options, the world is so huge. Where do I even begin? And that I don't know, at least for me really contributes to it. It's like you get paralyzed by all the options for getting where you've come from and that you know, what you really learned as better coping mechanisms for all that stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
Even just like the frameworks, you know, what I mean? Think about is like the the front end frameworks that are out there. It is fact it's like React is best, Ember is best view is best anglers best. Like seriously depending on who you talk to you it's not an opinion. It's fact this is the best framework and you should use my framework because of XY and Z. Weird claim to me one thing before we jump into pics I'm really curious because I think this comes up a lot in thoughts around imposter syndrome is social media. How does that help or actually hurt imposter syndrome for all of you?

</p>
<p><strong>Mars Jullian</strong><br />
Oh my goodness, right I'm so glad you asked this question cuz I wanted to say something about this earlier, but I didn't know how to work it in. And it was kind of piggybacking off of something Jem said, which was about like, directors setting examples about asking questions. And one of the things I feel about social media is like, the majority of examples that we see as software engineers, about people just generally working in the industry can sometimes be on social media. And those are the loudest voices in the room. And what you don't see is all the like, really accomplished software engineers who are perfectly good examples of people just you know, doing their everyday work asking lots of questions. You don't see those exams? Yes. So social media, again, is like really just a lot of people expressing their opinions in a world where we have no paved, I'm going on a rant, where we have no paved, yes. Oh, God. Where we have no paved path forward, and you don't see like the 90, it's like the tip of the iceberg, right? Like, that's the 10%, who are the loudest, and then there's the 90%, underneath where it's like, everyone is just as accomplished, always asking questions, making mistakes, doing all the things that you don't see that are, you know, just like what normal everyday people are doing. And those are the examples we really need to see. But that's really, that's not what, that's not what we get exposed to most of the time. So to answer your question, no to social media,

</p>
<p><strong>Ryan Burgess</strong><br />
or what we need Mars is more people being very open and honest on social media. Would that help?

</p>
<p><strong>Mars Jullian</strong><br />
Okay, so I have another? Yeah. No, I mean, I think that would be great. If we could, you know, I think it goes back to things that we've been saying about like psychological safety at companies and online is just not psychologically safe. Asking questions, being that example of someone who's always learning something new or starting at the beginning, no matter how much experience you have, there are so many people online who will take you take that and just rip it to shreds. And that's really a shame.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, what's unfortunate tonight? This is something I see often on social media that surely you alluded to something to being like, Hey, am I the diversity hire? I see on social media to that, I could say pretty much, you know, also get shit on for on Twitter. But a woman says something that's like a different viewpoint or something like that, and it took tweets and stuff on top of that, I'm just like, Whoa, it is a very horrible place. And so, you know, I think we need to be able to share different opinions, and we don't all have to agree with them. We also don't need to shit on each other for it. And and for some reason, it's so unfortunate to see a woman gets gets way worse. Like, it's like you share your opinion. And then that's not it. I don't know, it's really bad. I don't know where my rant

</p>
<p><strong>Jem Young</strong><br />
surely brings everybody

</p>
<p><strong>Shirley Wu</strong><br />
just incite people.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm just frustrated. You know, like, I'm definitely frustrated.

</p>
<p><strong>Shirley Wu</strong><br />
So I definitely see that. And I think, I don't know if I'm just like blissfully unaware when someone insults me or, um, but I don't think I get as much of the visual. And, and I always wonder if that's because I've made it a point to live code and my talks. And because I've heard of stories of, you know, women speakers sharing their demos or, you know, showing their projects and then having people question if that was actually their code. And so I've made it like my a point to live code, so nobody can doubt that, like, I wrote that code. And so, and I also like Twitch stream II coding, and so nobody can doubt if I wrote that code. And so I don't know if it's because of that, that like, I don't get as much

</p>
<p><strong>Ryan Burgess</strong><br />
of, but you shouldn't have to do that. Well, yeah, yeah. Yeah.

</p>
<p><strong>Shirley Wu</strong><br />
Yeah, this is just proving your point. Actually.

</p>
<p><strong>Jem Young</strong><br />
I just remember, social media is people's highlight reel. It is not their day to day, it's not their real life. And I'm like, Cool, good for you. As, as people have pointed out, the best engineers are down coding or not busy posting on social media. And just on top of that, there are people that are paid to post on social media, their dev developer relations, it's their job to build things to post on social media. So like, don't don't get hung up on it. I, you know, just do your thing, do your thing, and you will, you'll be fine. And also

</p>
<p><strong>Mars Jullian</strong><br />
kind of piggybacking off of what you said, jam, like, No man is an island, like what you see on social media also may be attributed to one person and it's their responsibility to promote something, but there has to be a whole team behind them. Like, you know, going back to imposter syndrome. Like everyone is asking questions all the time, and there's someone who was there to support along the way. And so it's hard to see like, you know, that highlight reel without any of the context behind it.

</p>
<p><strong>Ryan Burgess</strong><br />
Do any of you feel imposter syndrome sitting talking on a podcast at You

</p>
<p><strong>Stacy London</strong><br />
know, like some, I don't know if it's imposter syndrome, but for sure, like, sometimes I worry, I'm like, also like, oh, that's gonna go out into the world, it's gonna be on record forever. And, you know, like you think about that stuff? And what that means? And who's going to hear it? And who's going to respond? Or will someone get mean about it? Or, you know, all of that stuff kind of swirls and swirls in your head a little bit. I don't know if it's not necessarily imposter syndrome, but more like, who am I to make these bold statements?

</p>
<p><strong>Shirley Wu</strong><br />
I think, for me, I also think a lot about because as a woman in tech in Silicon Valley, like, I think there's more tendency, or there's oftentimes a lot of tendency for people to be to pick how we say things, and how we come across. I've certainly been called names for for expressing strong opinions and standing by them and not backing down. And, and so I think that has made me very careful with what I say. But that's not necessarily imposter syndrome. We're now getting into a new topic, tighter territory.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, it's a good time to jump in. Yes, we can definitely go down that road. You know, in each episode of the front end, happier podcast, we always like to end with sharing some interesting things that we found wanting to share with all of you, Stacy, what do you have for us?

</p>
<p><strong>Stacy London</strong><br />
All right. Three, three music picks today. First one is a song called what they do is not art by an artist called Cloud kicker. I've picked one of his songs, I think quite a while back, he is one person does it all, so plays all the instruments, and mixes it all together. And it's like postrock, post metal genre, and it's instrumental, there's no vocals it's the first this is that songs off the first new album that he's had in a while. So it's a lot heavier, and then some of his older stuff. So it's, I like it, I thought it was good. And then the second one is Ashtabula. And so that right, but that's another song off that same album, which I think is really good. So if you're feeling a little frustrated by maybe waves that everything in the worlds right now, maybe some, some instrumental metal might might be a good release. And then the third one is answer my prayer by eschaton, which is a mix of ancient methods and orthofix. It's a hard techno pretty bass heavy, hard edge industrial palette, saturated noisy hardware. Steel sounds are some words that have described.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow, I love it.

</p>
<p><strong>Stacy London</strong><br />
That's it.

</p>
<p><strong>Jem Young</strong><br />
Say so you're like a sommelier for for music. I like what does the song feel like? You're like it's like a like gentle breeze in the summertime, across your face. And like, yeah, that sounds like the right track for me

</p>
<p><strong>Stacy London</strong><br />
to be for the record. I'm always pulling these off of like other other people have written these descriptions.

</p>
<p><strong>Ryan Burgess</strong><br />
Don't just take credit. It's fine. It's good.

</p>
<p><strong>Jem Young</strong><br />
It's the internet or we take credit for everything.

</p>
<p><strong>Ryan Burgess</strong><br />
Mars, what do you have for us?

</p>
<p><strong>Mars Jullian</strong><br />
Oh my gosh, I always go woefully unprepared with pics. Like every time whenever you say pics halfway through the episode, I'm like Googling, like what was what is interesting recently. So I'm only gonna go with one today just because my brains not functioning anymore. But that is going to be the Great British Bake Off, which is the new season is coming back to Netflix. This was the 25th is Saturday. Yeah, no tomorrow, coming tomorrow. And given the whole situation. I need good vibes only. So I need lots of British bakers being so competitive and nice with each other and just like colorful frosting in my life.

</p>
<p><strong>Stacy London</strong><br />
Yes,

</p>
<p><strong>Mars Jullian</strong><br />
that's my pick.

</p>
<p><strong>Jem Young</strong><br />
Maurice. Have you seen the great Canadian bake off yet?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, I

</p>
<p><strong>Stacy London</strong><br />
don't know.

</p>
<p><strong>Jem Young</strong><br />
Yes, it's it's the same thing but it's Canadian. So it's also a friendly

</p>
<p><strong>Shirley Wu</strong><br />
way are they even nicer?

</p>
<p><strong>Ryan Burgess</strong><br />
They maple bacon they

</p>
<p><strong>Jem Young</strong><br />
Yeah, the one episodes is like maple flavored Of course. And it's hosted one of the what's the guy from shits Creek? David. Dan, love it. Yeah, he's one of the hosts of the show. And it's pretty pretty delightful. He's awesome. So if you need some great British are great baking show fix. The Canadian one is almost as good.

</p>
<p><strong>Ryan Burgess</strong><br />
I got this. What do you have?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh yes, I have I have two picks. Speaking of social media, my first pick is the social dilemma on Netflix, I finally got a chance to watch that. Yeah, it's a mate really makes me think of like, what impact, you know, Tech has on the world and, you know, like, ethics of like, what the choices we do when we're building software. So I definitely think it's worth checking out.

</p>
<p><strong>Ryan Burgess</strong><br />
Can I ask, Can I ask a question on that one? I didn't get through it. I like started it. And I was really disappointed. All I saw was a bunch of white men maybe like one woman speaking. And so like, I get better later that

</p>
<p><strong>Augustus Yuan</strong><br />
I also think there were some cringe moments. But I think I don't know, I like to think of it as like focusing on the message it's trying to send, there was

</p>
<p><strong>Ryan Burgess</strong><br />
a good message

</p>
<p><strong>Mars Jullian</strong><br />
starts out with a lot of stuff we've heard before. And then when you get like, at least halfway through, it starts getting more and more nuanced. And then you're like, oh, yeah, no. Okay. So it starts off with stuff. I feel like people the tech industry, nope. All right. Yeah. And then it kind of gets into like, what's really dangerous about what's going on? Alright, I

</p>
<p><strong>Ryan Burgess</strong><br />
need to go back then. That's why I was asking is like, should I go? Like I did. It was not

</p>
<p><strong>Stacy London</strong><br />
diverse, for sure. And there are plenty of people think that like, I think Mozilla actually posted a really nice Twitter thread on it, highlighting people in the industry who have been trying to raise these issues, many, many for many, many years. And they're like, you know, from more diverse perspectives, so maybe, maybe I'll share that in as another pick.

</p>
<p><strong>Ryan Burgess</strong><br />
Sorry, I guess this yet pick Yammer

</p>
<p><strong>Augustus Yuan</strong><br />
to my second pick is Rocket League. But recent. It's a video game. And a really big announcement happened. It's gone free to play. So anybody can play now. So yeah, y'all should play. It was it was a very small game, it started dying. And then like a few actually, a few hours ago hit a million players. So it's very exciting for so yeah, you should definitely play

</p>
<p><strong>Jem Young</strong><br />
Rocket League triggers my imposter syndrome. It's so hard. The game is so hard. And you see people like online things. I'm like, you can even do that. Yeah.

I have to fix the first one. I swear I shared before, but I can't find a reference to it. So I guess I didn't, I would have thought I would have it is the notorious xx. So it is the xx mashed up against Notorious BIG. And it is just a phenomenal mashup. Like, this is the stuff the internet is made to do. It's a few years old now, because even xx isn't that big anymore. But it's so good. It just goes together. Well, I am such a big fan of hip hop, mashups, and collaboration, like if you have any sending to me on Twitter, because I just love hearing all of them because I like hip hop and rap is the most popular genre in the world. And like hearing a mix with other genres is just so incredible. It's one of my favorite things. For my second pick, it's the valley silicon pick, it is the part of the show where I pick things that are just so ridiculous and so expensive that they should exist other than the fact that we all get paid too much money. You know, I go on rants you know, I go on rants all the time about my exercise bike, you know, this, this NordicTrack you know, it's $2,000 which is the price of a car moped and it's a bike and it has so many issues and I you know, I'm generally dissatisfied with it, but I don't have a choice because we're all locked down. The gyms are closed. So I found an even better bike. This one is called the fury pista I'm probably pronouncing that wrong. And it is handcrafted made out of wood and acrylic. It's more of an art piece really. Ah, but the privilege of having this exercise bike you know, I was complaining about mine which costs about $2,000 for a peloton which costs about $2,000 This one can be yours for a measly $16,000 That's it. Think of it more like a piece of art that you can exercise on?

</p>
<p><strong>Ryan Burgess</strong><br />
No no. This is a piece of wood with an iPad is what it is. I will build you this 5000

</p>
<p><strong>Jem Young</strong><br />
The iPad that is it's pretty insulting. Yeah, it doesn't scream

</p>
<p><strong>Ryan Burgess</strong><br />
I will I will build you all any listener that wants for 5000 and I will include an I O might be a mini but I will include the iPad and it may not work but it will be what I don't even know

</p>
<p><strong>Jem Young</strong><br />
who would buy this cuz like

</p>
<p><strong>Ryan Burgess</strong><br />
I mean it looks it looks cool, but it looks cool.

</p>
<p><strong>Jem Young</strong><br />
I don't know man like maybe I don't hang up a millionaire billionaire crowd but it's like oh,

</p>
<p><strong>Mars Jullian</strong><br />
it looks sturdy though. Like,

</p>
<p><strong>Jem Young</strong><br />
yeah, anyways, we will post the link in the show notes.

</p>
<p><strong>Ryan Burgess</strong><br />
Surely what do you have for us? I can't I know it's hard to follow that.

</p>
<p><strong>Shirley Wu</strong><br />
It's not even all wood, it's

</p>
<p><strong>Jem Young</strong><br />
it's not even good looking at me like, honestly, it's not that good looking.

</p>
<p><strong>Shirley Wu</strong><br />
Okay, so I originally had to, and in the span of everybody else's pick, it's bloated up to four.

</p>
<p><strong>Ryan Burgess</strong><br /> 
Wow, I love it. Just like,

</p>
<p><strong>Shirley Wu</strong><br />
you know, I have to, I have to take advantage of the fact that I don't come on that often. And so then I have to just like, take full advantage of when I am on. So the very first one I wanted to, that I wanted to share is there's been a lot going on in the world. Just a little, a little bit. And it can get really overwhelming and make me feel powerless. And so there's been a newsletter that I've been subscribed to called one anti racist action a day. And a URL, I think is one action dot today. And is just every single day, and just like one paragraph of, you know, something that's happened, and something, some small action that I can take. And it's really nice, because when I'm like reading all the news, and everything that's happening, I'm just like, oh, I can't do anything. But like this just like, helps me kind of break it down, like step by step, like every day, I'm just doing one small, little thing. And it's just been kind of really helpful to help me feel sane in this time, and also kind of keep up to date with what's happening. And so that's my first pig II second one is also related. And it's quite serious, which is this PBS documentary called Asian Americans. And this one is more like a very personal thing, which is, I'm Chinese American. And I've been here for like 20 years, I went through the American education system, which means that I learned a lot about Western history. I know a lot about American history, European history. And I always thought in high school that that was really unfair that I didn't know about my own. Well, back then I was Chinese, I didn't have citizenship yet. So I felt like it was really unfair that I like did not know my own cultural history. So I taught myself a lot of Chinese history throughout school. And so I know a lot about Chinese history. And what I never realized, was actually the most important and relatable for me is Asian American, like Chinese American and Asian American history, because I never felt like I could relate to either histories. And, and I didn't even realize that Asian American history was a thing until like, the last few years. I don't know why. And I it's been like, you know, the last few years has been a lot of self discovery of like, oh, this is the one that I relate to the most, um, and this PBS documentary has been really helpful for me to just kind of like, learn our history being here. And all of the things that's, you know, happened and all of the reasons why we, as Asian Americans experience things, as we do currently. And I had a friend I think, put it really eloquently of kind of that weird dichotomy of being both an oppressor and oppressed. See, and I think the PBS documentary has been, like, kind of really helpful in helping me give like, give me context. So those are my two more serious ones. And my two more lighthearted ones are, I just remembered because of Jen's pic of a wooden

bike. His comment about exercising during this time, when quarantine first happened, I couldn't exercise for like three months because we didn't go outside. And what's actually been really helpful in the last three months is that my husband by ring fit on Nintendo is a it's essentially an RPG exercise game that I never thought I would get into because it sounds so gimmicky and silly. But actually, it's as someone that doesn't like exercise and does not play games. I have been extremely irregular for the last three months because apparently the gamification really works. And so the premise of it is that you get kind of these two external devices and and to be able to progress in the game. And like for example to like run through a level you literally run in place and for you to like fight monsters and progress. And you have to do like various exercises. And those exercises are like, they have like, you know, dozens of different exercises that are like targeting your arms or your arms or your legs or your balance. So unlike presumably the $16,000 bike, it's actually been really great effect my like mental and physical health. So that was my third one. And my fourth one final one is a anime on Netflix called Great pretender. The premise of that is a common a Japanese calm man that thought he's a really great common getting conned by a nother like, even more master con man. And then like, kind of like getting like swooped into this comments con. And I didn't think that I was gonna like it. But it's so good. Currently, there's one season, and there's a second season coming out sometime in like this month or next. And it's got beautiful jazz music like super. Yeah, like super. Yeah, it's just really good Jasmine, beautiful arts and really kind of like pop color art. Sort of. So highly, like, enjoyed it much more than I thought I would really recommend. Yeah, great story writing to Greek character development.

</p>
<p><strong>Jem Young</strong><br />
And it's by the creators of Attack on Titan, and my personal favorite anime, which is FLCL. So and I, and I love a good heist movie. So like, this is absolutely on my list already. I haven't seen it. I'm excited. Yeah, it's

</p>
<p><strong>Shirley Wu</strong><br />
super good. Highly recommend.

</p>
<p><strong>Ryan Burgess</strong><br />
I have two picks. They are both movies. But not on Netflix. They're both on Amazon Prime. One is knives out. It's something that had been recommended to me multiple times. And I just never really got around to watching it. And it was really, really good. It was just like, it's a mystery of the whodunit type. And, and there's amazing actors in that too. So I highly recommend it. It's like, it's just a cool like story of a murder that happens. And like it's got its twist. I think some of it felt a little bit predictable, but I still really enjoyed it. Definitely recommend checking that one out. And then, oddly enough, a documentary. That is Netflix versus the world. It's a documentary about Netflix. It is very weird watching it on Amazon Prime. I don't know. You know, it's kind of feels a little weird. But there is a documentary on Amazon Prime about Netflix. It was really interesting. They interview a lot of the early Netflix employees and really talk a lot about the history of Netflix. But also they interview a lot of people like executives from blockbuster. And they talk a lot about this what was going on in the world back in when Netflix started. And you know what changed for blockbuster. And so there was this little bit of battle between Netflix and blockbuster. And and it was really interesting. Like a lot of it to me, it was like, Yeah, I knew that happened. But it was really cool to see that they even have like old commercials that each company aired. And to me that was really nostalgic. I was like, Oh, I totally remember that. So it was it was really cool to watch. But yes, a documentary about Netflix on Amazon Prime. Super weird, but definitely worth watching. Before we end the episode, I want to thank surely Always a pleasure having you. Where can people get in touch with you?

</p>
<p><strong>Shirley Wu</strong><br />
Yeah, so my Twitter handle is at S x y Wu my portfolio website is at the same handle.com And then I've been live streaming and my data visualization process on Twitch and archivi on YouTube. And I was trying to, like still trying to figure out Instagram, but it is the same handle of them trying to like figure out how to fit my data visualizations into Instagram. Yeah, interesting. explantation

</p>
<p><strong>Ryan Burgess</strong><br />
Jeb might sign up now to go see that. How insulting

</p>
<p><strong>Jem Young</strong><br />
would you be if I joined Instagram to follow surely but not you asking me for years. years.
</p>
<p><strong>Ryan Burgess</strong><br />
I just think it's funny that you're so like against it. It's really funny, which I mean, that's fair. And I mean, it's okay. You don't need it. You're not missing out. Thank you all for listening. Today's episode. You can find us at front end happy hour.com We actually are on Instagram at I can't believe it's <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a> and can also follow us on Twitter at front end. Ah, any last words?

</p>
<p><strong>Shirley Wu</strong><br />
Thank you for having me.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. Cheers.

</p>
`;
        return transcript;
    };