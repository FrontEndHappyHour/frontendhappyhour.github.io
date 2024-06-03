module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. Good documentation is important, but we don't always put enough focus on it as we should. In this episode, we talk about what makes good documentation and ways to improve your documentation. And to help us with this conversation, who better to have than the people from Open Web Docs team? We have Estelle, John Eve, and will joining us and they will share some great insights on how to improve your documentation. Can you all give us a brief introduction of who you are, what you do, and what your favorite happier beverages style you want to start? So

</p>
<p><strong>Will Bamberg</strong><br />
I'm Estelle, I am based out in San Francisco. And I started writing web documentation back in 2007, when I started a blog called CSS 8x, HTML and JavaScript explained. So I documented the open web. And then other resources came out and did a much better job and I have way more people. So I joined in on other people's documentation, instead of keeping my own blog that is woefully outdated. And actually now offline. I'm based in San Francisco.

My name is Will Bamberg. I live in Vancouver, BC. And I work for my books, as a technical writer and something we sometimes call the documentation engineer, which I guess is supposed to include the fact that not everything we do is writing prose, or even writing code samples. We do stuff that's about building and maintaining documentation, infrastructure and documentation systems. That's what I do. I work full time for my books. And

</p>
<p><strong>Jean-Yves Perrier</strong><br />
I'm showing you the year I'm based in Switzerland in a small town, not too far from the Matterhorn, I can't see some material from here. And I was a C++ developer for 15 years and around 2009. I switched to start writing documentation because I liked websites. And it was a time where html5 was becoming something. So I started writing about HTML five elements. And a few years later, after being a volunteer for a few years on MDN needs started to be my job. And now for 15 years. I'm a technical writer, mostly on MDN. But also, I'm a member of open web docs,

</p>
<p><strong>Ryan Burgess</strong><br />
right on and it is Jem and myself on the panel aside, Jim, you want to give intro or Jim

</p>
<p><strong>Jem Young</strong><br />
Young engineering manager at Netflix. I'm your host, Ryan Burgess. In

</p>
<p><strong>Ryan Burgess</strong><br />
each episode of Front End happier podcast, we'd like to choose a keyword that if it's mentioned at all, in the episode, we'll all take a drink. What did we decide today's keyword is Mozilla FileZilla. So yeah, I'm pretty sure it will come up at some point or another. Before we dive into the episode, I also want to say thank you to all of our amazing listeners out there. Over the years, you've all listened and chimed in and let us know what's working what's not. So we're asking you again, we'd like to run a bit of a survey, it takes two minutes to fill out just to help us know what's working, what's not what we can do better for next year. If you want to visit front end, Happy hour.com/survey. Take two minutes, please fill it out for us. Let us know how we're doing. That'd be really helpful. Let's dive into the episode. I'm curious from all of you. What do you see makes good documentation? How would you describe good documentation?

</p>
<p><strong>Jean-Yves Perrier</strong><br />
There are many things that define good documentation. But I think the most important point is accuracy. Documentation has to be correct. If it is incorrect, it won't be good documentation that the first one, of course, completion or completed is important. But less than accuracy. It's better to have missing dogs and roll ducks.

</p>
<p><strong>Will Bamberg</strong><br />
I completely agree with naive. And I would also like so once you have the correct information, it needs to be written in a way that people can understand. So I like to ensure that the documentation I write explains the words that people might not understand or links to them. So when I write when we write it, there's tons and tons of links to outside resources. So if you don't understand a word, either to finding the page or outside the page, and we write mostly for MDN. And we have to realize that this is an international audience that are not necessarily native English speakers. And not only that, but it's web developers who have had been 20 years in the industry. And it's web developers who are developing their first HTML web page. So they might be eight years old, they might be 75. So just basically ensuring that the content is expressed in a simplified manner without being condescending. You using examples that are very inclusive? So yes, it definitely has to be accurate. If you don't have accurate information, then there's no point making it usable. but it has to be readable and understandable. And people have to see themselves in the examples. It can't all be, you know, us basketball teams or something like that.

