interface Props {
  projectName: string;
  projectType: string;
  role: string;
  description: string;
  repo: string;
  site?: string;
}

export const Project = ({
  projectName,
  projectType,
  description,
  role,
  repo,
  site,
}: Props): JSX.Element => {
  return (
    <article className="flex flex-col px-6 py-4 border border-black dark:border-white rounded-xl">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold">{projectName}</h1>
        <a
          href={`https://github.com/babs20/${repo}`}
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            viewBox="0 0 128 128"
            className="w-6 h-6 dark:text-white"
            fill="currentColor"
          >
            <title>GitHub Profile</title>
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              ></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </g>
          </svg>
        </a>
        {site && (
          <a href={site} rel="noreferrer noopener" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 dark:text-white"
              stroke="currentColor"
            >
              <g clip-path="url(#clip0)">
                <circle cx="12" cy="12" r="11.5" />
                <path d="M18.5 12C18.5 15.2411 17.7326 18.1509 16.5179 20.2333C15.2959 22.3281 13.6813 23.5 12 23.5C10.3187 23.5 8.70406 22.3281 7.48214 20.2333C6.26739 18.1509 5.5 15.2411 5.5 12C5.5 8.7589 6.26739 5.84909 7.48214 3.76665C8.70406 1.67194 10.3187 0.5 12 0.5C13.6813 0.5 15.2959 1.67194 16.5179 3.76665C17.7326 5.84909 18.5 8.7589 18.5 12Z" />
                <rect
                  x="0.25"
                  y="12.25"
                  width="23.5"
                  height="0.5"
                  stroke-width="0.5"
                />
                <rect
                  x="12.25"
                  y="0.75"
                  width="23.5"
                  height="0.5"
                  transform="rotate(90 12.25 0.75)"
                  stroke-width="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        )}
      </div>
      <div className="space-x-3 font-semibold">
        <span>{projectType}</span>
        <span>{role}</span>
      </div>
      <p className="text-sm dark:text-lightGray text-medGray">{description}</p>
    </article>
  );
};

export default Project;
