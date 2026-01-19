import { DailyVerse, Prayer, PrayerCategory, VideoCourse, Testimony, TriviaBook, TriviaQuestion, Lesson } from "./types";

export const DAILY_VERSE: DailyVerse = {
  text: "For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope.",
  reference: "Jeremiah 29:11"
};

export const VIDEO_COURSES: VideoCourse[] = [
  {
    id: '1',
    title: "What is Justification?",
    description: "Understanding the foundational doctrine of how we are made right with God.",
    duration: "12:30",
    thumbnailUrl: "https://picsum.photos/400/225?grayscale"
  },
  {
    id: '2',
    title: "The Power of Prayer",
    description: "How consistent communication with the Father transforms your spiritual walk.",
    duration: "18:45",
    thumbnailUrl: "https://picsum.photos/400/226?grayscale"
  },
  {
    id: '3',
    title: "Walking in the Spirit",
    description: "Distinguishing between the flesh and the spirit in daily life.",
    duration: "15:10",
    thumbnailUrl: "https://picsum.photos/400/227?grayscale"
  },
];

export const TESTIMONIES: Testimony[] = [
  {
    id: 't1',
    name: "Umika Rose-Lambert",
    title: "From Broken to Healed",
    description: "I went from broken to healed. Watch my testimony about God's saving grace.",
    thumbnailUrl: "https://picsum.photos/100/100?grayscale"
  },
  {
    id: 't2',
    name: "John Doe",
    title: "Financial Breakthrough",
    description: "How trusting God with my finances changed everything.",
    thumbnailUrl: "https://picsum.photos/100/101?grayscale"
  },
  {
    id: 't3',
    name: "Sarah Jenkins",
    title: "Saved from Anxiety",
    description: "Finding peace in the midst of a mental health battle.",
    thumbnailUrl: "https://picsum.photos/100/102?grayscale"
  },
  {
    id: 't4',
    name: "David Chen",
    title: "Restored Marriage",
    description: "God healed our relationship when we thought it was over.",
    thumbnailUrl: "https://picsum.photos/100/103?grayscale"
  },
  {
    id: 't5',
    name: "Rachel Alucard",
    title: "Finding Purpose",
    description: "I was lost in my career until God opened a door I never expected.",
    thumbnailUrl: "https://picsum.photos/100/104?grayscale"
  }
];

export const PRAYER_CATEGORIES: PrayerCategory[] = [
  { id: 'love', title: "LOVE", icon: "Heart" },
  { id: 'healing', title: "HEALING & HEALTH", icon: "Activity" },
  { id: 'family', title: "FAMILY", icon: "Users" },
  { id: 'guidance', title: "GUIDANCE & WISDOM", icon: "Compass" },
  { id: 'peace', title: "PEACE & COMFORT", icon: "Sun" },
  { id: 'provision', title: "PROVISION", icon: "Briefcase" },
];

