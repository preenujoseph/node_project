import React from 'react';
import TravelCard from './travelcard';
import axios from 'axios';

class TravelComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            travelstate: []
        }
    }
    componentWillMount() {
        this.getRemoveData()
    }
    getRemoveData() {
        axios.get("http://localhost:6789/all").then((response) => {
            console.log(response.data)
            console.log("Before")
            console.log(this.state.travelstate)
            this.setState({
                travelstate: response.data
            })
            console.log("After")
            console.log(this.state.travelstate)
        })
    }

    displayTravelCard() {
        return this.state.travelstate.map((onetravel) => {
            return (
                <TravelCard key={onetravel.id}
                    name={onetravel.name}
                    description={onetravel.description}
                    image={onetravel.image}
                ></TravelCard>
            )
        })
    }
    render() {
        return (
            <div>
                <div class="row">
                    {this.displayTravelCard()}
                </div>
            </div>
        );
    }
}
export default TravelComponent;