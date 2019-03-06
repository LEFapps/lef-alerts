import React from 'react'
import PropTypes from 'prop-types'
import { Alert as Alertstrap } from 'reactstrap'
import { Mongo } from 'meteor/mongo'
import { withTracker } from 'meteor/react-meteor-data'
import { Translate } from 'meteor/lef:translations'

AlertsCol = new Mongo.Collection(null)

const Alert = ({ _id, type, msg, translate }) => {
  const dismiss = () => AlertsCol.remove(_id)
  return (
    <Alertstrap isOpen toggle={dismiss} color={type}>
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
  translate: PropTypes.string
}

const NewAlert = ({ msg, translate, type = 'info', delay = 10000 }) => {
  const id = AlertsCol.insert({ msg, translate, type })
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
