// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happy hour podcast. In this episode we are joined by Katie from Etsy to talk with us about building and fostering a front end culture within your companies. Katie, can you give a brief introduction of who you are, what you do, and what your favorite happier beverages?

</p>
<p><strong>Katie Sylor-Miller</strong><br />
Yeah. Hi, I'm Katie Sylor-Miller. I'm a staff engineer on the front end systems team at Etsy. I also made a super ridiculous website called oshit. Get which, hysterically is what I am well known for. Not a front end engineer. But hey, that's cool. We'll go with it. My favorite how Our beverage is clearly my ties.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Well, let's also go around the table and give an introduction. today's panelists Mars, you want to start it off?

</p>
<p><strong>Mars Jullian</strong><br />
Sure. I'm Mars and I'm a senior software engineer at Netflix,

</p>
<p><strong>Stacy London</strong><br />
Stacy London, a senior front end engineer at Atlassian,

</p>
<p><strong>Ryan Burgess</strong><br />
Jem young, senior software engineer at Netflix. And I'm Ryan Burgess. I'm a software engineering manager at Netflix and each episode of the front end happier podcast, we like to choose a keyword that if it's mentioned on the episode, we will all take a drink. What did we decide today's keyword is? Respect. Love it. So if any of us say the word respect, we will all take a drink. All right, well, let's kick this off. What does front end culture in your company mean to you? And that's a good way to start. We're talking about this front end culture. What does it mean to you and your companies?

</p>
<p><strong>Katie Sylor-Miller</strong><br />
So I think, to me that there's a couple of different facets of having a good front end culture. The first of which is hiring practices is that you have interview processes in place. that allow folks who maybe have, like a front end skill set who really know like HTML and CSS and JavaScript and think you ask about things like accessibility and performance and like, maybe are a little more willing to kind of not care as much about deep algorithms or sort of like the traditional computer science skill set. So I think that's kind of the first part of it. And then the second part is, as far as like, job responsibilities and titles, like, I mean, I've worked places where because I reported into the UX org, people were like, you're not allowed to touch our build system, because you're not a real engineer. And to me, like, that's not a good culture. Like a good friend and culture is like an admitting that we're all engineers and we're all in it together and and having that respect

</p>
<p><strong>Mars Jullian</strong><br />
I think it's gonna come up. 

</p>
<p><strong>Katie Sylor-Miller</strong><br />
That was like the best word.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, like what you said, even with the interview process, I was even thinking about people that already there like I think about it is really just having engineers that are passionate about the front end. Because I've definitely been at companies where they're like, yeah, the front end big deal. Like, it's not a big deal. Like, it's fine. It's nothing. Um, but I think having that and just having engineers who actually care about it and can talk about it and be passionate towards the front end can just be a start.

</p>
<p><strong>Stacy London</strong><br />
Totally. I think a good company that has a good culture for front end will have really balanced teams. So like, if you have like a kind of setup where you maybe have like feature teams or like subsets of teams working on things and building out something for your web app or a website that the team is has people that understand things about the front end, and so they're going to be they're going to care about things like that, you know, Katie mentioned like, you know, responsiveness, accessibility semantic HTML, all of that stuff will come into there in the mix, because that person is going to bring that skill set. And then there's also a back end person who's really great at making amazing API's and scaling API's or getting data in efficient manner. And they're really great at that. And then everybody kind of complements each other. It's cool if you overlap, like, everybody does probably have skills that overlap, but you have like a really good balance on that on that feature team. And that's me is like a really, you can see that that's a culture that respects front end, because they, they put such respect. Because they know that that kind of team is going to build the best thing and it's probably going to be the best thing in terms of UX and the best thing for the customer and it's gonna, you know, everyone sort of wins when that happens.

</p>
<p><strong>Jem Young</strong><br />
I like that bit on interviewing. That is something that like we've probably we've talked about a few times. We talked about it many times, but we don't hear it enough about you. You go to some company and you say like, I want to be a UI engineer. Cool. That's what we're hiring for. Now solve the C verace theme as in like big

</p>
<p><strong>Katie Sylor-Miller</strong><br />
tree on a whiteboard.

</p>
<p><strong>Jem Young</strong><br />
Exactly. Nightmare part of it is just respecting it respecting that building UI and UX is a complete different skill set. Yes, there is like a bit of computer science involved and it's it's a lot less traditional than what a lot of people have come up with. However, it's a totally different skill set. And you should interview like that. And that is part of what understanding like a good front end culture is.

</p>
<p><strong>Mars Jullian</strong><br />
I think it's it can be hard though, at least in companies I've worked out previously like I agree with the knocking use the word valuing people who have but I think sometimes like the biggest hurdle can just be even getting other engineers to recognize that there is kind of another area that we should be working on and focusing on and having empathy with our users and recognizing that it is a valuable skill set and that it is also a separate skill set that in order to make An application good you need someone who can, you can need to sort of specialize a certain point to have people who know their area of expertise. And one of those areas is front end, and it gets overlooked a lot of the time.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think there definitely are people can do it full stack and do a good job of it. But I think it just becomes that is, there's so much complexity to that come on the back end on the front end, your algorithms, whatever you need. In lower systems, it really helps having people really focus and care about that, too, is like you're gonna have someone who's super passionate about writing API's. And then you're gonna have someone who's really passionate about the UX and UI and really caring about that. And that that makes a lot of sense to be very focused, I think

