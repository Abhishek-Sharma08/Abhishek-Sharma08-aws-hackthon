import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Mail, Lock, AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import api from '../services/api';
import { useUser } from '../context/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const { refreshProfile } = useUser();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email)
      newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    if (!formData.password)
      newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    setSuccess('');

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', formData.email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      setSuccess('Login successful! Redirecting...');

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      await refreshProfile();

      setTimeout(() => navigate('/progress'), 1500);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Login failed. Please try again.';
      setServerError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-[#0B1120]">

      <div className="w-full max-w-sm sm:max-w-md mx-auto">

        <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-5 sm:p-8 shadow-2xl backdrop-blur-xl">

          {/* Glow */}
          <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-sky-500/20 to-blue-600/20 opacity-20 blur-lg" />

          <div className="relative z-10">

            {/* Header */}
            <div className="mb-5 sm:mb-8 text-center">
              <div className="mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-linear-to-br from-sky-300 via-blue-500 to-blue-700 shadow-lg">
                <LogIn size={24} className="text-white" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Welcome Back
              </h1>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400">
                Sign in to your SnowVault account
              </p>
            </div>

            {/* Server Error */}
            {serverError && (
              <div className="mb-4 flex gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3 sm:p-4">
                <AlertCircle size={18} className="mt-0.5 text-red-400" />
                <p className="text-xs sm:text-sm text-red-200">{serverError}</p>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="mb-4 flex gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-3 sm:p-4">
                <CheckCircle size={18} className="mt-0.5 text-green-400" />
                <p className="text-xs sm:text-sm text-green-200">{success}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-300/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm sm:text-base text-white placeholder-white/30 focus:border-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                  Password
                </label>

                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-300/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-10 text-sm sm:text-base text-white placeholder-white/30 focus:border-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-300/40 hover:text-sky-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 accent-sky-500"
                />
                <span className="text-xs sm:text-sm text-slate-400">
                  Remember me
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-5 sm:mt-6 w-full rounded-lg bg-linear-to-r from-sky-500 to-blue-600 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-sky-500/40 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn size={18} />
                    Sign In
                  </>
                )}
              </button>

            </form>

            {/* Divider */}
            <div className="my-5 sm:my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-slate-400">New here?</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Signup */}
            <Link
              to="/signup"
              className="block w-full rounded-lg border border-sky-500/30 bg-sky-500/5 py-2.5 text-center text-sm sm:text-base font-semibold text-sky-200 transition-all hover:border-sky-500/60 hover:bg-sky-500/15"
            >
              Create Account
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

