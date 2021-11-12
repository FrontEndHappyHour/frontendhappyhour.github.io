module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to another episode of the front end happy hour. This is episode 27. And we are joined by our special guest Java Hussain, which is actually now your second time on here it is. Yeah, Java is a senior software engineer at Netflix. Today we'll be learning about the programming language rust. Jennifer, can you give us a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?


<p><strong>Jafar Husain</strong><br />
Oh, okay, I as a as you just said, I'm a senior software engineer at Netflix. I also am a Netflix rep on TC 39, which is a JavaScript Standards Committee. And I worked on Falcor, which is one of our open source projects over here at Netflix. And favorite Happy Hour beverage would would have to be beer. I'm half German, so it's like mother's milk to

</p>
<p><strong>Brian Holt</strong><br />
me, and you're

</p>
<p><strong>Jafar Husain</strong><br />
Canadian. Doesn't hurt. Let me tell you

</p>
<p><strong>Brian Holt</strong><br />
gotta keep warm.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. Let's also go around the table and give brief introductions to today's episodes. Panelists. Brian, you want to start it off?

</p>
<p><strong>Brian Holt</strong><br />
Yeah. My name is Brian Holt, and I'm a little bit rusty on rust. Nobody.

</p>
<p><strong>Ryan Burgess</strong><br />
Such a dad joke.

</p>
<p><strong>Brian Holt</strong><br />
I guess I work here at Netflix. I think not for

</p>
<p><strong>Ryan Anklam</strong><br />
that joke.

</p>
<p><strong>Ryan Burgess</strong><br />
You're probably true. Ryan.

</p>
<p><strong>Ryan Anklam</strong><br />
I'm Ryan anklam. I'm also a senior software engineer at Netflix.

</p>
<p><strong>Stacy London</strong><br />
Stacy London front end dev at Atlassian.

</p>
<p><strong>Jem Young</strong><br />
Jem Young software engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end happier podcasts. We like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What do we decide today's keyword is? memory memory. So if at any point in the episode, we say the word memory, we will all take a drink. All right, well, let's get started. Let's actually just start with the question of what is rust? What's so good about this programming language? Where does it come from? Who invented it?

</p>
<p><strong>Brian Holt</strong><br />
Well, it lets you manage your memory. Rust is an awesome programming language that came from Mozilla, or at least people that worked on it work at Mozilla was kind of a little blurry on where those lines are. Its ultimate goal, I would say is to supplant C as like the go to systems level programming. Because if you need something fast, if you needed to work on many platforms, like the go to is see, like everyone, at some point has probably had to least look at a little bit of C code. Right. And so that's what rust is ultimately trying to trying to do, I think right? With varied success.

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, I think the you hit the high points there. Many have tried and failed to replace C. And I think rust is probably the most The Contender with the most credibility at this point to try and go ahead and do that. And I think like given that probably there's a lot of JavaScript devs out there, right, who's listening to this podcast, we should probably try and put this rust in context of JavaScript. Like, why as a JavaScript developer? Do I care about rust? And I think the answer is you probably don't like, that's an important thing to understand. Right? You probably don't, unless Unless, for me, at least as a JavaScript developers predominantly doing JavaScript today. Rust is basically my last resort. What I mean by that is C and C++ used to be my last resort. And I really hated coding in those languages for a whole variety of reasons, not the least of which was the potential of well, they're unsafe languages, right. So the potential for like seg faults. And so faults everywhere. Yes, I was prolific in generating seg faults when I did my C, C++ programming i and it was something that I just rather than get good at, I decided to not do anymore. And so that's what I've been doing for like the last eight or nine years. Now. That's all well and good, until, of course, you find that your code just doesn't run fast enough. And I think we've all been there, right? We've sometimes we've made a bunch of beautiful abstractions, and then we run things in code, we've taken a look at a flame graphs, and we've seen that they're really, really slow, then we tear them all down, we build the whole thing from the ground up, and it's still not fast enough, then what do you do you go to your, your, your last resort, which is C, C++, at least in the node environment. And so the idea here is to rust is to be like a better last resort. I think a lot of JavaScript developers think about that. Now, a lot of people might say that's not true, right? And then Rust is a great language. And heck, why not even start with rust for a whole bunch of projects, and that's totally fine for them. For me, it's a language of last resort. Because frankly, I'm not going to say to you that rust is easy, Rust is hard, especially if you come from a JavaScript background. There's just a lot more complexity to language. There's a lot of irreducible complexity. And that really comes from the fact that it's a systems programming language. And that's one of those terms where like, I don't know about you guys, but have kind of like a very kind of amorphous sense of like what a systems programming language actually meant, right? I think, to me a systems programming language, what that means is, you really, really care about what's going on in the hardware, you're thinking very intently about the machine as you're coding. And beyond just like, oh, it's the right data structure to use. It's all when we're thinking about, you know, coding in JavaScript, we think about the machine naturally, space and time are still constraints. But how deeply we're thinking about how our code gets evaluated on the machine, there's a lot more fogginess to it, we sort of say, Oh, the VM will take care of that. And really what we do with Ross is we say, Look, we have a really good idea. Literally, it's a much, much better idea about what's gonna happen in terms of memory, layout, memory, memory, there

</p>
<p><strong>Brian Holt</strong><br />
it is, I think at this juncture, it bears talking about what I'm sorry, but what is memory management? is going to be a tough one. Yeah, tears, well, this sections can be real tough for a lot of people. Because we as JavaScript developers are fortunate to work on language like what that doesn't have to manage its own memory, oh, my god. That we work in which it has garbage collection, which basically means that we don't have to go and free up memory.

Space, free of space, there we go. I'm not actually sure how, which VM implements it which way, but I'm pretty sure it's reference counting, right? Is that how the JavaScript VM does it,

