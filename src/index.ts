import { plainToClass } from 'class-transformer';
import { TextAntispam } from './antispam/text-antispam';
import { ImageAntispam } from './antispam/image-antispam';
import { VideosolutionAntispam } from './antispam/videosolution-antispam';

export class Parser {
  private pickAntispam(payload: any) {
    let antispam = null;
    if (typeof payload === 'string') {
      antispam = JSON.parse(payload).antispam;
    }
    return antispam || payload.antispam;
  }

  text(payload: any) {
    return plainToClass(TextAntispam, this.pickAntispam(payload));
  }

  image(payload: any) {
    return plainToClass(ImageAntispam, this.pickAntispam(payload));
  }

  videosolution(payload: any) {
    return plainToClass(VideosolutionAntispam, this.pickAntispam(payload));
  }
}