I think all that, of course, for sure. I also, I would answer the question by saying that it helps, it helps the user to do what they came here to do or what they want to do next. And it helps me understand the thing they understand to get them forward with it. So I always think that, like, when I'm when I'm thinking about how we should document something, or how we should describe something, we should always think about what does the user want to accomplish? How do they how do they get here? And what are the questions they have to answer? What are the things they need? What's the most helpful thing we can do for them? In this kind of moment we have where they're looking at our stuff, right? And, for me, that helps to kind of sharpen sharpen our focus of, you know, what should we do? What, what choices should we make here? You know, so I mean, you know, we're correct, Mrs. Obviously, critical, but correctness isn't always helpful. And if you explain something in a way, that's correct, but it's not something your audience has a hope of understanding, you're not being helpful, and they're not going to accomplish thing they want. So things like, you know, understanding, you know, what can we what can we expect people already know, what's the kind of baseline like ground we can build on top of right? And what's the best place to put that, depending on which bit of the ducks were in, you know, sometimes we're, we're, we're expected expecting people to be beginners and sometimes expect people to be experts. And, you know, having a, having an understanding of that, you know, I think a lot of a lot of good Doc's based on a kind of empathy really have, like, understanding where people are coming from and, you know, so yeah, that

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, maybe to build off your empathy point, I really liked that call out, because you're you know, I think all of you touched on that thinking about age thinking about languages, thinking about just solid examples for people understand, I also recognize even sometimes searchable, like, I like to be able to quickly be able to search through documentation, because I might be coming to that brand new, and not really understand where how the documentation is laid out. And so that can be really helpful. Just having that consistent pattern of search. And then for me, a big one is clear, concise, like really having that clarity. It just drives me nuts when I have to read pages and pages and pages just to do something simple. Those things always come to mind when I'm like evaluating documentation. Yeah,

</p>
<p><strong>Will Bamberg</strong><br />
I mean, I, we talk quite often, in web docs, about there's just this documentation system, which I think useful. Divio, and now it's called Daya, Texas, is that correct? And they changed the name. And I can't remember the name of the person who who kind of codified this. But it's one of these things that when someone says that, if you if you're if you're like, professional writer, and you come across this thing, for the first time, you're like, this is such a good idea that why didn't I think of this before, or even like, I already knew this only, I just never saw it written down in this way, you know, those kinds of ideas that I think are so, so good, really, you know, and one of the and the idea of this system is that you, you can divide documentation to different quadrants, depending on what mostly really on what kind of what the user is trying to accomplish, what phase they're in, of their of their kind of journey. And you say, you know, if people who are who are learning about something, and they need a different kind of documentation, when people are actually doing something, and the documentation you write has has different kinds of qualities. And I think this is a super powerful principle for organizing adopt system. It's like, like you're saying, like, like, you know, sometimes you need to look something up, you need a reference, and then you just need to be able to find it quickly. Right. And what I need now is the details, but I already have the kind of conceptual understanding of it, right? I know where these details are going to return. Sometimes I don't have that conceptual framework at all. So I need to be I need to be taught, right. And so for that, I need a way of kind of leading me through something right. And they're very different kinds of darks. And I think being explicit about that is super helpful when you're when you're trying to alternate design and build a dock system.

I just want to briefly say what the Divio thing is, because I think for the listeners today, that might be really helpful. It's a Divio de IV io.com. And it basically explains, it's a documentation system divided into four components, tutorials, how to guides explanation in reference, where tutorials are learn learning oriented, how to guides are basically here's a problem. And this is how you can fix that problem or address that problem. Reference is kind of like the MDN API pages. Tons of you know, there's tons of reference documentation on MDN. And then the explanation is understanding oriented. So basically, they put it on a quadrant where it's basically practical Steps versus theoretical steps, and most when most useful when you're learning versus most useful when you're implementing, I

