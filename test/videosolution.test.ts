import { Parser } from '../src';
import * as fs from 'fs';

describe('videosolution', () => {
  const parser = new Parser();

  it('case 1', async () => {
    const jsonData = fs.readFileSync('test/data/qly3ve.video.json', {
      encoding: 'utf-8',
    });
    const result = parser.videosolution(jsonData);
    expect(result.taskId).toEqual('qly3vet5voxnpk2uax1ugvpg02009r28');
  });

  it('case 2', async () => {
    const jsonData = fs.readFileSync('test/data/vxne9e.video.json', {
      encoding: 'utf-8',
    });
    const result = parser.videosolution(jsonData);
    expect(result.taskId).toEqual('vxne9ec45vepnryghv6vq5bg02009r29');
  });
});