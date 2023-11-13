import React, {FC} from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AirQualityUTDTypes from "types/AirQualityUTDTypes";

interface Props {
  arrValue: Array<AirQualityUTDTypes>
}

export const AirQualityBarChart :  FC<Props> = ({arrValue}) =>  {
  return (
            <>
              <ResponsiveContainer width="100%" height="50%">
                <BarChart
                  width={500}
                  height={300}
                  data={arrValue}
                  stackOffset="sign"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="station" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>
        </>
  );
}