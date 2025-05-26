import CardComponent from './card';

type MetricsSectionProps = {
	characterCount: number;
	wordCount: number;
	sentenceCount: number;
};

export function MetricsSection({
	characterCount,
	wordCount,
	sentenceCount,
}: MetricsSectionProps) {
	return (
		<section className='flex gap-4 sm:flex-nowrap flex-wrap'>
			<CardComponent
				label='Total Characters'
				count={characterCount.toString().padStart(2, '0')}
				color='#d3a0fa'
				imageSrc='pattern-character-count.svg'
			/>
			<CardComponent
				label='Word Count'
				count={wordCount.toString().padStart(2, '0')}
				color='#ff9f00'
				imageSrc='pattern-word-count.svg'
			/>
			<CardComponent
				label='Sentence Count'
				count={sentenceCount.toString().padStart(2, '0')}
				color='#fe8159'
				imageSrc='pattern-sentence-count.svg'
			/>
		</section>
	);
}
