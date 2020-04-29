import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Typography,List,ListItemText,ListItem,Chip,Button,TextField} from "@material-ui/core";
import './Chat.css'
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";




const useStyles= makeStyles(theme=>{

    root:{

            padding : theme.spacing(3,2)
    }


})


const initState={

       topics:[{
           title:'General',
           msgs:[
               {from:'lakshan', msg:'hello machan'},
               {from:'bandara', msg:'hello brother'},
               {from:'sandaruawa', msg:'hello fucker'}
           ]},{
           title:'topic2',
           msgs:[
               {from: 'peter', msg: 'hello machan'},
               {from: 'pancake', msg: 'hello brother'},
               {from: 'marusira', msg: 'hello fucker'}
           ]}]

}





export default function Chat(props){


    const [textValue,changeValue]= useState('');
    const [allChats,setChats]= useState(initState);

    const [activeTopic,setActiveTopic]= useState(initState.topics[0])
    const [activetopictitle,setActiveTopicTitle] = useState(activeTopic.title)

    const selectTopic=(topicArray)=>{

        setActiveTopic(topicArray)

        setActiveTopicTitle(topicArray.title)

        console.log(activeTopic)

    }

    const classes=useStyles();



    return (<div>

        <ComplexNavigationNoDrawer dispatch={props.dispatch} userobject={props.userobject}/>

<Paper className={classes.root} style={{margin:'50px'}} >

    <Typography variant={"h5"} component="h3">
        Chat App
    </Typography>

    <Typography component="p">
        {activetopictitle}

    </Typography>

    <div className="flex">


        <div className="topicWindow">

            <List>
                { allChats.topics.map(topic=>{

                    return <ListItem key={topic.title} button>
                        <ListItem onClick={()=>selectTopic(topic)}>
                            <ListItemText primary={topic.title}/>
                        </ListItem>

                    </ListItem>

                })}

            </List>

        </div>


        <div className="chatWindow">

            {activeTopic.msgs.map((chat,i)=>{

                return   <div className="flex" key={i}>

                    <Chip label={chat.from} component="a" href="#chip" clickable />
                    <Typography variant="p">{chat.msg}</Typography>
                </div>

            })}

        </div>



    </div>

    <div className="flex">

        <TextField variant={"filled"} className="chatBox" label="send a Chat" style={{marginLeft:'34%'}}
        value={textValue}
        onChange={e=> changeValue(e.target.value)}>

        </TextField>
        <Button variant={"contained"} color={"primary"} >Send</Button>

    </div>

</Paper>


    </div>)
}
