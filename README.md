# apron-tech-task

**Getting started**

To run the application in a dev environment, clone the repo and run the following commands:

npm install
npm run dev

The mock server is spun up through miragejs and is automatically started when the dev server is initiated.


**Implementation Notes**
Due to time constraints, I focused on the functionality that was core to the defined requirements and applied a pragmatic approach - With more time and input, ideally this application would have incorporate end-to-end testing, error handling, pixel-perfect UI and other best practices. This approach also means there are some inefficiencies or shortcuts taken in order to fulfill the requirements without adding complexity in additional configurations that we would normally see in production apps. In the same vein, I applied patterns that I had used personally before to reduce the chance of error when developing rapidly and acknowledge there may be more modern ways to complete the task, but wanted to minimise the risk of error. 

E2E testing is usually required for production applications, but during the implementation I encountered a number of hurdles using the specified library (Playwright) and as such, the unit testing is not up to the standard that I would usually aim for in an application. After much time was spent trying to iron out some bugs, I thought it would be reasonable for this segment to be left at this point in time and further consultation sought with QA and other SMEs.
 
**Design Notes & Suggestions**
Assume that this design is a sanitised version of the final product, but might be effective to make ‘Users’ more specific. As it’s a bookkeeping list, assume it’s employees - categorising the list might reduce the cognitive load for the user managing the data.
Recommendations for design updates or new features:
- Bulk delete users
- Bulk add users (including option to import from csv or excel file)
- For data integrity (and if using relational database, atomicity), include a meaningful unique key for each user object that’s added - eg. email.
- Instead of asking for user’s age, ask for their DOB and calculate age to reduce need for manual editing in future
- The developer would require more context for an accurate read, but I believe there is opportunity to add another field with role, or link to user profile, for the superuser to access more information (eg. contact details) easily
- Add more gender options for inclusivity
