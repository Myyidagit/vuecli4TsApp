import http from "../http"
// 获取首页列表
export const getContentList = (params:any)=>{
    return http.get('/mini/user/query_columns',params)
}
