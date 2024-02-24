import React from 'react';
import { UiButton, UiForm, UiInputFloating } from 'shared/ui';
import { useLoginForm } from '../model/useLoginForm';

const LoginForm = () => {
	const { formData, handleFormChange, handleLogin, isLoading } = useLoginForm();

	return (
		<UiForm title={'Anmeldung'} onSubmit={handleLogin}>
			<UiInputFloating
				required
				id={'email'}
				type={'email'}
				name='email'
				label={'E-Mail'}
				value={formData.email}
				onChange={handleFormChange}
			/>
			<UiInputFloating
				required
				id={'password'}
				name='password'
				type={'password'}
				label={'Passwort'}
				value={formData.password}
				onChange={handleFormChange}
			/>
			<UiButton type={'submit'} disabled={isLoading} classes={'background-blue color-white mt-3'}>
				Login
			</UiButton>
		</UiForm>
	);
};

export default LoginForm;
