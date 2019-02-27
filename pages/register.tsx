
import Link from 'next/link'
import * as React from 'react'

import { Formik, Field } from 'formik'

import Layout from '../components/Layout'
import { InputField } from '../components/fields/InputField';

import { RegisterComponent } from '../generated/apolloComponents'

const RegisterPage: React.FunctionComponent = () => {
	return (
		<Layout title="Register page">
			<h1>Register 👋</h1>
			<p>
				<Link href='/about'>
					<a>About</a>
				</Link>
			</p>
            <RegisterComponent>
                {(register) => (
                    <Formik
                        onSubmit={async data => {
                            const response = await register({
                                variables: {
                                    data
                                } 
                            })
                            console.log(response)
                        }}
                        initialValues={{
                            email: '',
                            firstName: '',
                            lastName: '',
                            password: ''
                        }}
                    >
                        {
                            ({values, handleSubmit}) => <form onSubmit={handleSubmit}>
                                <Field
                                    name="firstName"
                                    placeholder="first name"
                                    component={InputField}
                                />
                                <Field
                                    name="lastName"
                                    placeholder="last name"
                                    component={InputField}
                                />
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
                                    Register
                                </button>
                            </form>
                        }
                    </Formik>
                )}
            </RegisterComponent>
		</Layout>
	)
}

export default RegisterPage;
