import {fromJS} from 'immutable'

const defaultState = fromJS({
    list: [
        {
            id: 1,
            title: "老板让我开发一个亿级流量的大型网站",
            img: "https://upload-images.jianshu.io/upload_images/6881750-d9cdd9c3ba5e601b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            content: "对于一个大型网站，主要有以下几个特征： 支撑海量数据 非常高的访问量 在大型网站中，其最核心的功能就是计算和存储。因此系统演变过程也主要围绕这两..."
        },
        {
            id: 2,
            title: "诸葛亮去世前，刘禅问了一个问题，诸葛亮才发现他心机之深",
            img: "https://upload-images.jianshu.io/upload_images/15581733-0cc34f7c86359534.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            content: "在很多人的印象中，蜀汉后主刘禅都是无能的代表，大家也都以“扶不起的阿斗”来称呼他。后来蜀汉灭亡，刘禅还在司马昭的宴席上“乐不思蜀”，就更让大家觉..."
        },
        {
            id: 3,
            title: "哥哥带你认识Android Studio 4.0最新功能，酷到没朋友",
            img: "https://upload-images.jianshu.io/upload_images/6881750-d9cdd9c3ba5e601b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            content: "前言 今天作者推荐两款文本编辑器。 我先后使用的Notepad 3、Sublime、Atom、VS Code、Vim。 这里作者就只推荐Note..."
        },
        {
            id: 4,
            title: "python爬虫：做一个界面爬虫小软件",
            img: "https://upload-images.jianshu.io/upload_images/13717038-1bf661c00ce2fb7c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            content: "任务目标： 1.抓取不同类型的图片 2.编写一个GUI界面爬虫程序，打包成exe重新文件 3.遇到的难点 1.分析如何抓取不同类型的图片 首先打..."
        },
    ]
})

export default (state = defaultState, action) => {
    console.log('action'+action.type)
    switch (action.type) {
        default:
            return state
    }

}
