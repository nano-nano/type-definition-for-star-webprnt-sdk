declare class StarWebPrintBuilder {
  constructor();

  createAlignmentElement(args?: { position?: 'left' | 'center' | 'right' }): string;
  createBarcodeElement(args: {
    symbology?:
      | 'UPCE'
      | 'UPCA'
      | 'JAN8'
      | 'JAN13'
      | 'Code39'
      | 'ITF'
      | 'Code128'
      | 'Code93'
      | 'NW7';
    width?:
      | 'width2'
      | 'width3'
      | 'width4'
      | 'width_mode1'
      | 'width_mode2'
      | 'width_mode3'
      | 'width_mode4'
      | 'width_mode5'
      | 'width_mode6'
      | 'width_mode7'
      | 'width_mode8'
      | 'width_mode9';
    height?: number;
    hri?: boolean;
    data: string;
  }): string;
  createBitImageElement(args: {
    context: Canvas;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  }): string;
  createCutPaperElement(args?: { type?: 'full' | 'partial'; feed?: boolean }): string;
  createFeedElement(args?: { line?: number; unit?: number }): string;
  createHoldPrintElement(args?: { type?: 'valid' | 'invalid' | 'default' }): string;
  createInitializationElement(args?: { reset?: boolean; print?: boolean }): string;
  createLogoElement(args?: {
    number?: number;
    width?: 'single' | 'double';
    height?: 'single' | 'double';
  }): string;
  createPdf417Element(args: {
    line?: number;
    column?: number;
    level?:
      | 'level0'
      | 'level1'
      | 'level2'
      | 'level3'
      | 'level4'
      | 'level5'
      | 'level6'
      | 'level7'
      | 'level8';
    module?: number;
    aspect?: number;
    data: string;
  }): string;
  createPeripheralElement(args?: { channel?: 1 | 2; on?: number; off?: number }): string;
  createQrCodeElement(args: {
    model?: 'model1' | 'model2';
    level?: 'level_l' | 'level_m' | 'level_q' | 'level_h';
    cell?: number;
    data: string;
  }): string;
  createRawDataElement(args: { data: string }): string;
  createRuledLineElement(args?: {
    thickness?: 'thin' | 'medium' | 'thick' | 'double_thin' | 'double_medium' | 'double_thick';
    width?: number;
  }): string;
  createSoundElement(args?: { channel?: 1 | 2; repeat?: number }): string;
  createSoundWithSettingElement(args?: {
    sound_storage_area?: 1 | 2;
    sound_number?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    volume?:
      | 'volume0'
      | 'volume1'
      | 'volume2'
      | 'volume3'
      | 'volume4'
      | 'volume5'
      | 'volume6'
      | 'volume7'
      | 'volume8'
      | 'volume9'
      | 'volume10'
      | 'volume11'
      | 'volume12'
      | 'volume13'
      | 'volume14'
      | 'volume15'
      | 'volume_off'
      | 'volume_min'
      | 'volume_max';
  }): string;
  createTextElement(args?: {
    codepage?:
      | 'utf8'
      | 'cp437'
      | 'cp737'
      | 'cp772'
      | 'cp774'
      | 'cp851'
      | 'cp852'
      | 'cp855'
      | 'cp857'
      | 'cp858'
      | 'cp860'
      | 'cp861'
      | 'cp862'
      | 'cp863'
      | 'cp864'
      | 'cp865'
      | 'cp866'
      | 'cp869'
      | 'cp874'
      | 'cp928'
      | 'cp932'
      | 'cp998'
      | 'cp999'
      | 'cp1001'
      | 'cp1250'
      | 'cp1251'
      | 'cp1252'
      | 'cp2001'
      | 'cp3001'
      | 'cp3002'
      | 'cp3011'
      | 'cp3012'
      | 'cp3021'
      | 'cp3041'
      | 'cp3840'
      | 'cp3841'
      | 'cp3843'
      | 'cp3844'
      | 'cp3845'
      | 'cp3846'
      | 'cp3847'
      | 'cp3848'
      | 'blank'
      | 'shift_jis'
      | 'gb18030'
      | 'gb2312'
      | 'big5'
      | 'korea';
    international?:
      | 'usa'
      | 'france'
      | 'germany'
      | 'uk'
      | 'denmark'
      | 'sweden'
      | 'italy'
      | 'spain'
      | 'japan'
      | 'norway'
      | 'denmark2'
      | 'spain2'
      | 'latin_america'
      | 'korea'
      | 'ireland'
      | 'legal';
    characterspace?: number;
    emphasis?: boolean;
    invert?: boolean;
    linespace?: 24 | 32;
    width?: 1 | 2 | 3 | 4 | 5 | 6;
    height?: 1 | 2 | 3 | 4 | 5 | 6;
    font?: 'font_a' | 'font_b';
    undelline?: boolean;
    binary?: boolean;
    data?: string;
  }): string;
}
