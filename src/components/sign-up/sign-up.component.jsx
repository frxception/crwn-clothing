import React from 'react';
import {auth, createUserProfileDoc} from '../../firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-up.styles.scss'

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Oops! Pass did not match!!!")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDoc(user, {displayName})
            
            //NOTE: Resets the state of this component only to initial values
            this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            )
        } catch (error) {
            console.error('[ sign-up : handleSubmit ] - error: ', error)
        }

    }

    handleChange = evt => {
        const {value, name} = evt.target
        this.setState( {[name]: value} )//NOTE: dynamic name [key] in the map
    }


    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2>I dont have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput name='displayName' label='display name' type='text' value={displayName} handleChange={this.handleChange} required/>
                    <FormInput name='email' label='email' type='email' value={email} handleChange={this.handleChange} required/>
                    <FormInput name='password' label='password' type='password' value={password} handleChange={this.handleChange} required/>
                    <FormInput name='confirmPassword' label='confirm password' type='password' value={confirmPassword}
                               handleChange={this.handleChange} required/>

                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </div>

                </form>
            </div>
        );
    }


}


export default SignUp;