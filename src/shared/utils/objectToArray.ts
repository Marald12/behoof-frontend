export function parseToCardData(obj) {
	const cards = []

	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'object' && value !== null) {
			if ('value' in value && 'russianTranslate' in value) {
				const val = Array.isArray(value.value)
					? value.value.join(', ')
					: value.value
				cards.push({
					title: value.russianTranslate,
					value: val
				})
			} else if (Array.isArray(value)) {
				value.forEach((item) => {
					if (item.russianTranslate && 'value' in item) {
						cards.push({
							title: item.russianTranslate,
							value: item.value
						})
					}
				})
			} else {
				cards.push(...parseToCardData(value)) // рекурсивно
			}
		}
	}

	return cards
}