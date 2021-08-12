import PropTypes from 'prop-types';
import { ButtonContainer } from './buttons.styles';

const Button = ({ children }) => {
    return (
        <ButtonContainer>
            <button >
                {children}
            </button>
        </ButtonContainer>
    )
}

Button.propTypes = {
    children: PropTypes.any,
}

export default Button