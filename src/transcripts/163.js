module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. Augustus you recently your team got awarded a patent for some work that you all did. And what a great thing to talk about is learn more about patterns in tech. So that's what we're gonna be talking about today. So congrats, Augustus.

</p>
<p><strong>Augustus Yuan</strong><br />
Thank you. Thank you. Appreciate it.

</p>
<p><strong>Ryan Burgess</strong><br />
Let's also as we dive in, obviously, Augustus is here I'm here. But let's give introductions of the panelists. Stacy want to start off?

</p>
<p><strong>Stacy London</strong><br />
Sure, Stacy London. I'm a principal front end engineer on Trello.

</p>
<p><strong>Augustus Yuan</strong><br />
Hi, my name is Augustus. I'm a software engineer at Twitch.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm an engineering manager at Netflix. In each episode of the front end happier podcast, we'll choose a keyword that if we mentioned it all, in the episode, we'll all take a drink. What did we decide today's keyword is intellectual, intellectual? Definitely very legal term oriented, fits really well. I like it. Well, let's dive in. I would like to know, what is a patent, maybe we should start there,

</p>
<p><strong>Stacy London</strong><br />
I had to really dig into this like, because I actually didn't know the history of the patent system. I got a patent through Atlassian, a few years back. So I went through the process of it, but the history of it and like why it exists was you know, sort of fuzzy to me. So to refresh myself for this episode, I did some some digging.

</p>
<p><strong>Ryan Burgess</strong><br />
So you both are patent engineers, is what you're telling me.

</p>
<p><strong>Stacy London</strong><br />
So you might call us shares. So one of the things I learned, which was interesting is that the legal basis for the fact that we have patent offices that it's in the copyright clause, of Section Eight article, one of the US Constitution, and the idea of it being there was to kind of promote industrial technological progress, strengthen the economy. So that was sort of the like, background on like, why, why it exists.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Like, I hadn't really thought about where it came from, it was just more like, oh, well, so you can, you know, protect the rights to things that you've created, invented, but hadn't really thought the history and how much depth that goes even into the Constitution. That's really cool. And of course, there's also three different types of patents. There's like a utility patent, a design, and then a plant, which I'm not really quite sure on the plant what that means. So the design patent is really like having something that's unique novel visual qualities of a manufactured item. And then the utility patent is the idea or product that provides utility or function that benefits. Essentially, the way I've always thought about patents is it provides exclusive rights to the patent owner that protects their idea or technique from others being able to use it.

</p>
<p><strong>Stacy London</strong><br />
And in theory, it has to meet certain criteria. So it has to be really novel, maybe not obvious, it has to be described sort of in enough detail for a qualified person to like, maybe build and use it and then it has to actually work. The interesting part is like those are what are sort of these parameters for qualifying, but they maybe aren't always like, strictly adhered to. So that's why you see like lots of news stories and things about like, silly patents or patents that don't really, you're like, what how can that be a patent? Like that doesn't make any sense. Like if there was I think one a long time ago about cats and lasers. I thought it was really funny. It was like the method of exercising a cat covers having a cat chase a beam from a laser pointer. I think you got like, I don't know if that's still around. Yeah, it was criticized for being obvious. And not pet Wow.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And patents can be overturned to like they like I mean, they can be rejected. If you're applying like Stacy, you'd mentioned having to have an application and make sure that it meets certain criteria. So you have to go through all that and they can totally be rejected, but I feel like I even remember reading that they can actually be kind of revoked at some point too.

