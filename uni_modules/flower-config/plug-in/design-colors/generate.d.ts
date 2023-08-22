interface Opts {
    theme?: 'dark' | 'default' | 'light';
    backgroundColor?: string;
}
export default function generate(color: string, opts?: Opts): string[];
