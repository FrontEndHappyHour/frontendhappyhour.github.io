module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to another brand new episode of Front End happy hour. This is episode 46. And we'll be talking about security from a front end engineers perspective. Let's go around the table and give brief introductions of today's panelists. Stacy want to start off?


<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London, my friend and engineer at Atlassian.

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Derrick Showers</strong><br />
Derek showers, Senior Software Engineer at LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
Now I'm Ryan Burgess. I'm a software engineering manager at Netflix. And each episode of the front end app er podcast, we like to choose a keyword that if it's mentioned at all, on the podcast, we will all take a drink. What did we decide today's keyword is? vulnerability. If anyone says the word vulnerability, we will all take a drink. Alright, let's get started. I figured a good start is like what are some typical security issues you've come across in your careers as a front end engineer, cross site scripting, I mean, that's, that's always the one that goes like the biggest one that goes to my head to

</p>
<p><strong>Jem Young</strong><br />
cross site scripting, SQL injection is a common 1/3

</p>
<p><strong>Ryan Burgess</strong><br />
party libraries. I'm definitely run security holes with that often. Yeah, or even things like when I think of the third party libraries of not just like frameworks or JavaScript libraries, but even pixels for tracking, definitely worry me all the time, like marketing's like, hey, we want to put all these pixels on their pages. And you don't really know what they are. And they they are actually pulling data from your pages. And so it's you got to be aware of what's there. And there could be some security holes,

</p>
<p><strong>Stacy London</strong><br />
bots for submitting forms, like over and over and over.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that can be frustrating to you.

</p>
<p><strong>Jem Young</strong><br />
Probably the biggest security issues like as a friend engineers, that front engineers don't take security issue seriously. Like, we just don't consider that in our domain generally. Like I don't, I don't think I've ever been to a conference or heard a talk about from Sony does UI about security, like

</p>
<p><strong>Ryan Burgess</strong><br />
ever? No, it's typically more on the server that, like, I've definitely been to a conference. It's like JavaScript heavy, but they're talking about it from a node server or something that's security oriented at that point. But there is a lot of things that front end actually has to think about. So, you know, like the cross site scripting that's on us,

</p>
<p><strong>Stacy London</strong><br />
or Yeah, HTTPS. I mean, that's not necessarily on us. But if you're like consulting and like doing freelance and you're building a site for some company, it probably is on you to be like, hey, yeah, you probably put this under SSL.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. Yeah, I didn't even Yeah, making those recommendations and understanding what what the benefit is. Cookies. We deal with cookies a lot. Yeah, I feel like there's a ton of holes and cookies, well, if done properly, they can be done really well. But I've seen some pretty weird shit over. Over the years, maybe even things that I've done. I've also seen in databases, I think someone jam, you'd mentioned my SQL injections. I've also even seen databases where I joined this one company. And there's some software that the company hadn't made, where the site was actually saving to a database, which MySQL database, but they were saving passwords, just getting plain text. And I'm like, That's a simple thing to avoid. But yes, that's what they were doing. They weren't encrypting it at all. Not even on the database side. It was just plain text. So I'm like great gems password is 12345678.

</p>
<p><strong>Jem Young</strong><br />
No excuse that. Yes. Argentina. There's like a lot of bad password storage. What's like SHA one people like, oh SHA one encode the password. It's not encoding? Like, it's like just a way of hashing. And they're like, oh, no, I'll just SHA one and five times that way. It's like that's. Yeah. It's just unbelievable that people do these things in 2017. So

</p>
<p><strong>Stacy London</strong><br />
hashtag, Equifax.

</p>
<p><strong>Jem Young</strong><br />
That's a whole nother rant.

</p>
<p><strong>Ryan Burgess</strong><br />
Maybe a brief explanation for the listeners of what that is? Yeah.

</p>
<p><strong>Stacy London</strong><br />
Right. Oh, cheers.

</p>
<p><strong>Jem Young</strong><br />
I don't remember the exact problem with the site.

</p>
<p><strong>Derrick Showers</strong><br />
I think. I think the best best way to explain it is go watch John Oliver from a couple of weeks ago.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's how I do it. Alright, well, we kind of hit on to like, what are the responsibilities of front end engineers? And typically, we feel doesn't seem to be that there is a lot of responsibility, but is should it be? Or should we be focusing more on it? Like, what do you all think of that?

</p>
<p><strong>Stacy London</strong><br />
I think there's just there's layers and you're just the more layers you put, the more secure something is and granted Yeah, you can put some layers in the front end and people can like turn off JavaScript. So some of the things that you put in place don't matter if you like try and prevent, you know, for SQL injection, you prevent certain characters from being submitted and people are like, well, you can just get around that but turning off You know, the validation, but one more layer can't hurt. And it's, it's, I think beneficial to add that kind of

</p>
<p><strong>Ryan Burgess</strong><br />
stuff I did too. And like there again, I hope your server is doing that as well. So like, if you have a back end team, but you might be full stock and you're dealing with it, why not deal with it on the client and the server, it's just like, try and prevent it at all. And it also makes the user experience better to write, like, they're gonna see that feedback on the client and not wait for a server to submit. Like, if it is a form, typically, that's where we probably see a lot of errors is on the form. And that's what makes me think of that.

</p>
<p><strong>Derrick Showers</strong><br />
I think a common mistake that we make is that especially like with freelance stuff, that it won't happen to me, because, you know, I'm just, it's just a small website that no one cares about, or this server that no one knows about, actually give Jem a plug here and his his DevOps. I remember you mentioning something about this, but like just setting up a new cloud server or something and just watch, you know, the amount of times that the root at the root account gets hit, like, and it's just like some random server, you know, but there's like, constantly people just because it's not about like, maybe it's not, maybe you don't have to worry about somebody like hacking into your blog and stealing whatever, you know, like, it's maybe it's not that big of a deal. But then what can what what if somebody takes control of a server or something, what they can then do with that is, there's just I think there's lots of downstream issues that you don't even think about, and a lot of people just overlook, as, it doesn't really matter. I don't care if my server gets hacked, but there's other things that can happen. And you probably know better better than me what those things are?

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I mean, even if it was that you're creating a web app that people log into, I think anytime you do that is we all know that there's people that are really guilty for creating that one password with that one email. Yeah. And so you might not have that much secure data on your side that could be vulnerable. But that email and password if someone is able to obtain that it could be their like Apple ID, it could be, you know, some banking information, like who knows, and that's kind of sucks on that user for using that same password, but it happens. So I think, I think that lays out a little bit on us to really least think about ways that we can prevent security vulnerabilities. Cheers, cheers.

