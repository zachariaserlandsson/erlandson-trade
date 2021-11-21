import React from 'react'
import { Breadcrumb } from 'antd'
import EtText from '../EtText.jsx'

const _toCapitalCase = (s) => s.charAt(0).toUpperCase() + s.substring(1)

const CategoryBreadcrumb = ({ rootCategory, subCategory }) => {
  return rootCategory && subCategory ? (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <EtText style={{ display: 'inline', fontSize: '25px' }}>Artiklar</EtText>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <EtText style={{ display: 'inline', fontSize: '25px' }}>
            {_toCapitalCase(rootCategory)}
          </EtText>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <EtText style={{ display: 'inline', fontSize: '25px' }}>
            {_toCapitalCase(subCategory)}
          </EtText>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  ) : null
}

export default CategoryBreadcrumb
