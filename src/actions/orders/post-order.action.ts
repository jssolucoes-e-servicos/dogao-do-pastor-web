"use server";
import api from "@/services/api";

export const postOrderAction = async (formData: FormData) => {
  try {
    const rawFormData = {
      cell: {
        id: formData.get("cellId"),
      },
      customer: {
        name: formData.get("customerName"),
        phone: formData.get("customerPhone"),
        address: formData.get("customerAddress"),
        reference: formData.get("customerReference"),
      },
      seller: {
        name: formData.get("sellerName"),
        phone: formData.get("sellerPhone"),
      },
      order: {
        hour: formData.get("hour"),
        observation: formData.get("observation"),
      },
    };

    const order = await api.post("order", rawFormData);
    return order;
  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar seu comanda",
    };
  }
};
