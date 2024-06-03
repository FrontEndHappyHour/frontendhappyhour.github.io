module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Hello, everyone, and welcome to a brand new episode of Front End happy hour. This is episode 38. And we are joined by Shirley Wu, a freelance software engineer who specializes in data visualization. We are fortunate enough to have Shirley join us today to talk about and discuss front end data visualization. Surely Can you give us a brief introduction of who you are, what you do and what your favorite hobby our beverages?


<p><strong>Shirley Wu</strong><br />
Yeah, thank you very much, Ryan. So hi, my name is Shirley. Like Ryan said, I am a freelance software engineer. And, well, yeah, I build data visualizations. And then I think I guess my most popular visualization thus far has been an interactive visualization of every line in Hamilton, where I visualized every single line, but I do other things, other storytelling kind of data visualizations, or previously before I started freelancing, I was at a enterprise security startup, where I worked on data visualization, the data visualization part of their products, and then my favorite, Happy Hour beverage or in general alcoholic beverage these days, I drink a lot of beer and I drink a lot of styles. But I'm in my younger days, I enjoy lots of Scotch though I am no connoisseur.

</p>
<p><strong>Ryan Burgess</strong><br />
Perfect. We all enjoy both of them. Let's also go around the table and give brief introductions of today's panelists. I guess you want to start?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, sure. My name is Gus tissue, and I'm a front end engineer at Evernote Stacy

</p>
<p><strong>Stacy London</strong><br />
London front end engineer at Atlassian

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. So what did we decide today's keyword is charts, charts. So if any of us say the word chart, or charts, plural, we will all take a drink. All right, well, let's jump right in. I'm interested to know how much experience everyone has with doing data visualization. I know surely, obviously you probably have the most. But I'd be interested to know in general, have you all done that in your careers? Done it on the side? Is that something that you've played around with?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. When I started at Evernote, I worked as an analytics intern. And so I kind of helped build out their like, customizable dashboard for graphs, though, and they use d3 for that. I'm at the time because my manager really like Drupal. He wanted me to make the customizing CMS part with Drupal. But yeah, I also when I interned at work day, a lot of like the charts, Tang, it

</p>
<p><strong>Ryan Burgess</strong><br />
started off strong. Cheers, cheers, a lot of the

</p>
<p><strong>Augustus Yuan</strong><br />
things. My project for that, for that internship was working on the organization connecting things. And so we use d3 for that. So awesome. What is d3? d3 is a it stands for data driven documents. Yeah. And it's a pretty popular graphing library that uses like SVG. And the way Mike Bostock kind of made it was it's very, like well geared and intuitive for statisticians.

</p>
<p><strong>Shirley Wu</strong><br />
Maybe you do, I think the only thing I want to add on to that is, it's a really great tool for visualization. So it's not like a lot of the other graphing libraries. Other word where you input data, and it makes the graph for you. Whereas d3 is very low level uses HTML, SVG, Canvas, anything. And it basically just makes it easier for you to display your data in the web. And it's all in JavaScript. It's all in JavaScript. Yes. And I do want to add that I'm always kind of surprised because I think of data visualization as such a niche, but d3 is actually like the second or third most popular JavaScript library or something like that. Oh, yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it's the go to if you have to do any sort of graph for charts. That's what you use. Stacey gem Vietnam experience,

</p>
<p><strong>Stacy London</strong><br />
not not too much. I know in past job, we used Highcharts to add some

</p>
<p><strong>Shirley Wu</strong><br />
Does that count? Does that count? No, that's a single word. It's a single word. Fair.

</p>
<p><strong>Stacy London</strong><br />
I didn't do a ton with that. I've played around with Raphael, like a while back for fun. Same thing with d3. It was like just for fun. I've never actually for you know, my daytime job, you had to build out some sort of complex data visualization. So I haven't dug into it too much. So and you're saying like, you know, it's such a specialization and I kind of feel like it is only because d3 was sort of capital. To me when I tried it, and I was like, Oh, I feel like you'd have to spend a lot of time with this to get really good at it. And yeah, so that's kind of my experience.

</p>
<p><strong>Jem Young</strong><br />
My second job was at Chartbeat in New York, where it's an analytics company. So I did a lot with d3, which I think my, I've never been going to do data visualization, like just, it's not my forte, kind of like design. But I find that like, it's much more complicated than you would think even in 2017. It's, it's, it's more complex to get the data in the right shape, because I'm just not an expert, d3 is explained by like, he's a doctor of math, right?

</p>
<p><strong>Shirley Wu</strong><br />
He was a PhD at Stanford, and I think he's always been computer science. Yeah. But he has math leanings. If that's what you mean.

</p>
<p><strong>Jem Young</strong><br />
Yeah. It's, it's like a really complex library. You can do amazing things. But yeah, integrating that with Angular at the time, which I was on Angular one was, it was such a nightmare that I was like, ah, get it done, like, get it working and walked away. But that's my experience. I've

</p>
<p><strong>Ryan Burgess</strong><br />
played around with d3 Like, but I don't believe I've ever used in our project, I have done some data visualizations for banking applications in having to actually make graphs for plotting note, mortgage calculators and things like that. But I don't even think d3 existed when I did it. So it was a lot of manipulating SVG with just vanilla JavaScript, maybe jQuery at the time, and then outputting it to a PDF. So it wasn't easy. I would have loved to have d3 at the time. But got it done. And I haven't really had to do much with it since so I'm interested to talk more about it. So yeah. How would you describe data visualization? Oh, yeah.

