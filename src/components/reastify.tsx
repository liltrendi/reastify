import React from 'react'
import { reastify } from '..';
import { I_ReastifyProps } from '../types/components';

const Reastify: React.FC<I_ReastifyProps> = (props: I_ReastifyProps): JSX.Element => {
    const [element, setElement] = React.useState<JSX.Element>(<React.Fragment />);

    React.useEffect(() => {
        (async () => {
            const reastified = reastify(props);
            setElement(reastified);
        })();
    }, [])

    return <>{element}</>
}

export default Reastify;