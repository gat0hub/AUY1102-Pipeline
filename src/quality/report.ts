type DataItem = {
  id: string;
  status: 'ok' | 'error';
  message?: string;
};

export function generateReport(data: DataItem[]): string {
  const total = data.length;
  const success = data.filter(item => item.status === 'ok').length;
  const errors = total - success;

  const report = [
    '📊 Informe de procesamiento',
    `Total de registros: ${total}`,
    `Procesados correctamente: ${success}`,
    `Errores: ${errors}`,
  ].join('\n');

  console.log(report); // Para ver el resultado en la consola
  return report;
}