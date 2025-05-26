import clsx from 'clsx';
import { type ComponentPropsWithoutRef } from 'react';

interface InputComponentProps extends ComponentPropsWithoutRef<'textarea'> {
	showLimitWarning: boolean;
	limitValue: number;
}

const InputComponent: React.FC<InputComponentProps> = ({
	showLimitWarning,
	limitValue,
	className,
	...props
}) => {
	const inputClasses = clsx(
		'w-full bg-[#f2f2f7] dark:bg-[#2a2b37] p-[1.125rem] h-52 text-xl',
		'border rounded-xl outline-none resize-none',
		'dark:text-[#e4e4ef] text-[#2a2b37]',
		'placeholder:text-[#2a2b37] dark:placeholder:text-[#e4e4ef] placeholder:opacity-40',
		'border-[#e4e4ef] dark:border-[#404254]',
		'focus-visible:outline-[#8459b4ff] focus-visible:outline-1 focus-visible:shadow-default',
		{
			'border-red-500 dark:border-red-500': showLimitWarning,
			'focus-visible:outline-transparent': showLimitWarning,
			'focus-visible:shadow-none': showLimitWarning,
		},
		className
	);

	return (
		<>
			<textarea
				{...props}
				className={inputClasses}
			></textarea>

			{showLimitWarning && (
				<p className='text-red-500 text-sm mt-1'>
					Character limit reached ({limitValue} characters)
				</p>
			)}
		</>
	);
};

export default InputComponent;
