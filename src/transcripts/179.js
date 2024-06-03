module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
All right, welcome to a brand new episode of the front end, happy hour. In this episode, we're going to talk about a really important feature that oftentimes probably nobody really thinks deeply about. But Tony, Charles and Charlie are all joining us from Netflix who do deeply care about this and want to really share a lot of insights in how to approach security identity, to really make sure your login is secure. Tony, Charles and Charlie, can you give brief introductions of who you are, what you do and what your favorite Happy Hour beverage is?

</p>
<p><strong>Tony Edwards</strong><br />
Sure, I can start. So yeah, I'm Tony. I'm a staff engineer here at Netflix. I've been here for quite a while. But over the last three to four years, I've been working in security identity space, pretty passionate about it. As far as my favorite drink, I like a Manhattan, but you can just as well hold their muse. I just love brown liquor. But today I have sparkling cider. Because it's 930 in the morning. Yeah, it's

</p>
<p><strong>Ryan Burgess</strong><br />
a little early for some cocktails, Charlie.

Charlie Shaw  
Hey, I'm Charlie. I'm a technical program manager at Netflix. I've been working in security for my entire career. And as for happy hour drink. I don't drink alcohol. So it'd be Coke Zero.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Charles

Charles Wartemberg  
high on the last half of TCC. As I like to formally call us Tony, Charles and Charlie. I am our product lead at Netflix for identity and security. If Netflix is a house, my team and I work on the front door experience. And I also don't drink like Charlie, I have water today. But back in back when I was drinking go home was a Scotch guy love for you. To be specific. I like that Woody PD tastes. But today, it's a lot more than hydration. So I have h2o

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. And let's also give introductions of today's panelists. Cool. You want to start off

</p>
<p><strong>Cole Turner</strong><br />
everyone? My name is Cole. I'm a engineer at Netflix working on UI

</p>
<p><strong>Jem Young</strong><br />
Jem Young engineering manager at Netflix. And I'm Ryan Burgess. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
an engineering manager at Netflix. In each episode of the front end, Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is? Potential credentials. All right, so you know talking about passwords and security, I'm assuming this is going to come up and yes, we'll all take a drink. Now I had talked about at the start of the episode, login being an important feature. Why is it so important? Let's just start there.

</p>
<p><strong>Tony Edwards</strong><br />
I think it sets like a good first impression for our users. Right? I think a good login experience is one that no one notices. But a bad one is one that people notice or what's bad people in

Speaker 4  
that can take a bet on this one. Um, you know, let's let's roll it back, you know, the fiscal world, the you know, all enter things, we open doors, we, in open drawers, if the House does occur, you open your front door, and the first car world it's getting access. But you think about the digital world, you know, access and identity. Who are you? When you're trying to open these digital doors? It's very important. We have access, Are you authorized are those interesting things. So I'd say identity in the digital world is a really fascinating, spanning from like anonymous to, you know, you know who you are. So it's a really fascinating space. And I'll say, it's the foundation to like a lot of these digital interactions. What does that identity construct?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, also like thinking about how important it is to because even Tony had said like it, you know, it's that first impression, but it's like it's required, right? If you want to get to a application, so many applications that we use on a daily basis, you're logging in, like everybody is touching that feature, which is I think an important thing to call out to is like, you're not using products if you're not using that login on engineers listening. What techniques should engineers be thinking about when building login functionality?

</p>
<p><strong>Tony Edwards</strong><br />
I think with almost everything? My answer is it depends. But I think first you got to understand the trade offs presented to you by your requirements, right. So I think, you know, you might use different technologies or techniques, if you're like a bank or a hospital versus if you're a streaming service or like a blog or something. And then you could, you could like, extend that to choosing what credentials you want to allow. So you want to use credentials, cheers, emails, phone numbers, passwords, biometrics, pass keys, PIN codes, each of these have different trade off the level of security, how easy it is for our users to use, and then frankly, how hard it is and how hard it is to maintain it from an engineering point of view. So there's just a few I can go deeper into some more as well, but I'll let folks chime in.

Speaker 4  
And also Charlie has this fantastic analogy he's been dropping internally. Charlie, do you want to take it or the bottom Have A versus B?

Charlie Shaw  
Sure. I think that whenever you think about products and security, there's always going to be this tension between usability and security. And so far as the most usable systems, the least secure system and the most secure systems, the least usable system, and ideally, you want to be able to find a way to define the right trade offs between both of them. In terms of like a login experience, I think one thing that engineers should consider is is what is your threat model, right? Like, what are you really trying to, like, protect against? And then in order to actually create a good threat model what you need to understand is like, what are the assets you're trying to protect? Right? What is the attack surface which is going to be your login? Who is like the threat actor? Are we talking about organized crime? Are we talking about script kiddies? Are we talking about nation state actors? And then what is their attack vector going to be right? Is it going to be credential stuffing? Is it going to be brute force attacks when you kind of understand like, what are you trying to protect against and then who is actually trying to make those attacks then I think you can try to find a level of security that is acceptable to like the business and also like usable for the consumer to house amazing.

</p>
<p><strong>Tony Edwards</strong><br />
I think you said credential cheers. Cheers. Cheers. script kiddies. I wonder where that term came from? Actually,

</p>
<p><strong>Ryan Burgess</strong><br />
what is the script kitty

