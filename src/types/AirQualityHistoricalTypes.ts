interface TimeStampValue {
  fromTime: string,
  toTime: string,
  value: number,
  qualityControlled: boolean,
  index: number,
  color: string
}

export interface AirQualityHistoricalTypes {
  id: number,
  zone: string,
  municipality: string,
  area: string,
  station: string,
  eoi: string,
  type: string,
  component: string,
  latitude: number,
  longitude: number,
  timestep: number,
  isVisible: boolean,
  unit: string,
  values: Array<TimeStampValue>
}