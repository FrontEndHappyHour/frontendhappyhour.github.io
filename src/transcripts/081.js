// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
  
<p><strong>Tyler Childs</strong><br />
  Welcome to a brand new episode of the front end happier podcast. In this episode, we are joined by Tyler Childs to talk with us about CSS. Tyler, you want to give us a brief introduction of who you are, what you do. And what your favorite happier beverages? 
  
  Yeah, absolutely. So I'm Tyler childs. I am a UI engineer currently working at Netflix with Ryan and Jem and Ryan. And my favorite happy hour beverage is a little bit of scotch. I like drinking Lacroix. For the most part, good choice. We should have been actually drinking scotch instead of beer right now.
  
  Probably that would be a good idea, but there's good ideas.
  
  Yeah, fear is always good. All right, well, Tyler kind introduce our panelists, but sorry, you want to get nuts. Okay. Jem, you want to give a brief introduction?
  
  </p>
<p><strong>Jem Young</strong><br />
  Jem young senior software engineer at Netflix.
  
  </p>
<p><strong>Ryan Anklam</strong><br />
  I'm Ryan anklam, a software engineer here at Netflix coming back to the show.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Yeah, it's been a while. Glad to have you back. And I'm Ryan Burgess. I'm a software engineering manager at you guessed it Netflix. In each episode of the front end happier podcasts. We love to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is selectors selector selector. I'm sure selector will not come up in the episode about CSS. We'll see. All right, let's jump in. I figured one thing I wanted to talk about was learning more about the latest versions of CSS and like, what features are you all excited about? or using today? Yeah, I'll jump in and start with that one. I think for me, one of the things that I'm most excited about would be CSS custom properties, aka CSS variables, and whatever. We like about those is the fact that they happen at runtime. So you can kind of change the variables on the fly. So when your specificity changes the variables can change to that is pretty badass, actually. I mean, CSS is needed variables for forever. That's why we had CSS preprocessors. There was a lot of additional features that, but just the fact that you could have a variable was huge. Yeah, that was a game changer. Yeah, that really was at first when I first started using a CSS preprocessor. I was like, Hey, this is cool. But then you start using it, you're like, yeah, just having a variable can save your ass a whole lot. Yeah. And to go further for that. One of the things for CSS variables is you can kind of clean up and organize your code a lot more because you can kind of treat your rulesets as functions so you can have all of your things, all of your different selectors. Cheers, cheers. So you can have all of your different rule sets set up to inherit those different variables, and then you can change them, depending on your different state. And then those will all get applied there. So your CSS can be a lot cleaner with just vanilla CSS. Very nice. I'll tell you one that I was, well, I'm excited about variables in general, but there is actually I want to avoid the keyword here. But I'm excited there are quite a few additional new selectors that could be very valuable for you eyes. Cheers. I mean, there's things like valid invalid matches seemed pretty cool. I was trying to think of when you would do that but it was like, if you had like headings and you want it to say like a match the style on all headings, like that's a way to do it, rather than just say like h2 get this style you could use matches, I'm still not quite sure when you would use that over just same age to gets a style. I thought in range out arranger cool, just like simple validation. Read Only and write only I'm not sure when I would use that. But I feel like there's probably a use case for it.
  
  Are these different, like pseudo selectors or they are pseudo selectors.
  
  </p>
<p><strong>Jem Young</strong><br />
  Cheers. So like I'm not wild about those. I I get why they're us. But I worry in this my worry about CSS is it's overreaching. And the things that like, yeah, these are cases that need to be solved when people solve them. But like, Is it something you belong in CSS? Or like, should you just do it with a class?
  
  </p>
<p><strong>Tyler Childs</strong><br />
  So like having JavaScript apply a different class to for like a First, let's talk about valid and invalid. Invalid is a perfect example. Because we would normally do that is like just throw a class on it and control the JavaScript. That is definitely how we would do it today. Yeah, I think I haven't really used invalid or valid at all, but those would be like on like, native form elements. I'm thinking yeah. And I think one of the benefits of having CSS control that. I think there's pros and cons to both, but the native form elements are going to behave differently in different browsers. I remember, years ago, I used to always fight native styling for like, drop downs or select. It was almost impossible, almost impossible. And now you can get like some decent styling, but you don't want to really like override the default browser. Behavior cuz then you get like a lot of accessibility gains for free. So I think that can be like one pro of having CSS be able to do that. That was gonna be my big thing there too, is like one the overhead that you just don't have to deal with that anymore. But you're also Yeah, letting the native browser just do its thing. And I think Tyler's point of the accessibility is a huge one is like oftentimes we end up screen accessibility features with JavaScript overriding something that's native and default to the browser. So I think this just makes it easier. But also, I feel like you get performance gains on it, too, because you're not having to manipulate anything in JavaScript is just you're getting it by just CSS.
  
  </p>
