// Episode 77 transcript
module.exports = function() {
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end happier podcast. In this episode, we are joined by Randall from slack to talk with us about building great user experiences. Randall. Thanks for joining us. And can you give us a brief introduction of who you are? what you do and what your favorite happier beverages?

</p>
<p><strong>Randall Koutnik</strong><br />
Oh, okay, so I'm Randall Koutnik. I am I think my title. The best title best describes me what I do at slac is technical debt broker. That's actually what's on your LinkedIn. Yeah, that is actually my LinkedIn title. And it is what I do is you know, go around and essentially, slack has grown so much so fast to the final these things that are like just lots of paintings back on say, let's let's take Got out and then put something that really needs to be there. And then we can stop putting out fires all day and have structures that don't catch on fire.

</p>
<p><strong>Ryan Burgess</strong><br />
That happens in a startup

</p>
<p><strong>Randall Koutnik</strong><br />
business startup. You know, it's never a dull moment. We'll put it that way. But favorite happier beverage. I am from upstate New York. And one thing about that is there are lots of

</p>
<p><strong>Ryan Burgess</strong><br />
apples and so I love hard ciders. Right on which it looks like you're having a cider right now.

</p>
<p><strong>Randall Koutnik</strong><br />
It's a pair of cider. So of course.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, let's also give introduction of today's panelists. Jeremy on started off.

</p>
<p><strong>Jem Young</strong><br />
Jem young senior software engineer at Netflix in my LinkedIn title is the cat man of Cali. That really true yeah, go. Oh,

</p>
<p><strong>Augustus Yuan</strong><br />
I guess the CEO and senior software engineer at Evernote, and my titles just saw software engineer, so

</p>
<p><strong>Stacy London</strong><br />
I'll change it. Maybe Stacy London senior front end engineer at Atlassian. And my LinkedIn title is incredibly boring and exactly the same.

</p>
<p><strong>Mars Jullian</strong><br />
I'm Maurice Julian. I'm a senior software engineer at Netflix if I were to give myself recruiter LinkedIn. I don't think it would be chief why no.

</p>
<p><strong>Ryan Burgess</strong><br />
Yes, please change that now.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, well, you know, whining, complaining and drinking wine all in my wheelhouse.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. I'm pretty sure that's what's on my LinkedIn. I'm needing to get more creative a thing, so

</p>
<p><strong>Jem Young</strong><br />
maybe it really doesn't matter. Like maybe I

</p>
<p><strong>Ryan Burgess</strong><br />
will let my team name my title. That's even better.

</p>
<p><strong>Mars Jullian</strong><br />
Oh, good luck with that.

</p>
<p><strong>Jem Young</strong><br />
Like the angry Canadian. Okay. It's ironic, because

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, because I'm not angry. And can you say no? All right, in each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned all in the episode, we will all take a drink. What did we decide today's keyword is empathy, empathy, empathy. I feel like we're going to be having a lot of empathetic drinks today. That is going to happen.

</p>
<p><strong>Mars Jullian</strong><br />
Cheers hear yours. All right,

</p>
<p><strong>Ryan Burgess</strong><br />
I figured a good way to just start talking about user experience. How would each Have you defined user experience,

</p>
<p><strong>Augustus Yuan</strong><br />
I would define it as intuitive. So I shouldn't even have to really think of how to use a user, a good user experience. It just should just feel very natural. Like when I come to a product, I want to be able to just say, let me try this. Oh, that worked. That was easy. And that that's how I'd find user experience, basically, like how you, anybody that uses the products that you build, and software, how they feel. And if that what kind of like, if it's positive or negative. That's all that it's all kind of encapsulated. And user experiences necessarily have to be positive, but it is like how

</p>
<p><strong>Stacy London</strong><br />
that person is feeling, thinking, seeing hearing all of the senses, related to how they interact with your site or your app. I feel

</p>
<p><strong>Ryan Burgess</strong><br />
like good user experience. I don't have to read a manual or read me I think got that is always a good bar to set is like it should just just kind of work and be really intuitive. Yeah, I

</p>
<p><strong>Mars Jullian</strong><br />
agree. It's sort of like the product doesn't get in the way of what your, what the user is trying to accomplish. If that makes any sense. You don't like Sam, like going into a bank app or something. And I have to think about how to get to my statement, I shouldn't have to think about how to get to my statement, I should be able to just open my statement when I want to open my statement. And then for me, sometimes I think the great user experiences have like a little thing on top of like, Oh, I didn't know I could do that. That makes like what I do every day, like repetitive actions so much easier. So it's, it's like another thing on top like the developers recognizing that this is repetitive and we can optimize it, not only is it easy to do it in the first place, but hopefully, we can optimize it going forward. modify what I said to I said, seeing which was sort of exclusionary, so somebody could be sightless. And still experience your you did also say experiences.

</p>
<p><strong>Ryan Burgess</strong><br />
Well, yeah, like someone who uses a screen reader. Yeah, they have a different kind of user experience, but it's still user experience. Well, and I think it's even more important to get out of their way is like, how do we make it really easy for someone to navigate and Yep,

</p>
<p><strong>Randall Koutnik</strong><br />
yeah, it's just like for a lot of what I've done is it UX of internal tooling. And it's like, there's all these other engineers around me trying to get their job done. It's like, so many times the interfaces in the way of getting the job done and like, how do I deal with this? What do I where do I get the thing? Like, like you're talking about? It's like, how do I just make everyone more efficient? They just don't even think about it. There's like, oh, there's the thing I want, I get it. And I'm on my way.

</p>
<p><strong>Jem Young</strong><br />
Mars. I like your example, because they remind me of the remember the early days of the web and flash intros and you have, like, seven minute long flash interview. I mean,

</p>
<p><strong>Ryan Burgess</strong><br />
I miss those days. Oh, it's so great. It's good, but spend so much time and money building these up. immaculate fashion shows with and then you have the skip and I feel like everyone skip to like,

</p>
<p><strong>Jem Young</strong><br />
nobody cares. Yeah. Like that wasn't a good user experience. It was a fun like experience to build but the other day, there's trying to get to like whatever they're trying to get to. So yeah, it just it you seamlessly navigate to wherever you try to get to, or you do whatever we're supposed to do.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, I think also like we I think I mentioned We've sorry, we've heard like mentioned navigation a lot. And to go back to one of Stacy's point about feeling, sort of like the feelings or the emotions that you experience through a user experience getting quite redundant. But one of the things that like we've seen, at least in one building our signup flow is that it's not just about like, how do we get our user from A to B, the ultimate goal of signing up is how do we get our users to trust us enough to give us their information. And that actually is really interesting, because in some of the examples we've used, it's about getting to the point faster, but here and I feel like it's sometimes slowing the user down to like, fully comprehend what they're like the action they're about to take, and get to trust the product and the people behind it that they're signing up for.

</p>
<p><strong>Jem Young</strong><br />
You know, I'm so proud of all of us, because we nailed user experience the first time around. But when most people think UX they think UI, but like we all talk about user experience that I was talking about UI which is really amazing for like we just like jump straight to the definition

</p>
<p><strong>Ryan Burgess</strong><br />
UI is important though like on

</p>
<p><strong>Jem Young</strong><br />
top of that. It's when you you user interface and user experience Oh,

</p>
<p><strong>Mars Jullian</strong><br />
I saw a great XKCD comment today, today and I want to pull it up because I need to read it word for word because it was great. And it goes actually one level beyond user experience, which is you, they call it ewz. Let me pull it up. I love it. It's great. It goes even further, but I'll just stick to these three. So for you, I XKCD defines it as elements of the interface that the user encounters. And then for UX, it's the user's experience of using the interface to achieve goals. So more of a focus on the experience rather than the interface. And then this is actually my personal favorite, which I would love to delve more into just in life usee the psychological roots of the user's motivation for seeking out the interaction in the first place. That's even more interesting because you're talking about like their the actual experience or they're experiencing but also going even further, like, Why are they here? I mean, Okay, that sounds more and I mean, I thought it was interesting like building empathy. With a user, for example, not just thinking about like making it a happy path, which is actually a term that we use a lot in our field, but also like, Why are they here in the first place? And how can we make that reason more enjoyable?

</p>
<p><strong>Stacy London</strong><br />
Yes, we get the users like you can get the, the task can be easily accomplishable. Or like the UI gets out of their way that maybe they don't feel good. Yeah, at the end of it.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, I've definitely my favorite phrasing for this is right as a great landing at the wrong airport. Good been at been at startups, or that was like, This is great. You know, we built this great product that no one wanted to use. And it was like no one had actually sat down with someone said, Is this something you want? And for me, that's the difference. It's like, what am I building? You know, am I building the right thing and then actually building it?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I think that's like really important, Randall, even What you got there is like thinking about how do we understand what we're building and like, Who are we building it for? What's the problem? problem that we're solving for. I think as engineers, that's the whole point is like better understanding, what am I creating? And like, what problem Am I solving? Because you're right, if you just solve a problem that no one had, then it's useless or putting in a feature that nobody uses useless. So I think there's probably ways to that we can do better at that is understand what we're building. I think you've even brought this up. Randall, I've seen in some of your talks is just even reaching out to the users or like asking people to really understand how can I make your life easier? And I know working on internal tools, that's a little bit easier to do. But I mean, even if you're working on a large product, like Netflix, like we do user testing, where we are going out and speaking with users and real world situations, and asking them questions to help us better understand like what we're creating. Are there other things like I always think talking to the user is a great way to better understand that. But are there other ways that we as engineers can make great user experiences or help make better user experiences.

</p>
<p><strong>Stacy London</strong><br />
There's one for on the accessibility front, you can do things like build empathy on your team by having like, cheers.

</p>
<p><strong>Ryan Burgess</strong><br />
I knew that word was coming,

</p>
<p><strong>Stacy London</strong><br />
like, have a day where you can only use your keyboard to navigate your own app and see if you can do it successfully without reaching for the, your mouse. And that's like a great way to like, understand what the experience is for somebody that may not be able to use a mouse or whatever.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, and and things like that, like Chrome Dev Tools, actually, you can simulate really slow internet connections and things like that. And that's a good one. I have a great really fast connection to localhost. And so everything loads perfectly the first

</p>
<p><strong>Ryan Burgess</strong><br />
time it's amazing.

</p>
<p><strong>Randall Koutnik</strong><br />
And it works on my computer. Yeah. And then and then you slow it down to something, you know, like just even like 3g, which millions, if not billions of people connect to the internet on 3g every day. It's like oh, Whoops, should optimize that a bit more, seven megabyte bundle might be too big.

</p>
<p><strong>Ryan Burgess</strong><br />
But that image is beautiful. You know,

</p>
<p><strong>Mars Jullian</strong><br />
that was a flash animation.

</p>
<p><strong>Jem Young</strong><br />
Good UX is it's the shortest path between what I need to do, where I started and where I've tried to do. That's why I look like a login screen should be the logins in the top right hand corner, because like, that's just the standard we have on the internet. Now, I click a button and it takes me to the login page. It's not like three other steps between what I'm trying to do, or I'm trying to get that to me as a good UX, which a lot of places forget. Like banks, your logs your bank, and you're like, I just want to see my account balance or something like that. But it's like 50 screens before that. It's like, but have

</p>
<p><strong>Randall Koutnik</strong><br />
you heard a premium

</p>
<p><strong>Ryan Burgess</strong><br />
app deal? Every time I've logged in? It's some new promotion yet. Don't care. Get me to my statement.

</p>
<p><strong>Jem Young</strong><br />
Yeah, it's like, it's insulting because like, they know what I'm here to do and you're just like throwing up roadblocks as much as possible. That's Add

</p>
<p><strong>Randall Koutnik</strong><br />
you've read the first two paragraphs of this article. Would you like to subscribe to the newsletter? Oh my goodness.

</p>
<p><strong>Ryan Burgess</strong><br />
That was so good. Yeah, no, I don't give a shit about your newsletter.

</p>
<p><strong>Jem Young</strong><br />
Man, I got a full screen takeover on a newsletter the other day. It was like, you know, there's usually little pop ups here like, it's annoying. I got a full screen one it was like impossible to find a close button. Could you even you couldn't even click but like, you know how most models even if they like gray out the back when you could even click on the background? Wow.

</p>
<p><strong>Ryan Burgess</strong><br />
That's some bad UX. You know, I kind of feel like we're headed down that direction. Like what are some examples, maybe good examples of bad UX, because I have lots of them. And I'm interested in hearing other people's. And I mean, maybe it's not just in software, I think user experience in hardware or day to day interactions. Like there's, you know, the famous stares at Netflix that I know even john fabro on our team had given a talk at Netflix really like outlining these stories. errors that are just not in an optimal place. They look good. That is one thing is they actually the landscaping is beautiful. But functionality is there like out of the way. There's like you have to like kind of walk backwards to walk forwards. It doesn't make a lot of sense. And so I think even some physical things just need to be rethought and be a lot better and more efficient for user experience. Any other examples of people have

</p>
<p><strong>Mars Jullian</strong><br />
a bad UX?

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah, bad you excellent. I mean, we can get to good UX but starting bad as always get cat

</p>
<p><strong>Stacy London</strong><br />
captures with like, pick the child after 12 tiles that have cats and have a cat in them. And then I

</p>
<p><strong>Randall Koutnik</strong><br />
would like them so much more if they had cats.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it's always at a stop sign.

</p>
<p><strong>Mars Jullian</strong><br />
Door friends cars. So somebody today mentioned they're using that to train their AI models is like Google cat.

</p>
<p><strong>Jem Young</strong><br />
That's true. Yeah. Oh, yeah. I can't I don't work.

</p>
<p><strong>Mars Jullian</strong><br />
Yeah, no,

just this conspiracy theory of dog out there. One of the things that I've seen I'll generalize it just like between apps is kind of like non content. pop ups. And that comes in like a variety of forms like whether it's a full screen takeover, you open an app, and it's like, oh, let me tell you this new thing. I'm like, No, no, this is not at all related to what I want to do. And basically, I think that for two reasons, one, it annoys me because it's getting in the way of what I came to the application to do. And to I don't even read it to the company doesn't get the benefit of like spreading the word of this new product or whatever. Because it's just at such an inopportune and time and just not at all in context. And I think that's a really bad pattern that we need to get better at. Unfortunately, it's kind of one of the only ways to surface information to the user, sometimes depending on like the application and how much green space you have. But if they were more contextual, I feel like that would be a direction or seeing that pattern move. I

</p>
<p><strong>Ryan Burgess</strong><br />
also wonder too, is like if you were the brand or whatever product that's been displayed in that instance, I wonder if there's like a negative connotation towards that product because of the poor user experience team edition

</p>
<p><strong>Mars Jullian</strong><br />
did not read it

</p>
<p><strong>Ryan Burgess</strong><br />
right right there. But if you didn't notice, like definitely whatever that is

</p>
<p><strong>Augustus Yuan</strong><br />
I have a bad example. But before before I say it, because it's kind of related to it is I want to say that sometimes it's really hard to know something is a bad experience, which is, I think all of our companies do this. But AV testing is very, very important for knowing because not everything like is like, typically like, Oh, this is great. This is great user experience. It might not work for your product. So it's really, really important to test those things. So kind of segwaying into my example is carousels generally have a bad rep for UX. I know Netflix does it because it is an exception. And typically the reason carousels are bad UX is you know if you're hiding like content that you want your user to find they have to make multiple steps to like get through it they have to like site there and then and get some mobile they have to slide there's a lot of reasons why they're not good you UX. I think there's even a site that's called should I use carousels.com It's literally

</p>
<p><strong>All</strong><br />
no

</p>
<p><strong>Mars Jullian</strong><br />
no in different parts.

</p>
<p><strong>Ryan Burgess</strong><br />
That would be honest. I think it is like it is carousel, it says no. But then it also gives you reasons why you shouldn't. I agree with them all.

</p>
<p><strong>Mars Jullian</strong><br />
I really liked that you brought up AV testing, because I think that's really interesting in the, in the context of user experience, because one, we don't know what the users want. So there's that barrier as well. But then on top of that, I think there's an additional barrier that users don't know what they want, either. So yeah, even if you talk to them, and as much empathy, cheers, yes,

that you can build with them. They'll tell you what you want. And like, Oh, this is a great implementation of this idea. But then it won't work at all, because it'll it'll either detract from their experience or will get in the way of the goal that they're trying to accomplish through your product. And so AV testing is a really interesting way to not only figure out what version of your idea is a good user experience, but also what version of your idea is a good user experience, despite what the users are saying, as well?

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, there's, there's one example I had were so I, one of the geeks who stood in line for a Tesla and I found the like, get to buy this thing. I'm super psyched and like, well, you need insurance for your car. Fine. But we have this deal with an insurance company that I won't name. And you click here and I clicked here and it says, alright, what's the make and model of your car? And I was like, Oh, I wonder if you could have figured that out from where the link came from. But okay, fine. I'll play along. Tesla was not listed.

</p>
<p><strong>Ryan Burgess</strong><br />
I could not actually insure my car from that page. And you're like, but you need to insure it before you leave the lot.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah. So I just went with another insurance company that was much easier to set up and all of a sudden, like after that, they probably paid Tesla lots of money to get like that deal. And they completely blew it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that would be interesting, too. Is there this partnership and they actually didn't even like it's not working very well. No one's signing up for it.

</p>
<p><strong>Randall Koutnik</strong><br />
I wonder why.

</p>
<p><strong>Jem Young</strong><br />
I'll just say this is not software related. But airports are a terrible user experience. Nobody wants to go there. Yeah, like what is good about it? Nothing. Now there's nothing It is. It it's like the most offensive thing but you have to do it because you know that you take a bus or a train, or the trains anymore is

</p>
<p><strong>Stacy London</strong><br />
really nice and like the 50s or whatever, you know, like that smoke on an airplane. I gotta

</p>
<p><strong>Ryan Burgess</strong><br />
say that is a nice added benefit. I do not want people smoking on my plane.

</p>
<p><strong>Jem Young</strong><br />
There's just yeah, airports are terrible. That's it.

</p>
<p><strong>Stacy London</strong><br />
Probably only have to go into the I mean, airplanes are terrible to the DMV. Oh, which is like the classic that everyone always says. But it's it is true. Like it is a bad user experience. It's, it's not efficient. It's people are angry. The atmosphere is like dreary, there's just so much about it that's ever just feeds off that negative. Yeah, and then everyone gets grumpy and like, yeah, maybe there's a nice one somewhere.

</p>
<p><strong>Mars Jullian</strong><br />
Well, I also like the stairs example that Ryan brought up because they they, they had netflix they made these like very archaic. I wouldn't even call them architectural. They're they're visually pleasing stare disorganized, related to the buildings. And it's such a bad user. experience that all of the employees had trod a path through the grass to the point where they just decided to pave it, pave it over because because it was just so like a highly inefficient and honestly, it takes like an extra minute just to get to the building if you don't use that path. So that was interesting.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, when how much time is saved if you just cut the path?

</p>
<p><strong>Mars Jullian</strong><br />
Well also not to mention that, um, there's a parking garage as well at Netflix, which only has stairs on one side and there's like four buildings. So anyways, just

</p>
<p><strong>Jem Young</strong><br />
I have somebody Audible, anybody if you ever had an audible subscription, they silently rebill you you get a free trial free book, whatever they silent every rebill you and I don't care that calling him out because they know what they're doing. And then you figure out like, Oh, crap, I'm getting billed. And I totally did not get email about it. He started billing me. You got to cancel and it's seven steps, because I counted them to cancel your membership on Audible And like every step, it's like, hey, what if we offered you this and I'm like, why don't you just give me that before If I was such a valued member, why do I have to like say almost devalues their product? It does. It's intentional friction. It is intentional friction. But like, if I cancelled I like, Good talk next time. Yeah, it sounds so smart. But like, if something easy to cancel, then I may come back. I may be like, Oh, that was easy. Like, I'll come back to it. But like Audible, I will never recommend it to anybody ever because it's just like, so painful. sites where autofill doesn't work. Like I am, I am likely to not buy your product. So like I'm not getting my credit card and autofill doesn't work why I can't put my address. Like that's a bad user experience.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, because it also means that you probably have to like go find your credit card and fill that form. And

</p>
<p><strong>Jem Young</strong><br />
yes, it was funny. It's like the UI can be perfect. Be shiny and beautiful. And it has all sorts of I don't know it. shiny things.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, shiny things. It's like beautiful CSS whatever and, but like if autofill doesn't work, I'm like gone. So that's a that's a good example of like, you can have a good UI but terrible us so well. That is a kind of maybe on the not so much the autofill. But shopping carts in general, just pick whatever shopping site they're on. They a lot of them do this. It's like, put something in your cart. And then it will take you to the cart or whatever. And you're like continue shopping. I mean, not that makes sense. But you hit the continue shopping and it doesn't take you to where you left off. It takes you all the way back to the top of the page. And on a lot of clothing sites, you've probably gone through a lot of things already. And you're like yeah, thanks. Now I have to go find my way back to where I left off. And then keep going. This is not continue shopping. That's like go back to the start of IKEA and then walk through the lines again, because like you know, IKEA has got those nice little blinds.

</p>
<p><strong>Stacy London</strong><br />
Exit Through the gift shop.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, yeah. Is that a good user experience? Or is that the is that your friction right there. pop up. Whoo, that's good. You don't another one that drives me just knots the iOS flashlight. I mean, come on, how many times have you actually used it? And maybe, maybe this is just me, but we've actually use it or you've just hit it and it turns on itself and you don't even know it was turned on.

</p>
<p><strong>Stacy London</strong><br />
I accidentally turn it on a lot, but I also do intentionally use it to

</p>
<p><strong>Ryan Burgess</strong><br />
okay, but that's good. But I think it's the unintentional point. I don't like the placement. I don't think it's that valuable.

</p>
<p><strong>Mars Jullian</strong><br />
I think the flip side, I think, Brian, you're about to ask about good UX experiences.

</p>
<p><strong>Ryan Burgess</strong><br />
Sure.

We can get into some good UX,

</p>
<p><strong>Mars Jullian</strong><br />
just your shopping cart. Example reminded me that one user experience that I've really endorses Shopify, which is like a platform used across different e commerce sites, where if you've shopped with Shopify before you the minute you enter your email, it sends you a text message and then will autofill all of your information and this works across e commerce websites. And I just think that's just makes it so simple. I know that reducing friction and a payment flow sometimes for my own personal benefit is like maybe we should add a little more friction cuz it's Do easy to buy thing. But it does make it really easy especially because a lot of I mean, we I'm sure most of us spend most of our time on our phones and not having to enter in your credit card information and your billing details and everything all over again is really, really nice.

</p>
<p><strong>Ryan Burgess</strong><br />
That is really cool. So and when you mean it's across multiple sites, it's anyone who uses Shopify,

</p>
<p><strong>Mars Jullian</strong><br />
anyone who integrates with Shopify and once it recognizes you as someone who's used their platform before and also agreed to have them save your information then it will auto populate everything

</p>
<p><strong>Ryan Burgess</strong><br />
for you think Same for square if you like, you put in you pay with your credit card, whatever. They have your email already and they have your phone something like texted receipt, it's like zero friction once you use it once. That's really experience. I mean, I'm a big fan of the like Amazon just purchase. So if you're like one time quick purchase or whatever. I mean is dangerous, because I'm like, yep, done. And it's like it just shows up two days later. I'm like, sweet, I forgot I ordered that. But it is very good user experience in and out.

</p>
<p><strong>Mars Jullian</strong><br />
Okay, speaking of Amazon, too, I'm not like totally fully convinced that Voice UI is going to revolutionize the way we interact with our technology yet. But there have been cases where having an Alexa in the kitchen has been really nice, just you know, your multitasking, like, Oh, I just ran out of, for example, dishwasher pods. Alexa, order me some dishwasher pods. And it's just, for me, that was a great user experience, because I can still do what I'm currently doing not have to pull up my phone and I won't forget. And it's already you know, it orders it for me. And that way, it'll be there when I need them next. And that was that was really nice.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think it's hard to say what will happen with voice in general, but I'm with you on the ease of use, and it's very good user experience. I found that the most useful when I was a new parent and wasn't sleeping, and I'm holding a crying baby. And yeah, you're ordering diapers, you're ordering, whatever. And I was like, wow, this is super powerful. It's another point where I think, to test anything, give it to a new parent who has not slept. And if they can't do it, you should rethink your user experience that I think that's like how we should be testing our products is just handed over to the parents that have like a one month or newborn and just go Hear, does this work for you? And then if it doesn't, we need to figure something else out.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, it's something I've always thought about. It's like, you know, I worked with some really brilliant engineers who just like really just intuitively got things. But you get paged at three in the morning, you you don't intuitively get anything. It's like, what's the where's the on button? And we figured that out. Like, no one is smart after a long day, and then getting woken up in the middle of the night, you know, they need the basics and they need like, what is going on right then and there. One of the things that we've done for turtles at slac. So we have this long list of error types, and then customized help messages, just basically next step specifically for this and specifically for the next thing, so so whatever goes wrong, it's not just like, I don't know, go ask someone. It's like, okay, you know, GitHub error, do this, you know, another error do that. They just kind of like, give that immediate, like something went wrong. So it's not great already. You're losing points in the UX department, but to be able to say, Alright, this is what you do next, and most of the time it works useful later. is actually a very helpful practice

</p>
<p><strong>Ryan Burgess</strong><br />
to build great user experience. human readable error. Yeah. human readable errors. Air 41110.

</p>
<p><strong>Jem Young</strong><br />
Catch you through your Ethernet cable.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And that can be helpful. Yeah,

</p>
<p><strong>Randall Koutnik</strong><br />
yeah, I've heard calling calling them help messages instead of error messages. And just kind of shift your thinking into into what it's supposed to do. I really

</p>
<p><strong>Ryan Burgess</strong><br />
like that that's

</p>
<p><strong>Stacy London</strong><br />
really good. slack does a pretty like, Great job, I think of like, making the error messages more helpful or useful or not so techie, and impossible to understand for for.

</p>
<p><strong>Augustus Yuan</strong><br />
But I guess that brings up a really good point that a huge part of user experience is communication, like communicating to the user, what is going on right now? Like I feel there are times you can get super confused, like what just happened here, and it just really helps to be like, oh, there was a sync error, but don't worry, blah, blah, blah. We can reload the page or something. Yeah, even giving someone instructions on what to do. Even if it is unplug and plug it back in. That could actually be very valuable. Yeah. Yeah, actually, this kind of makes me think Twitter has this like subtle page where if you click on a link, it says directing you to this link, but it doesn't direct you click here, which I think just does this thing where it clears the cache for you or something. But it's like a really nice feature. Like if you were stuck on that page. I've actually had times where I was stuck. I was like, Yeah, yeah, I the viewers can see what I did. I did a pressing thing.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, like in slack is the same thing. It's like if for any reason the client can't connect to the servers. We do say the same thing. It's like we can't connect the server's it's bad, please, you know, refresh the client or you know, close it and open up again and my favorite part is it ends with a something we suggest out of a great regret and self loathing at the end of saying like yeah, we screwed up and like so many times you see like the big corporations never apologize for anything and obviously it's like oh no, somebody else's fault and being able to like, have that you know, empathy and cheers. Cheers to say like, yeah, If we screwed up, this is our bad, but hopefully we can we can make it better.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that nobody's perfect. We're all going to make mistakes. Software is terrible. Yeah. It's like, when when have you ever not shipped a bug? Like it just it doesn't happen. So I think just owning that and be like, yeah, this could be better. And I mean, software is cool, because it's very iterative. You can tweak it, make it better learn from some mistake and switch it up. So I like that. It's just owning the mistake that Yeah, we screwed up. It's cool. We'll fix that pop up error messages. You

</p>
<p><strong>Jem Young</strong><br />
know what I love when I like go to some service or app or whatever. I put in my email and I try to put in a password and it's like, I like when they're like, Oh, this accounts not found versus invalid password, because they're two very different responses to the same thing. And one is like, oh, maybe I don't have an account with this site. Or maybe I use a different email or something like that versus like account not found. So I've tried a different password and tried a different password like, one is so much faster, but it's such a better user experience. And it's like a minor thing, but I don't know they

</p>
<p><strong>Randall Koutnik</strong><br />
add up over time. Yes. Seen, like if you try to create a new account and you enter a username and password for an account that already exists, they just log you in. It's like, yeah, you're trying to create an account that like, but you already created that account. So we'll just log you in, because

</p>
<p><strong>Ryan Burgess</strong><br />
but you have the credentials, the gear, right? are putting in the right username and password, right?

</p>
<p><strong>Randall Koutnik</strong><br />
It has to be the right user. If it's the same username and a different password, they'll they'll give you an error. If it's the right username and the right password, then the like, you just logged in, is that

</p>
<p><strong>Ryan Burgess</strong><br />
a good user experience or a bad user experience?

</p>
<p><strong>Randall Koutnik</strong><br />
I like it, because it's like, you know, you probably forgot you had an account.

</p>
<p><strong>Ryan Burgess</strong><br />
Yes, I Yeah, I was gonna argue the good, but I was like, maybe he's going in the bad direction. But you know, I think that's good. And it's what I was trying to do. Anyway, I wanted to get a count on the site. Exactly. And you don't even have to get your just out of their way. I think some of the points though, sometimes I think there's like, even security reasons why to not be too prescriptive. It's like, Hey, you have the right email, but the wrong password or I think sometimes companies try to make it a little obfuscated there just yet, not showing. I've heard that but like,

</p>
<p><strong>Jem Young</strong><br />
it is Not real security that's like not like secure that makes you feel better, but it doesn't actually do any better. And I think it probably hurts the real user more than it actually is. Like hackers are like gonna get Yeah, they're gonna figure it out. And but they're mostly just

</p>
<p><strong>Ryan Burgess</strong><br />
like, oops, okay know that the message so they're probably not even looking at the message. They have a bot doing this. Yeah,

</p>
<p><strong>Randall Koutnik</strong><br />
exactly. Yeah. So so actually a fun, fun New York story about hackers is we ever go to companies and they're kind of internal login pages like if you're outside of the the VPN or whatever you're trying to log in internally usually look terrible. There's like no UX, like Google's definitely looks like it was designed in 97. And then no one ever updated it. And I found out recently that's deliberate that they make these pages look really crummy and really old. So everyone's tries to like attack the page and hack into that page, but they've put great security on it. They just make it look bad. To kind of attract everyone who

</p>
<p><strong>Ryan Burgess</strong><br />
says No way. Really

</p>
<p><strong>Augustus Yuan</strong><br />
interesting. Interesting. Wow.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, just like that. The hell the hackers trying to go after that and like that. You're not going after everything else.

</p>
<p><strong>Jem Young</strong><br />
I like a contextual stuff. stash does this I think big bucket too. Like they have the little icons off to the left for different things which I don't use stash bucket too often. So I don't really know what they mean. But if I hover over, it tells me what it does, which is like really simple but a lot of sites snapchats super guilty of this without us but like they assume you know, things they assume you're like some level of user versus like, Hey, you could be a power user. But just in case you're not here's a little helpful thing. I'm like, Oh, cool. That's really nice. I

</p>
<p><strong>Randall Koutnik</strong><br />
that's good UX. Yeah. Anything you do for your user in the moment, like,

</p>
<p><strong>Stacy London</strong><br />
like that is so nice mouseover placeholders like little stuff like that is really helpful. One thing that Mike is was doing was like, if you haven't created a repository yet, you're like brand new to everything. Instead of just being like, no repositories as like your message. You'd be like,

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, you don't have anything but maybe you would want to create one. Here's some ways to learn. How to do that if you're not super familiar kind of new to get stuff like that's like really nice UX, it's like leading you into understanding how to use a thing even in like because Bitbucket or GitHub or they're like really technical tools that are that are hard for some people. If you're not super familiar with git, you weren't like UI to abstract away some of that difficulty. So like that kind of stuff, I think that's likely could be their very first time interacting with Git. And so yeah, you could be really helpful in this moment. I think it even leads back to Mars, it brought up the happy path. And I think as so many times as engineers, we focus on the happy path. And I think to build a better user experience is thinking about all these different edge cases, and how those edge cases can be more intuitive. And that to me isn't a bit of an edge case. It's not really happy path, because it's, I guess it is your brand new users going to be shown to the user. But it's like you could have just said well, it's there's no repositories and that's it and then Well, most users will have repository. So that's the happy path. It's really thinking about that case where no they came in here for the first time. What does that look like? I think that's a really good idea. Any advice that you would give kind of as before we get into pics, any advice that you would give other engineers that would help them be better about thinking about creating better user experiences. So I was joking with my wife, Lauren. And because sometimes my parents will call me and the last week for computer help, which is

</p>
<p><strong>Jem Young</strong><br />
we've all been there was not even revolving there. And sometimes, like, hot, so frustrating, but she's like, you know what, someday we'll be older. And we will not be as familiar with virtual reality, augmented, whatever, like, the next thing is, and you're gonna have to explain that. So like, that's how you should treat everything like someday you will not understand what is going on. You'll be very confused or technologies move past you. And you'll need someone help you and like that's how you should build good UX.

</p>
<p><strong>Ryan Burgess</strong><br />
So can I summarize that by saying build out empathy. Yes, cheers. Cheers.

</p>
<p><strong>Mars Jullian</strong><br />
I think one thing I've also seen happen a lot. And it might be, like more obscure products that we don't use on a day to day basis is engineers not using their product at all. Not even remotely. And I think there's, there's a case to be made. And this isn't like a testing capacity. Like I'm not saying like go and do all of I mean, you should be doing QA as well. But don't go and do all of your own QA. But for the sake of doing it just in order to like, get through the product, try the feature that you're adding. And you know, you have the most context about like that product itself, but you should try to load it up in a context other than, oh, I need to make sure that this buttons working, which is like that's the user interaction and not the user experience. So

</p>
<p><strong>Stacy London</strong><br />
it may be like, Yeah, absolutely. Cheers to that. And even if you don't have the ability to use your own products, let's say you're building something that like I had worked on software for contact centers at one point for like, one 800 You know, you're calling into a helpline and there's you know, bank, people trying to answer phone calls and the software was meant to help do that, well, I can't really use it. Because it's like, I'm not a big, I can't make myself turn into a call center. So like, how do you how do you do it at that point, and I think at that point you, you asked in and see if you can visit a call center, and witness and watch. And that actually 100% will build your empathy, just like spend time with people that are actually users your stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
I love that you brought up the call center tools, like yeah, that was gonna be my thing is like, go watch people use it, and understand how they're using your product. But I've even visited the call center for Netflix and just listen to people calling in with their problems. And there's a couple things that my team is responsible for. I'm like, Oh, we could make that so much better. And it was just like it sparks those ideas and it wasn't necessarily something broken or wrong. It was just that it was not intuitive for that person at the time. And you look at you're like yeah I could see that and so how can we make that better? Oh, okay, let's rethink that. And just, it was like small things to that maybe it's like different contrasts in a button, or just different placement of something, it made a huge difference. So I think that was I'm gonna play off that as advices. Like, really find ways to hear from your users.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, definitely with that, too, like to listen, listen to the user complaints. Some of them are going to be perfect. People like to complain, but there are a lot of them, you know, like, what are they trying to do here? And why are we in the way what what are we doing that's stopping them from from getting what they want? We used to have a channel at slack called beef tweets. And it was it was all of all the tweets that had beef with slack. I think we renamed it to paper cuts, which is yes, like all the all the little things, it's not going to be this big project that you know, or whatever the it's going to take two quarters to finish something. Small things you can make, like I mean, GitHub just when they finally are able to copy code out of it, it didn't pick up little pluses and minuses on the left was like the best day ever. And just this little paper cut that someone finally sat down and fixed so much

</p>
<p><strong>Ryan Burgess</strong><br />
better. as engineers, are you supposed to look at that so often? Are you like supposed to pick a paper cut and fix it? Or just like, does it become noise? Or is it something that you're trained to look at once in a while?

</p>
<p><strong>Randall Koutnik</strong><br />
It's, it's organic. I think still, at this point. It's just like, as things pop up, someone will say, Oh, hey, you know, like, pass it on to, you know, Alice, or Bob or whatever, because I know they're working in that area and things like that. That's cool. I like Alice and Bob. Yeah.

</p>
<p><strong>Mars Jullian</strong><br />
I think that's pretty interesting, too, because like, um, even if you don't work at a larger company, where you actually have like, the resources to go and talk to your users, there's definitely tools online or you can like user testing tools where you can recruit sets of users, and they'll use your your website and you kind of get to see a recording of them go around and try to use stuff and sometimes they'll talk out loud as much as they can. But what's really interesting there i think is like, with trying to talk to users, we don't always get the answers but we can start asking But our questions and I think, Randall, you kind of touched on this a little bit in what you were just saying. And that's really important is to start asking better questions like, what are we doing wrong? Not like, Oh, I can fix this immediately by making that button read. I mean, that might solve the problem that might not. But to kind of get pointed in a better direction.

</p>
<p><strong>Ryan Burgess</strong><br />
What I like that you touched on. There's other ways, like if you don't have a call center for your company, okay, well, that a lot of companies probably don't go to Starbucks, Hey, I'll buy you a coffee. Can you look at my product? Somebody he will have time to do that. And they'll just give you feedback. And yes, it's very easy, just take with a grain of salt, but there could be something very valuable from that person that you're getting. So just spending time with like five people could be very valuable.

</p>
<p><strong>Randall Koutnik</strong><br />
It can be one of the most infuriating things to sit there and watch someone use your software. Is there a click the button, but but you've learned something really valuable and that is, you know, if the buttons are defined needs to be bigger and more obvious, or whatever,

</p>
<p><strong>Mars Jullian</strong><br />
perhaps a lot of the decibel in the room, the bigger the problem

</p>
<p><strong>Augustus Yuan</strong><br />
I want to echo what everyone said, actually, mine was going to be like watch videos, because that is really how you build empathy. Cheers. Cheers, cheers. But and then I guess another thing is, I know some people do this. I know my company sometimes does this but I feel better about it is sometimes we try to take shortcuts and user tests within the company. But that's not that's not the same. That's not fair. They're all experts in your own product. So naturally, a lot of things are a lot more intuitive to you, it's really important to test on real users.

</p>
<p><strong>Ryan Burgess</strong><br />
That's very valid to mean you could spot check with

</p>
<p><strong>Augustus Yuan</strong><br />
someone else. But if there's something clearly broken, then it's you know, of course, that's great. But there have been a lot of times where our user tried to do something very random that no one naturally would intuitively try to do. But you know, maybe for them. The product was intuitive to them at all. And just like, Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
we didn't expect that. Oops, you need a bigger sample size. You just can't use your own company for it.

</p>
<p><strong>Stacy London</strong><br />
Yeah. One other cool thing. You could do if you have this, you have to have kind of the infrastructure on it. But if you have a way to receive customer feedback and display it to everybody, like on like wall boards or like slack monitors or Slack, yeah, hook, hook up your slack to Twitter and see what people are saying really amazing integration. Yeah. But that's cool, because like, you can just kind of see it frequently. Or if you have a dashboard somewhere where you're bringing in customer feedback in real time, so people can kind of get a feel for like, Hey, we just rolled out this feature and everyone's like complaining about on Twitter, like, oh, maybe, maybe that's bad. Like we should probably dig into that.

</p>
<p><strong>Jem Young</strong><br />
We have that for front of happy hour. We have a Slack channel where it feeds the Twitter, we just check in and see what people are saying. Good

</p>
<p><strong>Ryan Burgess</strong><br />
thing. They're not bitching at us. Our people love

</p>
<p><strong>Jem Young</strong><br />
us.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, at the end of each episode, we like to share pics of things that we've You know, found some found some interesting things that we want to share with our listeners. Let's go around and share our picks Mars. It looks like you're starting it off.

</p>
<p><strong>Mars Jullian</strong><br />
Oh, all right. Thanks, Jem for for that.

</p>
<p><strong>Augustus Yuan</strong><br />
Welcome. So

</p>
<p><strong>Mars Jullian</strong><br />
that was Augustus.

Like I said, this is squeaking all night. So my first pick I have is a front end masters actually, maybe it was a couple weeks ago, they put out a front end developer handbook in 2019, which is I wouldn't necessarily call it I mean, I think it is a handbook they do a really good job of running down sort of what's happened in the industry in the past year, but it does have a lot of link outs also to really useful articles for each topic. So I've been slowly making my way through I think I've made it down four bullet points that can't help but get distracted with all the other things that they're referencing. But so if you're looking for a good resource that's been pretty interesting to to dig through, and then my second pick is, I might even call it a valley silicon and pick because I know gem is gonna laugh. Right. So I have two cats at home who, um, I would call them poop machines, because that's just what this

</p>
<p><strong>Stacy London</strong><br />
whole day is produced.

</p>
<p><strong>Mars Jullian</strong><br />
And so there's this new automatic litter box

I just discovered called the litter

robot. And I call it Valley silicon because it's very expensive. It's very tech forward, it looks like a space shuttle when it arrives. It's gigantic. However, that being said, I have two cats who constantly produce stuff. And I don't have to go near my litter box for like a week. Honestly, it's pretty impressive. Keeps itself clean very, very well. And it also has like a big drawer for all of the stuff that's produced and you get the right version doesn't get an app so you don't go near it. It'll just tell you that your litter box needs to be attended to Yes, cool.

</p>
<p><strong>Jem Young</strong><br />
How much is this litter box more?

</p>
<p><strong>Mars Jullian</strong><br />
So the

</p>
<p><strong>Ryan Burgess</strong><br />
visit on the site and see,

</p>
<p><strong>Stacy London</strong><br />
yeah, I'm several on my yacht.

</p>
<p><strong>Ryan Burgess</strong><br />
Each room has their own litter box.

</p>
<p><strong>Jem Young</strong><br />
invite us here. Yeah, I know

</p>
<p><strong>Ryan Burgess</strong><br />
never will be

</p>
<p><strong>Mars Jullian</strong><br />
I will say it is a little on the pricier side however, it is worth the investment because I have used automatic litter boxes before and they're they keep breaking. They're maybe half the price. I have to buy one every two years or 

</p>
<p><strong>Ryan Burgess</strong><br />
Mars it sounds like it's a good user experience.

</p>
<p><strong>Mars Jullian</strong><br />
That's a great user experience. I have so much empathy for I don't know what

</p>
<p><strong>Ryan Burgess</strong><br />
for poop.

</p>
<p><strong>Mars Jullian</strong><br />
Do you call it the poop machines?

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, Stacy?

How do you follow a poop machine?

</p>
<p><strong>Stacy London</strong><br />
Actually, my my first pick follows in the spirit of what we were just talking about. first pick up shits Creek.

</p>
<p><strong>Ryan Burgess</strong><br />
The show? That's a great show.

</p>
<p><strong>Jem Young</strong><br />
It's a good show.

</p>
<p><strong>Stacy London</strong><br />
I only I should have watched it earlier. It's so so good. 

</p>
<p><strong>Ryan Burgess</strong><br />
It's hilarious. 

</p>
<p><strong>Stacy London</strong><br />
It's so funny. I laugh out loud more than I have in a long time. Like maybe Arrested Development was the last time I laughed out loud that much. So Very, very funny if you like mockumentaries and maybe like absurdist humor, I don't like that kind of thing. It's great.

</p>
<p><strong>Ryan Burgess</strong><br />
It's got its dark humor ish or like,

</p>
<p><strong>Stacy London</strong><br />
yeah, so yeah, that's my first pick.

Second pick is a song called Mayday by an artist called Mike slot and it's sort of a light hearted, very layered techno song that I really enjoy. I've been enjoying recently as I code

</p>
<p><strong>Ryan Burgess</strong><br />
right on, Randall, where do you have for our listeners?

</p>
<p><strong>Randall Koutnik</strong><br />
Did you know you can buy swords on Amazon? I did not. Yes, you can buy swords on Amazon. What kind of swords are we talking about? So So is epic sword that all sorts of swords. so on. The news is you know, my wife and I are expecting the child in July and she had rats that's awesome and made the mistake of letting me know not only the time but also location of this. So I got two of my co workers to dress up as witches and deliver a sword

</p>
<p><strong>Jem Young</strong><br />
as one does

</p>
<p><strong>Randall Koutnik</strong><br />
there's this moment I'm like, where do I get a sword and I looked it up on Amazon. You could buy sorts in Amazon.

</p>
<p><strong>Ryan Burgess</strong><br />
You can pretty much get anything on Amazon. 

</p>
<p><strong>Jem Young</strong><br />
Can you buy a car on Amazon?

</p>
<p><strong>Ryan Burgess</strong><br />
Yes, really? I heard

</p>
<p><strong>Augustus Yuan</strong><br />
oh wow is the thing about this?

</p>
<p><strong>Mars Jullian</strong><br />
Well I don't know if you could buy a car so much as they like allow you to curate your Amazon garage so you can tell it what cars you have so you can find all the relevant products

</p>
<p><strong>Jem Young</strong><br />
you need. That's actually pretty useful. That

</p>
<p><strong>Ryan Burgess</strong><br />
sounds Alright, so combined, you bought a sword on Amazon

</p>
<p><strong>Randall Koutnik</strong><br />
Amazon and I guess I guess a little more focused on like developers. By the the there's a video game called factorio I absolutely love it and you build a factory and Gemma's nodding very heavily at me right now I have played with and it's and it really scratches the the software engineering itch more so than any other game I've ever played.

</p>
<p><strong>Augustus Yuan</strong><br />
I guess this video so my picks I have two picks. One is this article about spelt three. So spelt is an another framework I don't want to add more, you know, to

</p>
<p><strong>Ryan Burgess</strong><br />
framework. Oh, I mean, we probably need another episode. Yeah, frameworks.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, but, but this new, the new update they've added to this. I think rich Harris has an article called rethinking reactivity. And he has a talk. It's a really interesting article of how they're kind of rethinking how front end frameworks might work. I don't feel like an expert on it. So I won't like speak to it, but I heavily recommend the read and at least, you know, trying to see I actually like really encouraged this kind of thinking like, how can we like grow and like how we can rethink things you know, so I think we should always be doing exactly. And then my second pick, is about actually Randall had a talk on NGO Atlanta about parable the blender I highly recommend checking that out, too. We'll have it it's

</p>
<p><strong>Ryan Burgess</strong><br />
it's all about great user experience. talks about is really great talk. Wait, can we also say like he went on stage With a Viking hat.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, that was pretty awesome.

</p>
<p><strong>Randall Koutnik</strong><br />
I did not have a sword if you didn't know about

</p>
<p><strong>Ryan Burgess</strong><br />
Amazon swords. Yeah, that's right.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah. So quick shout out to that. But I think in that talk, he talked a little bit about personas for people who don't know that it's like a really kind of depicting what your target demographic is. And there's also this other thing that I heard when I was talking to some designers, another framework called jobs to be done. And so this article kind of talks about the differences between personas and jobs to be done, which essentially is that you, you're the target people you're talking about, they might be a persona, but they have certain jobs of what they need to get done. And that's why they might choose your software or something. So it's another way of looking at how to like target certain demographic. So I thought was a really interesting article comparing the pros and cons of it. So

</p>
<p><strong>Jem Young</strong><br />
Gemini have my first pick is a podcast. It's called the dream. I want to say someone at a conference or meetup recommended to me and I started listening to it's about multi level marketing, but it's like Very, very, very in depth. And it's it's not what I expected, like why people join it. I'm always like, Why do people do multilevel marketing is obviously a scam. But the reasons behind it are really, really fascinating. It's been one of the more interesting podcasts I've listened to. My second pick is a book by Randall, called build reactive websites with RX js. He is the king of observables is that you are a bit less would you say is the bigger king of observables probably done less.

</p>
<p><strong>Ryan Burgess</strong><br />
Not here. I'm gonna say random.

</p>
<p><strong>Randall Koutnik</strong><br />
person. I read a book though. You just wrote the framework. I mean, you say?

</p>
<p><strong>Jem Young</strong><br />
He wrote a book, it came out in December, right. And you cover ArcGIS observables. And he touched on some Angular, right?

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah. So rxjs observables. How to integrate with Angular how to integrate with NGR x and and also some, you know, fun game development stuff, because that's a lot of actual reactive development. How do you

</p>
<p><strong>Jem Young</strong><br />
wait what is this cover? Is it like a Man with a Spyglass

</p>
<p><strong>Randall Koutnik</strong><br />
yeah he's got like a he's he's observing things.

</p>
<p><strong>Stacy London</strong><br />
You framework idea monocle, or is that already one probably

</p>
<p><strong>Randall Koutnik</strong><br />
taking a monocle.

</p>
<p><strong>Jem Young</strong><br />
word of English

Wait, we're looking at

</p>
<p><strong>Augustus Yuan</strong><br />
all the viewers are waiting and there is a monocle Jr. Everyone drink. Cheers to that.

</p>
<p><strong>Jem Young</strong><br />
We just invented new drinking game. Oh yeah. But you have to think of a live library. That's not a JS library.

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, we've been doing that. For everyone that is so we have it at Midwest. Yes. We we do that every year. We get very, very drunk.

</p>
<p><strong>Stacy London</strong><br />
Went to Midwest jazz

to be in the Midwest.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, I have two picks. Both I'm gonna say like both Netflix originals. I feel like Gemini just talked about this every time. Yeah, but what I'm gonna say is a movie and I don't like movie. That much I'm starting to find that Wait what? Yeah, I mean, I feel like I watch a lot of them and they're never like that great. I like shows like I like a TV show and I like that much like a lot more. But the highway men so good. It's both the guys who go after Bonnie and Clyde and so if you've seen like a Bonnie and Clyde story it's obviously about Bonnie and Clyde. But this story is really based so much more on the the two highway men chasing Bonnie and Clyde. And so you don't even really see a lot of Bonnie and Clyde. It's really these two the story of these two chasing them at the Texas Rangers. Yeah, and it's like based off a true story. And it's really interesting. I found it really well done. So highly recommend that movie. And then since actually Stacy had mentioned shits Creek, I thought of my favorite dark humor, which released the recent season is Santa Clarita Diet I know I've had as a pic in the past, but season three is so good. I've already seen it a couple times. I really like Santa Clarita Diet. I It's one of my favorite shows. So I'm going to add that as a pic as well, before we end the episode, I want to thank Randall, thank you so much for joining us. Always a pleasure to have you on here. Where can people get in touch with you? I mean, they should buy your book, but then where can they get in touch with you to say how great it was?

</p>
<p><strong>Randall Koutnik</strong><br />
Yeah, so if you want to buy the book, I set up a bitly link at the last minute because that's what I do. So Li slash master observables and you should get there. Not Ben Lesh. Not Ben Lesh. And yeah, so Twitter's probably the best place at our K o UT ni k as my handle on there. Because I am cursed with the checklist of acne and surname.

</p>
<p><strong>Ryan Burgess</strong><br />
Thank you all for listening today's episode. Make sure to subscribe the front end happy hour podcast on whatever you like to listen to your podcasts on. Spotify. Apple podcasts. I don't know what what do you like on Android? Jem?

</p>
<p><strong>Jem Young</strong><br />
Actually, Google has a podcast.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, they do. Actually. It's okay.

</p>
<p><strong>Randall Koutnik</strong><br />
It's clean. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
And follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> any last words?

</p>
<p><strong>Stacy London</strong><br />
robot cat, shitter machine. 

</p>
<p><strong>Ryan Burgess</strong><br />
There we go.

</p>

  
  `;
  return transcript;
};