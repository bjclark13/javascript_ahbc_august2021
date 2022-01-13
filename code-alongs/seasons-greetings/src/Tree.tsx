import Level from './Level';
import './Tree.css';
import Root from './Root';
function Tree() {
    return (
        <div className='tree'>
            <Level level={1} />
            <Level level={2} />
            <Level level={3} />
        
            <Root />
        </div>
    )
}

export default Tree;