</p>
<p><strong>Jean-Yves Perrier</strong><br />
think this is very important to divide this in six different categories. Because people learn stuff in different ways different people have different way of learning, some people need to be very practical and how tos guide will be the place that will enter and start learning because they want to do with a specific task. Sometimes they need a specific task, but sometimes they say are very practical. Some other people wants to understand how things works, having a good overview of how it works before to start going in. And this is where as I need guide, of course, when you are working, and you already use, it will be more of a reference path that will will be used because you already know how it works. But you need to refresh some details and check a parameter values that you have forgotten, even if you know that it exists. So so this system is really, really interesting, because it forces you not to forget any kind of learner or the ways around, because you always say, what will be the how tos, what will be the guides, what will be the reference and so on. And this is a way that helps people not to forget any of their users. Yeah, like

</p>
<p><strong>Jem Young</strong><br />
every new project, it has, first get started, how to get started, because that's me, I want to dive in, I want to play around, and then I'll come back probably to the docks, and then the reference for what I'm getting, getting more up and running. And I don't need a lot of handle on this want to be like what does the API do? What are the parameters? Then what I really like is are examples like real code examples, because people often describe, hey, this, this function takes these these parameters. But like, seeing code is a lot faster than me trying to like decipher how someone describes code. And that's the common language we all have. I don't know. It's underrated topic. Documentation. I'm curious, you all have mentioned open web web docs a few times. Now, what is that? It's

</p>
<p><strong>Will Bamberg</strong><br />
a little hard to explain. Open Web Docs is an open collective. And so we're an organization that we convince people to give us money, which we use to pay our salaries, which we and then we spend our time working on web documentation, working on open source web documentation, I guess that's the simplest way I can think of putting it. So there are four and a half staff members, and open web Doc's. And we spend, we spend all of our time working on web documentation in some form or another. And that work is funded by, by donations from corporations and individuals. So if you'd like to donate, you can donate. It's great. And so I mean, in terms of like, kind of like governance, we have a we have a steering committee, which includes people from some of the people from the organization that donate to us. And also other organizations that have an interest in web documentation, like the W three C are represented there. And on companies like Google and Microsoft magalia, are represented there. And we have a kind of invited kind of expert people who are represented there. And they all kind of help us decide on what kind of project we should take on. Because we have a kind of process for figuring out what we should work on next. And we propose things and they propose things and anyone else you can propose projects that we work on, and we kind of decide which which ones are the highest priority for us to work on that.

We've also been funded. We got a grant from the German government STF. Do you wanna talk about that a little bit? Well,

if you don't mind, just, I'm happy to Yeah. So yeah. So I guess the the the German government started this program called the sovereign tech fund STF, which I think is an interesting move on that part. Because I think it's an acknowledgment that I open source software and open source, in general, like generates a lot of value for a lot of organizations, but it's it doesn't often doesn't get the funding that it needs. It doesn't get a sustainable level of funding. Right. And so the sustainability of open source, that's kind of ongoing issue, I think, in the world, really. And so the SDF has this is this effort to say, well, then, you know, governments can play a role in helping open source be sustainable. And that's exactly what the Sovereign tech fund is for. So we applied to the to the sovereign tech fund for funding for web docs. And our proposal was primarily about compatibility data. It was mostly about compatibility data anyway, so one of the things we look after, or help look after is the is a browser compact data repository, which is this Basically huge pile of JSON files that describe the browser support for 10,000 web platform features, I think, or 20,015. Okay, 1000s of them lots anyway. And so it describes which browsers support web platform features that are at a pretty fine grained level. And so this data gets used to power in particular pages on MDN. And also can I use, and I think it's used in some other contexts as well like, like developer tools and code editors and stuff to show you what browser support. We're platform features. And so that's a significant part of what we do is look after that. And part of the the STF project is about making it easier for us to maintain this data, because there's a lot of maintenance maintenance of it is a big, big issue, you know, and browsers make new releases, and they add support for things. And then we have to figure out, Okay, what's changed? You know, we have to go update all this JSON. And one of the things we've been working on, actually Johnny from particular has been working on is tooling to help automate this and help figure out like, when Chrome releases something, what's changed? And what does that mean for compat? And can we like, like, generate pull requests, or update all the JSON and more or less automated fashion? You talk about that Shani? If you want to? I guess you know more about this than I do, right? Yes.

