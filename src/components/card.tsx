interface ICardComponentProps {
	label: string;
	count: string;
	color: string;
	imageSrc: string;
}

const CardComponent: React.FC<ICardComponentProps> = ({
	color,
	imageSrc,
	label,
	count,
}) => {
	return (
		<div
			className='h-32 rounded-xl p-3 w-full flex flex-col justify-center'
			style={{
				backgroundColor: color,
				backgroundImage: `url('./src/assets/${imageSrc}')`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '110%',
			}}
		>
			<h2 className='text-[4rem] font-bold leading-[100%] tracking-[-1px]'>
				{count}
			</h2>
			<h3 className='text-xl font-normal tracking-[-.6px] leading-[160%]'>
				{label}
			</h3>
		</div>
	);
};

export default CardComponent;
