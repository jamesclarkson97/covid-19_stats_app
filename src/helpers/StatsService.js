const baseURL = "http://api.coronavirus.data.gov.uk/v1/data?";

export default {
  getData(location, filters) {
    const search =
      baseURL +
      "filters=areaName=" +
      location.areaName +
      ";areaType=" +
      location.areaType +
      '&structure={"date":"date","areaName":"areaName",' +
      filters +
      "}";
    return fetch(search).then((res) => res.json());
  },
};

// API Issues:
// Call using newCasesByPubli, dateshDate, newCasesBySpecimenDate, newAdmissions,
// newDeathsByPublishDate, newDeathsByDeathDate
//
// Nations give all stats, except:
//      // Scotland doesn't give deaths by death date
//      N Ireland doesn't give deaths by death date or cases by specimen date

// Regions only give cases by specimen date, deaths by death date, no admissions

// UTLAs only give cases, not deaths or admissions
//      Scottish UTLAs only give stats for yesterday
//      N Ireland doesn't have any UTLAs

//filters = areaType, areaName, date
//e.g. filters=areaType=nation;areaName=england;date=2020-08-01

//structure =
//e.g. &structure=

// THIS API CALL WORKS FOR NATIONS
// https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=Scotland&structure={%22areaType%22:%22areaType%22,%22code%22:%22areaCode%22,%22areaName%22:%22areaName%22,%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22newDeaths%22:%22newDeathsByPublishDate%22}

// THIS API CALL WORKS FOR REGIONS
// https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=region;areaName=North%20East;date=2020-05-15&structure={%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22date%22:%22date%22,%22newCases%22:%22newCasesBySpecimenDate%22,%22cumulativeCases%22:%22cumCasesBySpecimenDate%22,%22newDeaths%22:%22newDeathsByDeathDate%22,%22cumulativeDeaths%22:%22cumDeathsByDeathDate%22}
