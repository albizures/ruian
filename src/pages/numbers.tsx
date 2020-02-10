import React from 'react';
import { convert } from 'number-to-words-ru';
import Layout from '../components/Layout';

const getNumberWords = (num: number) => {
	const hasDecimals = String(num).split('.').length > 1;
	return convert(num, {
		showNumberParts: {
			fractional: hasDecimals,
		},
		convertNumbertToWords: {
			integer: true,
			fractional: true,
		},
		currency: 'number',
	});
};

const trueOrFalse = () => Math.random() < 0.5;

const getRandomNumber = (min = 0, max = 100, decimals = true) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const widthDecimals = decimals || trueOrFalse();
	const num = Math.random() * (max - min + 1);

	if (widthDecimals) {
		return Number((num + min).toFixed(getRandomNumber(0, 4, false)));
	}

	return Math.floor(num) + min;
};
const defaultNumber = getRandomNumber();

const Numbers: React.FC = () => {
	const [num, setNumber] = React.useState(defaultNumber);
	const voiceRef = React.useRef<SpeechSynthesisVoice>();
	const onPlay = () => {
		const numberInWords = getNumberWords(num);
		const speech = new SpeechSynthesisUtterance(numberInWords);

		speech.voice = voiceRef.current;

		speechSynthesis.speak(speech);
		setNumber(getRandomNumber());
	};

	React.useEffect(() => {
		const getVoice = () => {
			return speechSynthesis.getVoices().find((voice) => {
				return voice.lang === 'ru-RU';
			});
		};

		const interval = setInterval(() => {
			const voice = getVoice();
			if (voice) {
				voiceRef.current = voice;
				clearInterval(interval);
			}
		}, 100);
	}, []);

	return (
		<Layout>
			<button onClick={onPlay}>play</button>
		</Layout>
	);
};

export default Numbers;
