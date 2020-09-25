import { Fragment } from "react";
const Spinner = () => {
    return <Fragment>
        <img
            src="/spinner.gif"
            style={{ width: '200px', margin: '300px auto', display: 'block' }}
            alt='Loading...'
        />
    </Fragment>
}

export default Spinner;