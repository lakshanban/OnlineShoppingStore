import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Typography,List,ListItemText,ListItem,Chip,Button,TextField} from "@material-ui/core";
import './Chat.css'
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";







const initState={

    topics:[{
        title:'General',
        msgs:[{from:'peter',msg:'hello world'},
            {from:'john',msg:'hello peter'}

        ]},{
        title:'Customer Support',
        msgs:[
            {from:'peter',msg:'hello world'},
            {from:'shawn',msg:'hello peter'},
            {from:'peter',msg:'hello shawn'},
            {from:'rihana',msg:'bye peter'}
        ]}]

}






class Chat extends Component {


    constructor(props) {
        super(props);

        this.state={
            allchats: initState,
            activetopic: initState.topics[0],
            msgtext:''
        }


        console.log(this.props.user)
    }

    selectTopic(topic){

        this.setState({
            activetopic:topic
        })

    }

    onSubmitHandle(e){

        e.preventDefault();

       let msgobj={
           from:this.props.user,
           msg:e.target.messagetext.value
       }

        console.log(msgobj)

        this.state.allchats.topics.map(topic=>{

            if(topic.title===this.state.activetopic.title){

                topic.msgs.push(msgobj);
                this.selectTopic(topic)

            }
        })


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
                                { this.state.allchats.topics.map(topic=>{

                                    return <ListItem key={topic.title} button style={{border:'1px solid lightgrey'}}>
                                        <ListItem onClick={()=>this.selectTopic(topic)}>
                                            <ListItemText primary={topic.title}/>
                                        </ListItem>

                                    </ListItem>

                                })}

                            </List>

                        </div>


                        <div className="chatWindow">

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
