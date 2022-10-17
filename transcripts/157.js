module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. Before we jump into the episode, I also want to let you all know that we're doing a live in person front end, happy hour at jam stack conference in San Francisco. I believe it's the start of November. If you'd like to join us for the conference, it's a two day conference, we actually have a registration code front end to zero. So yeah, we are going to be doing a live panel, it'll be a lot of fun. It's it's been a long time since we've done that on stage. So it'd be really cool to be able to do that it is on November 7, I just had to pull up the calendar to double check. I knew it was right at the start. But yes, jam stack in San Francisco. In this episode, we're talking about differences between working in the public sector and the corporate sector. To help us with this conversation. We're joined by Jasmine Robinson from Netflix to talk about or how she's approached that I know that that was a journey that she had before Netflix. Jasmine, do you want to give a brief introduction of who you are, what you do, and what your favorite Happy Hour beverages?

</p>
<p><strong>Jasmine Robinson</strong><br />
Well, thank you. So I am a senior technical program manager under a platform engineering at Netflix, I'm under developer education. So I help onboard or migrate our engineers to our supportive toolset. And today, my drink of choice is water with liquid IV energy multiplier. So I do about two of these a day, which is equivalent to about four cups of coffee. I should probably cut back but this is gonna get me through this episode.

</p>
<p><strong>Ryan Burgess</strong><br />
Jasmine, this is why you always have energy. Like you're always very enthusiastic on calls and stuff. It's like this is why right, there's 100 reason why

</p>
<p><strong>Jasmine Robinson</strong><br />
did this is my secret and see you can't really see through this. So you don't know what I'm drinking. But yeah, it's pure energy.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow, I'm impressed. I've never had that. And I was like, What is this do but like you showing us the package? I'm like, okay, so it's pure energy. Yes. Now, I feel like if I drink that much coffee, I would be wired. So I'm impressed that you can drink two of those a day,

</p>
<p><strong>Jasmine Robinson</strong><br />
which is about four cups of coffee and I'm I still sleep at night. I don't know how but I'm gonna crash hard.

</p>
<p><strong>Ryan Burgess</strong><br />
Is there a point where you if you drink like after five or after four or something like point where if you've had it too late in the day, you won't sleep or it just doesn't matter anymore.

</p>
<p><strong>Jasmine Robinson</strong><br />
I would say I probably stop about six o'clock. And at that point, like I'm gonna go back just just normal water. It's not as exciting. It doesn't taste as good. But I have to draw the line somewhere.

</p>
<p><strong>Ryan Burgess</strong><br />
Not as fair. Let's give introductions of today's panelists. Jamie want to kick it off? Yeah,

</p>
<p><strong>Jem Young</strong><br />
Jem Young engineering manager at Netflix,

</p>
<p><strong>Stacy London</strong><br />
Stacy, London principal for an engineer on Trello.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm an engineering manager at Netflix. In each episode of the front end happier podcast, we love to choose our keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is culture Azure. So yeah, if we say the word culture, which I feel like talking about these two polarizing areas of work, it's definitely going to come up. But as we dive in, I my first question we have to probably level set on this is like, what's the difference between public and corporate, I believe that

</p>
<p><strong>Jasmine Robinson</strong><br />
corporate means you're going for profit. And the public sector is more nonprofit. So it's about helping others be successful

</p>
<p><strong>Ryan Burgess</strong><br />
feel like that's a really good description of it. I would also add that things like government, and schools are probably good to call out I know, they're obviously for non for profit, and like, hopefully doing good, like government doing good for for society. So I think that just to call those out specifically, yeah, we're

</p>
<p><strong>Jasmine Robinson</strong><br />
gonna get into a political discussion now.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, we'll stick more to like just the work aspect. We don't need to get in the politics side of things. Because that is a great point. That's a whole nother there's podcasts out there if you want to hear that. So Jasmine, I know that before Netflix, you were actually working a lot in the public sector. And you even kind of reflected on on that. And it was going for that journey into the corporate world of Netflix, there was some 15 things that you wish you knew sooner before that. And I think that a lot of what we'd like to cover today is diving into your cheat sheet around that. But before we do, let's talk about a little bit about your initial career in the public sector. Like what what were you doing? What was that like?

