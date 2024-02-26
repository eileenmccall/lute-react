import TextItem from "./TextItem"

export type StructuredElements = Array<Paragraph>;

export type Paragraph = Array<Sentence>;

export type Sentence = Array<TextItem>;