</p>
<p><strong>Jafar Husain</strong><br />
I think most VMs, don't use reference counting, they use like Mark and sweep or something, okay, modified.

</p>
<p><strong>Brian Holt</strong><br />
Suffice to say that there are several ways to implement garbage collection. So you don't have to free up the space yourself. So now we're going beyond that, we're going into another language that doesn't actually have that built in for you, with the benefit being that it's, it's a lot faster, I like these garbage collection algorithms, no matter what you do, no matter how hard you work, they just cannot go past a certain amount of performance. So Russ, aims to enter the sphere and say, like, cool, like, you still have to manage your memory. But we're gonna make it really, really, maybe as automatic as possible. I'm not gonna say as simple as possible, but I'm gonna say, as automatic as possible.

</p>
<p><strong>Jafar Husain</strong><br />
Now, when you say automatic, maybe clarify that because some people when they think of automatic memory management they think of that's fair, please like reference counting and that type of thing?

</p>
<p><strong>Brian Holt</strong><br />
Yeah, we're a garbage collection. Right? Well, that gets us into the idea of ownership, right? And maybe you can explain ownership a little bit better than

</p>
<p><strong>Jafar Husain</strong><br />
I can, right. So I mean, if any, if you guys out there have done any native programming, where you're managing memory, yourself. You know, that often, it's one of the things you actually have to very consciously think about his ownership. Like, there's all these patterns that people develop in C and C++, where, you know, it's the person who allocates the memory that's responsible for D allocating, right? So we sort of develop these patterns, we think about them that way. But the programming language doesn't really give us any help, we sort of just do it by convention, and hope that it all works out. What's unique and interesting about Russ is that it actually tracks ownership of, you know, space. So if you call functions, right, and I send a reference into that function, it's something that's referred to colloquially as borrowing. So I send a reference to a piece of memory, but I haven't really Tritan tears transferred ownership of that piece of memory to that function, the idea is that functions gonna terminate. And so my responsibility, yes, we made a huge mistake. It's still my responsibility to deallocate. Right. So what, when and what Russ does is it basically just make sure that that's that that's what happens, right? It's very clear that you can't end up just sort of having two references to the same piece of memory. So I guess that's actually the sorry, that's a better way to sound. Actually, it's probably worth saying, look, what are the safe ways of dealing with space, we can have one in n immutable references to space, right, but we can't modify it. Or we can have one mutable reference to space. And in that sense, it's actually very safe from a concurrency perspective, right. So sorry, switching gears briefly, for memory management, concurrency, chairs, chairs, the Russ compiler can actually verify this. So I can't just go let X equal some memory and then turn around and go let y equal some

</p>
<p><strong>Jem Young</strong><br />
space. It's worse than the framework.

</p>
<p><strong>Ryan Burgess</strong><br />
So I think I think we beat though now.

</p>
<p><strong>Jafar Husain</strong><br />
Basically, Russell just told me, You know what, you can't do that. You can only have one reference to this space, you can't have two different mutable references to this space. And so that's a really kind of a simple idea. It's, it's and when you when you finally start out, it's actually somewhat constraining at first, right? You'd be surprised how often you this happens in JavaScript. But also there are lots of programming patterns where we're basically just shunting these objects around we're just basically passing them from function to function to function. If function a function. And it's not that the original calling function retains a reference to it, it's actually just sort of calling a chain of functions. A good example of this would be like if you've ever done things with JavaScript, like where you're doing map filter, reduce, where you're basically chaining and just transforming the, the object. And so in that sense, when you're doing those types of patterns, you don't even notice really, that rust is doing this, where it has this notion of borrowing, but it also has this notion of moving. And so this is also something is a new, modern C++. So the idea is I can call a function and I can pass a reference to an object, or you know what, I can just pass the object itself. Now what that means is, it's the difference, it doesn't necessarily mean you're not passing by reference. But what you're basically doing is you're actually saying, You know what, you own this now, right? So it's like me saying, you own it, which is another way of saying it's your responsibility to deallocate it at when, when you're done with it. And so, Rust has this concept of borrowing and moving that's built into the language. And if you're really experienced CC plus, plus developer, you might not even kind of be too aware of these things, because it's just the patterns that you already have in your head anyways, and the compilers assisting you and it tells you when you've done something wrong,

</p>
<p><strong>Ryan Burgess</strong><br />
but so this would actually make it easier for someone maybe learning if they were wanting to learn C++ or learn rust, it might actually be an easier move to learn rust first, by the sounds of it. If you mean sorry, if you were learning you're choosing between like C++ or rust, I feel like Ross might actually be an easier one to learn.

</p>
<p><strong>Jafar Husain</strong><br />
Absolutely. Right. And that's what I was saying earlier, like I was a little harsh on rust when I said it was the you know, the last resort. Sure, right. But I mean, I really think it is if it let's think about what we get from that simple principle of one mutable reference or n immutable references. One thing that we get is the simple simplicity of this notion of Baro checking, right? Like I'm like, Well, I have this reference. That's a mutable reference, but I'm actually going to move it over to this other reference, I can't use any original reference, Russ will complain. So I can't assign a new variable to the old one new reference to the old one, and then use the old one. And Russell, just tell me sorry, you move that you can't use it anymore. That's a simple and powerful principle from the perspective of memory management. But there's something there's