</p>
<p><strong>Jem Young</strong><br />
Think that common one is that people think if, oh, if I've been hacked, I'll know it pretty quick. Like for some reason, they think that'll correspond in the UI, like, the server will be down and things like that. But as in like Equifax, hacks, or target or many other data breaches, like they were hacked for months. And they just didn't know. And like,

</p>
<p><strong>Derrick Showers</strong><br />
they didn't, they didn't, quote unquote, know, they didn't know they sold their stock.

</p>
<p><strong>Jem Young</strong><br />
But like, people don't know. And that's the dangerous part. Because at that point, you can do whatever you want. Like, if I want to serve up some malicious JavaScript, I can be bad like, I could make the hack go from like just one server to like millions and millions of people very, very easily. And that's like fairly common, like how we have been hacked, like servers still up and running. Like, of course, something running, you're not gonna like hack somebody. up so I wonder for UI Thrall UI people? What's the responsibility on the front end that we make sure people have like good strong passwords, because like, this is a total total rant on my part, but I hate when they're like your password needs to have one uppercase, one lowercase, like, three words in it, and all these things like it doesn't make you any more secured like forcing people to do pap.

</p>
<p><strong>Ryan Burgess</strong><br />
I completely agree. I think it's just it actually hurts the user. In the end. I don't think it's that great of an experience for them. Well,

</p>
<p><strong>Stacy London</strong><br />
yeah, most implementations are terrible. Yeah, they don't properly explain what the combination of things that you need to do. So then you end up like not being able to create a password for like seven attempts. And then you're like, just want to flip them.

</p>
<p><strong>Ryan Burgess</strong><br />
And you've left like, I'm sorry, I bounced. I'm like, Alright, screw you.

</p>
<p><strong>Derrick Showers</strong><br />
I had like, yeah, like I forget just the I forget what site it was, I wish I could remember because this is like a great way to shame them. But But anyway, I was I was signing up for something and creating a new and I use a password manager. So it's always random. And and it's like, you know, the most it has, I mean, not to your point, I guess it doesn't really matter. But like, you know, it's just like, there's no way that this password is is doesn't meet any sort of standards, but it's just like, This password is the strength. This password is not strong enough. Like what do you mean? It's like 26 characters. It's like, every single

</p>
<p><strong>Ryan Burgess</strong><br />
case, lowercase numbers, like symbols, will tell you why I'm like, Okay, this is great. And also I even hate on the flip side, I hate the ones that like try and prevent you from having 26 characters. They're like, No, only eight to 10 characters Max, or whatever it is, with only so many symbols. I'm like, hey, well, that's not fair either, because use one password as well. And that generates a nice password for me.

</p>
<p><strong>Derrick Showers</strong><br />
And this is just a side rant. But also, I think as a front end thing. I mean, make it as easy as possible for your users to use things like one password and LastPass or whatever password Yeah, like it is annoying, especially on apps where you can't like you. Like sometimes you can't even paste the password and then it's like yeah, like to copy that

</p>
<p><strong>Ryan Burgess</strong><br />
password. One thing I actually have found amazing is on Android, one password is almost endless. In everything like it's in the OSS, I just noticed this a little while ago, actually, Ryan anklam showed it to me too. And it's in a bunch of apps like one password just shows up in once you hit into the field, and not to me has been a savior. Like if I want to log into a bunch of applications when you're setting up your phone. It's so nice one password, set that one up first, and then the rest of your golden

</p>
<p><strong>Jem Young</strong><br />
LastPass. Same way. Yeah, like iOS. I'm not familiar. iOS

</p>
<p><strong>Ryan Burgess</strong><br />
does not Yeah, you can't draw over app. You can but the app has to add the SDK for it. Yeah. And so that, which is great. I love that when apps do that, but this one is like we

</p>
<p><strong>Derrick Showers</strong><br />
which is by the way, I did it for LinkedIn learning. It's like two hours of work. And it's not easy. So

</p>
<p><strong>Ryan Burgess</strong><br />
but I think there's there's also trade offs there too, is I mean, that's another library that you're adding to your library. Oh, it's built into LSE. Okay, that's good to know. All right, then not only my

</p>
<p><strong>Derrick Showers</strong><br />
work is nice, because you're, you know, they're just apps that aren't going to ever support it. Because there's never going to make it a priority in order

</p>
<p><strong>Ryan Burgess</strong><br />
to work. I would love iOS to do it. So they

</p>
<p><strong>Derrick Showers</strong><br />
actually have Okay, not that this turns into an Apple versus Android, but they hate iOS 11 did add shared keychain, so like, as long as you Yeah. So you can now. So it's actually built in? It's not through one password. And it doesn't really help me because I don't use Safari for that type of thing. But it at least is in their Apple kind of way.

</p>
<p><strong>Ryan Burgess</strong><br />
We've done some work even at Netflix with the keychain. But yeah, it's just not the same as one password and LastPass.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah.

</p>
<p><strong>Jem Young</strong><br />
And people not properly labeling their form fields. So that like last pass and autofill

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah, I've

</p>
<p><strong>Jem Young</strong><br />
heard of that.

</p>
<p><strong>Ryan Burgess</strong><br />
Man. You know what, that's actually a good one for people to on the front end is like really using the proper labels and names for your input fields. Like that's huge

</p>
<p><strong>Stacy London</strong><br />
or not having. I know that there was like, sort of that security pattern of putting a username on one screen, and then password on second screen. There's, I'm trying to think as Wells Fargo, I can't for whatever reason, the one password thing. I mean, it does not just does not work with their authentication. And it probably has to do with like naming of the fields properly. And then some of that is like splitting apart things from one screen to another. And like is that you know, is that more secure? Is that more of a myth? Just like the idea of having?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think it all comes down to just thinking about it.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't think it's more secure. That's I don't think that's trying to happen. I think it's a usability thing of people seeing one field and then seeing another it's simplifies things I don't think it's supposed to be easier or more secure hearted is

