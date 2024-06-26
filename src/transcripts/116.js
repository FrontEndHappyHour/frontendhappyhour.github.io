module.exports = function() {

const transcript = `

<p><strong>Ryan Burgess</strong><br />
Well, welcome everyone. We are now live the panel discussion. So welcome to the front end happier panel discussion. For those of you who aren't familiar, the front end Happy Hour is actually a regular podcast that has a variety of different topics, whether it be software engineering topics to career discussions, it features a regular panel of engineers working at companies in the Bay Area, we often have a lot of great guests on to so that's always been a lot of fun. So we thought, hey, why not do a front end Happy Hour panel discussion at cube Con this year. So that's been exciting. This is the first time we've ever done that. For our discussion topic today. We wanted to keep it you know, fairly broad. So we're going to be talking about kind of all things front end patterns. So we'll be talking anything from TypeScript to react to react hooks, who knows where we'll go with this. We also want to encourage you all listening to jump into the chat and feel free to start asking us questions. We will definitely be getting to audience questions. But before we jump in, I also want to invite two of the speakers from Q con, Dan and Jason, who were just recently speaking on the tracks. Can you both give introductions of who you are? And what you do? Okay,

</p>
<p><strong>Jason Lengstorf</strong><br />
I'll go. So I'm Jason lengstorf. I work at Netlify. As a developer experience engineer, I also host a live stream a couple times a week called Learn with Jason, where I pair program with people to learn something new in 90 minutes. And I like learning stuff and building stuff. I'm really, really happy to be here. This This show has been one that I have wanted to be a part of for a long time. Very sad that I haven't had a chance to actually be there to do it in person. But you know, Silver Lining pandemic times make remote podcast possible.

</p>
<p><strong>Ryan Burgess</strong><br />
That's very true. All right, go ahead.

</p>
<p><strong>Ben Ilegbodu</strong><br />
Yep, my name is Ben Ilegbodu. I am a front end engineer at Stitch Fix. I was actually on Jason's show recently, just a ton of fun. So I highly recommend folks check it out. And I've always wanted to be on print and happy hour as well. So this worked out well. So happy to be here.

</p>
<p><strong>Ryan Burgess</strong><br />
Cool. Well, and we've got two of our including myself, but two of our panelists that are on the front end, happy hour, Stacey and gem. Can you both give introductions of who you are and what you do? Stacey, I'll let you go first.

</p>
<p><strong>Stacy London</strong><br />
Sure. Hi, everybody. I'm Stacy London. I'm a senior front end engineer at Atlassian. Soon to be joining the flow team. I'm currently on the front end platform team at

</p>
<p><strong>Ryan Burgess</strong><br />
on, Jem, go ahead.

</p>
<p><strong>Jem Young</strong><br />
Jem Young Senior Software Engineer at Netflix. And I also have been on Jason's show, it's like a rite of passage.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, apparently, Stacy, and I have not yet so we may have to put it on. Exactly. And I'm Ryan Burgess. I'm a software engineering manager at Netflix. So let's jump right into questions. I'm hoping to see more questions from the audience too. But right now, I've got some questions for you all. This is a big one, I always think of like, when is the right time to use a JavaScript framework? And I feel like everyone has their own feelings around this. But I'm curious what makes you think, yeah, this is the right time I pull out a framework, it there's

</p>
<p><strong>Stacy London</strong><br />
a lot of questions, you have to ask first to say like, well, what what is it that you're building? Why are you building it? Who's building it? Or is it just something for fun for you, then obviously, maybe you don't use a framework, because you're just trying to like, play around. But if it's on a team, maybe at a big company, and you know, there's going to be a lot of people working on it over time. Maybe you want something that helps you define patterns, or force you into structuring your code in a certain way, because it makes it easier to maintain in the long run. So a lot of questions like that, you know, are you building a content based site that's just maybe some static content versus something that's really dynamic and might need more complex libraries to help you manage state, things like that? Those are like a lot of questions that I usually ask myself, I have

</p>
<p><strong>Ben Ilegbodu</strong><br />
this saying that whenever I see or hear a company saying, Oh, we're using vanilla JavaScript, all that means is that they have a undocumented internal JavaScript framework. Because ultimately, you're going to create patterns when you're reusing stuff. And it's like, oh, let me extract this. Let me abstract this, but then it's undocumented untested. So now you have your own that then is hard to hire for. So I definitely cosign what Stacey was saying is that when you got a team, it's just good to have something that already exists, that's documented that people can point to and use that.

</p>
<p><strong>Ryan Burgess</strong><br />
Dan, you're saying we shouldn't write our own frameworks every single time.

</p>
<p><strong>Ben Ilegbodu</strong><br />
That is that was heavily applied.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay. I just want to make sure, but there's

</p>
<p><strong>Jason Lengstorf</strong><br />
like a gradient with it. Right. So like, you know, like, I think what it is, is whenever you if you're not using a framework, you're writing a framework. And I think that's absolutely true. But in a lot of cases, if you're building something that small, every framework comes with a set of assumptions and context and things that you need to understand. So if you're, if you're introducing react, or or view or, or whatever, for something that is pretty small, that's a lot of assumptions and overhead, to have to learn, even though react and view and all these frameworks are really well tested and really well documented. So if the only assumption that somebody needs to make is like, well, we're using, you know, the the JavaScript fetch API, and the whatever, HTML Web Audio API, those are both also pretty well documented. So if there's not a lot of abstraction, if you're not building something really complex, sometimes the trade off is actually higher to learn something big, even though your your framework, you know, your little tiny framework is undocumented and untested. So I think that it's a consideration that very much comes down to what Stacey said, like, you got to look at what you're building, who's going to be using it, how long is it going to live? How, how big can it scale,

</p>
<p><strong>Ben Ilegbodu</strong><br />
that how long is going to live is a key part? Because they all start small? And they all started like, oh, yeah, we're just gonna do this little thing. And then you add something, you add something, and then you have your own internal framework?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, unfortunately, that's always the problem, too, right? Like, it's not always you don't know how long it's gonna last sometimes either. Like, I don't go and be like, Oh, I'm just creating start small. And then it continues to grow. And that's like, Wait, this legacy code is now like years old. And I probably shouldn't have done that this taking this approach that has happened to me many times. I still have not learned that my lesson on that. So I don't know if I'm the best to give advice on it.

</p>
<p><strong>Jason Lengstorf</strong><br />
And that's always a fun, that's a fun thing to walk into two. And it's like, you know, I worked at IBM. And I remember walking into one section of the code base, it was like, oh, yeah, so our website is actually the, the marketing site we built for a conference in 2006. And then it just kept growing. So it was like this, it was absolutely a disposable site that just never died and became completely critical to the Korea company.

</p>
<p><strong>Ryan Burgess</strong><br />
Yep. I've feel like I've been there many times. Jason. Yeah. Stacy, you'd mentioned static site generators or static sites. And I'm curious, you know, kind of similar vein is, where do you start to, you know, maybe it's just a complete opposite. There's no interactions? And you're like, that's when I would use it. But when do you start to lean that? Like, yes, a static site is the right tool for the job.

</p>
<p><strong>Stacy London</strong><br />
I guess it definitely like heavy content. So you're really like, maybe, you know, obviously, like blogs or maybe marketing sites where there's just a lot of text and a lot of copy things that you're not asking the user to do a lot of interaction like, click a thing, make a choice, do this next step are workflows, complex workflows, yeah, things were just really like a lot of just content reading, not a lot of interaction, I guess that's how I'd classify it.

</p>
<p><strong>Ryan Burgess</strong><br />
I think I have you too. It's when often to when there's like something that's fairly easily templated. To write, I love that you said a blog, or an article, things like that, you just have these set principles that you're like, yeah, it's not changed, constantly changing. I have these like, maybe three different templates that content falls into. And that's just really easy to just generate more and more content out of it, and don't necessarily need to rely on a database, which is amazing to what have

</p>
<p><strong>Jem Young</strong><br />
you define what a static site is just in case people aren't clear,

</p>
<p><strong>Ryan Burgess</strong><br />
go for Jason, you're about to talk anyways, I

</p>
<p><strong>Jason Lengstorf</strong><br />
pick off, I'll pick up with a definition. And then I'll present a potentially controversial opinion. But um, so static site is when you take all of the data and all of the code that you're going to use for the site, and you compile it ahead of time. And what you're left with is a folder full of assets that you can serve, you can upload them to FTP on any server, and they'll just work. So you can put it on a CDN, which is the kind of the standard way to do it. And you get really high performance. And there's, there's no more servers or databases or anything kind of in between, it's just the compiled assets left, which means that the distance between the person requesting the files and the files themselves is really, really low. There's no no chain that has to go through anymore. And because of that, that's actually what's led me to what is maybe my controversial opinion, which is that I default to static sites. And instead of saying, when would I use one? I'm arguing the other way. I'm like, What am I doing that wouldn't work is a static site, because anytime you introduce something that's not static, you're introducing something that can break in production. If you've got a server, that server can get overwhelmed by a lot of traffic, if you got a database, that database can go down. So if that chain can cause your website to fail in production, I need to have a really good reason to make that dependency. So typically, I'm more focused on like, how do we make this whole thing static and then use some columns Have serverless functions or async JavaScript to do that dynamic stuff on the client side so that even if that part does go down, the app itself is still alive, we can present like, Hey, we're having some database trouble refreshing a minute, as opposed to just getting a 500 error.

</p>
<p><strong>Ben Ilegbodu</strong><br />
Yeah, I think the introduction of loading states or their prevalence of loading status, I would say in our apps really helps that so you can statically generate a shell of maybe empty content and a loading state or some content, a loading state, but least something that displays and then fetch API, get the data and then populate it there. So yeah, I like that approach. I've just started using next js. And that's kind of the approach that they take. It's like, start static, and then ideally, start working your way up to dynamic content. That way,

</p>
<p><strong>Jem Young</strong><br />
I like slightly. I have a slightly disagreeing pic with Ben, or they're just, you know, we don't often disagree. I think people abuse loading states too much. I see it more and more often, where people are like, it's a single page app. So once it loads it all be seamless, but that five to 10 seconds, sometimes I've just blank, like, it should have just been a static site, and then they progressively load in that other thing. So yeah, yeah, you're totally right. It's just the further you go down that path, the more you have to pay attention versus if you go, just a simple static site, it's always going to work, it's always gonna load pretty quickly. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
you can get really easy to that's another thing that's really nice. Like you just dump it on another server, move it, it's you don't have to do much at all. Yeah,

</p>
<p><strong>Jason Lengstorf</strong><br />
yeah. I mean, I like one of the things that I think is really interesting about it. So for example, I've got a friend who I built a site for back in the, you know, like the early 2000s. It's a WordPress site. And he wanted to do an update to it. So we switched it over to be Gatsby on the front end with WordPress as an API to provide the data. And at some point, in the last three years, his WordPress site just went down, like the server died, we don't know what happened. But no one ever knew because the static site was built from the data not relying on the data. And the only reason we found out is because he went to write a post for the first time in two years and was like, hey, my, my site's down. And I was like, wait, no, it's not I went, and I looked at it. I was like, here, it's up. He goes, Yeah, but I can't write something new. And I was like, Oh, your WordPress site is down. And so it was, it's kind of a, it's a cool feature, and you know, kind of like that fragility goes away. And I really like that, you know, kind of like what you said like, and we can move that around, we don't need specialized WordPress hosting to host this guy's site, we can put it on anything, you know, AWS, we can throw it up on, you know, we put it on like DreamHost on a like a single shared host, and it's just gonna work.

</p>
<p><strong>Ryan Burgess</strong><br />
So we have, we have a couple questions in from the audience, too, which is great. One from Matt here that he's he identifies as a back end engineer working on a full stack team, and says he's hesitant to dive into the front end code, due to what tipped over him looks like really confusing and poorly constructed code. It could be a symptom of the company's former startup mentality of build fast culture? Or is it the feeling that the code is you know, front end code is almost more complex to what code on the back end is, and it's really funny is, you know, I feel like I get what Matt's getting at here, too, is like, I've definitely worked with a lot of back end engineers who will jump into the front end, and they're like, this is very complex and confusing. I'm sure we've probably all similarly heard things like that. Is that true? Do you all find like, I know each of us have probably worked a little bit maybe in the backend or a little more full stack? Do you find that it's difficult or like harder on the front end, from back end? Or that things are more complex?

</p>
<p><strong>Stacy London</strong><br />
I guess one thing I've noticed, like with react as an example, I mean, React is just the view layer, right? And it's just a small piece of, of perhaps a complex puzzle. And there's a lot of different ways that you can construct that application and patterns you could implement as a team. And there is no one best way. And so if you go from company to company, you know that, quote, react application is going to look very, probably very different. And I think that's part of that confusion, you can't just go to another company and pop right in and be like, Oh, this, this app is constructed exactly the same as my last one. So there's a lot of flexibility there. But then then, and that's on purpose. Like there's a there are pros and cons to like, micro libraries versus you know, some something like say, like Ember, as an example, that enforces a lot of structure, and enforces a way of doing things. So the Ember app is if you go to another company will look very similar. So it kind of depends on what you've used to implement your front end. What framework do you use or library, but it can Yeah, it's gonna look pretty different no matter where you go.

</p>
<p><strong>Jason Lengstorf</strong><br />
I feel like that holds true on the back end too, though. So like, if you know if We're talking about a, like a laravel app, there's a lot of opinions that go into that. And like structure and guidance. If you're looking at like a roll your own PHP back end, it feels pretty much like any JavaScript code base, there's chaos. There's type inference there, you know, things go wherever they go. And so I think it kind of comes down to what backend are you coming from and how much overlap contextually is there between your back end language and the back end decisions that were made, and the front end decisions that were made? Because like, I don't feel uncomfortable moving between the WordPress, PHP code base and the no JavaScript code base, they feel equally chaotic and weird to me, you just kind of have to learn how decisions were made. But like stepping into an Angular code base, there, it's super clear, like Angular has so many rules about how you do things and how things get passed around. But it always feels the same when you move between Angular projects. So yeah, I think that's a I mean, a capital it depends.

</p>
<p><strong>Jem Young</strong><br />
And, Jason, oh, boy. Oh, go ahead. Yeah.

</p>
<p><strong>Ben Ilegbodu</strong><br />
I thought I say

</p>
<p><strong>Jem Young</strong><br />
we were like, pretty much, probably well, I think it's easy to confuse structure with well organized. A lot of languages use on the back end, like Java, or something like that, it's gonna be strongly typed, just gonna have a hierarchy. So you look at it, it looks organized, but it may actually be a mess that wasn't well architected. And I think that's difficult to tell, just looking at code on the JavaScript end, yeah, JavaScript scrape, because you can do whatever you want. That's the Pro, the con is, you can do whatever you want. And that often happens with JavaScript is people have different opinions. Because unless you're using, like Jason said, a framework like Angular, there's no enforcement of any particular pattern in JavaScript, it's you do whatever you want. So often, yeah, it's easy to look at a front end code and see 10 Different people worked on it, and see 10 different patterns. And that's easy to do. And I guess the the bigger talk is, as a senior engineer, it's your job to go through and clean it up. Because nobody ever wants to do that. Because it just keeps running. So I, I forgot who asked the question. But yeah, it's not at all unusual if you feel that way. Because that's just kind of the nature of front ends. And, you know, the nature of JavaScript. Yeah. So your thunder even

</p>
<p><strong>Ben Ilegbodu</strong><br />
though no, that was half of it. So half of the thunder, yeah, was that exact point. And the other one is that, in general, back end code is simpler, because it's single pass, right? server comes in, you go to the database process, it returns some HTML, bam, you're done. Whereas on the front end, it's like iterative, you got to respond to this user interaction, this thing that happened, and then the scroll this thing that you know, so it's all this stuff that's different that's happening, it's not a single path. So trying to organize how all of that should work. All of the interactions can be difficult. And if you don't have predefined patterns, and you're just doing any way you want. And last Tuesday, you did a one way, way, the next Tuesday, we're going to do another way, then yeah, it can get pretty, it can be pretty messy.

</p>
<p><strong>Stacy London</strong><br />
And you don't have a guaranteed runtime, sort of like some backends, the runtime is pretty guaranteed. Whereas like, it's not as bad as it used to be, but crossbrowser stuff, is that all that? Yeah, yep,

</p>
<p><strong>Ben Ilegbodu</strong><br />
that too

</p>
<p><strong>Jason Lengstorf</strong><br />
well, and it gets even more confusing, too, when you start digging into like, like the next code base, for example, in the same file, some of the code you write is going to execute a node, and some of its gonna execute in the browser. And so a lot of it is just contextual stuff that you kind of have to you learn by experience. And so I think a little bit of a stumbling around and just trying things to see where they break.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, well put. So another question from the audience. Marcel has a good one. That means maybe even it's come up a little bit is when are micro front ends? Not the right answer. I feel that there is a lot of hype around micro front ends, and plenty of people are recommending them for large teams working on a single front end code base, without much consideration. Thoughts from all of you.

</p>
<p><strong>Ben Ilegbodu</strong><br />
dropping bombs mark.

</p>
<p><strong>Jason Lengstorf</strong><br />
I probably have, like, lots of opinions, but I also feel like I've been talking a lot. So I don't want to steal the floor.

</p>
<p><strong>Ryan Burgess</strong><br />
We're always happy to have lots of strong opinions, though. Jason, so you can't just like start like that. And then or so.

</p>
<p><strong>Jason Lengstorf</strong><br />
Okay, we'll get the hook ready to like pull me off stage when I run away. Okay, fair. But so so what I've noticed with micro front ends, is that micro front ends have a lot of the similar benefits of micro services. And if you if you think about them that way, and you're thoughtful about the way that you build them, they're really freeing. This is actually a lot of what my talk was about as this idea of kind of optimizing for deletion. You want to create really clear boundaries between pieces of code, so that each individual domain in the code base is isolated. clearly defined where it interacts with other things, and you can wholesale swap it out for something else, because all you have to do is make sure that that surface that API contract is is upheld. And you can, you know, drop out the React drop in view, as long as the API's are the same, nobody cares. And that makes it really, really, really powerful. But the catch is that if you're not disciplined about that, and you don't think about those API surfaces, you end up with something that is called a micro front end, or historically in micro service. But it's leaky. And like code bases, in general, we've been talking about this, they live for a long time, they're fluid. And that makes them leaky, by default, if you're not structured, if you're not rigid about the way that you do these things, someone's going to reach into your micro front end and use something that was supposed to be internal. And now you depend on that forever. And it means that if you try to change your microphone, and you actually can, so it's no longer a microphone, and it's now part of a like, loosely or tightly coupled, very confusing, like multivariate codebase. And so, if you do your micro front ends, with discipline, it's an ultra powerful way to move very quickly and give people a lot of autonomy. If you let that discipline break down, it's gonna make everybody super sad,

</p>
<p><strong>Ben Ilegbodu</strong><br />
have strong opinions, too.

</p>
<p><strong>Jem Young</strong><br />
Oh.

</p>
<p><strong>Ben Ilegbodu</strong><br />
So my opinion is that micro front ends specifically, are a technological solution to people problem, right? Like, we need all these teams to work independently. So we're just gonna throw some tech on it. So then you end up having to throw more tech to counterbalance the problems that the separation has caused. So Jason, the one you mentioned, is exact same problem is leaky interfaces. The other one is that front end is different than micro services in that, like, people are seeing things. So sometimes we do want those micro front ends to interact. Like if I have something on the left side and something on the right side. Well, when I click something on the left side, I want it to do something on the right side, but they're supposed to be independent. So now you got to create contracts and all these things. And that becomes a problem, then there's two more problems I always see is that one, we want them one a page that has four different microphones on it to look the same. Well, now we're saying that, Oh, if we change the color of the button, we need all of them to sync at the same time. And the second, you need things to sync at the same time, like, like microphones were not designed for that, which is a problem. And then the last one, that's the problem is that you can't just have react and view and this other thing on the same page, if you want to have a performant page, like it's just a disaster, even if you have two versions of React, that's a disaster. So it's like if you want to have a it's like either it's micro front ends ends up either picking yourself, your team's development over the user who's using your site, because then you're giving them four megabytes of JavaScript, so I still use them. But I still have issues with them.

</p>
<p><strong>Jason Lengstorf</strong><br />
I think I also may have been classifying it slightly differently. Because when I think of my girlfriends, I'm usually thinking of like, one whole route, not like a patchwork of tiny front ends on a single page. So I would agree with everything you said, including and like up to an including probably don't like a patchwork.

</p>
<p><strong>Jem Young</strong><br />
I think what you're ultimately saying is, it requires such a high degree of technical rigor. I don't recommend them. I don't think most people most teams are capable of doing it. I speak from experience, or at least about microservices at Netflix, we are extremely heavy users. They can be a blessing, but they take so much technological rigor to even enforce the contract between two different things. The complexity is generally not worth it. And then you talk about transferring that to the front end, where the surface area is completely different. I have a hard time recommending them to anybody, but like I just a team of senior people who all know exactly what they're doing. Other than that, you're just asking yourself for, for trouble.

</p>
<p><strong>Stacy London</strong><br />
And to echo I guess what Ben was saying kind of thinking about the user experience of it, too. I mean, the whole reason that we went towards this single page, app architecture spa kind of stuff to begin with was to not have to refresh the whole page to see something when you switch routes. And you do you could potentially step away from that if you if like Jason said, it's like a route based micro architecture. Well, is that okay, that you know, you're you're causing that sort of delay in user seeing something is that, you know, time delay worth it? Those are the conversations I think you should have to about like the the UX of at all.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's a great point. Because like, really, at the end of the day, what's the best user experience? Like that's what we're creating these applications for. And you don't want it to be a poor user experience? Because it maybe makes your life easier as a developer. You know, that's always good. You want to think about both of those as developer ergonomics but also what's best for to the user.

</p>
<p><strong>Ben Ilegbodu</strong><br />
So, Jason, you gave a talk on this. So yeah, if microfinance are not good, but you have multiple teams trying to work on stuff, what should we do?

</p>
<p><strong>Jason Lengstorf</strong><br />
So when I'm talking about the the stuff that I talked about was not necessarily on the same site. But like in a company, you're going to have suites of things. So for example, you've got your, your community site, you've got your your information portal, you've got your app front end, you've got marketing, splash pages, all of these things. And what I've noticed is that those are, that's independent software that ends up styled to look like it's part of the same company. And so I think that you there are ways that you want that to, you know, as you said, it needs to look like it's part of the same company. And we need ways to make that functional. But also, it's okay, if you refresh the page between the app dashboard and the app homepage, I think that's expected and a natural thing to kind of count on. I also think when you get into this idea of like, we as companies are under the especially startups are kind of under pressure to move fast and ship quickly. But we can't break things like we've seen what happens when we break things, we cause problems that are kind of up to an including just the, you know, potential downfall of democracy, right. So we can't move fast and break things, we have to move fast, safely. And if we, if we scoped down these experiments to be something that that are optimized for deletion, then we have the opportunity to test and learn without having to rewrite our entire code base. And we have the opportunity to build something that we can prove like, here's the code that lets us prove that this product works. And then when we decide we're going to build it for real, we can rebuild it to be part of our core architecture, and hotswap the experiment out for the production code in a way that doesn't cause us to have to rewrite a bunch of adjacent code. So it's, it's not necessarily a one to one between micro front ends, and optimizing for deletion in the way that I was talking about it. It's just more that when we're building anything new, we should really think about where it touches and what's going to be reaching into it and make sure that we're thoughtful and kind of controlled about that. So that we have fewer places that break when when we inevitably swap something out or make changes down the road. So I thought,

</p>
<p><strong>Ryan Burgess</strong><br />
you know, we talked a little bit about the backend. Right? We talked about that. And then we I know, I think Jason, you may even mentioned brought bringing up node and that you have JavaScript, on this back end server, I'm curious to hear all of your thoughts is, what do you call the back end to your front end stack? I think there's different opinions on this. And I'm curious to hear all of your thoughts on that.

</p>
<p><strong>Stacy London</strong><br />
Do you mean like the front of the front end, and then the back end or the front end? And

</p>
<p><strong>Ryan Burgess</strong><br />
then that's exactly what I'm getting? At? The fact that you just had to describe that is bang on is like, what is the backend? And like, how do you think about it as as a front end engineer to is like, should you be dealing with that? And like, where's where do you draw the line? Is it middleware? Is it is it a full back end?

</p>
<p><strong>Jem Young</strong><br />
And if you work in primarily in Node, like such myself, I work primary node, occasionally I'll talk, touch react. Am I still a front end engineer at that point,

</p>
<p><strong>Ryan Burgess</strong><br />
are you Jen,

</p>
<p><strong>Jem Young</strong><br />
I don't consider myself one. I work more infrastructure. I think the the mindset around the front engineer is different from someone working on the back end, because the request paths are different. And just your idea of what you're trying to optimize, and who your customers are, in this case, my customers are the engineers themselves, versus the actual users of the products.

</p>
<p><strong>Ben Ilegbodu</strong><br />
So I have an experience. I don't know if that's the same for you, Stacy, because we're both on front end platform teams, is that I actually don't write that much React code, either. I'm doing Babel, configs and Webpack, and things like that. So I affectionately call it dev ops, as opposed to DevOps because it's front end. DevOps. So am I a front end engineer, I'm doing stuff for the front end, like it's all to that goal. But I'm actually not writing front end code, UI code all that often anymore. So it's kind of there's like three places now that our front end engineer ends up touching, because of JavaScript. So

</p>
<p><strong>Stacy London</strong><br />
yeah, it's almost like there's another new role of like, front end, DevOps or build tooling, optimization stuff, because Yeah, same I'm not I had been working on Node, a node app, doing performance tooling, and I've not barely written any react in a while. So yeah, it's, it's very different. But it's still like, we're called the front end platform team, because it is your service to the front end, but

</p>
<p><strong>Ben Ilegbodu</strong><br />
because you have to understand what the changes we make, how they impact the front end. So you have to actually know the front end really, really well. Yeah, to to do that. So yeah.

</p>
<p><strong>Jason Lengstorf</strong><br />
When I was at IBM, that we had a similar setup where there was there was a front end team, but a lot of the work that that I was doing, and then a couple of the other senior engineers were doing. We called it internal tooling was how we ended up referring to it It was like, how do we make? Because? Well, actually, let me answer the first question and then I'll explain why we call it internal tooling because we, what we found was like, in the front end, we were using microservices. And that meant that everybody who was going to work on the front end before they could work on the front end, had to install Docker. And then once they installed Docker, they had to set up a VPN, then they had to configure nginx to reverse proxy all of the rest of the micro services they weren't working with, so that things would work. And then they had to configure some other back end stuff and environment variables. So that we could use like IBM SAML on, on our local machines. And all of that is so far outside the realm of a front end engineers day job, that it would cost us weeks, for people to get up and running, we'd hire somebody, they'd come in as a junior engineer, and it would be like a month before they were writing code. And that sort of slowdown was such it was such a brutal, like motivation, killer, somebody comes in bright eyed, bushy tailed, they want to write some code, and we're like, okay, great, we're gonna make this super hard for weeks. And you aren't going to get a commission for you know, what is it October, maybe by Christmas, right? And so it's this very kind of de motivational thing. And so a lot of what what we were doing on the, like the tech lead side, was trying to think through how do we make that easier? How can we remove as much of that friction as possible, which meant that we were writing tooling that was like, let's automate some of that Docker install. Let's see if we can make the whole front end static. So we don't need Docker at all? What if we can you know, what if we can eliminate this engine X problem through some kind of a, you know, like, this is how I ended up at Netlify. Honestly, as I started looking at how to solve these problems, and Netlify was solving them. So I was trying to figure out how they did it. And then I got frustrated left IBM, IBM. So I think that the it is like a whole different expertise. And it shouldn't be one that I think is put on front end developers. And I think we should we should hire for that specifically, like, you're not a front end developer. If your whole job is working on front end tooling. You're you're something different. I think I like DevOps, I think that's really fun. But yeah, it really is like a whole different role,

</p>
<p><strong>Ryan Burgess</strong><br />
though. Anything, anyone else? I love all this, I'm like, Yes, this is like really a good way to say that I feel like the front end role has just kind of been shoved all the things into it. And it's like you're expected to all these things, when it's actually now become a lot more, there's just more roles, like you said, there's like you could be still working on the front end, but very specific to the user interface or to a tooling or to the server. There's just more and more that's going on, which is kind of interesting. I've definitely seen that throughout my career. I'm sure all of you have as well,

</p>
<p><strong>Jason Lengstorf</strong><br />
one more thing, which is that there's you know, and that's just the tooling side, we didn't talk about the node side. And like, yes, there's also the whole thing, where if you for if you're working on a dashboard, and it's going to be what somebody logs into and sees their account with, they're going to be pulling in data from like, the billing team from the, you know, from, like the usage team, and all these API's that are run by back end folks who expose API's, but those API's are intended to provide data not to provide an experience, which means that there's this whole node layer of like, how do we take raw usage data, raw billing data, and turn that into something that's visually useful to someone. And that creates a whole lot of node work, or pre processing work or whatever, some kind of like proxy layer that's transforming raw data into useful data. And sometimes you can push that back on to the back end teams. But I found that that tends to hamstring them because they they're trying to be everything to everyone and everybody who touches that service needs some kind of a bespoke endpoint. So instead, it gets pushed up to the front end, where now you've got front end developers trying to write node code to like proxy all of this information. And I think that's also some of the frustration that back end developers feel when they walk into a front end code base. Because a lot of front end developers just got pushed, like, way out of their depth to deal with back end code and proxy things. So I think part of it too, is it just puts us out of puts us out of our ability to like, really do the things we're good at. We get dropped into dropped into the deep end, and it's like you're gonna do 10% of what you know, and 90% of stuff that you have to learn because otherwise you can't do your job. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that was awesome. Amazing panel. You all Thanks, Ben. And Jason, for joining us. Where can people listening get in touch with you?

</p>
<p><strong>Jason Lengstorf</strong><br />
I am on Twitter at J Lang store. That's where I probably spend an unhealthy amount of time and then I'm also on the web<a href="https://twitter.com/jason">@jason</a>.af then.

</p>
<p><strong>Ben Ilegbodu</strong><br />
So similarly, you can find me on Twitter, it's been in VP you can find me there ask questions there and stuff, have healthy conversations, dialogues and whatnot. And then my website is been in VP calm. So either those two places. Good, good start.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on and thank you Q con for having us as a panel. This has been a lot of fun. Jevin Stacey, where can people get in touch with you? Stacy Linder,

</p>
<p><strong>Jem Young</strong><br />
on Twitter. And I'm Jeremy, I'm on Twitter and you could find us all on fronted happier the podcast.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. I'm Ryan Burgess find me at <a href="https://twitter.com/burgessdryan">@burgessdryan</a> on Twitter. And yeah, like Jem said you can if you're wanting to listen to more conversations like this, we do have front end happy hour.com You can really find us on whatever you'd like to listen to podcasts on. Thank you all for listening this panel. This was a lot of fun and thanks again q con for having us.

</p>
<p><strong>Ben Ilegbodu</strong><br />
Thank you

</p>
`;
return transcript;
};