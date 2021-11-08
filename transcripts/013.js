module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
All right, welcome to the 13th episode of Front End happier. In this episode, we'll be talking about the future of JavaScript. To help discuss this topic, we're joined by special guests Jafar Husain from Netflix jofra Neva for brief introduction to yourself who you are, what you do and what your favorite half your beverages?


<p><strong>Jafar Husain</strong><br />
Yeah, sure. Thanks, Ryan. My name is Jafar Husain, As Ryan said, I'm a the architect of Falcor, which is an open source data API that Netflix has put out. And I do. I'm also a Netflix representative on the TC39, which is the JavaScript Standards Committee, where we're working to advance interesting proposal for asynchronous programming, see observable type. And I help out at Netflix with parachute into UI teams. And so to help out with architecture stuff, and that's kind of my rule over there.

</p>
<p><strong>Ryan Burgess</strong><br />
You're helping us all the time.

</p>
<p><strong>Brian Holt</strong><br />
You didn't see but there were air quotes around the house.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, let's also go around the table give brief introductions to the panelists. Brian, you want to start off?

</p>
<p><strong>Brian Holt</strong><br />
My name is Brian Holt, and I'm the administrative assistant to Jabra saying

</p>
<p><strong>Ryan Burgess</strong><br />
sounds like a pretty fun job.

</p>
<p><strong>Brian Holt</strong><br />
I like

</p>
<p><strong>Ryan Burgess</strong><br />
Derek.

</p>
<p><strong>Derrick Showers</strong><br />
Derek Howard, UI engineer at

</p>
<p><strong>Jem Young</strong><br />
LinkedIn, Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a UI engineering manager at Netflix. So before we get started into today's topic, each episode, if you've listened in the past, we like to choose a keyword. And if that keyword is mentioned, we will all take a drink. So what did we decide today's keyword is future future? So anytime we say the word future from now on, we will all take a drink. All right. So I know Jennifer, you had recently gone to a TC 39 committee meeting. Thought it'd be interesting for you to share kind of what's what are some nice updates from TC 39? Yeah,

</p>
<p><strong>Jafar Husain</strong><br />
I think one of the more interesting proposals least from my perspective, and last cc 29 was promised cancellation, as has been along on a lot of people's radar for a long time. Obviously, promises are really pervasive nowadays. And increasingly, they're being used in like web standards, we see an ESX while API's have started to use promises, but there's always been a big gap there with promises, which is that once you create a promise, you can't just cancel it because well, it's a promise. And that'd be breaking a promise. So we're stuck with this sort of this model. Interestingly enough, you go back to Promises, promises were actually introduced. And they had initially to sort of talk about like network, guaranteed network delivery. And I always thought it was kind of interesting that they ended up getting applied to user interfaces, because probably the if you think about server programming, and you make a network request, usually you don't really want to cancel it, it's not something that comes up very often in network programming, you might let a timeout that fails, right, which in which case is just considered an error, a timeout error. But the notion of sort of canceling and switching to something else, it's just not something new. It's not a metaphor that you see on the server a lot. Whereas in user interfaces, users are like super fickle. They change their minds all the time, right? They see a pinwheel, or they see like a loading bar, and they get bored, and they head back. And so you have to figure out how to express that. And some people think the right way to express that is like cancellation and the debate at the last committee meeting. And it's been going on outside the committee as well as like, does that mean promises have like a new third state like canceled? Or do we actually express cancellation in the way that people say we'd express a timeout on the server, which is to like, throw an exception. Both of those have like trade offs. And and that's the it seems like the committee is actually moving from considering a third state for cancellation, which a lot of people like which a lot of people that was really nice and clean to actually creating a new type of exception, a cancellation exception

</p>
<p><strong>Ryan Burgess</strong><br />
should be called the lie.

</p>
<p><strong>Jafar Husain</strong><br />
The dirty lie.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's not a cancel. It's a lie.

</p>
<p><strong>Derrick Showers</strong><br />
Promise dot lie that.

</p>
<p><strong>Jem Young</strong><br />
You tell us like what is easy?

</p>
<p><strong>Jafar Husain</strong><br />
Oh, yeah, sure. Yes, it is a secret of cabal of No, no, it's not. It's actually a it's a collection of implementers like browser and browser makers, and also people out in the community. So some, some are framework authors, right? People like representative, some Ember and Angular and react are on the committee. But of course, the browser makers and people from the node like it's actually really, it's, it's really great, because you have also had people who've been working in the industry for like, 20 years doing security. And people who have been thinking about concurrency for 20 years, we've got like, experts, and it's so cool to be able to sit across from these guys who like are tremendous experts in their field. And they're bringing that expertise to bear now in the web platform, which everybody there we all just care a hell of a lot about the web platform and open standards and that type of thing. So that's a really cool environment. To be around, you can talk to some people afterwards and pick their brains about some stuff. So that's that's the TC 39.

</p>
<p><strong>Derrick Showers</strong><br />
How many people are usually me 39?

</p>
<p><strong>Jafar Husain</strong><br />
Actually, it's about right now. When I started coming, maybe it was about a year, two years ago, there was probably 20 people that showed up. And at the time people were bitching about, maybe that's just a bit too much. And now we're probably about 40. And I don't think that's bad. I think that's a reflection of the fact that we're just doing more like the web platform is accelerating and expanding, and more people are investing in and therefore have a vested interest in it. So I don't know that that is a bad thing. I think it's a good thing. It's just a hell of a time booking meeting rooms. That's all it is. How often do you meet we meet every two months. And actually, the next meeting is at Netflix. So I know a couple people who are Netflix, who were excited to attend one, I think there will be not warranted. A lot of committee were like, so don't misunderstand me a lot of committee work is super interesting. And I think it's really interesting to see how the web is done, right. But to some people, they don't like spending 12 hours talking about the binding precedence of the exponentiation. Operator. And like, that is a thing that happens

</p>
<p><strong>Jem Young</strong><br />
very fast.

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, like,

</p>
<p><strong>Brian Holt</strong><br />
I just want to heckle, I just wanna say, You heard us, or something like that. Just getting like you could

</p>
<p><strong>Derrick Showers</strong><br />
bring up tail calls. And

</p>
<p><strong>Brian Holt</strong><br />
yes, just like lob that grenade in there. What about proper tail calls? Yeah, that

</p>
<p><strong>Jafar Husain</strong><br />
was actually, I mean, that was literally 12 hours at the last meeting. The one before this in Munich was 12 hours of talking about proper tail calls. And it's funny, because, you know, it's like, the thing that sucks about being on the committee is that you lose the ability to heckle because I used to be like, Ah, those committee members interesting what the hell they're doing, like, clearly, you're just gonna do that, right. And when you're on the committee, you realize there's like, there's not just two sides to that issue. There's like six sides to that issue. And that's actually the thing that I think I feel the most profound sense of loss about the ability of just being able to pitch and ignore.

</p>
<p><strong>Ryan Burgess</strong><br />
Pitch, because you're just pitching it yourself. Yeah, exactly.

</p>
<p><strong>Jafar Husain</strong><br />
Like, committee.

</p>
<p><strong>Ryan Burgess</strong><br />
I'd be interested to, to even walk through features actually presented to the committee and kind of going through like, there's obviously various steps. But yeah, how does like something that you've chosen that you really feel passionate about? Maybe it is like canceling promises. But how does that go into play?

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, I mean, actually, there's a lot more processor on this than there was when I joined two years ago, the process has become formalized and sort of like beaten into place. And it's, I think it's pretty good. Now, it's still being debated. There is not a single meeting, which are where we don't like look up the definition of stage two, sorry, to rewind a little bit, every proposal has to make its way through five stages. Like it's five stages. And every every stage has like exit criteria. And basically, you meet that exit criteria. It's also a consensus model, which is to say that it is technically not, you don't need like 100% of people to say, yes, there is like no formal governance in the sense that like everybody takes a vote. In general, if somebody has a very strong objection to a feature that will be considered by the committee. And historically speaking, if somebody we've had this expression, like if you're willing to throw yourselves on the tracks to stop this feature from happening, and most of the time, people, while they might have strong objections, if they find themselves in the minority, the consensus models work generally. Well, now that's worked well with 20 people, and it continues to work pretty well with 39. At some point, if there's a lot if we continue to scale, this informal sort of consensus system may not work. But yeah, that's pretty much how it is like, there have been times where people have just said, you know, what, I'm just 100% against this feature, I'm not letting it through. And so it's incumbent on us to work behind the scenes very often, it's not, not back channeling, it's often in open forums, like in GitHub issues and that type of thing. And sometimes you're just calling up somebody and talking with them. If you have somebody who's really opposed to your feature has strong concerns about it, talk with them about it, and try and get them on your side or work together to alter the proposal.

