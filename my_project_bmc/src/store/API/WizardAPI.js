import axios from 'axios'
const WzoardModule = {
    state:{
        data:{}
    },
    mutations: {
        changeData (state,obj) {
          state.data = obj;
        },
    },
    actions: {   
            saveForm (context,obj){
               context.commit('changeData', obj)
            }
    }
}

 export default WzoardModule