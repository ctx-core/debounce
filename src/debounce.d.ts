export declare function debounce(ctx: any, ...opt_a1: debounce_opt_type[]): Promise<void>;
export interface debounce_opt_type {
    key: string;
    yes(): Promise<void>;
    no(): Promise<void>;
}
