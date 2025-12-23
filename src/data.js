export const HER_NAME = "老婆(Alexis Zhang)"; 
export const AUTH_ANSWER = "04/11/2025";
export const TOTAL_ORNAMENTS = 12;

export const ORNAMENTS = [
    { id: "o1", label: "🎀", type: "Memory", colorClass: "c1", message: "On the very first night we were together, it was the moment I was so happy I couldn't fall asleep, just lying there looking at you, my heart completely full." },
    { id: "o2", label: "🥐", type: "Memory", colorClass: "c2", message: "At Yonghe Temple, it was the moment I prayed to the Buddha to protect us and let us walk safely and smoothly all the way to forever." },
    { id: "o3", label: "💡", type: "Memory", colorClass: "c3", message: "While biking under the sunset in SF, it was the moment I felt wild and alive." },
    { id: "o4", label: "🐱", type: "Memory", colorClass: "c4", message: "In the cabin, lighting a campfire and eating instant noodles together, it was the moment I felt the simplest and purest happiness." },
    { id: "o5", label: "🐶", type: "Memory", colorClass: "c5", message: "During the accident in Portland, it was the moment that made me even more certain that I want to love you for the rest of my life." },
    { id: "o6", label: "🐷", type: "Memory", colorClass: "c2", message: "Standing on the mountaintop in Harpers Ferry and looking down, it was the moment I knew that from that day on, this place belonged only to you and me." },
    { id: "o7", label: "🎬", type: "Memory", colorClass: "c3", message: "In Cancún, sailing, drinking, paddleboarding, flowriding, and dancing together, it was the moment I started to imagine our life when we old" },
    { id: "o8", label: "❤️", type: "Memory", colorClass: "c4", message: "Going through the haunted house with you, it was the moment I realized that with you by my side, I wasn't afraid at all." },
    { id: "o9", label: "🐑", type: "Memory", colorClass: "c1", message: "When I think about you, it is the moment I tell myself to work harder and harder, so I can give you the best life sooner." },
    { id: "o10", label: "👽", type: "Memory", colorClass: "c2", message: "That afternoon in Chicago, on my very first day, I sat by the river watching planes pass one by one overhead, wondering which one might be yours. Maybe it was in that moment, without even realizing it, that I had already fallen in love with you." },
    { id: "o11", label: "🍭", type: "Memory", colorClass: "c3", message: "Every night in Cancún, it was our date night, just you and me. Evvery sunset kiss we had was a record of our love." },
    { id: "o12", label: "🦭", type: "Memory", colorClass: "c4", message: "On the day I received the Mimi book, it was the moment I stared at it for a long time and cried for a long time, because I knew it was your silent but most powerful love." }
];

export const SPOTS = [
    { x: 50, y: 25 }, { x: 40, y: 35 }, { x: 60, y: 35 },
    { x: 30, y: 45 }, { x: 50, y: 48 }, { x: 70, y: 45 },
    { x: 25, y: 64 }, { x: 43, y: 65 }, { x:58, y: 65 }, { x: 73, y: 63 },
    { x: 35, y: 75 }, { x: 65, y: 75 }
];

export const BULBS = [
    {x: 43, y: 30},{x:56, y:30}, {x: 38, y: 40},{x:50, y: 42},{x:62, y: 40},
    {x: 33, y: 55},{x:45, y: 57},{x:57, y: 58},{x:69, y: 55},
    {x: 30, y: 70},{x:40, y: 71},{x:50, y: 72},{x:60, y: 73},{x:70, y: 70},
    {x: 20, y: 78}, {x: 30, y: 80},{x:40, y: 81},{x:50, y: 82},{x:60, y: 83},{x:70, y: 83},{x: 80, y: 80}
];

export const STAR_MESSAGE = {
    type: "Special",
    hasVideo: true,
    videoSrc: "/christmas/k1.MOV",
};

export const HIDDEN_GIFT = {
    type: "Hidden Gift",
    title: "🎁 Hidden 4",
    hasVideo: true,
    videoSrc: "/christmas/v1.mp4",
    message: "没猜到吧！略略略😜"
};

export const LEFT_GIFT = {
    type: "Left Gift",
    title: "🎁 Hidden 1",
    hasVideo: true,
    videoSrc: "/christmas/m1.MOV",
    message: "哈哈哈哈哈哈哈哈"
};

export const SECOND_GIFT = {
    type: "Hidden 2",
    title: "🎁 Hidden 2",
    hasImage: true,
    imageSrc: "/christmas/1.png",
    message: "嘻嘻不嘻嘻"
};

export const THIRD_GIFT = {
    type: "Third Gift",
    title: "🎁 Hidden 3",
    hasImage: true,
    imageSrc: "/christmas/4.jpg",
    message: "love u"
};

export const HAT_GIFT = {
    type: "Hat Gift",
    title: "🎩 Final Hidden",
    hasImage: true,
    imageSrc: "/christmas/3.jpg",
    message: "老婆你知道为什么我喜欢日落吗 --- 因为日落见证了我们每一次的亲吻"
};

// Grid position validation mapping
export const GRID_VALIDATION = {
    0: { requiredEmoji: "🦭", row: 1, col: 1 }, // seal (1,1)
    1: { requiredEmoji: "🐑", row: 2, col: 1 }, // sheep (2,1)
    2: { requiredEmoji: "🐱", row: 2, col: 2 }, // cat (2,2)
    3: { requiredEmoji: "🥐", row: 3, col: 1 }, // croissant (3,1)
    4: { requiredEmoji: "❤️", row: 3, col: 2 }, // heart (3,2)
    5: { requiredEmoji: "🐶", row: 3, col: 3 }, // dog (3,3)
    6: { requiredEmoji: "🎬", row: 4, col: 1 }, // movie (4,1)
    7: { requiredEmoji: "🐷", row: 4, col: 2 }, // pig (4,2)
    8: { requiredEmoji: "🎀", row: 4, col: 3 }, // bowtie (4,3)
    9: { requiredEmoji: "💡", row: 4, col: 4 }, // bulb (4,4)
    10: { requiredEmoji: "👽", row: 5, col: 1 }, // stitch (5,1) - using alien for stitch
    11: { requiredEmoji: "🍭", row: 5, col: 2 } // candy (5,2)
};