</p>
<p><strong>Stacy London</strong><br />
like a security thing. Really, I've never even heard that if you can't get the right username, then you can never get to actually entering the password. Because

</p>
<p><strong>Ryan Burgess</strong><br />
it's also typically done. If you look at it, it's usually done client side. Yeah, it's like hiding one field and then showing the next I think

</p>
<p><strong>Derrick Showers</strong><br />
people at least have I don't know if it is or not, but people are under the assumption that it is more secure. Because I feel like it only is on banks, or financial institution, I see the chase does if it's actually page refresh

</p>
<p><strong>Ryan Burgess</strong><br />
from so then that one's not client side, that one's actually happening. But I think I think to

</p>
<p><strong>Derrick Showers</strong><br />
your point is like you also have to think about, okay, so maybe you have maybe there is extra security there. But like you also think about then the people that aren't going to use password managers for that site. Because, you know, so I think there's just so many things at play that that is really important for you to speak up as a UI engineer, that that probably like API engineers and back end people are not going to necessarily think about so I think this is actually really good,

</p>
<p><strong>Ryan Burgess</strong><br />
good. No, I think it definitely is like worrying about the input. So another thing that I'm interested in talking about is sometimes like error messages. Sometimes I've heard from security people that telling the user that, hey, your username is wrong, or your password is wrong, might be actually a security hole, and that you should just deliver a obscure message saying something went wrong. How do you each of you feel about that? Like, is that just something that we perceive as a security issue? Or is it really a security hole?

</p>
<p><strong>Stacy London</strong><br />
I just don't know. I mean, that's the thing like it from a user experience, like from everything about the UI and making the best experience for the user, letting them know which thing is wrong is better for them. Because they get to log in faster. They know the thing that they messed up, or like giving them the option to show the password that they typed to like see it like Oh, I did miss type my password, I can see it now like show the actual characters. So there's little things like that, that make all that much better as to whether it is less secure or not. I actually don't know like I have no I have no, I haven't like research that to see if there's studies or security papers that have been published that say like, yes, absolutely, you'll get hacked faster. My my flipside of that is, if someone is trying to like force force, getting into your site through a UI, and they're getting back or even like through an API that's giving back a message that's similar to what the front end is doing. Then there's like back end things that should be in place to stop brute force attacks like so like, even if they know that the username is wrong, but the password is correct. That are like reverse usernames, correct the passwords wrong. If they're getting that feedback, and they make six requests to try and continually you know, that same account then there should be like a backend process in place that stops that repetitive thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, totally. You could like you can give the UI like a nice hint of saying, yeah, there's, you know, maybe once or twice show that it's Oh, it's the username. That's wrong. Yeah. Or it's the password that's wrong. And then after like a bunch of brute force attacks, that's usually what happens is, it's like multiple times, is you just limit that and it is just a generic, something went wrong.

</p>
<p><strong>Stacy London</strong><br />
Yeah. So make, make the user experience better, make it nicer, give them the feedback right away, and then make sure that your back end, right, because

</p>
<p><strong>Ryan Burgess</strong><br />
like five or six times, usually that's not a user error. That's probably something malicious. That's happening. Yeah, I like that. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think it's kind of like splitting hairs at that point, like you. And then I think it takes somebody that is really passionate on the on the side of UX, or you maybe it's maybe it can be somebody a designer or UX person to like, it doesn't have to necessarily be right, but somebody who's passionate about the user experience and is able to like intelligently speak, that's why I think it is important for some people to be really security focused. And yeah, I think like, like you guys are saying, like, I think it's, there's, there's much there's much, much more that you can do with like, limiting requests. And and like that kind of stuff on the back end. And I don't think these little things are should impact the user experience. I know for me, like I there's often like, I'm not trying to hack into an account just trying to get into my account. I can't remember what email address I used or something. So like, you know, it's really helpful to have those those hints. And, yeah, no, I

</p>
<p><strong>Ryan Burgess</strong><br />
think it's like, exactly what you said is going back to the user experience is so important. Don't hurt your users just because of a security issue. Like think about it as like ways that you can still have a great user experience and help the user and then fall back to this seems malicious will prevent this and maybe not be as helpful. I think you can tell the difference between a user and someone who's been malicious. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
don't think you can probably probably will help at this kind of thing. If this is an issue where wherever you're working, or whatever you're building is testing around like, I mean, I think you have to have a balance of, obviously, of security, which is important. But then you have a balance of users that will just drop off. And because they just give up. So like, I think you can put a lot of testing around that to tracking and Sevenson just to see where that if that's happening.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, even things like the show password. I don't like it as default, just in case. But I have seen a lot of sites and applications because they'll have the like show password. And I like that because it's like, yeah, what if I'm just screwing up? The UI is like, Hey, here's your password in plain text. Did you screw up on your password? And at least I can see that when it's just like, dot dot, dot, dot, dot, dot, I have no idea. So I think Little things like that are helpful to the user. You could argue that in like, if I'm in a public space and that's like broad and are

</p>
<p><strong>Derrick Showers</strong><br />
especially on mobile, I think that's really important because you don't know it's like you're not using a real keyboard so it's hard to know if you miss type something Miss type all the time. AutoCorrect is a bitch and it doesn't help for passwords. No, it doesn't. Unless your password if Auto. If autocorrect helps your password then you probably are not you change your password.

</p>
<p><strong>Stacy London</strong><br />
Did you mean

you typed password without an O?


Ducky. That's not a word.

</p>
<p><strong>Ryan Burgess</strong><br />
What security mistakes have you made in the past? I'd be interested to know I know I've made some some and totally have learned from them. But I'm interested know each of you think

</p>
<p><strong>Derrick Showers</strong><br />
mine probably been whatever. I'm probably still making whenever I throw up some sort of WordPress site because I feel like there's like everyone's trying to hack into WordPress sites, like you know, not changing the, the path for the admin dashboard or whatever. What is it slash slash

