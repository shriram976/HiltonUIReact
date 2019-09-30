import React, { Component } from 'react';
export class Room extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedFlag: this.props.selectedFlag,
            selectionRequired: this.props.selectionRequired,
            adultCnt: this.props.adultCnt,
            childCnt: this.props.childCnt
        };
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
        this.onAdultCountChange = this.onAdultCountChange.bind(this);
        this.onChildCountChange = this.onChildCountChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedFlag: nextProps.selectedFlag,
            selectionRequired: nextProps.selectionRequired,
            adultCnt: nextProps.adultCnt,
            childCnt: nextProps.childCnt
        });
    }
    emitStateToTop() {
        this.props.onRoomChange(this.props.roomIndex, this.state);
    }
    onCheckBoxChange(event) {
        this.setState({ selectedFlag: event.target.checked, adultCnt: !event.target.checked?1:this.state.adultCnt, childCnt: !event.target.checked?0:this.state.childCnt }, () => {
            this.emitStateToTop();
        });
        
    }
    onAdultCountChange(event) {
        this.setState({ adultCnt: parseInt(event.target.value)}, () => {
            this.emitStateToTop();
        });        
    }
    onChildCountChange(event) {
        this.setState({ childCnt: parseInt(event.target.value)}, () => {
            this.emitStateToTop();
        });        
    }
    render() {
        
        return <div className="room-section">
                <div className="room-section-header">
                    { this.state.selectionRequired?<input type="checkbox" checked={this.state.selectedFlag} onChange={this.onCheckBoxChange}/>:''}
                      Room { this.props.roomIndex + 1 }
                </div>               
                <div className="guest-info" disabled={ !this.state.selectedFlag }>
                    <div className="adult-section">
                        <label htmlFor="adultNumber">Adults<br/>(18+)</label><br/>
                        <select id="adultNumber" disabled={ !this.state.selectedFlag } value={this.state.adultCnt} onChange={this.onAdultCountChange}>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                        </select>
                    </div>
                    <div className="child-section">
                        <label htmlFor="childNumber">Children<br/>(0-17)</label><br/>
                        <select id="childNumber" disabled={ !this.state.selectedFlag } value={this.state.childCnt} onChange={this.onChildCountChange}>
                            <option value="0"> 0 </option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                        </select>
                    </div>
                </div>
            </div>
    }
}
