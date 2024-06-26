// Episode 1 transcript
module.exports = function() {
  const transcript = `
  <p><strong>Ryan Burgess</strong><br />
  Welcome to another episode of the front end happier podcast. In this episode, we're joined by two Netflix engineers, Chevron, and Michael to talk with us about ecosystem engineering at Netflix, Travon. And Michael, can you give us a brief introduction of who you are, what you do and what your favorite happy are beverages. 
  
  </p>
  <p><strong>Michael James</strong><br />
  My name is Michael James. I've been at Netflix for nine years. This is actually my third team at Netflix. The current team I'm on is called device or liability. And so what we're tasked to do is any TV or set top box like a Roku, or cable box that you might have in your house, if something should go wrong on it. Like you can't log in, or it's crashing when there's lots of playback errors or there's a lot of startup errors or anything like That QE is bad. You can lots of rebuffering. It's our team's job to detect that remotely, figure out what broke, who broke it and get them to fix it. So half the time it's Netflix breaking stuff, because Netflix is changing all the time in the cloud and pushing new things and the UI is changing. They're doing experiments. And the other half of the time, it's either the internet, or it's the what we call partners. The Roku is the Samsung's the Comcast of the world. They've made some change, and we have to go and ask them what they changed and hopefully get them to fix it. So that's what that's what we do, and I do in a nutshell. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Awesome. And then what's your favorite happy hour beverage?
  
  </p>
  <p><strong>Michael James</strong><br />
  Right now? I am drinking Don Julio tequila. So good choice.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That is a very good choice.
  
  </p>
  <p><strong>Michael James</strong><br />
  I had to choose something very good to put me into the mood to be in a talking sort of frame. It should help we have found that actually helps just loosen you just Have a really good conversation. So far, it's working.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Shravan, how about you? 
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  So my name is Shravan Heroor. I've been at Netflix for about four years now. Right now, this is my second team. I am on partner infrastructure. And what our team does is we have a box called Ray or the reference automation environment. And this provides a lot of services and an entry point for all partners to run their Netflix test suites on so all the partners that need certification to have Netflix on their boxes, whether it be mvpd boxes, C devices, they use the raid to actually make sure that tests get run, they get results back. There are a lot of services that Do you know, DNS marking that that talking to TT and do all sorts of cool stuff. We also provide a lot of services internally to teach Across partner ecosystem, and yeah, so prior to that I was at partner engineering. So I used to work with partners directly.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Awesome. I love that you both have been on two different teams too. Yeah, that's awesome. Jem, you and I've been on the same team the entire time we've been at Netflix,
  
  </p>
  <p><strong>Jem Young</strong><br />
  or Yeah. Either we are on a good team or we don't know how to leave that. That might be it.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Yeah, exactly. Well, let's give introductions of today's panelists.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Jem young, senior software engineer at Netflix. I've only been here for four years. So maybe Michael, you can give me some tips on making another four.
  
  </p>
  <p><strong>Michael James</strong><br />
  Oh, yeah. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And I'm Ryan Burgess. I am a software engineering manager at Netflix and I've been here for just over five years. In each episode of the front end happier podcasts. We like to choose a keyword that if it's mentioned at all in the episode we will all take a drink. What did we decide? Today's keyword is 
  
  </p>
  <p><strong>All</strong><br />
  Quality
  
  </p>
  <p><strong>Jem Young</strong><br />
  I don't remember I say coffee. I think I heard quality and thought QE automatically because
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  hey, they kind of go hand in hand. So that makes sense. All right. Well, let's jump in both Sharon and Michael, you gave a little bit of descriptions early in your intros, but I'm really curious, how do you describe what is ecosystem engineering at Netflix?
  
  </p>
  <p><strong>Michael James</strong><br />
  So I've in my previous role, I was a manager also, and managers at Netflix have to do a lot of recruiting. And I'd have to answer this question a lot. Like what do you do and what is this? And I usually post it by saying Do you ever go into a store Costco someplace and you see the TVs for sale and on the box they have Netflix on them? Netflix is already pre installed on it. Or if you go buy a Roku, it's already gotten Netflix on there more if you get a Comcast box, you may or may not get it but then if it does get loaded, somehow Netflix As getting on all these devices, how does that happen? What happens is there's a team at Netflix that makes the Netflix player code. And we patch it up once a year. And we call it the SDK, a software developer, the developers kit for the player. And we may give it a name. But every year we give it out to these partners and these partners like Samsung, LG, Roku, Comcast of the world, and they have to take it and make it work on their system. And so if you look at all the TVs out there and all the set top boxes, you can see that you know, there are different chipsets, there's different hardware. They probably have different compilers and compiler settings. They've got maybe their own libraries that they have to do. They have a different OS on their TV. every device out there basically is a custom made device. And so how do you get this Netflix player, which looks pretty much the same once you see Start the app, whether it's on a Roku, or a Samsung Smart TV, or cable set top box. How is it ended up that the experience is pretty much universal, I would say. And how that happens is, there are other teams that work with these partners to make sure that a compiles and B that it's good and it doesn't crash. We have a suite of tests. And Travon helps with that, that area of the part and my previous manager job was in that area too. We don't let Netflix go out or be sold or pre installed on a device. Unless we know that device is going to have good quality with it. Oh, I said it. Cheers. Cheers. Cheers, cheers. And how that happens is these partners have to run a whole bunch of tests and they have to pass these tests and there's a a cloud based test service that Netflix has made where they can take their device, whether they're working in China, or whether they're working in Japan, or Korea, or the US or anywhere in the world, they plug it into the internet, they log into this cloud service, and they can run tests. And we can see these tests, see if they pass, see if they fail, and so on and so forth. And once they pass all these tests, then it goes out into the field. And people can buy them, or people have them in their homes, or they sign up for cable service. And they get this box and they start Netflix. And if it's working great. We can see the metrics remotely from here, because all of these boxes and TVs are sending us logs all the time. And if there's a problem, we should be able to detect that and try to get it fixed. So long story short, Netflix works with a whole bunch of other companies to get these apps working. And once it's out there, our Job's not done. We have to make sure that it keeps working. And so that's where maybe I think you alluded to like QE which maybe you could explain what the key metric is that your team's looking at? Sure. So QE is quality of experience. Cheers. Cheers.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Cheers gonna set
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  you up for that one.
  
  </p>
  <p><strong>Michael James</strong><br />
  They are metrics that deal with how the app appears to the user. So this would be things like, is the video smooth? Does it look like high bitrate, so it looks like very high quality, not just SD but also Hd 4k is it rebuffering a lot, which hopefully it's not every buffer is when you're watching in the middle of playback. And there's this kind of spinner that appears on the screen where it's trying to load and they'll say 10% 20% 75% 99% and starts playing again. It's probably because there's some interference on the network or there's a bug in the buffering on the device. We want to keep all that buffering to a minimum so that when you start watching, it's smooth. There's no interruption But it's not just limited to that, if you have trouble starting the app, or if you're in the middle of the app, and it crashes, or there's like network fluctuations where it goes, high quality to low quality too much, those are all things that could be addressed usually on the device side. And try to minimize those as much as possible, wherever possible, even things outside of the network users network or the service providers network lately. Yeah, that's another one. I forgot about that one, the time it takes for you to press the button versus how long it takes to start the actual playback. Hopefully, it's around four or five seconds, but on some devices, we see it so as long as 20 seconds or 30 seconds. That's something that could be fixed on a device. Hopefully,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I think that's always been something that I've actually been amazed at is just Michael, you painted the picture of the ecosystem of all the different TV devices, but when I think about it, too, is the Netflix app is being built for something like a Roku acoustic it's a lower power device and and then you have something like the PlayStation four or Xbox that you can also play on. It has a lot bigger processor. And I think it's just really interesting how you have there's this large ecosystem of devices that we are supporting. And so I can imagine that becomes a lot more challenging in your world to to support all those different variables across those devices. Oh,
  
  </p>
  <p><strong>Michael James</strong><br />
  yeah. And especially when you think that every one of those devices is basically a custom made device, very few devices look, or act exactly the same from the code perspective. And so it's it's a challenge to make sure that when you start Netflix whether on a $15 stick if you bought it on sale, all the way up to a $400 PlayStation, or even a $3,000 4k Smart TV, that the Netflix experience is pretty universal on all of them. You Login the same, you still have your same catalog, you still are able to see and navigate through the UI pretty much the same. It's pretty familiar, despite that range, and I think that's pretty amazing.
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  What Ryan, I think I do want to point out that the game consoles do not come under eg Good
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  point. So meaning eg would be the ecosystem engineering engineering group. Yeah,
  
  </p>
  <p><strong>Michael James</strong><br />
  yeah, they do share a lot of the same player code. Yes. And they do share the same underlying JavaScript code and the UI code. So a lot of that is the same. The main difference is, it's not made by a partner. There's a dedicated Netflix team that makes the player for PlayStation and same for Xbox. And so if there's a problem, we can go run to those teams, which is like one floor above us and say, Did you know that there's a bug and they can fix it? If there's a problem with Samsung, we have to go we usually have a engineer on site. A Netflix employee who specializes with Samsung or works a lot with a certain partner and chavon when when you were on that team, what was your partner
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  so I used to work with Cisco, I work with easy
  
  </p>
  <p><strong>Michael James</strong><br />
  so if there was a problem in the certain partners device, our first step would be to go and see if that partner engineer we call them the Netflix employee has any insight if they don't then we have to escalate to the partner themselves. So we have to either send an email or a conference call or do something maybe there's someone we know in country Netflix now have offices in Taiwan and Korea and so maybe they can take it over from us
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  I think that there is a certain kind of a chain of command there Yeah, I like most like people inside eg typically go to the partner engineer and say I know it Michael might say I'm seeing when I used to be a partner engineer, he would be like, Hey, I see in a big play delays on easy box. Right. You know, it seems like they push the new firmware on Certain name and the play delay, which is the time taken for the title to actually start playing from the time when the user presses it. It's gone like 20%, more 25% more, but then the partner engineer would actually reach back to the partner, or in certain cases we have, or at least in partner engineering, there are tears. So there's a partner engineer who works at the operator level, there is a partner engineer who works at the SOC level. So the SOC S is system on a chip or silicon on the chip, right? So people like Broadcom and amlogic, and you know, high silicon, things like that. So we have certain implementations based on these SOC S. and certain partnering partner engineers would actually work exclusively with those SOC companies. So then, you know, we consider those sort of scaling projects because they're serving more than one operator and so, you know, it will be escalated to them and they will talk to the partner so it kind of varies on the problem. And the situation
  
  </p>
  <p><strong>Michael James</strong><br />
  that was one bit of surprise when I joined this group is a lot of people when they hear Netflix, they think if I'm going to be an engineer at Netflix, I'm doing stuff in the cloud, or I'm doing stuff on the UI. Maybe I'm doing stuff on the player, but they don't realize there's a big team here that is device firmware specific, that they're actually working with system on chips. And they're trying to get Netflix to work at the hardware level, amongst the whole ecosystem, for lack of a better word of device, chipsets and everything out there. And so a lot of people are kind of surprised at like, Oh, I did not know that you work with device drivers and c++ code and things like that. Yeah. They're like, yeah, there's a team and that's what we help work with.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Is that maybe because a lot of other companies typically don't do that? Is that typically the case? I think
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  so. I think like, for example, if you take amazon prime video is more. I forget, it's completely JavaScript based. So they have a very simple In c++ layer, or they would just use Chrome based players, right? Something that they can actually port as a web browser into, into the device. And they just build on on the JavaScript layer. And I think we're kind of one of the pioneers on a lot of c++ and a lot of testing and verification on that.
  
  </p>
  <p><strong>Jem Young</strong><br />
  side. I think we've talked about this probably on a previous episode, but it's helpful to do a quick rundown of the stack it takes to play on a device because I know we have an RDP, which one should explain. And then we have different layers that like it's not as easy as because there's, there's all these different devices with all these different chips and all these different operating systems. How is it that we get a consistent experience and how we can write JavaScript against all these devices? So an RDP is Netflix ready? device, Partner Program platform, I forget what the platform
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  so in RDP is basically a bunch of c++ code and what it has is inside of it is a JavaScript engine. And so it also has something that we call a DPI, which is a device porting interface. So it's basically a set of classes that people can implement for their particular platform. And these DPI A's are what enable everything on top of reciting on top of DPI to actually work on different platforms. Right? Because all of it all it has to do is talk to the DPI it figured out, I want to open a player I want to play this audio, I want to play this video. I want to pause I want to know what the device capabilities are. I want to know if it's a set top box, what is it connected to what kind of capabilities does that TV have, etc.
  
  </p>
  <p><strong>Michael James</strong><br />
  So an example DPI is like get memory buffer. Another one might be get DRM license DRM is digital rights management management. Yep. Right. And so you need all of the Netflix streams are encrypted and you need a license to decrypt it. All that is left up to each partner, they can choose whatever DRM that they want. And they make it work inside the ntdp stub code. And the Netflix, part of the code only has to worry about things like when the user presses a button, I need to go get some metadata about a title, and then save it somewhere and then pass it on to other layers. What are these other layers? Travon?
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  Yeah, we from the bottom closes to the device back up on top right. So now we have the DPI, which is just working with the system level stuff on top of the DPI and RDP has certain libraries, certain classes that, you know, sort of expose callbacks into JavaScript. And so any JavaScript code that gets written gets actually downloaded at boot time. So when the Netflix app launches, it actually goes to one of our servers that we call Apple And the response to that will actually include a UI to download the UI from the URL to download the UI file. And so all the UI gets downloaded evald and run when Netflix starts. And that's why I think startup times are pretty, a little bit slower for our app, because it has to do all that stuff to actually get Netflix running.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So it's basically doing that from a cold start, meaning it's like the app has not been running in. So each time that it's being launched, that is exactly what's happening is really,
  
  </p>
  <p><strong>Michael James</strong><br />
  really cool. The nrdb code is also headless. There is no UI. The UI is dynamic, and it's delivered to the app over the internet, through the cloud when you start the app. And so that allows no matter what device you're on, to be delivered a UI that can be updatable from Netflix whenever they want.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Can it be customized for that device.
  
  </p>
  <p><strong>Michael James</strong><br />
  Or Yes, it is even customized per user. Because you know, Netflix is famous for doing a B testing. So you could log in. And if you're selected to an A B test, you can get a custom version of that UI. When I log in, and I don't get that, and then maybe we'll be compared against each other. And then if you get this new feature, and you end up watching a lot, and you don't quit, then that new feature may be productize to everybody else. That's what we use only the lingo and Netflix productize
  
  </p>
  <p><strong>Jem Young</strong><br />
  I find the whole space just fascinating. Like for me as a consumer on this end, I get a hotel or I get on my phone or I travel overseas, and Netflix is a consistent experience. Generally speaking, no matter what, what app or what device I'm using, but behind that and your team's job is to make sure That that's my feeling kind of like a franchise. You know, if I go into a McDonald's or subway and we in the world, I know what I'm going to do, generally speaking. Yeah. So it's the same thing. But I think No, I think your team is underappreciated like that. That's such a difficult challenge and like to do a B testing on top of that, and ensuring like QE is solid across the board. That's, that's a really challenging area you guys are in. But yeah, can I ask you do you consider yourselves hardware engineers? Or are you a software engineer? So it seems like you kind of toe the line between both
  
  </p>
  <p><strong>Michael James</strong><br />
  chavon is both I would say, Well,
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  I would still put myself a software. Okay. I will put hardware as people actually make design
  
  </p>
  <p><strong>Michael James</strong><br />
  that that's true. Like you're not
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  laying out a board or designing a chip. That's true. You're building on top of that, like you are building software that interacts with
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  that hardware, but Bart but we who, you know, push partners to wear certain hardware.
  
  So for Gartner does come to us and say, Hey, I'm evaluating a and b. And you know, one is 4k capable, but it's twice the cost versus, you know, all these choices, we kind of help them navigate. And we're like, you know, if you want the best Netflix experience, do choose this, but we understand your constraints. And you know, so we're definitely hardware aware. We're not hardware engineers.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That's awesome. Yeah, I think that's even cool, too, is that you're able to help influence what the direction is and say like, here's some of those trade offs versus just like the company scene. Here's the device. That's what it is. It's like, Hey, we're looking at these two chipsets, what's the best one? And even if it was a cost thing, they would say, okay, we've chose to go that with this route. Knowing that that's a trade off. That's that's really cool. gem I think you'd mentioned some of the challenges that the team would definitely have to deal with. And I think some of the things have already even come up which is really great. I'm curious to hear from both of you like what are some of the biggest challenges They come to mind that your team faces on a daily basis or even future that you're kind of a direction headed towards because the
  
  </p>
  <p><strong>Michael James</strong><br />
  ecosystem is so widespread and so unique. In some cases, there are times where Netflix will push a change, say it'll push a new version of the UI. And one device out there, maybe this device has half a million people on it, that device won't like it. And so we'll start getting metrics changes, or people calling in to customer service saying something is wrong, or maybe they can't log in anymore. We have to be able to know that that's happening. And then go back to these teams and say, that change that you pushed, it worked for 99% of everybody, but there's this 1% who didn't, the device didn't like it. Can you please change it? And sometimes, the teams are like no 99% is still good, right like now There's 500,000 people who can't watch Netflix right now and we got to fix it. The good news is Netflix, employees are really great. And there's a lot of tools available where you could roll back. So if there's a push made, you can roll back pretty easily. You can even they've even updated the tools where you can roll back just on a specific device model. While everyone else has the latest greatest, this one device that didn't like it can go in the version one back so that they can work again while we figure out what the problem is. So that's, that's kind of my team's bread and butter. We kind of are living in that space watching out for these corner cases that most people are okay with, but one device for whatever reason is not and it's it happens. It happens semi regularly that this will happen. And so it's both a little bit annoying, but a little Bit exciting that, oh, we found something and it's a mystery, we have to go figure it out. That's really
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  cool, though, because I think about it even from Jim and I are both working on the consumer facing UI and innovation, we're doing those AV tests. And I think about is it's really nice in that world to is that, yeah, we don't want to break the experience for 1%. Like that is actually a ton of people that are really affected. And so we can't be comfortable with that. But I also like that, you can roll back that small percentage so that we're not hurting that user experience. But we are still unable to continue innovating and working on building out what does that feature really look like? And we're able to a be tested, and then in the meantime, still be thinking about Okay, well, how do we support this? Like once we've kind of found something that really works for the majority of users? How do we start to roll that on to this particular device or small percentage that were affected? And so now we have to rethink that all together, but you also have are still able to to learn and innovate ahead of time. As well, I think that's really, really cool.
  
  </p>
  <p><strong>Michael James</strong><br />
  Yeah. And this whole rollback idea, this mechanisms in place to be able to even do roll backs in the first place. When I first joined Netflix nine years ago, that was already there. And I found that that was amazing. Because if you think, even five years ago, there were a lot of companies and tools or apps, even where you can't roll back as easily, then usually the solution is you have to uninstall and reinstall an old version or do something like that. In here, and Netflix, all the user has to do sometimes just stop the app and start it again. Or, you know, turn the TV off and turn it back on. And usually they'll get the restored version of the UI or the rolled back version if they need to. That's really amazing. I don't know if it was a happy accident. They were always planning for this strategy wise, but like nine years ago, that thing was already there. And I came from a company where that was not easily done that once you shipped hardware And there was a mistake in it, then you had to like ship them some type of update. And it was some patch installation procedure and it was painful. But at Netflix, they're like, No, no, no, no, we're in the cloud. We're just, you know, move this pointer, roll it back and press the button, and we're done. And that's amazing. And they're still doing work today to make that rollback process easier, makes my life easier. It makes
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  our lives easier, as well. We just ship something that's not good. You're not panicking, taking hours of time to roll something back. It happens fairly quickly, which is great. Any any other challenges that the two of you'd like to highlight? I think
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  for our team, there's a couple of new challenges. So our team actually comes into play. So if you think of getting Netflix on a device, I kind of think of it as three phases. The first one is integration where it's still early work and you're working with the partners trying to You know, get things rolling, there's a lot of bugs, a lot of errors, you're trying to fix them. And then the second phase is the pre cert and certification. So you're actively in certification, you're running the Netflix tests, you're you're trying to get the quality bar as high as possible. Cheers. Cheers. Cheers. And the last stage is after certification in an infield, so you've actually finished certification, you've certified your launch, people are using it in the fit. So the team that I'm on that builds the hardware, the re the reference automation environment actually, is very important over the first two phases. We do kind of use it sporadically for the third phase where we have golden devices set up which actually won tests using the ray. So right now we're working with a lot of sister teams across the arc, and we're trying to make that integration phase much, much better, much more reliable. So when partners come into certification. They're already, you know, fixed most of the issues, they spend less time in certification. So they take less of our certification engineers time. And so we're working on a lot of features for that a lot of services, a lot of infrastructure, getting operational insights on, you know, how to make the rea better how to recover from failure. So there's, there's tons of challenges around that,
  
  </p>
  <p><strong>Michael James</strong><br />
  that Reeboks that your team makes. That is amazing. So yeah, when I first joined Netflix, it was a mystery to me how these partner companies are able to test Netflix when they're in Korea, and they're not in California. And because when you run a Netflix test, it's not just a matter of playing a movie, you have to like run code on top of it to make sure that the play actually works, that it did play for 50 seconds like you wanted it to that it reported an error if there was an error that the logs are sent correctly in all these other things. If you haven't automated tests, you have to do even more. And a lot of those sometimes require that there's this code running on this device that's sitting in an office in Korea. And maybe this office is behind a firewall. How does a how do we launch the test to make it behind a firewall? And B, how does it report back so that we know that it passed or failed? How do we get logs if we need to get logs because they're all cut off from each other? And see, we only want certain tests and certain code and users to be able to go into the Netflix cloud to run tests, right? We don't want anybody off the street, be able to maybe hack it and get free Netflix, you know, running. I'm going to play this hour. I'm going to play this to our tests, which really they're, you know, fake. Watching them. movie. And so the answer is you take this ray box, you plug your TV into that box. And that sets up all this security. And you I think you have to log in with a username and password, is that correct?
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  So when we ship or a box to a partner, right, they have to activate. So, you know, there's, there's the URL they go in, they can log in, and then a whole bunch of certificates get downloaded. And that allows access to different services. You know, there's a DNS routing that takes place so that all the you know, code that runs on the device can actually talk to different services on our backhand. There's a lot of magic
  
  </p>
  <p><strong>Michael James</strong><br />
  and that device was custom made right by netflix for Netflix. So there's a little team of actually there are a couple of hardware engineers on that team. Yes, yeah.
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  I mean, after I answered, I think toller on our team is pretty much I mean, The Wizard is a hardware wizard.
  
  </p>
  <p><strong>Michael James</strong><br />
  Yeah. So yeah, Netflix usually does not make hardware, like we don't make the TVs or the set top boxes or anything like that. We don't make the app. We don't make the iPhones at the app runs on we do make the app. But there is a little small team that does make this hardware for this testing purposes,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  which is pretty impressive to like, think about. I mean, even actually, at previous companies or jobs that I've done, is anytime that you have to say even just integrating with another API, usually public API's are fairly easy to work with. But there has been times where I've had to work with a another company. So that would be like a partner, and that you're working on a codebase together where there has to be some handoff that happens and just how much work it takes to just have the handshake work properly between those two companies. takes so much back and forth a lot of meetings and then there's a lot of back and forth on testing amazing Make sure it actually works and then it doesn't and, and I think about all that and just the volume of partners that you guys are dealing with, and just creating a way to make that seamless is super impressive.
  
  </p>
  <p><strong>Michael James</strong><br />
  Yep, that's Robins team. They just say given the ship them this box, they agree to use the box, they log into the box and they can stick devices behind the box. So one of our sister teams also makes this cool hardware called the eyepatch.
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  Some of you might have seen it, what this does is it basically try automates capturing defects in playback like drop frames, glitches macroblocks right macroblocks are basically when we are you know frame is not decoded correctly and some parts of it are still you know, pixelated, it automates all of this it detects all of this and the eyepatch uses the rate to communicate and you know, send back results and responses when the test one So
  
  </p>
  <p><strong>Michael James</strong><br />
  it's not just a router hub. Yeah, I shouldn't think it's a it's a testing hub for other peripherals too. And for device automation, I think there's plans to put a powers a power supply switch on there, right. So if you plug your TV into this power box, yeah, look that into the ray, you can automatically turn off the power to the TV and turn it back on from a test case we've enabled remote viewing so members of our team can actually
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  say let's there's a partner in Sweden or London or Amsterdam, or we have one of our offices. So they have run custom cables to mimic these partner networks set up these rays and actually, to sort of capture HDMI from the partner boxes relayed back here. So we so we can actually certify these boxes. You know, things like how do how does payments work on those partners so people live caddos can verify all of this that's happening in partner networks in Amsterdam,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  which I gotta say that has helped our team out extensively we deal with sign up. So we're dealing with the payments. And that becomes a problem too. Like that just makes me think about that is like, how do we test that? And how does our teams write automation against that? You've really enabled us that way, which is super helpful. Yeah, you both have mentioned at various times, to kind of try and avoid our keyword here. But the key metrics of, you know, how, what's the best way, like how you've mentioned a little bit, but how are some ways that you monitor that? Like, what are there? are you all looking at dashboards? Are there alerts that are happening to your team? Like how do you monitor that these devices in the wild are performing the way they should be?
  
  </p>
  <p><strong>Michael James</strong><br />
  Yeah, the answer is yes. Yes. Yes. All of the above. Yes.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So it takes it takes a few things. It's not just a one little switch that happens and you're monitoring.
  
  </p>
  <p><strong>Michael James</strong><br />
  Yes. So The Netflix app has been engineered to share with us this data and gather these metrics.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So before we go into pics, I wanted to ask both you since you both been at multiple teams at Netflix, what makes you most excited about this particular team that you're working on on the ecosystem engineering team? I think this was more
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  personally motivated. When I made the switch. I think I wanted to try out a new domain. I had been a c++ engineer for a while I like partner engineering. It was fun, but then I wanted to get back into full time development. I want to do back in I want to stack and so my role right now gives me a lot of opportunity to grow in those areas. So I think it's more my personal development. That's exciting for me right now. But I think as I mentioned, we're we're doing a lot of stuff That was going to enable better integration with partners better testing event of Netflix. So it's a happy coincidence that, you know, I'm getting to grow and the team is doing amazing works
  
  </p>
  <p><strong>Michael James</strong><br />
  similar with me. My previous job was a manager of a test automation team. And so I was doing and the manager stuff, the recruiting and all of that I was doing that for about five years. And I wanted a change after those five years. And Netflix, for me, it time feels like double. So those five years actually felt like 10 years for me. I don't know if that's common at Netflix. But I in wanting that change. I was always curious what these data engineers do and how they do it. And now in this new team, I do get a taste of that. I'm doing SQL queries. I'm making Tableau dashboards. There's Python scripts to manipulate data. And that's fascinating and I had always, it was always a mystery and I I was always very curious about it. And now I get to do that on a full time everyday job. And that's really great. All the old context that I had gathered from my old job, which was doing the test automation for this certification thing that was mentioned earlier, working with all these previous iterations of Netflix partner devices. So I had seen five, six years of TVs, and set top boxes and cable boxes going through the team. And we were writing tests and making sure the automation worked for all of them. All of the knowledge and context of how that works, how this streaming works on these older devices, I was able to keep and directly use on my new team. So when I joined my new team, they were all pretty recent hires two or three years at Netflix max. And so they were familiar with the devices that came out during their tenure like devices that were two years old, but anything beyond that was a mystery to them. So I was able to bring that to the team and still use all this old context that I had.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So at the end of each episode, we like to share things that we've found interesting. We make pics of things that we want to share with our listeners. Let's go around this virtual table since we are still in quarantine and what do you have to share with our listeners? Ah, yeah,
  
  </p>
  <p><strong>Jem Young</strong><br />
  I have two picks today. The first one is one of my favorite television shows great British baking show. Fantastic show. It's about baking and British. I've talked about it every talked about it. I didn't know there's a Canadian version. So I've been watching with my wife, the great Canadian baking show. And it's like the Great British baking show. But it's Canadian. So it's just as lovely if people are just friendly. Did you say run an ad and
  
  </p>
  <p><strong>Michael James</strong><br />
  bacon
  
  </p>
  <p><strong>Jem Young</strong><br />
  Canadian show. They haven't used Canadian bacon yet. But we're early on season two. Season Three is coming out soon. It's pretty great. It's available on Netflix, Canada. available on Netflix us, but it's available outside of the US, but you probably stream it somewhere else. But it's really delightful. I'm just glad there's another season. It's really helping me helping us get through this pandemic quarantine just a nice baking show. My second pick for the segment called Valley silicon where I picked something that only exists because people have too much money. I'll ask you, both of you and I'll exclude right now throw Brian this one. Did you guys grow up with a tree house by chance? Nope.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  No, I built my own half assed one. I don't think you can call it a tree house. It literally was like probably five pieces of wood stuck together. I
  
  </p>
  <p><strong>Jem Young</strong><br />
  feel like that was my experience with treehouse too is like looking back. It was questionable. For those that don't know a treehouse is essentially like a children's Playhouse builds in or around a tree. I don't think I've actually seen that many of them. But it's like, it's part of like American mythology. They're like kids have tree houses. Anyways. The point is, they're pretty cheap. They're pretty haphazardly put together but For my pick for Valley silicon, it's a tree house. I just send a link to you guys. It's a $50,000 tree house. And at that point, I think once you move into the, I'll say four figures, five figures, four figures on a tree house. You're talking about like a real house or a car or you know something so you can get in a live not a children's play thing, but for $50,000 his company in a guitar where they are, but they will build you this themed treehouse. It is let me just read the description. It is a it is designed for Texas ranch with a design themed around African airlines crashing at the ranch carrying exotic animals, which are now on the loose. So somewhere there's some kid that just won the parental lottery that he got bored to rich, rich parents or just just living living their best life right now for this $50,000 tree house. And that's my Valley silicon pick for this week.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Are you putting this thing to the thing is huge. an
  
  Unknown Speaker  
  eyesore.
  
  </p>
  <p><strong>Jem Young</strong><br />
  It's pretty Ugly I don't know where you get it and also throws it says for $50,000 shipping is not included. So you know, you also have to ship this thing to you in chats our listeners, they have been sharing our valid silicon pics with me it's just random expensive items they run across the internet. They're like I gotta share this with you and I get my pick. So I appreciate that.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Right on Michael, what about your picks? Okay,
  
  </p>
  <p><strong>Michael James</strong><br />
  I like sometimes watching weird shows on Netflix. And there was this one, because I like things from about Japan. And there's this one short, episodic series called Giri, Haji. Oh, I love
  
  </p>
  <p><strong>Jem Young</strong><br />
  Oh, man. That was my pick was I was amazed. 
  
  </p>
  <p><strong>Michael James</strong><br />
  Was it? Oh,
  
  </p>
  <p><strong>Jem Young</strong><br />
  yes. Go. Go ahead. Go ahead.
  
  </p>
  <p><strong>Michael James</strong><br />
  Gary Haji is a joint British Japanese production into kind of murders thriller, police action there. It has a lot of familiar actors, but it is great. If you have a chance to watch it's just eight episodes. One season, but I watched that and it was great. I had well I had traveled to Japan last year for the first time ever, and seeing that show just like made me want to go back. And I recommend that a lot so but you already recommended the last week so here's a here's a plus one two that
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  all three of you are saying how great it is. So I think more people need to watch it.
  
  </p>
  <p><strong>Jem Young</strong><br />
  It did not get enough credit for like such a brilliant show. And the cinematography is great. The storyline is great. It's everything about it. It's great the music, and like it just kind of flew under the radar. So it's good to hear more people have also
  
  </p>
  <p><strong>Michael James</strong><br />
  seen it so it's spelled g IRI Giri, H AJI Hogy.
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  So it wasn't an amazing how sort of diverse the characters were. Yeah, right. Like, I mean effortless it It wasn't forced or it was this is a really good show.
  
  </p>
  <p><strong>Michael James</strong><br />
  I agree that my second pick is so I'm showing my Netflix age when I first Joined Netflix back then everyone was given a free Netflix DVD account. So you could get nine discs out at a time through the mail DVD rental. And then two years later, three years later, they said, it's not free anymore, you have to pay for it. And so a lot of people quit. But I kept it. And you know, I've kept it all these years and I have one disk out at a time. And I still use it and I still like it a lot. It almost it has almost every movie that you can think of. Because Netflix, you know doesn't have everything. HBO will come and get stuff Showtime, we'll come and get stuff. And so there's exclusive titles all around and you can't get 100% of anything on any single service. But you can get almost anything you want on this Netflix DVD. So if you are missing a certain title that you can't, that you missed in the movie theater, and you can't find anywhere online or maybe even Something old that maybe you want to watch again, chances are Netflix DVD has it. And it's it's cheap. It's still like $1 a month for one disc at a time. You go online and you put this in a online queue, and they send it to you in the mail. And then you send it back in a posted paid envelope and then they send you the next one. So I have it down so I can get like two a week. So usually watch it on Tuesday but in the mail on Wednesday, because the next one on Saturday, watch it but in mail and then the next one comes I recommend that if you're a movie buff for you know, just general fan of anything on the screen. Awesome.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Travon, what do you have?
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  I think my pick for right now just because I'm watching it is the last Kingdom season for a really good show. Who trait of battenburg great character, and I hope it gets renewed for Season Five. It's amazing. Second pick is a podcast called Tiger belly. It's by a Canadian called Bobby Lee. And it's just so funny. I mean, it always puts a smile on my face. It's hilarious. He's
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  pretty funny. I haven't heard the podcast but I think I can imagine it'd be pretty good. Yeah, awesome and I have two picks or today, I've been using a monitor lately a lot more than I ever have. Usually at work. I don't use a monitor but being stuck at home. So I've been using the old Apple Thunderbolt display so it's not my pick. I do like the monitor. It's got the built in webcam, which is really helpful. But I moved it to try and change my scene the other day and smash the glass. So that sucked. And you know, it's not hard, it's not easy to get things while we're all in quarantine, but I was able to, I found out like replacing the glass on these monitors is very easy. $60 on Amazon, I got a replacement class and it is just magnetic holding this glass together. So really easy to replace. I feel so much better. I don't see any cracks. In my eyes, it's great. And then on the theme of fixing things I have found one of the most handy things I've had in the last while is gorilla super glue gel. I've been using it a lot on my kids toys, he keeps breaking like little things. And then he's like, Daddy, fix it. And this glue, you can just put it on, give it like 510 minutes, and it seems to fix a lot of the things that he's handing me. So I've been finding that very, very useful. All right, before we end the episode, I also want to thank both of you for joining us. Thank you both for giving us some great insights into ecosystem engineering group. And before we go, where can people get in touch with you? I don't have a
  
  </p>
  <p><strong>Michael James</strong><br />
  Twitter.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That's okay. Twitter, LinkedIn, email, whatever, you know, phone number, your address.
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  Social Security.
  
  </p>
  <p><strong>Michael James</strong><br />
  Yeah.
  
  For me, probably the best is LinkedIn. If you search Michael James Netflix, you'll probably hit me. I don't think there's another Michael James Netflix. So that's the best way Travon,
  
  </p>
  <p><strong>Shravan Heroor</strong><br />
  thanks for Thanks for having us, Ryan. So you can look me up on Twitter at Rob and heroin. So it's sh R a VNHER or, or search it on LinkedIn. I'm not always on LinkedIn but sure right on. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Well thank you all for listening today's episode you can find front end happy hour on twitter at @frontendhh. You can find us at front end Happy hour.com and you can listen to us on pretty much whatever you like to listen to podcasts on so make sure to subscribe. Any last words? 
  
  </p>
  <p><strong>Michael James</strong><br />
  hopefully this all ends soon I didn't realize that I take things like go into the office for granted but I actually do but if not, I'm still happy that I'm get to spend more time at home good positive message.
  </p>
  
  `;
  return transcript;
};