</p>
<p><strong>Ryan Burgess</strong><br />
WP admin,

</p>
<p><strong>Stacy London</strong><br />
WP admin or

</p>
<p><strong>Derrick Showers</strong><br />
letting PHP myadmin. fizzle?

</p>
<p><strong>Ryan Burgess</strong><br />
Do you think it's okay that that's a good point on the WP admin on WordPress sites? Is it something that you do have to hide? If you hide it? It's still people know and can find it?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I just feel like it's it's easier for bots or whatever, just to, like, they'll just have to look for that. And then if they don't find it, they'll give up because at that point, maybe unless they really if they really want to hack your your church right, then you're

</p>
<p><strong>Ryan Burgess</strong><br />
just a little more obscure at that point. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
think because I don't know. I would assume there's bots out there that are just like looking at every domain and just slash

</p>
<p><strong>Ryan Burgess</strong><br />
go slash WP admin. Yeah,

</p>
<p><strong>Stacy London</strong><br />
I've never actually done that. So attention hackers, I've not done that. And I

</p>
<p><strong>Derrick Showers</strong><br />
don't know, I mean, so I use like, what was it it was like a vagrant, or, like, set up that kind of like, did all the structure for you but then it also changed that around so I forget it's been a little while since I've done any wordpress stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
Same here and I have done that in the past and I was just wondering if there's an easier way I just did like a GREP Search and Replace WP admin like it's referenced a lot in the code, but you can change it, and then change your directory.

</p>
<p><strong>Derrick Showers</strong><br />
So maybe this is maybe this is something WordPress should make a little bit easier, unless it's not really that much of an issue.

</p>
<p><strong>Ryan Burgess</strong><br />
But there again, it could also be, when was the last time you touched WordPress? It's been a while for me. So maybe that's an a newer version for

</p>
<p><strong>Derrick Showers</strong><br />
us. But I think like we're I think there's, there's WordPress is still pretty heavily used. Oh, it

</p>
<p><strong>Ryan Burgess</strong><br />
definitely is. But I mean, is like, maybe this is a feature. I know one issue that I always laugh at that I did. It was years ago, I was building a web app, just on the side, it was something that I was building for fun. And so my one friend who is a security engineer, was like, Yeah, throw it at me, I'll take a look at it and try and find holes. Well, he actually found a really basic hole, which is great, you know, definitely shared that with me, I forgot in my form there again forms. I was allowing people to insert JavaScript in the form, I wasn't removing any of those characters, that would be very bad to be able to input in these forms. And it was saving to a database. So that was a problem too, in the sense. It was like user generated content. And so people could submit through this form. And so he found this like, right away, obviously, it's pretty easy to find. And he sent me it back, he sent me the site link with his profile or whatever he had manipulated with this form, and it redirects to a porn site. And I'm like, Oh, shit, you know what, it was one of those times where I learned very quickly, that's what can happen. And so I've never made that mistake. Again. It was like, it's a simple thing, that it's just like, you know, not allowing JavaScript characters, making sure that they can't submit into a form pretty easy, but if you make that mistake can be kind of shitty. So I learned really quickly,

</p>
<p><strong>Derrick Showers</strong><br />
would you say that you learned about vulnerability?

</p>
<p><strong>Ryan Burgess</strong><br />
I definitely learned about a vulnerability. Cheers

</p>
<p><strong>Derrick Showers</strong><br />
twice. Thank you. Yeah, I have a form on my site that I know is probably unsecure because I get so much spam from it every day. And I'm just too lazy to go through add like CAPTCHA to it or something.

</p>
<p><strong>Stacy London</strong><br />
Yeah. What do you guys say about CAPTCHA? I was gonna ask, it's the

</p>
<p><strong>Derrick Showers</strong><br />
worst. It's gotten better. It's getting better.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, is it? Okay?

</p>
<p><strong>Derrick Showers</strong><br />
I don't know. Like the whole like,

</p>
<p><strong>Ryan Burgess</strong><br />
I like Stacy's faces like that.

</p>
<p><strong>Derrick Showers</strong><br />
I don't know. I don't know. Like,

</p>
<p><strong>Stacy London</strong><br />
which of these 17 Pictures has a street sign?

</p>
<p><strong>Derrick Showers</strong><br />
Well, yeah. But they're trying to be smart about now you can even do like invisible, or I think that I know you can do like invisible CAPTCHA. So like it only show that if it? I don't know what they I don't know how they determine that your bot because I guess sometimes we are bots in their eyes. But if you're getting those pictures, I

</p>
<p><strong>Ryan Burgess</strong><br />
think there's a lot of ways that you can tell if something's a bot, too, but it's not perfect. Well, definitely

</p>
<p><strong>Derrick Showers</strong><br />
not perfect if we're getting challenged by Yeah, no, exactly.

</p>
<p><strong>Ryan Burgess</strong><br />
I actually like the honeypot method for the forums. It's like a hidden field to the user, but not to the bot. And if they fill it out, if the bot fills it out, then it's it doesn't submit. I like that idea. That's a little bit better. Because the Speak to your point is capture is not user friendly tip. It's gotten better, I will admit, but it's not a user friendly thing. So yeah, yeah, it's

</p>
<p><strong>Derrick Showers</strong><br />
just, I mean, the advantage of capture is that somebody else is thinking about it for you. So if you implement it, then you don't have to necessarily worry about all that. Like, where's the honeypot approach? It's easy, but yet, the problem is bots and and hackers and what I get smarter, always getting smarter. So like, you know, figure that kind of stuff out. And then it's kind of up to you to figure out the alternative.

</p>
<p><strong>Ryan Burgess</strong><br />
Like, at some point, are we just like doomed because I feel like, honestly feel like anytime you do something, there's always a way to break in. Yeah, like there really is. It's just like, job security and security engineers

</p>
<p><strong>Stacy London</strong><br />
require facial recognition upon form submission, just man.

