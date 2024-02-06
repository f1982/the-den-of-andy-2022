import styles from './GlitchText.module.css'

const GlitchText = ({ text }: { text: string }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.glitch} data-text={text}>
      {text}
    </h1>
  </div>
)

export default GlitchText