</p>
<p><strong>Stacy London</strong><br />
Yeah, they do have expirations, too that's that's the other part of it. Like do expire but it's really long period of time.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, you're right patterns only last 20 years. What does it mean for you know, we're talking engineering and tech, what does it mean to have patent like our Are we patenting certain techniques? What are we patenting? Like? Augustus? You just went through this, what was the patent that you went through?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I guess I can talk a little bit about that. It's cool, because patents are public. So it's not like something that we have to hide, hide behind somewhere. It's like something public and it's shared. So slowly, you can just look it up. The specific patent that I had was we worked on. So I work on a team called promotions. And we're responsible for a lot of the paid content that might be scheduled on Twitch. And we were trying out this thing called Community boost, you might have seen it's called boost the stream or boost challengers. And it was really this way for viewers to participate in promoting a creator. And so the actual promotion isn't something that's really new, you see a lot of places do it, like Reddit or Facebook, you'll see like promoted labeling on something. And that's like lifting certain pieces of content to like higher sorted order in your, like recommendation feeds. But the specific thing that we patented was, and it's kind of interesting for Twitch, because we're promoting a creator, we wanted to make that experience when a viewer joined that promoted stream, like we wanted to create an exciting feel to it. So we like created this experience, essentially, where like, once that creator got promoted, like some like really, pretty UI would show up like celebration, or confetti would show and that was, that was kind of what we patented the experience of a promoted stream.

</p>
<p><strong>Ryan Burgess</strong><br />
That's cool. So confetti was, you know, yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Very intellectual, your mind. Cheers, cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
And then Stacy, you said you had a patent a few years ago? What was that one for?

</p>
<p><strong>Stacy London</strong><br />
Yeah, um, so my friend Emma and I we paired up at we have these hackathons, these internal hackathons at Atlassian. And they're called chips. And we pair it up to work on this idea we had. And the idea was, we thought it would be cool using like sentiment analysis engines, to try to make tech more kind and like make communication more positive, by giving people feedback as they type things. So like, let's say you're, you know, in a code review, and you're doing a comment on a pull request, it might analyze what you've written and say, like, Oh, your sentiment score is low, or it's high. And then the part that was the patentable piece of this, I guess, at least from the lawyer's perspective, was it I took an emoji and like, based on the sentiment score would display, like a happy face for, you know, a good score or a frown face for a bad score, or like, displayed the poop emoji for the worst score, like. So that was the hackathon thing that we did. And we ended up like, I think, at the time, we didn't have any sort of sentiment analysis stuff internally. So I just use one that was publicly available from Microsoft. But that part really wasn't like, what the patent was, it was about the graphical, it was like the graphical user interface of displaying sentiment. And so we did the hackathon. And we like demoed it and everything, and people thought it was cool. And a while later, the lawyers from Atlassian must have started, like looking through past hackathons and the presentations and sort of things that are happening internally. And we're like, we think this is like a really cool idea and patentable. And when we that's, they approached us, which was interesting. So I didn't like, reach out. Now, the patent program is pretty robust. And like, if I thought I had a good idea, I could go to the lawyers and say, like, patent this, but I didn't know like that that was the thing. So they came to us. And then in general, like the idea like for Atlassian, at least is it's not. It's it's using patents for defense and not to be like, an aggressor of it. So like Atlassian is not going out and trying to sue people. It's the inverse. There's a lot of patent trolls that may like patent something that they see in one of your products, because the patent doesn't exist and then come after you and try and extort you or like litigate like sue you to get licensing fees. And so the posturing from Atlassian is just to try and like protect against that. with like, kind of a protective intellectual property shield, cheers intellectual.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Cheers. Cheers.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I guess it's like leaving your door open, right? Like to the company where you're like, oh, yeah, just kind of come in and like, you know, take whatever you want. It's like, well, no, we don't want you to take her ideas and try and basically, make it your own and then reverse sue them. So that that actually makes a ton of sense to just almost cover their asses a bit, just in case some troll comes after them. That makes a ton of sense. Yeah, I'm not cool enough, like YouTube having pattens, which is so cool that you have that. But I know I've been involved. We're even some lawyers in Netflix, we've talked about that. Like, where it's been like, even maybe it's like once a year where people are like, yeah, what are the types of things that are being worked on? And so those are definitely things that companies are looking for it which I think is really unique. And something that I don't know, that I was aware of, or hadn't hadn't really thought about is companies patenting things. And so I always thought that was really cool. And then hearing both of you had done recently had done that, that's really kind of a unique thing that and I know at Netflix, like there's all sorts of different ones, from automated video cropping to some machine learning type things like I was going through some of the list of it. And I was like, wow, these are things I didn't even know we had done before. So it's kind of cool to even see that. Stacy mentioned, like, your company approaches it more in the sense that, that you can submit ideas, but earlier on, they were kind of approaching people and trying to come up with that. Augustus, how did it start for you all on your team?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I love what safesleeve mentioned. Like the whole protection, like that's how Amazon's views it as well. And yeah, actually something pretty similar. We, we RPM at the time Janette, she, she had other reasons for reaching out to our Twitch legal team, about the product, you know, to make sure it was okay, and maybe some of the vernacular of what it means to be promoted by your viewers. And they Yeah, they were actually the ones that said, hey, you know what, you should reach out to the Amazon patent team and see if this is a worthy idea, because it looks like it, it could be in. And that's really when it got kick started. And yeah, I'm just really thankful, I'll be honest, I do not know anything about what actually happens in the application process. It was really done by the whole patent team, like they set up a meeting for us to, and they like, they were responsible for writing a lot of illegal vernacular that is required for these patents. And they just kind of asked us questions to make sure is this right? The use cases that are described in the patent? And like the future thinking of it, like, does it look accurate? So but that's how it kind of started for us, like someone from legal really recommended us to look into

