export default function TopNav() {
  return (
    <nav className='flex items-center justify-center w-full h-20 p-4 text-white  font-roboto'>
      <h1 className='absolute text-2xl italic font-bold left-20'>
        brady blair
      </h1>
      <div>
        <a href='/' className='pb-2 mx-4 my-1 border-white hover:border-b'>
          About Me
        </a>
        <a href='/' className='pb-2 mx-4 my-1 border-white hover:border-b'>
          Projects
        </a>
        <a href='/' className='pb-2 mx-4 my-1 border-white hover:border-b'>
          Goals
        </a>
        <a href='/' className='pb-2 mx-4 my-1 border-white hover:border-b'>
          Contact
        </a>
      </div>
    </nav>
  );
}
