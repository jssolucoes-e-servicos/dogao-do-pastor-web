"use client";
import { useState } from "react";
import { signInAction } from "@/actions/auth/sign-in.action";
import { SignInButton } from "@/components/buttons/sign-in-button.component";
import { InputForm } from "@/components/elements/input-form.component";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Fragment } from "react";
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
      redirect("/dashboard");
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-[100vh] dark:bg-neutral-800 bg-neutral-800">
        {/* <div className="p-9 w-full justify-center items-start h-screnn flex bg-neutral-800/30">
      <form action={handleSignIn}>
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-white dark:text-white">
            Usuário
          </label>
          <div className="relative">
            <InputForm
              type="mail"
              placeholder="Informe seu e-mail"
              name="email"
              classname="w-full rounded-lg border border-zinc-800 bg-transparent py-2 pl-6 pr-10 outline-none focus:border-rose-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />

            <span className="absolute right-4 top-2">
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                    fill=""
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-white dark:text-white">
            Senha
          </label>
          <div className="relative">
            <InputForm
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              name="password"
              classname="w-full rounded-lg border border-zinc-800 bg-transparent py-2 pl-6 pr-10 outline-none focus:border-rose-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />

            <span
              className="absolute right-4 top-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={22}/> : <FaEye size={22}/>}
            </span>
           
          </div>
        </div>

        <div className="mb-5">
          <SignInButton />
        </div>
        <div className="mt-6 text-center">
          <Link href="/acesso/recuperar-senha">Esqueci minha senha</Link>
        </div>
      </form>
      </div> */}
        <div className=" w-full justify-center items-start h-screnn flex ">
          <div className=" w-full relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
              <div className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative bg-[url('https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80')]">
                <div className="absolute bg-gradient-to-b from-rose-900 to-gray-900 opacity-75 inset-0 z-0"></div>
                <div
                  style={{
                    borderTopWidth: "70rem",
                    borderLeftWidth: "26rem",
                    borderStyle: "solid",
                    borderColor: "#262626 transparent  #262626",
                  }}
                  className="absolute  min-h-screen right-0 w-16"
                ></div>
                <Link href="#"
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
                 
                </Link>
                {/* <img src="assets/logoIvera.svg" className="h-80 absolute right-5 mr-5"/> */}
                <div className="w-full  max-w-md z-10">
                  <div className="sm:text-2xl xl:text-3xl font-bold leading-tight mb-6">
                    Acelere com leads que vendem de verdade!
                  </div>
                  <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                    {" "}
                    Inteligência Artificial, resultados de verdade Você diz o
                    que quer e eu te entendo. Preço, localização, tamanho e tudo
                    o que você busca no seu imóvel. Quanto mais disser, mais eu
                    evoluo. Isso porque sou dotada de um sistema de inteligência
                    cognitiva que aprende com você. Isto é: quanto mais você
                    conversa comigo, mais entendo sobre o seu perfil, suas
                    necessidades e exatamente o tipo de imóvel que você deseja.
                  </div>
                </div>

                <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className=" md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none  ">
                <div className="max-w-md w-full space-y-8">
                  <div className="flex flex-col text-center justify-center items-center">
                    <img
                      src="assets/logoIvera.svg"
                      className="h-20 relative "
                    />

                    <p className="mt-2 text-sm text-gray-500">
                    Por favor entre em sua conta
                    </p>
                  </div>
                  {/* <div className="flex flex-row justify-center items-center space-x-3">
                    <Link href="#"
                    target="_blank"
                    className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg   bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                        <img
                          className="w-4 h-4"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                        />
                    
                    </Link>
                    <Link href="#"
                     target="_blank"
                     className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                   >

                        <img
                          className="w-4 h-4"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                        />
                     
                    </Link>
                    <Link href="#"
                    target="_blank"
                    className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                  >

                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                          className="w-4 h-4"
                        />
                    
                    </Link>
                  </div> */}
                  <div className="flex items-center justify-center space-x-2">
                    {/* <span className="h-px w-16 bg-gray-200"></span>
                    <span className="text-gray-300 font-normal">
                    ou continuar com
                    </span>
                    <span className="h-px w-16 bg-gray-200"></span> */}
                  </div>
                  <form className="mt-8 space-y-6" action={handleSignIn}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="relative">
                      {/* <div className="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div> */}
                      <label className="ml-3 text-sm font-bold text-gray-100 tracking-wide">
                        Email
                      </label>
                      <InputForm
                        type="email"
                        placeholder="mail@gmail.com"
                        name="email"
                        classname=" w-full text-base px-4 py-2 border dark:gray-800 bg-neutral-800/30 text-gray-300 border-gray-500 focus:outline-none rounded-2xl focus:border-rose-700"
                        //classname="w-full rounded-lg border border-zinc-800 bg-transparent py-2 pl-6 pr-10 outline-none focus:border-rose-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      {/* <input className=" w-full text-base px-4 py-2 border-b border-gray-900 focus:outline-none rounded-2xl focus:border-indigo-500" type="" placeholder="mail@gmail.com" value=""/> */}
                    </div>
                    <div className="mt-8 relative content-center">
                      <label className=" text-sm font-bold text-gray-100 tracking-wide">
                        Password
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
                          classname="w-full content-center text-base px-4 py-2 border bg-neutral-800/30 rounded-2xl dark:gray-800 text-gray-300 border-gray-500 focus:outline-none focus:border-rose-700"
                          //classname="w-full rounded-lg border border-zinc-800 bg-transparent py-2 pl-6 pr-10 outline-none focus:border-rose-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>

                      {/* <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl dark:text-black border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password" value=""/> */}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 bg-rose-500 focus:ring-rose-400 border-gray-800 rounded"
                        />
                        <label
                          htmlFor="remember_me"
                          className="ml-2 block text-sm text-gray-100"
                        >
                          Lembre de mim
                        </label>
                      </div>
                      <div className="text-sm">
                        <Link href="#" >
                          <span className="text-rose-400 hover:text-rose-500">
                            Esqueceu a senha?
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <SignInButton />
                      {/* <button type="submit" className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-rose-600  hover:bg-gradient-to-l hover:from-rose-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button> */}
                    </div>
                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                      <span>Não tem uma conta?</span>
                      <Link href="#">
                        <span className="text-white hover:text-rose-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                          Criar conta
                        </span>
                      </Link>
                    </p>
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
