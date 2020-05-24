import React, {Component} from 'react';
import Chart from "../Charts/Chart";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ReactVirtualizedTable from "../Tables/ProductsTable";
import StaticticsTable from "../Tables/StaticticsTable";

class Statistics extends Component {
    render() {
        return (
            <div>
                <h3>statistics</h3>
                <div className="container-lg" >
                    <div  style={{marginBottom: 10}}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <div className="text-center"><h4>Monthly Revenue</h4></div>
                                <Chart/>
                            </Grid>
                            <Grid item xs={6} >
                                <div className="text-center"><h4>Income Table</h4></div>
                                <StaticticsTable/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistics;
