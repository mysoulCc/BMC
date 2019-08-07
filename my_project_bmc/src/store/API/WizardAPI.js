import axios from 'axios'
const WzoardModule = {
    state:'123'
}
axios.get('api/wizardDate')
    .then(response =>{
        debugger
        WzoardModule.state = response.data
    })
    .catch(function(error){
        console.log(error)   
    })
 export default WzoardModule