</p>
<p><strong>Jean-Yves Perrier</strong><br />
Yes. So browsers released new new version, so edge from Firefox every few weeks. So basically, there is for four to six new version each month. And what we are trying to achieve now is to be able to test most web features automatically, each week or after each new beta. And that's, that is telling us okay, this is new in Chrome 120. This is new in Firefox, one on the eighth, this is new in Edge, and so on, so that people can then document this, but also that the data, the pile of JSON, have the right information, we are trying to, to have this as much automated as possible. And currently, we cover 82% of our 15,000 features with automated tests. So when there is a new property, for example, for CSS, it will detect a new property because it reads on ws receives a spec that lists all the potential new properties and test if this property does exist, some feature are more complex, because it means all this is only available in secure context, or this is very strange changes that didn't happen before. And we still have to do some manual tests, or more precisely, we rely also on developers. So developers a different browser telling what they have added so that we can double check, there is also non standard properties that will not come from the various receipts. So we have to add these. And all these together, we are trying, it's to save as much time so that every week or every two weeks, the browser compatibility data is again up to date. Because if all has to be done manually, you need 510 People just to do this, because there is so many change each week,

</p>
<p><strong>Will Bamberg</strong><br />
just to go back well said that he was a documentation engineer. And that's basically it's, it's a really good example. It's not just about writing documentation, because writing content has to be done by humans. We've seen ai do it. And we know what happens when AI does it. Because being accurate is what Jive said was the most important thing. But being a documentation engineer, enables it to be partially automated, so that our documentation can be as close to complete as possible, when we don't have time to actually manually address every single piece of content.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm glad that you all kind of brought up the automation part of it. And I love the way that you're approaching it. And it's more like signals that something's changed and getting that input and insights into it. But then, you know, part of me wanted to ask you all about like, AI and documentation and like, people are always going to try and automate anything that they can do to move faster. I would love to hear your thoughts more on like automating the actual content writing,

</p>
<p><strong>Will Bamberg</strong><br />
I think our content is what AI should be reading rather than being produced by AI. Because, for example, there's a question there's a there's a screenshot of an AI that says, How do you sort an array? And so that seems like it's a really quick answer, but uh huh. Women would respond, what type of data? Are you? Do you want to sort? The API doesn't think to ask that question. So it just gives you an answer of how to sort one type of array, and doesn't inform you that there's many, there's different ways to sort depending on what type of array you want, what type of data you want to sort. And therefore, the answer, while correct for that data type that it produced is not complete, because it's not addressing the fact that you don't just use only one sort function, there's many, you know, depending on what you want to sort, you will do it differently. Well, I mean, I

think I think for, for reference documentation, there's a lot of scope for automation, but I don't really think it's like AI based automation. But I think you can you can, like for instance, you know, we have, you know, like like, like, web API's are the source of truth where API's as the specs, and the source of truth really in there as the IDL, right, that describes like the canonical answer to you know, how many parameters of this function take and which ones are optional? What types are they is the IDL, right. And I think there's a lot of scope for being able to automate the least a skeleton of framework for reference documentation from sources like the ADL. And I think that's the thing we could we could use a lot more. And that that gives you the benefit of consistency, which I think is a big part of making reference documentation usable is that, you know, things are always described in the same way. And you always find the same thing in the same places. And you can rely on that always being there, right. So there's a lot of scope for that. I think, other sorts of documentation, like tutorials and guides. I mean, there's a lot of work that goes into understanding how to organize that kind of content, and how to structure it in a way that is going to get is going to work for people, and the order in which we introduce things in a way that's going to build up their knowledge. And I think that's pretty hard to automate.

