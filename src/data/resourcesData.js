const resources = [
  {
    title: "Oxford Top 3000 Words",
    description:
      "The Oxford 3000 is the list of the 3000 most important words to learn in English, from A1 to B2 level.",
    link: "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/American_Oxford_3000_by_CEFR_level.pdf",
    category: "Word",
    image:
      "https://i.pinimg.com/originals/af/2a/d7/af2ad7bd9724ff1207ae28e85e893387.jpg",
  },
  {
    title: "Oxford Top 5000 Words",
    description:
      "The Oxford 5000 is an expanded core word list for advanced learners of English. As well as the Oxford 3000, it includes an additional 2000 words for learners at B2-C1 level, which are listed here. ",
    link: "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/American_Oxford_5000_by_CEFR_level.pdf",
    category: "Word",
    image:
      "https://i.pinimg.com/originals/b8/89/37/b8893770062ff3d66045c39b8d5700d6.jpg",
  },
  {
    title: "Oxford Phrase List",
    description:
      "The Oxford Phrase List is a list of 750 common phrases from A1 to C1 level. It includes idioms, phrasal verbs, compounds, collocations, prepositional phrases and other common fixed phrases. ",
    link: "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-phrase-list/Oxford%20Phrase%20List.pdf",
    category: "Word",
    image:
      "https://i.pinimg.com/originals/09/f0/e9/09f0e9b6e5def0588e9681d6aa5a14ef.jpg",
  },
  {
    title: 'English Today',
    description:
      "DVD Series for learning english.",
    link: "https://www.youtube.com/playlist?list=PLZeqxFXbHQTn2AkZ_TjFkFjLK71TIp4eo",
    category: "Series",
    image:
      "https://i.pinimg.com/originals/68/0f/94/680f941f7c7293539d5a2930105b06bc.jpg",
  },
  {
    title: "BBC Extr@",
    description:
      "Sitcom for learning english. ",
    link: "https://diziyleogren.com/blog/ingilizce-dizi-ve-filmlerde-en-sik-kullanilan-5000-kelime",
    category: "Series",
    image:
      "https://i.pinimg.com/originals/ae/2a/bf/ae2abf148b66b376e7eb3b4bd76cd827.jpg",
  },
  {
    title: "Oxford Daily",
    description:
    "Miniseries for learning english.",
    link: "https://www.youtube.com/playlist?list=PLnVI9JDrMzHhPALoXzgRKN5tTtJLGX5SI",
    category: "Series",
    image:
      "https://i.pinimg.com/originals/04/a1/68/04a168a3d8a6452ece9ad874665cc933.jpg",
  },
  {
    title: "ESL Videos",
    description:
      "Each category has approximately 30 YouTube videos, and each video comes with an accompanying quiz.",
    link: "https://eslvideo.com/index.php",
    category: "Listening",
    image:
      "https://i.pinimg.com/originals/09/ac/84/09ac84c81716680ba7bfaa626d5c6b56.jpg",
  },
  {
    title: "English7",
    description:
      "English listening practice | Learning english listening with subtitle. 20+ Hours...",
    link: "https://www.youtube.com/playlist?list=PLnVI9JDrMzHhtDdYn__H2DDWlAfV1uZP6",
    category: "Listening",
    image:
      "https://i.pinimg.com/originals/56/43/68/564368e4511cf0bfaff65f3e95e0aea5.jpg",
  },
  {
    title: "Daily English Conversation",
    description:
      "Learning english listening with subtitle....",
    link: "https://www.youtube.com/playlist?list=PLTyvAtj9OYb3Hm0HMDccU3A68MJfK603h",
    category: "Listening",
    image:
      "https://i.pinimg.com/originals/e7/d1/a9/e7d1a940c78d4489149d73eaee15ff92.jpg",
  },
  {
    title: "Easy  English",
    description:
      "Easy English is a project that will help you learn English in an authentic and fun way. They interview people in the streets of Brighton and other cities of England, as well as produce videos for beginners from our homes. All our videos have subtitles in English.",
    link: "https://www.youtube.com/channel/UCvgLaFuTGGRXl0eyvBRCifA",
    category: "Channel",
    image:
      "https://i.pinimg.com/originals/d2/c6/4b/d2c64bb6be3a7248852f0d2e811cbf94.jpg",
  },
  {
    title: "English Addict with Mr Duncan",
    description:
      "Misterduncan is passionate about his topic. He’s excited about English and you can feel it in these well-made videos. He uses humor a lot of the time to help you learn. Misterduncan teaches English to the world for free.",
    link: "https://www.youtube.com/misterduncanchina/featured",
    category: "Channel",
    image:
      "https://i.pinimg.com/originals/40/87/05/408705498708e564254fc74eaf152349.jpg",
  },
  {
    title: "Real English",
    description:
      "Real English is one of the best YouTube channels for English language beginners and has a large library of free lessons.Each one includes two videos, one with subtitles and one without and a handful of exercises.",
    link: "https://www.youtube.com/user/realenglish1/featured",
    category: "Channel",
    image:
      "https://i.pinimg.com/originals/cb/c5/6b/cbc56bbef0b7df2b3b9655cc48ae4623.jpg",
  },
  {
    title: "ESL",
    description:
      "These books can be used online free. ESL students, English students, English teachers, ESL teachers, schools, educational centers, and places where they can not afford to buy an English grammar book and worksheets.",
    link: "https://www.eslpages.com/skills/grammar/download-free-english-grammar-books-and-worksheets",
    category: "Work Book",
    image:
      "https://i.pinimg.com/originals/5c/8e/d3/5c8ed3d00cee1bb78fe09e338a00c4b6.jpg",
  },
  {
    title: "Oxford Guide to English Grammar",
    description:
      "“Oxford Guide to English Grammar,” by John Eastwood, is a comprehensive grammar reference book that you should always keep at your fingertips. It covers all the key grammar topics in detail, and is a great book for understanding the patterns and structures of the English language.",
    link: "https://www.uop.edu.jo/download/research/members/oxford_guide_to_english_grammar.pdf",
    category: "Work Book",
    image:
      "https://i.pinimg.com/originals/a7/f0/19/a7f01943183a91f724b06e84aad4aeee.jpg",
  },
  {
    title: "English4u",
    description:
      "English 4U is a wonderful website, filled with resources for non-native speakers who’ve just begun their English learning process. Their website has two free grammar books available for download.",
    link: "https://www.english-4u.de/worksheets.htm",
    category: "Work Book",
    image:
      "https://i.pinimg.com/originals/2f/47/37/2f47374ceff9e7eda8a65086de2686e2.jpg",
  },
  {
    title: "Rong-Chang",
    description:
      "On this site you can read short stories under various titles and then do reading comprehension activities such as filling in the blanks or making sentences (you can choose the activity by clicking the links at the end of the story).",
    link: "https://www.rong-chang.com/",
    category: "Reading",
    image:
      "https://i.pinimg.com/originals/65/f3/f4/65f3f4182eaff1605f55cab2da87ffea.jpg",
  }, 
  {
    title: "Khan Academy",
    description:
      "Khan Academy offers some sample exams and reading passages from the SAT, a standardized exam that many high school students in the US take before entering college.",
    link: "https://www.khanacademy.org/test-prep/sat/sat-reading-writing-practice",
    category: "Reading",
    image:
      "https://i.pinimg.com/originals/9f/7f/ca/9f7fcad09e93fc9a6715bf0af180e2c5.jpg",
  },
  {
    title: "EreadingWorksheets",
    description:
      "ereadingworksheets offers a collection of stories designed for beginners to practice their English language skills.",
    link: "https://www.ereadingworksheets.com/e-reading-worksheets/online-reading-tests/",
    category: "Reading",
    image:
      "https://i.pinimg.com/originals/41/bc/f6/41bcf6e7f6575292612984cbf514c5d8.jpg",
  },
  //
  {
    title: "LEO Network",
    description:
      "The site offers 11 units divided into 54 lessons, and each lesson covers one grammar topic. The lessons include explanations, examples, tests and songs or videos related to the topic of the lesson.",
    link: "https://learn-english-online.org/",
    category: "Courses",
    image:
      "https://i.pinimg.com/originals/df/80/1b/df801b5e0e6d8c05868276199e20c0a8.jpg",
  },
  {
    title: "BBC Learning English",
    description:
      "The lessons teach English concepts while discussing certain topics (such as money or the news). Lessons can include videos, audio clips and text descriptions.",
    link: "https://www.bbc.co.uk/learningenglish/english/",
    category: "Courses",
    image:
      "https://i.pinimg.com/originals/2e/21/7d/2e217d3e25984d2dce247580fa2ed3e7.jpg",
  },
  {
    title: "King Collage",
    description:
      "Learn basic English for everyday situations and improve your listening skills with this online English language course.",
    link: "https://www.futurelearn.com/courses/basic-english-elementary",
    category: "Courses",
    image:
      "https://i.pinimg.com/originals/80/17/11/801711f1b9b03de97ab28f64aeaabc8f.jpg",
  },
  
]

export default resources