</p>
<p><strong>Brian Holt</strong><br />
Just Just wait till I'm on TC 39 Nothing. You want that fuck you.

</p>
<p><strong>Jafar Husain</strong><br />
Not happening? Well, you know, the interesting thing is, right, people have said this, like, there are rarely committees that come together and are just like, well, we're done. Let's go home. Right. The interesting thing about this committee model is that JavaScript will likely continue to grow. And there are people who have objections to that, like there's people from like the scheme school where they're like, unless then the language, you know, specification fits in like 10 pages, it's too complicated language. I think personally, I've come to accept that all the really popular languages, whether it's Java or C sharp or JavaScript, they're just gonna continue to grow because people use that and that's not a bad thing necessarily. I think it can like if you're in it for the elegance and purity of the language then go back to scheme Yeah, go back to scheme five not not six the version they sold out. Yeah. Yeah, I like I think that's you know, it's hard in the end languages aren't you know, about aesthetic purity and about getting stuff done. And so,

</p>
<p><strong>Ryan Burgess</strong><br />
a couple episodes ago, we talked about transpilers and kind of felt that, that those actually can help drive some of the features that actually make it into JavaScript special

</p>
<p><strong>Brian Holt</strong><br />
future features. You said

</p>
<p><strong>Jafar Husain</strong><br />
twice, actually,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, cheers. Yeah, I'm interested to know, like, if that does help get features in because now people are actually using them out in the wild, even though they're transpiled.

</p>
<p><strong>Jafar Husain</strong><br />
Transport, like transportation has been huge, absolutely huge for the committee, right. It's not just for developers. For us. Previously, the model was, we would release a certain feature behind flag a compatibility flag, right, and somebody would have to activate it. But understandably, developers weren't very enthusiastic about trying features that they couldn't really release into the wild. And they couldn't, even if they didn't try and how much really valid feedback and they give us. And so transpilers really broke that cycle, where now we can like propose something. And with this do the staging system we can signal to users as part of the staging system is to signal to developers, just how much degree of confidence we have, this language feature isn't going to change, and will indeed make it into the spec. And that's to really signal them, so they can start using it. And this is become an awesome virtuous cycle where they try the feature, they can let us know if it's working out, we can tweak it. And they understand that they're accepting a higher degree of risk when they turn on that flag, right. And the higher the risk, the lower the feature stage, the higher the risk. Somebody who's had my proposal change dramatically, like in the last year, and year and a half, those early stages, they're a big risk, folks. But you know, that's you're absolutely right, it has been

</p>
<p><strong>Ryan Burgess</strong><br />
great. So that proposal, which feature you difference here,

</p>
<p><strong>Jafar Husain</strong><br />
right, I'm referring to the observable proposal. And an observable for those of you out there who are familiar with iterables iterables, are introduced in iOS six. And the notion behind an iterable is that, you know, you can have any collection interface, like a sad or an array, implement the iterable. And it's basically something you can walk up to and use the new for of loop to just sort of pull values out consecutively until you finally get messages you're done. And the interesting way to understand observables, it's like it's turning that that whole thing inside out. So instead of a consumer saying or producer, give me another value, give me another value, give me another value. And the producer finally saying no more values, it's actually instead of a consumer pulling values out, it's a producer pushing values at the consumer. So is that the consumer says hey, here's a callback, and the producer just keeps pushing values at them, until finally there's no more values. And then it says, Hey, by the way, I'm done. And so that's that's one way of understanding the observable, it's sort of like do the push version of an iterable. And the reason that's cool, that's what's a basic data type. But the reason it's cool is for the same reason, iterables are cool, which is that all of the combinators, like that you see an underscore, like map and filter and reduce all those combinators, which, you know, we can do over things like iterables. And over arrays, you can also do over observables. And so it's a very cool and powerful thing to be able to build event driven systems in a compositional way. And that's really kind of what we're trying to do now. You can do all that stuff in npm. I mean, the reality is any feature that's kind of being introduced into JavaScript, the first question should always be, but why does this need to be in JavaScript, because NPM is a thing. And it's a really awesome, powerful, accessible thing. And if you think you have a great model for something, you know, we just published an NPM. So why put it into the web platform? Well, the reason why we'd want to put this in the web platform is that we have a use for it in the web platform for the same reason, frankly, we put promises in the web platform, we have we, the standards, developers want to develop API's that use these types. And right now what we have is event target, which for those you may or may not know is the add event listener, remove event listener kind of pair, which is definitely easy to understand. I think a lot of web developers are familiar with it. But it is generally understood to be everybody by everybody. It's just a terrible, terrible clunky API. And, you know, since you can't reify an actual object that represents that particular event stream, you can't put methods like map and filter on it. And so it's not very capable. And so that's really the the API that we're aiming to sort of, if not get rid of make it easy to take any event target API and have web standards writers actually, like make it also available as an observable. And I think gradually, we're going to wean people off that into a much better interface, which is the observable

</p>
<p><strong>Ryan Burgess</strong><br />
one it's funny, too, because I want to correct me if I'm wrong, but one of the big benefits to with observables is that they are cancelable. And we're versus something that we were just talking about with promises is not cancel at this moment. Yeah. And so if observables were in the spec, do we actually need to have promises cancel?

</p>
<p><strong>Jafar Husain</strong><br />
Well, I think it's unavoidable that we're going to have promise cancellation, because we've just invested so heavily in promises. There's such a, I mean, like the probably the biggest example here is fetch the Fetch API, right. For those you don't know, the Fetch API is an API, basically, like a one liner you can write to get to make HTTP requests, like and it basically replaces XML HTTP requests, which is just another terrible, clunky web API. It's been with us like forever that I have to look up every single time I use it right on I have no idea how this thing works. Yeah, I mean, fetch is unquestionably a huge improvement. Oh,

</p>
<p><strong>Derrick Showers</strong><br />
yeah. Right. What's the support around that? I looked into that a little bit a little while ago, and I like, use it but I don't really know. Yeah, it's well supported is it's

</p>
<p><strong>Jafar Husain</strong><br />
certainly a very modern browsers. Yeah, yeah. At this point, I'm, I mean, don't quote me. I'm pretty sure that's true.

</p>
<p><strong>Brian Holt</strong><br />
tweeting it right and ship it.

</p>
<p><strong>Jafar Husain</strong><br />
Sorry, guys, or at least the version yet to be released that's like, you know in beta will support it fetch. I mean, fetch is a huge win, right? It's a huge win. So I'm sure it's going to be supported, I think. But if you recall, XML, XML HTTP requests had an abort API, right? If you just didn't want it, you want to cancel that rapper web request, and not get sick, you know, not get called when that web request arrived, you can just abort it. And we really lost that capability when we when fetch started returning promise. And so that's what people are really after replacing, I don't think observables are going to replace promises. I mean, I think promises are going to be around. And actually part of the big thing we're doing right now is looking at, hey, actually taking the way that observables do, quote unquote, cancellation another way, I think a more accurate way to say it is, instead of really cancelling an observable, you can just unsubscribe from it. But a producer can see when there's nobody listening, right? And they can just be like, well, there's trees falling in the forest, but there's nobody around to hear it. So I might as well just not cut down, right. So that's how observables handle cancellation, it's really more of that. No, they can just figure out if nobody's watching, and then they can decide themselves to cancel. But there's no guarantee necessarily of cancellation promise cancellation. There's no guarantee either, frankly, but it's more phrased in the concept of like cancellation is, as I'm going to stop some side effects. And you know, that type of thing, right. So, right now the committee is encouraging me to try and frankly make both of these things cancel the same way. So they want to have a common mechanism of cancellation for observable and promises. And that's probably the least the mechanism by which that's being proposed right now is this thing called cancellation tokens. And long story short, cancellation tokens are like just shared state, they're like a big think of it as a big object with a Boolean that says whether something's been cancelled. And if you're writing an async function, which is this new, handy syntax for working with promises asynchronous functions being added in the new version of the upcoming version of JavaScript, you can just basically every function, you call that returns a promise, you can pass this cancellation token in. And whenever they're, you know, they're doing something asynchronous, they can just check the cancellation token, see if it's canceled, and if it's canceled, then throw a cancellation err. And so that's the way in which this is sort of being talked about, it's basically very similar to how dotnet does cancellation with tasks which are like the dotnet version of promises. Basically, that's where we, that's where they drew inspiration. And that approach has some, you know, some pros and cons. But the idea would be that you would hand an observable, a cancellation token at the same time as you gave it your callbacks. And then it would make sure to check that cancellation token before delivering any values.

