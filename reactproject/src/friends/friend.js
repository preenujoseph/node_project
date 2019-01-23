import React from 'react';
import FriendCard from './friendcard';
import axios from 'axios';

class FriendComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            friendState:[]
        }
    }
    componentWillMount(){
        this.getRemoteData()
    }
    getRemoteData() {
        axios.get("http://localhost:1234/all").then((response) => {
            console.log(response.data)
            console.log("Before")
            console.log(this.state.friendState)
            this.setState(
                {
                    friendState: response.data

                }
            )
            console.log("After")
            console.log(this.state.friendState)
        })
    }
    displayFriendCard() {
        return this.state.friendState.map((onefriend) => {
            return (
                <FriendCard key={onefriend.id}
                    title={onefriend.title}
                    desc={onefriend.description}
                    pic={onefriend.image}
                    link={onefriend.link}
                ></FriendCard>
            )
        })
    } 
    render() {
        return (
            <div>
                <div class="row">
                  {this.displayFriendCard()}
                    </div>
                </div>
        );
    }
}

export default FriendComponent;