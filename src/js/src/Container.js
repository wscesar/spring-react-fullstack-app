import react from 'react'

const style = {
    width: '1400px',
    margin: '15px auto',
    maxWidth: 'calc(100% - 30px)',
    textAlign: 'center'
}

export const Container = props => (
    <div style={style}>
        {props.children}
    </div>
)