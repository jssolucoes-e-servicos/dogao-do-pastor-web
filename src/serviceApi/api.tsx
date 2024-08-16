import axios from "axios";
import { parseCookies } from "nookies";

const { acl0: token } = parseCookies();

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
		"Access-Control-Allow-Methods": "*",
		"Access-Control-Allow-Headers": "*",
		
	},
});
if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }


api.interceptors.response.use(
	(response) => response,
	(error) => {
		// if (error.response.status === 401) {
		//   sessionStorage.clear();
		//   localStorage.clear();
		//   toast.error("O tempo de sua seção expirou, faça login novamente.");
		// }
		return Promise.reject(error);
	},
);

// export default api;
// import axios from "axios";
// import { intercept } from './middleware'; // Correção na importação do middleware
// // import { parseCookies } from "nookies";

// // const { "acl0": token } = parseCookies();
// // console.log(token,'meu TOKEN API');

// const api = axios.create({
// 	baseURL: "http://localhost:3400/",
// 	headers: {
// 		"Access-Control-Allow-Origin": "*",
// 		"Content-Type": "application/json",
// 		"Access-Control-Allow-Methods": "*",
// 		"Access-Control-Allow-Headers": "*",
// 	},
// });

// // Chama a função intercept para adicionar o interceptor de requisição
// intercept(api);

export default api;
