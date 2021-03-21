// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
   loginApiBaseUrl: 'https://emislogin.tnschools.gov.in/emis_login/api/login',
 //   apiBaseUrl: 'http://localhost/emis-code',
   // apiBaseUrl: 'https://rte1.tnschools.gov.in/stagingelearn',
   // apiBaseUrl: 'http://15.206.4.200/',
   //apiBaseUrl: 'http://localhost/emis-code/api/e-learn/',
   readingFileApi:'https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl',
   apiBaseUrl: 'http://13.232.216.80/api/e-learn/',
   authorization : 'EMIS_web@2019_api',
   production: false,
   environment: 'LOCAL',
   showEnvironment: true
};
