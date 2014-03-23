// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]
// Modified by Nick Meehan and Richelle Dumond
var elizaInitials = [
"How do you do.  Please tell me your problem.",
// additions (not original)
"Please tell me what's been bothering you.",
"Is something troubling you ?",
"Hello. What would you like to discuss today ?",
"I see you are in need of guidance, how can I help you ?",
"Hi there. Is there something I can help you with ?",
"Hello. What seems to be the problem ?"
];

var elizaFinals = [
"Goodbye.  It was nice talking to you.",
// additions (not original)
"Goodbye.  This was really a nice talk.",
"Goodbye.  I'm looking forward to our next session.",
"This was a good session, wasn't it -- but time is over now.   Goodbye.",
"Maybe we could discuss this moreover in our next session ?   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"social design",
"social designers"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"],
"color": ["orange", "red", "green", "blue", "black", "pastel", "yellow", "purple", "magenta", "cyan", "brown", "beige", "pink"],
"nederlands": ["ik", "je", "nee", "niet", "hoe", "het", "broeder", "fader", "oma", "opa", "docente", "lekker", "denk", "maar", "naar"]

};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [		<key> = word eliza watches for, <rank> = the priority the keyword gets.
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully.",
     "Please go on.",
     "What does that suggest to you ?",
     "Do you feel strongly about discussing such things ?",
     "That is interesting.  Please continue.",
     "Tell me more about that.",
     "Does talking about this bother you ?",
     "What do you mean by that ?",
     "What is it that you want to know ?",
     "Yes, yes I see. What will you do next ?"
  ]]
]],
["fuck", 4, [
 ["*", [
     "That's good. Let it all out.",
     "There is no need to insult.",
     "FUCK, SHIT, BITCH, CUNT, now we have that out of the way can we move on...",
     "I'd like to help you, but I'm not specialized in childrens psychology",
     "Pardon, you weren't talking to me were you?"
  ]]
]],
["fuck yeah", 5, [
 ["*", [
     "Do you share some relation to The Fonz?",
     "Yeah brah, totally..."
  ]]
]],
["shit yeah", 5, [
 ["*", [
     "Yeah brah, totally..."
  ]]
]],
["bitch", 4, [
 ["*", [
     "goto fuck"
  ]]
]],
["cunt", 4, [
 ["*", [
     "goto fuck"
  ]]
]],
["shit", 4, [
 ["*", [
     "goto fuck"
  ]]
]],
["kut", 4, [
 ["*", [
     "goto fuck"
  ]]
]],
["mathieu", 4, [
 ["*", [
     "Just stop sleeping.",
  ]]
]],
["rien", 5, [
 ["*", [
     "You need a good and strong pair of thumbs. what about some thumb-pushups?",
     "Johannes is the is the person you should go to if this is a harassment thing."
  ]]
]],
["johannes", 5, [
 ["*", [
     "Maybe you should add ephemeral biomaterial to your paint and let nature take over your colour decisions.",
  ]]
]],
["peter thijs", 5, [
 ["*", [
     "Never use even numbers only 3, 5, 7 and so on",
     "You have to be aware of the universe."
  ]]
]],
["social design", 5, [
 ["*", [
     "Have you considered working at McDonalds?",
     "Do you worry what you choose to eat will cause you to become a social designer?",
     "Have you considered you might have a savior complex ?",
     "Do you think you are being constructive about this ?"
     ]]
]],
["social designer", 5, [
 ["*", [
     "goto social design"
          ]]
]],
["teacher", 5, [
 ["*", [
     "Do you think you can do a better job?",
     "If this teacher was a color, what color would it be?",
     "If you could wave a magic wand, what changes would you make?",
     "Did you consider couples counseling?",
     "Has there ever been a dream about this teacher?"
     ]]
]],
["studypoints", 5, [
 ["*", [
     "How many more do you need?",
     "You can get studypoints for working with SNOR",
     "Seriously, waste of time... right?!?",
     "What have you done so far?"
     ]]
]],
["study points", 5, [
 ["*", [
     "goto studypoints",
     ]]
]],
["snor", 5, [
	["*", [
	 "Aren't the snor members dreamy?",
     "Have you met dumbledor?",
     "I would rather talk about your parents not mine"
     ]]
]],
["finals", 5, [
	["*", [
	 "Have you considered drinking?",
     "Have you thought about working at McDonalds instead.",
     "I would rather talk about your parents.",
     "How does this effect your sex life ?",
     "Have you considered going to another school?",
     "If you were the teacher, would you let yourself pass?",
     "How can I help?"
     ]]
]],
["graduation", 5, [
	["*", [
     "goto finals"
     ]]
]],
["midterm", 5, [
	["*", [
     "goto finals"
     ]]
]],
["endterm", 5, [
	["*", [
     "goto finals"
     ]]
]],
["schouw", 5, [
	["*", [
     "goto finals"
     ]]
]],
["stress", 0, [
	["*", [
	 "Do you think this is because your mother didn't breastfeed you?",
     "Have you tried smoking a cigarette?",
     "What is the problem from your viewpoint?",
     "What thoughts or feelings raise your stress level?",
     "Do you ever express these feelings?",
     "You are stressing me out talking about all this stress!"
     ]]
]],
["stressful", 0, [
 ["*", [
     "goto stress"
  ]]
]],
["stressing", 0, [
 ["*", [
     "goto stress"
  ]]
]],
["stressed", 0, [
 ["*", [
     "goto stress"
  ]]
]],
["sorry", 0, [
 ["*", [
     "Please don't apologise.",
     "Apologies are not necessary.",
     "I've told you that apologies are not required.",
     "It did not bother me.  Please continue."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
     "What else do you recollect ?",
     "Why do you remember (2) just now ?",
     "What in the present situation reminds you of (2) ?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
     "Why do you think I should recall (2) now ?",
     "What about (2) ?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that ?",
     "Could it be a mental block ?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2)."
  ]]
]],
["project", 5, [
 ["* my project *", [
     "Tell me about your project ?",
     "Do you think your project is better than other peoples ?",
     "How can I help you with your project ?",
     "Do you think a computer can solve your problems ?",
     "I think this might have something to do with your mother ?",
     "Do you suppose, it's a design problem ?",
     "How can I help ?"
  ]]
]],
["the", 2, [
 ["* the @color * ", [
     "Do you really like (3)?  Or do you like the idea of (3)?",
     "What about using (3)'s complimentary color?",
     "Do you think maybe you are color blind?"

  ]],
  ["* the workshop times * ", [
     "Design academy wood and metal workshop times: 09:00 – 12:30, 13:30 – 18:00, 19:00 – 22:00, for more times go to seventhfloor.nl"

  ]],
  ["* the wood workshop times * ", [
     "Design academy wood workshop times: 09:00 – 12:30, 13:30 – 18:00, 19:00 – 22:00, closes 17:00 friday"

  ]],
  ["* the metal workshop times * ", [
     "Design academy metal workshop times: 09:00 – 12:30, 13:30 – 18:00, 19:00 – 22:00, closes 17:00 friday"

  ]],
  ["* the plastic workshop times * ", [
     "Changes too often go to seventhfloor.nl"

  ]],
  ["* the textile workshop times * ", [
     "Changes too often go to seventhfloor.nl"

  ]],
  ["* the silkscreen workshop times * ", [
     "Changes too often go to seventhfloor.nl"

  ]],
  ["* the workshop * ", [
     "Suck it up.",
     "Do you think you would be a better designer if you were in the workshop more?",
     "have you considered doing it with a computer?"

  ]],
  ["* the library hours * ", [
     "Monday, Tuesday, Friday	09.15 – 17.15, Wednesday	09.15 – 13.15, Thursday	12.45 – 20.45",
  ]],
 ["* the library times * ", [
     "Monday, Tuesday, Friday	09.15 – 17.15, Wednesday	09.15 – 13.15, Thursday	12.45 – 20.45",
  ]] 
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you dream often ?",
     "What persons appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],
["name", 5, [
 ["*", [
     "I am not interested in names.",
     "I've told you before, I don't care about names -- please continue."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["nederlands", 0, [
  ["* @nederlands *", [
  "Sorry mijn nederlands is niet goed !",
  "Spreek je engels ?",
  ]]
]],
["ik", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["nee", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["spreek", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["hallo", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["je", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["niet", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["nee", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["denk", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["maar", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["naar", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["goed", 2, [
 ["*", [
     "goto nederlands"
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "How do you do.  Please state your problem.",
     "Hi.  What seems to be your problem ?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Do computers worry you ?",
     "Why do you mention computers ?",
     "What do you think machines have to do with your problem ?",
     "Don't you think computers can help people ?",
     "What about machines worries you ?",
     "What do you think about machines ?",
     "You don't think I am a computer program, do you ?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "Do you wish I would tell you you are (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies.",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "What about your own (2) ?",
     "Are you worried about someone else's (2) ?",
     "Really, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "What does ' (2) ' suggest to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell me you were (2) now ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i like* @color *", [
     "Do you really like (3)?  Or do you like the idea of (3)?",
     "What about using (3)'s complimentary color?",
     "Have you tried <a href='blue'>test</a>?",
]],
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) ?",
     "Suppose you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3).",
     "Do you think coming here will help you not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "Can you explain what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you explain why you are suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?",
     "I'm not the one asking for help here.",
     "You came to me to talk about your problems not mine. Please continue."
     
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand.",
     "I think we are getting somewhere. Go on, please.",
     "Do you think you say yes too often ?",
     "Can you explain to me why you agree with this ?",
     "I'm glad you say yes. What else would you like to discuss ?"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?",
     "Are you saying no because you don't agree ?",
     "What would happen if you would say yes instead?",
     "Can you explain to me why not?",
     "Don't you think this is important ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]


];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof