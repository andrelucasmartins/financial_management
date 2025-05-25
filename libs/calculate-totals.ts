interface TransactionProps {
  status: string;
  price: number;
}


export function calculateTotals (transactions: TransactionProps[]){

  let totalEntries = transactions
    .filter(item => item.status === 'earnings')
    .reduce((sum, item) => sum + Number(item.price), 0);

  let totalExpenses = transactions
    .filter(item => item.status === 'looses')
    .reduce((sum, item) => sum + Number(item.price), 0);

  const totalBalance = totalEntries - totalExpenses;

  return { totalEntries, totalExpenses, totalBalance };
};