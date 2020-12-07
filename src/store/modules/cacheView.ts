import { Module, VuexModule, Mutation,getModule, Action} from 'vuex-module-decorators'
import store from '@/store'
/**
 * dynamic: true: 动态创建动态模块,即new Vuex.Store({})里面不用注册的.空着就行,
 * store,当前模块注册到store上.也可以写在getModule上,即getModule(CacheViews,store)
 * namespaced: true, name: 'cacheViews' 命名空间
*/
@Module({
    dynamic:true,
    name:'cacheViews',
    store,
    namespaced:true
})

class CacheViews extends VuexModule{
    // state => 要public不然外面调用不到
    public cachePages:(string | undefined)[] = ['homePage',"quesHome",'paper'];
    public loginStatus:boolean = false;
    //getter
    get getCacheview ():Array<any>{
        return this.cachePages;
    }
    get getLoginStatus ():boolean{
        return this.loginStatus;
    }
    @Mutation
    //添加要缓存的页面
    ADD_CACHEVIEWS(name:string):void{
        console.log(name)
        if(!name) return;
        if(this.cachePages.some((v)=>v == name)) return;
        this.cachePages.push(name);
    }
    @Mutation
    //添加要缓存的页面
    DEL_CACHEVIEWS(name:string):void{
        console.log(name)
        if(!name) return;
        let index = this.cachePages.findIndex((v)=>v == name);
        if(index>-1){
            this.cachePages.splice(index,1);
        } 
    }
    @Mutation
    //修改登录状态
    CHANGE_LOGIN(flag:boolean):void{
        console.log('用户登录状态:',flag)
        this.loginStatus = flag;
    }
    
    // commit的两种调用方式,第一种,Action后面的括号里面添加commit,然后return的结果就是ADD_CACHEVIEWS的参数
    @Action({commit:'ADD_CACHEVIEWS'})
    getCachePages(){
        return 'homepage'
    }

    @Action
    setStatus():void{
        const flag = true;
        this.context.commit('CHANGE_LOGIN',flag);
    }
}
// 使用getModule: 对类型安全的访问
export default getModule(CacheViews)