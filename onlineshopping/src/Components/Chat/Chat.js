import React, {Component} from 'react';
import {Typography,TextField,Paper,List,ListItem,ListItemText,Button,Chip} from "@material-ui/core";
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import './Chat.css'
import axios from 'axios';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state={

            chats:{

                list:[{
                    title:'Customer Service',
                    msgs:[{from:'peter',msg:'hello world'},
                        {from:'john',msg:'hello peter'}

                    ]}]

            },
            activetopic:{
                title:'',
                msgs:[]
            }

        }



    }


    componentWillUnmount() {

        this.setState({
            activetopic: this.state.chats.list[0]
        })
    }

    componentDidMount() {

        setInterval(()=>{

            axios.post('http://localhost:8080/allmessages',{}).then(res=>{

                this.setState({
                    chats:res.data
                })

                this.selectTopic(res.data.list[0])
            })


        },1000)

    }


    selectTopic=(topic)=>{

        this.setState({
            activetopic:topic
        })

}

onSubmitHandle(e){

        e.preventDefault();

        const msgobj={
            from:this.props.user,
            msg:e.target.messagetext.value
        }

        this.state.activetopic.msgs.push(msgobj)

    axios.post('http://localhost:8080/sendmessage',{

        "from":this.props.user,
        "msg":e.target.messagetext.value

    }).then(res=>{

        console.log(res.data)
        }

    )


}





    render() {
        return (
            <div>

                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>

                <Paper  style={{margin:'50px'}} elevation={3}>

                    <Typography variant={"h5"} component="h3">
                        Chat App
                    </Typography>

                    <Typography component={"h6"}>
                        {this.state.activetopic.title}

                    </Typography>

                    <div className="flex">


                        <div className="topicWindow">

                            <List>
                                { this.state.chats.list.map(topic=>{

                                    return <ListItem key={topic.title} button style={{border:'1px solid lightgrey'}}>
                                        <ListItem onClick={()=>this.selectTopic(topic)}>
                                            <ListItemText primary={topic.title}/>
                                        </ListItem>

                                    </ListItem>

                                })}

                            </List>

                        </div>


                        <div className="chatWindow" style={{overflowY:'scroll'}}>

                            {this.state.activetopic.msgs.map((chat,i)=>{

                                return   <div className="flex" key={i}>

                                    <Chip label={chat.from} component="a" href="#chip" clickable style={{marginRight:'3px'}}/>:
                                    <Typography variant="caption">{chat.msg}</Typography>
                                </div>

                            })}

                        </div>



                    </div>

                    <div className="textinput">

                        <form onSubmit={(e)=>{this.onSubmitHandle(e)}}>
                            <TextField name="messagetext" variant={"filled"} className="chatBox" label="send a Chat" style={{marginLeft:'0%',width:'500px'}}
                            >

                            </TextField>
                            <Button variant={"contained"} color={"primary"} type="submit"  >Send</Button>
                        </form>

                    </div>

                </Paper>

            </div>
        );
    }
}

export default Chat;