</p>
<p><strong>Mars Jullian</strong><br />
for a lot of people, sometimes to at least having worked with other backend engineers is they don't often recognize that there actually is a lot of work that goes into making a good front end. It's not just the final Polish or layer, it has to be considered in the process, and you have to make time for it. And that I find can always be a really, really difficult battle or conversation. So what

</p>
<p><strong>Ryan Burgess</strong><br />
do you do when you're dealing with engineers in a company Maybe you're the only front end engineer and you're like, how do I shift people's thinking and getting them to be seen that, hey, this is a skill set. And this is a barrier that we really need to focus on? How do you get buy in from that, from the rest of the team,

</p>
<p><strong>Mars Jullian</strong><br />
just like the previous company I worked at, we had a similar uphill battle, we had a few front end engineers, and a lot of back end engineers and trying to get other engineers and others teams to see the value that we brought was a bit challenging. And one of the things that we actually helped them do was to try to get them involved in that type of work by laying a good foundation or groundwork for them to get started. So in order to keep the quality of the front end high, we kind of built a component library, and like here, use this for your front end. And then they can look oh, this is easy. It's just like putting Legos together. But through even that process of taking these components and putting them together and bringing building their dashboards in their UI as they begin to have a better appreciation for what it is that we do, because even they were doing kind of the basic interlacing they're like wait, but this component already works. How Does it work and then kind of digging into it and failing to realize it's it's actually a lot going on beyond, you know, the component props that we were working with.

</p>
<p><strong>Stacy London</strong><br />
One thing I think that's been helpful is to, if you have somebody like a team lead or someone in a leadership position that can get on your side, and you can get them to agree to create something like a definition of Donner, something that says, like, when we make a new feature, it has to have these things, it has to be accessible or has to be responsive to different device sizes. And if you have that as like a thing that's like, kind of like a checklist, and you're building a feature, I think that helps build respect, because if someone doesn't know how to do those things, though, kind of instantly be able to cheers, cheers. It helps someone that isn't focused on the front end understand of how much goes into it, and it's actually you can like see it on a list.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
Yeah, I think it's it's really easy to discount how complex the field of front end is, like, you know, this is something I started to say when I'm Telling people like oh, well, full stack is a lie, like, like it used to be full stack was like, oh, maybe you knew a little HTML, and maybe you knew a little bit of PHP, and maybe you knew Apache, but like, the LAMP stack is not what we do anymore. And that all every single layer of the stack has increased in depth and complexity. And I think that a lot of times people don't understand that when we talk about front end, we're talking about usability. We're talking about responsive design, we're talking about performance. We're talking about internationalization, which is like a huge thing that people don't think about right to left. Yeah. You know, or we think our accessibility or, you know, there's just, there's so many layers to each piece of the stack. And I don't claim to understand all the layers of like database administration and what it takes to make sharded databases and have them talk to each other and keep the data up like so. I think a lot of it is is trained to build that empathy of like, okay, yeah, this is actually really complicated and there's really a lot that goes into it. It's not just push pushing pixels around on a screen, a good way of doing it, what I've seen is encouraging hackday. So let's say you're, it's tough. When you're the only front end engineer and a company, it's hard to get the buy in, buy in.

</p>
<p><strong>Jem Young</strong><br />
It's too early to say the key word. I like hack days are really I've found are pretty useful. If it's like a three person company. It's like, Okay, today, I'll work on the database side or the API side, you build out the front end, and you do this. And then it's really quickly I've always seen, they see how complicated is like, Oh, I can't just do this. I'm like, Well, no, because of this. How do you remember all this stuff? I'm like, that's just what we do is the UI engineers really complex. And that that usually helps because I've definitely been plenty of places and heard many stories of I've a master's in CSS. JavaScript is not a real language, blah, blah. Blah, blah blah like that still exists today but I'm like, Okay, go ahead, build it out go people like all just use create react app and like I've seen them dig themselves into a hole so fast on that to get

</p>
<p><strong>Ryan Burgess</strong><br />
you started. Don't get started.

</p>
<p><strong>Jem Young</strong><br />
Let's go ahead and test this on an exploit doesn't work.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it doesn't work, how come and or even just like you need to change something that doesn't it's not boilerplate. That's where it becomes a lot more difficult. That's a good point. So I think we've covered that there are a lot of benefits for having a front end culture but we didn't really touch solely I think Mario's I think you covered a little bit of like, how to convince people is like maybe even like having your teams create a component library for leaning on leaders. But what if you're that one engineer, like maybe don't have a leader buy in, like, what do you do? I think that's a hard thing to solve. But I feel like if you want to build out that culture, it's definitely something that you should be thinking about. I think,

