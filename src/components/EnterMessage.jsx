import PropTypes from 'prop-typess'
import { useState } from 'react'

export const EnterMessage = ({onSend}) => {
    const [message, setMessage] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        onSend(message)
        setMessage('')
    }

    return (
        <form onSubmit={handleSend}>
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <input type="submit" value='Send' />
        </form>
    )

}

EnterMessage.propTypes = {
    onSend: PropTypes.func.isRequired
}