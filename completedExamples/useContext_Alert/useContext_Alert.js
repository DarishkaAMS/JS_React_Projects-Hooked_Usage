import React from 'react';
import { useAlert } from './useContext_AlertContext';

export default function Alert() {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div className={'alert alert-danger'} onClick={alert.hide}>
      {alert.text}
    </div>
  )
}