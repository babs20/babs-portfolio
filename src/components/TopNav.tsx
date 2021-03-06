import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function TopNav(): JSX.Element {
  const [isOpen, setIsOpen] = useState<string>('initial');

  return (
    <nav
      className={classNames(
        'flex flex-col items-center w-full sm:h-20 py-4 px-8 md:px-16 xl:px-32 text-[#6B7385] transition-height duration-500 mb-8',
        { 'h-20 ease-in': isOpen !== 'open' },
        { 'h-48 ease-in': isOpen === 'open' }
      )}
    >
      <div className='flex items-center justify-between w-full'>
        <Link to='/'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Brady Blair</title>
            <circle cx='20' cy='20' r='20' fill='#6B7385' />
            <path
              d='M19.3633 21.6836C19.1211 23.7383 18.5156 25.3555 17.5469 26.5352C16.5781 27.7148 15.3047 28.2852 13.7266 28.2461C12.4766 28.2148 11.5156 27.6914 10.8438 26.6758L10.3633 28H6.87109L10 10H13.8555L12.6016 16.3633C13.4531 15.4961 14.4023 15.0703 15.4492 15.0859C16.6914 15.1016 17.6602 15.5469 18.3555 16.4219C19.0508 17.2891 19.418 18.4727 19.457 19.9727C19.4648 20.4727 19.4453 20.9609 19.3984 21.4375L19.3633 21.6836ZM15.5312 21.4492C15.5938 20.9727 15.6289 20.5195 15.6367 20.0898C15.6367 18.832 15.1875 18.1758 14.2891 18.1211C13.4922 18.0898 12.8242 18.4297 12.2852 19.1406L11.3711 24.2031C11.6133 24.8516 12.1445 25.1836 12.9648 25.1992C14.2227 25.2383 15.0156 24.418 15.3438 22.7383L15.5078 21.6953L15.5312 21.4492ZM32.582 21.6836C32.3398 23.7383 31.7344 25.3555 30.7656 26.5352C29.7969 27.7148 28.5234 28.2852 26.9453 28.2461C25.6953 28.2148 24.7344 27.6914 24.0625 26.6758L23.582 28H20.0898L23.2188 10H27.0742L25.8203 16.3633C26.6719 15.4961 27.6211 15.0703 28.668 15.0859C29.9102 15.1016 30.8789 15.5469 31.5742 16.4219C32.2695 17.2891 32.6367 18.4727 32.6758 19.9727C32.6836 20.4727 32.6641 20.9609 32.6172 21.4375L32.582 21.6836ZM28.75 21.4492C28.8125 20.9727 28.8477 20.5195 28.8555 20.0898C28.8555 18.832 28.4062 18.1758 27.5078 18.1211C26.7109 18.0898 26.043 18.4297 25.5039 19.1406L24.5898 24.2031C24.832 24.8516 25.3633 25.1836 26.1836 25.1992C27.4414 25.2383 28.2344 24.418 28.5625 22.7383L28.7266 21.6953L28.75 21.4492Z'
              fill='white'
            />
          </svg>
        </Link>
        <div className='hidden sm:block'>
          <Link
            to='/about'
            className='pb-2 mx-4 my-1 border-[#6B7385] hover:border-b'
          >
            About Me
          </Link>
          <Link
            to='/projects'
            className='pb-2 mx-4 my-1 border-[#6B7385] hover:border-b'
          >
            Projects
          </Link>
          <Link
            to='/contact'
            className='pb-2 mx-4 my-1 border-[#6B7385] hover:border-b'
          >
            Contact
          </Link>
        </div>
        <button className='sm:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-10 h-10'
            viewBox='0 0 20 20'
            fill='currentColor'
            onClick={() => setIsOpen(isOpen === 'open' ? 'closed' : 'open')}
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-full mt-4 -ml-2 space-y-2 sm:hidden ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <Link
          to='/about'
          className={classNames(
            'p-2 border-[#6B7385] hover:bg-gray-100 rounded-xl block opacity-0',
            { 'animation-delay animate-fall-down': isOpen === 'open' },
            {
              'animation-delay animate-fold-up opacity-100':
                isOpen === 'closed',
            }
          )}
          style={{ ['--order' as any]: isOpen === 'open' ? 1 : 3 }}
          onClick={() => setIsOpen('closed')}
        >
          About Me
        </Link>
        <Link
          to='/projects'
          className={classNames(
            'p-2 border-[#6B7385] hover:bg-gray-100 rounded-xl block opacity-0',
            { 'animation-delay animate-fall-down': isOpen === 'open' },
            {
              'animation-delay animate-fold-up opacity-100':
                isOpen === 'closed',
            }
          )}
          style={{ ['--order' as any]: 2 }}
          onClick={() => setIsOpen('closed')}
        >
          Projects
        </Link>
        <Link
          to='/contact'
          className={classNames(
            'p-2 border-[#6B7385] hover:bg-gray-100 rounded-xl block opacity-0',
            { 'animation-delay animate-fall-down': isOpen === 'open' },
            {
              'animation-delay animate-fold-up opacity-100':
                isOpen === 'closed',
            }
          )}
          style={{ ['--order' as any]: isOpen === 'open' ? 3 : 1 }}
          onClick={() => setIsOpen('closed')}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
