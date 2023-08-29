import {PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='bd9d88e3-39f5-4726-af22-ce33007bf138'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage