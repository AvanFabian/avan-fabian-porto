import { styles } from "../styles";

const SectionWrapper = (Component, IdName) => 
function HOC() {
    return (
        <section
            className={`${styles.padding} max-w-7xl
            mx-auto relative z-0`}
        >
            <span className="hash-span" id={IdName}>
                &nbsp;
            </span>
            <Component />
        </section>
    )
}

export default SectionWrapper