import { connectRouter } from 'connected-react-router'
import { localizeReducer } from 'react-localize-redux'

import availableAccounts from '../../reducers/available-accounts'
import account from '../../reducers/account'
import transactions from '../../reducers/transactions'
import sign from '../../reducers/sign'
import recoveryMethods from '../../reducers/recoveryMethods'
import ledger from '../../reducers/ledger'
import staking from '../../reducers/staking'
import status from '../../reducers/status'
import flowLimitation from '../../reducers/flowLimitation'

export default (history) => ({
    localize: localizeReducer,
    router: connectRouter(history),

    // to be removed after redux refactor finish
    availableAccounts,
    account,
    transactions,
    sign,
    recoveryMethods,
    ledger,
    staking,
    status,
    flowLimitation,
})