</p>
<p><strong>Ryan Burgess</strong><br />
it. That's cool. And I also think something that's interesting, too, is that it's not just one person, right? That you're like, oh, Augustus created that or Oh, Stacy created that. It's like, you know, in Stacey, your case it was you and another engineer working together, I got to see was your entire team, correct? Like if Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
which was like seven or eight people were all on the patent, which is really cool, because

</p>
<p><strong>Ryan Burgess</strong><br />
then your name gets filed with the patent. So it's like the company, but then it's also the actual individuals part of that. And then you get some sort of a word for it to don't

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, yeah. Oh, well, Emma's so yeah, Amazon has a recognition program for inventors. And yeah, I think it's, you know, to kind of encourage, like, you know, not like, crazy amounts of patents, but like, you know, quality ones, that that can help protect the company from, you know, a lot of the patent trolls that exist out there. Um, so yeah, the, I guess, like a lot of companies have like, different themes for these, like if they have a patented recognition program. So for Amazon, they have these little puzzle pieces. And they give you this cool virtual badge on your like Amazon profile, I guess. That's cool. So yeah, it was cool. And I think Stacy, Stacy got one right.

</p>
<p><strong>Stacy London</strong><br />
Yeah, it was just sort of Yeah, like a little bit of an incentive or just something to say like, recognize that you did it so we get like a little desk trophy I'm not sure exactly what you call it and then a t shirt as as you do in tech, you get a t shirt for everything. So we got inventor T shirts. And bento T shirts.

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like you need a sticker to like then you've got the whole package at that point. So we kind of I love the process to have like, even from an engineer's perspective is like we're you know, a large company. He's, we have lawyers, right? Like, we have lawyers that are there to do all this work. And it's not that you're having to seek that out, I'm sure it's a lot more difficult if you are, you know, freelancer or contractor and you're like, hey, I have this great idea, I want a patent, like, you're gonna have to, obviously, probably hire a lawyer and go through that. But it's kind of interesting that we have this available to us in you know, in a lot of these companies, which is really cool.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I was gonna say for just for process stuff, like, we were approached, and then there was the look, they like our internal legal team for the intellectual property team. And then there was they worked with outside counsel for the patent. The actual like, really like the writing all the legalese and filing the patent and stuff, I think was, they had help from like this outside counsel side a few meetings with the outside counsel, where they asked a lot of questions about what we built to, I guess, to try and make sure that they could word it correctly, and make sure that it met the criteria. And one of the funniest things to me, is like, one of the screenshots that we included for, of like, an example of sometimes people being mean to each other, or like, using harsh language, in pull requests, or code reviews was an actual quote from Linus Torvalds. The, the quote, let me see if I can pull it up here really quickly. It just, it makes me laugh to this day that this is actually in the patent filing, it says, I'm sure that looks really nice if you're out of your mind on LSD, and if nothing better to do than worry about, worry about the right alignment of the Asterix. And that's like a real, a real comment. So that so we, we plug that into the sentiment analysis tool, and like it get it got a very poor sentiment score. And so we used it because we thought it was funny. It's like, oh, we're in software. And you know, this is someone that everyone kind of knows. And, you know, he's also known for being quite Curt and rude. And, you know, he's apologized, I think for it since but. But anyway, I just thought it was funny. Well, that that screenshot is in the patent documentation. So if you go and look up this pass, it's in there.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow, that's like, so funny. And then so I guess at that point, it also got the poop emoji, right, for that comment.

