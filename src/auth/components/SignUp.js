import React from 'react';
import { Formik, Form } from 'formik';
import { Input } from './Input';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useEmailPasswordSignup from '../hooks/useEmailPasswordSignup';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createUser } from '../../redux/authSlice';


const SignUp = () => {
    const [authError, setAuthError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ajouterUtilisateurAvecEmailPassword = useEmailPasswordSignup();

    const onSubmit = async (values) => {
        try {
            await ajouterUtilisateurAvecEmailPassword(values.email, values.password);
            dispatch( createUser(values.email) )
            navigate('/films');
        } catch (error) {
            setAuthError(error.code);
            console.log(error.message);
        }
    };

    const pwd_regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\S]{8,}$/; //Password must have 8 or more characters, at least one uppercase letter, and one number
    const validate = Yup.object({
        email: Yup.string()
          .email('Le courriel est invalide')
          .required('L\'e-mail est requis'),
        password: Yup.string()
          .matches(pwd_regexp, "Le mot de passe doit comporter au moins 8 caractères ou plus, au moins une lettre majuscule et un chiffre.")
          .required('Mot de passe requis'),
        confirmPassword: Yup.string()
          .required('Confirmer le mot de passe est requis')
          .oneOf([Yup.ref('password'), null], 'Confirmer le mot de passe doit correspondre au mot de passe'),
      })

      return (
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validate}
          onSubmit={(values, {resetForm})=>{
            onSubmit(values);
            resetForm();
          }}
        >
          {formik => (
                  <Container>
                      <div className="d-flex flex-column align-items-center justify-content-center">
                          <div className='col-6 p-5 border mt-5'>
                              <div className='mb-5'>
                                  <h1 className="font-weight-bold .display-4">Inscription</h1>
                                  <p>Vous avez déja un compte? <Link to="/connexion">Connexion</Link></p>
                                  { authError && <p className='text-danger'>{authError}</p>}
                              </div>
                              <Form>
                                  <Input label="Email" name="email" type="email" />
                                  <Input label="Mot de passe" name="password" type="password" />
                                  <Input label="Confirmez Mot de Passe" name="confirmPassword" type="password" />
                                  <button className="btn btn-dark mt-3" type="submit">Inscrivez Vous</button>
                                  <button className="btn btn-danger mt-3 ml-5" type="reset">Reinitialiser</button>
                              </Form>
                          </div>
                      </div>
                  </Container>
          )}
        </Formik>
      )
}
 
export default SignUp;