</p>
<p><strong>Shirley Wu</strong><br />
Okay, so that's a really great question. So I think it's kind of like what Jem was saying, it's a little bit more complicated than we at first give it credit for it. Because when people ask me, what do you do? And I'm like, data visualization, and they're like, what's data visualization? And I'm like, you visualize data. And you being more involved, have an answer, actually, like, you know, includes going into how it's actually about, you know, getting your data sources and exploring the data and figuring out like, kind of all of the shapes and different, you know, attributes of the data. And then once you explore the data, you kind of have to figure out what is a good visual encoding for that data, so that whoever is your consumer for that visualization, I can understand what you're trying to communicate, what are the insights and the patterns that you've found through that data. And it's used a lot. And I think corporations as like, internal, like dashboards, tools to help make business decisions, I think that's one I'm starting to see a little bit more in terms of in product, where a company's customers might use it to solve some sort of problem on their end, my previous one, and we were doing it for security, networking security. So we did visualization to show the customers their kind of data center traffic, and like, which ones were more vulnerable, when which ones should be secured, etc, which was really interesting. And then on the other hand, there's also data visualization for kind of storytellers. So like a lot of newspapers and journals, like New York Times is absolutely amazing at what they do, yes. collected? Yeah, I think those are what I see mostly, but kind of, at the end of the day, trying to gain insight out of data to understand behaviors or understand what's going on.

</p>
<p><strong>Stacy London</strong><br />
Maybe that complexity is like not only knowing what data to feed into some particular chart, but at a higher level, how to distill something down into something simple so that it can, as a story can be told to think in terms of like, aesthetics and design, combined with the data. And I think that's a hard thing to like, combined, you

</p>
<p><strong>Ryan Burgess</strong><br />
can screw it up big time is like I've seen some graphs where it doesn't make sense. So it's actually confusing. So that's not helpful at all. Yeah, you're not actually helping visualize the data at that point. So I think there is an art just to choosing the right way to do it. Yeah, pie chart might not be the right one.

</p>
<p><strong>Stacy London</strong><br />
That one always gets. That one always gets all the all the

</p>
<p><strong>Ryan Burgess</strong><br />
the hate or hate. Yes, yes.

</p>
<p><strong>Shirley Wu</strong><br />
I mean, there's a narrow subset when a pie charts cheers, cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
There's no way

</p>
<p><strong>Shirley Wu</strong><br />
it's the good right choice. And that'll be like when you want to show percentages of holes. But anything else is usually risky business. But I think it's exactly what you touched on about how it gets a little bit more complicated. And it's also super fun, because it's not only the data and the data science, but it's also the design aspect of choosing the right visual encoding. It's also kind of the statistics of making sure that what you have is not misleading or because like we know with statistics, it's easy. To mislead, and so it's a bunch of things together. And it's a fun field, because there's very few people that can do that whole spectrum perfectly. And people kind of specialize in either like, you know, coding a visualization itself or doing the data analysis or, and so it's very collaborative. And people come from different fields. And it's, that's what makes it fun.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess you brought up d3, I would love to hear why is d3 so popular, like what makes it such a great framework for using for data visualization,

</p>
<p><strong>Augustus Yuan</strong><br />
I personally think that it covers a lot of things like covers a lot of bases that like a lot of, at least at the time when I was researching a lot of graphing libraries at the time. So when I worked at workday, they were like, okay, just get just choose a framework, pick a pitch for it. And so I had to look through all of them. So Raffo was one and d3, by far was the one that seemed to give the most options. And I've read a lot of documentation about it. To be honest, I haven't been the data visualization scene since then. So actually, I don't know if there are any new things, there was one called victory for React, I haven't really looked into it. But to be fair, like, I felt like d3 just has like a lot of like a huge community behind it, reading a lot of the articles that Mike Bostock has comments, seeing all the examples, there's like so many examples of d3, it just feels like anything's possible with it,

</p>
<p><strong>Shirley Wu</strong><br />
I think those are really great summary of it, the main thing that it helps do is I think there's, to me, it solves a really great kind of like bridging part of like, you have your data. And that data means something and you know, maybe that data is basically like years of weather temperature in a certain city or something like that. And to be able to show that on the screen, you need to be able to translate from like, you know, the year to an x coordinate and like the temperature to a y coordinate or like, you know, you need to be able to map a color or something like that. And that translation is a lot of headache inducing work. And d3 is really great in that it takes care of that part a lot. It does a lot more than that. But to me, that's the most valuable part of the Library of taking care of a lot of repeatable tasks in visualization and doing it in a very smart way. It does have the learning curve, but once you kind of like there's the initial learning curve, but once you get over that hump, the rest of the library actually comes in very intuitively.

</p>
<p><strong>Augustus Yuan</strong><br />
I guess another thing when I was experiencing with it was I feel like it meshes really well with JavaScript paradigm of treating things as like functions as first class citizens, and like d3 ships with its own selector, very similar to like jQuery selector. And it just felt really intuitive when like traversing like an SVG DOM.

</p>
<p><strong>Jem Young</strong><br />
Have you ever used smoothie? Smoothie? No, I like smooth jazz. I've used it for a few years, because it's really good for streaming data, which I don't have d3 is evolved in the past couple years for streaming data, like

</p>
<p><strong>Ryan Burgess</strong><br />
if you're actually doing it as live data coming right? Smoothly works really well for that very cool. He's

</p>
<p><strong>Jem Young</strong><br />
on the past.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I've never even heard of it.

</p>
<p><strong>Shirley Wu</strong><br />
Does it take care of when you say streaming data? Does it take care of the data part? Or does it take care of visualizing that data? Does it that makes

</p>
<p><strong>Jem Young</strong><br />
any it streams data over time, but it does the adjustments for you?

</p>
<p><strong>Shirley Wu</strong><br />
That's really awesome.

</p>
<p><strong>Jem Young</strong><br />
You wouldn't think like, oh, I need to just like, write 100%. And like, you can't just for you over time,

</p>
<p><strong>Ryan Burgess</strong><br />
actually adjusting the x and y for even if it's going up horizontal that's going yeah, that's pretty cool. That is very cool.

</p>
<p><strong>Shirley Wu</strong><br />
It's really cool.