Charlie Shaw  
a script Kitty is is that is a hacker who uses pre made tools. So tools like like Kali Linux, in this suite of tools, they have their like NMAP or reconnaissance for for networks. Other types of tools to essentially conduct like brute force attacks on on passwords perhaps like search for various type of software vulnerabilities like like injection attacks, and things of that nature. And then you have like a more like sophisticated hackers, if you will, who have like the most of their own custom scripts, their own custom programs. But generally speaking is like a level of sophistication. And script, kiddies are kind of like the along the lower tire,

</p>
<p><strong>Cole Turner</strong><br />
I'll add in the experience I've had in internet forums like WordPress, or whatever. What Charlie said is there's people who are building the scripts, and then there are people who are running them. And so in my experience, a lot of WordPress installations get attacked on day zero or day one, because these scripts get released to the underground forums. And everyone goes around and starts figuring out which of these WordPress installations are vulnerable. And

</p>
<p><strong>Ryan Burgess</strong><br />
WordPress is a tough one too, because it has such a large footprint across the internet too. And so that's that's an interesting call out cold. I remember there was times when people thought like hiding the admin URL would help them think it's like WP dash admin like, that's like the main open source one? Well, there's ways in which you can change that right. So that it's like colts login, you know, as a URL, but like, that's not really helping anything. Am I right?

</p>
<p><strong>Tony Edwards</strong><br />
Are you talking about security through obscurity? Right? Like, yeah, right, because you just can't guess what, what it is? Yeah. Yeah, I don't think that's very good. Unless it's very obscure, I suppose.

</p>
<p><strong>Cole Turner</strong><br />
I had a situation like that, like hiding the admin panel. But also, I worked for someone who just wanted completely custom software so that if there were scripts released, that piece of software would not be vulnerable. But that comes with its own trade offs, like what vulnerabilities are you introducing? And are you protecting a credential?

</p>
<p><strong>Jem Young</strong><br />
That was gonna be my, my point on login is, Don't roll your own, like this a well trodden path use use the libraries and stuff that people follow, unless you have some really, really, really, really specific use case, like you're the CIA or something like that. I don't know. The fact is, like a lot of issues we see with security, seven from people trying to be smart or lazy, and be like, oh, I'll just do this. Or, instead of hashing my password, I'll just end the five at a bunch of times, like 10 times, and no one will ever get that. Like, and it seems secure. And that's, that's the problem is like most of us don't know anything about it. Like 99% of engineers don't know what they're doing. So when I'm thinking about login, it's like, what's the most popular thing? What is what is well known? And I'm gonna go that path, and then I'll talk to people who know, and they can tell me if I'm right or wrong, but generally, that's gonna get me most of the way versus me trying to be smart. And like, how hard can it be? You know, the common fallacy of every every engineer out?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I love that comment gem of like, how hard can it be? It is not easy to roll your own login. And I've done it, I definitely have been that engineer thinking, Oh, I can do this and have built like a web app where it's like, just Oh, yeah, I'll roll my own login. And it's, there's just so much to do there. And then all the little mistakes that you can make, not even just for login, but I think about even just anytime that you're tied to a database, and like I've seen so many so many people make this mistake and it's such a little one is just like not you know, preventing in an input field like JavaScript, right? Like, someone could just like input some JavaScript that like redirects Pete or just does finicky things that you need to just think about all those little nuances that may not even break someone into like hacking into your login. But it's just those like little nuance things that add up really quickly. And I found that I made those mistakes and learned like, oh yes, like this is actually really hard to do those earlier in my career. Now, I would not try and roll my own. Needless to

</p>
<p><strong>Tony Edwards</strong><br />
say, you shouldn't try to do too much fancy stuff on the client. A lot of this authentication stuff should all happen in the backend far away from prying bad actors, you know, maybe encrypted before it goes over the wire, don't maybe send passwords plain text. But other than that, don't try to do anything fancy on the client.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a good call out.

Charlie Shaw  
Yeah, don't don't store the password in plain text, like Tony said better yet, I mean, store a salted hash password. In your database. That's that's the way to go.

</p>
<p><strong>Ryan Burgess</strong><br />
Any other things that we should be calling out for people if they are approaching passwords, creating logon,

</p>
<p><strong>Cole Turner</strong><br />
even in addition to getting it right with how you store the passwords, how you transmit them over the wire, there are still these other proximity attacks towards brute forcing. So if let's say you have the most secure database, the most secure network protocol, if you're not preventing people from spamming different passwords, they'll be able to guess it. And there are attacks with different layers so they can brute force. There's social engineering, there's many ways in which a password or a credential cheers can be compromised. Here's and so as we're talking about not rolling your own, there's really you want to follow industry best practices, you want to see, what is the right login solution for this application? Because maybe it's not passwords, maybe it's like an email magic link. Maybe it's the future of passkey or something else entirely. Hopefully not your social security number, though.

</p>
<p><strong>Tony Edwards</strong><br />
Yeah, I think in general, we'd like to kill the password, right? It's an antiquated thing. But users are used to using it, it's going to take years to kill. But as Cole mentioned, there's all sorts of other things you can use. You can use PIN codes, you can use magic links. You could use multifactor, off direct device to device communication, some interesting things there.

