import React from 'react';
import { Formik, Form } from 'formik';
import { Input } from './Input';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useEmailPasswordSignin from '../hooks/useEmailPasswordSignin';
import useGoogleSignin from '../hooks/useGoogleSignin';
import { useDispatch } from "react-redux";
import { loginUser } from '../../redux/authSlice';

const SignIn = () => {
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginUtilisateur = useEmailPasswordSignin();
  const loginWithGoogle = useGoogleSignin();

  const onSubmit = async (values) => {
    try {
      await LoginUtilisateur(values.email, values.password);
      dispatch(loginUser(values.email))
      navigate('/films');
    } catch (error) {
      setAuthError(error.code);
      console.log(error.message);
    }
  };

  const SigninWithGoogle = async () => {
    try{
      await loginWithGoogle();
    }catch(error){
      console.log(error);
    }

  } 

  const pwd_regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\S]{8,}$/; //Password must have 8 or more characters, at least one uppercase letter, and one number
  const validate = Yup.object({
    email: Yup.string()
      .email('Le courriel est invalide')
      .required('L\'email est requis'),
    password: Yup.string()
      .matches(pwd_regexp, "Le mot de passe doit comporter au moins 8 caractères ou plus, au moins une lettre majuscule et un chiffre.")
      .required('Mot de passe requis'),
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {formik => (
        <Container>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className='col-6 p-5 border mt-5'>
              <div className='mb-5'>
                <h1 className="font-weight-bold .display-4">Connexion</h1>
                <p>Vous n'avez pas encore de compte? <Link to="/inscription">S'inscrire</Link></p>
                { authError && <p className='text-danger'>{authError}</p>}
              </div>
              <Form >
                <Input label="Email" name="email" type="email" />
                <Input label="Mot de passe" name="password" type="password" />
                <button className="btn btn-primary btn-lg btn-block mt-5" type="submit">Connectez-vous</button>
              </Form>
              <div className='my-4'>
                <p>-------ou---------</p>
                <button className="btn btn-danger btn-lg btn-block" type="button" onClick={SigninWithGoogle}>Connexion avec google</button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </Formik>
  )
}

export default SignIn;