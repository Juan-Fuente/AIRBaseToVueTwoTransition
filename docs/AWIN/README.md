# AWIN

## Objective of the Product

AWIN has been around for 20 years - It's known as our one-stop shop for all of AW's editorial products that focus on the programs and technologies shaping the market. Including continuously updated databases that cover:

- A historical and present-day article base that is categorized by publications specializing in the industry sector or topic.
- A continually updated, high-level fleet database.
- A Program Database, which includes program summaries, suppliers list, and current operators (if applicable.)
- A Knowledge Center that holds exclusive content only found within AWIN.

## Access/Authentication

Access Link: [awin.avationweek.com](https://awin.avationweek.com)

### Individuals or Small Groups

Once provisioned, AWIN access is a ready-to-go solution that needs the end-user to simply use their given login credentials at [awin.avationweek.com](https://awin.avationweek.com) to get started.

### Large or Enterprise Groups

AW's authentication service, Auth0, provides a number of mechanisms depending on our customer's requirements. Should a customer request to implement the following authentication methods, please reach out to Ken Laio, Rick Little & Dan Bejarano to start this process:

### Passwordless

This replaces the password in the login flow. The user account must already exist.

#### Pre-condition 

User must have already created a user account in [aviationweek.com](https://aviationweek.com), either by the user themselves on the MyAWIN page OR we bulk-upload a list that the customer provides.

### OpenAthens 
[OpenAthens](https://openathens.net) is an identity service that streamlines the process for customers.

#### Pre-conditions

Customer licenses OpenAthens as their IdP (identity provider). Customer and Aviationweek exchange metadata URLs. Aviation Week sends customers a static connection URL.
The customer sets this AWIN connection URL on their resources page.

#### Level of effort

This takes 2-3 weeks of testing in staging and prod environments. The customer also tests on their end.

### SAML

SAML is a mature protocol for single sign-on SSO. OpenAthens is built using SAML. We can configure a customer for generic SAML-based authentication, but it takes a bit more work.

#### Pre-conditions

Customer and Aviationweek exchange metadata URLs. Aviation Week sends customers a static connection URL. The customer sets this AWIN connection URL on their resources page.

### EZProxy

[EZProxy](https://www.oclc.org/en/ezproxy.html) is another identity service that streamlines the process for customers.

#### Pre-condition 

Customer licenses EZProxy, either as a cloud service or implements their own, as their IdP (identity provider).

### Timeouts

When the user logs in, the session is active for seven days (10080 minutes exactly). At 10081st minute, the user will revert to Guest. When the user clicks Login, the session resumes automatically.
All active sessions will automatically log out after fourteen days (20160 minutes exactly). In the 20161st minute, users will have to log in again regardless of their activity.

## Scope

### Intelligence Bundles

- AWIN - **Premium**
- AWIN - **Aerospace and Defense**
- AWIN - **Business Aviation**
- AWIN - **Commercial Aviation**

### Intelligence Bundles Comparison

|                                      | PREMIUM | COMMERCIAL | AEROSPACE & DEFENSE | BUSINESS AVIATION |
| ------------------------------------ | ------- | ---------- | ------------------- | ----------------- |
| **EDITORIAL PRODUCTS**               |         |            |                     |                   |
| Aviation Week & Space Technology     | X       | X          | X                   |                   |
| AW&ST - MRO Edition / Inside MRO     | X       | X          | X                   |                   |
| Aerospace Daily & Defense Report     | X       |            | X                   |                   |
| Aviation Daily                       | X       | X          |                    |                   |
| Advanced Air Mobility Report         | X       |            |                     |                   |
| SpeedNews                            | X       | X          |                     |                   |
| The Weekly Of Business Aviation      | X       |            |                     | X                 |
| Business & Commercial Aviation (BCA) | X       |            |                     | X                 |
| Air Transport World (ATW)            | X       | X          |                     |                   |
| **DATA**                             |         |            |                     |                   |
| Organizations Database               | X       | X          | X                   | X                 |
| Personnel Database                   | X       | X          | X                   | X                 |
| Products & Services Database         | X       | X          | X                   | X                 |
| Program Suppliers Database           | X       | X          | X                   | X                 |
| Commercial Aviation Fleet Data       | X       | X          |                     |                   |
| Military Fleet Data                  | X       |            | X                   |                   |
| Business Aviation Fleet Data         | X       |            |                     | X                 |
| **RESOURCES**                        |         |            |                     |                   |
| 100+ Year AW&ST Archive              | X       | X          | X                   | X                 |
| Program profiles                     | X       | X          | X                   | X                 |
| Knowledge Center                     | X       | X          | X                   | X                 |
| Source Book & Specs                  | X       | X          | X                   | X                 |
| Workforce Report                     | X       | X          | X                   | X                 |
| U.S. Budget Report                   | X       | X          | X                   |                   |
| **ARCHIVE PRODUCTS**                 |         |            |                     |                   |
| AW&ST - Defense Edition              | X       |            | X                   |                   |
| Defense Technology International     | X       |            | X                   |                   |
| Overhaul & Maintenance               | X       | X          | X                   |                   |

### Update Frequency

|                  | DAILY | BI-WEEKLY |
| ---------------- | ----- | --------- |
| **CONTENT**      |       |           |
| Articles         | X     |           |
| Company Data     |       | X         |
| Fleet Data       |       | X         |
| Knowledge Center | X     |           |

### Exports

|                         | PDF | EXCEL | MYAWIN ALERTS |
| ----------------------- | --- | ----- | ------------- |
| **CONTENT**             |     |       |               |
| Articles                | X   |       | X             |
| Company Profiles        |     | X     |               |
| Program Profiles        |     | X     |               |
| Company Listings        |     | X     |               |
| Supplier Listings       |     | X     |               |
| High-level Fleet Report |     | X     |               |
| Canned Reports          |     | X     |               |
| Presentations           | X   |       |               |
| White Papers            | X   |       |               |

## Features

### RSS

A standardized system for the distribution of content from our online publications. You can offer these to your customers at **_*no additional fee.*_** The RSS will add valuable functional benefits and drive
traffic (logins) to AWIN.

The RSS will display the headline and opening words of the article.

AWIN's RSS feeds match AWIN subscriptions packages are now available to customers:

| Packages/Publications            | RSS link                                                                    |
| -------------------------------- | --------------------------------------------------------------------------- |
| AWIN Premium                     | https://aviationweek.com/awn/rss-awin-premium-intelligence-bundle           |
| AWIN Commercial                  | https://aviationweek.com/awn/rss-awin-commercial-intelligence-bundle        |
| AWIN Aerospace & Defense         | https://aviationweek.com/awn/rss-awin-aerospace-defense-intelligence-bundle |
| AWIN Business                    | https://aviationweek.com/awn/rss-awin-business-intelligence-bundle          |
| Aviation Daily                   | https://aviationweek.com/taxonomy/term/1081/feed                            |
| Aviation Week & Space Technology | https://aviationweek.com/taxonomy/term/1066/feed                            |
| Aerospace Daily & Defense Report | https://aviationweek.com/taxonomy/term/1076/feed                            |
| The Weekly of Business Aviation  | https://aviationweek.com/taxonomy/term/1091/feed                            |
| Air Transport World              | https://aviationweek.com/taxonomy/term/1151/feed                            |
| SpeedNews                        | https://aviationweek.com/taxonomy/term/35721/feed                           |
| Advanced Air Mobility            | https://aviationweek.com/taxonomy/term/148386/feed                          |

Typically, a customer can integrate the RSS into their own browser, their Portal/Intranet, into an RSS Reader App.
(there are hundreds, Feedly is great) or into their CRM.

<!-- ### Roles, Subscriptions & Bundled Groups

Definitions:

### Role
Gives a user permission to view content from specific content sources and/or permission to access restricted pages (e.g., AWST or AWIN)

### Subscription
Paid or controlled access to all the content sources and data that are included with the subscription for a specified period (e.g., Aviation Week & Space Technology)

## Bundled Products
Paid access to a collection of subscriptions for a specified period (e.g., AWIN – Premium)

# Important Notes:
- A user can have any number of roles that unlock content, data and views.
- A user can have multiple subscriptions.
- A user can have multiple bundled products.
- When a user has multiple AWIN bundled products there is a hierarchy that kicks in that gives them the highest-level access they can get based on the bundles in their account and selects the highest-level dashboard as their homepage.  For example, if a user has AWIN Premium, AWIN Military and Aviation Daily, they will get access to everything because of the AWIN Premium and will start at the AWIN Premium dashboard even though AWIN Military and Aviation Daily each have a dashboard.
- When a user has multiple AWIN bundles it is often because of migrated roles from previous applications.
- As an example of role assignment by subscription or bundle, a subscriber to AWIN Premium effectively gets all roles so nothing that is restricted by role will be inaccessible to them.  A subscriber to Aviation Week & Space Technology only gets the AWST role so they can see freemium content, and anything gated as Aviation Week & Space technology within the last year.
- We have open ticket to consolidate AVC, AVW, AVZ and AST into AWST.

### AWST
This role represents digital access to Aviation Week & Space Technology articles published within the last 365 days (rolling).  It also includes access to the Aviation Week & Space Technology archive.

### BCA
This role represents digital access to Business & Commercial Aviation articles and the online edition published using Turtl.

### DTE
This is a legacy role that was previously a standalone subscription. 

### MRO
This is qualified access to Inside MRO digital content.     

### STU
This role represents digital access to Aviation Week & Space Technology for qualified students.   

### ATW
This is qualified access to Air Transport World digital content.

### AST
This is a legacy role that was primarily used for the AWST app that was retired.   

### AVC
This is a legacy role for AWST online access only. (ADVANTAGE)

### AVW
This is a legacy role for AWST print and online access.  (ADVANTAGE)

### AVZ
This is a legacy role for AWST online access only. (ADVANTAGE)

### AWR
This a legacy role for AWIN MRO.  

### CJF
This is a legacy role for Commercial Jet Fleet.

### AWIN
This is a special role that does the following:
- 1. Triggers the white header AWIN experience
- 2. Allows access to content and pages that are restricted to AWIN ONLY (e.g., dashboards, advanced search)

### AWB
This role represents AWIN – Business Aviation and includes content from BCA and The Weekly of Business Aviation.

### AWC
– this role represents AWIN – Commercial Aviation and includes content from Aviation Week & Space Technology and Aviation Daily.  It also includes access to the Aviation Week & Space Technology archive.

### AWM
This role represents AWIN – Military and includes content from Aviation Week & Space Technology and Aerospace Daily & Defense Report.  It also includes access to the Aviation Week & Space Technology archive.

### AWN
This role represents our highest-level access, AWIN – Premium, and effectively includes all non-admin roles within the application.  It also includes access to the Aviation Week & Space Technology archive.

### ATW Plus
This is a legacy role that was previously a standalone subscription.  Any content that was restricted to this role is accessible to AWIN Premium, Boeing AWIN – Premium, AWIN – Commercial and AWIN – Civil only.       

### MRP
This is a legacy role that was previously a standalone subscription.  Any content that was restricted to this role is accessible to AWIN Premium, Boeing AWIN – Premium, AWIN – Commercial and AWIN – Civil only.     

### ASD
This role represents a subscription to Aerospace Daily & Defense Report. 

### AVD
This role represents a subscription to Aviation Daily.

### BAV
This role represents a subscription to The Weekly of Business Aviation.

### SPNX
This role represents a subscription to SpeedNews. -->