Speaker 4  
What do you think about the password, the password will never die, I can actually stick on my chest and say, the password will probably never die. Because fax machines are still being used widely. Like in Japan and other places, people use fax machines and in other industries, the use of machines, you think about Fortran COBOL, I've worked in places where the series and COBOL and mainframe passwords will never die. However, there is going to be a mix shift slowly with a very long tail. Like Tony mentioned, we started with passwords, you know, using them password. Then we started moving into, you know, maybe MFA, where you had an authenticator that upcast stuff, then of actually first Windows came in first with Windows Hello. So I was paying for that back in the day. And the value prop there was they can you can hack your face, no one can hack your face, smile and login. I think that was really cool. Didn't really get mass adoption. So like Apple came in with face ID and I just went supernova. And I find myself like with apps and services that leverage face ID Touch ID, it just so easy and seamless to use. And it just helped again, mass adoption. And the like, we also hinted over time, you know, the mobile phone became really predominant everyone's pocket. So people started thinking of what is that? Can I log in way with your phone and you know, the OTP or the, what you call a one time passcode became a thing. I think magic link is really hot right now. Because there's this funny thing that I have observed throughout my career in security over 10 years. You try to log into something you don't use often. You get to password you blank out. You go and click forget password, you get your email, you check your email, you reset your password to tell you set a new password. You type something in you hit enter. And what does it tell you gentleman, it tells you you cannot reuse the old password. It is literally this really weird thing of the moment of entry and recall. It's not the same similar to how you can understand a language and speak it. I think it is somewhere in our brain when we're being forced to like put in that entry and Tony has a fantastic Tiktok video that sums up all the work we do at Netflix on logging in a long winded way of saying we are dealing with human beings and human beings are finicky. And I think magic like is really fantastic because it's like a blood or something, you know, it really gets it there and then I'll say the next thing of the magic link is the past keys are you know, getting prominence I think it's a better stronger way of logging in. We've seen like Google like leverage it on the kind of streaming ASVAB side we're not really seeing kind of a need for it yet but I'll say it's a watch and see you know, similar to how like QR codes was like niche and then with COVID We need to we need to win from least to mainstream. So that's a video of this space. And that's what gives me really like interested in it that it keeps morphing and changing over time. But one thing that I'll know is when it's all said and done when we are somewhere, you know, without credentials, passwords whenever that

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think you're not wrong there. It's like, I love that you called it the fax machine, because I feel like I heard that recently where someone's like, oh, we had to fax this. And I was like, wait, what? Like, what, why is that a thing? Like, just email it at least. So it is funny, like things do not die they last a long time, which makes a ton of sense. So we've talked a lot about passwords and login identity. What are mistakes that like a user or all of us? I mean, we all have using products like Netflix and things like, what are mistakes that people should avoid when they're creating passwords or leveraging a login?

</p>
<p><strong>Tony Edwards</strong><br />
And this one's pretty obvious, but don't reuse the same password? I mean, that's the number one advice give everybody that you know, don't use the same password, use a password manager. But you know, people still do. Yeah,

Speaker 4  
some quick comments, there were a lot of research studies, what happens is people have like two or three main base anagrams with their password. And then they append something on so it could be, let's say, a Tony, some sort of ampersand or ad or exclamation point, and then a year, and I bet a million bucks. The year is a year you could have that account. So somebody just gets one of your passwords, they can start really trying to guess what the other passwords are. And it's actually like two or three that people just reuse. The most popular password is password 123456 Qwerty. Some of the good websites block those popular ones. But if you go, let's say, you're looking at, you know, someone's Uber Eats accounts, passwords, most likely, Uber add date of birth or year, and it's so well. So I think the scary thing about passwords is if one of them are cracked, it is so easy for somebody to try and get the other ones you have, which makes it really dangerous. And if you get I think the keys to the castle, here are your email and your phone number. Because then you can really reset a bunch of stuff and cause some crazy havoc,

</p>
<p><strong>Tony Edwards</strong><br />
Charlie, I'm wondering if you could like talk about where people get these passwords. I know there's like huge dumps of like credentials from cheers from, like, previous hacks and stuff. And I know that we've been they've been used against us here at Netflix before.

Charlie Shaw  
Yeah, so let me just say that passwords are a paradox. And that's because passwords have to be both memorable. And they also have to be unique, right? And those two things are conflicting, right? If it's, if it's if it's unique, it's memorable. If it's memorable, it's usually not unique. And because you know, the guidelines, they used to have a separate password for you know, your various computer systems, you have a lot of things to kind of keep in your brain. And they all they all meet like the NIST requirements, which is the National Institute of Standards and Technology for for cybersecurity. It's extremely long and complicated. It's extremely long and complicated, because in order to combat like brute force attacks to make it feasibly impossible for a computer to brute force a login, right, if you weren't actually meet those business requirements, because of the number of permutations possible. So that that that in general is why passwords are just kind of difficult. But in terms of just where you can get these passwords from. So there's, there's a website and my poned. And my point, you can just go and put your email address there. And you can actually see whether or not your email address is actually associated with any of these, these credential dumps, and I'll go and take a drink. So what happens is that because people reuse their passwords, if you use your password on LinkedIn, say 10 years ago, or the password is on LinkedIn, 10 years ago, the same password you use today. Well, when LinkedIn got breached a couple of years ago, because they did not store their their passwords in a way that was that was encrypted. Essentially, all of those, those credential combinations were leaked onto the internet. And then folks essentially kind of peddling them and they sell those credential dumps to whoever wants to buy them or they just kind of, you know, leave it out there for anybody to, to kind of explore. And to that extent, you'll have, you'll have hackers, you'll have script kiddies who essentially take these these dumps, and then use them to credential stuff, logins. So that's usually how that's usually how most logins are breached. It's not necessarily brute force attacks, it's usually credential stuffing, and then that

