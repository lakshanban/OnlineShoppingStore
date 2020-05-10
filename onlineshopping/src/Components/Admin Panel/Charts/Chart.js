import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React, {Component} from "react";

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 40, pv: 240, amt: 200},
        {name: 'Page C', uv: 10, pv: 340, amt: 20}
        ];

const renderLineChart = (
    <LineChart width={500} height={400} data={data} >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
);

class Chart extends Component {
        render() {
                return (
                    renderLineChart
                );
        }
}

export default Chart;
