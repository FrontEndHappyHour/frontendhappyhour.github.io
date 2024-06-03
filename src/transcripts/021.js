module.exports = function() {
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 21st episode of the front end Happy Hour podcast. Offering content in several languages makes a better experience for your users, but it can add many layers and complexity in your applications design and architecture. In this episode, we'll be discussing the ways we have dealt with supporting multiple languages. Before we get started, let's go around the table and give brief introductions of today's panelists. Derek, do you want to start? Sure.


<p><strong>Derrick Showers</strong><br />
My name is Derek showers and I'm a senior software engineer at LinkedIn. Jeremy young

</p>
<p><strong>Jem Young</strong><br />
Senior Software Engineer at Netflix and happy birthday to Derek.

</p>
<p><strong>Derrick Showers</strong><br />
Thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
I was gonna say we should call that out. That was Derek's birthday yesterday. He's in rough shape. today.

</p>
<p><strong>Derrick Showers</strong><br />
We have our beverage of choice water.

</p>
<p><strong>Ryan Burgess</strong><br />
You do have some scotch beside you too. So that's good. Augustus.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. My name is Augustus union. I'm a front end engineer at Evernote me Kim O'Brien

</p>
<p><strong>Brian Holt</strong><br />
used to known engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
Impressive, and Brian showing his multi languages. And I am Ryan Burgess, a software engineering manager at Netflix. In each episode of the front end, Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. So what did we decide today's keyword is global global. So if anyone says the word global, we will all take a drink. Alright, let's get started with the episode. What are some things people should be aware of when they're trying to support multiple languages?

</p>
<p><strong>Jem Young</strong><br />
You can't just put things into Google Translate and spit it back out.

</p>
<p><strong>Ryan Burgess</strong><br />
And why not?

</p>
<p><strong>Jem Young</strong><br />
Context is very important. And I only say this because I'm not an expert in localization. But there's a whole team of people at Netflix that are really, really good. And if I ship even like a sentence or something, the amount of discussion that goes into it in the context, they're like, Well, no, and this language means this, you have to do this. And yeah, you can't just throw it into a computer and translate things.

</p>
<p><strong>Ryan Burgess</strong><br />
Google Translate is not very reliable. It's it's good. Like, it's amazing that we can have a tool like that to translate something quickly, but it's never perfect. And so yeah, it's probably not something that you want to be using on your site. I've seen it embeddable, though you can put your own Google Translate on your website. That sounds like a horrible, it's a terrible idea. But I'm glad you brought it up, Jem. It's not a solution, I guess is where I'm I'm thinking of that Google Translate is not I only

</p>
<p><strong>Jem Young</strong><br />
brought it up because I think there's this whole culture of startup people out there that it's like, huh, we can go global throat and Google Translate in therapy and CEOs like approve this. Yes. Oh, yeah. on a roll. But that's not the way it works. And fortunately, I have the benefit of working with people that know how it works. But my naive self a few years ago would have been like, voting Google Translate were done called a day. But now that is very wrong. And you've actually produced some insulting results, because it just so wrong. The people that speak that language will be like, this is just insultingly bad. Like

</p>
<p><strong>Ryan Burgess</strong><br />
when we turn them off, it'd be like if we read poor English, we'd be like, what's this is unprofessional of this website. So it's the same idea is like a poor translate could actually hurt your user experience. That's a great

</p>
<p><strong>Brian Holt</strong><br />
point. And like, I remember, in particular, Germany, if they have poor translations, they're quick to think that like, this is a scam. And so they just won't sign up for it.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow, that's pretty powerful, too. So just even having a bad translation. Not a good idea. Yeah, exactly.

</p>
<p><strong>Augustus Yuan</strong><br />
Well, it's also really interesting, kind of how Netflix says that Evernote also has a dedicated localization team. And it's just so interesting how, like making continuous localization work where like, we have like this robot that will scan like our files, and then it will, like, send it to translators. And it's just, I never really realize how different some languages are, like even the grammar is like completely different. I think it was German, kind of what you're saying. It has like this weird thing where like, you can have like a verb and like the sentence but then some certain verbs will have like part of the verb in the first part of the sentence and the rest of the verb in the second part in the end of the sentence, so you don't actually know like, what they're saying until you read the whole thing.

</p>
<p><strong>Derrick Showers</strong><br />
I think another way to look at it too, in that respect is like even English. I've worked with a lot of copywriters or whatever that are, like very specific about the words that you use, but they all mean the same thing. So but I mean, you know, I've been in situations where things get changed 10 million times before they get to production, you know, just because of one word, you know, that mean the same thing. Two words mean the same? Well, I

</p>
<p><strong>Ryan Burgess</strong><br />
think that's why it's important to to have someone who actually understands the English word or English sentence and is able to translate it in their language appropriately and understand the context of what you're trying to say like if it's sign up here. Maybe that doesn't translate appropriately in German or Spanish. And it's they, they understand what we're trying to say in English and they have to translate it appropriately. So it actually means what someone should be trying to do at that point, a mistake

</p>
<p><strong>Jem Young</strong><br />
I've seen is, since the United States, a lot of people go english to spanish, because Spanish is very heavily spoken United States in certain parts. So I've seen the person like, oh, yeah, I speak bad Spanish, I can do some translation. And they try and it's just, just

</p>
<p><strong>Brian Holt</strong><br />
terrible. Yeah, no, it's a it's a peculiar skill set. Like if I was trying to do it on for Italian for Netflix, I would probably get it wrong, just because the way that you conversationally speak Italian is entirely different from the way that you write it. And in particular, it's even different from the way that you market in Italian, for example, they want to use infinitives everywhere, which is just not the way that you speak. Nor the way that you write Italian it is specifically for marketing type materials.

</p>
<p><strong>Ryan Burgess</strong><br />
I think another thing to think about, too, is how do you change languages, like you need some sort of way for the user to actually be able to change their language if it's not the appropriate one. So that I've seen a lot of people in the top right will have the drop down to choose languages or even in the footer. Or it's probably an important one that you should have some way of doing that

</p>
<p><strong>Brian Holt</strong><br />
it should be intuitive, it should be pretty immediately obvious to which I think at Netflix, we don't do the best job, you have to go all the way to the footer to figure out the way to change the language,

</p>
<p><strong>Ryan Burgess</strong><br />
we do try and default by taking the browser's default language or what the user is actually has their browser set to. So I think you can be smart about it and try and choose the default language.

</p>
<p><strong>Brian Holt</strong><br />
But if you're, I don't know Japanese friend wanders into a computer doesn't speak any English. I don't want that's cool that you have a Japanese friend who doesn't speak English.

</p>
<p><strong>Derrick Showers</strong><br />
Probably a good way to figure that out is which I think we've all been there is change the language and then try to figure out how to change it back. And sometimes it's very difficult. I've

</p>
<p><strong>Ryan Burgess</strong><br />
done that on my phone multiple times for testing. And it took me a while to figure out how to turn it back.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I had Spotify set to Japanese for a long time, because I could not figure out how to get back.

</p>
<p><strong>Ryan Burgess</strong><br />
Another one that I've often seen, as we talked about the Language Switcher, one that I don't really like is when sites put in flag beside it, because basically they're seeing a country right, a flag. A lot of countries speak multiple languages. So that's not really the best idea to identify languages.

</p>
<p><strong>Augustus Yuan</strong><br />
That's interesting. Yeah,

</p>
<p><strong>Brian Holt</strong><br />
it's a little selection list. But at the same time, it's still you're communicating your point universally, right? Like if you are from the from the US and you see a great British flag, right? You know, look, if I click on that, I'm gonna get English. So it is still effective communication.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I guess it helps a little bit in what we're just talking about. Like if you try to switch it back to English, you know, or to a different language, you know, you can identify with you know, by the flag, you can see the American flag, English, Mirka

</p>
<p><strong>Augustus Yuan</strong><br />
was actually interesting because I think for Evernote, we will have like Spanish but then we'll also have like a separate Spanish for Latin America, or like there's Portuguese, but then there's also a separate one for Portuguese from Brazil. I'm actually not sure how different the translations are. But

</p>
<p><strong>Ryan Burgess</strong><br />
we have that at Netflix as well as well. There's enough of a difference to make a whole nother language. So

</p>
<p><strong>Brian Holt</strong><br />
we actually have a separate one for Great Britain two that says pip cheerio everywhere.

</p>
<p><strong>Jem Young</strong><br />
Did you know this and CSS? Not a lot of people know you can use grey with an E or an A it'll still work. Oh, really?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that is actually really interesting. That makes it harder because I can never remember which one.

</p>
<p><strong>Brian Holt</strong><br />
saviors isn't a maraca. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
that's how I always remember to eat for Europe.

</p>
<p><strong>Ryan Burgess</strong><br />
I think another thing too, that I always struggle with for languages is how long some of the strings get you look at German or Russian. And then to the opposite, you have something like Chinese or Japanese, it's very, very small. And so that can really screw up your UI elements just trying to support multiple languages. It's not that easy.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, we constantly have an issue with German rapping like three times or four times when I wanted to, like not rapper only rap once

</p>
<p><strong>Derrick Showers</strong><br />
here, we actually have a language called Double font or something double width or whatever yet, but it basically just repeats the English translation twice, just in development mode. So

</p>
<p><strong>Brian Holt</strong><br />
you can see what that looks like. The other one that I struggle a lot with is Turkish, in particular Turkish because of all the diacritics diacritics in the sense of like the little hang ups or the hang ups on particular words, because those Turkish ones can get one really long. And two, if you don't put them then it's like it's a bad translation like people. I mean, me from my privileged American perspective, I would just think like, oh, well, they can see the word right and it doesn't matter they'll figure it out. Right and which is that they probably do but it but it's like it's bad translation it's it's bad for the website.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, we actually found this out when we were we added a web font like didn't

</p>
<p><strong>Brian Holt</strong><br />
get locked out.

</p>
<p><strong>Derrick Showers</strong><br />
And so our library wasn't it wasn't handling the line hates facing and so with with Turkish and with Thai and stuff, it looked really weird and like no one really noticed it until, you know, there was a translator that took a look at at the language but you because they would overlap because it has all this, whatever they're called

</p>
<p><strong>Brian Holt</strong><br />
diacritics. Thank you.

</p>
<p><strong>Ryan Burgess</strong><br />
It's actually a good point is how do you support that there's so many different ways to do that is not even specifically to a web font. But when you're using any type of font, it doesn't necessarily work well, for every language, even just for sizing some fonts and mean or sorry, some languages might need a larger font size. How do you typically support that across languages? Like there's multiple ways

</p>
<p><strong>Brian Holt</strong><br />
use system fonts? That's, that's how I support No, but

</p>
<p><strong>Ryan Burgess</strong><br />
like, I feel like you can sometimes Chinese characters may need to be a bit larger than the system font that you're using the same font size,

</p>
<p><strong>Brian Holt</strong><br />
they kind of take a moderniser type approach, which is like, have like a global class that says like, Okay, this is Chinese, it's within a Chinese class, go ahead and use Chinese fonts or something like that.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I know, for us, like CSS has this very useful link selector. So like, if we detect that link selector, then we can like, like, will inject this lang attribute into the like, body or somewhere in that. And then like, I think you I think you were the one who wrote this maybe or

</p>
<p><strong>Ryan Burgess</strong><br />
think I probably added, yeah, you can then use the HTML, lang attribute, and then leverage it from CSS or JavaScript.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, yeah, I think what we do not saying this is the right way. But we just inject like different fonts, depending on the language. Like, I think like for all of our Asian fonts, we do use like a specific, like, generic system, like Asian font that works.

</p>
<p><strong>Ryan Burgess</strong><br />
That's also done server side, if I remember, right, so you're not loading all those fonts and only loading it dependent on the

</p>
<p><strong>Brian Holt</strong><br />
job. So

</p>
<p><strong>Ryan Burgess</strong><br />
I hope so. I'm like 90% sure that that's how it was done. I don't think I would have wanted to have it run all those fonts that would kill

</p>
<p><strong>Brian Holt</strong><br />
we all know that Ryan doesn't care about web performance?

</p>
<p><strong>Ryan Burgess</strong><br />
Not at all,

</p>
<p><strong>Derrick Showers</strong><br />
not one bit. That's what we do. We have we have different fonts for different languages. But we have global languages. Well, not for every language

</p>
<p><strong>Brian Holt</strong><br />
pairs. Yes.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think we package up the bundles differently based on locale.

</p>
<p><strong>Ryan Burgess</strong><br />
Does anyone ever use the pseudo class and CSS? We can actually put Lang and dependent on the language code? You can actually target specific languages?

</p>
<p><strong>Brian Holt</strong><br />
I haven't. What's the support for that?

</p>
<p><strong>Ryan Burgess</strong><br />
It's actually fairly good. I think for IE, I think it's like I eight and above, but that's enough. Yeah, it's not too bad, the supported. But I could also see that being a little bit problematic if you started using it a time like you're adding all this extra CSS for one specific language, you probably

</p>
<p><strong>Brian Holt</strong><br />
want to like, put that all in one place.

</p>
<p><strong>Augustus Yuan</strong><br />
No, I agree. Yeah. Or like what's nice in like, like, SASS, you can, like have extends, and so like, no, that's

</p>
<p><strong>Brian Holt</strong><br />
not nice. That is a bad Oh, no, no detail. I just have a particular vendetta against Sass and extends, like, trying to maintain code that has extends in it is just, it's,

</p>
<p><strong>Augustus Yuan</strong><br />
that's true. When it comes out, it becomes it becomes so atrocious. But

</p>
<p><strong>Ryan Burgess</strong><br />
the transpiled code is not nice.

</p>
<p><strong>Brian Holt</strong><br />
The transpiled code isn't nice. But like, if this extensis, which extends this, which extends like your hopping files, like seven times to find your bug, it just becomes for me, unmanageable.

</p>
<p><strong>Augustus Yuan</strong><br />
That's true. That's true. Well, so like, Well, I think what I tried to do is fix all the extends, like different files, and then like, we're just so like, at least for languages, like we're only pulling, like, those certain extents for those languages. But I guess I can see how it can still be

</p>
<p><strong>Brian Holt</strong><br />
still terrible. It's

</p>
<p><strong>Ryan Burgess</strong><br />
almost terrible ideas is like a variable at that point, right?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, exactly.

</p>
<p><strong>Derrick Showers</strong><br />
So using extends for your web fonts, this?

</p>
<p><strong>Brian Holt</strong><br />
That's like my worst nightmare.

</p>
<p><strong>Ryan Burgess</strong><br />
So if you're trying to support multiple languages, you're going to have to somehow change that in the URL? How would you typically go about that? I know, for us at Netflix, and I actually believe Evernote does the same thing is just using like in the URL, adding the language code in there, like what do you think about using something like query parameter?

</p>
<p><strong>Brian Holt</strong><br />
I think it's better to have the like, flashy and for like more or like slash, you know, z H, or whatever, for SEO purposes, because that way, the search engine can kind of differentiate like, Okay, this is a directory that I can tell everything in it is going to be in this language. And you can indicate to Google that, that that's a language selection parameter for them.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I think we do that for Facebook and Google, I believe they both have the same syntax, because SEO is important. So we follow whatever rules they dictate.

</p>
<p><strong>Brian Holt</strong><br />
We used to use a subdomain right. There was a previous Oh,

</p>
<p><strong>Augustus Yuan</strong><br />
interesting.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's it. Like you could do that. I feel like

</p>
<p><strong>Brian Holt</strong><br />
that still works like it still links to the proper language if you do it, but I

</p>
<p><strong>Ryan Burgess</strong><br />
feel like that would be more of a mess to handle having subdomain well, they

</p>
<p><strong>Brian Holt</strong><br />
view it as different websites they being the search engine Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
yeah. Yeah, actually like so it's nice that like, Google will let you specify in your Sitemap all the different languages. I think there's like a specific Lang like meta parameter or whatever. But yeah, just from like an SEO perspective, it's better to just have your main domain slash so that your main domain gets more credit for that SEO wise, rather than having all these subdomains get separate credit,

</p>
<p><strong>Brian Holt</strong><br />
I think that's the best reason.

</p>
<p><strong>Ryan Burgess</strong><br />
So we've talked a little bit about supporting more languages in your code base, anything that you've experienced or want to share that caused headaches, or any learnings from doing this.

</p>
<p><strong>Brian Holt</strong><br />
I think Augustus alluded to this earlier. But you really want to avoid writing language specific stuff as much as possible in your like in your code and your CSS, because that just becomes unmanageable, right? That you're going to get into like some weird situation that you're gonna pull in like old code that's only affecting a certain language, you have certain bugs only in certain languages, it just becomes really, really tough to bug. So as much as possible, you want to do it as like, instead of having like language specific code for Chinese and the characters need to be bigger, you want to have like a class that says like, language needs bigger characters, right? And you throw that class on there. And so that can affect multiple languages, it becomes pretty meaningful, someone looks at is like, Okay, this is Chinese and Chinese needs bigger characters, this all makes sense. I found that to be really helpful.

</p>
<p><strong>Ryan Burgess</strong><br />
So you would take more of a global approach globally? Yes.

</p>
<p><strong>Jem Young</strong><br />
I've learned, even just from listening to all of you talk, CSS is probably more important than I would have taken for granted. Just because, yeah, you might have some cool design, but it's tiny font that fits in there in English, it fits. But any language you want fits like German, or some or Chinese or something like that. Yeah, that's nice. Yeah, it's something that I think if you're going to be a global company, your designers use it. I really say that, if you're gonna be a global company, it has to be the entire team. So it's got to be localization team, your QA team, the developers, and the designers all on board like the same path. Because I would imagine, there's probably designers out there come up with a really cool design and someone's like, well, that's not gonna work in, in a left to right language, or right to left. And you need to rethink your design, like, Oh, what, and that's just the way it works. If you're going to be global,

</p>
<p><strong>Ryan Burgess</strong><br />
it does help having design on the same page as you that definitely makes a big help, like having designers being able to think through that as how's that button going to translate? What's it going to look like when the characters are like three times the size? Because there's, you know, it's a longer string, and it does help them they're thinking through that ahead of time. It's also good for engineers to push back and share that, hey, what's gonna happen when there's really long string in here? How does that span? How does that, how do you support that,

</p>
<p><strong>Derrick Showers</strong><br />
in my experience, something I found really helpful too, is inviting or making sure that somebody from the international team is there for like design reviews and handoffs or whatever, at whatever point you can get them in front of the design, because there's a lot of subtle things like one thing that came up, when I was working on revamping the settings for LinkedIn, there was a place where it was like member since and then the year, and the year was like four times as big was just like a design decision. But but the person from the international team was like, Okay, in this language that that's just doesn't work like never would do that. And so it's like, you would never really, no one would think about that unless they're unless they're looking at those kinds of things with, you know, from that perspective. So I thought that was pretty cool. But I think it's the more the more people you can get to take a look at it that have that expertise, the better.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's a good point. But

</p>
<p><strong>Brian Holt</strong><br />
I think you you touched on a really interesting point that internationalization goes beyond just changing the language, right? There are certain other things that need to be localized. And I think a really good example, that from Netflix, is when we were doing right to left languages, we just assumed that if the language was right to left that the scrubber, which is the name of the little thing that you can move back and forward and in time and your movie, we assumed that was also going to go from right to left, like that just made sense. We thought we were going to mirror our UI. And it turns out that's not the case that in right to left languages, they still expect left to right. And I find out later actually why that is from a Google engineer. He told me that's because they got the same VCRs as we did, and so that they just got used to that sort of interface. And so it was actually the VCR that that VCR Yeah, no.

</p>
<p><strong>Ryan Burgess</strong><br />
Wait, was that a real question?

</p>
<p><strong>Brian Holt</strong><br />
Or oh, wait, are you talking like an actual VCR with Betamax? I remember I had a decent price. You're not

</p>
<p><strong>Ryan Burgess</strong><br />
that. So one of the first times I actually really had to support a lot of languages actually, when I went to Evernote, and one project in particular was probably one of the most painful projects I've ever had to work on. Just because it was it was very complex. And the reason it was so complex is it was we were supporting 26 different languages. It was basically a entire redesign of the homepage on evernote.com. And the design team had come up with this really cool strategy. They had a bunch of hero images that they wanted to show people using Evernote and It was more theoretic of like what you could maybe use Evernote for, like what notes that someone may have. And so they had these four different images that they wanted to cycle through on the homepage. And it was showing notes in behind the person, like it could be an architect, it would show all the different notes they had. And these were all on a bit of a 3d plane. And they all had text in them. They wanted them all translated in 26 different languages. It wasn't something that we could do with live texts and do a CSS, it was just it was too hard to try and do. You also had to support on mobile tablet and desktop. So different breakpoints, different images. Luckily, we had a product designer who had just actually I think it was one of his first projects. And he just started at Evernote. And we had to crank these images out, we had like two weeks to build this entire page and supporting all these different languages. And so there was it ended up being because of the four different images with 26 different languages that all had this different text on it. And all the different break points, it was over 1000 images that we had generated. And so luckily, he had wrote scripts to do this all but it was it was crazy. And luckily for me, it wasn't that difficult. I was just calling the asset. I was like, as long as you name them, specifically with the language code, that's really easy for me, because then as long as he's outputting them, I'm just calling a different image, depending on that attribute. But man, was that painful. And it was really, really difficult.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, recall this. Global just because that was

</p>
<p><strong>Brian Holt</strong><br />
probably protip. If someone asks you to create as many images and includes a factorial and the amount of images that you need to create, you just tell them to fuck right off? No, it

</p>
<p><strong>Ryan Burgess</strong><br />
unfortunately, was the VP of design. Yes. It was hard to argue that

</p>
<p><strong>Brian Holt</strong><br />
I tried. I tried doesn't matter. fire me if but fuck off.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think that leads to a good point. And we've been talking about translating strings and texts on the page. What about imagery? Should we be translating imagery? And how should we go about that? I know some markets we've talked about may need different imagery for the UI. What do you think about that? Well, I

</p>
<p><strong>Brian Holt</strong><br />
think if you're not translating your images, you're probably missing out on some opportunities, right? It's like what is a appealing image and appealing interface and a certain language is not going to be appealing in another culture, another language, it's just, there's no such thing as like a global taste, right? There's probably something to do. Okay, just saying global to, like twice their chairs. Drink a lot. Yeah, you probably have some imagery and some interfaces that will do well across country borders, but you're certainly missing out on some local optimizations. That

</p>
<p><strong>Ryan Burgess</strong><br />
makes sense. And then there's also culturally, people read imagery differently as well in different countries. Yeah,

</p>
<p><strong>Jem Young</strong><br />
I mean, thing to say, several Middle East countries, there's imagery you just wouldn't want to have on your page. Whereas in say, like Europe or something, it wouldn't be offensive, but to them, it'd be it'd be extremely offensive. Oh, yeah. Not

</p>
<p><strong>Augustus Yuan</strong><br />
even like offensive, but also like, just more effective. Like I know, for China, we like treat Evernote, we have a separate entity called gene Shang, and like will change all the faces to be Chinese people instead. Because we just found that's way more effective for China.

</p>
<p><strong>Ryan Burgess</strong><br />
But I think even there, you open the door of China's a whole different ballgame. Yeah. And you're having a completely different domain, a different site. It's pretty much a different identity in China for various reasons for regulations. I know Derek, you Yeah, like do that.

</p>
<p><strong>Derrick Showers</strong><br />
The only China's the only country at LinkedIn that we localize meaning like we completely have a separate site for

</p>
<p><strong>Ryan Burgess</strong><br />
for China. But you're also the only social network in China. Yeah, I guess that's no Twitter. No, Facebook, just Microsoft

</p>
<p><strong>Brian Holt</strong><br />
cheers. Like Microsoft should be like an ongoing keyword that in any episode, if someone makes fun of Derek for him to drink to it.

</p>
<p><strong>Derrick Showers</strong><br />
Now yet,

</p>
<p><strong>Ryan Burgess</strong><br />
he's holding on to that. It's what fair early January or something? I don't know if it's official soon. Okay. In the next couple of weeks, he's still got a few weeks, how many languages your current company support?

</p>
<p><strong>Derrick Showers</strong><br />
I think at LinkedIn, we have somewhere around 2424 It's quite a bit. Yeah, I

</p>
<p><strong>Augustus Yuan</strong><br />
think you said early. I think we still have maintained 26 ish.

</p>
<p><strong>Brian Holt</strong><br />
Yeah, I think we're sub 20. Last I checked,

</p>
<p><strong>Jem Young</strong><br />
I want to say like 16 Yeah, that

</p>
<p><strong>Brian Holt</strong><br />
sounds about right.

</p>
<p><strong>Ryan Burgess</strong><br />
We talked a little bit about supporting right to left languages, something like Arabic. I'm interested to know what's everyone's experience been like supporting those languages? It's not easy. So I know I've had some issues. Do you feel worse,

</p>
<p><strong>Derrick Showers</strong><br />
right like at the end of a project, I'm like, Okay, here we bring on the RTL bugs.

</p>
<p><strong>Brian Holt</strong><br />
There's a CSS selector for RTL, I believe that you can tap into to say like this is an RTL environment. And so you can end up mirroring a lot of things. That's what we do at Netflix as much as possible. Just try and mirror dumbly everything and then just go back and fix the things that need to be unmuted or moved or something like that. And that's been mildly successful.

</p>
<p><strong>Ryan Burgess</strong><br />
Feel like you get 80 or 90% of any my experiences of just using the Changing CSS to direction, RTL, I feel like you get like 80 or 90% of it works. And then you have to go and fix certain things.

</p>
<p><strong>Brian Holt</strong><br />
Definitely like imagery is something that we always have to be aware of. Because if there's like any words in the image, obviously going to flip that. And that's not ideal.

</p>
<p><strong>Ryan Burgess</strong><br />
That's more on the designers at that point. I

</p>
<p><strong>Augustus Yuan</strong><br />
hope. So we do have some basic support for RTL. I don't think we actively update the designs of it, though, just because I think we did some for Well, for us, it was really hard finding like translators for right to left languages. And so like to meet certain like, it was just kind of like, whenever they get translated, they get translated. So making new design, making them sick with the newest designs was really difficult for us. But in terms of like supporting it, like I know, we were looking into like some test process like grunt, gulp task processes that will like go through your CSS and just like, flip everything, although I don't know how that actually,

</p>
<p><strong>Brian Holt</strong><br />
that's how horrible

</p>
<p><strong>Augustus Yuan</strong><br />
which is, which I, which is why when I looked at it, I was like, hmm, I'm not sure how well this works. But so I don't know if you guys actually have experience with that you guys just custom. Like, that's pretty pretty. That's what I imagined. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
ours is automated. But I honestly don't know what part of the stage I know, we used to use, like a JavaScript framework, which got rid of that. I think we do it at compilation, CSS, but

</p>
<p><strong>Brian Holt</strong><br />
we have like something that will strip out pieces of CSS that are for non RTL, and then leave it in for RTL.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, so at least that point, you're trying to save on some of that performance. So you're not loading it to everyone if your language doesn't need that. Don't show that to them. Because that's, that's not exactly Brian, you'd mentioned about CSS, you can actually even there's an attribute you can add to your like HTML as well. I've not really leveraged that too often, though. So I'm not sure what the like how well it works or anything. But another option?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah. And I think we just depend on that tag in the CSS first, you know, anything that needs to be overridden.

</p>
<p><strong>Ryan Burgess</strong><br />
So then you do it through the HTML first, like through the markup, and then CSS for anything that you kind of need to tweak. Yeah, and looking for that attribute tag. Nice. That's awesome. That's a good way to do it. What about open source tools, or anything that you're using to make it easier for supporting multi languages? I

</p>
<p><strong>Brian Holt</strong><br />
think we're pretty proprietary, most of stuff we wrote ourselves. Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
I know, like Yahoo came out with react by MTL, or something of the sorts, which is, which is pretty interesting, like how they like, set up like a bunch of free components for you to like, make it so that you can like just kind of plug in your own localization. And then they come with the formatting for, like certain currencies and stuff for free. But I haven't tried it out yet.

</p>
<p><strong>Brian Holt</strong><br />
There is a there's a DOM API for a lot of localization stuff for like getting dates, right for getting currencies, right. It's landed in the browser as part of the browser spec.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, nice. Yeah, cuz that's another thing is you're also having it's not just strings, you're actually supporting currency and dates, calendar, all that.

</p>
<p><strong>Jem Young</strong><br />
Yeah. As far as we have mentioned, phone numbers, phone numbers is huge. That's so difficult numbers are, like having dealt with this recently, phone numbers are such a pain to format. And you wouldn't think so. But globally, that most people don't care. It's, most people don't even bother doing it. We tried it for a while. And then we stopped because the library to like, I think it's Google lib phone number, which is a really good library, but it's huge. It's a massive library. And I think we decided not to do it. And Facebook doesn't do it either. And you'll get most

</p>
<p><strong>Derrick Showers</strong><br />
we don't do it either. We had the same problem we I actually was when I redid the when I rewrote the settings. That one for you know, phone number management of obviously was in the designs to be formatted, but they only thought of it in the US. So, you know, I spent some time looking to see how hard I think it what makes it difficult to is that it seems like at least from the research I did, it's the phone number changes based on like if you're in the country or out of the country, or if you're in the European you know, if you're in Europe, like it's like the the format and spacing changes. So it's just very complicated. It's not like one phone numbers, this format in this country all the time.

</p>
<p><strong>Jem Young</strong><br />
Okay, so it's not just us.

</p>
<p><strong>Brian Holt</strong><br />
Evernotes the same way to there's an awesome article, which I wish I could remember where it was, but it was basically like 10 wrong assumptions about phone numbers. And there's just like crazy shit about phone numbers that basically can make zero assumptions about phone numbers, like the one that stuck out into me in my mind that if you have the phone number 123 In a country, you cannot necessarily rule out that 1234 and 1235 are also valid phone numbers, right? Like there's just a bunch of crazy shit about phone numbers that you just can't provide for. So it's

</p>
<p><strong>Ryan Burgess</strong><br />
even hurt the regex to validate. Yeah, I mean, you just can't. I've also noticed that some of the sites like Weebly and Squarespace are actually starting to add Translation Translation plugins and everything into the site so that you can try and I don't know how well it works, but I thought it was interesting that you can try and support multiple languages. I know I've also seen like plugins available for static sites like Jekyll. I know Brian, you were working in Jekyll the other day. He didn't see me roll my eyes, but I did. Also there's plugins for WordPress. As Drupal I mean, there's there's a lot of various plugins and tools available depending on what you're building. I don't know how well they are. It's probably it reminds me probably something similar to the Google Translate, it might just be a somewhat of a decent solution, but not perfect.

</p>
<p><strong>Brian Holt</strong><br />
Well, if you're going to do localization, going back to don't use Google Translate. Like if you're gonna do translations, like make sure you hire someone to translate for you, or if you're not doing it yourself, and you know, the language.

</p>
<p><strong>Jem Young</strong><br />
Yeah. And they also, at least on our team, they also do QA on the language say, Okay, this actually works, because you definitely need that you had to supply me translate, and then not look at it again, because that is a recipe for disaster. Someone in another country be like, Who are these guys? Like, screw them? They can't even bother double check this.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think also, that's with testing, I think that's a really good reason to have like automated layout tests, if possible, because we do a manual QA, like when we first launched something in a different language, or a new product or something like that. But then yeah, every time you change something, it's, it's not very, it's not very easy to check that in, in every single language all the time. So some sort of layout testings super helpful. I know, we've run into situations where we didn't have that and had all kinds of layout issues.

</p>
<p><strong>Ryan Burgess</strong><br />
And at Netflix, we even have automated screenshots. Yeah, the UI, which is very, very beneficial for people who are working on that localization team is that they don't necessarily have to try and go and change all their browser settings and do all that every single time is they could pick a page or a flow and see it throughout as like this language. I want to see all the different screens, and it will automate that. And they can actually see it. So they don't actually have to load up the browser or environment, every different language.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, we have that too. We actually started something new, where it automatically attaches the screenshots to your pull requests. So you can see, you can see the end, it'll it'll try to it's not super robust right now. But it'll try to like outline things in red that it thinks are issues.

</p>
<p><strong>Ryan Burgess</strong><br />
That's really cool. Yeah, I'm excited to hear more about that. I think that's actually really cool. And so that you're actually catching it while you're coding. And she's trying to help you identify something that might not translate well. Yep. Or I guess more break the layout is probably what you're looking at. We also talked about open source tools and everything that are available. I always thought it was interesting. And Augustus, I don't know if you still do this at Evernote, but they used to use an open source tool called poodle. It's a translation software that's open to public. So other people can actually translate your strings for your UI. Oh, yeah. So it's like open source. It's like sourcing, you're crowdsourcing the translation. Reddit did that too. That's interesting. Yeah, that's it's really cool. I I was blown away. I'm like, that's actually not a bad idea. I'm sure there's sometimes limitations where some of the translations aren't perfect. But yeah, that's still really nice is that you could open source that and have someone actually translating those strings, and then they come back.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, it's interesting, because I think we tried to gamify it. So like you do have like a translation score and stuff. And then I think certain privileged users who like have made tons of translations get like the privilege to like accept recommendations. So when you start off, you can only make recommendations for translations and then has to have someone approved them, and stuff. So it's pretty interesting.

</p>
<p><strong>Brian Holt</strong><br />
I remember something that we did at Reddit, which was pretty fun. We're using our localization ability that we had from localizing Reddit the first time into another language for Talk Like a Pirate Day, we localize the website into pod pirate right home.

</p>
<p><strong>Ryan Burgess</strong><br />
That's amazing. So

</p>
<p><strong>Brian Holt</strong><br />
now every toxic Pirate Day, which I believe in September, if I remember correctly, Reddit is in pirate. That's so cool. And so it's it's a language, it's a language, and you can actually go switch your your reading experience right now to pirate it's available.

</p>
<p><strong>Ryan Burgess</strong><br />
That's actually pretty cool. So it's building that infrastructure to allowed you to actually do those types of things. Yeah,

</p>
<p><strong>Brian Holt</strong><br />
that was fun about Reddit as we did stupid shit like that all the time.

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's cool. Yeah,

</p>
<p><strong>Jem Young</strong><br />
we haven't talked about yet. But what about the issue of programming in a different language like programming JavaScript? Most probably languages are very English, like centric. So I mean, I honestly have no experience. But what's that like programming like JavaScript in Japanese or

</p>
<p><strong>Derrick Showers</strong><br />
something, I was just talking to a co worker about this, because he's from Austria, and definitely his primary language is German but and the reason that came up is because the content but the content library thing I was talking about. So the product I worked on is is essentially like a video learning platform. And it's interesting, because the I was watching you just happen to watch the angular course. And the whole all the slides and like all the code on the screen are all English, obviously. Right? But the thing is in German, and then subtitles are in German. So it's like, it's very mismatched. It's interesting, too, but I was asking about about his code is written in English. It's just I guess it's just something you're used to. And it's just very common. You don't even he was kind of surprised by the question. You didn't even think about it. But for us, it seems weird, I think. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
Do you expect that the language is written completely in the person's language?

</p>
<p><strong>Jem Young</strong><br />
Well, so you have like a for loop for something basic and a break like break in English. Sure him Like you break but another language that may not make any sense. So what are what that's like we

</p>
<p><strong>Ryan Burgess</strong><br />
should have the word function. Oh, yeah, yeah, that's it doesn't matter. There's so many things there that are actually English words

</p>
<p><strong>Derrick Showers</strong><br />
even your even like variable names and stuff like that are all English. Yeah, you know, assume especially especially if you're like in with the language like Japanese or Chinese, you're not putting Japanese

</p>
<p><strong>Ryan Burgess</strong><br />
characters as a variable, which I believe would be supported

</p>
<p><strong>Brian Holt</strong><br />
only only recently, I only use emojis for my variable names,

</p>
<p><strong>Ryan Burgess</strong><br />
which you can do now. It's important. As we wrap up today's episode, let's share pics that we have that we've liked and favorited for this week, let's go around the table and share pics. Derek, what do you have for us this episode?

</p>
<p><strong>Derrick Showers</strong><br />
So the first thing I have is because I was absent for the last episode and on wasted on workflows, I guess, anyway, was about workflows. But this blog, I guess, is just they go out and interview people. And like people in that are either engineers or designers or whatever. And then they just talk about their setup. It's kind of nerdy, but it's pretty cool to to read some of the read some of the stuff. And then the other thing that I have is, so I've recently been into Swift a lot. And what so swift conference a couple weeks ago, and IBM was there and presented this framework called Cateura, which is swift on the server is really, really cool. If you guys can check it out. The API is very similar to like a note to setting up a node server. It's just as easy. And it's actually according to some of the data that he had. Pretty quick. It outperformed a Java and Node in memory usage on the server. That's so yes, it's it's definitely something I want to check out more.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, what do you have?

</p>
<p><strong>Jem Young</strong><br />
My first pick is an HTC. Five, because I just got one and it's pretty, pretty freakin cool. I won't lie it is. It's very, very expensive, but I don't know, I still use it. And like my mind's blown every single time I'm playing, it's just incredible. So do you want to come over? I guess

</p>
<p><strong>Ryan Burgess</strong><br />
I was gonna say we're all coming to your house later to my jaws were kind of dropped. No one can see.

</p>
<p><strong>Jem Young</strong><br />
My second pick is the crown. It's a show on Netflix is one of our probably more production heavy shows. And it seems pretty boring. It's like oh, a period drama about Queen Elizabeth blah, blah. But it's actually really good. It just I started watching attentively like, British show. What are we gonna do with this? And it just like sucked me in? So especially my

</p>
<p><strong>Derrick Showers</strong><br />
wife watches it. Like any time I'm not around, or like if I want to watch it, but

</p>
<p><strong>Jem Young</strong><br />
I just watched one episode I've

</p>
<p><strong>Ryan Burgess</strong><br />
heard it's super good. I've only watched the first episode. But I've heard it's really good. I guess this what do you have? Yeah,

</p>
<p><strong>Augustus Yuan</strong><br />
sure. So my first pick is search.io. So this is actually the continuous localization, open source library that we use. We open sourced it and our localization team wrote it. And they have some talks on it from localization conferences, but this is like the thing that powers like our ultimate robot. So like, scan our repository for strings. And then like, you can actually customize like plugins to like, make it smart, and figure out what are considered strings and what isn't. So that one's pretty cool. Also, like Elton N, LT o Elton n is localization. Actually, I didn't know this. But it's like L then there's 10 letters. And then and just like how i 18 n

</p>
<p><strong>Ryan Burgess</strong><br />
a one one why? Oh, yeah. The fact of

</p>
<p><strong>Augustus Yuan</strong><br />
the day. My second pick is this thing called neural machine, which is an MIT like project where they're trying to like, make algorithms for smart cars. They'll give you like pictures of like, if if a car had to crash into someone say there might be a baby, there might be like a dog, which should you choose? And you like help the car choose? And this

</p>
<p><strong>Brian Holt</strong><br />
is the dog.

</p>
<p><strong>Derrick Showers</strong><br />
Wait, is this kind of like that what you're talking about before with languages like it's crowd sourced and people decide? Yes, yes,

</p>
<p><strong>Augustus Yuan</strong><br />
exactly. Well, so I think moral machine is like train like you're providing the machine learning training for like smart cars to like, choose like if it came across that situation, who should crash into?

</p>
<p><strong>Brian Holt</strong><br />
So if it's Hitler, or like a choir of angels? Which one do you choose?

</p>
<p><strong>Augustus Yuan</strong><br />
Well, it gave me a situation where there's a lady Sterling a baby, and then these guys robbing.

</p>
<p><strong>Jem Young</strong><br />
I chose the bank robbers.

</p>
<p><strong>Brian Holt</strong><br />
That lady stole that baby.

</p>
<p><strong>Ryan Burgess</strong><br />
You don't know.

</p>
<p><strong>Augustus Yuan</strong><br />
I'm one of the robbers and the smart cars my getaway vehicle.

</p>
<p><strong>Derrick Showers</strong><br />
There's so many follow up questions.

</p>
<p><strong>Ryan Burgess</strong><br />
Brian, what do you have for us?

</p>
<p><strong>Brian Holt</strong><br />
My first one is to support a newspaper or some sort of news source. I used to work for a newspaper that was my first job. And like throwing newspapers at people's doors or no like I was a web developer for Jesus. Now I was I was a web developer on a newspaper in Salt Lake. And I saw what it was like to like these journalists having to make like click Beatty stupid articles because that's how we got pageviews and that's how we got out And that's how that's what paid my salary. Right. So I think the more that we pay for our journalism, the better kind of news we're gonna get, we're gonna get. I chose the I did both this SF Chronicle and the Washington Post. And I've been, particularly with the Washington Post super happy with it. My second pick his quick drop off with Google, which is super fun. It's like Pictionary with machine learning. So you start drawing something, and the algorithm tries to guess what you're drawing. And it is wildly entertaining, because it's usually pretty good and it gets your drawings way faster than you think it should.

</p>
<p><strong>Jem Young</strong><br />
Some of them were really hard, though they're insultingly hard. The one I got that I remember was camouflage. Like, how am I gonna draw camouflage that that's

</p>
<p><strong>Augustus Yuan</strong><br />
really tough to seconds,

</p>
<p><strong>Brian Holt</strong><br />
you only have 20 seconds or it's up and then there's like six rounds. It's pretty fun. So I recommend that

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so for my picks I have music pick and a documentary series. So the documentary series series is called Oliver Stones Untold History of the United States. I thought it's very timely because we just went through the presidential election this documentary, it's a series of episodes for so it's like a TV series, but talking about the alternative take on American history, I thought was really interesting. I've actually only seen the first episode but I am working my way through it. It's it's really interesting so far. It is available on Netflix. So check that one out. And then for music it's not a brand new album, but listened to the other day while programming thought it was a really good pick was purity ring. The another eternity. Really good album Love programming, too. It's just nice and chill to listen to.

</p>
<p><strong>Brian Holt</strong><br />
It's one of my favorites.

</p>
<p><strong>Ryan Burgess</strong><br />
It's such a good album, so I think it's only it's like a year or two old but I was like I got to pick it.

</p>
<p><strong>Brian Holt</strong><br />
They're coming to San Francisco. Oh, nice. February 2.

</p>
<p><strong>Ryan Burgess</strong><br />
We need to get tickets to that.

</p>
<p><strong>Brian Holt</strong><br />
I'm in Dublin.

</p>
<p><strong>Ryan Burgess</strong><br />
Damn. Well, I guess I can still go Yeah,

</p>
<p><strong>Brian Holt</strong><br />
you should go.

</p>
<p><strong>Ryan Burgess</strong><br />
All right before we end the episode, where can people get in touch with you? Derek? Twitter, Derek showers.

</p>
<p><strong>Jem Young</strong><br />
Twitter at Jemmy on Twitter

</p>
<p><strong>Augustus Yuan</strong><br />
at OG Berto, Aug bu R to

</p>
<p><strong>Brian Holt</strong><br />
send me an invitation on LinkedIn. Microsoft, Microsoft, at Holt Beatty, I guess.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm <a href="https://twitter.com/burgessdryan"><a href="https://twitter.com/burgessdryan">@burgessdryan</a></a> on Twitter. Thank you all for listening to today's episode. Make sure to rate us on iTunes and Google Play. let others know what you think of our podcasts. It's definitely helps us gain more audience and letting people know if it's good or not. Follow us on Twitter at <a href="https://twitter.com/frontendhh"><a href="https://twitter.com/frontendhh">@frontendhh</a></a>

</p>
<p><strong>Brian Holt</strong><br />
global global

</p>
`;
        return transcript;
    };