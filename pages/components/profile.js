import Image from 'next/image';

export default function Profile() {
	return (
		<div className='w-full rounded-lg bg-white p-10 transition-transform ease-in-out hover:scale-[1.02] xl:w-1/4'>
			<div className='flex items-center justify-start gap-4'>
				<Image src='/images/avatar.png' alt='avatar' height={48} width={48} />
				<div className='flex flex-col'>
					<span className='text-lg font-bold'>Hidayattul Rafli</span>
					<p className='text-md font-semibold text-sky-500'>Software Engineer</p>
				</div>
			</div>
			<h1 className='mt-10 text-lg font-bold text-slate-900'>Hello World</h1>
			<p className='mt-4 leading-8 text-slate-500'>
				<span className='font-bold'>Lorem ipsum </span>dolor sit amet consectetur adipisicing elit. Rem,
				aliquid. Earum, corporis ratione modi quas commodi rerum fugit neque perferendis quibusdam minima nihil
				esse voluptatem ab ipsa.{' '}
				<span className='font-bold underline decoration-sky-500 decoration-dotted decoration-2 underline-offset-2'>
					Tempore unde fugit accusantium corrupti
				</span>
				dolores dolorem eius recusandae distinctio voluptatem dignissimos!
			</p>
		</div>
	);
}
