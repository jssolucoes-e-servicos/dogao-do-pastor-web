import axios from "axios";
import { parseCookies } from "nookies";
import { ToastContainer, toast } from 'react-toastify';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export  function getAPIClient(ctx: any) {
	const { "acl0": token } = parseCookies(ctx);
	
	const api = axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Headers": "*",
			"Authorization": token ? `Bearer ${token}` : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlcm5hbmRvLnNvcnJlbnRpbm9AYWNlbGVyYWlhLmNvbS5iciIsInN1YiI6IjY1MjNmOGM0YWVhOTlkZTg3ZmM4MGQ0YiIsImlhdCI6MTcxMjc4ODEzMywiZXhwIjoxNzEyNzkxNzMzfQ.FnmsGUy69ONw8RZxxszcR7F91ZElRggIhp38C0JQIX4'
		},
	});

	// if (token) {
	// 	api.defaults.headers["Authorization"] = `Bearer ${token}`;
	//   }
	

	api.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response.status === 401) {
				toast.error("O tempo de sua seção expirou, faça login novamente.");
				return {
					redirect: {
						destination: "/login",
						permanent: false,
					},
				};
			}
			return Promise.reject(error);
		},
	);

	return api;
}