</p>
<p><strong>Ryan Burgess</strong><br />
As you're talking about observables, which kind of comes to mind, and maybe I'm wrong, I'd love to hear your thoughts on it. But using observables could also kind of get rid of having to use something like a state machine, I'm assuming that you could almost a lot of that functionality would cover your basis.

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, I mean, there's actually a lot of state that you can get rid of with observables. And it's, it's not really not dissimilar from like, how map or for each the for each function on array gets gets gets, you get sort of a state for your counter and accounting for loop, right? You everybody's done that counting for a loop, or you create a variable and initialize the counter to zero and then keep incrementing it, what you're doing with a method like for each is that you're like moving the state inside of that. And that's the same thing with map and filter, all of those things do iteration. And there's some state inherent an iteration. But basically, you're doing you're not really getting rid of state, but you're doing the next best thing, which is you're making it somebody else's problem. And that's like, my favorite thing to do was get it right, make it somebody else's problem. And then you gradually as you move more and more your state into these special methods like map and filter and reduce, you find that there's very little state in your code, you move the state and the methods that have all been presumably been really well unit tested. And in that sense, instead of having like, a set of instructions were like, think about a drag and drop, for example, right? Well, you have to hook up to a mouse down, and then you hook up to, and then when the mouse down happens, you hook up to the mouse move, but then you unhook from the mouse down, instead of thinking about things really mechanistically like that, you can just sort of declare exactly how that flow all works together, like I want all the mouse moves between the mouse down the mouse up, and then you know, just let the the the library and the, you know, like, not unlike an underscore, like library over this observable type worry about that stuff for you. So in that sense, yeah, you can get rid a lot of state and your programs.

</p>
<p><strong>Brian Holt</strong><br />
So I want to ask you, what's your opinion about cancellation tokens? Do you think it's a good idea? Bad idea.

</p>
<p><strong>Jafar Husain</strong><br />
So cancellation tokens are definitely a I think they're annoying. I mean, like, let's face it canceling, like having to add an argument to each one of your methods and then explicitly thread through this thing along every single one of your functions is not particularly elegant, right? But you know, what, if I've learned the importance of something that's easy to explain, it is really easy to explain to developers. It frankly, I think a lot of people would have preferred that promises have built in cancellation semantics, which then all the various functions like then and promise dot all would worry about plumbing through so that you didn't have to explicitly pass this cancellation token, right? Because it's totally possible alternate proposals for promise cancellation would have been you just call cancel on the promise that you have and then it would just be Enough everything. Right. And that's not on that's not unlike what you can do with observables. I think that would have been my preferred model. I think it's just it's very clear that that no such approach was going to get consensus in the committee. Because the reality is, and even the word promise, right? It's hard to try and rationalize that, at least what some people's designs are on the promise with that capability of just being able to cancel.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I think I prefer promises where they are, like, their promises you call an API, it does something that gives you back whatever you're looking for, right? Like it's, it's immutable, it doesn't change, you have to worry about who else is consuming the promise, right? Like, it's just you pass on a promise value. And that is a promise. And if you want to implement cancellation semantics, you can do it in userland. Right? Like, I feel like you don't need to necessarily have the cancellation semantics built into the promise.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, people are using without cancellation right now. And no one's done

</p>
<p><strong>Brian Holt</strong><br />
it maybe.

</p>
<p><strong>Jem Young</strong><br />
Switching gears of it, I'm a feature have I seen it? Yet? For optics, you know, similar to the Elvis operator, and groovy, just like using it all the time? Yeah, it's like modeling that data, that flow of any part that doesn't exist and returns like, I'd love to see that. How can I make that?

</p>
<p><strong>Jafar Husain</strong><br />
Well, I am certain that this has been discussed in the committee. I don't remember being within earshot when it was discussed. The my best guess as to why it hasn't happened in JavaScript. And I do not know this for certain my best guess is that the like, the the zero value for JavaScript is maybe not obvious to everyone in the sense that what would you expect for dollar sign dot? For a property lookup, for example, like, what would you expect to return? If it wasn't there? Or dollars? Or sorry? Question mark, question mark, question mark got like a nested question mark. Sorry, for those who don't know, I'm talking about right, the question mark.is. Okay, give me this property if it exists, but if it doesn't exist, go ahead and give me undefined? Or no, or who knows. Right. And I think that's one of the reasons why it's a little harder in JavaScript. I've also heard concerns about usability. And so like the, I think the problem that people are talking about is I've got this arbitrary JSON message off the web. But I want to pull off this property that's nested, like five levels deep, but I don't have to write if not equal, no, if not equal, no, like five times right? Five nested one of those statements. And the question mark dot operator would allow you to do that by basically propagating the notion of undefined, like several layers deep. So if any part of that expression is undefined, the entire expression evaluates to undefined. It's interesting that you use that a lot. Because I think another concern other than the question of what it returns because maybe a lot of people just say undefined. Is that's what you'd say, Brian, any anybody else would disagree? Say no. Or I hear I hear I know. So even in that queue, it's we can't even be consensus with these five years. On the undefined camp, but yeah. Take a position, man,

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like you need to side with gems.

</p>
<p><strong>Jem Young</strong><br />
Like whatever piece

</p>
<p><strong>Jafar Husain</strong><br />
out on future. So, I mean, I think that's one issue. And another ergonomic issue I've seen, and I don't maybe if you run into this while you're using it is that let's say you do find out something's undefined, right? Sometimes people want to do something, depending on what area of the object is undefined. Now, you can totally make the argument that well, they just use that for that. Right. And I think that's valid. But I think there's probably a question of adding in terms of adding more operators, I think there's probably also an issue of just language complexity. There was recently somebody brought this up around using the bind operator, which some people might not be familiar with. It's a proposal to allow you to use a method that just happens to be in scope, as if it's an instance method. So like, you've got a method and it normally accepts a value as like, it's supposed to be used like an instance method. But you don't want to put it on the prototype and modify the prototype, you just want to be able to pass in whatever the thing is, as an argument. But then unfortunately, we get in this case of like writing, the first thing we want to do last, basically, we code inside out, right? And we want to be able to just go dot, dot, dot, dot, look left to right, and code how we want things to happen left or right in the world, right? Unless you're Arabic, that's probably like the way in which you want to do it. So the bind operator allows you to just go at least the proposal was at one point colon, colon, so you could like go require in the map function, and then you go observable colon colon map, right, or some iterable colon colon map, and and then you you know, you'd be able to use it, like an instance method. Well, one of the concerns raised about that was like, how many of these operators are there, I think gonna be confusing for developers, right? I think there's always a concern about the surface area, the language, I think it's going to inexorably grow, but how much value does that feature really give us versus what we could use that syntactic space for? For something else? Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
The colon the colon colon. Oh, I hate it.

</p>
<p><strong>Brian Holt</strong><br />
I'm cool.

</p>
<p><strong>Jem Young</strong><br />
It's like it's completely arbitrary. The

</p>
<p><strong>Ryan Burgess</strong><br />
first time I saw it, I honestly didn't understand it. Like I mean, it's it's easy enough to understand but see It was like, This is bizarre. Yeah. I think you nailed it by saying it didn't feel JavaScript.

</p>
<p><strong>Jem Young</strong><br />
Interesting.

</p>
<p><strong>Brian Holt</strong><br />
I touch all syntax by initial gut feeling. I don't get this Fuck this.

</p>
<p><strong>Ryan Burgess</strong><br />
The arrow function now that was cool.

</p>
<p><strong>Brian Holt</strong><br />
Like, yes, I love it. The first time I saw that was in CoffeeScript, which I also said, Fuck this.

</p>
<p><strong>Ryan Burgess</strong><br />
I think we all decided CoffeeScript fuck. So gem kind of had brought up to have like wanting to implement something into JavaScript spec. How can the community affected TC 39 decision? Like our help influence it?

</p>
<p><strong>Brian Holt</strong><br />
Where do we make the sacrifices?