</p>
<p><strong>Jem Young</strong><br />
Here's my thing with d3. And I think the issue that a lot of people run into how do you do streaming data? So it's gonna update itself? But how do you do that within the regards of like React, or Angular Ember or something like that, where they have their own model for updating the DOM, but d3 also has some mob that lives outside of that, like, how does that all play together?

</p>
<p><strong>Shirley Wu</strong><br />
Hey, so I only have experience with Backbone and react. I never did Angular or any of the others. So it's exactly as you touched on, because react and backbone. And all of these have the V part of MVC. And d3 is very opinionated on how, like it, you know, touches the DOM. But I think the biggest thing about using d3 with all of those is figuring out what you're trying to do and then and then deciding who's going to have control of the DOM, because only one person is allowed to write. And so I think for most use cases, for React, I would actually say react should have control of the DOM, because it takes care of the updating underneath the hood so that you don't have to whereas like d3, one of the biggest learning curves for d3 is the way that it updates. So it has like the Enter update exit paradigm that's like kind of hard for people to wrap their minds around because it's like completely non intuitive, even as a developer in their field, like developing itself is already non intuitive. On top of non intuitive, and then I've had experiences where I run into trouble and trouble trying to update with d3 because sometimes there's just Way too many things I need to keep track of. So I actually really like how react has a virtual DOM that updates for you on the backend. Having said that, the powerful thing about d3 isn't just about how to select and traverse the DOM, it's a lot of D threes value is in the translation between data and visual encoding. Um, so even so even if you decide to use the one of the MVC frameworks to work with the DOM, you can use d3 to do that kind of like data calculation part. And if you do decide to use d3 for the DOM manipulation itself, you just need to make sure that your framework doesn't step on d3 doing that and vice versa. That's probably the best answer I've figured out just being like aware of how you're using both. So I was using backbone very religiously to build my web apps that have visualizations and then I moved to react a few years ago, because at first, it seems like they wouldn't work together at all, because they seem to be doing the same exact thing, except ones under the hood and once within your control. But once you start to realize that, like React doesn't actually care about knowing every single part of your application, it starts to make a lot of sense using React and d3 together. And actually, a lot of times, so I use both a lot in a lot of my projects. And the way that I actually use it is oftentimes, I'll actually have d3, control the DOM. And that's only because there's a few things that d3 does really well that react just doesn't. And one of the things that I still rely on d3 heavily for is like it has a really great function for creating axes and for creating like brushing functionality, and that you would use a lot in visualizations that like people wouldn't do for regular web apps, right. So react, of course, when and then there's a lot of like dragging functionality and animations that like I think React is getting a lot better with the animations. But like, d3 still handles a lot better. So I usually just make like a black box, React element, like element, and then just do all my d3 within there. That makes

</p>
<p><strong>Ryan Burgess</strong><br />
sense to write when you touch on the animations. Any of us who's written react. Animations did not come easy. No, it's gotten better it has. And there's been some libraries that have helped a lot with Yeah, yeah, it is. It's still not perfect. So I can see why you head towards d3 at that point. Yeah, animating.

</p>
<p><strong>Jem Young</strong><br />
It's an old, old argument with React. It really is. Yeah, I think the main problem with d3 is like, you have to know d3 To use d3, you can just feel like, I'm going to use a rapper because I just did a quick search for like React d3 rapper. And there's still that one, because it's not that easy. And people have tried, they try for Angular to try for React. I don't even know if it's possible. Like I've never seen a good solution. I like a rapper,

</p>
<p><strong>Shirley Wu</strong><br />
sorry, I think the best one I've seen is probably it's called um, I've never used it myself. But I think it was like fo d3 Dom or something like that. And it was a really interesting solution, where they were saying, I think if I remember correctly, it was saying, instead of having d3, select actual DOM, let d3, select virtual DOM and work off of that, or something along those lines, it was a very interesting solution. And my biggest concern with any d3 wrapper is that the d3 library is so big and Bassen has so many functionalities that like, like, nobody's going to go and re implement everything. Right. But I think that one, I talked briefly with the person that maintains it. And he was saying that it's actually not much more of a maintenance cost to keep up to date with the d3 library, something along those lines. But that's the closest I've seen, but I definitely agree that it's really hard to make a wrapper.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, well, and then the other thing is d3. So when I use d3, it was still like a giant minified. JavaScript, they broke it up, which was actually super smart. So now that if you needed only one specific thing, then you can just npm install that

</p>
<p><strong>Ryan Burgess</strong><br />
smart component based out. Yeah. So we've talked a little bit about d3, integrating with frameworks is react, seeming to be the best one for the job. Like I know, you talked about backbone that we're using that haven't had much experience with Angular, but is react kind of the one that people are going to at this point.

</p>
<p><strong>Shirley Wu</strong><br />
That's a really interesting question. And I don't think I'm the best person to talk about that just because I only have the backbone in React. Having said that, I actually first want to say that you don't need an MVC framework for data visualization. Just like if I just want to make sure that whoever is starting out with d3 doesn't think that they have to have react or you have to have a

</p>
<p><strong>Ryan Burgess</strong><br />
React experience. No, that's a good point. I feel like that's more if you had an application. You would maybe have react and then you're like Part of the application yes data visualization part. And that's where you add d3. But if it's just the data visualization, you probably don't need it should not really shouldn't, you're just over killing at that point and not getting any benefit from it.

