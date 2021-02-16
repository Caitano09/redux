import PropTypes from 'prop-types'
const Ola = props =>{
    return(
        <span>Ola {props.name}</span>
    )
}

Ola.propTypes = {
    name: PropTypes.string.isRequired
}

Ola.defaultProps ={
    name: 'Zé Ninguém'
}

export default Ola