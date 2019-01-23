import React from 'react';
class HeaderComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'LightBlue'}}>
                    <a class="navbar-brand" href="#">
                        <img src="images/travel_logo.jpg" width="60" height="60" class="d-inline-block align-center" alt=""></img>
                        TravelBlog
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">YourTravelBlog<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="#">Photos</a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="#">Followers</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search Travel Blog" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <div class="text-right">
                            <button class="btn-info btn">Account</button>
                        </div> 
                    </div>
                </nav>
            </div>
                );
            }
        }
         
export default HeaderComponent;

