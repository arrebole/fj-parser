export class Antispam {
  taskId: string;

  dataId: string;

  /**
   * 建议动作，0：通过，1：嫌疑，2：不通过
   */
  suggestion: number;

  /**
   * resultType 为 1 时表示异步机器
   * resultType 为 2 时表示人工审核结果推送请求
   */
  resultType: number;

  /**
   * 审核模式，0：纯机审，1：机审+部分人审，2：机审+全量人审
   */
  censorType: number;
}
