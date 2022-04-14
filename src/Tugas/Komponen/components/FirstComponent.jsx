import PropTypes from "prop-types";

const FirstComponent = ({name}) => {
    return(
        <div>
            <h1>Welcome to the Component</h1>
            <h3>Hello, {name}</h3>
        </div>
    )
}

FirstComponent.defaultProps = {
    name: 'User'
}

FirstComponent.propTypes = {
    name: PropTypes.string.isRequired
}

export default FirstComponent;