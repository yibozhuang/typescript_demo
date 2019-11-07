import fs from 'fs';
import { OutputTarget } from '../Summary';
import { fstat } from 'fs';

export class HTMLReport implements OutputTarget {
  constructor(public filename: string) {}

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
      `;

    fs.writeFileSync(this.filename, html);
  }
}
