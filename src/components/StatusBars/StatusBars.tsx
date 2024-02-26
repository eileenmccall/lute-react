import styles from "./StatusBars.module.css";

export default function StatusBars () {
    var total = 137;
    var newTotal = 0;
    var level1Total = 16;
    var level2Total = 7;
    var level3Total = 4;
    var level4Total = 2;
    var level5Total = 43;
    var knownTotal = 2;

    return (
        <div className={styles.barsContainer}>
            <div className={styles.new} style={{ flex: 0, display: "none" }}></div>
            <div className={styles.levelOne} style={{ flex: 22 }}></div>
            <div className={styles.levelTwo} style={{ flex: 9 }}></div>
            <div className={styles.levelThree} style={{ flex: 5 }}></div>
            <div className={styles.levelFour} style={{ flex: 3 }}></div>
            <div className={styles.levelFive} style={{ flex: 58 }}></div>
            <div className={styles.known} style={{ flex: 3 }}></div>
        </div>
    );

    function getRoundedPercentages () {

    }
}