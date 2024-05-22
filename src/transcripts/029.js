module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 29th episode of the front end, happy hour. In this episode, we're joined by Ayşegül Yönet, who had probably butchered your name and I apologize, we're gonna keep trying. Yeah, we're gonna keep trying to talk about the popular JavaScript framework Angular actually go. Can you give us a brief introduction of who you are, what you do and what your favorite Happy Hour beverages, and also tell us how to pronounce your name properly?

</p>
<p><strong>Ayşegül Yönet</strong><br />
Hi, everyone, my name is Ayşegül Yönet. I'm not sure that's the proper pronunciation. I googled it once and there was a whole bunch of different pronunciations came up. My favorite beverage is Belgium beer today. Thank you, Brian.

</p>
<p><strong>Brian Holt</strong><br />
You're welcome.

</p>
<p><strong>Ayşegül Yönet</strong><br />
I'm a senior software engineer at Autodesk work on Cloud Platform.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, well, let's also go around the table and give brief introductions of today's panelists. Brian, you may as well start it off. You're sitting beside me.

</p>
<p><strong>Brian Holt</strong><br />
I know it's always shouldn't do that. But I'm Brian Holt. And if I was still an angular engineer, I would be fired.

</p>
<p><strong>Jem Young</strong><br />
Jem Young Senior Software Engineer at

</p>
<p><strong>Stacy London</strong><br />
Netflix, cc one in front end dev at Atlassian.

</p>
<p><strong>Derrick Showers</strong><br />
Derek showers Senior Software Engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is Google. There we go. So at any point in the episode, we say the word Google, we will all take a drink. All right, well, let's start it off. I would love to hear someone describe what Angular is

</p>
<p><strong>Brian Holt</strong><br />
framework by Google.

</p>
<p><strong>Ryan Burgess</strong><br />
There you go. What are the benefits of using Angular?

</p>
<p><strong>Ayşegül Yönet</strong><br />
Well, I'm using Angular two right right now, and I'll talk about that first. And there's a lot of performance benefits. It's so much faster, lazy loading is built in ahead of time compilation is default right now. And there are lots of build tools like Angular CLI that are very helpful. I think it's a full framework that is very good for every needed. We have

</p>
<p><strong>Ryan Burgess</strong><br />
I haven't used Angular two yet. But Angular one I always found was really good. For quick prototyping. I always thought that that was one of the most beneficial things if you wanted to get something up and running really fast. I found like Angular was the choice.

</p>
<p><strong>Brian Holt</strong><br />
Most definitely, like when I was writing Angular, I wrote it at two companies go I also wrote it Reddit, Reddit had a lot of things in production for a while, before we migrated react. But writing code and Angular was super fast, right? Like, I could just like, throw some things on scope and say like mg bind equals this. And it was just like, already working before it was it felt magical. The first time I wrote Angular was like, a love story, right? Like, I felt like it was super magical. Energy, love, I should make a directive called that.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, but that's true is like you just bind something in your HTML, and you're like, hey, it's working. This is amazing. It's magical.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, it really is super cool.

</p>
<p><strong>Ayşegül Yönet</strong><br />
And isn't that the reason you fall out of love with Angular? Is it?

</p>
<p><strong>Brian Holt</strong><br />
It was because all three went back to maintain it later. I was like, What the fuck was I doing? Like, I had this like sprawling, monolithic, was just throwing everything on scope. And I had these directives. I had, like, stacking directives, like required each other. Like, I hope you're hearing this and say, like, Brian, you're a fucking idiot. It's like, yes. So like this. This is ultimately my complaint with Angular as well as like, it doesn't really force you into any sort of good patterns. And by nature of that, idiots like Brian Holt ends up writing really shitty code. And then idiots like Brian Holt have to go back and maintain it as well.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I hate reading Brian colts code.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. True. That is still true.

</p>
<p><strong>Jem Young</strong><br />
The power of Angular was it wasn't the first framework to do data mining, but it was the first big framework that really caught on the data been changed the

</p>
<p><strong>Brian Holt</strong><br />
best. I'm gonna just throw it out there. It's the best one to do.

</p>
<p><strong>Ryan Burgess</strong><br />
I agree. I agree with Brian statement. It's like, I feel like the first one that I started using data binding was knockout. Yeah. And like it was like, you'd couple it with jQuery. And you're like, great, I can do this cool data binding with running knockout. But Angular really took it so much further.

</p>
<p><strong>Brian Holt</strong><br />
So someone wanted to find data binding.

</p>
<p><strong>Jem Young</strong><br />
Data Binding is an MVC Standard Model View Controller, you have your view, which the user interacts with, and you have your controller, which is where you do all your kind of logic. So a change from the user actually propagates back to the controller, and you control it there. But the change the controller actually propagates back to the user input as well. So that's two way data binding. That was a good definition way to define that. I mean, it was so popular that there's almost a spec that made in the JavaScript called Object observe, because we're everybody saw data binding. We're like, this is gonna this is awesome. It's gonna change everything and well, it didn't. But yeah, we talked

</p>
<p><strong>Ryan Burgess</strong><br />
about later. I don't want to I mean, admittedly, we all thought that was the greatest last. Absolutely. It just didn't work out?

</p>
<p><strong>Brian Holt</strong><br />
Well, I think it's worth talking about, like, what dirty checking is because it's such an interesting concept, right? So basically, you have like a variable and you change, you know, x equals one, 2x equals two, right? And there's no way to like, subscribe to those changes built into JavaScript. And so we came up with or we, we the JavaScript, I include myself, you mean, Google, Google? I really mean, Igor Minnaar, right. Like the one of the core maintainers of Angular, he came up with this idea was like, well, we should just when certain events happen, like user clicks, and all these sorts of different events happen, we're going to run this dirty checking to see if like, well, x was one before. Now it's two. Okay, now we're going to run the rerender. Again, right. So that's what dirty checking is. And that's kind of what Angular really, I don't know if they pioneered it, but they certainly were the one thing that brought to mainstream

</p>
<p><strong>Jem Young</strong><br />
what's not just that that's a good example. But it's, it's a bit more complex, or like in remember, in CS classes, you know, you heard a dirty bit, it's like the one bit on something that just flips if it's changed, that's kind of what Angular did it because if he did like a raw equals equals equals equals, it'd be really, really slow. But it's just like a quick bit that says, like, oh, this change, and then it goes back and like, does a deep introspection on what actually changed? And that's the brilliant part. Because anybody can just like, oh, you know, giant function that says equals equals equals, like, that would be easy. But that would be slow. And Angular got around that. So like, you're right. It was revolutionary at the time.

</p>
<p><strong>Brian Holt</strong><br />
And this is like, era of Angular one, right? We're on Angular two. Now we're looking at any of the four. But during either one, they could have up to 2000 variables that they were checking, which is crazy. That's crazy amounts of performance. What