</p>
<p><strong>Brian Holt</strong><br />
chairs, chairs. So before we continue, unpack some of the language that we're using here, because we were throwing around some, maybe like next step terms here, like reference, right, that's not something we actually talk about a whole lot in JavaScript No, like, we actually kind of do use them, right? Whenever you're dealing with an object, it's actually as a reference, right? But we don't really think about that too much. So if you have a reference to an object, you don't actually have the object itself, right? You have something that's pointing at an object? This seems kind of strange, right? But if I have multiple references to the same to an object, it's the same object. So if I modify one reference, and I try and like look at that reference from somewhere else, guess what, it's the same objects surprise, right? Power strings, and numbers. Those are primitives, right? They don't actually change. Or rather, they're immutable in the sense that they cannot change, which leads me to my next term I wanted to define, which is immutable means cannot change, right? So like, if you have like the number three, that is an immutable value, like it never changes? If you try and change three? Well, I mean, you can, I guess, define three, like if you're in C, right, and you can just fuck up everyone's code. But usually don't do that. It's an immutable value.

</p>
<p><strong>Jem Young</strong><br />
So what would be the use case for multiple immutable references? Because it's mutable, I mean, you would just need one reference, it would always be the same value,

</p>
<p><strong>Jafar Husain</strong><br />
I mean, any operation where you've got a whole bunch of things that are reading information, but they don't need to change it, like, you can see how threading, right, like, I got it, I'm gonna spawn five threads, they're all gonna read this big object that I've allocated once, and they're going to, I don't know, perform some individual computations on it. And at the end, they're going to write it out to a stream, for example. That'd be an example of why. But and then the other case would be that you have one mutable reference to something, you're working with it, you own it, right? And you're changing it. The reason why that's kind of an interesting those, those two patterns are kind of interesting is that they're it's not just interesting from the perspective of memory management and simplicity, right? It's clear who owns it, right? In case Yeah, thank you. Cheers, cheers case of,

</p>
<p><strong>Ryan Burgess</strong><br />
it's hard to keep track of that.

</p>
<p><strong>Jafar Husain</strong><br />
It's also interesting from the perspective of concurrency. So like one of the really scary things, so scary things about working in See, one of the scary things about working in C is like the segfault. And maybe we should just briefly talk about segfaults. Because a lot of JavaScript developers don't even think about this stuff, right? You don't have to write we don't have to because we have a what's called a safe language, right? Memory safe language,

</p>
<p><strong>Ryan Burgess</strong><br />
I had to say it, I said, that was a necessity, if you think about

</p>
<p><strong>Jafar Husain</strong><br />
what actually happens in a simple JavaScript array, right? So when I add an item to a JavaScript array, a JavaScript array grows, and at some point, you can even initialize a JavaScript array and give it a maximum size, using that old weird JavaScript array constructor. It's terrible. It shouldn't be there, but you can use it. And you can say, Oh, we're gonna allocate an array of 10. What happens when you add that 11th element? I mean, what really happens? Well, it's very possible that under the hood, what's actually happening is that initially, the VM allocated 10 units of space for this array. And as soon as you add an extra item, what do they do, they've only allocated 10 units of space in the heap, that's all the space they have, what they're really doing is that they're probably going elsewhere and allocating another array with 20, or 40. Or some, they pick some arbitrary number, some contiguous block of memory. And then they're copying the original array array into it. And that's why you might notice that, at some point, if you keep adding items to an array, what you'll notice is there's such like, you look at performance graphs, there's a sudden kind of Cliff, where what might be happening is the VM is actually stopping what it's doing, copying the array from one location in the heap to another location on the heap where it's allocated more space. So the good thing is if you've, if you have set a pointer to like the first index of the array, the way that it works, is JavaScript smarter enough, such that when it moves over when garbage, if there's ever any kind of change to the if you're using purely references, right, if you're using memory references, it's you've gotten a reference to the object at that particular location in the in the memory block, right? But chairs?

</p>
<p><strong>Jem Young</strong><br />
That reference is known as a pointer, correct,

</p>
<p><strong>Jafar Husain</strong><br />
right, right. But during garbage collection, stuff often gets moved around, right? You might compact during garbage collection. So we might decide, hey, we're gonna move this array on the heap from this location over to this location. And then basically, the the programming language is smart enough to make sure that you're, you're the reference that you set to say the first item in the array, even though it's been moved around in memory, that reference is still correct. Does that make sense? Yeah.

</p>
<p><strong>Brian Holt</strong><br />
Cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
We've talked a lot about JavaScript. Engineers. Obviously, on the podcast, we're always talking about JavaScript. Why would a JavaScript engineer want to learn rust? Or what are some reasons why they might actually want to use it?

</p>
<p><strong>Jafar Husain</strong><br />
Well, so use it and learn it, I would actually separate those two cases. Right.

</p>
<p><strong>Ryan Burgess</strong><br />
Good point. Yeah. You're not using it? Well, you can use it with JavaScript. Yeah, another use case. But yeah, even just wanting to learn it, what would be some benefits to jumping in.

</p>
<p><strong>Jafar Husain</strong><br />
So there are a genuinely interesting concepts in rust from the learning perspective, like this notion of ownership. When you've programmed in Rust, you can actually find yourself taking this notion of ownership into JavaScript and thinking more consciously about ownership. Because the reality is this borrow and own pattern is something we actually do in JavaScript, we just don't it's just not differentiated in in any way. By syntax. We like we think about it, we're like, oh, well, sometimes I'm just trying to like close over a variable. And then I really don't care about anymore, the closure has got it. And I like whether it's a callback for addEventListener movement listener, you're really thinking I'm doing a move here. There's something in the programming language sort of assert that. And it turns out that this notion of borrow and move can actually be a very fastidious way about thinking about programming beyond just like giving you memory safety, it can actually be a good like having not multiple, basically, it's it encourages you to avoid shared mutation, which we all know is pretty evil, right causes all sorts of problems. And so it turns out, there's a lot of solutions, you should be working pretty hard to avoid that situation. And having worked with borrowing and moving and having the compiler be super strict about it actually forces you in many cases into good patterns, more fastidiousness around space that you can then take back into JavaScript. So that's why I would advise you to learn it, I would advise you to use it only if you absolutely have to, because this is my own personal opinion, right? I think the the ordered operations should be correct, here concise and fast. And that order, right, and then in many, many situations, you're gonna find JavaScript solutions are a lot more concise than resolutions. And they're just simply less complicated because the type system has a lot of notions of mutable versus immutable versus pointer versus having a reference. And the thing about the stack for think about the heap, there's all sorts of complexity that's just there, because it allows you to better use performance. But in many cases, for a large number of programs, you're just not going to have to care about right. And then the fact is, you know, you write JavaScript code, it's isomorphic. It's works all over the place. It's flexible. Java has a lot of benefits to writing in JavaScript, even though it's not the world's best language. And so, and still

