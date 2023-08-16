import {PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='95ec8697-56dd-42b0-84dd-7f5af65f4500'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage