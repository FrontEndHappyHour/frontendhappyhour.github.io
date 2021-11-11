module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End, happy hour. This is episode 30. We're joined by Harry wolf to talk about static site generators. Harry is actually a creator of rep tar, which is a static site generator. So I'm sure we'll get to hear a lot of fun stuff about rep. Tar. Harry, you want to start it off by giving us a brief introduction of who you are, what you do and what your favorite Happy Hour beverages


<p><strong>Harry Wolff</strong><br />
are. Absolutely. first time caller longtime listeners very happy to be here, Ryan, I appreciate it. It's been a very, very long time, long distance to get here. But it was fun. Yeah. So I'm Harry Wolf, which is my name, which is hysterical. So I hope you do enjoy that I am a UI slash front end engineer. I'm currently working at MongoDB as a senior UI engineer, do the interwebs with the Java scripts, which is all the things that I enjoy. And my favorite habit time beverage currently is I'm very big into the Japanese whiskies right now. So all the Suntory times for your favorite enjoyments. Currently, the DBQ 12 is my favorite expensive beverage with the Hibiki Toki. The everyday casual beverage of choice for a good time isn't Tori.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Thank you. Let's go around the table and give brief introductions to today's panelists. Stacy want to start off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a front end dev at Atlassian.

</p>
<p><strong>Brian Holt</strong><br />
My name is Brian Holt, and I'm the one that knocks

</p>
<p><strong>Jem Young</strong><br />
Jem Young Senior Software Engineer at Netflix.

</p>
<p><strong>Derrick Showers</strong><br />
Derek showers software engineer at LinkedIn, I guess this year

</p>
<p><strong>Ryan Burgess</strong><br />
in front end engineer at Evernote. And I'm Ryan Burgess, I'm a UI engineering manager at Netflix. In each episode of the front end Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's episode keyword is dynamic dynamic. So if anyone on the podcast says the word dynamic from now on, we will all take a drink.

</p>
<p><strong>Harry Wolff</strong><br />
So dynamic group here,

</p>
<p><strong>Ryan Burgess</strong><br />
cheers. Dangerous, let's actually start off by what is a statically generated site

</p>
<p><strong>Harry Wolff</strong><br />
static generated site is a piece of software that takes in static files on your file system typically, and then runs it through some operations that you run locally and outputs a static website, static website being something that you can easily upload to a web hosts and just serve as plain HTML. So there is no server element involved. There's no

</p>
<p><strong>Ryan Burgess</strong><br />
no CMS no database, correct. It's just

</p>
<p><strong>Harry Wolff</strong><br />
as simple as an arcing or an FTP sync. And like there's your website online benefit there being that you have complete understanding and control of what drives what powers website, the actual source files, and then also how it becomes an actual website that can be viewed by people on the internet.

</p>
<p><strong>Ryan Burgess</strong><br />
I think another benefit too, is that people are more and more hosting their files on GitHub and actually just totally hosting it on GitHub Pages. And that works perfectly is having a statically generated site, you can actually do that. So I think that's always one of the biggest benefits right there.

</p>
<p><strong>Harry Wolff</strong><br />
GitHub definitely helped increase the popularity of static sites with having Jekyll when the I think it is the most popular static site generator, I think, safely to say, but definitely having that built in as a default option to create a blog or website as part of your GitHub account has definitely blazed the trail there and using your own static site generated site.

</p>
<p><strong>Jem Young</strong><br />
static site generated site.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's a bit of a mouthful.

</p>
<p><strong>Harry Wolff</strong><br />
Yeah. What is is like a snake.

</p>
<p><strong>Ryan Burgess</strong><br />
Are there any benefits for performance or anything like that, just by using static files?

</p>
<p><strong>Harry Wolff</strong><br />
I mean, so the biggest thing that drew me to a static site generator was having direct understanding of where your content was coming from, there's no, there's nothing in between you and your content. And like, when I write a blog post, I like to think of them more as articles. Like there's actually a lot of time spent into them when iterations and like just really crafting it. And just having that under, like, get control, or just me personally, I have it in Dropbox, like some leaf there and I can just access them wherever I want. And just being as plainly close to that intimate piece of work that I have like it's very much like the like, it's the writer side of me coming out saying I want to know where my content is. I don't want to have a database like wrap it around, just be a piece of like, like, here's my data, right? I don't want to To be just data when you feel like this is my content. And that's what I think static site generators really prop up because it's like, this is your content. And it's really what is the true star of the show? It's not like the JavaScript, it's not the CSS. It's like this is your content. And this is what will be on your website. I don't think that was your question.

</p>
<p><strong>Ryan Burgess</strong><br />
But no, no, I like that. Yeah, I like your point, too, there is actually having version control. I think that's a big, big thing is that sometimes using like a database, which a lot of CMS is use, you don't necessarily always have version control? Yes, like WordPress and things, sites like that, you will have some sort of versioning. But I just really liked the actual git versioning that you have with a static site. And also,

</p>
<p><strong>Harry Wolff</strong><br />
what I like about having a static site generator is that it encourages somewhat, being able to go back in time and edit an existing posts, because it's just part of what your content is. And it's not just like, Okay, I've made a blog post that's on, like, onto the next one. It's like, trying to have these things be more evergreen content, and less just like have the moment, especially with like the tech blogs that you see out there where like these, there's these articles online that are large parts of an existing ecosystem that without them some of these technologies and frameworks could not actually grow and spread without like evangelists out there writing these blog posts and having them in like, it should be encouraged to have them be evergreen, like don't have I don't really get hung up on like the date in the URL, I just have it be content that if that was done more often, if people were more willing and happy to update existing content, as frameworks evolve along with them, then there'd be less like fatigue, or like just strain in the ecosystem, because there is no relics. It's just like this is blog posts moving along with the dynamic nature of the web chairs. Here's that was completely unintentional, I swear.

</p>
<p><strong>Ryan Burgess</strong><br />
How are you typically writing your files? When you talk about writing a blog post? How are you writing them? What's getting, you know, start what's from start to finish? What does it look like?

</p>
<p><strong>Harry Wolff</strong><br />
I mean, that's a thing that I constantly struggle with. And it's always a case of writer's block mixed with like, the thing that I always tried to do is reduce the friction towards writing a blog post. And it used to be when I was using WordPress, back in the day, I used the WordPress editor. And then I moved on to using an application called by word boi WR D. And that was a GUI application with a markdown interface that you could just use and would output HTML if you wanted to. And I used that for a while. But then after a while, it started to get to become more friction and more of a hindrance towards my writing cadence. And actually, what I've settled on nowadays is just using my text at my code editor, I use Adam, I know all the shortcuts of how to navigate around the content. So like, if I want to select multiple lines, or I want to like do Command D, like select the same word and augment that easily, I can do that I'm just more nimble in the editor. And because again, it's just files on the file system, I can easily open up an atom and just have it there. I've also got use like the black background. So it's just easy on my eyes and just not glaring me when I'm up at like 11pm Drinking some happy hour beverages. Because that is the best way to write like to not feel a little bit looser, it's like that the bombers curve, almost curve that just like keeps curving. Because you wake up the next morning like, oh, that doesn't make sense. But it still inspires more thoughts after that. And that's always healthy.