</p>
<p><strong>Stacy London</strong><br />
I think. I think the screenshots we use were like, there was like a second iteration where we toned it down a little bit with the the graphical stuff, and it was like, I don't think the poop made it in there. I wish it would have I think that would have been even funnier. But I don't think it's

</p>
<p><strong>Ryan Burgess</strong><br />
just gonna make sure that the emoji was there. That's, that's, that's all that matters.

</p>
<p><strong>Stacy London</strong><br />
And then final process stuff, I guess, like it took a really long time. And I don't know if I guess is how long it took from the application to actually being granted, but it was almost, like over a year and a half, I think, before

</p>
<p><strong>Augustus Yuan</strong><br />
it went through. Yeah, I've actually surprised they told us it could take up to 10 years. So we, so we were like, Okay, well, this is not happening anytime soon. But yeah, for us, it took around two years, I believe, for it to actually to after filing to go fully through like one and a half to two years.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow. That's a long time. But I guess also, that's why, like, you'll hear sometimes inventions are like patent pending, or like, they're, they're basically they're filed, but they're just waiting for it to fully officially go through. And so I guess at that time, like, it's not like someone can jump ahead of you in line is like, I actually came up with like, you know, the same thing. It's like, well, you've already kind of filed and you're already in the queue of things, too. So it's kind of interesting, like us being in tech companies talking about patents. And like, I always thought maybe this is, you know, my bias was like, a long time ago, not really fully understanding patents. But you know, thinking it's like it's an invention, it's a physical thing. It's something. But software is kind of unique in the sense that it's a digital form, right. And so, what do you think that for patents, like, should some of this be patentable? Like, you know, a technique or like a user experience, it feels a little bit weird that you can patent that?

</p>
<p><strong>Stacy London</strong><br />
Well, we just talked about how long it could take. And that's kind of one of the interesting things with software, right? Like you can it might actually take longer for the patent to go through the process and then for the software, the lifecycle of that piece of software like so for some features you develop and remove within, you know, a year well, if the patent, you know, takes longer than that At, it's already pointless, because now that you've taken that feature away, like it's just kind of a strange concept that itself is much more ephemeral than maybe some of the other things that we classically thought is patentable, like, and, you know, engineering a machine and coming up with like some novel thing that takes a lot longer to like. Go to Market.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it's funny, because I'll be honest, I would not have guessed when we were working on the project, that it was something worthy of patenting. And it looks like something that I kind of realized, like, I think we kind of Stacy kind of mentioned like, even like this laser pointer. There's like a lot of silly patents out there. And he can really patent like, I don't want to say almost anything, but it's getting pretty close to that. It's like, it's really crazy to see. But yeah,

</p>
<p><strong>Stacy London</strong><br />
yeah, it seems like the words have to be like they have to make the wording so ambiguous in these finals. I don't know if Gustus you had the six Did you? Like I know what we did for our hackathon. And then when I read the patent filing, it just was like, very abstract, like the patent words, you know, I was like, here, we, you know, we displayed a poop emoji, if you were mean, is like the super short summary of what we did. But the patent says, indicating sentiment of text within a graphical user interface, a method of presenting a sentiment indicator with entered text is disclosed. The method comprises causing a presentation of a graphical user interface comprising a screen, the screen, including a first area for receiving text and a second area next to the first area for showing a sentiment indicator and it goes on and on. But like, whoa, like, that's so generic sounding,

</p>
<p><strong>Ryan Burgess</strong><br />
but in some ways, they made it sound a lot cooler, you know, like a little more sophisticated. That's a better way to put it.

