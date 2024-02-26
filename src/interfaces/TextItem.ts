export default interface TextItem {
    wid: number;
    order: number;
    paragraphId: number;
    sentenceId: number;
    text: string;
    highlighted?: boolean;
    status?: 0 | 1 | 2 | 3 | 4 | 5;
}