</p>
<p><strong>Jem Young</strong><br />
So to step back, because I think we we've gone like really, really far in a static and you've gotten more in the philosophy of like, why static? Let's talk about like the technical aspects of like, why do you want a static site, one, a static site isn't going to make any Ajax posts an Ajax request to get new content, but the content that is sent down the wire is the content you're going to see every single time static site is simpler. It's faster, it doesn't use a lot of superfluous JavaScript, things like that. And it's the beauty of them. I think, especially something like GitHub Pages is like, you don't have to think about too much about the server. Because the server is just gonna be a file server. It's just gonna serve out HTML, HTML, or whatever you want to serve, which I like, because every time I set up a server, I'm always like, should I use AWS or Dropbox? No, no, no, show us express? No, no, I'll use resta phi. Oh, and like you get, I get so hung up on that. And I'm like, No, I'll just use a GitHub page and to serve static files because I don't need a server. And I think that's the beauty of a static site.

</p>
<p><strong>Ryan Burgess</strong><br />
It reminds me the old days like it really really does have just like when I'd have to FTP something, which sucked. I like the fact that I can still use Git, but it's it's just static files, which is great.

</p>
<p><strong>Augustus Yuan</strong><br />
I feel SEC sites are like just perfect for personal websites because like you really don't need like a database or anything. supercomplex like, kind of like what you were saying, Harry, where like, I feel like it lets you focus more on the content. And it's like, it's just, like dumbs it all down. So you can focus on writing and what you really want to show in the website.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I think static sites should be more popular than they are. It's just people are so quick to be like, Oh, I'm using React. And I'm using Webpack. And using ES seven, I'm using all these like cool technologies. I'm like, Cool. What are you building is like a blog, like, well, you're doing to learn cool, but you like just over engineered and you don't need to at the end the day all we need is HTML, CSS for the web to work, you can

</p>
<p><strong>Harry Wolff</strong><br />
end up with a very bald Yak, about how you actually make the blog,

</p>
<p><strong>Ryan Burgess</strong><br />
much shaving so much. Hair, you also mentioned writing articles and getting in the mood of writing in that you're writing an atom, what are you writing? Are you writing HTML? Are you writing markdown files, JSON,

</p>
<p><strong>Harry Wolff</strong><br />
or any markdown files, and definitely leveraging the ability to have code blocks in there, I've seen a lot of like, medium heavily. So medium by default, as far as I know, doesn't allow you to embed code snippets. And they say just include like a just just kissed.

</p>
<p><strong>Ryan Burgess</strong><br />
I say just

</p>
<p><strong>Jem Young</strong><br />
I think just is a gift. No, it's like, yes. Now why do we even think about this?

</p>
<p><strong>Ryan Burgess</strong><br />
Now we're talking GIF and GIF. Like, right? You can't you

</p>
<p><strong>Harry Wolff</strong><br />
can't think about that Scientology conversation. So it's fine. dynamically.

</p>
<p><strong>Stacy London</strong><br />
You want to get the gist of this code snippet?

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, that's 100%. Right? That?

</p>
<p><strong>Harry Wolff</strong><br />
Oh, just That's right. Yes, that's true. I will never forget that. Now until I do. So medium doesn't allow you to, by default, embed code snippets. So you have to go out and make a gist on GitHub and like, post that link in there to actually have it in there, which I hate, because that just breaks up an otherwise coherent blog posts into like different parts that if you were to migrate a laptop and like want to migrate entire content, you'd have to then still reach out to to GitHub to get that content, then when the medium article, and it's just like, it's just ugly to me. So like having a markdown file with code blobs, making sure that you have a correct syntax highlighter, the two prominent ones being highlight J. S and prison are the two main ones, which will, I think, I'm not sure if that's what GitHub uses. But it definitely does the same thing, where given some code will add the nice pretty syntax highlighting that you're used to in your editor. So having that in there, Adam is smart enough that if it sees a code block, it'll actually turn on the behaviors of that language. So you can all sudden just like drop into like JavaScript mode, and you're just writing JavaScript within a markdown file.

</p>
<p><strong>Ryan Burgess</strong><br />
That's pretty cool. I've never actually used Adam enough to see that. That's pretty cool. I'm

</p>
<p><strong>Harry Wolff</strong><br />
not 100% on that, but I think it is leads for my or do you have to plug in maybe writing? Yeah, I've just noticed that it's not a hindrance might also just be I'm used to this shortcuts already with Adam, I'm just gonna backtrack, the entire declaration. So anyone out there listening and says, Oh, this guy's wrong. I'm just gonna say you're right, which is fine. But definitely just having markdown files where that is the single source of truth, by having things broken up into different locations. It just adds complexity and just makes things ugly, in my opinion, very semantic Lee speaking. But having that be the article that if you do want to update having an all there colocated is wonderful. I think

</p>
<p><strong>Stacy London</strong><br />
it's interesting, I would I did the opposite of that. There's a WordPress blog that I'm working on. And I have like some code snippets in it. So I was trying to use, you know, highlight J S, or one of those. And every time I'd update the template for the site, it would overwrite all those all that stuff to include highlight J S, you'd have to like go back in and tweak stuff. And so the idea of I liked having that, but I went to just because it was so much easier. I didn't have to, like, override it. But I think in general static site will make that so much easier. All of it.

</p>
<p><strong>Derrick Showers</strong><br />
One thing I will say that I think is interesting is we talked about it being simpler with this title, and it totally agree. But I do think it's simpler for us as developers, right? So like when you start adding into the mix, like you have a blog that you want other people to be able to contribute to, or even just like, I did a blog when I went to Europe recently, and you know, it was a lot of times it was just trying to write blog posts on an iPad, which would be really hard to do, you know, in some sort of, yeah, well, you know, just having other people be able to contribute to it. And that kind of thing is sometimes difficult if you don't have people that are I mean, it's kind of weird, right? It's simpler for us, because it's like, I get what you're saying. But then it's also just really simple just to once you get the initial setup done of like a WordPress blog or something you have, I mean,

</p>
<p><strong>Harry Wolff</strong><br />
I've had horror stories where like, I don't actually go into the history of like my, my blogging, like, just to give some background like I used to have I started blogging in 2010. So I've been blogging now for us 2017. So that's seven years. Seven minus zeros. Yes, that thing. Oh, Brian, thank you. Yeah, great. I'm a great mathematician. So I've been blogging since 2010. The first blog I used was WordPress, because that is the go to and it definitely is by far the easiest thing to use by the public. at large, like, without a doubt, I've had so many horror stories of like writing a blog post and like saving a draft or like updating it, the page refreshes. And I'm like, that's not what I say, like it's gone. And I'm like, Oh, I'm crying. Now I'm on the floor, fetal, and just eating ice cream. And I'm just not happy. I've had that same it's a horrible feeling. And like, I used to do this dance where before I would save, I would select all copy, paste into my text editor update. Did it work? Yes. Okay, I can discard that. Now,

