export const FolderSVG = (): JSX.Element => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="9.06836" width="35" height="25.4317" rx="1.5" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="5"
        width="17"
        height="4"
      >
        <rect x="3" y="5" width="17" height="4" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <path d="M7.64169 5.5H15.9059C16.3685 5.5 16.8052 5.71342 17.0894 6.07838L19.6486 9.36473C20.0706 9.90667 20.0706 10.666 19.6486 11.208L17.0894 14.4943C16.8052 14.8593 16.3685 15.0727 15.9059 15.0727H7.64169C7.21604 15.0727 6.81043 14.8918 6.52594 14.5752L3.57303 11.2889C3.06069 10.7187 3.06069 9.85398 3.57302 9.2838L6.52594 5.99745C6.81043 5.68084 7.21604 5.5 7.64169 5.5Z" />
      </g>
    </svg>
  );
};

export default FolderSVG;
