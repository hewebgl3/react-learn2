import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Icon = () => (
  <div>
    Favorite Food: <FontAwesomeIcon icon={faCoffee} />
  </div>
)