</p>
<p><strong>Ryan Burgess</strong><br />
I've done that that's wasted workflow right there that you should just be able to trust the editor saving it. And another thing with WordPress that I've run into that I still have a blog that's like a large ASP blog running on that. And I would love to get it off of it. But it's just finding the time to do it. It's it's a lot of work to do it time to burden, it's a burden to do it. But I've actually had it where I've had to migrate to servers, because there's been issues with the server. And that takes a long ass time. You've got to like dump the database, you've got to, you know, reinstall all the images, all the images, oh, man, there's so many images on this site, too. So you're really dealing with a ton of things. Whereas if it was just static, yes, you still have to move that from one server to the other. But it's a lot less work.

</p>
<p><strong>Harry Wolff</strong><br />
So the benefit of WordPress is that using WordPress is easier. I'm not gonna argue that, but the operations aspect of WordPress is greater than a static site. And that's where you might and the my big problem with WordPress, like if I have some freelance project that I'm doing where I just want to help someone with a blog or website use WordPress, that's fine. But if you don't keep WordPress updated, you run a big security risk all the time. It's a huge attack vector, because it's a huge part of the internet. And that's just what happens when you become very popular. So if you have a WordPress blog, and you don't maintain it, you don't update things, you don't use a third party vendor to help make sure that it's secure. People have zero day exploits that they use to get control and try to turn your server into a zombie, like into a botnet. And if you're using it personally, you're updating it like you log in, it says updates available, they try to make it as easy as possible. But it's still on you to do it. Because if you're so close,

</p>
<p><strong>Ryan Burgess</strong><br />
and say, Oh yes, I have to update

</p>
<p><strong>Harry Wolff</strong><br />
you, when you update. There's that fear of like, we'll come back. Like I'm going from WordPress, what's the newest version now? Three, four, or I think there are like 3.9 to four like, this is like, Am I okay? 20 to back it up before you should back up,

</p>
<p><strong>Ryan Burgess</strong><br />
you should back it up. Like you actually should back it up every single time. Grant is totally not done that

</p>
<p><strong>Stacy London</strong><br />
I never do it. I'm just like,

</p>
<p><strong>Ryan Burgess</strong><br />
fingers crossed. But you should actually back it up. And I think that that adds to it too is the fact is that's more work.

</p>
<p><strong>Derrick Showers</strong><br />
I think it's more work on on your end is like the the you know, the developer, but I don't know I guess what I was getting at is I've heard some people make the argument that static sites and using like a static site generator, you can even teach a client how to do that and and update their own content that way, because it's because of all the things we said that's so great about it. But I don't know, I think that's just a little bit overzealous, like I just I've watched tried to walk a client through using WordPress and it's difficult, you know, the dashboard.

</p>
<p><strong>Harry Wolff</strong><br />
And there's definitely trade offs between the two like WordPress you have more ops to do static site generators, you have more just tooling to use Yeah. Like the two main things I miss in using a static site generator which WordPress provides out of the gate. One is just easy image management like be able to drag and drop in there like that's easy. Like if you want to do that in a sec site, make a folder you like copy him and J's make a reference to that make sure that the link is right. So hugely pain but like to have a non engineer do that is more work to do that. But the main argument I've seen that is why static site generators are easier for 10 quotes that I'm quoting with Europe, my eyes is if you are part of a company and you're trying to service an internal team with the marketing team or sales, whatever the cost for you to maintain a static site is less than a WordPress site because of the security things mentioned before. It might. That is not to say that you still have to run like the tools to generate the output. But there's no fear of there being any security implications. It's much more of a controlled environment. As Ryan mentioned, I am the author of a static site generator called Raftaar. Right now you want a tool to direct the static site. So yeah, so I see a lot going around. So reptile or my small little tirade of tides reptile used to be called yarn. Why is it not called the panda such a sad panda? The status of all pandas this is you can check the history on the reptile repo. This was way before yarn of Facebook's yarn that was released, which is a competitor to NPM packager, I think my name for yarn makes more sense than theirs. You spin your own yarn, which is what you're running. They choose yarn for the package path Maybe it's cute with cats. Great. Not related. But that came out and I was like, am I gonna compete with Facebook? No. So very swiftly change the name. I'm using rep tar. If you are a kid of the 90s, you'll remember that from Rugrats progress,

</p>
<p><strong>Ryan Burgess</strong><br />
I knew it right when you put it as your logo, as

</p>
<p><strong>Harry Wolff</strong><br />
if the people at Rugrats, which is no longer on air, getting mad about my usages will talk to them and maybe change it again. But for now, it's a very catchy name that is fun to say reptile build and repertoire builds. Which I really shouldn't add, like some ASCII art when that happens, because that'd be a lot more enjoyable. Pull Request, welcome. But yeah, I mean, you have, so repertoire just builds. But something I'm hoping to add to offset the simple engineering aspect of static site generators is a dynamic dashboard that you can use to actually do your content and edit in the browser, where you can actually see all your posts and like, actually get an understanding of what reps are knows about your website and kind of bring back some of like, the features of WordPress back into the stack land, which is kind of like cheating. But if you can have the best of both worlds, why not. And like to Derek's point, the thing that you can't do with a static site generator is if you are on vacation, you want to remotely update a blog. If you don't have like that setup on a server, you're out of luck. So being able to have an admin that you can log into potentially and like update things remotely is definitely something that I think can be installed. And it kind of bridges the gap between like staying static and like dynamic websites.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. So you mentioned obviously, repertoire being a tool that would help static generated sites. What are some other tools out there that are popular like we have mentioned jackal, which is a Ruby base, static site generator, what other ones are available out there?

</p>
<p><strong>Harry Wolff</strong><br />
So the reason why I made reptile was when I was looking. So to get back to my fun story. I was using WordPress for a couple of years. And then I got tired of WordPress, because it's written entirely in PHP and PHP development in the past, and it's fine, but it's not my language of choice. So it isn't WordPress for a couple of years. And then ghost the ghost blogging platform came on the scene that was just node all node awesome. My JavaScript my lingua franca, I think means I like that language. I don't know if that means. But yeah, so goes came out. And it's kind of like a distillation of the core functionality of WordPress, where you have a blog and that's it. WordPress has grown to be a jack of all trades in many ways where you can make an entire website and ghost was like, No, we just wanna be a blog. And that's what it provided and it wasn't no but just what drew me to that because I could actually understand the internals and contribute there. So I actually was a core contributor on goes for a couple of months helping them out growing it because I want to have features for my blog that I want to actually use after a while I got still tired of not being close to my content and I got tired of being far away from the metal that metal that titanium that lovely like to be run on the metal. Yeah, that's that's how I code I just sit on a hard floor. And I'm like, This inspires me. The pictures on the wall the I have nothing else to say about more metal thing. Yeah, all the metal things just like Metallica. And that's how I concentrate. It's like Ozzy Osborne biting bat and screaming in my ear. And that's how I have all my blog posts.

