import { createSotre } from 'redux';

import reducer from './reducer';

const storeFactory = () => {
    const store = createSotre(reducer)

    return store
}

export default storeFactory
