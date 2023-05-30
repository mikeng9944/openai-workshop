import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the market capitalization and shareholding distribution of HKEX as of December 31, 2022?",
        value: "What is the market capitalization and shareholding distribution of HKEX as of December 31, 2022?"
    },
    {
        text: "What are the core top line and bottom line measures of HKEX's financial strength?",
        value: "What are the core top line and bottom line measures of HKEX's financial strength?"
    },
    {
        text: "How does HKEX ensure reliable market operations and reinforce Hong Kong's position as a leading IPO venue?",
        value: "How does HKEX ensure reliable market operations and reinforce Hong Kong's position as a leading IPO venue?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
