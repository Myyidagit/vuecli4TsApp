import Vue from "vue";
import AlertCom from "./alertcom.vue";

const alertComponent = Vue.extend(AlertCom)
function alertcom(options){
    options = options||{};
    if(typeof options === "string"){
        options = {
            text:options
        }
    }
    //渲染节点
    const exComponent = new alertComponent({data:options}).$mount();
    //$el拿到dom节点，挂载到body
    document.body.appendChild(exComponent.$el);
    let apendTime = setTimeout(()=>{
        document.body.removeChild(exComponent.$el);
        clearTimeout(apendTime);
    },options.duration?options.duration:2000)
}
export default alertcom;