</p>
<p><strong>Jafar Husain</strong><br />
Well, the reality is we work on the Champion model, which means well, frankly, first of all, you have to be it, you have to find the champion on the committee, right? So we don't like we don't take just open source proposals. And then because somebody has to be in the room advocating for it. And because we're part of ACMA, there's certain rules about who can't who and who can't be in that room. Basically, you have to be part of a member, you have to be a member of ACMA to actually be in the room, or there's some rules about invited guests. And I don't want to comment too much on those because I don't remember all those rules. But there's a lot of rules involved in being on this particular standards committee. And the reason why we're on ACMA is, you know, historical and kind of weird and funny, but I mean, it's, you know, we have it's a standards body, we're there that we have to obey those rules. So it's it's not, it's not a completely open process, right, we take minutes. But because the champion model you need to find basically the first step is find somebody on the committee, you can champion champion proposal,

</p>
<p><strong>Ryan Burgess</strong><br />
and then bribe them with like, scotch scotch, and whiskey

</p>
<p><strong>Brian Holt</strong><br />
or Fiji water. So how you feel about question mark dot, then I guess that's John's question.

</p>
<p><strong>Jem Young</strong><br />
It doesn't have to be that I mean,

what am I the backwards compatibility like Chilean because like, we can't just do object.js Because that could break someone else's

</p>
<p><strong>Brian Holt</strong><br />
features on point. What about us super strict? strictest stubble

</p>
<p><strong>Jafar Husain</strong><br />
extra super? Yeah,

</p>
<p><strong>Jem Young</strong><br />
a built in game would be just awesome. Like underscore, underscore, get

</p>
<p><strong>Jafar Husain</strong><br />
underscore underscore yet. You mean for like Sorry, underscore underscore GET. That's not the same as the like underscore

</p>
<p><strong>Brian Holt</strong><br />
dot get for lodash. Right. Yeah, that's that's what I'm

</p>
<p><strong>Jafar Husain</strong><br />
underscore doc. Yep. Sorry. I'm not familiar with this one. Is it for a forgiving? Oh, that's an expression? Yeah. Oh, yeah. I mean, but you could always introduce a new operator, and then, you know, write a meta transpiler for that. Right.

</p>
<p><strong>Jem Young</strong><br />
That's true. Yeah.

</p>
<p><strong>Jafar Husain</strong><br />
That'd be the way I would probably

</p>
<p><strong>Brian Holt</strong><br />
guess. Yeah. Open an issue on the TC 39. GitHub. Right. Probably a good place to do it, too. Yeah. I

</p>
<p><strong>Jafar Husain</strong><br />
mean, you need to start proposal and that proposal. The reality is, it's it's a lot of work moving a proposal through those five stages, it's pretty onerous the requirements as well, it should be right. So you need to be dedicated, you need to find somebody who's willing to dedicate a good amount of time to moving any proposal. I've seen, like really trivial proposals take a tremendous amount of work like stuff that actually I believe that there were some committee members who were just like, basically trying to get an idea of like, the minimum amount of effort to move something through. And I'm sure that's why they propose certain things like that generally useful, not super important, like municipal enough to make the bar. But really, it's just sort of a test to see how onerous it was to get to the process. I think a radon includes, which some of you might be familiar with. Yeah, right. That was like the simplest proposal like, yeah, obviously, we should have that.

</p>
<p><strong>Ryan Burgess</strong><br />
Right. Like there should be no one disagreeing with Yeah.

</p>
<p><strong>Jafar Husain</strong><br />
It wasn't terrible. But I mean, it was it shouldn't

</p>
<p><strong>Brian Holt</strong><br />
be plural, though. Include not include include.

</p>
<p><strong>Jem Young</strong><br />
That was like dubious to me, because I can just do that easily, not easily.

</p>
<p><strong>Jafar Husain</strong><br />
I mean, I could totally get into why the exponentiation operator was controversial. Like, I just feel like that's the type of minutia where people think they're interested, and the vast majority is not right. And it's like, if you, if you come to a meeting, you're gonna tune out, I love where we netted out on it. Where we netted out on it is better than I think most programming languages do. Like, the reason why we had a debate about it was that most popular languages, what they do with the exponentially exponentiation operator is going to make sense until it doesn't. And then what we did with JavaScript is we made it really explicit. I think, the more interesting what larger question, though, is really what belongs in JavaScript and what doesn't, right. I mean, that's really a form of what we're asking here, what really belongs in the world's most probably most popular and prevalent programming language, right. And even just as recently, as last meeting, we were talking about, like, hey, maybe we can bring in these general purpose math operators, like, there was some people doing a lot of stuff with robotics. And there's a lot of math operations that come in really, really handy. And I heard somebody was trying to talk about like, oh, well, you know, I mean, let's just say like, the extreme thing is, let's just take whatever is in Ruby or Python and just dump it in. Right. And that's pretty extreme. Right?

</p>
<p><strong>Brian Holt</strong><br />
And some people monkey patch everything now.

</p>
<p><strong>Ryan Burgess</strong><br />
Like, that just sounds like a bad idea. Yeah.

</p>
<p><strong>Jafar Husain</strong><br />
I mean, you know, the reality is, could we have more such operations? Yeah, there's probably like more that are useful to put in there. But I think cooler heads prevailed. I think David Herman was David Herman. And he was just like, we need to come up with some sort of formal test, right? We need to come up with some way of deciding what belongs and what doesn't belong. I heard one person say, oh, that's math. And that's physics. Like to differentiate the operators like, maybe we stick to the math as if physics is not, you know,

</p>
<p><strong>Brian Holt</strong><br />
like a physics object. So there's like math or physics, Euclidean distance. There's something like that

</p>
<p><strong>Jafar Husain</strong><br />
part. And but here's, there's actually to be very specific, I think one of the tests that they applied, which was really interesting was, well, if we can get a fast path into hardware, which is a very practical thing, right? Like if, if you can come up with an operate if you can create a function or an operator for something that allows the compiler to more effectively optimize it, because it matches up with, you know, an instruction set that's available. Exactly. Right. So there's an interesting question of like, what we should put in the in the language, it's basically to bake it better mirror the hardware capabilities. And I thought that was a really interesting test for what should make its way the JavaScript, probably a little more judicious than whatever, whatever Ruby has.

</p>
<p><strong>Ryan Burgess</strong><br />
So you, we talked about how how long something takes to get into the spec. I feel like observables is one of those ones that has taken forever. It has. Why is that? Well, and

</p>
<p><strong>Jafar Husain</strong><br />
I think certainly when I started the process, I was I was pretty frustrated, I thought observable was a slam dunk. But I think the committee pushed back on it. And primarily because they wanted to be able to have a single story for asynchronous programming and observable and basically have a set of primitives that all work really well together. And like what they what what they wanted to understand was, how do you do IO? is observable a good good type for IO, for example? The answer's no, not really, actually, it's not really good. It's not really good type or asynchronous IO. If not, what is it good type or asynchronous IO? And how do these things compose? Can they adapt into each other? How do they how does how does that compose with promises? And so what the committee came back and said, is like, slow down, just pump the brakes, figure out how like, presented with a set of asynchronous types, and prove that they all work together, and then we'll move those in lockstep through the committee process. In general, it's frowned upon in the committee to take proposals and couple them together. But the reality is, some proposals are just coupled, and you're going to get better outcomes if they are coupled together. And in this case, I, you know, I was frustrated that because I felt like a higher bar is probably applied to observable than nearly all the proposals I've seen, not all, but nearly all, but I have to agree with that statement, really, overall, that we're gonna get the best outcomes. If we just have, instead of me thinking about individual pipes, we think about the async story, and that's why now we're going through a whole, you know, set of design. You know, we're redesigning really around the proposals for cancelable promises to make sure that cancel promises, the way you think about cancellation for observable, and the way you think about canceled cancellation promises just kind of meshes together. And so that's really why the process has taken so long.

</p>
<p><strong>Ryan Burgess</strong><br />
It's been like, how long is how long? It's been?

</p>
<p><strong>Jafar Husain</strong><br />
I've been in battles a long time in the committee year and a half, two years. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like I even remember speaking with you about it a year and a half or so ago. And I feel like I remember you being a little frustrated at that time. So yeah, and it's still yet to be there.

</p>
<p><strong>Brian Holt</strong><br />
Stage one. So we're, I

