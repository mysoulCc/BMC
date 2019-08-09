const WzoardModule = {
    state:{
        data:{},
        SetData:{
            LAN:{
                // id:'',
                // SubnetMask:''
            },
            Connection:{
                internetType:'',
                _connectionType:'',
                DHCP:{
                    hostname:''
                },
                STATIC:{
                    staticIP:'',
                    staticNetmask:'',
                    staticGateway:'',
                    staticPriDns:'',
                    staticSecDns:''
                },
                PPPOE:{
                    pppoeUser:'',
                    pppoePass:'',
                    pppoePassVerify:'',
                    _wPppoeOPMode:'',
                    pppoeIdleTime:''
                }
            },
            Wifi:{
                SSID1:'',
                Password:''
            }
        }
    },
    mutations: {
        changeData (state,obj) {
          state.data = obj;
        },
        WizardSet(state,obj){
            switch (obj.msg) {
                case 'LAN':
                    state.SetData.LAN = obj.WizardLanValue;
                    break;
            
                case 'Connection':
                    
                    break;        
            
                default:
                    break;
            }
        }
    },
    actions: {   
            saveForm (context,obj){
               context.commit('changeData', obj)
            },
            saveFormSet(context,obj){
                context.commit('WizardSet', obj)
            }
    }
}

 export default WzoardModule