import { useState } from "react";
import styles from "./TagInput.module.css"
import Tag from "./Tag/Tag";

export default function TagInput () {
    var [tags, setTags] = useState<Array<string>>([])
    var [ inputValue, setInputValue ] = useState("");
    return (
        <div className={styles.container}>
            {tags.map((tag, i) => (
                <Tag onXClick={handleClearTag} key={i} text={tag}></Tag>
            ))}
            <input 
                className={styles.input}
                onChange={handleInputChange} 
                value={inputValue} 
                type="text" 
                onKeyDown={handleKeydown}
            />
        </div>
    );

    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleKeydown (event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.code === "Enter") {
            setTags([...tags, inputValue]);
            setInputValue("");
        }
    }

    function handleClearTag (tagText: string) {
        var filteredTags = tags.filter(val => val !== tagText);
        setTags(filteredTags);
    }
}