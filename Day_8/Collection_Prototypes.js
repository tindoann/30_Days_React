The prop-type object export a bunch of different types which we can use to define what type a component's prop should be. 

class Clock extends React.Component {

}

Clock.propTypes = {
		// key is the name of the prop
		// value is the PropType


import PropTypes form 'prop-types'

class Header extends React Component {
}

Header.propTypes = {
	title: PropTypes.string
}


Clock.propTypes = {
  basicObject: PropTypes.object,

  numbers: PropTypes.objectOf(PropTypes.numbers),

  messages: PropTypes.instanceOf(Message),

  contactList: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string
  })
};

Clock.propTypes = {
  counts: PropTypes.array,
  users: PropTypes.arrayOf(PropTypes.object),
  alarmColor: PropTypes.oneOf(['red', 'blue']),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Title)
  ])
};