</p>
<p><strong>Jem Young</strong><br />
Wait, isn't isn't metal, a static site generator as well. metalsmith

</p>
<p><strong>Harry Wolff</strong><br />
ah, Chris segues. So dynamic. Oh, yeah, we know. Cheers. I think I heard that. I just said that. Or did you actually say that? Did you say dynamic, but I just think you said dynamic. You just said you just said

</p>
<p><strong>Ryan Burgess</strong><br />
it three times

</p>
<p><strong>Harry Wolff</strong><br />
by dynamic guy. So I was using ghost for a while. And the call of the wild, aka static sites finally hearken to my ear. See, I like to write blog posts. So the literary florals come out.

</p>
<p><strong>Brian Holt</strong><br />
That's the whiskey.

</p>
<p><strong>Harry Wolff</strong><br />
I do have an empty stomach. So this was always a great idea. Just to plunge head deep. So I went and started using metalsmith. And metalsmith is a static site generator, written by the guys over at segment IO. I don't know who was the original author, but it's a ultra simple bare bones static site generator, and that the core functionality is recent files, write some files, and then if you want to add templates, or anything like that, it's done via middleware. So it's ultra bare bones, which means that you can Ultra configure it whichever way that you want. And it's lovely, and it's very beautiful in its simplicity. I used that for a while but to actually have parody in the features what I have with ghosts in WordPress, I had to make a metalsmith configuration file that ended up being almost 200 lines of code. Like that's a little silly and like to maintain that became very brittle and I would update metalsmith or deputy a plugin when you want to change something. And I was always worried that my site wouldn't build anymore. I was like, This is not a way to live. Like I don't want to have to I try I went to a static site generator so I wouldn't have to worry about that anymore. And I'm worrying about again, so I've kind of gone backwards. So from there I was okay. metalsmith is not the answer for me. And I'd ever want to go to Jekyll even though it is most popular. Yeah, Jekyll.

</p>
<p><strong>Ryan Burgess</strong><br />
What's the wrong with Jekyll? Like, I mean, I've tried it once. But I have a problem with it being Ruby.

</p>
<p><strong>Harry Wolff</strong><br />
I mean, that's, that's honestly the main topic.

</p>
<p><strong>Ryan Burgess</strong><br />
That was my problem, but I'm interested to hear Ryan, what's your what's your issue?

</p>
<p><strong>Brian Holt</strong><br />
One, it's just slowish shit. It's Ruby. Yeah, it's Ruby, which I mean, whatever. I don't like writing Ruby. But there are people that like

</p>
<p><strong>Harry Wolff</strong><br />
it. I mean, it's.

</p>
<p><strong>Brian Holt</strong><br />
But I mean, that's probably three quarters of my complaint is like, I'd write something, I'd save it. And then I have to wait two minutes for it to rebuild. And it's like a, like, I use it for the my, like courses that I do online for free, right, I put on my site, because, like, I've just used it, because GitHub will build it for you, which is lovely, which is a really cool feature for GitHub, but I just can't wait for two minutes for to fucking,

</p>
<p><strong>Harry Wolff</strong><br />
I mean, you got farther than me, because I never actually tried to build Like, I literally looked at Jekyll. And I was like, Ruby, no, not because like, because it's not what I I want to understand the code that's powering my website. And that's what was really the driving. I don't give a shit. I know you're much more. I mean, I prefer JavaScript a little bit more PC about that, even though I'm a Mac user, but

</p>
<p><strong>Ryan Burgess</strong><br />
this is a JavaScript podcast. Yes, we're good. That's

</p>
<p><strong>Harry Wolff</strong><br />
fine. Safe Space. Yes. It's safe as my the whiskey hits my brain. I'm just more and more worried about the words that I'll say, Yeah, I'm not a fan of Ruby, I'd say that it's not my preference. So junk was never an option. But I looked around the node. There's also a awesome static site generator called Hugo written in Go, and one of its main taglines is that it's

</p>
<p><strong>Ryan Burgess</strong><br />
fast. It's better than Jakob because it's fast. It's really fast.

</p>
<p><strong>Harry Wolff</strong><br />
I mean, it's all ready to go. But like, again, you'd have to learn go things and I don't want to let go things because again, the Java scripts is the

</p>
<p><strong>Brian Holt</strong><br />
good scripts to get scripts, good script scripting scans.

</p>
<p><strong>Harry Wolff</strong><br />
Yes, the scripts that the S nature, I should have been the keyword s

</p>
<p><strong>Stacy London</strong><br />
was brought to you by the letter.

</p>
<p><strong>Harry Wolff</strong><br />
So Hugo wasn't an option. One of the bigger static site generators in the node ecosystem is one called hexo hexo. He xo. And that has a very large community, large Asian, like Chinese like Japanese, like a lot of it's translated in Chinese and Japanese and like, there's a large community from there that uses hexo, which is awesome. I was trying to look into it if it can do what I wanted it to do. But some of the idioms and like concepts that I had, there's like this concept of like a box and like you can like place. I didn't gel with my mind. I'm already

</p>
<p><strong>Brian Holt</strong><br />
not like, yeah, so I'm not doing it. Yeah. So

</p>
<p><strong>Harry Wolff</strong><br />
no, yeah. Boxes, I like spheres.

</p>
<p><strong>Brian Holt</strong><br />
repertoires is based on spheres. Yeah,

</p>
<p><strong>Harry Wolff</strong><br />
it's just a big circle. And I just like go down there's T. Circle with teeth is what I should have called it. So

</p>
<p><strong>Brian Holt</strong><br />
then I looked the best framework name ever

</p>
<p><strong>Harry Wolff</strong><br />
with a company metal album.

</p>
<p><strong>Ryan Burgess</strong><br />
So Harry, what technologies did you select for using Raftaar. And why

</p>
<p><strong>Harry Wolff</strong><br />
so

</p>
<p><strong>Brian Holt</strong><br />
dynamic,

</p>
<p><strong>Harry Wolff</strong><br />
they are super. So repertoire was born because I didn't see anything out there that I want to use. And the core principles of a static site generator is that it takes a markdown and outputs HTML. So the core ingredients of that is you need to have a markdown parser. So you take markdown files in front end html. So actually went down an interesting GitHub hole with a markdown editors on GitHub, like there is this. So right now I'm using a markdown tool called markdown, it and before that I was using something else whose name I forget. But in looking to upgrade that previous library, I found out that there was some weird fracturing in that ecosystem where some other developers splintered off because of the ecosystem there was just drama and I went there something weekend where I just spent time like what is this drama? Drama, I was just reading like these old like GitHub issues being like, oh, there's animosity is enjoyable, because it's not directed towards me. Someone from some previous library to mark on it and that's what takes markdown gives you HTML has a nice plugin systems. You can add GitHub specific features to your markdown processor. Great. I'm also I stole from jackals Yamo configuration file, where you can take Yamo and that's your config. So I'm using Jessie mo takes Yamo goes to chance objects great. I recently added a schema validation using joy, not the emotion to the library.