</p>
<p><strong>Ryan Burgess</strong><br />
disagree, it's probably the best, the best, the best.

</p>
<p><strong>Jafar Husain</strong><br />
I but I would say Ross is really interesting, because if you learn to program in Rust, it'll probably make you a better JavaScript programmer, and it'll make you a better programmer in general,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's always good to look at other languages. I think just it does make you think a little bit differently and how you can actually apply it to JavaScript. So yeah, I think that's a great way to think of it is that you're learning something else and looking at how another language approaches it and how you can apply that to your JavaScript. Yeah, I think that's really good.

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, I'm probably can come up with a simpler explanation of this whole segfault like unsafe thing, basically, in a language where you might get a reference into a space in memory that somebody else controls they might decide excuse me, thanks. Cheers, cheers, cheers. Then I decided to totally deallocate that memory, move the data somewhere else, like that example where the array got too big. We decided to move it somewhere else. We're on the heap, but you might still have a reference to somewhere. And in garbage collected languages, they don't allow that, that they solve that problem for you. But in native languages like C C++, it's totally possible this could happen. And it's not just that your program can fail is that this can be a total source of security issues. Like if some, a malicious attacker decides to somehow figures out a way to like, populate some code in a particular location where you are invoking after that after that memory has been sort of been moved around, but you still hold a pointer to that that portion of memory that's now been de allocated and shouldn't contain anything. But might. There's all sorts of security issues that can happen that with that, and so the reason why rust should now be your last resort, and not C C++, in most cases, is that at the very least you have safety, right? You don't have to worry about these security concerns. segfaults security is probably even higher on my list and the segfaults thing, right seg faults are an annoyance. You keep running it until it works. Right. But the security, hopefully you hope that it actually right, you hope that you actually find these problems, right? In many cases you don't. And then they make their way into production, and people exploit them. So that's why memory safety is just should just be considered like the bar, right? You don't want to you don't want I like cheers, cheers to safety. Yeah.

</p>
<p><strong>Jem Young</strong><br />
And weak maps and Java scripts have their their introduced to kind of help with memory just be a bit more specific.

</p>
<p><strong>Jafar Husain</strong><br />
The idea behind weak maps is weak maps are a great pair for garbage collector, because the way they work is you can stick them in a collection. And most of the time, the way garbage collection works is that as long as there's a reference to something, it doesn't get collected by the garbage collector. But a weak map is kind of a situation where you can say, well, you put something in a weak map, if you'd like to have it, it's great. If it's there, I'll use it, it's great. But you also you would put something on a weak map if your program is correct operation doesn't absolutely depend on a being there. And the way it works is the weak map just doesn't pin it. And it doesn't basically encrypt it like doesn't tell the garbage collector that it's holding a reference to that item. And so if the garbage collector finds that nothing else other than the weak map is holding a reference during the collection phase, it might decide to collect that that memory. So that can be a cool thing for say, caching, where it's not absolutely essential that your program have that data there for the correct operation.

</p>
<p><strong>Jem Young</strong><br />
And you can tie I think what I use weakness for is tying objects or memory to a specific DOM node. And then when that DOM node goes away, it just cleans up automatically, pretty quickly. I just haven't really mentioned because I haven't seen Weedmaps been out for a while and I haven't seen anybody really use them yet.

</p>
<p><strong>Ryan Burgess</strong><br />
I've used it a couple times.
</p>
<p><strong>Jem Young</strong><br />
It's fun to work with.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's easy, you don't find that I'm using it on a regular basis.

</p>
<p><strong>Jem Young</strong><br />
Same same, I have to like kind of force myself that implementation. But we've talked about concurrency a lot. So people out there who haven't taken the traditional CS route and like, study concurrency at one point, it sucks. Tell us a bit more about like, why is concurrency hard? And what is rusty to kind of, like ameliorate all this?

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think what's important about concurrency, I think that's another thing too, is that, yes, why is it hard? But why is it important?

</p>
<p><strong>Jafar Husain</strong><br />
Right? Why do we want concurrency? We want to do stuff faster, right? I mean, it's like, if if I it's like when my wife and I go to buy, right? And there's an insane line on Saturday, right? I wait in line while she goes and you know, picks out stuff. And then she joins me in line and we hack the whole system. That's concurrency. Right?

</p>
<p><strong>Ryan Burgess</strong><br />
Great definition. By the way.

