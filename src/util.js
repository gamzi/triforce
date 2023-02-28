import {useEffect, useState, useMemo} from 'react';

export function useIsInViewport(ref, rootMargin = '-150px') {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
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
        observer.observe(ref.current);
    
        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);
  
    return isIntersecting;
}