import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/button';
import { useTheme } from '@/components/theme-provider';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant='outline'
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark');
			}}
			className='w-11 h-11 border-0 bg-background hover:bg-background'
		>
			<Sun className='!h-[1.375rem] !w-[1.375rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute !h-[1.375rem] !w-[1.375rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
