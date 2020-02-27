import React from 'react';
import { convert } from 'number-to-words-ru';
import { useOnChange } from '../hooks';

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
		showCurrency: {
			integer: hasDecimals,
		},
		currency: 'number',
	});
};

const getRandomNumber = (min: number, max: number, withDecimals) => {
	const num = min + Math.random() * (max - min);

	if (withDecimals) {
		return Number(num.toFixed(getRandomNumber(1, 4, false)));
	}

	return Math.floor(num);
};

const defaultMin = 0;
const defaultMax = 100;
const defaultWithDecimals = false;
const defaultNumber = getRandomNumber(
	defaultMin,
	defaultMax,
	defaultWithDecimals,
);

const Numbers: React.FC = () => {
	const [withDecimals, setWithDecimals] = React.useState(defaultWithDecimals);
	const [max, setMax] = React.useState(defaultMax);
	const [min, setMin] = React.useState(defaultMin);
	const [num, setNumber] = React.useState(defaultNumber);
	const voiceRef = React.useRef<SpeechSynthesisVoice>();
	const onPlay = () => {
		const numberInWords = getNumberWords(num);
		console.log(num, numberInWords);

		const speech = new SpeechSynthesisUtterance(numberInWords);

		speech.voice = voiceRef.current;

		speechSynthesis.speak(speech);
		setNumber(getRandomNumber(min, max, withDecimals));
	};

	const onChangeMax = useOnChange(setMax);
	const onChangeMin = useOnChange(setMin);
	const onChangeWithDecimals = useOnChange(setWithDecimals);

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
		<>
			<button onClick={onPlay}>play</button>
			<div>
				<label htmlFor="decimals">decimals:</label>
				<input
					type="checkbox"
					id="decimals"
					checked={withDecimals}
					onChange={onChangeWithDecimals}
				/>
			</div>
			<div>
				<label htmlFor="min">min:</label>
				<input type="number" id="min" value={min} onChange={onChangeMin} />
			</div>
			<div>
				<label htmlFor="max">max:</label>
				<input type="number" id="max" value={max} onChange={onChangeMax} />
			</div>
		</>
	);
};

export default Numbers;
