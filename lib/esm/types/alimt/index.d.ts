import type { TranslateGeneralRequest as TranslateGeneralRequestType, TranslateGeneralResponse } from '@alicloud/alimt20181012';
export type AliMTParams = Pick<TranslateGeneralRequestType, 'sourceLanguage' | 'sourceText' | 'targetLanguage'>;
export declare function doTranslate(params: AliMTParams): Promise<TranslateGeneralResponse | void>;
//# sourceMappingURL=index.d.ts.map