Speaker 4  
a quick follow up to Charlie so, you know, analogy here or storytime. If your house is on fire, you're gonna call 911 or try to do something about it. If your credentials are on fire, aka they've been stolen or leaked, you would expect the normal human behavior to change it. Surprisingly enough, everybody's password has been leaked once like you would have been poned you see less of passwords and you will freak out by Most people feel a little bit uncomfortable. And they don't do anything at all. Because you change all your passwords. It's such a big bear, that people just go like, well, no one's gonna hack me. I'm not a celebrity. I'm not Beyonce, whatever, and they just move on. So what do you realize is even when you tell people like, you go to your Google account security checkup, they'll pop and say, Hey, this password has been seen in what color? What one of these have I been poned or hash dumps, you should consider changing them. Most people go like, Yeah, whatever, and move on. I think that's the really unique human psychology behind the identity and security space that, you know, developers to think about, you should assume that everybody will be hacked at a point in time, you should assume there's going to be social engineering, I think one of the great things like is, any bank that's or any company that sends you like a shortcode tells you, you will never call you for this number, and then tells you the number, that's a good way to reinforce it. Because no matter what you do, you will be hacked. And when you get hacked, you may really not do anything about it. But I say to FA is that last thing standing between us really bad things happening.

</p>
<p><strong>Jem Young</strong><br />
So the the trick about security is kind of the same about cars, you know, the old adage, if if someone wants to break into your car, they're gonna break into your car, it doesn't matter. If you parked in a secure garage, you have like a steering wheel lock, you have GPS, all that, like, if someone wants to steal your car, they're gonna do it. The same kind of applies to security, if someone wants to go after you, they're probably going to be able to do it. Like that's just the truth of it. We're all vulnerable, vulnerable in some way, whether it's an obscure password, like, like you mentioned from 20 years ago that someone digs up and turns out, like that's your root password, see, you're like one password, or your other LastPass or something like that. Or if someone wants to fish you and just get your password, because that's the easiest way of hacking, somebody is just asking them for their password. Rather than being like, I'm really clever. And I'm gonna apply, like this massive supercomputer to break their encryption or something like that, or, like, hey, this the bank, you're out of money, we need your password to figure it out. And they're like, Okay, and they'll like, they'll just hand it over. That's so much easier that people forget about that. So the truth is, is someone really, really wants to go after you, they're probably going to be able to. But we added all these things to make it as difficult as possible, like using a password manager, using multi factor authentication, using pass key user using biometric login. Because those are all really just like barriers that someone's gonna be like, You know what I'm gonna go off to the next person who is still using Password 123 as their main password. Sorry, cool, you gotta change your passwords again. And that's always my thought on security. So like, I just tried to make it as difficult as possible. But I'm also not super paranoid, because I know that if someone really, really, really, really wants to get me, they probably could do some vector that, so I just try to be wary. And that's probably the best you can do. But Charles, like you're saying, humans are not human. They're not gonna change their passwords. So it's up to us in engineering on security side, just saying, like, try to help people along and try to make make them make good decisions.

</p>
<p><strong>Ryan Burgess</strong><br />
Like what you said to Jem on like the car analogy. It's like, when I think about it is like, cars or your house, all those things is like, I don't care how secure it is. It's like there's always a way in, right, like, even the social engineering of it, or there's some way to do that. But I think it's like, if you with your password, create something that is more secure, or two factor, or biometrics, whatever it is, it's like, those extra steps are just making, if I was a hacker, I'm not going to go after that person. Unless I really need to go after that person. I'm gonna go get the person who use password 12345. Because it's like, that's easy. And I can get into more things because they haven't put the attention into that. So I think that's something to really think about too, is like, yes, you probably can get hacked, but there's low hanging fruit for hackers that you know, maybe you just stand out a little bit different.

</p>
<p><strong>Cole Turner</strong><br />
That reminds me, gem. What is the name of your elementary school?

</p>
<p><strong>Jem Young</strong><br />
Your first cold once you finish? Elementary? What's your favorite color? Yes, burns tangerine.

</p>
<p><strong>Cole Turner</strong><br />
It's funny, because credentials is like the first half of this. But there's the other side of security, which is security questions. Cheers. And so if you're not getting social engineered through your password, or through a fake phone call from your bank, or maybe you're an employee at at MGM, you could be getting questions on the internet, like all of these personality quizzes that are actually social engineering attacks like hey, what high school did you attend? Or what was the name of your favorite pet and these sounds so like, feel like oh, let me answer this because I just want to share this with everyone and someone is watching that picking up that fact and running with it. And this is really why as an engineer, or as a user, I really prefer single sign on. For websites that I don't really care about, I use a password manager or some random password I've got. But generally, if it's not my bank, or it's not something that's super vulnerable to my life, then I'll use single sign on through Google. And that way, I trust that Google has it covered. I haven't I trust that they have the brute force attacks covered or all the other vulnerabilities. If I could