</p>
<p><strong>Ryan Burgess</strong><br />
happened to Angular three?

</p>
<p><strong>Ayşegül Yönet</strong><br />
I thought it was a joke. When I heard that Angular four is coming. Because they announced it today, they announced that they have Angular two release. And I totally assume it was a joke, but apparently wasn't. Because the router was rewritten. It was router number three. So to match that they decided to just skip three. And so now router is four and English four.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, that makes sense.

</p>
<p><strong>Brian Holt</strong><br />
It's probably worth talking about the angular one to two story. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
It is an interesting thing. Like what are the big differences between them? And yeah, talking?

</p>
<p><strong>Brian Holt</strong><br />
Just like the whole shitstorm came later, right? Yeah. So people have these giant Angular one apps in production, right, like huge Angular one, apps in production. And they came and said, We're gonna do Angular two, and it's incompatible. There's no migration path, it's a rewrite. And you have to rewrite to to come to Angular two. And people were like, What the fuck? Fuck off? We hate you die, right? Like,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, the internet exploded, right? Like they were people were not.

</p>
<p><strong>Brian Holt</strong><br />
I remember there were people forking you, the ones like we're gonna keep being the one go in, like, you guys don't know what the fuck you're doing. And like, to be totally honest, that's super shitty. Right? Well, and

</p>
<p><strong>Stacy London</strong><br />
I was trying to choose a framework at that time to say, which one should we use to build this app? And I'm like, not picking Angular ember.

</p>
<p><strong>Ryan Burgess</strong><br />
Seasons written a lot of ember, though to

</p>
<p><strong>Brian Holt</strong><br />
know I'm not bashing it, either. But it was seriously at that time, Angular was not a viable option, because it was in such flux, right? Well, you

</p>
<p><strong>Ryan Burgess</strong><br />
also knew it was changing right away. There's no point writing something in Angular one

</p>
<p><strong>Brian Holt</strong><br />
Angular two was in like, and it wasn't ready. It was like pre alpha, right? Like you couldn't really target at all. No. And then at that point, they realized like, oh, shit, we made a mistake. We need like a migration path is actually super important. And open source communities can't survive these kind of migrations, right? We

</p>
<p><strong>Ryan Burgess</strong><br />
were talking about the learning curve. And to me actually found the learning curve was it was really easy to get going. I actually found like, that was my experience. But the minute you started having problems or wasn't scaling properly I can O'Brien is talking about it scaling or having these large applications. That's when I started running into headaches was what's going on, it would slow down and you're like, all these two way data binding is starting to become problematic.

</p>
<p><strong>Brian Holt</strong><br />
So I made a goal not to shit on Angular during this podcast just a little bit

</p>
<p><strong>Ayşegül Yönet</strong><br />
why you don't want to kiss off Google

</p>
<p><strong>Brian Holt</strong><br />
we should have like one keyword was just like if Brian sheets on anything we drink. Oh my god. So whenever I get my reacts workshops, I love to talk about why I like React. And while up React is because it's really easy to maintain. I think it's more verbose. You write more code, I think to write and I'm honestly I'm comparing to Angular one. I don't really know as much about Angular two. So take this was just like the whole bag of salt they can find but if you have a problem with like, like imagine you're doing like a To Do app. And in the To Do app, it's you know, you you have a problem that you click the checkbox and it doesn't work right or for some reason like that. I love with React, that you know where to start with that problem. Right? You know that it's it has to start with a couple opponent and then it kind of radiates out from there. But you have a definite starting point with React of word to debug that with Angular one. It could be the directive, it could be one of the other directors that you put on it. It could be the open source directive that included it could be the the controller that had some sort of problem with it. It could be in the template, right? You have like seven places to start. And it's overwhelming. In other words, you have no idea, you have no idea where to start. And I think that is something that Facebook really just nailed. And Google. Google could have done a little bit better with right. Don't get me wrong, Angular was revolutionary, and definitely shaped the front end landscape. So for that, I'm forever grateful. And I actually really enjoyed my time reading Angular, when I was a singular, like I was one developer at Reddit writing all these different pieces of code. Angular was great, because I could just keep everything in my mind, right? Like I knew where the problem was, because I fucking wrote it, right. And I was able to be super productive and write probably the code of three developers just because Thanks, Google. Angular was super productive. For me, as a single developer, as that team skill that was became a real problem, we actually took it out of commission in favor of react at the time.

</p>
<p><strong>Stacy London</strong><br />
So I have a question for the group that that'd be curious to hear your input on his, I noticed that Angular got really popular amongst so coming from the Midwest, there's a lot of Microsoft and dotnet. And that's kind of a big thing about an enterprise. Angular seemed to get extremely popular in that community. And be curious, if you have any insights as to why you think that might be the case. Much more so than any other framework,

</p>
<p><strong>Ryan Burgess</strong><br />
my guess would have been is more like you have people that are writing dotnet, and more enterprise backends. That Angular to me is like you can get away with creating some smaller components and just throw them into your app and not really necessarily have to write a lot of JavaScript. That would be my thought on it is like, you could just add Angular, and like, add a component, data binding, you're kind of got a lot for free there. But I don't know, I'm interested if other people have,

</p>
<p><strong>Derrick Showers</strong><br />
I think that's a good point. I don't know, I just feel like when you talk to a lot of people that write a lot of backend code, and need just a quick front end, they I feel like a lot of people will choose Angular, and because the barrier of entry is

</p>
<p><strong>Stacy London</strong><br />
ease of use, ease of

</p>
<p><strong>Brian Holt</strong><br />
getting going, I'm gonna venture a guess, because I don't actually know. And like, I just love speculating wildly. So I noticed that view, like Vue js, which is awesome, by the way, feels like writing Angular one, but like, a little bit nicer, in my opinion, when that really took off was when Laravel included it. And like Laravel, the PHP framework, which I use actually gonna ask him like, I don't know what that is. It's like the new hotness in the PHP frameworks. And rightfully so. Okay, I use Zen, I used to be a back end developer, which is like a, I use write PHP, that was my job. I've written a ton of PHP. So Laravel is like the new hot framework. It's like a much more pleasant PHP framework to write. They start including view with the framework itself, and then all sudden, the PHP community just really latched on to Vue js. And so I think when some of those like tastemakers, for law, for lack of a better term really start to latch on to those frameworks. Maybe someone in the dotnet framework wrote like a connecting library, or they are just some sort of tastemakers like this is a great thing. We should always include it. People just kind of run with that.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think in Visual Studio, there's some like templating things like spin up an Angular app, you know, like, that was kind of

</p>
<p><strong>Brian Holt</strong><br />
probably enough.

</p>
<p><strong>Jem Young</strong><br />
All of you just because fuck off, Jem. I think we're in a dating, like the political aspect of it. It was written by Google. And people are tiny. Yes. You're like, oh, what should we use? Like this random framework, like knockout written by who knows who I mean, it's great for or Google? Like, it's Google.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Hard to answer questions.

