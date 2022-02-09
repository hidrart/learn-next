import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/layout.module.css';

export default function Layout({ children }) {
	return (
		<div className='min-h-screen w-screen bg-slate-50'>
			<div className='container mx-auto pt-6'>
				<nav
					className='relative flex items-center justify-between sm:h-10 lg:justify-start'
					aria-label='Global'>
					<div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
						<div className='flex w-full items-center justify-between md:w-auto'>
							<a href='#'>
								<Image src='/images/avatar.png' alt='image' height={48} width={48}></Image>
								<span className='sr-only'>Workflow</span>
							</a>
							<div className='-mr-2 flex items-center md:hidden'>
								<button
									type='button'
									className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
									aria-expanded='false'>
									<span className='sr-only'>Open main menu</span>
								</button>
							</div>
						</div>
					</div>
					<div className='hidden w-full justify-end md:ml-10 md:flex md:space-x-8 md:pr-4'>
						<Link href='/' passHref>
							<a className='font-medium text-gray-500 hover:text-gray-900'>Home</a>
						</Link>

						<Link href='/post/first-post' passHref>
							<a className='font-medium text-gray-500 hover:text-gray-900'>Post</a>
						</Link>

						<a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
							Company
						</a>

						<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
							Log in
						</a>
					</div>
				</nav>
				{children}
			</div><footer className={styles.footer}>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						Powered by
						<span className={styles.logo}>
							<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
						</span>
					</a>
				</footer>
		</div>
	);
}
