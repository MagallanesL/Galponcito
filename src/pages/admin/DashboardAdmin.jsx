import React from 'react'
import Show from '../../components/products/show/ViewProducts'
import CreateNew from '../../components/products/create/createNew'


const DashboardAdmin = () => {
  return (
    <div>
        <Show/>
        <CreateNew/>
    </div>
  )
}

export default DashboardAdmin