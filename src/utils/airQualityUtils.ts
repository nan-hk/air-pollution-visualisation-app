import {AdvancedFiltersTypes} from "types/AdvancedFiltersTypes";
import AirQualityUTDTypes from "types/AirQualityUTDTypes";

export const getFilterQuery = (filters: AdvancedFiltersTypes) => {
  var qs = "";
  const filterParams: AdvancedFiltersTypes = filters
  for(var key in filterParams) {
      var val = filterParams[key  as keyof AdvancedFiltersTypes];
      if(val) {
        qs += encodeURIComponent(key) + "=" + encodeURIComponent(val).trim() + "&";
      }
  }
  if (qs.length > 0){
    qs = qs.substring(0, qs.length-1);
    return qs;
  } else {
   return '';
  }
}

export const formatResponse = (res: any) => {
  return JSON.stringify(res, null, 2);
};

export const groupedByComponents = (data: Array<AirQualityUTDTypes>) => {
  if(data) {
    const groupedByComponent = Object.values(data?.reduce((acc: any, airQuality) => {
      const component = airQuality.component;
      (acc[component] = acc[component] || []).push(airQuality);
      return acc;
    }, {}));

    return groupedByComponent as AirQualityUTDTypes[][];
  } else {
    return [];
  }
};

export const groupByComponentAndZone = (arr: Array<AirQualityUTDTypes>) => {
  if(arr) {
    const result = Object.values(arr.reduce((acc: any, val) => {
      var key = val.component+ '|' + val.zone;
      if (!acc[key]) acc[key] = val;
      else {
        acc[key].value += val.value;
      }
      return acc;
    }, []));
    return result as AirQualityUTDTypes[];
  } else {
    return [];
  }
}