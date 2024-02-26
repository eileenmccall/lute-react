import NavBar from "../components/NavBar/NavBar";
import StatusBars from "../components/StatusBars/StatusBars";
import styles from "./Dashboard.module.css"

export default function Dashboard() {
    return (
        <main className={styles.main}>
            <NavBar />
            <section>
                <div>
                    <div>
                        Show <select><option>10</option> <option>25</option> <option>50</option></select> entries
                    </div>
                    <div>
                        Search: <input type="text" />
                    </div>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Title</th>
                            <th className={styles.th}>Language</th>
                            <th className={styles.th}>Tags</th>
                            <th className={styles.th}>Word Count</th>
                            <th className={styles.th}>Statuses</th>
                            <th className={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.bodyRow}>
                            <td className={styles.td}>A' Chatrion' òg (Young Catherine)</td>
                            <td className={styles.td}>Scottish Gaelic</td>
                            <td className={styles.td}>lament, song</td>
                            <td className={styles.td}>137</td>
                            <td className={styles.td}><StatusBars /></td>
                            <td className={styles.td}>Actions here</td>
                        </tr>
                        <tr className={styles.bodyRow}>
                            <td className={styles.td}>A' Chatrion' òg (Young Catherine)</td>
                            <td className={styles.td}>Scottish Gaelic</td>
                            <td className={styles.td}>lament, song</td>
                            <td className={styles.td}>137</td>
                            <td className={styles.td}><StatusBars /></td>
                            <td className={styles.td}>Actions here</td>
                        </tr>
                        <tr className={styles.bodyRow}>
                            <td className={styles.td}>A' Chatrion' òg (Young Catherine)</td>
                            <td className={styles.td}>Scottish Gaelic</td>
                            <td className={styles.td}>lament, song</td>
                            <td className={styles.td}>137</td>
                            <td className={styles.td}><StatusBars /></td>
                            <td className={styles.td}>Actions here</td>
                        </tr>
                        <tr className={styles.bodyRow}>
                            <td className={styles.td}>A' Chatrion' òg (Young Catherine)</td>
                            <td className={styles.td}>Scottish Gaelic</td>
                            <td className={styles.td}>lament, song</td>
                            <td className={styles.td}>137</td>
                            <td className={styles.td}><StatusBars /></td>
                            <td className={styles.td}>Actions here</td>
                        </tr>
                        <tr className={styles.bodyRow}>
                            <td className={styles.td}>A' Chatrion' òg (Young Catherine)</td>
                            <td className={styles.td}>Scottish Gaelic</td>
                            <td className={styles.td}>lament, song</td>
                            <td className={styles.td}>137</td>
                            <td className={styles.td}><StatusBars /></td>
                            <td className={styles.td}>Actions here</td>
                        </tr>
                        <tr className={styles.bodyRow}>
                            <td className={styles.td}>A' Chatrion' òg (Young Catherine)</td>
                            <td className={styles.td}>Scottish Gaelic</td>
                            <td className={styles.td}>lament, song</td>
                            <td className={styles.td}>137</td>
                            <td className={styles.td}><StatusBars /></td>
                            <td className={styles.td}>Actions here</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p>Showing 1 to 3 of 3 entries</p>
                    <div><a>Previous</a> <a>1</a> <a>Next</a></div>
                </div>
            </section>
        </main>
    );
}