</p>
<p><strong>Katie Sylor-Miller</strong><br />
um, something that has been really useful or that I've seen is, is a lot of times the the pressure to build up Running culture comes out of design. Because the the process of like QA and design feedback, working with somebody who doesn't also themselves think about UX doesn't think about user experience, doesn't really understand or care about how things actually are displayed in a client to a user, that designers feel that pain so much more than everybody else in the organization because they're the ones spending multiple rounds of writing up. No, this needs to move this needs to change something needs to happen when you hover over this button. And so I feel like a lot of times, getting those allies in the designer can be really helpful to to have that voice for like, Alright, yes, front end is actually really important and we need to care about this.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I actually really like that just using designers as an ally because it's like you're, you're both closer to that problem. Another thing I was thinking about too is even just like picking something like maybe it's accessibility or something that you think can be vastly improved in the company. And give a presentation, give a talk, do a bag, lunch, whatever it is to really show like, Hey, this is we need to be doing better at this and like really showing that and getting even if it is backend engineers that are working on the front end or it's a full stack engineer is helping educate them more to their understand that why this is a good thing that we should be thinking about, like that idea of building empathy and doing a talk or even like setting up sort of like a lunch and learn thing where you play a conference talk or something and if you can get everybody to come to it. There was one recently that I did at under pocket, which was one for accessibility. It was Leona Watson, I think is there. In fact, she's awesome too. Yeah, doing this whole thing where she was using a screen reader to navigate. So you could see that experience and like listen to how she experiences traversing sites and things. And you can see people's eyes in the room like, wow, you know, like, things start to click that empathy is built by just experiencing it. So I think that's one cool way to do it. Oh, for accessibility, I've literally just loaded up the screen reader and shown people like our own site, you just hearing the voice over you're like, Oh, yeah, like imagine not being able to see this. I have no idea where I'm navigating. And I think that can even be powerful. You don't even need someone else to do it just it's pretty easy to load up. Yeah.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
And I think another big lever is performance. And that's, unfortunately, although I think the two are both equally important. Unfortunately, performance is going to be more likely to have like a financial component associated with it. And so like pulling up your site and webpage tests on a slow 3g, whatever, like you can action and especially if you do that next to your competitors, to see if your performance is like way worse than your competitors and I think that's another really compelling argument in case that you can make and you know, there's plenty of proof out there that improving performance of your site like increases conversion and you know the money that you make which is a lot of times what the people in charge are the most cared like care the most about is

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I guess working on e commerce site that's pretty pretty important is like someone's gonna check out and purchase or they're they're leaving because

</p>
<p><strong>Katie Sylor-Miller</strong><br />
actly Yeah, something like, like 50 something percent of people leave if it takes more than three seconds. Wow. To load is the last number I heard. So.

</p>
<p><strong>Jem Young</strong><br />
Yeah, that's a lot gets back to that empathy. It's like having someone just suffer through the slow loading put them on a 3g network. Yeah, love the comparison to have like a competitor. Because that's always a really important to your company is how can we be better than the competitor? And just really, here's the comparison, especially if they're a lot better than it really helps. Look how slow we are. We need to improve that I so personally, I when I look at a webpage, and let's say I'm shopping for a new bank, looking to open a bank account somewhere, I look at their websites and I look at their design I look at their performance is like just being an engineer because I want to get a feel for it because it tells me what they value. And if they don't value enough to like, make good responsive design, or it's not fast, or it's just terrible UX, I tend not to go with that company, because they just tells me what their values are. And they're like, oh, we're about making money and all these things and like, screw you sign up versus No, we care about the customer. We care about their experience. And I know it's like really holistic to me when he's talking about UI and building like a good performance UI. So a good front end culture. Yes, it will make you more money in the long run, hopefully. But it really to me It demonstrates the values of the company. I had a I was just off my honeymoon in French Polynesia. So I had a exciting time of surfing the internet and very, very, very, yes, very boozy. Bora. Bora is

</p>
<p><strong>Ryan Burgess</strong><br />
Screw you all Stacey there Theriot

</p>
<p><strong>Stacy London</strong><br />
I was near I was near there.

</p>
<p><strong>Jem Young</strong><br />
Stacy raped me from a yacht but would not stop. She wouldn't stop. He would not stop. She saw me. I saw her sobbing because I texted her and I saw her pick up her phone and put it back down. She did not respond. No, yeah. But I had the privilege of surfing the internet on very, very, very slow connections. And it's funny when you actually need something. It's a lot different from simulating like 3g or sibling throttling, because you're like, whatever any given time, I can, like exit out of this when you really need something. That's when you feel that deep frustration. And I served a lot of sites that I normally hit and I realized, man, these people do not care about performance. I'll go and call call out Amazon, because they're a big company. They can take it,

</p>
<p><strong>Ryan Burgess</strong><br />
which you would think out of all people they would care. They're into the e commerce part.

</p>
<p><strong>Jem Young</strong><br />
I was trying to transfer a book from my phone to my Kindle because I'm reading a lot on vacation. And the site was just slow like they didn't paginate anything and loaded every book I've ever decided I'd like it actually locked in my browser who was so slow. And this is like one of those valuable companies in the world. And they put no emphasis on like fixing these really basic performance things. And it just told me what their values are as a company right there if they can't fix these, like really basic, basic things, I'm proud to say Netflix is very fast. So that's, that's good. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you're like, I'll safe to call on another company. I mean, I love what you said to that you would bounce or leave or not go with a certain company or site. I've totally done that many times. Just maybe it's even just I think design even in that sentence is like you didn't put any effort into this. This user experience is terrible. So think