</p>
<p><strong>Jasmine Robinson</strong><br />
Okay, so we're gonna go way back. I am the eldest of eight kids. And when I was 17, I somehow accrued a $2,000 AOL phone bill, bill His back then you had to pay by the hour for the internet. And my mom said, well, there goes your college fund. And I wasn't sure what I wanted to major in any way. I told everyone I was going to be a zoo biochem Oh physicists who works for the CIA. So I decided I would do with any normal person who has no idea what they're going to do, and go to community college. And then I would transfer once I figured out what I was going to be when I grew up. The funny thing is, when you have a growth mindset, you never stop asking yourself, what do I want to be when I grow up? So during my first semester, at community college, one of my professors noticed that I was tech savvy. And they asked if I wanted to work at the Centers for teaching and learning. And I would be teaching faculty how to create online courses. And this was before we had learning management systems. So I was teaching faculty how to build static websites for their courses. And I accepted and that kicked off my career. And it started really well the faculty loved me, they called me the wunderkin. Because I embraced technology. And I found solutions that enhance the student experience. So in two years, before I was even old enough to drink, I was promoted to the district office, I had one week to learn Unix System Administration, so I can manage the college servers. I don't know if you remember those like Sams, Teach Yourself Unix administration and 21 days, those books from Okay, well, I read that book in a weekend. And so whenever I start a new project, or I have a gap in my knowledge, I'm all about self learning. I started by building full stack web applications. And eventually my workload increased to needing a team. And I was promoted to a director of web services. And it was an exciting time because we had a technology shift within education and creating web services was a crucial part of the college business, we were moving away from paper. So after 10 years of being a director, the next step in the career ladder, for me was a chief technology officer. However, before becoming a CTO in the public sector, I decided to see what else the world had to offer.

</p>
<p><strong>Ryan Burgess</strong><br />
And so that's what basically led you to now Netflix and what were like, what were some of the reasons in your head for thinking about moving away from public sector?

</p>
<p><strong>Jasmine Robinson</strong><br />
That is a great question, Ryan, I'm so glad you asked me. So I remember hearing horror stories from my colleagues who ventured out into the private sector. And they came back with these war stories, they were convinced that the grass was greener, and the pension provided union protected safety net of academia. So of course, the few that left thrived, and you never heard from them again. So our opinions were from the people who came back. And that was a bias sampling, and they all had horror stories. So I would say that there are five primary reasons that people tend to stay in the public sector, especially state or federal jobs. And I feel like this is one of those put a finger down exercises. So if you're listening, and you're currently working in the public sector, like lift up your hand and put a finger down, if you think the corporate world is competitive, cutthroat, and everyone's gonna backstab you to climb to the top, put a finger down, if you think the corporate sector has no work life balance, you're going to work twice as many hours. So it's not worth the pay increase. Put a finger down, if you think there is no job security, and they're going to fire you whenever they feel like it. Put a finger down if you're worried that you're going to lose your pension, and put a finger down if you're worried that right now you get to do a little bit of everything and corporate, you're worried you're going to be boxed into just doing one thing. So I'm guessing if you're in the public sector, you probably have a lot of fingers down at the moment. So the big question is, why did I decide to leave? I would say it was about five different reasons why I decided to leave. One was someone on my team passed away. And it was right before his retirement. And it made me realize that life is short, and I wasn't guaranteed a pension. I also was struggling to find a place to live that was close to work that allowed pets like I just wanted to rent a place. I had envisioned this life for myself with my white picket fence. And that was not happening in the Silicon Valley, at least not with my salary. I was already in a role with no work life balance. I mean, the web never sleeps. So I was permanently on call. I wasn't afraid to work. I had just graduated with my master's degree from the Harvard Extension which includes courses from Harvard and MIT. So I was around smart, motivated, passionate people that challenged me and I felt like I grew exponentially in that area. So I wanted to continue that trajectory. And then the last one is comfort zone. I had never really tested my boundaries and I don't know if you guys Brian gem Stacy if you've seen this by aerial video of a white piece of paper and there's an ad on the piece of paper, and someone takes a pencil and they draw a circle around the ant. And the ant believes that this is a barrier that it can't cross. So it's a great visual example that limits really only exist in your mind. And at some point in my career, I had drawn a circle around the academic side of the public sector. So I, as Ryan mentioned, I have a cheat sheet and there are 15 things that I wish I would have known sooner. And this is a good segue to the first item on my cheat sheet.

</p>
<p><strong>Ryan Burgess</strong><br />
Jasmine, before we dive into, you mentioned a few things there that like the pension part, I worked years ago, like, early in my career, I did some government work, I've done various ways. But the one time I was actually in government for a short stint, it didn't last long. But I remember working with some of colleagues, who were just like, literally unhappy and sticking it out. They're like, I only have five or 10 more years until my pension. And that to me, was just like, not something I wanted to be doing. And I'm curious is like Jem Stacy, any, any public you are each done?

