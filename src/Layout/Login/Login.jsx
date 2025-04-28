import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
// ;;;;;;;;;;;;;;;;;;;;;
const Login = () => {
  const captchaRef = useRef(null);
  const [desabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault(); // spelling fixed
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, "Form submitted!");
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    // return added here
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg rounded-lg">
            <div className="card-body p-6">
              <form onSubmit={handleLogin}>
                <fieldset className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="label text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="label text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <input
                      type="Password"
                      id="password"
                      name="captcha"
                      className="input w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="type  password"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="captcha"
                      className="label text-sm font-medium text-gray-700"
                    >
                      <LoadCanvasTemplateNoReload />
                    </label>
                    <input
                      type="text"
                      id="password"
                      ref={captchaRef}
                      name="cpatcha"
                      className="input w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your captcha"
                      required
                    />
                    <button
                      onClick={handleValidateCaptcha}
                      className="btn btn-primary  px-3 py-1 text-sm"
                    >
                      valedede
                    </button>
                  </div>

                  <div>
                    <button
                      disabled={desabled}
                      type="submit"
                      className="btn btn-neutral px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Login
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
