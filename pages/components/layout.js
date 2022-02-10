import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/layout.module.css';

const name = 'Hidayattul Rafli';

export default function Layout({ children }) {
	return (
		<div className='min-h-screen w-screen bg-slate-50'>
			<div className='container mx-auto pt-6'>
				<nav
					className='relative mb-[10vh] flex items-center justify-between sm:h-10 lg:justify-start'
					aria-label='Global'>
					<div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
						<div className='flex w-full items-center justify-between md:w-auto'>
							<a href='#' className='flex items-center gap-2 font-semibold'>
								<span className='text-lg font-bold text-sky-500'>Hidrart</span>
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
					<div className='flex w-full items-center justify-end space-x-8'>
						<Link href='/' passHref>
							<a className='font-medium text-gray-500 hover:text-slate-500'>Home</a>
						</Link>

						<Link href='/post/first-post' passHref>
							<a className='font-medium text-gray-500 hover:text-slate-500'>Post</a>
						</Link>

						<a
							href='#'
							className='rounded-full bg-sky-500 px-3 py-1 font-medium text-white hover:bg-sky-400'>
							Log in
						</a>
					</div>
				</nav>
				{children}
			</div>
			<footer className={styles.footer}>
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