</p>
<p><strong>Stacy London</strong><br />
I haven't, like specifically done any sort of public sector work. It's always been in like public companies or private companies. But yeah, for profit, basically. But I did work for a company a long time ago that had pensions, which is pretty rare. I think these days for especially like, you know, corporate life, they've mostly gotten rid of those almost everywhere. So I, I worked with place, I had one I earned some of that. And so like, actually still have it. So it when I eventually retire, if the company is still solvent and around, I will get some small amount of pension with that. I didn't end up staying there for you know, 35 years and get the whole the whole thing. It was very nice. And I think that, you know, it was why a lot of people did stay for a really long time because of that whole, guaranteed, you know, good life and retirement. But yeah, I mean, I guess that wasn't enough. Like that wasn't enough for me to totally stay in it put up with some of the other things that I didn't, didn't necessarily like and thought I could find elsewhere. But that's the closest thing I've had to maybe a private sector perk. I

</p>
<p><strong>Jem Young</strong><br />
think one of my first jobs was at the university, there was like an hourly job. So I guess that counts as public sector work. But this is a really interesting topic, because it's something I've always wondered of my CS professors in school was like, why are you doing this for your salary when you can go to a big tech company and make more money? And they never really gave me a good answer, though. I suspect I I kind of know. But it is a curiosity to me, like why people don't go into private corporations. And probably for some of the reasons you were listening there, Jasmine, like, you know, people want predictability. They want their pension. They think it's cutthroat. They think they can get fired easily versus public sector. It's probably I don't know if it's harder or easier. I imagine it's probably a little bit harder, because tenure and things like that. But yeah, it's a great topic, because there's this entire side of software engineering that we never really talk about. I don't really notice because like, they don't talk about themselves a whole lot other than like research.

</p>
<p><strong>Jasmine Robinson</strong><br />
Yeah, I mean, you we still need software engineers on the public side of the house. So they don't get the recognition that they deserve. They end up doing a little bit of everything is almost like a start up for them.

</p>
<p><strong>Stacy London</strong><br />
I contemplated at one point going 18. Is it 1818? F, I think is that was that the it's like they do government work, like tech work for government, but it sort of acts like a consultancy. I thought that that could potentially be cool. Like, I looked into that for a little bit. So I thought it'd be like a good way to give back but still, like work in like modern tech stacks and try and modernize stuff. And then Code for America, I guess, was another thing that I considered doing. But I didn't end up going through with it. I still think about that a lot. Like, how do I give back some of these skills that I have to better society as opposed to just you know, working for companies.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, the giving back does feel good. Like and that is something that I think a lot of people along with pensions and everything like that. And even that fear of getting like let go in a corporation is definitely an important factor. But yeah, I think a lot of it too is like the feeling good of it, like a nonprofit being able to actually make a difference and it's not that I think corporate you know, world doesn't make a difference. It's just you know, it's for money, right? Like, I like that Netflix, we entertain the world and we you know, have all this amazing content, but we are doing it for money. People are paying us for that. And so it's maybe it's not as motivating for some folks so I totally get why they some people would want to go into the like public sector for that. Uh, you know, maybe Jasmine, I'd be curious to is what are some of the disadvantages you felt or maybe some of the concerns that you maybe had moving from going from public to the corporate world, like what kind of do you feel like it put you at a disadvantage coming into this new world.

</p>
<p><strong>Jasmine Robinson</strong><br />
So I feel like it put me at an advantage as opposed to a disadvantage. And you really have to come in with that mindset when you interview. So I had a phone interview, and then I had six rounds of in person interviews that were all on the same day. And to me, it felt like I was on a game show like Survivor at any point, I was gonna get kicked off the island. And they told me if I didn't make it past the morning, that they would send me home during lunch, and lunch came. And they showed up with three different lunch options and told me I made it to the next round, which was really exciting. But I definitely felt like I needed to sell myself as to why it was advantageous to hire someone from the public sector. And looking back, I didn't know what to say, because I didn't know how my skill set was going to transfer to corporate. So I just talked about the projects that I had done, and I was hoping that they could tell me what would be valuable. But now that I've been in the private sector for three years, I can look back and give your listeners a list of five things that I think are their superpowers if they're coming from the public sector. So the first one is that you're going to be additive to your team, you're going to bring in a unique perspective, that increases your team's diversity. Increasing diversity means more innovation. And you're gonna come up with ideas based on your experiences that no one else is going to think of Next, coming from the public sector as we had far fewer resources. And we have more of a macro view of how the systems work and how to get everything done. Like I said before, it's kind of like working at a startup. And you're always understaffed and underfunded, and you're wearing multiple hats. So it's really good, you become really good at being scrappy, and coming up with inexpensive solutions to solve problems. The third item is a majority of your skills are universal. So for example, the public sector depends greatly on relationship building, and social capital. And you learn how to make things happen by understanding everyone's motivations. So one of the primary parts of for me at my last job within the colleges was dealing with multiple colleges that had conflicting priorities, and getting them to agree on technology solutions, and getting alignment, that's a universal skill. And you're going to find that your skills, especially your interpersonal skills, are going to transfer seamlessly to your new role. The fourth item is you're not going to be tied down by how things have always been done, everything's going to be completely new to you, you're going to have no boundaries. For example, when I first started, we didn't have a master list of all the tools that we supported. And I was told that there were too many tools, and not one person knew all of them. So I didn't see this as an obstacle. I saw this as an opportunity to crowdsource the list, and you're gonna go in not having the same boundaries as maybe other people have, who have been there or been in the corporate sector for a while. And the final thing is because you're coming from the public sector, you are selfless, sometimes to a fault. The link, as we said before, that the public sector exists to help others. So one of the key values on the Netflix culture memo was being selfless. So you really need to see how your, your existing skill set aligns with the culture, which is a drinking item, by the way. Cheers. So please, cheers, cheers. My first item on the cheat sheet is that you need to recognize where your boundaries are, where these invisible boundaries are, that you've set for yourself. Again, that's the aunt in the pencil circle. And the second one is being able to recognize and appreciate your value, you're gonna have impostor syndrome, but you have to remember that you have a unique and fresh perspective that a future employer may find invaluable. So those things that you think are your weaknesses could actually be your strengths. Would you agree, Jem?