The app was really good. The snap.

</p>
<p><strong>Brian Holt</strong><br />
Didn't get the point though. That was the best part. He snapped and pointed.

</p>
<p><strong>Harry Wolff</strong><br />
Yeah, good. I pointed out the microphone board. Yeah, you get you get it? I got it

</p>
<p><strong>Brian Holt</strong><br />
Joy.

</p>
<p><strong>Harry Wolff</strong><br />
Joy, not happiness. And so

</p>
<p><strong>Stacy London</strong><br />
the microphone like this thing?

</p>
<p><strong>Harry Wolff</strong><br />
Is my brain still functioning? What is life? Where we ask the real questions on front end? Yeah,

</p>
<p><strong>Jem Young</strong><br />
I think it's just so other than static sites. Like it's just so interesting that just going down this hole of static sites that like I honestly I'd never considered, it's like, oh, yeah,

</p>
<p><strong>Harry Wolff</strong><br />
I'll just use this one. That's a wild world. I mean, there's like all these websites that if you've heard like awesome Redux, and like all these awesome lists, and there's these websites that just lists all the static site generators, and I'm just like, refreshing like to have more stars. Like the stars is where my ego is like, if it's there, like I'm great. I'm happy

</p>
<p><strong>Brian Holt</strong><br />
hashtag star Harry, please do.

</p>
<p><strong>Harry Wolff</strong><br />
Oh, you're liking this podcast is to get free rap star stars. Yeah, reptile stars is how he just owns universe.

</p>
<p><strong>Stacy London</strong><br />
There's so many. I'm on static gen.com. There's scroll, scroll, scroll, scroll, scroll, scroll.

</p>
<p><strong>Harry Wolff</strong><br />
I'm already like halfway up because I have more than one star.

</p>
<p><strong>Stacy London</strong><br />
You're in the middle. Yeah,

</p>
<p><strong>Harry Wolff</strong><br />
I forgot one of the bigger comet competitors in the node world. A newcomer is Gatsby js? Oh, yeah.

</p>
<p><strong>Brian Holt</strong><br />
I've seen that one. Yeah, it's

</p>
<p><strong>Harry Wolff</strong><br />
another writer like Jekyll, but it's more react based. It is pretty much as far as I understand. It's a lot of Webpack default settings that allow you to use it heavily leverages Webpack, okay, where you have loaders that like read in Markdown files, and you can do stuff and like, what's cool about Gatsby, admittedly, is that it does give you a js file that allows for along with static site generation also like dynamic navigation through

</p>
<p><strong>Ryan Burgess</strong><br />
cheers, cheers.

</p>
<p><strong>Harry Wolff</strong><br />
But Gatsby uses Webpack and uses react. So you can use react as your templating system, which is cool. But yeah, it's again, you just it's just feature creep. At that point.

</p>
<p><strong>Brian Holt</strong><br />
It's complexity. Yeah, no,

</p>
<p><strong>Augustus Yuan</strong><br />
I totally

</p>
<p><strong>Stacy London</strong><br />
need some p tags and some comments.

</p>
<p><strong>Brian Holt</strong><br />
No, I just want some fucking markdown. That's all I want. I just want to write markdown. Yeah, cut out that other shit.

</p>
<p><strong>Harry Wolff</strong><br />
Clever friend named Mark, last name down. Now that means that's how that's how the name came about. Right? There's a guy named Mark. And last thing down.

</p>
<p><strong>Stacy London</strong><br />
He was like, calm, cool.

</p>
<p><strong>Harry Wolff</strong><br />
Yeah, he was like, I'm the inspiration,

</p>
<p><strong>Jem Young</strong><br />
he will fail a coding interview. So whenever asked, like where did markdown code so then

</p>
<p><strong>Harry Wolff</strong><br />
you also have a templating system. I'm using nunchucks, which is a ninja to inspire templating system, which is from the Django world. And it's very nice, very flexible, you have this concept of outlets, I'm not going to go down that hole. I'm using Browserify, actually, for piling JavaScript because I want to use webpack because I like cool things. But there is no easy way to give given an input and give an output. The complexity that Webpack adds to that

</p>
<p><strong>Ryan Burgess</strong><br />
is significant. I actually think you made the right choice. It does exactly what you needed to it

</p>
<p><strong>Harry Wolff</strong><br />
follows the Unix philosophy wonderfully were like input output great Webpack, I'd have to like instantiate it just outside, I have to step outside of my codebase. And I was like, What is this garbage, and I was just not going to have it. So no, Browserify less Sass for styles battle. I also when I wrote Raftaar, it was, you know, it's still a toy. It's for me, I want to write it to be enjoyable. So I'm using Babel so that I can use all of the latest and greatest the es 2015. Future features async await static properties. Words, were great dynamic words,

</p>
<p><strong>Brian Holt</strong><br />
shares.

</p>
<p><strong>Jem Young</strong><br />
Why should I use a static site generator, like why not just run like a flask server and just serve HTML

</p>
<p><strong>Ryan Burgess</strong><br />
pages, you change the style of all your pages really quickly, the same thing goes for something we talked about WordPress, is you have WordPress template or you know the design, you can change that. And it will just automatically apply to all your pages. You don't have to manually go in and edit every single HTML file, the static site generator will do that for you. And so you can update your templates and just be like, alright, everything gets this update. If you want to change something like add a small related posts or something like that, well, all those pages will just automatically get that.

</p>
<p><strong>Harry Wolff</strong><br />
Now what I like about static site generators, too, is that it straddles two worlds. One is that your database is a flat file system, like your data is just like piles in the file system. So in that case, you have data there, you have templates, whatever you want to do to just put it through and like there's a dynamic nature to that. Sorry. That was that was required to that case, as you were saying, Ryan, you can easily augment you're not dynamically

</p>
<p><strong>Jem Young</strong><br />
welcome.

</p>
<p><strong>Harry Wolff</strong><br />
So that's great. But also what you can do then is just step outside of that database world and just have just files. It's so dynamic in a way.

</p>
<p><strong>Augustus Yuan</strong><br />
Cheers shets we thought we were going wrong, but we went absolutely on point. Yeah, Jem

</p>
<p><strong>Harry Wolff</strong><br />
had that good question just like cut through all that sober bullshit. So you can actually then have just an about page and like, that's easy, you'd have about the MD good, great, you set up like a permalink structure, and it just there, let's say you have a one off website where you like want to have my year in 2016, you can just make a folder, and it's just there. And you don't have to worry about it being part of a blog. But a data is just like content. So in that way, it adds some nice accessory features to otherwise making a plain website. And also what's nice about static site generators is that it it does kind of rewind the clock and simplifies. Rather than making web apps all the time, which is what we're doing professionally, you're still you're back to making a web page. And it's a collection of web pages, which is there's something very simple about that, which is, which is nice. And it's just very enjoyable to use. In that respect. One

