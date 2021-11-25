import router from 'next/router'
import { useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { analytics, provider, auth } from '../firebase'
import { signInWithPopup,onAuthStateChanged, getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


const Signup = () => {

    const router = useRouter()

    // const history = useHistory()

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    // const [ username, setUsername] = useState('')




    
        const register =() => {
           
        
            // some fancy firebase here
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
              .then(() => {
                // Signed in 
            //    const user =  userCredential.user.sendEmailverification()
                // const user = userCredential.user;

                if(auth){
                    router.push("/login")
                }
                // ...
              })
              .catch((error) => alert(error.message));
               
            // auth() 
            //    .createUserWithEmailAndPassword(email, password)
            //    .then(() => {
                //It successfully created new user with
                // email and password
                //    console.log(auth)
                // If auth exists
                // if (auth) {
                //     router.push('/')
                // }
            // })
            //    .catch(error => alert(error.message))
        }
    

    // const register = e => {
    //     e.preventDefault()
    //     // some fancy firebase here
    //     auth 
    //        .createUserWithEmailAndPassword(email, password)
    //        .then(() => {
    //         //It successfully created new user with
    //         // email and password
    //            console.log(auth)
    //         // If auth exists
    //         if (auth) {
    //             router.push('/')
    //         }
    //     })
    //        .cath(error => alert(error.message))
    // }
    return (
        <Wrapper>
            <WrapperContainer>
            <HeadContainer>
                <UberContainer>
             <UberSignUpLogo src="https://i.ibb.co/n6LWQM4/Post.png" alt="uber logo image" />
             {/* <UberLoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="uber login image" /> */}
             </UberContainer>
             <TitleCpontainer>
             <SignUpTitle>
                 Sign up to Uber
             </SignUpTitle>
             </TitleCpontainer>
             </HeadContainer>
             <SignUpFormContainer>
             <SignUpContainer>
                   {/* <SignUpUserNameInput type="email" value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder="Enter your username" /> */}
                    <SignUpEmailInput type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email" />
                    <SignUpPassWordInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
                 
                    <SignUpButtonForm onClick={()=>register()}>Sign up Now</SignUpButtonForm>
                   
                </SignUpContainer>
             </SignUpFormContainer>
             <OrContainer>
                 <OrText>Or</OrText>
             </OrContainer>
             <LoginBackContainer>
                 <GoogleIconContainer>
                     <Link href="/login" passHref>
                     <GoogleIcon src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                     </Link>
                 </GoogleIconContainer>
                 <LoginButtonContainer>
                 <Link href="/login" passHref>
                     <LoginText>Log In</LoginText>
                 </Link>
                 </LoginButtonContainer>
             </LoginBackContainer>
             </WrapperContainer>
            
        </Wrapper>
    )
}

export default Signup

const Wrapper = tw.div`
flex  flex-col justify-center  w-full h-screen bg-gray-300
`
const WrapperContainer = tw.div`
flex flex-col  h-2/3  items-center 
`
const  HeadContainer = tw.div`
flex flex-col  justify-center `

const UberSignUpLogo = tw.img`
w-12 h-12 flex  justify-center object-contain
`

const OrContainer = tw.div`
my-2`

const SignUpTitle = tw.h4`
text-xl my-2   `

const OrText = tw.h4``

const SignUpFormContainer = tw.div`
flex flex-col w-2/3 justify-center border border-gray-300 rounded-ls  g`

const SignUpContainer = tw.div`
flex flex-col  gap-3
`

const SignUpUserNameInput = tw.input`
w-full px-3 py-2 flex outline-none border border-none 
`
const SignUpEmailInput = tw.input`
w-full px-3 py-2 flex outline-none border border-none `

const SignUpButtonForm = tw.button`
w-full p-2 bg-black text-white `

const SignUpPassWordInput = tw.input`
w-full px-3 py-2 outline-none border border-none`

const LoginBackContainer = tw.div`
flex  justify-evenly w-1/3`

const GoogleIconContainer = tw.div`
w-12 h-12  border border-gary-300 rounded-full`

const GoogleIcon = tw.img`
w-full object-contain`

const LoginButtonContainer = tw.div`
w-12 h-12 bg-white border border-gary-300 rounded-full flex justify-center items-center`

const LoginText = tw.button`
text-center text-xs `

const UberContainer = tw.div`
flex justify-center `

const TitleCpontainer = tw.div`
flex justify-center items-center`