</p>
<p><strong>Jem Young</strong><br />
You said it there early on a diverse team. And that doesn't just mean whatever your background is, it's, or not your ethnicity or otherwise, people think of diversity. It's like, where do you come from? What was your path to get here is like key to building a really well rounded team. If everybody went to the same college, the same internship, you're going to think about problems the exact same way, but from what you're saying is coming from the public sector where you have these constraints. That's and like, you have to solve problems within these constraints with limited funding and lots of egos and different motivations brings an additive value to the team. And I

</p>
<p><strong>Jasmine Robinson</strong><br />
know that you Jem and Ryan are engineering managers, are you a manager as well? Stacy, a people manager? I'm not.

</p>
<p><strong>Jem Young</strong><br />
Not yet. Not yet.

</p>
<p><strong>Stacy London</strong><br />
Not yet.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, Stacy, was at one point she chose to go back to engineering, which is awesome. It's funny to hearing Jasmine talk about like her going through the transition and everything like to a completely different world. I remember doing that I definitely wasn't as thoughtful of like, even looking back on like, what would I needed to know differently or any of that. But I do remember kind of feeling like some of the people like when I did interviews as I was moving to a different company or a role. Luckily, that wasn't my entire career in the public sector, I'd just done it for a bit is you could tell that on interviews, they weren't that excited to hear about it. Like it truly wasn't the most exciting work that they were really like. They're like, Oh, yeah, whatever, and actually cared more about my previous experience. So I did find that happened. Luckily, for me, it wasn't a big deal. But I definitely noticed that and so. And I think I've even seen that within as we hire. Now, as you mentioned, Jem, and I been hiring managers, I've seen that kind of play out in some of the corporation.

</p>
<p><strong>Jasmine Robinson</strong><br />
How often do you interview applicants that are from the public sector? Ah,

</p>
<p><strong>Ryan Burgess</strong><br />
you know, what I? It's, it's actually quite rare. Like, it's, it's there. But it's like, it's not as prevalent as some of the other companies, that's for sure.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I was trying to think back to all the interviews that I've been doing, since I worked at various companies is pretty rare that someone comes through with like, either straight from private sector stuff. They might have it in their history. But yeah, it's pretty rare that like, that's happened. Now that I think about it.

</p>
<p><strong>Ryan Burgess</strong><br />
And I wonder if it is just like that. People want to stay in that. Like, it's getting back to the like, hey, they're they're wanting to stay for the pension, or they're not interviewing as much? Or maybe they are just, they're not applying it. That's interesting. Are they intimidated to move, like Jasmine said, like, it can be really difficult to make that jump. So it could be a series of things, which is is kind of interesting. I also curious, what are some of the advantages now Jasmin have been in the corporate world? What are some really big differences that you notice that you really are thankful you've made that jump?

</p>
<p><strong>Jasmine Robinson</strong><br />
Oh, my gosh, I'm differences when people ask me where I work. And I can say Netflix, like, I'm excited to say, Netflix, I feel like there's this instant respect that you get for mentioning that company, as opposed to saying, Well, I'm at a community college. I think that just the, the caliber of the people that I am surrounded by, not that I wasn't with amazing people before I loved my my family at in the public sector. But just listening to Hallway Conversations, when I met Netflix, I can learn so much like it's just, I participate in the systems readings that Lauren does every week, and I'm just blown away. It I've learned more in the three years at Netflix than I did in my master's program. And I felt that my master's program was very challenging. I would also say that

