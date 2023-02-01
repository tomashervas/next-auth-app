import {signIn} from 'next-auth/react'


const Login = () => {
  return (
    <div>
        <button onClick={()=>signIn('github', {
            callbackUrl: 'http://localhost:3000'
        })} >Login</button>
    </div>
  )
}
export default Login