
import * as React from 'react'
import Router from 'next/router';
import { Formik, Field } from 'formik'

import Layout from '../components/Layout'
import { InputField } from '../components/fields/InputField'
import { LoginComponent } from '../generated/apolloComponents'

const Login: React.FunctionComponent = () => {
	return (
		<Layout title="Login page">
			<h1>Register 👋</h1>
            <LoginComponent>
                {login => (
                    <Formik
                        onSubmit={async (data, { setErrors }) => {
                            const response = await login({
                                variables: data
                            })
                            console.log(response)
                            if (response && response.data && !response.data.login) {
                                setErrors({
                                    email: 'invalid login'
                                })
                                return
                            }
                            Router.push('/')
                        }}
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                    >
                        {
                            ({values, handleSubmit}) => <form onSubmit={handleSubmit}>
                                <Field
                                    name="email"
                                    placeholder="email"
                                    component={InputField}
                                />
                                <Field
                                    name="password"
                                    placeholder="password"
                                    type="password"
                                    component={InputField}
                                />
                                <button
                                    type="submit"
                                >
                                    Login
                                </button>
                            </form>
                        }
                    </Formik>
                )}
            </LoginComponent>
		</Layout>
	)
}

export default Login;
