// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import '@fontsource/dm-sans';
import { ThemeProvider } from '@/components/theme-provider';
import TextAnalyzerPage from './text-analyzer-page';

function App() {
	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'
		>
			<TextAnalyzerPage />
		</ThemeProvider>
	);
}

export default App;
