"use server";
import prisma from "@/lib/prisma";
import api from "@/services/api";
import { compare } from "bcrypt";
import md5 from "md5";
import { cookies } from "next/headers";

export const signInAction = async (formData: FormData) => {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const user = await prisma.user.findFirst({
      where: { username: username },
    });

    if (user?.id) {
      const isPasswordValid = await compare(password, user.password);
      if (isPasswordValid) {
        const timestamp = new Date().getTime();
        const token = `${user.id}-6088db57d453856fabfd9e9b32b42e90-${timestamp}`;
        const access_token = md5(token);
        cookies().set("acl0", access_token, { secure: true });
        cookies().set("acl1", JSON.stringify(user), { secure: true });
        api.defaults.headers.Authorization = `Bearer ${access_token}`;
        return {
          ...user,
          password: undefined,
        };
      }
    } else {
      return {
        error: "Usuário inválido",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar seu login",
    };
  }
};
