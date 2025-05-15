import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaLeftLong } from "react-icons/fa6";
import bannerImage from '../../assets/images/signIn.png';

const OtpVerification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);

  const onSubmit = (data) => {
    const otp = Object.values(data).join('');
    console.log("OTP Entered:", otp);
    // Perform OTP verification API call
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      setResendEnabled(true);
    }
  }, [timer]);

  const handleResendOtp = () => {
    if (resendEnabled) {
      console.log("Resend OTP triggered");
      setTimer(60);
      setResendEnabled(false);
      // Call resend OTP API here
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom right, #FFFFFF99, #3B9C79CC, #FFFFFF99)',
        }}
      />

      <div className="relative z-10 w-full h-full">
        
        {/* Right Side */}
        <div className="col-span-4 flex items-center justify-center p-8">
          <div className="max-w-xl w-full bg-[#95CFBA] border border-gray-200 rounded-xl shadow-md p-20 relative">
            <h2 className="text-2xl font-bold text-center mb-2">
              Verify Your E-mail
            </h2>
            <p className="text-center text-sm text-gray-700 mb-6">
              We have sent a 6-digit verification code to your email.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex space-x-4 justify-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    {...register(`otp${index}`, { required: true, maxLength: 1 })}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-center border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#3B9C79] text-lg"
                  />
                ))}
              </div>
              {Object.keys(errors).length > 0 && (
                <p className="text-red-600 text-sm text-center">
                  Please fill all OTP fields
                </p>
              )}

              {/* Resend OTP with Timer */}
              <p className="text-center text-sm mt-6">
                {resendEnabled ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-[#3B9C79] hover:underline"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <span className="text-gray-600">
                    Resend OTP in {timer}s
                  </span>
                )}
              </p>

              <button
                type="submit"
                className="w-full bg-white text-[#3B9C79] font-semibold py-2 rounded-full hover:bg-gray-100"
              >
                Verify OTP
              </button>
            </form>

            {/* Back Button */}
            <div className="flex items-center justify-center text-[#3B9C79] mt-4 hover:underline">
              <button
                onClick={() => window.history.back()}
                className="flex items-center"
              >
                <FaLeftLong className="mr-2" />
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
