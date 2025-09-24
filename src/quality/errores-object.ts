export type DataItem = {
  id: string;
  status: 'ok' | 'error';
  message?: string;
  value?: number;
};

export const data: DataItem[] = [
  {
    id: '1',
    status: 'ok',
    value: 20,
  },
  {
    id: '2',
    status: 'error',
    message: 'Falló la validación',
  },
  {
    id: '3',
    status: 'ok',
  },
];