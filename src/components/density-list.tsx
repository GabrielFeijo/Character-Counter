interface DensityListComponentProps {
	value: number;
	label: string;
	percentage: number;
}

const DensityListComponent: React.FC<DensityListComponentProps> = ({
	value,
	label,
	percentage,
}) => {
	return (
		<div className='flex items-center gap-4 w-full my-3'>
			<span className='font-semibold dark:text-[#e4e4ef]'>{label}</span>

			<div className='flex-1 relative'>
				<div className='w-full h-3 rounded-full overflow-hidden bg-[#F2F2F7] dark:bg-[#21222C]'>
					<div
						className='h-3 transition-all duration-700 ease-out bg-[#D3A0FA]'
						style={{
							width: `${percentage}%`,
						}}
					/>
				</div>
			</div>

			<div className='text-sm dark:text-[#e4e4ef] text-right'>
				<span className='font-medium'>{value}</span>
				<span className='ml-1'>({percentage.toFixed(2)}%)</span>
			</div>
		</div>
	);
};

export default DensityListComponent;
