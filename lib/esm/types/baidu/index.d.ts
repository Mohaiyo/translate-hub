export type BaiduTranslateResData = {
    from: string;
    to: string;
    trans_result: {
        src: string;
        dst: string;
    }[];
    error_code?: string | null;
    error_msg?: string | null;
};
export declare function doBaiduTranslate(text: string, target: string): Promise<BaiduTranslateResData>;
//# sourceMappingURL=index.d.ts.map