</p>
<p><strong>Jafar Husain</strong><br />
think we're at stage one. Now. Wait, um, yeah, we must be at Stage. I'm pretty sure what stage one? Yes. So I went last night, actually, the committee agreed that we met all the requirements to move to stage two, but they were like, hey, but you just people just introduced this cancel of promises. Like, well, I'll just hold on. And I was like, Okay, I mean, the reality is, the stages are important. But you know, it's it's like transpilers mean that people can start experimenting with stuff and I just gotta be patient. Like, I'm, I think that the committee is probably cooler heads are prevailing once again, and it's probably the best time to do that wait and advance these proposals. We now have an asynchronous iterator proposal, which we're not advancing, but the VA team is in Google's advancing. And so we're I'm trying to keep these things in lockstep with each other promise cancellation and asynchronous iterator observable.

</p>
<p><strong>Ryan Burgess</strong><br />
I can see the point, though, is actually having them together for async. Like that, that makes a lot of sense. Like I could see something like observables being so big that it could be by itself, but same thing goes is that you almost need to couple it together.

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, I think the concern would have been that web standards bodies would have been starting to use, like they'll use the types that are available. So they might use observable, where an asynchronous iterator would have been a better choice, for example, that's available. So choose that. Yeah, I think that was their concern. I think it's a valid concern.

</p>
<p><strong>Jem Young</strong><br />
So how much interaction to cc 39 and a half with W three? See, like, is there any enforcement if you say observables are staged for the past? We want to make it in the browser say like, No,

</p>
<p><strong>Jafar Husain</strong><br />
I mean, clearly, like, you know, browser vendors are certain like a lot of people on the browser vendors are are involved in both and you have people who like Alex Russell, for example, who is on what WG believe Alex, someone actually you know what I could be wrong about that. I know Yehudah is on what WG? I believe Dominic's what WG and so you definitely have people who are cross functional, who are they have their hands in the JavaScript community and also on the website, and they're definitely trying to evolve JavaScript in Alongside the needs of what the web platform needs, right, you're putting premier again, that's one of the big things that differentiates whether you go into NPM. Or whether you go into language. It's whether you the web platform needs you as a primitive. Not the only thing, but one of the big things. That's what got promises into language really kind of last minute, it's that the web platform really felt like they needed promises. And so we got some standardized and JavaScript.

</p>
<p><strong>Jem Young</strong><br />
Now the neat upgradable API, it's like a file reader. Yeah, does not is not promise. It's not asynchronous, or anything. It's completely callback based. So sorry, no handling a lot of ServiceWorker experimentation and like service workers are purely promises. And I'm trying to really follow the ServiceWorker. But it's like straight callback, which is like breaks everything. And that was the whole point of promises

</p>
<p><strong>Ryan Burgess</strong><br />
to get rid of callbacks.

</p>
<p><strong>Brian Holt</strong><br />
monkey patch, that shit just monkey patch the shit out

</p>
<p><strong>Jem Young</strong><br />
your desk, and like, we have to like sit down and figure out how to do it in the promises Ruby the

</p>
<p><strong>Brian Holt</strong><br />
shit out of that?

</p>
<p><strong>Ryan Burgess</strong><br />
It's awesome. What are some features that you'd like to see? I'm gonna say the key word in the future Java.

</p>
<p><strong>Jafar Husain</strong><br />
So? You know, that's a funny thing. I'm, as much as I talk about the importance of pragmatism in languages, I'm actually probably more in the purist camp than the average person, I would like to think, see things slow down, probably

</p>
<p><strong>Brian Holt</strong><br />
what I get out.

</p>
<p><strong>Jafar Husain</strong><br />
We've all talked about, you've all heard about JavaScript fatigue. And I think that extends not just to frameworks, but the languages themselves. Progress to stop. But I mean, I think that the interesting thing that, you know, if anything, I'm taking the way certainly my personal experience in JavaScript and in front end JavaScript in the last five years has been that I'm using less JavaScript features, not more. And so I really I like some of the primitives are making their way into the language. But I think we're seeing a lot of complexity in the language in the last version ESX. That, I don't know that it's paid for itself. Yet, if you look at the language spec, just in terms of sheer size, it's dramatically increased. Proxies partly were to blame for dramatically increasing the light the space of that, you know, the surface area, the language, I don't know how many people are

</p>
<p><strong>Brian Holt</strong><br />
using proxy, they are so cool.

</p>
<p><strong>Ryan Burgess</strong><br />
I've never used the like, well, and I think that's a problem is because of the third one of those not transpiling features, right? It's not a feature you use yet,

</p>
<p><strong>Brian Holt</strong><br />
but they have a lot of interaction with other features and language. So it just adds a whole level of complexity to everything.

</p>
<p><strong>Jafar Husain</strong><br />
I think to understand that feature, you have to understand that the ideology behind some of the people on the web community, though there's this Extensible Web Manifesto, I don't know how many people

</p>
<p><strong>Brian Holt</strong><br />
have heard of this. So I think a good thing to do right now to explain what proxies are since Oh, sure, yeah, I talked a bunch about it.

</p>
<p><strong>Jafar Husain</strong><br />
Um, so anybody who's familiar with Ruby on Rails knows that in Ruby, when you call a method on an object, that method doesn't necessarily have to exist on that object. Instead, there's a callback on that object, it'll get fired, if that method doesn't exist, called method missing. And you can basically just like, implement that method or implement the definition of that method on the fly. And you sort of just get told what the name of the method was. And that is very similar to what a proxy can do. So you can have an object that you can just do a bunch of stuff to as if those methods exist, when in practice, they don't really exist, it's that they're actually being executed, like, just in time, because somebody is detecting all the calls to that particular particular object. So it's sort of like adding that Ruby like method missing functionality to JavaScript, that is useful for some frameworks, like Ruby on Rails is sort of built around that capability. So like, you can just sort of call a method and it doesn't really exist, but then you like, I might just take the name of that method and assume there's like a database table that has that name, and then go and try and grab it. And so it allows you to, to sort of it's a, it's a kind of a weak form of turning data into code. It's kind of an interesting trick. It's not as powerful as macros. But it's pretty powerful. I think the reason why it was added to JavaScript is not so much because we want JavaScript on rails or anything like that. It was, I don't know that we do. I don't know, that's not what I want jails. I like there's this thing called the Extensible Web Manifesto, it's actually shaped a lot of thought in the Standards Committee community and in the committee about how we should be thinking about web standards. And the notion is, standards, bodies should do less, we should just put in primitives, and then have people write frameworks. And then like, let the frameworks win. And then maybe if we have a role there, it's to take what's good about that particular framework and put it into the standard. If we feel again, like another F is if we feel that actually even adds value. Sometimes taking the winning framework and standardizing some primitive in, it can lead to things like better performance, because you know, we've built in built in support for in the browser, like imagine, and this isn't being considered necessarily, but imagine browsers had like a virtual DOM like they could expose, they could have, you could have a lightweight way of taking virtual DOM and react and turning into a browser API. That's the type of thing that if for whatever reason, the virtual DOM mechanism was like, totally the winner like 10 years from now, nobody can imagine doing UI programming without a virtual DOM. It's not out of the question that browsers would add special support or FastPath for dealing with virtual,

</p>
<p><strong>Ryan Burgess</strong><br />
I'm just gonna say That's pretty badass. Like let's let's have that be an added to

</p>
<p><strong>Brian Holt</strong><br />
the browser shout out to Jay Phelps that developed lazy Dom

</p>
<p><strong>Ryan Burgess</strong><br />
Oh yes, that was actually really cool. It's

</p>
<p><strong>Brian Holt</strong><br />
pretty cool. Check it out cool use a proxy to yep,

</p>
<p><strong>Ryan Burgess</strong><br />
I liked what you said there to jofra vote like almost wanting to slow down, but I feel like he is six probably got us so far because there was so much added whereas ies 2016, year seven, whatever you want to call it. There's only three features two,

</p>
<p><strong>Derrick Showers</strong><br />
yeah, two,

</p>
<p><strong>Ryan Burgess</strong><br />
there's only two features.

</p>
<p><strong>Jafar Husain</strong><br />
I mean, I think there's a good time to clear something up, the versions don't matter. They really don't like we're just moving to a year over year model where we just like ship whatever is there. It's not even that interesting. From now on to talk about like, yes, 2016 or Yes, 2017. It'll be interesting to talk about individual features, because it's really just a process of like, whatever is it stage five, when we get to the the six month mark or the said the eight month mark, right. So the versions are less interesting. It's more of the upcoming features. And there are some really meaty, interesting upcoming features like async await, for example, which I think a lot of developers are really going to benefit from, I think that's probably the the Medius feature feature outside or outside of maybe procs. Sorry, decorators. Some people are familiar with

</p>
<p><strong>Ryan Burgess</strong><br />
I know Jeff loves decorators.

