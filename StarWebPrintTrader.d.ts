declare class StarWebPrintTrader {
  constructor(args?: {
    url?: string;
    checkedblock?: boolean;
    papertype?: 'normal' | 'black_mark' | 'black_mark_and_detect_at_power_on';
    timeout?: number;
    holdprint_timeout?: number;
  });

  sendMessage(args: {
    url?: string;
    checkedblock?: boolean;
    request: string;
    papertype?:
      | 'normal'
      | 'black_mark'
      | 'black_mark_and_detect_at_power_on'
      | 'gap'
      | 'gap_and_detect_at_power_on';
  });
  isCoverOpen(args: { traderStatus: string }): boolean;
  isOffLine(args: { traderStatus: string }): boolean;
  isCompulsionSwitchClose(args: { traderStatus: string }): boolean;
  isEtbCommandExecute(args: { traderStatus: string }): boolean;
  isHighTemperatureStop(args: { traderStatus: string }): boolean;
  isNonRecoverableError(args: { traderStatus: string }): boolean;
  isAutoCutterError(args: { traderStatus: string }): boolean;
  isBlackMarkError(args: { traderStatus: string }): boolean;
  isPaperEnd(args: { traderStatus: string }): boolean;
  isPaperNearEnd(args: { traderStatus: string }): boolean;
  isPaperPresent(args: { traderStatus: string }): boolean;
  isRollPositionError(args: { traderStatus: string }): boolean;
  extractionEtbCounter(args: { traderStatus: string }): number;

  onReceive: (response: {
    traderSuccess: boolean;
    traderCode: 0 | 1100 | 2001;
    traderStatus: string;
    status: number;
    responseText: string;
  }) => void;
  onError: (response: { status: number; responseText: string }) => void;

  timeout: number;
  holdprint_timeout: number;
}