</p>
<p><strong>Stacy London</strong><br />
of the use cases that is like not really what we've been talking about where it's something about like a content site. I've actually really like static site generators for just like prototyping something really fast. Because all I want is to include a header and a footer, and not have to do it every time and not have to have like PHP an entire server side thing or some massive server side framework or a client side framework. I just want to have an HTML include, that's my header and my footer. And so static site stuff for that was really, that's what I love

</p>
<p><strong>Ryan Burgess</strong><br />
it for, well, we didn't even talk about it. But you run that locally, which is awesome to is that you're not having to run a server side language, you don't have to run a patchy server or something in the background to actually run that you're just here's my static site, it just works, which is pretty cool. And you can even

</p>
<p><strong>Harry Wolff</strong><br />
open it up, you can double click the HTML file locally and see your

</p>
<p><strong>Ryan Burgess</strong><br />
site and it opens in the browser. And it's cool. And it's and you

</p>
<p><strong>Harry Wolff</strong><br />
see file colon slash slash URL, file, colon slash slash, like it's there, which is an awkward thing to see. But it's so like, it's just there. There's no like, Simple HTTP Server. It's just just static sites. And that is literally the definition. And it's very nice that that's accurate. I just try to be as dynamically accurate as

</p>
<p><strong>Brian Holt</strong><br />
cheers

</p>
<p><strong>Ryan Burgess</strong><br />
stretch. I'm interested to know like, what advice would you give to someone that's wanting to build a static generated site? How does someone start, obviously choose the tool, don't don't use Jekyll. That's Brian's advice. Don't use Jekyll.

</p>
<p><strong>Harry Wolff</strong><br />
So I mean, static sites are a very enjoyable toy project because they're not complex, because they're while I was gonna say, simple site generator, but they don't have to be complete. They don't have to be complex, you can definitely over engineer anything you can over engineer to do is

</p>
<p><strong>Ryan Burgess</strong><br />
which is, which we've seen many, many times.

</p>
<p><strong>Harry Wolff</strong><br />
But I still want to see more. I haven't seen enough of it. I want to see a Graph QL powered to do list. There's relay and like, know that that exists. Really, definitely bring it on, like closure and like buckle and like everything

</p>
<p><strong>Jem Young</strong><br />
that exists. They were just engineers, like we're born over it.

</p>
<p><strong>Ryan Burgess</strong><br />
Isn't that fun? That's why we're engineers. Like that's the fun part is to build something from scratch.

</p>
<p><strong>Harry Wolff</strong><br />
It's those Sunday evenings just sipping whiskey and disappearing out to space. Yeah. So when you're making your own static site generator, like the, you have to understand the core principles of what it is like you're taking markdown through a template system, engendering HTML. And there's configuration like that's, that's basically what you're doing, and pass that it's input transformed output. So you could literally write one file, it just takes in a globs for all the files in your file system and just directly outputs them. And then from there, you can add complexity, which is always fun. But it's like, you know, given this context, like if it's a dot css file and add this different transform, do you want to augment how your markdown engine behaves, like allow for configuration there? And, and there's so many ways, and half the struggles that I have with Rob tar is not necessarily in the implementation, it's in the design and architecting of how you'll use it. Yeah, the usability, the ergonomics, just understanding like how I'm making it for myself, but also to be accessible to anyone to make it as enjoyable as unpleasant to use as possible. So what API can I provide that if what I have done out of the box does not work for you? How can you augment it to fit your needs, and to do it in a way that you're not cursing my Name, which I always love to hear curses about my name, fucking hair? That guy

</p>
<p><strong>Ryan Burgess</strong><br />
here you also said it, like even marked down? Well, it doesn't even have to be marked down. You could run JSON, you could run you could actually plug it to a database if you really wanted to. It could just be HTML that was handlebars. Yeah,

</p>
<p><strong>Harry Wolff</strong><br />
it could be a React file that just like outputs that like the sky is the limit. I think that's

</p>
<p><strong>Ryan Burgess</strong><br />
the cool thing too. There's so much flexibility there.

</p>
<p><strong>Jem Young</strong><br />
I think I shower thought everybody you know I I have a new apartment and I you know, I splurge on the showerhead, so I'm just having so much better showers now it's there's like $80, but it was worth I feel like your showerhead

</p>
<p><strong>Ryan Burgess</strong><br />
needs to be a pic now.

</p>
<p><strong>Jem Young</strong><br />
Maybe I should, yeah, yeah, Harry's actually staggered me, we've been friends for a few years. So you're gonna enjoy the show, I will have

</p>
<p><strong>Harry Wolff</strong><br />
my own thoughts as well,

</p>
<p><strong>Jem Young</strong><br />
shifty thoughts,

</p>
<p><strong>Ryan Burgess</strong><br />
let me know, I'm excited though, Jem, let's hear your shower

</p>
<p><strong>Jem Young</strong><br />
thought my thought was building a static site generator is actually a good first project free pool, not a to do list because you start off pretty simply, and then you can make it as complicated as you want. But if you understand like the core tenants of how to build a static site generator, and you'd be a pretty good engineer,

</p>
<p><strong>Harry Wolff</strong><br />
and then what's nice about that, too, is that it actually sandbox you to just one environment, like whereas if you were making a to do list application from back into front end had to worry about that context switching. Whereas static site generators, you can just start with like, I'm just writing operations on my file system. If you want to add complexity where you want to be able to browse it from the browser, great. You provide an API, and you're just learning from the file system is your database. So you're learning almost from like a very simple database from the beginning upwards to a dynamic rich web application as the dashboard. Here am I even noticed that? Wow. Yeah, so I definitely agree. I mean, if static site generators became the new To Do List application, I will be happy for that. Because that would just be wonderful experience. So long as you still dar ruptor. I'm happy with. Yeah, but I mean, reptiles, but a lot of fun to build. Right now. I'm working on version three, because semantic versioning is great. Just gives me an excuse to change everything. Yeah. Just like fuck the old

</p>
<p><strong>Ryan Burgess</strong><br />
with the new. You're an engineer. That's the whole point.

</p>
<p><strong>Harry Wolff</strong><br />
But with reptile version three, trying to actually simplify things more, because I think I added some unnecessary complexity there, which like, shame on me, shame on me, shame on me, shame,

</p>
<p><strong>Brian Holt</strong><br />
hashtags, shame on hair.

