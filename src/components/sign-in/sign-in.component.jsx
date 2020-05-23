import React from 'react';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss'

class SignIn extends React.Component {
    
    constructor(props) {
        super (props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' }) //NOTE: reset the values after auth async    
        }catch (error) {
            console.error('[ sign-in : handleSubmit ] - error: ', error)
        }
        
    }

    handleChange = evt => {
        const { value, name } = evt.target
        this.setState(
            { [name]: value } //NOTE: dynamic name [key] in the map
        )
    }
    
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name='password' label='password' type='password' value={this.state.password} handleChange={this.handleChange}  required/>
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        { ' ' }
                        <CustomButton type='buton' onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google{' '}</CustomButton>
                    </div>

                </form>
            </div>
        );
    }
    
    
}


export default SignIn;