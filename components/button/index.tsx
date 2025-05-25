import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button ({ children, ...props }: ButtonProps) {
  return (
    <button  {...props} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;