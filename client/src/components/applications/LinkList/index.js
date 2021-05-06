import React from 'react'
import moment from 'moment'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function LinkItem(props) {
  var ndata = moment(props.data).format('DD-MM-YYYY')
  var host = process.env.REACT_APP_ROOT_PATH
  var uri = props.uri
  var link = host + '/' + uri
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <a href={'http://' + link} target="_blank">{link}</a>
        <CopyToClipboard text={'http://' + link}>
          <button type="button" className="btn btn-primary ml-3">Copiar</button>
        </CopyToClipboard>
      </td>
      <td>0</td>
      <td>R$ 0</td>
      <td>{ndata}</td>
    </tr>
  );
}