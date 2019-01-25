import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class TravelCard extends React.Component {
    state = {}
    render() {
        return (
        <div>
            <div>
                <a href="#"><i class="fa fa-user">54</i></a><a href="#"><i class="fa fa-heart">54</i></a>
                <p><a href="#"><i class="fa fa-thumbs-up">99</i></a></p>
            </div>
            <div class="card-deck">
                <div class="card" style={{ width: '18rem', marginRight: '32px' }} >
                    <img src={`images/${this.props.image}`} class="align-self-start mr-3" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.name}</h5>
                        <p class="card-text">{this.props.description}</p>
                        <div class="card-footer">
                            <small class="text-muted">Follow/Unfollow</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default TravelCard;