</p>
<p><strong>Augustus Yuan</strong><br />
I do I 100% agree they make it sound super sophisticated is a great word. I think that's I will say that this is like I think one of the advantages of working at a big company, because that especially has a lot of experience with these. So for example, Amazon's patent team, first off, let me just say I am no, I am not a lawyer. What did you just say? I am no. Okay, okay. Okay, quick thing, whatever. I read that online, I'm like, Oh, my God, guys. I can't believe this hasn't been moderated. But it stands for I am not a lawyer. I ain't no. Oh, my God, I had never heard that. You've ever heard that? Sorry. Wow, I don't get fired for that one. That's amazing. All right. Go ahead. Yes, so I am not a lawyer. But it definitely like one of the advantages of having a really strong, like a big company with a patent team, I believe for our patent, they kind of already had this template for like kind of illustrating a lot of maybe the foundational things they would need in a software patent. So they had diagrams of a very generic networking, microservice diagram of here's a viewer that connects to the internet and connects to this box, this server. And I wouldn't think that that is something you would include, related to what my pet our patent was about, but that that was what they included. So it feels like that. That is a huge advantage that a lot of big companies have

</p>
<p><strong>Ryan Burgess</strong><br />
one thing I was thinking about, as you guys were talking about, too, is kind of going back to, you know, should software be patentable. And when I think about some of the techniques and things that we've done over the years, like we've seen so much change so drastically in the web, like even some of the user experience, like how we do menus, like the hamburger menu, like that was a big thing, or all those things is like, someone had to create that. And yes, like it starts to be a trend and everything. But maybe someone should be credited for that. That's like kind of cool to be like, Yeah, I was credited for building the hamburger menu or the like, drop down menu. Like, that's kind of cool. And it makes sense. Like we're all kind of building off of that. It's just less physical. Now,

</p>
<p><strong>Augustus Yuan</strong><br />
you know, I've always thought of patents as like, oh, this person has an idea and wants to claim it as their own and not share it with anyone. But that's not really what patents are is what I learned. It's it's really about what Stacey mentioned, at least from a company's perspective, like protecting themselves from someone trying to be first To take write down by that idea and then sue you and get money, because if you think about all these patents are public, you can just read about them. And you could totally use them for your own. I mean, maybe there's like some restrictions on like, what you could exactly do with them. But it's not supposed to be like, Oh, at least for me, I always thought of it as like, Oh, this is my idea, no one else can use it kind of thing. And that's not what it is at. All.

</p>
<p><strong>Ryan Burgess</strong><br />
Right, because your you own the fact that you created it, but you, you kind of have to decide if you're gonna go after someone for using it at that point to but like to what you both said to as a companies are almost like, getting them so that they're not like they're just protecting themselves, just in case there is someone who goes and picks up that patent to come and sue them just just basically to make money. That's all they're really doing. Yeah.

</p>
<p><strong>Stacy London</strong><br />
I didn't read to that, like for software patents, I guess sometimes that could be good for maybe like smaller companies to prevent bigger companies who have a lot more resources, or more people from stealing the idea because like, they could go to market faster with that idea, because they have a lot more money and resources. So there's like some kind of protection for like, the smaller company or individual person to potentially, you know, be successful with their idea before, like, a big company, you know, steals it away or whatever. And I think there's, there's some niceness to that, I guess. Yeah, I think there's like, examples of like, a lot of good, good reasons, good intentions behind the patenting process. And then like, a lot of examples of like, people just gaming the system and trolling it and being terrible about it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, like to assume best intent. And I really liked the one, the one around, you know, smaller company, that that to me, is, is a good point. Because, you know, the Googles of the world, the Amazons, or whatever, like large companies can just be like, oh, yeah, that's a great idea. We can go like, tell our engineers tomorrow to go start building that, and they have that on hand. But if you are a one person, two person team, you may have to build that, like build a bigger team, that takes time, or you have to build that just with the two person team. And that takes time. And so that I never thought of it that way, too, is there is some benefits to even just claiming an idea so that you can actually execute on it without someone just swooping in and doing it first. So we talked about a little bit around the, you know, there is some negatives around patents, like there are people abusing it by like the trolls have it. I don't know how much we've seen with that with software, too much. But I know like just reading up a little bit on patents. And I know both you did as well is there's there's some like abusing it's like this already been happening in other industries. So it's likely something we're going to see more in software, but like, you know, what are some of the things that people are doing to abuse that system?

