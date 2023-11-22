import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [Username, setUsername] = useState('');
    const [Pw, setPw] = useState('');

    const{setUser} = useContext(UserContext);

    const handlesubmit = (e)=>{
        e.preventDefault()
        setUser({Username,Pw})
    }


  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='username' value={Username} onChange={(e)=>setUsername(e.target.value)}/>
      {"          "}
      <input type="text" placeholder='pw' value={Pw} onChange={(e)=>setPw(e.target.value)} />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
