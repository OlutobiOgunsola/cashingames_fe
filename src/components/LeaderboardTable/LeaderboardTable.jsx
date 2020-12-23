import React from 'react'
import PropTypes from 'prop-types'
import TableItem from '../../widgets/TableItem'

const LeaderboardTable = (props) => {
    const data = props.data

    const headers = ['POSITION', 'NAME', 'POINT']

    return <TableItem data={data} headers={headers} />
}

LeaderboardTable.propTypes = {
    data: PropTypes.array.isRequired,
}

export default LeaderboardTable
