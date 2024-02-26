import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./NewBook.module.css";
import { useState } from "react";

export default function NewBookPage () {
    var [ language, setLanguage ] = useState("-");
    var [ title, setTitle ] = useState("");
    var [ text, setText ] = useState("");

    var [ pageWordCount, setPageWordCount ] = useState(250);
    var [ textSource, setTextSource ] = useState("");
    var [tags, setTags] = useState<Array<string>>([]);

    return (
        <main>
            <NavBar />
            <h2>Create New Book</h2>
            <form className={styles.form}>
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language">
                        <option>-</option>
                        <option>French</option>
                        <option>Scottish Gaelic</option>
                        <option>English</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <div>
                    <label htmlFor="textFile">Text File (<span className={styles.fileType}>.txt</span>, <span className={styles.fileType}>.epub</span>, <span className={styles.fileType}>.pdf</span>)</label>
                    <input id="textFile" type="file" />
                </div>
                
                <div>
                    <label htmlFor="pageWordCount">Words per page</label>
                    <input
                        type="number"
                        min={10}
                        max={1500}
                        value={pageWordCount}
                        onChange={(e) => setPageWordCount(Number(e.target.value))}
                    />
                </div>
                
                <div>
                    <label htmlFor="textSource">Text Source</label>
                    <input id="textSource" type="text" />
                </div>
                
                <div>
                    <label htmlFor="audioFile">Audio File</label>
                    <input id="audioFile" type="file"/>
                </div>
                
                <div>
                    <label htmlFor="tags">Tags</label>
                    <input id="tags" type="text" />
                </div>

                <div className={styles.buttonContainer}>
                    <Button>Save</Button>
                    <Button type="danger">Cancel</Button>
                </div>
            </form>
        </main>
    );
}