</p>
<p><strong>Ryan Burgess</strong><br />
It's really funny, as some of the mistakes that you were talking about that is like I've made mistakes, you know, developing and introducing security holes. But the Trello, that is a perfect example. If we use Trello. Like it, we use it at Netflix, and super helpful to track projects and everything like that, if you may accidentally make that Trello board public, that could be really detrimental. Google Docs, if they're public, you could be totally sharing stuff about your company that should not be public. And I think even little things like that, or security hold it. I've seen people make mistakes. And just you have to almost like be aware of that. And just be careful that you're not sharing it publicly. And it is a little more locked down to at least the company level.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think that's like the UX concerns we're talking about. Totally like, yeah, like make sure that your design makes it very clear that the thing that you're working on right now is private or public.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, I like that. So that it's like very clear to the UI or something that's like this is public. It's cool or no, it shouldn't be

</p>
<p><strong>Stacy London</strong><br />
Yeah, like one of the things we just recently did with the bit bucket. New design is that it was in the backlog but it was just was One of the things that was like on top of the backlog was to show that there was a lock on your repository to say that like, this is a private repository versus a public one. And we eventually got to it, but like, it wasn't, it wasn't on the top of the list, but people are like, I don't know, I'm nervous now, like working on this thing dies it really private, I don't know. So like, that kind of stuff really makes a

</p>
<p><strong>Ryan Burgess</strong><br />
big reassurance to the user and making sure and then like, they feel more at ease. Yeah, I like that.

</p>
<p><strong>Stacy London</strong><br />
And they don't make a mistake of like putting something that.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think also, I mean, so I guess I'm saying this coming from while you, you're a pretty big company to like LinkedIn. And now Microsoft is is very aware of this issue. So we have I mean, I think sometimes it's frustrating, because when you want to use a tool like Trello, or Evernote or something, it's, you know, if it's not approved by security, you really shouldn't use it. But the advantage of that is they're thinking about those kind of things. So they will actually fight that battle with some of those companies that, you know, if they don't have a lock icon, or if it's not clear what you're like, there, there'll be like, kind of like, the, the the strong, arming them into like getting that implemented, so that it will work. And then there's incentive because now there's like, this huge client is going to buy your product. And

</p>
<p><strong>Ryan Burgess</strong><br />
oh, yeah, I've definitely seen that a lot of larger companies, and at least those companies like Evernote, or you want that company X to use your software. And so you're like, okay, yeah, cool, we can implement that. So that it's better user experience, and that you guys will use that that's more money for that company. So it is good. And hopefully that benefits, the smaller companies that may not have that sway of saying, hey, we want this lock icon. Yeah.

</p>
<p><strong>Stacy London</strong><br />
Yeah, terms of mistakes. I was just thinking about that a lot. What like, since you asked that, like, what personal mistakes have you made? And I think I've just been very fortunate that I have worked at fairly large companies, for the most part. And they have always had either security engineers that were hired full time to do that. Back end, engineers are really good. And they also understood those things. So for me, it wasn't necessarily like I made a mistake, but maybe that I didn't always think about it in terms of like, how can I make the UX better so that we know that the security is taken care of, but I can do something, I can be more of a voice for the user, like maybe that was my mistake, like, you know, I worked for a financial institution, there was like, pretty, I don't know, the login process was kind of gross, and like not very user friendly. And they had, you know, like the security questions like, answer five sentence long questions about something. And is that actually more secure? Probably not worse. User experience? Yes. Did I advocate for it? Not so much, because I was like, Well, I'm not a security engineer. They've told us we need that. Yeah. So I think my mistake would be like not maybe reading up a little bit more about it to knowing knowing which things really are actually additional security. And then being an advocate for the UX.

</p>
<p><strong>Derrick Showers</strong><br />
I think I was gonna make a point when you first started talking, it is like it's just fed right into the point I want to make is that you don't have to be I think this is like anything, you don't have to be an expert in order to speak up because even if you speak up and you're wrong, then you learn more, and it's the same I think it's the same thing. That is true with accessibility. It's the same thing is true with like, a lot of these like, things that you don't always think about, like right away, but because you're kind of like intimidated sometimes. Yeah, no, I am like it's just like I'm not you know, I'm not an accessibility expert. So I'm not gonna like I'm not gonna do that because say this because you know, they probably know better than I do. I think the same thing is true with security and a lot of things but like I think just just speaking up and and and having that argument if you're wrong, like I said, like if you're wrong, then you learn and

</p>
<p><strong>Ryan Burgess</strong><br />
you get redirected to a porn site very fast. You know, it's like it's okay to make a mistake. You're gonna learn from it so I think so. I need

</p>
<p><strong>Derrick Showers</strong><br />
to go to Ryan Burgess calm it was


so long ago,

</p>
<p><strong>Derrick Showers</strong><br />
I don't know we're gonna give people ideas for vr.com/wp admin,

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, I might be there I don't know. There's also back in Happy Hour calm. Yeah, I could

</p>
<p><strong>Derrick Showers</strong><br />
vary a lot. There's a lot of different

</p>
<p><strong>Stacy London</strong><br />
cheers vulnerable. This episode super freaking me out. I'm gonna have to like go back and like figure out some stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
I know, WordPress site, immediately every site that you have out there, you're like, Oh, my God, do I need to change this? When should we actually be thinking about security while we're working on a project?

</p>
<p><strong>Stacy London</strong><br />
I mean, from the beginning? Yeah. It's not something you should do after the fact. Like don't release your site, not HTTPS, and then have a form on it. With that asked someone for a password like, right to the first always HTTPS, so

</p>
<p><strong>Ryan Burgess</strong><br />
it was easier to do it first. In that case, too, is like sometimes actually moving to HTTPS is not that easy. Once you've already got like a bunch of code out there. Yeah. There again, though. Should you always be HTTPS?

</p>
<p><strong>Stacy London</strong><br />
Yeah. I mean, I think so. I think that's like the one of those big debates in front end like yeah, like, I have a I have my personal blog is not Yeah, and I feel bad about it, because there's like a bunch of talk recently, like everybody Every site should be passed no matter what. And I'm like, but it's not secure content. I don't ask anybody for a password. I'm not asking for any information, like, does it matter?

</p>
<p><strong>Ryan Burgess</strong><br />
I feel you like question a bit too. Like, I mean, front end happier is not HTTPS. Should it be? There's like, we're not inputting anything. It's just, you know, data that people can click on.