</p>
<p><strong>Shirley Wu</strong><br />
Yeah. So I actually really quickly want to plug. So a really great example of this is that the d3 community actually has this website called blocks.org. BL Doc's dot org, which is a gallery of like, I think 20, something 1000 examples of people just using d3. And then there's just all one page index html, and then to just show that you can build a really quite complicated visualization, sometimes, in just one page of HTML, you really don't need anything else. Having said that, I think a lot of times, people use React and d3 or any of the frameworks with d3 together, because like you said, it's, you already have the React app, and you just need a database in that, I come from the other way around where I build data visualizations. And the reason why I use React is because when I want to get beyond just like, just a visualization that shows the data. And what I mean by that is that I love building tools with visualizations tools that I can use to like, so there's the visualization itself. And then there is the tools around it that helps you filter aggregate, or even sometimes the what I used to work on is this thing that helps the user kind of do actions that will manipulate the data. So like the security company I was talking about before their visualization, it wasn't just a visualization in the network traffic, it was a visualization with a set of tools on top of it, that like allows you to right away in that tool like you know, secure a, like particular traffic or something. And then and then that, that means that like from a technical perspective, the data is being manipulated. And that visualization is being updated on the spot, like things like that, where there's the interactivity of some sort, and then I need to keep track of state, that's when that's when I go to react or Batman, that's when I used to go to backbone. Now I go into React. And so the way that I like to think about it is you don't need an MVC framework to build a visualization unless you want to do something that requires having a maintaining state

</p>
<p><strong>Stacy London</strong><br />
to agree with this good explanation.

</p>
<p><strong>Shirley Wu</strong><br />
I like thinking about this a lot. Yeah. I have some react conferences coming up where I'm giving talks I have been having to think about like, yeah, and

</p>
<p><strong>Ryan Burgess</strong><br />
I think like sometimes, too, is people here, like we're talking about React, or we're talking about backbone, or Angular. And it's like, okay, great. Well, I need to know all those things, just to do some data visualization. And it's like, no, no, spend more time on d3. And don't even worry about that kind of stuff until later, like a static site would be better putting d3 in there and not worrying about the full application. Yeah, you don't need a single page application. You know, and I think it's good advice is just like, know what you're trying to do. And don't get overwhelmed by all the tools that are out there. Yeah,

</p>
<p><strong>Jem Young</strong><br />
I think Stacey touched on it. We've all kind of briefly touched on it. To me, like my personal opinion. I think as a front engineer, you will engineer data visualizations when the hardest things you can do, because it's it's like you have to understand statistical modeling, you understand like, Okay, I have some data, I want to say, how do I want to split? Do I want to be interactive, okay, see me make sure the data is in the right shape. Before you do that, then you need our stand visualization library, then you want to do interactivity, you need to understand like React, Angular, Ember, whatever you're using, like, that's a lot of skill sets. And then you need to design the like the

</p>
<p><strong>Shirley Wu</strong><br />
psychology of how people perceive these patterns.

</p>
<p><strong>Jem Young</strong><br />
That's why I like Dave is like engineers on like, props to you. Very, very hard. It's a good skill set

</p>
<p><strong>Shirley Wu</strong><br />
on behalf of the niche of five data visualization. I think.

</p>
<p><strong>Augustus Yuan</strong><br />
I think like within the few coming years, like data visualization is going to start booming as like an industry or like even data science right now is starting to boom, definitely, like such a huge demand for it. Because there's so much data. I don't want to use big data's

</p>
<p><strong>Stacy London</strong><br />
large data.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, there's like, there's just so much data that people need to consume. And like, it's really awesome that there's like, people who are like really focused on asking the questions of what should people be seeing and focusing on how we communicate that.

</p>
<p><strong>Shirley Wu</strong><br />
So I think on top of that I actually am so we think about this quite a bit, Elijah Meeks and Susie Lou at Netflix. So Elijah kind of talked about, like, what is data visualization? And like, what is the role of like, say, a data visualization engineer? And like, does that mean coding in d3? Does that mean data science or does that? So there's been a lot of really interesting discussions about like, it's kind of like this new, weird hybrid role that's coming up and like, what does that mean? And my personal opinion is like, I think it's separate from data science in that like, there's data scientists that do that really well. I don't understand what they do. But I think and I'm gonna borrow what Suzy says, which is like, I think data visualisation is going to be more of design practice. And what I mean by that is like, I think a lot of it comes from a, like the psychology of how do people perceive colors? And how do people perceive different, like, you know, visual shapes, like these circles? And how do people like perceive patterns on the screen? And then like, what does that mean to represent a data set or something like that? So I think there's definitely the data science of understanding what the what the data is saying. And there is definitely the coding part of kind of like, what if an engineer we like what we have to do right now of like making that happened. But then I think the most important part is actually going to be the design part of figuring out just what to show and how to show it. So that's my little like, I've been thinking about this for the last few months kind of

</p>
<p><strong>Stacy London</strong><br />
thing. It's really good way to describe an example of that recently, I came across a site that was using data visualization to show and this is sort of a sad topic, but like San Francisco, and the housing crisis and, and how, like, all that works together. And this loophole of landlords being able to do something like declare some sort of, you know, bankruptcy, I don't know, there's like a way to like, kick people out. And so this, this, this visualization was to show where people have been evicted, due to this rule, to enable like building more expensive housing. Now, you could have just done like a little.to be like boop, boop, someone was evicted, boop, boop, boop. But they did this, like bubble that got bigger and bigger, like an explosion or whatever. So it's much more dramatic. And it looked like, you know, bad things happening in a very dramatic way. And like the way that that was visualized, I think had a very high impact. Yes, on you seeing it. So

</p>
<p><strong>Shirley Wu</strong><br />
yeah, I know, we're supposed to talk about how to learn d3. But this is actually also something I'm really excited about, which is kind of like there's more and more people talking about data, empathy, kind of, which is also really interesting, because I think for a while, we forgot that data is oftentimes made up of people and people's behaviors. And I mean, like, sometimes it's like earthquakes or like, we're just not people. But a lot of times data is people. And data itself has always felt kind of hard and cold and numbers. And like how do you visualize that in such a way that it comes, it respects the people that the actual data set underneath, but also conveys that in an emotionally impactful way. And so that's a really great example of voice. And I think the most recent, I watched a conference talk by Lisa crossed openvas. And it was called, I think, data point walks into a bar, I was like, I just made this title to get like, picked for the Talk or something. But it was all about data and empathy. And she makes really great points about like, what's the good mix of because, you know, like images, and there's definitely things that evoke emotion. And then there's also but then she's saying that you can't have just one or the other, you have to have a mix. So that you need to be able to Cat capture a person's attention with the emotional aspect, but then to be able to kind of keep their interest and give them something meaningful to hold on to you need the data and the like, more logical side. And then I think on top of what you just listed as an example, there's some in the past few years, I think did that so well. One of them is called it's by periscopic. And it's called um, I think the number have gone does. Have you guys seen that one?