</p>
<p><strong>Jean-Yves Perrier</strong><br />
Another difficulty with AI. And the kind of documentation we write is, we often write things or text around or explanation about new API's. So the question is, how do you train the AI to know something that is new? Of course, there is a spec, but the spec has a very specific language and raisons spec doesn't really explain what they are trying to do. They say how a browser has to implement it with step steps, that if you look at the JavaScript, the specification, it will not tell you what the split method is intended to do. There is no tax, there is just you take this, this strange, you find this entry, you copy this part there, and you do this, but it doesn't say what this split or what was a surprise method is doing. So it's, it's very difficult. If it is unknown things like some part of JavaScript, there is plenty of other explanation on the web, and their AI may be able to find the right one. But when it is a new web API's, it's have many one blog post somewhere or two. It's the first time that the complete documentation aimed at user aimed at web developer is written and this makes things more difficult. I made a test at the beginning of this year trying to to have aI writing reference speech for me. And then I read and I say, oh, it looks good. And then oh, this is strange, because speak about this parameter. But there is not this parameter, because he found somebody speaking about a function or methods that was very similar, but with different parameters and AI, maybe in the future, we'll be able to understand or to understand what what a method is, what a parameter is. But for some moments, the ones that I tried are very confused with this and just look with something similar that is documented elsewhere. So that's it's very difficult, but maybe in the future, I don't know. But for the moment, it's still a bit early.

</p>
<p><strong>Will Bamberg</strong><br />
I think it can it can give you like a first draft maybe right? You say, Okay, I want to I want to start somewhere, instead of starting with a blank page, give me a thing, and it'll give me a thing. And it's like, Okay, I'm gonna fix all the ways that's wrong now. And so that that may be a use stuff that makes sense. But that's an input to the writing process, rather than, you know, a replacement for it to me.

Yeah. I mean, the AI cannot come up with the actual content that we need to produce with because one, we're writing about new features that aren't well documented. But the problem with it is, if, you know, if we're trying to document something that has a function name, right, it's a method and a spec, and the AI finds a Stack Overflow A function that had the same name 16 years ago, that's not going to produce the result that you want. And so as I've just explained to my partner the other day, the problem with AI is, the AI is only as good as the data that it reads. So we, at openweb, dogs need to write fully, completely accurate information. Because we actually do write the documentation that will hopefully be used by, you know, whatever the GitHub API is, that's helping you write code. I'm hoping they're using accurate information and not my blog post that is still archived on a weird site from 2007, which is completely outdated, and luckily, not findable that easily anymore. But Chechi BTS has probably read that blog, but they have not yet read the post. Like, I just wrote an article, or a guide on how the browser handles errors. Really boring, but important stuff. But the stuff written in, in my blog in 2007, is probably not as good as the thing that hasn't been read yet. The problem with AI is if it learns off of mistakes, then people copy that mistake, and then it reads that new article that has that mistake in it. And then it just snowballs. And that's the truth, even though the truth, the underlying truth is Q anon.

Or even things that aren't mistakes. I mean, I think one thing about especially a resource like MDN, which is used by so many people, is that what MDN says it doesn't just reflect the world, but it can change the world. Right? So for instance, when we just happened a few years ago, and all the code samples used to use var, right? Because for a long time, that was that was the only way you had cross browser support is to use var in your JavaScript, you know, and there's a debate within within, within within the MDN team about you know, should we should we start to stop talking about var, should we say use constant lat and all that, because some for that, you know, and some people said, well, you know, we shouldn't do it yet, because there's still a lot of people who are, who are who are using, you know, these old things, but there's a sense in which, you know, MDM should lead instead of following here, right? Instead of instead of saying, Well wait to update constantly. And so everybody else is in conflict. So we should we should be the you know, we should make this change happen by promoting this stuff. Right. And so that's, that's what we did, you know, so I think, you know, MDN, Docs, you know, it should, it shouldn't just reflect the world, right? It should shape the world, I think. And the same thing, like, right now, I'm working on a thing to basically go through all of MDN and find all the places that were using XML HTTP request, and use faction status, promote factors like this at the modern way, you should do this now. Right? You know, and so the reason we're doing this is that we want, we want to, you know, we want we want people to be using these new API's that are going to be more popular, even new anymore, but you know, these API's are going to work better for them and be more powerful. So yeah, that's a kind of editorial decision, I think it's not just a kind of valueless reflection, I suppose, right? The

