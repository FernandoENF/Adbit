import React from 'react'
import moment from 'moment'

export default function LinkItem (props){
      var ndata = moment(props.data).format('DD-MM-YYYY')
      return (
        <tr>
            <td>{props.id}</td>
            <td><a href='{process.env.REACT_APP_ROOT_PATH}/{props.uri}' target="">{process.env.REACT_APP_ROOT_PATH}/{props.uri}</a></td>
            <td>0</td>
            <td>R$ 0</td>
            <td>{ndata}</td>
        </tr>
      );
    }