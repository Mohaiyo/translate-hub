export type VolcanoTranslateResData = {
    TranslationList: [
        {
            Translation: string;
            DetectedSourceLanguage: string;
        }
    ];
    ResponseMetadata: {
        RequestId: string;
        Action: 'TranslateText';
        Version: string;
        Service: 'translate';
        Region: 'cn-north-1';
        Error: {
            Code: string;
            Message: string;
        } | null;
    };
};
export declare function doVolcanoTranslate(text: string, target: string): Promise<VolcanoTranslateResData>;
//# sourceMappingURL=index.d.ts.map