</p>
<p><strong>Stacy London</strong><br />
Yeah. Ryan, you mentioned the plant thing, and then became the episode. And that reminded me of, if you if you start, like, looking around for abuse of patent systems, like Monsanto is going to come up because they've, they've patented genes, genetic material in soybeans. And so there's a lot of a lot of articles out there talking about how like farmers have been sued, because they're, they act, you know, either accidentally or happen to be using these genetically modified and patented seeds. And then, you know, Monsanto sues them because they're not paying royalties. And it's, it's all a little gross and kind of weird to me that you can patent genetic material, kind of like patenting life that seems very, like philosophically wrong. So there's a lot of there's a lot of examples of like, that kind of thing outside of at least software and then the the pharmaceutical industry is known for for kind of abusing this as well, like it's legal what they're doing. It's not necessarily illegal, but it doesn't feel great or doesn't seem like it's a great. There's like a drug company. Humira, or Abby V. V, I think is the name of them, and they like they made $114 billion, kind of, by gaming the patent system to try and prevent any competitors from coming into that space and like creating a cheaper version of that drug. And so they end up making massive profits off it and which sucks is like you think of like US healthcare, like Medicaid and stuff. They're paying huge amounts of money for this patented thing. And then without allowing that competition sooner, you know, there's all this money, taxpayer money right like could have went could have less of an impact there. have allowed some of these other companies to create cheaper versions of the drugs. So there's some kind of gross stuff they're doing just to maximize profits.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, the drug company, one I've definitely read about in the past. But even as like before this episode was reading on some of that too. And it, it is like, really bizarre because it's, it's capitalism, right? We all know that. And, you know, that's one thing. But to your point, Stacey, is, it's also taxpayer dollars, like for if you know, if countries have health care, and so they're all paying into that to just like blowed a company to make more money, because they're withholding, you know, other companies being able to leverage that. It's like kind of weird too, because it is affecting people's health. There's all these like weird nuances that kind of come along with that. And then I know that what happens to and what I was reading is like, the drug companies will maybe own a certain drug or way of making the drug that no no one else can. But then it all of a sudden, that patent runs out. And then that's when you start seeing more of the generic and cheaper brands popping up because they can then create them. So I guess that just they've got this runway for so much longer. And it really just prevents that, which it does feel a little icky. I'd be curious to as before we dive into pics, you know, both of you are now patent engineers. Does that, like is that? Like, does that help with your career? Like, do you think that there's, I think it's pretty cool that you can say that you have a patent, but like, do you feel like it helps level you up as an engineer? Is it something that you had mentioned in interviews or anything like that?

</p>
<p><strong>Augustus Yuan</strong><br />
I definitely think it does, especially at Amazon. Unfortunately, I don't have evidence of it. But I've, from what I've heard, you know, it definitely helps elevate your portfolio, especially if you want to, like go for promotion. And it's like, part of like, I feel a lot of big, lot of big companies, they do recognize inventors in a positive light, because you know, they're helping the company to defend, like, create new ideas and defend against patent trolls. So it definitely helps your career. And I haven't tried, it literally just happened for me. So I don't know. But I I'd like to think that I could take it to other companies. And hopefully it's of interest.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I guess I don't know yet, either. Since I am still at Atlassian. And I haven't, you know, tried to go to another company and go through the interview process to like, see, like, oh, did someone find that interesting or a value? I guess it could be a good conversation topic. It's like, oh, cool. I can tell you about a hackathon and collaborating with people and creating some doing something that I think is fun. And, you know, something I'm excited about? The idea was exciting to me. And I really believed in it. So like, I think spark really good conversations were like interviews and the next places that I that I might go, but and then I think yeah, depending on how you feel about patents, it could be be it can be people can view in a positive light or a negative light, I guess. But for the most part, I think people have been thought it was cool.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I, I could see that helping when you're interviewing in the sense that it's like, it's probably not like, oh, they have you know, it's not measuring up of like, oh, they have a CS degree or anything. But, you know, like, that's not the same thing. But it likely helps you maybe stand out like to stay to your point, it kind of tells a story. It's like, you know, in you a unique thing that might stand out on your resume when you know, hiring managers are reading a ton of them. And so there are those little nuggets of things that could stand out. So I could see that. And I never even thought it, Augustus I get the promotion process. Yeah, a lot of companies as they're doing, you know, more with levels or any of the promotions for higher calm, those things might be written in in consideration for for those promotions. So that's really cool, too. hadn't even thought of that one. Cool. Well, I learned a lot about patents that I just hadn't really thought about in the past. So it's really cool that both of you have been through that process. So thank you for sharing. It's probably a good time for us to dive into pics. In each episode, friend and happier podcast, we'd love to share pics of things that we found interesting and share with all of you. Stacey, you want to share your picks for this episode?

