const initial = {

  films: [],

 


}



// const initial = {
//   films: [
//     {
//       "id": 1,
//       "name": "Legend",
//       "year": 2015,
//       "synopsis":
//         "(2015) Tom Hardy plays both lead roles in this biopic, by turns humorous and brutally violent, of London gangsters Ronnie and Reggie Kray. With Emily Browning. Very strong language.",
//       "imdbUrl": "https://www.imdb.com/title/tt3569230/",
//       "tmdbImageId": "nXXI1MCJ0ugMetJ5Qn7ofDXANxf",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "23:35",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "name": "Mission: Impossible - Ghost Protocol",
//       "year": 2011,
//       "synopsis":
//         "Secret agent Ethan Hunt and his team are implicated in a bombing at the Kremlin, forcing the American president to declare them fugitives. The spies plan to clear their name by abducting the real terrorist, which leads them into a pursuit around the globe. However, Hunt cannot be sure his colleagues are trustworthy. Action adventure sequel, starring Tom Cruise, Jeremy Renner, Simon Pegg and Paula Patton.",
//       "imdbUrl": "http://www.imdb.com/title/tt1229238/",
//       "tmdbImageId": "s58mMsgIVOFfoXPtwPWJ3hDYpXf",
//       "tmdbRating": 67,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "23:35",
//           "channel": "Channel 4"
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "name": "Xmoor",
//       "year": 2014,
//       "synopsis":
//         "Wilderness survival scares. When a local paper offers a big reward for film of the fabled Beast of Exmoor, two young documentary makers go on the hunt for a monster. (2014)",
//       "imdbUrl": "https://www.imdb.com/title/tt3293138/",
//       "tmdbImageId": "bY8dAVhn530m6dhxyGS593WKYWD",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "22:40",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 4,
//       "name": "A Christmas Song",
//       "year": 2012,
//       "synopsis":
//         "Two schools are merged, and rivalries develop between students and staff. The music teachers from the two schools realise that only one of them will be kept on as they coach their choirs for a televised singing contest - but their professional and artistic conflicts are complicated by their growing feelings for each other. Romantic drama, with Natasha Henstridge and Gabe Hogan.",
//       "imdbUrl": "http://www.imdb.com/title/tt2376246/",
//       "tmdbImageId": "r3O2Os2HkDTYduhpVLzXI6HrIni",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "23:00",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 5,
//       "name": "Ted",
//       "year": 2012,
//       "synopsis":
//         "A lonely boy makes a wish at Christmas that his teddy bear will come to life, which is magically granted. The boy grows up to become a directionless slacker, with the foul-mouthed living toy still his inseparable friend - but his girlfriend thinks it is time for him to grow up. Comedy, starring Mark Wahlberg and Mila Kunis, directed by and featuring the voice of Seth MacFarlane.",
//       "imdbUrl": "http://www.imdb.com/title/tt1637725/",
//       "tmdbImageId": "yLdP2vDa1BqxLSbikGypGtAEOGe",
//       "tmdbRating": 64,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "23:05",
//           "channel": "E4"
//         }
//       ]
//     },
//     {
//       "id": 6,
//       "name": "100 Rifles",
//       "year": null,
//       "synopsis":
//         "1969. War. Director: Tom Gries. Stars Raquel Welch, Burt Reynolds, Fernando Lamas & Jim Brown. In 1912 Sonora, Mexico, revolutionary, Yaqui Joe, arms his people but finds himself hunted by a US lawman",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=100+Rifles",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "22:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "00:15",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 7,
//       "name": "Battle of the Pacific",
//       "year": 2011,
//       "synopsis":
//         "A Japanese officer and his men stationed on the island of Saipan refuse to accept their nation's surrender at the end of the Second World War. They continue to mount a guerrilla campaign against Allied forces from their mountain hideout, and acquire hundreds of civilian followers ready to die for their cause. Drama, starring Yutaka Takenouchi and Sean McGowan. In Japanese and English.",
//       "imdbUrl": "http://www.imdb.com/title/tt2197246/",
//       "tmdbImageId": "6IOzbC4okaBRtLcyQzB6e87YQgl",
//       "tmdbRating": 50,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "22:00",
//           "endssAtDate": "2017-12-06",
//           "endsAtTime": "00:10",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 8,
//       "name": "The Lookout",
//       "year": 2007,
//       "synopsis":
//         "A teenager's promising future is cut short when a car crash leaves him with brain damage that affects his memory. Taking a job as a janitor at a bank, he falls under the influence of crooks led by a former school friend. However, as he becomes aware of their plan to pull off a robbery, he makes a desperate attempt to stop them. Drama, with Joseph Gordon-Levitt, Jeff Daniels and Isla Fisher.",
//       "imdbUrl": "http://www.imdb.com/title/tt0427470/",
//       "tmdbImageId": "jSJca1tqlj08fGeqngTmr4UJ9ON",
//       "tmdbRating": 67,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "22:00",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "23:40",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 9,
//       "name": "The Dictator",
//       "year": 2012,
//       "synopsis":
//         "The tyrannical ruler of a North African nation travels to New York to address the United Nations, but he ends up stranded in America after a failed assassination attempt masterminded by his brother. He accepts the hospitality of a human rights activist unaware of his identity as he plots his return to power. Comedy, starring Sacha Baron Cohen, Anna Faris and Ben Kingsley.",
//       "imdbUrl": "http://www.imdb.com/title/tt1645170/",
//       "tmdbImageId": "uAvG211cGNKSFyPzXFVMZzjkBB8",
//       "tmdbRating": 59,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "22:00",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "23:10",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 10,
//       "name": "Step Brothers",
//       "year": 2008,
//       "synopsis":
//         "Even at their most obnoxious, Will Ferrell and John C Reilly are strangely adorable together. Their on-screen chemistry was key to the success of Talladega Nights and they capitalise on that spark in this equally zany comedy, reteaming with director Adam McKay. Brennan (Ferrell) and Dale (Reilly) are a couple of 40-something losers who still live at home. All the gags rest on how these burly men act like spoilt children when their parents (Mary Steenburgen and Richard Jenkins) get hitched. They draw battle lines in the room they're forced to share, staring each other down at bedtime and trading peculiar (and phenomenally vulgar) insults - it's these elaborate exchanges that get the biggest laughs. But things do get a little weird and creepy as the gross-out moments get ever grosser, and the film's one joke is rather overstretched. Thankfully, Adam Scott shakes things up as Ferrell's overachieving brother - a bit like Tom Cruise on a sugar buzz. Of course it's totally juvenile, but that is, after all, the point.",
//       "imdbUrl": "http://www.imdb.com/title/tt0838283/",
//       "tmdbImageId": "tDFNUuYkQ4ZeAlrBHeTtimAumXo",
//       "tmdbRating": 67,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "22:05",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "22:40",
//           "channel": "ITV 4"
//         }
//       ]
//     },
//     {
//       "id": 11,
//       "name": "Hot Tub Time Machine 2",
//       "year": null,
//       "synopsis":
//         "Starring Rob Corddry and Craig Robinson, 2015. Comedy sequel. When Lou is shot, his son Jacob and pal Nick jump in the hot tub to prevent it from happening.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Hot+Tub+Time+Machine+2",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "22:05",
//           "endssAtDate": "2017-12-03",
//           "endsAtTime": "23:00",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 12,
//       "name": "Exam",
//       "year": 2009,
//       "synopsis":
//         "Eight candidates vying for a single position at a mysterious organisation are seated in a guarded room and informed they have eighty minutes to answer one question. However, they turn over their papers to find them blank and begin to realise they must work together if they are to uncover the truth behind the test. Psychological thriller, starring Luke Mably, Nathalie Cox, Jimi Mistry, Adar Beck and Gemma Chan.",
//       "imdbUrl": "http://www.imdb.com/title/tt1258197/",
//       "tmdbImageId": "2MLOMNKejfX3L1PVB2ZdxYOmf3A",
//       "tmdbRating": 66,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "22:40",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "00:30",
//           "channel": "ITV 4"
//         }
//       ]
//     },
//     {
//       "id": 13,
//       "name": "Taxi Tehran",
//       "year": 2015,
//       "synopsis":
//         "A director poses as a taxi driver and makes a film about social challenges in his country. In Farsi with English subtitles. [2015] [S]",
//       "imdbUrl": "https://www.imdb.com/title/tt4359416/",
//       "tmdbImageId": "dSbVY6EmcU5jkHRSvmzFlvj9n9H",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "22:40",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "00:40",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 14,
//       "name": "Bulletproof Monk",
//       "year": 2002,
//       "synopsis":
//         "This martial arts fantasy produced by John Woo is based on a late 1990s cult comic book, and turns out to be a messy mix of Crouching Tiger, Hidden Dragon, The Matrix and Lost Horizon. The plot concerns an ancient life-prolonging Tibetan scroll that's protected by nameless monk Chow Yun-Fat (and, after an unlikely plot twist, his petty-pickpocket disciple Seann William Scott) and coveted by former Nazi officer Karl Roden. Combining daft fortune-cookie philosophy, overdone stunts and fluffed fight-choreography, music-video director Paul Hunter's cheesy fusion resembles a pilot episode for some badly acted mid-1970s clone of Kung Fu. Without even the slightest hint of knowing camp to save it, this comic-strip misadventure soon collapses.",
//       "imdbUrl": "http://www.imdb.com/title/tt0245803/",
//       "tmdbImageId": "hzk3kf5h54cCP3MYDptEjmLKVLF",
//       "tmdbRating": 50,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "23:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "00:20",
//           "channel": "BBC 4"
//         }
//       ]
//     },
//     {
//       "id": 15,
//       "name": "Christmas on Chestnut Street",
//       "year": 2006,
//       "synopsis":
//         "A department store ends up with an excess of Christmas lights, the staff organise a competition for the best decorated house. Festive comedy, starring Jay Brazeau and Rob Bruner. Includes Mini Movie Moment.",
//       "imdbUrl": "http://www.imdb.com/title/tt0900916/",
//       "tmdbImageId": "6mx4HEwwbaINDoA5jGh7MTbyVXb",
//       "tmdbRating": 43,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "23:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "01:00",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 16,
//       "name": "The Shepherd",
//       "year": 2008,
//       "synopsis":
//         "A former homicide detective takes up a new post as a US border patrol agent. He makes it his mission to capture a group of veteran Navy Seals plotting to smuggle a large consignment of heroin into the country from Mexico, using innocent migrants being wired with explosives to cause a diversion. Action thriller, starring Jean-Claude Van Damme, Scott Adkins and Stephen Lord.",
//       "imdbUrl": "http://www.imdb.com/title/tt0827521/",
//       "tmdbImageId": "ztRg9oXk0tc6pltahjDSXRFKNOQ",
//       "tmdbRating": 53,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "23:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "01:00",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 17,
//       "name": "Broken City",
//       "year": 2013,
//       "synopsis":
//         "A New York cop is forced to quit the force to avoid a scandal over the shooting of a suspect, and becomes a private eye. Years later, the mayor hires the detective during a re-election campaign to find out if his wife is having an affair - but the investigation uncovers a web of political corruption. Crime thriller, with Mark Wahlberg, Russell Crowe and Catherine Zeta-Jones.",
//       "imdbUrl": "http://www.imdb.com/title/tt1235522/",
//       "tmdbImageId": "pYDj2b15p4YdNz88XvO7QmBoHgD",
//       "tmdbRating": 57,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "23:10",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "01:05",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 18,
//       "name": "I, Frankenstein",
//       "year": 2013,
//       "synopsis":
//         "The infamous scientist's monster roams the Earth 200 years after burying his creator, and is drawn into an ancient supernatural conflict. Two factions of magical beings are at war, and the key to ending the conflict lies in tapping the secret of the creature's immortality. Fantasy adventure, starring Aaron Eckhart, Bill Nighy and Miranda Otto.",
//       "imdbUrl": "http://www.imdb.com/title/tt1418377/",
//       "tmdbImageId": "7DhoIiGPXDhKHy4sjghAAOloPJM",
//       "tmdbRating": 51,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "23:35",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "01:45",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 19,
//       "name": "Fifty Fifty",
//       "year": 1992,
//       "synopsis":
//         "The CIA decides to hire two mercenaries to overthrow a troublesome corrupt dictator. Stars Peter Weller and Robert Hays. (1992)",
//       "imdbUrl": "https://www.imdb.com/title/tt0133856/",
//       "tmdbImageId": "u17bgp2KJL1nelzev1p7CLcQzsG",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "23:35",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "01:15",
//           "channel": "Channel 4"
//         }
//       ]
//     },
//     {
//       "id": 20,
//       "name": "Viva Zapata",
//       "year": null,
//       "synopsis":
//         "1952. Drama. Directed by Elia Kazan. Starring Marlon Brando, Jean Peters, Anthony Quinn. The story of Emiliano Zapata, who led a rebellion against oppressive dictator Porfirio Diaz.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Viva+Zapata",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-03",
//           "startsAtTime": "23:40",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "01:45",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 21,
//       "name": "Mars Attacks!",
//       "year": 1996,
//       "synopsis":
//         "Little green men from the angry red planet launch a flying-saucer attack on Earth in director Tim Burton's slow-starting space oddity, based on a bubble-gum card storyline from the 1960s. In both a tribute to and a spoof of 1950s B-movies, Burton stumbles as many times as he succeeds in playing with the back catalogue of lurid pulp sci-fi references. But once the computer-generated bug-eyed Martians arrive and strut their evil stuff, this daffy Independence Day lampoon comes alive. Among an amazing roster of stars, Pierce Brosnan is hilarious as a presidential adviser and Lisa Marie is weirdly creepy as a disguised alien temptress.",
//       "imdbUrl": "http://www.imdb.com/title/tt0116996/",
//       "tmdbImageId": "gaTuHICwavPUmqQzPZFEXKSRwsC",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "00:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "02:30",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 22,
//       "name": "Honeymoon",
//       "year": 2014,
//       "synopsis":
//         "A couple spend their honeymoon in a remote country cabin, where the wife starts sleepwalking in the surrounding woods. Her husband becomes suspicious of her strange behaviour, and begins to fear strange forces are taking control of her. Horror, starring Rose Leslie, Harry Treadaway, Ben Huber and Hanna Brown.",
//       "imdbUrl": "http://www.imdb.com/title/tt3177316/",
//       "tmdbImageId": "5jZRisBShiBpsH2k5rDYGEl9fSh",
//       "tmdbRating": 53,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "00:30",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "02:40",
//           "channel": "ITV 4"
//         }
//       ]
//     },
//     {
//       "id": 23,
//       "name": "Leap Year",
//       "year": 2010,
//       "synopsis":
//         "Over-organised Anna (Amy Adams) rushes from Boston to Ireland to propose to her cardiologist beau (Adam Scott) on 29 February, only to be confounded by the one thing she can't control - the weather. Miles off course, in the wilds of Dingle, she enlists the help of handsome minicab driver-cum-publican Declan (Matthew Goode), and the bickering pair set off to reunite her with her intended. Director Anand Tucker (Shopgirl) has produced a light, frothy romance with just enough blarney to charm the susceptible. Adams is enchanting, even when teetering on ridiculously high heels, and Goode manages to hang on to an often strained Irish accent, flashing his puppy-dog eyes along the way.",
//       "imdbUrl": "http://www.imdb.com/title/tt1216492/",
//       "tmdbImageId": "9UWKpkQvZaPqpb85Or4e0PghJft",
//       "tmdbRating": 64,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "00:40",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "02:30",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 24,
//       "name": "Merry In-Laws",
//       "year": 2012,
//       "synopsis":
//         "A woman meets her fiance's parents for the first time just before Christmas, and is amazed to discover they are Santa Claus and his wife. While the experience restore her childhood love of Christmas, her cynical father is determined to stop her going through with the wedding. Comedy, with George Wendt, Shelley Long ad Kassia Warshawski.",
//       "imdbUrl": "http://www.imdb.com/title/tt2369105/",
//       "tmdbImageId": "dM4z2N4vrchRgBxWgbciwj43htU",
//       "tmdbRating": 70,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "01:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "03:00",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 25,
//       "name": "Puncture Wounds",
//       "year": 2014,
//       "synopsis":
//         "A military veteran suffering from post-traumatic stress comes to the aid of a prostitute who is being attacked by members of a white supremacist group. He kills some of the men in the ensuing confrontation, and the leader of the racist gang vows revenge on the soldier's family. Action adventure, starring Cung Le, Dolph Lundgren and Vinnie Jones.",
//       "imdbUrl": "http://www.imdb.com/title/tt2909476/",
//       "tmdbImageId": "d6MFkgAbLcIBzsojyqxcSzmO15m",
//       "tmdbRating": 32,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "01:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "03:00",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 26,
//       "name": "Morning Glory",
//       "year": 2010,
//       "synopsis":
//         "Harrison Ford and Rachel McAdams make an unlikely but likeable team in Notting Hill director Roger Michell's lively, classy comedy. She's a perky TV producer saddled with a failing morning show, while he's the station's veteran but time-serving news anchor who's forced to front the detested programme. Like Broadcast News (1987), it's more wry than laugh-out-loud funny, with the race for ratings providing the impetus for drama. Michell's seamless, steady direction lets McAdams's energy shine through and allows Ford and his fellow news anchor Diane Keaton to craft beautifully timed comedic performances, including their ongoing feud regarding who says the final on-air \"goodbye\". The relationship between McAdams and fellow producer Patrick Wilson may all be a bit predictable, but watch out for Matt Malloy, who almost steals the whole show as an intense, nerdy weatherman.",
//       "imdbUrl": "http://www.imdb.com/title/tt1320103/",
//       "tmdbImageId": "awOSlpYvmuMv77FDMSYsshkDWU3",
//       "tmdbRating": 52,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "01:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "03:10",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 27,
//       "name": "Cyrus",
//       "year": 2010,
//       "synopsis":
//         "A love triangle of the weirdest kind lies at the heart of this dark but refreshingly kind-hearted romantic comedy. John C Reilly plays John, the underdog lead, a man still pining for his ex-wife (Catherine Keener) when a chance meeting at a party introduces him to single mother Molly (Marisa Tomei). Molly is interested, and John can't believe his luck (\"Are you flirting with me? I'm like Shrek!\" he roars), but the relationship is tested when John meets Molly's owlish 20-something son, Cyrus (Jonah Hill). At first, the \"child\" seems welcoming and warm, but from the day John can't find his shoes, he begins to suspect that Cyrus has a hidden, sinister agenda. He's right, and the battle of wits that follows is both funny and human, with a rewarding, upbeat and emotional pay-off that makes a welcome change from the increasingly irony-enriched fare we've come to expect.",
//       "imdbUrl": "http://www.imdb.com/title/tt1336617/",
//       "tmdbImageId": "filMDJ2Ze7GjsCO2O4Pmwbw9kaO",
//       "tmdbRating": 61,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "01:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "03:00",
//           "channel": "Channel 4"
//         }
//       ]
//     },
//     {
//       "id": 28,
//       "name": "Gunga Din",
//       "year": 1939,
//       "synopsis":
//         "Two British soldiers stationed in 19th-century India are shocked to learn their comrade-in-arms is planning to quit the service and get married. However, their efforts to keep him in the army have to wait when a fanatical cult launches an uprising, leaving an unassuming water carrier with the task of saving the day. Action adventure, inspired by Rudyard Kipling's classic poem, starring Cary Grant, Victor McLaglen, Douglas Fairbanks Jr, Joan Fontaine and Sam Jaffe.",
//       "imdbUrl": "http://www.imdb.com/title/tt0031398/",
//       "tmdbImageId": "laIIvszJZnMZ70WrZBPsASLQ6fM",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "01:45",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "03:30",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 29,
//       "name": "Belle Starr",
//       "year": null,
//       "synopsis":
//         "1941. Western. Directed by Irvin Cummings. Starring Randolph Scott, Gene Tierney and Dana Andrews. A Southern beauty, indignant her treatment by the Yankees, marries a confederate guerrilla.",
//       "imdbUrl": "https://www.imdb.com/title/tt0061981/",
//       "tmdbImageId": "lJLceWXYMomR9sRduh1Qa58NNtq",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "01:45",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "04:00",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 30,
//       "name": "The Hills Have Eyes",
//       "year": 1977,
//       "synopsis":
//         "Wes Craven's gruesome horror classic. When their car breaks down on a deserted stretch of road, one unfortunate family soon discover they aren't alone in the wilderness. (1977)",
//       "imdbUrl": "http://www.imdb.com/title/tt0077681/",
//       "tmdbImageId": "5vt8y3X9C77r4sTFqH7D5tqAjGL",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "02:30",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "04:15",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 31,
//       "name": "Sherlock Holmes: The Sign of Four",
//       "year": null,
//       "synopsis": "No Information Available",
//       "imdbUrl":
//         "http://www.imdb.com/find?s=tt&q=Sherlock+Holmes:+The+Sign+of+Four",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "02:30",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "04:20",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 32,
//       "name": "The Light before Christmas",
//       "year": 2007,
//       "synopsis":
//         "Two children lost in the snow on Christmas Eve are rescued by a kind old man. He reads them the story of The Night Before Christmas from a weathered old book, which results in them being magically transported into the tale. Stop-motion animated fantasy, with the voices of Ruby Chase O'Neil and Brock Holman.",
//       "imdbUrl": "http://www.imdb.com/title/tt1184384/",
//       "tmdbImageId": "XpTzEYF9BHehpA2Xue2i6qwgVl",
//       "tmdbRating": 40,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "03:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "04:50",
//           "channel": "ITV 3"
//         }
//       ]
//     },
//     {
//       "id": 33,
//       "name": "The Christmas Clause",
//       "year": 2008,
//       "synopsis":
//         "A stressed-out lawyer struggles to balance her work with taking care of her children. She idly wonders what life would be like if she had focused solely on her career rather than starting a family - but when her wish is granted, her simple life is not what she expected it to be. Festive family fantasy, with Lea Thompson and Andrew Airlee.",
//       "imdbUrl": "http://www.imdb.com/title/tt1343029/",
//       "tmdbImageId": "oDlGr2hLS8gfHrEeKBbxZzfeyUV",
//       "tmdbRating": 40,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "03:10",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "03:50",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 34,
//       "name": "Musical Masquerade",
//       "year": null,
//       "synopsis":
//         "1946. Musical. A Lost British short detailing where a composer's inspiration comes from and The London Symphony Orchestra.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Musical+Masquerade",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "04:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "05:50",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 35,
//       "name": "A Tale of Five Cities",
//       "year": 1951,
//       "synopsis":
//         "1951. Drama. Stars Bonar Colleano, Barbara Kelly, Eva Bartok & Gina Lollobrigida. When an Englishman leaves America to enlist in the RAF, his gruelling combat experiences result in a loss of memory.",
//       "imdbUrl": "http://www.imdb.com/title/tt0041921/",
//       "tmdbImageId": "d3wtW2Tum3k7VogmvHDRYQnylsk",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "04:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "05:00",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 36,
//       "name": "The Fugitive",
//       "year": 1947,
//       "synopsis":
//         "This mesmerising adaptation of The Power and the Glory - Graham Greene's novel about a \"whisky priest\" - by director John Ford is seriously compromised by the censorship of the time. But, despite the fact that the central relationship is no longer a sexual one and Henry Fonda's priest is not an alcoholic, it remains resolutely convincing. Pedro Armendáriz is particularly fine as the mustachioed police lieutenant, and Dolores Del Rio smoulders as the woman, but the real star of this brooding opus is the magnificent outdoor photography from Gabriel Figueroa. At the time, Ford's non-westerns were regarded more highly than his westerns. This drama is a quasi-western, and all the better for being directed by such a master.",
//       "imdbUrl": "http://www.imdb.com/title/tt0039402/",
//       "tmdbImageId": "bpNzAEKC1jCbzzXEUbMRhsBdoFp",
//       "tmdbRating": 62,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "06:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "07:45",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 37,
//       "name": "Scarlet Web",
//       "year": null,
//       "synopsis":
//         "1954. Crime drama directed by Charles Saunders. An insurance investigator is framed for murder after a client is found dead. Starring Griffith Jones and Hazel Court.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Scarlet+Web",
//       "tmdbImageId": null,
//       "tmdbRating": 63,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "06:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "08:00",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 38,
//       "name": "3 Day Christmas",
//       "year": 2012,
//       "synopsis":
//         "A distraught father realises he and his family have forgotten how to communicate, so comes up with a drastic solution. He locks his wife and children in the house for the Christmas holiday, and cuts off the water and electricity to force them to reconnect with each other. Comedy, starring George Newbern, Megyn Price and Corbin Bernsen, who also directed.",
//       "imdbUrl": "http://www.imdb.com/title/tt2184095/",
//       "tmdbImageId": "8M6CzxVBBLhgOewMe7ddE5F6Fe7",
//       "tmdbRating": 53,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "08:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "09:30",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 39,
//       "name": "Mother Lode",
//       "year": 1982,
//       "synopsis": "",
//       "imdbUrl": "http://www.imdb.com/title/tt0084359/",
//       "tmdbImageId": "hsJcrEvHnhLzCC9vBRfa3X110dW",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "09:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "10:45",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 40,
//       "name": "Broken Journey",
//       "year": null,
//       "synopsis":
//         "1948. Drama. Director: Ken Annakin & Michael C Chorlton. Stars Phyllis Calvert, James Donald, David Tomlinson & Margot Grahame. A plane crash lands miles from civilisation. The passengers must prevail",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Broken+Journey",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "09:10",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "11:10",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 41,
//       "name": "Brubaker",
//       "year": 1980,
//       "synopsis":
//         "Robert Redford is in reformist mode here as a progressive warden, determined to oust brutality and corruption from a state prison farm. Director Stuart Rosenberg (Cool Hand Luke) piles on the agony with sequences of bleak action, while the acting - especially from Jane Alexander and Yaphet Kotto - is formidable enough to take on all that social responsibility. It's a touch downbeat, and at times ponderous and sanctimonious, but this prison drama still sounds a shrill warning and sends out an ominous message to those who care about what society does with its misfits. Watch out, too, for an early pre-stardom appearance by Morgan Freeman as a fearsome inmate.",
//       "imdbUrl": "http://www.imdb.com/title/tt0080474/",
//       "tmdbImageId": "7k60xwE3T6MqqpHPfeqt0emHWGt",
//       "tmdbRating": 70,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "09:30",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "11:15",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 42,
//       "name": "The Christmas Wife",
//       "year": 1988,
//       "synopsis":
//         "Jason Robards stars as a widower who, not wanting to face his first Christmas alone, responds to a newspaper advert asking for `social introductions'. Sentimental drama, co-starring Julie Harris, Don Francks and James Eckhouse.",
//       "imdbUrl": "http://www.imdb.com/title/tt0094873/",
//       "tmdbImageId": "dO840TvKiRwpK0atwpag5ommHLD",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "10:35",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:15",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 43,
//       "name": "I, Robot",
//       "year": 2004,
//       "synopsis":
//         "Stories by sci-fi writer Isaac Asimov provide the inspiration for this futuristic action thriller set in Chicago in the year 2035 when robots have been fully integrated into society, occupying the positions of trusted servant and menial worker. Asimov's laws of robotics state that a robot may not allow a human to come to harm. When a top scientist from the US Robotics corporation turns up dead, Detective Del Spooner (Will Smith) suspects the involvement of a prototype that may not be bound by the laws that govern its brethren. Smith gives a charismatic performance in a blockbuster that succeeds chiefly because of the use of CGI - the robots are seamlessly blended into the human environment. As a meditation on whether robots are capable of human emotions, this may not delve as deeply as AI: Artificial Intelligence or Blade Runner, but director Alex Proyas keeps the action racing along with enough invention and thrills to make this well worth the ride.",
//       "imdbUrl": "http://www.imdb.com/title/tt0343818/",
//       "tmdbImageId": "2mkFzf168xJrV6Leqq0bjqOlJCK",
//       "tmdbRating": 67,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "10:45",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "12:25",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 44,
//       "name": "Battle at Apache Pass",
//       "year": 1952,
//       "synopsis":
//         "(1952) Western. Apache chief Cochise is trying to keep the peace with the cavalry unit based at Fort Buchanan, but he's undermined by a government advisor and a rival Apache chief.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Battle+at+Apache+Pass",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "10:50",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:05",
//           "channel": "Channel 4"
//         }
//       ]
//     },
//     {
//       "id": 45,
//       "name": "Rambo III",
//       "year": 1988,
//       "synopsis":
//         "In probably the worst film in the Rambo series, Sylvester Stallone transforms here from slightly confused loner to the Free World's white knight. Reluctantly giving up his blissfully mystic life in Thailand (hilariously parodied in Hot Shots! Part Deux) to go on one more mission, he seemingly takes on the entire Soviet army in Afghanistan when his old boss (Richard Crenna) is taken prisoner. If cartoon action is your bag, then this has it by the bucketful, but the mindless celebration of carnage leaves a nasty taste in the mouth.",
//       "imdbUrl": "http://www.imdb.com/title/tt0095956/",
//       "tmdbImageId": "oCD41FfUs1OMCdPaf5EcJ6dxxMW",
//       "tmdbRating": 57,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "12:45",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 46,
//       "name": "Warlords of Atlantis",
//       "year": 1978,
//       "synopsis":
//         "Victorian scientists on a marine expedition discover an extensive prehistoric city at the bottom of the ocean - and the existence of a terrifying host of underwater monsters. Sci-fi adventure, starring Doug McClure, Peter Gilmore, Shane Rimmer, Lea Brodie and Cyd Charisse.",
//       "imdbUrl": "http://www.imdb.com/title/tt0078474/",
//       "tmdbImageId": "jUHleqRyuVCR4eFy3aPyQmaJ9ug",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "12:50",
//           "channel": "ITV"
//         }
//       ]
//     },
//     {
//       "id": 47,
//       "name": "Return of the Bad Men",
//       "year": 1948,
//       "synopsis":
//         "A farmer sets about reforming a female gunslinger - but faces opposition from a host of outlaws including Billy the Kid, the Dalton Gang and the Sundance Kid. Western, starring Randolph Scott, Anne Jeffreys, Robert Ryan and George `Gabby' Hayes.",
//       "imdbUrl": "http://www.imdb.com/title/tt0040732/",
//       "tmdbImageId": "j59ShAKsWzHbMfL3NvCK0uTk77m",
//       "tmdbRating": 38,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "12:50",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 48,
//       "name": "Framed For Murder",
//       "year": 2017,
//       "synopsis":
//         "Murder mystery starring Jewel Kilcher and Colin Ferguson. An expert in Victorian home restoration is also adept at finding clues to uncover a house's secret past. (2017)",
//       "imdbUrl": "https://www.imdb.com/title/tt0025282/",
//       "tmdbImageId": "zpAFKPyMKYzx2YYzc25QkXP0Etz",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:10",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:00",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 49,
//       "name": "Survivor",
//       "year": 2014,
//       "synopsis":
//         "A spaceship searching for a new home for the human race crash lands on an alien world, where the survivors come under attack from savage mutants. One member of the crew is separated from the rest, and seeks the aid of the planet's inhabitants in protecting her friends. Sci-fi adventure, starring Danielle Chuchran and Kevin Sorbo.",
//       "imdbUrl": "http://www.imdb.com/title/tt3297792/",
//       "tmdbImageId": "aeWQXWeAmKNmzYaf42JMwznbjf0",
//       "tmdbRating": 49,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:10",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:00",
//           "channel": "Five USA"
//         }
//       ]
//     },
//     {
//       "id": 50,
//       "name": "Dead Snow 2",
//       "year": 2014,
//       "synopsis":
//         "Gore splashed horror comedy sequel. The Nazi zombie horde is back, and their unwitting foe Martin must recruit a team of American zombie hunters to take the fight to the next level. (2014)",
//       "imdbUrl": "http://www.imdb.com/title/tt2832470/",
//       "tmdbImageId": "dLd6A24aHTTBZo8R7OAFzthr6h2",
//       "tmdbRating": 65,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:05",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 51,
//       "name": "A Carol Christmas",
//       "year": 2003,
//       "synopsis":
//         "Dickens has probably never received such an extreme festive makeover, but Matthew Irmas just about gets away with the liberties taken in this TV movie. Tori Spelling turns in a bravura performance as a self-centred chat show host, who makes life a nightmare for producer Michael Landes and PA Nina Siemaszko, as they prepare for her Christmas special. But then she's visited by the ghost of a diva aunt (Dinah Manoff) and the spirits of Christmas Past (Gary Coleman), Present (William Shatner) and Future. The showbiz satire is occasionally amusing, but this is more pantomime than morality tale.",
//       "imdbUrl": "http://www.imdb.com/title/tt0381942/",
//       "tmdbImageId": "gY6XCx28C3TKk43lrJScvxYJ7P5",
//       "tmdbRating": 65,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:25",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:25",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 52,
//       "name": "16 Blocks",
//       "year": 2006,
//       "synopsis":
//         "A burned-out cop is given the task of escorting a criminal to court to testify against a group of corrupt policemen - but what seems to be a routine assignment fast turns into a deadly game of cat and mouse as the crooked officers try to stop them reaching the courthouse alive. Thriller, starring Bruce Willis, Mos Def, David Morse, Jenna Stern and Casey Sander.",
//       "imdbUrl": "http://www.imdb.com/title/tt0450232/",
//       "tmdbImageId": "wpKBLDjNRddmH6N32ni4bASogt8",
//       "tmdbRating": 61,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:25",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:25",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 53,
//       "name": "The Mortal Instruments: City of Bones",
//       "year": 2013,
//       "synopsis":
//         "A teenager discovers she is descended from a race of half-human, half-angel warriors whose duty is to defend the world from demons. When her mother disappears, she joins a group of the magical beings on a dangerous journey into an alternate version of New York inhabited by strange creatures. Fantasy adventure, starring Lily Collins, Jamie Campbell Bower, Lena Headey and Jonathan Rhys Meyers.",
//       "imdbUrl": "http://www.imdb.com/title/tt1538403/",
//       "tmdbImageId": "6tUdKoNdBsu321nMpvQsj81DA8e",
//       "tmdbRating": 62,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:30",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "12:30",
//           "channel": "ITV 4"
//         }
//       ]
//     },
//     {
//       "id": 54,
//       "name": "Role Models",
//       "year": 2008,
//       "synopsis":
//         "Two irresponsible salesmen find themselves in trouble with the law after crashing their truck. To avoid jail, they agree to undertake community service looking after two troubled kids - a painfully geeky teenager and a foul-mouthed youngster. However, jail soon looks like it would have been the easier option. Comedy, starring Paul Rudd, Seann William Scott and Christopher Mintz-Plasse.",
//       "imdbUrl": "http://www.imdb.com/title/tt0430922/",
//       "tmdbImageId": "bq6wxu0rv1GIkEwslBT2rVgLkxe",
//       "tmdbRating": 64,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:30",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "14:05",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 55,
//       "name": "The Adventurers",
//       "year": null,
//       "synopsis":
//         "1951. Adventure. Director: David Macdonald. Stars Jack Hawkins, Dennis Price, Siobhan McKenna & Peter Hammond. During the Boer War, several men go into the South African veldt in search of diamonds.",
//       "imdbUrl": "https://www.imdb.com/title/tt0112772/",
//       "tmdbImageId": "bwMK2VYbyJdNPG1P0RQznvuSz6y",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "11:45",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "12:45",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 56,
//       "name": "xXx: State Of The Union",
//       "year": 2005,
//       "synopsis":
//         "In this high-octane action franchise, rap star Ice Cube stars as new agent Darius Stone who must foil an assassination attempt on the US president. (2005)",
//       "imdbUrl": "https://www.imdb.com/title/tt0329774/",
//       "tmdbImageId": "yWKeTc8cxSZoDy5X45q3c64iN7v",
//       "tmdbRating": 48,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "12:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "13:40",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 57,
//       "name": "The Town That Banned Christmas",
//       "year": 2006,
//       "synopsis":
//         "Two rivals get into a feud over who has the best Christmas decorations that gets out of hand, prompting the town council to cancel all the seasonal celebrations. The two old enemies decide to put their differences aside and join forces to save the holiday. Comedy, starring Matt McCoy and Adam Ferrara.",
//       "imdbUrl": "https://www.imdb.com/title/tt0496411/",
//       "tmdbImageId": "gpQXNt5sxBgj3JqVCBIm6q6Sxns",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "12:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "12:55",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 58,
//       "name": "A Christmas Proposal",
//       "year": 2008,
//       "synopsis":
//         "A lawyer visits a mountain town his client wants to demolish and turn into a ski resort, where he learns the attorney fighting the plan is his old childhood sweetheart. When a car accident leaves him stranded, he finds his feelings for his opponent come flooding back. Romantic comedy, starring Nicole Eggert and David O'Donnell.",
//       "imdbUrl": "http://www.imdb.com/title/tt1284976/",
//       "tmdbImageId": "kaqYasmrPMKLUqbUwoMSeOXwfIw",
//       "tmdbRating": 33,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "12:25",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "14:15",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 59,
//       "name": "40 Guns to Apache Pass",
//       "year": 1966,
//       "synopsis":
//         "A cavalry captain sets out to deliver a shipment of rifles to a fort besieged by marauding Apaches, but the mission is undermined by a villainous corporal who plans to sell the weapons to the enemy. Western, starring Audie Murphy, Michael Burns, Laraine Stephens, Kenneth Tobey and Michael Keep.",
//       "imdbUrl": "http://www.imdb.com/title/tt0060048/",
//       "tmdbImageId": "fWy1UGIdoxzfAxqRP1lf8uurqcW",
//       "tmdbRating": 43,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "12:25",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "14:10",
//           "channel": "Channel 4"
//         }
//       ]
//     },
//     {
//       "id": 60,
//       "name": "Last Of The Badmen",
//       "year": 1967,
//       "synopsis":
//         "A young cowboy is attracted to life as an outlaw and he decides to join forces with a ruthless killer. Stars George Hilton. (1967)",
//       "imdbUrl": "http://www.imdb.com/title/tt0062350/",
//       "tmdbImageId": "lmP3UTDCu9y3HRWT5xtLeUYvTSC",
//       "tmdbRating": 50,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "12:45",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "14:40",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 61,
//       "name": "The Lost Continent",
//       "year": 1968,
//       "synopsis":
//         "Passengers travelling on a delapidated steamer find themselves marooned on a misty sea, surrounded by killer seaweed, murderous crustaceans and Spanish pirates. Fantasy Hammer horror, starring Eric Porter, Hildegarde Knef and Suzanne Leigh.",
//       "imdbUrl": "http://www.imdb.com/title/tt0063240/",
//       "tmdbImageId": "dofIykyIRoLptqiEwbh0yQRPYio",
//       "tmdbRating": 66,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "13:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "14:55",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 62,
//       "name": "The Christmas Tree",
//       "year": 1996,
//       "synopsis":
//         "Heart-warming festive drama, starring Andrew McCarthy as a gardener who strikes up an unlikely friendship with a nun while wrangling over the fate of an endangered fir tree, and learns the true meaning of Christmas. Trini Alvarado also stars in Sally Field's directorial debut.",
//       "imdbUrl": "http://www.imdb.com/title/tt0115892/",
//       "tmdbImageId": "mDwEhzPEtaR5fMljrIaR1RibMag",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "13:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "14:50",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 63,
//       "name": "Holiday",
//       "year": null,
//       "synopsis":
//         "1957. Documentary. Directed by John Taylor. Charming music-driven documentary about Blackpool.",
//       "imdbUrl": "https://www.imdb.com/title/tt0457939/",
//       "tmdbImageId": "ixNtpuq8OVp4IckgzkSJIflFDkw",
//       "tmdbRating": 67,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "13:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "15:00",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 64,
//       "name": "Send For Paul Temple",
//       "year": 1946,
//       "synopsis":
//         "1946. Crime drama directed by John Argyle and starring Anthony Hulme and Joy Shelton. Scotland Yard calls in novelist and amateur detective Paul Temple to help track down a gang of diamond robbers.",
//       "imdbUrl": "http://www.imdb.com/title/tt0127272/",
//       "tmdbImageId": "aTddSwu3C1NUjzQrmF8PUqtHsFX",
//       "tmdbRating": 55,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "13:40",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "14:00",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 65,
//       "name": "Christmas Cookies",
//       "year": 2016,
//       "synopsis":
//         "When an executive is sent to a small town to oversee the closure of a Christmas cookie company, she gets swept up in the joy of the season. (2016)",
//       "imdbUrl": "http://www.imdb.com/title/tt5675936/",
//       "tmdbImageId": "4KM2u6JlKVMqHRPafCyovsVSB68",
//       "tmdbRating": 66,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "14:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "15:40",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 66,
//       "name": "Maid in Manhattan",
//       "year": 2002,
//       "synopsis":
//         "A chambermaid at an exclusive hotel daringly tries on a designer dress belonging to a guest - and is spotted by a wealthy politician, who mistakes her for a socialite and invites her on a date. However, the differences in their social backgrounds soon become apparent and threaten their budding romance. Comedy, starring Jennifer Lopez, Ralph Fiennes, Natasha Richardson and Bob Hoskins.",
//       "imdbUrl": "http://www.imdb.com/title/tt0252076/",
//       "tmdbImageId": "3LQ4wKp4lF41yTTRSd6QdgD6eXO",
//       "tmdbRating": 57,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "14:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "15:45",
//           "channel": "Channel 5"
//         }
//       ]
//     },
//     {
//       "id": 67,
//       "name": "The Poseidon Adventure",
//       "year": 1972,
//       "synopsis":
//         "In this memorable calamity-at-sea epic from disaster-movie specialist Irwin Allen, an ocean liner turns turtle under a tidal wave and survivors fight their way to the ship's underside in an attempt to find an exit. The religious aspects of Paul Gallico's source novel get buried under a barrage of set pieces as director Ronald Neame cranks up the suspense and minister Gene Hackman leads a group of uptight passengers to what they hope will be their salvation. There are wonderfully poignant performances by Ernest Borgnine, Stella Stevens, Shelley Winters and Red Buttons, but it's always Hackman's movie - not even the remarkable effects can upstage him.",
//       "imdbUrl": "http://www.imdb.com/title/tt0069113/",
//       "tmdbImageId": "3Ypk0OLrECSp7tqQFLMppGBrHfo",
//       "tmdbRating": 76,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "14:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "16:25",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 68,
//       "name": "Love For Christmas",
//       "year": 2012,
//       "synopsis":
//         "Christmas time, and love is in the air when a beautiful girl and a naval officer meet each other for the first time. Stars Shantel VanSanten. (2012)",
//       "imdbUrl": "http://www.imdb.com/title/tt2315500/",
//       "tmdbImageId": "gs8xE1ldTd5ecBLFUXVtAl3x5oJ",
//       "tmdbRating": 55,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "14:40",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "16:55",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 69,
//       "name": "The Christmas Calendar",
//       "year": 2017,
//       "synopsis":
//         "Romance. When a small town baker receives a Christmas Calendar from a secret admirer, the local residents become obsessed with finding out the identity of the sender. (2017)",
//       "imdbUrl": "https://www.imdb.com/title/tt6478538/",
//       "tmdbImageId": "wuBwTgY4kyS8rtAutBguxLwmkse",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "15:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "17:00",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 70,
//       "name": "It Always Rains On Sunday",
//       "year": null,
//       "synopsis":
//         "1947. Drama. Director: Robert Hamer. Stars Googie Withers, John McCallum, Jack Warner & Susan Shaw. Rose wants to escape the drudgery of her daily life when an old lover escapes from prison.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=It+Always+Rains+On+Sunday",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "15:45",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "17:30",
//           "channel": "Channel 5"
//         }
//       ]
//     },
//     {
//       "id": 71,
//       "name": "Solar Attack",
//       "year": 2005,
//       "synopsis":
//         "The US president needs all the help he can get when a solar storm lights up the sky and threatens to wipe out all life on Earth. Sci-fi adventure, starring Louis Gossett Jr, Mark Dacascos and Bill Lake.",
//       "imdbUrl": "http://www.imdb.com/title/tt0457701/",
//       "tmdbImageId": "kEQ1yWfiHPozORrZ5xesTWPlpmD",
//       "tmdbRating": 5,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "16:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "17:50",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 72,
//       "name": "Restless",
//       "year": 2011,
//       "synopsis":
//         "Quirky coming-of-age love story between a young man (Henry Hopper) who has given up on life and a beautiful young girl (Mia Wasikowska) who has a deeply felt love of life and the natural world. (2011)",
//       "imdbUrl": "https://www.imdb.com/title/tt1498569/",
//       "tmdbImageId": "1caJ9CkTFlhVnM8V5sblCt9FbtY",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "16:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "12:50",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 73,
//       "name": "Thunder Bay",
//       "year": 1953,
//       "synopsis":
//         "A former Navy engineer comes up with a plan to establish an offshore oil drilling site on the Louisiana coast. However, his scheme is threatened by irate locals who fear for their fishing business, dangerous weather conditions and his own treacherous financial backers. Action adventure, with James Stewart and Joanne Dru.",
//       "imdbUrl": "http://www.imdb.com/title/tt0046425/",
//       "tmdbImageId": "kRgeDeIbxeVSkITI85NIgY77LYY",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "16:25",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "18:20",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 74,
//       "name": "Suicide Commandos",
//       "year": 1968,
//       "synopsis":
//         "The D-Day invasion is threatened by the discovery of a secret German airfield. Stars Aldo Ray. (1968)",
//       "imdbUrl": "http://www.imdb.com/title/tt0064178/",
//       "tmdbImageId": "rVszCqa33UnPq7Xd2GyXki86Lbs",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "17:05",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "19:15",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 75,
//       "name": "The Remains of the Day",
//       "year": 1993,
//       "synopsis":
//         "This impeccable adaptation of Kazuo Ishiguro's Booker Prize-winning novel stars Anthony Hopkins as the emotionally repressed butler and Emma Thompson as the housekeeper he possibly loves. Framed in flashbacks, the story is an English twist on Jean Renoir's classic La Règle du Jeu, a broad view of a narrow class of aristocrats on the verge of self-destruction. Co-starring James Fox as a fascistic English lord and Christopher Reeve as an American diplomat (the past and present owners of Darlington Hall), it is as much a study in power and politics as it is Hopkins's blinkered view of the world from behind the gleaming silver salvers. The 1930s and 40s settings are immaculately staged, and, unlike James Ivory's earlier dramatisations of EM Forster, this picture has real backbone: Ivory's direction is alive to every nuance and chink of the sherry glasses.",
//       "imdbUrl": "http://www.imdb.com/title/tt0107943/",
//       "tmdbImageId": "gvu4zaF0KeIRoZ5fVABQH3Wug3r",
//       "tmdbRating": 73,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "17:10",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "19:15",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 76,
//       "name": "Call Me Mister",
//       "year": null,
//       "synopsis":
//         "1951. Musical. Director: Lloyd Bacon. Stars Betty Grable, Danny Thomas, Richard Boone & Dan Dailey. Former stage star, Shep, awaits discharge in post-war Tokyo when he meets his estranged love, Kay.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Call+Me+Mister",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "18:20",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "21:00",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 77,
//       "name": "Europa Report",
//       "year": 2013,
//       "synopsis":
//         "(2013) Scary sci-fi thriller. A manned spaceship heads to Jupiter's ice moon Europa in search of life, but things don't go according to plan. Starring Michael Nyqvist and Daniel Wu.",
//       "imdbUrl": "https://www.imdb.com/title/tt2051879/",
//       "tmdbImageId": "73lAZvmcuZjevJfHxcm5uGyqSMj",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "18:30",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "20:30",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 78,
//       "name": "12 Disasters",
//       "year": 2012,
//       "synopsis":
//         "A book of ancient prophecies states there will be 12 disasters that begin before the countdown to the end of the world. And strange events are already starting to happen. Stars Ed Quinn. (2012)",
//       "imdbUrl": "https://www.imdb.com/title/tt2325993/",
//       "tmdbImageId": "dUiYvgBUn3nAqRAIPpZML03bQ5u",
//       "tmdbRating": 24,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "19:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "21:00",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 79,
//       "name": "Live and Let Die",
//       "year": 1973,
//       "synopsis":
//         "This eighth film in the series marks Roger Moore's first tour of duty as James Bond. The secret agent is up against the dark powers of voodoo in the bulky shape of Yaphet Kotto, while the more curvaceous Jane Seymour as tarot-reader Solitaire is on display as Bond's love interest. Boasting as many cliff-hanging moments as a Saturday-matinée serial, this tale of a plan to turn everyone into drug addicts allows Bond's adversaries - among them sharks, snakes and crocodiles - to be as mechanical as Moore himself. There are some splendid action sequences, notably a speedboat leap that set a new world record, as well as the usual array of hi-tech gadgetry.",
//       "imdbUrl": "http://www.imdb.com/title/tt0070328/",
//       "tmdbImageId": "p34OScaro2KdISrT4EMfeh1aS0E",
//       "tmdbRating": 62,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "19:15",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "21:00",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 80,
//       "name": "The Maze Runner",
//       "year": 2014,
//       "synopsis":
//         "A boy arrives in an isolated community of children, with no memory of who he is or the outside world. When another new arrival brings an ominous message, he realises time is running out for the group and they must find an escape route through a deadly labyrinth if they are to survive. Sci-fi adventure based on James Dashner's novel, starring Dylan O'Brien, Kaya Scodelario and Patricia Clarkson.",
//       "imdbUrl": "http://www.imdb.com/title/tt1790864/",
//       "tmdbImageId": "coss7RgL0NH6g4fC2s5atvf3dFO",
//       "tmdbRating": 70,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "23:30",
//           "channel": "ITV 4"
//         }
//       ]
//     },
//     {
//       "id": 81,
//       "name": "The Commander",
//       "year": 1988,
//       "synopsis":
//         "A squad of mercenaries is sent to attack the stronghold of south-east Asia's most powerful drug lord and recover a computer disc containing vital information. Action adventure, starring Lewis Collins and Lee Van Cleef. In German.",
//       "imdbUrl": "https://www.imdb.com/title/tt0094899/",
//       "tmdbImageId": "t2EzuT70dYcZrbBIP0hJwi6lqmV",
//       "tmdbRating": 40,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "23:15",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 82,
//       "name": "I Am Wrath",
//       "year": 2016,
//       "synopsis":
//         "John Travolta stars as an unemployed everyman seeking bloody revenge for this wife's murder. Action thriller with Christopher Meloni. (2016)(89 mins) Also in HD",
//       "imdbUrl": "http://www.imdb.com/title/tt3212232/",
//       "tmdbImageId": "1fbNrOS3OLb67d7q5gZ84fPFZD",
//       "tmdbRating": 40,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "23:15",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 83,
//       "name": "Asteroid vs. Earth",
//       "year": 2014,
//       "synopsis":
//         "Sci-fi action with Tia Carrere (Relic Hunter, True Lies). When a shower of meteors threatens to destroy life on Earth, can a bold plan by a group of geniuses save the planet? (2014)",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Asteroid+vs.+Earth",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "22:55",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 84,
//       "name": "Fully Fitted Freight",
//       "year": null,
//       "synopsis":
//         "1957. Factual. Director: Ralph Keene. The story of the fast freight, 4-48 pm, Bristol-Leeds, vacuum braked throughout. Conveyed in crisp black & white images by veteran cinematographer Ronald Craigen.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Fully+Fitted+Freight",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "22:45",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 85,
//       "name": "Yield to the Night",
//       "year": null,
//       "synopsis":
//         "1956. Drama. Director: J Lee Thompson. Stars Diana Dors, Yvonne Mitchell, Michael Craig & Geoffrey Keen. A condemned murderess relives key events while waiting for the hangman's noose.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Yield+to+the+Night",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "21:35",
//           "endssAtDate": "2017-12-04",
//           "endsAtTime": "21:55",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 86,
//       "name": "Anybody's Nightmare",
//       "year": 2001,
//       "synopsis":
//         "A day trip leads to nightmare as an elderly woman is found dead in suspicious circumstances, and the finger of blame points squarely at her respectable niece. Drama based on the true story of piano teacher Sheila Fowler, whose conviction for murder on the age-old grounds of greed led to a life sentence only overturned by years of tireless campaigning on the part of her friends. Starring Patricia Routledge and Georgina Sutcliffe.",
//       "imdbUrl": "http://www.imdb.com/title/tt0287917/",
//       "tmdbImageId": "9zDLpJVUqkmNbGKGXAOkRS70jV2",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "22:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "00:00",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 87,
//       "name": "Muck",
//       "year": 2015,
//       "synopsis":
//         "Gripping horror where 'the lucky ones are already dead'...A group of friends are having a St. Patrick's Day they'll never forget - can they survive the hell of two fiendish evils? (2015)",
//       "imdbUrl": "http://www.imdb.com/title/tt2207484/",
//       "tmdbImageId": "7FCu6d96SKyGSomKbAWWkkL0oRd",
//       "tmdbRating": 35,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "22:30",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "00:30",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 88,
//       "name": "Criminal Activities",
//       "year": 2015,
//       "synopsis":
//         "Four friends stumble into a deal too good to refuse. But when the investment goes bad, they learn that funding came from a ruthless crime boss (John Travolta) and now it's payback time. (2015)",
//       "imdbUrl": "https://www.imdb.com/title/tt3687310/",
//       "tmdbImageId": "wU5TfsKFGoG16s6ACrDPtLgK74n",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "22:45",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "00:45",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 89,
//       "name": "Poltergeist ",
//       "year": 2015,
//       "synopsis":
//         "Horror remake starring Sam Rockwell and Rosemarie DeWitt. A family discovers that their new home is plagued by terrifying supernatural entities. (2015)",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Poltergeist+",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "22:55",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "01:00",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 90,
//       "name": "Wild",
//       "year": 2014,
//       "synopsis":
//         "A series of devastating personal traumas leave a woman feeling self-destructive and lost. After spending years behaving recklessly, she decides to turn things around by embarking on an epic, solo trek along America's 1,000-mile-long Pacific Crest Trail, which gives her the time and space to reassess her existence. Drama based on a true story, starring Reese Witherspoon and Laura Dern.",
//       "imdbUrl": "http://www.imdb.com/title/tt2305051/",
//       "tmdbImageId": "zpdwj7Q8ZdTX2bWbltCFjVwugJu",
//       "tmdbRating": 70,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "23:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "00:55",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 91,
//       "name": "20 Feet from Stardom",
//       "year": 2013,
//       "synopsis":
//         "(2013) Documentary Week: Morgan Neville's enthralling Oscar-winning film shines a spotlight on the people responsible for some of the best bits of our favourite songs: the backing singers.",
//       "imdbUrl": "https://www.imdb.com/title/tt2396566/",
//       "tmdbImageId": "aFQHlH23U9gHhvNn7rr38hFBYce",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "23:05",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "01:20",
//           "channel": "4Seven"
//         }
//       ]
//     },
//     {
//       "id": 92,
//       "name": "Caved In",
//       "year": 2006,
//       "synopsis":
//         "Prominent explorer John Palmer is contacted to lead an expedition in a series of disused mines in Switzerland. Halfway through the trip, the team runs into a host of deadly black beetles, but when John wants to turn back his benefactor refuses and threatens the life of his family if he declines to continue. Horror, starring Christoper Atkins and Colm Meaney.",
//       "imdbUrl": "http://www.imdb.com/title/tt0468461/",
//       "tmdbImageId": "5sg0Cfi1423KtvKXfVqvdV8pz2a",
//       "tmdbRating": 33,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "23:15",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "01:05",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 93,
//       "name": "Senna",
//       "year": 2010,
//       "synopsis":
//         "Documentary about the life of the Brazilian Formula One driver, examining his achievements on the track over a 10-year period that saw him crowned world champion three times, until his death in a crash during the 1994 San Marino Grand Prix.",
//       "imdbUrl": "http://www.imdb.com/title/tt1424432/",
//       "tmdbImageId": "wnC4TllSy7SY16wzPH42mczz97w",
//       "tmdbRating": 81,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "23:15",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "01:05",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 94,
//       "name": "McBride: The Chameleon Murder",
//       "year": 2005,
//       "synopsis":
//         "An apparently straightforward murder case takes a strange turn when the victim is discovered to have a plethora of identities - prompting McBride to investigate in an effort to prove his client innocent of the slaying. Crime drama, starring John Larroquette, Marta DuBois, Annie LaRussa and Devon Gummersall.",
//       "imdbUrl": "http://www.imdb.com/title/tt0426104/",
//       "tmdbImageId": "bjEQOMofVWi5X4klph4vaIQcziE",
//       "tmdbRating": 70,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-04",
//           "startsAtTime": "23:30",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "01:40",
//           "channel": "ITV 4"
//         }
//       ]
//     },
//     {
//       "id": 95,
//       "name": "The Day",
//       "year": 2011,
//       "synopsis":
//         "Four survivors roaming a post-apocalyptic wasteland join forces with a mysterious loner, who proves a powerful ally in defending themselves from roaming bandits. They seek shelter in an abandoned farmhouse, but are soon besieged by bloodthirsty cannibals - and discover their new friend may not be what she seems. Sci-fi thriller, starring Ashley Bell, Dominic Monaghan and Shawn Ashmore.",
//       "imdbUrl": "http://www.imdb.com/title/tt1756799/",
//       "tmdbImageId": "iRW0Bu6ywti3pmuH3V74Yt2tb3D",
//       "tmdbRating": 47,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "00:30",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "02:30",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 96,
//       "name": "Life as We Know It",
//       "year": 2010,
//       "synopsis":
//         "They can't stand each other, but they have to raise a child together. That's the premise of this unlikely, uneven and unlikeable comedy drama starring Katherine Heigl (27 Dresses) and Josh Duhamel (the Transformers films). They play warring acquaintances who become instant parents when their mutual best friends die and leave them as legal guardians of their daughter. The two leads have screen appeal, but the chemistry between them is thin, while the story is hackneyed and far-fetched; leaving a child to two workaholic narcissists doesn't ring true, and neither does Heigl running into Dr Right (Josh Lucas) within minutes of becoming a \"mother\". And the overly candid woman from Child Protective Services adds an extra frisson of risibility. Despite the morbid premise, the few poignant moments that exist are believable, if brief; Heigl in  particular acquits herself well. Look out for Christina Hendricks (Mad Men) in a brief supporting role.",
//       "imdbUrl": "http://www.imdb.com/title/tt1055292/",
//       "tmdbImageId": "u7Gei2Hvh0ux4weJRDZsgMoXSTI",
//       "tmdbRating": 65,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "00:45",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "02:35",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 97,
//       "name": "Sniper: Reloaded",
//       "year": 2011,
//       "synopsis":
//         "US Marine Sergeant Brandon Beckett, son of legendary Marine sniper Thomas Beckett (Tom Berenger from Sniper 1-3), must go on a mission in the war-ravaged Congo. Chad Michael Collins stars. (2011)",
//       "imdbUrl": "https://www.imdb.com/title/tt1571243/",
//       "tmdbImageId": "dpkM74BP9CE94fYvCKciY3UegdR",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "00:55",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "03:10",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 98,
//       "name": "Kill Your Friends",
//       "year": 2015,
//       "synopsis":
//         "(2015) Dark comedy starring Nicholas Hoult. An ambitious music company A&R man will to do anything to further his career. With James Corden. Very strong language/gory violence/drugs/sex.",
//       "imdbUrl": "https://www.imdb.com/title/tt2474958/",
//       "tmdbImageId": "7SOmrNVDnT3A2azDVEX4qsyq7Ib",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "01:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "03:00",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 99,
//       "name": "Global Effect",
//       "year": 2002,
//       "synopsis":
//         "A gang of mercenaries heads into the jungle on a mission to save a scientist kidnapped by terrorists who want her help in creating a devastating virus weapon. However, the rescue mission is jeopardised by a showdown with diamond smugglers. Action thriller, starring Madchen Amick and Daniel Bernhardt.",
//       "imdbUrl": "http://www.imdb.com/title/tt0330333/",
//       "tmdbImageId": "9qU0roUsb7PMIQ8umR1ER6LZ0py",
//       "tmdbRating": 66,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "01:05",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "03:10",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 100,
//       "name": "The Demon",
//       "year": 1978,
//       "synopsis":
//         "1980. Horror directed by Percival Rubens and starring Jennifer Holmes, Cameron Mitchell and Craig Gardner. The screams you hear may be your own!",
//       "imdbUrl": "http://www.imdb.com/title/tt0202434/",
//       "tmdbImageId": "kuY9Sr3RAaWuMzWZtzYWPkYZAkc",
//       "tmdbRating": 38,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "01:05",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "02:55",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 101,
//       "name": "The Legacy",
//       "year": 1978,
//       "synopsis":
//         "An American are couple coerced into taking refuge in a sinister-looking English country house, oblivious to the terrors they are about to face. Occult horror, starring Katharine Ross, Sam Elliott, John Standing and Ian Hogg.",
//       "imdbUrl": "http://www.imdb.com/title/tt0079450/",
//       "tmdbImageId": "Zqb4O0Z1Zhv69ZDUdeVlcwI83L",
//       "tmdbRating": 56,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "02:05",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "03:50",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 102,
//       "name": "Florence Nightingale",
//       "year": 1985,
//       "synopsis":
//         "Historical drama about the celebrated Lady with the Lamp, famous for caring for victims of the Crimean war and founding the nursing profession in the mid 19th century. Starring Jaclyn Smith, Claire Bloom, Timothy Dalton and Timothy West. Includes Movie News at 2.40pm.",
//       "imdbUrl": "http://www.imdb.com/title/tt0089157/",
//       "tmdbImageId": "vMtRgkmHqEyfSz72c3NwuqBHJLS",
//       "tmdbRating": 30,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "02:35",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "04:30",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 103,
//       "name": "Like Father, Like Son",
//       "year": 2013,
//       "synopsis":
//         "Two very different families are thrown together by the sudden discovery that their babies were switched at birth. Charming Japanese drama with subtitles. (2013)(117 mins) Also in HD",
//       "imdbUrl": "http://www.imdb.com/title/tt2331143/",
//       "tmdbImageId": "2bDZzjrE4k62GbmZZ93yF2OV83Y",
//       "tmdbRating": 75,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "03:10",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "06:00",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 104,
//       "name": "Hollywood Gong Show",
//       "year": null,
//       "synopsis":
//         "1983. Compilation of hilarious clips from Hollywood variety shows. Stars Jayne Mansfield & Mickey Rooney.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Hollywood+Gong+Show",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "03:10",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "05:10",
//           "channel": "Channel 4"
//         }
//       ]
//     },
//     {
//       "id": 105,
//       "name": "New Towns for Old",
//       "year": null,
//       "synopsis":
//         "1942. Factual. This wartime public information film combines impressive shots of industrial poverty with inspiring words scripted by Dylan Thomas, proffering new housing and better lives after the war",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=New+Towns+for+Old",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "03:50",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "05:00",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 106,
//       "name": "Behold a Pale Horse",
//       "year": 1964,
//       "synopsis":
//         "An exiled former Spanish guerrilla is drawn out of hiding after many years to bid his dying mother farewell and ends up in a violent confrontation with a brutal and vindictive chief of police. Fred Zinnemann's adventure, based on a novel by Emeric Pressburger, starring Gregory Peck, Anthony Quinn, Omar Sharif and Raymond Pellegrin.",
//       "imdbUrl": "http://www.imdb.com/title/tt0057879/",
//       "tmdbImageId": "aYyhWGHCz4juwPllDlPlIKCXj4Y",
//       "tmdbRating": 53,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "06:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "06:10",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 107,
//       "name": "Once A Sinner",
//       "year": 1950,
//       "synopsis":
//         "1950. Drama. A lowly bank clerk marries a good time girl but she two-times him for her old crooked boyfriend (Sydney Tafler). Starring Jack Watling, Pat Kirkwood and Thora Hird.",
//       "imdbUrl": "http://www.imdb.com/title/tt0042806/",
//       "tmdbImageId": "jC8oC8oyp78bphcA6AjAN136KQn",
//       "tmdbRating": 65,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "06:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "08:35",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 108,
//       "name": "Profile",
//       "year": null,
//       "synopsis":
//         "1954. Drama directed by Francis Searle and starring John Bentley, Kathleen Byron and Thea Gregory. The editor of a magazine (John Bentley) is keen on the boss's daughter but her mother is keen on him.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Profile",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "06:10",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "07:50",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 109,
//       "name": "Julius Caesar",
//       "year": 2002,
//       "synopsis":
//         "The rise to power of an idealistic youth to become ancient Rome's all-conquering ruler. His many military victories brought the city state untold wealth and power, but the Senate grew increasingly frustrated with their leader's ambition, leading to one of the most famous assassinations in history. Epic drama, starring Jeremy Sisto, Richard Harris, Christopher Walken, Chris Noth and Valeria Golino.",
//       "imdbUrl": "http://www.imdb.com/title/tt0284741/",
//       "tmdbImageId": "qxNnCRDsHqOGOp4Ji8ns7qIFqDj",
//       "tmdbRating": 35,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "08:20",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "09:40",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 110,
//       "name": "A Miracle On Christmas Lake",
//       "year": 2016,
//       "synopsis":
//         "A grieving teenager mourning the loss of his best friend discovers a magical hockey rink on a lake where the friends used to play. (2016)",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=A+Miracle+On+Christmas+Lake",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "08:35",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "11:15",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 111,
//       "name": "Tower of Terror",
//       "year": null,
//       "synopsis":
//         "1941. Thriller. Director: Lawrence Huntington. Stars: Wilfrid Lawson & Michael Renni. A British agent in Germany takes a job at a lighthouse and plans to escape with some valuable documents, via boat.",
//       "imdbUrl": "http://www.imdb.com/title/tt0067243/",
//       "tmdbImageId": "h2pREUTqesd91jsEG59aDwPj2Gd",
//       "tmdbRating": 50,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "09:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "11:25",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 112,
//       "name": "Man without a Star",
//       "year": 1955,
//       "synopsis":
//         "This fine Technicolor western was made by King Vidor immediately before his War and Peace, and features the wonderful Kirk Douglas in an all-grinning, all-snarling portrayal, the kind of role he was born to play. He sings and strums a banjo, too! There's a tremendous sexual tension generated between Douglas and manipulative ranch owner Jeanne Crain that's reminiscent of Vidor's other two steamy dramas, Duel in the Sun and Ruby Gentry. The psychological slant is also cleverly integrated, as juvenile William Campbell idolises the rascally Douglas. There's some welcome by-play from Stagecoach's Claire Trevor as the other woman and a particularly nasty but important barbed wire whipping sequence. Universal remade this poorly in 1969 as A Man Called Gannon.",
//       "imdbUrl": "http://www.imdb.com/title/tt0048340/",
//       "tmdbImageId": "aOFvBuzVZ1IzL3lZToyyhZYQhQM",
//       "tmdbRating": 63,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "09:40",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "11:15",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 113,
//       "name": "Good Witch, Bad Witch",
//       "year": 2011,
//       "synopsis":
//         "Family fantasy sequel starring Catherine Bell and Matthew Knight. Good witch Cassie Nightingale's life is thrown into disarray when her cousin Abigail comes to stay. (2011)[S]",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Good+Witch,+Bad+Witch",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "11:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "12:50",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 114,
//       "name": "The Hellhounds Of Alaska",
//       "year": 1973,
//       "synopsis":
//         "A brave fur trapper battles the elements across dangerous terrain to transport a very sick boy to a distant medical centre. Stars Doug McCure.",
//       "imdbUrl": "http://www.imdb.com/title/tt0069809/",
//       "tmdbImageId": "oqhDBWtlspjYBWcbERO7ZnkkcEk",
//       "tmdbRating": 40,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "11:05",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "13:00",
//           "channel": "Five USA"
//         }
//       ]
//     },
//     {
//       "id": 115,
//       "name": "12 Men of Christmas",
//       "year": 2009,
//       "synopsis":
//         "When a high-powered PR executive moves to a small town, she tries to convince the local search-and-rescue team to pose for a charity calendar. (2009)",
//       "imdbUrl": "http://www.imdb.com/title/tt1446201/",
//       "tmdbImageId": "8dJ53wXIPF5SdfkFHF0gDwjIPlg",
//       "tmdbRating": 53,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "11:15",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "13:10",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 116,
//       "name": "Christmas Angel",
//       "year": 2012,
//       "synopsis":
//         "When Christmas wishes begin to come true, a young girl who longs for the father she never had meets a reclusive neighbour who may be able to help her. Family drama, starring Della Reese, Teri Polo and Tamera Mowry-Housley.",
//       "imdbUrl": "http://www.imdb.com/title/tt2228450/",
//       "tmdbImageId": "hX5dnDFOKN4hveME43l7JhC4fOh",
//       "tmdbRating": 47,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "11:25",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "13:25",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 117,
//       "name": "The Golden Disc",
//       "year": 1958,
//       "synopsis":
//         "1958. Pop drama starring Lee Patterson, Mary Steele, Terry Dene & Linda Gray. A young pop composer and singer opens a coffee bar. They are joined by budding singer Terry Dene as himself.",
//       "imdbUrl": "http://www.imdb.com/title/tt0051671/",
//       "tmdbImageId": "mwLcVB9pnVIR0ubZpPug17PUTS8",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "11:35",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "13:25",
//           "channel": "Channel 5"
//         }
//       ]
//     },
//     {
//       "id": 118,
//       "name": "A Nanny for Christmas",
//       "year": 2010,
//       "synopsis":
//         "An unemployed advertising executive gets a job as an au pair and tries to give the kids in her charge a break from their rigidly organised lives. She tries to impress an executive she is attracted to by claiming to still be in the advertising business, a deception that proves hard to maintain. Romantic comedy, starring Emmanuelle Vaugier and Richard Ruccolo.",
//       "imdbUrl": "http://www.imdb.com/title/tt1572008/",
//       "tmdbImageId": "wtKVfVNH6KfDMDDUekeOUEv1BdG",
//       "tmdbRating": 53,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "12:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "13:35",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 119,
//       "name": "The Rare Breed",
//       "year": 1966,
//       "synopsis":
//         "British farmer Martha Price takes her prize bull to St Louis to breed with American longhorn cattle, and becomes romantically entangled with two men - a former business associate and a rancher. Romantic comedy, starring Maureen O'Hara, James Stewart, Brian Keith, Juliet Mills, Ben Johnson and Jack Elam.",
//       "imdbUrl": "http://www.imdb.com/title/tt0060884/",
//       "tmdbImageId": "xbmiydzCXb04sbY2hsDnVtuGb5j",
//       "tmdbRating": 47,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "12:25",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "14:10",
//           "channel": "Channel 4"
//         }
//       ]
//     },
//     {
//       "id": 120,
//       "name": "The Man Who Haunted Himself",
//       "year": 1970,
//       "synopsis":
//         "A respectable executive recovers after a car accident, only to find that he has been seen in places he has never been to, has ruined his own business and is having an affair. He becomes convinced a double of him now exists, and is destroying his life, but also fears he may be losing his mind. Psychological thriller, starring Roger Moore, Hildegarde Neil, Anton Rodgers and Freddie Jones.",
//       "imdbUrl": "http://www.imdb.com/title/tt0066053/",
//       "tmdbImageId": "2xhsEd05QJ6UKMwNzBdNnyRgJYk",
//       "tmdbRating": 69,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "12:50",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "14:45",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 121,
//       "name": "Christmas in Canaan",
//       "year": 2009,
//       "synopsis":
//         "Love is the glue in this warm but idealistic family heart-tugger, based on a novel co-written by country singer Kenny Rogers. Opening in 1960s Texas, it sees Billy Ray Cyrus's principled widower initiate an unlikely friendship between his farmboy son and a bookish black classmate when he forces them to spend time together as punishment for fighting each other. One injured puppy and some clunky acting and dialogue later, and the lads have naturally bonded for life: the first in a series of rushed and simplistic resolutions as the episodic narrative then leaps forward seven years. From here, the film covers so much ground that it barely does any event justice, sadly diluting the impact of even the most dramatic moments.",
//       "imdbUrl": "http://www.imdb.com/title/tt1410013/",
//       "tmdbImageId": "w8Xpwpk0QJkydkD3eWBqlFU7Daf",
//       "tmdbRating": 60,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "13:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "14:50",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 122,
//       "name": "His Name Was King",
//       "year": 1971,
//       "synopsis":
//         "A cowboy makes an unexpected discovery as he attempts to stop a band of criminals smuggling weapons across the Mexican border. Western, starring Klaus Kinski, Richard Benjamin, Anne Puskin and Goffredo Unger.",
//       "imdbUrl": "http://www.imdb.com/title/tt0067354/",
//       "tmdbImageId": "lIx6orn9Vrm92GP3VDMp9rfPi9A",
//       "tmdbRating": 66,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "13:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "15:00",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 123,
//       "name": "Electric Dreams",
//       "year": 1984,
//       "synopsis":
//         "A man falls hopelessly in love with his neighbour, only to discover his rival for her affections is none other than his super-computer - and the ensuing feud soon leaves him in peril. Sci-fi comedy, starring Lenny von Dohlen, Maxwell Caulfield and Virginia Madsen.",
//       "imdbUrl": "http://www.imdb.com/title/tt0087197/",
//       "tmdbImageId": "8wPmd5UothUkQQ8jqjgQOj1DTc9",
//       "tmdbRating": 61,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "13:10",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "14:55",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 124,
//       "name": "My Foolish Heart",
//       "year": null,
//       "synopsis":
//         "1949. Drama. Director: Mark Robson. Stars Dana Andrews, Susan Hayward & Lois Wheeler. Mary Jane travels to Connecticut to visit her old friend Eloise, whom she hasn't seen for seven years.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=My+Foolish+Heart",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "13:35",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "15:40",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 125,
//       "name": "Christmas Apprentice",
//       "year": 2016,
//       "synopsis":
//         "Seasonal romantic comedy starring Abigail Hawk and Chevy Chase. A young banker is sent to a Vermont town to liquidate a small business but falls in love with its youthful CEO. (2016)",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=Christmas+Apprentice",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "14:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "16:00",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 126,
//       "name": "The Spoilers",
//       "year": 1955,
//       "synopsis":
//         "Two successful gold prospectors team up with a saloon owner in 19th-century Alaska to protect their mining rights from an unscrupulous rival and a corrupt judge determined to get rich at their expense. Western, starring Anne Baxter, Jeff Chandler and Rory Calhoun.",
//       "imdbUrl": "http://www.imdb.com/title/tt0048652/",
//       "tmdbImageId": "arqLU3VUT389hPN0WmHwjyWar0h",
//       "tmdbRating": 50,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "14:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "15:40",
//           "channel": "Channel 5"
//         }
//       ]
//     },
//     {
//       "id": 127,
//       "name": "The Heart of Christmas",
//       "year": 2011,
//       "synopsis":
//         "A successful businesswoman struggling to make time for her children is moved by the story of a boy who was diagnosed with terminal cancer. Realising he may not live long enough to swee another Christmas, his parents decided to celebrate the holiday in October. Drama, starring Candace Cameron Bure and Jeanne Neilson, with Christopher and Nicholas Shone doubling up as the youngster.",
//       "imdbUrl": "https://www.imdb.com/title/tt2094146/",
//       "tmdbImageId": "72znD0wRsbpnPQNx3378vtt2fcl",
//       "tmdbRating": 52,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "14:50",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "16:30",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 128,
//       "name": "Call Me Claus",
//       "year": 2001,
//       "synopsis":
//         "A cynical female TV producer hires a man to play Santa Claus in a programme. He turns out to be the real Father Christmas, and has come on a special mission to melt her icy heart and persuade her to take over the reindeer reins as the new face of the festive season. Family drama, starring Whoopi Goldberg, Nigel Hawthorne, Brian Mitchell and Victor Garber.",
//       "imdbUrl": "http://www.imdb.com/title/tt0272018/",
//       "tmdbImageId": "2c2UnA89VL2Je1tUTKSngamnpT8",
//       "tmdbRating": 54,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "15:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "17:00",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 129,
//       "name": "The Musketeer",
//       "year": 2001,
//       "synopsis":
//         "A peasant boy sets off for Paris on a mission to join the legendary royal guards and track down the mysterious man who killed his father. However, he makes powerful enemies in the city as he battles to protect the queen. Swashbuckling adventure, starring Justin Chambers, Catherine Deneuve, Mena Suvari and Tim Roth.",
//       "imdbUrl": "https://www.imdb.com/title/tt0246544/",
//       "tmdbImageId": "iNbanopijiXsrJ5v0KFuv84MlGE",
//       "tmdbRating": 53,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "15:40",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "17:30",
//           "channel": "Channel 5"
//         }
//       ]
//     },
//     {
//       "id": 130,
//       "name": "Submarine Raider",
//       "year": 1942,
//       "synopsis":
//         "An American yacht is sunk by a Japanese submarine which is on its way to Pearl Harbor. Will anyone on the yacht survive to warn of the imminent attack? Stars John Howard. (1942)",
//       "imdbUrl": "https://www.imdb.com/title/tt0035391/",
//       "tmdbImageId": "9CLZ81NyT7YoCcEPg0oeBpLbXxh",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "15:50",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "18:05",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 131,
//       "name": "She",
//       "year": null,
//       "synopsis":
//         "1965. Adventure. Director: Robert Day. Stars Ursula Andress, John Richardson, Peter Cushing & Christopher Lee. Archaeologists stumble across a lost city, run by a beautiful immortal Queen.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=She",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "15:55",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "17:25",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 132,
//       "name": "Monster!",
//       "year": 1999,
//       "synopsis":
//         "A small town hosts a monster movie extravaganza, only for the creatures in the films to come to life and wreak havoc on the unsuspecting community. Horror, starring M Emmet Walsh and Tobias Mehler.",
//       "imdbUrl": "http://www.imdb.com/title/tt1226276/",
//       "tmdbImageId": "tDJMYRsqx0iXwRyR6CMJma4EaVG",
//       "tmdbRating": 62,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "16:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "18:00",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 133,
//       "name": "Halls of Montezuma",
//       "year": 1950,
//       "synopsis":
//         "A US Marine unit fighting in the Pacific is ordered to capture Japanese troops so they can be interrogated for information about a new weapons base - but the mission proves far more difficult than expected. Second World War adventure, starring Richard Widmark, Jack Palance, Reginald Gardiner, Robert Wagner and Karl Malden.",
//       "imdbUrl": "http://www.imdb.com/title/tt0042539/",
//       "tmdbImageId": "8UpADrZUKhO2Qe6tiCLuyWe2jko",
//       "tmdbRating": 55,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "16:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "17:50",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 134,
//       "name": "Submarine Seahawk",
//       "year": 1959,
//       "synopsis":
//         "The crew of a submarine become angered by their new commander's lack of leadership experience and hesitancy to attack nearby Japanese warships. Second World War drama, starring John Bentley, Brett Halsey and Wayne Heffley.",
//       "imdbUrl": "http://www.imdb.com/title/tt0052256/",
//       "tmdbImageId": "m6B1RGaWCXC5ecbs5ow54fPI9rh",
//       "tmdbRating": 71,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "16:30",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "18:50",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 135,
//       "name": "Jules Verne's Rocket to the Moon",
//       "year": 1967,
//       "synopsis":
//         "Legendary American showman Phineas T Barnum designs a space rocket, which he hopes will take him to the moon, but his scheme is threatened when two crooks get wind of his plan and decide to sabotage the craft. Sci-fi comedy, starring Terry-Thomas, Lionel Jeffries, Burl Ives, Gert Frobe, Dennis Price and Hermione Gingold.",
//       "imdbUrl": "http://www.imdb.com/title/tt0062363/",
//       "tmdbImageId": "nltlbiv2SI6tpEFBf2sQZRTJ2NY",
//       "tmdbRating": 78,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "17:25",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "19:10",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 136,
//       "name": "The Mask of Zorro",
//       "year": 1998,
//       "synopsis":
//         "Zorro may wear a mask, but there's no disguising the fact that this is an absolutely splendid swashbuckler. Anthony Hopkins plays the original righter of wrongs, who hands over his rapier, and his mission, to the younger Antonio Banderas. Catherine Zeta-Jones, as the fiery heroine, proves she's a match for the men in the action sequences. Director Martin Campbell (following on from the success of blockbuster Bond movie GoldenEye) makes the most of the dramatic swordplay and paces the film perfectly to its explosive conclusion.",
//       "imdbUrl": "http://www.imdb.com/title/tt0120746/",
//       "tmdbImageId": "eh59q4ksXDQc97s52FUUQOkE8Th",
//       "tmdbRating": 62,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "18:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "20:20",
//           "channel": "Talking Pictures"
//         }
//       ]
//     },
//     {
//       "id": 137,
//       "name": "The Choir",
//       "year": 2014,
//       "synopsis":
//         "(2014) Drama starring Dustin Hoffman and Garrett Wareing. After his mother dies in a car crash, a troubled boy is sent to a prestigious national academy that focuses on choral music.",
//       "imdbUrl": "http://www.imdb.com/find?s=tt&q=The+Choir",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "18:05",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "21:00",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 138,
//       "name": "Super Eruption",
//       "year": 2011,
//       "synopsis":
//         "A devastating volcanic eruption occurs in the centre of Yellowstone Park. A firefighter and a vulcanologist pool their specialist skills to save as many lives from the catastrophe as possible. Disaster movie, starring Juliet Aubrey, Richard Burgi and MyAnna Buring.",
//       "imdbUrl": "http://www.imdb.com/title/tt1697075/",
//       "tmdbImageId": "yb1tFxmuU9xKZVP8wI1ueuLtTbB",
//       "tmdbRating": 30,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "18:55",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "21:00",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 139,
//       "name": "The Man with the Golden Gun",
//       "year": 1974,
//       "synopsis":
//         "This is an improvement on Ian Fleming's novel, with Christopher Lee making a fine villain, sporting a golden gun, a third nipple and a tiny henchman called Nick Nack, who's wittily played by Herve Villechaize. Britt Ekland is funny, too, sending herself up as Bond's clueless assistant and surviving the most sexist scene in the entire 007 series: \"Forgive me darling, your turn will come,\" Roger Moore assures her after he's dallied with Maud Adams. The use of the old Cunard liner Queen Elizabeth is clever, but there are major faults as well - notably the repeat of the pre-credit scene for the climax (borrowing from Orson Welles's The Lady from Shanghai) and the return of redneck sheriff Clifton James from Live and Let Die. Thailand's Phang-Nga Bay was a stunning choice of location, though it was soon to become a tourist trap.",
//       "imdbUrl": "http://www.imdb.com/title/tt0071807/",
//       "tmdbImageId": "7VSVgxAvA7IdTf8T6Oon1eaReeJ",
//       "tmdbRating": 62,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "19:10",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "21:00",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 140,
//       "name": "The Legend of Hercules",
//       "year": 2014,
//       "synopsis":
//         "The son of a Greek God and a mortal queen grows up blessed with superhuman strength. He is betrayed and sold into slavery by his evil stepfather, but he regains his freedom and hones his fighting skills so he can return and reclaim his rightful kingdom. Mythological adventure, starring Kellan Lutz and Gaia Weiss.",
//       "imdbUrl": "http://www.imdb.com/title/tt1043726/",
//       "tmdbImageId": "eIHrBHeqfQodgEjSPdZWh9b5lV3",
//       "tmdbRating": 44,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "23:35",
//           "channel": "ITV 4"
//         }
//       ]
//     },
//     {
//       "id": 141,
//       "name": "Captain America: the First Avenger",
//       "year": 2011,
//       "synopsis":
//         "A puny but brave volunteer is rejected for military service during the Second World War. He becomes the test subject for an experiment that transforms him into the ultimate soldier, and battles against a secret Nazi society plotting to harness the powers of a mystical artefact. Superhero adventure, with Chris Evans, Hugo Weaving, Hayley Atwell and Tommy Lee Jones.",
//       "imdbUrl": "http://www.imdb.com/title/tt0458339/",
//       "tmdbImageId": "vSNxAJTlD0r02V9sPYpOjqDZXUK",
//       "tmdbRating": 65,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "22:55",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 142,
//       "name": "Officer Down",
//       "year": 2005,
//       "synopsis":
//         "Sherilyn Fenn stars in this thriller as a policewoman who unwittingly puts her family in danger when she uncovers corruption in her department. (2005)",
//       "imdbUrl": "https://www.imdb.com/title/tt0416085/",
//       "tmdbImageId": "8xZv2pfjcmCHZx3XtswuRqjwqq",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "23:25",
//           "channel": "Film 4"
//         }
//       ]
//     },
//     {
//       "id": 143,
//       "name": "Kingdom of Heaven",
//       "year": 2005,
//       "synopsis":
//         "Gladiator director Ridley Scott once again finds inspiration in the past with this exciting mix of action, adventure and history lesson. Orlando Bloom stars as 12th-century French blacksmith Balian, who loses his family and is invited to the Holy Land by the Crusader father (Liam Neeson) previously unknown to him. The uneasy peace in Jerusalem between the Christians, under King Baldwin IV (Edward Norton), and the neighbouring Muslim forces of Saladin (a wonderful Ghassan Massoud) is threatened by fanatics, prompting Balian to defend the city against overwhelming odds. A story about western forces in the Middle East has obvious contemporary resonance, but Scott steps skilfully through the minefield, stressing the desirability of co-existence and tolerance and the dangers of fundamentalism. Bloom is rather unconvincing as a leader of men, but the siege is breathtaking, the characters colourful, and there's even some intelligent dialogue.",
//       "imdbUrl": "http://www.imdb.com/title/tt0320661/",
//       "tmdbImageId": "aB4urkgTxBURJMUkd0kceDD7FUM",
//       "tmdbRating": 64,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "23:00",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 144,
//       "name": "Jeepers Creepers 2",
//       "year": 2003,
//       "synopsis":
//         "Director Victor Salva returns with his bat-winged creation \"The Creeper\" for this campy sequel to the popular 2001 horror shocker. Here, the flying flesh-eater has one more day to gorge on human body parts before his automatic hibernation cycle begins. What unfolds is a B-movie-style monster flick, as the creature disables a school bus and then starts picking off his chosen victims from the obnoxious teens within. The bickering youngsters provide plenty of tension as they try to formulate their escape, while the isolated, largely night-time setting adds to the overall sense of vulnerability and unease. Yet, for all its gory chills, the film is predominantly tongue-in-cheek and blackly comic, thus avoiding the logic flaws that ultimately hampered the original. Returning actor Jonathan Breck is joyously over the top as the famished fiend, but it's avenging father Ray Wise in Captain Ahab mode who gives the relentless tale its most theatrical shot of fun.",
//       "imdbUrl": "http://www.imdb.com/title/tt0301470/",
//       "tmdbImageId": "kYeoI6pFmt4mH6yndFgg0lyQZvL",
//       "tmdbRating": 55,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-06",
//           "endsAtTime": "00:05",
//           "channel": "Sony Movie Channel"
//         }
//       ]
//     },
//     {
//       "id": 145,
//       "name": "Layer Cake",
//       "year": 2004,
//       "synopsis":
//         "Marking the directorial debut of Lock, Stock and Two Smoking Barrels producer Matthew Vaughn, this decent enough British crime thriller is done few favours by its nondescript title. Daniel Craig plays a rising young drug dealer whose ambition is to make some quick money and then retire early to enjoy it. His plans - involving a massive shipment of ecstasy - are complicated by drugs lord Kenneth Cranham, who asks him to find the wayward daughter of an associate (dodgy businessman Michael Gambon). The performances are good, and Vaughn directs with assuredness and aplomb, but there's an over-familiarity about the subject matter that suggests it's time for Vaughn and his crime-movie contemporaries to seek inspiration elsewhere.",
//       "imdbUrl": "http://www.imdb.com/title/tt0375912/",
//       "tmdbImageId": "y6BzUkrx789OhVMDXZiBBVHu6OQ",
//       "tmdbRating": 70,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "21:00",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "23:00",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 146,
//       "name": "American Heist",
//       "year": 2014,
//       "synopsis":
//         "A man with a shady past is planning to start his own business, but is drawn back into the criminal underworld when his brother is released from prison. The ex-convict has a dangerous plan for an elaborate bank robbery, and family loyalty drives his brother to get involved. Crime drama, starring Adrien Brody, Hayden Christensen and Jordana Brewster.",
//       "imdbUrl": "http://www.imdb.com/title/tt2923316/",
//       "tmdbImageId": "eqqf7DvhOBaEHiqLMkMMp0e8wzp",
//       "tmdbRating": 43,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "22:55",
//           "endssAtDate": "2017-12-05",
//           "endsAtTime": "23:55",
//           "channel": "5*"
//         }
//       ]
//     },
//     {
//       "id": 147,
//       "name": "Hangman",
//       "year": 2015,
//       "synopsis":
//         "Chilling suburban scares. A family returns from their holiday to find their home has been broken into, but this is just the start of their nightmare. (2015)",
//       "imdbUrl": "https://www.imdb.com/title/tt4441422/",
//       "tmdbImageId": "mxav7LV56dr3bf4DvSUvSXuR1l0",
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "23:00",
//           "endssAtDate": "2017-12-06",
//           "endsAtTime": "01:00",
//           "channel": "Movies4Men"
//         }
//       ]
//     },
//     {
//       "id": 148,
//       "name": "The Stalker's Apprentice",
//       "year": 1998,
//       "synopsis":
//         "Marcus Walwyn develops a fatal obsession for a young girl he meets on a train. Corrupted by a book he reads by the convicted serial killer Helmut Kranze he embarks on a murderous mission. (1998)",
//       "imdbUrl": "http://www.imdb.com/title/tt0135658/",
//       "tmdbImageId": null,
//       "tmdbRating": 0,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "23:00",
//           "endssAtDate": "2017-12-06",
//           "endsAtTime": "00:40",
//           "channel": "Horror Channel"
//         }
//       ]
//     },
//     {
//       "id": 149,
//       "name": "Contraband",
//       "year": 2012,
//       "synopsis":
//         "Successful international smuggler Chris Farraday turns his back on a life of crime to raise a family. However, his brother-in-law crosses a powerful drug lord, who forces Chris to transport billions of dollars of counterfeit money into the US, or his wife and children will be killed. Crime thriller, starring Mark Wahlberg, Kate Beckinsale, Giovanni Ribisi and Ben Foster.",
//       "imdbUrl": "http://www.imdb.com/title/tt1524137/",
//       "tmdbImageId": "1po0IPambMJmBhUD9rwd41M9Jmh",
//       "tmdbRating": 61,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "23:00",
//           "endssAtDate": "2017-12-06",
//           "endsAtTime": "00:45",
//           "channel": "True Entertainment"
//         }
//       ]
//     },
//     {
//       "id": 150,
//       "name": "Bullitt",
//       "year": 1968,
//       "synopsis":
//         "A tough police detective is assigned to protect a Mob witness for 48 hours, only for hitmen to find their hiding place and try to silence the informant. The rebellious cop realises something does not add up and goes in search of both the killers and whoever told them where to locate their target - but an ambitious politician wants him off the case. Thriller, starring Steve McQueen, Jacqueline Bisset, Robert Vaughn and Robert Duvall.",
//       "imdbUrl": "http://www.imdb.com/title/tt0062765/",
//       "tmdbImageId": "oyhnoFu2oKQfAIdu9YU8I8Ne0pX",
//       "tmdbRating": 68,
//       "showtimes": [
//         {
//           "startsAtDate": "2017-12-05",
//           "startsAtTime": "23:25",
//           "endssAtDate": "2017-12-06",
//           "endsAtTime": "01:35",
//           "channel": "Film 4"
//         }
//       ]
//     }
//   ]
// };

export default initial;