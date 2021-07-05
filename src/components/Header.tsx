export const Header = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between space-x-6">
      <span className="whitespace-nowrap">brady blair</span>
      <div className="w-full h-[1px] dark:bg-white bg-black" />
      <span>portfolio</span>
    </header>
  );
};

export default Header;
