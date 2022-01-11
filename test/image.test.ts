import { Parser } from '../src';
import * as fs from 'fs';

describe('image', () => {
  const parser = new Parser();

  it('case 1', async () => {
    const jsonData = fs.readFileSync('test/data/lcplus.img.json', {
      encoding: 'utf-8',
    });
    const result = parser.image(jsonData);
    expect(result.taskId).toEqual('lcplusp383nuxw4zpmg6t33g00309rs3');
  });

  it('case 2', async () => {
    const jsonData = fs.readFileSync('test/data/rpxx2l.img.json', {
      encoding: 'utf-8',
    });
    const result = parser.image(jsonData);
    expect(result.taskId).toEqual('rpxx2luggqf7tuqu4rp3z87g00309rbj');
  });
});