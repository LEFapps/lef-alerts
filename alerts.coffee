import React from 'react'
import { Alert as Alertstrap } from 'reactstrap'
import { Mongo } from 'meteor/mongo'
import { withTracker } from 'meteor/react-meteor-data'
import { Translate } from "meteor/lef:translations"

AlertsCol = new Mongo.Collection null

class Alerts extends React.Component
  render: ->
    alerts = @props.alerts
    if alerts.length isnt 0
      <div id="alerts">
        {alerts.map (a) =>
          <Alert key={a._id} _id={a._id} color={a.type} msg={a.msg} translate={a.translate} />
        }
      </div>
    else
      return null

class Alert extends React.Component
  constructor: (props) ->
    super props
    @dismiss = @dismiss.bind @
  dismiss: ->
    AlertsCol.remove @props._id
  render: ->
    <Alertstrap isOpen={true} toggle={@dismiss} color={@props.color}>
      {if @props.translate
        <Translate _id={@props.translate} preventInPageEdit />
      else
        @props.msg
      }
    </Alertstrap>

NewAlert = ({msg, translate, type="info", delay=10000}) ->
  check type, Match.OneOf "success","info","warning","danger"
  id = AlertsCol.insert {msg:msg,translate:translate,type:type}
  if delay > 0
    Meteor.setTimeout =>
      AlertsCol.remove id
    , delay

AlertsContainer = withTracker( ->
  alerts: AlertsCol.find().fetch()
)(Alerts)

export { AlertsContainer as Alerts, NewAlert }