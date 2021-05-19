import { ReactNode, useState } from 'react';
import emailjs from 'emailjs-com';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactInputProps = {
  type: string;
  name: string;
  placeholder: string;
  state: FormState;
  setState: React.Dispatch<React.SetStateAction<FormState>>;
};

const InputContainer = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className='flex flex-col w-full'>{children}</div>
);

export const ContactInput = ({
  type,
  name,
  placeholder,
  state,
  setState,
}: ContactInputProps): JSX.Element => {
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='p-3 border rounded-lg border-primary focus:outline-none focus:ring-1 ring-primary'
      onChange={e => handleInputChange(e)}
      value={state[name as keyof FormState]}
    />
  );
};

export const ContactForm = (): JSX.Element => {
  const [state, setState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (): void => {
    emailjs
      .send(
        'service_b6cdl9w',
        'portfolio_site',
        {
          subject: state.subject,
          from_name: state.name,
          from_email: state.email,
          message: state.message,
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

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    sendEmail();
  };

  return (
    <form
      className='flex flex-col items-start p-8 space-y-6 text-primary w-[480px]'
      onSubmit={e => submitForm(e)}
    >
      <h1 className='w-full text-3xl font-black'>Contact</h1>
      <div className='flex flex-col w-full'>
        <label htmlFor='name' className='font-bold'>
          Name
        </label>
        <ContactInput
          type={'text'}
          name={'name'}
          placeholder={'Name'}
          setState={setState}
          state={state}
        />
      </div>
      <InputContainer>
        <label htmlFor='email' className='font-bold'>
          Email
        </label>
        <ContactInput
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          setState={setState}
          state={state}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor='subject' className='font-bold'>
          Subject
        </label>
        <ContactInput
          type={'text'}
          name={'subject'}
          placeholder={'Subject'}
          setState={setState}
          state={state}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor='message' className='font-bold'>
          Message
        </label>
        <textarea
          name='message'
          placeholder='Message'
          rows={3}
          className='p-3 border rounded-lg resize-none border-primary focus:outline-none focus:ring-1 ring-primary'
          onChange={e =>
            setState({
              ...state,
              [e.currentTarget.name]: e.currentTarget.value,
            })
          }
        />
      </InputContainer>
      <button className='p-3 font-bold text-white rounded-lg bg-primary'>
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
