import { defineConfig } from "vuepress/config";

export default defineConfig({
    // ...
    title: '小怪兽',
    // 网站描述
    description: '90后程序员 -- 20多年的老手艺人',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    // 导航栏设置
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '🏠 首页', link: '/' },
            { text: '📖 技术', link: '/guide/' },
            { text: '🐉 生活', link: '/life/' },
        ],
        sidebar: {
            '/guide/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two',   /* /foo/two.html */
            ],

        }
    }
});