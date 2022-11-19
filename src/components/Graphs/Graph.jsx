import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "../Graphs/graphs.css";

const Graph = (realTimeState) => {
    console.log(realTimeState);

    //Calculate the results using realtimestates data
    //iterate over the results and map the data accordingly in the data
    //array below
    //Each result will have its own object array within the data array below

    const data = [ //Each key in this object is just the name for the data points that are referenced in the Graph component rendered below
        {
          name: '2020-09-20',
          Target1: 4000,
          EstimatedFallRate: 2400,
          OriginalPlannedElevation: 2400,
          Target2: 1460
        },
        {
          name: '2020-09-22',
          Target1: 4000,
          EstimatedFallRate: 1398,
          OriginalPlannedElevation: 2210,
          Target2: 3100
        },
        {
          name: '2020-09-24',
          Target1: 4000,
          EstimatedFallRate: 9800,
          OriginalPlannedElevation: 2290,
          Target2: 2400
        },
        {
          name: '2020-09-26',
          Target1: 4000,
          EstimatedFallRate: 3908,
          OriginalPlannedElevation: 2000,
          Target2: 1400
        },
        {
          name: '2020-09-28',
          Target1: 4000,
          EstimatedFallRate: 4800,
          OriginalPlannedElevation: 2181,
          Target2: 2000
        },
        {
          name: '2020-09-30',
          Target1: 4000,
          EstimatedFallRate: 3800,
          OriginalPlannedElevation: 2500,
          Target2: 1400
        },
        {
          name: '2020-10-02',
          Target1: 4000,
          EstimatedFallRate: 4300,
          OriginalPlannedElevation: 2100,
          Target2: 1780
        },
        {
            name: '2020-10-04',
            Target1: 2000,
            EstimatedFallRate: 1300,
            OriginalPlannedElevation: 3100,
            Target2: 1780
          },
      ];

    return (
        <>
            <div id = "data-graph">
                <h1> GRAPH </h1>
                <LineChart width={1300} height={700} data={data} >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis datakey="test"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Target1" stroke="#000" />
                    <Line type="monotone" dataKey="EstimatedFallRate" stroke="#ff0000" />
                    <Line type="monotone" dataKey="OriginalPlannedElevation" stroke="#1700ff" />
                    <Line type="monotone" dataKey="Target2" stroke="#ff10f0" />
                </LineChart>
            </div>
            <div id = "right-side-tools">
                <div id = "legend">
                    <ul>
                        <li>: Target 1</li>
                        <li>: Estimated Fall Rate</li>
                        <li>: Original Planned Elevation </li>
                        <li>: Target 2</li>
                    </ul>
                </div>
                <div id = "action-buttons">
                    <ul>
                        <li><button> SHARE AS PDF </button></li>
                        <li><button> EXPORT AS </button></li>
                        <li><button> COPY/PASTE </button></li>
                        <li><button> EMAIL </button></li>
                        <li><button> SAVE AS </button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Graph;