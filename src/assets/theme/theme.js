import Styled, { css } from 'styled-components'

const theme = {
    colors: {
        primary: '#2887b2',
    },
    mixins: {
        flexMixin: (orientation, wrap, justify, align) => {
            return css`
                display: flex;
                flex-flow: ${orientation} ${wrap};
                justify-content: ${justify ? justify : 'center'};
                align-items: ${align ? align : 'center'};
            `
        },
        padding: (type = 'page') => {
            switch (type) {
                case 'page':
                    return css`
                        padding: 0rem 2rem;

                        @media (max-width: 700) {
                            padding: 0rem 1rem;
                        }

                        @media (max-width: 500) {
                            padding: 0rem 0.75rem;
                        }

                        @media (max-width: 360) {
                            padding: 0rem 0.5rem;
                        }
                    `
                default:
                    return null
            }
        },
    },
}

export default theme