</p>
<p><strong>Augustus Yuan</strong><br />
I might have seen this. It scares me too.

</p>
<p><strong>Ryan Burgess</strong><br />
I have not seen it. But

</p>
<p><strong>Shirley Wu</strong><br />
in the US by periscopic I think maybe?

</p>
<p><strong>Augustus Yuan</strong><br />
Oh, yeah, I actually gave them They. They were one of my pigs. They're like a visualization firm.

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, great data visualizations. So, so awesome.

</p>
<p><strong>Shirley Wu</strong><br />
Yes. Um, so I pulled it up, nobody that's listening to the podcast will be able to see it. But us gun deaths in 2013. And it kind of slowly like, starts to see it show you like, oh, it's it's these curves. And then as the curve starts, it's kind of showing you like there's a drop in the middle, which is when that person was killed, and then it kind of keeps drawing that curve of when they were projected to be able to live and then it shows you kind of then like the 12,000 people killed and how many stolen years and it's like this chilling like, but really powerful. I get chills looking at this even like because this came out I guess 2013 or 2014 and every single time I look at it, I still get chills.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that was a cool way to visualize it. It sucks that seen it but it's it is a cool way it does grab your attention. Yeah.

</p>
<p><strong>Jem Young</strong><br />
So now that we're on data visualization, we touched on it. How do you handle like the ethical parts of database? Because like, you can make data look like any way you want, depending on like your axes, things like that, like, what do you buy? Can you handle that? Like, morally you want, like our company's on a trajectory for growth? And it's like just this year, but like the other years, like you saw things like that, like,

</p>
<p><strong>Shirley Wu</strong><br />
Oh, interesting, I thought you meant um, so this is another thing I've been thinking about a lot. I thought you meant like, because the data is actually underneath. They're all people. So then like, how do you make sure that people are anonymized? And like, because there are some more sensitive datasets out there? Right, have like, say incarceration data, or have like people's salaries or, and how do you protect them? I thought that was

</p>
<p><strong>Jem Young</strong><br />
a bit of both. Like, I think, again, this, I think, is why the visualization is so hard. What

</p>
<p><strong>Ryan Burgess</strong><br />
at that point, I think I would hope that you're removing, like, any personal data,

</p>
<p><strong>Shirley Wu</strong><br />
I definitely agree with that. I think it again, goes back to what you're trying to do. And then so like, for example, for that, being able to just having the demographics of that user, and then being able to tie that to how they like, maybe that's enough, but then like going back to the emotions like, um, what if been able to see the actual, like, being able to see that person's picture or like, what if that gets the emotional connection? So then that gets into like, a really hard area of like, I'm definitely for anonymization most the time, but then like, what if it's more impactful to like, not anonymize? And then And then where do you draw the line? They're kind of it's a hard line. It's a hard line to draw or like it rather it's a it's not hard. It's like a soft? Like gray? Yeah, yeah. But I don't think that was really what you were seeing as much. No,

</p>
<p><strong>Jem Young</strong><br />
but I like your point. But mine was more of like, okay, CEO of bitcore, she comes up to you and says, like, hey, I want to show that for 2016, our company was profitable. And you can manipulate the data to make it look that way. Because you show like one year or you show it over the past 10 years, something like that. And that happens a lot in like News, the news, like some files, graphs, like, here's gun deaths, but like, here's heart attack, right? So gun deaths are like, so trivial. And you're like, oh, yeah, it is because like the layman just looking at it's like, oh, yeah, gun deaths aren't important. But compared to something compared to something Yeah. But yeah, that's, that's manipulating kind of data because you're trivializing things and, like, how do you deal with that ethical dilemma?

</p>
<p><strong>Augustus Yuan</strong><br />
Like for me, like, I definitely believe that is an ethical dilemma. But I also think like, as people like, and as like, our like, as the world just kind of gets more like integrated with technology. Like we should all start asking, like the bigger questions and start questioning that, like, now there's this assholes who just like, they look at something and they're like, make some smartass comment about something. I actually love those assholes or realizations. Because, like, I've actually seen a lot of like, you know, on Reddit, like build posts, like these things, like, oh, like, blah, blah, blah, x is like, greater than y. So x is caused by why there will be all these like smart people who will ask like, oh, yeah, but is that really why and bla bla bla, and they're those are like, super valid questions. I feel like it's like, a responsibility of us who kind of like start thinking about the bigger picture. Like you should always be questioning. Yeah. Yeah. Like, and like, you know, if it turns out like, it's actually true, like, oh, well, well, shit. But you know, right. Like, actually, like so at Evernote, when we have all hands and they show those data, like, people ask questions about it, like, oh, well, what about this and that? And so yeah, usually, they have answers for those.

</p>
<p><strong>Stacy London</strong><br />
Yeah, two sides to that, right. Because like, right, we come from somewhat privileged backgrounds of having really good education and to understand critical thinking into into question those things, but some people maybe don't have that, some of that privilege, and then they'll just accept what they see is like, well, of course, that's truth. I mean, why? How could it possibly be on television if it's not been vetted and true? And yeah, like, that's where the, I think the line gets tougher, cuz you're like, Well, not everybody has that, that skill set? And how do you make sure you're doing the right thing for them too?

</p>
<p><strong>Shirley Wu</strong><br />
And I think, um, I guess not as related any more to databases, but the whole like, benefit of the doubt that we give experts like even even with educational backgrounds, like if things like is because I think we're a little bit more wary about TV now. But like, we just kind of give x we consider experts as the benefit of doubt of what they're saying. And then definitely, that's true for a lot of people like I think, like if I think about my parent, like my mom, like, intelligent lady, but like, for a lot of when she sees something on television, she's like, oh, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
it's true. Yeah, with

