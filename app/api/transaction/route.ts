import { TransactionProps } from '@/types/transaction';
import { revalidateTag } from 'next/cache';
import { NextResponse } from "next/server";

let transactions: TransactionProps[] = []

// add new transaction
export async function POST(request: Request) {
  const body = await request.json();
  const { description, price, category, status } = body;

  console.log("Request body:", body);

  if (!description || !price || !category || !status) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }


  const transaction = {
    id: generateNewId(),
    description,
    price,
    category,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  transactions.push(transaction)
  console.log("Transaction created:", transactions);

  revalidateTag('transactions');

  return NextResponse.json(transactions, {
    status: 201});
}

// const findTransactionById = (id: number) => 
//   transactions.find(t => t.id === id);

const generateNewId = () => 
  Math.max(...transactions.map(t => t.id), 0) + 1;

// get all transactions
export async function GET() {
  try {
    return NextResponse.json(transactions, {
      status: 200});
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}

// update transaction
export async function PUT(request: Request) {
  const body = await request.json();
  const { id, description, email, price, category } = body;

  // Validate request body
  if (!id || !description || !email || !price || !category) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Update transaction in database (mocked)
  // In a real application, you would use a database library to update the transaction
  console.log("Transaction updated:", { id, description, email, price, category });

  return new Response(JSON.stringify({ id, description, email, price, category }), { status: 200 });
}
// delete transaction
export async function DELETE(request: Request) {
  try {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json(
      { error: 'Transaction ID is required' },
      { status: 400 }
    );
  }

  const initialLength = transactions.length;
  transactions = transactions.filter(transaction => transaction.id !== id);

  if (transactions.length === initialLength) {
    return NextResponse.json(
      { error: 'Transaction not found' },
      { status: 404 }
    );
  }
  console.log("Transaction deleted:", { id });

  return new Response(JSON.stringify({ id }), { status: 200 });

} catch (error) {
  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: 500 }
  );
  }
}
