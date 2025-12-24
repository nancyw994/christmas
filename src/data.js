export const HER_NAME = "老婆(Alexis Zhang)"; 
export const AUTH_ANSWER = "04/11/2025";
export const TOTAL_ORNAMENTS = 12;

export const ORNAMENTS = [
    { id: "o1", label: "🎀", type: "Memory", colorClass: "c1", message: "在我们在一起后的第一晚，我兴奋的睡不着觉，我躺在床上静静地看着你，我的心里充满了幸福" },
    { id: "o2", label: "🥐", type: "Memory", colorClass: "c2", message: "在雍和宫我向佛祖许愿，我祈求佛祖保佑我们平安顺利，一直到永远" },
    { id: "o3", label: "💡", type: "Memory", colorClass: "c3", message: "在sf骑车追逐日落的时候，我仿佛感受到了那种只有我们两个人在望不到尽头的草地上肆意的奔跑，一回头看到你在身边，世界安静到只能听到我们的笑声和风声，在那一刻我感受到了无尽的自由与活力，那是只属于我们的世界" },
    { id: "o4", label: "🐱", type: "Memory", colorClass: "c4", message: "在小木屋外里点起篝火，一起吃泡面烤棉花糖的时候，我感受到了最简单纯粹的幸福" },
    { id: "o5", label: "🐶", type: "Memory", colorClass: "c5", message: "在portland发生事故的时候，我比哪一刻都更加确认你就是我想共度余生的人" },
    { id: "o6", label: "🐷", type: "Memory", colorClass: "c2", message: "在harpers ferry的山顶上，我俯瞰着整个小镇，我知道从那天起，这个地方只属于我们两个人" },
    { id: "o7", label: "🎬", type: "Memory", colorClass: "c3", message: "在cancun，我们一起玩帆船，一起喝酒，一起玩paddleboard，flowriding，一起跳舞，我开始幻想和期待我们老了之后的生活" },
    { id: "o8", label: "❤️", type: "Memory", colorClass: "c4", message: "和你一起去鬼屋的时候，每次一想到有你在我的身边，我就什么都不怕了" },
    { id: "o9", label: "🐑", type: "Memory", colorClass: "c1", message: "每一次一想到你，我都在告诉我要再努力一点，这样就可以给你更好的生活" },
    { id: "o10", label: "👽", type: "Memory", colorClass: "c2", message: "到chicago的第一天下午，我一个人坐在河畔望着天上飞过的飞机，我一直在猜想哪一辆会是你的，或许从那刻起，我就在不知不觉中喜欢上了你" },
    { id: "o11", label: "🍭", type: "Memory", colorClass: "c3", message: "在cancun的每一晚都是只属于我们两个人的date night; 每一天的夕阳都是我们爱情的见证" },
    { id: "o12", label: "🦭", type: "Memory", colorClass: "c4", message: "收到咪咪书的那天 我静静地看着了好久好久 我知道阿妞不是个感性的人 但我知道这是阿妞再把心底最柔软的地方给我" }
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
    videoSrc: "/christmas/11.mp4",
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
    videoSrc: "/christmas/m1.mp4",
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