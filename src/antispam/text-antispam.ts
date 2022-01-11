import { Antispam } from './antispam';
import { Label } from './label';

export class Keyword {
  word: string;
}

export class HintInfo {
  /**
   * 自定义库实体
   */
  value: string;
}

export class Detail {
  keywords: Keyword[];
  hintInfo: HintInfo[];
}

export class TextAntispam extends Antispam {
  /**
   * 是否关联检测命中，true：关联检测命中，false：原文命中
   */
  isRelatedHit: boolean;

  /**
   * 命中的分类信息
   */
  labels: Label<Detail>[];
}