</p>
<p><strong>Stacy London</strong><br />
question, what was what are system readings? Oh,

</p>
<p><strong>Jasmine Robinson</strong><br />
that is just a series of like, articles that we will have an engineer read through and then explain for an hour and we'll discuss it and we'll apply it to the Netflix ecosystem. So it could be anything that has been published, sometimes they've they're 50 years old, and we're talking about how we can apply them to today.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. Yeah, I do find like there's more energy around like wanting to learn more. And maybe that's, that's really harsh to say like, because there's also like the school side of things where we consider in public sight. And that's absolutely what you're doing is you're constantly learning or challenging those things. My experience in the government side, it would definitely felt like things moved really slow. And people were just happy with what like where things were at. Same with tech. That was what really was frustrating to me is like, Wait, you don't want to make this change. Like this old system that is like 20 years old, we could be doing things more efficiently. I didn't do well in that environment, because it just didn't make sense for me. Like I wanted to be constantly trying something new or just making something better. And I felt like I was always fighting like red tape or just people were like, Why are you bothering like that's things are easy. Just leave it the way it is like it's not broken, don't fix it. Instead of being like, hey, we can make this more efficient. And I think I struggled with that. And I admit that big time where I want to be constantly iterating and so that's something that I knew that was just not for me, that was government specifically so I don't want to you know, throw it out there that that's exactly all the public sector experience, but that was definitely my experience.

</p>
<p><strong>Jasmine Robinson</strong><br />
I would definitely agree. That's one of my items on my list on how things move faster. But I wasn't sure if it was just at Netflix. because I've heard other companies that let's say have been around longer that have more employees are more bureaucratic. And things move much slower. And yes, you're you're iterating. But large changes don't happen as quickly, when you're dealing with, let's say, 100,000 engineers as opposed to 2000.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, that's fair. I think it's also company culture. Cheers, cheers, cheers. But I think as, as companies get bigger, it definitely makes it harder. I feel like even Netflix, we're at 2000, some engineers, when I started, I was hundreds of engineers. And it gets harder as you grow, things become harder to do. And you're also dealing with like, if you're a new startup or something, there's, you're smaller. But you're also dealing with something that hasn't been built yet. Versus as you're a longer tenured company, and like Netflix, good examples, you know, we're hitting 2025 years, and things have been built, and they're getting older. And so you have to, you can't just change it all, all at once. And so things do slow down, sometimes in those circumstances. So I think it's could be tech side, but it could also be a company culture, chairs,

</p>
<p><strong>Jem Young</strong><br />
here's some of what you all are talking about. One, like there's some themes emerging that I hear. One is, humans prefer momentum in the same direction. And that's kind of the appeal of the public sector, which is, I've been doing this for 10 years, I'm going to keep doing this for 10 years, because I don't want to make a change. The other one I'm hearing is, well, like the the kind of consequence of that is, people in the public sector are going to be maybe older and more tenured, having done the same thing for a longer period of time versus the private sector, which is, you need that balance of really, senior people have done this, a lot of times have made mistakes, but you need that energy from the kind of the younger people, but that enthusiasm. And that's what kind of propels innovation. Would you say that's true? Or does that does that like kind of vibe through experience, Jasmine,

</p>
<p><strong>Jasmine Robinson</strong><br />
in my experience was the reason that things move faster at Netflix, as opposed to where it was before, is one we don't we do Sprint's will say, so we have our two week cycles, you have stand up meetings, there's more accountability, when I was in the public sectors, like we would meet maybe once a month, and then people would have action items that they had to do. And it would be the day before the meeting before they would start on that action item, they would hit a blocker. And then it says if only a day passed instead of month. So just those sorts of things and how things were run make a big difference.

</p>
<p><strong>Jem Young</strong><br />
And I've heard this anecdotally. And the older I get, the more it kind of makes sense is that the public sector and the government, etc, is like designed to move slowly. Like on purpose, it's designed to be inefficient and not move quickly. Because you don't want things that affect a lot of people that are funded with taxpayer money often, to move quickly. And like the wrong is that an accurate description of how things go?

</p>
<p><strong>Stacy London</strong><br />
Yeah, I've heard some of the same things. Just like the idea that, well, you know, that the Silicon Valley, you know, go fast, and break things like you can't break things when it's like, something really important, like people's livelihoods or their something tied to their housing or tied to like, you can't go fast and break that because you're affecting someone's life very significantly. So I think I understand, often, like why things are, you know, intentionally, potentially, like, slower.

