import React from 'react';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            prdList: [
                { id: 1, name: "A" }, 
                { id: 2, name: "B" }, 
                { id: 3, name: "C" }
            ]
        }
    }
    render() {
        const _this = this.state;
        return (
            <div>
                <p>{_this.name} Dashboard</p>
                <ul>
                    {_this.prdList.map(d => <li key={d.id}>{d.name}</li>)}
                </ul>
            </div>
        )
    }
}