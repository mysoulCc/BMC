const wConNection = {
    state:{
        data:{
            'auto_conx':'',
            'roaming_conx':'',
            'ipv4':'',
            'ipv6':'',
        }
    },
    mutations: {
        
        wConNection(state,obj){
            switch (obj.msg) {
                case 'auto_conx':
                    state.data.auto_conx = obj.doWanConf;
                    break;
            
                case 'roaming_conx':
                    state.data.roaming_conx = obj.doWanConf;
                    break;        
                
                case 'IPv4':
                        state.data.ipv4 = obj.indexStatus;
                        break; 
                
                default:
                        state.data.ipv6 = obj.indexStatus;
                    break;
            }
        }
    }
}

 export default wConNection