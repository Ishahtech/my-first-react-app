import PropTypes from 'prop-types'


function Header({item, date}) {
  return (
    <>
    <header>
      <h1>{item}, today is {date} </h1>
    
    </header> 
    </>
  )
}

Header.defaultProps = {
  item: "Arike Pre-Order",
  date: 23
}

Header.propTypes ={
  name: PropTypes.string,
  date: PropTypes.number
}

export default Header