</p>
<p><strong>Harry Wolff</strong><br />
If that's friends, I'll be very happy. But I'm trying to scale things back I was I had this whole plugin system before with rep Tara, that actually was duplicating work for myself, because I was like, Okay, you have the internal API, which I'm using for actually building your avatar and I had this external API, and to duplicate that was just dumb in retrospect. So I'm, I'm stealing that back, I'm actually gonna steal, I try to steal the best ideas from where I can because I don't need to reinvent the wheel. Because if I did, it would be squared, I wouldn't go anywhere. So instead, I'm just going to steal from metalsmith, where I'm going to have a middleware system where you can actually just be given the reptile instance. And you can do what you want with it. Like the the internal API is the API, and you can do what you want. If you want to configure the marketing engine. Go at it. It's just there. It's the instances they're configured. Have fun. GL HF GG GG GG stands for Dynamic dynamic.

</p>
<p><strong>Brian Holt</strong><br />
Yes. Cheers.

</p>
<p><strong>Jem Young</strong><br />
Good. Yeah.

</p>
<p><strong>Harry Wolff</strong><br />
Okay. Oh,

</p>
<p><strong>Derrick Showers</strong><br />
I'm not playing anymore.

</p>
<p><strong>Harry Wolff</strong><br />
Yeah, I mean, I'm working on rupture right. Now. I would love to have any contributors working on it. I don't want it to be I saw that. What is it that the very aggressively open source mandate way of running an organization where if you have, like at least two PRs merged, you have commit access, like just off the bat, just like have fun. This is a community project like just you trust the contributors to be able to you haven't

</p>
<p><strong>Ryan Burgess</strong><br />
you're saying you have that implemented or thinking about it, it's such a cool, it's

</p>
<p><strong>Harry Wolff</strong><br />
scary, and it's Liberty

</p>
<p><strong>Stacy London</strong><br />
bypass the whole PR situation, like they can just like commit straight on

</p>
<p><strong>Harry Wolff</strong><br />
they could there's like an actual manifesto online that you can see, I think Maciel Rogers has perhaps pioneered that, but it's just trusting people. Like there isn't a you don't want to be a gatekeeper like you, you trust that good people will follow the practices of the organization, and there will still be prs. And if they're abused, great gets still distributed, you're not gonna worry about having it be lost. If they pushed NPM that's a different story. You have 24 hours to undo that boo, boo, boo boo is a great word.

</p>
<p><strong>Brian Holt</strong><br />
If you don't get them access to the NPM,

</p>
<p><strong>Harry Wolff</strong><br />
that might be a thing that you might staggered, but like just I want it to be the most enjoyable static site generator as possible. Because, again, any friction added to the process of writing takes away from actually writing and writing is hard enough as is. Yep. That's why I drink what I write because it makes it easier.

</p>
<p><strong>Ryan Burgess</strong><br />
It makes it more exciting. It does.

</p>
<p><strong>Harry Wolff</strong><br />
Not always more intelligible, but a better look better, definitely better, more enjoyable, more dynamic, more.

</p>
<p><strong>Ryan Burgess</strong><br />
So on that note, as we wrap up today's episode, we like to share pics of things that we like or have found interesting to share. Let's go around the table and share pics for today's episode. Brian, what do you have

</p>
<p><strong>Brian Holt</strong><br />
one that I was thinking of? is I picked up home brewing lately, like home brewing beer, I would definitely suggest it it's relaxing. It's not It's actually not super difficult. It's actually more cleaning than anything like it's making beer. It's just being clean.

</p>
<p><strong>Ryan Burgess</strong><br />
Very relaxing now, like everything has to be sterile, right? Everything is

</p>
<p><strong>Brian Holt</strong><br />
sterile because if you introduce any like rogue bacteria, it makes your beer really gross. It makes it like skunky, which everyone loves can keep here, right?

</p>
<p><strong>Harry Wolff</strong><br />
I mean, it's my perfume of choice.

</p>
<p><strong>Brian Holt</strong><br />
The whole room smells like just super dank.

</p>
<p><strong>Ryan Burgess</strong><br />
I look forward to tasting some of these beers, two beers, but I couldn't get them here today. Nice. Next episode, Stacy, what do you have?

</p>
<p><strong>Stacy London</strong><br />
Alright, so my first pick is Webpack been I've been digging into for work and also kind of personal interest as well, CSS and JavaScript as it relates to react. So I've been digging into styled components and style JSX and a whole bunch of them. Anyway, Webpack then seems I came across it because styled components has an example in it. And I thought it was kind of slick, how you can just quickly play around with these new tools and not have to do a ton of setup. And once you get your setup, you can actually export it and have the Webpack config and the package json is like exports the whole thing that you need, which I think is kind of cool. So I've been I've been liking that. It's been pretty cool. The next pick is a song by it's an Andy Stott remix, he calls it any style refix an Arthur Russell song called home away from home. And you can check that out in the in the show notes.

</p>
<p><strong>Ryan Burgess</strong><br />
Harry, what do you have press for some pics,

</p>
<p><strong>Harry Wolff</strong><br />
I got some pics for you. None of the nose variety, but some pics. My first pick is node 7.6 just got released with native async await support. Super exciting. Actually, I use async await a lot with rep tar and I actually tried out using that native implementation, not passing it through Babel. And it should reduce the time to compile by a notable amount

</p>
<p><strong>Brian Holt</strong><br />
No, no regenerator

</p>
<p><strong>Harry Wolff</strong><br />
noise generator but the overhead that that adds like I wasn't aware. Yeah. So that was very, very exciting to see. So it has to be able to add that later when it's more fully supported. But until then, I also want to pick the TV show Legion, just a new FX show, which I am okay. With, but now it's just too so so far, I haven't gotten too deep into it. But it's a new TV show by the creator of Fargo at least I think Fargo season one set in the X Men universe. It follows the story of the X Men character Legion, which is the son of Charles Xavier, he's an a mega level X Men who because of that his handicap for being an X mega level is that he has a funnier like multiple personalities disorder. And each personality has a different power because I'm not the most up to date on law, but that's why I read on Wikipedia but the directing and style is awesome. The first episode you watch it and you feel like he's in a mental institution and you feel like you are there with him like you don't know what's real, what's not. And it's just wonderfully done. And Aubrey plaza's. Yeah. And she's also Yes. And she is

</p>
<p><strong>Stacy London</strong><br />
great. Yes, great.

</p>
<p><strong>Harry Wolff</strong><br />
I have two more pics one more is a new song released on Apple Music, my streaming music of choice. Get paid for the new song by Calvin. I don't get paid for that. That's a new song by Calvin Harris featuring Frank Ocean and migos called slide. It is insanely catchy ear candy. I listened to I think 10 times in a row when it first came out on Friday dancing at my desk at work to the chagrin of all my co workers. They're used to it now it's fine. That's great. Then my fourth pick pricing is Raftaar.

</p>
<p><strong>Brian Holt</strong><br />
Hashtag star

</p>
<p><strong>Harry Wolff</strong><br />
hashtag star Harry ruptor. A static site generator for all your static site generating needs. Great. Jem, what

</p>
<p><strong>Ryan Burgess</strong><br />
do you have for us today?

