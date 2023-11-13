import {
  AirQualityVisualisationDashboard
} from "components/graphs/AirQualityVisualisationDashboard";
import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import AirQualityIndexService from "services/AirQualityIndexService";
import {AdvancedFiltersTypes} from "types/AdvancedFiltersTypes";
import AirQualityUTDTypes from "types/AirQualityUTDTypes";
import {formatResponse, getFilterQuery} from "utils/airQualityUtils";
import AdvancedFilters from "components/filters/AdvancedFilters";
import './AirQualityUTD.css';

function AirQualityUTD () {

  const [getLoadingData, setLoadingData] = useState<string | null>(null);
  const [getAirQualityData, setAirQualityData] = useState<string | null>(null);
  const [filtersQuery, setFiltersQuery] = useState<AdvancedFiltersTypes>({});

  const { isLoading: isLoadingAirQualityData, refetch: getAirQuailtyIndexBySearchQuery} =
    useQuery<AirQualityUTDTypes[], Error>(
    "query-tutorials-by-search-query",
    async () => {
      const filterQuery = getFilterQuery(filtersQuery)
      return await AirQualityIndexService.findBySearchQuery(filterQuery);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        setAirQualityData(formatResponse(res));
      },
      onError: (err: any) => {
        setAirQualityData(formatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isLoadingAirQualityData) setLoadingData("loading...");
  }, [isLoadingAirQualityData]);

  useEffect(() => {
    try {
      getAirQuailtyIndexBySearchQuery();
    } catch (err) {
      setAirQualityData(formatResponse(err));
    }
  }, [filtersQuery]);

  return (
    <div className="AirQualityContent">
      <AdvancedFilters setFiltersQuery={setFiltersQuery}/>
      {getLoadingData &&
          <>
              <AirQualityVisualisationDashboard data={getAirQualityData && JSON.parse(getAirQualityData)}/>
          </>
      }
    </div>
  )
}

export default AirQualityUTD;