import { useMemo } from 'react';

interface DataComponentProps {
  data: Date | string;
}

export function FormattedDate({ data }: DataComponentProps) {
  const formattedDate = useMemo(() => {
    const dataObj = typeof data === 'string' ? new Date(data) : data;
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(dataObj).replace(',', ' às').replace(':', 'h');
  }, [data]);

  return <span>{formattedDate}</span>;
}

// Uso:
{/* <FormattedDate data="2022-02-12T13:24:00" /> */}