</p>
<p><strong>Brian Holt</strong><br />
That's literally the point.

</p>
<p><strong>Jem Young</strong><br />
So I, I would like postulate, that's why a lot of people use it and get it by a big company that you know, would maintain over time, the docs are really, really good. And vs was around the time backbone,

</p>
<p><strong>Ryan Burgess</strong><br />
backbone knockout. jQuery was still fair, I mean, not really.

</p>
<p><strong>Brian Holt</strong><br />
I mean, Ember slash sprout core

</p>
<p><strong>Jem Young</strong><br />
but nothing backed by large company with a large team actually working

</p>
<p><strong>Brian Holt</strong><br />
on I mean, the framework that like when you go to like propose frameworks to your team, saying that it's backed by a company X makes a huge difference.

</p>
<p><strong>Jem Young</strong><br />
You can make the same argument for reacts I mean, RX great, but backed by Facebook was probably a big selling point versus view is up and coming but view isn't backed by any major company that I know.

</p>
<p><strong>Brian Holt</strong><br />
I mean, it started backed by Google. Is it started backed by Google Cheers. I didn't know Ave who rights view super awesome, guys. I spoke at a conference with him in China. He's incredibly nice guy. He started writing it at Google. And then he left the Mountain View place. And he start working at Meteor and then he actually broke off and now he just I think he's just funded by Patreon to right view. So it was it was an issue and I think they wrote some they being the company in Mountain View that I don't want to drink anymore. They wrote some product in it. I think he was in ADS. Maybe Evans probably going to tweet at me and say like, you're an idiot, which is probably true. But they wrote something at a at the at that place.

</p>
<p><strong>Ryan Burgess</strong><br />
I google.

</p>
<p><strong>Brian Holt</strong><br />
No, no, he's independent. He doesn't by himself.

</p>
<p><strong>Derrick Showers</strong><br />
This is getting a little bit off topic. But I think it's a good conversation. What do you think the The cons are to having a framework backed by a large company?

</p>
<p><strong>Brian Holt</strong><br />
You're always at the Windsor that people Yeah,

</p>
<p><strong>Stacy London</strong><br />
I got super frustrated using some stuff that that mountain view that search engine company created.

</p>
<p><strong>Brian Holt</strong><br />
Bing was a Bing No, fucking Microsoft.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I mean, there's, there's several products that I was super excited about. And I was using heavily in my workflow, like Google Wave,

and and then they trashed it. And they said, Nope, not for you. No, we're not doing it anymore. And I was like,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, and they're nor that to the Meter Reader, I was really

</p>
<p><strong>Stacy London</strong><br />
paying for it, you know, super upset, but,

</p>
<p><strong>Ryan Burgess</strong><br />
but you can get upset because you get used to using that and you go to it. And like, if Gmail just disappeared, we'd all be in panic, that would suck. So it does, you know, it is pretty painful losing that. And so that is frustrating.

</p>
<p><strong>Derrick Showers</strong><br />
I think one of the other things, too, I mean, I think that can happen with a framework that's not necessarily backed by a large company. I mean, you know, you're not going to have to always agree and be on the same page with that core team. It's not but but hopefully not as much. But I think the other thing that I know that we've run into in the past is like, one of the reasons from what I've heard, I don't know if this is a rumor if this is true, but one of the reasons that we didn't go with React is just because to bring people into do consulting work for us, or like training and stuff like that, a lot of like, we'd be paying Facebook employees to come in and I mean, not maybe not naked pay Brian,

</p>
<p><strong>Brian Holt</strong><br />
you can't I don't do corporate training. Oh, sure. Fucking Microsoft.

It's gonna be the best.

</p>
<p><strong>Ryan Burgess</strong><br />
Also, another thing, I think that can be frustrating, too, is a company is making it to solve a problem for themselves. Yeah. And they're making it they're, you know, publishing it open source to allow other people to use it. But at the end of the day, they're going to put in it what they want for to solve the problems of their needs of that company, which is not a bad thing. But that could be hard. If you're adopting it, and trying to do something different. They're not necessarily going to put that in the core library.

</p>
<p><strong>Ayşegül Yönet</strong><br />
It's open source at the end, right? I mean, I hear people complain a lot about, you know, React and Angular in every other word, framework, but it's open source. And that's for us by us. And we can extend it anytime that we want. And there's all these capabilities that we can write libraries on top of it, we should just accept the fact that somebody is giving us free code by great engineers, awesome engineers. And it's really frustrating for I think they open source contributors. And I think I'm sure if you did a lot of open source contributors get really upset and not share their code anymore. And it's really sad to see

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, everything open source is so much better because of it is like someone can tweak it, use it for something else and build on top of it. And you get these new features being added. And exactly, I think is great. And also

</p>
<p><strong>Ayşegül Yönet</strong><br />
the developers feel more responsible. I feel like they write better code. Yes, I would much rather work on the open source project, then not people can look at your code and be like we do this.

</p>
<p><strong>Jem Young</strong><br />
So we've, we spent like, 20 minutes pretty much bashing Angular one. What are the big changes to Angular two?

</p>
<p><strong>Ayşegül Yönet</strong><br />
All right, all the things that we've just bashed. So there is no two way data binding anymore. While there is a heck of it, you can actually do it. But it's very explicit now. So every time you have any changes in your application, Angular doesn't look all through throughout your application in look for the changes. Instead, there's this thing called zone Jas, which allows you to just look at the tree that your component is on and look forward to changes there. So you have an input of whatever variable and then you have an output of events that tells that something has changed. And that The only thing that's been checked, so that makes it really fast. And that makes it really more easy, you know, easier to understand. I think that was possible to do with Angular one with directors and attributes in scope. But turns out, you're not stupid. But like,

</p>
<p><strong>Brian Holt</strong><br />
I might be stupid.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Everybody else did, I know, fell into the same trap, because it wasn't obvious. I mean, there was no very obvious way of doing it. And so you have this directive that you can pass in some attributes, and, you know, scope variables, but you don't know which one to pass in. And then most people just passing the whole scope. And there's these changes everywhere. And I think now with Angular two, well, let's call it Angular,

</p>
<p><strong>Ryan Burgess</strong><br />
right? Because we're not supposed to call it Angular two. JS, or Angular js, which clearly says that my back my T shirt, not supposed to say that they want to brand it as just Angular. I just saw this. I learned this like a week ago, or a few days ago,

</p>
<p><strong>Brian Holt</strong><br />
I saw a tweet. That's that's gospel. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Twitter knows all.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Yeah, because Angular four, I mean, so people don't freak out. Basically, very similar. So everything is very explicitly told to you like there's an input to the component and output to the component. You know, what kind of data it's expecting when you take it. And you know what it's going to output and you can watch only for those a thing, it makes it a little bit easier. But still, I feel like I've seen that people do still can misuse. For example, zone js is running something like you know, dirty checking, right. I've heard it come in some people just in to recreate the two way data bindings, start running zone js, run zone j s everywhere, and start watching everywhere.

