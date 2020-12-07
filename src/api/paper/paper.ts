import http from "../http"
import { Subparams,Moduparams } from "@/interfaces/paperface/paperface"
// 获取二级分类列表
export const getClassfyList = (params:any)=>{
    return http.get('/mini/user/classification',{params})
}
// 获取三级科目列表
export const getsubjectList = (params:Subparams)=>{
    return http.get('/mini/user/subjects',{params})
}
// 获取模块列表
export const getModuleList = (params:Moduparams)=>{
    return http.post('/keytech/education/mini/module/queryModules',params)
}

