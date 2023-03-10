import styles from "./Button.module.css";

type props = {
  title: string;
  action?: (e: React.MouseEvent) => void;
};
const ButtonContact = ({ title, action }: props) => {
  return (
    <>
      <button className={styles.Button}>{title}</button>
    </>
  );
};

export default ButtonContact;
