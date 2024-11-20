/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ubg76.top/', // 替换为你的实际网站URL
  generateRobotsTxt: true, // 是否生成robots.txt文件
  sitemapSize: 5000, // 可选，定义每个sitemap的最大URL数量
  exclude: ['/secret-page'], // 可选，排除特定页面
  changefreq: 'daily', // 可选，设置页面更新频率
  priority: 0.7, // 可选，设置页面的优先级，1.0为最高优先级
  outDir: 'public', // 修改为你希望输出的目录
};