</p>
<p><strong>Derrick Showers</strong><br />
I think, for me, it's like, why not? Like, I mean, that's true. It's, it's, I think, I guess the answer that question is there are people say, it's so easy to actually have a pic about like about this, because there is a there's something that's, that makes it really easy. But there's a bunch of things that make it really easy, but I mean, the most part is pretty easy. I think, though, there could be some work by like, hosting companies like even like DigitalOcean, for instance, what I love DigitalOcean you know, they have all these like, quick setups, like for WordPress, and for an or you can do just your own without any setup, but they don't have anything for HTTPS yet. You know, like, and I think that there could be some, and I think it's gotten easier

</p>
<p><strong>Ryan Burgess</strong><br />
over the years. I will say that it's like, I mean, years ago, it was actually a lot of work. And it was expensive. And yeah, it's great to is it was expensive. I think that was the problem, but it's

</p>
<p><strong>Stacy London</strong><br />
still not easy. Like, yeah, and hopefully your pick will help at the end. But I mean, for me, I started looking into like, Let's Encrypt. Yeah, and some of these ones that were like free, but like to do it on my on my particular site meant I had to like every 90 days do something myself. Oh, yeah, I have a pic that'll help you. Yeah. So it I gave up because I was just like, I don't I'm not every 90 days to do that. Yeah, I was like, I don't want to do it. So I don't have anything. That's the key. I don't need to secure anything like, so if there was a barrier that was like, just a little bit too much for us like,

</p>
<p><strong>Derrick Showers</strong><br />
so a really good, a really good kind of tangent here is Netlify. Have you heard of Netlify? I've heard of them. They do? Like, basically, I think I picked it. That's why I didn't think at the time, but they they do basically like the automated deployment for you. But they have one button, you click the one button and it does everything to install a certificate on on this server because it's hosted by them. Your custom domain? Yeah, well, that's still pretty awesome. It's basically it's just just, it's like Heroku for front end code. Yeah. So like, you just push it and push the master and it automatically deploys, but like, I wish more more more would do that kind of thing. Or just one click and you're good to go.

</p>
<p><strong>Stacy London</strong><br />
Yeah, I think any hosting company that's gonna like help you automate that. Yeah, it's gonna they'll they'll start to pick up business. Yeah. Yeah. Because if you don't make it easy, like,

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I mean, I don't know. I think like, yeah, even if you're not sending any, like, pert like, I guess it's like, where do you draw the line of what's personal? Like you're sitting in a coffee shop on a public Wi Fi? And you're surfing the web? Like, is it personal to some people that they're unfunded? Have you heard that comment, like looking at, you know? I mean, I know I'd be embarrassed.

</p>
<p><strong>Ryan Burgess</strong><br />
I liked what Stacy said of that we should be looking at it right away. I think also testing, I think, even before QA looks at it, it's like we should be testing our own code. Think about those vulnerabilities. Cheers, cheers that there's a lot of them. Those are things that you should just test in your own code. Like, it's a really quick thing to do. And you don't have a security team yelling at you later. And if you don't have a security team, well, then you really should be doing Yeah, if

</p>
<p><strong>Stacy London</strong><br />
you don't have someone, yeah, if you don't have security engineers, or you have like, a back end team, and maybe they're not aware of like, right, and things that need to be accounted for. Test for right away. And that's what you can do is you can be an advocate for even if you're not the expert, you can be like, Hey, we should make sure that we can't inject, you know, SQL stuff like yeah, in the backend. And maybe maybe the back end team doesn't know that. I mean, hopefully they do. But if someone brings it up, that's just better for everybody.

</p>
<p><strong>Ryan Burgess</strong><br />
Everyone should be an advocate for it. And I think speaking to how we started the episode, we're like, Oh, it does kind of seem like front end has typically not really been super concerned on security. I think it is important. It's like we should all be thinking about it. And even more from the user experience of like being an advocate for yes, we should be secure. But like, also, let's not hurt the user experience. What are some tips for our listeners that would help improve security in their work?

</p>
<p><strong>Stacy London</strong><br />
So one, one thing that came up for me a while back when, when node and NPM. And all that was fairly new, we started to try or, you know, push the company to use to use modules for development. When it was a financial institution, they were like really wary about that. They're like, we mean, we're gonna pull down all this code from like, some place like how do we know that secure? I don't understand. So one thing I think you could you could be an advocate for like, if you're getting that kind of pushback is you could say, well, we can host our own. Like, there's NPM private repositories. And so for really concerned about the security of such things we can you can have full control over that security and host that kind of thing yourself. I don't know if that's maybe that's like a known thing and no one it's like, Duh, why even say that but I think

</p>
<p><strong>Ryan Burgess</strong><br />
no, I think it's educating your company, though, for sure is like, hey, no, no, we can actually move our own NPM packages and actually have our private repo for that. Yeah. And also their security packages to that will check certain packages and scan them for vulnerabilities. Cheers. Yeah. I think another thing that always sticks in my mind, I mentioned cookies before. One thing is just really think about it and like limit the amount of sensitive information stored in a cookie, make it pretty generic, don't store a password in a cookie, make sure it's encrypted. If there are, you know, if you are storing some password, your sensitive data, make sure it's encrypted. I think that's should be a given. But it's not always necessarily that because I've seen holes before.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I guess the only thing I have to add is like, I think it's important to do your research. Like I guess it's kind of the opposite side of what what we're all saying is like, there are some things, I think there are some products out there and some services out there that are very secure. And like everyone's just kind of, like, especially working I struggle from this working for big companies, sometimes it's like, you just kind of write write that off immediately. Because it's like, we don't want to depend on this other service to, and I mean, we're moving to this world of cloud computing, or whatever term you want to use. And honestly, people don't like that word. But like, I mean, we're moving to that type of world that that I think, you know, it's you don't always have to reinvent the wheel just because you feel like, there could be security issues, like do your research. And I think that, you know, sometimes you'll find that they're that that service or that product is actually thinking about security in that situation more than you could in your own implementation. Yeah. So