</p>
<p><strong>Stacy London</strong><br />
That sounds horrible. Is it taking like a similar approach to sort of like, data down actions up? This is like an ember like concept. It's kind of an analogous thing similar similar in React,

</p>
<p><strong>Brian Holt</strong><br />
it's a React concept did down stolen from react? I mean,

</p>
<p><strong>Ayşegül Yönet</strong><br />
I mean, they did. They have these open meeting notes, they did talk with Ember team, React team, all of them. And I think they learned, which is a great thing. And they learn from their own mistakes, and they learn from what other people created. So I think it's it's a good progress. Similar

</p>
<p><strong>Stacy London</strong><br />
paradigm. Yeah. Cool.

</p>
<p><strong>Jem Young</strong><br />
mentioned, types. Angler is written in TypeScript. Right? Yes. How does that affect the code you write? Do? Does that matter?

</p>
<p><strong>Ayşegül Yönet</strong><br />
I mean, you can write just a plain JavaScript B is five. But most the time it's encouraged to write TypeScript. And it's really cool to write TypeScript, I think, in my opinion. And to come back to both Jem faces point that I think dotnet developers will love it more now type that is TypeScript,

</p>
<p><strong>Brian Holt</strong><br />
fucking Microsoft.

</p>
<p><strong>Ayşegül Yönet</strong><br />
I, I did give Angular two workshops for a while for over jazz now. And there's these dotnet offers who's like, okay, that makes sense. And then there's this JavaScript developers, they keep rolling their eyes. And everything I say, and I think dotnet will love it.

</p>
<p><strong>Brian Holt</strong><br />
It definitely is.

</p>
<p><strong>Ryan Burgess</strong><br />
In Angular two, it's also something that comes with it is RX js? Yes. Have you found writing with RX js?

</p>
<p><strong>Ayşegül Yönet</strong><br />
Oh, I love it. I mean, I feel like our experience is something that I do get obsessed with. And there's this huge fan base. And once people, you know, understand what it is they love it. But they also, it's worse than the angular one learning curve, right? Oh, yes. So much worse. So what I recommend to people who are learning Angular two, most of time is if you don't understand it, don't bother. Try to you know, find out everything about it, just like make it to promise turn it to promise, the observables are like, make it more understandable for yourself, and then go learn once you learn, just deal with it. I think it's a great tool. But you have to spend some time to learn it.

</p>
<p><strong>Stacy London</strong><br />
Does Angular abstracted, like does it put a layer on top of the HTTP

</p>
<p><strong>Ayşegül Yönet</strong><br />
call is observable now. So you don't have promises out of the box. So that's the only thing but you can add to anywhere you like. And also, there's this async pipe that makes it easy for you to add it as an observable to your templates. So it's watches for when the data comes in, renders at that time.

</p>
<p><strong>Brian Holt</strong><br />
So is it a dependency of Angular two? Or Yes, it is. So you, if you include Angular two, you automatically get RX js? Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
So you can't rip it out or anything?

</p>
<p><strong>Ayşegül Yönet</strong><br />
What do you mean,

</p>
<p><strong>Ryan Burgess</strong><br />
you can't not have RX JS if you're using Angular two? True,

</p>
<p><strong>Ayşegül Yönet</strong><br />
but I mean, are you concerned with like the size of it or anything else?

</p>
<p><strong>Ryan Burgess</strong><br />
That was my biggest sure the payload is it adds RX js is fairly large. So you have your Angular code and then RX included. And so that just makes the framework a little bit heavier.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Yes. So you don't while there's tree shaking, so you don't get things that you don't use, right? True for components as well. Angular, just if you don't have anything rendered, even if you write it, even if it's in your code is gets CI CI, I mean, you don't deploy that code.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, that's awesome. I didn't realize that it was already happening for you. That's pretty amazing. Yeah. Yeah, that is actually really cool. Yeah, cuz that is always a concern is like, frameworks are great. But it's always a trade off, you're adding more weight and so that it's fine. You know, there's a lot of great benefits that you get from it, but it is wait on the page. Sure. We've talked a lot about Angular one and Angular two. If I have a large application written Angular one, should I be thinking about upgrading to Angular two? Is that a must? How would you approach that?

</p>
<p><strong>Ayşegül Yönet</strong><br />
That's a very tough question. Yeah. So we are facing the same question at Autodesk. So we do have this huge Angular one application. And there's a lot of users and I start rewriting it in Angular two A while ago, and then we're like, Okay, maybe not. So it's kind of like a business decision. It's not a corporate decision most the time because the app is big. And there's this huge base? And are we going to, you know, keep adding features to it. If you're not going to keep adding features? Or if you're just going to maintain it? Why would we change it, right? But if you're going to add to it, there is a way to have angular one and Angular two at the same time, so that Hubert's concepts could help to develop new faces.

</p>
<p><strong>Brian Holt</strong><br />
Mine was just blown. I thought

</p>
<p><strong>Ryan Burgess</strong><br />
that was gonna be one of my questions, though, is if you can actually run them together, which that's great.

</p>
<p><strong>Brian Holt</strong><br />
How does that work? I'm super curious. So

</p>
<p><strong>Ayşegül Yönet</strong><br />
the first thing is that I'm not going to say that it's all pink. And you can do it in every Angular one application. So you should be following the style guide. And they did along the way, they did some changes to make Angular one look more like Angular two. And they did give out some, you know, roadmap to how to make it more easier for people to switch. So if you have that, you know, if you follow that structure, there's this thing called mg upgrade. So you can have the module and then everything that's written with Angular two will use the Angular two library and everything that's written with Angular one will using the one library

</p>
<p><strong>Ryan Burgess</strong><br />
fascinating. That is actually really cool. Because I was wondering how you could support both. And I know, I was a good year or two ago, when they were working on Angular two, I was talking with one of the core contributors from Google cheers. Yeah, it has been a while. So I was talking with them and trying to understand what their plans were for upgrading if you're going from one to two. And they were there was some talks about making some tools to really help that along. So that's good to hear that you can even run them together at the same time.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Yeah, it is really cool. And also, for Angular for goodness, there's this upgrade path, just like I think react does have, right? They make it I mean, they do think of a hot you can upgrade in the future.

</p>
<p><strong>Ryan Burgess</strong><br />
Totally. Even with going from react versions, like some are easier than others. And some are actually kind of

</p>
<p><strong>Brian Holt</strong><br />
a bit of work. The next version is going to be

</p>
<p><strong>Ryan Burgess</strong><br />
hard on 15. It's 15 to 16. Yeah,