<p><strong>Jem Young</strong><br />
  Wouldn't you have to manipulate in JavaScript anyways, know what the ranges are? I guess you're setting that HTML.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Yeah, I mean, with some of the html5 in forums, you could get some of that for free. But I guess, to that point, there's the trade off is also you probably have some rules that are not going to be native to the browser. So you're gonna have to write that in JavaScript. So you might have to do the class anyways. At that point, or add the pseudo selector.
  
  </p>
<p><strong>Jem Young</strong><br />
  Cheers, cheers. I don't know, it's still, I get you laid out a good use case. But I'm still like, I worry, it's becoming over complicated. And there's so many people who have opinions that are now like feeding their micro opinions into the CSS spec, like, Oh, we have this use case. And we're like, yeah, let's throw it in there. And then, you know, in 10 years, you have this bloated thing that Oh, you can do in CSS. Yeah, it's just this, this, this, this, this and this, rather than something clean and simple and easy to to learn. And it seems like something that's reaching a bit to most people use frameworks these days. I don't know. Many people just build like just straight up HTML CSS anymore. He really should, which was talking about previous episodes.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Do you think this maybe helps get that though, is like if you go back to the world of just doing HTML and CSS now you're, there's less reasons to maybe have to grab for JavaScript at that point.
  
  </p>
<p><strong>Jem Young</strong><br />
  That's a good point. The that's a that's an excellent point. That my counterpoint to be, you have to know about these things and see us Already, I don't know anybody knows every single aspect of CSS because it's just so big. Yes, browser nuances and all these things. So
  
  </p>
<p><strong>Tyler Childs</strong><br />
  while I might choose you, she knows a ton. And like, I do agree, like you almost need to know about all these in order to say, Yeah, I can just do this with CSS. And I think a lot of times we don't know them. And that's why I even brought up these, you know, valid invalid matches in range auto range, there's things that I'm like, well, would I use that? I'm not sure, but just knowing about them and knowing that they're there could be really powerful, too.
  
  </p>
<p><strong>Ryan Anklam</strong><br />
  Yeah. And how much of that is just engineers not taking the time to learn CSS anymore. I mean, he spent so much time learning react and JSX. But I haven't put in effort to learn CSS, like I have the new, you know, JavaScript framework or the new JavaScript stuff coming to me. So I think a lot of that can be alleviated just by taking the time to actually learn the new stuff and how to apply it.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  The idea disagree. Maybe that comes down to like a community problem of like, like react has like an entire like team of people like working on it the documentation and getting like can be Buying. Whereas like CSS, like there's so many different places, you can go for resources, whether it's like CSS tricks, or like MDM or whatever. But there's not like a centralized like this is the API in a very, like developer friendly way to digest. Yeah, almost having use cases to for it as well. Like there's, there's lots of resources out there, but not one clear source. Yeah, you can find a solution for your problem when you know what to search for. But there's nothing you can go is like a step by step. These are the real world practical problems you're going to run into that gets abstracted by any framework you'd use.
  
  </p>
<p><strong>Jem Young</strong><br />
  I'm excited about the the supports query. So now rather than guessing, if a browser supports something like does the browser support grid, you can say add supports grid and then write a grid. And then you say, if it doesn't support grid do this, which is much better than the alternative, which is like if it doesn't support it. It'll do whatever it thinks is best. And it's your job as an engineer to figure out what rules is going to apply in every browser. There is a hassle.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  No, I think I think that's huge. Now you have a fallback experience that you can control a lot easier. Exactly. Yeah. I agree, I think because before you just have to, like, do this, like weird, you know that the browser is going to ignore CSS declarations that it doesn't understand. But it's so much more confusing to look at that versus like all of your
  
  support logic is encapsulated separately.
  
  That's really cool. One thing I did see, which honestly is not going to affect me in any way, there's now proper, like email styling, they're actually adding more for emails and getting trying to get more from the spec to the email clients to be supporting this more. I haven't worked in doing email templates in forever. But I always hated it so much like you're basically going back to tables, just to be able to support some of these old clients. And a lot of the CSS was not supported. You do that on a website. But no, we cannot do that on the email client. So I thought that was cool. Just to even see this old old technology starting to get some life. Breathe into it. Nice. Yeah. So one of the other things that I'm excited about is Is the revert value that you can apply to a CSS property. And you can use that to basically scope a CSS selector or a rule set. We can choose Cheers. Cheers. So you can basically scope a rule set to basically remove all of the inherited and cascading values for that rule set. So you could use the all property with revert, and that would just clear out everything that would have been applied to it previously. And then you can just go start from scratch from there. Awesome. That's actually pretty powerful. I like that. So we've talked about some of the future stuff in CSS. How has it changed since you started writing UI code? Go back to your days, which honestly, I had mentioned tables for email. I started out writing HTML when tables were a thing divs were not so it has changed drastically. But I'm interested to hear all of you
  
  </p>