</p>
<p><strong>Jafar Husain</strong><br />
Thank you so much total. Yeah. From like, I outed myself as the San Franciscan like, yeah, we're very Yeah. So this is this is what dominates our thought process. We want to do multiple things at the same time, so we can get done faster. But why is that a big deal? Well, I mean, as soon as you introduce the possibility of multiple tasks happening at the same time, right, they can end up changing the same spot in memory. And they want to do it at the same time. But then they end up tripping over each other right shares, we want to do concurrency, because it gets stuff done stuff faster. It's not something that we JavaScript developers think about that often, although we do do concurrency, it's just that usually we're saying, hey, native layer, go do something like x HR is a great example of when we do concurrency, right when we make a request, and just call me back when it's done. But of course, no two pieces of JavaScript run at the same time. And that means in JavaScript, well, we don't have to worry about this slash, we also don't get to do the cool things that we can do when two pieces of code can run at the same time, right? And so in Rust, we can run two threads two native iOS threads at the same time and get more work done faster, presumably. But of course, there's always the problem of well, I want from both threads, I want to modify the same list, for example, right? Well, even something as simple as like adding to a list again, going back to the example we went to before could cause like the entire array quote unquote, of that list of memory to be moved to somewhere else in the heap. And so thank you.

</p>
<p><strong>Ryan Anklam</strong><br />
Also, going back to the the analogy of memory, it's basically you can in your in line, your wife's getting the eggs, and then you check out your wife hasn't got back with eggs yet?

</p>
<p><strong>Jafar Husain</strong><br />
Yes, that is a problem. It's a problem, right? It's ordering so I like it. The reason why this is an issue is that if if two threads try and modify the same piece of memory at the same time, especially with some processes going on. Thank you cheers. I'm already drunk here. How do we worry about and then in a lot of sleep, sleep plus plus, you use libraries and use things like mutexes. You want mutual exclusion, right? mutex is short for mutual exclusion. So only I get to use this memory at this particular time or modify this memory at this particular time, not you. But you know what you can make a mistake, you can forget to set a mutex. And you can accidentally try and modify memory at the same time as someone else. What's interesting about rust is that the type system effectively prevents that. So, you because remember back to this idea of no two pointer mutable pointers can exist to the same shared spot in memory. Well, that would seem to be rather restrictive, because I just gave you a great example of why I might want to give two threads the ability to modify the same piece of memory. So it's not strictly true that you can't have two threads that modify the same that have a ref a mutable reference to the same piece of memory, it's just that Russ forces you, thank you. Cheers.

</p>
<p><strong>Brian Holt</strong><br />
Hello.

</p>
<p><strong>Jafar Husain</strong><br />
Keeping you honest, I like that keeping us honest. It's actually the the rust type system tricks allows you to allows you to sort of trick the compiler into thinking it's okay, but you have to jump through certain hoops. And it comes down to the way the type system works. The way that Russ type system and the standard library has been built, it basically says that a lot of the things that you can do to a particular sort of memory, you can own their capabilities that you can only have, when you have a certain type of references, something a simple example would be rather than a T, I have an RC of tea. And RC of tea is a great example of a way of augmenting the type of with capability, which is to say that two or three or four or five people can have the illusion of owning a particular type. Because as soon as that particular excuse me owning a particular reference, because as soon as their reference goes out of scope, somewhere, there's a shared number, right? That's decremented or incrementer, saying, hey, well, as soon as we've got down to zero owners, quote, unquote, of this type, we're actually going to get rid of it. And so RC would be like one of the first ways in which you can get around this notion of well, single owner, right, but our C's are technically not mutable. And so if you want to be able to mutate, you can have this RC of rep cell. So you keep stacking up these types, and the rep cell adds this notion of mutability. Or you can have an AR C where incrementing the counter because notice that counter is like shared memory that can only be done on a Thank you chair. The moment I said that there's some number that says, hey, how many owners do we have here? You should have sort of pushed back and said, Well, wait a second, that's shared memory, right? I mean, who like just the very fact that multiple threads can be modifying this number is is seems like a problem. So there's this aarC, our atomic reference count, which actually locks around that. And so if you want to have this notion of shared ownership across threads, you would use this aarC and so they what's really nice about rust without going into too too much detail is they have all these very fine grained types which add just enough capability. And basically, these types under the hood, they use unsafe code, what's called unsafe code, which basically opts out of all the the checks of rust to allow you to get around the borrow checkers rules. So for certain operations that they absolutely know are safe, they can sort of get around the borrow checker and just like oh, yeah, sure, because I know in code at runtime, I've enforced by say, setting up a mutex. For example, by setting a new text, I know that it's safe for you to go ahead and have multiple mutable references to something, I'm going to at runtime, enforce the invariants that I can't enforce at compile time. So at compile time, I can enforce the invariant that no two people can change the same reference by just saying you know what, only one of you gets a mutable reference. But as we said, there's some cases where for performance reasons, we want multiple processes that are threads, excuse me, to have a mutable reference. And so we know that we can still make it safe if we make sure that only one person can modify that reference at a time at runtime by setting a mutex. And basically, there's an IRC that allows you to do that. And just by putting those checks in at runtime, it says the borrow checker Hey, man, it's cool. Don't worry about it. I know what I'm doing. Right. And so the vast majority of time, you're not having to do this weird, unsafe code thing that's deep in the standard library, and a lot of eyes have been on that code. And you know, made sure that it's right, right. I mean, obviously, you can't be 100%. Sure, right. But a lot of really smart people have taken a look at Russ Central Library. And so for the most part, you don't need to write a lot of unsafe code, but you can be pretty confident that your code is going to be safe, very, very confident, in fact,

</p>
<p><strong>Ryan Burgess</strong><br />
so in my research, I've been like looking and I feel like a lot of people are referencing go and rust to be similar. And I don't see similarities between the two. And maybe I'm wrong because I have only used them both a little bit, but I don't see similarities. One doesn't replace the other, I guess is what I'm trying to get at.

