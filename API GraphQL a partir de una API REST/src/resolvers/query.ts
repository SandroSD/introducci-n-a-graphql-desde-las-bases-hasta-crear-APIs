import { IResolvers } from 'graphql-tools';
import { dataSources } from '../data';

const query: IResolvers = {
    Query: {
        async seasonsList(__: void, _: any, { dataSources }) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(__: void, { year }, { dataSources }) {
            return await dataSources.races.getYear(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        },
        async raceSelect(__: void, { year, round }, { dataSources }) {
            return await dataSources.races.getYearRound(year, round ).then(
                (data: any) => data.MRData.RaceTable.Races[0]
            );
        },
        async historyDrivers(__: void, { pageElements, page}, { dataSources }) {
            return await dataSources.drivers.getDrivers(pageElements, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYear(__: void, { year }, { dataSources }) {
            return await dataSources.drivers.getDriversByYear(year).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYearAndRound(__: void, { year, round }, { dataSources }) {
            return await dataSources.drivers.getDriversByYearAndRound(year, round).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driverSelect(__: void, { id }, { dataSources }) {
            return await dataSources.drivers.getDriver(id).then(
                (data: any) => data.MRData.DriverTable.Drivers[0]
            );
        },
        async historyCircuits(__: void, { pageElements, page }, { dataSources }){
            return await dataSources.circuits.getCircuits(pageElements, page).then(
                (data: any) => data.MRData.CircuitTable.Circuits
            )
        },
        async circuitSelect(__: void, { id }, { dataSources }) {
            return await dataSources.circuits.getCircuit(id).then(
                (data: any) => data.MRData.CircuitTable.Circuits[0]
            )
        }
    }
};

export default query;