<p><strong>Ryan Anklam</strong><br />
  there. When I started. I don't think we even had CSS so it was IE, three, and Netscape. Three. So yeah, we didn't even have CSS when I was started writing web apps.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  When I first started CSS existed, but I was learning off some really outdated stuff. So I started out with like the font tag and everything like that. But one of the biggest things that changed is that not every element has a clear fix on it anymore. Oh, yes. Oh, my God, I forgot all about that. It's like, that was just like, if something's not working, sir.
  
  Clear fix. You're good. Yeah.
  
  We don't use floats as much anymore. We don't need to thank goodness. Well, that took a while because of like CSS Grid being supported more in browsers. Once that was happening, that made a huge difference. And if it is being used as being used the way that it was originally intended, instead of for layouts. Yeah. We were just packing layouts with float, which is interesting in itself, would you one thing I always struggled with is the vertical alignment. That was so difficult. I don't think I ever got it right. It was always like so hacky. And it was like in some cases it didn't Quite work, you're trying to do it, it just was never an easy to do, I finally figured out a way to do it like reliably all the way down to IE seven at one point. So I made a small Russell grid framework for myself. And the way that you had to do it was for the grid row, you would set the font size to zero, all of the children would be an inline block, and you'd do the font size zero to get rid of the space in between each of them. And then you had a pseudo element that you could use to take up like this, that full element height, and then your so you could say like, you want your row to be 200 pixels, and then each of your children to be their natural height of say, like 100 pixel. Yeah, and you can just do vertical align middle and it would take care of it. That's pretty impressive. A lot of work. But I like that you have a solution. You know, it's like it shouldn't be that much work. You should have literally had a property. It's like, vertically aligned. Yes, true. Yeah, do that.
  
  And Flexbox came in and solve that.
  
  </p>
<p><strong>Jem Young</strong><br />
  Exactly. I think one thing I've seen that has not changed is CSS hacks. There's like you always need to hack. Yeah. I mean, just I'll just explain what exactly I've never met a single engineer who's not like had to hack CSS for some reason, because some browser didn't support this one feature, usually Safari, and they're weird. They're weird rules that they just apply to themselves. Yeah, that has not changed. So it doesn't matter how far CSS gets, there's probably always going to be hacks you have to do
  
  </p>
<p><strong>Tyler Childs</strong><br />
  in some ways, I kind of like that. And here's why is like, I feel like it was always an interesting thing to learn, you know, and you just felt like, like, Oh, I don't know how to fix that. And, but it didn't make a lot of logical sense. You just, it was like this tribal knowledge that you had, but it was always I know how to fix that. I've got this. I've dealt with this enough times. But in some ways, it's kind of annoying at the same respect, but I think it was interesting to figure out how to solve it. Those hacks were interesting once you figured it out. Yeah,
  
  </p>
<p><strong>Ryan Anklam</strong><br />
  yeah, I think I've ever figured out the hacks enough to actually remember them. So I've solved the same hack multiple times in my career. Like I fix this once, but I have no clue how so start from scratch. Think that's
  
  </p>
<p><strong>Tyler Childs</strong><br />
  where when CSS preprocessors were really helpful, because then you could at least write a helper function or write a mixin. That could solve that for you. And that, to me was amazing. So I would have basically a repo of mix ins that I would just call on when I needed them. And that was, that was perfect. Yeah, autoprefixer was a huge game changer. And that came around as well. Yeah, well, going back to hack, so one of the ones that I found out way too late was, uh, you could, in your CSS value for a property, you could do like backslash nine. And that would apply to IE nine or backslash eight. And that would apply to IE eight. So you could do these like really one off things that all the other browsers would ignore. So when you've had just like that one minor Quirk, you could solve it with just that instead of having to go with something too crazy. The only thing with that, I do like that that was available. But the only thing that you run into as that scales on a large project is when people start using those as a solution. It becomes very, very difficult because it's like, oh for this browser, do this. For this browser do that. And it becomes really cumbersome to read all that as an as you're coming in and looking at someone else's work. Yeah, I've
  
  </p>
