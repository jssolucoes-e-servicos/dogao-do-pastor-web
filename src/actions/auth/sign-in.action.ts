"use server";
import api from "@/services/api";
import { cookies } from "next/headers";

export const signInAction = async (formData: FormData) => {
  try {
    const rawFormData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    const { data } = await api.post("auth/login", rawFormData);
    if (data.token && data.user) {
      cookies().set("acl0", data.token, { secure: true });
      cookies().set("acl1", JSON.stringify(data.user), { secure: true });

      api.defaults.headers.Authorization = `Bearer ${data.access_token}`;
      console.log(data.access_token, "meus", data.user);
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar seu login",
    };
  }
};