</p>
<p><strong>Stacy London</strong><br />
even if you are like not in engineering or design and you maybe don't consciously see some layout issue or that something's janky you feel it. And so even subconsciously, I think you feel that and like that, that is an impression that people have of your product. And so you could, I don't like back to the original question of like, if you're the sole engineer, you could like, like snap a video or do a video a screenshot of like how janky The site is and be like, hey, and then send an article about how that kind of experience causes people to not trust your brand, or whatever that is.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, there's probably a lot of great data out there that you could kind of pull from our other articles that try and emphasize that as well. Because is there data around this? It's like, yes, there is so much. Lots of data, you can find it out there.

</p>
<p><strong>Jem Young</strong><br />
So I like that. And that's what gets me is, I think in 20 years, we'll we'll have like much more research in the UI and things like that. And we'll, we'll see the impacts of like, oh, slow site, and maybe three seconds, maybe it's two seconds. Like that really impacts your bottom line. But what I see is a lot of companies that spend, you know, a million dollars on marketing on like some big ad campaign, they're buying AdWords, all this stuff, and they don't even measure. They don't measure. They didn't put any investment in their UI to their site. And it just, it doesn't make sense to me that you're saying like, Oh, I care about getting customers in the door, but once they get Hear? Well, let's hope they find that that Buy button. And it's just like this weird dichotomy and UI and it still exists today. I don't know why hopefully in a few years it goes away. But that's what we're here for to try to

</p>
<p><strong>Ryan Burgess</strong><br />
fix the good word. That's why front end culture and your company's really good. This is why we need it. What are some ways front end cultures might differ between companies.

</p>
<p><strong>Stacy London</strong><br />
I think sometimes if you have a company that maybe has like, like a monoculture, like there's really kind of like only one type of person there. So if you have, like, all the startup was by a bunch of Stanford CS grads, you know, like in that stereotype of like a Silicon Valley startup, if you have Victor's one person, at a place like that culture will be very different from a place that you know has has diversity in it. And so, having diversity of titles and roles,

</p>
<p><strong>Ryan Burgess</strong><br />
like will help you make a better product versus having everybody with the same background, same role, same you know, experience So I guess that can definitely, I think change the culture of like the company that you're at. So even diversity of thought even just in your engineers will help build a better culture, which also will help build a better product. I mean, yeah, totally pretty given on that. I think

</p>
<p><strong>Mars Jullian</strong><br />
kind of on that note, in terms of diversity, like one thing that I've seen, and one of the reasons I really was looking forward to joining Netflix was that when we joined, we were experimenting with the title of UI engineer as opposed to just software engineer. And I thought that really recognized the value that Netflix saw in the like actual engineering that goes into building you eyes. But also within that, that there's a diversity of UI engineers sort of like where their passion for UI which can span from, hey, I work on the UI, but super close to the API, or Hey, I work on the UI, and I work very closely with designers. There's a huge range there and what a UI engineer can be, and and other companies, ones I've worked at people I've spoken to, there can also be sort of very siloed roles where there is Isn't that appreciation for the the range that can happen in a particular role? So that's been kind of interesting to see. And like you are for an engineer, you do JavaScript HTML designer gives you a spec and you implemented here's an API, and we don't tend no one talks to anyone.

</p>
<p><strong>Ryan Burgess</strong><br />
That works well. Right.

</p>
<p><strong>Mars Jullian</strong><br />
It works really well.

But I mean, that's, that's just, that's the other end of the extreme. So the different does I've seen is sort of like one cut, some companies will recognize the range and other companies will not really and sort of put their engineers in their respective I disagree that they are respective but corners, you know,

</p>
<p><strong>Katie Sylor-Miller</strong><br />
yeah, I think that's that's a really interesting point to bring up as it kind of touches on the larger like, cultural like guys right now about like, what does it even mean to be a front end engineer. And I've definitely worked places where it was like, if your front end you wrote HTML and CSS, and maybe a little bit of JavaScript and like that was it and then, but then I know there are other places where they're like, oh, if you're a front end engineer, he write react and like you're you're super heavy and like Moving the server into the client more and more and like, and i think that i think that's like, real, it makes it difficult. And a lot of times to talk about even what front end engineering is or what it could be or what your culture could be, because there's such a variety, I think, I think it was. Brad frost called it like the front of the front end and the back of the front.
I remember that. That's so good. Yes. Oh, true. Yeah.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
And like, you know, for someone like me, like I've been doing this for a really long time. And back in the day, like, there was no back of the back of the front end. It was just the all the front end

</p>
<p><strong>Ryan Burgess</strong><br />
and, and it was actually probably a lot of HTML and CSS, because even JavaScript wasn't like heavy.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
Yeah, he wrote some dhtml

</p>
<p><strong>Stacy London</strong><br />
Yeah.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
suckerfish drop down is lit

</p>
<p><strong>Stacy London</strong><br />
up.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, we're going there. Yeah.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
But yeah, I think It's It's getting harder to define what front end even means or what it is, which I think makes it harder to figure out. If you're at a company and you're like, we need better front end culture, like where do you start?

</p>
<p><strong>Stacy London</strong><br />
I would say like, the back of the front end thing is so fascinating to me. And that concept of like some people that call themselves like, I'm a JavaScript engineer, and you're like, what do you mean by that? Like, oh, you're like, the back of the front end is what you mean. Like you love state management and, and figuring out data and the front end like, Okay, cool. That's like the back of the front end, but you're not like a full stack front front.