</p>
<p><strong>Jem Young</strong><br />
We like we had a GitHub issue the other day. And I was like chaining all these hierarchies. And mostly I just like, look so messy. I was like, Oh, is there a way we can fix this? I'm like.

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, for those that you don't know, out there, decorators are basically a way where you can so we all know, hopefully most of us know that we have six introduce classes. But the reality is like, if you look at languages like Java, or C sharp, they have all these cool modifiers for members and classes, right? You can say something public, or you can say something's read only. And it's possible that the committee could have gone that way, we could have introduced a bunch of new keywords for some of them, we've actually already reserved with, you know, just like several versions ago, we like we reserved the class keyword thinking we might be doing something with that. Instead, the committee chose to try and do a lot of that stuff instead of blessing special keywords, like for the IES five methods, like saying something is not enumerable or non configurable or read only we thought, well, can we just put in some general purpose extensible mechanism. And so decorators are effectively that you can, they're basically just functions are nothing special, but they're functions that you can put before members inside of classes. And that basically gives you an opportunity to like modify the member descriptor before the property descriptor before it actually gets set on the class. And so it turns out, that's something borrowed from Ruby and Python, where it's worked generally pretty well in dynamic languages. But the decorators are still controversial. They're like, you know, it's they're very hard to move forward. Because if you look at the two to two big frameworks out there, like Angular and Ember, which both use decorators, they both seem to those teams seem to want different things out of decorators. In fact, I think it's fair to say that the Angular team wants something much more akin to annotations in Java, where they're sort of inert, and all they are is metadata that you can read at runtime. And the Ember team wants something more akin to Ruby and Python decorators where it's just a function, you can mutate the property descriptor, and you can do a whole bunch of cookie stuff if you want to. And there are even some people who just want the former model, partly because they might be able to put in more browser optimizations, like the more static and, you know, predictable things are, the more you can build browser optimizations around them. And if decorators are a function that can do anything in their complete that black box, it makes it really hard for implementers. To, to optimize

</p>
<p><strong>Jem Young</strong><br />
isn't the problem decorators scoping? From what I understand is that because they're run before the class, and

</p>
<p><strong>Jafar Husain</strong><br />
so they're one of the big problems that had to be solved around decorators was class initialization order like it right now. It's just something that various transpilers are doing. And they're kind of doing in the same way, whether it's TypeScript or Babel. But the reality is, the best way to understand classes going forward in JavaScript is that they're a DSL for building classes. Like they're not just those if you some of you might remember the initial proposal of classes in JavaScript was like, we call that maximally minimal classes. In other words, very light, syntactic sugar for the annoying prototype code you had to write otherwise, right? We basically moved away from that dislike, I think very clearly moved away from that we've decided that classes are a DSL that we can do whatever we want with in order to make classes more ergonomic to use. And that is a position that gives us as the committee and language authors more power, right. And it also meant there's a whole bunch of problems to be solved. I think those were pretty much worked through in the last meeting. And a lot of that was working through so we could define what the semantics of decorators are. But I think the problem was, and still continues to be that people don't necessarily agree on what decorators should be, or should they even be decorators and then annotations instead.

</p>
<p><strong>Jem Young</strong><br />
So Java Soni was working on the future of JavaScript. She is curious. What are your thoughts on types in JavaScript because TypeScript is becoming increasingly popular there's a lot of like, clamor about it and a lot of problems. So

</p>
<p><strong>Brian Holt</strong><br />
what are your thoughts? Fucking Microsoft? LinkedIn?

</p>
<p><strong>Ryan Burgess</strong><br />
Derek, come on. gotta stick up for this shit.

</p>
<p><strong>Derrick Showers</strong><br />
I don't know.

</p>
<p><strong>Jafar Husain</strong><br />
So of course, shout out to TypeScript shout out to flow, like what the committee has decided is that this topics come up in the committee. And it is highly controversial. What the committee right now, and I consider this a compromised position is basically decided to reserve the syntactic space of Colin, and not necessarily use it, but just reserve it for transpilers. So, in other words, if you want to put you know, like, we're not going to use the colon space, but if you guys want to decide to introduce a type system in JavaScript, you go ahead and do it. And we're not going to stomp on Colin, for you. Oh, yeah. So we've we've basically said, We're gonna reserve that space, and you guys can sort of party on that space. And we're not going to muck with it. But as opposed in terms of picking a type system, the position that's been expressed in the committee before is that type systems are not something you get wrong, if you get them wrong. It's the word the language is broken, right? You don't want to break them, one of them one of the world's most important programming languages, in my opinion. And so it's very, very, very hard to get types of sins, right. And you know, some people can just say, well, type scripts out there, it's working, it's I actually think it's rather nice, I think it's like, as far as type systems go, these are rather rather elegant type system, I think it's got a lot on Java and C Sharp type system, even, I think we were in a picot type system, you can do a hell of a lot worse. But you can see there's debate in this space, because there's more than one type system, right by more by two very large companies that you could say had a lot in common and probably had similar goals, right. And they still felt the need to engineer two different type systems that are different in important ways. And one of the, you know, more interesting things about flow is that it attempts to do more inference, interestingly enough, TypeScript is take is like the most recent version of TypeScript has sort of stolen some of those tricks. And does like more strong inference. Like it'll figure out if you know, a type can or can't be null, for example, based on you checking for illness, like TypeScript. I believe, I don't know if that specifically but TypeScript is definitely shipped some of the features that previously only flow had

</p>
<p><strong>Brian Holt</strong><br />
interesting. I know, there was a big differences, non nullable types.

</p>
<p><strong>Jafar Husain</strong><br />
I mean, if people are interested, in my opinion, I think type systems are just one of those things that make more sense as your project scales in both lines of code and human beings. Like I think they just serve as a nice DSL for communicating more static information. And, frankly, as a form of force documentation. I think in that sense, they're useful and probably get more useful, the larger size, they have a certain overhead, and that that over it's going to be worth it, the more people and more lines of code you have. And so I I kind of given up on trying to like, say types of sums are bad or dynamic systems are better or, you know, I think it's really just a function of your your complexity of your program.

</p>
<p><strong>Brian Holt</strong><br />
Oh, yeah. So I have a stage zero proposal for TC 30. I just want to take Haskell, and just ship it as JavaScript. Well, you champion that I'm sure that

</p>
<p><strong>Ryan Burgess</strong><br />
will go in there real quick.

</p>
<p><strong>Jafar Husain</strong><br />
There's definitely some folks on the committee that are big fans of Haskell cool. Shout out to h five. Yeah, definitely. I mean, you know, that's the type of thing that you know what, actually, for those of you out there who really love Haskell and want to write and write JavaScript, pure script is a really cool transparencies. Pure script is very cool,

</p>
<p><strong>Brian Holt</strong><br />
or else anyone else? Yeah, um, you

</p>
<p><strong>Jafar Husain</strong><br />
know, if you want to, and big shout out to the to Evan and the folks working on Elm. They, I mean, if you want to if you've got some nice thing about the web nowadays, and certainly with web assembly, we won't need to turn Haskell into JavaScript. Right? I mean, that's, that's like the big, that's kind of the big deal. That's happening. I think, right now. WebAssembly? I don't know to what degree it's really going to be a big deal. But I think it is really valuable, like a deal. But yeah, it's a deal. The possibilities are there, whether people actually take advantage of it is another thing. For those who don't know, the idea is to basically make a low level virtual machine like language for the web, of which JavaScript can just be any one of any many number of languages to target. And I think the big one there, like what I mean, lots of languages already transpiling JavaScript, but well, they can only get so fast. Like if you're in for example, you have static types for everything, and you transpile in JavaScript, the static types are gone. And the you know, the compiler does nobody the machine, the virtual machine, or the the jitter doesn't know any better about these optimizations. And so that's really what WebAssembly is attempting to do. It's so that elm can be faster than JavaScript, and God dammit, they have every right to be fast in JavaScript, you're willing to type out all those types, then you deserve a little bit of a compile time. God

</p>
<p><strong>Brian Holt</strong><br />
bless you. God bless you. God

</p>
<p><strong>Ryan Burgess</strong><br />
bless you never written any elm before. I know, Brian, you've looked as pleasant.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, no, we should rewrite everything in Netflix.

</p>
<p><strong>Jem Young</strong><br />
We have a lot of like, new people in the audience or people who just don't seem engineers are like Justin means Oscar. How do you stay current? Well, you're definitely at the peak of like JavaScript knowledge. So how do you stay current about what's happening in the web? And, like, what's we learn?

