import { keyframes } from 'styled-components'

const fadeIn = keyframes`
from {
    opacity: 0;
}

to {
    opacity: 1;
}

`

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(75px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }

`

export { fadeIn, appearFromRight }
