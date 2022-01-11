import { Antispam } from './antispam';
import { Label } from './label';

export class FrontSegment {
  /**
   * 命中断句前20s的语音识别内容
   */
  content: string;

  /**
   * 命中断句前20s的音频url，可解析进行回放
   */
  url: string;
}

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

export class ImageTagInfo {
  /**
   * hinInfo中可返回的图片中包含的可识别内容
   */
  tagName: string;

  /**
   * tagName对应的分组名称，用于对tageName的解释
   */
  tagGroup: string;
}

export class Detail {
  keywords: Keyword[];
  hintInfo: HintInfo[];
  imageTagInfo?: ImageTagInfo[];
}

export class Audio {
  /**
   * 检测结果，0：通过，1：嫌疑，2：不通过
   */
  action: number;

  /**
   * 音频翻译结果，2：检测中，3：检测完成，4：检测失败
   */
  asrStatus: number;

  /**
   * 音频翻译检测失败原因，1：文件下载失败，2：音频流不存在，3：解析失败，4：文件格式错误
   */
  asrResult: number;

  /**
   * 检测命中内容返回
   */
  content: string;

  /**
   * 需要开启返回直播语音片段播放地址，请联系易盾策略经理，如未开启则不返回url
   */
  url: string;

  /**
   * 分类信息详细数据
   */
  segments: Label<Detail>[];

  /**
   * 关联证据信息，异常/嫌疑断句命中时返回，命中断句前20s的证据信息，包含前20s的音频语音识别内容及对应url，通过时数据为空
   */
  frontSegment: FrontSegment[];
}

export class Picture {
  backPics: Record<'url', string>;
  frontPics: Record<'url', string>;
  url: string;
  startTime: number;
  endTime: number;
  censorSource: number;
}

export class Video {
  pictures: Picture;
  labels: Label<Detail>[];
}

export class Evidences {
  audio: Audio;
  video: Video;
}

export class VideosolutionAntispam extends Antispam {
  /**
   * 直播时长字段
   */
  duration: number;

  /**
   *
   */
  evidences: Evidences;
}
