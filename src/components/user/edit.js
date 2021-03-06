import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';
import Header from './header';

function Edit() {
  const history = useHistory()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const[image,setImage] = useState("")
  const[url,setUrl] = useState(undefined)

  useEffect(()=>{
      M.AutoInit()
      if(url){
        uploadField()
      }
  },[url])

  const uploadPic = () => {
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","Social Media")
    data.append("cloud_name","yashbansal")
    fetch("	https://api.cloudinary.com/v1_1/yashbansal/image/upload",{
      method:"POST",
      body:data
    }).then(res => res.json())
    .then(data=> {
      setUrl(data.url)})
    .catch(err => console.log(err))
  }

  const uploadField = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      return M.toast({html: "Inavalid Email",classes:"#d32f2f red darken-2"})
     }
     fetch("/signup",{
     method:"Post",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
       name,
       password,
       email,
       pic:url
     })
     }).then(res => res.json())
     .then(data => { 
       if(data.error){
         M.toast({html: data.error,classes:"#d32f2f red darken-2"})
       }
       else{
         M.toast({html:data.message,classes:"#43a047 green darken-1"})
         history.push('/signin')
       }
     }
       ).catch(err => console.log(err))
  
  }

  const postData = ()=>{
    if(image){
      uploadPic()
    }
    else{
      uploadField()
    }
     }
 
  return (
      <>
      <Header />
      <div className="container valign-wrapper">
    <div className="mycard" style={{alignSelf:'center',justifyContent:"center"}}>
     <div className="card auth-card input-field">
         
          
          <input 
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
         
          <input 
          type='email'
          placeholder='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
         
          <input 
          type='number'
          placeholder='phone number'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
         


          <button className="btn waves-effect waves-light #1e88e5 blue darken-1" 
           onClick={()=>postData()} >Update
  </button>
          
          </div>
     </div>
     </div>
 </>
     );
}

export default Edit;