export const PRAYERS: Prayer[] = [
  // --- LOVE ---
  {
    id: 'love-1',
    categoryId: 'love',
    title: "Experiencing God’s Love",
    scripture: "See what great love the Father has lavished on us, that we should be called children of God!",
    scriptureReference: "1 John 3:1",
    content: "Father, open my eyes to the depth of Your love for me. Let it quiet the voices of shame and striving. Teach me to receive love as a gift, not a reward. Fill the empty places with Your presence until fear loses its grip. Make Your love real to me today—steady, personal, and strong. And as You love me, let that love overflow through my words, my patience, and my choices toward others. I belong to You, and I rest in that truth. Amen."
  },
  {
    id: 'love-2',
    categoryId: 'love',
    title: "Love That Casts Out Fear",
    scripture: "There is no fear in love. But perfect love drives out fear...",
    scriptureReference: "1 John 4:18",
    content: "Lord, I confess the fears I carry—about tomorrow, about being enough, about losing what I love. Pour Your perfect love into my heart until fear has no home to hide. Teach me to trust Your character when I can’t control outcomes. Anchor me in the truth that You are good and You are near. Help me respond in love instead of anxiety, in faith instead of panic, in peace instead of worry. Let Your love steady me and soften me at the same time. Amen."
  },
  {
    id: 'love-3',
    categoryId: 'love',
    title: "Loving Others Well",
    scripture: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
    scriptureReference: "John 13:34–35",
    content: "Jesus, teach me to love like You. Not only in my feelings, but in my actions—when it’s inconvenient, when I’m misunderstood, when I’m tired. Guard me from selfishness dressed up as boundaries, and from people-pleasing dressed up as kindness. Give me wisdom to love with truth, courage to love with humility, and strength to love with consistency. Make my life a reflection of Your heart so that others taste Your goodness through my presence. Amen."
  },
  {
    id: 'love-4',
    categoryId: 'love',
    title: "Healing From Heartbreak",
    scripture: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    scriptureReference: "Psalm 34:18",
    content: "Father, You see the places that still ache. You know what I’ve lost, what I hoped for, and what I can’t undo. Come near to me in my pain—gentle, present, and faithful. Heal what I keep reopening. Restore trust where it has been damaged. Teach me how to release what I can’t carry and to receive comfort without shame. Give me clean hope again—hope that doesn’t deny reality, but believes You can redeem it. Amen."
  },

  // --- HEALING & HEALTH ---
  {
    id: 'healing-1',
    categoryId: 'healing',
    title: "Strength for the Body",
    scripture: "But those who hope in the Lord will renew their strength.",
    scriptureReference: "Isaiah 40:31",
    content: "Lord, I bring You my body—my energy, my limitations, my symptoms, and my needs. Renew my strength where I feel worn down. Restore what is depleted. Give wisdom to every doctor, counselor, and helper involved, and give me discipline to care for what You’ve entrusted to me. Help me listen to my body without fear and trust You without denial. Let health be restored in a way that points me back to You, and let my life be governed by peace, not panic. Amen."
  },
  {
    id: 'healing-2',
    categoryId: 'healing',
    title: "Healing for the Mind",
    scripture: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    scriptureReference: "Philippians 4:7",
    content: "Father, quiet my thoughts. Where my mind races, slow it. Where it spirals, steady it. Where it fixates, redirect it. I ask You to guard my heart and mind with Your peace—like a shield I can’t produce on my own. Give me clarity, healthy patterns, and the humility to seek help when needed. Teach me to think what is true, noble, and life-giving. Let my inner world become a sanctuary, not a battlefield. Amen."
  },
  {
    id: 'healing-3',
    categoryId: 'healing',
    title: "Courage in Chronic Conditions",
    scripture: "My grace is sufficient for you, for my power is made perfect in weakness.",
    scriptureReference: "2 Corinthians 12:9",
    content: "Jesus, You understand weakness. You do not despise it, and You do not abandon me in it. Give me courage for the days that feel heavy and strength for the moments that feel unfair. Help me grieve what I need to grieve, without losing hope. Let Your grace meet me daily—enough for this hour, enough for this step. Use my life as proof that You sustain, even when the situation doesn’t change quickly. Amen."
  },
  {
    id: 'healing-4',
    categoryId: 'healing',
    title: "Restoration and Rest",
    scripture: "Come to me, all you who are weary and burdened, and I will give you rest.",
    scriptureReference: "Matthew 11:28",
    content: "Lord, I’m tired. Not just physically, but deep in my soul. Teach me how to rest without guilt and recover without rushing. Restore my sleep, restore my appetite for life, restore my joy. Help me release the pressure to perform and receive Your invitation to be held. Let my body and mind return to rhythm—healthy habits, peaceful thoughts, and steady faith. I receive Your rest as healing. Amen."
  },

  // --- FAMILY ---
  {
    id: 'family-1',
    categoryId: 'family',
    title: "Unity in the Home",
    scripture: "Bear with each other and forgive one another... And over all these virtues put on love.",
    scriptureReference: "Colossians 3:13–14",
    content: "Father, bring unity to my family. Where there is tension, bring humility. Where there are old wounds, bring healing. Where there is misunderstanding, bring clarity and patience. Teach us to forgive quickly and love deeply. Help us speak with gentleness and listen with honor. Protect our home from pride, bitterness, and silent resentment. Let love be the atmosphere—real love that tells the truth, keeps showing up, and refuses to quit. Amen."
  },
  {
    id: 'family-2',
    categoryId: 'family',
    title: "Protection Over Loved Ones",
    scripture: "The Lord will watch over your coming and going both now and forevermore.",
    scriptureReference: "Psalm 121:8",
    content: "Lord, I place my family in Your hands. Cover them when I can’t be present. Protect them in places I can’t see and from dangers I can’t predict. Give them discernment, wise friendships, and a heart that is sensitive to Your voice. Keep their minds clear, their bodies safe, and their spirits anchored in You. Teach me to pray with faith instead of anxiety. You are the Keeper of my family, and I trust You. Amen."
  },
  {
    id: 'family-3',
    categoryId: 'family',
    title: "Healing Family Relationships",
    scripture: "If it is possible, as far as it depends on you, live at peace with everyone.",
    scriptureReference: "Romans 12:18",
    content: "Father, soften what has become hard in my family relationships. Give me courage to apologize where I’ve been wrong and wisdom to set boundaries where needed. Heal patterns that repeat—anger, avoidance, manipulation, silence. Teach us new ways to love, new ways to communicate, new ways to rebuild trust. Where reconciliation is possible, lead us there. Where it isn’t yet, guard my heart from hatred and keep me faithful in prayer. Amen."
  },
  {
    id: 'family-4',
    categoryId: 'family',
    title: "Blessing for Generations",
    scripture: "Impress them on your children. Talk about them when you sit at home and when you walk along the road.",
    scriptureReference: "Deuteronomy 6:6–7",
    content: "Lord, bless our children—whether in my home now, in my future, or in my family line. Plant Your Word in them early. Give them wisdom beyond their years, courage to choose what is right, and a love for Your presence. Heal generational pain and replace it with generational blessing. Make our family a place where faith is lived, not just spoken. Let future generations know You not as a rumor, but as a reality. Amen."
  },

  // --- GUIDANCE & WISDOM ---
  {
    id: 'guidance-1',
    categoryId: 'guidance',
    title: "Direction for Today",
    scripture: "Trust in the Lord with all your heart... and he will make your paths straight.",
    scriptureReference: "Proverbs 3:5–6",
    content: "Father, I surrender my plans to You. I don’t want to be driven by anxiety or pride. Make my path clear—one step at a time. Where I’m confused, give clarity. Where I’m impatient, give restraint. Where I’m tempted to force outcomes, teach me to wait with faith. Let my decisions reflect Your wisdom, not just my desires. Close doors that would harm me and open doors that align with Your purpose. Lead me, and I will follow. Amen."
  },
  {
    id: 'guidance-2',
    categoryId: 'guidance',
    title: "Wisdom in Conversations",
    scripture: "Everyone should be quick to listen, slow to speak and slow to become angry.",
    scriptureReference: "James 1:19",
    content: "Lord, govern my mouth and my tone. Teach me how to speak truth without arrogance and how to listen without defensiveness. Give me discernment to know what to say, when to say it, and when silence is wiser. Remove the need to win and replace it with the desire to love. Help me to be a person who brings peace into rooms, not confusion. Let my conversations reflect Your Spirit—wise, gentle, and anchored. Amen."
  },
  {
    id: 'guidance-3',
    categoryId: 'guidance',
    title: "Discernment and Protection",
    scripture: "My sheep listen to my voice; I know them, and they follow me.",
    scriptureReference: "John 10:27",
    content: "Jesus, train my heart to recognize Your voice above all others. When distractions are loud, make Your guidance clear. Guard me from deception, from shortcuts, and from choices that look good but lead me away from You. Give me discernment with opportunities, relationships, and commitments. Let Your peace be my compass and Your Word be my standard. If something is not for me, help me release it quickly. Amen."
  },
  {
    id: 'guidance-4',
    categoryId: 'guidance',
    title: "Wisdom for Big Decisions",
    scripture: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.",
    scriptureReference: "James 1:5",
    content: "Father, I need wisdom beyond my experience. I bring You this decision—every fear, every hope, every unknown. Give me insight that is steady and clear. Confirm what is right through Your Word, wise counsel, and inward peace. Remove confusion and double-mindedness. Help me choose what honors You and strengthens my future. I trust that You are not hiding Your will from me; You are guiding me with love. Amen."
  },

  // --- PEACE & COMFORT ---
  {
    id: 'peace-1',
    categoryId: 'peace',
    title: "Peace in the Storm",
    scripture: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.",
    scriptureReference: "John 14:27",
    content: "Jesus, speak peace over my heart. The world offers temporary calm, but You offer real stability. Quiet the storm inside me—worry, dread, and restlessness. Help me breathe, slow down, and remember You are here. Teach me to cast my cares on You and to trust You with what I cannot control. Let Your peace settle me like a steady hand on my shoulder. I receive Your peace today. Amen."
  },
  {
    id: 'peace-2',
    categoryId: 'peace',
    title: "Comfort in Grief",
    scripture: "Blessed are those who mourn, for they will be comforted.",
    scriptureReference: "Matthew 5:4",
    content: "Father, comfort me in my grief. You see the loss and the emptiness it leaves behind. Sit with me in what hurts. Hold me when words fail. Give me grace to process, patience with myself, and gentle hope for the days ahead. Let memories become a blessing, not a wound. Remind me that death and sorrow do not get the final word. You are near, and Your comfort is real. Amen."
  },
  {
    id: 'peace-3',
    categoryId: 'peace',
    title: "Peace at Night",
    scripture: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
    scriptureReference: "Psalm 4:8",
    content: "Lord, cover my mind as I rest. I release the day into Your hands—what I did well, what I didn’t, what I didn’t finish. Guard me from anxious thoughts and midnight heaviness. Let my body relax and my soul breathe. Give me deep sleep and renewed strength. Remind me that You are working even when I’m not. I sleep under Your care, safe and secure. Amen."
  },
  {
    id: 'peace-4',
    categoryId: 'peace',
    title: "Comfort for the Anxious Heart",
    scripture: "Cast all your anxiety on him because he cares for you.",
    scriptureReference: "1 Peter 5:7",
    content: "Father, I bring You my anxious thoughts. Some are logical, some are irrational, but all feel heavy. I lay them down at Your feet. Replace panic with peace, and fear with trust. Teach me to take one step at a time, one breath at a time. Let Your care become tangible to me today—through Your presence, through wise help, through steady reassurance. I am not alone. Amen."
  },

  // --- PROVISION ---
  {
    id: 'provision-1',
    categoryId: 'provision',
    title: "Daily Bread",
    scripture: "Give us today our daily bread.",
    scriptureReference: "Matthew 6:11",
    content: "Father, provide for me today—practically and spiritually. Meet my needs in ways that strengthen my faith and deepen my trust. Give me wisdom with money, discipline with spending, and peace in waiting. Help me work with integrity and steward what You give me well. Where I feel lack, remind me that You are not limited. You are my Provider, and You are faithful. I receive what You have for me today. Amen."
  },
  {
    id: 'provision-2',
    categoryId: 'provision',
    title: "Provision With Peace",
    scripture: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    scriptureReference: "Philippians 4:19",
    content: "Lord, I refuse to live in fear about provision. I ask You to supply what is needed—rent, food, opportunity, support, and stability. Open doors that no one can shut, and position me with the right people and the right timing. Teach me generosity even while I’m waiting, and gratitude even while I’m building. Let provision come with peace, not pressure, and let it produce worship, not pride. Amen."
  },
  {
    id: 'provision-3',
    categoryId: 'provision',
    title: "Opportunity and Open Doors",
    scripture: "See, I have placed before you an open door that no one can shut.",
    scriptureReference: "Revelation 3:8",
    content: "Father, guide me into the opportunities You’ve prepared. Close doors that distract me or harm me, even if they look attractive. Align my work with purpose. Give me favor where favor is needed, and character where character is required. Help me show up prepared, humble, and consistent. Let the right doors open at the right time, and let my success be rooted in Your grace, not just my effort. Amen."
  },
  {
    id: 'provision-4',
    categoryId: 'provision',
    title: "Provision for the Family",
    scripture: "The Lord is my shepherd, I lack nothing.",
    scriptureReference: "Psalm 23:1",
    content: "Lord, I lift my household to You. Provide for our needs—finances, health, stability, and joy. Give me wisdom to lead well and faith to trust You when it feels tight. Teach us to be content, disciplined, and grateful. Protect us from unnecessary burdens and from the anxiety that comes with comparing. Shepherd our home with Your care. Let us testify that You have been faithful, again and again. Amen."
  }
];