</p>
<p><strong>Brian Holt</strong><br />
they're going to deprecate create class. Alright, so everything has to be ESX classes, which is going to be not a fun day. Not a fun day at Netflix anyway. No,

</p>
<p><strong>Ryan Burgess</strong><br />
it's gonna be a lot of work.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Did we mention Brian's t shirt says Google.

</p>
<p><strong>Brian Holt</strong><br />
So I was at a conference, actually the very first conference, which was fluent comm 2013 and Igor menar. I'm sure I'm mispronouncing that, but he's awesome. works at Google. Cheers. spoke about Angular. I was just at like, worshipping at the altar like a groupie. Right? I was like, throw me a t shirt. And he threw me was

</p>
<p><strong>Stacy London</strong><br />
it was, like, honest to God gave a t shirt gun.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, that'd be really cool.

</p>
<p><strong>Brian Holt</strong><br />
Next Conference, I'm totally bringing one which will be in Switzerland with you soon. Just just I'm sure we're saying it wrong. But I'm saying just zoom. And he gave me a t shirt. And I'm wearing it today. I still have it. It's usually my Jem t shirt. I got like dirty glasses because we're in San Francisco and people don't like don't like techies as much

</p>
<p><strong>Ryan Burgess</strong><br />
but do they know that? That's what it is.

</p>
<p><strong>Brian Holt</strong><br />
I mean, Google on it. It does

that that was me for definitely for a long time. And I realize like everyone in tech is actually super nice and feel super weird about that. Like about like being approached like that because like I do front end masters, right? You're about to write No, you should I mean, uh, you know, Mark So yeah, so I like I get approached by people and like, it's not it's super weird for me like it feels super weird to like have people say like, I know who you are

</p>
<p><strong>Stacy London</strong><br />
I call them front end developer all stars.

</p>
<p><strong>Brian Holt</strong><br />
Let's go with that. So the All Stars right? It's, it's, it just feels really weird.

</p>
<p><strong>Ryan Burgess</strong><br />
I feel people have learned react from you because of those. So that's pretty cool.

</p>
<p><strong>Brian Holt</strong><br />
So we pulled the numbers from front and masters. It's people have watched like this. I'm motioning at my face right now. For six years,

</p>
<p><strong>Ryan Burgess</strong><br />
they've watched you for six

</p>
<p><strong>Brian Holt</strong><br />
years. Watch me for six years.

</p>
<p><strong>Ryan Burgess</strong><br />
How many people don't know, could just be one person.

</p>
<p><strong>Brian Holt</strong><br />
It's literally just looping in my house all the time. No one else. Like a bot.

</p>
<p><strong>Ryan Burgess</strong><br />
It just keeps pinging it.

</p>
<p><strong>Derrick Showers</strong><br />
I want you to forget asleep. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Isn't sue the nerves just so boring?

</p>
<p><strong>Stacy London</strong><br />
That makes me scared and creeped out.

</p>
<p><strong>Ryan Burgess</strong><br />
I'd also be interested, we've talked a lot about using Angular. How do you learn Angular? Like, what are some of the best places? I know Brian, like definitely even just mentioned front of masters. But what are some ways to learn Angular? And how should you approach that?

</p>
<p><strong>Ayşegül Yönet</strong><br />
There are a lot of ways actually, Angular has a really good tutorial at Angular Dario called tour of heroes, and some people went and extended it. And I think that's a good tutorial, and everybody must go through it first. The other stuff is of your teaching and forages with Brian, I think this year.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, as I say, you should, you should listen, I should go. Because she's teaching a poor Jess, I actually might just sit in your lesson. Oh, yeah, I want to learn from you.

</p>
<p><strong>Ayşegül Yönet</strong><br />
That'd be great. So I'm teaching Angular two application architecture. And there are two more. So this time, there's three workshops, which is really cool. And you have your choice. And plural site, I think just published John Papa, and maybe then violin course. And those guys, if you don't know them, they're grapes. And John Papa is leading the style guide for Angular. And I would definitely take a look at his tutorial. Other than that, I mean, if you are new to Angular, definitely, absolutely. use Angular CLI.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, for sure. Which we copied? Well, they copied from Ember, we all copied from Ember,

</p>
<p><strong>Ryan Burgess</strong><br />
which but then again, I've also heard Ember kind of stole the idea from Ruby, right?

</p>
<p><strong>Brian Holt</strong><br />
Well, I mean, like, the Ember team is the Ruby team,

</p>
<p><strong>Ryan Burgess</strong><br />
I guess it's not really stealing it because they created it. yourself, it's open source, it's not stealing. It's taking a great idea and using it again,

</p>
<p><strong>Ayşegül Yönet</strong><br />
and extending or learning from it, I think, because I just object to this idea of stealing, because there's so many things available, you know, online, and so many people try to invent the wheel over and over and not take a look at open source because they're worried that they're going to be blamed as Oh, you stole this code, or like, you know, you just copied and pasted No, do it.

</p>
<p><strong>Brian Holt</strong><br />
My whole career is borrowed, right? Like, I just borrowed it from everyone else. Like it's like this great idea. I it's now mine.

</p>
<p><strong>Ryan Burgess</strong><br />
You're just extending a good idea. There's nothing wrong with it.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Yeah, unless you're claiming that it's your own.

</p>
<p><strong>Jem Young</strong><br />
And I invented data binding no one

</p>
<p><strong>Ryan Burgess</strong><br />
else no one else did. Yeah. And Google's not saying they did either. Cheers. Cheers.

</p>
<p><strong>Stacy London</strong><br />
Cheers.

</p>
<p><strong>Jem Young</strong><br />
Are there disadvantages of Angular?

</p>
<p><strong>Ayşegül Yönet</strong><br />
So the thing I would say, is that, so there was the learning curve was first you're like, Oh, my God, this is so easy for Angular one, right? And then you realize, oh, my God, I know what I'm doing what's going on in here, and then you go up again and down again. So it's the opposite. I don't think it's super beginner friendly. And not just is not because just because the Angular code itself, but the tools that you are using for TypeScript, you know, Webpack, and all these things kind of complicate the first starting process. So it's not as beginner friendly as it used to be. But once you do it, I think it's more much more clean, much easier to understand and work through.

</p>
<p><strong>Stacy London</strong><br />
And I would say, I'm learning react, I don't think it's necessarily beginner friendly, either. So I think that's a plus or a minus for framework at this point, because they're all kind of getting more complicated. Yeah.

</p>
<p><strong>Ayşegül Yönet</strong><br />
And I would just say this is a really a thing that they fail to do, because they're solving very complex problems, like ahead of time compilation, you know, working with service workers, and like, you know, tree shaking, all these stuff are great for big applications. And I really do appreciate

</p>
<p><strong>Stacy London</strong><br />
it. Can you define ahead of time compilation.

