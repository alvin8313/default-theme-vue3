import { GET } from '@/utils/http/request'
import { inisHelper } from '@/utils/helper/helper'

export default {
    // 设置主题配置
    setThemeConfig(state, params = {}) {

        if (inisHelper.is.empty(params)) {
            GET('options',{params:{key:'config:default-theme'}}).then(res=>{
                if (res.data.code == 200) {
                    state.theme_config = res.data.data.opt
                }
            })
        } else state.theme_config = params
    },
    // 设置登录信息
    setLogin(state, params = {}) {

        if (inisHelper.is.empty(params)) {

            // 获取缓存中的登录信息
            let login = inisHelper.get.storage("login")
            // 判断缓存是否存在且未过期
            if (login != "expire" && login) state.login = login

        } else state.login = params
    },
    // 设置评论
    setArticle(state, params = {}){

        if (!inisHelper.is.empty(params)) {

            for (let item in params) state.article[item] = params[item]

        } else state.article = params
    }
}