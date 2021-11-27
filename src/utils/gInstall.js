export const chaining = {
    install(vue) {
        const optionalChaining = (obj, ...rest) => {
            let tmp = obj;
            for (let key in rest) {
                let name = rest[key];
                tmp = tmp?.[name];
            }
            return tmp || "";
        }
        // 添加实例方法
        vue.prototype.$$ = optionalChaining;
    }
}