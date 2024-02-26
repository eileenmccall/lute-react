import { Paragraph, StructuredElements } from "@/interfaces/StructuredElements";
import TextItem from "@/interfaces/TextItem";
import { useMemo, useState } from "react";
import styles from "./TextRenderer.module.css";

interface TextRendererProps {
    elementsArr: Array<TextItem>
}

export default function TextRenderer ({elementsArr}: {elementsArr: Array<TextItem>}) {

    // store default values in-memory to avoid having to reset them manually later
    var defaultText = useMemo(() => setHighlightedProperty(false), [ elementsArr ]);
    var [ textElementsState, setTextElementsState ] = useState<Array<TextItem>>(defaultText);
    
    var [ highlighting, setHighlighting ] = useState<boolean>(false);
    var [ highlightStart, setHighlightStart ] = useState<number | null>(null);
    var [ highlightEnd, setHighlightEnd ] = useState<number | null>(null);

    return (
        <section onMouseDown={(e) => console.log(e.target)}>
            { generateNestedArray(textElementsState).map(function (paragraph, i) {
                    return <p key={i}>
                        { paragraph.map(function (sentence, i) {
                            return <span key={i}>
                                { sentence.map(function (element, i) {
                                    return <span
                                        key={i} 
                                        style={{
                                            backgroundColor: element.highlighted ? "yellow" : "transparent"
                                        }}
                                        className={styles.textSpan}
                                        onMouseDown={() => handleMouseDown(element.order - 1)}
                                        onMouseUp={handleMouseUp}
                                        onMouseEnter={() => handleMouseEnter(element.order - 1)}
                                    >{element.text}</span>
                                })}
                            </span>
                        })}
                    </p>
                })}
        </section>
    );

    function setHighlightedProperty (value: boolean): Array<TextItem> {
        return elementsArr.map(function (textItem) {
            return {
                ...textItem,
                highlighted: value
            };
        })
    }

    function generateNestedArray (els: Array<TextItem>): StructuredElements {
        return els.reduce(function (acc: StructuredElements, cur) {
            var { paragraphId, sentenceId } = cur;
            paragraphId--;
            sentenceId--;
            if (acc[paragraphId]) {
                if (acc[paragraphId][sentenceId]) {
                    acc[paragraphId][sentenceId].push(cur);
                } else {
                    acc[paragraphId].push([cur]);
                }
            } else {
                acc.push([[cur]]);
            }
    
            return acc;
        }, []);
    }

    function handleMouseDown (index: number) {
        setHighlighting(true);
        if (defaultText[index].text !== " ") {
            setHighlightStart(index);
            setHighlightEnd(index);
            highlightRange(index, index);
        }
    }

    function handleMouseUp () {
        if (!highlighting) return;
        setHighlightStart(null);
        setHighlightEnd(null);
        setHighlighting(false);
        getHighlighted();
    }

    function handleMouseEnter (index: number) {
        if (!highlighting) return;

        if (defaultText[index].text === " ") return;

        if (highlightStart === null) {
            setHighlightStart(index);
        };

        setHighlightEnd(index);
        {
            let [ rangeStart, rangeEnd ] = [ highlightStart === null ? index : highlightStart, index ].sort();
            highlightRange(rangeStart, rangeEnd);
        }
    }

    function highlightRange (startIndex: number, endIndex: number) {
        var before = defaultText.slice(0, startIndex);
        var range = defaultText.slice(startIndex, endIndex + 1).map((item) => ({ ...item, highlighted: true }));
        var after = defaultText.slice(endIndex + 1, defaultText.length);

        setTextElementsState([
            ...before,
            ...range,
            ...after
        ]);
    }

    function getHighlighted () {
        if (highlightStart !== null && highlightEnd !== null) {
            let [ rangeStart, rangeEnd ] = [highlightStart, highlightEnd].sort();
            var text = textElementsState.slice(rangeStart, rangeEnd + 1).reduce((acc, cur) => {
                return `${acc}${cur.text}`;
            }, "")
            console.log(text);
        }
    }
}

