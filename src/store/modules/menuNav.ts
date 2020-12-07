import { Module, VuexModule, Mutation,getModule, Action } from "vuex-module-decorators"
import store from '@/store'

@Module({
        dynamic:true,
        name:'menuNav',
        store,
        namespaced:true
})
class MenuNav extends VuexModule {
    public showMenu:boolean = true;
    get getShowMenu ():boolean{
        return this.showMenu;
    }
    @Mutation
    CHANGE_showMenu(flag:boolean){
        this.showMenu = flag;
    }
}
export default getModule(MenuNav);