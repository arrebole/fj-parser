import { Parser } from '../src';
import * as fs from 'fs';

describe('text', () => {
  const parser = new Parser();

  it('case 1', async () => {
    const jsonData = fs.readFileSync('test/data/eq1wi4.text.json', {
      encoding: 'utf-8',
    });
    const result = parser.text(jsonData);
    expect(result.taskId).toEqual('eq1wi4g6a44yni3x2t1h7w5g00109r29');
  });
});
