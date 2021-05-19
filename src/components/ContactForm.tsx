import React, { ReactNode, useState } from 'react';
import emailjs from 'emailjs-com';
import classNames from 'classnames';

type FormStateType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ErrorStateType = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

type ContactInputProps = {
  type: string;
  name: string;
  placeholder: string;
  formState: FormStateType;
  errorState: ErrorStateType;
  errorMessage: string;
  clearErrorMessage: (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => void;
  handleInputChange: (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => void;
};

const InputContainer = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className='flex flex-col w-full'>{children}</div>
);

export const ContactInput = ({
  type,
  name,
  placeholder,
  formState,
  errorState,
  errorMessage,
  clearErrorMessage,
  handleInputChange,
}: ContactInputProps): JSX.Element => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={classNames(
          'p-3 border rounded-lg border-primary focus:outline-none focus:ring-1 ring-primary',
          { 'border-error': errorState[name as keyof ErrorStateType] }
        )}
        onChange={e => handleInputChange(e)}
        value={formState[name as keyof FormStateType]}
        onFocus={clearErrorMessage}
      />
      <span
        className={classNames(
          errorState[name as keyof ErrorStateType] ? 'text-error' : 'hidden'
        )}
      >
        {errorMessage}
      </span>
    </>
  );
};

export const ContactForm = (): JSX.Element => {
  const [formState, setFormState] = useState<FormStateType>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errorState, setErrorState] = useState<ErrorStateType>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const sendEmail = (): void => {
    emailjs
      .send(
        'service_b6cdl9w',
        'portfolio_site',
        {
          subject: formState.subject,
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        'user_t1rYZ5aMx35opccJ5gGJG'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  const validateForm = (): boolean => {
    let isError: boolean = false;
    const newErrors: ErrorStateType = {
      ...errorState,
    };
    for (const inputName in formState) {
      if (formState[inputName as keyof FormStateType] === '') {
        isError = true;
        newErrors[inputName as keyof FormStateType] = true;
      }
    }
    setErrorState(newErrors);
    return isError;
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) return;

    sendEmail();

    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ): void => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const clearErrorMessage = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ): void => {
    setErrorState({
      ...errorState,
      [e.currentTarget.name]: false,
    });
  };

  return (
    <form
      className='flex flex-col items-start p-8 space-y-6 text-primary w-[480px]'
      onSubmit={e => submitForm(e)}
      id='contact-form'
    >
      <h1 className='w-full text-3xl font-black'>Contact</h1>
      <div className='flex flex-col w-full'>
        <label
          htmlFor='name'
          className={classNames('font-bold', { 'text-error': errorState.name })}
        >
          Name
        </label>
        <ContactInput
          type={'text'}
          name={'name'}
          placeholder={'Name'}
          handleInputChange={handleInputChange}
          formState={formState}
          errorState={errorState}
          errorMessage={'Please enter your name.'}
          clearErrorMessage={clearErrorMessage}
        />
      </div>
      <InputContainer>
        <label
          htmlFor='email'
          className={classNames('font-bold', {
            'text-error': errorState.email,
          })}
        >
          Email
        </label>
        <ContactInput
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          handleInputChange={handleInputChange}
          formState={formState}
          errorState={errorState}
          errorMessage={'Please enter an email.'}
          clearErrorMessage={clearErrorMessage}
        />
      </InputContainer>
      <InputContainer>
        <label
          htmlFor='subject'
          className={classNames('font-bold', {
            'text-error': errorState.subject,
          })}
        >
          Subject
        </label>
        <ContactInput
          type={'text'}
          name={'subject'}
          placeholder={'Subject'}
          handleInputChange={handleInputChange}
          formState={formState}
          errorState={errorState}
          errorMessage={'Please enter a subject.'}
          clearErrorMessage={clearErrorMessage}
        />
      </InputContainer>
      <InputContainer>
        <label
          htmlFor='message'
          className={classNames('font-bold', {
            'text-error': errorState.message,
          })}
        >
          Message
        </label>
        <textarea
          name='message'
          placeholder='Message'
          rows={3}
          className={classNames(
            'p-3 border rounded-lg border-primary focus:outline-none focus:ring-1 ring-primary',
            { 'border-error': errorState.message }
          )}
          onChange={e => handleInputChange(e)}
          onFocus={e => clearErrorMessage(e)}
          value={formState.message}
        />
        <span
          className={classNames(errorState.message ? 'text-error' : 'hidden')}
        >
          Please enter a message.
        </span>
      </InputContainer>
      <button
        type='submit'
        form='contact-form'
        className='p-3 font-bold text-white transition duration-300 rounded-lg bg-primary hover:shadow-full'
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
