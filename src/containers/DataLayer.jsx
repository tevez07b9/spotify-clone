import React, { createContext, useContext, useReducer } from "react";

const DataLayerContext = createContext();

function DataLayer({ initialState, reducer, children }) {
	return (
		<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</DataLayerContext.Provider>
	);
}

export const useDataLayerValue = () => useContext(DataLayerContext);

export default DataLayer;