<p><strong>Jem Young</strong><br />
  definitely seen messes of that. So I solution but I always say common your code that includes CSS like common your CSS, like, if there's a region you put this like one Remo margin on this thing because it like fixes some solution. Put that in the comments. So the next person coming through, doesn't like why are they doing this? What's gonna take it out, but it broke on some browser that you solved. That is something I don't see enough at scale is like people come with your CSS. It's It's not that hard. You can do it. Just like anything else.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  It's really funny though. And I think back to like us talking about like, originally starting with CSS, I think early days of CSS, I remember working on teams where we would write all in one line, like you'd write a class or all in one line, to keep it very minimized. And I mean, there's tools to do that for you now. And so like comments, you were like, Oh, that's added bloat and people that avoid that, but That is not a concern. Now we have tools that will minimize and rip out comments and keep your CSS really clean on the production side code. So but I do remember trying to avoid that just for some weird performance issue, which probably wasn't even that big of a gain. I think it'd be pretty minor. I'm pretty sure when you're dealing with like, like 56 k modems, that could have been a big deal. We just don't have to think about that anymore. Yeah. Yeah, we definitely don't have to worry about it. And also, there's tooling that can just help say, Oh, yeah, save your bloat on that side totally. Or we kind of talked about some of these hacks as they scale or, you know, writing comments into scalable code. But I honestly don't know if I've ever worked at a company that does a good job of writing scalable CSS. JavaScript usually has done fairly well what most companies are thinking about more even to Ryan's comment is like we put more of a priority on JavaScript, but like, sometimes CSS you walk into a company and you're like, what's going on? How do we write better CSS? For large applications, yeah, I think that one, it's it's really hard to retrofit a good CSS solution. It's much easier to start from the beginning with some sort of like style guide or design system or pattern library or whatever you want to call it. But I think once you if you can start off with that, like base square, and then you can actually keep up with it, but it's about getting like buying from everybody working on the project to maintain that, I think, yeah, and even get getting the buy in is helpful long term. But if you come into a mess of code, even if it's a mess, is have a plan to go back. Because if you just start trying to retrofit something that never not everyone's agreed on that. That doesn't work. Yeah,
  
  absolutely.
  
  </p>
<p><strong>Ryan Anklam</strong><br />
  I think it'd be an interesting thing if you're interviewing at a company to ask the person that's interviewing you to see their CSS or just as cuz your CSS here and just look at their face and watch what
  
  </p>
<p><strong>Tyler Childs</strong><br />
  do you say you know what you're getting into a little
  
  </p>
<p><strong>Jem Young</strong><br />
  bit more? Exactly. No, you see talks where people talk about like, Oh, we didn't fit into the style guide or design spec or whatever. But in reality It's like maybe one team out of the entire company. And it's never good. What what I've seen increasingly is that we talked about it briefly on the show is the rise of maybe the UX engineer, who is a master of like CSS and accessibility and HTML specs, or versus more of a JavaScript engineer who builds UI and expert frameworks, things like that. I'm increasingly thinking like, there's no way to be an expert at both. It's just, they're just too large spheres to be good. And increasingly, it's like, we're good at JavaScript. Great. And then we hack our way through CSS, because we have to and like CSS will just work. And generally, unless you're just doing a really, really, really bad, it's not gonna be a major performance. It you do get scalability issues when you try to extend it, but in general, it's like, you could write a lot of bad selectors and things like that, but it'll still work. Cheers. Cheers. I think for me thinking about one of the biggest problems that you face in CSS is very Adding, like font sizes and line heights, and I feel like those are some of the properties that people battle with the most. And I think those are because they're inherited, it's harder to know exactly where all of those spaces are coming from, if you're not super familiar with, like CSS and the type biography,
  
  </p>
