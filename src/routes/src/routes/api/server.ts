import type { RequestHandler } from '@sveltejs/kit';
import { parse } from 'querystring';

const calculateExpression = (expression: string) => {
	// Implement your own expression calculation logic here
	// For simplicity, let's say it just evaluates addition
	const parts = expression.split('+');
	if (parts.length === 2) {
		const num1 = parseFloat(parts[0]);
		const num2 = parseFloat(parts[1]);
		if (!isNaN(num1) && !isNaN(num2)) {
			return num1 + num2;
		}
	}
	return 'Invalid expression';
};

export const get: RequestHandler = async ({ query }) => {
	const expression = parse(query.toString()).expression;
	const result = calculateExpression(expression);
	return {
		body: JSON.stringify({ result })
	};
};
