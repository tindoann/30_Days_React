import React from 'react'

class Header extends React.Component {
  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ['searchInput']; 

    // UPdate the class array if the state is visible 
    if (this.state.searchVisible) {
      searchInputClasses.push('active'); 
    }

    return (
      <div className='header'>
        <div className='fa fa-more'></div>>

      <span className='header'>
        {this.props.title}
      </span>

      <input
        type='text'
        className={searchInputClasses.join(' ')}
        placeholder='Search ...' /> 

      <div className='fa fa-search searchIcon'></div>
    </div> 
    )

  }
}

export default Header; 

