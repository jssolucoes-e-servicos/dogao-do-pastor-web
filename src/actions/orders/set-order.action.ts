'use server';
import api from '@/services/api';
import prisma from '@/lib/prisma';
import { setHeaders } from '@/actions/set-headers/set-headers.action';

export const getCellsAction = async (formData: FormData) => {
    try {
        const username = formData.get('username');
        const password = formData.get('password');
    
        const customer = await prisma.user.findFirst({
          where: { phone: rawFormData.username },
        });
    
        
      } catch (error) {
        console.error(error);
        return {
          error: "Falha ao processar seu login"
        }
      }