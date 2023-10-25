# Backend

## Drupal (AWIN & AW's Publications)
The aim of this section is to provide the user with the definitions found within the scope of AWIN's backend (Drupal). It is specifically regarding provisioning access to AW's publications and the AWIN data tool.

### Role
Gives a user permission to view content from specific content sources and/or permission to access restricted pages. (e.g., AWST or AWIN)
### Subscription
Paid or controlled access to all the content sources and data that are included with the subscription for a specified period (e.g., Aviation Week & Space Technology)

### Bundled Products
Paid access to a collection of subscriptions for a specified period (e.g., AWIN – Premium)

Important notes:
- A user can have any number of roles that unlock content, data and views 
- A user can have multiple subscriptions
- A user can have multiple bundled products 
- When a user has multiple AWIN bundled products there is a hierarchy that kicks in that gives them the highest-level access they can get based on the bundles in their account and selects the highest-level dashboard as their homepage.  For example, if a user has AWIN Premium, AWIN Military and Aviation Daily, they will get access to everything because of the AWIN Premium and will start at the AWIN Premium dashboard even though AWIN Military and Aviation Daily each have a dashboard.
- When a user has multiple AWIN bundles it is often because of migrated roles from previous applications.
- As an example of role assignment by subscription or bundle, a 2subscriber to AWIN Premium effectively gets all roles so nothing that is restricted by role will be inaccessible to them.  A subscriber to Aviation Week & Space Technology only gets the AWST role so they can see freemium content, and anything gated as Aviation Week & Space technology within the last year.
- We have open ticket to consolidate AVC, AVW, AVZ and AST into AWST.

## Roles & Access
| Roles        | Access |
| ------------ | ------ |
| AWST         |this role represents digital access to Aviation Week & Space Technology articles published within the last 365 days (rolling).  It also includes access to the Aviation Week & Space Technology archive.|
| BCA          |this role represents digital access to Business & Commercial Aviation articles and the online edition published using Turtl.|
| DTE          |this is a legacy role that was previously a standalone subscription. |
| MRO          |this is qualified access to Inside MRO digital content.|
| STU          |this role represents digital access to Aviation Week & Space Technology for qualified students.        |
| ATW          |this is qualified access to Air Transport World digital content.|
| AST          |this is a legacy role that was primarily used for the AWST app that was retired.       |
| AVC          |this is a legacy role for AWST online access only. (ADVANTAGE)|
| AVW          |this is a legacy role for AWST print and online access.  (ADVANTAGE)|
| AVZ          |this is a legacy role for AWST online access only. (ADVANTAGE)|
| AWR          |this a legacy role for AWIN MRO.|
| CJF          |this is a legacy role for Commercial Jet Fleet.|
| AWIN         |this is a special role that does the following: Triggers the white header AWIN experience. Allows access to content and pages that are restricted to AWIN ONLY (e.g., dashboards, advanced search)Allows access to content and pages that are restricted to AWIN ONLY (e.g., dashboards, advanced search)|
| AWB          |this role represents AWIN – Business Aviation and includes content from BCA and The Weekly of Business Aviation.|
| AWC          |this role represents AWIN – Commercial Aviation and includes content from Aviation Week & Space Technology and Aviation Daily.  It also includes access to the Aviation Week & Space Technology archive|
| AWM          |this role represents AWIN – Military and includes content from Aviation Week & Space Technology and Aerospace Daily & Defense Report.  It also includes access to the Aviation Week & Space Technology archive|
| AWN          |this role represents our highest-level access, AWIN – Premium, and effectively includes all non-admin roles within the application.  It also includes access to the Aviation Week & Space Technology archive|
| ATW Plus     |this is a legacy role that was previously a standalone subscription.  Any content that was restricted to this role is accessible to AWIN Premium, Boeing AWIN – Premium, AWIN – Commercial and AWIN – Civil only.|
| MRP          |this is a legacy role that represented MRO Prospector before that product was moved to GoodData.  It no longer controls any access.|
| ASD          |this role represents a subscription to Aerospace Daily & Defense Report.|
| AVD          |this role represents a subscription to Aviation Daily.|
| BAV          |this role represents a subscription to The Weekly of Business Aviation.|
| SPNX         |this role represents a subscription to SpeedNews.|
| AWIN IP User |this is a special role that is used by IP authentication to allow someone that inbound from a whitelisted IP to be logged in.  Each Group that is IP authenticated has a single AWIN IP User to log users in to a dashboard that has the company logo and access to register for MyAWIN.|
| Boeing_AWN   |This role represents the Boeing AWIN Premium subscription.  We created a special Boeing AWIN Premium subscription so that we could customize the dashboard for Boeing users only.  It also includes access to the Aviation Week & Space Technology archive |
| AWL          |this role is a grandfathered, legacy role that represents AWIN – Civil, which is the current AWIN – Commercial plus BCA and The Weekly of Business Aviation.  It also includes access to the Aviation Week & Space Technology archive   |
| AAM          |this role represents a subscription to Advanced Air Mobility Report.|
