import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiUpload } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../components/ui/form-fields/InputField';
import TextArea from '../components/ui/form-fields/TextArea';

 interface ICreateCampaign{
  title: string;
  description: string;
  endDate: string;
  banner: File;
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
  endDate: yup.string().required('Required'),
  banner: yup.mixed().required('Required'),
});

function CreateCampaign() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [bannerError, setBannerError] = useState('');
  const [banner, setBanner] = useState<File>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },

  } = useForm<ICreateCampaign>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',

  });

  const handleChangeBannerFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setBanner(undefined);
    if (event.target.files) {
      const file = event.target.files[0];
      setValue('banner', file);
      setBanner(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    navigate('/');
  });

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-bold">Create Campaign</h2>
      <form onSubmit={onSubmit} className="pt-6 space-y-6">
        <InputField
          type="text"
          label="Title"
          {...register('title')}
          errorMessage={
        errors.title && errors.title.message
      }
        />

        <TextArea
          rows={3}
          label="Description"
          placeholder="Write a few lines about your campaign"
          {...register('description')}
          errorMessage={
        errors.description && errors.description.message
      }
        />

        <InputField
          type="date"
          label="End Date"
          {...register('endDate')}
          errorMessage={
        errors.endDate && errors.endDate.message
      }
        />
        <div>
          <p className={`font-medium  mb-1 ${
            bannerError ? 'text-red-500' : 'text-gray-500'
          }`}
          >
            Banner

          </p>

          <div
            className={`border bg-gray-500/20 rounded-lg ${isHovering && 'border-2 border-dashed '} ${
              errors.banner && errors.banner.message
                ? 'border-red-500' : 'border-dashed'
            } `}
            onDragEnter={() => {
              setIsHovering(true);
            }}
            onDragLeave={() => {
              setIsHovering(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsHovering(true);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setIsHovering(false);
              setBanner(undefined);
              const files = Array.from(e.dataTransfer.files);
              const extType = files[0].name.split('.').pop();
              if (files.length > 1) {
                setBannerError('Drop only One file.');
              } else if (files.length === 1 && extType) {
                setBanner(files[0]);
                setValue('banner', files[0]);
              }
            }}
          >
            <input
              accept="image/*"
              className="hidden"
              id="browse-banner-file-button"
              type="file"
              onChange={handleChangeBannerFile}
            />
            <label htmlFor="browse-banner-file-button">
              {banner ? (
                <div className="flex items-center justify-center py-8">
                  <img src={URL.createObjectURL(banner)} alt="banner" className="w-12 h-12" />
                </div>
              ) : (
                <div className="flex items-center justify-start p-6 space-x-6 cursor-pointer">
                  <BiUpload className="h-10 fill-current text-primary" />
                  <p className="text-sm">
                    Click here to upload.
                  </p>
                </div>
              )}
            </label>
          </div>
          {bannerError && (<p className="text-xs text-red-500">{bannerError}</p>)}
          {errors.banner && (<p className="text-xs text-red-500">{errors.banner.message}</p>)}
        </div>
        {' '}
        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-4 py-1 text-white transition duration-500 rounded-full bg-primary hover:bg-secondary ${
              isSubmitting && ' opacity-50 cursor-not-allowed'}`}
            disabled={isSubmitting}
          >
            Create Campaign
            {isSubmitting && <span className="spinner" />}
          </button>
        </div>

      </form>
    </div>
  );
}

export default CreateCampaign;
