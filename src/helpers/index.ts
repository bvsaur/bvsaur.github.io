import { createElement } from 'react'
import * as Icons from 'react-icons/all'
interface Props {
  iconName: string
}

export const Icon = ({ iconName }: Props) => {
  // @ts-ignore: Unreachable code error
  const icon = createElement(Icons[iconName])
  return icon
}
