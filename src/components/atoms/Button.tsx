type props = {
  children?: React.ReactNode;
  title?: string;
  caption?: string;
  action: (e: React.MouseEvent) => void;
};
const Button = ({ children, title, action }: props) => {
  return title === "" ? (
    <button
      onClick={(e) => {
        action(e);
      }}
    >
      {children}
    </button>
  ) : (
    <button
      className="py-2 px-5 bg-violet-700 flex items-center rounded-md font-semibold popup"
      onClick={(e) => {
        action(e);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
