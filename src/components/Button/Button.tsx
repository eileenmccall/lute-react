import styles from "./Button.module.css"

interface ButtonProps {
    type?:  "primary" | "danger";
    onClick?: any;
    children: React.ReactNode;
};

export default function Button ({type = "primary", onClick, children}: ButtonProps) {
    return (
        <button
            className={type === "primary" ? styles.primary : styles.danger}
        >
            {children}
        </button>
    );
}