</p>
<p><strong>Jafar Husain</strong><br />
Brian? I just sit next to Brian on the shuttle. And that's how I find out what's going on.

</p>
<p><strong>Brian Holt</strong><br />
I just read Hacker News.

</p>
<p><strong>Jafar Husain</strong><br />
We should all sit next to Brian on the show. Yeah, it's gonna get super uncomfortable.

</p>
<p><strong>Brian Holt</strong><br />
That's cool.

</p>
<p><strong>Jafar Husain</strong><br />
I got laughs I mean, yeah, like that. And yeah, Hacker News. I don't have I don't have any big secrets, unfortunately. I mean, like, I know a lot about what's going on with the language, obviously, cuz I'm on the committee, but it's the most exciting things going on with JavaScript are really not the language they're happening as they should be, I think in NPM, right. So for for like myself, who's really kind of involved in the React community and like, thinks a lot about FP, there's a lot of people kind of driving it the similar model nowadays with like the virtual DOM Tom. So model, like, even MD, or Ember has HTML bars, which does a similar kind of thing with the virtual bomb. So I mean, that's kind of where my interest is. But it's just like JavaScript being used for everything nowadays. And so it's like, it's really more niche specific, like, I'm more focused on the front end. So that's kind of what I'm got plugged into right now. But yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I've seen some memes where it's JavaScript everywhere. Like that's, that's so true.

</p>
<p><strong>Brian Holt</strong><br />
Yeah. Yeah. I think the the Ember reference type is super interesting. Like, I don't read any Ember because I can't follow the school. He Huda, actually, you heard it's cool. It's Tom to hell that I have a hard time with. God bless you, Tom Dale, he probably has like, Who the fuck is Brian Hall. But reference is a super interesting asynchronous type I'm interested to see that developed, I don't really know much more than about

</p>
<p><strong>Ryan Burgess</strong><br />
it. I was kind of hoping you'd explain it more, because I actually don't know.

</p>
<p><strong>Brian Holt</strong><br />
Do you know more about it.

</p>
<p><strong>Jafar Husain</strong><br />
So I am in the very enviable position of having Yehudah to explain ref to me and a very a variety of other topics, every now and then Yahuda will just pay me on on Hangouts and be like, hey, you know, let me tell you about reference, we figured out how to do we figured out we solved binding now that those aren't his words, they're my words. But like, if you can come up with a primitive that actually explains embers mechanism that you can use to explain embers mechanism of binding Angular mechanism mining and reacts mechanism of binding. That's a pretty important discovery. So when that's like, that's definitely interesting. And like, one of the things I really respect about Yehudah, and a lot of the the community like the Ember community, and the rust community, and a lot of the communities that you who is involved in, is that just their willingness to spend the time and do the research to get it right. And, like all the thing about reference, like you're gonna and I have been talking to him, part of reason he thought I'd be interested, of course, is that I I've, in the past, we've looked at observables as a way of facilitating binding. And when I talk about binding, I'm talking about how do we synchronize the model in the view, right. And so that's a problem that every UI framework has, right? How do we do that? And the interesting thing is, for the longest time, we've we've kind of thought we've looked to push, in other words, we've looked to notification, like object dot observe is perhaps the most

</p>
<p><strong>Brian Holt</strong><br />
infamous Yes,

</p>
<p><strong>Jafar Husain</strong><br />
infamous, and now defunct object dot observe proposal in which we thought, well, you know, let's just notification all the things, right. And then like, we'll just be able to observe every single thing that happens on that model and a very fine grain way. Yeah, Chrome shipped it, if I remember. Well, they I know, I believe it's behind a companion behind a flag. Yeah, they shipped it. And I think that was like before react, and then react kind of came out, and I think caused a lot of people to rethink how Model View binding happened. And I think what were like the two mechanisms is really pushing pull, right? Like, if you went pure push, you'd have pretty much what object observe is actually probably even more extreme, right? Because even object, the big problem with object observer, one of the many problems with object observe is like, the fine greatness of those pushes, right? Like, okay, when do I get a notification? Do I get a notification when every single property changes? If I like change the same property five times I get five notifications? Well, in order to observe, we were like, Well, that seems kind of crazy. So let's just give you a notification at the object level, right? Like so if you change five properties on an object, then we'll schedule to give you a notification that five things change rather than give you five notifications. Because all those notifications have cost. And if we like, you know, change. Well, you mean, like, we changed the view every single time we got a notification, then you can imagine how that would really go back a lot of thrash property. Exactly. Right. But okay, well, why is object the magic? You know, right granularity? I mean, some of us have domain models that are huge grabs of like, hundreds of objects, right? That maybe I 100 notifications is too much, right? Maybe I just sort of want one notification that something in the the graph has changed. And then I will go and try and figure out best what changed. And so you can really think about binding is as some combination of push and pull, right? Everything push would be too much notification, every every property changing, if you will, on the other side of the spectrum, you have everything poll, which is I don't know I'm going to set a timer and every one millisecond, I'm gonna go and check to see if everything changed, right? That would be everything pull. And what's so interesting and kind of brilliant about the reference model is that it's a push pull. We figured out that it's actually not one of these extremes. It's kind of both of these. And what's exciting also about the reference is that a kind of it's we're taking an idea that we know works from which is eople inside of Unix. And so the idea behind reference foods that will push to you that something's changed. Right, but you might not care right now. So rather than giving you the value of that shade will tell you that there, maybe there's something that shape, there might be a value available for you. And then you can turn around and pull that value. And then only do you then you only do the computation of pulling when you actually need it. Right? You might be it pushed, you know, 5000 notifications, but imagine you doing an animation, for example, and you only need to render every once. Yeah, and you'd use RequestAnimationFrame. Right? But let me tell you gonna be pushed, like 15 messages, right? Now what you care, you just dropped on the floor, right? So all you do is with reference, you can sort of push reference tracks, whether it's dirty or not a reference contains like a value. And so you sound

</p>
<p><strong>Brian Holt</strong><br />
like Angular all over again, the digest cycle or

</p>
<p><strong>Jafar Husain</strong><br />
similarity there, right, which is that you have an object which represents a value, and it'll tell you if it's dirty or not. But then when you read it, only that it's lazy, the actual computation of value, right? And so if you could have computed references, which are based on multiple references, but if you never read the value, you know, doesn't matter. Yeah, it doesn't matter. When you finally do read the value. It computes the value, right? And it goes as far as it can. And like, once the data is computed, though, it's cached so that you ask for it twice before it's computed, you get the same value. And it's a very simple mechanism. But it turns out that it's capable, you can use the same mechanism basically, to express the way Angular one does mining, the way Ember does binding in the way React is money. Right? Whereas react would just yo something changes like in the Redux model, anyway, someone changed our they'll just go get everything all over again. Right. So it's, it's yeah, it's very cool. Just check it out. All right. And that's straight. That's straight from you who Don Lemon, you could actually just send me a Hangout the other day, and he was like, let me tell you about React. React. Sorry, rust, rust futures. And it's actually kind of based on some of the same ideas. With lovers here, yeah, there we go. Wow, I wasn't even trying for that one. So yeah, it is that's probably one of my favorite things about being in the committee that Yehuda can explain. Yeah, I just read that blog post. zero cost future zero cost futures. Very

</p>
<p><strong>Brian Holt</strong><br />
cool.

</p>
<p><strong>Ryan Burgess</strong><br />
You're just killing us. Brian shows? Yeah.

</p>
<p><strong>Brian Holt</strong><br />
It's a good blog post on futures. Alright, as

</p>
<p><strong>Ryan Burgess</strong><br />
we wrap up today's episode, let's go around the table and share interesting pics that we have for this episode six,

</p>
<p><strong>Brian Holt</strong><br />
and your favorite proposal coming up Java observables. Like all of you.

</p>
<p><strong>Ryan Burgess</strong><br />
We've already talked about observables don't

</p>
<p><strong>Brian Holt</strong><br />
care, I don't care. I can go first. I'm pretty excited about pipe angle bracket for JavaScript. I think it's pretty cool. So the idea being that like you have a function that returns something and you immediately want to pipe it into the next function calls a parameter. I think that's pretty hot. I think it's super expressive. It's very declarative. I'm super stoked on it. I hope it just wins everything and we don't write anything else.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I don't like this. And we

</p>
<p><strong>Brian Holt</strong><br />
devolve into Haskell or evolve, evolve into I have a pic. It's a video that came out of modern web this week. Ooh.

