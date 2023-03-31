import styles from "./TextArea.module.css";

type props = {
  title: string;
  placeholder: string;
};

export const TextArea = ({ title, placeholder }: props) => {
  return (
    <>
      <p className={styles.TextAreaTitle}>{title}</p>
      <textarea
        name={styles.TextArea}
        cols={52}
        rows={4}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};
