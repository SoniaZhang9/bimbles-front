import React from 'react'
import Recommendations from '../components/Recommendations'
import useSWR from 'swr'
import restMethods from '../utils/RestMethods'
import AuthService from '../utils/AuthService'

function Dashboard() {
    const [refined, setRefined] = React.useState(false)

    // ----------- server call ----------
    const { data, error, isLoading } = useSWR(
        AuthService.getUserRole() === 'NORMAL'
            ? [`/item-recommendations/${AuthService.getUserId()}`, [`refined=${refined}`], AuthService.getAuthHeader()]
            : ['/item', [], AuthService.getAuthHeader()],
        ([resource, queryParams, headers]) => restMethods.invokeGET(resource, queryParams, headers)
    )

    return <Recommendations data={data} error={error} isLoading={isLoading} refined={refined} setRefined={setRefined} />
}

export default Dashboard
