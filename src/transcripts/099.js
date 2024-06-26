// Episode 1 transcript
module.exports = function() {
  const transcript = `
  <p><strong>Ryan Burgess</strong><br />
  Welcome to the latest episode of the front end happier podcast. Today's topic has actually been requested quite a few times for us to talk about graph QL. So I'm excited that we have surety to help us really dive deep into the topic. So surety is joining us to talk with us about graph QL. Trudi Can you give us a brief introduction of who you are, what you do, and obviously what is your favorite happier beverage?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Hi, everyone. I'm Shelly Kapoor. I'm a senior software engineer at PayPal. I love building JavaScript applications using react. GraphQL. My favorite happy hour drink is Sazerac
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  nice, which we should be drinking tonight, but I was lazy and didn't get absinthe. And then Trudy's, like I have a bunch of it at home you must drink or make a lot of them at home. 
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Not a lot.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  drink at all already.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Let's go around the table and give introduction of today's panelists. Stacy, you want to start it off?
  
  </p>
  <p><strong>Stacy London</strong><br />
  Sure. I'm Stacy London. I'm a senior front end engineer at Atlassian.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Jem Young senior software engineer at Netflix,
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Augustus Yuan, software engineer at Twitch 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And welcome back, Jem, you just a little bit.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Where have you been something something create a new human something?
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That's it's pretty easy. That's really you
  
  </p>
  <p><strong>Jem Young</strong><br />
  know, I mean, three months paternity.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  All right. I'm Ryan Burgess. I'm a software engineering manager at Netflix. And each episode of the front end happy hour podcast. We love to choose our keyword that if it's mentioned on the episode, we will all take a drink. And what did we decide today's keyword is
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Rest.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Rest. So if we say the word rest, which I know we will, we will all take a drink. All right, well, let's jump in before we really dive in. Curious like, I really want to hear what is GraphQL?
  
  </p>
  <p><strong>Stacy London</strong><br />
  query language. Right? That's true. I've heard that 
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  it's an alternative to
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  To our nice keyword 
  
  </p>
  <p><strong>Stacy London</strong><br />
  to rest.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Yeah. So it's essentially a way of kind of talking to your API, like query language for your API. So one of the cool things about graph qL is that it gives the client the power to ask for what they need, instead of putting that responsibility on kind of the API or the back end developer kind of gives you like, this big takes enough data and you kind of have to like work with it. So with graph qL, you get the power to ask for exactly what you need. And just that nothing more
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Created by Facebook. I actually had to look this up, but it was created in 2012, which feels like a really long time ago.
  
  </p>
  <p><strong>Jem Young</strong><br />
  It could have been 2012. That seems like no, they were hiding it for years. Oh, no, no.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  So it was developed internally by Facebook in 2012, before being publicly released in 2015.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Wow, wow, he hit it for three years. That's crazy.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So it was developed by Facebook in 2012. But not publicly released. That is interesting, huh? Look at the date. And then as I said, I'm like, Wait a second. That's bullshit.
  
  </p>
  <p><strong>Jem Young</strong><br />
  You think like all the like hot new startups, you're like, Wow, that's so hot. It's probably been around like 1020 years.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So I don't know if I want to ask this just to avoid our keyword, but I'm gonna ask it anyways, we said it's an alternative to rest. What's the difference between the REST API and graph QL. And we can also choose a couple times for me, but cheers,
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  cheers. You know what I think of graph QL. I think of this, like for a really long time. I didn't know what graph qL did, I think of this picture where there's R E S T endpoint, has a picture. It has a URL API slash burger, and it shows a picture of a burger, and then shows you the graph qL query, and it's burger and then lettuce, tomato and, or whatever. And it just shows only the pieces that it takes. So I think like one of the huge selling points of graph qL is being able to pick what you want on a really prevents this like kind of waterfall request model that rst has.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And you're right with those calls, you're getting a response, it's typically a JSON blob that you then have to loop through and try and find what you actually want out of it. Versus graph QL. You're just asking for exactly what you want. So you're not having that whole large JSON blob being returned back to you. Yep, yeah, it prevents like over fetching of data when you really don't need it.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  And I think one of the main reasons is because with graph qL, you have one endpoints, you have slash graph QL. And that is the endpoint you talk to, whereas with vast you have, let's say you have a library app. So you have slash authors, and then you get a list of author and then maybe you want to fetch a list of their resources or the list of the books that they've written. Then you have a slash And pointed, then you go talk to that book endpoint. So with rst there's a bunch of resources bunch of endpoints that you keep going and talking to. Whereas with graph qL, you only have one endpoint to get all the data you need from just one and
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  there can be multiple endpoints that graph qL is talking to, but you only after worry about exactly. The brilliant thing. Yeah, I feel like every time everyone keeps saying rst, I feel like it's like a respect song. Like, we need to make our own song.
  
  </p>
  <p><strong>Jem Young</strong><br />
  I think that but like, conceptually, the idea is good, like, not necessarily graph QL. But like, the idea of just getting the data you need is something we don't think about as web developers. Rest. Honestly, it's easier. If you're like, I need some data. And I think it's in this payload somewhere. So let me just grab it and I'll do all the work on my side. So it's just easier just like plot plot for the state. And we never look at that as far as performance goes, because we're always like, my CTR is low. My TT is fast, like my payload. It's our my page loads really quick. But nobody thinks like, the next 20 interactions that the client needs to do in pulling in like megabytes and megabytes of data just for like, maybe a little bit of text like we never think past that point.
  
  </p>
  <p><strong>Stacy London</strong><br />
  Yeah, that's why a memory footprint of that client. Yeah, that data that you never look at that stuff,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  or you just cache it, it's not a big deal.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Yeah. It's really easy for us to do, it's easy to manipulate a JSON blob, but like, parsing JSON is a synchronous event. And I think we all forget that. So like, just slows down your client every single time. Something like just being more deliberate in your API choices, is like a much more thoughtful approach to web development, which is the way we should go. Now it's
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  a lot of heavy lifting on the client side, because now you're sending this huge JSON data blob. And now the client either throws that away or puts it in Redux. And there's overhead of that as well with the initial JavaScript that shipped to the client
  
  </p>
  <p><strong>Jem Young</strong><br />
  with a payload changes at all in the slightest. You have to adjust all your client code to adjust for that the nodding of the head. We've all done that before, like API are Yeah, but we could go back to so Kids don't know about. So,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  man, when our nice rest calls came along, I was pretty excited. So excited tears.
  
  So I think we've touched a little bit on some of the benefits, like it's already been highlighted a few times performance, being able to make a single request and get exactly what you want. But I'm curious to hear from all of you like what are some of the benefits that you would want to be leveraging graph qL in your companies or even in projects that you're working on?
  
  I think some like sometimes. So if you're a team that's maybe working on like a specific, you're maybe not working on like an entire page or an entire product, and you're doing kind of component level stuff. I think it's really nice to be able to scope that data really specifically to that component and not over get data and I think that could possibly make the way that you do development at your company. More distributed and easy. Yeah, one of the coolest things that I also think of graph qL is that as a back end engineer, if I Want to upgrade my API and add more fields, I can just keep adding to the same endpoint. And on the other hand as well, if I want to deprecate a few, I, because there is every field is attached to a resolver. I know if that field is being used. So instead of just like completely blindly removing a field, I know if that field is being used, I have instrumentation behind it. So that's really powerful as a back end engineer. Oh, that's huge. That's a big difference. Yeah.
  
  And what exactly is a resolver?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  So resolver is basically a function just like in rest, we have resource implementation. Cheers, cheers. So just like in rest, we have resource implementations in graph QL. Those functions are called resolvers. And as always, are basically just JavaScript functions or whatever library you're implementing it that define what data you need to send back. So those are the functions that will be talking to the database or underlying API's that you need to talk
  
  </p>
  <p><strong>Stacy London</strong><br />
  to the server implementations give you like, expose that data to you in an easy way. So you know, like yes, these are being consumed or do you have to build something on top of that to know like, Yes, all these pieces of data are definitely being used by consumers.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Oh, like from resolver level. Yeah, so there's multiple ways you can do that Apollo has tools that actually give you the resolver. And there's instrumentation for free. But then if you don't want to use Apollo, you can also build that in house. So you can add instrumentation is just a function, right? So you can add instrumentation in house based on whatever libraries you're using at your company.
  
  </p>
  <p><strong>Jem Young</strong><br />
  So sorry, what is Apollo?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Apollo is a library that implements graph qL on the client side and the server side. Apollo has this client, Apollo client, which makes using graph qL super easy, but things are pretty easy. They also have this amazing resource for graph qL on how to get started. It's a great tutorial. Definitely check it out.
  
  </p>
  <p><strong>Jem Young</strong><br />
  I like the refactoring benefit. I think we touched on it, but the fact that you know what's been used rather than with a typical API, not graph QL. Like you were using this like clubbing data, so it's like, give me I'll use movies as examples because like Netflix, but like, I'm like, give me all the movies in the certain age, they're like, cool, we'll give you all the movies of all time. And like, it's up to us as on the client side to kind of resolve that out and pull out the data we need. As a back end engineer, you're like, Oh, this API is being hit a bunch. I can't edit it anyway, because I don't know if all the clients are using. And at scale, like, that's a big problem that a small company, you kind of know what they're doing. But when you have, like, you're part of a team that's serving like hundreds of UI developers, you can't refactor anything because you don't know what they're using. So like, you just end up with like legacy code and legacy code legacy code v1, v2, and v3, etc. But I like that in graph QL. You don't have to do that anymore. You know, it's being used explicitly.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That is actually really handy. I when I think about it, even on a small team, it's like good to know that because it's just once you've got it there, it becomes much easier to migrate to something else or or to update the client or update something on the server and just not have to worry as much.
  
  </p>
  <p><strong>Stacy London</strong><br />
  I was curious to ask you if you do you think graph qL is better for like internal API. Yasser external wants to?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Yeah, that's a great question. So kind of depends on what your client needs to be honest. So let's say for example, if you are building an application that talks to the client, and within your application server, you're talking to like five different API's, you might want only surface one API. So in that case, graph qL is perfect because you fill out the data that you need. And then we surface that up to the client. That's for external use. But for internal use, let's say you have, again, using it as an orchestration there. But let's say you have an example where you're building an API, and that only serves one client internally, you're building a tool for that. And the data that you're building up in this API is exactly the data that your client is going to use. So there's a one to one connection, then you're not really like using graph QL. There's no leverage point there. So in that case, rest would be a better alternative.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So in that scenario, if you've implemented graph qL, on your API, and I'm an external engineer trying to work with it on my client side JavaScript. Do I need to know graph qL now to interact with this API?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Yeah, that's a good point. So if you're using a graph qL API, on the server side, you would need to talk to it in a graph qL way because it's a query language for API. Right. So now you have a graph qL API. So to talk to him using graph QL. One of the good things is that you don't need a specific client. So you can just do a curl command, because it's just an API. So you can just do HTTP GET to get the data back. So that's handy.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That is actually handy. And you're still getting exactly what you want at that point.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Exactly. So you can really build your own client if you need.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  This is awesome thing called graph qL playground where you could just like, put the endpoint of where your G code was hosted and cut and literally how you would write the query in your code like you could just it's a clot. It's literally a client. It's very similar to what postman is before rst.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Isn't Another benefit of graph qL caching. So once you've already made a request, you don't have to make that request again, if the data is already in store,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  well, I don't know that it's you might make the request. But or and I could be wrong. Someone please correct me if I'm wrong is that you would still maybe make the request. But graph qL, the library is smart enough to know that it doesn't have to make a request to the endpoint at that point.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  So that's a really good point. So graph qL actually does not implement caching by itself. There's libraries like Apollo who do caching for you graph. qL is a specification. So it does not do caching for you. But having said that, you can implement your own caching mechanism on the resolver layer on the graph, qL layer where you can do caching. But also, if you're doing a graph qL mutation, which is a post, so by definition, it's an HTTP POST, it doesn't cache. So it throws away that data for you. Okay, so
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  graph qL I'm sold like let's, let's ship it, that's great.
  
  There's no trade offs right. Ah,
  
  so what what are some drawbacks or disadvantages to graph qL I
  
  </p>
  <p><strong>Stacy London</strong><br />
  think the biggest disadvantage that I see is that a lot of things are still being worked upon. So for example, authentication is something that you have to think about on your own. There are best practices on how to do that. So typically, it's recommended that your business logic handle authentication authorization for you. So that's one big disadvantage. The one that I faced in my personal experience was error handling. So with graph qL, everything comes back as a 200. So if you are let's say you're building a form, and you need to know what field is throwing the form error, or like what validation error is being thrown, or let's say, what are the other different types of betters 504 22,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  or 22.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  So if you need to differentiate between those, so let's say you have a REST API, underneath by geographical is throwing 200. So your graph is actually absorbing 400 and 500. So as a client, you don't know what error you're getting, until you actually like look into your error object and then Do more introspection. So there you there you have to build some sort of logic to understand what data has been coming back whether you have a success or what kind of error you have to people often build like intermediary layers to say, like, intercept all requests and check for that error object or is there like people build abstractions on that are usually you'll get like errors populated if you're getting an error. And then but that error has a 200 status code rights you don't know. So usually people will build libraries to kind of like, look into the errors object and throw relevant errors. Gotcha.
  
  </p>
  <p><strong>Jem Young</strong><br />
  That's another drawback would be it's more complex than rest like your newbie web developer understands. RASS, I think I'm trying to stop saying like things are straightforward because like was straightforward to me is honestly straightforward. I think that's really like,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  no, but it's maybe it's just that.
  
  That's also typically what we've used for a long time. Yeah, you know, it's like maybe soap was straightforward at some time. I
  
  </p>
  <p><strong>Stacy London</strong><br />
  suppose like what you're saying like we're, Russell's built on the fundamental pieces of the HTTP protocol like you drinks, they're a 500. That's a, that's a, you know, these are defined status codes that have meaning. And so if you abstract away from that, then you have to kind of know a little bit more about the web and why it works the way it does, and to make your own sort of implementation of that
  
  </p>
  <p><strong>Jem Young</strong><br />
  work to understand it's not just like, give me all the data, and then I'll parse on my side and like, screw the back end, whatever. Like, it's more work. And you have to probably, I would imagine have to coordinate more with your back end teams, which, you know, engineers don't like talking to. It's a hard job.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Yeah, usually, the first thing you do is like come up with a contract, which is called the schema and then that was a lot of collaboration. And then you can you can work independently after that. The schema is sort of like a contract that you establish in the beginning.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yeah, like at Twitch. This is a huge thing where If you want to introduce like new graph qL fields or you want to introduce new resolvers to a new like service, and you have to talk to the graph qL team, and you have to be very conscious of how you design the schema. And the schema is like, absolutely huge, like the one we have in twitches like absolutely insane. So do they have like, helpful rules for that? Yeah, they have. Yeah, they have tons of like good documentation. They have like a whole team dedicated to managing the schema and actually, like, was funny, I had to add something to the schema. And, like, immediately, there's like tons of questions of like, how is this? How is this being used? What's the expected TPS that's expected? What calls are like what clients are calling this gq wellfield etc, etc. There's there's a lot of process and I ultimately I think it is for the best but is overhead you have to go through
  
  </p>
  <p><strong>Stacy London</strong><br />
  TPS like TPS reports from
  
  </p>
  <p><strong>Jem Young</strong><br />
  I was thinking twitches
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  For throughput, throughput per second throughput per second. I like the TPS report, though. Yeah. And for those who don't please go watch Office Space.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  I think that's a good point. Because a lot of teams have to deal with that kind of like conflicts, even like if there's a one big schema. So if you're pushing user field and other teams already pushing Sofia, how do you deal with that conflict? That's a big challenge as
  
  </p>
  <p><strong>Stacy London</strong><br />
  well. I've seen, I guess, some sort of like that level of rigor on RDS endpoints, where you can't just like add, you know, whatever you want, it still has to go through like, either, you know, maybe a principal engineers to take a look at it, or somebody is kind of vetting it in some way. So I don't know if it's worse or better, or if it's about the same, like depending on the company that you work at what kind of rigor they put into their API development. One trade off, I had heard from the back end or one of the backroom teams that I had talked to, kind of pushing back against it was Oh, you know, friends, friend devs are gonna write, you know, some crazy query and it's gonna bring down our servers because it's like, you know, they don't understand the implications of the query that they're writing. And I think there is an answer to that. But I'd be curious if you've heard that kind of argument. Yeah, actually no hurt. I surprised how that's gonna work because they, they can only execute whatever you let them execute.
  
  I wonder if it's like when it's in front of existing rst. If it's in front of those, like where you're not actually swapping the back end and maybe somehow, the way that you fronted with graph qL ends up like calling a bunch of different rst API's,
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  you can call as many as much data as you want. Maybe. Yeah, that's a good point. 
  
  </p>
  <p><strong>Stacy London</strong><br />
  I don't know if that's really a valid argument based on you know, kind of what you've seen.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  I have some strong opinions. I want to say I totally disagree with that. And so for some context, Evernote was trying to move to graph QL. And then coming to twitch, which is very, very embedded into graph QL. I think, working in graph qL, it has like maybe a better engineer, and maybe more thoughtful things. Like, I'll give you a really good example. So I was shipping an AV testing experiment. And someone called out that, hey, you know, exposing this new g qL field endpoint that where you need this data for this special experiment you're doing, you don't actually need to be requesting this data all the time when you're in this period, actually, is probably going to affect your variant, right? Because requesting more data is probably going to like slow down the variant. And so in graph qL, there's this awesome thing called graph qL directives. So you can just set like a Boolean, it's like literally, like you have the query and you just put an F and you pass in a Boolean field and I just pass in, like, what if I'm in the variant, and now graph qL, just probably it's probably not auto magic. I'm sure there's like some remote over layer that handles this, but it just automatically knows that Not to request that information now, unless that variant is twice you're in that variant. So I feel it makes you more mindful, like someone who started is running. Thank you makes you more mindful of those kinds of things. That's cool.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  And that goes back to being probably a benefit in that scenario is just being a little more aware and knowing exactly what's going on with your systems more complicated, though.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yes, it is. It is a little is a handful. onboarding was a little like,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  how do you onboard? And like, how do you get ramped up as someone who's new to graph qL? Like, what are some good tools? Are there good articles are how do you best get wrapped up on graph qL?
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  I think in our team, the first thing that we give people is graphical tool, which is kind of like an interactive way of firing and mutations. So we have an endpoint and they can just fire a mutation fire query and get the data back so they can look at the data. And this is really also helpful for front end engineers who want to go and work on that data. Whereas the things that I really enjoyed when I started out was a Udemy course, by Steven grider and it is a course that is built with react. So it was really helpful because I was already in that frame of mind and building graph qL with react was really helpful, I think uses Apollo server and client or maybe Express graph qL server. So that was really cool. I think what I've another resource is Prisma which has kind of like this build for how to how to graph qL
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  how to GraphQL?
  
  Yeah, HowtoGraphQL.com And it's kind of like this quiz based approach of understanding graph qL and how it is different from rest. That was really helpful for me. Cheers.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I feel like we've been calling it out so much. Even learning from your back end counterparts as being a front end engineer is sometimes just like those conversations can really be helpful to truly understand the implementation and how it differs, typically a people migrated to it. So I'm just making Making that assumption but understand what's the differences. I feel like even just wrapping your head around that. And just think talking through with the backend engineers has been really helpful as well
  
  </p>
  <p><strong>Jem Young</strong><br />
  probably like part of a more meta discussion for rural senior engineers in the room. Like we're now seeing the evolution from the wild wild west of soap and then rest where you can kind of do whatever you want. And now a more thoughtful approach like much more so RCS like people CS degrees, or people who like taking any coursework at all like that delivered approach. You're like, Ah, my professor so slow, and he writes all these diagrams, and then we build it in like, let's just build it now. For moving away from that to be more deliberate, more thoughtful, like, for doing real engineering, and you have to have conversations people have like, I've heard the word schema since like college No.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  But you hear it so much more. You're right now we're dealing with it maybe I've heard a little bit sometimes without different databases, everything but yeah, you're right now this has become no we're back to calling that out.
  
  </p>
  <p><strong>Jem Young</strong><br />
  It's like really interesting to watch from, like stepping back and like seeing our As it as a group of people like as web developers, we're evolving and like, being more CS focused and being like, more deliberate in our approaches, rather than the old days of whatever.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I mean, if you think okay, like thinking back to an old website, let's look 20 years ago, an old website definitely had JavaScript. It was like a drop down menu, or crazy animation that probably shouldn't have been there. But like, there weren't a lot of interactions that needed to happen. The now is becoming more sophisticated, and we care. We're using it more and more and more. And so that's where those principles probably have to come into places for scalability. But it's it's interesting. We've had this discussion before about like, what is a lead engineer like what is a UI engineer,
  
  </p>
  <p><strong>Jem Young</strong><br />
  when you have someone like security or I guess, graphical experts, that's very different from being six SS groups, but we're all web developers, and they're just like, very different problems to think about and I wonder where the industry is gonna go in the future as we think like UX and accessibility is very different from like being an expert, like how to interface with backends, and things like that. But we're all web developers, which is, I don't know, doesn't really make a lot of sense now.
  
  </p>
  <p><strong>Stacy London</strong><br />
  2020 is blurring, blurring a lot.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  It's like web engineering.
  
  </p>
  <p><strong>Stacy London</strong><br />
  Yeah. Yeah. Like I just, you know, since coming out here in the last three years started working with like Redux and all these things. And you're talking schemas using, you know, normalizer and denormalizing. And, and doing entities and all this stuff. And I'm like, Am I a database?
  
  from a database admin in the browser, like, Oh, those things come in handy. I did them a really long time ago, and they're coming back.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Wait till you write a GraphQL resolver.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That sounds like a fun challenge. So I'm sold. I want to convince my team that this is the greatest thing in the world, and we should implement graph qL tomorrow. This applies to probably many, many technologies. We've all been there. Really Yes, this is so cool. How do I convince my team?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  I would start with showing them graphical.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  So I don't have too much experience in this. But I did hear a common migration strategy for people who are typically on just say it rest.
  
  REST endpoints.
  
  They're typically on that you can wrap graph QL. On top of that. I don't know too much about it. But it's been a common migration strategy. A lot of people I've heard used. So that's something I mean, this isn't going to sell this is assuming you've already sold them that graph close. No, no. But
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I want to do, though, yeah, is it you don't have to stop all work and just do this. You can do it a little bit piecemeal, and get to that point. I mean, that was always a selling point to me for react is that you don't have to ship your entire application. That might be one approach. You could do that. But you don't necessarily have to you can start to sprinkle it in. I think that is actually a very good selling point and can be very helpful.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Yeah, a lot of companies implement graph Whereas an orchestration, they're just like you mentioned. So they let's say you have five different API's. And then you build a graphical layer on top of a structured decider for API's. Now these five different API's are pulled off into other like two or three different API. So there's like a bunch of those downstream API. And towards the end, when you have this graphical endpoint, you're actually like only talking to the data that you need. So you can show your back end engineers that you're sending me this data, but I'm only surfacing this data. So let's talk about converting your API into graphical API. So you are in fact, continuous data and surfacing.
  
  </p>
  <p><strong>Jem Young</strong><br />
  That's another selling point. And it was actually Brian whole rip.
  
  said to me, I think Brian Holt said it but it was actually a react rally when I first met Ryan Burgess and Brian, but he was even presentational falcor which is same concept, different approach to it. But conceptually, they're the same idea of like just getting data that you want, how their implant is like wildly different, but the idea of holds in if you're trying to sell to your team, you feel like Facebook and Netflix, both two companies didn't talk to each other came up with the same idea. And like, so there's something to it at scale about of accessing data in this way. And that's a strong selling point. For me. If I was at a smaller company, it's like,
  
  </p>
  <p><strong>Stacy London</strong><br />
  the idea is so good. I wonder too, like a way to sell it. And this is more of like reactionary instead of like proactive. But if you're at a point where your app is like you're running into, like memory problems or limits, you're like storing a ton of data, you you've built this app out for a long time. And suddenly you're like, Oh, we keep keep hitting memory limits. And it's hard to understand where all this data is being used. We don't even know if it's all being used. That might be a way to say like, oh, let maybe we can switch to something that lets us be more selective about the data and maybe run like, some, I don't know, figure out some how to do an inventory to here's all the data that's in our like, local data store the browser, are we actually even using all of that if it's just extra data No, that is not being used, that might be a way to like mitigate performance problems. And that's the way people like people like me say, like, I'm gonna fix a performance problem faster.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Yeah. That's a great insight on me. Yeah, we care about performance fixing the memory footprint. Yeah.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yeah, I kind of want to piggyback on that, on that. My viewpoint is also kind of reactionary, but just seeing like, the benefits you can get out of having a fully fledged web app that integrates very well with graph QL. It's, it's honestly magical. Like I think one of the things that was like blew my mind when coming to twitch is they actually have error reporting on the component level of let's say, for example, a component is getting a bunch of errors. Because some graphical endpoint is getting hit. We can like we know about like, which component is literally doing that, because we use the higher order components that Paulo gives us, or maybe made our own higher order components where that when that component re renders who will make a request Well, so we like know that in our logs,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  oh, that is really cool. So you're catching things like alerting on that?
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  Yeah, actually yeah, we get like monitoring and errors of like, not just like what graph qL field is getting this is doing this, but also like what component guys like making that request is doing that too. So it's like really, really powerful. It can catch like stuff like, oh, there's components like over rendering, etc, etc. Hmm,
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  I think another selling point is like if you're a team that ships out there pretty frequently to your endpoints. So let's say you have a v1 and then you're shipping on v2 and v3. Quickly end up in a point where you're like we 16
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  No,
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  really. So that's cool. You have one endpoint so it's really good for teams that ship pretty fast on need to get rid of fields pretty fast. So deprecation and adding to your API becomes very easy with graph QL. That's huge.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Honestly, that in itself, that problem like I laugh because oh my god. is a huge problem. And it takes a lot of coordination, which version are you talking to? That becomes a huge tax, especially on large applications. So that's a huge selling point. How do
  
  </p>
  <p><strong>Stacy London</strong><br />
  you sell it to the back end team? I feel like it's easier to sell it to the front end group, because they're all like, yeah, of course, I just want this type this amount of data that I need for this component. But I found that it's, it's been more difficult to try and sell it to the back end engineers, their tips on like,
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  I think, honestly, I would show them the instrumentation capabilities that graph qL brings. Like, knowing what data is being used by how many clients is so powerful. That has been our biggest selling point for back end engineers and and the ability to ship as much data as you want with without having to version your API has worked really well for us at PayPal. So with graph qL, you also get type system for free. So basically, like let's say you're implementing like a form rate, and you have If you have a field, which is which is supposed to be a number field, but people can enter whatever they want, because it's a field, right? So with graph qL, you get that for free. So if you specify a string, they can only send an string. So as a front end developer or as a back end engineer, you don't have to do the validation on the data that you're giving back. So graph qL will do a free for free
  
  graph. qL plays extremely well with TypeScript or something like, there's like how I mentioned this gigantic schema file for us. Like we have one that kind of auto generates, it creates all the TypeScript types. But ends up happening is it gets really massive. And there's, if you actually dig into this, there's tons of knows because every little field you can optionally request, this was just like, no, no.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  That's a benefit that it works really well with implementing TypeScript, which site more and more front ends are doing. And so that just becomes a lot easier that you're like, yeah, I have a strict type that's coming back from graph QL. So that is it. Nice little benefit to all right? Well in each episode of the front end happier podcasts, we'd like to share pics with our listeners things that we've enjoyed and hopefully that you will all enjoy as well. Let's go around the table and share today's pics. Stacey, you want to start it off? Sure. I don't have any fun graph qL picks but I
  
  </p>
  <p><strong>Stacy London</strong><br />
  have my very standard music picks. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Everyone enjoys them so much!
  
  </p>
  <p><strong>Stacy London</strong><br />
  Thank you.
  
  First one is this one's very funny. I think the name of the song and I think the name of the artist is mineria by erasing that's gross sounding name sounds like a disease. But it's a it's a tract from erase tapes, which is a music label that I really like. This song and title was in what I think basically there was symbols, which I translated as Morse code, so it's actually quite difficult to even figure Like, I still don't know who the artist is. So if anybody listening can figure out like who the artist actually is. please tweet me to tweet us. That'd be awesome. It's a really great track very electronic, as always. The next one is called song for the passing by shelf money. It's a new they just released a new album. So that's one of the new tracks from that. And that Yeah, the whole albums. Excellent if you want to listen to that while you code. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Nice. Jem. It's been a while. I hope to hear some Valley Silicon.
  
  </p>
  <p><strong>Jem Young</strong><br />
  I've got one. I've got one. Let's see. My first pick is Thursday group. I think they're based in Brooklyn. They're just called the mischeif crew and they just do random stuff and random I mean, today, they just released something that lets you stream on HBO, Netflix, Hulu, Amazon Prime and a bunch other services and just said like, check it out. You can pick any channels, but they're like check it out before they take it down and they just like do random stuff like this for Christmas. They release like a toaster bath bomb it's like a bath bomb in the shape of a toaster. I bought it.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  How much does it cost you?
  
  </p>
  <p><strong>Jem Young</strong><br />
  like $30 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  oh man that might be up there in the Valley Silicon. 
  
  </p>
  <p><strong>Jem Young</strong><br />
  Do you know how much they cost? 
  
  </p>
  <p><strong>Stacy London</strong><br />
  too much yeah
  
  </p>
  <p><strong>Jem Young</strong><br />
  yeah all right okay so it's just
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  funny that is pretty cool though I would pay that for
  
  </p>
  <p><strong>Jem Young</strong><br />
  So what they did was they created a and this like highlights their kind of insanity they created a generative generative adversarial network to create foot pictures so if you text them they will send you a random computer generated foot picture I'll give you a hold an example I noticed great podcasting there they just like if you text a number, they will send you feet pictures that aren't real. They're just created by computers. Oh, that's not real. No, none of these are real. Oh weird. But there's absolutely no point to this like To what end create fake foot pictures. I don't know. They are Yeah,
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  it looks more real than my feet.
  
  </p>
  <p><strong>Jem Young</strong><br />
  But it's called this foot does not exist. Calm, like hazy. It's a lot of fun. This whole crew is like, just really enjoyable follow. I don't know what their specialty is, like, clearly they're really good at Tech, but they do just a bunch of random stuff. And like, they're just a lot of fun. Like, I love
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  it. It's kind of like take street art graffiti and applying it mischievious things to do online. It's kind of cool. I love it like that.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Yeah, their last one they sent me was they send out a package. I didn't get it in time, but like, they send you a package and they're like inside it's worth either from something zero to $50,000. But if you open it, you don't get the you don't get the money. But if you wait a year and you send it back to us, we'll pay you $10,000 or something like that, like, but you have to decide then if you wanted to open the package or not, and then they'll pay you like they're just crazy. It's just it's it's a lot of fun. They're worth following along but anyways, that's that's my perspective. Yeah, you know, you find the string stuff on. My second pick is by sruti, a dev jokes. Shoot, there is a GitHub repo with a bunch of jokes that are specifically aimed at a technical audience. They're nerdy in any other context, a bit nerdy, but because, you know,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  we're all here together and 100 I think, I mean, we've heard a couple of them and I would say, I can attest to how funny they are. They're great. Can we hear one just
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  by chance?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  I have a question for all of you. Okay. Okay. All right. Why couldn't the React component understand the joke?
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  I'm stumped.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Didn't get the context.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  So yes, I think this is a great pick, because there's many more that you can definitely get. That was pretty good.
  
  </p>
  <p><strong>Jem Young</strong><br />
  These are all like real life baseball. Like I can't live in Alaska. But you do you do, but don't touch your face right now. Just don't yeah. Oh yeah.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  I can't.
  
  </p>
  <p><strong>Jem Young</strong><br />
  And for my Valley silicon pic, I was surfing the web. And I saw like, I'm bored. I'm bored. I'm bored you know you end up like 50 links deep and up on Indiegogo. Indiegogo has a site called production ready that is Indiegogo similar to Kickstarter where you could fund projects, etc etc. I don't really believe in Indiegogo or Kickstarter. I know everyone's gonna send me hate mail and be like, I got one good product off that but like, a lot of these are just scams and they're scams and stuff nicely. So anyways, Indiegogo has a production ready site. If you go to Indiegogo school production ready, you can see all these like ready to go funded projects, check out the comments on most of them. And they're all like, I never got my products. This thing doesn't work. And like, this is Valley silicon right now because like why do people keep investing these things I like they have their backing. They're not backed by Indiegogo. It's just like if I create a video and a nice product page and then I tech specs or whatever, people give you money, and they keep giving people money and like that is Valley silicon in a nutshell, like these gadgets that you probably don't need.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  You're not getting them and you're
  
  </p>
  <p><strong>Jem Young</strong><br />
  not even worse. And you're like, no, it's probably like 5050 a scam but and then people get really upset, what's a scam? And I'm like, you kind of knew what you're getting. Like, I don't just go on the site, read the comments on the page about like, how they even got their product in three years. And then like these people shut down and like, open up a new thing. Like, it's the newest, greatest thing. Anyways, that's just like, I just want you to see it for yourself. I mean, just pick a random one. Let's see, oh, this is a real time Google Translate. Alternative. Wait, let's see how much did it cost?
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Why man, Google Translate works.
  
  </p>
  <p><strong>Jem Young</strong><br />
  Google Translate does work. Let's see. Oh, so for $70 you can have a real time Google Translate clone that instantly translates things for you.
  
  </p>
  <p><strong>Stacy London</strong><br />
  Google doesn't know where you are, who you are, what you're doing. It's just fair.
  
  </p>
  <p><strong>Jem Young</strong><br />
  For $70 What did you think you're gonna like this thing. Very, very, very, very hard problem. Yes. Do you think they solved it for $70? No, but like the comments page is just full of angry people who have not got the product.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  What did you think was gonna end up and the person that created enrolling in Lamborghini they're like,
  
  </p>
  <p><strong>Jem Young</strong><br />
  in any Governor's like, we got our money? Like we have nothing. We're just a middleman. We have nothing to do with you. Anyways, yes, that's my moral on funding things. It's like what did you think was gonna happen?
  
  </p>
  <p><strong>Stacy London</strong><br />
  Do you remember that potato salad thing? Oh, I do.
  
  </p>
  <p><strong>Jem Young</strong><br />
  shower. So funny.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Elaborate.
  
  </p>
  <p><strong>Stacy London</strong><br />
  Like on Kickstarter. Yeah, it was fun. Me and I'll make you some potato salad. Yeah.
  
  </p>
  <p><strong>Jem Young</strong><br />
  And it like blew up years and he's like, I can't possibly make this much became a thing. There's this Reddit thread.
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  I I don't know the full context.
  
  But for people who don't have context, someone started a Kickstarter that literally was a potato salad. And it said in the description, honestly, it's might not even be that good. I'm just trying to make a salad and someone put it on Reddit and it just like went viral. kind of blew up. And this guy kept adding like perks and benefits like Alright, well, I have like
  
  $500 I guess you know, anyone who comes to this address, have potato salad or I'm adding some bacon to it and how
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  all right. Wow, this is just incredible. I mean, that's the power of the internet, which I love. So yeah,
  
  </p>
  <p><strong>Jem Young</strong><br />
  Brian, I love what you said, Who's paying for this stuff? Exactly. Why are people still there? Anyways, I'm done.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  All right, got this. What do you have for us?
  
  </p>
  <p><strong>Augustus Yuan</strong><br />
  All right. Let's see. So my first big is it's not specifically this product, but it's just the idea of it. I didn't realize there's these things called USB switch selectors. So we're starting a lot of people are starting to work more remote now. And one thing that's really annoying is GM home I have these two monitors hooked up to like my gaming PC, and if I want to like plug in my Mac after re plugging everything, so this is just a convenient USB switch selector. Very surprisingly, he has four USB drives, press a button, and you can just make it go to a different computer. So I think it's just very convenient. So you have if you wanted there, and then my second pick is a go package called go replay. And so we don't use this at twitch per se. But I guess the context is if you have micro services and you want to test traffic and load, let's say you have massive amounts of traffic you want to mock. What this package does is actually records live data that your service gets, and then it saves it and you can replay it for testing purposes. So it's pretty cool. So I was pretty cool. So check it out. shirty,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  what do you have for us?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Okay, I have four different categories. Oh. So for the first category crafco I want us to take a course by Steven grider. The complete Developer's Guide. This is the course I was talking about. It's on YouTube. To me, things like $10 pretty helpful helped me a lot. The next two are two tools, graphical playground and graphical that you can use to play around with the graphical API. It's up and running on the GitHub website. So pretty easy to check it out. The second one is a book. It's called Big Magic, creative living beyond fear by Elizabeth Gilbert. And if you're feeling burnt out, or not feeling inspired, this book helped me a lot. So it might help you. The next one is for my girlfriend's. It's called Revlon hot airbrush. So if you're anybody like me, who has a lot of hair, and cannot do the blowout, but loves blood, this is super cool. It's basically like a hairdryer mixed with the brush. And it reduces your blood down to like 20 minutes, gives you a sick law.
  
  </p>
  <p><strong>Jem Young</strong><br />
  So what is a blowout? I am not fashionable
  
  Unknown Speaker  
  blow out. dry your hair,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  your beard, man.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Like when you blow dry your hair. Okay? Make you go to a professional salon and you get to 670 bucks. It's
  
  </p>
  <p><strong>Stacy London</strong><br />
  more than just an air drying roll. It's more like brushing it and drying. It's like yeah,
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  it's more a little more foofy right. Okay, yeah,
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  say what I have right now. Oh, okay, and it's super cheap. It's like $56 it's not super cheap, but not that bad.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Not not Valley Silicon.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  And it's helped me a lot like, I, I am the worst at blow drying but this has helped me a lot. And my last pick is the Netflix show dark. Oh, pick German show about. I don't want to say about one. But
  
  </p>
  <p><strong>Jem Young</strong><br />
  I will set it to you
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  can't really just go watch it if you can. It's amazing. What's the genre? It is kind of sci fi thriller. sci fi thriller. If you're not a huge sci fi fan, I still think it's one of those ones where it is sci fi but you you'll still like it. feel like there's people out there who are Yeah, I'm not a big sci fi fan and I'm still like, This show is good.
  
  </p>
  <p><strong>Jem Young</strong><br />
  I recommend watching with a partner because like, it's it's in German. And it's, it's it's a very complex storyline and it helps to have someone there like, Who's that person like, Oh,
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  please watch the pilot mazes.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Yeah. You know, also really cool. I have one of the dark jackets. The yellow. Yeah.
  
  So cool. Yeah, it's very specific. Only certain people get it. It says dark, like really tiny on it. All right. I have two picks not graph qL related either one is actually a podcast. What? Yeah, I know. I know. I'm. I mean, that's a pretty good podcast. This one might be better.
  
  Because
  
  it's a heist podcast. Oh, I mean, come on. Who doesn't love a good high story, right? I mean, this podcast is amazing. I just gotta call it out. It's two guys in LA that are there. What they're doing is talking about heists that have happened in the past. Like they go like really long years ago that this has happened to five years ago a couple years ago. They do their research and they go very deep on the podcast. They also talk about little segment in each episode, they talk about a couple that are in the news that have recently happened. Like one that I just remember hearing was three men doing a armed robbery for stealing 200 and some dollars worth of toilet paper. Unfortunately, because of the Coronavirus, toilet papers become a thing. And so, this This podcast is really good. They have a lot of good commentary. It's just really good. I really have enjoyed it. I've been listened to a bunch of them. And then my second is a book I listen and read a few different books on children. Obviously having a kid this one I feel like I'm calling it out because it's a good book that helps you with your life in general. It's Oh crap, I have a toddler. It's so good. Good in the sense that it helps with understanding how to help manage your time, but also to help with your child. I've learned so much. It's like a game changer. So highly recommend if you have a toddler listen to it, but I honestly feel like it even applies some of the Tim Ferriss methodology of 8020 and the whole like more hour work week. So I mean, maybe if you don't have a child, just go listen to the four hour workweek kind of applies to but such a good book. It's really good. Jim, you're gonna hit this point. I will be buying you a copy of this book. Yeah. All right. Well, before we end the episode, I want to thank surety for joining us where can people get in touch with you?
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Thank you for having me. If people can get in touch with me on Twitter. I'm on Twitter <a href="https://twitter.com/shrutikapoor08">@shrutikapoor08</a>. I am also on GitHub with my dojo people should
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  everyone go check out this dad joke repo. I was telling her earlier She needs a Twitter bot. That's like just a Twitter account. That is just every day we get one of these jokes. I would definitely follow That account. Maybe someone out there will create that for you. Yeah, that'd be great.
  
  </p>
  <p><strong>Shruti Kapoor</strong><br />
  Please do.
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Thank you all for listening to today's episode. You can check us out at <a href="https://frontendhappyhour.com">FrontEndHappyHour.com</a> I was gonna call it the website. Some people didn't even know we had a website so we do FrontEndHappyHour.com. And you can subscribe to us on Spotify apple. I don't know, Google podcasts, whatever it is. And you can also follow us on Twitter at <a href="https://twitter.com/FrontEndHH">@FrontEndHH</a>, any last words?
  
  </p>
  <p><strong>Stacy London</strong><br />
  I'm gonna read a sticker that she has on her laptop. It says I heard it on a podcast everyone. 
  
  </p>
  <p><strong>Ryan Burgess</strong><br />
  Love it.
  </p>
  
  
  
  `;
  return transcript;
};