import { data } from './quality/errores-object';  
import { generateReport } from './quality/report';

const report = generateReport(data);
console.log(report);