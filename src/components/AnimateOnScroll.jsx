import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export function AnimateOnScroll({ children, className = '', variant = 'fade-in-left' }) {
    const ref = useRef(null);

    const variants = {
        'fade-in-left': 'animate-in fade-in slide-in-from-left-16 duration-700',
        'fade-in-right': 'animate-in fade-in slide-in-from-right-16 duration-700',
        'fade-in-up': 'animate-in fade-in slide-in-from-bottom-16 duration-700',
        'fade-in': 'animate-in fade-in duration-700',
    };

    const enter = variants[variant] || variants['fade-in-left'];
    const exit = 'animate-out fade-out';

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const play = (add, remove) => {
            el.classList.remove(...remove.split(' '));
            void el.offsetWidth;
            el.classList.add(...add.split(' '));
        };

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    play(enter, exit);
                } else {
                    play(exit, enter);
                }
            },
            { threshold: 0 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [enter, exit]);

    return (
        <div
            ref={ref}
            className={`relative ${className}`}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </div>
    );
}

AnimateOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['fade-in-left', 'fade-in-right', 'fade-in-up', 'fade-in']),
};

// Optional variants for easy use
export const FadeInLeft = (props) => (
    <AnimateOnScroll variant="fade-in-left" {...props} />
);

export const FadeInRight = (props) => (
    <AnimateOnScroll variant="fade-in-right" {...props} />
);

export const FadeInUp = (props) => (
    <AnimateOnScroll variant="fade-in-up" {...props} />
);

export const FadeIn = (props) => (
    <AnimateOnScroll variant="fade-in" {...props} />
);
