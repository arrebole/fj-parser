export class SubLabel<T> {
  /**
   * 细分类
   */
  subLabel: string;

  /**
   * 0-1之间取值，1为置信度最高，0为置信度最低
   */
  rate: number;

  /**
   * 线索内容
   */
  details: T[];
}

export class Label<T> {
  /**
   * 命中分类，示例值：100
   */
  label: number;

  /**
   * 命中级别，0：正常，1：不确定，2：确定
   */
  level: number;

  /**
   * 置信度分数，0-1之间取值，1为置信度最高，0为置信度最低。
   * 若 level 为正常，置信度越大，说明正常的可能性越高;
   * 若 level 为不确定或确定，置信度越大，说明垃圾的可能性越高;
   */
  rate: number;

  /**
   * 细分类信息，可能包含多个
   */
  subLabels: SubLabel<T>[];
}