</p>
<p><strong>Ayşegül Yönet</strong><br />
So Angular, the way it works is that it looks at your code writes HTML, and then it's says, Okay, you have this binding here, and it does a lot of work to match it with your JavaScript and then they create something else which is The compiling procedure. And with Angular two, you can compile in your build process and then send the code that has been compiled. So Angular did take a look at your code and then did what it needs to do. So that means that 60% of the angular library code you're leaving behind and you're sending the 40%. That's, which makes it much faster.

</p>
<p><strong>Brian Holt</strong><br />
That's amazing. That's pretty

</p>
<p><strong>Ryan Burgess</strong><br />
cool.

</p>
<p><strong>Derrick Showers</strong><br />
That is cool. It doesn't make it harder to debug issues. Like when you're I mean, hopefully, you're not having to debug production, you know. But if you are

</p>
<p><strong>Ayşegül Yönet</strong><br />
well, good question. I mean, it's getting there, I'd say. I mean, there's definitely mapping and but with TypeScript, and everything, the error codes are getting there. There's the workout, it's, I think, but it's better than any other one.

</p>
<p><strong>Jem Young</strong><br />
My only worry with future version Angular, and we saw from Angular one, Angular two is that it'll be too smart for people, like I've seen Google in JavaScript community tend to do that where like, closure was way ahead of its time, like Scylla billion libraries, still a super ahead of its own super heavy assignment, people can figure out how to use it, and they just didn't use it other outside of Google. So that might happen with Angular four, is that something they're actively trying to address? Just keeping it simple?

</p>
<p><strong>Brian Holt</strong><br />
Well, just to pile on to that they use really high terminology. Don't get me wrong. It's the synced, right? Like they're literally discovering what they're talking about. But they use words like, Shit, I'm too drunk to remember transclusion Yeah, directive,

</p>
<p><strong>Stacy London</strong><br />
let us see us terminology. So if you're one of those, you know, I don't have a CS background. So for me, a lot of that stuff is like words that I have to learn,

</p>
<p><strong>Brian Holt</strong><br />
right? Like, CS dropout, right? So like, I have three years of CS and like, these were words beyond my years that I had to go look up and really grasp right, and I felt like it was unapproachable even for me, right. So people coming from out of boot camps out of teaching themselves like this is totally unapproachable terminology. And that was one of my biggest gripes with with Angular.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Yeah, sure, definitely. That's why I said it's not super beginner friendly. I mean, years ago, I think we had this angular you conferences, a huge conference. And you just talked about these cool things that you could do with Angular and all that stuff. And after the conference, so many people approached me and said, like, what is that add sign? So there was this Docker decorator? Totally,

</p>
<p><strong>Jem Young</strong><br />
I remember that. Yeah,

</p>
<p><strong>Brian Holt</strong><br />
I remember that, too.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Yeah, no one explained, no one, you know, new heart, you know, they needed to explain. So it's definitely not super beginner friendly outside. But it's solving big problems for big applications. And it's so hard to have the simplicity and the complexity of solving the problem, I think, one thing we could do is just improve the documentation. You know, I graduated from a boot camp to and like I have don't have a CS degree, I have the same problems. But by the time goes by you started to forget what you learn. And it's really hard for people who are in it for a long time to realize like this is not explained well, or we're using this terminology people might not know. So what I recommend is people just submit issues to Angular, I have the documentation and say like, I don't understand this part. So can you just improve this part? I think it's really important. I just gave a talk last week. And my husband said he didn't understand it. And he felt like I'm super. I don't believe it ever again. Divided is about that's the husband talk. Right? They're very honest. Yeah, yeah. Fair. You know, that's the last thing I want to be like, I am a very passionate teacher, and I want to teach but at times you do forget what you learned. And it's really hard. So if you're a beginner, it's hard to think that's, you know, you can send me the issue and stuff. But please do. Please make it easy for us to make it easy for you.

</p>
<p><strong>Stacy London</strong><br />
Do you feel like the Angular community is friendly to like that kind of thing? Because I think that was important for me, like other frameworks that I've used, or certain communities I feel like are friendlier. If you're,

</p>
<p><strong>Brian Holt</strong><br />
you're like, just say it's Ember, embers really nice.

</p>
<p><strong>Stacy London</strong><br />
People are really, really nice.

</p>
<p><strong>Brian Holt</strong><br />
They are very nice.

</p>
<p><strong>Stacy London</strong><br />
So if you post in a noob question, everyone's not like, noob, get out of here. Shut up. Like, do you think that Angular has like a welcoming community that

</p>
<p><strong>Ayşegül Yönet</strong><br />
way? So I really do think so. And they're very inclusive. They just they have these T shirts. I don't know if you saw it, you can sit with us. So they really do encourage and I'm a Google Developer expert for Angular team. That means that you know, I'm, you should be asking me questions and then I should be answering. So I try to encourage people and I tried to reach out to different communities and try to teach and there are so many resources, but it's hard to know where you can find them.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Well, as we wrap up today's episode we like to share pics of things that we have found interesting or and would like to share. Let's go around the table and share our picks for today's episode. Brian, you want to start it off?

</p>
<p><strong>Brian Holt</strong><br />
Definitely. So my first pick is definitely if you're listening to this podcast and not following ethical, do it. Either stop listening to us or follower like that's my second is a resource for Angular. I really like Todd moto. He's a good dude. Oh, yeah, he runs ultimate angular.io. Is that just Google? Todd moto? Yeah, he's awesome. He's a good dude. He he runs a awesome resource for learning. Angular. My last pick, sorry to veer towards politics again, but Jesus Christ. We kind of I would encourage you all I we've previously encouraged you to donate to the ACLU we'd ran the T shirts for that this week is definitely for the Southern Poverty. Lawson, I would definitely encourage you, if you like your employer's matching or anything like that. That's something to definitely consider.

</p>
<p><strong>Jem Young</strong><br />
That's an excellent pick. They're like just for reference. They do excellent tracking on hate groups and kind of they make decisions about is this a hate group? Or is this free speech? And it's like, which is a really important that his mind is very, very, and there's they're spot on? Yeah, they are. I respect their work very highly. So great pics. Again, my picks are not political, but they're mildly related. My first pick is a company called ElcomSoft. And you've probably never heard of them. They are a Russian company. You've heard of them? I have not Ah, yeah, most I hadn't heard you either. But they are a Russian software company been around for 1520 years. If you go to their website in their product catalog, it is frightening. So I only looked this up because there's a whole incident at the airport where they took guy's phone and which was the government finance and so on. So what their software can do ElcomSoft and companies like that they can copy your entire phone unlock everything, passwords don't matter. I'll just read through some of their offerings. Elcom phone breaker gain access to File Vault to containers iOS, it will break your whatsapp encryption, it will break your iPhone encryption, it will break windows encryption, it will break WPA encryption. These are all tools that I can buy for under $29. Like, and they are Microsoft Certified. They're Intel certified. So like this has been going on for a long time. They say they work with 90% of fortune 500 companies. So it's like there's a whole world of software we just don't know that's scary. I can buy this stuff today. And just like plug in people's phone this library can it's it's extremely scary. Like that's why I want to make people aware that these things exist. So I want to try it. Oh advance into it. Password Recovery. Like it's just insane.