Charlie Shaw  
just comment on what you just said, Call. What you're talking about, specifically, in the beginning, was security questions, right? Like, what elementary school did you go to? What's a color difference car? If it's if multifactor authentication is implemented correctly, that should not be the case, right? Because multi factor authentication is something you know something you have something you are right, those are the three factors involved. So if you if your first form of authentication is your password, that's something you know, and if your second form of authentication is your security question, it's also something you know, so that's really not MFA, right? It should be something you have like your phone or something you are like biometrics,

</p>
<p><strong>Ryan Burgess</strong><br />
also curious call. What are you alluding to on this MGM hack?

</p>
<p><strong>Cole Turner</strong><br />
Wasn't there a recent I MGM? Not the studio, sir MGM in Las Vegas was having trouble with all of its screens, it's monitors, TVs, etc. Because some clever hacker managed to social engineer a password from an employee,

</p>
<p><strong>Tony Edwards</strong><br />
I think they called like the Help Desk spoofing this person's numbers pretty sophisticated. And and now they have, they're holding them for like $30 million in ransom.

Speaker 4  
I think I read like people not being able to go into the rooms and stuff. But I'll say, Let me think about security. It's literally like the lowest hanging fruit. So yes, you can have the castle really guarded well have everybody with to Fe and everything. But then there's just like that one person. So you know, it can be someone that close with someone that has access to them. If you're able to go on the tech talk on social media and social engineer them, you have somebody who has penetrated the castle, I think there's all these like, business compromised email stuff that just happens when somebody breaks in and wait. So it literally it's your secure as the least secure person in the organization, period.

</p>
<p><strong>Jem Young</strong><br />
And this, this is why there's that from from tech community, there's always pushback against the idea of backdoors. on phones and computers and things like that. And for those who don't know, backdoors, like a shortcut to all the security, you could have 15 layer security, if there's a backdoor, someone has the key, they just walk right in. And the argument for the government's like, well, we need to be able to decrypt WhatsApp and signal and like all these secure communications, because terrorists and you know, for the children, and all these reasons, and and I think a rational person be like, yeah, that's, that's true. I want security or I want our government, I want people looking out for our safety to be able to, you know, do what they need to do to find the information. But the problem is what we're describing here is if someone has like a kind of a skeleton key to all the the encryption and security, it doesn't matter what our passwords are for using multi factor authentication, because there's one big gate that everybody's gonna go after. So you're gonna have this giant giant wall. But if there's a tiny hole in the wall, everybody's gonna go through that. I won't I think Tony studies history, he could probably talk about the Maginot Line. And in France, it's an interesting story. But like, it's kind of the same thing. It doesn't matter how good your security is, if you didn't if there's just a hole in your wall somewhere. And that's why if you ever read about, you know, people against backdooring, and government trying to break encryption, that's why you just can't trust anybody when it comes to security, not even yourself.

</p>
<p><strong>Tony Edwards</strong><br />
Very true. Since you mentioned it to him, I have to buy Maginot Line the French built after World War One to defend against any future German attacks. And they built this huge, very fortified wall along the coasts or the border between France and Germany, right. But they did not reinforce at all the border between Belgium and Germany and France. So that way, when the Germans wanted to invade, they just went through Belgium. And they went right in. Didn't have to stop at all. But you mentioned you mentioned backdoors, and, and government stuff. I think Charlie, because of his pretty interesting background might have some insight into this. If you're willing to share, Charlie,

Charlie Shaw  
well, there's, there's a there are a lot of ways to of course, break into a computer system. And I think one thing that we've alluded to on this chat is just how humans are the weakest link. But in addition to that, there are a number of other considerations. So for instance, a diverse data sovereignty is a really big issue. So for instance, where's the data actually being stored at so for instance, a lot of tech companies will store their data in Germany because Germany has a very, very strong and impartial court. system, right, versus storing it in, say, another country in which that particular government could actually access that those servers, and perhaps actually get the data off of that. There's, of course, a lot of talk about just how governments will collude with, say multinational tech companies in order to essentially have those backdoors to unencrypted, you know, piece of information, so that that's also a possibility to, but there are, there are, you know, almost infinite ways for you to steal information. So for instance, if you, if you don't have the advantage of having like the servers in your particular country, we don't have the advantage of colluding with a tech company, you know, you can essentially try to like force a certificate of of a website or something, you know, there's, there's a classic example of Iran who actually forged like the, like the Google certificate, and essentially had all of Gmail, you know, exposed to them, because they essentially had like a fake Gmail website that was redirected to them. But they actually forged Google's Gmail certificate, so they can actually see all the all the correspondence from the users coming in and out of the country. So, you know, that's just one example of just how powerful like governments are in terms of just the way they can actually penetrate computer systems.

