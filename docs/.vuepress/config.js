// .vuepress/config.js
module.exports = {
    title: '小怪兽',
    // 网站描述
    description: '90后程序员 -- 20多年的老手艺人',
    themeConfig: {
        nav: [
            // 内部链接
            { text: '🏠 Home', link: '/' },
            { text: '📖 Theme', link: '/categories/theme/' },
            { text: '🐉 Maker', link: '/_post/maker.md' },
            // 多级菜单
            {
                text: '🔥 Animation', items: [{
                    text: '2d动画',
                    items: [
                        {
                            text: 'css3',
                            link: '/categories/animation-css/'
                        }
                    ]
                }, {
                    text: '3d动画',
                    items: [
                        {
                            text: 'webgl',
                            link: '/categories/animation-webgl/'
                        }
                    ]
                }]
            },
            { text: '📽 Old Time', link: '/categories/oldtime/' },
            { text: '🔗 friend-links', link: '/friend-links/' },
            // 外部链接
            { text: 'External', link: 'https://google.com' },
        ],
    }
}