export const TRIVIA_BOOKS: TriviaBook[] = [
  { id: 'matthew', name: 'Matthew' },
  { id: 'mark', name: 'Mark' },
  { id: 'luke', name: 'Luke' },
  { id: 'john', name: 'John' },
  { id: 'acts', name: 'Acts' },
  { id: 'romans', name: 'Romans' },
];

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 'q1',
    bookId: 'matthew',
    question: "Who visited Jesus after his birth in the Gospel of Matthew?",
    options: ["Shepherds", "The Wise Men (Magi)", "King Herod", "Angels"],
    correctAnswer: 1
  },
  {
    id: 'q2',
    bookId: 'matthew',
    question: "What is the first sermon of Jesus recorded in Matthew called?",
    options: ["The Olivet Discourse", "The Upper Room Discourse", "The Sermon on the Mount", "The Bread of Life Discourse"],
    correctAnswer: 2
  },
  {
    id: 'q3',
    bookId: 'matthew',
    question: "Where was Jesus baptized?",
    options: ["The Red Sea", "The Sea of Galilee", "The Jordan River", "The Dead Sea"],
    correctAnswer: 2
  },
  {
    id: 'q4',
    bookId: 'mark',
    question: "What is the very first verse of Mark about?",
    options: ["The birth of Jesus", "The beginning of the good news about Jesus", "The genealogy of Jesus", "The Word was with God"],
    correctAnswer: 1
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'l1',
    title: "Genesis 1: Creation",
    scriptureReference: "Genesis 1:1-5",
    content: "In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.\n\nAnd God said, \"Let there be light,\" and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light \"day,\" and the darkness he called \"night.\" And there was evening, and there was morning—the first day.",
    quiz: [
      {
        question: "What was hovering over the waters in the beginning?",
        options: ["The sun", "The Spirit of God", "Darkness", "Angels"],
        correctAnswer: 1
      },
      {
        question: "What did God create on the first day?",
        options: ["Man", "Animals", "Light", "Stars"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'l2',
    title: "Genesis 2: Man & Woman",
    scriptureReference: "Genesis 2:7",
    content: "Then the Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.",
    quiz: [
      {
        question: "What was man formed from?",
        options: ["Gold", "Water", "Dust of the ground", "Light"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'l3',
    title: "John 1: The Word",
    scriptureReference: "John 1:1-4",
    content: "In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made; without him nothing was made that has been made. In him was life, and that life was the light of all mankind.",
    quiz: [
      {
        question: "Who was with God in the beginning?",
        options: ["Moses", "The Word", "The Angels", "Abraham"],
        correctAnswer: 1
      }
    ]
  }
];