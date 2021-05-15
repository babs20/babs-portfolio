export default function TopNav() {
  return (
    <nav className='w-full h-20  text-white font-roboto p-4 flex items-center justify-center'>
      <h1 className='absolute left-20 font-bold italic text-2xl'>
        brady blair
      </h1>
      <div>
        <a href='/' className='mx-4 my-1 pb-2 hover:border-b border-white'>
          About Me
        </a>
        <a href='/' className='mx-4 my-1 pb-2 hover:border-b border-white'>
          Projects
        </a>
        <a href='/' className='mx-4 my-1 pb-2 hover:border-b border-white'>
          Goals
        </a>
        <a href='/' className='mx-4 my-1 pb-2 hover:border-b border-white'>
          Contact
        </a>
      </div>
    </nav>
  );
}
