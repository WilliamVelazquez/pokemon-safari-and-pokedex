import { useEffect, useRef } from 'react';

export function useVisibleOnScreen (handleIntersection, completed) {
	const observable = useRef(null);
	useEffect(() => {
		// console.log('------->', observable);
		Promise.resolve(
			typeof window.IntersectionObserver !== 'undefined'
				? window.IntersectionObserver
				: import('intersection-observer')
		).then(()=>{
			const intersectionObserver = new IntersectionObserver( entries => {
				const { isIntersecting } = entries[0];
				// console.log('isIntersecting--->', {isIntersecting});
				if (isIntersecting) {
					// console.log('Loader visible...');
					handleIntersection();
				}});
			// }, {
			// 	rootMargin: '0px 0px 100% 0px',
			// });
			intersectionObserver.observe(observable.current);
			if(completed){
				intersectionObserver.unobserve(observable.current);
				intersectionObserver.disconnect();
			}
			// return () => {
			// 	intersectionObserver.unobserve(observe.current);
			// }
		})
	}, [observable]);

	return [observable];
}