</p>
<p><strong>Jasmine Robinson</strong><br />
We also had to be fair with everyone, which, like, I feel if if someone got a salary increase in a group in the public sector, it would, we'd have our unions, and people would step up and be like, Well, what about us, and you can't do it unless you're gonna do it for everyone. And I don't feel like that's the same in the corporate sector. So I think that that slows things down to one thing

</p>
<p><strong>Ryan Burgess</strong><br />
you mentioned, though, it's really funny. This is like, super interesting to think about it. One thing, Jasmine, you mentioned was accountability, and that there's more accountability, which you would think when you're like making adjustments, especially with taxpayer money, that there is accountability, but definitely realize, as you said, I'm like, Yeah, I never really felt as much accountability to get work done or deliver something that I do in the current corporate world, which I don't know that it makes sense that it's that way, because even like saying, like, Hey, you don't want to move fast and break things, because that has a huge impact on people. But I feel like there should be still a lot of accountability. And that seems just off but it was definitely my feeling as well. I agree. What are some of the other differences that you noticed?

</p>
<p><strong>Jasmine Robinson</strong><br />
Okay, we're gonna start with the one that's the most obvious. And it's the one that you're gonna see first is your, let's say, applying for jobs within the private sector. And that is the job titles and the job descriptions. So in the public sector, especially if you have unions, the job descriptions are like a contract of what you're expected to do. So if you're asked to do something, and it's not on the job description, then you can say that you're working out of class. And it means that you should be compensated differently, given a new title, or even have the right to refuse that work, job descriptions in Netflix, I see five bullets for responsibilities, and then five bullets for qualifications. And to me, it feels like a marketing piece instead of a contract. It's more to spark interest. So my question for let's say, Ryan, and Jem, and Stacey, have you ever had an employee point to their Netflix job description and say, That's not my job? When you ask them to do something?

</p>
<p><strong>Ryan Burgess</strong><br />
No, maybe because like, those job descriptions don't last long either. Like, it's I mean, I guess you can go save them, I think to that point is I purposely don't write my job descriptions so detailed, because I don't want someone who comes in and is like, this is my list of tasks. This is how I do them. I want someone thinking and contributing to like, what's the goal of the company? What can we do to make impact, and that's going to change daily, right? And so I want, I'm hiring someone for their expertise, and how they apply that that's what I want. I don't want it to be very prescriptive. It's purposely vague, because you're bringing your some unique ability to the table to help us make things better for Netflix, that diversity of thought all those things is super important. And sometimes job descriptions, I don't want them to be too precise, because someone may not have one or two of those bullets, and then they opt out. And you're like, well, well, that wouldn't have been that big of a deal that you didn't have experience working with said technology, because you can learn that on the job, and you're bringing all these other pieces. And so that's a good question. Because yeah, I don't see it as a contract, like, do you have to do these things do

</p>
<p><strong>Stacy London</strong><br />
I know like Netflix has, or like, I guess it only until very recently, it was just like all senior. And I think that's a pretty big change recently, where you've opened it up to like, different levels. So places where I've worked, they have, generally will have roles and levels and those roles will have a bit more definition than a job description, you know, kind of like, here's what you need to do to meet the expectation of what like a P for or like a mid level engineer is expected to do and stuff like that. But I've never had anyone be like, I absolutely. And I'm not a manager. So by asking people to do things, but I haven't seen that behavior where they're like that bullet, that exact thing you asked me to do is definitely not on my role description. I refuse. Like, I haven't really seen that. But I mean, I've definitely seen people be like, Hey, I've been doing above and beyond for a long time. I would like promotion, but not not really sort of the refusal thing.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't think I could describe what I'm supposed to do as a manager at Netflix.

</p>
<p><strong>Jem Young</strong><br />
Yeah, no one has ever said that's not my job. I think people have pushed me and say like, is that in scope for our team? Which is an absolutely valid question. And like, that's what I want to hear I want I like we should be challenging each other. But no, we're paid to do something. What that is like Ryan was saying changes by the day. So that would never happen. Or it's unlikely to happen.

</p>
<p><strong>Ryan Burgess</strong><br />
I like the charter thing, though. Jem, you'd mentioned like the team charter that changes over time. But it also is a way to define like where your team is headed and kind of where you should be. So I think that's a good way to look at it versus like a job description.

</p>
<p><strong>Jasmine Robinson</strong><br />
So we talked about job descriptions. There's also job titles. And there's hundreds of different job titles and acronyms for those positions that don't really exist in the public sector. So I'm just going to name a couple like es pn, AFP and a HRBP FBP. And I have been trying to map what these roles are, what their equivalent is at my previous job. So s PNA would be like strategic planning and analysis. And that's similar to research and institutional effectiveness and academia, or F PNA, which is financial planning and analysis. That would be our purchasing team or purchasing directors HRBP Human Resources business partner, we just had HR representatives, and FBP. If I finance business partner, we just called them buyers. So Jeff and Ryan, I know that you've been at Netflix for about seven years. Do you ever struggle with these job titles? Or do you know immediately what that person's role is based on their job title?

