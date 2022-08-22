import {message} from 'antd'
const defaultState = {
    inputValue: '请输入内容',
    donelist: [
    ],
    willdolist: [
    ],
    nowTODO:[],

}
export default (state = defaultState, action) => {
    // reducer只能接收state 不能改变state
    if (action.type === "changeWilldoList") {
        let newstate = JSON.parse(JSON.stringify(state));
        let flag = true;
        newstate.willdolist.map(item=>{
            if(item===action.value){
                flag = false
            }
        })
        newstate.donelist.map(item=>{
            if(item===action.value){
                flag = false
            }
        })
        if(!flag){
            message.warning(`${action.value}已存在,请重新录入！`)
            return newstate
        }else{
            message.success(`${action.value}添加成功！`)

            if (action.value !== '') {
                newstate.willdolist.push(action.value)
                return newstate
            } else {
                return newstate
    
            }
        }
    }
    if (action.type === "changeDone") {
        let newstate = JSON.parse(JSON.stringify(state))
        newstate.willdolist = newstate.willdolist.filter(item => item !== action.value)
        newstate.donelist.push(action.value)
        return newstate
    }
    if (action.type === "changeWilldone") {
        let newstate = JSON.parse(JSON.stringify(state))
        newstate.donelist = newstate.donelist.filter(item => item !== action.value)
        newstate.willdolist.push(action.value)
        return newstate
    }
    if(action.type==="COMPLETE_TODO"){
        let newstate = JSON.parse(JSON.stringify(state))
        newstate.nowTODO.push(Math.floor(Math.random()*1000))
        return newstate
    }

    return state
}