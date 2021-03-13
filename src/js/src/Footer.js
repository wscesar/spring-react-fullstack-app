import { Button } from 'antd';

const style = {
    position: 'fixed',
    width: '100%',
    bottom: '0',
    left: '0',
    background: 'rgba(240, 240, 240, 0.75)',
    textAlign: 'center',
    padding: '15px',
}

export const Footer =  props => (
    <div style={style}>
        <Button onClick={() => props.handleClick()} type="primary">Add Studentt</Button>
    </div>
)
