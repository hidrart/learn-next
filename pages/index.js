import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from './components/layout';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title> Create Next App </title> <meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h1 className={(styles.title, 'text-6xl font-bold')}>
					Learn{' '}
					<a href='https://nextjs.org' className='text-sky-500 underline-offset-4 hover:underline'>
						Next.js!
					</a>
				</h1>
				<p className='mb-16 mt-10 w-1/2 text-center'>
					<span className='font-bold'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Qui,
					unde rem maiores ab dolore commodi tempora molestias adipisci optio voluptate nisi numquam{' '}
					<span className='underline decoration-sky-500 decoration-dotted decoration-2 underline-offset-2'>
						officiis
					</span>{' '}
					laboriosam quas nam obcaecati sapiente reprehenderit sed?
				</p>
				<div className={styles.grid}>
					<a href='https://nextjs.org/docs' className={styles.card}>
						<h2> Documentation </h2>
						<p> Find in -depth information about Next.js features and API. </p>
					</a>
					<a href='https://nextjs.org/learn' className={styles.card}>
						<h2> Learn </h2> <p> Learn about Next.js in an interactive course with quizzes! </p>
					</a>
					<a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
						<h2> Examples </h2> <p> Discover and deploy boilerplate example Next.js projects. </p>
					</a>
					<a
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						className={styles.card}>
						<h2> Deploy </h2>
						<p> Instantly deploy your Next.js site to a public URL with Vercel. </p>
					</a>
				</div>
			</main>
		</Layout>
	);
}
