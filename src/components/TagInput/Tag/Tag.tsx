
import XIcon from "@/Icons/XIcon/XIcon";
import styles from "./Tag.module.css"

interface TagProps {
    text: string;
    onXClick: (text: string) => void;
}

export default function Tag ({ text, onXClick }: TagProps) {
    return (
        <span className={styles.tag}>
            <span className={styles.text}>
                {text}
            </span>
            <span onClick={() => onXClick(text)} className={styles.clear}>
                <XIcon />
            </span>
        </span>
    );
}