</p>
<p><strong>Shirley Wu</strong><br />
like educational background, but when it comes from a quote unquote, authority figure, I think that's definitely hard. I think from the And then now if we take it onto the other side of not as the viewer, but as the producer of the data, I think there's definitely gray areas sometimes of like, how how do you respect the data and how you show the data. But like for kind of the examples that you were saying about, like, it's kind of more along the lines of manipulating data. My, my hope is that, as the creator of the visualization are, that we will do the right thing. Do the right thing.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it is a gray area, it kind of speaks to the power that data, people who do data visualization have, right? Like it, there is an ethical thing about it, where like, they can convey whatever message they want. Granted, like, people can ask questions and maybe find the truth if they really want to, but like,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, you can definitely manipulate the data. Yeah,

</p>
<p><strong>Jem Young</strong><br />
because we have so much data now. Like, I think that's where we're at a pivotal point, because we collect so much data, but we don't know what to do with it yet. We will in the future. But all our phones, our laptops are all sending like tell telemetry to their parent companies. So what do we do with that data? And it's decision, he was like, I want more data, and you're like, Okay, surely, like hook me up, like, give me a good visualization of who's worked up to Ryan or Augustus? And you're like, Okay, I'll just do by like, commits on GitHub, and like, He visualized that you're like, oh, gosh, this sounds like a million commits. He's way more.

</p>
<p><strong>Ryan Burgess</strong><br />
But he could do like a one line. Commit and right. Yeah, exactly.

</p>
<p><strong>Stacy London</strong><br />
But there, but is that really productivity? Right? Yeah. But like,

</p>
<p><strong>Jem Young</strong><br />
you can totally be like, I like I guess this one, right? I can manipulate this data to look like this easily. And it's not. It's not inherently wrong, because you're not wrong. But there's more to it than that, like, how do you bring that out?

</p>
<p><strong>Shirley Wu</strong><br />
It's such a hard, hard. And think, and I will say I think I definitely agree. And I think it's even more dangerous. Let's say when I'm that bias is subconscious. And I feel like oftentimes it is because you can take the best person with the best, and, like goals and like, what they're what they're trying to do, and the best intentions and but then we have like ingrained social biases, or that we're not even aware of, and then, um, I don't have a good answer. It's kind of like, I think, I think as the producer of the visualization, I have to always be aware that I have my own biases. And I need to be careful in that I need to ask other people what they think about what I'm trying to convey. Or if there's something like that user, or feedback, or even just like feedback from friends. And as the consumer of the visualization, we need to always be careful that like, whoever is behind that visualization is not an infallible robot. Person, which is logic, code calculation, but rather, a person or a team of persons with with biases, and I'm known or not. And so I don't have a great answer other than

</p>
<p><strong>Ryan Burgess</strong><br />
just talk to you in general like it. It is like that moral dilemma at that point, or yeah,

</p>
<p><strong>Jem Young</strong><br />
my favorite one, I'll drop it because like this really, like ethical questions are really interesting. But the climate change charts, it's like, climate change, pass through the years thirds getting warmer than some anti climate change. People be like, Well, if you look at over a million years, like Earth goes through hot and cold periods. And I'm like, they're both right. But it depends on where you're watching, and like what your previous biases are, like, I agree with that would disagree with that. But that's the problem. They're both right. So it's, I don't know, it's hard. It's a hard question.

</p>
<p><strong>Stacy London</strong><br />
I think it's because you can't abstract data away from psychology. When you're talking about humans like those, you just can't do it. And like, if I had a manager years ago, and I'll never forget it, it's ingrained in my head, he always said, he said, figures lie and liars figure, it was in my head for like, forever. Shout out to Dave, my old manager. But like, I think about that, when I think about data and like to that point, like, Oh, if you've got, you know, 17,000 commits and 5000 commits that developers much better than or like, no, yeah, like that figure can give you totally the wrong impression. And so you have to take that human element into it all the time, which is why it's so complicated. I actually

</p>
<p><strong>Shirley Wu</strong><br />
wonder if maybe like, because right now I work by myself, I'm doing data visualization. But like maybe in the future, we'll start having a team of data visualization designer engineers. And then that case, I wonder having a roomful of people that think about this and try and think about because like by myself, I have my biases, and then by two like, but two people, we have our biases, but maybe with a team full of people. We're more aware of the biases that we're showing, and maybe

</p>
<p><strong>Ryan Burgess</strong><br />
what's the best way to get started learning about data visualization. How do you jump in if I wanted to start coding up some data visualization, what's the best route to go? What are some resources tutorials? What are things that we could start doing mean?

</p>
<p><strong>Shirley Wu</strong><br />
Okay, so I'm gonna not answer the as data visualization, but I'm going to answer it as d3. Because I feel like even within data visualization, there's like different paths you can do. Like, for example, you can go learn Tableau, or go learn like gg plot and R or, but the one that I'm most familiar with is the d3 path. And then

</p>
<p><strong>Ryan Burgess</strong><br />
I'm sure a lot of our listeners are JavaScript makes sense? So that that makes sense.

