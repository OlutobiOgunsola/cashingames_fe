import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Face from '../../assets/images/Face.png'

import Table from 'react-bootstrap/Table'

import { getPropertiesFromObject } from '../../utils/helpers'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Img = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    margin: 0 auto;
`

const TableItem = (props) => {
    const data = props.data
    const headers = props.headers

    const [tableError, setTableError] = useState(false)

    useEffect(() => {
        setTableError(false)
        if (
            data[0] &&
            headers &&
            Object.keys(data[0]).length !== headers.length
        ) {
            console.error('Table headers length and data length must match!')
            setTableError(true)
        }
    }, [data, headers])

    return (
        <Container id="table-container">
            {tableError && (
                <>
                    <p id="error-note">Error in table data props</p>
                </>
            )}
            {!tableError && (
                <Table hover>
                    <thead>
                        <tr>
                            {headers &&
                                headers.map((header, idx) => {
                                    return (
                                        <th className="table-header" key={idx}>
                                            {header}
                                        </th>
                                    )
                                })}
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((dat, idx) => {
                                const properties = getPropertiesFromObject(dat)
                                return (
                                    <tr key={idx} className="table-row">
                                        <td>
                                            <Img
                                                className="face-icon"
                                                src={Face}
                                                alt="profile image on leaderboard"
                                            />
                                        </td>
                                        {properties &&
                                            properties.map((property, idx) => {
                                                return (
                                                    <td key={idx}>
                                                        {property}
                                                    </td>
                                                )
                                            })}
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
            )}
        </Container>
    )
}

TableItem.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
}

export default TableItem
