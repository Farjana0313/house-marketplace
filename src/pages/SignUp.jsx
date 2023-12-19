


import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibitlityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formData;
    const onChange = (e) => {
        console.log(e.target.value);
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Create an account
                    </p>
                </header>

                <form>
                    <input type="text" className="nameInput" placeholder="Name" id="name" value={email} onChange={onChange} />
                    <input type="email" className="emailInput" placeholder="Email" id="email" value={email} onChange={onChange} />

                    <div className="passwordInputDiv">
                        <input type={showPassword ? "text" : "password"} className="passwordInput" placeholder="Password" id="password" value={password} onChange={onChange} />

                        <img src={visibitlityIcon} alt="Show Password" className="showPassword" onClick={() => setShowPassword((prevState) => !prevState)} />
                    </div>
                    <Link to="/forgot-password" className="forgotPasswordLink"> Forgot Password</Link>
                    <div className="signUpBar">
                        <p className="signUpText">
                            Sign Up
                        </p>
                        <button className="signUpButton"><ArrowRightIcon fill="#fff" width="34px" height="34px" /></button>
                    </div>
                </form>
                {/* Google OAuth */}
                <Link to='/sign-in' className="registerLink">Sign In Instead</Link>

            </div>
        </>
    )
}

export default SignUp