import axios from 'axios'

function Data() {
  
  async function fetchdata(){
  let response=axios.get("https://jsonplaceholder.typicode.com/users")

  return response    
  }

 let promisedata= fetchdata().then(result=>console.log(result.data))
 console.log(promisedata)
 

 return (
   <>
   <div>




   </div>
    </>
  )
}

export default Data