Speaker 4  
And just to add on to that, I think governments are powerful, but also we have these massive gatekeepers. So I'm saying gatekeeper, I have like a billion plus users. So does 16 Google products that hit that threshold, Microsoft has the word, the world's email with Exchange, Facebook, Apple, etc. So the fundamental thing is, as we are building code, you know, whatever can be a slight Miss, can then be exploited as zero day. And there's a market for zero days that people buy and sell. And there's also like companies like Pegasus that specialize in zero days, like heck, iPhones and stuff. So I'll say as people who are building these applications, you know, it's not someone is not someone that someone's mom's basement, who's going to be hacking is most likely going to be pretty sophisticated nation state actors who are leveraging zero day exploits, which could be something that was not really seen. But, you know, can then become really interesting. I think the most interesting one most recently was, or was the one that happened a year or two ago, that we all companies needed to like rewrite a bunch of stuff ASAP, because some of them open source. Love for us. Yeah, exactly. So that's an example of if, you know, with the open source community when you build things on top of things, and the Zero Day is fun. And one of those, everybody's got some big problems.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I mean, that was a huge endeavor for all companies, like for individuals, everything, like it was just a massive panic and odd timing, too, because I believe it was right before the holidays, too. So like people are scrambling to get that all fix and address since we're

</p>
<p><strong>Tony Edwards</strong><br />
front engineers, and we many of us use NPM. And we're talking about open source packages. And you know, the Netflix website probably depends on 1000s. If you've been one of those where to be compromised. You know, that could be a huge open hole. I'm curious if anyone has any more information about how we protect against that, or, or if you have any examples

</p>
<p><strong>Cole Turner</strong><br />
of Netflix, I know that we have a node runtime team, as well as security teams that are often running routine inspections of our code artifacts to see if any of the packages or dependencies that we depend on, have introduced common attack vectors. It's not perfect. But also we rely on just the open source community itself. If there was a vulnerability, having all of the eyes on it helps. And we would be made aware of it before it would become too serious. But at the same time, Tony, how you're talking about open source being an attack vector? I feel like on the flip side, a lot of more individual on an individual level, we are often targeted through email phishing. And so as we were talking about different attack vectors, it's really interesting to see that social engineering isn't so much on the security question side, it's more on the email side, you'll get an email that looks like your bank or some other highly sensitive system, and you're like, oh, gosh, somebody's attacking me. I better click this email and log in. Or another example is at many corporate offices, the security divisions will do annual training where they send out purposeful phishing emails. And a really great example was I think, I heard there was like free tickets to Taylor Swift eras tour and you know, the world being a Swifty place. So many people in that organization had clicked that email for free tickets and they're like, Oh, you have to go through training because we can't trust you. And all it took was Taylor Swift.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I'll give up my social security number what how was the tickets? Come on, like, that's right.

</p>
<p><strong>Jem Young</strong><br />
Tony, your your question is like, like, what do we do what accompanies do some sort of vulnerabilities. That's actually one of problems with security too is, most big companies won't tell you what they do with security. Because like, you know, if we told everybody exactly what we did, then we're not as secure. And that's kind of the inherent challenge with security too, which is like, oh, Netflix has it right. Nobody's hacked, whatever. How do they do it? Well, we're not going to tell you because that's just not good security, but how to other people follow? So I'm curious like, how, how you all how do you keep up with the what's happening in security? Is there a secret conference where there's like, no recording allowed? You all talk to each other? And hush hush turns in a corner? Or is there just general best practices that are okay to share out

Charlie Shaw  
in terms of? Well, I think what most people think about security think that they think about vulnerabilities, right? So, let me just take a step back and say, when when you build a computer network, there are when you when you say code something incorrectly or you introduce a particular weakness, right, that is called a, a CW ie a common weakness, a common weakness and exposure. So you, you don't do like, like, like actual parameter checks when you when you take in like some something from a website, or you accidentally introduce the ability for someone to do some sort of injection attack, right? That is a weakness. And then when a weakness is actually identified in a piece of software that turns into a CVE, which is a common vulnerability and enumeration, right CVE. These are then given what's called a CVSS score from a NIST right, the organization I talked about earlier. So in short, whenever a new vulnerability is found within a piece of software that ultimately is linked to a CW ie a weakness in software, it has given a CVE number and a corresponding CBSs score talking about how how essentially damaging this could be to a given network itself. And there are various other ways to calculate test scores, including like how recent the vulnerability is, what is like the state of your computer network. But in short, when you think about like, blog for j, for instance, that was a CVS is 10 out of 10. Right, the highest one available. So I think when most people are considering, like, how do you actually find out about like, what is what are the security vulnerabilities out there, the best place to actually look is through this and look at the actual CVE enumeration list, and also the CBSs corresponding scores. And if you want to learn more about just how to how to actually fix those things, and how to prevent CVS from materializing in the first place is worth digging a little bit deeper, and actually looking at the CW E's, which are actually published by mitre, which is an organization that does a lot of security research.

</p>
<p><strong>Tony Edwards</strong><br />
What you're saying is there's not a dark room where everyone gets together and cloaks and discusses dark security secrets. Instead, you're saying it's very much in the public eye? And anyone

that's called Twitter. Fair enough?

</p>
<p><strong>Ryan Burgess</strong><br />
Or should we call it x? I still don't know. But hey, my God. Before we dive into pics, I would love to even hear like going back to something that Jim had said about like not rolling your own login. What are some technologies or things that engineers could be leveraging? Like there are a lot of open source libraries and things what would you all recommend?