</p>
<p><strong>Shirley Wu</strong><br />
Yeah. And then I'm, this is where I do a shameless plug that I have a front end masters workshop on, that's an introduction to d3. And basically, the way I thought it through is five years ago, when I was learning d3, what would I have? How would I have liked to learn it for the smoothest possible onboarding. But beyond that, I think I actually, a lot of the ways I learned it was just with the d3. So the d3 website itself is kind of overwhelming, because it has like, so many examples, and so many tutorials, and the API reference is really great, but really, really detailed and really overwhelming. So I think a lot of the way that I learned is if you have the benefit of community, and in the Bay Area, there's a really great community of d3, Beriah meetups, and folks and like us, and we have events, like every single month, and if you just go there and be like, I'm stuck on this problem, or I'm confused, somebody will be helping, and we'll be there to help. If you unfortunately don't have that. The other ways that I have found to be good learning is there's actually a few books that are really great. So there's a I think an introduction to interactive visualizations, I think, is the title by Scott Moray. And that one is really great because they, it actually teaches you kind of aged, well, if you don't have any programming background, then it's really great because it teaches you HTML, SVG, and then it also teaches you d3, different parts of the d3 library. And I think, for a bit more advanced functionality and such, and I think Elijah Meeks from flicks, he has one called d3 in action. And that one goes more into like, once you have the kind of intro part covered, he kind of talks about different like visualization layouts and different kind of lighting, psychology and philosophies. And he actually even in his second edition has a chapter on React and d3. So like, it's very, very good, if you like learning from learning from books. And then another slightly biased answer is if you don't like books, my friend Nadia Bremmer, she runs a website called Visual cinnamon calm. And she has a whole section about how to get started with data visualization, and all the resources and all the books that are great. And that one actually involves not only d3, but like kind of data visualization principles. So kind of like those, like things I was talking about before about how you like colors and shapes and kind of like this, that more design aspect of data visualization. So yeah, I think those

</p>
<p><strong>Ryan Burgess</strong><br />
even some of those principles, I always think back to I'm sure you've seen the books, but like by Edward Tufte, is, those books are amazing. Like, it actually opened my mind to so many ways of like, yeah, like colors and how you display data, not so much of the like, technical aspect, but it's really on, how should something be visualized. And I always think those are good resources, too. I think he has like three or four books on he has four I have all em I believe I do as well. And I can't remember how many there were in the collection. Like there's like three, maybe four. So yeah,

</p>
<p><strong>Shirley Wu</strong><br />
for I guess more data visualization principles and stuff. If books are not your thing, there's two websites I like following and there's a lot more than just these two websites. But um, I love following flowing data.com, I think, by Nathan yell, and he actually has a lot of tutorials, I think more are focused. But then, um, he runs a newsletter, where he just posts any interesting visualization related things that he sees. And so those are great, because I firmly believe that, um, you know, to get good at d3, you just need to practice and look through all the examples and then just kind of think through what you want to build. But to get good at data visualization, it's kind of like it's like design, you have to just look at other people's work, and be able to pick and figure out like, what's good like and be able to see a person's work and be able to see oh, that works. One that doesn't work long be able to internalize it. And then And so Nathan posts a lot of kind of what he sees in the wild. And then Andy Kirk, who runs a website called a visualizing data.com I think, where the visualizing is with an S and not a Z. There's a lot of British I think there's a lot of really interesting anyways, and then So visualize data.com And he also runs this website and then I think newest newsletter slash RSS feed that like picks, and he has like a best of March or like Best of 2016 or so something like that. But the one I really love is his a series called The Little of data visualization, where he'll just kind of like, you'll see something and you'll like, it's a tiny little detail that most people will like, you know, not notice, like a tiny little design decision or like, the most people might not have noticed, and you'll like, pick that up and say why he likes it and why it's important. Like, I think the last one to remember is like, um, you know, something as simple as a column of like country names, and one of them was too long to fit into one row. And then that whoever made that, I think either they, you know, truncated it into one row or something along those lines, where it's tiny little things that he points out as good practice, which I think is really great to follow.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. At the end of each episode, we like to share things that we found interesting or that we liked and would like to share with our listeners. Let's go around the table and share our picks for today's episode. Augustus you Maisel started off

</p>
<p><strong>Augustus Yuan</strong><br />
Okay, sure. So I actually wanted to add to if you're learning d3, Mike Bostock has like a bunch of articles he's written like, explaining, like the kind of the reasons why he made things. So like, starting off with how selections work, actually, like when I first read it, I thought I understood it. But then like, then I came back to it later, I was like, Oh, now I understand it more. So I actually think like, if you read this, and then go through a lot of Shirley's code camps, and those articles, and then like, come back to it, it'll like make a lot of sense, but definitely, like, check out his articles for learning d3. And then I have two picks. One is Pokemon terminal. So like, my terminal like has like, a Pokemon now. So there's like a poly world, and I type Pokemon, or whips. Or well, I have it in like my bash profile. And then like, it chooses a random one. So there's like a random Pokemon? Yes. So it's like, cute. And like, when you? I don't know, I think it's pretty cool. Makes your terminal more exciting. Yeah, it makes my terminal marks and they support like three regions of Pokemon. So there's like Kanto region. And that's amazing. Yeah, so it's pretty cool. And then the other one is d3 annotation. Actually, I think you tweeted it. So that which is how I found it. And you mentioned Susie Lim, and she was the one who wrote it. It's like an awesome library, like annotations are something you're probably going to need to support. If you want to make your like d3 chart haha. If you want to make your d3 thing, ie, more, more interactive, it's definitely something you're gonna come across. And I think they handle it super well. And the documentation is just awesome. So some surely

</p>
<p><strong>Ryan Burgess</strong><br />
what kind of pics do you have for us,

