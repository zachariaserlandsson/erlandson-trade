import React from 'react'
import { Breadcrumb } from 'antd'
import EtText from '../EtText.jsx'
import { getPath } from '../products/util'
import { Link } from 'react-router-dom'

const _toCapitalCase = (s) => s.charAt(0).toUpperCase() + s.substring(1)

const CategoryBreadcrumb = ({ rootCategory, subCategory }) => {
  return rootCategory ? (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={`/artiklar`} replace>
            <EtText style={{ display: 'inline', fontSize: '25px' }}>Artiklar</EtText>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/artiklar/${getPath({ rootCategory })}`} replace>
            <EtText style={{ display: 'inline', fontSize: '25px' }}>
              {_toCapitalCase(rootCategory)}
            </EtText>
          </Link>
        </Breadcrumb.Item>
        {subCategory && (
          <Breadcrumb.Item>
            <Link to={`/artiklar/${getPath({ rootCategory, subCategory })}`} replace>
              <EtText style={{ display: 'inline', fontSize: '25px' }}>
                {_toCapitalCase(subCategory)}
              </EtText>
            </Link>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </div>
  ) : null
}

export default CategoryBreadcrumb
