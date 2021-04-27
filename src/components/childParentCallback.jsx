import React from 'react';


class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    handleCallback = (childData) => {
        this.setState({data: childData})
    }

    render(){
        const {data} = this.state;
        return(
            <div>
                <Child parentCallBack = {this.handleCallback}/>
            </div>
        )
    }

}

class Child extends React.Component {

    onTrigger = (event) => {
        this.props.parentCallBack("Data from child");
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onTrigger}>
                    in...
                </form>
            </div>
        )
    }
}



export default Parent;