<p><strong>Tyler Childs</strong><br />
  side, and I feel like that's where a lot of the really complex solutions come from, where you're always constantly overriding what's getting passed down? Yeah, I think even from that point to is also getting alignment from design, that's a big thing, too, is if you can keep that consistency, and then your, you can set it once and we're like, we've all agreed on this. That's what we're going to use. And we're not gonna have to keep, like overriding this through every component or every little feature that we're writing. It's it's set globally and on the left, and then design is usually happy because it's consistent. Yeah. One of the things you can use is more of a concept is like vertical rhythm or the concept of like a baseline grid. And if you can get that sort of alignment from design, then all of the actual like, components and stuff on the page are going to look a lot more visually appealing where you don't have to do all those minor little like one off tweaks to. Yeah, that's helpful. I also find I don't know, Tyler, I think you and I've talked about this in the past, there's a lot of CSS approaches, or they're not frameworks, but they're more like patterns that kind of help scale and write your CSS. One that I've honestly been a fan of and use quite a few times in larger applications is smacks it, to me has been a great one for writing more modular code, and really forcing you to think about how CSS is run and like, what are you overriding and just really structuring your CSS. And I think if you can get people taking that type of approach, like on the team, and all following that standard, it can really help keep your CSS really light and easier to manage. It ends up being probably more files because just the file structures there. But there again, build processes can deal with that. You don't really have to worry about that as much on the engineering aspect. Yeah, I haven't used Snacks personally, but I think I have used a lot of them, the and they both kind of have their pros and cons. I think with snacks, that one you have like all of your theme inside of a separate file or separate set of files. And that to me was always like the weird trade off because you'd have to have two rulesets basically, two for the same element to get what you need done kind of done. Yeah, I always treated the theme as like a almost like an override where it was like the last thing that was called so it was like, hopefully the modular or thing you know, ahead of that was the style that you should be using. And then yeah, theme was kind of like, Alright, I'm overriding it a bit. So I tried to typically avoid the theme if I was doing that. Nice.
  
  </p>
<p><strong>Jem Young</strong><br />
  I'm glad to see the rise of component based CSS where the component is tied to the CSS that just talks to that component, vice versa and like, that's much cleaner. It's funny. css Salama ketchup. Where's JavaScript? We've learned that modules are the way to go. like everything's isolated in their own little bucket versus CSS, which is like, I can touch something that can affect everything else. But the facts like you can. It's kind of the equivalent of back in the day. Remember, we used to put everything on the window object because you're like, I need to pass this from here. What's the best way to do it? Put on the window? It's good. Yeah, just Thanks. No issues there. And then eventually we learn that's probably a bad idea. And like let's componentize things let's not use Global's but CSS still, like has that concept of it's essentially it's a global unless you really, really, really, really specific and so like moving the component CSS and things like that, I think are positive for like, we're moving in the same direction. Finally.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Yeah, I mean, I think with CSS you do still have like the concept of like Global's with JavaScript, you still have like the window. But I think it has a lot to do with like how you're kind of like writing and organizing your CSS. I agree that it's a huge benefit to be able to co locate like your JavaScript, your CSS and your HTML with like JSX or like, just CSS and j. s type stuff. But I feel like that could be like a band aid to the overall solution. Because it's like going back to like, the CSS Zen Garden days, like where you can just have this one document that you can use CSS to style the entire thing. Where if you were trying to imagine a modern architecture of CSS Zen Garden, it'd be a lot more complicated to try and achieve the same effects to CSS Zen Garden still exists. It does. That's really cool. Yeah, I remember that. I'd be interested. Jem, you kind of mentioned progressive enhancement. How do you deal with that and CSS? So you got I think two things. One, like Jem mentioned with ADD supports is a way to do it. And then to going with if you're working with like much older browsers, you can have like CSS declarations that the older browsers understand. And then CSS, the newer browsers understands that the older browsers really ignore those newer declarations to this one way.
  
  </p>
