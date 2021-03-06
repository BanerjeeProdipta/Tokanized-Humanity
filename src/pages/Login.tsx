import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AiFillEye, AiFillEyeInvisible, AiFillLock, AiFillMail,
} from 'react-icons/ai';
import * as Yup from 'yup';
import {
  emailRegex, lowercaseRegex, numericRegex, specialCharRegex, uppercaseRegex,
} from '../utils';

interface IData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().trim().lowercase().required('Required')
    .matches(emailRegex, 'Invalid email format'),
  password: Yup.string()
    .trim()
    .required('Required')
    .matches(lowercaseRegex, 'one lowercase required!')
    .matches(uppercaseRegex, 'one uppercase required!')
    .matches(numericRegex, 'one number required!')
    .matches(specialCharRegex, 'one special character required!')
    .min(8, 'Minimum 8 characters required!'),
});

function LogIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState<string>();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<IData>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      email: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
    } catch (err: any) {
      setError(err.message ? err.message : err);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full p-10" style={{ height: 'calc(100vh - 170px)' }}>
      <div className="w-full max-w-sm p-4 bg-white shadow-md rounded-3xl md:p-6">
        <h1 className="mb-12">Log In</h1>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <h4>Email</h4>
            <div className="relative">
              <AiFillMail className="h-5 absolute top-2.5 left-2 text-gray-400 fill-current" />
              <input
                {...register('email')}
                className="w-full py-2 pl-8 rounded-md bg-gray-50 focus:outline-none"
                placeholder="Your email"
              />
              {errors.email && <p className="mt-1 text-sm font-semibold text-red-500">{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <h4>Password</h4>
            <div className="relative">
              <div className="absolute z-10 items-center justify-center w-8 h-full py-3 text-base font-normal leading-snug text-center placeholder-gray-100 bg-transparent rounded fill-current right-5">
                <div className="mt-8 cursor-pointer" onClick={togglePasswordVisibility} aria-hidden="true">
                  {passwordShown ? (
                    <AiFillEyeInvisible className="h-5 absolute top-2.5 right-0 text-gray-400 fill-current" />
                  ) : (
                    <AiFillEye className="h-5 absolute top-2.5 right-0 text-gray-400 fill-current" />
                  )}
                </div>
              </div>
              <div className="relative">
                <AiFillLock className="h-6 absolute top-2.5 left-2 text-gray-400 fill-current" />
                <input
                  {...register('password')}
                  className="w-full py-2 pl-8 rounded-md bg-gray-50 focus:outline-none"
                  placeholder="Your password"
                  type={passwordShown ? 'text' : 'password'}
                />
                {errors.password && (
                <p className="mt-1 text-sm font-semibold text-red-500">{errors.password.message}</p>
                )}

              </div>

            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isDirty || isSubmitting}
              className={`w-full py-2 font-semibold transition duration-500 rounded-full cursor-pointer bg-primary focus:outline-none text-white ${isDirty ? 'opacity-100' : 'opacity-80 cursor-not-allowed'
              }}`}
            >
              Log In
            </button>
          </div>
          <div className="py-2">
            <em>{error}</em>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