</p>
<p><strong>Tony Edwards</strong><br />
If I was starting out? I would do I think what Cohen alluded to, which is using I guess what you call federated identity, or like login with Apple login with Google, you get a lot kind of for free. It doesn't make sense for every service, especially maybe one like Netflix, where we have a lot of different client types. It's kind of hard to transfer credentials in that way. But if you're just making a simple app or a simple web app, I think just bolting that on gives you a lot of peace of mind for very little cost. So that's what I would go with.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, let's jump into pics in each episode of the front end happier podcast, we'd like to share things that we've found interesting want to share with you all. Sometimes it's topic related of the episode sometimes not really doesn't matter. Jim, do you want to start us off?

</p>
<p><strong>Jem Young</strong><br />
Sure. I have two picks. The first one is a Netflix show. It's called sanctuary. It's a Japanese show. And it's about sumo wrestling. And I am a big fan of anything involving sports. Because it makes me appreciate how much goes into even things that look simple. Like Sumo. I always thought it's just like oh, you get you get big and fat. You put on a little underwear thing and you you wrestle the other big fat guy and try to push them out of a ring. But really after watching sanctuary which is which is a drama based on kind of this narrative, well, rebel sumo wrestler coming up in the ranks. It made me appreciate like how complex Sumo is, as a martial art, and how like the match over usually in a few seconds, but there's so much technique that goes into that it just like that's just how the fights and it's just really, really fast. So I really enjoyed it, it made me anything that makes me appreciate something else, whether it's cars or science or technology like the humans behind it in the thinking. I always like those type of shows. So that's your sanctuary on Netflix. My second one is a valley silicon pick. Normally, I'd say, Valley silicon as a part of the show where I pick things that are ridiculous are overpriced and only exists because we get paid too much here in Silicon Valley. But this one is a little bit different. So this one is actually free. It is a free TV. Does that sound good to you all? You want to free TV?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, pans.

</p>
<p><strong>Tony Edwards</strong><br />
What's the catch, though?

</p>
<p><strong>Jem Young</strong><br />
We'll call Coulson Yeah, so he's getting a free TV. So there's a company and I believe they're a Silicon Valley company. They're offering consumers a free TV. That's a nice one like a 60 inch, you know, forte, all that good stuff. The downside? Yes, Charles, you can't see his just shaking his finger. Yes, there's nothing, nothing free on the internet. The downside is, there's a second screen underneath that TV. And on that screen, they're displaying ads to you 24/7 All the time. It gets even better. It gets even better. There's cameras in there monitoring how if how many people are in the room, listen to your conversation. They're actively like, you know, streaming everything that you're streaming. So they watching every single click everything you say about a show? Yeah, like it's kind of a free for all in your privacy. And plus, you're getting bombarded with ads. Not only that, but it's a free TV

</p>
<p><strong>Tony Edwards</strong><br />
eye candy for

</p>
<p><strong>Jem Young</strong><br />
Yeah, yeah. And it's one of those like just tech dystopia things where people are willing to give up a lot. And they're giving up a lot more value than they're getting on TV, and they're just not aware of it. And I, to me, it's so it's so absurd. But I'm also aware of my privilege, where I can just buy a bunch of TVs and not have to worry about that. But still, the fact that a company like this exists is to me is like the dark side of tech that I really, really dislike about our industry is just people will sell your privacy and your data and ads. And like they'll just do anything and they'll justify it. And they're like, Well, we're giving people a free TV. So anyways, that's my valley silicon pic. More of a tech dystopia pic. I hope this company doesn't go anywhere. Because I've sorry, that's just not good.

</p>
<p><strong>Cole Turner</strong><br />
Jim, there was an episode on Black Mirror about this called Million Mile merits like literally, they were in black mirror now.

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's like they're getting inspired by black mirror to create more technology. Soon we'll have those robot dogs that hunt you. They already exist.

</p>
<p><strong>Ryan Burgess</strong><br />
By doing so. Yeah.

</p>
<p><strong>Jem Young</strong><br />
What are we doing? That's like stop putting a Black Mirror giving people ideas.

</p>
<p><strong>Ryan Burgess</strong><br />
Could you could you imagine in like, you know pitches for like VCs funding all that. Like they come in. They're like, we have this idea. Picture you remember seen that Black Mirror episode? It's like we've created that. Let's throw the money at it. Like it's like that's like, the type of shit that's happening. Geez.

</p>
<p><strong>Jem Young</strong><br />
Anyways, that's fine. My rants? Yeah, come on attack. Come on, we could do better.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, cool. What do you have for us?

</p>
<p><strong>Cole Turner</strong><br />
Everyone, I've got two picks today. My first pick is if you've listened to this episode, and you're not sure where to start, in terms of what are different front end security things to consider. I'm going to link to an article that says 10 popular types of attacks and best practices to prevent them. It's a pretty good checklist if you're building front end applications of things that you can look through. And then if you really want to get deep into client side security, there's a library that I really like for client side encryption. It's called the Stanford JavaScript crypto library is JCL. And it's really effective at encrypting even larger payloads client side and sending them over the wire. And that way, in some sense, even your back end can be obscured from what is happening on the client side. And those are my two picks.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on, Tony, what kind of pics do you have for us?

</p>
<p><strong>Tony Edwards</strong><br />
Let's see how Mine's kind of odd. It's fig jam from figma. I find that workflow diagrams are my favorite tool when explaining complicated technical concepts to non technical people. And fig jam just does a beautiful job of that. So if you are looking to communicate something technical to some of your stakeholders, make a workflow diagram

