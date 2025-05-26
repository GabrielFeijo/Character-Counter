import type { Dispatch } from 'react';
import { Checkbox } from './checkbox';

interface OptionsComponentProps {
	excludeSpaces: boolean;
	setExcludeSpaces: Dispatch<React.SetStateAction<boolean>>;
	characterLimit: boolean;
	setCharacterLimit: Dispatch<React.SetStateAction<boolean>>;
	limitValue: number;
	setLimitValue: Dispatch<React.SetStateAction<number>>;
	readingTime: string;
}

const OptionsComponent: React.FC<OptionsComponentProps> = ({
	excludeSpaces,
	setExcludeSpaces,
	characterLimit,
	setCharacterLimit,
	limitValue,
	setLimitValue,
	readingTime,
}) => {
	return (
		<section className='flex justify-between my-2 mb-10 items-center lg:flex-nowrap flex-wrap gap-4'>
			<div className='flex gap-6'>
				<div className='flex items-center space-x-2'>
					<Checkbox
						id='exclude-spaces'
						checked={excludeSpaces}
						onCheckedChange={() => setExcludeSpaces((prev) => !prev)}
					/>
					<label
						htmlFor='exclude-spaces'
						className='leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
					>
						Exclude Spaces
					</label>
				</div>
				<div className='flex items-center space-x-2'>
					<Checkbox
						id='character-limit'
						checked={characterLimit}
						onCheckedChange={() => setCharacterLimit((prev) => !prev)}
					/>
					<label
						htmlFor='character-limit'
						className='leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
					>
						Set Character Limit
					</label>

					{characterLimit && (
						<input
							type='number'
							min='1'
							value={limitValue}
							onChange={(e) => setLimitValue(Number(e.target.value))}
							className='w-20 px-2 py-1 border-0 rounded text-sm bg-[#f2f2f7] dark:bg-[#2a2b37] outline-none border-none no-spinner'
						/>
					)}
				</div>
			</div>

			<p className='font-normal'>Approx. reading time: {readingTime}</p>
		</section>
	);
};

export default OptionsComponent;
