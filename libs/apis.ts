"use server"
import { revalidateTag } from "next/cache";

export  async function getTransactions() {
  const res = await fetch('http://localhost:3000/api/transaction', {
    next: { tags: ['transactions'] }
  })

  if (!res.ok) throw new Error('Failed to fetch transactions');
  return res.json();
}

export async function createTransaction(formData: FormData) {
  const body = {
    description: formData.get('description'),
    price: parseFloat(formData.get('price') as string),
    category: formData.get('category'),
    status: formData.get('status'),
  };
  try {
    const response = await fetch('http://localhost:3000/api/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      // Tenta obter detalhes do erro da resposta
      let errorDetails = '';
      try {
        const errorResponse = await response.json();
        errorDetails = errorResponse.message || JSON.stringify(errorResponse);
      } catch {
        errorDetails = response.statusText;
      }
      
      throw new Error(
        `Failed to create transaction (${response.status}): ${errorDetails}`
      );
    }

    // if (response.ok) {
    //   Router. // Atualiza a página para ver as mudanças
    // }

  } catch (error) {
    console.error('Transaction creation failed:', error);
    throw error 
  }
}

export async function deleteTransaction(id: number) {

  try {
    const response = await fetch(`http://localhost:3000/api/transaction`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) throw new Error('Failed to delete');

    revalidateTag('transactions');
    return { success: true };
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error instanceof Error ? error : new Error('Unknown fetch error');
  }
}