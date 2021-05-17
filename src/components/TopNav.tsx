export default function TopNav() {
  return (
    <nav className='flex items-center justify-center w-full h-20 p-4 text-[#6B7385]  font-roboto'>
      <h1 className='absolute text-2xl italic font-bold left-20'>
        brady blair
      </h1>
      <div>
        <a href='/' className='pb-2 mx-4 my-1 border-[#6B7385] hover:border-b'>
          About Me
        </a>
        <a href='/' className='pb-2 mx-4 my-1 border-[#6B7385] hover:border-b'>
          Projects
        </a>
        <a href='/' className='pb-2 mx-4 my-1 border-[#6B7385] hover:border-b'>
          Goals
        </a>
        <a href='/' className='pb-2 mx-4 my-1 border-[#6B7385] hover:border-b'>
          Contact
        </a>
      </div>
    </nav>
  );
}
