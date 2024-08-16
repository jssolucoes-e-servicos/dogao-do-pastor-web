"use server";
import { setHeaders } from "@/actions/set-headers/set-headers.action";
import api from "@/services/api";

export const getCellsAction = async () => {
  try {
    await setHeaders();
    const { data } = await api.get("cells");
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar sua requisição",
    };
  }
};
