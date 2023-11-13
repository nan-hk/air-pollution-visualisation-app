import {AirQualityPieChart} from "components/graphs/graph/AirQualityPieChart";
import {AirQualityBarChart} from "components/graphs/graph/AirQualityBarChart";
import React, {FC} from "react";
import AirQualityUTDTypes from "types/AirQualityUTDTypes";
import './AirQualityVisualisationDashboard.css';
import {groupByComponentAndZone, groupedByComponents} from "utils/airQualityUtils";

interface Props {
  data: Array<AirQualityUTDTypes>
}

export const AirQualityVisualisationDashboard :  FC<Props> = ({data}) =>  {

  return (
    <div className="visualisation-dashboard">
      <>
        <h2>Visualisation chart for data comparison between component and zone</h2>
        <AirQualityPieChart data={groupByComponentAndZone(data)} />
        <hr/>
        {groupedByComponents(data).map((data1, index) => {
          return(
            <>
            <h2>{`Visualisation chart for ${data1[0].component}`} </h2>
            <AirQualityBarChart key={index} arrValue={data1}/>
            </>
          )
        })}
      </>
    </div>
  );
}