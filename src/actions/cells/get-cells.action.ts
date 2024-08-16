'use server';
import api from '@/services/api';
import prisma from '@/lib/prisma';
import { setHeaders } from '@/actions/set-headers/set-headers.action';

export const getCellsAction = async () => {
    try {
      await setHeaders();
      //const { data } = await api.get('command-messages/all');
      const data = await prisma.cell.findMany({
        select : {
            id: true,
            name:true
        }
      });
      return data; 
    } catch (error) {
      console.error(error);
      return {
        error: "Falha ao processar sua requisição"
      };
    }
  };