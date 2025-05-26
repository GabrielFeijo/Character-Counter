import { useEffect, useMemo, useState } from 'react';

export function useTextAnalysis() {
	const [text, setText] = useState('');
	const [excludeSpaces, setExcludeSpaces] = useState(false);
	const [characterLimit, setCharacterLimit] = useState(false);
	const [limitValue, setLimitValue] = useState(1000);
	const [showLimitWarning, setShowLimitWarning] = useState(false);

	useEffect(() => {
		if (characterLimit && text.length > limitValue) {
			setShowLimitWarning(true);
		} else {
			setShowLimitWarning(false);
		}
	}, [text, characterLimit, limitValue]);

	const characterCount = useMemo(() => {
		return excludeSpaces ? text.replace(/\s/g, '').length : text.length;
	}, [text, excludeSpaces]);

	const wordCount = useMemo(() => {
		return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
	}, [text]);

	const sentenceCount = useMemo(() => {
		return text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
	}, [text]);

	const readingTime = useMemo(() => {
		const wordsPerMinute = 100;
		const minutes = wordCount / wordsPerMinute;

		if (wordCount === 0) return '0 minutes';
		if (minutes < 1) return '<1 minute';
		if (minutes < 60) return `${Math.ceil(minutes)} minutes`;

		const hours = Math.floor(minutes / 60);
		const remainingMinutes = Math.round(minutes % 60);

		if (hours === 1) {
			return remainingMinutes > 0
				? `1 hour and ${remainingMinutes} minutes`
				: '1 hour';
		}

		return remainingMinutes > 0
			? `${hours} hours and ${remainingMinutes} minutes`
			: `${hours} hours`;
	}, [wordCount]);

	const letterDensity = useMemo(() => {
		const density: Record<string, { count: number; percentage: number }> = {};
		const letters = text.toLowerCase().replace(/[^a-z]/g, '');
		const totalLetters = letters.length;

		if (totalLetters === 0) return [];

		for (const char of letters) {
			if (!density[char]) {
				density[char] = { count: 0, percentage: 0 };
			}
			density[char].count++;
		}

		Object.keys(density).forEach((char) => {
			density[char].percentage = Math.round(
				(density[char].count / totalLetters) * 100
			);
		});

		return Object.entries(density)
			.map(([char, data]) => ({ char, ...data }))
			.sort((a, b) => b.count - a.count);
	}, [text]);

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		if (characterLimit && newText.length > limitValue) return;
		setText(newText);
	};

	return {
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
	};
}
