import {useEffect, useState, useMemo, useRef} from 'react';

export function useIsInViewport(ref, rootMargin = '-150px') {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useRef(null);

    observer.current = useMemo(
        () =>
            new IntersectionObserver(
                ([entry], o) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(entry.isIntersecting);
                        o.disconnect();
                    }
                },
                {
                    rootMargin: rootMargin //offset before element is recognized as entering the view
                }
            ),
        [rootMargin],
    );
  
    useEffect(() => {
        observer.current.observe(ref.current);
    
        return () => {
            observer.current.disconnect();
        };
    }, [ref, observer]);
  
    return isIntersecting;
}

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};