</p>
<p><strong>Ryan Burgess</strong><br />
Like, we're just getting terms on terms like this title is,

</p>
<p><strong>Katie Sylor-Miller</strong><br />
well, like we we, at Etsy, we, we bring in a lot of Bootcamp, grads, like we're, it's we partner with the recurse center. And you know, the folks who are going through these coding boot camps, all they learned is node and react and everything is JavaScript from The server all the way through. And then, you know, sometimes we hired folks in them, you know, it's like, oh, they're a full stack engineer. They're a full stack engineer. But really, they know node and they know react. And that's it. And like, they don't know anything about accessibility. They don't know anything about CSS, you know, you ask them to explain the cascade or specificity, and they have no idea what you're talking about. And, you know, for me, I'm like, Oh, is that really what it means to be a front end engineer, but like, it's changing. So the way that I have always thought about it, probably maybe it's that's not the right way to think about it anymore. I don't know. It's, it's a difficult question these days to

</p>
<p><strong>Ryan Burgess</strong><br />
find an answer to, I wouldn't even consider that full stack, right? Like you're like, Well, yeah, you're working from the node server to some of the front end. But it's I wouldn't even call that full stack on the back end. Neither because there's even layers behind that typically. So

</p>
<p><strong>Stacy London</strong><br />
it's like we don't have enough titles. We don't Yeah, well That makes sense anymore. Yeah. How's how this is all evolving? Like,

</p>
<p><strong>Jem Young</strong><br />
why can't we just all be software engineers with a specialization in these like you don't say like, Oh, that's I mean, you might but you might have like, Oh, that's a heart doctor. That's a blah, blah, blah, doctors like no, they're all doctors and that specializations each however, they're all skilled enough that to be general doctors, like, if you were bleeding, they could all help you because they're all doctors but like he's a cardiologist. She's, I don't know an obstetrician. That's a little sexist, wasn't it? Yeah. She's a chiropractor. I couldn't remember the brain. What's the brain? One?

</p>
<p><strong>Katie Sylor-Miller</strong><br />
neurologist? neurologist? Yes,

</p>
<p><strong>Jem Young</strong><br />
that was where I ran out. So sorry, judge.

</p>
<p><strong>Ryan Burgess</strong><br />
But I kind of liked the doctor thing. That's a good point is you're right. Like if you're doing the engineering aspect, you can jump in and do something if you had to in the back end or try and figure it out. But it's not your specialty. You're not going to be as good as the back end engineer is but you're you're able to still do that.

</p>
<p><strong>Stacy London</strong><br />
It's interesting, because if we did that, that is we were talking about how do you tell if a place has a particular culture? If I look for a job, and I see that they have roles on their site, a front end or UI engineer and like, are they kidding? They get it. That's the place I want to work. So they obviously get it enough to have it all be all the way out to like how they try and recruit. So if we call everybody a software engineer at this point, right now, I stereotypically think, oh, they want a bunch of CS grads that maybe don't know, front end very well, but maybe they do. I'm not sure. Like I get very hesitant about it. I think we'd all just be in that title on that job listing. Because what if it said software engineer and listed all front end expertise, you would still be like, but it is not called the front end role. Maybe? Yeah. I like that. A pause. Yes. Because of the state of things.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
First argument to be made, which is like, I actually kind of like that. My title is just staff software engineer. Look, I'm not I'm not a front end engineer. Even though that's what I totally I'm like, that's not my title. And I think that when we talk about respect, like having a title, that's the same as everyone else. I think it show it levels the playing field a bit, you know, like, I mean, because let's be honest, like if you title is front end engineer, you're going to get paid less than other people in your org, who have a back end engineer title. And I kind of like the fact that like the playing field is level. Although I do agree that like if I just saw a job for full stack engineer software engineering, I probably wouldn't apply to it because I would be like, this isn't who I am, you know. So there's this weird dichotomy of titles of like, yes, it shows that you value this skill set. But also, there's this history of devaluation and this history of Have you know, like, frankly, like sexism of looking at it as being like, Oh, it's a it's a female thing. It's less it's not real programming. It's not real. You're not a real engineer that you know something about that title. Certain people see that or think that.

</p>
<p><strong>Stacy London</strong><br />
So you're like a baby engineer. You're you're working your way up real quick somewhere

</p>
<p><strong>Katie Sylor-Miller</strong><br />
and they call this the web kids. No, he's me.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, gross. Where's actually I agree with you on the software engineering, like just calling it one thing. We're all doing the same thing. But then there's also a part of me that just likes to be a UI or front end engineer like I that's what I value and care about. And that's what I want to be called. But I also like just even playing field, we're all doing the same thing. You care about one piece I care about the next and that's that's completely cool.

</p>
<p><strong>Jem Young</strong><br />
So v like slightly contrary I I don't necessarily want to work people who only know HTML, CSS JavaScript, like, at some point, and we've all hit this, you will hit some sort of command line, some Linux issue some database issue and like, you need skill sets. Yes. Yes. I have. I think I've told the server I once interviewed someone, and I said, like, Alright, how do you check out a branch and get there like, well, I use the UI and the GitHub or Bitbucket doesn't Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
but there's even tools that will hook you eyes. Yeah.

