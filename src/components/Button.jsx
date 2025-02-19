/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/***********
 * IMPORTS *
 ***********/
import PropTypes from "prop-types"


/******************
 * PRIMARY BUTTON *
 ******************/
const PrimaryButton = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a href={href} 
      target={target} 
      className={"btn btn-primary " + classes}
      >
        {label}
        
        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

PrimaryButton.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

/*****************
 * BUTTONOUTLINE *
 *****************/

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a href={href} 
      target={target} 
      className={"btn btn-outline " + classes}
      >
        {label}
        
        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

ButtonOutline.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  PrimaryButton,
  ButtonOutline
}