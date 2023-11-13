import {
  filterByAreas,
  filterByComponents,
  filterInvalid,
  filtersByStations,
  setFilters
} from "components/filters/advancedFiltersSlice";
import {useAppDispatch, useAppSelector} from "hooks";
import React, {FC, useEffect, useState} from "react";
import {AdvancedFiltersTypes} from "types/AdvancedFiltersTypes";
import './AdvancedFilters.css';

interface Props {
  setFiltersQuery: (filters: AdvancedFiltersTypes) => void
}

const AdvancedFilters :  FC<Props> = ({setFiltersQuery}) => {
  const dispatch = useAppDispatch();
  const {filters} = useAppSelector((state) => state.advancedFilters)

  const [areas, setAreas] = useState<string | null>(null);
  const [components, setComponents] = useState<string | null>(null);
  const [stations, setStations] = useState<string | null>(null);
  const [showinvalid, setShowinvalid] = useState<string | null>(null);

  useEffect(() => {
    setFiltersQuery(filters)
  }, [filters]);

  useEffect(() => {
    const filterObj = {
      areas,
      components,
      stations,
      showinvalid
    }
    dispatch(setFilters(filterObj))
  }, [areas, components, stations, showinvalid]);

  return (
    <div className="filter-bar">
      <div className="tooltip">
        <input
          type="text"
          name="name"
          value={filters.areas  || ''}
          onChange={e => {
            setAreas(e.target.value)
            dispatch(filterByAreas(e.target.value))

          }}
          placeholder="Areas"
          className="input"
        />
        <span className="tooltiptext">Bruk ";" for å filtrere på mer enn en av gangen.</span>
      </div>

        <div className="tooltip">
          <input
            type="text"
            name="capital"
            value={filters.components  || ''}
            onChange={e => {
              setComponents(e.target.value)
              dispatch(filterByComponents(e.target.value))
            }}
            placeholder="Components"
            className="input"
          />
          <span className="tooltiptext">Bruk ";" for å filtrere på mer enn en av gangen.</span>
        </div>

          <div className="tooltip">
            <input
              type="text"
              name="capital"
              value={filters.stations  || ''}
              onChange={e => {
                setStations(e.target.value)
                dispatch(filtersByStations(e.target.value))
              }}
              placeholder="Stations"
              className="input"
            />
            <span className="tooltiptext">Bruk ";" for å filtrere på mer enn en av gangen.</span>
          </div>

            <div className="tooltip">
              <select
                value={filters.showinvalid  || ''}
                onChange={e => {
                  setShowinvalid(e.target.value)
                  dispatch(filterInvalid(e.target.value))
                }}
                className="input">
                <option value="">Default</option>
                <option value="false">Valid</option>
                <option value="true">Invalid</option>
              </select>
            </div>
    </div>
  )
}

export default AdvancedFilters;