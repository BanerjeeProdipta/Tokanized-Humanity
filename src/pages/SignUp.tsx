import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../components/ui/form-fields/InputField';

interface ISignUp{
  name:string,
  email:string,
  address:string,
  dob:Date,
  contact:string,
  profession:string,
  gender:string,
  profilePicture:File|undefined,
  passportImage:File|undefined,
  nIDImage:File|undefined,
  drivingLicenseImage:File|undefined,
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  dob: yup.date().required('Date of birth is required').typeError('Date of birth is required'),
  contact: yup.string().required('Contact Number is required'),
  profession: yup.string().required('Profession is required'),
  gender: yup.string().required('Gender is required'),
  profilePicture: yup.mixed().required('Profile picture is required'),
  passportImage: yup.mixed().required('Passport image is required'),
  nIDImage: yup.mixed().required('NID image is required'),
  drivingLicenseImage: yup.mixed().required('Driving license image is required'),

});

function SignUp() {
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ISignUp>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',

  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data));
    // navigate('/');
  });

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold">Apply for Verification</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-6 pt-6">
        <InputField
          type="text"
          label=" Name"
          {...register('name')}
          errorMessage={
        errors.name && errors.name.message
      }
        />

        <InputField type="email" label="Email" {...register('email')} errorMessage={errors.email && errors.email.message} />

        <InputField
          type="address"
          label="Address"
          {...register('address')}
          errorMessage={
        errors.address && errors.address.message
      }
        />

        <InputField
          type="date"
          label="Date of Birth"
          {...register('dob')}
          errorMessage={
        errors.dob && errors.dob.message
      }
        />

        <InputField
          type="tel"
          label="Contact Number"
          {...register('contact')}
          errorMessage={
        errors.contact && errors.contact.message
      }
        />

        <InputField
          type="text"
          label="Profession"
          {...register('profession')}
          errorMessage={
        errors.profession && errors.profession.message
      }
        />

        <div className="max-w-md col-span-2">
          <p className={`font-medium mb-3 ${errors.gender ? 'text-red-500' : 'text-gray-500'}`}>
            Gender
          </p>
          <div className="flex justify-between">
            <div className="form-check form-check-inline">
              <label className="inline-block form-check-label" htmlFor="inlineRadio10">

                <input
                  className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-primary checked:border-primary focus:outline-none"
                  type="radio"
                  name="gender"
                  onChange={(e) => setValue(
                    'gender',
                    e.target.value,
                  )}
                  id="inlineRadio1"
                  value="male"
                />
                Male

              </label>
            </div>
            <div className="form-check form-check-inline">

              <label className="inline-block form-check-label" htmlFor="inlineRadio20">
                <input
                  className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-primary checked:border-primary focus:outline-none"
                  type="radio"
                  name="gender"
                  onChange={(e) => setValue(
                    'gender',
                    e.target.value,
                  )}
                  id="inlineRadio2"
                  value="female"
                />
                Female

              </label>
            </div>
            <div className="form-check form-check-inline">

              <label
                className="inline-block form-check-label"
                htmlFor="inlineRadio30"
              >
                <input
                  className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none form-check-input checked:bg-primary checked:border-primary focus:outline-none"
                  type="radio"
                  name="gender"
                  onChange={(e) => setValue(
                    'gender',
                    e.target.value,
                  )}
                  id="inlineRadio3"
                  value="other"
                />
                Other
              </label>
            </div>
          </div>
          {
  errors.gender && (<p className="text-xs text-red-500">{errors.gender.message}</p>)
}
        </div>
        <div className="space-y-1">
          <p className={`font-medium ${errors.profilePicture ? 'text-red-500' : 'text-gray-500'}`}>
            Profile Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('profilePicture') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'profilePicture',
                 ) && URL.createObjectURL(
                watch('profilePicture')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-picture-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-picture-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('profilePicture', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('profilePicture')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'profilePicture',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.profilePicture && (<p className="text-xs text-red-500">{errors.profilePicture.message}</p>)
          }
        </div>

        <div className="space-y-1">
          <p className={`font-medium ${errors.passportImage ? 'text-red-500' : 'text-gray-500'}`}>
            Passport Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('passportImage') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'passportImage',
                 ) && URL.createObjectURL(
                watch('passportImage')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-passport-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-passport-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('passportImage', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('passportImage')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'passportImage',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.passportImage && (<p className="text-xs text-red-500">{errors.passportImage.message}</p>)
          }
        </div>

        <div className="space-y-1">
          <p className={`font-medium ${errors.nIDImage ? 'text-red-500' : 'text-gray-500'}`}>
            NID Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('nIDImage') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'nIDImage',
                 ) && URL.createObjectURL(
                watch('nIDImage')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-nid-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-nid-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('nIDImage', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('nIDImage')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'nIDImage',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.nIDImage && (<p className="text-xs text-red-500">{errors.nIDImage.message}</p>)
          }
        </div>

        <div className="space-y-1">
          <p className={`font-medium ${errors.drivingLicenseImage ? 'text-red-500' : 'text-gray-500'}`}>
            Driving License Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('drivingLicenseImage') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'drivingLicenseImage',
                 ) && URL.createObjectURL(
                watch('drivingLicenseImage')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-driving-license-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-driving-license-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('drivingLicenseImage', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('drivingLicenseImage')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'drivingLicenseImage',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.drivingLicenseImage && (<p className="text-xs text-red-500">{errors.drivingLicenseImage.message}</p>)
          }
        </div>
        <div />
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

export default SignUp;
