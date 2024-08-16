"use server";
import prisma from "@/lib/prisma";

export const postOrderAction = async (formData: FormData) => {
  try {
    const rawFormData = {
      cell: {
        id: formData.get("cellId"),
      },
      customer: {
        name : formData.get("customerName"),
        phone : formData.get("customerPhone"),
        address : formData.get("customerAddress"),
        reference : formData.get("customerReference"),
      },
      seller: {
        name: formData.get("sellerName"), 
        phone: formData.get("sellerPhone"), 
      },
      order: {
        hour: formData.get("hour"),
        observation: formData.get("observation"),
      }
    }
   
    const customer = await prisma.customer.findFirst({
      where: { phone: rawFormData.customer.phone },
    });
    
  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar seu login",
    };
  }
};
