---
date: 2017-05-22T15:31:29.000+00:00
title: Glossary
weight: "200"
last: true

---
### Absolute Project Progress

This value indicates how much a project is advanced since its beginning. For example, a project with:

* Budget days: **200**;
* Last project status: **40**;

Has an absolute project progress of: **( 200 - 40 ) / 200 * 100 = 80 % .**

### Bluesky

It represents the value you think is missing in order to reach an hypothetical overall value.

For example: if I have an actual value of 5 but I know that, in a particular moment in time, actual value will reach the final value of 7, then I can use a Bluesky of 2.

This is a theoretical definition, look at the context to find more accurate information.

### Budget Consumption

This value indicates, for a project, the percentage of the budget already used. 
For a project with status compiled as **completed percentage**, budget consumption is calculated by comparing budget costs to timesheet costs (derived from employees' level cost). 

For instance, a project with:

* Budget days: **200**
* Junior budget days: **160**
* Senior budget days: **40**
* Last week timesheet: **10** junior hours and **20** senior hours
* Junior cost per hour: **100**
* Senior cost per hour: **150**

Has budget costs of **160 * 100 + 40 * 150 = 22.000** and timesheet costs of **10 * 100 + 20 * 150 = 4.000**. 
This leads to a budget consumption of **4.000 / 22.000 * 100 = 18 %**.

The situation is different for projects with status **auto** or compiled as **work days to complete**. In this case budget consumption is calculated by comparing timesheet hours and budget days. 

For instance, a project with:

* Budget days: **200**;
* Last week timesheet hours: **80**;

Has a budget consumption of: **80 / 200 * 100 = 40 %**.

Project status compile mode can be assigned for single job order category in [company settings](/settings/index#company).

### Expected Value

This value indicates the estimated value of a project, weighed on its probability.

### Job Order

It's a code which identifies a project inside a company, which may not be unique.

### Production Value

This value indicates _how much a project has produced_ at a specific moment in time. This is calculated by multiplying the project's value for the project's percentage of completion (obtained from the Project Status).For example, a project with:

* Budget days: **100**;
* Last project status: **40**;
* Project's value: **10 K**;

Has a production value of: **10 K * ( ( 100 - 40 ) / 100 )**.

### Purchase Order (PO)

It's a commercial document and first official offer issued by a buyer to a seller, indicating types, quantities, and agreed prices for products or services. It is used to control the purchasing of products and services from external suppliers.

If a seller accepts a buyer PO, a contract is created between them.

### Relative Project Progress

This value indicates how much a project is advanced between two weeks, it's calculated as the difference between the project statuses of the the two given weeks.

### Revenue Pipeline

This value is the sum of all the pipeline projects' expected value.

### Roadrunner Index (RRI)

This value indicates, for a given week, the ratio between the project's progress and [timesheet](/friday/index#timesheet):

* If ratio is **greater than 1**: last week an hour of work led to a project's progress greater than one hour. This means that project advanced faster than expected;
* If ratio is **equal to 1**: last week project's progress (based on Project Status) was consistent with the worked hours (based on Timesheet);
* If ratio is **lower than 1**: last week an hour of work led to a project's progress lower than one hour. This means that project advanced slower than expected.

_The perfect managed project has a constant RRI of 1_.

### Wasted Hours

Let's say Alice is planned 4 hours this week into project ACME but she **doesn't work at all** or she works on the project R&D which has a **non chargeable** [job order category](/settings/index#company).

Those 4 hours are considered *wasted* by the end of the week, because Alice was supposed to produce 4 hours of "chargeable" work (that is work on projects which can be charged to a client) but this did not happen.

Wasted hours can't be planned anymore.

If Alice had worked 4 hours for another chargeable project, those hours wouldn't be considered wasted and they would be available again for the project ACME by the end of the week.

**You can disable this *wasted* hours mechanism via the dedicated option in the [company section](/settings/index#company)**.