</p>
<p><strong>Stacy London</strong><br />
I think corporate is rebrands those things with fancy different names and it's all the same thing. It's accounting it's finance.

</p>
<p><strong>Ryan Burgess</strong><br />
It's yeah. It makes it sound a lot cooler, I guess.

</p>
<p><strong>Jem Young</strong><br />
Yeah, title aren't really meaningful, you can give, like anybody could give anybody give yourself a title. And no one really cares. Like, what's the, I think my favorite is? It's like VPS at sales companies doesn't mean anything like everybody's a VP, because it sounds better. When you're talking to other people, it makes you think they're like, oh, this person is really high up, they manage people, but like, it's just the title that a lot of salespeople have. And it doesn't mean anything. So yeah, if I'm reading someone's resume, I don't put a lot of weight in titles, unless they say they're senior, and they're like, one year in, and then I'm gonna be like, tell me about this. How did you become senior in one year? Because you must be amazing.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, like that gem, like even mentioned the VP part of sales or whatever that may be? Because it's also, they may need a special title to interact with external companies, right? Because external companies are expecting you to have some sort of a title. And if you don't, they're like, Oh, well, can we talk to the VP and you're like, I'm that person that you need to talk to. And somehow titles mess that up.

</p>
<p><strong>Jasmine Robinson</strong><br />
So that goes into my cheat sheet. Item number three, if your title from the public sector doesn't map to something that is equivalent on the corporate sector, recruiters aren't going to be able to find you or know that you have that skill set. So even though titles don't really matter, in corporate, it's just a title. In order for recruiters to find you, though, you need to make sure that you update your titles, you can say what your actual title is, but what that is equivalent to when you post that on LinkedIn.

</p>
<p><strong>Stacy London</strong><br />
That's a good point. This is not a public private sector thing. But like, when I first started off in tech, my one of my titles was like IT systems analyst. And now sometimes you see like it and people think Help Desk or, or whatever. So like the the whole thing the whole time has been web development, and whatever flavor you want to, like, call that with different titles. But yeah, if you put that on LinkedIn, people will read different sorts of things will reach out to you that you're not expecting.

</p>
<p><strong>Ryan Burgess</strong><br />
But the funny thing is, Stacy is like that was with the times, right? Like some of the IT specialists or those types of things is like, our industry has evolved so much that titles have become more defined like we're on a front end podcast, right? Front end is only something that we've talked about in many episodes is like that's just kind of come into a term. While we've been working in this industry like that. You could have been like a web developer, you could have been webmaster, all those things. And it's really funny that how that title could throw people off now, but it's like at the time, it was probably completely fine. So

</p>
<p><strong>Jasmine Robinson</strong><br />
note to self, everyone should be updating their LinkedIn profiles with the latest version of their titles. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
and titles really don't matter. It's like as long as it's describes you. But I think if it's not descriptive, then that's a problem, we'll get into picks right away. One thing I wanted to get to Jasmine is, and probably all of you is like, if someone is looking to move from the public sector to corporate, what advice would you have for them?

</p>
<p><strong>Jasmine Robinson</strong><br />
Well, I would say, one, don't be afraid to do it. And two, you can do it idea. Just go on LinkedIn and see what looks interesting. And you already have a job in the public sector. So don't be afraid when you go in. Just think of this as an experience, you're going to have some great stories to tell your family back in the public sector job when you're done. I think also, this is going to be it's not going to be easy, but it's going to be worth it. And you're going to be playing catch up for a while. I feel I didn't. That sounds horrible. But I do feel a little bit lucky that there was a pandemic and I was able to work from home. And I was able to squeeze in so much more learning time because I wasn't commuting. I think that was definitely beneficial. But like having to squeeze in a Sam's system administration and 21 days into a weekend, you're going to be trying to squeeze like 10 years of a career into a year. And it's going to be a lot of work but worth

</p>
<p><strong>Jem Young</strong><br />
it. I don't think I have good advice because I have not made the transition like Jasmine, but my general advice would apply is, you know, don't be afraid to step outside of your comfort zone. It's it's really easy to be comfortable. And especially as we get older, you know, we have families we want to settle in, you know, take a chance, or talk to people who have made that transition like you Jasmine, and like see what they think see if like, Oh yeah, it's really hard or, you know, it's not that bad. But here's some things to look out for. And it doesn't hurt to ask questions and like, constantly challenge where you're at in life.

