import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const reader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalysisWithHTMLReport('Man United', 'report.html');

reader.load();
summary.buildAndPrintReport(reader.matches);