way we write is with best practices in mind. And while there is a framework that says you know, best practices don't work, you need to teach people the best practices. And then you can, once you learn the best practices, you can choose your own, your own preferred best practices. But it's really important that we ensure that the content we're producing is, I'd like to say that we read the spec so that other developers don't have to, but we have to be as accurate. And provide information to developers, you know as to how this is going to impact performance and accessibility, because in the specification, they are supposed to make everything accessible. But how. But you know, to really mess things up takes a developer, I used to say to really mess things up just takes a computer, but so we have to be like a royal source of source of truth, because AI in the future might be read will likely be reading our documentation. And we don't just want to provide like this is the way the API is used. But this is the side effect of the API's. And you know, there's a CL subsection. So if something is a reference, it has a link to a how to tutorial and explanation, or also a similar API, which you might think like, we know you came here looking and you did a search for this method. But this might not be the actual method that you'd want to use, such as if we were doing an HTTP request. On that page. You blink to fetch because that is probably what you should be using from for many things.

</p>
<p><strong>Jem Young</strong><br />
It's interesting you like hearing y'all talk. We're experts at documentation. It's more like your editors and creators at the same time because you have to take You know, some, some engineers really head down and writing a formal RFC, you have to turn that into something that's understandable by specific audiences. And those audience can vary. Sometimes it's owners like I've never heard of an array, tell me what that is. And it sounds like I know everything there is to know about array, tell me about the new stuff, that to me seems like something that you always need a human filter for, because an AI is just going to take all this information and dump it. But you will have years of experience actually writing code and understand like, what are people looking for in this specific moment. So it and I, like you said about, like, you're essentially coding the future AI, because they're gonna be treated against the documentation you write. So I don't know, that's a really powerful idea, and probably something out here, appreciate it. And in terms of like, how things work,

</p>
<p><strong>Will Bamberg</strong><br />
I think one thing we haven't touched upon is basically like the template of the page. So another thing we also do is, make sure that, you know, every page is kind of like, here's a one sentence definition of what this feature is. And that's actually going to be like used in VS code. And then we have a formal syntax section, we have a browser compatibility section, we have a specification section, we have a See also section, formal syntax, description, accessibility, not the accessibility is not on our pages, and neither is the security and the privacy implications. But these are sections that aren't necessarily or not at all written in the spec in that format. But because we write it in a very specific way. One, we know that we include all the data that we need to include, but the reader can find what they're looking for. And the developer can know like, can be like, Okay, this is my first time going to this page, I just need to know what it does. But when they're debugging something, there's more information below the fold, you know, the imaginary fold, that's like, well, this cord might be happening because of this, and this cord might be happening because of that. And browsers haven't implemented these features and don't know how to talk about these API's and implement these features. And doesn't have the experience of really messing things up and figuring out the solution. So the other good thing about us is, it's an open source project. So when people come and read our documentation, they're an expert in this tiny, little niche. They're like, Hey, you missed this. So it's not like it wasn't accurate, it was more like, we didn't even know to think about this obscure interaction with this other feature. So people are always editing our documentation, providing really good anecdotes, or examples or bugs or, or, you know, just changing something from will to might, might be really important.

</p>
<p><strong>Ryan Burgess</strong><br />
I also love that you called out like the open source part of it. I think that documentation is so helpful all the time. If someone's reading, it catches this spelling mistake, or just something that could have been worded better is that it's always great to encourage like the people even reading it to be able to contribute, I always find that helpful. Before we end the episode I want to hear from all of you to since you are the experts on this is you can't write all the documentation. And it would be great if you could, but there's a lot of open source projects. There's a lot of documentation out there, like what advice would you give someone for writing their own documentation that would help improve it,

</p>
<p><strong>Jean-Yves Perrier</strong><br />
I will give to two advices. The first one is call for help from your users, you can create part of the documentation with a good structure. And then if it is open, people can already do pull request or write issues and so on and you will learn from them. And you will find that people who love your project may be ready to to spend some times writing, of course, you will need to review and so on so so that's the first advice. Open the documentation. The second is, is more technical is don't write and forget, it's not because one document is written that it will stay perfect for years. That's the problem with most blogs, you have blogs from 2007. It's outdated now. And when you are writing your reference or guide, tutorial and so on for your product, you need this to stay accurate. And for this, you will need if you have a team, you will need some time of the team to run to work on not to technical debt but to documentation that because sometimes you will discover okay, this structure of page is not good. And you have to go back and update the whole shebang of pages that you may have on large projects. The more it's very difficult on small projects is can be easier. But this is something always to keep in mind is that your documentation is not set in stone and has to be improved over time. I

