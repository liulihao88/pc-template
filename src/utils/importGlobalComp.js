// 全局注册全局组件
import Vue from 'vue';

const requireComponent = require.context(
    // 其组件目录的相对路径
    // 这块是存放公共组件的文件目录， 是需要根据相应的路径更改的
    '@/globalComps',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /\.vue$/
);

requireComponent.keys().forEach((fileName) => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName);
    // 获取组件的 PascalCase 命名
    let componentName =
        // 获取和目录深度无关的文件名
        fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');
    // 递归遍历文件下的.vue文件, 获取其文件名。 
    let reverseName = componentName.split('').reverse().join('')
    componentName = reverseName.split('/')[0].split('').reverse().join('');
    // 全局注册组件
    Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
    );
});