</p>
<p><strong>Jem Young</strong><br />
It's hard to follow Harry, my first big, big surprise TV pick. I am picking ultimate Beastmasters just came out on Netflix. And yes, I finished it came out on Friday. And I've already finished it's Sunday. Yes. Because who knows? I was working in that show to have in the background. It's entertaining. To me. It's the future of television because it's one show but it's actually localized, like eight different languages. So there's an all at the same time, which is pretty great. Yeah, there's 10 or 12 different hosts from each country or so to per country. And it's just yeah, it's one show, but it's actually six shows filmed at the same time, which is brilliant. Like it's just a genius idea. I think we're gonna see more shows like

</p>
<p><strong>Brian Holt</strong><br />
that videos actually recut for each market. Exactly.

</p>
<p><strong>Jem Young</strong><br />
And it sounds like you're cheering on whoever your local person is. But it's still a global show. It's it's brilliant. Very dynamic.

</p>
<p><strong>Derrick Showers</strong><br />
Very. Got him.

</p>
<p><strong>Jem Young</strong><br />
And my second pick is Chivas bot. It is a bot on Twitter and it's just so useful. The dog and I love dogs. She was always a funny dog because When they're like two or under, they're adorable. They're so sweet and friendly. When they get older. They're actually more like cats. They're like very they won't come to you. They just kind of ignore you. I think they're interesting dogs. They're so adorable. But yeah, she was she was bought. That's my pick. Sweet, much.

</p>
<p><strong>Brian Holt</strong><br />
Doge

</p>
<p><strong>Jem Young</strong><br />
Doge. Derek, what

</p>
<p><strong>Derrick Showers</strong><br />
do you have? The first pick is an app called distiller. I don't know if any of you have used it, but is untapped is like, it's like the untapped of liquor. Oh, but it's actually the app when I first downloaded it, I was like, this looks really shitty. So if the app itself and I was kind of like, I always delete apps that I think look shitty, but I was like, this is really the only app that exists that like all the ones that look nice sucks. So But anyway, that's they actually, they do like weekly newsletters that they send out. And there's some really good content. Yes. Awesome. Actually just was telling Ryan It's all they featured a high West, I guess, like Limited Edition blu ray, that maybe it's been out for a while now. But anyway, it's a good way to find out about new stuff, they rank stuff, then I find a lot of value out of it. Because Because we love alcohol. Alcohol is great. My second pick is this game that I found at this arcade bar last night. It's a it's like a Pac Man multiplayer game. Any of you Oh, I see. So it's like four player, Pac Man. And you can actually meet each other what it is larious so much awesome. It is so much fun. It takes Pac Man to a new level of fitness. So I don't know where you can find that. But as fun slower. Yeah, I just made it. You

</p>
<p><strong>Harry Wolff</strong><br />
can use it dynamically.

</p>
<p><strong>Augustus Yuan</strong><br />
So I have two picks one pick is called meta smoke. So StackOverflow recently put up a meta posts talking about machine be taught how to flag spam automatically. And they basically put at the top TLDR Yes, we did it. And so they have this bot that will like go through all their spam posts. And they made a web dashboard which like can shows graphs of what people report and like, I think they have like this bot that will like go to a chat room with mods and will say hey, these are like spams. And he like uses web dashboard to like kind of improve the algorithm for catching spam. So I thought it was really cool. Second one is open source dot guide. This is like a GitHub nice page that they made for like getting more people to like make open source projects or where to start if they wanted to start an open source project pro tip have a cool logo. I learned that from I don't know it was a giant hole or I'm pretty sure Brian it was definitely a Netflix sock there is a talk.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it's important.

</p>
<p><strong>Brian Holt</strong><br />
Stuff like stupid shit.

</p>
<p><strong>Ryan Burgess</strong><br />
If you have an open source project, you need a look.

</p>
<p><strong>Harry Wolff</strong><br />
I mean, HR is Scott and he just carries me all the way which I love it. Yeah, I

</p>
<p><strong>Ryan Burgess</strong><br />
love that it has an 80s nostalgia to or I guess 90s late 80s. Late 80s 90s

</p>
<p><strong>Harry Wolff</strong><br />
Yeah, all right. Great time. It's gonna be so good. Early 90s Great time to be alive made me feel great. When

</p>
<p><strong>Ryan Burgess</strong><br />
I saw it. I was like, yes.

</p>
<p><strong>Stacy London</strong><br />
I mean, I like to judge books by covers. Fair enough. So

</p>
<p><strong>Ryan Burgess</strong><br />
you need a good logo in order for your library to be good. Oh, yeah.

</p>
<p><strong>Augustus Yuan</strong><br />
Absolutely. Hash star Harry.

</p>
<p><strong>Harry Wolff</strong><br />
Here's the back

</p>
<p><strong>Brian Holt</strong><br />
end the drinking word.

</p>
<p><strong>Harry Wolff</strong><br />
Just alcohol.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, I have two picks for this episode. One, I think is a really great documentary, which is on coding and it is on Netflix code, Debugging the Gender Gap. It's such a good documentary. And it has one of our previous guests on it too, which is pretty badass. Julie Horvath was actually in has a fairly long segment in it. And she has a really great story in it. That's pretty powerful. And you should know about it. Yeah, it's definitely a great story. And I highly recommend checking that out. And my other pick is, I'm moving right now. And I hate moving. It's like the worst, most painful thing ever. And so I'm packing gem actually gave me this recommendation of a company called Zip go. And what they do is they deliver plastic boxes, they drop them off, you fill them up. And once you're done and moved, they'll come pick them up again. It saves so much headache of actually making boxes. There's something so many times I've purchased a bunch of boxes, you have to put tape on them and all that it's already done for you.

</p>
<p><strong>Brian Holt</strong><br />
Well then get rid of them like that. For me. That was the hardest part.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that was I think you're right that is my biggest pet peeve is that you have to actually do something with these boxes and get rid of them or break them down all that it's like so much extra work. These people just come pick them up. And you're recycling that's a great thing too is you don't have all these cardboard boxes being used.

</p>
<p><strong>Brian Holt</strong><br />
This is the most SanFrancisco that we've talked about.

</p>
<p><strong>Ryan Burgess</strong><br />
Before we end the episode I want to thank Harry for joining us on today's episode. It was awesome having you as a guest thank you for joining us. Thank

</p>
<p><strong>Harry Wolff</strong><br />
you for having me.

</p>
<p><strong>Ryan Burgess</strong><br />
Where can people find you?

</p>
<p><strong>Harry Wolff</strong><br />
You can find me on the interwebs the ones with the pipes and the tubes. I have the same username everywhere which is H S as in Spencer because that's my middle name. Wolf H wolf with two F's extra for good luck. So HS Wolf on Twitter GitHub. My website HS wolf calm. My Social Security Code is HS Wolf, and everywhere else Thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Thank you all for listening to today's episode. If you've been enjoying our episodes, please rate us on iTunes and let other people know how good or bad the podcast is. And follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>. Any last words? Okay,

</p>
`;
        return transcript;
    };