import {useEffect} from 'react';

//ESLint rule "react-hooks/exhaustive-deps" will always fail on empty dependency lists
export const useMountEffect = (fun) => useEffect(fun, [])