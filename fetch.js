

fetch("https://relay.amazon.com/api/loadboard", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrf-token": "g1ITTEs9Edw4R7Sw/TTQF87xFcZe4GVW8wDRU/Wou1OlAAAAAgAAAABiXnhKcmF3AAAAAIIXF/5ED9rqj+J7i/USjw==",
    "cookie": "sess-time-owpus=2082787201l; sess-id-owpus=133-6639233-6852010; session-id=137-7030345-4380559; ubid-owpus=133-0421406-4363366; sess-token-owpus=iU7M9g8oG+j+FEww7Zk0ybHvmcuU4Pi6tQ3YIzy1gTGEyuZ+FzrwUlxCcidqf8geZUE0bQenokFYT21iVvgsfJlceEcCxyWaCwrrBF7zuAERnjh40moTAv3sb5ez513Sv0vPhwmtpKlY1BN7UUSYVglDxYI+lzhSV8UkvhyFTVHrjLVoSIApBkZ/DVhcWsIuar2KTnaAtSjPLygQQfx+vfg9/dVK6p10; session-id-time=2281077923l; session-token=\"/gyI+AFR41NkclZScx0hRsGjSHb41cMcMV1rUum8lS7LZ5UsPF3Jw+WHr83bo1Pa/vWyjSynWCDQ4ucvNCXMydDsGFEM+A8sfWM6+Trxv3PZpLMVBxXlpa5B7f/icJqN6uZD2fMgA30fqZw1A6qexYu+xYT6whPWbDqpAPBIAEeEfY4ttoOrc5rKt1PX/f1danG2GaJc3FFdqoSmwcpe6+vX5Me8DXU1qiXDnbAkcI0=\"; x-owpus=\"yu7r3?sO31iVzR@dnCOr?2tohEabgLhwdPTKtsoYASvFc9Fhp2RXCWZhUfkuQhX1\"; at-owpus=Atza|IwEBIHoNZmDfltVmOHFrmIS7xVHYtivZoyQowV3Ya6cB62L5sJyA_B17en2bG0pPzy1V0J1yUz4jKPx0i7vgorl-rvSAPSWxWDhj75xwX8QH83mTYdVL8oERyAOx0ahpILZ9VNKJ9gbM5n1ftJF2M40tQy6vDBkHDWsv_75CuBfnooCrTwStrq9-fnohas8c4oYm4Z-9WUqAK9hRJruAti6dc9Gp; sess-at-owpus=\"sn6DLzlckgzvyx6scVpf95UkdGcYLvRedoSn/CSeupU=\"; csm-hit=tb:s-82VTKBAJSEE6AWNX9Y1R|1650358486858&t:1650358487467&adb:adblk_yes",
    "Referer": "https://relay.amazon.com/loadboard/search",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"workOpportunityTypeList\":[\"BLOCK\",\"ONE_WAY\",\"ROUND_TRIP\"],\"originCity\":null,\"startCityName\":null,\"startCityStateCode\":null,\"startCityLatitude\":null,\"startCityLongitude\":null,\"startCityDisplayValue\":null,\"isOriginCityLive\":null,\"startCityRadius\":null,\"destinationCity\":null,\"multiselectDestinationCitiesRadiusFilters\":null,\"exclusionCitiesFilter\":null,\"endCityName\":null,\"endCityStateCode\":null,\"endCityDisplayValue\":null,\"endCityLatitude\":null,\"endCityLongitude\":null,\"isDestinationCityLive\":null,\"endCityRadius\":null,\"startDate\":null,\"endDate\":null,\"minDistance\":null,\"maxDistance\":null,\"minimumDurationInMillis\":null,\"maximumDurationInMillis\":null,\"minPayout\":null,\"minPricePerDistance\":null,\"trailerStatusFilters\":[],\"equipmentTypeFilters\":[],\"equipmentTypeFiltersForTags\":[],\"driverTypeFilters\":[],\"workOpportunityOperatingRegionFilter\":[],\"loadingTypeFilters\":[],\"maximumNumberOfStops\":null,\"workOpportunityAccessType\":null,\"sortByField\":\"startTime\",\"sortOrder\":\"asc\",\"nextItemToken\":0,\"resultSize\":100,\"searchURL\":\"\",\"isAutoRefreshCall\":false,\"notificationId\":\"\",\"auditContextMap\":\"{\\\"rlbChannel\\\":\\\"EXACT_MATCH\\\",\\\"isOriginCityLive\\\":\\\"false\\\",\\\"isDestinationCityLive\\\":\\\"false\\\",\\\"source\\\":\\\"AVAILABLE_WORK\\\"}\"}",
  "method": "POST"
});