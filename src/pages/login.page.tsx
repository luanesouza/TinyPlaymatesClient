import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/input';
import '../css/login.scss';


export default function LoginPage() {
  const [state, setState] = useState({ email: '', password: '' });
  
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.email && state.password) {
      //TODO: submit data to api
      // For now: redirect user to see al users
      navigate('/connect');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prevState: typeof state) => ({
      ...prevState,
      [name]: value
    }));
  }, []);
  
  return (
    <section className='container'>
      <h1 className='form-title'> Welcome! </h1>

      <form className='login-form' onSubmit={handleSubmit}>
        <Input
          className='input-field'
          onChange={handleChange}
          type="text"
          name="email"
          value={state.email}
        />
        <Input
          className='input-field'
          onChange={handleChange}
          type="password"
          name="password"
          value={state.password}
        />
        <button className='submit-button' type="submit"> Login </button>
      </form>
    </section>
      
  );
}