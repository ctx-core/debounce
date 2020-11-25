export declare function debounce(ctx: any, ...opt_a1: debounce_opt_type[]): Promise<void>;
export declare function ensure__table__debounce(ctx: any): any;
export declare function assign__finish__debounce(ctx: any, key: any): any;
export declare function finish__debounce(ctx: any, key: any): any;
export interface debounce_opt_type {
    key: string;
    yes(): Promise<void>;
    no(): Promise<void>;
}