</p>
<p><strong>Jem Young</strong><br />
It was probably good bucket. I'm sure it's good bucket. But they had no idea how to do it on the fan line. And I said, Well, you may be really good at UI, but like, there's a base level of competency that I'm looking for, and like this doesn't hit it. And that's kind of what I want for everybody. So I don't know like it's cool to be like the world's best UI engineer, but I want software engineers work with because you will hit issues that you've never seen before and I don't want someone to be like completely stuck. Don't be a pro, but you should like be a bit more well rounded.

</p>
<p><strong>Stacy London</strong><br />
What if that person seemed very resourceful though, and they're just like, I don't know how to do it, but I could easily figure that out

</p>
<p><strong>Ryan Burgess</strong><br />
that I would be looking for nobody's going to know every answer. And maybe they are comfortable using UI for good. But I think it's all on what's their aptitude for learning something or even just admitting that you don't know it? That's a different answer.

</p>
<p><strong>Jem Young</strong><br />
It's, it's more like, you should have seen some of this before. Like, you don't be an expert by any means. Like, I use Linux a bit. But I couldn't remember any of the commands like in any given time. Like it's embarrassing how little nuts really helpful for that Google, Google. Yeah, I look up stuff all the time. I mean, I literally teach a course called full stack of front end and I can't remember half of it. I don't use it. However, if I see it, I know where to look and who to ask. And it's more like I would want someone to run into the deer in headlights like

</p>
<p><strong>Ryan Burgess</strong><br />
what do I do? You have enough to be dangerous?

</p>
<p><strong>Jem Young</strong><br />
Yeah, that's that's that's the level of software engineer I want to work with. Like someone is like, yeah, I could, I could take that a database or two. I know some queries misconfigured nginx. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I know enough to get in there. That's cool. That's cool. And then, you know, your whole build system is broken. It's cool. But I figured something out. I have even a question on top of that, and I think two gems, a whole rant rant. In that area is I think, oftentimes, even the history we, you know, we went all the way to dhtml. But like some engineers, so there will be like, I am front end, and I do CSS and HTML, no JavaScript. Do you need to know JavaScript to be a front end engineer.

</p>
<p><strong>Stacy London</strong><br />
I think it depends on the size of your company. I think it's awesome if someone super specializes, because you might need that it might be incredibly beneficial for you if you're creating like a design system, and you need someone who knows CSS inside and out and actually really, really understands architecture like CSS architecture. That's a thing that takes a lot of thinking and time and specialization. So if you're big enough company and you and you can afford to have like tons of specialization. Awesome. All the best your site will be all the better for it.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
I think it's it's that we were talking about before is the different layers of front end. Like there's so many different layers of front end, I think it's perfectly legitimate and valid to be a specialist in one or more of the layers and not necessarily all of the layers. And, you know, but it's funny though, I feel like most of the front end engineers that I know are the people who are like, super curious and they're super empathetic and like, they want to do more things and they're willing to just like, jump in and do something different and figure it out. And I think that that's like a really that curiosity. We talked about it before, like the curiosity and the empathy and all of that is like a super important and valuable skill set that I think is why front end engineers are the best engineers

are the best engineers on the planet. Respect you

</p>
<p><strong>Jem Young</strong><br />
So I'll throw this one out. What about a front end culture? Does it also mean respecting the back end? So being like, I'm an awesome UI engineer, I can make charts and graphs and like, make the page responsive, all these things. But do you think a good front end culture also means like, respect on the other side of things?

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. We're saying that they all need to respect the front end. It's it goes the same way. And we've said the key word quite a few times. So cheers.

</p>
<p><strong>Mars Jullian</strong><br />
I was looking for excuse.

</p>
<p><strong>Ryan Burgess</strong><br />
But yeah, that to me is you should care about that too, or at least have a somewhat of empathy or understanding, because you're also working closely with this team. It's like, if you're working with a team that builds your API's, like you're gonna have to talk to them or better understand how you interact with their API's. And so yeah, you need to respect that goes the same way. Cheers.

</p>
<p><strong>Stacy London</strong><br />
I've generally never seen disrespect for the backend. Arizona Cheers. It's like, I feel like I've been I haven't seen that much like, I feel like maybe that's from my lived experience. Like I see the reverse happen a little bit more. And I don't know what that is. I don't know why. That's part of like, what's happened with the culture, front end and back end. But like, I've definitely seen a lot of front ends that will say, like, Oh, I, you know, I don't know about how to do that with API's, like, well definitely go talk to like that team. But then the reverse is like, not consulting the front end and just like doing something random. So it is interesting that like, from my lived experience, I don't see that happen as much. And maybe it ties into some of the things we talked about earlier.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
Yeah. Oh, yeah, that's definitely the experience that I've had is either either there's mutual respect, or it only goes one way towards the back end and never towards the front end neck. Never offset, but

</p>
<p><strong>Jem Young</strong><br />
Where I've seen is usually from non CS oriented people, non engineering people, it's that the front end is shiny, it's tangible. Like you can see it, you can act with it. I can say like, Oh, I built this interactive chart and it slides and it moves and CEO goes, whoa, gems that tests. But this other engineer, she goes, Well, I skilled the back end from 500,000 requests a second to a million requests second, and we're still using the same cluster. No one cares like that. Like, that's far more impressive and far more challenging, but that's where I've seen the like, the not respecting the other side of the culture as well. And I think