</p>
<p><strong>Stacy London</strong><br />
Plus one, nothing, nothing new. On top of that Jem said it perfectly.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, well said. I think the only thing I'd maybe add to it is that also understanding the differences and then talk about how your work applies. So that world just kind of have a better understanding and what kind of impact and everything that you've had just Being able to sell yourself. All right in each episode, the front end Happy Hour podcast, we like to choose pics of things that we found interesting and want to share with all of you. Stacy, do you want to start it off for this episode?

</p>
<p><strong>Stacy London</strong><br />
Sure. I've got two picks to music fix as usual I've got the first one is jungle by Fred again, has a sample of Le Dewey's 2017 track features. Production co credit from quartet if you're familiar with his work edm.com describes it as the experimental styles of both artists come to a head and propel an arrangement rooted rooted in 134 BPM, house music euphoria, chaotic energy pulls you through waves of introspection and rapture. Anyway, it's a really dancey track and I love it. Which is an odd pick for me, I haven't necessarily picked something that's kind of healthy in a while. So if that and then the second one is avalanched by tourists. The whole album is very good that came out in 2022. This one's like some breakbeats Mac mixed with some atmospheric vibes. That's a really good coding album to listen

</p>
<p><strong>Ryan Burgess</strong><br />
to. Jem, what picks you up for us?

</p>
<p><strong>Jem Young</strong><br />
I have two picks today. One is it's a documentary on Netflix called the redeem team, which is about the 2008 US Olympic men's US Olympic basketball team. Just fascinating documentary about well, I won't go into what it's about. But I think it's about the US Men's Olympic team in Beijing and their struggles win a gold medal. What I find really interesting about it is you have this team of all stars, yet they still have to work together as a team to beat each other teams who are individually not as good. But these other teams are much better, because they've been playing together longer, and they're more cohesive. And I don't know, I'm not gonna take everything as a metaphor for management. But you know, there kind of is one there that I just find really fascinating. And it really there's always like a linchpin that holds the team together. And they just work a little bit harder. And yeah, I don't know, it's you don't you're not into that, like you want to see from that perspective. It's just a really fascinating story of like, how USA Men's Basketball was like, so good that we were taking, we took it for granted, we didn't even watch it. And like, we lost and it just hit everybody like, what basketball is our sport. It's really good documentary. My second pick is Netflix. I'm currently on parental leave. Netflix has one year of parental leave, I'm not taking a year, that would be too too long away from work, I do enjoy my work. But I'm really grateful to the company to have the time to you know, spend time with my son. That's why it's been a while since I've been on episode. So that's my two picks

</p>
<p><strong>Ryan Burgess</strong><br />
awesome Jasmine already have for us,

</p>
<p><strong>Jasmine Robinson</strong><br />
I am prepared. So I have a life hack that I love that I think everyone should also have and that is super gluing, air tags or tiled devices to remotes. If you're like me, and you ever lose a remote, I highly recommend that you superglue an air tag or title to your remote. The other thing that I got recently were solar powered multicolored lights on Amazon. So I have them all over my yard right now. And they're in like Halloween colors, but I can switch them up for Christmas in the future. And they last all night, which is really impressive. And I don't have to run any electricity. So highly recommend that today happens to be Prime Day on Amazon. But by the time this comes out, maybe you will be ready for Black Friday. And I'm also obsessed with Andrew herberman. He's an neurologist at Stanford. And he has a huge presence on social media, I highly recommend you check him out, too. So those are the three things that I'm kind of obsessed with right now.

</p>
<p><strong>Ryan Burgess</strong><br />
I have two picks for today's episode. My first pick is a TV show on Hulu called the bear. It's about a famous chef who's gone back to his family business. It's a sandwich shop. And so he's taking over and running it. And of course, there's all this drama. It's a really interesting show, I highly recommend checking it out. Then my second pick is a Netflix Original, called the anatomy of a scandal. I wasn't quite sure about it at first, but got really sucked in. It's a it's a really interesting story. I really enjoyed watching that one. So that's another good show to checkout. Thank you so much, Jasmine for joining us on today's episode. Where can people get in touch with you if they want to learn more? Just chat with you

</p>
<p><strong>Jasmine Robinson</strong><br />
definitely reach out to me on LinkedIn. I'm Jasmine Robinson. And because I have 15 items to talk about, I think I'm gonna create a blog and I will post articles for people so that they can learn all of my tricks, not just that the first three that we talked

</p>
<p><strong>Ryan Burgess</strong><br />
about. Awesome. Well and thank you all for listening today's episode, make sure to subscribe I've just on whatever you like to listen to podcasts on thank you all for listening any last words for today's episode culture

</p>
<p><strong>Stacy London</strong><br />
Cheers

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers Cheers

</p>
`;
        return transcript;
    };