<p><strong>Jem Young</strong><br />
  I think in those cases, better To use JavaScript to isolate your browser dependency. So you have your IE nine and those CSS in a completely separate file unless you like, blow it up your CSS, which is really, really, really easy to do.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Absolutely. And because you can still use the conditional tags for IE, I think down to what I 10 there's like those conditional comments that you can throw in and you could load it you can go even lower I thought, or you can go even lower, but I think I think they stopped at either iE 10 or 11. I can't remember which one I know for a fact it is you're saying so the upper bound but you could Yeah, you could go down to like, that was around forever. Like I five like everybody's HTML document started with the same like five comments declaring their HTML tag with their IE classes on them. A big thing with CSS has been building responsive websites. And I think, to me, I remember first starting out building a mobile site. It was treated as a separate site, like you'd write different HTML, you'd write it would be the dot m domain or it would be, there was a couple different options but basically redirects to another site. I mean, that's an area that CSS was super powerful when we first introduced responsive websites. Yeah, I think for me, like responsive web design and the concepts that Ethan Marco, like put into play, really changed the way that I thought about writing CSS to where I basically have like two paradigms of how I look at any CSS now where I have layout, which would be setting up like my columns, my grids, like whatever I'm going to do. And then any modules that I'm writing, and for the modules, I'm just always anticipating them to be 100% with like mobile first, and then you can throw them in on desktop into any of the other containers. But those are kind of like the two paradigms that I have, like, am I writing a layout right now? Or am I writing a module and thinking about those two things kind of separately? That's typically how I've approached it. I think it was the responsive mobile first aspect that made me just start to think like that I love the modular approach to is that you're not Trying to keep the the sizing inside that module. It's the container or layout that really decides on how big or small it is. And I think to me that's super powerful and keeps your components very isolated and allows you to be more modular with your code. Absolutely. Yeah, that definitely changed my perspective. I'm sure if I look back on really old CSS, it was like, you know, very fixed widths and heights. And that's the way it was.
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah, well, relative styling is, it's like so much easier to reason about when you're like, off the screens, this side is gonna be the size because it's a percentage of that rather than fixed width with, especially the increase of browsers everywhere browsers in your car. People, fish, people here have the ultra widescreen monitors. And you just don't know what screen size someone's going to be on. So it's better to build a relative size rather than like, Oh, we looked at the top three screen sizes. And so we're going to build against these, which a lot of people still do. And that's just the wrong approach to take. Yeah, I struggle
  
  </p>
<p><strong>Tyler Childs</strong><br />
  with that. Yeah, it's like Why not? Just Make it very responsive. And then you don't have to worry about every little device that why shouldn't your user even if it is to users that are using your site, why shouldn't they have a good experience? Why are you just optimizing for the higher percentage? Yeah, when I'm working on something, I always go down to 320 pixels, because that's where I think iPhone. Yeah. And yeah, bad, but I think I'm probably missing out on those, uh, Apple Watch users. How can you browse? I was like, I don't know how much the browsing experience on the Apple watches. And that would be your 20 pixels. Maybe that would be a little difficult. But hey, maybe now Tyler, you should be starting to go all the way down to the 20 pixel mark.
  
  If you're going to be fully responsive, it has to work.
  
  What's one piece of advice that you would give other engineers to improve their CSS
  
  </p>
<p><strong>Jem Young</strong><br />
  stop disabling zoom on mobile sites? Man, it's so annoying that is like paranoid. You're just you're imposing your that I view at this size or my phone is the size. It's like a simple thing. Just not do it. But sites still do it. I can't
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Yeah, you can't zoom in or your site's badly broken. But it's I can't zoom. It's just annoying. I think we just stopped doing that. I think for the most part, that's probably like an accident. I know, for me, when I first started getting the responsive web design, I copied the meta tag that had that in it by default. And then on every new project, I would just always copy that boilerplate, boilerplate. So it wasn't until I saw an article, so maybe this is a really good like PSA, remove that from your meta tag. Yeah, go check your boilerplate. Remember that
  
  </p>
<p><strong>Jem Young</strong><br />
  it's My only advice is around.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  I mean, to be honest, just to play on that is I don't think it's even to CSS. I think a lot of times we're overriding defaults that we shouldn't be even things like the zoom, copy and paste sometimes. And that's not so much a CSS thing, obviously, but people avoid allowing you to copy and paste like a credit card number. And I'm like, Man, I'm trying to give you money why you like doing it. So I think in the essence of that is like don't remove defaults or like think about why you're removing it and also what the A potential downside of removing that is to
  
  </p>
<p><strong>Jem Young</strong><br />
  another thing, and this is actually coming out is the snap. The scroll is command CSS or is out one or the other. There's some
  
  </p>
