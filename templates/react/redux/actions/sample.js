/*
  Exports action name and function for sample action
*/
// Action name
export const SAMPLE_ACTION = 'sample';
// Action Function
export function sampleAction() {
	const payload = {
		data: {
			text: 'Sample Action Text',
		},
		status: 200,
	};
	return {
		type: SAMPLE_ACTION,
		payload: Promise.resolve(payload),
	};
}
