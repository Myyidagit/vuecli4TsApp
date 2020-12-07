/**
 * @param { 文档地址 } 'https://github.com/evrone/postcss-px-to-viewport'
 */
const path = require('path')
module.exports = ( {file} )=>{
    // * vant按 375px 做的
    const  { dirname } = file
    const vantPathNpm = path.join('node_modules', 'vant')
    const vantPathCnpm = path.join('node_modules', '_vant') // 兼容cnpm
    const designWidth = dirname.includes(vantPathNpm) || dirname.includes(vantPathCnpm) ? 375 : 750;
    return {
        "plugins": {
            // "postcss-import": {},
            // "postcss-url": {},
            // to edit target browsers: use "browserslist" field in package.json
          //   "postcss-write-svg": {
          //     uft8: false
          //   },
          //   "postcss-cssnext": {},
          
            "postcss-px-to-viewport": {
              viewportWidth: designWidth, // 设计稿宽度
              // viewportHeight: 1334, // 设计稿高度，可以不指定
              unitPrecision: 5, // px to vw无法整除时，保留几位小数
              viewportUnit: 'vw', // 转换成vw单位
              propList: ['*','!font-size'],//Use ! to not match a property. Example: ['*', '!letter-spacing']
              selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
              minPixelValue: 1, // 小于1px不转换
              mediaQuery: false, // 允许媒体查询中转换
            //   exclude: /(\/|\\)(node_modules)(\/|\\)/ //不转换我们引入的第三方包
            }
    }
    
    //   "postcss-viewport-units": {},
    //   "cssnano": {
    //     preset: 'advanced',
    //     autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
    //     "postcss-zindex": false
    //   }
    }
  }