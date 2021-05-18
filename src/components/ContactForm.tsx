import { ReactNode } from 'react';

type ContactInputProps = {
  type: string;
  name: string;
  placeholder: string;
};

export const ContactForm = (): JSX.Element => {
  const InputContainer = ({ children }: { children: ReactNode }) => (
    <div className='flex flex-col w-full'>{children}</div>
  );

  const ContactInput = ({ type, name, placeholder }: ContactInputProps) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='p-3 border rounded-lg border-primary'
    />
  );

  return (
    <form className='flex flex-col items-start p-8 space-y-6 text-primary w-[480px]'>
      <h1 className='w-full text-3xl font-black'>Contact</h1>
      <InputContainer>
        <label htmlFor='name' className='font-bold'>
          Name
        </label>
        <ContactInput type={'text'} name={'name'} placeholder={'Name'} />
      </InputContainer>
      <InputContainer>
        <label htmlFor='email' className='font-bold'>
          Email
        </label>
        <ContactInput type={'email'} name={'email'} placeholder={'Email'} />
      </InputContainer>
      <InputContainer>
        <label htmlFor='subject' className='font-bold'>
          Subject
        </label>
        <ContactInput type={'text'} name={'subject'} placeholder={'Subject'} />
      </InputContainer>
      <InputContainer>
        <label htmlFor='message' className='font-bold'>
          Message
        </label>
        <textarea
          name='Message'
          placeholder='Message'
          rows={3}
          className='p-3 border rounded-lg resize-none border-primary'
        />
      </InputContainer>
      <button className='p-3 text-white rounded-lg bg-primary'>
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
