import { useState } from "react";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

export default function NavBar() {
    var [showBooksMenu, setShowBooksMenu] = useState(false);
    var [showTermsMenu, setShowTermsMenu] = useState(false);
    var [showSettingsMenu, setShowSettingsMenu] = useState(false);
    var [showBackupMenu, setShowBackupMenu] = useState(false);
    var [showAboutMenu, setShowAboutMenu] = useState(false);

    return (
        <nav className={styles.nav}>
            <h1>Lute</h1>
            <ul className={styles.navList}>
                <li className={styles.navItem}
                    onMouseEnter={handleBooksMenuHover}
                    onMouseLeave={handleBooksMenuHover}
                >
                    Books
                    <ul className={styles.submenu}
                        style={{ display: showBooksMenu ? "inline-block" : "none" }}
                    >
                        <li className={styles.submenuItem}><Link to="/book/new">Create New Book</Link></li>
                        <li className={styles.submenuItem}>Import Web Archive</li>
                        <li className={styles.submenuItem}>Book Archive</li>
                    </ul>
                </li>
                <li className={styles.navItem}
                    onMouseEnter={handleTermsMenuHover}
                    onMouseLeave={handleTermsMenuHover}
                >
                    Terms
                    <ul
                        className={styles.submenu}
                        style={{ display: showTermsMenu ? "inline-block" : "none" }}
                    >
                        <li className={styles.submenuItem}>Terms</li>
                        <li className={styles.submenuItem}>Import Terms</li>
                        <li className={styles.submenuItem}>Parent Term Mapping</li>
                        <li className={styles.submenuItem}>Term Tags</li>
                    </ul>
                </li>
                <li className={styles.navItem}>Settings</li>
                <li className={styles.navItem}>Backup</li>
                <li className={styles.navItem}>About</li>
            </ul>
        </nav>
    );

    function handleBooksMenuHover() {
        return changeDisplayOnHover(showBooksMenu, setShowBooksMenu);
    }
    function handleTermsMenuHover() {
        return changeDisplayOnHover(showTermsMenu, setShowTermsMenu);
    }
    function handleSettingsMenuHover() {
        return changeDisplayOnHover(showBooksMenu, setShowBooksMenu);
    }
    function handleBackupMenuHover() {
        return changeDisplayOnHover(showBooksMenu, setShowBooksMenu);
    }
    function handleAboutMenuHover() {
        return changeDisplayOnHover(showBooksMenu, setShowBooksMenu);
    }

    function changeDisplayOnHover(setValue: any, setFunction: any) {
        setFunction(!setValue);
    }
}