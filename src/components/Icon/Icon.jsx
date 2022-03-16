import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons';
import * as IconsBrands from '@fortawesome/free-brands-svg-icons';

const iconListSolid = Object
  .keys(IconsSolid)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => IconsSolid[icon])

library.add(...iconListSolid)
const iconListRegular = Object
  .keys(IconsRegular)
  .filter(key => key !== "far" && key !== "prefix" )
  .map(icon => IconsRegular[icon])

library.add(...iconListRegular)
const iconListBrand = Object
  .keys(IconsBrands)
  .filter(key => key !== "fab" && key !== "prefix" )
  .map(icon => IconsBrands[icon])

library.add(...iconListBrand);
const Icon = (props) => {
  return (
    <FontAwesomeIcon icon={props.icon} size={props.size}/>
  )
}

export default Icon