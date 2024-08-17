"use client";
import { signInAction } from "@/actions/auth/sign-in.action";
import { SignInButton } from "@/components/buttons/sign-in-button.component";
import { InputForm } from "@/components/elements/input-form.component";
import { redirect } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  async function handleSignIn(formData: FormData) {
    const toastId = toast.loading("Processando");
    const result = await signInAction(formData);
    if (result?.error) {
      toast.dismiss(toastId);
      toast.error(result?.error);
    } else {
      toast.dismiss(toastId);
      toast.success("Login efetuado, abrindo sistema");
      redirect("/app");
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-[100vh] dark:bg-neutral-800 bg-neutral-800">
        <div className=" w-full justify-center items-start h-screnn flex ">
          <div className=" w-full relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
              <div className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-orange-900 text-white bg-no-repeat bg-cover relative bg-[url('https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80')]">
                <div className="absolute bg-gradient-to-b from-orange-900 to-gray-900 opacity-75 inset-0 z-0"></div>
                <div
                  style={{
                    borderTopWidth: "70rem",
                    borderLeftWidth: "26rem",
                    borderStyle: "solid",
                    borderColor: "#262626 transparent  #262626",
                  }}
                  className="absolute  min-h-screen right-0 w-16"
                ></div>
                {/* <Link href="#"
                target="_blank"
                title="AceleraIA"
                className=" left-0 ml-12 flex absolute top-5 text-center text-gray-100 focus:outline-none"
                >
                    <img
                      src="/assets/funilv-white.svg"
                      alt="aji"
                      className="object-cover mx-auto  rounded-full w-10 h-10"
                    />
                    <p className="text-xl ml-3">
                      Acelera<strong>IA</strong>
                    </p>{" "}
                 
                </Link> */}
                <div className="w-full  max-w-md z-10">
                  <div className="sm:text-2xl xl:text-3xl font-bold leading-tight mb-6">
                    Dogão do Pastor
                  </div>
                  <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                    Sistema de gestão
                  </div>
                </div>
              </div>
              <div className=" md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none  ">
                <div className="max-w-md w-full space-y-8">
                  <div className="flex flex-col text-center justify-center items-center">
                    {/* <img
                      src="assets/logoIvera.svg"
                      className="h-20 relative "
                    />
 */}
                    <p className="mt-2 text-sm text-gray-500">
                      Por favor entre em sua conta
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-2"></div>
                  <form className="mt-8 space-y-6" action={handleSignIn}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="relative">
                      <label className="ml-3 text-sm font-bold text-gray-100 tracking-wide">
                        usuário
                      </label>
                      <InputForm
                        type="text"
                        placeholder="usuario"
                        name="username"
                        classname=" w-full text-base px-4 py-2 border dark:gray-800 bg-neutral-800/30 text-gray-300 border-gray-500 focus:outline-none rounded-2xl focus:border-orange-700"
                      />
                    </div>
                    <div className="mt-8 relative content-center">
                      <label className=" text-sm font-bold text-gray-100 tracking-wide">
                        Senha
                      </label>
                      <div className="flex flex-row ">
                        <div className="absolute flex justify-center items-center right-4  h-[40px]">
                          <span
                            className=" mr-1 "
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <FaEyeSlash size={22} />
                            ) : (
                              <FaEye size={22} />
                            )}
                          </span>
                        </div>
                        <InputForm
                          type={showPassword ? "text" : "password"}
                          placeholder="Digite sua senha"
                          name="password"
                          classname="w-full content-center text-base px-4 py-2 border bg-neutral-800/30 rounded-2xl dark:gray-800 text-gray-300 border-gray-500 focus:outline-none focus:border-orange-700"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 bg-orange-500 focus:ring-orange-400 border-gray-800 rounded"
                        />
                        <label
                          htmlFor="remember_me"
                          className="ml-2 block text-sm text-gray-100"
                        >
                          Lembre de mim
                        </label>
                      </div>
                      <div className="text-sm">
                        {/* <Link href="#" >
                          <span className="text-orange-400 hover:text-orange-500">
                            Esqueceu a senha?
                          </span>
                        </Link> */}
                      </div>
                    </div>
                    <div>
                      <SignInButton />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