</p>
<p><strong>Jafar Husain</strong><br />
Yeah, you know, a lot of that came from the fact that when go came out, initially it titled itself a systems programming language as well. And it just goes back to that amorphous definition of what a systems programming language means, you know, potato potahto to some degree, I think rusts sense I think like goes trying to As I believe I am not 100% sure on this has tried to rectify that by like clarifying what they mean exactly by systems programming language, I think Go is a lot higher level. And there's a lot in the sense of a systems programming language the way I defined it earlier, where you are have a much clearer idea of what at the machine level is happening, I don't think go falls into that category. Right, I think they've even acknowledged some of the confusion that's come out about calling themselves a systems programming language go has very different goals than rust. So I really wouldn't put them in the same category.

</p>
<p><strong>Ryan Burgess</strong><br />
I even like looking at them. I it didn't feel like that. But I saw a couple articles trying to say use roster use go or vice versa. And I just didn't think they should be categorized together.

</p>
<p><strong>Jafar Husain</strong><br />
Don't misunderstand me, I go you typically see is used for application servers. You can use Russ for application servers as well. Right. But just along lines, what I was saying earlier, you know, it's a more complex language, I would, I would think, I think it's semantics are more complex than go. And so you just got to make sure you know, you actually need to use it.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I would, I would classify, go more like Python. Like, don't get me wrong pythons even higher level than that. But you'd probably use go in places where you would otherwise use Python. Whereas you would use rust, or in places where you'd use C++.

</p>
<p><strong>Stacy London</strong><br />
I was gonna say if maybe it'd be helpful to have like, an example of maybe like a web tool or something built with rust that would like tie together what systems programming?

</p>
<p><strong>Ryan Burgess</strong><br />
That was actually going to be a question if anyone knew of some projects that are actually servos serve probably the biggest one. That's the biggest one that I could think of. And I was trying to think of other ones. But so

</p>
<p><strong>Brian Holt</strong><br />
servo is the rebuilding Firefox's browser engine in rust. And I don't know if it'll ever actually supplant Firefox itself. But they certainly have brought pieces of servo into Firefox stable today.

</p>
<p><strong>Jafar Husain</strong><br />
I think what they've done is and Microsoft actually went through a similar process where, and God bless them for doing this going back to the drawing board and saying, Look, we have this hugely old code base, and it's getting, like web development is, you know, the web standards are not getting more complete, like less complex, rather, they're just more of them, right? It's just added. And we just keep creating new concepts in the web. And so understandably, they're looking at this code base missing is flicker, it's really, really hard to reason about what's going on. It's really, really hard to improve performance. It's really, really hard to maintain security while we're doing all these these features. And God knows what what has, what's a system where you need more security than the web browser, right? And so they got lost, and they did a lot of research. And they went back to the drawing board, and they said, Look, how can we? How can we build build a language that allows us to do a better browser, and they built servo from the ground up. But in practice, of course, it's very difficult to just sort of switch entirely midstream to a new browser. I mean, for starters, like if you were to start right now and completely build rebuild the Firefox browser. By the time you were done, there'd be like 1000 new web standards. I'm slight hyperbole, only slight.

</p>
<p><strong>Ryan Burgess</strong><br />
Slight. It's probably true, though, right? Very close, you can't

</p>
<p><strong>Jafar Husain</strong><br />
catch up. But what they're doing is they're they're trying to take certain pieces of the browser engine and rewrite them in servo. And so they if you look, though, at what the Rust has allowed them to do, it really opens up more possibilities from concurrency. Because when you're seriously thinking about this single ownership model, all of a sudden, all these opportunities open up where you sort of, oh, look, you know what I mean? I can actually run these three or four tasks in parallel, because, you know, they're not doing shared mutation I've been, I've been really fastidious about that. So just to,

</p>
<p><strong>Jem Young</strong><br />
like, tie everything together for all the front end people listening or like, what's going on? I like my personal opinion is concurrency is the next thing in JavaScript. So we have the shared worker, which is pretty underutilized right now. Only because it's hard to do concurrency. And it's hard to do shared worker without shared memory. Shared memory, I know is in the specs coming up, right. jofra? Yes. Shared shared array buffers, yes, shared array buffer. So concurrency is going to be a thing in JavaScript just because we've pushed single threading pretty far. Not saying it's not great. But so that's gonna be next thing. So people that don't know think Kirsi a start learning it because it's pretty hard and be start learning a language that actually does concurrency. Because you learn some pretty bad pitfalls. I did java in the early days and got some nasty errors from learning, multi threading, things like that. You learn quickly, you learn quickly. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Which is why I like JavaScript. But you're right, it is starting to come into our world.

</p>
<p><strong>Jafar Husain</strong><br />
And it's really nice to have a language that's like, just safe by default. And it's really hard to make a mistake in terms of concurrency and shared mutation and rust, because the type system is just kind of leads you down the path of success. And so despite my comments earlier about last resort, I think if you're going to be I think that Jamie made a great point, which is that concurrency is coming JavaScript. And so if you really want to learn great patterns around concurrency, I actually think that's another great reason to learn rust.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've talked a lot about learning it. Does anyone have any good examples of where they can learn rust?

</p>
<p><strong>Brian Holt</strong><br />
I have several resources that I found one the docs are actually really really great for, for learning rust. Mozilla definitely takes care to document their stuff really well. And then beyond that, I just I found a couple of good resources. One of them was, I don't remember what it is, but it was a node, or what's rust for node developers. It was just a guy that went through and built the same thing in node and then did this exact same thing in rust. He just kind of it kind of felt like a little bit towards the end. Have you ever seen that little cartoon where it's like, okay, how to draw an owl. And step one. Step two, draw the rest of the fucking owl. It felt a little bit like that. But it's kind of hard not to because with rust, you have to talk about lifetimes, you have to talk about the type system, you have to talk about all these different things. It's like, you just need like seven blog posts just to get through the basics to get like, Okay, now let's write like a Hello World, right? That's what it kind of feels like. But there definitely are resources out there specifically for JavaScript developers.

