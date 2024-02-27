import TextItem from "@/interfaces/TextItem";
import TextRenderer from "./TextRenderer/TextRenderer";
import NavBar from "@/components/NavBar/NavBar";

export default function Read() {

    var elements: Array<TextItem> = [
        {
            wid: 1,
            order: 1,
            paragraphId: 1,
            sentenceId: 1,
            text: "Tha"
        }, {
            wid: 2,
            order: 2,
            paragraphId: 1,
            sentenceId: 1,
            text: " "
        }, {
            wid: 3,
            order: 3,
            paragraphId: 1,
            sentenceId: 1,
            text: "mi"
        }, {
            wid: 2,
            order: 4,
            paragraphId: 1,
            sentenceId: 1,
            text: " "
        }, {
            wid: 4,
            order: 5,
            paragraphId: 1,
            sentenceId: 1,
            text: "gu"
        }, {
            wid: 2,
            order: 6,
            paragraphId: 1,
            sentenceId: 1,
            text: " "
        }, {
            wid: 5,
            order: 7,
            paragraphId: 1,
            sentenceId: 2,
            text: "tapadh"
        }, {
            wid: 2,
            order: 8,
            paragraphId: 1,
            sentenceId: 2,
            text: " "
        }, {
            wid: 4,
            order: 9,
            paragraphId: 1,
            sentenceId: 2,
            text: "leat"
        }
    ];

    return (
        <>
            <NavBar />
            <TextRenderer elementsArr={elements} />
        </>
    );
}