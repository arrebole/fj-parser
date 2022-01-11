import { Antispam } from './antispam';
import { Label } from './label';

export class Keyword {
  word: string;
}

export class HintInfo {
  /**
   * 图片中包含的可识别内容
   */
  value: string;

  /**
   * value对应的分组名称，用于对value的解释
   */
  group: string;
}

export class Detail {
  keywords: Keyword[];
  hintInfo: HintInfo[];
}

export class ImageAntispam extends Antispam {
  /**
   * 检测状态：0 未开始、1检测中、2检测成功、3检测失败
   */
  status: number;

  /**
   * 检测失败原因，当status为3（检测失败）时返回：610 图片下载失败、620 图片格式错误、630 检测成功、630 其他
   */
  failureReason?: number;

  labels: Label<Detail>[];
}