<p><strong>Tyler Childs</strong><br />
  browsers support for it, but not fully.
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah, I'm on the fence about that one, because I generally hate when they override my default scroll behavior. Like, let me scroll if I want to do your weird experience. I'll click the arrow and let JavaScript control that but I hate when people are scrolling behavior because it's just, it's just a bad experience for me.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  I don't think we should allow people to override that it's in there though. So I know I think if you think about it, like because I wouldn't use it for like a vertical scrolling type scenario. But if you think about like a carousel, where you might have some sort of controls to horizontally scroll it, you're gonna always want like that hero image with like the text on it to like snap in those positions. So it's like a no your use case type of video. But definitely like, I think it's a bad pattern for actually fully scrolling the page for advice that I'd like to give my think knowing which properties are inherited versus which ones aren't inherited, will save you like a lot of headaches like font size and line height being ones that inherit borders being ones that don't. And some of them aren't always super clear, because there's so many different properties that you can use. And then to follow up on that, your line height and your font size, don't inherit to your form controls. So set those to inherit manually, and you'll save yourself a lot of headaches. One thing I wish developers
  
  </p>
<p><strong>Jem Young</strong><br />
  would know was the CSS properties that cause a repaint or reflow, if you will. So just change the height on element changing the width will cause the entire page to redraw. It's hard to know what those things are. Just like get computer style in JavaScript is an expensive operation, because that's the real these things and like developers have to know these things by the back of their hand at this point. So you're not causing like constant repaints.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Yeah, to piggyback on that, there's also ways that you can trigger hardware acceleration with your CSS by mostly with like 3d animation. So if you're doing it on like, smaller elements and smaller, like content is not that expensive. But if you're doing it on a very like large page that can be very expensive on the browser. So I got
  
  </p>
<p><strong>Jem Young</strong><br />
  one for you Tyler CSS expert, like, at what point should someone consider a different animation style? So we talked in this episode about like, these SVG animations, their CSS animations, there's Web GL, like, at what point do you know which which one you should be using? Um,
  
  </p>
<p><strong>Tyler Childs</strong><br />
  that's a really good question. And I'm not sure if I have like a great answer for that. But if you're doing stuff with like, actual, like, Dom oriented content, I think like using CSS makes a lot of sense. But once you start getting into animating, like on canvas, then Web GL is gonna be we're gonna be doing a lot of work for that. And then you can also do like requestAnimationFrame in JavaScript. So I think for what you can't do in CSS, that's a really great solution, or two. I was working on something recently where I was using like requestAnimationFrame. And I throttled it to where I could basically match the frame rate that I had in CSS. So I could, I know CSS is optimized for a lot of like repainting, and stuff like that. Whereas JavaScript is like a little bit less optimized to like change like pixels. You can't do like an in between pixel animation. So that's what I ended up doing this for it was because I was trying to increment like one pixel at a time for each frame, and had this like, very subtle but stuttered motion to it. So I was like, let's just do this every hundred milliseconds, we can definitely handle that with requestAnimationFrame, like easily. And then I can make my CSS animation like transition duration, also 100 milliseconds, and I can get those like, in between pixel limits. So there's always trade offs. And I think it's like, trying to better understand when the right time to use it is, I don't think you can really, it is a tough question to answer is because, yeah, what is the best case? What are you trying to achieve? It probably varies on what you're trying to do.
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah, we didn't even mention the JavaScript animations is also another. There's a lot of ways to animate there. A lot.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  I typically like, try to go CSS first. I think that's always just been my default. And then lean on something like JavaScript if I need to. But I found that most of the times this if I can do it with CSS, it's probably more performant to do it with CSS. But I could be even wrong there too. I like the brought up 3d as well. Yeah, at the end of each episode, we'd like to share pics of things that we found interesting or like to share with everyone. Let's go around the table and share today's picks. Ryan, you want to start it off? Sure. So my first pick is a pair of running shoes. I don't talk about running enough on the show, really.
  
  </p>
<p><strong>Ryan Anklam</strong><br />
  But I just tried these out there. A brand called fuko. Oni oni or one one and there's this really thick soles on them and I've never ever wanted to try them before. But just for some reason I decided to give it a shot. They were on sale. So I tried a shoe called the huka speed goats. And they're for trail running shoes. And my God my first run in them was just felt like I was running on clouds. It was amazing. After a good big 12 mile run, I didn't feel like I had run 12 miles. So those are my first pick. And the second pick is the Milwaukee Bucks basketball team. I'm a huge fan of them. I've been a fan since the early 80s. And they've actually showing some promise for once and the NBA playoffs, so I got to give them a shout out. Hopefully they can get past the Celtics out of the second round and give me a reason to go back to Wisconsin and see a game jam we have.
  
  </p>