</p>
<p><strong>Brian Holt</strong><br />
Returns Yeah.

</p>
<p><strong>Jem Young</strong><br />
It's very, very frightening. But it's all under the guise of like security tools like security auditing, wink, wink, wink, wink. Yeah, but

</p>
<p><strong>Brian Holt</strong><br />
like seriously, like, I do applaud that they put that out there. And they say like, we can do this. Jesus Christ, you better have like a backup plan for this.

</p>
<p><strong>Jem Young</strong><br />
I encrypt all my stuff, but a lot of the encryption is useless. They can just get in and break it anyways, like very quickly. So

</p>
<p><strong>Brian Holt</strong><br />
that lets you know, like, that's not safe. You need to do something better than that. Right? Like I applaud them for publishing that and just not putting it like just to the government or just to other people, right?

</p>
<p><strong>Jem Young</strong><br />
I'm sure there's 100 Other companies we don't know about that. Make software like yeah, sorry to go off on that rant. But it's just it's very frightening. But if just read the product page, see what they can do.

</p>
<p><strong>Stacy London</strong><br />
Turn off the internet right now really seriously.

</p>
<p><strong>Jem Young</strong><br />
Go live in a cave,

</p>
<p><strong>Stacy London</strong><br />
delete your phone, delete your phone.

</p>
<p><strong>Jem Young</strong><br />
Stop listening. Right now they're all run. My second pick is a company called Private Internet Access. I use them at home. I use it to their fantastic not just for the privacy implications of using VPN. Thank you. Yeah, I don't know. I blanked on that. But I use it for testing as well. It's good to I set it to India and I exit through India to see like the experience that I get kind of delayed See, I get things like that I just jump around the world. Sometimes I'm testing things. It's extremely useful.

</p>
<p><strong>Brian Holt</strong><br />
So I bought a Starbucks gift card and you can enter the code for the Starbucks gift card and that'll pay for it. Nice. Oh, nice. So you can use your Starbucks. I have no idea who the fuck you are. Right? Yes. So and they have like tons of deals like that. So you just like they have no idea who you are.

</p>
<p><strong>Jem Young</strong><br />
They're pretty solid on privacy as well. Like they take Bitcoin they take gift cards, they do not log, their logs are all anonymous. They're very upfront about how they do logging, things like that. So

</p>
<p><strong>Brian Holt</strong><br />
I will I will assert with personal knowledge that it works in China too. Nice. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Very nice. There

</p>
<p><strong>Jem Young</strong><br />
you go. Hey,

</p>
<p><strong>Ryan Burgess</strong><br />
Chico, what do you have for us this week?

</p>
<p><strong>Ayşegül Yönet</strong><br />
I have half an hour right?

</p>
<p><strong>Ryan Burgess</strong><br />
You have half an hour.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Okay, so my new obsession is aerial arts and being upside down. So there's this thing called Yoga trapeze swing, that you can attach it to your roof or any kind of like a pull up bar or anything like that. And you can be upside down anytime you want. You know, you can do other stuff like workouts and stretching all that stuff.

</p>
<p><strong>Brian Holt</strong><br />
This is something I didn't know I needed.

</p>
<p><strong>Ayşegül Yönet</strong><br />
The best ad dollars I ever ever spent it really

</p>
<p><strong>Ryan Burgess</strong><br />
well. Do you have it hanging from your roof? Then I have a pull up bar. Yeah.

</p>
<p><strong>Ayşegül Yönet</strong><br />
And it's hanging from there. Nice. And I can show you pictures later on. But I do lots of aerial arts. I try all of them. And there's so much fun. You should try it once in your life, especially since you're in San Francisco. It's one of the you know, few cities that you could do any of those theater is that Google Home? Just

</p>
<p><strong>Ryan Burgess</strong><br />
you just had to pick that one.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Exactly. You can just ask him to or her to tell you jokes. That's all.

The difference, too? Yeah, it's nice. I feel like it's part of my family. Now.

</p>
<p><strong>Ryan Burgess</strong><br />
It does a lot of cool things. That's for sure. Yeah.

</p>
<p><strong>Ayşegül Yönet</strong><br />
And girl, dog. It's a good one. Yeah. It's a organization nationwide. And we have tons of classes. And we have open source curriculum, which is on teaching, teaching material.org? Yes. So you can take any of the material and then start teaching yourself. You don't have to do a Girl Develop It. But if your region has a goal to have it, work up workshops, do take them, they're really nice.

</p>
<p><strong>Brian Holt</strong><br />
They're amazing. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
A lot of cities to think it's growing and growing all the time.

</p>
<p><strong>Ayşegül Yönet</strong><br />
Exactly. And if you don't have one, you can create one. It's really easy. You got the support, and you got all the curriculum that you need. And for donation of recommend any cannons. It's a local organization in the Bay Area that teach that teaches human trafficking survivors have to code. It's an amazing organization. And you can volunteer or donate.

</p>
<p><strong>Brian Holt</strong><br />
I chose being modest. Like she used to be CTL. Right?

</p>
<p><strong>Ayşegül Yönet</strong><br />
Yeah, for a year and yeah, yeah.

</p>
<p><strong>Brian Holt</strong><br />
So it's phenomenal

</p>
<p><strong>Ryan Burgess</strong><br />
price I've actually picked up before they see what do you have for us, man to

</p>
<p><strong>Stacy London</strong><br />
follow such great pics?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, don't fuck it up.

</p>
<p><strong>Stacy London</strong><br />
I'm gonna totally fuck it up.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, and I always go at the end. So

</p>
<p><strong>Stacy London</strong><br />
my first pick is a Google product. Cheers. called Lighthouse, which,

</p>
<p><strong>Ayşegül Yönet</strong><br />
that's awesome. Yeah,

</p>
<p><strong>Stacy London</strong><br />
just kind of come become aware of. And it does some really cool stuff for letting you know what things you can improve about your web app. It's kind of focused on progressive web apps. So it will give you a lot of warnings if you turn it on. And run it against your site about like, offline abilities. And, but it also has just like general things that are good to do to make your site fast. So I thought that was cool. There's a Google extension for you can also run it in the command line. So that was cool. So you can have it be a part of maybe your whole build process to prevent performance degradation, that kind of thing. So I thought that was a cool, I want to I want to give it a try. I want to like bring it in to my current job and see if we can increase performance. My second pick is a music pick. It's peak magnetic by Clark. I really loved winter Lin. And there's an associated video for that song, which is really phenomenal. A few years back, and he's been producing stuff for a long time. And the song is it's got a lot of layers. So if you have some really good headphones, you can get a good ear candy. I appreciate it.