</p>
<p><strong>Shirley Wu</strong><br />
I'm so excited, I was thinking about this case, I think I have three in three different categories. And so the first one is something I found recently, um, it's called domestic data streamers. And they're a studio in Barcelona. And what they do is data into, I guess, participatory data installations. And dozens, it's super cool. So, um, essentially, what some of the examples of what they do is, um, they're always physical, the installation part. And usually, I think they're in like, galleries or exhibits, um, from my understanding, and then, um, so I'll go ahead and think through how to explain this. So one of the things that they did is, um, the scene where they asked people, so they have all these columns, and then they ask people to, like, put a string through each of the columns. And then so a column could be like, age or gender, or like, how do you feel about blah, and then like, you know, and then, um, and then they can put a string through whatever their answers are. So then as that installation, that exhibit continued, and more and more people participated, but it's essentially a data visualization that kind of appeared as, as the day went on, or the week went on or something like that, right? Isn't it amazing? And then there's another one that I thought was really amazing that they were talking about, which is, I think they wanted to see like it was called like, golden age where it's a big grid of on one side one axis is what your current age is and the other axes is what you thought was your best age like or that you had the best time in. And then they had like these rings that kind of look like the like, tree like rings of like Life Tree. And then people will go and put that on to, like, wherever it like, what their age and their, what their best time was, and people will go stack that. So then it's kind of like this data visualization that appears as people participate in it. I thought that was such a cool, cool, like, as somebody that does digital to D only, like in a, like web page kind of thing. I love it when and whenever somebody takes that into, like, the real physical world. And okay, that was really long. But that was my first and my, my second one, um, it's kind of just for data visualization conferences. So open vism is my open vis and d3. uncomf are my two favorite data visualization conferences. Those are the conferences if you want to get more involved into data visualization volken. Both of them have you know, I've only spoken that open vis d3 on Comm is local to the barrier. And I'm so my friends like Ann Johnson, and quite a few other people, other people that help organize d3 barrier, and help organize d3 on Comm. And then none of us we try not to have any of us speak because we figure that people see us too much anyways. So we tried to bring in people from like outside of the barrier to come speak, which is really cool. And then the last one is a podcast. And then my favorite data visualization podcast is called Data stories. It's run by Yeah, it's run by mort, Stefano, Stefano and then in Rico, are going to never forget, I never remember his last name, and then Rico, and one does kind of industry work. And the other one does academic also, and Rico is a professor. And so I love that combination of data visualization, but from the perspective of industry and academia. So those are my picks. Great, Stacy,

</p>
<p><strong>Ryan Burgess</strong><br />
what do you have,

</p>
<p><strong>Stacy London</strong><br />
I just I have to my my usual music pick. And then the the first one is somewhat related. His first pick is SVG OMG. To site I came across when I was somewhat related to data visualization, SVG is are usually a part of that equation. I came across that when I was doing some of work a few weekends ago, related to SVG and react and trying to figure out how I could get it to work right and optimize it. So very helpful tool. And the second pick is my usual music pick. This one is Ellen Allien. Her new album called no ghost. I think I'm saying this correctly. I always pick things I can't pronounce. Like that's my that's my stick. She's a German Tronic musician. She's a founder of a label called be pitch control. She's coming to San Francisco soon I'm going to pick a pick up tickets. I'm very excited to see her. So yeah, that's my pick.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome jam already have.

</p>
<p><strong>Jem Young</strong><br />
My first pick is web typography for non designers. I am a terrible designer. I aspire to get better at it. But I don't know if I ever will. I try though I try. But this is the whole site is about just how typography influences the way you think about a page. And it's really, really laid out for kind of the layman like me who don't understand design as well as I should. And they explained like kerning and things like that, which is really cool. Second pick is it's music video. Actually, it's from Jay Z's new album. It's the story of OJ it's really good video kind of done in that old school like Disney style with like, it's animated by like the characters in blackface. And it's like really offensive now, but that was acceptable, like 50 years ago, but the I don't think that was very good personal opinion. I'll get hate on it. I don't think Jay Z's album very good. But I liked the video and I liked his message. And it's worth watching,

</p>
<p><strong>Ryan Burgess</strong><br />
I think awesome. No, I have actually listened to the album yet. And it's on my list. I almost like download it before we came for the drive. But yes, I need to download that. I'm interested to see how it is. So I have two picks. I don't know if any of our listeners I hope you listen to shop talk show. It's a good podcast, I thought I would pick one. One of their more recent episodes actually was about React and had Gemini were on that, along with one of our colleagues snow fell had joined us as well to talk about all the things that that we do in React at Netflix. So I thought I should probably plug that as an episode to check that one out. And my second pick is a Wi Fi system that I just purchased which is called amplify, it's actually really amazing. It was really really simple to set up and it helps get like really good coverage across my entire apartment. And it's probably the first time I've ever actually put a router on my desk. Usually I'm like hiding that like under in a cabinet or like under the table or wherever I can hide it so that people don't see it. This router is beautiful is like has a little LCD screen on the front. It's got like a nice little light on it. It's beautiful. I really like it so far. I've had it for just about a week now running. It's good. I really like it. So I recommend it if you're wanting to get a better signal across your apartment it's a good way to go so before we end the episode I want to thank Shirley for being a guest and joining us it was awesome having you on thank


you so much for having me. This

</p>
<p><strong>Ryan Burgess</strong><br />
is really fun. Great. That's always what we'd like to hear where can people get in touch with you?

</p>
<p><strong>Shirley Wu</strong><br />
Oh yeah, so um I'm on Twitter on a slightly embarrassing handle called X Y Wu and these are my initials. I did not realize that if you see them out

</p>
<p><strong>Ryan Burgess</strong><br />
I was waiting for like, why is that embarrassing?

</p>
<p><strong>Augustus Yuan</strong><br />
Okay,

</p>
<p><strong>Stacy London</strong><br />
never I never read it like

</p>
<p><strong>Shirley Wu</strong><br />
either so I've gotten comments about being like wow, surely really? Yeah, x&y are my Chinese initials. Yeah, I've gotten hate and then my friends are like just a preset

</p>
<p><strong>Ryan Burgess</strong><br />
I agree with that. Just embrace it. Don't change it leave it oh yeah, so

</p>
<p><strong>Shirley Wu</strong><br />
now I'm on Twitter SX y Wu on my website is the same sexy woot.com Without the E I'm starting a twitch to live code same thing and medium seem to everything all my social media same. You

</p>
<p><strong>Ryan Burgess</strong><br />
own it. Good. No, yeah, I

</p>
<p><strong>Shirley Wu</strong><br />
own it.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you all for listening today's episode, please subscribe to our podcast through iTunes Google Play or whatever you choose to listen to your podcasts on. But also follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>. Any last words? Charts cheers. Cheers.

</p>
`;
        return transcript;
    };