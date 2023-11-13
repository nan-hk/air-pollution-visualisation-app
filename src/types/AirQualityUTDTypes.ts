
export default interface AirQualityUTDTypes {
  id: number,
  zone: string,
  municipality: string,
  area: string,
  station: string,
  eoi: string,
  type: string,
  component: string,
  fromTime: string,
  toTime: string,
  value: number,
  unit: string,
  latitude: number,
  longitude: number,
  timestep: number,
  index: number,
  color: string,
  isValid: boolean,
  isVisible: boolean
}