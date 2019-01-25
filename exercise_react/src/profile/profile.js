import React from 'react';
class ProfileData extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <nav class="navbar">
                        <a class="navbar-brand" href="#"></a>
                        <img alt="" src="images/profile_picture.jpg" class="profilepic" height="120" width="120"></img>
                        <div class="input-group col-sm-9">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping">@</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
                        </div>
                        <div class="input-group">
                            <div class="input-group-append" id="button-addon4" style={{ float: 'left', paddingLeft: '870px' }} >
                                <button class="btn btn-outline-secondary" type="button">Followers</button>
                                <button class="btn btn-outline-secondary" type="button">Following</button>
                            </div>
                        </div>
                    </nav>
                </div>
                </div>
                );
           }
       }
        
export default ProfileData;