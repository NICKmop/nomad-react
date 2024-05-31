import {useState} from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
    const [con, setCon] = useState(0);
    const onCon = () => setCon((item) => item + 1);

    return <button onClick={onCon} className={styles.btn}>{con}</button>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}

export default Button;