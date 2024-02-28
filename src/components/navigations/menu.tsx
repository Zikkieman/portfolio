interface PropsType {
  onTap: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  onOpen: boolean;
}

export const MenuButton = ({ onTap, onClick, onOpen }: PropsType) => {
  const handleOpen = () => {
    onClick(!onOpen);
    onTap(!onOpen);
  };

  return (
    <>
      <div className="menu" onClick={handleOpen}>
        <div className={`${onOpen ? "bar1-active" : "bar1"}  dark:bg-white`} />
        <div className={`${onOpen ? "bar2-active" : "bar2"}  dark:bg-white`} />
        <div className={`${onOpen ? "bar3-active" : "bar3"}  dark:bg-white`} />
      </div>
    </>
  );
};