</p>
<p><strong>Will Bamberg</strong><br />
would say to use simple language that's really important. But you're teaching and providing information about the topic rather than showing off what your knowledge base is. Because if you're showing off your knowledge base, if you're just showing off your knowledge base, you're not teaching anyone, much, you're just showing off. So actually simplify it down without being condescending, providing links to other resources where if someone doesn't understand something, they can find out more about it. And then also, don't buy documentation if you don't have the time. So it's better to not have documentation than inaccurate documentation as to bring in all the way back to showing you. If you're, if you know, if you have a framework, and you write the documentation, when you first release it, and you're on version seven, and your documentation is still reflective of version one, that's probably more detrimental than then helpful. And then also, don't reinvent the wheel, if there's excellent documentation about view on the view website, contribute to the view website, don't replicate this, you know, like, you can write about this neat little feature, but plug their website like, don't, you're one person, you can't replicate the world, write a nice blog post, and send everyone else send everyone away to the to where they can learn more about it.

So this might sound a bit cynical. But speaking as a professional writer, the first thing I'd say is, is to have good documentation is to pay for it. You know, employ people who who are professionals who are professional writers, professional, professional documentarians to help look after it, and don't think it's the thing you're going to get for free. If you want something good. But I think beyond that, I think unnecessary is essential, John, you've said, but I mean, I mean, know your audience, know your users understand what they come there for, and how you can help them do user testing, you know, and talk to them about what they want. I mean, we don't do enough user testing. MDN doesn't do enough user testing. And the few times I've done it, that the amount of value you get out of it is just enormous compared to the the investment you put into it. And the difference in quality you get from like talking to your users and it kind of fairly structured, semi formal way, and trying to understand where they, where they just can't accomplish things using your documentation. I mean, as well as being horrifying, watching people struggle with the things you've built. It's incredibly valuable. So that I think I'd

like to add one more thing to higher documentarians. So if you have someone who's writing your documentation, who's a skilled at documentation, then they can actually help correct your, your actual app. It's you know, it's it's a give and take. So hiring someone to do this job that knows how to do it is not only provides you with excellent documentation, but improves your product. So definitely

don't skimp on security at some point. Right? Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that's a great point. I like that thinking of like that you're, there's a good reason you're paying for this. And people do have that skill set, and it can really leverage it. Well, I just want to thank you all for joining us. This was super informative, even for like even something that Jeff and I care about documentation. It's like, even just hearing the thoughts that you all provide is super helpful. Where if people want to get in touch with you, where can they get in touch with you online, if

</p>
<p><strong>Will Bamberg</strong><br />
people want to support open web docs, it's open web Doc's dot org. And there's a little donate button in the right hand corner. And open web docs and myself personally is still at sets open web docs at an Estelle apt is a front end social front end deaths dash social on on Mastodon, and YouTube. It's front dash, and dot social. I

don't know on GitHub, I guess I'm not I'm not really on any of the socials. So

what's your GitHub username?

I'm W Bamberg on GitHub. I mean, all of us really live on GitHub, because that's where MDN all exists. So that's where we spend all our time.

Can I show off a bit? I'm Astell on GitHub.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a nice flexes style.

</p>
<p><strong>Will Bamberg</strong><br />
I like that. But we also have like with the open web docs organization on GitHub, too. So

</p>
<p><strong>Jean-Yves Perrier</strong><br />
So I also live on GitHub, to de 2003. And I have a mustard on also entry which is totally 2000 three<a href="https://twitter.com/mamod">@mamod</a>.fr Right

</p>
<p><strong>Ryan Burgess</strong><br />
on. Well, thank you all for listening to our episode today. You can find us on Twitter at <a href="https://twitter.com/frontendhhw">@frontendhhw</a> front end happy hour.com really subscribe to whatever we listen to podcasts on these days. Any last words?

</p>
<p><strong>Will Bamberg</strong><br />
Thank you for having us.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, thank you. That's great.

</p>
`;
        return transcript;
    };