Speaker 4  
totally wake you up all our secrets man. literally just to finish the 31 Fun fact, I'm actually an engineer by training so I can get into the code. You don't need to write any code. My fat my pics are, I'm a big sci fi guy. So as a bunch of folks on my team, no big on Sci Fi, my current fascination is on foundation. Based on the Isaac Asimov books. It's a fantastic show on Apple on a different platform where the folks who make the iPhone, the season finale happened yesterday. And it's just really fantastic. Storytelling, we just because I love about sci fi, it's just abstract humanity. It's a different setting, but it's still human emotions. And I think that's what it's really cool. Second obsession is I have someone to jam Silicon Valley one. I don't have too many hobbies, and I'm still gonna be fascinated with coffee culture. And I'm so scared of becoming that person who starts it taught me really snobby about coffee rolls and blends and french presses and all these elaborate rituals you do to just get your cup of coffee. I started from Trader Joe's cold brew. I migrated to an espresso, like about a month ago, and I'm already thinking about the next day I can get that can make my coffee game. Much more elaborate. So one is foundation two is picking up a bad coffee habit.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on Thank you very much, Charlie, what do you have?

Charlie Shaw  
Because this, this episode is about security. I just say if folks are interested in a topic, look up the side channel attacks, they are my absolute favorite type of attacks for penetrating computer networks. And they're the type of attacks you use to where you look at the physical characteristics of system and try to determine is cryptography. So for instance, there have been studies in which folks would say, send emails right and based upon like the flickering of the LED light, they would actually be able to determine like crypto analysis and determine what is the actual like, like key used for that particular encryption. So side channel attacks are absolutely fascinating. I think it's it's one place where it doesn't get a whole lot of attention, because you know, things like social engineering typically do. But that is the part of security, which I think is absolutely brilliant. Just take a look. Wow.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm blown away. Just hearing I saw

</p>
<p><strong>Tony Edwards</strong><br />
it. I saw a talk about that from DEF CON, I think. But I've also seen one where you can listen to someone's keyboard, and then know what they're typing based on the characteristic sounds. With like, 95% accuracy. It's insane.

</p>
<p><strong>Ryan Burgess</strong><br />
That's wild. Yeah, I mean, it's like, I think we just said before we even started this episode, security is one of those things that if you're working in security, you are always going to have a job because doesn't matter how great the technology gets, there's some way to penetrate it. And that's like, interesting just getting in that mindset. So that thank you for sharing that one. I have two pics for this episode. They're completely unrelated to security. One is a graffiti video that I came across a few weeks ago, where a graffiti crew went and spent seven days in Chile. And they filmed pretty much all their graffiti that they were doing. It's it's a really well done film, I liked a lot of the camera work. And of course, I really liked graffiti, so it worked really well. And then I'm really glad Tony didn't pick this one. This is something that Tony shared with me earlier this week. It really killed my productivity, though. But it's a really cool web game that someone had created called SF streets. So it's essentially it's a map of San Francisco, and you were trying to by memory, fill in all the different streets, which that's cool and all, but what I really like about it is the length of the streets also give a percentage. So you're like coverage of San Francisco. And you're sitting there trying to remember all the various names. One thing that one trick to it is do the one to 48 streets that you know exists that are just first street Second Street, you'll get quite a bit there. But it's been fun. I'm not haven't tapped out yet. But I'm scared to open up Google Maps now because I don't want to like have that. Show me any street names. I'm trying to remember them by memory.

</p>
<p><strong>Tony Edwards</strong><br />
You don't want to cheat. Yeah, it's

</p>
<p><strong>Ryan Burgess</strong><br />
a really it's well done. I would love to see this created for multiple cities. I think that would be really cool. So yeah, I've had a lot of fun with that one. I highly recommend anyone who's familiar with San Francisco to give it a try. Charles, Charlie and Tony, thanks so much for joining us on this episode. It's been a pleasure having you all. I know Tony, it's been your second episode back. So that's great having you back and honestly, I learned so much just from this episode. So I hope our listeners did where can people get in touch with you if they want to reach out or talk with you all

</p>
<p><strong>Tony Edwards</strong><br />
that Edwards 947 on x. Love that. Kim COVID just said that, Charlie,

Speaker 4  
you can just find me on LinkedIn. Yeah, same Yeah. at Twitter, a Twitter presence but I'm more active on LinkedIn. So I'll say yes somewhat to Charlie. You can find me on LinkedIn.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Well thank you all for listening to our episode. Hopefully you learned some great tips on how to implement better security and also even just create better passwords for yourselves. You can find us on Twitter at front end H H. You can really find us on whatever you like to subscribe to podcasts on please subscribe, tell us how we're doing any last words.

</p>
<p><strong>Cole Turner</strong><br />
This is Bank of America. Can you please confirm who you are can have your social security number?

</p>
<p><strong>Tony Edwards</strong><br />
Of course you can. I trust you completely cool.

</p>
<p><strong>Jem Young</strong><br />
What's the name of everyone's childhood best friend? Just Just real quick. Charles Wartenberg. What's, what street did you grew up on?

Speaker 4  
So far for these security things? Pro hack, use a fake answer. So I know where I went to school, but I'll change the name a little bit or I changed the data a little bit so you can fudge with those security questions. just mess with people

</p>
`;
        return transcript;
    };