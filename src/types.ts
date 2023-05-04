export type PlaybookData = {
    name?: string;
    description?: string;
    host?: string;
    entry?: string;
    include_vars?: string;
    vars?: { [key: string]: any };
    flow?: any[];
}