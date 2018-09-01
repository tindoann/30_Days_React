import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="fa fa-more"></div>

        <span className="title">
          {this.props.title}
          </span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

export default Header

// Inside of our component, we can access this title prop fro the this.props
// from the this.props property in the Header class. We can replace it with
// the property passed in. 


fa fa-search searchIcon ---> Timeline.jsx
searchInput ---> Timeline.jsx

// Header ClassNames //

header
menuIcon
dashTop
dashBottom
circle
title
SearchInputClasses
fa fa-search searchIcon

// Timeline //

notificationsFrame
panel
header
title
SearchInput
fa fa-search searchIcon
content
line
item
avatar
time


















