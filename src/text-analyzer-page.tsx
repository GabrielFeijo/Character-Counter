import { useTheme } from '@/components/theme-provider';
import HeaderComponent from './components/header';
import InputComponent from './components/input';
import OptionsComponent from './components/options';
import { useTextAnalysis } from './hooks/useTextAnalysis';
import { LetterDensitySection } from './components/letter-density-section';
import { MetricsSection } from './components/metrics-section';

function TextAnalyzerPage() {
	const { getBackgroundImage } = useTheme();

	const {
		text,
		excludeSpaces,
		characterLimit,
		limitValue,
		showLimitWarning,
		characterCount,
		wordCount,
		sentenceCount,
		readingTime,
		letterDensity,
		setExcludeSpaces,
		setCharacterLimit,
		setLimitValue,
		handleTextChange,
	} = useTextAnalysis();

	return (
		<div
			className={`py-8 min-h-screen transition-all duration-500`}
			style={{
				backgroundImage: `url(${getBackgroundImage()})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='lg:w-[990px] w-auto mx-auto lg:px-0 px-8'>
				<HeaderComponent />

				<main>
					<h1 className='lg:text-[4rem] text-5xla font-bold max-w-[33.75rem] leading-[100%] tracking-[-1px] text-center my-10 mx-auto text-[#12131a] dark:text-[#f2f2f7]'>
						Analyze your text in real-time.
					</h1>

					<InputComponent
						value={text}
						onChange={handleTextChange}
						placeholder='Start typing here (or paste your text)'
						maxLength={characterLimit ? limitValue : undefined}
						showLimitWarning={showLimitWarning}
						limitValue={limitValue}
					/>

					<OptionsComponent
						excludeSpaces={excludeSpaces}
						setExcludeSpaces={setExcludeSpaces}
						characterLimit={characterLimit}
						setCharacterLimit={setCharacterLimit}
						limitValue={limitValue}
						setLimitValue={setLimitValue}
						readingTime={readingTime}
					/>

					<MetricsSection
						characterCount={characterCount}
						wordCount={wordCount}
						sentenceCount={sentenceCount}
					/>

					<LetterDensitySection letterDensity={letterDensity} />
				</main>
			</div>
		</div>
	);
}

export default TextAnalyzerPage;
