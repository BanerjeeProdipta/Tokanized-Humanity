import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../components/ui/form-fields/InputField';
import { getRole } from '../utils';

interface ISignUp{
 email: string;
 password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Address is required'),

});

function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUp>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',

  });

  const onSubmit = handleSubmit(async (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    getRole();
    navigate('/');
  });

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-bold">Sign In</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 pt-6">
        <InputField type="email" label="Email" {...register('email')} errorMessage={errors.email && errors.email.message} />
        <InputField type="password" label="Password" {...register('password')} errorMessage={errors.password && errors.password.message} />
        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-4 py-1 text-white transition duration-500 rounded-full bg-primary hover:bg-secondary ${
              isSubmitting && ' opacity-50 cursor-not-allowed'}`}
            disabled={isSubmitting}
          >
            Submit
            {isSubmitting && <span className="spinner" />}
          </button>
        </div>

      </form>
    </div>
  );
}

export default SignIn;