</p>
<p><strong>Ryan Burgess</strong><br />
So if you listen to last week's episode and chose Brian's pick, which was like the basically an amplifier for your headphones, so that would actually help with that DAC.

</p>
<p><strong>Stacy London</strong><br />
Plus Clark happy

</p>
<p><strong>Brian Holt</strong><br />
formula. Science

</p>
<p><strong>Derrick Showers</strong><br />
Derek 40 of slack to the first one I just

</p>
<p><strong>Brian Holt</strong><br />
said Microsoft, no.

</p>
<p><strong>Stacy London</strong><br />
There's gonna be a fist fight.

</p>
<p><strong>Ryan Burgess</strong><br />
Eventually,

</p>
<p><strong>Brian Holt</strong><br />
we will repeat

</p>
<p><strong>Ryan Burgess</strong><br />
video for that.

</p>
<p><strong>Derrick Showers</strong><br />
My first pick is not Microsoft IT is a storage solution which unfortunately is only available in the bay area so I apologize for everyone else but hopefully it expands but I was looking for storage has moved to a place in San Francisco apartments tend to be pretty small. So I was looking for a place to store my stuff and found this thing and the difference with them is they actually will pick up items like on an individual individually so you can give them a pair of shoes or you can give them a bike or you can give them a golf bag. And

</p>
<p><strong>Brian Holt</strong><br />
the most San Francisco

</p>
<p><strong>Derrick Showers</strong><br />
it's really cool and they they take it and they photograph it and they it's obviously on an app and then you can lend it to people so you can actually just go and select the item and they they will drop it off at you know as long as they're in the bay area or they will ship it outside of the Bay Area if you want you to borrow your shoes. Shoes might be a weird one but

</p>
<p><strong>Jem Young</strong><br />
that's gross. What's it called?

</p>
<p><strong>Derrick Showers</strong><br />
It's called Omni and my second pick is kind of a troll pick but I got to pick it is for net If you haven't tried it, you should it's

</p>
<p><strong>Jem Young</strong><br />
no you should not. So

</p>
<p><strong>Brian Holt</strong><br />
I would say for the people here right now have a hangover. More or less connected to fernet.

</p>
<p><strong>Ryan Burgess</strong><br />
It's disgusting.

</p>
<p><strong>Derrick Showers</strong><br />
It's 100%. For you. And yes, it's a digest is

</p>
<p><strong>Brian Holt</strong><br />
to just people just Devo. Thank you

</p>
<p><strong>Ayşegül Yönet</strong><br />
random fact about is its determines the price of saffron in the whole world because it uses 80% of saffron and the whole world.

</p>
<p><strong>Ryan Burgess</strong><br />
That's too funny. That is crazy.

</p>
<p><strong>Derrick Showers</strong><br />
The other random fact is that San Francisco is the largest consumer of furniture.

</p>
<p><strong>Jem Young</strong><br />
No,

</p>
<p><strong>Ryan Burgess</strong><br />
it is. Yeah, but I could see that because I didn't even hear of it until I moved to San Francisco. So

</p>
<p><strong>Brian Holt</strong><br />
yeah, so I saw all over Italy. Okay. So,

</p>
<p><strong>Stacy London</strong><br />
like soak a bunch of Twizzlers, black licorice and water. And that's a chicken. It's pretty

</p>
<p><strong>Brian Holt</strong><br />
close.

</p>
<p><strong>Ryan Burgess</strong><br />
Maybe some vodka or some you need some booze in it. So yeah, but

</p>
<p><strong>Derrick Showers</strong><br />
you get the health benefit.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. All right. So I have two picks, since we're talking about Angular. And if you're wanting to learn Angular, I actually saw the Engie cruise,

</p>
<p><strong>Brian Holt</strong><br />
which I should go to speaking. Yes. And I did

</p>
<p><strong>Ryan Burgess</strong><br />
see that. So I was like that isn't gonna be one of the coolest conferences ever. You're on a cruise, listen to great people speak going to the Bahamas. Like honestly, I take lots of pictures. It's in what may? end of May or

</p>
<p><strong>Ayşegül Yönet</strong><br />
Sunday, May 29. The first day of May. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
There you go. So I had to pick that I was like, that's too good. I'm not going unfortunately. But I can't and at that time, or else I totally would.

</p>
<p><strong>Brian Holt</strong><br />
There are tickets left?

</p>
<p><strong>Ryan Burgess</strong><br />
I think so. Yeah, there are I was on their site earlier and it did still say buy tickets. So ask Uncle Netflix. Yeah, see, Netflix can sponsor you to go to that anymore

</p>
<p><strong>Jem Young</strong><br />
cruises for for all things. I'm available for those for speaking.

</p>
<p><strong>Brian Holt</strong><br />
myself for this episode.

</p>
<p><strong>Ryan Burgess</strong><br />
My second pick is a app called astral, it's a way to organize your GitHub stars, which I thought was amazing. I've always struggled with that I always star a bunch of things. And I'm like, I'm gonna go totally look at them. What you can do is it pulls in your GitHub stars that you've liked, and you can organize them by categories and everything like that. So I thought that was pretty cool.

</p>
<p><strong>Brian Holt</strong><br />
Like, like things let people know like, I like your

</p>
<p><strong>Ryan Burgess</strong><br />
ship or not. But there's times when I want to, like go back to something and like, you know, favorite it and start or whatever. I start, you start too much ship quotes. I'm pretty sure I probably have 1000s of stars

</p>
<p><strong>Derrick Showers</strong><br />
as well. Because that was always my problem. Twitter had their favorite. Yep. Right. Because I was like, Well, I want to like this. I don't want to go back and look at it. I just want that person to know that

</p>
<p><strong>Ryan Burgess</strong><br />
you almost need another feature for that like save and like or just the like I like but there again, this app will help you organize it if it's just literally Brian being nice and starring it and saying I like that it can he can put that in a category. All right, before we end the episode, I want to thank I should go for joining us and being a guest. It was a pleasure having you on Thank you for having me. How can people get in touch with you?

</p>
<p><strong>Ayşegül Yönet</strong><br />
My twitter name was my first name and last name. I should give DNS which was super hard. So I changed it to ice something Ayas something.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh

</p>
<p><strong>Ayşegül Yönet</strong><br />
yes, it is.

</p>
<p><strong>Ryan Burgess</strong><br />
And thank you all for listening today's episode. If you've been enjoying the podcast, please rate us on iTunes. let other people know about how great the podcast is or how bad it is. You know, maybe you're sick of us. Yeah, it's okay. It's fine. does help other people discover the podcast and like us on Facebook and follow us on Twitter at front end. Ah ah

</p>
`;
        return transcript;
    };