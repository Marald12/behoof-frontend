export function formatPrice(num: number): string {
	return num.toLocaleString('ru-RU').replace(/,/g, ' ')
}
