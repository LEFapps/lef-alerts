import React from 'react'
import PropTypes from 'prop-types'
import { Alert as Alertstrap } from 'reactstrap'
import { Mongo } from 'meteor/mongo'
import { withTracker } from 'meteor/react-meteor-data'
import { Translate } from 'meteor/lef:translations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import {
  faThumbsUp,
  faExclamationTriangle,
  faExclamationCircle,
  faBell,
  faInfo
} from '@fortawesome/free-solid-svg-icons'
if (fontawesome) {
  fontawesome.library.add(
    faThumbsUp,
    faExclamationTriangle,
    faExclamationCircle,
    faBell,
    faInfo
  )
}

AlertsCol = new Mongo.Collection(null)

const mapIcon = type => {
  const map = {
    success: 'thumbs-up',
    danger: 'exclamation-circle',
    warning: 'exclamation-triangle',
    info: 'info'
  }
  return map[type] || 'bell'
}

const Alert = ({ _id, type, msg, translate, icon }) => {
  const dismiss = () => AlertsCol.remove(_id)
  const getIcon = icon => (icon == 'auto' ? mapIcon(type) : icon)
  return (
    <Alertstrap isOpen toggle={dismiss} color={type} fade={false}>
      {icon ? (
        <span className={'icon'}>
          <FontAwesomeIcon icon={getIcon(icon)} />{' '}
        </span>
      ) : null}
      {translate ? <Translate _id={translate} preventInPageEdit /> : msg}
    </Alertstrap>
  )
}

Alert.propTypes = {
  _id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]),
  msg: PropTypes.string,
  translate: PropTypes.string,
  icon: PropTypes.string
}

const NewAlert = ({ msg, translate, type = 'info', icon, delay = 10000 }) => {
  const id = AlertsCol.insert({ msg, translate, type, icon })
  if (delay > 0) {
    Meteor.setTimeout(() => AlertsCol.remove(id), delay)
  }
}

const Alerts = ({ alerts }) => {
  if (alerts.length != 0) {
    return (
      <div id='alerts'>
        {alerts.map(alert => {
          return <Alert key={alert._id} {...alert} />
        })}
      </div>
    )
  } else {
    return null
  }
}

Alerts.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object).isRequired
}

AlertsContainer = withTracker(() => {
  return {
    alerts: AlertsCol.find().fetch()
  }
})(Alerts)

export { AlertsContainer as Alerts, NewAlert }