</p>
<p><strong>Stacy London</strong><br />
yeah, I think like, trying to roll your own is sometimes scary. And there definitely companies out there that make these kind of authentication products that you can integrate with your your site that spend their full time job your whole company is based on like them being successful at security. So research time, obviously, make sure that that's not they're not opening up some other additional security thing, but they might be able to, like, do it better, and you can pay for that service.

</p>
<p><strong>Derrick Showers</strong><br />
And yeah, I think oftentimes, like, at least in my experience, oftentimes, you'll go to a third party company or something that first something you won't implement. And they'll say, we need this piece of data. And then right away, like your security team, I guess this comes back to me, where can the company regulated? Totally. And I've worked for a lot of big companies. So it's not just about the company I work for currently. But like that, right away, people are like, Oh, no, no, we can't do that. Like, that's, we can't send that. But like, listen to them, you know, like they've clearly have other clients and other companies that are utilizing their services.

</p>
<p><strong>Stacy London</strong><br />
Another thing I think we could do is front end devs for like improving security in your work is from an ethical side of things, to think about ethics and security. So like, if you're a product manager, and the product as a whole is like, Hey, I think we should you know, collect this kind of information from a person, I guess, be really attuned to that and say, like, do we really need that information from someone? Is that going to really benefit the product? And like, what could that put that person in danger? I think there's there's certain things about like, location like, oh, well, let's track that person's location, wherever they are.

</p>
<p><strong>Ryan Burgess</strong><br />
And that really doesn't improve their user experience. Yeah. It's like that PII personally identifiable information. Yeah. It's like, do you really need that? Yeah. And should you be aware of that?

</p>
<p><strong>Stacy London</strong><br />
And they're like, it could be like, Yeah, we all we just thought that be interesting to collect that data. And you're right, but does it make the product better? But

</p>
<p><strong>Ryan Burgess</strong><br />
also use that data to inform decisions? Not really? Alright, cool, then don't do that.

</p>
<p><strong>Stacy London</strong><br />
Yeah. And just always think about in terms of like, are we collecting information that could be used in a malicious way to like, hurt somebody or, or track them or do something that's not really related to the product?

</p>
<p><strong>Derrick Showers</strong><br />
This may be a different conversation altogether that we can talk about in a future episode. But I'm also explained like in the in the UX explain, explain what what you're doing with that data? And like not don't just, you know, hate that the the apps are even now on websites, you get this notification from Chrome like, you know, this this site, is requesting your location. Yeah. But you don't have any idea why. Kind of make guesses

</p>
<p><strong>Ryan Burgess</strong><br />
to say, like, getting your location because there's a map present that's going to show all of our stuff.

</p>
<p><strong>Derrick Showers</strong><br />
I mean, I know to be fair, you're just you're just calling an API that says I want to call location, you know, that the browser is showing, but you still can do things in the UX that like, you show something before that shows, then you click a button and then you get that message, you

</p>
<p><strong>Ryan Burgess</strong><br />
can share some additional context before actually making that request. Yeah, no, I like that idea. That's actually really good ideas, just making the user feel a little more secure in the sense that okay, now I know why they're asking me I can accept or decline not just accept or decline for some weird request. Another one I had earlier I'd mentioned was like third party tracking or for like marketing material, one thing that I found very useful, I've done it a few companies actually, I think Netflix was doing it before I even joined. But putting those tracking pixels in a iframe, and making sure that it's very sandboxed, which that is amazing, what an iframe can do is it can really sandbox any of that kind of data to one little spot, you can add it to the bottom of the page. So it's not blocking any of your rendering. There's a lot of really cool things that you can do. And usually I'm like, I don't use iframes. Very often. And I'm like, this is a great use case for an iframe. And you can control what data is sent down to those pixels, which is amazing. I think that's one to me is like do that. If you have pixels and tracking on your site, put it in a iframe, you can control a lot more.

</p>
<p><strong>Derrick Showers</strong><br />
I used to work for any, we used to an agency that built e commerce sites and like we would literally have, it was JSPs. But we literally have like, tracking pixels dot jsp. And it was probably a ton of it was like tons because all these kinds of like, yeah, we want all these tracking pixels, because that's all they care about.

</p>
<p><strong>Ryan Burgess</strong><br />
Exactly. Well on this, like, I think I've run into the past, aside from a security issue, just like going on a bit of a tangent on that. But is people having those pixels, I've actually had some of the JavaScript fuck up the page of like our application. And that sucks. Like, you're like tracing this like bug and you're like, oh, shit, it was literally due because of this pixel that I had no idea. And it wasn't like that yesterday, but oh, wait, they push some new code. And because it's outside of your code base, you have no idea. So I think but if you sandbox it, it doesn't affect your rendering, which is great. It might not work. But that's okay. That's on them.

</p>
<p><strong>Stacy London</strong><br />
Yeah, as much as I like dislike iframes for all the reasons that they use, like incorrectly or like, they were this default thing A while ago in web dev, and then you're like, gross, don't use those. But there are really good, that's a great use case. You know, Bitbucket has that use case we have like, marketplace, we have people that build add ons. Yeah. The Add ons are being built by somebody who you don't know, like, maybe you need to sandbox. And the only option that I can think of these days is is an iframe like you isolate it in a browser. I think that's your only option. I mean, maybe there's something I'm not thinking about. But I think that's the best way. It's

</p>
<p><strong>Ryan Burgess</strong><br />
simple. And it works. And I think that's another reason why you might want to use it. Yeah, at the end of each episode, we like to share pics of things that we've found interesting and would like to share. Let's go around the table and share today's pics. Stacey, where do you have per usual

</p>
<p><strong>Stacy London</strong><br />
I don't have pics that are related at all to the topic that we have. We have a quick but I have a related music pick I like to like I'm going to diverge even more. Alright, let's see. So two picks. So I just got back from a week long trip to Lisbon in Portugal. And it was fantastic. I definitely recommend traveling to there if you haven't if it's not on your list, and you should put on your list. I thought the one of the most interesting things about it was that it felt like a little bit of like an alternative San Francisco or like San Francisco is there like bizarro world, Lisbon, and back and forth because they have like similar climates and they have trolleys and the trolleys are from like imported from the US. And there's it's hilly, and they had an earthquake a long time ago, and they're due for another one. And the Portugal's been having really bad fires. And so it's California. So it's like this. There's a bridge there that was designed that looks like the Golden Gate Bridge. But it was designed by the same person that designed the Bay Bridge.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow. Which is super weird. Yeah, it's super weird.

