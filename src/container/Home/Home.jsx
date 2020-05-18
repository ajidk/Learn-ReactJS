import React, {Component} from 'react';
// import YouTubeComp from '../../components/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {

    state = ({
        showComponent: true
    })
    
    componentDidMount(){
        this.setState({
            // showComponent:false
        })
    }
    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12"
                    title="Tutorial ReactJS part 1"                
                    desc="Terakhir diperbarui pada 31 Des 2018"
                />
                <YouTubeComp 
                    time="9.42"
                    title="Tutorial ReactJS part 2"                
                    desc="Terakhir diperbarui pada 12 Feb 2019"
                />
                <YouTubeComp 
                    time="5.14"
                    title="Tutorial ReactJS part 3"                
                    desc="Terakhir diperbarui pada 20 Jan 2020"
                />
                <YouTubeComp /> */}
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    : null
                }
            </div>
        )
    }
}

export default Home;