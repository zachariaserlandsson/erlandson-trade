import React from 'react'
import EtText from '../../EtText.jsx'

export const TextWithMargin = ({ text }) => <EtText style={{ margin: '1em 0 0 0' }}>{text}</EtText>

export const MaroonHeader = ({ text, style }) => (
  <EtText style={{ margin: '1em 0 0 0', color: '#C0392B', ...style }}>{text}</EtText>
)

export const BulletList = ({ bulletPoints, numbered, startFrom }) => {
  const ListComponent = ({ children, ...rest }) =>
    numbered ? (
      <ol start={startFrom || 1} {...rest}>
        {children}
      </ol>
    ) : (
      <ul {...rest}>{children}</ul>
    )
  return (
    <ListComponent style={{ paddingLeft: '1.5em' }}>
      {bulletPoints.map((bulletPoint, index) => {
        return (
          <li key={index}>
            <EtText>{bulletPoint}</EtText>
          </li>
        )
      })}
    </ListComponent>
  )
}