</p>
<p><strong>Ryan Burgess</strong><br />
that's there. So it's even like this outside perspective like from partners or higher up people looking at is like, that's tangible. This is you know, I can see and feel this Yeah. business

</p>
<p><strong>Stacy London</strong><br />
side. Yeah. Like, like outside of our engineering people that like yeah, business side or product people or something that that I've seen for sure. Yeah, definitely. And

</p>
<p><strong>Jem Young</strong><br />
that's and that's To me, it's like part of Goodfriend culture is like calling on your colleagues and data or data science or analytics and being like, hey, yeah, I built this like really cool thing, however, is powered by all these other people who did this work that you'll never see. But I work with them every day. And like, That, to me is a good culture on both ends. It's like, just respect going back and forth. Totally.

</p>
<p><strong>All</strong><br />
Cheers. Cheers.

</p>
<p><strong>Stacy London</strong><br />
Alcohol cop.

</p>
<p><strong>Ryan Burgess</strong><br />
It's a good roll. All right. So before we get into pics, I always like to say like, let's leave one piece of advice. You've got this lonely front end engineer that stuck on a team that's, you know, maybe he doesn't value the front end culture as much how what's your one piece of advice to change that perspective in a company?

</p>
<p><strong>Mars Jullian</strong><br />
I think one key thing I noticed, like all the solutions that we were proposing earlier is like finding a way to build empathy, whether that's through a lunch and learn or a hack day, or like laying some groundwork with tools and stuff and just find a way to kind of get them involved and hopefully engaged and excited. And that's kind of like Empathy building that you need for them to understand that this is valuable. And this role exists for a reason.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
I think the advice that I would give is that don't give up the front end is super valuable. It's really important. And even if you're not feeling super appreciated, like understand that there's a path forward and that you can prove your worth and it is valuable. And you know, I could see being in that situation and kind of feeling like really frustrated and like ready to give up and like, Don't give up, I promise. You're valuable. You're worth it. You're awesome. And I think

</p>
<p><strong>Stacy London</strong><br />
taking that further, if you've tried all the lunch and learns and you've tried, you know, you've given a valiant effort for maybe a long time and it's still not happening where you're still maybe not feeling respected or valued. There are places that will value you and they will be very appreciative of You and your skills and they're out there to those companies are out there

</p>
<p><strong>Ryan Burgess</strong><br />
the advice is quit.

</p>
<p><strong>Stacy London</strong><br />
After trying after trying,

</p>
<p><strong>Jem Young</strong><br />
I just echo what Mark says, like try to build empathy. Just try to remind people that all software engineering is hard. It doesn't matter what side you're on. And there's no one side that's easier than the other. I, I don't know why that's still a common misconception, but and I don't know, do what you can to try to break that and maybe drop like a performance studies like hundred milliseconds makes between a sale and not a sale. And like, that's something we control on the front end and things like that.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think also to fear that only person in the company, and maybe yet it's hard to build those relationships with the rest of engineers is there's a great community out there. Like there are ways to like get advice from others, whether it be on Twitter, or podcasts, or whatever it is, is I think there's ways to kind of help that culture slowly build up.

</p>
<p><strong>Mars Jullian</strong><br />
And to Katie's point earlier to there might be allies within the company that aren't engineers and also dumped Talking about like showing, you know what you've built to your product manager, your CEO or finding designers who can sort of like help you fight the good fight. So finding your allies who can be really important, even if it's just to vent to someone. All right at the end of each episode, we like to share pics of things that we've found interesting and like to share with our listeners. Jem, you want to start it off? Share your picks for this episode.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I have three picks today. My first pick is probably the best movie I've seen all year. I know and I'm hypercritical of movies, because you know, I can do that. Whatever. I paid my money. I can judge them. My first pick is spider man into the spider verse. It is one of the best movies I've seen all year, probably in the past couple years. It is phenomenal. It's animated, but it just like,

</p>
<p><strong>Katie Sylor-Miller</strong><br />
washed on the airplane out here. It's so good.

</p>
<p><strong>Ryan Burgess</strong><br />
So gem like you probably watched like similar timing to

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's just fantastic. And everybody saw in theaters like Oh, she's moving away. Like, animated, whatever, it's great. It's rated g RPG. So like everybody can watch it, it's just like really hits all the points. It's worth saying. My second pick is Deadpool two, which it's just hilarious like, it's just so irreverent. I know I'm like talking about two different extremes here but uh, Deadpool two was probably one of the funniest movies I've seen in a long long time. Now that these are streaming on Netflix So good luck finally usually picked Netflix stuff, you know JetBlue

</p>
<p><strong>Katie Sylor-Miller</strong><br />
right now like

</p>
<p><strong>Ryan Burgess</strong><br />
that, that's how you got to go see these things,

