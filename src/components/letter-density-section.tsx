import { useState } from 'react';
import DensityListComponent from './density-list';

type LetterDensitySectionProps = {
	letterDensity: Array<{
		char: string;
		count: number;
		percentage: number;
	}>;
	visibleItemsLimit?: number;
};

export function LetterDensitySection({
	letterDensity,
	visibleItemsLimit = 10,
}: LetterDensitySectionProps) {
	const [showAll, setShowAll] = useState(false);

	const itemsToShow = showAll
		? letterDensity
		: letterDensity.slice(0, visibleItemsLimit);

	const hasExtraItems = letterDensity.length > visibleItemsLimit;

	return (
		<section className='dark:text-[#e4e4ef] mt-6'>
			<div className='flex justify-between items-center'>
				<h3 className='text-2xl font-semibold leading-[130%]'>
					Letter Density
				</h3>

				{hasExtraItems && (
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-sm text-[#8459b4] dark:text-[#b693ff] hover:underline focus:outline-none'
					>
						{showAll ? 'Show Less' : 'Show More'}
					</button>
				)}
			</div>

			{letterDensity.length === 0 ? (
				<p className='my-2'>
					No characters found. Start typing to see letter density.
				</p>
			) : (
				<div className='mt-4'>
					{itemsToShow.map(({ char, count, percentage }) => (
						<DensityListComponent
							key={char}
							value={count}
							percentage={percentage}
							label={char.toUpperCase()}
						/>
					))}
				</div>
			)}
		</section>
	);
}