</p>
<p><strong>Stacy London</strong><br />
Sure. So first pick is the E F F or the Electronic Frontier Foundation. I don't know if you've heard about them. They try and do a lot of things to promote the use of the Internet and doing the right thing with the Internet. They created a defend innovation, how to fix our broken patent system white paper, which is kind of interesting and kind of provides this kind of overview of like what are the issues with the patent system today? And then also some solutions that could be proposed to Congress, the patent office courts companies can implement. So it's a nice, deep dive into that if you're curious after listening to this to like learn more That's a good white paper to read. And then second pick is a music pick. It's called still life by Alaska, Alaska. It's a bit of a pop song Little divergent from my normal picks. But still in that electronic genre. Clash music described it as extra an extra dimensional pop song with hypnotic vocals.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Augustus, what do you have for us?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, sure, I have two picks. My first pick is so Riot Games, which is the company that made League of Legends and valorant. They have a really, really good tech blog. So it technology dot Riot Games. Specifically, I call out one article they have that they released a few years ago about peeking it's called peeking into valor. It's NET code of how they really kind of changed netcode on their end for how they can address some of the challenges that a lot shooting games have where, you know, with latency, how do you like handle these interesting problems, like peakers advantage where someone is moving on a screen, but the latency of someone who might not see them yet, and they try to shoot? Like, how do they address that? What I thought was really cool about this article was at the top, they call out a bunch of design goals. And I've noticed that that is like, a really good thing to do when you write technical specifications or docs, like having like overarching design goals of your technical system is something that's really, really good to write out and work backwards from when you build it out. So I thought this article was like, really well done. And it's like something if you know, if you're becoming more of a senior engineer, and you have to write a lot, this big kind of documents, like, it's like kind of a good example. And then my second pick, which is not technology related at all, is a Netflix show called physical 100. And the biggest TL DW I could give is imagine American Ninja Warrior, but it's Korean. And it's 100 people. And these 100 people come from so many different backgrounds of like, being on the Korean national team for like rugby. There's like someone who's like a mountain rescue. So their job is to rescue people on mountains. And it's like testing them in all these crazy ways. So yeah, it was super entertaining. Check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. I need to watch that one, Augustus. I just have one pick for this episode, which is actually a show on Netflix. You Season Four is out. And I liked the first few seasons and was like, oh, cool, I'm gonna watch it. But I was like, this shows gonna have to like, kind of end like it's just kind of, you know, the theme of it. If you've watched it, you're like, there can't go much further on it. But they did. I feel like Season Four was really good though. The direction they went with it was really unique. And I really enjoyed it. So it's only part one actually available. There will be a part two, which I really want the part to now because now I have to wait for it. But yes, I highly recommend checking out season four if you have seen the other seasons. And if you haven't go watch the entire season or series. It's really good. Cool. Well, thank you all for listening to patents episode. Hopefully you're like me and learn some things about patents that I didn't know. You can find front end happy hour at front end happier.com follow us at front end H H. Any last words

</p>
<p><strong>Augustus Yuan</strong><br />
just remember we Adel?

Just just a big FYI. We're not lawyers. W e a EAD. Oh I guess it's not it's a n l we know

</p>
`;
        return transcript;
    };