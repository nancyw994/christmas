export const HER_NAME = "老婆(Alexis Zhang)"; 
export const AUTH_ANSWER = "04/11/2025";
export const TOTAL_ORNAMENTS = 12;

export const ORNAMENTS = [
    { id: "o1", label: "🎀", type: "Memory", colorClass: "c1", message: "On the very first night we were together, it was the moment I was so happy I couldn't fall asleep, just lying there looking at you, my heart completely full." },
    { id: "o2", label: "🥐", type: "Memory", colorClass: "c2", message: "At Yonghe Temple, it was the moment I prayed to the Buddha to protect us and let us walk safely and smoothly all the way to forever." },
    { id: "o3", label: "💡", type: "Memory", colorClass: "c3", message: "While biking under the sunset in San Francisco, it was the moment I felt the most free and the most alive." },
    { id: "o4", label: "🐱", type: "Memory", colorClass: "c4", message: "In the cabin, lighting a campfire and eating instant noodles together, it was the moment I felt the simplest and purest happiness." },
    { id: "o5", label: "🐶", type: "Memory", colorClass: "c5", message: "During the accident in Portland, it was the moment that made me even more certain that I want to love you for the rest of my life." },
    { id: "o6", label: "🐷", type: "Memory", colorClass: "c2", message: "Standing on the mountaintop in Harpers Ferry and looking down, it was the moment I knew that from that day on, this place belonged to us." },
    { id: "o7", label: "🎬", type: "Memory", colorClass: "c3", message: "In Cancún, sailing, drinking, paddleboarding, flowriding, and dancing together, it was the moment I started to imagine our life in the future." },
    { id: "o8", label: "❤️", type: "Memory", colorClass: "c4", message: "Going through the haunted house with you, it was the moment I realized that with you by my side, I wasn't afraid at all." },
    { id: "o9", label: "🐑", type: "Memory", colorClass: "c1", message: "When I think about you, it is the moment I tell myself to work harder and harder, so I can give you the best life sooner." },
    { id: "o10", label: "👽", type: "Memory", colorClass: "c2", message: "In Chicago, lying in the same bed with you, it was the moment I felt so happy and just wanted to stay close to you." },
    { id: "o11", label: "🍭", type: "Memory", colorClass: "c3", message: "Every night in Cancún, it was our date night, just you and me." },
    { id: "o12", label: "🦭", type: "Memory", colorClass: "c4", message: "On the day I received the Mimi book, it was the moment I stared at it for a long time and cried for a long time, because I knew it was your tenderness." }
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
    message: `阿妞，圣诞快乐！

谢谢阿妞这一年来为我所做的一切，谢谢。

和阿妞在一起的这将近九个月里，我学到了很多很多。阿妞是一个充满正能量的人，总是能开开心心地生活着。你改变了我很多原本的想法。我开始更爱笑了，开始喜欢打扮、让家变得有情调，变得更热情、更开朗，也慢慢学会了耐心。也让我学会了说情话，学会了怎么照顾人，也学会了在爱人面前低头。

因为你，我也懂得了什么是付出、谦让和包容，也在努力学习该如何去真正地爱一个人，学着把原本一个人的生活，慢慢变成两个人的生活。

谢谢阿妞每天陪着我，给我做好吃的，总是迁就我、顺着我，还带着我去体验那么多新的事物。谢谢你包容我，教会我什么是健康的关系，什么是正确地与人相处。谢谢你教会我如何沟通，用行动做我的榜样。也谢谢你一直在努力适应我的性格。

我想说，遇见你是我这辈子最大的幸运。我也从来没有遇到过一个人，能像你一样对我这么好。

这一年我们经历了很多，也在学着成长为更好的大人。我也是第一次恋爱，有很多做的不好的事情还得请阿妞多多指教。我愿意为了我们再去做改变，我也坚信我们可以一起变得更好。

阿妞，你永远是那个我最欣赏的，最崇拜的，我最爱的人。

我想守护你。 ⭐`
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