So insert sound bite here. Jaffer auto auto tuned. Oh, man. Well,

</p>
<p><strong>Ryan Burgess</strong><br />
like that.

</p>
<p><strong>Brian Holt</strong><br />
It's, it's magnificent. That's definitely my pick for the week.

</p>
<p><strong>Ryan Burgess</strong><br />
We didn't really explain what it was.

</p>
<p><strong>Brian Holt</strong><br />
I think the sound bite will slip. So moto has another sweet podcast that might even be my pick. It's from Tracy Tracy Lee. She's fantastic. She's people that she gets on the podcast for you've been on the podcast so awesome. So I'll pick that as my pick. And then I really want you to like rip the YouTube video on like a soundbite for being autotune

</p>
<p><strong>Ryan Burgess</strong><br />
that's a challenge that I really want to see.

</p>
<p><strong>Brian Holt</strong><br />
I'll do it if you want the mp3 offset a little bit great. Okay, feel

</p>
<p><strong>Ryan Burgess</strong><br />
Eric, what do you have for us?

</p>
<p><strong>Derrick Showers</strong><br />
So my two picks my first one is speaking of HTML bars and Ember they came out with a really rewrote a whole bunch of shit and came out with something called glimmer two which is their newest latest and greatest. Some really cool there's actually a really cool video from Yehudah let's deep dive into number two is a little bit above my head but it's definitely worth checking out.

</p>
<p><strong>Brian Holt</strong><br />
Would you say it's the future

</p>
<p><strong>Derrick Showers</strong><br />
here's recommend that and then my other pick a little bit more fun. So I went to see Tom Ryan earlier went to a Yelp event at a rogue brewery out here and Rogue is like my new favorite beer. They have so many different varieties. They have this one called cold brew IPA, but it's actually like it it's finished in like a a coffee like as a compliment is really really good actually has coffee infused into it sounds good. So like a pint of beer is actually like half a cup of coffee. hear something so he's there like it's not like for low colleagues and I illegal but it's it's really really good so nice gem we have

</p>
<p><strong>Jem Young</strong><br />
my first pick is more mirtron More Tron is just like riding clubs pick from the first step so we ever did was Frank yet the Simpsons screencap, sir. Yep, yeah, so this one is for Futurama. And I'm a big feature. I'm a fan. Brilliant show. And so what we're trying to go on there and type in like whatever phrase you want and I'll pull up the episode and like a screencap of like, what was said it's fantastic. Totally nerdy. Next pick is full stack Toronto. We made that a picture. I don't think Oh, Ryan Burgess and I are speaking there in October.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's like October 16 17th. I can't remember the exact date. I think we're both speaking on the same day, though. I did check the schedule. Yeah. So John is not at the same time though. Now.

</p>
<p><strong>Brian Holt</strong><br />
You live in Toronto. Right. I love Toronto. 

</p>
<p><strong>Jem Young</strong><br />
Yeah, that's never such a

</p>
<p><strong>Ryan Burgess</strong><br />
great city. Why did we touch on this? Jennifer is like a fellow Canadian.

</p>
<p><strong>Brian Holt</strong><br />
Oh, yeah. Yeah. I mean, he's so nice. Sorry, should have been the key word.

</p>
<p><strong>Jem Young</strong><br />
But we're in New York, we figured out that he could tell Canadian when they're speaking, because they say JavaScript differently than

</p>
<p><strong>Jafar Husain</strong><br />
JavaScript. Yeah, JavaScript. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
I've learned to get rid of

</p>
<p><strong>Jafar Husain</strong><br />
merciless mocking by those asshole Americans. Yeah, I was saying JavaScript. And it

</p>
<p><strong>Ryan Burgess</strong><br />
took me pretty. It didn't take long. I was pretty quick. Sorry, but sorry about that. Sorry.

</p>
<p><strong>Jafar Husain</strong><br />
They also trained me out of my AES two took it took a really

</p>
<p><strong>Brian Holt</strong><br />
viewed Siri. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, jofra has been here longer than me, like in the US. So I would hope he's, you know, got over some of them.

</p>
<p><strong>Jafar Husain</strong><br />
I'm super American now. I'm like, gonna vote for Trump? I'm not. I'm really sorry, Jeff, what

</p>
<p><strong>Ryan Burgess</strong><br />
else? That's your big job for what do you have for us?

</p>
<p><strong>Jafar Husain</strong><br />
My favorite proposal? It's not observables? Actually, you stole my proposal? That was the one I want. Yes, pipeline operator, I think it's the only thing standing between, like, so JavaScript supposed to be a, you know, a hybrid programming language in the sense that you can use these different programming paradigms. I think it's the only feature that's keeping it from being as much a functional language as an object oriented language.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, that Jem.

</p>
<p><strong>Jem Young</strong><br />
here that might just be

</p>
<p><strong>Jafar Husain</strong><br />
like UNIX, the pipe with the carrot is? I think that's a ml, right? I know, it's an F sharp. And I think, like in most languages, or at least languages, that the pipe in the carrot will support it the other way, which I think is just crazy and stupid. But

</p>
<p><strong>Brian Holt</strong><br />
yeah, that's weird. They shouldn't do

</p>
<p><strong>Jem Young</strong><br />
it. Yeah, I would say just a

</p>
<p><strong>Brian Holt</strong><br />
single pipe.

</p>
<p><strong>Jafar Husain</strong><br />
I can get behind that the old but there might be a seaway that's used. Right? The single pipe is is on?

</p>
<p><strong>Brian Holt</strong><br />
That's right. Right. So we

</p>
<p><strong>Jafar Husain</strong><br />
need to use Yeah, I'm afraid. Yes. Yeah, I'm gonna go with pipe arrow that's or bitwise. And my, my pick is, and I was talking to these guys about it before is this super cool language called Idris, which is a cool new example of dependent types in programming. And so just briefly, you can have a value that's a type like constrained by type, so like, name has to be a string, you're gonna have a type of type, which is a mon average. I'm not gonna bother explaining you look it up. And you'd have a tight constrained by a value. And that's like the missing piece. And my friend just got me on to it a couple weeks ago in Seattle. Hey, Ted. And yeah, it's really cool stuff. Check

</p>
<p><strong>Ryan Burgess</strong><br />
it out. Awesome. kind of sticking with this topic. I figured I would choose the GitHub repo for the status process and documents for ECMO script. I thought that was a good one to stay up to. If you want to stay up to date. It's a good one to follow. And then my second pick is actually a drink that we've had tonight, which is the Octomore scotch, which is so delicious.

</p>
<p><strong>Brian Holt</strong><br />
Yes. Octomore 7.1 Shout out to Aaron hammer who suggested it

</p>
<p><strong>Ryan Burgess</strong><br />
so good. And actually these guys got it for me as a gift and it was it's so delicious. He edits all of our podcast because we are too fucking lazy. I want to thank Josh for joining us on today's episode, where can people follow you and get in touch with you quitter

</p>
<p><strong>Jafar Husain</strong><br />
I guess would be the best way to follow me. Yeah. J H U S as in Sam ai n is a Nathan I don't know why didn't pick something snappier that anybody could spell but it's first first initial last name J H U S is in SAM ai n isn't

</p>
<p><strong>Ryan Burgess</strong><br />
perfect. It's also a go around. Where else can everyone find you Brian?

</p>
<p><strong>Brian Holt</strong><br />
You can follow my Instagram story. Just kidding. Don't follow that. It's it's just dog pictures all the time.

</p>
<p><strong>Derrick Showers</strong><br />
What was your doing the Instagram story?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, cuz I don't fucking use Snapchat Jesus.

</p>
<p><strong>Jafar Husain</strong><br />
Notary tumblers we should be aware of really easy. It's

</p>
<p><strong>Brian Holt</strong><br />
not that I'm going to tell you Java JavaScript dirty secrets at Holt be T T as in tango.

</p>
<p><strong>Derrick Showers</strong><br />
You can find me on the shuttle next to Brian because that's how I

</p>
<p><strong>Brian Holt</strong><br />
used to like walk back the Mountain View. San Francisco she was in San Francisco. Even worse. I know advertisers on Twitter

</p>
<p><strong>Jem Young</strong><br />
that genuine

</p>
<p><strong>Ryan Burgess</strong><br />
and I met Burgess de Ryan on Twitter. Thank you all for listening to today's episode make sure to rate us on iTunes and Google Play and subscribe to the front end Happy Hour podcast.

</p>
`;
        return transcript;
    };