</p>
<p><strong>Jafar Husain</strong><br />
So there's actually a podcast that I used and like, I mean, it's great for learning. Even if you come with zero knowledge, it's new recitation. And they explain as podcasts, they explained some of the more complex concepts in rust and like more coherently than I have in this podcast, so you should check that

</p>
<p><strong>Ryan Burgess</strong><br />
out. Yeah, are they? Are they drinking on the pot? No. And

</p>
<p><strong>Jafar Husain</strong><br />
yes, it's like a dry podcast. So you should check that out. And there's also a really advanced podcasts which I haven't even listened to, but you might want to check out which is, what was it Brian?

</p>
<p><strong>Brian Holt</strong><br />
Rusty radio,

</p>
<p><strong>Jafar Husain</strong><br />
Rusty radio, I would work up to that.

</p>
<p><strong>Brian Holt</strong><br />
So just to clarify, Russ station, like, they're like the crap mascot of rust. It's adorable. Just like there's the Go Gopher, there's the rest restoration.

</p>
<p><strong>Ryan Burgess</strong><br />
That's amazing. Yeah, I mean, the Go Gophers. Pretty amazing.

</p>
<p><strong>Jafar Husain</strong><br />
Pretty cool. Yeah, I think one thing worth talking about is the emphasis of rust on programming on the heap, like one of our excuse me on the stack, one of the things that we as JavaScript developers don't spend a lot of time thinking about, I think, is the heap versus the stack. It's just something that just sort of happens, right? Like, oh, I allocate a number, hopefully, our mental model is that that ends up getting allocated on the stack or a Boolean, that ends up getting allocated on the stack. But a string or a, you know, an object or an array ends up allocating on the heap. And so you don't think about it that much. But one of the ways in which rust achieves big performance gains is that it allows you the flexibility to say, You know what, I'm going to allocate this structure, the structured code, what we would talk about as an object in JavaScript on the heap, or excuse me on the stack. And the reason why that's important and interesting is that the stack is really cheap, right? Like allocating space on the stack is just, you know, a very, very fast operation. And so, although it's somewhat counterintuitive to JavaScript developers, right, because we think about when JavaScript developers, when we think about cloning an object, it can be very, very expensive, right? And you think about a deep, deep clone of an object, pretty expensive and requires a lot of heap allocations. But when you're cloning objects on the stack, if you know what you're doing, you can, it can basically be the cost of just blasting through a contiguous block of memory and copying things into a new contiguous block of memory. Thank you. That's the two sipper

</p>
<p><strong>Brian Holt</strong><br />
getting blasted.

</p>
<p><strong>Ryan Burgess</strong><br />
As we wrap up today's episode, we like to share pics of things that we like and found interesting and like to share. Let's go around the table and share our picks for today's episode. Jem, you want to start it off? Oh,

</p>
<p><strong>Jem Young</strong><br />
yeah. My first pick is a blog post on Medium from Eric Elliot. And it's called what is a promise? I haven't interviewed enough people. I find people don't have jobs from engineers don't have a good grasp on what it promises still. So read it. No, it's a very thorough in depth look. My second pick and I'm stealing Ryan Burgess. This pick is the Santa Clarita Diet, because I know I was like Netflix shows but this show is probably the funniest show I've seen all year. Oh, thank you. People are great, but

</p>
<p><strong>Ryan Burgess</strong><br />
I will let you have that because you I think you love it more than me. So that's okay.

</p>
<p><strong>Jem Young</strong><br />
I fell in love the first episode. So this is so funny. And I generally don't think most shows are I struggled

</p>
<p><strong>Ryan Anklam</strong><br />
through three and I just turned it off.

</p>
<p><strong>Ryan Burgess</strong><br />
Go to four. You need to

</p>
<p><strong>Brian Holt</strong><br />
go at least to the last episode.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. It's 10 episodes at like 30 minutes an episode.

</p>
<p><strong>Jafar Husain</strong><br />
What do you have to do, man?

</p>
<p><strong>Jem Young</strong><br />
raise a family.

</p>
<p><strong>Ryan Burgess</strong><br />
Stacey, what do you have?

</p>
<p><strong>Stacy London</strong><br />
So my first pick is remix by private consoles have a max Cooper song which I really like listening to a lot lately. It's really good. Good for coding. He's coming to San Francisco at the end of March. I'm super excited about are you going? I'm going right on. Everyone should go. Okay. Second pick is Jeremy Geddes. I think I'm saying his name right. He's a he's an artist that I really enjoy. And I just ordered a print of, of his and it's an astronaut sort of floating in space. And he has his themes are really great, like floating, falling, colliding, drifting. So I really like his art. So check that out. And then the last thing is just a plug for Atlassian. The team that I'm on our hiring a senior front end engineer to come work on BitBucket. Cloud we're doing cool stuff with React and Redux. And yes, six years 2015 all the all the mocking stack. So

</p>
<p><strong>Ryan Burgess</strong><br />
for that he was gonna correct.

</p>
<p><strong>Brian Holt</strong><br />
I'm excited for Yes, eight.

</p>
<p><strong>Stacy London</strong><br />
So if you're interested, the postings on the site, apply that way or contact me through Twitter, and so forth. That'd be cool.

</p>
<p><strong>Ryan Burgess</strong><br />
And they get to work with you. That's pretty big bonus.

</p>
<p><strong>Stacy London</strong><br />
I hope. So.

</p>
<p><strong>Ryan Burgess</strong><br />
Ryan, what do you have?