<p><strong>Jem Young</strong><br />
  I've got two picks and surprising there's no Netflix picks for once in a while. My first pick is a an article. Oh, it's kind of a long series, but it's about the a star algorithm for pathfinding, which is really fascinating. It's kind of it's the go to end game if you're ever used the game for like AI pathfinding. It's probably using a star, but it explains like what a star is why it's better than Dykstra, like all these things that make a star really powerful. And then like later, it goes into much more detail about how to write one things like that. Really, it's really cool. Even she just read the first page, like, you'll know a lot about pathfinding algorithms at that point. My second one is related. It's about writing a game loop. And I think on the outset, I was like, oh, I'll just use requestAnimationFrame. Because I know it's gonna, if I use that it's gonna run at 60 frames per second. And this blog post goes into, Yeah, that'll work until this until this and so you have to like match motion and what's on cancels and things like that. And like, they go into the complexity of writing a real game loop and requestAnimationFrame. By the end, it's so complex, you're like, wow, this is hard. And this is just to make animation smooth. But it's really fascinating.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  So my first pick is for fantasy survivor. game.com. I like watching survivor. This gives a whole extra layer of complexity to the game where and by complexity, I don't know that's not the word. That's not the right word. But it's like an extra layer. There's like a social aspect to it because you're constantly talking about who's getting voted off and you're trying to apply points and you're rooting for people that you normally wouldn't root for Because they got ended up getting drafted onto your tribe. So that's fun. I like that. If you want to join for the next season, let me know and I'll add you to our group. My next pick is for Lefroy triple wood. I've tried quite a few variations of lift Roy. And that's probably one of my favorites. I don't know enough about scotch to tell you why. But it tastes just tastes good. Good.
  
  Yeah, that's good enough.
  
  And my next three are all kind of related. They're just different graphic novels that I've enjoyed and like stuck in my mind over the past like few years. And it's also a plug for the writers because each of the writers is like really good at their craft. even outside of comics, so the first one is Marvel 1602 by Neil Gaiman, who I like a lot of his stuff. And then this is just one of his graphic novels besides Sandman. That's also really good that I recommend the next one's Batman hush by Jeph Loeb. I think that's one of the best like Batman story arcs. Just got like The different villains in it and like one cohesive story, which is really cool. And then finally the wake by Scott Snyder, and that was just,
  
  I don't wanna give too much away, but it's got some there's really good. So recommend that.
  
  All right, actually only have one pick, but it's a book I actually just read yesterday. It's the Five Dysfunctions of a team. So it's a leadership book. And it's kind of like telling the story of a Silicon Valley company that's not doing so well and how they change the CEO and the CEO comes in makes a bunch of changes with the executive team, and really talking about how important team functions are to actually the core root of a business being successful is that you can have all the money in the world, you can have the best product, but if the team isn't functioning, that's not gonna work so great. So it was a pretty quick read and I found some pretty interesting stories in it and just like made me rethink, like how even teams could function better. So I highly recommend checking that one out before we end the episode. I want to thank Tyler for joining us. Thanks so much for being a guest. Where can people get in touch with you? You can find me on Twitter at <a href="https://twitter.com/TylerChilds">@TylerChilds</a> or TylerChilds.com. Or Tyler childs on GitHub, really public. So full access to Tyler Yeah, you can find me anywhere. Right on, Jem. Where can people get in touch with you?
  
  </p>
<p><strong>Jem Young</strong><br />
  Twitter at <a href="https://twitter.com/JemYoung">@JemYoung</a> 
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Ryan. 
  
  </p>
<p><strong>Ryan Anklam</strong><br />
  I am <a href="https://twitter.com/bittersweetRyan">@bittersweetRyan</a> on Twitter.
  
  </p>
<p><strong>Tyler Childs</strong><br />
  I'm at <a href="https://twitter.com/burgessdryan">@burgessdryan</a> on Twitter. Thank you all for listening today's episode, make sure to subscribe to front end happy hour on whatever you like to listen to podcasts on. And you can follow us on Twitter at front nhh any last words? I didn't
  
  </p>
<p><strong>Jem Young</strong><br />
  know survivors still TV show?
  
  </p>
<p><strong>Tyler Childs</strong><br />
  Yeah, I think they're on season 38 right now, so I think it's gonna go crazy for season 40 no idea what they're gonna do for that something big. Something big. Maybe Tyler will be on it.
  
  I want to I want to do it. That'd be awesome. But I think season 40 is filming in July. So that's not gonna happen. They already have it all cast already. Not that I want to do it that bad. But if you have any connections, let me know.
  
  </p>
  
  `;
  return transcript;
};