</p>
<p><strong>Jem Young</strong><br />
fly to New York see some movies for free. My last pick is it's this thing called plus codes. I ran across it the other day and said idea that it's an address for everybody. So it's a series of codes that doesn't change. it's free it's open source. It's more for people that don't have homes or for instance like the say their streets change a lot. We we don't think about things Then in the developed world where our streets are paved and things like that, but plenty place in the world. I don't know middle, the Amazon, how you need to package their house on the wazoo. The idea of plus codes is like this universal address system. It never changes doesn't need GPS. It makes sense in a mathematical way. So you can like figure out these coordinates from somewhere else. It's a really fantastic idea. I really hope it comes on or capsule on a bit more

</p>
<p><strong>Stacy London</strong><br />
Amazon doesn't deliver to the Amazon. Oh, do they? I don't know what that seems like they should.

</p>
<p><strong>Ryan Burgess</strong><br />
Stacy, what do you have for us?

</p>
<p><strong>Stacy London</strong><br />
Two picks that are music related. As per usual I've got the first one is a new song by Ellen allien called stimulation. It's off her eighth new solo album alien track. It's kind of a mix of like ambient techno and electro if that's possible combo, and then poor by recondite. It's kind of like good heavy beats to go to so another another good one for the headphones and cutting

</p>
<p><strong>Ryan Burgess</strong><br />
now. I have some good picks for coding, I hope so I try Mars.

</p>
<p><strong>Mars Jullian</strong><br />
Um, so my first pick is a newsletter called inside deals. It's a part of a series of newsletters that inside as a company puts out, but this one is specifically focused around like hardware and travel. And they have a lot of really good, at least for me, I like the travel stuff. So they've got like good flights to interesting destinations for cheap. And my second one is actually an article about routing with react hooks. So I was like playing around a little with hooks recently in a prototype I was working on and didn't I mean, kind of got a basic understanding of them, but to see them using kind of a more powerful application within reacts was really interesting. Kind of like elegant, simple solution. So if you're interested in hooks and how they could work for you check it out. That's interesting.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Katie, what do you have for us?

</p>
<p><strong>Katie Sylor-Miller</strong><br />
I have a couple pics. So the first one is that my insanely talented coworker Alex just released an EP on Bandcamp with her project. The fascinating kimera project, which is an amazing name, and it's also a really good descriptor, and I'll try to remember what the kids call it. It's some sort of like lo fi shoegaze electro something I don't know. It's just

</p>
<p><strong>Ryan Burgess</strong><br />
like the sounds

</p>
<p><strong>Katie Sylor-Miller</strong><br />
of me. It's so good. It is so good. You need to go on Bandcamp and download the fascinating Kenmare project. My other pick is carbon.sh, which is at carbon now.sh. And they're all nodding. This is brand new to me I just found out about this

</p>
<p><strong>Jem Young</strong><br />
is so cool. Like, I don't

</p>
<p><strong>Katie Sylor-Miller</strong><br />
know what the kids are doing these days. But yeah, no carbon is really cool. It's basically like a website where you copy paste in some code and then it outputs this really awesome, formatted and syntax highlighted picture that you can drop into conference talks and presentations and slide decks and things is gorgeous. And then my other picks are because I am in San Francisco and this is like the capital of Tiki culture in America. I'm gonna list out my favorite Tiki bars in San Francisco. So number one is pagan idol, which is like the new kid on the block. Really, really cool. They also have really good mugs. I have a couple of their mugs at home. My second favorite is you got to go old school with the Tonka room because it has the floating boat that the bands play on in the rain. Just like Oh, it's so old and I love like the boat like bar where you can like hang out on like the fake boat. So cool. smuggler's Cove is always a classic. I'm afraid that it just recently got supplanted by pagan idol but and then I really want to go check out the new place that I it's last Friday. Yes, I'm super pumped because it's like a combination Indiana Jones. slash tiki bar, which is my aesthetic,

</p>
<p><strong>Ryan Burgess</strong><br />
what it sounds like.

</p>
<p><strong>Katie Sylor-Miller</strong><br />
Yeah, and if you ever go to Las Vegas, go to Frankie's Tiki Room, which is like the best tiki bar in America. So Wow. Just to go with our mind Thai theme to talk about

</p>
<p><strong>Ryan Burgess</strong><br />
lovers. All right, I have two pics and they're both photographers on Instagram. We're gonna theme these two photographers like scale high buildings and cities that they're not really supposed to be scaling. And they take these epic photos that just kind of almost make me sick to know that they are just climbing these buildings when they shouldn't be one is in Toronto Skywalker, and one is in New York Hamza dheas, so highly recommend checking out their work on Instagram. Before we end the episode. I want to thank Katie for joining us. It was a pleasure having you join us and thank you for the amazing muy Thai. You're welcome. Where can people get in touch with you?

</p>
<p><strong>Katie Sylor-Miller</strong><br />
So I'm on Twitter at <a href="https://twitter.com/ksylor">@ksylor</a> and also on Twitter at oh shit get I was gonna say I'm like to Twitter's

</p>
<p><strong>Ryan Burgess</strong><br />
but I make a lot of sense

</p>
<p><strong>Katie Sylor-Miller</strong><br />
I know it's weird It feels weird to have to Twitter's but

</p>
<p><strong>Ryan Burgess</strong><br />
branding branding hashtag

thank you all for listening today's episode make sure to subscribe to front end happy hour and you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> any last words respects

</p>

  `;
  return transcript;
};