</p>
<p><strong>Stacy London</strong><br />
So like, there's just all these moments where like, Am I in San Francisco, but it's like not quite. It's like an older version of it.

</p>
<p><strong>Ryan Burgess</strong><br />
Even some of your photos and everything. There's a hint of that culture and some of the artwork and everything like the street art, I could see that a lot

</p>
<p><strong>Stacy London</strong><br />
of really cool street art. So anyway, that's my, that's my first pick. A really good time there. And then a second pick is not a song, but a book about music. On my trip I read I finished a book called a girl in a band by Kim Gordon who's from Sonic Youth. So if that was a part of kind of your, your history of listening to music, there's a lot of really great stories in there about like New York, early days music in New York, the beginning of groans, their stories about Nirvana and Courtney Love from Hole at all. All of that is you know, encompassed in this book. And it's just kind of a fascinating inside take on on the music industry.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. That sounds super interesting.

</p>
<p><strong>Jem Young</strong><br />
Oh, this week, I have two picks. The first one is puppeteer. It is a API to control chrome headless, so we can run browser tests, performance tests, things like that. But all in Chrome headless, which is good because phantom Jas used to be the standard but hasn't really made much progress. And Chrome has. So it's an awesome library and it's by the Google team, so it really works well. Second pick is Stranger Things. So by the time this episode comes out, everybody will probably have finished it long, long ago, but still watching it. It's pretty good. I'm slowly getting through it. I'm really slow,

</p>
<p><strong>Derrick Showers</strong><br />
slowly going through I haven't started yet. So we're just gonna talk about it. I know.

</p>
<p><strong>Ryan Burgess</strong><br />
It's so good. Derek, what

</p>
<p><strong>Derrick Showers</strong><br />
do you have high of three, one is related. Alright, we got good. So solve all of Stacy's problems with the reauthenticate. So Let's Encrypt is is kind of what's behind us pick, that's the open source. Linux, I think, SSL certificate that came up with this free certificate that was the first first to be free. But anyway, since this application I actually found out about through gems DevOps, front of masters course. It's called cert bot. And it's, it's, it's super easy to set up, you just select your, if you have like your own server, just select your operating system and and they give you all the commands to run and then it automatically it sets up a cron job. So it automatically renews everything for you. So you just do it once and you never have to worry about it again. It's open source, too. So it's pretty cool. I started and I haven't had those annoying emails that say you need to renew your certificate. My second pic. So I just recently got back from Japan, I think this is the first episode of annonces have been back. So one of the we did so much. So many things. There are a ton of fun. But one of the things that I've tried for the first time was Airbnb experiences. So I kind of always like this, I'd known about it, but not really looked into too much. But we did one of the fish market in Tokyo and it was such an awesome experience. And there's so many there's actually some even in San Francisco that thought it might be fun to try but I mean it's like I said first I thought it was like some weird like, tour that you do with some random stranger but it's it's it's there's so many different opportunities. You can even like go bar hopping with like a you know, somebody is local, you know, so there's lots of cool things to try. And then my third pick is this thing called Drip Drop that I've been like obsessed with lately. And it's it was I found it on some Thrillist article about it being like military grade, strength hangover remedy. And so it's basically Pedialyte, if you're familiar with that, which is what they give to babies that are dehydrated. And since I'm gonna adult baby that gets dehydrated, like every Friday and Saturday night, this is perfect. But it every time I take it as long as you can remember to take it a night before you go to sleep. I have felt like a million dollars the next morning. Wow. So

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, it makes sense if it does help. Yeah, hydration. lets us see what the problem is with Yeah, even

</p>
<p><strong>Derrick Showers</strong><br />
after fernet shots works to test for net shots, man.

</p>
<p><strong>Ryan Burgess</strong><br />
I've troubles getting those down. So

</p>
<p><strong>Derrick Showers</strong><br />
your job? Oh, I want to help with that. But I'll help with the

</p>
<p><strong>Stacy London</strong><br />
taste for net. Yeah, gross.

</p>
<p><strong>Derrick Showers</strong><br />
What I think I should do is have Drip Drop vodka drinks, because then you're just

</p>
<p><strong>Ryan Burgess</strong><br />
you're just drinking the whole time. Yeah, yeah. And you're getting hydrated, you can drink here. Alright, I have two pics both actually not security related at all. One is actually something that I created a while ago, I just called the engineering manager resources, which is just a GitHub links page that I created a while ago, and has a bunch of great resources of books, articles, podcasts, newsletters, things that are useful for engineering managers. I think, to be honest, it is useful for anyone to really like manage projects and things like that definitely got a lot of people adding to it, which is great just recently, so I'm happy to share that as there's even more information that I didn't even have, which is great. And then my second pick is at Netflix. This week, we held a JavaScript talks about how we leverage react in our signup flow. Some of my colleagues Tony Edwards and Jeff, she gave really excellent talks on leveraging react, it was live stream. So talks are recorded and are available on the Netflix UI engineering YouTube account. So that's it for my picks. It's been a while since we've ended the episode with our people can reach and follow you. Let's let's do that. Stacey. Where can people get in touch with you?

</p>
<p><strong>Stacy London</strong><br />
Sure. So I'm on Twitter at Stacey Londoner. Er,

</p>
<p><strong>Jem Young</strong><br />
I'm on Twitter at Jem Young

</p>
<p><strong>Derrick Showers</strong><br />
and find me on tariffshark.com/wp admin. No, I'm just kidding. I don't use WordPress. You can try or just that Derek showers on Twitter.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm at <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a> on Twitter. Thank you all for listening today's episode make sure to subscribe to front end Happy Hour on your podcast or of choice. Follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>. Any last words

</p>
<p><strong>Derrick Showers</strong><br />
vulnerability

</p>
<p><strong>Ryan Burgess</strong><br />
cheer

</p>
`;
        return transcript;
    };