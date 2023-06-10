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

const appearFromBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(75px);
    }
    
    to {
        opacity: 1;
        transform: translateY(0px);
    }

`

export { fadeIn, appearFromRight, appearFromBottom }
