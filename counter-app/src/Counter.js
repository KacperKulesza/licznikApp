import React, { Component } from "react";

class Counter extends Component{
    state={
        count: 0
    }

    render(){
        return(
            <>
                <span>{this.formatCount()}</span>
                <button>K_I_R_I_B_A_T_I</button>
            </>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}


export default Counter