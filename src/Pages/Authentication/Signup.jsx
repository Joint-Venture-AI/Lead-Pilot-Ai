import { useForm } from 'react-hook-form';
import bannerImage from '../../assets/images/signIn.png';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    // Signup logic goes here
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom right, #FFFFFF99, #3B9C79CC, #FFFFFF99)',
        }}
      />

      {/* Form Card */}
      <div className="relative z-10 bg-[#95CFBA] border border-gray-200 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md transform -translate-x-[10%]">
        <h2 className="text-center text-xl font-semibold mb-2 text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-700 mb-6">
          Sign up to access the platform.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            {...register('fullName', { required: 'Full name is required' })}
            className="w-full px-4 py-2 rounded-full bg-white outline-none"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName.message}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            })}
            className="w-full px-4 py-2 rounded-full bg-white outline-none"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
            })}
            className="w-full px-4 py-2 rounded-full bg-white outline-none"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-blue-500 px-4 py-2 rounded-full bg-white outline-none mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
