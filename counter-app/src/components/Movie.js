import React, { component } from 'react';
import { getMovies } from './fake_movies';

class Movie extends Component{

    state = {
        movies: getMovies()
    }

    deleteHandler(id){
        const new_list=this.state.movies.filter(element => movie._id != id);
        this.setState({movies:new_list})
    }

        render(){
            return(
                <>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Delete Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.filter(element =>{
                            return(
                                <tr>
                                    <td>element.title</td>
                                    <td>element.genre.name</td>
                                    <td>element.numberInStock</td>
                                    <td>element.dailyRentalRate</td>
                                    <td><button onClick={() => this.deleteHandler(element._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </>
            )
    }
}