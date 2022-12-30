import { useEffect, useRef } from 'react';

export default function useClosableRef<T>(isOpen: boolean, onClose: (flag: boolean) => void, statusTerm: string) {

    const ref = useRef<T & HTMLElement>(null);

    useEffect(() => {
    
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Element;
            if (ref.current && !ref.current.contains(e.target as Node) && !target.classList.contains('menu-block__item-span') && !target.classList.contains('menu-block__item-img') && !target.classList.contains('menu-block__parentIcon')  && !target.classList.contains('menu-block__icons') && (statusTerm === '') ) {
                onClose(false);
            }
        };
        const handleClickEsc = (e: KeyboardEvent) => {
            if(e.code === 'Escape') {
                onClose(false);
            }
        }
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('keydown', handleClickEsc);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleClickEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, statusTerm]);
    return {
        ref,
    };
}
