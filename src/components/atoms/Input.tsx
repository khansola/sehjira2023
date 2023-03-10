import styles from "./Input.module.css";

type props = {
  title: string;
  placeholder: string;
  type: string;
};

export const Input = ({ title, placeholder, type }: props) => {
  return (
    <>
      <p className={`${styles.inputTitle}`}>{title}</p>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </>
  );
};
