import { ModeToggle } from './mode-toggle';
import { useTheme } from './theme-provider';

const HeaderComponent = () => {
	const { theme } = useTheme();

	return (
		<header className='flex justify-between items-center'>
			<img
				src={`./src/assets/logo-${theme}-theme.svg`}
				alt='Character counter logo'
			/>

			<ModeToggle />
		</header>
	);
};

export default HeaderComponent;