</p>
<p><strong>Ryan Anklam</strong><br />
So my first pick is the focal Mobis. To chair. And this is a once you've sat on it, it is pretty cool. I didn't know the name. So I'm getting slack messages saying Ryan, people are sitting on your desk trying out your chair now. And what it is, is just an active sitting stool, and you can sit on it, and you can kind of tilt and lean, it's just a really good way to kind of not stand but not sit and you're still active sitting, you're engaging your core. It's pretty neat. So check it out. And the second pick is an app called the HIA. And what it does is, has a large repository of numbers that are known as spam. And you can report numbers of spam. So when you get a call on your cell phone, it'll say, Hey, this is from a known spam caller or suspected spam. So it helps me avoid a lot of just wasting a lot of time with with spam callers. So the more people that use it, the better it gets. Because we can all keep reporting numbers of spam. So check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
Jennifer, what do you have,

</p>
<p><strong>Jafar Husain</strong><br />
you know what I might even have given the same link last time. So I'm sorry about that. I mean, it's probably a good link, then I just I just got a plug pure script for anybody out there who has, if you want to learn a language, if I was JavaScript developer, I would learn pure script before us. Because it's just it's a beautiful language. It's what I wish JavaScript had been. It's got an amazing benevolent dictator for life. The person behind the language is just phenomenal. And so go check that out. And then the other thing that I would like to recommend is denotational. Semantics. There's a talk by Conal Elliott called denotational semantics, which the reason I'm interested in this right now is that I have like a piece of technology and multiple input specification effectively, like if you ever wanted to write a specification. And if like me, you were ever really like, it was difficult for you to understand the difference between the specification and implementation. I'm in a position right now where I want to define the specification have multiple implementations? And like, where does that line work? How do you define one without defining the other? Cornel Elliot has an amazing talk called denotational. Semantics. And

</p>
<p><strong>Jem Young</strong><br />
I think you check that sorry, just the jump there. If anybody's ever read like a TC 39 proposals specification, like I've tried to muddy through it, I'm like, how do they write these because I leave understand what's going on. I like to think I know JavaScript pretty well. So I know where you're coming from. And are you is your spec for observables. In JavaScript?

</p>
<p><strong>Jafar Husain</strong><br />
Yeah. I mean, if you if you know, that's a good way, I guess if you're comfortable with observable, you can take a look at that. That's denotational semantics. It's like more abstract than that. But I would check it out. I think it's pretty cool. In that in that order, check out your script first, and then that it'll make a lot more sense.

</p>
<p><strong>Ryan Burgess</strong><br />
You have to check up here script for

</p>
<p><strong>Jafar Husain</strong><br />
me. I love your script.

</p>
<p><strong>Ryan Burgess</strong><br />
Brian, what do you have?

</p>
<p><strong>Brian Holt</strong><br />
I have two picks today. First one is thanks to a certain developer Steven Kawaguchi. from Toronto, we are drinking some very fun Scotch that he sent us. So shout out to him and go Toronto, right, Toronto's good tea dot. And then my second pick is the entire goddamn country of Ireland. I just got back yesterday, and my liver still hurts. Seriously, it was like one of the best vacations I've ever had. So definitely visit the the Emerald country. What was the best part? Probably getting drunk.

</p>
<p><strong>Ryan Burgess</strong><br />
Like you said there was everywhere you walk. There was a pub that you could stop it.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, someone's quoted me a fact that you cannot draw a path through Dublin without hitting at least one pub. So you can't go east to west without walking past at least it's literally impossible. Yeah, sound surprised me. So yeah, I went and I drank a lot of goodness. And it was it was wonderful.

</p>
<p><strong>Ryan Burgess</strong><br />
Sounds awesome. It was alright, I have two picks. Well, kind of a half pick because Jem stole mine but I'm gonna plus one on that Santa Clarita Diet it is it is a fun show. It's zombies like how can it be a bad thing some rom com it's Assam rom com zom calm he feels

</p>
<p><strong>Ryan Anklam</strong><br />
natural.

</p>
<p><strong>Ryan Burgess</strong><br />
You know what I think it is growing I think like as the actors work together to really like build that rapport. I think it will get better and better.

</p>
<p><strong>Ryan Anklam</strong><br />
Sounds like an excuse for bad.

</p>
<p><strong>Jem Young</strong><br />
Right? Did you did you like Better Off Ted?

</p>
<p><strong>Ryan Anklam</strong><br />
Never watched that.

</p>
<p><strong>Jem Young</strong><br />
Oh, okay. It's the same create Arrested

</p>
<p><strong>Ryan Burgess</strong><br />
Development or 10. Watch

</p>
<p><strong>Ryan Anklam</strong><br />
that either. Oh, well, alright. Well, the no Rhiness no opinion from writers to children.

</p>
<p><strong>Ryan Burgess</strong><br />
I recommend everyone check it out. I'd love to hear your opinions on it. Gemini would definitely like to talk about that on Twitter. So hit us up. Tell us what you think my second pick is A article that I was reading today about React Native and Instagram adopting some React Native and they're talking through some of the learnings that they had. I've been really interested in React Native lately so I was reading that today and found it to be an interesting read. So recommend checking that out. Before we end the episode I want to thank John for for being a guest. Thank you for coming back on the episode. Thank you for having me. Yeah. It was a pleasure having you as always, where can people get in touch with you?

</p>
<p><strong>Jafar Husain</strong><br />
Just my Twitter, barley, Twitter, J H. U. S is and Sam Ayane is Nathan.

</p>
<p><strong>Ryan Burgess</strong><br />
Great. Thank you all for listening today's episode. If you've been enjoying the podcast rate us on iTunes, it really helps others discover the podcast like us on Facebook and follow us on Twitter at  <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>, any last words drink up.

</p>
<p><strong>Jem Young</strong><br />
memory memory,

</p>
<p><strong>All</strong><br />
memory

</p>
`;
        return transcript;
    };